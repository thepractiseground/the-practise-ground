import { funQuizzes, getFunQuiz } from "@/data/fun-quizzes";
import { renderFunQuizOG, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-templates";

export const alt = "Fun Quiz on The Practise Ground";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return funQuizzes.map((quiz) => ({ slug: quiz.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const quiz = getFunQuiz(slug);

  if (!quiz) {
    return renderFunQuizOG({
      title: "Fun Quiz",
      category: "General Knowledge",
      emoji: "🎯",
      questionCount: 10,
    });
  }

  return renderFunQuizOG({
    title: quiz.title,
    category: quiz.category,
    emoji: quiz.emoji,
    questionCount: quiz.questions.length,
  });
}
