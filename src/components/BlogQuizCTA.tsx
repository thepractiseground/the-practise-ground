import Link from "next/link";

interface BlogQuizCTAProps {
  category: string;
  grade: string;
  /** "inline" = compact card after TOC, "mid" = slightly different copy for mid-article */
  variant?: "inline" | "mid";
}

/** Determine subject, emoji, and quiz href from a blog post's category & grade. */
function resolveQuizLink(category: string, grade: string) {
  const gradeMatch = grade.match(/\d+/g);
  const primaryGrade = gradeMatch ? Number(gradeMatch[0]) : 8;

  const isMaths = ["Maths Concepts", "Maths Tips", "Problem Solving"].includes(category);
  const isPhysics = category === "Physics";
  const isChemistry = category === "Chemistry";
  const isBiology = category === "Biology";
  const isScience = ["Science", "Science Concepts"].includes(category) || isPhysics || isChemistry || isBiology;

  let subject: string;
  let emoji: string;
  let href: string;

  if (isPhysics) {
    subject = "Physics";
    emoji = "⚡";
    href = `/quiz/physics/${primaryGrade}`;
  } else if (isChemistry) {
    subject = "Chemistry";
    emoji = "🧪";
    href = `/quiz/chemistry/${primaryGrade}`;
  } else if (isBiology) {
    subject = "Biology";
    emoji = "🧬";
    href = `/quiz/biology/${primaryGrade}`;
  } else if (isScience) {
    subject = "Science";
    emoji = "🔬";
    href = `/quiz/science/${primaryGrade}`;
  } else if (isMaths) {
    subject = "Maths";
    emoji = "🔢";
    href = `/quiz/maths/${primaryGrade}`;
  } else {
    // English / Grammar / Vocabulary / Study Tips / Exam Prep / Fun & Learning
    subject = "English";
    emoji = "📝";
    href = `/quiz/${primaryGrade}`;
  }

  return { subject, emoji, href, primaryGrade };
}

export default function BlogQuizCTA({ category, grade, variant = "inline" }: BlogQuizCTAProps) {
  const { subject, emoji, href, primaryGrade } = resolveQuizLink(category, grade);

  const headlineText =
    variant === "mid"
      ? "Taking a quick break? Test yourself!"
      : "Want to test what you know?";

  const bodyText =
    variant === "mid"
      ? `Pause and try a quick Grade ${primaryGrade} ${subject} quiz — see how much you've picked up so far.`
      : `Try our free Grade ${primaryGrade} ${subject} quiz — 25 questions, instant results, no sign-up.`;

  return (
    <div className="mb-8 p-4 sm:p-5 bg-gradient-to-r from-brand-navy/5 to-brand-teal/5 border border-brand-teal/20 rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
      <span className="text-2xl shrink-0">{emoji}</span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-brand-navy">{headlineText}</p>
        <p className="text-xs text-gray-500">{bodyText}</p>
      </div>
      <Link
        href={href}
        className="shrink-0 bg-brand-orange text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-brand-orange/90 transition-colors"
      >
        Take the Quiz →
      </Link>
    </div>
  );
}

/**
 * Returns quiz links for the "Related Quizzes" grid at the bottom of a blog post.
 * Smarter than before: covers Physics, Chemistry, Biology, not just English/Maths.
 */
export function getRelatedQuizLinks(category: string, grade: string) {
  const gradeMatch = grade.match(/\d+/g);
  const grades = gradeMatch ? gradeMatch.map(Number) : [5, 6, 7, 8, 9, 10];
  const displayGrades =
    grades.length >= 2
      ? Array.from({ length: grades[grades.length - 1] - grades[0] + 1 }, (_, i) => grades[0] + i)
      : grades;

  const isMaths = ["Maths Concepts", "Maths Tips", "Problem Solving"].includes(category);
  const isPhysics = category === "Physics";
  const isChemistry = category === "Chemistry";
  const isBiology = category === "Biology";
  const isScience = ["Science", "Science Concepts"].includes(category);

  let subjectLabel: string;
  let hrefPrefix: string;
  let bgClasses: string;

  if (isPhysics) {
    subjectLabel = "Physics";
    hrefPrefix = "/quiz/physics";
    bgClasses = "bg-indigo-50 hover:bg-indigo-100 border-indigo-200 text-indigo-700";
  } else if (isChemistry) {
    subjectLabel = "Chemistry";
    hrefPrefix = "/quiz/chemistry";
    bgClasses = "bg-amber-50 hover:bg-amber-100 border-amber-200 text-amber-700";
  } else if (isBiology) {
    subjectLabel = "Biology";
    hrefPrefix = "/quiz/biology";
    bgClasses = "bg-lime-50 hover:bg-lime-100 border-lime-200 text-lime-700";
  } else if (isScience) {
    subjectLabel = "Science";
    hrefPrefix = "/quiz/science";
    bgClasses = "bg-purple-50 hover:bg-purple-100 border-purple-200 text-purple-700";
  } else if (isMaths) {
    subjectLabel = "Maths";
    hrefPrefix = "/quiz/maths";
    bgClasses = "bg-emerald-50 hover:bg-emerald-100 border-emerald-200 text-emerald-700";
  } else {
    subjectLabel = "English";
    hrefPrefix = "/quiz";
    bgClasses = "bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-700";
  }

  return displayGrades.slice(0, 6).map((g) => ({
    grade: g,
    label: `Grade ${g} ${subjectLabel}`,
    href: `${hrefPrefix}/${g}`,
    bgClasses,
  }));
}
