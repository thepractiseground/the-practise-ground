"use client";

interface WhatsAppShareBlogProps {
  title: string;
  excerpt: string;
  slug: string;
  category?: string;
}

export default function WhatsAppShareBlog({ title, excerpt, slug, category }: WhatsAppShareBlogProps) {
  const mathsCategories = ["Maths Concepts", "Maths Tips", "Problem Solving"];
  const subject = category && mathsCategories.includes(category) ? "Maths" : "English";

  const handleShare = () => {
    const url = `https://www.thepractiseground.in/blog/${slug}`;
    const text = `📖 ${title}\n\n${excerpt}\n\nRead more & practise free ${subject} quizzes:`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + "\n" + url)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 sm:p-8 my-8">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        {/* WhatsApp Icon */}
        <div className="flex-shrink-0">
          <svg
            viewBox="0 0 32 32"
            className="w-14 h-14 sm:w-16 sm:h-16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="16" fill="#25D366" />
            <path
              d="M23.3 8.7C21.4 6.8 18.8 5.7 16 5.7c-5.7 0-10.3 4.6-10.3 10.3 0 1.8.5 3.6 1.4 5.1L5.7 26.3l5.4-1.4c1.5.8 3.1 1.2 4.9 1.2 5.7 0 10.3-4.6 10.3-10.3 0-2.8-1.1-5.4-3-7.1zM16 24.3c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.2.8.8-3.1-.2-.3c-.8-1.3-1.3-2.9-1.3-4.5 0-4.7 3.8-8.5 8.5-8.5 2.3 0 4.4.9 6 2.5 1.6 1.6 2.5 3.7 2.5 6 0 4.7-3.8 8.5-8.5 8.5zm4.7-6.4c-.3-.1-1.5-.8-1.8-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5 0-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3z"
              fill="white"
            />
          </svg>
        </div>

        {/* Share Text & Button */}
        <div className="flex-1 text-center sm:text-left">
          <p className="text-green-800 font-bold text-lg sm:text-xl mb-1">
            Found this helpful?
          </p>
          <p className="text-green-700 text-sm sm:text-base mb-4">
            Share it with your classmates and friends on WhatsApp — help them ace their {subject} too!
          </p>
          <button
            onClick={handleShare}
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl transition-colors inline-flex items-center gap-2 shadow-md hover:shadow-lg"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.243-1.216l-.252-.149-3.054.801.801-3.054-.149-.252A8 8 0 1112 20z" />
            </svg>
            Share on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
