import { notFound } from "next/navigation";
import Link from "next/link";
import { FRENCH_CEFR_LEVELS, FRENCH_LEVEL_INFO, getFrenchLevelWeeks, getFrenchWeek, getAllFrenchLevelWeekPairs } from "@/lib/cefr-french-quiz-data";
import QuizEngine from "@/components/QuizEngine";
import QuizQuestionList from "@/components/QuizQuestionList";
import HeroImage from "@/components/HeroImage";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ level: string; week: string }>;
}

export async function generateStaticParams() {
  return getAllFrenchLevelWeekPairs().map((p) => ({
    level: p.level,
    week: String(p.week),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { level: rawLevel, week: w } = await params;
  const level = rawLevel.toLowerCase();
  const weekNum = parseInt(w);
  const weekData = getFrenchWeek(level, weekNum);
  const info = FRENCH_LEVEL_INFO[level];

  if (!weekData || !info) return { title: "Quiz Not Found" };

  const topic = weekData.topic;
  return {
    title: `${topic} Quiz — CEFR ${info.label} French Practice | The Practise Ground`,
    description: `Take this free CEFR ${info.label} (${info.fullName}) French quiz on ${topic}. ${weekData.questions.length} multiple-choice questions with instant scoring. Perfect for ${info.fullName.toLowerCase()} learners.`,
    keywords: [
      `${info.label} ${topic.toLowerCase()} quiz`,
      `CEFR ${info.label} french quiz week ${weekNum}`,
      `${topic.toLowerCase()} french grammar practice`,
      `${info.fullName.toLowerCase()} french ${topic.toLowerCase()}`,
      `free ${info.label} french grammar test`,
    ],
    alternates: { canonical: `https://www.thepractiseground.in/quiz/french/${level}/${weekNum}` },
  };
}

export default async function FrenchCefrQuizPage({ params }: Props) {
  const { level: rawLevel, week: w } = await params;
  const level = rawLevel.toLowerCase();
  const weekNum = parseInt(w);

  if (!FRENCH_CEFR_LEVELS.includes(level as (typeof FRENCH_CEFR_LEVELS)[number])) notFound();

  const weekData = getFrenchWeek(level, weekNum);
  if (!weekData || weekData.questions.length === 0) notFound();

  const info = FRENCH_LEVEL_INFO[level];
  const allWeeks = getFrenchLevelWeeks(level);
  const currentIdx = allWeeks.findIndex((wk) => wk.week === weekNum);
  const prevWeek = currentIdx > 0 ? allWeeks[currentIdx - 1] : null;
  const nextWeek = currentIdx < allWeeks.length - 1 ? allWeeks[currentIdx + 1] : null;

  const topic = weekData.topic;

  return (
    <div className="bg-theme-gradient min-h-screen pb-16">
      {/* Breadcrumb & Header */}
      <section className="relative overflow-hidden py-8">
        <HeroImage
          src="/images/og/og-blog-grammar.png"
          alt="French level quiz illustration"
          overlay={0.65}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-white/70 text-sm mb-3">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/quiz/french" className="hover:text-white">French Levels</Link>
            <span className="mx-2">/</span>
            <Link href={`/quiz/french/${level}`} className="hover:text-white">{info.label} {info.fullName}</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Week {weekNum}</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">{topic}</h1>
          <p className="text-white/80">
            CEFR {info.label} ({info.fullName}) &middot; Week {weekNum} &middot; {weekData.questions.length} questions
          </p>
        </div>
      </section>

      {/* Server-rendered question list for SEO */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <QuizQuestionList
          questions={weekData.questions}
          topic={topic}
          subject={`French (${info.label})`}
        />
      </div>

      {/* Quiz Engine */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <QuizEngine
          questions={weekData.questions}
          week={weekNum}
          topic={topic}
          subject={`French ${info.label}`}
          subjectPath={`french/${level}`}
          quizLabel={`CEFR ${info.label}`}
          sharePath={`/quiz/french/${level}/${weekNum}`}
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
          {prevWeek ? (
            <Link href={`/quiz/french/${level}/${prevWeek.week}`} className="text-brand-navy hover:text-brand-orange transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Week {prevWeek.week}: {prevWeek.topic}
            </Link>
          ) : <div />}
          {nextWeek ? (
            <Link href={`/quiz/french/${level}/${nextWeek.week}`} className="text-brand-navy hover:text-brand-orange transition-colors flex items-center gap-2">
              Week {nextWeek.week}: {nextWeek.topic}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : <div />}
        </div>
      </div>

      {/* Quiz Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Quiz",
            name: `CEFR ${info.label} French Quiz - Week ${weekNum}: ${topic}`,
            about: { "@type": "Thing", name: topic },
            educationalLevel: `CEFR ${info.label}`,
            numberOfQuestions: weekData.questions.length,
            provider: {
              "@type": "Organization",
              name: "The Practise Ground",
              url: "https://www.thepractiseground.in",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.thepractiseground.in" },
              { "@type": "ListItem", position: 2, name: "French Levels", item: "https://www.thepractiseground.in/quiz/french" },
              { "@type": "ListItem", position: 3, name: `${info.label} ${info.fullName}`, item: `https://www.thepractiseground.in/quiz/french/${level}` },
              { "@type": "ListItem", position: 4, name: `Week ${weekNum}`, item: `https://www.thepractiseground.in/quiz/french/${level}/${weekNum}` },
            ],
          }),
        }}
      />
    </div>
  );
}
