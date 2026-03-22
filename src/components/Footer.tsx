import Link from "next/link";

const grades = [5, 6, 7, 8, 9, 10];

export default function Footer() {
  return (
    <footer className="text-gray-300" style={{ backgroundColor: "var(--color-footer-bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-block mb-4">
              <div className="border-2 border-gray-400 rounded-md px-2 py-1">
                <span className="text-[10px] text-gray-400 block leading-tight">THE</span>
                <span className="text-sm font-bold text-brand-orange leading-tight">PRACTISE</span>
                <span className="text-[10px] text-gray-300 block leading-tight tracking-[0.25em]">GROUND</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-5">
              Free English, Maths &amp; Science quizzes for Grades 5-10. 23,400+ questions, no sign-up, completely free.
            </p>
            <p className="text-sm text-gray-500">hello@thepractiseground.in</p>
          </div>

          {/* Quizzes — compact grade chips */}
          <div className="md:col-span-4">
            <h3 className="text-white font-semibold mb-4">Quizzes</h3>
            <div className="mb-4">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">English</p>
              <div className="flex flex-wrap gap-2">
                {grades.map((g) => (
                  <Link
                    key={`eng-${g}`}
                    href={`/quiz/${g}`}
                    className="bg-white/10 hover:bg-brand-orange hover:text-white text-gray-300 text-sm px-3 py-2 rounded-lg transition-colors min-h-10"
                  >
                    Grade {g}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Maths</p>
              <div className="flex flex-wrap gap-2">
                {grades.map((g) => (
                  <Link
                    key={`maths-${g}`}
                    href={`/quiz/maths/${g}`}
                    className="bg-white/10 hover:bg-emerald-500 hover:text-white text-gray-300 text-sm px-3 py-2 rounded-lg transition-colors min-h-10"
                  >
                    Grade {g}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Science</p>
              <div className="flex flex-wrap gap-2">
                {grades.map((g) => (
                  <Link
                    key={`sci-${g}`}
                    href={`/quiz/science/${g}`}
                    className="bg-white/10 hover:bg-purple-500 hover:text-white text-gray-300 text-sm px-3 py-2 rounded-lg transition-colors min-h-10"
                  >
                    Grade {g}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Links + Actions */}
          <div className="md:col-span-4">
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm mb-6">
              <Link href="/summer-challenge" className="hover:text-brand-orange transition-colors text-brand-orange font-semibold">Summer Challenge</Link>
              <Link href="/fun" className="hover:text-brand-orange transition-colors">Fun Quizzes</Link>
              <Link href="/blog" className="hover:text-brand-orange transition-colors">Blog</Link>
              <Link href="/for-parents" className="hover:text-brand-orange transition-colors">For Parents</Link>
              <Link href="/colouring-books" className="hover:text-brand-orange transition-colors">Colouring Books</Link>
              <Link href="/posters-printables" className="hover:text-brand-orange transition-colors">Posters &amp; Printables</Link>
              <Link href="/about" className="hover:text-brand-orange transition-colors">About Us</Link>
              <Link href="/contact" className="hover:text-brand-orange transition-colors">Contact</Link>
              <Link href="/donate" className="hover:text-brand-orange transition-colors">Donate</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} The Practise Ground. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-brand-orange transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-orange transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
