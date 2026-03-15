import Link from "next/link";
import type { Metadata } from "next";
import { funQuizzes } from "@/data/fun-quizzes";

export const metadata: Metadata = {
  title: "Fun Quizzes — Test Your General Knowledge | The Practise Ground",
  description:
    "Try free fun quizzes on world capitals, space facts, famous inventions, flags, idioms and more. 15 questions each — no sign-up needed. Test your knowledge beyond the classroom!",
  openGraph: {
    title: "Fun Quizzes — Test Your General Knowledge",
    description:
      "Free fun quizzes on geography, science, history, language and more. 15 questions, instant results, no sign-up.",
    url: "https://www.thepractiseground.in/fun",
    siteName: "The Practise Ground",
    type: "website",
  },
};

const categoryColors: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  "General Knowledge": { bg: "bg-cyan-50", text: "text-cyan-700", border: "border-cyan-200", badge: "bg-cyan-100 text-cyan-700" },
  "Science & Nature": { bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200", badge: "bg-violet-100 text-violet-700" },
  "History & Culture": { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200", badge: "bg-rose-100 text-rose-700" },
  Geography: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200", badge: "bg-amber-100 text-amber-700" },
  "Language & Words": { bg: "bg-lime-50", text: "text-lime-700", border: "border-lime-200", badge: "bg-lime-100 text-lime-700" },
  "Fun Maths": { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", badge: "bg-emerald-100 text-emerald-700" },
};

export default function FunQuizzesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Fun Quizzes",
    description: "Free fun quizzes on general knowledge, science, geography, history and language.",
    numberOfItems: funQuizzes.length,
    itemListElement: funQuizzes.map((quiz, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `https://www.thepractiseground.in/fun/${quiz.slug}`,
      name: quiz.title,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero */}
      <section
        className="py-16 sm:py-20 text-center"
        style={{
          background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 30%, #c4b5fd 70%, #a78bfa 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-5xl sm:text-6xl mb-4">🎯</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Fun Quizzes
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-3 max-w-2xl mx-auto">
            Test your knowledge beyond the classroom. Quick, fun, and completely free!
          </p>
          <p className="text-gray-600">
            {funQuizzes.length} quizzes &middot; {funQuizzes.length * 15} questions &middot; No sign-up needed
          </p>
        </div>
      </section>

      {/* Quiz Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {funQuizzes.map((quiz) => {
            const colors = categoryColors[quiz.category] || categoryColors["General Knowledge"];
            return (
              <Link
                key={quiz.slug}
                href={`/fun/${quiz.slug}`}
                className={`group rounded-2xl border-2 ${colors.border} ${colors.bg} p-6 hover:shadow-lg transition-all hover:-translate-y-1`}
              >
                <div className="text-4xl mb-3">{quiz.emoji}</div>
                <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${colors.badge}`}>
                  {quiz.category}
                </span>
                <h2 className={`text-xl font-bold mb-2 ${colors.text} group-hover:underline`}>
                  {quiz.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {quiz.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{quiz.questions.length} questions</span>
                  <span className={`text-sm font-semibold ${colors.text} group-hover:translate-x-1 transition-transform`}>
                    Start Quiz →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Bridge CTA to Academic Quizzes */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 sm:p-10 text-center">
          <div className="text-3xl mb-3">📝</div>
          <h2 className="text-2xl font-bold text-brand-navy mb-2">Looking for academic practice?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            We have 23,400+ curriculum-aligned quiz questions across English, Maths and Science for Grades 5 to 10.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/quiz/5"
              className="bg-brand-orange text-white px-5 py-3 rounded-xl font-semibold hover:opacity-85 transition-all"
            >
              English Quizzes
            </Link>
            <Link
              href="/quiz/maths/5"
              className="bg-emerald-500 text-white px-5 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors"
            >
              Maths Quizzes
            </Link>
            <Link
              href="/quiz/science/5"
              className="bg-purple-500 text-white px-5 py-3 rounded-xl font-semibold hover:bg-purple-600 transition-colors"
            >
              Science Quizzes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
