import Image from "next/image";

/**
 * Reusable hero background image with dark overlay for text readability.
 * Wrap your hero content in a relative container and place this component first.
 *
 * Usage:
 *   <section className="relative overflow-hidden">
 *     <HeroImage src="/images/og/og-english.png" alt="English illustration" />
 *     <div className="relative z-10">...your content...</div>
 *   </section>
 */
export default function HeroImage({
  src,
  alt,
  overlay = 0.6,
}: {
  src: string;
  alt: string;
  overlay?: number;
}) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(0,0,0,${overlay})` }}
      />
    </>
  );
}
