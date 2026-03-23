import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Safe & Free Quiz Platform for Students | The Practise Ground",
  description: "Read The Practise Ground's privacy policy. No sign-up required, no personal data collected. Safe, free English, Maths & Science quizzes for Grades 5-10. COPPA-aware platform designed for students aged 10-16.",
  keywords: [
    "privacy policy educational website",
    "safe quiz platform for kids",
    "student data privacy",
    "free educational platform privacy",
    "children's privacy online learning",
  ],
  alternates: { canonical: "https://www.thepractiseground.in/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="bg-theme-gradient min-h-screen">
      <section className="bg-gradient-to-r from-brand-navy to-blue-800 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-white/80 text-lg">Last updated: February 2026</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 space-y-8 text-gray-700 leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">Introduction</h2>
            <p>
              The Practise Ground (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, and safeguard information when you visit
              our website at <strong>thepractiseground.in</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">Information We Collect</h2>
            <p className="mb-3">
              We aim to collect as little personal information as possible. Our quizzes are completely
              free and do not require sign-up or registration. Here is what we may collect:
            </p>
            <p className="mb-2">
              <strong>Automatically collected:</strong> When you visit our site, we may collect
              standard log information such as your IP address, browser type, device type, pages
              visited, and time spent on pages. This data is collected through cookies and analytics
              tools (such as Google Analytics) and is used solely to understand how our site is used
              and to improve the experience.
            </p>
            <p>
              <strong>Voluntarily provided:</strong> If you contact us through our contact form, we
              collect the information you provide such as your name and email address. This is used
              only to respond to your enquiry.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">How We Use Your Information</h2>
            <p>
              We use collected information to operate and improve the website, analyse usage patterns
              to make content more useful, respond to your enquiries, and ensure the security and
              integrity of our platform. We do not sell, rent, or share your personal information with
              third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">Cookies</h2>
            <p>
              Our site uses cookies for basic functionality and analytics. These include cookies for
              theme preferences (to provide a consistent visual experience) and analytics cookies
              (Google Analytics) to understand site usage. You can control cookies through your
              browser settings. Disabling cookies may affect some features of the site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">Third-Party Services</h2>
            <p>
              We use the following third-party services that may collect data according to their own
              privacy policies: Google Analytics (for site usage analytics), Vercel (for website
              hosting), and Google Fonts (for typography). We encourage you to review their respective
              privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">Children&apos;s Privacy</h2>
            <p>
              Our platform is designed for students in Grades 5 to 10 (typically ages 10-16). We do
              not knowingly collect personal information from children. Our quizzes are accessible
              without registration, and we encourage parents and guardians to supervise their
              children&apos;s online activities.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">Your Rights</h2>
            <p>
              You have the right to request access to any personal data we hold about you, request
              correction or deletion of your data, opt out of analytics tracking by using browser
              settings or a cookie opt-out tool, and contact us with any privacy-related questions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this
              page with an updated date. We encourage you to review this policy periodically.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:hello@thepractiseground.in" className="text-brand-orange hover:underline">
                hello@thepractiseground.in
              </a>.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
