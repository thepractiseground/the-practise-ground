"use client";

interface SubjectIconProps {
  subject: "english" | "maths" | "science";
  size?: number;
  className?: string;
}

const icons: Record<string, (size: number) => React.ReactElement> = {
  english: (size: number) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Open book icon */}
      <rect x="4" y="8" width="18" height="32" rx="2" fill="#2563EB" opacity="0.15" />
      <rect x="26" y="8" width="18" height="32" rx="2" fill="#2563EB" opacity="0.15" />
      <path d="M24 10C20 8 14 7 6 8v28c8-1 14 0 18 2" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M24 10C28 8 34 7 42 8v28c-8-1-14 0-18 2" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M24 10v30" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
      {/* Text lines */}
      <line x1="10" y1="16" x2="18" y2="16" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <line x1="10" y1="21" x2="17" y2="21" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <line x1="10" y1="26" x2="16" y2="26" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <line x1="30" y1="16" x2="38" y2="16" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <line x1="30" y1="21" x2="37" y2="21" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <line x1="30" y1="26" x2="36" y2="26" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  ),

  maths: (size: number) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Calculator body */}
      <rect x="8" y="4" width="32" height="40" rx="4" fill="#7C3AED" opacity="0.15" />
      <rect x="8" y="4" width="32" height="40" rx="4" stroke="#7C3AED" strokeWidth="2.5" fill="none" />
      {/* Screen */}
      <rect x="12" y="8" width="24" height="10" rx="2" fill="#7C3AED" opacity="0.2" />
      {/* Calculator buttons */}
      <circle cx="16" cy="24" r="2.5" fill="#7C3AED" opacity="0.6" />
      <circle cx="24" cy="24" r="2.5" fill="#7C3AED" opacity="0.6" />
      <circle cx="32" cy="24" r="2.5" fill="#7C3AED" opacity="0.6" />
      <circle cx="16" cy="32" r="2.5" fill="#7C3AED" opacity="0.6" />
      <circle cx="24" cy="32" r="2.5" fill="#7C3AED" opacity="0.6" />
      <circle cx="32" cy="32" r="2.5" fill="#7C3AED" opacity="0.6" />
      <circle cx="16" cy="40" r="2.5" fill="#7C3AED" opacity="0.6" />
      <circle cx="24" cy="40" r="2.5" fill="#7C3AED" opacity="0.6" />
      <circle cx="32" cy="40" r="2.5" fill="#FBBF24" />
      {/* Plus sign on screen */}
      <line x1="20" y1="13" x2="28" y2="13" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="9" x2="24" y2="17" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  science: (size: number) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Flask body */}
      <path
        d="M18 6h12v14l10 18a4 4 0 01-3.5 6h-25A4 4 0 018 38l10-18V6z"
        fill="#10B981"
        opacity="0.15"
      />
      <path
        d="M18 6h12v14l10 18a4 4 0 01-3.5 6h-25A4 4 0 018 38l10-18V6z"
        stroke="#10B981"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Flask neck */}
      <line x1="16" y1="6" x2="32" y2="6" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
      {/* Liquid */}
      <path d="M13 34h22" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      {/* Bubbles */}
      <circle cx="20" cy="36" r="2" fill="#34D399" opacity="0.6" />
      <circle cx="28" cy="33" r="1.5" fill="#34D399" opacity="0.6" />
      <circle cx="24" cy="38" r="1" fill="#34D399" opacity="0.6" />
    </svg>
  ),
};

export default function SubjectIcon({ subject, size = 48, className }: SubjectIconProps) {
  const renderIcon = icons[subject];
  if (!renderIcon) return null;

  return <span className={className}>{renderIcon(size)}</span>;
}
