import { getAllScienceGradeWeekPairs, getScienceWeek } from "@/lib/science-quiz-data";
import { renderQuizOG, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-templates";

export const alt = "Science Quiz on The Practise Ground";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return getAllScienceGradeWeekPairs().map((p) => ({
    grade: String(p.grade),
    week: String(p.week),
  }));
}

export default async function Image({ params }: { params: Promise<{ grade: string; week: string }> }) {
  const { grade, week } = await params;
  const gradeNum = parseInt(grade, 10);
  const weekNum = parseInt(week, 10);
  const weekData = getScienceWeek(gradeNum, weekNum);

  return renderQuizOG({
    grade: gradeNum,
    topic: weekData?.topic || `Week ${weekNum} Science Quiz`,
    weekNum,
    questionCount: weekData?.questions.length || 15,
    subject: "science",
  });
}
