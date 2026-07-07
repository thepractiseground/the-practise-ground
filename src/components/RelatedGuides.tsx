import Link from "next/link";

export interface GuideLink {
  slug: string;
  title: string;
}

// Subject → related blog guides. All slugs verified against src/data/blog-posts.ts.
const GUIDES: Record<string, GuideLink[]> = {
  english: [
    { slug: "english-tenses-explained-simply", title: "English Tenses Explained Simply" },
    { slug: "subject-verb-agreement-rules", title: "Subject–Verb Agreement Rules" },
    { slug: "parts-of-speech-made-easy", title: "Parts of Speech Made Easy" },
    { slug: "letter-writing-format-guide", title: "Letter Writing Format Guide" },
    { slug: "improve-english-vocabulary", title: "Improve Your English Vocabulary" },
    { slug: "english-grammar-practice-quizzes", title: "English Grammar Practice Quizzes" },
  ],
  maths: [
    { slug: "algebra-made-simple-basics-to-confidence", title: "Algebra Made Simple" },
    { slug: "how-to-master-fractions-complete-guide-young-learners", title: "How to Master Fractions" },
    { slug: "mental-maths-tricks-every-student-should-know", title: "Mental Maths Tricks" },
    { slug: "maths-formulas-cheat-sheet-grades-8-12", title: "Maths Formulas Cheat Sheet" },
    { slug: "how-to-solve-maths-word-problems-step-by-step", title: "Solve Maths Word Problems Step by Step" },
    { slug: "common-maths-mistakes-students-make-how-avoid-them", title: "Common Maths Mistakes to Avoid" },
  ],
  science: [
    { slug: "science-foundation-grades-5-7", title: "Building a Strong Science Foundation" },
    { slug: "science-exam-preparation-tips", title: "Science Exam Preparation Tips" },
    { slug: "photosynthesis-process-guide", title: "Photosynthesis Process Guide" },
    { slug: "human-digestive-system-guide", title: "Human Digestive System Guide" },
    { slug: "electricity-circuits-guide", title: "Electricity and Circuits Guide" },
    { slug: "science-experiments-home-grade-5-8", title: "Science Experiments to Try at Home" },
  ],
  french: [
    { slug: "learn-french-online-free-quizzes-a1-b1-c1", title: "Learn French Online with Free Quizzes (A1–C1)" },
    { slug: "why-learn-a-second-language-benefits-students", title: "Why Learn a Second Language?" },
    { slug: "learn-spanish-online-free-quizzes-a1-b1-c1", title: "Learn Spanish Online with Free Quizzes" },
    { slug: "learn-german-online-free-quizzes-beginners-advanced", title: "Learn German Online with Free Quizzes" },
  ],
};

// Deterministic, SSG-friendly rotation so different weeks surface different guides.
export function getRelatedGuideLinks(subject: string, seed = 0, limit = 3): GuideLink[] {
  const list = GUIDES[subject.toLowerCase()] || [];
  if (list.length === 0) return [];
  const offset = ((seed % list.length) + list.length) % list.length;
  const rotated = [...list.slice(offset), ...list.slice(0, offset)];
  return rotated.slice(0, limit);
}

export default function RelatedGuides({ subject, seed = 0 }: { subject: string; seed?: number }) {
  const links = getRelatedGuideLinks(subject, seed);
  if (links.length === 0) return null;
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-4">
      <div className="bg-white rounded-xl border border-gray-100 p-5 sm:p-6 shadow-sm">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Related reading
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {links.map((link) => (
            <li key={link.slug}>
              <Link
                href={`/blog/${link.slug}`}
                className="text-sm text-brand-navy hover:text-brand-orange transition-colors flex items-start gap-2"
              >
                <span aria-hidden>📘</span>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
