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
    { title: "Alternate Segment Theorem", rule: "Angle between tangent and chord through point of contact = angle in alternate segment (∠PAB = ∠ACB)" },
    { title: "Radius-Tangent Perpendicularity", rule: "The tangent at any point of a circle is perpendicular to the radius through the point of contact (OA ⊥ PQ)" },
    { title: "Concurrency of Medians (Centroid)", rule: "Medians AD, BE, CF meet at centroid G, dividing each median in the ratio 2 : 1" }
  ],

  subSections: [
    // -------------------------------------------------------------
    // Section 1: Thales Theorem, Angle Bisector Theorem & Similar Triangles
    // -------------------------------------------------------------
    {
      id: "sec_math_em_4_1",
      title: "Section 1: Thales Theorem, Angle Bisector Theorem & Similar Triangles",
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
          diagramImg: "math_ch4_5m_q1_bpt_bb.jpg",
          diagramCaption: "Basic Proportionality Theorem (Thales Theorem) Proof & Construction (DE || BC) (Tap to Zoom)",
          ans: `<div style="line-height:1.8;">
            <div style="padding:10px 14px; background:#eff6ff; border-left:4px solid #2563eb; border-radius:6px; margin-bottom:12px;">
              <b>Basic Proportionality Theorem (Thales Theorem):</b><br>
              <i>If a line is drawn parallel to one side of a triangle and intersects the other two sides in distinct points, then it divides the two sides in the same ratio.</i>
            </div>

            <b>Given:</b><br>
            In ΔABC, a line DE is drawn parallel to BC, which intersects AB at D and AC at E.<br><br>

            <b>To Prove:</b><br>
            <div style="margin:6px 0 6px 18px; font-weight:700; font-size:16px; color:#1d4ed8;">
              AD / DB = AE / EC
            </div><br>

            <b>Construction:</b><br>
            Through A, draw a line parallel to DE (which is already given parallel to BC), or draw DE || BC intersecting AB at D and AC at E.<br><br>

            <b>Proof:</b><br>
            <table style="width:100%; border-collapse:collapse; margin:10px 0;">
              <thead>
                <tr style="background:#f1f5f9; border-bottom:2px solid #cbd5e1; text-align:left;">
                  <th style="padding:8px 10px; width:8%;">No.</th>
                  <th style="padding:8px 10px; width:52%;">Mathematical Statement</th>
                  <th style="padding:8px 10px; width:40%;">Reason / Justification</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">1.</td>
                  <td style="padding:8px 10px;">Since DE || BC,<br>∠ADE = ∠ABC and ∠AED = ∠ACB</td>
                  <td style="padding:8px 10px; color:#475569;">Corresponding angles</td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">2.</td>
                  <td style="padding:8px 10px;">∠DAE = ∠BAC</td>
                  <td style="padding:8px 10px; color:#475569;">Common angle</td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">3.</td>
                  <td style="padding:8px 10px;"><b>ΔADE ~ ΔABC</b></td>
                  <td style="padding:8px 10px; color:#475569;">AAA similarity criterion</td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">4.</td>
                  <td style="padding:8px 10px;">AD / AB = AE / AC = DE / BC</td>
                  <td style="padding:8px 10px; color:#475569;">Corresponding sides of similar triangles</td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">5.</td>
                  <td style="padding:8px 10px;">From AD / AB = AE / AC<br>⇒ AD / (AD + DB) = AE / (AE + EC)</td>
                  <td style="padding:8px 10px; color:#475569;">Since AB = AD + DB and AC = AE + EC</td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">6.</td>
                  <td style="padding:8px 10px;">Cross-multiplying:<br>AD(AE + EC) = AE(AD + DB)<br>AD · AE + AD · EC = AE · AD + AE · DB<br>⇒ <b>AD · EC = AE · DB</b></td>
                  <td style="padding:8px 10px; color:#475569;">Cancelling AD · AE from both sides</td>
                </tr>
                <tr>
                  <td style="padding:8px 10px; font-weight:700;">7.</td>
                  <td style="padding:8px 10px;">Dividing both sides by DB · EC:<br><b style="color:#15803d; font-size:15px;">AD / DB = AE / EC</b></td>
                  <td style="padding:8px 10px; font-weight:700; color:#15803d;">Hence proved!</td>
                </tr>
              </tbody>
            </table>

            <div style="margin-top:12px; padding:10px 14px; background:#f0fdf4; border:1.5px solid #22c55e; border-radius:8px; font-weight:700; text-align:center; color:#166534; font-size:16px;">
              ∴ AD / DB = AE / EC (Basic Proportionality Theorem is successfully proved)
            </div>
          </div>`,
          noVoice: true,
          checkpoints: [
            {
              q: "1. What is another common name for the Basic Proportionality Theorem (BPT)?",
              options: ["A. Pythagorean Theorem", "B. Midpoint Theorem", "C. Thales Theorem", "D. Euclid Theorem"],
              ans: 2,
              explanation: "The Basic Proportionality Theorem is famously credited to the Greek philosopher and mathematician Thales of Miletus, and is widely known as Thales Theorem."
            },
            {
              q: "2. In triangle ABC, if a line DE is drawn parallel to BC intersecting the other two sides at D and E, in what manner does it divide them?",
              options: ["A. Perpendicularly", "B. Into equal halves", "C. In a 2:1 ratio", "D. In the same ratio"],
              ans: 3,
              explanation: "The theorem states that a line drawn parallel to one side of a triangle divides the other two sides in the same ratio: AD/DB = AE/EC."
            },
            {
              q: "3. In the similarity proof of BPT, why is ∠ADE equal to ∠ABC?",
              options: ["A. Vertically opposite angles", "B. Alternate interior angles", "C. Corresponding angles formed by parallel lines DE || BC", "D. Complementary angles"],
              ans: 2,
              explanation: "Since DE is parallel to BC and AB is a transversal line, ∠ADE and ∠ABC are corresponding angles and therefore equal."
            },
            {
              q: "4. Which criterion establishes that ΔADE is similar to ΔABC in the standard Tamil Nadu textbook proof?",
              options: ["A. SSS similarity", "B. AAA (or AA) similarity criterion", "C. RHS congruence", "D. SAS similarity"],
              ans: 1,
              explanation: "Because both corresponding pairs of angles are equal (∠ADE = ∠ABC, ∠AED = ∠ACB) and ∠A is common, ΔADE ~ ΔABC by AAA similarity."
            },
            {
              q: "5. From ΔADE ~ ΔABC, which proportional relation is directly obtained from the ratio of sides?",
              options: ["A. AD / DB = EC / AE", "B. AD / AB = AE / AC = DE / BC", "C. AB / AD = EC / AE", "D. AD × AB = AE × AC"],
              ans: 1,
              explanation: "Corresponding sides of similar triangles are in proportion: AD / AB = AE / AC = DE / BC."
            },
            {
              q: "6. How is the total side AB expressed in terms of segments AD and DB?",
              options: ["A. AB = AD - DB", "B. AB = AD × DB", "C. AB = AD + DB", "D. AB = 2 AD"],
              ans: 2,
              explanation: "Since point D lies strictly between A and B on line segment AB, the total length AB = AD + DB."
            },
            {
              q: "7. When expanding AD(AE + EC) = AE(AD + DB), which common term cancels from both sides?",
              options: ["A. AD · EC", "B. AE · DB", "C. AD · AE", "D. DB · EC"],
              ans: 2,
              explanation: "AD · AE + AD · EC = AE · AD + AE · DB. Since AD · AE is on both sides, subtracting it leaves AD · EC = AE · DB."
            },
            {
              q: "8. What do we divide both sides by to arrive at AD/DB = AE/EC from AD · EC = AE · DB?",
              options: ["A. AD · AE", "B. DB · EC", "C. AB · AC", "D. BC · DE"],
              ans: 1,
              explanation: "Dividing AD · EC = AE · DB by (DB · EC) gives (AD / DB) = (AE / EC)."
            },
            {
              q: "9. If AD = 4 cm, DB = 6 cm, and AE = 5 cm with DE || BC, what is the length of EC?",
              options: ["A. 6.5 cm", "B. 8 cm", "C. 7.5 cm", "D. 9 cm"],
              ans: 2,
              explanation: "AD/DB = AE/EC ⇒ 4/6 = 5/EC ⇒ EC = (5 × 6)/4 = 30/4 = 7.5 cm."
            },
            {
              q: "10. What does the converse of Thales Theorem state?",
              options: [
                "A. If a line divides two sides in the same ratio, it is parallel to the third side",
                "B. If two angles are equal, the triangle is equilateral",
                "C. The medians meet at the centroid",
                "D. Tangents from an external point are equal"
              ],
              ans: 0,
              explanation: "The converse of BPT states that if a straight line divides two sides of a triangle in the same ratio, then the line must be parallel to the third side."
            }
          ],
          explanation: "Step-by-step similarity proof of Thales Theorem establishing AD/DB = AE/EC via ΔADE ~ ΔABC."
        },
        {
          id: "m_em_4_1_4",
          type: "5m",
          mark: "5 Marks",
          examYear: "2023",
          examTag: "Important 5M (Theorem)",
          isImportant: true,
          q: "State and prove the Angle Bisector Theorem (ABT).",
          diagramImg: "math_ch4_5m_q3_abt.jpg",
          diagramCaption: "Blackboard Solution: Angle Bisector Theorem (ABT) Proof & Ratio (Tap to Zoom)",
          ans: `<div style="line-height:1.8;">
            <div style="padding:10px 14px; background:#eff6ff; border-left:4px solid #2563eb; border-radius:6px; margin-bottom:12px;">
              <b>Angle Bisector Theorem (ABT):</b><br>
              <i>The internal bisector of an angle of a triangle divides the opposite side internally in the ratio of the corresponding sides containing the angle.</i>
            </div>

            <b>Given:</b><br>
            In ΔABC, AD is the internal bisector of ∠A meeting the opposite side BC at D.<br><br>

            <b>To Prove:</b><br>
            <div style="margin:6px 0 6px 18px; font-weight:700; font-size:16px; color:#1d4ed8;">
              BD / DC = AB / AC
            </div><br>

            <b>Construction:</b><br>
            Draw a line through C parallel to AB. Extend the bisector line AD to intersect this parallel line at point E.<br><br>

            <b>Proof:</b><br>
            <table style="width:100%; border-collapse:collapse; margin:10px 0;">
              <thead>
                <tr style="background:#f1f5f9; border-bottom:2px solid #cbd5e1; text-align:left;">
                  <th style="padding:8px 10px; width:8%;">No.</th>
                  <th style="padding:8px 10px; width:52%;">Mathematical Statement</th>
                  <th style="padding:8px 10px; width:40%;">Reason / Justification</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">1.</td>
                  <td style="padding:8px 10px;">Since AB || CE and AE is transversal line:<br><b>∠AEC = ∠BAE</b></td>
                  <td style="padding:8px 10px; color:#475569;">Alternate interior angles ---- (1)</td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">2.</td>
                  <td style="padding:8px 10px;">Since AD bisects ∠BAC:<br><b>∠BAE = ∠CAE</b></td>
                  <td style="padding:8px 10px; color:#475569;">Given (AD is angle bisector) ---- (2)</td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">3.</td>
                  <td style="padding:8px 10px;">From (1) and (2):<br>∠AEC = ∠CAE<br>⇒ <b>AC = CE</b></td>
                  <td style="padding:8px 10px; color:#475569;">In ΔACE, sides opposite to equal angles are equal ---- (3)</td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">4.</td>
                  <td style="padding:8px 10px;">Compare ΔABD and ΔECD:<br>• ∠BAD = ∠CED (alternate angles)<br>• ∠ADB = ∠EDC (vertically opposite)<br>⇒ <b>ΔABD ~ ΔECD</b></td>
                  <td style="padding:8px 10px; color:#475569;">AA similarity criterion</td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">5.</td>
                  <td style="padding:8px 10px;">BD / DC = AB / CE</td>
                  <td style="padding:8px 10px; color:#475569;">Corresponding sides of similar triangles are in proportion</td>
                </tr>
                <tr>
                  <td style="padding:8px 10px; font-weight:700;">6.</td>
                  <td style="padding:8px 10px;">Substituting CE = AC from (3):<br><b style="color:#15803d; font-size:15px;">BD / DC = AB / AC</b></td>
                  <td style="padding:8px 10px; font-weight:700; color:#15803d;">Hence proved!</td>
                </tr>
              </tbody>
            </table>

            <div style="margin-top:10px; padding:8px 12px; background:#f8fafc; border-left:3px solid #64748b; font-size:13px; color:#334155;">
              <b>Alternative Area Method (as shown on Chalkboard):</b><br>
              Area(ΔABD) / Area(ΔACD) = Base ratio = BD / DC ... (1)<br>
              Using angle formula: Area(ΔABD) / Area(ΔACD) = (½ AB · AD sin(∠A/2)) / (½ AC · AD sin(∠A/2)) = AB / AC ... (2)<br>
              Equating (1) and (2) gives <b>BD / DC = AB / AC</b>.
            </div>

            <div style="margin-top:12px; padding:10px 14px; background:#f0fdf4; border:1.5px solid #22c55e; border-radius:8px; font-weight:700; text-align:center; color:#166534; font-size:16px;">
              ∴ BD / DC = AB / AC (Angle Bisector Theorem is successfully proved)
            </div>
          </div>`,
          noVoice: true,
          checkpoints: [
            {
              q: "1. What does the Angle Bisector Theorem (ABT) relate?",
              options: [
                "A. Area of triangle to perimeter",
                "B. Segments of opposite side to the other two sides containing the angle",
                "C. Radius of circumcircle to incircle",
                "D. Altitude to base"
              ],
              ans: 1,
              explanation: "ABT states that the internal bisector of an angle divides the opposite side in the ratio of the other two sides: BD/DC = AB/AC."
            },
            {
              q: "2. In the standard geometric proof, which construction line is drawn?",
              options: ["A. Altitude from A to BC", "B. Line through C parallel to AB meeting extended AD at E", "C. Perpendicular bisector of BC", "D. Circle through A, B, and C"],
              ans: 1,
              explanation: "Drawing CE parallel to AB and extending AD to meet it at E creates similar triangles and an isosceles triangle ΔACE."
            },
            {
              q: "3. Why does ΔACE become an isosceles triangle with AC = CE?",
              options: ["A. Because ∠AEC = ∠CAE", "B. Because CE is equal to BC", "C. By Pythagoras theorem", "D. Because ∠C = 90°"],
              ans: 0,
              explanation: "Since ∠AEC = ∠BAE (alternate interior angles) and ∠BAE = ∠CAE (angle bisector), we get ∠AEC = ∠CAE, so AC = CE."
            },
            {
              q: "4. Which pair of triangles are proved similar in the proof of ABT?",
              options: ["A. ΔABC ~ ΔADE", "B. ΔABD ~ ΔECD", "C. ΔADC ~ ΔABC", "D. ΔACE ~ ΔABD"],
              ans: 1,
              explanation: "By AA similarity (alternate interior angles and vertically opposite angles at D), ΔABD ~ ΔECD."
            },
            {
              q: "5. From ΔABD ~ ΔECD, what is the ratio of corresponding sides?",
              options: ["A. BD / DC = AB / CE", "B. AB / BD = DC / CE", "C. AD / DC = BD / CE", "D. BD × DC = AB × CE"],
              ans: 0,
              explanation: "Comparing corresponding sides gives BD / DC = AB / CE."
            },
            {
              q: "6. Replacing CE with which equal side completes the proof?",
              options: ["A. BC", "B. BD", "C. AC", "D. AD"],
              ans: 2,
              explanation: "Since AC = CE from the isosceles triangle ΔACE, substituting gives BD / DC = AB / AC."
            },
            {
              q: "7. If in ΔABC, AB = 10 cm, AC = 6 cm, and BD = 5 cm with AD as bisector of ∠A, what is DC?",
              options: ["A. 2.5 cm", "B. 3 cm", "C. 4 cm", "D. 3.5 cm"],
              ans: 1,
              explanation: "BD/DC = AB/AC ⇒ 5/DC = 10/6 ⇒ 5/DC = 5/3 ⇒ DC = 3 cm."
            },
            {
              q: "8. Does the external angle bisector theorem also hold a similar ratio?",
              options: ["A. No, only internal bisector", "B. Yes, BD/DC = AB/AC externally", "C. Only in right triangles", "D. Only when AB = AC"],
              ans: 1,
              explanation: "The external angle bisector divides the opposite side externally in the ratio of the sides: BD/DC = AB/AC."
            },
            {
              q: "9. When does the angle bisector AD also bisect the side BC (i.e. BD = DC)?",
              options: ["A. Only when triangle is isosceles with AB = AC", "B. In all triangles", "C. Only in scalene triangles", "D. Never"],
              ans: 0,
              explanation: "If AB = AC, then BD/DC = AB/AC = 1, meaning BD = DC, so the bisector is also a median (in isosceles/equilateral triangles)."
            },
            {
              q: "10. What is the converse of Angle Bisector Theorem?",
              options: [
                "A. If a line through a vertex divides the opposite side in ratio of containing sides, it bisects the vertex angle",
                "B. If two angles are equal, sides are equal",
                "C. Altitudes of a triangle are equal",
                "D. Tangents to a circle are equal"
              ],
              ans: 0,
              explanation: "The converse states that if a ray from vertex A divides BC in the ratio AB/AC, then the ray is the internal bisector of ∠A."
            }
          ],
          explanation: "Angle Bisector Theorem proof establishing BD/DC = AB/AC using construction CE || AB and AA similarity."
        },
        {
          id: "m_em_4_1_5",
          type: "5m",
          mark: "5 Marks",
          examYear: "2024",
          examTag: "Board Favorite 5M",
          isImportant: true,
          q: "Prove that the medians of a triangle are concurrent.",
          diagramImg: "math_ch4_5m_q4_medians.jpg",
          diagramCaption: "Blackboard Solution: Concurrency of Medians & Centroid G (Tap to Zoom)",
          ans: `<div style="line-height:1.8;">
            <div style="padding:10px 14px; background:#eff6ff; border-left:4px solid #2563eb; border-radius:6px; margin-bottom:12px;">
              <b>Statement:</b><br>
              <i>The three medians of a triangle meet at a single point called the centroid (i.e., medians are concurrent).</i>
            </div>

            <b>Given:</b><br>
            In ΔABC, D, E, and F are the midpoints of the sides BC, CA, and AB respectively.<br>
            AD, BE, and CF are the medians drawn from vertices A, B, and C.<br><br>

            <b>To Prove:</b><br>
            The medians AD, BE, and CF are concurrent.<br><br>

            <b>Proof Method 1: By Ceva's Theorem (Textbook Theorem Method):</b><br>
            <div style="margin:6px 0 6px 12px; line-height:1.9;">
              • D is the midpoint of BC ⇒ <b>BD = DC</b> ⇒ <b>BD / DC = 1</b> ---- (1)<br>
              • E is the midpoint of CA ⇒ <b>CE = EA</b> ⇒ <b>CE / EA = 1</b> ---- (2)<br>
              • F is the midpoint of AB ⇒ <b>AF = FB</b> ⇒ <b>AF / FB = 1</b> ---- (3)<br><br>
              Multiplying equations (1), (2), and (3):<br>
              <div style="margin:6px 0 6px 18px; font-weight:700; color:#1d4ed8; font-size:15px;">
                (BD / DC) × (CE / EA) × (AF / FB) = 1 × 1 × 1 = 1
              </div><br>
              By the converse of Ceva's Theorem, the lines AD, BE, and CF are <b>concurrent</b>!
            </div><br>

            <b>Proof Method 2: By Coordinate Geometry (as shown on Chalkboard):</b><br>
            <div style="margin:6px 0 6px 12px; line-height:1.9;">
              Let the vertices of ΔABC be A(x₁, y₁), B(x₂, y₂), and C(x₃, y₃).<br>
              The midpoints of the sides are:<br>
              • D = ((x₂ + x₃)/2, (y₂ + y₃)/2)<br>
              • E = ((x₁ + x₃)/2, (y₁ + y₃)/2)<br>
              • F = ((x₁ + x₂)/2, (y₁ + y₂)/2)<br><br>
              The point dividing median AD in the internal ratio 2 : 1 has coordinates:<br>
              x = [2((x₂ + x₃)/2) + 1(x₁)] / (2 + 1) = (x₁ + x₂ + x₃) / 3<br>
              y = [2((y₂ + y₃)/2) + 1(y₁)] / (2 + 1) = (y₁ + y₂ + y₃) / 3<br><br>
              Similarly, the point dividing medians BE and CF in the ratio 2 : 1 yields the exact same coordinates:<br>
              <div style="margin:6px 0 6px 18px; font-weight:700; color:#15803d; font-size:15px;">
                G = ((x₁ + x₂ + x₃) / 3, (y₁ + y₂ + y₃) / 3)
              </div><br>
              Since all three medians pass through the common point G, they are concurrent.
            </div>

            <div style="margin-top:12px; padding:10px 14px; background:#f0fdf4; border:1.5px solid #22c55e; border-radius:8px; font-weight:700; text-align:center; color:#166534; font-size:16px;">
              ∴ The three medians AD, BE, and CF are concurrent at centroid G. (Hence proved!)
            </div>
          </div>`,
          noVoice: true,
          checkpoints: [
            {
              q: "1. What is a median of a triangle?",
              options: [
                "A. A line segment from a vertex to the midpoint of the opposite side",
                "B. A perpendicular dropped from a vertex to the opposite side",
                "C. A ray bisecting a vertex angle",
                "D. The perpendicular bisector of a side"
              ],
              ans: 0,
              explanation: "A median connects any vertex of a triangle to the midpoint of its opposite side."
            },
            {
              q: "2. What is the special name given to the point of concurrency of the three medians?",
              options: ["A. Orthocentre", "B. Incentre", "C. Centroid", "D. Circumcentre"],
              ans: 2,
              explanation: "The point where the three medians of a triangle intersect is known as the centroid (denoted as G)."
            },
            {
              q: "3. In what ratio does the centroid divide each median from the vertex to the base?",
              options: ["A. 1 : 1", "B. 2 : 1", "C. 3 : 1", "D. 1 : 2"],
              ans: 1,
              explanation: "The centroid divides each median in the ratio 2 : 1, with the larger part extending towards the vertex."
            },
            {
              q: "4. According to Ceva's Theorem, what is the product of ratios (BD/DC) × (CE/EA) × (AF/FB) for medians?",
              options: ["A. 0", "B. 2", "C. 1", "D. -1"],
              ans: 2,
              explanation: "Since D, E, F are midpoints, BD/DC = 1, CE/EA = 1, and AF/FB = 1. Their product is 1 × 1 × 1 = 1."
            },
            {
              q: "5. What are the Cartesian coordinates of the centroid of ΔABC with vertices (x₁, y₁), (x₂, y₂), (x₃, y₃)?",
              options: [
                "A. ((x₁ + x₂ + x₃)/2, (y₁ + y₂ + y₃)/2)",
                "B. ((x₁ + x₂ + x₃)/3, (y₁ + y₂ + y₃)/3)",
                "C. (x₁x₂x₃, y₁y₂y₃)",
                "D. ((x₁ + x₂)/2, (y₁ + y₂)/2)"
              ],
              ans: 1,
              explanation: "Centroid G = ((x₁ + x₂ + x₃)/3, (y₁ + y₂ + y₃)/3)."
            },
            {
              q: "6. Does the centroid of a triangle always lie inside the triangle?",
              options: ["A. Yes, always inside for all triangles", "B. No, outside for obtuse triangles", "C. On the hypotenuse for right triangles", "D. Only inside equilateral triangles"],
              ans: 0,
              explanation: "Unlike the orthocentre or circumcentre, the centroid always lies strictly inside the triangle for every type of triangle."
            },
            {
              q: "7. How many triangles of equal area are formed when the three medians divide the triangle?",
              options: ["A. 3", "B. 4", "C. 6", "D. 8"],
              ans: 2,
              explanation: "The three medians divide the original triangle into six smaller triangles of equal area."
            },
            {
              q: "8. If the vertices are (0, 0), (6, 0), and (0, 6), what is the centroid?",
              options: ["A. (3, 3)", "B. (2, 2)", "C. (1, 1)", "D. (2, 3)"],
              ans: 1,
              explanation: "G = ((0 + 6 + 0)/3, (0 + 0 + 6)/3) = (6/3, 6/3) = (2, 2)."
            },
            {
              q: "9. Which theorem is specifically used in 10th geometry to prove concurrency of cevians?",
              options: ["A. Ceva's Theorem", "B. Menelaus Theorem", "C. Thales Theorem", "D. Pythagoras Theorem"],
              ans: 0,
              explanation: "Ceva's Theorem provides the necessary and sufficient condition for the concurrency of three cevians in a triangle."
            },
            {
              q: "10. What physical property does the centroid represent for a uniform triangular lamina?",
              options: ["A. Center of buoyancy", "B. Center of gravity (balance point)", "C. Center of curvature", "D. Magnetic center"],
              ans: 1,
              explanation: "In physics and mechanics, the centroid is the center of gravity where a uniform triangular lamina can be perfectly balanced on a point."
            }
          ],
          explanation: "Proof that medians meet at centroid G using Ceva's Theorem and coordinate section formula."
        },
        {
          id: "m_em_4_1_6",
          type: "5m",
          mark: "5 Marks",
          examYear: "2024",
          examTag: "Practical Geometry 5M",
          isImportant: true,
          q: "A girl of height 1.25 m stands 2.5 m from a mirror on the ground. The mirror is 6.6 m from a lamp post. Find the height of the lamp post.",
          diagramImg: "math_ch4_5m_q10_lamp_post.jpg",
          diagramCaption: "Blackboard Solution: Similar Triangles - Mirror Reflection & Lamp Post Height (Tap to Zoom)",
          ans: `<div style="line-height:1.8;">
            <b>Problem Statement:</b><br>
            A girl of height 1.25 m stands 2.5 m away from a mirror placed horizontally on the ground. The mirror is 6.6 m away from the foot of a lamp post. If the girl can see the top of the lamp post reflected in the mirror, find the height of the lamp post.<br><br>

            <b>Given Data:</b><br>
            • Height of the girl (CD) = 1.25 m<br>
            • Distance from girl to the mirror (DM) = 2.5 m<br>
            • Distance from lamp post to the mirror (BM) = 6.6 m<br>
            • Let the height of the lamp post (AB) = <b>h metres</b><br><br>

            <b>Geometric Analysis using Similar Triangles:</b><br>
            1. The lamp post and the girl both stand vertically upright on the horizontal ground:<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              ∠ABM = ∠CDM = 90°
            </div><br>
            2. By the physical <b>Law of Reflection of Light</b>, the angle of incidence equals the angle of reflection:<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              ∠AMB = ∠CMD
            </div><br>
            3. Therefore, by <b>AA similarity criterion</b>:<br>
            <div style="margin:4px 0 4px 18px; font-weight:700; color:#1d4ed8; font-size:15px;">
              ΔABM ~ ΔCDM
            </div><br>

            <b>Proportion of Corresponding Sides:</b><br>
            Since corresponding sides of similar triangles are proportional:<br>
            <div style="margin:6px 0 6px 18px; font-weight:700; font-size:16px;">
              AB / CD = BM / DM
            </div><br>
            Substitute the given numerical values:<br>
            h / 1.25 = 6.6 / 2.5<br><br>

            <b>Step-by-Step Calculation:</b><br>
            Cross-multiplying:<br>
            2.5 × h = 1.25 × 6.6<br><br>
            h = (1.25 × 6.6) / 2.5<br><br>
            Notice that 1.25 / 2.5 = 1 / 2 = 0.5:<br>
            h = 6.6 / 2<br>
            <b style="color:#15803d; font-size:16px;">h = 3.3 m</b><br><br>

            <div style="margin-top:12px; padding:10px 14px; background:#f0fdf4; border:1.5px solid #22c55e; border-radius:8px; font-weight:700; text-align:center; color:#166534; font-size:16px;">
              Answer: The height of the lamp post is 3.3 metres (or 330 cm).
            </div>
          </div>`,
          noVoice: true,
          checkpoints: [
            {
              q: "1. Which geometric principle is used to find the lamp post's height?",
              options: ["A. Congruence of triangles", "B. Similarity of triangles (AA criterion)", "C. Coordinate distance formula", "D. Volume ratio"],
              ans: 1,
              explanation: "Both right triangles share identical angles due to vertical standing (90°) and reflection angles, making them similar by AA."
            },
            {
              q: "2. Why is ∠AMB equal to ∠CMD?",
              options: ["A. Vertically opposite angles", "B. Law of reflection: angle of incidence equals angle of reflection", "C. Alternate angles", "D. Right angles"],
              ans: 1,
              explanation: "The reflection of light in the plane mirror ensures that the angle of incidence equals the angle of reflection."
            },
            {
              q: "3. What is the ratio of heights (AB / CD) equal to?",
              options: ["A. BM / DM", "B. DM / BM", "C. AM / CM", "D. CD / AB"],
              ans: 0,
              explanation: "In similar triangles ΔABM ~ ΔCDM, the ratio of vertical heights AB/CD equals the ratio of ground distances BM/DM."
            },
            {
              q: "4. What is the value of 1.25 / 2.5?",
              options: ["A. 2", "B. 0.5 (or ½)", "C. 0.25", "D. 0.75"],
              ans: 1,
              explanation: "1.25 × 2 = 2.50, so 1.25 / 2.5 = 0.5 = 1/2."
            },
            {
              q: "5. What is the calculated height of the lamp post?",
              options: ["A. 4.2 m", "B. 3.3 m", "C. 2.8 m", "D. 3.6 m"],
              ans: 1,
              explanation: "h = (1.25 × 6.6) / 2.5 = 6.6 / 2 = 3.3 m."
            },
            {
              q: "6. If the mirror distance to the lamp post was doubled to 13.2 m while others remained constant, what would the height be?",
              options: ["A. 6.6 m", "B. 3.3 m", "C. 9.9 m", "D. 5.5 m"],
              ans: 0,
              explanation: "Height is directly proportional to distance: h = (1.25 × 13.2) / 2.5 = 13.2 / 2 = 6.6 m."
            },
            {
              q: "7. Which exercise in Tamil Nadu Class 10 Chapter 4 contains this real-world application problem?",
              options: ["A. Exercise 4.1", "B. Exercise 4.2", "C. Exercise 4.3", "D. Exercise 4.4"],
              ans: 0,
              explanation: "This classic problem is in Exercise 4.1 (Similar Triangles Applications)."
            },
            {
              q: "8. Both the girl and the lamp post form what angle with the horizontal ground?",
              options: ["A. 45°", "B. 60°", "C. 90° (perpendicular)", "D. 180°"],
              ans: 2,
              explanation: "Structures and people standing upright on flat ground make a 90° right angle."
            },
            {
              q: "9. Can similar triangles be used to measure celestial or unreachable heights?",
              options: ["A. Yes, Thales famously used shadow similarity to calculate the height of the Great Pyramids", "B. No, only right triangles under 10 m", "C. Only in outer space", "D. No"],
              ans: 0,
              explanation: "Historically, Greek mathematician Thales measured the height of Egyptian pyramids using similar triangles and shadows."
            },
            {
              q: "10. What is 3.3 metres expressed in centimetres?",
              options: ["A. 33 cm", "B. 330 cm", "C. 3300 cm", "D. 0.33 cm"],
              ans: 1,
              explanation: "1 metre = 100 cm, so 3.3 m = 3.3 × 100 = 330 cm."
            }
          ],
          explanation: "Similar triangle application problem: h / 1.25 = 6.6 / 2.5 gives lamp post height h = 3.3 m."
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 2: Pythagoras Theorem & Circle Tangents
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
          diagramImg: "math_ch4_5m_q2_pythagoras.jpg",
          diagramCaption: "Blackboard Solution: Pythagoras Theorem Proof by Similarity (Tap to Zoom)",
          ans: `<div style="line-height:1.8;">
            <div style="padding:10px 14px; background:#eff6ff; border-left:4px solid #2563eb; border-radius:6px; margin-bottom:12px;">
              <b>Statement (Pythagoras Theorem):</b><br>
              <i>In a right-angled triangle, the square on the hypotenuse is equal to the sum of the squares on the other two sides.</i>
            </div>

            <b>Given:</b><br>
            In right-angled triangle ΔABC, ∠B = 90°.<br><br>

            <b>To Prove:</b><br>
            <div style="margin:6px 0 6px 18px; font-weight:700; font-size:16px; color:#1d4ed8;">
              AC² = AB² + BC²
            </div><br>

            <b>Construction:</b><br>
            Draw BD ⊥ AC (altitude from right angle vertex B to hypotenuse AC).<br><br>

            <b>Proof:</b><br>
            <table style="width:100%; border-collapse:collapse; margin:10px 0;">
              <thead>
                <tr style="background:#f1f5f9; border-bottom:2px solid #cbd5e1; text-align:left;">
                  <th style="padding:8px 10px; width:8%;">No.</th>
                  <th style="padding:8px 10px; width:52%;">Mathematical Statement</th>
                  <th style="padding:8px 10px; width:40%;">Reason / Justification</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">1.</td>
                  <td style="padding:8px 10px;">Compare ΔADB and ΔABC:<br>• ∠ADB = ∠ABC = 90°<br>• ∠BAD = ∠BAC (common angle)<br>⇒ <b>ΔADB ~ ΔABC</b></td>
                  <td style="padding:8px 10px; color:#475569;">AA similarity criterion</td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">2.</td>
                  <td style="padding:8px 10px;">AD / AB = AB / AC<br>Cross multiplying:<br><b>AB² = AC × AD</b></td>
                  <td style="padding:8px 10px; color:#475569;">Corresponding sides of similar triangles ---- (1)</td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">3.</td>
                  <td style="padding:8px 10px;">Compare ΔBDC and ΔABC:<br>• ∠BDC = ∠ABC = 90°<br>• ∠BCD = ∠BCA (common angle)<br>⇒ <b>ΔBDC ~ ΔABC</b></td>
                  <td style="padding:8px 10px; color:#475569;">AA similarity criterion</td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">4.</td>
                  <td style="padding:8px 10px;">CD / BC = BC / AC<br>Cross multiplying:<br><b>BC² = AC × CD</b></td>
                  <td style="padding:8px 10px; color:#475569;">Corresponding sides of similar triangles ---- (2)</td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">5.</td>
                  <td style="padding:8px 10px;">Adding equations (1) and (2):<br>AB² + BC² = (AC × AD) + (AC × CD)<br>AB² + BC² = AC (AD + CD)</td>
                  <td style="padding:8px 10px; color:#475569;">Taking common factor AC</td>
                </tr>
                <tr>
                  <td style="padding:8px 10px; font-weight:700;">6.</td>
                  <td style="padding:8px 10px;">From the diagram, AD + CD = AC:<br>AB² + BC² = AC × AC<br><b style="color:#15803d; font-size:15px;">AC² = AB² + BC²</b></td>
                  <td style="padding:8px 10px; font-weight:700; color:#15803d;">Hence proved!</td>
                </tr>
              </tbody>
            </table>

            <div style="margin-top:12px; padding:10px 14px; background:#f0fdf4; border:1.5px solid #22c55e; border-radius:8px; font-weight:700; text-align:center; color:#166534; font-size:16px;">
              ∴ AC² = AB² + BC² (Pythagoras Theorem is successfully proved)
            </div>
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
              q: "3. Which construction line is crucial in the textbook similarity proof?",
              options: ["A. Median from B", "B. Altitude BD ⊥ AC dropped onto the hypotenuse", "C. Angle bisector of C", "D. Line parallel to AB"],
              ans: 1,
              explanation: "Drawing altitude BD perpendicular to hypotenuse AC splits ΔABC into two right triangles that are both similar to the original triangle."
            },
            {
              q: "4. Which relation is derived from ΔADB ~ ΔABC?",
              options: ["A. AB² = AC × AD", "B. BC² = AC × CD", "C. BD² = AD × CD", "D. AC² = AD × CD"],
              ans: 0,
              explanation: "From AD / AB = AB / AC, cross multiplying yields AB² = AC × AD."
            },
            {
              q: "5. Which relation is derived from ΔBDC ~ ΔABC?",
              options: ["A. AB² = AC × AD", "B. BC² = AC × CD", "C. AC² = AB × BC", "D. BD = CD"],
              ans: 1,
              explanation: "From CD / BC = BC / AC, cross multiplying yields BC² = AC × CD."
            },
            {
              q: "6. What is (AD + CD) equal to in terms of the hypotenuse segments?",
              options: ["A. BD", "B. AC", "C. AB", "D. 2 AC"],
              ans: 1,
              explanation: "Since point D lies on hypotenuse segment AC, AD + CD = AC."
            },
            {
              q: "7. Which of the following is a classic fundamental Pythagorean triple?",
              options: ["A. (3, 4, 5)", "B. (2, 3, 4)", "C. (1, 2, 3)", "D. (5, 6, 7)"],
              ans: 0,
              explanation: "3² + 4² = 9 + 16 = 25 = 5². Thus (3, 4, 5) is a Pythagorean triple."
            },
            {
              q: "8. If hypotenuse is 13 cm and one side is 5 cm, what is the third side?",
              options: ["A. 8 cm", "B. 10 cm", "C. 12 cm", "D. 11 cm"],
              ans: 2,
              explanation: "√(13² - 5²) = √(169 - 25) = √144 = 12 cm."
            },
            {
              q: "9. What does the converse of Pythagoras Theorem state?",
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
              q: "10. In ancient Indian mathematics, by what name is Pythagoras Theorem known in Sulba Sutras?",
              options: ["A. Baudhayana Theorem", "B. Aryabhata Rule", "C. Brahmagupta Formula", "D. Ramanujan Identity"],
              ans: 0,
              explanation: "Indian mathematician Baudhayana stated this geometric theorem in the Baudhayana Sulba Sutra centuries before Pythagoras."
            }
          ],
          explanation: "Similarity of right sub-triangles ΔADB and ΔBDC with whole ΔABC proves AC² = AB² + BC²."
        },
        {
          id: "m_em_4_2_4",
          type: "5m",
          mark: "5 Marks",
          examYear: "2024",
          examTag: "Algebra-Geometry 5M",
          isImportant: true,
          q: "The hypotenuse of a right triangle is 6 m more than twice its shortest side. The third side is 2 m less than the hypotenuse. Find all three sides.",
          diagramImg: "math_ch4_5m_q5_rt_triangle.jpg",
          diagramCaption: "Blackboard Solution: Right Triangle Sides (Hypotenuse 2x+6, Shortest x) (Tap to Zoom)",
          ans: `<div style="line-height:1.8;">
            <b>Problem Statement:</b><br>
            The hypotenuse of a right triangle is 6 m more than twice its shortest side. The third side is 2 m less than the hypotenuse. Find the lengths of all three sides of the triangle.<br><br>

            <b>Formulation:</b><br>
            • Let the shortest side = <b>x metres</b><br>
            • Hypotenuse = <b>(2x + 6) metres</b><br>
            • Third side = (2x + 6) - 2 = <b>(2x + 4) metres</b><br><br>

            <b>Applying Pythagoras Theorem:</b><br>
            (Shortest side)² + (Third side)² = (Hypotenuse)²<br>
            <div style="margin:6px 0 6px 18px; font-weight:700; color:#1d4ed8; font-size:15px;">
              x² + (2x + 4)² = (2x + 6)²
            </div><br>

            <b>Expanding Algebraic Terms:</b><br>
            x² + [(2x)² + 2(2x)(4) + 4²] = [(2x)² + 2(2x)(6) + 6²]<br>
            x² + (4x² + 16x + 16) = 4x² + 24x + 36<br><br>

            <b>Simplifying the Quadratic Equation:</b><br>
            Subtract 4x² from both sides:<br>
            x² + 16x + 16 = 24x + 36<br>
            x² + 16x - 24x + 16 - 36 = 0<br>
            <div style="margin:6px 0 6px 18px; font-weight:700; font-size:15px; color:#b91c1c;">
              x² - 8x - 20 = 0
            </div><br>

            <b>Factorizing the Quadratic:</b><br>
            Find two numbers whose product is -20 and sum is -8: (-10 and +2)<br>
            (x - 10)(x + 2) = 0<br>
            x - 10 = 0  ⇒  <b>x = 10</b><br>
            x + 2 = 0   ⇒  x = -2 (Rejected, length of a side cannot be negative)<br><br>

            <b>Calculating All Three Sides:</b><br>
            1. Shortest side = x = <b>10 m</b><br>
            2. Third side = 2x + 4 = 2(10) + 4 = 20 + 4 = <b>24 m</b><br>
            3. Hypotenuse = 2x + 6 = 2(10) + 6 = 20 + 6 = <b>26 m</b><br><br>

            <b>Verification:</b><br>
            10² + 24² = 100 + 576 = 676<br>
            26² = 676. (100 + 576 = 676 ✔ Perfectly verified)<br><br>

            <div style="margin-top:12px; padding:10px 14px; background:#f0fdf4; border:1.5px solid #22c55e; border-radius:8px; font-weight:700; text-align:center; color:#166534; font-size:16px;">
              Answer: The lengths of the sides are 10 m, 24 m, and 26 m.
            </div>
          </div>`,
          noVoice: true,
          checkpoints: [
            {
              q: "1. If shortest side is x, how is the hypotenuse represented from the problem text?",
              options: ["A. x + 6", "B. 2x + 6", "C. 2x - 6", "D. 6x + 2"],
              ans: 1,
              explanation: "'6 m more than twice its shortest side' translates algebraically to 2x + 6."
            },
            {
              q: "2. How is the third side expressed?",
              options: ["A. 2x + 4", "B. 2x + 8", "C. x + 4", "D. 2x - 2"],
              ans: 0,
              explanation: "'2 m less than the hypotenuse': (2x + 6) - 2 = 2x + 4."
            },
            {
              q: "3. What quadratic equation is formed after applying Pythagoras theorem?",
              options: ["A. x² - 8x - 20 = 0", "B. x² + 8x + 20 = 0", "C. x² - 10x - 24 = 0", "D. x² - 6x - 16 = 0"],
              ans: 0,
              explanation: "Expanding and simplifying x² + (2x+4)² = (2x+6)² yields x² - 8x - 20 = 0."
            },
            {
              q: "4. What are the factors of x² - 8x - 20 = 0?",
              options: ["A. (x - 4)(x + 5)", "B. (x - 10)(x + 2)", "C. (x + 10)(x - 2)", "D. (x - 20)(x + 1)"],
              ans: 1,
              explanation: "-10 × 2 = -20 and -10 + 2 = -8, so the factors are (x - 10)(x + 2) = 0."
            },
            {
              q: "5. Why is the solution x = -2 rejected?",
              options: ["A. Because it is an odd number", "B. Geometric side lengths cannot be negative", "C. It does not satisfy the equation", "D. Because hypotenuse is larger"],
              ans: 1,
              explanation: "A physical geometric length cannot be negative, so x = -2 is invalid."
            },
            {
              q: "6. What is the length of the shortest side?",
              options: ["A. 8 m", "B. 10 m", "C. 12 m", "D. 14 m"],
              ans: 1,
              explanation: "The shortest side is x = 10 m."
            },
            {
              q: "7. What is the length of the hypotenuse?",
              options: ["A. 24 m", "B. 26 m", "C. 28 m", "D. 30 m"],
              ans: 1,
              explanation: "Hypotenuse = 2(10) + 6 = 26 m."
            },
            {
              q: "8. What is the length of the third side?",
              options: ["A. 20 m", "B. 22 m", "C. 24 m", "D. 25 m"],
              ans: 2,
              explanation: "Third side = 2(10) + 4 = 24 m."
            },
            {
              q: "9. Is (10, 24, 26) a Pythagorean triple?",
              options: ["A. Yes, it is twice the primitive triple (5, 12, 13)", "B. No", "C. Only in circles", "D. Only for equilateral triangles"],
              ans: 0,
              explanation: "10² + 24² = 100 + 576 = 676 = 26². It is 2 × (5, 12, 13)."
            },
            {
              q: "10. What is the area of this right-angled triangle?",
              options: ["A. 240 m²", "B. 120 m²", "C. 260 m²", "D. 130 m²"],
              ans: 1,
              explanation: "Area = ½ × base × height = ½ × 10 × 24 = 120 m²."
            }
          ],
          explanation: "Pythagoras application leading to x² - 8x - 20 = 0 yielding sides 10 m, 24 m, and 26 m."
        },
        {
          id: "m_em_4_2_5",
          type: "5m",
          mark: "5 Marks",
          examYear: "2023",
          examTag: "Circles & Tangents 5M",
          isImportant: true,
          q: "AB is a chord of length 6 cm in a circle of radius 5 cm. The tangents at A and B meet at P. Find the length of PA.",
          diagramImg: "math_ch4_5m_q6_circle_tangent.jpg",
          diagramCaption: "Blackboard Solution: Tangents PA & PB to Circle with Chord AB = 6 cm (Tap to Zoom)",
          ans: `<div style="line-height:1.8;">
            <b>Problem Statement:</b><br>
            AB is a chord of length 6 cm in a circle of radius 5 cm. The tangents at A and B intersect at an external point P. Find the length of tangent PA.<br><br>

            <b>Given Data:</b><br>
            • Radius of the circle (OA = OB) = <b>r = 5 cm</b><br>
            • Length of chord AB = <b>6 cm</b><br>
            • Tangents PA and PB meet at external point P.<br><br>

            <b>Geometric Properties:</b><br>
            1. The line OP joining the centre O to external point P is the perpendicular bisector of chord AB.<br>
            2. Let OP intersect AB at point M.<br>
            • M is the midpoint of AB ⇒ <b>AM = AB / 2 = 6 / 2 = 3 cm</b>.<br>
            • ∠OMA = 90°.<br><br>

            <b>Step 1: Finding OM in right ΔOAM:</b><br>
            In right triangle ΔOAM (∠OMA = 90°):<br>
            By Pythagoras Theorem:<br>
            OM² = OA² - AM²<br>
            OM = √(5² - 3²) = √(25 - 9) = √16<br>
            <b style="color:#1d4ed8; font-size:15px;">OM = 4 cm</b><br><br>

            <b>Step 2: Finding PA using Right Triangle Similarity:</b><br>
            Since the radius is perpendicular to the tangent at the point of contact:<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              ∠OAP = 90°
            </div><br>
            In right triangle ΔOAP with altitude AM ⊥ OP:<br>
            <b>ΔAMP ~ ΔOMA</b> (or ΔOAP ~ ΔOMA)<br><br>
            Taking the ratio of corresponding sides:<br>
            <div style="margin:6px 0 6px 18px; font-weight:700; font-size:16px;">
              PA / OA = AM / OM
            </div><br>
            Substitute the values:<br>
            PA / 5 = 3 / 4<br><br>
            PA = (5 × 3) / 4<br>
            PA = 15 / 4<br>
            <b style="color:#15803d; font-size:16px;">PA = 3.75 cm</b><br><br>

            <div style="margin-top:12px; padding:10px 14px; background:#f0fdf4; border:1.5px solid #22c55e; border-radius:8px; font-weight:700; text-align:center; color:#166534; font-size:16px;">
              Answer: The length of the tangent PA is 3.75 cm.
            </div>
          </div>`,
          noVoice: true,
          checkpoints: [
            {
              q: "1. What is the relation between line OP and chord AB?",
              options: [
                "A. OP is parallel to AB",
                "B. OP is the perpendicular bisector of chord AB",
                "C. OP equals AB",
                "D. OP is tangent to AB"
              ],
              ans: 1,
              explanation: "The line segment connecting the center to the external point where tangents meet is the perpendicular bisector of the chord of contact."
            },
            {
              q: "2. What is the length of AM if chord AB = 6 cm?",
              options: ["A. 2 cm", "B. 3 cm", "C. 4 cm", "D. 5 cm"],
              ans: 1,
              explanation: "M is the midpoint of AB, so AM = 6 / 2 = 3 cm."
            },
            {
              q: "3. What is the calculated length of OM?",
              options: ["A. 3 cm", "B. 4 cm", "C. 5 cm", "D. 2.5 cm"],
              ans: 1,
              explanation: "In right ΔOAM: OM = √(5² - 3²) = √(25 - 9) = √16 = 4 cm."
            },
            {
              q: "4. What is the measure of ∠OAP?",
              options: ["A. 45°", "B. 60°", "C. 90°", "D. 120°"],
              ans: 2,
              explanation: "The radius drawn to the point of contact is perpendicular to the tangent (∠OAP = 90°)."
            },
            {
              q: "5. Which similarity relation is used to find PA?",
              options: ["A. PA / OA = AM / OM", "B. PA / OM = OA / AM", "C. PA × OA = AM × OM", "D. PA = OA + AM"],
              ans: 0,
              explanation: "Comparing right triangles ΔAMP and ΔOMA gives the proportion PA / OA = AM / OM."
            },
            {
              q: "6. What is the calculated length of tangent PA?",
              options: ["A. 3.25 cm", "B. 3.5 cm", "C. 3.75 cm", "D. 4.25 cm"],
              ans: 2,
              explanation: "PA = (5 × 3) / 4 = 15 / 4 = 3.75 cm."
            },
            {
              q: "7. What is the length of tangent PB from the same external point P?",
              options: ["A. 3.75 cm", "B. 5 cm", "C. 4 cm", "D. 3 cm"],
              ans: 0,
              explanation: "Tangents drawn from an external point to a circle are equal in length, so PB = PA = 3.75 cm."
            },
            {
              q: "8. What is the formula for the length of tangent in terms of r, AM, and OM?",
              options: ["A. PA = (r × AM) / OM", "B. PA = r × OM / AM", "C. PA = √(r² + OM²)", "D. PA = r - AM"],
              ans: 0,
              explanation: "From similarity: PA = (r × AM) / OM."
            },
            {
              q: "9. What is the total length of OP?",
              options: ["A. 6.25 cm", "B. 6.5 cm", "C. 7 cm", "D. 5.75 cm"],
              ans: 0,
              explanation: "In right ΔOAP: OP = √(OA² + PA²) = √(5² + 3.75²) = √(25 + 14.0625) = √39.0625 = 6.25 cm."
            },
            {
              q: "10. In which unit of Class 10 does this problem appear?",
              options: ["A. Chapter 4: Geometry (Exercise 4.4)", "B. Chapter 6: Trigonometry", "C. Chapter 7: Mensuration", "D. Chapter 1: Relations"],
              ans: 0,
              explanation: "This is a classic 5-mark question in Chapter 4 Geometry under Exercise 4.4 (Circles & Tangents)."
            }
          ],
          explanation: "In circle with r=5, chord=6, OM=4, right triangle similarity yields tangent PA = 3.75 cm."
        },
        {
          id: "m_em_4_2_6",
          type: "5m",
          mark: "5 Marks",
          examYear: "2024",
          examTag: "Board Favorite 5M",
          isImportant: true,
          q: "P and Q are the midpoints of CA and CB respectively, of ΔABC, right-angled at C. Prove that 4(AQ² + BP²) = 5AB².",
          diagramImg: "math_ch4_5m_q7_midpoint_pythag.jpg",
          diagramCaption: "Blackboard Solution: Midpoint Theorem Application 4(AQ² + BP²) = 5AB² (Tap to Zoom)",
          ans: `<div style="line-height:1.8;">
            <b>Problem Statement:</b><br>
            P and Q are the midpoints of the sides CA and CB respectively, of a triangle ΔABC right-angled at C. Prove that:<br>
            <div style="margin:6px 0 6px 18px; font-weight:700; font-size:16px; color:#1d4ed8;">
              4(AQ² + BP²) = 5AB²
            </div><br>

            <b>Given:</b><br>
            • In ΔABC, ∠C = 90°.<br>
            • P is the midpoint of CA ⇒ <b>CP = PA = AC / 2</b>.<br>
            • Q is the midpoint of CB ⇒ <b>CQ = QB = BC / 2</b>.<br><br>

            <b>Let Side Lengths:</b><br>
            Let AC = <b>a</b> and BC = <b>b</b>.<br>
            Then CP = <b>a/2</b> and CQ = <b>b/2</b>.<br><br>

            <b>Step 1: Applying Pythagoras Theorem in right ΔACQ:</b><br>
            In right triangle ΔACQ (∠C = 90°):<br>
            AQ² = AC² + CQ²<br>
            AQ² = a² + (b/2)²<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              AQ² = a² + b²/4 ---- (1)
            </div><br>

            <b>Step 2: Applying Pythagoras Theorem in right ΔBCP:</b><br>
            In right triangle ΔBCP (∠C = 90°):<br>
            BP² = BC² + CP²<br>
            BP² = b² + (a/2)²<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              BP² = b² + a²/4 ---- (2)
            </div><br>

            <b>Step 3: Adding Equations (1) and (2):</b><br>
            AQ² + BP² = (a² + b²/4) + (b² + a²/4)<br>
            AQ² + BP² = (a² + a²/4) + (b² + b²/4)<br>
            AQ² + BP² = (5a²/4) + (5b²/4)<br>
            <div style="margin:6px 0 6px 18px; font-weight:700; color:#1d4ed8; font-size:15px;">
              AQ² + BP² = (5/4)(a² + b²)
            </div><br>

            <b>Step 4: Multiplying both sides by 4:</b><br>
            4(AQ² + BP²) = 5(a² + b²) ---- (3)<br><br>

            <b>Step 5: Relating to Hypotenuse AB:</b><br>
            In the main right triangle ΔABC (∠C = 90°):<br>
            AB² = AC² + BC² = a² + b² ---- (4)<br><br>

            Substituting equation (4) into equation (3):<br>
            <div style="margin:6px 0 6px 18px; font-weight:700; color:#15803d; font-size:16px;">
              4(AQ² + BP²) = 5AB²
            </div><br>

            <div style="margin-top:12px; padding:10px 14px; background:#f0fdf4; border:1.5px solid #22c55e; border-radius:8px; font-weight:700; text-align:center; color:#166534; font-size:16px;">
              ∴ 4(AQ² + BP²) = 5AB² (Hence proved!)
            </div>
          </div>`,
          noVoice: true,
          checkpoints: [
            {
              q: "1. At which vertex is the triangle ΔABC right-angled?",
              options: ["A. Vertex A", "B. Vertex B", "C. Vertex C (∠C = 90°)", "D. Vertex P"],
              ans: 2,
              explanation: "The problem clearly states that ΔABC is right-angled at C."
            },
            {
              q: "2. Since P is the midpoint of CA, what is the length of CP?",
              options: ["A. CA / 2", "B. CA", "C. 2 CA", "D. CA / 4"],
              ans: 0,
              explanation: "Midpoint divides a line segment into two equal halves: CP = CA / 2 = a / 2."
            },
            {
              q: "3. What is CQ² in terms of b (where b = BC)?",
              options: ["A. b²", "B. b² / 2", "C. b² / 4", "D. b² / 16"],
              ans: 2,
              explanation: "CQ = b / 2, so CQ² = (b / 2)² = b² / 4."
            },
            {
              q: "4. What is the expression for AQ² in right ΔACQ?",
              options: ["A. a² + b²", "B. a² + b²/4", "C. a²/4 + b²", "D. a² - b²/4"],
              ans: 1,
              explanation: "By Pythagoras theorem in ΔACQ: AQ² = AC² + CQ² = a² + b²/4."
            },
            {
              q: "5. What is the expression for BP² in right ΔBCP?",
              options: ["A. b² + a²/4", "B. b² + a²", "C. a² + b²/2", "D. a² - b²/4"],
              ans: 0,
              explanation: "By Pythagoras theorem in ΔBCP: BP² = BC² + CP² = b² + a²/4."
            },
            {
              q: "6. What is the sum (a² + a²/4) equal to?",
              options: ["A. 2a²", "B. 5a² / 4", "C. 3a² / 4", "D. 4a² / 5"],
              ans: 1,
              explanation: "a² + a²/4 = (4a² + a²)/4 = 5a²/4."
            },
            {
              q: "7. What common factor is factored out from AQ² + BP²?",
              options: ["A. 4/5", "B. 5/4", "C. 5", "D. 4"],
              ans: 1,
              explanation: "AQ² + BP² = (5a²/4) + (5b²/4) = (5/4)(a² + b²)."
            },
            {
              q: "8. What does (a² + b²) represent in right ΔABC?",
              options: ["A. AB", "B. AB²", "C. 2 AB²", "D. AB / 2"],
              ans: 1,
              explanation: "By Pythagoras Theorem in ΔABC: AC² + BC² = a² + b² = AB²."
            },
            {
              q: "9. Cross-multiplying the denominator 4 to the left-hand side yields what final identity?",
              options: ["A. 5(AQ² + BP²) = 4AB²", "B. 4(AQ² + BP²) = 5AB²", "C. AQ² + BP² = 5AB²", "D. 4(AQ + BP) = 5AB"],
              ans: 1,
              explanation: "Multiplying (AQ² + BP²) = (5/4)AB² by 4 gives 4(AQ² + BP²) = 5AB²."
            },
            {
              q: "10. In which exercise of Chapter 4 Geometry is this standard problem found?",
              options: ["A. Exercise 4.1", "B. Exercise 4.2", "C. Exercise 4.3 (Pythagoras Theorem Applications)", "D. Exercise 4.4"],
              ans: 2,
              explanation: "This classic algebraic Pythagoras problem is from Exercise 4.3 in the Tamil Nadu Class 10 Maths textbook."
            }
          ],
          explanation: "Applying Pythagoras to ΔACQ and ΔBCP yields AQ²+BP² = (5/4)(a²+b²) = (5/4)AB², proving 4(AQ²+BP²) = 5AB²."
        },
        {
          id: "m_em_4_2_7",
          type: "5m",
          mark: "5 Marks",
          examYear: "2024",
          examTag: "2024* (Theorem Proof)",
          isImportant: true,
          q: "State and prove Alternate Segment Theorem.",
          diagramImg: "math_ch4_5m_q8_alternate_segment.jpg",
          diagramCaption: "Blackboard Solution: Alternate Segment Theorem Proof ∠PAB = ∠ACB (Tap to Zoom)",
          ans: `<div style="line-height:1.8;">
            <div style="padding:10px 14px; background:#eff6ff; border-left:4px solid #2563eb; border-radius:6px; margin-bottom:12px;">
              <b>Alternate Segment Theorem:</b><br>
              <i>The angle between a tangent and a chord through the point of contact is equal to the angle subtended by the chord in the alternate segment.</i>
            </div>

            <b>Given:</b><br>
            • A circle with centre O.<br>
            • A tangent PA touches the circle at point A.<br>
            • AB is a chord drawn through the point of contact A.<br>
            • C is any point on the circle in the alternate segment.<br><br>

            <b>To Prove:</b><br>
            <div style="margin:6px 0 6px 18px; font-weight:700; font-size:16px; color:#1d4ed8;">
              ∠PAB = ∠ACB
            </div><br>

            <b>Construction:</b><br>
            Draw the diameter AD through centre O. Join BD.<br><br>

            <b>Proof:</b><br>
            <table style="width:100%; border-collapse:collapse; margin:10px 0;">
              <thead>
                <tr style="background:#f1f5f9; border-bottom:2px solid #cbd5e1; text-align:left;">
                  <th style="padding:8px 10px; width:8%;">No.</th>
                  <th style="padding:8px 10px; width:52%;">Mathematical Statement</th>
                  <th style="padding:8px 10px; width:40%;">Reason / Justification</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">1.</td>
                  <td style="padding:8px 10px;">AD is diameter and PA is tangent:<br><b>∠PAD = 90°</b></td>
                  <td style="padding:8px 10px; color:#475569;">Radius/diameter is perpendicular to tangent at point of contact</td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">2.</td>
                  <td style="padding:8px 10px;">∠PAB = ∠PAD - ∠DAB<br>⇒ <b>∠PAB = 90° - ∠DAB</b></td>
                  <td style="padding:8px 10px; color:#475569;">From angle addition property ---- (1)</td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">3.</td>
                  <td style="padding:8px 10px;">In ΔABD, AD is diameter:<br><b>∠ABD = 90°</b></td>
                  <td style="padding:8px 10px; color:#475569;">Angle inscribed in a semicircle is a right angle (90°)</td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">4.</td>
                  <td style="padding:8px 10px;">In right ΔABD:<br>∠ADB + ∠DAB = 90°<br>⇒ <b>∠ADB = 90° - ∠DAB</b></td>
                  <td style="padding:8px 10px; color:#475569;">Sum of acute angles in a right triangle ---- (2)</td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">5.</td>
                  <td style="padding:8px 10px;">From (1) and (2):<br><b>∠PAB = ∠ADB</b></td>
                  <td style="padding:8px 10px; color:#475569;">Both equal (90° - ∠DAB) ---- (3)</td>
                </tr>
                <tr>
                  <td style="padding:8px 10px; font-weight:700;">6.</td>
                  <td style="padding:8px 10px;">∠ADB = ∠ACB<br>⇒ <b style="color:#15803d; font-size:15px;">∠PAB = ∠ACB</b></td>
                  <td style="padding:8px 10px; font-weight:700; color:#15803d;">Angles subtended by chord AB in the same segment are equal!</td>
                </tr>
              </tbody>
            </table>

            <div style="margin-top:12px; padding:10px 14px; background:#f0fdf4; border:1.5px solid #22c55e; border-radius:8px; font-weight:700; text-align:center; color:#166534; font-size:16px;">
              ∴ ∠PAB = ∠ACB (Alternate Segment Theorem is successfully proved)
            </div>
          </div>`,
          noVoice: true,
          checkpoints: [
            {
              q: "1. What does the Alternate Segment Theorem state?",
              options: [
                "A. Tangent is equal to the chord",
                "B. Angle between tangent and chord equals the angle in the alternate segment",
                "C. Opposite angles in cyclic quad sum to 360°",
                "D. Angle at center is equal to angle at circumference"
              ],
              ans: 1,
              explanation: "The theorem states that the angle between a tangent and a chord equals the angle subtended by that chord in the opposite (alternate) segment."
            },
            {
              q: "2. Which diameter is drawn as a construction line?",
              options: ["A. Diameter passing through B", "B. Diameter AD passing through contact point A", "C. Diameter through C", "D. Any random chord"],
              ans: 1,
              explanation: "Diameter AD drawn from contact point A creates a 90° angle with the tangent."
            },
            {
              q: "3. What is the value of ∠PAD?",
              options: ["A. 45°", "B. 60°", "C. 90°", "D. 180°"],
              ans: 2,
              explanation: "Diameter AD contains radius OA, and radius is perpendicular to tangent PA at contact point A, so ∠PAD = 90°."
            },
            {
              q: "4. Why is ∠ABD equal to 90° in the construction?",
              options: ["A. Angle in a semicircle is a right angle", "B. Alternate angle", "C. Tangent theorem", "D. By definition"],
              ans: 0,
              explanation: "Since AD is the diameter of the circle, the inscribed angle subtended by a diameter (in a semicircle) is always 90°."
            },
            {
              q: "5. Both ∠PAB and ∠ADB are equal to which expression?",
              options: ["A. 90° + ∠DAB", "B. 90° - ∠DAB", "C. 180° - ∠DAB", "D. 2 ∠DAB"],
              ans: 1,
              explanation: "∠PAB = 90° - ∠DAB and in right ΔABD, ∠ADB = 90° - ∠DAB. Hence ∠PAB = ∠ADB."
            },
            {
              q: "6. Why is ∠ADB equal to ∠ACB?",
              options: ["A. Vertically opposite angles", "B. Angles in the same segment of a circle are equal", "C. Alternate angles", "D. Radii are equal"],
              ans: 1,
              explanation: "Both ∠ADB and ∠ACB are subtended by the same chord AB in the same segment of the circle, so they are equal."
            },
            {
              q: "7. If ∠PAB = 65°, what is the measure of ∠ACB?",
              options: ["A. 25°", "B. 65°", "C. 115°", "D. 130°"],
              ans: 1,
              explanation: "By the Alternate Segment Theorem, ∠ACB = ∠PAB = 65°."
            },
            {
              q: "8. If ∠ACB = 50°, what is the angle between the tangent and the chord?",
              options: ["A. 40°", "B. 50°", "C. 100°", "D. 25°"],
              ans: 1,
              explanation: "The angle between the tangent and chord ∠PAB equals the alternate segment angle ∠ACB = 50°."
            },
            {
              q: "9. Does the theorem hold for chords of any length?",
              options: ["A. Yes, for any chord and tangent pair", "B. Only for diameters", "C. Only if chord equals radius", "D. No"],
              ans: 0,
              explanation: "The Alternate Segment Theorem is universal for any tangent and any chord through the point of contact."
            },
            {
              q: "10. In Tamil Nadu State Board Class 10, in which chapter is Alternate Segment Theorem studied?",
              options: ["A. Chapter 4: Geometry", "B. Chapter 3: Algebra", "C. Chapter 5: Coordinate Geometry", "D. Chapter 7: Mensuration"],
              ans: 0,
              explanation: "It is Theorem 6 in Chapter 4 Geometry (Section 4.4 Circles and Tangents)."
            }
          ],
          explanation: "Alternate Segment Theorem proof establishing ∠PAB = ∠ACB via diameter construction and semicircle 90° angle."
        },
        {
          id: "m_em_4_2_8",
          type: "5m",
          mark: "5 Marks",
          examYear: "2023",
          examTag: "Fundamental Theorem 5M",
          isImportant: true,
          q: "Prove that the radius is perpendicular to the tangent at the point of contact.",
          diagramImg: "math_ch4_5m_q9_radius_perpendicular.jpg",
          diagramCaption: "Blackboard Solution: Tangent PQ ⊥ Radius OA at Point of Contact A (Tap to Zoom)",
          ans: `<div style="line-height:1.8;">
            <div style="padding:10px 14px; background:#eff6ff; border-left:4px solid #2563eb; border-radius:6px; margin-bottom:12px;">
              <b>Statement:</b><br>
              <i>The tangent at any point of a circle is perpendicular to the radius through the point of contact.</i>
            </div>

            <b>Given:</b><br>
            • A circle with centre O.<br>
            • A line PQ is tangent to the circle at point A.<br>
            • OA is the radius connecting centre O to point of contact A.<br><br>

            <b>To Prove:</b><br>
            <div style="margin:6px 0 6px 18px; font-weight:700; font-size:16px; color:#1d4ed8;">
              OA ⊥ PQ
            </div><br>

            <b>Construction:</b><br>
            Take any point Q (other than A) on the tangent line PQ. Join the line segment OQ. Let OQ intersect the circle at point R.<br><br>

            <b>Proof:</b><br>
            <div style="margin:6px 0 6px 12px; line-height:1.9;">
              1. A line is tangent to a circle if and only if it touches the circle at exactly <b>one single point</b>.<br>
              2. Point A is the only point of contact where tangent PQ touches the circle.<br>
              3. Therefore, every other point on the tangent line PQ must lie <b>strictly outside</b> the circle.<br>
              4. Since point Q lies outside the circle, the distance from centre O to Q must be greater than the radius:<br>
              <div style="margin:4px 0 4px 18px; font-weight:700;">
                OQ > OR
              </div>
              5. But OR and OA are both radii of the same circle, so <b>OR = OA</b>.<br>
              6. Substituting OR = OA:<br>
              <div style="margin:4px 0 4px 18px; font-weight:700; color:#1d4ed8;">
                OQ > OA  (or OA < OQ)
              </div>
              7. This inequality holds true for <b>every point</b> on the tangent line PQ, except the point of contact A.<br>
              8. Consequently, the line segment <b>OA is the shortest distance</b> from the centre O to the tangent line PQ.<br>
              9. By the fundamental geometric theorem, the shortest distance from an external point to a straight line is the <b>perpendicular distance</b>.<br>
              <div style="margin:6px 0 6px 18px; font-weight:700; color:#15803d; font-size:16px;">
                ∴ OA ⊥ PQ
              </div>
            </div>

            <div style="margin-top:12px; padding:10px 14px; background:#f0fdf4; border:1.5px solid #22c55e; border-radius:8px; font-weight:700; text-align:center; color:#166534; font-size:16px;">
              ∴ The radius OA is perpendicular to the tangent PQ at the point of contact A. (Hence proved!)
            </div>
          </div>`,
          noVoice: true,
          checkpoints: [
            {
              q: "1. How many points of intersection does a tangent have with a circle?",
              options: ["A. Two points", "B. Exactly one point", "C. Infinite points", "D. Zero points"],
              ans: 1,
              explanation: "By definition, a tangent touches a circle at exactly one single point of contact."
            },
            {
              q: "2. Where does every point on a tangent line (except the point of contact) lie relative to the circle?",
              options: ["A. Inside the circle", "B. Strictly outside the circle", "C. On the circle", "D. At the centre"],
              ans: 1,
              explanation: "Because only the point of contact touches the circle, all other points on the tangent line must lie outside the circle."
            },
            {
              q: "3. If Q lies outside the circle and R is the intersection of OQ with the circle, what is true?",
              options: ["A. OQ = OR", "B. OQ < OR", "C. OQ > OR", "D. OQ + OR = 0"],
              ans: 2,
              explanation: "Since point Q lies outside the circle, the segment OQ extends beyond the circle's boundary, so OQ > OR."
            },
            {
              q: "4. Why is OR equal to OA?",
              options: ["A. Both are chords", "B. Both are radii of the same circle", "C. Both are tangents", "D. By Pythagoras theorem"],
              ans: 1,
              explanation: "Points A and R both lie on the circle, so OA and OR are radii of the same circle and equal in length."
            },
            {
              q: "5. What inequality relates OA and OQ for any external point Q on the tangent?",
              options: ["A. OA > OQ", "B. OA < OQ (i.e. OQ > OA)", "C. OA = OQ", "D. OA × OQ = 1"],
              ans: 1,
              explanation: "OA is equal to the radius, while OQ is strictly greater than the radius, so OA < OQ."
            },
            {
              q: "6. What does OA represent among all line segments joining O to line PQ?",
              options: ["A. The longest segment", "B. The median segment", "C. The shortest distance", "D. The diagonal"],
              ans: 2,
              explanation: "Since OA is smaller than OQ for any other point Q on PQ, OA is the unique shortest segment."
            },
            {
              q: "7. What geometric property does the shortest distance from a point to a line have?",
              options: ["A. It is parallel to the line", "B. It is perpendicular to the line", "C. It makes a 45° angle", "D. It is tangent to the line"],
              ans: 1,
              explanation: "The shortest distance between a point and a straight line is always along the perpendicular line dropped to it."
            },
            {
              q: "8. What is the angle between the radius and the tangent at the contact point?",
              options: ["A. 45°", "B. 60°", "C. 90°", "D. 180°"],
              ans: 2,
              explanation: "Because OA ⊥ PQ, the angle between the radius and the tangent is exactly 90°."
            },
            {
              q: "9. How many tangents can be drawn to a circle from a point on the circle itself?",
              options: ["A. Exactly one", "B. Two", "C. Infinite", "D. Zero"],
              ans: 0,
              explanation: "At any given point on a circle, there is one and only one tangent line perpendicular to the radius at that point."
            },
            {
              q: "10. How many tangents can be drawn to a circle from an external point?",
              options: ["A. One", "B. Exactly two", "C. Three", "D. Infinite"],
              ans: 1,
              explanation: "From any point outside a circle, exactly two tangents can be drawn to the circle, and both are equal in length."
            }
          ],
          explanation: "Logical proof showing OA is the shortest distance from center O to tangent line PQ, therefore OA ⊥ PQ."
        },
        {
          id: "m_em_4_2_9",
          type: "5m",
          mark: "5 Marks",
          examYear: "Master Chart",
          examTag: "Master Blackboard",
          isImportant: true,
          q: "10th Std Mathematics - Chapter 4: Geometry - Top 10 Important 5 Marks Questions Master Board",
          diagramImg: "math_bb_ch4_all10.jpg",
          diagramCaption: "10th Std Mathematics Chapter 4: Geometry - Top 10 Important 5 Marks Questions (with Solutions) Master Chalkboard (Tap to Zoom)",
          ans: `<div style="line-height:1.8;">
            <div style="padding:10px 14px; background:#eff6ff; border-left:4px solid #2563eb; border-radius:6px; margin-bottom:12px;">
              <b>Comprehensive Master Overview: Chapter 4 Geometry (Top 10 Important 5-Marks Questions)</b><br>
              <i>All 10 high-yield board exam questions with complete theorem proofs, constructions, and step-by-step solutions compiled in one visual master board!</i>
            </div>

            <b>Summary of the 10 Questions Covered:</b><br>
            <ol style="margin:8px 0 12px 20px; line-height:2.0;">
              <li><b>Q1: Basic Proportionality Theorem (Thales Theorem):</b> Proves AD/DB = AE/EC in ΔABC with DE || BC.</li>
              <li><b>Q2: Pythagoras Theorem:</b> Proves AC² = AB² + BC² in right-angled ΔABC (∠B = 90°).</li>
              <li><b>Q3: Angle Bisector Theorem (ABT):</b> Proves BD/DC = AB/AC for internal bisector AD of ∠A.</li>
              <li><b>Q4: Concurrency of Medians:</b> Proves medians AD, BE, CF meet at centroid G using Ceva's Theorem & coordinates.</li>
              <li><b>Q5: Right-Angled Triangle Word Problem:</b> Solves for sides 10 m, 24 m, 26 m from hypotenuse 2x+6 and sides x, 2x+4.</li>
              <li><b>Q6: Circle and Tangents:</b> Calculates tangent length PA = 3.75 cm for chord AB = 6 cm and radius r = 5 cm.</li>
              <li><b>Q7: Midpoint Theorem Application:</b> Proves 4(AQ² + BP²) = 5AB² for midpoints P and Q of legs in right ΔABC.</li>
              <li><b>Q8: Alternate Segment Theorem:</b> Proves angle between tangent and chord equals alternate segment angle (∠PAB = ∠ACB).</li>
              <li><b>Q9: Radius Perpendicular to Tangent:</b> Proves OA ⊥ PQ at point of contact A using shortest distance principle.</li>
              <li><b>Q10: Similar Triangles - Height of Lamp Post:</b> Calculates lamp post height h = 3.3 m using mirror reflection similarity.</li>
            </ol>

            <div style="margin-top:12px; padding:10px 14px; background:#f0fdf4; border:1.5px solid #22c55e; border-radius:8px; font-weight:700; text-align:center; color:#166534; font-size:15px;">
              💡 Tip: Tap the blackboard illustration above to zoom in and study all 10 diagrams and solutions in high resolution!
            </div>
          </div>`,
          noVoice: true,
          explanation: "Master overview of all 10 crucial 5-mark geometry questions for 10th standard board examinations."
        }
      ]
    }
  ]
};
