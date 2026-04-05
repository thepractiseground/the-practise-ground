/**
 * Breadth showcase bar — shows key platform stats at a glance.
 * Rendered between the hero and the subject tabs.
 */
export default function StatsBar({ totalQuestions }: { totalQuestions: number }) {
  const stats = [
    { value: `${Math.floor(totalQuestions / 1000)}K+`, label: "Questions" },
    { value: "8", label: "Grades" },
    { value: "7", label: "Subjects" },
    { value: "52", label: "Weeks / Grade" },
    { value: "200+", label: "Countries" },
  ];

  return (
    <section className="border-y border-gray-200/60 bg-white/60 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-around gap-2 sm:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center min-w-0">
              <p className="text-lg sm:text-2xl font-bold text-brand-navy leading-tight">
                {s.value}
              </p>
              <p className="text-[10px] sm:text-xs text-gray-500 font-medium uppercase tracking-wide">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
