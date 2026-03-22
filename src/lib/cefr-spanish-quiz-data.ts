import data from "@/data/cefr-spanish-quizzes.json";
import type { CefrWeek, CefrLevelData } from "@/lib/cefr-quiz-data";

const typedData = data as CefrLevelData;

export const SPANISH_CEFR_LEVELS = ["a1", "b1", "c1"] as const;

export const SPANISH_LEVEL_INFO: Record<string, {
  label: string; fullName: string; color: string; bgColor: string;
  description: string; skills: string; targetAudience: string;
}> = {
  a1: {
    label: "A1",
    fullName: "Beginner",
    color: "from-red-400 to-orange-500",
    bgColor: "bg-red-500",
    description: "Can understand and use familiar everyday expressions and very basic phrases. Can introduce themselves and answer questions about personal details.",
    skills: "Greetings, Numbers, Articles, Gender, Present Tense, Ser vs Estar, Basic Vocabulary, Prepositions, Question Words",
    targetAudience: "Complete beginners starting their Spanish learning journey",
  },  b1: {
    label: "B1",
    fullName: "Intermediate",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-600",
    description: "Can understand the main points on familiar matters. Can deal with most situations likely to arise while travelling in a Spanish-speaking area.",
    skills: "Preterite & Imperfect, Future & Conditional, Object Pronouns, Subjunctive, Commands, Por vs Para, Passive Voice",
    targetAudience: "Students with basic Spanish who want to build fluency with complex grammar structures",
  },  c1: {
    label: "C1",
    fullName: "Advanced",
    color: "from-amber-600 to-yellow-700",
    bgColor: "bg-amber-700",
    description: "Can understand a wide range of demanding, longer texts, and recognise implicit meaning. Can express ideas fluently and spontaneously.",
    skills: "Compound Tenses, Si Clauses, Advanced Subjunctive, Passive Voice, Reported Speech, Idiomatic Expressions, Formal Register",
    targetAudience: "Advanced learners preparing for DELE C1 or aiming for near-native fluency",
  }
};

export function getSpanishLevelWeeks(level: string): CefrWeek[] {
  return typedData[level.toLowerCase()] || [];
}

export function getSpanishWeek(level: string, weekNum: number): CefrWeek | undefined {
  const weeks = getSpanishLevelWeeks(level);
  return weeks.find((w) => w.week === weekNum);
}

export function getAllSpanishLevelWeekPairs(): { level: string; week: number }[] {
  const pairs: { level: string; week: number }[] = [];
  for (const level of SPANISH_CEFR_LEVELS) {
    const weeks = getSpanishLevelWeeks(level);
    for (const w of weeks) {
      pairs.push({ level, week: w.week });
    }
  }
  return pairs;
}
