"use client";

import { useState, useRef } from "react";
import Link from "next/link";

const GRADES = [5, 6, 7, 8, 9, 10, 11, 12] as const;

/** Subject cards shown after a grade is selected */
function getSubjectsForGrade(grade: number) {
  const base = [
    {
      name: "English",
      emoji: "📝",
      href: `/quiz/${grade}`,
      color: "from-orange-500 to-amber-500",
      desc: "Grammar, vocabulary & comprehension",
    },
    {
      name: "Maths",
      emoji: "🔢",
      href: `/quiz/maths/${grade}`,
      color: "from-emerald-500 to-teal-500",
      desc: "Arithmetic, algebra & geometry",
    },
    {
      name: "Science",
      emoji: "🔬",
      href: `/quiz/science/${grade}`,
      color: "from-purple-500 to-indigo-500",
      desc: "Physics, chemistry & biology",
    },
  ];

  // Grades 11-12 get additional specialist subjects
  if (grade >= 11) {
    base.push(
      {
        name: "Physics",
        emoji: "⚡",
        href: `/quiz/physics/${grade}`,
        color: "from-cyan-500 to-blue-500",
        desc: "Mechanics, waves & electromagnetism",
      },
      {
        name: "Chemistry",
        emoji: "🧪",
        href: `/quiz/chemistry/${grade}`,
        color: "from-rose-500 to-pink-500",
        desc: "Organic, inorganic & physical",
      },
      {
        name: "Biology",
        emoji: "🧬",
        href: `/quiz/biology/${grade}`,
        color: "from-lime-500 to-green-500",
        desc: "Botany, zoology & genetics",
      },
      {
        name: "Maths Higher",
        emoji: "📐",
        href: `/quiz/maths-higher/${grade}`,
        color: "from-red-500 to-rose-600",
        desc: "Advanced maths & JEE prep",
      }
    );
  }

  return base;
}

export default function GradeSelector({ totalQuestions }: { totalQuestions: number }) {
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
  const quickStartRef = useRef<HTMLDivElement>(null);

  const handleGradeClick = (grade: number) => {
    setSelectedGrade(grade);
    // Smooth scroll to quick-start cards on mobile
    setTimeout(() => {
      quickStartRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 50);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-8 text-center">
      {/* Main headline */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy mb-3 leading-tight">
        Free Weekly Quizzes for{" "}
        <span className="text-brand-orange">Grades 5–12</span>
      </h1>

      {/* Sub-headline with social proof */}
      <p className="text-base sm:text-lg text-gray-600 mb-1 max-w-2xl mx-auto">
        Trusted by students in 200+ countries. English, Maths, Science &amp; more — no sign-up required.
      </p>
      <p className="text-sm text-gray-400 mb-6">
        {totalQuestions.toLocaleString()}+ questions · 52 weeks per grade · Instant results
      </p>

      {/* Grade selector pills */}
      <div className="mb-2">
        <p className="text-sm font-semibold text-brand-navy mb-3">
          Select your grade to get started:
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {GRADES.map((grade) => {
            const isSelected = selectedGrade === grade;
            return (
              <button
                key={grade}
                onClick={() => handleGradeClick(grade)}
                className={`
                  min-w-[52px] min-h-[48px] px-4 py-2.5 rounded-xl text-base font-bold
                  transition-all duration-200 cursor-pointer
                  ${
                    isSelected
                      ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/30 scale-105"
                      : "bg-white text-brand-navy border-2 border-gray-200 hover:border-brand-orange/50 hover:bg-orange-50"
                  }
                `}
              >
                {grade}
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick-start subject cards — appear when a grade is selected */}
      <div ref={quickStartRef}>
        {selectedGrade && (
          <div className="mt-6" style={{ animation: "fadeSlideUp 0.3s ease-out" }}>
            <p className="text-sm font-semibold text-gray-500 mb-3">
              Grade {selectedGrade} — Pick a subject:
            </p>
            <div
              className={`grid gap-3 max-w-3xl mx-auto ${
                selectedGrade >= 11
                  ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                  : "grid-cols-1 sm:grid-cols-3"
              }`}
            >
              {getSubjectsForGrade(selectedGrade).map((subj) => (
                <Link
                  key={subj.name}
                  href={subj.href}
                  className={`group block rounded-xl bg-gradient-to-br ${subj.color} p-4 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-200`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{subj.emoji}</span>
                    <h3 className="text-base font-bold text-white">{subj.name}</h3>
                  </div>
                  <p className="text-white/80 text-xs mb-2">{subj.desc}</p>
                  <div className="flex items-center gap-1 text-white text-sm font-semibold group-hover:gap-2 transition-all">
                    Start Quiz
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>

            {/* Browse all link */}
            <p className="mt-4 text-xs text-gray-400">
              Or{" "}
              <button
                onClick={() => {
                  setSelectedGrade(null);
                  document.getElementById("panel-english")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="text-brand-teal hover:underline font-medium cursor-pointer"
              >
                browse all subjects below
              </button>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
