import Link from "next/link";
import type { Metadata } from "next";
import { THIRD_LANGUAGES, LANG_INFO, getLangClasses, getClassWeeks } from "@/lib/third-language-data";
import HeroImage from "@/components/HeroImage";

export const metadata: Metadata = {
  title: "Free Third-Language Grammar Quizzes — Hindi & Kannada (CBSE R3, NEP) | The Practise Ground",
  description:
    "Free CBSE third-language (R3) grammar practice under the NEP three-language formula. Class 6 Hindi and Kannada quizzes with instant scoring — no sign-up.",
  keywords: [
    "cbse third language quiz",
    "nep three language formula practice",
    "class 6 hindi grammar quiz",
    "class 6 kannada grammar quiz",
    "r3 language practice cbse",
    "hindi third language quiz",
    "kannada third language quiz",
    "free indian language grammar quiz",
  ],
  alternates: { canonical: "https://www.thepractiseground.in/third-language" },
  openGraph: {
    title: "Free Third-Language Grammar Quizzes — Hindi & Kannada (CBSE R3)",
    description:
      "CBSE / NEP third-language grammar practice. Class 6 Hindi and Kannada quizzes, instant scoring, no sign-up.",
    url: "https://www.thepractiseground.in/third-language",
    siteName: "The Practise Ground",
    images: [{ url: "/images/og/og-languages.png", width: 1200, height: 630 }],
  },
};

export default function ThirdLanguageHubPage() {
  const langs = THIRD_LANGUAGES.map((lang) => {
    const info = LANG_INFO[lang];
    const classes = getLangClasses(lang);
    const totalQ = classes.reduce(
      (s, c) => s + getClassWeeks(lang, c).reduce((a, w) => a + w.questions.length, 0),
      0,
    );
    const totalWeeks = classes.reduce((s, c) => s + getClassWeeks(lang, c).length, 0);
    return { lang, info, classes, totalQ, totalWeeks };
  });

  return (
    <div className="bg-theme-gradient min-h-screen">
      <section className="relative overflow-hidden py-12 sm:py-16">
        <HeroImage src="/images/og/og-languages.png" alt="Indian third-language grammar quizzes" overlay={0.6} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-white/70 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Third Language</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Third-Language Grammar Practice
          </h1>
          <p className="text-white/90 text-lg mb-2">
            CBSE R3 &middot; NEP three-language formula &middot; free MCQ practice
          </p>
          <p className="text-white/70 max-w-2xl mx-auto text-sm">
            Curriculum-aligned grammar quizzes for the languages the new three-language formula puts in front of students. Instant scoring, no sign-up.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {langs.map(({ lang, info, totalQ, totalWeeks }) => (
            <Link
              key={lang}
              href={`/third-language/${lang}`}
              className={`group bg-gradient-to-br ${info.color} rounded-2xl p-6 sm:p-8 text-white shadow-sm hover:shadow-md hover:scale-[1.01] transition-all`}
            >
              <div className="text-3xl mb-3">{info.flag} <span className="align-middle">{info.native}</span></div>
              <h2 className="text-2xl font-bold mb-1">{info.name}</h2>
              <p className="text-white/85 text-sm mb-4">{info.description}</p>
              <p className="text-white/90 text-sm font-semibold">
                {totalWeeks} weekly quizzes &middot; {totalQ} questions
              </p>
              <span className="inline-block mt-4 bg-white/90 text-gray-800 font-semibold px-4 py-2 rounded-lg text-sm group-hover:bg-white transition-colors">
                Browse {info.name} quizzes →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-navy mb-4">About third-language (R3) practice</h2>
          <p className="text-gray-600 mb-4">
            Under the National Education Policy, CBSE schools follow a three-language formula in which two of the three languages must be Indian. From the 2026-27 session a third language (R3) is compulsory from Class 6, phased year by year toward full Class-10 assessment.
          </p>
          <p className="text-gray-600">
            These free quizzes give students focused, curriculum-aligned grammar practice — one grammar topic per week — with instant scoring and explanations. No sign-up required.
          </p>
        </div>
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
            ],
          }),
        }}
      />
    </div>
  );
}
