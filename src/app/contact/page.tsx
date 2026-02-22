import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - The Practise Ground",
  description: "Get in touch with The Practise Ground team. We love hearing from students, parents, and teachers.",
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

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <h3 className="font-semibold text-brand-navy mb-1">Help Us With a Donation</h3>
              <p className="text-gray-600 text-sm">
                The Practise Ground is a free platform. If you find it useful, consider supporting us so we can continue creating quality content for students.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
