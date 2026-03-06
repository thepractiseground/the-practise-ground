import enrichmentData from "@/data/quiz-enrichment.json";

export interface QuizEnrichment {
  introduction: string;
  learningObjectives: string[];
}

type EnrichmentData = Record<string, Record<string, Record<string, QuizEnrichment>>>;

const data = enrichmentData as EnrichmentData;

/**
 * Get enrichment content (introduction + learning objectives) for a quiz page.
 * @param subject - "english" | "maths" | "science"
 * @param grade - grade number (5-10)
 * @param week - week number (1-52)
 */
export function getQuizEnrichment(
  subject: string,
  grade: number,
  week: number
): QuizEnrichment | null {
  const entry = data[subject]?.[String(grade)]?.[String(week)];
  return entry || null;
}
