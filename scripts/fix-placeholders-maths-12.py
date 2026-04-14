#!/usr/bin/env python3
"""Replace scattered placeholders in maths-quizzes/12 (non-higher track)."""
import json
from pathlib import Path

REPL = {
    4: {24: ("Order of matrix [[1,2,3],[4,5,6]] is:", ["2×3", "3×2", "6", "2+3"], "2×3")},
    5: {
        23: ("If A + B = [[5,5],[5,5]] and A = [[2,3],[1,4]], then B equals:", ["[[3,2],[4,1]]", "[[2,3],[1,4]]", "[[5,5],[5,5]]", "[[3,3],[3,3]]"], "[[3,2],[4,1]]"),
        24: ("If A = [[1,2],[3,4]], then 2A equals:", ["[[2,4],[6,8]]", "[[1,2],[3,4]]", "[[2,2],[4,4]]", "[[4,8],[12,16]]"], "[[2,4],[6,8]]"),
    },
    6: {
        23: ("Matrix multiplication is:", ["Associative", "Always commutative", "Never associative", "Always equal to zero"], "Associative"),
        24: ("If A is 2×3 and B is 3×4, AB is of order:", ["2×4", "3×3", "4×2", "Not defined"], "2×4"),
    },
    7: {24: ("If A is symmetric, then Aᵀ equals:", ["A", "-A", "0", "I"], "A")},
    8: {24: ("Determinant of [[2,3],[1,4]]:", ["5", "11", "-5", "8"], "5")},
    9: {24: ("If two rows of a determinant are identical, its value is:", ["0", "1", "Undefined", "Sum of diagonals"], "0")},
    10: {24: ("A⁻¹ exists iff:", ["|A| ≠ 0", "|A| = 0", "A is symmetric", "A = I"], "|A| ≠ 0")},
    11: {
        23: ("For AX = B with unique solution:", ["|A| ≠ 0", "|A| = 0", "B = 0", "A is singular"], "|A| ≠ 0"),
        24: ("X = A⁻¹B gives:", ["The unique solution when |A| ≠ 0", "Only trivial solution", "No solution", "Infinite solutions"], "The unique solution when |A| ≠ 0"),
    },
    12: {
        23: ("f(x) = x² is continuous:", ["Everywhere", "Only at x = 0", "Only for x > 0", "Nowhere"], "Everywhere"),
        24: ("f(x) = 1/x is NOT continuous at:", ["x = 0", "x = 1", "All x", "x = -1"], "x = 0"),
    },
    13: {
        23: ("Differentiability implies:", ["Continuity", "Boundedness", "Monotonicity", "Nothing"], "Continuity"),
        24: ("f(x) = |x| at x = 0 is:", ["Continuous but not differentiable", "Differentiable", "Neither", "Constant"], "Continuous but not differentiable"),
    },
    14: {
        23: ("d/dx(eˣ) equals:", ["eˣ", "xeˣ⁻¹", "1", "ln x"], "eˣ"),
        24: ("d/dx(ln x) equals:", ["1/x", "ln x", "x", "-1/x"], "1/x"),
    },
    15: {
        22: ("d/dx[sin(3x)] equals:", ["3 cos(3x)", "cos(3x)", "cos(3x)/3", "-3 cos(3x)"], "3 cos(3x)"),
        23: ("If x² + y² = 25, dy/dx equals:", ["-x/y", "x/y", "-y/x", "y/x"], "-x/y"),
        24: ("d/dx[(2x+1)⁵] equals:", ["10(2x+1)⁴", "5(2x+1)⁴", "(2x+1)⁴", "2(2x+1)⁵"], "10(2x+1)⁴"),
    },
    16: {
        23: ("If s = t³, velocity ds/dt at t = 2 is:", ["12", "8", "6", "4"], "12"),
        24: ("Radius of circle grows at 2 cm/s. Rate of area growth at r = 5:", ["20π cm²/s", "10π cm²/s", "25π cm²/s", "4π cm²/s"], "20π cm²/s"),
    },
    17: {
        23: ("f(x) = x² is increasing on:", ["(0, ∞)", "(-∞, 0)", "All R", "Nowhere"], "(0, ∞)"),
        24: ("f(x) = -x³ is:", ["Decreasing on all R", "Increasing on all R", "Constant", "Not monotonic"], "Decreasing on all R"),
    },
    18: {
        23: ("Local max of f(x) = -(x-2)² + 5 is at:", ["x = 2, value 5", "x = 0, value 5", "x = 5, value 2", "x = 2, value 0"], "x = 2, value 5"),
        24: ("Sum of two numbers is 20. Product is max when numbers are:", ["10 and 10", "5 and 15", "9 and 11", "4 and 16"], "10 and 10"),
    },
    19: {
        23: ("∫ xⁿ dx (n ≠ -1):", ["xⁿ⁺¹/(n+1) + C", "nxⁿ⁻¹ + C", "xⁿ⁻¹/(n-1) + C", "xⁿ/n + C"], "xⁿ⁺¹/(n+1) + C"),
        24: ("∫ (1/x) dx:", ["ln|x| + C", "1/x + C", "-1/x² + C", "x ln x + C"], "ln|x| + C"),
    },
    20: {
        23: ("∫ 2x·cos(x²) dx:", ["sin(x²) + C", "cos(x²) + C", "-sin(x²) + C", "x²·sin(x²) + C"], "sin(x²) + C"),
        24: ("∫ eˣ/(1+eˣ) dx:", ["ln(1 + eˣ) + C", "eˣ + C", "1/(1+eˣ) + C", "-ln(1+eˣ) + C"], "ln(1 + eˣ) + C"),
    },
    21: {
        23: ("∫ x·eˣ dx:", ["(x-1)eˣ + C", "xeˣ + C", "(x+1)eˣ + C", "eˣ + C"], "(x-1)eˣ + C"),
        24: ("∫ x·ln x dx:", ["(x²/2)ln x - x²/4 + C", "x ln x + C", "x² ln x + C", "ln x + C"], "(x²/2)ln x - x²/4 + C"),
    },
    22: {
        22: ("∫₀¹ x² dx:", ["1/3", "1/2", "1", "2/3"], "1/3"),
        23: ("∫₀^π/2 sin x dx:", ["1", "0", "π/2", "2"], "1"),
        24: ("∫₋ₐ^ₐ x³ dx (odd function) equals:", ["0", "a⁴/2", "2a⁴", "a³"], "0"),
    },
    23: {
        22: ("Area bounded by y = x², x-axis, x = 0, x = 2:", ["8/3", "4", "2", "16/3"], "8/3"),
        23: ("Area under y = x from 0 to 4:", ["8", "4", "16", "2"], "8"),
        24: ("Area under y = sin x from 0 to π:", ["2", "1", "0", "π"], "2"),
    },
    24: {
        22: ("Order of d²y/dx² + y = 0:", ["2", "1", "0", "3"], "2"),
        23: ("Degree of (dy/dx)³ + y = 0:", ["3", "1", "0", "Not defined"], "3"),
        24: ("Order of a DE is the order of:", ["The highest derivative", "The lowest derivative", "The function", "The independent variable"], "The highest derivative"),
    },
    25: {
        22: ("Solution of dy/dx = x is:", ["y = x²/2 + C", "y = x + C", "y = ln x + C", "y = eˣ + C"], "y = x²/2 + C"),
        23: ("Solution of dy/dx = y is:", ["y = C·eˣ", "y = Cx", "y = x + C", "y² = x + C"], "y = C·eˣ"),
        24: ("dy/dx = y/x is a:", ["Homogeneous DE", "Linear DE", "Exact DE", "Non-DE"], "Homogeneous DE"),
    },
    26: {
        22: ("Constraints in LPP must be:", ["Linear inequalities", "Quadratic", "Exponential", "Any relation"], "Linear inequalities"),
        23: ("Feasible region is the set of points satisfying:", ["All constraints", "The objective function", "Only non-negative constraints", "Only the first constraint"], "All constraints"),
        24: ("Optimal solution in LPP is found at:", ["A corner point of feasible region", "The centre of feasible region", "Any interior point", "The origin only"], "A corner point of feasible region"),
    },
    27: {
        22: ("A diet problem minimises:", ["Cost subject to nutrient constraints", "Calories only", "Weight only", "Time only"], "Cost subject to nutrient constraints"),
        23: ("Transportation problem typically:", ["Minimises cost", "Maximises cost", "Maximises time", "Is always infeasible"], "Minimises cost"),
        24: ("Manufacturing problem usually:", ["Maximises profit", "Maximises cost", "Minimises production", "Ignores constraints"], "Maximises profit"),
    },
    28: {
        22: ("Conditional probability P(A|B) = ", ["P(A ∩ B)/P(B), P(B) > 0", "P(A)·P(B)", "P(A) + P(B)", "P(A) - P(B)"], "P(A ∩ B)/P(B), P(B) > 0"),
        23: ("If P(A) = 0.5 and P(B|A) = 0.4, P(A ∩ B) = ", ["0.20", "0.90", "0.10", "0.50"], "0.20"),
        24: ("P(A|A) equals:", ["1", "0", "P(A)", "1/P(A)"], "1"),
    },
    29: {
        22: ("Two events A, B are independent iff:", ["P(A ∩ B) = P(A)·P(B)", "P(A ∩ B) = 0", "P(A ∪ B) = P(A) + P(B)", "A = B"], "P(A ∩ B) = P(A)·P(B)"),
        23: ("If P(A) = 0.6, P(B) = 0.5 and independent, P(A ∪ B) = ", ["0.80", "1.10", "0.30", "0.10"], "0.80"),
        24: ("If A and B are mutually exclusive, P(A ∩ B) = ", ["0", "P(A)·P(B)", "P(A) + P(B)", "1"], "0"),
    },
    30: {
        22: ("Bayes' theorem finds:", ["P(cause | effect) from P(effect | cause)", "P(A)·P(B)", "Sample space size", "Expected value"], "P(cause | effect) from P(effect | cause)"),
        23: ("Prior probability is probability:", ["Before observing evidence", "After observing evidence", "Of being independent", "Of the sample space"], "Before observing evidence"),
        24: ("Posterior probability is probability:", ["After observing evidence", "Before observing evidence", "Of the complement", "Of independence"], "After observing evidence"),
    },
    31: {
        23: ("A random variable can take:", ["Finite or countably infinite values (discrete), or any value in interval (continuous)", "Only integer values", "Only positive values", "Only one value"], "Finite or countably infinite values (discrete), or any value in interval (continuous)"),
        24: ("For a discrete RV, Σ P(xᵢ) equals:", ["1", "0", "Mean of X", "Variance of X"], "1"),
    },
    32: {
        22: ("For Binomial B(n, p), mean = ", ["np", "np(1-p)", "p", "n+p"], "np"),
        23: ("For Binomial B(n, p), variance = ", ["np(1-p)", "np", "p(1-p)", "n²p"], "np(1-p)"),
        24: ("In 5 tosses of a fair coin, P(exactly 3 heads) = ", ["10/32", "1/32", "5/32", "16/32"], "10/32"),
    },
    33: {
        23: ("17 mod 5 equals:", ["2", "3", "5", "0"], "2"),
        24: ("-8 mod 3 (least non-negative residue) equals:", ["1", "2", "-2", "0"], "1"),
    },
    34: {
        22: ("a ≡ b (mod n) means:", ["n divides (a - b)", "a = b", "a and b are prime", "a divides b"], "n divides (a - b)"),
        23: ("17 ≡ ? (mod 6):", ["5", "1", "3", "11"], "5"),
        24: ("If a ≡ b (mod m) and c ≡ d (mod m), then a + c ≡ ? (mod m):", ["b + d", "a + d", "b - d", "bd"], "b + d"),
    },
    35: {
        22: ("In mixture of 20% and 50% milk, resulting 30% milk. Ratio is:", ["2 : 1", "1 : 2", "3 : 2", "2 : 3"], "2 : 1"),
        23: ("Alligation rule helps find:", ["The ratio of two ingredients to get a required mean price", "The sum of ingredients", "Profit percent", "Simple interest"], "The ratio of two ingredients to get a required mean price"),
        24: ("Mean price formula in alligation: (cheaper ratio) : (dearer ratio) = ", ["(d - m) : (m - c)", "(c - m) : (m - d)", "(m - c) : (d - m)", "c : d"], "(d - m) : (m - c)"),
    },
    36: {
        22: ("Speed of boat in still water 10 km/h, stream 2 km/h. Downstream speed:", ["12 km/h", "8 km/h", "10 km/h", "5 km/h"], "12 km/h"),
        23: ("Pipe A fills a tank in 6 h, B in 3 h. Together:", ["2 h", "4.5 h", "9 h", "1.5 h"], "2 h"),
        24: ("In a 100 m race, A beats B by 20 m. A's speed : B's speed = ", ["5 : 4", "4 : 5", "2 : 1", "1 : 2"], "5 : 4"),
    },
    37: {
        22: ("GST of 18% on ₹1000 =", ["₹180", "₹118", "₹18", "₹1180"], "₹180"),
        23: ("CGST and SGST components for 18% intra-state GST:", ["9% + 9%", "18% + 0%", "12% + 6%", "6% + 12%"], "9% + 9%"),
        24: ("Selling price incl. 5% GST on ₹200 cost:", ["₹210", "₹205", "₹195", "₹200"], "₹210"),
    },
    38: {
        22: ("EMI formula uses:", ["P, r, n", "Only principal", "Only rate", "Only time"], "P, r, n"),
        23: ("Monthly rate if annual rate is 12%:", ["1%", "12%", "0.12%", "10%"], "1%"),
        24: ("EMI on a loan increases if:", ["Tenure decreases at fixed rate", "Tenure increases at fixed rate", "Rate decreases", "Principal decreases"], "Tenure decreases at fixed rate"),
    },
    39: {
        22: ("CI on ₹1000 at 10% for 2 years annually compounded:", ["₹210", "₹200", "₹220", "₹100"], "₹210"),
        23: ("Depreciation formula (straight line):", ["(Cost - Salvage)/Life", "Cost × rate × time", "Cost × (1-r)ⁿ", "Cost/Life"], "(Cost - Salvage)/Life"),
        24: ("An asset worth ₹10,000 depreciates 10% p.a. WDV after 2 years:", ["₹8100", "₹8000", "₹9000", "₹8500"], "₹8100"),
    },
    40: {
        22: ("Laspeyres index uses:", ["Base year weights", "Current year weights", "Simple averages", "Geometric mean of weights"], "Base year weights"),
        23: ("Paasche index uses:", ["Current year weights", "Base year weights", "Medians", "Random weights"], "Current year weights"),
        24: ("Fisher's ideal index is:", ["Geometric mean of Laspeyres and Paasche", "Arithmetic mean of Laspeyres and Paasche", "Laspeyres minus Paasche", "Laspeyres divided by Paasche"], "Geometric mean of Laspeyres and Paasche"),
    },
}

path = Path("src/data/maths-quizzes.json")
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
print(f"Replaced {total} scattered placeholders in maths-quizzes/12 across {len(weeks_done)} weeks")
