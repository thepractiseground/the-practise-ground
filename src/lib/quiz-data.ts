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

export const GRADES = [5, 6, 7, 8, 9, 10, 11, 12] as const;

export const GRADE_INFO: Record<number, { color: string; bgColor: string; ageRange: string }> = {
  5:  { color: "from-orange-300 to-amber-300", bgColor: "bg-orange-300", ageRange: "8-10 years" },
  6:  { color: "from-fuchsia-300 to-pink-300", bgColor: "bg-fuchsia-300", ageRange: "9-11 years" },
  7:  { color: "from-blue-300 to-indigo-300", bgColor: "bg-blue-300", ageRange: "10-12 years" },
  8:  { color: "from-pink-400 to-rose-300", bgColor: "bg-pink-400", ageRange: "11-13 years" },
  9:  { color: "from-yellow-300 to-amber-200", bgColor: "bg-yellow-300", ageRange: "13-15 years" },
  10: { color: "from-purple-300 to-violet-300", bgColor: "bg-purple-300", ageRange: "14-16 years" },
  11: { color: "from-teal-300 to-emerald-400", bgColor: "bg-teal-400", ageRange: "15-17 years" },
  12: { color: "from-indigo-400 to-blue-400", bgColor: "bg-indigo-400", ageRange: "16-18 years" },
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
