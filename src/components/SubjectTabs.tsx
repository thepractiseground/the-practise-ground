"use client";

import { useState, Children, isValidElement, ReactNode, useEffect, useRef } from "react";

const TABS = [
  { id: "english", label: "English", emoji: "📝" },
  { id: "maths", label: "Maths", emoji: "🔢" },
  { id: "science", label: "Science", emoji: "🔬" },
  { id: "languages", label: "Languages", emoji: "🌍" },
  { id: "fun", label: "Fun", emoji: "🎯" },
];

export default function SubjectTabs({ children }: { children: ReactNode }) {
  const [active, setActive] = useState("english");
  const tabBarRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  /* When switching tabs, scroll so the content area is visible */
  const switchTab = (tabId: string) => {
    setActive(tabId);
    // Scroll the tab bar into view if user is far down the page
    if (tabBarRef.current) {
      const rect = tabBarRef.current.getBoundingClientRect();
      if (rect.top < 0 || rect.top > window.innerHeight * 0.4) {
        tabBarRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  /* Keyboard navigation for tabs */
  const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
    const len = TABS.length;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const next = TABS[(idx + 1) % len].id;
      switchTab(next);
      // Focus the next button
      const btns = tabBarRef.current?.querySelectorAll<HTMLButtonElement>("[role=tab]");
      btns?.[(idx + 1) % len]?.focus();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = TABS[(idx - 1 + len) % len].id;
      switchTab(prev);
      const btns = tabBarRef.current?.querySelectorAll<HTMLButtonElement>("[role=tab]");
      btns?.[(idx - 1 + len) % len]?.focus();
    }
  };

  return (
    <div>
      {/* Sticky tab bar */}
      <div
        ref={tabBarRef}
        className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex items-center gap-1 sm:gap-2 py-3 overflow-x-auto scrollbar-hide"
            role="tablist"
            aria-label="Subject categories"
          >
            {TABS.map((tab, idx) => {
              const isActive = active === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => switchTab(tab.id)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? "bg-brand-navy text-white shadow-md scale-105"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800"
                  }`}
                >
                  <span className="text-base sm:text-lg">{tab.emoji}</span>
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab panels — all rendered for SEO, only active is visible */}
      <div ref={contentRef}>
        {Children.map(children, (child) => {
          if (!isValidElement(child)) return null;
          const tabId = (child.props as Record<string, unknown>)["data-tab"] as string;
          if (!tabId) return child; // non-tab children pass through
          return (
            <div
              id={`panel-${tabId}`}
              role="tabpanel"
              aria-labelledby={`tab-${tabId}`}
              className={tabId === active ? "block" : "hidden"}
            >
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
}
