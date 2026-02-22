import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Parents - The Practise Ground",
  description:
    "How The Practise Ground helps your child master English & Maths. Free weekly quizzes for Grades 5-10, aligned with CBSE, ICSE & Cambridge curricula.",
};

export default function ForParentsPage() {
  return (
    <div className="bg-theme-gradient min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-brand-navy to-blue-800 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            For Parents
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Everything you need to know about how The Practise Ground helps your
            child build confidence in English and Maths.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        {/* What is TPG */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-4">
            What is The Practise Ground?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Practise Ground is a <strong>completely free</strong> online quiz
            platform for students in Grades 5 through 10. We offer weekly English
            and Maths quizzes — 25 questions each — covering topics aligned with
            the CBSE, ICSE, Cambridge, and IB curricula.
          </p>
          <p className="text-gray-600 leading-relaxed">
            There are no sign-ups, no subscriptions, and no hidden costs. Your
            child can start practising immediately — just pick a grade, choose a
            week, and begin.
          </p>
        </div>

        {/* How it works */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-4">
            How It Works
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center">
                <span className="text-brand-orange font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-brand-navy">
                  Choose a subject &amp; grade
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Pick English or Maths, then select your child&apos;s grade
                  level (5 through 10).
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center">
                <span className="text-brand-orange font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-brand-navy">
                  Pick a weekly quiz
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Each grade has 52 weeks of content — a full year of practice.
                  Each quiz has 25 multiple-choice questions on a specific topic.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center">
                <span className="text-brand-orange font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-brand-navy">
                  Practise &amp; learn
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Your child answers questions, gets instant feedback on each
                  answer, and sees their score at the end. They can retake
                  quizzes as many times as they like.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center">
                <span className="text-brand-orange font-bold">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-brand-navy">
                  Share results
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  After completing a quiz, your child can share their score on
                  WhatsApp — great for celebrating progress with family.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What's covered */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-4">
            What&apos;s Covered?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-brand-navy mb-2">
                English (7,800 questions)
              </h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>Grammar — tenses, articles, prepositions, voice</li>
                <li>Vocabulary — synonyms, antonyms, idioms</li>
                <li>Reading comprehension</li>
                <li>Sentence structure &amp; error correction</li>
                <li>Letter &amp; essay writing concepts</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-brand-navy mb-2">
                Maths (7,800 questions)
              </h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>Number systems, fractions &amp; decimals</li>
                <li>Algebra — equations, polynomials, AP</li>
                <li>Geometry — triangles, circles, coordinate geometry</li>
                <li>Trigonometry &amp; mensuration</li>
                <li>Statistics, probability &amp; data handling</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            That&apos;s over <strong>15,600 questions</strong> in total — all
            free, all curriculum-aligned.
          </p>
        </div>

        {/* Why free */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-4">
            Why Is It Free?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            We believe every student deserves access to quality practice
            material, regardless of their family&apos;s financial situation.
            Tuition classes and premium apps can be expensive. We want to remove
            that barrier entirely.
          </p>
          <p className="text-gray-600 leading-relaxed">
            There are no ads, no paywalls, and no data collection beyond
            anonymous usage analytics. Your child&apos;s learning experience is
            our only priority.
          </p>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-4">
            Benefits for Your Child
          </h2>
          <div className="space-y-3">
            <div className="flex gap-3 items-start">
              <span className="text-green-500 text-lg mt-0.5">&#10003;</span>
              <p className="text-gray-600">
                <strong>Consistent practice</strong> — 15-20 minutes daily
                builds lasting skills, more effective than occasional cramming.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-green-500 text-lg mt-0.5">&#10003;</span>
              <p className="text-gray-600">
                <strong>Instant feedback</strong> — your child knows immediately
                whether they got an answer right, reinforcing correct thinking.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-green-500 text-lg mt-0.5">&#10003;</span>
              <p className="text-gray-600">
                <strong>Exam-aligned</strong> — questions follow CBSE, ICSE,
                Cambridge, and IB patterns, so practice translates directly to
                school performance.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-green-500 text-lg mt-0.5">&#10003;</span>
              <p className="text-gray-600">
                <strong>No pressure</strong> — quizzes can be retaken
                unlimited times. Mistakes are part of learning, not punishment.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-green-500 text-lg mt-0.5">&#10003;</span>
              <p className="text-gray-600">
                <strong>Self-paced</strong> — your child can work through topics
                at their own speed, going back to earlier weeks if needed.
              </p>
            </div>
          </div>
        </div>

        {/* Tips for parents */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-4">
            Tips for Parents
          </h2>
          <div className="space-y-3 text-gray-600">
            <p>
              <strong>Set a routine:</strong> Encourage your child to take one
              quiz a day — ideally at the same time. Consistency matters more
              than intensity.
            </p>
            <p>
              <strong>Celebrate progress, not perfection:</strong> If your child
              scores 60% one week and 70% the next, that&apos;s real growth.
              Focus on improvement, not a perfect score.
            </p>
            <p>
              <strong>Review mistakes together:</strong> After a quiz, ask your
              child about the questions they got wrong. Discussing errors is one
              of the most effective learning strategies.
            </p>
            <p>
              <strong>Mix subjects:</strong> Alternate between English and Maths
              quizzes to keep things fresh and build skills across both subjects.
            </p>
            <p>
              <strong>Use the blog:</strong> Our{" "}
              <Link
                href="/blog"
                className="text-brand-orange hover:underline"
              >
                learning blog
              </Link>{" "}
              has study tips, exam strategies, and subject guides that complement
              the quizzes.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-brand-orange to-orange-500 rounded-2xl shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Ready to Get Started?</h2>
          <p className="text-white/90 mb-6 max-w-lg mx-auto">
            Pick a subject below and let your child start practising today. It
            takes less than a minute — no sign-up needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quiz/5"
              className="bg-white text-brand-navy font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              English Quizzes
            </Link>
            <Link
              href="/quiz/maths"
              className="bg-white text-brand-navy font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Maths Quizzes
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-brand-navy">
                Do I need to create an account?
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                No. There&apos;s no sign-up, no login, and no personal
                information required. Just visit the site and start a quiz.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-navy">
                Is this really free? What&apos;s the catch?
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                It&apos;s genuinely free. We&apos;re a passion project committed
                to making quality education accessible. There are no hidden
                charges, premium tiers, or paywalls.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-navy">
                Which curriculum does it follow?
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Our content is primarily aligned with CBSE and ICSE syllabi, with
                topics also relevant to Cambridge and IB curricula. The core
                concepts are universal across boards.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-navy">
                Can my child use this on a phone?
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Yes! The site is fully mobile-friendly. It works on any device
                with a web browser — phone, tablet, or computer.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-navy">
                How often is new content added?
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Each grade already has 52 weeks of content per subject. We
                regularly add new blog posts, study tips, and may expand to
                additional subjects in the future.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-navy">
                I have feedback or a suggestion. How can I reach you?
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                We&apos;d love to hear from you! Visit our{" "}
                <Link
                  href="/contact"
                  className="text-brand-orange hover:underline"
                >
                  contact page
                </Link>{" "}
                or email us at hello@thepractiseground.in.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
