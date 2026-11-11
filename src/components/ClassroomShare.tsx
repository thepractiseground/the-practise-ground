"use client";

interface ClassroomShareProps {
  /** Absolute URL to share. */
  url: string;
  title: string;
  body?: string;
  /** Where the button sits, used for the UTM campaign and the GA4 event. */
  location: string;
  variant?: "outline" | "onDark";
  label?: string;
  className?: string;
}

const BASE = "inline-flex items-center justify-center gap-2 font-semibold text-sm rounded-xl px-4 py-2.5 transition-colors";
const VARIANTS = {
  outline: "bg-white text-brand-teal border-2 border-brand-teal hover:bg-brand-teal/5",
  onDark: "bg-white/15 text-white hover:bg-white/25",
};

/**
 * "Share to Google Classroom" link. Uses Google's plain share URL, so no Google
 * script is loaded on our pages and nothing is sent until the user clicks.
 */
export default function ClassroomShare({ url, title, body, location, variant = "outline", label = "Share to Google Classroom", className = "" }: ClassroomShareProps) {
  const sep = url.includes("?") ? "&" : "?";
  const tagged = `${url}${sep}utm_source=classroom&utm_medium=share&utm_campaign=${encodeURIComponent(location)}`;
  const params = new URLSearchParams({ url: tagged, title });
  if (body) params.set("body", body);
  const href = `https://classroom.google.com/share?${params.toString()}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        const w = window as unknown as { gtag?: (...a: unknown[]) => void };
        w.gtag?.("event", "classroom_share_click", { location, destination: url });
      }}
      className={`${BASE} ${VARIANTS[variant]} ${className}`}
      aria-label={`${label}: ${title}`}
    >
      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
      {label}
    </a>
  );
}
