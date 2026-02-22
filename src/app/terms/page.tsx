import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for The Practise Ground. Understand the rules and guidelines for using our free quiz platform.",
  alternates: { canonical: "https://www.thepractiseground.in/terms" },
};

export default function TermsPage() {
  return (
    <div className="bg-theme-gradient min-h-screen">
      <section className="bg-gradient-to-r from-brand-navy to-blue-800 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Terms of Use</h1>
          <p className="text-white/80 text-lg">Last updated: February 2026</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 space-y-8 text-gray-700 leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">Acceptance of Terms</h2>
            <p>
              By accessing and using The Practise Ground website at <strong>thepractiseground.in</strong>,
              you agree to be bound by these Terms of Use. If you do not agree with any part of these
              terms, please do not use our website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">Description of Service</h2>
            <p>
              The Practise Ground is a free educational platform that provides interactive English and
              Maths quizzes for students in Grades 5 to 10. Our services include weekly multiple-choice
              quizzes, educational blog content, and related learning resources. All quiz content is
              provided free of charge with no registration required.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">Use of Content</h2>
            <p className="mb-3">
              All content on this website — including quiz questions, blog articles, text, graphics, and
              design — is the intellectual property of The Practise Ground unless otherwise stated.
            </p>
            <p className="mb-2">
              <strong>You may:</strong> Use our quizzes and resources for personal, non-commercial
              educational purposes. Share links to our content with other students, parents, or teachers.
              Reference our content in educational contexts with proper attribution.
            </p>
            <p>
              <strong>You may not:</strong> Copy, reproduce, or redistribute our quiz questions or blog
              content for commercial purposes. Use automated tools (bots, scrapers) to extract content
              from our site. Modify, adapt, or create derivative works from our content without written
              permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">Educational Disclaimer</h2>
            <p>
              Our quizzes and educational content are designed to supplement learning and are not a
              substitute for formal education, professional tutoring, or official curriculum materials.
              While we strive for accuracy, we make no guarantees about the completeness or suitability
              of our content for specific exam preparation. Quiz scores and results are for practice
              purposes only and should not be taken as an assessment of academic ability.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites (such as Amazon for our colouring
              books). These links are provided for your convenience. We are not responsible for the
              content, privacy practices, or terms of any third-party websites. We encourage you to
              read the terms and privacy policies of any third-party sites you visit.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">Limitation of Liability</h2>
            <p>
              The Practise Ground is provided on an &quot;as is&quot; and &quot;as available&quot; basis.
              We do not guarantee that the website will be uninterrupted, error-free, or free from viruses
              or other harmful components. To the fullest extent permitted by law, we shall not be liable
              for any direct, indirect, incidental, or consequential damages arising from the use of or
              inability to use our website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">Changes to These Terms</h2>
            <p>
              We reserve the right to update or modify these Terms of Use at any time. Changes will
              be posted on this page with an updated date. Your continued use of the website after
              changes are posted constitutes acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">Governing Law</h2>
            <p>
              These Terms of Use are governed by the laws of India. Any disputes arising from the
              use of this website shall be subject to the jurisdiction of the courts in India.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">Contact Us</h2>
            <p>
              If you have questions about these Terms of Use, please contact us at{" "}
              <a href="mailto:hello@thepractiseground.in" className="text-brand-orange hover:underline">
                hello@thepractiseground.in
              </a>{" "}
              or visit our{" "}
              <Link href="/contact" className="text-brand-orange hover:underline">
                Contact page
              </Link>.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
