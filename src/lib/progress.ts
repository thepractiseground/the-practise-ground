// Client-side quiz progress tracking, stored in the browser's localStorage.
// No account, no backend, no PII — everything stays on the user's device.

export interface QuizAttempt {
  path: string;      // canonical quiz path, e.g. /quiz/french/a1/4
  label: string;     // human-readable label
  subject: string;
  topic: string;
  score: number;     // most recent score
  total: number;     // questions in the quiz
  percent: number;   // most recent percent
  best: number;      // best percent achieved
  attempts: number;  // number of times taken
  ts: number;        // last-attempt timestamp (ms)
}

export interface Streak {
  current: number;
  longest: number;
  last: string | null; // YYYY-MM-DD (local)
}

export interface ProgressStats {
  totalQuizzes: number;   // distinct quizzes completed
  totalAttempts: number;  // total completions incl. retakes
  avgBest: number;        // average of best scores (%)
  streak: Streak;
}

const KEY = "tpg_progress_v1";
const STREAK_KEY = "tpg_streak_v1";

function hasStorage(): boolean {
  try {
    return typeof window !== "undefined" && !!window.localStorage;
  } catch {
    return false;
  }
}

function read<T>(key: string, fallback: T): T {
  if (!hasStorage()) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown): void {
  if (!hasStorage()) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* quota or privacy mode — fail silently */
  }
}

function dayKey(ts: number): string {
  const d = new Date(ts);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function daysBetween(a: string, b: string): number {
  const [ay, am, ad] = a.split("-").map(Number);
  const [by, bm, bd] = b.split("-").map(Number);
  const da = Date.UTC(ay, am - 1, ad);
  const db = Date.UTC(by, bm - 1, bd);
  return Math.round((db - da) / 86400000);
}

export function getAttempts(): QuizAttempt[] {
  return read<QuizAttempt[]>(KEY, []);
}

export function getStreak(): Streak {
  return read<Streak>(STREAK_KEY, { current: 0, longest: 0, last: null });
}

function bumpStreak(ts: number): void {
  const today = dayKey(ts);
  const s = getStreak();
  if (s.last === today) {
    // already counted today
  } else if (s.last && daysBetween(s.last, today) === 1) {
    s.current += 1;
  } else {
    s.current = 1;
  }
  s.longest = Math.max(s.longest, s.current);
  s.last = today;
  write(STREAK_KEY, s);
}

export interface RecordInput {
  path: string;
  label: string;
  subject: string;
  topic: string;
  score: number;
  total: number;
}

export function recordAttempt(input: RecordInput): void {
  if (!hasStorage() || !input.path || input.total <= 0) return;
  const percent = Math.round((input.score / input.total) * 100);
  const now = Date.now();
  const list = getAttempts();
  const existing = list.find((a) => a.path === input.path);
  const isReturning = list.length > 0 && !existing;

  if (existing) {
    existing.attempts += 1;
    existing.score = input.score;
    existing.total = input.total;
    existing.percent = percent;
    existing.best = Math.max(existing.best, percent);
    existing.ts = now;
    existing.label = input.label;
    existing.subject = input.subject;
    existing.topic = input.topic;
  } else {
    list.push({
      path: input.path,
      label: input.label,
      subject: input.subject,
      topic: input.topic,
      score: input.score,
      total: input.total,
      percent,
      best: percent,
      attempts: 1,
      ts: now,
    });
  }
  write(KEY, list);
  bumpStreak(now);

  // Analytics: record completion so we can measure engagement / return behaviour.
  try {
    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    if (typeof gtag === "function") {
      gtag("event", "quiz_complete", {
        quiz_path: input.path,
        subject: input.subject,
        topic: input.topic,
        score: input.score,
        total: input.total,
        percent,
        distinct_quizzes: list.length,
        returning_visitor: isReturning || list.length > 1,
      });
    }
  } catch {
    /* no-op */
  }
}

export function getStats(): ProgressStats {
  const list = getAttempts();
  const totalAttempts = list.reduce((s, a) => s + a.attempts, 0);
  const avgBest = list.length
    ? Math.round(list.reduce((s, a) => s + a.best, 0) / list.length)
    : 0;
  return {
    totalQuizzes: list.length,
    totalAttempts,
    avgBest,
    streak: getStreak(),
  };
}

export function clearProgress(): void {
  if (!hasStorage()) return;
  try {
    window.localStorage.removeItem(KEY);
    window.localStorage.removeItem(STREAK_KEY);
  } catch {
    /* no-op */
  }
}
