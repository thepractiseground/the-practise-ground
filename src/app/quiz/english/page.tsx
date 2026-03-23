import Link from "next/link";
import type { Metadata } from "next";
import { CEFR_LEVELS, CEFR_LEVEL_INFO, getCefrLevelWeeks } from "@/lib/cefr-quiz-data";
import HeroImage from "@/components/HeroImage";

export const metadata: Metadata = {
  title: "Free English Grammar Test Online — A2 & B1 Level Practice | The Practise Ground",
  description:
    "Test your English grammar level free — 1,300+ questions for Elementary (A2) and Intermediate (B1) learners. Instant scores, no sign-up. Aligned with CEFR international standards.",
  keywords: [
    "free english grammar test online",
    "english level test free",
    "A2 english test online",
    "B1 english test online",
    "english grammar quiz free",
    "test my english level",
    "elementary english grammar test",
    "intermediate english grammar quiz",
    "english proficiency test free",
    "CEFR english test",
    "english grammar practice online",
    "english quiz for ESL students",
  ],
  openGraph: {
    title: "Free English Grammar Test — A2 & B1 Level | The Practise Ground",
    description:
      "1,300+ free English grammar questions for Elementary and Intermediate learners. Instant scoring, no sign-up. CEFR-aligned.",
    url: "https://www.thepractiseground.in/quiz/english",
    siteName: "The Practise Ground",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://www.thepractiseground.in/quiz/english",
  },
};


export default function EnglishLevelLandingPage() {
  return (
    <div className="bg-theme-gradient min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <HeroImage
          src="/images/og/og-blog-grammar.png"
          alt="English level quizzes illustration"
          overlay={0.6}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            English Level Quizzes
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-4">
            Practice English grammar at your level. Quizzes organised by CEFR proficiency framework — from Elementary to Intermediate.
          </p>
          <p className="text-white/60 text-sm max-w-xl mx-auto mb-8">
            CEFR (Common European Framework of Reference) is the international standard for measuring language ability, used by schools and universities worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quiz/english/a2"
              className="bg-white text-emerald-700 font-bold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors"
            >
              Start A2 (Elementary)
            </Link>
            <Link
              href="/quiz/english/b1"
              className="border-2 border-white text-white font-bold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              Start B1 (Intermediate)
            </Link>
          </div>
        </div>
      </section>

      {/* Available Level Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CEFR_LEVELS.map((level) => {
            const info = CEFR_LEVEL_INFO[level];
            const weeks = getCefrLevelWeeks(level);
            const totalQ = weeks.reduce((s, w) => s + w.questions.length, 0);
            return (
              <Link
                key={level}
                href={`/quiz/english/${level}`}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className={`bg-gradient-to-r ${info.color} px-6 py-6 text-white`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">📝</span>
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
          The Common European Framework of Reference for Languages (CEFR) is the international standard for measuring language ability, used by schools and universities worldwide. It divides proficiency into six levels — A1 through C2. Our English quizzes currently cover A2 (Elementary) and B1 (Intermediate).
        </p>
      </section>

      {/* Who Is This For */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy text-center mb-10">
          Who Are These Quizzes For?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🌍", title: "International Students", desc: "Preparing for Cambridge, IELTS, or other English exams aligned with CEFR levels" },
            { icon: "📚", title: "ESL/EFL Learners", desc: "Students learning English as a second or foreign language at any age" },
            { icon: "🎓", title: "Self-Study Learners", desc: "Anyone wanting to assess and improve their English grammar level independently" },
            { icon: "🆓", title: "100% Free", desc: "No sign-up, no payment — just open and start practising at your level" },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-brand-navy mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Also Try Grade-Based Quizzes */}
      <section className="bg-gradient-to-r from-brand-navy to-blue-800 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Prefer Grade-Based Quizzes?
          </h2>
          <p className="text-blue-200 mb-8">
            We also have 23,400+ questions organised by school grade (5-10) across English, Maths, and Science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quiz/8"
              className="bg-brand-orange text-white font-bold px-8 py-3 rounded-xl hover:opacity-85 transition-all"
            >
              English by Grade
            </Link>
            <Link
              href="/quiz/maths/8"
              className="bg-emerald-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-emerald-600 transition-colors"
            >
              Maths Quizzes
            </Link>
            <Link
              href="/quiz/science/8"
              className="bg-purple-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-purple-700 transition-colors"
            >
              Science Quizzes
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
            name: "English Level Quizzes (CEFR) - The Practise Ground",
            description:
              "Free English grammar quizzes organised by CEFR proficiency level. 1,300+ questions across A2 Elementary and B1 Intermediate.",
            url: "https://www.thepractiseground.in/quiz/english",
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
