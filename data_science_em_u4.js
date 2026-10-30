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


// ==========================================
// ðŸŒŸ Outside Book Practice Questions & Mock Test 1-Mark Points (Unit 4 EM)
// ==========================================
if (typeof SCIENCE_EM_UNIT_4_DATA !== 'undefined') {
  if (!SCIENCE_EM_UNIT_4_DATA.subSections) SCIENCE_EM_UNIT_4_DATA.subSections = [];
  SCIENCE_EM_UNIT_4_DATA.subSections.push({
    id: "sci_em_u4_outside",
    title: "ðŸŒŸ Outside Book Practice Questions & Mock Test 1-Mark Points",
    author: "Expert Science Faculty",
    questions: [
      {
        id: "sci_em_u4_out_5m_1",
        q: "Compare Series and Parallel electrical circuits with clear circuit diagrams, formulas, and practical features.",
        type: "5m",
        examTag: "Outside Book / Extra Practice 5-Mark Question",
        ans: "<b>Comparison between Series and Parallel Circuits:</b><br><br>" +
             "<table style='width:100%; border-collapse:collapse; margin-bottom:12px; font-size:12.5px; border:1px solid #cbd5e1;'>" +
             "<tr style='background:#f1f5f9; color:#1e293b; text-align:left;'>" +
             "<th style='padding:8px; border:1px solid #cbd5e1;'>Parameter</th>" +
             "<th style='padding:8px; border:1px solid #cbd5e1;'>Series Circuit</th>" +
             "<th style='padding:8px; border:1px solid #cbd5e1;'>Parallel Circuit</th>" +
             "</tr>" +
             "<tr>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'><b>Connection Path</b></td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>Resistors connected end-to-end in a single common continuous loop.</td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>Resistors connected across two common junction nodes in separate branches.</td>" +
             "</tr>" +
             "<tr>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'><b>Current (I)</b></td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>Same current flows through all resistors (I = Iâ‚ = Iâ‚‚ = Iâ‚ƒ).</td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>Current divides across branches (I = Iâ‚ + Iâ‚‚ + Iâ‚ƒ).</td>" +
             "</tr>" +
             "<tr>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'><b>Potential Difference (V)</b></td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>Total voltage divides across resistors (V = Vâ‚ + Vâ‚‚ + Vâ‚ƒ).</td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>Full supply voltage is maintained equally across every branch (V = Vâ‚ = Vâ‚‚ = Vâ‚ƒ).</td>" +
             "</tr>" +
             "<tr>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'><b>Equivalent Resistance</b></td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'><b>R_s = Râ‚ + Râ‚‚ + Râ‚ƒ</b><br>(Higher than highest resistor)</td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'><b>1/R_p = 1/Râ‚ + 1/Râ‚‚ + 1/Râ‚ƒ</b><br>(Lower than smallest resistor)</td>" +
             "</tr>" +
             "<tr>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'><b>Fault Behavior</b></td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>If one component breaks, the entire circuit is broken and all stop.</td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>If one branch breaks, other branches operate normally (Used in domestic household wiring).</td>" +
             "</tr>" +
             "</table>",
        explanation: "Series circuits have equal current and higher resistance; Parallel circuits have equal voltage across all branches and independent operation.",
        diagramCaption: "Schematic Comparison of Series and Parallel Circuits",
        diagramSvg: `<svg viewBox="0 0 460 260" style="max-width:100%; height:auto; display:block; margin:0 auto; background:#f8fafc; border-radius:12px; border:1px solid #cbd5e1;">
  <text x="230" y="24" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e293b">Series vs Parallel Electrical Circuits / à®¤à¯Šà®Ÿà®°à¯ à®®à®±à¯à®±à¯à®®à¯ à®ªà®•à¯à®• à®‡à®£à¯ˆà®ªà¯à®ªà¯à®•à®³à¯</text>
  <!-- Left Side: Series Circuit -->
  <g transform="translate(15, 38)">
    <rect x="0" y="0" width="205" height="205" rx="8" fill="#f0f9ff" stroke="#bae6fd"/>
    <text x="102" y="20" font-size="11.5" font-weight="bold" fill="#0369a1" text-anchor="middle">1. Series Circuit / à®¤à¯Šà®Ÿà®°à®¿à®£à¯ˆà®ªà¯à®ªà¯</text>
    <!-- Circuit loop -->
    <path d="M 30,160 L 30,60 L 60,60" fill="none" stroke="#2563eb" stroke-width="2"/>
    <!-- Resistor 1 -->
    <path d="M 60,60 L 65,52 L 75,68 L 85,52 L 95,68 L 100,60" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
    <text x="80" y="45" font-size="9" font-weight="bold" fill="#1d4ed8">Râ‚</text>
    <!-- Resistor 2 -->
    <path d="M 100,60 L 105,52 L 115,68 L 125,52 L 135,68 L 140,60" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
    <text x="120" y="45" font-size="9" font-weight="bold" fill="#1d4ed8">Râ‚‚</text>
    <!-- Resistor 3 -->
    <path d="M 140,60 L 145,52 L 155,68 L 165,52 L 175,68 L 180,60" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
    <text x="160" y="45" font-size="9" font-weight="bold" fill="#1d4ed8">Râ‚ƒ</text>
    <!-- Right and bottom wires -->
    <path d="M 180,60 L 180,160 L 125,160" fill="none" stroke="#2563eb" stroke-width="2"/>
    <path d="M 30,160 L 85,160" fill="none" stroke="#2563eb" stroke-width="2"/>
    <!-- Battery -->
    <line x1="85" y1="148" x2="85" y2="172" stroke="#dc2626" stroke-width="3"/>
    <line x1="95" y1="154" x2="95" y2="166" stroke="#1e293b" stroke-width="2"/>
    <line x1="105" y1="148" x2="105" y2="172" stroke="#dc2626" stroke-width="3"/>
    <line x1="115" y1="154" x2="115" y2="166" stroke="#1e293b" stroke-width="2"/>
    <line x1="115" y1="160" x2="125" y2="160" stroke="#2563eb" stroke-width="2"/>
    <text x="100" y="142" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="middle">V (Battery)</text>
    <!-- Formula box -->
    <rect x="15" y="175" width="175" height="22" rx="4" fill="#0284c7"/>
    <text x="102" y="190" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">R_s = Râ‚ + Râ‚‚ + Râ‚ƒ</text>
  </g>
  <!-- Right Side: Parallel Circuit -->
  <g transform="translate(240, 38)">
    <rect x="0" y="0" width="205" height="205" rx="8" fill="#dcfce7" stroke="#86efac"/>
    <text x="102" y="20" font-size="11.5" font-weight="bold" fill="#15803d" text-anchor="middle">2. Parallel Circuit / à®ªà®•à¯à®• à®‡à®£à¯ˆà®ªà¯à®ªà¯</text>
    <!-- Battery at left -->
    <path d="M 30,160 L 30,115" fill="none" stroke="#16a34a" stroke-width="2"/>
    <line x1="20" y1="115" x2="40" y2="115" stroke="#dc2626" stroke-width="3"/>
    <line x1="24" y1="125" x2="36" y2="125" stroke="#1e293b" stroke-width="2"/>
    <path d="M 30,125 L 30,60 L 60,60" fill="none" stroke="#16a34a" stroke-width="2"/>
    <!-- Left Junction node A -->
    <circle cx="60" cy="100" r="3" fill="#15803d"/>
    <line x1="60" y1="60" x2="60" y2="140" stroke="#16a34a" stroke-width="2"/>
    <!-- Branch 1: R1 -->
    <line x1="60" y1="60" x2="80" y2="60" stroke="#16a34a" stroke-width="1.8"/>
    <path d="M 80,60 L 85,54 L 95,66 L 105,54 L 115,66 L 120,60" fill="none" stroke="#047857" stroke-width="2.5"/>
    <line x1="120" y1="60" x2="140" y2="60" stroke="#16a34a" stroke-width="1.8"/>
    <text x="100" y="50" font-size="8.5" font-weight="bold" fill="#047857">Râ‚</text>
    <!-- Branch 2: R2 -->
    <line x1="60" y1="100" x2="80" y2="100" stroke="#16a34a" stroke-width="1.8"/>
    <path d="M 80,100 L 85,94 L 95,106 L 105,94 L 115,106 L 120,100" fill="none" stroke="#047857" stroke-width="2.5"/>
    <line x1="120" y1="100" x2="140" y2="100" stroke="#16a34a" stroke-width="1.8"/>
    <text x="100" y="90" font-size="8.5" font-weight="bold" fill="#047857">Râ‚‚</text>
    <!-- Branch 3: R3 -->
    <line x1="60" y1="140" x2="80" y2="140" stroke="#16a34a" stroke-width="1.8"/>
    <path d="M 80,140 L 85,134 L 95,146 L 105,134 L 115,146 L 120,140" fill="none" stroke="#047857" stroke-width="2.5"/>
    <line x1="120" y1="140" x2="140" y2="140" stroke="#16a34a" stroke-width="1.8"/>
    <text x="100" y="130" font-size="8.5" font-weight="bold" fill="#047857">Râ‚ƒ</text>
    <!-- Right Junction node B -->
    <line x1="140" y1="60" x2="140" y2="140" stroke="#16a34a" stroke-width="2"/>
    <circle cx="140" cy="100" r="3" fill="#15803d"/>
    <path d="M 140,100 L 175,100 L 175,160 L 30,160" fill="none" stroke="#16a34a" stroke-width="2"/>
    <!-- Formula box -->
    <rect x="15" y="175" width="175" height="22" rx="4" fill="#15803d"/>
    <text x="102" y="190" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">1/R_p = 1/Râ‚ + 1/Râ‚‚ + 1/Râ‚ƒ</text>
  </g>
</svg>`
      },
      {
        id: "sci_em_u4_out_5m_2",
        q: "Explain the heating effect of electric current, state Joule's law of heating (H = IÂ²Rt), and explain its practical applications with a neat diagram.",
        type: "5m",
        examTag: "Outside Book / Extra Practice 5-Mark Question",
        ans: "<b>Heating Effect of Electric Current &amp; Joule's Law:</b><br><br>" +
             "<b>1. Principle:</b><br>" +
             "When electric current flows through a high-resistance conductor, moving electrons collide repeatedly with lattice atoms, converting electrical potential energy into thermal kinetic energy. This phenomenon is called the <b>heating effect of electric current</b>.<br><br>" +
             "<b>2. Joule's Law of Heating:</b><br>" +
             "The amount of heat (H) produced in a resistor is directly proportional to:<br>" +
             "â€¢ The square of the electric current (H âˆ IÂ²)<br>" +
             "â€¢ The resistance of the conductor (H âˆ R)<br>" +
             "â€¢ The time duration for which current flows (H âˆ t)<br><br>" +
             "<div style='text-align:center; font-size:16px; font-weight:bold; color:#b91c1c; padding:8px; background:#fef2f2; border-radius:8px;'>H = IÂ² R t (Joules)</div><br>" +
             "<b>3. Heating Element Properties:</b><br>" +
             "Heating appliances use <b>Nichrome (an alloy of Nickel and Chromium)</b> as the heating element because:<br>" +
             "1. High electrical resistivity<br>" +
             "2. High melting point (does not melt at high temperatures)<br>" +
             "3. Does not oxidize (burn) readily even when red hot.<br><br>" +
             "<b>4. Everyday Applications:</b><br>" +
             "â€¢ <b>Heating Appliances:</b> Electric irons, geysers, toasters, and room heaters.<br>" +
             "â€¢ <b>Electric Fuse Wire:</b> Made of lead-tin alloy of low melting point; melts instantly to isolate circuits during overloads and short circuits.<br>" +
             "â€¢ <b>Incandescent Light Bulbs:</b> Tungsten filament heats up to over 3000Â°C without melting, glowing brightly in an inert nitrogen/argon gas environment.",
        explanation: "Heat produced H = IÂ²Rt. Nichrome wire is preferred due to high resistivity, high melting point, and oxidation resistance.",
        diagramCaption: "Circuit Diagram of Joule Heating Effect with Nichrome Element",
        diagramSvg: `<svg viewBox="0 0 420 250" style="max-width:100%; height:auto; display:block; margin:0 auto; background:#f8fafc; border-radius:12px; border:1px solid #cbd5e1;">
  <text x="210" y="24" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e293b">Heating Effect of Current / à®œà¯‚à®²à¯ à®µà¯†à®ªà¯à®ª à®µà®¿à®³à¯ˆà®µà¯ (H = IÂ²Rt)</text>
  <defs>
    <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ef4444"/><stop offset="50%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#ef4444"/>
    </linearGradient>
  </defs>
  <!-- Connecting wires -->
  <path d="M 60,180 L 60,80 L 120,80" fill="none" stroke="#2563eb" stroke-width="3"/>
  <path d="M 300,80 L 360,80 L 360,180 L 250,180" fill="none" stroke="#2563eb" stroke-width="3"/>
  <!-- Switch -->
  <circle cx="120" cy="80" r="4" fill="#1e293b"/>
  <line x1="120" y1="80" x2="148" y2="70" stroke="#1e293b" stroke-width="2.5"/>
  <circle cx="150" cy="80" r="4" fill="#1e293b"/>
  <line x1="150" y1="80" x2="175" y2="80" stroke="#2563eb" stroke-width="3"/>
  <!-- Coiled Nichrome Heating Element glowing red/orange -->
  <rect x="170" y="65" width="135" height="30" rx="6" fill="#fef2f2" stroke="#fca5a5"/>
  <path d="M 175,80 Q 185,68 195,80 Q 205,92 215,80 Q 225,68 235,80 Q 245,92 255,80 Q 265,68 275,80 Q 285,92 295,80 L 300,80" fill="none" stroke="url(#glowGrad)" stroke-width="4.5" stroke-linecap="round"/>
  <text x="237" y="112" font-size="10.5" font-weight="bold" fill="#b91c1c" text-anchor="middle">à®¨à®¿à®•à¯à®°à¯‹à®®à¯ à®•à®®à¯à®ªà®¿à®šà¯à®šà¯à®°à¯à®³à¯ (Nichrome Heating Coil)</text>
  <text x="237" y="125" font-size="9" fill="#b91c1c" text-anchor="middle">à®…à®¤à®¿à®• à®®à®¿à®©à¯à®¤à®Ÿà¯ˆ à®Žà®£à¯ &amp; à®‰à®¯à®°à¯ à®‰à®°à¯à®•à¯à®¨à®¿à®²à¯ˆ</text>
  <!-- Battery and current arrow -->
  <path d="M 60,180 L 170,180" fill="none" stroke="#2563eb" stroke-width="3"/>
  <line x1="170" y1="168" x2="170" y2="192" stroke="#dc2626" stroke-width="4"/>
  <line x1="180" y1="174" x2="180" y2="186" stroke="#1e293b" stroke-width="2.5"/>
  <line x1="190" y1="168" x2="190" y2="192" stroke="#dc2626" stroke-width="4"/>
  <line x1="200" y1="174" x2="200" y2="186" stroke="#1e293b" stroke-width="2.5"/>
  <line x1="200" y1="180" x2="250" y2="180" stroke="#2563eb" stroke-width="3"/>
  <text x="185" y="160" font-size="10.5" font-weight="bold" fill="#dc2626" text-anchor="middle">+ V - (Battery)</text>
  <!-- Current direction arrow -->
  <line x1="75" y1="80" x2="95" y2="80" stroke="#16a34a" stroke-width="2"/>
  <polygon points="93,76 101,80 93,84" fill="#16a34a"/>
  <text x="85" y="72" font-size="9" font-weight="bold" fill="#15803d">I â†’</text>
  <!-- Heat radiated waves upwards -->
  <text x="237" y="55" font-size="14" text-anchor="middle">â™¨ï¸ â™¨ï¸ â™¨ï¸</text>
  <!-- Joule's Formula Banner -->
  <rect x="40" y="208" width="340" height="30" rx="6" fill="#1e293b"/>
  <text x="210" y="228" font-size="12" font-weight="bold" fill="#38bdf8" text-anchor="middle">à®œà¯‚à®²à¯ à®µà¯†à®ªà¯à®ª à®µà®¿à®¤à®¿: H = IÂ²Rt (Joules)</text>
</svg>`
      },
      // 12 Mock Test 1-Mark Questions
      { id: "sci_em_u4_out_1m_1", q: "The rate of flow of electric charges through a conductor is defined as:", options: ["Electric Potential", "Electric Current", "Electric Resistance", "Electric Power"], ans: "Electric Current", type: "1m", explanation: "Current I = Q / t." },
      { id: "sci_em_u4_out_1m_2", q: "What is the mathematical equation relating current (I), charge (Q), and time (t)?", options: ["I = Q / t", "I = V / t", "I = W / Q", "I = P / VÂ²"], ans: "I = Q / t", type: "1m", explanation: "Electric current equals charge divided by time." },
      { id: "sci_em_u4_out_1m_3", q: "What is the SI unit of electric current?", options: ["Ampere (A)", "Volt", "Ohm", "Coulomb"], ans: "Ampere (A)", type: "1m", explanation: "Current is measured in Amperes (A)." },
      { id: "sci_em_u4_out_1m_4", q: "The work done per unit charge in moving a unit positive charge between two points is called:", options: ["Potential Difference", "Electric Field", "Electromotive Force", "Capacitance"], ans: "Potential Difference", type: "1m", explanation: "V = W / Q, measured in Volts." },
      { id: "sci_em_u4_out_1m_5", q: "What is the SI unit of potential difference?", options: ["Volt (V)", "Ampere", "Ohm", "Joule"], ans: "Volt (V)", type: "1m", explanation: "Potential difference is measured in Volts (V)." },
      { id: "sci_em_u4_out_1m_6", q: "At constant temperature, current through a conductor is directly proportional to potential difference. This is:", options: ["Ohm's Law", "Joule's Law", "Faraday's Law", "Ampere's Law"], ans: "Ohm's Law", type: "1m", explanation: "V = IR is Ohm's Law." },
      { id: "sci_em_u4_out_1m_7", q: "What is the formula representing Ohm's law?", options: ["V = IR", "P = VI", "H = IÂ²Rt", "W = VQ"], ans: "V = IR", type: "1m", explanation: "Voltage equals current times resistance." },
      { id: "sci_em_u4_out_1m_8", q: "The opposition offered by a material to the flow of electric current is called:", options: ["Resistance", "Conductance", "Voltage", "Inductance"], ans: "Resistance", type: "1m", explanation: "Electrical resistance opposes electron flow." },
      { id: "sci_em_u4_out_1m_9", q: "What is the SI unit of electrical resistance?", options: ["Ohm (Î©)", "Siemens", "Volt", "Watt"], ans: "Ohm (Î©)", type: "1m", explanation: "Resistance is measured in Ohms (Î©)." },
      { id: "sci_em_u4_out_1m_10", q: "The rate at which electrical energy is consumed or converted into other forms of energy is:", options: ["Electric Power", "Electric Current", "Electric Charge", "Work"], ans: "Electric Power", type: "1m", explanation: "P = VI = W / t." },
      { id: "sci_em_u4_out_1m_11", q: "Which of the following represents electrical power?", options: ["P = VI", "P = V / I", "P = IÂ² / R", "P = VÂ²I"], ans: "P = VI", type: "1m", explanation: "Electric power P = V Ã— I." },
      { id: "sci_em_u4_out_1m_12", q: "What is the commercial billing unit of electrical energy consumed in households?", options: ["Kilowatt-hour (kWh)", "Joule", "Watt-second", "Volt-Ampere"], ans: "Kilowatt-hour (kWh)", type: "1m", explanation: "1 kWh = 1 Unit of electricity = 3.6 Ã— 10â¶ Joules." }
    ]
  });
}