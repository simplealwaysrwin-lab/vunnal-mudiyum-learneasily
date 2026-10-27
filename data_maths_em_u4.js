// 10th Standard Mathematics - Unit 4: Geometry (English Medium)
// Tamil Nadu State Board Samacheer Kalvi Question Bank & Step-by-Step Solutions

const MATHS_EM_UNIT_4_DATA = {
  unitId: "math_em_u4",
  unitName: "Unit 4: Geometry",
  subject: "Mathematics (English Medium)",
  syllabus: "Tamil Nadu State Board Samacheer Kalvi Class 10 Mathematics",

  // Key Formulas & Theorems
  formulas: [
    { title: "Basic Proportionality Theorem (BPT / Thales Theorem)", rule: "In ΔABC, if DE || BC, then AD / DB = AE / EC" },
    { title: "Angle Bisector Theorem (ABT)", rule: "In ΔABC, if AD is internal bisector of ∠A, then BD / DC = AB / AC" },
    { title: "Pythagoras Theorem", rule: "In a right triangle: (Hypotenuse)² = (Side₁)² + (Side₂)² (i.e. AC² = AB² + BC²)" },
    { title: "Ratio of Areas of Similar Triangles", rule: "Area(ΔABC) / Area(ΔPQR) = (AB / PQ)² = (BC / QR)² = (AC / PR)²" },
    { title: "Tangents from an External Point", rule: "Lengths of tangents drawn from an external point to a circle are equal (PA = PB)" },
    { title: "Tangent-Secant Theorem", rule: "If PT is a tangent and PAB is a secant line to a circle, then PT² = PA × PB" }
  ],

  subSections: [
    // -------------------------------------------------------------
    // Section 1: Thales Theorem & Angle Bisector Theorem
    // -------------------------------------------------------------
    {
      id: "sec_math_em_4_1",
      title: "Section 1: Basic Proportionality Theorem & Angle Bisector Theorem",
      author: "Chapter 4: Geometry - Exercises 4.1 & 4.2",
      questions: [
        {
          id: "m_em_4_1_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "Board Model",
          q: "In ΔABC, DE || BC. If AD = 4 cm, DB = 6 cm, and AE = 5 cm, calculate the length of EC.",
          options: ["a) 6.5 cm", "b) 7.5 cm", "c) 8 cm", "d) 9 cm"],
          ans: "Answer: <b>b) 7.5 cm</b><br>Explanation: By Thales Theorem (BPT), AD / DB = AE / EC ⇒ 4 / 6 = 5 / EC ⇒ EC = (5 × 6) / 4 = 30 / 4 = <b>7.5 cm</b>.",
          explanation: "Applying BPT: AD/DB = AE/EC yields EC = 7.5 cm."
        },
        {
          id: "m_em_4_1_2",
          type: "2m",
          mark: "2 Marks",
          examYear: "2023",
          examTag: "2023*",
          q: "In ΔABC, AD is the internal bisector of ∠A meeting BC at D. If AB = 8 cm, AC = 6 cm, and BD = 4 cm, find DC.",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            By Angle Bisector Theorem (ABT):<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">BD / DC = AB / AC</div><br>
            Substituting the given values:<br>
            4 / DC = 8 / 6<br>
            4 / DC = 4 / 3<br>
            Cross multiplying:<br>
            4 × DC = 4 × 3<br>
            <b>DC = 3 cm</b>
          </div>`,
          explanation: "Angle Bisector Theorem ratio BD/DC = AB/AC gives DC = 3 cm."
        },
        {
          id: "m_em_4_1_3",
          type: "5m",
          mark: "5 Marks",
          examYear: "2024",
          examTag: "2024* (Theorem Proof)",
          isImportant: true,
          q: "State and prove the Basic Proportionality Theorem (Thales Theorem).",
          ans: `<div style="line-height:1.8;">
            <b>Statement (Basic Proportionality Theorem):</b><br>
            <i>'A straight line drawn parallel to a side of a triangle intersecting the other two sides, divides the sides in the same ratio.'</i><br><br>
            <b>Given:</b><br>
            In ΔABC, D is a point on AB and E is a point on AC such that DE || BC.<br><br>
            <b>To Prove:</b><br>
            <b>AD / DB = AE / EC</b><br><br>
            <b>Construction:</b><br>
            Join BE and CD. Draw EF ⊥ AB and DG ⊥ AC.<br><br>
            <b>Proof:</b><br>
            • Area(ΔADE) = ½ × Base × Height = ½ × AD × EF<br>
            • Area(ΔBDE) = ½ × DB × EF<br>
            Taking the ratio:<br>
            <b>Area(ΔADE) / Area(ΔBDE) = AD / DB</b> ---- (1)<br><br>
            Similarly, taking AC as the base:<br>
            • Area(ΔADE) = ½ × AE × DG<br>
            • Area(ΔCDE) = ½ × EC × DG<br>
            Taking the ratio:<br>
            <b>Area(ΔADE) / Area(ΔCDE) = AE / EC</b> ---- (2)<br><br>
            Notice that ΔBDE and ΔCDE share the same base DE and lie between the same parallel lines DE and BC.<br>
            Therefore, <b>Area(ΔBDE) = Area(ΔCDE)</b> ---- (3)<br><br>
            From (1), (2), and (3), we conclude:<br>
            <b>AD / DB = AE / EC</b><br><br>
            <b>Hence, the Basic Proportionality Theorem is proved.</b>
          </div>`,
          noVoice: true,
          checkpoints: [
            {
              q: "1. What is another common name for the Basic Proportionality Theorem (BPT)?",
              options: ["A. Pythagorean Theorem", "B. Midpoint Theorem", "C. Thales Theorem", "D. Euclid Theorem"],
              ans: 2,
              explanation: "The Basic Proportionality Theorem is famously credited to the Greek mathematician Thales, and is widely known as Thales Theorem."
            },
            {
              q: "2. In triangle ABC, if a line DE is drawn parallel to BC intersecting the other two sides at D and E, in what manner does it divide them?",
              options: ["A. Perpendicularly", "B. Into equal halves", "C. In a 2:1 ratio", "D. In the same ratio"],
              ans: 3,
              explanation: "The theorem states that a line drawn parallel to one side of a triangle divides the other two sides in the same ratio: AD/DB = AE/EC."
            },
            {
              q: "3. Which geometric concept is primarily used in the classical proof of the Basic Proportionality Theorem?",
              options: ["A. Congruent triangles", "B. Trigonometric ratios", "C. Circle theorems", "D. Ratios of areas of triangles"],
              ans: 3,
              explanation: "The standard proof compares the areas of triangles having the same height: Area = ½ × base × height."
            },
            {
              q: "4. In triangle ABC with DE || BC, which ratio is equal to AD / DB according to BPT?",
              options: ["A. EC / AE", "B. AE / EC", "C. AB / AC", "D. DE / BC"],
              ans: 1,
              explanation: "By the Basic Proportionality Theorem: AD / DB = AE / EC."
            },
            {
              q: "5. What is the converse of the Basic Proportionality Theorem used to prove?",
              options: [
                "A. That two triangles are congruent",
                "B. The area of a triangle",
                "C. That a line is parallel to a side of the triangle",
                "D. The length of the hypotenuse"
              ],
              ans: 2,
              explanation: "The converse states that if a line divides two sides in the same ratio, then the line must be parallel to the third side."
            },
            {
              q: "6. In the proof of BPT, when taking AD as the base of ΔADE, what represents the perpendicular height dropped from vertex E?",
              options: ["A. DM", "B. AB", "C. EF (or EN)", "D. AC"],
              ans: 2,
              explanation: "The perpendicular dropped from vertex E onto side AB acts as the common height for both ΔADE and ΔBDE."
            },
            {
              q: "7. Which property of areas is crucial for equating the denominators in the proof of BPT?",
              options: [
                "A. Diagonals of a parallelogram bisect each other",
                "B. Sum of angles in a triangle is 180°",
                "C. Pythagoras theorem",
                "D. Triangles on the same base and between the same parallels have equal areas"
              ],
              ans: 3,
              explanation: "ΔBDE and ΔCDE share the same base DE and lie between parallel lines DE and BC, so Area(ΔBDE) = Area(ΔCDE)."
            },
            {
              q: "8. If AD = 2 cm, DB = 3 cm, and AE = 4 cm with DE || BC, what is the length of EC?",
              options: ["A. 5 cm", "B. 8 cm", "C. 6 cm", "D. 3 cm"],
              ans: 2,
              explanation: "Using AD / DB = AE / EC: 2 / 3 = 4 / EC ⇒ 2 × EC = 12 ⇒ EC = 6 cm."
            },
            {
              q: "9. Does the Basic Proportionality Theorem apply to all types of triangles?",
              options: [
                "A. No, only to right-angled triangles",
                "B. Yes, to all types of triangles",
                "C. Only to equilateral triangles",
                "D. Only to isosceles triangles"
              ],
              ans: 1,
              explanation: "The theorem is universal and applies to acute, obtuse, scalene, isosceles, and equilateral triangles."
            },
            {
              q: "10. By corollary of BPT, which corresponding ratio equals AD / AB?",
              options: ["A. AE / EC", "B. AE / AC", "C. EC / AC", "D. AC / AE"],
              ans: 1,
              explanation: "Adding 1 to both sides of the ratio yields the corollary: AD / AB = AE / AC."
            }
          ],
          explanation: "Classical Thales Theorem proof comparing triangle areas on common parallel segments."
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 2: Pythagoras Theorem & Tangents to a Circle
    // -------------------------------------------------------------
    {
      id: "sec_math_em_4_2",
      title: "Section 2: Pythagoras Theorem & Circle Tangents",
      author: "Chapter 4: Geometry - Exercises 4.3 & 4.4",
      questions: [
        {
          id: "m_em_4_2_1",
          type: "1m",
          mark: "1 Mark",
          q: "The length of the tangent to a circle from a point 10 cm away from the centre is 8 cm. Find the radius of the circle.",
          options: ["a) 4 cm", "b) 5 cm", "c) 6 cm", "d) 7 cm"],
          ans: "Answer: <b>c) 6 cm</b><br>Explanation: The radius is perpendicular to the tangent at the point of contact. By Pythagoras Theorem: Radius r = √(OP² - PT²) = √(10² - 8²) = √(100 - 64) = √36 = <b>6 cm</b>.",
          explanation: "In right triangle OPT, r = √(10² - 8²) = 6 cm."
        },
        {
          id: "m_em_4_2_2",
          type: "2m",
          mark: "2 Marks",
          q: "A man goes 18 m due east and then 24 m due north. Find his distance from the starting point.",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            East and North directions are perpendicular (angle = 90°).<br>
            The path forms a right-angled triangle where the required distance is the hypotenuse.<br><br>
            By Pythagoras Theorem:<br>
            Distance d = √(18² + 24²)<br>
            d = √(324 + 576)<br>
            d = √900<br>
            <b>d = 30 m</b><br><br>
            Hence, he is 30 metres away from the starting point.
          </div>`,
          explanation: "Hypotenuse = √(18² + 24²) = √900 = 30 m."
        },
        {
          id: "m_em_4_2_3",
          type: "5m",
          mark: "5 Marks",
          examYear: "2023",
          examTag: "2023* (Theorem Proof)",
          isImportant: true,
          q: "State and prove Pythagoras Theorem.",
          ans: `<div style="line-height:1.8;">
            <b>Statement (Pythagoras Theorem):</b><br>
            <i>'In a right-angled triangle, the square on the hypotenuse is equal to the sum of the squares on the other two sides.'</i><br><br>
            <b>Given:</b><br>
            In right-angled triangle ΔABC, ∠B = 90°.<br><br>
            <b>To Prove:</b><br>
            <b>AC² = AB² + BC²</b><br><br>
            <b>Construction:</b><br>
            Draw BD ⊥ AC.<br><br>
            <b>Proof:</b><br>
            <b>Step 1: Compare ΔADB and ΔABC:</b><br>
            • ∠B = ∠ADB = 90°<br>
            • ∠A is common.<br>
            Therefore, by AA similarity, <b>ΔADB ~ ΔABC</b>.<br>
            Taking the ratio of corresponding sides: AD / AB = AB / AC<br>
            Cross multiplying: <b>AB² = AC × AD</b> ---- (1)<br><br>
            <b>Step 2: Compare ΔBDC and ΔABC:</b><br>
            • ∠B = ∠BDC = 90°<br>
            • ∠C is common.<br>
            Therefore, by AA similarity, <b>ΔBDC ~ ΔABC</b>.<br>
            Taking the ratio of corresponding sides: CD / BC = BC / AC<br>
            Cross multiplying: <b>BC² = AC × CD</b> ---- (2)<br><br>
            <b>Step 3: Adding equations (1) and (2):</b><br>
            AB² + BC² = (AC × AD) + (AC × CD)<br>
            AB² + BC² = AC (AD + CD)<br>
            From the figure, AD + CD = AC.<br>
            AB² + BC² = AC × AC<br>
            <b>AC² = AB² + BC²</b><br><br>
            <b>Hence, Pythagoras Theorem is successfully proved.</b>
          </div>`,
          noVoice: true,
          checkpoints: [
            {
              q: "1. What type of triangle is strictly required for Pythagoras Theorem to apply?",
              options: ["A. Equilateral triangle", "B. Scalene triangle", "C. Right-angled triangle", "D. Obtuse triangle"],
              ans: 2,
              explanation: "Pythagoras Theorem applies exclusively to right-angled triangles, which have one angle equal to 90 degrees."
            },
            {
              q: "2. In the Pythagorean equation a² + b² = c², what does 'c' represent?",
              options: ["A. The altitude", "B. The shortest side", "C. The adjacent side", "D. The hypotenuse"],
              ans: 3,
              explanation: "In a right triangle, 'c' represents the hypotenuse, which is the longest side opposite the right angle."
            },
            {
              q: "3. Which of the following is a classic fundamental Pythagorean triple?",
              options: ["A. (3, 4, 5)", "B. (2, 3, 4)", "C. (1, 2, 3)", "D. (5, 6, 7)"],
              ans: 0,
              explanation: "3² + 4² = 9 + 16 = 25 = 5². Thus (3, 4, 5) is a Pythagorean triple."
            },
            {
              q: "4. If the lengths of the two legs of a right triangle are 6 and 8, what is the length of the hypotenuse?",
              options: ["A. 12", "B. 10", "C. 14", "D. 100"],
              ans: 1,
              explanation: "c = √(6² + 8²) = √(36 + 64) = √100 = 10."
            },
            {
              q: "5. The standard textbook proof of Pythagoras Theorem in 10th standard relies on which geometric concept?",
              options: ["A. Limits and derivatives", "B. Vectors and matrices", "C. Similar triangles (AA Similarity)", "D. Complex numbers"],
              ans: 2,
              explanation: "The proof compares the two smaller right triangles (ΔADB and ΔBDC) to the main triangle (ΔABC) using AA similarity."
            },
            {
              q: "6. If the hypotenuse of a right triangle is 13 and one leg is 5, what is the length of the other leg?",
              options: ["A. 8", "B. 10", "C. 12", "D. 11"],
              ans: 2,
              explanation: "b = √(13² - 5²) = √(169 - 25) = √144 = 12."
            },
            {
              q: "7. Who is historically credited with the first general proof of the theorem in ancient Greece?",
              options: ["A. Pythagoras", "B. Euclid", "C. Archimedes", "D. Newton"],
              ans: 0,
              explanation: "Although Babylonians and Indians knew the relationship earlier, Greek philosopher Pythagoras is traditionally credited with its first formal geometric proof."
            },
            {
              q: "8. What does the converse of Pythagoras Theorem state?",
              options: [
                "A. If a² + b² = c² in a triangle, then the triangle is right-angled",
                "B. If a triangle has equal sides, it has equal angles",
                "C. All right triangles are similar",
                "D. The hypotenuse is always the longest side"
              ],
              ans: 0,
              explanation: "The converse states that if the square of the longest side equals the sum of squares of the other two sides, the angle opposite the longest side is 90°."
            },
            {
              q: "9. In the textbook similarity proof, which relation gives AB² = AC × AD?",
              options: [
                "A. Similarity of ΔBDC ~ ΔABC",
                "B. Similarity of ΔADB ~ ΔABC (AD/AB = AB/AC)",
                "C. Area of triangle formula",
                "D. Angle bisector theorem"
              ],
              ans: 1,
              explanation: "Comparing corresponding sides of similar triangles ΔADB ~ ΔABC: AD / AB = AB / AC ⇒ AB² = AC × AD."
            },
            {
              q: "10. Which algebraic equation expresses the visual dissection proof of Pythagoras Theorem with 4 right triangles in an (a+b) square?",
              options: [
                "A. a³ + b³ = c³",
                "B. a + b = c",
                "C. (a + b)² = 4(½ ab) + c²",
                "D. ab = c²"
              ],
              ans: 2,
              explanation: "Area of outer square (a + b)² equals the area of 4 triangles [4 × ½ab = 2ab] plus the inner square c², which simplifies to a² + b² = c²."
            }
          ],
          explanation: "Similarity of right sub-triangles ΔADB and ΔBDC with whole ΔABC proves AC² = AB² + BC²."
        }
      ]
    }
  ]
};
