// Class 10 Science - Unit 13: Structural Organisation of Animals
// Tamil Nadu State Board Samacheer Kalvi Question-Answer Guide (English Medium)

const SCIENCE_EM_UNIT_13_DATA = {
  unitId: "sci_em_u13",
  unitName: "Unit 13: Structural Organisation of Animals",
  subject: "Science",
  syllabus: "Tamil Nadu Samacheer Kalvi Class 10 Science - Zoology",

  formulas: [
    { title: "Scientific Name of Leech", rule: "Hirudinaria granulosa (Indian Cattle Leech - Phylum Annelida)" },
    { title: "Leech Body Segmentation (Metamerism)", rule: "33 segments (somites) divided into 6 distinct body regions" },
    { title: "Leech Suckers", rule: "Anterior sucker (segments 1 to 5) & Posterior sucker (last 7 segments: 27 to 33)" },
    { title: "Hirudin (Anticoagulant)", rule: "Protein secreted by leech salivary glands preventing blood clotting during ingestion" },
    { title: "Sanguivorous Habit", rule: "Feeding exclusively on the blood of vertebrate host animals" },
    { title: "Scientific Name of Rabbit", rule: "Oryctolagus cuniculus (European Rabbit - Class Mammalia)" },
    { title: "Dental Formula of Rabbit", rule: "I 2/1, C 0/0, PM 3/2, M 3/3 = 16/12 = 28 teeth" },
    { title: "Diastema (Tooth Gap)", rule: "Natural gap between incisors and premolars due to the absence of canines in herbivores" }
  ],

  subSections: [
    {
      id: "sec_sci_em_13_1",
      title: "Section 1: Leech Morphology, Adaptations & Rabbit Anatomy",
      author: "Zoology - Unit 13: Structural Organisation of Animals",
      questions: [
        {
          id: "sci_em_13_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "Public Exam",
          q: "Which specific anticoagulant substance is secreted by the salivary glands of the leech to prevent host blood coagulation?",
          options: ["A) Heparin", "B) Hirudin", "C) Histamine", "D) Pepsin"],
          ans: "Answer: <b>B) Hirudin</b><br>Explanation: The saliva of the leech contains the active polypeptide 'hirudin', an effective anticoagulant that prevents blood clotting, enabling continuous blood feeding.",
          ansTamil: "அட்டையின் உமிழ்நீரில் சுரக்கும் ஹிருடின் ரத்தம் உறைவதைத் தடுக்கிறது."
        },
        {
          id: "sci_em_13_2",
          type: "1m",
          mark: "1 Mark",
          examTag: "Govt Model",
          q: "What is the natural tooth gap between incisors and premolars in the jaw of a rabbit termed as?",
          options: ["A) Coronoid notch", "B) Diastema", "C) Alveolus", "D) Sinusoid"],
          ans: "Answer: <b>B) Diastema</b><br>Explanation: Since rabbits are strictly herbivorous, canine teeth are absent. The resulting toothless gap between incisors and premolars is known as a diastema, which aids in food mastication and sorting.",
          ansTamil: "முயலில் கோரைப் பற்கள் இல்லாத இடைவெளி டயாஸ்டீமா எனப்படும்."
        },
        {
          id: "sci_em_13_3",
          type: "2m",
          mark: "2 Marks",
          examTag: "Important",
          q: "Enumerate any four prominent parasitic adaptations observed in the Indian Cattle Leech.",
          ans: `<div style="line-height:1.7;">
            <b>Key Parasitic Adaptations of Leech:</b><br>
            1. <b>Suckers:</b> Anterior and posterior suckers provide firm adhesion to the host's body wall during locomotion and feeding.<br>
            2. <b>Triradiate 'Y'-shaped Incision:</b> Three muscular jaws in the buccal cavity produce a painless 'Y'-shaped wound in the host's skin.<br>
            3. <b>Anaesthetic Saliva:</b> Salivary secretions contain an anaesthetic agent that renders the bite painless to the host.<br>
            4. <b>Secretion of Hirudin:</b> Prevents blood coagulation, allowing steady ingestion of liquid blood.<br>
            5. <b>Extensive Crop with Diverticula:</b> Ten pairs of lateral crop caeca store blood several times its body weight for slow digestion over months.
          </div>`,
          ansTamil: "உறிஞ்சிகள் மூலம் ஒட்டிக்கொள்ளுதல், வலியற்ற 'Y' வடிவ காயம், ஹிருடின் மூலம் ரத்தம் உறையாமல் உறிஞ்சுதல், தீனிப்பையில் ரத்த சேமிப்பு."
        },
        {
          id: "sci_em_13_4",
          type: "2m",
          mark: "2 Marks",
          examTag: "Public Exam",
          q: "Write down the dental formula of the rabbit and state the total count of teeth.",
          ans: `<div style="line-height:1.7;">
            The dentition in rabbits is heterodont (differentiated teeth) and diphyodont (two sets: milk and permanent teeth).<br><br>
            <b>Dental Formula of Rabbit:</b><br>
            <div style="background:#f8fafc; border:1px solid #cbd5e1; padding:8px 14px; border-radius:8px; display:inline-block; font-weight:700; color:#0f172a; margin:6px 0;">
              I &nbsp; 2/1, &nbsp; C &nbsp; 0/0, &nbsp; PM &nbsp; 3/2, &nbsp; M &nbsp; 3/3 &nbsp;=&nbsp; 16 / 12 &nbsp;=&nbsp; 28 Teeth
            </div><br>
            • <b>I (Incisors):</b> 2 pairs upper jaw (4), 1 pair lower jaw (2)<br>
            • <b>C (Canines):</b> 0 (completely absent)<br>
            • <b>PM (Premolars):</b> 3 pairs upper jaw (6), 2 pairs lower jaw (4)<br>
            • <b>M (Molars):</b> 3 pairs upper jaw (6), 3 pairs lower jaw (6)<br>
            <b>Total number of teeth = 28</b>.
          </div>`,
          ansTamil: "முயலின் பல் சூத்திரம்: I 2/1, C 0/0, PM 3/2, M 3/3 = 28 பற்கள்."
        },
        {
          id: "sci_em_13_5",
          type: "2m",
          mark: "2 Marks",
          examTag: "Important",
          q: "How does cutaneous respiration occur in leeches?",
          ans: `<div style="line-height:1.7;">
            • Leeches lack specialized respiratory organs such as gills or lungs; gaseous exchange takes place entirely through the <b>moist skin (Cutaneous respiration)</b>.<br>
            • Mucus glands present in the body wall constantly secrete mucus, keeping the outer epidermis moist and slimy.<br>
            • Directly beneath the epidermis lies a rich network of capillary-like haemocoelic channels.<br>
            • Dissolved oxygen from the surrounding water or air diffuses directly across the thin, vascularized body wall into the haemocoelic fluid, while CO₂ diffuses outwards.
          </div>`,
          ansTamil: "அட்டையில் தோல் வழியாக விரவல் முறையில் வாயுப் பரிமாற்றம் நிகழ்கிறது (தோல் சுவாசம்)."
        },
        {
          id: "sci_em_13_6",
          type: "2m",
          mark: "2 Marks",
          examTag: "Important",
          q: "What role does the diaphragm play in the respiratory mechanics of the rabbit?",
          ans: `<div style="line-height:1.7;">
            • The diaphragm is a dome-shaped transverse muscular partition separating the thoracic cavity from the abdominal cavity, unique to mammals.<br>
            • <b>Inspiration (Inhalation):</b> Diaphragm muscles contract and flatten, increasing thoracic volume and drawing air into the lungs.<br>
            • <b>Expiration (Exhalation):</b> Diaphragm muscles relax, returning to its convex dome shape; thoracic volume decreases, forcing air out of the lungs.
          </div>`,
          ansTamil: "உதரவிதானம் மார்பறையின் பருமனை மாற்றி உட்சுவாசம் மற்றும் வெளிச்சுவாசத்திற்கு உதவுகிறது."
        },
        {
          id: "sci_em_13_7",
          type: "7m",
          mark: "4 / 7 Marks",
          examTag: "Public Exam 7M",
          q: "Describe the structural organization of the alimentary canal of the leech and explain its mechanism of blood ingestion and digestion.",
          ans: `<div style="line-height:1.8;">
            <b>1. Pre-oral Cavity & Pharynx:</b><br>
            • The triradiate mouth lies in the cup-shaped anterior sucker, bordered by three muscular jaws bearing microscopic denticles to make a 'Y'-shaped wound.<br>
            • The sucking pharynx is surrounded by unicellular salivary glands that secrete <b>hirudin</b> to maintain blood in liquid state.<br><br>

            <b>2. Crop and Lateral Diverticula (Caeca):</b><br>
            • The crop is the most expansive segment of the gut extending from the 9th to the 18th segment.<br>
            • It consists of <b>10 chambers</b>, each giving off a pair of backward-directed lateral pouches (diverticula).<br>
            • The crop serves as a reservoir where ingested host blood several times the leech's own body weight is accommodated without coagulation.<br><br>

            <b>3. Stomach, Intestine & Rectum:</b><br>
            • The last chamber of the crop opens into a small, narrow stomach where enzymatic digestion begins.<br>
            • Digested nutrients are absorbed across the straight intestine, and undigested waste passes into the short rectum to be voided via the dorsal anus on the 26th segment.<br><br>

            <b>Digestion Mechanism:</b><br>
            • Ingested blood is preserved in liquid form within the crop chambers for several months with the aid of symbiotic bacteria.<br>
            • Blood drops pass very gradually into the stomach where proteolytic enzymes break it down, allowing a leech to survive up to over a year on a single full meal.
          </div>`,
          detailedSolution: {
            step1: "Mouth, triradiate jaws and muscular sucking pharynx with hirudin glands",
            step2: "10-chambered crop with lateral diverticula for vast blood storage",
            step3: "Gradual enzymatic digestion in stomach and absorption in intestine"
          }
        },
        {
          id: "sci_em_13_8",
          type: "7m",
          mark: "4 / 7 Marks",
          examTag: "Public Exam 7M",
          q: "Explain the internal structure of the mammalian heart (rabbit) and trace the path of double circulation.",
          ans: `<div style="line-height:1.8;">
            <b>Internal Anatomy of Rabbit Heart:</b><br>
            • The heart is enclosed in a double-layered protective pericardium containing shock-absorbing pericardial fluid.<br>
            • It contains <b>four chambers</b>: two thin-walled superior auricles (atria) and two thick-walled inferior ventricles.<br>
            • The right auriculo-ventricular aperture is guarded by the <b>tricuspid valve</b> (three cusps).<br>
            • The left auriculo-ventricular aperture is guarded by the <b>bicuspid (mitral) valve</b> (two cusps).<br>
            • The exits of the pulmonary artery and systemic aorta are regulated by pocket-shaped <b>semilunar valves</b> to prevent backflow.<br><br>

            <b>Double Circulation Scheme:</b><br>
            Blood passes through the heart twice during each complete circuit through the body:<br>
            1. <b>Pulmonary Circulation:</b> Deoxygenated blood collected from body tissues into the right atrium flows into the right ventricle and is pumped via the pulmonary trunk to the lungs for oxygenation. Oxygen-rich blood returns via pulmonary veins to the left atrium.<br>
            2. <b>Systemic Circulation:</b> Oxygenated blood from the left atrium enters the powerful left ventricle and is pumped at high pressure through the systemic aorta to all tissues and organs of the body.<br>
            • Because oxygenated and deoxygenated blood streams are completely separated by the inter-atrial and inter-ventricular septa, efficiency is maximised for high endothermic metabolism.
          </div>`,
          detailedSolution: {
            step1: "Four-chambered structure, inter-chamber septa, tricuspid and bicuspid valves",
            step2: "Pulmonary circulation circuit between heart and lungs",
            step3: "Systemic circulation circuit distributing oxygenated blood to body organs"
          }
        }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SCIENCE_EM_UNIT_13_DATA;
}

if (typeof window !== 'undefined') { window.SCIENCE_EM_UNIT_13_DATA = SCIENCE_EM_UNIT_13_DATA; }
