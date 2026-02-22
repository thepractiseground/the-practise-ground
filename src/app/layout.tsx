import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: {
    default: "The Practise Ground - Free English Quizzes for Students Grade 5-10",
    template: "%s | The Practise Ground",
  },
  description:
    "Free English & Maths quizzes for Grades 5-10. Practice grammar, vocabulary, algebra, geometry and more. No sign-up required!",
  keywords: [
    "English quiz", "grammar practice", "English questions for class 5",
    "English questions for class 6", "English questions for class 7",
    "English questions for class 8", "English questions for class 9",
    "English questions for class 10", "CBSE English practice",
    "free English quiz for students", "English grammar quiz online",
    "vocabulary test for kids", "English practice for Indian students",
  ],
  openGraph: {
    title: "The Practise Ground - Free English Quizzes for Grades 5-10",
    description: "7,500+ free interactive English quiz questions. Practice grammar, vocabulary & more. No sign-up required!",
    url: "https://www.thepractiseground.in",
    siteName: "The Practise Ground",
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.thepractiseground.in" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Varela+Round&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "The Practise Ground",
              url: "https://www.thepractiseground.in",
              description: "Free English practice quizzes for students in Grades 5-10",
            }),
          }}
        />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Open Sans', Arial, sans-serif" }}>
        <GoogleAnalytics />
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
