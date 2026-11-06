// Class 10 Science - Unit 12: Plant Anatomy and Plant Physiology
// Tamil Nadu State Board Samacheer Kalvi Question-Answer Guide (English Medium)

const SCIENCE_EM_UNIT_12_DATA = {
  unitId: "sci_em_u12",
  unitName: "Unit 12: Plant Anatomy and Plant Physiology",
  subject: "Science",
  syllabus: "Tamil Nadu Samacheer Kalvi Class 10 Science - Biology (Botany)",

  formulas: [
    { title: "Tissue Systems (Sachs 1875)", rule: "1. Epidermal tissue system, 2. Ground / Fundamental tissue system, 3. Vascular tissue system" },
    { title: "Radial Vascular Bundle", rule: "Xylem and phloem alternate with each other on different radii (e.g., in plant roots)" },
    { title: "Conjoint Vascular Bundle", rule: "Xylem and phloem lie together on the same radius within one bundle (e.g., in stems and leaves)" },
    { title: "Photosynthesis Overall Equation", rule: "6CO₂ + 12H₂O ➔ C₆H₁₂O₆ (Glucose) + 6H₂O + 6O₂↑ (in presence of sunlight and chlorophyll)" },
    { title: "Light-Dependent Reaction (Hill Reaction)", rule: "Occurs in thylakoid membranes (grana); Photolysis of water generates ATP and NADPH₂ with release of O₂" },
    { title: "Dark Reaction (Calvin Cycle)", rule: "Occurs in stroma; CO₂ is reduced and fixed into glucose using assimilatory powers ATP and NADPH₂" },
    { title: "Respiratory Quotient (RQ)", rule: "RQ = Volume of CO₂ evolved / Volume of O₂ consumed" }
  ],

  subSections: [
    {
      id: "sec_sci_em_12_1",
      title: "Section 1: Plant Anatomy, Photosynthesis & Cellular Respiration",
      author: "Biology - Unit 12: Plant Anatomy and Plant Physiology",
      questions: [
        {
          id: "sci_em_12_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "Public Exam",
          q: "What is the name of the band-like suberin thickenings present on the radial and tangential walls of root endodermal cells?",
          options: ["A) Pith", "B) Casparian strips", "C) Pericycle", "D) Cuticle"],
          ans: "Answer: <b>B) Casparian strips</b><br>Explanation: The endodermal cells of roots possess band-like thickenings made of the water-impermeable waxy substance 'suberin' on their radial and transverse walls, known as Casparian strips.",
          ansTamil: "வேரின் அகத்தோலில் காஸ்பேரியன் பட்டைகள் சுபரின் படிவினால் ஆனவை."
        },
        {
          id: "sci_em_12_2",
          type: "1m",
          mark: "1 Mark",
          examTag: "Govt Model",
          q: "In which specific sub-compartment of the chloroplast does the light-dependent photochemical reaction take place?",
          options: ["A) Stroma matrix", "B) Thylakoid membrane (Grana)", "C) Ribosome", "D) Outer chloroplast envelope"],
          ans: "Answer: <b>B) Thylakoid membrane (Grana)</b><br>Explanation: The photosynthetic light-harvesting complexes and photolysis of water are embedded in the thylakoid membranes (grana). The subsequent enzymatic dark reaction (Calvin cycle) occurs in the fluid stroma.",
          ansTamil: "ஒளி வினை தைலகாய்டு கிரானாவிலும், இருள் வினை ஸ்ட்ரோமாவிலும் நடைபெறும்."
        },
        {
          id: "sci_em_12_3",
          type: "2m",
          mark: "2 Marks",
          examTag: "Important",
          q: "What is a Radial Vascular Bundle? Give an example.",
          ans: `<div style="line-height:1.7;">
            <b>Radial Vascular Bundle:</b><br>
            • A vascular bundle in which xylem and phloem patches lie side by side along <b>different, alternating radii</b> separated by non-vascular parenchymatous tissue.<br><br>
            <b>Example:</b><br>
            Roots of dicotyledonous and monocotyledonous plants.
          </div>`,
          explanation: "In a radial vascular bundle, xylem and phloem patches lie on alternating radii separated by non-vascular parenchymatous tissue, characteristic of plant roots.",
          ansTamil: "சைலமும் புளோயமும் அடுத்தடுத்து வெவ்வேறு ஆரங்களில் அமைந்திருப்பது ஆரப்போக்கு கற்றை எனப்படும் (வேர்களில் காணப்படும்)."
        },
        {
          id: "sci_em_12_4",
          type: "2m",
          mark: "2 Marks",
          examTag: "Public Exam",
          q: "State any two key anatomical differences between a Dicot Root and a Monocot Root.",
          ans: `<div style="line-height:1.7;">
            <div class="chalk-table-responsive" style="overflow-x:auto; -webkit-overflow-scrolling:touch; margin:6px 0;">
              <table style="width:100%; min-width:340px; border-collapse:collapse; margin:4px 0;">
                <thead>
                  <tr style="background:#f1f5f9; border-bottom:2px solid #cbd5e1; text-align:left;">
                    <th style="padding:6px 8px; width:28%;">Feature</th>
                    <th style="padding:6px 8px; width:36%;">Dicot Root (e.g., Bean)</th>
                    <th style="padding:6px 8px; width:36%;">Monocot Root (e.g., Maize)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom:1px solid #e2e8f0;">
                    <td style="padding:6px 8px; font-weight:700;">Number of Xylem Bundles</td>
                    <td style="padding:6px 8px;">Tetrarch (usually four xylem patches).</td>
                    <td style="padding:6px 8px;">Polyarch (numerous xylem patches).</td>
                  </tr>
                  <tr style="border-bottom:1px solid #e2e8f0;">
                    <td style="padding:6px 8px; font-weight:700;">Cambium</td>
                    <td style="padding:6px 8px;">Present during secondary growth.</td>
                    <td style="padding:6px 8px;">Completely absent (no secondary growth).</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 8px; font-weight:700;">Central Pith</td>
                    <td style="padding:6px 8px;">Absent or very small/inconspicuous.</td>
                    <td style="padding:6px 8px;">Well-developed, large central pith.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>`,
          explanation: "Dicot roots have tetrarch xylem bundles and cambium for secondary growth; monocot roots have polyarch xylem bundles, no cambium, and a large well-developed pith.",
          ansTamil: "இருவிதையிலை வேரில் 4 கற்றை சைலம், கேம்பியம் உண்டு; ஒருவிதையிலை வேரில் பல கற்றை சைலம், பித் உண்டு.",
          detailedSolution: {
            title: "Step-by-Step Anatomical Comparison (Dicot Root vs Monocot Root):",
            sections: [
              {
                stepNum: 1,
                badge: "Point 1",
                title: "Number of Xylem Bundles",
                html: "<b>Dicot Root:</b> Tetrarch condition (usually 4 distinct xylem patches radiating from center).<br><b>Monocot Root:</b> Polyarch condition (numerous xylem patches, typically more than 6)."
              },
              {
                stepNum: 2,
                badge: "Point 2",
                title: "Cambium & Secondary Growth",
                html: "<b>Dicot Root:</b> Vascular cambium forms secondary xylem and secondary phloem enabling thickness growth.<br><b>Monocot Root:</b> Cambium is completely absent; no secondary growth occurs."
              },
              {
                stepNum: 3,
                badge: "Point 3",
                title: "Development of Central Pith",
                html: "<b>Dicot Root:</b> Pith is absent or very small/inconspicuous.<br><b>Monocot Root:</b> Pith is large, conspicuous, and well-developed with abundant parenchymatous storage."
              }
            ]
          }
        },
        {
          id: "sci_em_12_5",
          type: "7m",
          mark: "7 Marks",
          examTag: "Important 5M/7M",
          q: "Describe the internal anatomical structure of a Dicot Stem (Sunflower) and state the characteristic features of its vascular bundles.",
          ans: `<div style="line-height:1.8;">
            <b>Internal Structure of Dicot Stem (Sunflower):</b><br><br>
            <b>1. Epidermis:</b><br>
            • Single outermost protective layer of tightly packed rectangular parenchyma cells covered by a thick waxy cuticle with multicellular hair (trichomes) and few stomata.<br><br>
            <b>2. Cortex (divided into three zones):</b><br>
            • <i>Hypodermis:</i> 3 to 5 layers of collenchyma cells providing mechanical strength and tensile support.<br>
            • <i>Middle Cortex:</i> Few layers of thin-walled chlorenchyma cells with intercellular spaces carrying out photosynthesis.<br>
            • <i>Inner Cortex:</i> Several layers of parenchyma cells storing food and water.<br><br>
            <b>3. Endodermis (Starch Sheath):</b><br>
            • Innermost wavy barrel-shaped layer of the cortex rich in starch grains.<br><br>
            <b>4. Stele & Vascular Bundles:</b><br>
            • <i>Pericycle:</i> Sclerenchymatous patches forming a 'hard bastard' cap over each vascular bundle alternating with parenchyma.<br>
            • <i>Arrangement:</i> Arranged in an organized, broken ring around the central large parenchymatous pith.<br>
            • <b>Bundle Characteristics:</b> Conjoint (xylem & phloem on same radius), Collateral, Open (intrafascicular cambium strip present between xylem and phloem allowing secondary growth), and Endarch (protoxylem points inward toward the central pith).
          </div>`,
          detailedSolution: {
            title: "Step-by-Step Anatomical Structure of Dicot Stem:",
            sections: [
              {
                stepNum: 1,
                badge: "Step 1",
                title: "Epidermis & Outer Coverings",
                html: "Outermost single layer of parenchymatous cells covered by a waxy protective cuticle with multicellular epidermal trichomes and stomata for transpiration."
              },
              {
                stepNum: 2,
                badge: "Step 2",
                title: "Three-Zoned Cortex Structure",
                html: "• <b>Hypodermis:</b> 3-5 layers of collenchyma providing mechanical support.<br>• <b>Middle Cortex:</b> Chlorenchyma cells for photosynthesis.<br>• <b>Inner Cortex & Endodermis:</b> Parenchyma food storage and a wavy starch sheath layer."
              },
              {
                stepNum: 3,
                badge: "Step 3",
                title: "Vascular Bundle Characteristics",
                html: "Vascular bundles arranged in a ring; each bundle is <b>Conjoint</b> (same radius), <b>Collateral</b>, <b>Open</b> (intrafascicular cambium present), with <b>Endarch</b> protoxylem directed toward the pith."
              }
            ]
          }
        },
        {
          id: "sci_em_12_6",
          type: "2m",
          mark: "2 Marks",
          examTag: "Definition",
          q: "What is Respiratory Quotient (RQ)? State the RQ value for carbohydrates (glucose).",
          ans: `<div style="line-height:1.7;">
            <b>Respiratory Quotient (RQ):</b><br>
            The ratio of the volume of carbon dioxide (CO₂) liberated to the volume of oxygen (O₂) consumed in respiration over a given period.<br><br>
            <div style="padding:6px 10px; background:#f1f5f9; border-left:3px solid #10b981; margin:6px 0;">
              <b>RQ = Volume of CO₂ liberated / Volume of O₂ consumed</b>
            </div><br>
            • For carbohydrates like glucose: <b>RQ = 1</b> (Since 6 CO₂ / 6 O₂ = 1).
          </div>`,
          explanation: "Respiratory Quotient (RQ) is the ratio of the volume of CO₂ evolved to the volume of O₂ consumed; for carbohydrates like glucose, RQ is exactly 1.",
          ansTamil: "வெளியேற்றப்படும் CO2 / எடுத்துக்கொள்ளப்படும் O2 விகிதம் சுவாச ஈவு ஆகும். குளுக்கோசுக்கு RQ = 1."
        },
        {
          id: "sci_em_12_7",
          type: "2m",
          mark: "2 Marks",
          examTag: "Public Exam",
          q: "Differentiate between Aerobic Respiration and Anaerobic Respiration.",
          ans: `<div style="line-height:1.7;">
            <div class="chalk-table-responsive" style="overflow-x:auto; -webkit-overflow-scrolling:touch; margin:6px 0;">
              <table style="width:100%; min-width:340px; border-collapse:collapse; margin:4px 0;">
                <thead>
                  <tr style="background:#f1f5f9; border-bottom:2px solid #cbd5e1; text-align:left;">
                    <th style="padding:6px 8px; width:28%;">Feature</th>
                    <th style="padding:6px 8px; width:36%;">Aerobic Respiration</th>
                    <th style="padding:6px 8px; width:36%;">Anaerobic Respiration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom:1px solid #e2e8f0;">
                    <td style="padding:6px 8px; font-weight:700;">Oxygen Requirement</td>
                    <td style="padding:6px 8px;">Requires continuous supply of free oxygen (O₂).</td>
                    <td style="padding:6px 8px;">Occurs completely in the absence of oxygen.</td>
                  </tr>
                  <tr style="border-bottom:1px solid #e2e8f0;">
                    <td style="padding:6px 8px; font-weight:700;">End Products</td>
                    <td style="padding:6px 8px;">Carbon dioxide (CO₂) and water (H₂O).</td>
                    <td style="padding:6px 8px;">Ethyl alcohol (ethanol) or lactic acid + CO₂.</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 8px; font-weight:700;">Energy Yield</td>
                    <td style="padding:6px 8px;">High energy yield: 36 or 38 ATP per glucose molecule.</td>
                    <td style="padding:6px 8px;">Low energy yield: Only 2 ATP molecules per glucose.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>`,
          explanation: "Aerobic respiration requires oxygen and produces CO₂, water, and 36-38 ATP; anaerobic respiration occurs without oxygen yielding only 2 ATP with alcohol or lactic acid.",
          ansTamil: "காற்று சுவாசத்தில் 38 ATP மற்றும் CO2+நீர் உருவாகும்; காற்றில்லா சுவாசத்தில் 2 ATP மற்றும் ஆல்கஹால் உருவாகும்.",
          detailedSolution: {
            title: "Step-by-Step Comparison (Aerobic vs Anaerobic Respiration):",
            sections: [
              {
                stepNum: 1,
                badge: "Point 1",
                title: "Oxygen Involvement",
                html: "<b>Aerobic:</b> Requires continuous molecular oxygen (O₂); occurs in cytoplasm and mitochondria.<br><b>Anaerobic:</b> Occurs entirely in the absence of oxygen (fermentation in yeast/muscles); cytoplasm only."
              },
              {
                stepNum: 2,
                badge: "Point 2",
                title: "End Products of Respiration",
                html: "<b>Aerobic:</b> Complete oxidation yields carbon dioxide (CO₂) and water (H₂O).<br><b>Anaerobic:</b> Incomplete oxidation yields ethyl alcohol (ethanol) or lactic acid along with CO₂."
              },
              {
                stepNum: 3,
                badge: "Point 3",
                title: "Net Energy Yield (ATP)",
                html: "<b>Aerobic:</b> High energy output: 36 or 38 molecules of ATP per glucose molecule.<br><b>Anaerobic:</b> Low energy output: Only 2 molecules of ATP synthesized per glucose molecule."
              }
            ]
          }
        },
        {
          id: "sci_em_12_8",
          type: "7m",
          mark: "7 Marks",
          examTag: "Important 5M/7M",
          q: "Compare and explain in detail the Light-Dependent Reaction and the Dark Reaction (Calvin Cycle) of photosynthesis.",
          ans: `<div style="line-height:1.8;">
            <b>The Two Sequential Stages of Photosynthesis:</b><br><br>
            <b>1. Light-Dependent Reaction (Hill Reaction):</b><br>
            • <b>Site of Occurrence:</b> Inside the <b>thylakoid membranes (grana)</b> of the chloroplast.<br>
            • <b>Primary Requirement:</b> Direct solar light energy and photosynthetic pigments (chlorophyll a, b, and carotenoids).<br>
            • <b>Key Events:</b><br>
            &nbsp;&nbsp;a) Pigment antennas absorb radiant light energy, exciting reaction center electrons.<br>
            &nbsp;&nbsp;b) <b>Photolysis of Water:</b> Light energy splits water into protons (H⁺), electrons (e⁻), and molecular oxygen gas (O₂↑), which is released into the atmosphere.<br>
            &nbsp;&nbsp;c) High-energy assimilatory chemicals <b>ATP</b> and <b>NADPH₂</b> are synthesized by photophosphorylation.<br><br>

            <b>2. Dark Reaction (Light-Independent Phase / Calvin Cycle):</b><br>
            • <b>Site of Occurrence:</b> In the aqueous proteinaceous <b>stroma matrix</b> of the chloroplast.<br>
            • <b>Primary Requirement:</b> Does not directly require light photons, but strictly depends on ATP and NADPH₂ produced during the preceding light reaction.<br>
            • <b>Key Events:</b><br>
            &nbsp;&nbsp;a) Carbon Fixation: Atmospheric CO₂ combines with 5-carbon RuBP (Ribulose 1,5-bisphosphate) catalyzed by enzyme <b>RuBisCO</b>.<br>
            &nbsp;&nbsp;b) Reduction: Using chemical energy stored in ATP and NADPH₂, the fixed carbon intermediate is reduced into <b>Glucose (C₆H₁₂O₆)</b>.<br>
            &nbsp;&nbsp;c) Regeneration: RuBP molecules are regenerated to sustain continuous cyclic carbon fixation (Calvin Cycle).
          </div>`,
          detailedSolution: {
            title: "Step-by-Step Mechanism of Photosynthetic Reactions:",
            sections: [
              {
                stepNum: 1,
                badge: "Step 1",
                title: "Light Reaction in Grana (Hill Reaction)",
                html: "Occurs in thylakoid membranes (grana); light absorption causes photolysis of water, evolving O₂ and storing assimilatory chemical power as ATP and NADPH₂."
              },
              {
                stepNum: 2,
                badge: "Step 2",
                title: "Dark Reaction in Stroma (Calvin Cycle)",
                html: "Occurs in the stroma; CO₂ is enzymatically fixed by RuBisCO and reduced into Glucose (C₆H₁₂O₆) utilizing the ATP and NADPH₂ generated in the light phase."
              },
              {
                stepNum: 3,
                badge: "Step 3",
                title: "Overall Photosynthesis Balance",
                html: "<b>6CO₂ + 12H₂O ➔ C₆H₁₂O₆ + 6H₂O + 6O₂↑</b> (in presence of solar light and chlorophyll pigments)."
              }
            ]
          }
        }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SCIENCE_EM_UNIT_12_DATA;
}
