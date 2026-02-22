import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colouring Books for Kids - Available on Amazon",
  description: "Explore our collection of fun colouring books for kids. Vehicle colouring, mandala art, and more. Available on Amazon as paperback and Kindle editions.",
  keywords: ["colouring books for kids", "coloring book Amazon", "kids activity books", "mandala art coloring", "vehicle coloring book"],
};

const books = [
  {
    title: "Vehicle Coloring Fun & More Book",
    author: "Ivaan Chowdhury",
    description: "A fun-filled colouring book featuring vehicles of all kinds — cars, trucks, trains, planes, and more! Perfect for young vehicle enthusiasts.",
    amazonUrl: "https://www.amazon.com/Vehicle-Coloring-Fun-More-Book/dp/B0F5NCM3P7/",
    ageRange: "Ages 3-8",
    color: "from-blue-400 to-cyan-400",
  },
  {
    title: "Mandala Art",
    author: "Minnoli Chowdhury",
    description: "Beautiful mandala patterns for relaxation and creativity. Each page features intricate designs that are both calming and engaging for artists of all skill levels.",
    amazonUrl: "https://www.amazon.com/Mandala-Art-Minnoli-Chowdhury/dp/B0F625GJXR/",
    ageRange: "Ages 8+",
    color: "from-purple-400 to-pink-400",
  },
];

export default function ColouringBooksPage() {
  return (
    <div className="bg-theme-gradient min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-pink-400 to-purple-500 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-white/70 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Colouring Books</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Colouring Books for Kids
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Spark creativity with our collection of beautifully designed colouring books — available on Amazon!
          </p>
        </div>
      </section>

      {/* Books Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {books.map((book) => (
            <div key={book.title} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`bg-gradient-to-r ${book.color} p-8 text-center`}>
                <div className="text-6xl mb-4">🎨</div>
                <h2 className="text-xl font-bold text-white">{book.title}</h2>
                <p className="text-white/80 text-sm mt-1">by {book.author}</p>
              </div>
              <div className="p-6">
                <span className="inline-block bg-pink-100 text-pink-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {book.ageRange}
                </span>
                <p className="text-gray-600 mb-6 leading-relaxed">{book.description}</p>
                <a
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-xl transition-colors w-full justify-center"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.045 18.02c.071-.116.098-.19.098-.19-.243-.096-.395-.268-.395-.268C.98 16.042.04 12.665.04 12.665c-.048-.106-.09-.22-.09-.22C-.083 11.833 0 10.762 0 10.762c.015-.403.123-.746.123-.746C.458 9.023 1.3 8.412 1.3 8.412c.413-.302.882-.442.882-.442.534-.16 1.055-.178 1.055-.178.386-.004.707.053.707.053 1.225.194 2.057.788 2.057.788.239.168.44.373.44.373.246.255.34.478.34.478.053.1.076.246.076.246.03.267-.102.505-.102.505-.18.284-.456.442-.456.442-.276.156-.635.243-.635.243-.208.05-.462.072-.462.072L3.16 11H2.04l-.58-.015c-.136.032-.246.08-.246.08-.237.12-.35.318-.35.318-.093.17-.078.362-.078.362.03.22.182.388.182.388.2.205.522.275.522.275.227.048.42.048.42.048L3.54 12.5l.83.01c.265-.032.478-.092.478-.092.347-.108.564-.302.564-.302.195-.178.288-.39.288-.39.048-.128.06-.26.06-.26.023-.24-.095-.462-.095-.462-.106-.18-.3-.316-.3-.316-.236-.147-.555-.22-.555-.22-.218-.05-.487-.06-.487-.06h-1.87l-.053-.005 2.467-4.13.038-.078h5.89l.098.005-2.57 4.275.098.02h1.99l.093-.005c.295.005.52.065.52.065.473.112.743.396.743.396.16.18.23.37.23.37.064.175.058.37.058.37-.006.34-.205.628-.205.628-.2.28-.506.447-.506.447-.327.173-.693.228-.693.228-.206.032-.416.032-.416.032l-1.89.005-1.12-.005c.048.107.112.22.112.22C8.645 14.027 9.6 14.94 9.6 14.94c1.14 1.012 2.77 1.396 2.77 1.396 1.107.265 2.02.208 2.02.208.568-.037.956-.146.956-.146.38-.106.624-.254.624-.254.278-.17.362-.336.362-.336.053-.11.053-.19.053-.19.005-.12-.058-.22-.058-.22-.058-.08-.164-.14-.164-.14-.065-.04-.164-.076-.164-.076-.062-.022-.174-.042-.174-.042-.09-.013-.194-.018-.194-.018l-1.56-.005c-.36-.037-.617-.134-.617-.134-.443-.166-.7-.462-.7-.462-.195-.23-.276-.484-.276-.484-.053-.175-.053-.36-.053-.36.014-.296.164-.537.164-.537.176-.275.456-.442.456-.442.323-.185.7-.262.7-.262.278-.053.547-.06.547-.06l2.95-.01.87.005c.493.048.847.22.847.22.496.233.75.573.75.573.172.237.22.447.22.447.027.168.01.357.01.357-.032.24-.14.42-.14.42a1.81 1.81 0 01-.377.418c-.358.27-.807.424-.807.424-.37.124-.766.178-.766.178-.37.048-.807.06-.807.06l-5.22-.022c.058.07.116.145.116.145.85.94 2.32 1.64 2.32 1.64 1.45.667 3.44.744 3.44.744 1.202.016 1.918-.178 1.918-.178 1.158-.316 1.697-.76 1.697-.76.247-.208.334-.373.334-.373.037-.074.037-.134.037-.134l-.01-.08c-.017-.044-.06-.075-.06-.075l-.072-.034-.1-.013h-.27l-.207-.005c-.16-.032-.268-.085-.268-.085-.158-.08-.242-.198-.242-.198-.058-.094-.075-.204-.075-.204-.01-.128.055-.24.055-.24.07-.117.192-.192.192-.192.146-.08.33-.102.33-.102.155-.013.287-.005.287-.005l.79.017.457-.01c.274-.037.486-.112.486-.112.234-.085.37-.22.37-.22.09-.09.128-.19.128-.19.018-.069.01-.15.01-.15-.014-.1-.075-.18-.075-.18-.08-.097-.22-.16-.22-.16-.14-.058-.322-.08-.322-.08-.155-.013-.3-.005-.3-.005l-1.91.01-1.24-.005c-.058-.058-.11-.116-.11-.116-.66-.76-1.05-1.62-1.05-1.62-.493-1.07-.49-2.148-.49-2.148.005-.65.162-1.22.162-1.22.237-.847.746-1.492.746-1.492.53-.655 1.236-1.075 1.236-1.075.655-.38 1.33-.534 1.33-.534.553-.122 1.04-.117 1.04-.117.4.01.753.07.753.07 1.32.24 2.14.96 2.14.96.255.22.43.44.43.44.198.25.3.484.3.484l.055.145.005.098-.043.11c-.063.084-.167.133-.167.133-.138.06-.278.06-.278.06l-.36-.005c-.238-.032-.416-.112-.416-.112-.322-.146-.53-.39-.53-.39-.18-.22-.275-.47-.275-.47l-.048-.172-.005-.124.022-.097c.032-.063.086-.102.086-.102.065-.04.153-.053.153-.053l.17-.005.226.018c.28.06.463.186.463.186.276.187.406.462.406.462.075.168.086.316.086.316l-.005.195c-.04.19-.153.372-.153.372-.153.24-.39.408-.39.408-.282.193-.618.268-.618.268-.21.042-.39.042-.39.042"/>
                  </svg>
                  Buy on Amazon
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-12 bg-white/60 rounded-2xl p-8 text-center border-2 border-dashed border-pink-300">
          <div className="text-5xl mb-4">🎨📚</div>
          <h3 className="text-2xl font-bold text-brand-navy mb-2">More Books Coming Soon!</h3>
          <p className="text-gray-600 max-w-md mx-auto">
            We are working on more colouring and activity books for kids of all ages. Check back soon for new additions to our collection!
          </p>
        </div>
      </section>
    </div>
  );
}
