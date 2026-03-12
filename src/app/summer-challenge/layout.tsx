import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free 8-Week Summer Study Plan for Grades 5-10",
  description:
    "Structured summer revision programme — English, Maths & Science quizzes for Grades 5-10. 600 practice questions across 8 weeks. Free, no sign-up needed. Aligned with CBSE, ICSE & Cambridge curricula.",
  keywords: [
    "summer vacation study plan",
    "summer revision grade 5",
    "summer revision grade 6",
    "summer revision grade 7",
    "summer revision grade 8",
    "summer revision grade 9",
    "summer revision grade 10",
    "productive activities kids summer holidays",
    "summer learning loss prevention",
    "CBSE summer practice",
    "free summer quizzes for students",
    "summer break study schedule",
    "summer challenge for students",
  ],
  openGraph: {
    title: "Free 8-Week Summer Challenge — Grade 5-10 | The Practise Ground",
    description:
      "Prevent summer learning loss with 8 weeks of structured quizzes. English, Maths & Science — 600 questions, completely free.",
    url: "https://www.thepractiseground.in/summer-challenge",
    type: "website",
  },
  alternates: {
    canonical: "https://www.thepractiseground.in/summer-challenge",
  },
};

export default function SummerChallengeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
