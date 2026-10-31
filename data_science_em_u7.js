// 10th Standard Science - Unit 7: Atoms and Molecules
// Tamil Nadu State Board Samacheer Kalvi Question Bank & Solutions (English Medium)

const SCIENCE_EM_UNIT_7_DATA = {
  unitId: "sci_em_u7",
  unitName: "Unit 7: Atoms and Molecules",
  subject: "Science (English Medium)",
  syllabus: "Tamil Nadu Samacheer Kalvi Class 10 Science - Chemistry",

  // Key Formulae & Laws
  formulas: [
    { title: "Number of Moles (from Mass)", rule: "Moles (n) = Mass (m) / Molecular Mass (M)" },
    { title: "Avogadro's Number", rule: "N_A = 6.023 × 10²³ particles/mole" },
    { title: "Molar Volume at STP", rule: "1 mole of any gas occupies 22.4 litres (or 22,400 ml) at STP" },
    { title: "Relation between Vapour Density and Molecular Mass", rule: "Relative Molecular Mass = 2 × Vapour Density (M = 2 × V.D)" },
    { title: "Atomicity", rule: "Total number of atoms present in one molecule (e.g., O₂ = 2, O₃ = 3, P₄ = 4, S₈ = 8)" },
    { title: "Percentage Composition", rule: "% of element = [(Mass of element in 1 mole / Molar mass of compound) × 100]" }
  ],

  subSections: [
    // -------------------------------------------------------------
    // Section 1: Modern Atomic Theory & Mole Concept
    // -------------------------------------------------------------
    {
      id: "sec_sci_em_7_1",
      title: "Section 1: Modern Atomic Theory & Mole Concept",
      author: "Chemistry - Unit 7: Atoms and Molecules",
      questions: [
        {
          id: "sci_em_7_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "Public Exam",
          q: "Which of the following is a triatomic molecule?",
          options: ["a) Glucose", "b) Helium", "c) Carbon dioxide", "d) Hydrogen"],
          ans: "Answer: <b>c) Carbon dioxide (CO₂)</b><br>Explanation: Carbon dioxide has 1 Carbon atom and 2 Oxygen atoms, making a total of 3 atoms, so it is a triatomic molecule.",
          ansTamil: "கார்பன் டை ஆக்சைடு (CO₂) ஒரு மூவணு மூலக்கூறு ஆகும்."
        },
        {
          id: "sci_em_7_2",
          type: "1m",
          mark: "1 Mark",
          examTag: "Govt Model",
          q: "The volume occupied by 1 mole of any gas at standard temperature and pressure (STP) is:",
          options: ["a) 2.24 litres", "b) 22.4 litres", "c) 24.2 litres", "d) 44.8 litres"],
          ans: "Answer: <b>b) 22.4 litres</b><br>Explanation: According to Avogadro's hypothesis, 1 mole of any gas at STP occupies 22.4 litres (molar volume).",
          ansTamil: "STP-ல் 1 மோல் வாயுவின் பருமன் 22.4 லிட்டர் ஆகும்."
        },
        {
          id: "sci_em_7_3",
          type: "2m",
          mark: "2 Marks",
          examTag: "Important",
          q: "Define Atomicity with two examples.",
          ans: `<div style="line-height:1.7;">
            <b>Definition:</b> The number of atoms present in one molecule of an element or compound is called its <b>atomicity</b>.<br><br>
            <b>Examples:</b><br>
            • Oxygen (O₂) - Diatomic molecule (Atomicity = 2)<br>
            • Ozone (O₃) - Triatomic molecule (Atomicity = 3)<br>
            • Phosphorus (P₄) - Polyatomic molecule (Atomicity = 4)
          </div>`,
          ansTamil: "ஒரு மூலக்கூறில் உள்ள அணுக்களின் எண்ணிக்கை அணுக்கட்டு எண் ஆகும்."
        },
        {
          id: "sci_em_7_4",
          type: "2m",
          mark: "2 Marks",
          examTag: "Public Exam",
          q: "State Avogadro's Law.",
          ans: `<div style="line-height:1.7;">
            <b>Avogadro's Law:</b><br>
            "Equal volumes of all gases under the same conditions of temperature and pressure contain equal number of molecules."<br><br>
            <b>Mathematical form:</b> V ∝ n (at constant T and P).
          </div>`,
          ansTamil: "சம பருமனுள்ள அனைத்து வாயுக்களும் சம மூலக்கூறுகளைக் கொண்டிருக்கும்."
        },
        {
          id: "sci_em_7_5",
          type: "5m",
          mark: "5 Marks",
          examTag: "Important 5M",
          q: "List out the postulates of Modern Atomic Theory.",
          ans: `<div style="line-height:1.8;">
            <b>Postulates of Modern Atomic Theory:</b><br><br>
            1. <b>Divisible Atom:</b> An atom is no longer indivisible; it is composed of subatomic particles like electrons, protons, and neutrons.<br>
            2. <b>Isotopes:</b> Atoms of the same element may have different atomic masses (e.g., ₁₇Cl³⁵ and ₁₇Cl³⁷).<br>
            3. <b>Isobars:</b> Atoms of different elements may have the same mass number (e.g., ₁₈Ar⁴⁰ and ₂₀Ca⁴⁰).<br>
            4. <b>Transmutation:</b> Atoms of one element can be transmuted into atoms of other elements by artificial radioactivity.<br>
            5. <b>Mass-Energy Equivalence:</b> Mass can be converted into energy according to Einstein's equation: <b>E = mc²</b>.<br>
            6. <b>Chemical Reaction:</b> The atom is still the smallest particle that takes part in a chemical reaction.
          </div>`,
          detailedSolution: {
            step1: "Atom is composed of subatomic particles (p, n, e⁻)",
            step2: "Isotopes: same atomic number, different mass number",
            step3: "Isobars: different atomic number, same mass number",
            step4: "Artificial transmutation and mass-energy conversion (E = mc²)",
            step5: "Atoms combine in simple ratios and take part in chemical reactions"
          }
        },
        {
          id: "sci_em_7_6",
          type: "5m",
          mark: "5 Marks",
          examTag: "Public Exam 5M",
          q: "What are the applications of Avogadro's Law?",
          ans: `<div style="line-height:1.8;">
            <b>Applications of Avogadro's Law:</b><br><br>
            1. It explains Gay-Lussac's law of combining volumes of gases.<br>
            2. It helps in the determination of atomicity of gases (e.g., proves O₂ and H₂ are diatomic).<br>
            3. It helps to derive the molecular formula of gases.<br>
            4. It establishes the relationship between molecular mass and vapour density:<br>
               &nbsp;&nbsp;<b>Relative Molecular Mass = 2 × Vapour Density</b>.<br>
            5. It helps to determine the molar volume of gases (1 mole occupies 22.4 litres at STP).
          </div>`
        },
        {
          id: "sci_em_7_7",
          type: "2m",
          mark: "2 Marks",
          examTag: "Problem",
          q: "Calculate the number of moles in 1.8 g of water (H₂O). (Atomic mass: H = 1, O = 16)",
          ans: `<div style="line-height:1.7;">
            <b>Solution:</b><br>
            Molar mass of water (H₂O) = (2 × 1) + 16 = <b>18 g/mol</b><br>
            Given mass (m) = 1.8 g<br><br>
            Number of moles (n) = Mass / Molar mass<br>
            n = 1.8 / 18 = <b>0.1 mole</b>.<br><br>
            <b>Answer:</b> 1.8 g of water contains <b>0.1 mole</b>.
          </div>`
        },
        {
          id: "sci_em_7_8",
          type: "2m",
          mark: "2 Marks",
          examTag: "Important",
          q: "Differentiate between an Atom and a Molecule (any two points).",
          ans: `<div style="line-height:1.7;">
            <table style="width:100%; border-collapse:collapse; margin-top:6px;" border="1" cellpadding="6">
              <tr style="background:#f1f5f9;"><th>Atom</th><th>Molecule</th></tr>
              <tr><td>Smallest particle of an element.</td><td>Smallest particle of an element or compound.</td></tr>
              <tr><td>Except noble gases, atoms do not exist independently.</td><td>Exists in a free, stable state.</td></tr>
              <tr><td>Takes part directly in chemical reactions.</td><td>Does not take part directly in chemical reactions.</td></tr>
            </table>
          </div>`
        }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SCIENCE_EM_UNIT_7_DATA;
}
