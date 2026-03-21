import { notFound } from "next/navigation";
import Link from "next/link";
import { funQuizzes, getFunQuiz } from "@/data/fun-quizzes";
import QuizEngine from "@/components/QuizEngine";
import QuizQuestionList from "@/components/QuizQuestionList";
import HeroImage from "@/components/HeroImage";
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

      <div className="relative overflow-hidden py-10 sm:py-14">
        <HeroImage
          src="/images/og/og-fun.png"
          alt="Fun quiz illustration"
          overlay={0.5}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
            <Link href="/fun" className="hover:text-white transition-colors">
              Fun Quizzes
            </Link>
            <span>/</span>
            <span className="text-white font-medium">{quiz.title}</span>
          </nav>

          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">{quiz.emoji}</span>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">{quiz.title}</h1>
              <p className="text-white/80 text-sm mt-1">{quiz.questions.length} questions &middot; {quiz.category}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Server-rendered question list for SEO */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6">
        <QuizQuestionList
          questions={quiz.questions}
          topic={quiz.title}
          subject="Fun Quiz"
        />
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
