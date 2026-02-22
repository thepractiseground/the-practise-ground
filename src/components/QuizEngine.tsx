"use client";
import { useState, useCallback } from "react";
import type { Question } from "@/lib/quiz-data";

interface Props {
  questions: Question[];
  grade: number;
  week: number;
  topic: string;
  subject?: string;
  subjectPath?: string;
}

export default function QuizEngine({ questions, grade, week, topic, subject = "English", subjectPath = "" }: Props) {
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
          <p className="text-gray-500 mb-6">Grade {grade} &middot; Week {week} &middot; {topic}</p>
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

          <div className="flex gap-4 justify-center flex-wrap">
            <button onClick={handleRestart} className="bg-brand-orange text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors">
              Try Again
            </button>
            <button
              onClick={() => {
                const text = `I scored ${score}/${questions.length} (${percentage}%) on Grade ${grade} Week ${week} ${subject} Quiz at The Practise Ground! 📚`;
                const quizPath = subjectPath ? `/quiz/${subjectPath}/${grade}/${week}` : `/quiz/${grade}/${week}`;
                const url = `https://wa.me/?text=${encodeURIComponent(text + "\nhttps://www.thepractiseground.in" + quizPath)}`;
                window.open(url, "_blank");
              }}
              className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors"
            >
              Share on WhatsApp
            </button>
          </div>
        </div>

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
          <span className="text-sm text-gray-500">Question {currentQ + 1} of {questions.length}</span>
          <span className="text-sm font-semibold text-brand-orange">{score} correct so far</span>
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
            let classes = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-start gap-3 ";

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
                classes += "border-brand-orange bg-orange-50 text-brand-orange ring-2 ring-brand-orange/20";
              } else {
                classes += "border-gray-200 hover:border-brand-orange hover:bg-orange-50/50 text-gray-700 cursor-pointer";
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
              className="bg-brand-orange text-white px-8 py-3 rounded-xl font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-orange-600 transition-colors"
            >
              Check Answer
            </button>
          ) : (
            <button onClick={handleNext} className="bg-brand-navy text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-900 transition-colors">
              {currentQ < questions.length - 1 ? "Next Question →" : "See Results"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
