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

export const SCIENCE_GRADES = [5, 6, 7, 8, 9, 10] as const;

export const SCIENCE_GRADE_INFO: Record<number, { color: string; bgColor: string; ageRange: string; topics: string }> = {
  5: { color: "from-purple-300 to-indigo-400", bgColor: "bg-purple-400", ageRange: "8-10 years", topics: "Living Things, Human Body, Plants, Light, Sound, Matter, Earth Science, Energy" },
  6: { color: "from-violet-300 to-purple-400", bgColor: "bg-violet-400", ageRange: "10-12 years", topics: "Food & Nutrition, Materials & Separation, Plants & Animals, Motion, Light, Electricity, Magnets, Water, Soil, Human Body Systems" },
  7: { color: "from-fuchsia-300 to-purple-400", bgColor: "bg-fuchsia-400", ageRange: "11-13 years", topics: "Nutrition, Fibre to Fabric, Heat, Acids & Bases, Physical & Chemical Changes, Weather, Soil, Respiration, Reproduction, Motion, Electricity, Light" },
  8: { color: "from-indigo-300 to-violet-400", bgColor: "bg-indigo-400", ageRange: "12-14 years", topics: "Crop Production, Microorganisms, Metals & Non-Metals, Coal & Petroleum, Combustion, Cell Structure, Force & Pressure, Friction, Sound, Light, Stars, Pollution" },
  9: { color: "from-purple-400 to-pink-400", bgColor: "bg-purple-400", ageRange: "13-15 years", topics: "Matter, Atoms, Cell & Tissues, Motion, Force, Gravitation, Work & Energy, Sound, Diversity, Natural Resources, Electricity, Light, Carbon Compounds, Heredity" },
  10: { color: "from-rose-300 to-purple-400", bgColor: "bg-rose-400", ageRange: "14-16 years", topics: "Chemical Reactions, Acids & Bases, Metals, Carbon Compounds, Periodic Table, Life Processes, Heredity, Evolution, Light, Electricity, Magnetism, Environment" },
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
