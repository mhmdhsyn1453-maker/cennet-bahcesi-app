import React, { useState } from 'react';
import { DilemmaQuestion, Team } from '../types';
import { Compass, Sparkles, AlertCircle, ArrowLeft, Heart, Shield, HelpCircle } from 'lucide-react';
import { playSound } from './BuzzerAndTimer';

interface HikmetIkilemleriProps {
  questions: DilemmaQuestion[];
  activeTeam: Team;
  onAwardPoints: (teamId: string, points: number) => void;
  onRegisterCompletion: () => void;
  onBackToMap: () => void;
}

export const HikmetIkilemleri: React.FC<HikmetIkilemleriProps> = ({
  questions,
  activeTeam,
  onAwardPoints,
  onRegisterCompletion,
  onBackToMap,
}) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  const question = questions[currentIdx] || questions[0];

  const handleSelectOption = (index: number) => {
    if (selectedIdx !== null) return;
    setSelectedIdx(index);
    setIsRevealed(true);

    const option = question.options[index];
    if (option.points >= 7) {
      playSound('success');
    } else {
      playSound('fail');
    }
    onAwardPoints(activeTeam.id, option.points);
  };

  const handleNextDilemma = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedIdx(null);
      setIsRevealed(false);
    } else {
      onRegisterCompletion();
      onBackToMap();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-4" id="hikmet-ikilemleri-station">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-6 bg-zinc-900/50 p-4 border border-zinc-800 rounded-2xl">
        <button
          onClick={onBackToMap}
          className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white bg-zinc-950 p-2 px-3.5 rounded-lg border border-zinc-850 cursor-pointer hover:border-zinc-700 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Haritaya Dön
        </button>

        <div className="flex items-center gap-2">
          <Compass className="w-5 h-5 text-rose-500 animate-spin-slow" />
          <span className="font-display font-black text-sm uppercase text-rose-400 tracking-wider">
            İSTASYON 2: HİKMET VE AHLAK İKİLEMLERİ
          </span>
        </div>

        <div className="px-3 py-1 bg-rose-500/10 text-rose-400 rounded-full font-mono text-xs border border-rose-500/25">
          Durum: {currentIdx + 1} / {questions.length}
        </div>
      </div>

      {/* Main Core Scenario */}
      <div className="bg-deep-charcoal border border-zinc-800/80 rounded-3xl p-6 shadow-2xl mb-6 relative overflow-hidden">
        {/* Glow decoration */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-rose-600/5 rounded-full filter blur-3xl pointer-events-none" />

        <div className="mb-6">
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-rose-500" /> GERÇEK HAYAT SOSYAL SENARYOSU
          </div>
          <h2 className="text-2xl font-display font-extrabold text-white mt-1 tracking-tight">
            {question.title}
          </h2>
          
          <div className="bg-black/30 border border-zinc-900 rounded-2xl p-5 mt-4 text-zinc-200 text-sm sm:text-base leading-relaxed font-display">
            {question.scenario}
          </div>
        </div>

        {/* Options Stack (Massive easy touch targets for Class Board) */}
        <div className="space-y-3">
          <span className="block text-xs uppercase font-mono tracking-wider text-zinc-500 mb-2">
            Meclisinizin Kararı Nedir? (Sınıfta tartışarak seçin)
          </span>

          {question.options.map((opt, idx) => {
            const isSelected = selectedIdx === idx;
            let optStyle = 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 text-zinc-200 hover:bg-zinc-900';
            
            if (isRevealed) {
              if (isSelected) {
                optStyle = opt.points >= 7 
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' 
                  : 'bg-amber-500/25 border-amber-500 text-amber-300';
              } else {
                optStyle = 'bg-zinc-950/20 border-zinc-950 text-zinc-650 opacity-50';
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                disabled={isRevealed}
                className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm leading-relaxed font-semibold transition-all cursor-pointer flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 ${optStyle}`}
              >
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-black/40 text-[11px] font-mono font-bold flex items-center justify-center shrink-0 border border-zinc-800 text-zinc-400">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="font-display">{opt.text}</span>
                </div>

                {isRevealed && isSelected && (
                  <span className={`text-[10px] font-mono tracking-wider p-1 px-2.5 rounded-md shrink-0 border uppercase font-extrabold ${
                    opt.points >= 7 ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-amber-500/10 border-amber-500/30'
                  }`}>
                    + {opt.points} PUAN
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active turn helper */}
        {!isRevealed && (
          <div className="mt-4 p-3 bg-zinc-950 rounded-lg text-center border border-zinc-900 text-xs text-zinc-400">
            Karar Verecek Meclis: <span className={`${activeTeam.color.replace('bg-', 'text-')} font-bold`}>{activeTeam.name}</span>
          </div>
        )}

        {/* Revealed Outcome Panel */}
        {isRevealed && selectedIdx !== null && (
          <div className="mt-8 pt-6 border-t border-zinc-800/85 animate-fade-in">
            <div className={`p-5 rounded-2xl flex flex-col md:flex-row items-start gap-4 ${
              question.options[selectedIdx].points >= 7 
                ? 'bg-emerald-950/20 border border-emerald-500/20' 
                : 'bg-amber-950/20 border border-amber-500/20'
            }`}>
              <div className={`p-2.5 rounded-xl ${
                question.options[selectedIdx].points >= 7 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'
              }`}>
                {question.options[selectedIdx].points >= 7 ? <Heart className="w-6 h-6 animate-pulse" /> : <AlertCircle className="w-6 h-6" />}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="font-display font-extrabold text-white text-base">
                    {question.options[selectedIdx].points >= 7 ? 'Erdemli Seçim!' : 'Daha Akıllıca Bir Karar Gerekirdi'}
                  </h4>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-zinc-900 p-1 px-2.5 rounded border border-zinc-800 text-islamic-gold">
                    Kazandığınız Erdem: {question.options[selectedIdx].virtue}
                  </span>
                </div>
                
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {question.options[selectedIdx].feedback}
                </p>

                <div className="p-3 bg-black/40 border border-zinc-900 rounded-xl text-zinc-400 text-xs italic leading-relaxed">
                  <span className="font-sans font-bold text-zinc-300 uppercase tracking-widest text-[9px] block">İnce Düşünce (Kuran/Sünnet Ahlakı)</span>
                  "Mümin, kendisi için istediğini kardeşi için de istemedikçe, kaba akran baskılarına boyun eğmeyip adaleti haykırdıkça gerçek olgunluğa ulaşır."
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={handleNextDilemma}
                className="py-2.5 px-6 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-black font-display font-bold text-xs tracking-wider rounded-xl transition cursor-pointer"
              >
                {currentIdx < questions.length - 1 ? 'SONRAKİ SENARYO' : 'İSTASYONU TAMAMLA'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
