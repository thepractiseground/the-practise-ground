"use client";
import { useState, useCallback } from "react";
import type { Question } from "@/lib/quiz-data";

interface Props {
  questions: Question[];
  grade?: number;
  week?: number;
  topic: string;
  subject?: string;
  subjectPath?: string;
  quizLabel?: string;
  sharePath?: string;
  bridgeCTA?: { text: string; description: string; links: { label: string; href: string }[] };
}

export default function QuizEngine({ questions, grade, week, topic, subject = "English", subjectPath = "", quizLabel, sharePath, bridgeCTA }: Props) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null));
  const [finished, setFinished] = useState(false);

  const q = questions[currentQ];
  const optionLabels = ["A", "B", "C", "D"];
  const correctIdx = optionLabels.indexOf(q?.answer);

  const handleSelect = useCallback((label: string) => {
    if (showResult) return;
    setSelected(label);
  }, [showResult]);

  const handleCheck = useCallback(() => {
    if (!selected) return;
    setShowResult(true);
    const newAnswers = [...answers];
    newAnswers[currentQ] = selected;
    setAnswers(newAnswers);
    if (selected === q.answer) {
      setScore((s) => s + 1);
    }
  }, [selected, currentQ, q, answers]);

  const handleNext = useCallback(() => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((c) => c + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setFinished(true);
    }
  }, [currentQ, questions.length]);

  const handleRestart = useCallback(() => {
    setCurrentQ(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
    setAnswers(Array(questions.length).fill(null));
    setFinished(false);
  }, [questions.length]);

  const percentage = Math.round((score / questions.length) * 100);

  if (finished) {
    return (
      <div className="max-w-2xl mx-auto">
        {/* Score Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center mb-8">
          <div className="text-6xl mb-4">
            {percentage >= 80 ? "🏆" : percentage >= 60 ? "⭐" : percentage >= 40 ? "💪" : "📚"}
          </div>
          <h2 className="text-3xl font-bold text-brand-navy mb-2">Quiz Complete!</h2>
          <p className="text-gray-500 mb-6">{quizLabel || `Grade ${grade} · Week ${week} · ${topic}`}</p>
          <div className="text-5xl font-bold text-brand-orange mb-2">{score}/{questions.length}</div>
          <p className="text-xl text-gray-600 mb-6">{percentage}% correct</p>

          <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
            <div
              className={`h-4 rounded-full transition-all duration-1000 ${
                percentage >= 80 ? "bg-green-500" : percentage >= 60 ? "bg-yellow-500" : percentage >= 40 ? "bg-orange-500" : "bg-red-500"
              }`}
              style={{ width: `${percentage}%` }}
            />
          </div>

          <p className="text-gray-600 mb-8">
            {percentage >= 80
              ? "Excellent work! You have a strong grasp of this topic."
              : percentage >= 60
              ? "Good effort! Review the questions you missed and try again."
              : percentage >= 40
              ? "Keep practising! Focus on the explanations below to improve."
              : "Don't worry — every expert was once a beginner. Review and try again!"}
          </p>

          <button onClick={handleRestart} className="bg-brand-orange text-white px-6 py-3 rounded-xl font-semibold hover:opacity-85 transition-all mb-6">
            Try Again
          </button>
        </div>

        {/* Share Score Card */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 sm:p-8 mb-8 text-center">
          <p className="text-green-800 font-bold text-lg sm:text-xl mb-1">
            {percentage >= 60 ? "Proud of your score?" : "Challenge a friend!"}
          </p>
          <p className="text-green-700 text-sm mb-5">
            {percentage >= 60
              ? "Share it with friends and challenge them to beat it!"
              : "Share this quiz and see who scores higher!"}
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button
              onClick={() => {
                const emoji = percentage >= 80 ? "🏆" : percentage >= 60 ? "⭐" : "📚";
                const shareLabel = quizLabel || `Grade ${grade} ${subject}: ${topic}`;
                const text = `${emoji} I scored ${score}/${questions.length} (${percentage}%) on ${shareLabel}!\n\nCan you beat my score? Try it free:`;
                const quizPath = sharePath || (subjectPath ? `/quiz/${subjectPath}/${grade}/${week}` : `/quiz/${grade}/${week}`);
                const url = `https://wa.me/?text=${encodeURIComponent(text + "\nhttps://www.thepractiseground.in" + quizPath)}`;
                window.open(url, "_blank");
              }}
              className="bg-green-500 text-white px-5 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors inline-flex items-center gap-2"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.243-1.216l-.252-.149-3.054.801.801-3.054-.149-.252A8 8 0 1112 20z"/>
              </svg>
              Share on WhatsApp
            </button>
            <button
              onClick={() => {
                const quizPath = sharePath || (subjectPath ? `/quiz/${subjectPath}/${grade}/${week}` : `/quiz/${grade}/${week}`);
                navigator.clipboard.writeText(`https://www.thepractiseground.in${quizPath}`);
                const btn = document.activeElement as HTMLButtonElement;
                if (btn) { btn.textContent = "Copied!"; setTimeout(() => { btn.textContent = "Copy Quiz Link"; }, 2000); }
              }}
              className="bg-white text-gray-700 border border-gray-300 px-5 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
            >
              Copy Quiz Link
            </button>
          </div>
        </div>

        {/* Bridge CTA */}
        {bridgeCTA && (
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 sm:p-8 mb-8 text-center">
            <p className="text-blue-800 font-bold text-lg sm:text-xl mb-1">{bridgeCTA.text}</p>
            <p className="text-blue-700 text-sm mb-5">{bridgeCTA.description}</p>
            <div className="flex gap-3 justify-center flex-wrap">
              {bridgeCTA.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="bg-brand-navy text-white px-5 py-3 rounded-xl font-semibold hover:opacity-85 transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Answer Review */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-brand-navy mb-4">Review Your Answers</h3>
          <div className="space-y-4">
            {questions.map((question, idx) => {
              const userAns = answers[idx];
              const isCorrect = userAns === question.answer;
              const correctIndex = optionLabels.indexOf(question.answer);
              return (
                <div key={idx} className={`p-4 rounded-xl border-2 ${isCorrect ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}>
                  <p className="font-medium text-gray-800 mb-2">
                    <span className="text-gray-400 mr-2">Q{idx + 1}.</span>
                    {question.question}
                  </p>
                  <p className="text-sm">
                    {isCorrect ? (
                      <span className="text-green-600 font-semibold">✓ Correct: {question.answer}) {question.options[correctIndex]}</span>
                    ) : (
                      <>
                        <span className="text-red-500">✗ Your answer: {userAns}) {question.options[optionLabels.indexOf(userAns || "A")]}</span>
                        <span className="text-green-600 ml-3 font-semibold">✓ Correct: {question.answer}) {question.options[correctIndex]}</span>
                      </>
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs sm:text-sm text-gray-500">Question {currentQ + 1} of {questions.length}</span>
          <span className="text-xs sm:text-sm font-semibold text-brand-orange">{score} correct so far</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-brand-orange h-2 rounded-full transition-all duration-300" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }} />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-6 leading-relaxed">{q.question}</h3>

        <div className="space-y-3">
          {q.options.map((opt, idx) => {
            const label = optionLabels[idx];
            const isSelected = selected === label;
            const isCorrect = label === q.answer;
            let classes = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-start gap-3 min-h-14 ";

            if (showResult) {
              if (isCorrect) {
                classes += "border-green-400 bg-green-50 text-green-800";
              } else if (isSelected && !isCorrect) {
                classes += "border-red-400 bg-red-50 text-red-800";
              } else {
                classes += "border-gray-200 bg-gray-50 text-gray-400";
              }
            } else {
              if (isSelected) {
                classes += "border-brand-orange bg-brand-orange/10 text-brand-orange ring-2 ring-brand-orange/20";
              } else {
                classes += "border-gray-200 hover:border-brand-orange hover:bg-brand-orange/5 text-gray-700 cursor-pointer";
              }
            }

            return (
              <button key={label} onClick={() => handleSelect(label)} className={classes} disabled={showResult}>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                  showResult && isCorrect ? "bg-green-400 text-white" :
                  showResult && isSelected && !isCorrect ? "bg-red-400 text-white" :
                  isSelected ? "bg-brand-orange text-white" :
                  "bg-gray-100 text-gray-600"
                }`}>
                  {showResult && isCorrect ? "✓" : showResult && isSelected && !isCorrect ? "✗" : label}
                </span>
                <span className="pt-1 text-base leading-relaxed">{opt}</span>
              </button>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-6 flex justify-end">
          {!showResult ? (
            <button
              onClick={handleCheck}
              disabled={!selected}
              className="bg-brand-orange text-white px-8 py-3 rounded-xl font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-85 transition-all"
            >
              Check Answer
            </button>
          ) : (
            <button onClick={handleNext} className="bg-brand-navy text-white px-8 py-3 rounded-xl font-semibold hover:opacity-85 transition-all">
              {currentQ < questions.length - 1 ? "Next Question →" : "See Results"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
