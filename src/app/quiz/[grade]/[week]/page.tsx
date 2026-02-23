import { notFound } from "next/navigation";
import Link from "next/link";
import { GRADES, GRADE_INFO, getGradeWeeks, getWeek, getAllGradeWeekPairs } from "@/lib/quiz-data";
import QuizEngine from "@/components/QuizEngine";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ grade: string; week: string }>;
}

export async function generateStaticParams() {
  return getAllGradeWeekPairs().map((p) => ({
    grade: String(p.grade),
    week: String(p.week),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { grade: g, week: w } = await params;
  const grade = parseInt(g);
  const weekNum = parseInt(w);
  const weekData = getWeek(grade, weekNum);

  if (!weekData) return { title: "Quiz Not Found" };

  const topic = weekData.topic || "English Practice";
  return {
    title: `Grade ${grade} Week ${weekNum}: ${topic} - English Quiz`,
    description: `Take this free Grade ${grade} English quiz on ${topic}. ${weekData.questions.length} multiple-choice questions with instant scoring and explanations. Perfect for students aged ${GRADE_INFO[grade]?.ageRange}.`,
    keywords: [
      `grade ${grade} english quiz week ${weekNum}`,
      `${topic.toLowerCase()} quiz`,
      `class ${grade} english practice`,
      `english ${topic.toLowerCase()} questions`,
    ],
    alternates: { canonical: `https://www.thepractiseground.in/quiz/${grade}/${weekNum}` },
  };
}

export default async function QuizPage({ params }: Props) {
  const { grade: g, week: w } = await params;
  const grade = parseInt(g);
  const weekNum = parseInt(w);

  if (!GRADES.includes(grade as typeof GRADES[number])) notFound();

  const weekData = getWeek(grade, weekNum);
  if (!weekData || weekData.questions.length === 0) notFound();

  const info = GRADE_INFO[grade];
  const allWeeks = getGradeWeeks(grade);
  const currentIdx = allWeeks.findIndex((wk) => wk.week === weekNum);
  const prevWeek = currentIdx > 0 ? allWeeks[currentIdx - 1] : null;
  const nextWeek = currentIdx < allWeeks.length - 1 ? allWeeks[currentIdx + 1] : null;

  const topic = weekData.topic || "English Practice";

  return (
    <div className="bg-theme-gradient min-h-screen pb-16">
      {/* Breadcrumb & Header */}
      <section className={`bg-gradient-to-r ${info.color} py-8`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-white/70 text-sm mb-3">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href={`/quiz/${grade}`} className="hover:text-white">Grade {grade}</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Week {weekNum}</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">{topic}</h1>
          <p className="text-white/80">
            Grade {grade} &middot; Week {weekNum} &middot; {weekData.questions.length} questions
          </p>
        </div>
      </section>

      {/* Quiz Engine */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <QuizEngine
          questions={weekData.questions}
          grade={grade}
          week={weekNum}
          topic={topic}
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
          {prevWeek ? (
            <Link href={`/quiz/${grade}/${prevWeek.week}`} className="text-brand-navy hover:text-brand-orange transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Week {prevWeek.week}: {prevWeek.topic}
            </Link>
          ) : <div />}
          {nextWeek ? (
            <Link href={`/quiz/${grade}/${nextWeek.week}`} className="text-brand-navy hover:text-brand-orange transition-colors flex items-center gap-2">
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
            name: `Grade ${grade} English Quiz - Week ${weekNum}: ${topic}`,
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
              { "@type": "ListItem", position: 2, name: `Grade ${grade}`, item: `https://www.thepractiseground.in/quiz/${grade}` },
              { "@type": "ListItem", position: 3, name: `Week ${weekNum}`, item: `https://www.thepractiseground.in/quiz/${grade}/${weekNum}` },
            ],
          }),
        }}
      />
    </div>
  );
}
