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
          q: "Detail the physiological roles of the four major plant hormones: Auxins, Gibberellins, Cytokinins, and Ethylene.",
          ans: `<div style="line-height:1.8;">
            Plant hormones are organic trace chemicals regulating growth, differentiation, and environmental responses:<br><br>

            <b>1. Auxins (Indole-3-Acetic Acid / IAA):</b><br>
            • <b>Apical Dominance:</b> Growing apical bud suppresses lateral axillary bud sprouting.<br>
            • <b>Cell Elongation:</b> Induces cell wall loosening and longitudinal elongation in shoots and coleoptiles.<br>
            • <b>Root Initiation:</b> Stimulates adventitious root formation in stem cuttings.<br>
            • <b>Parthenocarpy:</b> Induces development of seedless fruits without fertilization (e.g. Tomatoes).<br><br>

            <b>2. Gibberellins (GA₃):</b><br>
            • <b>Internodal Elongation:</b> Reverses genetic dwarfism in single-gene dwarf plants (e.g. Maize, Pea).<br>
            • <b>Bolting & Flowering:</b> Causes rapid stem elongation and synchronous flowering in rosette species.<br>
            • <b>Breaks Seed Dormancy:</b> Triggers alpha-amylase synthesis in cereal endosperm to initiate germination.<br><br>

            <b>3. Cytokinins (Kinetin / Zeatin):</b><br>
            • <b>Cell Division:</b> Actively drives cytokinesis in the presence of auxin.<br>
            • <b>Overcomes Apical Dominance:</b> Stimulates lateral bud growth when applied topically.<br>
            • <b>Richmond-Lang Effect:</b> Delays leaf senescence by preserving chlorophyll, proteins, and RNA.<br><br>

            <b>4. Ethylene:</b><br>
            • <b>Fruit Ripening:</b> Speeds up the climacteric ripening of fleshy fruits (banana, mango).<br>
            • <b>Abscission:</b> Promotes formation of abscission layers in senescent leaves, flowers, and fruits.<br>
            • <b>Triple Response:</b> Inhibits longitudinal elongation while enhancing radial swelling of stems.
          </div>`,
          ansTamil: "ஆக்ஸின்: முனை ஆதிக்கம்; ஜிப்ரல்லின்: போல்டிங், தண்டு நீட்சி; சைட்டோகைனின்: செல் பகுப்பு, தாமத முதிர்வு; எத்திலீன்: பழம் பழுத்தல்."
        }
      ]
    }
  ]
};
