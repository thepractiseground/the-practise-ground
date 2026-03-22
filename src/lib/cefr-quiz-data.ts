import cefrData from "@/data/cefr-quizzes.json";

export interface CefrQuestion {
  question: string;
  options: string[];
  answer: string;
}

export interface CefrWeek {
  week: number;
  topic: string;
  questions: CefrQuestion[];
}

export type CefrLevelData = Record<string, CefrWeek[]>;

const data = cefrData as CefrLevelData;

export const CEFR_LEVELS = ["a2", "b1"] as const;
export type CefrLevel = (typeof CEFR_LEVELS)[number];

export const CEFR_LEVEL_INFO: Record<
  string,
  {
    label: string;
    fullName: string;
    color: string;
    bgColor: string;
    description: string;
    skills: string;
    targetAudience: string;
  }
> = {
  a2: {
    label: "A2",
    fullName: "Elementary",
    color: "from-emerald-400 to-teal-500",
    bgColor: "bg-emerald-500",
    description:
      "Can understand sentences and frequently used expressions related to areas of immediate relevance (e.g. personal information, shopping, local geography, employment). Can communicate in simple, routine tasks.",
    skills:
      "Present & Past Tenses, Comparatives, Countable/Uncountable Nouns, Prepositions, Basic Vocabulary, Everyday Conversations",
    targetAudience:
      "Students who know basic English and want to build confidence with everyday grammar and vocabulary",
  },
  b1: {
    label: "B1",
    fullName: "Intermediate",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-600",
    description:
      "Can understand the main points of clear standard input on familiar matters regularly encountered in work, school, leisure, etc. Can deal with most situations likely to arise while travelling.",
    skills:
      "Present Perfect, Past Perfect, Conditionals, Passive Voice, Reported Speech, Relative Clauses, Modal Verbs, Phrasal Verbs",
    targetAudience:
      "Students comfortable with basic grammar who want to advance to more complex structures and fluency",
  },
};

export function getCefrLevelWeeks(level: string): CefrWeek[] {
  return data[level.toLowerCase()] || [];
}

export function getCefrWeek(level: string, weekNum: number): CefrWeek | undefined {
  const weeks = getCefrLevelWeeks(level);
  return weeks.find((w) => w.week === weekNum);
}

export function getAllCefrLevelWeekPairs(): { level: string; week: number }[] {
  const pairs: { level: string; week: number }[] = [];
  for (const level of CEFR_LEVELS) {
    const weeks = getCefrLevelWeeks(level);
    for (const w of weeks) {
      pairs.push({ level, week: w.week });
    }
  }
  return pairs;
}
