import React, { useState, useEffect } from 'react';
import { BookOpen, Trophy } from 'lucide-react';
import { AZQuestion } from '../../utils/questionPool';
import { getPassaparolaQuestionForLetter } from '../../data/games/passaparolaQuestions';
import { playSound } from '../BuzzerAndTimer';

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

interface PassaparolaGameProps {
  isDarkMode: boolean;
}

export const PassaparolaGame: React.FC<PassaparolaGameProps> = ({ isDarkMode }) => {
  const [gameStatus, setGameStatus] = useState<'intro' | 'playing' | 'ended'>('intro');
  const [round, setRound] = useState<number>(1);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [userInput, setUserInput] = useState<string>('');
  const [timer, setTimer] = useState<number>(300); // 5 dakika
  const [showReveal, setShowReveal] = useState<boolean>(false);

  // Harf durumları: 'pending' | 'correct' | 'incorrect' | 'passed'
  const [lettersState, setLettersState] = useState<Record<string, 'pending' | 'correct' | 'incorrect' | 'passed'>>(() => {
    const states: Record<string, 'pending' | 'correct' | 'incorrect' | 'passed'> = {};
    TURKISH_LETTERS.forEach(l => { states[l] = 'pending'; });
    return states;
  });

  // Bu oyun oturumuna özel dondurulmuş sorular listesi
  const [gameQuestions, setGameQuestions] = useState<Record<string, AZQuestion>>({});

  // Pas geçmişi (Tur 2'de sormak için harflerin indeksleri)
  const [passHistory, setPassHistory] = useState<number[]>([]);

  // Oyunu Başlat
  const handleStart = () => {
    playSound('complete');
    const qMap: Record<string, AZQuestion> = {};
    TURKISH_LETTERS.forEach(l => {
      qMap[l] = getPassaparolaQuestionForLetter(l);
    });
    setGameQuestions(qMap);
    setLettersState(Object.fromEntries(TURKISH_LETTERS.map(l => [l, 'pending'])));
    setPassHistory([]);
    setRound(1);
    setCurrentIdx(0);
    setUserInput('');
    setTimer(300);
    setShowReveal(false);
    setGameStatus('playing');
  };

  // Zamanlayıcı
  useEffect(() => {
    if (gameStatus !== 'playing') return;
    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          playSound('fail');
          setGameStatus('ended');
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

  // Fiziksel Klavye Desteği
  useEffect(() => {
    if (gameStatus !== 'playing') return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleAnswerSubmit();
      } else if (e.key === 'Backspace') {
        playSound('tick');
        setUserInput(prev => prev.slice(0, -1));
      } else if (e.key.length === 1 && /[a-zA-ZçğışöüÇĞİŞÖÜ]/.test(e.key)) {
        playSound('tick');
        setUserInput(prev => prev + toTurkishUpperCase(e.key));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameStatus, userInput, currentIdx, passHistory, round]);

  const activeLetter = TURKISH_LETTERS[currentIdx];
  const activeQuestionObj = gameQuestions[activeLetter];

  // Bir sonraki harfe geçiş mantığı
  const proceedToNext = (updatedStates: Record<string, 'pending' | 'correct' | 'incorrect' | 'passed'>) => {
    setUserInput('');
    setShowReveal(false);

    // Z harfi (son harf) de işlendiyse oyun biter (Cevap verilse de, Paslansa da doğrudan biter)
    if (currentIdx === TURKISH_LETTERS.length - 1) {
      playSound('complete');
      setGameStatus('ended');
      return;
    }

    // Normal olarak bir sonraki harfe geç
    setCurrentIdx(currentIdx + 1);
  };

  // Cevap Verme
  const handleAnswerSubmit = () => {
    if (!userInput.trim()) return;

    const cleanInput = cleanTurkish(userInput);
    const cleanCorrect = cleanTurkish(activeQuestionObj.answer);

    const isCorrect = cleanInput === cleanCorrect;
    if (isCorrect) {
      playSound('success');
    } else {
      playSound('fail');
    }
    const newState = { ...lettersState, [activeLetter]: isCorrect ? 'correct' : 'incorrect' as const };
    setLettersState(newState);

    // Eğer pas listesindeyse ve cevaplandıysa pas listesinden durumunu güncellemiş olduk
    proceedToNext(newState);
  };

  // Pas Geçme
  const handlePass = () => {
    playSound('tick');
    const newState = { ...lettersState, [activeLetter]: 'passed' as const };
    setLettersState(newState);
    proceedToNext(newState);
  };

  // Öğretmen İçin Manuel İşaretleme Kontrolü
  const handleManualMark = (status: 'correct' | 'incorrect') => {
    if (status === 'correct') {
      playSound('success');
    } else {
      playSound('fail');
    }
    const newState = { ...lettersState, [activeLetter]: status };
    setLettersState(newState);
    proceedToNext(newState);
  };

  // Skor Özet Hesabı
  const correctCount = Object.values(lettersState).filter(s => s === 'correct').length;
  const incorrectCount = Object.values(lettersState).filter(s => s === 'incorrect').length;
  const passedCount = Object.values(lettersState).filter(s => s === 'passed').length;

  // Sanal Klavye Buton Tıklaması
  const handleVirtualKeyPress = (key: string) => {
    playSound('tick');
    if (key === 'SİL') {
      setUserInput(prev => prev.slice(0, -1));
    } else if (key === 'TEMİZLE') {
      setUserInput('');
    } else {
      setUserInput(prev => prev + key);
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {gameStatus === 'intro' && (
        <div className="text-center flex flex-col items-center py-6">
          <BookOpen className="w-20 h-20 text-amber-500 mb-4 animate-pulse" />
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase">
            A'dan Z'ye İslam Atlası
          </h3>
          <p className="text-xs text-slate-500 mt-2 max-w-md leading-relaxed">
            Harf halkasını tamamlamak için sırayla sorulara doğru cevap vermen gerekiyor. <br />
            Cevapları tahtadaki sanal klavyeyle veya fiziksel klavyeyle yazabilirsin. <br />
            <strong>Öğretmen Kolaylığı:</strong> Akıllı tahtada hızlanmak için öğretmen "Cevabı Gör" diyerek doğru/yanlış butonlarıyla manuel işaretleme yapabilir!
          </p>
          <button
            onClick={handleStart}
            className="mt-6 px-10 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-lg hover:shadow-orange-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yarışmayı Başlat! ➔
          </button>
        </div>
      )}

      {gameStatus === 'playing' && activeQuestionObj && (
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

          {/* Sol Kolon: Harf Çemberi */}
          <div className="lg:col-span-6 flex justify-center py-4">
            <div className="relative w-[325px] h-[325px] sm:w-[460px] sm:h-[460px] rounded-full border-2 border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20 shadow-inner flex items-center justify-center">
              {TURKISH_LETTERS.map((letter, i) => {
                const angle = (i * 360 / 27) - 90;
                const rad = (angle * Math.PI) / 180;
                const radius = 43.5; // Yüzde yarıçap
                const left = `calc(50% + ${radius * Math.cos(rad)}% - 16px)`;
                const top = `calc(50% + ${radius * Math.sin(rad)}% - 16px)`;

                let colorClass = 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700';
                if (lettersState[letter] === 'correct') {
                  colorClass = 'bg-emerald-500 text-white border-emerald-600 shadow-sm';
                } else if (lettersState[letter] === 'incorrect') {
                  colorClass = 'bg-rose-500 text-white border-rose-600 shadow-sm';
                } else if (lettersState[letter] === 'passed') {
                  colorClass = 'bg-amber-400 text-slate-900 border-amber-500 shadow-sm animate-pulse';
                } else if (letter === activeLetter) {
                  colorClass = 'bg-sky-500 text-white border-sky-600 scale-125 ring-4 ring-sky-100 dark:ring-sky-950/40 animate-pulse';
                }

                return (
                  <div
                    key={letter}
                    style={{ position: 'absolute', left, top, width: '32px', height: '32px' }}
                    className={`rounded-full border-2 flex items-center justify-center font-display font-black text-xs select-none transition-all duration-300 shadow ${colorClass}`}
                  >
                    {letter}
                  </div>
                );
              })}

              {/* Çemberin İçi Merkez Bilgi Alanı */}
              <div className="w-36 h-36 sm:w-52 sm:h-52 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 shadow-lg flex flex-col items-center justify-center p-3 text-center z-10">
                <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  Aktif Harf
                </span>
                <span className="text-4xl sm:text-5xl font-display font-black text-indigo-650 dark:text-indigo-400 mt-1">
                  {activeLetter}
                </span>
                <span className="text-[9px] font-black text-slate-500 dark:text-slate-400 mt-2 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  TUR {round}
                </span>
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Soru Paneli ve Klavye */}
          <div className="lg:col-span-6 flex flex-col gap-4">

            {/* Süre & Doğru/Yanlış Sayacı */}
            <div className="flex justify-between items-center bg-white dark:bg-slate-800 border-2 border-slate-150 dark:border-slate-750 px-4 py-2.5 rounded-2xl shadow-sm text-xs font-black">
              <span className="text-slate-650 dark:text-slate-350 flex items-center gap-1">
                ⏱️ SÜRE: {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
              </span>
              <div className="flex gap-3">
                <span className="text-emerald-500">🟢 DOĞRU: {correctCount}</span>
                <span className="text-rose-500">🔴 YANLIŞ: {incorrectCount}</span>
                <span className="text-amber-500">🟡 PAS: {passedCount}</span>
              </div>
            </div>

            {/* Soru Kutusu */}
            <div className="bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-5 rounded-[2rem] shadow-md flex flex-col gap-3 min-h-[140px] justify-center relative">
              <span className="absolute top-4 left-5 text-[9px] font-black tracking-widest uppercase bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 px-2.5 py-0.5 rounded-md">
                {activeLetter} Harfi Sorusu
              </span>
              <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-white leading-relaxed mt-2">
                {activeQuestionObj.question}
              </p>
            </div>

            {/* Cevap Girdi Alanı */}
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(toTurkishUpperCase(e.target.value))}
                  placeholder={`${activeLetter} harfi ile başlayan cevabı yazın...`}
                  className="flex-1 bg-white dark:bg-slate-855 border-3 border-slate-200 dark:border-slate-700 focus:border-sky-500 dark:focus:border-sky-500 focus:outline-none p-3.5 rounded-2xl text-slate-800 dark:text-white font-display text-sm font-black tracking-wide"
                />

                <button
                  onClick={handlePass}
                  className="px-5 py-3.5 bg-amber-400 border-b-4 border-amber-600 font-black text-xs uppercase tracking-wider rounded-2xl text-slate-900 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow"
                >
                  PAS
                </button>

                <button
                  onClick={handleAnswerSubmit}
                  className="px-5 py-3.5 bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-black text-xs uppercase tracking-wider rounded-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-md"
                >
                  CEVAPLA
                </button>
              </div>

              {/* Öğretmen Override ve Kolay Cevap Gör Modu */}
              <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-2.5 rounded-xl">
                <button
                  onClick={() => setShowReveal(!showReveal)}
                  className="px-3 py-1 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/30 dark:hover:bg-indigo-900/30 text-indigo-650 dark:text-indigo-400 text-[10px] font-black uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                >
                  {showReveal ? 'Cevabı Gizle 👁' : 'Cevabı Gör 👀'}
                </button>

                {showReveal && (
                  <div className="flex items-center gap-3 animate-fade-in">
                    <span className="text-xs font-black text-indigo-650 dark:text-indigo-300">
                      Cevap: <span className="underline">{activeQuestionObj.answer}</span>
                    </span>
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => handleManualMark('correct')}
                        className="px-2.5 py-1 bg-emerald-500 text-white text-[9px] font-black uppercase rounded-md shadow hover:scale-105 transition-all cursor-pointer"
                      >
                        DOĞRU
                      </button>
                      <button
                        onClick={() => handleManualMark('incorrect')}
                        className="px-2.5 py-1 bg-rose-500 text-white text-[9px] font-black uppercase rounded-md shadow hover:scale-105 transition-all cursor-pointer"
                      >
                        YANLIŞ
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Akıllı Tahta Sanal Klavyesi (Q Klavye Türkçe) */}
            <div className="bg-slate-100/70 dark:bg-slate-950/20 border border-slate-200 dark:border-slate-800 p-3 rounded-2xl flex flex-col gap-1.5 shadow-inner">
              {[
                ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'Ğ', 'Ü'],
                ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ş', 'İ'],
                ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Ö', 'Ç', 'SİL', 'TEMİZLE']
              ].map((row, rIdx) => (
                <div key={rIdx} className="flex justify-center gap-1 w-full">
                  {row.map((key) => {
                    const isSpecial = ['SİL', 'TEMİZLE'].includes(key);
                    return (
                      <button
                        key={key}
                        onClick={() => handleVirtualKeyPress(key)}
                        className={`py-2 text-xs font-black rounded-lg transition-all active:scale-90 cursor-pointer shadow-sm flex items-center justify-center ${isSpecial
                          ? 'bg-slate-300 dark:bg-slate-800 hover:bg-slate-350 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 px-3'
                          : 'flex-1 bg-white dark:bg-slate-850 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-850 dark:text-slate-100'
                        }`}
                      >
                        {key}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

      {gameStatus === 'ended' && (
        <div className="text-center flex flex-col items-center py-6 w-full max-w-md bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-700 p-8 rounded-[2.5rem] shadow-xl animate-scale-up">
          <Trophy className="w-16 h-16 text-yellow-500 animate-bounce mb-3" />
          <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
            Tebrikler, Tamamlandı!
          </h3>
          <p className="text-xs text-slate-500 mt-2">
            A'dan Z'ye İslam Atlası turunu başarıyla bitirdin. İşte sınıftaki derecelendirme karnesi:
          </p>

          <div className="w-full flex flex-col gap-3 my-6">
            <div className="flex items-center justify-between p-3.5 bg-emerald-50 dark:bg-emerald-950/20 border-2 border-emerald-300 rounded-xl">
              <span className="text-xs font-black text-emerald-800 dark:text-emerald-400 uppercase">🟢 Doğru Cevaplar</span>
              <span className="text-base font-black text-emerald-950 dark:text-emerald-300">{correctCount} Harf</span>
            </div>
            <div className="flex items-center justify-between p-3.5 bg-rose-50 dark:bg-rose-950/20 border-2 border-rose-300 rounded-xl">
              <span className="text-xs font-black text-rose-800 dark:text-rose-400 uppercase">🔴 Yanlış Cevaplar</span>
              <span className="text-base font-black text-rose-950 dark:text-rose-300">{incorrectCount} Harf</span>
            </div>
            <div className="flex items-center justify-between p-3.5 bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-350 rounded-xl">
              <span className="text-xs font-black text-amber-800 dark:text-amber-400 uppercase">🟡 Pas Geçilenler</span>
              <span className="text-base font-black text-amber-950 dark:text-amber-300">{passedCount} Harf</span>
            </div>
          </div>

          <button
            onClick={handleStart}
            className="w-full py-4 bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-black uppercase text-xs tracking-wider rounded-2xl shadow-lg hover:shadow-sky-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Yeniden Oyna! ↩️
          </button>
        </div>
      )}
    </div>
  );
};
