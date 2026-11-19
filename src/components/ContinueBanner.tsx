"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { readProgress, normalisePath, track, STREAK_KEY } from "@/lib/progress";

interface Item {
  path: string;
  label: string;
}

/**
 * "Welcome back" strip for returning visitors on a quiz hub.
 * Renders nothing until this device has finished at least one quiz here.
 */
export default function ContinueBanner({ weeks, series }: { weeks: Item[]; series: string }) {
  const [state, setState] = useState<{ done: number; next: Item | null; streak: number } | null>(null);

  useEffect(() => {
    const p = readProgress();
    const doneFlags = weeks.map((w) => !!p[normalisePath(w.path)]);
    const done = doneFlags.filter(Boolean).length;
    if (done === 0) return;
    const lastDone = doneFlags.lastIndexOf(true);
    let next: Item | null = null;
    for (let i = lastDone + 1; i < weeks.length; i++) {
      if (!doneFlags[i]) { next = weeks[i]; break; }
    }
    if (!next) next = weeks[doneFlags.indexOf(false)] ?? null;
    let streak = 0;
    try {
      const raw = window.localStorage.getItem(STREAK_KEY);
      const s = raw ? (JSON.parse(raw) as { last: string; count: number }) : null;
      if (s) {
        const d = new Date();
        const fmt = (x: Date) => `${x.getFullYear()}-${`${x.getMonth() + 1}`.padStart(2, "0")}-${`${x.getDate()}`.padStart(2, "0")}`;
        const y = new Date(Date.now() - 86400000);
        if (s.last === fmt(d) || s.last === fmt(y)) streak = s.count;
      }
    } catch { /* ignore */ }
    setState({ done, next, streak });
  }, [weeks]);

  if (!state) return null;
  const pct = Math.round((state.done / weeks.length) * 100);
  return (
    <div className="col-span-full mb-2 bg-white border border-green-200 rounded-2xl p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-bold text-brand-navy">
            Welcome back! {state.done} of {weeks.length} quizzes done
            {state.streak >= 2 ? ` · 🔥 ${state.streak}-day streak` : ""}
          </p>
          <div className="w-56 max-w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: `${pct}%` }} />
          </div>
          <p className="text-xs text-gray-500 mt-1">Saved on this device only. If you clear your browser data, your progress will be reset.</p>
        </div>
        {state.next && (
          <Link
            href={state.next.path}
            onClick={() => track("continue_click", { series, destination: state.next?.path })}
            className="bg-brand-orange text-white px-5 py-3 rounded-xl font-semibold hover:opacity-85 transition-all"
          >
            Continue: {state.next.label} →
          </Link>
        )}
      </div>
    </div>
  );
}
