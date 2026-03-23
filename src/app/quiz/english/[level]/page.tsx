import Link from "next/link";
import { notFound } from "next/navigation";
import { CEFR_LEVELS, CEFR_LEVEL_INFO, getCefrLevelWeeks } from "@/lib/cefr-quiz-data";
import HeroImage from "@/components/HeroImage";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ level: string }>;
}

export async function generateStaticParams() {
  return CEFR_LEVELS.map((l) => ({ level: l }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { level } = await params;
  const info = CEFR_LEVEL_INFO[level.toLowerCase()];
  if (!info) return { title: "Level Not Found" };

  const weeks = getCefrLevelWeeks(level);
  const totalQ = weeks.reduce((s, w) => s + w.questions.length, 0);

  const levelLabel = info.label; // e.g. "A2" or "B1"
  const levelName = info.fullName.toLowerCase(); // e.g. "elementary" or "intermediate"
  return {
    title: `Free ${levelLabel} English Test Online — ${totalQ}+ ${info.fullName} Grammar Questions`,
    description: `Take the free ${levelLabel} (${info.fullName}) English grammar test. ${weeks.length} topic quizzes, ${totalQ}+ questions with instant scoring. Perfect for ${levelName} ESL learners preparing for Cambridge, IELTS, or self-study.`,
    keywords: [
      `free ${levelLabel} english test`,
      `${levelLabel} english grammar test online`,
      `${levelName} english quiz`,
      `${levelLabel} level english practice`,
      `${levelLabel} english grammar exercises free`,
      `test my english level ${levelLabel}`,
      `${levelName} grammar quiz online`,
      `CEFR ${levelLabel} english test`,
      `${levelLabel} english practice for ESL`,
    ],
    alternates: { canonical: `https://www.thepractiseground.in/quiz/english/${level.toLowerCase()}` },
  };
}

export default async function CefrLevelPage({ params }: Props) {
  const { level: rawLevel } = await params;
  const level = rawLevel.toLowerCase();

  if (!CEFR_LEVELS.includes(level as (typeof CEFR_LEVELS)[number])) notFound();

  const info = CEFR_LEVEL_INFO[level];
  const weeks = getCefrLevelWeeks(level);
  const totalQ = weeks.reduce((s, w) => s + w.questions.length, 0);

  // Find other level for cross-link
  const otherLevel = CEFR_LEVELS.find((l) => l !== level);
  const otherInfo = otherLevel ? CEFR_LEVEL_INFO[otherLevel] : null;

  return (
    <div className="bg-theme-gradient min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-12 sm:py-16">
        <HeroImage
          src="/images/og/og-blog-grammar.png"
          alt="English level quiz illustration"
          overlay={0.6}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-white/70 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/quiz/english" className="hover:text-white">English Levels</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{info.label} {info.fullName}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            {info.label} — {info.fullName}
          </h1>
          <p className="text-white/90 text-lg mb-2">
            {weeks.length} weekly quizzes &middot; {totalQ.toLocaleString()} questions
          </p>
          <p className="text-white/70 max-w-2xl mx-auto mb-6 text-sm">
            {info.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={`/quiz/english/${level}/1`}
              className={`${info.bgColor} text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity`}
            >
              Start Week 1: {weeks[0]?.topic}
            </Link>
            <button
              className="border-2 border-white text-white font-bold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors cursor-default"
              title="Share on WhatsApp"
              onClick={undefined}
            >
              {totalQ.toLocaleString()}+ Free Questions
            </button>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white rounded-xl border border-gray-100 p-5 sm:p-6 shadow-sm">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Who is {info.label} for?</h2>
          <p className="text-gray-700 leading-relaxed mb-3">{info.targetAudience}.</p>
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Topics covered:</span> {info.skills}
          </p>
        </div>
      </section>

      {/* Week Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-xl font-bold text-brand-navy mb-6">All {weeks.length} Weeks</h2>
        {weeks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {weeks.map((w) => (
              <Link
                key={w.week}
                href={`/quiz/english/${level}/${w.week}`}
                className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className={`w-10 h-10 rounded-lg bg-gradient-to-br ${info.color} text-white text-sm font-bold flex items-center justify-center`}>
                    {w.week}
                  </span>
                  <div>
                    <span className="text-xs text-gray-400">Week {w.week}</span>
                    <h3 className="text-sm font-semibold text-gray-800 leading-tight group-hover:text-brand-orange transition-colors">
                      {w.topic}
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-gray-500">{w.questions.length} questions</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">📚</div>
            <h2 className="text-2xl font-bold text-brand-navy mb-3">Coming Soon</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              We&apos;re working on {info.label} level quizzes. Check back soon!
            </p>
          </div>
        )}
      </section>

      {/* Try Other Level */}
      {otherLevel && otherInfo && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-8">
          <div className={`bg-gradient-to-r ${otherInfo.color} rounded-2xl p-6 sm:p-8 text-white`}>
            <h2 className="text-xl font-bold mb-2">Try {otherInfo.label} ({otherInfo.fullName})</h2>
            <p className="text-white/80 text-sm mb-4">{otherInfo.targetAudience}.</p>
            <Link
              href={`/quiz/english/${otherLevel}`}
              className="inline-block bg-white text-gray-800 font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm"
            >
              Browse {otherInfo.label} Quizzes →
            </Link>
          </div>
        </section>
      )}

      {/* SEO Content */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-navy mb-4">
            About CEFR {info.label} ({info.fullName}) English Practice
          </h2>
          <p className="text-gray-600 mb-4">
            Our {info.label} {info.fullName} English quizzes follow the Common European Framework of Reference for Languages (CEFR), the international standard for measuring language proficiency. Each week features 25 multiple-choice questions focusing on a specific grammar topic at the {info.label} level.
          </p>
          <p className="text-gray-600 mb-4">
            With {weeks.length} weeks of content and {totalQ.toLocaleString()}+ questions, learners get comprehensive practice covering {info.skills.toLowerCase()}. All quizzes are free, require no sign-up, and provide instant scoring.
          </p>
          <p className="text-gray-600">
            These quizzes are suitable for students preparing for Cambridge exams (KET, PET), IELTS, or anyone wanting to improve their English grammar at the {info.fullName.toLowerCase()} level.
          </p>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: `CEFR ${info.label} (${info.fullName}) English Quizzes`,
            description: `Free ${info.label} ${info.fullName} English grammar quizzes. ${weeks.length} weekly quizzes with ${totalQ}+ questions covering ${info.skills.toLowerCase()}.`,
            provider: { "@type": "Organization", name: "The Practise Ground", url: "https://www.thepractiseground.in" },
            educationalLevel: `CEFR ${info.label}`,
            isAccessibleForFree: true,
            inLanguage: "en",
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: "online",
              courseWorkload: `${weeks.length} weeks`,
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
              { "@type": "ListItem", position: 2, name: "English Levels", item: "https://www.thepractiseground.in/quiz/english" },
              { "@type": "ListItem", position: 3, name: `${info.label} ${info.fullName}`, item: `https://www.thepractiseground.in/quiz/english/${level}` },
            ],
          }),
        }}
      />
    </div>
  );
}
