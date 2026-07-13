import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Trophy, HelpCircle, Shield, Star, Users, Phone, Zap, ArrowRight,
  RotateCcw, DollarSign, XCircle, Award, CheckCircle2, ChevronRight
} from 'lucide-react';
import { MILLIONAIRE_QUESTIONS_DB, MillionaireQuestion } from '../../data/games/millionaireQuestions';
import { playSound } from '../BuzzerAndTimer';

const STORAGE_KEY = 'millionaire_used_question_ids';
const MAX_RECENT = 100;

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

const selectMillionaireQuestions = (): MillionaireQuestion[] => {
  const recent = new Set(getRecentlyUsedIds());
  
  const easyPool = MILLIONAIRE_QUESTIONS_DB.filter(q => q.difficulty === 'easy' && !recent.has(q.id));
  const mediumPool = MILLIONAIRE_QUESTIONS_DB.filter(q => q.difficulty === 'medium' && !recent.has(q.id));
  const hardPool = MILLIONAIRE_QUESTIONS_DB.filter(q => q.difficulty === 'hard' && !recent.has(q.id));
  
  // Fallback if pools are depleted
  const finalEasy = easyPool.length >= 4 ? easyPool : MILLIONAIRE_QUESTIONS_DB.filter(q => q.difficulty === 'easy');
  const finalMedium = mediumPool.length >= 4 ? mediumPool : MILLIONAIRE_QUESTIONS_DB.filter(q => q.difficulty === 'medium');
  const finalHard = hardPool.length >= 4 ? hardPool : MILLIONAIRE_QUESTIONS_DB.filter(q => q.difficulty === 'hard');
  
  const selectedEasy = [...finalEasy].sort(() => Math.random() - 0.5).slice(0, 4);
  const selectedMedium = [...finalMedium].sort(() => Math.random() - 0.5).slice(0, 4);
  const selectedHard = [...finalHard].sort(() => Math.random() - 0.5).slice(0, 4);
  
  const selected = [...selectedEasy, ...selectedMedium, ...selectedHard];
  
  // Save used IDs
  saveRecentlyUsedIds(selected.map(q => q.id));
  
  return selected;
};

// Shuffles an array helper
const shuffleOptions = (options: string[]): string[] => {
  return [...options].sort(() => Math.random() - 0.5);
};

const prizeLadder = [
  '500 TL', '1.000 TL', '2.000 TL', '3.000 TL', '5.000 TL (Baraj)',
  '7.500 TL', '15.000 TL', '30.000 TL', '60.000 TL', '125.000 TL (Baraj)',
  '250.000 TL', '1.000.000 TL (BÜYÜK ÖDÜL)'
];

const getSafePrize = (currentIdx: number): string => {
  if (currentIdx < 4) return '0 TL';
  if (currentIdx < 9) return '5.000 TL';
  return '125.000 TL';
};

interface MillionaireQuizGameProps {
  isDarkMode: boolean;
}

export const MillionaireQuizGame: React.FC<MillionaireQuizGameProps> = ({ isDarkMode }) => {
  const [phase, setPhase] = useState<'intro' | 'playing' | 'won' | 'lost' | 'withdrew'>('intro');
  const [questions, setQuestions] = useState<MillionaireQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  
  // Jokers
  const [jokers, setJokers] = useState({ half: true, audience: true, phone: true });
  const [eliminatedOpts, setEliminatedOpts] = useState<string[]>([]);
  const [audienceVotes, setAudienceVotes] = useState<{ [key: string]: number } | null>(null);
  const [phoneOpinion, setPhoneOpinion] = useState<string | null>(null);
  
  // Choice state
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [isFinalAnswer, setIsFinalAnswer] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const startNewGame = useCallback(() => {
    playSound('complete');
    const selected = selectMillionaireQuestions();
    setQuestions(selected);
    setCurrentIdx(0);
    setJokers({ half: true, audience: true, phone: true });
    setEliminatedOpts([]);
    setAudienceVotes(null);
    setPhoneOpinion(null);
    setSelectedOpt(null);
    setIsFinalAnswer(false);
    setShowResult(false);
    setPhase('playing');
    
    // Set first question options
    if (selected.length > 0) {
      setShuffledOptions(shuffleOptions(selected[0].options));
    }
  }, []);

  const currentQuestion = questions[currentIdx];

  // 50:50 Joker
  const handleHalfJoker = () => {
    if (!jokers.half || !currentQuestion || selectedOpt) return;
    playSound('tick');
    setJokers(prev => ({ ...prev, half: false }));
    
    // Find wrong options
    const incorrect = currentQuestion.options.filter(o => o !== currentQuestion.correct);
    // Shuffle and keep 1 wrong option, eliminate the other 2
    const toEliminate = [...incorrect].sort(() => Math.random() - 0.5).slice(0, 2);
    setEliminatedOpts(toEliminate);
  };

  // Audience Joker
  const handleAudienceJoker = () => {
    if (!jokers.audience || !currentQuestion || selectedOpt) return;
    playSound('tick');
    setJokers(prev => ({ ...prev, audience: false }));
    
    const correctOpt = currentQuestion.correct;
    const options = shuffledOptions.filter(o => !eliminatedOpts.includes(o));
    
    // Calculate weights (give higher weight to correct option depending on difficulty)
    let correctWeight = 65;
    if (currentQuestion.difficulty === 'medium') correctWeight = 50;
    if (currentQuestion.difficulty === 'hard') correctWeight = 40;
    
    const votes: { [key: string]: number } = {};
    let remaining = 100;
    
    // Assign weight to correct
    const correctVal = correctWeight + Math.floor(Math.random() * 10);
    votes[correctOpt] = correctVal;
    remaining -= correctVal;
    
    const wrongOptions = options.filter(o => o !== correctOpt);
    wrongOptions.forEach((o, i) => {
      if (i === wrongOptions.length - 1) {
        votes[o] = remaining;
      } else {
        const val = Math.floor(Math.random() * (remaining / 1.5));
        votes[o] = val;
        remaining -= val;
      }
    });
    
    // Fill in eliminated options as 0%
    shuffledOptions.forEach(o => {
      if (!(o in votes)) votes[o] = 0;
    });
    
    setAudienceVotes(votes);
  };

  // Phone Joker
  const handlePhoneJoker = () => {
    if (!jokers.phone || !currentQuestion || selectedOpt) return;
    playSound('tick');
    setJokers(prev => ({ ...prev, phone: false }));
    
    const correctOpt = currentQuestion.correct;
    const diff = currentQuestion.difficulty;
    
    let quote = "";
    if (diff === 'easy') {
      quote = `📞 Bilge Hocamız arıyor: "Bu sorunun cevabından %100 eminim kanka. Doğru cevap kesinlikle '${correctOpt}' şıkkı."`;
    } else if (diff === 'medium') {
      quote = `📞 Bilge Hocamız arıyor: "Soru biraz düşündürdü ama bence büyük olasılıkla (%80) '${correctOpt}' olmalı."`;
    } else {
      // For hard, hoca might be confused but still tilts correct or wrong
      const isHocaRight = Math.random() > 0.3;
      if (isHocaRight) {
        quote = `📞 Bilge Hocamız arıyor: "Zor bir soruymuş... Net olmamakla beraber içimden bir ses '${correctOpt}' olduğunu söylüyor."`;
      } else {
        const wrongOpt = currentQuestion.options.find(o => o !== correctOpt) || 'B';
        quote = `📞 Bilge Hocamız arıyor: "Bayağı zor bir soru. Emin olamıyorum ama sanki '${wrongOpt}' şıkkı gibi duruyor kanka."`;
      }
    }
    
    setPhoneOpinion(quote);
  };

  // Select option
  const handleSelectOption = (opt: string) => {
    if (selectedOpt || showResult) return;
    playSound('tick');
    setSelectedOpt(opt);
  };

  // Confirm final answer (Son Kararım!)
  const handleConfirmFinal = () => {
    if (!selectedOpt || isFinalAnswer) return;
    setIsFinalAnswer(true);
    playSound('tick');
    
    // Suspense delay
    setTimeout(() => {
      const correct = selectedOpt === currentQuestion.correct;
      setIsCorrect(correct);
      setShowResult(true);
      if (correct) {
        playSound('success');
      } else {
        playSound('fail');
      }
    }, 1500); // 1.5 seconds suspense
  };

  // Next level or cash-out
  const handleNext = () => {
    if (!isCorrect) {
      setPhase('lost');
      return;
    }
    
    if (currentIdx + 1 < questions.length) {
      playSound('complete');
      const nextIdx = currentIdx + 1;
      setCurrentIdx(nextIdx);
      setShuffledOptions(shuffleOptions(questions[nextIdx].options));
      
      // Reset state for next question
      setSelectedOpt(null);
      setIsFinalAnswer(false);
      setShowResult(false);
      setPhoneOpinion(null);
      setAudienceVotes(null);
      setEliminatedOpts([]);
    } else {
      playSound('complete');
      setPhase('won');
    }
  };

  // Withdraw (Çekilme)
  const handleWithdraw = () => {
    if (phase !== 'playing' || selectedOpt) return;
    playSound('complete');
    setPhase('withdrew');
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
              isDarkMode ? 'bg-[#0e1e38] border-amber-500/50 text-white' : 'bg-white border-amber-500 text-slate-800 shadow-lg'
            } border-3 rounded-[2.5rem] shadow-2xl p-8 relative overflow-hidden`}
          >
            {/* Background glowing effects */}
            {isDarkMode && (
              <>
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
              </>
            )}

            <Trophy className="w-20 h-20 text-amber-500 mb-4 animate-bounce" />
            <h3 className={`text-3xl font-black uppercase tracking-tight ${isDarkMode ? 'text-amber-300' : 'text-amber-600'}`}>
              KİM MİLYONER OLMAK İSTER?
            </h3>
            <p className={`text-xs ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} mt-3 max-w-sm leading-relaxed`}>
              12 soruluk İslami Bilgi ve Genel Kültür merdivenini tırman, 1.000.000 TL değerindeki büyük ödüle ulaş!
            </p>
            <div className={`w-full h-px ${isDarkMode ? 'bg-amber-500/20' : 'bg-amber-500/30'} my-5`} />

            <div className={`grid grid-cols-2 gap-3 text-left w-full ${isDarkMode ? 'bg-slate-900/40 border-slate-700/50' : 'bg-slate-55 border-slate-200'} p-4 rounded-2xl border`}>
              <div className={`flex items-center gap-2 text-[10px] ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                ⭐ <span className={`font-bold ${isDarkMode ? 'text-amber-300' : 'text-amber-600'}`}>12</span> Zorluk Basamağı
              </div>
              <div className={`flex items-center gap-2 text-[10px] ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                🧠 <span className={`font-bold ${isDarkMode ? 'text-amber-300' : 'text-amber-600'}`}>1000</span> Soru Havuzu
              </div>
              <div className={`flex items-center gap-2 text-[10px] ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                👥 <span className={`font-bold ${isDarkMode ? 'text-amber-300' : 'text-amber-600'}`}>3</span> Farklı Joker
              </div>
              <div className={`flex items-center gap-2 text-[10px] ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                💰 <span className={`font-bold ${isDarkMode ? 'text-amber-300' : 'text-amber-600'}`}>2</span> Baraj Noktası
              </div>
            </div>

            <button
              onClick={startNewGame}
              className="mt-6 w-full py-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black text-sm uppercase tracking-widest rounded-2xl shadow-xl hover:shadow-amber-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Yarışmayı Başlat! ➔
            </button>
          </motion.div>
        )}

        {/* ===== PLAYING PHASE ===== */}
        {phase === 'playing' && currentQuestion && (
          <motion.div
            key="playing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5"
          >
            {/* Sol Panel: Ödüller, Barajlar ve Jokerler */}
            <div className={`lg:col-span-4 flex flex-col gap-4 ${isDarkMode ? 'bg-[#0a192f] border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-800 shadow-md'} border-2 p-4 rounded-2xl shadow-lg`}>
              
              {/* Jokerler */}
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={handleHalfJoker}
                  disabled={!jokers.half || !!selectedOpt}
                  className={`py-3 flex flex-col items-center justify-center gap-1 rounded-xl font-black text-[10px] uppercase border transition-all ${
                    jokers.half && !selectedOpt
                      ? isDarkMode
                        ? 'bg-blue-950/60 border-blue-500 text-blue-300 hover:bg-blue-900 active:scale-95 cursor-pointer'
                        : 'bg-blue-50 border-blue-200 text-blue-600 hover:bg-blue-100 active:scale-95 cursor-pointer'
                      : isDarkMode
                        ? 'bg-slate-900 border-slate-800 text-slate-600 line-through cursor-not-allowed opacity-50'
                        : 'bg-slate-100 border-slate-200 text-slate-400 line-through cursor-not-allowed opacity-50'
                  }`}
                  title="Yarı Yarıya (%50) Jokeri"
                >
                  <Zap className="w-4 h-4" />
                  <span>%50</span>
                </button>

                <button
                  onClick={handleAudienceJoker}
                  disabled={!jokers.audience || !!selectedOpt}
                  className={`py-3 flex flex-col items-center justify-center gap-1 rounded-xl font-black text-[10px] uppercase border transition-all ${
                    jokers.audience && !selectedOpt
                      ? isDarkMode
                        ? 'bg-blue-950/60 border-blue-500 text-blue-300 hover:bg-blue-900 active:scale-95 cursor-pointer'
                        : 'bg-blue-50 border-blue-200 text-blue-600 hover:bg-blue-100 active:scale-95 cursor-pointer'
                      : isDarkMode
                        ? 'bg-slate-900 border-slate-800 text-slate-600 line-through cursor-not-allowed opacity-50'
                        : 'bg-slate-100 border-slate-200 text-slate-400 line-through cursor-not-allowed opacity-50'
                  }`}
                  title="Seyirci Jokeri"
                >
                  <Users className="w-4 h-4" />
                  <span>Seyirci</span>
                </button>

                <button
                  onClick={handlePhoneJoker}
                  disabled={!jokers.phone || !!selectedOpt}
                  className={`py-3 flex flex-col items-center justify-center gap-1 rounded-xl font-black text-[10px] uppercase border transition-all ${
                    jokers.phone && !selectedOpt
                      ? isDarkMode
                        ? 'bg-blue-950/60 border-blue-500 text-blue-300 hover:bg-blue-900 active:scale-95 cursor-pointer'
                        : 'bg-blue-50 border-blue-200 text-blue-600 hover:bg-blue-100 active:scale-95 cursor-pointer'
                      : isDarkMode
                        ? 'bg-slate-900 border-slate-800 text-slate-600 line-through cursor-not-allowed opacity-50'
                        : 'bg-slate-100 border-slate-200 text-slate-400 line-through cursor-not-allowed opacity-50'
                  }`}
                  title="Telefon Jokeri"
                >
                  <Phone className="w-4 h-4" />
                  <span>Telefon</span>
                </button>
              </div>

              {/* Çekilme Butonu */}
              <button
                onClick={handleWithdraw}
                disabled={!!selectedOpt}
                className={`py-2.5 w-full ${
                  isDarkMode
                    ? 'bg-slate-900/60 border-rose-500/40 text-rose-450 hover:bg-rose-950/40'
                    : 'bg-rose-50 border-rose-200 text-rose-600 hover:bg-rose-100'
                } font-bold text-[10px] uppercase tracking-wider rounded-xl active:scale-95 transition-all flex items-center justify-center gap-1.5 ${
                  selectedOpt ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
                }`}
              >
                💵 Ödülü Al ve Çekil
              </button>

              <div className={`h-px ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`} />

              {/* Ödül Basamakları */}
              <div className="flex flex-col gap-0.5">
                {[...prizeLadder].reverse().map((prize, reverseIdx) => {
                  const idx = 11 - reverseIdx;
                  const isCurrent = idx === currentIdx;
                  const isPassed = idx < currentIdx;
                  const isBaraj = prize.includes('(Baraj)') || prize.includes('(BÜYÜK ÖDÜL)');
                  
                  let itemStyle = isDarkMode ? 'text-slate-500' : 'text-slate-400';
                  if (isCurrent) {
                    itemStyle = 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black scale-102 shadow-lg animate-pulse';
                  } else if (isPassed) {
                    itemStyle = isDarkMode ? 'text-emerald-400 opacity-50 line-through' : 'text-emerald-600 opacity-60 line-through';
                  } else if (isBaraj) {
                    itemStyle = isDarkMode ? 'text-amber-400 font-bold' : 'text-amber-600 font-bold';
                  }

                  return (
                    <div
                      key={prize}
                      className={`flex justify-between items-center px-3 py-1 text-[9px] rounded-lg transition-all ${itemStyle}`}
                    >
                      <div className="flex items-center gap-1">
                        <span className="opacity-75">{idx + 1}.</span>
                        <span>{prize}</span>
                      </div>
                      {isCurrent && <ChevronRight className={`w-3.5 h-3.5 ${isCurrent ? 'text-slate-950' : 'text-slate-400'}`} />}
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Sağ Panel: Soru ve Şıklar */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              
              {/* Kategori Bilgisi */}
              <div className={`flex justify-between px-1 text-[10px] ${isDarkMode ? 'text-slate-500' : 'text-slate-400'} font-bold`}>
                <span>SORU KATEGORİSİ: <strong className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>{currentQuestion.category}</strong></span>
                <span className="uppercase">Zorluk: <strong className={isDarkMode ? 'text-amber-400' : 'text-amber-600'}>{currentQuestion.difficulty}</strong></span>
              </div>

              {/* Soru Gövdesi (Hexagon look) */}
              <div className={`relative w-full ${isDarkMode ? 'bg-[#0a192f] border-amber-500/50 text-white' : 'bg-white border-amber-500 text-slate-800 shadow-md'} border-3 p-6 rounded-[2rem] shadow-xl text-center flex flex-col items-center justify-center min-h-[140px]`}>
                <div className="absolute -top-3 px-3 py-0.5 bg-amber-500 text-slate-950 font-black text-[9px] uppercase tracking-wider rounded-md">
                  Soru {currentIdx + 1}
                </div>
                <p className="text-base sm:text-lg font-black leading-relaxed mt-2">
                  "{currentQuestion.question}"
                </p>
              </div>

              {/* Joker Pencereleri */}
              {/* 👥 Seyirci Sonuç Grafik Barları */}
              {audienceVotes && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`w-full ${isDarkMode ? 'bg-[#0e1e38] border-blue-500/30 text-white' : 'bg-blue-50/50 border-blue-200 text-slate-800'} border p-4 rounded-2xl shadow-inner flex flex-col gap-2`}
                >
                  <span className={`text-[10px] font-black ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} uppercase tracking-wider block`}>👥 Seyirci Oylaması Sonucu:</span>
                  <div className="grid grid-cols-4 gap-2 mt-1">
                    {shuffledOptions.map((opt, i) => {
                      const pct = audienceVotes[opt] || 0;
                      const letter = String.fromCharCode(65 + i);
                      return (
                        <div key={opt} className="flex flex-col items-center gap-1.5">
                          <span className={`text-[9px] ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} font-bold`}>{letter} (%{pct})</span>
                          <div className={`w-full h-16 ${isDarkMode ? 'bg-slate-900' : 'bg-slate-200'} rounded-lg overflow-hidden relative flex items-end`}>
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: `${pct}%` }}
                              transition={{ duration: 0.8, ease: 'easeOut' }}
                              className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* 📞 Telefon Görüşmesi Diyalog Kutusu */}
              {phoneOpinion && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`w-full ${isDarkMode ? 'bg-[#0e1e38] border-blue-500/30 text-white' : 'bg-blue-50/50 border-blue-200 text-slate-800'} border p-3.5 rounded-2xl shadow-inner flex items-start gap-3`}
                >
                  <div className={`w-10 h-10 ${isDarkMode ? 'bg-amber-500/20 border-amber-500/50' : 'bg-amber-100 border-amber-200'} border rounded-full flex items-center justify-center shrink-0`}>
                    👴
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[9px] font-bold text-amber-500">BİLGE HOCA TAVSİYESİ</span>
                    <p className={`text-[10.5px] leading-relaxed ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>{phoneOpinion}</p>
                  </div>
                </motion.div>
              )}

              {/* Şıklar Grid (Altıgen esintili butonlar) */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {shuffledOptions.map((opt, i) => {
                  const isEliminated = eliminatedOpts.includes(opt);
                  if (isEliminated) {
                    return (
                      <div
                        key={opt}
                        className={`h-[54px] border border-dashed ${isDarkMode ? 'border-slate-200/10' : 'border-slate-300/30'} rounded-xl opacity-0`}
                      />
                    );
                  }

                  const isSelected = opt === selectedOpt;
                  const isCorrectAnswer = opt === currentQuestion.correct;
                  const letter = String.fromCharCode(65 + i);

                  let btnStyle = isDarkMode
                    ? "bg-[#0b172a] hover:bg-[#122543] border-blue-900/60 text-white hover:scale-102 active:scale-98 cursor-pointer hover:border-amber-500/50"
                    : "bg-white hover:bg-slate-50 border-slate-200 text-slate-800 hover:scale-102 active:scale-98 cursor-pointer hover:border-amber-500";
                  
                  if (isSelected) {
                    btnStyle = isDarkMode
                      ? "bg-amber-500/20 border-amber-500 text-amber-300 scale-102 shadow-lg shadow-amber-500/10"
                      : "bg-amber-50 border-amber-500 text-amber-750 scale-102 shadow-lg shadow-amber-500/10";
                  }

                  if (showResult) {
                    if (isCorrectAnswer) {
                      btnStyle = isDarkMode
                        ? "bg-emerald-500/30 border-emerald-500 text-emerald-300 pointer-events-none scale-102 shadow-lg shadow-emerald-500/10"
                        : "bg-emerald-100 border-emerald-500 text-emerald-800 pointer-events-none scale-102 shadow-lg shadow-emerald-500/10";
                    } else if (isSelected) {
                      btnStyle = isDarkMode
                        ? "bg-rose-500/30 border-rose-500 text-rose-300 pointer-events-none"
                        : "bg-rose-100 border-rose-500 text-rose-800 pointer-events-none";
                    } else {
                      btnStyle = isDarkMode
                        ? "opacity-25 pointer-events-none bg-slate-950 border-slate-900 text-slate-500"
                        : "opacity-25 pointer-events-none bg-slate-100 border-slate-200 text-slate-400";
                    }
                  }

                  return (
                    <button
                      key={opt}
                      onClick={() => handleSelectOption(opt)}
                      disabled={isFinalAnswer}
                      className={`p-3.5 text-left rounded-xl border-2 text-xs font-bold leading-normal transition-all flex gap-3 items-center ${btnStyle}`}
                    >
                      <span className="w-5.5 h-5.5 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-400 text-slate-950 font-black text-[9px] flex items-center justify-center shrink-0">
                        {letter}
                      </span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {/* Alt Kontrol / Onay Çubuğu */}
              <div className="flex flex-col items-center gap-3 mt-2 min-h-[50px]">
                {/* 1. Şık Seçildi Ama Onaylanmadı: Son Kararım sorusu */}
                {selectedOpt && !isFinalAnswer && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col sm:flex-row items-center gap-3 w-full"
                  >
                    <span className="text-[11px] font-bold text-amber-500 animate-pulse text-center">
                      🤔 Seçtiğin şıktan emin misin kanka? Son kararın mı?
                    </span>
                    <div className="flex gap-2 w-full sm:w-auto ml-auto">
                      <button
                        onClick={() => setSelectedOpt(null)}
                        className={`flex-1 sm:flex-initial px-5 py-2.5 ${isDarkMode ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-slate-200 text-slate-800 hover:bg-slate-300'} font-bold text-[10px] uppercase rounded-xl active:scale-95 transition-all cursor-pointer`}
                      >
                        Değiştir
                      </button>
                      <button
                        onClick={handleConfirmFinal}
                        className="flex-1 sm:flex-initial px-8 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black text-[10px] uppercase tracking-wider rounded-xl hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg"
                      >
                        Evet, Son Kararım!
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* 2. Onay Süreci (Suspense) */}
                {isFinalAnswer && !showResult && (
                  <div className="flex items-center gap-2 text-amber-500 text-[11px] font-black animate-pulse">
                    <RotateCcw className="w-4 h-4 animate-spin" /> Cevap kontrol ediliyor, heyecan dorukta...
                  </div>
                )}

                {/* 3. Cevap Sonucu Açıklandı: Devam veya Elenme Butonu */}
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full flex justify-center"
                  >
                    <button
                      onClick={handleNext}
                      className={`px-12 py-3.5 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer ${
                        isCorrect
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-emerald-500/20'
                          : 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-rose-500/20'
                      }`}
                    >
                      {isCorrect
                        ? currentIdx + 1 === questions.length
                          ? 'BÜYÜK ÖDÜLÜ AL VE TAMAMLA! 🏆'
                          : 'Sonraki Soruya Geç ➔'
                        : 'Ödülü Al ve Ayrıl ❌'}
                    </button>
                  </motion.div>
                )}
              </div>

            </div>
          </motion.div>
        )}

        {/* ===== WON / LOST / WITHDREW PHASES ===== */}
        {(phase === 'won' || phase === 'lost' || phase === 'withdrew') && (
          <motion.div
            key="end-screen"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className={`text-center flex flex-col items-center py-6 w-full max-w-md ${
              isDarkMode ? 'bg-[#0e1e38] border-amber-500/50 text-white' : 'bg-white border-amber-500 text-slate-800 shadow-lg'
            } border-3 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden`}
          >
            {/* Background glowing effects */}
            {isDarkMode && (
              <>
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
              </>
            )}

            {phase === 'won' && (
              <>
                <Trophy className="w-16 h-16 text-yellow-400 animate-bounce mb-3" />
                <h3 className={`text-2xl font-black ${isDarkMode ? 'text-amber-300' : 'text-amber-650'} uppercase tracking-tight`}>
                  TEBRİKLER MİLYONER!
                </h3>
                <p className={`text-xs ${isDarkMode ? 'text-slate-350' : 'text-slate-600'} mt-2 max-w-xs leading-relaxed`}>
                  Tüm 12 soruyu doğru bilerek 1.000.000 TL değerindeki büyük ödülü kazandınız!
                </p>
              </>
            )}

            {phase === 'withdrew' && (
              <>
                <Award className="w-16 h-16 text-emerald-400 mb-3" />
                <h3 className="text-2xl font-black text-emerald-450 uppercase tracking-tight">
                  Tebrikler, Çekildiniz!
                </h3>
                <p className={`text-xs ${isDarkMode ? 'text-slate-350' : 'text-slate-600'} mt-2 max-w-xs leading-relaxed`}>
                  Güzel bir kararla yarışmadan çekildiniz. İşte kazandığınız ödül:
                </p>
              </>
            )}

            {phase === 'lost' && (
              <>
                <XCircle className="w-16 h-16 text-rose-500 animate-pulse mb-3" />
                <h3 className="text-2xl font-black text-rose-450 uppercase tracking-tight">
                  Yarışma Bitti!
                </h3>
                <p className={`text-xs ${isDarkMode ? 'text-slate-350' : 'text-slate-600'} mt-2 max-w-xs leading-relaxed`}>
                  Yanlış şıkkı seçtiğiniz için elendiniz. İşte kazandığınız ödül:
                </p>
              </>
            )}

            {/* Kazanılan Ödül Kutusu */}
            <div className={`w-full flex flex-col gap-2 my-6 p-5 ${isDarkMode ? 'bg-slate-900/50 border-slate-700/50' : 'bg-slate-50 border-slate-200'} border rounded-2xl`}>
              <span className="text-[10px] font-black text-amber-500/70 uppercase tracking-widest">Kazanılan Tutar</span>
              <span className={`text-3xl font-display font-black ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'} tracking-wide mt-1 animate-pulse`}>
                {phase === 'won'
                  ? '1.000.000 TL'
                  : phase === 'withdrew'
                    ? prizeLadder[currentIdx - 1] || '0 TL'
                    : getSafePrize(currentIdx)}
              </span>
            </div>

            <button
              onClick={startNewGame}
              className="w-full py-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Yeniden Yarış! ↩️
            </button>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};
