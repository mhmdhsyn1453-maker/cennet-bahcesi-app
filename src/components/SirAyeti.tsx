import React, { useState, useEffect } from 'react';
import { SirAyetiQuestion, Team } from '../types';
import { Shield, ArrowLeft, RefreshCw, CheckCircle2, Award, BookOpen, Key } from 'lucide-react';
import { playSound } from './BuzzerAndTimer';

interface SirAyetiProps {
  questions: SirAyetiQuestion[];
  activeTeam: Team;
  onAwardPoints: (teamId: string, points: number) => void;
  onRegisterCompletion: () => void;
  onBackToMap: () => void;
}

export const SirAyeti: React.FC<SirAyetiProps> = ({
  questions,
  activeTeam,
  onAwardPoints,
  onRegisterCompletion,
  onBackToMap,
}) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [typedWord, setTypedWord] = useState<string[]>([]);
  const [shuffledLetters, setShuffledLetters] = useState<string[]>([]);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const question = questions[currentIdx] || questions[0];

  // Load question and setup letters
  useEffect(() => {
    if (question) {
      setTypedWord(Array(question.correctWord.length).fill(''));
      // Shuffle letter pool to make it fun
      setShuffledLetters([...question.letters]);
      setIsDone(false);
      setIsError(false);
    }
  }, [question, currentIdx]);

  const handleLetterClick = (letter: string) => {
    if (isDone) return;

    // Find the first empty spot in typed word and fill it
    const nextEmptyIdx = typedWord.indexOf('');
    if (nextEmptyIdx !== -1) {
      const newTyped = [...typedWord];
      newTyped[nextEmptyIdx] = letter;
      setTypedWord(newTyped);
      playSound('tick');

      // Check if full
      if (newTyped.indexOf('') === -1) {
        // Complete word formed, let's verify
        const fullString = newTyped.join('').toUpperCase();
        if (fullString === question.correctWord.toUpperCase()) {
          playSound('success');
          setIsDone(true);
          setIsError(false);
          onAwardPoints(activeTeam.id, 10);
        } else {
          playSound('fail');
          setIsError(true);
          // Briefly highlight in red, then reset
          setTimeout(() => {
            setIsError(false);
          }, 1200);
        }
      }
    }
  };

  const handleBackspace = () => {
    if (isDone) return;
    
    // Find last non-empty and clear it
    const lastNonEmptyIdx = typedWord.map(l => l !== '').lastIndexOf(true);
    if (lastNonEmptyIdx !== -1) {
      const newTyped = [...typedWord];
      newTyped[lastNonEmptyIdx] = '';
      setTypedWord(newTyped);
      playSound('tick');
    }
  };

  const handleClear = () => {
    if (isDone) return;
    setTypedWord(Array(question.correctWord.length).fill(''));
    playSound('tick');
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
    <div className="max-w-4xl mx-auto px-4 py-4" id="sir-ayeti-station">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-6 bg-zinc-900/50 p-4 border border-zinc-800 rounded-2xl">
        <button
          onClick={onBackToMap}
          className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white bg-zinc-950 p-2 px-3.5 rounded-lg border border-zinc-900 cursor-pointer hover:border-zinc-700 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Haritaya Dön
        </button>

        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-purple-500 animate-pulse" />
          <span className="font-display font-black text-sm uppercase text-purple-400 tracking-wider">
            İSTASYON 5: SIR AYETİ PORTALI
          </span>
        </div>

        <div className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full font-mono text-xs border border-purple-500/25">
          Level: {currentIdx + 1} / {questions.length}
        </div>
      </div>

      {/* Main Core */}
      <div className="bg-deep-charcoal border border-zinc-800/80 rounded-3xl p-6 shadow-2xl mb-6 relative overflow-hidden">
        {/* Glow decoration */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/5 rounded-full filter blur-3xl pointer-events-none" />

        <div className="mb-6">
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
            <BookOpen className="w-4 h-4 text-purple-500" /> MEALDEKİ EKSİK KELİMEYİ TAMAMLAMA
          </div>
          <h2 className="text-xl sm:text-2xl font-display font-black text-white mt-1 tracking-tight">
            Şifreli Ayet Muamması
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1">
            {question.clue}
          </p>
        </div>

        {/* The verse block with missing blanks */}
        <div className="bg-gradient-to-br from-zinc-950 to-zinc-900 p-6 rounded-2xl border border-purple-500/10 mb-8 text-center relative">
          <span className="absolute top-3 left-4 text-[10px] text-zinc-600 font-mono italic">AŞAĞIDAKİ BOŞLUĞU DOLDURUN:</span>
          
          <p className="font-display font-bold text-lg sm:text-xl text-white tracking-wide leading-relaxed pt-3">
            {question.maskedText.split('________').map((part, idx, arr) => (
              <React.Fragment key={idx}>
                {part}
                {idx < arr.length - 1 && (
                  <span className={`inline-flex items-center gap-1 mx-2 p-1 px-3 bg-purple-500/10 border-b-4 border-purple-500 text-purple-300 font-mono text-base font-black rounded-lg min-w-[120px] justify-center tracking-widest ${
                    isError ? 'bg-red-500/20 border-red-500 animate-shake text-red-400' : ''
                  } ${isDone ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' : ''}`}>
                    {typedWord.map((l) => l || '·').join('')}
                  </span>
                )}
              </React.Fragment>
            ))}
          </p>

          <span className="block text-right text-xs font-mono text-purple-500/80 mt-4">
             {question.surah}
          </span>
        </div>

        {/* Letters Pool and Controls for Akıllı Tahta */}
        {!isDone && (
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-zinc-900">
              <span className="text-xs uppercase font-mono tracking-wider text-zinc-500">
                HARF HAVUZU (Tıklayarak Sırayla Yerleştirin)
              </span>

              <div className="flex gap-2">
                <button
                  onClick={handleBackspace}
                  className="px-3 py-1 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-lg border border-zinc-800 text-xs font-mono transition cursor-pointer"
                >
                  Geri Al
                </button>
                <button
                  onClick={handleClear}
                  className="px-3 py-1 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-lg border border-zinc-800 text-xs font-mono transition cursor-pointer"
                >
                  Temizle
                </button>
              </div>
            </div>

            {/* Grid of touch letters */}
            <div className="grid grid-cols-5 sm:grid-cols-8 gap-2">
              {shuffledLetters.map((letter, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLetterClick(letter)}
                  className="p-3 bg-zinc-900 hover:bg-zinc-800 text-white font-display font-extrabold text-base rounded-xl border border-zinc-800 focus:outline-none transition active:scale-90 hover:border-purple-550/30 cursor-pointer"
                >
                  {letter}
                </button>
              ))}
            </div>

            <div className="p-3 bg-zinc-950 rounded-lg text-center border border-zinc-900 text-xs text-zinc-400">
              Cevaplayan Meclis: <span className={`${activeTeam.color.replace('bg-', 'text-')} font-bold`}>{activeTeam.name}</span>
            </div>
          </div>
        )}

        {/* Answer Revealed / End Panel */}
        {isDone && (
          <div className="mt-8 pt-6 border-t border-zinc-800 animate-fade-in">
            <div className="p-5 bg-emerald-950/20 border border-emerald-500/20 rounded-2xl flex flex-col md:flex-row items-start gap-4">
              <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl shrink-0">
                <CheckCircle2 className="w-8 h-8 animate-bounce" />
              </div>
              <div className="flex-1">
                <h4 className="font-display font-black text-white text-base">Hikmet Sırrı Çözüldü!</h4>
                <p className="text-zinc-300 text-xs sm:text-sm mt-1 leading-relaxed">
                  Harika! Ayette geçen gizli kelime: <strong className="text-emerald-400 font-mono">"{question.correctWord.toUpperCase()}"</strong> olarak başarıyla tamamlandı.
                </p>

                <div className="bg-black/40 border border-zinc-900 rounded-xl p-3.5 mt-3">
                  <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-mono block">Münevver Tefekkür (Ayet Tefsiri)</span>
                  <p className="text-zinc-400 text-xs italic mt-1 leading-relaxed">
                    {question.wisdomNote}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={handleNextQuestion}
                className="py-2.5 px-6 cursor-pointer bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-display font-bold text-xs tracking-wider rounded-xl transition"
              >
                {currentIdx < questions.length - 1 ? 'SONRAKİ BULMACA' : 'İSTASYONU TAMAMLA'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
