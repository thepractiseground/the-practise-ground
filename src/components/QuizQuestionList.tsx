/**
 * Server-rendered list of quiz questions for SEO.
 * Google can index this static HTML even though the interactive
 * QuizEngine is a client component that renders client-side.
 */

interface QuizQuestionListProps {
  questions: { question: string }[];
  topic: string;
  subject?: string;
  grade?: number;
}

export default function QuizQuestionList({
  questions,
  topic,
  subject = "English",
  grade,
}: QuizQuestionListProps) {
  return (
    <details className="bg-white rounded-xl border border-gray-100 shadow-sm mt-6">
      <summary className="cursor-pointer px-5 sm:px-6 py-4 flex items-center justify-between text-sm font-semibold text-gray-700 hover:text-brand-navy transition-colors">
        <span>
          All {questions.length} questions in this {topic} quiz
        </span>
        <svg
          className="w-4 h-4 text-gray-400 transition-transform [[open]>&]:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </summary>
      <div className="px-5 sm:px-6 pb-5 border-t border-gray-100">
        <p className="text-xs text-gray-500 mt-3 mb-3">
          {grade ? `Grade ${grade} ` : ""}{subject} — {topic}: {questions.length} practice questions with instant scoring and explanations.
        </p>
        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
          {questions.map((q, i) => (
            <li key={i} className="leading-relaxed">
              {q.question}
            </li>
          ))}
        </ol>
      </div>
    </details>
  );
}
