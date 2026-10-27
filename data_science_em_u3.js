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
