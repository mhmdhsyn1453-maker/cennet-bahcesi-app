import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Award, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Lightbulb, 
  Library, 
  Heart, 
  Star, 
  Compass, 
  Calendar, 
  BookOpenCheck, 
  Sparkles, 
  Check, 
  X, 
  ChevronRight,
  Info,
  Maximize2,
  Minimize2,
  EyeOff,
  Eye,
  Landmark,
  Sun,
  Moon,
  Volume2,
  VolumeX
} from 'lucide-react';
import { playSound } from './BuzzerAndTimer';
import { WEEKLY_CURRICULUM, WeekCurriculum, DayTopics, Lesson, Slide, lessonToSlides } from '../data/curriculumData';

// Helper function to dynamically map week & day to real academic calendar dates
export function getDayDate(weekNum: number, dayName: string): string {
  const mapping: Record<number, Record<string, string>> = {
    1: { "Pazartesi": "6 Temmuz", "Salı": "7 Temmuz", "Çarşamba": "8 Temmuz", "Perşembe": "9 Temmuz" },
    2: { "Pazartesi": "13 Temmuz", "Salı": "14 Temmuz", "Çarşamba": "15 Temmuz", "Perşembe": "16 Temmuz" },
    3: { "Pazartesi": "20 Temmuz", "Salı": "21 Temmuz", "Çarşamba": "22 Temmuz", "Perşembe": "23 Temmuz" },
    4: { "Pazartesi": "27 Temmuz", "Salı": "28 Temmuz", "Çarşamba": "29 Temmuz", "Perşembe": "30 Temmuz" },
    5: { "Pazartesi": "3 Ağustos", "Salı": "4 Ağustos", "Çarşamba": "5 Ağustos", "Perşembe": "6 Ağustos" },
  };
  return mapping[weekNum]?.[dayName] || "";
}

export interface DersPortalProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isMusicPlaying: boolean;
  togglePlayMusic: () => void;
  isAnimatedBg: boolean;
  toggleAnimatedBg: () => void;
  isFocused: boolean;
  setIsFocused: (focused: boolean) => void;
}

export const DersPortal: React.FC<DersPortalProps> = ({
  isDarkMode,
  toggleDarkMode,
  isMusicPlaying,
  togglePlayMusic,
  isAnimatedBg,
  toggleAnimatedBg,
  isFocused,
  setIsFocused
}) => {
  const [selectedWeekNum, setSelectedWeekNum] = useState<number>(1);
  const [selectedDayIdx, setSelectedDayIdx] = useState<number>(0);
  
  // Persistent local storage curriculum state
  const [curriculum, setCurriculum] = useState<WeekCurriculum[]>(() => {
    try {
      const saved = localStorage.getItem('cennet_bahcesi_mufredat_v4');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Müfredat yüklenirken hata oluştu:', e);
    }
    return WEEKLY_CURRICULUM;
  });

  // Active interactive presentation states
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [quizSuccess, setQuizSuccess] = useState<boolean | null>(null);

  // Cinematic full-screen/focus mode state
  const [showCoachInFocused, setShowCoachInFocused] = useState<boolean>(false);

  // Derived slides from the active lesson
  const currentSlides: Slide[] = activeLesson ? lessonToSlides(activeLesson) : [];
  const currentSlide: Slide | null = currentSlides[slideIndex] || null;
  const totalSlides = currentSlides.length;
  const isFirstSlide = slideIndex === 0;
  const isLastSlide = slideIndex === totalSlides - 1;

  const activeWeek = curriculum.find(w => w.weekNum === selectedWeekNum) || curriculum[0];
  const activeDay = activeWeek.days[selectedDayIdx] || activeWeek.days[0];

  // Listener for ESC key to quit immersive focus mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFocused(false);
      }
      // Arrow key navigation for slides
      if (activeLesson && currentSlides.length > 0) {
        if (e.key === 'ArrowRight' && !isLastSlide) {
          handleNextSlide();
        } else if (e.key === 'ArrowLeft' && !isFirstSlide) {
          handlePrevSlide();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLesson, slideIndex, currentSlides.length]);

  const handleStartLesson = (lesson: Lesson) => {
    setActiveLesson(lesson);
    setSlideIndex(0);
    setSelectedOption(null);
    setQuizSuccess(null);
    playSound('tick');
  };

  const handleNextSlide = () => {
    if (slideIndex < totalSlides - 1) {
      setSlideIndex(slideIndex + 1);
      setSelectedOption(null);
      setQuizSuccess(null);
      playSound('tick');
    }
  };

  const handlePrevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
      setSelectedOption(null);
      setQuizSuccess(null);
      playSound('tick');
    }
  };

  const handleAnswerQuiz = (selected: string) => {
    if (!currentSlide || currentSlide.type !== 'quiz') return;
    setSelectedOption(selected);
    if (selected === currentSlide.correct) {
      setQuizSuccess(true);
      playSound('success');
    } else {
      setQuizSuccess(false);
      playSound('fail');
    }
  };

  const disciplineLabels: Record<string, { desc: string; icon: any; color: string; bg: string; text: string }> = {
    'İTİKAD': { desc: 'İnanç Esasları', icon: Shield, color: 'emerald', bg: 'bg-emerald-50 border-emerald-205 text-emerald-800', text: 'text-emerald-700' },
    'İBADET': { desc: 'Amel ve Fıkıh', icon: Star, color: 'amber', bg: 'bg-amber-50 border-amber-205 text-amber-850', text: 'text-amber-805' },
    'SİYER': { desc: 'Peygamberimiz\'in Hayatı', icon: Compass, color: 'indigo', bg: 'bg-indigo-50 border-indigo-205 text-indigo-850', text: 'text-indigo-805' },
    'AHLAK': { desc: 'Güzel Değerler', icon: Heart, color: 'rose', bg: 'bg-rose-50 border-rose-250 text-rose-850', text: 'text-rose-805' },
  };

  function Shield(props: any) {
    return <BookOpenCheck {...props} />;
  }

  // Save modified curriculum to state and localStorage
  const saveCurriculum = (newCurriculum: WeekCurriculum[]) => {
    setCurriculum(newCurriculum);
    try {
      localStorage.setItem('cennet_bahcesi_mufredat_v4', JSON.stringify(newCurriculum));
    } catch (e) {
      console.error('Müfredat kaydedilemedi:', e);
    }
  };



  return (
    <div className="max-w-7xl mx-auto px-4 py-4 w-full relative z-10" id="mufredat-icerikleri-v2">
      <AnimatePresence mode="wait">
        {!activeLesson ? (
          <motion.div
            key="mufredat-dashboard"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-6"
          >
            {/* Spectacular Heading Banner with Global Options */}
            <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 border-b-6 border-amber-700 p-6 rounded-[2.5rem] shadow-md flex flex-col md:flex-row items-center justify-between gap-4 relative overflow-hidden text-white">
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md border-2 border-white rounded-3xl flex items-center justify-center text-white shadow-inner shrink-0 animate-fade-in">
                  <Landmark className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="font-display font-black text-2xl tracking-normal uppercase">DERS İÇERİKLERİ</h2>
                  <p className="text-sm font-medium text-white/90">Siyer, İnanç ve Ahlak dersleri için hazırlanmış interaktif slayt sunumları.</p>
                </div>
              </div>
              
              <div className="relative z-10 flex flex-wrap items-center gap-3 shrink-0">
                <div className="px-4 py-2 bg-white/20 border border-white/35 rounded-2xl text-center text-white font-black shadow-sm">
                  <span className="text-[9.5px] uppercase tracking-wider block text-white/80">AKTİF EĞİTİM YILI:</span>
                  <span className="text-sm">2026 YAZ MÜFREDATI</span>
                </div>
              </div>
            </div>

            {/* Week Selection Horizontal Bar */}
            <div className="flex flex-row gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200 w-full shadow-inner">
              {curriculum.map((w) => {
                const isSelected = selectedWeekNum === w.weekNum;
                return (
                  <button
                    key={w.weekNum}
                    onClick={() => { setSelectedWeekNum(w.weekNum); setSelectedDayIdx(0); playSound('tick'); }}
                    className={`py-2.5 px-4 rounded-full text-xs font-black tracking-wide transition-all uppercase cursor-pointer flex-1 flex flex-col items-center justify-center ${
                      isSelected
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/25 transform scale-[1.01]'
                        : 'bg-transparent text-slate-650 hover:text-slate-900 hover:bg-white/60'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 justify-center">
                      <Calendar className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-white' : 'text-slate-450'}`} />
                      <span className="font-extrabold">{w.weekNum}. Hafta</span>
                    </div>
                    <span className={`block text-[8px] font-bold opacity-85 mt-0.5 ${isSelected ? 'text-amber-50' : 'text-slate-400'}`}>{w.dateRange}</span>
                  </button>
                );
              })}
            </div>

            {/* Inner Dashboard Layout: Day Tabs & Lessons display side-by-side */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Days of Week Selector with Real Dates Built-in */}
              <div className="lg:col-span-4 bg-white border border-slate-200/80 rounded-[2.25rem] p-5 shadow-sm space-y-4">
                <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-extrabold tracking-widest text-slate-405 uppercase">HAFTALIK TAKVİM</span>
                  <Library className="w-4 h-4 text-amber-500" />
                </div>

                <div className="flex flex-col gap-3">
                  {activeWeek.days.map((d, index) => {
                    const isSelected = selectedDayIdx === index;
                    const meta = disciplineLabels[d.discipline] || { desc: '', color: 'slate', bg: 'bg-slate-50', icon: BookOpenCheck, text: 'text-slate-800' };
                    const disciplineColors: Record<string, { border: string, bg: string, text: string, accent: string }> = {
                      'İTİKAD': { border: 'border-emerald-250', bg: 'bg-emerald-50/50', text: 'text-emerald-805', accent: 'bg-emerald-500' },
                      'İBADET': { border: 'border-amber-250', bg: 'bg-amber-50/50', text: 'text-amber-850', accent: 'bg-amber-500' },
                      'SİYER': { border: 'border-indigo-250', bg: 'bg-indigo-50/50', text: 'text-indigo-850', accent: 'bg-indigo-500' },
                      'AHLAK': { border: 'border-rose-250', bg: 'bg-rose-50/50', text: 'text-rose-850', accent: 'bg-rose-500' },
                    };
                    const colors = disciplineColors[d.discipline] || { border: 'border-slate-250', bg: 'bg-slate-50/50', text: 'text-slate-800', accent: 'bg-slate-500' };

                    return (
                      <div
                        key={d.dayName}
                        onClick={() => { setSelectedDayIdx(index); playSound('tick'); }}
                        className={`p-4 rounded-[1.25rem] border transition-all duration-305 cursor-pointer relative overflow-hidden flex flex-col justify-between min-h-[90px] ${
                          isSelected
                            ? `${colors.bg} ${colors.border} shadow-md shadow-slate-100 scale-[1.01]`
                            : 'bg-white hover:bg-slate-50 border-slate-100 hover:border-slate-205'
                        }`}
                      >
                        {/* Selected Left Accent Indicator Line */}
                        {isSelected && (
                          <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${colors.accent}`} />
                        )}
                        <div className="flex items-center justify-between mb-1.5 pl-1">
                          <div className="flex flex-col">
                            <span className={`text-sm font-extrabold uppercase tracking-wide ${isSelected ? 'text-slate-900' : 'text-slate-650'}`}>
                              {d.dayName}
                            </span>
                            <span className={`text-[10.5px] font-bold mt-0.5 ${isSelected ? colors.text : 'text-slate-450'}`}>
                              {getDayDate(selectedWeekNum, d.dayName)}
                            </span>
                          </div>
                          <span className={`px-2.5 py-0.5 rounded-lg text-[8.5px] font-extrabold tracking-wider uppercase border ${
                            isSelected 
                              ? `${colors.bg} ${colors.border} ${colors.text}` 
                              : `${meta.bg}`
                          }`}>
                            {d.discipline}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 pl-1 font-medium italic">
                          {meta.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Week summary card */}
                <div className="mt-6 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl p-4 border border-emerald-500/10 shadow-inner">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="text-xs">🎯</span>
                    <span className="text-[10px] font-extrabold text-emerald-800 uppercase tracking-wider block">Haftalık Hedef Özeti</span>
                  </div>
                  <p className="text-xs text-slate-650 font-semibold leading-relaxed">
                    {activeWeek.summary}
                  </p>
                </div>
              </div>

              {/* Right Column: Lessons of the selected Day */}
              <div className="lg:col-span-8 space-y-4">
                <div className="bg-white border border-slate-205 rounded-[1.5rem] p-4 shadow-sm flex items-center justify-between gap-2 overflow-x-auto">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-black text-slate-700 whitespace-nowrap">
                      {activeDay.dayName.toUpperCase()} ({getDayDate(selectedWeekNum, activeDay.dayName)})
                    </span>
                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">
                      ➔ {disciplineLabels[activeDay.discipline]?.desc.toUpperCase() || ''} DERS PLANI
                    </span>
                  </div>
                </div>

                {/* Dynamic List of Lessons */}
                <div className="flex flex-col gap-4">
                  {activeDay.lessons.length === 0 ? (
                    <div className="bg-white border border-dashed border-slate-205 rounded-[2.25rem] p-8 text-center text-slate-400 shadow-sm">
                      <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-2" />
                      <p className="text-xs font-bold">Bugün için planlanmış bir ders konusu bulunmuyor.</p>
                    </div>
                  ) : (
                    activeDay.lessons.map((lesson) => {
                      const meta = disciplineLabels[activeDay.discipline] || { desc: '', color: 'slate', bg: 'bg-slate-50', icon: BookOpenCheck, text: 'text-slate-700' };
                      const disciplineGradients: Record<string, string> = {
                        'İTİKAD': 'from-emerald-500 to-teal-500',
                        'İBADET': 'from-amber-500 to-orange-500',
                        'SİYER': 'from-indigo-500 to-blue-500',
                        'AHLAK': 'from-rose-500 to-pink-500',
                      };
                      const gradient = disciplineGradients[activeDay.discipline] || 'from-slate-500 to-slate-650';
                      return (
                        <div
                          key={lesson.id}
                          className="group bg-white border border-slate-200/80 rounded-[2.25rem] p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 relative overflow-hidden"
                        >
                          {/* Top Decorative Gradient Accent Line */}
                          <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${gradient}`} />

                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 border-b border-slate-105 mb-4 mt-1">
                            <div className="flex items-center gap-2">
                              <span className="w-7 h-7 bg-slate-50 border border-slate-200 text-slate-700 font-extrabold rounded-lg flex items-center justify-center text-xs shadow-inner">
                                {lesson.lessonNumber}
                              </span>
                              <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">
                                DERS SIRALAMASI
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className={`px-2.5 py-0.5 rounded-full text-[8.5px] font-extrabold uppercase border tracking-wider shadow-sm ${meta.bg}`}>
                                {activeDay.discipline}
                              </span>
                            </div>
                          </div>

                          <h3 className="font-display font-black text-lg sm:text-xl text-slate-800 tracking-tight leading-tight mb-3">
                            {lesson.title}
                          </h3>

                          {/* Outcomes (Kazanımlar list) */}
                          {lesson.outcomes && lesson.outcomes.length > 0 && (
                            <div className="space-y-1.5 mb-4 bg-slate-50/50 rounded-2xl p-4 border border-slate-100/80">
                              <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">DERS KAZANIMLARI:</span>
                              {lesson.outcomes.map((out, idx) => (
                                <p key={idx} className="text-xs text-slate-600 font-semibold flex items-start gap-1.5 leading-relaxed">
                                  <span className="text-emerald-500 mt-0.5">✓</span>
                                  {out}
                                </p>
                              ))}
                            </div>
                          )}

                          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-slate-100">
                            <div className="flex items-center gap-2 text-[10.5px] text-amber-700 font-extrabold">
                              <span className="p-1 bg-amber-50 rounded animate-pulse">📝</span>
                              <span>40 Dakikalık Akıllı Tahta Akışı & Sunum Notları Hazır</span>
                            </div>
                            
                            <div className="flex items-center gap-2 w-full sm:w-auto">
                              <button
                                onClick={() => handleStartLesson(lesson)}
                                className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 bg-slate-900 hover:bg-emerald-600 text-white rounded-2xl font-display text-xs font-black shadow-sm shrink-0 transition-all duration-300 hover:shadow-md active:scale-95 cursor-pointer"
                              >
                                İnteraktif Sınıf Sunumunu Aç <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>

            </div>
          </motion.div>
        ) : (
          <motion.div
            key="lesson-interactive-viewport"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            className={isFocused ? "" : "w-full max-w-5xl mx-auto"}
          >
            {isFocused ? (
              // Immersive cinematic full screen presentation
              <div className={`fixed inset-0 z-50 flex flex-col justify-between p-6 sm:p-10 overflow-y-auto transition-colors duration-500 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                {/* Background tint overlay */}
                <div className={`absolute inset-0 z-0 pointer-events-none transition-colors duration-500 ${
                  isDarkMode 
                    ? 'bg-slate-950/70 backdrop-blur-[2px]' 
                    : 'bg-white/40 backdrop-blur-[2px]'
                }`} />
                
                {/* Immersive Floating particles */}
                <div className="absolute top-10 left-15 w-44 h-44 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-10 right-15 w-56 h-56 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

                {/* Cinematic Top controls */}
                <div className={`relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-4 transition-colors duration-500 ${
                  isDarkMode ? 'border-slate-800' : 'border-slate-200'
                }`}>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1.5 bg-emerald-500 text-white rounded-xl text-[10px] font-black uppercase shadow-md tracking-wider">
                      {activeDay.dayName.toUpperCase()} • {getDayDate(selectedWeekNum, activeDay.dayName).toUpperCase()}
                    </span>
                    <span className={`text-xs sm:text-sm font-black tracking-tight leading-none uppercase ${
                      isDarkMode ? 'text-slate-200' : 'text-slate-800'
                    }`}>
                      ➔ {activeLesson?.title}
                    </span>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border ${
                      isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-500'
                    }`}>
                      {slideIndex + 1} / {totalSlides}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    <button
                      onClick={togglePlayMusic}
                      className={`px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all hover:scale-105 active:scale-95 cursor-pointer border-2 flex items-center gap-1.5 ${
                        isMusicPlaying
                          ? 'bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-500/20'
                          : isDarkMode
                          ? 'bg-slate-850 hover:bg-slate-800 text-slate-300 border-slate-700'
                          : 'bg-white hover:bg-slate-50 text-slate-600 border-slate-200'
                      }`}
                      title={isMusicPlaying ? "Müziği Durdur" : "Müziği Başlat"}
                    >
                      {isMusicPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      {isMusicPlaying ? "Sesi Kapat" : "Sesi Aç"}
                    </button>

                    <button
                      onClick={toggleAnimatedBg}
                      className={`px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all hover:scale-105 active:scale-95 cursor-pointer border-2 flex items-center gap-1.5 ${
                        isDarkMode
                          ? 'bg-slate-850 hover:bg-slate-800 text-slate-300 border-slate-700'
                          : 'bg-white hover:bg-slate-50 text-slate-600 border-slate-200'
                      }`}
                      title={isAnimatedBg ? "Arka plan hareketini durdur" : "Arka plan hareketini başlat"}
                    >
                      {isAnimatedBg ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      {isAnimatedBg ? "Arka Planı Sabitle" : "Arka Planı Hareketlendir"}
                    </button>

                    <button
                      onClick={toggleDarkMode}
                      className={`px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all hover:scale-105 active:scale-95 cursor-pointer border-2 flex items-center gap-1.5 ${
                        isDarkMode
                          ? 'bg-slate-850 hover:bg-slate-800 text-slate-305 border-slate-700'
                          : 'bg-white hover:bg-slate-50 text-slate-600 border-slate-200'
                      }`}
                      title={isDarkMode ? "Aydınlık moda geç" : "Karanlık moda geç"}
                    >
                      {isDarkMode ? (
                        <>
                          <Sun className="w-4 h-4 text-amber-500 animate-spin-slow" />
                          Aydınlık Mod
                        </>
                      ) : (
                        <>
                          <Moon className="w-4 h-4 text-indigo-500" />
                          Karanlık Mod
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => { setIsFocused(false); playSound('tick'); }}
                      className="px-3 py-2 bg-rose-600 hover:bg-rose-700 text-white text-[10px] font-black uppercase tracking-wider rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5 cursor-pointer shadow-md shadow-rose-600/20 border-2 border-rose-700"
                    >
                      <Minimize2 className="w-4 h-4" /> Tam Ekrandan Çık
                    </button>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="relative z-10 mt-3">
                  <div className={`w-full h-1.5 rounded-full overflow-hidden ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
                    <motion.div
                      className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"
                      initial={false}
                      animate={{ width: `${((slideIndex + 1) / totalSlides) * 100}%` }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                  </div>
                </div>

                {/* Main slide viewport */}
                <div className="relative z-10 flex-grow flex items-center justify-center py-6">
                  <div className="w-full max-w-4xl mx-auto text-center space-y-6">
                    <AnimatePresence mode="wait">
                      {currentSlide && (
                        <motion.div
                          key={`slide-${slideIndex}`}
                          initial={{ opacity: 0, scale: 0.95, y: 20 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -20 }}
                          transition={{ duration: 0.4, ease: 'easeOut' }}
                          className="space-y-6"
                        >
                          {renderSlide(currentSlide, true)}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Cinematic foot navigation */}
                <div className={`relative z-10 flex justify-between items-center border-t pt-4 transition-colors duration-500 ${
                  isDarkMode ? 'border-slate-805' : 'border-slate-205'
                }`}>
                  <button
                    onClick={handlePrevSlide}
                    disabled={isFirstSlide}
                    className={`px-4 py-2.5 text-xs font-black rounded-xl border flex items-center gap-1.5 transition-all ${
                      isFirstSlide
                        ? 'opacity-30 border-transparent text-slate-400 cursor-not-allowed'
                        : isDarkMode
                        ? 'bg-slate-900 border-slate-750 text-slate-350 hover:bg-slate-850 cursor-pointer active:scale-95'
                        : 'bg-white border-slate-250 text-slate-650 hover:bg-slate-50 cursor-pointer active:scale-95'
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" /> Geri
                  </button>

                  <div className="flex gap-1.5 items-center">
                    {currentSlides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => { setSlideIndex(idx); playSound('tick'); }}
                        className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                          slideIndex === idx 
                            ? 'bg-emerald-500 w-7 shadow' 
                            : idx < slideIndex
                            ? isDarkMode ? 'bg-emerald-800 w-2.5' : 'bg-emerald-200 w-2.5'
                            : isDarkMode ? 'bg-slate-800 w-2.5' : 'bg-slate-200 w-2.5'
                        }`}
                      />
                    ))}
                  </div>

                  {!isLastSlide ? (
                    <button
                      onClick={handleNextSlide}
                      className="flex items-center gap-1.5 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-display text-xs font-black shadow-lg transition active:scale-95 cursor-pointer"
                    >
                      İlerle <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={() => { setActiveLesson(null); setIsFocused(false); playSound('tick'); }}
                      className={`flex items-center gap-1.5 px-6 py-3 rounded-xl font-display text-xs font-black shadow-lg transition active:scale-95 cursor-pointer ${
                        isDarkMode
                          ? 'bg-white text-slate-950 hover:bg-slate-100'
                          : 'bg-slate-900 text-white hover:bg-slate-850'
                      }`}
                    >
                      Dersi Bitir ve Kapat ✓
                    </button>
                  )}
                </div>
              </div>
            ) : (
              // Standard rendering inside DersPortal layout
              <div className="w-full space-y-6">
                <div className={`border-4 rounded-[2.5rem] p-6 sm:p-8 shrink-0 shadow-sm flex flex-col justify-between min-h-[460px] relative overflow-hidden transition-colors duration-500 ${
                  isDarkMode 
                    ? 'bg-slate-900/65 border-slate-850 text-slate-100' 
                    : 'bg-white border-slate-200 text-slate-800'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50/5 via-white/5 to-slate-50/10 pointer-events-none" />
                  
                  {/* Header bar */}
                  <div className={`relative z-10 flex flex-wrap justify-between items-center gap-2 pb-4 border-b ${
                    isDarkMode ? 'border-slate-800' : 'border-slate-100'
                  }`}>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => { setActiveLesson(null); playSound('tick'); }}
                        className={`flex items-center gap-1.5 px-3 py-1.5 border rounded-xl text-xs font-black transition cursor-pointer ${
                          isDarkMode
                            ? 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
                            : 'bg-slate-50 border-slate-200 text-slate-500 hover:text-slate-800'
                        }`}
                      >
                        <ArrowLeft className="w-3.5 h-3.5" /> Geri Dön
                      </button>

                      <button
                        onClick={() => { setIsFocused(true); playSound('tick'); }}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white border-2 border-emerald-600 rounded-xl text-xs font-black shadow-sm transition cursor-pointer"
                        title="Sınıfın odağını korumak için tam ekran modunu açar."
                      >
                        <Maximize2 className="w-3.5 h-3.5" /> Tam Ekran Odak Modu
                      </button>
                    </div>

                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border ${
                      isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-500'
                    }`}>
                      Slayt {slideIndex + 1} / {totalSlides}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="relative z-10 mt-3">
                    <div className={`w-full h-1 rounded-full overflow-hidden ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
                      <motion.div
                        className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"
                        initial={false}
                        animate={{ width: `${((slideIndex + 1) / totalSlides) * 100}%` }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                      />
                    </div>
                  </div>

                  {/* Slide viewport */}
                  <div className="relative z-10 flex-grow py-8 max-w-3xl mx-auto flex flex-col justify-center text-center w-full">
                    <AnimatePresence mode="wait">
                      {currentSlide && (
                        <motion.div
                          key={`slide-std-${slideIndex}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4"
                        >
                          {renderSlide(currentSlide, false)}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Foot Navigation Bar */}
                  <div className={`relative z-10 flex justify-between items-center border-t pt-5 ${
                    isDarkMode ? 'border-slate-805' : 'border-slate-100'
                  }`}>
                    <button
                      onClick={handlePrevSlide}
                      disabled={isFirstSlide}
                      className={`px-4 py-2.5 text-xs font-black rounded-2xl border-3 flex items-center gap-1.5 transition-all ${
                        isFirstSlide
                          ? 'opacity-40 border-transparent text-slate-400 cursor-not-allowed'
                          : isDarkMode
                          ? 'bg-slate-850 border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-500 cursor-pointer active:scale-95'
                          : 'bg-white border-slate-205 text-slate-650 hover:border-slate-350 hover:bg-slate-50 cursor-pointer active:scale-95'
                      }`}
                    >
                      <ArrowLeft className="w-4 h-4" /> Önceki
                    </button>

                    <div className="flex gap-1.5">
                      {currentSlides.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => { setSlideIndex(idx); playSound('tick'); }}
                          className={`h-2 rounded-full transition-all cursor-pointer ${
                            slideIndex === idx 
                              ? 'bg-emerald-500 w-6' 
                              : idx < slideIndex
                              ? isDarkMode ? 'bg-emerald-800 w-2' : 'bg-emerald-200 w-2'
                              : isDarkMode ? 'bg-slate-800 w-2' : 'bg-slate-200 w-2'
                          }`}
                        />
                      ))}
                    </div>

                    {!isLastSlide ? (
                      <button
                        onClick={handleNextSlide}
                        className="flex items-center gap-1.5 px-5 py-3 bg-emerald-500 border-2 border-emerald-600 hover:bg-emerald-600 text-white rounded-2xl font-display text-xs font-black shadow-sm transition active:scale-95 cursor-pointer"
                      >
                        Sonraki <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        onClick={() => { setActiveLesson(null); playSound('tick'); }}
                        className={`flex items-center gap-1.5 px-5 py-3 border-2 rounded-2xl font-display text-xs font-black shadow-sm transition active:scale-95 cursor-pointer ${
                          isDarkMode
                            ? 'bg-slate-850 border-slate-700 text-slate-200 hover:bg-slate-800'
                            : 'bg-slate-900 border-slate-950 text-white hover:bg-slate-800'
                        }`}
                      >
                        Dersi Tamamla ✓
                      </button>
                    )}
                  </div>

                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  // ─── Slide Renderer ───────────────────────────────────────────────────
  function renderSlide(slide: Slide, isCinematic: boolean) {
    const titleSize = isCinematic ? 'text-2xl sm:text-4xl' : 'text-xl sm:text-2xl';
    const bodySize = isCinematic ? 'text-sm sm:text-xl' : 'text-sm sm:text-base';
    const containerMax = isCinematic ? 'max-w-3xl' : 'max-w-2xl';

    switch (slide.type) {
      // ── COVER SLIDE ──────────────────────────────────────────────────────
      case 'cover':
        return (
          <div className="flex flex-col items-center justify-center gap-6 py-8">
            <span className="text-6xl sm:text-8xl">{slide.emoji || '📖'}</span>
            <h1 className={`font-display font-black ${isCinematic ? 'text-3xl sm:text-5xl' : 'text-2xl sm:text-4xl'} tracking-tight leading-tight uppercase max-w-2xl mx-auto ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}>
              {slide.title}
            </h1>
            {slide.subtitle && (
              <span className={`text-sm font-bold tracking-wider uppercase px-5 py-2 rounded-full border-2 ${
                isDarkMode 
                  ? 'text-emerald-300 border-emerald-500/30 bg-emerald-500/10' 
                  : 'text-emerald-700 border-emerald-300 bg-emerald-50'
              }`}>
                {slide.subtitle}
              </span>
            )}
          </div>
        );

      // ── CONTENT SLIDE ────────────────────────────────────────────────────
      case 'content':
        return (
          <div className="space-y-5">
            <div className="flex items-center justify-center gap-2.5">
              {slide.emoji && <span className="text-3xl">{slide.emoji}</span>}
              <h2 className={`font-display font-black ${titleSize} tracking-tight leading-tight uppercase ${
                isDarkMode ? 'text-white' : 'text-slate-800'
              }`}>
                {slide.title}
              </h2>
            </div>

            {slide.arabicText && (
              <div className={`${containerMax} mx-auto p-5 rounded-2xl border-2 ${
                isDarkMode 
                  ? 'bg-emerald-950/30 border-emerald-500/20' 
                  : 'bg-emerald-50/80 border-emerald-200'
              }`}>
                <p className="text-2xl sm:text-4xl font-bold text-center leading-relaxed" dir="rtl" style={{ fontFamily: "'Noto Naskh Arabic', 'Amiri', serif" }}>
                  {slide.arabicText}
                </p>
              </div>
            )}

            {slide.body && (
              <div className={`${containerMax} mx-auto text-left rounded-[2rem] p-6 border-2 backdrop-blur-sm ${
                isDarkMode 
                  ? 'bg-slate-900/60 border-slate-800 text-slate-200' 
                  : 'bg-white/90 border-slate-200 text-slate-700'
              }`}>
                <p className={`${bodySize} font-medium leading-relaxed whitespace-pre-line`}>
                  {slide.body}
                </p>
              </div>
            )}

            {slide.items && slide.items.length > 0 && (
              <div className={`${containerMax} mx-auto text-left space-y-3 rounded-[2rem] p-6 border-2 ${
                isDarkMode 
                  ? 'bg-slate-900/60 border-slate-800 text-slate-200' 
                  : 'bg-white/90 border-slate-200 text-slate-700'
              }`}>
                {slide.items.map((item, idx) => (
                  <div key={idx} className={`flex gap-3 items-start ${bodySize} font-semibold leading-relaxed`}>
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 border border-emerald-500/40 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      // ── AYAH (AYET) SLIDE ────────────────────────────────────────────────
      case 'ayah':
        return (
          <div className="space-y-5">
            <span className={`text-xs font-black tracking-widest uppercase inline-block px-4 py-1.5 rounded-full border-2 ${
              isDarkMode 
                ? 'text-emerald-300 border-emerald-500/30 bg-emerald-500/10' 
                : 'text-emerald-700 border-emerald-300 bg-emerald-50'
            }`}>
              {slide.emoji || '📖'} {slide.title || 'Ayet-i Kerime'}
            </span>

            {slide.arabicText && (
              <div className={`${containerMax} mx-auto p-8 rounded-[2rem] border-3 shadow-lg ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-emerald-950/50 to-teal-950/50 border-emerald-500/30' 
                  : 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-300'
              }`}>
                <p className="text-3xl sm:text-5xl font-bold text-center leading-loose" dir="rtl" style={{ fontFamily: "'Noto Naskh Arabic', 'Amiri', serif" }}>
                  {slide.arabicText}
                </p>
              </div>
            )}

            {slide.body && (
              <div className={`${containerMax} mx-auto`}>
                <p className={`${isCinematic ? 'text-lg sm:text-2xl' : 'text-base sm:text-lg'} font-bold italic leading-relaxed ${
                  isDarkMode ? 'text-emerald-200' : 'text-emerald-800'
                }`}>
                  {slide.body}
                </p>
              </div>
            )}

            {slide.reference && (
              <p className={`text-sm font-black uppercase tracking-wider ${
                isDarkMode ? 'text-emerald-400' : 'text-emerald-600'
              }`}>
                — {slide.reference}
              </p>
            )}
          </div>
        );

      // ── HADITH SLIDE ─────────────────────────────────────────────────────
      case 'hadith':
        return (
          <div className="space-y-5">
            <span className={`text-xs font-black tracking-widest uppercase inline-block px-4 py-1.5 rounded-full border-2 ${
              isDarkMode 
                ? 'text-amber-300 border-amber-500/30 bg-amber-500/10' 
                : 'text-amber-700 border-amber-300 bg-amber-50'
            }`}>
              {slide.emoji || '🌹'} {slide.title || 'Hadis-i Şerif'}
            </span>

            <div className={`${containerMax} mx-auto p-8 rounded-[2rem] border-3 shadow-lg relative overflow-hidden ${
              isDarkMode 
                ? 'bg-gradient-to-br from-amber-950/40 to-orange-950/40 border-amber-500/30' 
                : 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-300'
            }`}>
              <div className="absolute top-4 right-4 text-6xl opacity-10 select-none pointer-events-none">🌹</div>
              {slide.body && (
                <p className={`${isCinematic ? 'text-xl sm:text-3xl' : 'text-lg sm:text-xl'} font-black italic leading-relaxed text-center relative z-10 ${
                  isDarkMode ? 'text-amber-100' : 'text-amber-900'
                }`}>
                  {slide.body}
                </p>
              )}
            </div>

            {slide.reference && (
              <p className={`text-sm font-black uppercase tracking-wider ${
                isDarkMode ? 'text-amber-400' : 'text-amber-600'
              }`}>
                — {slide.reference}
              </p>
            )}
          </div>
        );

      // ── POEM SLIDE ───────────────────────────────────────────────────────
      case 'poem':
        return (
          <div className="space-y-5">
            <div className="flex items-center justify-center gap-2.5">
              <span className="text-3xl">{slide.emoji || '🌙'}</span>
              <h2 className={`font-display font-black ${titleSize} tracking-tight leading-tight uppercase ${
                isDarkMode ? 'text-white' : 'text-slate-800'
              }`}>
                {slide.title}
              </h2>
            </div>

            <div className={`${containerMax} mx-auto p-8 rounded-[2rem] border-3 relative ${
              isDarkMode 
                ? 'bg-gradient-to-br from-indigo-950/40 to-purple-950/40 border-indigo-500/25' 
                : 'bg-gradient-to-br from-indigo-50/80 to-purple-50/80 border-indigo-200'
            }`}>
              <div className="absolute top-3 left-4 text-4xl opacity-15 select-none pointer-events-none">❝</div>
              <div className="absolute bottom-3 right-4 text-4xl opacity-15 select-none pointer-events-none">❞</div>
              <p className={`${isCinematic ? 'text-lg sm:text-2xl' : 'text-base sm:text-lg'} font-semibold italic leading-loose text-center whitespace-pre-line relative z-10 ${
                isDarkMode ? 'text-indigo-200' : 'text-indigo-900'
              }`}>
                {slide.body}
              </p>
            </div>
          </div>
        );

      // ── DISCUSSION SLIDE ─────────────────────────────────────────────────
      case 'discussion':
        return (
          <div className="space-y-5">
            <span className={`text-xs font-black tracking-widest uppercase inline-block px-4 py-1.5 rounded-full border-2 ${
              isDarkMode 
                ? 'text-sky-300 border-sky-500/30 bg-sky-500/10' 
                : 'text-sky-700 border-sky-300 bg-sky-50'
            }`}>
              {slide.emoji || '🗨️'} {slide.title || 'Tartışma'}
            </span>

            {slide.items && slide.items.length > 0 && (
              <div className={`${containerMax} mx-auto text-left space-y-4`}>
                {slide.items.map((item, idx) => (
                  <div key={idx} className={`flex gap-3.5 items-start p-4 rounded-2xl border-2 ${
                    isDarkMode 
                      ? 'bg-sky-950/30 border-sky-500/20 text-sky-100' 
                      : 'bg-sky-50/80 border-sky-200 text-sky-900'
                  }`}>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-lg font-black ${
                      isDarkMode ? 'bg-sky-500/20 text-sky-300' : 'bg-sky-100 text-sky-600'
                    }`}>
                      ?
                    </span>
                    <p className={`${bodySize} font-semibold leading-relaxed pt-1`}>{item}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      // ── ACTIVITY SLIDE ───────────────────────────────────────────────────
      case 'activity':
        return (
          <div className="space-y-5">
            <span className={`text-xs font-black tracking-widest uppercase inline-block px-4 py-1.5 rounded-full border-2 animate-bounce ${
              isDarkMode 
                ? 'text-orange-300 border-orange-500/30 bg-orange-500/10' 
                : 'text-orange-700 border-orange-300 bg-orange-50'
            }`}>
              {slide.emoji || '🧩'} {slide.title || 'Etkinlik'}
            </span>

            {slide.body && (
              <div className={`${containerMax} mx-auto`}>
                <p className={`${bodySize} font-semibold leading-relaxed ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {slide.body}
                </p>
              </div>
            )}

            {slide.items && slide.items.length > 0 && (
              <div className={`${containerMax} mx-auto text-left space-y-3 rounded-[2rem] p-6 border-3 ${
                isDarkMode 
                  ? 'bg-orange-500/10 border-orange-500/20 text-orange-100' 
                  : 'bg-orange-50/80 border-orange-200 text-orange-900'
              }`}>
                {slide.items.map((item, idx) => (
                  <div key={idx} className={`flex gap-3 items-start ${bodySize} font-bold leading-relaxed`}>
                    <span className={`w-6 h-6 rounded-lg font-black text-xs flex items-center justify-center shrink-0 mt-0.5 ${
                      isDarkMode ? 'bg-orange-500/30 text-orange-200' : 'bg-orange-200 text-orange-700'
                    }`}>
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      // ── QUIZ SLIDE ───────────────────────────────────────────────────────
      case 'quiz':
        return (
          <div className="space-y-5 w-full">
            <span className={`text-xs font-black tracking-widest uppercase inline-block px-4 py-1.5 rounded-full border-2 animate-pulse ${
              isDarkMode 
                ? 'text-rose-300 border-rose-500/30 bg-rose-500/10' 
                : 'text-rose-700 border-rose-300 bg-rose-50'
            }`}>
              {slide.emoji || '🎯'} {slide.title || 'Bilgi Yarışması'}
            </span>

            <div className={`rounded-[2rem] p-6 sm:p-8 ${containerMax} mx-auto text-center shadow-lg backdrop-blur-md border-3 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-rose-950/30 to-pink-950/30 border-rose-500/25' 
                : 'bg-gradient-to-r from-rose-50 to-pink-50 border-rose-200'
            }`}>
              <h3 className={`font-display font-black ${isCinematic ? 'text-lg sm:text-2xl' : 'text-base sm:text-lg'} mb-6 leading-relaxed uppercase ${
                isDarkMode ? 'text-white' : 'text-slate-800'
              }`}>
                {slide.question}
              </h3>

              <div className={`grid ${isCinematic ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} gap-3 ${isCinematic ? 'max-w-xl' : 'max-w-lg'} mx-auto`}>
                {slide.options?.map((opt) => {
                  const isSelected = selectedOption === opt;
                  const isCorrect = opt === slide.correct;
                  return (
                    <button
                      key={opt}
                      onClick={() => handleAnswerQuiz(opt)}
                      disabled={selectedOption !== null}
                      className={`w-full text-left p-4 rounded-2xl border-3 text-xs sm:text-sm font-black transition-all ${
                        selectedOption !== null
                          ? isCorrect
                            ? isDarkMode
                              ? 'bg-emerald-950 border-emerald-500 text-emerald-100 shadow-lg scale-[1.02]'
                              : 'bg-emerald-50 border-emerald-500 text-emerald-950 shadow-lg scale-[1.02]'
                            : isSelected
                            ? isDarkMode
                              ? 'bg-rose-950 border-rose-500 text-rose-100 shadow-md scale-[0.98]'
                              : 'bg-rose-50 border-rose-500 text-rose-950 shadow-md scale-[0.98]'
                            : isDarkMode
                            ? 'bg-slate-900/50 border-slate-800 text-slate-500'
                            : 'bg-slate-50/50 border-slate-200 text-slate-400'
                          : isDarkMode
                          ? 'bg-slate-900 border-slate-700 text-slate-200 hover:border-slate-500 hover:bg-slate-850 cursor-pointer active:scale-[0.98]'
                          : 'bg-white border-slate-250 text-slate-700 hover:border-slate-400 hover:bg-slate-50 cursor-pointer active:scale-[0.98]'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quiz feedback */}
            <AnimatePresence>
              {quizSuccess === true && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-6 rounded-[2rem] ${containerMax} mx-auto text-left shadow-lg backdrop-blur-md border-3 ${
                    isDarkMode
                      ? 'bg-emerald-950/80 border-emerald-500/40 text-slate-200'
                      : 'bg-emerald-50 border-emerald-300 text-slate-750'
                  }`}
                >
                  <span className="text-emerald-500 dark:text-emerald-300 font-black text-sm uppercase block mb-1">🎉 TEBRİKLER!</span>
                  <p className="text-xs sm:text-sm font-semibold">
                    {slide.wisdom}
                  </p>
                </motion.div>
              )}
              {quizSuccess === false && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-2xl ${containerMax} mx-auto text-center shadow border-2 ${
                    isDarkMode
                      ? 'bg-rose-950/80 border-rose-500/40 text-slate-200'
                      : 'bg-rose-50 border-rose-300 text-slate-750'
                  }`}
                >
                  <span className="text-rose-500 dark:text-rose-300 font-extrabold text-xs uppercase block">⚠️ TEKRAR DENEYELİM!</span>
                  <p className="text-[11px] font-bold block mt-0.5">Doğru cevabı bulmak için tartışalım.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );

      default:
        return null;
    }
  }
};
