"use client";

import { useState } from "react";
import Link from "next/link";
import ClassroomShare from "./ClassroomShare";
import type { GuideQuiz } from "@/data/guide-quizzes";

interface Props {
  slug: string;
  quiz: GuideQuiz;
  fullQuizHref: string;
  fullQuizLabel: string;
}

function track(name: string, params: Record<string, string | number>) {
  const w = window as unknown as { gtag?: (...a: unknown[]) => void };
  w.gtag?.("event", name, params);
}

export default function GuideMiniQuiz({ slug, quiz, fullQuizHref, fullQuizLabel }: Props) {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const total = quiz.questions.length;
  const q = quiz.questions[idx];

  const choose = (i: number) => {
    if (picked !== null) return;
    if (idx === 0) track("guide_quiz_start", { guide: slug });
    setPicked(i);
    if (i === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (idx + 1 >= total) {
      setDone(true);
      track("guide_quiz_complete", { guide: slug, score, total });
    } else {
      setIdx(idx + 1);
      setPicked(null);
    }
  };

  const restart = () => {
    setIdx(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  };

  const shareScore = () => {
    const url = `https://www.thepractiseground.in/blog/${slug}?utm_source=whatsapp&utm_medium=social&utm_campaign=guide_quiz`;
    const text = `I scored ${score}/${total} on the ${quiz.title.split(":")[0]}. Can you beat me?`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text + "\n" + url)}`, "_blank");
    track("guide_quiz_share", { guide: slug, score });
  };

  return (
    <section
      aria-label={quiz.title}
      className="my-10 rounded-2xl border border-brand-teal/30 bg-gradient-to-br from-brand-navy/5 to-brand-teal/5 p-5 sm:p-7"
    >
      <p className="text-xs font-bold uppercase tracking-wide text-brand-teal mb-1">Test yourself</p>
      <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-4">{quiz.title}</h2>

      {!done ? (
        <div>
          <p className="text-xs text-gray-500 mb-2">
            Question {idx + 1} of {total}
          </p>
          <p className="text-base sm:text-lg font-semibold text-brand-navy mb-4">{q.q}</p>
          <div className="grid gap-2">
            {q.options.map((opt, i) => {
              const isAnswer = i === q.answer;
              const isPicked = picked === i;
              let cls = "border-gray-200 bg-white hover:border-brand-orange text-gray-800";
              if (picked !== null) {
                if (isAnswer) cls = "border-green-500 bg-green-50 text-green-900";
                else if (isPicked) cls = "border-red-400 bg-red-50 text-red-900";
                else cls = "border-gray-200 bg-white text-gray-400";
              }
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => choose(i)}
                  disabled={picked !== null}
                  className={`text-left rounded-lg border-2 px-4 py-2.5 text-sm sm:text-base font-medium transition-colors ${cls}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {picked !== null && (
            <div className="mt-4">
              <p className="text-sm text-gray-700 mb-3" aria-live="polite">
                <span className="font-bold">{picked === q.answer ? "Correct. " : "Not quite. "}</span>
                {q.why}
              </p>
              <button
                type="button"
                onClick={next}
                className="bg-brand-orange text-white text-sm font-bold px-5 py-2 rounded-lg hover:bg-brand-orange/90 transition-colors"
              >
                {idx + 1 >= total ? "See my score" : "Next question →"}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <p className="text-3xl font-extrabold text-brand-navy mb-1">
            {score} / {total}
          </p>
          <p className="text-sm text-gray-700 mb-5">
            {score === total
              ? "Perfect score. Try the full quiz to stretch yourself."
              : score >= Math.ceil(total / 2)
              ? "Good work. The full quiz will help you lock this in."
              : "Worth another look at the guide above, then try the full quiz."}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={fullQuizHref}
              onClick={() => track("guide_quiz_cta_click", { guide: slug, target: "full_quiz", score })}
              className="bg-brand-orange text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-brand-orange/90 transition-colors"
            >
              {fullQuizLabel} →
            </Link>
            {quiz.resource && (
              <Link
                href={quiz.resource.href}
                onClick={() => track("guide_quiz_cta_click", { guide: slug, target: "resource", score })}
                className="bg-white border-2 border-brand-teal text-brand-teal text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-brand-teal/5 transition-colors"
              >
                {quiz.resource.label}
              </Link>
            )}
            <button
              type="button"
              onClick={shareScore}
              className="bg-white border-2 border-green-500 text-green-700 text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-green-50 transition-colors"
            >
              Share score on WhatsApp
            </button>
            <ClassroomShare
              url={`https://www.thepractiseground.in/blog/${slug}`}
              title={quiz.title.split(":")[0]}
              body="A short guide with a 5-question quiz and a free printable."
              location="guide_quiz"
              label="Assign in Google Classroom"
            />
            <button
              type="button"
              onClick={restart}
              className="text-sm font-semibold text-gray-500 hover:text-brand-navy px-2 py-2.5"
            >
              Try again
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
