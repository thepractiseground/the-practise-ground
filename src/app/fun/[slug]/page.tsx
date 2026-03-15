import { notFound } from "next/navigation";
import Link from "next/link";
import { funQuizzes, getFunQuiz } from "@/data/fun-quizzes";
import QuizEngine from "@/components/QuizEngine";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return funQuizzes.map((quiz) => ({ slug: quiz.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const quiz = getFunQuiz(slug);

  if (!quiz) return { title: "Quiz Not Found" };

  return {
    title: `${quiz.title} — Fun Quiz | The Practise Ground`,
    description: `${quiz.description} ${quiz.questions.length} free questions with instant scoring. No sign-up needed.`,
    keywords: [
      `${quiz.title.toLowerCase()} quiz`,
      `fun ${quiz.category.toLowerCase()} quiz`,
      "general knowledge quiz",
      "free quiz online",
      "fun trivia quiz",
    ],
    alternates: { canonical: `https://www.thepractiseground.in/fun/${slug}` },
    openGraph: {
      title: `${quiz.title} — Fun Quiz`,
      description: quiz.description,
      url: `https://www.thepractiseground.in/fun/${slug}`,
      siteName: "The Practise Ground",
      type: "website",
    },
  };
}

export default async function FunQuizPage({ params }: Props) {
  const { slug } = await params;
  const quiz = getFunQuiz(slug);

  if (!quiz) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    name: quiz.title,
    description: quiz.description,
    educationalAlignment: { "@type": "AlignmentObject", alignmentType: "educationalSubject", targetName: quiz.category },
    isAccessibleForFree: true,
    url: `https://www.thepractiseground.in/fun/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div
        className="py-10 sm:py-14"
        style={{
          background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 30%, #c4b5fd 70%, #a78bfa 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
            <Link href="/fun" className="hover:text-brand-orange transition-colors">
              Fun Quizzes
            </Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">{quiz.title}</span>
          </nav>

          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">{quiz.emoji}</span>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{quiz.title}</h1>
              <p className="text-gray-600 text-sm mt-1">{quiz.questions.length} questions &middot; {quiz.category}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 sm:py-12 px-4 sm:px-6" style={{ background: "linear-gradient(to bottom, #f9fafb, #ffffff)" }}>
        <QuizEngine
          questions={quiz.questions}
          topic={quiz.title}
          subject="Fun Quiz"
          quizLabel={quiz.title}
          sharePath={`/fun/${quiz.slug}`}
          bridgeCTA={{
            text: "Enjoyed this quiz?",
            description: "Try our curriculum-aligned academic quizzes — 23,400+ questions across English, Maths and Science for Grades 5-10.",
            links: [
              { label: "English Quizzes", href: "/quiz/5" },
              { label: "Maths Quizzes", href: "/quiz/maths/5" },
              { label: "Science Quizzes", href: "/quiz/science/5" },
            ],
          }}
        />
      </div>
    </>
  );
}
