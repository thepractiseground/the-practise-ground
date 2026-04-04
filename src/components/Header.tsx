"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

function MobileSection({
  title,
  color,
  children,
  defaultOpen = false,
  onNavigate,
}: {
  title: string;
  color: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-between w-full px-5 py-3.5 text-left min-h-12`}
      >
        <span className={`text-sm font-semibold ${color}`}>{title}</span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="pb-2 px-5">{children}</div>}
    </div>
  );
}

function GradeChips({
  grades,
  prefix,
  hoverColor,
  onNavigate,
}: {
  grades: number[];
  prefix: string;
  hoverColor: string;
  onNavigate: () => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 pb-2">
      {grades.map((g) => (
        <Link
          key={`${prefix}-${g}`}
          href={`/quiz/${prefix}${prefix ? "/" : ""}${g}`}
          onClick={onNavigate}
          className={`bg-gray-50 text-gray-700 text-sm px-4 py-2 rounded-lg ${hoverColor} hover:text-white transition-colors min-h-10 flex items-center`}
        >
          Grade {g}
        </Link>
      ))}
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

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
              <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border py-2 min-w-[220px] max-h-[80vh] overflow-y-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">English by Grade</div>
                {[5, 6, 7, 8, 9, 10, 11, 12].map((g) => (
                  <Link key={`eng-${g}`} href={`/quiz/${g}`} className="block px-4 py-1.5 text-gray-700 hover:bg-brand-orange/10 hover:text-brand-orange text-sm">
                    Grade {g}
                  </Link>
                ))}
                <div className="border-t my-2" />
                <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">English by Level</div>
                <Link href="/quiz/english/a2" className="block px-4 py-1.5 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 text-sm">
                  A2 Elementary
                </Link>
                <Link href="/quiz/english/b1" className="block px-4 py-1.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 text-sm">
                  B1 Intermediate
                </Link>
                <div className="border-t my-2" />
                <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Languages (CEFR)</div>
                <Link href="/quiz/spanish" className="block px-4 py-1.5 text-gray-700 hover:bg-red-50 hover:text-red-600 text-sm">
                  🇪🇸 Spanish
                </Link>
                <Link href="/quiz/french" className="block px-4 py-1.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 text-sm">
                  🇫🇷 French
                </Link>
                <Link href="/quiz/german" className="block px-4 py-1.5 text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 text-sm">
                  🇩🇪 German
                </Link>
                <div className="border-t my-2" />
                <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Maths</div>
                {[5, 6, 7, 8, 9, 10, 11, 12].map((g) => (
                  <Link key={`maths-${g}`} href={`/quiz/maths/${g}`} className="block px-4 py-1.5 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 text-sm">
                    Grade {g}
                  </Link>
                ))}
                <div className="border-t my-2" />
                <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Maths Higher (JEE Prep)</div>
                {[11, 12].map((g) => (
                  <Link key={`mh-${g}`} href={`/quiz/maths-higher/${g}`} className="block px-4 py-1.5 text-gray-700 hover:bg-rose-50 hover:text-rose-600 text-sm">
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
                <div className="border-t my-2" />
                <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Physics</div>
                {[11, 12].map((g) => (
                  <Link key={`phy-${g}`} href={`/quiz/physics/${g}`} className="block px-4 py-1.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 text-sm">
                    Grade {g}
                  </Link>
                ))}
                <div className="border-t my-2" />
                <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Chemistry</div>
                {[11, 12].map((g) => (
                  <Link key={`chem-${g}`} href={`/quiz/chemistry/${g}`} className="block px-4 py-1.5 text-gray-700 hover:bg-teal-50 hover:text-teal-600 text-sm">
                    Grade {g}
                  </Link>
                ))}
                <div className="border-t my-2" />
                <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Biology</div>
                {[11, 12].map((g) => (
                  <Link key={`bio-${g}`} href={`/quiz/biology/${g}`} className="block px-4 py-1.5 text-gray-700 hover:bg-green-50 hover:text-green-600 text-sm">
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
              Printables
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-3 min-h-11 min-w-11 flex items-center justify-center text-gray-700"
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
      </div>

      {/* Mobile Nav — full-screen scrollable overlay */}
      {menuOpen && (
        <div className="md:hidden fixed left-0 right-0 top-16 bottom-0 z-40 bg-white overflow-y-auto overscroll-contain" style={{ height: 'calc(100dvh - 4rem)' }}>
          {/* Quiz sections with collapsible accordions */}
          <MobileSection title="📝 English by Grade" color="text-brand-orange" defaultOpen onNavigate={closeMenu}>
            <GradeChips grades={[5, 6, 7, 8, 9, 10, 11, 12]} prefix="" hoverColor="hover:bg-brand-orange" onNavigate={closeMenu} />
          </MobileSection>

          <MobileSection title="📊 English by Level (CEFR)" color="text-emerald-600" onNavigate={closeMenu}>
            <div className="flex flex-wrap gap-2 pb-2">
              <Link href="/quiz/english/a2" onClick={closeMenu} className="bg-gray-50 text-gray-700 text-sm px-4 py-2 rounded-lg hover:bg-emerald-500 hover:text-white transition-colors min-h-10 flex items-center">
                A2 Elementary
              </Link>
              <Link href="/quiz/english/b1" onClick={closeMenu} className="bg-gray-50 text-gray-700 text-sm px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-colors min-h-10 flex items-center">
                B1 Intermediate
              </Link>
            </div>
          </MobileSection>

          <MobileSection title="🌍 Languages (CEFR)" color="text-blue-600" onNavigate={closeMenu}>
            <div className="flex flex-col gap-1 pb-2">
              <Link href="/quiz/spanish" onClick={closeMenu} className="flex items-center gap-3 text-gray-700 text-sm px-3 py-2.5 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors min-h-11">
                <span className="text-lg">🇪🇸</span> Spanish (A1–C1)
              </Link>
              <Link href="/quiz/french" onClick={closeMenu} className="flex items-center gap-3 text-gray-700 text-sm px-3 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors min-h-11">
                <span className="text-lg">🇫🇷</span> French (A1–C1)
              </Link>
              <Link href="/quiz/german" onClick={closeMenu} className="flex items-center gap-3 text-gray-700 text-sm px-3 py-2.5 rounded-lg hover:bg-yellow-50 hover:text-yellow-700 transition-colors min-h-11">
                <span className="text-lg">🇩🇪</span> German (A1–C1)
              </Link>
            </div>
          </MobileSection>

          <MobileSection title="🔢 Maths" color="text-emerald-600" onNavigate={closeMenu}>
            <GradeChips grades={[5, 6, 7, 8, 9, 10, 11, 12]} prefix="maths" hoverColor="hover:bg-emerald-500" onNavigate={closeMenu} />
          </MobileSection>

          <MobileSection title="📐 Maths Higher (JEE)" color="text-rose-600" onNavigate={closeMenu}>
            <GradeChips grades={[11, 12]} prefix="maths-higher" hoverColor="hover:bg-rose-500" onNavigate={closeMenu} />
          </MobileSection>

          <MobileSection title="🔬 Science" color="text-purple-600" onNavigate={closeMenu}>
            <GradeChips grades={[5, 6, 7, 8, 9, 10]} prefix="science" hoverColor="hover:bg-purple-500" onNavigate={closeMenu} />
          </MobileSection>

          <MobileSection title="⚡ Physics" color="text-blue-600" onNavigate={closeMenu}>
            <GradeChips grades={[11, 12]} prefix="physics" hoverColor="hover:bg-blue-500" onNavigate={closeMenu} />
          </MobileSection>

          <MobileSection title="🧪 Chemistry" color="text-teal-600" onNavigate={closeMenu}>
            <GradeChips grades={[11, 12]} prefix="chemistry" hoverColor="hover:bg-teal-500" onNavigate={closeMenu} />
          </MobileSection>

          <MobileSection title="🧬 Biology" color="text-green-600" onNavigate={closeMenu}>
            <GradeChips grades={[11, 12]} prefix="biology" hoverColor="hover:bg-green-500" onNavigate={closeMenu} />
          </MobileSection>

          {/* Quick links */}
          <div className="border-t border-gray-200 mt-1">
            <Link href="/summer-challenge" onClick={closeMenu} className="flex items-center gap-3 px-5 py-3.5 text-brand-orange hover:bg-orange-50 font-semibold text-sm min-h-12">
              ☀️ Summer Challenge
            </Link>
            <Link href="/fun" onClick={closeMenu} className="flex items-center gap-3 px-5 py-3.5 text-gray-700 hover:bg-gray-50 font-medium text-sm min-h-12">
              🎮 Fun Quizzes
            </Link>
            <Link href="/blog" onClick={closeMenu} className="flex items-center gap-3 px-5 py-3.5 text-gray-700 hover:bg-gray-50 font-medium text-sm min-h-12">
              📖 Blog
            </Link>
            <Link href="/colouring-books" onClick={closeMenu} className="flex items-center gap-3 px-5 py-3.5 text-gray-700 hover:bg-gray-50 font-medium text-sm min-h-12">
              🎨 Colouring Books
            </Link>
            <Link href="/posters-printables" onClick={closeMenu} className="flex items-center gap-3 px-5 py-3.5 text-gray-700 hover:bg-gray-50 font-medium text-sm min-h-12">
              🖼️ Printables
            </Link>
          </div>

          {/* Bottom padding for safe area on notched phones */}
          <div className="h-20" />
        </div>
      )}
    </header>
  );
}
