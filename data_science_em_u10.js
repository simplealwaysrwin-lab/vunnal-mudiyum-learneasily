// Class 10 Science - Unit 10: Types of Chemical Reactions
// Tamil Nadu State Board Samacheer Kalvi Question-Answer Guide (English Medium)

const SCIENCE_EM_UNIT_10_DATA = {
  unitId: "sci_em_u10",
  unitName: "Unit 10: Types of Chemical Reactions",
  subject: "Science",
  syllabus: "Tamil Nadu Samacheer Kalvi Class 10 Science - Chemistry",

  formulas: [
    { title: "pH Calculation", rule: "pH = -log₁₀[H⁺]" },
    { title: "pOH Calculation", rule: "pOH = -log₁₀[OH⁻]" },
    { title: "Relationship between pH and pOH", rule: "pH + pOH = 14 (at 25°C)" },
    { title: "Ionic Product of Water", rule: "K_w = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴ mol² dm⁻⁶" },
    { title: "Neutral Solution", rule: "pH = 7 (e.g., Pure water)" },
    { title: "Acidic Solution", rule: "pH < 7" },
    { title: "Basic (Alkaline) Solution", rule: "pH > 7" }
  ],

  subSections: [
    {
      id: "sec_sci_em_10_1",
      title: "Section 1: Types of Chemical Reactions & pH Scale",
      author: "Chemistry - Unit 10: Types of Chemical Reactions",
      questions: [
        {
          id: "sci_em_10_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "Public Exam",
          q: "Which of the following is an example of a combination reaction?",
          options: ["A) 2H₂ + O₂ → 2H₂O", "B) CaCO₃ → CaO + CO₂", "C) Zn + 2HCl → ZnCl₂ + H₂", "D) AgNO₃ + NaCl → AgCl + NaNO₃"],
          ans: "Answer: <b>A) 2H₂ + O₂ → 2H₂O</b><br>Explanation: A reaction in which two or more reactants combine to form a single product is called a combination reaction.",
          ansTamil: "2H₂ + O₂ → 2H₂O என்பது கூடுகை வினை ஆகும்."
        },
        {
          id: "sci_em_10_2",
          type: "1m",
          mark: "1 Mark",
          examTag: "Govt Model",
          q: "What is the normal pH range of human blood?",
          options: ["A) 5.5", "B) 6.5", "C) 7.35 to 7.45", "D) 8.5"],
          ans: "Answer: <b>C) 7.35 to 7.45</b><br>Explanation: Human blood is slightly alkaline with an optimal pH range of 7.35 to 7.45. Any deviation beyond this narrow limit can be fatal.",
          ansTamil: "மனித இரத்தத்தின் pH மதிப்பு 7.35 முதல் 7.45 வரை."
        },
        {
          id: "sci_em_10_3",
          type: "2m",
          mark: "2 Marks",
          examTag: "Important",
          q: "Differentiate between Reversible and Irreversible reactions.",
          ans: `<div style="line-height:1.7;">
            <table style="width:100%; border-collapse:collapse; margin-top:6px;" border="1" cellpadding="6">
              <tr style="background:#f1f5f9;"><th>Reversible Reaction</th><th>Irreversible Reaction</th></tr>
              <tr><td>Takes place in both forward and backward directions.</td><td>Takes place in only one direction (forward).</td></tr>
              <tr><td>Attains a state of dynamic chemical equilibrium.</td><td>Proceeds to completion (never attains equilibrium).</td></tr>
              <tr><td>Example: PCl₅ ⇌ PCl₃ + Cl₂</td><td>Example: C + O₂ → CO₂</td></tr>
            </table>
          </div>`,
          ansTamil: "மீள் வினை இரு திசைகளிலும் நடக்கும்; மீளாத வினை ஒரே திசையில் நடக்கும்."
        },
        {
          id: "sci_em_10_4",
          type: "2m",
          mark: "2 Marks",
          examTag: "Public Exam",
          q: "State any four factors that affect the rate of a chemical reaction.",
          ans: `<div style="line-height:1.7;">
            1. <b>Nature of Reactants:</b> Ionic substances react faster than covalent substances.<br>
            2. <b>Concentration of Reactants:</b> Higher concentration increases the frequency of collisions, thus increasing reaction rate.<br>
            3. <b>Temperature:</b> Increasing temperature provides kinetic energy to molecules, speeding up reaction rate.<br>
            4. <b>Catalyst:</b> A catalyst lowers the activation energy and increases the rate of reaction.<br>
            5. <b>Surface Area of Reactants:</b> Powdered solids provide greater surface area and react much faster.
          </div>`,
          ansTamil: "வினைபடு பொருட்களின் தன்மை, செறிவு, வெப்பநிலை, வினைவேக மாற்றி மற்றும் புறப்பரப்பளவு."
        },
        {
          id: "sci_em_10_5",
          type: "7m",
          mark: "7 Marks",
          examTag: "Important 5M",
          q: "What is the pH scale? Explain the role of pH in everyday life.",
          ans: `<div style="line-height:1.8;">
            <b>pH Scale:</b><br>
            The pH of a solution is defined as the negative logarithm to the base 10 of the hydrogen ion concentration in moles per litre.<br>
            <b>Formula: pH = -log₁₀[H⁺]</b> (Devised by Danish chemist S.P.L. Sorenson in 1909).<br><br>
            <b>Importance of pH in Everyday Life:</b><br>
            1. <b>Digestive System:</b> Our stomach produces dilute Hydrochloric acid (HCl) with a pH around <b>2.0</b>, which helps in the digestion of food without harming the stomach lining.<br>
            2. <b>Tooth Decay:</b> Tooth enamel made of calcium phosphate corrodes when the pH in the mouth falls <b>below 5.5</b> due to acid produced by bacteria. Alkaline toothpaste neutralizes excess acid.<br>
            3. <b>pH of Blood:</b> The pH of human blood must strictly remain between <b>7.35 and 7.45</b>.<br>
            4. <b>Soil pH in Agriculture:</b> Citrus fruits thrive in slightly alkaline soil, while paddy requires slightly acidic soil.<br>
            5. <b>Acid Rain:</b> When atmospheric pollution causes rainwater pH to fall <b>below 5.6</b>, it is termed acid rain, which severely harms aquatic life and stone monuments.
          </div>`,
          detailedSolution: {
            step1: "Definition of pH scale: pH = -log10[H+]",
            step2: "Digestion in stomach (stomach acid pH ~ 2.0)",
            step3: "Tooth decay prevention (mouth pH below 5.5 causes enamel erosion)",
            step4: "Soil fertility & acid rain (rainwater pH < 5.6)"
          }
        },
        {
          id: "sci_em_10_6",
          type: "2m",
          mark: "2 Marks",
          examTag: "Numerical",
          q: "Calculate the pH of a solution whose hydrogen ion concentration is 1 × 10⁻⁴ M. Is the solution acidic or basic?",
          ans: `<div style="line-height:1.7;">
            <b>Solution:</b><br>
            Given: [H⁺] = 1 × 10⁻⁴ M<br>
            Formula: <b>pH = -log₁₀[H⁺]</b><br><br>
            pH = -log₁₀[1 × 10⁻⁴]<br>
            pH = -(-4 log₁₀ 10)<br>
            pH = 4 × 1 = <b>4</b>.<br><br>
            <b>Conclusion:</b> Since the pH value is 4 (less than 7), the solution is <b>acidic</b>.
          </div>`,
          ansTamil: "pH = -log10[10^-4] = 4; pH < 7 என்பதால் இது அமிலக் கரைசல்."
        },
        {
          id: "sci_em_10_7",
          type: "2m",
          mark: "2 Marks",
          examTag: "Public Exam",
          q: "What is a double displacement reaction? Illustrate with a balanced chemical equation.",
          ans: `<div style="line-height:1.7;">
            <b>Double Displacement Reaction:</b><br>
            A reaction in which two reacting ionic compounds mutually exchange their ions to form two new compounds is called a double displacement reaction.<br><br>
            <b>Balanced Equation:</b><br>
            <b>AgNO₃ + NaCl → AgCl↓ + NaNO₃</b><br>
            (Silver nitrate reacts with sodium chloride in aqueous solution to form a curdy white precipitate of silver chloride).
          </div>`,
          ansTamil: "அயனிப் பரிமாற்றம் மூலம் புதிய சேர்மங்கள் உருவாகும் வினை: AgNO₃ + NaCl → AgCl↓ + NaNO₃."
        },
        {
          id: "sci_em_10_8",
          type: "7m",
          mark: "7 Marks",
          examTag: "Important 5M",
          q: "What is chemical equilibrium? State its characteristic features.",
          ans: `<div style="line-height:1.8;">
            <b>Chemical Equilibrium:</b><br>
            A state in a reversible chemical reaction at which the rate of the forward reaction equals the rate of the reverse reaction is called <b>chemical equilibrium</b>. At this state, concentrations of reactants and products remain constant.<br><br>
            <b>Characteristics of Chemical Equilibrium:</b><br>
            1. <b>Dynamic Nature:</b> Reactions do not cease at equilibrium; the forward and reverse reactions proceed continuously at identical rates.<br>
            2. <b>Closed System:</b> Chemical equilibrium can be attained only in a closed system where no reactants or products can escape.<br>
            3. <b>Constancy of Concentrations:</b> The measurable properties (concentrations, pressure, color, density) remain constant over time.<br>
            4. <b>Approachable from Either Side:</b> Equilibrium can be established starting either from pure reactants or from pure products.<br>
            5. <b>Effect of Catalyst:</b> A catalyst does not alter the equilibrium position because it accelerates both forward and backward reactions equally.
          </div>`
        }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SCIENCE_EM_UNIT_10_DATA;
}
