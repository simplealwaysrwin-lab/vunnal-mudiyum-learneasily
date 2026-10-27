// Class 10 Mathematics - Unit 1: Relations and Functions
// Tamil Nadu State Board Samacheer Kalvi Digital Guide (English Medium)
// Note: English Medium is strictly in pure English without any Tamil words.

const MATHS_EM_UNIT_1_DATA = {
  unitId: "math_em_u1",
  unitName: "Unit 1: Relations and Functions",
  subject: "Mathematics (English Medium)",
  syllabus: "Tamil Nadu State Board Samacheer Kalvi Class 10 Mathematics",

  // Key Formula & Concept Cards
  formulas: [
    { title: "Cartesian Product", rule: "A × B = {(a, b) | a ∈ A, b ∈ B} and n(A × B) = n(A) × n(B)" },
    { title: "Distributive Properties", rule: "A × (B ∪ C) = (A × B) ∪ (A × C) and A × (B ∩ C) = (A × B) ∩ (A × C)" },
    { title: "Relation Definition", rule: "R ⊆ (A × B); Domain ⊆ A, Range ⊆ B (Co-domain)" },
    { title: "Function Definition", rule: "Every element in the domain has one and only one unique image in the co-domain." },
    { title: "Composition of Functions", rule: "(f ∘ g)(x) = f(g(x)); In general f ∘ g ≠ g ∘ f, but (f ∘ g) ∘ h = f ∘ (g ∘ h) always holds." }
  ],

  subSections: [
    // -------------------------------------------------------------
    // Section 1: Cartesian Product (Exercise 1.1)
    // -------------------------------------------------------------
    {
      id: "sec_em_1",
      title: "Exercise 1.1: Cartesian Product and Ordered Pairs",
      author: "Chapter 1: Relations and Functions",
      questions: [
        {
          id: "m_em_1_1",
          type: "2m",
          mark: "2 Marks",
          q: "Find A × B, A × A and B × A for:<br><div style='margin:6px 0 6px 18px; font-weight:700;'>A = {2,&nbsp;-2,&nbsp;3} and B = {1,&nbsp;-4}</div>",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            Given sets:<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">A = {2,&nbsp;-2,&nbsp;3}</div>
            <div style="margin:4px 0 4px 18px; font-weight:700;">B = {1,&nbsp;-4}</div><br>
            <b>1. A × B:</b><br>
            <div style="margin:4px 0 4px 18px;">
              A × B = {2,&nbsp;-2,&nbsp;3} × {1,&nbsp;-4}<br>
              <b>A × B = {(2,&nbsp;1), (2,&nbsp;-4), (-2,&nbsp;1), (-2,&nbsp;-4), (3,&nbsp;1), (3,&nbsp;-4)}</b>
            </div><br>
            <b>2. A × A:</b><br>
            <div style="margin:4px 0 4px 18px;">
              A × A = {2,&nbsp;-2,&nbsp;3} × {2,&nbsp;-2,&nbsp;3}<br>
              <b>A × A = {(2,&nbsp;2), (2,&nbsp;-2), (2,&nbsp;3), (-2,&nbsp;2), (-2,&nbsp;-2), (-2,&nbsp;3), (3,&nbsp;2), (3,&nbsp;-2), (3,&nbsp;3)}</b>
            </div><br>
            <b>3. B × A:</b><br>
            <div style="margin:4px 0 4px 18px;">
              B × A = {1,&nbsp;-4} × {2,&nbsp;-2,&nbsp;3}<br>
              <b>B × A = {(1,&nbsp;2), (1,&nbsp;-2), (1,&nbsp;3), (-4,&nbsp;2), (-4,&nbsp;-2), (-4,&nbsp;3)}</b>
            </div>
          </div>`,
          explanation: "In the Cartesian product, the first element comes from the first set and the second element comes from the second set."
        },
        {
          id: "m_em_1_2",
          type: "2m",
          mark: "2 Marks",
          q: "If A = B = {p,&nbsp;q}, then find A × B, A × A and B × A.",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            Given:<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">A = {p,&nbsp;q} and B = {p,&nbsp;q}</div>
            Since both sets are identical (A = B):<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">A × B = A × A = B × A</div>
            <div style="margin:4px 0 4px 18px;">
              A × B = {p,&nbsp;q} × {p,&nbsp;q}<br>
              <b>A × B = {(p,&nbsp;p), (p,&nbsp;q), (q,&nbsp;p), (q,&nbsp;q)}</b><br><br>
              <b>A × A = {(p,&nbsp;p), (p,&nbsp;q), (q,&nbsp;p), (q,&nbsp;q)}</b><br><br>
              <b>B × A = {(p,&nbsp;p), (p,&nbsp;q), (q,&nbsp;p), (q,&nbsp;q)}</b>
            </div>
          </div>`,
          explanation: "When two sets are equal, all three Cartesian products are identical."
        },
        {
          id: "m_em_1_3",
          videoUrl: "https://youtu.be/aSeA9X6iIQ8",
          type: "2m",
          mark: "2 Marks",
          examYear: "2022",
          examTag: "2022*",
          isImportant: true,
          q: "If B × A = {(-2,&nbsp;3), (-2,&nbsp;4), (0,&nbsp;3), (0,&nbsp;4), (3,&nbsp;3), (3,&nbsp;4)}, find A and B.",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            Given Cartesian product:<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              B × A = {(-2,&nbsp;3), (-2,&nbsp;4), (0,&nbsp;3), (0,&nbsp;4), (3,&nbsp;3), (3,&nbsp;4)}
            </div><br>
            • Set B is the set of all first coordinates in B × A:<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              B = {-2,&nbsp;0,&nbsp;3}
            </div><br>
            • Set A is the set of all second coordinates in B × A:<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              A = {3,&nbsp;4}
            </div>
          </div>`,
          explanation: "The first elements form the first set and the second elements form the second set.",
          blackboard: {
            title: "Exercise 1.1 (Q3): Finding Sets A and B from B × A",
            engTitle: "Exercise 1.1 (Q3): Finding Sets A and B from B × A",
            steps: [
              {
                stepNum: 1,
                badge: "① Given & Cartesian Product Concept",
                badgeEn: "① Given & Cartesian Product Concept",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Step 1: Given Cartesian Product & Fundamental Rule</div>
                  <div class="bb-box-cyan">
                    <div class="bb-box-title" style="color:#67e8f9;">Given Problem:</div>
                    <div class="bb-line" style="font-size:15px; font-weight:700; color:#ffffff; margin:6px 0;">
                      B × A = {(-2, 3), (-2, 4), (0, 3), (0, 4), (3, 3), (3, 4)}
                    </div>
                  </div>
                  <div class="bb-box-yellow" style="margin-top:10px;">
                    <div class="bb-box-title" style="color:#fde047;">Cartesian Product Rule (Key Concept):</div>
                    <div class="bb-line">• <b>B</b> = Set of all <b>first coordinates</b> of elements in B × A</div>
                    <div class="bb-line">• <b>A</b> = Set of all <b>second coordinates</b> of elements in B × A</div>
                  </div>
                `,
                audioScriptEn: "Step 1: Understand the given problem and Cartesian product rule. We are given B cross A. Since set B comes first, the first coordinates of every ordered pair belong to set B. Since set A comes second, the second coordinates belong to set A."
              },
              {
                stepNum: 2,
                badge: "② Find Set B (First Coordinates)",
                badgeEn: "② Find Set B (First Coordinates)",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Step 2: Determine Set B (First Coordinates)</div>
                  <div class="bb-box-blue">
                    <div class="bb-box-title" style="color:#93c5fd;">First elements from the ordered pairs of B × A:</div>
                    <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px; margin:8px 0; font-size:14px; font-weight:700;">
                      <div class="bb-pill-cyan">(-2, 3) ➔ <b style="color:#fde047;">-2</b></div>
                      <div class="bb-pill-cyan">(-2, 4) ➔ <b style="color:#fde047;">-2</b></div>
                      <div class="bb-pill-cyan">(0, 3) ➔ <b style="color:#fde047;">0</b></div>
                      <div class="bb-pill-cyan">(0, 4) ➔ <b style="color:#fde047;">0</b></div>
                      <div class="bb-pill-cyan">(3, 3) ➔ <b style="color:#fde047;">3</b></div>
                      <div class="bb-pill-cyan">(3, 4) ➔ <b style="color:#fde047;">3</b></div>
                    </div>
                  </div>
                  <div class="bb-box-green" style="margin-top:10px;">
                    <div class="bb-line">Elements in a set must not be repeated:</div>
                    <div class="bb-pill-magenta" style="font-size:18px; margin-top:6px; font-weight:800;">
                      B = {-2, 0, 3}
                    </div>
                  </div>
                `,
                audioScriptEn: "Step 2: Find set B. Looking at the first element in each ordered pair, we have: minus 2, minus 2, 0, 0, 3, and 3. In set theory, elements must not repeat. Therefore, set B equals minus 2, 0, and 3."
              },
              {
                stepNum: 3,
                badge: "③ Find Set A (Second Coordinates)",
                badgeEn: "③ Find Set A (Second Coordinates)",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Step 3: Determine Set A (Second Coordinates)</div>
                  <div class="bb-box-blue">
                    <div class="bb-box-title" style="color:#93c5fd;">Second elements from the ordered pairs of B × A:</div>
                    <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px; margin:8px 0; font-size:14px; font-weight:700;">
                      <div class="bb-pill-cyan">(-2, 3) ➔ <b style="color:#86efac;">3</b></div>
                      <div class="bb-pill-cyan">(-2, 4) ➔ <b style="color:#86efac;">4</b></div>
                      <div class="bb-pill-cyan">(0, 3) ➔ <b style="color:#86efac;">3</b></div>
                      <div class="bb-pill-cyan">(0, 4) ➔ <b style="color:#86efac;">4</b></div>
                      <div class="bb-pill-cyan">(3, 3) ➔ <b style="color:#86efac;">3</b></div>
                      <div class="bb-pill-cyan">(3, 4) ➔ <b style="color:#86efac;">4</b></div>
                    </div>
                  </div>
                  <div class="bb-box-green" style="margin-top:10px;">
                    <div class="bb-line">Second coordinates are only 3 and 4:</div>
                    <div class="bb-pill-magenta" style="font-size:18px; margin-top:6px; font-weight:800;">
                      A = {3, 4}
                    </div>
                  </div>
                `,
                audioScriptEn: "Step 3: Find set A. Looking at the second coordinates, we have 3, 4, 3, 4, 3, and 4. Removing repeated numbers, we get set A equals 3 and 4."
              },
              {
                stepNum: 4,
                badge: "④ Verification & Final Answer",
                badgeEn: "④ Verification & Final Answer",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Step 4: Verification and Final Answer Box</div>
                  <div class="bb-box-cyan">
                    <div class="bb-box-title" style="color:#67e8f9;">Verification Check:</div>
                    <div class="bb-line">• n(B) = 3 elements &nbsp;|&nbsp; n(A) = 2 elements</div>
                    <div class="bb-line">• n(B × A) = n(B) × n(A) = 3 × 2 = <b>6 ordered pairs</b> (Matches perfectly!)</div>
                  </div>
                  <div class="bb-box-yellow" style="margin-top:10px; border:2px solid #fde047;">
                    <div class="bb-box-title" style="color:#fde047; font-size:15px;">⭐ Final Answer:</div>
                    <div style="font-size:18px; font-weight:800; color:#ffffff; line-height:1.8; margin-top:6px;">
                      <div>• A = {3, 4}</div>
                      <div>• B = {-2, 0, 3}</div>
                    </div>
                  </div>
                `,
                audioScriptEn: "Step 4: Verify the result and write the final answer. Set B has 3 elements and set A has 2 elements. 3 times 2 equals 6 ordered pairs, exactly matching the problem statement. Box the final answer clearly: A equals 3 and 4, B equals minus 2, 0, and 3."
              }
            ]
          }
        },
        {
          id: "m_em_1_4",
          type: "5m",
          mark: "5 Marks",
          isImportant: true,
          diagramImg: "images/math_bb_ex1_4_en.png",
          diagramCaption: "Blackboard Solution: A × A = (B × B) ∩ (C × C) (Tap to Zoom)",
          q: "If A = {5,&nbsp;6}, B = {4,&nbsp;5,&nbsp;6}, C = {5,&nbsp;6,&nbsp;7}, show that:<br><div style='margin:6px 0 6px 18px; font-weight:700;'>A × A = (B × B) ∩ (C × C)</div>",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            Given sets:<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              A = {5,&nbsp;6}<br>
              B = {4,&nbsp;5,&nbsp;6}<br>
              C = {5,&nbsp;6,&nbsp;7}
            </div><br>
            <b>L.H.S = A × A:</b><br>
            <div style="margin:4px 0 4px 18px;">
              A × A = {5,&nbsp;6} × {5,&nbsp;6}<br>
              <b>A × A = {(5,&nbsp;5), (5,&nbsp;6), (6,&nbsp;5), (6,&nbsp;6)} ---- (1)</b>
            </div><br>
            <b>R.H.S = (B × B) ∩ (C × C):</b><br>
            <div style="margin:4px 0 4px 18px;">
              B × B = {4,&nbsp;5,&nbsp;6} × {4,&nbsp;5,&nbsp;6}<br>
              = {(4,4), (4,5), (4,6), (5,4), <b>(5,5), (5,6)</b>, (6,4), <b>(6,5), (6,6)</b>}<br><br>
              C × C = {5,&nbsp;6,&nbsp;7} × {5,&nbsp;6,&nbsp;7}<br>
              = {<b>(5,5), (5,6)</b>, (5,7), <b>(6,5), (6,6)</b>, (6,7), (7,5), (7,6), (7,7)}
            </div><br>
            Taking the common ordered pairs (Intersection):<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              (B × B) ∩ (C × C) = {(5,&nbsp;5), (5,&nbsp;6), (6,&nbsp;5), (6,&nbsp;6)} ---- (2)
            </div><br>
            From (1) and (2):<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              L.H.S = R.H.S<br>
              Hence, A × A = (B × B) ∩ (C × C) is proved.
            </div>
          </div>`,
          explanation: "Find the intersection of the two Cartesian products to show it equals A × A.",
          blackboard: {
            title: "Exercise 1.1 (Q4): Prove A × A = (B × B) ∩ (C × C)",
            engTitle: "Exercise 1.1 (Q4): Prove A × A = (B × B) ∩ (C × C)",
            fullBoardImg: "images/math_bb_ex1_4_en.png",
            steps: [
              {
                stepNum: 1,
                badge: "① Given Sets & What to Prove",
                badgeEn: "① Given Sets & What to Prove",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Step 1: Given Sets & Objective</div>
                  <div class="bb-box-yellow">
                    <div class="bb-box-title" style="color:#fde047;">Given Sets:</div>
                    <div class="bb-line" style="font-size:15px; font-weight:700; color:#ffffff; margin-top:6px;">
                      • A = {5, 6}<br>
                      • B = {4, 5, 6}<br>
                      • C = {5, 6, 7}
                    </div>
                  </div>
                  <div class="bb-box-cyan" style="margin-top:10px;">
                    <div class="bb-box-title" style="color:#67e8f9;">To Prove:</div>
                    <div class="bb-pill-magenta" style="font-size:17px; margin-top:6px; font-weight:800; text-align:center;">
                      A × A = (B × B) ∩ (C × C)
                    </div>
                  </div>
                `,
                audioScriptTa: "படி ஒன்று: கொடுக்கப்பட்ட கணங்கள் மற்றும் என்ன நிரூபிக்க வேண்டும் என்பதைப் புரிந்துகொள்வோம். கணங்கள் A சமம் ஐந்து, ஆறு; B சமம் நான்கு, ஐந்து, ஆறு; C சமம் ஐந்து, ஆறு, ஏழு எனத் தரப்பட்டுள்ளன. நாம் A பெருக்கல் A சமம் B பெருக்கல் B வெட்டு C பெருக்கல் C என நிரூபிக்க வேண்டும்.",
                audioScriptEn: "Step 1: Understand the given sets and what needs to be proved. We are given sets A equals 5, 6; B equals 4, 5, 6; and C equals 5, 6, 7. We need to prove that A cross A equals B cross B intersection C cross C."
              },
              {
                stepNum: 2,
                badge: "② Left Hand Side (L.H.S): Find A × A",
                badgeEn: "② Left Hand Side (L.H.S): Find A × A",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Step 2: Left Hand Side (L.H.S) = A × A</div>
                  <div class="bb-box-green">
                    <div class="bb-box-title" style="color:#86efac;">Cartesian Product A × A:</div>
                    <div class="bb-line" style="margin-top:6px;">
                      A × A = {5, 6} × {5, 6}
                    </div>
                    <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:8px; margin:10px 0; font-size:15px; font-weight:700;">
                      <div class="bb-pill-cyan">Pairs of 5 ➔ (5, 5), (5, 6)</div>
                      <div class="bb-pill-cyan">Pairs of 6 ➔ (6, 5), (6, 6)</div>
                    </div>
                    <div class="bb-box-yellow" style="margin-top:8px; border:2px solid #fde047;">
                      <div class="bb-line" style="font-size:16px; font-weight:800; color:#fef08a;">
                        A × A = {(5, 5), (5, 6), (6, 5), (6, 6)} &nbsp; <b style="color:#ffffff;">---- (1)</b>
                      </div>
                    </div>
                  </div>
                `,
                audioScriptTa: "படி இரண்டு: இடதுபக்கம் உள்ள A பெருக்கல் A-ஐக் கணக்கிடுவோம். ஐந்து, ஐந்து; ஐந்து, ஆறு; ஆறு, ஐந்து; ஆறு, ஆறு ஆகிய நான்கு வரிசைச் சோடிகள் கிடைக்கின்றன. இதனைச் சமன்பாடு ஒன்று என வைத்துக் கொள்வோம்.",
                audioScriptEn: "Step 2: Calculate the Left Hand Side, A cross A. Pairing elements of set A with itself gives four ordered pairs: 5,5; 5,6; 6,5; and 6,6. Label this as equation 1."
              },
              {
                stepNum: 3,
                badge: "③ Right Hand Side Part 1: Find B × B (9 pairs)",
                badgeEn: "③ Right Hand Side Part 1: Find B × B (9 pairs)",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Step 3: Right Hand Side - Find B × B</div>
                  <div class="bb-box-blue">
                    <div class="bb-box-title" style="color:#93c5fd;">B × B = {4, 5, 6} × {4, 5, 6} (3 × 3 = 9 pairs):</div>
                    <div style="font-size:14.5px; line-height:1.8; margin-top:8px; background:rgba(0,0,0,0.3); padding:10px 14px; border-radius:8px;">
                      <div>• Pairs of 4: (4, 4), (4, 5), (4, 6)</div>
                      <div>• Pairs of 5: (5, 4), <b style="color:#fde047; background:#0369a1; padding:2px 6px; border-radius:4px;">(5, 5)</b>, <b style="color:#fde047; background:#0369a1; padding:2px 6px; border-radius:4px;">(5, 6)</b></div>
                      <div>• Pairs of 6: (6, 4), <b style="color:#fde047; background:#0369a1; padding:2px 6px; border-radius:4px;">(6, 5)</b>, <b style="color:#fde047; background:#0369a1; padding:2px 6px; border-radius:4px;">(6, 6)</b></div>
                    </div>
                  </div>
                `,
                audioScriptTa: "படி மூன்று: வலதுபக்கத்தின் முதல் பகுதியான B பெருக்கல் B-ஐக் கணக்கிடுவோம். மூன்று பெருக்கல் மூன்று மொத்தம் ஒன்பது வரிசைச் சோடிகள் உருவாகும்.",
                audioScriptEn: "Step 3: Calculate B cross B for the Right Hand Side. Since set B has 3 elements, 3 times 3 gives 9 ordered pairs. Note the pairs 5,5; 5,6; 6,5; and 6,6."
              },
              {
                stepNum: 4,
                badge: "④ Right Hand Side Part 2: Find C × C (9 pairs)",
                badgeEn: "④ Right Hand Side Part 2: Find C × C (9 pairs)",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Step 4: Right Hand Side - Find C × C</div>
                  <div class="bb-box-blue">
                    <div class="bb-box-title" style="color:#93c5fd;">C × C = {5, 6, 7} × {5, 6, 7} (3 × 3 = 9 pairs):</div>
                    <div style="font-size:14.5px; line-height:1.8; margin-top:8px; background:rgba(0,0,0,0.3); padding:10px 14px; border-radius:8px;">
                      <div>• Pairs of 5: <b style="color:#fde047; background:#0369a1; padding:2px 6px; border-radius:4px;">(5, 5)</b>, <b style="color:#fde047; background:#0369a1; padding:2px 6px; border-radius:4px;">(5, 6)</b>, (5, 7)</div>
                      <div>• Pairs of 6: <b style="color:#fde047; background:#0369a1; padding:2px 6px; border-radius:4px;">(6, 5)</b>, <b style="color:#fde047; background:#0369a1; padding:2px 6px; border-radius:4px;">(6, 6)</b>, (6, 7)</div>
                      <div>• Pairs of 7: (7, 5), (7, 6), (7, 7)</div>
                    </div>
                  </div>
                `,
                audioScriptTa: "படி நான்கு: வலதுபக்கத்தின் அடுத்த பகுதியான C பெருக்கல் C-ஐக் கணக்கிடுவோம். C கணத்திலும் மொத்தம் ஒன்பது சோடிகள் கிடைக்கும்.",
                audioScriptEn: "Step 4: Compute C cross C. Set C has elements 5, 6, and 7, resulting in 9 ordered pairs. Notice again the occurrence of pairs 5,5; 5,6; 6,5; and 6,6."
              },
              {
                stepNum: 5,
                badge: "⑤ Intersection (B × B) ∩ (C × C): Common Pairs",
                badgeEn: "⑤ Intersection (B × B) ∩ (C × C): Common Pairs",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Step 5: Intersection (B × B) ∩ (C × C)</div>
                  <div class="bb-box-cyan">
                    <div class="bb-box-title" style="color:#67e8f9;">Symbol ∩ (Intersection): Ordered pairs common to both sets</div>
                    <div class="bb-line" style="font-size:14px; color:#cbd5e1; margin:6px 0;">
                      Pairs present in both B × B and C × C:
                    </div>
                    <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:8px; margin:8px 0; font-size:15px; font-weight:800;">
                      <div class="bb-pill-cyan">✔ (5, 5)</div>
                      <div class="bb-pill-cyan">✔ (5, 6)</div>
                      <div class="bb-pill-cyan">✔ (6, 5)</div>
                      <div class="bb-pill-cyan">✔ (6, 6)</div>
                    </div>
                    <div class="bb-box-green" style="margin-top:8px; border:2px solid #4ade80;">
                      <div class="bb-line" style="font-size:16px; font-weight:800; color:#86efac;">
                        (B × B) ∩ (C × C) = {(5, 5), (5, 6), (6, 5), (6, 6)} &nbsp; <b style="color:#ffffff;">---- (2)</b>
                      </div>
                    </div>
                  </div>
                `,
                audioScriptTa: "படி ஐந்து: இப்போது இரண்டிற்கும் வெட்டுக்கணம் காண்போம். B பெருக்கல் B மற்றும் C பெருக்கல் C ஆகிய இரண்டிலும் பொதுவான சோடிகள் ஐந்து, ஐந்து; ஐந்து, ஆறு; ஆறு, ஐந்து; ஆறு, ஆறு ஆகிய நான்கு சோடிகள் மட்டுமே. இதனைச் சமன்பாடு இரண்டு என வைத்துக் கொள்வோம்.",
                audioScriptEn: "Step 5: Find the intersection of B cross B and C cross C. Intersection means selecting only the ordered pairs common to both sets. The common pairs are 5,5; 5,6; 6,5; and 6,6. Label this equation 2."
              },
              {
                stepNum: 6,
                badge: "⑥ Conclusion & Final Proof (Hence Proved)",
                badgeEn: "⑥ Conclusion & Final Proof (Hence Proved)",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Step 6: Conclusion & Proof</div>
                  <div class="bb-box-yellow">
                    <div class="bb-box-title" style="color:#fde047;">From Equations (1) and (2):</div>
                    <div class="bb-line" style="line-height:1.8; margin:6px 0;">
                      • Eq (1): L.H.S = {(5, 5), (5, 6), (6, 5), (6, 6)}<br>
                      • Eq (2): R.H.S = {(5, 5), (5, 6), (6, 5), (6, 6)}
                    </div>
                    <div class="bb-line" style="font-size:16px; font-weight:800; color:#38bdf8;">
                      ∴ L.H.S = R.H.S
                    </div>
                  </div>
                  <div class="bb-box-green" style="margin-top:10px; border:2.5px solid #22c55e; text-align:center;">
                    <div class="bb-pill-magenta" style="font-size:20px; font-weight:900; color:#ffffff; padding:8px 16px;">
                      A × A = (B × B) ∩ (C × C)
                    </div>
                    <div style="font-size:18px; font-weight:800; color:#86efac; margin-top:8px;">
                      ✅ Hence Proved. ✓
                    </div>
                  </div>
                `,
                audioScriptTa: "படி ஆறு: சமன்பாடு ஒன்று மற்றும் சமன்பாடு இரண்டை ஒப்பிட்டுப் பாருங்கள். இரண்டின் விடைகளும் ஒரே மாதிரியாக உள்ளன. எனவே இடதுபக்கம் சமம் வலதுபக்கம். A பெருக்கல் A சமம் B பெருக்கல் B வெட்டு C பெருக்கல் C என்பது வெற்றிகரமாக நிரூபிக்கப்பட்டது.",
                audioScriptEn: "Step 6: Compare equations 1 and 2. Both sides contain exactly the same ordered pairs. Therefore, Left Hand Side equals Right Hand Side. Hence, A cross A equals B cross B intersection C cross C is proved. Box this final statement neatly to score full 5 marks in public exams."
              }
            ]
          }
        },
        {
          id: "m_em_1_5",
          type: "5m",
          mark: "5 Marks",
          examYear: "2024",
          examTag: "2024*",
          isImportant: true,
          q: "Let A = {x ∈ W | x < 2}, B = {x ∈ N | 1 < x ≤ 4} and<br><div style='margin:4px 0 6px 18px; font-weight:700;'><span class='math-set'>C = {3,&nbsp;5}</span>. Verify that:</div><div style='margin:6px 0 6px 18px; font-weight:700;'>A × (B ∪ C) = (A × B) ∪ (A × C)</div>",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            Writing the given sets in roster form:<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              • A = {0,&nbsp;1} (Whole numbers strictly less than 2)<br>
              • B = {2,&nbsp;3,&nbsp;4} (Natural numbers between 1 and 4)<br>
              • <span class="math-set">C = {3,&nbsp;5}</span>
            </div><br>
            <b>L.H.S = A × (B ∪ C):</b><br>
            <div style="margin:4px 0 4px 18px;">
              B ∪ C = {2,&nbsp;3,&nbsp;4} ∪ {3,&nbsp;5} = {2,&nbsp;3,&nbsp;4,&nbsp;5}<br>
              A × (B ∪ C) = {0,&nbsp;1} × {2,&nbsp;3,&nbsp;4,&nbsp;5}<br>
              <b>L.H.S = {(0, 2), (0, 3), (0, 4), (0, 5), (1, 2), (1, 3), (1, 4), (1, 5)} ---- (1)</b>
            </div><br>
            <b>R.H.S = (A × B) ∪ (A × C):</b><br>
            <div style="margin:4px 0 4px 18px;">
              A × B = {0,&nbsp;1} × {2,&nbsp;3,&nbsp;4}<br>
              = {(0, 2), (0, 3), (0, 4), (1, 2), (1, 3), (1, 4)}<br><br>
              A × C = {0,&nbsp;1} × {3,&nbsp;5}<br>
              = {(0, 3), (0, 5), (1, 3), (1, 5)}<br><br>
              (A × B) ∪ (A × C) = {(0, 2), (0, 3), (0, 4), (0, 5), (1, 2), (1, 3), (1, 4), (1, 5)} ---- (2)
            </div><br>
            From (1) and (2):<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              L.H.S = R.H.S<br>
              Hence, A × (B ∪ C) = (A × B) ∪ (A × C) is verified.
            </div>
          </div>`,
          explanation: "Cartesian product distributes over union of sets.",
          blackboard: {
            title: "Exercise 1.1: Cartesian Product & Distributive Law (7 Steps)",
            engTitle: "Exercise 1.1: Cartesian Product & Distributive Law (7 Steps)",
            fullBoardImg: "images/math_bb_ex1_1.jpg",
            steps: [
              {
                stepNum: 1,
                badge: "① Find A, B and C",
                badgeEn: "① Find A, B and C",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Step 1: Find A, B and C in roster form</div>
                  <div class="bb-grid-3">
                    <div class="bb-box-cyan">
                      <div class="bb-box-title">A = {x ∈ W | x &lt; 2}</div>
                      <div class="bb-box-sub">Whole numbers less than 2</div>
                      <div class="bb-pill-magenta">A = {0, 1}</div>
                    </div>
                    <div class="bb-box-blue">
                      <div class="bb-box-title">B = {x ∈ N | 1 &lt; x ≤ 4}</div>
                      <div class="bb-box-sub">Natural numbers 1 &lt; x ≤ 4</div>
                      <div class="bb-pill-magenta">B = {2, 3, 4}</div>
                    </div>
                    <div class="bb-box-green">
                      <div class="bb-box-title">C = {3, 5}</div>
                      <div class="bb-box-sub">Given Set</div>
                      <div class="bb-pill-magenta">C = {3, 5}</div>
                    </div>
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Step 1: Find A, B and C in roster form</div>
                  <div class="bb-grid-3">
                    <div class="bb-box-cyan">
                      <div class="bb-box-title">A = {x ∈ W | x &lt; 2}</div>
                      <div class="bb-box-sub">Whole numbers less than 2</div>
                      <div class="bb-pill-magenta">A = {0, 1}</div>
                    </div>
                    <div class="bb-box-blue">
                      <div class="bb-box-title">B = {x ∈ N | 1 &lt; x ≤ 4}</div>
                      <div class="bb-box-sub">Natural numbers 1 &lt; x ≤ 4</div>
                      <div class="bb-pill-magenta">B = {2, 3, 4}</div>
                    </div>
                    <div class="bb-box-green">
                      <div class="bb-box-title">C = {3, 5}</div>
                      <div class="bb-box-sub">Given Set</div>
                      <div class="bb-pill-magenta">C = {3, 5}</div>
                    </div>
                  </div>
                `,
                audioScriptTa: "Step 1: Find sets A, B, and C. Whole numbers less than 2 gives set A equals 0 and 1. Natural numbers between 1 and 4 gives set B equals 2, 3, and 4. Set C equals 3 and 5.",
                audioScriptEn: "Step 1: Find sets A, B, and C. Whole numbers less than 2 gives set A equals 0 and 1. Natural numbers between 1 and 4 gives set B equals 2, 3, and 4. Set C equals 3 and 5."
              },
              {
                stepNum: 2,
                badge: "② Find B ∪ C",
                badgeEn: "② Find B ∪ C",
                chalkHtml: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>B</b> = {2, 3, 4}, &nbsp; <b>C</b> = {3, 5}</div>
                    <div class="bb-line" style="margin-top:6px;">Combine all elements from both sets:</div>
                    <div class="bb-pill-magenta" style="font-size:16px; margin-top:8px;">B ∪ C = {2, 3, 4, 5}</div>
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>B</b> = {2, 3, 4}, &nbsp; <b>C</b> = {3, 5}</div>
                    <div class="bb-line" style="margin-top:6px;">Combine all elements from both sets:</div>
                    <div class="bb-pill-magenta" style="font-size:16px; margin-top:8px;">B ∪ C = {2, 3, 4, 5}</div>
                  </div>
                `,
                audioScriptTa: "Step 2: Find the union B union C. Combining all elements from B and C without repetition gives 2, 3, 4, and 5.",
                audioScriptEn: "Step 2: Find the union B union C. Combining all elements from B and C without repetition gives 2, 3, 4, and 5."
              },
              {
                stepNum: 3,
                badge: "③ Find A × (B ∪ C) [Left-Hand Side]",
                badgeEn: "③ Find A × (B ∪ C) [Left-Hand Side]",
                chalkHtml: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>A</b> = {0, 1}, &nbsp; <b>B ∪ C</b> = {2, 3, 4, 5}</div>
                    <div class="bb-line" style="margin-top:4px;">Pair each element of A with every element of B union C:</div>
                    <div class="bb-pill-magenta" style="margin-top:8px; line-height:1.7;">
                      A × (B ∪ C) = {(0, 2), (0, 3), (0, 4), (0, 5),<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1, 2), (1, 3), (1, 4), (1, 5)} &nbsp; <span style="color:#fde047; font-weight:800;">---- (1)</span>
                    </div>
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>A</b> = {0, 1}, &nbsp; <b>B ∪ C</b> = {2, 3, 4, 5}</div>
                    <div class="bb-line" style="margin-top:4px;">Pair each element of A with every element of B union C:</div>
                    <div class="bb-pill-magenta" style="margin-top:8px; line-height:1.7;">
                      A × (B ∪ C) = {(0, 2), (0, 3), (0, 4), (0, 5),<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1, 2), (1, 3), (1, 4), (1, 5)} &nbsp; <span style="color:#fde047; font-weight:800;">---- (1)</span>
                    </div>
                  </div>
                `,
                audioScriptTa: "Step 3: Find the left-hand side, A cross B union C. Pairing each element of A with every element of B union C yields 8 ordered pairs. Mark this as equation 1.",
                audioScriptEn: "Step 3: Find the left-hand side, A cross B union C. Pairing each element of A with every element of B union C yields 8 ordered pairs. Mark this as equation 1."
              },
              {
                stepNum: 4,
                badge: "④ Find A × B",
                badgeEn: "④ Find A × B",
                chalkHtml: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>A</b> = {0, 1}, &nbsp; <b>B</b> = {2, 3, 4}</div>
                    <div class="bb-line" style="margin-top:4px;">Cartesian product of A and B:</div>
                    <div class="bb-pill-magenta" style="margin-top:8px;">
                      A × B = {(0, 2), (0, 3), (0, 4), (1, 2), (1, 3), (1, 4)}
                    </div>
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>A</b> = {0, 1}, &nbsp; <b>B</b> = {2, 3, 4}</div>
                    <div class="bb-line" style="margin-top:4px;">Cartesian product of A and B:</div>
                    <div class="bb-pill-magenta" style="margin-top:8px;">
                      A × B = {(0, 2), (0, 3), (0, 4), (1, 2), (1, 3), (1, 4)}
                    </div>
                  </div>
                `,
                audioScriptTa: "Step 4: Find A cross B. Pairing elements of set A with set B gives 6 ordered pairs.",
                audioScriptEn: "Step 4: Find A cross B. Pairing elements of set A with set B gives 6 ordered pairs."
              },
              {
                stepNum: 5,
                badge: "⑤ Find A × C",
                badgeEn: "⑤ Find A × C",
                chalkHtml: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>A</b> = {0, 1}, &nbsp; <b>C</b> = {3, 5}</div>
                    <div class="bb-line" style="margin-top:4px;">Cartesian product of A and C:</div>
                    <div class="bb-pill-magenta" style="margin-top:8px;">
                      A × C = {(0, 3), (0, 5), (1, 3), (1, 5)}
                    </div>
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>A</b> = {0, 1}, &nbsp; <b>C</b> = {3, 5}</div>
                    <div class="bb-line" style="margin-top:4px;">Cartesian product of A and C:</div>
                    <div class="bb-pill-magenta" style="margin-top:8px;">
                      A × C = {(0, 3), (0, 5), (1, 3), (1, 5)}
                    </div>
                  </div>
                `,
                audioScriptTa: "Step 5: Find A cross C. Pairing elements of set A with set C gives 4 ordered pairs.",
                audioScriptEn: "Step 5: Find A cross C. Pairing elements of set A with set C gives 4 ordered pairs."
              },
              {
                stepNum: 6,
                badge: "⑥ Find (A × B) ∪ (A × C) [Right-Hand Side]",
                badgeEn: "⑥ Find (A × B) ∪ (A × C) [Right-Hand Side]",
                chalkHtml: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>A × B</b> = {(0, 2), (0, 3), (0, 4), (1, 2), (1, 3), (1, 4)}</div>
                    <div class="bb-line">• <b>A × C</b> = {(0, 3), (0, 5), (1, 3), (1, 5)}</div>
                    <div class="bb-line" style="margin-top:6px;">Taking the union of both sets:</div>
                    <div class="bb-pill-magenta" style="margin-top:8px; line-height:1.7;">
                      (A × B) ∪ (A × C) = {(0, 2), (0, 3), (0, 4), (0, 5),<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1, 2), (1, 3), (1, 4), (1, 5)} &nbsp; <span style="color:#fde047; font-weight:800;">---- (2)</span>
                    </div>
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>A × B</b> = {(0, 2), (0, 3), (0, 4), (1, 2), (1, 3), (1, 4)}</div>
                    <div class="bb-line">• <b>A × C</b> = {(0, 3), (0, 5), (1, 3), (1, 5)}</div>
                    <div class="bb-line" style="margin-top:6px;">Taking the union of both sets:</div>
                    <div class="bb-pill-magenta" style="margin-top:8px; line-height:1.7;">
                      (A × B) ∪ (A × C) = {(0, 2), (0, 3), (0, 4), (0, 5),<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1, 2), (1, 3), (1, 4), (1, 5)} &nbsp; <span style="color:#fde047; font-weight:800;">---- (2)</span>
                    </div>
                  </div>
                `,
                audioScriptTa: "Step 6: Find the union of A cross B and A cross C. Combining both sets gives 8 ordered pairs. Mark this as equation 2.",
                audioScriptEn: "Step 6: Find the union of A cross B and A cross C. Combining both sets gives 8 ordered pairs. Mark this as equation 2."
              },
              {
                stepNum: 7,
                badge: "⑦ Compare the two sides",
                badgeEn: "⑦ Compare the two sides",
                chalkHtml: `
                  <div class="bb-compare-container">
                    <div class="bb-compare-col">
                      <div class="bb-compare-title">Left-Hand Side (L.H.S)</div>
                      <div class="bb-pill-magenta" style="font-size:13px; line-height:1.6;">
                        A × (B ∪ C) =<br>{(0, 2), (0, 3), (0, 4), (0, 5),<br>(1, 2), (1, 3), (1, 4), (1, 5)}
                      </div>
                    </div>
                    <div class="bb-compare-eq">=</div>
                    <div class="bb-compare-col">
                      <div class="bb-compare-title">Right-Hand Side (R.H.S)</div>
                      <div class="bb-pill-magenta" style="font-size:13px; line-height:1.6;">
                        (A × B) ∪ (A × C) =<br>{(0, 2), (0, 3), (0, 4), (0, 5),<br>(1, 2), (1, 3), (1, 4), (1, 5)}
                      </div>
                    </div>
                  </div>
                  <div class="bb-banner-ribbon" style="margin-top:16px;">
                    Hence, A × (B ∪ C) = (A × B) ∪ (A × C) &nbsp; ✓
                  </div>
                  <div class="bb-sticky-note" style="margin-top:12px;">
                    💡 Identical ordered pairs are obtained on both sides. Hence the distributive law is verified!
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-compare-container">
                    <div class="bb-compare-col">
                      <div class="bb-compare-title">Left-Hand Side (L.H.S)</div>
                      <div class="bb-pill-magenta" style="font-size:13px; line-height:1.6;">
                        A × (B ∪ C) =<br>{(0, 2), (0, 3), (0, 4), (0, 5),<br>(1, 2), (1, 3), (1, 4), (1, 5)}
                      </div>
                    </div>
                    <div class="bb-compare-eq">=</div>
                    <div class="bb-compare-col">
                      <div class="bb-compare-title">Right-Hand Side (R.H.S)</div>
                      <div class="bb-pill-magenta" style="font-size:13px; line-height:1.6;">
                        (A × B) ∪ (A × C) =<br>{(0, 2), (0, 3), (0, 4), (0, 5),<br>(1, 2), (1, 3), (1, 4), (1, 5)}
                      </div>
                    </div>
                  </div>
                  <div class="bb-banner-ribbon" style="margin-top:16px;">
                    Hence, A × (B ∪ C) = (A × B) ∪ (A × C) &nbsp; ✓
                  </div>
                  <div class="bb-sticky-note" style="margin-top:12px;">
                    💡 Identical ordered pairs are obtained on both sides. Hence the distributive law is verified!
                  </div>
                `,
                audioScriptTa: "Step 7: Compare both sides. From equations 1 and 2, both sides have identical ordered pairs. L.H.S equals R.H.S. Hence, the distributive property is verified!",
                audioScriptEn: "Step 7: Compare both sides. From equations 1 and 2, both sides have identical ordered pairs. L.H.S equals R.H.S. Hence, the distributive property is verified!"
              }
            ]
          },
        },
        {
          id: "m_em_1_6",
          type: "5m",
          mark: "5 Marks",
          examYear: "2022",
          examTag: "2022*",
          isImportant: true,
          q: "Let A = {x ∈ W | x < 2}, B = {x ∈ N | 1 < x ≤ 4} and<br><div style='margin:4px 0 6px 18px; font-weight:700;'><span class='math-set'>C = {3,&nbsp;5}</span>. Verify that:</div><div style='margin:6px 0 6px 18px; font-weight:700;'>A × (B ∩ C) = (A × B) ∩ (A × C)</div>",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            Sets in roster form:<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              A = {0,&nbsp;1}<br>
              B = {2,&nbsp;3,&nbsp;4}<br>
              <span class="math-set">C = {3,&nbsp;5}</span>
            </div><br>
            <b>L.H.S = A × (B ∩ C):</b><br>
            <div style="margin:4px 0 4px 18px;">
              B ∩ C = {2,&nbsp;3,&nbsp;4} ∩ {3,&nbsp;5} = {3}<br>
              A × (B ∩ C) = {0,&nbsp;1} × {3}<br>
              <b>L.H.S = {(0,&nbsp;3), (1,&nbsp;3)} ---- (1)</b>
            </div><br>
            <b>R.H.S = (A × B) ∩ (A × C):</b><br>
            <div style="margin:4px 0 4px 18px;">
              A × B = {(0, 2), (0, 3), (0, 4), (1, 2), (1, 3), (1, 4)}<br>
              A × C = {(0, 3), (0, 5), (1, 3), (1, 5)}<br>
              Common ordered pairs (Intersection):<br>
              <b>(A × B) ∩ (A × C) = {(0,&nbsp;3), (1,&nbsp;3)} ---- (2)</b>
            </div><br>
            From (1) and (2):<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              L.H.S = R.H.S<br>
              Hence, A × (B ∩ C) = (A × B) ∩ (A × C) is verified.
            </div>
          </div>`,
          explanation: "Cartesian product distributes over intersection of sets.",
          blackboard: {
            title: "Exercise 1.1: Cartesian Product & Distributive Law over Intersection (6 Steps)",
            engTitle: "Exercise 1.1: Cartesian Product & Distributive Law over Intersection (6 Steps)",
            steps: [
              {
                stepNum: 1,
                badge: "① Find A, B and C",
                badgeEn: "① Find A, B and C",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Step 1: Find sets A, B, and C in roster form</div>
                  <div class="bb-grid-3">
                    <div class="bb-box-cyan">
                      <div class="bb-box-title">A = {x ∈ W | x &lt; 2}</div>
                      <div class="bb-box-sub">Whole numbers less than 2</div>
                      <div class="bb-pill-magenta">A = {0, 1}</div>
                    </div>
                    <div class="bb-box-blue">
                      <div class="bb-box-title">B = {x ∈ N | 1 &lt; x ≤ 4}</div>
                      <div class="bb-box-sub">Natural numbers 1 &lt; x ≤ 4</div>
                      <div class="bb-pill-magenta">B = {2, 3, 4}</div>
                    </div>
                    <div class="bb-box-green">
                      <div class="bb-box-title">C = {3, 5}</div>
                      <div class="bb-box-sub">Given Set</div>
                      <div class="bb-pill-magenta">C = {3, 5}</div>
                    </div>
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Step 1: Find sets A, B, and C in roster form</div>
                  <div class="bb-grid-3">
                    <div class="bb-box-cyan">
                      <div class="bb-box-title">A = {x ∈ W | x &lt; 2}</div>
                      <div class="bb-box-sub">Whole numbers less than 2</div>
                      <div class="bb-pill-magenta">A = {0, 1}</div>
                    </div>
                    <div class="bb-box-blue">
                      <div class="bb-box-title">B = {x ∈ N | 1 &lt; x ≤ 4}</div>
                      <div class="bb-box-sub">Natural numbers 1 &lt; x ≤ 4</div>
                      <div class="bb-pill-magenta">B = {2, 3, 4}</div>
                    </div>
                    <div class="bb-box-green">
                      <div class="bb-box-title">C = {3, 5}</div>
                      <div class="bb-box-sub">Given Set</div>
                      <div class="bb-pill-magenta">C = {3, 5}</div>
                    </div>
                  </div>
                `,
                audioScriptTa: "Step 1: Write sets A, B, and C in roster form. A equals 0 and 1. B equals 2, 3, and 4. C equals 3 and 5.",
                audioScriptEn: "Step 1: Write sets A, B, and C in roster form. A equals 0 and 1. B equals 2, 3, and 4. C equals 3 and 5."
              },
              {
                stepNum: 2,
                badge: "② Find B ∩ C (Intersection)",
                badgeEn: "② Find B ∩ C (Intersection)",
                chalkHtml: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>B</b> = {2, 3, 4}, &nbsp; <b>C</b> = {3, 5}</div>
                    <div class="bb-line" style="margin-top:6px;">Common elements in both sets:</div>
                    <div class="bb-pill-magenta" style="font-size:16px; margin-top:8px;">B ∩ C = {3}</div>
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>B</b> = {2, 3, 4}, &nbsp; <b>C</b> = {3, 5}</div>
                    <div class="bb-line" style="margin-top:6px;">Common elements in both sets:</div>
                    <div class="bb-pill-magenta" style="font-size:16px; margin-top:8px;">B ∩ C = {3}</div>
                  </div>
                `,
                audioScriptTa: "Step 2: Find B intersection C. The only common element between set B and set C is 3. So B intersection C equals 3.",
                audioScriptEn: "Step 2: Find B intersection C. The only common element between set B and set C is 3. So B intersection C equals 3."
              },
              {
                stepNum: 3,
                badge: "③ Find A × (B ∩ C) [Left-Hand Side]",
                badgeEn: "③ Find A × (B ∩ C) [Left-Hand Side]",
                chalkHtml: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>A</b> = {0, 1}, &nbsp; <b>B ∩ C</b> = {3}</div>
                    <div class="bb-line" style="margin-top:4px;">Pair each element of A with elements of B intersection C:</div>
                    <div class="bb-pill-magenta" style="margin-top:8px; font-size:15px;">
                      A × (B ∩ C) = {(0, 3), (1, 3)} &nbsp; <span style="color:#fde047; font-weight:800;">---- (1)</span>
                    </div>
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>A</b> = {0, 1}, &nbsp; <b>B ∩ C</b> = {3}</div>
                    <div class="bb-line" style="margin-top:4px;">Pair each element of A with elements of B intersection C:</div>
                    <div class="bb-pill-magenta" style="margin-top:8px; font-size:15px;">
                      A × (B ∩ C) = {(0, 3), (1, 3)} &nbsp; <span style="color:#fde047; font-weight:800;">---- (1)</span>
                    </div>
                  </div>
                `,
                audioScriptTa: "Step 3: Find Left Hand Side A cross B intersection C. Pairing elements gives ordered pairs (0, 3) and (1, 3). Mark this as equation 1.",
                audioScriptEn: "Step 3: Find Left Hand Side A cross B intersection C. Pairing elements gives ordered pairs (0, 3) and (1, 3). Mark this as equation 1."
              },
              {
                stepNum: 4,
                badge: "④ Find A × B and A × C",
                badgeEn: "④ Find A × B and A × C",
                chalkHtml: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>A × B</b> = {(0, 2), (0, 3), (0, 4), (1, 2), (1, 3), (1, 4)}</div>
                    <div class="bb-line" style="margin-top:6px;">• <b>A × C</b> = {(0, 3), (0, 5), (1, 3), (1, 5)}</div>
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>A × B</b> = {(0, 2), (0, 3), (0, 4), (1, 2), (1, 3), (1, 4)}</div>
                    <div class="bb-line" style="margin-top:6px;">• <b>A × C</b> = {(0, 3), (0, 5), (1, 3), (1, 5)}</div>
                  </div>
                `,
                audioScriptTa: "Step 4: Find the Cartesian products A cross B and A cross C.",
                audioScriptEn: "Step 4: Find the Cartesian products A cross B and A cross C."
              },
              {
                stepNum: 5,
                badge: "⑤ Find (A × B) ∩ (A × C) [Right-Hand Side]",
                badgeEn: "⑤ Find (A × B) ∩ (A × C) [Right-Hand Side]",
                chalkHtml: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">Common intersection pairs in both sets:</div>
                    <div class="bb-pill-magenta" style="margin-top:8px; font-size:15px;">
                      (A × B) ∩ (A × C) = {(0, 3), (1, 3)} &nbsp; <span style="color:#fde047; font-weight:800;">---- (2)</span>
                    </div>
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">Common intersection pairs in both sets:</div>
                    <div class="bb-pill-magenta" style="margin-top:8px; font-size:15px;">
                      (A × B) ∩ (A × C) = {(0, 3), (1, 3)} &nbsp; <span style="color:#fde047; font-weight:800;">---- (2)</span>
                    </div>
                  </div>
                `,
                audioScriptTa: "Step 5: Find the intersection of A cross B and A cross C. The common pairs are (0, 3) and (1, 3). Mark this as equation 2.",
                audioScriptEn: "Step 5: Find the intersection of A cross B and A cross C. The common pairs are (0, 3) and (1, 3). Mark this as equation 2."
              },
              {
                stepNum: 6,
                badge: "⑥ Compare both sides",
                badgeEn: "⑥ Compare both sides",
                chalkHtml: `
                  <div class="bb-compare-container">
                    <div class="bb-compare-col">
                      <div class="bb-compare-title">Left-Hand Side (L.H.S)</div>
                      <div class="bb-pill-magenta">{(0, 3), (1, 3)}</div>
                    </div>
                    <div class="bb-compare-eq">=</div>
                    <div class="bb-compare-col">
                      <div class="bb-compare-title">Right-Hand Side (R.H.S)</div>
                      <div class="bb-pill-magenta">{(0, 3), (1, 3)}</div>
                    </div>
                  </div>
                  <div class="bb-banner-ribbon" style="margin-top:16px;">
                    Hence, A × (B ∩ C) = (A × B) ∩ (A × C) &nbsp; ✓
                  </div>
                  <div class="bb-sticky-note" style="margin-top:12px;">
                    💡 From (1) and (2), L.H.S equals R.H.S. Hence verified!
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-compare-container">
                    <div class="bb-compare-col">
                      <div class="bb-compare-title">Left-Hand Side (L.H.S)</div>
                      <div class="bb-pill-magenta">{(0, 3), (1, 3)}</div>
                    </div>
                    <div class="bb-compare-eq">=</div>
                    <div class="bb-compare-col">
                      <div class="bb-compare-title">Right-Hand Side (R.H.S)</div>
                      <div class="bb-pill-magenta">{(0, 3), (1, 3)}</div>
                    </div>
                  </div>
                  <div class="bb-banner-ribbon" style="margin-top:16px;">
                    Hence, A × (B ∩ C) = (A × B) ∩ (A × C) &nbsp; ✓
                  </div>
                  <div class="bb-sticky-note" style="margin-top:12px;">
                    💡 From (1) and (2), L.H.S equals R.H.S. Hence verified!
                  </div>
                `,
                audioScriptTa: "Step 6: Comparing equations 1 and 2, both sides have identical ordered pairs. L.H.S equals R.H.S. Hence verified!",
                audioScriptEn: "Step 6: Comparing equations 1 and 2, both sides have identical ordered pairs. L.H.S equals R.H.S. Hence verified!"
              }
            ]
          }
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 2: Relations (Exercise 1.2)
    // -------------------------------------------------------------
    {
      id: "sec_em_2",
      title: "Exercise 1.2: Relations, Domain and Range",
      author: "Chapter 1: Relations and Functions",
      questions: [
        {
          id: "m_em_2_1",
          type: "2m",
          mark: "2 Marks",
          q: "Let A = {1,&nbsp;2,&nbsp;3,&nbsp;7} and B = {3,&nbsp;0,&nbsp;-1,&nbsp;7}. Which of the following are relations from A to B?<br><div style='margin:6px 0 6px 18px;'>1. R₁ = {(2,&nbsp;1), (7,&nbsp;1)}<br>2. R₂ = {(-1,&nbsp;1)}<br>3. R₃ = {(2,&nbsp;-1), (7,&nbsp;7), (1,&nbsp;3)}</div>",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            <div style="margin:4px 0 4px 18px;">
              A × B = {(1,3), (1,0), (1,-1), (1,7), (2,3), (2,0), (2,-1), (2,7), (3,3), (3,0), (3,-1), (3,7), (7,3), (7,0), (7,-1), (7,7)}
            </div><br>
            <b>1. R₁ = {(2, 1), (7, 1)}:</b><br>
            <div style="margin:4px 0 4px 18px;">
              Here 1 ∉ B. So (2, 1) ∉ A × B.<br>
              Therefore, R₁ is not a subset of A × B.<br>
              <b>Hence, R₁ is not a relation.</b>
            </div><br>
            <b>2. R₂ = {(-1, 1)}:</b><br>
            <div style="margin:4px 0 4px 18px;">
              Here -1 ∉ A and 1 ∉ B. So (-1, 1) ∉ A × B.<br>
              <b>Hence, R₂ is not a relation.</b>
            </div><br>
            <b>3. R₃ = {(2, -1), (7, 7), (1, 3)}:</b><br>
            <div style="margin:4px 0 4px 18px;">
              All ordered pairs belong to A × B (R₃ ⊆ A × B).<br>
              <b>Hence, R₃ is a relation from A to B.</b>
            </div>
          </div>`,
          explanation: "A subset of the Cartesian product A × B is called a relation from A to B."
        },
        {
          id: "m_em_2_2",
          videoUrl: "https://youtu.be/zyRPNDJQD0Q",
          type: "2m",
          mark: "2 Marks",
          examYear: "2023",
          examTag: "2023*",
          isImportant: true,
          q: "A relation R is given by {(x, y) | y = x + 3, x ∈ {0,&nbsp;1,&nbsp;2,&nbsp;3,&nbsp;4,&nbsp;5}}. Determine its Domain and Range.",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            Given equation: y = x + 3<br>
            <div style="margin:4px 0 4px 18px;">
              • For x = 0 ⇒ y = 0 + 3 = 3 ⇒ (0, 3)<br>
              • For x = 1 ⇒ y = 1 + 3 = 4 ⇒ (1, 4)<br>
              • For x = 2 ⇒ y = 2 + 3 = 5 ⇒ (2, 5)<br>
              • For x = 3 ⇒ y = 3 + 3 = 6 ⇒ (3, 6)<br>
              • For x = 4 ⇒ y = 4 + 3 = 7 ⇒ (4, 7)<br>
              • For x = 5 ⇒ y = 5 + 3 = 8 ⇒ (5, 8)
            </div><br>
            Relation in roster form:<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              R = {(0,&nbsp;3), (1,&nbsp;4), (2,&nbsp;5), (3,&nbsp;6), (4,&nbsp;7), (5,&nbsp;8)}
            </div><br>
            <b>Domain of R = {0,&nbsp;1,&nbsp;2,&nbsp;3,&nbsp;4,&nbsp;5}</b><br>
            <b>Range of R = {3,&nbsp;4,&nbsp;5,&nbsp;6,&nbsp;7,&nbsp;8}</b>
          </div>`,
          explanation: "Domain contains all first elements and Range contains all second elements of the relation.",
          blackboard: {
            title: "Exercise 1.2 (Q3): Finding Domain and Range of Relation R",
            engTitle: "Exercise 1.2 (Q3): Finding Domain and Range of Relation R",
            steps: [
              {
                stepNum: 1,
                badge: "① Given Equation & Domain Values",
                badgeEn: "① Given Equation & Domain Values",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Step 1: Given Condition & Permissible Values of x</div>
                  <div class="bb-box-cyan">
                    <div class="bb-box-title" style="color:#67e8f9;">Given Rule (Equation):</div>
                    <div class="bb-line" style="font-size:16px; font-weight:800; color:#fde047; margin:6px 0;">
                      y = x + 3
                    </div>
                    <div class="bb-line" style="font-size:15px; font-weight:700; color:#ffffff;">
                      where x ∈ {0, 1, 2, 3, 4, 5}
                    </div>
                  </div>
                  <div class="bb-box-blue" style="margin-top:10px;">
                    <div class="bb-line">Substitute each value of x into y = x + 3 to compute y and form ordered pairs (x, y).</div>
                  </div>
                `,
                audioScriptEn: "Step 1: Write down the given relation condition and values of x. The equation is y equals x plus 3, with x belonging to the set 0, 1, 2, 3, 4, and 5. We will substitute each value of x into the equation to find y."
              },
              {
                stepNum: 2,
                badge: "② Compute y & Ordered Pairs",
                badgeEn: "② Compute y & Ordered Pairs",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Step 2: Calculate y for each x</div>
                  <div class="bb-grid-2">
                    <div class="bb-box-cyan">
                      <div class="bb-line">• For x = 0: y = 0 + 3 = <b>3</b> ➔ <b style="color:#fde047;">(0, 3)</b></div>
                      <div class="bb-line" style="margin-top:6px;">• For x = 1: y = 1 + 3 = <b>4</b> ➔ <b style="color:#fde047;">(1, 4)</b></div>
                      <div class="bb-line" style="margin-top:6px;">• For x = 2: y = 2 + 3 = <b>5</b> ➔ <b style="color:#fde047;">(2, 5)</b></div>
                    </div>
                    <div class="bb-box-cyan">
                      <div class="bb-line">• For x = 3: y = 3 + 3 = <b>6</b> ➔ <b style="color:#fde047;">(3, 6)</b></div>
                      <div class="bb-line" style="margin-top:6px;">• For x = 4: y = 4 + 3 = <b>7</b> ➔ <b style="color:#fde047;">(4, 7)</b></div>
                      <div class="bb-line" style="margin-top:6px;">• For x = 5: y = 5 + 3 = <b>8</b> ➔ <b style="color:#fde047;">(5, 8)</b></div>
                    </div>
                  </div>
                `,
                audioScriptEn: "Step 2: Substitute each x into y equals x plus 3. For x equals 0, y is 3, giving pair 0 comma 3. For x equals 1, y is 4, pair 1 comma 4. For x equals 2, y is 5, pair 2 comma 5. For x equals 3, y is 6, pair 3 comma 6. For x equals 4, y is 7, pair 4 comma 7. For x equals 5, y is 8, pair 5 comma 8."
              },
              {
                stepNum: 3,
                badge: "③ Relation R in Roster Form",
                badgeEn: "③ Relation R in Roster Form",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Step 3: Relation R in Roster Form</div>
                  <div class="bb-box-green">
                    <div class="bb-box-title" style="color:#86efac;">Collect all computed ordered pairs:</div>
                    <div class="bb-pill-magenta" style="font-size:16px; margin:8px 0; font-weight:800; line-height:1.7;">
                      R = {(0, 3), (1, 4), (2, 5), (3, 6), (4, 7), (5, 8)}
                    </div>
                  </div>
                `,
                audioScriptEn: "Step 3: Write relation R as a set of ordered pairs. R equals set of pairs: 0 comma 3, 1 comma 4, 2 comma 5, 3 comma 6, 4 comma 7, and 5 comma 8."
              },
              {
                stepNum: 4,
                badge: "④ Determine the Domain",
                badgeEn: "④ Determine the Domain",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Step 4: Find the Domain of R</div>
                  <div class="bb-box-yellow">
                    <div class="bb-box-title" style="color:#fde047;">Definition of Domain:</div>
                    <div class="bb-line">The set of all <b>first coordinates</b> of the ordered pairs in relation R.</div>
                    <div class="bb-line" style="margin-top:6px;">First coordinates: <b>0, 1, 2, 3, 4, 5</b></div>
                  </div>
                  <div class="bb-box-green" style="margin-top:10px;">
                    <div class="bb-pill-magenta" style="font-size:18px; font-weight:800;">
                      ⭐ Domain = {0, 1, 2, 3, 4, 5}
                    </div>
                  </div>
                `,
                audioScriptEn: "Step 4: Find the domain. The domain consists of all first coordinates from the ordered pairs in relation R. These first coordinates are 0, 1, 2, 3, 4, and 5. Therefore, Domain equals set 0, 1, 2, 3, 4, and 5."
              },
              {
                stepNum: 5,
                badge: "⑤ Determine the Range & Final Answer",
                badgeEn: "⑤ Determine the Range & Final Answer",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Step 5: Find the Range of R and Box the Answer</div>
                  <div class="bb-box-yellow">
                    <div class="bb-box-title" style="color:#fde047;">Definition of Range:</div>
                    <div class="bb-line">The set of all <b>second coordinates</b> of the ordered pairs in relation R.</div>
                    <div class="bb-line" style="margin-top:6px;">Second coordinates: <b>3, 4, 5, 6, 7, 8</b></div>
                  </div>
                  <div class="bb-box-cyan" style="margin-top:10px; border:2px solid #38bdf8;">
                    <div class="bb-box-title" style="color:#38bdf8; font-size:15px;">⭐ Final Answer:</div>
                    <div style="font-size:17px; font-weight:800; color:#ffffff; line-height:1.8; margin-top:6px;">
                      <div>• Domain = {0, 1, 2, 3, 4, 5}</div>
                      <div>• Range = {3, 4, 5, 6, 7, 8}</div>
                    </div>
                  </div>
                `,
                audioScriptEn: "Step 5: Find the range and write the final boxed answer. The range is the set of all second coordinates in relation R, which are 3, 4, 5, 6, 7, and 8. Therefore, Range equals set 3, 4, 5, 6, 7, and 8. Box both answers cleanly for full 2 marks."
              }
            ]
          }
        },
        {
          id: "m_em_2_3",
          type: "5m",
          mark: "5 Marks",
          examYear: "2020",
          examTag: "2020*",
          isImportant: true,
          q: "Represent the relation by: (1) An Arrow diagram (2) A Graph (3) A Set in roster form:<br><div style='margin:6px 0 6px 18px; font-weight:700;'>{(x, y) | x = 2y, x ∈ {2,&nbsp;3,&nbsp;4,&nbsp;5}, y ∈ {1,&nbsp;2,&nbsp;3,&nbsp;4}}</div>",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            Given formula: x = 2y ⇒ y = x / 2<br>
            Given domain elements x ∈ {2,&nbsp;3,&nbsp;4,&nbsp;5} and co-domain elements y ∈ {1,&nbsp;2,&nbsp;3,&nbsp;4}:<br>
            <div style="margin:4px 0 4px 18px;">
              • For x = 2 ⇒ y = 2 / 2 = 1 ∈ y ⇒ <b>(2, 1)</b><br>
              • For x = 3 ⇒ y = 3 / 2 = 1.5 ∉ y (Not in set y)<br>
              • For x = 4 ⇒ y = 4 / 2 = 2 ∈ y ⇒ <b>(4, 2)</b><br>
              • For x = 5 ⇒ y = 5 / 2 = 2.5 ∉ y (Not in set y)
            </div><br>
            <b>1. Set in Roster Form:</b><br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              R = {(2,&nbsp;1), (4,&nbsp;2)}
            </div><br>
            <b>2. Arrow Diagram:</b> See Diagram (i) below (arrows connect 2 ➔ 1 and 4 ➔ 2).<br><br>
            <b>3. Graph:</b> See Cartesian Graph (ii) below (points (2, 1) and (4, 2) plotted on coordinate axes).
          </div>`,
          explanation: "Only elements satisfying the condition x = 2y form pairs in the relation.",
          diagramSvg: `<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(290px, 1fr)); gap:14px; width:100%; margin:8px 0;">
            <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:12px; box-shadow:0 1px 4px rgba(0,0,0,0.04); text-align:center;">
              <div style="font-size:12.5px; font-weight:700; color:#1e3a8a; margin-bottom:8px;">🎯 (i) Arrow Diagram</div>
              <svg viewBox="0 0 380 255" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:8px; display:block;">
                <defs>
                  <marker id="arrowhead_em_q1" markerWidth="8" markerHeight="7" refX="7" refY="3.5" orient="auto">
                    <polygon points="0 0, 8 3.5, 0 7" fill="#dc2626"/>
                  </marker>
                </defs>
                <text x="190" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e3a8a">Relation: x = 2y</text>
                
                <!-- Ellipse X -->
                <ellipse cx="85" cy="132" rx="52" ry="85" fill="#eff6ff" stroke="#2563eb" stroke-width="2.2"/>
                <text x="85" y="42" text-anchor="middle" font-size="13" font-weight="bold" fill="#1d4ed8">X (Domain)</text>
                
                <text x="64" y="77" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e3a8a">2</text>
                <circle cx="112" cy="72" r="4" fill="#1e40af"/>

                <text x="64" y="117" text-anchor="middle" font-size="14" font-weight="600" fill="#64748b">3</text>
                <circle cx="112" cy="112" r="4" fill="#94a3b8"/>

                <text x="64" y="157" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e3a8a">4</text>
                <circle cx="112" cy="152" r="4" fill="#1e40af"/>

                <text x="64" y="197" text-anchor="middle" font-size="14" font-weight="600" fill="#64748b">5</text>
                <circle cx="112" cy="192" r="4" fill="#94a3b8"/>

                <!-- Ellipse Y -->
                <ellipse cx="295" cy="132" rx="52" ry="85" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.2"/>
                <text x="295" y="42" text-anchor="middle" font-size="13" font-weight="bold" fill="#15803d">Y (Co-domain)</text>

                <circle cx="268" cy="72" r="4" fill="#15803d"/>
                <text x="314" y="77" text-anchor="middle" font-size="14" font-weight="bold" fill="#14532d">1</text>

                <circle cx="268" cy="112" r="4" fill="#15803d"/>
                <text x="314" y="117" text-anchor="middle" font-size="14" font-weight="bold" fill="#14532d">2</text>

                <circle cx="268" cy="152" r="4" fill="#94a3b8"/>
                <text x="314" y="157" text-anchor="middle" font-size="14" font-weight="600" fill="#64748b">3</text>

                <circle cx="268" cy="192" r="4" fill="#94a3b8"/>
                <text x="314" y="197" text-anchor="middle" font-size="14" font-weight="600" fill="#64748b">4</text>

                <!-- Arrows -->
                <line x1="116" y1="72" x2="260" y2="72" stroke="#dc2626" stroke-width="2.2" marker-end="url(#arrowhead_em_q1)"/>
                <line x1="116" y1="152" x2="260" y2="114" stroke="#dc2626" stroke-width="2.2" marker-end="url(#arrowhead_em_q1)"/>

                <rect x="120" y="226" width="140" height="20" rx="10" fill="#ecfdf5" stroke="#a7f3d0"/>
                <text x="190" y="240" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#047857">Range = {1, 2}</text>
              </svg>
            </div>

            <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:12px; box-shadow:0 1px 4px rgba(0,0,0,0.04); text-align:center;">
              <div style="font-size:12.5px; font-weight:700; color:#1e3a8a; margin-bottom:8px;">📊 (ii) Cartesian Graph</div>
              <svg viewBox="0 0 380 255" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:8px; display:block;">
                <text x="190" y="18" text-anchor="middle" font-size="11" font-weight="600" fill="#475569">Scale: 1 unit = 1 grid</text>

                <!-- Grid -->
                <line x1="55" y1="53" x2="340" y2="53" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="55" y1="91" x2="340" y2="91" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="55" y1="129" x2="340" y2="129" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="55" y1="167" x2="340" y2="167" stroke="#e2e8f0" stroke-width="1"/>

                <line x1="101" y1="40" x2="101" y2="205" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="147" y1="40" x2="147" y2="205" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="193" y1="40" x2="193" y2="205" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="239" y1="40" x2="239" y2="205" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="285" y1="40" x2="285" y2="205" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="331" y1="40" x2="331" y2="205" stroke="#e2e8f0" stroke-width="1"/>

                <!-- Relation Guideline: x = 2y -->
                <line x1="55" y1="205" x2="331" y2="91" stroke="#3b82f6" stroke-width="1.8" stroke-dasharray="4,3"/>
                <text x="330" y="82" font-size="10.5" font-weight="bold" fill="#2563eb" text-anchor="end">x = 2y</text>

                <!-- Projections -->
                <line x1="147" y1="205" x2="147" y2="167" stroke="#dc2626" stroke-width="1.4" stroke-dasharray="3,3"/>
                <line x1="55" y1="167" x2="147" y2="167" stroke="#dc2626" stroke-width="1.4" stroke-dasharray="3,3"/>

                <line x1="239" y1="205" x2="239" y2="129" stroke="#dc2626" stroke-width="1.4" stroke-dasharray="3,3"/>
                <line x1="55" y1="129" x2="239" y2="129" stroke="#dc2626" stroke-width="1.4" stroke-dasharray="3,3"/>

                <!-- Axes -->
                <line x1="35" y1="205" x2="355" y2="205" stroke="#1e293b" stroke-width="2"/>
                <polygon points="355 201, 363 205, 355 209" fill="#1e293b"/>
                <text x="368" y="209" font-size="12" font-weight="bold" fill="#1e293b">X</text>
                <text x="22" y="209" font-size="12" font-weight="bold" fill="#64748b">X'</text>

                <line x1="55" y1="225" x2="55" y2="35" stroke="#1e293b" stroke-width="2"/>
                <polygon points="51 35, 55 27, 59 35" fill="#1e293b"/>
                <text x="55" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">Y</text>
                <text x="55" y="238" text-anchor="middle" font-size="12" font-weight="bold" fill="#64748b">Y'</text>

                <text x="44" y="219" font-size="11" font-weight="bold" fill="#475569">O</text>

                <!-- Numbers -->
                <text x="101" y="221" text-anchor="middle" font-size="11" fill="#475569">1</text>
                <text x="147" y="221" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">2</text>
                <text x="193" y="221" text-anchor="middle" font-size="11" fill="#475569">3</text>
                <text x="239" y="221" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">4</text>
                <text x="285" y="221" text-anchor="middle" font-size="11" fill="#475569">5</text>
                <text x="331" y="221" text-anchor="middle" font-size="11" fill="#475569">6</text>

                <text x="44" y="171" text-anchor="end" font-size="11" font-weight="bold" fill="#dc2626">1</text>
                <text x="44" y="133" text-anchor="end" font-size="11" font-weight="bold" fill="#dc2626">2</text>
                <text x="44" y="95" text-anchor="end" font-size="11" fill="#475569">3</text>
                <text x="44" y="57" text-anchor="end" font-size="11" fill="#475569">4</text>

                <!-- Points -->
                <circle cx="147" cy="167" r="5" fill="#dc2626" stroke="#ffffff" stroke-width="2"/>
                <rect x="156" y="154" width="46" height="20" rx="4" fill="#fef2f2" stroke="#ef4444" stroke-width="1.2"/>
                <text x="179" y="168" text-anchor="middle" font-size="11" font-weight="bold" fill="#b91c1c">(2, 1)</text>

                <circle cx="239" cy="129" r="5" fill="#dc2626" stroke="#ffffff" stroke-width="2"/>
                <rect x="248" y="116" width="46" height="20" rx="4" fill="#fef2f2" stroke="#ef4444" stroke-width="1.2"/>
                <text x="271" y="130" text-anchor="middle" font-size="11" font-weight="bold" fill="#b91c1c">(4, 2)</text>
              </svg>
            </div>
          </div>`,
          diagramCaption: "Diagrams: (i) Arrow Diagram for Relation x = 2y and (ii) Cartesian Graph of Points (2, 1), (4, 2)"
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 3: Functions (Exercise 1.3)
    // -------------------------------------------------------------
    {
      id: "sec_em_3",
      title: "Exercise 1.3: Functions and Function Values",
      author: "Chapter 1: Relations and Functions",
      questions: [
        {
          id: "m_em_3_1",
          videoUrl: "https://youtu.be/p_3GBkMwmBo",
          type: "2m",
          mark: "2 Marks",
          examYear: "2023",
          examTag: "2023*",
          isImportant: true,
          q: "Let f = {(x, y) | x, y ∈ N and y = 2x} be a relation on N. Find the Domain, Co-domain and Range. Is this relation a function?",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            Given: Natural numbers N = {1,&nbsp;2,&nbsp;3,&nbsp;4,&nbsp;5,&nbsp;...} and y = 2x.<br>
            <div style="margin:4px 0 4px 18px;">
              • For x = 1 ⇒ y = 2(1) = 2 ⇒ (1, 2)<br>
              • For x = 2 ⇒ y = 2(2) = 4 ⇒ (2, 4)<br>
              • For x = 3 ⇒ y = 2(3) = 6 ⇒ (3, 6)<br>
              • For x = 4 ⇒ y = 2(4) = 8 ⇒ (4, 8)
            </div><br>
            In roster form:<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              f = {(1,&nbsp;2), (2,&nbsp;4), (3,&nbsp;6), (4,&nbsp;8), ...}
            </div><br>
            1. <b>Domain</b> = N = {1,&nbsp;2,&nbsp;3,&nbsp;4,&nbsp;...}<br>
            2. <b>Co-domain</b> = N = {1,&nbsp;2,&nbsp;3,&nbsp;4,&nbsp;...}<br>
            3. <b>Range</b> = {2,&nbsp;4,&nbsp;6,&nbsp;8,&nbsp;...} (Set of all even natural numbers)<br><br>
            <b>Is it a Function?</b><br>
            Every element x ∈ N has one and only one unique image y ∈ N.<br>
            <b>Therefore, this relation is a function.</b>
          </div>`,
          explanation: "Since each input has exactly one output, it satisfies the definition of a function."
        },
        {
          id: "m_em_3_2",
          type: "2m",
          mark: "2 Marks",
          q: "A function f is defined by f(x) = x² - 5x + 6, calculate: (1) f(-1) and (2) f(2a).",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            Given formula: f(x) = x² - 5x + 6<br><br>
            <b>1. f(-1):</b><br>
            <div style="margin:4px 0 4px 18px;">
              f(-1) = (-1)² - 5(-1) + 6<br>
              f(-1) = 1 + 5 + 6 = <b>12</b>
            </div><br>
            <b>2. f(2a):</b><br>
            <div style="margin:4px 0 4px 18px;">
              f(2a) = (2a)² - 5(2a) + 6<br>
              f(2a) = <b>4a² - 10a + 6</b>
            </div>
          </div>`,
          explanation: "Substitute -1 and 2a into the algebraic expression for x and simplify."
        },
        {
          id: "m_em_3_3",
          type: "5m",
          mark: "5 Marks",
          examYear: "2024",
          examTag: "2024*",
          isImportant: true,
          q: "A function f(x) = 2x - 3. Find:<br><div style='margin:6px 0 6px 18px;'>1. [f(0) + f(1)] / 2<br>2. x such that f(x) = 0<br>3. x such that f(x) = x<br>4. x such that f(x) = f(1 - x).</div>",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            Given function: f(x) = 2x - 3<br><br>
            <b>1. [f(0) + f(1)] / 2:</b><br>
            <div style="margin:4px 0 4px 18px;">
              f(0) = 2(0) - 3 = -3<br>
              f(1) = 2(1) - 3 = 2 - 3 = -1<br>
              [f(0) + f(1)] / 2 = [-3 + (-1)] / 2 = -4 / 2 = <b>-2</b>
            </div><br>
            <b>2. f(x) = 0:</b><br>
            <div style="margin:4px 0 4px 18px;">
              2x - 3 = 0 ⇒ 2x = 3 ⇒ <b>x = 3 / 2</b>
            </div><br>
            <b>3. f(x) = x:</b><br>
            <div style="margin:4px 0 4px 18px;">
              2x - 3 = x ⇒ 2x - x = 3 ⇒ <b>x = 3</b>
            </div><br>
            <b>4. f(x) = f(1 - x):</b><br>
            <div style="margin:4px 0 4px 18px;">
              f(1 - x) = 2(1 - x) - 3 = 2 - 2x - 3 = -2x - 1<br>
              Now, f(x) = f(1 - x)<br>
              2x - 3 = -2x - 1<br>
              2x + 2x = -1 + 3<br>
              4x = 2 ⇒ x = 2 / 4 ⇒ <b>x = 1 / 2</b>
            </div>
          </div>`,
          explanation: "Equate the function expressions to solve for x algebraically.",
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 4: Types of Functions (Exercise 1.4)
    // -------------------------------------------------------------
    {
      id: "sec_em_4",
      title: "Exercise 1.4: Types of Functions and Graphic Tests",
      author: "Chapter 1: Relations and Functions",
      questions: [
        {
          id: "m_em_4_1",
          type: "2m",
          mark: "2 Marks",
          q: "State the Vertical Line Test for functions.",
          ans: `<div style="line-height:1.8;">
            <b>Statement:</b><br>
            A curve on the coordinate plane represents a <b>function</b> if every vertical line intersects the curve in <b>at most one point</b>.<br><br>
            • If any vertical line intersects the curve at more than one point, then the curve <b>does not represent a function</b>.
          </div>`,
          explanation: "A vertical line test checks whether an input value maps to more than one output value."
        },
        {
          id: "m_em_4_2",
          type: "2m",
          mark: "2 Marks",
          q: "State the Horizontal Line Test for One-to-One functions.",
          ans: `<div style="line-height:1.8;">
            <b>Statement:</b><br>
            A curve on the coordinate plane represents a <b>One-to-One (Injective) function</b> if every horizontal line intersects the curve in <b>at most one point</b>.<br><br>
            • If any horizontal line intersects the curve at more than one point, then the function is <b>not one-to-one</b> (it is many-to-one).
          </div>`,
          explanation: "A horizontal line test checks whether two distinct inputs produce the same output."
        },
        {
          id: "m_em_4_3",
          type: "5m",
          mark: "5 Marks",
          examYear: "2022",
          examTag: "2022*",
          isImportant: true,
          q: "Let f: A ➔ B be a function defined by f(x) = (x / 2) - 1, where A = {2,&nbsp;4,&nbsp;6,&nbsp;10,&nbsp;12}, B = {0,&nbsp;1,&nbsp;2,&nbsp;4,&nbsp;5,&nbsp;9}. Represent f by:<br><div style='margin:6px 0 6px 18px;'>1. Set of ordered pairs<br>2. A Table<br>3. An Arrow diagram<br>4. A Graph.</div>",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            Given formula: f(x) = (x / 2) - 1<br>
            <div style="margin:4px 0 4px 18px;">
              • For x = 2 ⇒ f(2) = (2 / 2) - 1 = 1 - 1 = <b>0</b> ∈ B<br>
              • For x = 4 ⇒ f(4) = (4 / 2) - 1 = 2 - 1 = <b>1</b> ∈ B<br>
              • For x = 6 ⇒ f(6) = (6 / 2) - 1 = 3 - 1 = <b>2</b> ∈ B<br>
              • For x = 10 ⇒ f(10) = (10 / 2) - 1 = 5 - 1 = <b>4</b> ∈ B<br>
              • For x = 12 ⇒ f(12) = (12 / 2) - 1 = 6 - 1 = <b>5</b> ∈ B
            </div><br>
            <b>1. Set of Ordered Pairs:</b><br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              f = {(2,&nbsp;0), (4,&nbsp;1), (6,&nbsp;2), (10,&nbsp;4), (12,&nbsp;5)}
            </div><br>
            <b>2. Table Form:</b><br>
            <table style="width:100%; border-collapse:collapse; margin:8px 0; font-size:13px; text-align:center;">
              <tr style="background:#eff6ff;"><th style="border:1px solid #94a3b8; padding:5px;">x</th><td style="border:1px solid #cbd5e1; padding:5px;">2</td><td style="border:1px solid #cbd5e1; padding:5px;">4</td><td style="border:1px solid #cbd5e1; padding:5px;">6</td><td style="border:1px solid #cbd5e1; padding:5px;">10</td><td style="border:1px solid #cbd5e1; padding:5px;">12</td></tr>
              <tr><th style="border:1px solid #94a3b8; padding:5px; background:#eff6ff;">f(x)</th><td style="border:1px solid #cbd5e1; padding:5px; font-weight:bold;">0</td><td style="border:1px solid #cbd5e1; padding:5px; font-weight:bold;">1</td><td style="border:1px solid #cbd5e1; padding:5px; font-weight:bold;">2</td><td style="border:1px solid #cbd5e1; padding:5px; font-weight:bold;">4</td><td style="border:1px solid #cbd5e1; padding:5px; font-weight:bold;">5</td></tr>
            </table><br>
            <b>3. Arrow Diagram:</b> See Diagram (i) below.<br><br>
            <b>4. Graph:</b> See Cartesian Graph (ii) below (points (2, 0), (4, 1), (6, 2), (10, 4), (12, 5) plotted on coordinate axes).
          </div>`,
          explanation: "A function can be represented as ordered pairs, a table, an arrow diagram, or a graph.",
          diagramSvg: `<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(290px, 1fr)); gap:14px; width:100%; margin:8px 0;">
            <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:12px; box-shadow:0 1px 4px rgba(0,0,0,0.04); text-align:center;">
              <div style="font-size:12.5px; font-weight:700; color:#1e3a8a; margin-bottom:8px;">🎯 (i) Arrow Diagram</div>
              <svg viewBox="0 0 380 295" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:8px; display:block;">
                <defs>
                  <marker id="arrowhead_em_q2" markerWidth="8" markerHeight="7" refX="7" refY="3.5" orient="auto">
                    <polygon points="0 0, 8 3.5, 0 7" fill="#2563eb"/>
                  </marker>
                </defs>
                <text x="190" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e3a8a">f(x) = (x / 2) - 1</text>
                
                <!-- Ellipse A -->
                <ellipse cx="85" cy="150" rx="52" ry="115" fill="#eff6ff" stroke="#2563eb" stroke-width="2.2"/>
                <text x="85" y="32" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d4ed8">A</text>
                
                <text x="64" y="67" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#1e3a8a">2</text>
                <circle cx="112" cy="62" r="3.5" fill="#1e40af"/>

                <text x="64" y="103" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#1e3a8a">4</text>
                <circle cx="112" cy="98" r="3.5" fill="#1e40af"/>

                <text x="64" y="139" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#1e3a8a">6</text>
                <circle cx="112" cy="134" r="3.5" fill="#1e40af"/>

                <text x="64" y="175" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#1e3a8a">10</text>
                <circle cx="112" cy="170" r="3.5" fill="#1e40af"/>

                <text x="64" y="211" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#1e3a8a">12</text>
                <circle cx="112" cy="206" r="3.5" fill="#1e40af"/>

                <!-- Ellipse B -->
                <ellipse cx="295" cy="150" rx="52" ry="115" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.2"/>
                <text x="295" y="32" text-anchor="middle" font-size="14" font-weight="bold" fill="#15803d">B</text>

                <circle cx="268" cy="62" r="3.5" fill="#15803d"/>
                <text x="316" y="67" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#14532d">0</text>

                <circle cx="268" cy="98" r="3.5" fill="#15803d"/>
                <text x="316" y="103" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#14532d">1</text>

                <circle cx="268" cy="134" r="3.5" fill="#15803d"/>
                <text x="316" y="139" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#14532d">2</text>

                <circle cx="268" cy="170" r="3.5" fill="#15803d"/>
                <text x="316" y="175" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#14532d">4</text>

                <circle cx="268" cy="206" r="3.5" fill="#15803d"/>
                <text x="316" y="211" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#14532d">5</text>

                <circle cx="268" cy="242" r="3.5" fill="#94a3b8"/>
                <text x="316" y="247" text-anchor="middle" font-size="13.5" font-weight="600" fill="#64748b">9</text>

                <!-- Arrows -->
                <line x1="116" y1="62" x2="260" y2="62" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowhead_em_q2)"/>
                <line x1="116" y1="98" x2="260" y2="98" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowhead_em_q2)"/>
                <line x1="116" y1="134" x2="260" y2="134" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowhead_em_q2)"/>
                <line x1="116" y1="170" x2="260" y2="170" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowhead_em_q2)"/>
                <line x1="116" y1="206" x2="260" y2="206" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowhead_em_q2)"/>

                <rect x="50" y="272" width="280" height="18" rx="9" fill="#ecfdf5" stroke="#a7f3d0"/>
                <text x="190" y="285" text-anchor="middle" font-size="11" font-weight="bold" fill="#047857">Range = {0, 1, 2, 4, 5} (Into Function)</text>
              </svg>
            </div>

            <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:12px; box-shadow:0 1px 4px rgba(0,0,0,0.04); text-align:center;">
              <div style="font-size:12.5px; font-weight:700; color:#1e3a8a; margin-bottom:8px;">📊 (ii) Cartesian Graph</div>
              <svg viewBox="0 0 380 295" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:8px; display:block;">
                <text x="190" y="18" text-anchor="middle" font-size="10.5" font-weight="600" fill="#475569">Scale: X: 1 cm = 2 units | Y: 1 cm = 1 unit</text>

                <!-- Grid -->
                <line x1="45" y1="65" x2="355" y2="65" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="45" y1="95" x2="355" y2="95" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="45" y1="125" x2="355" y2="125" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="45" y1="155" x2="355" y2="155" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="45" y1="185" x2="355" y2="185" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="45" y1="215" x2="355" y2="215" stroke="#e2e8f0" stroke-width="1"/>

                <line x1="89" y1="50" x2="89" y2="245" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="133" y1="50" x2="133" y2="245" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="177" y1="50" x2="177" y2="245" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="221" y1="50" x2="221" y2="245" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="265" y1="50" x2="265" y2="245" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="309" y1="50" x2="309" y2="245" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="353" y1="50" x2="353" y2="245" stroke="#e2e8f0" stroke-width="1"/>

                <!-- Linear Function Line -->
                <line x1="67" y1="260" x2="331" y2="80" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/>
                <text x="215" y="145" fill="#1d4ed8" font-size="10.5" font-weight="bold" transform="rotate(-30 215 145)">f(x) = (x/2) - 1</text>

                <!-- Projections -->
                <line x1="133" y1="245" x2="133" y2="215" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/>
                <line x1="45" y1="215" x2="133" y2="215" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/>

                <line x1="177" y1="245" x2="177" y2="185" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/>
                <line x1="45" y1="185" x2="177" y2="185" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/>

                <line x1="265" y1="245" x2="265" y2="125" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/>
                <line x1="45" y1="125" x2="265" y2="125" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/>

                <line x1="309" y1="245" x2="309" y2="95" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/>
                <line x1="45" y1="95" x2="309" y2="95" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/>

                <!-- Axes -->
                <line x1="28" y1="245" x2="362" y2="245" stroke="#1e293b" stroke-width="2"/>
                <polygon points="362 241, 370 245, 362 249" fill="#1e293b"/>
                <text x="373" y="249" font-size="12" font-weight="bold" fill="#1e293b">X</text>
                <text x="16" y="249" font-size="12" font-weight="bold" fill="#64748b">X'</text>

                <line x1="45" y1="265" x2="45" y2="35" stroke="#1e293b" stroke-width="2"/>
                <polygon points="41 35, 45 27, 49 35" fill="#1e293b"/>
                <text x="45" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">Y</text>
                <text x="45" y="278" text-anchor="middle" font-size="12" font-weight="bold" fill="#64748b">Y'</text>

                <text x="34" y="259" font-size="11" font-weight="bold" fill="#475569">O</text>

                <!-- Numbers -->
                <text x="89" y="262" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#dc2626">2</text>
                <text x="133" y="262" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#dc2626">4</text>
                <text x="177" y="262" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#dc2626">6</text>
                <text x="221" y="262" text-anchor="middle" font-size="10.5" fill="#475569">8</text>
                <text x="265" y="262" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#dc2626">10</text>
                <text x="309" y="262" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#dc2626">12</text>
                <text x="353" y="262" text-anchor="middle" font-size="10.5" fill="#475569">14</text>

                <text x="36" y="219" text-anchor="end" font-size="10.5" font-weight="bold" fill="#dc2626">1</text>
                <text x="36" y="189" text-anchor="end" font-size="10.5" font-weight="bold" fill="#dc2626">2</text>
                <text x="36" y="159" text-anchor="end" font-size="10.5" fill="#475569">3</text>
                <text x="36" y="129" text-anchor="end" font-size="10.5" font-weight="bold" fill="#dc2626">4</text>
                <text x="36" y="99" text-anchor="end" font-size="10.5" font-weight="bold" fill="#dc2626">5</text>
                <text x="36" y="69" text-anchor="end" font-size="10.5" fill="#475569">6</text>

                <!-- Points -->
                <circle cx="89" cy="245" r="4.5" fill="#dc2626" stroke="#ffffff" stroke-width="1.8"/>
                <rect x="67" y="216" width="44" height="18" rx="4" fill="#fef2f2" stroke="#ef4444" stroke-width="1"/>
                <text x="89" y="229" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">(2, 0)</text>

                <circle cx="133" cy="215" r="4.5" fill="#dc2626" stroke="#ffffff" stroke-width="1.8"/>
                <rect x="142" y="206" width="44" height="18" rx="4" fill="#fef2f2" stroke="#ef4444" stroke-width="1"/>
                <text x="164" y="219" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">(4, 1)</text>

                <circle cx="177" cy="185" r="4.5" fill="#dc2626" stroke="#ffffff" stroke-width="1.8"/>
                <rect x="186" y="176" width="44" height="18" rx="4" fill="#fef2f2" stroke="#ef4444" stroke-width="1"/>
                <text x="208" y="189" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">(6, 2)</text>

                <circle cx="265" cy="125" r="4.5" fill="#dc2626" stroke="#ffffff" stroke-width="1.8"/>
                <rect x="274" y="116" width="48" height="18" rx="4" fill="#fef2f2" stroke="#ef4444" stroke-width="1"/>
                <text x="298" y="129" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">(10, 4)</text>

                <circle cx="309" cy="95" r="4.5" fill="#dc2626" stroke="#ffffff" stroke-width="1.8"/>
                <rect x="290" y="66" width="46" height="18" rx="4" fill="#fef2f2" stroke="#ef4444" stroke-width="1"/>
                <text x="313" y="79" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">(12, 5)</text>
              </svg>
            </div>
          </div>`,
          diagramCaption: "Diagrams: (i) Arrow Diagram of f(x) = (x/2) - 1 and (ii) Cartesian Graph of Points"
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 5: Composition of Functions (Exercise 1.5)
    // -------------------------------------------------------------
    {
      id: "sec_em_5",
      title: "Exercise 1.5: Composition of Functions",
      author: "Chapter 1: Relations and Functions",
      questions: [
        {
          id: "m_em_5_1",
          type: "2m",
          mark: "2 Marks",
          q: "Find f ∘ g and g ∘ f when f(x) = x - 6 and g(x) = x². Check whether f ∘ g = g ∘ f.",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            Given: f(x) = x - 6, g(x) = x²<br><br>
            <b>1. f ∘ g:</b><br>
            <div style="margin:4px 0 4px 18px;">
              (f ∘ g)(x) = f(g(x))<br>
              = f(x²)<br>
              = <b>x² - 6 ---- (1)</b>
            </div><br>
            <b>2. g ∘ f:</b><br>
            <div style="margin:4px 0 4px 18px;">
              (g ∘ f)(x) = g(f(x))<br>
              = g(x - 6)<br>
              = <b>(x - 6)² = x² - 12x + 36 ---- (2)</b>
            </div><br>
            From (1) and (2):<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              x² - 6 ≠ x² - 12x + 36<br>
              Therefore, f ∘ g ≠ g ∘ f.
            </div>
          </div>`,
          explanation: "In general, composition of functions is not commutative."
        },
        {
          id: "m_em_5_2",
          type: "2m",
          mark: "2 Marks",
          examYear: "2023",
          examTag: "2023*",
          isImportant: true,
          q: "Find the value of k, such that f ∘ g = g ∘ f, where f(x) = 3x + 2 and g(x) = 6x - k.",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            Given: f(x) = 3x + 2, g(x) = 6x - k and f ∘ g = g ∘ f.<br><br>
            <div style="margin:4px 0 4px 18px;">
              (f ∘ g)(x) = f(g(x)) = f(6x - k) = 3(6x - k) + 2 = <b>18x - 3k + 2 ---- (1)</b><br><br>
              (g ∘ f)(x) = g(f(x)) = g(3x + 2) = 6(3x + 2) - k = <b>18x + 12 - k ---- (2)</b>
            </div><br>
            Since f ∘ g = g ∘ f, equate (1) and (2):<br>
            <div style="margin:4px 0 4px 18px;">
              18x - 3k + 2 = 18x + 12 - k<br>
              -3k + k = 12 - 2<br>
              -2k = 10<br>
              k = 10 / -2<br>
              <b>k = -5</b>
            </div>
          </div>`,
          explanation: "Equating the two composite functions yields the value of the unknown parameter k."
        },
        {
          id: "m_em_5_3",
          type: "5m",
          mark: "5 Marks",
          examYear: "2024",
          examTag: "2024*",
          isImportant: true,
          q: "If f(x) = x - 1, g(x) = 3x + 1 and h(x) = x², show that (f ∘ g) ∘ h = f ∘ (g ∘ h).",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            Given: f(x) = x - 1, g(x) = 3x + 1, h(x) = x²<br><br>
            <b>L.H.S = (f ∘ g) ∘ h:</b><br>
            <div style="margin:4px 0 4px 18px;">
              First find (f ∘ g)(x):<br>
              (f ∘ g)(x) = f(g(x)) = f(3x + 1) = (3x + 1) - 1 = <b>3x</b><br><br>
              Now, ((f ∘ g) ∘ h)(x):<br>
              (f ∘ g)(h(x)) = (f ∘ g)(x²)<br>
              <b>L.H.S = 3(x²) = 3x² ---- (1)</b>
            </div><br>
            <b>R.H.S = f ∘ (g ∘ h):</b><br>
            <div style="margin:4px 0 4px 18px;">
              First find (g ∘ h)(x):<br>
              (g ∘ h)(x) = g(h(x)) = g(x²) = <b>3x² + 1</b><br><br>
              Now, (f ∘ (g ∘ h))(x):<br>
              f((g ∘ h)(x)) = f(3x² + 1) = (3x² + 1) - 1<br>
              <b>R.H.S = 3x² ---- (2)</b>
            </div><br>
            From (1) and (2):<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              L.H.S = R.H.S<br>
              Hence, (f ∘ g) ∘ h = f ∘ (g ∘ h) is proved.
            </div>
          </div>`,
          explanation: "Composition of functions always satisfies the associative property.",
          blackboard: {
            title: "Blackboard Demo: Associativity of Composite Functions",
            engTitle: "Blackboard Demo: Associativity of Composite Functions",
            steps: [
              {
                stepNum: 1,
                badge: "Step 1: Write given functions",
                badgeEn: "Step 1: Write given functions",
                chalkHtml: `
                  <div class="bb-line bb-title">Given Functions:</div>
                  <div class="bb-line">• <b>f(x)</b> = x - 1</div>
                  <div class="bb-line">• <b>g(x)</b> = 3x + 1</div>
                  <div class="bb-line">• <b>h(x)</b> = x²</div>
                `,
                chalkHtmlEn: `
                  <div class="bb-line bb-title">Given Functions:</div>
                  <div class="bb-line">• <b>f(x)</b> = x - 1</div>
                  <div class="bb-line">• <b>g(x)</b> = 3x + 1</div>
                  <div class="bb-line">• <b>h(x)</b> = x²</div>
                `,
                audioScriptTa: "Step 1. Write the given functions. f of x equals x minus 1. g of x equals 3x plus 1. And h of x equals x squared.",
                audioScriptEn: "Step 1. Write the given functions. f of x equals x minus 1. g of x equals 3x plus 1. And h of x equals x squared."
              },
              {
                stepNum: 2,
                badge: "Step 2: L.H.S - First find (f ∘ g)",
                badgeEn: "Step 2: L.H.S - First find (f ∘ g)",
                chalkHtml: `
                  <div class="bb-line bb-title">L.H.S = (f ∘ g) ∘ h</div>
                  <div class="bb-line">First calculate the bracket term (f ∘ g)(x):</div>
                  <div class="bb-line highlight">(f ∘ g)(x) = f(g(x)) = f(3x + 1)</div>
                  <div class="bb-line">Substitute (3x + 1) into f:</div>
                  <div class="bb-line highlight">= (3x + 1) - 1 = <b style="color:#fde047;">3x</b></div>
                `,
                chalkHtmlEn: `
                  <div class="bb-line bb-title">L.H.S = (f ∘ g) ∘ h</div>
                  <div class="bb-line">First calculate the bracket term (f ∘ g)(x):</div>
                  <div class="bb-line highlight">(f ∘ g)(x) = f(g(x)) = f(3x + 1)</div>
                  <div class="bb-line">Substitute (3x + 1) into f:</div>
                  <div class="bb-line highlight">= (3x + 1) - 1 = <b style="color:#fde047;">3x</b></div>
                `,
                audioScriptTa: "Step 2. To calculate Left Hand Side, first find f compose g. Substituting 3x plus 1 into f gives 3x plus 1 minus 1, which equals 3x.",
                audioScriptEn: "Step 2. To calculate Left Hand Side, first find f compose g. Substituting 3x plus 1 into f gives 3x plus 1 minus 1, which equals 3x."
              },
              {
                stepNum: 3,
                badge: "Step 3: L.H.S with h(x) (Equation 1)",
                badgeEn: "Step 3: L.H.S with h(x) (Equation 1)",
                chalkHtml: `
                  <div class="bb-line bb-title">Now compute ((f ∘ g) ∘ h)(x):</div>
                  <div class="bb-line">= (f ∘ g)(h(x)) = (f ∘ g)(x²)</div>
                  <div class="bb-line formula">
                    L.H.S = 3(x²) = 3x² <span class="bb-eq">---- (1)</span>
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-line bb-title">Now compute ((f ∘ g) ∘ h)(x):</div>
                  <div class="bb-line">= (f ∘ g)(h(x)) = (f ∘ g)(x²)</div>
                  <div class="bb-line formula">
                    L.H.S = 3(x²) = 3x² <span class="bb-eq">---- (1)</span>
                  </div>
                `,
                audioScriptTa: "Step 3. Substitute h of x which is x squared into f compose g. We get 3 times x squared, which is 3x squared. Mark this as equation 1.",
                audioScriptEn: "Step 3. Substitute h of x which is x squared into f compose g. We get 3 times x squared, which is 3x squared. Mark this as equation 1."
              },
              {
                stepNum: 4,
                badge: "Step 4: R.H.S - f ∘ (g ∘ h) (Equation 2)",
                badgeEn: "Step 4: R.H.S - f ∘ (g ∘ h) (Equation 2)",
                chalkHtml: `
                  <div class="bb-line bb-title">R.H.S = f ∘ (g ∘ h)</div>
                  <div class="bb-line">First (g ∘ h)(x) = g(h(x)) = g(x²) = <b style="color:#93c5fd;">3x² + 1</b></div>
                  <div class="bb-line" style="margin-top:6px;">Now f((g ∘ h)(x)) = f(3x² + 1) = (3x² + 1) - 1</div>
                  <div class="bb-line formula" style="margin-top:8px;">
                    R.H.S = 3x² <span class="bb-eq">---- (2)</span>
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-line bb-title">R.H.S = f ∘ (g ∘ h)</div>
                  <div class="bb-line">First (g ∘ h)(x) = g(h(x)) = g(x²) = <b style="color:#93c5fd;">3x² + 1</b></div>
                  <div class="bb-line" style="margin-top:6px;">Now f((g ∘ h)(x)) = f(3x² + 1) = (3x² + 1) - 1</div>
                  <div class="bb-line formula" style="margin-top:8px;">
                    R.H.S = 3x² <span class="bb-eq">---- (2)</span>
                  </div>
                `,
                audioScriptTa: "Step 4. For Right Hand Side, first g compose h gives 3x squared plus 1. Substituting this into f gives 3x squared plus 1 minus 1, which equals 3x squared. Mark this as equation 2.",
                audioScriptEn: "Step 4. For Right Hand Side, first g compose h gives 3x squared plus 1. Substituting this into f gives 3x squared plus 1 minus 1, which equals 3x squared. Mark this as equation 2."
              },
              {
                stepNum: 5,
                badge: "Step 5: Conclusion (Proved)",
                badgeEn: "Step 5: Conclusion (Proved)",
                chalkHtml: `
                  <div class="bb-line bb-title">Conclusion:</div>
                  <div class="bb-line">From equations (1) and (2):</div>
                  <div class="bb-line formula" style="color:#86efac; font-size:18px;">
                    L.H.S = R.H.S (3x² = 3x²)
                  </div>
                  <div class="bb-line" style="margin-top:10px; color:#fef08a; font-weight:800; font-size:17px;">
                    ∴ (f ∘ g) ∘ h = f ∘ (g ∘ h) is proved! ✓
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-line bb-title">Conclusion:</div>
                  <div class="bb-line">From equations (1) and (2):</div>
                  <div class="bb-line formula" style="color:#86efac; font-size:18px;">
                    L.H.S = R.H.S (3x² = 3x²)
                  </div>
                  <div class="bb-line" style="margin-top:10px; color:#fef08a; font-weight:800; font-size:17px;">
                    ∴ (f ∘ g) ∘ h = f ∘ (g ∘ h) is proved! ✓
                  </div>
                `,
                audioScriptTa: "Step 5. From equations 1 and 2, both LHS and RHS equal 3x squared. Hence, the associative property of composite functions is proved.",
                audioScriptEn: "Step 5. From equations 1 and 2, both LHS and RHS equal 3x squared. Hence, the associative property of composite functions is proved."
              }
            ]
          },
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 6: Book-Back Multiple Choice Questions (1-Mark MCQs)
    // -------------------------------------------------------------
    {
      id: "sec_em_6",
      title: "1-Mark Multiple Choice Questions",
      author: "Board Exam Revision Question Bank",
      questions: [
        {
          id: "m_em_mcq_1",
          type: "1m",
          mark: "1 Mark",
          examYear: "2022",
          examTag: "2022*",
          isImportant: true,
          q: "If n(A × B) = 6 and A = {1,&nbsp;3}, then n(B) is:",
          options: ["(A) 1", "(B) 2", "(C) 3", "(D) 6"],
          ans: "<b>(C) 3</b><br><b>Explanation:</b> Formula: n(A × B) = n(A) × n(B).<br>Here n(A) = 2. So 6 = 2 × n(B) ⇒ n(B) = 6 / 2 = 3.",
          explanation: "Apply formula n(A × B) = n(A) × n(B)."
        },
        {
          id: "m_em_mcq_2",
          type: "1m",
          mark: "1 Mark",
          examYear: "2024",
          examTag: "2024*",
          isImportant: true,
          q: "If A = {a,&nbsp;b,&nbsp;p}, B = {2,&nbsp;3}, C = {p,&nbsp;q,&nbsp;r,&nbsp;s}, then n[(A ∪ C) × B] is:",
          options: ["(A) 8", "(B) 20", "(C) 12", "(D) 16"],
          ans: "<b>(C) 12</b><br><b>Explanation:</b> A ∪ C = {a,&nbsp;b,&nbsp;p,&nbsp;q,&nbsp;r,&nbsp;s} ⇒ n(A ∪ C) = 6.<br>n(B) = 2.<br>n[(A ∪ C) × B] = 6 × 2 = 12.",
          explanation: "Multiply the cardinality of the union by the cardinality of B."
        },
        {
          id: "m_em_mcq_3",
          type: "1m",
          mark: "1 Mark",
          q: "If A = {1,&nbsp;2}, B = {1,&nbsp;2,&nbsp;3,&nbsp;4}, C = {5,&nbsp;6} and D = {5,&nbsp;6,&nbsp;7,&nbsp;8}, then state which of the following statement is true?",
          options: ["(A) (A × C) ⊂ (B × D)", "(B) (B × D) ⊂ (A × C)", "(C) (A × B) ⊂ (A × D)", "(D) (D × A) ⊂ (B × A)"],
          ans: "<b>(A) (A × C) ⊂ (B × D)</b><br><b>Explanation:</b> Since A ⊂ B and C ⊂ D, their Cartesian product is also a subset: (A × C) ⊂ (B × D).",
          explanation: "Subset property extends to Cartesian products."
        },
        {
          id: "m_em_mcq_4",
          type: "1m",
          mark: "1 Mark",
          q: "If there are 1024 relations from a set A = {1,&nbsp;2,&nbsp;3,&nbsp;4,&nbsp;5} to a set B, then the number of elements in B is:",
          options: ["(A) 3", "(B) 2", "(C) 4", "(D) 8"],
          ans: "<b>(B) 2</b><br><b>Explanation:</b> Total relations = 2^(n(A) × n(B)).<br>Given: n(A) = 5 and total relations = 1024 = 2^10.<br>Therefore, 5 × n(B) = 10 ⇒ n(B) = 10 / 5 = 2.",
          explanation: "Use 2^(p × q) = 1024 = 2^10 to find q."
        },
        {
          id: "m_em_mcq_5",
          type: "1m",
          mark: "1 Mark",
          q: "The range of the relation R = {(x, x²) | x is a prime number less than 13} is:",
          options: ["(A) {2,&nbsp;3,&nbsp;5,&nbsp;7}", "(B) {2,&nbsp;3,&nbsp;5,&nbsp;7,&nbsp;11}", "(C) {4,&nbsp;9,&nbsp;25,&nbsp;49,&nbsp;121}", "(D) {1,&nbsp;4,&nbsp;9,&nbsp;25,&nbsp;49,&nbsp;121}"],
          ans: "<b>(C) {4, 9, 25, 49, 121}</b><br><b>Explanation:</b> Prime numbers less than 13 are x = {2,&nbsp;3,&nbsp;5,&nbsp;7,&nbsp;11}.<br>Their squares (x²): 2² = 4, 3² = 9, 5² = 25, 7² = 49, 11² = 121.<br>Range = {4,&nbsp;9,&nbsp;25,&nbsp;49,&nbsp;121}.",
          explanation: "Squares of the prime numbers form the range set."
        },
        {
          id: "m_em_mcq_6",
          type: "1m",
          mark: "1 Mark",
          q: "If the ordered pairs (a + 2, 4) and (5, 2a + b) are equal, then (a, b) is:",
          options: ["(A) (2, -2)", "(B) (5, 1)", "(C) (2, 3)", "(D) (3, -2)"],
          ans: "<b>(D) (3, -2)</b><br><b>Explanation:</b> Equating corresponding coordinates:<br>• a + 2 = 5 ⇒ a = 5 - 2 = 3<br>• 2a + b = 4 ⇒ 2(3) + b = 4 ⇒ 6 + b = 4 ⇒ b = 4 - 6 = -2.<br>Thus, (a, b) = (3, -2).",
          explanation: "Equate x-coordinates and y-coordinates separately."
        },
        {
          id: "m_em_mcq_7",
          type: "1m",
          mark: "1 Mark",
          q: "Let n(A) = m and n(B) = n, then the total number of non-empty relations that can be defined from A to B is:",
          options: ["(A) m^n", "(B) n^m", "(C) 2^(mn) - 1", "(D) 2^(mn)"],
          ans: "<b>(C) 2^(mn) - 1</b><br><b>Explanation:</b> Total relations = 2^(mn). Subtracting the empty relation gives non-empty relations = 2^(mn) - 1.",
          explanation: "Deduct 1 for the empty set to get non-empty relations."
        },
        {
          id: "m_em_mcq_8",
          type: "1m",
          mark: "1 Mark",
          q: "If f: A ➔ B is a bijective function and if n(B) = 7, then n(A) is equal to:",
          options: ["(A) 7", "(B) 49", "(C) 1", "(D) 14"],
          ans: "<b>(A) 7</b><br><b>Explanation:</b> For a function to be bijective (one-to-one and onto), the number of elements in the domain and co-domain must be equal: n(A) = n(B) = 7.",
          explanation: "Bijective functions have equal domain and co-domain cardinalities."
        },
        {
          id: "m_em_mcq_9",
          type: "1m",
          mark: "1 Mark",
          q: "If f(x) = √(1 + x²), then:",
          options: ["(A) f(xy) = f(x).f(y)", "(B) f(xy) ≥ f(x).f(y)", "(C) f(xy) ≤ f(x).f(y)", "(D) None of these"],
          ans: "<b>(C) f(xy) ≤ f(x).f(y)</b><br><b>Explanation:</b> f(x).f(y) = √(1 + x²)√(1 + y²) = √(1 + x² + y² + x²y²).<br>f(xy) = √(1 + x²y²).<br>Since x² + y² ≥ 0, we always have f(xy) ≤ f(x).f(y).",
          explanation: "√(1 + x²y²) ≤ √(1 + x² + y² + x²y²) confirms f(xy) ≤ f(x).f(y)."
        },
        {
          id: "m_em_mcq_10",
          type: "1m",
          mark: "1 Mark",
          q: "The function f(x) = (x + 1)³ - (x - 1)³ represents:",
          options: ["(A) a linear function", "(B) a cubic function", "(C) a reciprocal function", "(D) a quadratic function"],
          ans: "<b>(D) a quadratic function</b><br><b>Explanation:</b> (x + 1)³ = x³ + 3x² + 3x + 1<br>(x - 1)³ = x³ - 3x² + 3x - 1<br>Subtracting gives: f(x) = 6x² + 2. Since the highest degree is 2, it is a quadratic function.",
          explanation: "The cubic terms cancel out leaving degree 2."
        }
      ]
    }
  ]
};
