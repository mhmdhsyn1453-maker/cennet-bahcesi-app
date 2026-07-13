import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Trophy,
  Sparkles,
  RotateCcw,
  Heart,
  Play,
  XCircle,
  Flame,
  Clock
} from 'lucide-react';
import { playSound } from '../BuzzerAndTimer';
import { FALLING_WORDS_QUESTIONS_DB, FallingWordQuestion } from '../../data/games/fallingWordsQuestions';

interface Bubble {
  id: number;
  letter: string;
  x: number; // Percentage 5% to 90%
  y: number; // Percentage 0% to 100%
  speed: number; // Falling speed step
  isCorrect: boolean;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  vx: number;
  vy: number;
}

const TURKISH_LETTERS = ['A', 'B', 'C', 'Ç', 'D', 'E', 'F', 'G', 'H', 'I', 'İ', 'J', 'K', 'L', 'M', 'N', 'O', 'Ö', 'P', 'R', 'S', 'Ş', 'T', 'U', 'Ü', 'V', 'Y', 'Z'];

const getLetterClue = (letter: string): string => {
  const idx = TURKISH_LETTERS.indexOf(letter);
  if (idx === -1) return `Harf: ${letter}`;

  const styles = ['index', 'neighbor'];
  const selectedStyle = styles[Math.floor(Math.random() * styles.length)];

  if (selectedStyle === 'index') {
    return `Alfabenin ${idx + 1}. harfi`;
  } else {
    // Neighbor offset (1 or 2 steps)
    const offsets = [-2, -1, 1, 2];
    const validOffsets = offsets.filter(o => idx + o >= 0 && idx + o < TURKISH_LETTERS.length);
    const randomOffset = validOffsets[Math.floor(Math.random() * validOffsets.length)];
    const baseLetter = TURKISH_LETTERS[idx + randomOffset];
    const steps = Math.abs(randomOffset);
    const direction = randomOffset > 0 ? 'solundaki' : 'sağındaki';
    return `"${baseLetter}" harfinin ${steps} ${direction} harf`;
  }
};

export const FallingWordsGame: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const [gameStatus, setGameStatus] = useState<'intro' | 'playing' | 'ended' | 'lost' | 'round_success'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState<FallingWordQuestion | null>(null);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [collectedLetters, setCollectedLetters] = useState<string[]>([]);
  const [lives, setLives] = useState<number>(3);
  const [score, setScore] = useState<number>(0);
  const [round, setRound] = useState<number>(1);
  const [usedWordIds, setUsedWordIds] = useState<string[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [currentLetterClue, setCurrentLetterClue] = useState<string>('');

  const gameLoopRef = useRef<number | null>(null);
  const spawnTimerRef = useRef<NodeJS.Timeout | null>(null);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const bubbleIdRef = useRef<number>(0);
  const collectedIdxRef = useRef<number>(0);
  const targetWordRef = useRef<string>('');
  const isPlayingRef = useRef<boolean>(false);

  // Update letter clue when current target letter changes
  useEffect(() => {
    if (currentQuestion) {
      const nextCorrectLetter = targetWordRef.current[collectedIdxRef.current];
      if (nextCorrectLetter) {
        setCurrentLetterClue(getLetterClue(nextCorrectLetter));
      }
    }
  }, [collectedLetters.length, currentQuestion]);

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      stopGameLoop();
    };
  }, []);

  const stopGameLoop = () => {
    isPlayingRef.current = false;
    if (gameLoopRef.current) {
      cancelAnimationFrame(gameLoopRef.current);
      gameLoopRef.current = null;
    }
    if (spawnTimerRef.current) {
      clearInterval(spawnTimerRef.current);
      spawnTimerRef.current = null;
    }
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
  };

  const handleStart = () => {
    playSound('complete');
    setScore(0);
    setLives(3);
    setRound(1);
    setUsedWordIds([]);
    setTimeElapsed(0);
    startRound(1, []);
  };

  const startRound = (currentRound: number, currentUsedIds: string[]) => {
    // Select a unique question
    const unused = FALLING_WORDS_QUESTIONS_DB.filter(q => !currentUsedIds.includes(q.id));
    const pool = unused.length > 0 ? unused : FALLING_WORDS_QUESTIONS_DB;
    const randomQ = pool[Math.floor(Math.random() * pool.length)];

    setCurrentQuestion(randomQ);
    setCollectedLetters([]);
    setBubbles([]);
    isPlayingRef.current = true;
    setGameStatus('playing');
    
    collectedIdxRef.current = 0;
    targetWordRef.current = randomQ.word.toUpperCase();

    const updatedUsedIds = [...currentUsedIds, randomQ.id];
    setUsedWordIds(updatedUsedIds);

    // Start game animations and loops
    stopGameLoop();
    isPlayingRef.current = true;
    startGameLoop();

    // Start timer interval (ticking every second)
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    timerIntervalRef.current = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
    }, 1000);
  };

  const startGameLoop = () => {
    let lastTime = performance.now();
    
    const loop = (now: number) => {
      if (!isPlayingRef.current) return;

      const delta = (now - lastTime) / 16; // Normalize to ~60fps
      lastTime = now;

      // Update bubbles falling physics
      setBubbles(prevBubbles => {
        return prevBubbles.map(b => {
          return { ...b, y: b.y + b.speed * delta };
        }).filter(b => b.y < 100);
      });

      // Update particles
      setParticles(prev => 
        prev.map(p => ({
          ...p,
          x: p.x + p.vx * delta,
          y: p.y + p.vy * delta,
          vy: p.vy + 0.1 * delta // Gravity effect
        })).filter(p => p.y < 100 && p.x > 0 && p.x < 100)
      );

      if (isPlayingRef.current) {
        gameLoopRef.current = requestAnimationFrame(loop);
      }
    };

    gameLoopRef.current = requestAnimationFrame(loop);

    // Bubble Spawning interval (Every 750ms for more action)
    spawnTimerRef.current = setInterval(() => {
      spawnBubble();
    }, 750);
  };

  const spawnBubble = () => {
    const nextCorrectLetter = targetWordRef.current[collectedIdxRef.current];
    if (!nextCorrectLetter) return;

    setBubbles(prev => {
      // Capped at maximum 15 active bubbles simultaneously on screen
      if (prev.length >= 15) return prev;

      // Check if nextCorrectLetter is already active on the screen
      const isAlreadyOnScreen = prev.some(b => b.letter === nextCorrectLetter);

      // Letter Selection Logic:
      // 15% chance to spawn nextCorrectLetter (if not already on screen)
      // Otherwise, spawn a completely random letter from all Turkish letters
      const randVal = Math.random();
      let letter = '';
      if (randVal < 0.15 && !isAlreadyOnScreen) {
        letter = nextCorrectLetter;
      } else {
        letter = TURKISH_LETTERS[Math.floor(Math.random() * TURKISH_LETTERS.length)];
      }

      // Safe X coordinate selection (avoiding overlaps with bubbles at y < 25%)
      let x = 10 + Math.random() * 80;
      let attempts = 0;
      while (attempts < 15) {
        const overlaps = prev.some(b => b.y < 25 && Math.abs(b.x - x) < 8.5);
        if (!overlaps) break;
        x = 10 + Math.random() * 80;
        attempts++;
      }

      const newBubble: Bubble = {
        id: bubbleIdRef.current++,
        letter,
        x,
        y: 0,
        speed: 0.22 + Math.random() * 0.2 + (round * 0.04), // Slightly slower initial speed to balance the higher spawn frequency
        isCorrect: letter === nextCorrectLetter
      };

      return [...prev, newBubble];
    });
  };

  const handleBubbleClick = (bubble: Bubble, event: React.MouseEvent) => {
    if (gameStatus !== 'playing') return;

    // Get click coordinates relative to the sky zone to trigger particles
    const rect = event.currentTarget.parentElement?.getBoundingClientRect();
    const clickX = rect ? ((event.clientX - rect.left) / rect.width) * 100 : bubble.x;
    const clickY = rect ? ((event.clientY - rect.top) / rect.height) * 100 : bubble.y;

    const nextCorrectLetter = targetWordRef.current[collectedIdxRef.current];

    if (bubble.letter === nextCorrectLetter) {
      playSound('success');
      
      // Update state and ref
      const newLetters = [...collectedLetters, bubble.letter];
      setCollectedLetters(newLetters);
      collectedIdxRef.current += 1;

      // Trigger pop particles
      triggerBubbleParticles(clickX, clickY);

      // Remove bubble from screen
      setBubbles(prev => prev.filter(b => b.id !== bubble.id));

      // Check if word completed
      if (collectedIdxRef.current === targetWordRef.current.length) {
        stopGameLoop();
        setScore(prev => prev + 100);
        setGameStatus('round_success');
        playSound('complete');
      }
    } else {
      playSound('fail');
      triggerBubbleParticles(clickX, clickY, '#ef4444'); // Red particles for failure
      setBubbles(prev => prev.filter(b => b.id !== bubble.id));
      
      setLives(prevLives => {
        const next = prevLives - 1;
        if (next <= 0) {
          setGameStatus('lost');
          stopGameLoop();
        }
        return next;
      });
    }
  };

  const triggerBubbleParticles = (x: number, y: number, color?: string) => {
    const newParticles: Particle[] = [];
    const colors = color ? [color] : ['#3b82f6', '#06b6d4', '#10b981', '#a855f7', '#eab308'];
    for (let i = 0; i < 15; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1 + Math.random() * 4;
      newParticles.push({
        id: Math.random(),
        x,
        y,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: Math.cos(angle) * speed * 0.8,
        vy: Math.sin(angle) * speed * 0.8
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.includes(p)));
    }, 1000);
  };

  const handleNextRound = () => {
    if (round < 5) {
      const nextRound = round + 1;
      setRound(nextRound);
      startRound(nextRound, usedWordIds);
    } else {
      playSound('complete');
      setGameStatus('ended');
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-6 select-none">
      {gameStatus === 'intro' && (
        <div className="text-center flex flex-col items-center py-10 max-w-xl bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-8 rounded-[2.5rem] shadow-xl">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-red-500/10 rounded-full blur-[20px] animate-pulse"></div>
            <div className="w-24 h-24 bg-gradient-to-tr from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg relative">
              <Flame className="w-12 h-12 text-white animate-pulse" />
            </div>
          </div>
          <h3 className="text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tight font-display">
            Kelime Avcısı
          </h3>
          <p className="text-sm text-slate-555 dark:text-slate-400 mt-3 leading-relaxed">
            Yukarıdan aşağı süzülen harf balonlarını <strong>doğru sırada patlatarak</strong> ipucu verilen gizemli kelimeyi avlayın!
            <br />
            Doğru harfi yere düşürmek veya yanlış harfi patlatmak can kaybettirir!
          </p>
          <button
            onClick={handleStart}
            className="mt-8 px-12 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-black text-sm uppercase tracking-wider rounded-2xl shadow-lg hover:shadow-red-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
          >
            <Play className="w-4 h-4 fill-current" /> Oyunu Başlat!
          </button>
        </div>
      )}

      {(gameStatus === 'playing' || gameStatus === 'round_success') && currentQuestion && (
        <div className="w-full max-w-3xl bg-white dark:bg-slate-850 border-3 border-slate-200 dark:border-slate-700 p-6 rounded-[2.5rem] shadow-md flex flex-col gap-5 items-center relative">
          
          {/* Üst Bilgi Paneli */}
          <div className="flex justify-between items-center w-full text-[10px] sm:text-xs font-black text-slate-450 uppercase tracking-widest px-2">
            <span className="flex items-center gap-1.5">
              Aşama: {round} / 5
            </span>
            <span className="text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> Süre: {timeElapsed} Sn
            </span>
            <span className="text-red-500 flex items-center gap-1">
              Canlar: {Array.from({ length: 3 }).map((_, i) => (
                <Heart
                  key={i}
                  className={`w-3.5 h-3.5 fill-current ${i < lives ? 'text-red-500 animate-pulse' : 'text-slate-200 dark:text-slate-750'}`}
                />
              ))}
            </span>
            <span className="text-emerald-650 dark:text-emerald-450">Skor: {score} Puan</span>
          </div>

          {/* Soru / İpucu Kutusu */}
          <div className="w-full p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-center shadow-inner">
            <span className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-1">
              🔑 GİZEMLİ KELİME İPUCU
            </span>
            <p className="text-sm font-extrabold text-slate-750 dark:text-slate-250 leading-relaxed">
              "{currentQuestion.clue}"
            </p>
          </div>

          {/* Gökyüzü / Harf Düşme Alanı */}
          <div className="w-full h-80 bg-gradient-to-b from-sky-100 to-sky-50 dark:from-slate-950 dark:to-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-3xl relative overflow-hidden shadow-inner">
            {/* Dekoratif bulutlar */}
            <div className="absolute top-4 left-6 w-16 h-6 bg-white/70 dark:bg-slate-800/40 rounded-full blur-[2px] animate-pulse"></div>
            <div className="absolute top-10 right-8 w-24 h-8 bg-white/60 dark:bg-slate-800/30 rounded-full blur-[3px]"></div>

            {/* Düşen Balonlar */}
            {bubbles.map(b => {
              return (
                <button
                  key={b.id}
                  onClick={(e) => handleBubbleClick(b, e)}
                  style={{
                    left: `${b.x}%`,
                    top: `${b.y}%`,
                  }}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full absolute -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-amber-400 to-amber-600 dark:from-amber-500 dark:to-amber-700 text-white font-display font-black text-xs sm:text-sm uppercase shadow-lg flex items-center justify-center cursor-pointer transition-transform duration-75 active:scale-90"
                >
                  {b.letter}
                  {/* Glossy Reflection Effect */}
                  <div className="absolute top-1 left-2 w-3 h-1.5 bg-white/30 rounded-full"></div>
                </button>
              );
            })}

            {/* Particle Effects */}
            {particles.map(p => (
              <div
                key={p.id}
                className="w-1.5 h-1.5 rounded-full absolute pointer-events-none"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  backgroundColor: p.color,
                  transform: 'translate(-50%, -50%)'
                }}
              />
            ))}
          </div>

          {/* Kelime Yuvaları (Bulmaca Durumu) */}
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {targetWordRef.current.split('').map((char, i) => {
              const collected = i < collectedLetters.length;
              return (
                <div
                  key={i}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl border-3 flex items-center justify-center font-display font-black text-base sm:text-lg transition-all ${
                    collected
                      ? 'bg-emerald-500 border-emerald-600 text-white shadow-md'
                      : 'bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-800 text-slate-400'
                  }`}
                >
                  {collected ? char : '_'}
                </div>
              );
            })}
          </div>

          {/* Sıradaki Harf İpucu */}
          {gameStatus === 'playing' && currentLetterClue && (
            <span className="text-[10px] sm:text-xs font-black text-indigo-650 dark:text-indigo-400 uppercase tracking-widest bg-indigo-50 dark:bg-indigo-950/20 px-5 py-2.5 rounded-full border border-indigo-100 dark:border-indigo-900/30 flex items-center gap-1.5 animate-pulse">
              🎯 İPUCU: {currentLetterClue}
            </span>
          )}

          {/* Tur Başarılı Kartı */}
          {gameStatus === 'round_success' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 bg-white/95 dark:bg-slate-900/95 z-50 rounded-[2.5rem] p-6 flex flex-col justify-center items-center gap-4 text-center border-3 border-emerald-500"
            >
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-xl font-black text-emerald-600 dark:text-emerald-450 uppercase font-display">
                Kelime Avlandı!
              </h3>
              <p className="text-xs text-slate-450 uppercase font-black tracking-widest mt-1">
                Kelimemiz: <span className="text-sm text-slate-800 dark:text-white underline font-bold">{targetWordRef.current}</span>
              </p>
              
              <div className="p-4 bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-250 dark:border-emerald-900/40 rounded-2xl text-xs font-semibold text-emerald-805 dark:text-emerald-400 leading-relaxed max-w-md shadow-sm">
                <strong>📖 İlahi Hikmet:</strong> {currentQuestion.wisdom}
              </div>

              <button
                onClick={handleNextRound}
                className="mt-2 px-10 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                Sıradaki Tura Geç ➔
              </button>
            </motion.div>
          )}

        </div>
      )}

      {gameStatus === 'lost' && (
        <div className="text-center flex flex-col items-center py-8 w-full max-w-md bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-8 rounded-[2.5rem] shadow-xl animate-scale-up">
          <div className="w-20 h-20 bg-red-100 dark:bg-red-950/20 rounded-full flex items-center justify-center mb-4">
            <XCircle className="w-12 h-12 text-red-500 animate-pulse" />
          </div>
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
            Canlarınız Bitti!
          </h3>
          <p className="text-xs text-slate-500 mt-2">
            Tüm harfleri avlayamadan canlarınız tükendi.
          </p>

          {/* Aranan Doğru Kelime ve Açıklaması */}
          {currentQuestion && (
            <div className="w-full p-4 bg-red-50/50 dark:bg-red-950/10 border border-red-200 dark:border-red-900/30 rounded-2xl text-center mt-4">
              <span className="text-[10px] font-black text-red-500 dark:text-red-400 uppercase tracking-widest block mb-1">
                🎯 ARANAN KELİME
              </span>
              <p className="text-lg font-black text-red-750 dark:text-red-400 uppercase">
                {currentQuestion.word}
              </p>
              <p className="text-xs text-slate-555 dark:text-slate-400 mt-1 leading-relaxed italic">
                "{currentQuestion.clue}"
              </p>
              {currentQuestion.wisdom && (
                <div className="mt-3 pt-3 border-t border-red-200/50 dark:border-red-900/45 text-[11px] font-semibold text-slate-600 dark:text-slate-350 leading-relaxed text-left">
                  <strong>📖 İlahi Hikmet:</strong> {currentQuestion.wisdom}
                </div>
              )}
            </div>
          )}

          <div className="w-full flex flex-col gap-3 my-4 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-2xl">
            <div className="flex justify-between items-center text-xs font-bold text-slate-500 px-2">
              <span>Toplam Skor:</span>
              <span className="text-red-500 font-extrabold">{score} Puan</span>
            </div>
            <div className="flex justify-between items-center text-xs font-bold text-slate-500 px-2">
              <span>Geçen Süre:</span>
              <span className="text-indigo-650 dark:text-indigo-400 font-extrabold">{timeElapsed} Saniye</span>
            </div>
          </div>

          <button
            onClick={handleStart}
            className="w-full py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:shadow-red-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yeniden Dene ↩️
          </button>
        </div>
      )}

      {gameStatus === 'ended' && (
        <div className="text-center flex flex-col items-center py-8 w-full max-w-md bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-8 rounded-[2.5rem] shadow-xl animate-scale-up">
          <div className="w-20 h-20 bg-amber-100 dark:bg-amber-950/20 rounded-full flex items-center justify-center mb-4">
            <Trophy className="w-12 h-12 text-amber-500 animate-bounce" />
          </div>
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
            Harika Avcı!
          </h3>
          <p className="text-xs text-slate-500 mt-2">
            5 turluk Kelime Avcısı müsabakasını başarıyla tamamladınız!
          </p>

          <div className="w-full flex flex-col gap-3 my-6 p-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-2xl">
            <div className="flex justify-between items-center text-xs font-bold text-slate-500 px-2">
              <span>Toplam Skor:</span>
              <span className="text-emerald-600 dark:text-emerald-450 font-extrabold">{score} Puan</span>
            </div>
            <div className="flex justify-between items-center text-xs font-bold text-slate-500 px-2">
              <span>Toplam Süre:</span>
              <span className="text-indigo-650 dark:text-indigo-400 font-extrabold">{timeElapsed} Saniye</span>
            </div>
          </div>

          <button
            onClick={handleStart}
            className="w-full py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:shadow-red-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yeniden Oyna! ↩️
          </button>
        </div>
      )}
    </div>
  );
};
