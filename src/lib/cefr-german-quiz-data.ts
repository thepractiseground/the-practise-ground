import data from "@/data/cefr-german-quizzes.json";
import type { CefrWeek, CefrLevelData } from "@/lib/cefr-quiz-data";

const typedData = data as CefrLevelData;

export const GERMAN_CEFR_LEVELS = ["a1", "b1", "c1"] as const;

export const GERMAN_LEVEL_INFO: Record<string, {
  label: string; fullName: string; color: string; bgColor: string;
  description: string; skills: string; targetAudience: string;
}> = {
  a1: {
    label: "A1",
    fullName: "Beginner",
    color: "from-yellow-500 to-amber-600",
    bgColor: "bg-yellow-600",
    description: "Can understand and use familiar everyday expressions. Can introduce themselves and ask questions about personal details such as where they live and things they have.",
    skills: "Articles, Gender, Cases (Nominative & Accusative), Present Tense, Stem-Changing Verbs, Sein & Haben, Modal Verbs, Prepositions",
    targetAudience: "Complete beginners starting their German learning journey",
  },  b1: {
    label: "B1",
    fullName: "Intermediate",
    color: "from-gray-600 to-gray-800",
    bgColor: "bg-gray-700",
    description: "Can understand the main points on familiar matters. Can deal with most situations likely to arise while travelling in a German-speaking area.",
    skills: "Perfekt, Präteritum, Plusquamperfekt, All Four Cases, Two-Way Prepositions, Adjective Declension, Konjunktiv II, Passive Voice, Subordinate Clauses",
    targetAudience: "Students with basic German who want to master cases, tenses, and complex sentence structures",
  },  c1: {
    label: "C1",
    fullName: "Advanced",
    color: "from-red-600 to-gray-800",
    bgColor: "bg-red-700",
    description: "Can understand a wide range of demanding, longer texts. Can use language flexibly and effectively for social, academic, and professional purposes.",
    skills: "Konjunktiv I & II, Futur II, Extended Adjective Constructions, Advanced Passive, Nominalisierung, Discourse Particles, Academic German",
    targetAudience: "Advanced learners preparing for Goethe C1 or TestDaF, or aiming for academic/professional fluency",
  }
};

export function getGermanLevelWeeks(level: string): CefrWeek[] {
  return typedData[level.toLowerCase()] || [];
}

export function getGermanWeek(level: string, weekNum: number): CefrWeek | undefined {
  const weeks = getGermanLevelWeeks(level);
  return weeks.find((w) => w.week === weekNum);
}

export function getAllGermanLevelWeekPairs(): { level: string; week: number }[] {
  const pairs: { level: string; week: number }[] = [];
  for (const level of GERMAN_CEFR_LEVELS) {
    const weeks = getGermanLevelWeeks(level);
    for (const w of weeks) {
      pairs.push({ level, week: w.week });
    }
  }
  return pairs;
}
