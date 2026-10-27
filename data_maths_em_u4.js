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
          explanation: "Similarity of right sub-triangles ΔADB and ΔBDC with whole ΔABC proves AC² = AB² + BC²."
        }
      ]
    }
  ]
};
