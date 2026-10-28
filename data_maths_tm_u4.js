// 10-ஆம் வகுப்பு கணிதம் - அலகு 4: வடிவியல் (Geometry)
// தமிழ்நாடு சமச்சீர் கல்வி வினா-விடை வழிகாட்டி (தமிழ் வழி)

const MATHS_TM_UNIT_4_DATA = {
  unitId: "math_tm_u4",
  unitName: "அலகு 4: வடிவியல்",
  subject: "கணிதம் (தமிழ் வழி)",
  syllabus: "தமிழ்நாடு அரசு சமச்சீர் கல்வி 10-ஆம் வகுப்பு கணிதம்",

  // முக்கிய தேற்றங்கள் & சூத்திரங்கள்
  formulas: [
    { title: "அடிப்படை விகிதசமத் தேற்றம் (தேல்ஸ் தேற்றம்)", rule: "முக்கோணம் ABC-யில் DE || BC எனில் AD / DB = AE / EC" },
    { title: "கோண இருசமவெட்டித் தேற்றம் (ABT)", rule: "முக்கோணம் ABC-யில் AD என்பது ∠A-ன் உட்புற இருசமவெட்டி எனில் BD / DC = AB / AC" },
    { title: "பிதாகரஸ் தேற்றம்", rule: "செங்கோண முக்கோணத்தில்: கர்ணம்² = பக்கம்₁² + பக்கம்₂² (AC² = AB² + BC²)" },
    { title: "வடிவொத்த முக்கோணங்களின் பரப்பளவு", rule: "பரப்பு(ΔABC) / பரப்பு(ΔPQR) = (AB / PQ)² = (BC / QR)² = (AC / PR)²" },
    { title: "வெளிப்புள்ளியிலிருந்து தொடுகோடுகள்", rule: "வட்டத்திற்கு வெளியே உள்ள புள்ளியிலிருந்து வரையப்படும் இரு தொடுகோடுகளின் நீளங்கள் சமம் (PA = PB)" },
    { title: "மாற்று வட்டத்துண்டுத் தேற்றம்", rule: "தொடுகோட்டிற்கும் நாணிற்கும் இடைப்பட்ட கோணம் மாற்று வட்டத்துண்டில் அமையும் கோணத்திற்குச் சமம் (∠PAB = ∠ACB)" },
    { title: "தொடுபுள்ளி ஆரம் செங்குத்து", rule: "வட்டத்தின் தொடுபுள்ளி வழியே செல்லும் ஆரமும் தொடுகோடும் ஒன்றுக்கொன்று செங்குத்து (OA ⊥ PQ)" },
    { title: "நடுக்கோட்டு மையம் (Centroid G)", rule: "நடுக்கோடுகள் சந்திக்கும் புள்ளி நடுக்கோட்டு மையம் G ஆகும்; இது ஒவ்வொரு நடுக்கோட்டையும் 2 : 1 என்ற விகிதத்தில் பிரிக்கும்" }
  ],

  subSections: [
    {
      id: "sec_m_tm_4_1",
      title: "பகுதி 1: முக்கிய 5-மதிப்பெண் தேற்றங்கள் & கணக்குகள் (கரும்பலகை சிறப்பு 10 வினாக்கள்)",
      author: "அலகு 4: வடிவியல் - முக்கிய 5 மதிப்பெண் (வினாக்கள் 1 முதல் 10 வரை)",
      questions: [
        {
          id: "m_tm_4_1_3",
          type: "5m",
          mark: "5 மதிப்பெண்",
          examYear: "2024",
          examTag: "2024* (தேற்றம்)",
          isImportant: true,
          q: "அடிப்படை விகிதசமத் தேற்றம் அல்லது தேல்ஸ் தேற்றத்தைக் (Basic Proportionality Theorem) கூறி நிறுவுக.",
          diagramImg: "math_ch4_5m_q1_bpt_bb.jpg",
          diagramCaption: "அடிப்படை விகிதசமத் தேற்றம் (தேல்ஸ் தேற்றம்) - DE || BC (தொட்டுப் பெரிதாகக் காண்க)",
          ans: `<div style="line-height:1.8;">
            <div style="padding:10px 14px; background:#eff6ff; border-left:4px solid #2563eb; border-radius:6px; margin-bottom:12px;">
              <b>அடிப்படை விகிதசமத் தேற்றம் (தேல்ஸ் தேற்றம்):</b><br>
              <i>ஒரு முக்கோணத்தின் ஒரு பக்கத்திற்கு இணையாக வரையப்படும் நேர்க்கோடு மற்ற இரு பக்கங்களை வெட்டுமானால், அக்கோடானது அவ்விரண்டு பக்கங்களையும் சம விகிதத்தில் பிரிக்கிறது.</i>
            </div>

            <b>கொடுக்கப்பட்டது:</b><br>
            ΔABC-ல் DE || BC என்ற கோடு AB-ஐ D-யிலும், AC-ஐ E-யிலும் வெட்டுகிறது.<br><br>

            <b>நிரூபிக்க வேண்டியது:</b><br>
            <div style="margin:6px 0 6px 18px; font-weight:700; font-size:16px; color:#1d4ed8;">
              AD / DB = AE / EC
            </div><br>

            <b>அமைப்பு:</b><br>
            DE || BC என்ற கோடு வரைக (இது AB-ஐ D-யிலும், AC-ஐ E-யிலும் சந்திக்கிறது).<br><br>

            <b>நிரூபணம் (வடிவொத்த முக்கோணங்கள் முறை):</b><br>
            <table style="width:100%; border-collapse:collapse; margin:10px 0;">
              <thead>
                <tr style="background:#f1f5f9; border-bottom:2px solid #cbd5e1; text-align:left;">
                  <th style="padding:8px 10px; width:8%;">எண்</th>
                  <th style="padding:8px 10px; width:52%;">கூற்று</th>
                  <th style="padding:8px 10px; width:40%;">காரணம்</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">1.</td>
                  <td style="padding:8px 10px;">DE || BC என்பதால்,<br>∠ADE = ∠ABC மற்றும் ∠AED = ∠ACB</td>
                  <td style="padding:8px 10px; color:#475569;">ஒத்த கோணங்கள் சமம்</td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">2.</td>
                  <td style="padding:8px 10px;">∠DAE = ∠BAC</td>
                  <td style="padding:8px 10px; color:#475569;">பொதுக் கோணம்</td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">3.</td>
                  <td style="padding:8px 10px;"><b>ΔADE ~ ΔABC</b></td>
                  <td style="padding:8px 10px; color:#475569;">AAA வடிவொத்த விதி</td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">4.</td>
                  <td style="padding:8px 10px;">AD / AB = AE / AC = DE / BC</td>
                  <td style="padding:8px 10px; color:#475569;">வடிவொத்த முக்கோணங்களின் ஒத்த பக்கங்கள் சம விகிதத்தில் அமையும்</td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">5.</td>
                  <td style="padding:8px 10px;">AD / AB = AE / AC<br>⇒ AD / (AD + DB) = AE / (AE + EC)</td>
                  <td style="padding:8px 10px; color:#475569;">ஏனெனில் AB = AD + DB மற்றும் AC = AE + EC</td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">6.</td>
                  <td style="padding:8px 10px;">குறுக்குப் பெருக்கல் செய்ய:<br>AD(AE + EC) = AE(AD + DB)<br>AD · AE + AD · EC = AE · AD + AE · DB<br>⇒ <b>AD · EC = AE · DB</b></td>
                  <td style="padding:8px 10px; color:#475569;">இருபுறமும் உள்ள AD · AE நீக்கப்பட்டு எஞ்சியது</td>
                </tr>
                <tr>
                  <td style="padding:8px 10px; font-weight:700;">7.</td>
                  <td style="padding:8px 10px;">இருபுறமும் DB · EC-ஆல் வகுக்க:<br><b style="color:#15803d; font-size:15px;">AD / DB = AE / EC</b></td>
                  <td style="padding:8px 10px; font-weight:700; color:#15803d;">தேற்றம் நிறுவப்பட்டது!</td>
                </tr>
              </tbody>
            </table>

            <div style="margin-top:12px; padding:10px 14px; background:#f0fdf4; border:1.5px solid #22c55e; border-radius:8px; font-weight:700; text-align:center; color:#166534; font-size:16px;">
              ∴ AD / DB = AE / EC (அடிப்படை விகிதசமத் தேற்றம் வெற்றிகரமாக நிறுவப்பட்டது)
            </div>
          </div>`,
          noVoice: true,
          checkpoints: [
            {
              q: "1. அடிப்படை விகிதசமத் தேற்றத்தின் மற்றொரு பிரபலமான பெயர் என்ன?",
              options: ["அ. பிதாகரஸ் தேற்றம்", "ஆ. நடுப்புள்ளித் தேற்றம்", "இ. தேல்ஸ் தேற்றம் (Thales Theorem)", "ஈ. யூக்ளிட் தேற்றம்"],
              ans: 2,
              explanation: "கிரேக்க கணித மேதை தேல்ஸ் என்பவரால் நிறுவப்பட்டதால் இது 'தேல்ஸ் தேற்றம்' என அழைக்கப்படுகிறது."
            },
            {
              q: "2. ஒரு முக்கோணத்தின் ஒரு பக்கத்திற்கு இணையாக வரையப்படும் நேர்க்கோடு மற்ற இரு பக்கங்களை எவ்வாறு பிரிக்கும்?",
              options: ["அ. செங்குத்தாக", "ஆ. சம பாதிகளாக", "இ. 2:1 விகிதத்தில்", "ஈ. சம விகிதத்தில்"],
              ans: 3,
              explanation: "ஒரு பக்கத்திற்கு இணையான கோடு மற்ற இரு பக்கங்களையும் ஒரே விகிதத்தில் (AD/DB = AE/EC) பிரிக்கும்."
            },
            {
              q: "3. DE || BC என்பதால் ∠ADE மற்றும் ∠ABC சமமாவதற்கான காரணம் என்ன?",
              options: ["அ. குத்தெதிர்க் கோணங்கள்", "ஆ. ஒத்த கோணங்கள் சமம்", "இ. ஒன்றுவிட்ட கோணங்கள்", "ஈ. மிகைநிரப்புக் கோணங்கள்"],
              ans: 1,
              explanation: "DE || BC மற்றும் AB குறுக்குவெட்டி என்பதால் ∠ADE மற்றும் ∠ABC ஆகியவை ஒத்த கோணங்கள் ஆகும்."
            },
            {
              q: "4. ΔADE மற்றும் ΔABC வடிவொத்தவை என்பதை எந்த விதி உறுதி செய்கிறது?",
              options: ["அ. SSS விதி", "ஆ. AAA வடிவொத்த விதி", "இ. RHS விதி", "ஈ. SAS விதி"],
              ans: 1,
              explanation: "இரு சோடி ஒத்த கோணங்கள் சமம் மற்றும் உச்சி A பொதுவானது என்பதால் AAA விதியின்படி இரு முக்கோணங்களும் வடிவொத்தவை."
            },
            {
              q: "5. வடிவொத்த முக்கோணங்கள் ΔADE ~ ΔABC-லிருந்து பெறப்படும் பக்கங்களின் விகிதம் யாது?",
              options: ["அ. AD / AB = AE / AC = DE / BC", "ஆ. AD / DB = EC / AE", "இ. AB / AD = AC / AE", "ஈ. AD × DB = AE × EC"],
              ans: 0,
              explanation: "வடிவொத்த முக்கோணங்களின் ஒத்த பக்கங்கள் சம விகிதத்தில் அமையும்: AD/AB = AE/AC = DE/BC."
            },
            {
              q: "6. AB என்ற முழு பக்கத்தை அதன் துண்டுகளின் வடிவில் எவ்வாறு எழுதலாம்?",
              options: ["அ. AD - DB", "ஆ. AD × DB", "இ. AD + DB", "ஈ. 2 AD"],
              ans: 2,
              explanation: "D என்ற புள்ளி AB-யின் மேல் அமைவதால் AB = AD + DB ஆகும்."
            },
            {
              q: "7. AD(AE + EC) = AE(AD + DB) என்பதைப் பெருக்கினால் இருபுறமும் நீக்கப்படும் பொது உறுப்பு எது?",
              options: ["அ. AD · EC", "ஆ. AE · DB", "இ. AD · AE", "ஈ. DB · EC"],
              ans: 2,
              explanation: "AD · AE இருபுறமும் சமமாக இருப்பதால் அது கழிக்கப்பட்டு AD · EC = AE · DB எஞ்சுகிறது."
            },
            {
              q: "8. AD · EC = AE · DB என்பதிலிருந்து AD/DB = AE/EC பெற இருபுறமும் எதனால் வகுக்க வேண்டும்?",
              options: ["அ. AD · AE", "ஆ. DB · EC", "இ. AB · AC", "ஈ. DE · BC"],
              ans: 1,
              explanation: "(DB · EC)-ஆல் வகுக்கும்போது AD/DB = AE/EC கிடைக்கிறது."
            },
            {
              q: "9. AD = 4 செ.மீ, DB = 6 செ.மீ, AE = 5 செ.மீ எனில் EC-ன் மதிப்பு என்ன?",
              options: ["அ. 6.5 செ.மீ", "ஆ. 8 செ.மீ", "இ. 7.5 செ.மீ", "ஈ. 9 செ.மீ"],
              ans: 2,
              explanation: "4/6 = 5/EC ⇒ EC = (5 × 6)/4 = 30/4 = 7.5 செ.மீ."
            },
            {
              q: "10. தேல்ஸ் தேற்றத்தின் மறுதலை என்ன கூறுகிறது?",
              options: [
                "அ. ஒரு கோடு இரு பக்கங்களை சம விகிதத்தில் பிரித்தால் அது மூன்றாம் பக்கத்திற்கு இணையாகும்",
                "ஆ. மூன்று கோணங்களும் சமம்",
                "இ. நடுக்கோடுகள் சந்திக்கும்",
                "ஈ. தொடுகோடுகள் சமம்"
              ],
              ans: 0,
              explanation: "ஒரு நேர்க்கோடு முக்கோணத்தின் இரு பக்கங்களை சம விகிதத்தில் பிரித்தால், அக்கோடானது மூன்றாம் பக்கத்திற்கு இணையாக இருக்கும்."
            }
          ],
          ansTamil: "தேல்ஸ் தேற்றத்தின் வடிவொத்த முக்கோண நிரூபணம் மூலம் AD/DB = AE/EC நிறுவப்பட்டது."
        },

        {
          id: "m_tm_4_2_3",
          type: "5m",
          mark: "5 மதிப்பெண்",
          examYear: "2023",
          examTag: "2023* (தேற்றம்)",
          isImportant: true,
          q: "பிதாகரஸ் தேற்றத்தைக் (Pythagoras Theorem) கூறி நிறுவுக.",
          diagramImg: "math_ch4_5m_q2_pythagoras.jpg",
          diagramCaption: "கரும்பலகைத் தீர்வு: பிதாகரஸ் தேற்றம் நிரூபணம் (தொட்டுப் பெரிதாகக் காண்க)",
          ans: `<div style="line-height:1.8;">
            <div style="padding:10px 14px; background:#eff6ff; border-left:4px solid #2563eb; border-radius:6px; margin-bottom:12px;">
              <b>பிதாகரஸ் தேற்றம்:</b><br>
              <i>ஒரு செங்கோண முக்கோணத்தில் கர்ணத்தின் வர்க்கமானது மற்ற இரு பக்கங்களின் வர்க்கங்களின் கூடுதலுக்குச் சமம்.</i>
            </div>

            <b>கொடுக்கப்பட்டது:</b><br>
            செங்கோண முக்கோணம் ΔABC-ல் ∠B = 90°.<br><br>

            <b>நிரூபிக்க வேண்டியது:</b><br>
            <div style="margin:6px 0 6px 18px; font-weight:700; font-size:16px; color:#1d4ed8;">
              AC² = AB² + BC²
            </div><br>

            <b>அமைப்பு:</b><br>
            BD ⊥ AC வரைக.<br><br>

            <b>நிரூபணம்:</b><br>
            <table style="width:100%; border-collapse:collapse; margin:10px 0;">
              <thead>
                <tr style="background:#f1f5f9; border-bottom:2px solid #cbd5e1; text-align:left;">
                  <th style="padding:8px 10px; width:8%;">படி</th>
                  <th style="padding:8px 10px; width:52%;">கூற்று</th>
                  <th style="padding:8px 10px; width:40%;">காரணம்</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">1.</td>
                  <td style="padding:8px 10px;">ΔADB மற்றும் ΔABC-ஐ ஒப்பிட:<br>• ∠ADB = ∠ABC = 90°<br>• ∠A பொதுக் கோணம்<br>⇒ <b>ΔADB ~ ΔABC</b></td>
                  <td style="padding:8px 10px; color:#475569;">AA வடிவொத்த விதி</td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">2.</td>
                  <td style="padding:8px 10px;">AD / AB = AB / AC<br>குறுக்குப் பெருக்கல் செய்ய:<br><b>AB² = AC × AD</b></td>
                  <td style="padding:8px 10px; color:#475569;">ஒத்த பக்கங்களின் விகிதம் ---- (1)</td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">3.</td>
                  <td style="padding:8px 10px;">ΔBDC மற்றும் ΔABC-ஐ ஒப்பிட:<br>• ∠BDC = ∠ABC = 90°<br>• ∠C பொதுக் கோணம்<br>⇒ <b>ΔBDC ~ ΔABC</b></td>
                  <td style="padding:8px 10px; color:#475569;">AA வடிவொத்த விதி</td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">4.</td>
                  <td style="padding:8px 10px;">CD / BC = BC / AC<br>குறுக்குப் பெருக்கல் செய்ய:<br><b>BC² = AC × CD</b></td>
                  <td style="padding:8px 10px; color:#475569;">ஒத்த பக்கங்களின் விகிதம் ---- (2)</td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">5.</td>
                  <td style="padding:8px 10px;">(1) மற்றும் (2)-ஐக் கூட்ட:<br>AB² + BC² = (AC × AD) + (AC × CD)<br>AB² + BC² = AC (AD + CD)</td>
                  <td style="padding:8px 10px; color:#475569;">AC-ஐப் பொதுவாக வெளியே எடுக்க</td>
                </tr>
                <tr>
                  <td style="padding:8px 10px; font-weight:700;">6.</td>
                  <td style="padding:8px 10px;">படத்திலிருந்து AD + CD = AC என்பதால்:<br>AB² + BC² = AC × AC<br><b style="color:#15803d; font-size:15px;">AC² = AB² + BC²</b></td>
                  <td style="padding:8px 10px; font-weight:700; color:#15803d;">தேற்றம் நிறுவப்பட்டது!</td>
                </tr>
              </tbody>
            </table>

            <div style="margin-top:12px; padding:10px 14px; background:#f0fdf4; border:1.5px solid #22c55e; border-radius:8px; font-weight:700; text-align:center; color:#166534; font-size:16px;">
              ∴ AC² = AB² + BC² (பிதாகரஸ் தேற்றம் வெற்றிகரமாக நிறுவப்பட்டது)
            </div>
          </div>`,
          noVoice: true,
          ansTamil: "செங்கோண முக்கோணங்களின் வடிவொத்த தன்மை மூலம் AC² = AB² + BC² என நிறுவப்பட்டது."
        },

        {
          id: "m_tm_4_1_4",
          type: "5m",
          mark: "5 மதிப்பெண்",
          examYear: "2023",
          examTag: "முக்கிய 5M தேற்றம்",
          isImportant: true,
          q: "கோண இருசமவெட்டித் தேற்றத்தைக் (Angle Bisector Theorem) கூறி நிறுவுக.",
          diagramImg: "math_ch4_5m_q3_abt.jpg",
          diagramCaption: "கரும்பலகைத் தீர்வு: கோண இருசமவெட்டித் தேற்றம் நிரூபணம் (தொட்டுப் பெரிதாகக் காண்க)",
          ans: `<div style="line-height:1.8;">
            <div style="padding:10px 14px; background:#eff6ff; border-left:4px solid #2563eb; border-radius:6px; margin-bottom:12px;">
              <b>கோண இருசமவெட்டித் தேற்றம் (ABT):</b><br>
              <i>ஒரு முக்கோணத்தின் ஒரு கோணத்தின் உட்புற இருசமவெட்டியானது, அக்கோணத்தை அடக்கிய பக்கங்களின் விகிதத்தில் எதிர்பக்கத்தை உட்புறமாகப் பிரிக்கும்.</i>
            </div>

            <b>கொடுக்கப்பட்டது:</b><br>
            ΔABC-ல் ∠A-ன் உட்புற இருசமவெட்டி AD ஆனது எதிர்பக்கம் BC-ஐ D-யில் சந்திக்கிறது.<br><br>

            <b>நிரூபிக்க வேண்டியது:</b><br>
            <div style="margin:6px 0 6px 18px; font-weight:700; font-size:16px; color:#1d4ed8;">
              BD / DC = AB / AC
            </div><br>

            <b>அமைப்பு:</b><br>
            C வழியே AB-க்கு இணையாக ஒரு கோடு வரைக. AD-ஐ நீட்டி அக்கோட்டை E-ல் சந்திக்கச் செய்க.<br><br>

            <b>நிரூபணம்:</b><br>
            <table style="width:100%; border-collapse:collapse; margin:10px 0;">
              <thead>
                <tr style="background:#f1f5f9; border-bottom:2px solid #cbd5e1; text-align:left;">
                  <th style="padding:8px 10px; width:8%;">எண்</th>
                  <th style="padding:8px 10px; width:52%;">கூற்று</th>
                  <th style="padding:8px 10px; width:40%;">காரணம்</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">1.</td>
                  <td style="padding:8px 10px;">AB || CE மற்றும் AE குறுக்குவெட்டி என்பதால்:<br><b>∠AEC = ∠BAE</b></td>
                  <td style="padding:8px 10px; color:#475569;">ஒன்றுவிட்ட உட்கோணங்கள் சமம் ---- (1)</td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">2.</td>
                  <td style="padding:8px 10px;">AD ஆனது ∠BAC-ன் இருசமவெட்டி என்பதால்:<br><b>∠BAE = ∠CAE</b></td>
                  <td style="padding:8px 10px; color:#475569;">கொடுக்கப்பட்டது ---- (2)</td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">3.</td>
                  <td style="padding:8px 10px;">(1) மற்றும் (2)-லிருந்து:<br>∠AEC = ∠CAE<br>⇒ <b>AC = CE</b></td>
                  <td style="padding:8px 10px; color:#475569;">ΔACE-ல் சமமான கோணங்களுக்கு எதிரேயுள்ள பக்கங்கள் சமம் ---- (3)</td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">4.</td>
                  <td style="padding:8px 10px;">ΔABD மற்றும் ΔECD-ஐ ஒப்பிட:<br>• ∠BAD = ∠CED (ஒன்றுவிட்ட கோணங்கள்)<br>• ∠ADB = ∠EDC (குத்தெதிர்க் கோணங்கள்)<br>⇒ <b>ΔABD ~ ΔECD</b></td>
                  <td style="padding:8px 10px; color:#475569;">AA வடிவொத்த விதி</td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-weight:700;">5.</td>
                  <td style="padding:8px 10px;">BD / DC = AB / CE</td>
                  <td style="padding:8px 10px; color:#475569;">வடிவொத்த முக்கோணங்களின் ஒத்த பக்கங்களின் விகிதம் சமம்</td>
                </tr>
                <tr>
                  <td style="padding:8px 10px; font-weight:700;">6.</td>
                  <td style="padding:8px 10px;">CE = AC எனப் பிரதியிட:<br><b style="color:#15803d; font-size:15px;">BD / DC = AB / AC</b></td>
                  <td style="padding:8px 10px; font-weight:700; color:#15803d;">தேற்றம் நிறுவப்பட்டது!</td>
                </tr>
              </tbody>
            </table>

            <div style="margin-top:12px; padding:10px 14px; background:#f0fdf4; border:1.5px solid #22c55e; border-radius:8px; font-weight:700; text-align:center; color:#166534; font-size:16px;">
              ∴ BD / DC = AB / AC (கோண இருசமவெட்டித் தேற்றம் நிறுவப்பட்டது)
            </div>
          </div>`,
          noVoice: true,
          ansTamil: "கோண இருசமவெட்டித் தேற்றப்படி BD/DC = AB/AC என்பது அமைப்பு மற்றும் வடிவொத்த முக்கோணங்கள் மூலம் நிறுவப்பட்டது."
        },

        {
          id: "m_tm_4_1_5",
          type: "5m",
          mark: "5 மதிப்பெண்",
          examYear: "2024",
          examTag: "அரசுத் தேர்வு 5M",
          isImportant: true,
          q: "ஒரு முக்கோணத்தின் நடுக்கோடுகள் ஒரு புள்ளி வழிச் செல்லும் (ஒரு புள்ளியில் சந்திக்கும்) என நிறுவுக.",
          diagramImg: "math_ch4_5m_q4_medians.jpg",
          diagramCaption: "கரும்பலகைத் தீர்வு: முக்கோணத்தின் நடுக்கோடுகள் ஒரு புள்ளியில் சந்திக்கும் நிரூபணம் (தொட்டுப் பெரிதாகக் காண்க)",
          ans: `<div style="line-height:1.8;">
            <div style="padding:10px 14px; background:#eff6ff; border-left:4px solid #2563eb; border-radius:6px; margin-bottom:12px;">
              <b>கூற்று:</b><br>
              <i>ஒரு முக்கோணத்தின் மூன்று நடுக்கோடுகளும் ஒரே புள்ளியில் சந்திக்கும் (அப்புள்ளி நடுக்கோட்டு மையம் எனப்படும்).</i>
            </div>

            <b>கொடுக்கப்பட்டது:</b><br>
            ΔABC-ல் D, E மற்றும் F என்பன முறையே பக்கங்கள் BC, CA மற்றும் AB ஆகியவற்றின் நடுப்புள்ளிகள் ஆகும்.<br>
            AD, BE மற்றும் CF என்பன முக்கோணத்தின் நடுக்கோடுகள் ஆகும்.<br><br>

            <b>நிரூபிக்க வேண்டியது:</b><br>
            நடுக்கோடுகள் AD, BE மற்றும் CF ஆகியவை ஒரு புள்ளி வழிச் செல்பவை.<br><br>

            <b>முறை 1: சீவாஸின் தேற்றத்தின் மறுதலை மூலம் (வடிவியல் முறை):</b><br>
            <div style="margin:6px 0 6px 12px; line-height:1.9;">
              • D என்பது BC-ன் நடுப்புள்ளி என்பதால்: <b>BD = DC</b> ⇒ <b>BD / DC = 1</b> ---- (1)<br>
              • E என்பது CA-ன் நடுப்புள்ளி என்பதால்: <b>CE = EA</b> ⇒ <b>CE / EA = 1</b> ---- (2)<br>
              • F என்பது AB-ன் நடுப்புள்ளி என்பதால்: <b>AF = FB</b> ⇒ <b>AF / FB = 1</b> ---- (3)<br><br>
              சமன்பாடுகள் (1), (2) மற்றும் (3)-ஐப் பெருக்க:<br>
              <div style="margin:6px 0 6px 18px; font-weight:700; color:#1d4ed8; font-size:15px;">
                (BD / DC) × (CE / EA) × (AF / FB) = 1 × 1 × 1 = 1
              </div><br>
              சீவாஸின் தேற்றத்தின் மறுதலைப்படி, AD, BE மற்றும் CF என்ற நடுக்கோடுகள் <b>ஒரு புள்ளி வழிச் செல்பவை</b> ஆகும்!
            </div><br>

            <b>முறை 2: ஆயத்தொலை வடிவியல் முறை (கரும்பலகைத் தீர்வு):</b><br>
            <div style="margin:6px 0 6px 12px; line-height:1.9;">
              உச்சிகள் A(x₁, y₁), B(x₂, y₂), C(x₃, y₃) என்க.<br>
              பக்கங்களின் நடுப்புள்ளிகள் D((x₂+x₃)/2, (y₂+y₃)/2), E((x₁+x₃)/2, (y₁+y₃)/2), F((x₁+x₂)/2, (y₁+y₂)/2).<br>
              நடுக்கோடுகளை 2 : 1 என்ற விகிதத்தில் உட்புறமாகப் பிரிக்கும் புள்ளி:<br>
              <div style="margin:6px 0 6px 18px; font-weight:700; color:#15803d; font-size:15px;">
                G = ((x₁ + x₂ + x₃) / 3, (y₁ + y₂ + y₃) / 3)
              </div><br>
              மூன்று நடுக்கோடுகளும் ஒரே பொதுவான புள்ளி G வழியே செல்வதால், அவை ஒரு புள்ளியில் சந்திப்பவை ஆகும்.
            </div>

            <div style="margin-top:12px; padding:10px 14px; background:#f0fdf4; border:1.5px solid #22c55e; border-radius:8px; font-weight:700; text-align:center; color:#166534; font-size:16px;">
              ∴ நடுக்கோடுகள் AD, BE, CF ஆகியவை நடுக்கோட்டு மையம் G-ல் ஒரு புள்ளியில் சந்திக்கின்றன. (நிரூபிக்கப்பட்டது!)
            </div>
          </div>`,
          noVoice: true,
          ansTamil: "சீவாஸின் தேற்றத்தின் பெருக்கற்பலன் 1 என அமைவதால் நடுக்கோடுகள் ஒரு புள்ளி வழிச் செல்வது நிறுவப்பட்டது."
        },

        {
          id: "m_tm_4_2_4",
          type: "5m",
          mark: "5 மதிப்பெண்",
          examYear: "2024",
          examTag: "அரசு மாதிரி 5M",
          isImportant: true,
          q: "ஒரு செங்கோண முக்கோணத்தின் கர்ணமானது அதன் சிறிய பக்கத்தின் இருமடங்கை விட 6 மீ அதிகம். மூன்றாவது பக்கமானது கர்ணத்தை விட 2 மீ குறைவு எனில், முக்கோணத்தின் மூன்று பக்கங்களையும் காண்க.",
          diagramImg: "math_ch4_5m_q5_rt_triangle.jpg",
          diagramCaption: "கரும்பலகைத் தீர்வு: செங்கோண முக்கோணப் பக்கங்கள் (கர்ணம் 2x+6, பக்கங்கள் x, 2x+4) (தொட்டுப் பெரிதாகக் காண்க)",
          ans: `<div style="line-height:1.8;">
            <b>தீர்வு முறை:</b><br>
            • சிறிய பக்கம் = <b>x மீ</b> என்க.<br>
            • கர்ணம் = <b>(2x + 6) மீ</b><br>
            • மூன்றாவது பக்கம் = (2x + 6) - 2 = <b>(2x + 4) மீ</b><br><br>

            <b>பிதாகரஸ் தேற்றப்படி:</b><br>
            x² + (2x + 4)² = (2x + 6)²<br>
            x² + (4x² + 16x + 16) = 4x² + 24x + 36<br><br>

            <b>இருபடிச் சமன்பாட்டைச் சுருக்குதல்:</b><br>
            x² + 16x + 16 = 24x + 36<br>
            x² - 8x - 20 = 0<br><br>

            <b>காரணிப்படுத்துதல்:</b><br>
            (x - 10)(x + 2) = 0<br>
            x = 10 அல்லது x = -2<br>
            நீளம் எதிரெண்ணாக இருக்க முடியாது என்பதால் x = -2 நிராகரிக்கப்படுகிறது.<br>
            எனவே, <b>x = 10 மீ</b>.<br><br>

            <b>முக்கோணத்தின் மூன்று பக்கங்கள்:</b><br>
            1. சிறிய பக்கம் = x = <b>10 மீ</b><br>
            2. மூன்றாவது பக்கம் = 2(10) + 4 = <b>24 மீ</b><br>
            3. கர்ணம் = 2(10) + 6 = <b>26 மீ</b><br><br>

            <div style="margin-top:12px; padding:10px 14px; background:#f0fdf4; border:1.5px solid #22c55e; border-radius:8px; font-weight:700; text-align:center; color:#166534; font-size:16px;">
              விடை: முக்கோணத்தின் பக்கங்கள் 10 மீ, 24 மீ மற்றும் 26 மீ ஆகும்.
            </div>
          </div>`,
          noVoice: true,
          ansTamil: "இருபடிச் சமன்பாடு x² - 8x - 20 = 0-ஐத் தீர்ப்பதன் மூலம் பக்கங்கள் 10 மீ, 24 மீ, 26 மீ பெறப்படுகின்றன."
        },

        {
          id: "m_tm_4_2_5",
          type: "5m",
          mark: "5 மதிப்பெண்",
          examYear: "2023",
          examTag: "வடிவியல் 5M",
          isImportant: true,
          q: "5 செ.மீ ஆரமுள்ள வட்டத்தில் 6 செ.மீ நீளமுள்ள நாண் AB உள்ளது. A மற்றும் B வழியே செல்லும் தொடுகோடுகள் P-ல் சந்திக்கின்றன எனில், தொடுகோடு PA-ன் நீளம் காண்க.",
          diagramImg: "math_ch4_5m_q6_circle_tangent.jpg",
          diagramCaption: "கரும்பலகைத் தீர்வு: வட்டம் மற்றும் தொடுகோடு PA நீளம் காணுதல் (தொட்டுப் பெரிதாகக் காண்க)",
          ans: `<div style="line-height:1.8;">
            <b>கொடுக்கப்பட்டவை:</b><br>
            • வட்டத்தின் ஆரம் r = OA = 5 செ.மீ<br>
            • நாண் AB = 6 செ.மீ<br>
            • மையம் O மற்றும் P-ஐ இணைக்கும் கோடு OP ஆனது AB-க்கு மையக்குத்துக் கோடாகும்.<br>
            • எனவே, M என்பது AB-ன் நடுப்புள்ளி ⇒ <b>AM = 6 / 2 = 3 செ.மீ</b>.<br><br>

            <b>படி 1: செங்கோண ΔOAM-ல் OM-ன் நீளம் காணுதல்:</b><br>
            OM = √(OA² - AM²) = √(5² - 3²) = √(25 - 9) = √16 = <b>4 செ.மீ</b>.<br><br>

            <b>படி 2: செங்கோண வடிவொத்த முக்கோணங்கள் மூலம் PA காணுதல்:</b><br>
            ஆரம் தொடுபுள்ளியில் தொடுகோட்டிற்குச் செங்குத்து என்பதால் ∠OAP = 90°.<br>
            ΔAMP ~ ΔOMA என்பதால்:<br>
            <div style="margin:4px 0 4px 18px; font-weight:700; font-size:16px;">
              PA / OA = AM / OM
            </div><br>
            PA / 5 = 3 / 4<br>
            PA = (5 × 3) / 4 = 15 / 4 = <b>3.75 செ.மீ</b>.<br><br>

            <div style="margin-top:12px; padding:10px 14px; background:#f0fdf4; border:1.5px solid #22c55e; border-radius:8px; font-weight:700; text-align:center; color:#166534; font-size:16px;">
              விடை: தொடுகோடு PA-ன் நீளம் 3.75 செ.மீ ஆகும்.
            </div>
          </div>`,
          noVoice: true,
          ansTamil: "வடிவொத்த முக்கோணங்களைப் பயன்படுத்தி தொடுகோடு PA = 3.75 செ.மீ எனக் கணக்கிடப்பட்டது."
        },

        {
          id: "m_tm_4_2_6",
          type: "5m",
          mark: "5 மதிப்பெண்",
          examYear: "2024",
          examTag: "முக்கிய நிரூபணம் 5M",
          isImportant: true,
          q: "C-ல் செங்கோணத்தைக் கொண்டுள்ள ΔABC-ல் CA மற்றும் CB ஆகியவற்றின் நடுப்புள்ளிகள் முறையே P மற்றும் Q எனில், 4(AQ² + BP²) = 5AB² என நிறுவுக.",
          diagramImg: "math_ch4_5m_q7_midpoint_pythag.jpg",
          diagramCaption: "கரும்பலகைத் தீர்வு: நடுப்புள்ளி பயன்பாடு 4(AQ² + BP²) = 5AB² (தொட்டுப் பெரிதாகக் காண்க)",
          ans: `<div style="line-height:1.8;">
            <b>நிரூபணம்:</b><br>
            ΔABC-ல் ∠C = 90°. AC = a மற்றும் BC = b என்க.<br>
            P, Q என்பன நடுப்புள்ளிகள் என்பதால் CP = a/2 மற்றும் CQ = b/2.<br><br>

            <b>படி 1: செங்கோண ΔACQ-ல் பிதாகரஸ் தேற்றப்படி:</b><br>
            AQ² = AC² + CQ² = a² + (b/2)² = a² + b²/4 ---- (1)<br><br>

            <b>படி 2: செங்கோண ΔBCP-ல் பிதாகரஸ் தேற்றப்படி:</b><br>
            BP² = BC² + CP² = b² + (a/2)² = b² + a²/4 ---- (2)<br><br>

            <b>படி 3: சமன்பாடுகள் (1) மற்றும் (2)-ஐக் கூட்ட:</b><br>
            AQ² + BP² = (a² + b²/4) + (b² + a²/4)<br>
            AQ² + BP² = (5a²/4) + (5b²/4) = (5/4)(a² + b²)<br><br>

            <b>படி 4: 4-ஆல் பெருக்க:</b><br>
            4(AQ² + BP²) = 5(a² + b²)<br><br>
            செங்கோண ΔABC-ல் a² + b² = AB² என்பதால்:<br>
            <div style="margin:6px 0 6px 18px; font-weight:700; color:#15803d; font-size:16px;">
              4(AQ² + BP²) = 5AB²
            </div><br>

            <div style="margin-top:12px; padding:10px 14px; background:#f0fdf4; border:1.5px solid #22c55e; border-radius:8px; font-weight:700; text-align:center; color:#166534; font-size:16px;">
              ∴ 4(AQ² + BP²) = 5AB² என்பது நிறுவப்பட்டது!
            </div>
          </div>`,
          noVoice: true,
          ansTamil: "இரு செங்கோண முக்கோணங்களின் பிதாகரஸ் முடிவுகளைக் கூட்டி 4(AQ² + BP²) = 5AB² நிறுவப்பட்டது."
        },

        {
          id: "m_tm_4_2_7",
          type: "5m",
          mark: "5 மதிப்பெண்",
          examYear: "2024",
          examTag: "அரசுத் தேர்வுத் தேற்றம்",
          isImportant: true,
          q: "மாற்று வட்டத்துண்டுத் தேற்றத்தைக் (Alternate Segment Theorem) கூறி நிறுவுக.",
          diagramImg: "math_ch4_5m_q8_alternate_segment.jpg",
          diagramCaption: "கரும்பலகைத் தீர்வு: மாற்று வட்டத்துண்டுத் தேற்றம் நிரூபணம் (தொட்டுப் பெரிதாகக் காண்க)",
          ans: `<div style="line-height:1.8;">
            <div style="padding:10px 14px; background:#eff6ff; border-left:4px solid #2563eb; border-radius:6px; margin-bottom:12px;">
              <b>மாற்று வட்டத்துண்டுத் தேற்றம்:</b><br>
              <i>ஒரு வட்டத்தின் தொடுகோட்டின் தொடுபுள்ளி வழியே ஒரு நாண் வரையப்பட்டால், அந்த நாண் தொடுகோட்டுடன் ஏற்படுத்தும் கோணங்கள் முறையே அவற்றின் மாற்று வட்டத்துண்டுகளில் அமைந்த கோணங்களுக்குச் சமம்.</i>
            </div>

            <b>கொடுக்கப்பட்டது:</b><br>
            O-வை மையமாகக் கொண்ட வட்டத்தில் PA என்பது A என்ற புள்ளியிலுள்ள தொடுகோடு. AB ஒரு நாண். C என்பது மாற்று வட்டத்துண்டில் உள்ள புள்ளி.<br><br>

            <b>நிரூபிக்க வேண்டியது:</b><br>
            <div style="margin:6px 0 6px 18px; font-weight:700; font-size:16px; color:#1d4ed8;">
              ∠PAB = ∠ACB
            </div><br>

            <b>அமைப்பு:</b><br>
            A வழியே விட்டம் AD வரைக. BD-ஐ இணைக்க.<br><br>

            <b>நிரூபணம்:</b><br>
            1. விட்டம் தொடுகோட்டிற்குச் செங்குத்து என்பதால்: ∠PAD = 90°.<br>
            2. ∠PAB = 90° - ∠DAB ---- (1)<br>
            3. அரைவட்டத்தில் அமையும் கோணம் செங்கோணம் என்பதால் ∠ABD = 90°.<br>
            4. செங்கோண ΔABD-ல்: ∠ADB = 90° - ∠DAB ---- (2)<br>
            5. (1) மற்றும் (2)-லிருந்து: ∠PAB = ∠ADB ---- (3)<br>
            6. ஒரே வட்டத்துண்டில் அமையும் கோணங்கள் சமம் என்பதால்: ∠ADB = ∠ACB.<br>
            7. எனவே, <b>∠PAB = ∠ACB</b>.<br><br>

            <div style="margin-top:12px; padding:10px 14px; background:#f0fdf4; border:1.5px solid #22c55e; border-radius:8px; font-weight:700; text-align:center; color:#166534; font-size:16px;">
              ∴ ∠PAB = ∠ACB (மாற்று வட்டத்துண்டுத் தேற்றம் நிறுவப்பட்டது)
            </div>
          </div>`,
          noVoice: true,
          ansTamil: "அரைவட்டக் கோணம் மற்றும் தொடுபுள்ளி ஆரம் செங்குத்து பண்புகள் மூலம் மாற்று வட்டத்துண்டுத் தேற்றம் நிறுவப்பட்டது."
        },

        {
          id: "m_tm_4_2_8",
          type: "5m",
          mark: "5 மதிப்பெண்",
          examYear: "2023",
          examTag: "அடிப்படைத் தேற்றம் 5M",
          isImportant: true,
          q: "வட்டத்தின் தொடுகோடும், தொடுபுள்ளி வழியே செல்லும் ஆரமும் ஒன்றுக்கொன்று செங்குத்து என நிறுவுக.",
          diagramImg: "math_ch4_5m_q9_radius_perpendicular.jpg",
          diagramCaption: "கரும்பலகைத் தீர்வு: தொடுபுள்ளி ஆரம் OA ⊥ PQ தொடுகோடு (தொட்டுப் பெரிதாகக் காண்க)",
          ans: `<div style="line-height:1.8;">
            <div style="padding:10px 14px; background:#eff6ff; border-left:4px solid #2563eb; border-radius:6px; margin-bottom:12px;">
              <b>கூற்று:</b><br>
              <i>வட்டத்தின் தொடுகோடும், தொடுபுள்ளி வழியே செல்லும் ஆரமும் தொடுபுள்ளியில் ஒன்றுக்கொன்று செங்குத்தாக இருக்கும்.</i>
            </div>

            <b>கொடுக்கப்பட்டது:</b><br>
            மையம் O கொண்ட வட்டத்தில் A என்ற புள்ளியில் தொடுகோடு PQ வரையப்பட்டுள்ளது. OA என்பது தொடுபுள்ளி ஆரம்.<br><br>

            <b>நிரூபிக்க வேண்டியது:</b><br>
            <div style="margin:6px 0 6px 18px; font-weight:700; font-size:16px; color:#1d4ed8;">
              OA ⊥ PQ
            </div><br>

            <b>அமைப்பு:</b><br>
            PQ-ன் மீது A-ஐத் தவிர்த்து மற்றொரு புள்ளி Q-ஐக் குறிக்க. OQ-ஐ இணைக்க. இது வட்டத்தை R-ல் வெட்டட்டும்.<br><br>

            <b>நிரூபணம்:</b><br>
            1. PQ என்பது தொடுகோடு என்பதால், அது A என்ற ஒரே ஒரு புள்ளியில் மட்டுமே வட்டத்தைத் தொடும்.<br>
            2. எனவே, PQ-ன் மீதான மற்ற அனைத்துப் புள்ளிகளும் வட்டத்திற்கு வெளியில்தான் அமையும்.<br>
            3. Q வட்டத்திற்கு வெளியே அமைவதால், OQ > OR ஆகும்.<br>
            4. OR மற்றும் OA இரண்டும் ஒரே வட்டத்தின் ஆரங்கள் என்பதால் OR = OA.<br>
            5. எனவே, OQ > OA (அதாவது OA < OQ).<br>
            6. இது தொடுபுள்ளி A-ஐத் தவிர PQ-ன் மீதான அனைத்துப் புள்ளிகளுக்கும் பொருந்தும்.<br>
            7. எனவே, O-விலிருந்து PQ-க்கு வரையப்படும் கோட்டுத்துண்டுகளில் <b>OA மிகக் குறைந்த நீளமுடையது</b>.<br>
            8. ஒரு புள்ளியிலிருந்து ஒரு கோட்டிற்கு வரையப்படும் மிகக் குறைந்த தொலைவு செங்குத்துத் தொலைவே ஆகும்.<br>
            <div style="margin:6px 0 6px 18px; font-weight:700; color:#15803d; font-size:16px;">
              ∴ OA ⊥ PQ
            </div>

            <div style="margin-top:12px; padding:10px 14px; background:#f0fdf4; border:1.5px solid #22c55e; border-radius:8px; font-weight:700; text-align:center; color:#166534; font-size:16px;">
              ∴ தொடுபுள்ளி வழியே செல்லும் ஆரம் தொடுகோட்டிற்குச் செங்குத்து என்பது நிறுவப்பட்டது!
            </div>
          </div>`,
          noVoice: true,
          ansTamil: "மையத்திலிருந்து தொடுகோட்டிற்கு வரையப்படும் மிகக் குறைந்த தூரம் செங்குத்துத் தூரமே என்பதால் OA ⊥ PQ நிறுவப்பட்டது."
        },

        {
          id: "m_tm_4_1_6",
          type: "5m",
          mark: "5 மதிப்பெண்",
          examYear: "2024",
          examTag: "பயன்பாட்டுக் கணக்கு 5M",
          isImportant: true,
          q: "1.25 மீ உயரமுள்ள ஒரு பெண் தரையிலுள்ள கண்ணாடியிலிருந்து 2.5 மீ தொலைவில் நிற்கிறாள். அக்கண்ணாடி ஒரு விளக்குக் கம்பத்திலிருந்து 6.6 மீ தொலைவில் உள்ளது எனில், விளக்குக் கம்பத்தின் உயரம் காண்க.",
          diagramImg: "math_ch4_5m_q10_lamp_post.jpg",
          diagramCaption: "கரும்பலகைத் தீர்வு: வடிவொத்த முக்கோணங்கள் - விளக்குக் கம்பத்தின் உயரம் (தொட்டுப் பெரிதாகக் காண்க)",
          ans: `<div style="line-height:1.8;">
            <b>கொடுக்கப்பட்ட தகவல்கள்:</b><br>
            • பெண்ணின் உயரம் (CD) = 1.25 மீ<br>
            • பெண்ணிற்கும் கண்ணாடிக்கும் உள்ள தொலைவு (DM) = 2.5 மீ<br>
            • விளக்குக் கம்பத்திற்கும் கண்ணாடிக்கும் உள்ள தொலைவு (BM) = 6.6 மீ<br>
            • விளக்குக் கம்பத்தின் உயரம் (AB) = <b>h மீ</b> என்க.<br><br>

            <b>வடிவொத்த முக்கோணக் கோட்பாடு:</b><br>
            1. விளக்குக் கம்பமும் பெண்ணும் தரையில் செங்குத்தாக நிற்கின்றனர்:<br>
            ∠ABM = ∠CDM = 90°.<br>
            2. ஒளி எதிரொளிப்பு விதியின்படி (படுகோணம் = எதிரொளிப்புக் கோணம்):<br>
            ∠AMB = ∠CMD.<br>
            3. எனவே, <b>AA வடிவொத்த விதியின்படி</b>:<br>
            <div style="margin:4px 0 4px 18px; font-weight:700; color:#1d4ed8; font-size:15px;">
              ΔABM ~ ΔCDM
            </div><br>

            <b>ஒத்த பக்கங்களின் விகிதம்:</b><br>
            AB / CD = BM / DM<br><br>
            மதிப்புகளைப் பிரதியிட:<br>
            h / 1.25 = 6.6 / 2.5<br><br>
            2.5 × h = 1.25 × 6.6<br>
            h = (1.25 × 6.6) / 2.5<br>
            1.25 / 2.5 = 1 / 2 = 0.5 என்பதால்:<br>
            h = 6.6 / 2<br>
            <b style="color:#15803d; font-size:16px;">h = 3.3 மீ</b><br><br>

            <div style="margin-top:12px; padding:10px 14px; background:#f0fdf4; border:1.5px solid #22c55e; border-radius:8px; font-weight:700; text-align:center; color:#166534; font-size:16px;">
              விடை: விளக்குக் கம்பத்தின் உயரம் 3.3 மீட்டர்கள் ஆகும்.
            </div>
          </div>`,
          noVoice: true,
          ansTamil: "வடிவொத்த முக்கோணங்களின் விகிதத்தைப் பயன்படுத்தி விளக்குக் கம்பத்தின் உயரம் 3.3 மீ எனப் பெறப்படுகிறது."
        },

        {
          id: "m_tm_4_2_9",
          type: "5m",
          mark: "5 மதிப்பெண்",
          examYear: "முழுத் தொகுப்பு",
          examTag: "பெருங்கரும்பலகை",
          isImportant: true,
          q: "10-ஆம் வகுப்பு கணிதம் அலகு 4: வடிவியல் - முக்கிய 10 ஐந்து மதிப்பெண் வினா-விடைகள் பெருங்கரும்பலகைத் தொகுப்பு",
          diagramImg: "math_bb_ch4_all10.jpg",
          diagramCaption: "10-ஆம் வகுப்பு கணிதம் அலகு 4: வடிவியல் - முக்கிய 10 ஐந்து மதிப்பெண் வினா-விடைகள் பெருங்கரும்பலகை (தொட்டுப் பெரிதாகக் காண்க)",
          ans: `<div style="line-height:1.8;">
            <div style="padding:10px 14px; background:#eff6ff; border-left:4px solid #2563eb; border-radius:6px; margin-bottom:12px;">
              <b>அலகு 4 வடிவியல் - முக்கிய 10 ஐந்து மதிப்பெண் வினாக்களின் முழுமையான கரும்பலகைத் தொகுப்பு:</b><br>
              <i>அரசு பொதுத்தேர்வுக்குரிய 10 முக்கிய தேற்றங்கள், வரைபடங்கள் மற்றும் படிகளுடன் கூடிய தீர்வுகள் அனைத்தும் ஒரே கரும்பலகைக் காட்சியில்!</i>
            </div>

            <b>அடங்கியுள்ள 10 முக்கிய வினாக்களின் சுருக்கம்:</b><br>
            <ol style="margin:8px 0 12px 20px; line-height:2.0;">
              <li><b>கேள்வி 1: தேல்ஸ் தேற்றம் (அடிப்படை விகிதசமத் தேற்றம்):</b> ΔABC-ல் DE || BC எனில் AD/DB = AE/EC என நிறுவுதல்.</li>
              <li><b>கேள்வி 2: பிதாகரஸ் தேற்றம்:</b> செங்கோண ΔABC-ல் AC² = AB² + BC² என நிறுவுதல்.</li>
              <li><b>கேள்வி 3: கோண இருசமவெட்டித் தேற்றம்:</b> உட்புற இருசமவெட்டி AD-க்கு BD/DC = AB/AC என நிறுவுதல்.</li>
              <li><b>கேள்வி 4: நடுக்கோடுகள் ஒரு புள்ளியில் சந்திக்கும்:</b> சீவாஸின் தேற்றம் மற்றும் ஆயத்தொலைவு மூலம் நிறுவுதல்.</li>
              <li><b>கேள்வி 5: செங்கோண முக்கோணப் பக்கங்கள்:</b> கர்ணம் 2x+6, பக்கங்கள் x, 2x+4 கொண்டு 10 மீ, 24 மீ, 26 மீ காணுதல்.</li>
              <li><b>கேள்வி 6: வட்டம் மற்றும் தொடுகோடுகள்:</b> நாண் AB = 6 செ.மீ, ஆரம் 5 செ.மீ கொண்டு தொடுகோடு PA = 3.75 செ.மீ காணுதல்.</li>
              <li><b>கேள்வி 7: நடுப்புள்ளிப் பயன்பாடு:</b> செங்கோண முக்கோண நடுப்புள்ளிகளுக்கு 4(AQ² + BP²) = 5AB² என நிறுவுதல்.</li>
              <li><b>கேள்வி 8: மாற்று வட்டத்துண்டுத் தேற்றம்:</b> தொடுகோட்டு கோணம் = மாற்று வட்டத்துண்டு கோணம் (∠PAB = ∠ACB) நிறுவுதல்.</li>
              <li><b>கேள்வி 9: ஆரம் தொடுகோட்டிற்குச் செங்குத்து:</b> தொடுபுள்ளியில் OA ⊥ PQ என மிகக் குறைந்த தொலைவு விதி மூலம் நிறுவுதல்.</li>
              <li><b>கேள்வி 10: விளக்குக் கம்பத்தின் உயரம்:</b> கண்ணாடி பிரதிபலிப்பு வடிவொத்த முக்கோணங்கள் மூலம் h = 3.3 மீ காணுதல்.</li>
            </ol>

            <div style="margin-top:12px; padding:10px 14px; background:#f0fdf4; border:1.5px solid #22c55e; border-radius:8px; font-weight:700; text-align:center; color:#166534; font-size:15px;">
              💡 குறிப்பு: மேலே உள்ள கரும்பலகைப் படத்தை தொட்டுப் பெரிதாக்கி அனைத்து 10 வினாக்களையும் உயர் தெளிவுத்திறனில் படிக்கலாம்!
            </div>
          </div>`,
          noVoice: true,
          ansTamil: "அலகு 4 வடிவியலின் 10 முக்கிய 5 மதிப்பெண் வினா-விடைகளின் முழுமையான தொகுப்பு."
        }
      ]
    },
    {
      id: "sec_m_tm_4_2",
      title: "பகுதி 2: 1 & 2 மதிப்பெண் பயிற்சி வினாக்கள் (பயிற்சி 4.1 முதல் 4.4 வரை)",
      author: "அலகு 4: வடிவியல் - 1M & 2M அடிப்படைக் கணக்குகள்",
      questions: [
        {
          id: "m_tm_4_1_1",
          type: "1m",
          mark: "1 மதிப்பெண்",
          examTag: "அரசு மாதிரி",
          q: "ΔABC-யில் DE || BC. AD = 4 செ.மீ, DB = 6 செ.மீ மற்றும் AE = 5 செ.மீ எனில் EC-ன் மதிப்பு காண்க.",
          options: ["அ) 6.5 செ.மீ", "ஆ) 7.5 செ.மீ", "இ) 8 செ.மீ", "ஈ) 9 செ.மீ"],
          ans: "விடை: <b>ஆ) 7.5 செ.மீ</b><br>விளக்கம்: தேல்ஸ் தேற்றப்படி AD/DB = AE/EC. 4/6 = 5/EC ⇒ EC = (5 × 6) / 4 = 30 / 4 = <b>7.5 செ.மீ</b>.",
          ansTamil: "அடிப்படை விகிதசமத் தேற்றத்தைப் பயன்படுத்தி EC = 7.5 செ.மீ எனப் பெறப்படுகிறது."
        },

        {
          id: "m_tm_4_1_2",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examYear: "2023",
          examTag: "2023*",
          q: "ΔABC-யில் ∠A-ன் இருசமவெட்டி AD ஆனது BC-ஐ D-யில் சந்திக்கிறது. AB = 8 செ.மீ, AC = 6 செ.மீ மற்றும் BD = 4 செ.மீ எனில் DC-ன் நீளம் காண்க.",
          ans: `<div style="line-height:1.8;">
            <b>தீர்வு:</b><br>
            கோண இருசமவெட்டித் தேற்றத்தின்படி (ABT):<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">BD / DC = AB / AC</div><br>
            கொடுக்கப்பட்ட மதிப்புகளைப் பிரதியிட:<br>
            4 / DC = 8 / 6<br>
            4 / DC = 4 / 3<br>
            குறுக்குப் பெருக்கல் செய்ய:<br>
            4 × DC = 4 × 3<br>
            <b>DC = 3 செ.மீ</b>
          </div>`,
          ansTamil: "கோண இருசமவெட்டித் தேற்றப்படி எதிர்பக்கத்தின் விகிதம் மற்ற இரு பக்கங்களின் விகிதத்திற்கு சமமாக DC = 3 செ.மீ கிடைக்கிறது."
        },

        {
          id: "m_tm_4_2_1",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "வட்டத்தின் மையத்திலிருந்து 10 செ.மீ தொலைவில் உள்ள புள்ளியிலிருந்து வட்டத்திற்கு வரையப்பட்ட தொடுகோட்டின் நீளம் 8 செ.மீ எனில், வட்டத்தின் ஆரம் காண்க.",
          options: ["அ) 4 செ.மீ", "ஆ) 5 செ.மீ", "இ) 6 செ.மீ", "ஈ) 7 செ.மீ"],
          ans: "விடை: <b>இ) 6 செ.மீ</b><br>விளக்கம்: தொடுபுள்ளியில் ஆரம் தொடுகோட்டிற்குச் செங்குத்து. பிதாகரஸ் தேற்றப்படி ஆரம் r = √(10² - 8²) = √(100 - 64) = √36 = <b>6 செ.மீ</b>.",
          ansTamil: "செங்கோண முக்கோணத்தில் r = √(100 - 64) = 6 செ.மீ கிடைக்கிறது."
        },

        {
          id: "m_tm_4_2_2",
          type: "2m",
          mark: "2 மதிப்பெண்",
          q: "ஒரு மனிதர் தொடக்கப் புள்ளியிலிருந்து 18 மீ கிழக்கு நோக்கியும், பின்னர் 24 மீ வடக்கு நோக்கியும் செல்கிறார். அவர் தொடங்கிய இடத்திலிருந்து உள்ள தூரத்தைக் காண்க.",
          ans: `<div style="line-height:1.8;">
            <b>தீர்வு:</b><br>
            கிழக்கு மற்றும் வடக்கு திசைகள் செங்குத்தானவை (90° கோணம்).<br>
            பிதாகரஸ் தேற்றப்படி தேவையான தொலைவு d = √(18² + 24²)<br>
            d = √(324 + 576) = √900<br>
            <b>d = 30 மீ</b><br>
            எனவே, அவர் தொடக்க இடத்திலிருந்து 30 மீ தொலைவில் உள்ளார்.
          </div>`,
          ansTamil: "செங்கோண முக்கோணக் கர்ணம் = √(324 + 576) = 30 மீ."
        }
      ]
    }
  ]
};