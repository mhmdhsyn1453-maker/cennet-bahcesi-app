import React, { useState } from 'react';
import { EsmaQuestion, Team } from '../types';
import { ArrowLeft, Sparkles, CheckCircle2, XCircle, Globe, Award, HelpCircle } from 'lucide-react';
import { playSound } from './BuzzerAndTimer';

interface EsmaKevnProps {
  questions: EsmaQuestion[];
  activeTeam: Team;
  onAwardPoints: (teamId: string, points: number) => void;
  onRegisterCompletion: () => void;
  onBackToMap: () => void;
}

export const EsmaKevn: React.FC<EsmaKevnProps> = ({
  questions,
  activeTeam,
  onAwardPoints,
  onRegisterCompletion,
  onBackToMap,
}) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(false);

  const question = questions[currentIdx] || questions[0];

  const handleSelectOption = (option: string) => {
    if (selectedOption) return;
    setSelectedOption(option);
    const correct = option === question.correctEsma;
    setIsAnswerCorrect(correct);
    setIsDone(true);

    if (correct) {
      playSound('success');
      onAwardPoints(activeTeam.id, 15); // Esma & Kevn gives 15 points
    } else {
      playSound('fail');
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerCorrect(false);
      setIsDone(false);
    } else {
      onRegisterCompletion();
      onBackToMap();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-4" id="esma-kevn-station">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-6 bg-zinc-900/50 p-4 border border-zinc-800 rounded-2xl">
        <button
          onClick={onBackToMap}
          className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white bg-zinc-950 p-2 px-3.5 rounded-lg border border-zinc-900 cursor-pointer hover:border-zinc-700 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Haritaya Dön
        </button>

        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-emerald-500 animate-pulse" />
          <span className="font-display font-black text-sm uppercase text-emerald-400 tracking-wider">
            İSTASYON 4: ESMA VE KEVN
          </span>
        </div>

        <div className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full font-mono text-xs border border-emerald-500/25">
          Gizem: {currentIdx + 1} / {questions.length}
        </div>
      </div>

      {/* Main Core Question */}
      <div className="bg-deep-charcoal border border-zinc-800/80 rounded-3xl p-6 shadow-2xl mb-6 relative overflow-hidden">
        {/* Glow decoration */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-600/5 rounded-full filter blur-3xl pointer-events-none" />

        <div className="mb-6">
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
            <Globe className="w-4 h-4 text-emerald-500" /> BİLİMSEL VE KOZMİK KANIT DAĞILIMI
          </div>
          <h2 className="text-xl sm:text-2xl font-display font-black text-white mt-1 tracking-tight">
            Kozmosun Tasarım Muamması
          </h2>

          <div className="bg-gradient-to-br from-zinc-950/90 to-zinc-900 p-5 rounded-2xl border border-emerald-500/10 text-zinc-200 text-sm sm:text-base leading-relaxed mt-4 font-display">
            {question.cosmosClue}
          </div>
        </div>

        {/* Options grid (Easy touch cards) */}
        <div className="space-y-3">
          <span className="block text-xs uppercase font-mono tracking-wider text-zinc-500 mb-2">
            Hangi İlahi İsim Bu Harikalığı Tasvir Eder? (Sınıfta cevaplayın)
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {question.options.map((opt) => {
              const isSelected = selectedOption === opt;
              const isCorrect = opt === question.correctEsma;
              
              let optStyle = 'bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/30 text-zinc-200 hover:bg-zinc-850';
              if (selectedOption) {
                if (isCorrect) {
                  optStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-300';
                } else if (isSelected) {
                  optStyle = 'bg-rose-500/20 border-rose-500 text-rose-300';
                } else {
                  optStyle = 'bg-zinc-950/20 border-zinc-955 text-zinc-650 opacity-50';
                }
              }

              return (
                <button
                  key={opt}
                  onClick={() => handleSelectOption(opt)}
                  disabled={!!selectedOption}
                  className={`text-left p-4 rounded-xl border text-xs sm:text-sm font-semibold tracking-wide transition-all uppercase min-h-[55px] cursor-pointer flex justify-between items-center gap-3 ${optStyle}`}
                >
                  <span className="font-display">{opt}</span>
                  {selectedOption && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                  {selectedOption && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-400 shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active turn indicator */}
        {!selectedOption && (
          <div className="mt-4 p-3 bg-zinc-950 rounded-lg text-center border border-zinc-900 text-xs text-zinc-400 font-mono">
            Sıradaki Turn: <span className={`${activeTeam.color.replace('bg-', 'text-')} font-bold`}>{activeTeam.name}</span>
          </div>
        )}

        {/* Level End / Insight Overlay */}
        {isDone && (
          <div className="mt-8 pt-6 border-t border-zinc-800/80 animate-fade-in">
            <div className={`p-5 rounded-2xl flex flex-col md:flex-row items-start gap-4 ${
              isAnswerCorrect ? 'bg-emerald-950/30 border border-emerald-500/20' : 'bg-rose-950/30 border border-rose-500/20'
            }`}>
              <div className={`p-2.5 rounded-xl ${isAnswerCorrect ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                {isAnswerCorrect ? <CheckCircle2 className="w-6 h-6 animate-bounce" /> : <XCircle className="w-6 h-6" />}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                  <h4 className="font-display font-extrabold text-white text-base">
                    {isAnswerCorrect ? 'Doğru Keşif! Tefekkür Ufku Açıldı' : 'Cevap Hatalı! Ama Öğrenmek İbadettir'}
                  </h4>
                  <span className="text-[10px] uppercase font-mono tracking-wider font-bold bg-zinc-900 p-1 px-2 border border-zinc-850 text-emerald-400 shadow">
                    Esma: {question.name}
                  </span>
                </div>
                
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {question.translation}
                </p>

                <div className="bg-black/40 border border-zinc-900 rounded-xl p-3.5 mb-3">
                  <span className="text-[9px] text-zinc-500 uppercase tracking-widest block font-mono">🔍 Bilim ve Tefekkür Ayracı</span>
                  <p className="text-zinc-400 text-xs italic mt-1 leading-relaxed">
                    {question.scientificInsight}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={handleNextQuestion}
                className="py-2.5 px-6 cursor-pointer bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-black font-display font-bold text-xs tracking-wider rounded-xl transition"
              >
                {currentIdx < questions.length - 1 ? 'SONRAKİ MUAMMA' : 'İSTASYONU TAMAMLA'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
