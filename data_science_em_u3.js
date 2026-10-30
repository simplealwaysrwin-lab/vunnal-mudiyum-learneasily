// 10th Standard Science - Unit 3: Thermal Physics (English Medium)
// Tamil Nadu State Board Samacheer Kalvi Question Bank & Solutions

const SCIENCE_EM_UNIT_3_DATA = {
  unitId: "sci_em_u3",
  unitName: "Unit 3: Thermal Physics",
  subject: "Science (English Medium)",
  syllabus: "Tamil Nadu State Board Samacheer Kalvi Class 10 Science - Physics",

  // Key Formulas & Laws
  formulas: [
    { title: "Boyle's Law", rule: "At constant temperature, pressure of a gas is inversely proportional to volume: P ∝ 1/V (PV = constant)" },
    { title: "Charles's Law", rule: "At constant pressure, volume of a gas is directly proportional to temperature: V ∝ T (V/T = constant)" },
    { title: "Avogadro's Law", rule: "At constant temperature and pressure, volume is directly proportional to number of moles: V ∝ n" },
    { title: "Ideal Gas Equation", rule: "PV = nRT (where R = 8.31 J mol⁻¹ K⁻¹ is the Universal Gas Constant)" },
    { title: "Linear Expansion", rule: "ΔL / L₀ = α_L × ΔT (α_L = Coefficient of linear expansion, unit: K⁻¹)" },
    { title: "Real and Apparent Expansion", rule: "Real Expansion of Liquid = Apparent Expansion + Expansion of Container" }
  ],

  subSections: [
    // -------------------------------------------------------------
    // Section 1: Temperature & Thermal Expansion
    // -------------------------------------------------------------
    {
      id: "sec_sci_em_3_1",
      title: "Section 1: Temperature Scales & Thermal Expansion",
      author: "Physics - Unit 3: Thermal Physics",
      questions: [
        {
          id: "sci_em_3_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "Board Model",
          q: "What is the SI unit of temperature?",
          options: ["a) Degree Celsius (°C)", "b) Fahrenheit (°F)", "c) Kelvin (K)", "d) Joule (J)"],
          ans: "Answer: <b>c) Kelvin (K)</b><br>Explanation: The standard SI unit of temperature is Kelvin (K). Heat energy is measured in Joules (J).",
          explanation: "Kelvin (K) is the base SI unit of thermodynamic temperature."
        },
        {
          id: "sci_em_3_2",
          type: "1m",
          mark: "1 Mark",
          q: "Thermal expansion of a solid body depends on ________.",
          options: ["a) Initial dimensions", "b) Rise in temperature", "c) Nature of material", "d) All of the above"],
          ans: "Answer: <b>d) All of the above</b><br>Explanation: From ΔL = L₀ · α_L · ΔT, expansion depends on initial length (L₀), temperature difference (ΔT), and material coefficient (α_L).",
          explanation: "Expansion relies on material composition, baseline dimensions, and temperature increment."
        },
        {
          id: "sci_em_3_3",
          type: "2m",
          mark: "2 Marks",
          examYear: "2023",
          examTag: "2023*",
          q: "What is meant by Absolute Scale of Temperature (Kelvin Scale)?",
          ans: "<b>Absolute Scale of Temperature:</b><br>The thermodynamic temperature scale where zero (0 K or -273.15°C) represents the temperature at which molecular motion ceases entirely is known as the absolute scale of temperature or Kelvin scale.",
          explanation: "0 K (-273.15°C) corresponds to absolute zero, where molecular thermal energy is minimal."
        },
        {
          id: "sci_em_3_4",
          type: "2m",
          mark: "2 Marks",
          q: "Differentiate between Real expansion and Apparent expansion of liquids.",
          ans: `<div style="line-height:1.7;">
            <b>1. Real Expansion:</b><br>
            The actual expansion of a liquid heated directly without considering the thermal expansion of the containing vessel.<br><br>
            <b>2. Apparent Expansion:</b><br>
            The expansion of liquid observed without taking into account that the container itself has expanded on heating.<br><br>
            <b>Relation:</b> Real Expansion = Apparent Expansion + Expansion of Vessel.
          </div>`,
          explanation: "Real expansion is the true liquid volume change, whereas apparent is observed level change."
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 2: Fundamental Gas Laws & Ideal Gas Equation
    // -------------------------------------------------------------
    {
      id: "sec_sci_em_3_2",
      title: "Section 2: Fundamental Gas Laws & Ideal Gas Equation",
      author: "Physics - Unit 3: Thermal Physics",
      questions: [
        {
          id: "sci_em_3_5",
          type: "1m",
          mark: "1 Mark",
          examTag: "Board Exam",
          q: "What is the universal value of the Universal Gas Constant (R)?",
          options: ["a) 8.31 J mol⁻¹ K⁻¹", "b) 6.023 × 10²³ mol⁻¹", "c) 1.38 × 10⁻²³ J K⁻¹", "d) 9.8 m s⁻²"],
          ans: "Answer: <b>a) 8.31 J mol⁻¹ K⁻¹</b>",
          explanation: "Universal Gas Constant R equals 8.31 J mol⁻¹ K⁻¹."
        },
        {
          id: "sci_em_3_6",
          type: "2m",
          mark: "2 Marks",
          examYear: "2024",
          examTag: "2024*",
          isImportant: true,
          q: "State Boyle's Law.",
          ans: "<b>Boyle's Law:</b><br><i>'When the temperature of a gas is kept constant, the volume of a fixed mass of gas is inversely proportional to its pressure.'</i><br><br>P ∝ 1 / V (or) <b>PV = constant</b>",
          explanation: "At constant T, pressure and volume are inversely proportional."
        },
        {
          id: "sci_em_3_7",
          type: "2m",
          mark: "2 Marks",
          q: "State Charles's Law (Law of Volume).",
          ans: "<b>Charles's Law:</b><br><i>'When the pressure of a gas is kept constant, the volume of a fixed mass of gas is directly proportional to its absolute temperature.'</i><br><br>V ∝ T (or) <b>V / T = constant</b>",
          explanation: "At constant P, volume and absolute temperature are directly proportional."
        },
        {
          id: "sci_em_3_8",
          type: "5m",
          mark: "4 / 7 Marks",
          examYear: "2023",
          examTag: "2023* (Key Comprehensive)",
          isImportant: true,
          q: "Derive the Ideal Gas Equation using fundamental gas laws.",
          ans: `<div style="line-height:1.8;">
            <b>Derivation of Ideal Gas Equation:</b><br>
            The ideal gas equation represents the state of a gas combining Boyle's law, Charles's law, and Avogadro's law.<br><br>
            <b>1. According to Boyle's law (at constant T):</b><br>
            V ∝ 1 / P ---- (1)<br><br>
            <b>2. According to Charles's law (at constant P):</b><br>
            V ∝ T ---- (2)<br><br>
            <b>3. According to Avogadro's law (at constant P and T):</b><br>
            V ∝ n ---- (3)<br>
            (where n is the number of moles of gas)<br><br>
            <b>Combining equations (1), (2), and (3):</b><br>
            V ∝ (n × T) / P<br><br>
            Introducing the Universal Gas Constant 'R' as constant of proportionality:<br>
            V = (n R T) / P<br><br>
            Rearranging the terms:<br>
            <div style="font-size:18px; font-weight:800; color:#0369a1; margin:8px 0;">
              PV = n R T
            </div>
            Where:<br>
            • P = Pressure of the gas (N m⁻²)<br>
            • V = Volume of the gas (m³)<br>
            • n = Number of moles<br>
            • R = Universal gas constant (8.31 J mol⁻¹ K⁻¹)<br>
            • T = Absolute temperature (K)<br><br>
            This equation is called the <b>Ideal Gas Equation</b> (or Equation of State).
          </div>`,
          explanation: "Combining gas laws gives PV = nRT."
        }
      ]
    }
  ]
};


// ==========================================
// ðŸŒŸ Outside Book Practice Questions & Mock Test 1-Mark Points (Unit 3 EM)
// ==========================================
if (typeof SCIENCE_EM_UNIT_3_DATA !== 'undefined') {
  if (!SCIENCE_EM_UNIT_3_DATA.subSections) SCIENCE_EM_UNIT_3_DATA.subSections = [];
  SCIENCE_EM_UNIT_3_DATA.subSections.push({
    id: "sci_em_u3_outside",
    title: "ðŸŒŸ Outside Book Practice Questions & Mock Test 1-Mark Points",
    author: "Expert Science Faculty",
    questions: [
      {
        id: "sci_em_u3_out_5m_1",
        q: "Explain the three modes of heat transfer â€” Conduction, Convection, and Radiation â€” with examples and a neat diagram.",
        type: "5m",
        examTag: "Outside Book / Extra Practice 5-Mark Question",
        ans: "<b>Three Modes of Heat Transfer:</b><br><br>" +
             "<b>1. Conduction:</b><br>" +
             "â€¢ The process of heat transfer in solids from a region of higher temperature to lower temperature without the actual bulk movement of the constituent particles.<br>" +
             "â€¢ Atoms vibrate vigorously and pass vibrational kinetic energy to neighbouring atoms.<br>" +
             "â€¢ <i>Example:</i> A metal spoon placed in hot soup becomes hot throughout.<br><br>" +
             "<b>2. Convection:</b><br>" +
             "â€¢ The process of heat transfer in fluids (liquids and gases) by the actual physical movement of the heated molecules.<br>" +
             "â€¢ Heated fluid expands, becomes less dense and rises up, while cooler, denser fluid descends, establishing circulating convection currents.<br>" +
             "â€¢ <i>Example:</i> Boiling water in an electric kettle; generation of sea and land breezes.<br><br>" +
             "<b>3. Radiation:</b><br>" +
             "â€¢ The process of heat transfer in the form of electromagnetic infrared waves without requiring any material intervening medium.<br>" +
             "â€¢ Radiative heat travels through empty vacuum at the speed of light (3 Ã— 10â¸ m/s).<br>" +
             "â€¢ <i>Example:</i> Solar thermal energy reaching Earth across outer space vacuum; warming hands around an electric room heater.",
        explanation: "Conduction occurs in solids without particle motion; Convection occurs in fluids with particle motion; Radiation travels through vacuum as electromagnetic waves.",
        diagramCaption: "Illustration of Conduction, Convection, and Radiation",
        diagramSvg: `<svg viewBox="0 0 460 260" style="max-width:100%; height:auto; display:block; margin:0 auto; background:#f8fafc; border-radius:12px; border:1px solid #cbd5e1;">
  <text x="230" y="24" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e293b">Three Modes of Heat Transfer</text>
  <path d="M 170,225 Q 185,185 195,170 Q 200,195 205,170 Q 215,185 230,225 Z" fill="#ef4444" opacity="0.9"/>
  <path d="M 180,225 Q 195,195 200,180 Q 205,195 220,225 Z" fill="#f59e0b"/>
  <text x="200" y="242" font-size="11" font-weight="bold" fill="#b91c1c" text-anchor="middle">Flame Source</text>
  <rect x="140" y="110" width="120" height="60" rx="6" fill="#64748b" stroke="#334155" stroke-width="2"/>
  <rect x="144" y="125" width="112" height="42" rx="3" fill="#38bdf8" fill-opacity="0.5"/>
  <path d="M 170,155 Q 165,135 185,135 Q 200,135 195,155" fill="none" stroke="#0284c7" stroke-width="2" stroke-dasharray="3,2"/>
  <polygon points="170,150 166,157 174,156" fill="#0284c7"/>
  <path d="M 230,155 Q 235,135 215,135 Q 200,135 205,155" fill="none" stroke="#0284c7" stroke-width="2" stroke-dasharray="3,2"/>
  <polygon points="230,150 234,157 226,156" fill="#0284c7"/>
  <text x="200" y="152" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">Convection</text>
  <text x="200" y="164" font-size="8.5" fill="#0369a1" text-anchor="middle">(Fluid Currents)</text>
  <path d="M 260,120 L 370,120 L 370,132 L 260,132 Z" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
  <line x1="270" y1="126" x2="355" y2="126" stroke="#ea580c" stroke-width="2.5"/><polygon points="353,122 363,126 353,130" fill="#ea580c"/>
  <text x="315" y="112" font-size="10.5" font-weight="bold" fill="#c2410c" text-anchor="middle">Conduction</text>
  <text x="315" y="145" font-size="9" fill="#c2410c" text-anchor="middle">(Along Solid Handle)</text>
  <g stroke="#dc2626" stroke-width="1.8" fill="none">
    <path d="M 120,205 Q 105,210 90,205 Q 75,200 60,205"/><polygon points="62,201 54,205 62,209" fill="#dc2626"/>
    <path d="M 120,220 Q 105,225 90,220 Q 75,215 60,220"/><polygon points="62,216 54,220 62,224" fill="#dc2626"/>
  </g>
  <text x="80" y="190" font-size="10.5" font-weight="bold" fill="#b91c1c" text-anchor="middle">Radiation</text>
  <text x="80" y="240" font-size="9" fill="#b91c1c" text-anchor="middle">(Thermal Waves)</text>
</svg>`
      },
      {
        id: "sci_em_u3_out_5m_2",
        q: "Explain the construction, working principle, and design features of a Thermos Flask (Vacuum Flask) with a neat diagram.",
        type: "5m",
        examTag: "Outside Book / Extra Practice 5-Mark Question",
        ans: "<b>Thermos Flask (Vacuum Flask):</b><br><br>" +
             "<b>1. Introduction:</b><br>" +
             "Invented by Sir James Dewar in 1892, a thermos flask is designed to minimize all three modes of heat transfer (conduction, convection, and radiation) to keep hot liquids hot and cold liquids cold for a prolonged duration.<br><br>" +
             "<b>2. Construction and Heat Reduction Features:</b><br>" +
             "â€¢ <b>Double-Walled Glass/Steel Container:</b> It has two vessels nested one inside the other.<br>" +
             "â€¢ <b>Vacuum Layer:</b> Air between the double walls is completely evacuated. Since conduction and convection strictly require a physical material medium, the vacuum eliminates heat loss or gain by <b>conduction and convection</b>.<br>" +
             "â€¢ <b>Silvered Mirror Coating:</b> The facing surfaces of the inner and outer walls are silver-coated. Silver mirrors reflect thermal infrared radiation back into the flask, preventing heat loss by <b>radiation</b>.<br>" +
             "â€¢ <b>Insulating Stopper:</b> The neck of the flask is sealed with an insulating cork, rubber, or plastic stopper to prevent heat escape through convection currents and evaporation.<br>" +
             "â€¢ <b>Outer Shock-Proof Casing:</b> A metal or plastic casing with a shock-absorbing base support pad protects the fragile inner vacuum vessel.",
        explanation: "Vacuum between double walls prevents conduction and convection; silvered lining reflects radiation; insulating stopper stops air convection.",
        diagramCaption: "Cross-Section of a Double-Walled Thermos Flask",
        diagramSvg: `<svg viewBox="0 0 380 280" style="max-width:100%; height:auto; display:block; margin:0 auto; background:#f8fafc; border-radius:12px; border:1px solid #cbd5e1;">
  <text x="190" y="24" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e293b">Thermos Flask (Vacuum Flask)</text>
  <rect x="110" y="45" width="160" height="205" rx="16" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
  <rect x="155" y="35" width="70" height="28" rx="5" fill="#ca8a04" stroke="#854d0e" stroke-width="1.5"/>
  <text x="190" y="52" font-size="9.5" font-weight="bold" fill="#ffffff" text-anchor="middle">Insulating Stopper</text>
  <rect x="125" y="70" width="130" height="165" rx="10" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5"/>
  <rect x="130" y="75" width="120" height="155" rx="8" fill="#cbd5e1" stroke="#64748b" stroke-dasharray="2,2"/>
  <rect x="138" y="83" width="104" height="142" rx="6" fill="#f8fafc" stroke="#38bdf8" stroke-width="2"/>
  <rect x="142" y="105" width="96" height="116" rx="4" fill="#fb923c" fill-opacity="0.75"/>
  <text x="190" y="165" font-size="11" font-weight="bold" fill="#7c2d12" text-anchor="middle">Hot / Cold Liquid</text>
  <line x1="126" y1="120" x2="50" y2="100" stroke="#0284c7" stroke-width="1.5"/><circle cx="126" cy="120" r="3" fill="#0284c7"/>
  <text x="45" y="95" font-size="9.5" font-weight="bold" fill="#0369a1">Vacuum Space</text><text x="45" y="110" font-size="8" fill="#0369a1">Stops Conduction &amp; Convection</text>
  <line x1="242" y1="120" x2="310" y2="100" stroke="#7c3aed" stroke-width="1.5"/><circle cx="242" cy="120" r="3" fill="#7c3aed"/>
  <text x="315" y="95" font-size="9.5" font-weight="bold" fill="#6d28d9">Silvered Lining</text><text x="315" y="110" font-size="8" fill="#6d28d9">Reflects Radiation</text>
  <rect x="160" y="238" width="60" height="10" rx="3" fill="#475569"/>
  <text x="190" y="265" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Protective Base Support</text>
</svg>`
      },
      // 12 Mock Test 1-Mark Questions
      { id: "sci_em_u3_out_1m_1", q: "What is the form of energy that flows from a body at higher temperature to one at lower temperature?", options: ["Heat", "Work", "Charge", "Pressure"], ans: "Heat", type: "1m", explanation: "Heat is thermal energy in transit driven by temperature differences." },
      { id: "sci_em_u3_out_1m_2", q: "The degree of hotness or coldness of a physical body is quantitatively measured by:", options: ["Temperature", "Density", "Specific heat", "Internal energy"], ans: "Temperature", type: "1m", explanation: "Temperature indicates the thermal state and direction of heat flow." },
      { id: "sci_em_u3_out_1m_3", q: "What is the SI unit of temperature?", options: ["Kelvin (K)", "Celsius (Â°C)", "Fahrenheit (Â°F)", "Joule"], ans: "Kelvin (K)", type: "1m", explanation: "Kelvin (K) is the SI base unit for thermodynamic temperature." },
      { id: "sci_em_u3_out_1m_4", q: "Heat transfer in solids without the actual bodily motion of molecules is called:", options: ["Conduction", "Convection", "Radiation", "Expansion"], ans: "Conduction", type: "1m", explanation: "Conduction takes place through molecular vibrations in solids." },
      { id: "sci_em_u3_out_1m_5", q: "Heat transfer in liquids and gases through the actual bulk movement of heated particles is called:", options: ["Convection", "Conduction", "Radiation", "Sublimation"], ans: "Convection", type: "1m", explanation: "Convection occurs in fluids due to density gradients." },
      { id: "sci_em_u3_out_1m_6", q: "Heat transfer by means of electromagnetic waves without requiring a material medium is called:", options: ["Radiation", "Conduction", "Convection", "Refraction"], ans: "Radiation", type: "1m", explanation: "Thermal radiation travels across vacuum as infrared rays." },
      { id: "sci_em_u3_out_1m_7", q: "Which mode of heat transfer can take place across an absolute vacuum?", options: ["Radiation only", "Conduction only", "Convection only", "All three"], ans: "Radiation only", type: "1m", explanation: "Only electromagnetic radiation can travel through vacuum." },
      { id: "sci_em_u3_out_1m_8", q: "The amount of heat required to raise the temperature of 1 kg of a substance by 1 K is called:", options: ["Specific heat capacity", "Heat capacity", "Latent heat", "Thermal conductance"], ans: "Specific heat capacity", type: "1m", explanation: "C = Q / (m Ã— Î”T)." },
      { id: "sci_em_u3_out_1m_9", q: "What is the SI unit of specific heat capacity?", options: ["J kgâ»Â¹ Kâ»Â¹", "J Kâ»Â¹", "J sâ»Â¹", "cal gâ»Â¹"], ans: "J kgâ»Â¹ Kâ»Â¹", type: "1m", explanation: "Joules per kilogram Kelvin." },
      { id: "sci_em_u3_out_1m_10", q: "The heat absorbed or released during a change of state at constant temperature is called:", options: ["Latent heat", "Specific heat", "Sensible heat", "Reaction heat"], ans: "Latent heat", type: "1m", explanation: "Latent heat changes physical state without changing temperature." },
      { id: "sci_em_u3_out_1m_11", q: "What is the normal boiling point of pure water at standard atmospheric pressure?", options: ["100Â°C (373.15 K)", "0Â°C", "273 K", "300 K"], ans: "100Â°C (373.15 K)", type: "1m", explanation: "Water boils at 100Â°C under 1 atmosphere pressure." },
      { id: "sci_em_u3_out_1m_12", q: "Which instrument is used to measure temperature accurately?", options: ["Thermometer", "Barometer", "Calorimeter", "Voltmeter"], ans: "Thermometer", type: "1m", explanation: "A thermometer measures temperature." }
    ]
  });
}