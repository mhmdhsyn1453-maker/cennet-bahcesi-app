import React from 'react';
import { GameZone, Team } from '../types';
import {
  BookOpen,
  Compass,
  ArrowRight,
  Sparkles,
  Award,
  HelpCircle,
  Plus,
  Minus,
  Settings,
  Users,
  Trophy,
  Hammer,
  Shield,
  RotateCcw
} from 'lucide-react';

interface QuestMapProps {
  teams: Team[];
  onSelectZone: (zone: GameZone) => void;
  onModifyScore: (teamId: string, delta: number) => void;
  onSwitchActiveTeam: (teamId: string) => void;
  completedZones: Record<GameZone, boolean>;
  onOpenEditor: () => void;
  onResetGame?: () => void;
}

const ZONE_DETAILS: Record<GameZone, {
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  color: string;
  points: number;
  bgBadge: string;
  textBadge: string;
}> = {
  [GameZone.KelimeArkeolojisi]: {
    title: 'Kelime Arkeolojisi',
    subtitle: 'Kelimelerin Kadim Kökenleri',
    description: 'Günlük Türkçe kelimelerin Kuran ayetlerindeki şaşırtıcı Arapça köklerini ve derin anlam bağlarını deşifre edin.',
    icon: BookOpen,
    color: 'border-amber-400 group-hover:bg-amber-50 bg-white',
    points: 10,
    bgBadge: 'bg-amber-100',
    textBadge: 'text-amber-800'
  },
  [GameZone.HikmetIkilemleri]: {
    title: 'Ahlaki İkilemler',
    subtitle: 'Okul ve Cami Sınavları',
    description: 'Okulda, sokakta ve sosyal yaşamda karşılaşılabilecek çetin senaryolara en erdemli ve zekice çözümü tartışarak bulun.',
    icon: Compass,
    color: 'border-rose-400 group-hover:bg-rose-50 bg-white',
    points: 10,
    bgBadge: 'bg-rose-100',
    textBadge: 'text-rose-800'
  },
  [GameZone.KronolojiMatrisi]: {
    title: 'Siyer Kronolojisi',
    subtitle: 'Tarihin Altın Yaprakları',
    description: 'Kutlu tarihimizin (Peygamber Efendimiz\'in mücadelesi) kırılma noktalarını tahtaya kalkıp sırayla zaman çizgisine yerleştirin.',
    icon: ArrowRight,
    color: 'border-sky-400 group-hover:bg-sky-50 bg-white',
    points: 15,
    bgBadge: 'bg-sky-100',
    textBadge: 'text-sky-800'
  },
  [GameZone.EsmaKevn]: {
    title: 'Esma ve Kevn (Evren)',
    subtitle: 'Kozmosun Yaratılış Şifresi',
    description: 'Biyoloji, astrofizik ve tabiat tasarımlarındaki harikulade delilleri ilahi isimlerle (Esma-ül Hüsna) eşleştirin.',
    icon: Sparkles,
    color: 'border-emerald-400 group-hover:bg-emerald-50 bg-white',
    points: 15,
    bgBadge: 'bg-emerald-100',
    textBadge: 'text-emerald-805'
  },
  [GameZone.SirAyeti]: {
    title: 'Sır Ayeti Portalı',
    subtitle: 'Harf Bulmaca Muamması',
    description: 'Kuran-ı Kerim\'deki meşhur hikmet ayetlerinin gizli kelimelerini harf ipuçlarını çözerek tamamlayın.',
    icon: Shield,
    color: 'border-purple-400 group-hover:bg-purple-50 bg-white',
    points: 10,
    bgBadge: 'bg-purple-100',
    textBadge: 'text-purple-800'
  },
};

export const QuestMap: React.FC<QuestMapProps> = ({
  teams,
  onSelectZone,
  onModifyScore,
  onSwitchActiveTeam,
  completedZones,
  onOpenEditor,
  onResetGame
}) => {
  const activeTeam = teams.find((t) => t.active) || teams[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 px-4 py-4 max-w-7xl mx-auto relative z-10" id="quest-map-bright-screen">
      
      {/* 1. Left Panel: Meclisler & Scoreboard */}
      <div className="lg:col-span-1 bg-white border-3 border-slate-200 rounded-[2rem] p-5 flex flex-col justify-between shadow-sm h-fit sticky top-24">
        <div>
          <div className="flex items-center gap-2 pb-4 border-b-2 border-slate-100 mb-4 justify-between">
            <span className="text-[11px] font-black text-slate-500 uppercase tracking-wider">
              MECİLSLER VE SKOR TABLOSU
            </span>
            <Trophy className="w-4 h-4 text-amber-500 animate-bounce" />
          </div>

          {/* Teams List */}
          <div className="flex flex-col gap-3">
            {teams.map((team, idx) => {
              const isTurn = team.active;
              return (
                <div
                  key={team.id}
                  onClick={() => onSwitchActiveTeam(team.id)}
                  className={`p-4 rounded-2xl border-3 transition-all cursor-pointer relative overflow-hidden ${
                    isTurn
                      ? 'bg-amber-50 border-amber-400 shadow-md transform -translate-y-0.5'
                      : 'bg-slate-50 border-slate-100 hover:border-slate-300 opacity-90'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className={`text-xs font-black tracking-wide ${isTurn ? 'text-amber-800' : 'text-slate-500'}`}>
                      {idx + 1}. {team.name.toUpperCase()}
                    </span>
                    {isTurn && (
                      <span className="px-2 py-0.5 rounded-lg bg-emerald-100 text-[8px] font-black tracking-wider text-emerald-800 border border-emerald-300">
                        SÖZCÜ TAKIM
                      </span>
                    )}
                  </div>

                  <div className="text-2xl font-black font-display text-slate-800 mb-2 tracking-tight">
                    {team.score} <span className="text-[10px] font-bold text-slate-400 italic">Puan</span>
                  </div>

                  {/* Score gauge filling bar */}
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${isTurn ? 'bg-amber-500' : team.color}`}
                      style={{ width: `${Math.min(100, Math.max(10, (team.score / 60) * 100))}%` }}
                    />
                  </div>

                  {/* Score adjustment target triggers - great on Smart Boards */}
                  <div className="flex justify-end gap-1 mt-3 pt-2.5 border-t border-slate-100" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => onModifyScore(team.id, -5)}
                      className="p-1 px-2 bg-slate-100 border border-slate-200 text-slate-500 hover:text-rose-600 hover:border-rose-300 rounded hover:bg-rose-50 text-[10px] font-bold transition-all active:scale-90 cursor-pointer"
                    >
                      -5 Puan
                    </button>
                    <button
                      onClick={() => onModifyScore(team.id, 5)}
                      className="p-1 px-2 bg-slate-100 border border-slate-200 text-slate-600 hover:text-emerald-600 hover:border-emerald-300 rounded hover:bg-emerald-50 text-[10px] font-bold transition-all active:scale-90 cursor-pointer"
                    >
                      +5 Puan
                    </button>
                    <button
                      onClick={() => onModifyScore(team.id, 10)}
                      className="p-1 px-2.5 bg-emerald-50 border border-emerald-300 text-emerald-800 hover:bg-emerald-100 rounded text-[10px] font-black transition-all active:scale-90 cursor-pointer"
                    >
                      +10 Puan
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Question editor workshop trigger */}
        <div className="mt-8 pt-4 border-t-2 border-slate-100 space-y-2">
          <button
            onClick={onOpenEditor}
            className="w-full flex items-center justify-center gap-1.5 py-3 px-4 bg-slate-50 border-2 border-slate-200 text-slate-600 hover:text-emerald-800 hover:border-emerald-400 rounded-2xl font-display text-xs font-black cursor-pointer transition active:scale-95"
          >
            <Hammer className="w-4 h-4 text-emerald-600" /> Soru Atölyesi (Hoca)
          </button>
          {onResetGame && (
            <button
              onClick={onResetGame}
              className="w-full flex items-center justify-center gap-1.5 py-3 px-4 bg-rose-50 border-2 border-rose-200 text-rose-700 hover:text-rose-800 hover:border-rose-400 rounded-2xl font-display text-xs font-black cursor-pointer transition active:scale-95"
            >
              <RotateCcw className="w-4 h-4 text-rose-650" /> Oyunu Yeniden Kur
            </button>
          )}
          <div className="text-[9px] text-slate-400 text-center mt-2 font-mono uppercase tracking-wider font-semibold">
            Hazır Soruları Özelleştirin veya Sıfırlayın
          </div>
        </div>
      </div>

      {/* 2. Middle Panel: Game Zones Map */}
      <div className="lg:col-span-3 flex flex-col gap-6">
        
        {/* Playful greeting */}
        <div className="p-6 bg-white border-3 border-slate-200 rounded-[2rem] flex flex-col sm:flex-row items-center gap-4 justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-3.5 bg-emerald-100 border-2 border-emerald-300 rounded-2xl text-emerald-800">
              <Compass className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h2 className="font-display font-black text-xl text-slate-800 tracking-tight uppercase">YOLCULUK ATLASI HALKASI</h2>
              <p className="text-xs text-slate-500 font-semibold">Sıradaki meclis bir bölge seçebilir.</p>
            </div>
          </div>
          <div className="px-4 py-2 bg-amber-50 rounded-xl text-xs font-black border-2 border-amber-250 text-amber-850 shrink-0 text-center shadow-inner">
            <span className="text-[9px] text-amber-600 uppercase block font-black">TAHTADA OYNAYAN:</span>
            <span className="text-sm font-black tracking-wide">{activeTeam.name}</span>
          </div>
        </div>

        {/* Grid representation of 5 Interactive Stations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(ZONE_DETAILS).map(([zoneId, detail]) => {
            const isCompleted = completedZones[zoneId as GameZone];
            const IconComponent = detail.icon;
            return (
              <div
                key={zoneId}
                onClick={() => onSelectZone(zoneId as GameZone)}
                className={`group relative flex flex-col justify-between p-6 rounded-[2rem] border-3 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer active:scale-98 overflow-hidden ${detail.color}`}
              >
                {/* Visual badge top */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl ${detail.bgBadge} border-2`}>
                      <IconComponent className="w-5 h-5 text-slate-800" />
                    </div>
                    {isCompleted ? (
                      <span className="px-3 py-1 bg-emerald-100 border-2 border-emerald-400 text-emerald-800 rounded-full text-[9px] font-black uppercase tracking-wider">
                        Tamamlandı ✓
                      </span>
                    ) : (
                      <span className={`px-3 py-1 ${detail.bgBadge} ${detail.textBadge} rounded-full text-[9px] font-black uppercase tracking-wide border`}>
                        + {detail.points} Puan
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-black text-lg text-slate-800 group-hover:text-emerald-700 transition-colors tracking-tight">
                    {detail.title}
                  </h3>
                  <p className="text-[10px] font-extrabold text-amber-600 uppercase tracking-widest mt-0.5">
                    {detail.subtitle}
                  </p>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed mt-3 min-h-[48px]">
                    {detail.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-black text-slate-600 group-hover:text-emerald-600 group-hover:translate-x-1.5 transition-all duration-300">
                  <span>İstasyon Odasını Aç</span>
                  <ArrowRight className="w-4 h-4 text-slate-450 group-hover:text-emerald-600" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Small Board Tip for teachers */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 text-xs text-amber-900 font-semibold space-y-1.5">
          <div className="font-display font-black uppercase tracking-widest text-[11px] text-amber-950 mb-1">👨‍🏫 REHBER HAKEM HOCA REHBERİ:</div>
          <p>• Sınıfı tahta üzerinde kurduğunuz takımlara göre meclis gruplarına bölün.</p>
          <p>• Her meclis ortaklaşa istişareyle tahtadaki doğru karara uzlaşarak varır.</p>
          <p>• Puan ekleme, çıkarma ve meclis değiştirme işlemlerini öğretmen sol panelden anında kontrol edebilir.</p>
        </div>
      </div>
    </div>
  );
};
