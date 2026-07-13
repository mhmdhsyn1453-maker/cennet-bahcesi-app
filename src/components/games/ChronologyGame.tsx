import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Clock, ArrowUp, ArrowDown, Check, X, Play, RotateCcw,
  Trophy, BookOpen, Star, ChevronRight, Award
} from 'lucide-react';
import { CHRONOLOGY_QUESTIONS_DB, ChronologyLevel } from '../../data/games/chronologyQuestions';
import { playSound } from '../BuzzerAndTimer';

const STORAGE_KEY = 'chronology_used_level_ids';
const MAX_RECENT = 20;

const getRecentlyUsedIds = (): string[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch { return []; }
};

const saveRecentlyUsedIds = (ids: string[]) => {
  try {
    const current = getRecentlyUsedIds();
    const updated = [...current, ...ids].slice(-MAX_RECENT);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch { /* ignore */ }
};

// Select 5 random levels ensuring no repeats if possible
const selectChronologyLevels = (): ChronologyLevel[] => {
  const recent = new Set(getRecentlyUsedIds());
  const pool = CHRONOLOGY_QUESTIONS_DB.filter(l => !recent.has(l.id));
  const finalPool = pool.length >= 5 ? pool : CHRONOLOGY_QUESTIONS_DB;

  const shuffled = [...finalPool].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, 5);

  // Save selected level IDs to storage
  saveRecentlyUsedIds(selected.map(l => l.id));
  return selected;
};

// Helper to shuffle array
const shuffleArray = <T,>(arr: T[]): T[] => {
  const list = [...arr];
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
};

export const ChronologyGame: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const [phase, setPhase] = useState<'intro' | 'playing' | 'level_result' | 'ended'>('intro');
  const [levels, setLevels] = useState<ChronologyLevel[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [items, setItems] = useState<string[]>([]);
  const [checked, setChecked] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [firstTimePerfect, setFirstTimePerfect] = useState<boolean>(true);
  const [correctFlags, setCorrectFlags] = useState<boolean[]>([]);
  
  // Timer states
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [timerActive, setTimerActive] = useState<boolean>(false);

  const currentLevel = levels[currentIdx];

  // Timer Effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (timerActive && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && timerActive) {
      setTimerActive(false);
      playSound('fail');
      handleCheck(true); // Automatically force check with timeOut = true
    }
    return () => clearTimeout(timer);
  }, [timeLeft, timerActive]);

  // Start new game session
  const startNewGame = () => {
    playSound('complete');
    const selectedLevels = selectChronologyLevels();
    setLevels(selectedLevels);
    setCurrentIdx(0);
    setScore(0);
    loadLevel(selectedLevels[0]);
    setPhase('playing');
  };

  // Load specific level
  const loadLevel = (level: ChronologyLevel) => {
    setChecked(false);
    setFirstTimePerfect(true);
    const shuffled = shuffleArray(level.items);
    setItems(shuffled);
    setCorrectFlags(new Array(shuffled.length).fill(false));
    setTimeLeft(60);
    setTimerActive(true);
  };

  // Move item up/down
  const handleMove = (index: number, direction: 'up' | 'down') => {
    if (checked || !timerActive) return;
    playSound('tick');
    
    const newIdx = direction === 'up' ? index - 1 : index + 1;
    if (newIdx < 0 || newIdx >= items.length) return;

    const list = [...items];
    [list[index], list[newIdx]] = [list[newIdx], list[index]];
    setItems(list);
  };

  // Check current order
  const handleCheck = (timeOut = false) => {
    if (checked) return;
    setTimerActive(false);
    setChecked(true);

    const correctOrder = currentLevel.items;
    const flags = items.map((item, idx) => item === correctOrder[idx]);
    setCorrectFlags(flags);

    const allCorrect = flags.every(f => f);

    if (allCorrect) {
      playSound('success');
      // Calculate points
      const basePoints = correctOrder.length * 10;
      const bonus = firstTimePerfect && !timeOut ? 50 : 0;
      setScore(prev => prev + basePoints + bonus);
      
      // Auto transition to explanation result phase after a slight delay
      setTimeout(() => {
        setPhase('level_result');
      }, 1200);
    } else {
      playSound('fail');
      setFirstTimePerfect(false);
    }
  };

  // Skip explanation and go next level
  const handleNext = () => {
    playSound('complete');
    if (currentIdx + 1 < levels.length) {
      const nextIdx = currentIdx + 1;
      setCurrentIdx(nextIdx);
      loadLevel(levels[nextIdx]);
      setPhase('playing');
    } else {
      setPhase('ended');
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <AnimatePresence mode="wait">

        {/* ===== INTRO PHASE ===== */}
        {phase === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`text-center flex flex-col items-center py-6 w-full max-w-lg ${
              isDarkMode ? 'bg-[#1e1b4b] border-violet-500/50 text-white' : 'bg-white border-violet-200 text-slate-800 shadow-lg'
            } border-3 rounded-[2.5rem] shadow-2xl p-8 relative overflow-hidden`}
          >
            {isDarkMode && (
              <>
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl"></div>
              </>
            )}

            <Clock className="w-20 h-20 text-violet-500 mb-4 animate-pulse" />
            <h3 className={`text-3xl font-black uppercase tracking-tight ${isDarkMode ? 'text-violet-300' : 'text-violet-650'}`}>
              ZAMAN ŞERİDİ
            </h3>
            <p className={`text-xs ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} mt-3 max-w-sm leading-relaxed`}>
              Tarihi olayları, ibadet aşamalarını ve peygamberler sıralamasını doğru sırayla dizin, puanları toplayın!
            </p>
            <div className={`w-full h-px ${isDarkMode ? 'bg-violet-500/20' : 'bg-violet-500/30'} my-5`} />

            <div className={`grid grid-cols-2 gap-3 text-left w-full ${isDarkMode ? 'bg-slate-900/40 border-slate-700/50' : 'bg-slate-50 border-slate-200'} p-4 rounded-2xl border`}>
              <div className={`flex items-center gap-2 text-[10px] ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                ⏳ Seviye Başı <span className="font-bold text-violet-500">60 Saniye</span>
              </div>
              <div className={`flex items-center gap-2 text-[10px] ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                🧩 Seviye Başı <span className="font-bold text-violet-500">5 Aşama</span>
              </div>
              <div className={`flex items-center gap-2 text-[10px] ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                ✨ Mükemmellik Bonusu <span className="font-bold text-violet-500">+50 Puan</span>
              </div>
              <div className={`flex items-center gap-2 text-[10px] ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                🧠 Toplam <span className="font-bold text-violet-500">300+ Adım</span>
              </div>
            </div>

            <button
              onClick={startNewGame}
              className="mt-6 w-full py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Oyunu Başlat! ➔
            </button>
          </motion.div>
        )}

        {/* ===== PLAYING PHASE ===== */}
        {phase === 'playing' && currentLevel && (
          <motion.div
            key="playing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full max-w-xl flex flex-col gap-4"
          >
            {/* Üst Bilgi Barı */}
            <div className="flex justify-between items-center px-1">
              <span className={`text-[10px] font-black uppercase tracking-widest ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Aşama: <strong className={isDarkMode ? 'text-violet-300' : 'text-violet-650'}>{currentIdx + 1} / 5</strong>
              </span>
              <div className="flex items-center gap-3">
                {/* Timer */}
                <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black border ${
                  timeLeft <= 15
                    ? 'bg-rose-500/20 border-rose-500 text-rose-500 animate-pulse'
                    : isDarkMode
                      ? 'bg-slate-900 border-slate-700 text-slate-300'
                      : 'bg-white border-slate-200 text-slate-600'
                }`}>
                  <Clock className="w-3.5 h-3.5" />
                  <span>{timeLeft} sn</span>
                </div>
                {/* Score */}
                <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black border ${
                  isDarkMode
                    ? 'bg-slate-900 border-slate-700 text-amber-400'
                    : 'bg-white border-slate-200 text-amber-600'
                }`}>
                  <Trophy className="w-3.5 h-3.5" />
                  <span>{score} Puan</span>
                </div>
              </div>
            </div>

            {/* Görev Başlığı Kartı */}
            <div className={`text-center py-4 px-6 border-2 rounded-2xl ${
              isDarkMode
                ? 'bg-slate-900 border-slate-800 text-white'
                : 'bg-white border-slate-200 text-slate-800 shadow-sm'
            }`}>
              <span className="text-[9px] font-black text-violet-500 uppercase tracking-widest block mb-1">
                Kategori: {currentLevel.category}
              </span>
              <h4 className="text-base font-black uppercase tracking-wide">
                 sıralama görevi: {currentLevel.title}
              </h4>
            </div>

            {/* Zaman Tüneli ve Kart Listesi */}
            <div className="relative flex gap-5 py-2">
              {/* Dikey Zaman Hattı Çizgisi */}
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-300 dark:bg-slate-700 -z-10" />

              <div className="flex flex-col gap-4.5 w-full">
                {items.map((item, idx) => {
                  const isCorrectPos = item === currentLevel.items[idx];
                  
                  let stepBadgeStyle = isDarkMode
                    ? 'bg-slate-800 border-slate-700 text-slate-300'
                    : 'bg-slate-100 border-slate-200 text-slate-500';
                  
                  let cardStyle = isDarkMode
                    ? 'bg-[#0f172a]/60 border-slate-800 text-slate-200'
                    : 'bg-white border-slate-200 text-slate-850 shadow-sm';

                  if (checked) {
                    if (isCorrectPos) {
                      stepBadgeStyle = 'bg-emerald-500 border-emerald-600 text-white';
                      cardStyle = isDarkMode
                        ? 'bg-emerald-950/20 border-emerald-500 text-emerald-300'
                        : 'bg-emerald-50 border-emerald-350 text-emerald-800';
                    } else {
                      stepBadgeStyle = 'bg-rose-500 border-rose-600 text-white';
                      cardStyle = isDarkMode
                        ? 'bg-rose-950/20 border-rose-500 text-rose-300'
                        : 'bg-rose-50 border-rose-350 text-rose-800';
                    }
                  }

                  return (
                    <div key={item} className="flex items-center gap-4 w-full">
                      {/* Sol Dikey Adım Numarası Halkası */}
                      <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center shrink-0 font-black text-sm z-10 shadow-inner transition-colors duration-300 ${stepBadgeStyle}`}>
                        {checked ? (
                          isCorrectPos ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />
                        ) : (
                          idx + 1
                        )}
                      </div>

                      {/* Sıralama Kartı */}
                      <div className={`flex-1 p-3.5 rounded-2xl border-2 flex items-center justify-between transition-all duration-300 ${cardStyle}`}>
                        <span className="text-xs sm:text-sm font-bold uppercase tracking-wider leading-relaxed">
                          {item}
                        </span>

                        {/* Yön Değiştirme Butonları (Sadece kontrol edilmemişken aktif) */}
                        {!checked && timeLeft > 0 && (
                          <div className="flex gap-1.5 ml-2">
                            <button
                              onClick={() => handleMove(idx, 'up')}
                              disabled={idx === 0}
                              className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all ${
                                idx === 0
                                  ? 'opacity-20 cursor-not-allowed border-slate-700/20'
                                  : isDarkMode
                                    ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300 hover:scale-105 active:scale-95 cursor-pointer'
                                    : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-600 hover:scale-105 active:scale-95 cursor-pointer shadow-sm'
                              }`}
                              title="Yukarı Taşı"
                            >
                              <ArrowUp className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleMove(idx, 'down')}
                              disabled={idx === items.length - 1}
                              className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all ${
                                idx === items.length - 1
                                  ? 'opacity-20 cursor-not-allowed border-slate-700/20'
                                  : isDarkMode
                                    ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300 hover:scale-105 active:scale-95 cursor-pointer'
                                    : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-600 hover:scale-105 active:scale-95 cursor-pointer shadow-sm'
                              }`}
                              title="Aşağı Taşı"
                            >
                              <ArrowDown className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Alt Kontrol Bölgesi */}
            <div className="w-full mt-2 min-h-[54px] flex justify-center">
              {!checked ? (
                <button
                  onClick={() => handleCheck(false)}
                  className="w-full py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:scale-102 active:scale-98 transition-all cursor-pointer"
                >
                  Sıralamayı Kontrol Et! 🔍
                </button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full flex flex-col gap-3 items-center"
                >
                  <span className={`text-xs font-black uppercase tracking-wider text-center block ${
                    correctFlags.every(f => f) ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-500'
                  }`}>
                    {correctFlags.every(f => f)
                      ? '🎉 Harika! Tüm sıralama doğru.'
                      : '❌ Bazı adımlar yanlış yerde duruyor, tekrar kontrol et veya devam et!'}
                  </span>

                  <div className="flex gap-3 w-full">
                    {!correctFlags.every(f => f) && (
                      <button
                        onClick={() => setChecked(false)}
                        className={`flex-1 py-3.5 border-2 ${
                          isDarkMode
                            ? 'bg-slate-800 border-slate-700 text-white hover:bg-slate-700'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm'
                        } font-black uppercase text-xs tracking-wider rounded-xl active:scale-95 transition-all cursor-pointer`}
                      >
                        Tekrar Düzenle
                      </button>
                    )}
                    <button
                      onClick={() => setPhase('level_result')}
                      className="flex-1 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-black uppercase text-xs tracking-wider rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                      Açıklamayı Oku ➔
                    </button>
                  </div>
                </motion.div>
              )}
            </div>

          </motion.div>
        )}

        {/* ===== LEVEL EXPLANATION / RESULT PHASE ===== */}
        {phase === 'level_result' && currentLevel && (
          <motion.div
            key="explanation"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full max-w-md ${
              isDarkMode ? 'bg-[#1e1b4b] border-violet-500/50 text-white' : 'bg-white border-violet-200 text-slate-800 shadow-lg'
            } border-3 rounded-[2.5rem] shadow-2xl p-7 text-center relative flex flex-col items-center gap-4`}
          >
            <BookOpen className="w-16 h-16 text-violet-500 mb-2 animate-bounce" />
            <h4 className="text-sm font-black uppercase text-violet-500 tracking-wider">
              Öğrenelim! 📖
            </h4>
            <h3 className="text-lg font-black uppercase tracking-tight">
              {currentLevel.title}
            </h3>
            
            <div className={`w-full p-5 rounded-2xl text-xs leading-relaxed font-bold border ${
              isDarkMode ? 'bg-slate-900/60 border-slate-800 text-slate-250' : 'bg-slate-50 border-slate-200 text-slate-650'
            }`}>
              "{currentLevel.description}"
            </div>

            {/* Doğru Sıralamanın Özeti */}
            <div className="w-full flex flex-col gap-2 text-left bg-slate-950/20 p-4 rounded-xl border border-slate-700/20">
              <span className="text-[9px] font-black text-slate-450 uppercase tracking-widest block mb-1">Doğru Sıralama:</span>
              {currentLevel.items.map((item, idx) => (
                <div key={item} className="flex gap-2 items-center text-[10px] font-bold text-emerald-550 dark:text-emerald-400">
                  <span>{idx + 1}.</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="mt-2 w-full py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-black uppercase text-xs tracking-wider rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>{currentIdx + 1 === levels.length ? 'Sonuçları Gör ➔' : 'Sonraki Aşamaya Geç ➔'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        {/* ===== END PHASE ===== */}
        {phase === 'ended' && (
          <motion.div
            key="end-screen"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className={`text-center flex flex-col items-center py-6 w-full max-w-md ${
              isDarkMode ? 'bg-[#1e1b4b] border-violet-500/50 text-white' : 'bg-white border-violet-200 text-slate-800 shadow-lg'
            } border-3 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden`}
          >
            {isDarkMode && (
              <>
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl"></div>
              </>
            )}

            <Award className="w-16 h-16 text-amber-500 animate-bounce mb-3" />
            <h3 className={`text-2xl font-black ${isDarkMode ? 'text-violet-300' : 'text-violet-650'} uppercase tracking-tight`}>
              Tebrikler, Tamamladın!
            </h3>
            <p className={`text-xs ${isDarkMode ? 'text-slate-350' : 'text-slate-550'} mt-2 max-w-xs leading-relaxed`}>
              Zaman Şeridi görevlerini başarıyla tamamlayıp dini bilgilerini kronolojik olarak pekiştirdin!
            </p>

            {/* Toplam Skor Kutusu */}
            <div className={`w-full flex flex-col gap-2 my-6 p-5 ${isDarkMode ? 'bg-slate-900/50 border-slate-700/50' : 'bg-slate-50 border-slate-200'} border rounded-2xl`}>
              <span className="text-[10px] font-black text-slate-450 uppercase tracking-widest">Kazanılan Toplam Skor</span>
              <span className={`text-3xl font-display font-black ${isDarkMode ? 'text-emerald-500' : 'text-emerald-600'} tracking-wide mt-1 animate-pulse`}>
                {score} Puan
              </span>
            </div>

            <button
              onClick={startNewGame}
              className="w-full py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Yeniden Oyna! ↩️
            </button>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};
