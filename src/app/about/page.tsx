import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - The Practise Ground",
  description: "Learn about The Practise Ground — a free English practice platform for students in Grades 5 to 10, founded with the mission to make quality English education accessible to all.",
};

export default function AboutPage() {
  return (
    <div className="bg-theme-gradient min-h-screen">
      <section className="bg-gradient-to-r from-brand-navy to-blue-800 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">About The Practise Ground</h1>
          <p className="text-white/80 text-lg">Making English practice accessible, fun, and free.</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-brand-navy mb-3">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              The Practise Ground was created with a simple belief: every student deserves access to quality English practice material, regardless of their background or financial situation. We provide free, interactive English quizzes for students in Grades 5 through 10, covering grammar, vocabulary, reading comprehension, and more.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-navy mb-3">What We Offer</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our platform features over 7,500 carefully crafted multiple-choice questions across 6 grade levels. Each grade has 52 weeks of content — a full year of English practice. Topics are aligned with school curricula and cover everything from basic sentence structure to advanced literary devices.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We also offer a growing collection of colouring and activity books for younger children, available on Amazon.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-navy mb-3">Why Free?</h2>
            <p className="text-gray-600 leading-relaxed">
              We believe that practice is the key to mastering any language. By keeping our quizzes free and open — no sign-up required — we remove every barrier between a student and their next learning opportunity. Just pick your grade, pick a quiz, and start practising.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-navy mb-3">Get in Touch</h2>
            <p className="text-gray-600 leading-relaxed">
              We love hearing from students, parents, and teachers. Whether you have feedback, suggestions, or just want to say hello — reach out at{" "}
              <a href="mailto:hello@thepractiseground.in" className="text-brand-orange hover:underline">
                hello@thepractiseground.in
              </a>
              {" "}or visit our{" "}
              <Link href="/contact" className="text-brand-orange hover:underline">contact page</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
