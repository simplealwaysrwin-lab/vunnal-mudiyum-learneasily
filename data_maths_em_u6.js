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
          type: "1m",
          mark: "1 Mark",
          q: "If tan θ = 1, then the angle of inclination θ is:",
          options: ["A) 30°", "B) 45°", "C) 60°", "D) 90°"],
          ans: "Answer: <b>B) 45°</b>"
        },
        {
          id: "m_em_6_1_3",
          type: "2m",
          mark: "2 Marks",
          examTag: "Important 2M",
          isImportant: true,
          q: "Prove that: √[(1 + cos θ) / (1 - cos θ)] = cosec θ + cot θ.",
          ans: "<div style=\"line-height:1.8;\"><b>Proof:</b><br>LHS = √[ (1 + cos θ) / (1 - cos θ) ]<br>Multiplying numerator and denominator inside root by conjugate (1 + cos θ):<br>= √[ (1 + cos θ)² / ((1 - cos θ)(1 + cos θ)) ]<br>= √[ (1 + cos θ)² / (1 - cos²θ) ]<br>Since 1 - cos²θ = sin²θ:<br>= √[ (1 + cos θ)² / sin²θ ] = (1 + cos θ) / sin θ<br>= (1 / sin θ) + (cos θ / sin θ) = <b>cosec θ + cot θ = RHS</b>. Hence proved.</div>"
        },
        {
          id: "m_em_6_1_4",
          type: "5m",
          mark: "5 Marks",
          examTag: "Top Board Exam Identity",
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
          type: "5m",
          mark: "5 Marks",
          examTag: "2024 Exam Special",
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
    }
  ]
};
