#!/usr/bin/env python3
"""Replace scattered placeholders in maths-higher/12 (idx 23/24 per week)."""
import json
from pathlib import Path

# Format: week -> { index: (question, [options], answer) }
REPL = {
    2: {24: ("Function f: R→R, f(x) = 3x is:", ["One-one and onto", "One-one but not onto", "Onto but not one-one", "Neither"], "One-one and onto")},
    3: {24: ("If f(x) = x² and g(x) = x+1, then (fog)(2) equals:", ["9", "5", "4", "7"], "9")},
    4: {24: ("Principal value of sin⁻¹(1/2):", ["π/6", "π/3", "π/4", "π/2"], "π/6")},
    5: {
        23: ("Principal value of cos⁻¹(-1/2):", ["2π/3", "π/3", "π/6", "5π/6"], "2π/3"),
        24: ("tan⁻¹(1) + tan⁻¹(2) + tan⁻¹(3) equals:", ["π", "π/2", "3π/4", "π/4"], "π"),
    },
    6: {24: ("If A is a 3×4 matrix, then Aᵀ has order:", ["4×3", "3×4", "3×3", "4×4"], "4×3")},
    7: {24: ("If A is 2×3 and B is 3×2, then AB is of order:", ["2×2", "3×3", "2×3", "Not defined"], "2×2")},
    8: {24: ("A square matrix A is invertible iff:", ["det(A) ≠ 0", "det(A) = 0", "A is symmetric", "A is singular"], "det(A) ≠ 0")},
    9: {24: ("Determinant of identity matrix Iₙ:", ["1", "0", "n", "-1"], "1")},
    10: {24: ("If A is a square matrix, then A·(adj A) equals:", ["|A|·I", "I", "0", "|A|"], "|A|·I")},
    11: {24: ("System AX = B has unique solution if:", ["|A| ≠ 0", "|A| = 0 and (adj A)·B = 0", "|A| = 0 and (adj A)·B ≠ 0", "B = 0"], "|A| ≠ 0")},
    12: {24: ("The function f(x) = |x| is continuous:", ["Everywhere", "Only at x = 0", "Only for x > 0", "Nowhere"], "Everywhere")},
    13: {24: ("Derivative of sin(x²) is:", ["2x cos(x²)", "cos(x²)", "2x sin(x²)", "cos(2x)"], "2x cos(x²)")},
    14: {
        23: ("If y = log(sin x), dy/dx equals:", ["cot x", "tan x", "-cot x", "sec x"], "cot x"),
        24: ("If x = at², y = 2at, then dy/dx equals:", ["1/t", "t", "2t", "a/t"], "1/t"),
    },
    15: {24: ("If y = xˣ, then dy/dx equals:", ["xˣ(1 + ln x)", "x·xˣ⁻¹", "xˣ ln x", "xˣ"], "xˣ(1 + ln x)")},
    16: {24: ("Slope of tangent to y = x² at x = 2:", ["4", "2", "8", "1"], "4")},
    17: {24: ("f(x) = x² on [-1, 1] has absolute minimum at:", ["x = 0", "x = 1", "x = -1", "x = ±1"], "x = 0")},
    18: {24: ("A rectangle of perimeter 20 m has maximum area when:", ["It is a square of side 5 m", "Sides are 4 m and 6 m", "Sides are 3 m and 7 m", "Sides are 2 m and 8 m"], "It is a square of side 5 m")},
    19: {24: ("∫sec²x dx equals:", ["tan x + C", "cot x + C", "sec x + C", "-cot x + C"], "tan x + C")},
    20: {24: ("∫ 2x·cos(x²) dx equals:", ["sin(x²) + C", "cos(x²) + C", "-sin(x²) + C", "2 sin(x²) + C"], "sin(x²) + C")},
    21: {24: ("∫ 1/(x²-1) dx equals:", ["(1/2) ln|(x-1)/(x+1)| + C", "ln|x-1| + C", "(1/2) ln|x²-1| + C", "tan⁻¹x + C"], "(1/2) ln|(x-1)/(x+1)| + C")},
    22: {24: ("∫ x·eˣ dx equals:", ["(x-1)eˣ + C", "x·eˣ + C", "(x+1)eˣ + C", "eˣ + C"], "(x-1)eˣ + C")},
    23: {24: ("∫₀^π sin x dx equals:", ["2", "0", "1", "π"], "2")},
    24: {24: ("Area bounded by y = x², x-axis, x = 0 and x = 3:", ["9", "27", "6", "3"], "9")},
    25: {24: ("Order and degree of (d²y/dx²)³ + (dy/dx)⁴ = sin x:", ["Order 2, degree 3", "Order 3, degree 2", "Order 2, degree 4", "Order 4, degree 2"], "Order 2, degree 3")},
    26: {24: ("Solution of dy/dx = y/x is:", ["y = cx", "y = c·eˣ", "y² = cx", "xy = c"], "y = cx")},
    27: {
        23: ("Integrating factor of dy/dx + y = eˣ is:", ["eˣ", "e⁻ˣ", "x", "1"], "eˣ"),
        24: ("General solution of dy/dx + y = 0:", ["y = C·e⁻ˣ", "y = C·eˣ", "y = C/x", "y = Cx"], "y = C·e⁻ˣ"),
    },
    28: {24: ("Magnitude of vector a = 3î + 4ĵ:", ["5", "7", "12", "25"], "5")},
    29: {24: ("a·b where a = î + ĵ and b = î - ĵ:", ["0", "2", "-2", "1"], "0")},
    30: {24: ("|a × b| equals:", ["|a||b| sinθ", "|a||b| cosθ", "|a||b|", "|a| + |b|"], "|a||b| sinθ")},
    31: {
        23: ("Sum of squares of direction cosines of any line:", ["1", "0", "3", "Depends on line"], "1"),
        24: ("If direction ratios are 2, -3, 6, direction cosines are:", ["2/7, -3/7, 6/7", "1/2, -1/3, 1/6", "2, -3, 6", "1/7, -1/7, 1/7"], "2/7, -3/7, 6/7"),
    },
    32: {24: ("Cartesian equation of line through (x₀, y₀, z₀) with direction ratios (a, b, c):", ["(x-x₀)/a = (y-y₀)/b = (z-z₀)/c", "ax + by + cz = 0", "(x+x₀)/a = (y+y₀)/b = (z+z₀)/c", "x/a + y/b + z/c = 1"], "(x-x₀)/a = (y-y₀)/b = (z-z₀)/c")},
    33: {24: ("Equation of plane with intercepts a, b, c on axes:", ["x/a + y/b + z/c = 1", "ax + by + cz = 1", "x/a - y/b + z/c = 0", "x + y + z = a+b+c"], "x/a + y/b + z/c = 1")},
    34: {24: ("Distance of point (1, 2, 3) from plane x + y + z = 6:", ["0", "1", "√3", "2"], "0")},
    35: {
        23: ("Feasible region of LPP is always:", ["Convex", "Concave", "Circular", "Arbitrary shape"], "Convex"),
        24: ("In LPP, optimal solution occurs at:", ["A corner point of feasible region", "Centre of feasible region", "Any interior point", "Only origin"], "A corner point of feasible region"),
    },
    36: {24: ("If objective function Z = 3x + 2y is to be maximised and corner points are (0,0), (4,0), (2,3), (0,5), max Z is:", ["12", "10", "13", "8"], "12")},
    38: {24: ("If P(A) = 0.6, P(B) = 0.5 and A, B are independent, P(A∩B):", ["0.3", "1.1", "0.1", "0.5"], "0.3")},
    39: {24: ("Bayes' theorem: P(Aᵢ|B) =", ["P(Aᵢ)·P(B|Aᵢ) / Σⱼ P(Aⱼ)·P(B|Aⱼ)", "P(B|Aᵢ)·P(Aᵢ) / P(B)² ", "P(B)·P(Aᵢ) / P(B|Aᵢ)", "P(Aᵢ) + P(B|Aᵢ)"], "P(Aᵢ)·P(B|Aᵢ) / Σⱼ P(Aⱼ)·P(B|Aⱼ)")},
    40: {24: ("A random variable X has distribution: X: 1,2,3 with P: 0.2, 0.5, 0.3. E(X) equals:", ["2.1", "2.0", "1.5", "3.0"], "2.1")},
    41: {24: ("For binomial distribution B(n, p), mean and variance are:", ["np and npq", "np² and npq", "npq and np", "n and p"], "np and npq")},
    42: {24: ("If R = {(a,b) : a = b} on set A, R is:", ["Equivalence relation", "Only reflexive", "Only symmetric", "Only transitive"], "Equivalence relation")},
}

path = Path("src/data/maths-higher-quizzes.json")
d = json.loads(path.read_text())

total = 0
weeks_done = []
for wk in d["12"]:
    w = wk["week"]
    if w in REPL:
        for idx, (qt, opts, ans) in REPL[w].items():
            assert len(opts) == 4
            assert ans in opts
            wk["questions"][idx] = {
                "id": f"12-w{w}-q{idx+1}",
                "question": qt,
                "options": opts,
                "answer": ans,
            }
            total += 1
        weeks_done.append(w)

path.write_text(json.dumps(d, indent=2, ensure_ascii=False) + "\n")
print(f"Replaced {total} scattered placeholders in maths-higher/12 across {len(weeks_done)} weeks")
