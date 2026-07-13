import React, { useState, useEffect, useRef } from 'react';
import { 
  Users, Trophy, Clock, Volume2, VolumeX, RotateCcw, 
  Play, Pause, CheckCircle, AlertTriangle, HelpCircle, Star, Award
} from 'lucide-react';
import { TABOO_QUESTIONS_DB, TabooCard } from '../../data/games/tabooQuestions';
import { playSound } from '../BuzzerAndTimer';

export const TabooGame: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  // Game states: 'setup' | 'playing' | 'ended'
  const [gameState, setGameState] = useState<'setup' | 'playing' | 'ended'>('setup');
  
  // Game settings
  const [duration, setDuration] = useState<number>(90); // default 90 seconds
  const [passLimit, setPassLimit] = useState<number>(3); // 3, 5, 10
  
  // Scoring
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [tabooCount, setTabooCount] = useState<number>(0);
  
  // Active playing states
  const [cardIndex, setCardIndex] = useState<number>(0);
  const [cardsPool, setCardsPool] = useState<TabooCard[]>([]);
  const [timeLeft, setTimeLeft] = useState<number>(90);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
  const [passesUsed, setPassesUsed] = useState<number>(0);
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  
  // Confetti particles
  const [customConfetti, setCustomConfetti] = useState<{ id: number; left: number; color: string; delay: number }[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Trigger Custom Confetti
  const triggerCustomConfetti = (count: number) => {
    const colors = ['#f59e0b', '#10b981', '#3b82f6', '#ec4899', '#8b5cf6', '#ef4444'];
    const newParticles = Array.from({ length: count }).map((_, i) => ({
      id: Math.random() + i,
      left: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 1.5
    }));
    setCustomConfetti(newParticles);
    setTimeout(() => {
      setCustomConfetti([]);
    }, 5000);
  };

  // Fisher-Yates shuffle
  const shuffleCards = (array: TabooCard[]): TabooCard[] => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  // Start game session
  const handleStartGame = () => {
    const shuffled = shuffleCards(TABOO_QUESTIONS_DB);
    setCardsPool(shuffled);
    setCorrectCount(0);
    setTabooCount(0);
    setPassesUsed(0);
    setCardIndex(0);
    setTimeLeft(duration);
    setIsTimerActive(true);
    setGameState('playing');
    if (!isAudioMuted) playSound('tick');
  };

  // Timer hook
  useEffect(() => {
    if (gameState === 'playing' && isTimerActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleEndGame();
            return 0;
          }
          if (prev <= 6 && !isAudioMuted) {
            playSound('tick'); // Beep count down
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameState, isTimerActive, timeLeft]);

  // End game on timer out
  const handleEndGame = () => {
    setIsTimerActive(false);
    setGameState('ended');
    if (!isAudioMuted) playSound('complete');
    triggerCustomConfetti(80);
  };

  // Doğru (+1)
  const handleCorrect = () => {
    if (!isAudioMuted) playSound('success');
    setCorrectCount(prev => prev + 1);
    setCardIndex(prev => (prev + 1) % cardsPool.length);
  };

  // Tabu (-1)
  const handleTaboo = () => {
    if (!isAudioMuted) playSound('fail');
    setTabooCount(prev => prev + 1);
    setCardIndex(prev => (prev + 1) % cardsPool.length);
  };

  // Pas
  const handlePass = () => {
    if (passesUsed >= passLimit) {
      alert("Pas hakkınız dolmuştur!");
      return;
    }
    if (!isAudioMuted) playSound('tick');
    setPassesUsed(prev => prev + 1);
    setCardIndex(prev => (prev + 1) % cardsPool.length);
  };

  const activeCard = cardsPool[cardIndex] || null;
  const netScore = correctCount - tabooCount;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 select-none font-sans text-slate-800 dark:text-slate-200">
      
      {/* Confetti container */}
      {customConfetti.length > 0 && (
        <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
          {customConfetti.map(p => (
            <div
              key={p.id}
              className="absolute w-2.5 h-5 rounded-sm animate-confetti-fall"
              style={{
                left: `${p.left}%`,
                top: `-20px`,
                backgroundColor: p.color,
                animationDelay: `${p.delay}s`,
                animationDuration: `${2.5 + Math.random() * 2}s`
              }}
            />
          ))}
          <style>{`
            @keyframes confetti-fall {
              0% { transform: translateY(0) rotate(0deg); opacity: 1; }
              100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
            }
            .animate-confetti-fall {
              animation: confetti-fall linear forwards;
            }
          `}</style>
        </div>
      )}

      {/* HEADER */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-white/20 dark:bg-slate-900/40 backdrop-blur-md p-4 rounded-3xl border border-white/30 dark:border-slate-800/60 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
            <Trophy className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h2 className="text-xl font-black uppercase tracking-wider bg-gradient-to-r from-teal-600 to-emerald-500 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">
              Tabu
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              1000 Kartlık İslam & Ahlak Kelime Anlatma Oyunu
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsAudioMuted(!isAudioMuted)} 
            className="p-3 rounded-2xl bg-white/40 dark:bg-slate-800/40 border border-white/30 dark:border-slate-700/30 text-slate-600 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-slate-700/60 transition-all active:scale-95 cursor-pointer"
            title="Sesi Aç/Kapat"
          >
            {isAudioMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
          
          {gameState !== 'setup' && (
            <button 
              onClick={() => {
                if (window.confirm("Oyundan çıkıp ana ayarlara dönmek istiyor musunuz?")) {
                  setGameState('setup');
                  setIsTimerActive(false);
                }
              }}
              className="px-4 py-2.5 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-500 hover:bg-rose-500/20 transition-all active:scale-95 text-xs font-black uppercase tracking-wider cursor-pointer"
            >
              Ayarlara Dön
            </button>
          )}
        </div>
      </div>

      {/* ===================== 1. SETUP SCREEN ===================== */}
      {gameState === 'setup' && (
        <div className="bg-white/20 dark:bg-slate-900/40 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/30 dark:border-slate-800/60 shadow-2xl max-w-xl mx-auto animate-fade-in">
          <h3 className="text-lg font-black uppercase tracking-wider mb-6 text-center text-teal-500">
            Tabu Oyun Ayarları
          </h3>

          <div className="space-y-6 mb-8">
            {/* Duration Selector - Custom Pills */}
            <div>
              <label className="text-[10px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-widest block mb-2.5">⏱️ Süre Seçimi</label>
              <div className="grid grid-cols-5 gap-2">
                {[
                  { value: 45, label: '45s' },
                  { value: 60, label: '60s' },
                  { value: 90, label: '90s' },
                  { value: 120, label: '2dk' },
                  { value: 180, label: '3dk' },
                ].map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setDuration(opt.value)}
                    className={`py-3 rounded-xl border-2 text-xs font-black uppercase tracking-wider transition-all cursor-pointer active:scale-95 ${
                      duration === opt.value
                        ? 'bg-teal-50 dark:bg-teal-950/30 border-teal-500 text-teal-600 dark:text-teal-400 shadow-md shadow-teal-500/10 scale-[1.03]'
                        : 'bg-white/40 dark:bg-slate-800/40 border-slate-200/60 dark:border-slate-700/40 text-slate-400 dark:text-slate-500 hover:border-slate-300 dark:hover:border-slate-600'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Pass Limit Selector - Custom Pills */}
            <div>
              <label className="text-[10px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-widest block mb-2.5">🔄 Pas Limiti</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: 3, label: '3 Pas' },
                  { value: 5, label: '5 Pas' },
                  { value: 10, label: '10 Pas' },
                ].map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setPassLimit(opt.value)}
                    className={`py-3 rounded-xl border-2 text-xs font-black uppercase tracking-wider transition-all cursor-pointer active:scale-95 ${
                      passLimit === opt.value
                        ? 'bg-teal-50 dark:bg-teal-950/30 border-teal-500 text-teal-600 dark:text-teal-400 shadow-md shadow-teal-500/10 scale-[1.03]'
                        : 'bg-white/40 dark:bg-slate-800/40 border-slate-200/60 dark:border-slate-700/40 text-slate-400 dark:text-slate-500 hover:border-slate-300 dark:hover:border-slate-600'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Instruction */}
            <div className="p-5 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-xs leading-relaxed text-slate-650 dark:text-slate-350 text-left">
              <span className="font-black text-teal-500 block mb-1.5">Oyun Kuralları (Bireysel Mod)</span>
              Tahtaya bir anlatıcı öğrenci gelir. Süre boyunca en üstteki kelimeyi altındaki <strong>5 yasaklı kelimeyi</strong> kullanmadan sınıf arkadaşlarına anlatmaya çalışır. 
              Sınıf bildikçe öğretmen <strong>"Doğru"</strong>, yasaklı kelime kullanılırsa <strong>"Tabu"</strong> butonuna basar. Amaç süre bitene kadar en çok kelimeyi anlatmaktır!
            </div>
          </div>

          <button
            onClick={handleStartGame}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-black uppercase text-sm tracking-wider hover:opacity-95 active:scale-95 transition-all shadow-lg shadow-emerald-500/20 cursor-pointer"
          >
            Oyunu Başlat! 🚀
          </button>
        </div>
      )}

      {/* ===================== 2. GAMEPLAY SCREEN ===================== */}
      {gameState === 'playing' && activeCard && (
        <div className="space-y-6 animate-fade-in">
          
          {/* Top Panel stats */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-white/20 dark:bg-slate-900/40 backdrop-blur-md p-4 rounded-2xl border border-white/30 dark:border-slate-800/60 shadow-md">
            <div>
              <span className="text-2xs text-slate-400 uppercase font-black">Net Skor</span>
              <h4 className="text-xl font-black text-teal-500">
                {netScore} Puan
              </h4>
            </div>

            {/* Countdown timer */}
            <div className="flex items-center gap-3">
              <div className={`px-4 py-2 rounded-xl text-lg font-black font-mono transition-colors shadow-md ${
                timeLeft <= 10 
                  ? 'bg-rose-500 text-white animate-pulse' 
                  : 'bg-white/50 dark:bg-slate-850 text-slate-850 dark:text-white'
              }`}>
                {timeLeft} sn
              </div>

              <button
                onClick={() => setIsTimerActive(!isTimerActive)}
                className="p-2.5 rounded-xl bg-white/50 dark:bg-slate-850 text-slate-600 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-slate-700/70 transition-all active:scale-90 cursor-pointer"
                title={isTimerActive ? "Durdur" : "Başlat"}
              >
                {isTimerActive ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
            </div>

            {/* Passes */}
            <div className="text-right">
              <span className="text-2xs text-slate-400 uppercase font-black">Kalan Pas</span>
              <div className="text-sm font-bold text-slate-650 dark:text-slate-350">
                {passLimit - passesUsed} / {passLimit}
              </div>
            </div>
          </div>

          {/* ACTIVE CARD ROW */}
          <div className="flex flex-col md:flex-row gap-6">
            
            {/* Taboo word and card display */}
            <div className="flex-1 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md p-6 rounded-3xl border border-teal-500/25 shadow-2xl flex flex-col justify-between min-h-[380px]">
              
              {/* Category */}
              <span className="text-3xs font-black uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Kategori: {activeCard.category}
              </span>

              {/* Target Word */}
              <div className="text-center py-6">
                <span className="text-2xs text-slate-400 font-bold block mb-1">ANLATILACAK KELİME</span>
                <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent uppercase tracking-wider">
                  {activeCard.word}
                </h3>
              </div>

              {/* Forbidden Words */}
              <div className="bg-rose-500/10 dark:bg-rose-500/5 border border-rose-500/20 p-5 rounded-2xl text-center">
                <span className="text-3xs text-rose-500 font-black tracking-widest block mb-3">YASAKLI KELİMELER</span>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                  {activeCard.forbidden.map((forb, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 rounded-xl bg-white/60 dark:bg-slate-850/60 border border-rose-500/30 text-rose-500 dark:text-rose-450 text-xs sm:text-sm font-bold shadow-sm"
                    >
                      {forb}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Side Actions Column */}
            <div className="w-full md:w-[240px] flex flex-col justify-between gap-4">
              
              {/* Stats card */}
              <div className="bg-white/20 dark:bg-slate-900/40 backdrop-blur-md p-5 rounded-3xl border border-white/30 dark:border-slate-800/60 shadow-md text-center">
                <span className="text-3xs text-slate-400 uppercase font-black block mb-1">Durum Sayacı</span>
                <div className="flex items-center justify-around font-bold">
                  <div>
                    <span className="text-3xs text-emerald-500 block">Doğru</span>
                    <span className="text-lg text-emerald-500">{correctCount}</span>
                  </div>
                  <div className="w-px h-8 bg-white/30 dark:bg-slate-800/60" />
                  <div>
                    <span className="text-3xs text-rose-500 block">Tabu</span>
                    <span className="text-lg text-rose-500">{tabooCount}</span>
                  </div>
                </div>
              </div>

              {/* Moderator Buttons */}
              <div className="space-y-3 flex-1 flex flex-col justify-center">
                
                {/* DOĞRU */}
                <button
                  onClick={handleCorrect}
                  className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl font-black uppercase text-xs tracking-wider flex items-center justify-center gap-2 hover:opacity-95 shadow-md shadow-emerald-500/10 active:scale-95 transition-all cursor-pointer"
                >
                  <CheckCircle className="w-5 h-5" /> Doğru (+1)
                </button>

                {/* TABU */}
                <button
                  onClick={handleTaboo}
                  className="w-full py-4 bg-gradient-to-r from-rose-500 to-red-650 text-white rounded-2xl font-black uppercase text-xs tracking-wider flex items-center justify-center gap-2 hover:opacity-95 shadow-md shadow-rose-500/10 active:scale-95 transition-all cursor-pointer"
                >
                  <AlertTriangle className="w-5 h-5" /> Tabu (-1)
                </button>

                {/* PAS */}
                <button
                  onClick={handlePass}
                  disabled={passesUsed >= passLimit}
                  className={`w-full py-4 rounded-2xl font-black uppercase text-xs tracking-wider flex items-center justify-center gap-2 shadow-md transition-all ${
                    passesUsed >= passLimit
                      ? 'bg-slate-300 dark:bg-slate-800 text-slate-400 dark:text-slate-650 cursor-not-allowed border border-transparent'
                      : 'bg-gradient-to-r from-amber-400 to-orange-500 text-white hover:opacity-95 active:scale-95 cursor-pointer'
                  }`}
                >
                  Pas Geç ({passLimit - passesUsed} Kalan)
                </button>

              </div>

              {/* Wisdom box */}
              <div className="p-4 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-3xs leading-relaxed text-slate-500 dark:text-slate-400 text-left">
                <div className="flex items-center gap-1 text-sky-500 font-bold mb-1 uppercase">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Hikmet Notu</span>
                </div>
                "{activeCard.wisdom}"
              </div>

            </div>

          </div>

        </div>
      )}

      {/* ===================== 3. END SCREEN ===================== */}
      {gameState === 'ended' && (
        <div className="bg-white/20 dark:bg-slate-900/40 backdrop-blur-md p-8 rounded-3xl border border-white/30 dark:border-slate-800/60 shadow-2xl max-w-md mx-auto text-center animate-scale-up">
          <div className="w-20 h-20 rounded-full bg-yellow-500/20 border-2 border-yellow-500 flex items-center justify-center text-yellow-500 mx-auto mb-6 shadow-lg shadow-yellow-500/10 animate-bounce">
            <Award className="w-10 h-10" />
          </div>

          <h3 className="text-2xl font-black uppercase tracking-wider text-amber-500 mb-2">Süre Bitti!</h3>
          <p className="text-sm text-slate-500 mb-8">Kelime anlatma performansınız tamamlandı.</p>

          {/* Score details */}
          <div className="grid grid-cols-3 gap-3 p-5 bg-white/40 dark:bg-slate-800/40 rounded-2xl border border-white/30 text-center mb-8">
            <div>
              <span className="text-3xs text-emerald-500 font-bold block mb-1">Doğru</span>
              <span className="text-lg font-black text-emerald-500">{correctCount}</span>
            </div>
            <div className="w-px h-10 bg-white/30 dark:bg-slate-800/60 self-center" />
            <div>
              <span className="text-3xs text-rose-500 font-bold block mb-1">Tabu</span>
              <span className="text-lg font-black text-rose-500">{tabooCount}</span>
            </div>
            <div className="col-span-3 h-px bg-white/30 dark:bg-slate-800/60 my-1" />
            <div className="col-span-3">
              <span className="text-3xs text-slate-500 font-bold block mb-0.5">Net Puan</span>
              <span className="text-xl font-black text-yellow-500">{netScore}</span>
            </div>
          </div>

          {/* Stars based on netScore */}
          <div className="flex justify-center gap-1.5 mb-8">
            {[1, 2, 3].map(st => {
              const starsEarned = netScore >= 12 ? 3 : netScore >= 6 ? 2 : netScore >= 2 ? 1 : 0;
              return (
                <Star 
                  key={st} 
                  className={`w-9 h-9 ${st <= starsEarned ? 'fill-yellow-500 text-yellow-500 animate-pulse' : 'text-slate-300 dark:text-slate-700'}`} 
                />
              );
            })}
          </div>

          <button 
            onClick={() => setGameState('setup')}
            className="w-full py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-2xl font-black uppercase text-xs tracking-wider flex items-center justify-center gap-2 hover:opacity-95 shadow-md shadow-emerald-500/10 active:scale-95 transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" /> Yeniden Oyna
          </button>
        </div>
      )}

    </div>
  );
};
