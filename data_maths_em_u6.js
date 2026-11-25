// 10th Standard Mathematics - Unit 6: Trigonometry (English Medium)
// Tamil Nadu State Board Samacheer Kalvi Question Bank & Step-by-Step Solutions

const MATHS_EM_UNIT_6_DATA = {
  unitId: "math_em_u6",
  unitName: "Unit 6: Trigonometry",
  subject: "Mathematics (English Medium)",
  syllabus: "Tamil Nadu State Board Samacheer Kalvi Class 10 Mathematics",

  // Key Formulas
  formulas: [
    { title: "Pythagorean Identity 1", rule: "sin²θ + cos²θ = 1 ➔ sin²θ = 1 - cos²θ; cos²θ = 1 - sin²θ" },
    { title: "Pythagorean Identity 2", rule: "1 + tan²θ = sec²θ ➔ sec²θ - tan²θ = 1" },
    { title: "Pythagorean Identity 3", rule: "1 + cot²θ = cosec²θ ➔ cosec²θ - cot²θ = 1" },
    { title: "Quotient Relations", rule: "tan θ = sin θ / cos θ; cot θ = cos θ / sin θ" },
    { title: "Reciprocal Relations", rule: "cosec θ = 1/sin θ; sec θ = 1/cos θ; cot θ = 1/tan θ" },
    { title: "Trigonometric Values (tan)", rule: "tan 0° = 0; tan 30° = 1/√3; tan 45° = 1; tan 60° = √3; tan 90° = undefined" },
    { title: "Trigonometric Values (sin)", rule: "sin 0° = 0; sin 30° = 1/2; sin 45° = 1/√2; sin 60° = √3/2; sin 90° = 1" },
    { title: "Angle of Elevation", rule: "Angle formed by line of sight with horizontal when object is above eye level: tan θ = height / distance" },
    { title: "Angle of Depression", rule: "Angle formed by line of sight with horizontal when object is below eye level (equals alternate angle of elevation)" }
  ],

  subSections: [
    {
      id: "sec_m_em_6_1",
      title: "Section 1: Trigonometric Identities & Algebraic Proofs",
      author: "Chapter 6: Trigonometric Identities",
      questions: [
        {
          id: "m_em_6_1_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "Public Exam",
          q: "What is the value of (sin²θ + cos²θ) / (1 + tan²θ)?",
          options: ["A) sin²θ", "B) cos²θ", "C) tan²θ", "D) 1"],
          ans: "Answer: <b>B) cos²θ</b><br>Explanation: Numerator = 1, Denominator = sec²θ. 1 / sec²θ = cos²θ."
        },
        {
          id: "m_em_6_1_2",
          examYear: "2023",
          type: "1m",
          mark: "1 Mark",
          q: "If tan θ = 1, then the angle of inclination θ is:",
          options: ["A) 30°", "B) 45°", "C) 60°", "D) 90°"],
          ans: "Answer: <b>B) 45°</b>"
        },
        {
          id: "m_em_6_1_3",
          examYear: "2024, 2023",
          type: "2m",
          mark: "2 Marks",
          examTag: "Public Exam (2M)",
          isImportant: true,
          q: "Prove that: √[(1 + cos θ) / (1 - cos θ)] = cosec θ + cot θ.",
          ans: "<div style=\"line-height:1.8;\"><b>Proof:</b><br>LHS = √[ (1 + cos θ) / (1 - cos θ) ]<br>Multiplying numerator and denominator inside root by conjugate (1 + cos θ):<br>= √[ (1 + cos θ)² / ((1 - cos θ)(1 + cos θ)) ]<br>= √[ (1 + cos θ)² / (1 - cos²θ) ]<br>Since 1 - cos²θ = sin²θ:<br>= √[ (1 + cos θ)² / sin²θ ] = (1 + cos θ) / sin θ<br>= (1 / sin θ) + (cos θ / sin θ) = <b>cosec θ + cot θ = RHS</b>. Hence proved.</div>"
        },
        {
          id: "m_em_6_1_4",
          examYear: "2024",
          videoUrl: "https://youtu.be/4KS-OUpKpy0",
          type: "5m",
          mark: "5 Marks",
          examTag: "Public Exam 2024 (5M)",
          isImportant: true,
          q: "Prove that: (sin θ - 2 sin³θ) / (2 cos³θ - cos θ) = tan θ.",
          chalkboard: {
            steps: [
              {
                stepNum: 1,
                title: "Take Common Factors in Numerator & Denominator",
                badge: "Step 1",
                html: "LHS = [ sin θ (1 - 2 sin²θ) ] / [ cos θ (2 cos²θ - 1) ]"
              },
              {
                stepNum: 2,
                title: "Express sin²θ in Terms of cos²θ",
                badge: "Step 2",
                html: "Substitute sin²θ = 1 - cos²θ into numerator:<br>1 - 2 sin²θ = 1 - 2(1 - cos²θ) = 1 - 2 + 2 cos²θ = <b>2 cos²θ - 1</b>."
              },
              {
                stepNum: 3,
                title: "Cancel Identical Terms",
                badge: "Step 3",
                html: "LHS = [ sin θ (2 cos²θ - 1) ] / [ cos θ (2 cos²θ - 1) ] = sin θ / cos θ."
              },
              {
                stepNum: 4,
                title: "Final Result",
                badge: "Step 4",
                html: "sin θ / cos θ = <b style=\'color:#16a34a;\'>tan θ = RHS</b>. Hence Proved!"
              }
            ]
          },
          ans: "<div style=\"line-height:1.8;\"><b>LHS</b> = [ sin θ(1 - 2 sin²θ) ] / [ cos θ(2 cos²θ - 1) ]<br>Using sin²θ = 1 - cos²θ in numerator:<br>1 - 2(1 - cos²θ) = 1 - 2 + 2 cos²θ = 2 cos²θ - 1.<br>Therefore, LHS = [ sin θ(2 cos²θ - 1) ] / [ cos θ(2 cos²θ - 1) ] = sin θ / cos θ = <b>tan θ = RHS</b>. Hence proved.</div>"
        }
      ]
    },
    {
      id: "sec_m_em_6_2",
      title: "Section 2: Heights and Distances (Angles of Elevation & Depression)",
      author: "Chapter 6: Practical Applications",
      questions: [
        {
          id: "m_em_6_2_1",
          type: "2m",
          mark: "2 Marks",
          examTag: "Govt Model",
          isImportant: true,
          q: "A tower stands vertically on the ground. From a point on the ground, which is 48 m away from the foot of the tower, the angle of elevation of the top of the tower is 30°. Find the height of the tower.",
          ans: "<div style=\"line-height:1.8;\"><b>Solution:</b><br>Let height of tower be h and distance d = 48 m. Angle of elevation θ = 30°.<br>tan θ = Opposite / Adjacent ➔ tan 30° = h / 48<br>1 / √3 = h / 48 ➔ h = 48 / √3 = (48√3) / 3 = <b>16√3 m</b> (or 16 × 1.732 = <b>27.71 m</b>).</div>"
        },
        {
          id: "m_em_6_2_2",
          examYear: "2023",
          videoUrl: "https://youtu.be/Dm4jUvIkODc",
          type: "5m",
          mark: "5 Marks",
          examTag: "Public Exam 2023 (5M)",
          isImportant: true,
          q: "From the top of a rock 50√3 m high, the angle of depression of a car on the ground is observed to be 30°. Find the distance of the car from the rock.",
          chalkboard: {
            steps: [
              {
                stepNum: 1,
                title: "Identify Geometric Setup",
                badge: "Step 1",
                html: "Let AB be the rock of height 50√3 m. Let C be the car on the ground. By alternate angles, Angle of Elevation ∠ACB = 30°."
              },
              {
                stepNum: 2,
                title: "Apply Tangent Ratio in Right Triangle ABC",
                badge: "Step 2",
                html: "tan 30° = AB / BC ➔ 1 / √3 = 50√3 / BC."
              },
              {
                stepNum: 3,
                title: "Cross Multiply to Solve for BC",
                badge: "Step 3",
                html: "BC = 50√3 × √3 = 50 × 3 = <b style=\'color:#16a34a; font-size:16px;\'>150 m</b>."
              }
            ]
          },
          ans: "<div style=\"line-height:1.8;\"><b>1. Setup:</b> Height AB = 50√3 m. Angle of depression = 30° ➔ Angle of elevation ∠ACB = 30°.<br><b>2. Trigonometric Ratio:</b> In right ΔABC, tan 30° = AB / BC<br>1 / √3 = 50√3 / BC ➔ BC = 50√3 × √3 = 50 × 3 = <b>150 m</b>.<br>The distance of the car from the rock is <b>150 meters</b>.</div>"
        }
      ]
    },

    // -------------------------------------------------------------
    // Additional Practice Questions (In-Text)
    // -------------------------------------------------------------
    {
      id: "sec_math_em_u6_add_practice",
      title: "Additional Practice Questions (In-Text)",
      author: "Unit 6: Trigonometry - Extra Exam Practice",
      questions: [
        {
          id: "m_em_u6_add_q1",
          type: "2m",
          mark: "2 Marks | Additional Practice (In-Text)",
          sectionTag: "Additional Practice (In-Text)",
          isAdditionalPractice: true,
          subSectionId: "sec_math_em_u6_add_practice",
          q: "Evaluate: sin 30° + cos 60°.",
          ans: `<div style="line-height:1.8;">
            <b>Standard Trigonometric Values:</b><br>
            • sin 30° = 1 / 2<br>
            • cos 60° = 1 / 2<br><br>
            <b>Substitute and evaluate:</b><br>
            sin 30° + cos 60° = (1 / 2) + (1 / 2) = 2 / 2 = <b>1</b><br><br>
            <div style="padding:10px 14px; background:#f0fdf4; border-left:4px solid #16a34a; border-radius:6px; font-weight:700; color:#15803d;">
              sin 30° + cos 60° = 1
            </div>
          </div>`,
          audioScript: "Standard values: sine 30 degrees equals half, cosine 60 degrees equals half. Therefore, sine 30 plus cosine 60 equals half plus half, which equals 1."
        },
        {
          id: "m_em_u6_add_q2",
          type: "2m",
          mark: "2 Marks | Additional Practice (In-Text)",
          sectionTag: "Additional Practice (In-Text)",
          isAdditionalPractice: true,
          subSectionId: "sec_math_em_u6_add_practice",
          q: "If tan θ = 3/4, find the values of sin θ and cos θ, where θ is an acute angle.",
          ans: `<div style="line-height:1.8;">
            <b>Given:</b> tan θ = Opposite / Adjacent = 3 / 4<br><br>
            <b>Step 1: Find hypotenuse using Pythagoras Theorem:</b><br>
            Hypotenuse = √[Opposite² + Adjacent²]<br>
            Hypotenuse = √[3² + 4²] = √[9 + 16] = √25 = <b>5</b><br><br>
            <b>Step 2: Find the trigonometric ratios:</b><br>
            • <b>sin θ</b> = Opposite / Hypotenuse = <b>3 / 5</b><br>
            • <b>cos θ</b> = Adjacent / Hypotenuse = <b>4 / 5</b><br><br>
            <div style="padding:10px 14px; background:#f0fdf4; border-left:4px solid #16a34a; border-radius:6px; font-weight:700; color:#15803d;">
              sin θ = 3/5 &nbsp;|&nbsp; cos θ = 4/5
            </div>
          </div>`,
          audioScript: "Given tan theta equals opposite over adjacent equals 3 over 4. By Pythagoras theorem, hypotenuse equals square root of (3 squared plus 4 squared), which is square root of 25, giving 5. Therefore, sine theta equals opposite over hypotenuse, which is 3 over 5, and cosine theta equals adjacent over hypotenuse, which is 4 over 5."
        },
        {
          id: "m_em_u6_add_q3",
          type: "5m",
          mark: "5 Marks | Additional Practice (In-Text)",
          sectionTag: "Additional Practice (In-Text)",
          isAdditionalPractice: true,
          subSectionId: "sec_math_em_u6_add_practice",
          q: "From a point on the ground 20 m away from the foot of a vertical tower, the angle of elevation of the top of the tower is 45°. Find the height of the tower.",
          ans: `<div style="line-height:1.8;">
            <div style="text-align:center; margin:10px 0;">
              <svg width="240" height="150" viewBox="0 0 240 150" style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
                <!-- Tower AB -->
                <line x1="50" y1="120" x2="50" y2="30" stroke="#b45309" stroke-width="4" />
                <!-- Ground BC -->
                <line x1="40" y1="120" x2="210" y2="120" stroke="#475569" stroke-width="2.5" />
                <!-- Hypotenuse AC -->
                <line x1="50" y1="30" x2="200" y2="120" stroke="#2563eb" stroke-dasharray="4,3" stroke-width="2" />
                <!-- Labels -->
                <text x="30" y="25" font-size="13" font-weight="700" fill="#b45309">A (Top)</text>
                <text x="30" y="138" font-size="13" font-weight="700" fill="#475569">B (Foot)</text>
                <text x="205" y="135" font-size="13" font-weight="700" fill="#2563eb">C</text>
                <text x="12" y="80" font-size="12" font-weight="800" fill="#b45309">h = ?</text>
                <text x="100" y="138" font-size="12" font-weight="700" fill="#475569">20 m</text>
                <!-- Angle arc -->
                <path d="M 175,120 A 25 25 0 0 0 180,108" fill="none" stroke="#dc2626" stroke-width="2" />
                <text x="155" y="112" font-size="11" font-weight="700" fill="#dc2626">45°</text>
                <!-- Right angle at B -->
                <rect x="50" y="108" width="12" height="12" fill="none" stroke="#dc2626" stroke-width="1.5" />
              </svg>
            </div>
            <b>Step 1: Diagram Description:</b><br>
            • Let AB be the vertical tower of height h meters.<br>
            • Let C be the observation point on ground.<br>
            • Distance BC = 20 m.<br>
            • Angle of elevation ∠ACB = 45°.<br><br>
            <b>Step 2: Use trigonometric ratio tan θ:</b><br>
            In right-angled triangle ABC:<br>
            tan 45° = Opposite / Adjacent = AB / BC<br><br>
            <b>Step 3: Substitute known values:</b><br>
            Since tan 45° = 1:<br>
            1 = h / 20<br>
            h = 20 × 1 = <b>20 m</b><br><br>
            <div style="padding:10px 14px; background:#f0fdf4; border-left:4px solid #16a34a; border-radius:6px; font-weight:700; color:#15803d;">
              Height of the tower = 20 meters
            </div>
          </div>`,
          audioScript: "Let AB be the tower of height h and C be the observation point on ground. Distance BC equals 20 meters, angle of elevation is 45 degrees. In right triangle ABC, tan 45 degrees equals AB over BC, which is h over 20. Since tan 45 degrees equals 1, 1 equals h over 20, giving h equals 20 meters. The height of the tower is 20 meters."
        }
      ]
    }
  ]
};