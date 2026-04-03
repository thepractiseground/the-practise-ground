import Link from "next/link";
import type { Metadata } from "next";
import { MATHS_HIGHER_GRADES, MATHS_HIGHER_GRADE_INFO, getMathsHigherGradeWeeks } from "@/lib/maths-higher-quiz-data";
import HeroImage from "@/components/HeroImage";

export const metadata: Metadata = {
  title: "Free Maths Higher Quizzes for Grades 11-12 - The Practise Ground",
  description:
    "Free Maths Higher quizzes for Grades 11-12. Practice calculus, algebra, trigonometry, vectors and more with weekly MCQs. No sign-up required!",
  keywords: [
    "maths higher quiz",
    "free maths higher quiz",
    "class 11 maths quiz",
    "class 12 maths quiz",
    "CBSE maths practice",
    "maths MCQ",
    "online maths quiz for students",
    "grade 11 to 12 maths questions",
    "calculus quiz",
    "algebra quiz",
  ],
  alternates: { canonical: "https://www.thepractiseground.in/quiz/maths-higher" },
};

export default function MathsHigherLandingPage() {
  const totalQuestions = MATHS_HIGHER_GRADES.reduce((sum, g) => {
    const weeks = getMathsHigherGradeWeeks(g);
    return sum + weeks.reduce((s, w) => s + w.questions.length, 0);
  }, 0);

  const totalWeeks = MATHS_HIGHER_GRADES.reduce((sum, g) => {
    return sum + getMathsHigherGradeWeeks(g).length;
  }, 0);

  return (
    <div className="bg-theme-gradient min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-12 sm:py-16">
        <HeroImage
          src="/images/og/og-maths.png"
          alt="Maths Higher quizzes illustration"
          overlay={0.55}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-white/70 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Maths Higher Quizzes</span>
          </nav>
          <div className="text-5xl mb-4">📐</div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Maths Higher Quizzes
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-2">
            Free interactive Maths Higher quizzes for Grades 11 to 12. Practice calculus, algebra, trigonometry, vectors and more!
          </p>
          <p className="text-white/70">
            {totalQuestions.toLocaleString()}+ questions &middot; {MATHS_HIGHER_GRADES.length} grades &middot; {totalWeeks} weeks of content
          </p>
        </div>
      </section>

      {/* Grade Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy text-center mb-8">Select Your Grade</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MATHS_HIGHER_GRADES.map((grade) => {
            const info = MATHS_HIGHER_GRADE_INFO[grade];
            const weeks = getMathsHigherGradeWeeks(grade);
            const totalQ = weeks.reduce((s, w) => s + w.questions.length, 0);
            return (
              <Link
                key={grade}
                href={`/quiz/maths-higher/${grade}`}
                className={`group block rounded-2xl bg-gradient-to-br ${info.color} p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-200`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">Grade {grade}</h3>
                  <span className="bg-white/30 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                    {weeks.length} weeks
                  </span>
                </div>
                <p className="text-white/90 text-sm mb-1">Ages {info.ageRange}</p>
                <p className="text-white/80 text-sm mb-2">{totalQ.toLocaleString()} questions</p>
                <p className="text-white/70 text-xs mb-4">{info.topics}</p>
                <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                  Start Practising
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-12">Why Practise Maths Higher With Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🎯", title: "CBSE Aligned", desc: "Questions designed to match the CBSE & ICSE maths curriculum for each grade" },
              { icon: "📊", title: "Track Progress", desc: "Instant scoring after each quiz so you can see where you need to improve" },
              { icon: "🆓", title: "Completely Free", desc: "No sign-up, no fees. Just pick your grade and start solving!" },
              { icon: "🧠", title: "Build Confidence", desc: "Regular practice builds problem-solving skills and exam confidence" },
            ].map((f) => (
              <div key={f.title} className="text-center p-6">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-navy mb-4">Free Online Maths Higher Practice for Indian Students</h2>
          <p className="text-gray-600 mb-4">
            The Practise Ground offers free Maths Higher quizzes for students in Grades 11 and 12. Each quiz features multiple-choice questions covering key topics from the Indian school curriculum — from sets and relations in Grade 11, to matrices and vector calculus in Grade 12.
          </p>
          <p className="text-gray-600 mb-4">
            Our quizzes are designed to supplement classroom learning and help students build confidence through regular practice. Whether you are preparing for board exams, competitive tests, or simply want to master advanced mathematics, our weekly quizzes provide structured practice at every level.
          </p>
          <p className="text-gray-600">
            All quizzes are completely free and require no sign-up. Just select your grade, pick a week, and start solving!
          </p>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Maths Higher Quizzes - The Practise Ground",
            description: "Free interactive Maths Higher quizzes for Grades 11 to 12",
            url: "https://www.thepractiseground.in/quiz/maths-higher",
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
