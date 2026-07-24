"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getAttempts, getStats, clearProgress, type QuizAttempt, type ProgressStats } from "@/lib/progress";

function formatDate(ts: number): string {
  try {
    return new Date(ts).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
  } catch {
    return "";
  }
}

export default function MyProgressClient() {
  const [loaded, setLoaded] = useState(false);
  const [attempts, setAttempts] = useState<QuizAttempt[]>([]);
  const [stats, setStats] = useState<ProgressStats | null>(null);

  const refresh = () => {
    setAttempts(getAttempts().slice().sort((a, b) => b.ts - a.ts));
    setStats(getStats());
  };

  useEffect(() => {
    refresh();
    setLoaded(true);
  }, []);

  const handleClear = () => {
    if (window.confirm("Clear all saved progress on this device? This can't be undone.")) {
      clearProgress();
      refresh();
    }
  };

  if (!loaded) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8">
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm text-gray-400 text-sm">Loading your progress…</div>
      </div>
    );
  }

  if (attempts.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8">
        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm text-center">
          <div className="text-5xl mb-3">📚</div>
          <h2 className="text-xl font-bold text-brand-navy mb-2">No quizzes completed yet</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-6">
            Finish any quiz and it&apos;ll be saved here automatically — your scores, best result, and daily streak. Everything stays on this device; no sign-up needed.
          </p>
          <Link href="/" className="inline-block bg-brand-orange text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
            Browse quizzes →
          </Link>
        </div>
      </div>
    );
  }

  const s = stats!;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 space-y-6">
      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm text-center">
          <div className="text-3xl font-bold text-brand-orange">{s.totalQuizzes}</div>
          <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Quizzes done</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm text-center">
          <div className="text-3xl font-bold text-brand-navy">{s.avgBest}%</div>
          <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Avg best score</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm text-center">
          <div className="text-3xl font-bold text-emerald-600">{s.streak.current}🔥</div>
          <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Day streak</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm text-center">
          <div className="text-3xl font-bold text-purple-600">{s.totalAttempts}</div>
          <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Total attempts</div>
        </div>
      </div>

      {/* Completed list */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-bold text-brand-navy">Completed quizzes</h2>
          <button onClick={handleClear} className="text-xs text-gray-400 hover:text-red-500 transition-colors">
            Clear progress
          </button>
        </div>
        <ul className="divide-y divide-gray-100">
          {attempts.map((a) => (
            <li key={a.path}>
              <Link href={a.path} className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors">
                <div className={`w-12 h-12 shrink-0 rounded-lg flex items-center justify-center font-bold text-sm ${
                  a.best >= 80 ? "bg-green-100 text-green-700" : a.best >= 50 ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-600"
                }`}>
                  {a.best}%
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-gray-800 truncate">{a.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Best {a.best}% · last {a.percent}% · {a.attempts} attempt{a.attempts === 1 ? "" : "s"} · {formatDate(a.ts)}
                  </p>
                </div>
                <span className="text-brand-navy text-sm shrink-0 hidden sm:inline">Retake →</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-xs text-gray-400 text-center px-4">
        Your progress is stored only in this browser on this device. Clearing your browser data or using another device will start a fresh record.
      </p>
    </div>
  );
}
