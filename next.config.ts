import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect old systeme.io grade URLs to new quiz URLs
      { source: '/grade5', destination: '/quiz/5', permanent: true },
      { source: '/grade6', destination: '/quiz/6', permanent: true },
      { source: '/grade7', destination: '/quiz/7', permanent: true },
      { source: '/grade8', destination: '/quiz/8', permanent: true },
      { source: '/grade9', destination: '/quiz/9', permanent: true },
      { source: '/grade10', destination: '/quiz/10', permanent: true },
      // Also handle variations with trailing slashes or uppercase
      { source: '/Grade5', destination: '/quiz/5', permanent: true },
      { source: '/Grade6', destination: '/quiz/6', permanent: true },
      { source: '/Grade7', destination: '/quiz/7', permanent: true },
      { source: '/Grade8', destination: '/quiz/8', permanent: true },
      { source: '/Grade9', destination: '/quiz/9', permanent: true },
      { source: '/Grade10', destination: '/quiz/10', permanent: true },
      // Redirect renamed blog slugs (SEO: preserve old indexed URLs)
      { source: '/blog/letter-writing-format-cbse', destination: '/blog/letter-writing-format-guide', permanent: true },
      { source: '/blog/common-english-mistakes-indian-students', destination: '/blog/common-english-mistakes-students', permanent: true },
      // Redirect remaining old systeme.io URLs found in Search Console
      { source: '/gradepage', destination: '/', permanent: true },
      { source: '/termsofuse', destination: '/terms', permanent: true },
      { source: '/default-funnel-step-thank-you-page/:path*', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
