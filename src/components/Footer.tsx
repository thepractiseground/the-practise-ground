import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-gray-300" style={{ backgroundColor: "var(--color-footer-bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="border-2 border-gray-400 rounded-md px-2 py-1 inline-block mb-3">
              <span className="text-[10px] text-gray-400 block leading-tight">THE</span>
              <span className="text-sm font-bold text-brand-orange leading-tight">PRACTISE</span>
              <span className="text-[10px] text-gray-300 block leading-tight tracking-[0.25em]">GROUND</span>
            </div>
            <p className="text-sm text-gray-400">Free English &amp; Maths practice quizzes for students in Grades 5-10. 25 questions every week!</p>
          </div>

          {/* Quizzes */}
          <div>
            <h3 className="text-white font-semibold mb-4">English Quizzes</h3>
            <ul className="space-y-2 text-sm">
              {[5, 6, 7, 8, 9, 10].map((g) => (
                <li key={g}>
                  <Link href={`/quiz/${g}`} className="hover:text-brand-orange transition-colors">
                    Grade {g}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-semibold mb-3 mt-6">Maths Quizzes</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/quiz/maths" className="hover:text-emerald-400 transition-colors">
                  All Maths Grades
                </Link>
              </li>
              {[5, 6, 7, 8, 9, 10].map((g) => (
                <li key={g}>
                  <Link href={`/quiz/maths/${g}`} className="hover:text-emerald-400 transition-colors">
                    Grade {g}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="hover:text-brand-orange transition-colors">Blog</Link></li>
              <li><Link href="/colouring-books" className="hover:text-brand-orange transition-colors">Colouring Books</Link></li>
              <li><Link href="/for-parents" className="hover:text-brand-orange transition-colors">For Parents</Link></li>
              <li><Link href="/about" className="hover:text-brand-orange transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-brand-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <p className="text-sm text-gray-400 mb-2">hello@thepractiseground.in</p>
            <div className="mt-4">
              <Link href="/contact" className="inline-block bg-brand-orange text-white px-4 py-2 rounded-lg text-sm hover:opacity-85 transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} The Practise Ground. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="hover:text-brand-orange transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-orange transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
