import physicsData from "@/data/physics-quizzes.json";

export interface PhysicsQuestion {
  question: string;
  options: string[];
  answer: string;
}

export interface PhysicsWeek {
  week: number;
  topic: string;
  questions: PhysicsQuestion[];
}

export type PhysicsGradeData = Record<string, PhysicsWeek[]>;

const data = physicsData as PhysicsGradeData;

export const PHYSICS_GRADES = [11, 12] as const;

export const PHYSICS_GRADE_INFO: Record<number, { color: string; bgColor: string; ageRange: string; topics: string }> = {
  11: { color: "from-blue-300 to-cyan-400", bgColor: "bg-blue-400", ageRange: "15-17 years", topics: "Physical World, Units & Measurements, Kinematics, Laws of Motion, Work & Energy, Rotational Motion, Gravitation, Properties of Matter, Thermodynamics, Kinetic Theory, Oscillations, Waves" },
  12: { color: "from-cyan-300 to-blue-400", bgColor: "bg-cyan-400", ageRange: "16-18 years", topics: "Electrostatics, Current Electricity, Magnetism, EMI, AC, EM Waves, Ray Optics, Wave Optics, Dual Nature of Radiation, Atoms, Nuclei, Semiconductors" },
};

export function getPhysicsGradeWeeks(grade: number): PhysicsWeek[] {
  return data[String(grade)] || [];
}

export function getPhysicsWeek(grade: number, weekNum: number): PhysicsWeek | undefined {
  const weeks = getPhysicsGradeWeeks(grade);
  return weeks.find((w) => w.week === weekNum);
}

export function getAllPhysicsGradeWeekPairs(): { grade: number; week: number }[] {
  const pairs: { grade: number; week: number }[] = [];
  for (const grade of PHYSICS_GRADES) {
    const weeks = getPhysicsGradeWeeks(grade);
    for (const w of weeks) {
      pairs.push({ grade, week: w.week });
    }
  }
  return pairs;
}
