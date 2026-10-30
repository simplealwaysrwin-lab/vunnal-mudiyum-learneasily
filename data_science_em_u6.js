// Class 10 Science - Unit 6: Nuclear Physics
// Tamil Nadu State Board Samacheer Kalvi Question-Answer Guide (English Medium)

const SCIENCE_EM_UNIT_6_DATA = {
  unitId: "sci_em_u6",
  unitName: "Unit 6: Nuclear Physics",
  subject: "Science",
  syllabus: "Tamil Nadu Samacheer Kalvi Class 10 Science - Physics",

  // Important Formulas & Nuclear Laws
  formulas: [
    { title: "Soddy-Fajans Displacement Law (Alpha Decay)", rule: "Z^A X => (Z-2)^(A-4) Y + 2^4 He (Mass number decreases by 4, Atomic number decreases by 2)" },
    { title: "Beta Decay", rule: "Z^A X => (Z+1)^A Y + e^- (Atomic number increases by 1, Mass number remains unchanged)" },
    { title: "Gamma Decay", rule: "Only energy state changes; Atomic number (Z) and Mass number (A) remain unchanged" },
    { title: "Einstein's Mass-Energy Equivalence", rule: "E = Δm × c² (1 amu mass defect = 931 MeV energy)" },
    { title: "Radioactivity Units", rule: "1 Curie (Ci) = 3.7 × 10¹⁰ Bq | 1 Rutherford (Rd) = 10⁶ Bq | 1 Becquerel (Bq) = 1 disintegration/second" },
    { title: "Permissible Radiation Dose", rule: "Safe limit is 250 mR (milli-Roentgen) per week or 20 mSv per year" }
  ],

  subSections: [
    // -------------------------------------------------------------
    // Section 1: Radioactivity, Alpha, Beta & Gamma Rays
    // -------------------------------------------------------------
    {
      id: "sec_sci_em_6_1",
      title: "Section 1: Radioactivity & Properties of Alpha, Beta and Gamma Rays",
      author: "Physics - Unit 6: Nuclear Physics",
      questions: [
        {
          id: "sci_em_6_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "Board Exam",
          q: "Who was the first scientist to discover natural radioactivity in 1896?",
          options: ["A) Marie Curie", "B) Henri Becquerel", "C) Ernest Rutherford", "D) J.J. Thomson"],
          ans: "Answer: <b>B) Henri Becquerel</b><br>Explanation: Henri Becquerel accidentally discovered that uranium salts spontaneously emit penetrating radiation that blackens photographic plates.",
          ansTamil: "கதிரியக்கத்தை முதன்முதலில் கண்டுபிடித்தவர் ஹென்றி பெக்கோரல்."
        },
        {
          id: "sci_em_6_2",
          type: "1m",
          mark: "1 Mark",
          examTag: "Govt Model",
          q: "Which material is used as control rods in a nuclear reactor to absorb excess neutrons?",
          options: ["A) Cadmium or Boron", "B) Uranium", "C) Heavy water", "D) Graphite"],
          ans: "Answer: <b>A) Cadmium or Boron</b><br>Explanation: Cadmium and Boron have a very high neutron absorption cross-section, allowing them to regulate and sustain the chain reaction safely.",
          ansTamil: "நியூட்ரான்களை உறிஞ்ச காட்மியம் அல்லது போரான் தண்டுகள் பயன்படுகின்றன."
        },
        {
          id: "sci_em_6_3",
          type: "2m",
          mark: "2 Marks",
          examTag: "High Yield",
          q: "Distinguish between natural radioactivity and artificial (induced) radioactivity.",
          ans: `<div style="line-height:1.7;">
            <b>1. Natural Radioactivity:</b><br>
            • Spontaneous emission of radiation by heavy elements with atomic number Z > 82 (e.g. Uranium, Thorium).<br>
            • Cannot be controlled by human agency; primarily emits alpha, beta, and gamma radiation.<br><br>
            <b>2. Artificial Radioactivity:</b><br>
            • Man-made nuclear disintegration induced by bombarding stable lighter nuclei (Z < 82) with neutrons or alpha particles.<br>
            • Can be initiated, stopped, and controlled by humans; emits positrons and neutrons.
          </div>`,
          ansTamil: "இயற்கை கதிரியக்கம் தன்னிச்சையானது; செயற்கை கதிரியக்கம் மனிதனால் தூண்டப்பட்டு கட்டுப்படுத்தக்கூடியது."
        },
        {
          id: "sci_em_6_4",
          type: "2m",
          mark: "2 Marks",
          examTag: "Board Exam",
          q: "Mention four radioactive isotopes and their medical diagnostic or therapeutic uses.",
          ans: `<div style="line-height:1.7;">
            1. <b>Radio-Iodine (I-131):</b> Used to diagnose and treat goitre and thyroid cancer.<br>
            2. <b>Radio-Cobalt (Co-60):</b> Emits high-energy gamma rays used in radiation therapy to destroy malignant cancer tumors.<br>
            3. <b>Radio-Sodium (Na-24):</b> Injected to trace blood clots and monitor blood circulation efficiency.<br>
            4. <b>Radio-Iron (Fe-59):</b> Diagnoses anemia and studies red blood cell production in bone marrow.
          </div>`,
          ansTamil: "I-131: தைராய்டு, Co-60: புற்றுநோய், Na-24: இரத்த ஓட்டம், Fe-59: இரத்த சோகை."
        },
        {
          id: "sci_em_6_5",
          type: "7m",
          mark: "7 Marks",
          examTag: "Board Exam 7M High Yield",
          q: "Compare the properties of Alpha, Beta, and Gamma rays. Differentiate between Nuclear Fission and Nuclear Fusion.",
          ans: `<div style="line-height:1.7;">
            <b>1. Comparison of Alpha, Beta, and Gamma Rays:</b><br>
            • <b>Nature:</b> Alpha rays are positively charged Helium nuclei (+2e); Beta rays are fast-moving streams of electrons (-e); Gamma rays are neutral, uncharged electromagnetic photons.<br>
            • <b>Ionizing Power:</b> Alpha rays have the highest ionizing power (100 times greater than Beta and 10,000 times greater than Gamma). Gamma has the lowest ionizing power.<br>
            • <b>Penetrating Power:</b> Gamma rays have extraordinary penetrating ability (passes through thick lead and steel). Alpha rays have very poor penetration (stopped by a single sheet of paper).<br><br>
            <b>2. Nuclear Fission vs Nuclear Fusion:</b><br>
            • <b>Process:</b> Fission is the splitting of a heavy radioactive nucleus (U-235) into two lighter nuclei; Fusion is the combining of two light nuclei (Hydrogen/Deuterium) into a heavier nucleus.<br>
            • <b>Temperature Required:</b> Fission proceeds at room temperature; Fusion requires extreme temperatures of 10⁷ K to 10⁸ K and immense pressure (thermonuclear reaction).<br>
            • <b>Energy Released:</b> Energy released per unit mass in fusion is far greater than in fission.<br>
            • <b>Applications:</b> Fission is utilized in atom bombs and nuclear power plants; Fusion powers hydrogen bombs and is the stellar energy source in the Sun and stars.
          </div>`,
          ansTamil: "ஆல்ஃபா அதிக அயனியாக்கும் திறன், காமா அதிக ஊடுருவும் திறன் கொண்டது. பிளவில் உட்கரு உடைகிறது; இணைவில் உட்கருக்கள் இணைகின்றன (சூரிய ஆற்றல்).",
          checkpoints: [
            { pt: 1, text: "Alpha: Positively charged Helium nuclei (+2e) with high mass.", taText: "ஆல்ஃபா: +2e நேர்மின்னூட்டம் கொண்ட ஹீலியம் உட்கருவாகும்." },
            { pt: 2, text: "Beta: Negatively charged fast-moving electrons (-e) with low mass.", taText: "பீட்டா: -e எதிர்மின்னூட்டம் கொண்ட அதிவேக எலக்ட்ரான்கள் ஆகும்." },
            { pt: 3, text: "Gamma: Neutral electromagnetic photons with zero charge and rest mass.", taText: "காமா: மின்னூட்டமும் நிறையும் அற்ற மின்காந்த ஃபோட்டான்கள் ஆகும்." },
            { pt: 4, text: "Ionization power: Alpha is highest, Beta is moderate, Gamma is lowest.", taText: "அயனியாக்கும் திறன்: ஆல்ஃபா மிக அதிகம், பீட்டா மிதமானது, காமா மிகக் குறைவு." },
            { pt: 5, text: "Penetrating power: Gamma penetrates lead blocks; Alpha stopped by paper.", taText: "ஊடுருவும் திறன்: காமா ஈயத்தையும் ஊடுருவும்; ஆல்ஃபா காகிதத்தால் தடுக்கப்படும்." },
            { pt: 6, text: "Nuclear Fission: Heavy nucleus (U-235) splits into lighter nuclei by neutron.", taText: "அணுக்கரு பிளவு: யுரேனியம் போன்ற கனமான உட்கரு இரு லேசான உட்கருக்களாகப் பிளக்கிறது." },
            { pt: 7, text: "Nuclear Fusion: Light nuclei (Hydrogen/Deuterium) fuse at 10^7 K.", taText: "அணுக்கரு இணைவு: லேசான உட்கருக்கள் 10^7 K மிக அதிக வெப்பத்தில் இணைகின்றன." },
            { pt: 8, text: "Stellar energy: Nuclear fusion powers the Sun and all glowing stars.", taText: "விண்மீன் ஆற்றல்: சூரியன் மற்றும் விண்மீன்கள் ஒளிர்வது அணுக்கரு இணைவு மூலமாகும்." },
            { pt: 9, text: "Weapons: Fission powers atom bomb; fusion powers hydrogen bomb.", taText: "ஆயுதங்கள்: பிளவு அணுகுண்டிலும், இணைவு ஹைட்ரஜன் குண்டிலும் செயல்படுகிறது." },
            { pt: 10, text: "Safety shielding: Lead aprons and concrete walls block lethal gamma rays.", taText: "பாதுகாப்பு: ஈய உடைகள் மற்றும் தடிமனான கான்கிரீட் சுவர்கள் கதிர்வீச்சைத் தடுக்கின்றன." }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 2: Nuclear Reactor & Radiation Safety Measures
    // -------------------------------------------------------------
    {
      id: "sec_sci_em_6_2",
      title: "Section 2: Nuclear Reactor Components & Safety Protocols",
      author: "Physics - Unit 6: Nuclear Physics",
      questions: [
        {
          id: "sci_em_6_6",
          type: "7m",
          mark: "7 Marks",
          examTag: "Board Exam 7M High Yield",
          q: "Describe the essential components of a nuclear power reactor and their specific functions. State safety precautions against radiation hazards.",
          ans: `<div style="line-height:1.7;">
            <b>1. Essential Components of a Nuclear Reactor:</b><br>
            • <b>Nuclear Fuel:</b> The fissionable material loaded into the reactor core (Uranium U-235, Plutonium Pu-239).<br>
            • <b>Moderator:</b> Slows down fast-moving fission neutrons to thermal speeds to sustain steady chain reactions (Heavy water D₂O, pure graphite).<br>
            • <b>Control Rods:</b> Boron or Cadmium rods inserted into the core to absorb excess neutrons and adjust reaction rates.<br>
            • <b>Coolant:</b> Liquid or gas (light water, heavy water, liquid sodium) that circulates around the core to remove heat and generate steam for turbines.<br>
            • <b>Biological Shield:</b> A massive 2 to 2.5 meter thick concrete wall lined with lead surrounding the reactor to prevent lethal gamma radiation from escaping.<br><br>
            <b>2. Radiation Safety Measures:</b><br>
            • Radioactive isotopes must always be handled remotely using lead pincers and kept inside <b>thick lead boxes</b>.<br>
            • Technicians and doctors must wear <b>lead-lined aprons and lead gloves</b>.<br>
            • Personnel must wear a <b>pocket dosimeter</b> to monitor cumulative radiation dosage and maintain it below 250 mR/week.
          </div>`,
          ansTamil: "அணுக்கரு உலையின் பாகங்கள்: எரிபொருள், தணிப்பான், கட்டுப்பாட்டுத் தண்டுகள், குளிர்விப்பான், பாதுகாப்புச் சுவர். ஈயப் பெட்டிகள், ஆடைகள் மற்றும் டோசிமீட்டர் பாதுகாப்புக்கு முக்கியம்.",
          checkpoints: [
            { pt: 1, text: "Nuclear Reactor: Generates controlled chain reaction to produce electric power.", taText: "அணுக்கரு உலை: மின்சாரம் தயாரிக்க கட்டுப்படுத்தப்பட்ட தொடர்வினையை நிகழ்த்துகிறது." },
            { pt: 2, text: "Fuel: Fissile materials like Uranium-235 or Plutonium-239 are loaded.", taText: "எரிபொருள்: யுரேனியம்-235 அல்லது புளூட்டோனியம்-239 பயன்படுகின்றன." },
            { pt: 3, text: "Moderator: Heavy water (D2O) and graphite slow down fast neutrons.", taText: "தணிப்பான்: கனநீர் மற்றும் கிராஃபைட் அதிவேக நியூட்ரான்களின் வேகத்தைக் குறைக்கின்றன." },
            { pt: 4, text: "Control rods: Boron and Cadmium absorb excess neutrons safely.", taText: "கட்டுப்பாட்டுத் தண்டுகள்: போரான் மற்றும் காட்மியம் அதிகப்படியான நியூட்ரான்களை உறிஞ்சுகின்றன." },
            { pt: 5, text: "Coolant: Water, heavy water, or liquid sodium absorbs intense heat.", taText: "குளிர்விப்பான்: நீர் அல்லது திரவ சோடியம் உலை வெப்பத்தை வெளியேற்றி நீராவி உருவாக்குகிறது." },
            { pt: 6, text: "Radiation Shield: 2 to 2.5 metre thick lead concrete walls encase the reactor.", taText: "தடுப்புச் சுவர்: 2 முதல் 2.5 மீட்டர் தடிமனான ஈயக் கான்கிரீட் சுவர் கதிர்வீச்சைத் தடுக்கிறது." },
            { pt: 7, text: "Radio-carbon dating: C-14 calculates age of fossils, wood, and ancient mummies.", taText: "கார்பன் கணிப்பு: C-14 மூலம் புதைபடிவங்கள் மற்றும் பண்டைய மரங்களின் வயதை அறியலாம்." },
            { pt: 8, text: "Lead storage: Radioactive materials must be stored inside thick lead containers.", taText: "ஈயப் பெட்டிகள்: கதிரியக்கப் பொருட்களை தடிமனான ஈயப் பெட்டிகளில் சேமிக்க வேண்டும்." },
            { pt: 9, text: "Dosimeter badge: Monitors occupational radiation exposure levels for workers.", taText: "டோசிமீட்டர்: ஊழியர்கள் பெற்ற கதிர்வீச்சின் அளவை அளவிடக் கட்டாயம் அணிய வேண்டும்." },
            { pt: 10, text: "Safe dosage limit: Exposure must remain strictly under 250 mR per week.", taText: "பாதுகாப்பு வரம்பு: வாரத்திற்கு 250 மில்லி ராண்ட்ஜன் அளவுக்கு மிகாமல் இருக்க வேண்டும்." }
          ]
        }
      ]
    }
  ]
};


// ==========================================
// ðŸŒŸ Outside Book Practice Questions & Mock Test 1-Mark Points (Unit 6 EM)
// ==========================================
if (typeof SCIENCE_EM_UNIT_6_DATA !== 'undefined') {
  if (!SCIENCE_EM_UNIT_6_DATA.subSections) SCIENCE_EM_UNIT_6_DATA.subSections = [];
  SCIENCE_EM_UNIT_6_DATA.subSections.push({
    id: "sci_em_u6_outside",
    title: "ðŸŒŸ Outside Book Practice Questions & Mock Test 1-Mark Points",
    author: "Expert Science Faculty",
    questions: [
      {
        id: "sci_em_u6_out_5m_1",
        q: "Explain the essential components, functions, and working principle of a Nuclear Reactor with a neat labeled diagram.",
        type: "5m",
        examTag: "Outside Book / Extra Practice 5-Mark Question",
        ans: "<b>Components and Working Principle of a Nuclear Reactor:</b><br><br>" +
             "<b>1. Fundamental Principle:</b><br>" +
             "A nuclear reactor produces electrical power through a <b>controlled nuclear fission chain reaction</b>, releasing thermal energy at a steady, sustainable rate.<br><br>" +
             "<b>2. Essential Components:</b><br>" +
             "â€¢ <b>Nuclear Fuel:</b> Fissile material like Uranium-235 (Â²Â³âµU) or Plutonium-239 (Â²Â³â¹Pu) packed securely into sealed fuel rods.<br>" +
             "â€¢ <b>Moderator:</b> Slows down fast-moving neutrons produced during fission to thermal speeds without capturing them, ensuring continuous fission. Common moderators: <b>Heavy water (Dâ‚‚O)</b> and high-purity <b>Graphite</b>.<br>" +
             "â€¢ <b>Control Rods:</b> Made of strong neutron-absorbing materials such as <b>Boron</b> or <b>Cadmium</b>. Inserted or withdrawn from the reactor core to adjust the multiplication factor and regulate reaction rate.<br>" +
             "â€¢ <b>Coolant:</b> Liquid that circulates through the core to extract heat and transfer it to the heat exchanger/steam generator. Examples: Demineralized water, heavy water, and liquid Sodium.<br>" +
             "â€¢ <b>Biological Radiation Shield:</b> A massive <b>2 to 2.5 metre thick high-density concrete wall reinforced with lead</b> encloses the reactor core to shield operating personnel and the surrounding environment from lethal gamma rays and energetic neutrons.",
        explanation: "Nuclear reactor components: Fuel (U-235), Moderator (Heavy water), Control rods (Boron/Cadmium), Coolant (water/liquid sodium), and Concrete radiation shield.",
        diagramCaption: "Schematic Diagram of a Controlled Nuclear Power Reactor",
        diagramSvg: `<svg viewBox="0 0 460 270" style="max-width:100%; height:auto; display:block; margin:0 auto; background:#f8fafc; border-radius:12px; border:1px solid #cbd5e1;">
  <text x="230" y="22" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e293b">Nuclear Power Reactor / à®…à®£à¯à®•à¯à®•à®°à¯ à®‰à®²à¯ˆ à®…à®®à¯ˆà®ªà¯à®ªà¯ à®®à®±à¯à®±à¯à®®à¯ à®šà¯†à®¯à®²à¯à®ªà®¾à®Ÿà¯</text>
  <!-- Concrete Biological Shield Dome -->
  <path d="M 40,230 L 40,110 Q 40,40 130,40 Q 220,40 220,110 L 220,230 Z" fill="#e2e8f0" stroke="#64748b" stroke-width="3"/>
  <text x="130" y="58" font-size="9" font-weight="bold" fill="#475569" text-anchor="middle">à®¤à®Ÿà¯à®ªà¯à®ªà¯à®•à¯ à®•à®¾à®©à¯à®•à®¿à®°à¯€à®Ÿà¯ à®šà¯à®µà®°à¯ (Shielding)</text>
  <!-- Steel Pressure Vessel -->
  <rect x="65" y="75" width="130" height="145" rx="10" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
  <!-- Moderator Liquid in Core -->
  <rect x="75" y="90" width="110" height="120" rx="6" fill="#bae6fd" fill-opacity="0.6"/>
  <text x="130" y="105" font-size="8.5" font-weight="bold" fill="#0369a1" text-anchor="middle">à®¤à®£à®¿à®ªà¯à®ªà®¾à®©à¯ (Moderator - Dâ‚‚O)</text>
  <!-- Fuel Rods (U-235) -->
  <g fill="#22c55e" stroke="#15803d" stroke-width="1.5">
    <rect x="85" y="115" width="10" height="85" rx="3"/>
    <rect x="110" y="115" width="10" height="85" rx="3"/>
    <rect x="135" y="115" width="10" height="85" rx="3"/>
    <rect x="160" y="115" width="10" height="85" rx="3"/>
  </g>
  <text x="130" y="215" font-size="8" font-weight="bold" fill="#15803d" text-anchor="middle">à®Žà®°à®¿à®ªà¯Šà®°à¯à®³à¯ à®¤à®£à¯à®Ÿà¯à®•à®³à¯ (Fuel Rods)</text>
  <!-- Control Rods (Cadmium/Boron) from top -->
  <g fill="#ef4444" stroke="#b91c1c" stroke-width="1.5">
    <rect x="98" y="70" width="8" height="70" rx="2"/>
    <rect x="123" y="70" width="8" height="70" rx="2"/>
    <rect x="148" y="70" width="8" height="70" rx="2"/>
  </g>
  <line x1="95" y1="65" x2="160" y2="65" stroke="#b91c1c" stroke-width="2"/>
  <text x="130" y="76" font-size="8" font-weight="bold" fill="#b91c1c" text-anchor="middle">à®•à®Ÿà¯à®Ÿà¯à®ªà¯à®ªà®Ÿà¯à®¤à¯à®¤à¯à®®à¯ à®¤à®£à¯à®Ÿà¯à®•à®³à¯ (Control Rods)</text>
  <!-- Coolant Pipes to Steam Generator -->
  <!-- Hot coolant out to steam generator -->
  <path d="M 195,115 L 255,115 L 255,150" fill="none" stroke="#dc2626" stroke-width="3"/>
  <polygon points="230,112 240,115 230,118" fill="#dc2626"/>
  <text x="235" y="108" font-size="8" font-weight="bold" fill="#dc2626">Hot Coolant â†’</text>
  <!-- Coolant Return Pipe with Pump -->
  <path d="M 255,185 L 255,200 L 195,200" fill="none" stroke="#2563eb" stroke-width="3"/>
  <circle cx="225" cy="200" r="8" fill="#3b82f6"/>
  <text x="225" y="203" font-size="7" font-weight="bold" fill="#ffffff" text-anchor="middle">Pump</text>
  <polygon points="210,197 200,200 210,203" fill="#2563eb"/>
  <text x="230" y="215" font-size="8" font-weight="bold" fill="#2563eb">â† Cold Coolant</text>
  <!-- Steam Generator / Heat Exchanger at Right -->
  <rect x="250" y="80" width="75" height="140" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="287" y="100" font-size="8.5" font-weight="bold" fill="#b45309" text-anchor="middle">à®¨à¯€à®°à®¾à®µà®¿ à®‡à®¯à®±à¯à®±à®¿</text>
  <text x="287" y="112" font-size="7.5" fill="#b45309" text-anchor="middle">(Steam Gen)</text>
  <!-- Steam Pipe to Turbine -->
  <path d="M 325,95 L 360,95 L 360,110" fill="none" stroke="#0284c7" stroke-width="3"/>
  <text x="345" y="88" font-size="8" font-weight="bold" fill="#0284c7">Steam â†’</text>
  <!-- Turbine & Generator Box -->
  <rect x="350" y="110" width="55" height="40" rx="6" fill="#1e293b"/>
  <text x="377" y="128" font-size="8" font-weight="bold" fill="#38bdf8" text-anchor="middle">Turbine</text>
  <text x="377" y="140" font-size="7.5" font-weight="bold" fill="#a7f3d0" text-anchor="middle">Generator</text>
  <line x1="405" y1="130" x2="435" y2="130" stroke="#10b981" stroke-width="2.5"/>
  <polygon points="430,126 440,130 430,134" fill="#10b981"/>
  <text x="425" y="122" font-size="8" font-weight="bold" fill="#047857">Electricity âš¡</text>
  <!-- Condenser loop back -->
  <path d="M 377,150 L 377,175 L 325,175" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="3,2"/>
  <text x="360" y="190" font-size="7.5" fill="#64748b">Condenser</text>
  <!-- Summary Banner -->
  <rect x="20" y="240" width="420" height="22" rx="4" fill="#0f172a"/>
  <text x="230" y="255" font-size="9.5" font-weight="bold" fill="#f8fafc" text-anchor="middle">à®•à®Ÿà¯à®Ÿà¯à®ªà¯à®ªà®Ÿà¯à®¤à¯à®¤à®ªà¯à®ªà®Ÿà¯à®Ÿ à®¤à¯Šà®Ÿà®°à¯à®µà®¿à®©à¯ˆ (Controlled Fission Chain Reaction)</text>
</svg>`
      },
      {
        id: "sci_em_u6_out_5m_2",
        q: "Differentiate between Nuclear Fission and Nuclear Fusion with their reaction equations, physical conditions, and diagrams.",
        type: "5m",
        examTag: "Outside Book / Extra Practice 5-Mark Question",
        ans: "<b>Comparison between Nuclear Fission and Nuclear Fusion:</b><br><br>" +
             "<table style='width:100%; border-collapse:collapse; margin-bottom:12px; font-size:12.5px; border:1px solid #cbd5e1;'>" +
             "<tr style='background:#f1f5f9; color:#1e293b; text-align:left;'>" +
             "<th style='padding:8px; border:1px solid #cbd5e1;'>Parameter</th>" +
             "<th style='padding:8px; border:1px solid #cbd5e1;'>Nuclear Fission</th>" +
             "<th style='padding:8px; border:1px solid #cbd5e1;'>Nuclear Fusion</th>" +
             "</tr>" +
             "<tr>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'><b>Definition</b></td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>A heavy nucleus splits into two lighter nuclei of comparable masses with neutron and energy release.</td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>Two lighter nuclei combine to form a single heavier nucleus with massive energy release.</td>" +
             "</tr>" +
             "<tr>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'><b>Temperature Required</b></td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>Occurs even at ordinary room temperatures.</td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>Requires extreme thermonuclear temperatures (10â· to 10â¸ K) and huge pressure.</td>" +
             "</tr>" +
             "<tr>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'><b>Fuel Used</b></td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>Uranium-235, Plutonium-239.</td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>Hydrogen isotopes (Deuterium Â²H, Tritium Â³H).</td>" +
             "</tr>" +
             "<tr>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'><b>Controllability</b></td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>Easily controlled inside nuclear power reactors.</td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>Extremely difficult to control sustainably on Earth (currently experimental).</td>" +
             "</tr>" +
             "<tr>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'><b>Radioactive Waste</b></td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>Produces highly hazardous, long-lived radioactive nuclear waste.</td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>Produces harmless Helium; virtually no long-lived radioactive waste.</td>" +
             "</tr>" +
             "<tr>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'><b>Natural Occurrence</b></td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>Used in atomic bombs; does not occur naturally in stars.</td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>Natural primary source of solar and stellar energy in the universe.</td>" +
             "</tr>" +
             "</table>",
        explanation: "Fission splits heavy nuclei (U-235) at room temperature; Fusion combines light nuclei (Hydrogen) at extreme temperatures (>10â· K) producing clean energy.",
        diagramCaption: "Nuclear Fission and Nuclear Fusion Reaction Mechanisms",
        diagramSvg: `<svg viewBox="0 0 460 260" style="max-width:100%; height:auto; display:block; margin:0 auto; background:#f8fafc; border-radius:12px; border:1px solid #cbd5e1;">
  <text x="230" y="22" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e293b">Nuclear Fission vs Nuclear Fusion / à®…à®£à¯à®•à¯à®•à®°à¯ à®ªà®¿à®³à®µà¯ vs à®‡à®£à¯ˆà®µà¯</text>
  <!-- Top: Nuclear Fission -->
  <g transform="translate(15, 34)">
    <rect x="0" y="0" width="430" height="100" rx="8" fill="#fef2f2" stroke="#fca5a5"/>
    <text x="12" y="18" font-size="11" font-weight="bold" fill="#b91c1c">1. Nuclear Fission / à®…à®£à¯à®•à¯à®•à®°à¯ à®ªà®¿à®³à®µà¯ (Heavy Nucleus Splits):</text>
    <!-- Slow Neutron -->
    <circle cx="35" cy="55" r="7" fill="#64748b"/>
    <text x="35" y="58" font-size="7" font-weight="bold" fill="#ffffff" text-anchor="middle">n</text>
    <line x1="46" y1="55" x2="70" y2="55" stroke="#64748b" stroke-width="2"/>
    <polygon points="68,52 76,55 68,58" fill="#64748b"/>
    <!-- U-235 Nucleus -->
    <circle cx="105" cy="55" r="22" fill="#ef4444"/>
    <text x="105" y="54" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">Â²Â³âµU</text>
    <text x="105" y="65" font-size="7" fill="#fef2f2" text-anchor="middle">(Target)</text>
    <line x1="130" y1="55" x2="160" y2="55" stroke="#b91c1c" stroke-width="2"/>
    <polygon points="158,52 166,55 158,58" fill="#b91c1c"/>
    <!-- Product Nuclei: Ba-141 and Kr-92 -->
    <circle cx="205" cy="38" r="15" fill="#f97316"/>
    <text x="205" y="42" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">Â¹â´Â¹Ba</text>
    <circle cx="205" cy="74" r="13" fill="#f59e0b"/>
    <text x="205" y="78" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">â¹Â²Kr</text>
    <!-- 3 Neutrons Produced -->
    <g fill="#64748b">
      <circle cx="255" cy="35" r="5"/><circle cx="265" cy="55" r="5"/><circle cx="255" cy="75" r="5"/>
    </g>
    <text x="280" y="58" font-size="8" font-weight="bold" fill="#475569">+ 3 Neutrons</text>
    <!-- Energy callout -->
    <rect x="330" y="38" width="90" height="34" rx="6" fill="#dc2626"/>
    <text x="375" y="54" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">+ 200 MeV</text>
    <text x="375" y="66" font-size="7.5" fill="#fef2f2" text-anchor="middle">à®†à®±à¯à®±à®²à¯ (Energy)</text>
    <!-- Equation line -->
    <text x="215" y="94" font-size="9" font-weight="bold" fill="#7f1d1d" text-anchor="middle">Â²Â³âµU + n âŸ¶ Â¹â´Â¹Ba + â¹Â²Kr + 3n + Q (~200 MeV)</text>
  </g>
  <!-- Bottom: Nuclear Fusion -->
  <g transform="translate(15, 145)">
    <rect x="0" y="0" width="430" height="100" rx="8" fill="#f0fdf4" stroke="#86efac"/>
    <text x="12" y="18" font-size="11" font-weight="bold" fill="#15803d">2. Nuclear Fusion / à®…à®£à¯à®•à¯à®•à®°à¯ à®‡à®£à¯ˆà®µà¯ (Light Nuclei Combine at High Temp):</text>
    <!-- Deuterium and Tritium -->
    <circle cx="45" cy="45" r="12" fill="#3b82f6"/>
    <text x="45" y="49" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">Â²H (D)</text>
    <text x="70" y="58" font-size="14" font-weight="bold" fill="#15803d">+</text>
    <circle cx="95" cy="45" r="13" fill="#0284c7"/>
    <text x="95" y="49" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">Â³H (T)</text>
    <!-- High Temp & Pressure Arrow -->
    <line x1="115" y1="52" x2="160" y2="52" stroke="#15803d" stroke-width="2.5"/>
    <polygon points="158,48 168,52 158,56" fill="#15803d"/>
    <text x="140" y="44" font-size="7.5" font-weight="bold" fill="#ca8a04">10â· K &amp; High P</text>
    <!-- Helium-4 Produced -->
    <circle cx="215" cy="52" r="18" fill="#10b981"/>
    <text x="215" y="55" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">â´He</text>
    <text x="215" y="65" font-size="7" fill="#ffffff" text-anchor="middle">(Helium)</text>
    <!-- 1 Neutron -->
    <text x="245" y="55" font-size="12" font-weight="bold" fill="#15803d">+</text>
    <circle cx="268" cy="52" r="6" fill="#64748b"/>
    <text x="268" y="55" font-size="6.5" font-weight="bold" fill="#ffffff" text-anchor="middle">n</text>
    <!-- Energy Callout -->
    <rect x="310" y="38" width="110" height="34" rx="6" fill="#16a34a"/>
    <text x="365" y="53" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">+ 17.6 MeV</text>
    <text x="365" y="65" font-size="7.5" fill="#f0fdf4" text-anchor="middle">à®šà¯‚à®°à®¿à®¯ à®†à®±à¯à®±à®²à¯ (Sun Energy)</text>
    <!-- Equation line -->
    <text x="215" y="92" font-size="9" font-weight="bold" fill="#14532d" text-anchor="middle">Â²â‚H + Â³â‚H âŸ¶ â´â‚‚He + Â¹â‚€n + 17.6 MeV</text>
  </g>
</svg>`
      },
      // 12 Mock Test 1-Mark Questions
      { id: "sci_em_u6_out_1m_1", q: "The spontaneous disintegration of unstable atomic nuclei with emission of radiation is called:", options: ["Radioactivity", "Nuclear fission", "Nuclear fusion", "Ionization"], ans: "Radioactivity", type: "1m", explanation: "Discovered by Henri Becquerel in 1896." },
      { id: "sci_em_u6_out_1m_2", q: "What are the three primary types of radiation emitted during radioactive decay?", options: ["Alpha, Beta, Gamma rays", "X-rays, UV, Infrared", "Cosmic, Light, Sound", "Cathode, Anode, Canal rays"], ans: "Alpha, Beta, Gamma rays", type: "1m", explanation: "Alpha particles, beta particles, and gamma photons." },
      { id: "sci_em_u6_out_1m_3", q: "The splitting of a heavy nucleus into two smaller nuclei with energy release is called:", options: ["Nuclear fission", "Nuclear fusion", "Alpha decay", "Transmutation"], ans: "Nuclear fission", type: "1m", explanation: "Heavy nucleus splits into lighter fission fragments." },
      { id: "sci_em_u6_out_1m_4", q: "The combination of two light nuclei to form a heavier nucleus with massive energy release is called:", options: ["Nuclear fusion", "Nuclear fission", "Beta emission", "Gamma decay"], ans: "Nuclear fusion", type: "1m", explanation: "Hydrogen fusing into Helium is nuclear fusion." },
      { id: "sci_em_u6_out_1m_5", q: "Which radioactive isotope is most widely used as nuclear fuel in commercial power reactors?", options: ["Uranium-235 (Â²Â³âµU)", "Carbon-14", "Cobalt-60", "Iodine-131"], ans: "Uranium-235 (Â²Â³âµU)", type: "1m", explanation: "U-235 undergoes thermal neutron fission." },
      { id: "sci_em_u6_out_1m_6", q: "What is the primary function of control rods (Boron or Cadmium) in a nuclear reactor?", options: ["To absorb excess neutrons and control the chain reaction", "To slow down neutrons", "To cool the reactor core", "To shield workers from radiation"], ans: "To absorb excess neutrons and control the chain reaction", type: "1m", explanation: "Control rods regulate the rate of fission chain reaction." },
      { id: "sci_em_u6_out_1m_7", q: "What is the function of a moderator (Heavy water or Graphite) in a nuclear reactor?", options: ["To slow down fast neutrons to thermal speeds", "To absorb neutrons", "To remove core heat", "To trigger chain reactions"], ans: "To slow down fast neutrons to thermal speeds", type: "1m", explanation: "Moderators reduce neutron kinetic energy without absorption." },
      { id: "sci_em_u6_out_1m_8", q: "What is the primary function of the coolant in a nuclear reactor?", options: ["To carry heat away from the core to generate steam", "To slow down neutrons", "To absorb radiation", "To fuel the reactor"], ans: "To carry heat away from the core to generate steam", type: "1m", explanation: "Coolant transfers core heat to the steam generator." },
      { id: "sci_em_u6_out_1m_9", q: "Which radiation among alpha, beta, and gamma has the highest penetrating power?", options: ["Gamma rays (Î³-rays)", "Alpha particles (Î±)", "Beta particles (Î²)", "All have equal penetration"], ans: "Gamma rays (Î³-rays)", type: "1m", explanation: "Gamma rays penetrate thick lead and concrete shields." },
      { id: "sci_em_u6_out_1m_10", q: "Which radiation among alpha, beta, and gamma has the highest ionizing power?", options: ["Alpha rays (Î±-rays)", "Beta rays (Î²)", "Gamma rays (Î³)", "Neutrons"], ans: "Alpha rays (Î±-rays)", type: "1m", explanation: "Alpha particles have the largest mass (+2 charge) and highest ionizing power." },
      { id: "sci_em_u6_out_1m_11", q: "What is the SI unit of radioactivity?", options: ["Becquerel (Bq)", "Curie", "Rutherford", "Roentgen"], ans: "Becquerel (Bq)", type: "1m", explanation: "1 Becquerel = 1 disintegration per second." },
      { id: "sci_em_u6_out_1m_12", q: "Where does nuclear fusion occur naturally in our universe?", options: ["In the Sun and other stars", "In the Earth's core", "On the Moon", "In deep ocean trenches"], ans: "In the Sun and other stars", type: "1m", explanation: "Nuclear fusion is the power engine of all stars." }
    ]
  });
}