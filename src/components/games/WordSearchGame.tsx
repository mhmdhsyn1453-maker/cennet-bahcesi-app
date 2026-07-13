import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Compass, Trophy, Heart, Clock, Star,
  ArrowRight, RotateCcw, Search, Zap, Eye
} from 'lucide-react';
import { WORD_SEARCH_DB, WordSearchEntry } from '../../data/games/wordSearchQuestions';
import { playSound } from '../BuzzerAndTimer';

// Türkçe büyük harf çevirici
const toTurkishUpperCase = (str: string): string => {
  return str.replace(/i/g, 'İ').replace(/ı/g, 'I').toUpperCase();
};

const TURKISH_LETTERS = ['A', 'B', 'C', 'Ç', 'D', 'E', 'F', 'G', 'H', 'I', 'İ', 'K', 'L', 'M', 'N', 'O', 'Ö', 'P', 'R', 'S', 'Ş', 'T', 'U', 'Ü', 'V', 'Y', 'Z'];

// Seviye yapılandırmaları
const LEVEL_CONFIG = {
  easy: {
    gridSize: 8,
    wordCount: 3,
    time: 90,
    directions: [
      [0, 1],   // → sağa
      [1, 0],   // ↓ aşağı
    ] as [number, number][],
    label: 'Kolay',
    color: 'emerald',
    points: 10,
    hasLives: false,
  },
  medium: {
    gridSize: 10,
    wordCount: 5,
    time: 60,
    directions: [
      [0, 1],   // → sağa
      [1, 0],   // ↓ aşağı
      [0, -1],  // ← sola
      [-1, 0],  // ↑ yukarı
    ] as [number, number][],
    label: 'Orta',
    color: 'amber',
    points: 25,
    hasLives: false,
  },
  hard: {
    gridSize: 12,
    wordCount: 7,
    time: 45,
    directions: [
      [0, 1],   // → sağa
      [1, 0],   // ↓ aşağı
      [0, -1],  // ← sola
      [-1, 0],  // ↑ yukarı
      [1, 1],   // ↘ çapraz sağ aşağı
      [-1, -1], // ↖ çapraz sol yukarı
      [1, -1],  // ↙ çapraz sol aşağı
      [-1, 1],  // ↗ çapraz sağ yukarı
    ] as [number, number][],
    label: 'Zor',
    color: 'rose',
    points: 50,
    hasLives: true,
    lives: 3,
  },
};

type GameMode = 'classic' | 'clue';
type Difficulty = 'easy' | 'medium' | 'hard';
type GamePhase = 'mode_select' | 'intro' | 'playing' | 'level_complete' | 'game_over' | 'all_complete';

interface GridCell {
  letter: string;
  row: number;
  col: number;
  highlighted: boolean;
  permanentlyHighlighted: boolean;
  foundColor?: string;
}

interface WordInfo {
  word: string;
  clue: string;
  cells: { r: number; c: number }[];
}

// Son kullanılan kelimeleri localStorage'dan al
const STORAGE_KEY = 'word_search_used_words';
const MAX_RECENT = 100;

const getRecentlyUsed = (): string[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch { return []; }
};

const saveRecentlyUsed = (words: string[]) => {
  try {
    const current = getRecentlyUsed();
    const updated = [...current, ...words].slice(-MAX_RECENT);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch { /* ignore */ }
};

// Kelime havuzundan random seçim (tekrarsız)
const selectWords = (difficulty: Difficulty, count: number): WordSearchEntry[] => {
  const pool = WORD_SEARCH_DB.filter(e => e.difficulty === difficulty);
  const recent = new Set(getRecentlyUsed());
  let available = pool.filter(e => !recent.has(toTurkishUpperCase(e.word)));

  // Yeterli kelime yoksa havuzu sıfırla
  if (available.length < count) {
    localStorage.removeItem(STORAGE_KEY);
    available = pool;
  }

  // Shuffle ve seç
  const shuffled = [...available].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// Grid'e kelime yerleştirme
const placeWordsInGrid = (
  words: string[],
  gridSize: number,
  directions: [number, number][]
): { grid: string[][]; placements: { word: string; cells: { r: number; c: number }[] }[] } | null => {
  const grid: string[][] = Array.from({ length: gridSize }, () => Array(gridSize).fill(''));
  const placements: { word: string; cells: { r: number; c: number }[] }[] = [];

  for (const word of words) {
    let placed = false;
    let attempts = 0;

    while (!placed && attempts < 200) {
      attempts++;
      const dir = directions[Math.floor(Math.random() * directions.length)];
      const [dr, dc] = dir;

      const maxR = dr === 0 ? gridSize : (dr > 0 ? gridSize - word.length : gridSize);
      const maxC = dc === 0 ? gridSize : (dc > 0 ? gridSize - word.length : gridSize);
      const minR = dr < 0 ? word.length - 1 : 0;
      const minC = dc < 0 ? word.length - 1 : 0;

      if (minR >= maxR || minC >= maxC) continue;

      const startR = minR + Math.floor(Math.random() * (maxR - minR));
      const startC = minC + Math.floor(Math.random() * (maxC - minC));

      // Çakışma kontrolü
      let canPlace = true;
      const cells: { r: number; c: number }[] = [];
      for (let i = 0; i < word.length; i++) {
        const r = startR + i * dr;
        const c = startC + i * dc;
        if (r < 0 || r >= gridSize || c < 0 || c >= gridSize) { canPlace = false; break; }
        const existing = grid[r][c];
        if (existing !== '' && existing !== word[i]) { canPlace = false; break; }
        cells.push({ r, c });
      }

      if (canPlace) {
        for (let i = 0; i < word.length; i++) {
          grid[cells[i].r][cells[i].c] = word[i];
        }
        placements.push({ word, cells });
        placed = true;
      }
    }

    if (!placed) return null; // Yerleştirilemezse tekrar dene
  }

  // Boşları rastgele harflerle doldur
  for (let r = 0; r < gridSize; r++) {
    for (let c = 0; c < gridSize; c++) {
      if (grid[r][c] === '') {
        grid[r][c] = TURKISH_LETTERS[Math.floor(Math.random() * TURKISH_LETTERS.length)];
      }
    }
  }

  return { grid, placements };
};

// Bulunan kelime renkleri
const FOUND_COLORS = [
  'bg-emerald-500', 'bg-sky-500', 'bg-violet-500', 'bg-amber-500',
  'bg-rose-500', 'bg-teal-500', 'bg-indigo-500'
];

interface WordSearchGameProps {
  isDarkMode: boolean;
}

export const WordSearchGame: React.FC<WordSearchGameProps> = ({ isDarkMode }) => {
  const [gameMode, setGameMode] = useState<GameMode>('classic');
  const [phase, setPhase] = useState<GamePhase>('mode_select');
  const [currentLevel, setCurrentLevel] = useState<Difficulty>('easy');
  const [grid, setGrid] = useState<GridCell[][]>([]);
  const [wordInfos, setWordInfos] = useState<WordInfo[]>([]);
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [timer, setTimer] = useState(90);
  const [lives, setLives] = useState(3);
  const [totalScore, setTotalScore] = useState(0);
  const [wrongAttempts, setWrongAttempts] = useState(0);

  // Swipe state
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{ r: number; c: number } | null>(null);
  const [dragCurrent, setDragCurrent] = useState<{ r: number; c: number } | null>(null);
  const [highlightedCells, setHighlightedCells] = useState<{ r: number; c: number }[]>([]);

  const gridRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Timer Effect
  useEffect(() => {
    if (phase !== 'playing') return;
    timerRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          playSound('fail');
          setPhase('game_over');
          return 0;
        }
        if (prev <= 6) playSound('tick');
        return prev - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [phase]);

  // Seviye başlat
  const startLevel = useCallback((level: Difficulty) => {
    const config = LEVEL_CONFIG[level];
    const selectedEntries = selectWords(level, config.wordCount);

    if (selectedEntries.length < config.wordCount) return; // Yeterli kelime yok

    const words = selectedEntries.map(e => toTurkishUpperCase(e.word));

    // Grid'e yerleştir (birkaç deneme)
    let result = null;
    for (let attempt = 0; attempt < 10; attempt++) {
      result = placeWordsInGrid(words, config.gridSize, config.directions);
      if (result) break;
    }

    if (!result) {
      // Fallback: daha az kelimeyle dene
      const fewerWords = words.slice(0, Math.max(2, config.wordCount - 2));
      result = placeWordsInGrid(fewerWords, config.gridSize, config.directions);
    }

    if (!result) return;

    const gridCells: GridCell[][] = result.grid.map((row, ri) =>
      row.map((letter, ci) => ({
        letter,
        row: ri,
        col: ci,
        highlighted: false,
        permanentlyHighlighted: false,
      }))
    );

    const infos: WordInfo[] = result.placements.map((p, idx) => ({
      word: p.word,
      clue: selectedEntries[idx]?.clue || '',
      cells: p.cells,
    }));

    // Kullanılan kelimeleri kaydet
    saveRecentlyUsed(words);

    setGrid(gridCells);
    setWordInfos(infos);
    setFoundWords([]);
    setCurrentLevel(level);
    setTimer(config.time);
    setWrongAttempts(0);
    if (level === 'hard') setLives(3);
    setDragStart(null);
    setDragCurrent(null);
    setHighlightedCells([]);
    setIsDragging(false);
    setPhase('playing');
    playSound('complete');
  }, [gameMode]);

  // İki nokta arası çizgi hücreleri (yatay, dikey, çapraz)
  const getLineCells = (r1: number, c1: number, r2: number, c2: number): { r: number; c: number }[] => {
    const dr = r2 - r1;
    const dc = c2 - c1;

    // Yatay, dikey veya 45° çapraz olmalı
    if (dr !== 0 && dc !== 0 && Math.abs(dr) !== Math.abs(dc)) return [];

    const steps = Math.max(Math.abs(dr), Math.abs(dc));
    if (steps === 0) return [{ r: r1, c: c1 }];

    const stepR = dr === 0 ? 0 : dr / Math.abs(dr);
    const stepC = dc === 0 ? 0 : dc / Math.abs(dc);

    const cells: { r: number; c: number }[] = [];
    for (let i = 0; i <= steps; i++) {
      cells.push({ r: r1 + i * stepR, c: c1 + i * stepC });
    }
    return cells;
  };

  // Touch/Mouse → Grid koordinatı
  const getGridCoords = (clientX: number, clientY: number): { r: number; c: number } | null => {
    if (!gridRef.current) return null;
    const config = LEVEL_CONFIG[currentLevel];
    const rect = gridRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const cellSize = rect.width / config.gridSize;
    const c = Math.floor(x / cellSize);
    const r = Math.floor(y / cellSize);
    if (r < 0 || r >= config.gridSize || c < 0 || c >= config.gridSize) return null;
    return { r, c };
  };

  // Drag başla
  const handleDragStart = (r: number, c: number) => {
    if (phase !== 'playing') return;
    setIsDragging(true);
    setDragStart({ r, c });
    setDragCurrent({ r, c });
    setHighlightedCells([{ r, c }]);
    playSound('tick');
  };

  // Drag devam
  const handleDragMove = (clientX: number, clientY: number) => {
    if (!isDragging || !dragStart) return;
    const coords = getGridCoords(clientX, clientY);
    if (!coords) return;
    if (dragCurrent && coords.r === dragCurrent.r && coords.c === dragCurrent.c) return;

    setDragCurrent(coords);
    const cells = getLineCells(dragStart.r, dragStart.c, coords.r, coords.c);
    setHighlightedCells(cells);
  };

  // Drag bitir
  const handleDragEnd = () => {
    if (!isDragging || !dragStart || !dragCurrent) {
      setIsDragging(false);
      setHighlightedCells([]);
      return;
    }

    const cells = getLineCells(dragStart.r, dragStart.c, dragCurrent.r, dragCurrent.c);
    if (cells.length < 2) {
      setIsDragging(false);
      setHighlightedCells([]);
      setDragStart(null);
      setDragCurrent(null);
      return;
    }

    // Seçilen harflerden kelime oluştur
    const forwardWord = cells.map(c => grid[c.r][c.c].letter).join('');
    const reverseWord = [...cells].reverse().map(c => grid[c.r][c.c].letter).join('');

    let matchedInfo: WordInfo | undefined;
    matchedInfo = wordInfos.find(w => w.word === forwardWord && !foundWords.includes(w.word));
    if (!matchedInfo) {
      matchedInfo = wordInfos.find(w => w.word === reverseWord && !foundWords.includes(w.word));
    }

    if (matchedInfo) {
      // Doğru kelime bulundu!
      playSound('success');
      const config = LEVEL_CONFIG[currentLevel];
      const colorIdx = foundWords.length % FOUND_COLORS.length;
      const color = FOUND_COLORS[colorIdx];

      setFoundWords(prev => [...prev, matchedInfo!.word]);
      setTotalScore(prev => prev + config.points);

      // Hücreleri kalıcı olarak renklendir
      setGrid(prev => prev.map((row, ri) => row.map((cell, ci) => {
        const isInLine = cells.some(item => item.r === ri && item.c === ci);
        return isInLine
          ? { ...cell, permanentlyHighlighted: true, highlighted: false, foundColor: color }
          : cell;
      })));

      // Kazanma kontrolü
      const newFoundCount = foundWords.length + 1;
      if (newFoundCount >= wordInfos.length) {
        if (timerRef.current) clearInterval(timerRef.current);
        // Süre bonusu
        const timeBonus = timer * 2;
        setTotalScore(prev => prev + timeBonus);
        setTimeout(() => {
          playSound('complete');
          setPhase('level_complete');
        }, 600);
      }
    } else {
      // Yanlış seçim
      playSound('fail');
      setWrongAttempts(prev => prev + 1);

      if (currentLevel === 'hard' && LEVEL_CONFIG.hard.hasLives) {
        setLives(prev => {
          const newLives = prev - 1;
          if (newLives <= 0) {
            if (timerRef.current) clearInterval(timerRef.current);
            setTimeout(() => setPhase('game_over'), 400);
          }
          return newLives;
        });
      }
    }

    setIsDragging(false);
    setHighlightedCells([]);
    setDragStart(null);
    setDragCurrent(null);
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    const coords = getGridCoords(touch.clientX, touch.clientY);
    if (coords) handleDragStart(coords.r, coords.c);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    handleDragMove(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = () => handleDragEnd();

  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const coords = getGridCoords(e.clientX, e.clientY);
    if (coords) handleDragStart(coords.r, coords.c);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX, e.clientY);
  };

  const handleMouseUp = () => handleDragEnd();

  // Sonraki seviyeye geç
  const nextLevel = () => {
    if (currentLevel === 'easy') startLevel('medium');
    else if (currentLevel === 'medium') startLevel('hard');
    else setPhase('all_complete');
  };

  const config = LEVEL_CONFIG[currentLevel];
  const cellSizeClass = currentLevel === 'easy'
    ? 'w-10 h-10 sm:w-12 sm:h-12 text-sm sm:text-base'
    : currentLevel === 'medium'
      ? 'w-8 h-8 sm:w-10 sm:h-10 text-xs sm:text-sm'
      : 'w-7 h-7 sm:w-8 sm:h-8 text-[10px] sm:text-xs';

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <AnimatePresence mode="wait">

        {/* ===== MOD SEÇİM EKRANI ===== */}
        {phase === 'mode_select' && (
          <motion.div
            key="mode-select"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center flex flex-col items-center py-4 w-full max-w-lg"
          >
            <Compass className="w-16 h-16 text-rose-500 mb-3 animate-spin" style={{ animationDuration: '8s' }} />
            <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
              Hazine Avcısı
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 max-w-sm leading-relaxed">
              Harf ızgarasındaki gizli kelimeleri parmağınla sürükleyerek bul!
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 w-full">
              <button
                onClick={() => { setGameMode('classic'); setPhase('intro'); }}
                className="group p-5 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-lg transition-all cursor-pointer"
              >
                <Search className="w-10 h-10 text-emerald-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="block text-sm font-black text-slate-800 dark:text-white uppercase">Klasik Mod</span>
                <span className="block text-[10px] text-slate-500 dark:text-slate-400 mt-1">Kelimeleri gör,<br />ızgarada bul!</span>
              </button>
              <button
                onClick={() => { setGameMode('clue'); setPhase('intro'); }}
                className="group p-5 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-violet-400 dark:hover:border-violet-500 hover:shadow-lg transition-all cursor-pointer"
              >
                <Eye className="w-10 h-10 text-violet-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="block text-sm font-black text-slate-800 dark:text-white uppercase">İpucu Modu</span>
                <span className="block text-[10px] text-slate-500 dark:text-slate-400 mt-1">İpuçlarını oku,<br />kelimeyi tahmin et!</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* ===== SEVİYE INTRO ===== */}
        {phase === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="text-center flex flex-col items-center py-6 w-full max-w-md"
          >
            <div className="text-5xl mb-3">
              {currentLevel === 'easy' ? '🌱' : currentLevel === 'medium' ? '🔥' : '💎'}
            </div>
            <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase">
              {LEVEL_CONFIG[currentLevel].label} Seviye
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-3 text-left w-full bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2 text-[11px] text-slate-600 dark:text-slate-400">
                <span className="font-bold text-slate-800 dark:text-white">{config.gridSize}×{config.gridSize}</span> Izgara
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-600 dark:text-slate-400">
                <span className="font-bold text-slate-800 dark:text-white">{config.wordCount}</span> Kelime
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-600 dark:text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                <span className="font-bold text-slate-800 dark:text-white">{config.time}</span> Saniye
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-600 dark:text-slate-400">
                {config.hasLives ? (
                  <><Heart className="w-3.5 h-3.5 text-rose-500" /> <span className="font-bold text-slate-800 dark:text-white">3</span> Can</>
                ) : (
                  <><Zap className="w-3.5 h-3.5 text-amber-500" /> Sınırsız deneme</>
                )}
              </div>
            </div>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-3 italic">
              {currentLevel === 'easy' ? 'Yatay ve dikey yönlerde arayın' :
               currentLevel === 'medium' ? 'Ters yönler de eklendi!' :
               'Tüm yönler + çaprazlar aktif!'}
            </p>
            <button
              onClick={() => startLevel(currentLevel)}
              className={`mt-5 px-10 py-3.5 bg-gradient-to-r ${
                currentLevel === 'easy' ? 'from-emerald-500 to-teal-500' :
                currentLevel === 'medium' ? 'from-amber-500 to-orange-500' :
                'from-rose-500 to-pink-500'
              } text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer`}
            >
              Başla! ➔
            </button>
          </motion.div>
        )}

        {/* ===== OYUN EKRANI ===== */}
        {phase === 'playing' && (
          <motion.div
            key="playing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full"
          >
            {/* Üst bilgi çubuğu */}
            <div className="flex items-center justify-between mb-3 px-1">
              {/* Seviye */}
              <div className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full ${
                currentLevel === 'easy' ? 'bg-emerald-100 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400' :
                currentLevel === 'medium' ? 'bg-amber-100 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400' :
                'bg-rose-100 dark:bg-rose-950/30 text-rose-700 dark:text-rose-400'
              }`}>
                {config.label}
              </div>

              {/* Puan */}
              <div className="flex items-center gap-1.5 text-[11px] font-black text-slate-800 dark:text-white">
                <Star className="w-4 h-4 text-amber-500" />
                {totalScore}
              </div>

              {/* Timer */}
              <div className={`flex items-center gap-1.5 text-sm font-black ${
                timer <= 10 ? 'text-rose-500 animate-pulse' : 'text-slate-800 dark:text-white'
              }`}>
                <Clock className="w-4 h-4" />
                {timer}s
              </div>

              {/* Canlar (sadece zor) */}
              {currentLevel === 'hard' && (
                <div className="flex items-center gap-1">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Heart
                      key={i}
                      className={`w-4 h-4 transition-all ${
                        i < lives ? 'text-rose-500 fill-rose-500' : 'text-slate-300 dark:text-slate-600'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
              {/* Sol panel: Kelime listesi */}
              <div className="lg:col-span-4 flex flex-col gap-2 bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border-2 border-slate-200 dark:border-slate-800">
                <span className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest text-center">
                  {gameMode === 'classic' ? 'GİZLİ KELİMELER' : 'İPUÇLARI'}
                </span>
                <div className="flex flex-col gap-2 mt-1">
                  {wordInfos.map((info, idx) => {
                    const found = foundWords.includes(info.word);
                    return (
                      <div
                        key={info.word}
                        className={`p-2.5 rounded-xl border-2 font-display font-black text-xs transition-all text-center ${
                          found
                            ? 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-400 text-emerald-600 dark:text-emerald-400 line-through opacity-70'
                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white shadow-sm'
                        }`}
                      >
                        {gameMode === 'classic' ? (
                          <span className="uppercase tracking-widest">{info.word} {found && '✓'}</span>
                        ) : (
                          <span className="normal-case tracking-normal">
                            {found ? (
                              <span className="uppercase tracking-widest">{info.word} ✓</span>
                            ) : (
                              <>💡 {info.clue}</>
                            )}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="text-center text-[9px] text-slate-400 dark:text-slate-500 mt-1 font-bold">
                  {foundWords.length}/{wordInfos.length} bulundu
                </div>
              </div>

              {/* Sağ panel: Grid */}
              <div className="lg:col-span-8 flex flex-col items-center">
                <div
                  ref={gridRef}
                  className="bg-white dark:bg-slate-850 border-3 border-slate-200 dark:border-slate-700 p-3 rounded-2xl shadow-lg select-none touch-none"
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <div
                    className="grid gap-1"
                    style={{ gridTemplateColumns: `repeat(${config.gridSize}, minmax(0, 1fr))` }}
                  >
                    {grid.map((row, ri) =>
                      row.map((cell, ci) => {
                        const isHighlighted = highlightedCells.some(h => h.r === ri && h.c === ci);
                        const isPermanent = cell.permanentlyHighlighted;

                        let cellStyle = 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white';
                        if (isPermanent) {
                          cellStyle = `${cell.foundColor || 'bg-emerald-500'} border-transparent text-white scale-95`;
                        } else if (isHighlighted) {
                          cellStyle = 'bg-rose-500 border-rose-600 text-white scale-105';
                        }

                        return (
                          <div
                            key={`${ri}_${ci}`}
                            className={`${cellSizeClass} rounded-lg border-2 font-display font-black transition-all duration-100 flex items-center justify-center ${cellStyle}`}
                          >
                            {cell.letter}
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>

                <p className="text-[9px] text-slate-400 dark:text-slate-500 mt-2 italic text-center font-bold">
                  Kelimeyi bulmak için parmağını sürükle ✋
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* ===== SEVİYE TAMAMLANDI ===== */}
        {phase === 'level_complete' && (
          <motion.div
            key="level-complete"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center flex flex-col items-center py-6 w-full max-w-md bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-8 rounded-[2.5rem] shadow-xl"
          >
            <div className="text-5xl mb-3">
              {currentLevel === 'easy' ? '⭐' : currentLevel === 'medium' ? '🌟' : '🏆'}
            </div>
            <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase">
              {config.label} Seviye Tamamlandı!
            </h3>
            <div className="flex items-center gap-2 mt-3">
              <Star className="w-5 h-5 text-amber-500" />
              <span className="text-lg font-black text-amber-600 dark:text-amber-400">{totalScore} Puan</span>
            </div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-2">
              Kalan süre bonusu: +{timer * 2} puan
            </p>

            {currentLevel !== 'hard' ? (
              <button
                onClick={nextLevel}
                className="mt-6 w-full py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                Sonraki Seviye <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setPhase('all_complete')}
                className="mt-6 w-full py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                Sonuçları Gör 🏆
              </button>
            )}
          </motion.div>
        )}

        {/* ===== OYUN BİTTİ (Süre/Can) ===== */}
        {phase === 'game_over' && (
          <motion.div
            key="game-over"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center flex flex-col items-center py-6 w-full max-w-md bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-8 rounded-[2.5rem] shadow-xl"
          >
            <div className="text-5xl mb-3">😞</div>
            <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase">
              {lives <= 0 ? 'Canların Tükendi!' : 'Süre Doldu!'}
            </h3>
            <div className="flex items-center gap-2 mt-3">
              <Star className="w-5 h-5 text-amber-500" />
              <span className="text-lg font-black text-amber-600 dark:text-amber-400">{totalScore} Puan</span>
            </div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-2">
              {foundWords.length}/{wordInfos.length} kelime buldun
            </p>

            <div className="flex gap-3 mt-6 w-full">
              <button
                onClick={() => startLevel(currentLevel)}
                className="flex-1 py-3.5 bg-gradient-to-r from-slate-500 to-slate-600 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" /> Tekrar
              </button>
              <button
                onClick={() => { setTotalScore(0); setCurrentLevel('easy'); setPhase('mode_select'); }}
                className="flex-1 py-3.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                Baştan Başla
              </button>
            </div>
          </motion.div>
        )}

        {/* ===== TÜM SEVİYELER TAMAMLANDI ===== */}
        {phase === 'all_complete' && (
          <motion.div
            key="all-complete"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center flex flex-col items-center py-6 w-full max-w-md bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-8 rounded-[2.5rem] shadow-xl"
          >
            <Trophy className="w-16 h-16 text-yellow-500 mb-3 animate-bounce" />
            <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
              Tebrikler Hazinedar!
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Tüm seviyeleri başarıyla tamamladın!
            </p>
            <div className="flex items-center gap-2 mt-4 text-2xl font-black text-amber-600 dark:text-amber-400">
              <Star className="w-7 h-7 text-amber-500" />
              {totalScore} Puan
            </div>
            <button
              onClick={() => { setTotalScore(0); setCurrentLevel('easy'); setPhase('mode_select'); }}
              className="mt-6 w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Yeniden Oyna ↩️
            </button>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};
