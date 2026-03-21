import type { Metadata } from "next";
import { Open_Sans, Varela_Round } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import FloatingPromoBar from "@/components/FloatingPromoBar";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-open-sans",
});

const varelaRound = Varela_Round({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-varela-round",
});

export const metadata: Metadata = {
  title: {
    default: "The Practise Ground - Free English, Maths & Science Quizzes for Grades 5-10",
    template: "%s | The Practise Ground",
  },
  description:
    "Free English, Maths & Science quizzes for Grades 5-10. Practice grammar, vocabulary, algebra, geometry, physics, chemistry, biology and more. No sign-up required!",
  keywords: [
    "English quiz", "grammar practice", "English questions for class 5",
    "English questions for class 6", "English questions for class 7",
    "English questions for class 8", "English questions for class 9",
    "English questions for class 10", "CBSE English practice",
    "free English quiz for students", "English grammar quiz online",
    "vocabulary test for kids", "English practice for Indian students",
  ],
  openGraph: {
    title: "The Practise Ground - Free English, Maths & Science Quizzes for Grades 5-10",
    description: "23,400+ free quiz questions across English, Maths & Science. Practice grammar, algebra, physics, chemistry & more. No sign-up required!",
    url: "https://www.thepractiseground.in",
    siteName: "The Practise Ground",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Practise Ground - Free English, Maths & Science Quizzes",
    description: "23,400+ free quiz questions for Grades 5-10. No sign-up required!",
  },
  robots: { index: true, follow: true, "max-image-preview": "large" as const },
  alternates: { canonical: "https://www.thepractiseground.in" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${openSans.variable} ${varelaRound.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "The Practise Ground",
              url: "https://www.thepractiseground.in",
              description: "Free English, Maths & Science practice quizzes for students in Grades 5-10",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <GoogleAnalytics />
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingPromoBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
