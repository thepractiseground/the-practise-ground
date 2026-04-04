import biologyData from "@/data/biology-quizzes.json";

export interface BiologyQuestion {
  question: string;
  options: string[];
  answer: string;
}

export interface BiologyWeek {
  week: number;
  topic: string;
  questions: BiologyQuestion[];
}

export type BiologyGradeData = Record<string, BiologyWeek[]>;

const data = biologyData as BiologyGradeData;

export const BIOLOGY_GRADES = [11, 12] as const;

export const BIOLOGY_GRADE_INFO: Record<number, { color: string; bgColor: string; ageRange: string; topics: string }> = {
  11: { color: "from-lime-300 to-green-400", bgColor: "bg-lime-400", ageRange: "15-17 years", topics: "Living World, Biological Classification, Plant & Animal Kingdom, Morphology, Anatomy, Cell Biology, Cell Division, Biomolecules, Plant Physiology, Animal Physiology" },
  12: { color: "from-green-300 to-lime-400", bgColor: "bg-green-400", ageRange: "16-18 years", topics: "Reproduction, Genetics, Molecular Biology, Evolution, Human Health, Food Production, Microbes, Biotechnology, Ecology, Biodiversity, Environmental Issues" },
};

export function getBiologyGradeWeeks(grade: number): BiologyWeek[] {
  return data[String(grade)] || [];
}

export function getBiologyWeek(grade: number, weekNum: number): BiologyWeek | undefined {
  const weeks = getBiologyGradeWeeks(grade);
  return weeks.find((w) => w.week === weekNum);
}

export function getAllBiologyGradeWeekPairs(): { grade: number; week: number }[] {
  const pairs: { grade: number; week: number }[] = [];
  for (const grade of BIOLOGY_GRADES) {
    const weeks = getBiologyGradeWeeks(grade);
    for (const w of weeks) {
      pairs.push({ grade, week: w.week });
    }
  }
  return pairs;
}
