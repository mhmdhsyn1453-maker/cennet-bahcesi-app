export enum GameZone {
  KelimeArkeolojisi = 'kelime_arkeolojisi',
  HikmetIkilemleri = 'hikmet_ikilemleri',
  KronolojiMatrisi = 'kronoloji_matrisi',
  EsmaKevn = 'esma_kevn',
  SirAyeti = 'sir_ayeti',
}

export interface Team {
  id: string;
  name: string;
  score: number;
  color: string; // Tailwind class, e.g., 'bg-amber-500'
  icon: string;  // lucide icon name
  active: boolean;
}

export interface KelimeQuestion {
  id: string;
  turkishWord: string; // e.g. "Adalet"
  arabicRoot: string;  // e.g. "a-d-l (Ø¹-Ø¯-Ù)"
  description: string; // Explaining the connection
  clues: string[];     // Progressive clues
  options: string[];   // Multiple root/meaning options
  correctOption: string;
  quranReference: string; // e.g. "Nahl Suresi, 90. Ayet"
  wisdomNote: string;  // Intellectual take home message
}

export interface DilemmaQuestion {
  id: string;
  title: string;
  scenario: string;
  options: {
    text: string;
    points: number;
    feedback: string;
    virtue: string; // e.g., "DÃ¼rÃ¼stlÃ¼k", "Merhamet"
  }[];
}

export interface ChronologistEvent {
  id: string;
  title: string;
  year: string; // Islamic year or general date info
  description: string;
  order: number; // 1-based order
}

export interface ChronologyQuestion {
  id: string;
  title: string;
  theme: string;
  events: ChronologistEvent[];
}

export interface EsmaQuestion {
  id: string;
  name: string; // e.g., "Al-HalÃ®q" or "Al-Shafi"
  translation: string; // Turkish meaning
  cosmosClue: string;  // Scientific/cosmological riddle
  options: string[];   // Esma options
  correctEsma: string;
  scientificInsight: string; // Connecting the Esma with science/cosmos
}

export interface SirAyetiQuestion {
  id: string;
  clue: string;
  maskedText: string; // e.g., "ÅÃ¼phesiz her zorlukla beraber bir ____ vardÄ±r."
  correctWord: string; // e.g., "kolaylÄ±k"
  surah: string; // e.g., "Ä°nÅirah Suresi, 5"
  letters: string[]; // Options to help spell/unscramble
  wisdomNote: string;
}

export interface GameData {
  kelimeQuestions: KelimeQuestion[];
  dilemmaQuestions: DilemmaQuestion[];
  chronologyQuestions: ChronologyQuestion[];
  esmaQuestions: EsmaQuestion[];
  sirAyetiQuestions: SirAyetiQuestion[];
}
