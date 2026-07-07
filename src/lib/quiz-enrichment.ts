import enrichmentData from "@/data/quiz-enrichment.json";
import cefrEnrichmentData from "@/data/cefr-enrichment.json";

export interface QuizEnrichment {
  introduction: string;
  learningObjectives: string[];
}

type EnrichmentData = Record<string, Record<string, Record<string, QuizEnrichment>>>;

const data = enrichmentData as EnrichmentData;
const cefrData = cefrEnrichmentData as EnrichmentData;

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

/**
 * Get enrichment content for a CEFR language quiz page.
 * @param language - "french" | "german" | "spanish"
 * @param level - CEFR level, e.g. "a1" | "b1" | "c1"
 * @param week - week number
 */
export function getCefrEnrichment(
  language: string,
  level: string,
  week: number
): QuizEnrichment | null {
  const entry = cefrData[language]?.[level.toLowerCase()]?.[String(week)];
  return entry || null;
}
