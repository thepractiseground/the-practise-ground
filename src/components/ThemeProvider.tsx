"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  THEMES,
  THEME_IDS,
  COOKIE_NAME,
  COOKIE_MAX_AGE,
  getRandomTheme,
  type ThemeId,
  type ThemeConfig,
} from "@/lib/theme-config";

interface ThemeContextValue {
  themeId: ThemeId;
  theme: ThemeConfig;
}

const ThemeContext = createContext<ThemeContextValue>({
  themeId: "ocean-coral",
  theme: THEMES["ocean-coral"],
});

export function useTheme() {
  return useContext(ThemeContext);
}

/**
 * Read cookie value by name
 */
function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}

/**
 * Set a cookie
 */
function setCookie(name: string, value: string, maxAge: number) {
  document.cookie = `${name}=${encodeURIComponent(value)};path=/;max-age=${maxAge};SameSite=Lax`;
}

/**
 * Apply theme CSS variables to the document root
 */
function applyTheme(themeId: ThemeId) {
  const theme = THEMES[themeId];
  if (!theme) return;

  const root = document.documentElement;
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });
}

/**
 * Send theme assignment to Google Analytics (GA4)
 */
function trackThemeAssignment(themeId: ThemeId, isNew: boolean) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  if (typeof w.gtag === "function") {
    // Set as a user property so it appears on all future events
    w.gtag("set", "user_properties", {
      ab_theme: themeId,
    });
    // Fire a one-time event for the assignment
    w.gtag("event", "theme_assigned", {
      theme_id: themeId,
      theme_name: THEMES[themeId].name,
      is_new_assignment: isNew,
    });
  }
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeId, setThemeId] = useState<ThemeId>("ocean-coral");

  useEffect(() => {
    // Check for existing theme cookie
    const stored = getCookie(COOKIE_NAME);
    let id: ThemeId;
    let isNew = false;

    if (stored && THEME_IDS.includes(stored as ThemeId)) {
      id = stored as ThemeId;
    } else {
      // New visitor — randomly assign
      id = getRandomTheme();
      setCookie(COOKIE_NAME, id, COOKIE_MAX_AGE);
      isNew = true;
    }

    setThemeId(id);
    applyTheme(id);
    trackThemeAssignment(id, isNew);
  }, []);

  return (
    <ThemeContext.Provider value={{ themeId, theme: THEMES[themeId] }}>
      {children}
    </ThemeContext.Provider>
  );
}
