import data from "@/data/cefr-french-quizzes.json";
import type { CefrWeek, CefrLevelData } from "@/lib/cefr-quiz-data";

const typedData = data as CefrLevelData;

export const FRENCH_CEFR_LEVELS = ["a1", "b1", "c1"] as const;

export const FRENCH_LEVEL_INFO: Record<string, {
  label: string; fullName: string; color: string; bgColor: string;
  description: string; skills: string; targetAudience: string;
}> = {
  a1: {
    label: "A1",
    fullName: "Beginner",
    color: "from-blue-400 to-indigo-500",
    bgColor: "bg-blue-500",
    description: "Can understand and use familiar everyday expressions and very basic phrases. Can introduce themselves and ask simple questions.",
    skills: "Greetings, Articles, Gender, Present Tense (-ER/-IR/-RE), Être & Avoir, Negation, Adjectives, Prepositions, Reflexive Verbs",
    targetAudience: "Complete beginners starting their French learning journey",
  },  b1: {
    label: "B1",
    fullName: "Intermediate",
    color: "from-indigo-500 to-purple-600",
    bgColor: "bg-indigo-600",
    description: "Can understand the main points on familiar matters. Can deal with most situations likely to arise while travelling in a French-speaking area.",
    skills: "Passé Composé, Imparfait, Plus-que-parfait, Future, Conditional, Pronouns (Y, EN), Subjunctive, Si Clauses, Passive Voice",
    targetAudience: "Students with basic French who want to master complex tenses and grammar",
  },  c1: {
    label: "C1",
    fullName: "Advanced",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-600",
    description: "Can understand a wide range of demanding, longer texts. Can express ideas fluently and spontaneously without much searching for expressions.",
    skills: "Passé Simple, Subjonctif Passé, Conditionnel Passé, Advanced Relative Pronouns, Gérondif, Formal Register, Idiomatic Expressions",
    targetAudience: "Advanced learners preparing for DALF C1 or aiming for near-native fluency",
  }
};

export function getFrenchLevelWeeks(level: string): CefrWeek[] {
  return typedData[level.toLowerCase()] || [];
}

export function getFrenchWeek(level: string, weekNum: number): CefrWeek | undefined {
  const weeks = getFrenchLevelWeeks(level);
  return weeks.find((w) => w.week === weekNum);
}

export function getAllFrenchLevelWeekPairs(): { level: string; week: number }[] {
  const pairs: { level: string; week: number }[] = [];
  for (const level of FRENCH_CEFR_LEVELS) {
    const weeks = getFrenchLevelWeeks(level);
    for (const w of weeks) {
      pairs.push({ level, week: w.week });
    }
  }
  return pairs;
}
