import React, { useState, useEffect, useRef } from 'react';
import { Timer, Play, Pause, RotateCcw, AlertCircle, Volume2, Plus, Minus } from 'lucide-react';

interface BuzzerAndTimerProps {
  durationSeconds?: number;
  onTimeUp?: () => void;
  teamName?: string;
}

// 100% offline Web Audio synthesizer sound effects
let _globalAudioContext: AudioContext | null = null;

const getAudioContext = (): AudioContext | null => {
  try {
    if (!_globalAudioContext) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        _globalAudioContext = new AudioContextClass();
      }
    }
    if (_globalAudioContext && _globalAudioContext.state === 'suspended') {
      _globalAudioContext.resume().catch(() => {});
    }
    return _globalAudioContext;
  } catch (e) {
    console.warn('Failed to initialize AudioContext:', e);
    return null;
  }
};

export const playSound = (type: 'success' | 'fail' | 'tick' | 'complete') => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    if (type === 'tick') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      gain.gain.setValueAtTime(0.01, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } else if (type === 'success') {
      // Triumphant double-beep chord
      const freqs = [523.25, 659.25, 783.99]; // C5, E5, G5
      freqs.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + index * 0.08);
        gain.gain.setValueAtTime(0.12, ctx.currentTime + index * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + index * 0.08 + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + index * 0.08 + 0.4);
      });
    } else if (type === 'fail') {
      // Somber buzz tone
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(80, ctx.currentTime + 0.5);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    } else if (type === 'complete') {
      // Harmonious final sweep
      const freqs = [261.63, 329.63, 392.00, 523.25, 659.25, 1046.50];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.1);
        gain.gain.setValueAtTime(0.1, ctx.currentTime + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.1 + 0.6);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + idx * 0.1 + 0.6);
      });
    }
  } catch (e) {
    console.error('Audio synthesizer is not supported or was blocked:', e);
  }
};

export const BuzzerAndTimer: React.FC<BuzzerAndTimerProps> = ({
  durationSeconds = 60,
  onTimeUp,
  teamName,
}) => {
  const [timeLeft, setTimeLeft] = useState(durationSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const isTimeUpRef = useRef(false);

  useEffect(() => {
    setTimeLeft(durationSeconds);
    setIsRunning(false);
    isTimeUpRef.current = false;
  }, [durationSeconds, teamName]);

  useEffect(() => {
    let timerId: any = null;
    if (isRunning && timeLeft > 0) {
      timerId = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerId);
            setIsRunning(false);
            if (!isTimeUpRef.current) {
              isTimeUpRef.current = true;
              playSound('fail');
              if (onTimeUp) onTimeUp();
            }
            return 0;
          }
          if (prev <= 6) {
            // Warn with high pitched ticks for last 5 counts
            playSound('tick');
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [isRunning, timeLeft, onTimeUp]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(durationSeconds);
    isTimeUpRef.current = false;
  };

  const adjustTime = (amount: number) => {
    setTimeLeft((prev) => Math.max(0, prev + amount));
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const progressPercent = (timeLeft / durationSeconds) * 100;

  return (
    <div className="bg-deep-charcoal/90 border border-islamic-gold/20 rounded-2xl p-4 flex flex-col items-center justify-between shadow-2xl h-full" id="global-timer">
      <div className="flex items-center gap-2 mb-2">
        <Timer className="w-5 h-5 text-islamic-gold" />
        <span className="font-display font-medium text-sm text-gray-300 tracking-wider">
          SÜRE SAYACI
        </span>
      </div>

      <div className="relative w-36 h-36 flex items-center justify-center my-2">
        {/* Progress Circle SVG */}
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="44"
            className="stroke-gray-800 fill-none"
            strokeWidth="6"
          />
          <circle
            cx="50"
            cy="50"
            r="44"
            className={`fill-none transition-all duration-1000 ${
              timeLeft <= 10 ? 'stroke-red-500' : 'stroke-islamic-gold'
            }`}
            strokeWidth="6"
            strokeDasharray="276.4"
            strokeDashoffset={276.4 - (276.4 * progressPercent) / 100}
            strokeLinecap="round"
          />
        </svg>

        {/* Big Time Display */}
        <div className="absolute flex flex-col items-center">
          <span className="font-mono text-3xl font-bold text-white tracking-tight">
            {formattedTime}
          </span>
          {teamName && (
            <span className="text-[10px] text-zinc-400 font-display mt-0.5 truncate max-w-[100px] text-center">
              {teamName}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full mt-2">
        {/* Adjustments */}
        <div className="flex justify-center gap-2">
          <button
            onClick={() => adjustTime(-10)}
            className="px-2 py-1 bg-zinc-800 hover:bg-zinc-700 active:scale-95 text-gray-300 text-[11px] font-mono rounded"
            title="10 saniye azalt"
          >
            -10s
          </button>
          <button
            onClick={() => adjustTime(10)}
            className="px-2 py-1 bg-zinc-800 hover:bg-zinc-700 active:scale-95 text-gray-300 text-[11px] font-mono rounded"
            title="10 saniye arttır"
          >
            +10s
          </button>
        </div>

        {/* Power Controls */}
        <div className="flex gap-2 w-full">
          <button
            onClick={toggleTimer}
            className={`flex-1 flex items-center justify-center gap-1 py-1.5 px-3 rounded-lg text-xs font-medium cursor-pointer transition-colors active:scale-95 ${
              isRunning
                ? 'bg-amber-600/25 border border-amber-600 text-amber-300 hover:bg-amber-600/40'
                : 'bg-islamic-emerald hover:bg-islamic-emerald/85 text-white'
            }`}
          >
            {isRunning ? (
              <>
                <Pause className="w-3 h-3" /> Duraklat
              </>
            ) : (
              <>
                <Play className="w-3 h-3" /> Başlat
              </>
            )}
          </button>

          <button
            onClick={resetTimer}
            className="flex items-center justify-center p-2 bg-zinc-800 hover:bg-zinc-700 text-gray-400 hover:text-white rounded-lg active:scale-95 cursor-pointer"
            title="Süreyi Sıfırla"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Classroom Manual Buzzer Button */}
        <button
          onClick={() => playSound('tick')}
          className="w-full py-1 text-[10px] uppercase font-mono text-zinc-500 hover:text-zinc-300 flex items-center justify-center gap-1 border border-zinc-800 hover:border-zinc-700 rounded-md transition"
        >
          <Volume2 className="w-3 h-3" /> Dikkat Beepi
        </button>
      </div>

      {timeLeft === 0 && (
        <div className="mt-2 text-[11px] text-red-400 flex items-center gap-1 font-medium animate-pulse">
          <AlertCircle className="w-3 h-3" /> SÜRE DOLDU!
        </div>
      )}
    </div>
  );
};
