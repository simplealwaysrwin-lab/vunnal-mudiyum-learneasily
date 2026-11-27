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
          examYear: "2024",
          type: "2m",
          mark: "2 Marks",
          examTag: "Public Exam 2024 (2M)",
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
          examYear: "2023",
          type: "2m",
          mark: "2 Marks",
          examTag: "Public Exam 2023 (2M)",
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
          examYear: "2023",
          type: "2m",
          mark: "2 Marks",
          examTag: "Public Exam 2023 (Q.22 Compulsory)",
          isCompulsory: true,
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
          examTag: "Public Exam 7M",
          q: "What is water of crystallization? Explain with two examples of hydrated salts including the effect of heat and balanced chemical equations.",
          ans: `<div style="line-height:1.8;">
            <b>1. Water of Crystallization (Definition):</b><br>
            • The fixed number of water molecules chemically bound in definite stoichiometric proportions inside one formula unit of a crystalline salt is termed <b>water of crystallization</b>.<br>
            • These water molecules are vital in establishing the salt's <b>geometric crystalline geometry</b> and imparting its <b>characteristic coloration</b>.<br><br>

            <b>2. Hydrated Salts:</b><br>
            • Salts that contain water of crystallization chemically embedded within their crystal lattices are called <b>hydrated salts</b>.<br>
            • General formula: <b>Salt · n H₂O</b> (where n represents the integer count of crystallization water molecules).<br><br>

            <b>3. Example 1: Blue Vitriol:</b><br>
            • <b>Common Name:</b> Blue Vitriol<br>
            • <b>Chemical Name:</b> Copper(II) sulphate pentahydrate<br>
            • <b>Formula:</b> <b style="color:#0284c7;">CuSO₄ · 5H₂O</b><br>
            • <b>Water of Crystallization:</b> 5 molecules (responsible for its vivid azure blue crystalline appearance).<br>
            • <b>Action of Heat:</b> When blue copper sulfate crystals are gently heated in a dry test tube, they lose all 5 water molecules of crystallization, turning into white amorphous anhydrous copper sulphate:<br>
            <div style="background:#eff6ff; border-left:4px solid #0284c7; padding:8px 12px; margin:6px 0; border-radius:4px; font-weight:700;">
              CuSO₄ · 5H₂O (Blue crystal) &nbsp;➔(Heat)&nbsp; CuSO₄ (White powder) + 5H₂O↑
            </div>
            • <i>Reversibility:</i> Upon re-introducing a few drops of water to the white powder, hydration immediately restores the bright blue color.<br><br>

            <b>4. Example 2: Epsom Salt:</b><br>
            • <b>Common Name:</b> Epsom Salt<br>
            • <b>Chemical Name:</b> Magnesium sulphate heptahydrate<br>
            • <b>Formula:</b> <b style="color:#059669;">MgSO₄ · 7H₂O</b><br>
            • <b>Water of Crystallization:</b> 7 molecules (forms colourless needle-like orthorhombic crystals).<br>
            • <b>Action of Heat:</b> Strong heating expels all 7 water molecules, converting it into anhydrous magnesium sulphate:<br>
            <div style="background:#ecfdf5; border-left:4px solid #059669; padding:8px 12px; margin:6px 0; border-radius:4px; font-weight:700;">
              MgSO₄ · 7H₂O (Hydrated salt) &nbsp;➔(Heat)&nbsp; MgSO₄ (Anhydrous salt) + 7H₂O↑
            </div><br>

            <b>Comparative Table of Important Hydrated Salts:</b>
            <div class="chalk-table-responsive" style="margin-top:6px;">
              <table style="width:100%; border-collapse:collapse; font-size:13px; text-align:left;">
                <thead>
                  <tr style="background:#0284c7; color:#fff;">
                    <th style="padding:6px; border:1px solid #cbd5e1;">Common Name</th>
                    <th style="padding:6px; border:1px solid #cbd5e1;">Chemical Name</th>
                    <th style="padding:6px; border:1px solid #cbd5e1;">Molecular Formula</th>
                    <th style="padding:6px; border:1px solid #cbd5e1;">Water Molecules</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="padding:6px; border:1px solid #cbd5e1;">Blue Vitriol</td>
                    <td style="padding:6px; border:1px solid #cbd5e1;">Copper(II) sulphate pentahydrate</td>
                    <td style="padding:6px; border:1px solid #cbd5e1;">CuSO₄ · 5H₂O</td>
                    <td style="padding:6px; border:1px solid #cbd5e1;"><b>5</b></td>
                  </tr>
                  <tr style="background:#f8fafc;">
                    <td style="padding:6px; border:1px solid #cbd5e1;">Epsom Salt</td>
                    <td style="padding:6px; border:1px solid #cbd5e1;">Magnesium sulphate heptahydrate</td>
                    <td style="padding:6px; border:1px solid #cbd5e1;">MgSO₄ · 7H₂O</td>
                    <td style="padding:6px; border:1px solid #cbd5e1;"><b>7</b></td>
                  </tr>
                  <tr>
                    <td style="padding:6px; border:1px solid #cbd5e1;">Green Vitriol</td>
                    <td style="padding:6px; border:1px solid #cbd5e1;">Iron(II) sulphate heptahydrate</td>
                    <td style="padding:6px; border:1px solid #cbd5e1;">FeSO₄ · 7H₂O</td>
                    <td style="padding:6px; border:1px solid #cbd5e1;"><b>7</b></td>
                  </tr>
                  <tr style="background:#f8fafc;">
                    <td style="padding:6px; border:1px solid #cbd5e1;">White Vitriol</td>
                    <td style="padding:6px; border:1px solid #cbd5e1;">Zinc sulphate heptahydrate</td>
                    <td style="padding:6px; border:1px solid #cbd5e1;">ZnSO₄ · 7H₂O</td>
                    <td style="padding:6px; border:1px solid #cbd5e1;"><b>7</b></td>
                  </tr>
                  <tr>
                    <td style="padding:6px; border:1px solid #cbd5e1;">Gypsum</td>
                    <td style="padding:6px; border:1px solid #cbd5e1;">Calcium sulphate dihydrate</td>
                    <td style="padding:6px; border:1px solid #cbd5e1;">CaSO₄ · 2H₂O</td>
                    <td style="padding:6px; border:1px solid #cbd5e1;"><b>2</b></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>`,
          detailedSolution: {
            step1: "Definition of Water of Crystallization and Hydrated Salts",
            step2: "Blue Vitriol (CuSO₄ · 5H₂O) structure, colour and thermal dehydration reaction",
            step3: "Epsom Salt (MgSO₄ · 7H₂O) structure, colour and thermal dehydration reaction",
            step4: "Reference table of key hydrated salts (Green Vitriol, White Vitriol, Gypsum)"
          }
        }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SCIENCE_EM_UNIT_9_DATA;
}
