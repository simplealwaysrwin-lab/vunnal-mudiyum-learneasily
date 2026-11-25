// 10-ஆம் வகுப்பு கணிதம் - அலகு 6: முக்கோணவியல் (Trigonometry)
// தமிழ்நாடு சமச்சீர் கல்வி வினா-விடை வழிகாட்டி (தமிழ் வழி)

const MATHS_TM_UNIT_6_DATA = {
  unitId: "math_tm_u6",
  unitName: "அலகு 6: முக்கோணவியல்",
  subject: "கணிதம் (தமிழ் வழி)",
  syllabus: "தமிழ்நாடு அரசு சமச்சீர் கல்வி 10-ஆம் வகுப்பு கணிதம்",

  // முக்கிய சூத்திரங்கள்
  formulas: [
    { title: "முற்றொருமை 1", rule: "sin²θ + cos²θ = 1 ➔ sin²θ = 1 - cos²θ; cos²θ = 1 - sin²θ" },
    { title: "முற்றொருமை 2", rule: "1 + tan²θ = sec²θ ➔ sec²θ - tan²θ = 1" },
    { title: "முற்றொருமை 3", rule: "1 + cot²θ = cosec²θ ➔ cosec²θ - cot²θ = 1" },
    { title: "விகிதத் தொடர்புகள்", rule: "tan θ = sin θ / cos θ; cot θ = cos θ / sin θ" },
    { title: "தலைகீழி தொடர்புகள்", rule: "cosec θ = 1/sin θ; sec θ = 1/cos θ; cot θ = 1/tan θ" },
    { title: "முக்கோணவியல் மதிப்புகள் (tan)", rule: "tan 0° = 0; tan 30° = 1/√3; tan 45° = 1; tan 60° = √3; tan 90° = வரையறுக்கப்படவில்லை" },
    { title: "முக்கோணவியல் மதிப்புகள் (sin)", rule: "sin 0° = 0; sin 30° = 1/2; sin 45° = 1/√2; sin 60° = √3/2; sin 90° = 1" },
    { title: "ஏற்றக்கோணம்", rule: "பார்வைக் கோடு கிடைமட்டக் கோட்டிற்கு மேலே அமையும் போது உருவாகும் கோணம்: tan θ = உயரம் / தொலைவு" },
    { title: "இறக்கக்கோணம்", rule: "பார்வைக் கோடு கிடைமட்டக் கோட்டிற்கு கீழே அமையும் போது உருவாகும் கோணம் (ஒன்றுவிட்ட கோண விதிப்படி ஏற்றக்கோணத்திற்கு சமம்)" }
  ],

  subSections: [
    {
      id: "sec_m_tm_6_1",
      title: "பகுதி 1: முக்கோணவியல் முற்றொருமைகள் & இயற்கணித நிரூபணங்கள்",
      author: "அத்தியாயம் 6: முக்கோணவியல் முற்றொருமைகள்",
      questions: [
        {
          id: "m_tm_6_1_1",
          type: "1m",
          mark: "1 மதிப்பெண்",
          examTag: "அரசுத் தேர்வு",
          q: "(sin²θ + cos²θ) / (1 + tan²θ)-ன் மதிப்பு யாது?",
          options: ["அ) sin²θ", "ஆ) cos²θ", "இ) tan²θ", "ஈ) 1"],
          ans: "விடை: <b>ஆ) cos²θ</b> (தொகுதி = 1, பகுதி = sec²θ. 1 / sec²θ = cos²θ)."
        },
        {
          id: "m_tm_6_1_2",
          examYear: "2023",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "tan θ = 1 எனில் சாய்வுக் கோணம் θ-ன் மதிப்பு:",
          options: ["அ) 30°", "ஆ) 45°", "இ) 60°", "ஈ) 90°"],
          ans: "விடை: <b>ஆ) 45°</b>"
        },
        {
          id: "m_tm_6_1_3",
          examYear: "2024, 2023",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examTag: "அரசு பொதுத்தேர்வு (2M)",
          isImportant: true,
          q: "√[(1 + cos θ) / (1 - cos θ)] = cosec θ + cot θ என்பதை நிரூபிக்கவும்.",
          ans: "<div style=\"line-height:1.8;\"><b>நிரூபணம்:</b><br>இடப்பக்கம் (LHS) = √[ (1 + cos θ) / (1 - cos θ) ]<br>பகுதியின் இணைக்காரணி (1 + cos θ)-ஆல் பெருக்கி வகுக்க:<br>= √[ (1 + cos θ)² / ((1 - cos θ)(1 + cos θ)) ]<br>= √[ (1 + cos θ)² / (1 - cos²θ) ]<br>1 - cos²θ = sin²θ எனப் பிரதியிட:<br>= √[ (1 + cos θ)² / sin²θ ] = (1 + cos θ) / sin θ<br>= (1 / sin θ) + (cos θ / sin θ) = <b>cosec θ + cot θ = வலப்பக்கம் (RHS)</b>. நிரூபிக்கப்பட்டது.</div>"
        },
        {
          id: "m_tm_6_1_4",
          examYear: "2024",
          videoUrl: "https://youtu.be/4KS-OUpKpy0",
          type: "5m",
          mark: "5 மதிப்பெண்",
          examTag: "அரசு பொதுத்தேர்வு 2024 (5M)",
          isImportant: true,
          q: "(sin θ - 2 sin³θ) / (2 cos³θ - cos θ) = tan θ என நிரூபிக்க.",
          chalkboard: {
            steps: [
              {
                stepNum: 1,
                title: "தொகுதி மற்றும் பகுதியிலிருந்து பொதுக்காரணி எடுத்தல்",
                badge: "படி 1",
                html: "இடப்பக்கம் = [ sin θ (1 - 2 sin²θ) ] / [ cos θ (2 cos²θ - 1) ]"
              },
              {
                stepNum: 2,
                title: "sin²θ-ஐ cos²θ-ஆக மாற்றுதல்",
                badge: "படி 2",
                html: "sin²θ = 1 - cos²θ எனத் தொகுதியில் பிரதியிட:<br>1 - 2 sin²θ = 1 - 2(1 - cos²θ) = 1 - 2 + 2 cos²θ = <b>2 cos²θ - 1</b>."
              },
              {
                stepNum: 3,
                title: "சமமான கோவைகளை நீக்குதல்",
                badge: "படி 3",
                html: "இடப்பக்கம் = [ sin θ (2 cos²θ - 1) ] / [ cos θ (2 cos²θ - 1) ] = sin θ / cos θ."
              },
              {
                stepNum: 4,
                title: "இறுதி விடை",
                badge: "படி 4",
                html: "sin θ / cos θ = <b style=\'color:#16a34a;\'>tan θ = வலப்பக்கம்</b>. நிரூபிக்கப்பட்டது!"
              }
            ]
          },
          ans: "<div style=\"line-height:1.8;\"><b>இடப்பக்கம்</b> = [ sin θ(1 - 2 sin²θ) ] / [ cos θ(2 cos²θ - 1) ]<br>தொகுதியில் sin²θ = 1 - cos²θ எனப் பிரதியிட:<br>1 - 2(1 - cos²θ) = 2 cos²θ - 1.<br>எனவே, இடப்பக்கம் = [ sin θ(2 cos²θ - 1) ] / [ cos θ(2 cos²θ - 1) ] = sin θ / cos θ = <b>tan θ = வலப்பக்கம்</b>.</div>"
        }
      ]
    },
    {
      id: "sec_m_tm_6_2",
      title: "பகுதி 2: உயரங்களும் தொலைவுகளும் (ஏற்ற மற்றும் இறக்கக்கோணம்)",
      author: "அத்தியாயம் 6: நடைமுறைப் பயன்பாடுகள்",
      questions: [
        {
          id: "m_tm_6_2_1",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examTag: "அரசு மாதிரி",
          isImportant: true,
          q: "ஒரு கோபுரம் தரையில் செங்குத்தாக உள்ளது. கோபுரத்தின் அடிப்பகுதியிலிருந்து 48 மீ தொலைவில் உள்ள ஒரு புள்ளியிலிருந்து கோபுர உச்சியின் ஏற்றக்கோணம் 30° எனில், கோபுரத்தின் உயரத்தைக் காண்க.",
          ans: "<div style=\"line-height:1.8;\"><b>தீர்வு:</b><br>கோபுரத்தின் உயரம் h மற்றும் தொலைவு d = 48 மீ. ஏற்றக்கோணம் θ = 30°.<br>tan θ = எதிர்ப்பக்கம் / அடுத்துள்ள பக்கம் ➔ tan 30° = h / 48<br>1 / √3 = h / 48 ➔ h = 48 / √3 = (48√3) / 3 = <b>16√3 மீ</b> (அல்லது 16 × 1.732 = <b>27.71 மீ</b>).</div>"
        },
        {
          id: "m_tm_6_2_2",
          examYear: "2023",
          videoUrl: "https://youtu.be/Dm4jUvIkODc",
          type: "5m",
          mark: "5 மதிப்பெண்",
          examTag: "அரசு பொதுத்தேர்வு 2023 (5M)",
          isImportant: true,
          q: "50√3 மீ உயரமுள்ள ஒரு பாறையின் உச்சியிலிருந்து தரையிலுள்ள ஒரு மகிழுந்தின் இறக்கக்கோணம் 30° எனில், பாறையிலிருந்து மகிழுந்து உள்ள தொலைவைக் காண்க.",
          chalkboard: {
            steps: [
              {
                stepNum: 1,
                title: "வடிவவியல் அமைப்பை உருவாக்குதல்",
                badge: "படி 1",
                html: "பாறையின் உயரம் AB = 50√3 மீ என்க. மகிழுந்தின் நிலை C என்க. இறக்கக்கோணம் 30° ➔ ஒன்றுவிட்ட கோண விதிப்படி ஏற்றக்கோணம் ∠ACB = 30°."
              },
              {
                stepNum: 2,
                title: "செங்கோண முக்கோணம் ABC-ல் tan விகிதத்தைப் பயன்படுத்துதல்",
                badge: "படி 2",
                html: "tan 30° = AB / BC ➔ 1 / √3 = 50√3 / BC."
              },
              {
                stepNum: 3,
                title: "குறுக்குப் பெருக்கல் செய்து BC காணுதல்",
                badge: "படி 3",
                html: "BC = 50√3 × √3 = 50 × 3 = <b style=\'color:#16a34a; font-size:16px;\'>150 மீ</b>."
              }
            ]
          },
          ans: "<div style=\"line-height:1.8;\"><b>1. அமைப்பு:</b> உயரம் AB = 50√3 மீ. இறக்கக்கோணம் = 30° ➔ ஏற்றக்கோணம் ∠ACB = 30°.<br><b>2. முக்கோணவியல் விகிதம்:</b> tan 30° = AB / BC<br>1 / √3 = 50√3 / BC ➔ BC = 50√3 × √3 = 50 × 3 = <b>150 மீ</b>.<br>பாறையிலிருந்து மகிழுந்து உள்ள தொலைவு <b>150 மீட்டர்கள்</b> ஆகும்.</div>"
        }
      ]
    },

    // -------------------------------------------------------------
    // கூடுதல் பயிற்சி வினாக்கள் (பாடப்பகுதி உள்வினாக்கள்)
    // -------------------------------------------------------------
    {
      id: "sec_math_tm_u6_add_practice",
      title: "கூடுதல் பயிற்சி வினாக்கள் (பாடப்பகுதி உள்வினாக்கள்)",
      author: "அலகு 6: முக்கோணவியல் - கூடுதல் தேர்வுப் பயிற்சி",
      questions: [
        {
          id: "m_tm_u6_add_q1",
          type: "2m",
          mark: "2 மதிப்பெண் | கூடுதல் பயிற்சி வினா",
          sectionTag: "கூடுதல் பயிற்சி வினாக்கள் (In-Text)",
          isAdditionalPractice: true,
          subSectionId: "sec_math_tm_u6_add_practice",
          q: "மதிப்பு காண்க: sin 30° + cos 60°.",
          ans: `<div style="line-height:1.8;">
            <b>நிலையான முக்கோணவியல் மதிப்புகள்:</b><br>
            • sin 30° = 1 / 2<br>
            • cos 60° = 1 / 2<br><br>
            <b>பிரதியிட்டு மதிப்பு காண்க:</b><br>
            sin 30° + cos 60° = (1 / 2) + (1 / 2) = 2 / 2 = <b>1</b><br><br>
            <div style="padding:10px 14px; background:#f0fdf4; border-left:4px solid #16a34a; border-radius:6px; font-weight:700; color:#15803d;">
              sin 30° + cos 60° = 1
            </div>
          </div>`,
          audioScript: "முக்கோணவியல் மதிப்புகள்: sine 30 degrees சமம் அரை, cosine 60 degrees சமம் அரை. எனவே sine 30 கூட்டல் cosine 60 சமம் அரை கூட்டல் அரை சமம் 1 ஆகும்."
        },
        {
          id: "m_tm_u6_add_q2",
          type: "2m",
          mark: "2 மதிப்பெண் | கூடுதல் பயிற்சி வினா",
          sectionTag: "கூடுதல் பயிற்சி வினாக்கள் (In-Text)",
          isAdditionalPractice: true,
          subSectionId: "sec_math_tm_u6_add_practice",
          q: "tan θ = 3/4 எனில், sin θ மற்றும் cos θ-ன் மதிப்புகளைக் காண்க (இங்கு θ ஒரு குறுங்கோணம்).",
          ans: `<div style="line-height:1.8;">
            <b>கொடுக்கப்பட்டவை:</b> tan θ = எதிர்பக்கம் / அடுத்துள்ள பக்கம் = 3 / 4<br><br>
            <b>படி 1: பிதாகரஸ் தேற்றப்படி கர்ணத்தைக் காண்க:</b><br>
            கர்ணம் = √[(எதிர்பக்கம்)² + (அடுத்துள்ள பக்கம்)²]<br>
            கர்ணம் = √[3² + 4²] = √[9 + 16] = √25 = <b>5</b><br><br>
            <b>படி 2: முக்கோணவியல் விகிதங்களைக் காண்க:</b><br>
            • <b>sin θ</b> = எதிர்பக்கம் / கர்ணம் = <b>3 / 5</b><br>
            • <b>cos θ</b> = அடுத்துள்ள பக்கம் / கர்ணம் = <b>4 / 5</b><br><br>
            <div style="padding:10px 14px; background:#f0fdf4; border-left:4px solid #16a34a; border-radius:6px; font-weight:700; color:#15803d;">
              sin θ = 3/5 &nbsp;|&nbsp; cos θ = 4/5
            </div>
          </div>`,
          audioScript: "tan theta சமம் எதிர்பக்கம் கீழ் அடுத்துள்ள பக்கம் சமம் 3 கீழ் 4. பிதாகரஸ் தேற்றப்படி கர்ணம் சமம் square root of 3 squared plus 4 squared சமம் 5. எனவே sine theta சமம் எதிர்பக்கம் கீழ் கர்ணம் சமம் 3 கீழ் 5, மற்றும் cosine theta சமம் அடுத்துள்ள பக்கம் கீழ் கர்ணம் சமம் 4 கீழ் 5."
        },
        {
          id: "m_tm_u6_add_q3",
          type: "5m",
          mark: "5 மதிப்பெண் | கூடுதல் பயிற்சி வினா",
          sectionTag: "கூடுதல் பயிற்சி வினாக்கள் (In-Text)",
          isAdditionalPractice: true,
          subSectionId: "sec_math_tm_u6_add_practice",
          q: "தரைமட்டத்தில் உள்ள ஒரு கோபுரத்தின் அடியிலிருந்து 20 மீ தொலைவிலுள்ள ஒரு புள்ளியிலிருந்து கோபுர உச்சியின் ஏற்றக்கோணம் 45° எனில், கோபுரத்தின் உயரத்தைக் காண்க.",
          ans: `<div style="line-height:1.8;">
            <div style="text-align:center; margin:10px 0;">
              <svg width="240" height="150" viewBox="0 0 240 150" style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
                <!-- Tower AB -->
                <line x1="50" y1="120" x2="50" y2="30" stroke="#b45309" stroke-width="4" />
                <!-- Ground BC -->
                <line x1="40" y1="120" x2="210" y2="120" stroke="#475569" stroke-width="2.5" />
                <!-- Line of sight AC -->
                <line x1="50" y1="30" x2="200" y2="120" stroke="#2563eb" stroke-dasharray="4,3" stroke-width="2" />
                <!-- Labels -->
                <text x="30" y="25" font-size="13" font-weight="700" fill="#b45309">A (உச்சி)</text>
                <text x="30" y="138" font-size="13" font-weight="700" fill="#475569">B (அடி)</text>
                <text x="205" y="135" font-size="13" font-weight="700" fill="#2563eb">C</text>
                <text x="12" y="80" font-size="12" font-weight="800" fill="#b45309">h = ?</text>
                <text x="100" y="138" font-size="12" font-weight="700" fill="#475569">20 மீ</text>
                <!-- Angle arc -->
                <path d="M 175,120 A 25 25 0 0 0 180,108" fill="none" stroke="#dc2626" stroke-width="2" />
                <text x="155" y="112" font-size="11" font-weight="700" fill="#dc2626">45°</text>
                <!-- Right angle at B -->
                <rect x="50" y="108" width="12" height="12" fill="none" stroke="#dc2626" stroke-width="1.5" />
              </svg>
            </div>
            <b>படி 1: வரைபட விளக்கம்:</b><br>
            • AB என்பது h மீட்டர் உயரமுள்ள செங்குத்தான கோபுரம் என்க.<br>
            • C என்பது தரையிலுள்ள உற்றுநோக்கும் புள்ளி என்க.<br>
            • கோபுரத்தின் அடியிலிருந்து தொலைவு BC = 20 மீ.<br>
            • ஏற்றக்கோணம் ∠ACB = 45°.<br><br>
            <b>படி 2: tan θ விகிதத்தைப் பயன்படுத்துக:</b><br>
            செங்கோண முக்கோணம் ABC-ல்:<br>
            tan 45° = எதிர்பக்கம் / அடுத்துள்ள பக்கம் = AB / BC<br><br>
            <b>படி 3: மதிப்புகளைப் பிரதியிட:</b><br>
            tan 45° = 1 என்பதால்:<br>
            1 = h / 20<br>
            h = 20 × 1 = <b>20 மீ</b><br><br>
            <div style="padding:10px 14px; background:#f0fdf4; border-left:4px solid #16a34a; border-radius:6px; font-weight:700; color:#15803d;">
              கோபுரத்தின் உயரம் = 20 மீட்டர்
            </div>
          </div>`,
          audioScript: "AB என்பது கோபுரத்தின் உயரம் h மற்றும் C என்பது தரையிலுள்ள புள்ளி என்க. தொலைவு BC சமம் 20 மீட்டர், ஏற்றக்கோணம் 45 டிகிரி. செங்கோண முக்கோணம் ABC-ல் tan 45 degrees சமம் AB கீழ் BC, அதாவது h கீழ் 20. tan 45 degrees சமம் 1 என்பதால், 1 சமம் h கீழ் 20, எனவே உயரம் h சமம் 20 மீட்டர் ஆகும்."
        }
      ]
    }
  ]
};