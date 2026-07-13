import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Trophy,
  Sparkles,
  RefreshCw,
  AlertTriangle,
  Moon,
  Shield,
  Compass,
  Heart,
  BookOpen,
  History,
  GraduationCap,
  Globe,
  HelpCircle,
  Play,
  RotateCcw
} from 'lucide-react';
import { playSound } from '../BuzzerAndTimer';
import { WHEEL_QUESTIONS_DB, WheelQuestion } from '../../data/games/wheelQuestions';

// Categories mapping to icons, colors and gradient styles
const CATEGORY_META = {
  'İnanç': {
    icon: <Shield className="w-4 h-4" />,
    color: '#3b82f6',
    gradient: 'from-blue-500 to-sky-500',
    bg: 'bg-blue-50 dark:bg-blue-950/20',
    border: 'border-blue-200 dark:border-blue-800'
  },
  'İbadet': {
    icon: <Compass className="w-4 h-4" />,
    color: '#10b981',
    gradient: 'from-emerald-500 to-teal-500',
    bg: 'bg-emerald-50 dark:bg-emerald-950/20',
    border: 'border-emerald-200 dark:border-emerald-800'
  },
  'Ahlak': {
    icon: <Heart className="w-4 h-4" />,
    color: '#eab308',
    gradient: 'from-amber-400 to-yellow-500',
    bg: 'bg-amber-50/60 dark:bg-amber-950/15',
    border: 'border-amber-200 dark:border-amber-800'
  },
  'Siyer': {
    icon: <BookOpen className="w-4 h-4" />,
    color: '#8b5cf6',
    gradient: 'from-purple-500 to-indigo-500',
    bg: 'bg-purple-50 dark:bg-purple-950/20',
    border: 'border-purple-200 dark:border-purple-800'
  },
  'Medeniyet': {
    icon: <GraduationCap className="w-4 h-4" />,
    color: '#f97316',
    gradient: 'from-orange-500 to-amber-500',
    bg: 'bg-orange-50 dark:bg-orange-950/20',
    border: 'border-orange-200 dark:border-orange-800'
  },
  'Genel Kültür': {
    icon: <Globe className="w-4 h-4" />,
    color: '#ec4899',
    gradient: 'from-pink-500 to-rose-500',
    bg: 'bg-pink-50 dark:bg-pink-950/20',
    border: 'border-pink-200 dark:border-pink-850'
  },
  'Pas 💤': {
    icon: <Moon className="w-4 h-4" />,
    color: '#64748b',
    gradient: 'from-slate-500 to-slate-600',
    bg: 'bg-slate-50 dark:bg-slate-900',
    border: 'border-slate-200 dark:border-slate-800'
  },
  'İflas 💥': {
    icon: <AlertTriangle className="w-4 h-4" />,
    color: '#ef4444',
    gradient: 'from-rose-600 to-red-700',
    bg: 'bg-red-50 dark:bg-red-950/20',
    border: 'border-red-200 dark:border-red-900'
  }
};

type CategoryKey = keyof typeof CATEGORY_META;

const WHEEL_CATEGORIES: CategoryKey[] = [
  'İnanç',
  'İbadet',
  'Ahlak',
  'Siyer',
  'Medeniyet',
  'Genel Kültür',
  'Pas 💤',
  'İflas 💥'
];

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  angle: number;
  speed: number;
}

export const SoruCarkiGame: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const [gameStatus, setGameStatus] = useState<'intro' | 'playing' | 'ended'>('intro');
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [rotation, setRotation] = useState<number>(0);
  const [selectedCat, setSelectedCat] = useState<CategoryKey | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<WheelQuestion | null>(null);
  const [score, setScore] = useState<number>(0);
  const [round, setRound] = useState<number>(1);
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [showAnswerFeedback, setShowAnswerFeedback] = useState<boolean>(false);
  const [usedQuestionIds, setUsedQuestionIds] = useState<string[]>([]);
  const [pointerVibrate, setPointerVibrate] = useState<boolean>(false);
  const [isShaking, setIsShaking] = useState<boolean>(false);
  const [confettiParticles, setConfettiParticles] = useState<Particle[]>([]);

  const lastSegmentRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleStart = () => {
    playSound('complete');
    setScore(0);
    setRound(1);
    setSelectedCat(null);
    setCurrentQuestion(null);
    setSelectedOpt(null);
    setShowAnswerFeedback(false);
    // Persist usedQuestionIds across multiple games so questions don't repeat
    setGameStatus('playing');
  };

  // Cubic Bezier Ease Out Quint function for realistic slow down physics
  const easeOutQuint = (t: number) => 1 + (--t) * t * t * t * t;

  // Spin dynamic animations and physics
  const handleSpin = () => {
    if (isSpinning || showAnswerFeedback) return;
    playSound('tick');
    setIsSpinning(true);
    setSelectedCat(null);
    setCurrentQuestion(null);
    setSelectedOpt(null);
    setShowAnswerFeedback(false);

    const startRotation = rotation;
    // En az 6 tam tur dönüp rastgele bir yere inmesi için
    const spinDegrees = 2160 + Math.floor(Math.random() * 360);
    const targetRotation = startRotation + spinDegrees;
    
    const startTime = performance.now();
    const duration = 3500; // 3.5 seconds spin time

    const segmentAngle = 360 / WHEEL_CATEGORIES.length;
    lastSegmentRef.current = Math.floor(startRotation / segmentAngle);

    const animateWheel = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeOutQuint(progress);
      const currentRotation = startRotation + (targetRotation - startRotation) * ease;

      setRotation(currentRotation);

      // Play tick sound on segment crossing
      const currentSegment = Math.floor(currentRotation / segmentAngle);
      if (currentSegment !== lastSegmentRef.current) {
        playSound('tick');
        setPointerVibrate(true);
        setTimeout(() => setPointerVibrate(false), 60);
        lastSegmentRef.current = currentSegment;
      }

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animateWheel);
      } else {
        setIsSpinning(false);

        // Calculate the correct landed segment index under the pointer (at the top / 12 o'clock / -90 degrees)
        const finalNormalized = (360 - (currentRotation % 360)) % 360;
        const landedIdx = Math.floor(finalNormalized / segmentAngle) % WHEEL_CATEGORIES.length;
        const landedCat = WHEEL_CATEGORIES[landedIdx];

        setSelectedCat(landedCat);

        if (landedCat === 'Pas 💤') {
          playSound('tick');
          setTimeout(() => {
            advanceRound();
          }, 1800);
        } else if (landedCat === 'İflas 💥') {
          playSound('fail');
          setIsShaking(true);
          setScore(0);
          setTimeout(() => {
            setIsShaking(false);
            advanceRound();
          }, 1800);
        } else {
          // Select question
          const categoryQuestions = WHEEL_QUESTIONS_DB.filter(q => q.category === landedCat);
          const unused = categoryQuestions.filter(q => !usedQuestionIds.includes(q.id));
          
          if (unused.length > 0) {
            const randomQ = unused[Math.floor(Math.random() * unused.length)];
            setCurrentQuestion(randomQ);
            setUsedQuestionIds(prev => [...prev, randomQ.id]);
          } else if (categoryQuestions.length > 0) {
            // All questions in this category are used. Reset only this category's tracking
            const categoryIds = categoryQuestions.map(q => q.id);
            const randomQ = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];
            setCurrentQuestion(randomQ);
            setUsedQuestionIds(prev => [
              ...prev.filter(id => !categoryIds.includes(id)),
              randomQ.id
            ]);
          } else {
            // Fallback general question
            setCurrentQuestion({
              id: 'fallback',
              category: landedCat as any,
              question: 'İslamiyet kelimesinin kelime kelime anlamı nedir?',
              options: ['Barış ve Teslimiyet', 'Savaş ve Güç', 'Zenginlik ve Gösteriş', 'Tarih ve Araştırma'],
              correct: 'Barış ve Teslimiyet',
              wisdom: 'İslam, kök olarak silm (barış) ve teslimiyet anlamına gelir. Allah\'ın iradesine boyun eğmektir.'
            });
          }
        }
      }
    };

    rafRef.current = requestAnimationFrame(animateWheel);
  };

  const handleSelectOption = (opt: string) => {
    if (showAnswerFeedback || !currentQuestion) return;
    setSelectedOpt(opt);
    setShowAnswerFeedback(true);

    if (opt === currentQuestion.correct) {
      playSound('success');
      setScore(prev => prev + 100);
      triggerConfetti();
    } else {
      playSound('fail');
    }
  };

  const triggerConfetti = () => {
    const newParticles: Particle[] = [];
    const colors = ['#f43f5e', '#3b82f6', '#10b981', '#eab308', '#a855f7', '#ff7849'];
    for (let i = 0; i < 40; i++) {
      newParticles.push({
        id: i,
        x: 50,
        y: 50,
        color: colors[Math.floor(Math.random() * colors.length)],
        angle: Math.random() * 360,
        speed: 2 + Math.random() * 6
      });
    }
    setConfettiParticles(newParticles);
    setTimeout(() => setConfettiParticles([]), 1500);
  };

  const advanceRound = () => {
    if (round < 5) {
      setRound(prev => prev + 1);
      setSelectedCat(null);
      setCurrentQuestion(null);
      setSelectedOpt(null);
      setShowAnswerFeedback(false);
    } else {
      playSound('complete');
      setGameStatus('ended');
    }
  };

  return (
    <div className={`w-full flex flex-col items-center gap-6 ${isShaking ? 'animate-shake' : ''}`}>
      {/* Dynamic DOM Confetti Particle Effect */}
      {confettiParticles.length > 0 && (
        <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden">
          {confettiParticles.map(p => {
            const rad = (p.angle * Math.PI) / 180;
            const targetX = 50 + Math.cos(rad) * p.speed * 8;
            const targetY = 30 + Math.sin(rad) * p.speed * 8;
            return (
              <motion.div
                key={p.id}
                initial={{ x: '50vw', y: '40vh', scale: 1, opacity: 1 }}
                animate={{
                  x: `${targetX}vw`,
                  y: `${targetY}vh`,
                  scale: [1, 1.2, 0.4],
                  opacity: [1, 1, 0]
                }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="w-3 h-3 absolute rounded-full shadow-md"
                style={{ backgroundColor: p.color }}
              />
            );
          })}
        </div>
      )}

      {gameStatus === 'intro' && (
        <div className="text-center flex flex-col items-center py-10 max-w-xl bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-8 rounded-[2.5rem] shadow-xl">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-[20px] animate-pulse"></div>
            <div className="w-24 h-24 bg-gradient-to-tr from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg relative">
              <Sparkles className="w-12 h-12 text-white animate-pulse" />
            </div>
          </div>
          <h3 className="text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tight font-display">
            Soru Çarkı
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
            Çarkı çevirin, gelen kategoriye ait <strong>bu oyuna özel hazırlanmış</strong> soruları doğru cevaplayarak puanları toplayın! 
            <br />
            5 tur sonunda en yüksek skora ulaşın. Dikkat edin, çarkta Pas ve İflas dilimleri de var!
          </p>
          <button
            onClick={handleStart}
            className="mt-8 px-12 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-black text-sm uppercase tracking-wider rounded-2xl shadow-lg hover:shadow-purple-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
          >
            <Play className="w-4 h-4 fill-current" /> Oyuna Başla!
          </button>
        </div>
      )}

      {gameStatus === 'playing' && (
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Sol Kolon: Çark Çizimi */}
          <div className="lg:col-span-5 flex flex-col items-center gap-5 bg-white dark:bg-slate-850 p-6 rounded-[2.5rem] border-3 border-slate-200 dark:border-slate-700 shadow-md">
            <div className="flex justify-between w-full text-xs font-black text-slate-450 uppercase tracking-widest px-1">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-ping"></span>
                Tur: {round} / 5
              </span>
              <span className="text-indigo-650 dark:text-indigo-400">Skor: {score} Puan</span>
            </div>

            {/* Çark Tasarımı */}
            <div className="relative w-64 h-64 flex items-center justify-center mt-3 select-none">
              {/* Pointer (İbre) */}
              <div
                className={`absolute -top-3 z-30 text-3xl text-rose-500 filter drop-shadow transition-transform ${
                  pointerVibrate ? 'scale-y-80 scale-x-110 translate-y-1' : ''
                }`}
                style={{ transformOrigin: 'top center' }}
              >
                ▼
              </div>

              {/* Dönen Çark Gövdesi */}
              <div
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: 'none'
                }}
                className="w-full h-full rounded-full border-6 border-slate-800 dark:border-slate-900 shadow-2xl relative overflow-hidden flex items-center justify-center bg-white dark:bg-slate-950"
              >
                {/* SVG Çark Bölümleri */}
                <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 100">
                  {WHEEL_CATEGORIES.map((cat, idx) => {
                    const angle = 360 / WHEEL_CATEGORIES.length;
                    const startAngle = idx * angle - 90; // Start at top
                    const endAngle = (idx + 1) * angle - 90;

                    const radStart = (startAngle * Math.PI) / 180;
                    const radEnd = (endAngle * Math.PI) / 180;

                    const x1 = 50 + 50 * Math.cos(radStart);
                    const y1 = 50 + 50 * Math.sin(radStart);
                    const x2 = 50 + 50 * Math.cos(radEnd);
                    const y2 = 50 + 50 * Math.sin(radEnd);

                    return (
                      <path
                        key={cat}
                        d={`M 50 50 L ${x1} ${y1} A 50 50 0 0 1 ${x2} ${y2} Z`}
                        fill={CATEGORY_META[cat].color}
                        stroke="#1e293b"
                        strokeWidth="1.2"
                      />
                    );
                  })}
                  {/* İç Çember Efekti */}
                  <circle cx="50" cy="50" r="12" fill="#1e293b" />
                </svg>

                {/* Çarkın Segment Metinleri */}
                <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
                  {WHEEL_CATEGORIES.map((cat, idx) => {
                    // Rotate and translate text to its segment middle
                    const angle = idx * (360 / WHEEL_CATEGORIES.length) + (180 / WHEEL_CATEGORIES.length);
                    return (
                      <div
                        key={cat}
                        style={{ transform: `rotate(${angle}deg) translate(0, -90px)` }}
                        className="absolute text-[8px] font-black text-white uppercase tracking-wider text-center drop-shadow-md"
                      >
                        {cat.split(' ')[0]} {/* Shorten label */}
                      </div>
                    );
                  })}
                </div>

                {/* Orta Mil */}
                <div className="w-14 h-14 bg-gradient-to-tr from-slate-900 to-slate-800 border-4 border-white dark:border-slate-800 rounded-full absolute z-20 flex items-center justify-center text-white text-[9px] font-black shadow-lg">
                  ÇEVİR
                </div>
              </div>
            </div>

            <button
              onClick={handleSpin}
              disabled={isSpinning || showAnswerFeedback}
              className="mt-4 w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow hover:shadow-purple-500/20 disabled:opacity-40 transition-all cursor-pointer"
            >
              {isSpinning ? 'DÖNÜYOR...' : 'ÇARKI ÇEVİR! 🎡'}
            </button>
          </div>

          {/* Sağ Kolon: Soru / Durum */}
          <div className="lg:col-span-7 flex flex-col gap-6 items-center justify-center">
            <AnimatePresence mode="wait">
              {/* Landed Kategori Duyurusu */}
              {selectedCat && !currentQuestion && (
                <motion.div
                  key={selectedCat}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className={`w-full ${CATEGORY_META[selectedCat].bg} border-3 ${CATEGORY_META[selectedCat].border} p-8 rounded-[2.5rem] shadow flex flex-col items-center justify-center gap-4 text-center min-h-[300px]`}
                >
                  <span className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                    ÇARKIN GÖSTERDİĞİ
                  </span>
                  <div className={`p-4 rounded-full bg-gradient-to-tr ${CATEGORY_META[selectedCat].gradient} text-white shadow-lg animate-bounce`}>
                    {CATEGORY_META[selectedCat].icon}
                  </div>
                  <span className="text-2xl font-display font-black text-slate-800 dark:text-white uppercase tracking-wider">
                    {selectedCat}
                  </span>

                  {selectedCat === 'Pas 💤' && (
                    <p className="text-xs text-slate-500 mt-2 font-medium">Bu tur pas geçtiniz! Bir sonraki tura aktarılıyorsunuz...</p>
                  )}
                  {selectedCat === 'İflas 💥' && (
                    <p className="text-xs text-red-500 mt-2 font-bold uppercase tracking-wide">Eyvah! Puanlarınız sıfırlandı!</p>
                  )}
                </motion.div>
              )}

              {/* Soru Paneli */}
              {currentQuestion && (
                <motion.div
                  key={currentQuestion.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="w-full bg-white dark:bg-slate-850 border-3 border-slate-200 dark:border-slate-700 p-6 rounded-[2.5rem] shadow-md flex flex-col gap-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/20 text-indigo-700 dark:text-indigo-400 text-[10px] font-black uppercase tracking-wider border border-indigo-100 dark:border-indigo-900/30 flex items-center gap-1.5">
                      {CATEGORY_META[currentQuestion.category].icon}
                      {currentQuestion.category}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base font-bold text-slate-800 dark:text-white leading-relaxed">
                    "{currentQuestion.question}"
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                    {currentQuestion.options.map((opt, oIdx) => {
                      const isSelected = opt === selectedOpt;
                      const isCorrect = opt === currentQuestion.correct;
                      const optionLetter = ['A', 'B', 'C', 'D'][oIdx];

                      let btnStyle = "w-full bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-750 border-slate-200 dark:border-slate-750 text-slate-800 dark:text-white cursor-pointer hover:scale-102 active:scale-98 text-left text-xs font-semibold leading-normal p-3.5 rounded-2xl border flex items-center gap-3 transition-all";
                      
                      if (showAnswerFeedback) {
                        if (isCorrect) {
                          btnStyle = "w-full bg-emerald-500 border-emerald-600 text-white pointer-events-none p-3.5 rounded-2xl border flex items-center gap-3 shadow-md shadow-emerald-500/20 scale-102 transition-all";
                        } else if (isSelected) {
                          btnStyle = "w-full bg-rose-500 border-rose-600 text-white pointer-events-none p-3.5 rounded-2xl border flex items-center gap-3 shadow-md shadow-rose-500/20 scale-98 transition-all";
                        } else {
                          btnStyle = "w-full opacity-40 pointer-events-none bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 p-3.5 rounded-2xl border flex items-center gap-3 transition-all";
                        }
                      }

                      return (
                        <button
                          key={opt}
                          onClick={() => handleSelectOption(opt)}
                          disabled={showAnswerFeedback}
                          className={btnStyle}
                        >
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black ${
                            showAnswerFeedback && isCorrect
                              ? 'bg-white text-emerald-600'
                              : showAnswerFeedback && isSelected
                              ? 'bg-white text-rose-600'
                              : 'bg-slate-200 dark:bg-slate-700 text-slate-750 dark:text-slate-300'
                          }`}>
                            {optionLetter}
                          </span>
                          <span className="flex-1">{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {showAnswerFeedback && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="w-full flex flex-col gap-3.5 mt-2"
                    >
                      <div className="p-4 bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-200 dark:border-emerald-900/40 rounded-2xl text-xs font-semibold text-emerald-800 dark:text-emerald-400 leading-relaxed shadow-sm">
                        <strong className="text-emerald-700 dark:text-emerald-300 block mb-1">📖 İlahî Hikmet:</strong>
                        {currentQuestion.wisdom}
                      </div>

                      <button
                        onClick={advanceRound}
                        className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-black uppercase text-xs tracking-wider rounded-2xl cursor-pointer hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-purple-500/20"
                      >
                        Sıradaki Tura Geç ➔
                      </button>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* Başlangıçta boş veya bekleme durumunda */}
              {!selectedCat && !currentQuestion && !isSpinning && (
                <div className="w-full bg-slate-50 dark:bg-slate-900/40 border-3 border-dashed border-slate-200 dark:border-slate-800 p-8 rounded-[2.5rem] text-center flex flex-col items-center justify-center gap-3 min-h-[300px]">
                  <RotateCcw className="w-12 h-12 text-slate-400 animate-spin-slow" />
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                    Çarkı Çevirerek Başlayın!
                  </p>
                  <p className="text-[10px] text-slate-400 max-w-xs leading-normal">
                    Soldaki çarkı çevir butonuna basarak ilk tura ait kategorinizi belirleyin.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}

      {gameStatus === 'ended' && (
        <div className="text-center flex flex-col items-center py-8 w-full max-w-md bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-8 rounded-[2.5rem] shadow-xl animate-scale-up">
          <div className="w-20 h-20 bg-amber-100 dark:bg-amber-950/20 rounded-full flex items-center justify-center mb-4">
            <Trophy className="w-12 h-12 text-amber-500 animate-bounce" />
          </div>
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
            Yarışma Bitti!
          </h3>
          <p className="text-xs text-slate-555 dark:text-slate-400 mt-2">
            5 turluk Soru Çarkı müsabakasını başarıyla bitirdiniz!
          </p>

          <div className="w-full flex flex-col gap-2 my-6 p-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-2xl shadow-inner">
            <span className="text-[10px] font-black text-slate-400 dark:text-slate-550 uppercase tracking-widest">TOPLAM SKOR</span>
            <span className="text-3xl font-display font-black text-purple-650 dark:text-purple-400 tracking-wider mt-1">
              {score} Puan
            </span>
          </div>

          <button
            onClick={handleStart}
            className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:shadow-purple-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yeniden Oyna! ↩️
          </button>
        </div>
      )}
    </div>
  );
};
