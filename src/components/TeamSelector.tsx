import React, { useState } from 'react';
import { Users, Shield, ArrowRight, Compass, Flame, Leaf, BookOpen, Star, HelpCircle, Trophy } from 'lucide-react';
import { Team } from '../types';

interface TeamSelectorProps {
  onTeamsSelected: (teams: Team[]) => void;
}

const PRESET_TEAMS = [
  { name: 'Endülüs Yıldızları', color: 'bg-amber-500', text: 'text-amber-600', border: 'border-amber-300', hover: 'hover:border-amber-500', icon: 'BookOpen' },
  { name: 'Semerkand Meşaleleri', color: 'bg-emerald-500', text: 'text-emerald-600', border: 'border-emerald-300', hover: 'hover:border-emerald-500', icon: 'Star' },
  { name: 'Bağdat Kaşifleri', color: 'bg-sky-500', text: 'text-sky-600', border: 'border-sky-300', hover: 'hover:border-sky-500', icon: 'Compass' },
  { name: 'Kurtuba Kahramanları', color: 'bg-rose-500', text: 'text-rose-600', border: 'border-rose-300', hover: 'hover:border-rose-500', icon: 'Flame' },
];

export const TeamSelector: React.FC<TeamSelectorProps> = ({ onTeamsSelected }) => {
  const [teamCount, setTeamCount] = useState<number>(2);
  const [teams, setTeams] = useState<Team[]>([
    { id: '1', name: 'Endülüs Fatihleri', score: 0, color: 'bg-amber-500', icon: 'BookOpen', active: true },
    { id: '2', name: 'Semerkand Bilginleri', score: 0, color: 'bg-emerald-500', icon: 'Star', active: false },
    { id: '3', name: 'Bağdat Kaşifleri', score: 0, color: 'bg-sky-500', icon: 'Compass', active: false },
    { id: '4', name: 'Kurtuba Kartalları', score: 0, color: 'bg-rose-500', icon: 'Flame', active: false },
  ]);

  const handleCountChange = (count: number) => {
    setTeamCount(count);
  };

  const updateTeamName = (index: number, newName: string) => {
    setTeams(prev => prev.map((t, i) => i === index ? { ...t, name: newName } : t));
  };

  const handleStartGame = () => {
    // Return only selected count of teams
    const selectedTeams = teams.slice(0, teamCount);
    // Make sure first team is active
    selectedTeams[0].active = true;
    for (let i = 1; i < selectedTeams.length; i++) {
      selectedTeams[i].active = false;
    }
    onTeamsSelected(selectedTeams);
  };

  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen className={className} />;
      case 'Star': return <Star className={className} />;
      case 'Compass': return <Compass className={className} />;
      case 'Flame': return <Flame className={className} />;
      default: return <Users className={className} />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 relative z-10" id="team-selector-flow">
      {/* Playful top banner */}
      <div className="text-center mb-10">
        <span className="px-5 py-2 bg-emerald-100 border-2 border-emerald-300 rounded-full text-xs font-black text-emerald-800 tracking-wider inline-flex items-center gap-2 mb-3 uppercase shadow-sm">
          🌟 SEVGİLİ ÇOCUKLAR HOŞ GELDİNİZ! 🌟
        </span>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-800 mb-3 tracking-tight">
          🕌 CENNET BAHÇESİ OYUNU
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base font-medium">
          Derslerinizi oyun oynayarak öğrenmeye hazır mısınız? Önce takımınızı seçin, unvanınızı yazın ve akıllı tahtadaki tatlı yarışmaya katılın!
        </p>
      </div>

      <div className="bg-white border-[3px] border-slate-200 rounded-[2.5rem] p-6 sm:p-8 shadow-xl mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-bl-full border-b-2 border-l-2 border-amber-250 opacity-40"></div>
        
        {/* Step 1: Count of Teams */}
        <div className="mb-8">
          <label className="block text-xs font-black text-slate-500 mb-3 tracking-widest uppercase flex items-center gap-1">
            <span>🔴 1. KAÇ MECLİS (TAKIM) YARIŞACAK?</span>
          </label>
          <div className="grid grid-cols-3 gap-4">
            {[2, 3, 4].map((count) => (
              <button
                key={count}
                onClick={() => handleCountChange(count)}
                className={`flex flex-col items-center justify-center p-5 rounded-2xl border-3 transition-all cursor-pointer ${
                  teamCount === count
                    ? 'bg-emerald-50 border-emerald-500 text-emerald-900 shadow-[0_4px_0px_#10b981] scale-[1.02]'
                    : 'bg-slate-50 border-slate-200 text-slate-400 hover:border-slate-300 hover:text-slate-600'
                }`}
              >
                <span className="text-4xl font-display font-black mb-1">{count}</span>
                <span className="text-[10px] font-extrabold tracking-widest uppercase">TAKIM</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Customize Names */}
        <div className="mb-8">
          <label className="block text-xs font-black text-slate-500 mb-3 tracking-widest uppercase">
            <span>🟢 2. TAKIMLARINIZA TATLI İSİMLER YAZIN:</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teams.slice(0, teamCount).map((team, idx) => {
              const preset = PRESET_TEAMS[idx] || PRESET_TEAMS[0];
              return (
                <div
                  key={team.id}
                  className={`flex flex-col p-4 rounded-2xl border-3 bg-white ${preset.border} shadow-sm transition-all`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${preset.color} text-white shadow-inner`}>
                        {renderIcon(team.icon, 'w-4 h-4')}
                      </div>
                      <span className={`text-xs font-black ${preset.text}`}>
                        TAKIM {idx + 1} • {preset.name}
                      </span>
                    </div>
                  </div>
                  <input
                    type="text"
                    value={team.name}
                    onChange={(e) => updateTeamName(idx, e.target.value)}
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:border-emerald-500 focus:bg-white focus:outline-none p-3 rounded-xl text-slate-800 font-display text-sm font-black tracking-wide transition-colors"
                    placeholder={`${preset.name}`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleStartGame}
            className="btn-game-primary text-lg px-12 py-4 rounded-3xl"
          >
            MACERAYI BAŞLAT! <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Rules Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mt-4">
        <div className="bg-white p-5 border-2 border-slate-200 rounded-3xl shadow-sm">
          <div className="text-2xl mb-1">🎮</div>
          <h4 className="font-display font-black text-slate-800 text-sm mb-1">Oyunlaştırma</h4>
          <p className="text-xs text-slate-500 font-medium">Büyüleyici tatlı oyunlar, Elifba kelime bulmacaları ile eğlenerek Kuran ve ahlak öğrenme.</p>
        </div>
        <div className="bg-white p-5 border-2 border-slate-200 rounded-3xl shadow-sm">
          <div className="text-2xl mb-1">🖥️</div>
          <h4 className="font-display font-black text-slate-800 text-sm mb-1">Akıllı Tahta Uyumlu</h4>
          <p className="text-xs text-slate-500 font-medium">Sınıf ortamında akıllı tahtadan tüm çocukların kolayca görebileceği dev butonlar.</p>
        </div>
        <div className="bg-white p-5 border-2 border-slate-200 rounded-3xl shadow-sm">
          <div className="text-2xl mb-1">👑</div>
          <h4 className="font-display font-black text-slate-800 text-sm mb-1">Hoca Denetimi</h4>
          <p className="text-xs text-slate-500 font-medium">Hocalarımız puanları kontrol edebilir, çocuklara ipuçları sunarak dersi canlandırabilir.</p>
        </div>
      </div>
    </div>
  );
};
