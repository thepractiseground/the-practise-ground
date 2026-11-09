"use client";

import { useState } from "react";

type Row = { find: string; formula: string; unit: string; use: string };
type Topic = { name: string; classes: string; rows: Row[] };

const topics: Topic[] = [
  {
    name: "Motion",
    classes: "Classes 9–11",
    rows: [
      { find: "Average speed", formula: "speed = distance / time", unit: "m/s", use: "Total distance divided by total time." },
      { find: "Final velocity", formula: "v = u + at", unit: "m/s", use: "Use when displacement is not given." },
      { find: "Displacement", formula: "s = ut + ½at²", unit: "m", use: "Use when final velocity is not given." },
      { find: "Velocity from distance", formula: "v² = u² + 2as", unit: "m/s", use: "Use when time is not given." },
      { find: "Free fall", formula: "same equations with a = g", unit: "m/s²", use: "Use g = 10 or 9.8 m/s² as your teacher specifies." },
    ],
  },
  {
    name: "Force and momentum",
    classes: "Classes 9–12",
    rows: [
      { find: "Force", formula: "F = ma", unit: "N", use: "Use the net force (add forces, subtract friction)." },
      { find: "Weight", formula: "W = mg", unit: "N", use: "Mass is in kg. Weight is a force." },
      { find: "Momentum", formula: "p = mv", unit: "kg m/s", use: "Vector: direction matters." },
      { find: "Impulse", formula: "F × t = change in momentum", unit: "N s", use: "For collisions and impacts." },
      { find: "Collision (stick together)", formula: "m₁u₁ + m₂u₂ = (m₁ + m₂)v", unit: "m/s", use: "Momentum is conserved. Kinetic energy is not." },
    ],
  },
  {
    name: "Work, energy and power",
    classes: "Classes 9–11",
    rows: [
      { find: "Work done", formula: "W = F × s × cos θ", unit: "J", use: "θ is the angle between force and displacement." },
      { find: "Kinetic energy", formula: "KE = ½mv²", unit: "J", use: "Speed is in m/s." },
      { find: "Potential energy", formula: "PE = mgh", unit: "J", use: "h is the height above the reference level." },
      { find: "Power", formula: "P = W / t", unit: "W", use: "1 kW = 1000 W." },
      { find: "Electrical energy", formula: "E = P × t", unit: "kWh", use: "1 kWh = 1 unit = 3.6 × 10⁶ J." },
    ],
  },
  {
    name: "Pressure and density",
    classes: "Classes 8–11",
    rows: [
      { find: "Density", formula: "ρ = m / V", unit: "kg/m³", use: "1 g/cm³ = 1000 kg/m³." },
      { find: "Pressure", formula: "P = F / A", unit: "Pa", use: "1 Pa = 1 N/m². Area in m²." },
      { find: "Pressure in a liquid", formula: "P = ρgh", unit: "Pa", use: "h is the depth below the surface." },
    ],
  },
  {
    name: "Electricity",
    classes: "Classes 10–12",
    rows: [
      { find: "Current or voltage", formula: "V = IR", unit: "A, V, Ω", use: "Ohm's law, for a fixed resistor." },
      { find: "Power", formula: "P = VI = I²R = V²/R", unit: "W", use: "Pick the form that uses your known values." },
      { find: "Series resistance", formula: "R = R₁ + R₂ + …", unit: "Ω", use: "Same current through every resistor." },
      { find: "Parallel resistance", formula: "1/R = 1/R₁ + 1/R₂ + …", unit: "Ω", use: "Same voltage across every branch." },
      { find: "Terminal voltage", formula: "V = E − Ir", unit: "V", use: "E is the emf and r the internal resistance." },
    ],
  },
  {
    name: "Light",
    classes: "Classes 10–12",
    rows: [
      { find: "Mirror formula", formula: "1/v + 1/u = 1/f", unit: "cm or m", use: "Use the Cartesian sign convention." },
      { find: "Lens formula", formula: "1/v − 1/u = 1/f", unit: "cm or m", use: "Convex lens: f is positive." },
      { find: "Magnification", formula: "m = −v/u (mirror), m = v/u (lens)", unit: "no unit", use: "Negative m means an inverted image." },
      { find: "Power of a lens", formula: "P = 1/f (f in metres)", unit: "dioptre (D)", use: "Convex lens: positive. Concave lens: negative." },
    ],
  },
];

export default function PhysicsFormulaTabs() {
  const [i, setI] = useState(0);
  const t = topics[i];
  return (
    <section aria-labelledby="formula-finder">
      <h2 id="formula-finder" className="text-2xl sm:text-3xl font-bold text-brand-navy mb-2">Physics formulas by topic</h2>
      <p className="text-gray-700 mb-4">Pick a topic, then find the quantity you need. Each row shows the formula, its SI unit and when to use it.</p>
      <div className="flex flex-wrap gap-2 mb-4" role="tablist">
        {topics.map((x, k) => (
          <button
            key={x.name}
            role="tab"
            aria-selected={k === i}
            onClick={() => setI(k)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
              k === i ? "bg-brand-navy text-white border-brand-navy" : "bg-white text-brand-navy border-gray-300 hover:bg-orange-50"
            }`}
          >
            {x.name}
          </button>
        ))}
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div className="px-4 sm:px-5 py-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
          <h3 className="font-bold text-brand-navy">{t.name}</h3>
          <span className="text-xs font-semibold text-brand-orange">{t.classes}</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm sm:text-base">
            <thead>
              <tr className="text-gray-600 text-xs uppercase tracking-wide">
                <th className="px-4 sm:px-5 py-2">To find</th>
                <th className="px-4 sm:px-5 py-2">Formula</th>
                <th className="px-4 sm:px-5 py-2">SI unit</th>
                <th className="px-4 sm:px-5 py-2">When to use it</th>
              </tr>
            </thead>
            <tbody>
              {t.rows.map((r) => (
                <tr key={r.find} className="border-t border-gray-100 align-top">
                  <td className="px-4 sm:px-5 py-3 font-semibold text-gray-900">{r.find}</td>
                  <td className="px-4 sm:px-5 py-3 font-bold text-brand-navy whitespace-nowrap">{r.formula}</td>
                  <td className="px-4 sm:px-5 py-3 text-gray-800">{r.unit}</td>
                  <td className="px-4 sm:px-5 py-3 text-gray-700">{r.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
