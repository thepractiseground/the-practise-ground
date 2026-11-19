"use client";
import { useEffect, useState } from "react";
import { readProgress, normalisePath } from "@/lib/progress";

/** Small "done" tick + best score on a quiz card, read from this device only. */
export default function ProgressMark({ path }: { path: string }) {
  const [best, setBest] = useState<number | null>(null);

  useEffect(() => {
    const e = readProgress()[normalisePath(path)];
    setBest(e ? e.best : null);
  }, [path]);

  if (best === null) return null;
  return (
    <p className="text-xs font-semibold text-green-600 mt-1">
      <span aria-hidden="true">✓</span> Done · best {best}%
    </p>
  );
}
