import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book, Play, Pause, Search, RefreshCw, Volume2, Sparkles, BookOpen, Heart, Award, ArrowRight, ArrowLeft, BookOpenCheck, ChevronLeft, ChevronRight, Layers, GraduationCap, Puzzle, Eye, EyeOff, RotateCcw, Trophy, Zap, Target, CheckCircle, XCircle, Star, Grid3X3, FlipHorizontal, Shuffle, SortAsc, Maximize2, Minimize2, X, Sun, Moon } from 'lucide-react';
import { playSound } from './BuzzerAndTimer';
import Lottie from 'lottie-react';
import {
  ELIF_BA_PAGES,
  HAREKE_LABELS,
  getTotalPages,
  getPageById,
  groupByHareke,
  type ElifbaPage,
  type HarekeliBilesik,
  type AlistirmaKelime,
  type NamazDuasi,
} from '../data/elifbaData';

// Curated short popular namaz sures as high-speed default fallback
interface Ayah {
  number: number;
  text: string;
  translation: string;
  surahNumber?: number;
  surahName?: string;
  arabicName?: string;
}

interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
  verses?: Ayah[];
  audioUrl?: string;
}

// Helper to remove Bismillah prefix from the first ayah of surahs (except Fatiha 1 and At-Tawbah 9)
const cleanBismillah = (text: string, surahNumber: number): string => {
  if (surahNumber === 1 || surahNumber === 9) {
    return text;
  }
  
  const isArabicLetter = (ch: string): boolean => {
    const code = ch.charCodeAt(0);
    if (code >= 0x0621 && code <= 0x064A) return true;
    if (code === 0x0671) return true; // Alif Wasla
    return false;
  };

  const toBaseChar = (ch: string): string => {
    if (ch === 'آ' || ch === 'أ' || ch === 'إ' || ch === 'ٱ' || ch === 'ا') return 'ا';
    if (ch === 'ى' || ch === 'ي' || ch === 'ئ' || ch === 'ی') return 'y'; // normalize to y to avoid confuse
    if (ch === 'ة') return 'ه';
    return ch;
  };

  const normalizedTarget = "بسماللهالرحمنالرحيم".split('').map(toBaseChar).join('');
  let matchedCount = 0;
  let originalIndex = 0;

  while (originalIndex < text.length && matchedCount < normalizedTarget.length) {
    const origChar = text[originalIndex];
    if (isArabicLetter(origChar)) {
      const baseChar = toBaseChar(origChar);
      if (baseChar === normalizedTarget[matchedCount]) {
        matchedCount++;
      } else {
        break;
      }
    }
    originalIndex++;
  }

  if (matchedCount === normalizedTarget.length) {
    let resultIndex = originalIndex;
    while (resultIndex < text.length) {
      const ch = text[resultIndex];
      if (ch === ' ' || !isArabicLetter(ch)) {
        resultIndex++;
      } else {
        break;
      }
    }
    return text.substring(resultIndex);
  }

  return text;
};


const FALLBACK_POPULAR_SURAHS: Surah[] = [
  {
    number: 1,
    name: "سُورَةُ الْفَاتِحَةِ",
    englishName: "Al-Fatiha",
    englishNameTranslation: "Açılış",
    numberOfAyahs: 7,
    revelationType: "Meccan",
    verses: [
      { number: 1, text: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّح۪يمِ", translation: "Rahmân ve Rahîm olan Allah'ın adıyla." },
      { number: 2, text: "اَلْحَمْدُ لِلّٰهِ رَبِّ الْعَالَم۪ينَۙ", translation: "Hamd, âlemlerin Rabbi olan Allah'a mahsustur." },
      { number: 3, text: "اَلرَّحْمٰنِ الرَّح۪يمِۙ", translation: "O, Rahmân'dır ve Rahîm'dir." },
      { number: 4, text: "مَالِكِ يَوْمِ الدّ۪ينِۜ", translation: "O, hesap gününün (âhiretin) tek hâkimidir." },
      { number: 5, text: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَع۪ينُۜ", translation: "Rabbimiz! Ancak sana kulluk eder ve yalnız senden yardım dileriz." },
      { number: 6, text: "اِهْدِنَا الصِّرَاطَ الْمُسْتَق۪يمَۙ", translation: "Bizi dosdoğru yola ilet." },
      { number: 7, text: "صِرَاطَ الَّذ۪ينَ أَنْعَمْتَ عَلَيْهِمْۙ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالّ۪ينَ", translation: "Kendilerine lütuf ve ikramda bulunduğun kimselerin yoluna ilet; gazaba uğramışların ve sapmışların yoluna değil." }
    ]
  },
  {
    number: 108,
    name: "سُورَةُ الْكَوْثَرِ",
    englishName: "Al-Kawthar",
    englishNameTranslation: "Kevser",
    numberOfAyahs: 3,
    revelationType: "Meccan",
    verses: [
      { number: 1, text: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَۜ", translation: "Şüphesiz biz sana bol nimet, feyiz ve bereket dolu Kevser'i verdik." },
      { number: 2, text: "فَصَلِّ لِرَبِّكَ وَانْحَرْۜ", translation: "Öyleyse sadece Rabbin için namaz kıl ve kurban kes." },
      { number: 3, text: "إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ", translation: "Asıl nesli kesilecek olan, şüphesiz sana buğzeden düşmanındır." }
    ]
  },
  {
    number: 112,
    name: "سُورَةُ الْإِخْلَاصِ",
    englishName: "Al-Ikhlas",
    englishNameTranslation: "İhlas",
    numberOfAyahs: 4,
    revelationType: "Meccan",
    verses: [
      { number: 1, text: "قُلْ هُوَ اللّٰهُ أَحَدٌۚ", translation: "De ki: O Allah birdir, tektir." },
      { number: 2, text: "اَللّٰهُ الصَّمَدُۚ", translation: "Allah hiçbir şeye muhtaç değildir, her şey O'na muhtaçtır." },
      { number: 3, text: "لَمْ يَلِدْ وَلَمْ يُولَدْۙ", translation: "O, doğurmamış ve doğurulmamıştır." },
      { number: 4, text: "وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ", translation: "Hiçbir şey O'nun benzeri, dengi veya dengi olamaz." }
    ]
  },
  {
    number: 113,
    name: "سُورَةُ الْفَلَقِ",
    englishName: "Al-Falaq",
    englishNameTranslation: "Felak",
    numberOfAyahs: 5,
    revelationType: "Meccan",
    verses: [
      { number: 1, text: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِۙ", translation: "De ki: Sabahın, şafağın Rabbine sığınırım," },
      { number: 2, text: "مِنْ شَرِّ مَا خَلَقَۙ", translation: "Yarattığı şeylerin kötülüğünden," },
      { number: 3, text: "مِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَۙ", translation: "Karanlığı çöktüğünde gecenin kötülüğünden," },
      { number: 4, text: "مِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِۙ", translation: "Düğümlere üfleyen büyücülerin kötülüğünden," },
      { number: 5, text: "مِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ", translation: "Haset ettiğinde hasetçinin kıskançlık kötülüğünden." }
    ]
  },
  {
    number: 114,
    name: "سُورَةُ النَّاسِ",
    englishName: "Al-Nas",
    englishNameTranslation: "Nas",
    numberOfAyahs: 6,
    revelationType: "Meccan",
    verses: [
      { number: 1, text: "قُلْ أَعُوذُ بِرَبِّ النَّاسِۙ", translation: "De ki: İnsanların sığınağı olan Rabbe sığınırım," },
      { number: 2, text: "مَلِكِ النَّاسِۙ", translation: "İnsanların biricik sahibine ve yöneticisine," },
      { number: 3, text: "إِلٰهِ النَّاسِۙ", translation: "İnsanların gerçek ilahına;" },
      { number: 4, text: "مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِۙ", translation: "Sinsi fısıldayıcının kötülüğünden," },
      { number: 5, text: "اَلَّذ۪ي يُوَسْوِسُ فِي صُدُورِ النَّاسِۙ", translation: "O ki insanların kalplerine fısıltılar verir," },
      { number: 6, text: "مِنَ الْجِنَّةِ وَالنَّاسِ", translation: "Gerek cinlerden, gerekse insanlardan gelen kötülüklerden." }
    ]
  }
];

interface ElifbaLetter {
  char: string;
  name: string;
  turkishName: string;
  pronunciation: string;
  mizac: string;
  freq: number;
}

const ELIFBA_LETTERS: ElifbaLetter[] = [
  { char: "ا", name: "Elif", turkishName: "Elif", pronunciation: "İnce, düz", mizac: "İnce ve süzgün. Kuran harflerinin anasıdır.", freq: 261.63 },
  { char: "ب", name: "Be", turkishName: "Be", pronunciation: "Dudaktan, ince", mizac: "Güçlü ve kararlı dudak sesi.", freq: 293.66 },
  { char: "ت", name: "Te", turkishName: "Te", pronunciation: "İnce, diş ucundan", mizac: "Yumuşak ve tatlı nefes sesi.", freq: 329.63 },
  { char: "ث", name: "Se", turkishName: "Se (Pelte)", pronunciation: "Pelte ince, dil ucundan", mizac: "Narin, kibar ve peltektir.", freq: 349.23 },
  { char: "ج", name: "Cim", turkishName: "Cim", pronunciation: "Dil ortasından, ince", mizac: "Sevgi dolu, net ve tınlayan.", freq: 392.00 },
  { char: "ح", name: "Ha", turkishName: "Ha", pronunciation: "Boğaz ortasından, ince fısıltı", mizac: "Boğazdan süzülen sıcacık nefes.", freq: 440.00 },
  { char: "خ", name: "Hı", turkishName: "Hı (Kalın)", pronunciation: "Gırtlaktan, kalın hırıltılı", mizac: "Heybetli, gür ve tok ses.", freq: 493.88 },
  { char: "د", name: "Dal", turkishName: "Dal", pronunciation: "İnce, titreşimli", mizac: "Vurgulu, kararlı ve şen.", freq: 523.25 },
  { char: "ذ", name: "Zel", turkishName: "Zel (Pelte)", pronunciation: "Pelte ince, diş ucu", mizac: "Yumuşak, akıcı ve süzülen.", freq: 587.33 },
  { char: "ر", name: "Ra", turkishName: "Ra", pronunciation: "Kuvvetli, titreşimli", mizac: "Arada ince arada heybetli, dilli.", freq: 659.25 },
  { char: "ز", name: "Ze", turkishName: "Ze", pronunciation: "İnce, keskin arı gibi", mizac: "Islıklı, hareketli ve heyecanlı.", freq: 698.46 },
  { char: "س", name: "Sin", turkishName: "Sin", pronunciation: "İnce, ıslıklı", mizac: "Berrak, tatlı ve ince.", freq: 783.99 },
  { char: "ش", name: "Şın", turkishName: "Şın", pronunciation: "İnce, dağılan tıs sesi", mizac: "Ağızda yayılan ferah nefes.", freq: 880.00 },
  { char: "ص", name: "Sad", turkishName: "Sad (Kalın)", pronunciation: "Kalın, dolgun ve tok", mizac: "Heybetli dolulukta bir harf.", freq: 987.77 },
  { char: "ض", name: "Dad", turkishName: "Dad (Kalın)", pronunciation: "Dil kenarından, kalın", mizac: "Yüce ve benzersiz kalın harf.", freq: 1046.50 },
  { char: "ط", name: "Tı", turkishName: "Tı (Kalın)", pronunciation: "Kuvvetli kalın ve dik", mizac: "Zirvede ve tınlayan bas ses.", freq: 1174.66 },
  { char: "ظ", name: "Zı", turkishName: "Zı (Pelte kalın)", pronunciation: "Kalın pelte", mizac: "Dolgun ve kapalı nefes.", freq: 1318.51 },
  { char: "ع", name: "Ayn", turkishName: "Ayn", pronunciation: "Boğaz ortasından, hafif genizden", mizac: "Hançereden yankılanan içten ses.", freq: 1395.91 },
  { char: "غ", name: "Gayn", turkishName: "Gayn (Kalın)", pronunciation: "Kalın, hırıltısız yumuşak g", mizac: "Akıcı ve kadifemsi kalın ses.", freq: 1567.98 },
  { char: "ف", name: "Fe", turkishName: "Fe", pronunciation: "Üst diş alt dudaktan, ince", mizac: "Hafif ve üfleyen narin tını.", freq: 1760.00 },
  { char: "ق", name: "Kaf", turkishName: "Kaf (Kalın)", pronunciation: "Damak dibinden kalın, tok", mizac: "Sekerek vuran, güçlü gür ses.", freq: 1975.53 },
  { char: "ك", name: "Kef", turkishName: "Kef", pronunciation: "İnce damaktan, hafif üflemeli", mizac: "Bebek fısıltısı kadar ince ve net.", freq: 2093.00 },
  { char: "ل", name: "Lam", turkishName: "Lam", pronunciation: "Ağız içinden ince", mizac: "Şarkı söyler gibi akıcı, berrak.", freq: 2349.32 },
  { char: "م", name: "Mim", turkishName: "Mim", pronunciation: "Dudaklar kapalı ince", mizac: "Derin, nağmeli ve içsel ses.", freq: 2637.02 },
  { char: "ن", name: "Nun", turkishName: "Nun", pronunciation: "Geniz tınılı ince", mizac: "Nağmeli, dinlendirici ses.", freq: 2793.83 },
  { char: "و", name: "Vav", turkishName: "Vav", pronunciation: "Dudakları bükerek ince", mizac: "Bükülen narin boynunu simgeler.", freq: 3135.96 },
  { char: "ه", name: "He", turkishName: "He", pronunciation: "Gerdandan derinden fısıltı", mizac: "Evrenin nefesi, derin ve huzurlu.", freq: 3520.00 },
  { char: "ي", name: "Ye", turkishName: "Ye", pronunciation: "Dil ucundan ince", mizac: "Zarif, nihayete eren tatlı harf.", freq: 3951.07 }
];

// ─── 114 SÛRE TÜRKÇE İSİM HARİTASI ──────────────────────────────
const TURKCE_SURE_ISIMLERI: Record<number, string> = {
  1:'Fâtiha',2:'Bakara',3:'Âl-i İmrân',4:'Nisâ',5:'Mâide',6:"En'âm",7:"A'râf",8:'Enfâl',9:'Tevbe',10:'Yûnus',
  11:'Hûd',12:'Yûsuf',13:"Ra'd",14:'İbrâhîm',15:'Hicr',16:'Nahl',17:'İsrâ',18:'Kehf',19:'Meryem',20:'Tâ-Hâ',
  21:'Enbiyâ',22:'Hac',23:"Mü'minûn",24:'Nûr',25:'Furkân',26:'Şuarâ',27:'Neml',28:'Kasas',29:'Ankebût',30:'Rûm',
  31:'Lokman',32:'Secde',33:'Ahzâb',34:"Sebe'",35:'Fâtır',36:'Yâsîn',37:'Sâffât',38:'Sâd',39:'Zümer',40:"Mü'min",
  41:'Fussilet',42:'Şûrâ',43:'Zuhruf',44:'Duhân',45:'Câsiye',46:'Ahkâf',47:'Muhammed',48:'Fetih',49:'Hucurât',50:'Kâf',
  51:'Zâriyât',52:'Tûr',53:'Necm',54:'Kamer',55:'Rahmân',56:'Vâkıa',57:'Hadîd',58:'Mücâdele',59:'Haşr',60:'Mümtehine',
  61:'Saff',62:"Cum'a",63:'Münâfikûn',64:'Tegâbün',65:'Talâk',66:'Tahrîm',67:'Mülk',68:'Kalem',69:'Hâkka',70:'Meâric',
  71:'Nûh',72:'Cin',73:'Müzzemmil',74:'Müddessir',75:'Kıyâmet',76:'İnsân',77:'Mürselât',78:"Nebe'",79:'Nâziât',80:'Abese',
  81:'Tekvîr',82:'İnfitâr',83:'Mutaffifîn',84:'İnşikâk',85:'Bürûc',86:'Târık',87:"A'lâ",88:'Gâşiye',89:'Fecr',90:'Beled',
  91:'Şems',92:'Leyl',93:'Duhâ',94:'İnşirâh',95:'Tîn',96:'Alak',97:'Kadir',98:'Beyyine',99:'Zilzâl',100:'Âdiyât',
  101:'Kâria',102:'Tekâsür',103:'Asr',104:'Hümeze',105:'Fîl',106:'Kureyş',107:'Mâûn',108:'Kevser',109:'Kâfirûn',110:'Nasr',
  111:'Tebbet',112:'İhlâs',113:'Felak',114:'Nâs'
};

/** Sure numarasından Türkçe isim döndürür */
const getTurkceSureIsmi = (surahNumber: number): string => {
  return TURKCE_SURE_ISIMLERI[surahNumber] || '';
};

const SURAH_START_PAGES: Record<number, number> = {
  1: 1, 2: 2, 3: 50, 4: 77, 5: 106, 6: 128, 7: 151, 8: 177, 9: 187, 10: 208,
  11: 221, 12: 235, 13: 249, 14: 255, 15: 262, 16: 267, 17: 282, 18: 293, 19: 305, 20: 312,
  21: 322, 22: 332, 23: 342, 24: 350, 25: 359, 26: 367, 27: 377, 28: 385, 29: 396, 30: 404,
  31: 411, 32: 415, 33: 418, 34: 428, 35: 434, 36: 440, 37: 446, 38: 453, 39: 458, 40: 467,
  41: 477, 42: 483, 43: 489, 44: 496, 45: 499, 46: 502, 47: 507, 48: 511, 49: 515, 50: 518,
  51: 520, 52: 523, 53: 526, 54: 528, 55: 531, 56: 534, 57: 537, 58: 542, 59: 545, 60: 549,
  61: 551, 62: 553, 63: 554, 64: 556, 65: 558, 66: 560, 67: 562, 68: 564, 69: 568, 70: 570,
  71: 572, 72: 574, 73: 576, 74: 578, 75: 580, 76: 582, 77: 585, 78: 587, 79: 589, 80: 590,
  81: 592, 82: 593, 83: 594, 84: 596, 85: 597, 86: 597, 87: 598, 88: 599, 89: 600, 90: 601,
  91: 601, 92: 602, 93: 603, 94: 603, 95: 603, 96: 604, 97: 604, 98: 604, 99: 604, 100: 604,
  101: 604, 102: 604, 103: 604, 104: 604, 105: 604, 106: 604, 107: 604, 108: 604, 109: 604, 110: 604,
  111: 604, 112: 604, 113: 604, 114: 604
};

interface KuranElifbaProps {
  initialTab?: 'elifba' | 'kuran';
  isDarkMode?: boolean;
  toggleDarkMode?: () => void;
  isFocused?: boolean;
  setIsFocused?: (focused: boolean) => void;
}

// ─── DERS MODU ALT BİLEŞENLERİ ───────────────────────────────────

/** Tıklanabilir Arapça Kelime Kartı */
const ClickableWord: React.FC<{
  kelime: AlistirmaKelime;
  size?: 'sm' | 'md' | 'lg';
}> = ({ kelime, size = 'md' }) => {
  const [showTip, setShowTip] = useState(false);

  const handleClick = () => {
    setShowTip(true);
    playSound('tick');
    setTimeout(() => setShowTip(false), 3000);
  };

  const sizeClasses = {
    sm: 'text-lg p-3',
    md: 'text-2xl p-4',
    lg: 'text-3xl p-5',
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className={`${sizeClasses[size]} bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-600 rounded-2xl font-serif font-bold text-slate-800 dark:text-slate-100 hover:border-emerald-400 dark:hover:border-emerald-500 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 transition-all cursor-pointer active:scale-95 w-full text-center shadow-sm hover:shadow-md`}
        dir="rtl"
      >
        {kelime.arapca}
      </button>

      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            className="absolute z-30 top-full left-1/2 -translate-x-1/2 mt-2 bg-emerald-600 text-white rounded-xl px-4 py-2.5 shadow-xl text-center min-w-[150px]"
          >
            <div className="text-xs font-black tracking-wide uppercase opacity-80">Okunuşu</div>
            <div className="text-sm font-bold mt-0.5">{kelime.okunusu}</div>
            {kelime.anlami && (
              <div className="text-[11px] opacity-90 mt-1 border-t border-white/20 pt-1">
                {kelime.anlami}
              </div>
            )}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-emerald-600 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/** Harekeli Harf Kartı */
const HarekeCard: React.FC<{
  bilesik: HarekeliBilesik;
}> = ({ bilesik }) => {
  const [showTip, setShowTip] = useState(false);
  const label = HAREKE_LABELS[bilesik.hareke];

  const handleClick = () => {
    setShowTip(true);
    playSound('tick');
    setTimeout(() => setShowTip(false), 2500);
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="aspect-square p-2 bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-600 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all cursor-pointer hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-md active:scale-95"
      >
        <span className="text-3xl font-serif font-bold text-slate-800 dark:text-slate-100 select-none" dir="rtl">
          {bilesik.bilesik}
        </span>
      </button>

      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute z-30 top-full left-1/2 -translate-x-1/2 mt-1.5 rounded-xl px-3 py-2 shadow-xl text-center text-white text-xs font-bold min-w-[90px]"
            style={{ backgroundColor: label?.renk || '#10b981' }}
          >
            {bilesik.okunusu}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45" style={{ backgroundColor: label?.renk || '#10b981' }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/** Namaz Duası Kartı */
const DuaCard: React.FC<{
  dua: NamazDuasi;
}> = ({ dua }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-600 rounded-[2rem] p-6 shadow-sm mb-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 border-b-2 border-slate-100 dark:border-slate-700 pb-4">
        <div className="w-11 h-11 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-xl shadow-md">
          🕌
        </div>
        <div>
          <h4 className="font-display font-black text-lg text-slate-800 dark:text-slate-100">{dua.baslik}</h4>
          {dua.altBaslik && <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">{dua.altBaslik}</p>}
        </div>
      </div>

      {/* Arapça Metin */}
      <div className="bg-emerald-50/50 dark:bg-emerald-900/20 border-2 border-emerald-100 dark:border-emerald-800/40 rounded-2xl p-5 mb-4" dir="rtl">
        <p className="text-2xl leading-[2.5] font-serif font-bold text-slate-800 dark:text-slate-100 text-center">
          {dua.arapca}
        </p>
      </div>

      {/* Okunuş */}
      <div className="bg-amber-50/50 dark:bg-amber-900/20 border-2 border-amber-100 dark:border-amber-800/40 rounded-2xl p-4 mb-3">
        <span className="text-[10px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-widest block mb-1">📖 TÜRKÇE OKUNUŞ</span>
        <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 leading-relaxed">{dua.okunusu}</p>
      </div>

      {/* Anlam (toggle) */}
      <button
        onClick={() => { setExpanded(!expanded); playSound('tick'); }}
        className="w-full flex items-center justify-center gap-2 text-xs font-black text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 cursor-pointer py-2 transition-colors"
      >
        <Eye className="w-4 h-4" />
        {expanded ? 'ANLAMINI GİZLE' : 'ANLAMINI GÖSTER'}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-sky-50/50 dark:bg-sky-900/20 border-2 border-sky-100 dark:border-sky-800/40 rounded-2xl p-4 mt-2">
              <span className="text-[10px] font-black text-sky-600 dark:text-sky-400 uppercase tracking-widest block mb-1">💎 MEAL / ANLAM</span>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-200 leading-relaxed">{dua.anlami}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const HarfKutusu: React.FC<{ h: any; hideName: boolean }> = ({ h, hideName }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShowInfo(true);
    playSound('tick');
  };

  // Auto-hide the tooltip after 2 seconds
  useEffect(() => {
    if (showInfo) {
      const timer = setTimeout(() => {
        setShowInfo(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showInfo]);

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="aspect-square w-full p-2 bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-600 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all cursor-pointer hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-lg active:scale-95"
      >
        <span className="text-4xl font-bold select-none text-slate-800 dark:text-slate-100 mt-2">{h.harf}</span>
        
        {/* Name list with more separation (gap-3 on button + extra margin/padding) */}
        {!hideName ? (
          <span className="text-[10px] font-black bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-full mt-1.5 mb-1.5 transition-opacity duration-300">
            {h.isim}
          </span>
        ) : (
          <span className="text-[10px] font-black opacity-0 px-2 py-0.5 mt-1.5 mb-1.5 select-none pointer-events-none">
            &nbsp;
          </span>
        )}
      </button>
      <AnimatePresence>
        {showInfo && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            className="absolute z-30 top-full left-1/2 -translate-x-1/2 mt-1.5 bg-slate-800 dark:bg-slate-100 text-white dark:text-slate-800 rounded-xl px-3 py-2 shadow-xl text-center text-[11px] font-bold min-w-[100px]"
          >
            <div className="text-emerald-300 dark:text-emerald-600 text-[9px] font-black tracking-wider whitespace-nowrap">
              {h.sira}. Harf
            </div>
            <div className="text-xs font-black mt-0.5">
              {h.isim}
            </div>
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 dark:bg-slate-100 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const HarflerTablosu: React.FC<{ page: ElifbaPage }> = ({ page }) => {
  const [hideNames, setHideNames] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [shuffledList, setShuffledList] = useState<any[]>([]);

  // Initialize and track normal/shuffled lists
  const originalLetters = useMemo(() => page.harfler || [], [page.harfler]);

  const handleShuffle = () => {
    // Shuffling letters dynamically (supports clicking multiple times for different combinations)
    const shuffled = [...originalLetters].sort(() => 0.5 - Math.random());
    setShuffledList(shuffled);
    setIsShuffled(true);
    playSound('tick');
  };

  const handleResetOrder = () => {
    setIsShuffled(false);
    playSound('tick');
  };

  const lettersToRender = isShuffled ? shuffledList : originalLetters;

  return (
    <div>
      {/* Playful giant circular control buttons - placed directly without an enclosing card wrapper */}
      <div className="flex items-center justify-center gap-4 mb-6">
        {/* Türkçe İsimleri Göster/Gizle Toggle */}
        <button
          onClick={() => { setHideNames(!hideNames); playSound('tick'); }}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md border-3 transition-all hover:scale-110 active:scale-95 cursor-pointer bg-white dark:bg-slate-800 ${
            !hideNames
              ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 ring-4 ring-emerald-100 dark:ring-emerald-900/20'
              : 'border-slate-200 dark:border-slate-650 text-slate-400 dark:text-slate-500 hover:border-slate-350'
          }`}
          title={hideNames ? "Türkçe İsimleri Göster" : "Türkçe İsimleri Gizle"}
        >
          {hideNames ? <Eye className="w-6 h-6" /> : <EyeOff className="w-6 h-6" />}
        </button>

        {/* Harfleri Karıştır */}
        <button
          onClick={handleShuffle}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md border-3 transition-all hover:scale-110 active:scale-95 cursor-pointer bg-white dark:bg-slate-800 ${
            isShuffled
              ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400 ring-4 ring-indigo-100 dark:ring-indigo-900/20'
              : 'border-slate-200 dark:border-slate-600 text-slate-400 dark:text-slate-500 hover:border-slate-350'
          }`}
          title="Harfleri Karıştır"
        >
          <Shuffle className="w-6 h-6" />
        </button>

        {/* Sıraya Göre Diz / Özüne Dön */}
        <button
          onClick={handleResetOrder}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md border-3 transition-all hover:scale-110 active:scale-95 cursor-pointer bg-white dark:bg-slate-800 ${
            !isShuffled
              ? 'border-amber-500 text-amber-600 dark:text-amber-400 ring-4 ring-amber-100 dark:ring-amber-900/20'
              : 'border-slate-200 dark:border-slate-600 text-slate-400 dark:text-slate-500 hover:border-slate-350'
          }`}
          title="Alfabetik Sırala / Özüne Dön"
        >
          <SortAsc className="w-6 h-6" />
        </button>
      </div>

      {page.aciklama && (
        <div className="bg-emerald-50/60 dark:bg-emerald-900/20 border-2 border-emerald-100 dark:border-emerald-800/40 rounded-2xl p-4 mb-6 text-sm text-slate-700 dark:text-slate-300 font-medium">
          ℹ️ {page.aciklama}
        </div>
      )}

      <div className="grid grid-cols-4 sm:grid-cols-7 gap-3" dir="rtl">
        {lettersToRender.map((h) => {
          return (
            <HarfKutusu key={h.sira} h={h} hideName={hideNames} />
          );
        })}
      </div>
    </div>
  );
};

// ─── SAYFA RENDER MOTORU ──────────────────────────────────────────

const PageRenderer: React.FC<{ page: ElifbaPage }> = ({ page }) => {
  switch (page.tip) {
    // ══════ HARFLER TABLOSU (Sayfa 8) ══════
    case 'harfler_tablosu':
      return <HarflerTablosu page={page} />;

    // ══════ KELİME İÇİ YAZILIŞLARI (Sayfa 9-11) ══════
    case 'kelime_ici_yazilis':
      return (
        <div>
          {page.aciklama && (
            <div className="bg-blue-50/60 dark:bg-blue-900/20 border-2 border-blue-100 dark:border-blue-800/40 rounded-2xl p-4 mb-6 text-sm text-slate-700 dark:text-slate-300 font-medium">
              ✍️ {page.aciklama}
            </div>
          )}
          <div className="overflow-x-auto">
            <table className="w-full text-center border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-700">
                  <th className="py-3 px-2 text-xs font-black text-slate-500 dark:text-slate-300 uppercase tracking-wider border-b-2 border-slate-200 dark:border-slate-600">Harf</th>
                  <th className="py-3 px-2 text-xs font-black text-slate-500 dark:text-slate-300 uppercase tracking-wider border-b-2 border-slate-200 dark:border-slate-600">İsim</th>
                  <th className="py-3 px-2 text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider border-b-2 border-slate-200 dark:border-slate-600">Başta</th>
                  <th className="py-3 px-2 text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-wider border-b-2 border-slate-200 dark:border-slate-600">Ortada</th>
                  <th className="py-3 px-2 text-xs font-black text-purple-600 dark:text-purple-400 uppercase tracking-wider border-b-2 border-slate-200 dark:border-slate-600">Sonda</th>
                </tr>
              </thead>
              <tbody>
                {page.harfFormlari?.map((hf, idx) => (
                  <tr key={hf.harf} className={`${idx % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50/70 dark:bg-slate-800/70'} hover:bg-emerald-50/40 dark:hover:bg-emerald-900/20 transition-colors`}>
                    <td className="py-3 px-2 text-3xl font-bold text-slate-800 dark:text-slate-100 border-b border-slate-100 dark:border-slate-700">{hf.harf}</td>
                    <td className="py-3 px-2 text-xs font-bold text-slate-600 dark:text-slate-300 border-b border-slate-100 dark:border-slate-700">{hf.isim}</td>
                    <td className="py-3 px-2 text-2xl font-bold text-emerald-700 dark:text-emerald-400 border-b border-slate-100 dark:border-slate-700">{hf.basta}</td>
                    <td className="py-3 px-2 text-2xl font-bold text-blue-700 dark:text-blue-400 border-b border-slate-100 dark:border-slate-700">{hf.ortada}</td>
                    <td className="py-3 px-2 text-2xl font-bold text-purple-700 dark:text-purple-400 border-b border-slate-100 dark:border-slate-700">{hf.sonda}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    // ══════ HAREKELER / CEZM / ŞEDDE / MED / TENVİN ══════
    case 'harekeler':
    case 'cezm':
    case 'sedde':
    case 'med_harfleri':
    case 'tenvin': {
      const grouped = page.harekeliBilesikler ? groupByHareke(page.harekeliBilesikler) : {};
      return (
        <div>
          {page.aciklama && (
            <div className="bg-amber-50/60 dark:bg-amber-900/20 border-2 border-amber-100 dark:border-amber-800/40 rounded-2xl p-4 mb-6 text-sm text-slate-700 dark:text-slate-300 font-medium">
              📝 {page.aciklama}
            </div>
          )}

          {/* Hareke grupları */}
          {Object.entries(grouped).map(([harekeKey, items]) => {
            const label = HAREKE_LABELS[harekeKey];
            return (
              <div key={harekeKey} className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: label?.renk || '#64748b' }} />
                  <h4 className="font-display font-black text-sm text-slate-700 dark:text-slate-200 uppercase tracking-wide">
                    {label?.isim || harekeKey}
                  </h4>
                </div>
                {label?.aciklama && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-3 ml-5">{label.aciklama}</p>
                )}
                <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 gap-2">
                  {items.map((b, i) => (
                    <HarekeCard key={`${harekeKey}-${i}`} bilesik={b} />
                  ))}
                </div>
              </div>
            );
          })}

          {/* Alıştırma Kelimeleri */}
          {page.alistirmaKelimeleri && page.alistirmaKelimeleri.length > 0 && (
            <div className="mt-8 pt-6 border-t-2 border-slate-100 dark:border-slate-700">
              <h4 className="font-display font-black text-sm text-slate-700 dark:text-slate-200 uppercase tracking-wide mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                ALIŞTIRMA KELİMELERİ
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {page.alistirmaKelimeleri.map((k, i) => (
                  <ClickableWord key={i} kelime={k} size="md" />
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }

    // ══════ ALIŞTIRMA SAYFALARI (Sayfa 22-25) ══════
    case 'alistirma':
      return (
        <div>
          {page.aciklama && (
            <div className="bg-teal-50/60 dark:bg-teal-900/20 border-2 border-teal-100 dark:border-teal-800/40 rounded-2xl p-4 mb-6 text-sm text-slate-700 dark:text-slate-300 font-medium">
              📖 {page.aciklama}
            </div>
          )}
          {page.alistirmaKelimeleri && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {page.alistirmaKelimeleri.map((k, i) => (
                <ClickableWord key={i} kelime={k} size="lg" />
              ))}
            </div>
          )}
        </div>
      );

    // ══════ NAMAZ DUALARI (Sayfa 26-28) ══════
    case 'namaz_dualari':
      return (
        <div>
          {page.aciklama && (
            <div className="bg-indigo-50/60 dark:bg-indigo-900/20 border-2 border-indigo-100 dark:border-indigo-800/40 rounded-2xl p-4 mb-6 text-sm text-slate-700 dark:text-slate-300 font-medium">
              🕌 {page.aciklama}
            </div>
          )}
          {page.dualar?.map((dua, i) => (
            <DuaCard key={i} dua={dua} />
          ))}
        </div>
      );

    default:
      return <div className="text-center text-slate-400 py-12">Bu sayfa henüz yapım aşamasındadır.</div>;
  }
};

// ─── ANA BİLEŞEN ─────────────────────────────────────────────────

export const KuranElifba: React.FC<KuranElifbaProps> = ({ 
  initialTab = 'elifba', 
  isDarkMode = false,
  toggleDarkMode,
  isFocused = false,
  setIsFocused 
}) => {
  const [activeTab, setActiveTab] = useState<'elifba' | 'kuran'>(initialTab);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  // Elifba sub-mode: ders / memory / quiz
  const [elifbaSubMode, setElifbaSubMode] = useState<'ders' | 'memory' | 'quiz'>('ders');

  // Ders Modu States
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const totalPages = getTotalPages();
  const currentPage = ELIF_BA_PAGES[currentPageIndex];

  const goNextPage = () => {
    if (currentPageIndex < totalPages - 1) {
      setCurrentPageIndex(prev => prev + 1);
      playSound('tick');
    }
  };

  const goPrevPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(prev => prev - 1);
      playSound('tick');
    }
  };

  // ─── HARF HAFIZA OYUNU (Kart Eşleştirme) States ───
  interface MemoryCard {
    id: number;
    content: string;
    type: 'letter' | 'name';
    pairId: string; // the letter char for matching
  }
  const [memoryCards, setMemoryCards] = useState<MemoryCard[]>([]);
  const [memoryFlipped, setMemoryFlipped] = useState<number[]>([]);
  const [memoryMatched, setMemoryMatched] = useState<string[]>([]);
  const [memoryMoves, setMemoryMoves] = useState(0);
  const [memoryLocked, setMemoryLocked] = useState(false);
  const [memoryComplete, setMemoryComplete] = useState(false);
  const MEMORY_PAIR_COUNT = 8; // 8 pairs = 16 cards

  const initMemoryGame = useCallback(() => {
    // Pick random letters
    const shuffledLetters = [...ELIFBA_LETTERS].sort(() => 0.5 - Math.random()).slice(0, MEMORY_PAIR_COUNT);
    const cards: MemoryCard[] = [];
    let id = 0;
    shuffledLetters.forEach(letter => {
      cards.push({ id: id++, content: letter.char, type: 'letter', pairId: letter.char });
      cards.push({ id: id++, content: letter.name, type: 'name', pairId: letter.char });
    });
    // Shuffle cards
    const shuffled = cards.sort(() => 0.5 - Math.random());
    setMemoryCards(shuffled);
    setMemoryFlipped([]);
    setMemoryMatched([]);
    setMemoryMoves(0);
    setMemoryLocked(false);
    setMemoryComplete(false);
  }, []);

  const handleMemoryCardClick = useCallback((cardId: number) => {
    if (memoryLocked) return;
    const card = memoryCards.find(c => c.id === cardId);
    if (!card) return;
    if (memoryFlipped.includes(cardId)) return;
    if (memoryMatched.includes(card.pairId)) return;

    const newFlipped = [...memoryFlipped, cardId];
    setMemoryFlipped(newFlipped);
    playSound('tick');

    if (newFlipped.length === 2) {
      setMemoryMoves(prev => prev + 1);
      setMemoryLocked(true);
      const [firstId, secondId] = newFlipped;
      const first = memoryCards.find(c => c.id === firstId)!;
      const second = memoryCards.find(c => c.id === secondId)!;

      if (first.pairId === second.pairId && first.type !== second.type) {
        // Match!
        playSound('success');
        const newMatched = [...memoryMatched, first.pairId];
        setMemoryMatched(newMatched);
        setMemoryFlipped([]);
        setMemoryLocked(false);
        if (newMatched.length === MEMORY_PAIR_COUNT) {
          setMemoryComplete(true);
        }
      } else {
        // No match
        playSound('fail');
        setTimeout(() => {
          setMemoryFlipped([]);
          setMemoryLocked(false);
        }, 800);
      }
    }
  }, [memoryCards, memoryFlipped, memoryMatched, memoryLocked]);

  // ─── PROFESYONEL BULMACA OYUNU States ───
  const QUIZ_TOTAL_ROUNDS = 10;
  const [quizLetter, setQuizLetter] = useState<ElifbaLetter | null>(null);
  const [quizOptions, setQuizOptions] = useState<ElifbaLetter[]>([]);
  const [quizFeedback, setQuizFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizRound, setQuizRound] = useState(1);
  const [quizCorrect, setQuizCorrect] = useState(0);
  const [quizWrong, setQuizWrong] = useState(0);
  const [quizStreak, setQuizStreak] = useState(0);
  const [quizBestStreak, setQuizBestStreak] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [quizSelectedChar, setQuizSelectedChar] = useState<string | null>(null);
  const [quizMode, setQuizMode] = useState<'isim-bul' | 'harf-bul'>('isim-bul');
  const [quizStarted, setQuizStarted] = useState(false);

  // Quran API States
  const [surahsList, setSurahsList] = useState<Surah[]>(FALLBACK_POPULAR_SURAHS);
  const [loadingSurahs, setLoadingSurahs] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSurah, setSelectedSurah] = useState<Surah | null>(FALLBACK_POPULAR_SURAHS[0]);
  const [loadingSurahDetail, setLoadingSurahDetail] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioInstance, setAudioInstance] = useState<HTMLAudioElement | null>(null);
  const [isOffline, setIsOffline] = useState(false);
  const [offlineAlert, setOfflineAlert] = useState<string | null>(null);
  const [isFullscreenQuran, setIsFullscreenQuran] = useState(false);

  // Lottie Animation Data States
  const [quranAnimData, setQuranAnimData] = useState<any>(null);
  const [basmalaAnimData, setBasmalaAnimData] = useState<any>(null);

  // Fullscreen Besmele Intro state
  const [showFullscreenBasmalaIntro, setShowFullscreenBasmalaIntro] = useState(false);

  // Mushaf Page-by-Page States
  const [quranViewMode, setQuranViewMode] = useState<'mushaf' | 'meal'>('mushaf');
  const [mushafListMode, setMushafListMode] = useState<'surah' | 'juz'>('juz');
  const [mushafPage, setMushafPage] = useState<number>(1);
  const [rightPageAyahs, setRightPageAyahs] = useState<Ayah[]>([]);
  const [leftPageAyahs, setLeftPageAyahs] = useState<Ayah[]>([]);
  const [loadingMushafDetail, setLoadingMushafDetail] = useState(false);
  const [openJuzIndex, setOpenJuzIndex] = useState<number | null>(null); // Juz Accordion state

  const getJuzStartPage = useCallback((juzNum: number) => {
    return (juzNum - 1) * 20 + 1;
  }, []);

  // Parse search query for quick navigation: Page, Surah, or Juz
  const parsedSearch = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return null;

    // Check if only digits
    const isNum = /^\d+$/.test(q);
    if (isNum) {
      const num = parseInt(q, 10);
      const results: { type: 'page' | 'juz'; value: number }[] = [];
      if (num >= 1 && num <= 604) {
        results.push({ type: 'page', value: num });
      }
      if (num >= 1 && num <= 30) {
        results.push({ type: 'juz', value: num });
      }
      if (results.length > 0) {
        return { type: 'multiple', results };
      }
    }

    // Check "sayfa 250"
    const sayfaMatch = q.match(/sayfa\s*(\d+)/);
    if (sayfaMatch) {
      const num = parseInt(sayfaMatch[1], 10);
      if (num >= 1 && num <= 604) {
        return { type: 'page', value: num };
      }
    }

    // Check "cüz 15" or "15. cüz"
    const cuzMatch = q.match(/c(?:ü|u)z\s*(\d+)/) || q.match(/(\d+)\s*\.?\s*c(?:ü|u)z/);
    if (cuzMatch) {
      const num = parseInt(cuzMatch[1], 10);
      if (num >= 1 && num <= 30) {
        return { type: 'juz', value: num };
      }
    }

    return null;
  }, [searchQuery]);

  const rightPageNum = mushafPage % 2 === 1 ? mushafPage : mushafPage - 1;
  const leftPageNum = rightPageNum + 1;

  const mushafAyahs = useMemo(() => {
    return mushafPage % 2 === 1 ? rightPageAyahs : leftPageAyahs;
  }, [mushafPage, rightPageAyahs, leftPageAyahs]);

  const basmalaSafetyTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (basmalaSafetyTimerRef.current) clearTimeout(basmalaSafetyTimerRef.current);
    };
  }, []);

  // Sync isFullscreenQuran state with the parent isFocused state
  useEffect(() => {
    if (setIsFocused) {
      setIsFocused(isFullscreenQuran);
    }
  }, [isFullscreenQuran, setIsFocused]);

  const [isElifbaDropdownOpen, setIsElifbaDropdownOpen] = useState(false);
  const elifbaDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (elifbaDropdownRef.current && !elifbaDropdownRef.current.contains(event.target as Node)) {
        setIsElifbaDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Swipe / Drag Gestures for Page Navigation (RTL: Drag Left -> Next Page, Drag Right -> Prev Page)
  const swipeStartX = useRef<number | null>(null);
  const swipeEndX = useRef<number | null>(null);
  const isSwipeDragging = useRef<boolean>(false);

  const handleSwipeStart = (clientX: number) => {
    swipeStartX.current = clientX;
    isSwipeDragging.current = true;
  };

  const handleSwipeMove = (clientX: number) => {
    if (!isSwipeDragging.current) return;
    swipeEndX.current = clientX;
  };

  const handleSwipeEnd = (type: 'elifba' | 'kuran') => {
    if (!isSwipeDragging.current || swipeStartX.current === null || swipeEndX.current === null) {
      isSwipeDragging.current = false;
      return;
    }
    const diffX = swipeStartX.current - swipeEndX.current;
    const threshold = 65; // minimum drag distance
    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        // Dragged LEFT -> Go to PREVIOUS page (RTL: page decreases)
        if (type === 'elifba') {
          if (currentPageIndex > 0) {
            setCurrentPageIndex(prev => prev - 1);
            playSound('tick');
          }
        } else {
          if (isMobile) {
            if (mushafPage > 1) handleSelectMushafPage(mushafPage - 1);
          } else {
            if (rightPageNum > 1) handleSelectMushafPage(rightPageNum - 2);
          }
          playSound('tick');
        }
      } else {
        // Dragged RIGHT -> Go to NEXT page (RTL: page increases)
        if (type === 'elifba') {
          if (currentPageIndex < totalPages - 1) {
            setCurrentPageIndex(prev => prev + 1);
            playSound('tick');
          }
        } else {
          if (isMobile) {
            if (mushafPage < 604) handleSelectMushafPage(mushafPage + 1);
          } else {
            if (leftPageNum < 604) handleSelectMushafPage(rightPageNum + 2);
          }
          playSound('tick');
        }
      }
    }
    swipeStartX.current = null;
    swipeEndX.current = null;
    isSwipeDragging.current = false;
  };

  // Fetch Lottie JSONs
  useEffect(() => {
    fetch('assets/lottie-quran.json')
      .then(r => r.json())
      .then(data => setQuranAnimData(data))
      .catch(err => console.warn("Lottie Quran load failed:", err));

    fetch('assets/lottie-basmala.json')
      .then(r => r.json())
      .then(data => setBasmalaAnimData(data))
      .catch(err => console.warn("Lottie Basmala load failed:", err));
  }, []);

  const getJuzPageRange = (juzNum: number) => {
    const start = (juzNum - 1) * 20 + 1;
    const end = juzNum === 30 ? 604 : juzNum * 20;
    return { start, end };
  };

  // Fetch Mushaf page details (Arabic + Turkish) for both pages in the spread
  const handleSelectMushafPage = async (pageNumber: number) => {
    const rightPageNum = pageNumber % 2 === 1 ? pageNumber : pageNumber - 1;
    const leftPageNum = rightPageNum + 1;

    setMushafPage(pageNumber);
    setLoadingMushafDetail(true);
    
    // Clear audio if playing
    if (audioInstance) {
      audioInstance.pause();
      setIsPlayingAudio(false);
      setAudioInstance(null);
    }

    try {
      const fetchPageData = async (pageNum: number): Promise<Ayah[]> => {
        if (pageNum > 604) return [];
        const [arResponse, trResponse] = await Promise.all([
          fetch(`https://api.alquran.cloud/v1/page/${pageNum}/quran-uthmani`),
          fetch(`https://api.alquran.cloud/v1/page/${pageNum}/tr.diyanet`)
        ]);
        const arJson = await arResponse.json();
        const trJson = await trResponse.json();

        if (arJson.code === 200 && trJson.code === 200) {
          return arJson.data.ayahs.map((ayah: any, index: number) => {
            const cleanText = ayah.numberInSurah === 1 
              ? cleanBismillah(ayah.text, ayah.surah.number)
              : ayah.text;

            return {
              number: ayah.numberInSurah,
              text: cleanText,
              translation: trJson.data.ayahs[index]?.text || '',
              surahNumber: ayah.surah.number,
              surahName: getTurkceSureIsmi(ayah.surah.number),
              arabicName: ayah.surah.name
            };
          });
        }
        throw new Error(`Invalid response for page ${pageNum}`);
      };

      const [rightData, leftData] = await Promise.all([
        fetchPageData(rightPageNum),
        leftPageNum <= 604 ? fetchPageData(leftPageNum) : Promise.resolve([])
      ]);

      setRightPageAyahs(rightData);
      setLeftPageAyahs(leftData);
      setIsOffline(false);
    } catch (err) {
      console.error("Failed to load details for Mushaf Pages: ", rightPageNum, leftPageNum, err);
      setIsOffline(true);
      setOfflineAlert(`Sayfa ${rightPageNum} ve ${leftPageNum} verileri internet bağlantısı olmadığı için yüklenemedi.`);
    } finally {
      setLoadingMushafDetail(false);
    }
  };

  useEffect(() => {
    if (quranViewMode === 'mushaf' && rightPageAyahs.length === 0) {
      handleSelectMushafPage(1);
    }
  }, [quranViewMode, rightPageAyahs.length]);

  // Start new quiz round
  const startNewQuiz = (mode?: 'isim-bul' | 'harf-bul') => {
    const currentMode = mode || quizMode;
    const randomTarget = ELIFBA_LETTERS[Math.floor(Math.random() * ELIFBA_LETTERS.length)];
    setQuizLetter(randomTarget);
    setQuizFeedback(null);
    setQuizSelectedChar(null);
    
    if (currentMode === 'isim-bul') {
      // Show letter → find name
      const others = ELIFBA_LETTERS.filter(l => l.char !== randomTarget.char);
      const shuffled = [...others].sort(() => 0.5 - Math.random()).slice(0, 3);
      const options = [randomTarget, ...shuffled].sort(() => 0.5 - Math.random());
      setQuizOptions(options);
    } else {
      // Show name → find letter
      const others = ELIFBA_LETTERS.filter(l => l.char !== randomTarget.char);
      const shuffled = [...others].sort(() => 0.5 - Math.random()).slice(0, 3);
      const options = [randomTarget, ...shuffled].sort(() => 0.5 - Math.random());
      setQuizOptions(options);
    }
  };

  const resetQuiz = (mode?: 'isim-bul' | 'harf-bul', autoStart?: boolean) => {
    const newMode = mode || quizMode;
    setQuizScore(0);
    setQuizRound(1);
    setQuizCorrect(0);
    setQuizWrong(0);
    setQuizStreak(0);
    setQuizBestStreak(0);
    setQuizFinished(false);
    setQuizMode(newMode);
    if (autoStart) {
      setQuizStarted(true);
      startNewQuiz(newMode);
    } else {
      setQuizStarted(false);
      setQuizLetter(null);
    }
  };

  const startQuizWithMode = (mode: 'isim-bul' | 'harf-bul') => {
    setQuizMode(mode);
    setQuizScore(0);
    setQuizRound(1);
    setQuizCorrect(0);
    setQuizWrong(0);
    setQuizStreak(0);
    setQuizBestStreak(0);
    setQuizFinished(false);
    setQuizStarted(true);
    startNewQuiz(mode);
  };

  const handleQuizAnswer = (selected: ElifbaLetter) => {
    if (quizFeedback) return; // prevent double-click
    setQuizSelectedChar(selected.char);
    
    if (quizLetter && selected.char === quizLetter.char) {
      const streakBonus = quizStreak >= 3 ? 5 : 0;
      setQuizFeedback('correct');
      setQuizScore(prev => prev + 10 + streakBonus);
      setQuizCorrect(prev => prev + 1);
      setQuizStreak(prev => {
        const newStreak = prev + 1;
        setQuizBestStreak(best => Math.max(best, newStreak));
        return newStreak;
      });
      playSound('success');
      setTimeout(() => {
        if (quizRound >= QUIZ_TOTAL_ROUNDS) {
          setQuizFinished(true);
        } else {
          setQuizRound(prev => prev + 1);
          startNewQuiz();
        }
      }, 1200);
    } else {
      setQuizFeedback('wrong');
      setQuizWrong(prev => prev + 1);
      setQuizStreak(0);
      playSound('fail');
      setTimeout(() => {
        if (quizRound >= QUIZ_TOTAL_ROUNDS) {
          setQuizFinished(true);
        } else {
          setQuizRound(prev => prev + 1);
          startNewQuiz();
        }
      }, 1500);
    }
  };

  // On mount, pull entire 114 Surahs from API
  useEffect(() => {
    let isMounted = true;
    const fetchSurahs = async () => {
      setLoadingSurahs(true);
      try {
        const response = await fetch('https://api.alquran.cloud/v1/surah');
        const json = await response.json();
        if (isMounted && json.code === 200 && json.data) {
          const apiSurahs: Surah[] = json.data.map((s: any) => ({
            number: s.number,
            name: s.name,
            englishName: s.englishName,
            englishNameTranslation: s.englishNameTranslation,
            numberOfAyahs: s.numberOfAyahs,
            revelationType: s.revelationType
          }));
          setSurahsList(apiSurahs);
          setIsOffline(false);
        }
      } catch (err) {
        console.error("Quran API loading failed, using robust fallback list:", err);
        setIsOffline(true);
      } finally {
        if (isMounted) setLoadingSurahs(false);
      }
    };

    fetchSurahs();
    return () => { isMounted = false; };
  }, []);

  // Fetch individual Surah details with Turkish Diyanet translation
  const handleSelectSurah = async (surahMeta: Surah) => {
    if (audioInstance) {
      audioInstance.pause();
      setIsPlayingAudio(false);
      setAudioInstance(null);
    }

    const foundLocal = FALLBACK_POPULAR_SURAHS.find(s => s.number === surahMeta.number);
    if (foundLocal && foundLocal.verses) {
      setSelectedSurah(foundLocal);
      return;
    }

    setLoadingSurahDetail(true);
    try {
      const [arResponse, trResponse] = await Promise.all([
        fetch(`https://api.alquran.cloud/v1/surah/${surahMeta.number}`),
        fetch(`https://api.alquran.cloud/v1/surah/${surahMeta.number}/tr.diyanet`)
      ]);
      const arJson = await arResponse.json();
      const trJson = await trResponse.json();

      if (arJson.code === 200 && trJson.code === 200) {
        const versesList: Ayah[] = arJson.data.ayahs.map((ayah: any, index: number) => ({
          number: ayah.numberInSurah,
          text: index === 0 ? cleanBismillah(ayah.text, surahMeta.number) : ayah.text,
          translation: trJson.data.ayahs[index]?.text || ''
        }));

        setSelectedSurah({
          ...surahMeta,
          verses: versesList,
          audioUrl: `https://download.quranicaudio.com/quran/mishaari_raashid_al_afaasee/${surahMeta.number.toString().padStart(3, '0')}.mp3`
        });
        setIsOffline(false);
      }
    } catch (err) {
      console.error("Failed to load details for Surah: ", surahMeta.number, err);
      setIsOffline(true);
      setOfflineAlert(`"${getTurkceSureIsmi(surahMeta.number)}" suresinin detayları internet bağlantısı olmadığı için yüklenemedi. Lütfen internetinizi kontrol edin veya çevrimdışı desteklenen popüler sureleri (Fatiha, İhlas, Kevser, Felak, Nas) okuyun.`);
    } finally {
      setLoadingSurahDetail(false);
    }
  };

  // Audio Recitation controller
  const togglePlaySurah = () => {
    if (!selectedSurah) return;
    
    const audioUrl = `https://server8.mp3quran.net/afs/${selectedSurah.number.toString().padStart(3, '0')}.mp3`;

    if (isPlayingAudio && audioInstance) {
      audioInstance.pause();
      setIsPlayingAudio(false);
    } else {
      if (audioInstance) {
        audioInstance.play().catch(err => {
          console.warn("Audio playback was restricted or failed:", err);
          setIsPlayingAudio(false);
          setOfflineAlert("Ses dosyası oynatılamadı. İnternet bağlantısı kesilmiş veya ses sunucusuna erişilemiyor olabilir.");
        });
        setIsPlayingAudio(true);
      } else {
        const newAudio = new Audio(audioUrl);
        newAudio.play().catch(err => {
          console.warn("Audio playback configuration failed or was restricted:", err);
          setIsPlayingAudio(false);
          setOfflineAlert("Ses dosyası oynatılamadı. İnternet bağlantısı kesilmiş veya ses sunucusuna erişilemiyor olabilir.");
        });
        setIsPlayingAudio(true);
        newAudio.onended = () => setIsPlayingAudio(false);
        setAudioInstance(newAudio);
      }
    }
  };

  // Clean audio on unmount
  useEffect(() => {
    return () => {
      if (audioInstance) {
        audioInstance.pause();
      }
    };
  }, [audioInstance]);

  // Filter surahs list (Turkish names + number)
  const filteredSurahs = surahsList.filter(s => {
    const q = searchQuery.toLowerCase();
    const turkceName = getTurkceSureIsmi(s.number).toLowerCase();
    return turkceName.includes(q) || 
      s.englishName.toLowerCase().includes(q) || 
      s.number.toString() === searchQuery.trim();
  });

  // Helper to render a single mushaf page with elegant borders
  const renderSingleMushafPage = (ayahsList: Ayah[], pageNum: number) => {
    if (pageNum > 604) {
      return (
        <div className="flex-1 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 text-xs py-12 select-none">
          Mushaf Sonu
        </div>
      );
    }
    if (loadingMushafDetail || ayahsList.length === 0) {
      return (
        <div className="flex-1 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 text-xs py-12 select-none">
          <RefreshCw className="w-8 h-8 animate-spin text-emerald-500 mb-2" />
          Sayfa {pageNum} yükleniyor...
        </div>
      );
    }

    // Group ayahs by surah on this page
    const surahSegments: { surahNumber: number; surahName: string; arabicName: string; verses: Ayah[] }[] = [];
    ayahsList.forEach(verse => {
      const lastSeg = surahSegments[surahSegments.length - 1];
      const vSurahNum = verse.surahNumber || 1;
      if (lastSeg && lastSeg.surahNumber === vSurahNum) {
        lastSeg.verses.push(verse);
      } else {
        surahSegments.push({
          surahNumber: vSurahNum,
          surahName: verse.surahName || '',
          arabicName: verse.arabicName || '',
          verses: [verse]
        });
      }
    });

    return (
      <div className="flex-1 flex flex-col h-full justify-between relative p-4 select-text" dir="ltr">
        {/* Elegant Gold/Emerald border frame around the page text block */}
        <div className="absolute inset-2 border-2 border-amber-700/10 dark:border-emerald-700/20 rounded-[1.5rem] pointer-events-none z-0" />
        <div className="absolute inset-3 border border-amber-700/5 dark:border-emerald-700/10 rounded-[1.3rem] pointer-events-none z-0" />
        
        {/* Page content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 relative z-10 scrollbar-amber">
          {surahSegments.map((seg) => (
            <div key={seg.surahNumber} className="space-y-4">
              {/* Surah Header Banner (only show if it contains verse 1 on this page) */}
              {seg.verses.some(v => v.number === 1) && (
                <div className="text-center my-4 py-3 px-4 bg-amber-100/30 dark:bg-emerald-950/20 border border-amber-800/10 dark:border-emerald-800/20 rounded-2xl shadow-inner select-none">
                  <h3 className="text-lg font-bold font-serif text-amber-900 dark:text-emerald-300 tracking-wide">
                    سُورَةُ {seg.arabicName}
                  </h3>
                  <p className="text-[9px] text-amber-800/80 dark:text-slate-400 font-bold uppercase tracking-[0.2em] mt-0.5">
                    {seg.surahName} Sûresi
                  </p>
                </div>
              )}

              {/* Bismillah Banner at Surah Start (except Fatiha 1 and At-Tawbah 9) */}
              {seg.verses.some(v => v.number === 1) && seg.surahNumber !== 1 && seg.surahNumber !== 9 && (
                <div className="text-center py-2 text-xl font-serif text-emerald-850 dark:text-emerald-400 select-none">
                  بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّح۪يمِ
                </div>
              )}

              {/* Continuous Text Block for this Surah's verses on this page */}
              <div 
                className="text-right text-3xl sm:text-4xl leading-[2.3] sm:leading-[2.5] font-serif text-slate-900 dark:text-slate-100 font-bold tracking-wide select-text whitespace-normal"
                dir="rtl"
                style={{ fontFamily: "'Amiri', 'Traditional Arabic', 'Noto Naskh Arabic', serif", wordSpacing: '2px' }}
              >
                {seg.verses.map((verse) => (
                  <React.Fragment key={verse.number}>
                    <span>{verse.text}</span>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border-2 border-amber-600/30 dark:border-emerald-600/30 bg-amber-50/30 dark:bg-emerald-950/20 text-xs font-sans font-black mx-1.5 text-amber-950 dark:text-emerald-300 select-none relative -top-[3px]">
                      {verse.number}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Page Footer (number indicator) */}
        <div className="text-center pt-2.5 border-t border-amber-850/8 dark:border-slate-750 text-[10px] font-black text-amber-800/50 dark:text-slate-500 select-none relative z-10">
          SAYFA {pageNum}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-4" id="quran-elifba-bright-portal col">
      {isOffline && (
        <div className="bg-amber-50 dark:bg-amber-900/30 border-3 border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-200 text-xs font-black p-4 rounded-3xl mb-6 flex items-center justify-between shadow-sm animate-pulse">
          <span>⚠️ ÇEVRİMDIŞI MOD: İnternet bağlantısı algılanamadı. Sadece yerel yüklü sureler okunabilir, sesli refakat çalışmayabilir.</span>
        </div>
      )}
      {/* 1. Header Hero Panel */}
      <div className={`bg-gradient-to-r ${
        activeTab === 'elifba' 
          ? 'from-emerald-500 via-emerald-600 to-teal-650 border-emerald-700' 
          : 'from-teal-600 via-teal-700 to-sky-700 border-teal-800'
      } p-6 rounded-[2.5rem] shadow-md border-b-6 mb-8 flex items-center justify-between text-white relative overflow-hidden`}>
        <div className="absolute -top-12 -left-12 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="relative z-10 flex items-center gap-4">
          <div className="w-14 h-14 bg-white/20 backdrop-blur-md border-2 border-white rounded-3xl flex items-center justify-center text-white shadow-inner">
            {activeTab === 'elifba' ? (
              <BookOpenCheck className="w-7 h-7" />
            ) : (
              <BookOpen className="w-7 h-7" />
            )}
          </div>
          <div>
            <h2 className="font-display font-black text-2xl tracking-normal uppercase">
              {activeTab === 'elifba' ? 'ELİF-BA' : "KUR'AN-I KERİM"}
            </h2>
            <p className="text-sm font-medium text-white/90">
              {activeTab === 'elifba' 
                ? 'Diyanet müfredatı, harflerin doğru mahreçleri, okuma alıştırmaları ve eğlenceli harf bulmacası.' 
                : '114 sûrenin tamamını dinleme, arapça okuma ve türkçe diyanet meali takibi.'
              }
            </p>
          </div>
        </div>
      </div>

      {/* 2. Content Sections */}
      <AnimatePresence mode="wait">
        {activeTab === 'elifba' ? (
          <motion.div
            key="elifba-tab"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
          >
            {/* Elifba Sub-Mode Selector */}
            <div className="flex flex-row gap-1 bg-slate-100/80 dark:bg-slate-700/50 p-1.5 rounded-full border border-slate-200 dark:border-slate-600 w-full shadow-inner mb-6">
              {[
                { id: 'ders', label: 'DİYANET DERSLERİ', icon: GraduationCap, activeBg: 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md' },
                { id: 'memory', label: 'HAFIZA OYUNU', icon: Grid3X3, activeBg: 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-md', action: initMemoryGame },
                { id: 'quiz', label: 'HARF BULMACASI', icon: Target, activeBg: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md', action: resetQuiz }
              ].map((item) => {
                const isSelected = elifbaSubMode === item.id;
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setElifbaSubMode(item.id as any);
                      if (item.action) item.action();
                      playSound('tick');
                    }}
                    className={`py-2.5 px-4 rounded-full text-[10px] sm:text-xs font-black tracking-wide transition-all uppercase cursor-pointer flex-1 flex items-center justify-center gap-2 ${
                      isSelected
                        ? `${item.activeBg} transform scale-[1.01]`
                        : 'bg-transparent text-slate-600 dark:text-slate-350 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/60'
                    }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-white' : 'text-slate-450 dark:text-slate-400'}`} />
                    <span className="font-extrabold">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* ════════════════════════════════════════════════ */}
            {/* DERS MODU */}
            {/* ════════════════════════════════════════════════ */}
            {elifbaSubMode === 'ders' && (
              <motion.div
                key="ders-mode"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {/* Navigation Bar */}
                <div className="bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-600 rounded-[2rem] p-4 shadow-sm mb-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Page selector custom dropdown */}
                    <div className="flex items-center gap-3 relative" ref={elifbaDropdownRef}>
                      <Layers className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                      <button
                        onClick={() => { setIsElifbaDropdownOpen(!isElifbaDropdownOpen); playSound('tick'); }}
                        className="bg-slate-50 dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-500 text-slate-800 dark:text-slate-100 font-display font-bold text-xs py-2.5 px-4 rounded-xl focus:border-teal-500 focus:outline-none cursor-pointer min-w-[280px] flex items-center justify-between gap-2 shadow-sm"
                      >
                        <span>{currentPage.konuNo}. Konu — {currentPage.baslik}</span>
                        <span className={`transition-transform duration-200 text-[10px] ${isElifbaDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
                      </button>
                      
                      <AnimatePresence>
                        {isElifbaDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 right-0 mt-2 max-h-[300px] overflow-y-auto bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600 rounded-xl shadow-xl z-50 scrollbar-thin"
                          >
                            {ELIF_BA_PAGES.map((p, idx) => {
                              const isSelected = currentPageIndex === idx;
                              return (
                                <button
                                  key={p.id}
                                  onClick={() => {
                                    setCurrentPageIndex(idx);
                                    setIsElifbaDropdownOpen(false);
                                    playSound('tick');
                                  }}
                                  className={`w-full text-left px-4 py-3 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-700/50 border-b border-slate-100 dark:border-slate-700/40 flex items-center justify-between ${
                                    isSelected 
                                      ? 'bg-teal-50/50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400 font-bold' 
                                      : 'text-slate-700 dark:text-slate-200'
                                  }`}
                                >
                                  <span>{p.konuNo}. Konu (Sf. {p.sayfaNo}) — {p.baslik}</span>
                                  {isSelected && <span className="text-teal-600 dark:text-teal-400">✓</span>}
                                </button>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Navigation buttons (RTL order: Next on Left, Prev on Right) */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={goNextPage}
                        disabled={currentPageIndex === totalPages - 1}
                        className="px-4 py-2.5 rounded-xl border-2 border-slate-200 dark:border-slate-500 text-slate-700 dark:text-slate-200 font-black text-xs flex items-center gap-1.5 transition-all cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-650 disabled:opacity-30 disabled:cursor-not-allowed"
                        title="Sonraki Konu (Sola Doğru)"
                      >
                        <ChevronLeft className="w-4 h-4" /> SONRAKİ
                      </button>

                      <div className="bg-teal-50 dark:bg-teal-900/30 border-2 border-teal-200 dark:border-teal-700 text-teal-800 dark:text-teal-200 font-display font-black text-xs px-4 py-2.5 rounded-xl">
                        {currentPageIndex + 1} / {totalPages}
                      </div>

                      <button
                        onClick={goPrevPage}
                        disabled={currentPageIndex === 0}
                        className="px-4 py-2.5 rounded-xl border-2 border-slate-200 dark:border-slate-500 text-slate-700 dark:text-slate-200 font-black text-xs flex items-center gap-1.5 transition-all cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-650 disabled:opacity-30 disabled:cursor-not-allowed"
                        title="Önceki Konu (Sağa Doğru)"
                      >
                        ÖNCEKİ <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Page Content with Swipe / Drag Gestures */}
                <div 
                  onTouchStart={(e) => handleSwipeStart(e.touches[0].clientX)}
                  onTouchMove={(e) => handleSwipeMove(e.touches[0].clientX)}
                  onTouchEnd={() => handleSwipeEnd('elifba')}
                  onMouseDown={(e) => handleSwipeStart(e.clientX)}
                  onMouseMove={(e) => handleSwipeMove(e.clientX)}
                  onMouseUp={() => handleSwipeEnd('elifba')}
                  onMouseLeave={() => handleSwipeEnd('elifba')}
                  className="bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-600 rounded-[2rem] p-6 shadow-sm cursor-grab active:cursor-grabbing select-none"
                >
                  {/* Page Header */}
                  <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-slate-100 dark:border-slate-700">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white font-display font-black text-lg shadow-md">
                      {currentPage.konuNo}
                    </div>
                    <div>
                      <h3 className="font-display font-black text-xl text-slate-800 dark:text-slate-100">{currentPage.baslik}</h3>
                      {currentPage.altBaslik && (
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold">{currentPage.altBaslik} • Sayfa {currentPage.sayfaNo}</p>
                      )}
                    </div>
                  </div>

                  {/* Dynamic Render */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentPage.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      <PageRenderer page={currentPage} />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Bottom Navigation (duplicate for convenience, RTL order) */}
                <div className="flex items-center justify-between mt-6">
                  <button
                    onClick={goNextPage}
                    disabled={currentPageIndex === totalPages - 1}
                    className="btn-game-primary text-xs disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1.5"
                  >
                    <ChevronLeft className="w-4 h-4" /> Sonraki Konu
                  </button>
                  <button
                    onClick={goPrevPage}
                    disabled={currentPageIndex === 0}
                    className="btn-game-secondary text-xs disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1.5"
                  >
                    Önceki Konu <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* ════════════════════════════════════════════════ */}
            {/* HARF HAFIZA OYUNU (Kart Eşleştirme) */}
            {/* ════════════════════════════════════════════════ */}
            {elifbaSubMode === 'memory' && (
              <motion.div
                key="memory-mode"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-600 rounded-[2rem] p-6 shadow-sm">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-5 pb-4 border-b-2 border-slate-100 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-xl shadow-md">🧠</div>
                      <div>
                        <h3 className="font-display font-black text-lg text-slate-800 dark:text-slate-100">Harf Hafıza Oyunu</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Kartları çevirerek harf-isim eşlerini bul!</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-indigo-50 dark:bg-indigo-900/20 border-2 border-indigo-200 dark:border-indigo-700 px-3 py-1.5 rounded-xl">
                        <span className="font-black text-xs text-indigo-700 dark:text-indigo-300">👆 {memoryMoves} Hamle</span>
                      </div>
                      <div className="bg-emerald-50 dark:bg-emerald-900/20 border-2 border-emerald-200 dark:border-emerald-700 px-3 py-1.5 rounded-xl">
                        <span className="font-black text-xs text-emerald-700 dark:text-emerald-300">✅ {memoryMatched.length}/{MEMORY_PAIR_COUNT}</span>
                      </div>
                      <button
                        onClick={initMemoryGame}
                        className="p-2.5 rounded-xl border-2 border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-500 transition-all cursor-pointer"
                        title="Yeni Oyun"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {memoryComplete ? (
                    /* Tamamlanma Ekranı */
                    <div className="text-center py-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        className="text-6xl mb-4"
                      >
                        🎉
                      </motion.div>
                      <h3 className="font-display font-black text-2xl text-slate-800 dark:text-slate-100 mb-2">Tebrikler!</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-2">
                        Tüm eşleri <strong className="text-indigo-600 dark:text-indigo-400">{memoryMoves} hamle</strong>de buldun!
                      </p>
                      <p className="text-xs text-slate-400 dark:text-slate-500 font-medium mb-6">
                        {memoryMoves <= MEMORY_PAIR_COUNT + 2 ? '⭐ Mükemmel hafıza!' : memoryMoves <= MEMORY_PAIR_COUNT * 2 ? '👏 Çok iyi!' : '💪 İyi, daha iyisini yapabilirsin!'}
                      </p>
                      <button onClick={initMemoryGame} className="btn-game-purple text-xs">
                        <RotateCcw className="w-4 h-4" /> YENİ OYUN
                      </button>
                    </div>
                  ) : (
                    /* Oyun Kartları */
                    <div className="grid grid-cols-4 gap-3">
                      {memoryCards.map((card) => {
                        const isFlipped = memoryFlipped.includes(card.id);
                        const isMatched = memoryMatched.includes(card.pairId);
                        const showFace = isFlipped || isMatched;

                        return (
                          <button
                            key={card.id}
                            onClick={() => handleMemoryCardClick(card.id)}
                            disabled={isMatched || memoryLocked}
                            className={`relative aspect-square rounded-2xl border-3 flex items-center justify-center transition-all cursor-pointer ${
                              isMatched
                                ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-300 dark:border-emerald-700 opacity-60'
                                : showFace
                                  ? card.type === 'letter'
                                    ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-400 dark:border-indigo-600 shadow-md -translate-y-1'
                                    : 'bg-amber-50 dark:bg-amber-900/20 border-amber-400 dark:border-amber-600 shadow-md -translate-y-1'
                                  : 'bg-slate-100 dark:bg-slate-700 border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600 hover:border-slate-300 dark:hover:border-slate-500 hover:-translate-y-0.5'
                            }`}
                          >
                            <AnimatePresence mode="wait">
                              {showFace ? (
                                <motion.div
                                  key="face"
                                  initial={{ rotateY: 90, opacity: 0 }}
                                  animate={{ rotateY: 0, opacity: 1 }}
                                  exit={{ rotateY: -90, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="flex flex-col items-center gap-1"
                                >
                                  <span className={`font-bold select-none ${
                                    card.type === 'letter'
                                      ? 'text-3xl text-indigo-700 dark:text-indigo-300'
                                      : 'text-sm text-amber-700 dark:text-amber-300'
                                  }`}>
                                    {card.content}
                                  </span>
                                  {isMatched && <CheckCircle className="w-4 h-4 text-emerald-500" />}
                                </motion.div>
                              ) : (
                                <motion.div
                                  key="back"
                                  initial={{ rotateY: -90, opacity: 0 }}
                                  animate={{ rotateY: 0, opacity: 1 }}
                                  exit={{ rotateY: 90, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <FlipHorizontal className="w-6 h-6 text-slate-400 dark:text-slate-500" />
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Alt bilgi */}
                  {!memoryComplete && (
                    <div className="mt-4 text-center text-xs font-medium text-slate-400 dark:text-slate-500">
                      💡 Bir Arapça harfi, onun Türkçe ismiyle eşleştir. Aynı anda 2 kart çevirebilirsin.
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* ════════════════════════════════════════════════ */}
            {/* PROFESYONEL HARF BULMACASI */}
            {/* ════════════════════════════════════════════════ */}
            {elifbaSubMode === 'quiz' && (
              <motion.div
                key="quiz-mode"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-600 rounded-[2rem] p-6 shadow-sm">
                  {!quizStarted && !quizFinished ? (
                    /* ── BAŞLANGIÇ EKRANI — Mod Seçici ── */
                    <div className="text-center py-10">
                      <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-[2rem] flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg">🧩</div>
                      <h3 className="font-display font-black text-2xl text-slate-800 dark:text-slate-100 mb-2">Harf Bulmacası</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-8 max-w-md mx-auto">
                        {QUIZ_TOTAL_ROUNDS} soruluk bir tur oynayarak Arapça harfleri ne kadar iyi tanıdığını test et!
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto mb-6">
                        <button
                          onClick={() => startQuizWithMode('isim-bul')}
                          className="bg-white dark:bg-slate-700 border-3 border-indigo-200 dark:border-indigo-700 hover:border-indigo-400 dark:hover:border-indigo-500 rounded-2xl p-6 transition-all cursor-pointer hover:-translate-y-1 hover:shadow-lg group"
                        >
                          <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-3 group-hover:scale-110 transition-transform">ب</div>
                          <h4 className="font-display font-black text-base text-slate-800 dark:text-slate-100 mb-1">📝 İsim Bul Modu</h4>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Harfi gör → İsmini seç</p>
                        </button>
                        <button
                          onClick={() => startQuizWithMode('harf-bul')}
                          className="bg-white dark:bg-slate-700 border-3 border-amber-200 dark:border-amber-700 hover:border-amber-400 dark:hover:border-amber-500 rounded-2xl p-6 transition-all cursor-pointer hover:-translate-y-1 hover:shadow-lg group"
                        >
                          <div className="w-14 h-14 bg-amber-50 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center text-lg font-black text-amber-700 dark:text-amber-300 mx-auto mb-3 group-hover:scale-110 transition-transform">Ba</div>
                          <h4 className="font-display font-black text-base text-slate-800 dark:text-slate-100 mb-1">🔤 Harf Bul Modu</h4>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">İsmi gör → Harfini seç</p>
                        </button>
                      </div>

                      <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">
                        🏆 3+ seri doğru = bonus puan!
                      </p>
                    </div>
                  ) :
                  quizFinished ? (
                    /* ── SONUÇ EKRANI ── */
                    <div className="text-center py-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        className="w-24 h-24 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center text-5xl mx-auto mb-6 shadow-xl"
                      >
                        🏆
                      </motion.div>
                      <h3 className="font-display font-black text-2xl text-slate-800 dark:text-slate-100 mb-2">Tebrikler!</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-8">Bulmaca turu tamamlandı!</p>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg mx-auto mb-8">
                        <div className="bg-emerald-50 dark:bg-emerald-900/20 border-2 border-emerald-200 dark:border-emerald-800 rounded-2xl p-4">
                          <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">{quizScore}</div>
                          <div className="text-[10px] font-black text-emerald-800 dark:text-emerald-300 uppercase tracking-widest mt-1">TOPLAM PUAN</div>
                        </div>
                        <div className="bg-sky-50 dark:bg-sky-900/20 border-2 border-sky-200 dark:border-sky-800 rounded-2xl p-4">
                          <div className="text-2xl font-black text-sky-600 dark:text-sky-400">{quizCorrect}/{QUIZ_TOTAL_ROUNDS}</div>
                          <div className="text-[10px] font-black text-sky-800 dark:text-sky-300 uppercase tracking-widest mt-1">DOĞRU</div>
                        </div>
                        <div className="bg-rose-50 dark:bg-rose-900/20 border-2 border-rose-200 dark:border-rose-800 rounded-2xl p-4">
                          <div className="text-2xl font-black text-rose-600 dark:text-rose-400">{quizWrong}</div>
                          <div className="text-[10px] font-black text-rose-800 dark:text-rose-300 uppercase tracking-widest mt-1">YANLIŞ</div>
                        </div>
                        <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-800 rounded-2xl p-4">
                          <div className="text-2xl font-black text-amber-600 dark:text-amber-400">🔥 {quizBestStreak}</div>
                          <div className="text-[10px] font-black text-amber-800 dark:text-amber-300 uppercase tracking-widest mt-1">EN İYİ SERİ</div>
                        </div>
                      </div>

                      {/* Grade */}
                      <div className="mb-6">
                        {quizCorrect >= 9 ? (
                          <span className="text-lg font-black text-emerald-600 dark:text-emerald-400">⭐ MÜKEMMEL! Elif-Ba Ustası! ⭐</span>
                        ) : quizCorrect >= 7 ? (
                          <span className="text-lg font-black text-sky-600 dark:text-sky-400">👏 Çok İyi! Harika gidiyorsun!</span>
                        ) : quizCorrect >= 5 ? (
                          <span className="text-lg font-black text-amber-600 dark:text-amber-400">💪 İyi! Biraz daha pratik yapmalısın.</span>
                        ) : (
                          <span className="text-lg font-black text-rose-600 dark:text-rose-400">📚 Tekrar çalışmalısın, pes etme!</span>
                        )}
                      </div>

                      <div className="flex items-center justify-center gap-3">
                        <button onClick={() => startQuizWithMode('isim-bul')} className="btn-game-primary text-xs">
                          <RotateCcw className="w-4 h-4" /> İsim Bul Modu
                        </button>
                        <button onClick={() => startQuizWithMode('harf-bul')} className="btn-game-secondary text-xs">
                          <RotateCcw className="w-4 h-4" /> Harf Bul Modu
                        </button>
                      </div>
                    </div>
                  ) : quizLetter ? (
                    /* ── OYUN EKRANI ── */
                    <div>
                      {/* Top Stats Bar */}
                      <div className="flex items-center justify-between mb-5 pb-4 border-b-2 border-slate-100 dark:border-slate-700">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1.5 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-700 px-3 py-1.5 rounded-xl">
                            <Trophy className="w-4 h-4 text-amber-500" />
                            <span className="font-black text-sm text-amber-700 dark:text-amber-300">{quizScore}</span>
                          </div>
                          {quizStreak >= 2 && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="flex items-center gap-1 bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-200 dark:border-orange-700 px-3 py-1.5 rounded-xl"
                            >
                              <Zap className="w-4 h-4 text-orange-500" />
                              <span className="font-black text-sm text-orange-700 dark:text-orange-300">{quizStreak}x Seri!</span>
                            </motion.div>
                          )}
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1.5">
                            <CheckCircle className="w-4 h-4 text-emerald-500" />
                            <span className="font-black text-xs text-emerald-700 dark:text-emerald-400">{quizCorrect}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <XCircle className="w-4 h-4 text-rose-500" />
                            <span className="font-black text-xs text-rose-700 dark:text-rose-400">{quizWrong}</span>
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                            {quizMode === 'isim-bul' ? '📝 HARFİN İSMİNİ BUL' : '🔤 İSMİN HARFİNİ BUL'}
                          </span>
                          <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase">
                            TUR {quizRound}/{QUIZ_TOTAL_ROUNDS}
                          </span>
                        </div>
                        <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${(quizRound / QUIZ_TOTAL_ROUNDS) * 100}%` }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                      </div>

                      {/* Question Card */}
                      <div className="text-center mb-8">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={quizLetter.char + quizRound}
                            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                            transition={{ duration: 0.3 }}
                            className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[2rem] text-white shadow-xl mb-4"
                          >
                            {quizMode === 'isim-bul' ? (
                              <span className="text-6xl font-bold select-none">{quizLetter.char}</span>
                            ) : (
                              <span className="text-2xl font-black select-none">{quizLetter.turkishName}</span>
                            )}
                          </motion.div>
                        </AnimatePresence>
                        <p className="text-sm font-bold text-slate-600 dark:text-slate-400">
                          {quizMode === 'isim-bul'
                            ? 'Bu harfin doğru ismi hangisidir?'
                            : 'Bu ismin doğru harfi hangisidir?'
                          }
                        </p>
                      </div>

                      {/* Options */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
                        {quizOptions.map((opt) => {
                          const isCorrectAnswer = quizLetter && opt.char === quizLetter.char;
                          const isThisSelected = quizSelectedChar === opt.char;
                          let optionStyle = 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-500 text-slate-800 dark:text-slate-100 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20';

                          if (quizFeedback && isCorrectAnswer) {
                            optionStyle = 'bg-emerald-50 dark:bg-emerald-900/30 border-emerald-500 text-emerald-800 dark:text-emerald-200 shadow-[0_0_12px_rgba(16,185,129,0.3)]';
                          } else if (quizFeedback === 'wrong' && isThisSelected) {
                            optionStyle = 'bg-rose-50 dark:bg-rose-900/30 border-rose-500 text-rose-800 dark:text-rose-200 shadow-[0_0_12px_rgba(244,63,94,0.3)]';
                          }

                          return (
                            <button
                              key={opt.char}
                              onClick={() => handleQuizAnswer(opt)}
                              disabled={quizFeedback !== null}
                              className={`border-3 font-display font-black p-5 rounded-2xl text-base transition-all cursor-pointer shadow-sm disabled:cursor-default ${optionStyle}`}
                            >
                              {quizMode === 'isim-bul' ? opt.turkishName : opt.char}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ) : null}
                </div>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="kuran-tab"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            {/* Sidebar (Col 4) */}
            <div className="lg:col-span-4 bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-600 rounded-[2rem] p-5 shadow-sm h-[650px] flex flex-col">
              
              {/* View Mode Toggle: Mushaf vs Meal */}
              <div className="flex gap-1.5 mb-4 bg-slate-50 dark:bg-slate-700/50 p-1.5 rounded-2xl border border-slate-100 dark:border-slate-600 select-none">
                <button
                  onClick={() => { setQuranViewMode('mushaf'); playSound('tick'); }}
                  className={`flex-1 py-2.5 rounded-xl text-[10px] font-black tracking-wide uppercase transition-all cursor-pointer ${
                    quranViewMode === 'mushaf'
                      ? 'bg-emerald-500 text-white shadow-sm'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  MUSHAF
                </button>
                <button
                  onClick={() => { setQuranViewMode('meal'); playSound('tick'); }}
                  className={`flex-1 py-2.5 rounded-xl text-[10px] font-black tracking-wide uppercase transition-all cursor-pointer ${
                    quranViewMode === 'meal'
                      ? 'bg-emerald-500 text-white shadow-sm'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  MEAL
                </button>
              </div>

              {quranViewMode === 'mushaf' ? (
                <>
                  <span className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-3 pl-1">📖 MUSHAF CÜZ VE SAYFALARI</span>
                  
                  {/* Search input for Mushaf */}
                  <div className="relative mb-3">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Sayfa (1-604), cüz (1-30) veya sure adı..."
                      className="w-full bg-slate-50 dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-500 focus:border-emerald-500 focus:bg-white focus:outline-none py-3 pl-10 pr-4 rounded-2xl text-slate-800 dark:text-slate-100 font-display text-xs font-bold"
                    />
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>

                  {/* Quick Search Results */}
                  {parsedSearch && (
                    <div className="mb-3 p-2 bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-500/20 rounded-2xl space-y-1.5 shrink-0">
                      <span className="text-[9px] font-extrabold text-emerald-850 dark:text-emerald-300 uppercase block pl-1">HIZLI YÖNLENDİRME:</span>
                      {parsedSearch.type === 'page' && (
                        <button
                          onClick={() => { handleSelectMushafPage(parsedSearch.value); playSound('tick'); }}
                          className="w-full text-left py-2 px-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-650 rounded-xl text-xs font-black text-slate-800 dark:text-slate-200 hover:border-emerald-500 transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
                        >
                          <span>📄</span> Sayfa {parsedSearch.value}'e Git
                        </button>
                      )}
                      {parsedSearch.type === 'juz' && (
                        <button
                          onClick={() => { handleSelectMushafPage(getJuzStartPage(parsedSearch.value)); setOpenJuzIndex(parsedSearch.value); playSound('tick'); }}
                          className="w-full text-left py-2 px-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-650 rounded-xl text-xs font-black text-slate-800 dark:text-slate-200 hover:border-emerald-500 transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
                        >
                          <span>📖</span> {parsedSearch.value}. Cüze Git (Sayfa {getJuzStartPage(parsedSearch.value)})
                        </button>
                      )}
                      {parsedSearch.type === 'multiple' && parsedSearch.results.map((res, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            if (res.type === 'page') {
                              handleSelectMushafPage(res.value);
                            } else {
                              handleSelectMushafPage(getJuzStartPage(res.value));
                              setOpenJuzIndex(res.value);
                            }
                            playSound('tick');
                          }}
                          className="w-full text-left py-2 px-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-650 rounded-xl text-xs font-black text-slate-800 dark:text-slate-200 hover:border-emerald-500 transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
                        >
                          {res.type === 'page' ? (
                            <><span>📄</span> Sayfa {res.value}'e Git</>
                          ) : (
                            <><span>📖</span> {res.value}. Cüze Git (Sayfa {getJuzStartPage(res.value)})</>
                          )}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Sub-mode inside Mushaf sidebar: Cüz vs Sure */}
                  <div className="flex gap-1.5 mb-3 bg-slate-50 dark:bg-slate-700/50 p-1.5 rounded-2xl border border-slate-100 dark:border-slate-600 select-none shrink-0">
                    <button
                      onClick={() => { setMushafListMode('juz'); playSound('tick'); }}
                      className={`flex-1 py-1.5 rounded-xl text-[9px] font-black tracking-wider uppercase transition-all cursor-pointer ${
                        mushafListMode === 'juz'
                          ? 'bg-slate-700 dark:bg-slate-600 text-white shadow-sm'
                          : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                      }`}
                    >
                      CÜZ LİSTESİ
                    </button>
                    <button
                      onClick={() => { setMushafListMode('surah'); playSound('tick'); }}
                      className={`flex-1 py-1.5 rounded-xl text-[9px] font-black tracking-wider uppercase transition-all cursor-pointer ${
                        mushafListMode === 'surah'
                          ? 'bg-slate-700 dark:bg-slate-600 text-white shadow-sm'
                          : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                      }`}
                    >
                      SÛRE LİSTESİ
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto pr-1 space-y-2 scrollbar-thin">
                    {mushafListMode === 'juz' ? (
                      // Juz mode Accordion list
                      (() => {
                        const filteredJuzList = Array.from({ length: 30 }, (_, i) => i + 1).filter(juzNum => {
                          const q = searchQuery.toLowerCase().trim();
                          if (!q) return true;
                          
                          const isNum = /^\d+$/.test(q);
                          if (isNum) {
                            const num = parseInt(q, 10);
                            if (num >= 1 && num <= 30) return juzNum === num;
                            if (num >= 1 && num <= 604) {
                              const pageJuz = Math.floor((num - 1) / 20) + 1;
                              return juzNum === pageJuz;
                            }
                          }
                          
                          const cuzMatch = q.match(/c(?:ü|u)z\s*(\d+)/) || q.match(/(\d+)\s*\.?\s*c(?:ü|u)z/);
                          if (cuzMatch) {
                            const num = parseInt(cuzMatch[1], 10);
                            return juzNum === num;
                          }
                          
                          return true;
                        });

                        return filteredJuzList.map((juzNum) => {
                          const isOpen = openJuzIndex === juzNum;
                          const { start, end } = getJuzPageRange(juzNum);
                          
                          return (
                            <div key={juzNum} className="border border-slate-100 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm">
                              <button
                                onClick={() => {
                                  setOpenJuzIndex(isOpen ? null : juzNum);
                                  playSound('tick');
                                }}
                                className={`w-full p-3 text-left font-display font-black text-xs flex items-center justify-between transition-colors ${
                                  isOpen 
                                    ? 'bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-300' 
                                    : 'bg-slate-50/50 dark:bg-slate-700 hover:bg-slate-100/60 dark:hover:bg-slate-650 text-slate-700 dark:text-slate-200'
                                }`}
                              >
                                <span>{juzNum}. CÜZ</span>
                                <span className="text-[10px] opacity-70 font-semibold">Sayfa {start}-{end}</span>
                              </button>
                              
                              {isOpen && (
                                <div className="p-3 bg-slate-50/50 dark:bg-slate-700/30 grid grid-cols-5 gap-1.5 border-t border-slate-100 dark:border-slate-700/80">
                                  {Array.from({ length: end - start + 1 }, (_, i) => start + i).map((pNum) => (
                                    <button
                                      key={pNum}
                                      onClick={() => { handleSelectMushafPage(pNum); playSound('tick'); }}
                                      className={`py-2 text-[10px] font-black rounded-lg border-2 cursor-pointer transition-all ${
                                        mushafPage === pNum
                                          ? 'bg-emerald-500 border-emerald-600 text-white shadow-sm'
                                          : 'bg-white dark:bg-slate-700 border-slate-100 dark:border-slate-650 text-slate-650 dark:text-slate-300 hover:border-slate-350 dark:hover:border-slate-500'
                                      }`}
                                    >
                                      {pNum}
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        });
                      })()
                    ) : (
                      // Surah mode in Mushaf sidebar
                      surahsList.filter(s => {
                        const q = searchQuery.toLowerCase().trim();
                        const turkceName = getTurkceSureIsmi(s.number).toLowerCase();
                        return turkceName.includes(q) || 
                          s.englishName.toLowerCase().includes(q) || 
                          s.number.toString() === q;
                      }).map((surah) => {
                        const startPage = SURAH_START_PAGES[surah.number] || 1;
                        const isCurrentlyOnThisSurahStartPage = mushafPage === startPage;
                        
                        return (
                          <button
                            key={surah.number}
                            onClick={() => {
                              handleSelectMushafPage(startPage);
                              setSelectedSurah(surah); // Also set active surah meta
                              playSound('tick');
                            }}
                            className={`w-full p-3.5 rounded-xl border-2 cursor-pointer flex items-center justify-between transition-all ${
                              isCurrentlyOnThisSurahStartPage
                                ? 'bg-emerald-50 dark:bg-emerald-900/30 border-emerald-500 text-emerald-900 dark:text-emerald-200 shadow-sm'
                                : 'bg-white dark:bg-slate-700 border-slate-100 dark:border-slate-600 hover:border-slate-350 dark:hover:border-slate-500 text-slate-700 dark:text-slate-200'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className={`w-7 h-7 rounded-lg text-[10px] font-black flex items-center justify-center ${isCurrentlyOnThisSurahStartPage ? 'bg-emerald-500 text-white' : 'bg-slate-100 dark:bg-slate-650 text-slate-500 dark:text-slate-300'}`}>
                                {surah.number}
                              </span>
                              <div className="text-left">
                                <h4 className="font-display font-black text-xs">{getTurkceSureIsmi(surah.number)} Sûresi</h4>
                                <span className="text-[9px] text-slate-400 dark:text-slate-500 tracking-wide font-medium">Sayfa {startPage} • {surah.numberOfAyahs} Ayet</span>
                              </div>
                            </div>
                            <span className="arabic-text text-lg text-slate-850 dark:text-slate-200 font-bold font-serif">{surah.name}</span>
                          </button>
                        );
                      })
                    )}
                  </div>
                </>
              ) : (
                // MEAL mode sidebar (standard Surah list selector)
                <>
                  <span className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-3 pl-1">📚 MEAL SÛRE SEÇİM KÜTÜPHANESİ</span>
                  
                  {/* Search input for Meal */}
                  <div className="relative mb-3">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Sûre adı veya numarası yazın..."
                      className="w-full bg-slate-50 dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-500 focus:border-emerald-500 focus:bg-white focus:outline-none py-3 pl-10 pr-4 rounded-2xl text-slate-800 dark:text-slate-100 font-display text-xs font-bold"
                    />
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>

                  {loadingSurahs ? (
                    <div className="flex-1 flex flex-col items-center justify-center text-slate-400 text-xs">
                      {quranAnimData ? (
                        <div className="w-24 h-24 mb-2">
                          <Lottie animationData={quranAnimData} loop={true} />
                        </div>
                      ) : (
                        <RefreshCw className="w-8 h-8 animate-spin text-emerald-500 mb-2" />
                      )}
                      Kuran Sûre Listesi API'den çekiliyor...
                    </div>
                  ) : (
                    <div className="flex-1 overflow-y-auto pr-1 space-y-2 scrollbar-thin">
                      {surahsList.filter(s => {
                        const q = searchQuery.toLowerCase().trim();
                        const turkceName = getTurkceSureIsmi(s.number).toLowerCase();
                        return turkceName.includes(q) || 
                          s.englishName.toLowerCase().includes(q) || 
                          s.number.toString() === q;
                      }).map((surah) => {
                        const isSelected = selectedSurah?.number === surah.number;
                        return (
                          <button
                            key={surah.number}
                            onClick={() => { handleSelectSurah(surah); playSound('tick'); }}
                            className={`w-full p-3.5 rounded-xl border-2 cursor-pointer flex items-center justify-between transition-all ${
                              isSelected
                                ? 'bg-emerald-50 dark:bg-emerald-900/30 border-emerald-500 text-emerald-900 dark:text-emerald-200 shadow-sm'
                                : 'bg-white dark:bg-slate-700 border-slate-100 dark:border-slate-600 hover:border-slate-350 dark:hover:border-slate-500 text-slate-700 dark:text-slate-200'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className={`w-7 h-7 rounded-lg text-xs font-black flex items-center justify-center ${isSelected ? 'bg-emerald-500 text-white' : 'bg-slate-100 dark:bg-slate-650 text-slate-500 dark:text-slate-300'}`}>
                                {surah.number}
                              </span>
                              <div className="text-left">
                                <h4 className="font-display font-black text-xs">{getTurkceSureIsmi(surah.number)} Sûresi</h4>
                                <span className="text-[10px] text-slate-400 dark:text-slate-500 tracking-wide font-medium">{surah.numberOfAyahs} Ayet</span>
                              </div>
                            </div>
                            <span className="arabic-text text-lg text-slate-850 dark:text-slate-200 font-bold font-serif">{surah.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Main Content Area (Col 8) */}
            <div className="lg:col-span-8 flex flex-col">
              {quranViewMode !== 'mushaf' ? (
                loadingSurahDetail ? (
                  <div className="bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-600 rounded-[2rem] p-12 text-center text-slate-400 dark:text-slate-500 shadow-sm flex flex-col items-center justify-center h-full">
                    <RefreshCw className="w-8 h-8 animate-spin text-emerald-500 mb-2" />
                    Sûre detayları yükleniyor...
                  </div>
                ) : selectedSurah ? (
                  <div className="bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-600 rounded-[2rem] p-6 shadow-sm flex flex-col h-[650px]">
                    
                    {/* Surah Header & Recital Controls */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-slate-100 dark:border-slate-700 pb-4 mb-4 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center text-xl shadow-inner">
                          {quranViewMode === 'surah' ? '🕌' : '📖'}
                        </div>
                        <div>
                          <h3 className="font-display font-black text-lg text-slate-800 dark:text-slate-100">{getTurkceSureIsmi(selectedSurah.number)} Sûresi {quranViewMode === 'meal' ? 'Meali' : ''}</h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">{selectedSurah.numberOfAyahs} Âyet • {selectedSurah.revelationType === 'Meccan' ? 'Mekkî' : 'Medenî'}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setIsFullscreenQuran(true);
                            playSound('tick');
                            if (selectedSurah?.number !== 9 && basmalaAnimData) {
                              setShowFullscreenBasmalaIntro(true);
                              if (basmalaSafetyTimerRef.current) clearTimeout(basmalaSafetyTimerRef.current);
                              basmalaSafetyTimerRef.current = setTimeout(() => {
                                setShowFullscreenBasmalaIntro(false);
                              }, 6500);
                            }
                          }}
                          className="btn-game-primary justify-center text-xs py-2.5 px-4 cursor-pointer flex items-center gap-2"
                          title="Tam Ekran Okutma Modu"
                        >
                          <Maximize2 className="w-4 h-4" /> TAM EKRAN
                        </button>
                      </div>
                    </div>

                    {/* Verses Container */}
                    <div className="flex-1 overflow-y-auto pr-1 space-y-4">
                      {quranViewMode === 'surah' ? (
                        /* Sûre Modu: Continuous Arabic text, RTL, with Bismillah banner at start */
                        <div className="p-4 sm:p-6 bg-slate-50/70 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-650 rounded-2xl">
                          {selectedSurah.number !== 1 && selectedSurah.number !== 9 && (
                            <div className="text-center py-4 mb-6 text-xl font-bold arabic-text text-emerald-700/80 dark:text-emerald-400/80 tracking-wide font-serif border-b border-dashed border-slate-150 dark:border-slate-600 select-none">
                              بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّح۪يمِ
                            </div>
                          )}
                          <div 
                            className="text-right text-3xl sm:text-4xl leading-[2.3] sm:leading-[2.5] font-serif text-slate-900 dark:text-slate-100 font-extrabold tracking-wide select-text whitespace-normal"
                            dir="rtl"
                            style={{ fontFamily: "'Amiri', 'Traditional Arabic', 'Noto Naskh Arabic', serif", wordSpacing: '2px' }}
                          >
                            {selectedSurah.verses?.map((verse) => (
                              <React.Fragment key={verse.number}>
                                <span>{verse.text}</span>
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border-2 border-amber-600/30 dark:border-emerald-600/30 bg-amber-50/30 dark:bg-emerald-950/20 text-xs font-sans font-black mx-1.5 text-amber-950 dark:text-emerald-300 select-none relative -top-[3px]">
                                  {verse.number}
                                </span>
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      ) : (
                        /* Meal Modu: Turkish translation only (no Arabic) */
                        <div className="space-y-3">
                          {selectedSurah.verses?.map((verse) => (
                            <div 
                              key={verse.number}
                              className="p-4 bg-slate-50/50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700 rounded-xl"
                            >
                              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 leading-relaxed select-text">
                                <span className="text-emerald-600 dark:text-emerald-500 font-black mr-2">{verse.number}. Âyet:</span>
                                {verse.translation}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-600 rounded-[2rem] p-12 text-center text-slate-400 dark:text-slate-500 shadow-sm flex flex-col items-center justify-center h-full">
                    {quranAnimData && (
                      <div className="w-48 h-48 mb-6">
                        <Lottie animationData={quranAnimData} loop={true} />
                      </div>
                    )}
                    <h3 className="font-display font-black text-slate-700 dark:text-slate-200 mb-1">Kur'an-ı Kerim Portali</h3>
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold">Lütfen sol listeden bir sûre seçerek okumaya başlayın!</p>
                  </div>
                )
              ) : (
                /* Mushaf View Mode - Dual-Page (Book spread) */
                loadingMushafDetail ? (
                  <div className="bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-600 rounded-[2rem] p-12 text-center text-slate-400 dark:text-slate-500 shadow-sm flex flex-col items-center justify-center h-[650px] select-none">
                    <RefreshCw className="w-8 h-8 animate-spin text-emerald-500 mb-2" />
                    Mushaf sayfaları yükleniyor...
                  </div>
                ) : rightPageAyahs.length > 0 ? (
                  <div className="bg-[#faf6ef] dark:bg-slate-900 border-3 border-slate-200 dark:border-slate-700 rounded-[2.5rem] p-4 shadow-sm flex flex-col h-[650px] relative overflow-hidden">
                    {/* Header Controls */}
                    <div className="flex items-center justify-between border-b-2 border-slate-200/60 dark:border-slate-700 pb-3 mb-3 relative z-10">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-amber-100/60 dark:bg-emerald-950/40 border border-amber-300 dark:border-emerald-800 text-amber-950 dark:text-emerald-350 font-black text-[10px] uppercase rounded-full">
                          MUSHAF MODU
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-bold">
                          {isMobile ? `Sayfa ${mushafPage}` : `${rightPageNum}. ve ${leftPageNum}. Sayfalar`}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {/* Left navigation arrow: Sonraki (moves left, page increases in RTL) */}
                        <button
                          onClick={() => {
                            if (isMobile) {
                              if (mushafPage < 604) handleSelectMushafPage(mushafPage + 1);
                            } else {
                              if (leftPageNum < 604) handleSelectMushafPage(rightPageNum + 2);
                            }
                            playSound('tick');
                          }}
                          disabled={isMobile ? mushafPage >= 604 : leftPageNum >= 604}
                          className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-650 rounded-xl text-slate-700 dark:text-slate-200 text-xs font-black flex items-center gap-1 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed border border-slate-250 dark:border-slate-600"
                          title="Sonraki Sayfa (Sola Doğru)"
                        >
                          <ChevronLeft className="w-4 h-4" /> SONRAKİ
                        </button>

                        <button
                          onClick={() => {
                            setIsFullscreenQuran(true);
                            playSound('tick');
                            // Fullscreen intro plays Besmele if it's not Surah 9 Tevbe starting page (starts on p. 187)
                            if (rightPageNum !== 9 && basmalaAnimData) {
                              setShowFullscreenBasmalaIntro(true);
                              if (basmalaSafetyTimerRef.current) clearTimeout(basmalaSafetyTimerRef.current);
                              basmalaSafetyTimerRef.current = setTimeout(() => {
                                setShowFullscreenBasmalaIntro(false);
                              }, 6500);
                            }
                          }}
                          className="btn-game-primary justify-center text-xs py-2 px-3 cursor-pointer flex items-center gap-1.5"
                        >
                          <Maximize2 className="w-4 h-4" /> TAM EKRAN
                        </button>

                        {/* Recital Controls: Dinle */}
                        <button
                          onClick={togglePlaySurah}
                          className={`btn-game-sky justify-center text-xs py-1.5 px-4 cursor-pointer flex items-center gap-1.5 ${isPlayingAudio ? 'bg-rose-500 border-rose-700' : 'bg-sky-500 border-sky-700'}`}
                        >
                          {isPlayingAudio ? (
                            <>
                              <Pause className="w-4 h-4 text-white" /> DURDUR
                            </>
                          ) : (
                            <>
                              <Play className="w-4 h-4 text-white" /> DİNLE
                            </>
                          )}
                        </button>

                        {/* Right navigation arrow: Önceki (moves right, page decreases in RTL) */}
                        <button
                          onClick={() => {
                            if (isMobile) {
                              if (mushafPage > 1) handleSelectMushafPage(mushafPage - 1);
                            } else {
                              if (rightPageNum > 1) handleSelectMushafPage(rightPageNum - 2);
                            }
                            playSound('tick');
                          }}
                          disabled={isMobile ? mushafPage <= 1 : rightPageNum <= 1}
                          className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 rounded-xl text-slate-700 dark:text-slate-200 text-xs font-black flex items-center gap-1 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed border border-slate-250 dark:border-slate-600"
                          title="Önceki Sayfa (Sağa Doğru)"
                        >
                          ÖNCEKİ <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Book Spread Container (Dual-Page) with Swipe / Drag Gestures */}
                    <div 
                      onTouchStart={(e) => handleSwipeStart(e.touches[0].clientX)}
                      onTouchMove={(e) => handleSwipeMove(e.touches[0].clientX)}
                      onTouchEnd={() => handleSwipeEnd('kuran')}
                      onMouseDown={(e) => handleSwipeStart(e.clientX)}
                      onMouseMove={(e) => handleSwipeMove(e.clientX)}
                      onMouseUp={() => handleSwipeEnd('kuran')}
                      onMouseLeave={() => handleSwipeEnd('kuran')}
                      className="flex-1 flex flex-row relative min-h-0 bg-[#faf6ef] dark:bg-slate-900 rounded-2xl overflow-hidden border border-amber-900/10 dark:border-slate-700 cursor-grab active:cursor-grabbing select-none"
                    >
                      {/* Mobile View: Render just the active single page */}
                      <div className="md:hidden flex-1 h-full min-w-0">
                        {renderSingleMushafPage(mushafAyahs, mushafPage)}
                      </div>

                      {/* Desktop View: Left Page (Even Page N+1) */}
                      <div className="hidden md:flex flex-1 h-full min-w-0 border-r border-slate-200 dark:border-slate-750 animate-fade-in">
                        {renderSingleMushafPage(leftPageAyahs, leftPageNum)}
                      </div>

                      {/* Middle book fold line and shadows */}
                      <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-black/5 via-black/15 to-black/5 pointer-events-none z-20" />

                      {/* Desktop View: Right Page (Odd Page N) */}
                      <div className="hidden md:flex flex-1 h-full min-w-0 animate-fade-in">
                        {renderSingleMushafPage(rightPageAyahs, rightPageNum)}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white dark:bg-slate-800 border-3 border-slate-200 dark:border-slate-600 rounded-[2rem] p-12 text-center text-slate-400 dark:text-slate-500 shadow-sm flex flex-col items-center justify-center h-full select-none">
                    {quranAnimData && (
                      <div className="w-48 h-48 mb-6">
                        <Lottie animationData={quranAnimData} loop={true} />
                      </div>
                    )}
                    <h3 className="font-display font-black text-slate-700 dark:text-slate-200 mb-1">Mushaf Okuma Modu</h3>
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold">Lütfen sol listeden bir sayfa seçerek okumaya başlayın!</p>
                  </div>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* ═══ TAM EKRAN KUR'AN OKUTMA MODU ═══ */}
      {isFullscreenQuran && (
        <div className="fixed inset-0 z-[9999] bg-[#faf6ef] dark:bg-[#0d1117] flex flex-col" style={{ fontFamily: "'Amiri', 'Traditional Arabic', 'Noto Naskh Arabic', serif" }}>
          
          {/* Besmele Lottie Intro overlay inside fullscreen */}
          <AnimatePresence>
            {showFullscreenBasmalaIntro && basmalaAnimData && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className={`absolute inset-0 z-[10000] ${isDarkMode ? 'bg-[#0d1117]' : 'bg-[#faf6ef]'} flex flex-col items-center justify-center select-none`}
              >
                <div className="w-[350px] h-[350px] sm:w-[550px] sm:h-[550px] flex items-center justify-center">
                  <Lottie 
                    animationData={basmalaAnimData} 
                    loop={false} 
                    style={{ filter: isDarkMode ? 'invert(1) brightness(1.2)' : 'none' }}
                    onComplete={() => {
                      if (basmalaSafetyTimerRef.current) clearTimeout(basmalaSafetyTimerRef.current);
                      setTimeout(() => {
                        setShowFullscreenBasmalaIntro(false);
                      }, 1500);
                    }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Top Bar */}
          <div className="grid grid-cols-3 items-center px-6 py-3 bg-emerald-800 dark:bg-emerald-950 text-white shadow-lg shrink-0">
            {/* Left section: Title Info */}
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 opacity-80" />
              {quranViewMode === 'meal' && selectedSurah ? (
                <div>
                  <h3 className="font-display font-black text-sm sm:text-base tracking-wide leading-none">{getTurkceSureIsmi(selectedSurah.number)} Sûresi</h3>
                  <p className="text-[10px] opacity-70 font-semibold mt-1">Meal Modu</p>
                </div>
              ) : (
                <div>
                  <h3 className="font-display font-black text-sm sm:text-base tracking-wide leading-none">{Math.floor((mushafPage - 1) / 20) + 1}. Cüz • Sayfa {mushafPage}</h3>
                  <p className="text-[10px] opacity-70 font-semibold mt-1">{mushafAyahs[0]?.surahName || ''} Sûresi</p>
                </div>
              )}
            </div>
            
            {/* Center section: Navigation */}
            <div className="flex items-center justify-center gap-3">
              {quranViewMode === 'mushaf' && (
                <>
                  {/* Left navigation arrow: Sonraki (moves left, page increases in RTL) */}
                  <button
                    onClick={() => {
                      if (isMobile) {
                        if (mushafPage < 604) handleSelectMushafPage(mushafPage + 1);
                      } else {
                        if (leftPageNum < 604) handleSelectMushafPage(rightPageNum + 2);
                      }
                      playSound('tick');
                    }}
                    disabled={isMobile ? mushafPage >= 604 : leftPageNum >= 604}
                    className="px-3 py-2 rounded-xl bg-white/25 hover:bg-white/35 text-white text-xs font-black disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1.5 transition-all border border-white/10 active:scale-95"
                    title="Sonraki Sayfa (Sola Doğru)"
                  >
                    <ChevronLeft className="w-4 h-4" /> SONRAKİ
                  </button>

                  <span className="text-xs font-extrabold px-3 py-2 bg-white/10 rounded-xl border border-white/10 whitespace-nowrap">
                    SAYFA {mushafPage}
                  </span>

                  {/* Dinle Button */}
                  <button
                    onClick={togglePlaySurah}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wide transition-all hover:scale-105 active:scale-95 cursor-pointer border border-white/10 ${isPlayingAudio ? 'bg-rose-500 hover:bg-rose-600' : 'bg-white/20 hover:bg-white/30'}`}
                  >
                    {isPlayingAudio ? <><Pause className="w-4 h-4" /> Durdur</> : <><Play className="w-4 h-4" /> Dinle</>}
                  </button>

                  {/* Right navigation arrow: Önceki (moves right, page decreases in RTL) */}
                  <button
                    onClick={() => {
                      if (isMobile) {
                        if (mushafPage > 1) handleSelectMushafPage(mushafPage - 1);
                      } else {
                        if (rightPageNum > 1) handleSelectMushafPage(rightPageNum - 2);
                      }
                      playSound('tick');
                    }}
                    disabled={isMobile ? mushafPage <= 1 : rightPageNum <= 1}
                    className="px-3 py-2 rounded-xl bg-white/25 hover:bg-white/35 text-white text-xs font-black disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1.5 transition-all border border-white/10 active:scale-95"
                    title="Önceki Sayfa (Sağa Doğru)"
                  >
                    ÖNCEKİ <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>

            {/* Right section: Dark Mode Toggle & Minimize */}
            <div className="flex items-center justify-end gap-2.5">
              {toggleDarkMode && (
                <button
                  onClick={toggleDarkMode}
                  className="px-3 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-black transition-all hover:scale-105 active:scale-95 cursor-pointer border border-white/10 flex items-center gap-1.5"
                  title={isDarkMode ? "Aydınlık Moda Geç" : "Karanlık Moda Geç"}
                >
                  {isDarkMode ? (
                    <>
                      <Sun className="w-4 h-4 text-amber-400" />
                      <span className="hidden sm:inline">Aydınlık</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4 text-indigo-200" />
                      <span className="hidden sm:inline">Karanlık</span>
                    </>
                  )}
                </button>
              )}

              <button
                onClick={() => { setIsFullscreenQuran(false); playSound('tick'); }}
                className="px-3 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5 cursor-pointer shadow-md shadow-rose-600/20 border border-rose-700"
                title="KÜÇÜLT"
              >
                <Minimize2 className="w-4 h-4" /> KÜÇÜLT
              </button>
            </div>
          </div>

          {/* Verses Area */}
          {quranViewMode === 'meal' ? (
            <div className="flex-1 overflow-y-auto px-6 sm:px-12 md:px-20 lg:px-32 py-8 bg-[#faf6ef] dark:bg-[#0d1117] text-slate-800 dark:text-slate-100">
              <div className="max-w-4xl mx-auto space-y-4">
                {/* Surah Turkish Header */}
                <div className="text-center py-5 border-b-2 border-emerald-800/10 dark:border-emerald-400/10 bg-[#f5efe4] dark:bg-[#111827] rounded-3xl mb-6 select-none">
                  <h2 className="text-2xl font-black text-emerald-900 dark:text-emerald-300 uppercase tracking-wide">
                    {selectedSurah ? getTurkceSureIsmi(selectedSurah.number) : ''} Suresi Meali
                  </h2>
                  <p className="text-xs text-slate-500 mt-1 font-semibold">Sadece Türkçe Meal</p>
                </div>

                {selectedSurah?.verses?.map((verse) => (
                  <div 
                    key={verse.number}
                    className="p-5 bg-white/80 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700 rounded-2xl flex flex-col gap-1.5"
                  >
                    <div className="text-sm font-semibold text-slate-700 dark:text-slate-200 leading-relaxed select-text">
                      <span className="text-emerald-600 dark:text-emerald-500 font-black mr-2">{verse.number}. Âyet:</span>
                      {verse.translation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Dual-Page Fullscreen Mushaf Layout with Swipe / Drag Gestures */
            <div 
              onTouchStart={(e) => handleSwipeStart(e.touches[0].clientX)}
              onTouchMove={(e) => handleSwipeMove(e.touches[0].clientX)}
              onTouchEnd={() => handleSwipeEnd('kuran')}
              onMouseDown={(e) => handleSwipeStart(e.clientX)}
              onMouseMove={(e) => handleSwipeMove(e.clientX)}
              onMouseUp={() => handleSwipeEnd('kuran')}
              onMouseLeave={() => handleSwipeEnd('kuran')}
              className="flex-1 flex flex-row relative min-h-0 bg-[#faf6ef] dark:bg-[#0d1117] overflow-hidden cursor-grab active:cursor-grabbing select-none"
            >
              {/* Mobile View: Render just the active single page */}
              <div className="md:hidden flex-1 h-full min-w-0">
                {renderSingleMushafPage(mushafAyahs, mushafPage)}
              </div>

              {/* Desktop View: Left Page (Even Page N+1) */}
              <div className="hidden md:flex flex-1 h-full min-w-0 border-r border-slate-200 dark:border-slate-750">
                {renderSingleMushafPage(leftPageAyahs, leftPageNum)}
              </div>

              {/* Middle book fold line and shadows */}
              <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-black/5 via-black/15 to-black/5 pointer-events-none z-20" />

              {/* Desktop View: Right Page (Odd Page N) */}
              <div className="hidden md:flex flex-1 h-full min-w-0">
                {renderSingleMushafPage(rightPageAyahs, rightPageNum)}
              </div>
            </div>
          )}
        </div>
      )}

      {offlineAlert && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 border-4 border-rose-500 rounded-[2.5rem] p-6 max-w-md w-full shadow-2xl text-center animate-fade-in">
            <span className="text-4xl">⚠️</span>
            <h4 className="font-display font-black text-rose-800 dark:text-rose-400 text-lg mt-2">BAĞLANTI UYARISI</h4>
            <p className="text-slate-600 dark:text-slate-300 text-xs font-semibold mt-3 leading-relaxed">
              {offlineAlert}
            </p>
            <button
              onClick={() => { setOfflineAlert(null); playSound('tick'); }}
              className="mt-6 px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-display font-black text-xs rounded-xl shadow-md cursor-pointer transition active:scale-95"
            >
              Anladım, Kapat
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
