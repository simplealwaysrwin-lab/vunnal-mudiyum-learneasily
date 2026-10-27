// 10th Standard Mathematics - Unit 3: Algebra (English Medium)
// Tamil Nadu State Board Samacheer Kalvi Question Bank & Step-by-Step Solutions

const MATHS_EM_UNIT_3_DATA = {
  unitId: "math_em_u3",
  unitName: "Unit 3: Algebra",
  subject: "Mathematics (English Medium)",
  syllabus: "Tamil Nadu State Board Samacheer Kalvi Class 10 Mathematics",

  // Key Formulas & Theorems
  formulas: [
    { title: "Relationship of Polynomials", rule: "f(x) × g(x) = GCD[f(x), g(x)] × LCM[f(x), g(x)]" },
    { title: "Quadratic Formula", rule: "x = [-b ± √(b² - 4ac)] / (2a)" },
    { title: "Nature of Roots (Discriminant Δ)", rule: "Δ = b² - 4ac; If Δ > 0: Real and unequal; If Δ = 0: Real and equal; If Δ < 0: No real roots" },
    { title: "Sum and Product of Roots", rule: "α + β = -b/a and αβ = c/a; Form of Quadratic Equation: x² - (α + β)x + αβ = 0" },
    { title: "Matrix Multiplication Condition", rule: "If A is of order m × n and B is of order n × p, then product AB exists and is of order m × p" },
    { title: "Properties of Transpose", rule: "(A^T)^T = A, (A + B)^T = A^T + B^T, and (AB)^T = B^T A^T (Reversal Law)" }
  ],

  subSections: [
    // -------------------------------------------------------------
    // Section 1: Linear Equations in Three Variables & GCD
    // -------------------------------------------------------------
    {
      id: "sec_math_em_3_1",
      title: "Section 1: Linear Equations in Three Variables & GCD of Polynomials",
      author: "Chapter 3: Algebra - Exercises 3.1 & 3.2",
      questions: [
        {
          id: "m_em_3_1_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "Board Model",
          q: "If (x - 6) is the HCF / GCD of x² - 2x - 24 and x² - kx - 6, find the value of k.",
          options: ["a) 3", "b) 5", "c) 6", "d) 8"],
          ans: "Answer: <b>b) 5</b><br>Explanation: Since (x - 6) is a factor, substituting x = 6 makes the polynomial zero. 6² - 6k - 6 = 0 ⇒ 36 - 6 - 6k = 0 ⇒ 30 = 6k ⇒ <b>k = 5</b>.",
          explanation: "By Factor Theorem, setting x = 6 yields 30 - 6k = 0, so k = 5."
        },
        {
          id: "m_em_3_1_2",
          type: "2m",
          mark: "2 Marks",
          examYear: "2023",
          examTag: "2023*",
          q: "Find the GCD (Greatest Common Divisor) of the polynomials:<br>16x³y² and 24xy³z",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            Given terms:<br>
            • 16x³y² = 2⁴ × x³ × y²<br>
            • 24xy³z = 2³ × 3 × x × y³ × z<br><br>
            Numerical coefficients GCD(16, 24) = 8.<br>
            Taking the lowest powers of common variables:<br>
            • Common variable x: Lowest power is x<br>
            • Common variable y: Lowest power is y²<br>
            • z is not present in the first term.<br><br>
            Therefore, <b>GCD = 8xy²</b>.
          </div>`,
          explanation: "Take common numerical divisor 8 and lowest exponents of common algebraic variables."
        },
        {
          id: "m_em_3_1_3",
          type: "5m",
          mark: "5 Marks",
          isImportant: true,
          q: "Solve the following system of linear equations in three variables:<br>x + y + z = 5<br>2x - y + z = 9<br>x - 2y + 3z = 16",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            Given equations:<br>
            (1) x + y + z = 5<br>
            (2) 2x - y + z = 9<br>
            (3) x - 2y + 3z = 16<br><br>
            <b>Step 1: Eliminate y by adding (1) and (2):</b><br>
            (x + y + z) + (2x - y + z) = 5 + 9<br>
            <b>3x + 2z = 14</b> ---- (4)<br><br>
            <b>Step 2: Multiply equation (1) by 2 and add to (3):</b><br>
            2 × (1) ⇒ 2x + 2y + 2z = 10<br>
            (3) ⇒ x - 2y + 3z = 16<br>
            Adding both gives: <b>3x + 5z = 26</b> ---- (5)<br><br>
            <b>Step 3: Subtract equation (4) from equation (5):</b><br>
            (3x + 5z) - (3x + 2z) = 26 - 14<br>
            3z = 12 ⇒ <b>z = 4</b><br><br>
            <b>Step 4: Substitute z = 4 in (4):</b><br>
            3x + 2(4) = 14 ⇒ 3x + 8 = 14 ⇒ 3x = 6 ⇒ <b>x = 2</b><br><br>
            <b>Step 5: Substitute x = 2 and z = 4 in (1):</b><br>
            2 + y + 4 = 5 ⇒ y + 6 = 5 ⇒ <b>y = -1</b><br><br>
            <b>Hence, the solution is: x = 2, y = -1, z = 4</b>
          </div>`,
          diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 640" width="100%" height="auto" style="font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,sans-serif; background:#f8fafc; border-radius:14px; border:1.5px solid #cbd5e1; box-shadow:0 4px 12px rgba(0,0,0,0.05); max-width:100%; display:block; margin:0 auto;">
  <defs>
    <linearGradient id="gradCenter_em" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e3a8a" />
      <stop offset="100%" stop-color="#2563eb" />
    </linearGradient>
    <filter id="shadow_em" x="-5%" y="-5%" width="110%" height="115%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="3" stdDeviation="3" flood-opacity="0.12"/>
    </filter>
    <marker id="arrowB_em" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M 0 1 L 6 4 L 0 7 z" fill="#2563eb" />
    </marker>
    <marker id="arrowG_em" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M 0 1 L 6 4 L 0 7 z" fill="#059669" />
    </marker>
  </defs>

  <rect x="0" y="0" width="960" height="48" fill="#1e293b" rx="14" ry="14" />
  <rect x="0" y="24" width="960" height="24" fill="#1e293b" />
  <text x="480" y="30" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="800" letter-spacing="0.5">&#129504; 5-MARK SOLUTION MINDMAP : LINEAR EQUATIONS IN THREE VARIABLES</text>

  <path d="M 360 300 C 260 300, 260 140, 220 140" fill="none" stroke="#94a3b8" stroke-width="2.5" stroke-dasharray="4,4" />
  <path d="M 360 320 C 260 320, 260 270, 220 270" fill="none" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arrowB_em)" />
  <path d="M 360 340 C 260 340, 260 410, 220 410" fill="none" stroke="#7c3aed" stroke-width="2.5" marker-end="url(#arrowB_em)" />
  <path d="M 600 300 C 680 300, 680 150, 740 150" fill="none" stroke="#059669" stroke-width="2.5" marker-end="url(#arrowG_em)" />
  <path d="M 600 320 C 680 320, 680 280, 740 280" fill="none" stroke="#059669" stroke-width="2.5" marker-end="url(#arrowG_em)" />
  <path d="M 600 340 C 680 340, 680 410, 740 410" fill="none" stroke="#059669" stroke-width="2.5" marker-end="url(#arrowG_em)" />
  <path d="M 480 375 L 480 500" fill="none" stroke="#d97706" stroke-width="3" marker-end="url(#arrowG_em)" />

  <g filter="url(#shadow_em)">
    <rect x="360" y="275" width="240" height="95" rx="16" fill="url(#gradCenter_em)" stroke="#60a5fa" stroke-width="2"/>
    <text x="480" y="305" text-anchor="middle" fill="#93c5fd" font-size="11" font-weight="800" letter-spacing="1">CORE CONCEPT</text>
    <text x="480" y="328" text-anchor="middle" fill="#ffffff" font-size="15" font-weight="800">Solve 3x3 Linear System</text>
    <text x="480" y="348" text-anchor="middle" fill="#e0f2fe" font-size="12" font-weight="600">Elimination &amp; Back-Substitution</text>
  </g>

  <g filter="url(#shadow_em)">
    <rect x="25" y="80" width="205" height="110" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <rect x="25" y="80" width="205" height="28" rx="12" fill="#f1f5f9" />
    <text x="127" y="99" text-anchor="middle" fill="#334155" font-size="12" font-weight="800">&#128203; Given Equations</text>
    <text x="40" y="125" fill="#1e293b" font-size="12" font-family="monospace"><b>(1)</b> x + y + z = 5</text>
    <text x="40" y="148" fill="#1e293b" font-size="12" font-family="monospace"><b>(2)</b> 2x - y + z = 9</text>
    <text x="40" y="171" fill="#1e293b" font-size="12" font-family="monospace"><b>(3)</b> x - 2y + 3z = 16</text>
  </g>

  <g filter="url(#shadow_em)">
    <rect x="20" y="215" width="215" height="105" rx="12" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5" />
    <rect x="20" y="215" width="215" height="26" rx="12" fill="#e0f2fe" />
    <text x="127" y="233" text-anchor="middle" fill="#0369a1" font-size="11.5" font-weight="800">Step 1: Eliminate 'y'</text>
    <text x="32" y="258" fill="#475569" font-size="11.5">Add Eq (1) + Eq (2):</text>
    <text x="32" y="278" fill="#0f172a" font-size="11" font-family="monospace">(x+y+z) + (2x-y+z) = 14</text>
    <rect x="30" y="287" width="195" height="24" rx="6" fill="#f0fdf4" stroke="#86efac" />
    <text x="127" y="303" text-anchor="middle" fill="#15803d" font-size="12" font-weight="800">&#10145; 3x + 2z = 14  [Eq 4]</text>
  </g>

  <g filter="url(#shadow_em)">
    <rect x="20" y="350" width="215" height="110" rx="12" fill="#ffffff" stroke="#c084fc" stroke-width="1.5" />
    <rect x="20" y="350" width="215" height="26" rx="12" fill="#f3e8ff" />
    <text x="127" y="368" text-anchor="middle" fill="#6b21a8" font-size="11.5" font-weight="800">Step 2: Eliminate 'y' Again</text>
    <text x="32" y="393" fill="#475569" font-size="11">Multiply 2 Ã— (1) + (3):</text>
    <text x="32" y="411" fill="#0f172a" font-size="10.5" font-family="monospace">(2x+2y+2z) + (x-2y+3z) = 26</text>
    <rect x="30" y="422" width="195" height="24" rx="6" fill="#fdf4ff" stroke="#d8b4fe" />
    <text x="127" y="438" text-anchor="middle" fill="#7e22ce" font-size="12" font-weight="800">&#10145; 3x + 5z = 26  [Eq 5]</text>
  </g>

  <g filter="url(#shadow_em)">
    <rect x="725" y="85" width="215" height="105" rx="12" fill="#ffffff" stroke="#86efac" stroke-width="1.5" />
    <rect x="725" y="85" width="215" height="26" rx="12" fill="#dcfce7" />
    <text x="832" y="103" text-anchor="middle" fill="#15803d" font-size="11.5" font-weight="800">Step 3: Solve for 'z'</text>
    <text x="737" y="128" fill="#475569" font-size="11">Subtract (5) - (4):</text>
    <text x="737" y="146" fill="#0f172a" font-size="11" font-family="monospace">(3x+5z) - (3x+2z) = 12</text>
    <text x="737" y="166" fill="#0f172a" font-size="11.5" font-weight="700">3z = 12  &#8658;  <tspan fill="#16a34a" font-size="14" font-weight="800">z = 4</tspan></text>
  </g>

  <g filter="url(#shadow_em)">
    <rect x="725" y="215" width="215" height="100" rx="12" fill="#ffffff" stroke="#86efac" stroke-width="1.5" />
    <rect x="725" y="215" width="215" height="26" rx="12" fill="#dcfce7" />
    <text x="832" y="233" text-anchor="middle" fill="#15803d" font-size="11.5" font-weight="800">Step 4: Solve for 'x'</text>
    <text x="737" y="258" fill="#475569" font-size="11">Substitute z = 4 in (4):</text>
    <text x="737" y="276" fill="#0f172a" font-size="11" font-family="monospace">3x + 2(4) = 14 &#8658; 3x + 8 = 14</text>
    <text x="737" y="296" fill="#0f172a" font-size="11.5" font-weight="700">3x = 6  &#8658;  <tspan fill="#16a34a" font-size="14" font-weight="800">x = 2</tspan></text>
  </g>

  <g filter="url(#shadow_em)">
    <rect x="725" y="345" width="215" height="105" rx="12" fill="#ffffff" stroke="#86efac" stroke-width="1.5" />
    <rect x="725" y="345" width="215" height="26" rx="12" fill="#dcfce7" />
    <text x="832" y="363" text-anchor="middle" fill="#15803d" font-size="11.5" font-weight="800">Step 5: Solve for 'y'</text>
    <text x="737" y="388" fill="#475569" font-size="11">Sub x = 2, z = 4 in (1):</text>
    <text x="737" y="406" fill="#0f172a" font-size="11" font-family="monospace">2 + y + 4 = 5 &#8658; y + 6 = 5</text>
    <text x="737" y="428" fill="#0f172a" font-size="11.5" font-weight="700">y = 5 - 6  &#8658;  <tspan fill="#16a34a" font-size="14" font-weight="800">y = -1</tspan></text>
  </g>

  <g filter="url(#shadow_em)">
    <rect x="260" y="505" width="440" height="105" rx="14" fill="#ffffff" stroke="#f59e0b" stroke-width="2.5" />
    <rect x="260" y="505" width="440" height="30" rx="14" fill="#fef3c7" />
    <text x="480" y="525" text-anchor="middle" fill="#b45309" font-size="13" font-weight="800">&#127942; FINAL SOLUTION &amp; VERIFICATION</text>
    <text x="480" y="558" text-anchor="middle" fill="#1e293b" font-size="18" font-weight="800">x = 2 ,  y = -1 ,  z = 4</text>
    <text x="480" y="585" text-anchor="middle" fill="#059669" font-size="11.5" font-weight="700">&#10004; Verification: 2 + (-1) + 4 = 5  |  2(2)-(-1)+4 = 9  |  2-2(-1)+3(4) = 16</text>
  </g>
</svg>`,
          diagramCaption: "Solution Mindmap : Step-by-Step Elimination &amp; Back-Substitution Flowchart",
          checkpoints: [
            {
              q: "1. What is the primary goal when solving a system of three linear equations using elimination?",
              options: [
                "A. To find the values of all three variables simultaneously in the first step",
                "B. To convert the equations into quadratic equations",
                "C. To reduce the system to two equations with two variables",
                "D. To eliminate all variables and solve for a constant"
              ],
              ans: 2,
              explanation: "The standard method for solving a 3x3 linear system is to eliminate one variable using pairs of equations, reducing the system to two equations with two variables."
            },
            {
              q: "2. Given the first equation x + y + z = 5, what is the value of z if x = 2 and y = 1?",
              options: ["A. 1", "B. 2", "C. 3", "D. 4"],
              ans: 1,
              explanation: "Substitute x = 2 and y = 1: 2 + 1 + z = 5 => 3 + z = 5, which simplifies to z = 2."
            },
            {
              q: "3. If you add the first equation (x + y + z = 5) and the second equation (2x - y + z = 9), what is the resulting equation?",
              options: [
                "A. 3x + y = 14",
                "B. 3x - 2y + 2z = 14",
                "C. x + 2y = 4",
                "D. 3x + 2z = 14"
              ],
              ans: 3,
              explanation: "Adding (x + y + z = 5) and (2x - y + z = 9) eliminates y: (x + 2x) + (y - y) + (z + z) = 5 + 9 => 3x + 2z = 14 [Equation 4]."
            },
            {
              q: "4. What is the value of x in the final solution to the system?",
              options: ["A. 2", "B. 3", "C. 4", "D. 5"],
              ans: 0,
              explanation: "From Equation (4): 3x + 2z = 14. Substituting z = 4 yields: 3x + 2(4) = 14 => 3x + 8 = 14 => 3x = 6 => x = 2."
            },
            {
              q: "5. What is the value of y in the final solution to the system?",
              options: ["A. 2", "B. 1", "C. 0", "D. -1"],
              ans: 3,
              explanation: "Substitute x = 2 and z = 4 into Eq (1): 2 + y + 4 = 5 => y + 6 = 5 => y = 5 - 6 = -1."
            },
            {
              q: "6. What is the value of z in the final solution to the system?",
              options: ["A. 4", "B. 1", "C. 5", "D. 7"],
              ans: 0,
              explanation: "Subtracting Eq (5) - Eq (4): (3x + 5z) - (3x + 2z) = 26 - 14 => 3z = 12 => z = 4."
            },
            {
              q: "7. Which method is generally NOT used to solve a system of three linear equations?",
              options: [
                "A. Gaussian Elimination",
                "B. Matrix Inversion (Cramer's Rule)",
                "C. Substitution method",
                "D. Pythagorean Theorem"
              ],
              ans: 3,
              explanation: "The Pythagorean theorem is used in geometry for right-angled triangles, not for solving systems of linear equations."
            },
            {
              q: "8. If you check the solution (x = 2, y = -1, z = 4) in the third equation (x - 2y + 3z = 16), does it hold true?",
              options: [
                "A. No, it equals 10",
                "B. No, it equals 14",
                "C. No, it equals 18",
                "D. Yes, 2 - 2(-1) + 3(4) = 2 + 2 + 12 = 16"
              ],
              ans: 3,
              explanation: "Substitute x = 2, y = -1, z = 4: 2 - 2(-1) + 3(4) = 2 + 2 + 12 = 16. LHS = RHS, so the solution is verified correct!"
            },
            {
              q: "9. What does a consistent and independent system of three linear equations graphically represent in 3D space?",
              options: [
                "A. Three planes intersecting at a single unique point",
                "B. Three parallel planes",
                "C. The exact same plane repeated three times",
                "D. Three intersecting lines on a 2D plane"
              ],
              ans: 0,
              explanation: "A consistent and independent system of three linear equations represents three flat planes that intersect at a single unique point (the unique solution triplet x, y, z)."
            },
            {
              q: "10. If a system of linear equations has infinitely many solutions, what does it mean algebraically during elimination?",
              options: [
                "A. You will get a true identity like 0 = 0",
                "B. You will get a false statement like 0 = 5",
                "C. You will find a unique coordinate triplet (x, y, z)",
                "D. All variables will equal zero"
              ],
              ans: 0,
              explanation: "An infinite number of solutions typically leads to dependent equations resulting in a true identity such as 0 = 0 during the elimination process."
            }
          ],
          explanation: "Variable elimination method yields unique solution x = 2, y = -1, z = 4."
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 2: Square Root & Quadratic Equations
    // -------------------------------------------------------------
    {
      id: "sec_math_em_3_2",
      title: "Section 2: Square Root of Polynomials & Quadratic Equations",
      author: "Chapter 3: Algebra - Exercises 3.8 & 3.13",
      questions: [
        {
          id: "m_em_3_2_1",
          type: "1m",
          mark: "1 Mark",
          q: "What is the nature of the roots of the quadratic equation 2x² - 4x + 1 = 0?",
          options: ["a) Real and equal", "b) Real and unequal", "c) No real roots", "d) Imaginary"],
          ans: "Answer: <b>b) Real and unequal</b><br>Explanation: Here a = 2, b = -4, c = 1. Discriminant Δ = b² - 4ac = (-4)² - 4(2)(1) = 16 - 8 = <b>8 > 0</b>. Since Δ > 0, roots are real and unequal.",
          explanation: "Since discriminant Δ > 0, roots are distinct real numbers."
        },
        {
          id: "m_em_3_2_2",
          type: "2m",
          mark: "2 Marks",
          examTag: "Board Exam",
          q: "Determine the quadratic equation whose sum of roots is -9 and product of roots is 20.",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            Given:<br>
            • Sum of roots (α + β) = -9<br>
            • Product of roots (αβ) = 20<br><br>
            The general form of a quadratic equation is:<br>
            <b>x² - (Sum of roots)x + (Product of roots) = 0</b><br><br>
            Substituting the given values:<br>
            x² - (-9)x + 20 = 0<br>
            <b>x² + 9x + 20 = 0</b>
          </div>`,
          explanation: "Standard quadratic equation format: x² - (sum)x + product = 0."
        },
        {
          id: "m_em_3_2_3",
          type: "5m",
          mark: "5 Marks",
          examYear: "2024",
          examTag: "2024*",
          isImportant: true,
          q: "Find the square root of 64x⁴ - 16x³ + 17x² - 2x + 1 by division method.",
          ans: `<div style="line-height:1.8;">
            <b>Solution (Long Division Method):</b><br>
            Step 1: First term is 64x⁴. Its square root is <b>8x²</b>.<br>
            Multiply (8x²) × (8x²) = 64x⁴; subtracting leaves 0.<br><br>
            Step 2: Bring down next two terms: -16x³ + 17x².<br>
            Double the quotient: 2 × (8x²) = 16x².<br>
            Divide (-16x³) / (16x²) = <b>-x</b>.<br>
            Multiply (16x² - x) × (-x) = -16x³ + x².<br>
            Subtracting gives remainder: 16x².<br><br>
            Step 3: Bring down remaining two terms: 16x² - 2x + 1.<br>
            Double the existing quotient: 16x² - 2x.<br>
            Divide (16x²) / (16x²) = <b>+1</b>.<br>
            Multiply (16x² - 2x + 1) × 1 = 16x² - 2x + 1.<br>
            Subtracting gives remainder: 0.<br><br>
            <b>Therefore, √(64x⁴ - 16x³ + 17x² - 2x + 1) = |8x² - x + 1|</b>
          </div>`,
          explanation: "Polynomial square root division method yields |8x² - x + 1|."
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 3: Matrices & Properties
    // -------------------------------------------------------------
    {
      id: "sec_math_em_3_3",
      title: "Section 3: Matrices (Operations & Transpose Properties)",
      author: "Chapter 3: Algebra - Exercises 3.17 & 3.18",
      questions: [
        {
          id: "m_em_3_3_1",
          type: "1m",
          mark: "1 Mark",
          q: "If matrix A is of order 2 × 3 and matrix B is of order 3 × 4, what is the order of the product matrix AB?",
          options: ["a) 2 × 3", "b) 3 × 2", "c) 2 × 4", "d) 4 × 2"],
          ans: "Answer: <b>c) 2 × 4</b><br>Explanation: Number of columns of A (3) matches number of rows of B (3). The resulting product matrix takes rows of A and columns of B, which is <b>2 × 4</b>.",
          explanation: "Order of product matrix AB is (rows of A) × (cols of B) = 2 × 4."
        },
        {
          id: "m_em_3_3_2",
          type: "2m",
          mark: "2 Marks",
          q: "If A = [[1, 2], [3, 4]] and B = [[4, 3], [2, 1]], find A + B and A - B.",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            <b>1. Value of A + B:</b><br>
            A + B = [[1+4, 2+3], [3+2, 4+1]] = <b>[[5, 5], [5, 5]]</b><br><br>
            <b>2. Value of A - B:</b><br>
            A - B = [[1-4, 2-3], [3-2, 4-1]] = <b>[[-3, -1], [1, 3]]</b>
          </div>`,
          explanation: "Element-wise addition and subtraction of corresponding 2×2 entries."
        },
        {
          id: "m_em_3_3_3",
          type: "5m",
          mark: "5 Marks",
          examYear: "2023",
          examTag: "2023*",
          isImportant: true,
          q: "If A = [[1, 2], [3, 1]] and B = [[1, -2], [-3, 1]], verify that (AB)^T = B^T A^T.",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            Given matrices: A = [[1, 2], [3, 1]] and B = [[1, -2], [-3, 1]]<br><br>
            <b>Left Hand Side (LHS): (AB)^T</b><br>
            AB = [[1(1) + 2(-3), 1(-2) + 2(1)], [3(1) + 1(-3), 3(-2) + 1(1)]]<br>
            AB = [[1 - 6, -2 + 2], [3 - 3, -6 + 1]] = [[-5, 0], [0, -5]]<br>
            <b>(AB)^T = [[-5, 0], [0, -5]]</b> ---- (1)<br><br>
            <b>Right Hand Side (RHS): B^T A^T</b><br>
            B^T = [[1, -3], [-2, 1]]<br>
            A^T = [[1, 3], [2, 1]]<br>
            B^T A^T = [[1(1) + (-3)(2), 1(3) + (-3)(1)], [-2(1) + 1(2), -2(3) + 1(1)]]<br>
            B^T A^T = [[1 - 6, 3 - 3], [-2 + 2, -6 + 1]] = [[-5, 0], [0, -5]] ---- (2)<br><br>
            From (1) and (2), LHS = RHS.<br>
            <b>Hence, (AB)^T = B^T A^T is verified.</b>
          </div>`,
          explanation: "Reversal law of matrix transpose (AB)^T = B^T A^T holds true."
        }
      ]
    }
  ]
};
