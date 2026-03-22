"use client";

import { useState } from "react";

interface ImageActionsProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  slug: string;
}

export default function ImageActions({ imageSrc, imageAlt, title, slug }: ImageActionsProps) {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const pageUrl = `https://www.thepractiseground.in/blog/${slug}`;
  const fullImageUrl = `https://www.thepractiseground.in${imageSrc}`;
  const shareText = `${title} — Free learning resource from The Practise Ground`;

  const handleDownload = async () => {
    try {
      const response = await fetch(imageSrc);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      // Extract filename from path
      const filename = imageSrc.split("/").pop() || "infographic.png";
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch {
      // Fallback: open image in new tab
      window.open(imageSrc, "_blank");
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const input = document.createElement("input");
      input.value = pageUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: shareText,
          url: pageUrl,
        });
      } catch {
        // User cancelled share
      }
    } else {
      setShowShareMenu(!showShareMenu);
    }
  };

  return (
    <div className="flex items-center justify-end gap-2 mt-3">
      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="flex items-center gap-1.5 bg-white hover:bg-gray-50 text-gray-700 text-xs sm:text-sm font-semibold px-3 py-2.5 rounded-lg border border-gray-200 shadow-sm transition-colors min-h-11"
        title={`Download ${imageAlt}`}
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Download
      </button>

      {/* Share Button with Dropdown */}
      <div className="relative">
        <button
          onClick={handleNativeShare}
          className="flex items-center gap-1.5 bg-white hover:bg-gray-50 text-gray-700 text-xs sm:text-sm font-semibold px-3 py-2.5 rounded-lg border border-gray-200 shadow-sm transition-colors min-h-11"
          title="Share this infographic"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          Share
        </button>

        {/* Share dropdown (fallback for non-native share) */}
        {showShareMenu && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setShowShareMenu(false)}
            />
            <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 z-50 py-2 animate-in fade-in slide-in-from-top-1">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/?text=${encodeURIComponent(shareText + "\n" + pageUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 min-h-12 hover:bg-green-50 transition-colors"
                onClick={() => setShowShareMenu(false)}
              >
                <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.243-1.216l-.252-.149-3.054.801.801-3.054-.149-.252A8 8 0 1112 20z" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-gray-700">WhatsApp</span>
              </a>

              {/* Twitter/X */}
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 min-h-12 hover:bg-gray-50 transition-colors"
                onClick={() => setShowShareMenu(false)}
              >
                <span className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-gray-700">X (Twitter)</span>
              </a>

              {/* Facebook */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 min-h-12 hover:bg-blue-50 transition-colors"
                onClick={() => setShowShareMenu(false)}
              >
                <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-gray-700">Facebook</span>
              </a>

              {/* Pinterest (great for infographics) */}
              <a
                href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(pageUrl)}&media=${encodeURIComponent(fullImageUrl)}&description=${encodeURIComponent(shareText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 min-h-12 hover:bg-red-50 transition-colors"
                onClick={() => setShowShareMenu(false)}
              >
                <span className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-gray-700">Pinterest</span>
              </a>

              <hr className="my-1 border-gray-100" />

              {/* Copy Link */}
              <button
                onClick={() => {
                  handleCopyLink();
                  setShowShareMenu(false);
                }}
                className="flex items-center gap-3 px-4 py-3 min-h-12 hover:bg-gray-50 transition-colors w-full text-left"
              >
                <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-gray-700">
                  {copied ? "Link copied!" : "Copy link"}
                </span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
