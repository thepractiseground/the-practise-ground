import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import DistanceCalculator from "@/components/DistanceCalculator";

const URL = "https://www.thepractiseground.in/distance-formula-calculator";

export const metadata: Metadata = {
  title: "Distance Formula Calculator with Steps (2D & 3D) + Free PDF",
  description:
    "Free distance formula calculator with step-by-step working, a graph, midpoint and slope. Learn the formula, see worked examples from easy to hard, and download a free 3-level practice PDF with answers.",
  keywords: [
    "distance formula", "distance formula calculator", "distance between two points", "distance formula examples",
    "distance formula 3D", "distance formula class 10", "distance and midpoint formula", "coordinate geometry",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: "Distance Formula Calculator with Steps (2D & 3D) + Free PDF",
    description: "Type in two points and see every step, the graph, the midpoint and the slope. Free practice PDF with answers.",
    url: URL,
    siteName: "The Practise Ground",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://www.thepractiseground.in/images/blog/distance-formula-diagram.png", width: 1200, height: 800, alt: "Distance formula diagram" }],
  },
};

const faqs: { q: string; a: string }[] = [
  { q: "What is the distance formula?", a: "The distance between two points (x₁, y₁) and (x₂, y₂) is d = √[(x₂ − x₁)² + (y₂ − y₁)²]. It gives the length of the straight line joining the two points." },
  { q: "Where does the distance formula come from?", a: "It comes from the Pythagorean theorem. Draw a horizontal and a vertical line from the two points to form a right triangle. The legs have lengths |x₂ − x₁| and |y₂ − y₁|, and the distance is the hypotenuse." },
  { q: "Does the order of the points matter?", a: "No. Swapping the points changes the signs of (x₂ − x₁) and (y₂ − y₁), but squaring removes the signs, so the distance is the same." },
  { q: "Can a distance be negative?", a: "No. The square root of a sum of squares is never negative, so the distance is zero or positive. It is zero only when the two points are the same." },
  { q: "How do I find the distance from the origin?", a: "Use (0, 0) as one point. The formula becomes d = √(x² + y²). For example, the distance of (5, 12) from the origin is √(25 + 144) = 13." },
  { q: "What is the shortcut for points on a horizontal or vertical line?", a: "If the y-values are equal, d = |x₂ − x₁|. If the x-values are equal, d = |y₂ − y₁|. No square root is needed." },
  { q: "What is the distance formula in 3D?", a: "Add the difference in z: d = √[(x₂ − x₁)² + (y₂ − y₁)² + (z₂ − z₁)²]. Tick the 3D box in the calculator above to try it." },
  { q: "What is the difference between the distance formula and the midpoint formula?", a: "The distance formula gives the length of the segment between two points. The midpoint formula gives the point exactly halfway: M = ((x₁ + x₂)/2, (y₁ + y₂)/2)." },
  { q: "Which classes study the distance formula?", a: "It is part of coordinate geometry in the school syllabus, usually studied around Classes 9 and 10 and used again in Classes 11 and 12. Check your own textbook or board for the exact chapter." },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Distance Formula Calculator",
    url: URL,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
    description: "Free calculator that finds the distance between two points in 2D or 3D with step-by-step working.",
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
      { "@type": "ListItem", position: 2, name: "Distance Formula Calculator", item: URL },
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

export default function DistanceFormulaCalculatorPage() {
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
            <span className="text-gray-800 font-medium">Distance Formula Calculator</span>
          </nav>
        </div>
      </section>

      <header className="bg-brand-navy">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
            Distance Formula <span className="text-brand-orange">Calculator</span> with Steps
          </h1>
          <p className="text-lg text-blue-100 mt-4 max-w-3xl">
            Find the distance between two points in 2D or 3D. See every step, the graph, the midpoint and the slope. Then practise with a free 3-level PDF.
          </p>
          <p className="mt-5 inline-block bg-white/10 text-white font-bold rounded-xl px-4 py-2 text-lg">
            d = √[(x₂ − x₁)² + (y₂ − y₁)²]
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-12">
        <DistanceCalculator />

        {/* PDF */}
        <section className="bg-orange-50 border border-orange-200 rounded-2xl p-5 sm:p-7 grid sm:grid-cols-[170px_1fr] gap-6 items-center">
          <Image src="/posters/thumbnails/distance-formula-practice-pack.png" alt="Distance Formula Practice Pack: free 3-level PDF with answers" width={600} height={848} className="w-40 mx-auto rounded-lg shadow-md border border-gray-200" />
          <div>
            <h2 className="text-2xl font-bold text-brand-navy mb-2">Free Distance Formula Practice Pack (PDF)</h2>
            <p className="text-gray-700 mb-4">
              Six pages, from simple to complex. Level 1 covers the basics (Classes 8 and 9). Level 2 uses distances to prove things, such as right triangles, collinear points and squares (Classes 9 and 10). Level 3 is the challenge: equidistant points, 3D and more (Classes 10 to 12). It includes worked examples, a full answer key and a one-page poster.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Print the poster and pin it on your classroom noticeboard.</strong> Students can scan its QR code to check any answer with this calculator.
            </p>
            <a href="/posters/distance-formula-practice-pack.pdf" download className="inline-flex items-center gap-2 bg-brand-orange hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl shadow transition-colors">
              Download the PDF <span aria-hidden="true">↓</span>
            </a>
            <a href="/posters/distance-formula-poster.pdf" download className="inline-flex items-center gap-2 ml-0 sm:ml-3 mt-3 sm:mt-0 bg-white hover:bg-orange-100 text-brand-navy border border-brand-navy font-bold px-6 py-3 rounded-xl transition-colors">
              Poster only (1 page) <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        {/* Explanation */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-brand-navy mb-3">What is the distance formula?</h2>
            <p className="text-gray-800 leading-relaxed mb-3">
              The distance formula finds the straight-line length between two points on a coordinate plane. For points (x₁, y₁) and (x₂, y₂):
            </p>
            <p className="bg-white border border-gray-200 rounded-xl px-4 py-3 font-bold text-brand-navy text-lg mb-3">d = √[(x₂ − x₁)² + (y₂ − y₁)²]</p>
            <p className="text-gray-800 leading-relaxed">
              It is the Pythagorean theorem in disguise. The horizontal gap is x₂ − x₁, the vertical gap is y₂ − y₁, and the distance is the hypotenuse of the right triangle they form.
            </p>
          </div>
          <Image src="/images/blog/distance-formula-diagram.png" alt="Distance formula diagram: d = √((x₂ − x₁)² + (y₂ − y₁)²) shown on a coordinate grid with a worked example" width={1200} height={800} className="w-full h-auto rounded-2xl border border-gray-200 shadow-sm" />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-navy mb-4">How to use it: 3 steps</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              ["1", "Subtract", "Find x₂ − x₁ and y₂ − y₁."],
              ["2", "Square and add", "Square each difference, then add the two results."],
              ["3", "Take the square root", "The root of the sum is the distance."],
            ].map(([n, t, d]) => (
              <div key={n} className="bg-white border border-gray-200 rounded-2xl p-5">
                <span className="w-9 h-9 rounded-full bg-brand-orange text-white font-bold inline-flex items-center justify-center mb-3">{n}</span>
                <h3 className="font-bold text-brand-navy mb-1">{t}</h3>
                <p className="text-gray-700 text-sm">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Worked examples */}
        <section>
          <h2 className="text-2xl font-bold text-brand-navy mb-1">Worked examples, from simple to complex</h2>
          <p className="text-gray-600 mb-5">Try each one in the calculator above to check the steps.</p>
          <div className="grid md:grid-cols-2 gap-5">
            <Ex level="Level 1 · Basic" title="Distance between (1, 2) and (4, 6)">
              <p>x₂ − x₁ = 3 and y₂ − y₁ = 4</p>
              <p>d = √(3² + 4²) = √(9 + 16) = √25 = <b>5</b></p>
            </Ex>
            <Ex level="Level 1 · Negative coordinates" title="Distance between (−3, 2) and (2, −1)">
              <p>x₂ − x₁ = 2 − (−3) = 5 and y₂ − y₁ = −1 − 2 = −3</p>
              <p>d = √(25 + 9) = <b>√34</b>, about 5.83 units</p>
            </Ex>
            <Ex level="Level 1 · Shortcut" title="Distance between (2, 5) and (9, 5)">
              <p>The y-values are equal, so the points lie on a horizontal line.</p>
              <p>d = |9 − 2| = <b>7</b>. No square root needed.</p>
            </Ex>
            <Ex level="Level 2 · Prove it" title="Is the triangle A(0, 0), B(3, 0), C(0, 4) right-angled?">
              <p>AB = 3, AC = 4, BC = √(3² + 4²) = 5</p>
              <p>3² + 4² = 25 = 5², so yes, the right angle is at A.</p>
            </Ex>
            <Ex level="Level 2 · Word problem" title="School at (2, 3), park at (8, 11), 1 unit = 100 m">
              <p>d = √(6² + 8²) = √100 = 10 units</p>
              <p>10 × 100 m = <b>1000 m (1 km)</b></p>
            </Ex>
            <Ex level="Level 2 · Find the unknown" title="Distance between (x, 2) and (3, −2) is 5. Find x.">
              <p>(x − 3)² + 4² = 25, so (x − 3)² = 9</p>
              <p>x − 3 = 3 or x − 3 = −3, so <b>x = 6 or x = 0</b></p>
            </Ex>
            <Ex level="Level 3 · Challenge" title="Point on the x-axis equidistant from A(2, −5) and B(−2, 9)">
              <p>Let P = (x, 0). Then PA² = PB²:</p>
              <p>(x − 2)² + 25 = (x + 2)² + 81</p>
              <p>−8x = 56, so <b>x = −7</b>. The point is (−7, 0).</p>
            </Ex>
            <Ex level="Level 3 · In 3D" title="Distance between (1, 2, 3) and (4, 6, 15)">
              <p>d = √(3² + 4² + 12²) = √(9 + 16 + 144) = √169 = <b>13</b></p>
              <p>Tick the 3D box in the calculator to check it.</p>
            </Ex>
          </div>
        </section>

        {/* Where it is used */}
        <section>
          <h2 className="text-2xl font-bold text-brand-navy mb-3">What the distance formula is used for</h2>
          <ul className="grid sm:grid-cols-2 gap-3 text-gray-800">
            {[
              ["Right triangles", "Check whether three points form a right triangle by testing Pythagoras on the three side lengths."],
              ["Isosceles and equilateral triangles", "Compare the three side lengths to classify a triangle."],
              ["Squares, rhombuses and rectangles", "Check the sides and the diagonals of a quadrilateral."],
              ["Collinear points", "Three points are collinear if the two shorter distances add up to the longest one."],
              ["Circles", "A point is on a circle if its distance from the centre equals the radius."],
              ["Maps and games", "Find the straight-line distance between two locations on a grid."],
            ].map(([t, d]) => (
              <li key={t} className="bg-white border border-gray-200 rounded-xl p-4"><b className="text-brand-navy">{t}.</b> {d}</li>
            ))}
          </ul>
        </section>

        {/* Related */}
        <section className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-7">
          <h2 className="text-xl font-bold text-brand-navy mb-4">Keep going</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
            <Link href="/blog/coordinate-geometry-graphs-visual-guide" className="block bg-gray-50 hover:bg-orange-50 border border-gray-200 rounded-xl p-4 font-semibold text-brand-navy">Coordinate geometry guide: distance, midpoint and lines</Link>
            <Link href="/quiz/maths/10" className="block bg-gray-50 hover:bg-orange-50 border border-gray-200 rounded-xl p-4 font-semibold text-brand-navy">Free Class 10 Maths quiz</Link>
            <Link href="/quiz/maths/9" className="block bg-gray-50 hover:bg-orange-50 border border-gray-200 rounded-xl p-4 font-semibold text-brand-navy">Free Class 9 Maths quiz</Link>
            <Link href="/posters-printables#maths" className="block bg-gray-50 hover:bg-orange-50 border border-gray-200 rounded-xl p-4 font-semibold text-brand-navy">More free Maths posters and PDFs</Link>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-brand-navy mb-4">Frequently asked questions</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="bg-white border border-gray-200 rounded-xl p-4 group">
                <summary className="font-bold text-brand-navy cursor-pointer">{f.q}</summary>
                <p className="text-gray-700 mt-2 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
