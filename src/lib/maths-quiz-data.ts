import mathsData from "@/data/maths-quizzes.json";

export interface MathsQuestion {
  question: string;
  options: string[];
  answer: string;
}

export interface MathsWeek {
  week: number;
  topic: string;
  questions: MathsQuestion[];
}

export type MathsGradeData = Record<string, MathsWeek[]>;

const data = mathsData as MathsGradeData;

export const MATHS_GRADES = [5, 6, 7, 8, 9, 10, 11, 12] as const;

export const MATHS_GRADE_INFO: Record<number, { color: string; bgColor: string; ageRange: string; topics: string }> = {
  5:  { color: "from-emerald-400 to-green-500", bgColor: "bg-emerald-500", ageRange: "8-10 years", topics: "Arithmetic, Fractions, Geometry Basics, Patterns" },
  6:  { color: "from-cyan-400 to-teal-500", bgColor: "bg-cyan-500", ageRange: "9-11 years", topics: "Decimals, Ratios, Basic Algebra, Mensuration" },
  7:  { color: "from-sky-400 to-blue-500", bgColor: "bg-sky-500", ageRange: "10-12 years", topics: "Integers, Fractions & Decimals, Data Handling, Geometry" },
  8:  { color: "from-violet-400 to-purple-500", bgColor: "bg-violet-500", ageRange: "11-13 years", topics: "Algebra, Linear Equations, Quadrilaterals, Mensuration" },
  9:  { color: "from-rose-400 to-red-500", bgColor: "bg-rose-500", ageRange: "13-15 years", topics: "Number Systems, Polynomials, Coordinate Geometry, Trigonometry" },
  10: { color: "from-amber-400 to-orange-500", bgColor: "bg-amber-500", ageRange: "14-16 years", topics: "Real Numbers, Quadratic Equations, Statistics, Probability" },
  11: { color: "from-teal-400 to-cyan-500", bgColor: "bg-teal-500", ageRange: "15-17 years", topics: "Sets, Relations, Functions, Trigonometry, Complex Numbers, Linear Programming, Statistics, Probability, Applied Maths" },
  12: { color: "from-indigo-400 to-violet-500", bgColor: "bg-indigo-500", ageRange: "16-18 years", topics: "Relations & Functions, Matrices, Determinants, Calculus, Linear Programming, Probability, Applied Maths" },
};

export function getMathsGradeWeeks(grade: number): MathsWeek[] {
  return data[String(grade)] || [];
}

export function getMathsWeek(grade: number, weekNum: number): MathsWeek | undefined {
  const weeks = getMathsGradeWeeks(grade);
  return weeks.find((w) => w.week === weekNum);
}

export function getAllMathsGradeWeekPairs(): { grade: number; week: number }[] {
  const pairs: { grade: number; week: number }[] = [];
  for (const grade of MATHS_GRADES) {
    const weeks = getMathsGradeWeeks(grade);
    for (const w of weeks) {
      pairs.push({ grade, week: w.week });
    }
  }
  return pairs;
}
