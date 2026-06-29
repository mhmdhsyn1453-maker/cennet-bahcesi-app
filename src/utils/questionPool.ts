import { WEEKLY_CURRICULUM, Lesson } from '../data/curriculumData';

// Soru tipleri tanımları
export interface UnifiedQuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  wisdom: string;
  source: string; // Hangi ders veya kaynaktan geldiği
}

export interface AZQuestion {
  letter: string;
  question: string;
  answer: string;
  clues: string[];
}

export interface TrueFalseStatement {
  id: string;
  statement: string;
  isCorrect: boolean;
  explanation: string;
  category?: 'inanc_ibadet' | 'tarih_siyer' | 'ahlak_adap';
}

export interface VocabularyWord {
  word: string;
  category: string;
  clue: string;
}

// Diziyi karıştırmak için Fischer-Yates algoritması
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ==========================================
// 1. DİNAMİK MÜFREDAT SORULARI AYIKLAYICI
// ==========================================
export function getCurriculumQuizQuestions(): UnifiedQuizQuestion[] {
  const list: UnifiedQuizQuestion[] = [];

  // curriculumData'yı dolaşalım
  WEEKLY_CURRICULUM.forEach((week) => {
    week.days.forEach((day) => {
      day.lessons.forEach((lesson: Lesson) => {
        // Eski quiz yapısı varsa
        if (lesson.quiz) {
          list.push({
            id: `curr_q_${lesson.id}_legacy`,
            question: lesson.quiz.question,
            options: lesson.quiz.options,
            correct: lesson.quiz.correct,
            wisdom: lesson.quiz.wisdom || '',
            source: `${week.weekNum}. Hafta - ${day.dayName} - ${lesson.title}`,
          });
        }

        // Yeni slayt yapısı varsa ve içindeki quiz slaytları
        if (lesson.slides) {
          lesson.slides.forEach((slide, sIdx) => {
            if (slide.type === 'quiz' && slide.question && slide.options && slide.correct) {
              list.push({
                id: `curr_q_${lesson.id}_slide_${sIdx}`,
                question: slide.question,
                options: slide.options,
                correct: slide.correct,
                wisdom: slide.wisdom || '',
                source: `${week.weekNum}. Hafta - ${day.dayName} - ${lesson.title}`,
              });
            }
          });
        }
      });
    });
  });

  // Eğer müfredatta soru yoksa yedek soru listesi
  if (list.length === 0) {
    list.push({
      id: 'fallback_1',
      question: 'İslam dininin temel kaynağı nedir?',
      options: ['Kur\'an-ı Kerim', 'Tarih Kitapları', 'Sözlükler', 'Ansiklopediler'],
      correct: 'Kur\'an-ı Kerim',
      wisdom: 'İslam dininin inanç, ibadet ve ahlak esaslarının birinci elden kaynağı Kur\'an-ı Kerim\'dir.',
      source: 'Genel Bilgi',
    });
  }

  return list;
}

// ========================================================
// 2. TEMİZLENMİŞ BOŞ VERİ TABANLARI & GEÇİCİ STUB YARDIMCILARI
// ========================================================

export const AZ_QUESTIONS_DB: Record<string, AZQuestion[]> = {};
export const TRUE_FALSE_DB: TrueFalseStatement[] = [];
export const VOCABULARY_DB: VocabularyWord[] = [];
export const GENERAL_KNOWLEDGE_QUESTIONS: UnifiedQuizQuestion[] = [];

// Harf sorusunun kategorisini belirleyen yardımcı
export function getAZQuestionCategory(answer: string): 'inanc_ibadet' | 'tarih_siyer' | 'ahlak_adap' {
  return 'inanc_ibadet';
}

// Belirli bir harf ve kategori için rastgele bir soru seçer (Stub)
export function getRandomQuestionForLetter(letter: string, category: 'inanc_ibadet' | 'tarih_siyer' | 'ahlak_adap' | 'all' = 'all'): AZQuestion {
  return {
    letter: letter.toUpperCase(),
    question: `${letter.toUpperCase()} harfi ile başlayan bir soru henüz tanımlanmadı.`,
    answer: "Örnek",
    clues: ["İpucu 1", "İpucu 2"]
  };
}

// Rastgele True/False iddiaları seçer (Stub)
export function getRandomTrueFalseStatements(count: number): TrueFalseStatement[] {
  return [];
}

// Kategoriye göre rastgele True/False iddiaları seçer (Stub)
export function getRandomTrueFalseStatementsByCategory(category: 'inanc_ibadet' | 'tarih_siyer' | 'ahlak_adap' | 'all', count: number): TrueFalseStatement[] {
  return [];
}

// Rastgele kelime bulmaca ögeleri seçer (Stub)
export function getRandomVocabularyWords(count: number): VocabularyWord[] {
  return [];
}

// Kategoriye göre rastgele kelime bulmaca ögeleri seçer (Stub)
export function getRandomVocabularyWordsByCategory(group: 'inanc_ibadet' | 'tarih_siyer' | 'ahlak_adap' | 'all', count: number): VocabularyWord[] {
  return [];
}
