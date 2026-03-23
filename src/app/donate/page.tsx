import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Donate — Support Free English, Maths & Science Quizzes for Students | The Practise Ground",
  description:
    "Support The Practise Ground — a free quiz platform with 23,400+ questions for Grades 5-10 students. Your donation helps us create quality English, Maths & Science content and keep everything free.",
  keywords: [
    "donate to education",
    "support free learning",
    "donate to student quiz platform",
    "free education charity",
    "support free quizzes for students",
  ],
  alternates: { canonical: "https://www.thepractiseground.in/donate" },
};

export default function DonatePage() {
  return (
    <div className="bg-theme-gradient min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-5xl mb-4">💛</div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Support Free Education
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            The Practise Ground is free for every student — no ads, no sign-ups, no paywalls. Your donation helps us keep it that way.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Donate Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 text-center mb-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-4">
            Every Contribution Makes a Difference
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            We currently offer 23,400+ quiz questions across English, Maths and Science for Grades 5-10, completely free. Your support helps us add more subjects, improve content quality, and reach more students.
          </p>

          <a
            href="https://www.paypal.com/ncp/payment/U3FSDHDCCEKJE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-orange text-white font-bold px-8 py-4 rounded-xl hover:opacity-85 transition-all text-lg shadow-lg hover:shadow-xl"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
              <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788l.038-.2.73-4.627.047-.256a.925.925 0 0 1 .913-.787h.576c3.727 0 6.643-1.513 7.496-5.89.357-1.831.172-3.36-.72-4.535z" />
            </svg>
            Donate via PayPal
          </a>
          <p className="text-gray-400 text-sm mt-4">Secure payment via PayPal. No account required.</p>
        </div>

        {/* What Your Donation Supports */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-xl font-bold text-brand-navy mb-6 text-center">What Your Donation Supports</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "📝", title: "New Content", desc: "More subjects, more grades, and better questions for students." },
              { icon: "🌐", title: "Free Access", desc: "Keeping quizzes free for every student, everywhere." },
              { icon: "🛠️", title: "Platform Improvements", desc: "Better features, faster loading, and a smoother experience." },
              { icon: "📱", title: "Reaching More Students", desc: "Helping students in underserved communities access quality practice." },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-semibold text-brand-navy mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Other Ways to Help */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-xl font-bold text-brand-navy mb-4">Other Ways to Help</h2>
          <p className="text-gray-600 mb-6">
            Not able to donate right now? You can still make a big difference by spreading the word.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/?text=${encodeURIComponent("Check out The Practise Ground — free English & Maths quizzes for Grades 5-10. No sign-up needed!\nhttps://www.thepractiseground.in")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-600 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.243-1.216l-.252-.149-3.054.801.801-3.054-.149-.252A8 8 0 1112 20z"/>
              </svg>
              Share on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-navy text-white font-semibold px-6 py-3 rounded-xl hover:opacity-85 transition-all"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DonateAction",
            name: "Donate to The Practise Ground",
            description:
              "Support free English, Maths & Science quizzes for students in Grades 5-10. Your donation helps create quality educational content.",
            recipient: {
              "@type": "EducationalOrganization",
              name: "The Practise Ground",
              url: "https://www.thepractiseground.in",
            },
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://www.paypal.com/ncp/payment/U3FSDHDCCEKJE",
              actionPlatform: "https://schema.org/DesktopWebPlatform",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.thepractiseground.in" },
              { "@type": "ListItem", position: 2, name: "Donate", item: "https://www.thepractiseground.in/donate" },
            ],
          }),
        }}
      />
    </div>
  );
}
