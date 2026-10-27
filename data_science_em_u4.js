// 10th Standard Science - Unit 4: Electricity (English Medium)
// Tamil Nadu State Board Samacheer Kalvi Question Bank & Solutions

const SCIENCE_EM_UNIT_4_DATA = {
  unitId: "sci_em_u4",
  unitName: "Unit 4: Electricity",
  subject: "Science (English Medium)",
  syllabus: "Tamil Nadu State Board Samacheer Kalvi Class 10 Science - Physics",

  // Key Formulas & Laws
  formulas: [
    { title: "Electric Current", rule: "I = Q / t (SI unit: Ampere - A)" },
    { title: "Potential Difference", rule: "V = W / Q (SI unit: Volt - V)" },
    { title: "Ohm's Law", rule: "V = I × R (or R = V / I, SI unit: Ohm - Ω)" },
    { title: "Electrical Resistivity", rule: "ρ = (R × A) / L (SI unit: Ohm-metre - Ω m)" },
    { title: "Resistors in Series", rule: "R_s = R₁ + R₂ + R₃ (Effective resistance increases)" },
    { title: "Resistors in Parallel", rule: "1 / R_p = 1 / R₁ + 1 / R₂ + 1 / R₃ (Effective resistance decreases)" },
    { title: "Joule's Law of Heating", rule: "H = I² × R × t (SI unit: Joule - J)" },
    { title: "Electric Power", rule: "P = V × I = I²R = V² / R (SI unit: Watt - W, 1 kWh = 3.6 × 10⁶ J)" }
  ],

  subSections: [
    // -------------------------------------------------------------
    // Section 1: Ohm's Law & Circuit Connections
    // -------------------------------------------------------------
    {
      id: "sec_sci_em_4_1",
      title: "Section 1: Ohm's Law, Resistance & Resistor Combinations",
      author: "Physics - Unit 4: Electricity",
      questions: [
        {
          id: "sci_em_4_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "Board Exam",
          q: "Which instrument is used to measure electrical potential difference and how must it be connected in a circuit?",
          options: ["a) Ammeter, connected in series", "b) Voltmeter, connected in parallel", "c) Galvanometer, connected in series", "d) Voltmeter, connected in series"],
          ans: "Answer: <b>b) Voltmeter, connected in parallel</b><br>Explanation: A voltmeter has very high resistance to avoid drawing significant current, so it must always be connected in parallel across the components.",
          explanation: "Voltmeters have high resistance and must always connect in parallel across circuit components."
        },
        {
          id: "sci_em_4_2",
          type: "1m",
          mark: "1 Mark",
          q: "If the length of a metallic wire is doubled keeping its area of cross-section unchanged, its electrical resistance will ________.",
          options: ["a) Become half", "b) Remain unchanged", "c) Double", "d) Become four times"],
          ans: "Answer: <b>c) Double</b><br>Explanation: Resistance is directly proportional to length (R ∝ L). Doubling the wire length doubles its resistance.",
          explanation: "R ∝ L; doubling the length results in a two-fold increase in resistance."
        },
        {
          id: "sci_em_4_3",
          type: "2m",
          mark: "2 Marks",
          examYear: "2023",
          examTag: "2023*",
          isImportant: true,
          q: "State Ohm's Law.",
          ans: "<b>Ohm's Law:</b><br><i>'At constant temperature, the steady electric current (I) flowing through a metallic conductor is directly proportional to the potential difference (V) applied across its ends.'</i><br><br>V ∝ I ⇒ <b>V = I × R</b><br>(where R is the resistance of the conductor).",
          explanation: "Ohm's law relates voltage, current, and resistance: V = IR at steady temperature."
        },
        {
          id: "sci_em_4_4",
          type: "2m",
          mark: "2 Marks",
          q: "Distinguish between Series and Parallel connection of resistors.",
          ans: `<div style="line-height:1.7;">
            <b>1. Series Connection:</b><br>
            • Same current flows through all resistors.<br>
            • Equivalent resistance: R_s = R₁ + R₂ + R₃ (increases).<br>
            • If one appliance fails, the whole circuit breaks.<br><br>
            <b>2. Parallel Connection:</b><br>
            • Same potential difference across all resistors.<br>
            • Equivalent resistance: 1/R_p = 1/R₁ + 1/R₂ (decreases).<br>
            • If one appliance stops working, others continue unaffected (used in domestic wiring).
          </div>`,
          explanation: "Series circuits have constant current; parallel circuits maintain constant voltage."
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 2: Heating Effect of Current & Electric Power
    // -------------------------------------------------------------
    {
      id: "sec_sci_em_4_2",
      title: "Section 2: Joule's Law of Heating, Electric Power & Safety Devices",
      author: "Physics - Unit 4: Electricity",
      questions: [
        {
          id: "sci_em_4_5",
          type: "1m",
          mark: "1 Mark",
          examTag: "Board Model",
          q: "One kilowatt-hour (1 kWh) of electrical energy is equal to ________.",
          options: ["a) 3.6 × 10⁵ J", "b) 3.6 × 10⁶ J", "c) 1000 J", "d) 3600 J"],
          ans: "Answer: <b>b) 3.6 × 10⁶ J</b><br>Explanation: 1 kWh = 1000 W × 3600 s = 3,600,000 J = <b>3.6 × 10⁶ J</b>.",
          explanation: "1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ Joules."
        },
        {
          id: "sci_em_4_6",
          type: "2m",
          mark: "2 Marks",
          examYear: "2024",
          examTag: "2024*",
          isImportant: true,
          q: "State Joule's Law of Heating.",
          ans: "<b>Joule's Law of Heating:</b><br>The heat produced (H) in a resistor of resistance R carrying current I for time t is directly proportional to:<br>1. Square of current (H ∝ I²)<br>2. Resistance of conductor (H ∝ R)<br>3. Time duration of flow (H ∝ t)<br><br><b>H = I² × R × t</b> (in Joules)",
          explanation: "H = I²Rt expresses thermal energy dissipated in resistive conductors."
        },
        {
          id: "sci_em_4_7",
          type: "5m",
          mark: "4 / 7 Marks",
          examYear: "2023",
          examTag: "2023* (Key Comprehensive)",
          isImportant: true,
          q: "Derive the expression for the equivalent resistance of three resistors connected in parallel.",
          ans: `<div style="line-height:1.8;">
            <b>Resistors in Parallel Derivation:</b><br><br>
            Consider three resistors with resistances R₁, R₂, and R₃ connected in parallel across a common potential difference V.<br><br>
            <b>Key Properties:</b><br>
            1. The potential difference across each resistor is the same and equal to supply voltage V.<br>
            2. The total current I divides into individual branches as I₁, I₂, and I₃.<br><br>
            <b>Derivation Steps:</b><br>
            Total current: <b>I = I₁ + I₂ + I₃</b> ---- (1)<br><br>
            By Ohm's Law (I = V / R):<br>
            • I₁ = V / R₁<br>
            • I₂ = V / R₂<br>
            • I₃ = V / R₃<br><br>
            If R_p is the equivalent resistance of the parallel combination, total current is:<br>
            • <b>I = V / R_p</b><br><br>
            Substituting these into equation (1):<br>
            V / R_p = (V / R₁) + (V / R₂) + (V / R₃)<br><br>
            Factoring out common potential V:<br>
            <div style="font-size:18px; font-weight:800; color:#0369a1; margin:8px 0;">
              1 / R_p = 1 / R₁ + 1 / R₂ + 1 / R₃
            </div>
            <b>Conclusion:</b><br>
            The reciprocal of the equivalent resistance of resistors in parallel equals the sum of the reciprocals of the individual resistances. The equivalent resistance is always smaller than the smallest individual resistance.
          </div>`,
          explanation: "Parallel combination formula 1/Rp = 1/R1 + 1/R2 + 1/R3 derived via current summation."
        }
      ]
    }
  ]
};
