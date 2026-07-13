import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, Lock, Star, Heart, Key, Trophy, RefreshCw, Volume2, VolumeX, 
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

// 50 Levels Configurator
function getLevelConfig(level: number): LevelConfig {
  let gridSize = 9;
  if (level > 10) gridSize = 11;
  if (level > 20) gridSize = 13;
  if (level > 35) gridSize = 15;
  if (level > 45) gridSize = 17;

  let numGates = 1;
  if (level > 8) numGates = 2;
  if (level > 18) numGates = 3;
  if (level > 32) numGates = 4;
  if (level > 42) numGates = 5;

  let numKeys = 0;
  if (level > 10) numKeys = 1;
  if (level > 25) numKeys = 2;
  if (level > 40) numKeys = 3;

  let numChests = 0;
  if (level > 12) numChests = 1;
  if (level > 28) numChests = 2;
  if (level > 44) numChests = 3;

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

  // Helper to check boundaries and visited
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
    
    // Look for unvisited neighbors at distance 2
    const neighbors: [number, number, number, number][] = []; // [targetR, targetC, wallR, wallC]
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
      // Pick a random unvisited neighbor
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

  // Define Start and Exit
  grid[1][1].type = 'start';
  const exitR = gridSize - 2;
  const exitC = gridSize - 2;
  grid[exitR][exitC].type = 'exit';

  // Find all path coordinates (excluding start and exit)
  const paths: [number, number][] = [];
  for (let r = 1; r < gridSize - 1; r++) {
    for (let c = 1; c < gridSize - 1; c++) {
      if (grid[r][c].type === 'path') {
        paths.push([r, c]);
      }
    }
  }

  // Shuffle paths using our seeded PRNG
  const shuffledPaths = shuffleWithRandom(paths, random);

  // Identify dead-ends (path cells with 3 walls surrounding them)
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

  // Places Gates (locked doors) along the paths (prioritizing intersections or corridors)
  const gates: LevelGate[] = [];
  const selectedGates: [number, number][] = [];
  
  // Choose gate positions from paths that are not immediately next to start
  const potentialGatePaths = shuffledPaths.filter(([r, c]) => Math.abs(r - 1) + Math.abs(c - 1) > 2);
  const numGatesToPlace = Math.min(config.numGates, potentialGatePaths.length);

  // Prepare questions for this level's gates
  const shuffledQuestions = shuffleWithRandom(questions, random);

  for (let i = 0; i < numGatesToPlace; i++) {
    const [r, c] = potentialGatePaths[i];
    grid[r][c].type = 'gate';
    grid[r][c].gateIndex = i;
    
    // Choose a unique question
    const q = shuffledQuestions[i % shuffledQuestions.length];

    gates.push({
      row: r,
      col: c,
      question: q,
      solved: false
    });
    selectedGates.push([r, c]);
  }

  // Place Keys (placed preferentially in dead-ends)
  const keys: { row: number; col: number; collected: boolean }[] = [];
  let placedKeys = 0;
  const potentialKeySpots = shuffledDeadEnds.filter(([r, c]) => grid[r][c].type === 'path');
  const fallbackKeySpots = shuffledPaths.filter(([r, c]) => grid[r][c].type === 'path' && !selectedGates.some(([gr, gc]) => gr === r && gc === c));

  while (placedKeys < config.numKeys) {
    let spot: [number, number] | undefined;
    if (potentialKeySpots.length > 0) {
      spot = potentialKeySpots.pop();
    } else if (fallbackKeySpots.length > 0) {
      spot = fallbackKeySpots.pop();
    }

    if (spot) {
      const [r, c] = spot;
      grid[r][c].type = 'key';
      keys.push({ row: r, col: c, collected: false });
      placedKeys++;
    } else {
      break; // No more spaces
    }
  }

  // Place Chests (placed preferentially in remaining dead ends)
  const chests: { row: number; col: number; opened: boolean }[] = [];
  let placedChests = 0;
  const potentialChestSpots = shuffledDeadEnds.filter(([r, c]) => grid[r][c].type === 'path');
  const fallbackChestSpots = shuffledPaths.filter(([r, c]) => grid[r][c].type === 'path' && !selectedGates.some(([gr, gc]) => gr === r && gc === c));

  while (placedChests < config.numChests) {
    let spot: [number, number] | undefined;
    if (potentialChestSpots.length > 0) {
      spot = potentialChestSpots.pop();
    } else if (fallbackChestSpots.length > 0) {
      spot = fallbackChestSpots.pop();
    }

    if (spot) {
      const [r, c] = spot;
      grid[r][c].type = 'chest';
      chests.push({ row: r, col: c, opened: false });
      placedChests++;
    } else {
      break;
    }
  }

  // Extra heart (life) item for large levels
  if (gridSize >= 13 && random() > 0.5) {
    const heartSpot = shuffledPaths.find(([r, c]) => grid[r][c].type === 'path');
    if (heartSpot) {
      const [r, c] = heartSpot;
      grid[r][c].type = 'heart';
    }
  }

  return { grid, gates, keys, chests };
}

// Explorer Characters
const EXPLORERS = [
  { id: 'seyyah_yusuf', name: 'Seyyah Yusuf', desc: 'Genç bir gezgin, hızlı kararlar alır.', icon: '🎒', color: 'from-amber-400 to-orange-500' },
  { id: 'gezgin_zeynep', name: 'Gezgin Zeynep', desc: 'Kadim haritaların fatihi, zeki kaşif.', icon: '🧭', color: 'from-emerald-400 to-teal-500' },
  { id: 'muhendis_cezeri', name: 'Mucit El-Cezeri', desc: 'Mekanik ustası, engelleri çözen mucit.', icon: '⚙️', color: 'from-sky-400 to-indigo-500' }
];

export const MazeRunnerGame: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  // Game state
  const [gameState, setGameState] = useState<'level_select' | 'explorer_select' | 'playing' | 'victory' | 'gameover'>('level_select');
  const [selectedLevel, setSelectedLevel] = useState<number>(1);
  const [unlockedLevels, setUnlockedLevels] = useState<number>(1);
  const [levelStars, setLevelStars] = useState<Record<number, number>>({});
  
  const [selectedExplorer, setSelectedExplorer] = useState<typeof EXPLORERS[0]>(EXPLORERS[0]);
  const [customConfetti, setCustomConfetti] = useState<{ id: number; left: number; color: string; delay: number }[]>([]);

  const triggerCustomConfetti = (count: number) => {
    const colors = ['#f59e0b', '#10b981', '#3b82f6', '#ec4899', '#8b5cf6', '#ef4444'];
    const newParticles = Array.from({ length: count }).map((_, i) => ({
      id: Math.random() + i,
      left: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 2
    }));
    setCustomConfetti(newParticles);
    setTimeout(() => {
      setCustomConfetti([]);
    }, 5000);
  };

  // Level state
  const [grid, setGrid] = useState<GridCell[][]>([]);
  const [playerPos, setPlayerPos] = useState<{ r: number; c: number }>({ r: 1, c: 1 });
  const [gates, setGates] = useState<LevelGate[]>([]);
  const [keys, setKeys] = useState<{ row: number; col: number; collected: boolean }[]>([]);
  const [chests, setChests] = useState<{ row: number; col: number; opened: boolean }[]>([]);
  
  // Player status
  const [hearts, setHearts] = useState<number>(3);
  const [keysCollected, setKeysCollected] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [activeQuestionGate, setActiveQuestionGate] = useState<LevelGate | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [questionResult, setQuestionResult] = useState<'none' | 'correct' | 'wrong'>('none');
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);

  // Session Question Tracking (No duplicates)
  const usedQuestionsRef = useRef<Set<string>>(new Set());
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Load level progression
  useEffect(() => {
    const savedUnlocked = localStorage.getItem('maze_unlocked_levels');
    if (savedUnlocked) setUnlockedLevels(parseInt(savedUnlocked, 10));

    const savedStars = localStorage.getItem('maze_level_stars');
    if (savedStars) {
      try {
        setLevelStars(JSON.parse(savedStars));
      } catch (e) {
        console.error("Star parse error", e);
      }
    }
  }, []);

  // Save level progression
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

  // Reset all progression
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

  // Timer Effect
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

  // Load / Generate Level
  const initLevel = (levelNum: number) => {
    const config = getLevelConfig(levelNum);
    
    // Choose questions that haven't been used yet in the session
    let availableQuestions = MAZE_QUESTIONS_DB.filter(q => !usedQuestionsRef.current.has(q.id));
    if (availableQuestions.length < config.numGates) {
      // Reset used questions list if exhausted
      usedQuestionsRef.current.clear();
      availableQuestions = MAZE_QUESTIONS_DB;
    }

    // Seeded generation
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
    setHearts(config.gridSize > 11 ? 5 : 3); // 5 hearts for large grids, 3 for small
    setKeysCollected(0);
    setScore(0);
    setTime(0);
    setActiveQuestionGate(null);
    setSelectedAnswer(null);
    setQuestionResult('none');
    setGameState('playing');
  };

  // Handle D-pad and Keyboard Movement
  const movePlayer = (dr: number, dc: number) => {
    if (gameState !== 'playing' || activeQuestionGate) return;

    const newR = playerPos.r + dr;
    const newC = playerPos.c + dc;
    const size = grid.length;

    // Boundary check
    if (newR < 0 || newR >= size || newC < 0 || newC >= size) return;

    const targetCell = grid[newR][newC];

    // Wall collision
    if (targetCell.type === 'wall') {
      if (!isAudioMuted) playSound('fail');
      return;
    }

    // Trigger Gate (Locked Question Door)
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
      grid[newR][newC].type = 'path'; // Clear item
      if (!isAudioMuted) playSound('success');
      setScore(prev => prev + 100);
    }

    // Chest Collision (requires key to open)
    if (targetCell.type === 'chest') {
      const chestIdx = chests.findIndex(ch => ch.row === newR && ch.col === newC);
      const chest = chests[chestIdx];
      
      if (chest && !chest.opened) {
        if (keysCollected > 0) {
          // Open chest
          const updatedChests = chests.map((ch, i) => i === chestIdx ? { ...ch, opened: true } : ch);
          setChests(updatedChests);
          setKeysCollected(prev => prev - 1);
          grid[newR][newC].type = 'path'; // Clear item representation
          if (!isAudioMuted) playSound('complete');
          setScore(prev => prev + 300);
          triggerCustomConfetti(30);
        } else {
          // Locked warning
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

    // Move character
    if (!isAudioMuted) playSound('tick');
    setPlayerPos({ r: newR, c: newC });

    // Exit check
    if (targetCell.type === 'exit') {
      handleVictory();
    }
  };

  // Key Down Handlers
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

  // Handle Question Answer Submission
  const handleAnswerSubmit = (option: string) => {
    if (!activeQuestionGate || questionResult !== 'none') return;
    
    setSelectedAnswer(option);
    
    const isCorrect = option === activeQuestionGate.question.correct;
    if (isCorrect) {
      if (!isAudioMuted) playSound('success');
      setQuestionResult('correct');
      setScore(prev => prev + 150);
      usedQuestionsRef.current.add(activeQuestionGate.question.id);
      
      // Update gate state
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

  // Close question modal and advance
  const closeQuestionModal = () => {
    if (questionResult === 'correct') {
      // Clear the gate on grid
      const { row, col } = activeQuestionGate!;
      grid[row][col].type = 'path';
      setPlayerPos({ r: row, c: col }); // Automatically move player onto the cleared tile
    } else if (questionResult === 'wrong' && hearts > 0) {
      // Replace question so the gate remains locked but has a new question
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

  // Handle Level Win
  const handleVictory = () => {
    setGameState('victory');
    if (!isAudioMuted) playSound('complete');

    // Star calculation
    let stars = 1;
    if (hearts >= 3) stars = 3;
    else if (hearts === 2) stars = 2;

    saveProgress(selectedLevel, stars);

    // Launch celebratory confetti
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
          {/* Audio toggle */}
          <button 
            onClick={() => setIsAudioMuted(!isAudioMuted)} 
            className="p-3 rounded-2xl bg-white/40 dark:bg-slate-800/40 border border-white/30 dark:border-slate-700/30 text-slate-600 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-slate-700/60 transition-all active:scale-95"
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
              className="px-4 py-2.5 rounded-2xl border border-rose-500/30 text-rose-500 bg-rose-500/10 hover:bg-rose-500/20 active:scale-95 transition-all flex items-center gap-2 text-xs font-black uppercase tracking-wider"
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
              className="text-xs font-bold uppercase tracking-wider text-rose-500 hover:underline flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" /> İlerlemeyi Sıfırla
            </button>
          </div>

          {/* 50 Levels Grid */}
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
                    setGameState('explorer_select');
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
                      
                      {/* Star Rating display */}
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

                  {/* Level difficulty tag */}
                  {levelNum % 10 === 0 && !isLocked && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-900 animate-pulse" title="Zor Seviye" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ===================== STATE 2: EXPLORER SELECT ===================== */}
      {gameState === 'explorer_select' && (
        <div className="bg-white/20 dark:bg-slate-900/40 backdrop-blur-md p-8 rounded-3xl border border-white/30 dark:border-slate-800/60 shadow-2xl max-w-2xl mx-auto text-center animate-scale-up">
          <h3 className="text-xl font-black uppercase tracking-wider mb-2">Kaşifini Seç</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Labirente eşlik edecek karakterini belirle.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {EXPLORERS.map(exp => (
              <button
                key={exp.id}
                onClick={() => {
                  setSelectedExplorer(exp);
                  if (!isAudioMuted) playSound('tick');
                }}
                className={`flex flex-col items-center p-5 rounded-2xl border transition-all duration-300 ${
                  selectedExplorer.id === exp.id 
                    ? 'bg-gradient-to-b from-amber-500/20 to-orange-500/10 border-orange-500 ring-2 ring-orange-500/30'
                    : 'bg-white/40 dark:bg-slate-800/40 border-white/30 dark:border-slate-800/30 hover:border-amber-500/50'
                }`}
              >
                <span className="text-4xl mb-3">{exp.icon}</span>
                <span className="font-bold text-sm">{exp.name}</span>
                <span className="text-2xs text-slate-400 dark:text-slate-400 text-center mt-1.5 leading-tight">{exp.desc}</span>
              </button>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <button 
              onClick={() => setGameState('level_select')}
              className="px-6 py-3 rounded-2xl bg-white/40 dark:bg-slate-800/40 border border-white/30 dark:border-slate-700/30 font-bold hover:bg-white/60 dark:hover:bg-slate-700/60 active:scale-95 transition-all text-xs"
            >
              Geri Dön
            </button>
            <button 
              onClick={() => initLevel(selectedLevel)}
              className="px-8 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black uppercase tracking-wider hover:opacity-95 shadow-lg shadow-orange-500/20 active:scale-95 transition-all text-xs flex items-center gap-2"
            >
              Maceraya Başla <Play className="w-4 h-4 fill-white" />
            </button>
          </div>
        </div>
      )}

      {/* ===================== STATE 3: PLAYING ===================== */}
      {gameState === 'playing' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 animate-fade-in">
          
          {/* STATS BAR / INFO PANEL (1 Col) */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <div className="bg-white/20 dark:bg-slate-900/40 backdrop-blur-md p-5 rounded-3xl border border-white/30 dark:border-slate-800/60 shadow-xl">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/20">
                <span className="text-3xl">{selectedExplorer.icon}</span>
                <div>
                  <h4 className="font-black text-sm uppercase">{selectedExplorer.name}</h4>
                  <p className="text-2xs text-slate-500 dark:text-slate-400">Aktif Kaşif</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {/* Level info */}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Seviye:</span>
                  <span className="font-black text-sm text-amber-500">{selectedLevel}</span>
                </div>

                {/* Score */}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Puan:</span>
                  <span className="font-black text-sm text-yellow-500">{score}</span>
                </div>

                {/* Timer */}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Süre:</span>
                  <span className="font-black text-sm text-sky-500">
                    {Math.floor(time / 60)}:{('0' + (time % 60)).slice(-2)}
                  </span>
                </div>

                {/* Hearts */}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Can:</span>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: Math.max(0, hearts) }).map((_, h) => (
                      <Heart key={h} className="w-4 h-4 fill-red-500 text-red-500 animate-pulse" />
                    ))}
                    {Array.from({ length: Math.max(0, (grid.length > 11 ? 5 : 3) - hearts) }).map((_, h) => (
                      <Heart key={h} className="w-4 h-4 text-slate-300 dark:text-slate-700" />
                    ))}
                  </div>
                </div>

                {/* Keys */}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Anahtar:</span>
                  <div className="flex items-center gap-1">
                    <Key className={`w-4 h-4 ${keysCollected > 0 ? 'text-amber-400 fill-amber-400 animate-bounce' : 'text-slate-300 dark:text-slate-700'}`} />
                    <span className="font-black">{keysCollected}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Level Goals */}
            <div className="bg-white/20 dark:bg-slate-900/40 backdrop-blur-md p-5 rounded-3xl border border-white/30 dark:border-slate-800/60 shadow-xl text-xs">
              <h4 className="font-black uppercase tracking-wider mb-3 text-slate-500">Seviye Hedefleri</h4>
              <ul className="flex flex-col gap-2.5">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Labirentin çıkış kapısına ulaşın.</span>
                </li>
                {gates.length > 0 && (
                  <li className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${gates.every(g => g.solved) ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                    <span>Soru kapılarını cevaplayarak açın ({gates.filter(g => g.solved).length}/{gates.length}).</span>
                  </li>
                )}
                {keys.length > 0 && (
                  <li className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${keys.every(k => k.collected) ? 'bg-emerald-500' : 'bg-sky-500'}`} />
                    <span>Anahtarları toplayın ({keys.filter(k => k.collected).length}/{keys.length}).</span>
                  </li>
                )}
                {chests.length > 0 && (
                  <li className="flex items-center gap-2 text-slate-455">
                    <div className={`w-2 h-2 rounded-full ${chests.every(c => c.opened) ? 'bg-emerald-500' : 'bg-purple-500'}`} />
                    <span>İsteğe bağlı sandıkları açın ({chests.filter(c => c.opened).length}/{chests.length}).</span>
                  </li>
                )}
              </ul>
            </div>

            {/* How to Play reminder */}
            <div className="bg-white/10 dark:bg-slate-900/20 p-4 rounded-2xl border border-white/10 text-slate-500 text-3xs leading-relaxed">
              ⌨️ Klavye yön tuşları veya <b>WASD</b> tuşlarıyla hareket edebilirsiniz. Akıllı tahtada oynamak için sağ alttaki dokunmatik yön pedini kullanın.
            </div>
          </div>

          {/* THE MAZE CONTAINER (3 Col) */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center bg-white/20 dark:bg-slate-900/40 backdrop-blur-md p-4 sm:p-6 rounded-3xl border border-white/30 dark:border-slate-800/60 shadow-2xl relative overflow-hidden min-h-[460px]">
            
            {/* The Maze Grid */}
            <div 
              className="grid gap-1 bg-slate-950 p-2.5 rounded-2xl shadow-inner select-none"
              style={{
                gridTemplateColumns: `repeat(${grid.length}, minmax(0, 1fr))`,
                width: '100%',
                maxWidth: grid.length > 13 ? '480px' : '420px',
                aspectRatio: '1'
              }}
            >
              {grid.map((row, r) => 
                row.map((cell, c) => {
                  const isPlayer = playerPos.r === r && playerPos.c === c;
                  
                  return (
                    <div
                      key={`${r}_${c}`}
                      className="relative aspect-square rounded flex items-center justify-center transition-all duration-200 overflow-hidden"
                    >
                      {/* Base Styles for Cell types */}
                      {cell.type === 'wall' && (
                        <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 dark:from-slate-800 dark:to-slate-950 border border-slate-650/15 rounded flex items-center justify-center shadow-md">
                          {/* Inner details to look like stone wall */}
                          <div className="w-[80%] h-[80%] border border-slate-600/10 rounded-sm opacity-20" />
                        </div>
                      )}
                      
                      {cell.type === 'path' && (
                        <div className="w-full h-full bg-slate-900/40 dark:bg-slate-900/60 rounded border border-slate-800/30" />
                      )}

                      {cell.type === 'start' && (
                        <div className="w-full h-full bg-emerald-950/40 rounded border border-emerald-500/40 flex items-center justify-center">
                          <MapPin className="w-[50%] h-[50%] text-emerald-400 animate-pulse" />
                        </div>
                      )}

                      {cell.type === 'exit' && (
                        <div className="w-full h-full bg-amber-950/40 rounded border border-amber-500/50 flex items-center justify-center shadow-lg shadow-amber-500/10">
                          <Award className="w-[60%] h-[60%] text-amber-400 animate-bounce" />
                        </div>
                      )}

                      {cell.type === 'gate' && (
                        <div className="w-full h-full bg-rose-950/40 rounded border-2 border-rose-500 flex items-center justify-center animate-pulse">
                          <Lock className="w-[50%] h-[50%] text-rose-500" />
                        </div>
                      )}

                      {cell.type === 'key' && (
                        <div className="w-full h-full bg-sky-950/20 rounded border border-sky-500/20 flex items-center justify-center">
                          <Key className="w-[50%] h-[50%] text-sky-400 animate-bounce" />
                        </div>
                      )}

                      {cell.type === 'chest' && (
                        <div className="w-full h-full bg-purple-950/30 rounded border border-purple-500/30 flex items-center justify-center">
                          <Trophy className="w-[55%] h-[55%] text-purple-400 animate-pulse" />
                        </div>
                      )}

                      {cell.type === 'heart' && (
                        <div className="w-full h-full bg-red-950/20 rounded border border-red-500/20 flex items-center justify-center">
                          <Heart className="w-[50%] h-[50%] text-red-400 fill-red-400 animate-pulse" />
                        </div>
                      )}

                      {/* Render player avatar on top of current tile */}
                      {isPlayer && (
                        <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-md shadow-lg shadow-orange-500/40 border border-white/30 z-10 scale-110 transition-transform duration-200 animate-pulse">
                          <span className="scale-110">{selectedExplorer.icon}</span>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>

            {/* D-PAD CONTROLLER FOR TOUCH/SMARTBOARDS */}
            <div className="mt-6 flex flex-col items-center gap-1 relative z-10 w-full max-w-[200px]">
              <button 
                onClick={() => movePlayer(-1, 0)}
                className="w-14 h-14 bg-white/40 dark:bg-slate-800/60 backdrop-blur border border-white/50 dark:border-slate-700/50 rounded-2xl flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-500 transition-all active:scale-90 shadow-md cursor-pointer"
              >
                <ArrowUp className="w-6 h-6" />
              </button>
              <div className="flex gap-10">
                <button 
                  onClick={() => movePlayer(0, -1)}
                  className="w-14 h-14 bg-white/40 dark:bg-slate-800/60 backdrop-blur border border-white/50 dark:border-slate-700/50 rounded-2xl flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-500 transition-all active:scale-90 shadow-md cursor-pointer"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => movePlayer(0, 1)}
                  className="w-14 h-14 bg-white/40 dark:bg-slate-800/60 backdrop-blur border border-white/50 dark:border-slate-700/50 rounded-2xl flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-500 transition-all active:scale-90 shadow-md cursor-pointer"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
              <button 
                onClick={() => movePlayer(1, 0)}
                className="w-14 h-14 bg-white/40 dark:bg-slate-800/60 backdrop-blur border border-white/50 dark:border-slate-700/50 rounded-2xl flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-500 transition-all active:scale-90 shadow-md cursor-pointer"
              >
                <ArrowDown className="w-6 h-6" />
              </button>
            </div>

          </div>

          {/* ACTIVE QUESTION MODAL */}
          {activeQuestionGate && (
            <div className="fixed inset-0 z-[9999] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-amber-500/30 p-6 sm:p-8 w-full max-w-lg shadow-2xl relative animate-scale-up">
                
                {/* Question Info */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-500">
                    <BookOpen className="w-4 h-4" />
                    <span>{activeQuestionGate.question.category}</span>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-500 text-3xs font-black uppercase">
                    Kapı Sorusudur
                  </div>
                </div>

                {/* The Question */}
                <h3 className="text-base sm:text-lg font-bold leading-snug mb-6 text-slate-850 dark:text-white">
                  {activeQuestionGate.question.question}
                </h3>

                {/* 4 Choices */}
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
                        // Reveal correct option if answered wrong
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

                {/* Feedback / Wisdom Card */}
                {questionResult !== 'none' && (
                  <div className="animate-fade-in">
                    <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-6 text-left">
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

      {/* ===================== STATE 4: VICTORY SCREEN ===================== */}
      {gameState === 'victory' && (
        <div className="bg-white/20 dark:bg-slate-900/40 backdrop-blur-md p-8 rounded-3xl border border-white/30 dark:border-slate-800/60 shadow-2xl max-w-xl mx-auto text-center animate-scale-up">
          <div className="w-24 h-24 rounded-full bg-yellow-500/20 border-2 border-yellow-500 flex items-center justify-center text-yellow-500 mx-auto mb-6 shadow-lg shadow-yellow-500/10 animate-bounce">
            <Trophy className="w-12 h-12" />
          </div>

          <h3 className="text-2xl font-black uppercase tracking-wider text-amber-500 mb-2">Seviye Tamamlandı!</h3>
          <p className="text-sm text-slate-500 mb-6">Labirenti başarıyla geçtin ve hazineyi korudun.</p>

          {/* Star rating */}
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

          {/* Scores summary */}
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
                  setGameState('explorer_select');
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

      {/* ===================== STATE 5: GAMEOVER SCREEN ===================== */}
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
