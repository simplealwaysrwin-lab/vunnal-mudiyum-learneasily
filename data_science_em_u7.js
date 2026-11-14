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
          type: "7m",
          mark: "7 Marks",
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
          type: "7m",
          mark: "7 Marks",
          examTag: "Public Exam 7M",
          q: "What are the applications of Avogadro's Law?",
          ans: `<div style="line-height:1.8;">
            <b>Avogadro's Law (Statement):</b><br>
            <i>\"Equal volumes of all gases under identical conditions of temperature and pressure contain the same number of molecules.\"</i><br>
            Mathematically: <b>V ∝ n</b> (where V is volume and n is the number of molecules of the gas).<br><br>

            <b>Applications of Avogadro's Law:</b><br><br>

            <b>1. Explains Gay-Lussac's Law of Combining Volumes:</b><br>
            • Gay-Lussac observed that gases react in simple whole-number ratios by volume.<br>
            • <i>Example:</i> 1 volume of Hydrogen + 1 volume of Chlorine ➔ 2 volumes of Hydrogen Chloride gas.<br>
            • By Avogadro's hypothesis (equal volumes contain n molecules):<br>
            &nbsp;&nbsp;n molecules of H₂ + n molecules of Cl₂ ➔ 2n molecules of HCl<br>
            &nbsp;&nbsp;½ molecule of H₂ + ½ molecule of Cl₂ ➔ 1 molecule of HCl.<br>
            • Since hydrogen and chlorine molecules are diatomic, ½ molecule equals 1 atom. Hence, 1 atom of H combines with 1 atom of Cl to produce 1 molecule of HCl, in complete agreement with Dalton's atomic theory.<br><br>

            <b>2. Determination of Atomicity of Elementary Gases:</b><br>
            • Atomicity refers to the number of atoms present in one molecule of an element.<br>
            • Avogadro's law definitively proves that elementary gases such as Hydrogen, Chlorine, Oxygen, and Nitrogen are <b>diatomic molecules (Atomicity = 2: H₂, Cl₂, O₂, N₂)</b>.<br><br>

            <b>3. Derivation of the Molecular Formula of Gases:</b><br>
            • By measuring reacting gas volumes at constant temperature and pressure, Avogadro's law allows chemists to establish the empirical and molecular formulas of volatile compounds (e.g., HCl, NH₃, H₂O).<br><br>

            <b>4. Deduction of Relationship between Molecular Mass and Vapour Density (Molecular Mass = 2 × V.D.):</b><br>
            • <b>Vapour Density (V.D.):</b> The ratio between the mass of a certain volume of a gas/vapour to the mass of the same volume of hydrogen gas measured under identical temperature and pressure conditions.<br>
            <div style="background:#f1f5f9; border-left:4px solid #0284c7; padding:8px 12px; margin:6px 0; border-radius:4px; font-size:13px;">
              V.D. = (Mass of V volume of gas/vapour at STP) / (Mass of V volume of hydrogen at STP)<br><br>
              Applying Avogadro's Law (V volume contains n molecules):<br>
              V.D. = (Mass of n molecules of gas) / (Mass of n molecules of H₂)<br>
              V.D. = (Mass of 1 molecule of gas) / (Mass of 1 molecule of H₂)<br><br>
              Since Hydrogen is a diatomic molecule (1 molecule of H₂ = 2 atoms of H):<br>
              V.D. = (Mass of 1 molecule of gas) / (2 × Mass of 1 atom of H)<br>
              V.D. = ½ × [(Mass of 1 molecule of gas) / (Mass of 1 atom of H)]<br><br>
              Since Relative Molecular Mass = (Mass of 1 molecule of gas) / (Mass of 1 atom of H):<br>
              V.D. = (Relative Molecular Mass) / 2<br>
              <b>∴ Relative Molecular Mass = 2 × Vapour Density (Molecular Mass = 2 × V.D.)</b>
            </div><br>

            <b>5. Determination of Gram Molar Volume of Gases at STP:</b><br>
            • At Standard Temperature and Pressure (STP: 273.15 K and 1 atm), 1 mole of any gas occupies a uniform volume of <b>22.4 litres (or 22,400 cm³)</b>.<br>
            • This constant molar volume is indispensable for stoichiometric calculations in chemical reactions.
          </div>`,
          detailedSolution: {
            step1: "Statement of Avogadro's Law (V ∝ n) and explanation of Gay-Lussac's Law",
            step2: "Determination of atomicity (diatomic nature of elementary gases) and molecular formula",
            step3: "Definition of Vapour Density and complete step-by-step derivation of Molecular Mass = 2 × V.D.",
            step4: "Gram molar volume of gases at STP = 22.4 litres per mole"
          }
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
