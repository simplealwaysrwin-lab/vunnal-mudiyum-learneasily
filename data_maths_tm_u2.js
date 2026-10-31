// 10-ஆம் வகுப்பு கணிதம் - அலகு 2: எண்களும் தொடர்வரிசைகளும் (Numbers and Sequences)
// தமிழ்நாடு சமச்சீர் கல்வி வினா-விடை வழிகாட்டி (தமிழ் வழி)
// அரசுப் பொதுத்தேர்வுக்கான மிக முக்கியமான வினா-விடைகள், கரும்பலகை விளக்கங்கள், சூத்திரங்கள்

const MATHS_TM_UNIT_2_DATA = {
  unitId: "math_tm_u2",
  unitName: "அலகு 2: எண்களும் தொடர்வரிசைகளும்",
  subject: "கணிதம் (தமிழ் வழி)",
  syllabus: "தமிழ்நாடு அரசு சமச்சீர் கல்வி 10-ஆம் வகுப்பு கணிதம்",

  // முக்கிய சூத்திரங்கள் & பண்புகள்
  formulas: [
    { title: "யூக்ளிடின் வகுத்தல் துணைத்தேற்றம்", rule: "a = bq + r, இங்கு 0 ≤ r < b (a: வகுபடும் எண், b: வகுக்கும் எண், q: ஈவு, r: மீதி)" },
    { title: "மட்டு எண்கணிதம் (Modular Arithmetic)", rule: "a ≡ b (mod m) எனில் a - b ஆனது m-ன் மடங்கு ஆகும் (a - b = km)" },
    { title: "கூட்டுத்தொடர்வரிசை (AP) - n-ஆம் உறுப்பு", rule: "tₙ = a + (n - 1)d, இங்கு a = முதல் உறுப்பு, d = t₂ - t₁ (பொது வித்தியாசம்)" },
    { title: "கூட்டுத்தொடர்வரிசை - உறுப்புகளின் எண்ணிக்கை", rule: "n = [(l - a) / d] + 1, இங்கு l = கடைசி உறுப்பு" },
    { title: "கூட்டுத்தொடர்வரிசை - முதல் n உறுப்புகளின் கூடுதல்", rule: "Sₙ = (n / 2) [2a + (n - 1)d] அல்லது Sₙ = (n / 2) [a + l]" },
    { title: "பெருக்குத்தொடர்வரிசை (GP) - n-ஆம் உறுப்பு", rule: "tₙ = a · rⁿ⁻¹, இங்கு r = t₂ / t₁ (பொது விகிதம்)" },
    { title: "பெருக்குத்தொடர்வரிசை - முதல் n உறுப்புகளின் கூடுதல்", rule: "Sₙ = a(rⁿ - 1) / (r - 1) (r ≠ 1)" },
    { title: "சிறப்புத் தொடர்கள் (முதல் n இயல் எண்கள்)", rule: "1 + 2 + 3 + ... + n = n(n + 1) / 2" },
    { title: "சிறப்புத் தொடர்கள் (இயல் எண்களின் வர்க்கங்கள்)", rule: "1² + 2² + 3² + ... + n² = n(n + 1)(2n + 1) / 6" },
    { title: "சிறப்புத் தொடர்கள் (இயல் எண்களின் கனங்கள்)", rule: "1³ + 2³ + 3³ + ... + n³ = [n(n + 1) / 2]² = (Σn)²" }
  ],

  subSections: [
    // -------------------------------------------------------------
    // பகுதி 1: யூக்ளிடின் வகுத்தல் துணைத்தேற்றம் (பயிற்சி 2.1 & 2.2)
    // -------------------------------------------------------------
    {
      id: "sec_tm_2_1",
      title: "பயிற்சி 2.1 & 2.2: யூக்ளிடின் வகுத்தல் துணைத்தேற்றம் & அடிப்படை எண்ணியல் தேற்றம்",
      author: "அத்தியாயம் 2: எண்களும் தொடர்வரிசைகளும்",
      questions: [
        {
          id: "m_tm_2_1",
          type: "1m",
          mark: "1 மதிப்பெண்",
          examTag: "அரசு மாதிரி",
          q: "யூக்ளிடின் வகுத்தல் துணைத்தேற்றத்தின்படி, a மற்றும் b என்ற மிகை முழுக்களுக்கு a = bq + r எனில் r பூர்த்தி செய்யும் நிபந்தனை யாது?",
          options: ["அ) 0 < r < b", "ஆ) 0 ≤ r ≤ b", "இ) 0 ≤ r < b", "ஈ) 0 < r ≤ b"],
          ans: "விடை: <b>இ) 0 ≤ r < b</b>. யூக்ளிடின் வகுத்தல் துணைத்தேற்றத்தின்படி மீதி r எப்போதுமே பூஜ்ஜியமாகவோ அல்லது பூஜ்ஜியத்தை விடப் பெரியதாகவோ மற்றும் வகுக்கும் எண் b-ஐ விடச் சிறியதாகவோ அமையும்.",
          ansTamil: "மீதி எப்போதுமே வகுக்கும் எண்ணை விடக் குறைவாகவும், பூஜ்ஜியம் அல்லது மிகை எண்ணாகவும் இருக்கும்."
        },
        {
          id: "m_tm_2_mcq_2",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "13824 = 2ᵃ × 3ᵇ எனில் a மற்றும் b-யின் மதிப்புகள் யாவை?",
          options: ["அ) a = 9, b = 3", "ஆ) a = 7, b = 3", "இ) a = 8, b = 2", "ஈ) a = 6, b = 4"],
          ans: "விடை: <b>அ) a = 9, b = 3</b>. 13824 = 2⁹ × 3³ = 512 × 27 = 13824.",
          ansTamil: "பகா காரணிப்படுத்தும்போது 2⁹ × 3³ கிடைக்கும்."
        },
        {
          id: "m_tm_2_mcq_3",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "1 முதல் 10 வரையுள்ள அனைத்து எண்களாலும் (இரண்டும் உட்பட) மீதியின்றி வகுபடும் மிகச்சிறிய மிகை முழு எது?",
          options: ["அ) 100", "ஆ) 504", "இ) 2520", "ஈ) 5040"],
          ans: "விடை: <b>இ) 2520</b>. மீ.சி.ம(1 முதல் 10 வரை) = 2³ × 3² × 5 × 7 = 2520.",
          ansTamil: "1 முதல் 10 வரையிலான எண்களின் மீ.சி.ம 2520."
        },
        {
          id: "m_tm_2_mcq_4",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "7 × 11 × 13 + 13 என்ற எண்ணை 13-ஆல் வகுக்கும்போது கிடைக்கும் மீதி யாது?",
          options: ["அ) 1", "ஆ) 0", "இ) 7", "ஈ) 11"],
          ans: "விடை: <b>ஆ) 0</b>. 7 × 11 × 13 + 13 = 13 × (77 + 1) = 13 × 78, இது 13-ஆல் மீதியின்றி வகுபடும்.",
          ansTamil: "13 பொதுக் காரணியாக இருப்பதால் மீதி 0."
        },
        {
          id: "m_tm_2_mcq_5",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "ஒரு கூட்டுத்தொடர் வரிசையின் முதல் உறுப்பு 5 மற்றும் பொது வித்தியாசம் 3 எனில், அதன் 10-வது உறுப்பு t₁₀ யாது?",
          options: ["அ) 30", "ஆ) 32", "இ) 35", "ஈ) 28"],
          ans: "விடை: <b>ஆ) 32</b>. tₙ = a + (n - 1)d. t₁₀ = 5 + (10 - 1) × 3 = 5 + 27 = 32.",
          ansTamil: "10-வது உறுப்பு = 32."
        },
        {
          id: "m_tm_2_mcq_6",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "முதல் n இயல் எண்களின் கூடுதல் 1 + 2 + 3 + ... + n என்பது:",
          options: ["அ) n²", "ஆ) n(n + 1) / 2", "இ) [n(n + 1) / 2]²", "ஈ) n(2n + 1)"],
          ans: "விடை: <b>ஆ) n(n + 1) / 2</b>. முதல் n இயல் எண்களின் கூடுதல் Sₙ = n(n + 1) / 2.",
          ansTamil: "இயல் எண்களின் கூடுதல் n(n + 1) / 2."
        },
        {
          id: "m_tm_2_mcq_7",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "முதல் n ஒற்றை இயல் எண்களின் கூடுதல் 1 + 3 + 5 + ... + (2n - 1) என்பது:",
          options: ["அ) 2n - 1", "ஆ) n(n + 1)", "இ) n²", "ஈ) n(n - 1)"],
          ans: "விடை: <b>இ) n²</b>. முதல் n ஒற்றை இயல் எண்களின் கூடுதல் எப்போதுமே n² ஆகும்.",
          ansTamil: "ஒற்றை இயல் எண்களின் கூடுதல் n²."
        },
        {
          id: "m_tm_2_mcq_8",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "a, b, c என்பன ஒரு கூட்டுத்தொடர் வரிசையில் அமைந்தால் அவற்றுக்கிடையேயான தொடர்பு யாது?",
          options: ["அ) b² = ac", "ஆ) 2b = a + c", "இ) b = a + c", "ஈ) 2a = b + c"],
          ans: "விடை: <b>ஆ) 2b = a + c</b>. பொது வித்தியாசம் d = b - a = c - b எனில் 2b = a + c.",
          ansTamil: "கூட்டுத்தொடரில் நடு உறுப்பின் இருமடங்கு மற்ற இரு உறுப்புகளின் கூடுதலுக்குச் சமம்."
        },
        {
          id: "m_tm_2_mcq_9",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "3/16, 1/8, 1/12, 1/18, ... என்ற பெருக்குத்தொடர் வரிசையின் அடுத்த உறுப்பு யாது?",
          options: ["அ) 1/24", "ஆ) 1/27", "இ) 2/27", "ஈ) 1/36"],
          ans: "விடை: <b>ஆ) 1/27</b>. பொது விகிதம் r = (1/8) / (3/16) = 2/3. அடுத்த உறுப்பு = (1/18) × (2/3) = 1/27.",
          ansTamil: "அடுத்த உறுப்பு = 1/27."
        },
        {
          id: "m_tm_2_mcq_10",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "8x ≡ 1 (மட்டு 11) என்ற ஒருங்கிசைவை நிறைவு செய்யும் x-ன் மிகச்சிறிய மிகை முழு யாது?",
          options: ["அ) 7", "ஆ) 5", "இ) 3", "ஈ) 2"],
          ans: "விடை: <b>அ) 7</b>. x = 7 எனில் 8(7) = 56; 56 - 1 = 55 = 11 × 5.",
          ansTamil: "மிகச்சிறிய மிகை முழு 7."
        },
        {
          id: "m_tm_2_2",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examYear: "2023",
          examTag: "2023*",
          isImportant: true,
          q: "யூக்ளிடின் வகுத்தல் வழிமுறையைப் பயன்படுத்தி 340 மற்றும் 412 ஆகியவற்றின் மீப்பெரு பொது வகுத்தி (மீ.பொ.வ / HCF) காண்க.",
          ans: `<div style="line-height:1.8;">
            <b>படிமுறைத் தீர்வு (Step-by-Step Evaluation):</b><br><br>
            யூக்ளிடின் வகுத்தல் வழிமுறை சூத்திரம்:<br>
            <div style="background:var(--bg-page); padding:8px 12px; border-radius:8px; border-left:3px solid var(--primary); margin:6px 0; font-weight:700;">
              வகுபடும் எண் (a) = வகுக்கும் எண் (b) × ஈவு (q) + மீதி (r), இங்கு 0 ≤ r &lt; b
            </div>
            மீதி 0 ஆகும் வரை இம்முறையை நாம் படிப் படியாகப் பயன்படுத்துவோம்.<br><br>
            <b>படி 1:</b> 412 &gt; 340 என்பதால், 412-ஐ 340-ஆல் வகுக்க:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<b>412 = 340 × 1 + 72</b> (மீதி 72 ≠ 0)<br><br>
            <b>படி 2:</b> இப்போது புதிய வகுபடும் எண் 340 மற்றும் வகுக்கும் எண் 72-க்கு தேற்றத்தைப் பயன்படுத்த:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<b>340 = 72 × 4 + 52</b> (மீதி 52 ≠ 0)<br><br>
            <b>படி 3:</b> 72 மற்றும் 52-க்கு தேற்றத்தைப் பயன்படுத்த:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<b>72 = 52 × 1 + 20</b> (மீதி 20 ≠ 0)<br><br>
            <b>படி 4:</b> 52 மற்றும் 20-க்கு தேற்றத்தைப் பயன்படுத்த:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<b>52 = 20 × 2 + 12</b> (மீதி 12 ≠ 0)<br><br>
            <b>படி 5:</b> 20 மற்றும் 12-க்கு தேற்றத்தைப் பயன்படுத்த:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<b>20 = 12 × 1 + 8</b> (மீதி 8 ≠ 0)<br><br>
            <b>படி 6:</b> 12 மற்றும் 8-க்கு தேற்றத்தைப் பயன்படுத்த:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<b>12 = 8 × 1 + 4</b> (மீதி 4 ≠ 0)<br><br>
            <b>படி 7:</b> 8 மற்றும் 4-க்கு தேற்றத்தைப் பயன்படுத்த:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<b>8 = 4 × 2 + 0</b> (மீதி தற்போது 0 ஆகிவிட்டது!)<br><br>
            இந்த இறுதிப் படிநிலையில் உள்ள வகுக்கும் எண் <b>4</b> ஆகும்.<br>
            <div style="background:#dcfce7; color:#15803d; padding:10px 14px; border-radius:8px; font-weight:800; font-size:15px; margin-top:8px;">
              எனவே, 340 மற்றும் 412 ஆகியவற்றின் மீப்பெரு பொது வகுத்தி (மீ.பொ.வ / HCF) 4 ஆகும்.
            </div>
          </div>`,
          ansTamil: "மீதி பூஜ்ஜியம் வரும் வரை தொடர்ந்து வகுக்க வேண்டும். பூஜ்ஜியம் வரும் படிநிலையின் வகுக்கும் எண்ணே மீ.பொ.வ ஆகும்.",
          blackboard: {
            title: "யூக்ளிடின் வகுத்தல் வழிமுறை: 340 மற்றும் 412-ன் மீ.பொ.வ",
            engTitle: "Euclid's Division Algorithm: Step-by-Step Teaching",
            steps: [
              {
                stepNum: 0,
                badge: "📐 அடிப்படைக் கருத்து & சூத்திரம்",
                badgeEn: "📐 Concept & Formula",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">யூக்ளிடின் வகுத்தல் துணைத்தேற்றம் (சூத்திரம்)</div>
                  <div class="bb-box-cyan">
                    <div class="bb-box-title" style="color:#67e8f9;">அடிப்படைச் சமன்பாடு:</div>
                    <div class="bb-line" style="font-size:16px; font-weight:800; color:#ffffff; margin:6px 0;">
                      வகுபடும் எண் (a) = வகுக்கும் எண் (b) × ஈவு (q) + மீதி (r)
                    </div>
                    <div class="bb-line" style="color:#fde047; font-size:15px; font-weight:700;">
                      இங்கு 0 ≤ r &lt; b
                    </div>
                  </div>
                  <div class="bb-box-yellow" style="margin-top:10px;">
                    <div class="bb-line" style="font-size:14px; color:#ffffff; line-height:1.6;">
                      💡 மீதி <b>r</b> பூஜ்ஜியம் (0) ஆகும் வரை நாம் இந்த வகுத்தல் படிநிலைகளைத் தொடர்ந்து செய்வோம்.
                    </div>
                  </div>
                `,
                audioScriptTa: "கவனிப்போம்: யூக்ளிடின் வகுத்தல் துணைத்தேற்ற சூத்திரம்: வகுபடும் எண் a சமம் வகுக்கும் எண் b பெருக்கல் ஈவு q கூட்டல் மீதி r; இங்கு மீதி r பூஜ்ஜியம் அல்லது பூஜ்ஜியத்தை விடப் பெரியது மற்றும் b-ஐ விடச் சிறியது. மீதி பூஜ்ஜியம் வரும் வரை நாம் இந்தப் படிநிலைகளைத் தொடர்ந்து செய்வோம்.",
                audioScriptEn: "Let us understand the step-by-step evaluation. Euclid's division algorithm is based on: Dividend a equals Divisor b times Quotient q plus Remainder r, where 0 <= r < b. We apply this until the remainder becomes 0."
              },
              {
                stepNum: 1,
                badge: "① படி 1: 412-ஐ 340-ஆல் வகுத்தல்",
                badgeEn: "① Step 1: Divide 412 by 340",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">படி 1: முதல் வகுத்தல்</div>
                  <div class="bb-box-blue">
                    <div class="bb-line">எண்களை ஒப்பிட: <b>412 &gt; 340</b></div>
                    <div class="bb-line" style="font-size:14px; color:#93c5fd; margin-top:4px;">412-ஐ 340-ஆல் வகுப்போம்:</div>
                    <div class="bb-line" style="font-size:20px; font-weight:800; color:#ffffff; margin:8px 0;">
                      412 = 340 × 1 + 72
                    </div>
                    <div class="bb-pill-cyan" style="font-size:14px; font-weight:700; color:#fde047;">
                      ஈவு q = 1, மீதி r = 72 ≠ 0
                    </div>
                  </div>
                `,
                audioScriptTa: "படி ஒன்று: இங்கு 412 என்பது 340-ஐ விடப் பெரியது. எனவே 412-ஐ 340-ஆல் வகுப்போம். 340 ஒரு முறை அடங்கும், மீதி 72 வரும். 412 சமம் 340 பெருக்கல் 1 கூட்டல் 72. இங்கு மீதி 72 பூஜ்ஜியம் அல்ல. எனவே அடுத்த படிக்குச் செல்வோம்.",
                audioScriptEn: "Step 1: Since 412 is greater than 340, we divide 412 by 340. 412 equals 340 times 1 plus 72. The remainder is 72, which is not 0."
              },
              {
                stepNum: 2,
                badge: "② படி 2: 340 மற்றும் 72-ஐ வகுத்தல்",
                badgeEn: "② Step 2: Apply to 340 and 72",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">படி 2: இரண்டாம் வகுத்தல்</div>
                  <div class="bb-box-cyan">
                    <div class="bb-line">புதிய வகுபடும் எண் <b>340</b>, வகுக்கும் எண் <b>72</b>:</div>
                    <div class="bb-line" style="font-size:20px; font-weight:800; color:#ffffff; margin:8px 0;">
                      340 = 72 × 4 + 52
                    </div>
                    <div class="bb-pill-cyan" style="font-size:14px; font-weight:700; color:#fde047;">
                      ஈவு q = 4, மீதி r = 52 ≠ 0
                    </div>
                  </div>
                `,
                audioScriptTa: "படி இரண்டு: இப்போது முந்தைய வகுக்கும் எண் 340-ஐ வகுபடும் எண்ணாகவும், மீதி 72-ஐ வகுக்கும் எண்ணாகவும் கொள்வோம். 340 சமம் 72 பெருக்கல் 4 கூட்டல் 52. இங்கு மீதி 52 பூஜ்ஜியம் அல்ல.",
                audioScriptEn: "Step 2: Apply lemma to new dividend 340 and divisor 72. 340 equals 72 times 4 plus 52. Remainder is 52, which is not zero."
              },
              {
                stepNum: 3,
                badge: "③ படி 3: 72 மற்றும் 52-ஐ வகுத்தல்",
                badgeEn: "③ Step 3: Apply to 72 and 52",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">படி 3: மூன்றாம் வகுத்தல்</div>
                  <div class="bb-box-blue">
                    <div class="bb-line">வகுபடும் எண் <b>72</b>, வகுக்கும் எண் <b>52</b>:</div>
                    <div class="bb-line" style="font-size:20px; font-weight:800; color:#ffffff; margin:8px 0;">
                      72 = 52 × 1 + 20
                    </div>
                    <div class="bb-pill-cyan" style="font-size:14px; font-weight:700; color:#fde047;">
                      ஈவு q = 1, மீதி r = 20 ≠ 0
                    </div>
                  </div>
                `,
                audioScriptTa: "படி மூன்று: அடுத்ததாக 72 மற்றும் 52-க்குத் தேற்றத்தைப் பொருத்துவோம். 72-ல் 52 ஒரு முறை அடங்கும், மீதி 20 கிடைக்கும். 72 சமம் 52 பெருக்கல் 1 கூட்டல் 20. இங்கு மீதி 20 பூஜ்ஜியம் அல்ல.",
                audioScriptEn: "Step 3: Apply lemma to 72 and 52. 72 equals 52 times 1 plus 20. Remainder is 20, not zero."
              },
              {
                stepNum: 4,
                badge: "④ படி 4: 52 மற்றும் 20-ஐ வகுத்தல்",
                badgeEn: "④ Step 4: Apply to 52 and 20",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">படி 4: நான்காம் வகுத்தல்</div>
                  <div class="bb-box-cyan">
                    <div class="bb-line">வகுபடும் எண் <b>52</b>, வகுக்கும் எண் <b>20</b>:</div>
                    <div class="bb-line" style="font-size:20px; font-weight:800; color:#ffffff; margin:8px 0;">
                      52 = 20 × 2 + 12
                    </div>
                    <div class="bb-pill-cyan" style="font-size:14px; font-weight:700; color:#fde047;">
                      ஈவு q = 2, மீதி r = 12 ≠ 0
                    </div>
                  </div>
                `,
                audioScriptTa: "படி நான்கு: இப்போது 52-ஐ 20-ஆல் வகுப்போம். 20 இரண்டு முறை அடங்கி 40 ஆகும், மீதி 12 வரும். 52 சமம் 20 பெருக்கல் 2 கூட்டல் 12. இங்கு மீதி 12 பூஜ்ஜியம் அல்ல.",
                audioScriptEn: "Step 4: Apply lemma to 52 and 20. 52 equals 20 times 2 plus 12. Remainder is 12, not zero."
              },
              {
                stepNum: 5,
                badge: "⑤ படி 5: 20 மற்றும் 12-ஐ வகுத்தல்",
                badgeEn: "⑤ Step 5: Apply to 20 and 12",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">படி 5: ஐந்தாம் வகுத்தல்</div>
                  <div class="bb-box-blue">
                    <div class="bb-line">வகுபடும் எண் <b>20</b>, வகுக்கும் எண் <b>12</b>:</div>
                    <div class="bb-line" style="font-size:20px; font-weight:800; color:#ffffff; margin:8px 0;">
                      20 = 12 × 1 + 8
                    </div>
                    <div class="bb-pill-cyan" style="font-size:14px; font-weight:700; color:#fde047;">
                      ஈவு q = 1, மீதி r = 8 ≠ 0
                    </div>
                  </div>
                `,
                audioScriptTa: "படி ஐந்து: அடுத்து 20-ஐ 12-ஆல் வகுப்போம். 12 ஒரு முறை அடங்கும், மீதி 8 கிடைக்கும். 20 சமம் 12 பெருக்கல் 1 கூட்டல் 8. இங்கு மீதி 8 பூஜ்ஜியம் அல்ல.",
                audioScriptEn: "Step 5: Apply lemma to 20 and 12. 20 equals 12 times 1 plus 8. Remainder is 8, not zero."
              },
              {
                stepNum: 6,
                badge: "⑥ படி 6: 12 மற்றும் 8-ஐ வகுத்தல்",
                badgeEn: "⑥ Step 6: Apply to 12 and 8",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">படி 6: ஆறாம் வகுத்தல்</div>
                  <div class="bb-box-cyan">
                    <div class="bb-line">வகுபடும் எண் <b>12</b>, வகுக்கும் எண் <b>8</b>:</div>
                    <div class="bb-line" style="font-size:20px; font-weight:800; color:#ffffff; margin:8px 0;">
                      12 = 8 × 1 + 4
                    </div>
                    <div class="bb-pill-cyan" style="font-size:14px; font-weight:700; color:#fde047;">
                      ஈவு q = 1, மீதி r = 4 ≠ 0
                    </div>
                  </div>
                `,
                audioScriptTa: "படி ஆறு: இப்போது 12-ஐ 8-ஆல் வகுப்போம். 8 ஒரு முறை அடங்கும், மீதி 4 வரும். 12 சமம் 8 பெருக்கல் 1 கூட்டல் 4. இங்கு மீதி 4 பூஜ்ஜியம் அல்ல.",
                audioScriptEn: "Step 6: Apply lemma to 12 and 8. 12 equals 8 times 1 plus 4. Remainder is 4, not zero."
              },
              {
                stepNum: 7,
                badge: "⑦ படி 7: 8 மற்றும் 4-ஐ வகுத்தல் (மீதி = 0)",
                badgeEn: "⑦ Step 7: Apply to 8 and 4 (Remainder = 0)",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">படி 7: இறுதி வகுத்தல்</div>
                  <div class="bb-box-green">
                    <div class="bb-line">வகுபடும் எண் <b>8</b>, வகுக்கும் எண் <b>4</b>:</div>
                    <div class="bb-line" style="font-size:22px; font-weight:800; color:#ffffff; margin:8px 0;">
                      8 = 4 × 2 + 0
                    </div>
                    <div class="bb-pill-magenta" style="font-size:15px; font-weight:800; color:#86efac; margin-top:8px;">
                      🎉 மீதி தற்போது 0 ஆகிவிட்டது!
                    </div>
                  </div>
                `,
                audioScriptTa: "படி ஏழு: இறுதியாக 8-ஐ 4-ஆல் வகுப்போம். 4 இரண்டு முறை சரியாக அடங்கி மீதி பூஜ்ஜியம் கிடைக்கிறது! 8 சமம் 4 பெருக்கல் 2 கூட்டல் 0. மீதி பூஜ்ஜியம் வந்துவிட்டது!",
                audioScriptEn: "Step 7: Apply lemma to 8 and 4. 8 equals 4 times 2 plus 0. The remainder has now become 0!"
              },
              {
                stepNum: 8,
                badge: "🏆 இறுதி முடிவு & மீ.பொ.வ",
                badgeEn: "🏆 Final Conclusion & HCF",
                chalkHtml: `
                  <div class="bb-box-yellow">
                    <div class="bb-box-title" style="color:#fde047; font-size:16px;">இறுதி முடிவு:</div>
                    <div class="bb-line" style="font-size:15px; color:#ffffff; margin-top:6px; line-height:1.6;">
                      மீதி பூஜ்ஜியம் வரும் இந்த இறுதிப் படிநிலையில் உள்ள வகுக்கும் எண் <b>4</b> ஆகும்.
                    </div>
                    <div class="bb-pill-magenta" style="font-size:20px; font-weight:800; margin-top:14px; text-align:center;">
                      மீ.பொ.வ (340, 412) = 4
                    </div>
                  </div>
                `,
                audioScriptTa: "முடிவு: மீதி பூஜ்ஜியம் வரும் இந்த இறுதிப் படிநிலையில் உள்ள வகுக்கும் எண் 4 ஆகும். எனவே, 340 மற்றும் 412 ஆகியவற்றின் மீப்பெரு பொது வகுத்தி 4 ஆகும்.",
                audioScriptEn: "Conclusion: The divisor at this final stage is 4, which is the required HCF. Highest Common Factor of 340 and 412 is 4."
              }
            ]
          }
        },
        {
          id: "m_tm_2_3",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examYear: "2022",
          examTag: "2022*",
          q: "13824 = 2ᵃ × 3ᵇ எனில், a மற்றும் b ஆகியவற்றின் மதிப்பைக் காண்க.",
          ans: `<div style="line-height:1.8;">
            <b>தீர்வு:</b><br>
            13824-ஐப் பகா காரணிப்படுத்துதல்:<br>
            13824 ÷ 2 = 6912<br>
            6912 ÷ 2 = 3456<br>
            3456 ÷ 2 = 1728<br>
            1728 ÷ 2 = 864<br>
            864 ÷ 2 = 432<br>
            432 ÷ 2 = 216<br>
            216 ÷ 2 = 108<br>
            108 ÷ 2 = 54<br>
            54 ÷ 2 = 27<br>
            27 = 3 × 3 × 3 = 3³<br><br>
            எனவே, 13824 = 2⁹ × 3³<br>
            கொடுக்கப்பட்டது: 13824 = 2ᵃ × 3ᵇ<br>
            அடுக்குகளை ஒப்பிட:<br>
            <b>a = 9</b> மற்றும் <b>b = 3</b>
          </div>`,
          ansTamil: "கொடுக்கப்பட்ட எண்ணைத் தொடர்ந்து 2 மற்றும் 3-ஆல் பகா காரணிப்படுத்தி அடுக்குகளை ஒப்பிட விடை கிடைக்கும்."
        }
      ]
    },

    // -------------------------------------------------------------
    // பகுதி 2: மட்டு எண்கணிதம் (பயிற்சி 2.3)
    // -------------------------------------------------------------
    {
      id: "sec_tm_2_2",
      title: "பயிற்சி 2.3: மட்டு எண்கணிதம் (Modular Arithmetic)",
      author: "அத்தியாயம் 2: எண்களும் தொடர்வரிசைகளும்",
      questions: [
        {
          id: "m_tm_2_4",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examYear: "2024",
          examTag: "2024*",
          isImportant: true,
          q: "8x ≡ 1 (mod 11) என்ற சமன்பாட்டை நிறைவு செய்யும் x-ன் குறைந்தபட்ச மிகை முழு மதிப்பைக் காண்க.",
          ans: `<div style="line-height:1.8;">
            <b>தீர்வு:</b><br>
            8x ≡ 1 (mod 11)<br>
            மட்டு எண்கணித வரையறைப்படி:<br>
            8x - 1 ஆனது 11-ன் மடங்கு ஆகும்.<br>
            8x - 1 = 11k (இங்கு k என்பது ஏதேனும் ஒரு முழு)<br>
            8x = 11k + 1<br>
            <b>x = (11k + 1) / 8</b><br><br>
            x ஒரு முழு எண் ஆக அமைய k-க்கு 1, 2, 3, ... எனப் பிரதியிட:<br>
            • k = 1 எனில்: x = (11(1) + 1)/8 = 12/8 (முழு எண் அல்ல)<br>
            • k = 2 எனில்: x = (11(2) + 1)/8 = 23/8 (முழு எண் அல்ல)<br>
            • k = 3 எனில்: x = (11(3) + 1)/8 = (33 + 1)/8 = 34/8 (முழு எண் அல்ல)<br>
            • k = 4 எனில்: x = (11(4) + 1)/8 = (44 + 1)/8 = 45/8 (முழு எண் அல்ல)<br>
            • k = 5 எனில்: x = (11(5) + 1)/8 = (55 + 1)/8 = 56/8 = <b>7</b> (முழு எண்!)<br><br>
            <b>எனவே, x-ன் குறைந்தபட்ச மிகை முழு மதிப்பு = 7 ஆகும்.</b>
          </div>`,
          ansTamil: "8x - 1 என்பது 11-ஆல் வகுபட வேண்டும். 8 பெருக்கல் 7 கழித்தல் ஒன்று சமம் 55, இது 11-ஆல் வகுபடும்.",
          blackboard: {
            title: "8x ≡ 1 (mod 11) தீர்வு காணுதல்",
            engTitle: "Solving 8x ≡ 1 (mod 11)",
            steps: [
              {
                stepNum: 1,
                badge: "① மட்டு சமன்பாட்டை மாற்றுதல்",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">படி 1: மட்டு வரையறைப்படி மாற்றுதல்</div>
                  <div class="bb-box-cyan">
                    <div class="bb-line">8x ≡ 1 (mod 11) ➔ 8x - 1 = 11k</div>
                    <div class="bb-line" style="font-size:16px; font-weight:800; color:#fde047; margin-top:6px;">
                      x = (11k + 1) / 8
                    </div>
                  </div>
                `,
                audioScriptTa: "படி ஒன்று: எட்டு x மட்டு பதினொன்றில் ஒன்றுக்கு சமம். அதாவது எட்டு x கழித்தல் ஒன்று பதினொன்றின் மடங்காக இருக்க வேண்டும். எனவே x சமம் பதினொன்று k கூட்டல் ஒன்று வகுத்தல் எட்டு."
              },
              {
                stepNum: 2,
                badge: "② k-ன் மதிப்பு கண்டு x பெறுதல்",
                chalkHtml: `
                  <div class="bb-box-green">
                    <div class="bb-line">k = 5 எனில்:</div>
                    <div class="bb-line">x = (11 × 5 + 1) / 8 = 56 / 8 = 7</div>
                    <div class="bb-pill-magenta" style="font-size:18px; margin-top:8px; font-weight:800;">
                      விடை: x = 7
                    </div>
                  </div>
                `,
                audioScriptTa: "படி இரண்டு: k-க்கு ஐந்து போடும்போது, பதினொன்று பெருக்கல் ஐந்து கூட்டல் ஒன்று சமம் ஐம்பத்து ஆறு. ஐம்பத்து ஆறை எட்டால் வகுத்தால் ஏழு கிடைக்கிறது. எனவே x சமம் ஏழு."
              }
            ]
          }
        },
        {
          id: "m_tm_2_5",
          type: "2m",
          mark: "2 மதிப்பெண்",
          q: "முற்பகல் 7 மணிக்கு 100 மணி நேரத்திற்குப் பிறகு நேரம் என்னவாக இருக்கும்?",
          ans: `<div style="line-height:1.8;">
            <b>தீர்வு:</b><br>
            கடிகாரத்தில் ஒரு முழு சுற்று என்பது 24 மணி நேரம் கொண்ட மட்டு ஆகும் (mod 24).<br>
            தற்போதைய நேரம்: காலை 7:00 மணி.<br>
            100 மணி நேரத்தை 24-ஆல் வகுத்து மட்டு காண:<br>
            100 = 24 × 4 + 4<br>
            அதாவது, 100 ≡ 4 (mod 24)<br><br>
            எனவே, 100 மணி நேரத்திற்குப் பிறகு நேரம் = 7 + 4 = 11 மணி.<br>
            <b>விடை: முற்பகல் 11:00 மணி (11:00 AM) ஆகும்.</b>
          </div>`,
          ansTamil: "100-ஐ 24-ஆல் வகுத்தால் 4 முழு சுற்றுகள் முடிந்து மீதி 4 மணி நேரம் வரும். 7 உடன் 4-ஐக் கூட்டினால் காலை 11 மணி ஆகும்."
        }
      ]
    },

    // -------------------------------------------------------------
    // பகுதி 3: கூட்டுத்தொடர்வரிசை - AP (பயிற்சி 2.4, 2.5 & 2.6)
    // -------------------------------------------------------------
    {
      id: "sec_tm_2_3",
      title: "பயிற்சி 2.5 & 2.6: கூட்டுத்தொடர்வரிசை (Arithmetic Progression - AP)",
      author: "அத்தியாயம் 2: எண்களும் தொடர்வரிசைகளும்",
      questions: [
        {
          id: "m_tm_2_6",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examYear: "2023",
          examTag: "2023*",
          isImportant: true,
          q: "3 + k, 18 - k, 5k + 1 என்பவை ஒரு கூட்டுத்தொடர்வரிசையில் உள்ளன எனில், k-ன் மதிப்பைக் காண்க.",
          ans: `<div style="line-height:1.8;">
            <b>தீர்வு:</b><br>
            கொடுக்கப்பட்டவை கூட்டுத்தொடர்வரிசையில் உள்ளதால், பொது வித்தியாசம் சமமாக இருக்கும்:<br>
            <b>t₂ - t₁ = t₃ - t₂</b> (அல்லது 2t₂ = t₁ + t₃)<br><br>
            இங்கு:<br>
            t₁ = 3 + k<br>
            t₂ = 18 - k<br>
            t₃ = 5k + 1<br><br>
            2(18 - k) = (3 + k) + (5k + 1)<br>
            36 - 2k = 6k + 4<br>
            36 - 4 = 6k + 2k<br>
            32 = 8k<br>
            k = 32 / 8<br>
            <b>k = 4</b><br><br>
            <b>விடை: k = 4 ஆகும்.</b>
          </div>`,
          ansTamil: "கூட்டுத்தொடரின் முக்கிய விதி: 2b = a + c. நடு உறுப்பின் இரண்டு மடங்கு முதல் மற்றும் மூன்றாம் உறுப்புகளின் கூடுதலுக்குச் சமம்.",
          blackboard: {
            title: "AP-ல் k-ன் மதிப்பு காணுதல்: 3+k, 18-k, 5k+1",
            engTitle: "Finding k in AP: 3+k, 18-k, 5k+1",
            steps: [
              {
                stepNum: 1,
                badge: "① AP விதி: 2t₂ = t₁ + t₃",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">படி 1: கூட்டுத்தொடர்ப் பண்பு</div>
                  <div class="bb-box-yellow">
                    <div class="bb-line">t₁, t₂, t₃ என்பவை AP எனில்:</div>
                    <div class="bb-line" style="font-size:16px; font-weight:800; color:#fde047; margin:4px 0;">
                      2t₂ = t₁ + t₃
                    </div>
                  </div>
                  <div class="bb-box-cyan" style="margin-top:8px;">
                    <div>பிரதியிட:</div>
                    <div class="bb-line">2(18 - k) = (3 + k) + (5k + 1)</div>
                    <div class="bb-line" style="color:#67e8f9; font-weight:700;">36 - 2k = 6k + 4</div>
                  </div>
                `,
                audioScriptTa: "படி ஒன்று: a, b, c ஆகியவை கூட்டுத்தொடரில் இருந்தால், இரண்டு b சமம் a கூட்டல் c. நடு உறுப்பான பதினெட்டு கழித்தல் k-ஐ இரண்டால் பெருக்கினால் முப்பத்து ஆறு கழித்தல் இரண்டு k வரும். வலது பக்கம் ஆறு k கூட்டல் நான்கு வரும்."
              },
              {
                stepNum: 2,
                badge: "② k-ன் தீர்வு காணுதல்",
                chalkHtml: `
                  <div class="bb-box-green">
                    <div class="bb-line">36 - 4 = 6k + 2k</div>
                    <div class="bb-line">32 = 8k</div>
                    <div class="bb-line">k = 32 / 8 = 4</div>
                    <div class="bb-pill-magenta" style="font-size:18px; margin-top:8px; font-weight:800;">
                      விடை: k = 4
                    </div>
                  </div>
                `,
                audioScriptTa: "படி இரண்டு: k உறுப்புகளை ஒரு பக்கமும் எண்களை மற்றொரு பக்கமும் கொண்டு வந்தால், முப்பத்திரண்டு சமம் எட்டு k. முப்பத்திரண்டை எட்டால் வகுத்தால் k சமம் நான்கு விடையாகக் கிடைக்கிறது."
              }
            ]
          }
        },
        {
          id: "m_tm_2_7",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examTag: "அரசு மாதிரி",
          q: "-11, -15, -19, ... என்ற கூட்டுத்தொடர்வரிசையின் 19-வது உறுப்பைக் காண்க.",
          ans: `<div style="line-height:1.8;">
            <b>தீர்வு:</b><br>
            கொடுக்கப்பட்ட தொடர்வரிசை: -11, -15, -19, ...<br>
            முதல் உறுப்பு a = -11<br>
            பொது வித்தியாசம் d = t₂ - t₁ = -15 - (-11) = -15 + 11 = <b>-4</b><br><br>
            n-ஆம் உறுப்பு சூத்திரம்: <b>tₙ = a + (n - 1)d</b><br>
            19-வது உறுப்பு t₁₉ = -11 + (19 - 1)(-4)<br>
            t₁₉ = -11 + 18(-4)<br>
            t₁₉ = -11 - 72<br>
            <b>t₁₉ = -83</b><br><br>
            <b>விடை: 19-வது உறுப்பு -83 ஆகும்.</b>
          </div>`,
          ansTamil: "சூத்திரம் t_n = a + (n-1)d. பொது வித்தியாசம் மைனஸ் 4 என்பதால் உறுப்புகள் குறைந்து கொண்டே செல்லும்."
        },
        {
          id: "m_tm_2_8",
          detailedSolution: {
            title: "விரிவான படிநிலைத் தீர்வு (Step-by-Step Derivation):",
            sections: [
              {
                stepNum: 1,
                title: "எல்லைகளைப் பகுப்பாய்வு செய்து AP அமைத்தல்",
                badge: "படி 1",
                html: `
                  <div style="margin-bottom:8px;"><b>1.1 தொடக்க எண் காணுதல்:</b><br>
                  300-ஐ 7-ஆல் வகுத்தால்: <b>300 ÷ 7 = 42</b>, மீதி = <b>6</b>.<br>
                  எனவே 300-க்கு அடுத்த 7-ஆல் வகுபடும் முதல் எண்: <b>a = 300 + (7 - 6) = 301</b>.</div>
                  <div style="margin-bottom:8px;"><b>1.2 கடைசி எண் காணுதல்:</b><br>
                  600-ஐ 7-ஆல் வகுத்தால்: <b>600 ÷ 7 = 85</b>, மீதி = <b>5</b>.<br>
                  எனவே 600-க்கு முந்தைய 7-ஆல் வகுபடும் கடைசி எண்: <b>l = 600 - 5 = 595</b>.</div>
                  <div style="background:#eff6ff; padding:8px 12px; border-radius:8px; border-left:3px solid #2563eb; color:#1e40af; font-weight:700;">
                    அமைந்த கூட்டுத்தொடர்வரிசை: 301, 308, 315, ..., 595<br>
                    (முதல் உறுப்பு a = 301, பொது வித்தியாசம் d = 7, கடைசி உறுப்பு l = 595)
                  </div>
                `
              },
              {
                stepNum: 2,
                title: "உறுப்புகளின் எண்ணிக்கை (n) கணக்கிடுதல்",
                badge: "படி 2",
                html: `
                  <div style="background:#fefce8; padding:8px 12px; border-radius:8px; border:1px solid #facc15; margin-bottom:8px; color:#854d0e;">
                    <b>பயன்படுத்தப்படும் சூத்திரம்:</b> n = [(l - a) / d] + 1
                  </div>
                  <div>
                    n = [(595 - 301) / 7] + 1<br>
                    n = [294 / 7] + 1<br>
                    n = 42 + 1<br>
                    <b style="color:#15803d; font-size:15px;">n = 43 உறுப்புகள்</b>
                  </div>
                `
              },
              {
                stepNum: 3,
                title: "கூட்டுத்தொடரின் கூடுதல் (S₄₃) கணக்கிடுதல்",
                badge: "படி 3",
                html: `
                  <div style="background:#f0fdf4; padding:8px 12px; border-radius:8px; border:1px solid #86efac; margin-bottom:8px; color:#166534;">
                    <b>கூடுதல் சூத்திரம்:</b> Sₙ = (n / 2) [a + l]
                  </div>
                  <div style="line-height:1.9;">
                    S₄₃ = (43 / 2) [301 + 595]<br>
                    S₄₃ = (43 / 2) [896]<br>
                    S₄₃ = 43 × 448<br>
                    <div style="margin:8px 0; background:#f8fafc; padding:8px 12px; border-radius:6px; border:1px dashed #cbd5e1; font-size:13px;">
                      ✍️ <b>செய்முறை (Working):</b> 448 × 40 = 17,920; 448 × 3 = 1,344 ➔ 17,920 + 1,344 = <b>19,264</b>
                    </div>
                    <div style="font-size:16px; font-weight:800; color:#15803d; background:#dcfce7; padding:8px 14px; border-radius:8px; display:inline-block; border:1px solid #86efac;">
                      விடை: எண்களின் கூடுதல் S₄₃ = 19,264
                    </div>
                  </div>
                `
              },
              {
                stepNum: 4,
                title: "பொதுத்தேர்வு மதிப்பெண் பங்கீடு (Mark Allocation Guide)",
                badge: "தேர்வு வழிகாட்டி",
                html: `
                  <ul style="margin:4px 0 4px 18px; line-height:1.7; font-size:13px; color:#475569;">
                    <li>முதல் எண் a=301 மற்றும் கடைசி எண் l=595 கண்டறிதல்: <b>1 மதிப்பெண்</b></li>
                    <li>சூத்திரம் n = [(l-a)/d]+1 எழுதி n=43 கணக்கிடுதல்: <b>1.5 மதிப்பெண்</b></li>
                    <li>சூத்திரம் Sₙ = (n/2)[a+l] எழுதி பிரதியிடுதல்: <b>1.5 மதிப்பெண்</b></li>
                    <li>சரியான இறுதி விடை 19,264 கண்டறிதல்: <b>1 மதிப்பெண்</b></li>
                  </ul>
                `
              }
            ]
          },
          type: "5m",
          mark: "5 மதிப்பெண்",
          examYear: "2022",
          examTag: "2022*",
          isImportant: true,
          q: "300-க்கும் 600-க்கும் இடையே 7-ஆல் வகுபடும் அனைத்து இயல் எண்களின் கூடுதல் காண்க.",
          ans: `<div style="line-height:1.8;">
            <b>தீர்வு:</b><br>
            300-க்கும் 600-க்கும் இடையே 7-ஆல் வகுபடும் எண்கள்:<br>
            • 300 ÷ 7 = 42, மீதி 6. எனவே முதல் எண் = 300 + (7 - 6) = <b>301</b><br>
            • 600 ÷ 7 = 85, மீதி 5. எனவே கடைசி எண் = 600 - 5 = <b>595</b><br><br>
            அமைந்த கூட்டுத்தொடர்வரிசை: <b>301, 308, 315, ..., 595</b><br>
            இங்கு a = 301, d = 7, l = 595.<br><br>
            <b>1. உறுப்புகளின் எண்ணிக்கை (n):</b><br>
            n = [(l - a) / d] + 1<br>
            n = [(595 - 301) / 7] + 1<br>
            n = [294 / 7] + 1 = 42 + 1 = <b>43 உறுப்புகள்</b><br><br>
            <b>2. கூடுதல் (Sₙ):</b><br>
            Sₙ = (n / 2) [a + l]<br>
            S₄₃ = (43 / 2) [301 + 595]<br>
            S₄₃ = (43 / 2) [896]<br>
            S₄₃ = 43 × 448<br>
            <b>S₄₃ = 19264</b><br><br>
            <b>விடை: எண்களின் கூடுதல் = 19,264 ஆகும்.</b>
          </div>`,
          ansTamil: "முதலில் முதல் எண் (301), கடைசி எண் (595) கண்டறிந்து, n = [(l-a)/d]+1 மூலம் எண்ணிக்கை கண்டு, பின்னர் S_n = (n/2)(a+l) சூத்திரத்தைப் பயன்படுத்த வேண்டும்.",
          blackboard: {
            title: "300 முதல் 600 வரை 7-ஆல் வகுபடும் எண்களின் கூடுதல்",
            engTitle: "Sum of natural numbers between 300 and 600 divisible by 7",
            steps: [
              {
                stepNum: 1,
                badge: "① தொடரைக் கண்டறிதல் (AP)",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">படி 1: முதல் மற்றும் கடைசி எண் கண்டறிதல்</div>
                  <div class="bb-box-cyan">
                    <div class="bb-line">• முதல் எண்: 301 (7-ஆல் வகுபடும்)</div>
                    <div class="bb-line">• கடைசி எண்: 595 (7-ஆல் வகுபடும்)</div>
                    <div class="bb-line" style="color:#fde047; font-weight:700; margin-top:6px;">
                      கூட்டுத்தொடர்: 301, 308, 315, ..., 595
                    </div>
                  </div>
                `,
                audioScriptTa: "படி ஒன்று: 300-க்கு அடுத்து ஏழால் வகுபடும் முதல் எண் 301. 600-க்கு முன் ஏழால் வகுபடும் கடைசி எண் 595. எனவே தொடர் 301 கூட்டல் 308 கூட்டல் 315 என 595 வரை செல்கிறது."
              },
              {
                stepNum: 2,
                badge: "② எண்ணிக்கை n மற்றும் கூடுதல் Sₙ",
                chalkHtml: `
                  <div class="bb-box-yellow">
                    <div class="bb-line">n = [(595 - 301) / 7] + 1 = [294 / 7] + 1 = 42 + 1 = <b>43</b></div>
                  </div>
                  <div class="bb-box-green" style="margin-top:8px;">
                    <div class="bb-line">S₄₃ = (43 / 2) × [301 + 595] = (43 / 2) × 896 = 43 × 448</div>
                    <div class="bb-pill-magenta" style="font-size:18px; margin-top:8px; font-weight:800;">
                      விடை: S₄₃ = 19,264
                    </div>
                  </div>
                `,
                audioScriptTa: "படி இரண்டு: உறுப்புகளின் எண்ணிக்கை n சமம் 43. கூடுதல் சூத்திரம் n வகுத்தல் இரண்டு பெருக்கல் a கூட்டல் l. 43 பெருக்கல் 448 சமம் 19,264."
              }
            ]
          }
        }
      ]
    },

    // -------------------------------------------------------------
    // பகுதி 4: பெருக்குத்தொடர்வரிசை - GP (பயிற்சி 2.7 & 2.8)
    // -------------------------------------------------------------
    {
      id: "sec_tm_2_4",
      title: "பயிற்சி 2.7 & 2.8: பெருக்குத்தொடர்வரிசை (Geometric Progression - GP)",
      author: "அத்தியாயம் 2: எண்களும் தொடர்வரிசைகளும்",
      questions: [
        {
          id: "m_tm_2_9",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examTag: "அரசு மாதிரி",
          q: "9, 3, 1, ... என்ற பெருக்குத்தொடர்வரிசையின் 8-வது உறுப்பைக் காண்க.",
          ans: `<div style="line-height:1.8;">
            <b>தீர்வு:</b><br>
            முதல் உறுப்பு a = 9<br>
            பொது விகிதம் r = t₂ / t₁ = 3 / 9 = <b>1/3</b><br><br>
            n-ஆம் உறுப்பு சூத்திரம்: <b>tₙ = a · rⁿ⁻¹</b><br>
            8-வது உறுப்பு t₈ = 9 × (1/3)⁸⁻¹<br>
            t₈ = 9 × (1/3)⁷<br>
            t₈ = 3² × (1 / 3⁷) = 1 / 3⁵<br>
            3⁵ = 243<br>
            <b>t₈ = 1 / 243</b><br><br>
            <b>விடை: 8-வது உறுப்பு 1/243 ஆகும்.</b>
          </div>`,
          ansTamil: "பெருக்குத்தொடரின் பொது விகிதம் r = 1/3. சூத்திரம் t_n = a r^(n-1)."
        },
        {
          id: "m_tm_2_10",
          detailedSolution: {
            title: "விரிவான படிநிலைத் தீர்வு (Step-by-Step Derivation):",
            sections: [
              {
                stepNum: 1,
                title: "5-ஐப் பொதுவெளியாக எடுத்து 9-ஆல் பெருக்குதல்",
                badge: "படி 1",
                html: `
                  <div style="line-height:1.8;">
                    கொடுக்கப்பட்ட தொடர்: Sₙ = 5 + 55 + 555 + ... n உறுப்புகள் வரை<br>
                    <b>5-ஐப் பொது காரணியாக எடுக்க:</b><br>
                    Sₙ = 5 [1 + 11 + 111 + ... n உறுப்புகள்]<br>
                    <b>பெருக்குத்தொடர் (GP) வடிவில் மாற்ற 9-ஆல் பெருக்கி வகுக்க:</b><br>
                    <b style="color:#2563eb;">Sₙ = (5/9) [9 + 99 + 999 + ... n உறுப்புகள்]</b>
                  </div>
                `
              },
              {
                stepNum: 2,
                title: "10-ன் அடுக்குகளாகப் பிரித்து இரு தொடர்களாக்குதல்",
                badge: "படி 2",
                html: `
                  <div style="line-height:1.8;">
                    9 = (10 - 1), 99 = (10² - 1), 999 = (10³ - 1) என எழுத:<br>
                    Sₙ = (5/9) [ (10 - 1) + (10² - 1) + (10³ - 1) + ... n உறுப்புகள் ]<br>
                    10-ன் அடுக்குகளை ஒரு தொடராகவும், 1-களை மற்றொரு தொடராகவும் பிரிக்க:<br>
                    <b style="color:#15803d;">Sₙ = (5/9) [ (10 + 10² + 10³ + ... n உறுப்புகள்) - (1 + 1 + 1 + ... n முறை) ]</b>
                  </div>
                `
              },
              {
                stepNum: 3,
                title: "GP கூடுதல் சூத்திரம் பொருத்தி இறுதி விடை காணுதல்",
                badge: "படி 3",
                html: `
                  <div style="line-height:1.8;">
                    (10 + 10² + 10³ + ... n உறுப்புகள்) என்பது முதல் உறுப்பு a = 10 மற்றும் பொது விகிதம் r = 10 கொண்ட GP ஆகும்.<br>
                    GP கூடுதல் சூத்திரம்: <b>Sₙ = a(rⁿ - 1) / (r - 1)</b><br>
                    = 10(10ⁿ - 1) / (10 - 1) = <b>10(10ⁿ - 1) / 9</b><br>
                    மற்றும் 1 + 1 + ... n முறை = <b>n</b>.<br><br>
                    பிரதியிட:<br>
                    <b>Sₙ = (5/9) [ {10(10ⁿ - 1) / 9} - n ]</b><br><br>
                    உள்ளே பெருக்கினால்:<br>
                    <div style="font-size:16px; font-weight:800; color:#15803d; background:#dcfce7; padding:8px 14px; border-radius:8px; display:inline-block; border:1px solid #86efac;">
                      Sₙ = [ 50(10ⁿ - 1) / 81 ] - (5n / 9)
                    </div>
                  </div>
                `
              },
              {
                stepNum: 4,
                title: "பொதுத்தேர்வு மதிப்பெண் பங்கீடு (Mark Allocation Guide)",
                badge: "தேர்வு வழிகாட்டி",
                html: `
                  <ul style="margin:4px 0 4px 18px; line-height:1.7; font-size:13px; color:#475569;">
                    <li>5-ஐ வெளியே எடுத்து (5/9)[9+99+999+...] என மாற்றுதல்: <b>1 மதிப்பெண்</b></li>
                    <li>(10-1) + (10²-1) என மாற்றி இரு தொடர்களாகப் பிரித்தல்: <b>1 மதிப்பெண்</b></li>
                    <li>GP சூத்திரம் எழுதி 10(10ⁿ-1)/9 மற்றும் n எனத் தீர்த்தல்: <b>1.5 மதிப்பெண்</b></li>
                    <li>சரியான இறுதி வடிவம் Sₙ = 50(10ⁿ-1)/81 - 5n/9 தருவித்தல்: <b>1.5 மதிப்பெண்</b></li>
                  </ul>
                `
              }
            ]
          },
          type: "5m",
          mark: "5 மதிப்பெண்",
          examYear: "2024",
          examTag: "2024*",
          isImportant: true,
          q: "5 + 55 + 555 + ... என்ற தொடரின் முதல் n உறுப்புகளின் கூடுதல் காண்க.",
          ans: `<div style="line-height:1.8;">
            <b>தீர்வு:</b><br>
            Sₙ = 5 + 55 + 555 + ... n உறுப்புகள் வரை<br><br>
            <b>படி 1:</b> 5-ஐப் பொதுவெளியாக எடுக்க:<br>
            Sₙ = 5 [1 + 11 + 111 + ... n உறுப்புகள்]<br><br>
            <b>படி 2:</b> 9-ஆல் பெருக்கி வகுக்க:<br>
            Sₙ = (5/9) [9 + 99 + 999 + ... n உறுப்புகள்]<br><br>
            <b>படி 3:</b> 9 = (10 - 1), 99 = (10² - 1) என எழுத:<br>
            Sₙ = (5/9) [(10 - 1) + (10² - 1) + (10³ - 1) + ... n உறுப்புகள்]<br>
            Sₙ = (5/9) [(10 + 10² + 10³ + ... n உறுப்புகள்) - (1 + 1 + 1 + ... n உறுப்புகள்)]<br><br>
            <b>படி 4:</b> (10 + 10² + ... n உறுப்புகள்) என்பது a = 10, r = 10 கொண்ட GP ஆகும்.<br>
            இதன் கூடுதல் = 10(10ⁿ - 1) / (10 - 1) = 10(10ⁿ - 1) / 9<br>
            மற்றும் 1 + 1 + ... n முறை = n.<br><br>
            <b>படி 5:</b> பிரதியிட:<br>
            <b>Sₙ = (5/9) [ {10(10ⁿ - 1) / 9} - n ]</b> அல்லது<br>
            <b>Sₙ = 50(10ⁿ - 1) / 81 - 5n / 9</b>
          </div>`,
          ansTamil: "இது மிக முக்கியமான பொதுத்தேர்வு 5 மதிப்பெண் வினா. 5-ஐ வெளியே எடுத்து, 9-ஆல் பெருக்கி வகுத்து, (10-1), (100-1) என மாற்றித் தீர்க்க வேண்டும்.",
          blackboard: {
            title: "5 + 55 + 555 + ... n உறுப்புகளின் கூடுதல்",
            engTitle: "Sum of 5 + 55 + 555 + ... to n terms",
            steps: [
              {
                stepNum: 1,
                badge: "① 5-ஐ வெளியே எடுத்து 9-ஆல் மாற்றுக",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">படி 1: GP வடிவில் மாற்ற 9-ஆல் பெருக்குதல்</div>
                  <div class="bb-box-cyan">
                    <div class="bb-line">Sₙ = 5 [1 + 11 + 111 + ...]</div>
                    <div class="bb-line" style="color:#fde047; font-weight:700; margin-top:6px;">
                      Sₙ = (5/9) [9 + 99 + 999 + ...]
                    </div>
                  </div>
                `,
                audioScriptTa: "படி ஒன்று: கொடுக்கப்பட்ட தொடரில் ஐந்தை வெளியே எடுத்தால் ஒன்று கூட்டல் பதினொன்று என வரும். பெருக்குத்தொடராக மாற்ற ஒன்பதால் பெருக்கி ஒன்பதால் வகுக்க வேண்டும்."
              },
              {
                stepNum: 2,
                badge: "② 10-ன் அடுக்குகளாக மாற்றி சூத்திரம் பொருத்துதல்",
                chalkHtml: `
                  <div class="bb-box-yellow">
                    <div class="bb-line">Sₙ = (5/9) [ (10 + 10² + 10³ + ...) - (1 + 1 + ... n) ]</div>
                    <div class="bb-line">முதல் பகுதி GP: a = 10, r = 10 ➔ 10(10ⁿ - 1)/9</div>
                  </div>
                  <div class="bb-box-green" style="margin-top:8px;">
                    <div class="bb-pill-magenta" style="font-size:17px; font-weight:800;">
                      விடை: Sₙ = (5/9) [ {10(10ⁿ - 1)/9} - n ]
                    </div>
                  </div>
                `,
                audioScriptTa: "படி இரண்டு: ஒன்பதை பத்து கழித்தல் ஒன்று என்றும், தொண்ணூற்று ஒன்பதை நூறு கழித்தல் ஒன்று என்றும் பிரிக்கிறோம். பத்து கூட்டல் நூறு என்பது பெருக்குத்தொடர். இதன் கூடுதல் பத்து பெருக்கல் பத்து பவர் n கழித்தல் ஒன்று வகுத்தல் ஒன்பது. இதிலிருந்து n-ஐக் கழிக்க வேண்டும்."
              }
            ]
          }
        }
      ]
    },

    // -------------------------------------------------------------
    // பகுதி 5: சிறப்புத் தொடர்கள் (பயிற்சி 2.9)
    // -------------------------------------------------------------
    {
      id: "sec_tm_2_5",
      title: "பயிற்சி 2.9: சிறப்புத் தொடர்கள் (Special Series)",
      author: "அத்தியாயம் 2: எண்களும் தொடர்வரிசைகளும்",
      questions: [
        {
          id: "m_tm_2_11",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examYear: "2023",
          examTag: "2023*",
          isImportant: true,
          q: "1 + 2 + 3 + ... + k = 325 எனில், 1³ + 2³ + 3³ + ... + k³-ன் மதிப்பு காண்க.",
          ans: `<div style="line-height:1.8;">
            <b>தீர்வு:</b><br>
            கொடுக்கப்பட்டது:<br>
            1 + 2 + 3 + ... + k = 325<br>
            அதாவது, Σk = 325.<br><br>
            சிறப்புத் தொடர்களின் சூத்திரம்:<br>
            <b>1³ + 2³ + 3³ + ... + k³ = [k(k + 1) / 2]² = (Σk)²</b><br><br>
            மதிப்பைப் பிரதியிட:<br>
            1³ + 2³ + ... + k³ = (325)²<br>
            325 × 325 = 1,05,625<br><br>
            <b>விடை: 1³ + 2³ + ... + k³ = 1,05,625 ஆகும்.</b>
          </div>`,
          ansTamil: "கனங்களின் கூடுதல் என்பது இயல் எண்களின் கூடுதலின் வர்க்கத்திற்குச் சமம்: Σk³ = (Σk)²."
        },
        {
          id: "m_tm_2_12",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examTag: "அரசு மாதிரி",
          q: "1³ + 2³ + 3³ + ... + k³ = 44100 எனில், 1 + 2 + 3 + ... + k-ன் மதிப்பைக் காண்க.",
          ans: `<div style="line-height:1.8;">
            <b>தீர்வு:</b><br>
            கொடுக்கப்பட்டது:<br>
            1³ + 2³ + 3³ + ... + k³ = 44100<br>
            சூத்திரம்: <b>(Σk)² = 44100</b><br><br>
            இருபுறமும் வர்க்கமூலம் காண:<br>
            Σk = √44100<br>
            √441 = 21 என்பதால், √44100 = 210.<br><br>
            <b>விடை: 1 + 2 + 3 + ... + k = 210 ஆகும்.</b>
          </div>`,
          ansTamil: "கனங்களின் கூடுதல் 44,100 எனில், அதன் வர்க்கமூலம் கண்டால் இயல் எண்களின் கூடுதல் 210 கிடைக்கும்."
        },
        {
          id: "m_tm_2_13",
          detailedSolution: {
            title: "விரிவான படிநிலைத் தீர்வு (Step-by-Step Derivation):",
            sections: [
              {
                stepNum: 1,
                title: "கொடுக்கப்பட்ட தொடரை இரு இயல் எண்களின் வர்க்கத் தொடர்களாகப் பிரித்தல்",
                badge: "படி 1",
                html: `
                  <div style="line-height:1.8;">
                    வினா: 16² + 17² + 18² + ... + 30²<br>
                    இது 1-லிருந்து தொடங்கவில்லை என்பதால், 1 முதல் 30 வரையிலான வர்க்கங்களிலிருந்து 1 முதல் 15 வரையிலான வர்க்கங்களைக் கழிக்க வேண்டும்:<br>
                    <b style="color:#2563eb; font-size:14.5px;">16² + 17² + ... + 30² = (1² + 2² + ... + 30²) - (1² + 2² + ... + 15²)</b>
                  </div>
                `
              },
              {
                stepNum: 2,
                title: "சூத்திரம் & இரு பகுதிகளின் தனித்தனி மதிப்புகள் காணுதல்",
                badge: "படி 2",
                html: `
                  <div style="background:#fefce8; padding:8px 12px; border-radius:8px; border:1px solid #facc15; margin-bottom:8px; color:#854d0e;">
                    <b>சூத்திரம்:</b> முதல் n இயல் எண்களின் வர்க்கங்களின் கூடுதல்: Σn² = n(n + 1)(2n + 1) / 6
                  </div>
                  <div style="margin-bottom:10px;">
                    <b>பகுதி 1: n = 30 ஆக உள்ள போது:</b><br>
                    = [30 × (30 + 1) × (2(30) + 1)] / 6<br>
                    = [30 × 31 × 61] / 6<br>
                    = 5 × 31 × 61<br>
                    = 155 × 61 = <b>9,455</b>
                  </div>
                  <div>
                    <b>பகுதி 2: n = 15 ஆக உள்ள போது:</b><br>
                    = [15 × (15 + 1) × (2(15) + 1)] / 6<br>
                    = [15 × 16 × 31] / 6<br>
                    = 5 × 8 × 31<br>
                    = 40 × 31 = <b>1,240</b>
                  </div>
                `
              },
              {
                stepNum: 3,
                title: "கழித்து இறுதி விடை பெறுதல்",
                badge: "படி 3",
                html: `
                  <div style="line-height:1.8;">
                    கூடுதல் = 9,455 - 1,240<br>
                    <div style="font-size:16px; font-weight:800; color:#15803d; background:#dcfce7; padding:8px 14px; border-radius:8px; display:inline-block; border:1px solid #86efac; margin-top:6px;">
                      விடை: கூடுதல் = 8,215
                    </div>
                  </div>
                `
              },
              {
                stepNum: 4,
                title: "பொதுத்தேர்வு மதிப்பெண் பங்கீடு (Mark Allocation Guide)",
                badge: "தேர்வு வழிகாட்டி",
                html: `
                  <ul style="margin:4px 0 4px 18px; line-height:1.7; font-size:13px; color:#475569;">
                    <li>தொடரை (1²+...+30²) - (1²+...+15²) எனப் பிரித்து எழுதுதல்: <b>1 மதிப்பெண்</b></li>
                    <li>சூத்திரம் Σn² = n(n+1)(2n+1)/6 எழுதுதல்: <b>1 மதிப்பெண்</b></li>
                    <li>முதல் பகுதி = 9455 கணக்கிடுதல்: <b>1.5 மதிப்பெண்</b></li>
                    <li>இரண்டாம் பகுதி = 1240 கணக்கிட்டு கழித்து 8215 பெறுதல்: <b>1.5 மதிப்பெண்</b></li>
                  </ul>
                `
              }
            ]
          },
          blackboard: {
            title: "16² + 17² + ... + 30² வர்க்கங்களின் கூடுதல்",
            engTitle: "Sum of squares 16² + 17² + ... + 30²",
            steps: [
              {
                stepNum: 1,
                badge: "① தொடர் பிரித்தல்",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">படி 1: 1 முதல் தொடங்கும் இரு தொடர்களாகப் பிரித்தல்</div>
                  <div class="bb-box-cyan">
                    <div class="bb-line">16² + 17² + ... + 30² = (1² + 2² + ... + 30²) - (1² + 2² + ... + 15²)</div>
                    <div class="bb-line" style="color:#fde047; font-weight:700; margin-top:6px;">
                      சூத்திரம்: Σn² = n(n + 1)(2n + 1) / 6
                    </div>
                  </div>
                `,
                audioScriptTa: "படி ஒன்று: 16 ஸ்கொயர் முதல் 30 ஸ்கொயர் வரையிலான கூடுதலைக் காண, ஒன்று முதல் 30 வரையிலான வர்க்கங்களின் கூடுதலிலிருந்து ஒன்று முதல் 15 வரையிலான வர்க்கங்களின் கூடுதலைக் கழிக்க வேண்டும்."
              },
              {
                stepNum: 2,
                badge: "② மதிப்புகள் பிரதியிட்டு விடை காணுதல்",
                chalkHtml: `
                  <div class="bb-box-yellow">
                    <div class="bb-line">Σ(30) = 30 × 31 × 61 / 6 = 5 × 31 × 61 = <b>9455</b></div>
                    <div class="bb-line">Σ(15) = 15 × 16 × 31 / 6 = 5 × 8 × 31 = <b>1240</b></div>
                  </div>
                  <div class="bb-box-green" style="margin-top:8px;">
                    <div class="bb-pill-magenta" style="font-size:18px; font-weight:800;">
                      விடை: 9455 - 1240 = 8,215
                    </div>
                  </div>
                `,
                audioScriptTa: "படி இரண்டு: முப்பது எண்களின் வர்க்க கூடுதல் 9455. பதினைந்து எண்களின் வர்க்க கூடுதல் 1240. இரண்டையும் கழித்தால் விடை 8215."
              }
            ]
          },
          type: "5m",
          mark: "5 மதிப்பெண்",
          examYear: "2024",
          examTag: "2024*",
          isImportant: true,
          q: "கூடுதல் காண்க: 16² + 17² + 18² + ... + 30²",
          ans: `<div style="line-height:1.8;">
            <b>தீர்வு:</b><br>
            16² + 17² + 18² + ... + 30² = (1² + 2² + ... + 30²) - (1² + 2² + ... + 15²)<br><br>
            முதல் n இயல் எண்களின் வர்க்கங்களின் கூடுதல் சூத்திரம்:<br>
            <b>Σn² = n(n + 1)(2n + 1) / 6</b><br><br>
            <b>1. முதல் 30 எண்களின் வர்க்கங்களின் கூடுதல் (n = 30):</b><br>
            = 30 × (30 + 1) × (2(30) + 1) / 6<br>
            = 30 × 31 × 61 / 6<br>
            = 5 × 31 × 61<br>
            = 155 × 61 = <b>9455</b><br><br>
            <b>2. முதல் 15 எண்களின் வர்க்கங்களின் கூடுதல் (n = 15):</b><br>
            = 15 × (15 + 1) × (2(15) + 1) / 6<br>
            = 15 × 16 × 31 / 6<br>
            = 5 × 8 × 31<br>
            = 40 × 31 = <b>1240</b><br><br>
            <b>3. கழித்துப் பெறப்படும் கூடுதல்:</b><br>
            16² + 17² + ... + 30² = 9455 - 1240 = <b>8215</b><br><br>
            <b>விடை: கூடுதல் = 8215 ஆகும்.</b>
          </div>`,
          ansTamil: "இடைப்பட்ட தொடர் என்பதால், 1 முதல் 30 வரையிலான வர்க்கங்களின் கூடுதலிலிருந்து, விடுபட்ட 1 முதல் 15 வரையிலான வர்க்கங்களின் கூடுதலைக் கழிக்க வேண்டும்."
        }
      ]
    }
  ]
};
