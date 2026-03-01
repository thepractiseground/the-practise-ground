import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colouring Books for Kids | The Practise Ground",
  description: "Fun colouring and activity books for kids of all ages. Vehicle colouring, mandala art, and more — coming soon to Amazon!",
  keywords: ["colouring books for kids", "coloring book Amazon", "kids activity books", "mandala art coloring", "vehicle coloring book"],
};

export default function ColouringBooksPage() {
  return (
    <div className="bg-theme-gradient min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-pink-400 to-purple-500 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-white/70 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Colouring Books</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Colouring Books for Kids
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Fun, creative colouring and activity books for kids of all ages.
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-10 sm:p-14 text-center">
          <div className="text-6xl mb-6">🎨📚</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-4">Coming Soon!</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8 leading-relaxed">
            We are putting the finishing touches on our collection of colouring and activity books for kids. They will be available on Amazon very soon — check back shortly!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-sm mx-auto mb-10">
            <div className="bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl p-5 text-white">
              <div className="text-3xl mb-2">🚗</div>
              <p className="font-semibold text-sm">Vehicle Colouring Fun</p>
              <p className="text-white/80 text-xs mt-1">Ages 3-8</p>
            </div>
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl p-5 text-white">
              <div className="text-3xl mb-2">🌸</div>
              <p className="font-semibold text-sm">Mandala Art</p>
              <p className="text-white/80 text-xs mt-1">Ages 8+</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm mb-6">In the meantime, explore our free quizzes:</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/quiz/8"
              className="bg-brand-orange text-white font-semibold px-6 py-3 rounded-xl hover:opacity-85 transition-all"
            >
              English Quizzes
            </Link>
            <Link
              href="/quiz/maths/8"
              className="bg-emerald-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-emerald-600 transition-colors"
            >
              Maths Quizzes
            </Link>
            <Link
              href="/quiz/science/8"
              className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors"
            >
              Science Quizzes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
