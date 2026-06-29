import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles, Gamepad2, Users, Trophy, ArrowLeft, Maximize2, Minimize2,
  Play, Settings, User, Landmark, Shield, Flame, Compass, HelpCircle,
  Star, BookOpen, Clock, Heart, Award, CheckCircle2, XCircle
} from 'lucide-react';
import Lottie from 'lottie-react';
import { Team } from '../types';
import {
  getCurriculumQuizQuestions,
  getRandomQuestionForLetter,
  getRandomVocabularyWords,
  getRandomVocabularyWordsByCategory,
  getRandomTrueFalseStatementsByCategory,
  getRandomTrueFalseStatements,
  AZQuestion,
  VocabularyWord,
  TrueFalseStatement,
  UnifiedQuizQuestion,
  shuffleArray
} from '../utils/questionPool';
import { MosqueHangmanGame } from './games/MosqueHangmanGame';
import { HANGMAN_QUESTIONS_DB } from '../data/games/hangmanQuestions';
import { MEMORY_MATCH_QUESTIONS_DB } from '../data/games/memoryMatchQuestions';
import { playSound } from './BuzzerAndTimer';
import { PassaparolaGame } from './games/PassaparolaGame';

// Preset Takım Verileri (Akıllı Tahta uyumlu çocuk dostu renk ve ikonlarla)
const TEAM_PRESETS = [
  { name: 'Endülüs Yıldızları', color: 'from-amber-400 to-orange-500', bgBorder: 'border-amber-400/50', textColor: 'text-amber-500', shadowColor: 'shadow-amber-500/20', icon: 'Star' },
  { name: 'Semerkand Meşaleleri', color: 'from-emerald-400 to-teal-500', bgBorder: 'border-emerald-400/50', textColor: 'text-emerald-500', shadowColor: 'shadow-emerald-500/20', icon: 'Flame' },
  { name: 'Bağdat Kaşifleri', color: 'from-sky-400 to-indigo-500', bgBorder: 'border-sky-400/50', textColor: 'text-sky-500', shadowColor: 'shadow-sky-500/20', icon: 'Compass' },
  { name: 'Kurtuba Kahramanları', color: 'from-rose-400 to-red-500', bgBorder: 'border-rose-400/50', textColor: 'text-rose-500', shadowColor: 'shadow-rose-500/20', icon: 'Award' }
];

const TURKISH_LETTERS = ['A', 'B', 'C', 'Ç', 'D', 'E', 'F', 'G', 'H', 'I', 'İ', 'K', 'L', 'M', 'N', 'O', 'Ö', 'P', 'R', 'S', 'Ş', 'T', 'U', 'Ü', 'V', 'Y', 'Z'];

// Türkçe Harfleri Büyük Harfe Çevirme Yardımcısı
const toTurkishUpperCase = (str: string) => {
  return str
    .replace(/i/g, 'İ')
    .replace(/ı/g, 'I')
    .toUpperCase();
};

// Türkçe Harfleri Temizleme Yardımcısı (Cevap Kontrolleri İçin)
const cleanTurkish = (str: string) => {
  return str
    .replace(/I/g, 'ı')
    .replace(/İ/g, 'i')
    .toLowerCase()
    .trim()
    .replace(/[^a-zçğışöü0-9]/g, '');
};

// Global session cache to prevent duplicate questions across games
const globalUsedQuestionIds = new Set<string>();

export function markQuestionAsUsed(id: string) {
  globalUsedQuestionIds.add(id);
}

export function filterUnusedQuestions(questions: UnifiedQuizQuestion[]): UnifiedQuizQuestion[] {
  const unused = questions.filter(q => !globalUsedQuestionIds.has(q.id));
  if (unused.length === 0) {
    globalUsedQuestionIds.clear();
    return questions;
  }
  return unused;
}

interface GameHubProps {
  isDarkMode?: boolean;
}

export const GameHub: React.FC<GameHubProps> = ({ isDarkMode = false }) => {
  // Menü Durumu
  // 'mode_select' : Bireysel vs Takım seçimi
  // 'individual_select' : Bireysel oyun listesi
  // 'team_config' : Kaç takım yarışacağı ve isim düzenleme ekranı
  // 'team_select' : Takım oyun listesi
  // 'playing_game' : Aktif bir oyunun tam ekran oynanması
  const [view, setView] = useState<'mode_select' | 'individual_select' | 'team_config' | 'team_select' | 'playing_game'>('mode_select');

  // Title Animation Lottie (Loaded dynamically to avoid Vite public folder import error)
  const [titleAnimation, setTitleAnimation] = useState<any>(null);
  useEffect(() => {
    fetch('assets/title.json')
      .then((r) => r.json())
      .then((data) => setTitleAnimation(data))
      .catch((err) => console.error("Game title Lottie load failed:", err));
  }, []);

  // Takım Ayarları
  const [teamCount, setTeamCount] = useState<number>(2);
  const [teams, setTeams] = useState<Team[]>([
    { id: 't1', name: 'Endülüs Yıldızları', score: 0, color: 'bg-amber-500', icon: 'Star', active: true },
    { id: 't2', name: 'Semerkand Meşaleleri', score: 0, color: 'bg-emerald-500', icon: 'Flame', active: false },
    { id: 't3', name: 'Bağdat Kaşifleri', score: 0, color: 'bg-sky-500', icon: 'Compass', active: false },
    { id: 't4', name: 'Kurtuba Kahramanları', score: 0, color: 'bg-rose-500', icon: 'Award', active: false }
  ]);

  // Tam Ekran Kontrolü (Oyun bazlı)
  const [isGameFullscreen, setIsGameFullscreen] = useState<boolean>(false);
  const [activeGame, setActiveGame] = useState<{ id: string; title: string; isTeam: boolean } | null>(null);

  // Soru Havuzu Bilgisi
  const quizQuestions = getCurriculumQuizQuestions();

  // Takım İsmi Güncelleme
  const handleUpdateTeamName = (index: number, newName: string) => {
    setTeams(prev => prev.map((t, i) => i === index ? { ...t, name: newName } : t));
  };

  // Takım İkonunu Döndürme
  const renderTeamIcon = (iconName: string, className: string = 'w-6 h-6') => {
    switch (iconName) {
      case 'Star': return <Star className={className} />;
      case 'Flame': return <Flame className={className} />;
      case 'Compass': return <Compass className={className} />;
      case 'Award': return <Award className={className} />;
      default: return <Users className={className} />;
    }
  };

  // Tam Ekran Toggling
  const toggleGameFullscreen = () => {
    const gameArea = document.getElementById('game-fullscreen-container');
    if (!gameArea) return;

    if (!document.fullscreenElement) {
      gameArea.requestFullscreen().then(() => {
        setIsGameFullscreen(true);
      }).catch(err => {
        console.error("Tam ekran hatası:", err);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsGameFullscreen(false);
      }).catch(err => {
        console.error("Tam ekrandan çıkış hatası:", err);
      });
    }
  };

  // Oyuna Başlama Tetikleyicisi
  const handleStartGame = (gameId: string, gameTitle: string, isTeam: boolean) => {
    setActiveGame({ id: gameId, title: gameTitle, isTeam });
    setView('playing_game');
  };

  // Oyundan Çıkma
  const handleQuitGame = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(err => console.log(err));
    }
    setIsGameFullscreen(false);
    setView(activeGame?.isTeam ? 'team_select' : 'individual_select');
    setActiveGame(null);
  };

  // Bireysel Oyun Listesi Tanımı (20 tamamen benzersiz ve özgün oyun türü)
  const INDIVIDUAL_GAMES = [
    { id: 'az_passaparola', title: 'A\'dan Z\'ye İslam Atlası (Passaparola)', desc: 'Tüm konulardan rastgele seçilen dini kavramları ve soruları bilerek çemberi tamamla.', icon: <BookOpen className="w-8 h-8 text-amber-500" />, comingSoon: false },
    { id: 'mosque_hangman', title: 'Cami Yapmaca (Adam Asmaca)', desc: 'Sözlükteki kavramları harf harf tahmin ederek canların ve süren bitmeden camiyi inşa et.', icon: <Landmark className="w-8 h-8 text-emerald-500" />, comingSoon: false },
    { id: 'memory_match', title: 'Eşleştirme Kartları (Hafıza Oyunu)', desc: 'Kelimeler ile anlamlarını eşleştirerek kartları ters çevir ve eşlerini bul.', icon: <Users className="w-8 h-8 text-indigo-500" />, comingSoon: false },
    { id: 'word_search', title: 'Hazine Avcısı (Kelime Avı)', desc: 'Karışık harfler tablosundaki dini kelimeleri bulup parmağınla çiz.', icon: <Compass className="w-8 h-8 text-rose-500" />, comingSoon: false },
    { id: 'millionaire_quiz', title: 'Kim Milyoner Olmak İster?', desc: 'Zorluk seviyesine göre artan 15 soruluk dini bilgi yarışması merdiveni.', icon: <Trophy className="w-8 h-8 text-yellow-500" />, comingSoon: false },
    { id: 'chronology', title: 'Sıra Sende (Zaman Şeridi)', desc: 'Tarihi olayları veya ibadet adımlarını kronolojik olarak sırala.', icon: <Clock className="w-8 h-8 text-violet-500" />, comingSoon: false },
    { id: 'wheel_of_wisdom', title: 'Çark-ı Bilgi (Soru Çarkı)', desc: 'Çarkıfeleği çevir, gelen kategorideki soruyu bilerek puanları kap.', icon: <Settings className="w-8 h-8 text-purple-500" />, comingSoon: false },
    { id: 'falling_words', title: 'Kelime Avcısı (Hızlı Yazım)', desc: 'Yukarıdan düşen harfleri kelime tamamlanmadan önce sırayla vur.', icon: <Flame className="w-8 h-8 text-red-500" />, comingSoon: false },
    { id: 'maze_runner', title: 'Hazine Labirenti (Maze Quiz)', desc: 'Karakterini labirentte gezdir, doğru kapıya ulaşırken engelleri aş.', icon: <Compass className="w-8 h-8 text-emerald-600" />, comingSoon: false },
    { id: 'taboo_terms', title: 'Dini Terim Kartları (Tabu)', desc: 'Yasaklı kelimeleri kullanmadan gizli terimi arkadaşlarına anlat.', icon: <Users className="w-8 h-8 text-teal-600" />, comingSoon: false },
    { id: 'pair_matching', title: 'Eşini Bul (Kelime Eşleme)', desc: 'Kavramları sürükleyip ilgili oldukları başlıklarla eşleştir.', icon: <Trophy className="w-8 h-8 text-amber-500" />, comingSoon: false }
  ];

  // Takım Oyun Listesi Tanımı
  const TEAM_GAMES = [
    { id: 'jeopardy_conquest', title: 'Bilgi Fethi (Jeopardy)', desc: 'Kategorilerden zorluk seviyesine göre soru seç, bilerek alanları takımının rengine boya!', icon: <Landmark className="w-8 h-8 text-indigo-500" />, comingSoon: false },
    { id: 'tug_of_war', title: 'Halat Çekme Bilgi Yarışması', desc: 'Soruları bilerek bayrağı kendi tarafına çek. Sınıfı coşturacak nefis bir mücadele!', icon: <Flame className="w-8 h-8 text-orange-500" />, comingSoon: false },
    { id: 'word_bomb', title: 'Saatli Bomba (Kelime Bombası)', desc: 'Bomba patlamadan önce hızlıca doğru kelimeyi söyle ve bombayı diğer takıma devret!', icon: <Clock className="w-8 h-8 text-red-500" />, comingSoon: false },
    { id: 'buzzer_duel', title: 'Sınıf Düellosu (Buzzer)', desc: 'Butona ilk basan takım cevap hakkı kazanır. Hızlı olan puanları toplar.', icon: <Sparkles className="w-8 h-8 text-purple-500" />, comingSoon: false },
    { id: 'chest_guardian', title: 'Hazine Sandığı Koruyucusu', desc: 'Takımının altın sandığını koru! Doğru bilirse kazanırsın, yanlışta diğer takımlar sandığını yağmalar!', icon: <Award className="w-8 h-8 text-yellow-500" />, comingSoon: false },
    { id: 'heaven_path', title: 'Cennet Yolu', desc: '10 adımlık yarışta soruları bilerek piyonunu kapıya ilk ulaştıran takım ol!', icon: <Compass className="w-8 h-8 text-emerald-500" />, comingSoon: false }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 select-none" id="game-hub-container">

      {/* 1. ÜST BAŞLIK ALANI (Sadece oyun oynanmıyorken gösterilir) */}
      {view !== 'playing_game' && (
        <div className="bg-gradient-to-r from-sky-500 via-indigo-600 to-violet-600 border-b-6 border-indigo-700 p-6 rounded-[2.5rem] shadow-xl mb-6 flex items-center justify-between text-white relative overflow-hidden">
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="relative z-10 flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-md border-2 border-white rounded-3xl flex items-center justify-center text-white shadow-inner">
              <Gamepad2 className="w-7 h-7" />
            </div>
            <div>
              <h2 className="font-display font-black text-2xl tracking-normal uppercase">
                CENNET BAHÇESİ OYUN MERKEZİ
              </h2>
              <p className="text-xs font-semibold text-white/90">
                Çevrimdışı İnteraktif Eğlence Portalı • <span className="text-yellow-300 font-extrabold">{quizQuestions.length + 200} Soru & Kelime Havuzu İle...</span>
              </p>
            </div>
          </div>
          {view !== 'mode_select' && (
            <button
              onClick={() => setView('mode_select')}
              className="relative z-10 px-4 py-2 bg-white/20 hover:bg-white/35 border border-white/30 rounded-2xl flex items-center gap-2 text-xs font-black uppercase tracking-wider transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" /> Ana Menü
            </button>
          )}
        </div>
      )}

      {/* 2. DİNAMİK GÖRÜNÜM AKIŞI */}
      <AnimatePresence mode="wait">

        {/* A. ANA MOD SEÇİMİ (Bireysel vs Takım) */}
        {view === 'mode_select' && (
          <motion.div
            key="mode_select"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-4xl mx-auto flex flex-col gap-8 py-4 items-center"
          >
            {/* Playful Welcoming Badge */}
            <div className="flex items-center gap-2 px-4 py-1.5 bg-yellow-100 dark:bg-yellow-950/40 text-yellow-800 dark:text-yellow-300 rounded-full border border-yellow-200 dark:border-yellow-900/50 text-[10px] font-black uppercase tracking-widest animate-pulse">
              🎮 Oyun Bölgesine Hoş Geldiniz! 🌟
            </div>

            {/* Title & Subtitle */}
            <div className="text-center">
              <h3 className="font-display font-black text-3xl sm:text-4xl text-slate-800 dark:text-white uppercase tracking-tight">
                Nasıl Oynamak İstersiniz?
              </h3>
              <p className="text-xs text-slate-550 dark:text-slate-400 mt-2 max-w-md mx-auto leading-relaxed">
                Birbirinden eğlenceli dini bilgi oyunlarını ister tek başınıza, ister arkadaşlarınızla takımlar halinde yarışarak oynayın!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
              {/* Bireysel Oyunlar Butonu */}
              <button
                onClick={() => setView('individual_select')}
                className="group text-left bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 text-slate-800 dark:text-white rounded-[2.5rem] p-8 shadow-md hover:shadow-xl hover:scale-103 active:scale-97 cursor-pointer transition-all duration-300 relative overflow-hidden border-4 border-slate-200 dark:border-slate-700 hover:border-sky-500 dark:hover:border-sky-500 flex flex-col justify-between min-h-[300px]"
              >
                {/* Floating Shapes */}
                <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-sky-500/5 dark:bg-sky-500/10 rounded-full blur-2xl group-hover:scale-120 transition-all duration-500"></div>
                <div className="absolute right-6 top-6 text-7xl opacity-10 dark:opacity-20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">👤</div>

                <div>
                  <div className="w-16 h-16 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-100 dark:border-sky-900/30 flex items-center justify-center text-sky-500 dark:text-sky-400 group-hover:scale-115 group-hover:rotate-6 transition-all duration-300 shadow-inner">
                    <User className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-black text-2xl mt-6 uppercase tracking-tight text-slate-800 dark:text-white">
                    Bireysel Oyunlar
                  </h3>
                  <p className="text-xs text-slate-550 dark:text-slate-400 font-medium mt-2 leading-relaxed max-w-[280px]">
                    Tek kişi veya sırayla oynanabilen, harf tahminleri, kelime bulmacaları ve refleks tabanlı eğlenceli oyunlar alanı.
                  </p>
                </div>

                <div className="mt-8 flex justify-between items-center z-10">
                  <div className="px-3.5 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-200/50 dark:border-slate-700/55 text-slate-555 dark:text-slate-400">
                    🎮 12 Farklı Oyun
                  </div>
                  <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest bg-gradient-to-r from-sky-500 to-indigo-650 text-white px-4 py-2 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all">
                    Başla ➔
                  </div>
                </div>
              </button>

              {/* Takım Yarışmaları Butonu */}
              <button
                onClick={() => setView('team_config')}
                className="group text-left bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 text-slate-800 dark:text-white rounded-[2.5rem] p-8 shadow-md hover:shadow-xl hover:scale-103 active:scale-97 cursor-pointer transition-all duration-300 relative overflow-hidden border-4 border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 flex flex-col justify-between min-h-[300px]"
              >
                {/* Floating Shapes */}
                <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-2xl group-hover:scale-120 transition-all duration-500"></div>
                <div className="absolute right-6 top-6 text-7xl opacity-10 dark:opacity-20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">👥</div>

                <div>
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/30 flex items-center justify-center text-emerald-500 dark:text-emerald-450 group-hover:scale-115 group-hover:rotate-6 transition-all duration-300 shadow-inner">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-black text-2xl mt-6 uppercase tracking-tight text-slate-800 dark:text-white">
                    Takım Yarışmaları
                  </h3>
                  <p className="text-xs text-slate-555 dark:text-slate-400 font-medium mt-2 leading-relaxed max-w-[280px]">
                    Sınıfı meclislere (takımlara) bölerek tatlı bir rekabete girin! Jeopardy, halat çekme ve bomba düellosu gibi 6 büyük yarışma.
                  </p>
                </div>

                <div className="mt-8 flex justify-between items-center z-10">
                  <div className="px-3.5 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-200/50 dark:border-slate-700/55 text-slate-555 dark:text-slate-400">
                    🔥 6 Dev Yarışma
                  </div>
                  <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest bg-gradient-to-r from-emerald-500 to-teal-655 text-white px-4 py-2 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all">
                    Kurulum Yap ➔
                  </div>
                </div>
              </button>            </div>
          </motion.div>
        )}

        {/* B. BİREYSEL OYUN SEÇİMİ */}
        {view === 'individual_select' && (
          <motion.div
            key="individual_select"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {INDIVIDUAL_GAMES.map((game) => (
              <div
                key={game.id}
                className={`group text-left bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border-4 rounded-[2.2rem] p-6 shadow-md relative overflow-hidden flex flex-col justify-between transition-all duration-300 border-slate-200 dark:border-slate-700 hover:border-sky-500 dark:hover:border-sky-500 hover:scale-[1.03] hover:shadow-xl ${
                  game.comingSoon ? 'opacity-65' : ''
                }`}
              >
                {/* Decorative floating shape */}
                <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-sky-500/5 dark:bg-sky-500/10 rounded-full blur-xl group-hover:scale-130 transition-all duration-500"></div>

                <div>
                  {/* Large Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-100 dark:border-sky-900/30 flex items-center justify-center text-sky-500 dark:text-sky-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-inner [&>svg]:w-5.5 [&>svg]:h-5.5">
                    {game.icon}
                  </div>
                  <h4 className="font-display font-black text-sm sm:text-base mt-4 uppercase tracking-tight text-slate-800 dark:text-white leading-tight">
                    {game.title}
                  </h4>
                  <p className="text-[11px] text-slate-550 dark:text-slate-400 font-semibold mt-2.5 leading-relaxed">
                    {game.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-700/50 flex justify-between items-center z-10">
                  <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-455 border border-slate-200/40 dark:border-slate-700/40">
                    Bireysel
                  </span>
                  {!game.comingSoon ? (
                    <button
                      onClick={() => handleStartGame(game.id, game.title, false)}
                      className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-4 py-2 rounded-xl shadow-md hover:shadow-indigo-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" /> Oyna
                    </button>
                  ) : (
                    <div className="text-[9px] font-black text-indigo-500 dark:text-indigo-400 uppercase tracking-widest bg-indigo-50 dark:bg-indigo-950/20 px-3 py-1.5 rounded-lg border border-indigo-100 dark:border-indigo-900/40">
                      Çok Yakında
                    </div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* C. TAKIM KURULUM EKRANI */}
        {view === 'team_config' && (
          <motion.div
            key="team_config"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 rounded-[2.5rem] p-6 sm:p-8 shadow-xl max-w-3xl mx-auto"
          >
            <h3 className="font-display font-black text-xl text-slate-800 dark:text-white uppercase tracking-tight text-center mb-6">
              🚩 Takım Yarışması Kurulumu
            </h3>

            {/* 1. Kaç takım yarışacak */}
            <div className="mb-6">
              <label className="block text-xs font-black text-slate-500 dark:text-slate-400 mb-3 tracking-widest uppercase text-center md:text-left">
                🔴 1. KAÇ TAKIM YARIŞACAK?
              </label>
              <div className="grid grid-cols-3 gap-4">
                {[2, 3, 4].map((count) => (
                  <button
                    key={count}
                    onClick={() => setTeamCount(count)}
                    className={`flex flex-col items-center justify-center p-4 rounded-2xl border-3 transition-all cursor-pointer ${teamCount === count
                        ? 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500 text-emerald-900 dark:text-emerald-400 shadow-md scale-[1.02]'
                        : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-750 text-slate-400 dark:text-slate-550 hover:border-slate-350 dark:hover:border-slate-600'
                      }`}
                  >
                    <span className="text-3xl font-display font-black mb-1">{count}</span>
                    <span className="text-[10px] font-black tracking-widest uppercase">TAKIM</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Takımları Özelleştir */}
            <div className="mb-8">
              <label className="block text-xs font-black text-slate-500 dark:text-slate-400 mb-3 tracking-widest uppercase text-center md:text-left">
                🟢 2. TAKIM İSİMLERİNİ YAZIN:
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {teams.slice(0, teamCount).map((team, idx) => {
                  const preset = TEAM_PRESETS[idx];
                  return (
                    <div
                      key={team.id}
                      className={`flex flex-col p-4 rounded-2xl border-3 bg-slate-50/50 dark:bg-slate-900/30 ${preset.bgBorder} shadow-sm`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${preset.color} text-white flex items-center justify-center shadow-md`}>
                          {renderTeamIcon(team.icon, 'w-4 h-4')}
                        </div>
                        <span className={`text-xs font-black ${preset.textColor}`}>
                          {idx + 1}. Takım Preset: {preset.name}
                        </span>
                      </div>
                      <input
                        type="text"
                        value={team.name}
                        onChange={(e) => handleUpdateTeamName(idx, e.target.value)}
                        className="w-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none p-3 rounded-xl text-slate-800 dark:text-white font-display text-sm font-black tracking-wide transition-colors"
                        placeholder={preset.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Devam Butonu */}
            <div className="flex justify-center">
              <button
                onClick={() => setView('team_select')}
                className="btn-game-primary text-base px-10 py-3.5 rounded-2xl shadow-lg flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform"
              >
                Yarışmaları Listele ➔
              </button>
            </div>
          </motion.div>
        )}

        {/* D. TAKIM OYUN SEÇİMİ */}
        {view === 'team_select' && (
          <motion.div
            key="team_select"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="flex flex-col gap-6"
          >
            {/* Aktif Takımlar Hızlı Gösterge Barı */}
            <div className="bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-750 p-4 rounded-3xl shadow-sm flex flex-wrap items-center justify-center gap-4">
              <span className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                Yarışacak Takımlar:
              </span>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {teams.slice(0, teamCount).map((team, idx) => {
                  const preset = TEAM_PRESETS[idx];
                  return (
                    <div
                      key={team.id}
                      className="px-4 py-2 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center gap-2"
                    >
                      <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${preset.color} text-white flex items-center justify-center shadow-sm`}>
                        {renderTeamIcon(team.icon, 'w-3 h-3')}
                      </div>
                      <span className="text-xs font-black text-slate-755 dark:text-slate-250">
                        {team.name}
                      </span>
                    </div>
                  );
                })}
              </div>
              <button
                onClick={() => setView('team_config')}
                className="px-3 py-1.5 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 border border-slate-200 dark:border-slate-755 rounded-xl text-[10px] font-black uppercase tracking-wider text-slate-600 dark:text-slate-400 transition-colors cursor-pointer"
              >
                ⚙️ Düzenle
              </button>
            </div>

            {/* Takım Oyunları Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {TEAM_GAMES.map((game) => (
                <div
                  key={game.id}
                  className={`group text-left bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border-4 rounded-[2.2rem] p-6 shadow-md relative overflow-hidden flex flex-col justify-between transition-all duration-300 border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 hover:scale-[1.03] hover:shadow-xl ${
                    game.comingSoon ? 'opacity-65' : ''
                  }`}
                >
                  {/* Decorative floating shape */}
                  <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-xl group-hover:scale-130 transition-all duration-500"></div>

                  <div>
                    {/* Large Icon Container */}
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/30 flex items-center justify-center text-emerald-500 dark:text-emerald-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-inner [&>svg]:w-5.5 [&>svg]:h-5.5">
                      {game.icon}
                    </div>
                    <h4 className="font-display font-black text-sm sm:text-base mt-4 uppercase tracking-tight text-slate-800 dark:text-white leading-tight">
                      {game.title}
                    </h4>
                    <p className="text-[11px] text-slate-555 dark:text-slate-400 font-semibold mt-2.5 leading-relaxed">
                      {game.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-700/50 flex justify-between items-center z-10">
                    <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-450 border border-slate-200/40 dark:border-slate-700/40">
                      {teamCount} Takım
                    </span>
                    {!game.comingSoon ? (
                      <button
                        onClick={() => handleStartGame(game.id, game.title, true)}
                        className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-xl shadow-md hover:shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" /> Başlat
                      </button>
                    ) : (
                      <div className="text-[9px] font-black text-emerald-500 dark:text-emerald-400 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/20 px-3 py-1.5 rounded-lg border border-emerald-100 dark:border-emerald-900/40">
                        Çok Yakında
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* E. AKTİF OYUNU OYNAMA (WRAPPER - ÇERÇEVE) */}
        {view === 'playing_game' && activeGame && (
          <motion.div
            key="playing_game"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            id="game-fullscreen-container"
            className="w-full bg-[#fcf9f2] dark:bg-slate-900 border-4 border-slate-300 dark:border-slate-850 rounded-[2.5rem] p-6 shadow-2xl min-h-[560px] flex flex-col justify-between relative overflow-hidden"
          >
            {/* Dekoratif Çevrimdışı Süsleme Desenleri */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]" style={{
              backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
              backgroundSize: '16px 16px'
            }} />

            {/* Üst Kontrol & Bilgi Çubuğu */}
            <div className="flex justify-between items-center pb-4 border-b-2 border-slate-200 dark:border-slate-800 z-50">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleQuitGame}
                  className="px-3.5 py-1.5 bg-red-100 hover:bg-red-200 dark:bg-red-950/40 dark:hover:bg-red-900/60 border border-red-200 dark:border-red-850 text-red-650 dark:text-red-400 text-xs font-black uppercase tracking-wider rounded-xl transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Oyundan Çık
                </button>
                <h3 className="text-sm font-extrabold text-slate-750 dark:text-slate-250 uppercase bg-slate-100 dark:bg-slate-850 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-750 flex items-center gap-1">
                  ⚔️ {activeGame.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleGameFullscreen}
                  className="w-9 h-9 bg-slate-100 hover:bg-slate-200 dark:bg-slate-850 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-center text-slate-650 dark:text-slate-350 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
                  title="Tam Ekran Yap / Çık"
                >
                  {isGameFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* OYUNLARIN YÜKLENDİĞİ ALAN */}
            <div className="flex-1 py-4 flex flex-col items-center justify-center z-10 w-full">
              {activeGame.id === 'az_passaparola' && (
                <PassaparolaGame isDarkMode={isDarkMode} />
              )}
              {activeGame.id === 'mosque_hangman' && (
                <MosqueHangmanGame isDarkMode={isDarkMode} />
              )}
              
              {activeGame.id === 'memory_match' && (
                <MemoryMatchGame isDarkMode={isDarkMode} />
              )}
              
              {activeGame.id === 'millionaire_quiz' && (
                <MillionaireQuizGame isDarkMode={isDarkMode} />
              )}
              {activeGame.id === 'word_search' && (
                <WordSearchGame isDarkMode={isDarkMode} />
              )}
              
              {activeGame.id === 'chronology' && (
                <ChronologyGame isDarkMode={isDarkMode} />
              )}
              {activeGame.id === 'wheel_of_wisdom' && (
                <WheelOfWisdomGame isDarkMode={isDarkMode} />
              )}
              
              {activeGame.id === 'falling_words' && (
                <FallingWordsGame isDarkMode={isDarkMode} />
              )}
              
              
              {activeGame.id === 'maze_runner' && (
                <MazeRunnerGame isDarkMode={isDarkMode} />
              )}
              
              {activeGame.id === 'taboo_terms' && (
                <TabooTermsGame isDarkMode={isDarkMode} />
              )}
              {activeGame.id === 'pair_matching' && (
                <PairMatchingGame isDarkMode={isDarkMode} />
              )}
              
              
              {activeGame.id === 'jeopardy_conquest' && (
                <JeopardyConquestGame isDarkMode={isDarkMode} teams={teams} setTeams={setTeams} teamCount={teamCount} />
              )}
              {activeGame.id === 'tug_of_war' && (
                <TugOfWarGame isDarkMode={isDarkMode} teams={teams} setTeams={setTeams} teamCount={teamCount} />
              )}
              {activeGame.id === 'word_bomb' && (
                <WordBombGame isDarkMode={isDarkMode} teams={teams} setTeams={setTeams} teamCount={teamCount} />
              )}
              {activeGame.id === 'buzzer_duel' && (
                <BuzzerDuelGame isDarkMode={isDarkMode} teams={teams} setTeams={setTeams} teamCount={teamCount} />
              )}
              {activeGame.id === 'chest_guardian' && (
                <ChestGuardianGame isDarkMode={isDarkMode} teams={teams} setTeams={setTeams} teamCount={teamCount} />
              )}
              {activeGame.id === 'heaven_path' && (
                <HeavenPathGame isDarkMode={isDarkMode} teams={teams} setTeams={setTeams} teamCount={teamCount} />
              )}
              {!['az_passaparola', 'mosque_hangman', 'memory_match', 'millionaire_quiz', 'word_search', 'chronology', 'wheel_of_wisdom', 'falling_words', 'maze_runner', 'taboo_terms', 'pair_matching', 'jeopardy_conquest', 'tug_of_war', 'word_bomb', 'buzzer_duel', 'chest_guardian', 'heaven_path'].includes(activeGame.id) && (
                <div className="text-center flex flex-col items-center">
                  <div className="w-32 h-32 mb-4">
                    {titleAnimation && (
                      <Lottie animationData={titleAnimation} loop={true} autoplay={true} className="w-full h-full" />
                    )}
                  </div>
                  <h3 className="font-display font-black text-2xl text-slate-800 dark:text-white uppercase">
                    {activeGame.title}
                  </h3>
                  <p className="text-xs text-slate-555 mt-2 max-w-sm">
                    Bu oyun sonraki fazlarda tam işlevsel olarak kodlanacaktır. Anlayışınız için teşekkür ederiz!
                  </p>
                </div>
              )}
            </div>

            {/* ALT TAKIM SKOR PANELİ (Sadece takım oyunlarındaysa gösterilir) */}
            {activeGame.isTeam && (
              <div className="pt-4 border-t-2 border-slate-200 dark:border-slate-800 z-10 grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
                {teams.slice(0, teamCount).map((team, idx) => {
                  const preset = TEAM_PRESETS[idx];
                  return (
                    <div
                      key={team.id}
                      className={`p-3 rounded-2xl border-2 bg-white dark:bg-slate-850 shadow-sm flex items-center justify-between transition-all ${team.active
                          ? 'border-emerald-500 ring-3 ring-emerald-100 dark:ring-emerald-950/20'
                          : 'border-slate-200 dark:border-slate-750'
                        }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${preset.color} text-white flex items-center justify-center shadow-sm`}>
                          {renderTeamIcon(team.icon, 'w-3.5 h-3.5')}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black text-slate-755 dark:text-slate-250 truncate max-w-[80px]">
                            {team.name}
                          </span>
                          <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500">
                            {team.active ? 'Sıra Sende ➔' : 'Bekliyor'}
                          </span>
                        </div>
                      </div>

                      {/* Skor Kontrolcüleri */}
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => {
                            setTeams(prev => prev.map((t, i) => i === idx ? { ...t, score: Math.max(0, t.score - 10) } : t));
                          }}
                          className="w-5 h-5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-650 dark:text-slate-400 font-black rounded-md flex items-center justify-center text-[10px] cursor-pointer"
                        >
                          -
                        </button>
                        <span className="text-xs font-black text-slate-800 dark:text-white min-w-[30px] text-center">
                          {team.score}
                        </span>
                        <button
                          onClick={() => {
                            setTeams(prev => prev.map((t, i) => i === idx ? { ...t, score: t.score + 10 } : t));
                          }}
                          className="w-5 h-5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-650 dark:text-slate-400 font-black rounded-md flex items-center justify-center text-[10px] cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ==========================================
// 1. GAME 1: A'DAN Z'YE İSLAM ATLASI (PASSAPAROLA)
// ==========================================
// Ayrıştırıldı ve dışarıdan import ediliyor.

// ==========================================
// 2. GAME 2: CAMİ YAPMACA (ADAM ASMACA)
// ==========================================
interface MemoryCard {
  id: string;
  matchId: string;
  type: 'word' | 'clue';
  content: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const MemoryMatchGame: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const [gameStatus, setGameStatus] = useState<'intro' | 'playing' | 'won'>('intro');
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [score, setScore] = useState<number>(0);
  const [moves, setMoves] = useState<number>(0);

  // Oyunu Başlat
  const handleStart = () => {
    playSound('complete');
    
    // Zorluğa göre kelime sayısı (easy=5, medium=8, hard=10)
    const wordCount = difficulty === 'easy' ? 5 : difficulty === 'medium' ? 8 : 10;
    
    // HANGMAN_QUESTIONS_DB havuzundan rastgele benzersiz kelimeler seçelim
    const shuffledDB = shuffleArray(MEMORY_MATCH_QUESTIONS_DB);
    const list = shuffledDB.slice(0, wordCount);
    
    const generated: MemoryCard[] = [];
    list.forEach((item) => {
      generated.push({
        id: `word_${item.word}`,
        matchId: item.word,
        type: 'word',
        content: item.word,
        isFlipped: false,
        isMatched: false
      });
      generated.push({
        id: `clue_${item.word}`,
        matchId: item.word,
        type: 'clue',
        content: item.clue,
        isFlipped: false,
        isMatched: false
      });
    });

    // Fisher-Yates karıştırması
    const shuffled = [...generated];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    setCards(shuffled);
    setSelectedIndices([]);
    setScore(0);
    setMoves(0);
    setGameStatus('playing');
  };

  // Kart Seçme Tıklaması
  const handleCardClick = (index: number) => {
    if (gameStatus !== 'playing' || cards[index].isFlipped || cards[index].isMatched || selectedIndices.length >= 2) return;

    playSound('tick');
    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    const newSelected = [...selectedIndices, index];
    setSelectedIndices(newSelected);

    if (newSelected.length === 2) {
      setMoves(prev => prev + 1);
      const [firstIdx, secondIdx] = newSelected;
      const card1 = cards[firstIdx];
      const card2 = cards[secondIdx];

      if (card1.matchId === card2.matchId) {
        // Eşleşme Başarılı
        setTimeout(() => {
          playSound('success');
          const matched = cards.map((c, idx) =>
            idx === firstIdx || idx === secondIdx ? { ...c, isMatched: true } : c
          );
          setCards(matched);
          setSelectedIndices([]);
          setScore(prev => prev + 25);

          // Kazanma Kontrolü
          if (matched.every(c => c.isMatched)) {
            playSound('complete');
            setGameStatus('won');
          }
        }, 600);
      } else {
        // Mismatch - Geri Çevirme
        setTimeout(() => {
          playSound('fail');
          const reset = cards.map((c, idx) =>
            idx === firstIdx || idx === secondIdx ? { ...c, isFlipped: false } : c
          );
          setCards(reset);
          setSelectedIndices([]);
        }, 1500);
      }
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {gameStatus === 'intro' && (
        <div className="text-center flex flex-col items-center py-6 w-full max-w-xl">
          <Users className="w-20 h-20 text-indigo-500 mb-4 animate-bounce" />
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase">
            Eşleştirme Kartları (Hafıza Oyunu)
          </h3>
          <p className="text-xs text-slate-555 dark:text-slate-400 mt-2 mb-6 max-w-md leading-relaxed">
            Seçeceğiniz zorluk derecesine göre dini kelimeler ve anlamları ters çevrilmiş kartlar halinde listelenir. <br />
            Her kelimeyi kendi dini tanımıyla eşleştirmeye çalışın! <br />
            En az hamleyle tüm çiftleri tamamlayarak hafıza gücünüzü kanıtlayın.
          </p>

          {/* Difficulty Selection */}
          <div className="mb-6 w-full max-w-md">
            <label className="block text-[10px] font-black text-slate-450 dark:text-slate-400 mb-3 tracking-widest uppercase text-center">
              🎯 ZORLUK DERECESİ SEÇİN
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(['easy', 'medium', 'hard'] as const).map((level) => {
                const label = level === 'easy' ? 'Kolay' : level === 'medium' ? 'Orta' : 'Zor';
                const countText = level === 'easy' ? '10 Kart' : level === 'medium' ? '16 Kart' : '20 Kart';
                const active = difficulty === level;
                return (
                  <button
                    key={level}
                    onClick={() => setDifficulty(level)}
                    className={`flex flex-col items-center justify-center p-3 rounded-2xl border-3 transition-all cursor-pointer ${
                      active
                        ? 'bg-indigo-50 dark:bg-indigo-950/20 border-indigo-500 text-indigo-900 dark:text-indigo-400 shadow-md scale-[1.02]'
                        : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 text-slate-450 dark:text-slate-500 hover:border-slate-350 dark:hover:border-slate-650'
                    }`}
                  >
                    <span className="text-sm font-black tracking-tight">{label}</span>
                    <span className="text-[9px] font-bold opacity-80 mt-0.5">{countText}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={handleStart}
            className="mt-4 px-10 py-3.5 bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-lg hover:shadow-indigo-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yarışmayı Başlat! ➔
          </button>
        </div>
      )}

      {gameStatus === 'playing' && (
        <div className="w-full flex flex-col gap-5 items-center">
          {/* Skor & Hamle Barı */}
          <div className="w-full max-w-4xl flex justify-between items-center bg-white dark:bg-slate-800 border-2 border-slate-150 dark:border-slate-700 px-4 py-2.5 rounded-2xl shadow-sm text-xs font-black">
            <span className="text-slate-500 dark:text-slate-400">📊 Hamle Sayısı: {moves}</span>
            <span className="text-indigo-500 dark:text-indigo-400 uppercase tracking-wide">Zorluk: {difficulty === 'easy' ? 'Kolay' : difficulty === 'medium' ? 'Orta' : 'Zor'}</span>
            <span className="text-emerald-500">🏆 Toplam Puan: {score}</span>
          </div>

          {/* Kartlar Grid Alanı */}
          <div className={`w-full max-w-4xl grid gap-4 py-2 ${
            difficulty === 'medium' ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-2 md:grid-cols-5'
          }`}>
            {cards.map((card, idx) => {
              const showContent = card.isFlipped || card.isMatched;
              return (
                <button
                  key={card.id}
                  onClick={() => handleCardClick(idx)}
                  disabled={card.isMatched}
                  className={`min-h-[8rem] rounded-2xl border-3 flex flex-col items-center justify-center p-3.5 text-center transition-all duration-300 relative w-full ${
                    card.isMatched
                      ? 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500 text-emerald-700 dark:text-emerald-400 opacity-80 scale-95'
                      : showContent
                        ? 'bg-white dark:bg-slate-800 border-indigo-500 text-slate-800 dark:text-white scale-102 shadow-md'
                        : 'bg-gradient-to-br from-indigo-500 to-violet-650 border-indigo-400 text-white hover:scale-[1.03] active:scale-97 cursor-pointer shadow-lg'
                  }`}
                >
                  {showContent ? (
                    <div className="flex flex-col gap-2 justify-center items-center h-full">
                      <span className={`font-display font-black text-xs uppercase tracking-wide leading-tight ${
                        card.type === 'word' 
                          ? 'text-indigo-600 dark:text-indigo-400 underline decoration-2 decoration-indigo-400/50' 
                          : 'text-[10px] text-slate-600 dark:text-slate-350 leading-snug font-semibold'
                      }`}>
                        {card.content}
                      </span>
                      {card.isMatched && (
                        <span className="text-[8px] font-black text-emerald-600 dark:text-emerald-450 uppercase tracking-widest mt-1">
                          ✓ Eşleşti
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-1.5">
                      <Sparkles className="w-6 h-6 text-indigo-200 animate-pulse" />
                      <span className="text-[10px] font-black tracking-widest uppercase text-indigo-100">
                        HİKMET
                      </span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {gameStatus === 'won' && (
        <div className="text-center flex flex-col items-center py-8 w-full max-w-md bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-8 rounded-[2.5rem] shadow-xl">
          <Trophy className="w-16 h-16 text-yellow-500 animate-bounce mb-3" />
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
            Tebrikler, Kazandınız!
          </h3>
          <p className="text-xs text-slate-550 dark:text-slate-400 mt-2">
            Tüm dini terimleri ve anlamlarını başarıyla eşleştirerek hafıza testini tamamladınız.
          </p>

          <div className="w-full flex flex-col gap-2 my-5 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl">
            <div className="flex justify-between text-[10px] font-black text-slate-450 uppercase tracking-widest">
              <span>Toplam Hamle: {moves}</span>
              <span>Skor: {score} Puan</span>
            </div>
          </div>

          <button
            onClick={handleStart}
            className="w-full py-4 bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:shadow-indigo-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yeniden Oyna! ↩️
          </button>
        </div>
      )}
    </div>
  );
};
interface JeopardyCell {
  id: string;
  category: string;
  points: number;
  questioned: boolean;
  ownerIdx: number | null; // Eşleşen takımın indexi
}

interface JeopardyConquestGameProps {
  isDarkMode: boolean;
  teams: Team[];
  setTeams: React.Dispatch<React.SetStateAction<Team[]>>;
  teamCount: number;
}

const JeopardyConquestGame: React.FC<JeopardyConquestGameProps> = ({ isDarkMode, teams, setTeams, teamCount }) => {
  const [gameStatus, setGameStatus] = useState<'intro' | 'playing' | 'ended'>('intro');
  const [board, setBoard] = useState<JeopardyCell[]>([]);
  const [activeTeamIdx, setActiveTeamIdx] = useState<number>(0);
  const [selectedCellIdx, setSelectedCellIdx] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<UnifiedQuizQuestion | null>(null);
  const [showReveal, setShowReveal] = useState<boolean>(false);
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);

  const categories = ['İnanç & İbadet', 'Peygamberler & Siyer', 'Ahlak & Adap'];
  const pointTiers = [100, 200, 300];

  // Soruları sınıflandırma yardımcısı
  const getQuestionCategory = (q: UnifiedQuizQuestion): string => {
    const text = (q.question + " " + q.correct + " " + q.wisdom).toLowerCase();
    if (text.includes("melek") || text.includes("abdest") || text.includes("namaz") || text.includes("iman") || text.includes("oruc") || text.includes("oruç") || text.includes("dua") || text.includes("zekat") || text.includes("hac")) {
      return 'İnanç & İbadet';
    }
    if (text.includes("peygamber") || text.includes("siyer") || text.includes("hz.") || text.includes("hicret") || text.includes("savaş") || text.includes("mucize") || text.includes("mekke") || text.includes("medine") || text.includes("hicri")) {
      return 'Peygamberler & Siyer';
    }
    return 'Ahlak & Adap';
  };

  // Oyunu Başlat
  const handleStart = () => {
    playSound('complete');

    // Skorları sıfırla
    setTeams(prev => prev.map((t, idx) => ({ ...t, score: 0, active: idx === 0 })));

    // Board oluştur
    const newBoard: JeopardyCell[] = [];
    categories.forEach(cat => {
      pointTiers.forEach(pts => {
        newBoard.push({
          id: `${cat}_${pts}`,
          category: cat,
          points: pts,
          questioned: false,
          ownerIdx: null
        });
      });
    });

    setBoard(newBoard);
    setActiveTeamIdx(0);
    setSelectedCellIdx(null);
    setCurrentQuestion(null);
    setShowReveal(false);
    setSelectedOpt(null);
    setGameStatus('playing');
  };

  // Hücre Seçimi
  const handleCellClick = (boardIdx: number) => {
    const cell = board[boardIdx];
    if (gameStatus !== 'playing' || cell.questioned || selectedCellIdx !== null) return;

    playSound('tick');

    // Kategoriye uygun soru filtrele
    const quizQuestions = getCurriculumQuizQuestions();
    const filtered = quizQuestions.filter(q => getQuestionCategory(q) === cell.category);
    const pool = filtered.length > 0 ? filtered : quizQuestions;
    const randomQuestion = pool[Math.floor(Math.random() * pool.length)];

    setSelectedCellIdx(boardIdx);
    setCurrentQuestion(randomQuestion);
    setShowReveal(false);
    setSelectedOpt(null);
  };

  // Şık Seçimi ve Otomatik Değerlendirme
  const handleSelectOption = (opt: string) => {
    if (selectedOpt || showReveal || !currentQuestion) return;
    setSelectedOpt(opt);
    setShowReveal(true);

    const isCorrectAnswer = opt === currentQuestion.correct;
    if (isCorrectAnswer) {
      playSound('success');
    } else {
      playSound('fail');
    }
  };
  const handleEvaluate = (isCorrect: boolean) => {
    if (selectedCellIdx === null || !currentQuestion) return;

    const cell = board[selectedCellIdx];
    const newBoard = [...board];
    newBoard[selectedCellIdx].questioned = true;

    if (isCorrect) {
      playSound('success');
      newBoard[selectedCellIdx].ownerIdx = activeTeamIdx;

      // Skoru artır
      setTeams(prev => prev.map((t, idx) =>
        idx === activeTeamIdx ? { ...t, score: t.score + cell.points } : t
      ));
    } else {
      playSound('fail');
    }

    setBoard(newBoard);
    setSelectedCellIdx(null);
    setCurrentQuestion(null);
    setShowReveal(false);
    setSelectedOpt(null);

    // Sıradaki takıma geç
    const nextIdx = (activeTeamIdx + 1) % teamCount;
    setActiveTeamIdx(nextIdx);
    setTeams(prev => prev.map((t, idx) => ({ ...t, active: idx === nextIdx })));

    // Oyun bitti mi kontrol et
    if (newBoard.every(c => c.questioned)) {
      setTimeout(() => {
        playSound('complete');
        setGameStatus('ended');
      }, 800);
    }
  };

  // Kazanan takımı tespit et
  const getWinnerTeam = () => {
    const sorted = [...teams.slice(0, teamCount)].sort((a, b) => b.score - a.score);
    return sorted[0];
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {gameStatus === 'intro' && (
        <div className="text-center flex flex-col items-center py-6">
          <Landmark className="w-20 h-20 text-indigo-500 mb-4 animate-pulse" />
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase">
            Bilgi Fethi (Jeopardy)
          </h3>
          <p className="text-xs text-slate-550 dark:text-slate-400 mt-2 max-w-md leading-relaxed">
            Sınıf gruplarının karşılaştığı prestijli bir fetih tahtası! <br />
            Kategorilerden zorluk seviyesine göre kareleri seçin, soruları cevaplayın. <br />
            Doğru bilinen her kare takımınızın rengine boyanır ve hanenize puan kazandırır.
          </p>
          <button
            onClick={handleStart}
            className="mt-6 px-10 py-3.5 bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-lg hover:shadow-indigo-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yarışmayı Başlat! ➔
          </button>
        </div>
      )}

      {gameStatus === 'playing' && (
        <div className="w-full flex flex-col gap-6 items-center">

          {/* Aktif Takım Banner */}
          <div className={`px-8 py-3 bg-gradient-to-r ${TEAM_PRESETS[activeTeamIdx].color} text-white rounded-2xl shadow-md text-xs font-black uppercase tracking-wider animate-pulse`}>
            📢 Sıradaki Hamle: {teams[activeTeamIdx].name} ({TEAM_PRESETS[activeTeamIdx].name})
          </div>

          {/* Jeopardy Tahtası */}
          <div className="w-full max-w-4xl bg-white dark:bg-slate-855 border-3 border-slate-200 dark:border-slate-750 p-6 rounded-[2.5rem] shadow-lg">

            {/* Sütun Başlıkları (Kategoriler) */}
            <div className="grid grid-cols-3 gap-4 mb-4 text-center">
              {categories.map(cat => (
                <div key={cat} className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-[10px] font-black text-slate-650 dark:text-slate-350 uppercase tracking-wider shadow-sm">
                  {cat}
                </div>
              ))}
            </div>

            {/* Puan Grid */}
            <div className="grid grid-cols-3 gap-4">
              {categories.map(cat => {
                return pointTiers.map(pts => {
                  const cellIdx = board.findIndex(c => c.category === cat && c.points === pts);
                  if (cellIdx === -1) return null;
                  const cell = board[cellIdx];

                  let btnStyle = "bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-white border-slate-250 dark:border-slate-700 hover:scale-[1.03] active:scale-97 cursor-pointer shadow-md";
                  if (cell.questioned) {
                    if (cell.ownerIdx !== null) {
                      const ownerPreset = TEAM_PRESETS[cell.ownerIdx];
                      btnStyle = `bg-gradient-to-br ${ownerPreset.color} text-white border-white/20 opacity-80 cursor-default pointer-events-none shadow-inner`;
                    } else {
                      btnStyle = "bg-slate-200 dark:bg-slate-800 text-slate-450 dark:text-slate-600 border-slate-300 dark:border-slate-750 opacity-40 pointer-events-none";
                    }
                  }

                  return (
                    <button
                      key={cell.id}
                      onClick={() => handleCellClick(cellIdx)}
                      disabled={cell.questioned || selectedCellIdx !== null}
                      className={`h-28 rounded-2xl border-3 flex flex-col items-center justify-center font-display font-black text-xl transition-all relative overflow-hidden ${btnStyle}`}
                    >
                      {cell.questioned ? (
                        cell.ownerIdx !== null ? (
                          <div className="flex flex-col items-center gap-1">
                            <span className="text-xs uppercase tracking-widest font-black text-white/90">FETHEDİLDİ</span>
                            <span className="text-[10px] font-bold text-white/80">{teams[cell.ownerIdx].name}</span>
                          </div>
                        ) : (
                          <span className="text-xs font-black uppercase text-slate-400">PAS</span>
                        )
                      ) : (
                        <span>{cell.points}</span>
                      )}
                    </button>
                  );
                });
              })}
            </div>

          </div>

          {/* Soru Modalı */}
          {selectedCellIdx !== null && currentQuestion && (
            <div className="fixed inset-0 bg-slate-950/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
              <div className="bg-white dark:bg-slate-850 border-4 border-indigo-500 rounded-[2.5rem] max-w-2xl w-full p-8 shadow-2xl relative animate-scale-up">

                {/* Hücre Bilgisi */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-black uppercase tracking-widest bg-indigo-50 dark:bg-indigo-950/40 text-indigo-650 dark:text-indigo-300 px-3.5 py-1.5 rounded-full border border-indigo-100 dark:border-indigo-900/50">
                    📂 {board[selectedCellIdx].category} - {board[selectedCellIdx].points} PUAN
                  </span>
                  <span className={`text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full text-white bg-gradient-to-r ${TEAM_PRESETS[activeTeamIdx].color}`}>
                    🎯 CEVAP SIRASI: {teams[activeTeamIdx].name}
                  </span>
                </div>

                {/* Soru */}
                <div className="mb-6">
                  <p className="text-base sm:text-lg font-bold text-slate-855 dark:text-white leading-relaxed">
                    "{currentQuestion.question}"
                  </p>
                </div>

                {/* Şıklar */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {currentQuestion.options.map((opt, i) => {
                    const isCorrectOpt = opt === currentQuestion.correct;
                    const isSelected = opt === selectedOpt;
                    const letter = String.fromCharCode(65 + i); // A, B, C, D

                    let btnStyle = "bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-750 border-slate-200 dark:border-slate-700 text-slate-850 dark:text-white cursor-pointer";
                    if (showReveal) {
                      if (isCorrectOpt) {
                        btnStyle = "bg-emerald-500 border-emerald-600 text-white pointer-events-none";
                      } else if (isSelected) {
                        btnStyle = "bg-rose-500 border-rose-600 text-white pointer-events-none";
                      } else {
                        btnStyle = "opacity-40 pointer-events-none bg-slate-100 dark:bg-slate-900 text-slate-400";
                      }
                    }

                    return (
                      <button
                        key={opt}
                        onClick={() => handleSelectOption(opt)}
                        disabled={showReveal}
                        className={`p-4 text-left rounded-2xl border-2 text-xs font-bold leading-normal transition-all hover:scale-102 flex gap-3 items-center ${btnStyle}`}
                      >
                        <span className="w-6 h-6 rounded-lg bg-indigo-500 text-white font-black text-[10px] flex items-center justify-center shrink-0">
                          {letter}
                        </span>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Öğretmen Kontrolleri ve Devam Butonu */}
                <div className="flex flex-col gap-4 border-t-2 border-slate-150 dark:border-slate-800 pt-5">
                  {showReveal && selectedOpt && (
                    <button
                      onClick={() => handleEvaluate(selectedOpt === currentQuestion.correct)}
                      className="w-full py-4.5 bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer mb-2"
                    >
                      Cevabı Onayla ve Devam Et ➔
                    </button>
                  )}

                  <div className="flex justify-between items-center gap-3">
                    <button
                      onClick={() => { playSound('tick'); setShowReveal(!showReveal); }}
                      className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-250 dark:border-slate-700 rounded-xl text-xs font-black uppercase text-slate-650 dark:text-slate-350 transition-all cursor-pointer"
                    >
                      {showReveal ? 'Cevabı Gizle 👁️' : 'Doğru Cevabı Göster 💡'}
                    </button>

                    <div className="flex gap-3">
                      <button
                        onClick={() => handleEvaluate(false)}
                        className="px-6 py-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95 flex items-center gap-1"
                      >
                        ❌ YANLIŞ
                      </button>
                      <button
                        onClick={() => handleEvaluate(true)}
                        className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95 flex items-center gap-1"
                      >
                        ✔️ DOĞRU
                      </button>
                    </div>
                  </div>



                  {showReveal && (
                    <div className="p-4 bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-250 rounded-2xl text-[10px] font-semibold text-emerald-805 dark:text-emerald-400 leading-relaxed">
                      <strong>İlahi Hikmet (Bilgi):</strong> {currentQuestion.wisdom} <br />
                      <strong>Kaynak:</strong> {currentQuestion.source}
                    </div>
                  )}
                </div>

              </div>
            </div>
          )}

        </div>
      )}

      {gameStatus === 'ended' && (
        <div className="text-center flex flex-col items-center py-6 w-full max-w-md bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-8 rounded-[2.5rem] shadow-xl animate-scale-up">
          <Trophy className="w-16 h-16 text-yellow-500 animate-bounce mb-3" />
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
            Fetih Tamamlandı!
          </h3>
          <p className="text-xs text-slate-500 mt-2">
            Tahtadaki tüm bölgeler fethedildi. İşte kazanan:
          </p>

          <div className="w-full flex flex-col gap-3 my-6 p-4 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border-2 border-yellow-300 rounded-[2rem] items-center">
            <span className="text-[10px] font-black text-yellow-600 dark:text-yellow-450 uppercase tracking-widest">🏆 ŞAMPİYON TAKIM</span>
            <span className="text-2xl font-display font-black text-slate-855 dark:text-white mt-1">
              {getWinnerTeam().name}
            </span>
            <span className="text-xs font-black text-slate-500 mt-0.5">
              {getWinnerTeam().score} Puan
            </span>
          </div>

          <button
            onClick={handleStart}
            className="w-full py-4 bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:shadow-indigo-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yeniden Yarışın! ↩️
          </button>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 7. TEAM GAME 2: HALAT ÇEKME YARIŞMASI
// ==========================================
interface TugOfWarGameProps {
  isDarkMode: boolean;
  teams: Team[];
  setTeams: React.Dispatch<React.SetStateAction<Team[]>>;
  teamCount: number;
}

const TugOfWarGame: React.FC<TugOfWarGameProps> = ({ isDarkMode, teams, setTeams, teamCount }) => {
  const [gameStatus, setGameStatus] = useState<'intro' | 'playing' | 'ended'>('intro');
  const [ropePosition, setRopePosition] = useState<number>(0); // -3 (Takım A/Sol) ile +3 (Takım B/Sağ) arası
  const [activeTeamIdx, setActiveTeamIdx] = useState<number>(0); // 0 (Sol) veya 1 (Sağ)
  const [currentQuestion, setCurrentQuestion] = useState<UnifiedQuizQuestion | null>(null);
  const [showReveal, setShowReveal] = useState<boolean>(false);
  const [winnerTeamIdx, setWinnerTeamIdx] = useState<number | null>(null);
  const [usedQuestionIds, setUsedQuestionIds] = useState<string[]>([]);

  // Oyunu Başlat
  const handleStart = () => {
    playSound('complete');
    setUsedQuestionIds([]);

    // Skorları sıfırla ve ilk iki takımı ata
    setTeams(prev => prev.map((t, idx) => ({ ...t, score: 0, active: idx === 0 })));
    setRopePosition(0);
    setActiveTeamIdx(0);
    setWinnerTeamIdx(null);
    loadNextQuestion();
    setGameStatus('playing');
  };

  // Soru yükle
  const loadNextQuestion = () => {
    const list = getCurriculumQuizQuestions();
    const unusedList = filterUnusedQuestions(list);
    const filtered = unusedList.filter(q => !usedQuestionIds.includes(q.id));
    const pool = filtered.length > 0 ? filtered : unusedList;
    const finalPool = pool.length > 0 ? pool : list;
    const randomQuestion = finalPool[Math.floor(Math.random() * finalPool.length)];
    setCurrentQuestion(randomQuestion);
    setShowReveal(false);
    if (randomQuestion) {
      setUsedQuestionIds(prev => [...prev, randomQuestion.id]);
      markQuestionAsUsed(randomQuestion.id);
    }
  };

  // Cevap Değerlendirme
  const handleEvaluate = (isCorrect: boolean) => {
    if (!currentQuestion) return;

    let nextPos = ropePosition;

    if (isCorrect) {
      playSound('success');
      // Doğru cevap: halatı kendi tarafına çeker
      if (activeTeamIdx === 0) {
        nextPos -= 1; // sola çeker
      } else {
        nextPos += 1; // sağa çeker
      }
    } else {
      playSound('fail');
      // Yanlış cevap: halat aksi yöne kayar
      if (activeTeamIdx === 0) {
        nextPos += 1;
      } else {
        nextPos -= 1;
      }
    }

    // Limitler
    nextPos = Math.max(-3, Math.min(3, nextPos));
    setRopePosition(nextPos);

    // Kazanma Kontrolü
    if (nextPos === -3) {
      // Sol Takım Kazandı
      setWinnerTeamIdx(0);
      playSound('complete');
      setGameStatus('ended');
      return;
    } else if (nextPos === 3) {
      // Sağ Takım Kazandı
      setWinnerTeamIdx(1);
      playSound('complete');
      setGameStatus('ended');
      return;
    }

    // Sıradaki takıma geç
    const nextIdx = activeTeamIdx === 0 ? 1 : 0;
    setActiveTeamIdx(nextIdx);
    setTeams(prev => prev.map((t, idx) => ({ ...t, active: idx === nextIdx })));
    loadNextQuestion();
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {gameStatus === 'intro' && (
        <div className="text-center flex flex-col items-center py-6">
          <Flame className="w-20 h-20 text-orange-500 mb-4 animate-bounce" />
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase">
            Halat Çekme Yarışması
          </h3>
          <p className="text-xs text-slate-550 dark:text-slate-400 mt-2 max-w-md leading-relaxed">
            Sınıfın en büyük iki gücü karşı karşıya! <br />
            <strong>{teams[0].name}</strong> ve <strong>{teams[1].name}</strong> halatı kendi taraflarına çekmek için yarışacaklar. <br />
            Soruları doğru bilerek bayrağı 3 birim kendi tarafınıza çekip şampiyon olun!
          </p>
          <button
            onClick={handleStart}
            className="mt-6 px-10 py-3.5 bg-gradient-to-r from-orange-500 to-red-500 text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-lg hover:shadow-orange-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yarışmayı Başlat! ➔
          </button>
        </div>
      )}

      {gameStatus === 'playing' && currentQuestion && (
        <div className="w-full flex flex-col gap-6 items-center">

          {/* Halat Çekme Görseli */}
          <div className="w-full max-w-3xl bg-white dark:bg-slate-850 border-3 border-slate-200 dark:border-slate-750 p-6 rounded-[2.5rem] shadow-lg flex flex-col items-center gap-6">

            {/* Takım İsimleri */}
            <div className="w-full flex justify-between px-4 text-xs font-black uppercase tracking-wider">
              <span className={`text-left text-amber-500 ${activeTeamIdx === 0 ? 'scale-110 animate-pulse text-sm' : 'opacity-60'}`}>
                ◀ {teams[0].name}
              </span>
              <span className={`text-right text-emerald-500 ${activeTeamIdx === 1 ? 'scale-110 animate-pulse text-sm' : 'opacity-60'}`}>
                {teams[1].name} ▶
              </span>
            </div>

            {/* Halat SVG / Bar */}
            <div className="w-full h-16 bg-slate-100 dark:bg-slate-900 border-2 border-slate-250 dark:border-slate-800 rounded-3xl relative flex items-center px-8">
              {/* Halat Çizgisi */}
              <div className="absolute left-6 right-6 h-2.5 bg-amber-700/60 rounded-full border border-amber-800 shadow-inner"></div>

              {/* Bölmeler/Slots */}
              <div className="w-full flex justify-between relative z-10">
                {[-3, -2, -1, 0, 1, 2, 3].map((pos) => {
                  const isCurrent = ropePosition === pos;
                  return (
                    <div
                      key={pos}
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-black transition-all ${isCurrent
                          ? 'bg-rose-500 text-white scale-125 ring-4 ring-rose-300 dark:ring-rose-800 animate-bounce'
                          : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                        }`}
                    >
                      {pos === 0 ? '🚩' : isCurrent ? '🔴' : '•'}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Halat Durum Açıklaması */}
            <span className="text-[10px] font-black text-slate-450 uppercase tracking-widest">
              {ropePosition === 0 ? 'Halat ortada duruyor' : ropePosition < 0 ? `Halat ${Math.abs(ropePosition)} birim sola (sarıya) yakın!` : `Halat ${ropePosition} birim sağa (yeşile) yakın!`}
            </span>

          </div>

          {/* Soru Paneli */}
          <div className="w-full max-w-2xl bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-8 rounded-[2.5rem] shadow-lg flex flex-col gap-6">

            {/* Başlık / Sıra Bilgisi */}
            <div className="flex justify-between items-center">
              <span className={`text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full text-white bg-gradient-to-r ${TEAM_PRESETS[activeTeamIdx].color}`}>
                🎯 CEVAP SIRASI: {teams[activeTeamIdx].name}
              </span>
            </div>

            {/* Soru Metni */}
            <div>
              <p className="text-base sm:text-lg font-bold text-slate-850 dark:text-white leading-relaxed">
                "{currentQuestion.question}"
              </p>
            </div>

            {/* Şıklar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentQuestion.options.map((opt, i) => {
                const isCorrectOpt = opt === currentQuestion.correct;
                const letter = String.fromCharCode(65 + i);

                return (
                  <button
                    key={opt}
                    onClick={() => playSound('tick')}
                    className={`p-4 text-left rounded-2xl border-2 text-xs font-bold leading-normal transition-all hover:scale-102 flex gap-3 items-center ${showReveal
                        ? isCorrectOpt
                          ? 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500 text-emerald-700 dark:text-emerald-450 ring-2 ring-emerald-300'
                          : 'bg-slate-55 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 opacity-60'
                        : 'bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-750 border-slate-200 dark:border-slate-700 text-slate-850 dark:text-white cursor-pointer'
                      }`}
                  >
                    <span className="w-6 h-6 rounded-lg bg-indigo-500 text-white font-black text-[10px] flex items-center justify-center shrink-0">
                      {letter}
                    </span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* Değerlendirme Butonları */}
            <div className="flex flex-col gap-4 border-t-2 border-slate-150 dark:border-slate-800 pt-5">
              <div className="flex justify-between items-center gap-3">
                <button
                  onClick={() => setShowReveal(!showReveal)}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-250 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-black uppercase text-slate-650 dark:text-slate-350 transition-all cursor-pointer"
                >
                  {showReveal ? 'Cevabı Gizle 👁️' : 'Doğru Cevabı Göster 💡'}
                </button>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleEvaluate(false)}
                    className="px-6 py-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95 flex items-center gap-1"
                  >
                    ❌ YANLIŞ
                  </button>
                  <button
                    onClick={() => handleEvaluate(true)}
                    className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95 flex items-center gap-1"
                  >
                    ✔️ DOĞRU
                  </button>
                </div>
              </div>

              {showReveal && (
                <div className="p-4 bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-250 rounded-2xl text-[10px] font-semibold text-emerald-805 dark:text-emerald-400 leading-relaxed">
                  <strong>İlahi Hikmet (Bilgi):</strong> {currentQuestion.wisdom} <br />
                  <strong>Kaynak:</strong> {currentQuestion.source}
                </div>
              )}
            </div>

          </div>

        </div>
      )}

      {gameStatus === 'ended' && winnerTeamIdx !== null && (
        <div className="text-center flex flex-col items-center py-6 w-full max-w-md bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-8 rounded-[2.5rem] shadow-xl animate-scale-up">
          <Trophy className="w-16 h-16 text-yellow-500 animate-bounce mb-3" />
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
            Halat Çekildi!
          </h3>
          <p className="text-xs text-slate-500 mt-2">
            Mücadele tamamlandı ve halat tamamen bir tarafa çekildi:
          </p>

          <div className="w-full flex flex-col gap-3 my-6 p-4 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border-2 border-yellow-300 rounded-[2rem] items-center">
            <span className="text-[10px] font-black text-yellow-600 dark:text-yellow-450 uppercase tracking-widest">🏆 ŞAMPİYON TAKIM</span>
            <span className="text-2xl font-display font-black text-slate-855 dark:text-white mt-1">
              {teams[winnerTeamIdx].name}
            </span>
            <span className="text-xs font-semibold text-slate-550 dark:text-slate-400 mt-1">
              Halatı 3 birim kendi tarafına çekerek maçı kazandı!
            </span>
          </div>

          <button
            onClick={handleStart}
            className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:shadow-orange-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yeniden Çekişin! ↩️
          </button>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 8. INDIVIDUAL GAME 6: KİM MİLYONER OLMAK İSTER?
// ==========================================
const MillionaireQuizGame: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const [gameStatus, setGameStatus] = useState<'intro' | 'playing' | 'won' | 'lost'>('intro');
  const [questions, setQuestions] = useState<UnifiedQuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [jokers, setJokers] = useState({ half: true, audience: true, phone: true });
  const [audienceText, setAudienceText] = useState<string | null>(null);
  const [phoneText, setPhoneText] = useState<string | null>(null);
  const [eliminatedOpts, setEliminatedOpts] = useState<string[]>([]);
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [showAnswerResult, setShowAnswerResult] = useState<boolean>(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false);

  const prizeLadder = [
    '500 TL', '1.000 TL', '2.000 TL', '3.000 TL', '5.000 TL (Baraj)',
    '7.500 TL', '15.000 TL', '30.000 TL', '60.000 TL', '125.000 TL (Baraj)',
    '250.000 TL', '1.000.000 TL (BÜYÜK ÖDÜL)'
  ];

  // Oyunu Başlat
  const handleStart = () => {
    playSound('complete');
    const pool = getCurriculumQuizQuestions();
    const unusedPool = filterUnusedQuestions(pool);
    const finalPool = unusedPool.length >= 12 ? unusedPool : pool;

    // Rastgele 12 soru karıştırıp seçelim
    const shuffled = [...finalPool];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const selected = shuffled.slice(0, 12);
    setQuestions(selected);
    selected.forEach(q => markQuestionAsUsed(q.id));

    setCurrentIdx(0);
    setJokers({ half: true, audience: true, phone: true });
    setAudienceText(null);
    setPhoneText(null);
    setEliminatedOpts([]);
    setSelectedOpt(null);
    setShowAnswerResult(false);
    setGameStatus('playing');
  };

  const currentQuestion = questions[currentIdx];

  // Yarı Yarıya (50:50) Jokeri
  const handleHalfJoker = () => {
    if (!jokers.half || !currentQuestion || showAnswerResult) return;
    playSound('tick');
    setJokers(prev => ({ ...prev, half: false }));

    // Yanlış şıkları topla
    const incorrectOpts = currentQuestion.options.filter(o => o !== currentQuestion.correct);
    // İki tanesini rastgele ele
    const shuffledIncorrect = shuffleArray(incorrectOpts);
    setEliminatedOpts([shuffledIncorrect[0], shuffledIncorrect[1]]);
  };

  // Seyirci Jokeri
  const handleAudienceJoker = () => {
    if (!jokers.audience || !currentQuestion || showAnswerResult) return;
    playSound('tick');
    setJokers(prev => ({ ...prev, audience: false }));

    // Şıkların oranlarını ata (Doğru şıkka yüksek oran verelim)
    const counts = currentQuestion.options.map(opt => {
      const isCorrect = opt === currentQuestion.correct;
      return { opt, weight: isCorrect ? 60 + Math.floor(Math.random() * 20) : Math.floor(Math.random() * 15) };
    });

    const sum = counts.reduce((acc, c) => acc + c.weight, 0);
    const textLines = counts.map(c => {
      const pct = Math.round((c.weight / sum) * 100);
      return `• ${c.opt.slice(0, 20)}...: %${pct}`;
    });

    setAudienceText(`👥 SEYİRCİ YORUMLARI:\n${textLines.join('\n')}`);
  };

  // Telefon Jokeri
  const handlePhoneJoker = () => {
    if (!jokers.phone || !currentQuestion || showAnswerResult) return;
    playSound('tick');
    setJokers(prev => ({ ...prev, phone: false }));

    // Bilge hoca tahmini
    const opinion = `📞 Bilge Hocamız diyor ki: "Bence bu sorunun cevabı büyük ihtimalle '${currentQuestion.correct}' şıkkıdır."`;
    setPhoneText(opinion);
  };

  // Şık Seçimi
  const handleSelectOption = (opt: string) => {
    if (showAnswerResult || !currentQuestion) return;
    playSound('tick');
    setSelectedOpt(opt);
    setShowAnswerResult(true);

    const isCorrect = opt === currentQuestion.correct;
    setIsAnswerCorrect(isCorrect);

    if (isCorrect) {
      playSound('success');
    } else {
      playSound('fail');
    }
  };

  // Sonraki Soruya Geçiş
  const handleNext = () => {
    if (!isAnswerCorrect) {
      // Yanlış cevapta kaybet
      setGameStatus('lost');
      return;
    }

    if (currentIdx + 1 < questions.length) {
      playSound('complete');
      setCurrentIdx(prev => prev + 1);
      setSelectedOpt(null);
      setShowAnswerResult(false);
      setAudienceText(null);
      setPhoneText(null);
      setEliminatedOpts([]);
    } else {
      // 12 soruyu da doğru bildi: Milyoner!
      playSound('complete');
      setGameStatus('won');
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {gameStatus === 'intro' && (
        <div className="text-center flex flex-col items-center py-6">
          <Trophy className="w-20 h-20 text-yellow-500 mb-4 animate-bounce" />
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase">
            Kim Milyoner Olmak İster?
          </h3>
          <p className="text-xs text-slate-550 dark:text-slate-400 mt-2 max-w-md leading-relaxed">
            12 basamaklı zorlu bilgi merdivenini tırmanıp 1.000.000 TL değerindeki büyük ödüle ulaşmaya çalışın! <br />
            Sıkıştığınız yerde Yarı Yarıya, Seyirci ve Telefon jokerlerinizi kullanabilirsiniz.
          </p>
          <button
            onClick={handleStart}
            className="mt-6 px-10 py-3.5 bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-lg hover:shadow-yellow-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yarışmayı Başlat! ➔
          </button>
        </div>
      )}

      {gameStatus === 'playing' && currentQuestion && (
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

          {/* Sol Kolon: Joker Kartları ve Ödül Basamakları */}
          <div className="lg:col-span-4 flex flex-col gap-4 bg-slate-50 dark:bg-slate-900/60 p-5 rounded-[2rem] border-2 border-slate-200 dark:border-slate-800">

            {/* Jokerler */}
            <div className="flex gap-2 justify-center">
              <button
                onClick={handleHalfJoker}
                disabled={!jokers.half || showAnswerResult}
                className="flex-1 py-2 bg-indigo-600 disabled:bg-slate-350 text-white text-[10px] font-black uppercase rounded-xl transition-all cursor-pointer hover:scale-105 active:scale-95 shadow"
              >
                %50
              </button>
              <button
                onClick={handleAudienceJoker}
                disabled={!jokers.audience || showAnswerResult}
                className="flex-1 py-2 bg-indigo-600 disabled:bg-slate-350 text-white text-[10px] font-black uppercase rounded-xl transition-all cursor-pointer hover:scale-105 active:scale-95 shadow"
              >
                👥 Seyirci
              </button>
              <button
                onClick={handlePhoneJoker}
                disabled={!jokers.phone || showAnswerResult}
                className="flex-1 py-2 bg-indigo-600 disabled:bg-slate-350 text-white text-[10px] font-black uppercase rounded-xl transition-all cursor-pointer hover:scale-105 active:scale-95 shadow"
              >
                📞 Telefon
              </button>
            </div>

            {/* Ödül Basamakları Listesi */}
            <div className="flex flex-col gap-1 mt-2">
              {prizeLadder.map((prize, idx) => {
                const isCurrent = idx === currentIdx;
                const isPassed = idx < currentIdx;

                return (
                  <div
                    key={prize}
                    className={`flex justify-between items-center px-3 py-1 text-[9px] font-bold rounded-lg ${isCurrent
                        ? 'bg-yellow-500 text-white font-black scale-102 shadow animate-pulse'
                        : isPassed
                          ? 'text-emerald-600 dark:text-emerald-450 line-through'
                          : 'text-slate-500 dark:text-slate-450'
                      }`}
                  >
                    <span>Soru {idx + 1}</span>
                    <span>{prize}</span>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Sağ Kolon: Soru Kartı ve Şıklar */}
          <div className="lg:col-span-8 flex flex-col gap-5 items-center">

            {/* Soru */}
            <div className="w-full bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-6 rounded-[2.5rem] shadow-md text-center min-h-[100px] flex items-center justify-center">
              <p className="text-base sm:text-lg font-bold text-slate-850 dark:text-white leading-relaxed">
                "{currentQuestion.question}"
              </p>
            </div>

            {/* Joker Sonuç Pencereleri */}
            {(audienceText || phoneText) && (
              <div className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl flex flex-col gap-2 text-[10px] font-semibold text-slate-650 dark:text-slate-350 leading-relaxed shadow-inner">
                {audienceText && <pre className="font-sans whitespace-pre-line">{audienceText}</pre>}
                {phoneText && <p>{phoneText}</p>}
              </div>
            )}

            {/* Şıklar Grid */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentQuestion.options.map((opt, i) => {
                const isEliminated = eliminatedOpts.includes(opt);
                if (isEliminated) return <div key={opt} className="h-14 bg-transparent border border-dashed border-slate-100 dark:border-slate-900 rounded-2xl opacity-0" />;

                const isSelected = opt === selectedOpt;
                const isCorrect = opt === currentQuestion.correct;
                const letter = String.fromCharCode(65 + i);

                let btnStyle = "bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-750 border-slate-250 dark:border-slate-700 text-slate-850 dark:text-white hover:scale-102 active:scale-98 cursor-pointer shadow-sm";
                if (showAnswerResult) {
                  if (isCorrect) {
                    btnStyle = "bg-emerald-500 border-emerald-600 text-white pointer-events-none scale-102 shadow-emerald-500/20";
                  } else if (isSelected) {
                    btnStyle = "bg-rose-500 border-rose-600 text-white pointer-events-none";
                  } else {
                    btnStyle = "opacity-40 pointer-events-none bg-slate-100 dark:bg-slate-900 text-slate-400";
                  }
                }

                return (
                  <button
                    key={opt}
                    onClick={() => handleSelectOption(opt)}
                    disabled={showAnswerResult}
                    className={`p-4 text-left rounded-2xl border-2 text-xs font-bold leading-normal transition-all flex gap-3 items-center ${btnStyle}`}
                  >
                    <span className="w-6 h-6 rounded-lg bg-indigo-500 text-white font-black text-[10px] flex items-center justify-center shrink-0">
                      {letter}
                    </span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* Devam Butonu */}
            {showAnswerResult && (
              <button
                onClick={handleNext}
                className="mt-2 px-10 py-3.5 bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                {isAnswerCorrect
                  ? currentIdx + 1 === questions.length
                    ? 'Büyük Ödülü Al! 🏆'
                    : 'Sonraki Basamağa Geç ➔'
                  : 'Ödülü Al ve Ayrıl ❌'}
              </button>
            )}

          </div>

        </div>
      )}

      {(gameStatus === 'won' || gameStatus === 'lost') && (
        <div className="text-center flex flex-col items-center py-6 w-full max-w-md bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-8 rounded-[2.5rem] shadow-xl animate-scale-up">
          {gameStatus === 'won' ? (
            <>
              <Trophy className="w-16 h-16 text-yellow-500 animate-bounce mb-3" />
              <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
                MİLYONER OLDUNUZ!
              </h3>
              <p className="text-xs text-slate-500 mt-2">
                Tüm soruları doğru bilerek 1.000.000 TL değerindeki büyük ödülü kazandınız!
              </p>
            </>
          ) : (
            <>
              <XCircle className="w-16 h-16 text-rose-500 animate-pulse mb-3" />
              <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
                Yarışma Bitti!
              </h3>
              <p className="text-xs text-slate-500 mt-2">
                Hatalı şık seçtiğiniz için elendiniz. İşte kazandığınız ödül:
              </p>
            </>
          )}

          <div className="w-full flex flex-col gap-2 my-5 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl">
            <span className="text-[10px] font-black text-slate-450 uppercase tracking-widest">Kazanılan Tutar</span>
            <span className="text-2xl font-display font-black text-emerald-600 dark:text-emerald-450 tracking-wide mt-1">
              {gameStatus === 'won' ? '1.000.000 TL' : currentIdx === 0 ? '0 TL' : prizeLadder[currentIdx - 1]}
            </span>
          </div>

          <button
            onClick={handleStart}
            className="w-full py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:shadow-yellow-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yeniden Yarış! ↩️
          </button>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 9. INDIVIDUAL GAME 7: HAZİNE AVCISI (KELİME AVI)
// ==========================================
interface GridCell {
  letter: string;
  row: number;
  col: number;
  highlighted: boolean; // Geçici seçim
  permanentlyHighlighted: boolean; // Bulunan kelimeler
  ownerColor?: string;
}

const WordSearchGame: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const [gameStatus, setGameStatus] = useState<'intro' | 'playing' | 'won'>('intro');
  const [grid, setGrid] = useState<GridCell[][]>([]);
  const [hiddenWords, setHiddenWords] = useState<string[]>([]);
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [startCell, setStartCell] = useState<{ r: number; c: number } | null>(null);
  const [selectedCells, setSelectedCells] = useState<{ r: number; c: number }[]>([]);

  const gridSize = 8;

  // Oyunu Başlat
  const handleStart = () => {
    playSound('complete');

    // Rastgele 3 kelime seçelim (Uzunluğu 3-7 arası olan)
    const list = getRandomVocabularyWords(30);
    const words = list
      .map(item => toTurkishUpperCase(item.word))
      .filter(w => w.length >= 3 && w.length <= 7)
      .slice(0, 3);

    setHiddenWords(words);
    setFoundWords([]);
    setStartCell(null);
    setSelectedCells([]);

    // Boş Grid Üret
    const tempGrid: GridCell[][] = Array.from({ length: gridSize }, (_, r) =>
      Array.from({ length: gridSize }, (_, c) => ({
        letter: '',
        row: r,
        col: c,
        highlighted: false,
        permanentlyHighlighted: false
      }))
    );

    // Kelimeleri Grid'e yerleştir (Basitçe yatay veya dikey)
    words.forEach((word) => {
      let placed = false;
      let limit = 0;

      while (!placed && limit < 100) {
        limit++;
        const isHorizontal = Math.random() > 0.5;
        const row = Math.floor(Math.random() * gridSize);
        const col = Math.floor(Math.random() * gridSize);

        if (isHorizontal) {
          if (col + word.length <= gridSize) {
            // Çakışma kontrolü
            let overlap = false;
            for (let i = 0; i < word.length; i++) {
              const current = tempGrid[row][col + i].letter;
              if (current !== '' && current !== word[i]) overlap = true;
            }
            if (!overlap) {
              for (let i = 0; i < word.length; i++) {
                tempGrid[row][col + i].letter = word[i];
              }
              placed = true;
            }
          }
        } else {
          if (row + word.length <= gridSize) {
            let overlap = false;
            for (let i = 0; i < word.length; i++) {
              const current = tempGrid[row + i][col].letter;
              if (current !== '' && current !== word[i]) overlap = true;
            }
            if (!overlap) {
              for (let i = 0; i < word.length; i++) {
                tempGrid[row + i][col].letter = word[i];
              }
              placed = true;
            }
          }
        }
      }
    });

    // Boş alanları rastgele harflerle doldur
    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        if (tempGrid[r][c].letter === '') {
          const randChar = TURKISH_LETTERS[Math.floor(Math.random() * TURKISH_LETTERS.length)];
          tempGrid[r][c].letter = randChar;
        }
      }
    }

    setGrid(tempGrid);
    setGameStatus('playing');
  };

  // Hücreye Tıklama
  const handleCellClick = (r: number, c: number) => {
    if (gameStatus !== 'playing') return;

    playSound('tick');

    if (!startCell) {
      // İlk tıklama: seçimi başlat
      setStartCell({ r, c });
      setSelectedCells([{ r, c }]);
      setGrid(prev => prev.map((row, ri) => row.map((cell, ci) =>
        ri === r && ci === c ? { ...cell, highlighted: true } : cell
      )));
    } else {
      // İkinci tıklama: seçimi sonlandır ve kontrol et
      const cells = getLineCells(startCell.r, startCell.c, r, c);
      if (cells.length > 0) {
        // Çizgideki kelimeyi bul
        const word = cells.map(cell => grid[cell.r][cell.c].letter).join('');
        const revWord = [...cells].reverse().map(cell => grid[cell.r][cell.c].letter).join('');

        const isMatch = hiddenWords.includes(word) && !foundWords.includes(word);
        const isRevMatch = hiddenWords.includes(revWord) && !foundWords.includes(revWord);

        if (isMatch || isRevMatch) {
          playSound('success');
          const matchedWord = isMatch ? word : revWord;
          const updatedFound = [...foundWords, matchedWord];
          setFoundWords(updatedFound);

          // Kalıcı renklendir
          setGrid(prev => prev.map((row, ri) => row.map((cell, ci) => {
            const isInLine = cells.some(item => item.r === ri && item.c === ci);
            return isInLine ? { ...cell, permanentlyHighlighted: true, highlighted: false } : { ...cell, highlighted: false };
          })));

          // Kazanma Kontrolü
          if (updatedFound.length === hiddenWords.length) {
            setTimeout(() => {
              playSound('complete');
              setGameStatus('won');
            }, 800);
          }
        } else {
          playSound('fail');
          // Seçimi temizle
          setGrid(prev => prev.map(row => row.map(cell => ({ ...cell, highlighted: false }))));
        }
      } else {
        // Geçersiz çizgi, seçimi sıfırla
        setGrid(prev => prev.map(row => row.map(cell => ({ ...cell, highlighted: false }))));
      }
      setStartCell(null);
      setSelectedCells([]);
    }
  };

  // İki nokta arasındaki yatay veya dikey hücreleri toplar
  const getLineCells = (r1: number, c1: number, r2: number, c2: number) => {
    const list: { r: number; c: number }[] = [];
    if (r1 === r2) {
      // Yatay çizgi
      const start = Math.min(c1, c2);
      const end = Math.max(c1, c2);
      for (let c = start; c <= end; c++) list.push({ r: r1, c });
    } else if (c1 === c2) {
      // Dikey çizgi
      const start = Math.min(r1, r2);
      const end = Math.max(r1, r2);
      for (let r = start; r <= end; r++) list.push({ r, c: c1 });
    }
    return list;
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {gameStatus === 'intro' && (
        <div className="text-center flex flex-col items-center py-6">
          <Compass className="w-20 h-20 text-rose-500 mb-4 animate-spin-slow" />
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase">
            Hazine Avcısı (Kelime Avı)
          </h3>
          <p className="text-xs text-slate-555 dark:text-slate-400 mt-2 max-w-md leading-relaxed">
            Harf ızgarasının içerisine gizlenmiş dini kavramları bulun! <br />
            Bir kelimeyi seçmek için **başlangıç ve bitiş harflerine** sırayla dokunmanız yeterlidir. <br />
            Tüm gizli kelimeleri bularak hazineyi ortaya çıkarın!
          </p>
          <button
            onClick={handleStart}
            className="mt-6 px-10 py-3.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-lg hover:shadow-rose-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yarışmayı Başlat! ➔
          </button>
        </div>
      )}

      {gameStatus === 'playing' && (
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

          {/* Sol Kolon: Bulunması Gereken Kelimeler Listesi */}
          <div className="lg:col-span-4 flex flex-col gap-4 bg-slate-50 dark:bg-slate-900/60 p-6 rounded-[2rem] border-2 border-slate-200 dark:border-slate-800 text-center">
            <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
              GİZLİ HAZİNELER
            </span>
            <div className="flex flex-col gap-3 mt-2">
              {hiddenWords.map(word => {
                const found = foundWords.includes(word);
                return (
                  <div
                    key={word}
                    className={`p-3.5 rounded-2xl border-2 font-display font-black text-sm transition-all text-center uppercase tracking-widest ${found
                        ? 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-400 text-emerald-650 dark:text-emerald-450 line-through'
                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white shadow-sm'
                      }`}
                  >
                    {word} {found && '✓'}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sağ Kolon: Harf Izgarası */}
          <div className="lg:col-span-8 flex flex-col items-center">
            <div className="bg-white dark:bg-slate-850 border-3 border-slate-250 dark:border-slate-700 p-5 rounded-[2.5rem] shadow-lg">
              <div className="grid grid-cols-8 gap-2">
                {grid.map((row, ri) =>
                  row.map((cell, ci) => {
                    let cellStyle = "bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white cursor-pointer shadow-sm";
                    if (cell.permanentlyHighlighted) {
                      cellStyle = "bg-emerald-500 border-emerald-600 text-white pointer-events-none scale-95 shadow-inner shadow-emerald-700/20";
                    } else if (cell.highlighted) {
                      cellStyle = "bg-rose-500 border-rose-600 text-white animate-pulse";
                    }

                    return (
                      <button
                        key={`${ri}_${ci}`}
                        onClick={() => handleCellClick(ri, ci)}
                        className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl border-2 font-display font-black text-xs sm:text-sm transition-all active:scale-90 flex items-center justify-center ${cellStyle}`}
                      >
                        {cell.letter}
                      </button>
                    );
                  })
                )}
              </div>
            </div>

            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-4">
              Tıklanan Harf: {startCell ? `Başlangıç (${startCell.r + 1}, ${startCell.c + 1})` : 'Seçim yok'}
            </span>
          </div>

        </div>
      )}

      {gameStatus === 'won' && (
        <div className="text-center flex flex-col items-center py-6 w-full max-w-md bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-8 rounded-[2.5rem] shadow-xl animate-scale-up">
          <Trophy className="w-16 h-16 text-yellow-500 animate-bounce mb-3" />
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
            Tebrikler! Hazinedar
          </h3>
          <p className="text-xs text-slate-500 mt-2">
            Harf tablosunda gizlenen tüm hazineleri başarıyla buldun!
          </p>

          <button
            onClick={handleStart}
            className="mt-6 w-full py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:shadow-rose-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yeniden Keşfet! ↩️
          </button>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 10. TEAM GAME 3: SAATLİ BOMBA (KELİME BOMBASI)
// ==========================================
interface WordBombGameProps {
  isDarkMode: boolean;
  teams: Team[];
  setTeams: React.Dispatch<React.SetStateAction<Team[]>>;
  teamCount: number;
}

const WordBombGame: React.FC<WordBombGameProps> = ({ isDarkMode, teams, setTeams, teamCount }) => {
  const [gameStatus, setGameStatus] = useState<'intro' | 'playing' | 'ended'>('intro');
  const [activeTeamIdx, setActiveTeamIdx] = useState<number>(0);
  const [timer, setTimer] = useState<number>(20);
  const [categoryText, setCategoryText] = useState<string>('');
  const [eliminatedTeams, setEliminatedTeams] = useState<boolean[]>([]);
  const [winnerTeamIdx, setWinnerTeamIdx] = useState<number | null>(null);

  const categories = [
    'Peygamber Efendimiz’in (s.a.v.) isimleri veya sıfatları',
    'Dört büyük meleğin isimleri veya diğer melekler',
    'Namaz kılarken yaptığımız hareketler (Rükû, Secde vb.)',
    'Abdestin farzları veya sünnetleri',
    'Dini ve ahlaki güzel davranışlar (Dürüstlük, Yardımseverlik vb.)',
    'Kur’an-ı Kerim’de geçen peygamber isimleri',
    'İslam’ın şartları veya İmanın esasları',
    'Sure isimleri (Fatiha, Bakara, İhlas vb.)',
    'Müslümanların kutsal mekanları (Kabe, Mescid-i Aksa vb.)'
  ];

  // Geri Sayım Efekti
  useEffect(() => {
    if (gameStatus !== 'playing') return;

    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          handleExplode();
          return 0;
        }

        // Son 5 saniyede hızlı tık sesi, normalde yavaş tık sesi
        if (prev <= 6) {
          playSound('tick');
        } else if (prev % 2 === 0) {
          playSound('tick');
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [gameStatus, activeTeamIdx]);

  // Oyunu Başlat
  const handleStart = () => {
    playSound('complete');

    // Tüm takımları aktif yap, elenenleri temizle
    const elim = Array(teamCount).fill(false);
    setEliminatedTeams(elim);

    // Skorları sıfırla
    setTeams(prev => prev.map((t, idx) => ({ ...t, score: 0, active: idx === 0 })));

    // Rastgele kategori seç
    const randomCat = categories[Math.floor(Math.random() * categories.length)];
    setCategoryText(randomCat);

    setActiveTeamIdx(0);
    setWinnerTeamIdx(null);
    resetBombTimer();
    setGameStatus('playing');
  };

  // Bombanın patlama anı
  const handleExplode = () => {
    playSound('fail');

    const newElim = [...eliminatedTeams];
    newElim[activeTeamIdx] = true;
    setEliminatedTeams(newElim);

    // Kalan takımları bul
    const activeIndices: number[] = [];
    newElim.forEach((isElim, idx) => {
      if (idx < teamCount && !isElim) activeIndices.push(idx);
    });

    if (activeIndices.length === 1) {
      // Sadece tek bir takım hayatta kaldı -> Şampiyon!
      setWinnerTeamIdx(activeIndices[0]);
      playSound('complete');
      setGameStatus('ended');
    } else if (activeIndices.length === 0) {
      // Kimse kalmadıysa berabere / son elenen dışındakilerden biri
      setWinnerTeamIdx(0);
      setGameStatus('ended');
    } else {
      // Bir sonraki hayatta kalan takıma geç ve bombayı kur
      const currentPos = activeIndices.indexOf(activeTeamIdx);
      let nextIdx = activeIndices[0];
      if (currentPos !== -1 && currentPos + 1 < activeIndices.length) {
        nextIdx = activeIndices[currentPos + 1];
      }

      setActiveTeamIdx(nextIdx);
      setTeams(prev => prev.map((t, i) => ({ ...t, active: i === nextIdx })));
      resetBombTimer();
    }
  };

  // Süreyi Sıfırla (Rastgele 15-25 saniye)
  const resetBombTimer = () => {
    const randTime = Math.floor(Math.random() * 11) + 15; // 15-25 saniye
    setTimer(randTime);
  };

  // Sıradaki Takıma Pasla
  const handlePassBomb = () => {
    if (gameStatus !== 'playing') return;
    playSound('success');

    // Kalan hayatta olan takımları topla
    const activeIndices: number[] = [];
    eliminatedTeams.forEach((isElim, idx) => {
      if (idx < teamCount && !isElim) activeIndices.push(idx);
    });

    if (activeIndices.length <= 1) return;

    // Aktif takımın sıradaki indeksini bul
    const currentPos = activeIndices.indexOf(activeTeamIdx);
    let nextIdx = activeIndices[0];
    if (currentPos !== -1 && currentPos + 1 < activeIndices.length) {
      nextIdx = activeIndices[currentPos + 1];
    }

    setActiveTeamIdx(nextIdx);
    setTeams(prev => prev.map((t, i) => ({ ...t, active: i === nextIdx })));
    resetBombTimer();
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {gameStatus === 'intro' && (
        <div className="text-center flex flex-col items-center py-6">
          <Clock className="w-20 h-20 text-red-500 mb-4 animate-pulse" />
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase">
            Saatli Bomba (Kelime Bombası)
          </h3>
          <p className="text-xs text-slate-555 dark:text-slate-400 mt-2 max-w-md leading-relaxed">
            Hızlı düşünme ve refleks mücadelesi! <br />
            Ekrana gelen dini kategoride kelimeyi söyleyin ve **"Bombayı Devret"** tuşuna basarak bombayı diğer takıma paslayın. <br />
            Bomba elindeyken patlayan takım elenir. Sona kalan takım maçı kazanır!
          </p>
          <button
            onClick={handleStart}
            className="mt-6 px-10 py-3.5 bg-gradient-to-r from-red-500 to-rose-500 text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-lg hover:shadow-red-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yarışmayı Başlat! ➔
          </button>
        </div>
      )}

      {gameStatus === 'playing' && (
        <div className="w-full max-w-3xl flex flex-col items-center gap-6">

          {/* Kategori Paneli */}
          <div className="w-full bg-white dark:bg-slate-850 border-3 border-slate-200 dark:border-slate-750 p-6 rounded-[2.5rem] shadow-lg text-center">
            <span className="text-[10px] font-black text-red-500 uppercase tracking-widest bg-red-50 dark:bg-red-950/40 px-3 py-1.5 rounded-full border border-red-100 dark:border-red-900/50">
              📢 BOMBAYI SAVUŞTURMAK İÇİN KATEGORİ:
            </span>
            <p className="text-base sm:text-xl font-black text-slate-850 dark:text-white mt-4 leading-normal">
              "{categoryText}"
            </p>
          </div>

          {/* Bomba ve Süre Göstergesi */}
          <div className="flex flex-col items-center gap-4 relative">
            <div className={`w-36 h-36 rounded-full bg-slate-900 border-4 border-slate-850 flex flex-col items-center justify-center text-white relative shadow-2xl ${timer <= 5 ? 'animate-ping duration-500 border-red-500' : ''}`}>
              {/* Bomba Fitili */}
              <div className="absolute -top-3 w-1.5 h-6 bg-amber-700 rounded-full"></div>
              {/* Kıvılcım */}
              <div className="absolute -top-6 text-xl animate-bounce">🔥</div>

              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">BOMBA SÜRESİ</span>
              <span className="text-4xl font-display font-black text-red-500 tracking-wider mt-1">{timer}s</span>
            </div>

            {/* Bomba Sırası Kimde */}
            <span className={`px-6 py-2.5 rounded-full text-xs font-black uppercase text-white shadow-md bg-gradient-to-r ${TEAM_PRESETS[activeTeamIdx].color} animate-bounce`}>
              🎯 BOMBA ŞUAN: {teams[activeTeamIdx].name} TAKIMINDA!
            </span>
          </div>

          {/* Aksiyon Butonu */}
          <button
            onClick={handlePassBomb}
            className="w-full py-4.5 bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-xl hover:shadow-red-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            💣 DOĞRU KELİMEYİ SÖYLEDİ - BOMBAYI PASLA! ➔
          </button>

          {/* Hayatta Kalan Takımlar */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
            {teams.slice(0, teamCount).map((team, idx) => {
              const isEliminated = eliminatedTeams[idx];
              const preset = TEAM_PRESETS[idx];
              return (
                <div
                  key={team.id}
                  className={`p-3.5 rounded-2xl border-2 text-center transition-all ${isEliminated
                      ? 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-40 line-through text-slate-400'
                      : idx === activeTeamIdx
                        ? 'border-red-500 bg-red-50/20 ring-3 ring-red-150 dark:ring-red-950/20 text-slate-800 dark:text-white font-black'
                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white'
                    }`}
                >
                  <span className="text-[10px] font-black uppercase tracking-wider block">{team.name}</span>
                  <span className="text-[9px] font-bold text-slate-500 block mt-1">{isEliminated ? 'ELENDİ 💥' : 'HAYATTA'}</span>
                </div>
              );
            })}
          </div>

        </div>
      )}

      {gameStatus === 'ended' && winnerTeamIdx !== null && (
        <div className="text-center flex flex-col items-center py-6 w-full max-w-md bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-8 rounded-[2.5rem] shadow-xl animate-scale-up">
          <Trophy className="w-16 h-16 text-yellow-500 animate-bounce mb-3" />
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
            Maç Sona Erdi!
          </h3>
          <p className="text-xs text-slate-500 mt-2">
            Bomba patlamalarından sağ kurtulan son şampiyon takım:
          </p>

          <div className="w-full flex flex-col gap-3 my-6 p-4 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border-2 border-yellow-300 rounded-[2rem] items-center">
            <span className="text-[10px] font-black text-yellow-600 dark:text-yellow-450 uppercase tracking-widest">🏆 SAĞ KALAN ŞAMPİYON</span>
            <span className="text-2xl font-display font-black text-slate-855 dark:text-white mt-1">
              {teams[winnerTeamIdx].name}
            </span>
          </div>

          <button
            onClick={handleStart}
            className="w-full py-4 bg-gradient-to-r from-red-500 to-rose-500 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:shadow-red-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yeni Bomba Kur! ↩️
          </button>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 11. TEAM GAME 4: SINIF DÜELLOSU (BUZZER)
// ==========================================
interface BuzzerDuelGameProps {
  isDarkMode: boolean;
  teams: Team[];
  setTeams: React.Dispatch<React.SetStateAction<Team[]>>;
  teamCount: number;
}

const BuzzerDuelGame: React.FC<BuzzerDuelGameProps> = ({ isDarkMode, teams, setTeams, teamCount }) => {
  const [gameStatus, setGameStatus] = useState<'intro' | 'playing' | 'ended'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState<UnifiedQuizQuestion | null>(null);
  const [buzzedTeamIdx, setBuzzedTeamIdx] = useState<number | null>(null);
  const [questionStatus, setQuestionStatus] = useState<'waiting_buzzer' | 'answering' | 'result'>('waiting_buzzer');
  const [showReveal, setShowReveal] = useState<boolean>(false);
  const [winnerTeamIdx, setWinnerTeamIdx] = useState<number | null>(null);
  const [usedQuestionIds, setUsedQuestionIds] = useState<string[]>([]);

  const winningScore = 150; // 150 puana ilk ulaşan düelloyu kazanır

  // Klavye Zili Dinleyicisi (Akıllı Tahta için Ziller)
  useEffect(() => {
    if (gameStatus !== 'playing' || questionStatus !== 'waiting_buzzer') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();

      // Takım 1: Q, Takım 2: P, Takım 3: Z, Takım 4: M
      if (key === 'Q' && teamCount >= 1) triggerBuzzer(0);
      if (key === 'P' && teamCount >= 2) triggerBuzzer(1);
      if (key === 'Z' && teamCount >= 3) triggerBuzzer(2);
      if (key === 'M' && teamCount >= 4) triggerBuzzer(3);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameStatus, questionStatus]);

  // Oyunu Başlat
  const handleStart = () => {
    playSound('complete');
    setUsedQuestionIds([]);

    // Skorları sıfırla
    setTeams(prev => prev.map((t, idx) => ({ ...t, score: 0, active: idx === 0 })));
    setWinnerTeamIdx(null);
    setBuzzedTeamIdx(null);
    setQuestionStatus('waiting_buzzer');
    loadNextQuestion();
    setGameStatus('playing');
  };

  // Soru yükle
  const loadNextQuestion = () => {
    const list = getCurriculumQuizQuestions();
    const unusedList = filterUnusedQuestions(list);
    const filtered = unusedList.filter(q => !usedQuestionIds.includes(q.id));
    const pool = filtered.length > 0 ? filtered : unusedList;
    const finalPool = pool.length > 0 ? pool : list;
    const randomQuestion = finalPool[Math.floor(Math.random() * finalPool.length)];
    setCurrentQuestion(randomQuestion);
    setShowReveal(false);
    if (randomQuestion) {
      setUsedQuestionIds(prev => [...prev, randomQuestion.id]);
      markQuestionAsUsed(randomQuestion.id);
    }
  };

  // Zile Basma Tetikleyici
  const triggerBuzzer = (teamIdx: number) => {
    if (gameStatus !== 'playing' || questionStatus !== 'waiting_buzzer') return;
    playSound('complete'); // zil melodisi tarzı

    setBuzzedTeamIdx(teamIdx);
    setQuestionStatus('answering');

    // Aktif takımı seç
    setTeams(prev => prev.map((t, i) => ({ ...t, active: i === teamIdx })));
  };

  // Cevap Değerlendirme
  const handleEvaluate = (isCorrect: boolean) => {
    if (buzzedTeamIdx === null || !currentQuestion) return;

    if (isCorrect) {
      playSound('success');

      // Doğru bilirse +50 puan
      const updatedTeams = teams.map((t, idx) =>
        idx === buzzedTeamIdx ? { ...t, score: t.score + 50 } : t
      );
      setTeams(updatedTeams);

      // Kazanma kontrolü
      if (updatedTeams[buzzedTeamIdx].score >= winningScore) {
        setWinnerTeamIdx(buzzedTeamIdx);
        playSound('complete');
        setGameStatus('ended');
        return;
      }

      // Bir sonraki soruya geç
      setBuzzedTeamIdx(null);
      setQuestionStatus('waiting_buzzer');
      loadNextQuestion();
    } else {
      playSound('fail');
      // Yanlış bilirse puanı düşürmek yerine zili sıfırlayalım ki diğerleri bassın!
      setBuzzedTeamIdx(null);
      setQuestionStatus('waiting_buzzer');
    }
  };

  // Soru Pas Geç
  const handleSkipQuestion = () => {
    playSound('tick');
    setBuzzedTeamIdx(null);
    setQuestionStatus('waiting_buzzer');
    loadNextQuestion();
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {gameStatus === 'intro' && (
        <div className="text-center flex flex-col items-center py-6">
          <Sparkles className="w-20 h-20 text-purple-500 mb-4 animate-bounce" />
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase">
            Sınıf Düellosu (Hızlı Ziller)
          </h3>
          <p className="text-xs text-slate-555 dark:text-slate-400 mt-2 max-w-md leading-relaxed">
            Akıllı tahtada hız ve bilgi düellosu! <br />
            Soru ekrana geldiğinde kendi takımının ziline ilk basan cevaplama hakkı kazanır. <br />
            Doğru cevaplar **50 Puan** kazandırır. **150 Puan** barajına ilk ulaşan takım kazanır! <br />
            <span className="text-[10px] text-indigo-500 font-bold block mt-2">Klavye Kısayolları: 1. Takım (Q) | 2. Takım (P) | 3. Takım (Z) | 4. Takım (M)</span>
          </p>
          <button
            onClick={handleStart}
            className="mt-6 px-10 py-3.5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-lg hover:shadow-purple-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yarışmayı Başlat! ➔
          </button>
        </div>
      )}

      {gameStatus === 'playing' && currentQuestion && (
        <div className="w-full flex flex-col gap-6 items-center">

          {/* Üst Skor Tablosu ve Pas Tuşu */}
          <div className="w-full max-w-3xl flex justify-between items-center px-4">
            <span className="text-[10px] font-black text-slate-450 uppercase tracking-widest">
              Hedef Skor: {winningScore} Puan
            </span>
            <button
              onClick={handleSkipQuestion}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-[10px] font-black uppercase text-slate-550 rounded-xl cursor-pointer"
            >
              Soruyu Pas Geç ➔
            </button>
          </div>

          {/* Soru Kartı */}
          <div className="w-full max-w-3xl bg-white dark:bg-slate-850 border-3 border-slate-200 dark:border-slate-750 p-6 rounded-[2.5rem] shadow-lg text-center">
            <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest bg-indigo-50 dark:bg-indigo-950/40 px-3.5 py-1.5 rounded-full border border-indigo-100 dark:border-indigo-900/50">
              📢 DÜELLO SORUSU:
            </span>
            <p className="text-base sm:text-lg font-bold text-slate-855 dark:text-white mt-5 leading-normal">
              "{currentQuestion.question}"
            </p>

            {/* Şıklar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {currentQuestion.options.map((opt, i) => {
                const isCorrectOpt = opt === currentQuestion.correct;
                const letter = String.fromCharCode(65 + i);

                return (
                  <div
                    key={opt}
                    className={`p-3.5 rounded-2xl border text-xs font-semibold leading-normal flex gap-3 items-center ${showReveal
                        ? isCorrectOpt
                          ? 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-400 text-emerald-700 dark:text-emerald-450 ring-2 ring-emerald-300'
                          : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 opacity-60'
                        : 'bg-slate-50/50 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-350'
                      }`}
                  >
                    <span className="w-5 h-5 rounded bg-indigo-500 text-white font-black text-[9px] flex items-center justify-center shrink-0">
                      {letter}
                    </span>
                    <span>{opt}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Buzzer / Zil Butonları Grid */}
          {questionStatus === 'waiting_buzzer' ? (
            <div className="w-full max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-4">
              {teams.slice(0, teamCount).map((team, idx) => {
                const preset = TEAM_PRESETS[idx];
                return (
                  <button
                    key={team.id}
                    onClick={() => triggerBuzzer(idx)}
                    className={`h-32 rounded-3xl border-3 bg-gradient-to-b ${preset.color} text-white flex flex-col items-center justify-center gap-1.5 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg`}
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest">{team.name}</span>
                    <span className="text-xl">🔔 ZİL</span>
                    <span className="text-[8px] font-bold opacity-80 mt-1">Klavye: ({idx === 0 ? 'Q' : idx === 1 ? 'P' : idx === 2 ? 'Z' : 'M'})</span>
                  </button>
                );
              })}
            </div>
          ) : (
            buzzedTeamIdx !== null && (
              <div className="w-full max-w-2xl bg-white dark:bg-slate-800 border-3 border-indigo-500 p-6 rounded-[2.5rem] shadow-xl flex flex-col items-center gap-4 animate-scale-up">
                <span className={`px-6 py-2.5 rounded-full text-xs font-black uppercase text-white shadow bg-gradient-to-r ${TEAM_PRESETS[buzzedTeamIdx].color}`}>
                  ⚡ CEVAP VERİYOR: {teams[buzzedTeamIdx].name}
                </span>

                <div className="flex gap-4 w-full justify-center mt-2">
                  <button
                    onClick={() => setShowReveal(!showReveal)}
                    className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-250 dark:border-slate-700 rounded-xl text-xs font-black uppercase text-slate-650 dark:text-slate-350 transition-all cursor-pointer"
                  >
                    {showReveal ? 'Cevabı Gizle 👁️' : 'Doğru Cevabı Göster 💡'}
                  </button>
                  <button
                    onClick={() => handleEvaluate(false)}
                    className="px-6 py-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95 flex items-center gap-1"
                  >
                    ❌ YANLIŞ
                  </button>
                  <button
                    onClick={() => handleEvaluate(true)}
                    className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95 flex items-center gap-1"
                  >
                    ✔️ DOĞRU
                  </button>
                </div>

                {showReveal && (
                  <div className="p-4 bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-250 rounded-2xl text-[10px] font-semibold text-emerald-805 dark:text-emerald-400 leading-relaxed mt-2 text-center">
                    <strong>İlahi Hikmet (Bilgi):</strong> {currentQuestion.wisdom} <br />
                    <strong>Kaynak:</strong> {currentQuestion.source}
                  </div>
                )}
              </div>
            )
          )}

        </div>
      )}

      {gameStatus === 'ended' && winnerTeamIdx !== null && (
        <div className="text-center flex flex-col items-center py-6 w-full max-w-md bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-8 rounded-[2.5rem] shadow-xl animate-scale-up">
          <Trophy className="w-16 h-16 text-yellow-500 animate-bounce mb-3" />
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
            Düello Tamamlandı!
          </h3>
          <p className="text-xs text-slate-550 mt-2">
            150 puan barajına ilk ulaşarak düellonun galibi olan takım:
          </p>

          <div className="w-full flex flex-col gap-3 my-6 p-4 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border-2 border-yellow-300 rounded-[2rem] items-center">
            <span className="text-[10px] font-black text-yellow-600 dark:text-yellow-450 uppercase tracking-widest">🏆 ŞAMPİYON DÜELLOCU</span>
            <span className="text-2xl font-display font-black text-slate-855 dark:text-white mt-1">
              {teams[winnerTeamIdx].name}
            </span>
            <span className="text-xs font-black text-slate-500 mt-0.5">
              {teams[winnerTeamIdx].score} Puan
            </span>
          </div>

          <button
            onClick={handleStart}
            className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:shadow-purple-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yeniden Yarışın! ↩️
          </button>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 12. INDIVIDUAL GAME 8: BOŞLUK DOLDURMA (CÜMLE TAMAMLA)
// ==========================================
interface BlankQuestion {
  text: string;
  options: string[];
  correct: string;
  wisdom: string;
}

interface ChronoLevel {
  title: string;
  correctOrder: string[];
}

const ChronologyGame: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const [gameStatus, setGameStatus] = useState<'intro' | 'playing' | 'ended'>('intro');
  const [currentLevel, setCurrentLevel] = useState<number>(0);
  const [currentItems, setCurrentItems] = useState<string[]>([]);
  const [checked, setChecked] = useState<boolean>(false);
  const [isAllCorrect, setIsAllCorrect] = useState<boolean>(false);

  const levels: ChronoLevel[] = [
    {
      title: "Peygamber Efendimiz’in (s.a.v.) Hayatı",
      correctOrder: [
        "Doğumu (571)",
        "Peygamberlik Gelmesi (610)",
        "Hicret (622)",
        "Mekke'nin Fethi (630)",
        "Vefatı (632)"
      ]
    },
    {
      title: "Namaz Vakitleri Sırası",
      correctOrder: [
        "Sabah Namazı",
        "Öğle Namazı",
        "İkindi Namazı",
        "Akşam Namazı",
        "Yatsı Namazı"
      ]
    },
    {
      title: "Abdest Alma Sırası",
      correctOrder: [
        "Elleri yıkamak",
        "Ağza su vermek",
        "Yüzü yıkamak",
        "Başı meshetmek",
        "Ayakları yıkamak"
      ]
    }
  ];

  const handleStart = () => {
    playSound('complete');
    setCurrentLevel(0);
    loadLevel(0);
    setGameStatus('playing');
  };

  const loadLevel = (levelIdx: number) => {
    setChecked(false);
    setIsAllCorrect(false);

    // Karışık listele
    const correct = levels[levelIdx].correctOrder;
    const shuffled = shuffleArray(correct);
    setCurrentItems(shuffled);
  };

  // Liste Elemanını Taşıma
  const moveItem = (index: number, direction: 'up' | 'down') => {
    if (checked) return;
    playSound('tick');

    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= currentItems.length) return;

    const list = [...currentItems];
    [list[index], list[newIndex]] = [list[newIndex], list[index]];
    setCurrentItems(list);
  };

  // Düzen Kontrolü
  const handleCheck = () => {
    setChecked(true);
    const correct = levels[currentLevel].correctOrder;
    const checkAll = currentItems.every((item, idx) => item === correct[idx]);
    setIsAllCorrect(checkAll);

    if (checkAll) {
      playSound('success');
    } else {
      playSound('fail');
    }
  };

  const handleNext = () => {
    if (currentLevel + 1 < levels.length) {
      playSound('complete');
      setCurrentLevel(prev => prev + 1);
      loadLevel(currentLevel + 1);
    } else {
      playSound('complete');
      setGameStatus('ended');
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {gameStatus === 'intro' && (
        <div className="text-center flex flex-col items-center py-6">
          <Clock className="w-20 h-20 text-violet-500 mb-4 animate-pulse" />
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase">
            Sıra Sende (Zaman Şeridi)
          </h3>
          <p className="text-xs text-slate-555 dark:text-slate-400 mt-2 max-w-md leading-relaxed">
            Dini aşamaları ve tarihi olayları en eskiden en yeniye doğru veya sırasına göre sıralayın! <br />
            Kartların yanındaki okları kullanarak doğru sıralamayı kurun.
          </p>
          <button
            onClick={handleStart}
            className="mt-6 px-10 py-3.5 bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-lg hover:shadow-violet-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yarışmayı Başlat! ➔
          </button>
        </div>
      )}

      {gameStatus === 'playing' && (
        <div className="w-full max-w-xl bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-8 rounded-[2.5rem] shadow-lg flex flex-col gap-6 items-center">

          <div className="flex justify-between w-full text-[10px] font-black text-slate-450 uppercase tracking-widest">
            <span>Aşama: {currentLevel + 1} / {levels.length}</span>
            <span>Sıralama Görevi</span>
          </div>

          <h4 className="text-sm font-black text-indigo-600 dark:text-indigo-400 uppercase text-center tracking-wide">
            🏆 {levels[currentLevel].title}
          </h4>

          {/* Kartlar Listesi */}
          <div className="flex flex-col gap-3 w-full">
            {currentItems.map((item, idx) => {
              const correct = levels[currentLevel].correctOrder;
              const isCorrectPos = item === correct[idx];

              let borderStyle = "border-slate-200 dark:border-slate-700";
              if (checked) {
                borderStyle = isCorrectPos ? "border-emerald-500 bg-emerald-50/20" : "border-rose-500 bg-rose-50/20";
              }

              return (
                <div
                  key={item}
                  className={`p-4 rounded-2xl border-2 flex items-center justify-between transition-all bg-slate-50 dark:bg-slate-900 ${borderStyle}`}
                >
                  <span className="text-xs font-bold text-slate-855 dark:text-white uppercase tracking-wider">{item}</span>

                  {!checked && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => moveItem(idx, 'up')}
                        disabled={idx === 0}
                        className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-800 disabled:opacity-40 text-xs font-bold cursor-pointer hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
                      >
                        ▲
                      </button>
                      <button
                        onClick={() => moveItem(idx, 'down')}
                        disabled={idx === currentItems.length - 1}
                        className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-800 disabled:opacity-40 text-xs font-bold cursor-pointer hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
                      >
                        ▼
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Kontrol Butonları */}
          {!checked ? (
            <button
              onClick={handleCheck}
              className="w-full py-4.5 bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Sıralamayı Kontrol Et! 🔍
            </button>
          ) : (
            <div className="w-full flex flex-col gap-4 animate-scale-up">
              <span className={`text-xs font-black uppercase tracking-wider text-center block ${isAllCorrect ? 'text-emerald-600' : 'text-rose-500'}`}>
                {isAllCorrect ? '🎉 Tebrikler! Tüm sıralama doğru.' : '❌ Bazı kartlar yanlış sırada duruyor. Sıradaki tura geçebilirsin.'}
              </span>

              <button
                onClick={handleNext}
                className="w-full py-4.5 bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                {currentLevel + 1 === levels.length ? 'Sonuçları Gör ➔' : 'Sonraki Seviyeye Geç ➔'}
              </button>
            </div>
          )}

        </div>
      )}

      {gameStatus === 'ended' && (
        <div className="text-center flex flex-col items-center py-6 w-full max-w-md bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-8 rounded-[2.5rem] shadow-xl animate-scale-up">
          <Trophy className="w-16 h-16 text-yellow-500 animate-bounce mb-3" />
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
            Mükemmel!
          </h3>
          <p className="text-xs text-slate-550 mt-2">
            Tüm sıralama görevlerini başarıyla bitirdiniz!
          </p>

          <button
            onClick={handleStart}
            className="mt-6 w-full py-4 bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:shadow-violet-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yeniden Sırala! ↩️
          </button>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 14. INDIVIDUAL GAME 10: ÇARK-I BİLGİ (SORU ÇARKI)
// ==========================================
const WheelOfWisdomGame: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const [gameStatus, setGameStatus] = useState<'intro' | 'playing' | 'ended'>('intro');
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [rotation, setRotation] = useState<number>(0);
  const [selectedCat, setSelectedCat] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<UnifiedQuizQuestion | null>(null);
  const [score, setScore] = useState<number>(0);
  const [round, setRound] = useState<number>(1);
  const [showAnswerFeedback, setShowAnswerFeedback] = useState<boolean>(false);
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [usedQuestionIds, setUsedQuestionIds] = useState<string[]>([]);

  const categories = ['İnanç', 'İbadet', 'Ahlak', 'Siyer', 'Pas 💤', 'İflas 💥'];

  const handleStart = () => {
    playSound('complete');
    setScore(0);
    setRound(1);
    setSelectedCat(null);
    setCurrentQuestion(null);
    setShowAnswerFeedback(false);
    setSelectedOpt(null);
    setUsedQuestionIds([]);
    setGameStatus('playing');
  };

  // Çarkı Çevir
  const handleSpin = () => {
    if (isSpinning || showAnswerFeedback) return;
    playSound('tick');
    setIsSpinning(true);
    setSelectedCat(null);
    setCurrentQuestion(null);

    // Rastgele dönüş açısı hesapla (En az 5 tur)
    const extraDegrees = Math.floor(Math.random() * 360);
    const totalRotation = rotation + 1800 + extraDegrees;
    setRotation(totalRotation);

    // Landed segment tespiti
    setTimeout(() => {
      setIsSpinning(false);

      const normalizedAngle = (360 - (totalRotation % 360)) % 360;
      const segmentSize = 360 / categories.length;
      const landedIdx = Math.floor(normalizedAngle / segmentSize) % categories.length;
      const landedCat = categories[landedIdx];

      setSelectedCat(landedCat);

      if (landedCat === 'Pas 💤') {
        playSound('tick');
        setTimeout(() => {
          advanceRound();
        }, 1500);
      } else if (landedCat === 'İflas 💥') {
        playSound('fail');
        setScore(0);
        setTimeout(() => {
          advanceRound();
        }, 1500);
      } else {
        // Soru yükle
        const pool = getCurriculumQuizQuestions();
        const unusedPool = filterUnusedQuestions(pool);
        const filtered = unusedPool.filter(q => !usedQuestionIds.includes(q.id));
        const finalPool = filtered.length > 0 ? filtered : unusedPool;
        const lastPool = finalPool.length > 0 ? finalPool : pool;
        const randomQ = lastPool[Math.floor(Math.random() * lastPool.length)];

        setCurrentQuestion(randomQ);
        setShowAnswerFeedback(false);
        setSelectedOpt(null);
        if (randomQ) {
          setUsedQuestionIds(prev => [...prev, randomQ.id]);
          markQuestionAsUsed(randomQ.id);
        }
      }
    }, 3000);
  };

  // Şık Seç
  const handleSelectOption = (opt: string) => {
    if (showAnswerFeedback || !currentQuestion) return;
    playSound('tick');
    setSelectedOpt(opt);
    setShowAnswerFeedback(true);

    if (opt === currentQuestion.correct) {
      playSound('success');
      setScore(prev => prev + 100);
    } else {
      playSound('fail');
    }
  };

  const advanceRound = () => {
    if (round < 5) {
      setRound(prev => prev + 1);
      setSelectedCat(null);
      setCurrentQuestion(null);
      setShowAnswerFeedback(false);
      setSelectedOpt(null);
    } else {
      playSound('complete');
      setGameStatus('ended');
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {gameStatus === 'intro' && (
        <div className="text-center flex flex-col items-center py-6">
          <Settings className="w-20 h-20 text-purple-500 mb-4 animate-spin-slow" />
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase">
            Çark-ı Bilgi (Soru Çarkı)
          </h3>
          <p className="text-xs text-slate-555 dark:text-slate-400 mt-2 max-w-md leading-relaxed">
            Çarkı çevirin, gelen dini kategorideki soruları doğru bilerek puanları toplayın! <br />
            5 tur sonunda en yüksek skora ulaşın. Dikkat edin, çarkta Pas ve İflas dilimleri de var!
          </p>
          <button
            onClick={handleStart}
            className="mt-6 px-10 py-3.5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-lg hover:shadow-purple-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yarışmayı Başlat! ➔
          </button>
        </div>
      )}

      {gameStatus === 'playing' && (
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

          {/* Sol Kolon: Çark Çizimi */}
          <div className="lg:col-span-5 flex flex-col items-center gap-4 bg-slate-50 dark:bg-slate-900/60 p-6 rounded-[2rem] border-2 border-slate-200 dark:border-slate-800">
            <div className="flex justify-between w-full text-[10px] font-black text-slate-450 uppercase tracking-widest px-2">
              <span>Tur: {round} / 5</span>
              <span>Skor: {score} Puan</span>
            </div>

            {/* Çark Çerçevesi */}
            <div className="relative w-56 h-56 flex items-center justify-center mt-3">
              {/* Pointer Gösterge */}
              <div className="absolute -top-3.5 z-20 text-2xl filter drop-shadow">▼</div>

              {/* Dönen Çark */}
              <div
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: isSpinning ? 'transform 3000ms cubic-bezier(0.2, 0.8, 0.2, 1)' : 'none'
                }}
                className="w-full h-full rounded-full border-4 border-slate-800 shadow-2xl relative overflow-hidden flex items-center justify-center bg-white dark:bg-slate-950"
              >
                {/* SVG Çark Bölümleri */}
                <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 100">
                  {categories.map((cat, idx) => {
                    const angle = 360 / categories.length;
                    const startAngle = idx * angle;
                    const endAngle = (idx + 1) * angle;

                    const radStart = (startAngle * Math.PI) / 180;
                    const radEnd = (endAngle * Math.PI) / 180;

                    const x1 = 50 + 50 * Math.cos(radStart);
                    const y1 = 50 + 50 * Math.sin(radStart);
                    const x2 = 50 + 50 * Math.cos(radEnd);
                    const y2 = 50 + 50 * Math.sin(radEnd);

                    const colors = [
                      '#e11d48', // rose
                      '#0d9488', // teal
                      '#ca8a04', // yellow
                      '#7c3aed', // violet
                      '#4b5563', // gray (pas)
                      '#f97316'  // orange (iflas)
                    ];

                    return (
                      <path
                        key={cat}
                        d={`M 50 50 L ${x1} ${y1} A 50 50 0 0 1 ${x2} ${y2} Z`}
                        fill={colors[idx]}
                        stroke="#1e293b"
                        strokeWidth="1.5"
                      />
                    );
                  })}
                </svg>

                {/* Çarkın Segment Etiketleri */}
                <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
                  {categories.map((cat, idx) => {
                    const angle = 90 + idx * (360 / categories.length) + (180 / categories.length);
                    return (
                      <div
                        key={cat}
                        style={{ transform: `rotate(${angle}deg) translate(0, -70px)` }}
                        className="absolute text-[8px] font-black text-white uppercase tracking-wider text-center drop-shadow"
                      >
                        {cat}
                      </div>
                    );
                  })}
                </div>

                {/* Orta Buton */}
                <div className="w-12 h-12 bg-slate-900 border-3 border-white rounded-full absolute z-20 flex items-center justify-center text-white text-[10px] font-black shadow-lg">
                  ÇARK
                </div>
              </div>
            </div>

            <button
              onClick={handleSpin}
              disabled={isSpinning || showAnswerFeedback}
              className="mt-4 w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-500 disabled:opacity-40 text-white font-black text-xs uppercase tracking-wider rounded-xl cursor-pointer hover:scale-105 active:scale-95 transition-all shadow"
            >
              {isSpinning ? 'Dönüyor...' : 'ÇARKI ÇEVİR! 🎡'}
            </button>
          </div>

          {/* Sağ Kolon: Soru / Durum */}
          <div className="lg:col-span-7 flex flex-col gap-4 items-center">

            {/* Çark Sonuç Büyüteci */}
            {selectedCat && (
              <div className="w-full bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-6 rounded-[2.5rem] shadow flex flex-col items-center gap-3 animate-scale-up text-center">
                <span className="text-[10px] font-black text-slate-450 uppercase tracking-widest">
                  ÇARKIN GÖSTERDİĞİ:
                </span>
                <span className="text-xl font-display font-black text-purple-650 dark:text-purple-400 uppercase tracking-widest animate-bounce">
                  ✨ {selectedCat} ✨
                </span>

                {selectedCat === 'Pas 💤' && (
                  <p className="text-xs text-slate-500 mt-1">Bu tur pas geçtiniz! Bir sonraki tura aktarılıyorsunuz...</p>
                )}
                {selectedCat === 'İflas 💥' && (
                  <p className="text-xs text-red-500 mt-1 font-bold">Eyvah! Puanlarınız sıfırlandı.</p>
                )}
              </div>
            )}

            {/* Soru Paneli */}
            {currentQuestion && (
              <div className="w-full bg-white dark:bg-slate-800 border-3 border-slate-250 dark:border-slate-700 p-6 rounded-[2.5rem] shadow flex flex-col gap-4 animate-scale-up">
                <p className="text-xs sm:text-sm font-bold text-slate-855 dark:text-white leading-relaxed">
                  "{currentQuestion.question}"
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                  {currentQuestion.options.map(opt => {
                    const isSelected = opt === selectedOpt;
                    const isCorrect = opt === currentQuestion.correct;

                    let btnStyle = "bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-750 border-slate-200 dark:border-slate-700 text-slate-850 dark:text-white cursor-pointer hover:scale-102 active:scale-98 text-left text-xs font-semibold leading-normal p-3 rounded-xl border flex items-center";
                    if (showAnswerFeedback) {
                      if (isCorrect) {
                        btnStyle = "bg-emerald-500 border-emerald-600 text-white pointer-events-none p-3 rounded-xl border flex items-center";
                      } else if (isSelected) {
                        btnStyle = "bg-rose-500 border-rose-600 text-white pointer-events-none p-3 rounded-xl border flex items-center";
                      } else {
                        btnStyle = "opacity-40 pointer-events-none bg-slate-100 dark:bg-slate-900 text-slate-400 p-3 rounded-xl border flex items-center";
                      }
                    }

                    return (
                      <button
                        key={opt}
                        onClick={() => handleSelectOption(opt)}
                        disabled={showAnswerFeedback}
                        className={btnStyle}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {showAnswerFeedback && (
                  <div className="w-full flex flex-col gap-3 mt-2 animate-scale-up">
                    <div className="p-3 bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-250 rounded-2xl text-[9px] font-semibold text-emerald-805 dark:text-emerald-400 leading-relaxed">
                      <strong>Doğru Cevap:</strong> {currentQuestion.correct} <br />
                      <strong>İlahi Hikmet:</strong> {currentQuestion.wisdom}
                    </div>

                    <button
                      onClick={advanceRound}
                      className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-black uppercase text-xs tracking-wider rounded-xl cursor-pointer hover:scale-105 active:scale-95 transition-all shadow"
                    >
                      Devam Et ➔
                    </button>
                  </div>
                )}
              </div>
            )}

          </div>

        </div>
      )}

      {gameStatus === 'ended' && (
        <div className="text-center flex flex-col items-center py-6 w-full max-w-md bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-8 rounded-[2.5rem] shadow-xl animate-scale-up">
          <Trophy className="w-16 h-16 text-yellow-500 animate-bounce mb-3" />
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
            Yarışma Bitti!
          </h3>
          <p className="text-xs text-slate-500 mt-2">
            5 turluk çarkıfelek bilgi yarışmasını başarıyla bitirdiniz!
          </p>

          <div className="w-full flex flex-col gap-2 my-5 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl">
            <span className="text-[10px] font-black text-slate-450 uppercase tracking-widest">TOPLAM SKOR</span>
            <span className="text-2xl font-display font-black text-purple-600 dark:text-purple-400 tracking-wider mt-1">
              {score} Puan
            </span>
          </div>

          <button
            onClick={handleStart}
            className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:shadow-purple-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yeniden Oyna! ↩️
          </button>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 15. INDIVIDUAL GAME 11: RESİM TAHMİN (GÖRSEL BULMACA)
// ==========================================
interface MysteryImage {
  name: string;
  emoji: string;
  options: string[];
  wisdom: string;
}

const FallingWordsGame: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const [gameStatus, setGameStatus] = useState<'intro' | 'playing' | 'ended' | 'lost'>('intro');
  const [targetWord, setTargetWord] = useState<string>('');
  const [bubbles, setBubbles] = useState<string[]>([]);
  const [collectedIdx, setCollectedIdx] = useState<number>(0);
  const [lives, setLives] = useState<number>(3);
  const [score, setScore] = useState<number>(0);
  const [round, setRound] = useState<number>(1);

  const wordPool = ['ZEKAT', 'NAMAZ', 'ABDEST', 'ORUÇ', 'İMAN', 'İHLAS', 'MELEK', 'SÜRE'];

  const handleStart = () => {
    playSound('complete');
    setScore(0);
    setLives(3);
    setRound(1);
    loadNextWord('');
    setGameStatus('playing');
  };

  const loadNextWord = (nextRound?: string) => {
    const randomWord = wordPool[Math.floor(Math.random() * wordPool.length)];
    setTargetWord(randomWord);
    setCollectedIdx(0);

    // Balonları oluştur: Hedef harfler + rastgele harfler
    const correctLetters = randomWord.split('');
    const randomLetters = Array.from({ length: 4 }, () =>
      TURKISH_LETTERS[Math.floor(Math.random() * TURKISH_LETTERS.length)]
    );
    const combined = [...correctLetters, ...randomLetters];
    // Karıştır
    const shuffledCombined = shuffleArray(combined);

    setBubbles(shuffledCombined);
  };

  const handleBubbleClick = (letter: string, bIdx: number) => {
    if (gameStatus !== 'playing') return;

    const nextLetter = targetWord[collectedIdx];

    if (letter === nextLetter) {
      playSound('success');
      setCollectedIdx(prev => prev + 1);

      // Balon listesinden bu balonu kaldır
      const updated = [...bubbles];
      updated.splice(bIdx, 1);
      setBubbles(updated);

      // Kelime bitti mi
      if (collectedIdx + 1 === targetWord.length) {
        playSound('complete');
        setScore(prev => prev + 100);

        if (round < 4) {
          setRound(prev => prev + 1);
          loadNextWord();
        } else {
          setGameStatus('ended');
        }
      }
    } else {
      playSound('fail');
      setLives(prev => {
        const nextLives = prev - 1;
        if (nextLives <= 0) {
          setGameStatus('lost');
        }
        return nextLives;
      });
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {gameStatus === 'intro' && (
        <div className="text-center flex flex-col items-center py-6">
          <Flame className="w-20 h-20 text-red-500 mb-4 animate-pulse" />
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase">
            Kelime Avcısı (Düşen Harfler)
          </h3>
          <p className="text-xs text-slate-555 dark:text-slate-400 mt-2 max-w-md leading-relaxed">
            Balonlardaki harfleri sırayla toplayarak hedef kelimeyi tamamlayın! <br />
            Hedef kelimeyi tamamlamak için harflere **sırayla** dokunmanız gerekir. <br />
            Yanlış harfe dokunmak can kaybettirir!
          </p>
          <button
            onClick={handleStart}
            className="mt-6 px-10 py-3.5 bg-gradient-to-r from-red-500 to-orange-500 text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-lg hover:shadow-red-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yarışmayı Başlat! ➔
          </button>
        </div>
      )}

      {gameStatus === 'playing' && (
        <div className="w-full max-w-2xl bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-8 rounded-[2.5rem] shadow-lg flex flex-col gap-6 items-center">

          <div className="flex justify-between w-full text-[10px] font-black text-slate-450 uppercase tracking-widest">
            <span>Aşama: {round} / 4</span>
            <span>Canlar: {'❤️'.repeat(lives)}</span>
          </div>

          {/* Hedef Kelime Harfleri */}
          <div className="flex gap-2">
            {targetWord.split('').map((char, i) => {
              const collected = i < collectedIdx;
              return (
                <div
                  key={i}
                  className={`w-12 h-12 rounded-xl border-3 flex items-center justify-center font-display font-black text-lg ${collected
                      ? 'bg-emerald-500 border-emerald-600 text-white'
                      : 'bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-700 text-slate-400'
                    }`}
                >
                  {collected ? char : '_'}
                </div>
              );
            })}
          </div>

          {/* Balonlar / Harf Seçim Alanı */}
          <div className="w-full min-h-[160px] bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-750 p-6 rounded-2xl flex flex-wrap justify-center gap-3 items-center">
            {bubbles.map((letter, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => handleBubbleClick(letter, idx)}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-white font-display font-black text-sm uppercase shadow-md hover:scale-105 active:scale-95 cursor-pointer transition-all flex items-center justify-center"
                >
                  {letter}
                </button>
              );
            })}
          </div>

          <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1.5 rounded-full border border-indigo-100 dark:border-indigo-900/50">
            🎯 Sıradaki Harf: {targetWord[collectedIdx]}
          </span>

        </div>
      )}

      {(gameStatus === 'ended' || gameStatus === 'lost') && (
        <div className="text-center flex flex-col items-center py-6 w-full max-w-md bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-8 rounded-[2.5rem] shadow-xl animate-scale-up">
          {gameStatus === 'ended' ? (
            <>
              <Trophy className="w-16 h-16 text-yellow-500 animate-bounce mb-3" />
              <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
                Harika Avcı!
              </h3>
              <p className="text-xs text-slate-500 mt-2">
                Tüm kelimeleri başarıyla avladınız!
              </p>
            </>
          ) : (
            <>
              <XCircle className="w-16 h-16 text-rose-500 animate-pulse mb-3" />
              <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
                Canlarınız Bitti!
              </h3>
              <p className="text-xs text-slate-500 mt-2">
                Kelimeyi tamamlayamadan canlarınız bitti.
              </p>
            </>
          )}

          <div className="w-full flex flex-col gap-2 my-5 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl">
            <span className="text-[10px] font-black text-slate-450 uppercase tracking-widest">TOPLAM SKOR</span>
            <span className="text-2xl font-display font-black text-emerald-600 dark:text-emerald-450 tracking-wider mt-1">
              {score} Puan
            </span>
          </div>

          <button
            onClick={handleStart}
            className="w-full py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:shadow-red-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yeniden Oyna! ↩️
          </button>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 17. INDIVIDUAL GAME 13: 4 ŞIKLI BİLGİ TESTİ
// ==========================================
interface MazeQuestionGate {
  row: number;
  col: number;
  question: UnifiedQuizQuestion;
}

const MazeRunnerGame: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const [gameStatus, setGameStatus] = useState<'intro' | 'playing' | 'ended'>('intro');
  const [playerPos, setPlayerPos] = useState<{ r: number; c: number }>({ r: 0, c: 0 });
  const [gates, setGates] = useState<MazeQuestionGate[]>([]);
  const [activeGate, setActiveGate] = useState<MazeQuestionGate | null>(null);
  const [showAnswerResult, setShowAnswerResult] = useState<boolean>(false);
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false);

  const gridSize = 6;

  // Labirent Duvarları
  const walls = [
    '1_1', '2_1', '3_1', '1_3', '2_3', '3_3', '4_4', '4_3'
  ];

  // Oyunu Başlat
  const handleStart = () => {
    playSound('complete');
    setPlayerPos({ r: 0, c: 0 });

    // Soru kapılarını oluştur (farklı ve kullanılmamış sorular seç)
    const pool = getCurriculumQuizQuestions();
    const unusedPool = filterUnusedQuestions(pool);
    const finalPool = unusedPool.length >= 2 ? unusedPool : pool;

    // Karıştırıp iki farklı soru seçelim
    const shuffled = shuffleArray(finalPool);
    const g1: MazeQuestionGate = { row: 2, col: 2, question: shuffled[0] };
    const g2: MazeQuestionGate = { row: 4, col: 2, question: shuffled[1] };

    markQuestionAsUsed(shuffled[0].id);
    markQuestionAsUsed(shuffled[1].id);

    setGates([g1, g2]);
    setActiveGate(null);
    setShowAnswerResult(false);
    setGameStatus('playing');
  };

  // Karakteri Hareket Ettir (Yön tuşları)
  const handleMove = (direction: 'up' | 'down' | 'left' | 'right') => {
    if (gameStatus !== 'playing' || activeGate) return;

    let newR = playerPos.r;
    let newC = playerPos.c;

    if (direction === 'up') newR = playerPos.r - 1;
    if (direction === 'down') newR = playerPos.r + 1;
    if (direction === 'left') newC = playerPos.c - 1;
    if (direction === 'right') newC = playerPos.c + 1;

    // Limit kontrolü
    if (newR < 0 || newR >= gridSize || newC < 0 || newC >= gridSize) return;

    // Duvar kontrolü
    if (walls.includes(`${newR}_${newC}`)) {
      playSound('fail');
      return;
    }

    // Kapı kontrolü
    const gateIndex = gates.findIndex(g => g.row === newR && g.col === newC);
    if (gateIndex !== -1) {
      // Kapı kapalıysa soru tetikle
      playSound('tick');
      setActiveGate(gates[gateIndex]);
      setShowAnswerResult(false);
      setSelectedOpt(null);
      return;
    }

    playSound('tick');
    setPlayerPos({ r: newR, c: newC });

    // Hedef/Çıkış kontrolü
    if (newR === 5 && newC === 5) {
      playSound('complete');
      setGameStatus('ended');
    }
  };

  // Kapı Sorusu Cevap Seç
  const handleSelectOption = (opt: string) => {
    if (!activeGate || showAnswerResult) return;
    setSelectedOpt(opt);
    setShowAnswerResult(true);

    const isCorrect = opt === activeGate.question.correct;
    setIsAnswerCorrect(isCorrect);

    if (isCorrect) {
      playSound('success');
    } else {
      playSound('fail');
    }
  };

  // Sorudan Sonra Devam Et
  const handleContinue = () => {
    if (!activeGate) return;

    if (isAnswerCorrect) {
      // Kapıyı kaldır (açıldı)
      const updated = gates.filter(g => !(g.row === activeGate.row && g.col === activeGate.col));
      setGates(updated);

      // Karakteri o koordinata taşı
      setPlayerPos({ r: activeGate.row, c: activeGate.col });
    }

    setActiveGate(null);
    setShowAnswerResult(false);
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {gameStatus === 'intro' && (
        <div className="text-center flex flex-col items-center py-6">
          <Compass className="w-20 h-20 text-emerald-500 mb-4 animate-spin-slow" />
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase">
            Hazine Labirenti (Maze Quiz)
          </h3>
          <p className="text-xs text-slate-555 dark:text-slate-400 mt-2 max-w-md leading-relaxed">
            Karakterinizi hareket ettirerek labirentin sonundaki hazine sandığına (🏆) ulaşın! <br />
            Yolunuza çıkacak kilitli soru kapılarını açmak için dini sorulara doğru cevap verin. <br />
            Gri alanlar geçilmez duvarları temsil eder.
          </p>
          <button
            onClick={handleStart}
            className="mt-6 px-10 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-lg hover:shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yarışmayı Başlat! ➔
          </button>
        </div>
      )}

      {gameStatus === 'playing' && (
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

          {/* Sol Kolon: Harita Grid */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="bg-white dark:bg-slate-850 border-3 border-slate-200 dark:border-slate-700 p-4 rounded-[2.5rem] shadow-lg">
              <div className="grid grid-cols-6 gap-1 bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl">
                {Array.from({ length: gridSize }).map((_, r) =>
                  Array.from({ length: gridSize }).map((_, c) => {
                    const isPlayer = playerPos.r === r && playerPos.c === c;
                    const isGoal = r === 5 && c === 5;
                    const isWall = walls.includes(`${r}_${c}`);
                    const isGate = gates.some(g => g.row === r && g.col === c);

                    let cellStyle = "bg-white dark:bg-slate-800 text-slate-800 dark:text-white";
                    if (isWall) cellStyle = "bg-slate-300 dark:bg-slate-700";
                    if (isGate) cellStyle = "bg-amber-400 text-white animate-pulse border border-amber-500";

                    return (
                      <div
                        key={`${r}_${c}`}
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-black text-base shadow-sm relative ${cellStyle}`}
                      >
                        {isPlayer ? '🧑‍🚀' : isGoal ? '🏆' : isGate ? '🚪' : ''}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Yön Düğmeleri ve Soru Modalı */}
          <div className="lg:col-span-6 flex flex-col items-center gap-6">

            {/* Navigasyon Okları */}
            {!activeGate && (
              <div className="flex flex-col items-center gap-2 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-inner w-56">
                <button
                  onClick={() => handleMove('up')}
                  className="w-12 h-12 bg-white dark:bg-slate-800 border-2 border-slate-250 dark:border-slate-700 rounded-xl font-black text-base cursor-pointer shadow hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
                >
                  ▲
                </button>
                <div className="flex gap-2 justify-center w-full">
                  <button
                    onClick={() => handleMove('left')}
                    className="w-12 h-12 bg-white dark:bg-slate-800 border-2 border-slate-250 dark:border-slate-700 rounded-xl font-black text-base cursor-pointer shadow hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
                  >
                    ◀
                  </button>
                  <button
                    onClick={() => handleMove('down')}
                    className="w-12 h-12 bg-white dark:bg-slate-800 border-2 border-slate-250 dark:border-slate-700 rounded-xl font-black text-base cursor-pointer shadow hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
                  >
                    ▼
                  </button>
                  <button
                    onClick={() => handleMove('right')}
                    className="w-12 h-12 bg-white dark:bg-slate-800 border-2 border-slate-250 dark:border-slate-700 rounded-xl font-black text-base cursor-pointer shadow hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
                  >
                    ▶
                  </button>
                </div>
              </div>
            )}

            {/* Soru Modalı */}
            {activeGate && (
              <div className="w-full bg-white dark:bg-slate-800 border-3 border-amber-500 p-6 rounded-[2.5rem] shadow-xl flex flex-col gap-4 animate-scale-up">
                <span className="text-[9px] font-black text-amber-600 uppercase tracking-widest bg-amber-50 dark:bg-amber-950/40 px-3.5 py-1.5 rounded-full border border-amber-100 dark:border-amber-900/50 w-fit">
                  🔑 KİLİTLİ KAPI SORUSU
                </span>

                <p className="text-xs sm:text-sm font-bold text-slate-855 dark:text-white leading-relaxed mt-1">
                  "{activeGate.question.question}"
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                  {activeGate.question.options.map(opt => {
                    const isSelected = opt === selectedOpt;
                    const isCorrect = opt === activeGate.question.correct;

                    let btnStyle = "bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-750 border-slate-200 dark:border-slate-700 text-slate-850 dark:text-white cursor-pointer hover:scale-102 active:scale-98 text-left text-xs font-semibold leading-normal p-3 rounded-xl border flex items-center";
                    if (showAnswerResult) {
                      if (isCorrect) {
                        btnStyle = "bg-emerald-500 border-emerald-600 text-white pointer-events-none p-3 rounded-xl border flex items-center";
                      } else if (isSelected) {
                        btnStyle = "bg-rose-500 border-rose-600 text-white pointer-events-none p-3 rounded-xl border flex items-center";
                      } else {
                        btnStyle = "opacity-40 pointer-events-none bg-slate-100 dark:bg-slate-900 text-slate-400 p-3 rounded-xl border flex items-center";
                      }
                    }

                    return (
                      <button
                        key={opt}
                        onClick={() => handleSelectOption(opt)}
                        disabled={showAnswerResult}
                        className={btnStyle}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {showAnswerResult && (
                  <div className="w-full flex flex-col gap-3 mt-1 animate-scale-up">
                    <div className="p-3 bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-250 rounded-2xl text-[9px] font-semibold text-emerald-805 dark:text-emerald-450 leading-relaxed">
                      <strong>Doğru Cevap:</strong> {activeGate.question.correct} <br />
                      <strong>İlahi Hikmet:</strong> {activeGate.question.wisdom}
                    </div>

                    <button
                      onClick={handleContinue}
                      className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black uppercase text-xs tracking-wider rounded-xl cursor-pointer hover:scale-105 active:scale-95 transition-all shadow"
                    >
                      {isAnswerCorrect ? 'Kapıyı Aç ve İlerle 🔓' : 'Kapı Kilitli Kaldı 🚪'}
                    </button>
                  </div>
                )}
              </div>
            )}

          </div>

        </div>
      )}

      {gameStatus === 'ended' && (
        <div className="text-center flex flex-col items-center py-6 w-full max-w-md bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-8 rounded-[2.5rem] shadow-xl animate-scale-up">
          <Trophy className="w-16 h-16 text-yellow-500 animate-bounce mb-3" />
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
            Hazine Bulundu!
          </h3>
          <p className="text-xs text-slate-550 mt-2">
            Tüm kilitli kapıları aşarak labirentin sonundaki büyük hazineye ulaştınız!
          </p>

          <button
            onClick={handleStart}
            className="mt-6 w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yeniden Keşfet! ↩️
          </button>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 20. INDIVIDUAL GAME 16: KELİME ZİNCİRİ
// ==========================================
interface ChainLevel {
  words: (string | null)[]; // null olanlar boşluk
  options: string[];
  correctAnswers: string[];
}

interface TabooCard {
  word: string;
  forbidden: string[];
}

const TabooTermsGame: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const [gameStatus, setGameStatus] = useState<'intro' | 'playing' | 'ended'>('intro');
  const [cards, setCards] = useState<TabooCard[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [timer, setTimer] = useState<number>(60);
  const [score, setScore] = useState<number>(0);
  const [tabooCount, setTabooCount] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);

  const cardPool: TabooCard[] = [
    { word: "NAMAZ", forbidden: ["KILMAK", "SECCADE", "İBADET"] },
    { word: "ZEKAT", forbidden: ["PARA", "FAKİR", "YILDA BİR"] },
    { word: "KABE", forbidden: ["MEKKE", "HAC", "KIBLE"] },
    { word: "ORUÇ", forbidden: ["YEMEK", "SAHUR", "RAMAZAN"] },
    { word: "ABDEST", forbidden: ["SU", "YIKAMAK", "NAMAZ"] }
  ];

  useEffect(() => {
    if (gameStatus !== 'playing') return;

    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          playSound('complete');
          setGameStatus('ended');
          return 0;
        }
        if (prev <= 5) playSound('tick');
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [gameStatus]);

  const handleStart = () => {
    playSound('complete');
    // Kartları karıştır
    const shuffled = shuffleArray(cardPool);
    setCards(shuffled);
    setCurrentIdx(0);
    setTimer(60);
    setScore(0);
    setTabooCount(0);
    setCorrectCount(0);
    setGameStatus('playing');
  };

  const handleCorrect = () => {
    playSound('success');
    setScore(prev => prev + 100);
    setCorrectCount(prev => prev + 1);
    nextCard();
  };

  const handleTaboo = () => {
    playSound('fail');
    setScore(prev => Math.max(0, prev - 20));
    setTabooCount(prev => prev + 1);
    nextCard();
  };

  const nextCard = () => {
    if (currentIdx + 1 < cards.length) {
      setCurrentIdx(prev => prev + 1);
    } else {
      playSound('complete');
      setGameStatus('ended');
    }
  };

  const currentCard = cards[currentIdx];

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {gameStatus === 'intro' && (
        <div className="text-center flex flex-col items-center py-6">
          <Users className="w-20 h-20 text-teal-500 mb-4 animate-bounce" />
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase">
            Dini Terim Kartları (Tabu)
          </h3>
          <p className="text-xs text-slate-555 dark:text-slate-400 mt-2 max-w-md leading-relaxed">
            Arkadaşlarınıza en üstteki kelimeyi altındaki 3 yasaklı kelimeyi kullanmadan anlatın! <br />
            **60 saniye** içinde olabildiğince çok kelime anlatmaya çalışın.
          </p>
          <button
            onClick={handleStart}
            className="mt-6 px-10 py-3.5 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-lg hover:shadow-teal-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yarışmayı Başlat! ➔
          </button>
        </div>
      )}

      {gameStatus === 'playing' && currentCard && (
        <div className="w-full max-w-sm bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-8 rounded-[2.5rem] shadow-lg flex flex-col gap-6 items-center">

          <div className="flex justify-between w-full text-[10px] font-black text-slate-450 uppercase tracking-widest">
            <span>Süre: {timer}s</span>
            <span>Skor: {score} Puan</span>
          </div>

          {/* Tabu Kartı Tasarımı */}
          <div className="w-full bg-gradient-to-b from-teal-50 to-white dark:from-slate-900 dark:to-slate-850 border-3 border-teal-500 p-6 rounded-3xl flex flex-col items-center gap-4 shadow-md text-center">
            <span className="text-[9px] font-black text-teal-600 dark:text-teal-450 tracking-widest uppercase">ANLATILACAK KELİME</span>
            <span className="text-3xl font-display font-black text-teal-650 dark:text-teal-400 tracking-wider">
              {currentCard.word}
            </span>

            <div className="w-full h-px bg-teal-200 dark:bg-teal-900/60 my-2" />

            <span className="text-[9px] font-black text-rose-500 tracking-widest uppercase">YASAKLI KELİMELER</span>
            <div className="flex flex-col gap-2 w-full">
              {currentCard.forbidden.map(word => (
                <div key={word} className="py-2.5 bg-rose-50/50 dark:bg-rose-950/20 border border-rose-150 dark:border-rose-900/50 rounded-xl text-xs font-black text-rose-700 dark:text-rose-400 uppercase tracking-wider">
                  {word}
                </div>
              ))}
            </div>
          </div>

          {/* Aksiyon Butonları */}
          <div className="grid grid-cols-2 gap-4 w-full">
            <button
              onClick={handleTaboo}
              className="py-4 bg-gradient-to-r from-rose-550 to-red-550 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              TABU / PAS 🚫
            </button>
            <button
              onClick={handleCorrect}
              className="py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              DOĞRU ✔️
            </button>
          </div>

        </div>
      )}

      {gameStatus === 'ended' && (
        <div className="text-center flex flex-col items-center py-6 w-full max-w-md bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-8 rounded-[2.5rem] shadow-xl animate-scale-up">
          <Trophy className="w-16 h-16 text-yellow-500 animate-bounce mb-3" />
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
            Süre Bitti!
          </h3>
          <p className="text-xs text-slate-550 mt-2">
            Harika anlattınız! İşte skor özetiniz:
          </p>

          <div className="w-full flex flex-col gap-3 my-5 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-left text-xs font-bold text-slate-600 dark:text-slate-400">
            <div className="flex justify-between">
              <span>Doğru Kelimeler:</span>
              <span className="text-emerald-600">{correctCount}</span>
            </div>
            <div className="flex justify-between">
              <span>Tabu/Pas Sayısı:</span>
              <span className="text-rose-550">{tabooCount}</span>
            </div>
            <div className="h-px bg-slate-200 dark:bg-slate-800 my-1" />
            <div className="flex justify-between text-sm font-black">
              <span>TOPLAM SKOR:</span>
              <span className="text-indigo-650 dark:text-indigo-400">{score} Puan</span>
            </div>
          </div>

          <button
            onClick={handleStart}
            className="w-full py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:shadow-teal-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yeniden Oyna! ↩️
          </button>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 22. INDIVIDUAL GAME 18: EŞİNİ BUL (KELİME EŞLEME)
// ==========================================
interface MatchItem {
  id: string;
  concept: string;
  description: string;
}

const PairMatchingGame: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const [gameStatus, setGameStatus] = useState<'intro' | 'playing' | 'ended'>('intro');
  const [items, setItems] = useState<MatchItem[]>([]);
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null);
  const [selectedDesc, setSelectedDesc] = useState<string | null>(null);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);

  const pool: MatchItem[] = [
    { id: "1", concept: "ZEKAT", description: "Yılda bir kez malın kırkta birini fakire vermek." },
    { id: "2", concept: "ORUÇ", description: "İmsaktan akşama kadar ibadet amacıyla yememek." },
    { id: "3", concept: "KABE", description: "Mekke'de bulunan Müslümanların kutsal kıblesi." },
    { id: "4", concept: "SİYER", description: "Peygamber Efendimiz'in hayatını inceleyen dal." }
  ];

  const handleStart = () => {
    playSound('complete');
    setItems(pool);
    setSelectedConcept(null);
    setSelectedDesc(null);
    setMatchedIds([]);
    setScore(0);
    setGameStatus('playing');
  };

  const handleConceptSelect = (concept: string) => {
    if (gameStatus !== 'playing') return;
    playSound('tick');
    setSelectedConcept(concept);

    if (selectedDesc) {
      checkMatch(concept, selectedDesc);
    }
  };

  const handleDescSelect = (desc: string) => {
    if (gameStatus !== 'playing') return;
    playSound('tick');
    setSelectedDesc(desc);

    if (selectedConcept) {
      checkMatch(selectedConcept, desc);
    }
  };

  const checkMatch = (concept: string, desc: string) => {
    const itemCon = items.find(i => i.concept === concept);
    const itemDesc = items.find(i => i.description === desc);

    if (itemCon && itemDesc && itemCon.id === itemDesc.id) {
      // Eşleşti!
      playSound('success');
      setMatchedIds(prev => [...prev, itemCon.id]);
      setScore(prev => prev + 100);

      // Oyun bitti mi
      if (matchedIds.length + 1 === items.length) {
        setTimeout(() => {
          playSound('complete');
          setGameStatus('ended');
        }, 1000);
      }
    } else {
      playSound('fail');
    }

    // Seçimleri temizle
    setSelectedConcept(null);
    setSelectedDesc(null);
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {gameStatus === 'intro' && (
        <div className="text-center flex flex-col items-center py-6">
          <Trophy className="w-20 h-20 text-amber-500 mb-4 animate-bounce" />
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase">
            Eşini Bul (Kelime Eşleme)
          </h3>
          <p className="text-xs text-slate-555 dark:text-slate-400 mt-2 max-w-md leading-relaxed">
            Soldaki dini kavramları sağdaki doğru açıklamalarıyla eşleştirin! <br />
            Bir kavram ve bir açıklama seçtiğinizde eşleşme otomatik olarak kontrol edilecektir.
          </p>
          <button
            onClick={handleStart}
            className="mt-6 px-10 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-lg hover:shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yarışmayı Başlat! ➔
          </button>
        </div>
      )}

      {gameStatus === 'playing' && (
        <div className="w-full max-w-3xl bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-8 rounded-[2.5rem] shadow-lg flex flex-col gap-6 items-center">

          <div className="flex justify-between w-full text-[10px] font-black text-slate-450 uppercase tracking-widest">
            <span>Eşleşen: {matchedIds.length} / {items.length}</span>
            <span>Skor: {score} Puan</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-2">

            {/* Sol: Kavramlar */}
            <div className="flex flex-col gap-3">
              <span className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest text-center">KAVRAMLAR</span>
              {items.map(item => {
                const isMatched = matchedIds.includes(item.id);
                const isSelected = selectedConcept === item.concept;

                let borderStyle = "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white";
                if (isMatched) {
                  borderStyle = "border-emerald-500 bg-emerald-50/20 text-emerald-600 opacity-60 pointer-events-none";
                } else if (isSelected) {
                  borderStyle = "border-amber-500 bg-amber-50/20 text-amber-600 scale-102";
                }

                return (
                  <button
                    key={item.id}
                    onClick={() => handleConceptSelect(item.concept)}
                    disabled={isMatched}
                    className={`py-3.5 rounded-xl border-2 font-display font-black text-xs sm:text-sm uppercase tracking-wide cursor-pointer transition-all hover:scale-102 active:scale-98 ${borderStyle}`}
                  >
                    {item.concept}
                  </button>
                );
              })}
            </div>

            {/* Sağ: Açıklamalar (Karışık listelenmeli) */}
            <div className="flex flex-col gap-3">
              <span className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest text-center">AÇIKLAMALAR</span>
              {[...items].sort((a, b) => b.id.localeCompare(a.id)).map(item => {
                const isMatched = matchedIds.includes(item.id);
                const isSelected = selectedDesc === item.description;

                let borderStyle = "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white";
                if (isMatched) {
                  borderStyle = "border-emerald-500 bg-emerald-50/20 text-emerald-600 opacity-60 pointer-events-none";
                } else if (isSelected) {
                  borderStyle = "border-amber-500 bg-amber-50/20 text-amber-600 scale-102";
                }

                return (
                  <button
                    key={item.id}
                    onClick={() => handleDescSelect(item.description)}
                    disabled={isMatched}
                    className={`py-3.5 px-4 rounded-xl border-2 text-[10px] sm:text-xs font-semibold leading-normal text-left cursor-pointer transition-all hover:scale-102 active:scale-98 min-h-[58px] ${borderStyle}`}
                  >
                    {item.description}
                  </button>
                );
              })}
            </div>

          </div>

        </div>
      )}

      {gameStatus === 'ended' && (
        <div className="text-center flex flex-col items-center py-6 w-full max-w-md bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-8 rounded-[2.5rem] shadow-xl animate-scale-up">
          <Trophy className="w-16 h-16 text-yellow-500 animate-bounce mb-3" />
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
            Harika Eşleme!
          </h3>
          <p className="text-xs text-slate-550 mt-2">
            Tüm dini kavramları açıklamalarıyla doğru şekilde eşleştirdiniz!
          </p>

          <div className="w-full flex flex-col gap-2 my-5 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl">
            <span className="text-[10px] font-black text-slate-450 uppercase tracking-widest">TOPLAM PUAN</span>
            <span className="text-2xl font-display font-black text-emerald-600 dark:text-emerald-450 tracking-wider mt-1">
              {score} Puan
            </span>
          </div>

          <button
            onClick={handleStart}
            className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yeniden Oyna! ↩️
          </button>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 23. INDIVIDUAL GAME 19: BALON PATLATMACA
// ==========================================
interface BalloonQuestion {
  question: string;
  correct: string;
  wrongOptions: string[];
}

const ChestGuardianGame: React.FC<{
  isDarkMode: boolean;
  teams: Team[];
  setTeams: React.Dispatch<React.SetStateAction<Team[]>>;
  teamCount: number;
}> = ({ isDarkMode, teams, setTeams, teamCount }) => {
  const [gameStatus, setGameStatus] = useState<'intro' | 'playing' | 'ended'>('intro');
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [questions, setQuestions] = useState<UnifiedQuizQuestion[]>([]);
  const [chests, setChests] = useState<number[]>([]);
  const [activeTeamIdx, setActiveTeamIdx] = useState<number>(0);
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const handleStart = () => {
    playSound('complete');

    // Soruları seç
    const pool = getCurriculumQuizQuestions();
    const unusedPool = filterUnusedQuestions(pool);
    const finalPool = unusedPool.length >= 5 ? unusedPool : pool;
    const shuffled = shuffleArray(finalPool).slice(0, 5);
    shuffled.forEach(q => markQuestionAsUsed(q.id));

    setQuestions(shuffled);
    setCurrentIdx(0);

    // Takım sandıklarını 500 altına eşitle
    setChests(Array(teamCount).fill(500));
    setActiveTeamIdx(0);
    setSelectedOpt(null);
    setShowFeedback(false);
    setGameStatus('playing');
  };

  const handleSelectOption = (opt: string) => {
    if (showFeedback) return;
    setSelectedOpt(opt);
    setShowFeedback(true);

    const check = opt === questions[currentIdx].correct;
    setIsCorrect(check);

    if (check) {
      playSound('success');
      // Aktif takıma +150 altın
      setChests(prev => {
        const next = [...prev];
        next[activeTeamIdx] += 150;
        return next;
      });
      // Puan tablosunu senkronize et
      setTeams(prev => prev.map((t, idx) => idx === activeTeamIdx ? { ...t, score: t.score + 150 } : t));
    } else {
      playSound('fail');
      // Aktif takımdan -100 altın gitmesi ve diğer takımlara paylaştırılması (Yağma)
      setChests(prev => {
        const next = [...prev];
        const loss = Math.min(next[activeTeamIdx], 100);
        next[activeTeamIdx] -= loss;

        const share = Math.floor(loss / (teamCount - 1 || 1));
        return next.map((val, idx) => idx === activeTeamIdx ? val : val + share);
      });

      setTeams(prev => {
        const loss = 100;
        const share = Math.floor(loss / (teamCount - 1 || 1));
        return prev.map((t, idx) => idx === activeTeamIdx ? { ...t, score: Math.max(0, t.score - loss) } : { ...t, score: t.score + share });
      });
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < questions.length) {
      playSound('complete');
      setCurrentIdx(prev => prev + 1);

      // Sıradaki takıma geç
      const nextTeam = (activeTeamIdx + 1) % teamCount;
      setActiveTeamIdx(nextTeam);

      // bottom tab aktif takım senkronu
      setTeams(prev => prev.map((t, idx) => ({ ...t, active: idx === nextTeam })));

      setSelectedOpt(null);
      setShowFeedback(false);
    } else {
      playSound('complete');
      setGameStatus('ended');
    }
  };

  const currentQ = questions[currentIdx];

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {gameStatus === 'intro' && (
        <div className="text-center flex flex-col items-center py-6">
          <Award className="w-20 h-20 text-yellow-500 mb-4 animate-bounce" />
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase">
            Hazine Sandığı Koruyucusu (Takım)
          </h3>
          <p className="text-xs text-slate-555 dark:text-slate-400 mt-2 max-w-md leading-relaxed">
            Takımınızın hazine sandığını koruyun! <br />
            Her takım 500 altınla başlar. Soruyu doğru bilirseniz sandığınıza **150 altın** eklenir. <br />
            Yanlış bilirseniz sandığınızdan **100 altın yağmalanır** ve diğer takımlara dağıtılır!
          </p>
          <button
            onClick={handleStart}
            className="mt-6 px-10 py-3.5 bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-lg hover:shadow-yellow-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yarışmayı Başlat! ➔
          </button>
        </div>
      )}

      {gameStatus === 'playing' && currentQ && (
        <div className="w-full max-w-3xl bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-8 rounded-[2.5rem] shadow-lg flex flex-col gap-6 items-center">

          {/* Sandık Durum Panelleri */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
            {Array.from({ length: teamCount }).map((_, idx) => {
              const active = idx === activeTeamIdx;
              return (
                <div
                  key={idx}
                  className={`p-4 border-2 rounded-2xl text-center flex flex-col gap-1 shadow-sm ${active
                      ? 'border-yellow-500 bg-yellow-50/20 dark:bg-yellow-950/20 scale-102 font-black text-yellow-650 dark:text-yellow-450 animate-pulse'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-350'
                    }`}
                >
                  <span className="text-[8px] font-black uppercase tracking-widest">TAKIM {idx + 1}</span>
                  <span className="text-lg font-display font-black">💰 {chests[idx]} Altın</span>
                </div>
              );
            })}
          </div>

          <div className="w-full h-px bg-slate-200 dark:bg-slate-800 my-1" />

          {/* Soru */}
          <span className="text-[9px] font-black text-yellow-600 dark:text-yellow-450 uppercase tracking-widest bg-yellow-50 dark:bg-yellow-950/40 px-3.5 py-1.5 rounded-full border border-yellow-100 dark:border-yellow-900/50">
            🎯 SIRA: TAKIM {activeTeamIdx + 1} GÖREVLİSİNDE
          </span>

          <p className="text-base sm:text-lg font-bold text-slate-800 dark:text-white leading-relaxed text-center max-w-xl">
            "{currentQ.question}"
          </p>

          {/* Şıklar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {currentQ.options.map(opt => {
              const isSelected = opt === selectedOpt;
              const isCorrectOpt = opt === currentQ.correct;

              let btnStyle = "bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-750 border-slate-200 dark:border-slate-700 text-slate-850 dark:text-white cursor-pointer hover:scale-102 active:scale-98 text-left text-xs font-semibold leading-normal p-4 rounded-xl border flex items-center";
              if (showFeedback) {
                if (isCorrectOpt) {
                  btnStyle = "bg-emerald-500 border-emerald-600 text-white pointer-events-none p-4 rounded-xl border flex items-center";
                } else if (isSelected) {
                  btnStyle = "bg-rose-500 border-rose-600 text-white pointer-events-none p-4 rounded-xl border flex items-center";
                } else {
                  btnStyle = "opacity-40 pointer-events-none bg-slate-100 dark:bg-slate-900 text-slate-400 p-4 rounded-xl border flex items-center";
                }
              }

              return (
                <button
                  key={opt}
                  onClick={() => handleSelectOption(opt)}
                  disabled={showFeedback}
                  className={btnStyle}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {/* Devam */}
          {showFeedback && (
            <div className="w-full flex flex-col gap-4 mt-2 animate-scale-up">
              <span className={`text-xs font-black uppercase tracking-wider text-center block ${isCorrect ? 'text-emerald-600' : 'text-rose-500 animate-shake'}`}>
                {isCorrect ? '🎉 Muhteşem Savunma! Sandığınız Korundu ve Altın Kazanıldı.' : '💥 Eyvah! Sandık Yağmalandı ve Altınlar Paylaştırıldı.'}
              </span>

              <button
                onClick={handleNext}
                className="w-full py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                {currentIdx + 1 === questions.length ? 'Sonuçları Gör ➔' : 'Sonraki Takıma Geç ➔'}
              </button>
            </div>
          )}

        </div>
      )}

      {gameStatus === 'ended' && (
        <div className="text-center flex flex-col items-center py-6 w-full max-w-md bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-8 rounded-[2.5rem] shadow-xl animate-scale-up">
          <Trophy className="w-16 h-16 text-yellow-500 animate-bounce mb-3" />
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
            Yarışma Bitti!
          </h3>
          <p className="text-xs text-slate-500 mt-2">
            İşte şampiyon takımlarımızın sandık altın durumları:
          </p>

          <div className="w-full flex flex-col gap-2 my-5 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl">
            {chests.map((val, idx) => (
              <div key={idx} className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-350">
                <span>Takım {idx + 1}:</span>
                <span className="text-yellow-600 font-black">💰 {val} Altın</span>
              </div>
            ))}
          </div>

          <button
            onClick={handleStart}
            className="w-full py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:shadow-yellow-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yeniden Oyna! ↩️
          </button>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 26. TEAM GAME 6: CENNET YOLU
// ==========================================
const HeavenPathGame: React.FC<{
  isDarkMode: boolean;
  teams: Team[];
  setTeams: React.Dispatch<React.SetStateAction<Team[]>>;
  teamCount: number;
}> = ({ isDarkMode, teams, setTeams, teamCount }) => {
  const [gameStatus, setGameStatus] = useState<'intro' | 'playing' | 'ended'>('intro');
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [questions, setQuestions] = useState<UnifiedQuizQuestion[]>([]);
  const [positions, setPositions] = useState<number[]>([]); // Takım piyon basamakları (0 - 9)
  const [activeTeamIdx, setActiveTeamIdx] = useState<number>(0);
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [diceResult, setDiceResult] = useState<number>(0);

  const handleStart = () => {
    playSound('complete');
    const pool = getCurriculumQuizQuestions();
    const unusedPool = filterUnusedQuestions(pool);
    const finalPool = unusedPool.length >= 10 ? unusedPool : pool;
    const shuffled = shuffleArray(finalPool).slice(0, 10);
    shuffled.forEach(q => markQuestionAsUsed(q.id));

    setQuestions(shuffled);
    setCurrentIdx(0);
    setPositions(Array(teamCount).fill(0));
    setActiveTeamIdx(0);
    setSelectedOpt(null);
    setShowFeedback(false);
    setGameStatus('playing');
  };

  const handleSelectOption = (opt: string) => {
    if (showFeedback) return;
    setSelectedOpt(opt);
    setShowFeedback(true);

    const check = opt === questions[currentIdx].correct;
    setIsCorrect(check);

    if (check) {
      playSound('success');
      // Rastgele 1 veya 2 adım ilerlet
      const steps = Math.floor(Math.random() * 2) + 1;
      setDiceResult(steps);

      setPositions(prev => {
        const next = [...prev];
        next[activeTeamIdx] = Math.min(9, next[activeTeamIdx] + steps);
        return next;
      });

      // Puan senkronu
      setTeams(prev => prev.map((t, idx) => idx === activeTeamIdx ? { ...t, score: t.score + steps * 50 } : t));

      // Cennete ulaştı mı
      const nextPos = Math.min(9, positions[activeTeamIdx] + steps);
      if (nextPos === 9) {
        setTimeout(() => {
          playSound('complete');
          setGameStatus('ended');
        }, 1500);
      }
    } else {
      playSound('fail');
      setDiceResult(0);
    }
  };

  const handleNext = () => {
    if (gameStatus === 'ended') return;

    if (currentIdx + 1 < questions.length) {
      playSound('complete');
      setCurrentIdx(prev => prev + 1);

      // Sıradaki takım
      const nextTeam = (activeTeamIdx + 1) % teamCount;
      setActiveTeamIdx(nextTeam);

      // bottom tab aktif takım senkronu
      setTeams(prev => prev.map((t, idx) => ({ ...t, active: idx === nextTeam })));

      setSelectedOpt(null);
      setShowFeedback(false);
    } else {
      playSound('complete');
      setGameStatus('ended');
    }
  };

  const currentQ = questions[currentIdx];

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {gameStatus === 'intro' && (
        <div className="text-center flex flex-col items-center py-6">
          <Compass className="w-20 h-20 text-emerald-500 mb-4 animate-spin-slow" />
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase">
            Cennet Yolu (Takım)
          </h3>
          <p className="text-xs text-slate-555 dark:text-slate-400 mt-2 max-w-md leading-relaxed">
            Soruları bilerek piyonunuzu adımlarla ilerletin! <br />
            Doğru bilindiğinde zar atılır ve takım piyonu **1 veya 2 adım** ilerler. <br />
            10. basamağa (Cennet Kapısı 🌟) piyonunu ilk ulaştıran takım oyunu kazanır!
          </p>
          <button
            onClick={handleStart}
            className="mt-6 px-10 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-lg hover:shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yarışmayı Başlat! ➔
          </button>
        </div>
      )}

      {gameStatus === 'playing' && currentQ && (
        <div className="w-full max-w-4xl bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-8 rounded-[2.5rem] shadow-lg flex flex-col gap-6 items-center">

          {/* Yol (Stepping Stones) Görseli */}
          <div className="flex flex-col gap-2 w-full">
            <span className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest text-center">CENNET YOLU HARİTASI</span>
            <div className="grid grid-cols-10 gap-1.5 p-3 bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-850 rounded-2xl w-full min-h-[75px] items-center">
              {Array.from({ length: 10 }).map((_, stepIdx) => {
                const isGoal = stepIdx === 9;

                // Bu basamakta duran takımların baş harfleri
                const activePawns: string[] = [];
                positions.forEach((pos, teamIdx) => {
                  if (pos === stepIdx) {
                    activePawns.push(`T${teamIdx + 1}`);
                  }
                });

                let stoneStyle = "bg-white dark:bg-slate-800 border-2 border-slate-250 dark:border-slate-700 text-slate-800 dark:text-white";
                if (isGoal) stoneStyle = "bg-gradient-to-br from-yellow-400 to-amber-500 text-white font-black animate-pulse border-amber-500";

                return (
                  <div
                    key={stepIdx}
                    className={`h-12 rounded-xl flex flex-col items-center justify-center relative shadow-sm text-[9px] font-semibold gap-1 ${stoneStyle}`}
                  >
                    <span>{isGoal ? '🌟 G' : `Adım ${stepIdx}`}</span>
                    <div className="flex gap-1">
                      {activePawns.map((p, pIdx) => {
                        const colors = ['bg-indigo-500', 'bg-orange-500', 'bg-red-500', 'bg-purple-500'];
                        return (
                          <span key={pIdx} className={`w-3.5 h-3.5 rounded-full ${colors[pIdx % 4]} text-white font-black text-[7px] flex items-center justify-center shadow`}>
                            {p}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full h-px bg-slate-200 dark:bg-slate-800 my-1" />

          {/* Soru */}
          <span className="text-[9px] font-black text-indigo-500 uppercase tracking-widest bg-indigo-50 dark:bg-indigo-950/40 px-3.5 py-1.5 rounded-full border border-indigo-100 dark:border-indigo-900/50">
            🎯 SIRA: TAKIM {activeTeamIdx + 1} GÖREVLİSİNDE
          </span>

          <p className="text-base sm:text-lg font-bold text-slate-800 dark:text-white leading-relaxed text-center max-w-xl">
            "{currentQ.question}"
          </p>

          {/* Şıklar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {currentQ.options.map(opt => {
              const isSelected = opt === selectedOpt;
              const isCorrectOpt = opt === currentQ.correct;

              let btnStyle = "bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-750 border-slate-200 dark:border-slate-700 text-slate-850 dark:text-white cursor-pointer hover:scale-102 active:scale-98 text-left text-xs font-semibold leading-normal p-4 rounded-xl border flex items-center";
              if (showFeedback) {
                if (isCorrectOpt) {
                  btnStyle = "bg-emerald-500 border-emerald-600 text-white pointer-events-none p-4 rounded-xl border flex items-center";
                } else if (isSelected) {
                  btnStyle = "bg-rose-500 border-rose-600 text-white pointer-events-none p-4 rounded-xl border flex items-center";
                } else {
                  btnStyle = "opacity-40 pointer-events-none bg-slate-100 dark:bg-slate-900 text-slate-400 p-4 rounded-xl border flex items-center";
                }
              }

              return (
                <button
                  key={opt}
                  onClick={() => handleSelectOption(opt)}
                  disabled={showFeedback}
                  className={btnStyle}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {/* Devam */}
          {showFeedback && (
            <div className="w-full flex flex-col gap-4 mt-2 animate-scale-up">
              <span className={`text-xs font-black uppercase tracking-wider text-center block ${isCorrect ? 'text-emerald-600' : 'text-rose-500 animate-shake'}`}>
                {isCorrect ? `🎉 Doğru! Atılan Zar: +${diceResult} Adım İlerleme.` : '💥 Yanlış! Piyonunuz yerinde kaldı.'}
              </span>

              <button
                onClick={handleNext}
                className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                {currentIdx + 1 === questions.length ? 'Sonuçları Gör ➔' : 'Sonraki Takıma Geç ➔'}
              </button>
            </div>
          )}

        </div>
      )}

      {gameStatus === 'ended' && (
        <div className="text-center flex flex-col items-center py-6 w-full max-w-md bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-8 rounded-[2.5rem] shadow-xl animate-scale-up">
          <Trophy className="w-16 h-16 text-yellow-500 animate-bounce mb-3" />
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
            Kapıya Ulaşıldı!
          </h3>
          <p className="text-xs text-slate-550 mt-2">
            Cennet Kapısına 🌟 ilk ulaşan takım galip geldi! İşte son konumlar:
          </p>

          <div className="w-full flex flex-col gap-2 my-5 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl">
            {positions.map((val, idx) => (
              <div key={idx} className="flex justify-between text-xs font-bold text-slate-750 dark:text-slate-350">
                <span>Takım {idx + 1}:</span>
                <span className="text-emerald-600 font-black">{val === 9 ? 'Kapıda! 🌟' : `${val}. Adımda`}</span>
              </div>
            ))}
          </div>

          <button
            onClick={handleStart}
            className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yeniden Oyna! ↩️
          </button>
        </div>
      )}
    </div>
  );
};