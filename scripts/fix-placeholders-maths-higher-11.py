#!/usr/bin/env python3
"""Replace placeholders in maths-higher grade 11 weeks 27-29 (Conic Sections)."""
import json
from pathlib import Path

QS = {
    27: [  # Parabola
        ("Standard equation of parabola with vertex at origin opening right:", ["y² = 4ax", "x² = 4ay", "y² = -4ax", "x² = -4ay"], "y² = 4ax"),
        ("Focus of parabola y² = 12x:", ["(3, 0)", "(0, 3)", "(-3, 0)", "(0, -3)"], "(3, 0)"),
        ("Directrix of parabola y² = 8x:", ["x = -2", "x = 2", "y = -2", "y = 2"], "x = -2"),
        ("Length of latus rectum of y² = 4ax:", ["4a", "2a", "a", "a/2"], "4a"),
        ("Parabola x² = -16y opens:", ["Downwards", "Upwards", "Leftwards", "Rightwards"], "Downwards"),
        ("Axis of parabola y² = 4ax is:", ["x-axis", "y-axis", "y = x", "y = -x"], "x-axis"),
        ("Eccentricity of parabola:", ["1", "0", "<1", ">1"], "1"),
        ("Vertex of parabola y² = 20x:", ["(0, 0)", "(5, 0)", "(0, 5)", "(-5, 0)"], "(0, 0)"),
        ("Length of latus rectum of y² = 16x:", ["16", "8", "4", "2"], "16"),
        ("Equation of parabola with focus (2, 0) and directrix x = -2:", ["y² = 8x", "y² = 4x", "x² = 8y", "y² = -8x"], "y² = 8x"),
        ("Parabola y² = 4ax passes through point (a, 2a)?", ["Yes", "No", "Only if a=1", "Only if a=2"], "Yes"),
        ("Point on y² = 8x closest to focus (2, 0):", ["Vertex (0, 0)", "(2, 4)", "(2, -4)", "(8, 8)"], "Vertex (0, 0)"),
        ("Focal distance of point (x₁, y₁) on y² = 4ax:", ["x₁ + a", "x₁ - a", "y₁ + a", "2a"], "x₁ + a"),
        ("If focus is (0, 3) and directrix y = -3, parabola equation:", ["x² = 12y", "y² = 12x", "x² = -12y", "x² = 6y"], "x² = 12y"),
        ("Parabola x² = 4ay opens:", ["Upwards", "Downwards", "Rightwards", "Leftwards"], "Upwards"),
        ("Equation of directrix of x² = -8y:", ["y = 2", "y = -2", "x = 2", "x = -2"], "y = 2"),
        ("Length of latus rectum of x² = 12y:", ["12", "6", "3", "24"], "12"),
        ("Parametric form of y² = 4ax:", ["(at², 2at)", "(2at, at²)", "(at, 2at²)", "(t, 2at)"], "(at², 2at)"),
        ("A parabola with latus rectum 8 and vertex at origin opening right:", ["y² = 8x", "y² = 4x", "y² = 16x", "x² = 8y"], "y² = 8x"),
        ("Ends of latus rectum of y² = 4ax:", ["(a, ±2a)", "(2a, ±a)", "(a, ±a)", "(-a, ±2a)"], "(a, ±2a)"),
        ("If vertex is (0, 0) and axis is y-axis with focus (0, -4):", ["x² = -16y", "x² = 16y", "y² = -16x", "y² = 16x"], "x² = -16y"),
        ("Point (3, 6) lies on which parabola?", ["y² = 12x", "y² = 6x", "x² = 12y", "y² = 4x"], "y² = 12x"),
        ("Latus rectum of parabola y² = 4ax is perpendicular to:", ["Axis (x-axis)", "Directrix", "Tangent at vertex", "y-axis always"], "Axis (x-axis)"),
        ("Distance between focus and directrix of y² = 4ax:", ["2a", "a", "4a", "a/2"], "2a"),
        ("Focal chord passes through:", ["Focus", "Vertex", "Directrix", "Origin"], "Focus"),
    ],
    28: [  # Ellipse
        ("Standard form of ellipse with major axis along x-axis:", ["x²/a² + y²/b² = 1 (a>b)", "x²/a² - y²/b² = 1", "x² + y² = a²", "y²/a² + x²/b² = 1 (a>b)"], "x²/a² + y²/b² = 1 (a>b)"),
        ("For ellipse x²/25 + y²/9 = 1, a and b:", ["a=5, b=3", "a=3, b=5", "a=25, b=9", "a=√5, b=√3"], "a=5, b=3"),
        ("Eccentricity of x²/25 + y²/16 = 1:", ["3/5", "4/5", "1/5", "5/3"], "3/5"),
        ("Relation b² = a²(1-e²) holds for:", ["Ellipse", "Parabola", "Hyperbola", "Circle only"], "Ellipse"),
        ("Foci of ellipse x²/25 + y²/9 = 1:", ["(±4, 0)", "(0, ±4)", "(±3, 0)", "(±5, 0)"], "(±4, 0)"),
        ("Length of major axis of x²/16 + y²/9 = 1:", ["8", "6", "4", "3"], "8"),
        ("Length of minor axis of x²/25 + y²/9 = 1:", ["6", "10", "8", "4"], "6"),
        ("Vertices of x²/25 + y²/9 = 1:", ["(±5, 0)", "(±3, 0)", "(0, ±5)", "(0, ±3)"], "(±5, 0)"),
        ("Length of latus rectum of ellipse x²/a² + y²/b² = 1 (a>b):", ["2b²/a", "2a²/b", "b²/a", "a²/b"], "2b²/a"),
        ("Latus rectum of x²/25 + y²/9 = 1:", ["18/5", "9/5", "16/5", "6/5"], "18/5"),
        ("Sum of distances from any point on ellipse to two foci:", ["2a", "2b", "a + b", "a - b"], "2a"),
        ("For x²/9 + y²/25 = 1, major axis lies along:", ["y-axis", "x-axis", "y = x", "Line through origin"], "y-axis"),
        ("Eccentricity of ellipse is always:", ["0 < e < 1", "e > 1", "e = 1", "e = 0"], "0 < e < 1"),
        ("If e = 0, ellipse becomes:", ["Circle", "Parabola", "Hyperbola", "Line"], "Circle"),
        ("Directrices of x²/a² + y²/b² = 1 (a>b):", ["x = ±a/e", "y = ±b/e", "x = ±ae", "x = ±b/e"], "x = ±a/e"),
        ("Distance between foci of ellipse is:", ["2ae", "2a/e", "a/e", "ae"], "2ae"),
        ("If 2a = 10 and 2b = 8, eccentricity:", ["3/5", "4/5", "1/5", "2/5"], "3/5"),
        ("Parametric equations of ellipse x²/a² + y²/b² = 1:", ["(a cosθ, b sinθ)", "(a sinθ, b cosθ)", "(a sec θ, b tan θ)", "(at², 2at)"], "(a cosθ, b sinθ)"),
        ("For ellipse, relation between a, b, e and c (c = ae):", ["c² = a² - b²", "c² = a² + b²", "b² = a² + c²", "a² = b² + c²"], "c² = a² - b²"),
        ("An ellipse with foci (±3, 0) and sum of focal distances = 10:", ["x²/25 + y²/16 = 1", "x²/16 + y²/25 = 1", "x²/25 + y²/9 = 1", "x²/9 + y²/16 = 1"], "x²/25 + y²/16 = 1"),
        ("If e of ellipse → 1, the ellipse:", ["Becomes very elongated", "Becomes a circle", "Becomes parabola", "No change"], "Becomes very elongated"),
        ("Centre of x²/25 + y²/16 = 1:", ["(0, 0)", "(5, 0)", "(0, 4)", "(5, 4)"], "(0, 0)"),
        ("Ends of minor axis of x²/9 + y²/4 = 1:", ["(0, ±2)", "(±3, 0)", "(±2, 0)", "(0, ±3)"], "(0, ±2)"),
        ("Area enclosed by ellipse x²/a² + y²/b² = 1:", ["πab", "πa²", "πb²", "π(a+b)"], "πab"),
        ("If x²/49 + y²/25 = 1, e equals:", ["√24/7", "5/7", "2/7", "√(24/49)"], "√24/7"),
    ],
    29: [  # Hyperbola
        ("Standard form of hyperbola with transverse axis along x-axis:", ["x²/a² - y²/b² = 1", "x²/a² + y²/b² = 1", "y²/a² - x²/b² = 1", "x² - y² = a²"], "x²/a² - y²/b² = 1"),
        ("For hyperbola b² = a²(e² - 1), eccentricity:", ["e > 1", "0 < e < 1", "e = 1", "e = 0"], "e > 1"),
        ("Foci of x²/9 - y²/16 = 1:", ["(±5, 0)", "(0, ±5)", "(±4, 0)", "(±3, 0)"], "(±5, 0)"),
        ("Eccentricity of x²/16 - y²/9 = 1:", ["5/4", "4/5", "3/4", "3/5"], "5/4"),
        ("Length of transverse axis of x²/9 - y²/16 = 1:", ["6", "8", "3", "4"], "6"),
        ("Vertices of x²/16 - y²/9 = 1:", ["(±4, 0)", "(±3, 0)", "(0, ±4)", "(0, ±3)"], "(±4, 0)"),
        ("Length of conjugate axis of x²/16 - y²/9 = 1:", ["6", "8", "3", "4"], "6"),
        ("Length of latus rectum of hyperbola x²/a² - y²/b² = 1:", ["2b²/a", "2a²/b", "a²/b", "b²/a"], "2b²/a"),
        ("Latus rectum of x²/9 - y²/16 = 1:", ["32/3", "16/3", "8/3", "9/16"], "32/3"),
        ("Difference of distances from any point on hyperbola to two foci:", ["2a", "2b", "a + b", "|a - b|"], "2a"),
        ("Asymptotes of x²/a² - y²/b² = 1:", ["y = ±(b/a)x", "y = ±(a/b)x", "y = ±x", "x² + y² = a²"], "y = ±(b/a)x"),
        ("A rectangular hyperbola has eccentricity:", ["√2", "1", "√3", "2"], "√2"),
        ("Rectangular hyperbola: a = b, equation xy = c² has asymptotes:", ["x-axis and y-axis", "y = x and y = -x", "y = x only", "y = -x only"], "x-axis and y-axis"),
        ("For y²/a² - x²/b² = 1, transverse axis lies along:", ["y-axis", "x-axis", "y = x", "origin"], "y-axis"),
        ("Directrices of x²/a² - y²/b² = 1:", ["x = ±a/e", "y = ±b/e", "x = ±ae", "y = ±ae"], "x = ±a/e"),
        ("For x²/9 - y²/16 = 1, a² + b² equals:", ["25 (= c²)", "7", "144", "12"], "25 (= c²)"),
        ("Relation between a, b, c for hyperbola (c = ae):", ["c² = a² + b²", "c² = a² - b²", "b² = a² + c²", "a² = b² + c²"], "c² = a² + b²"),
        ("If e = 2 and a = 3, then b equals:", ["3√3", "3", "√3", "6"], "3√3"),
        ("Conjugate hyperbola of x²/a² - y²/b² = 1:", ["y²/b² - x²/a² = 1", "x²/a² + y²/b² = 1", "x²/b² - y²/a² = 1", "Same equation"], "y²/b² - x²/a² = 1"),
        ("If 2a = 8 and 2b = 6, eccentricity of x²/16 - y²/9 = 1 is:", ["5/4", "4/5", "3/5", "5/3"], "5/4"),
        ("Parametric equations of x²/a² - y²/b² = 1:", ["(a secθ, b tanθ)", "(a cosθ, b sinθ)", "(at², 2at)", "(a tanθ, b secθ)"], "(a secθ, b tanθ)"),
        ("Distance between foci of hyperbola:", ["2ae", "2a", "2b", "2a/e"], "2ae"),
        ("Hyperbola x²/25 - y²/144 = 1 has foci:", ["(±13, 0)", "(±5, 0)", "(±12, 0)", "(0, ±13)"], "(±13, 0)"),
        ("Centre of x²/16 - y²/25 = 1:", ["(0, 0)", "(4, 0)", "(0, 5)", "(4, 5)"], "(0, 0)"),
        ("The conic xy = c² (c ≠ 0) is:", ["Rectangular hyperbola", "Parabola", "Ellipse", "Circle"], "Rectangular hyperbola"),
    ],
}

path = Path("src/data/maths-higher-quizzes.json")
d = json.loads(path.read_text())

total = 0
weeks_done = []
for wk in d["11"]:
    w = wk["week"]
    if w in QS:
        qs = QS[w]
        assert len(qs) == 25, f"week {w} expected 25, got {len(qs)}"
        new_qlist = []
        for i, (qt, opts, ans) in enumerate(qs, 1):
            assert len(opts) == 4
            assert ans in opts
            new_qlist.append({
                "id": f"11-w{w}-q{i}",
                "question": qt,
                "options": opts,
                "answer": ans,
            })
        wk["questions"] = new_qlist
        total += 25
        weeks_done.append(w)

path.write_text(json.dumps(d, indent=2, ensure_ascii=False) + "\n")
print(f"Replaced {total} maths-higher/11 placeholder questions across {len(weeks_done)} weeks: {weeks_done}")
