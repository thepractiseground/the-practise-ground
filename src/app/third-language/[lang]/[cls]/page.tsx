import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  LANG_INFO,
  THIRD_LANGUAGES,
  getLangClasses,
  getClassWeeks,
  getAllLangClassPairs,
  parseClassSlug,
  classSlug,
} from "@/lib/third-language-data";
import HeroImage from "@/components/HeroImage";

interface Props {
  params: Promise<{ lang: string; cls: string }>;
}

export async function generateStaticParams() {
  return getAllLangClassPairs().map((p) => ({ lang: p.lang, cls: classSlug(p.cls) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: rawLang, cls: clsSlug } = await params;
  const lang = rawLang.toLowerCase();
  const cls = parseClassSlug(clsSlug);
  const info = LANG_INFO[lang];
  if (!info) return { title: "Not Found" };
  const weeks = getClassWeeks(lang, cls);
  const totalQ = weeks.reduce((s, w) => s + w.questions.length, 0);
  return {
    title: `Free Class ${cls} ${info.name} Grammar Quiz — ${totalQ} Questions (CBSE Third Language)`,
    description: `Class ${cls} ${info.name} grammar practice: ${weeks.length} weekly quizzes, ${totalQ} multiple-choice questions with instant scoring. CBSE / NEP third-language aligned, no sign-up.`,
    keywords: [
      `class ${cls} ${info.name.toLowerCase()} grammar quiz`,
      `class ${cls} ${info.name.toLowerCase()} vyakarana mcq`,
      `${info.name.toLowerCase()} third language class ${cls}`,
      `cbse class ${cls} ${info.name.toLowerCase()} practice`,
      `free ${info.name.toLowerCase()} grammar test class ${cls}`,
    ],
    alternates: { canonical: `https://www.thepractiseground.in/third-language/${lang}/${classSlug(cls)}` },
  };
}

export default async function ThirdLanguageClassPage({ params }: Props) {
  const { lang: rawLang, cls: clsSlug } = await params;
  const lang = rawLang.toLowerCase();
  const cls = parseClassSlug(clsSlug);

  if (!THIRD_LANGUAGES.includes(lang as (typeof THIRD_LANGUAGES)[number])) notFound();
  if (!getLangClasses(lang).includes(cls)) notFound();

  const info = LANG_INFO[lang];
  const weeks = getClassWeeks(lang, cls);
  const totalQ = weeks.reduce((s, w) => s + w.questions.length, 0);

  return (
    <div className="bg-theme-gradient min-h-screen">
      <section className="relative overflow-hidden py-12 sm:py-16">
        <HeroImage src="/images/og/og-languages.png" alt={`Class ${cls} ${info.name} grammar quiz`} overlay={0.6} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-white/70 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/third-language" className="hover:text-white">Third Language</Link>
            <span className="mx-2">/</span>
            <Link href={`/third-language/${lang}`} className="hover:text-white">{info.name}</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Class {cls}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            {info.flag} Class {cls} {info.name} Grammar
          </h1>
          <p className="text-white/90 text-lg mb-2">
            {weeks.length} weekly quizzes &middot; {totalQ} questions
          </p>
          <p className="text-white/70 max-w-2xl mx-auto mb-6 text-sm">{info.description}</p>
          {weeks[0] && (
            <Link
              href={`/third-language/${lang}/${classSlug(cls)}/${weeks[0].week}`}
              className={`${info.bgColor} text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity inline-block`}
            >
              Start Week 1: {weeks[0].topic}
            </Link>
          )}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-xl font-bold text-brand-navy mb-6">All {weeks.length} Weeks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {weeks.map((w) => (
            <Link
              key={w.week}
              href={`/third-language/${lang}/${classSlug(cls)}/${w.week}`}
              className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className={`w-10 h-10 rounded-lg bg-gradient-to-br ${info.color} text-white text-sm font-bold flex items-center justify-center shrink-0`}>
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
      </section>

      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-navy mb-4">
            About Class {cls} {info.name} grammar practice
          </h2>
          <p className="text-gray-600 mb-4">
            These {weeks.length} weekly quizzes cover the core Class {cls} {info.name} grammar syllabus — {info.skills.toLowerCase()} — one topic per week, with {totalQ} multiple-choice questions in total. Every quiz is free, needs no sign-up, and gives instant scoring with the correct answer shown for each question.
          </p>
          <p className="text-gray-600">
            The questions are aligned to the CBSE three-language (R3) framework and are equally useful for state-board and NIOS students studying {info.name} at this level.
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: `Class ${cls} ${info.name} Grammar Quizzes`,
            description: `Free Class ${cls} ${info.name} grammar quizzes. ${weeks.length} weekly quizzes with ${totalQ} questions covering ${info.skills.toLowerCase()}.`,
            provider: { "@type": "Organization", name: "The Practise Ground", url: "https://www.thepractiseground.in" },
            educationalLevel: `Class ${cls}`,
            isAccessibleForFree: true,
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
              { "@type": "ListItem", position: 2, name: "Third Language", item: "https://www.thepractiseground.in/third-language" },
              { "@type": "ListItem", position: 3, name: info.name, item: `https://www.thepractiseground.in/third-language/${lang}` },
              { "@type": "ListItem", position: 4, name: `Class ${cls}`, item: `https://www.thepractiseground.in/third-language/${lang}/${classSlug(cls)}` },
            ],
          }),
        }}
      />
    </div>
  );
}
