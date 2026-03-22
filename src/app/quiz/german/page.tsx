import Link from "next/link";
import type { Metadata } from "next";
import { GERMAN_CEFR_LEVELS, GERMAN_LEVEL_INFO, getGermanLevelWeeks } from "@/lib/cefr-german-quiz-data";
import HeroImage from "@/components/HeroImage";

export const metadata: Metadata = {
  title: "German Level Quizzes (CEFR A1–C1) | Free Grammar Practice | The Practise Ground",
  description:
    "Free German grammar quizzes organised by CEFR level. 1,950+ questions for A1 Beginner, B1 Intermediate, and C1 Advanced learners. No sign-up required.",
  keywords: [
    "CEFR german quiz",
    "A1 german test",
    "B1 german test",
    "C1 german test",
    "german level test free",
    "german grammar quiz by level",
    "beginner german quiz",
    "intermediate german quiz",
    "advanced german quiz",
    "CEFR grammar practice german"
  ],
  openGraph: {
    title: "German Level Quizzes (CEFR A1–C1) | The Practise Ground",
    description:
      "Free German grammar quizzes organised by CEFR proficiency level. 1,950+ questions across A1, B1, and C1 levels.",
    url: "https://www.thepractiseground.in/quiz/german",
    siteName: "The Practise Ground",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://www.thepractiseground.in/quiz/german",
  },
};


export default function GermanLevelLandingPage() {
  return (
    <div className="bg-theme-gradient min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <HeroImage
          src="/images/og/og-blog-grammar.png"
          alt="German level quizzes illustration"
          overlay={0.6}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            🇩🇪 German Level Quizzes
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-4">
            Practice German grammar at your level. Quizzes organised by CEFR proficiency framework — from Beginner to Advanced.
          </p>
          <p className="text-white/60 text-sm max-w-xl mx-auto mb-8">
            CEFR (Common European Framework of Reference) is the international standard for measuring language ability, used by schools and universities worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quiz/german/a1"
              className="bg-white text-yellow-700 font-bold px-6 py-3 rounded-xl hover:bg-yellow-50 transition-colors"
            >
              Start A1 (Beginner)
            </Link>
            <Link
              href="/quiz/german/b1"
              className="border-2 border-white text-white font-bold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              Start B1 (Intermediate)
            </Link>
            <Link
              href="/quiz/german/c1"
              className="border-2 border-white text-white font-bold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              Start C1 (Advanced)
            </Link>
          </div>
        </div>
      </section>

      {/* Available Level Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GERMAN_CEFR_LEVELS.map((level) => {
            const info = GERMAN_LEVEL_INFO[level];
            const weeks = getGermanLevelWeeks(level);
            const totalQ = weeks.reduce((s, w) => s + w.questions.length, 0);
            return (
              <Link
                key={level}
                href={`/quiz/german/${level}`}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className={`bg-gradient-to-r ${info.color} px-6 py-6 text-white`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">🇩🇪</span>
                    <div>
                      <span className="text-sm font-medium opacity-80">CEFR Level</span>
                      <h2 className="text-2xl font-bold group-hover:underline">
                        {info.label} — {info.fullName}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{info.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-700 mb-4">
                    <span className="font-semibold">{weeks.length} weeks</span>
                    <span>&middot;</span>
                    <span className="font-semibold">{totalQ.toLocaleString()} questions</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-4">
                    <span className="font-semibold">Topics:</span> {info.skills}
                  </p>
                  <div className={`${info.bgColor} text-white text-center py-3 rounded-xl text-sm font-semibold group-hover:opacity-90 transition-opacity`}>
                    Start Practising →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CEFR Explanation */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy text-center mb-3">
          What is CEFR?
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          The Common European Framework of Reference for Languages (CEFR) is the international standard for measuring language ability, used by schools and universities worldwide. It divides proficiency into six levels — A1 through C2. Our German quizzes cover A1 (Beginner), B1 (Intermediate), and C1 (Advanced).
        </p>
      </section>

      {/* Who Is This For */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy text-center mb-10">
          Who Are These Quizzes For?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🌍", title: "International Students", desc: "Preparing for Goethe-Zertifikat, TestDaF, or other German exams aligned with CEFR levels" },
            { icon: "📚", title: "German Learners", desc: "Students learning German as a second or foreign language at any age" },
            { icon: "🎓", title: "Self-Study Learners", desc: "Anyone wanting to assess and improve their German grammar level independently" },
            { icon: "🆓", title: "100% Free", desc: "No sign-up, no payment — just open and start practising at your level" }
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-brand-navy mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Also Try Other Quizzes */}
      <section className="bg-gradient-to-r from-brand-navy to-blue-800 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Explore More Language Quizzes
          </h2>
          <p className="text-blue-200 mb-8">
            We also have CEFR-aligned quizzes for other languages, plus 23,400+ grade-based questions across English, Maths, and Science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link href="/quiz/english" className="bg-brand-orange text-white font-bold px-8 py-3 rounded-xl hover:opacity-85 transition-all">
              English (CEFR)
            </Link>
            <Link href="/quiz/spanish" className="bg-red-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-600 transition-colors">
              Spanish (CEFR)
            </Link>
            <Link href="/quiz/french" className="bg-blue-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-600 transition-colors">
              French (CEFR)
            </Link>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "German Level Quizzes (CEFR) - The Practise Ground",
            description:
              "Free German grammar quizzes organised by CEFR proficiency level. 1,950+ questions across A1 Beginner, B1 Intermediate, and C1 Advanced.",
            url: "https://www.thepractiseground.in/quiz/german",
            provider: {
              "@type": "Organization",
              name: "The Practise Ground",
              url: "https://www.thepractiseground.in",
            },
          }),
        }}
      />
    </div>
  );
}
