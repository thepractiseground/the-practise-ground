"use client";

import Script from "next/script";

/**
 * Google Analytics 4 setup.
 *
 * Replace GA_MEASUREMENT_ID below with your actual GA4 measurement ID
 * (looks like G-XXXXXXXXXX). You can get this from:
 *   Google Analytics → Admin → Data Streams → your web stream → Measurement ID
 *
 * For production, consider moving this to an environment variable:
 *   const GA_ID = process.env.NEXT_PUBLIC_GA_ID
 */
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // TODO: Replace with your GA4 ID

export default function GoogleAnalytics() {
  if (GA_MEASUREMENT_ID === "G-XXXXXXXXXX") {
    // Skip loading GA if the ID hasn't been set yet
    return null;
  }

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
