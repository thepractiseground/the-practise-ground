import mathsHigherData from "@/data/maths-higher-quizzes.json";

export interface MathsHigherQuestion {
  question: string;
  options: string[];
  answer: string;
}

export interface MathsHigherWeek {
  week: number;
  topic: string;
  questions: MathsHigherQuestion[];
}

export type MathsHigherGradeData = Record<string, MathsHigherWeek[]>;

const data = mathsHigherData as MathsHigherGradeData;

export const MATHS_HIGHER_GRADES = [11, 12] as const;

export const MATHS_HIGHER_GRADE_INFO: Record<number, { color: string; bgColor: string; ageRange: string; topics: string }> = {
  11: { color: "from-red-300 to-rose-400", bgColor: "bg-red-400", ageRange: "15-17 years", topics: "Sets, Relations, Functions, Trigonometry, Complex Numbers, Sequences, Coordinate Geometry, Limits, Derivatives, Statistics, Probability, Mathematical Reasoning" },
  12: { color: "from-rose-300 to-pink-400", bgColor: "bg-rose-400", ageRange: "16-18 years", topics: "Relations & Functions, Inverse Trig, Matrices, Determinants, Continuity, Differentiation, Integration, Vectors, 3D Geometry, Linear Programming, Probability" },
};

export function getMathsHigherGradeWeeks(grade: number): MathsHigherWeek[] {
  return data[String(grade)] || [];
}

export function getMathsHigherWeek(grade: number, weekNum: number): MathsHigherWeek | undefined {
  const weeks = getMathsHigherGradeWeeks(grade);
  return weeks.find((w) => w.week === weekNum);
}

export function getAllMathsHigherGradeWeekPairs(): { grade: number; week: number }[] {
  const pairs: { grade: number; week: number }[] = [];
  for (const grade of MATHS_HIGHER_GRADES) {
    const weeks = getMathsHigherGradeWeeks(grade);
    for (const w of weeks) {
      pairs.push({ grade, week: w.week });
    }
  }
  return pairs;
}
