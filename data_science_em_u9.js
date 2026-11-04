// Class 10 Science - Unit 9: Solutions
// Tamil Nadu State Board Samacheer Kalvi Question-Answer Guide (English Medium)

const SCIENCE_EM_UNIT_9_DATA = {
  unitId: "sci_em_u9",
  unitName: "Unit 9: Solutions",
  subject: "Science",
  syllabus: "Tamil Nadu Samacheer Kalvi Class 10 Science - Chemistry",

  formulas: [
    { title: "Mass Percentage", rule: "Mass % = [Mass of solute / (Mass of solute + Mass of solvent)] × 100" },
    { title: "Volume Percentage", rule: "Volume % = [Volume of solute / Volume of solution] × 100" },
    { title: "Solubility", rule: "Maximum mass of solute (in grams) that can dissolve in 100g of solvent at a given temperature" },
    { title: "Blue Vitriol", rule: "CuSO₄ · 5H₂O (Copper sulphate pentahydrate)" },
    { title: "Epsom Salt", rule: "MgSO₄ · 7H₂O (Magnesium sulphate heptahydrate)" },
    { title: "Gypsum", rule: "CaSO₄ · 2H₂O (Calcium sulphate dihydrate)" }
  ],

  subSections: [
    {
      id: "sec_sci_em_9_1",
      title: "Section 1: Types of Solutions & Solubility",
      author: "Chemistry - Unit 9: Solutions",
      questions: [
        {
          id: "sci_em_9_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "Public Exam",
          q: "A solution of sugar in water is an example of which type of solution?",
          options: ["A) Homogeneous binary solution", "B) Heterogeneous solution", "C) Ternary solution", "D) Colloidal solution"],
          ans: "Answer: <b>A) Homogeneous binary solution</b><br>Explanation: Sugar acts as solute and water acts as solvent, completely mixing into a single uniform phase containing two components.",
          ansTamil: "சர்க்கரை கரைசல் ஒருபடித்தான இருமக் கரைசல் ஆகும்."
        },
        {
          id: "sci_em_9_2",
          type: "1m",
          mark: "1 Mark",
          examTag: "Govt Model",
          q: "What is the maximum amount of Sodium Chloride (NaCl) that can dissolve in 100g of water at 25°C?",
          options: ["A) 25 g", "B) 36 g", "C) 45 g", "D) 54 g"],
          ans: "Answer: <b>B) 36 g</b><br>Explanation: The solubility of NaCl in 100g of water at 25°C is exactly 36 grams, forming a saturated solution.",
          ansTamil: "25°C-ல் 100 கி நீரில் NaCl-ன் கரைதிறன் 36 கிராம்."
        },
        {
          id: "sci_em_9_3",
          type: "2m",
          mark: "2 Marks",
          examTag: "Important",
          q: "What is a solution? Name its two essential components.",
          ans: `<div style="line-height:1.7;">
            <b>Solution:</b><br>
            A <b>homogeneous mixture</b> of two or more substances is called a solution.<br><br>
            <b>Two Components:</b><br>
            1. <b>Solute:</b> The substance present in a lesser amount by weight in a solution.<br>
            2. <b>Solvent:</b> The substance present in a larger amount by weight in which the solute dissolves.
          </div>`,
          ansTamil: "கரைசல் என்பது கரைபொருள் மற்றும் கரைப்பான் இணைந்த ஒருபடித்தான கலவை."
        },
        {
          id: "sci_em_9_4",
          type: "2m",
          mark: "2 Marks",
          examTag: "Public Exam",
          q: "Differentiate between Saturated and Unsaturated solutions.",
          ans: `<div style="line-height:1.7;">
            • <b>Saturated Solution:</b> A solution in which no more solute can be dissolved at a given temperature.<br>
            &nbsp;&nbsp;<i>Example: 36g of NaCl in 100g of water at 25°C.</i><br><br>
            • <b>Unsaturated Solution:</b> A solution containing less amount of solute than that of the saturated solution at that temperature (more solute can dissolve).<br>
            &nbsp;&nbsp;<i>Example: 10g of NaCl in 100g of water at 25°C.</i>
          </div>`,
          ansTamil: "தெவிட்டிய கரைசலில் மேலும் கரைபொருள் கரையாது; தெவிட்டாத கரைசலில் மேலும் கரைக்கலாம்."
        },
        {
          id: "sci_em_9_5",
          type: "7m",
          mark: "7 Marks",
          examTag: "Important 5M",
          q: "Explain the various factors affecting solubility.",
          ans: `<div style="line-height:1.8;">
            <b>Factors Affecting Solubility:</b><br><br>
            1. <b>Nature of Solute and Solvent:</b><br>
            • Based on the principle "<b>Like dissolves like</b>", polar solutes dissolve readily in polar solvents (e.g., common salt dissolves in water), while non-polar compounds dissolve in non-polar solvents (e.g., fat dissolves in ether).<br><br>
            2. <b>Effect of Temperature:</b><br>
            • <b>Endothermic processes:</b> Solubility of solids increases with an increase in temperature (e.g., KNO₃ in water).<br>
            • <b>Exothermic processes:</b> Solubility decreases with an increase in temperature (e.g., Ce₂(SO₄)₃).<br>
            • <b>Gases in Liquids:</b> Solubility of gases in liquids always decreases with an increase in temperature.<br><br>
            3. <b>Effect of Pressure (Henry's Law):</b><br>
            • An increase in pressure increases the solubility of a gas in a liquid (e.g., carbonated soft drink bottles are packed under high pressure). Pressure has practically no effect on the solubility of solids in liquids.
          </div>`,
          detailedSolution: {
            step1: "Nature of solute and solvent (Like dissolves like)",
            step2: "Effect of temperature on solid and gas solubility",
            step3: "Effect of pressure on gas solubility (Henry's Law)"
          }
        },
        {
          id: "sci_em_9_6",
          type: "2m",
          mark: "2 Marks",
          examTag: "Numerical",
          q: "A solution was prepared by dissolving 25g of sugar in 100g of water. Calculate the mass percentage of the solution.",
          ans: `<div style="line-height:1.7;">
            <b>Solution:</b><br>
            Mass of solute (sugar) = 25 g<br>
            Mass of solvent (water) = 100 g<br>
            Total mass of solution = 25 + 100 = <b>125 g</b><br><br>
            <b>Mass Percentage = (Mass of Solute / Mass of Solution) × 100</b><br>
            = (25 / 125) × 100<br>
            = (1 / 5) × 100 = <b>20%</b>.<br><br>
            <b>Answer: The mass percentage of the sugar solution is 20%.</b>
          </div>`,
          ansTamil: "நிறைச் சதவீதம் = (25 / 125) × 100 = 20%."
        },
        {
          id: "sci_em_9_7",
          type: "2m",
          mark: "2 Marks",
          examTag: "Public Exam",
          q: "Distinguish between Hygroscopic and Deliquescent substances.",
          ans: `<div style="line-height:1.7;">
            • <b>Hygroscopic Substances:</b> Substances that absorb moisture from the atmosphere when exposed to air without dissolving or changing their physical state.<br>
            &nbsp;&nbsp;<i>Examples: Concentrated H₂SO₄, Silica gel, CaO.</i><br><br>
            • <b>Deliquescent Substances:</b> Substances that absorb enough moisture from the atmosphere to completely dissolve themselves in the absorbed water and turn into a liquid solution.<br>
            &nbsp;&nbsp;<i>Examples: Sodium hydroxide (NaOH), Calcium chloride (CaCl₂).</i>
          </div>`,
          ansTamil: "ஈரமுறிஞ்சிகள் ஈரத்தை உறிஞ்சும் கரையாது; ஈரமுறிஞ்சிக் கரைபவை நீரிலேயே கரைந்துவிடும்."
        },
        {
          id: "sci_em_9_8",
          type: "7m",
          mark: "7 Marks",
          examTag: "Important 5M",
          q: "What is water of crystallization? Explain with two examples of hydrated salts.",
          ans: `<div style="line-height:1.8;">
            <b>Water of Crystallization:</b><br>
            When salts crystallize from their aqueous solutions, they incorporate a fixed number of water molecules into their crystal lattice. This fixed number of water molecules is called <b>water of crystallization</b>.<br><br>
            <b>Hydrated Salts:</b><br>
            Salts that contain water of crystallization in their crystal structure are called hydrated salts.<br><br>
            <b>Examples:</b><br>
            1. <b>Blue Vitriol:</b><br>
            • Chemical name: Copper(II) sulphate pentahydrate<br>
            • Formula: <b>CuSO₄ · 5H₂O</b><br>
            • Contains 5 molecules of water of crystallization, giving it a vibrant blue color. On heating, it loses water molecules and turns into white anhydrous CuSO₄.<br><br>
            2. <b>Epsom Salt:</b><br>
            • Chemical name: Magnesium sulphate heptahydrate<br>
            • Formula: <b>MgSO₄ · 7H₂O</b><br>
            • Contains 7 molecules of water of crystallization.
          </div>`
        }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SCIENCE_EM_UNIT_9_DATA;
}
