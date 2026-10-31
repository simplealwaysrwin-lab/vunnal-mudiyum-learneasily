// 10th Standard Science - Unit 8: Periodic Classification of Elements
// Tamil Nadu State Board Samacheer Kalvi Question Bank & Solutions (English Medium)

const SCIENCE_EM_UNIT_8_DATA = {
  unitId: "sci_em_u8",
  unitName: "Unit 8: Periodic Classification of Elements",
  subject: "Science (English Medium)",
  syllabus: "Tamil Nadu Samacheer Kalvi Class 10 Science - Chemistry",

  // Key Laws & Concepts
  formulas: [
    { title: "Modern Periodic Law (Henry Moseley)", rule: "The physical and chemical properties of the elements are the periodic functions of their atomic numbers." },
    { title: "Periods and Groups", rule: "The modern periodic table consists of 7 horizontal rows called 'Periods' and 18 vertical columns called 'Groups'." },
    { title: "Atomic Radius Trend", rule: "Decreases across a period (left to right) and increases down a group (top to bottom)." },
    { title: "Ionisation Energy Trend", rule: "Increases along a period and decreases down a group." },
    { title: "Electronegativity", rule: "Halogens have highest electronegativity (Fluorine has maximum value of 4.0 on Pauling scale)." },
    { title: "Rusting of Iron Equation", rule: "4Fe + 3O₂ + 2xH₂O → 2Fe₂O₃·xH₂O (Hydrated ferric oxide - Rust)" }
  ],

  subSections: [
    // -------------------------------------------------------------
    // Section 1: Periodic Table & Metallurgy
    // -------------------------------------------------------------
    {
      id: "sec_sci_em_8_1",
      title: "Section 1: Modern Periodic Table & Alloys",
      author: "Chemistry - Unit 8: Periodic Classification of Elements",
      questions: [
        {
          id: "sci_em_8_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "Public Exam",
          q: "The number of periods and groups in the Modern Periodic Table are respectively:",
          options: ["a) 7, 18", "b) 18, 7", "c) 8, 16", "d) 7, 8"],
          ans: "Answer: <b>a) 7, 18</b><br>Explanation: The Modern Periodic Table has 7 horizontal rows called periods and 18 vertical columns called groups.",
          ansTamil: "7 தொடர்கள் மற்றும் 18 தொகுதிகள் உள்ளன."
        },
        {
          id: "sci_em_8_2",
          type: "1m",
          mark: "1 Mark",
          examTag: "Govt Model",
          q: "An alloy containing mercury as one of its constituents is called:",
          options: ["a) Brass", "b) Bronze", "c) Amalgam", "d) Stainless steel"],
          ans: "Answer: <b>c) Amalgam</b><br>Explanation: An alloy of mercury with one or more other metals is known as an amalgam (e.g., silver-tin amalgam used in dental fillings).",
          ansTamil: "பாதரச உலோகக் கலவை இரசக்கலவை எனப்படும்."
        },
        {
          id: "sci_em_8_3",
          type: "2m",
          mark: "2 Marks",
          examTag: "Important",
          q: "State the Modern Periodic Law.",
          ans: `<div style="line-height:1.7;">
            <b>Modern Periodic Law:</b><br>
            "The physical and chemical properties of elements are the periodic functions of their <b>atomic numbers</b>."<br><br>
            It was formulated by Henry Moseley in 1913 based on X-ray spectral studies.
          </div>`,
          ansTamil: "தனிமங்களின் பண்புகள் அவற்றின் அணு எண்களின் ஆவர்த்தன சார்பாகும்."
        },
        {
          id: "sci_em_8_4",
          type: "2m",
          mark: "2 Marks",
          examTag: "Public Exam",
          q: "What is corrosion? Give the chemical equation for rusting of iron.",
          ans: `<div style="line-height:1.7;">
            <b>Definition:</b> The gradual destruction and decay of metals caused by chemical or electrochemical reaction with atmospheric gases, moisture, and chemicals is called <b>corrosion</b>.<br><br>
            <b>Rusting of Iron:</b><br>
            4Fe + 3O₂ + 2xH₂O → <b>2Fe₂O₃·xH₂O</b> (Hydrated ferric oxide - Rust).
          </div>`,
          ansTamil: "சுற்றுச்சூழலால் உலோகம் சிதைவடைதல் அரிமானம் எனப்படும்."
        },
        {
          id: "sci_em_8_5",
          type: "5m",
          mark: "5 Marks",
          examTag: "Important 5M",
          q: "Tabulate how periodic properties vary along a period and down a group in the Modern Periodic Table.",
          ans: `<div style="line-height:1.8;">
            <b>Trends in Periodic Properties:</b><br><br>
            <table style="width:100%; border-collapse:collapse;" border="1" cellpadding="6">
              <tr style="background:#f1f5f9;">
                <th>Periodic Property</th>
                <th>Along a Period (Left to Right)</th>
                <th>Down a Group (Top to Bottom)</th>
              </tr>
              <tr>
                <td><b>1. Atomic Radius</b></td>
                <td>Decreases (due to increase in effective nuclear charge)</td>
                <td>Increases (due to addition of new shells)</td>
              </tr>
              <tr>
                <td><b>2. Ionisation Energy (IE)</b></td>
                <td>Increases</td>
                <td>Decreases</td>
              </tr>
              <tr>
                <td><b>3. Electron Affinity (EA)</b></td>
                <td>Increases</td>
                <td>Decreases</td>
              </tr>
              <tr>
                <td><b>4. Electronegativity (EN)</b></td>
                <td>Increases</td>
                <td>Decreases</td>
              </tr>
              <tr>
                <td><b>5. Metallic Character</b></td>
                <td>Decreases</td>
                <td>Increases</td>
              </tr>
            </table>
          </div>`,
          detailedSolution: {
            step1: "Atomic radius: decreases across a period, increases down a group",
            step2: "Ionisation energy: increases along a period, decreases down a group",
            step3: "Electron affinity & Electronegativity: increase along period, decrease down group",
            step4: "Metallic character: decreases across period, increases down group"
          }
        },
        {
          id: "sci_em_8_6",
          type: "5m",
          mark: "5 Marks",
          examTag: "Public Exam 5M",
          q: "Explain any four methods of preventing corrosion of metals.",
          ans: `<div style="line-height:1.8;">
            <b>Methods of Preventing Corrosion:</b><br><br>
            1. <b>Galvanization:</b><br>
               The process of coating a protective layer of Zinc on iron articles by dipping in molten zinc or electrolysis. Zinc acts as a barrier.<br><br>
            2. <b>Electroplating:</b><br>
               Coating a superior, corrosion-resistant metal like chromium, nickel, or tin on iron by the process of electrolysis.<br><br>
            3. <b>Alloying:</b><br>
               Mixing iron with carbon, chromium, and nickel to produce Stainless Steel, which completely resists rusting.<br><br>
            4. <b>Sacrificial Protection (Cathodic Protection):</b><br>
               Connecting a more active metal like magnesium or zinc blocks to underground pipes or ship hulls to sacrifice itself and protect iron.
          </div>`
        },
        {
          id: "sci_em_8_7",
          type: "2m",
          mark: "2 Marks",
          examTag: "Important",
          q: "What is an Alloy? Give two examples with their uses.",
          ans: `<div style="line-height:1.7;">
            <b>Definition:</b> A homogeneous mixture of two or more metals, or a metal with a non-metal, is called an <b>alloy</b>.<br><br>
            <b>Examples & Uses:</b><br>
            1. <b>Brass (Cu + Zn):</b> Used in electrical fittings, ornamental objects, and musical instruments.<br>
            2. <b>Bronze (Cu + Sn):</b> Used in making statues, medals, coins, and bells.
          </div>`
        },
        {
          id: "sci_em_8_8",
          type: "2m",
          mark: "2 Marks",
          examTag: "Public Exam",
          q: "Define Ionisation Energy. What is its unit?",
          ans: `<div style="line-height:1.7;">
            <b>Definition:</b> The minimum amount of energy required to remove an electron from the outermost shell of an isolated neutral gaseous atom to form a cation is called <b>Ionisation Energy</b>.<br><br>
            <b>Unit:</b> kJ/mol (Kilojoules per mole) or eV (electron volt).
          </div>`
        }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SCIENCE_EM_UNIT_8_DATA;
}
