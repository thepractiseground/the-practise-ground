import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PhysicsFormulaTabs from "@/components/PhysicsFormulaTabs";
import ClassroomShare from "@/components/ClassroomShare";

const URL = "https://www.thepractiseground.in/physics-numericals";

export const metadata: Metadata = {
  title: "Physics Numericals with Solutions + Free PDF (Class 9–12)",
  description:
    "Solve physics numericals step by step. Formulas by topic, 9 solved examples from easy to hard, and a free 7-page practice pack with answers and a classroom poster.",
  keywords: [
    "physics numericals", "physics numericals with solutions", "numericals in physics", "how to solve physics numericals",
    "physics numericals class 10", "physics numericals class 11", "physics numericals pdf", "physics formulas",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: "Physics Numericals with Solutions + Free PDF (Class 9–12)",
    description: "Formulas by topic, solved examples from easy to hard, and a free practice pack with answers.",
    url: URL,
    siteName: "The Practise Ground",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://www.thepractiseground.in/images/blog/solve-physics-numericals-diagram.png", width: 1200, height: 800, alt: "Solve physics numericals: the 5-step method" }],
  },
};

const faqs: { q: string; a: string }[] = [
  { q: "What is a numerical in physics?", a: "A numerical is a problem that asks you to calculate a value, such as speed, force, current or image distance, using given numbers and a physics formula." },
  { q: "How do I solve a physics numerical step by step?", a: "Write what is given and what is asked, with units. Pick the formula that links them. Convert every unit to SI. Substitute and calculate. Finally check the unit, the sign and whether the answer is sensible." },
  { q: "Which formulas matter most for Class 9 and Class 10?", a: "Speed, v = u + at, s = ut + ½at², F = ma, W = Fs, P = W/t, density, pressure, V = IR, P = VI, series and parallel resistance, and the mirror and lens formulas cover most board numericals." },
  { q: "Why is my answer wrong even though I used the right formula?", a: "The usual causes are unconverted units (km/h, g, cm, minutes), wrong signs in mirror and lens problems, mixing up mass and weight, and using g = 10 in one step and 9.8 in another." },
  { q: "Should I use g = 9.8 or g = 10 m/s²?", a: "Use the value your question or teacher specifies. If nothing is stated, 9.8 m/s² is the exact value and 10 m/s² is a common simplification. Write down the value you use and keep it the same throughout." },
  { q: "How do I decide the signs in mirror and lens numericals?", a: "Use the Cartesian sign convention. Measure distances from the pole or optical centre. Distances in the direction of the incident light are positive and distances against it are negative. A concave mirror has a negative focal length and a convex lens has a positive one." },
  { q: "Are SI units compulsory?", a: "Using SI units (metre, kilogram, second, ampere) avoids mistakes because the formulas are written for them. If you work in other units, make sure they are consistent, and convert the final answer to the unit asked." },
  { q: "Where can I get physics numericals with answers as a PDF?", a: "Download the free practice pack on this page. It has 24 questions in three levels, worked examples, a full answer key and a one-page poster you can print for your classroom." },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Physics Numericals with Solutions",
    url: URL,
    description: "Formulas by topic, solved physics numericals from easy to hard, and a free practice pack with answers.",
    isPartOf: { "@type": "WebSite", name: "The Practise Ground", url: "https://www.thepractiseground.in" },
    educationalLevel: "Classes 9 to 12",
    about: "Physics numericals",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.thepractiseground.in" },
      { "@type": "ListItem", position: 2, name: "Physics Numericals", item: URL },
    ],
  },
];

const Ex = ({ level, title, children }: { level: string; title: string; children: React.ReactNode }) => (
  <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6">
    <p className="text-xs font-bold uppercase tracking-wide text-brand-orange mb-1">{level}</p>
    <h3 className="text-lg font-bold text-brand-navy mb-3">{title}</h3>
    <div className="text-gray-800 space-y-1.5 leading-relaxed">{children}</div>
  </div>
);

const Step = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <p>
    <span className="inline-block w-20 font-bold text-teal-700">{label}</span>
    {children}
  </p>
);

export default function PhysicsNumericalsPage() {
  return (
    <div className="bg-theme-gradient min-h-screen">
      {jsonLd.map((j, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(j) }} />
      ))}

      <section className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600" aria-label="Breadcrumb">
            <Link href="/" className="text-brand-orange hover:underline">Home</Link>
            <span>→</span>
            <span className="text-gray-800 font-medium">Physics Numericals</span>
          </nav>
        </div>
      </section>

      <header className="bg-brand-navy">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
            Physics <span className="text-brand-orange">Numericals</span> with Solutions
          </h1>
          <p className="text-lg text-blue-100 mt-4 max-w-3xl">
            Formulas by topic, nine solved examples from easy to hard, and a free practice pack with answers. For Classes 9 to 12.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#pack" className="bg-brand-orange hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-xl">Free PDF pack</a>
            <a href="#examples" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-2.5 rounded-xl">Solved examples</a>
            <a href="#formula-finder" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-2.5 rounded-xl">Formulas</a>
            <ClassroomShare
              url="https://www.thepractiseground.in/physics-numericals"
              title="Physics Numericals with Solutions"
              body="Formulas by topic, solved examples and a free 3-level practice pack with answers."
              location="physics_numericals"
              variant="onDark"
              className="px-5"
            />
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-12">
        {/* Method */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-3">The 5-step method for any numerical</h2>
            <ol className="space-y-2 text-gray-800 list-decimal list-inside leading-relaxed">
              <li><strong>Write</strong> what is given and what you must find, with units.</li>
              <li><strong>Pick</strong> the formula that links them.</li>
              <li><strong>Convert</strong> every unit to SI (metre, kilogram, second, ampere).</li>
              <li><strong>Substitute</strong> the numbers and calculate.</li>
              <li><strong>Check</strong> the unit, the sign and whether the size makes sense.</li>
            </ol>
            <p className="text-gray-700 mt-3">
              For the long version with common mistakes, read our guide:{" "}
              <Link href="/blog/how-to-solve-physics-numericals" className="text-brand-orange font-semibold hover:underline">How to Solve Physics Numericals</Link>.
            </p>
          </div>
          <Image
            src="/images/blog/solve-physics-numericals-diagram.png"
            alt="How to solve physics numericals: the 5-step method with formula selection"
            width={1200}
            height={800}
            className="w-full rounded-xl border border-gray-200 shadow-sm"
          />
        </section>

        <PhysicsFormulaTabs />

        {/* PDF */}
        <section id="pack" className="bg-orange-50 border border-orange-200 rounded-2xl p-5 sm:p-7 grid sm:grid-cols-[170px_1fr] gap-6 items-center">
          <Image src="/posters/thumbnails/physics-numericals-practice-pack.png" alt="Physics Numericals Practice Pack: free 3-level PDF with answers" width={600} height={848} className="w-40 mx-auto rounded-lg shadow-md border border-gray-200" />
          <div>
            <h2 className="text-2xl font-bold text-brand-navy mb-2">Free Physics Numericals Practice Pack (PDF)</h2>
            <p className="text-gray-700 mb-4">
              Seven pages, from simple to complex. A formula sheet comes first. Level 1 has ten one-formula questions (Classes 9 and 10). Level 2 has eight two-step problems (Classes 9 to 11). Level 3 has six multi-stage challenges (Classes 11 and 12). It also has three worked examples, a full answer key and a one-page poster.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Print the poster and pin it on your classroom or lab noticeboard.</strong> Students can scan its QR code to come back here for more practice.
            </p>
            <a href="/posters/physics-numericals-practice-pack.pdf" download className="inline-flex items-center gap-2 bg-brand-orange hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl shadow transition-colors">
              Download the PDF <span aria-hidden="true">↓</span>
            </a>
            <a href="/posters/physics-numericals-poster.pdf" download className="inline-flex items-center gap-2 ml-0 sm:ml-3 mt-3 sm:mt-0 bg-white hover:bg-orange-100 text-brand-navy border border-brand-navy font-bold px-6 py-3 rounded-xl transition-colors">
              Poster only (1 page) <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        {/* Examples */}
        <section id="examples">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-2">Solved physics numericals, easy to hard</h2>
          <p className="text-gray-700 mb-5">Each example follows the 5-step method. Where a value of g is needed, we use g = 10 m/s² to keep the arithmetic simple.</p>
          <div className="grid md:grid-cols-2 gap-5">
            <Ex level="Level 1 · Classes 9–10" title="1. Braking car (motion)">
              <p>A car moving at 15 m/s brakes with a deceleration of 3 m/s² until it stops. Find the time taken and the stopping distance.</p>
              <Step label="Given">u = 15 m/s, v = 0, a = −3 m/s²</Step>
              <Step label="Formula">v = u + at and v² = u² + 2as</Step>
              <Step label="Solve">t = (0 − 15) / (−3) = 5 s. s = (0 − 225) / (2 × −3) = 37.5 m.</Step>
              <Step label="Check">Average speed 7.5 m/s × 5 s = 37.5 m. It matches.</Step>
            </Ex>
            <Ex level="Level 1 · Classes 9–10" title="2. Falling ball (free fall)">
              <p>A ball is dropped from a height of 45 m. How long does it take to land and how fast is it moving just before impact?</p>
              <Step label="Given">u = 0, s = 45 m, a = g = 10 m/s²</Step>
              <Step label="Formula">s = ½gt² and v = gt</Step>
              <Step label="Solve">t² = 2 × 45 / 10 = 9, so t = 3 s. v = 10 × 3 = 30 m/s.</Step>
              <Step label="Check">v² = 2gs = 900, so v = 30 m/s. It matches.</Step>
            </Ex>
            <Ex level="Level 2 · Classes 9–11" title="3. Force with friction">
              <p>A 1500 kg car is driven with a force of 4500 N. Resistance is 1500 N. Find its acceleration.</p>
              <Step label="Given">m = 1500 kg, driving force 4500 N, resistance 1500 N</Step>
              <Step label="Formula">Net force = 4500 − 1500 = 3000 N, then F = ma</Step>
              <Step label="Solve">a = 3000 / 1500 = 2 m/s².</Step>
              <Step label="Check">Use the net force, not the driving force alone.</Step>
            </Ex>
            <Ex level="Level 2 · Class 10" title="4. Bulb rating (electricity)">
              <p>A bulb is rated 100 W, 220 V. Find the current it draws and its resistance.</p>
              <Step label="Given">P = 100 W, V = 220 V</Step>
              <Step label="Formula">P = VI and R = V² / P</Step>
              <Step label="Solve">I = 100 / 220 = 0.45 A. R = 220² / 100 = 484 Ω.</Step>
              <Step label="Check">V = IR = 0.4545 × 484 = 220 V. It matches.</Step>
            </Ex>
            <Ex level="Level 2 · Class 10" title="5. Electricity bill">
              <p>A 2 kW heater runs for 3 hours every day. Find the cost for 30 days at Rs 8 per unit.</p>
              <Step label="Given">P = 2 kW, t = 3 h per day, Rs 8 per kWh</Step>
              <Step label="Formula">E = P × t, and 1 kWh = 1 unit</Step>
              <Step label="Solve">2 × 3 = 6 kWh per day. 30 days: 180 kWh. Cost = 180 × 8 = Rs 1,440.</Step>
              <Step label="Check">Power is in kW and time in hours, so no conversion is needed.</Step>
            </Ex>
            <Ex level="Level 2 · Class 10" title="6. Convex mirror (light)">
              <p>A convex mirror has a focal length of 10 cm. An object is 20 cm in front of it. Find the image position and the magnification.</p>
              <Step label="Given">f = +10 cm, u = −20 cm</Step>
              <Step label="Formula">1/v + 1/u = 1/f and m = −v/u</Step>
              <Step label="Solve">1/v = 1/10 + 1/20 = 3/20, so v = +6.67 cm. m = −(6.67)/(−20) = +0.33.</Step>
              <Step label="Check">A convex mirror always gives a virtual, erect, smaller image behind the mirror.</Step>
            </Ex>
            <Ex level="Level 3 · Class 11" title="7. Projectile">
              <p>A ball is thrown at 20 m/s at 45° above the horizontal. Find the time of flight, the maximum height and the range.</p>
              <Step label="Given">u = 20 m/s, θ = 45°, g = 10 m/s²</Step>
              <Step label="Formula">T = 2u sin θ / g, H = u² sin² θ / 2g, R = u² sin 2θ / g</Step>
              <Step label="Solve">T = 2 × 20 × 0.707 / 10 = 2.83 s. H = 400 × 0.5 / 20 = 10 m. R = 400 × 1 / 10 = 40 m.</Step>
              <Step label="Check">At 45° the range is the maximum for this speed.</Step>
            </Ex>
            <Ex level="Level 3 · Classes 11–12" title="8. Collision (momentum)">
              <p>A 2 kg trolley moving at 6 m/s hits a stationary 4 kg trolley and they stick together. Find their speed and the kinetic energy lost.</p>
              <Step label="Given">m₁ = 2 kg, u₁ = 6 m/s, m₂ = 4 kg, u₂ = 0</Step>
              <Step label="Formula">m₁u₁ = (m₁ + m₂)v, and KE = ½mv²</Step>
              <Step label="Solve">v = 12 / 6 = 2 m/s. KE before = 36 J, after = 12 J, so 24 J is lost.</Step>
              <Step label="Check">Momentum is conserved. Kinetic energy is lost as heat and sound.</Step>
            </Ex>
            <Ex level="Level 3 · Class 12" title="9. Cell with internal resistance">
              <p>A cell of emf 9 V and internal resistance 0.5 Ω is connected to a 4 Ω resistor. Find the current and the terminal voltage.</p>
              <Step label="Given">E = 9 V, r = 0.5 Ω, R = 4 Ω</Step>
              <Step label="Formula">I = E / (R + r) and V = E − Ir</Step>
              <Step label="Solve">I = 9 / 4.5 = 2 A. V = 9 − 2 × 0.5 = 8 V.</Step>
              <Step label="Check">V = IR = 2 × 4 = 8 V. It matches.</Step>
            </Ex>
          </div>
        </section>

        {/* Mistakes */}
        <section className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-7">
          <h2 className="text-2xl font-bold text-brand-navy mb-3">Five mistakes that cost marks</h2>
          <ul className="space-y-2 text-gray-800 leading-relaxed list-disc list-inside">
            <li>Forgetting to convert units (km/h, g, cm, minutes) before substituting.</li>
            <li>Wrong signs in mirror and lens problems. Fix the sign convention first.</li>
            <li>Mixing up mass (kg) and weight (newton). Weight = mass × g.</li>
            <li>Using g = 10 in one step and 9.8 in the next. Pick one and keep it.</li>
            <li>Not checking the final unit and whether the size of the answer is sensible.</li>
          </ul>
        </section>

        {/* Keep going */}
        <section>
          <h2 className="text-2xl font-bold text-brand-navy mb-4">Keep going</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <Link href="/blog/how-to-solve-physics-numericals" className="block bg-gray-50 hover:bg-orange-50 border border-gray-200 rounded-xl p-4 font-semibold text-brand-navy">Guide: How to solve physics numericals</Link>
            <Link href="/blog/newtons-laws-of-motion" className="block bg-gray-50 hover:bg-orange-50 border border-gray-200 rounded-xl p-4 font-semibold text-brand-navy">Newton&apos;s laws of motion explained</Link>
            <Link href="/blog/electricity-circuits-guide" className="block bg-gray-50 hover:bg-orange-50 border border-gray-200 rounded-xl p-4 font-semibold text-brand-navy">Electricity and circuits with solved examples</Link>
            <Link href="/blog/light-reflection-refraction-guide" className="block bg-gray-50 hover:bg-orange-50 border border-gray-200 rounded-xl p-4 font-semibold text-brand-navy">Light: mirror and lens formulas</Link>
            <Link href="/quiz/science/10" className="block bg-gray-50 hover:bg-orange-50 border border-gray-200 rounded-xl p-4 font-semibold text-brand-navy">Class 10 Science quizzes</Link>
            <Link href="/quiz/physics/11" className="block bg-gray-50 hover:bg-orange-50 border border-gray-200 rounded-xl p-4 font-semibold text-brand-navy">Class 11 Physics quizzes</Link>
            <Link href="/quiz/physics/12" className="block bg-gray-50 hover:bg-orange-50 border border-gray-200 rounded-xl p-4 font-semibold text-brand-navy">Class 12 Physics quizzes</Link>
            <Link href="/posters-printables#physics" className="block bg-gray-50 hover:bg-orange-50 border border-gray-200 rounded-xl p-4 font-semibold text-brand-navy">More free Physics posters and PDFs</Link>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-brand-navy mb-4">Physics numericals: frequently asked questions</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="bg-white border border-gray-200 rounded-xl p-4 group">
                <summary className="font-semibold text-brand-navy cursor-pointer">{f.q}</summary>
                <p className="text-gray-700 mt-2 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
