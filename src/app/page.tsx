import Link from "next/link";
import { GRADES, GRADE_INFO, getGradeWeeks } from "@/lib/quiz-data";
import { MATHS_GRADES, MATHS_GRADE_INFO, getMathsGradeWeeks } from "@/lib/maths-quiz-data";

export default function Home() {
  const englishQuestions = GRADES.reduce((sum, g) => {
    const weeks = getGradeWeeks(g);
    return sum + weeks.reduce((s, w) => s + w.questions.length, 0);
  }, 0);

  const mathsQuestions = MATHS_GRADES.reduce((sum, g) => {
    const weeks = getMathsGradeWeeks(g);
    return sum + weeks.reduce((s, w) => s + w.questions.length, 0);
  }, 0);

  const totalQuestions = englishQuestions + mathsQuestions;

  return (
    <div
      style={{
        background: "linear-gradient(to bottom right, var(--color-hero-from), var(--color-hero-via), var(--color-hero-to))",
      }}
    >
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy mb-4">
          Practise <span className="text-brand-orange">Every Week</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-2 max-w-2xl mx-auto">
          Free interactive English &amp; Maths quizzes for students in Grades 5 to 10. No sign-up required!
        </p>
        <p className="text-base text-gray-500 mb-8">
          {totalQuestions.toLocaleString()}+ questions &middot; 2 subjects &middot; 6 grades &middot; Weekly content
        </p>
        <p className="text-lg font-semibold text-brand-navy tracking-wide">
          Choose a subject to get started
        </p>
      </section>

      {/* English Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">📝</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">English Quizzes</h2>
          <span className="bg-brand-orange/10 text-brand-orange text-sm font-bold px-3 py-1 rounded-full">
            {englishQuestions.toLocaleString()}+ questions
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GRADES.map((grade) => {
            const info = GRADE_INFO[grade];
            const weeks = getGradeWeeks(grade);
            const totalQ = weeks.reduce((s, w) => s + w.questions.length, 0);
            return (
              <Link
                key={grade}
                href={`/quiz/${grade}`}
                className={`group block rounded-2xl bg-gradient-to-br ${info.color} p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-200`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">Grade {grade}</h3>
                  <span className="bg-white/30 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                    {weeks.length} weeks
                  </span>
                </div>
                <p className="text-white/90 text-sm mb-1">Ages {info.ageRange}</p>
                <p className="text-white/80 text-sm mb-4">{totalQ.toLocaleString()} questions</p>
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

      {/* Maths Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">🔢</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">Maths Quizzes</h2>
          <span className="bg-emerald-500/10 text-emerald-600 text-sm font-bold px-3 py-1 rounded-full">
            {mathsQuestions.toLocaleString()}+ questions
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MATHS_GRADES.map((grade) => {
            const info = MATHS_GRADE_INFO[grade];
            const weeks = getMathsGradeWeeks(grade);
            const totalQ = weeks.reduce((s, w) => s + w.questions.length, 0);
            return (
              <Link
                key={grade}
                href={`/quiz/maths/${grade}`}
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

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-12">Why Practise With Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "📝", title: "25 Questions Weekly", desc: "Fresh quiz content every week covering English grammar, Maths concepts, and more" },
              { icon: "⚡", title: "Instant Results", desc: "Get your score immediately with detailed explanations for every answer" },
              { icon: "🆓", title: "Completely Free", desc: "No sign-up, no fees, no hidden costs. Just start practising!" },
              { icon: "📱", title: "Works Everywhere", desc: "Practice on your phone, tablet, or computer — anytime, anywhere" },
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

      {/* Colouring Books CTA */}
      <section className="py-16 bg-theme-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Colouring Books for Kids</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Explore our collection of fun and creative colouring books — available on Amazon!
          </p>
          <Link
            href="/colouring-books"
            className="inline-block bg-brand-pink text-white px-8 py-3 rounded-xl font-semibold hover:bg-pink-600 transition-colors"
          >
            Browse Colouring Books
          </Link>
        </div>
      </section>

      {/* FAQ Section (for SEO/AEO) */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "What is The Practise Ground?",
                a: "The Practise Ground is a free online platform where students in Grades 5 to 10 can practice English and Maths through weekly quizzes. Each quiz has multiple-choice questions covering grammar, vocabulary, arithmetic, algebra, geometry, and more.",
              },
              {
                q: "Do I need to sign up to take a quiz?",
                a: "No! All quizzes are completely free and open. Just select your subject and grade, pick a quiz, and start practising immediately — no email or account needed.",
              },
              {
                q: "How often are new quizzes added?",
                a: "We have 52 weeks of English quizzes ready for each grade — that is a full year of content. Maths quizzes are being added regularly. New content is added often!",
              },
              {
                q: "What subjects and topics do you cover?",
                a: "We currently offer English and Maths quizzes. English covers grammar, vocabulary, comprehension, and writing. Maths covers arithmetic, algebra, geometry, trigonometry, and more — all aligned with CBSE and ICSE curricula for Grades 5 through 10.",
              },
              {
                q: "Is this useful for CBSE and ICSE students?",
                a: "Yes! Our questions are designed to supplement school-level practice and are useful for students following CBSE, ICSE, and state board curricula.",
              },
            ].map((faq) => (
              <details key={faq.q} className="group border rounded-xl p-4 hover:shadow-sm transition-shadow">
                <summary className="font-semibold text-brand-navy cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
