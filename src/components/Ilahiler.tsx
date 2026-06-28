import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, ArrowLeft, Music, Disc, Maximize2, Minimize2, SkipForward, SkipBack } from 'lucide-react';

interface Ilahi {
  id: string;
  title: string;
  artist: string;
  audioSrc: string;
  lyrics: string;
}

const ILAHILER_DATA: Ilahi[] = [
  {
    id: 'ilahi_1',
    title: 'Önderimiz Peygamber',
    artist: 'Şehid Aytaç Baran',
    audioSrc: 'assets/audio/ilahiler/Önderimiz Peygamber [REiklCIsTZw].mp3',
    lyrics: `Önderimiz Peygamber Kurandır Bize Rehber
Din surayya’dan geldik geldik Allahu ekber
Önderimiz Peygamber Kurandır Bize Rehber
Din surayya’dan geldik geldik Allahu ekber

La ilahe illallah Muhammed Resulallah
La ilahe illallah Muhammed Habib Allah
La ilahe illallah Muhammed Resulallah
La ilahe illallah Muhammed Habib Allah

Ey Kılıc ve merhamet Peygamberi Muhammed
Mümin yerden kaldırdı sancağını can Ahmed
Ey Kılıc ve merhamet Peygamberi Muhammed
Mümin yerden kaldırdı sancağını can Ahmed

La ilahe illallah Muhammed Resulallah
La ilahe illallah Muhammed Habib Allah
La ilahe illallah Muhammed Resulallah
La ilahe illallah Muhammed Habib Allah

Cahillerin tutumu zamanın nemrudunu
Yıktın yerlere serdin şeytanın oyununu
Cahillerin tutumu zamanın nemrudunu
Yıktın yerlere serdin şeytanın oyununu

La ilahe illallah Muhammed Resulallah
La ilahe illallah Muhammed Habib Allah
La ilahe illallah Muhammed Resulallah
La ilahe illallah Muhammed Habib Allah

Zalimler mağlub sana şeavete Kurana
Canımız feda olsun aziz yüce islama
Zalimler mağlub sana şeavete Kurana
Canımız feda olsun aziz yüce islama

La ilahe illallah Muhammed Resulallah
La ilahe illallah Muhammed Habib Allah
La ilahe illallah Muhammed Resulallah
La ilahe illallah Muhammed Habib Allah`
  },
  {
    id: 'ilahi_2',
    title: 'Ey Sevgili',
    artist: 'Fadıl Aydın',
    audioSrc: 'assets/audio/ilahiler/EY SEVGİLİ _ FADIL AYDIN [25cjM4047vc].mp3',
    lyrics: `Dünya kafesinde yolunu gözlerim
Yolun gülistandır kokunu özledim
Gel ferman eyle beratım benim
Gel ey gül yüzlüm gel şirin sözlüm
****
Ey sevgili ben de ben de gelem sana
Kokuşmuş dünyanın yükü üzerimde
Pas tutmuş kalbimle kirli ellerimle
Mahcubum sana muhtacım hem de
****
Vazgeçtim benden kayboldum sende
Ayırma beni dizin dibinden
Götür beni de gittiğin yere
Koyma burada yaban ellerde
****
Ey sevgili ben de ben de gelem sana
Kokuşmuş dünyanın yükü üzerimde
Pas tutmuş kalbimle kirli ellerimle
Mahcubum sana muhtacım hem de`
  },
  {
    id: 'ilahi_3',
    title: "Kâbe'de Hacılar Hû Der Allah",
    artist: 'Abdurrahman Önül & Celal Karatüre',
    audioSrc: "assets/audio/ilahiler/Kâbe'de Hacılar Hû Der Allah _ Abdurrahman Önül & Celal Karatüre [EY07kVGs_Jk].mp3",
    lyrics: `Kabe’de hacılar “Hu!” der Allah,
Yer, gök inim inim iniler Allah,
Melekler defterini yeniler Allah,
İzin ver de Kabe’ni görelim Allah,
İzin ver de yolunda ölelim Allah,
Göster cemalini görelim Allah.
*****
Kabe’nin yolları taşlıdır Allah,
Hacıların gözleri yaşlıdır Allah,
Dervişlerin ciğeri ateşlidir Allah,
İzin ver de Kabe’ni görelim Allah,
İzin ver de yolunda ölelim Allah,
Göster cemalini görelim Allah.
*****
Kabe’nin yolları çukurdur Allah,
Hacıların işleri zikirdir Allah,
Mevla’sına her dem şükürdür Allah,
İzin ver de Kabe’ni görelim Allah,
İzin ver de yolunda ölelim Allah,
Göster cemalini görelim Allah.
*****
Kabe’nin örtüsü yeşil Allah,
Gün doğmadan orası ışır Allah,
Hepimizi Kabe’ne uçur Allah,
İzin ver de Kabe’ni görelim Allah,
İzin ver de yolunda ölelim Allah,
Göster cemalini görelim Allah.`
  },
  {
    id: 'ilahi_4',
    title: 'Peygamber Sevdalıları',
    artist: 'Özlem Ajans Sanatçıları',
    audioSrc: 'assets/audio/ilahiler/PEYGAMBER SEVDALILARI ÖZCAN [GEldFOMTV1k].mp3',
    lyrics: `Bir sevdadır yüreklerde depreşiyor gönüllerde
Sevda sevda tüm dillerde Peygamber Sevdalıları
Rabbaniler meydanlarda baştanbaşa tüm cihanda
Selam selam lisanlarda Peygamber Sevdalıları
Allahuekber Allahuekber Allahuekber Muhammed Rehber
****
Sıddıklardır şehitlerdir Cemal Hüseyin Sait’lerdir
Selahaddini yiğitlerdir Peygamber Sevdalıları
Sebilillah bağlıları nurlandırdı meydanları
Marufun/hakikat çağrıcıları Peygamber sevdalıları
Allahuekber Allahuekber Allahuekber Muhammed Rehber
****
Tarih tarih bir hazandır sonu gelmez bir kervandır
Allah için can kurbandır Peygamber sevdalıları
İza cae nasrullahi hamd ve şükür ya ilahi
Tesbih dillerde billahi Peygamber sevdalıları
Allahuekber Allahuekber Allahuekber Muhammed Rehber`
  }
];

interface IlahilerProps {
  isDarkMode: boolean;
  isAppMusicPlaying: boolean;
  isFocused: boolean;
  setIsFocused: (focused: boolean) => void;
  onIlahiPlayStateChange: (isPlaying: boolean) => void;
}

export const Ilahiler: React.FC<IlahilerProps> = ({
  isDarkMode,
  isAppMusicPlaying,
  isFocused,
  setIsFocused,
  onIlahiPlayStateChange
}) => {
  const [selectedIlahiId, setSelectedIlahiId] = useState<string | null>(null);
  const [activeIlahiId, setActiveIlahiId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.8);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // If the main app background music starts playing, pause the hymn
  useEffect(() => {
    if (isAppMusicPlaying && isPlaying) {
      handlePause();
    }
  }, [isAppMusicPlaying]);

  // Reset focus state if we close/unmount
  useEffect(() => {
    return () => {
      setIsFocused(false);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [setIsFocused]);

  const currentIlahi = ILAHILER_DATA.find(i => i.id === selectedIlahiId);
  const activeIlahi = ILAHILER_DATA.find(i => i.id === activeIlahiId);

  const handleIlahiSelect = (id: string) => {
    setSelectedIlahiId(id);
    
    // If selecting a different hymn than the active one, load and play it
    if (activeIlahiId !== id) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      
      const selected = ILAHILER_DATA.find(i => i.id === id);
      if (selected) {
        setActiveIlahiId(id);
        const newAudio = new Audio(selected.audioSrc);
        newAudio.volume = isMuted ? 0 : volume;
        
        // Listeners
        newAudio.addEventListener('timeupdate', () => {
          setCurrentTime(newAudio.currentTime);
        });
        newAudio.addEventListener('loadedmetadata', () => {
          setDuration(newAudio.duration);
        });
        newAudio.addEventListener('ended', () => {
          setIsPlaying(false);
          onIlahiPlayStateChange(false);
          setCurrentTime(0);
        });

        audioRef.current = newAudio;
        newAudio.play().then(() => {
          setIsPlaying(true);
          onIlahiPlayStateChange(true);
        }).catch(err => {
          console.error("Audio playback failed:", err);
        });
      }
    }
  };

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      handlePause();
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        onIlahiPlayStateChange(true);
      }).catch(err => console.error(err));
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      onIlahiPlayStateChange(false);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const time = parseFloat(e.target.value);
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : vol;
    }
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (audioRef.current) {
      audioRef.current.volume = nextMuted ? 0 : volume;
    }
  };

  const handleRestart = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
      if (!isPlaying) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          onIlahiPlayStateChange(true);
        });
      }
    }
  };

  const handleNext = () => {
    const currentIndex = ILAHILER_DATA.findIndex(i => i.id === selectedIlahiId);
    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % ILAHILER_DATA.length;
      handleIlahiSelect(ILAHILER_DATA[nextIndex].id);
    }
  };

  const handlePrev = () => {
    const currentIndex = ILAHILER_DATA.findIndex(i => i.id === selectedIlahiId);
    if (currentIndex !== -1) {
      const prevIndex = (currentIndex - 1 + ILAHILER_DATA.length) % ILAHILER_DATA.length;
      handleIlahiSelect(ILAHILER_DATA[prevIndex].id);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Helper function to render Hymn Details Screen (Both normal and fullscreen formats)
  const renderDetailsContent = () => {
    return (
      <>
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-850 pb-4 relative z-10 shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setSelectedIlahiId(null);
                setIsFocused(false);
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-250 dark:hover:bg-slate-700 text-slate-750 dark:text-slate-300 text-xs font-black uppercase transition-all duration-200 active:scale-95 cursor-pointer border border-slate-200/20 dark:border-slate-750/30"
            >
              <ArrowLeft className="w-4 h-4" />
              İlahilere Dön
            </button>
          </div>
          
          <div className="text-center hidden sm:block">
            <span className="text-[10px] text-rose-500 font-black uppercase tracking-widest">İlahiler</span>
            <h3 className="text-xl font-black text-slate-855 dark:text-slate-100 max-w-sm truncate">
              {currentIlahi?.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFocused(!isFocused)}
              className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-black uppercase transition-all duration-200 active:scale-95 cursor-pointer border ${
                isFocused 
                  ? 'bg-rose-500 border-rose-600 text-white shadow-md shadow-rose-500/20'
                  : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-250 dark:hover:bg-slate-750 text-slate-750 dark:text-slate-300 border-slate-200/20 dark:border-slate-750/30'
              }`}
              title={isFocused ? "Tam Ekrandan Çık" : "Tam Ekran Yap"}
            >
              {isFocused ? (
                <>
                  <Minimize2 className="w-4 h-4" />
                  Küçült
                </>
              ) : (
                <>
                  <Maximize2 className="w-4 h-4" />
                  Tam Ekran
                </>
              )}
            </button>
          </div>
        </div>

        {/* Column Layout */}
        <div className={`flex flex-col lg:flex-row gap-6 items-stretch relative z-10 ${
          isFocused ? 'flex-1 min-h-0 overflow-hidden' : ''
        }`}>
          {/* Sol Sütun: Müzik Çalar Kontrolleri - Sola yaslı durur. Çivilenmiştir (Asla kaymaz). */}
          <div className={`flex flex-col justify-center items-center rounded-3xl bg-slate-50/50 dark:bg-slate-950/20 border border-slate-100 dark:border-slate-800 gap-4 select-none shrink-0 self-center transition-all duration-350 ${
            isFocused ? 'w-full lg:w-[22%] h-full p-4 overflow-hidden' : 'w-full lg:w-[40%] p-6'
          }`}>
            
            {/* Disc animation */}
            <div className="relative shrink-0">
              <div className={`rounded-full bg-slate-850 border-4 border-slate-700 flex items-center justify-center shadow-2xl relative overflow-hidden transition-all duration-355 ${
                isPlaying && activeIlahiId === selectedIlahiId ? 'animate-spin-slow' : ''
              } ${
                isFocused ? 'w-24 h-24' : 'w-32 h-32 sm:w-36 sm:h-36'
              }`}>
                {/* Vinyl grooves */}
                <div className="absolute inset-2 rounded-full border border-slate-700/30" />
                <div className="absolute inset-6 rounded-full border border-slate-700/30" />
                <div className="absolute inset-10 rounded-full border border-slate-700/30" />
                <div className="absolute inset-14 rounded-full border border-slate-700/30" />
                
                {/* Center Label */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg border-2 border-slate-850 relative z-10">
                  <Music className="w-4 h-4" />
                </div>
              </div>
              
              {/* Tone arm */}
              <div className={`absolute top-0 -right-2 w-12 h-16 origin-top-left transition-transform duration-500 pointer-events-none ${
                isPlaying && activeIlahiId === selectedIlahiId ? 'rotate-12' : '-rotate-12'
              }`}>
                <div className="w-1.5 h-12 bg-slate-400 dark:bg-slate-600 rounded-full ml-4 shadow-sm" />
                <div className="w-3 h-3 bg-slate-500 dark:bg-slate-700 rounded-md ml-3.5 -mt-1" />
              </div>
            </div>

            {/* Title Info */}
            <div className="text-center shrink-0">
              <h4 className="font-display font-black text-lg text-slate-805 dark:text-slate-100">{currentIlahi?.title}</h4>
              <p className="text-xs text-rose-500 font-extrabold uppercase tracking-widest mt-1">{currentIlahi?.artist}</p>
            </div>

            {/* Audio Controls */}
            <div className="w-full flex flex-col gap-3 shrink-0">
              {/* Seekbar */}
              <div className="w-full flex flex-col gap-1">
                <input
                  type="range"
                  min={0}
                  max={duration || 100}
                  value={activeIlahiId === selectedIlahiId ? currentTime : 0}
                  onChange={handleSeek}
                  className="w-full h-1.5 bg-slate-200 dark:bg-slate-850 rounded-lg appearance-none cursor-pointer accent-rose-500"
                />
                <div className="flex justify-between text-[10px] font-bold text-slate-455 dark:text-slate-500">
                  <span>{activeIlahiId === selectedIlahiId ? formatTime(currentTime) : "00:00"}</span>
                  <span>{activeIlahiId === selectedIlahiId ? formatTime(duration) : "00:00"}</span>
                </div>
              </div>

              {/* Play, Pause, Restart, Skip Next/Prev buttons */}
              <div className="flex justify-center items-center gap-3 sm:gap-4">
                <button
                  onClick={handleRestart}
                  className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-750 text-slate-655 dark:text-slate-405 flex items-center justify-center active:scale-95 transition-all cursor-pointer border border-slate-200/20 dark:border-slate-750/30"
                  title="Baştan Başlat"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-750 text-slate-655 dark:text-slate-405 flex items-center justify-center active:scale-95 transition-all cursor-pointer border border-slate-200/20 dark:border-slate-750/30"
                  title="Önceki İlahi"
                >
                  <SkipBack className="w-4 h-4" />
                </button>

                <button
                  onClick={handlePlayPause}
                  className="w-13 h-13 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white flex items-center justify-center shadow-xl shadow-rose-500/20 active:scale-95 transition-all cursor-pointer shrink-0"
                >
                  {isPlaying && activeIlahiId === selectedIlahiId ? (
                      <Pause className="w-5.5 h-5.5" />
                    ) : (
                      <Play className="w-5.5 h-5.5 pl-0.5" />
                    )}
                </button>

                <button
                  onClick={handleNext}
                  className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-750 text-slate-655 dark:text-slate-405 flex items-center justify-center active:scale-95 transition-all cursor-pointer border border-slate-200/20 dark:border-slate-750/30"
                  title="Sonraki İlahi"
                >
                  <SkipForward className="w-4 h-4" />
                </button>

                <button
                  onClick={toggleMute}
                  className={`w-8 h-8 rounded-full flex items-center justify-center active:scale-95 transition-all cursor-pointer border ${
                    isMuted
                      ? 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900/50 text-rose-500'
                      : 'bg-slate-100 dark:bg-slate-800 border-slate-200/20 dark:border-slate-750/30 text-slate-655 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-750'
                  }`}
                  title={isMuted ? "Sesi Aç" : "Sesi Kapat"}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Volume slider */}
              {!isMuted && (
                <div className="flex items-center gap-2 px-2">
                  <Volume2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.05}
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-full h-1 bg-slate-200 dark:bg-slate-850 rounded-lg appearance-none cursor-pointer accent-rose-500"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Sağ Sütun: İlahi Sözleri - Büyüyüp kalan alanı kaplar (flex-1). Tahta modu font boyutu. */}
          <div className={`flex flex-col bg-slate-50/30 dark:bg-slate-950/10 border border-slate-105 dark:border-slate-850/40 rounded-3xl overflow-hidden p-6 flex-1 transition-all duration-350 ${
            isFocused ? 'h-full min-h-0' : 'max-h-[420px]'
          }`}>
            <div className="flex items-center justify-between mb-3 shrink-0">
              <span className="text-xs text-slate-400 font-extrabold uppercase tracking-wider">İlahi Sözleri</span>
              {isFocused && (
                <span className="text-[10px] text-rose-500 font-black uppercase tracking-widest bg-rose-50/80 dark:bg-rose-950/40 px-2.5 py-1 rounded-lg">
                  Tahta Okuma Modu
                </span>
              )}
            </div>
            <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800 select-text">
              <pre
                className={`font-sans leading-relaxed text-center whitespace-pre-line font-bold py-2 transition-all duration-350 ${
                  isFocused 
                    ? 'text-lg sm:text-xl md:text-2xl text-slate-855 dark:text-slate-100 space-y-4' 
                    : 'text-base sm:text-lg text-slate-700 dark:text-slate-200'
                }`}
                style={{ fontFamily: "inherit" }}
              >
                {currentIlahi?.lyrics}
              </pre>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-6 select-none relative z-10" id="ilahiler-portal-root">
      
      {selectedIlahiId === null ? (
        // === LIST VIEW ===
        <div className="flex flex-col gap-6 relative z-10">
          {/* Main Title Header (Matched with Ezber/Ders headers layout) */}
          <div className="bg-gradient-to-r from-rose-500 via-pink-600 to-pink-500 border-b-6 border-rose-750 p-6 rounded-[2.5rem] shadow-md flex items-center justify-between text-white relative overflow-hidden">
            <div className="absolute -top-12 -left-12 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="relative z-10 flex items-center gap-4">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-md border-2 border-white rounded-3xl flex items-center justify-center text-white shadow-inner">
                <Music className="w-7 h-7" />
              </div>
              <div>
                <h2 className="font-display font-black text-2xl tracking-normal uppercase">
                  İLAHİLER
                </h2>
                <p className="text-sm font-medium text-white/90">
                  Gönülleri dinlendiren, peygamber sevgisini aşılayan en güzel ilahiler ve sözleri.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ILAHILER_DATA.map((ilahi) => {
              const isCurrentActive = activeIlahiId === ilahi.id;
              const isCurrentPlaying = isCurrentActive && isPlaying;

              return (
                <div
                  key={ilahi.id}
                  onClick={() => handleIlahiSelect(ilahi.id)}
                  className={`group relative overflow-hidden p-6 rounded-[2rem] border-3 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md flex items-center justify-between gap-4 ${
                    isCurrentPlaying
                      ? 'bg-gradient-to-br from-rose-50 to-pink-50/50 dark:from-rose-950/20 dark:to-pink-950/10 border-rose-450 shadow-sm shadow-rose-500/5'
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700/60 hover:border-rose-350 dark:hover:border-rose-900'
                  }`}
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105 ${
                      isCurrentPlaying
                        ? 'bg-gradient-to-br from-rose-500 to-pink-500 text-white animate-spin-slow'
                        : 'bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-950/40 dark:to-pink-950/20 text-rose-600 dark:text-rose-400'
                    }`}>
                      {isCurrentPlaying ? (
                        <Disc className="w-7 h-7" />
                      ) : (
                        <Music className="w-7 h-7" />
                      )}
                    </div>

                    <div className="flex flex-col min-w-0">
                      <h3 className="font-display font-black text-lg text-slate-805 dark:text-slate-100 group-hover:text-rose-700 dark:group-hover:text-rose-400 transition-colors truncate">
                        {ilahi.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-455 font-bold uppercase tracking-wide">
                        {ilahi.artist}
                      </p>
                    </div>
                  </div>

                  <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 shrink-0 ${
                    isCurrentPlaying
                      ? 'bg-rose-500 border-rose-600 text-white shadow-md'
                      : 'bg-rose-50 dark:bg-rose-950/30 border-rose-100 dark:border-rose-900/50 text-rose-600 dark:text-rose-400 group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-600'
                  }`}>
                    ➔
                  </div>
                </div>
              );
            })}
          </div>

          {activeIlahiId && (
            // Mini player if there is an active hymn playing in the background
            <div className="mt-4 p-4 rounded-3xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-250/60 dark:border-slate-800/60 backdrop-blur-md flex items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3 min-w-0">
                <Music className={`w-5 h-5 text-rose-500 shrink-0 ${isPlaying ? 'animate-bounce' : ''}`} />
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-wider">Şu An Çalıyor</span>
                  <span className="text-sm font-extrabold text-slate-700 dark:text-slate-200 truncate">{activeIlahi?.title}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedIlahiId(activeIlahiId)}
                  className="px-3 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-350 dark:hover:bg-slate-700 text-xs font-black uppercase text-slate-700 dark:text-slate-300 transition-colors"
                >
                  Sözleri Gör
                </button>
                <button
                  onClick={handlePlayPause}
                  className="w-10 h-10 rounded-full bg-rose-500 hover:bg-rose-600 text-white flex items-center justify-center shadow-md transition-transform active:scale-95 cursor-pointer shrink-0"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 pl-0.5" />}
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        // === DETAY / SÖZLER SAYFASI ===
        isFocused ? (
          // FULLSCREEN MODE - Centered single premium card overlay on blurred backdrop
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 select-none">
            {/* Blurred/ambient overlay */}
            <div 
              className={`absolute inset-0 z-0 transition-colors duration-500 backdrop-blur-md ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-slate-950/90 via-slate-900/90 to-rose-950/40' 
                  : 'bg-gradient-to-br from-rose-50/70 via-slate-50/80 to-pink-50/50'
              }`} 
              onClick={() => { setSelectedIlahiId(null); setIsFocused(false); }}
            />
            
            {/* Centered Premium Main Card wrapper - Expanded to max-w-[94vw] to give maximum width space */}
            <div className={`relative z-10 w-full h-full max-w-[94vw] max-h-[92vh] rounded-[2.5rem] bg-white/85 dark:bg-slate-900/85 border-3 border-slate-200/80 dark:border-slate-800/80 shadow-2xl backdrop-blur-xl flex flex-col p-6 sm:p-8 overflow-hidden`}>
              {renderDetailsContent()}
            </div>
          </div>
        ) : (
          // NORMAL MODE - Standard inline premium card within page flow
          <div className="w-full bg-white/80 dark:bg-slate-900/80 border border-slate-250/60 dark:border-slate-800/80 backdrop-blur-xl shadow-2xl flex flex-col gap-6 relative rounded-[2.5rem] p-6 sm:p-8">
            {renderDetailsContent()}
          </div>
        )
      )}
    </div>
  );
};
