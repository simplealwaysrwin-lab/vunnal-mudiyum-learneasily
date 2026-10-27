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
          diagramImg: "images/math_bb_ch3_linear_eqn.jpg",
          diagramCaption: "Blackboard Solution: System of Linear Equations in Three Variables (Tap to Zoom)",
          blackboard: {
            title: "Solving System of Linear Equations in Three Variables",
            engTitle: "Solving System of Linear Equations in Three Variables",
            fullBoardImg: "images/math_bb_ch3_linear_eqn.jpg"
          },
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
          noVoice: true,
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
          noVoice: true,
          checkpoints: [
            {
              q: "1. What is the first term in the square root of the polynomial 64x⁴ - 16x³ + 17x² - 2x + 1?",
              options: ["A. 8x²", "B. 4x²", "C. 16x²", "D. 8x"],
              ans: 0,
              explanation: "The first term of the polynomial is 64x⁴. Its principal square root is 8x², which forms the first term of the root."
            },
            {
              q: "2. After subtracting the square of the first term (8x²)² from the given polynomial, what is the first remainder polynomial?",
              options: ["A. 32x³ - 2x + 1", "B. 16x³ + 17x² - 2x + 1", "C. -8x³ + 17x²", "D. -16x³ + 17x² - 2x + 1"],
              ans: 3,
              explanation: "Subtracting (8x²)² = 64x⁴ from the original polynomial leaves the remainder -16x³ + 17x² - 2x + 1."
            },
            {
              q: "3. When dividing the leading term of the remainder (-16x³) by twice the current root (2 × 8x² = 16x²), what is the second term of the square root?",
              options: ["A. 2x", "B. x", "C. -2x", "D. -x"],
              ans: 3,
              explanation: "Dividing (-16x³) / (16x²) = -x, which is the second term of the square root."
            },
            {
              q: "4. What is the complete divisor expression used for the second step of division?",
              options: ["A. 16x² - x", "B. 8x² - x", "C. 16x² - 2x", "D. 8x² - 2x"],
              ans: 0,
              explanation: "The divisor for step 2 is formed by taking twice the first term (16x²) and appending the new term (-x), giving 16x² - x."
            },
            {
              q: "5. After subtracting the product (16x² - x)(-x) from the previous remainder, what is the new remainder brought down with remaining terms?",
              options: ["A. 0", "B. 8x² - 2x + 1", "C. -2x + 1", "D. 16x² - 2x + 1"],
              ans: 3,
              explanation: "(-16x³ + 17x²) - (-16x³ + x²) = 16x². Bringing down -2x + 1 gives 16x² - 2x + 1."
            },
            {
              q: "6. What is the third term of the square root polynomial?",
              options: ["A. 1", "B. -1", "C. 2", "D. x"],
              ans: 0,
              explanation: "Dividing the leading term of the new remainder (16x²) by the leading term of the divisor (16x²) gives +1."
            },
            {
              q: "7. What is the final expression for the square root of 64x⁴ - 16x³ + 17x² - 2x + 1?",
              options: ["A. |8x² + x + 1|", "B. |8x² - x - 1|", "C. |4x² - x + 1|", "D. |8x² - x + 1|"],
              ans: 3,
              explanation: "The terms of the square root are 8x², -x, and +1. Hence, the square root is |8x² - x + 1|."
            },
            {
              q: "8. What is the final remainder obtained at the end of the division process for a perfect square polynomial?",
              options: ["A. 1", "B. -1", "C. x", "D. 0"],
              ans: 3,
              explanation: "Because the polynomial is a perfect square, the final remainder after complete division is 0."
            },
            {
              q: "9. Which algebraic identity is closely related to finding the square root of a 4th-degree polynomial?",
              options: [
                "A. a² - b² = (a - b)(a + b)",
                "B. (a + b)³ = a³ + 3a²b + 3ab² + b³",
                "C. (a + b + c)² = a² + b² + c² + 2ab + 2bc + 2ca",
                "D. (a + b)² = a² + 2ab + b²"
              ],
              ans: 2,
              explanation: "Finding the square root of a 5-term 4th-degree polynomial corresponds to expanding a trinomial square (a + b + c)²."
            },
            {
              q: "10. What is the degree of the resulting polynomial after finding the square root of a 4th-degree polynomial?",
              options: ["A. 2", "B. 1", "C. 3", "D. 4"],
              ans: 0,
              explanation: "Taking the square root of a polynomial halves its degree: Degree 4 / 2 = Degree 2."
            }
          ],
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
          noVoice: true,
          checkpoints: [
            {
              q: "1. What is the product matrix AB for A = [[1, 2], [3, 1]] and B = [[1, -2], [-3, 1]]?",
              options: ["A. [[-5, 0], [0, -5]]", "B. [[7, 0], [0, 7]]", "C. [[-5, 4], [0, -5]]", "D. [[1, -4], [-9, 1]]"],
              ans: 0,
              explanation: "Row-by-column multiplication: (1)(1)+2(-3) = -5, (1)(-2)+2(1) = 0, (3)(1)+1(-3) = 0, (3)(-2)+1(1) = -5. Thus AB = [[-5, 0], [0, -5]]."
            },
            {
              q: "2. What is the transpose of matrix A, denoted as A^T?",
              options: ["A. [[1, 2], [3, 1]]", "B. [[1, 3], [2, 1]]", "C. [[-1, -2], [-3, -1]]", "D. [[1, -3], [-2, 1]]"],
              ans: 1,
              explanation: "Interchanging rows and columns of A: Row 1 [1, 2] becomes Column 1, and Row 2 [3, 1] becomes Column 2. Hence A^T = [[1, 3], [2, 1]]."
            },
            {
              q: "3. What is the transpose of matrix B, denoted as B^T?",
              options: ["A. [[1, -2], [-3, 1]]", "B. [[-1, 2], [3, -1]]", "C. [[1, -3], [-2, 1]]", "D. [[2, 1], [1, 3]]"],
              ans: 2,
              explanation: "Interchanging rows and columns of B gives B^T = [[1, -3], [-2, 1]]."
            },
            {
              q: "4. What is the transpose of the product matrix AB, i.e., (AB)^T?",
              options: ["A. [[5, 0], [0, 5]]", "B. [[-5, 0], [0, -5]]", "C. [[0, -5], [-5, 0]]", "D. [[-5, 5], [5, -5]]"],
              ans: 1,
              explanation: "Since AB is a scalar diagonal matrix [[-5, 0], [0, -5]], swapping off-diagonal zeros leaves it identical: (AB)^T = [[-5, 0], [0, -5]]."
            },
            {
              q: "5. What is the product B^T A^T?",
              options: ["A. [[-1, -6], [-6, -1]]", "B. [[7, -3], [-3, 7]]", "C. [[-5, 0], [0, -5]]", "D. [[0, -5], [-5, 0]]"],
              ans: 2,
              explanation: "Multiplying B^T and A^T gives [[-5, 0], [0, -5]], which exactly equals (AB)^T."
            },
            {
              q: "6. Which matrix property is verified by showing (AB)^T = B^T A^T?",
              options: [
                "A. Commutative property of matrix multiplication",
                "B. Associative property of matrix addition",
                "C. Distributive property of matrices",
                "D. Reversal law of matrix transpose"
              ],
              ans: 3,
              explanation: "The reversal law of transpose states that the transpose of a product equals the product of their transposes in reverse order: (AB)^T = B^T A^T."
            },
            {
              q: "7. What type of matrices are A and B in terms of their dimensions?",
              options: ["A. 2×2 square matrices", "B. 2×3 matrices", "C. 3×3 matrices", "D. 1×2 row vectors"],
              ans: 0,
              explanation: "Both matrices have 2 rows and 2 columns, making them 2×2 square matrices."
            },
            {
              q: "8. What is the determinant of matrix A = [[1, 2], [3, 1]]?",
              options: ["A. 1", "B. 5", "C. -5", "D. -1"],
              ans: 2,
              explanation: "det(A) = (1)(1) - (2)(3) = 1 - 6 = -5."
            },
            {
              q: "9. What is the trace (sum of leading diagonal elements) of matrix B = [[1, -2], [-3, 1]]?",
              options: ["A. -2", "B. 0", "C. 1", "D. 2"],
              ans: 3,
              explanation: "The diagonal elements of B are 1 and 1. Their sum is 1 + 1 = 2."
            },
            {
              q: "10. What is the result of adding matrices A and B (A + B)?",
              options: ["A. [[2, 0], [0, 2]]", "B. [[2, -4], [0, 2]]", "C. [[0, 4], [6, 0]]", "D. [[1, 0], [0, 1]]"],
              ans: 0,
              explanation: "Adding corresponding entries: [1+1, 2+(-2)] = [2, 0] and [3+(-3), 1+1] = [0, 2]. Hence A + B = [[2, 0], [0, 2]] = 2I."
            }
          ],
          explanation: "Reversal law of matrix transpose (AB)^T = B^T A^T holds true."
        }
      ]
    }
  ]
};
