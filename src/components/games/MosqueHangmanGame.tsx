import React, { useState, useEffect } from 'react';
import { Landmark, Heart, Trophy, XCircle } from 'lucide-react';
import { VocabularyWord, shuffleArray } from '../../utils/questionPool';
import { getRandomHangmanQuestion } from '../../data/games/hangmanQuestions';
import { playSound } from '../BuzzerAndTimer';

const TURKISH_LETTERS = ['A', 'B', 'C', 'Ç', 'D', 'E', 'F', 'G', 'H', 'I', 'İ', 'K', 'L', 'M', 'N', 'O', 'Ö', 'P', 'R', 'S', 'Ş', 'T', 'U', 'Ü', 'V', 'Y', 'Z'];

// Türkçe Harfleri Büyük Harfe Çevirme Yardımcısı
const toTurkishUpperCase = (str: string) => {
  return str
    .replace(/i/g, 'İ')
    .replace(/ı/g, 'I')
    .toUpperCase();
};

interface MosqueHangmanGameProps {
  isDarkMode: boolean;
}

export const MosqueHangmanGame: React.FC<MosqueHangmanGameProps> = ({ isDarkMode }) => {
  const [gameStatus, setGameStatus] = useState<'intro' | 'playing' | 'won' | 'lost'>('intro');
  const [currentWordObj, setCurrentWordObj] = useState<VocabularyWord | null>(null);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [lives, setLives] = useState<number>(6); // Toplam 6 can
  const [timer, setTimer] = useState<number>(90); // 90 saniye süre limiti
  const [keyboardLetters, setKeyboardLetters] = useState<string[]>([]);

  // Yeni Kelime Seçip Oyunu Başlat
  const handleStart = () => {
    playSound('complete');
    const word = getRandomHangmanQuestion();
    if (word) {
      setCurrentWordObj(word);
      setGuessedLetters([]);
      setLives(6);
      setTimer(90);
      // Klavyeyi karıştırarak başlat (Kullanıcının isteği üzerine)
      setKeyboardLetters(shuffleArray(TURKISH_LETTERS));
      setGameStatus('playing');
    }
  };

  // Zamanlayıcı
  useEffect(() => {
    if (gameStatus !== 'playing') return;
    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          playSound('fail');
          setGameStatus('lost');
          return 0;
        }
        if (prev <= 10) {
          playSound('tick');
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [gameStatus]);

  // Harf Tahmin Kontrolü
  const handleGuess = (letter: string) => {
    if (gameStatus !== 'playing' || guessedLetters.includes(letter) || !currentWordObj) return;

    const newGuesses = [...guessedLetters, letter];
    setGuessedLetters(newGuesses);

    const isInWord = currentWordObj.word.includes(letter);
    if (!isInWord) {
      playSound('fail');
      const newLives = lives - 1;
      setLives(newLives);
      if (newLives === 0) {
        playSound('fail');
        setGameStatus('lost');
      }
    } else {
      playSound('success');
      // Kazanma kontrolü (Kelimedeki tüm harfler tahmin edildi mi?)
      const allGuessed = currentWordObj.word.split('').every(l => newGuesses.includes(l));
      if (allGuessed) {
        playSound('complete');
        setGameStatus('won');
      }
    }
  };

  // Fiziksel Klavye Desteği
  useEffect(() => {
    if (gameStatus !== 'playing') return;
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = toTurkishUpperCase(e.key);
      if (TURKISH_LETTERS.includes(key)) {
        handleGuess(key);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameStatus, guessedLetters, currentWordObj, lives]);

  // Cami çiziminin hangi parçalarının tamamlanacağını gösterir (0-6 arası oran)
  const getRevealedCount = () => {
    if (!currentWordObj) return 0;
    const uniqueWordLetters = new Set(currentWordObj.word.split(''));
    const correctGuesses = [...uniqueWordLetters].filter(l => guessedLetters.includes(l));
    const ratio = correctGuesses.length / uniqueWordLetters.size;

    if (gameStatus === 'won') return 6;
    return Math.floor(ratio * 6);
  };

  const revealedCount = getRevealedCount();

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {gameStatus === 'intro' && (
        <div className="text-center flex flex-col items-center py-6">
          <Landmark className="w-20 h-20 text-emerald-500 mb-4 animate-pulse" />
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase">
            Cami İnşa Etmece (Adam Asmaca)
          </h3>
          <p className="text-xs text-slate-500 mt-2 max-w-md leading-relaxed">
            Gizlenmiş olan dini kavramı harfleri tahmin ederek bulmaya çalışın. <br />
            Her doğru tahminde caminin bir bölümü kurulacak ve renklenecektir. <br />
            <strong>Dikkat et:</strong> Toplam 6 can hakkın ve 90 saniye süren var. Canın veya süren bitmeden camiyi tamamlamalısın!
          </p>
          <button
            onClick={handleStart}
            className="mt-6 px-10 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-lg hover:shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yarışmayı Başlat! ➔
          </button>
        </div>
      )}

      {gameStatus !== 'intro' && currentWordObj && (
        <div className="w-full flex flex-col lg:flex-row gap-6 items-center justify-center">

          {/* Sol Kolon: Gelişmiş Premium Cami İnşaat SVG Alanı */}
          <div className="w-full lg:w-[48%] flex flex-col items-center py-5 bg-gradient-to-b from-slate-50/40 to-slate-100/20 dark:from-slate-900/40 dark:to-slate-950/20 border-3 border-slate-200/80 dark:border-slate-800/80 p-6 rounded-[2.5rem] shadow-xl relative min-h-[380px]">

            {/* Süre & Can Göstergesi (Kalpler) */}
            <div className="w-full flex justify-between items-center mb-6 z-10 px-2">
              <span className={`text-sm font-black flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-850 shadow-sm border border-slate-200/20 ${
                timer <= 10 && gameStatus === 'playing' ? 'text-rose-500 animate-pulse scale-105 border-rose-300' : 'text-slate-650 dark:text-slate-400'
              }`}>
                ⏱️ {timer} sn
              </span>
              <div className="flex gap-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Heart
                    key={i}
                    className={`w-5.5 h-5.5 transition-all duration-300 ${
                      i < lives 
                        ? 'text-rose-500 fill-rose-500 scale-110 drop-shadow-[0_2px_4px_rgba(244,63,94,0.3)]' 
                        : 'text-slate-200 dark:text-slate-850 scale-90'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Premium Cami İnşaat SVG */}
            <svg viewBox="0 0 220 180" className="w-72 h-60 sm:w-88 sm:h-72 drop-shadow-2xl z-10 transition-all">
              <defs>
                {/* Gökyüzü Arkası Hafif Işıma */}
                <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </radialGradient>
                {/* Ana Kubbe Degradeleri */}
                <linearGradient id="domeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#34d399" />
                  <stop offset="50%" stopColor="#059669" />
                  <stop offset="100%" stopColor="#065f46" />
                </linearGradient>
                {/* Yarım Kubbe Degradeleri */}
                <linearGradient id="halfDomeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6ee7b7" />
                  <stop offset="100%" stopColor="#047857" />
                </linearGradient>
                {/* Altın Süsleme / Hilal Degradesi */}
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="50%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
                {/* Mermer Duvar Degradesi */}
                <linearGradient id="wallGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f8fafc" />
                  <stop offset="100%" stopColor="#cbd5e1" />
                </linearGradient>
                <linearGradient id="wallDarkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#475569" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>
                {/* Minare Süsleri */}
                <linearGradient id="minaretGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#e2e8f0" />
                  <stop offset="100%" stopColor="#94a3b8" />
                </linearGradient>
                {/* Yanan Pencere Degradesi */}
                <radialGradient id="windowLight" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="70%" stopColor="#facc15" />
                  <stop offset="100%" stopColor="#ca8a04" />
                </radialGradient>
              </defs>

              {/* Arka Plan Glow */}
              <circle cx="110" cy="90" r="80" fill="url(#glow)" className="opacity-70" />

              {/* KILAVUZ ÇİZGİLER (Bitmemiş parçalar için belirgin ama şık kesikli rehberler) */}
              <g className="stroke-slate-300 dark:stroke-slate-700 fill-none stroke-[1.5] stroke-dasharray-[3,3] opacity-50">
                {/* Taban Temel */}
                <rect x="25" y="140" width="170" height="15" rx="3" />
                {/* Ana Gövde Duvarları */}
                <rect x="55" y="75" width="110" height="65" rx="5" />
                {/* Giriş Kapısı */}
                <path d="M95 140 V 105 Q 110 92 125 105 V 140 Z" />
                {/* Kubbe */}
                <path d="M55 75 Q 110 15 165 75 Z" />
                {/* Yarım Kubbeler */}
                <path d="M35 110 Q 55 85 75 110" />
                <path d="M145 110 Q 165 85 185 110" />
                {/* Sol Minare */}
                <rect x="35" y="30" width="12" height="110" rx="1.5" />
                {/* Sağ Minare */}
                <rect x="173" y="30" width="12" height="110" rx="1.5" />
              </g>

              {/* AŞAMALI RENKLİ İNŞAAT PARÇALARI */}
              {/* Adım 1: Taban & Merdiven Temeli */}
              {revealedCount >= 1 && (
                <g className="transition-all duration-500">
                  {/* Birinci Kademe */}
                  <rect x="20" y="148" width="180" height="8" rx="2" fill="url(#minaretGrad)" stroke="#64748b" strokeWidth="1" />
                  {/* İkinci Kademe */}
                  <rect x="26" y="140" width="168" height="8" rx="2" fill="url(#minaretGrad)" stroke="#64748b" strokeWidth="1" />
                </g>
              )}

              {/* Adım 2: Ana Gövde Duvarları, Yan Kubbeler ve Giriş Kapısı */}
              {revealedCount >= 2 && (
                <g className="transition-all duration-500">
                  {/* Ana Duvarlar */}
                  <rect x="55" y="75" width="110" height="65" rx="5" fill={isDarkMode ? 'url(#wallDarkGrad)' : 'url(#wallGrad)'} stroke="#64748b" strokeWidth="1.5" />
                  {/* Sol Yan Kubbe */}
                  <path d="M35 110 Q 55 80 75 110 Z" fill="url(#halfDomeGrad)" stroke="#047857" strokeWidth="1" />
                  {/* Sağ Yan Kubbe */}
                  <path d="M145 110 Q 165 80 185 110 Z" fill="url(#halfDomeGrad)" stroke="#047857" strokeWidth="1" />
                  {/* Büyük Kemerli Giriş Kapısı */}
                  <path d="M92 140 V 105 Q 110 90 128 105 V 140 Z" fill="#334155" stroke="#1e293b" strokeWidth="2" />
                  <path d="M97 140 V 109 Q 110 96 123 109 V 140 Z" fill="#1e293b" />
                  {/* Kapı Tokmağı Altın Çizgi */}
                  <line x1="110" y1="115" x2="110" y2="140" stroke="url(#goldGrad)" strokeWidth="1.5" />
                </g>
              )}

              {/* Adım 3: Sol Minare */}
              {revealedCount >= 3 && (
                <g className="transition-all duration-500">
                  {/* Gövde */}
                  <rect x="35" y="30" width="12" height="110" rx="1.5" fill="url(#minaretGrad)" stroke="#64748b" strokeWidth="1" />
                  {/* Şerefe (Ezan Okuma Balkonu) */}
                  <path d="M32 55 H 50 L 47 62 H 35 Z" fill="url(#goldGrad)" stroke="#d97706" strokeWidth="1" />
                  <rect x="32" y="52" width="18" height="3" fill="#1e293b" />
                  {/* Minare Külahı (Sivri Çatı) */}
                  <path d="M35 30 L 41 12 L 47 30 Z" fill="#475569" stroke="#334155" strokeWidth="1" />
                </g>
              )}

              {/* Adım 4: Sağ Minare */}
              {revealedCount >= 4 && (
                <g className="transition-all duration-500">
                  {/* Gövde */}
                  <rect x="173" y="30" width="12" height="110" rx="1.5" fill="url(#minaretGrad)" stroke="#64748b" strokeWidth="1" />
                  {/* Şerefe */}
                  <path d="M170 55 H 188 L 185 62 H 173 Z" fill="url(#goldGrad)" stroke="#d97706" strokeWidth="1" />
                  <rect x="170" y="52" width="18" height="3" fill="#1e293b" />
                  {/* Minare Külahı */}
                  <path d="M173 30 L 179 12 L 185 30 Z" fill="#475569" stroke="#334155" strokeWidth="1" />
                </g>
              )}

              {/* Adım 5: Görkemli Ana Yeşil Kubbe */}
              {revealedCount >= 5 && (
                <g className="transition-all duration-500">
                  {/* Kubbe Kavisi */}
                  <path d="M55 75 Q 110 12 165 75 Z" fill="url(#domeGrad)" stroke="#047857" strokeWidth="2" />
                  {/* Kubbe Kuşağı Çizgisi */}
                  <path d="M55 72 Q 110 15 165 72" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5" />
                </g>
              )}

              {/* Adım 6: Altın Hilaller (Alemler) ve Kemerli Yanan Pencereler */}
              {revealedCount >= 6 && (
                <g className="transition-all duration-500">
                  {/* Ana Kubbe Alemi ve Altın Hilal */}
                  <line x1="110" y1="12" x2="110" y2="4" stroke="url(#goldGrad)" strokeWidth="2" />
                  <path d="M107 1 A 2.5 2.5 0 1 1 110 6 A 2 2 0 1 0 107 1 Z" fill="url(#goldGrad)" />

                  {/* Sol Minare Hilali */}
                  <line x1="41" y1="12" x2="41" y2="6" stroke="url(#goldGrad)" strokeWidth="1.5" />
                  <path d="M39 3 A 2 2 0 1 1 41 7 A 1.5 1.5 0 1 0 39 3 Z" fill="url(#goldGrad)" />

                  {/* Sağ Minare Hilali */}
                  <line x1="179" y1="12" x2="179" y2="6" stroke="url(#goldGrad)" strokeWidth="1.5" />
                  <path d="M177 3 A 2 2 0 1 1 179 7 A 1.5 1.5 0 1 0 177 3 Z" fill="url(#goldGrad)" />

                  {/* Kemerli Pencere 1 (Sol) - Warm Glowing Gradient */}
                  <path d="M70 100 V 90 Q 75 83 80 90 V 100 Z" fill="url(#windowLight)" className="animate-pulse shadow-xl" />
                  <path d="M70 100 V 90 Q 75 83 80 90 V 100 Z" fill="none" stroke="#64748b" strokeWidth="1" />

                  {/* Kemerli Pencere 2 (Sağ) */}
                  <path d="M140 100 V 90 Q 145 83 150 90 V 100 Z" fill="url(#windowLight)" className="animate-pulse" />
                  <path d="M140 100 V 90 Q 145 83 150 90 V 100 Z" fill="none" stroke="#64748b" strokeWidth="1" />

                  {/* Kubbe İçi Küçük Daire Pencereler */}
                  <circle cx="95" cy="55" r="3.5" fill="url(#windowLight)" className="animate-pulse" />
                  <circle cx="110" cy="50" r="3.5" fill="url(#windowLight)" className="animate-pulse" />
                  <circle cx="125" cy="55" r="3.5" fill="url(#windowLight)" className="animate-pulse" />
                </g>
              )}
            </svg>
          </div>

          {/* Sağ Kolon: Duruma Göre Oyun Paneli Veya Sonuç Kartı */}
          <div className="w-full lg:w-[48%] flex flex-col gap-4 items-center">

            {gameStatus === 'playing' ? (
              <>
                {/* Soru Kartı - Üstte */}
                <div className="w-full bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-5 rounded-[2rem] shadow-lg flex flex-col gap-2 text-center relative select-none">
                  <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-450 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/20 px-3 py-1 rounded-md self-center">
                    SORU
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-white leading-relaxed mt-1.5">
                    {currentWordObj.clue}
                  </p>
                </div>

                {/* Gizli Kelime Karakter Kutuları */}
                <div className="flex flex-wrap gap-2 justify-center py-2 select-none">
                  {currentWordObj.word.split('').map((char, index) => {
                    const isGuessed = guessedLetters.includes(char);
                    return (
                      <div
                        key={index}
                        className={`w-10 h-12 sm:w-11 sm:h-13 rounded-2xl border-3 flex items-center justify-center font-display font-black text-lg sm:text-xl shadow transition-all duration-300 ${
                          isGuessed
                            ? 'bg-white dark:bg-slate-800 border-emerald-500 text-emerald-600 dark:text-emerald-450 scale-105'
                            : 'bg-slate-100/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-750 text-transparent'
                        }`}
                      >
                        {isGuessed ? char : '_'}
                      </div>
                    );
                  })}
                </div>

                {/* Harf Klavye Seçenekleri - Karışık Düzen */}
                <div className="w-full bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-5 rounded-[2.5rem] shadow-md select-none">
                  <span className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest text-center mb-3">
                    Klavye Tıklayarak Harf Seçin (Karışık Düzen):
                  </span>

                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {keyboardLetters.map((letter) => {
                      const isUsed = guessedLetters.includes(letter);
                      const isInWord = currentWordObj.word.includes(letter);

                      let btnStyle = 'bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-850 dark:text-slate-100 border-slate-200 dark:border-slate-700';
                      if (isUsed) {
                        btnStyle = isInWord
                          ? 'bg-emerald-500 border-emerald-600 text-white opacity-50 cursor-not-allowed pointer-events-none'
                          : 'bg-rose-500 border-rose-600 text-white opacity-40 cursor-not-allowed pointer-events-none';
                      }

                      return (
                        <button
                          key={letter}
                          onClick={() => handleGuess(letter)}
                          className={`w-9 h-9 rounded-lg border-2 font-display font-black text-xs transition-all active:scale-90 cursor-pointer shadow-sm flex items-center justify-center ${btnStyle}`}
                          disabled={isUsed}
                        >
                          {letter}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </>
            ) : (
              /* Sonuç Kartı (Won / Lost) - Cami Görseli Solda Kalırken Sağda Gösterilir */
              <div className="text-center flex flex-col items-center py-6 w-full bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-8 rounded-[2.5rem] shadow-xl animate-scale-up select-none">
                {gameStatus === 'won' ? (
                  <>
                    <Trophy className="w-16 h-16 text-yellow-500 animate-bounce mb-3" />
                    <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
                      Tebrikler! Kazandınız!
                    </h3>
                    <p className="text-xs text-slate-500 mt-2">
                      Gizli kelimeyi buldun ve camiyi başarıyla tamamladın!
                    </p>
                  </>
                ) : (
                  <>
                    <XCircle className="w-16 h-16 text-rose-500 animate-pulse mb-3" />
                    <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
                      Oyun Bitti, Kaybettiniz!
                    </h3>
                    <p className="text-xs text-slate-500 mt-2">
                      Süreniz veya canlarınız bitti ve cami yapımı maalesef yarım kaldı...
                    </p>
                  </>
                )}

                <div className="w-full flex flex-col gap-2 my-5 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Gizli Kelime</span>
                  <span className="text-xl font-display font-black text-slate-800 dark:text-white tracking-widest">
                    {currentWordObj.word}
                  </span>
                  <span className="text-[10px] font-bold text-slate-550 dark:text-slate-400 mt-1 leading-normal">
                    {currentWordObj.clue}
                  </span>
                </div>

                <button
                  onClick={handleStart}
                  className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  Yeni Kelimeyle Oyna! ➔
                </button>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
};
