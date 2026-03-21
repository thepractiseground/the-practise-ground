import { GRADES } from "@/lib/quiz-data";
import { getScienceGradeWeeks } from "@/lib/science-quiz-data";
import { renderGradeOG, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-templates";

export const alt = "Science Quizzes on The Practise Ground";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return GRADES.map((grade) => ({ grade: String(grade) }));
}

export default async function Image({ params }: { params: Promise<{ grade: string }> }) {
  const { grade } = await params;
  const gradeNum = parseInt(grade, 10);
  const weeks = getScienceGradeWeeks(gradeNum);

  return await renderGradeOG({
    grade: gradeNum,
    subject: "science",
    weekCount: weeks.length,
  });
}
