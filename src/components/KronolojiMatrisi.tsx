import React, { useState, useEffect } from 'react';
import { ChronologyQuestion, ChronologistEvent, Team } from '../types';
import { ArrowLeft, Clock, CheckCircle2, ChevronUp, ChevronDown, ListOrdered, Calendar, HelpCircle } from 'lucide-react';
import { playSound } from './BuzzerAndTimer';

interface KronolojiMatrisiProps {
  questions: ChronologyQuestion[];
  activeTeam: Team;
  onAwardPoints: (teamId: string, points: number) => void;
  onRegisterCompletion: () => void;
  onBackToMap: () => void;
}

export const KronolojiMatrisi: React.FC<KronolojiMatrisiProps> = ({
  questions,
  activeTeam,
  onAwardPoints,
  onRegisterCompletion,
  onBackToMap,
}) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [items, setItems] = useState<ChronologistEvent[]>([]);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [checksCount, setChecksCount] = useState<number>(0);
  const [correctPositions, setCorrectPositions] = useState<Record<string, boolean>>({});

  const question = questions[currentIdx] || questions[0];

  // Load and shuffle items on question change
  useEffect(() => {
    if (question) {
      const shuffled = [...question.events].sort(() => Math.random() - 0.5);
      setItems(shuffled);
      setIsDone(false);
      setChecksCount(0);
      setCorrectPositions({});
    }
  }, [question, currentIdx]);

  // Click-to-reorder actions (Excellent for Akıllı Tahta touch screens)
  const moveItem = (index: number, direction: 'up' | 'down') => {
    if (isDone) return;
    const newItems = [...items];
    const targetIdx = direction === 'up' ? index - 1 : index + 1;

    if (targetIdx < 0 || targetIdx >= newItems.length) return;

    // Swap items
    const temp = newItems[index];
    newItems[index] = newItems[targetIdx];
    newItems[targetIdx] = temp;

    setItems(newItems);
    playSound('tick');
  };

  const handleVerify = () => {
    if (isDone) return;

    let allCorrect = true;
    const positions: Record<string, boolean> = {};

    items.forEach((item, index) => {
      // Expected index is item.order - 1
      const isCorrect = (item.order - 1) === index;
      positions[item.id] = isCorrect;
      if (!isCorrect) {
        allCorrect = false;
      }
    });

    setCorrectPositions(positions);
    setChecksCount(prev => prev + 1);

    if (allCorrect) {
      playSound('success');
      setIsDone(true);
      // Award 15 points, decreasing by 3 for each wrong verification run to encourage clever thinking!
      const finalScore = Math.max(5, 15 - checksCount * 3);
      onAwardPoints(activeTeam.id, finalScore);
    } else {
      playSound('fail');
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      onRegisterCompletion();
      onBackToMap();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-4" id="kronoloji-matrisi-station">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-6 bg-zinc-900/50 p-4 border border-zinc-800 rounded-2xl">
        <button
          onClick={onBackToMap}
          className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white bg-zinc-950 p-2 px-3.5 rounded-lg border border-zinc-900 cursor-pointer hover:border-zinc-700 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Haritaya Dön
        </button>

        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-blue-500 animate-pulse" />
          <span className="font-display font-black text-sm uppercase text-blue-400 tracking-wider">
            İSTASYON 3: KRONOLOJİ MATRİSİ
          </span>
        </div>

        <div className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full font-mono text-xs border border-blue-500/25">
          Seri: {currentIdx + 1} / {questions.length}
        </div>
      </div>

      {/* Main Core */}
      <div className="bg-deep-charcoal border border-zinc-800/80 rounded-3xl p-6 shadow-2xl mb-6 relative overflow-hidden">
        {/* Glow decoration */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/5 rounded-full filter blur-3xl pointer-events-none" />

        <div className="mb-6">
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
            <ListOrdered className="w-4 h-4 text-blue-500" /> SİYER VE İSLOW TARİHİ SIKLAŞTIRMASI
          </div>
          <h2 className="text-2xl font-display font-extrabold text-white mt-1 tracking-tight">
            {question.title}
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1">
            {question.theme}
          </p>
        </div>

        {/* Chronology Line Stack */}
        <div className="space-y-3 mb-6 relative">
          {/* Vertical indicator line */}
          <div className="absolute top-4 bottom-4 left-6 w-0.5 bg-zinc-800/80 -z-10" />

          {items.map((item, idx) => {
            const hasChecked = checksCount > 0;
            const isCorrect = correctPositions[item.id];
            
            let cardStyle = 'bg-zinc-900/60 border-zinc-800 text-zinc-200';
            if (hasChecked) {
              cardStyle = isCorrect 
                ? 'bg-emerald-950/20 border-emerald-500/50 text-emerald-300' 
                : 'bg-zinc-900 border-zinc-850 text-zinc-400';
            }

            return (
              <div
                key={item.id}
                className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${cardStyle}`}
              >
                <div className="flex items-center gap-4 min-w-0">
                  {/* Position Badge */}
                  <span className={`w-8.5 h-8.5 rounded-lg text-xs font-mono font-bold flex items-center justify-center shrink-0 border uppercase ${
                    hasChecked && isCorrect 
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' 
                      : 'bg-black/60 border-zinc-850 text-zinc-400'
                  }`}>
                    {idx + 1}. OLAY
                  </span>
                  
                  {/* Content */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-display font-bold text-sm sm:text-base text-white tracking-wide">
                        {item.title}
                      </h4>
                      <span className="flex items-center gap-1 text-[10px] font-mono text-zinc-500 bg-black/40 px-2 py-0.5 rounded border border-zinc-900">
                        <Calendar className="w-3 h-3 text-blue-500" /> {item.year}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-0.5 line-clamp-1 sm:line-clamp-none">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Reorder actions (Large touch buttons for Smart Board) */}
                <div className="flex items-center gap-1.5 shrink-0 ml-4 pb-1">
                  <button
                    onClick={() => moveItem(idx, 'up')}
                    disabled={idx === 0 || isDone}
                    className={`p-2 bg-zinc-950 hover:bg-zinc-850 text-zinc-400 hover:text-white rounded-lg border border-zinc-850 active:scale-90 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed`}
                    title="Yukarı Taşı"
                  >
                    <ChevronUp className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => moveItem(idx, 'down')}
                    disabled={idx === items.length - 1 || isDone}
                    className={`p-2 bg-zinc-950 hover:bg-zinc-850 text-zinc-400 hover:text-white rounded-lg border border-zinc-850 active:scale-90 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed`}
                    title="Aşağı Taşı"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification Check triggers */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-black/30 border border-zinc-900 p-4 rounded-2xl gap-4">
          <div className="text-center sm:text-left">
            <span className="text-[10px] font-mono text-zinc-500 uppercase">Turn Meclisi</span>
            <p className="font-display text-sm font-semibold text-white mt-0.5">
              İslam Tarihi Sıralamasını yapan takım: <span className={`${activeTeam.color.replace('bg-', 'text-')} font-bold`}>{activeTeam.name}</span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            {!isDone ? (
              <button
                onClick={handleVerify}
                className="py-2.5 px-6 cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-display font-bold text-xs tracking-wider rounded-xl transition"
              >
                HİZALA & KONTROL ET
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="py-2.5 px-6 cursor-pointer bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-black font-display font-bold text-xs tracking-wider rounded-xl transition"
              >
                {currentIdx < questions.length - 1 ? 'SONRAKİ KRONOLOJİ' : 'İSTASYONU TAMAMLA'}
              </button>
            )}
          </div>
        </div>

        {/* Completed overlay & Historical Context */}
        {isDone && (
          <div className="mt-8 pt-6 border-t border-zinc-800 bg-emerald-950/10 p-5 rounded-2xl border border-emerald-500/20 animate-fade-in flex flex-col md:flex-row gap-4">
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl shrink-0 h-fit">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-display font-black text-white text-base">Zaman Çizgisi Kusursuz Hizalandı!</h4>
              <p className="text-zinc-300 text-xs sm:text-sm mt-1 leading-relaxed">
                Harika bir kronoloji hizalaması! Peygamber Efendimiz'in Mekke ve Medine dönemlerindeki akıllı, sabırlı ve stratejik mücadele aşamaları İslam'ın can damarıdır.
              </p>
              <div className="bg-black/40 border border-zinc-900 rounded-xl p-3.5 mt-3">
                <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-mono block">Münevver Tefekkür (Tarih Bilinci)</span>
                <p className="text-zinc-400 text-xs italic mt-1 leading-relaxed">
                  "Uhud olayındaki itaatin öneminden Hudeybiye Barışındaki diplomatik dehaya kadar her an, genç beyinlerimiz için bugünün dünyasını adaletle şekillendirecek muazzam dersler barındırır."
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
