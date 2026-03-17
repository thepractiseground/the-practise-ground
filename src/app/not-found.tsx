import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track!
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Link
            href="/"
            className="bg-brand-orange text-white px-6 py-3 rounded-xl font-semibold hover:opacity-85 transition-all"
          >
            Go Home
          </Link>
          <Link
            href="/fun"
            className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
          >
            Fun Quizzes
          </Link>
        </div>

        <div className="border-t pt-8">
          <p className="text-sm text-gray-500 mb-4">Or jump to a subject:</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/quiz/5"
              className="text-sm text-brand-orange hover:underline font-medium"
            >
              English Quizzes
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/quiz/maths/5"
              className="text-sm text-emerald-600 hover:underline font-medium"
            >
              Maths Quizzes
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/quiz/science/5"
              className="text-sm text-purple-600 hover:underline font-medium"
            >
              Science Quizzes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
