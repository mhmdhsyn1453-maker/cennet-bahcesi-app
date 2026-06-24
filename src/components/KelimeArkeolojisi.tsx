import React, { useState } from 'react';
import { KelimeQuestion, Team } from '../types';
import { BookOpen, Key, CheckCircle, XCircle, ArrowLeft, Eye, Award } from 'lucide-react';
import { playSound } from './BuzzerAndTimer';

interface KelimeArkeolojisiProps {
  questions: KelimeQuestion[];
  activeTeam: Team;
  onAwardPoints: (teamId: string, points: number) => void;
  onRegisterCompletion: () => void;
  onBackToMap: () => void;
}

export const KelimeArkeolojisi: React.FC<KelimeArkeolojisiProps> = ({
  questions,
  activeTeam,
  onAwardPoints,
  onRegisterCompletion,
  onBackToMap,
}) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [unlockedClues, setUnlockedClues] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false);

  const question = questions[currentIdx] || questions[0];

  const handleRevealClue = () => {
    if (unlockedClues < question.clues.length) {
      setUnlockedClues(prev => prev + 1);
      playSound('tick');
    }
  };

  const handleSelectOption = (option: string) => {
    if (selectedOption) return; // Prevent changing answer
    setSelectedOption(option);
    const correct = option === question.correctOption;
    setIsAnswerCorrect(correct);
    setIsDone(true);

    if (correct) {
      playSound('success');
      // Award full 10 points minus 2 points per additional clue unlocked to reward intelligence!
      const finalScore = Math.max(4, 10 - unlockedClues * 2);
      onAwardPoints(activeTeam.id, finalScore);
    } else {
      playSound('fail');
    }
  };

  const handleNextWord = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setUnlockedClues(0);
      setIsDone(false);
      setIsAnswerCorrect(false);
    } else {
      // Finished all available words in this category
      onRegisterCompletion();
      onBackToMap();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 relative z-10" id="kelime-arkeolojisi-station">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-6 bg-slate-900/40 p-4 border border-slate-800/50 rounded-2xl backdrop-blur-sm shadow-md">
        <button
          onClick={onBackToMap}
          className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-950/60 p-2.5 px-4 rounded-xl border border-slate-800 hover:border-emerald-500/30 cursor-pointer transition-all active:scale-95"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Haritaya Dön
        </button>

        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-emerald-400" />
          <span className="font-display font-black text-sm uppercase text-slate-200 tracking-wider">
            KELİME ARKEOLOJİSİ
          </span>
        </div>

        <div className="px-3.5 py-1.5 bg-emerald-500/10 text-emerald-300 rounded-full font-mono text-xs border border-emerald-500/20">
          Kelime: {currentIdx + 1} / {questions.length}
        </div>
      </div>

      {/* Main Core Question */}
      <div className="bg-slate-900/40 border border-slate-800/50 rounded-[2.5rem] p-6 sm:p-8 shadow-[0_0_50px_rgba(16,185,129,0.02)] mb-6 relative overflow-hidden backdrop-blur-md">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full border-b border-l border-emerald-500/10 pointer-events-none" />

        <div className="text-center mb-8">
          <span className="text-[10px] font-mono tracking-[0.2em] text-slate-400 uppercase">Araştırma Sözcüğü</span>
          <h2 className="text-4xl font-display font-black text-white mt-1 tracking-tight">
            " {question.turkishWord} "
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-3 max-w-xl mx-auto leading-relaxed">
            Gündelik hayatta sıkça kullandığımız bu kelimenin meallerdeki kökenine ve kozmik bağına inelim.
          </p>
        </div>

        {/* 2 Blocks: Clues Progress & Answers */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Clues Column */}
          <div className="md:col-span-5 flex flex-col justify-between bg-slate-950/40 border border-slate-850 rounded-2xl p-5">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <span className="font-display font-black text-[11px] uppercase tracking-wide text-slate-300 flex items-center gap-1.5">
                  <Key className="w-3.5 h-3.5 text-amber-500" /> KİLİTLİ İPUÇLARI
                </span>
                <span className="text-xs font-mono text-slate-500">
                  {unlockedClues} / {question.clues.length}
                </span>
              </div>

              <div className="space-y-3 mt-4">
                {question.clues.map((clue, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border transition-all text-xs leading-relaxed ${
                      idx < unlockedClues
                        ? 'bg-slate-900/50 border-slate-800 text-slate-200'
                        : 'bg-slate-950/20 border-dashed border-slate-900 text-slate-600 select-none text-center py-4'
                    }`}
                  >
                    {idx < unlockedClues ? (
                      <p>{clue}</p>
                    ) : (
                      <p className="flex items-center gap-1.5 italic justify-center text-[10px] tracking-wide uppercase">
                        <Eye className="w-3.5 h-3.5 opacity-55" /> {idx + 1}. İpucu Kilidi
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {unlockedClues < question.clues.length && !isDone && (
              <button
                onClick={handleRevealClue}
                className="w-full mt-4 py-2.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/25 text-amber-400 font-display text-[11px] font-bold tracking-wider rounded-xl transition cursor-pointer flex items-center justify-center gap-1.5"
              >
                İPUCU AÇ (-2 Puan)
              </button>
            )}
          </div>

          {/* Multiple options & Interactive inputs */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              <span className="block text-[10px] uppercase font-mono tracking-widest text-slate-400 mb-3">
                Bu Kelimenin Kadim Kuran Kökü Hangisidir?
              </span>

              <div className="grid grid-cols-1 gap-3">
                {question.options.map((opt, oIdx) => {
                  const isSelected = selectedOption === opt;
                  const isCorrectAnswer = opt === question.correctOption;
                  
                  let btnStyle = 'bg-slate-950/20 border-slate-800/80 hover:border-emerald-500/40 hover:bg-emerald-500/[0.02] text-slate-200';
                  if (selectedOption) {
                    if (isCorrectAnswer) {
                      btnStyle = 'bg-emerald-500/10 border-emerald-500 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.1)]';
                    } else if (isSelected) {
                      btnStyle = 'bg-rose-500/10 border-rose-500 text-rose-300';
                    } else {
                      btnStyle = 'bg-slate-900/10 border-slate-950 text-slate-600 opacity-40';
                    }
                  }

                  const choiceLetter = String.fromCharCode(65 + oIdx);

                  return (
                    <button
                      key={opt}
                      onClick={() => handleSelectOption(opt)}
                      disabled={!!selectedOption}
                      className={`text-left p-4 rounded-2xl border text-sm font-semibold tracking-wide transition-all uppercase min-h-[52px] cursor-pointer flex justify-between items-center group ${btnStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border transition-colors ${
                          isSelected ? 'bg-emerald-500 text-white border-emerald-400' : 'border-slate-700/50 text-slate-450 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10'
                        }`}>
                          {choiceLetter}
                        </div>
                        <span>{opt}</span>
                      </div>
                      {selectedOption && isCorrectAnswer && <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />}
                      {selectedOption && isSelected && !isCorrectAnswer && <XCircle className="w-5 h-5 text-rose-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Turn info */}
            {!isDone && (
              <div className="mt-4 p-3 bg-slate-950/50 rounded-xl text-center border border-slate-850 text-xs text-slate-400">
                Soruya Cevap Veren Meclis: <span className={`${activeTeam.color.replace('bg-', 'text-')} font-bold uppercase tracking-wider`}>{activeTeam.name}</span>
              </div>
            )}
          </div>
        </div>

        {/* Level Done overlay & feedback */}
        {isDone && (
          <div className="mt-8 pt-6 border-t border-slate-800/85 animate-fade-in">
            <div className={`p-5 rounded-2xl flex flex-col md:flex-row items-start gap-4 ${
              isAnswerCorrect ? 'bg-emerald-950/15 border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.02)]' : 'bg-rose-950/10 border border-rose-500/20'
            }`}>
              <div className={`p-3 rounded-xl ${isAnswerCorrect ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                {isAnswerCorrect ? <CheckCircle className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-x-3 mb-1">
                  <h4 className="font-display font-black text-white text-base uppercase tracking-tight">
                    {isAnswerCorrect ? 'Tebrikler, İlim Kapısı Aralandı!' : 'Yanlış Kök Seçimi!'}
                  </h4>
                  <span className="text-xs font-mono text-slate-500 px-2 py-0.5 bg-slate-900 rounded border border-slate-800">
                    Arapça Kök: {question.arabicRoot}
                  </span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
                  {question.description}
                </p>

                <div className="bg-slate-950/60 rounded-xl p-4 mb-3 border border-slate-850">
                  <span className="text-[10px] text-emerald-400 uppercase tracking-widest block font-mono">Düşündürücü Ayrıntı (Bilge Notu)</span>
                  <p className="text-slate-400 text-xs italic mt-1 leading-relaxed">
                    {question.wisdomNote}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-mono text-amber-400">
                  <span className="bg-amber-500/10 p-1.5 px-3 rounded-lg border border-amber-500/20">{question.quranReference}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={handleNextWord}
                className="py-3 px-6 cursor-pointer bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-display font-black text-xs tracking-wider rounded-full transition-all duration-300 shadow-[0_4px_15px_rgba(16,185,129,0.2)]"
              >
                {currentIdx < questions.length - 1 ? 'SONRAKİ KELİME' : 'İSTASYONU TAMAMLA'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
