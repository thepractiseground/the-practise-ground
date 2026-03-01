import scienceData from "@/data/science-quizzes.json";

export interface ScienceQuestion {
  question: string;
  options: string[];
  answer: string;
}

export interface ScienceWeek {
  week: number;
  topic: string;
  questions: ScienceQuestion[];
}

export type ScienceGradeData = Record<string, ScienceWeek[]>;

const data = scienceData as ScienceGradeData;

export const SCIENCE_GRADES = [5, 6, 7, 8] as const;

export const SCIENCE_GRADE_INFO: Record<number, { color: string; bgColor: string; ageRange: string; topics: string }> = {
  5: { color: "from-purple-500 to-indigo-600", bgColor: "bg-purple-600", ageRange: "8-10 years", topics: "Living Things, Human Body, Plants, Light, Sound, Matter, Earth Science, Energy" },
  6: { color: "from-violet-500 to-purple-600", bgColor: "bg-violet-600", ageRange: "10-12 years", topics: "Food & Nutrition, Materials & Separation, Plants & Animals, Motion, Light, Electricity, Magnets, Water, Soil, Human Body Systems" },
  7: { color: "from-fuchsia-500 to-purple-600", bgColor: "bg-fuchsia-600", ageRange: "11-13 years", topics: "Nutrition, Fibre to Fabric, Heat, Acids & Bases, Physical & Chemical Changes, Weather, Soil, Respiration, Reproduction, Motion, Electricity, Light" },
  8: { color: "from-indigo-500 to-violet-600", bgColor: "bg-indigo-600", ageRange: "12-14 years", topics: "Crop Production, Microorganisms, Metals & Non-Metals, Coal & Petroleum, Combustion, Cell Structure, Force & Pressure, Friction, Sound, Light, Stars, Pollution" },
};

export function getScienceGradeWeeks(grade: number): ScienceWeek[] {
  return data[String(grade)] || [];
}

export function getScienceWeek(grade: number, weekNum: number): ScienceWeek | undefined {
  const weeks = getScienceGradeWeeks(grade);
  return weeks.find((w) => w.week === weekNum);
}

export function getAllScienceGradeWeekPairs(): { grade: number; week: number }[] {
  const pairs: { grade: number; week: number }[] = [];
  for (const grade of SCIENCE_GRADES) {
    const weeks = getScienceGradeWeeks(grade);
    for (const w of weeks) {
      pairs.push({ grade, week: w.week });
    }
  }
  return pairs;
}
