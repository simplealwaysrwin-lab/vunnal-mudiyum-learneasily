// 10-ஆம் வகுப்பு அறிவியல் - அலகு 4: மின்னோட்டவியல் (Electricity)
// தமிழ்நாடு அரசு சமச்சீர் கல்வி வினா-விடை வழிகாட்டி (தமிழ் வழி)

const SCIENCE_UNIT_4_DATA = {
  unitId: "sci_u4",
  unitName: "அலகு 4: மின்னோட்டவியல்",
  subject: "அறிவியல் (Science)",
  syllabus: "தமிழ்நாடு அரசு சமச்சீர் கல்வி 10-ஆம் வகுப்பு அறிவியல் - இயற்பியல்",

  // முக்கிய சூத்திரங்கள் & விதிகள்
  formulas: [
    { title: "மின்னோட்டம் (Electric Current)", rule: "I = Q / t (SI அலகு: ஆம்பியர் - A)" },
    { title: "மின்னழுத்த வேறுபாடு (Potential Difference)", rule: "V = W / Q (SI அலகு: வோல்ட் - V)" },
    { title: "ஓம் விதி (Ohm's Law)", rule: "V = I × R (அல்லது R = V / I, SI அலகு: ஓம் - Ω)" },
    { title: "தன்மின் தடை எண் (Resistivity)", rule: "ρ = (R × A) / L (SI அலகு: ஓம்-மீட்டர் - Ω m)" },
    { title: "தொடரிணைப்பில் மின்தடை", rule: "R_s = R₁ + R₂ + R₃ (மொத்த மின்தடை மிக அதிகமாகும்)" },
    { title: "பக்க இணைப்பில் மின்தடை", rule: "1 / R_p = 1 / R₁ + 1 / R₂ + 1 / R₃ (மொத்த மின்தடை மிகக் குறைவாகும்)" },
    { title: "ஜூல் வெப்ப விதி (Joule's Law of Heating)", rule: "H = I² × R × t (SI அலகு: ஜூல் - J)" },
    { title: "மின் திறன் (Electric Power)", rule: "P = V × I = I²R = V² / R (SI அலகு: வாட் - W, 1 kWh = 3.6 × 10⁶ J)" }
  ],

  subSections: [
    // -------------------------------------------------------------
    // பகுதி 1: ஓம் விதி, மின்தடை & மின் சுற்றுகள்
    // -------------------------------------------------------------
    {
      id: "sec_sci_4_1",
      title: "பகுதி 1: ஓம் விதி, மின்தடை & தொடர்-பக்க இணைப்புகள்",
      author: "இயற்பியல் - அலகு 4: மின்னோட்டவியல்",
      questions: [
        {
          id: "sci_4_1",
          type: "1m",
          mark: "1 மதிப்பெண்",
          examTag: "அரசுத் தேர்வு",
          q: "மின்னழுத்த வேறுபாட்டை அளவிடப் பயன்படும் கருவி எது மற்றும் அது மின்சுற்றில் எவ்வாறு இணைக்கப்பட வேண்டும்?",
          options: ["அ) அம்மீட்டர், தொடரிணைப்பு", "ஆ) வோல்ட்மீட்டர், பக்க இணைப்பு", "இ) கால்வனோமீட்டர், தொடரிணைப்பு", "ஈ) வோல்ட்மீட்டர், தொடரிணைப்பு"],
          ans: "விடை: <b>ஆ) வோல்ட்மீட்டர், பக்க இணைப்பு</b><br>விளக்கம்: மின்னழுத்த வேறுபாட்டை வோல்ட்மீட்டர் கொண்டு அளவிடுவர். வோல்ட்மீட்டரின் மின்தடை மிக அதிகம் என்பதால் அது எப்போதும் மின்சுற்றில் பக்க இணைப்பிலேயே இணைக்கப்பட வேண்டும்.",
          ansTamil: "மின்னழுத்த வேறுபாட்டை அளவிட வோல்ட்மீட்டர் பக்க இணைப்பில் இணைக்கப்படுகிறது."
        },
        {
          id: "sci_4_2",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "ஒரு மின்கடத்தியின் நீளம் இருமடங்காக அதிகரிக்கப்பட்டால், அதன் மின்தடை எவ்வாறு மாறும்?",
          options: ["அ) பாதியாகும்", "ஆ) மாறாது", "இ) இருமடங்காகும்", "ஈ) நான்கு மடங்காகும்"],
          ans: "விடை: <b>இ) இருமடங்காகும்</b><br>விளக்கம்: R ∝ L (மின்தடை நீளத்திற்கு நேர்த்தகவில் அமையும்). எனவே நீளம் இருமடங்காகும்போது மின்தடையும் இருமடங்காகும்.",
          ansTamil: "மின்தடை நீளத்திற்கு நேர்த்தகவில் இருப்பதால் நீளம் கூடினால் மின்தடையும் கூடும்."
        },
        {
          id: "sci_4_3",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examYear: "2023",
          examTag: "2023*",
          isImportant: true,
          q: "ஓம் விதியைக் கூறுக (State Ohm's Law).",
          ans: "<b>ஓம் விதி:</b><br><i>'மாறா வெப்பநிலையில், கடத்தி ஒன்றின் வழியே பாயும் சீரான மின்னோட்டம் (I) அதன் முனைகளுக்கு இடைப்பட்ட மின்னழுத்த வேறுபாட்டிற்கு (V) நேர்விகிதத்தில் இருக்கும்.'</i><br><br>V ∝ I ⇒ <b>V = I × R</b><br>(இங்கு R என்பது கடத்தியின் மின்தடை ஆகும்).",
          ansTamil: "மாறா வெப்பநிலையில் V = IR என்பதே ஓம் விதியாகும்."
        },
        {
          id: "sci_4_4",
          type: "2m",
          mark: "2 மதிப்பெண்",
          q: "மின்தடையாக்கிகளின் தொடரிணைப்பு மற்றும் பக்க இணைப்பு வேறுபடுத்துக.",
          ans: `<div style="line-height:1.7;">
            <b>1. தொடரிணைப்பு (Series):</b><br>
            • அனைத்து மின்தடையாக்கிகள் வழியே பாயும் மின்னோட்டம் சமம்.<br>
            • தொகுபயன் மின்தடை: R_s = R₁ + R₂ + R₃ (மின்தடை அதிகரிக்கும்).<br>
            • ஏதேனும் ஒரு சாதனம் பழுதானால் ஒட்டுமொத்த மின்சுற்றும் முறியும்.<br><br>
            <b>2. பக்க இணைப்பு (Parallel):</b><br>
            • அனைத்து மின்தடையாக்கிகளின் முனைகளிலும் மின்னழுத்த வேறுபாடு சமம்.<br>
            • தொகுபயன் மின்தடை: 1/R_p = 1/R₁ + 1/R₂ (மின்தடை குறையும்).<br>
            • ஒரு சாதனம் பழுதானாலும் மற்ற சாதனங்கள் தடையின்றி இயங்கும் (வீட்டு மின்சுற்றுகள்).
          </div>`,
          ansTamil: "தொடரிணைப்பில் மின்னோட்டம் சமம்; பக்க இணைப்பில் மின்னழுத்தம் சமம்."
        }
      ]
    },

    // -------------------------------------------------------------
    // பகுதி 2: ஜூல் வெப்ப விதி & மின் திறன்
    // -------------------------------------------------------------
    {
      id: "sec_sci_4_2",
      title: "பகுதி 2: ஜூல் வெப்ப விதி, மின் திறன் & வீட்டு மின்சுற்றுகள்",
      author: "இயற்பியல் - அலகு 4: மின்னோட்டவியல்",
      questions: [
        {
          id: "sci_4_5",
          type: "1m",
          mark: "1 மதிப்பெண்",
          examTag: "அரசு மாதிரி",
          q: "ஒரு கிலோவாட் மணி (1 kWh) என்பது எத்தனை ஜூல்களுக்குச் சமம்?",
          options: ["அ) 3.6 × 10⁵ J", "ஆ) 3.6 × 10⁶ J", "இ) 1000 J", "ஈ) 3600 J"],
          ans: "விடை: <b>ஆ) 3.6 × 10⁶ J</b><br>விளக்கம்: 1 kWh = 1000 W × 3600 s = 3,600,000 J = <b>3.6 × 10⁶ J</b>.",
          ansTamil: "1 யூனிட் மின்சாரம் (1 kWh) = 3.6 × 10⁶ ஜூல்."
        },
        {
          id: "sci_4_6",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examYear: "2024",
          examTag: "2024*",
          isImportant: true,
          q: "ஜூலின் வெப்ப விதியைக் கூறுக (State Joule's Law of Heating).",
          ans: "<b>ஜூல் வெப்ப விதி:</b><br>ஒரு மின்தடையில் உருவாகும் வெப்பமானது (H):<br>1. மின்னோட்டத்தின் இருமடிக்கு நேர்விகிதத்திலும் (H ∝ I²)<br>2. மின்தடைக்கு நேர்விகிதத்திலும் (H ∝ R)<br>3. மின்னோட்டம் பாயும் காலத்திற்கு நேர்விகிதத்திலும் (H ∝ t) இருக்கும்.<br><br><b>H = I² × R × t</b> (ஜூல்)",
          ansTamil: "H = I²Rt என்பதே ஜூல் வெப்ப விதியாகும்."
        },
        {
          id: "sci_4_7",
          type: "5m",
          mark: "4 / 7 மதிப்பெண்",
          examYear: "2023",
          examTag: "2023* (முக்கிய விரிவான விடை)",
          isImportant: true,
          q: "மின்தடையாக்கிகளின் பக்க இணைப்பிற்கான தொகுபயன் மின்தடை சமன்பாட்டை வரைபட விளக்கத்துடன் தருவிக்கவும்.",
          ans: `<div style="line-height:1.8;">
            <b>பக்க இணைப்பில் தொகுபயன் மின்தடை (Resistors in Parallel):</b><br><br>
            R₁, R₂, R₃ என்ற மூன்று மின்தடையாக்கிகள் V என்ற மின்னழுத்த வேறுபாடு கொண்ட மின்மூலத்துடன் பக்க இணைப்பில் இணைக்கப்பட்டுள்ளதாகக் கொள்வோம்.<br><br>
            <b>பண்புகள்:</b><br>
            1. ஒவ்வொரு மின்தடையாக்கியின் முனைகளிலும் மின்னழுத்த வேறுபாடு 'V' சமமாக இருக்கும்.<br>
            2. ஆனால் மின்சுற்றின் மொத்த மின்னோட்டம் 'I' ஒவ்வொரு கிளையிலும் முறையே I₁, I₂, I₃ எனப் பிரிகிறது.<br><br>
            <b>படிநிலைகள்:</b><br>
            மொத்த மின்னோட்டம்: <b>I = I₁ + I₂ + I₃</b> ---- (1)<br><br>
            ஓம் விதிப்படி (I = V / R):<br>
            • I₁ = V / R₁<br>
            • I₂ = V / R₂<br>
            • I₃ = V / R₃<br><br>
            பக்க இணைப்பின் தொகுபயன் மின்தடை R_p எனில், மொத்த மின்னோட்டம்:<br>
            • <b>I = V / R_p</b><br><br>
            இம்மதிப்புகளை சமன்பாடு (1)-ல் பிரதியிட:<br>
            V / R_p = (V / R₁) + (V / R₂) + (V / R₃)<br><br>
            பொதுவான V-ஐ வெளியே எடுத்து நீக்க:<br>
            <div style="font-size:18px; font-weight:800; color:#0369a1; margin:8px 0;">
              1 / R_p = 1 / R₁ + 1 / R₂ + 1 / R₃
            </div>
            <b>முடிவு:</b><br>
            மின்தடையாக்கிகள் பக்க இணைப்பில் இணைக்கப்படும் போது, தனித்தனி மின்தடைகளின் தலைகீழிகளின் கூடுதல் தொகுபயன் மின்தடையின் தலைகீழிக்குச் சமம். இதன் தொகுபயன் மின்தடை இணைப்பிலுள்ள மிகச்சிறிய தனித்த மின்தடையை விடக் குறைவாக இருக்கும்.
          </div>`,
          ansTamil: "பக்க இணைப்பின் தொகுபயன் மின்தடை சமன்பாடு 1/Rp = 1/R1 + 1/R2 + 1/R3 பெறப்பட்டது."
        }
      ]
    }
  ]
};



// ==========================================
// 🌟 பாடநூலுக்கு வெளியே உள்ள கூடுதல் வினாக்கள் & மாதிரித் தேர்வுப் புள்ளிகள் (Unit 4 TM)
// ==========================================
if (typeof SCIENCE_UNIT_4_DATA !== 'undefined') {
  if (!SCIENCE_UNIT_4_DATA.subSections) SCIENCE_UNIT_4_DATA.subSections = [];
  SCIENCE_UNIT_4_DATA.subSections.push({
    id: "sci_u4_outside",
    title: "🌟 பாடநூலுக்கு வெளியே உள்ள கூடுதல் வினாக்கள் & மாதிரித் தேர்வுப் புள்ளிகள்",
    author: "அரசுத் தேர்வு ஆசிரியர் குழு",
    questions: [
      {
        id: "sci_u4_out_5m_1",
        q: "மின்தடையாக்கிகளின் தொடரிணைப்பு மற்றும் பக்க இணைப்புகளைத் தெளிவான மின்சுற்று வரைபடங்கள் மற்றும் ஒப்பீட்டு அட்டவணையுடன் விளக்குக.",
        type: "5m",
        examTag: "பாடநூலுக்கு வெளியே உள்ள கூடுதல் வினா (Outside Book Practice)",
        ans: "<b>தொடரிணைப்பு மற்றும் பக்க இணைப்பு ஒப்பீடு:</b><br><br>" +
             "<table style='width:100%; border-collapse:collapse; margin-bottom:12px; font-size:12.5px; border:1px solid #cbd5e1;'>" +
             "<tr style='background:#f1f5f9; color:#1e293b; text-align:left;'>" +
             "<th style='padding:8px; border:1px solid #cbd5e1;'>பண்புகள்</th>" +
             "<th style='padding:8px; border:1px solid #cbd5e1;'>தொடரிணைப்பு (Series)</th>" +
             "<th style='padding:8px; border:1px solid #cbd5e1;'>பக்க இணைப்பு (Parallel)</th>" +
             "</tr>" +
             "<tr>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'><b>இணைப்பு முறை</b></td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>மின்தடையாக்கிகள் அடுத்தடுத்து ஒற்றைப் பாதையில் இணைக்கப்படும்.</td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>மின்தடையாக்கிகள் இரு பொதுவான புள்ளிகளுக்கு இடையே கிளைகளாக இணைக்கப்படும்.</td>" +
             "</tr>" +
             "<tr>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'><b>மின்னோட்டம் (I)</b></td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>அனைத்து மின்தடைகள் வழியேயும் ஒரே அளவு மின்னோட்டம் பாயும் (I = I₁ = I₂ = I₃).</td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>மின்னோட்டம் கிளைகளில் பிரியும் (I = I₁ + I₂ + I₃).</td>" +
             "</tr>" +
             "<tr>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'><b>மின்னழுத்த வேறுபாடு (V)</b></td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>மொத்த மின்னழுத்தம் ஒவ்வொரு மின்தடைக்கும் இடையே பிரியும் (V = V₁ + V₂ + V₃).</td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>அனைத்துக் கிளைகளுக்கும் இடையே ஒரே அளவு மின்னழுத்தம் இருக்கும் (V = V₁ = V₂ = V₃).</td>" +
             "</tr>" +
             "<tr>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'><b>தொகுபயன் மின்தடை (R)</b></td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'><b>R_s = R₁ + R₂ + R₃</b><br>(மிகப்பெரிய மின்தடையை விட அதிகம்)</td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'><b>1/R_p = 1/R₁ + 1/R₂ + 1/R₃</b><br>(மிகச்சிறிய மின்தடையை விடக் குறைவு)</td>" +
             "</tr>" +
             "<tr>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'><b>செயலிழப்பு விளைவு</b></td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>ஒரு சாதனம் பழுதானாலும் முழுச் சுற்றும் துண்டிக்கப்பட்டு அனைத்தும் நின்றுவிடும்.</td>" +
             "<td style='padding:8px; border:1px solid #cbd5e1;'>ஒரு சாதனம் பழுதானாலும் மற்ற கிளைகள் தொடர்ந்து சுதந்திரமாக இயங்கும் (வீட்டு மின்சுற்றுகள்).</td>" +
             "</tr>" +
             "</table>",
        ansTamil: "தொடரிணைப்பில் மின்னோட்டம் சமம், மின்தடை கூடும் (Rs = R1+R2+R3). பக்க இணைப்பில் மின்னழுத்தம் சமம், மின்தடை குறையும் (1/Rp = 1/R1+1/R2+1/R3).",
        diagramCaption: "தொடர் மற்றும் பக்க மின்சுற்றுகளின் ஒப்பீட்டு வரைபடம்",
        diagramSvg: `<svg viewBox="0 0 460 260" style="max-width:100%; height:auto; display:block; margin:0 auto; background:#f8fafc; border-radius:12px; border:1px solid #cbd5e1;">
  <text x="230" y="24" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e293b">Series vs Parallel Electrical Circuits / தொடர் மற்றும் பக்க இணைப்புகள்</text>
  <g transform="translate(15, 38)">
    <rect x="0" y="0" width="205" height="205" rx="8" fill="#f0f9ff" stroke="#bae6fd"/>
    <text x="102" y="20" font-size="11.5" font-weight="bold" fill="#0369a1" text-anchor="middle">1. Series Circuit / தொடரிணைப்பு</text>
    <path d="M 30,160 L 30,60 L 60,60" fill="none" stroke="#2563eb" stroke-width="2"/>
    <path d="M 60,60 L 65,52 L 75,68 L 85,52 L 95,68 L 100,60" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
    <text x="80" y="45" font-size="9" font-weight="bold" fill="#1d4ed8">R₁</text>
    <path d="M 100,60 L 105,52 L 115,68 L 125,52 L 135,68 L 140,60" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
    <text x="120" y="45" font-size="9" font-weight="bold" fill="#1d4ed8">R₂</text>
    <path d="M 140,60 L 145,52 L 155,68 L 165,52 L 175,68 L 180,60" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
    <text x="160" y="45" font-size="9" font-weight="bold" fill="#1d4ed8">R₃</text>
    <path d="M 180,60 L 180,160 L 125,160" fill="none" stroke="#2563eb" stroke-width="2"/>
    <path d="M 30,160 L 85,160" fill="none" stroke="#2563eb" stroke-width="2"/>
    <line x1="85" y1="148" x2="85" y2="172" stroke="#dc2626" stroke-width="3"/>
    <line x1="95" y1="154" x2="95" y2="166" stroke="#1e293b" stroke-width="2"/>
    <line x1="105" y1="148" x2="105" y2="172" stroke="#dc2626" stroke-width="3"/>
    <line x1="115" y1="154" x2="115" y2="166" stroke="#1e293b" stroke-width="2"/>
    <line x1="115" y1="160" x2="125" y2="160" stroke="#2563eb" stroke-width="2"/>
    <text x="100" y="142" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="middle">V (Battery)</text>
    <rect x="15" y="175" width="175" height="22" rx="4" fill="#0284c7"/>
    <text x="102" y="190" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">R_s = R₁ + R₂ + R₃</text>
  </g>
  <g transform="translate(240, 38)">
    <rect x="0" y="0" width="205" height="205" rx="8" fill="#dcfce7" stroke="#86efac"/>
    <text x="102" y="20" font-size="11.5" font-weight="bold" fill="#15803d" text-anchor="middle">2. Parallel Circuit / பக்க இணைப்பு</text>
    <path d="M 30,160 L 30,115" fill="none" stroke="#16a34a" stroke-width="2"/>
    <line x1="20" y1="115" x2="40" y2="115" stroke="#dc2626" stroke-width="3"/>
    <line x1="24" y1="125" x2="36" y2="125" stroke="#1e293b" stroke-width="2"/>
    <path d="M 30,125 L 30,60 L 60,60" fill="none" stroke="#16a34a" stroke-width="2"/>
    <circle cx="60" cy="100" r="3" fill="#15803d"/>
    <line x1="60" y1="60" x2="60" y2="140" stroke="#16a34a" stroke-width="2"/>
    <line x1="60" y1="60" x2="80" y2="60" stroke="#16a34a" stroke-width="1.8"/>
    <path d="M 80,60 L 85,54 L 95,66 L 105,54 L 115,66 L 120,60" fill="none" stroke="#047857" stroke-width="2.5"/>
    <line x1="120" y1="60" x2="140" y2="60" stroke="#16a34a" stroke-width="1.8"/>
    <text x="100" y="50" font-size="8.5" font-weight="bold" fill="#047857">R₁</text>
    <line x1="60" y1="100" x2="80" y2="100" stroke="#16a34a" stroke-width="1.8"/>
    <path d="M 80,100 L 85,94 L 95,106 L 105,94 L 115,106 L 120,100" fill="none" stroke="#047857" stroke-width="2.5"/>
    <line x1="120" y1="100" x2="140" y2="100" stroke="#16a34a" stroke-width="1.8"/>
    <text x="100" y="90" font-size="8.5" font-weight="bold" fill="#047857">R₂</text>
    <line x1="60" y1="140" x2="80" y2="140" stroke="#16a34a" stroke-width="1.8"/>
    <path d="M 80,140 L 85,134 L 95,146 L 105,134 L 115,146 L 120,140" fill="none" stroke="#047857" stroke-width="2.5"/>
    <line x1="120" y1="140" x2="140" y2="140" stroke="#16a34a" stroke-width="1.8"/>
    <text x="100" y="130" font-size="8.5" font-weight="bold" fill="#047857">R₃</text>
    <line x1="140" y1="60" x2="140" y2="140" stroke="#16a34a" stroke-width="2"/>
    <circle cx="140" cy="100" r="3" fill="#15803d"/>
    <path d="M 140,100 L 175,100 L 175,160 L 30,160" fill="none" stroke="#16a34a" stroke-width="2"/>
    <rect x="15" y="175" width="175" height="22" rx="4" fill="#15803d"/>
    <text x="102" y="190" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">1/R_p = 1/R₁ + 1/R₂ + 1/R₃</text>
  </g>
</svg>`
      },
      {
        id: "sci_u4_out_5m_2",
        q: "மின்னோட்டத்தின் வெப்ப விளைவு என்றால் என்ன? ஜூல் வெப்ப விதியைக் கூறி அதன் முக்கிய அன்றாடப் பயன்பாடுகளை வரைபடத்துடன் விளக்குக.",
        type: "5m",
        examTag: "பாடநூலுக்கு வெளியே உள்ள கூடுதல் வினா (Outside Book Practice)",
        ans: "<b>மின்னோட்டத்தின் வெப்ப விளைவு மற்றும் ஜூல் விதி:</b><br><br>" +
             "<b>1. வெப்ப விளைவு தத்துவம்:</b><br>" +
             "ஒரு மின்தடை கொண்ட கடத்தியின் வழியே மின்னோட்டம் பாயும்போது, நகரும் எலக்ட்ரான்கள் கடத்தியின் அணுக்களுடன் மோதி அவற்றின் இயக்க ஆற்றலை வெப்ப ஆற்றலாக மாற்றுகின்றன. இந்நிகழ்வே <b>மின்னோட்டத்தின் வெப்ப விளைவு</b> ஆகும்.<br><br>" +
             "<b>2. ஜூல் வெப்ப விதி (Joule's Law of Heating):</b><br>" +
             "ஒரு மின்தடையில் உருவாகும் வெப்பத்தின் அளவு (H):<br>" +
             "• பாயும் மின்னோட்டத்தின் இருமடிக்கு நேர்விகிதத்திலும் (H ∝ I²)<br>" +
             "• கடத்தியின் மின்தடைக்கு நேர்விகிதத்திலும் (H ∝ R)<br>" +
             "• மின்னோட்டம் பாயும் காலத்திற்கு நேர்விகிதத்திலும் (H ∝ t) அமையும்.<br><br>" +
             "<div style='text-align:center; font-size:16px; font-weight:bold; color:#b91c1c; padding:8px; background:#fef2f2; border-radius:8px;'>H = I² R t (ஜூல் - Joules)</div><br>" +
             "<b>3. வெப்பமூட்டும் சாதனங்களின் பண்புகள்:</b><br>" +
             "மின்தேய்வைப்பெட்டி, நீர் கொதிகலன் போன்றவற்றில் <b>நிக்ரோம் (Nichrome - நிக்கல் + குரோமியம் கலப்புலோகம்)</b> வெப்பமூட்டும் கம்பியாகப் பயன்படுகிறது. இதன் காரணங்கள்:<br>" +
             "1. மிக அதிக மின்தடை எண் (High Resistivity)<br>" +
             "2. மிக உயர் உருகுநிலை (High Melting Point)<br>" +
             "3. எளிதில் ஆக்சிகரணத்திற்கு (துருப்பிடித்தல்) உட்படாது.<br><br>" +
             "<b>4. முக்கியப் பயன்பாடுகள்:</b><br>" +
             "• மின் சூடேற்றிகள் (Electric Heaters) மற்றும் இஸ்திரி பெட்டி.<br>" +
             "• மின் உருகி இழை (Electric Fuse): காரீயம் மற்றும் வெள்ளீயம் கலந்த குறைந்த உருகுநிலை கொண்ட கம்பி, அதிக மின்னோட்டம் வரும்போது உருகிச் சுற்றைப் பாதுகாக்கிறது.<br>" +
             "• மின் விளக்கு (Incandescent Bulb): டங்ஸ்டன் இழை மிக அதிக உருகுநிலை (3380°C) கொண்டு வெள்ளொளியை உமிழ்கிறது.",
        ansTamil: "மின்னோட்டம் பாயும்போது வெப்பம் உருவாவது ஜூல் வெப்ப விளைவு (H = I²Rt). நிக்ரோம் கம்பி அதிக மின்தடை மற்றும் உருகுநிலை கொண்டதால் வெப்பமேற்றிகளில் பயன்படுகிறது.",
        diagramCaption: "நிக்ரோம் கம்பிச்சுருளின் ஜூல் வெப்ப விளைவு மின்சுற்று",
        diagramSvg: `<svg viewBox="0 0 420 250" style="max-width:100%; height:auto; display:block; margin:0 auto; background:#f8fafc; border-radius:12px; border:1px solid #cbd5e1;">
  <text x="210" y="24" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e293b">Heating Effect of Current / ஜூல் வெப்ப விளைவு (H = I²Rt)</text>
  <defs>
    <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ef4444"/><stop offset="50%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#ef4444"/>
    </linearGradient>
  </defs>
  <path d="M 60,180 L 60,80 L 120,80" fill="none" stroke="#2563eb" stroke-width="3"/>
  <path d="M 300,80 L 360,80 L 360,180 L 250,180" fill="none" stroke="#2563eb" stroke-width="3"/>
  <circle cx="120" cy="80" r="4" fill="#1e293b"/>
  <line x1="120" y1="80" x2="148" y2="70" stroke="#1e293b" stroke-width="2.5"/>
  <circle cx="150" cy="80" r="4" fill="#1e293b"/>
  <line x1="150" y1="80" x2="175" y2="80" stroke="#2563eb" stroke-width="3"/>
  <rect x="170" y="65" width="135" height="30" rx="6" fill="#fef2f2" stroke="#fca5a5"/>
  <path d="M 175,80 Q 185,68 195,80 Q 205,92 215,80 Q 225,68 235,80 Q 245,92 255,80 Q 265,68 275,80 Q 285,92 295,80 L 300,80" fill="none" stroke="url(#glowGrad)" stroke-width="4.5" stroke-linecap="round"/>
  <text x="237" y="112" font-size="10.5" font-weight="bold" fill="#b91c1c" text-anchor="middle">நிக்ரோம் கம்பிச்சுருள் (Nichrome Heating Coil)</text>
  <text x="237" y="125" font-size="9" fill="#b91c1c" text-anchor="middle">அதிக மின்தடை எண் &amp; உயர் உருகுநிலை</text>
  <path d="M 60,180 L 170,180" fill="none" stroke="#2563eb" stroke-width="3"/>
  <line x1="170" y1="168" x2="170" y2="192" stroke="#dc2626" stroke-width="4"/>
  <line x1="180" y1="174" x2="180" y2="186" stroke="#1e293b" stroke-width="2.5"/>
  <line x1="190" y1="168" x2="190" y2="192" stroke="#dc2626" stroke-width="4"/>
  <line x1="200" y1="174" x2="200" y2="186" stroke="#1e293b" stroke-width="2.5"/>
  <line x1="200" y1="180" x2="250" y2="180" stroke="#2563eb" stroke-width="3"/>
  <text x="185" y="160" font-size="10.5" font-weight="bold" fill="#dc2626" text-anchor="middle">+ V - (Battery)</text>
  <line x1="75" y1="80" x2="95" y2="80" stroke="#16a34a" stroke-width="2"/>
  <polygon points="93,76 101,80 93,84" fill="#16a34a"/>
  <text x="85" y="72" font-size="9" font-weight="bold" fill="#15803d">I →</text>
  <text x="237" y="55" font-size="14" text-anchor="middle">♨️ ♨️ ♨️</text>
  <rect x="40" y="208" width="340" height="30" rx="6" fill="#1e293b"/>
  <text x="210" y="228" font-size="12" font-weight="bold" fill="#38bdf8" text-anchor="middle">ஜூல் வெப்ப விதி: H = I²Rt (Joules)</text>
</svg>`
      },
      // 12 Mock Test 1-Mark Questions
      { id: "sci_u4_out_1m_1", q: "மின்னூட்டம் பாயும் வீதம் எவ்வாறு வரையறுக்கப்படுகிறது?", options: ["மின்னழுத்தம்", "மின்னோட்டம் (Electric Current)", "மின்தடை", "மின் திறன்"], ans: "மின்னோட்டம் (Electric Current)", type: "1m", explanation: "I = Q / t (காலத்தைப் பொறுத்து மின்னூட்டம் பாயும் வீதமே மின்னோட்டம்)." },
      { id: "sci_u4_out_1m_2", q: "மின்னோட்டத்தைக் கணக்கிடுவதற்கான சரியான சமன்பாடு எது?", options: ["I = Q / t", "I = V / t", "I = W / Q", "I = P / V²"], ans: "I = Q / t", type: "1m", explanation: "மின்னோட்டம் = மின்னூட்டம் (Q) / காலம் (t)." },
      { id: "sci_u4_out_1m_3", q: "மின்னோட்டத்தின் சர்வதேச SI அலகு எது?", options: ["ஆம்பியர் (Ampere - A)", "வோல்ட்", "ஓம்", "கூலூம்"], ans: "ஆம்பியர் (Ampere - A)", type: "1m", explanation: "மின்னோட்டத்தின் SI அலகு ஆம்பியர் (A) ஆகும்." },
      { id: "sci_u4_out_1m_4", q: "ஓரலகு நேர்மின்னூட்டத்தை ஒரு புள்ளியிலிருந்து மற்றொரு புள்ளிக்கு நகர்த்த செய்யப்படும் வேலை:", options: ["மின்னழுத்த வேறுபாடு (Potential difference)", "மின்புலம்", "மின்விசை", "மின்னோட்டம்"], ans: "மின்னழுத்த வேறுபாடு (Potential difference)", type: "1m", explanation: "V = W / Q (வேலை / மின்னூட்டம்)." },
      { id: "sci_u4_out_1m_5", q: "மின்னழுத்த வேறுபாட்டின் SI அலகு எது?", options: ["வோல்ட் (Volt - V)", "ஆம்பியர்", "ஓம்", "ஜூல்"], ans: "வோல்ட் (Volt - V)", type: "1m", explanation: "மின்னழுத்த வேறுபாட்டின் SI அலகு வோல்ட் (V)." },
      { id: "sci_u4_out_1m_6", q: "மாறா வெப்பநிலையில் கடத்தி வழியே பாயும் மின்னோட்டம் அதன் முனைகளுக்கு இடைப்பட்ட மின்னழுத்த வேறுபாட்டிற்கு நேர்விகிதத்தில் இருக்கும் எனக் கூறும் விதி எது?", options: ["ஓம் விதி (Ohm's Law)", "ஜூல் விதி", "நியூட்டன் விதி", "ஆம்பியர் விதி"], ans: "ஓம் விதி (Ohm's Law)", type: "1m", explanation: "V ∝ I அல்லது V = IR என்பது ஓம் விதியாகும்." },
      { id: "sci_u4_out_1m_7", q: "ஓம் விதியின் கணிதச் சமன்பாடு எது?", options: ["V = IR", "P = VI", "H = I²Rt", "W = VQ"], ans: "V = IR", type: "1m", explanation: "மின்னழுத்தம் V = மின்னோட்டம் (I) × மின்தடை (R)." },
      { id: "sci_u4_out_1m_8", q: "மின்னோட்டம் பாய்வதை எதிர்க்கும் கடத்தியின் பண்பு எது?", options: ["மின்தடை (Resistance)", "மின்கடத்துத்திறன்", "மின்னழுத்தம்", "மின்னூட்டம்"], ans: "மின்தடை (Resistance)", type: "1m", explanation: "மின்னோட்டத்தை எதிர்க்கும் பண்பே மின்தடை எனப்படும்." },
      { id: "sci_u4_out_1m_9", q: "மின்தடையின் SI அலகு எது?", options: ["ஓம் (Ohm - Ω)", "சீமென்ஸ்", "வோல்ட்", "வாட்"], ans: "ஓம் (Ohm - Ω)", type: "1m", explanation: "மின்தடையின் சர்வதேச அலகு ஓம் (Ω)." },
      { id: "sci_u4_out_1m_10", q: "மின்னாற்றல் நுகரப்படும் அல்லது வேலை செய்யப்படும் வீதம் எவ்வாறு அழைக்கப்படுகிறது?", options: ["மின் திறன் (Electric Power)", "மின்னோட்டம்", "மின்தடை", "மின் விசை"], ans: "மின் திறன் (Electric Power)", type: "1m", explanation: "P = W / t = VI (மின் திறன்)." },
      { id: "sci_u4_out_1m_11", q: "மின் திறனுக்கான சரியான சமன்பாடு எது?", options: ["P = VI", "P = V / I", "P = I² / R", "P = V²I"], ans: "P = VI", type: "1m", explanation: "திறன் P = V × I அல்லது I²R." },
      { id: "sci_u4_out_1m_12", q: "வீட்டு உபயோக மின்னாற்றலின் வணிக ரீதியான அலகு எது?", options: ["கிலோவாட் மணி (Kilowatt-hour - kWh)", "ஜூல்", "வாட் வினாடி", "வோல்ட் ஆம்பியர்"], ans: "கிலோவாட் மணி (Kilowatt-hour - kWh)", type: "1m", explanation: "1 kWh (ஒரு யூனிட் மின்சாரம்) = 3.6 × 10⁶ J." }
    ]
  });
}
