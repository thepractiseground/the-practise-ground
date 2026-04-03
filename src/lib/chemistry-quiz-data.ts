import chemistryData from "@/data/chemistry-quizzes.json";

export interface ChemistryQuestion {
  question: string;
  options: string[];
  answer: string;
}

export interface ChemistryWeek {
  week: number;
  topic: string;
  questions: ChemistryQuestion[];
}

export type ChemistryGradeData = Record<string, ChemistryWeek[]>;

const data = chemistryData as ChemistryGradeData;

export const CHEMISTRY_GRADES = [11, 12] as const;

export const CHEMISTRY_GRADE_INFO: Record<number, { color: string; bgColor: string; ageRange: string; topics: string }> = {
  11: { color: "from-green-500 to-emerald-600", bgColor: "bg-green-600", ageRange: "15-17 years", topics: "Basic Concepts, Atomic Structure, Periodic Table, Chemical Bonding, States of Matter, Thermodynamics, Equilibrium, Redox, Hydrogen, s-Block, p-Block, Organic Chemistry, Hydrocarbons, Environmental Chemistry" },
  12: { color: "from-emerald-500 to-teal-600", bgColor: "bg-emerald-600", ageRange: "16-18 years", topics: "Solid State, Solutions, Electrochemistry, Kinetics, Surface Chemistry, Metallurgy, p-Block, d/f Block, Coordination Compounds, Organic Chemistry, Biomolecules, Polymers" },
};

export function getChemistryGradeWeeks(grade: number): ChemistryWeek[] {
  return data[String(grade)] || [];
}

export function getChemistryWeek(grade: number, weekNum: number): ChemistryWeek | undefined {
  const weeks = getChemistryGradeWeeks(grade);
  return weeks.find((w) => w.week === weekNum);
}

export function getAllChemistryGradeWeekPairs(): { grade: number; week: number }[] {
  const pairs: { grade: number; week: number }[] = [];
  for (const grade of CHEMISTRY_GRADES) {
    const weeks = getChemistryGradeWeeks(grade);
    for (const w of weeks) {
      pairs.push({ grade, week: w.week });
    }
  }
  return pairs;
}
