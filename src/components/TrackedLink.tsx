"use client";

import Link from "next/link";
import type { ReactNode } from "react";

interface TrackedLinkProps {
  href: string;
  className?: string;
  eventName: string;
  params?: Record<string, string>;
  children: ReactNode;
}

/** next/link that fires a GA4 event on click. */
export default function TrackedLink({ href, className, eventName, params, children }: TrackedLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        const w = window as unknown as { gtag?: (...a: unknown[]) => void };
        w.gtag?.("event", eventName, { destination: href, ...params });
      }}
    >
      {children}
    </Link>
  );
}
