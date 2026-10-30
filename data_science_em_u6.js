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
