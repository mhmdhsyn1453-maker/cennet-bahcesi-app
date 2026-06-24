import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Sparkles, Heart, Award, ArrowLeft, RefreshCw, Trophy, Brain, Zap, HelpCircle, AlertCircle, Bookmark } from 'lucide-react';
import { playSound } from './BuzzerAndTimer';
import { Team, GameZone } from '../types';

interface GameHubProps {
  teams: Team[];
  onModifyScore: (teamId: string, diff: number) => void;
  onSelectZone: (zoneId: GameZone) => void;
  onOpenExistingAtlas: () => void;
  onResetGame?: () => void;
}

// 1. ADAM ASMACA DATA
interface HangmanWord {
  word: string;
  clue: string;
}

const HANGMAN_WORDS: HangmanWord[] = [
  { word: "PEYGAMBER", clue: "Allah'ın insanlara müjdeci ve uyarıcı olarak gönderdiği elçi." },
  { word: "HİKMET", clue: "Doğru bilgi, ahlak ve varlığın sırlarını anlama kabiliyeti." },
  { word: "EMANET", clue: "Güven duyularak saklanmak üzere bırakılan şey veya kutsal vazifeler." },
  { word: "MELEK", clue: "Gözle görülmeyen, günahsız ve nurdan yaratılmış temiz varlık." },
  { word: "ELİFBA", clue: "Kur'an-ı Kerim harflerinin tamamını içeren ilk sevimli rehber şeması." },
  { word: "ORUÇ", clue: "Ramazan ayında imsak vaktinden akşam vaktine kadar ibadet niyetiyle yapılan nefis terbiyesi." },
  { word: "NAMAZ", clue: "Günün belli vakitlerinde rüku ve secdeyle ifa edilen kutsal ibadet." },
  { word: "ZEKAT", clue: "Zengin müslümanların yılda bir kez malının belli bir kısmını ihtiyaç sahiplerine vermesi." }
];

// Memory Matching Pairs (Simple Arabic letters)
const MEMORY_ITEMS = ["ا", "ب", "ت", "ث", "ج", "ح", "خ", "د"];

interface MemoryCard {
  id: number;
  content: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export const GameHub: React.FC<GameHubProps> = ({
  teams,
  onModifyScore,
  onSelectZone,
  onOpenExistingAtlas,
  onResetGame
}) => {
  const [activeSubGame, setActiveSubGame] = useState<'menu' | 'hangman' | 'memory' | 'math'>('menu');
  const activeTeam = teams.find((t) => t.active) || teams[0];

  // ---------------------------------------------------------
  // GAME A: ADAM ASMACA STATES
  // ---------------------------------------------------------
  const [hangmanObj, setHangmanObj] = useState<HangmanWord>(HANGMAN_WORDS[0]);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [hangmanLives, setHangmanLives] = useState(6);
  const [hangmanStatus, setHangmanStatus] = useState<'playing' | 'won' | 'lost'>('playing');

  const startNewHangman = () => {
    const randomWord = HANGMAN_WORDS[Math.floor(Math.random() * HANGMAN_WORDS.length)];
    setHangmanObj(randomWord);
    setGuessedLetters([]);
    setHangmanLives(6);
    setHangmanStatus('playing');
    playSound('tick');
  };

  const guessLetter = (letter: string) => {
    if (hangmanStatus !== 'playing' || guessedLetters.includes(letter)) return;
    
    const newGuessed = [...guessedLetters, letter];
    setGuessedLetters(newGuessed);

    if (!hangmanObj.word.includes(letter)) {
      const newLives = hangmanLives - 1;
      setHangmanLives(newLives);
      playSound('fail');
      if (newLives <= 0) {
        setHangmanStatus('lost');
        playSound('fail');
      }
    } else {
      playSound('success');
      const allGuessed = hangmanObj.word.split('').every(ch => newGuessed.includes(ch));
      if (allGuessed) {
        setHangmanStatus('won');
        onModifyScore(activeTeam.id, 15);
        playSound('complete');
      }
    }
  };

  // ---------------------------------------------------------
  // GAME B: HAFIZA OYUNU STATES
  // ---------------------------------------------------------
  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [selectedCardIds, setSelectedCardIds] = useState<number[]>([]);
  const [memoryMoves, setMemoryMoves] = useState(0);
  const [memoryFinished, setMemoryFinished] = useState(false);

  const startNewMemory = () => {
    const tempPairs = [...MEMORY_ITEMS, ...MEMORY_ITEMS];
    const shuffled = tempPairs
      .map((item, idx) => ({ id: idx, content: item, isFlipped: false, isMatched: false }))
      .sort(() => 0.5 - Math.random());
    setCards(shuffled);
    setSelectedCardIds([]);
    setMemoryMoves(0);
    setMemoryFinished(false);
    playSound('tick');
  };

  const handleCardClick = (cardId: number) => {
    if (selectedCardIds.length >= 2 || cards[cardId].isMatched || cards[cardId].isFlipped) return;

    const updatedCards = cards.map(c => c.id === cardId ? { ...c, isFlipped: true } : c);
    setCards(updatedCards);
    playSound('tick');

    const newSelection = [...selectedCardIds, cardId];
    setSelectedCardIds(newSelection);

    if (newSelection.length === 2) {
      setMemoryMoves(prev => prev + 1);
      const [firstId, secondId] = newSelection;

      if (cards[firstId].content === cards[secondId].content) {
        // Match!
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(c =>
              c.id === firstId || c.id === secondId ? { ...c, isMatched: true } : c
            )
          );
          setSelectedCardIds([]);
          playSound('success');

          const isAllMatched = updatedCards.every(c => c.isMatched || c.id === firstId || c.id === secondId);
          if (isAllMatched) {
            setMemoryFinished(true);
            onModifyScore(activeTeam.id, 20);
            playSound('complete');
          }
        }, 600);
      } else {
        // No match
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(c =>
              c.id === firstId || c.id === secondId ? { ...c, isFlipped: false } : c
            )
          );
          setSelectedCardIds([]);
          playSound('fail');
        }, 1000);
      }
    }
  };

  // ---------------------------------------------------------
  // GAME C: MATEMATIK YARISI STATES
  // ---------------------------------------------------------
  const [mathScore, setMathScore] = useState(0);
  const [mathTimeLeft, setMathTimeLeft] = useState(30);
  const [mathActive, setMathActive] = useState(false);
  const [mathQuestion, setMathQuestion] = useState<{ query: string; answer: number; options: number[] } | null>(null);

  const startNewMath = () => {
    setMathScore(0);
    setMathTimeLeft(30);
    setMathActive(true);
    generateMathQuestion();
    playSound('tick');
  };

  const generateMathQuestion = () => {
    const ops = ['+', '-', '*'];
    const op = ops[Math.floor(Math.random() * ops.length)];
    let num1 = 0, num2 = 0, ans = 0;

    if (op === '+') {
      num1 = Math.floor(Math.random() * 50) + 10;
      num2 = Math.floor(Math.random() * 40) + 5;
      ans = num1 + num2;
    } else if (op === '-') {
      num1 = Math.floor(Math.random() * 60) + 20;
      num2 = Math.floor(Math.random() * num1);
      ans = num1 - num2;
    } else {
      num1 = Math.floor(Math.random() * 9) + 2;
      num2 = Math.floor(Math.random() * 9) + 2;
      ans = num1 * num2;
    }

    const options = [
      ans,
      ans + (Math.random() > 0.5 ? 5 : -5),
      ans + (Math.random() > 0.5 ? 2 : -2),
      ans + (Math.random() > 0.5 ? 10 : -10)
    ].sort(() => 0.5 - Math.random());

    const uniqueOptions = Array.from(new Set(options)).slice(0, 4);
    if (!uniqueOptions.includes(ans)) {
      uniqueOptions[0] = ans;
    }

    setMathQuestion({
      query: `${num1} ${op === '*' ? 'x' : op} ${num2}`,
      answer: ans,
      options: uniqueOptions.sort(() => 0.5 - Math.random())
    });
  };

  const handleMathAnswer = (selected: number) => {
    if (!mathActive || !mathQuestion) return;

    if (selected === mathQuestion.answer) {
      setMathScore(prev => prev + 10);
      playSound('success');
      generateMathQuestion();
    } else {
      playSound('fail');
    }
  };

  useEffect(() => {
    let timer: any;
    if (mathActive && mathTimeLeft > 0) {
      timer = setInterval(() => {
        setMathTimeLeft(prev => {
          if (prev <= 1) {
            setMathActive(false);
            onModifyScore(activeTeam.id, mathScore);
            playSound('complete');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [mathActive, mathTimeLeft]);

  useEffect(() => {
    if (activeSubGame === 'hangman') startNewHangman();
    if (activeSubGame === 'memory') startNewMemory();
  }, [activeSubGame]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-4 col" id="game-hub-bright">
      {activeSubGame === 'menu' && (
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto mb-10 bg-slate-100/50 p-6 rounded-3xl border-2 border-slate-200">
            <span className="px-4 py-1.5 bg-sky-100 border border-sky-300 rounded-full text-xs font-black text-sky-800 tracking-wider inline-block mb-3 uppercase">
              🎮 EĞLENCELİ SINIF OYUNLARI DÜNYASI
            </span>
            <h1 className="font-display font-black text-3xl sm:text-4xl text-slate-800 mb-2 tracking-tight">EĞLENCELİ SINIF OYUNLARI</h1>
            <p className="text-slate-500 font-medium text-sm">
              Öğrencileri tahtaya çağırarak hem eğlendirecek, hem Kuran harflerini ve dini kavramları pekiştirecek harika akıllı tahta oyunları!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Game Card 1: Adam Asmaca */}
            <div
              onClick={() => setActiveSubGame('hangman')}
              className="bg-white border-3 border-slate-250 p-6 rounded-[2.5rem] flex flex-col justify-between hover:border-emerald-500 hover:shadow-xl cursor-pointer transition relative overflow-hidden group shadow-sm hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-rose-50 rounded-bl-full border-b border-l border-rose-100 pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-rose-50 border-2 border-rose-200 flex items-center justify-center text-xl font-bold mb-4 text-rose-500 shadow-inner">
                  ❤️
                </div>
                <h3 className="text-lg font-black text-slate-800 tracking-tight font-display transition-colors uppercase">ADAM ASMACA</h3>
                <p className="text-xs text-slate-500 font-semibold mt-2 leading-relaxed">
                  İslam ahlakı ve Kuran kavramlarını harf harf tahmin edin, kalpleriniz tükenmeden kelimeyi çözün!
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 flex justify-between text-xs font-bold text-slate-600 group-hover:text-emerald-500 group-hover:translate-x-1 transition duration-200">
                <span>Kelime Bulmacasını Başlat</span>
                <span>→</span>
              </div>
            </div>

            {/* Game Card 2: Elifba Eşleme */}
            <div
              onClick={() => setActiveSubGame('memory')}
              className="bg-white border-3 border-slate-250 p-6 rounded-[2.5rem] flex flex-col justify-between hover:border-emerald-500 hover:shadow-xl cursor-pointer transition relative overflow-hidden group shadow-sm hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-50 rounded-bl-full border-b border-l border-emerald-100 pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border-2 border-emerald-250 flex items-center justify-center text-xl font-bold mb-4 text-emerald-600 shadow-inner">
                  🕌
                </div>
                <h3 className="text-lg font-black text-slate-800 tracking-tight font-display transition-colors uppercase">ELİFBA HAFIZA OYUNU</h3>
                <p className="text-xs text-slate-500 font-semibold mt-2 leading-relaxed">
                  Sırayla tahtaya gelip kapalı olan sevimli Kuran harflerinin eşlerini eşleştirin, zekanızı canlandırın!
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 flex justify-between text-xs font-bold text-slate-600 group-hover:text-emerald-500 group-hover:translate-x-1 transition duration-200">
                <span>Eşleştirme Oyununu Başlat</span>
                <span>→</span>
              </div>
            </div>

            {/* Game Card 3: Matematik Yarışı */}
            <div
              onClick={() => setActiveSubGame('math')}
              className="bg-white border-3 border-slate-250 p-6 rounded-[2.5rem] flex flex-col justify-between hover:border-emerald-500 hover:shadow-xl cursor-pointer transition relative overflow-hidden group shadow-sm hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-sky-50 rounded-bl-full border-b border-l border-sky-100 pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border-2 border-sky-250 flex items-center justify-center text-xl font-bold mb-4 text-sky-500 shadow-inner">
                  ⚡
                </div>
                <h3 className="text-lg font-black text-slate-800 tracking-tight font-display transition-colors uppercase">HIZLI MATEMATİK YARIŞI</h3>
                <p className="text-xs text-slate-500 font-semibold mt-2 leading-relaxed">
                  30 saniye içinde en fazla çarpma, toplama sorusunu çözerek takımı büyük şampiyon yapın!
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 flex justify-between text-xs font-bold text-slate-600 group-hover:text-emerald-500 group-hover:translate-x-1 transition duration-200">
                <span>Süreli Meydan Okumayı Aç</span>
                <span>→</span>
              </div>
            </div>
          </div>

          {/* Quick Navigator map button */}
          <div className="bg-white border-3 border-slate-200 p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between shadow-sm gap-4">
            <div className="text-center sm:text-left">
              <h4 className="font-display font-black text-sm text-slate-800">Meclis Bilgi İstasyonları</h4>
              <p className="text-xs text-slate-500 font-semibold mt-0.5">Derslerimize bağlı 5 ana istasyonlu orijinal zeka ve bilgi yarışması haritasına geçiş de yapabilirsiniz!</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto justify-end">
              {onResetGame && (
                <button
                  onClick={onResetGame}
                  className="flex items-center gap-1.5 bg-rose-50 border-2 border-rose-200 text-rose-700 hover:text-rose-800 rounded-xl py-2 px-6 text-xs font-black cursor-pointer active:scale-95 transition-all"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Oyunu Sıfırla
                </button>
              )}
              <button
                onClick={onOpenExistingAtlas}
                className="btn-game-secondary text-xs rounded-xl py-2 px-6 flex items-center gap-1.5"
              >
                🧭 KÜRSÜ/HARİTA MODUNU AÇ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --------------------------------------------------------- */}
      {/* ADAM ASMACA GAMEPLAY */}
      {/* --------------------------------------------------------- */}
      {activeSubGame === 'hangman' && (
        <div className="space-y-6" id="hangman-room-bright">
          <div className="flex justify-between items-center bg-white border-3 border-slate-200 p-4 rounded-3xl shadow-sm">
            <button
              onClick={() => setActiveSubGame('menu')}
              className="flex items-center gap-1.5 text-xs text-slate-600 font-bold bg-slate-50 py-2 px-4 rounded-xl border-2 border-slate-200 hover:bg-slate-100 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" /> Geri Dön
            </button>
            <span className="text-xs font-black text-slate-500">
              🎮 YARIŞAN TAKIM: <span className="text-emerald-600">{activeTeam.name.toUpperCase()}</span>
            </span>
          </div>

          <div className="bg-white border-3 border-slate-200 rounded-[2.5rem] p-6 lg:p-8 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 relative overflow-hidden">
            
            {/* Lives and illustration */}
            <div className="lg:col-span-4 flex flex-col justify-center items-center py-6 border-b lg:border-b-0 lg:border-r border-slate-100">
              <span className="text-[11px] text-slate-400 uppercase font-black tracking-widest mb-4">KALAN SEVİMLİ KALPLER</span>
              
              <div className="flex gap-2 mb-8">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <Heart
                    key={idx}
                    className={`w-7 h-7 transition-all ${
                      idx < hangmanLives ? 'text-rose-500 fill-rose-500 scale-100 animate-bounce' : 'text-slate-350 scale-90'
                    }`}
                  />
                ))}
              </div>

              <div className="text-center w-full max-w-xs">
                {hangmanStatus === 'playing' && (
                  <div className="p-4 bg-amber-50 border-2 border-amber-200 text-slate-700 rounded-2xl text-xs font-black font-semibold leading-relaxed">
                    🌟 İPUCU: <span className="text-amber-900 block mt-1 leading-relaxed">{hangmanObj.clue}</span>
                  </div>
                )}
                {hangmanStatus === 'won' && (
                  <div className="p-4 bg-emerald-100 border-2 border-emerald-300 text-emerald-800 rounded-2xl text-sm font-black animate-bounce space-y-2">
                    <p>🎉 HARİKA! DOĞRU CEVAP!</p>
                    <p className="text-xs text-emerald-600 font-bold">Meclisiniz +15 Puan kazandı!</p>
                    <button
                      onClick={startNewHangman}
                      className="btn-game-primary text-xs py-1.5 px-4 rounded-xl mt-2"
                    >
                      Yeni Kelime Getir
                    </button>
                  </div>
                )}
                {hangmanStatus === 'lost' && (
                  <div className="p-4 bg-rose-100 border-2 border-rose-300 text-rose-800 rounded-2xl text-sm font-black space-y-2">
                    <p>😢 Kalplerimiz Tükendi!</p>
                    <p className="text-xs text-rose-600">Aranan Kelime: {hangmanObj.word} idi.</p>
                    <button
                      onClick={startNewHangman}
                      className="btn-game-rose text-xs py-1.5 px-4 rounded-xl mt-2"
                    >
                      Tekrar Dene
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Word Tiles and Keyboard */}
            <div className="lg:col-span-8 flex flex-col justify-between py-2">
              <div className="text-center">
                <span className="block text-[10px] font-black tracking-widest text-slate-400 mb-6 uppercase">ARADIĞIMIZ KUTSAL SÖZCÜK</span>
                
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                  {hangmanObj.word.split('').map((char, index) => {
                    const isRevealed = guessedLetters.includes(char) || hangmanStatus === 'lost';
                    return (
                      <div
                        key={index}
                        className={`w-12 h-12 sm:w-14 sm:h-14 font-display font-black text-xl sm:text-2xl rounded-2xl border-3 flex items-center justify-center transition-all ${
                          isRevealed
                            ? 'bg-emerald-50 border-emerald-450 text-emerald-800 scale-100 shadow-sm'
                            : 'bg-slate-50 border-slate-205 text-transparent scale-95 border-dashed font-sans'
                        }`}
                      >
                        {isRevealed ? char : '?'}
                      </div>
                    );
                  })}
                </div>

                {/* Keyboard Grid */}
                <div className="grid grid-cols-6 sm:grid-cols-9 gap-2 max-w-xl mx-auto">
                  {"ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ".split('').map((letter) => {
                    const isUsed = guessedLetters.includes(letter);
                    const isCorrect = hangmanObj.word.includes(letter);
                    
                    let style = "bg-slate-100 border-2 border-slate-200 hover:border-slate-350 text-slate-700 cursor-pointer text-sm font-black py-2.5 rounded-xl transition-all active:scale-95";
                    if (isUsed) {
                      style = isCorrect
                        ? "bg-emerald-500 text-white border-b-0 cursor-not-allowed text-sm font-black py-2.5 rounded-xl opacity-80"
                        : "bg-slate-200 text-slate-400 border-b-0 cursor-not-allowed text-sm font-black py-2.5 rounded-xl opacity-40";
                    }

                    return (
                      <button
                        key={letter}
                        onClick={() => guessLetter(letter)}
                        disabled={isUsed || hangmanStatus !== 'playing'}
                        className={style}
                      >
                        {letter}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --------------------------------------------------------- */}
      {/* ELIFBA HAFIZA OYUNU */}
      {/* --------------------------------------------------------- */}
      {activeSubGame === 'memory' && (
        <div className="space-y-6" id="memory-room-bright">
          <div className="flex justify-between items-center bg-white border-3 border-slate-200 p-4 rounded-3xl shadow-sm">
            <button
              onClick={() => setActiveSubGame('menu')}
              className="flex items-center gap-1.5 text-xs text-slate-600 font-bold bg-slate-50 py-2 px-4 rounded-xl border-2 border-slate-200 hover:bg-slate-100 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" /> Geri Dön
            </button>
            <span className="text-xs font-black text-slate-500">
              🧠 TUR ADIMI: {memoryMoves} hamle • AKTİF MECLİS: <span className="text-emerald-600">{activeTeam.name}</span>
            </span>
          </div>

          <div className="bg-white border-3 border-slate-200 rounded-[2.5rem] p-6 lg:p-8 shadow-xl text-center relative overflow-hidden">
            <h3 className="font-display font-black text-xl text-slate-800 mb-2">ELİFBA HARF HAFIZASI 🧠</h3>
            <p className="text-slate-550 text-xs font-medium mb-6">Aynı harfleri ardı ardına açarak eşleştirin ve takıma 20 Puan kazandırın!</p>

            {memoryFinished ? (
              <div className="bg-emerald-50 border-3 border-emerald-250 p-8 rounded-3xl max-w-md mx-auto space-y-4 animate-bounce">
                <span className="text-4xl">🏆</span>
                <h4 className="font-display font-black text-lg text-emerald-800">BÜYÜK BAŞARI! TÜMÜ EŞLEŞTİ</h4>
                <p className="text-xs text-emerald-600 font-bold">Harika bir hafıza! Meclisinize +20 Puan kazandırıldı.</p>
                <button
                  onClick={startNewMemory}
                  className="btn-game-primary text-xs py-2 px-6 rounded-xl"
                >
                  Yeniden Karıştır Oyna
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
                {cards.map((card, idx) => {
                  const isVisible = card.isFlipped || card.isMatched;
                  return (
                    <button
                      key={card.id}
                      onClick={() => handleCardClick(idx)}
                      className={`aspect-square rounded-2xl border-3 flex items-center justify-center font-display text-4xl sm:text-5xl font-black transition-all cursor-pointer ${
                        card.isMatched
                          ? 'bg-emerald-100 border-emerald-400 text-emerald-700 opacity-60'
                          : card.isFlipped
                          ? 'bg-white border-sky-400 text-sky-600 shadow-md'
                          : 'bg-gradient-to-br from-amber-400 to-yellow-500 border-amber-600 text-white shadow-[0_4px_0_#d97706] active:translate-y-1 active:shadow-none'
                      }`}
                    >
                      {isVisible ? (
                        <span className="arabic-text font-serif font-extrabold">{card.content}</span>
                      ) : (
                        <span className="font-display font-black text-xl text-center select-none">✨</span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {/* --------------------------------------------------------- */}
      {/* MATEMATIK CHALLENGE */}
      {/* --------------------------------------------------------- */}
      {activeSubGame === 'math' && (
        <div className="space-y-6" id="math-room-bright">
          <div className="flex justify-between items-center bg-white border-3 border-slate-200 p-4 rounded-3xl shadow-sm">
            <button
              onClick={() => { setMathActive(false); setActiveSubGame('menu'); }}
              className="flex items-center gap-1.5 text-xs text-slate-600 font-bold bg-slate-50 py-2 px-4 rounded-xl border-2 border-slate-200 hover:bg-slate-100 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" /> Geri Dön
            </button>
            <span className="text-xs font-black text-slate-500">
              ⚡ HIZ ÖLÇER: <span className="text-emerald-600">{activeTeam.name}</span>
            </span>
          </div>

          <div className="bg-white border-3 border-slate-200 rounded-[2.5rem] p-6 lg:p-8 shadow-xl text-center relative overflow-hidden">
            {!mathActive ? (
              <div className="max-w-md mx-auto space-y-6 py-6">
                <span className="text-5xl block animate-pulse">⚡</span>
                <h3 className="font-display font-black text-2xl text-slate-800">30 SANİYELİK MATEMATİK FIRTINASI!</h3>
                <p className="text-slate-500 font-semibold text-xs leading-relaxed">
                  Zaman akıp gitmeden hızlı çarpım, toplama ve çıkarma işlemlerini çözerek doğrulardan 10'ar puan toplayın. Süre bittiğinde puanlar takıma eklenir!
                </p>
                <button
                  onClick={startNewMath}
                  className="btn-game-sky text-base py-3 px-10 rounded-2xl"
                >
                  YARIŞI BAŞLAT! 🏃
                </button>
              </div>
            ) : (
              <div className="max-w-xl mx-auto space-y-6">
                {/* Timer Bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-black text-slate-500 pl-1">
                    <span>⏳ KALAN SÜRE: {mathTimeLeft} Saniye</span>
                    <span>⭐ TOPLANAN SKOR: {mathScore} Puan</span>
                  </div>
                  <div className="w-full bg-slate-100 h-3.5 rounded-full overflow-hidden border">
                    <div
                      className="bg-sky-500 h-full transition-all duration-1000"
                      style={{ width: `${(mathTimeLeft / 30) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Math Question Board */}
                {mathQuestion && (
                  <div className="bg-slate-50 border-3 border-slate-200 rounded-3xl p-8 space-y-6">
                    <span className="text-[10px] font-black text-slate-400 block uppercase tracking-widest">HAYDİ RESİM BUL MACERASI</span>
                    <h2 className="font-display font-black text-5xl text-slate-800 font-mono tracking-tight">
                      {mathQuestion.query} = ?
                    </h2>

                    <div className="grid grid-cols-2 gap-4 max-w-md mx-auto pt-4">
                      {mathQuestion.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleMathAnswer(opt)}
                          className="bg-white border-3 border-slate-200 hover:border-sky-400 hover:bg-sky-50 py-4.5 rounded-2xl font-display font-black text-lg text-slate-800 cursor-pointer shadow-sm active:translate-y-1 transition-all"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
