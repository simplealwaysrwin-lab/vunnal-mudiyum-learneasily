// 10-ஆம் வகுப்பு கணிதம் - அலகு 7: அளவியல் (Mensuration)
// தமிழ்நாடு சமச்சீர் கல்வி வினா-விடை வழிகாட்டி (தமிழ் வழி)

const MATHS_TM_UNIT_7_DATA = {
  unitId: "math_tm_u7",
  unitName: "அலகு 7: அளவியல்",
  subject: "கணிதம் (தமிழ் வழி)",
  syllabus: "தமிழ்நாடு அரசு சமச்சீர் கல்வி 10-ஆம் வகுப்பு கணிதம்",

  // முக்கிய சூத்திரங்கள்
  formulas: [
    { title: "நேர்வட்ட உருளை", rule: "வளைபரப்பு (CSA) = 2πrh | மொத்தப் புறப்பரப்பு (TSA) = 2πr(h + r) | கனஅளவு = πr²h" },
    { title: "உள்ளீடற்ற உருளை", rule: "வளைபரப்பு = 2π(R + r)h | மொத்தப் புறப்பரப்பு = 2π(R + r)(h + R - r) | கனஅளவு = π(R² - r²)h" },
    { title: "நேர்வட்டக் கூம்பு", rule: "சாய்வுயரம் l = √(r² + h²) | வளைபரப்பு = πrl | மொத்தப் புறப்பரப்பு = πr(l + r) | கனஅளவு = (1/3)πr²h" },
    { title: "இடைக்கண்டம் (Frustum)", rule: "சாய்வுயரம் l = √[h² + (R - r)²] | வளைபரப்பு = π(R + r)l | கனஅளவு = (1/3)πh(R² + r² + Rr)" },
    { title: "திண்மக் கோளம்", rule: "வளைபரப்பு = மொத்தப் புறப்பரப்பு = 4πr² | கனஅளவு = (4/3)πr³" },
    { title: "உள்ளீடற்ற கோளம்", rule: "புறப்பரப்பு = 4πR² | மொத்தப் புறப்பரப்பு = 4π(R² + r²) | கனஅளவு = (4/3)π(R³ - r³)" },
    { title: "திண்ம அரைக்கோளம்", rule: "வளைபரப்பு = 2πr² | மொத்தப் புறப்பரப்பு = 3πr² | கனஅளவு = (2/3)πr³" },
    { title: "உள்ளீடற்ற அரைக்கோளம்", rule: "வளைபரப்பு = 2π(R² + r²) | மொத்தப் புறப்பரப்பு = π(3R² + r²) | கனஅளவு = (2/3)π(R³ - r³)" },
    { title: "திண்மங்களின் உருமாற்றம்", rule: "புதிய திண்மத்தின் கனஅளவு = பழைய திண்மத்தின் கனஅளவு (எண்ணிக்கை n = பெரிய கனஅளவு / சிறிய கனஅளவு)" }
  ],

  subSections: [
    {
      id: "sec_m_tm_7_1",
      title: "பகுதி 1: வளைபரப்பு மற்றும் மொத்தப் புறப்பரப்பு",
      author: "அத்தியாயம் 7: அளவியல்",
      questions: [
        {
          id: "m_tm_7_1_1",
          type: "1m",
          mark: "1 மதிப்பெண்",
          examTag: "அரசுத் தேர்வு",
          q: "14 செ.மீ உயரமுடைய ஒரு நேர்வட்ட உருளையின் வளைபரப்பு 88 செ.மீ² எனில், உருளையின் விட்டம் யாது?",
          options: ["அ) 1 செ.மீ", "ஆ) 2 செ.மீ", "இ) 3 செ.மீ", "ஈ) 4 செ.மீ"],
          ans: "விடை: <b>ஆ) 2 செ.மீ</b><br>விளக்கம்: 2πrh = 88 ➔ 2 × (22/7) × r × 14 = 88 ➔ 88r = 88 ➔ r = 1 செ.மீ. விட்டம் d = 2r = 2 செ.மீ."
        },
        {
          id: "m_tm_7_1_2",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "ஒரு கூம்பின் அடிப்புற ஆரம் மும்மடங்காகவும், உயரம் இருமடங்காகவும் மாறினால் அதன் கனஅளவு எத்தனை மடங்காகும்?",
          options: ["அ) 6 மடங்கு", "ஆ) 12 மடங்கு", "இ) 18 மடங்கு", "ஈ) 24 மடங்கு"],
          ans: "விடை: <b>இ) 18 மடங்கு</b><br>விளக்கம்: V' = (1/3)π(3r)²(2h) = (1/3)π(9r²)(2h) = 18 × [(1/3)πr²h] = 18V."
        },
        {
          id: "m_tm_7_1_3",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examTag: "முக்கிய வினா",
          isImportant: true,
          q: "உயரம் 20 செ.மீ மற்றும் அடிப்புற ஆரம் 14 செ.மீ கொண்ட உருளையின் வளைபரப்பு மற்றும் மொத்தப் புறப்பரப்பைக் காண்க.",
          ans: `<div style="line-height:1.8;">
            <b>கொடுக்கப்பட்டது:</b> ஆரம் r = 14 செ.மீ, உயரம் h = 20 செ.மீ.<br>
            1. <b>வளைபரப்பு (CSA):</b><br>
            = 2πrh = 2 × (22/7) × 14 × 20 = 2 × 22 × 2 × 20 = <b>1760 செ.மீ²</b>.<br>
            2. <b>மொத்தப் புறப்பரப்பு (TSA):</b><br>
            = 2πr(h + r) = 2 × (22/7) × 14 × (20 + 14) = 88 × 34 = <b>2992 செ.மீ²</b>.
          </div>`
        },
        {
          id: "m_tm_7_1_4",
          type: "2m",
          mark: "2 மதிப்பெண்",
          q: "ஆரம் 7 செ.மீ உடைய ஒரு திண்ம அரைக்கோளத்தின் மொத்தப் புறப்பரப்பைக் காண்க.",
          ans: `<div style="line-height:1.8;">
            <b>கொடுக்கப்பட்டது:</b> r = 7 செ.மீ.<br>
            அரைக்கோளத்தின் மொத்தப் புறப்பரப்பு = 3πr²<br>
            = 3 × (22/7) × 7 × 7 = 3 × 22 × 7 = <b>462 செ.மீ²</b>.
          </div>`
        },
        {
          id: "m_tm_7_1_5",
          type: "5m",
          mark: "5 மதிப்பெண்",
          examTag: "பொதுத்தேர்வு வினா",
          isImportant: true,
          q: "ஒரு திண்ம பொம்மையானது அரைக்கோளத்தின் மேல் கூம்பு இணைந்த வடிவில் உள்ளது. கூம்பின் உயரம் 4 செ.மீ மற்றும் விட்டம் 6 செ.மீ எனில், பொம்மையின் கனஅளவைக் காண்க. (π = 3.14 என்க)",
          diagramCaption: "திண்மப் பொம்மையின் வடிவம்: அடிப்புற அரைக்கோளம் (r = 3 செ.மீ) மற்றும் மேற்புறக் கூம்பு (h = 4 செ.மீ, r = 3 செ.மீ)",
          diagramSvg: `<div style="max-width:320px; margin:12px auto; background:#ffffff; border:1.5px solid #cbd5e1; border-radius:12px; padding:12px; box-shadow:0 2px 8px rgba(0,0,0,0.06); text-align:center;">
            <div style="font-size:12px; font-weight:700; color:#1e3a8a; margin-bottom:8px;">🎯 திண்மப் பொம்மையின் வரைபடம் (Solid Toy Illustration)</div>
            <svg viewBox="0 0 320 370" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; display:block; aspect-ratio:320/370;">
              <defs>
                <linearGradient id="coneGrad7_1_tm" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#fef3c7"/>
                  <stop offset="50%" stop-color="#fde68a"/>
                  <stop offset="100%" stop-color="#fef3c7"/>
                </linearGradient>
                <linearGradient id="hemiGrad7_1_tm" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#ffedd5"/>
                  <stop offset="100%" stop-color="#fed7aa"/>
                </linearGradient>
              </defs>

              <!-- Cone Body -->
              <polygon points="160,45 80,185 240,185" fill="url(#coneGrad7_1_tm)" stroke="#d97706" stroke-width="2.2" stroke-linejoin="round"/>

              <!-- Hemisphere Body -->
              <path d="M 80,185 A 80,80 0 0,0 240,185" fill="url(#hemiGrad7_1_tm)" stroke="#ea580c" stroke-width="2.5"/>

              <!-- Common Circular Interface Ellipse -->
              <ellipse cx="160" cy="185" rx="80" ry="24" fill="#fde68a" fill-opacity="0.5" stroke="#d97706" stroke-width="1.8" stroke-dasharray="5,4"/>

              <!-- Cone Vertical Height Line (h = 4 cm) -->
              <line x1="160" y1="45" x2="160" y2="185" stroke="#475569" stroke-width="2" stroke-dasharray="4,4"/>
              <rect x="160" y="173" width="12" height="12" fill="none" stroke="#475569" stroke-width="1.5"/>

              <!-- Radius Line on Interface (r = 3 cm) -->
              <line x1="160" y1="185" x2="240" y2="185" stroke="#dc2626" stroke-width="2.5"/>
              <circle cx="160" cy="185" r="3.5" fill="#1e293b"/>
              <circle cx="240" cy="185" r="3" fill="#dc2626"/>

              <!-- Height Dimension Line on Left (h = 4 cm) -->
              <line x1="55" y1="45" x2="55" y2="185" stroke="#2563eb" stroke-width="1.5"/>
              <line x1="48" y1="45" x2="62" y2="45" stroke="#2563eb" stroke-width="1.5"/>
              <line x1="48" y1="185" x2="62" y2="185" stroke="#2563eb" stroke-width="1.5"/>
              <text x="45" y="120" font-size="12" fill="#2563eb" font-weight="bold" text-anchor="end">h = 4 cm</text>

              <!-- Diameter Dimension Line Below (d = 6 cm) -->
              <line x1="80" y1="285" x2="240" y2="285" stroke="#475569" stroke-width="1.5"/>
              <line x1="80" y1="278" x2="80" y2="292" stroke="#475569" stroke-width="1.5"/>
              <line x1="240" y1="278" x2="240" y2="292" stroke="#475569" stroke-width="1.5"/>
              <text x="160" y="303" font-size="12" fill="#475569" font-weight="bold" text-anchor="middle">விட்டம் d = 6 cm (ஆரம் r = 3 cm)</text>

              <!-- Labels & Annotations -->
              <circle cx="160" cy="45" r="3" fill="#d97706"/>
              <text x="160" y="32" font-size="12" fill="#b45309" font-weight="bold" text-anchor="middle">கூம்பு உச்சி (Apex)</text>

              <!-- Cone Name Badge -->
              <rect x="180" y="95" width="125" height="24" rx="4" fill="#ffffff" stroke="#d97706" stroke-width="1"/>
              <text x="242" y="111" font-size="11" fill="#b45309" font-weight="bold" text-anchor="middle">கூம்பு: V₂ = ⅓πr²h</text>

              <!-- Radius Label -->
              <text x="200" y="177" font-size="12" fill="#dc2626" font-weight="bold" text-anchor="middle">r = 3 cm</text>

              <!-- Hemisphere Name Badge -->
              <rect x="95" y="225" width="130" height="24" rx="4" fill="#ffffff" stroke="#ea580c" stroke-width="1"/>
              <text x="160" y="241" font-size="11" fill="#c2410c" font-weight="bold" text-anchor="middle">அரைக்கோளம்: V₁ = ⅔πr³</text>

              <!-- Bottom Result Callout -->
              <rect x="40" y="325" width="240" height="32" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
              <text x="160" y="346" font-size="12" fill="#1d4ed8" font-weight="bold" text-anchor="middle">மொத்தக் கனஅளவு V = 94.2 cm³</text>
            </svg>
          </div>`,
          ans: `<div style="line-height:1.9;">
            <div style="background:#eff6ff; border-left:4px solid #2563eb; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>படி 1: கொடுக்கப்பட்ட விவரங்கள் (Given Data):</b><br>
              • கூம்பின் உயரம் h = 4 செ.மீ<br>
              • அடிப்புற விட்டம் d = 6 செ.மீ<br>
              • பொது ஆரம் r = 6 / 2 = <b>3 செ.மீ</b><br>
              • π = <b>3.14</b> (வினாவில் கொடுக்கப்பட்ட நிபந்தனை)
            </div>

            <div style="background:#f8fafc; border-left:4px solid #0284c7; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>படி 2: தேவையான சூத்திரங்கள் (Formulas):</b><br>
              • பொம்மையின் மொத்தக் கனஅளவு V = அரைக்கோளத்தின் கனஅளவு (V₁) + கூம்பின் கனஅளவு (V₂)<br>
              • அரைக்கோளத்தின் கனஅளவு V₁ = <b>(2/3)πr³</b><br>
              • கூம்பின் கனஅளவு V₂ = <b>(1/3)πr²h</b>
            </div>

            <div style="background:#fff7ed; border-left:4px solid #ea580c; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>படி 3: அரைக்கோளத்தின் கனஅளவு (V₁):</b><br>
              V₁ = (2/3) × 3.14 × (3)³<br>
              = (2/3) × 3.14 × 27<br>
              = 2 × 3.14 × 9 = 18 × 3.14 = <b>56.52 செ.மீ³</b>
            </div>

            <div style="background:#fefce8; border-left:4px solid #eab308; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>படி 4: கூம்பின் கனஅளவு (V₂):</b><br>
              V₂ = (1/3) × 3.14 × (3)² × 4<br>
              = (1/3) × 3.14 × 9 × 4<br>
              = 3.14 × 3 × 4 = 3.14 × 12 = <b>37.68 செ.மீ³</b>
            </div>

            <div style="background:#f0fdf4; border-left:4px solid #16a34a; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>படி 5: பொம்மையின் மொத்தக் கனஅளவு (V):</b><br>
              V = V₁ + V₂<br>
              = 56.52 + 37.68 = <b>94.2 செ.மீ³</b><br><br>
              <div style="background:#ffffff; border:1px dashed #16a34a; padding:8px 12px; border-radius:6px;">
                <b>மாற்று முறை (காரணி முறை):</b><br>
                V = (1/3)πr²(h + 2r)<br>
                = (1/3) × 3.14 × 3² × [4 + 2(3)]<br>
                = (1/3) × 3.14 × 9 × [4 + 6]<br>
                = 3.14 × 3 × 10 = <b>94.2 செ.மீ³</b>
              </div>
            </div>

            <div style="margin-top:14px; padding:12px; background:#eff6ff; border:2px solid #2563eb; border-radius:8px; text-align:center;">
              <span style="font-size:16px; font-weight:800; color:#1e40af;">இறுதி விடை: பொம்மையின் மொத்தக் கனஅளவு = 94.2 செ.மீ³</span>
            </div>

            <div style="margin-top:12px; font-size:13px; color:#475569; background:#f8fafc; padding:10px; border-radius:6px; border:1px solid #e2e8f0;">
              <b>💡 அரசு பொதுத்தேர்வு குறிப்பு (Exam Tips):</b><br>
              1. விட்டம் 6 செ.மீ எனில் ஆரம் r = 3 செ.மீ என மாற்றிய பின்னரே கணக்கிட வேண்டும்.<br>
              2. வினாவில் π = 3.14 எனக் கொடுக்கப்பட்டுள்ளதால் 22/7-ஐப் பயன்படுத்தக் கூடாது.<br>
              3. V₁ மற்றும் V₂ ஆகிய இரண்டையும் தனித்தனியாகக் கணக்கிட்டுக் கூட்டினால் அரசுத் தேர்வு மதிப்பீட்டில் படிநிலைகளுக்கான மதிப்பெண் (Step Marks) முழுமையாகக் கிடைக்கும்.
            </div>
          </div>`,
          commonMistakes: [
            {
              type: "விட்டம் vs ஆரம் கவனக்குறைவு (d = 6 செ.மீ ➔ r = 3 செ.மீ)",
              icon: "⚠️",
              deduction: "-1 Mark",
              mistake: "கணக்கில் விட்டம் = 6 செ.மீ எனக் கொடுக்கப்பட்டுள்ளது. அவசரத்தில் விட்டத்தையே ஆரமாகக் கொண்டு r = 6 செ.மீ எனப் பிரதியிட்டு தவறான விடையைப் பெறுதல்.",
              mistakeTa: "விட்டம் கொடுக்கப்பட்டால் கட்டாயம் 2-ஆல் வகுத்து ஆரம் r = 6/2 = 3 செ.மீ என மாற்றிய பின்னரே சூத்திரத்தில் பயன்படுத்த வேண்டும்.",
              correction: "முதலில் 'ஆரம் r = விட்டம் / 2 = 6 / 2 = 3 செ.மீ' எனத் தெளிவாக எழுதி கட்டமிட்டு பின்னர் கணக்கிடவும்."
            },
            {
              type: "π-ன் மதிப்பில் பிழை (3.14-க்கு பதிலாக 22/7 பயன்படுத்துதல்)",
              icon: "🔢",
              deduction: "-½ Mark",
              mistake: "வினாவில் 'π = 3.14 என்க' என்று தெளிவாகக் குறிப்பிடப்பட்டுள்ளது. அதை கவனிக்காமல் π = 22/7 எனப் பிரதியிட்டு தசமப் புள்ளி பிழைகளுடன் (94.28 என) விடை எழுதுதல்.",
              mistakeTa: "வினாவில் π-ன் மதிப்பு குறிப்பிடப்பட்டிருந்தால் அதே மதிப்பை மட்டுமே பயன்படுத்த வேண்டும். இல்லையேல் அரசுத் தேர்வில் -½ மதிப்பெண் குறைக்கப்படும்.",
              correction: "வினாவின் நிபந்தனைப்படி π = 3.14 என்றே பிரதியிட்டு, துல்லியமான விடை 94.2 செ.மீ³ என்பதைப் பெறவும்."
            },
            {
              type: "கனஅளவு அலகு விடுபாடு (செ.மீ² vs செ.மீ³)",
              icon: "📏",
              deduction: "-½ Mark",
              mistake: "இறுதி விடைக்கு கனஅளவின் சரியான அலகான 'கன செ.மீ' அல்லது 'செ.மீ³' என எழுதாமல், பரப்பளவின் அலகான 'செ.மீ²' என எழுதுதல் அல்லது அலகு எழுதாமல் வெறும் 94.2 என மட்டும் விடுதல்.",
              mistakeTa: "அரசு விடைக்குறிப்பில் இறுதி விடையின் அலகிற்கு ½ மதிப்பெண் உண்டு. அலகு தவறினால் மதிப்பெண் குறையும்.",
              correction: "இறுதி விடையை 'பொம்மையின் கனஅளவு = 94.2 செ.மீ³ (அல்லது கன செ.மீ)' என அலகோடு எழுதி கட்டமிடவும்."
            }
          ]
        }
      ]
    },
    {
      id: "sec_m_tm_7_2",
      title: "பகுதி 2: கனஅளவு மற்றும் இணைந்த திண்மங்கள்",
      author: "அத்தியாயம் 7: அளவியல்",
      questions: [
        {
          id: "m_tm_7_2_1",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "இரு கோளங்களின் கனஅளவுகளின் விகிதம் 8 : 27 எனில் அவற்றின் புறப்பரப்புகளின் விகிதம்:",
          options: ["அ) 2 : 3", "ஆ) 4 : 9", "இ) 8 : 27", "ஈ) 16 : 81"],
          ans: "விடை: <b>ஆ) 4 : 9</b> (r₁/r₂ = 2/3 ➔ பரப்புகளின் விகிதம் r₁²/r₂² = 4/9)."
        },
        {
          id: "m_tm_7_2_2",
          type: "2m",
          mark: "2 மதிப்பெண்",
          isImportant: true,
          q: "அடிப்புற ஆரம் 7 செ.மீ மற்றும் உயரம் 24 செ.மீ கொண்ட நேர்வட்டக் கூம்பின் கனஅளவைக் காண்க.",
          ans: `<div style="line-height:1.8;">
            ஆரம் r = 7 செ.மீ, உயரம் h = 24 செ.மீ.<br>
            கூம்பின் கனஅளவு V = (1/3)πr²h<br>
            = (1/3) × (22/7) × 7 × 7 × 24<br>
            = 22 × 7 × 8 = <b>1232 செ.மீ³</b>.
          </div>`
        },
        {
          id: "m_tm_7_2_3",
          type: "5m",
          mark: "5 மதிப்பெண்",
          examTag: "அரசு மாதிரி 5M",
          isImportant: true,
          q: "ஒரு கூடாரமானது உருளையின் மீது கூம்பு அமைந்த வடிவில் உள்ளது. உருளையின் விட்டம் 4 மீ, உயரம் 2.1 மீ மற்றும் கூம்பின் சாய்வுயரம் 2.8 மீ எனில், கூடாரம் அமைக்கத் தேவையான தார்ப்பாயின் பரப்பளவைக் காண்க.",
          diagramCaption: "கூடாரத்தின் வடிவம்: உருளை வடிவ அடிப்பகுதி (h = 2.1 மீ, r = 2 மீ) மற்றும் கூம்பு வடிவ மேற்பகுதி (l = 2.8 மீ). தரைப்பகுதி திறந்த நிலை.",
          diagramSvg: `<div style="max-width:320px; margin:12px auto; background:#ffffff; border:1.5px solid #cbd5e1; border-radius:12px; padding:12px; box-shadow:0 2px 8px rgba(0,0,0,0.06); text-align:center;">
            <div style="font-size:12px; font-weight:700; color:#1e3a8a; margin-bottom:8px;">🎪 கூடாரத்தின் வடிவமைப்பு வரைபடம் (Tent Illustration)</div>
            <svg viewBox="0 0 320 390" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; display:block; aspect-ratio:320/390;">
              <defs>
                <linearGradient id="tentRoofGrad7_2_tm" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#e0f2fe"/>
                  <stop offset="50%" stop-color="#bae6fd"/>
                  <stop offset="100%" stop-color="#e0f2fe"/>
                </linearGradient>
                <linearGradient id="tentWallGrad7_2_tm" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#f0fdf4"/>
                  <stop offset="50%" stop-color="#dcfce7"/>
                  <stop offset="100%" stop-color="#f0fdf4"/>
                </linearGradient>
              </defs>

              <!-- Conical Top (Roof) -->
              <polygon points="160,40 70,140 250,140" fill="url(#tentRoofGrad7_2_tm)" stroke="#0284c7" stroke-width="2.2" stroke-linejoin="round"/>

              <!-- Interface Ellipse (Between Cone & Cylinder) -->
              <ellipse cx="160" cy="140" rx="90" ry="20" fill="#bae6fd" fill-opacity="0.4" stroke="#0284c7" stroke-width="1.8" stroke-dasharray="5,4"/>

              <!-- Cylindrical Base Body (Walls) -->
              <rect x="70" y="140" width="180" height="120" fill="url(#tentWallGrad7_2_tm)" stroke="none"/>
              <line x1="70" y1="140" x2="70" y2="260" stroke="#16a34a" stroke-width="2.2"/>
              <line x1="250" y1="140" x2="250" y2="260" stroke="#16a34a" stroke-width="2.2"/>

              <!-- Bottom Base Ellipse (Ground Level) -->
              <ellipse cx="160" cy="260" rx="90" ry="20" fill="#f1f5f9" fill-opacity="0.6" stroke="#16a34a" stroke-width="2"/>
              <ellipse cx="160" cy="260" rx="90" ry="20" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4"/>

              <!-- Slant Height Dimension Line (l = 2.8 m) on Cone -->
              <line x1="210" y1="80" x2="258" y2="133" stroke="#e11d48" stroke-width="2"/>
              <text x="245" y="95" font-size="12" fill="#e11d48" font-weight="bold">l = 2.8 m</text>

              <!-- Cylinder Height Dimension Line (h = 2.1 m) on Left -->
              <line x1="45" y1="140" x2="45" y2="260" stroke="#16a34a" stroke-width="1.5"/>
              <line x1="38" y1="140" x2="52" y2="140" stroke="#16a34a" stroke-width="1.5"/>
              <line x1="38" y1="260" x2="52" y2="260" stroke="#16a34a" stroke-width="1.5"/>
              <text x="40" y="205" font-size="12" fill="#15803d" font-weight="bold" text-anchor="end">h = 2.1 m</text>

              <!-- Base Diameter Line (d = 4 m ➔ r = 2 m) -->
              <line x1="70" y1="260" x2="250" y2="260" stroke="#dc2626" stroke-width="2"/>
              <circle cx="70" cy="260" r="3" fill="#1e293b"/>
              <circle cx="250" cy="260" r="3" fill="#1e293b"/>
              <circle cx="160" cy="260" r="3.5" fill="#dc2626"/>
              <text x="60" y="264" font-size="11" fill="#334155" font-weight="bold">A</text>
              <text x="256" y="264" font-size="11" fill="#334155" font-weight="bold">B</text>
              <text x="160" y="254" font-size="11" fill="#dc2626" font-weight="bold" text-anchor="middle">r = 2 m</text>

              <!-- Apex Label -->
              <circle cx="160" cy="40" r="3" fill="#0284c7"/>
              <text x="160" y="28" font-size="12" fill="#0369a1" font-weight="bold" text-anchor="middle">உச்சி P (Apex)</text>

              <!-- Conical Top Formula Callout -->
              <text x="160" y="115" font-size="11" fill="#0284c7" font-weight="bold" text-anchor="middle">கூம்பு வளைபரப்பு = πrl = 17.6 m²</text>

              <!-- Cylinder Formula Callout -->
              <text x="160" y="195" font-size="11" fill="#15803d" font-weight="bold" text-anchor="middle">உருளை வளைபரப்பு = 2πrh = 26.4 m²</text>

              <!-- Diameter Dimension Label Below Base -->
              <text x="160" y="295" font-size="11.5" fill="#475569" font-weight="bold" text-anchor="middle">விட்டம் = 4 மீ (ஆரம் r = 2 மீ)</text>

              <!-- Warning / Note Badge: Open Floor -->
              <rect x="25" y="310" width="270" height="26" rx="5" fill="#fff7ed" stroke="#f97316" stroke-width="1"/>
              <text x="160" y="327" font-size="11" fill="#c2410c" font-weight="bold" text-anchor="middle">⚠️ தரைப்பகுதி திறந்த நிலை (அடித்தள பரப்பு இல்லை)</text>

              <!-- Total Area Callout Box -->
              <rect x="40" y="345" width="240" height="32" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
              <text x="160" y="366" font-size="12.5" fill="#15803d" font-weight="bold" text-anchor="middle">தார்ப்பாயின் மொத்தப் பரப்பு = 44 m²</text>
            </svg>
          </div>`,
          ans: `<div style="line-height:1.9;">
            <div style="background:#eff6ff; border-left:4px solid #2563eb; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>படி 1: கொடுக்கப்பட்ட விவரங்கள் (Given Data):</b><br>
              • உருளையின் விட்டம் d = 4 மீ ➔ ஆரம் r = 4 / 2 = <b>2 மீ</b><br>
              • உருளையின் உயரம் h = <b>2.1 மீ</b><br>
              • கூம்பின் சாய்வுயரம் l = <b>2.8 மீ</b><br>
              • π = <b>22/7</b><br>
              <span style="color:#b91c1c; font-weight:700;">⚠️ குறிப்பு: கூடாரத்தின் அடிப்பகுதி தரை என்பதால் அதற்கு தார்ப்பாய் தேவையில்லை. எனவே உருளை மற்றும் கூம்பின் வளைபரப்பை மட்டுமே கணக்கிட வேண்டும்.</span>
            </div>

            <div style="background:#f8fafc; border-left:4px solid #0284c7; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>படி 2: தேவையான சூத்திரங்கள் (Formulas):</b><br>
              • தார்ப்பாயின் மொத்தப் பரப்பு = உருளையின் வளைபரப்பு + கூம்பின் வளைபரப்பு<br>
              • உருளையின் வளைபரப்பு (CSA₁) = <b>2πrh</b><br>
              • கூம்பின் வளைபரப்பு (CSA₂) = <b>πrl</b>
            </div>

            <div style="background:#f0fdf4; border-left:4px solid #16a34a; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>படி 3: உருளையின் வளைபரப்பு (CSA₁):</b><br>
              CSA₁ = 2πrh<br>
              = 2 × (22/7) × 2 × 2.1<br>
              = (88 × 2.1) / 7 = 88 × 0.3 = <b>26.4 மீ²</b>
            </div>

            <div style="background:#e0f2fe; border-left:4px solid #0284c7; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>படி 4: கூம்பின் வளைபரப்பு (CSA₂):</b><br>
              CSA₂ = πrl<br>
              = (22/7) × 2 × 2.8<br>
              = (44 × 2.8) / 7 = 44 × 0.4 = <b>17.6 மீ²</b>
            </div>

            <div style="background:#fefce8; border-left:4px solid #ca8a04; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>படி 5: தார்ப்பாயின் மொத்தப் பரப்பளவு:</b><br>
              மொத்தப் பரப்பு A = CSA₁ + CSA₂<br>
              = 26.4 + 17.6 = <b>44 மீ²</b><br><br>
              <div style="background:#ffffff; border:1px dashed #ca8a04; padding:8px 12px; border-radius:6px;">
                <b>மாற்று முறை (காரணி முறை):</b><br>
                A = πr(2h + l)<br>
                = (22/7) × 2 × [2(2.1) + 2.8]<br>
                = (44/7) × [4.2 + 2.8]<br>
                = (44/7) × 7.0 = <b>44 மீ²</b>
              </div>
            </div>

            <div style="margin-top:14px; padding:12px; background:#eff6ff; border:2px solid #2563eb; border-radius:8px; text-align:center;">
              <span style="font-size:16px; font-weight:800; color:#1e40af;">இறுதி விடை: கூடாரம் அமைக்கத் தேவையான தார்ப்பாயின் பரப்பு = 44 மீ²</span>
            </div>

            <div style="margin-top:12px; font-size:13px; color:#475569; background:#f8fafc; padding:10px; border-radius:6px; border:1px solid #e2e8f0;">
              <b>💡 அரசு பொதுத்தேர்வு குறிப்பு (Exam Tips):</b><br>
              1. தரைப்பகுதிக்கு தார்ப்பாய் பயன்படுத்தப்படாது; எனவே πr²-ஐக் கூட்டக் கூடாது.<br>
              2. கூம்பின் சாய்வுயரம் l = 2.8 மீ நேரடியாக வினாவிலேயே தரப்பட்டுள்ளது. மீண்டும் l = √(h² + r²) எனக் கணக்கிடத் தேவையில்லை.<br>
              3. அலகைக் கட்டாயம் மீ² (சதுர மீட்டர்) என எழுதவும்.
            </div>
          </div>`,
          commonMistakes: [
            {
              type: "அடித்தளப் பரப்பைக் கூட்டுதல் (கூடாரத்தின் தரைக்கு தார்ப்பாய் தேவை இல்லை)",
              icon: "⚠️",
              deduction: "-1 Mark",
              mistake: "கூடாரத்தின் அடிப்பகுதி தரை என்பதால் அதற்கு தார்ப்பாய் தேவையில்லை. ஆனால் சில மாணவர்கள் மொத்தப் புறப்பரப்பு (TSA) என நினைத்து அடிப்பரப்பான πr²-ஐயும் சேர்த்து கணக்கிடுதல்.",
              mistakeTa: "கூடாரத்தின் தரைக்கு தார்ப்பாய் பயன்படாது என்பதை நினைவில் கொள்ளவும். உருளையின் வளைபரப்பு + கூம்பின் வளைபரப்பு மட்டுமே கணக்கிட வேண்டும்.",
              correction: "தார்ப்பாயின் மொத்தப் பரப்பு = உருளையின் வளைபரப்பு + கூம்பின் வளைபரப்பு = 2πrh + πrl என மட்டுமே எழுதவும்."
            },
            {
              type: "விட்டம் vs ஆரம் (d = 4 மீ ➔ r = 2 மீ)",
              icon: "📐",
              deduction: "-1 Mark",
              mistake: "உருளையின் விட்டம் 4 மீ எனக் கொடுக்கப்பட்டுள்ளது. 2-ஆல் வகுக்காமல் r = 4 மீ எனத் தவறாகப் பிரதியிட்டு கணக்கீடுகளைச் செய்தல்.",
              mistakeTa: "விட்டம் 4 மீ என்பதால் ஆரம் r = 4/2 = 2 மீ ஆகும். இதைத் தொடக்கத்திலேயே குறித்துக் கொள்ளவும்.",
              correction: "ஆரம் r = 4 / 2 = 2 மீ என்பதைத் தெளிவாக எழுதி பிரதியிடவும்."
            },
            {
              type: "தேவையற்ற சாய்வுயரக் கணக்கீடு (l ஏற்கனவே கொடுக்கப்பட்டுள்ளது)",
              icon: "⏱️",
              deduction: "-½ Mark",
              mistake: "வினாவில் கூம்பின் சாய்வுயரம் l = 2.8 மீ என நேரடியாகக் கொடுக்கப்பட்டுள்ளது. அதை கவனிக்காமல் l = √(h² + r²) என உருளையின் உயரமான 2.1-ஐப் பயன்படுத்தி நேரத்தை வீணடித்தலும் தவறிழைத்தலும்.",
              mistakeTa: "சாய்வுயரம் (slant height) வினாவிலேயே கொடுக்கப்பட்டிருப்பதால் தனியாகக் கண்டுபிடிக்கத் தேவையில்லை.",
              correction: "கூம்பின் சாய்வுயரம் l = 2.8 மீ என நேரடியாக எடுத்துக்கொண்டு πrl சூத்திரத்தில் பிரதியிடவும்."
            }
          ]
        }
      ]
    },
    {
      id: "sec_m_tm_7_3",
      title: "பகுதி 3: திண்மங்களின் உருமாற்றம் (உருக்கி மாற்றுதல்)",
      author: "அத்தியாயம் 7: அளவியல்",
      questions: [
        {
          id: "m_tm_7_3_1",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "R ஆரமுள்ள ஒரு உலோகக் கோளத்தை உருக்கி அதே R ஆரமுள்ள உருளையாக மாற்றினால், உருளையின் உயரம்:",
          options: ["அ) (2/3)R", "ஆ) (4/3)R", "இ) 2R", "ஈ) 4R"],
          ans: "விடை: <b>ஆ) (4/3)R</b> (πR²h = (4/3)πR³ ➔ h = (4/3)R)."
        },
        {
          id: "m_tm_7_3_2",
          videoUrl: "https://youtu.be/vVKlLCox73o",
          type: "5m",
          mark: "5 மதிப்பெண்",
          examTag: "அரசுத் தேர்வு வினா (எடுத்துக்காட்டு 7.29)",
          isImportant: true,
          q: "16 செ.மீ ஆரமுள்ள ஒரு திண்ம உலோகக் கோளமானது உருக்கப்பட்டு, 2 செ.மீ ஆரமுள்ள சிறு திண்மக் கோளங்களாக மாற்றப்பட்டால் எத்தனை சிறிய கோளங்கள் கிடைக்கும்?",
                    blackboard: {
            title: "திண்ம உலோகக் கோளத்தை உருக்கி சிறிய கோளங்களாக மாற்றுதல்",
            engTitle: "Melting and Recasting Solid Sphere (R = 16 cm into r = 2 cm)",
            steps: [
              {
                stepNum: 1,
                badge: "① படி 1 — கொடுக்கப்பட்ட அளவுகள்",
                badgeEn: "① Step 1 — Given Dimensions",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800; font-size:16px;">படி 1 — கோளங்களின் அளவுகள்</div>
                  <div class="bb-box-cyan" style="background:#0f172a; border:2px solid #38bdf8; border-radius:10px; padding:12px; margin-top:8px;">
                    <div class="bb-line" style="color:#e2e8f0; font-size:14.5px; line-height:1.7;">
                      • பெரிய உலோகக் கோளத்தின் ஆரம்: <b>R = 16 செ.மீ</b><br>
                      • சிறிய திண்மக் கோளத்தின் ஆரம்: <b>r = 2 செ.மீ</b><br>
                      • கிடைக்கும் சிறிய கோளங்களின் எண்ணிக்கை <b>n</b> என்க.
                    </div>
                  </div>
                `,
                audioScriptEn: "Step 1. Given dimensions. Radius of big metallic sphere R equals 16 cm. Radius of each small sphere r equals 2 cm. Let n be the number of small spheres.",
                audioScriptTa: "படி 1. கொடுக்கப்பட்ட அளவுகள்: பெரிய உலோகக் கோளத்தின் ஆரம் R = 16 செ.மீ. சிறிய கோளத்தின் ஆரம் r = 2 செ.மீ. சிறிய கோளங்களின் எண்ணிக்கை n என்க."
              },
              {
                stepNum: 2,
                badge: "② படி 2 — கனஅளவு மாறாக் கொள்கை",
                badgeEn: "② Step 2 — Conservation of Volume",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800; font-size:16px;">படி 2 — கனஅளவு மாறாக் கொள்கை</div>
                  <div class="bb-box-cyan" style="background:#0f172a; border:2px solid #38bdf8; border-radius:10px; padding:12px; margin-top:8px;">
                    <div class="bb-line" style="color:#e2e8f0; font-size:14.5px; line-height:1.7;">
                      உலோகக் கோளம் உருக்கப்பட்டு மறுவடிவாக்கம் செய்யப்படும்போது மொத்தக் கனஅளவு மாறாது:<br>
                      <div style="background:#1e293b; border:1.5px solid #fde047; border-radius:8px; padding:10px; text-align:center; color:#fde047; font-size:15px; font-weight:800; margin:10px 0;">
                        n சிறிய கோளங்களின் மொத்தக் கனஅளவு = பெரிய கோளத்தின் கனஅளவு
                      </div>
                      <span style="font-size:15px; color:#38bdf8; font-weight:700;">n × (ஒரு சிறிய கோளத்தின் கனஅளவு) = பெரிய கோளத்தின் கனஅளவு</span>
                    </div>
                  </div>
                `,
                audioScriptEn: "Step 2. Law of conservation of volume. Total volume of n small spheres equals volume of the large sphere.",
                audioScriptTa: "படி 2. கனஅளவு மாறாக் கொள்கை: n சிறிய கோளங்களின் மொத்தக் கனஅளவு = பெரிய கோளத்தின் கனஅளவு."
              },
              {
                stepNum: 3,
                badge: "③ படி 3 — சூத்திரச் சுருக்குதல்",
                badgeEn: "③ Step 3 — Formula & π Cancellation",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800; font-size:16px;">படி 3 — சூத்திரம் &amp; (4/3)π நீக்குதல்</div>
                  <div class="bb-box-cyan" style="background:#0f172a; border:2px solid #38bdf8; border-radius:10px; padding:12px; margin-top:8px;">
                    <div class="bb-line" style="color:#e2e8f0; font-size:14.5px; line-height:1.8;">
                      கோளத்தின் கனஅளவு = <b>(4/3) π r³</b><br><br>
                      n = [ (4/3) π R³ ] / [ (4/3) π r³ ]<br><br>
                      <span style="color:#4ade80; font-weight:700;">தொகுதி மற்றும் பகுதியில் உள்ள (4/3)π நேரடியாக நீங்குகிறது:</span><br>
                      <div style="background:#1e293b; border:1.5px solid #38bdf8; border-radius:8px; padding:8px; text-align:center; margin-top:6px; color:#38bdf8; font-size:16px; font-weight:800;">
                        n = R³ / r³ = (R / r)³
                      </div>
                    </div>
                  </div>
                `,
                audioScriptEn: "Step 3. Formula derivation. (4/3)pi cancels completely, giving n equals (R divided by r) whole cubed.",
                audioScriptTa: "படி 3. சூத்திரச் சுருக்குதல்: நான்கு கீழ் மூன்று பை நேரடியாக நீங்குகிறது. எனவே n = (R கீழ் r) ஹோல் க்யூப்."
              },
              {
                stepNum: 4,
                badge: "④ படி 4 — பிரதியிடல் & இறுதி விடை",
                badgeEn: "④ Step 4 — Substitution & Final Answer",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800; font-size:16px;">படி 4 — பிரதியிடல் &amp; கணக்கீடு</div>
                  <div class="bb-box-cyan" style="background:#0f172a; border:2px solid #4ade80; border-radius:10px; padding:12px; margin-top:8px;">
                    <div class="bb-line" style="color:#e2e8f0; font-size:15px; line-height:1.8;">
                      n = (16 / 2)³<br>
                      n = 8³<br>
                      n = 8 × 8 × 8 = 64 × 8 = <b>512</b><br><br>
                      <div style="background:#14532d; border:2.5px solid #22c55e; border-radius:10px; padding:12px; text-align:center;">
                        <span style="color:#ffffff; font-size:13px; font-weight:700; display:block; margin-bottom:4px;">இறுதி விடை:</span>
                        <span style="color:#fde047; font-size:20px; font-weight:900;">
                          கிடைக்கும் சிறிய கோளங்களின் எண்ணிக்கை = 512
                        </span>
                      </div>
                    </div>
                  </div>
                `,
                audioScriptEn: "Step 4. Substitution and answer. n equals 8 cubed, which is 512. Therefore, 512 small spheres can be obtained.",
                audioScriptTa: "படி 4. பிரதியிடல் மற்றும் விடை: n = 8 க்யூப் = 512. எனவே உருவாக்கப்படும் சிறிய கோளங்களின் எண்ணிக்கை 512 ஆகும்."
              }
            ]
          },
diagramCaption: "திண்ம உலோகக் கோளத்தின் உருமாற்றம்: பெரிய கோளம் (R = 16 செ.மீ) உருக்கப்பட்டு 512 சிறிய கோளங்களாக (r = 2 செ.மீ) மாற்றப்படுகிறது.",
          diagramSvg: `<div style="max-width:340px; margin:12px auto; background:#ffffff; border:1.5px solid #cbd5e1; border-radius:12px; padding:12px; box-shadow:0 2px 8px rgba(0,0,0,0.06); text-align:center;">
            <div style="font-size:12px; font-weight:700; color:#1e3a8a; margin-bottom:8px;">🔥 திண்மக் கோள உருமாற்றம் (Melting &amp; Recasting)</div>
            <svg viewBox="0 0 340 260" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; display:block; aspect-ratio:340/260;">
              <defs>
                <radialGradient id="sphereBigTm" cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stop-color="#93c5fd"/>
                  <stop offset="40%" stop-color="#3b82f6"/>
                  <stop offset="100%" stop-color="#1e3a8a"/>
                </radialGradient>
                <radialGradient id="sphereSmallTm" cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stop-color="#fdba74"/>
                  <stop offset="40%" stop-color="#f97316"/>
                  <stop offset="100%" stop-color="#9a3412"/>
                </radialGradient>
                <linearGradient id="arrowGradTm" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#ef4444"/>
                  <stop offset="100%" stop-color="#f97316"/>
                </linearGradient>
              </defs>

              <!-- Big Metallic Sphere -->
              <circle cx="75" cy="100" r="55" fill="url(#sphereBigTm)" stroke="#1e40af" stroke-width="2"/>
              <line x1="75" y1="100" x2="130" y2="100" stroke="#ffffff" stroke-width="2" stroke-dasharray="3,3"/>
              <circle cx="75" cy="100" r="3" fill="#ffffff"/>
              <circle cx="130" cy="100" r="2.5" fill="#ffffff"/>
              <text x="102" y="93" font-size="11" fill="#ffffff" font-weight="bold" text-anchor="middle">R = 16 cm</text>
              <text x="75" y="172" font-size="12" fill="#1e3a8a" font-weight="bold" text-anchor="middle">பெரிய கோளம்</text>
              <text x="75" y="188" font-size="10.5" fill="#475569" text-anchor="middle">V₁ = ⁴⁄₃ π R³</text>

              <!-- Transformation Melting Arrow -->
              <g transform="translate(138, 75)">
                <path d="M 0,20 L 30,20 L 30,10 L 52,28 L 30,46 L 30,36 L 0,36 Z" fill="url(#arrowGradTm)"/>
                <text x="26" y="5" font-size="10" fill="#dc2626" font-weight="bold" text-anchor="middle">🔥 உருக்கி</text>
                <text x="26" y="60" font-size="10" fill="#ea580c" font-weight="bold" text-anchor="middle">மாற்றப்படுகிறது</text>
              </g>

              <!-- Small Spheres Cluster -->
              <g transform="translate(205, 45)">
                <circle cx="18" cy="16" r="14" fill="url(#sphereSmallTm)" stroke="#9a3412" stroke-width="1.2"/>
                <circle cx="54" cy="16" r="14" fill="url(#sphereSmallTm)" stroke="#9a3412" stroke-width="1.2"/>
                <circle cx="90" cy="16" r="14" fill="url(#sphereSmallTm)" stroke="#9a3412" stroke-width="1.2"/>

                <circle cx="18" cy="50" r="14" fill="url(#sphereSmallTm)" stroke="#9a3412" stroke-width="1.2"/>
                <circle cx="54" cy="50" r="14" fill="url(#sphereSmallTm)" stroke="#9a3412" stroke-width="1.2"/>
                <circle cx="90" cy="50" r="14" fill="url(#sphereSmallTm)" stroke="#9a3412" stroke-width="1.2"/>

                <circle cx="18" cy="84" r="14" fill="url(#sphereSmallTm)" stroke="#9a3412" stroke-width="1.2"/>
                <circle cx="54" cy="84" r="14" fill="url(#sphereSmallTm)" stroke="#9a3412" stroke-width="1.2"/>
                <circle cx="90" cy="84" r="14" fill="url(#sphereSmallTm)" stroke="#9a3412" stroke-width="1.2"/>

                <line x1="54" y1="50" x2="68" y2="50" stroke="#ffffff" stroke-width="1.5"/>
                <text x="54" y="115" font-size="11" fill="#c2410c" font-weight="bold" text-anchor="middle">r = 2 cm (ஒவ்வொன்றும்)</text>
                <text x="54" y="130" font-size="10" fill="#475569" text-anchor="middle">V₂ = ⁴⁄₃ π r³</text>
              </g>

              <!-- Bottom Result Callout -->
              <rect x="20" y="212" width="300" height="34" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
              <text x="170" y="234" font-size="12.5" fill="#1e40af" font-weight="bold" text-anchor="middle">சிறிய கோளங்கள் n = (16/2)³ = 8³ = 512</text>
            </svg>
          </div>`,
          ans: `<div style="line-height:1.9;">
            <div style="background:#eff6ff; border-left:4px solid #2563eb; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>படி 1: கொடுக்கப்பட்ட விவரங்கள் (Given Data):</b><br>
              • பெரிய உலோகக் கோளத்தின் ஆரம், R = <b>16 செ.மீ</b><br>
              • சிறிய கோளத்தின் ஆரம், r = <b>2 செ.மீ</b>
            </div>

            <div style="background:#f8fafc; border-left:4px solid #0284c7; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>படி 2: கனஅளவு மாறாக் கொள்கை (Conservation of Volume):</b><br>
              திண்மங்களை உருக்கி மறுவடிவாக்கம் செய்யும்போது:<br>
              • <b>'n' சிறிய கோளங்களின் மொத்தக் கனஅளவு = பெரிய கோளத்தின் கனஅளவு</b><br>
              • n × ஒரு சிறிய கோளத்தின் கனஅளவு = பெரிய கோளத்தின் கனஅளவு
            </div>

            <div style="background:#fff7ed; border-left:4px solid #ea580c; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>படி 3: சூத்திரம் மற்றும் எளிய சுருக்குதல்:</b><br>
              திண்மக் கோளத்தின் கனஅளவு = <b>(4/3)πr³</b><br><br>
              சிறிய கோளங்களின் எண்ணிக்கை (n) = <span style="font-size:15px; font-weight:700;">(பெரிய கோளத்தின் கனஅளவு) / (ஒரு சிறிய கோளத்தின் கனஅளவு)</span><br>
              n = <span style="font-size:15px; font-weight:700;">[(4/3)πR³] / [(4/3)πr³]</span><br><br>
              <i>தொகுதி மற்றும் பகுதி இரண்டிலும் உள்ள (4/3)π பொது உறுப்பு முழுமையாக நீங்கிவிடும்:</i><br>
              <b>n = R³ / r³ = (R / r)³</b>
            </div>

            <div style="background:#f0fdf4; border-left:4px solid #16a34a; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>படி 4: மதிப்புகளைப் பிரதியிட்டு விரைவாகக் கணக்கிடுதல்:</b><br>
              n = (16 / 2)³<br>
              n = 8³<br>
              n = 8 × 8 × 8 = 64 × 8 = <b>512</b>
            </div>

            <div style="margin-top:14px; padding:12px; background:#eff6ff; border:2px solid #2563eb; border-radius:8px; text-align:center;">
              <span style="font-size:16px; font-weight:800; color:#1e40af;">இறுதி விடை: கிடைக்கும் சிறிய கோளங்களின் எண்ணிக்கை = 512</span>
            </div>

            <div style="margin-top:12px; font-size:13px; color:#475569; background:#f8fafc; padding:10px; border-radius:6px; border:1px solid #e2e8f0;">
              <b>💡 பொதுத்தேர்வு மதிப்பெண் குறிப்புகள்:</b><br>
              1. <b>π-ன் மதிப்பை பெருக்க வேண்டாம்:</b> (4/3) மற்றும் π இரண்டும் நேரடியாக அடிபட்டுவிடும். தசம எண்களாகப் பெருக்கினால் நேர விரயமும் கூட்டல்-கழித்தல் பிழையும் ஏற்படும்.<br>
              2. முதலில் ஆரங்களை வகுக்கவும்: (16 / 2) = 8, பின்னர் 8-ஐ க்யூப் செய்யவும்: 8³ = 512.<br>
              3. எண்ணிக்கை என்பதால் செ.மீ அல்லது செ.மீ³ போன்ற அலகுகள் எழுதக் கூடாது.
            </div>
          </div>`,
          commonMistakes: [
            {
              type: "π-ன் மதிப்பை பிரதியிட்டு தசம எண்களில் வகுத்தல் (நேர விரயம் & பிழை)",
              icon: "⏱️",
              deduction: "-1 Mark",
              mistake: "மாணவர்கள் π = 22/7 என பிரதியிட்டு 17157.28 மற்றும் 33.51 என பெரிய தசமக் கணக்கீடுகளைச் செய்து நேரம் வீணாவதோடு தவறான விடையைப் பெறுகின்றனர்.",
              mistakeTa: "பொதுவான (4/3)π உறுப்பை நீக்காமல் பெருக்கினால் நீண்ட தசமப் பெருக்கலில் பிழை ஏற்படும்.",
              correction: "(4/3)π-ஐ நேரடியாக நீக்கிவிட்டு, n = (R / r)³ = (16 / 2)³ = 8³ = 512 என எளிதாகக் கணக்கிடவும்."
            },
            {
              type: "கனஅளவிற்கு பதிலாக ஆரத்தை மட்டும் வகுத்தல் (R/r என எழுதுதல்)",
              icon: "🔢",
              deduction: "-2 Marks",
              mistake: "கனஅளவு r³-க்கு நேர்விகிதத்தில் இருக்கும் என்பதை மறந்து n = 16 / 2 = 8 கோளங்கள் என்று மட்டும் எழுதிவிடுதல்.",
              mistakeTa: "கோளத்தின் கனஅளவு r³ ஆகும். ஆரங்களை மட்டும் வகுத்து 8 என எழுதினால் விடை முற்றிலும் தவறாகும்.",
              correction: "எப்போதும் ஆரங்களின் விகிதத்தை கனம் (Cube) செய்ய வேண்டும்: (16 / 2)³ = 8³ = 512."
            },
            {
              type: "எண்ணிக்கைக்கு அலகு சேர்த்தல் (எ.கா. '512 செ.மீ³')",
              icon: "📏",
              deduction: "-½ Mark",
              mistake: "இறுதி விடைக்கு '512 செ.மீ³' அல்லது '512 செ.மீ' என அலகு எழுதுதல்.",
              mistakeTa: "கேள்வி 'எத்தனை சிறிய கோளங்கள்' என்று கேட்கப்பட்டுள்ளது. இது ஒரு எண்ணிக்கை, கனஅளவு அல்ல.",
              correction: "'கிடைக்கும் சிறிய கோளங்களின் எண்ணிக்கை = 512' என மட்டும் தெளிவாகக் கட்டமிடவும்."
            }
          ]
        }
      ]
    }
  ]
};
