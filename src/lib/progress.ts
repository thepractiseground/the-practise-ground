/**
 * On-device quiz progress. Everything stays in the visitor's own browser
 * (localStorage). Nothing is sent to a server and no sign-up is involved.
 */
export const PROGRESS_KEY = "tpg_progress_v1";
export const STREAK_KEY = "tpg_streak_v1";

export interface ProgressEntry {
  best: number; // best score, percent
  last: number; // most recent score, percent
  attempts: number;
  ts: number; // last attempt time (ms)
}

export type ProgressMap = Record<string, ProgressEntry>;

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function normalisePath(p: string): string {
  const noQuery = p.split("?")[0].split("#")[0];
  return noQuery.length > 1 ? noQuery.replace(/\/+$/, "") : noQuery;
}

export function readProgress(): ProgressMap {
  if (typeof window === "undefined") return {};
  try {
    return safeParse<ProgressMap>(window.localStorage.getItem(PROGRESS_KEY), {});
  } catch {
    return {};
  }
}

function localDay(d = new Date()): string {
  const m = `${d.getMonth() + 1}`.padStart(2, "0");
  const day = `${d.getDate()}`.padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

export interface SaveResult {
  entry: ProgressEntry;
  previousBest: number | null;
  streak: number;
}

/** Record a finished quiz and update the daily streak. Never throws. */
export function saveResult(path: string, percent: number): SaveResult {
  const key = normalisePath(path);
  const fallback: SaveResult = {
    entry: { best: percent, last: percent, attempts: 1, ts: Date.now() },
    previousBest: null,
    streak: 1,
  };
  if (typeof window === "undefined") return fallback;
  try {
    const all = readProgress();
    const prev = all[key];
    const entry: ProgressEntry = {
      best: Math.max(prev?.best ?? 0, percent),
      last: percent,
      attempts: (prev?.attempts ?? 0) + 1,
      ts: Date.now(),
    };
    all[key] = entry;
    window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(all));

    const today = localDay();
    const yesterday = localDay(new Date(Date.now() - 86400000));
    const s = safeParse<{ last: string; count: number }>(
      window.localStorage.getItem(STREAK_KEY),
      { last: "", count: 0 }
    );
    let count = s.count;
    if (s.last === today) {
      count = Math.max(count, 1);
    } else if (s.last === yesterday) {
      count = s.count + 1;
    } else {
      count = 1;
    }
    window.localStorage.setItem(STREAK_KEY, JSON.stringify({ last: today, count }));

    return { entry, previousBest: prev ? prev.best : null, streak: count };
  } catch {
    return fallback;
  }
}

export function track(name: string, params: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { gtag?: (...a: unknown[]) => void };
  w.gtag?.("event", name, params);
}
