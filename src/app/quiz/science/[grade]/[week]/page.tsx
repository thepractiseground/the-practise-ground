import { notFound } from "next/navigation";
import Link from "next/link";
import { SCIENCE_GRADES, SCIENCE_GRADE_INFO, getScienceGradeWeeks, getScienceWeek, getAllScienceGradeWeekPairs } from "@/lib/science-quiz-data";
import { getQuizEnrichment } from "@/lib/quiz-enrichment";
import QuizEngine from "@/components/QuizEngine";
import QuizQuestionList from "@/components/QuizQuestionList";
import HeroImage from "@/components/HeroImage";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ grade: string; week: string }>;
}

export async function generateStaticParams() {
  return getAllScienceGradeWeekPairs().map((p) => ({
    grade: String(p.grade),
    week: String(p.week),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { grade: g, week: w } = await params;
  const grade = parseInt(g);
  const weekNum = parseInt(w);
  const weekData = getScienceWeek(grade, weekNum);

  if (!weekData) return { title: "Quiz Not Found" };

  const topic = weekData.topic || "Science Practice";
  const enrichment = getQuizEnrichment("science", grade, weekNum);
  const metaDesc = enrichment
    ? `${enrichment.introduction.split('.').slice(0, 2).join('.')}. ${weekData.questions.length} free practice questions with instant scoring.`
    : `Take this free Grade ${grade} Science quiz on ${topic}. ${weekData.questions.length} multiple-choice questions with instant scoring. Perfect for students aged ${SCIENCE_GRADE_INFO[grade]?.ageRange}.`;
  return {
    title: `${topic} Quiz – Grade ${grade} Science Practice`,
    description: metaDesc,
    keywords: [
      `grade ${grade} science quiz week ${weekNum}`,
      `${topic.toLowerCase()} quiz`,
      `class ${grade} science practice`,
      `science ${topic.toLowerCase()} questions`,
      `CBSE science grade ${grade}`,
    ],
    alternates: { canonical: `https://www.thepractiseground.in/quiz/science/${grade}/${weekNum}` },
  };
}

export default async function ScienceQuizPage({ params }: Props) {
  const { grade: g, week: w } = await params;
  const grade = parseInt(g);
  const weekNum = parseInt(w);

  if (!SCIENCE_GRADES.includes(grade as typeof SCIENCE_GRADES[number])) notFound();

  const weekData = getScienceWeek(grade, weekNum);
  if (!weekData || weekData.questions.length === 0) notFound();

  const info = SCIENCE_GRADE_INFO[grade];
  const allWeeks = getScienceGradeWeeks(grade);
  const currentIdx = allWeeks.findIndex((wk) => wk.week === weekNum);
  const prevWeek = currentIdx > 0 ? allWeeks[currentIdx - 1] : null;
  const nextWeek = currentIdx < allWeeks.length - 1 ? allWeeks[currentIdx + 1] : null;

  const topic = weekData.topic || "Science Practice";
  const enrichment = getQuizEnrichment("science", grade, weekNum);

  return (
    <div className="bg-theme-gradient min-h-screen pb-16">
      {/* Breadcrumb & Header */}
      <section className="relative overflow-hidden py-8">
        <HeroImage
          src="/images/og/og-science.png"
          alt="Science quiz illustration"
          overlay={0.65}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-white/70 text-sm mb-3">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/quiz/science" className="hover:text-white">Science</Link>
            <span className="mx-2">/</span>
            <Link href={`/quiz/science/${grade}`} className="hover:text-white">Grade {grade}</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Week {weekNum}</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">{topic}</h1>
          <p className="text-white/80">
            Science &middot; Grade {grade} &middot; Week {weekNum} &middot; {weekData.questions.length} questions
          </p>
        </div>
      </section>

      {/* Topic Introduction & Learning Objectives */}
      {enrichment && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6">
          <div className="bg-white rounded-xl border border-gray-100 p-5 sm:p-6 shadow-sm">
            <p className="text-gray-700 leading-relaxed">{enrichment.introduction}</p>
            {enrichment.learningObjectives.length > 0 && (
              <div className="mt-4">
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">What you&apos;ll practise</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {enrichment.learningObjectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Server-rendered question list for SEO */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <QuizQuestionList
          questions={weekData.questions}
          topic={topic}
          subject="Science"
          grade={grade}
        />
      </div>

      {/* Quiz Engine */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <QuizEngine
          questions={weekData.questions}
          grade={grade}
          week={weekNum}
          topic={topic}
          subject="Science"
          subjectPath="science"
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
          {prevWeek ? (
            <Link href={`/quiz/science/${grade}/${prevWeek.week}`} className="text-brand-navy hover:text-purple-600 transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Week {prevWeek.week}: {prevWeek.topic}
            </Link>
          ) : <div />}
          {nextWeek ? (
            <Link href={`/quiz/science/${grade}/${nextWeek.week}`} className="text-brand-navy hover:text-purple-600 transition-colors flex items-center gap-2">
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
            name: `Grade ${grade} Science Quiz - Week ${weekNum}: ${topic}`,
            about: {
              "@type": "Thing",
              name: topic,
            },
            educationalLevel: `Grade ${grade}`,
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
              { "@type": "ListItem", position: 2, name: "Science", item: "https://www.thepractiseground.in/quiz/science" },
              { "@type": "ListItem", position: 3, name: `Grade ${grade}`, item: `https://www.thepractiseground.in/quiz/science/${grade}` },
              { "@type": "ListItem", position: 4, name: `Week ${weekNum}`, item: `https://www.thepractiseground.in/quiz/science/${grade}/${weekNum}` },
            ],
          }),
        }}
      />
    </div>
  );
}
