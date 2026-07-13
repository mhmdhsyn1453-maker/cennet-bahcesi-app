import React, { useState, useEffect, useRef } from 'react';
import { 
  Lock, Star, Heart, Key, Trophy, RefreshCw, Volume2, VolumeX, 
  ChevronLeft, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Award, Compass, 
  MapPin, HelpCircle, BookOpen
} from 'lucide-react';
import { MAZE_QUESTIONS_DB, MazeQuestion } from '../../data/games/mazeQuestions';
import { playSound } from '../BuzzerAndTimer';

// Seeded Pseudo-Random Number Generator (Mulberry32)
function createRandom(seed: number) {
  let h = seed + 0x6D2B79F5;
  return function() {
    let t = h += 0x6D2B79F5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Fisher-Yates shuffle with custom random generator
function shuffleWithRandom<T>(array: T[], randomFn: () => number): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(randomFn() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Maze Cell Type
type MazeCell = 'wall' | 'path' | 'start' | 'exit' | 'gate' | 'key' | 'chest' | 'heart';

interface GridCell {
  row: number;
  col: number;
  type: MazeCell;
  gateIndex?: number; // Link to gate list
  chestOpened?: boolean;
}

interface LevelGate {
  row: number;
  col: number;
  question: MazeQuestion;
  solved: boolean;
}

interface LevelConfig {
  gridSize: number;
  numGates: number;
  numKeys: number;
  numChests: number;
}

// 50 Levels Configurator - Scaled Up for high complexity
function getLevelConfig(level: number): LevelConfig {
  let gridSize = 13; // Level 1-10 is 13x13
  if (level > 10) gridSize = 17; // Level 11-20 is 17x17
  if (level > 20) gridSize = 21; // Level 21-35 is 21x21
  if (level > 35) gridSize = 25; // Level 36-50 is 25x25 (Very complex!)

  let numGates = 1;
  if (level > 8) numGates = 2;
  if (level > 18) numGates = 3;
  if (level > 28) numGates = 4;
  if (level > 38) numGates = 5;
  if (level > 45) numGates = 6;

  let numKeys = 0;
  if (level > 10) numKeys = 1;
  if (level > 20) numKeys = 2;
  if (level > 35) numKeys = 3;

  let numChests = 0;
  if (level > 10) numChests = 1;
  if (level > 20) numChests = 2;
  if (level > 35) numChests = 3;

  return { gridSize, numGates, numKeys, numChests };
}

// Maze Generation using Seeded Depth First Search
function generateSeededMaze(gridSize: number, seed: number, config: LevelConfig, questions: MazeQuestion[]): {
  grid: GridCell[][];
  gates: LevelGate[];
  keys: { row: number; col: number; collected: boolean }[];
  chests: { row: number; col: number; opened: boolean }[];
} {
  const random = createRandom(seed);
  
  // Initialize grid with walls
  const grid: GridCell[][] = Array(gridSize).fill(null).map((_, r) => 
    Array(gridSize).fill(null).map((_, c) => ({
      row: r,
      col: c,
      type: 'wall'
    }))
  );

  const isInside = (r: number, c: number) => r > 0 && r < gridSize - 1 && c > 0 && c < gridSize - 1;

  // DFS Carving
  const stack: [number, number][] = [];
  const startR = 1;
  const startC = 1;
  grid[startR][startC].type = 'path';
  stack.push([startR, startC]);

  const visited = new Set<string>();
  visited.add(`1_1`);

  while (stack.length > 0) {
    const [currR, currC] = stack[stack.length - 1];
    const neighbors: [number, number, number, number][] = [];
    const dirs = [
      [-2, 0, -1, 0], // Up
      [2, 0, 1, 0],  // Down
      [0, -2, 0, -1], // Left
      [0, 2, 0, 1]   // Right
    ];

    for (const [dr, dc, wr, wc] of dirs) {
      const tr = currR + dr;
      const tc = currC + dc;
      if (isInside(tr, tc) && !visited.has(`${tr}_${tc}`)) {
        neighbors.push([tr, tc, currR + wr, currC + wc]);
      }
    }

    if (neighbors.length > 0) {
      const idx = Math.floor(random() * neighbors.length);
      const [tr, tc, wr, wc] = neighbors[idx];
      grid[wr][wc].type = 'path';
      grid[tr][tc].type = 'path';
      visited.add(`${tr}_${tc}`);
      stack.push([tr, tc]);
    } else {
      stack.pop();
    }
  }

  // Set Start and Exit
  grid[1][1].type = 'start';
  const exitR = gridSize - 2;
  const exitC = gridSize - 2;
  grid[exitR][exitC].type = 'exit';

  const paths: [number, number][] = [];
  for (let r = 1; r < gridSize - 1; r++) {
    for (let c = 1; c < gridSize - 1; c++) {
      if (grid[r][c].type === 'path') {
        paths.push([r, c]);
      }
    }
  }

  const shuffledPaths = shuffleWithRandom(paths, random);

  // Find dead ends
  const deadEnds: [number, number][] = [];
  for (const [r, c] of paths) {
    let wallCount = 0;
    if (grid[r-1][c].type === 'wall') wallCount++;
    if (grid[r+1][c].type === 'wall') wallCount++;
    if (grid[r][c-1].type === 'wall') wallCount++;
    if (grid[r][c+1].type === 'wall') wallCount++;
    if (wallCount >= 3) {
      deadEnds.push([r, c]);
    }
  }
  const shuffledDeadEnds = shuffleWithRandom(deadEnds, random);

  // Place Gates (Doors)
  const gates: LevelGate[] = [];
  const selectedGates: [number, number][] = [];
  const potentialGatePaths = shuffledPaths.filter(([r, c]) => Math.abs(r - 1) + Math.abs(c - 1) > 3);
  const numGatesToPlace = Math.min(config.numGates, potentialGatePaths.length);
  const shuffledQuestions = shuffleWithRandom(questions, random);

  for (let i = 0; i < numGatesToPlace; i++) {
    const [r, c] = potentialGatePaths[i];
    grid[r][c].type = 'gate';
    grid[r][c].gateIndex = i;
    const q = shuffledQuestions[i % shuffledQuestions.length];
    gates.push({ row: r, col: c, question: q, solved: false });
    selectedGates.push([r, c]);
  }

  // Place Keys
  const keys: { row: number; col: number; collected: boolean }[] = [];
  let placedKeys = 0;
  const potentialKeySpots = shuffledDeadEnds.filter(([r, c]) => grid[r][c].type === 'path');
  const fallbackKeySpots = shuffledPaths.filter(([r, c]) => grid[r][c].type === 'path' && !selectedGates.some(([gr, gc]) => gr === r && gc === c));

  while (placedKeys < config.numKeys) {
    let spot = potentialKeySpots.pop() || fallbackKeySpots.pop();
    if (spot) {
      const [r, c] = spot;
      grid[r][c].type = 'key';
      keys.push({ row: r, col: c, collected: false });
      placedKeys++;
    } else {
      break;
    }
  }

  // Place Chests
  const chests: { row: number; col: number; opened: boolean }[] = [];
  let placedChests = 0;
  const potentialChestSpots = shuffledDeadEnds.filter(([r, c]) => grid[r][c].type === 'path');
  const fallbackChestSpots = shuffledPaths.filter(([r, c]) => grid[r][c].type === 'path' && !selectedGates.some(([gr, gc]) => gr === r && gc === c));

  while (placedChests < config.numChests) {
    let spot = potentialChestSpots.pop() || fallbackChestSpots.pop();
    if (spot) {
      const [r, c] = spot;
      grid[r][c].type = 'chest';
      chests.push({ row: r, col: c, opened: false });
      placedChests++;
    } else {
      break;
    }
  }

  // Place extra Heart
  if (gridSize >= 17 && random() > 0.4) {
    const heartSpot = shuffledPaths.find(([r, c]) => grid[r][c].type === 'path');
    if (heartSpot) {
      const [r, c] = heartSpot;
      grid[r][c].type = 'heart';
    }
  }

  return { grid, gates, keys, chests };
}

export const MazeRunnerGame: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  // Game states
  const [gameState, setGameState] = useState<'level_select' | 'playing' | 'victory' | 'gameover'>('level_select');
  const [selectedLevel, setSelectedLevel] = useState<number>(1);
  const [unlockedLevels, setUnlockedLevels] = useState<number>(1);
  const [levelStars, setLevelStars] = useState<Record<number, number>>({});
  
  // Grid/Level states
  const [grid, setGrid] = useState<GridCell[][]>([]);
  const [playerPos, setPlayerPos] = useState<{ r: number; c: number }>({ r: 1, c: 1 });
  const [gates, setGates] = useState<LevelGate[]>([]);
  const [keys, setKeys] = useState<{ row: number; col: number; collected: boolean }[]>([]);
  const [chests, setChests] = useState<{ row: number; col: number; opened: boolean }[]>([]);
  
  // Game scores & stats
  const [hearts, setHearts] = useState<number>(3);
  const [keysCollected, setKeysCollected] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [activeQuestionGate, setActiveQuestionGate] = useState<LevelGate | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [questionResult, setQuestionResult] = useState<'none' | 'correct' | 'wrong'>('none');
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [customConfetti, setCustomConfetti] = useState<{ id: number; left: number; color: string; delay: number }[]>([]);

  const usedQuestionsRef = useRef<Set<string>>(new Set());
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Trigger Custom Confetti Effect
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

  // Load level progress from localStorage
  useEffect(() => {
    const savedUnlocked = localStorage.getItem('maze_unlocked_levels');
    if (savedUnlocked) setUnlockedLevels(parseInt(savedUnlocked, 10));

    const savedStars = localStorage.getItem('maze_level_stars');
    if (savedStars) {
      try {
        setLevelStars(JSON.parse(savedStars));
      } catch (e) {
        console.error("Star load error", e);
      }
    }
  }, []);

  // Save level progress
  const saveProgress = (level: number, stars: number) => {
    const currentStars = levelStars[level] || 0;
    const newStars = Math.max(currentStars, stars);
    const updatedStars = { ...levelStars, [level]: newStars };
    setLevelStars(updatedStars);
    localStorage.setItem('maze_level_stars', JSON.stringify(updatedStars));

    const nextLevel = Math.max(unlockedLevels, level + 1);
    if (nextLevel <= 50) {
      setUnlockedLevels(nextLevel);
      localStorage.setItem('maze_unlocked_levels', nextLevel.toString());
    }
  };

  // Reset progress handler
  const resetProgression = () => {
    if (window.confirm("Bütün bölüm ilerlemenizi ve yıldızlarınızı sıfırlamak istediğinize emin misiniz?")) {
      localStorage.removeItem('maze_unlocked_levels');
      localStorage.removeItem('maze_level_stars');
      setUnlockedLevels(1);
      setLevelStars({});
      setGameState('level_select');
      playSound('fail');
    }
  };

  // Timer controller
  useEffect(() => {
    if (gameState === 'playing' && !activeQuestionGate) {
      timerRef.current = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameState, activeQuestionGate]);

  // Launch a level
  const initLevel = (levelNum: number) => {
    const config = getLevelConfig(levelNum);
    
    let availableQuestions = MAZE_QUESTIONS_DB.filter(q => !usedQuestionsRef.current.has(q.id));
    if (availableQuestions.length < config.numGates) {
      usedQuestionsRef.current.clear();
      availableQuestions = MAZE_QUESTIONS_DB;
    }

    const seed = levelNum * 31415 + 9265;
    const { grid: finalGrid, gates: finalGates, keys: finalKeys, chests: finalChests } = generateSeededMaze(
      config.gridSize,
      seed,
      config,
      availableQuestions
    );

    setGrid(finalGrid);
    setGates(finalGates);
    setKeys(finalKeys);
    setChests(finalChests);
    
    setPlayerPos({ r: 1, c: 1 });
    setHearts(config.gridSize > 13 ? 5 : 3); // 5 lives for difficult levels, 3 for easy
    setKeysCollected(0);
    setScore(0);
    setTime(0);
    setActiveQuestionGate(null);
    setSelectedAnswer(null);
    setQuestionResult('none');
    setGameState('playing');
  };

  // Movement Logic
  const movePlayer = (dr: number, dc: number) => {
    if (gameState !== 'playing' || activeQuestionGate) return;

    const newR = playerPos.r + dr;
    const newC = playerPos.c + dc;
    const size = grid.length;

    if (newR < 0 || newR >= size || newC < 0 || newC >= size) return;

    const targetCell = grid[newR][newC];

    // Blocked by wall
    if (targetCell.type === 'wall') {
      if (!isAudioMuted) playSound('fail');
      return;
    }

    // Hit a Gate
    if (targetCell.type === 'gate') {
      const gateIdx = targetCell.gateIndex ?? -1;
      const gate = gates[gateIdx];
      if (gate && !gate.solved) {
        if (!isAudioMuted) playSound('tick');
        setActiveQuestionGate(gate);
        setSelectedAnswer(null);
        setQuestionResult('none');
        return;
      }
    }

    // Collect Key
    if (targetCell.type === 'key') {
      const updatedKeys = keys.map(k => k.row === newR && k.col === newC ? { ...k, collected: true } : k);
      setKeys(updatedKeys);
      setKeysCollected(prev => prev + 1);
      grid[newR][newC].type = 'path';
      if (!isAudioMuted) playSound('success');
      setScore(prev => prev + 100);
    }

    // Hit a Chest
    if (targetCell.type === 'chest') {
      const chestIdx = chests.findIndex(ch => ch.row === newR && ch.col === newC);
      const chest = chests[chestIdx];
      
      if (chest && !chest.opened) {
        if (keysCollected > 0) {
          const updatedChests = chests.map((ch, i) => i === chestIdx ? { ...ch, opened: true } : ch);
          setChests(updatedChests);
          setKeysCollected(prev => prev - 1);
          grid[newR][newC].type = 'path';
          if (!isAudioMuted) playSound('complete');
          setScore(prev => prev + 300);
          triggerCustomConfetti(35);
        } else {
          if (!isAudioMuted) playSound('fail');
          alert("Bu hazine sandığını açmak için en az 1 anahtara ihtiyacınız var! Önce labirentteki anahtarı bulun.");
          return;
        }
      }
    }

    // Collect Heart
    if (targetCell.type === 'heart') {
      setHearts(prev => Math.min(prev + 1, 5));
      grid[newR][newC].type = 'path';
      if (!isAudioMuted) playSound('success');
    }

    // Move player
    if (!isAudioMuted) playSound('tick');
    setPlayerPos({ r: newR, c: newC });

    // Exit Reached
    if (targetCell.type === 'exit') {
      handleVictory();
    }
  };

  // Keyboard controls listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState !== 'playing' || activeQuestionGate) return;
      
      if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') movePlayer(-1, 0);
      if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') movePlayer(1, 0);
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') movePlayer(0, -1);
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') movePlayer(0, 1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameState, playerPos, activeQuestionGate, grid]);

  // Answer Submit Logic
  const handleAnswerSubmit = (option: string) => {
    if (!activeQuestionGate || questionResult !== 'none') return;
    
    setSelectedAnswer(option);
    
    const isCorrect = option === activeQuestionGate.question.correct;
    if (isCorrect) {
      if (!isAudioMuted) playSound('success');
      setQuestionResult('correct');
      setScore(prev => prev + 150);
      usedQuestionsRef.current.add(activeQuestionGate.question.id);
      
      const updatedGates = gates.map(g => 
        g.row === activeQuestionGate.row && g.col === activeQuestionGate.col 
          ? { ...g, solved: true } 
          : g
      );
      setGates(updatedGates);
    } else {
      if (!isAudioMuted) playSound('fail');
      setQuestionResult('wrong');
      setHearts(prev => {
        const nextHearts = prev - 1;
        if (nextHearts <= 0) {
          setTimeout(() => {
            setGameState('gameover');
            if (!isAudioMuted) playSound('fail');
          }, 1500);
        }
        return nextHearts;
      });
    }
  };

  // Close active question and refresh
  const closeQuestionModal = () => {
    if (questionResult === 'correct') {
      const { row, col } = activeQuestionGate!;
      grid[row][col].type = 'path';
      setPlayerPos({ r: row, c: col }); 
    } else if (questionResult === 'wrong' && hearts > 0) {
      const availableQuestions = MAZE_QUESTIONS_DB.filter(q => !usedQuestionsRef.current.has(q.id));
      const newQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)] || MAZE_QUESTIONS_DB[0];
      
      const updatedGates = gates.map(g => 
        g.row === activeQuestionGate!.row && g.col === activeQuestionGate!.col 
          ? { ...g, question: newQuestion } 
          : g
      );
      setGates(updatedGates);
    }
    setActiveQuestionGate(null);
    setSelectedAnswer(null);
    setQuestionResult('none');
  };

  // Victory handler
  const handleVictory = () => {
    setGameState('victory');
    if (!isAudioMuted) playSound('complete');

    let stars = 1;
    if (hearts >= 3) stars = 3;
    else if (hearts === 2) stars = 2;

    saveProgress(selectedLevel, stars);
    triggerCustomConfetti(80);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 select-none font-sans text-slate-800 dark:text-slate-200">
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
      
      {/* HEADER SECTION */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-white/20 dark:bg-slate-900/40 backdrop-blur-md p-4 rounded-3xl border border-white/30 dark:border-slate-800/60 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
            <Compass className="w-6 h-6 animate-spin-slow" />
          </div>
          <div>
            <h2 className="text-xl font-black uppercase tracking-wider bg-gradient-to-r from-amber-600 to-orange-500 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
              Hazine Labirenti
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              50 Seviyeli Dini & Ahlaki Labirent Macerası
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsAudioMuted(!isAudioMuted)} 
            className="p-3 rounded-2xl bg-white/40 dark:bg-slate-800/40 border border-white/30 dark:border-slate-700/30 text-slate-600 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-slate-700/60 transition-all active:scale-95 cursor-pointer"
            title="Sesi Aç/Kapat"
          >
            {isAudioMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>

          {gameState !== 'level_select' && (
            <button 
              onClick={() => {
                if (window.confirm("Bölümden çıkıp ana haritaya dönmek istiyor musunuz?")) {
                  setGameState('level_select');
                  if (!isAudioMuted) playSound('tick');
                }
              }}
              className="px-4 py-2.5 rounded-2xl border border-rose-500/30 text-rose-500 bg-rose-500/10 hover:bg-rose-500/20 active:scale-95 transition-all flex items-center gap-2 text-xs font-black uppercase tracking-wider cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> Çıkış Yap
            </button>
          )}
        </div>
      </div>

      {/* ===================== STATE 1: LEVEL SELECT ===================== */}
      {gameState === 'level_select' && (
        <div className="bg-white/20 dark:bg-slate-900/40 backdrop-blur-md p-6 rounded-3xl border border-white/30 dark:border-slate-800/60 shadow-2xl animate-fade-in">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div>
              <h3 className="text-lg font-bold">Bir Seviye Seçin</h3>
              <p className="text-xs text-slate-500">Seviyeler tamamlandıkça bir sonraki bölüm açılır.</p>
            </div>
            <button 
              onClick={resetProgression}
              className="text-xs font-bold uppercase tracking-wider text-rose-500 hover:underline flex items-center gap-1.5 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" /> İlerlemeyi Sıfırla
            </button>
          </div>

          <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-3 max-h-[460px] overflow-y-auto pr-2 custom-scrollbar">
            {Array.from({ length: 50 }).map((_, i) => {
              const levelNum = i + 1;
              const isLocked = levelNum > unlockedLevels;
              const stars = levelStars[levelNum] || 0;

              return (
                <button
                  key={levelNum}
                  disabled={isLocked}
                  onClick={() => {
                    setSelectedLevel(levelNum);
                    initLevel(levelNum);
                    if (!isAudioMuted) playSound('tick');
                  }}
                  className={`relative aspect-square flex flex-col items-center justify-center p-2 rounded-2xl border transition-all duration-300 ${
                    isLocked 
                      ? 'bg-slate-100/30 dark:bg-slate-800/10 border-slate-200/30 dark:border-slate-800/30 text-slate-400 cursor-not-allowed'
                      : 'bg-white/60 dark:bg-slate-800/60 border-amber-500/20 hover:border-amber-500 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg shadow-amber-500/5 cursor-pointer'
                  }`}
                >
                  {isLocked ? (
                    <Lock className="w-5 h-5 opacity-40" />
                  ) : (
                    <>
                      <span className="text-lg font-black">{levelNum}</span>
                      <div className="flex items-center gap-0.5 mt-1">
                        {[1, 2, 3].map(st => (
                          <Star 
                            key={st} 
                            className={`w-3.5 h-3.5 ${
                              st <= stars 
                                ? 'fill-amber-400 text-amber-400' 
                                : 'text-slate-300 dark:text-slate-600'
                            }`} 
                          />
                        ))}
                      </div>
                    </>
                  )}

                  {levelNum % 10 === 0 && !isLocked && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-900 animate-pulse" title="Zor Seviye" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ===================== STATE 2: PLAYING ===================== */}
      {gameState === 'playing' && (
        <div className="flex flex-col items-center gap-6 animate-fade-in">
          
          {/* HORIZONTAL STATUS BAR */}
          <div className="w-full max-w-5xl flex flex-wrap items-center justify-around gap-4 bg-white/20 dark:bg-slate-900/40 backdrop-blur-md p-4 rounded-2xl border border-white/30 dark:border-slate-800/60 shadow-md text-sm font-bold">
            <div className="flex items-center gap-2">
              <span className="text-slate-500">Seviye:</span>
              <span className="font-black text-amber-500 text-base">{selectedLevel}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-slate-500">Can:</span>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: Math.max(0, hearts) }).map((_, h) => (
                  <Heart key={h} className="w-5 h-5 fill-red-500 text-red-500 animate-pulse" />
                ))}
                {Array.from({ length: Math.max(0, (grid.length > 13 ? 5 : 3) - hearts) }).map((_, h) => (
                  <Heart key={h} className="w-5 h-5 text-slate-300 dark:text-slate-700" />
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-slate-500">Anahtar:</span>
              <div className="flex items-center gap-1">
                <Key className={`w-5 h-5 ${keysCollected > 0 ? 'text-amber-400 fill-amber-400 animate-bounce' : 'text-slate-300 dark:text-slate-700'}`} />
                <span className="font-black text-base">{keysCollected}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-slate-500">Puan:</span>
              <span className="font-black text-yellow-500 text-base">{score}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-slate-500">Süre:</span>
              <span className="font-black text-sky-500 text-base">
                {Math.floor(time / 60)}:{('0' + (time % 60)).slice(-2)}
              </span>
            </div>
          </div>

          {/* MAIN GAME AREA */}
          <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-8">
            
            {/* THE MAZE GRID BOX (Large Size, max-width 640px) */}
            <div className="flex-1 flex items-center justify-center bg-white/20 dark:bg-slate-900/40 backdrop-blur-md p-4 rounded-3xl border border-white/30 dark:border-slate-800/60 shadow-2xl relative overflow-hidden w-full max-w-[640px] aspect-square">
              <div 
                className="grid gap-0.5 bg-slate-950 p-2.5 rounded-2xl shadow-inner w-full h-full select-none"
                style={{
                  gridTemplateColumns: `repeat(${grid.length}, minmax(0, 1fr))`,
                }}
              >
                {grid.map((row, r) => 
                  row.map((cell, c) => {
                    const isPlayer = playerPos.r === r && playerPos.c === c;
                    
                    return (
                      <div
                        key={`${r}_${c}`}
                        className="relative w-full h-full rounded-sm flex items-center justify-center overflow-hidden"
                      >
                        {cell.type === 'wall' && (
                          <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 dark:from-slate-800 dark:to-slate-950 border border-slate-650/15 rounded-sm shadow-md" />
                        )}
                        
                        {cell.type === 'path' && (
                          <div className="w-full h-full bg-slate-900/40 dark:bg-slate-900/60 rounded-sm" />
                        )}

                        {cell.type === 'start' && (
                          <div className="w-full h-full bg-emerald-950/40 rounded-sm border border-emerald-500/40 flex items-center justify-center">
                            <MapPin className="w-[60%] h-[60%] text-emerald-400 animate-pulse" />
                          </div>
                        )}

                        {cell.type === 'exit' && (
                          <div className="w-full h-full bg-amber-950/40 rounded-sm border border-amber-500/50 flex items-center justify-center shadow-lg shadow-amber-500/10">
                            <Award className="w-[70%] h-[70%] text-amber-400 animate-bounce" />
                          </div>
                        )}

                        {cell.type === 'gate' && (
                          <div className="w-full h-full bg-rose-950/40 rounded-sm border border-rose-500 flex items-center justify-center animate-pulse">
                            <Lock className="w-[60%] h-[60%] text-rose-500" />
                          </div>
                        )}

                        {cell.type === 'key' && (
                          <div className="w-full h-full bg-sky-950/20 rounded-sm flex items-center justify-center">
                            <Key className="w-[60%] h-[60%] text-sky-400 animate-bounce" />
                          </div>
                        )}

                        {cell.type === 'chest' && (
                          <div className="w-full h-full bg-purple-950/30 rounded-sm flex items-center justify-center">
                            <Trophy className="w-[65%] h-[65%] text-purple-400 animate-pulse" />
                          </div>
                        )}

                        {cell.type === 'heart' && (
                          <div className="w-full h-full bg-red-950/20 rounded-sm flex items-center justify-center">
                            <Heart className="w-[60%] h-[60%] text-red-400 fill-red-400 animate-pulse" />
                          </div>
                        )}

                        {isPlayer && (
                          <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/40 border border-white/30 z-10 scale-110 transition-transform duration-200 animate-pulse">
                            <span className="scale-125">🧭</span>
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* ERGONOMIC SIDE D-PAD CONTROLLER */}
            <div className="flex flex-col items-center justify-center bg-white/20 dark:bg-slate-900/40 backdrop-blur-md p-6 rounded-3xl border border-white/30 dark:border-slate-800/60 shadow-xl w-full max-w-[200px] min-h-[220px]">
              <span className="text-3xs text-slate-500 uppercase tracking-widest font-black mb-4">Kontroller</span>
              <div className="flex flex-col items-center gap-1">
                <button 
                  onClick={() => movePlayer(-1, 0)}
                  className="w-14 h-14 bg-white/50 dark:bg-slate-800/70 border border-white/40 dark:border-slate-700/40 rounded-2xl flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-500 hover:border-amber-500 dark:hover:border-amber-500 transition-all active:scale-90 shadow-md cursor-pointer"
                >
                  <ArrowUp className="w-6 h-6" />
                </button>
                <div className="flex gap-4">
                  <button 
                    onClick={() => movePlayer(0, -1)}
                    className="w-14 h-14 bg-white/50 dark:bg-slate-800/70 border border-white/40 dark:border-slate-700/40 rounded-2xl flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-500 hover:border-amber-500 dark:hover:border-amber-500 transition-all active:scale-90 shadow-md cursor-pointer"
                  >
                    <ArrowLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => movePlayer(0, 1)}
                    className="w-14 h-14 bg-white/50 dark:bg-slate-800/70 border border-white/40 dark:border-slate-700/40 rounded-2xl flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-500 hover:border-amber-500 dark:hover:border-amber-500 transition-all active:scale-90 shadow-md cursor-pointer"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
                <button 
                  onClick={() => movePlayer(1, 0)}
                  className="w-14 h-14 bg-white/50 dark:bg-slate-800/70 border border-white/40 dark:border-slate-700/40 rounded-2xl flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-500 hover:border-amber-500 dark:hover:border-amber-500 transition-all active:scale-90 shadow-md cursor-pointer"
                >
                  <ArrowDown className="w-6 h-6" />
                </button>
              </div>
            </div>

          </div>

          {/* ACTIVE QUESTION MODAL */}
          {activeQuestionGate && (
            <div className="fixed inset-0 z-[9999] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-amber-500/30 p-6 sm:p-8 w-full max-w-lg shadow-2xl relative animate-scale-up">
                
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-500">
                    <BookOpen className="w-4 h-4" />
                    <span>{activeQuestionGate.question.category}</span>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-500 text-3xs font-black uppercase">
                    Kapı Sorusudur
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold leading-snug mb-6 text-slate-850 dark:text-white text-left">
                  {activeQuestionGate.question.question}
                </h3>

                <div className="grid grid-cols-1 gap-3 mb-6">
                  {activeQuestionGate.question.options.map((opt, oIdx) => {
                    const isSelected = selectedAnswer === opt;
                    const isCorrectOption = opt === activeQuestionGate.question.correct;
                    
                    let btnStyle = "bg-slate-50 dark:bg-slate-800/40 border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-800 dark:text-slate-200 cursor-pointer";
                    if (selectedAnswer) {
                      if (isSelected) {
                        btnStyle = isCorrectOption 
                          ? "bg-emerald-500 text-white border-emerald-500 shadow-md cursor-default" 
                          : "bg-rose-500 text-white border-rose-500 shadow-md cursor-default";
                      } else if (isCorrectOption && questionResult === 'wrong') {
                        btnStyle = "bg-emerald-500 text-white border-emerald-500 shadow-md cursor-default";
                      } else {
                        btnStyle = "opacity-50 bg-slate-50 dark:bg-slate-800/40 border-slate-200/50 dark:border-slate-700/50 text-slate-400 cursor-default";
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        disabled={selectedAnswer !== null}
                        onClick={() => handleAnswerSubmit(opt)}
                        className={`w-full p-4 text-left rounded-2xl border text-sm font-semibold transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                      >
                        <span>{opt}</span>
                        {selectedAnswer && isCorrectOption && (
                          <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-emerald-500 text-xs font-black shadow">✓</div>
                        )}
                        {selectedAnswer && isSelected && !isCorrectOption && (
                          <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-rose-500 text-xs font-black shadow">✗</div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {questionResult !== 'none' && (
                  <div className="animate-fade-in text-left">
                    <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-6">
                      <div className="flex items-center gap-1.5 text-amber-500 text-xs font-black mb-1.5 uppercase">
                        <HelpCircle className="w-4 h-4" />
                        <span>Hikmet Küpü</span>
                      </div>
                      <p className="text-2xs text-slate-650 dark:text-slate-350 leading-relaxed italic">
                        "{activeQuestionGate.question.wisdom}"
                      </p>
                    </div>

                    <button
                      onClick={closeQuestionModal}
                      className="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black uppercase tracking-wider hover:opacity-95 shadow-md active:scale-95 transition-all text-xs cursor-pointer"
                    >
                      {questionResult === 'correct' ? 'Kapıyı Aç ve Devam Et' : 'Kapat ve Tekrar Dene'}
                    </button>
                  </div>
                )}

              </div>
            </div>
          )}

        </div>
      )}

      {/* ===================== STATE 3: VICTORY SCREEN ===================== */}
      {gameState === 'victory' && (
        <div className="bg-white/20 dark:bg-slate-900/40 backdrop-blur-md p-8 rounded-3xl border border-white/30 dark:border-slate-800/60 shadow-2xl max-w-xl mx-auto text-center animate-scale-up">
          <div className="w-24 h-24 rounded-full bg-yellow-500/20 border-2 border-yellow-500 flex items-center justify-center text-yellow-500 mx-auto mb-6 shadow-lg shadow-yellow-500/10 animate-bounce">
            <Trophy className="w-12 h-12" />
          </div>

          <h3 className="text-2xl font-black uppercase tracking-wider text-amber-500 mb-2">Seviye Tamamlandı!</h3>
          <p className="text-sm text-slate-500 mb-6">Labirenti başarıyla geçtin ve hazineyi korudun.</p>

          <div className="flex justify-center gap-2 mb-8">
            {[1, 2, 3].map(st => {
              const earned = st <= ((hearts >= 3) ? 3 : (hearts === 2) ? 2 : 1);
              return (
                <Star 
                  key={st} 
                  className={`w-10 h-10 ${earned ? 'fill-yellow-500 text-yellow-500 animate-pulse' : 'text-slate-300 dark:text-slate-700'}`} 
                />
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto mb-8 bg-white/45 dark:bg-slate-800/40 p-4 rounded-2xl border border-white/30 text-xs">
            <div className="flex flex-col items-center">
              <span className="text-slate-500 mb-0.5">Toplam Skor</span>
              <span className="font-black text-lg text-amber-500">{score}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-slate-500 mb-0.5">Geçen Süre</span>
              <span className="font-black text-lg text-sky-500">
                {Math.floor(time / 60)}:{('0' + (time % 60)).slice(-2)}
              </span>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button 
              onClick={() => setGameState('level_select')}
              className="px-6 py-3 rounded-2xl bg-white/40 dark:bg-slate-800/40 border border-white/30 dark:border-slate-700/30 font-bold hover:bg-white/60 dark:hover:bg-slate-700/60 active:scale-95 transition-all text-xs cursor-pointer"
            >
              Haritaya Dön
            </button>
            
            {selectedLevel < 50 ? (
              <button 
                onClick={() => {
                  setSelectedLevel(prev => prev + 1);
                  initLevel(selectedLevel + 1);
                  if (!isAudioMuted) playSound('tick');
                }}
                className="px-8 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black uppercase tracking-wider hover:opacity-95 shadow-lg active:scale-95 transition-all text-xs cursor-pointer"
              >
                Sonraki Seviye
              </button>
            ) : (
              <div className="px-6 py-3 rounded-2xl bg-amber-500 text-white font-bold text-xs">
                Oyun Bitti! Tebrikler!
              </div>
            )}
          </div>
        </div>
      )}

      {/* ===================== STATE 4: GAMEOVER SCREEN ===================== */}
      {gameState === 'gameover' && (
        <div className="bg-white/20 dark:bg-slate-900/40 backdrop-blur-md p-8 rounded-3xl border border-white/30 dark:border-slate-800/60 shadow-2xl max-w-md mx-auto text-center animate-scale-up">
          <div className="w-20 h-20 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center text-red-500 mx-auto mb-6 shadow-lg shadow-red-500/10">
            <Heart className="w-10 h-10" />
          </div>

          <h3 className="text-2xl font-black uppercase tracking-wider text-red-500 mb-2">Canlar Tükendi!</h3>
          <p className="text-sm text-slate-500 mb-8">Labirentin içinde canlarını kaybettin. Tekrar deneyebilirsin!</p>

          <div className="flex justify-center gap-4">
            <button 
              onClick={() => setGameState('level_select')}
              className="px-6 py-3 rounded-2xl bg-white/40 dark:bg-slate-800/40 border border-white/30 dark:border-slate-700/30 font-bold hover:bg-white/60 dark:hover:bg-slate-700/60 active:scale-95 transition-all text-xs cursor-pointer"
            >
              Haritaya Dön
            </button>
            <button 
              onClick={() => initLevel(selectedLevel)}
              className="px-8 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black uppercase tracking-wider hover:opacity-95 shadow-lg active:scale-95 transition-all text-xs flex items-center gap-1.5 cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" /> Yeniden Dene
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
