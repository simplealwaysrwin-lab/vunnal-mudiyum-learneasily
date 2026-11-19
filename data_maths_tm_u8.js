// 10-ஆம் வகுப்பு கணிதம் - அலகு 8: புள்ளியியலும் நிகழ்தகவும் (Statistics and Probability)
// தமிழ்நாடு சமச்சீர் கல்வி வினா-விடை வழிகாட்டி (தமிழ் வழி)

const MATHS_TM_UNIT_8_DATA = {
  unitId: "math_tm_u8",
  unitName: "அலகு 8: புள்ளியியலும் நிகழ்தகவும்",
  subject: "கணிதம் (தமிழ் வழி)",
  syllabus: "தமிழ்நாடு அரசு சமச்சீர் கல்வி 10-ஆம் வகுப்பு கணிதம்",

  // முக்கிய சூத்திரங்கள்
  formulas: [
    { title: "வீச்சு (Range)", rule: "R = L - S | வீச்சுக் கெழு = (L - S) / (L + S)" },
    { title: "திட்டவிலக்கம் (நேரடி முறை)", rule: "σ = √[Σ(x - x̄)² / n] = √[(Σd² / n)] இங்கு d = x - x̄" },
    { title: "முதல் n இயல் எண்களின் திட்டவிலக்கம்", rule: "σ = √[(n² - 1) / 12]" },
    { title: "விலக்க வர்க்கச் சராசரி (Variance)", rule: "விலக்க வர்க்கச் சராசரி = σ²" },
    { title: "மாறுபாட்டுக் கெழு (C.V.)", rule: "C.V. = (σ / x̄) × 100% (குறைந்த மாறுபாட்டுக் கெழு உடைய தொடர் அதிக நிலைத்தன்மை கொண்டது)" },
    { title: "தொன்மை நிகழ்தகவு", rule: "P(A) = n(A) / n(S) இங்கு 0 ≤ P(A) ≤ 1 மற்றும் P(S) = 1, P(∅) = 0" },
    { title: "நிரப்பு நிகழ்ச்சி", rule: "P(A') = 1 - P(A) ➔ P(A) + P(A') = 1" },
    { title: "நிகழ்தகவின் கூட்டல் தேற்றம் (2 நிகழ்ச்சிகள்)", rule: "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)" },
    { title: "ஒன்றையொன்று விலக்கும் நிகழ்ச்சிகள்", rule: "A மற்றும் B ஒன்றையொன்று விலக்கும் நிகழ்ச்சிகள் எனில் P(A ∩ B) = 0 ➔ P(A ∪ B) = P(A) + P(B)" },
    { title: "கூட்டல் தேற்றம் (3 நிகழ்ச்சிகள்)", rule: "P(A ∪ B ∪ C) = P(A) + P(B) + P(C) - P(A ∩ B) - P(B ∩ C) - P(C ∩ A) + P(A ∩ B ∩ C)" }
  ],

  subSections: [
    {
      id: "sec_m_tm_8_1",
      title: "பகுதி 1: பரவல் அளவைகள் (வீச்சு, திட்டவிலக்கம் & மாறுபாட்டுக் கெழு)",
      author: "அத்தியாயம் 8: புள்ளியியல்",
      questions: [
        {
          id: "m_tm_8_1_1",
          type: "1m",
          mark: "1 மதிப்பெண்",
          examTag: "அரசுத் தேர்வு",
          q: "கீழ்க்கண்டவற்றுள் எது பரவல் அளவை அல்ல?",
          options: ["அ) வீச்சு", "ஆ) திட்டவிலக்கம்", "இ) கூட்டுச் சராசரி", "ஈ) விலக்க வர்க்கச் சராசரி"],
          ans: "விடை: <b>இ) கூட்டுச் சராசரி</b> (சராசரி என்பது மையப்போக்கு அளவை; பரவல் அளவை அல்ல)."
        },
        {
          id: "m_tm_8_1_2",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "10 மதிப்புகளின் திட்டவிலக்கம் 3 ஆகும். ஒவ்வொரு மதிப்பையும் 4-ஆல் பெருக்கினால் கிடைக்கும் புதிய திட்டவிலக்கம்:",
          options: ["அ) 3", "ஆ) 7", "இ) 12", "ஈ) 48"],
          ans: "விடை: <b>இ) 12</b> (ஒவ்வொரு மதிப்பையும் k-ஆல் பெருக்கினால் திட்டவிலக்கமும் k-ஆல் பெருகும்: புதிய σ = 4 × 3 = 12)."
        },
        {
          id: "m_tm_8_1_3",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examTag: "முக்கிய வினா",
          isImportant: true,
          q: "பின்வரும் தரவுகளுக்கு வீச்சு மற்றும் வீச்சுக் கெழுவைக் காண்க: 25, 67, 48, 53, 18, 39, 44.",
          ans: `<div style="line-height:1.8;">
            மீப்பெரு மதிப்பு (L) = 67<br>
            மீச்சிறு மதிப்பு (S) = 18<br>
            <b>வீச்சு (R):</b> R = L - S = 67 - 18 = <b>49</b>.<br>
            <b>வீச்சுக் கெழு:</b><br>
            = (L - S) / (L + S) = (67 - 18) / (67 + 18) = 49 / 85 ≈ <b>0.576</b>.
          </div>`
        },
        {
          id: "m_tm_8_1_4",
          type: "2m",
          mark: "2 மதிப்பெண்",
          q: "முதல் 21 இயல் எண்களின் திட்டவிலக்கத்தைக் காண்க.",
          ans: `<div style="line-height:1.8;">
            முதல் n இயல் எண்களின் திட்டவிலக்கம் σ = √[(n² - 1) / 12]<br>
            இங்கு n = 21.<br>
            σ = √[(21² - 1) / 12] = √[(441 - 1) / 12]<br>
            = √[440 / 12] = √[36.67] ≈ <b>6.05</b>.
          </div>`
        },
        {
          id: "m_tm_8_1_5",
          type: "5m",
          mark: "5 மதிப்பெண்",
          examTag: "அரசு மாதிரி 5M",
          isImportant: true,
          q: "A, B ஆகிய இரு மாணவர்கள் 5 தேர்வுகளில் பெற்ற மதிப்பெண்கள் கீழே தரப்பட்டுள்ளன. இவர்களில் யார் அதிக நிலைத்தன்மை உடையவர்?<br>A: 56, 64, 48, 60, 72<br>B: 68, 72, 70, 64, 76",
          ans: `<div style="line-height:1.8;">
            <b>மாணவர் A-விற்கு:</b><br>
            கூட்டுச் சராசரி x̄_A = (56 + 64 + 48 + 60 + 72) / 5 = 300 / 5 = 60.<br>
            விலக்கங்கள் d = x - 60: -4, 4, -12, 0, 12.<br>
            d²: 16, 16, 144, 0, 144 ➔ Σd² = 320.<br>
            திட்டவிலக்கம் σ_A = √(320 / 5) = √64 = 8.<br>
            மாறுபாட்டுக் கெழு C.V._A = (σ / x̄) × 100 = (8 / 60) × 100 = <b>13.33%</b>.<br><br>
            <b>மாணவர் B-விற்கு:</b><br>
            கூட்டுச் சராசரி x̄_B = (68 + 72 + 70 + 64 + 76) / 5 = 350 / 5 = 70.<br>
            விலக்கங்கள் d = x - 70: -2, 2, 0, -6, 6.<br>
            d²: 4, 4, 0, 36, 36 ➔ Σd² = 80.<br>
            திட்டவிலக்கம் σ_B = √(80 / 5) = √16 = 4.<br>
            மாறுபாட்டுக் கெழு C.V._B = (σ / x̄) × 100 = (4 / 70) × 100 = <b>5.71%</b>.<br><br>
            <b>ஒப்பீடு:</b><br>
            மாணவர் B-ன் மாறுபாட்டுக் கெழு (5.71%), மாணவர் A-ன் மாறுபாட்டுக் கெழுவை (13.33%) விடக் குறைவாக இருப்பதால், <b>மாணவர் B அதிக நிலைத்தன்மை உடையவர்</b>.
          </div>`,
          commonMistakes: [
            {
              type: "நிலைத்தன்மை ஒப்பீட்டில் தவறு (குறைந்த C.V.-யே அதிக நிலைத்தன்மை)",
              icon: "⚠️",
              deduction: "-1 Mark",
              mistake: "C.V._A = 13.33% மற்றும் C.V._B = 5.71% எனக் கண்டறிந்த பின், பெரிய எண்ணாக இருக்கும் 13.33%-ஐக் கண்டு 'மாணவர் A அதிக நிலைத்தன்மை உடையவர்' எனத் தவறாக முடிவு கூறுதல்.",
              mistakeTa: "மாறுபாட்டுக் கெழு குறைவாக உள்ளவரே அதிக நிலைத்தன்மை உடையவர். C.V._B < C.V._A என்பதால் மாணவர் B-யே அதிக நிலைத்தன்மை உடையவர்.",
              correction: "நினைவில் கொள்க: மாறுபாட்டுக் கெழு (C.V.) குறைவாக உள்ளவரே அதிக சீரான தன்மை / நிலைத்தன்மை உடையவர்: C.V._B (5.71%) < C.V._A (13.33%) என்பதால் மாணவர் B அதிக நிலைத்தன்மை உடையவர் ஆவார்."
            },
            {
              type: "திட்டவிலக்கச் சூத்திரத்தில் வர்க்கமூலம் எடுக்க மறத்தல்",
              icon: "📝",
              deduction: "-1 Mark",
              mistake: "விலக்க வர்க்கச் சராசரி (Σd² / n = 320 / 5 = 64) கண்டபின், திட்டவிலக்கத்திற்கு வர்க்கமூலம் எடுக்காமல் σ = 64 என்றே பிரதியிடுதல்.",
              mistakeTa: "திட்டவிலக்கம் σ = √(Σd² / n) = √64 = 8 எனக் கட்டாயம் வர்க்கமூலம் காண வேண்டும்.",
              correction: "திட்டவிலக்கம் σ = √(Σd² / n) = √(320 / 5) = √64 = 8 எனச் சரியாகக் கணக்கிடவும்."
            },
            {
              type: "மாறுபாட்டுக் கெழுவில் % (சதவீதம்) இடாமல் விடுதல்",
              icon: "🔢",
              deduction: "-½ Mark",
              mistake: "C.V. கணக்கிடும் போது × 100-ஆல் பெருக்காமல் 0.133 என விட்டுவிடுதல் அல்லது விடையின் இறுதியில் % குறியீடு இடாமல் விடுதல்.",
              mistakeTa: "C.V. = (σ / x̄) × 100% என சதவீதம் இட்டு எழுத வேண்டும்.",
              correction: "மாறுபாட்டுக் கெழுவை எப்போதும் சதவீதத்தில் (%) குறிப்பிட வேண்டும்: C.V. = (σ / x̄) × 100%."
            }
          ]
        }
      ]
    },
    {
      id: "sec_m_tm_8_2",
      title: "பகுதி 2: நிகழ்தகவு & நிகழ்தகவின் கூட்டல் தேற்றம்",
      author: "அத்தியாயம் 8: நிகழ்தகவு",
      questions: [
        {
          id: "m_tm_8_2_1",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "P(A) = 0.37 எனில் P(A அல்ல)-ன் மதிப்பு:",
          options: ["அ) 0.63", "ஆ) 0.73", "இ) 0.37", "ஈ) 0"],
          ans: "விடை: <b>அ) 0.63</b> (P(A அல்ல) = 1 - 0.37 = 0.63)."
        },
        {
          id: "m_tm_8_2_2",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "நன்கு கலைக்கப்பட்ட 52 சீட்டுகள் கொண்ட கட்டிலிருந்து ஒரு சீட்டு எடுக்கப்படும்போது அது சிவப்பு நிற ராஜாவாக இருப்பதற்கான நிகழ்தகவு:",
          options: ["அ) 1/13", "ஆ) 1/26", "இ) 2/13", "ஈ) 1/52"],
          ans: "விடை: <b>ஆ) 1/26</b> (சிவப்பு ராஜாக்கள் 2 ➔ 2/52 = 1/26)."
        },
        {
          id: "m_tm_8_2_3",
          type: "2m",
          mark: "2 மதிப்பெண்",
          isImportant: true,
          q: "இரு நாணயங்கள் ஒரே நேரத்தில் சுண்டப்படுகின்றன. குறைந்தது ஒரு தலை கிடைப்பதற்கான நிகழ்தகவைக் காண்க.",
          ans: `<div style="line-height:1.8;">
            கூறுவெளி S = {HH, HT, TH, TT} ➔ n(S) = 4.<br>
            குறைந்தது ஒரு தலை கிடைக்கும் நிகழ்ச்சி A என்க.<br>
            A = {HH, HT, TH} ➔ n(A) = 3.<br>
            P(A) = n(A) / n(S) = <b>3/4</b>.
          </div>`
        },
        {
          id: "m_tm_8_2_4",
          type: "5m",
          mark: "5 மதிப்பெண்",
          examTag: "அரசுத் தேர்வு வினா (பயிற்சி 8.4 வினா 6)",
          isImportant: true,
          q: "இரு பகடைகள் உருட்டப்படுகின்றன. முதல் பகடையில் இரட்டை எண் அல்லது முக எண்களின் கூடுதல் 8 கிடைப்பதற்கான நிகழ்தகவைக் காண்க.",
          diagramCaption: "கூறுவெளி கட்ட வரைபடம் (6 × 6 = 36 கூறுகள்): நிகழ்ச்சி A (முதல் பகடை இரட்டை எண், 18 கூறுகள் நீல வண்ணம்), நிகழ்ச்சி B (கூடுதல் 8, 5 கூறுகள் ஆரஞ்சு வண்ணம்), பொது வெட்டு A ∩ B (3 பொதுக் கூறுகள் நட்சத்திரக் குறியுடன்).",
          diagramSvg: `<div style="max-width:380px; margin:12px auto; background:#ffffff; border:1.5px solid #cbd5e1; border-radius:12px; padding:12px; box-shadow:0 2px 8px rgba(0,0,0,0.06); text-align:center;">
            <div style="font-size:12.5px; font-weight:700; color:#1e3a8a; margin-bottom:8px;">🎲 இரு பகடைகளின் கூறுவெளி &amp; கூட்டல் தேற்றம்</div>
            <svg viewBox="0 0 380 475" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; display:block; aspect-ratio:380/475;">
              <defs>
                <linearGradient id="overlapGradTm8" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#fef08a"/>
                  <stop offset="100%" stop-color="#f87171"/>
                </linearGradient>
              </defs>

              <!-- Legend -->
              <g transform="translate(10, 20)">
                <rect x="0" y="0" width="12" height="12" rx="3" fill="#dbeafe" stroke="#3b82f6"/>
                <text x="16" y="10" font-size="9.5" fill="#1e40af" font-weight="600">நிகழ்ச்சி A: இரட்டை (18)</text>

                <rect x="145" y="0" width="12" height="12" rx="3" fill="#ffedd5" stroke="#ea580c"/>
                <text x="161" y="10" font-size="9.5" fill="#c2410c" font-weight="600">நிகழ்ச்சி B: கூடுதல் 8 (5)</text>

                <rect x="270" y="0" width="12" height="12" rx="3" fill="url(#overlapGradTm8)" stroke="#b91c1c" stroke-width="1.5"/>
                <text x="286" y="10" font-size="9.5" fill="#b91c1c" font-weight="700">A ∩ B (3)</text>
              </g>

              <!-- Grid Table Container -->
              <g transform="translate(45, 68)">
                <!-- Column headers (Die 2) -->
                <text x="-22" y="-12" font-size="10" fill="#64748b" font-weight="bold">ப1 \\ ப2</text>
                <text x="25" y="-12" font-size="11.5" fill="#334155" font-weight="bold" text-anchor="middle">1</text>
                <text x="75" y="-12" font-size="11.5" fill="#334155" font-weight="bold" text-anchor="middle">2</text>
                <text x="125" y="-12" font-size="11.5" fill="#334155" font-weight="bold" text-anchor="middle">3</text>
                <text x="175" y="-12" font-size="11.5" fill="#334155" font-weight="bold" text-anchor="middle">4</text>
                <text x="225" y="-12" font-size="11.5" fill="#334155" font-weight="bold" text-anchor="middle">5</text>
                <text x="275" y="-12" font-size="11.5" fill="#334155" font-weight="bold" text-anchor="middle">6</text>

                <!-- Row 1 (D1=1): None in A. None in B -->
                <text x="-12" y="23" font-size="11.5" fill="#334155" font-weight="bold" text-anchor="middle">1</text>
                <rect x="2" y="2" width="46" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1"/>
                <text x="25" y="24" font-size="10" fill="#64748b" text-anchor="middle">(1,1)</text>
                <rect x="52" y="2" width="46" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1"/>
                <text x="75" y="24" font-size="10" fill="#64748b" text-anchor="middle">(1,2)</text>
                <rect x="102" y="2" width="46" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1"/>
                <text x="125" y="24" font-size="10" fill="#64748b" text-anchor="middle">(1,3)</text>
                <rect x="152" y="2" width="46" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1"/>
                <text x="175" y="24" font-size="10" fill="#64748b" text-anchor="middle">(1,4)</text>
                <rect x="202" y="2" width="46" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1"/>
                <text x="225" y="24" font-size="10" fill="#64748b" text-anchor="middle">(1,5)</text>
                <rect x="252" y="2" width="46" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1"/>
                <text x="275" y="24" font-size="10" fill="#64748b" text-anchor="middle">(1,6)</text>

                <!-- Row 2 (D1=2): All in A (blue). (2,6) is A & B -->
                <text x="-12" y="68" font-size="11.5" fill="#2563eb" font-weight="bold" text-anchor="middle">2</text>
                <rect x="2" y="47" width="46" height="35" rx="4" fill="#dbeafe" stroke="#93c5fd"/>
                <text x="25" y="69" font-size="10" fill="#1e40af" font-weight="600" text-anchor="middle">(2,1)</text>
                <rect x="52" y="47" width="46" height="35" rx="4" fill="#dbeafe" stroke="#93c5fd"/>
                <text x="75" y="69" font-size="10" fill="#1e40af" font-weight="600" text-anchor="middle">(2,2)</text>
                <rect x="102" y="47" width="46" height="35" rx="4" fill="#dbeafe" stroke="#93c5fd"/>
                <text x="125" y="69" font-size="10" fill="#1e40af" font-weight="600" text-anchor="middle">(2,3)</text>
                <rect x="152" y="47" width="46" height="35" rx="4" fill="#dbeafe" stroke="#93c5fd"/>
                <text x="175" y="69" font-size="10" fill="#1e40af" font-weight="600" text-anchor="middle">(2,4)</text>
                <rect x="202" y="47" width="46" height="35" rx="4" fill="#dbeafe" stroke="#93c5fd"/>
                <text x="225" y="69" font-size="10" fill="#1e40af" font-weight="600" text-anchor="middle">(2,5)</text>
                <!-- (2,6) Overlap -->
                <rect x="252" y="47" width="46" height="35" rx="4" fill="url(#overlapGradTm8)" stroke="#b91c1c" stroke-width="2"/>
                <text x="275" y="64" font-size="10" fill="#991b1b" font-weight="bold" text-anchor="middle">(2,6)★</text>
                <text x="275" y="77" font-size="8" fill="#991b1b" font-weight="bold" text-anchor="middle">A ∩ B</text>

                <!-- Row 3 (D1=3): Not in A. (3,5) in B -->
                <text x="-12" y="113" font-size="11.5" fill="#334155" font-weight="bold" text-anchor="middle">3</text>
                <rect x="2" y="92" width="46" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1"/>
                <text x="25" y="114" font-size="10" fill="#64748b" text-anchor="middle">(3,1)</text>
                <rect x="52" y="92" width="46" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1"/>
                <text x="75" y="114" font-size="10" fill="#64748b" text-anchor="middle">(3,2)</text>
                <rect x="102" y="92" width="46" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1"/>
                <text x="125" y="114" font-size="10" fill="#64748b" text-anchor="middle">(3,3)</text>
                <rect x="152" y="92" width="46" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1"/>
                <text x="175" y="114" font-size="10" fill="#64748b" text-anchor="middle">(3,4)</text>
                <!-- (3,5) in B -->
                <rect x="202" y="92" width="46" height="35" rx="4" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
                <text x="225" y="109" font-size="10" fill="#c2410c" font-weight="bold" text-anchor="middle">(3,5)</text>
                <text x="225" y="122" font-size="8" fill="#c2410c" font-weight="bold" text-anchor="middle">கூடுதல் 8</text>
                <rect x="252" y="92" width="46" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1"/>
                <text x="275" y="114" font-size="10" fill="#64748b" text-anchor="middle">(3,6)</text>

                <!-- Row 4 (D1=4): All in A (blue). (4,4) is A & B -->
                <text x="-12" y="158" font-size="11.5" fill="#2563eb" font-weight="bold" text-anchor="middle">4</text>
                <rect x="2" y="137" width="46" height="35" rx="4" fill="#dbeafe" stroke="#93c5fd"/>
                <text x="25" y="159" font-size="10" fill="#1e40af" font-weight="600" text-anchor="middle">(4,1)</text>
                <rect x="52" y="137" width="46" height="35" rx="4" fill="#dbeafe" stroke="#93c5fd"/>
                <text x="75" y="159" font-size="10" fill="#1e40af" font-weight="600" text-anchor="middle">(4,2)</text>
                <rect x="102" y="137" width="46" height="35" rx="4" fill="#dbeafe" stroke="#93c5fd"/>
                <text x="125" y="159" font-size="10" fill="#1e40af" font-weight="600" text-anchor="middle">(4,3)</text>
                <!-- (4,4) Overlap -->
                <rect x="152" y="137" width="46" height="35" rx="4" fill="url(#overlapGradTm8)" stroke="#b91c1c" stroke-width="2"/>
                <text x="175" y="154" font-size="10" fill="#991b1b" font-weight="bold" text-anchor="middle">(4,4)★</text>
                <text x="175" y="167" font-size="8" fill="#991b1b" font-weight="bold" text-anchor="middle">A ∩ B</text>
                <rect x="202" y="137" width="46" height="35" rx="4" fill="#dbeafe" stroke="#93c5fd"/>
                <text x="225" y="159" font-size="10" fill="#1e40af" font-weight="600" text-anchor="middle">(4,5)</text>
                <rect x="252" y="137" width="46" height="35" rx="4" fill="#dbeafe" stroke="#93c5fd"/>
                <text x="275" y="159" font-size="10" fill="#1e40af" font-weight="600" text-anchor="middle">(4,6)</text>

                <!-- Row 5 (D1=5): Not in A. (5,3) in B -->
                <text x="-12" y="203" font-size="11.5" fill="#334155" font-weight="bold" text-anchor="middle">5</text>
                <rect x="2" y="182" width="46" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1"/>
                <text x="25" y="204" font-size="10" fill="#64748b" text-anchor="middle">(5,1)</text>
                <rect x="52" y="182" width="46" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1"/>
                <text x="75" y="204" font-size="10" fill="#64748b" text-anchor="middle">(5,2)</text>
                <!-- (5,3) in B -->
                <rect x="102" y="182" width="46" height="35" rx="4" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
                <text x="125" y="199" font-size="10" fill="#c2410c" font-weight="bold" text-anchor="middle">(5,3)</text>
                <text x="125" y="212" font-size="8" fill="#c2410c" font-weight="bold" text-anchor="middle">கூடுதல் 8</text>
                <rect x="152" y="182" width="46" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1"/>
                <text x="175" y="204" font-size="10" fill="#64748b" text-anchor="middle">(5,4)</text>
                <rect x="202" y="182" width="46" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1"/>
                <text x="225" y="204" font-size="10" fill="#64748b" text-anchor="middle">(5,5)</text>
                <rect x="252" y="182" width="46" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1"/>
                <text x="275" y="204" font-size="10" fill="#64748b" text-anchor="middle">(5,6)</text>

                <!-- Row 6 (D1=6): All in A (blue). (6,2) is A & B -->
                <text x="-12" y="248" font-size="11.5" fill="#2563eb" font-weight="bold" text-anchor="middle">6</text>
                <rect x="2" y="227" width="46" height="35" rx="4" fill="#dbeafe" stroke="#93c5fd"/>
                <text x="25" y="249" font-size="10" fill="#1e40af" font-weight="600" text-anchor="middle">(6,1)</text>
                <!-- (6,2) Overlap -->
                <rect x="52" y="227" width="46" height="35" rx="4" fill="url(#overlapGradTm8)" stroke="#b91c1c" stroke-width="2"/>
                <text x="75" y="244" font-size="10" fill="#991b1b" font-weight="bold" text-anchor="middle">(6,2)★</text>
                <text x="75" y="257" font-size="8" fill="#991b1b" font-weight="bold" text-anchor="middle">A ∩ B</text>
                <rect x="102" y="227" width="46" height="35" rx="4" fill="#dbeafe" stroke="#93c5fd"/>
                <text x="125" y="249" font-size="10" fill="#1e40af" font-weight="600" text-anchor="middle">(6,3)</text>
                <rect x="152" y="227" width="46" height="35" rx="4" fill="#dbeafe" stroke="#93c5fd"/>
                <text x="175" y="249" font-size="10" fill="#1e40af" font-weight="600" text-anchor="middle">(6,4)</text>
                <rect x="202" y="227" width="46" height="35" rx="4" fill="#dbeafe" stroke="#93c5fd"/>
                <text x="225" y="249" font-size="10" fill="#1e40af" font-weight="600" text-anchor="middle">(6,5)</text>
                <rect x="252" y="227" width="46" height="35" rx="4" fill="#dbeafe" stroke="#93c5fd"/>
                <text x="275" y="249" font-size="10" fill="#1e40af" font-weight="600" text-anchor="middle">(6,6)</text>
              </g>

              <!-- Bottom Calculation Box -->
              <rect x="15" y="375" width="350" height="46" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
              <text x="190" y="394" font-size="12" fill="#1e40af" font-weight="bold" text-anchor="middle">P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</text>
              <text x="190" y="411" font-size="12" fill="#1d4ed8" font-weight="bold" text-anchor="middle">= 18/36 + 5/36 − 3/36 = 20/36 = 5/9</text>

              <!-- Final Answer Pill -->
              <rect x="55" y="432" width="270" height="30" rx="15" fill="#16a34a"/>
              <text x="190" y="452" font-size="12" fill="#ffffff" font-weight="bold" text-anchor="middle">🎯 இறுதி விடை: P(A ∪ B) = 5/9 ≈ 0.556</text>
            </svg>
          </div>`,
          ans: `<div style="line-height:1.9;">
            <div style="background:#eff6ff; border-left:4px solid #2563eb; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>படி 1 — கூறுவெளி (Sample Space S):</b><br>
              இரு பகடைகள் ஒரே நேரத்தில் உருட்டப்படும் போது கிடைக்கும் கூறுவெளி (a, b) இங்கு a, b ∈ {1, 2, 3, 4, 5, 6}:<br>
              <div style="background:#ffffff; border:1px solid #cbd5e1; border-radius:6px; padding:8px 12px; margin:8px 0; font-family:monospace; font-size:12.5px; line-height:1.7;">
                S = {<br>
                &nbsp;&nbsp;(1,1), (1,2), (1,3), (1,4), (1,5), (1,6),<br>
                &nbsp;&nbsp;(2,1), (2,2), (2,3), (2,4), (2,5), (2,6),<br>
                &nbsp;&nbsp;(3,1), (3,2), (3,3), (3,4), (3,5), (3,6),<br>
                &nbsp;&nbsp;(4,1), (4,2), (4,3), (4,4), (4,5), (4,6),<br>
                &nbsp;&nbsp;(5,1), (5,2), (5,3), (5,4), (5,5), (5,6),<br>
                &nbsp;&nbsp;(6,1), (6,2), (6,3), (6,4), (6,5), (6,6)<br>
                }<br>
                <b>மொத்தக் கூறுகளின் எண்ணிக்கை, n(S) = 6 × 6 = 36</b>
              </div>
            </div>

            <div style="background:#f0f9ff; border-left:4px solid #0284c7; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>படி 2 — நிகழ்ச்சி A: முதல் பகடையில் இரட்டை எண் கிடைப்பது:</b><br>
              முதல் பகடையில் {2, 4, 6} (3 வாய்ப்புகள்), இரண்டாம் பகடையில் {1, 2, 3, 4, 5, 6} (6 வாய்ப்புகள்):<br>
              <div style="background:#ffffff; border:1px solid #bae6fd; border-radius:6px; padding:8px 12px; margin:8px 0; font-family:monospace; font-size:12.5px; line-height:1.7;">
                A = {<br>
                &nbsp;&nbsp;(2,1), (2,2), (2,3), (2,4), (2,5), (2,6),<br>
                &nbsp;&nbsp;(4,1), (4,2), (4,3), (4,4), (4,5), (4,6),<br>
                &nbsp;&nbsp;(6,1), (6,2), (6,3), (6,4), (6,5), (6,6)<br>
                }<br>
                <b>n(A) = 3 × 6 = 18</b><br>
                <b>நிகழ்தகவு, P(A) = n(A) / n(S) = 18 / 36</b>
              </div>
            </div>

            <div style="background:#fff7ed; border-left:4px solid #ea580c; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>படி 3 — நிகழ்ச்சி B: முக எண்களின் கூடுதல் 8 கிடைப்பது:</b><br>
              கூடுதல் a + b = 8 கிடைக்கும் ஜோடிகள்:<br>
              <div style="background:#ffffff; border:1px solid #fed7aa; border-radius:6px; padding:8px 12px; margin:8px 0; font-family:monospace; font-size:12.5px; line-height:1.7;">
                B = {(2,6), (3,5), (4,4), (5,3), (6,2)}<br>
                <b>n(B) = 5</b><br>
                <b>நிகழ்தகவு, P(B) = n(B) / n(S) = 5 / 36</b>
              </div>
            </div>

            <div style="background:#fef2f2; border-left:4px solid #dc2626; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>படி 4 — வெட்டு நிகழ்ச்சி (A ∩ B):</b><br>
              முதல் பகடையில் இரட்டை எண் <b>மற்றும்</b> முக எண்களின் கூடுதல் 8 கிடைப்பது:<br>
              <div style="background:#ffffff; border:1px solid #fecaca; border-radius:6px; padding:8px 12px; margin:8px 0; font-family:monospace; font-size:12.5px; line-height:1.7;">
                A ∩ B = {(2,6), (4,4), (6,2)}<br>
                <b>n(A ∩ B) = 3</b><br>
                <b>நிகழ்தகவு, P(A ∩ B) = n(A ∩ B) / n(S) = 3 / 36</b>
              </div>
              <span style="font-size:12.5px; color:#991b1b; font-weight:600;">
                📌 <i>குறிப்பு: A மற்றும் B ஆகிய இரு நிகழ்ச்சிகளுக்கும் 3 பொதுவான கூறுகள் உள்ளன. எனவே அவை ஒன்றையொன்று விலக்கா நிகழ்ச்சிகள் ஆகும். இந்த 3 கூறுகள் இருமுறை எண்ணப்படுவதைத் தவிர்க்க P(A ∩ B)-ஐ கழிக்க வேண்டும்!</i>
              </span>
            </div>

            <div style="background:#f0fdf4; border-left:4px solid #16a34a; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>படி 5 — நிகழ்தகவின் கூட்டல் தேற்றம் (Addition Theorem):</b><br>
              <b>P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</b><br><br>
              <b>படி 6 — பிரதியிடல் &amp; சுருக்குதல்:</b><br>
              P(A ∪ B) = (18 / 36) + (5 / 36) − (3 / 36)<br>
              = (18 + 5 − 3) / 36<br>
              = 20 / 36<br>
              தொகுதி மற்றும் பகுதியை 4-ஆல் வகுக்க:<br>
              <b>= 5 / 9 ≈ 0.556</b>
            </div>

            <div style="margin-top:14px; padding:12px; background:#eff6ff; border:2px solid #2563eb; border-radius:8px; text-align:center;">
              <span style="font-size:16px; font-weight:800; color:#1e40af;">இறுதி விடை: தேவையான நிகழ்தகவு P(A ∪ B) = 5/9</span>
            </div>

            <div style="margin-top:12px; font-size:13px; color:#475569; background:#f8fafc; padding:10px; border-radius:6px; border:1px solid #e2e8f0;">
              <b>💡 பொதுத்தேர்வு மதிப்பெண் குறிப்புகள்:</b><br>
              1. <b>கூறுவெளி n(S) = 36</b> என்று எழுதுவதற்கு அரசு விடைக்குறிப்பில் 1 மதிப்பெண் உண்டு.<br>
              2. <b>கூட்டல் தேற்றச் சூத்திரம் P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</b> கட்டாயம் எழுத வேண்டும்.<br>
              3. 20/36 என்பதை 4-ஆல் வகுத்து <b>5/9</b> என எளிய பின்னமாக எழுதினால் மட்டுமே முழு மதிப்பெண் கிடைக்கும்.
            </div>
          </div>`,
          commonMistakes: [
            {
              type: "பொது வெட்டு P(A ∩ B)-ஐ கழிக்காமல் விடுதல் (இருமுறை கூட்டுதல் பிழை)",
              icon: "⚠️",
              deduction: "-1 Mark",
              mistake: "மாணவர்கள் நேரடியாக P(A) + P(B) = 18/36 + 5/36 = 23/36 எனக் கூட்டிவிடுகின்றனர். இதில் (2,6), (4,4), (6,2) ஆகிய 3 கூறுகள் இருமுறை கணக்கிடப்படுகின்றன என்பதை மறந்துவிடுகின்றனர்.",
              mistakeTa: "A மற்றும் B இரண்டிலும் 3 கூறுகள் பொதுவாக உள்ளன. அவற்றை கழிக்காவிட்டால் 23/36 என தவறான விடை வரும்.",
              correction: "எப்போதுமே கூட்டல் தேற்றத்தைப் பயன்படுத்தி வெட்டுக் கழிப்பைச் செய்ய வேண்டும்: P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 18/36 + 5/36 - 3/36 = 20/36 = 5/9."
            },
            {
              type: "கூடுதல் 8-ல் சமச்சீர் ஜோடிகளை விடுதல் ((5,3), (6,2) எழுதாமல் விடுதல்)",
              icon: "🔢",
              deduction: "-1 Mark",
              mistake: "கூடுதல் 8 வருவதற்கு {(2,6), (3,5), (4,4)} என 3 ஜோடிகளை மட்டும் எழுதி, (5,3) மற்றும் (6,2)-ஐ விட்டுவிட்டு n(B) = 3 எனத் தவறாகக் கணக்கிடுதல்.",
              mistakeTa: "முதல் பகடை 5 மற்றும் இரண்டாம் பகடை 3 என்பது தனி ஜோடி. (3,5) மற்றும் (5,3) இரண்டும் வெவ்வேறு.",
              correction: "பகடைகள் தனித்தனி என்பதால் (2,6), (6,2), (3,5), (5,3), (4,4) என 5 கூறுகளையும் முழுமையாக எழுத வேண்டும்."
            },
            {
              type: "பின்னத்தை எளிய வடிவிற்குச் சுருக்காமல் விடுதல் (20/36 என விடுதல்)",
              icon: "✂️",
              deduction: "-½ Mark",
              mistake: "20/36 என்பதை 4-ஆல் வகுத்து 5/9 எனச் சுருக்காமல் அப்படியே விட்டுவிடுதல்.",
              mistakeTa: "அரசுத் தேர்வு விடைக்குறிப்பில் எளிய வடிவம் 5/9-க்கு மட்டுமே முழு மதிப்பெண் ஒதுக்கப்படும்.",
              correction: "எப்போதுமே இறுதிப் பின்னத்தை எளிய வடிவில் சுருக்கவும்: 20/36 = 5/9."
            }
          ]
        }
      ]
    }
  ]
};
