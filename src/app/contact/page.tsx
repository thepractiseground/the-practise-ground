import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - The Practise Ground",
  description: "Get in touch with The Practise Ground team. We love hearing from students, parents, and teachers.",
  alternates: { canonical: "https://www.thepractiseground.in/contact" },
};

export default function ContactPage() {
  return (
    <div className="bg-theme-gradient min-h-screen">
      <section className="bg-gradient-to-r from-brand-teal to-emerald-600 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Contact Us</h1>
          <p className="text-white/80 text-lg">We would love to hear from you!</p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">✉️</div>
            <h2 className="text-2xl font-bold text-brand-navy mb-2">Get in Touch</h2>
            <p className="text-gray-600">
              Whether you have questions, feedback, suggestions, or partnership ideas — we are all ears.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <h3 className="font-semibold text-brand-navy mb-1">Email Us</h3>
              <a href="mailto:hello@thepractiseground.in" className="text-brand-orange text-lg hover:underline">
                hello@thepractiseground.in
              </a>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <h3 className="font-semibold text-brand-navy mb-1">For Parents & Teachers</h3>
              <p className="text-gray-600 text-sm">
                Interested in using The Practise Ground in your classroom or for your children? We are happy to help you get started and can provide guidance on how to make the most of our quizzes.
              </p>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6 text-center">
              <h3 className="font-semibold text-brand-navy mb-2">Help Us With a Donation</h3>
              <p className="text-gray-600 text-sm mb-4">
                The Practise Ground is a free platform. If you find it useful, consider supporting us so we can continue creating quality content for students.
              </p>
              <a
                href="https://www.paypal.com/ncp/payment/U3FSDHDCCEKJE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-orange text-white font-bold px-6 py-3 rounded-xl hover:opacity-85 transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788l.038-.2.73-4.627.047-.256a.925.925 0 0 1 .913-.787h.576c3.727 0 6.643-1.513 7.496-5.89.357-1.831.172-3.36-.72-4.535z" />
                </svg>
                Donate via PayPal
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
