import type { Metadata } from "next";
import Link from "next/link";
import HeroImage from "@/components/HeroImage";
import MyProgressClient from "@/components/MyProgressClient";

export const metadata: Metadata = {
  title: "My Progress — The Practise Ground",
  description:
    "See the quizzes you've completed, your scores and your daily streak. Saved privately on your device — no sign-up.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.thepractiseground.in/my-progress" },
};

export default function MyProgressPage() {
  return (
    <div className="bg-theme-gradient min-h-screen pb-16">
      <section className="relative overflow-hidden py-10">
        <HeroImage src="/images/og/og-english.png" alt="Your quiz progress" overlay={0.6} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-white/70 text-sm mb-3">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">My Progress</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">My Progress</h1>
          <p className="text-white/80 text-sm max-w-2xl">
            Your completed quizzes, scores and daily streak — saved privately on this device. No sign-up required.
          </p>
        </div>
      </section>

      <MyProgressClient />
    </div>
  );
}
