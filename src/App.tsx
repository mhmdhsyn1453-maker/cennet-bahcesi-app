import React, { useState, useEffect, useRef } from 'react';
import { GameZone, Team, GameData } from './types';
import { defaultGameData } from './data/defaultQuestions';
import { TeamSelector } from './components/TeamSelector';
import { QuestMap } from './components/QuestMap';
import { KelimeArkeolojisi } from './components/KelimeArkeolojisi';
import { HikmetIkilemleri } from './components/HikmetIkilemleri';
import { KronolojiMatrisi } from './components/KronolojiMatrisi';
import { EsmaKevn } from './components/EsmaKevn';
import { SirAyeti } from './components/SirAyeti';
import { SoruEditoru } from './components/SoruEditoru';
import { BuzzerAndTimer } from './components/BuzzerAndTimer';
import { playSound } from './components/BuzzerAndTimer';
import { Compass, Sparkles, BookOpen, Clock, Trophy, Award, RotateCcw, Volume2, VolumeX, Shield, Hammer, Gamepad2, Landmark, BookOpenCheck, Home, Sun, Moon, Eye, EyeOff, Pencil, GraduationCap, Maximize2, Minimize2, Heart, X, Music } from 'lucide-react';
import Lottie from 'lottie-react';
import { motion } from 'motion/react';

const ElifBaIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => {
  return (
    <span
      className={`${className} inline-flex items-center justify-center font-bold select-none`}
      style={{
        direction: 'rtl',
        fontFamily: "'Amiri', 'Traditional Arabic', 'Noto Naskh Arabic', serif",
        fontSize: '1.1rem',
        lineHeight: '1',
        gap: '1px',
        marginTop: '-1px'
      }}
    >
      <span style={{ transform: 'translateY(-1px)' }}>أ</span>
      <span style={{ transform: 'translateY(1px)' }}>ب</span>
    </span>
  );
};

// Modular child-friendly portals
import { KuranElifba } from './components/KuranElifba';
import { DersPortal } from './components/DersPortal';
import { GameHub } from './components/GameHub';
import { EzberPortali } from './components/EzberPortali';
import { AkilliTahta } from './components/AkilliTahta';
import { Ilahiler } from './components/Ilahiler';

const LOCAL_STORAGE_KEY = 'cennet_bahcesi_gamedata';

export default function App() {
  const [phase, setPhase] = useState<'intro' | 'map' | 'gameplay' | 'custom_editor' | 'victory'>('intro');
  const [activeZone, setActiveZone] = useState<GameZone | null>(null);
  const [activeTab, setActiveTab] = useState<'home' | 'elifba' | 'quran' | 'lessons' | 'games' | 'ezber' | 'about' | 'ilahiler'>('home');
  const [isIlahiPlaying, setIsIlahiPlaying] = useState<boolean>(false);
  const [showPenTool, setShowPenTool] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('cennet_bahcesi_darkmode') === 'true';
  });

  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isAnimatedBg, setIsAnimatedBg] = useState<boolean>(() => {
    return localStorage.getItem('cennet_bahcesi_animated_bg') !== 'false';
  });
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOutSplash, setFadeOutSplash] = useState(false);
  const [basmalaData, setBasmalaData] = useState<any>(null);
  const [cinematicPhase, setCinematicPhase] = useState<'splash' | 'cinematic' | 'ready'>('splash');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [visitedTabs, setVisitedTabs] = useState<string[]>(['home']);

  useEffect(() => {
    if (!visitedTabs.includes(activeTab)) {
      setVisitedTabs(prev => [...prev, activeTab]);
    }
  }, [activeTab, visitedTabs]);

  const toggleFullscreen = () => {
   
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(err => {
        console.error("Tam ekran hatası:", err);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(err => {
        console.error("Tam ekrandan çıkış hatası:", err);
      });
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasInteractedRef = useRef(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const safetyTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lottieRef = useRef<any>(null);

  // === AUTO-UPDATER STATES ===
  const [updateAvailable, setUpdateAvailable] = useState<any>(null);
  const [updateDownloading, setUpdateDownloading] = useState<boolean>(false);
  const [downloadProgress, setDownloadProgress] = useState<any>(null);
  const [updateDownloaded, setUpdateDownloaded] = useState<boolean>(false);
  const [updateError, setUpdateError] = useState<string | null>(null);
  const [showWelcomeChangelog, setShowWelcomeChangelog] = useState<string | null>(null);

  // Auto-updater event listeners on mount
  useEffect(() => {
    // @ts-ignore
    if (window.electronAPI) {
      // @ts-ignore
      window.electronAPI.getAppVersion().then((currentVersion: string) => {
        const lastVersion = localStorage.getItem('cennet_bahcesi_last_version');
        if (lastVersion && lastVersion !== currentVersion) {
          setShowWelcomeChangelog(currentVersion);
        }
        localStorage.setItem('cennet_bahcesi_last_version', currentVersion);
      }).catch((e: any) => console.warn("App version check failed:", e));

      // @ts-ignore
      window.electronAPI.onUpdateAvailable((info: any) => {
        setUpdateAvailable(info);
      });

      // @ts-ignore
      window.electronAPI.onDownloadProgress((progress: any) => {
        setDownloadProgress(progress);
        setUpdateDownloading(true);
      });

      // @ts-ignore
      window.electronAPI.onUpdateDownloaded((info: any) => {
        setUpdateDownloading(false);
        setUpdateDownloaded(true);
        setTimeout(() => {
          // @ts-ignore
          window.electronAPI.quitAndInstall();
        }, 3000);
      });

      // @ts-ignore
      window.electronAPI.onUpdateError((errMessage: string) => {
        setUpdateError(errMessage);
        setUpdateDownloading(false);
      });
    }
  }, []);

  // Web autoplay engeline karşı kullanıcı etkileşimiyle sesi başlatma dinleyicisi
  useEffect(() => {
    if (hasInteractedRef.current) return;

    const handleFirstUserInteraction = () => {
      if (hasInteractedRef.current) return;
      if (cinematicPhase !== 'splash' && audioRef.current) {
        hasInteractedRef.current = true;
        playBackgroundMusic(35);
        window.removeEventListener('click', handleFirstUserInteraction);
        window.removeEventListener('touchstart', handleFirstUserInteraction);
      }
    };

    window.addEventListener('click', handleFirstUserInteraction);
    window.addEventListener('touchstart', handleFirstUserInteraction);
    return () => {
      window.removeEventListener('click', handleFirstUserInteraction);
      window.removeEventListener('touchstart', handleFirstUserInteraction);
    };
  }, [cinematicPhase]);

  // === DRAGGABLE SMART BOARD PEN STATES ===
  const [penPos, setPenPos] = useState(() => {
    return { x: -9999, y: -9999 };
  });
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const dragStartPos = useRef({ x: 0, y: 0 });
  const dragDistance = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    isDragging.current = true;
    dragStart.current = { x: e.clientX, y: e.clientY };
    let currentX = penPos.x;
    let currentY = penPos.y;
    if (currentX === -9999 && currentY === -9999) {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      currentX = rect.left;
      currentY = rect.top;
    }
    dragStartPos.current = { x: currentX, y: currentY };
    dragDistance.current = 0;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    isDragging.current = true;
    dragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    let currentX = penPos.x;
    let currentY = penPos.y;
    if (currentX === -9999 && currentY === -9999) {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      currentX = rect.left;
      currentY = rect.top;
    }
    dragStartPos.current = { x: currentX, y: currentY };
    dragDistance.current = 0;
  };

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging.current) return;
      let clientX = 0;
      let clientY = 0;
      if ('touches' in e) {
        if (e.touches.length !== 1) return;
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      const deltaX = clientX - dragStart.current.x;
      const deltaY = clientY - dragStart.current.y;
      dragDistance.current = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      const newX = Math.max(10, Math.min(window.innerWidth - 70, dragStartPos.current.x + deltaX));
      const newY = Math.max(10, Math.min(window.innerHeight - 70, dragStartPos.current.y + deltaY));

      setPenPos({ x: newX, y: newY });
    };

    const handleEnd = () => {
      isDragging.current = false;
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchmove', handleMove, { passive: false });
    window.addEventListener('touchend', handleEnd);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setPenPos(prev => ({
        x: Math.max(10, Math.min(window.innerWidth - 70, prev.x)),
        y: Math.max(10, Math.min(window.innerHeight - 70, prev.y))
      }));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Helper to safely play background music and handle browser autoplay blocks + fade-in volume
  const playBackgroundMusic = (startTime: number = 35) => {
    if (!audioRef.current) return;

    // Force load to ensure the browser fetches the audio stream
    try {
      audioRef.current.load();
    } catch (e) { }

    try {
      audioRef.current.currentTime = startTime;
    } catch (e) {
      console.warn("Could not set currentTime before play, will retry after promise resolves:", e);
    }

    // Reset volume to 0 for fade-in
    audioRef.current.volume = 0;

    audioRef.current.play()
      .then(() => {
        hasInteractedRef.current = true;
        setIsMusicPlaying(true);
        // Ensure currentTime is set successfully now that the audio is playing
        try {
          audioRef.current!.currentTime = startTime;
        } catch (e) { }

        let vol = 0;
        const fadeInterval = setInterval(() => {
          vol += 0.05;
          if (vol >= 0.4) {
            vol = 0.4;
            clearInterval(fadeInterval);
          }
          if (audioRef.current) {
            audioRef.current.volume = vol;
          }
        }, 200);
      })
      .catch((err) => {
        console.warn("Autoplay blocked music:", err);
        setIsMusicPlaying(false);
        // Reset volume to default so if they click the button later, it's not silent!
        if (audioRef.current) {
          audioRef.current.volume = 0.4;
        }
      });
  };

  // Load Basmala Lottie on mount and set splash screen timer
  useEffect(() => {
    fetch('assets/lottie-basmala.json')
      .then((r) => r.json())
      .then((data) => {
        setBasmalaData(data);
        // Safety fallback timer in case onComplete is not triggered (reduced to 4.8s due to higher speed)
        safetyTimerRef.current = setTimeout(() => {
          setFadeOutSplash(true);
          setCinematicPhase('cinematic');
          playBackgroundMusic(35);

          setTimeout(() => {
            setShowSplash(false);
          }, 1200);
        }, 4800);
      })
      .catch(() => {
        setShowSplash(false);
        setCinematicPhase('ready');
      });

    return () => {
      if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);
    };
  }, []);

  // Cinematic timer: transition from 'cinematic' to 'ready' after 10 seconds
  useEffect(() => {
    if (cinematicPhase === 'cinematic') {
      const timer = setTimeout(() => {
        setCinematicPhase('ready');
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [cinematicPhase]);

  // Initialize background music instance
  useEffect(() => {
    const audio = new Audio('assets/bg-audio.mp3');
    audio.loop = true;
    audio.preload = 'auto';
    audioRef.current = audio;

    const handlePlay = () => setIsMusicPlaying(true);
    const handlePause = () => setIsMusicPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.pause();
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, []);

  // Control background music play/pause
  const togglePlayMusic = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.stopPropagation();
    }
    if (!audioRef.current) return;

    if (isMusicPlaying) {
      audioRef.current.pause();
      setIsMusicPlaying(false);
    } else {
      // Make sure volume is audible before playing!
      if (audioRef.current.volume === 0) {
        audioRef.current.volume = 0.4;
      }
      audioRef.current.play().then(() => {
        setIsMusicPlaying(true);
      }).catch((err) => {
        console.warn("Audio play blocked or file not found yet:", err);
        setIsMusicPlaying(false);
      });
    }
   
  };

  const toggleAnimatedBg = () => {
    setIsAnimatedBg((prev) => {
      const newVal = !prev;
      localStorage.setItem('cennet_bahcesi_animated_bg', String(newVal));
     
      return newVal;
    });
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newVal = !prev;
      localStorage.setItem('cennet_bahcesi_darkmode', String(newVal));
     
      return newVal;
    });
  };

  // Custom Game questions data loaded from local storage or defaults
  const [gameData, setGameData] = useState<GameData>(defaultGameData);
  const [teams, setTeams] = useState<Team[]>([]);
  const [completedZones, setCompletedZones] = useState<Record<GameZone, boolean>>({
    [GameZone.KelimeArkeolojisi]: false,
    [GameZone.HikmetIkilemleri]: false,
    [GameZone.KronolojiMatrisi]: false,
    [GameZone.EsmaKevn]: false,
    [GameZone.SirAyeti]: false,
  });

  // Load custom questions on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        setGameData(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error reading localStorage data:', e);
    }
  }, []);

  const handleTeamsSelected = (selectedTeams: Team[]) => {
    setTeams(selectedTeams);
    setPhase('map');
   
  };

  const handleSelectZone = (zone: GameZone) => {
    setActiveZone(zone);
    setPhase('gameplay');
   
  };

  const handleAwardPoints = (teamId: string, points: number) => {
    setTeams((prev) =>
      prev.map((t) => (t.id === teamId ? { ...t, score: t.score + points } : t))
    );
  };

  const handleModifyScoreManual = (teamId: string, delta: number) => {
    setTeams((prev) =>
      prev.map((t) => (t.id === teamId ? { ...t, score: Math.max(0, t.score + delta) } : t))
    );
   
  };

  const handleSwitchActiveTeam = (teamId: string) => {
    setTeams((prev) =>
      prev.map((t) => ({ ...t, active: t.id === teamId }))
    );
   
  };

  // Shift active team to the next turn order
  const rotateActiveTeam = () => {
    setTeams((prev) => {
      const activeIdx = prev.findIndex((t) => t.active);
      const nextIdx = (activeIdx + 1) % prev.length;
      return prev.map((t, idx) => ({ ...t, active: idx === nextIdx }));
    });
  };

  const handleRegisterCompletion = () => {
    if (activeZone) {
      setCompletedZones((prev) => ({ ...prev, [activeZone]: true }));
      rotateActiveTeam(); // Give turn to next team
    }
  };

  const handleSaveCustomData = (newData: GameData) => {
    setGameData(newData);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newData));
    } catch (e) {
      console.error('Error writing to localStorage:', e);
    }
  };

  const handleResetToDefault = () => {
    setGameData(defaultGameData);
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch (e) {
      console.error('Error clearing localStorage:', e);
    }
  };

  // Check if all zones are completed to offer victory screen
  const allCompleted = Object.values(completedZones).every((val) => val === true);

  const handleGoToVictory = () => {
    setPhase('victory');
   
  };

  const resetWholeGame = () => {
    setTeams([]);
    setCompletedZones({
      [GameZone.KelimeArkeolojisi]: false,
      [GameZone.HikmetIkilemleri]: false,
      [GameZone.KronolojiMatrisi]: false,
      [GameZone.EsmaKevn]: false,
      [GameZone.SirAyeti]: false,
    });
    setPhase('intro');
    setActiveZone(null);
  };

  // Render Home Dashboard containing launchers for 5 Portals
  const renderHomeView = () => {
    return (
      <div className="max-w-6xl mx-auto px-4 w-full relative z-10 py-3 flex flex-col justify-between min-h-[calc(100vh-12rem)]" id="home-landing-dashboard">
        {/* Premium Brand Card - matching portal card design */}
        <div className="text-center mb-4 mt-2 flex flex-col items-center select-none">
          <div className="group bg-gradient-to-br from-white to-emerald-50/40 dark:from-slate-800 dark:to-emerald-950/30 border-2 border-slate-200 dark:border-slate-700 hover:border-emerald-400 dark:hover:border-emerald-600 rounded-[1.75rem] px-6 py-6 sm:px-10 sm:py-8 shadow-lg hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-500 relative overflow-hidden max-w-lg w-full">
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-transparent dark:from-emerald-900/10 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Logo Calligraphy */}
            <div className="relative z-10 flex flex-col items-center">
              <svg
                className="w-56 sm:w-60 h-auto drop-shadow-sm"
                viewBox="0 0 752.922 323.72"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g className="fill-emerald-700 dark:fill-emerald-400 transition-colors duration-300">
                  <path d="M293.866,93.727v-3.668c3.534-5.023,9.678-12.429,18.44-22.209,8.761-9.78,14.772-15.689,18.032-17.727h3.668c13.855,8.558,23.365,16.3,28.525,23.228,3.394-4.346,8.487-10.188,15.281-17.523,6.791-7.335,11.477-11.817,14.059-13.447h3.668c10.729,6.927,18.847,13.075,24.349,18.439,5.501,5.368,8.252,10.971,8.252,16.81,0,10.325-11.14,23.568-33.416,39.732h-3.667c-9.374-9.506-18.205-17.59-26.489-24.247-4.208,8.694-15.007,19.29-32.396,31.785h-3.667c-12.088-11.951-23.635-22.343-34.638-31.174Z" />
                  <path d="M494.971,218.219c0,13.448-3.738,23.839-11.207,31.174-7.472,7.335-16.574,11.003-27.303,11.003-16.708,0-31.989-2.172-45.845-6.521-14.536-4.482-25.199-6.724-31.989-6.724-9.51,0-17.93,2.343-25.266,7.029-7.335,4.687-15.147,13.143-23.432,25.367l-8.558-4.075c12.496-30.833,26.622-53.654,42.381-68.461,15.756-14.804,31.853-22.209,48.29-22.209,6.79,0,15.959,1.971,27.506,5.909,6.247,2.445,18.608,3.667,37.083,3.667,12.226,0,18.339,7.946,18.339,23.839Z" />
                  <path d="M457.887,43.603v-3.667c3.397-5.161,9.443-12.562,18.135-22.209,8.694-9.644,14.74-15.552,18.134-17.727h3.668c10.458,6.657,18.506,12.77,24.145,18.338,5.635,5.571,8.455,11.206,8.455,16.911,0,9.78-11.479,22.958-34.434,39.528h-3.668c-11.681-11.952-23.158-22.343-34.435-31.174Z" />
                  <path d="M592.161,156.278c3.123,0,5.909,1.528,8.354,4.584,2.444,3.056,3.667,6.896,3.667,11.512,0,8.287-2.684,15.078-8.048,20.375-5.368,5.297-11.309,7.946-17.828,7.946-7.609,0-14.467-1.764-20.579-5.297-5.705-3.123-9.78-4.687-12.226-4.687-2.175,0-3.941.681-5.298,2.038s-3.33,4.075-5.908,8.15c-13.448,20.105-23.808,33.451-31.072,40.038-7.269,6.591-14.264,11.48-20.987,14.671-6.724,3.192-15.316,4.788-25.774,4.788-9.099-.271-13.651-4.687-13.651-13.244,0-13.174,4.721-25.129,14.16-35.861,9.439-10.729,21.155-16.367,35.148-16.912,11.002,0,19.56-2.273,25.673-6.826,6.112-4.549,14.263-14.228,24.45-29.035,4.482-7.198,10.254-10.799,17.318-10.799,3.668,0,8.691,1.359,15.078,4.075,5.568,2.99,11.41,4.483,17.522,4.483Z" />
                  <path d="M680.387,244.504v-3.668c3.396-5.027,9.442-12.397,18.134-22.107,8.694-9.713,14.74-15.657,18.134-17.828h3.668c10.458,6.654,18.506,12.801,24.145,18.439,5.635,5.635,8.455,11.238,8.455,16.81,0,9.78-11.479,22.954-34.434,39.528h-3.668c-11.681-11.954-23.157-22.346-34.434-31.174Z" />
                  <path d="M642.896,27.914c8.828,0,20.069,2.649,33.721,7.947,13.651,5.297,25.367,10.391,35.147,15.281,17.931,8.694,31.037,13.584,39.324,14.67l.611,5.094c-11.14,9.239-36.542,33.823-76.203,73.758-19.02,19.561-32.805,32.33-41.362,38.306-8.558,5.979-17.252,10.426-26.08,13.346-8.831,2.923-18.745,4.381-29.748,4.381-3.123,0-5.909-1.458-8.354-4.381-2.445-2.919-3.668-6.826-3.668-11.716,0-8.15,2.617-14.906,7.845-20.273,5.228-5.364,11.238-8.048,18.032-8.048,27.98,0,55.013-11.614,81.094-34.842l32.396-27.914c-6.387-1.901-17.66-5.909-33.823-12.021-22.005-8.558-35.319-13.276-39.936-14.161-4.619-.882-9.169-1.324-13.651-1.324-14.129,0-23.772,5.164-28.933,15.485l-10.596-3.668c9.507-18.337,19.389-31.241,29.646-38.713,10.254-7.469,21.767-11.207,34.536-11.207Z" />
                  <path d="M66,196.006v-2.067c1.9-2.909,5.283-7.082,10.145-12.52,4.864-5.436,8.247-8.766,10.145-9.991h2.052c5.851,3.752,10.354,7.197,13.508,10.336,3.153,3.141,4.73,6.317,4.73,9.533,0,5.513-6.422,12.94-19.264,22.28h-2.052c-6.535-6.736-12.956-12.594-19.264-17.571Z" />
                  <path d="M166.54,109.753l4.901,1.264c-.912,4.671-1.444,15.274-1.596,31.813-.533,35.604-4.104,63.666-10.715,84.186-9.803,31.392-23.368,55.357-40.694,71.896-17.327,16.539-37.2,24.809-59.617,24.809-17.936,0-32.222-5.533-42.86-16.597-10.641-11.064-15.959-25.631-15.959-43.7,0-16.538,1.842-32.158,5.529-46.859,3.685-14.7,9.213-29.821,16.585-45.365l6.611,2.526c-8.816,21.362-13.223,39.663-13.223,54.898,0,17.84,4.825,31.125,14.477,39.854,9.65,8.729,23.026,13.093,40.125,13.093,13.526,0,25.363-2.279,35.508-6.834,10.145-4.556,18.637-10.471,25.477-17.744,6.839-7.275,12.063-15.715,15.674-25.324,3.608-9.608,5.415-23.218,5.415-40.83l-.228-15.964c0-10.182,1.006-19.983,3.021-29.401,2.013-9.418,5.871-21.323,11.57-35.719Z" />
                  <path d="M268.333,149.491l-2.622,15.964c-.456,2.834-.684,5.59-.684,8.27,0,10.184,2.223,18.166,6.668,23.946,4.445,5.782,10.695,8.671,18.751,8.671,3.419,0,5.984,1.246,7.694,3.733,1.709,2.488,2.564,5.725,2.564,9.704,0,7.58-2.148,13.438-6.44,17.572-4.294,4.135-9.367,6.202-15.218,6.202-8.891,0-15.884-3.101-20.974-9.303-5.092-6.202-7.637-14.127-7.637-23.774h-.342c-4.104,10.644-10.754,21.058-19.949,31.239-2.963,2.067-7.637,3.886-14.021,5.456-6.383,1.568-17.289,3.272-32.715,5.11l-.456-5.168c15.198-8.192,28.649-16.691,40.353-25.497,11.702-8.804,19.777-18.376,24.223-28.713,4.446-10.336,9.062-25.152,13.85-44.446l6.954,1.033Z" />
                  <path d="M363.971,181.534c-3.801,10.644-10.259,20.846-19.378,30.608-9.119,9.762-19.417,17.438-30.892,23.027-11.476,5.59-23.026,8.384-34.653,8.384-6.458-.152-9.727-4.632-9.803-13.438,0-9.8,3.687-16.844,11.057-21.133,0-5.588,2.793-12.978,8.378-22.166,5.585-9.188,13.241-18.49,22.969-27.908,9.727-9.418,19.225-14.127,28.498-14.127,4.711,0,8.567,1.264,11.57,3.79,3.001,2.526,4.502,5.782,4.502,9.763,0,5.819-2.205,10.184-6.611,13.093l-2.052-.229c-4.104-3.599-9.082-5.398-14.933-5.398-6.992,0-13.128,2.01-18.409,6.03-5.283,4.02-7.922,8.9-7.922,14.643,0,4.595,1.918,8.366,5.756,11.313,3.836,2.948,8.834,4.422,14.99,4.422,2.204-.383,4.407-1.072,6.612-2.067,10.487-4.135,19.15-11.179,25.99-21.133l4.332,2.526Z" />
                </g>
              </svg>

              {/* Divider line */}
              <div className="w-24 h-0.5 bg-emerald-500/30 dark:bg-emerald-400/30 rounded-full mt-4 mb-3" />

              {/* Title - clean, solid colors, no gradient clipping */}
              <h2 className="font-display font-black text-2xl sm:text-3xl tracking-[0.15em] uppercase text-emerald-800 dark:text-emerald-300">
                CENNET BAHÇESİ
              </h2>

              {/* Subtitle */}
              <p className="text-slate-500 dark:text-slate-400 font-bold text-[10px] sm:text-xs mt-2 uppercase tracking-[0.25em]">
                ELİF-BA  •  KUR'AN-I KERİM  •  EZBER  •  DERSLER  •  OYUNLAR  •  İLAHİLER
              </p>
            </div>

            {/* Audio & Visual Controllers - inside card */}
            <div className="mt-4 flex gap-3 justify-center relative z-10">
              <button
                onClick={(e) => togglePlayMusic(e)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black tracking-wide uppercase transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm border-2 ${isMusicPlaying
                  ? 'bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-600 animate-pulse'
                  : 'bg-white/80 dark:bg-slate-700/80 hover:bg-slate-50 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600'
                  }`}
              >
                {isMusicPlaying ? (
                  <>
                    <VolumeX className="w-4 h-4 animate-bounce" />
                    Sesi Durdur
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4" />
                    Sesi Dinle
                  </>
                )}
              </button>
              <button
                onClick={toggleAnimatedBg}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black tracking-wide uppercase transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm border-2 bg-white/80 dark:bg-slate-700/80 hover:bg-slate-50 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600"
              >
                {isAnimatedBg ? (
                  <>
                    <EyeOff className="w-4 h-4" />
                    Arka Planı Sabitle
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4" />
                    Arka Planı Hareketlendir
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* 5 Main Portals in 3+2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 w-full max-w-5xl mx-auto items-stretch">

          {/* Portal 1: Elif-Ba */}
          <div
            onClick={() => { setActiveTab('elifba'); }}
            className="group bg-gradient-to-br from-white to-emerald-50/30 border-2 border-slate-200 hover:border-emerald-350 rounded-[1.5rem] p-4 shadow-sm hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex items-center justify-between gap-3 relative overflow-hidden md:col-span-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="flex items-center gap-4 relative z-10 flex-1 min-w-0">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
                <ElifBaIcon className="w-6 h-6" />
              </div>
              <div className="flex flex-col justify-center min-w-0">
                <h3 className="font-display font-black text-base text-slate-800 group-hover:text-emerald-700 transition-colors tracking-tight uppercase">
                  ELİF-BA
                </h3>
                <p className="text-[11px] text-slate-500 font-semibold leading-snug line-clamp-1">
                  Harflerin doğru mahreçleri, okuma alıştırmaları ve eğlenceli harf bulmacası.
                </p>
              </div>
            </div>
            <div className="w-9 h-9 bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm shrink-0 relative z-10">
              ➔
            </div>
          </div>

          {/* Portal 2: Quran */}
          <div
            onClick={() => { setActiveTab('quran'); }}
            className="group bg-gradient-to-br from-white to-teal-50/30 border-2 border-slate-200 hover:border-teal-350 rounded-[1.5rem] p-4 shadow-sm hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex items-center justify-between gap-3 relative overflow-hidden md:col-span-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="flex items-center gap-4 relative z-10 flex-1 min-w-0">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-650 rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="flex flex-col justify-center min-w-0">
                <h3 className="font-display font-black text-base text-slate-800 group-hover:text-teal-700 transition-colors tracking-tight uppercase">
                  KUR'AN-I KERİM
                </h3>
                <p className="text-[11px] text-slate-500 font-semibold leading-snug line-clamp-1">
                  114 sûrenin tamamını Mishaari Raashid al-Afaasee sesinden dinleyin ve okuyun.
                </p>
              </div>
            </div>
            <div className="w-9 h-9 bg-teal-50 text-teal-600 group-hover:bg-teal-500 group-hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm shrink-0 relative z-10">
              ➔
            </div>
          </div>

          {/* Portal 3: Ezber */}
          <div
            onClick={() => { setActiveTab('ezber'); }}
            className="group bg-gradient-to-br from-white to-violet-50/30 border-2 border-slate-200 hover:border-violet-350 rounded-[1.5rem] p-4 shadow-sm hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex items-center justify-between gap-3 relative overflow-hidden md:col-span-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="flex items-center gap-4 relative z-10 flex-1 min-w-0">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-600 rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex flex-col justify-center min-w-0">
                <h3 className="font-display font-black text-base text-slate-800 group-hover:text-violet-750 transition-colors tracking-tight uppercase">
                  EZBER LİSTESİ
                </h3>
                <p className="text-[11px] text-slate-500 font-semibold leading-snug line-clamp-1">
                  Sözlü sınavlar, sûre ezber takibi ve ezber gelişim tablosu.
                </p>
              </div>
            </div>
            <div className="w-9 h-9 bg-violet-50 text-violet-600 group-hover:bg-violet-500 group-hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm shrink-0 relative z-10">
              ➔
            </div>
          </div>

          {/* Portal 4: Interactive Lessons */}
          <div
            onClick={() => { setActiveTab('lessons'); }}
            className="group bg-gradient-to-br from-white to-amber-50/30 border-2 border-slate-200 hover:border-amber-350 rounded-[1.5rem] p-4 shadow-sm hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex items-center justify-between gap-3 relative overflow-hidden md:col-span-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="flex items-center gap-4 relative z-10 flex-1 min-w-0">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex flex-col justify-center min-w-0">
                <h3 className="font-display font-black text-base text-slate-800 group-hover:text-amber-700 transition-colors tracking-tight uppercase">
                  DERS İÇERİKLERİ
                </h3>
                <p className="text-[11px] text-slate-500 font-semibold leading-snug line-clamp-1">
                  Siyer, İnanç ve Ahlak dersleri için hazırlanmış interaktif slayt sunumları.
                </p>
              </div>
            </div>
            <div className="w-9 h-9 bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm shrink-0 relative z-10">
              ➔
            </div>
          </div>

          {/* Portal 5: Classroom Games Tourney */}
          <div
            onClick={() => { setActiveTab('games'); }}
            className="group bg-gradient-to-br from-white to-sky-50/30 border-2 border-slate-200 hover:border-sky-350 rounded-[1.5rem] p-4 shadow-sm hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex items-center justify-between gap-3 relative overflow-hidden md:col-span-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="flex items-center gap-4 relative z-10 flex-1 min-w-0">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-indigo-650 rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <div className="flex flex-col justify-center min-w-0">
                <h3 className="font-display font-black text-base text-slate-800 group-hover:text-sky-700 transition-colors tracking-tight uppercase">
                  OYUNLAR
                </h3>
                <p className="text-[11px] text-slate-500 font-semibold leading-snug line-clamp-1">
                  Kelime Arkeolojisi, Kronoloji ve İkilemler gibi heyecan dolu meclis oyunları.
                </p>
              </div>
            </div>
            <div className="w-9 h-9 bg-sky-50 text-sky-600 group-hover:bg-sky-500 group-hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm shrink-0 relative z-10">
              ➔
            </div>
          </div>

          {/* Portal 6: İlahiler */}
          <div
            onClick={() => { setActiveTab('ilahiler'); }}
            className="group bg-gradient-to-br from-white to-rose-50/30 border-2 border-slate-200 hover:border-rose-350 rounded-[1.5rem] p-4 shadow-sm hover:shadow-lg hover:shadow-rose-500/5 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex items-center justify-between gap-3 relative overflow-hidden md:col-span-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="flex items-center gap-4 relative z-10 flex-1 min-w-0">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-650 rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
                <Music className="w-6 h-6" />
              </div>
              <div className="flex flex-col justify-center min-w-0">
                <h3 className="font-display font-black text-base text-slate-800 group-hover:text-rose-700 transition-colors tracking-tight uppercase">
                  İLAHİLER
                </h3>
                <p className="text-[11px] text-slate-500 font-semibold leading-snug line-clamp-1">
                  Önderimiz Peygamber, Ey Sevgili ve daha fazlası; dinle ve sözleri oku.
                </p>
              </div>
            </div>
            <div className="w-9 h-9 bg-rose-50 text-rose-600 group-hover:bg-rose-500 group-hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm shrink-0 relative z-10">
              ➔
            </div>
          </div>

        </div>

      </div>
    );
  };

  // Render About & Dua Portal Page
  const renderAboutView = () => {
    return (
      <motion.div
        key="about-tab"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-7xl mx-auto px-4 pt-1 pb-6 relative z-10 flex flex-col items-center gap-6 min-h-[calc(100vh-12rem)] select-none w-full"
        id="about-portal-view"
      >
        {/* Header Section */}
        <div className="flex flex-col items-center gap-2 text-center mt-0">
          <div className="w-24 h-24 rounded-2xl bg-white shadow-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center p-2 overflow-hidden hover:scale-105 transition-transform duration-300 shrink-0">
            <img src="assets/logo.png" alt="Cennet Bahçesi Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-800 dark:text-slate-100 font-display tracking-tight mt-2">
            Cennet Bahçesi
          </h1>
          <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-400 text-xs font-black tracking-widest uppercase border border-emerald-500/20 dark:border-emerald-400/25">
            Hakkımızda & Dua Talebi
          </span>
        </div>

        {/* Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-slate-400/40 to-transparent dark:via-slate-600/40 rounded-full" />

        {/* Sincere Content Card */}
        <div className="w-full bg-white/45 dark:bg-slate-900/35 border border-slate-200/50 dark:border-slate-800/50 rounded-[2rem] p-6 sm:p-10 shadow-lg backdrop-blur-md flex flex-col gap-6 text-slate-700 dark:text-slate-200 text-center max-w-6xl relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

          <p className="font-bold text-base sm:text-lg text-slate-800 dark:text-slate-100 leading-relaxed">
            Bu çalışma; yavrularımızın ve gençlerimizin kalplerini Kur'an-ı Kerim'in nuruyla aydınlatmak, hayat rehberimiz olan yüce kitabımızı ve güzel ahlakı onlara sevdirmek gayesiyle, <strong>yalnızca Allah rızası gözetilerek</strong> hazırlanmıştır. Projemiz tamamen ücretsizdir ve hiçbir ticari amaç taşımamaktadır.
          </p>

          <div className="bg-emerald-500/5 dark:bg-emerald-400/5 border border-emerald-500/10 dark:border-emerald-400/10 rounded-2xl p-6 sm:p-8 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 text-emerald-500/5 font-display text-8xl pointer-events-none select-none">🤲</div>
            <h3 className="font-black text-emerald-800 dark:text-emerald-400 text-base sm:text-lg mb-3 flex items-center gap-2.5">
              <span className="text-xl">🤲</span> Gönülden Bir Dua Talebi
            </h3>
            <p className="italic text-slate-750 dark:text-slate-305 text-sm leading-relaxed">
              "Bu uygulamanın kodlanmasında, tasarlanmasında ve hayata geçirilmesinde emeği geçen, vesile olan tüm kardeşlerinizin; anne babalarının, eş ve evlatlarının dünya ve ahiret saadetine nail olması, her türlü maddi ve manevi sıkıntılardan selamete ermesi, ömürlerinin hayırlı ve bereketli olması için siz kıymetli hocalarımızdan ve dua dostlarımızdan samimi birer dua istirham ediyoruz."
            </p>
            <p className="mt-4 text-right font-black text-xs sm:text-sm text-emerald-700 dark:text-emerald-500">
              Rabbimiz, bu mütevazı çalışmayı katında kabul buyursun. Bizleri rızasına uygun işler yapmaya muvaffak kılsın. Amin.
            </p>
          </div>
        </div>

        {/* Contact Details Panel */}
        <div className="w-full max-w-6xl bg-white/45 dark:bg-slate-900/35 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-md backdrop-blur-md">
          <div className="text-center sm:text-left">
            <h4 className="font-extrabold text-xs sm:text-sm text-slate-850 dark:text-slate-300 uppercase tracking-wider">
              Destek ve Talepleriniz İçin
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Görüş, öneri veya destek taleplerinizi bize e-posta ile iletebilirsiniz.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="mailto:mhmdhsyn1453@gmail.com"
              className="px-4.5 py-2.5 bg-slate-800 hover:bg-slate-900 dark:bg-slate-200 dark:text-slate-950 text-white font-black text-xs rounded-xl shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              mhmdhsyn1453@gmail.com
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText("mhmdhsyn1453@gmail.com");
               
                alert("E-posta adresi panoya kopyalandı!");
              }}
              className="p-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 rounded-xl cursor-pointer shadow-sm hover:scale-105 active:scale-95 transition-all"
              title="Adresi Kopyala"
            >
              📋
            </button>
          </div>
        </div>

        {/* Back button */}
        <div className="flex w-full justify-center">
          <button
            onClick={() => { setActiveTab('home'); }}
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all active:scale-95 cursor-pointer text-sm"
          >
            Anasayfaya Dön ➔
          </button>
        </div>

      </motion.div>
    );
  };

  // Render station inside active gameplay loop
  const renderGameplayStation = () => {
    const currentActiveTeam = teams.find((t) => t.active) || teams[0];

    switch (activeZone) {
      case GameZone.KelimeArkeolojisi:
        return (
          <KelimeArkeolojisi
            questions={gameData.kelimeQuestions}
            activeTeam={currentActiveTeam}
            onAwardPoints={handleAwardPoints}
            onRegisterCompletion={handleRegisterCompletion}
            onBackToMap={() => {
              setPhase('map');
              setActiveZone(null);
            }}
          />
        );
      case GameZone.HikmetIkilemleri:
        return (
          <HikmetIkilemleri
            questions={gameData.dilemmaQuestions}
            activeTeam={currentActiveTeam}
            onAwardPoints={handleAwardPoints}
            onRegisterCompletion={handleRegisterCompletion}
            onBackToMap={() => {
              setPhase('map');
              setActiveZone(null);
            }}
          />
        );
      case GameZone.KronolojiMatrisi:
        return (
          <KronolojiMatrisi
            questions={gameData.chronologyQuestions}
            activeTeam={currentActiveTeam}
            onAwardPoints={handleAwardPoints}
            onRegisterCompletion={handleRegisterCompletion}
            onBackToMap={() => {
              setPhase('map');
              setActiveZone(null);
            }}
          />
        );
      case GameZone.EsmaKevn:
        return (
          <EsmaKevn
            questions={gameData.esmaQuestions}
            activeTeam={currentActiveTeam}
            onAwardPoints={handleAwardPoints}
            onRegisterCompletion={handleRegisterCompletion}
            onBackToMap={() => {
              setPhase('map');
              setActiveZone(null);
            }}
          />
        );
      case GameZone.SirAyeti:
        return (
          <SirAyeti
            questions={gameData.sirAyetiQuestions}
            activeTeam={currentActiveTeam}
            onAwardPoints={handleAwardPoints}
            onRegisterCompletion={handleRegisterCompletion}
            onBackToMap={() => {
              setPhase('map');
              setActiveZone(null);
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'dark bg-[#0a192f] text-slate-100' : 'bg-[#c7b99a] text-slate-800'} flex flex-col justify-between relative overflow-hidden font-sans`} id="app-root-container">

      {/* Splash Screen Fullscreen Overlay */}
      {showSplash && basmalaData && (
        <div
          className={`fixed inset-0 z-[99999] ${isDarkMode ? 'bg-[#0a192f]/50 text-slate-100' : 'bg-[#faf6ef]/45 text-slate-800'} backdrop-blur-[12px] flex flex-col items-center justify-center select-none transition-all duration-1000 ease-in-out ${fadeOutSplash ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          id="splash-screen"
        >
          <div className="w-full max-w-[920px] h-[420px] sm:h-[550px] flex items-center justify-center px-6">
            <Lottie
              lottieRef={(instance) => {
                lottieRef.current = instance;
                if (instance) {
                  instance.setSpeed(1.25); // Speed up slightly to complete in about 4s
                }
              }}
              animationData={basmalaData}
              loop={false}
              style={{
                filter: isDarkMode
                  ? 'invert(74%) sepia(51%) saturate(579%) hue-rotate(354deg) brightness(105%) contrast(92%)' // Premium Gold in Dark Mode
                  : 'invert(24%) sepia(95%) saturate(366%) hue-rotate(120deg) brightness(88%) contrast(92%)' // Deep Emerald in Light Mode
              }}
              onComplete={() => {
                if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);
                setTimeout(() => {
                  setFadeOutSplash(true);
                  setCinematicPhase('cinematic');

                  playBackgroundMusic(35);

                  setTimeout(() => {
                    setShowSplash(false);
                  }, 1200);
                }, 400); // Reduced delay from 700ms to 400ms for a tighter fade-out transition
              }}
            />
          </div>

          {/* Brand Card on Splash screen */}
          <div className="mt-4 bg-white/45 dark:bg-[#112240]/45 backdrop-blur-[8px] border border-white/30 dark:border-slate-700/50 rounded-[1.5rem] p-5 shadow-lg max-w-[300px] sm:max-w-[340px] w-full flex flex-col items-center select-none animate-fade-in duration-750 relative overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/10 to-transparent dark:from-emerald-950/5 dark:to-transparent pointer-events-none" />

            <svg
              className="w-20 sm:w-24 h-auto drop-shadow-sm opacity-95 relative z-10"
              viewBox="0 0 752.922 323.72"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="fill-emerald-700 dark:fill-emerald-400 transition-colors duration-300">
                <path d="M293.866,93.727v-3.668c3.534-5.023,9.678-12.429,18.44-22.209,8.761-9.78,14.772-15.689,18.032-17.727h3.668c13.855,8.558,23.365,16.3,28.525,23.228,3.394-4.346,8.487-10.188,15.281-17.523,6.791-7.335,11.477-11.817,14.059-13.447h3.668c10.729,6.927,18.847,13.075,24.349,18.439,5.501,5.368,8.252,10.971,8.252,16.81,0,10.325-11.14,23.568-33.416,39.732h-3.667c-9.374-9.506-18.205-17.59-26.489-24.247-4.208,8.694-15.007,19.29-32.396,31.785h-3.667c-12.088-11.951-23.635-22.343-34.638-31.174Z" />
                <path d="M494.971,218.219c0,13.448-3.738,23.839-11.207,31.174-7.472,7.335-16.574,11.003-27.303,11.003-16.708,0-31.989-2.172-45.845-6.521-14.536-4.482-25.199-6.724-31.989-6.724-9.51,0-17.93,2.343-25.266,7.029-7.335,4.687-15.147,13.143-23.432,25.367l-8.558-4.075c12.496-30.833,26.622-53.654,42.381-68.461,15.756-14.804,31.853-22.209,48.29-22.209,6.79,0,15.959,1.971,27.506,5.909,6.247,2.445,18.608,3.667,37.083,3.667,12.226,0,18.339,7.946,18.339,23.839Z" />
                <path d="M457.887,43.603v-3.667c3.397-5.161,9.443-12.562,18.135-22.209,8.694-9.644,14.74-15.552,18.134-17.727h3.668c10.458,6.657,18.506,12.77,24.145,18.338,5.635,5.571,8.455,11.206,8.455,16.911,0,9.78-11.479,22.958-34.434,39.528h-3.668c-11.681-11.952-23.158-22.343-34.435-31.174Z" />
                <path d="M592.161,156.278c3.123,0,5.909,1.528,8.354,4.584,2.444,3.056,3.667,6.896,3.667,11.512,0,8.287-2.684,15.078-8.048,20.375-5.368,5.297-11.309,7.946-17.828,7.946-7.609,0-14.467-1.764-20.579-5.297-5.705-3.123-9.78-4.687-12.226-4.687-2.175,0-3.941.681-5.298,2.038s-3.33,4.075-5.908,8.15c-13.448,20.105-23.808,33.451-31.072,40.038-7.269,6.591-14.264,11.48-20.987,14.671-6.724,3.192-15.316,4.788-25.774,4.788-9.099-.271-13.651-4.687-13.651-13.244,0-13.174,4.721-25.129,14.16-35.861,9.439-10.729,21.155-16.367,35.148-16.912,11.002,0,19.56-2.273,25.673-6.826,6.112-4.549,14.263-14.228,24.45-29.035,4.482-7.198,10.254-10.799,17.318-10.799,3.668,0,8.691,1.359,15.078,4.075,5.568,2.99,11.41,4.483,17.522,4.483Z" />
                <path d="M680.387,244.504v-3.668c3.396-5.027,9.442-12.397,18.134-22.107,8.694-9.713,14.74-15.657,18.134-17.828h3.668c10.458,6.654,18.506,12.801,24.145,18.439,5.635,5.635,8.455,11.238,8.455,16.81,0,9.78-11.479,22.954-34.434,39.528h-3.668c-11.681-11.954-23.157-22.346-34.434-31.174Z" />
                <path d="M642.896,27.914c8.828,0,20.069,2.649,33.721,7.947,13.651,5.297,25.367,10.391,35.147,15.281,17.931,8.694,31.037,13.584,39.324,14.67l.611,5.094c-11.14,9.239-36.542,33.823-76.203,73.758-19.02,19.561-32.805,32.33-41.362,38.306-8.558,5.979-17.252,10.426-26.08,13.346-8.831,2.923-18.745,4.381-29.748,4.381-3.123,0-5.909-1.458-8.354-4.381-2.445-2.919-3.668-6.826-3.668-11.716,0-8.15,2.617-14.906,7.845-20.273,5.228-5.364,11.238-8.048,18.032-8.048,27.98,0,55.013-11.614,81.094-34.842l32.396-27.914c-6.387-1.901-17.66-5.909-33.823-12.021-22.005-8.558-35.319-13.276-39.936-14.161-4.619-.882-9.169-1.324-13.651-1.324-14.129,0-23.772,5.164-28.933,15.485l-10.596-3.668c9.507-18.337,19.389-31.241,29.646-38.713,10.254-7.469,21.767-11.207,34.536-11.207Z" />
                <path d="M66,196.006v-2.067c1.9-2.909,5.283-7.082,10.145-12.52,4.864-5.436,8.247-8.766,10.145-9.991h2.052c5.851,3.752,10.354,7.197,13.508,10.336,3.153,3.141,4.73,6.317,4.73,9.533,0,5.513-6.422,12.94-19.264,22.28h-2.052c-6.535-6.736-12.956-12.594-19.264-17.571Z" />
                <path d="M166.54,109.753l4.901,1.264c-.912,4.671-1.444,15.274-1.596,31.813-.533,35.604-4.104,63.666-10.715,84.186-9.803,31.392-23.368,55.357-40.694,71.896-17.327,16.539-37.2,24.809-59.617,24.809-17.936,0-32.222-5.533-42.86-16.597-10.641-11.064-15.959-25.631-15.959-43.7,0-16.538,1.842-32.158,5.529-46.859,3.685-14.7,9.213-29.821,16.585-45.365l6.611,2.526c-8.816,21.362-13.223,39.663-13.223,54.898,0,17.84,4.825,31.125,14.477,39.854,9.65,8.729,23.026,13.093,40.125,13.093,13.526,0,25.363-2.279,35.508-6.834,10.145-4.556,18.637-10.471,25.477-17.744,6.839-7.275,12.063-15.715,15.674-25.324,3.608-9.608,5.415-23.218,5.415-40.83l-.228-15.964c0-10.182,1.006-19.983,3.021-29.401,2.013-9.418,5.871-21.323,11.57-35.719Z" />
                <path d="M268.333,149.491l-2.622,15.964c-.456,2.834-.684,5.59-.684,8.27,0,10.184,2.223,18.166,6.668,23.946,4.445,5.782,10.695,8.671,18.751,8.671,3.419,0,5.984,1.246,7.694,3.733,1.709,2.488,2.564,5.725,2.564,9.704,0,7.58-2.148,13.438-6.44,17.572-4.294,4.135-9.367,6.202-15.218,6.202-8.891,0-15.884-3.101-20.974-9.303-5.092-6.202-7.637-14.127-7.637-23.774h-.342c-4.104,10.644-10.754,21.058-19.949,31.239-2.963,2.067-7.637,3.886-14.021,5.456-6.383,1.568-17.289,3.272-32.715,5.11l-.456-5.168c15.198-8.192,28.649-16.691,40.353-25.497,11.702-8.804,19.777-18.376,24.223-28.713,4.446-10.336,9.062-25.152,13.85-44.446l6.954,1.033Z" />
                <path d="M363.971,181.534c-3.801,10.644-10.259,20.846-19.378,30.608-9.119,9.762-19.417,17.438-30.892,23.027-11.476,5.59-23.026,8.384-34.653,8.384-6.458-.152-9.727-4.632-9.803-13.438,0-9.8,3.687-16.844,11.057-21.133,0-5.588,2.793-12.978,8.378-22.166,5.585-9.188,13.241-18.49,22.969-27.908,9.727-9.418,19.225-14.127,28.498-14.127,4.711,0,8.567,1.264,11.57,3.79,3.001,2.526,4.502,5.782,4.502,9.763,0,5.819-2.205,10.184-6.611,13.093l-2.052-.229c-4.104-3.599-9.082-5.398-14.933-5.398-6.992,0-13.128,2.01-18.409,6.03-5.283,4.02-7.922,8.9-7.922,14.643,0,4.595,1.918,8.366,5.756,11.313,3.836,2.948,8.834,4.422,14.99,4.422,2.204-.383,4.407-1.072,6.612-2.067,10.487-4.135,19.15-11.179,25.99-21.133l4.332,2.526Z" />
              </g>
            </svg>
            <h2 className="font-display font-black text-lg sm:text-xl tracking-[0.15em] uppercase text-emerald-800 dark:text-emerald-300 mt-3 relative z-10 whitespace-nowrap">
              CENNET BAHÇESİ
            </h2>
          </div>
        </div>
      )}

      {/* Subtle Premium Dot Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: isDarkMode
            ? 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)'
            : 'radial-gradient(#94a3b8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: isDarkMode ? 1 : 0.12
        }}
      />

      {/* Playful Floating Circles for Game Atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className={`absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full blur-[120px] transition-all duration-700 ${isDarkMode ? 'bg-blue-900/20' : 'bg-emerald-200/18'
          }`}></div>
        <div className={`absolute -bottom-20 -right-20 w-[550px] h-[550px] rounded-full blur-[140px] transition-all duration-700 ${isDarkMode ? 'bg-indigo-900/15' : 'bg-amber-200/15'
          }`}></div>
        <div className={`absolute top-[20%] left-[70%] w-[400px] h-[400px] rounded-full blur-[100px] transition-all duration-700 ${isDarkMode ? 'bg-sky-900/15' : 'bg-sky-200/12'
          }`}></div>
        <div className={`absolute top-[60%] left-[10%] w-[400px] h-[400px] rounded-full blur-[100px] transition-all duration-700 ${isDarkMode ? 'bg-violet-900/12' : 'bg-purple-200/10'
          }`}></div>
      </div>

      {/* Glassmorphic Background Video for Homepage and lessons tab fullscreen */}
      {((activeTab === 'home') || ((activeTab === 'lessons' || activeTab === 'ezber') && isFocused)) && isAnimatedBg && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-102 animate-fade-in"
            src="assets/bg-video.mp4"
          />
          {/* Glass blur overlay: fades out (opacity-0) when splash ends, revealing the clear video during cinematic phase */}
          <div
            className={`absolute inset-0 bg-white/15 dark:bg-[#0a192f]/35 backdrop-blur-[10px] pointer-events-none transition-opacity duration-[1200ms] ease-in-out ${(activeTab === 'home' && cinematicPhase === 'cinematic') ? 'opacity-0' : 'opacity-100'
              }`}
          />
        </div>
      )}

      {/* Flat Background when animation is off, or lessons full screen */}
      {((activeTab === 'home') || ((activeTab === 'lessons' || activeTab === 'ezber') && isFocused)) && !isAnimatedBg && (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#f3ede2] to-[#c7b99a] dark:from-[#0d1e3d] dark:to-[#0a192f] pointer-events-none animate-fade-in" />
      )}

      {/* Girişi Atla (Skip Intro) Button */}
      {cinematicPhase === 'cinematic' && (
        <button
          onClick={() => {
            setCinematicPhase('ready');
           
            if (audioRef.current && audioRef.current.paused) {
              playBackgroundMusic(35);
            }
          }}
          className="fixed bottom-[20%] left-1/2 -translate-x-1/2 z-[99999] flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/20 dark:bg-slate-900/40 backdrop-blur-md border border-white/30 dark:border-slate-700/50 text-slate-800 dark:text-slate-200 text-xs font-black tracking-widest uppercase hover:bg-white/35 dark:hover:bg-slate-800/50 hover:border-emerald-450 dark:hover:border-emerald-500 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md select-none animate-fade-in"
        >
          <span>Girişi Atla</span>
          <span className="text-sm font-normal">➔</span>
        </button>
      )}

      {/* Premium Top Right Control Panel on Homepage */}
      {activeTab === 'home' && phase !== 'gameplay' && phase !== 'victory' && phase !== 'custom_editor' && (
        <div
          className={`fixed top-6 right-6 z-50 flex items-center gap-3.5 transition-all duration-700 ease-in-out ${cinematicPhase === 'ready'
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-6 pointer-events-none'
            }`}
          id="homepage-control-dock"
        >
          {/* Theme Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="group relative w-12 h-12 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 border border-slate-200/50 dark:border-slate-800/50 bg-white/30 dark:bg-slate-900/30 backdrop-blur-md text-slate-700 dark:text-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-emerald-500/10 hover:border-emerald-500/30 dark:hover:border-emerald-500/30"
            title={isDarkMode ? "Aydınlık Mod" : "Karanlık Mod"}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            {isDarkMode ? (
              <Sun className="w-5.5 h-5.5 text-amber-400 group-hover:rotate-45 transition-transform duration-500" />
            ) : (
              <Moon className="w-5.5 h-5.5 text-indigo-600 group-hover:-rotate-12 transition-transform duration-500" />
            )}
          </button>

          <button
            onClick={() => { setActiveTab('about'); setPhase('map'); setActiveZone(null); setIsFocused(false); }}
            className={`group relative w-12 h-12 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 ${activeTab === 'about'
              ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20'
              : 'bg-white/30 dark:bg-slate-900/30 backdrop-blur-md text-slate-700 dark:text-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)]'
              }`}
            title="Hakkımızda & Dua Talebi"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <img src="assets/logo.png" alt="Logo" className="w-12 h-12 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300" />
          </button>

          {/* Fullscreen Toggle Button */}
          <button
            onClick={toggleFullscreen}
            className="group relative w-12 h-12 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 border border-slate-200/50 dark:border-slate-800/50 bg-white/30 dark:bg-slate-900/30 backdrop-blur-md text-slate-700 dark:text-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-emerald-500/10 hover:border-emerald-500/30 dark:hover:border-emerald-500/30"
            title={isFullscreen ? "Tam Ekrandan Çık" : "Tam Ekran Yap"}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            {isFullscreen ? (
              <Minimize2 className="w-5.5 h-5.5 text-emerald-600 dark:text-emerald-400" />
            ) : (
              <Maximize2 className="w-5.5 h-5.5 text-emerald-700 dark:text-emerald-500" />
            )}
          </button>
        </div>
      )}

      {/* Sleek Floating Vertical Navigation Sidebar */}
      {phase !== 'gameplay' && phase !== 'victory' && phase !== 'custom_editor' && activeTab !== 'home' && (
        <div
          className={`fixed top-1/2 left-6 z-50 flex flex-col gap-3 transition-all duration-500 ease-in-out ${cinematicPhase === 'ready'
            ? (isFocused ? '-translate-x-24 -translate-y-1/2 opacity-0 pointer-events-none' : 'translate-x-0 -translate-y-1/2 opacity-100 pointer-events-auto')
            : '-translate-y-1/2 opacity-0 pointer-events-none'
            }`}
          id="floating-vertical-nav"
        >
          {/* Home button */}
          {activeTab !== 'home' && (
            <button
              onClick={() => { setActiveTab('home'); setPhase('map'); setActiveZone(null); setIsFocused(false); }}
              className={`group relative w-12 h-12 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 border ${activeTab === 'home'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-emerald-600 shadow-lg shadow-emerald-500/20'
                : 'border-slate-200/50 dark:border-slate-800/50 bg-white/30 dark:bg-slate-900/30 backdrop-blur-md text-slate-700 dark:text-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-emerald-500/30 dark:hover:border-emerald-500/30'
                }`}
              title="Anasayfa"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <Home className="w-5 h-5 relative z-10" />
            </button>
          )}

          {/* Elif-Ba button */}
          {activeTab !== 'home' && (
            <button
              onClick={() => { setActiveTab('elifba'); setPhase('map'); setActiveZone(null); setIsFocused(false); }}
              className={`group relative w-12 h-12 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 border ${activeTab === 'elifba'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-emerald-600 shadow-lg shadow-emerald-500/20'
                : 'border-slate-200/50 dark:border-slate-800/50 bg-white/30 dark:bg-slate-900/30 backdrop-blur-md text-slate-700 dark:text-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-emerald-500/30 dark:hover:border-emerald-500/30'
                }`}
              title="Elif-Ba"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10">
                <ElifBaIcon className="w-5 h-5" />
              </div>
            </button>
          )}

          {/* Kur'an-ı Kerim button */}
          {activeTab !== 'home' && (
            <button
              onClick={() => { setActiveTab('quran'); setPhase('map'); setActiveZone(null); setIsFocused(false); }}
              className={`group relative w-12 h-12 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 border ${activeTab === 'quran'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-emerald-600 shadow-lg shadow-emerald-500/20'
                : 'border-slate-200/50 dark:border-slate-800/50 bg-white/30 dark:bg-slate-900/30 backdrop-blur-md text-slate-700 dark:text-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-emerald-500/30 dark:hover:border-emerald-500/30'
                }`}
              title="Kur'an-ı Kerim"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <BookOpen className="w-5 h-5 relative z-10" />
            </button>
          )}

          {/* Ezber Listesi button */}
          {activeTab !== 'home' && (
            <button
              onClick={() => { setActiveTab('ezber'); setPhase('map'); setActiveZone(null); setIsFocused(false); }}
              className={`group relative w-12 h-12 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 border ${activeTab === 'ezber'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-emerald-600 shadow-lg shadow-emerald-500/20'
                : 'border-slate-200/50 dark:border-slate-800/50 bg-white/30 dark:bg-slate-900/30 backdrop-blur-md text-slate-700 dark:text-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-emerald-500/30 dark:hover:border-emerald-500/30'
                }`}
              title="Ezber Listesi"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <Award className="w-5 h-5 relative z-10" />
            </button>
          )}

          {/* Ders İçerikleri button */}
          {activeTab !== 'home' && (
            <button
              onClick={() => { setActiveTab('lessons'); setPhase('map'); setActiveZone(null); setIsFocused(false); }}
              className={`group relative w-12 h-12 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 border ${activeTab === 'lessons'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-emerald-600 shadow-lg shadow-emerald-500/20'
                : 'border-slate-200/50 dark:border-slate-800/50 bg-white/30 dark:bg-slate-900/30 backdrop-blur-md text-slate-700 dark:text-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-emerald-500/30 dark:hover:border-emerald-500/30'
                }`}
              title="Ders İçerikleri"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <GraduationCap className="w-5 h-5 relative z-10" />
            </button>
          )}

          {/* Oyunlar button */}
          {activeTab !== 'home' && (
            <button
              onClick={() => { setActiveTab('games'); setPhase('map'); setActiveZone(null); setIsFocused(false); }}
              className={`group relative w-12 h-12 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 border ${activeTab === 'games'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-emerald-600 shadow-lg shadow-emerald-500/20'
                : 'border-slate-200/50 dark:border-slate-800/50 bg-white/30 dark:bg-slate-900/30 backdrop-blur-md text-slate-700 dark:text-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-emerald-500/30 dark:hover:border-emerald-500/30'
                }`}
              title="Oyunlar"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <Gamepad2 className="w-5 h-5 relative z-10" />
            </button>
          )}

          {/* İlahiler button */}
          {activeTab !== 'home' && (
            <button
              onClick={() => { setActiveTab('ilahiler'); setPhase('map'); setActiveZone(null); setIsFocused(false); }}
              className={`group relative w-12 h-12 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 border ${activeTab === 'ilahiler'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-emerald-600 shadow-lg shadow-emerald-500/20'
                : 'border-slate-200/50 dark:border-slate-800/50 bg-white/30 dark:bg-slate-900/30 backdrop-blur-md text-slate-700 dark:text-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-emerald-500/30 dark:hover:border-emerald-500/30'
                }`}
              title="İlahiler"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <Music className="w-5 h-5 relative z-10" />
            </button>
          )}

          {/* Theme Toggle button */}
          <button
            onClick={toggleDarkMode}
            className="group relative w-12 h-12 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 border border-slate-200/50 dark:border-slate-800/50 bg-white/30 dark:bg-slate-900/30 backdrop-blur-md text-slate-700 dark:text-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-emerald-500/10 hover:border-emerald-500/30 dark:hover:border-emerald-500/30"
            title={isDarkMode ? "Aydınlık Mod" : "Karanlık Mod"}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            {isDarkMode ? (
              <Sun className="w-5.5 h-5.5 text-amber-400 group-hover:rotate-45 transition-transform duration-500 relative z-10" />
            ) : (
              <Moon className="w-5.5 h-5.5 text-indigo-600 group-hover:-rotate-12 transition-transform duration-500 relative z-10" />
            )}
          </button>

          {/* Fullscreen Toggle button */}
          <button
            onClick={toggleFullscreen}
            className="group relative w-12 h-12 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 border border-slate-200/50 dark:border-slate-800/50 bg-white/30 dark:bg-slate-900/30 backdrop-blur-md text-slate-700 dark:text-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-emerald-500/10 hover:border-emerald-500/30 dark:hover:border-emerald-500/30"
            title={isFullscreen ? "Tam Ekrandan Çık" : "Tam Ekran Yap"}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            {isFullscreen ? (
              <Minimize2 className="w-5.5 h-5.5 text-emerald-600 dark:text-emerald-400 relative z-10" />
            ) : (
              <Maximize2 className="w-5.5 h-5.5 text-emerald-700 dark:text-emerald-500 relative z-10" />
            )}
          </button>

          {/* About & Dua button */}
          <button
            onClick={() => { setActiveTab('about'); setPhase('map'); setActiveZone(null); setIsFocused(false); }}
            className={`group relative w-12 h-12 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 ${activeTab === 'about'
              ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20'
              : 'bg-white/30 dark:bg-slate-900/30 backdrop-blur-md text-slate-700 dark:text-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)]'
              }`}
            title="Hakkımızda & Dua Talebi"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <img src="assets/logo.png" alt="Logo" className="w-12 h-12 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300 relative z-10" />
          </button>
        </div>
      )}

      {/* 2. Main Content Flow */}
      <main className={`flex-1 py-6 flex flex-col justify-center relative z-10 transition-all ${isFocused
        ? 'p-0'
        : (phase !== 'gameplay' && phase !== 'victory' && phase !== 'custom_editor'
          ? 'pl-20 pr-4 sm:pl-24 sm:pr-6'
          : 'px-4 sm:px-6')
        } transition-opacity duration-[1500ms] ease-in-out ${cinematicPhase === 'ready' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
        {phase !== 'custom_editor' && phase !== 'victory' && (
          <>
            {visitedTabs.includes('home') && (
              <div style={{ display: activeTab === 'home' ? 'block' : 'none' }} className="w-full">
                <motion.div
                  key="home-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: activeTab === 'home' ? 1 : 0, y: activeTab === 'home' ? 0 : 15 }}
                  transition={{ duration: 0.4 }}
                  className="w-full"
                >
                  {renderHomeView()}
                </motion.div>
              </div>
            )}

            {visitedTabs.includes('elifba') && (
              <div style={{ display: activeTab === 'elifba' ? 'block' : 'none' }} className="w-full">
                <KuranElifba
                  initialTab="elifba"
                  isDarkMode={isDarkMode}
                  toggleDarkMode={toggleDarkMode}
                  isFocused={isFocused}
                  setIsFocused={setIsFocused}
                />
              </div>
            )}

            {visitedTabs.includes('quran') && (
              <div style={{ display: activeTab === 'quran' ? 'block' : 'none' }} className="w-full">
                <KuranElifba
                  initialTab="kuran"
                  isDarkMode={isDarkMode}
                  toggleDarkMode={toggleDarkMode}
                  isFocused={isFocused}
                  setIsFocused={setIsFocused}
                />
              </div>
            )}

            {visitedTabs.includes('lessons') && (
              <div style={{ display: activeTab === 'lessons' ? 'block' : 'none' }} className="w-full">
                <DersPortal
                  isDarkMode={isDarkMode}
                  toggleDarkMode={toggleDarkMode}
                  isMusicPlaying={isMusicPlaying}
                  togglePlayMusic={togglePlayMusic}
                  isAnimatedBg={isAnimatedBg}
                  toggleAnimatedBg={toggleAnimatedBg}
                  isFocused={isFocused}
                  setIsFocused={setIsFocused}
                />
              </div>
            )}

            {visitedTabs.includes('ezber') && (
              <div style={{ display: activeTab === 'ezber' ? 'block' : 'none' }} className="w-full">
                <motion.div
                  key="ezber-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: activeTab === 'ezber' ? 1 : 0, y: activeTab === 'ezber' ? 0 : 15 }}
                  transition={{ duration: 0.4 }}
                  className="w-full"
                >
                  <EzberPortali
                    isDarkMode={isDarkMode}
                    toggleDarkMode={toggleDarkMode}
                    isMusicPlaying={isMusicPlaying}
                    togglePlayMusic={togglePlayMusic}
                    isAnimatedBg={isAnimatedBg}
                    toggleAnimatedBg={toggleAnimatedBg}
                    isFocused={isFocused}
                    setIsFocused={setIsFocused}
                  />
                </motion.div>
              </div>
            )}

            {visitedTabs.includes('games') && (
              <div style={{ display: activeTab === 'games' ? 'block' : 'none' }} className="w-full">
                <motion.div
                  key="games-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: activeTab === 'games' ? 1 : 0, y: activeTab === 'games' ? 0 : 15 }}
                  transition={{ duration: 0.4 }}
                  className="w-full"
                >
                  <GameHub isDarkMode={isDarkMode} />
                </motion.div>
              </div>
            )}

            {visitedTabs.includes('ilahiler') && (
              <div style={{ display: activeTab === 'ilahiler' ? 'block' : 'none' }} className="w-full">
                <motion.div
                  key="ilahiler-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: activeTab === 'ilahiler' ? 1 : 0, y: activeTab === 'ilahiler' ? 0 : 15 }}
                  transition={{ duration: 0.4 }}
                  className="w-full"
                >
                  <Ilahiler
                    isDarkMode={isDarkMode}
                    isAppMusicPlaying={isMusicPlaying}
                    isFocused={isFocused}
                    setIsFocused={setIsFocused}
                    onIlahiPlayStateChange={(playing) => {
                      setIsIlahiPlaying(playing);
                      if (playing) {
                        if (audioRef.current && !audioRef.current.paused) {
                          audioRef.current.pause();
                          setIsMusicPlaying(false);
                        }
                      }
                    }}
                  />
                </motion.div>
              </div>
            )}

            {visitedTabs.includes('about') && (
              <div style={{ display: activeTab === 'about' ? 'block' : 'none' }} className="w-full">
                {renderAboutView()}
              </div>
            )}
          </>
        )}

        {/* Custom Workshop/Editor Screen */}
        {phase === 'custom_editor' && (
          <SoruEditoru
            gameData={gameData}
            onSave={handleSaveCustomData}
            onResetToDefault={handleResetToDefault}
            onClose={() => setPhase('map_atlas')}
          />
        )}

        {/* Victory/Championship Screen - Fully bright theme & joyful graphics */}
        {phase === 'victory' && (
          <div className="max-w-3xl mx-auto px-4 py-12 text-center" id="victory-celebration">
            <Trophy className="w-24 h-24 text-yellow-500 mx-auto animate-bounce mb-6" />
            <span className="px-5 py-2 bg-yellow-100 border-2 border-yellow-300 text-yellow-800 font-black text-xs uppercase tracking-widest rounded-full">
              🥇 MEKTEP ŞAMPİYONLUK KÜRSÜSÜ
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl text-slate-800 mt-5 tracking-tight">
              Yolculuk Başarıyla Tamamlandı!
            </h1>
            <p className="text-slate-600 mt-2 max-w-lg mx-auto text-sm font-semibold">
              Tüm bilgelik istasyonlarını başarıyla keşfeden ve ahlaki ikilemleri çözen meclislerimizi sevgiyle tebrik ederiz.
            </p>

            {/* Podium presentation */}
            <div className="bg-white border-3 border-slate-200 rounded-[2.5rem] p-6 sm:p-8 mt-10 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-50/30 to-transparent pointer-events-none" />

              <h3 className="font-display font-black text-sm tracking-wide text-slate-600 uppercase mb-6">
                ŞEREF VE LİYAKAT SIRALAMASI
              </h3>

              <div className="flex flex-col gap-3 max-w-md mx-auto">
                {[...teams].sort((a, b) => b.score - a.score).map((team, idx) => (
                  <div
                    key={team.id}
                    className={`flex items-center justify-between p-4 rounded-2xl border-2 ${idx === 0
                      ? 'bg-yellow-50 border-yellow-400 text-yellow-950 shadow-md ring-2 ring-yellow-200'
                      : 'bg-slate-50 border-slate-100 text-slate-700'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-slate-800 text-white text-xs font-black flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="font-display font-black text-sm sm:text-base text-slate-800">
                        {team.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Award className={`w-5 h-5 ${idx === 0 ? 'text-yellow-500 animate-spin' : 'text-slate-400'}`} />
                      <span className="font-display font-black text-base text-slate-800">{team.score} Puan</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <button
                  onClick={resetWholeGame}
                  className="btn-game-primary text-base py-3 px-10 rounded-2xl"
                >
                  YENİDEN BAŞLA! ↩️
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Floating Smart Board Pen Tool Button */}
      {cinematicPhase === 'ready' && (
        <button
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onClick={() => {
            if (dragDistance.current > 5) return;
            setShowPenTool(prev => !prev);
           
          }}
          style={
            penPos.x === -9999 && penPos.y === -9999
              ? { right: '24px', bottom: '24px' }
              : { left: `${penPos.x}px`, top: `${penPos.y}px` }
          }
          className={`fixed z-[99997] w-14 h-14 rounded-full flex items-center justify-center shadow-2xl border-3 transition-[background-color,border-color,color,box-shadow,transform] duration-200 cursor-move select-none ${showPenTool
            ? 'bg-red-500 border-red-650 text-white ring-4 ring-red-150 animate-pulse'
            : isDarkMode
              ? 'bg-slate-800 border-slate-750 text-slate-300 hover:border-emerald-500 hover:text-emerald-400 shadow-emerald-950/20 hover:scale-110 active:scale-95'
              : 'bg-white border-slate-200 text-slate-600 hover:border-emerald-500 hover:text-emerald-600 shadow-slate-350/30 hover:scale-110 active:scale-95'
            }`}
          title={showPenTool ? "Tahta Kalemini Kapat" : "Akıllı Tahta Kalemini Aç"}
        >
          <Pencil className="w-6 h-6" />
        </button>
      )}

      {/* Fullscreen drawing layer */}
      {showPenTool && (
        <AkilliTahta
          onClose={() => setShowPenTool(false)}
          isDarkMode={isDarkMode}
          buttonPosition={penPos}
        />
      )}

      {/* 🌟 Custom Update Available Modal */}
      {updateAvailable && !updateDownloading && !updateDownloaded && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/60 backdrop-blur-md animate-fade-in">
          <div className="w-[90%] max-w-lg p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-white/20 dark:border-slate-800/80 shadow-2xl backdrop-blur-xl flex flex-col gap-6 text-center select-none">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/40 text-emerald-500 dark:text-emerald-400 flex items-center justify-center animate-bounce">
                <Sparkles className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100">
                Yeni Sürüm Hazır!
              </h2>
              <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                v{updateAvailable.version}
              </span>
            </div>

            <div className="text-sm text-slate-650 dark:text-slate-350 text-left bg-slate-50 dark:bg-slate-950/40 p-4 rounded-2xl border border-slate-100 dark:border-slate-850 max-h-40 overflow-y-auto">
              <p className="font-bold mb-2">Yapılan Değişiklikler:</p>
              {updateAvailable.releaseNotes ? (
                <div dangerouslySetInnerHTML={{ __html: updateAvailable.releaseNotes }} />
              ) : (
                <p>Bu güncelleme performans iyileştirmeleri ve hata düzeltmeleri içerir.</p>
              )}
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => {
                  setUpdateAvailable(null);
                 
                }}
                className="flex-1 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-bold transition-all active:scale-95 cursor-pointer"
              >
                Daha Sonra
              </button>
              <button
                onClick={() => {
                 
                  setUpdateDownloading(true);
                  // @ts-ignore
                  if (window.electronAPI) {
                    // @ts-ignore
                    window.electronAPI.startDownload();
                  }
                }}
                className="flex-1 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all active:scale-95 cursor-pointer"
              >
                Güncellemeyi Başlat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 📥 Custom Downloading Modal */}
      {updateDownloading && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/60 backdrop-blur-md">
          <div className="w-[90%] max-w-md p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-white/20 dark:border-slate-800/80 shadow-2xl backdrop-blur-xl flex flex-col gap-6 text-center select-none">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-sky-100 dark:bg-sky-950/40 text-sky-500 dark:text-sky-400 flex items-center justify-center animate-pulse">
                <Clock className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100">
                Güncelleme İndiriliyor
              </h2>
              <p className="text-xs text-slate-500">Lütfen uygulamayı kapatmayın...</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="w-full h-4 bg-slate-100 dark:bg-slate-950/50 rounded-full overflow-hidden p-0.5 border border-slate-200/50 dark:border-slate-800">
                <div
                  className="h-full bg-gradient-to-r from-sky-500 to-blue-500 rounded-full transition-all duration-300"
                  style={{ width: `${Math.round(downloadProgress?.percent || 0)}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-slate-500 font-bold px-1">
                <span>{downloadProgress?.transferred ? `${(downloadProgress.transferred / 1024 / 1024).toFixed(1)} MB` : '0 MB'} / {downloadProgress?.total ? `${(downloadProgress.total / 1024 / 1024).toFixed(1)} MB` : '...'}</span>
                <span>%{Math.round(downloadProgress?.percent || 0)}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🎉 Custom Downloaded Modal */}
      {updateDownloaded && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/60 backdrop-blur-md">
          <div className="w-[90%] max-w-md p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-white/20 dark:border-slate-800/80 shadow-2xl backdrop-blur-xl flex flex-col gap-6 text-center select-none">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/40 text-emerald-500 dark:text-emerald-400 flex items-center justify-center">
                <Award className="w-8 h-8 animate-bounce" />
              </div>
              <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100">
                Güncelleme Hazır!
              </h2>
              <p className="text-sm text-slate-650 dark:text-slate-355">
                Uygulama başarıyla indirildi. Yüklenmek üzere yeniden başlatılıyor...
              </p>
            </div>

            <div className="flex justify-center py-2">
              <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
            </div>
          </div>
        </div>
      )}

      {/* 🥳 Custom Welcome Changelog Modal */}
      {showWelcomeChangelog && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/60 backdrop-blur-md animate-fade-in">
          <div className="w-[90%] max-w-lg p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-white/20 dark:border-slate-800/80 shadow-2xl backdrop-blur-xl flex flex-col gap-6 text-center select-none">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-950/40 text-amber-500 dark:text-amber-400 flex items-center justify-center animate-bounce">
                <Sparkles className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100">
                Cennet Bahçesi Güncellendi!
              </h2>
              <span className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 text-xs font-bold">
                Yeni Sürüm v{showWelcomeChangelog}
              </span>
            </div>

            <div className="text-sm text-slate-600 dark:text-slate-300 text-left bg-slate-50 dark:bg-slate-950/40 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col gap-3">
              <p className="font-extrabold text-slate-750 dark:text-slate-200">🚀 Bu Sürümde Neler Yeni?</p>
              <ul className="list-disc pl-5 flex flex-col gap-2.5 text-xs text-slate-650 dark:text-slate-300">
                <li><strong>Kur'an-ı Kerim Dinleme Sistemi:</strong> Ayete tıklayarak kesintisiz okuma başlatma, otonom yumuşak sayfa kaydırma (scroll) ve otomatik sayfa geçiş desteği.</li>
                <li><strong>Gelişmiş Kaldığın Yerden Devam Etme:</strong> Dinleme işlemi artık her zaman sağ sayfadan değil, aktif seçili olan sayfa numarasından ve en son kaldığı ayetten başlar.</li>
                <li><strong>Ezan ve Kamet Ayrımı:</strong> Ezber portalında Ezan ve Kamet ayrı kartlara bölündü; Kamet'e özel `Kad kâmetis-salâh` vurgulandı.</li>
                <li><strong>Adım Adım Müezzinlik Rehberi:</strong> Namaz sonrası müezzinlik duaları ve tesbihat akışı 6 adımda numaralandırılarak son derece sade hale getirildi.</li>
                <li><strong>Besmele Giriş Sesi & Sessiz Arayüz:</strong> Tam ekrana geçerken çalacak özel Besmele sesi (basmala_intro.mp3) desteği eklendi. Rahatsız edici menü tık sesleri tamamen temizlendi.</li>
              </ul>
            </div>

            <button
              onClick={() => {
                setShowWelcomeChangelog(null);
               
              }}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all active:scale-95 cursor-pointer"
            >
              Hemen Başla ➔
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
