"use client";

import { useEffect, useMemo, useState } from "react";
import ClassroomShare from "./ClassroomShare";

type Vals = { x1: string; y1: string; z1: string; x2: string; y2: string; z2: string };

const EXAMPLES: { label: string; v: Vals; is3d?: boolean }[] = [
  { label: "(1, 2) and (4, 6)", v: { x1: "1", y1: "2", z1: "0", x2: "4", y2: "6", z2: "0" } },
  { label: "(−3, 2) and (2, −1)", v: { x1: "-3", y1: "2", z1: "0", x2: "2", y2: "-1", z2: "0" } },
  { label: "(0, 0) and (5, 12)", v: { x1: "0", y1: "0", z1: "0", x2: "5", y2: "12", z2: "0" } },
  { label: "(−2, −3) and (4, 5)", v: { x1: "-2", y1: "-3", z1: "0", x2: "4", y2: "5", z2: "0" } },
  { label: "3D: (1, 2, 3) and (4, 6, 15)", v: { x1: "1", y1: "2", z1: "3", x2: "4", y2: "6", z2: "15" }, is3d: true },
];

const fmt = (n: number) => {
  const r = Math.round(n * 1e6) / 1e6;
  return Object.is(r, -0) ? "0" : String(r);
};
const par = (n: number) => (n < 0 ? `(${fmt(n)})` : fmt(n));

function simplifySqrt(n: number): { outside: number; inside: number } | null {
  if (!Number.isInteger(n) || n < 0 || n > 1e12) return null;
  let outside = 1;
  let inside = n;
  for (let f = 2; f * f <= inside; f++) {
    while (inside % (f * f) === 0) {
      inside /= f * f;
      outside *= f;
    }
  }
  return { outside, inside };
}

function exactForm(n: number): string {
  const s = simplifySqrt(n);
  if (!s) return `√${fmt(n)}`;
  if (s.inside === 1) return String(s.outside);
  return s.outside === 1 ? `√${s.inside}` : `${s.outside}√${s.inside}`;
}

function niceStep(range: number) {
  const raw = range / 6;
  const pow = Math.pow(10, Math.floor(Math.log10(raw)));
  const m = raw / pow;
  return (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * pow;
}

function Graph({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  const minX = Math.min(x1, x2, 0), maxX = Math.max(x1, x2, 0);
  const minY = Math.min(y1, y2, 0), maxY = Math.max(y1, y2, 0);
  const span = Math.max(maxX - minX, maxY - minY, 1) * 1.3;
  const cx = (minX + maxX) / 2, cy = (minY + maxY) / 2;
  const x0 = cx - span / 2, y0 = cy - span / 2;
  const S = 320, pad = 28, k = (S - 2 * pad) / span;
  const X = (x: number) => pad + (x - x0) * k;
  const Y = (y: number) => S - pad - (y - y0) * k;
  const step = niceStep(span);
  const ticksX: number[] = [], ticksY: number[] = [];
  for (let t = Math.ceil(x0 / step) * step; t <= x0 + span + 1e-9; t += step) ticksX.push(Math.round(t * 1e6) / 1e6);
  for (let t = Math.ceil(y0 / step) * step; t <= y0 + span + 1e-9; t += step) ticksY.push(Math.round(t * 1e6) / 1e6);
  const lab = (x: number, y: number) => `(${fmt(x)}, ${fmt(y)})`;
  const left1 = x1 <= x2;
  return (
    <svg viewBox={`0 0 ${S} ${S}`} className="w-full h-auto bg-white rounded-xl border border-gray-200" role="img"
      aria-label={`Graph of the line segment from ${lab(x1, y1)} to ${lab(x2, y2)}`}>
      {ticksX.map((t) => <line key={"vx" + t} x1={X(t)} y1={pad} x2={X(t)} y2={S - pad} stroke="#E3E6EF" />)}
      {ticksY.map((t) => <line key={"hy" + t} x1={pad} y1={Y(t)} x2={S - pad} y2={Y(t)} stroke="#E3E6EF" />)}
      {x0 <= 0 && x0 + span >= 0 && <line x1={X(0)} y1={pad} x2={X(0)} y2={S - pad} stroke="#263A70" strokeWidth="2" />}
      {y0 <= 0 && y0 + span >= 0 && <line x1={pad} y1={Y(0)} x2={S - pad} y2={Y(0)} stroke="#263A70" strokeWidth="2" />}
      {ticksX.filter((t) => t !== 0).map((t) => <text key={"tx" + t} x={X(t)} y={S - 10} fontSize="10" textAnchor="middle" fill="#8A8FA3">{fmt(t)}</text>)}
      {ticksY.filter((t) => t !== 0).map((t) => <text key={"ty" + t} x={8} y={Y(t) + 3} fontSize="10" fill="#8A8FA3">{fmt(t)}</text>)}
      <line x1={X(x1)} y1={Y(y1)} x2={X(x2)} y2={Y(y1)} stroke="#1A8A7D" strokeWidth="2" strokeDasharray="5 4" />
      <line x1={X(x2)} y1={Y(y1)} x2={X(x2)} y2={Y(y2)} stroke="#1A8A7D" strokeWidth="2" strokeDasharray="5 4" />
      <line x1={X(x1)} y1={Y(y1)} x2={X(x2)} y2={Y(y2)} stroke="#E86833" strokeWidth="4" strokeLinecap="round" />
      <circle cx={X(x1)} cy={Y(y1)} r="6" fill="#E86833" />
      <circle cx={X(x2)} cy={Y(y2)} r="6" fill="#E86833" />
      <text x={X(x1) + (left1 ? -8 : 8)} y={Y(y1) + (y1 <= y2 ? 20 : -12)} fontSize="13" fontWeight="700" fill="#263A70" textAnchor={left1 ? "end" : "start"}>A {lab(x1, y1)}</text>
      <text x={X(x2) + (left1 ? 8 : -8)} y={Y(y2) + (y2 >= y1 ? -12 : 20)} fontSize="13" fontWeight="700" fill="#263A70" textAnchor={left1 ? "start" : "end"}>B {lab(x2, y2)}</text>
    </svg>
  );
}

export default function DistanceCalculator() {
  const [v, setV] = useState<Vals>(EXAMPLES[0].v);
  const [is3d, setIs3d] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    if (q.has("x1") && q.has("y1") && q.has("x2") && q.has("y2")) {
      setV({ x1: q.get("x1")!, y1: q.get("y1")!, z1: q.get("z1") ?? "0", x2: q.get("x2")!, y2: q.get("y2")!, z2: q.get("z2") ?? "0" });
      if (q.has("z1") || q.has("z2")) setIs3d(true);
    }
  }, []);

  const res = useMemo(() => {
    const keys: (keyof Vals)[] = is3d ? ["x1", "y1", "z1", "x2", "y2", "z2"] : ["x1", "y1", "x2", "y2"];
    const nums: Record<string, number> = {};
    for (const k of keys) {
      const t = v[k].trim();
      if (t === "" || t === "-" || t === "." || !isFinite(Number(t))) return null;
      nums[k] = Number(t);
    }
    const { x1, y1, x2, y2 } = nums;
    const z1 = is3d ? nums.z1 : 0, z2 = is3d ? nums.z2 : 0;
    const dx = x2 - x1, dy = y2 - y1, dz = z2 - z1;
    const sum = dx * dx + dy * dy + (is3d ? dz * dz : 0);
    const d = Math.sqrt(sum);
    const sumR = Math.round(sum * 1e9) / 1e9;
    return { x1, y1, z1, x2, y2, z2, dx, dy, dz, sum: sumR, d };
  }, [v, is3d]);

  const set = (k: keyof Vals) => (e: React.ChangeEvent<HTMLInputElement>) => setV({ ...v, [k]: e.target.value });

  const track = (name: string) => {
    const w = window as unknown as { gtag?: (...a: unknown[]) => void };
    w.gtag?.("event", name, { page: "distance_formula_calculator" });
  };

  const shareUrl = () => {
    const p = new URLSearchParams({ x1: v.x1, y1: v.y1, x2: v.x2, y2: v.y2 });
    if (is3d) { p.set("z1", v.z1); p.set("z2", v.z2); }
    p.set("utm_source", "whatsapp"); p.set("utm_medium", "social"); p.set("utm_campaign", "distance_calc_share");
    return `https://www.thepractiseground.in/distance-formula-calculator?${p.toString()}`;
  };

  const input = "w-full border-2 border-gray-200 focus:border-brand-orange rounded-lg px-3 py-2 text-lg font-semibold text-brand-navy outline-none bg-white";
  const field = (k: keyof Vals, label: string) => (
    <label className="block">
      <span className="block text-xs font-bold text-gray-500 mb-1">{label}</span>
      <input inputMode="decimal" className={input} value={v[k]} onChange={set(k)} aria-label={label} />
    </label>
  );

  const exact = res ? exactForm(res.sum) : "";
  const dec = res ? fmt(Math.round(res.d * 10000) / 10000) : "";
  const isExactInt = res ? Number.isInteger(res.d) : false;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <h2 className="text-xl font-bold text-brand-navy">Enter two points</h2>
        <label className="flex items-center gap-2 text-sm font-semibold text-gray-600 cursor-pointer">
          <input type="checkbox" checked={is3d} onChange={(e) => setIs3d(e.target.checked)} className="w-4 h-4 accent-orange-500" />
          3D (add z)
        </label>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <p className="font-bold text-brand-orange mb-2">Point A</p>
          <div className={`grid gap-3 ${is3d ? "grid-cols-3" : "grid-cols-2"}`}>
            {field("x1", "x₁")}{field("y1", "y₁")}{is3d && field("z1", "z₁")}
          </div>
        </div>
        <div>
          <p className="font-bold text-brand-orange mb-2">Point B</p>
          <div className={`grid gap-3 ${is3d ? "grid-cols-3" : "grid-cols-2"}`}>
            {field("x2", "x₂")}{field("y2", "y₂")}{is3d && field("z2", "z₂")}
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2" aria-label="Try an example">
        <span className="text-sm font-semibold text-gray-500 self-center">Try:</span>
        {EXAMPLES.map((e) => (
          <button key={e.label} type="button" onClick={() => { setV(e.v); setIs3d(!!e.is3d); track("calculator_example"); }}
            className="text-sm font-semibold bg-orange-50 text-brand-orange hover:bg-orange-100 border border-orange-200 px-3 py-1.5 rounded-full transition-colors">
            {e.label}
          </button>
        ))}
      </div>

      {!res ? (
        <p className="mt-6 text-gray-500">Enter all the coordinates as numbers (negatives and decimals are fine) to see the distance.</p>
      ) : (
        <div className="mt-6 grid lg:grid-cols-[1fr_340px] gap-6 items-start">
          <div>
            <div className="bg-brand-navy text-white rounded-2xl p-5">
              <p className="text-sm text-blue-200 font-semibold mb-1">Distance AB</p>
              <p className="text-3xl sm:text-4xl font-bold" aria-live="polite">
                d = {exact}{!isExactInt && <span className="text-blue-200 text-2xl"> ≈ {dec}</span>}
              </p>
              {res.sum === 0 && <p className="text-blue-200 mt-2 text-sm">The two points are the same, so the distance is 0.</p>}
              <div className="mt-4 flex flex-wrap gap-2">
                <button type="button" onClick={() => { navigator.clipboard?.writeText(`${isExactInt ? exact : exact + " ≈ " + dec}`); setCopied(true); setTimeout(() => setCopied(false), 1500); track("calculator_copy"); }}
                  className="text-sm font-bold bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-lg">{copied ? "Copied" : "Copy answer"}</button>
                <a href={`https://wa.me/?text=${encodeURIComponent("Distance formula calculator with steps: " + shareUrl())}`} target="_blank" rel="noopener noreferrer"
                  onClick={() => track("calculator_share")}
                  className="text-sm font-bold bg-green-600 hover:bg-green-700 px-3 py-1.5 rounded-lg">Share on WhatsApp</a>
                <ClassroomShare
                  url="https://www.thepractiseground.in/distance-formula-calculator"
                  title="Distance Formula Calculator"
                  body="Free calculator with step-by-step working, a graph and a 3-level practice PDF."
                  location="distance_calculator"
                  variant="onDark"
                  className="!text-sm !font-bold !px-3 !py-1.5 !rounded-lg"
                />
              </div>
            </div>

            <h3 className="text-lg font-bold text-brand-navy mt-6 mb-3">Step-by-step solution</h3>
            <ol className="space-y-3 text-gray-800">
              <li className="flex gap-3"><span className="step-n">1</span><span>Write the formula: <b>{is3d ? "d = √[(x₂ − x₁)² + (y₂ − y₁)² + (z₂ − z₁)²]" : "d = √[(x₂ − x₁)² + (y₂ − y₁)²]"}</b></span></li>
              <li className="flex gap-3"><span className="step-n">2</span><span>Substitute: d = √[({par(res.x2)} − {par(res.x1)})² + ({par(res.y2)} − {par(res.y1)})²{is3d ? ` + (${par(res.z2)} − ${par(res.z1)})²` : ""}]</span></li>
              <li className="flex gap-3"><span className="step-n">3</span><span>Subtract: d = √[{par(res.dx)}² + {par(res.dy)}²{is3d ? ` + ${par(res.dz)}²` : ""}]</span></li>
              <li className="flex gap-3"><span className="step-n">4</span><span>Square: d = √[{fmt(res.dx * res.dx)} + {fmt(res.dy * res.dy)}{is3d ? ` + ${fmt(res.dz * res.dz)}` : ""}]</span></li>
              <li className="flex gap-3"><span className="step-n">5</span><span>Add: d = √{fmt(res.sum)}</span></li>
              <li className="flex gap-3"><span className="step-n">6</span><span>Take the root: d = <b>{exact}</b>{!isExactInt && <> , which is about <b>{dec}</b> units</>}</span></li>
            </ol>

            {!is3d && (
              <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <p className="font-bold text-brand-navy mb-1">Midpoint of AB</p>
                  <p className="text-gray-700">M = ({fmt((res.x1 + res.x2) / 2)}, {fmt((res.y1 + res.y2) / 2)})</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <p className="font-bold text-brand-navy mb-1">Slope of AB</p>
                  <p className="text-gray-700">{res.dx === 0 ? "Undefined (vertical line)" : `m = ${fmt(res.dy / res.dx)}${res.dy === 0 ? " (horizontal line)" : ""}`}</p>
                </div>
              </div>
            )}
          </div>

          {!is3d && (
            <div>
              <Graph x1={res.x1} y1={res.y1} x2={res.x2} y2={res.y2} />
              <p className="text-xs text-gray-500 mt-2">Orange: the distance AB. Dashed teal: the horizontal and vertical legs of the right triangle. Their lengths are |x₂ − x₁| and |y₂ − y₁|.</p>
            </div>
          )}
        </div>
      )}
      <style>{`.step-n{flex:none;width:1.6rem;height:1.6rem;border-radius:9999px;background:#E86833;color:#fff;font-weight:700;font-size:.8rem;display:inline-flex;align-items:center;justify-content:center;margin-top:.1rem}`}</style>
    </div>
  );
}
