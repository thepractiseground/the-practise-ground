import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { THIRD_LANGUAGES, LANG_INFO, getLangClasses, getClassWeeks, classSlug } from "@/lib/third-language-data";
import HeroImage from "@/components/HeroImage";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return THIRD_LANGUAGES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const info = LANG_INFO[lang.toLowerCase()];
  if (!info) return { title: "Language Not Found" };
  return {
    title: `Free ${info.name} Grammar Quizzes — CBSE Third Language (NEP) | The Practise Ground`,
    description: `${info.description} Free multiple-choice practice with instant scoring, no sign-up.`,
    keywords: [
      `${info.name.toLowerCase()} grammar quiz`,
      `${info.name.toLowerCase()} third language quiz cbse`,
      `class 6 ${info.name.toLowerCase()} grammar practice`,
      `${info.name.toLowerCase()} vyakarana mcq`,
      `cbse ${info.name.toLowerCase()} r3 practice`,
      `free ${info.name.toLowerCase()} quiz online`,
    ],
    alternates: { canonical: `https://www.thepractiseground.in/third-language/${lang.toLowerCase()}` },
  };
}

export default async function ThirdLanguageHubPage({ params }: Props) {
  const { lang: rawLang } = await params;
  const lang = rawLang.toLowerCase();
  if (!THIRD_LANGUAGES.includes(lang as (typeof THIRD_LANGUAGES)[number])) notFound();

  const info = LANG_INFO[lang];
  const classes = getLangClasses(lang);

  return (
    <div className="bg-theme-gradient min-h-screen">
      <section className="relative overflow-hidden py-12 sm:py-16">
        <HeroImage src="/images/og/og-languages.png" alt={`${info.name} grammar quiz practice`} overlay={0.6} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-white/70 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/third-language" className="hover:text-white">Third Language</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{info.name}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            {info.flag} {info.name} <span className="text-white/80">({info.native})</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-sm">{info.description}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white rounded-xl border border-gray-100 p-5 sm:p-6 shadow-sm">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Who is this for?</h2>
          <p className="text-gray-700 leading-relaxed mb-3">{info.targetAudience}.</p>
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Topics covered:</span> {info.skills}
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 pb-12">
        <h2 className="text-xl font-bold text-brand-navy mb-6">Choose your class</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {classes.map((c) => {
            const weeks = getClassWeeks(lang, c);
            const totalQ = weeks.reduce((s, w) => s + w.questions.length, 0);
            return (
              <Link
                key={c}
                href={`/third-language/${lang}/${classSlug(c)}`}
                className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all border border-gray-100"
              >
                <span className={`inline-flex w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} text-white text-lg font-bold items-center justify-center mb-3`}>
                  {c}
                </span>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-brand-orange transition-colors">
                  Class {c}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{weeks.length} weekly quizzes &middot; {totalQ} questions</p>
              </Link>
            );
          })}
        </div>
        <p className="text-sm text-gray-500 mt-6">More classes are being added. Class 6 grammar is live now.</p>
      </section>

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
            ],
          }),
        }}
      />
    </div>
  );
}
