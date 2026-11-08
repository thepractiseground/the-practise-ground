"use client";

import { useEffect } from "react";
import Script from "next/script";

const GA_MEASUREMENT_ID = "G-3BRBZQPBVE";

type GtagFn = (...args: unknown[]) => void;

export default function GoogleAnalytics() {
  // Track PDF downloads (posters, printables, guide-page download links).
  // Sends a custom `pdf_download` event with the file name and the page it
  // was clicked from, so download-driven pages can be measured in GA4.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const link = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      let url: URL;
      try {
        url = new URL(link.href, window.location.href);
      } catch {
        return;
      }
      if (!url.pathname.toLowerCase().endsWith(".pdf")) return;
      const gtag = (window as unknown as { gtag?: GtagFn }).gtag;
      if (typeof gtag !== "function") return;
      gtag("event", "pdf_download", {
        file_name: url.pathname.split("/").pop(),
        link_url: url.pathname,
        page_path: window.location.pathname,
      });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            send_page_view: true,
          });
        `}
      </Script>
    </>
  );
}
