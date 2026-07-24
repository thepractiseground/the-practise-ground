import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  LANG_INFO,
  THIRD_LANGUAGES,
  getLangClasses,
  getClassWeeks,
  getClassWeek,
  getAllLangClassWeekTriples,
  parseClassSlug,
  classSlug,
} from "@/lib/third-language-data";
import QuizEngine from "@/components/QuizEngine";
import QuizQuestionList from "@/components/QuizQuestionList";
import HeroImage from "@/components/HeroImage";

interface Props {
  params: Promise<{ lang: string; cls: string; week: string }>;
}

export async function generateStaticParams() {
  return getAllLangClassWeekTriples().map((t) => ({
    lang: t.lang,
    cls: classSlug(t.cls),
    week: String(t.week),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: rawLang, cls: clsSlug, week: w } = await params;
  const lang = rawLang.toLowerCase();
  const cls = parseClassSlug(clsSlug);
  const weekNum = parseInt(w);
  const info = LANG_INFO[lang];
  const weekData = getClassWeek(lang, cls, weekNum);
  if (!info || !weekData) return { title: "Quiz Not Found" };

  const topic = weekData.topic;
  const qCount = weekData.questions.length;
  return {
    title: `${topic} — Free Class ${cls} ${info.name} Grammar Quiz (${qCount} Questions)`,
    description: `Practice ${topic} with this free Class ${cls} ${info.name} grammar quiz. ${qCount} multiple-choice questions with instant scoring. CBSE / NEP third-language aligned, no sign-up.`,
    keywords: [
      `${topic.toLowerCase()} ${info.name.toLowerCase()} quiz`,
      `class ${cls} ${info.name.toLowerCase()} ${topic.toLowerCase()}`,
      `${info.name.toLowerCase()} grammar practice class ${cls}`,
      `cbse class ${cls} ${info.name.toLowerCase()} quiz`,
      `free ${info.name.toLowerCase()} grammar test`,
    ],
    alternates: { canonical: `https://www.thepractiseground.in/third-language/${lang}/${classSlug(cls)}/${weekNum}` },
  };
}

export default async function ThirdLanguageWeekPage({ params }: Props) {
  const { lang: rawLang, cls: clsSlug, week: w } = await params;
  const lang = rawLang.toLowerCase();
  const cls = parseClassSlug(clsSlug);
  const weekNum = parseInt(w);

  if (!THIRD_LANGUAGES.includes(lang as (typeof THIRD_LANGUAGES)[number])) notFound();
  if (!getLangClasses(lang).includes(cls)) notFound();

  const weekData = getClassWeek(lang, cls, weekNum);
  if (!weekData || weekData.questions.length === 0) notFound();

  const info = LANG_INFO[lang];
  const allWeeks = getClassWeeks(lang, cls);
  const currentIdx = allWeeks.findIndex((wk) => wk.week === weekNum);
  const prevWeek = currentIdx > 0 ? allWeeks[currentIdx - 1] : null;
  const nextWeek = currentIdx < allWeeks.length - 1 ? allWeeks[currentIdx + 1] : null;

  const topic = weekData.topic;
  const clsPath = classSlug(cls);

  return (
    <div className="bg-theme-gradient min-h-screen pb-16">
      <section className="relative overflow-hidden py-8">
        <HeroImage src="/images/og/og-languages.png" alt={`Class ${cls} ${info.name} grammar quiz`} overlay={0.65} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-white/70 text-sm mb-3">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/third-language" className="hover:text-white">Third Language</Link>
            <span className="mx-2">/</span>
            <Link href={`/third-language/${lang}`} className="hover:text-white">{info.name}</Link>
            <span className="mx-2">/</span>
            <Link href={`/third-language/${lang}/${clsPath}`} className="hover:text-white">Class {cls}</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Week {weekNum}</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">{topic}</h1>
          <p className="text-white/80">
            {info.name} &middot; Class {cls} &middot; Week {weekNum} &middot; {weekData.questions.length} questions
          </p>
        </div>
      </section>

      {/* Topic intro */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6">
        <div className="bg-white rounded-xl border border-gray-100 p-5 sm:p-6 shadow-sm">
          <p className="text-gray-700 leading-relaxed">
            This free quiz gives Class {cls} {info.name} learners focused practice on <strong>{topic}</strong>. Work through {weekData.questions.length} multiple-choice questions, get an instant score, and see the correct answer for each one. It is aligned to the CBSE three-language (R3) framework and suits state-board and NIOS students too.
          </p>
        </div>
      </div>

      {/* Server-rendered question list for SEO */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <QuizQuestionList
          questions={weekData.questions}
          topic={topic}
          subject={info.name}
          grade={parseInt(cls)}
        />
      </div>

      {/* Quiz Engine */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <QuizEngine
          questions={weekData.questions}
          grade={parseInt(cls)}
          week={weekNum}
          topic={topic}
          subject={`${info.name} (Class ${cls})`}
          subjectPath={`third-language/${lang}/${clsPath}`}
          quizLabel={`Class ${cls} ${info.name}`}
          sharePath={`/third-language/${lang}/${clsPath}/${weekNum}`}
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200 gap-4">
          {prevWeek ? (
            <Link href={`/third-language/${lang}/${clsPath}/${prevWeek.week}`} className="text-brand-navy hover:text-brand-orange transition-colors flex items-center gap-2">
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Week {prevWeek.week}: {prevWeek.topic}
            </Link>
          ) : <div />}
          {nextWeek ? (
            <Link href={`/third-language/${lang}/${clsPath}/${nextWeek.week}`} className="text-brand-navy hover:text-brand-orange transition-colors flex items-center gap-2 text-right">
              Week {nextWeek.week}: {nextWeek.topic}
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : <div />}
        </div>

        <div className="mt-8 text-center">
          <Link href={`/third-language/${lang}/${clsPath}`} className="text-sm text-brand-navy hover:text-brand-orange transition-colors">
            ← Back to all Class {cls} {info.name} weeks
          </Link>
        </div>
      </div>

      {/* Quiz Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Quiz",
            name: `Class ${cls} ${info.name} Quiz - Week ${weekNum}: ${topic}`,
            about: { "@type": "Thing", name: topic },
            educationalLevel: `Class ${cls}`,
            numberOfQuestions: weekData.questions.length,
            provider: { "@type": "Organization", name: "The Practise Ground", url: "https://www.thepractiseground.in" },
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
              { "@type": "ListItem", position: 2, name: "Third Language", item: "https://www.thepractiseground.in/third-language" },
              { "@type": "ListItem", position: 3, name: info.name, item: `https://www.thepractiseground.in/third-language/${lang}` },
              { "@type": "ListItem", position: 4, name: `Class ${cls}`, item: `https://www.thepractiseground.in/third-language/${lang}/${clsPath}` },
              { "@type": "ListItem", position: 5, name: `Week ${weekNum}`, item: `https://www.thepractiseground.in/third-language/${lang}/${clsPath}/${weekNum}` },
            ],
          }),
        }}
      />
    </div>
  );
}
