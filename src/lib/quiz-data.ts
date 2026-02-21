import quizData from "@/data/quizzes.json";

export interface Question {
  question: string;
  options: string[];
  answer: string;
}

export interface Week {
  week: number;
  topic: string;
  questions: Question[];
}

export type GradeData = Record<string, Week[]>;

const data = quizData as GradeData;

export const GRADES = [5, 6, 7, 8, 9, 10] as const;

export const GRADE_INFO: Record<number, { color: string; bgColor: string; ageRange: string }> = {
  5:  { color: "from-orange-400 to-amber-400", bgColor: "bg-orange-400", ageRange: "8-10 years" },
  6:  { color: "from-fuchsia-400 to-pink-400", bgColor: "bg-fuchsia-400", ageRange: "9-11 years" },
  7:  { color: "from-blue-400 to-indigo-400", bgColor: "bg-blue-400", ageRange: "10-12 years" },
  8:  { color: "from-pink-500 to-rose-400", bgColor: "bg-pink-500", ageRange: "11-13 years" },
  9:  { color: "from-yellow-400 to-amber-300", bgColor: "bg-yellow-400", ageRange: "13-15 years" },
  10: { color: "from-purple-400 to-violet-400", bgColor: "bg-purple-400", ageRange: "14-16 years" },
};

export function getGradeWeeks(grade: number): Week[] {
  return data[String(grade)] || [];
}

export function getWeek(grade: number, weekNum: number): Week | undefined {
  const weeks = getGradeWeeks(grade);
  return weeks.find((w) => w.week === weekNum);
}

export function getAllGradeWeekPairs(): { grade: number; week: number }[] {
  const pairs: { grade: number; week: number }[] = [];
  for (const grade of GRADES) {
    const weeks = getGradeWeeks(grade);
    for (const w of weeks) {
      pairs.push({ grade, week: w.week });
    }
  }
  return pairs;
}

export function slugifyTopic(topic: string): string {
  return topic
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
