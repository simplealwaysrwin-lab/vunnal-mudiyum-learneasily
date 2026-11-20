// Class 10 Science - Unit 16: Plant and Animal Hormones
// Tamil Nadu State Board Samacheer Kalvi Question-Answer Guide (English Medium)

const SCIENCE_EM_UNIT_16_DATA = {
  unitId: "sci_em_u16",
  unitName: "Unit 16: Plant and Animal Hormones",
  subject: "Science",
  syllabus: "Tamil Nadu Samacheer Kalvi Class 10 Science - Botany & Zoology",

  formulas: [
    { title: "Auxins", rule: "Phytohormones promoting apical dominance, cell elongation, and phototropism (discovered by Charles Darwin and F.W. Went)" },
    { title: "Gibberellins", rule: "Promote internodal elongation, reversal of genetic dwarfism, and bolting in rosette plants" },
    { title: "Cytokinins", rule: "Promote cytokinesis (cell division), delay leaf senescence (Richmond-Lang effect), and overcome apical dominance" },
    { title: "Abscisic Acid (ABA)", rule: "Acts as a 'Stress Hormone' inducing stomatal closure under desiccation and promoting leaf abscission and seed dormancy" },
    { title: "Ethylene", rule: "The only naturally occurring gaseous phytohormone accelerating fruit ripening and senescence" },
    { title: "Pituitary Gland", rule: "Master endocrine gland regulating subordinate peripheral glands via tropic hormones (TSH, ACTH, FSH, LH, GH)" },
    { title: "Thyroxine (T₄)", rule: "'Personality Hormone' regulating Basal Metabolic Rate (BMR), thermogenesis, and neuropsychological development" },
    { title: "Insulin & Glucagon", rule: "Dual antagonistic hormones of the pancreatic Islets of Langerhans maintaining normoglycemia (80-120 mg/dL)" },
    { title: "Adrenaline", rule: "'Emergency / Fight-or-Flight Hormone' secreted by adrenal medulla during acute psychological or physiological stress" }
  ],

  subSections: [
    {
      id: "sec_sci_em_16_1",
      title: "Section 1: Phytohormones, Endocrine System & Metabolic Regulations",
      author: "Science - Unit 16: Plant and Animal Hormones",
      questions: [
        {
          id: "sci_em_16_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "Public Exam",
          q: "Which plant growth regulator uniquely exists as a gas under physiological conditions and actively accelerates fruit ripening?",
          options: ["A) Auxin", "B) Gibberellin", "C) Ethylene", "D) Cytokinin"],
          ans: "Answer: <b>C) Ethylene</b><br>Explanation: Ethylene (C₂H₄) is the sole gaseous plant hormone that promotes climacteric respiration, leading to rapid maturation and ripening of fruits such as bananas, apples, and tomatoes.",
          ansTamil: "எத்திலீன் கனிகளைப் பழுக்க வைக்கும் வாயு நிலை ஹார்மோன் ஆகும்."
        },
        {
          id: "sci_em_16_2",
          type: "1m",
          mark: "1 Mark",
          examTag: "Govt Model",
          q: "Which thyroid hormone is popularly termed the 'Personality Hormone' due to its comprehensive governance of physical, mental, and sexual maturation?",
          options: ["A) Growth Hormone", "B) Thyroxine", "C) Insulin", "D) Parathormone"],
          ans: "Answer: <b>B) Thyroxine</b><br>Explanation: Thyroxine directly controls the Basal Metabolic Rate (BMR), tissue differentiation, and central nervous system development, fundamentally shaping physical and psychological personality.",
          ansTamil: "தைராக்சின் ஆளுமை ஹார்மோன் என அழைக்கப்படுகிறது."
        },
        {
          id: "sci_em_16_3",
          type: "2m",
          mark: "2 Marks",
          examTag: "Public Exam",
          q: "What is 'Bolting'? Which phytohormone induces this developmental phenomenon in rosette plants?",
          ans: `<div style="line-height:1.7;">
            • <b>Bolting</b> refers to the rapid internodal elongation of stems just prior to flowering in rosette plants (e.g. Cabbage, Beetroot).<br><br>
            • Treatment with <b>Gibberellins</b> artificially triggers bolting and subsequent profuse flowering under non-inductive photoperiods.
          </div>`,
          ansTamil: "ரோஸட் தாவரங்களில் பூப்பதற்கு முன் தண்டு திடீரென நீட்சியடைவது போல்டிங் எனப்படும்; இதனை ஜிப்ரல்லின் தூண்டுகிறது."
        },
        {
          id: "sci_em_16_4",
          type: "2m",
          mark: "2 Marks",
          examTag: "Key Question",
          q: "Why is Abscisic Acid (ABA) designated as the 'Stress Hormone' in plants?",
          ans: `<div style="line-height:1.7;">
            • Under severe environmental challenges such as drought, extreme heat, or salinity, the endogenous concentration of ABA surges rapidly.<br>
            • ABA causes the guard cells to lose turgor, triggering <b>immediate stomatal closure</b> to minimize transpiration and preserve vital water content. Hence, it functions as a <b>stress hormone</b>.
          </div>`,
          ansTamil: "வறட்சிக் காலத்தில் இலைத்துளைகளை மூடி நீராவிப்போக்கைத் தடுப்பதால் ABA அழுத்த ஹார்மோன் எனப்படுகிறது."
        },
        {
          id: "sci_em_16_5",
          type: "2m",
          mark: "2 Marks",
          examTag: "Public Exam",
          q: "Why is the Pituitary Gland traditionally referred to as the 'Master Gland'?",
          ans: `<div style="line-height:1.7;">
            • The anterior pituitary (adenohypophysis) secretes several tropic hormones, including TSH (Thyroid Stimulating Hormone), ACTH (Adrenocorticotropic Hormone), and Gonadotropins (FSH & LH).<br>
            • These hormones exert direct hierarchical regulatory control over peripheral endocrine glands (Thyroid, Adrenal cortex, and Gonads), coordinating their secretory outputs.
          </div>`,
          ansTamil: "உடலின் பிற நாளமில்லாச் சுரப்பிகளைத் தன் ஹார்மோன்களால் கட்டுப்படுத்துவதால் பிட்யூட்டரி தலைமைச் சுரப்பி ஆகும்."
        },
        {
          id: "sci_em_16_6",
          type: "2m",
          mark: "2 Marks",
          examTag: "Key Question",
          q: "Differentiate between Diabetes Mellitus and Diabetes Insipidus based on hormonal etiology and diagnostic manifestations.",
          ans: `<div style="line-height:1.7;">
            <div class="chalk-table-responsive">
              <table style="width:100%; border-collapse:collapse; font-size:13px; text-align:left;">
                <thead>
                  <tr style="background:#0284c7; color:#fff;">
                    <th style="padding:6px; border:1px solid #cbd5e1;">Parameter</th>
                    <th style="padding:6px; border:1px solid #cbd5e1;">Diabetes Mellitus</th>
                    <th style="padding:6px; border:1px solid #cbd5e1;">Diabetes Insipidus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="padding:6px; border:1px solid #cbd5e1;"><b>Hormonal Cause</b></td>
                    <td style="padding:6px; border:1px solid #cbd5e1;">Deficiency of <b>Insulin</b> from pancreatic beta cells</td>
                    <td style="padding:6px; border:1px solid #cbd5e1;">Deficiency of <b>Vasopressin / ADH</b> from posterior pituitary</td>
                  </tr>
                  <tr style="background:#f8fafc;">
                    <td style="padding:6px; border:1px solid #cbd5e1;"><b>Glycosuria</b></td>
                    <td style="padding:6px; border:1px solid #cbd5e1;">Excretion of glucose in urine (Glycosuria present)</td>
                    <td style="padding:6px; border:1px solid #cbd5e1;">Urine is free of sugar (No glycosuria)</td>
                  </tr>
                  <tr>
                    <td style="padding:6px; border:1px solid #cbd5e1;"><b>Primary Signs</b></td>
                    <td style="padding:6px; border:1px solid #cbd5e1;">Hyperglycemia, Polydipsia (excessive thirst), Polyphagia</td>
                    <td style="padding:6px; border:1px solid #cbd5e1;">Excretion of copious volumes of dilute urine (Polyuria)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>`,
          ansTamil: "டயாபடீஸ் மெல்லிடஸ் இன்சுலின் குறைவால் ஏற்படுகிறது; டயாபடீஸ் இன்சிபிடஸ் ADH குறைவால் ஏற்படுகிறது."
        },
        {
          id: "sci_em_16_7",
          type: "2m",
          mark: "2 Marks",
          examTag: "Govt Model",
          q: "Explain why Adrenaline is called the 'Fight or Flight' or 'Emergency Hormone'.",
          ans: `<div style="line-height:1.7;">
            • Secreted by the adrenal medulla during acute stress, fright, or life-threatening emergencies.<br>
            • It accelerates heart rate, elevates arterial blood pressure, dilates bronchioles, and stimulates glycogenolysis (releasing glucose into circulation). This energizes skeletal muscles to confront danger (fight) or escape (flight).
          </div>`,
          ansTamil: "ஆபத்துக் காலங்களில் சண்டை அல்லது பின்வாங்குதல் நிலைக்கு உடலைத் தயார்படுத்துவதால் அட்ரினலின் அவசரகால ஹார்மோன் ஆகும்."
        },
        {
          id: "sci_em_16_8",
          type: "7m",
          mark: "4 / 7 Marks",
          examTag: "Public Exam 7M",
          diagramImg: (typeof window !== "undefined" && window.IMG_PLANT_B64) ? window.IMG_PLANT_B64 : "images/sci_plant_hormones_diagram.png",
          q: "Detail the physiological roles of the four major plant hormones: Auxins, Gibberellins, Cytokinins, and Ethylene.",
          ans: `<div style="line-height:1.8;">
            <p style="margin-bottom:12px; font-size:14.5px;">
              <b>Plant Hormones:</b> Plant hormones are chemical substances produced by plants. They control and regulate the growth and development of plants. There are four major plant hormones:
            </p>

            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:12px; margin-bottom:16px;">
              <!-- 1. Auxins -->
              <div style="background:#fdf2f8; border:2px solid #ec4899; border-radius:10px; padding:12px 14px;">
                <div style="color:#be185d; font-weight:800; font-size:15px; margin-bottom:6px; display:flex; align-items:center; gap:6px;">
                  <span>🌱</span> <span>1. Auxins</span>
                </div>
                <ul style="margin:0; padding-left:18px; color:#1e293b; font-size:13.5px; line-height:1.7;">
                  <li>Promote <b>cell elongation</b> (increase in cell length).</li>
                  <li>Help in <b>root formation</b>.</li>
                  <li>Control the <b>bending of plants towards light</b> (phototropism).</li>
                  <li><b>Prevent early falling</b> of leaves and fruits.</li>
                </ul>
              </div>

              <!-- 2. Gibberellins -->
              <div style="background:#eff6ff; border:2px solid #3b82f6; border-radius:10px; padding:12px 14px;">
                <div style="color:#1d4ed8; font-weight:800; font-size:15px; margin-bottom:6px; display:flex; align-items:center; gap:6px;">
                  <span>🌾</span> <span>2. Gibberellins</span>
                </div>
                <ul style="margin:0; padding-left:18px; color:#1e293b; font-size:13.5px; line-height:1.7;">
                  <li>Promote <b>stem elongation</b>.</li>
                  <li>Help in <b>seed germination</b>.</li>
                  <li>Break <b>seed dormancy</b>.</li>
                  <li>Increase the <b>size of fruits</b>.</li>
                </ul>
              </div>

              <!-- 3. Cytokinins -->
              <div style="background:#f0fdf4; border:2px solid #22c55e; border-radius:10px; padding:12px 14px;">
                <div style="color:#15803d; font-weight:800; font-size:15px; margin-bottom:6px; display:flex; align-items:center; gap:6px;">
                  <span>🌿</span> <span>3. Cytokinins</span>
                </div>
                <ul style="margin:0; padding-left:18px; color:#1e293b; font-size:13.5px; line-height:1.7;">
                  <li>Promote <b>cell division</b>.</li>
                  <li>Help in the growth of <b>lateral buds</b>.</li>
                  <li>Delay <b>ageing (senescence) of leaves</b>.</li>
                  <li>Help in the <b>development of shoots</b>.</li>
                </ul>
              </div>

              <!-- 4. Ethylene -->
              <div style="background:#fff7ed; border:2px solid #f97316; border-radius:10px; padding:12px 14px;">
                <div style="color:#c2410c; font-weight:800; font-size:15px; margin-bottom:6px; display:flex; align-items:center; gap:6px;">
                  <span>🍎</span> <span>4. Ethylene (Gaseous Hormone)</span>
                </div>
                <ul style="margin:0; padding-left:18px; color:#1e293b; font-size:13.5px; line-height:1.7;">
                  <li>It is a <b>gaseous plant hormone</b>.</li>
                  <li>Helps in <b>fruit ripening</b>.</li>
                  <li>Promotes <b>ageing of flowers and leaves</b>.</li>
                  <li>Helps in the <b>falling (abscission) of leaves and fruits</b>.</li>
                </ul>
              </div>
            </div>

            <!-- Easy Revision Table -->
            <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:12px; margin-bottom:14px; overflow-x:auto;">
              <div style="color:#0f172a; font-weight:800; font-size:14.5px; margin-bottom:8px; border-bottom:2px solid #10b981; padding-bottom:4px;">
                ⚡ Easy Revision Table
              </div>
              <table style="width:100%; border-collapse:collapse; font-size:13.5px; text-align:left;">
                <thead>
                  <tr style="background:#0f766e; color:#ffffff;">
                    <th style="padding:8px 12px; border:1px solid #94a3b8; width:35%;">Hormone</th>
                    <th style="padding:8px 12px; border:1px solid #94a3b8; width:65%;">Main Function</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="background:#fdf2f8;"><td style="padding:8px 12px; border:1px solid #cbd5e1; font-weight:700; color:#be185d;">Auxins</td><td style="padding:8px 12px; border:1px solid #cbd5e1; color:#1e293b;">Cell elongation</td></tr>
                  <tr style="background:#eff6ff;"><td style="padding:8px 12px; border:1px solid #cbd5e1; font-weight:700; color:#1d4ed8;">Gibberellins</td><td style="padding:8px 12px; border:1px solid #cbd5e1; color:#1e293b;">Stem elongation</td></tr>
                  <tr style="background:#f0fdf4;"><td style="padding:8px 12px; border:1px solid #cbd5e1; font-weight:700; color:#15803d;">Cytokinins</td><td style="padding:8px 12px; border:1px solid #cbd5e1; color:#1e293b;">Cell division</td></tr>
                  <tr style="background:#fff7ed;"><td style="padding:8px 12px; border:1px solid #cbd5e1; font-weight:700; color:#c2410c;">Ethylene</td><td style="padding:8px 12px; border:1px solid #cbd5e1; color:#1e293b;">Fruit ripening</td></tr>
                </tbody>
              </table>
            </div>

            <div style="background:#f0fdf4; border-left:4px solid #16a34a; padding:10px 14px; border-radius:6px; margin-top:10px;">
              <b style="color:#15803d;">💡 Exam Tip – Remember these 4 Keywords:</b><br>
              • <b>Auxins:</b> Elongation<br>
              • <b>Gibberellins:</b> Stem growth<br>
              • <b>Cytokinins:</b> Cell division<br>
              • <b>Ethylene:</b> Fruit ripening<br>
              <i style="color:#475569; font-size:12.5px;">Conclusion: These four plant hormones play an important role in the growth, development and other activities of plants.</i>
            </div>
          </div>`,
          ansTamil: "ஆக்ஸின் (செல் நீட்சி), ஜிப்ரல்லின் (தண்டு நீட்சி, முளைத்தல்), சைட்டோகைனின் (செல் பகுப்பு), எத்திலீன் (பழம் பழுத்தல்).",
          blackboard: {
            title: "Plant Hormones and Their Physiological Roles",
            engTitle: "Plant Hormones and Their Physiological Roles",
            fullBoardImg: "images/sci_plant_hormones_diagram.png",
            steps: [
              {
                stepNum: 1,
                badge: "🌱 1. Auxins (Cell Elongation)",
                badgeEn: "🌱 1. Auxins (Cell Elongation)",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#f472b6; font-weight:800; font-size:16px;">1. Auxins (Keyword: Elongation)</div>
                  <div class="bb-box-cyan" style="background:#0f172a; border:2px solid #f472b6; border-radius:10px; padding:12px; margin-top:8px;">
                    <div class="bb-line" style="color:#e2e8f0; font-size:14.5px; line-height:1.7;">
                      • <b style="color:#f472b6;">Cell Elongation:</b> Promotes increase in cell length.<br>
                      • <b style="color:#f472b6;">Root Formation:</b> Stimulates adventitious root initiation.<br>
                      • <b style="color:#f472b6;">Phototropism:</b> Controls bending of shoots towards light.<br>
                      • <b style="color:#f472b6;">Abscission Prevention:</b> Prevents early drop of young leaves and fruits.
                    </div>
                  </div>
                `,
                audioScriptEn: "One. Auxins. Promotes cell elongation, root formation, bending towards light, and prevents early falling of leaves and fruits.",
                audioScriptTa: "ஒன்று. ஆக்ஸின். செல்கள் நீட்சியடையச் செய்தல், வேர் உருவாக்கம், ஒளியை நோக்கி வளைதல் மற்றும் இலைகள், கனிகள் உதிர்வதைத் தடுத்தல்."
              },
              {
                stepNum: 2,
                badge: "🌾 2. Gibberellins (Stem Growth)",
                badgeEn: "🌾 2. Gibberellins (Stem Growth)",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#38bdf8; font-weight:800; font-size:16px;">2. Gibberellins (Keyword: Stem Growth)</div>
                  <div class="bb-box-cyan" style="background:#0f172a; border:2px solid #38bdf8; border-radius:10px; padding:12px; margin-top:8px;">
                    <div class="bb-line" style="color:#e2e8f0; font-size:14.5px; line-height:1.7;">
                      • <b style="color:#38bdf8;">Stem Elongation:</b> Promotes internodal elongation in dwarf plants.<br>
                      • <b style="color:#38bdf8;">Seed Germination:</b> Triggers enzymatic food mobilization.<br>
                      • <b style="color:#38bdf8;">Breaks Dormancy:</b> Breaks seed and bud dormancy.<br>
                      • <b style="color:#38bdf8;">Fruit Size:</b> Increases the size of fruits (e.g., Grapes).
                    </div>
                  </div>
                `,
                audioScriptEn: "Two. Gibberellins. Promotes stem elongation, seed germination, breaks seed dormancy, and increases fruit size.",
                audioScriptTa: "இரண்டு. ஜிப்ரல்லின்கள். தண்டு நீட்சியடைதல், விதை முளைத்தல், விதையின் உறக்க நிலையை நீக்குதல் மற்றும் பழங்களின் அளவை அதிகரித்தல்."
              },
              {
                stepNum: 3,
                badge: "🌿 3. Cytokinins (Cell Division)",
                badgeEn: "🌿 3. Cytokinins (Cell Division)",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#4ade80; font-weight:800; font-size:16px;">3. Cytokinins (Keyword: Cell Division)</div>
                  <div class="bb-box-cyan" style="background:#0f172a; border:2px solid #4ade80; border-radius:10px; padding:12px; margin-top:8px;">
                    <div class="bb-line" style="color:#e2e8f0; font-size:14.5px; line-height:1.7;">
                      • <b style="color:#4ade80;">Cell Division:</b> Actively induces cytokinesis in plant tissues.<br>
                      • <b style="color:#4ade80;">Lateral Bud Growth:</b> Overcomes apical dominance.<br>
                      • <b style="color:#4ade80;">Delays Ageing:</b> Retards leaf senescence (preserves chlorophyll).<br>
                      • <b style="color:#4ade80;">Shoot Development:</b> Promotes organogenesis of shoots.
                    </div>
                  </div>
                `,
                audioScriptEn: "Three. Cytokinins. Promotes cell division, lateral bud growth, delays ageing of leaves, and helps in shoot development.",
                audioScriptTa: "மூன்று. சைட்டோகைனின்கள். செல் பகுப்பைத் தூண்டுதல், பக்கவாட்டு மொட்டுகளின் வளர்ச்சி, இலைகள் முதிர்வடைவதைத் தாமதப்படுத்துதல் மற்றும் தண்டு வளர்ச்சி."
              },
              {
                stepNum: 4,
                badge: "🍎 4. Ethylene (Fruit Ripening)",
                badgeEn: "🍎 4. Ethylene (Fruit Ripening)",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fb923c; font-weight:800; font-size:16px;">4. Ethylene (Keyword: Fruit Ripening)</div>
                  <div class="bb-box-cyan" style="background:#0f172a; border:2px solid #fb923c; border-radius:10px; padding:12px; margin-top:8px;">
                    <div class="bb-line" style="color:#e2e8f0; font-size:14.5px; line-height:1.7;">
                      • <b style="color:#fb923c;">Gaseous Hormone:</b> Only naturally occurring gaseous phytohormone.<br>
                      • <b style="color:#fb923c;">Fruit Ripening:</b> Hastens ripening of bananas, apples, and tomatoes.<br>
                      • <b style="color:#fb923c;">Senescence:</b> Promotes natural ageing of flowers and leaves.<br>
                      • <b style="color:#fb923c;">Abscission:</b> Stimulates dropping of mature leaves and fruits.
                    </div>
                  </div>
                `,
                audioScriptEn: "Four. Ethylene. It is a gaseous plant hormone. Promotes fruit ripening, ageing of flowers, and falling of leaves and fruits.",
                audioScriptTa: "நான்கு. எத்திலீன். இது ஒரு வாயு நிலை தாவர ஹார்மோன். பழங்கள் பழுக்க உதவுதல், இலைகள் மலர்கள் முதிர்வடைதல் மற்றும் உதிர்தலைத் தூண்டுதல்."
              }
            ]
          }
        }
      ]
    }
  ]
};
