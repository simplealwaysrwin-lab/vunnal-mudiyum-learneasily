// 10-ஆம் வகுப்பு அறிவியல் - அலகு 6: அணுக்கரு இயற்பியல் (Nuclear Physics)
// தமிழ்நாடு அரசு சமச்சீர் கல்வி வினா-விடை வழிகாட்டி (தமிழ் வழி)

const SCIENCE_UNIT_6_DATA = {
  unitId: "sci_u6",
  unitName: "அலகு 6: அணுக்கரு இயற்பியல்",
  subject: "அறிவியல் (Science)",
  syllabus: "தமிழ்நாடு அரசு சமச்சீர் கல்வி 10-ஆம் வகுப்பு அறிவியல் - இயற்பியல்",

  // முக்கிய சூத்திரங்கள் & கதிரியக்க விதிகள்
  formulas: [
    { title: "சோடி-ஃபஜன்ஸ் இடம்பெயர்வு விதி (ஆல்ஃபா சிதைவு)", rule: "Z^A X => (Z-2)^(A-4) Y + 2^4 He (நிறை எண் 4 குறையும், அணு எண் 2 குறையும்)" },
    { title: "பீட்டா சிதைவு (Beta Decay)", rule: "Z^A X => (Z+1)^A Y + e^- (அணு எண் 1 கூடும், நிறை எண் மாறாது)" },
    { title: "காமா சிதைவு (Gamma Decay)", rule: "அணுக்கருவின் ஆற்றல் மட்டம் மட்டுமே மாறும், அணு எண் மற்றும் நிறை எண் மாறாது" },
    { title: "ஐன்ஸ்டீன் நிறை-ஆற்றல் சமன்பாடு", rule: "E = Δm × c² (1 amu நிறை இழப்பு = 931 MeV ஆற்றல்)" },
    { title: "கதிரியக்க அலகுகள் (Radioactivity Units)", rule: "1 கியூரி (Ci) = 3.7 × 10¹⁰ Bq | 1 ரூதர்போர்டு (Rd) = 10⁶ Bq | 1 பெக்கோரல் (Bq) = 1 சிதைவு/வி" },
    { title: "அனுமதிக்கப்பட்ட கதிர்வீச்சு பாதுகாப்பு வரம்பு", rule: "வாரத்திற்கு 250 mR (மில்லி ராண்ட்ஜன்) அல்லது ஆண்டிற்கு 20 mSv (மில்லி சீவர்ட்)" }
  ],

  subSections: [
    // -------------------------------------------------------------
    // பகுதி 1: கதிரியக்கம், ஆல்ஃபா, பீட்டா, காமா கதிர்கள்
    // -------------------------------------------------------------
    {
      id: "sec_sci_6_1",
      title: "பகுதி 1: கதிரியக்கம் & ஆல்ஃபா, பீட்டா, காமா கதிர்களின் ஒப்பீடு",
      author: "இயற்பியல் - அலகு 6: அணுக்கரு இயற்பியல்",
      questions: [
        {
          id: "sci_6_1",
          type: "1m",
          mark: "1 மதிப்பெண்",
          examTag: "அரசு பொதுத்தேர்வு",
          q: "கதிரியக்கத்தை முதன்முதலில் தற்செயலாகக் கண்டறிந்த அறிவியலாளர் யார்?",
          options: ["அ) மேரி கியூரி", "ஆ) ஹென்றி பெக்கோரல்", "இ) எர்னஸ்ட் ரூதர்போர்டு", "ஈ) ஜே.ஜே. தாம்சன்"],
          ans: "விடை: <b>ஆ) ஹென்றி பெக்கோரல்</b><br>விளக்கம்: 1896-ஆம் ஆண்டு பிரெஞ்சு இயற்பியலாளர் ஹென்றி பெக்கோரல் யுரேனியம் உப்புகளிலிருந்து தன்னிச்சையாக வெளிப்படும் கதிரியக்கத்தைக் கண்டறிந்தார்.",
          ansTamil: "கதிரியக்கத்தைக் கண்டறிந்தவர் ஹென்றி பெக்கோரல் ஆவார்."
        },
        {
          id: "sci_6_2",
          type: "1m",
          mark: "1 மதிப்பெண்",
          examTag: "அரசு மாதிரி",
          q: "அணுக்கரு உலையில் தொடர்வினையைக் கட்டுப்படுத்த நியூட்ரான்களை உறிஞ்சப் பயன்படும் தண்டுகள் எவை?",
          options: ["அ) காட்மியம் அல்லது போரான்", "ஆ) யுரேனியம்", "இ) கனநீர்", "ஈ) கிராஃபைட்"],
          ans: "விடை: <b>அ) காட்மியம் அல்லது போரான்</b><br>விளக்கம்: போரான் மற்றும் காட்மியம் தண்டுகள் நியூட்ரான்களைத் தங்களுக்குள் உறிஞ்சி, அணுக்கரு பிளவு தொடர்வினை கட்டுக்கடங்காமல் போவதைத் தடுக்கின்றன.",
          ansTamil: "நியூட்ரான்களை உறிஞ்ச காட்மியம் மற்றும் போரான் கட்டுப்பாட்டுத் தண்டுகள் பயன்படுகின்றன."
        },
        {
          id: "sci_6_3",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examTag: "முக்கிய வினா",
          q: "இயற்கை கதிரியக்கம் மற்றும் செயற்கைக் கதிரியக்கம் ஆகியவற்றிற்கு இடையே உள்ள இரண்டு வேறுபாடுகளைக் கூறுக.",
          ans: `<div style="line-height:1.7;">
            <b>1. இயற்கை கதிரியக்கம்:</b><br>
            • அணு எண் 82-ஐ விட அதிகமான தனிமங்களில் தன்னிச்சையாக நடைபெறுகிறது (எ.கா: யுரேனியம், தோரியம்).<br>
            • இதனை மனிதனால் கட்டுப்படுத்த முடியாது; பெரும்பாலும் ஆல்ஃபா, பீட்டா, காமா கதிர்கள் வெளிப்படும்.<br><br>
            <b>2. செயற்கைக் கதிரியக்கம்:</b><br>
            • அணு எண் 82-ஐ விடக் குறைவான லேசான தனிமங்களை நியூட்ரான்களால் மோதி தூண்டப்படும் கதிரியக்கமாகும்.<br>
            • இதனை மனிதனால் தொடங்கவும் கட்டுப்படுத்தவும் முடியும்; நியூட்ரான், பாசிட்ரான் போன்றவை வெளிப்படும்.
          </div>`,
          ansTamil: "இயற்கை கதிரியக்கம் தன்னிச்சையானது, கட்டுப்படுத்த இயலாது. செயற்கை கதிரியக்கம் மனிதனால் தூண்டப்பட்டு கட்டுப்படுத்தக்கூடியது."
        },
        {
          id: "sci_6_4",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examTag: "அரசு பொதுத்தேர்வு",
          q: "மருத்துவத் துறையில் பயன்படும் ஏதேனும் நான்கு கதிரியக்க ஐசோடோப்புகளையும் அவற்றின் பயன்பாடுகளையும் குறிப்பிடுக.",
          ans: `<div style="line-height:1.7;">
            1. <b>கதிரியக்க அயோடின் (I-131):</b> முன் கழுத்துக் கழலை (Goitre) மற்றும் தைராய்டு புற்றுநோயைக் குணப்படுத்த.<br>
            2. <b>கதிரியக்க கோபால்ட் (Co-60):</b> புற்றுநோய் செல்களை அழிக்க (கதிர்வீச்சு சிகிச்சை - Radiotherapy).<br>
            3. <b>கதிரியக்க சோடியம் (Na-24):</b> இரத்த ஓட்டத்தின் சுழற்சி மற்றும் இதய செயல்பாட்டை ஆய்வு செய்ய.<br>
            4. <b>கதிரியக்க இரும்பு (Fe-59):</b> இரத்த சோகை (Anemia) நோயைக் கண்டறிந்து சிகிச்சை அளிக்க.
          </div>`,
          ansTamil: "I-131: தைராய்டு, Co-60: புற்றுநோய், Na-24: இரத்த சுழற்சி, Fe-59: இரத்த சோகை."
        },
        {
          id: "sci_6_5",
          type: "7m",
          mark: "7 மதிப்பெண்",
          examTag: "அரசு பொதுத்தேர்வு 7M முக்கிய வினா",
          q: "ஆல்ஃபா, பீட்டா மற்றும் காமா கதிர்களின் பண்புகளை ஒப்பிடுக. அணுக்கரு பிளவு மற்றும் அணுக்கரு இணைவு வேறுபாடுகளை அட்டவணைப்படுத்துக.",
          ans: `<div style="line-height:1.7;">
            <b>1. ஆல்ஃபா, பீட்டா, காமா கதிர்களின் ஒப்பீடு:</b><br>
            • <b>தன்மைகள்:</b> ஆல்ஃபா (+2e மின்னூட்டம் கொண்ட ஹீலியம் அணுக்கரு), பீட்டா (-e மின்னூட்டம் கொண்ட எலக்ட்ரான்கள்), காமா (மின்னூட்டமற்ற மின்காந்த ஃபோட்டான்கள்).<br>
            • <b>அயனியாக்கும் திறன்:</b> ஆல்ஃபா கதிர்கள் மிக அதிக அயனியாக்கும் திறன் கொண்டவை (பீட்டாவை விட 100 மடங்கு, காமாவை விட 10,000 மடங்கு). காமாவின் அயனியாக்கும் திறன் மிகக் குறைவு.<br>
            • <b>ஊடுருவும் திறன்:</b> காமா கதிர்கள் மிக அதிக ஊடுருவும் திறன் கொண்டவை (தடிமனான ஈயப் பாளத்தை ஊடுருவும்). ஆல்ஃபா கதிர்களின் ஊடுருவும் திறன் மிகக் குறைவு (மெல்லிய காகிதத்தால் தடுத்து நிறுத்தப்படும்).<br><br>
            <b>2. அணுக்கரு பிளவு vs அணுக்கரு இணைவு:</b><br>
            • <b>நிகழ்வு:</b> கனமான அணுக்கரு இரு லேசான உட்கருக்களாகப் பிளப்பது பிளவு; இரு லேசான உட்கருக்கள் இணைந்து கனமான உட்கரு உருவாவது இணைவு.<br>
            • <b>வெப்பநிலை தேவை:</b> பிளவுக்கு அறை வெப்பநிலையே போதும்; இணைவுக்கு 10⁷ முதல் 10⁸ K வரை மிக அதிக வெப்பநிலையும் அழுத்தமும் தேவை (வெப்ப அணுக்கரு வினை).<br>
            • <b>ஆற்றல் வெளிப்பாடு:</b> ஒரு வினையில் வெளிப்படும் ஆற்றல் பிளவில் குறைவு; இணைவில் மிக அதிகம் (சூரியன் மற்றும் விண்மீன்களில் நடைபெறும் வினை).<br>
            • <b>வெடிகுண்டு பயன்பாடு:</b> அணுக்கரு பிளவு அணு குண்டிலும் (Atom Bomb), அணுக்கரு இணைவு ஹைட்ரஜன் குண்டிலும் (Hydrogen Bomb) பயன்படுகிறது.
          </div>`,
          ansTamil: "ஆல்ஃபா அதிக அயனியாக்கும் திறன் கொண்டது, காமா அதிக ஊடுருவும் திறன் கொண்டது. பிளவில் கனமான உட்கரு பிளக்கிறது; இணைவில் லேசான உட்கருக்கள் இணைகின்றன (சூரிய ஆற்றல்).",
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
    // பகுதி 2: அணுக்கரு உலை & பாதுகாப்பு வழிமுறைகள்
    // -------------------------------------------------------------
    {
      id: "sec_sci_6_2",
      title: "பகுதி 2: அணுக்கரு உலை, கதிர்வீச்சு பயன்கள் & பாதுகாப்பு",
      author: "இயற்பியல் - அலகு 6: அணுக்கரு இயற்பியல்",
      questions: [
        {
          id: "sci_6_6",
          type: "7m",
          mark: "7 மதிப்பெண்",
          examTag: "அரசு பொதுத்தேர்வு 7M முக்கிய வினா",
          q: "அணுக்கரு உலையின் முதன்மை பாகங்கள் மற்றும் அவற்றின் பணிகளை விளக்குக. கதிர்வீச்சு பாதுகாப்பு வழிமுறைகளைக் கூறுக.",
          ans: `<div style="line-height:1.7;">
            <b>1. அணுக்கரு உலையின் முதன்மை பாகங்கள்:</b><br>
            • <b>எரிபொருள் (Fuel):</b> பிளவுக்கு உட்படும் கதிரியக்கப் பொருள் (யுரேனியம் U-235, புளூட்டோனியம் Pu-239).<br>
            • <b>தணிப்பான் (Moderator):</b> அதிவேக நியூட்ரான்களின் இயக்க ஆற்றலைக் குறைத்து மிதவேக நியூட்ரான்களாக மாற்றுகிறது (கனநீர் D₂O, கிராஃபைட்).<br>
            • <b>கட்டுப்பாட்டுத் தண்டுகள் (Control Rods):</b> தொடர்வினையை சீராக வைக்க அதிகப்படியான நியூட்ரான்களை உறிஞ்சுகின்றன (போரான் அல்லது காட்மியம் தண்டுகள்).<br>
            • <b>குளிர்விப்பான் (Coolant):</b> உலை உள்ளகத்தில் உருவாகும் அபரிமிதமான வெப்பத்தை வெளியேற்றி நீராவி உற்பத்தி செய்யப் பயன்படுகிறது (நீர், கனநீர், திரவ சோடியம்).<br>
            • <b>தடுப்புச் சுவர் (Shielding):</b> அபாயகரமான கதிர்வீச்சு வெளியேறாமல் தடுக்க 2 முதல் 2.5 மீட்டர் தடிமனான ஈயக் கான்கிரீட் சுவர் அமைக்கப்படுகிறது.<br><br>
            <b>2. கதிர்வீச்சு பாதுகாப்பு வழிமுறைகள்:</b><br>
            • கதிரியக்கப் பொருட்களை எப்போதும் தடிமனான <b>ஈயப் பெட்டிகளில்</b> சேமிக்க வேண்டும்.<br>
            • ஆய்வகப் பணியாளர்கள் <b>ஈயத்தாலான உடைகள் மற்றும் கையுறைகளை</b> அணிய வேண்டும்.<br>
            • உடலுக்குள் சென்ற கதிர்வீச்சின் அளவைக் கண்காணிக்க <b>டோசிமீட்டர் (Dosimeter)</b> அணிய வேண்டும்.
          </div>`,
          ansTamil: "அணுக்கரு உலையின் பாகங்கள்: எரிபொருள், தணிப்பான், கட்டுப்பாட்டுத் தண்டு, குளிர்விப்பான் மற்றும் தடுப்புச் சுவர். ஈய ஆடைகள் மற்றும் டோசிமீட்டர் பாதுகாப்புக்கு அவசியம்.",
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
// 🌟 பாடநூலுக்கு வெளியே உள்ள கூடுதல் வினாக்கள் & மாதிரித் தேர்வுப் புள்ளிகள் (Unit 6 TM)
// ==========================================
if (typeof SCIENCE_UNIT_6_DATA !== 'undefined') {
  if (!SCIENCE_UNIT_6_DATA.subSections) SCIENCE_UNIT_6_DATA.subSections = [];
  SCIENCE_UNIT_6_DATA.subSections.push({
    id: "sci_u6_outside",
    title: "🌟 பாடநூலுக்கு வெளியே உள்ள கூடுதல் வினாக்கள் & மாதிரித் தேர்வுப் புள்ளிகள்",
    author: "அரசுத் தேர்வு ஆசிரியர் குழு",
    questions: [
      {
        id: "sci_u6_out_5m_1",
        q: "அணுக்கரு உலையின் (Nuclear Reactor) முதன்மை பாகங்கள், அவற்றின் செயல்பாடுகள் மற்றும் பாதுகாப்பு அமைப்புகளைத் தெளிவான வரைபடத்துடன் விளக்குக.",
        type: "5m",
        examTag: "பாடநூலுக்கு வெளியே உள்ள கூடுதல் வினா (Outside Book Practice)",
        ans: "<b>அணுக்கரு உலையின் பாகங்கள் மற்றும் செயல்பாடுகள்:</b><br><br>" +
             "<b>1. அடிப்படைத் தத்துவம்:</b><br>" +
             "அணுக்கரு உலை என்பது <b>கட்டுப்படுத்தப்பட்ட தொடர் அணுக்கரு பிளவு வினையின்</b> (Controlled Nuclear Fission Chain Reaction) மூலம் மின்சாரத்தை உற்பத்தி செய்ய உதவும் அமைப்பாகும்.<br><br>" +
             "<b>2. முதன்மை பாகங்கள்:</b><br>" +
             "• <b>எரிபொருள் (Nuclear Fuel):</b> பிளவுக்கு உட்படக்கூடிய யுரேனியம்-235 (²³⁵U) அல்லது புளூட்டோனியம்-239 (²³⁹Pu) போன்ற கதிரியக்கப் பொருட்கள் சீல் செய்யப்பட்ட தண்டுகளாகப் பயன்படுகின்றன.<br>" +
             "• <b>தணிப்பான் (Moderator):</b> பிளவின் போது வெளியாகும் வேகமான நியூட்ரான்களை உறிஞ்சாமல், அவற்றின் வேகத்தைக் குறைத்துத் தொடர்வினையைத் தொடர்ந்து நிலைநிறுத்த உதவுகிறது. எ.கா: <b>கனநீர் (D₂O)</b> மற்றும் <b>கிராஃபைட்</b>.<br>" +
             "• <b>கட்டுப்படுத்தும் தண்டுகள் (Control Rods):</b> தொடர்வினையைத் தங்கள் கட்டுப்பாட்டில் வைக்க அதிகப்படியான நியூட்ரான்களை உறிஞ்சப் பயன்படுகின்றன. எ.கா: <b>போரான்</b> அல்லது <b>காட்மியம்</b> தண்டுகள்.<br>" +
             "• <b>குளிர்விப்பான் (Coolant):</b> உலையின் மையப்பகுதியில் உருவாகும் அதீத வெப்பத்தை வெளியேற்றி நீராவி இயற்றிக்குக் கொண்டுசெல்லப் பயன்படுகிறது. எ.கா: நீர், கனநீர் மற்றும் திரவ சோடியம்.<br>" +
             "• <b>தடுப்புச் சுவர் (Radiation Shielding):</b> மனிதர்களுக்கும் சுற்றுச்சூழலுக்கும் ஆபத்தான காமா கதிர்கள் மற்றும் நியூட்ரான்கள் கசியாமல் தடுக்க <b>2 முதல் 2.5 மீட்டர் தடிமன் கொண்ட காரீயம் மற்றும் எஃகு கலந்த வலிமையான கான்கிரீட் சுவர்</b> உலையைச் சுற்றி அமைக்கப்படுகிறது.",
        ansTamil: "அணுக்கரு உலை தத்துவம்: கட்டுப்படுத்தப்பட்ட அணுக்கரு பிளவு. பாகங்கள்: எரிபொருள் (U-235), தணிப்பான் (கனநீர்), கட்டுப்பாட்டு தண்டு (போரான்/காட்மியம்), குளிர்விப்பான் (நீர்/திரவ சோடியம்), கான்கிரீட் தடுப்புச்சுவர்.",
        diagramCaption: "அணுக்கரு உலை முதன்மை பாகங்கள் - விளக்க வரைபடம்",
        diagramSvg: `<svg viewBox="0 0 460 270" style="max-width:100%; height:auto; display:block; margin:0 auto; background:#f8fafc; border-radius:12px; border:1px solid #cbd5e1;">
  <text x="230" y="22" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e293b">Nuclear Power Reactor / அணுக்கரு உலை அமைப்பு மற்றும் செயல்பாடு</text>
  <path d="M 40,230 L 40,110 Q 40,40 130,40 Q 220,40 220,110 L 220,230 Z" fill="#e2e8f0" stroke="#64748b" stroke-width="3"/>
  <text x="130" y="58" font-size="9" font-weight="bold" fill="#475569" text-anchor="middle">தடுப்புக் கான்கிரீட் சுவர் (Shielding)</text>
  <rect x="65" y="75" width="130" height="145" rx="10" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
  <rect x="75" y="90" width="110" height="120" rx="6" fill="#bae6fd" fill-opacity="0.6"/>
  <text x="130" y="105" font-size="8.5" font-weight="bold" fill="#0369a1" text-anchor="middle">தணிப்பான் (Moderator - D₂O)</text>
  <g fill="#22c55e" stroke="#15803d" stroke-width="1.5">
    <rect x="85" y="115" width="10" height="85" rx="3"/>
    <rect x="110" y="115" width="10" height="85" rx="3"/>
    <rect x="135" y="115" width="10" height="85" rx="3"/>
    <rect x="160" y="115" width="10" height="85" rx="3"/>
  </g>
  <text x="130" y="215" font-size="8" font-weight="bold" fill="#15803d" text-anchor="middle">எரிபொருள் தண்டுகள் (Fuel Rods)</text>
  <g fill="#ef4444" stroke="#b91c1c" stroke-width="1.5">
    <rect x="98" y="70" width="8" height="70" rx="2"/>
    <rect x="123" y="70" width="8" height="70" rx="2"/>
    <rect x="148" y="70" width="8" height="70" rx="2"/>
  </g>
  <line x1="95" y1="65" x2="160" y2="65" stroke="#b91c1c" stroke-width="2"/>
  <text x="130" y="76" font-size="8" font-weight="bold" fill="#b91c1c" text-anchor="middle">கட்டுப்படுத்தும் தண்டுகள் (Control Rods)</text>
  <path d="M 195,115 L 255,115 L 255,150" fill="none" stroke="#dc2626" stroke-width="3"/>
  <polygon points="230,112 240,115 230,118" fill="#dc2626"/>
  <text x="235" y="108" font-size="8" font-weight="bold" fill="#dc2626">Hot Coolant →</text>
  <path d="M 255,185 L 255,200 L 195,200" fill="none" stroke="#2563eb" stroke-width="3"/>
  <circle cx="225" cy="200" r="8" fill="#3b82f6"/>
  <text x="225" y="203" font-size="7" font-weight="bold" fill="#ffffff" text-anchor="middle">Pump</text>
  <polygon points="210,197 200,200 210,203" fill="#2563eb"/>
  <text x="230" y="215" font-size="8" font-weight="bold" fill="#2563eb">← Cold Coolant</text>
  <rect x="250" y="80" width="75" height="140" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="287" y="100" font-size="8.5" font-weight="bold" fill="#b45309" text-anchor="middle">நீராவி இயற்றி</text>
  <text x="287" y="112" font-size="7.5" fill="#b45309" text-anchor="middle">(Steam Gen)</text>
  <path d="M 325,95 L 360,95 L 360,110" fill="none" stroke="#0284c7" stroke-width="3"/>
  <text x="345" y="88" font-size="8" font-weight="bold" fill="#0284c7">Steam →</text>
  <rect x="350" y="110" width="55" height="40" rx="6" fill="#1e293b"/>
  <text x="377" y="128" font-size="8" font-weight="bold" fill="#38bdf8" text-anchor="middle">Turbine</text>
  <text x="377" y="140" font-size="7.5" font-weight="bold" fill="#a7f3d0" text-anchor="middle">Generator</text>
  <line x1="405" y1="130" x2="435" y2="130" stroke="#10b981" stroke-width="2.5"/>
  <polygon points="430,126 440,130 430,134" fill="#10b981"/>
  <text x="425" y="122" font-size="8" font-weight="bold" fill="#047857">Electricity ⚡</text>
  <path d="M 377,150 L 377,175 L 325,175" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="3,2"/>
  <text x="360" y="190" font-size="7.5" fill="#64748b">Condenser</text>
  <rect x="20" y="240" width="420" height="22" rx="4" fill="#0f172a"/>
  <text x="230" y="255" font-size="9.5" font-weight="bold" fill="#f8fafc" text-anchor="middle">கட்டுப்படுத்தப்பட்ட தொடர்வினை (Controlled Fission Chain Reaction)</text>
</svg>`
      },
      {
        id: "sci_u6_out_5m_2",
        q: "அணுக்கரு பிளவு மற்றும் அணுக்கரு இணைவு ஆகியவற்றை அவற்றின் தத்துவங்கள், நிபந்தனைகள் மற்றும் வினைக் குறியீட்டு வரைபடங்களுடன் ஒப்பிடுக.",
        type: "5m",
        examTag: "பாடநூலுக்கு வெளியே உள்ள கூடுதல் வினா (Outside Book Practice)",
        ans: "<b>அணுக்கரு பிளவு மற்றும் அணுக்கரு இணைவு ஒப்பீடு:</b><br><br>" +
             "<table style='width:100%; border-collapse:collapse; margin-bottom:12px; font-size:12.5px; border:1px solid #cbd5e1;'>" +
             "<tr style='background:#f1f5f9; color:#1e293b; text-align:left;'>" +
             "<th style='padding:8px; border:1px solid #cbd5e1;'>பண்புகள்</th>" +
             "<th style='padding:8px; border:1px solid #cbd5e1;'>அணுக்கரு பிளவு (Nuclear Fission)</th>" +
             "<th style='padding:8px; border:1px solid #cbd5e1;'>அணுக்கரு இணைவு (Nuclear Fusion)</th>" +
             "</tr>" +
             "<tr>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'><b>வரையறை</b></td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>ஒரு கனமான அணுக்கரு இரு சம எடையுள்ள சிறு உட்கருக்களாகப் பிளந்து நியூட்ரான்களையும் ஆற்றலையும் வெளியிடும் நிகழ்வு.</td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>இரு லேசான அணுக்கருக்கள் ஒன்றிணைந்து கனமான ஓர் உட்கருவாக மாறி அதீத ஆற்றலை வெளியிடும் நிகழ்வு.</td>" +
             "</tr>" +
             "<tr>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'><b>நிகழும் வெப்பநிலை</b></td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>இயல்பான அறை வெப்பநிலையிலும் நிகழும்.</td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>மிக உயர் வெப்பநிலை (10⁷ முதல் 10⁸ K) மற்றும் உயர் அழுத்தத்தில் மட்டுமே நிகழும்.</td>" +
             "</tr>" +
             "<tr>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'><b>பயன்படும் எரிபொருள்</b></td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>யுரேனியம்-235, புளூட்டோனியம்-239.</td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>ஹைட்ரஜனின் ஐசோடோப்புகள் (டியூட்ரியம், டிரைட்டியம்).</td>" +
             "</tr>" +
             "<tr>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'><b>கட்டுப்படுத்தும் திறன்</b></td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>அணுக்கரு உலையில் எளிதாகக் கட்டுப்படுத்த முடியும்.</td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>இன்னும் ஆய்வகத்தில் கட்டுப்படுத்துவது கடினமாக உள்ளது.</td>" +
             "</tr>" +
             "<tr>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'><b>கழிவு &amp; கதிர்வீச்சு</b></td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>ஆபத்தான நீண்ட காலக் கதிரியக்கக் கழிவுகளை உருவாக்கும்.</td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>கதிரியக்கக் கழிவுகள் உருவாவதில்லை (தூய்மையான ஆற்றல்).</td>" +
             "</tr>" +
             "<tr>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'><b>இயற்கை நிகழ்வு</b></td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>அணு குண்டில் பயன்படுத்தப்படுகிறது.</td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>சூரியன் மற்றும் விண்மீன்களின் ஆற்றல் மூலமாக இயற்கையாக நிகழ்கிறது.</td>" +
             "</tr>" +
             "</table>",
        ansTamil: "அணுக்கரு பிளவு: கனமான அணு உடைகிறது (U-235), அணு உலையில் கட்டுப்படுத்தலாம். அணுக்கரு இணைவு: லேசான அணு இணைகிறது (H isotopes), சூரியனில் நிகழ்கிறது (10⁷ K).",
        diagramCaption: "அணுக்கரு பிளவு மற்றும் இணைவு வினைகளின் ஒப்பீட்டு வரைபடம்",
        diagramSvg: `<svg viewBox="0 0 460 260" style="max-width:100%; height:auto; display:block; margin:0 auto; background:#f8fafc; border-radius:12px; border:1px solid #cbd5e1;">
  <text x="230" y="22" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e293b">Nuclear Fission vs Nuclear Fusion / அணுக்கரு பிளவு vs இணைவு</text>
  <g transform="translate(15, 34)">
    <rect x="0" y="0" width="430" height="100" rx="8" fill="#fef2f2" stroke="#fca5a5"/>
    <text x="12" y="18" font-size="11" font-weight="bold" fill="#b91c1c">1. Nuclear Fission / அணுக்கரு பிளவு (Heavy Nucleus Splits):</text>
    <circle cx="35" cy="55" r="7" fill="#64748b"/>
    <text x="35" y="58" font-size="7" font-weight="bold" fill="#ffffff" text-anchor="middle">n</text>
    <line x1="46" y1="55" x2="70" y2="55" stroke="#64748b" stroke-width="2"/>
    <polygon points="68,52 76,55 68,58" fill="#64748b"/>
    <circle cx="105" cy="55" r="22" fill="#ef4444"/>
    <text x="105" y="54" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">²³⁵U</text>
    <text x="105" y="65" font-size="7" fill="#fef2f2" text-anchor="middle">(Target)</text>
    <line x1="130" y1="55" x2="160" y2="55" stroke="#b91c1c" stroke-width="2"/>
    <polygon points="158,52 166,55 158,58" fill="#b91c1c"/>
    <circle cx="205" cy="38" r="15" fill="#f97316"/>
    <text x="205" y="42" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">¹⁴¹Ba</text>
    <circle cx="205" cy="74" r="13" fill="#f59e0b"/>
    <text x="205" y="78" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">⁹²Kr</text>
    <g fill="#64748b">
      <circle cx="255" cy="35" r="5"/><circle cx="265" cy="55" r="5"/><circle cx="255" cy="75" r="5"/>
    </g>
    <text x="280" y="58" font-size="8" font-weight="bold" fill="#475569">+ 3 Neutrons</text>
    <rect x="330" y="38" width="90" height="34" rx="6" fill="#dc2626"/>
    <text x="375" y="54" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">+ 200 MeV</text>
    <text x="375" y="66" font-size="7.5" fill="#fef2f2" text-anchor="middle">ஆற்றல் (Energy)</text>
    <text x="215" y="94" font-size="9" font-weight="bold" fill="#7f1d1d" text-anchor="middle">²³⁵U + n ⟶ ¹⁴¹Ba + ⁹²Kr + 3n + Q (~200 MeV)</text>
  </g>
  <g transform="translate(15, 145)">
    <rect x="0" y="0" width="430" height="100" rx="8" fill="#f0fdf4" stroke="#86efac"/>
    <text x="12" y="18" font-size="11" font-weight="bold" fill="#15803d">2. Nuclear Fusion / அணுக்கரு இணைவு (Light Nuclei Combine at High Temp):</text>
    <circle cx="45" cy="45" r="12" fill="#3b82f6"/>
    <text x="45" y="49" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">²H (D)</text>
    <text x="70" y="58" font-size="14" font-weight="bold" fill="#15803d">+</text>
    <circle cx="95" cy="45" r="13" fill="#0284c7"/>
    <text x="95" y="49" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">³H (T)</text>
    <line x1="115" y1="52" x2="160" y2="52" stroke="#15803d" stroke-width="2.5"/>
    <polygon points="158,48 168,52 158,56" fill="#15803d"/>
    <text x="140" y="44" font-size="7.5" font-weight="bold" fill="#ca8a04">10⁷ K &amp; High P</text>
    <circle cx="215" cy="52" r="18" fill="#10b981"/>
    <text x="215" y="55" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">⁴He</text>
    <text x="215" y="65" font-size="7" fill="#ffffff" text-anchor="middle">(Helium)</text>
    <text x="245" y="55" font-size="12" font-weight="bold" fill="#15803d">+</text>
    <circle cx="268" cy="52" r="6" fill="#64748b"/>
    <text x="268" y="55" font-size="6.5" font-weight="bold" fill="#ffffff" text-anchor="middle">n</text>
    <rect x="310" y="38" width="110" height="34" rx="6" fill="#16a34a"/>
    <text x="365" y="53" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">+ 17.6 MeV</text>
    <text x="365" y="65" font-size="7.5" fill="#f0fdf4" text-anchor="middle">சூரிய ஆற்றல் (Sun Energy)</text>
    <text x="215" y="92" font-size="9" font-weight="bold" fill="#14532d" text-anchor="middle">²₁H + ³₁H ⟶ ⁴₂He + ¹₀n + 17.6 MeV</text>
  </g>
</svg>`
      },
      // 12 Mock Test 1-Mark Questions
      { id: "sci_u6_out_1m_1", q: "நிலையற்ற அணுக்கருக்கள் தானாகவே சிதைவடைந்து கதிர்வீச்சுகளை உமிழும் நிகழ்வு எது?", options: ["கதிரியக்கம் (Radioactivity)", "அணுக்கரு பிளவு", "அணுக்கரு இணைவு", "ஒளிமின் விளைவு"], ans: "கதிரியக்கம் (Radioactivity)", type: "1m", explanation: "கதிரியக்கம் என்பது அணுக்கருவின் தன்னிச்சையான சிதைவு நிகழ்வு." },
      { id: "sci_u6_out_1m_2", q: "கதிரியக்கச் சிதைவின் போது வெளியாகும் மூன்று முதன்மைக் கதிர்கள் எவை?", options: ["ஆல்ஃபா, பீட்டா, காமா", "எக்ஸ்-கதிர், புற ஊதா, அகச்சிவப்பு", "காஸ்மிக், லேசர், ரேடியோ", "மின்னணு, புரோட்டான், பாசிட்ரான்"], ans: "ஆல்ஃபா, பீட்டா, காமா", type: "1m", explanation: "ஆல்ஃபா (α), பீட்டா (β), காமா (γ) கதிர்கள் வெளியேறுகின்றன." },
      { id: "sci_u6_out_1m_3", q: "ஒரு கனமான அணுக்கரு இரு சம எடையுள்ள சிறு உட்கருக்களாகப் பிளவுறும் நிகழ்வு எது?", options: ["அணுக்கரு பிளவு (Nuclear fission)", "அணுக்கரு இணைவு", "ஆல்ஃபா சிதைவு", "அயனியாக்கம்"], ans: "அணுக்கரு பிளவு (Nuclear fission)", type: "1m", explanation: "கனமான அணுக்கரு உடைவது அணுக்கரு பிளவு எனப்படும்." },
      { id: "sci_u6_out_1m_4", q: "இரு லேசான அணுக்கருக்கள் ஒன்றிணைந்து கனமான ஓர் உட்கருவாக மாறும் நிகழ்வு எது?", options: ["அணுக்கரு இணைவு (Nuclear fusion)", "அணுக்கரு பிளவு", "பீட்டா சிதைவு", "இயற்கைக் கதிரியக்கம்"], ans: "அணுக்கரு இணைவு (Nuclear fusion)", type: "1m", explanation: "ஹைட்ரஜன் ஐசோடோப்புகள் இணைந்து ஹீலியம் உருவாவது அணுக்கரு இணைவு." },
      { id: "sci_u6_out_1m_5", q: "அணுக்கரு உலைகளில் பொதுவாகப் பயன்படும் கதிரியக்க எரிபொருள் எது?", options: ["யுரேனியம்-235 (U-235)", "கார்பன்-12", "ஹைட்ரஜன்-1", "இரும்பு-56"], ans: "யுரேனியம்-235 (U-235)", type: "1m", explanation: "U-235 அணு உலையில் பிளவுக்குட்படும் முக்கிய எரிபொருள்." },
      { id: "sci_u6_out_1m_6", q: "அணுக்கரு உலையில் நியூட்ரான்களை உறிஞ்சித் தொடர்வினையைக் கட்டுப்படுத்தும் தண்டுகள் எவை?", options: ["போரான் அல்லது காட்மியம்", "கிராஃபைட்", "கனநீர்", "காரீயம்"], ans: "போரான் அல்லது காட்மியம்", type: "1m", explanation: "போரான் மற்றும் காட்மியம் தண்டுகள் நியூட்ரான்களை உறிஞ்சுகின்றன." },
      { id: "sci_u6_out_1m_7", q: "அணுக்கரு உலையில் வேகமான நியூட்ரான்களைத் தணித்து வேகத்தைக் குறைக்கப் பயன்படுவது எது?", options: ["தணிப்பான் (Moderator - கனநீர்/கிராஃபைட்)", "கட்டுப்பாட்டுத் தண்டு", "குளிர்விப்பான்", "கான்கிரீட் சுவர்"], ans: "தணிப்பான் (Moderator - கனநீர்/கிராஃபைட்)", type: "1m", explanation: "தணிப்பான் நியூட்ரான்களின் வேகத்தைக் குறைக்கிறது." },
      { id: "sci_u6_out_1m_8", q: "அணுக்கரு உலையில் உருவாகும் அதீத வெப்பத்தை வெளியேற்றப் பயன்படும் திரவம் எது?", options: ["குளிர்விப்பான் (Coolant)", "தணிப்பான்", "எரிபொருள்", "கட்டுப்பாட்டுப் பொருள்"], ans: "குளிர்விப்பான் (Coolant)", type: "1m", explanation: "நீர், கனநீர், திரவ சோடியம் வெப்பத்தை நீராவி இயற்றிக்குக் கடத்துகின்றன." },
      { id: "sci_u6_out_1m_9", q: "ஆல்ஃபா, பீட்டா, காமா கதிர்களில் அதிக ஊடுருவும் திறன் கொண்டது எது?", options: ["காமா கதிர்கள் (Gamma rays)", "ஆல்ஃபா கதிர்கள்", "பீட்டா கதிர்கள்", "அனைத்தும் சமம்"], ans: "காமா கதிர்கள் (Gamma rays)", type: "1m", explanation: "காமா கதிர்கள் தடிமனான காரீயத் தகட்டையும் ஊடுருவும் மிக அதிகத் திறன் கொண்டவை." },
      { id: "sci_u6_out_1m_10", q: "ஆல்ஃபா, பீட்டா, காமா கதிர்களில் அதிக அயனியாக்கும் திறன் கொண்டது எது?", options: ["ஆல்ஃபா கதிர்கள் (Alpha rays)", "பீட்டா கதிர்கள்", "காமா கதிர்கள்", "நியூட்ரான்கள்"], ans: "ஆல்ஃபா கதிர்கள் (Alpha rays)", type: "1m", explanation: "ஆல்ஃபா துகள்கள் அதிக நிறை மற்றும் +2 மின்னூட்டம் கொண்டதால் அதிக அயனியாக்கும் திறன் உடையவை." },
      { id: "sci_u6_out_1m_11", q: "கதிரியக்கத்தின் சர்வதேச SI அலகு எது?", options: ["பெக்கோரல் (Becquerel - Bq)", "கியூரி", "ரூதர்போர்டு", "ரோன்ட்ஜன்"], ans: "பெக்கோரல் (Becquerel - Bq)", type: "1m", explanation: "கதிரியக்கத்தின் SI அலகு பெக்கோரல் (1 Bq = விநாடிக்கு ஒரு சிதைவு)." },
      { id: "sci_u6_out_1m_12", q: "அணுக்கரு இணைவு வினை இயற்கையாக எங்கு நடைபெறுகிறது?", options: ["சூரியன் மற்றும் விண்மீன்களில்", "பூமியின் உட்பகுதியில்", "சந்திரனில்", "கடலின் ஆழத்தில்"], ans: "சூரியன் மற்றும் விண்மீன்களில்", type: "1m", explanation: "சூரியன் மற்றும் விண்மீன்களில் நிலவும் அதீத வெப்பநிலையில் அணுக்கரு இணைவு இயற்கையாக நிகழ்கிறது." }
    ]
  });
}
