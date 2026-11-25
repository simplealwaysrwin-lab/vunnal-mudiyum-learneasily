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
          videoUrl: "https://youtu.be/8zuChWmJTIk",
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
          videoUrl: "https://youtu.be/C3djN9tURD8",
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
    ,
    // -------------------------------------------------------------
    // Section 4: Graph - Top Important 8-Mark Public Exam Questions (Exercise 3.16)
    // -------------------------------------------------------------
    {
      id: "sec_math_em_3_4",
      title: "Section 4: Graph - Public Exam 8-Mark Special Questions (Exercise 3.16)",
      author: "Chapter 3: Algebra - Quadratic Graphs (Q.44)",
      questions: [
        {
          id: "m_em_3_4_1",
          type: "8m",
          mark: "8 Marks",
          is8Mark: true,
          examYear: "2024",
          examTag: "Public Exam (Q.44)",
          isImportant: true,
          q: "Draw the graph of y = x² - 9 and state the nature of solutions.",
          ans: `<div style="line-height:1.8;">
            <b>Step 1: Given Quadratic Function:</b><br>
            y = x² - 9<br><br>
            <b>Step 2: Table of Values:</b><br>
            <table style="width:100%; border-collapse:collapse; text-align:center; margin:8px 0; font-size:13px;">
              <tr style="background:#f1f5f9; border:1px solid #cbd5e1;">
                <th style="padding:6px; border:1px solid #cbd5e1;">x</th>
                <td style="padding:6px; border:1px solid #cbd5e1;">-4</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">-3</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">-2</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">-1</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">0</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">1</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">2</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">3</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">4</td>
              </tr>
              <tr style="border:1px solid #cbd5e1;">
                <th style="padding:6px; border:1px solid #cbd5e1;">x²</th>
                <td style="padding:6px; border:1px solid #cbd5e1;">16</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">9</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">4</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">1</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">0</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">1</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">4</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">9</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">16</td>
              </tr>
              <tr style="border:1px solid #cbd5e1;">
                <th style="padding:6px; border:1px solid #cbd5e1;">-9</th>
                <td style="padding:6px; border:1px solid #cbd5e1;">-9</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">-9</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">-9</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">-9</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">-9</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">-9</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">-9</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">-9</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">-9</td>
              </tr>
              <tr style="background:#e0f2fe; font-weight:700; border:1px solid #cbd5e1;">
                <th style="padding:6px; border:1px solid #cbd5e1; color:#0369a1;">y</th>
                <td style="padding:6px; border:1px solid #cbd5e1;">7</td>
                <td style="padding:6px; border:1px solid #cbd5e1; color:#15803d;">0</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">-5</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">-8</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">-9</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">-8</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">-5</td>
                <td style="padding:6px; border:1px solid #cbd5e1; color:#15803d;">0</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">7</td>
              </tr>
            </table><br>
            <b>Step 3: Points to be Plotted:</b><br>
            (-4, 7), (-3, 0), (-2, -5), (-1, -8), (0, -9), (1, -8), (2, -5), (3, 0), (4, 7).<br><br>
            <b>Step 4: Scale:</b><br>
            • X-axis: 1 cm = 1 unit<br>
            • Y-axis: 1 cm = 2 units<br><br>
            <b>Step 5: Nature of Solutions:</b><br>
            Plot these points and draw a smooth parabola.<br>
            The curve intersects the X-axis at two distinct points: <b>(-3, 0)</b> and <b>(3, 0)</b>.<br><br>
            <div style="padding:10px 14px; background:#f0fdf4; border-left:4px solid #16a34a; border-radius:6px; font-weight:700; color:#15803d;">
              Conclusion: Since the parabola intersects the X-axis at two distinct points, the equation has <u>Real and Unequal Roots</u>.<br>
              Solution Set = {-3, 3}.
            </div>
          </div>`,
          explanation: "Parabola intersects X-axis at two points (-3, 0) and (3, 0), hence real and unequal roots with solution {-3, 3}."
        },
        {
          id: "m_em_3_4_2",
          type: "8m",
          mark: "8 Marks",
          is8Mark: true,
          examYear: "2023",
          examTag: "Public Exam (Q.44)",
          isImportant: true,
          q: "Draw the graph of y = x² - 4x + 4 and state the nature of solutions.",
          ans: `<div style="line-height:1.8;">
            <b>Step 1: Function:</b><br>
            y = x² - 4x + 4<br><br>
            <b>Step 2: Table of Values:</b><br>
            <table style="width:100%; border-collapse:collapse; text-align:center; margin:8px 0; font-size:13px;">
              <tr style="background:#f1f5f9; border:1px solid #cbd5e1;">
                <th style="padding:6px; border:1px solid #cbd5e1;">x</th>
                <td style="padding:6px; border:1px solid #cbd5e1;">-1</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">0</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">1</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">2</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">3</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">4</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">5</td>
              </tr>
              <tr style="border:1px solid #cbd5e1;">
                <th style="padding:6px; border:1px solid #cbd5e1;">x²</th>
                <td style="padding:6px; border:1px solid #cbd5e1;">1</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">0</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">1</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">4</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">9</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">16</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">25</td>
              </tr>
              <tr style="border:1px solid #cbd5e1;">
                <th style="padding:6px; border:1px solid #cbd5e1;">-4x</th>
                <td style="padding:6px; border:1px solid #cbd5e1;">4</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">0</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">-4</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">-8</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">-12</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">-16</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">-20</td>
              </tr>
              <tr style="border:1px solid #cbd5e1;">
                <th style="padding:6px; border:1px solid #cbd5e1;">+4</th>
                <td style="padding:6px; border:1px solid #cbd5e1;">4</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">4</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">4</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">4</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">4</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">4</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">4</td>
              </tr>
              <tr style="background:#e0f2fe; font-weight:700; border:1px solid #cbd5e1;">
                <th style="padding:6px; border:1px solid #cbd5e1; color:#0369a1;">y</th>
                <td style="padding:6px; border:1px solid #cbd5e1;">9</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">4</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">1</td>
                <td style="padding:6px; border:1px solid #cbd5e1; color:#15803d;">0</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">1</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">4</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">9</td>
              </tr>
            </table><br>
            <b>Step 3: Points to Plot:</b><br>
            (-1, 9), (0, 4), (1, 1), (2, 0), (3, 1), (4, 4), (5, 9).<br><br>
            <b>Step 4: Scale:</b><br>
            • X-axis: 1 cm = 1 unit<br>
            • Y-axis: 1 cm = 1 unit<br><br>
            <b>Step 5: Nature of Solutions:</b><br>
            The parabola touches the X-axis at only one point: <b>(2, 0)</b>.<br><br>
            <div style="padding:10px 14px; background:#f0fdf4; border-left:4px solid #16a34a; border-radius:6px; font-weight:700; color:#15803d;">
              Conclusion: Since the curve touches the X-axis at only one point, the roots are <u>Real and Equal</u>.<br>
              Solution = 2.
            </div>
          </div>`,
          explanation: "Curve touches X-axis at (2, 0) giving real and equal root x = 2."
        },
        {
          id: "m_em_3_4_3",
          type: "8m",
          mark: "8 Marks",
          is8Mark: true,
          examYear: "2024",
          examTag: "Public Exam Model (Q.44)",
          isImportant: true,
          q: "Draw the graph of y = x² + 3x - 4 and hence use it to solve x² + 3x - 4 = 0.",
          ans: `<div style="line-height:1.8;">
            <b>Step 1: Table for Parabola y = x² + 3x - 4:</b><br>
            <table style="width:100%; border-collapse:collapse; text-align:center; margin:8px 0; font-size:13px;">
              <tr style="background:#f1f5f9; border:1px solid #cbd5e1;">
                <th style="padding:6px; border:1px solid #cbd5e1;">x</th>
                <td style="padding:6px; border:1px solid #cbd5e1;">-5</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">-4</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">-3</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">-2</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">-1</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">0</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">1</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">2</td>
              </tr>
              <tr style="background:#e0f2fe; font-weight:700; border:1px solid #cbd5e1;">
                <th style="padding:6px; border:1px solid #cbd5e1; color:#0369a1;">y</th>
                <td style="padding:6px; border:1px solid #cbd5e1;">6</td>
                <td style="padding:6px; border:1px solid #cbd5e1; color:#15803d;">0</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">-4</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">-6</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">-6</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">-4</td>
                <td style="padding:6px; border:1px solid #cbd5e1; color:#15803d;">0</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">6</td>
              </tr>
            </table><br>
            <b>Step 2: Subtract equations to find line equation:</b><br>
            y = x² + 3x - 4<br>
            0 = x² + 3x - 4<br>
            ----------------<br>
            <b>y = 0</b> (the X-axis itself)<br><br>
            <b>Step 3: Points of Intersection:</b><br>
            The parabola intersects the line y = 0 (X-axis) at <b>(-4, 0)</b> and <b>(1, 0)</b>.<br>
            The X-coordinates of these points are the roots.<br><br>
            <div style="padding:10px 14px; background:#f0fdf4; border-left:4px solid #16a34a; border-radius:6px; font-weight:700; color:#15803d;">
              Solution Set = {-4, 1}.
            </div>
          </div>`,
          explanation: "Parabola y = x² + 3x - 4 intersects the line y = 0 at x = -4 and x = 1."
        }
      ]
    },

    // -------------------------------------------------------------
    // Additional Practice Questions (In-Text)
    // -------------------------------------------------------------
    {
      id: "sec_math_em_u3_add_practice",
      title: "Additional Practice Questions (In-Text)",
      author: "Unit 3: Algebra - Extra Exam Practice",
      questions: [
        {
          id: "m_em_u3_add_q1",
          type: "2m",
          mark: "2 Marks | Additional Practice (In-Text)",
          sectionTag: "Additional Practice (In-Text)",
          isAdditionalPractice: true,
          subSectionId: "sec_math_em_u3_add_practice",
          q: "Find the roots of the equation: x² - 9 = 0.",
          ans: `<div style="line-height:1.8;">
            <b>Given equation:</b> x² - 9 = 0<br><br>
            <b>Method: Difference of Two Squares:</b><br>
            Formula: a² - b² = (a - b)(a + b)<br><br>
            x² - 3² = 0<br>
            (x - 3)(x + 3) = 0<br><br>
            <b>Equate each factor to zero:</b><br>
            • x - 3 = 0 &nbsp;⇒&nbsp; <b>x = 3</b><br>
            • x + 3 = 0 &nbsp;⇒&nbsp; <b>x = -3</b><br><br>
            <div style="padding:10px 14px; background:#f0fdf4; border-left:4px solid #16a34a; border-radius:6px; font-weight:700; color:#15803d;">
              Roots of the equation: x = ±3 &nbsp;(x = 3, -3)
            </div>
          </div>`,
          audioScript: "Given equation x squared minus 9 equals 0. Using difference of squares formula, x squared minus 3 squared equals 0, giving x minus 3 times x plus 3 equals 0. Either x minus 3 equals 0 which gives x equals 3, or x plus 3 equals 0 which gives x equals minus 3. Final answer: x equals plus or minus 3."
        },
        {
          id: "m_em_u3_add_q2",
          type: "2m",
          mark: "2 Marks | Additional Practice (In-Text)",
          sectionTag: "Additional Practice (In-Text)",
          isAdditionalPractice: true,
          subSectionId: "sec_math_em_u3_add_practice",
          q: "Solve the quadratic equation: 2x² - 7x + 3 = 0.",
          ans: `<div style="line-height:1.8;">
            <b>Given equation:</b> 2x² - 7x + 3 = 0<br><br>
            <b>Step 1: Factorise by splitting the middle term:</b><br>
            • Product = a × c = 2 × 3 = 6<br>
            • Sum = b = -7<br>
            • Suitable factors are -6 and -1<br><br>
            2x² - 6x - x + 3 = 0<br>
            2x(x - 3) - 1(x - 3) = 0<br>
            (2x - 1)(x - 3) = 0<br><br>
            <b>Step 2: Solve for x:</b><br>
            • 2x - 1 = 0 &nbsp;⇒&nbsp; 2x = 1 &nbsp;⇒&nbsp; <b>x = 1/2</b><br>
            • x - 3 = 0 &nbsp;⇒&nbsp; <b>x = 3</b><br><br>
            <div style="padding:10px 14px; background:#f0fdf4; border-left:4px solid #16a34a; border-radius:6px; font-weight:700; color:#15803d;">
              Roots of the quadratic equation: x = 1/2, 3
            </div>
          </div>`,
          audioScript: "Quadratic equation: 2x squared minus 7x plus 3 equals 0. Splitting the middle term: 2x squared minus 6x minus x plus 3 equals 0. Factoring gives 2x minus 1 times x minus 3 equals 0. Therefore, x equals 1 over 2, or x equals 3. Solution set is x equals half and 3."
        },
        {
          id: "m_em_u3_add_q3",
          type: "5m",
          mark: "5 Marks | Additional Practice (In-Text)",
          sectionTag: "Additional Practice (In-Text)",
          isAdditionalPractice: true,
          subSectionId: "sec_math_em_u3_add_practice",
          q: "The sum of two numbers is 15 and their product is 54. Find the numbers.",
          ans: `<div style="line-height:1.8;">
            <b>Step 1: Assign variables:</b><br>
            Let the two numbers be x and y.<br><br>
            <b>Step 2: Form equations from given conditions:</b><br>
            1. x + y = 15 &nbsp;⇒&nbsp; y = 15 - x<br>
            2. x · y = 54<br><br>
            <b>Step 3: Substitute equation (1) into (2):</b><br>
            x(15 - x) = 54<br>
            15x - x² = 54<br>
            x² - 15x + 54 = 0<br><br>
            <b>Step 4: Factorise the quadratic equation:</b><br>
            • Product = 54, Sum = -15 ⇒ Factors are -6 and -9<br>
            x² - 6x - 9x + 54 = 0<br>
            x(x - 6) - 9(x - 6) = 0<br>
            (x - 6)(x - 9) = 0<br>
            x = 6 &nbsp;or&nbsp; x = 9<br><br>
            <b>Step 5: Find the numbers:</b><br>
            • If x = 6, y = 15 - 6 = 9<br>
            • If x = 9, y = 15 - 9 = 6<br><br>
            <div style="padding:10px 14px; background:#f0fdf4; border-left:4px solid #16a34a; border-radius:6px; font-weight:700; color:#15803d;">
              The required two numbers are 6 and 9.
            </div>
          </div>`,
          audioScript: "Let the two numbers be x and y. Condition 1: x plus y equals 15, so y equals 15 minus x. Condition 2: x times y equals 54. Substituting y gives x times 15 minus x equals 54, resulting in quadratic equation x squared minus 15x plus 54 equals 0. Factorising gives x minus 6 times x minus 9 equals 0. Thus x equals 6 or 9. The two numbers are 6 and 9."
        }        ,
        {
          id: "m_em_u3_add_q4",
          type: "5m",
          mark: "5 Marks | Additional Practice (In-Text)",
          sectionTag: "Additional Practice (In-Text)",
          isAdditionalPractice: true,
          subSectionId: "sec_math_em_u3_add_practice",
          q: "Draw the table of values and describe the graphical representation of the linear equation: x + y = 5. Find the points where it intersects the axes.",
          ans: `<div style="line-height:1.8;">
            <b>Given Linear Equation:</b><br>
            x + y = 5 &nbsp;⇒&nbsp; <b>y = 5 - x</b><br><br>
            <b>Step 1: Table of Values:</b><br>
            <table style="width:100%; max-width:400px; border-collapse:collapse; margin:10px 0; text-align:center;" border="1">
              <tr style="background:#e0f2fe; color:#0369a1; font-weight:700;">
                <th style="padding:6px;">x</th>
                <td style="padding:6px;">0</td>
                <td style="padding:6px;">1</td>
                <td style="padding:6px;">2</td>
                <td style="padding:6px;">3</td>
                <td style="padding:6px;">5</td>
              </tr>
              <tr>
                <th style="padding:6px; background:#f0f9ff; color:#0284c7;">y = 5 - x</th>
                <td style="padding:6px; font-weight:700;">5</td>
                <td style="padding:6px; font-weight:700;">4</td>
                <td style="padding:6px; font-weight:700;">3</td>
                <td style="padding:6px; font-weight:700;">2</td>
                <td style="padding:6px; font-weight:700;">0</td>
              </tr>
            </table>
            <b>Step 2: Plotted Points:</b><br>
            (0, 5), (1, 4), (2, 3), (3, 2), (5, 0)<br><br>
            <b>Step 3: Graph Diagram:</b><br>
            <div style="text-align:center; margin:12px 0;">
              <svg width="340" height="280" viewBox="0 0 340 280" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:8px; max-width:100%; height:auto;">
                <defs>
                  <pattern id="grid_u3_q4" width="28" height="28" patternUnits="userSpaceOnUse">
                    <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#f1f5f9" stroke-width="1"/>
                  </pattern>
                </defs>
                <rect width="340" height="280" fill="url(#grid_u3_q4)" />
                <!-- Axes -->
                <line x1="30" y1="230" x2="310" y2="230" stroke="#334155" stroke-width="2" />
                <polygon points="310,230 302,226 302,234" fill="#334155" />
                <text x="312" y="234" font-size="12" font-weight="800" fill="#0f172a">X</text>
                <line x1="60" y1="260" x2="60" y2="20" stroke="#334155" stroke-width="2" />
                <polygon points="60,20 56,28 64,28" fill="#334155" />
                <text x="56" y="14" font-size="12" font-weight="800" fill="#0f172a">Y</text>
                <text x="46" y="244" font-size="11" font-weight="700" fill="#64748b">O</text>
                <!-- Ticks -->
                <text x="216" y="244" font-size="10" font-weight="700" fill="#475569">5</text>
                <text x="48" y="74" font-size="10" font-weight="700" fill="#475569">5</text>
                <!-- Straight Line -->
                <line x1="44" y1="54" x2="242" y2="252" stroke="#2563eb" stroke-width="3" stroke-linecap="round" />
                <!-- Points -->
                <circle cx="60" cy="70" r="4.5" fill="#dc2626" />
                <text x="70" y="68" font-size="11" font-weight="800" fill="#b91c1c">(0, 5)</text>
                <circle cx="92" cy="102" r="4" fill="#dc2626" />
                <text x="100" y="100" font-size="10" font-weight="700" fill="#b91c1c">(1, 4)</text>
                <circle cx="124" cy="134" r="4" fill="#dc2626" />
                <text x="132" y="132" font-size="10" font-weight="700" fill="#b91c1c">(2, 3)</text>
                <circle cx="156" cy="166" r="4" fill="#dc2626" />
                <text x="164" y="164" font-size="10" font-weight="700" fill="#b91c1c">(3, 2)</text>
                <circle cx="220" cy="230" r="4.5" fill="#dc2626" />
                <text x="205" y="222" font-size="11" font-weight="800" fill="#b91c1c">(5, 0)</text>
                <!-- Info banner -->
                <rect x="175" y="25" width="145" height="36" rx="6" fill="#eff6ff" stroke="#3b82f6" />
                <text x="183" y="42" font-size="11" font-weight="800" fill="#1d4ed8">Line: x + y = 5</text>
                <text x="183" y="55" font-size="10" fill="#1e40af">Straight Line Graph</text>
              </svg>
            </div>
            <b>Step 4: Nature of Graph:</b><br>
            Joining these points with a straight edge yields a <b>Straight Line</b>.<br><br>
            <b>Step 5: Intercepts:</b><br>
            • X-axis intersection (put y = 0): <b>(5, 0)</b><br>
            • Y-axis intersection (put x = 0): <b>(0, 5)</b><br><br>
            <div style="padding:10px 14px; background:#f0fdf4; border-left:4px solid #16a34a; border-radius:6px; font-weight:700; color:#15803d;">
              Graph is a Straight Line &nbsp;|&nbsp; Intercepts: (5, 0) and (0, 5)
            </div>
          </div>`,
          audioScript: "Given linear equation x plus y equals 5, which gives y equals 5 minus x. Taking values for x as 0, 1, 2, 3, and 5, corresponding y values are 5, 4, 3, 2, and 0. Plotting points (0, 5), (1, 4), (2, 3), (3, 2), and (5, 0) on the graph and joining them forms a straight line. X-intercept is (5, 0) and Y-intercept is (0, 5)."
        },
        {
          id: "m_em_u3_add_q5",
          type: "5m",
          mark: "5 Marks | Additional Practice (In-Text)",
          sectionTag: "Additional Practice (In-Text)",
          isAdditionalPractice: true,
          subSectionId: "sec_math_em_u3_add_practice",
          q: "Find the graphical solution of the system of linear equations: x + y = 6 and x - y = 2 by constructing their tables of values and determining their point of intersection.",
          ans: `<div style="line-height:1.8;">
            <b>Given System of Equations:</b><br>
            1) x + y = 6 &nbsp;⇒&nbsp; <b>y = 6 - x</b><br>
            2) x - y = 2 &nbsp;⇒&nbsp; <b>y = x - 2</b><br><br>
            <b>Table 1: for Line 1 (x + y = 6):</b><br>
            <table style="width:100%; max-width:360px; border-collapse:collapse; margin:8px 0; text-align:center;" border="1">
              <tr style="background:#e0f2fe; color:#0369a1; font-weight:700;">
                <th style="padding:5px;">x</th><td>0</td><td>2</td><td>4</td><td>6</td>
              </tr>
              <tr>
                <th style="padding:5px; background:#f0f9ff;">y = 6 - x</th>
                <td style="padding:5px; font-weight:700;">6</td>
                <td style="padding:5px; font-weight:700;">4</td>
                <td style="padding:5px; font-weight:700; color:#dc2626; background:#fef2f2;">2</td>
                <td style="padding:5px; font-weight:700;">0</td>
              </tr>
            </table>
            Points: (0, 6), (2, 4), (4, 2), (6, 0)<br><br>
            <b>Table 2: for Line 2 (x - y = 2):</b><br>
            <table style="width:100%; max-width:360px; border-collapse:collapse; margin:8px 0; text-align:center;" border="1">
              <tr style="background:#fef3c7; color:#92400e; font-weight:700;">
                <th style="padding:5px;">x</th><td>0</td><td>2</td><td>4</td><td>6</td>
              </tr>
              <tr>
                <th style="padding:5px; background:#fffbeb;">y = x - 2</th>
                <td style="padding:5px; font-weight:700;">-2</td>
                <td style="padding:5px; font-weight:700;">0</td>
                <td style="padding:5px; font-weight:700; color:#dc2626; background:#fef2f2;">2</td>
                <td style="padding:5px; font-weight:700;">4</td>
              </tr>
            </table>
            Points: (0, -2), (2, 0), (4, 2), (6, 4)<br><br>
            <b>Graphical Representation:</b><br>
            <div style="text-align:center; margin:12px 0;">
              <svg width="340" height="280" viewBox="0 0 340 280" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:8px; max-width:100%; height:auto;">
                <defs>
                  <pattern id="grid_u3_q5" width="25" height="25" patternUnits="userSpaceOnUse">
                    <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#f1f5f9" stroke-width="1"/>
                  </pattern>
                </defs>
                <rect width="340" height="280" fill="url(#grid_u3_q5)" />
                <!-- Axes -->
                <line x1="25" y1="200" x2="315" y2="200" stroke="#334155" stroke-width="2" />
                <polygon points="315,200 307,196 307,204" fill="#334155" />
                <text x="318" y="204" font-size="12" font-weight="800" fill="#0f172a">X</text>
                <line x1="60" y1="265" x2="60" y2="15" stroke="#334155" stroke-width="2" />
                <polygon points="60,15 56,23 64,23" fill="#334155" />
                <text x="56" y="12" font-size="12" font-weight="800" fill="#0f172a">Y</text>
                <text x="46" y="214" font-size="11" font-weight="700" fill="#64748b">O</text>
                <!-- Line 1: y = 6 - x (Blue) -->
                <line x1="47" y1="31" x2="235" y2="219" stroke="#2563eb" stroke-width="2.5" />
                <text x="75" y="40" font-size="11" font-weight="800" fill="#2563eb">x + y = 6</text>
                <!-- Line 2: y = x - 2 (Orange) -->
                <line x1="47" y1="265" x2="235" y2="77" stroke="#ea580c" stroke-width="2.5" />
                <text x="210" y="70" font-size="11" font-weight="800" fill="#ea580c">x - y = 2</text>
                <!-- Intersection at (4, 2) -->
                <circle cx="164" cy="148" r="8" fill="#fee2e2" stroke="#dc2626" stroke-width="2" />
                <circle cx="164" cy="148" r="4.5" fill="#dc2626" />
                <!-- Solution Tag -->
                <rect x="180" y="115" width="145" height="36" rx="6" fill="#fef2f2" stroke="#dc2626" />
                <text x="188" y="130" font-size="11" font-weight="800" fill="#b91c1c">Intersection: (4, 2)</text>
                <text x="188" y="144" font-size="11" font-weight="700" fill="#dc2626">Solution: x = 4, y = 2</text>
              </svg>
            </div>
            <b>Point of Intersection:</b><br>
            The two straight lines intersect at <b>(4, 2)</b>.<br><br>
            <b>Verification:</b><br>
            • 4 + 2 = 6 (Satisfied)<br>
            • 4 - 2 = 2 (Satisfied)<br><br>
            <div style="padding:10px 14px; background:#f0fdf4; border-left:4px solid #16a34a; border-radius:6px; font-weight:700; color:#15803d;">
              Graphical Solution: x = 4, y = 2
            </div>
          </div>`,
          audioScript: "Solving system of linear equations graphically: First equation gives y equals 6 minus x, with points (0, 6), (2, 4), (4, 2), and (6, 0). Second equation gives y equals x minus 2, with points (0, minus 2), (2, 0), (4, 2), and (6, 4). Drawing both lines on the graph reveals they intersect at point (4, 2). Hence the graphical solution is x equals 4 and y equals 2. Verification shows both equations are satisfied."
        },
        {
          id: "m_em_u3_add_q6",
          type: "5m",
          mark: "5 Marks | Additional Practice (In-Text)",
          sectionTag: "Additional Practice (In-Text)",
          isAdditionalPractice: true,
          subSectionId: "sec_math_em_u3_add_practice",
          q: "Construct a table of values for the quadratic function y = x² - 4. State the nature of its graph, the coordinates of the turning point (vertex), and the roots of the equation x² - 4 = 0.",
          ans: `<div style="line-height:1.8;">
            <b>Given Quadratic Function:</b><br>
            y = x² - 4<br><br>
            <b>Step 1: Value Table (-3 ≤ x ≤ 3):</b><br>
            <table style="width:100%; max-width:440px; border-collapse:collapse; margin:10px 0; text-align:center;" border="1">
              <tr style="background:#f1f5f9; color:#334155; font-weight:700;">
                <th style="padding:5px;">x</th><td>-3</td><td>-2</td><td>-1</td><td>0</td><td>1</td><td>2</td><td>3</td>
              </tr>
              <tr>
                <th style="padding:5px; background:#f8fafc;">x²</th><td>9</td><td>4</td><td>1</td><td>0</td><td>1</td><td>4</td><td>9</td>
              </tr>
              <tr>
                <th style="padding:5px; background:#f8fafc;">-4</th><td>-4</td><td>-4</td><td>-4</td><td>-4</td><td>-4</td><td>-4</td><td>-4</td>
              </tr>
              <tr style="background:#e0f2fe; color:#0369a1; font-weight:700;">
                <th style="padding:5px;">y</th>
                <td>5</td>
                <td style="color:#dc2626; background:#fef2f2;">0</td>
                <td>-3</td>
                <td style="color:#7c3aed; background:#f5f3ff;">-4</td>
                <td>-3</td>
                <td style="color:#dc2626; background:#fef2f2;">0</td>
                <td>5</td>
              </tr>
            </table>
            <b>Step 2: Points to Plot:</b><br>
            (-3, 5), (-2, 0), (-1, -3), (0, -4), (1, -3), (2, 0), (3, 5)<br><br>
            <b>Step 3: Parabola Graph Diagram:</b><br>
            <div style="text-align:center; margin:12px 0;">
              <svg width="340" height="280" viewBox="0 0 340 280" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:8px; max-width:100%; height:auto;">
                <defs>
                  <pattern id="grid_u3_q6" width="25" height="25" patternUnits="userSpaceOnUse">
                    <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#f1f5f9" stroke-width="1"/>
                  </pattern>
                </defs>
                <rect width="340" height="280" fill="url(#grid_u3_q6)" />
                <!-- Axes -->
                <line x1="20" y1="150" x2="320" y2="150" stroke="#334155" stroke-width="2" />
                <polygon points="320,150 312,146 312,154" fill="#334155" />
                <text x="322" y="154" font-size="12" font-weight="800" fill="#0f172a">X</text>
                <line x1="170" y1="265" x2="170" y2="15" stroke="#334155" stroke-width="2" />
                <polygon points="170,15 166,23 174,23" fill="#334155" />
                <text x="166" y="12" font-size="12" font-weight="800" fill="#0f172a">Y</text>
                <text x="156" y="164" font-size="11" font-weight="700" fill="#64748b">O</text>
                <!-- Parabola curve -->
                <path d="M 74 70 C 95 140 130 214 170 214 C 210 214 245 140 266 70" fill="none" stroke="#7c3aed" stroke-width="3" />
                <!-- Roots -->
                <circle cx="106" cy="150" r="4.5" fill="#dc2626" />
                <text x="76" y="142" font-size="11" font-weight="800" fill="#b91c1c">(-2, 0)</text>
                <circle cx="234" cy="150" r="4.5" fill="#dc2626" />
                <text x="238" y="142" font-size="11" font-weight="800" fill="#b91c1c">(2, 0)</text>
                <!-- Vertex -->
                <circle cx="170" cy="214" r="4.5" fill="#7c3aed" />
                <text x="125" y="235" font-size="11" font-weight="800" fill="#6d28d9">Vertex (0, -4)</text>
                <!-- Equation label box -->
                <rect x="25" y="25" width="125" height="38" rx="6" fill="#f5f3ff" stroke="#8b5cf6" />
                <text x="33" y="42" font-size="11" font-weight="800" fill="#6d28d9">y = x² - 4</text>
                <text x="33" y="55" font-size="10" font-weight="700" fill="#7c3aed">Roots: x = -2, 2</text>
              </svg>
            </div>
            <b>Step 4: Nature of Graph:</b><br>
            Joining the points with a smooth continuous curve gives a <b>Parabola opening upwards</b>.<br><br>
            <b>Step 5: Vertex (Turning Point):</b><br>
            Minimum point of the parabola is at <b>(0, -4)</b>.<br><br>
            <b>Step 6: Roots of x² - 4 = 0:</b><br>
            The curve intersects the X-axis (y = 0) at (-2, 0) and (2, 0).<br>
            Therefore, the roots are <b>x = -2 and x = 2</b> (Real and unequal roots).<br><br>
            <div style="padding:10px 14px; background:#f0fdf4; border-left:4px solid #16a34a; border-radius:6px; font-weight:700; color:#15803d;">
              Graph: Upward Parabola &nbsp;|&nbsp; Vertex: (0, -4) &nbsp;|&nbsp; Roots: x = -2, 2
            </div>
          </div>`,
          audioScript: "For quadratic function y equals x squared minus 4, prepare table for x from minus 3 to plus 3. The points are (-3, 5), (-2, 0), (-1, -3), (0, -4), (1, -3), (2, 0), and (3, 5). Plotting these points and joining them with a smooth curve yields an upward parabola shown on the graph. The turning point or vertex is (0, -4). The curve intersects the x-axis at x equals minus 2 and x equals 2, which are the real roots of the equation."
        }

      ]
    }
  ]
};
