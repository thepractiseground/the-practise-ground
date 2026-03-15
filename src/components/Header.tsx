"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="border-2 border-gray-800 rounded-md px-2 py-1">
              <span className="text-[10px] text-gray-600 block leading-tight">THE</span>
              <span className="text-sm font-bold text-brand-orange leading-tight">PRACTISE</span>
              <span className="text-[10px] text-gray-800 block leading-tight tracking-[0.25em]">GROUND</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button className="text-gray-700 hover:text-brand-orange transition-colors font-medium flex items-center gap-1">
                Quizzes
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">English</div>
                {[5, 6, 7, 8, 9, 10].map((g) => (
                  <Link key={`eng-${g}`} href={`/quiz/${g}`} className="block px-4 py-1.5 text-gray-700 hover:bg-brand-orange/10 hover:text-brand-orange text-sm">
                    Grade {g}
                  </Link>
                ))}
                <div className="border-t my-2" />
                <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Maths</div>
                {[5, 6, 7, 8, 9, 10].map((g) => (
                  <Link key={`maths-${g}`} href={`/quiz/maths/${g}`} className="block px-4 py-1.5 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 text-sm">
                    Grade {g}
                  </Link>
                ))}
                <div className="border-t my-2" />
                <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Science</div>
                {[5, 6, 7, 8, 9, 10].map((g) => (
                  <Link key={`sci-${g}`} href={`/quiz/science/${g}`} className="block px-4 py-1.5 text-gray-700 hover:bg-purple-50 hover:text-purple-600 text-sm">
                    Grade {g}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/summer-challenge" className="text-brand-orange font-semibold hover:text-orange-600 transition-colors">
              Summer Challenge
            </Link>
            <Link href="/fun" className="text-gray-700 hover:text-brand-orange transition-colors font-medium">
              Fun Quizzes
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-brand-orange transition-colors font-medium">
              Blog
            </Link>
            <Link href="/colouring-books" className="text-gray-700 hover:text-brand-orange transition-colors font-medium">
              Colouring Books
            </Link>
            <Link href="/posters-printables" className="text-gray-700 hover:text-brand-orange transition-colors font-medium">
              Posters
            </Link>
            <a
              href="https://www.paypal.com/ncp/payment/U3FSDHDCCEKJE"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-orange text-white font-semibold px-4 py-2 rounded-lg hover:opacity-85 transition-all text-sm"
            >
              Donate
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t">
            <div className="py-2 pl-4 text-xs font-bold text-gray-400 uppercase tracking-wider">English Quizzes</div>
            {[5, 6, 7, 8, 9, 10].map((g) => (
              <Link key={`eng-${g}`} href={`/quiz/${g}`} onClick={() => setMenuOpen(false)} className="block py-2 pl-6 text-gray-600 hover:text-brand-orange text-sm">
                Grade {g}
              </Link>
            ))}
            <div className="py-2 pl-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Maths Quizzes</div>
            {[5, 6, 7, 8, 9, 10].map((g) => (
              <Link key={`maths-${g}`} href={`/quiz/maths/${g}`} onClick={() => setMenuOpen(false)} className="block py-2 pl-6 text-gray-600 hover:text-emerald-600 text-sm">
                Grade {g}
              </Link>
            ))}
            <div className="py-2 pl-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Science Quizzes</div>
            {[5, 6, 7, 8, 9, 10].map((g) => (
              <Link key={`sci-${g}`} href={`/quiz/science/${g}`} onClick={() => setMenuOpen(false)} className="block py-2 pl-6 text-gray-600 hover:text-purple-600 text-sm">
                Grade {g}
              </Link>
            ))}
            <Link href="/summer-challenge" onClick={() => setMenuOpen(false)} className="block py-3 text-brand-orange hover:text-orange-600 font-bold">Summer Challenge</Link>
            <Link href="/fun" onClick={() => setMenuOpen(false)} className="block py-3 text-gray-700 hover:text-brand-orange font-medium">Fun Quizzes</Link>
            <Link href="/blog" onClick={() => setMenuOpen(false)} className="block py-3 text-gray-700 hover:text-brand-orange font-medium">Blog</Link>
            <Link href="/colouring-books" onClick={() => setMenuOpen(false)} className="block py-3 text-gray-700 hover:text-brand-orange font-medium">Colouring Books</Link>
            <Link href="/posters-printables" onClick={() => setMenuOpen(false)} className="block py-3 text-gray-700 hover:text-brand-orange font-medium">Posters &amp; Printables</Link>
            <a
              href="https://www.paypal.com/ncp/payment/U3FSDHDCCEKJE"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-brand-orange hover:text-brand-orange font-bold"
            >
              Donate
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
