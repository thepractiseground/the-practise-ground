"use client";

import { useEffect, useState } from "react";

type Props = { counts: { c: number; n: number }[] };

export default function ClassFilter({ counts }: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>("[data-classes]");
    cards.forEach((el) => {
      const cls = (el.dataset.classes || "").split(" ");
      el.style.display = selected === null || cls.includes(String(selected)) ? "" : "none";
    });
    document.querySelectorAll<HTMLElement>("[data-subject-section]").forEach((sec) => {
      const visible = Array.from(sec.querySelectorAll<HTMLElement>("[data-classes]")).filter(
        (e) => e.style.display !== "none"
      ).length;
      sec.style.display = visible > 0 ? "" : "none";
      const badge = sec.querySelector<HTMLElement>("[data-count]");
      if (badge) badge.textContent = `${visible} poster${visible === 1 ? "" : "s"}`;
    });
  }, [selected]);

  function pick(c: number | null) {
    setSelected(c);
    if (c !== null) {
      document.getElementById("posters-start")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  const base = "font-bold text-sm px-3.5 py-2 rounded-xl transition-colors border";
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-7" role="group" aria-label="Filter posters by class">
      <button
        type="button"
        onClick={() => pick(null)}
        aria-pressed={selected === null}
        className={`${base} ${selected === null ? "bg-brand-orange border-brand-orange text-white" : "bg-white/10 border-white/30 text-white hover:bg-white/20"}`}
      >
        All classes
      </button>
      {counts.map(({ c, n }) => (
        <button
          key={c}
          type="button"
          onClick={() => pick(c)}
          aria-pressed={selected === c}
          className={`${base} ${selected === c ? "bg-brand-orange border-brand-orange text-white" : "bg-white/10 border-white/30 text-white hover:bg-white/20"}`}
        >
          Class {c} <span className={selected === c ? "text-white/80 font-medium" : "text-white/60 font-medium"}>{n}</span>
        </button>
      ))}
    </div>
  );
}
