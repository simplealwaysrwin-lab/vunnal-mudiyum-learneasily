// 10-ஆம் வகுப்பு கணிதம் - அலகு 1: உறவுகளும் சார்புகளும்
// தமிழ்நாடு சமச்சீர் கல்வி வினா-விடை வழிகாட்டி (தமிழ் வழி)
// குறிப்பு: தமிழ் வழியில் ஆங்கிலச் சொற்கள் முற்றிலும் தவிர்க்கப்பட்டுள்ளன.

const MATHS_TM_UNIT_1_DATA = {
  unitId: "math_tm_u1",
  unitName: "அலகு 1: உறவுகளும் சார்புகளும்",
  subject: "கணிதம் (தமிழ் வழி)",
  syllabus: "தமிழ்நாடு அரசு சமச்சீர் கல்வி 10-ஆம் வகுப்பு கணிதம்",
  
  // முக்கிய சூத்திரங்கள் & பண்புகள்
  formulas: [
    { title: "கார்டீசியன் பெருக்கல்", rule: "A × B = {(a, b) | a ∈ A, b ∈ B} மற்றும் n(A × B) = n(A) × n(B)" },
    { title: "பங்கீட்டுப் பண்புகள்", rule: "A × (B ∪ C) = (A × B) ∪ (A × C) மற்றும் A × (B ∩ C) = (A × B) ∩ (A × C)" },
    { title: "உறவு", rule: "R ⊆ (A × B); மதிப்பகம் ⊆ A, வீச்சகம் ⊆ B (துணை மதிப்பகம்)" },
    { title: "சார்பு", rule: "A-யில் உள்ள ஒவ்வொரு உறுப்பிற்கும் B-யில் ஒரே ஒரு நிழல் உரு மட்டுமே இருக்க வேண்டும்." },
    { title: "சார்புகளின் சேர்ப்பு", rule: "(f ∘ g)(x) = f(g(x)); பொதுவாக f ∘ g ≠ g ∘ f, ஆனால் (f ∘ g) ∘ h = f ∘ (g ∘ h) எப்போதும் உண்மை." }
  ],

  subSections: [
    // -------------------------------------------------------------
    // பகுதி 1: கார்டீசியன் பெருக்கல் (பயிற்சி 1.1)
    // -------------------------------------------------------------
    {
      id: "sec_tm_1",
      title: "பயிற்சி 1.1: கார்டீசியன் பெருக்கல்",
      author: "அத்தியாயம் 1: உறவுகளும் சார்புகளும்",
      questions: [
        {
          id: "m_tm_1_1",
          type: "2m",
          mark: "2 மதிப்பெண்",
          q: "பின்வருவனவற்றிற்கு A × B, A × A மற்றும் B × A ஆகியவற்றைக் காண்க:<br><div style='margin:6px 0 6px 18px; font-weight:700;'>A = {2,&nbsp;-2,&nbsp;3} மற்றும் B = {1,&nbsp;-4}</div>",
          ans: `<div style="line-height:1.8;">
            <b>தீர்வு:</b><br>
            கொடுக்கப்பட்டவை:<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">A = {2,&nbsp;-2,&nbsp;3}</div>
            <div style="margin:4px 0 4px 18px; font-weight:700;">B = {1,&nbsp;-4}</div><br>
            <b>1. A × B-ன் மதிப்பு:</b><br>
            <div style="margin:4px 0 4px 18px;">
              A × B = {2,&nbsp;-2,&nbsp;3} × {1,&nbsp;-4}<br>
              <b>A × B = {(2,&nbsp;1), (2,&nbsp;-4), (-2,&nbsp;1), (-2,&nbsp;-4), (3,&nbsp;1), (3,&nbsp;-4)}</b>
            </div><br>
            <b>2. A × A-ன் மதிப்பு:</b><br>
            <div style="margin:4px 0 4px 18px;">
              A × A = {2,&nbsp;-2,&nbsp;3} × {2,&nbsp;-2,&nbsp;3}<br>
              <b>A × A = {(2,&nbsp;2), (2,&nbsp;-2), (2,&nbsp;3), (-2,&nbsp;2), (-2,&nbsp;-2), (-2,&nbsp;3), (3,&nbsp;2), (3,&nbsp;-2), (3,&nbsp;3)}</b>
            </div><br>
            <b>3. B × A-ன் மதிப்பு:</b><br>
            <div style="margin:4px 0 4px 18px;">
              B × A = {1,&nbsp;-4} × {2,&nbsp;-2,&nbsp;3}<br>
              <b>B × A = {(1,&nbsp;2), (1,&nbsp;-2), (1,&nbsp;3), (-4,&nbsp;2), (-4,&nbsp;-2), (-4,&nbsp;3)}</b>
            </div>
          </div>`,
          ansTamil: "கார்டீசியன் பெருக்கலில் முதல் உறுப்பு முதல் கணத்திலிருந்தும், இரண்டாம் உறுப்பு இரண்டாம் கணத்திலிருந்தும் சோடிகளாக எழுதப்பட வேண்டும்."
        },
        {
          id: "m_tm_1_2",
          type: "2m",
          mark: "2 மதிப்பெண்",
          q: "A = B = {p,&nbsp;q} எனில், A × B, A × A மற்றும் B × A ஆகியவற்றைக் காண்க.",
          ans: `<div style="line-height:1.8;">
            <b>தீர்வு:</b><br>
            இங்கு கொடுக்கப்பட்ட கணங்கள் சமம்:<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">A = {p,&nbsp;q} மற்றும் B = {p,&nbsp;q}</div>
            A = B என்பதால் A × B = A × A = B × A சமமாக அமையும்.<br><br>
            <div style="margin:4px 0 4px 18px;">
              A × B = {p,&nbsp;q} × {p,&nbsp;q}<br>
              <b>A × B = {(p,&nbsp;p), (p,&nbsp;q), (q,&nbsp;p), (q,&nbsp;q)}</b><br><br>
              <b>A × A = {(p,&nbsp;p), (p,&nbsp;q), (q,&nbsp;p), (q,&nbsp;q)}</b><br><br>
              <b>B × A = {(p,&nbsp;p), (p,&nbsp;q), (q,&nbsp;p), (q,&nbsp;q)}</b>
            </div>
          </div>`,
          ansTamil: "இரண்டு கணங்களும் சமமாக இருக்கும்போது அனைத்து கார்டீசியன் பெருக்கல் விடைகளும் ஒரே மாதிரியாக அமையும்."
        },
        {
          id: "m_tm_1_3",
          videoUrl: "https://youtu.be/aSeA9X6iIQ8",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examYear: "2022",
          examTag: "2022*",
          isImportant: true,
          q: "B × A = {(-2,&nbsp;3), (-2,&nbsp;4), (0,&nbsp;3), (0,&nbsp;4), (3,&nbsp;3), (3,&nbsp;4)} எனில், A மற்றும் B ஆகியவற்றைக் காண்க.",
          ans: `<div style="line-height:1.8;">
            <b>தீர்வு:</b><br>
            கொடுக்கப்பட்டது:<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              B × A = {(-2,&nbsp;3), (-2,&nbsp;4), (0,&nbsp;3), (0,&nbsp;4), (3,&nbsp;3), (3,&nbsp;4)}
            </div><br>
            • B என்பது B × A-ல் உள்ள வரிசைச் சோடிகளின் முதல் உறுப்புகளின் கணம்:<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              B = {-2,&nbsp;0,&nbsp;3}
            </div><br>
            • A என்பது B × A-ல் உள்ள வரிசைச் சோடிகளின் இரண்டாம் உறுப்புகளின் கணம்:<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              A = {3,&nbsp;4}
            </div>
          </div>`,
          ansTamil: "B × A-ல் முதல் எண்கள் B கணத்தின் உறுப்புகள்; இரண்டாம் எண்கள் A கணத்தின் உறுப்புகள் ஆகும்.",
          blackboard: {
            title: "பயிற்சி 1.1 (வினா 3): B × A-லிருந்து கணங்கள் A, B கண்டறிதல்",
            engTitle: "Exercise 1.1 (Q3): Finding Sets A and B from B × A",
            steps: [
              {
                stepNum: 1,
                badge: "① கொடுக்கப்பட்ட விவரம் & அடிப்படைக் கருத்து",
                badgeEn: "① Given & Cartesian Product Concept",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">படி 1: கொடுக்கப்பட்ட கார்டீசியன் பெருக்கல் & அடிப்படைக் கருத்து</div>
                  <div class="bb-box-cyan">
                    <div class="bb-box-title" style="color:#67e8f9;">கொடுக்கப்பட்டது (Given):</div>
                    <div class="bb-line" style="font-size:15px; font-weight:700; color:#ffffff; margin:6px 0;">
                      B × A = {(-2, 3), (-2, 4), (0, 3), (0, 4), (3, 3), (3, 4)}
                    </div>
                  </div>
                  <div class="bb-box-yellow" style="margin-top:10px;">
                    <div class="bb-box-title" style="color:#fde047;">கார்டீசியன் பெருக்கல் விதி (Key Concept):</div>
                    <div class="bb-line">• <b>B</b> = B × A-ல் உள்ள வரிசைச் சோடிகளின் <b>முதல் உறுப்புகளின் கணம்</b></div>
                    <div class="bb-line">• <b>A</b> = B × A-ல் உள்ள வரிசைச் சோடிகளின் <b>இரண்டாம் உறுப்புகளின் கணம்</b></div>
                  </div>
                `,
                audioScriptTa: "படி ஒன்று: கொடுக்கப்பட்ட விவரம் மற்றும் அடிப்படைக் கருத்தைப் பார்ப்போம். கேள்வியில் B பெருக்கல் A கொடுக்கப்பட்டுள்ளது. இதில் முதல் கணம் B என்பதால், வரிசைச் சோடிகளில் உள்ள முதல் எண்கள் அனைத்தும் B கணத்தின் உறுப்புகள் ஆகும். இரண்டாம் கணம் A என்பதால், இரண்டாம் எண்கள் அனைத்தும் A கணத்தின் உறுப்புகள் ஆகும்.",
                audioScriptEn: "Step 1: Understand the given problem and Cartesian product rule. We are given B cross A. Since set B comes first, the first coordinates of every ordered pair belong to set B. Since set A comes second, the second coordinates belong to set A."
              },
              {
                stepNum: 2,
                badge: "② கணம் B கண்டறிதல் (வரிசைச் சோடிகளின் முதல் உறுப்புகள்)",
                badgeEn: "② Find Set B (First Coordinates)",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">படி 2: கணம் B கண்டறிதல் (முதல் ஆயத்தொலைவுகள்)</div>
                  <div class="bb-box-blue">
                    <div class="bb-box-title" style="color:#93c5fd;">B × A-ன் வரிசைச் சோடிகளில் உள்ள முதல் உறுப்புகள்:</div>
                    <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px; margin:8px 0; font-size:14px; font-weight:700;">
                      <div class="bb-pill-cyan">(-2, 3) ➔ <b style="color:#fde047;">-2</b></div>
                      <div class="bb-pill-cyan">(-2, 4) ➔ <b style="color:#fde047;">-2</b></div>
                      <div class="bb-pill-cyan">(0, 3) ➔ <b style="color:#fde047;">0</b></div>
                      <div class="bb-pill-cyan">(0, 4) ➔ <b style="color:#fde047;">0</b></div>
                      <div class="bb-pill-cyan">(3, 3) ➔ <b style="color:#fde047;">3</b></div>
                      <div class="bb-pill-cyan">(3, 4) ➔ <b style="color:#fde047;">3</b></div>
                    </div>
                  </div>
                  <div class="bb-box-green" style="margin-top:10px;">
                    <div class="bb-line">கணத்தில் உறுப்புகள் மீண்டும் மீண்டும் வரக்கூடாது (No duplicates):</div>
                    <div class="bb-pill-magenta" style="font-size:18px; margin-top:6px; font-weight:800;">
                      B = {-2, 0, 3}
                    </div>
                  </div>
                `,
                audioScriptTa: "படி இரண்டு: கணம் B கண்டறிவோம். வரிசைச் சோடிகளில் உள்ள முதல் எண்களை மட்டும் வரிசையாகக் கவனியுங்கள்: மைனஸ் இரண்டு, மைனஸ் இரண்டு, பூஜ்ஜியம், பூஜ்ஜியம், மூன்று, மூன்று. ஒரு கணத்திற்குள் ஒரே எண்ணைத் திரும்பத் திரும்ப எழுதக்கூடாது. எனவே, மீண்டும் வராமல் எழுதினால் B சமம் மைனஸ் இரண்டு, பூஜ்ஜியம், மூன்று.",
                audioScriptEn: "Step 2: Find set B. Looking at the first element in each ordered pair, we have: minus 2, minus 2, 0, 0, 3, and 3. In set theory, elements must not repeat. Therefore, set B equals minus 2, 0, and 3."
              },
              {
                stepNum: 3,
                badge: "③ கணம் A கண்டறிதல் (வரிசைச் சோடிகளின் இரண்டாம் உறுப்புகள்)",
                badgeEn: "③ Find Set A (Second Coordinates)",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">படி 3: கணம் A கண்டறிதல் (இரண்டாம் ஆயத்தொலைவுகள்)</div>
                  <div class="bb-box-blue">
                    <div class="bb-box-title" style="color:#93c5fd;">B × A-ன் வரிசைச் சோடிகளில் உள்ள இரண்டாம் உறுப்புகள்:</div>
                    <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px; margin:8px 0; font-size:14px; font-weight:700;">
                      <div class="bb-pill-cyan">(-2, 3) ➔ <b style="color:#86efac;">3</b></div>
                      <div class="bb-pill-cyan">(-2, 4) ➔ <b style="color:#86efac;">4</b></div>
                      <div class="bb-pill-cyan">(0, 3) ➔ <b style="color:#86efac;">3</b></div>
                      <div class="bb-pill-cyan">(0, 4) ➔ <b style="color:#86efac;">4</b></div>
                      <div class="bb-pill-cyan">(3, 3) ➔ <b style="color:#86efac;">3</b></div>
                      <div class="bb-pill-cyan">(3, 4) ➔ <b style="color:#86efac;">4</b></div>
                    </div>
                  </div>
                  <div class="bb-box-green" style="margin-top:10px;">
                    <div class="bb-line">இரண்டாம் எண்கள் 3 மற்றும் 4 மட்டுமே உள்ளன:</div>
                    <div class="bb-pill-magenta" style="font-size:18px; margin-top:6px; font-weight:800;">
                      A = {3, 4}
                    </div>
                  </div>
                `,
                audioScriptTa: "படி மூன்று: கணம் A கண்டறிவோம். வரிசைச் சோடிகளில் உள்ள இரண்டாம் எண்களை மட்டும் பாருங்கள்: மூன்று, நான்கு, மூன்று, நான்கு, மூன்று, நான்கு. இதில் மூன்று மற்றும் நான்கு ஆகிய இரண்டு எண்கள் மட்டுமே உள்ளன. எனவே, A சமம் மூன்று, நான்கு.",
                audioScriptEn: "Step 3: Find set A. Looking at the second coordinates, we have 3, 4, 3, 4, 3, and 4. Removing repeated numbers, we get set A equals 3 and 4."
              },
              {
                stepNum: 4,
                badge: "④ விடை சரிபார்த்தல் & தேர்வு இறுதி விடைப் பெட்டி",
                badgeEn: "④ Verification & Final Answer",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">படி 4: விடை சரிபார்த்தல் மற்றும் இறுதி விடை</div>
                  <div class="bb-box-cyan">
                    <div class="bb-box-title" style="color:#67e8f9;">சரிபார்த்தல் (Verification Check):</div>
                    <div class="bb-line">• n(B) = 3 உறுப்புகள் &nbsp;|&nbsp; n(A) = 2 உறுப்புகள்</div>
                    <div class="bb-line">• n(B × A) = n(B) × n(A) = 3 × 2 = <b>6 சோடிகள்</b> (சரியாக உள்ளது!)</div>
                  </div>
                  <div class="bb-box-yellow" style="margin-top:10px; border:2px solid #fde047;">
                    <div class="bb-box-title" style="color:#fde047; font-size:15px;">⭐ இறுதி விடை (Final Answer):</div>
                    <div style="font-size:18px; font-weight:800; color:#ffffff; line-height:1.8; margin-top:6px;">
                      <div>• A = {3, 4}</div>
                      <div>• B = {-2, 0, 3}</div>
                    </div>
                  </div>
                `,
                audioScriptTa: "படி நான்கு: நமது விடை சரியா என்று சரிபார்த்துக் கொள்வோம். B கணத்தில் மூன்று உறுப்புகள், A கணத்தில் இரண்டு உறுப்புகள். மூன்றையும் இரண்டையும் பெருக்கினால் ஆறு சோடிகள் கிடைக்க வேண்டும். கேள்வியிலும் ஆறு சோடிகள் சரியாக உள்ளன. தேர்வுத் தாளில் A மற்றும் B விடைகளை இவ்வாறு தனிப் பெட்டியிட்டு எழுதினால் முழு இரண்டு மதிப்பெண்களும் கிடைக்கும்.",
                audioScriptEn: "Step 4: Verify the result and write the final answer. Set B has 3 elements and set A has 2 elements. 3 times 2 equals 6 ordered pairs, exactly matching the problem statement. Box the final answer clearly: A equals 3 and 4, B equals minus 2, 0, and 3."
              }
            ]
          }
        },
        {
          id: "m_tm_1_4",
          type: "5m",
          mark: "5 மதிப்பெண்",
          isImportant: true,
          diagramImg: "images/math_bb_ex1_4.png",
          diagramCaption: "கரும்பலகை விடை விளக்கம்: A × A = (B × B) ∩ (C × C) (தொட்டுப் பெரிதாக்கிப் படிக்கலாம்)",
          q: "A = {5,&nbsp;6}, B = {4,&nbsp;5,&nbsp;6}, C = {5,&nbsp;6,&nbsp;7} எனில்,<br><div style='margin:6px 0 6px 18px; font-weight:700;'>A × A = (B × B) ∩ (C × C) எனக் காட்டுக.</div>",
          ans: `<div style="line-height:1.8;">
            <b>தீர்வு:</b><br>
            கொடுக்கப்பட்டவை:<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              A = {5,&nbsp;6}<br>
              B = {4,&nbsp;5,&nbsp;6}<br>
              C = {5,&nbsp;6,&nbsp;7}
            </div><br>
            <b>இடதுபக்கம் = A × A:</b><br>
            <div style="margin:4px 0 4px 18px;">
              A × A = {5,&nbsp;6} × {5,&nbsp;6}<br>
              <b>A × A = {(5,&nbsp;5), (5,&nbsp;6), (6,&nbsp;5), (6,&nbsp;6)} ---- (1)</b>
            </div><br>
            <b>வலதுபக்கம் = (B × B) ∩ (C × C):</b><br>
            <div style="margin:4px 0 4px 18px;">
              B × B = {4,&nbsp;5,&nbsp;6} × {4,&nbsp;5,&nbsp;6}<br>
              = {(4,4), (4,5), (4,6), (5,4), <b>(5,5), (5,6)</b>, (6,4), <b>(6,5), (6,6)</b>}<br><br>
              C × C = {5,&nbsp;6,&nbsp;7} × {5,&nbsp;6,&nbsp;7}<br>
              = {<b>(5,5), (5,6)</b>, (5,7), <b>(6,5), (6,6)</b>, (6,7), (7,5), (7,6), (7,7)}
            </div><br>
            இவ்விரண்டிற்கும் பொதுவான வெட்டுச் சோடிகள்:<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              (B × B) ∩ (C × C) = {(5,&nbsp;5), (5,&nbsp;6), (6,&nbsp;5), (6,&nbsp;6)} ---- (2)
            </div><br>
            (1) மற்றும் (2)-லிருந்து,<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              இடதுபக்கம் = வலதுபக்கம்<br>
              A × A = (B × B) ∩ (C × C) என்பது நிரூபிக்கப்பட்டது.
            </div>
          </div>`,
          ansTamil: "இரு கணங்களின் பொதுவான சோடிகளைக் கண்டறிந்து இடதுபக்கம் மற்றும் வலதுபக்கம் சமம் என நிரூபிக்கப்படுகிறது.",
          blackboard: {
            title: "பயிற்சி 1.1 (வினா 4): A × A = (B × B) ∩ (C × C) என நிறுவுதல்",
            engTitle: "Exercise 1.1 (Q4): Prove A × A = (B × B) ∩ (C × C)",
            fullBoardImg: "images/math_bb_ex1_4.png",
            steps: [
              {
                stepNum: 1,
                badge: "① கொடுக்கப்பட்ட கணங்கள் & என்ன நிரூபிக்க வேண்டும்?",
                badgeEn: "① Given Sets & What to Prove",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">படி 1: கொடுக்கப்பட்டவை மற்றும் நிரூபிக்க வேண்டியது</div>
                  <div class="bb-box-yellow">
                    <div class="bb-box-title" style="color:#fde047;">கொடுக்கப்பட்ட கணங்கள் (Given Sets):</div>
                    <div class="bb-line" style="font-size:15px; font-weight:700; color:#ffffff; margin-top:6px;">
                      • A = {5, 6}<br>
                      • B = {4, 5, 6}<br>
                      • C = {5, 6, 7}
                    </div>
                  </div>
                  <div class="bb-box-cyan" style="margin-top:10px;">
                    <div class="bb-box-title" style="color:#67e8f9;">நிரூபிக்க வேண்டியது (To Prove):</div>
                    <div class="bb-pill-magenta" style="font-size:17px; margin-top:6px; font-weight:800; text-align:center;">
                      A × A = (B × B) ∩ (C × C)
                    </div>
                  </div>
                `,
                audioScriptTa: "படி ஒன்று: கொடுக்கப்பட்ட கணங்கள் மற்றும் என்ன நிரூபிக்க வேண்டும் என்பதைப் புரிந்துகொள்வோம். கணங்கள் A சமம் ஐந்து, ஆறு; B சமம் நான்கு, ஐந்து, ஆறு; C சமம் ஐந்து, ஆறு, ஏழு எனத் தரப்பட்டுள்ளன. நாம் A பெருக்கல் A சமம் B பெருக்கல் B வெட்டு C பெருக்கல் C என நிரூபிக்க வேண்டும்.",
                audioScriptEn: "Step 1: Understand the given sets and what needs to be proved. We are given sets A equals 5, 6; B equals 4, 5, 6; and C equals 5, 6, 7. We need to prove that A cross A equals B cross B intersection C cross C."
              },
              {
                stepNum: 2,
                badge: "② இடதுபக்கம் (L.H.S): A × A கணக்கிடுதல்",
                badgeEn: "② Left Hand Side (L.H.S): Find A × A",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">படி 2: இடதுபக்கம் (L.H.S) = A × A</div>
                  <div class="bb-box-green">
                    <div class="bb-box-title" style="color:#86efac;">A × A கார்டீசியன் பெருக்கல் (Cartesian Product):</div>
                    <div class="bb-line" style="margin-top:6px;">
                      A × A = {5, 6} × {5, 6}
                    </div>
                    <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:8px; margin:10px 0; font-size:15px; font-weight:700;">
                      <div class="bb-pill-cyan">5-ன் சோடிகள் ➔ (5, 5), (5, 6)</div>
                      <div class="bb-pill-cyan">6-ன் சோடிகள் ➔ (6, 5), (6, 6)</div>
                    </div>
                    <div class="bb-box-yellow" style="margin-top:8px; border:2px solid #fde047;">
                      <div class="bb-line" style="font-size:16px; font-weight:800; color:#fef08a;">
                        A × A = {(5, 5), (5, 6), (6, 5), (6, 6)} &nbsp; <b style="color:#ffffff;">---- (1)</b>
                      </div>
                    </div>
                  </div>
                `,
                audioScriptTa: "படி இரண்டு: இடதுபக்கம் உள்ள A பெருக்கல் A-ஐக் கணக்கிடுவோம். A கணத்தில் உள்ள ஐந்து மற்றும் ஆறு ஆகிய உறுப்புகளை அதே உறுப்புகளோடு சோடி சேர்த்தால், ஐந்து, ஐந்து; ஐந்து, ஆறு; ஆறு, ஐந்து; ஆறு, ஆறு ஆகிய நான்கு வரிசைச் சோடிகள் கிடைக்கின்றன. இதனைச் சமன்பாடு ஒன்று என வைத்துக் கொள்வோம்.",
                audioScriptEn: "Step 2: Calculate the Left Hand Side, A cross A. Pairing elements of set A with itself gives four ordered pairs: 5,5; 5,6; 6,5; and 6,6. Label this as equation 1."
              },
              {
                stepNum: 3,
                badge: "③ வலதுபக்கம் பகுதி 1: B × B கணக்கிடுதல் (9 சோடிகள்)",
                badgeEn: "③ Right Hand Side Part 1: Find B × B",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">படி 3: வலதுபக்கம் - B × B கண்டறிதல்</div>
                  <div class="bb-box-blue">
                    <div class="bb-box-title" style="color:#93c5fd;">B × B = {4, 5, 6} × {4, 5, 6} (3 × 3 = 9 சோடிகள்):</div>
                    <div style="font-size:14.5px; line-height:1.8; margin-top:8px; background:rgba(0,0,0,0.3); padding:10px 14px; border-radius:8px;">
                      <div>• 4-ன் சோடிகள்: (4, 4), (4, 5), (4, 6)</div>
                      <div>• 5-ன் சோடிகள்: (5, 4), <b style="color:#fde047; background:#0369a1; padding:2px 6px; border-radius:4px;">(5, 5)</b>, <b style="color:#fde047; background:#0369a1; padding:2px 6px; border-radius:4px;">(5, 6)</b></div>
                      <div>• 6-ன் சோடிகள்: (6, 4), <b style="color:#fde047; background:#0369a1; padding:2px 6px; border-radius:4px;">(6, 5)</b>, <b style="color:#fde047; background:#0369a1; padding:2px 6px; border-radius:4px;">(6, 6)</b></div>
                    </div>
                  </div>
                `,
                audioScriptTa: "படி மூன்று: வலதுபக்கத்தின் முதல் பகுதியான B பெருக்கல் B-ஐக் கணக்கிடுவோம். B கணத்தில் நான்கு, ஐந்து, ஆறு என மூன்று உறுப்புகள் உள்ளன. மூன்று பெருக்கல் மூன்று மொத்தம் ஒன்பது வரிசைச் சோடிகள் உருவாகும். இதில் ஐந்து, ஐந்து; ஐந்து, ஆறு; ஆறு, ஐந்து; ஆறு, ஆறு ஆகிய சோடிகளைக் கவனமாகக் குறித்துக் கொள்ளுங்கள்.",
                audioScriptEn: "Step 3: Calculate B cross B for the Right Hand Side. Since set B has 3 elements, 3 times 3 gives 9 ordered pairs. Note the pairs 5,5; 5,6; 6,5; and 6,6."
              },
              {
                stepNum: 4,
                badge: "④ வலதுபக்கம் பகுதி 2: C × C கணக்கிடுதல் (9 சோடிகள்)",
                badgeEn: "④ Right Hand Side Part 2: Find C × C",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">படி 4: வலதுபக்கம் - C × C கண்டறிதல்</div>
                  <div class="bb-box-blue">
                    <div class="bb-box-title" style="color:#93c5fd;">C × C = {5, 6, 7} × {5, 6, 7} (3 × 3 = 9 சோடிகள்):</div>
                    <div style="font-size:14.5px; line-height:1.8; margin-top:8px; background:rgba(0,0,0,0.3); padding:10px 14px; border-radius:8px;">
                      <div>• 5-ன் சோடிகள்: <b style="color:#fde047; background:#0369a1; padding:2px 6px; border-radius:4px;">(5, 5)</b>, <b style="color:#fde047; background:#0369a1; padding:2px 6px; border-radius:4px;">(5, 6)</b>, (5, 7)</div>
                      <div>• 6-ன் சோடிகள்: <b style="color:#fde047; background:#0369a1; padding:2px 6px; border-radius:4px;">(6, 5)</b>, <b style="color:#fde047; background:#0369a1; padding:2px 6px; border-radius:4px;">(6, 6)</b>, (6, 7)</div>
                      <div>• 7-ன் சோடிகள்: (7, 5), (7, 6), (7, 7)</div>
                    </div>
                  </div>
                `,
                audioScriptTa: "படி நான்கு: வலதுபக்கத்தின் அடுத்த பகுதியான C பெருக்கல் C-ஐக் கணக்கிடுவோம். C கணத்திலும் ஐந்து, ஆறு, ஏழு என மூன்று உறுப்புகள் உள்ளன. இதிலும் மூன்று பெருக்கல் மூன்று மொத்தம் ஒன்பது சோடிகள் கிடைக்கும். இதிலும் ஐந்து, ஐந்து; ஐந்து, ஆறு; ஆறு, ஐந்து; ஆறு, ஆறு ஆகிய சோடிகள் வருவதைக் காணலாம்.",
                audioScriptEn: "Step 4: Compute C cross C. Set C has elements 5, 6, and 7, resulting in 9 ordered pairs. Notice again the occurrence of pairs 5,5; 5,6; 6,5; and 6,6."
              },
              {
                stepNum: 5,
                badge: "⑤ வெட்டுக்கணம் (B × B) ∩ (C × C) பொதுவான சோடிகள்",
                badgeEn: "⑤ Intersection: Common Ordered Pairs",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">படி 5: வெட்டுக்கணம் (B × B) ∩ (C × C)</div>
                  <div class="bb-box-cyan">
                    <div class="bb-box-title" style="color:#67e8f9;">குறியீடு ∩ (Intersection / வெட்டு): இரு கணங்களுக்கும் பொதுவானவை</div>
                    <div class="bb-line" style="font-size:14px; color:#cbd5e1; margin:6px 0;">
                      B × B மற்றும் C × C இரண்டிலும் ஒரே மாதிரியாக உள்ள பொதுவான சோடிகள்:
                    </div>
                    <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:8px; margin:8px 0; font-size:15px; font-weight:800;">
                      <div class="bb-pill-cyan">✔ (5, 5)</div>
                      <div class="bb-pill-cyan">✔ (5, 6)</div>
                      <div class="bb-pill-cyan">✔ (6, 5)</div>
                      <div class="bb-pill-cyan">✔ (6, 6)</div>
                    </div>
                    <div class="bb-box-green" style="margin-top:8px; border:2px solid #4ade80;">
                      <div class="bb-line" style="font-size:16px; font-weight:800; color:#86efac;">
                        (B × B) ∩ (C × C) = {(5, 5), (5, 6), (6, 5), (6, 6)} &nbsp; <b style="color:#ffffff;">---- (2)</b>
                      </div>
                    </div>
                  </div>
                `,
                audioScriptTa: "படி ஐந்து: இப்போது இரண்டிற்கும் வெட்டுக்கணம் காண்போம். வெட்டுக்குறியீடு என்றால் இரண்டு கணங்களுக்கும் பொதுவான சோடிகளை மட்டுமே தேர்வு செய்ய வேண்டும். B பெருக்கல் B மற்றும் C பெருக்கல் C ஆகிய இரண்டிலும் பொதுவான சோடிகள் ஐந்து, ஐந்து; ஐந்து, ஆறு; ஆறு, ஐந்து; ஆறு, ஆறு ஆகிய நான்கு சோடிகள் மட்டுமே. இதனைச் சமன்பாடு இரண்டு என வைத்துக் கொள்வோம்.",
                audioScriptEn: "Step 5: Find the intersection of B cross B and C cross C. Intersection means selecting only the ordered pairs common to both sets. The common pairs are 5,5; 5,6; 6,5; and 6,6. Label this equation 2."
              },
              {
                stepNum: 6,
                badge: "⑥ சமன்பாடுகள் ஒப்பீடு & இறுதி நிரூபணம் (Hence Proved)",
                badgeEn: "⑥ Comparison & Final Proof (Hence Proved)",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">படி 6: முடிவு மற்றும் நிரூபணம் (Conclusion)</div>
                  <div class="bb-box-yellow">
                    <div class="bb-box-title" style="color:#fde047;">சமன்பாடுகள் (1) மற்றும் (2)-லிருந்து:</div>
                    <div class="bb-line" style="line-height:1.8; margin:6px 0;">
                      • சமன்பாடு (1): L.H.S = {(5, 5), (5, 6), (6, 5), (6, 6)}<br>
                      • சமன்பாடு (2): R.H.S = {(5, 5), (5, 6), (6, 5), (6, 6)}
                    </div>
                    <div class="bb-line" style="font-size:16px; font-weight:800; color:#38bdf8;">
                      ∴ இடதுபக்கம் = வலதுபக்கம் (L.H.S = R.H.S)
                    </div>
                  </div>
                  <div class="bb-box-green" style="margin-top:10px; border:2.5px solid #22c55e; text-align:center;">
                    <div class="bb-pill-magenta" style="font-size:20px; font-weight:900; color:#ffffff; padding:8px 16px;">
                      A × A = (B × B) ∩ (C × C)
                    </div>
                    <div style="font-size:18px; font-weight:800; color:#86efac; margin-top:8px;">
                      ✅ என்பது நிரூபிக்கப்பட்டது (Hence Proved). ✓
                    </div>
                  </div>
                `,
                audioScriptTa: "படி ஆறு: சமன்பாடு ஒன்று மற்றும் சமன்பாடு இரண்டை ஒப்பிட்டுப் பாருங்கள். இரண்டின் விடைகளும் துல்லியமாக ஒரே மாதிரியாக உள்ளன. எனவே இடதுபக்கம் சமம் வலதுபக்கம். A பெருக்கல் A சமம் B பெருக்கல் B வெட்டு C பெருக்கல் C என்பது வெற்றிகரமாக நிரூபிக்கப்பட்டது. தேர்வில் இவ்வாறு கட்டமிட்டு எழுதினால் முழு ஐந்து மதிப்பெண்களும் உறுதியாகக் கிடைக்கும்.",
                audioScriptEn: "Step 6: Compare equations 1 and 2. Both sides contain exactly the same ordered pairs. Therefore, Left Hand Side equals Right Hand Side. Hence, A cross A equals B cross B intersection C cross C is proved. Box this final statement neatly to score full 5 marks in public exams."
              }
            ]
          }
        },
        {
          id: "m_tm_1_5",
          type: "5m",
          mark: "5 மதிப்பெண்",
          examYear: "2024",
          examTag: "2024*",
          isImportant: true,
          q: "A = {x ∈ W | x < 2}, B = {x ∈ N | 1 < x ≤ 4} மற்றும்<br><div style='margin:4px 0 6px 18px; font-weight:700;'><span class='math-set'>C = {3,&nbsp;5}</span> எனில்,</div><div style='margin:6px 0 6px 18px; font-weight:700;'>A × (B ∪ C) = (A × B) ∪ (A × C) என்பதைச் சரிபார்க்க.</div>",
          ans: `<div style="line-height:1.8;">
            <b>தீர்வு:</b><br>
            கொடுக்கப்பட்ட கணங்களைப் பட்டியல் முறையில் எழுத:<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              • A = {0,&nbsp;1} (2-ஐ விடக் குறைந்த முழு எண்கள்)<br>
              • B = {2,&nbsp;3,&nbsp;4} (1-க்கும் 4-க்கும் இடைப்பட்ட இயல் எண்கள்)<br>
              • <span class="math-set">C = {3,&nbsp;5}</span>
            </div><br>
            <b>இடதுபக்கம் = A × (B ∪ C):</b><br>
            <div style="margin:4px 0 4px 18px;">
              B ∪ C = {2,&nbsp;3,&nbsp;4} ∪ {3,&nbsp;5} = {2,&nbsp;3,&nbsp;4,&nbsp;5}<br>
              A × (B ∪ C) = {0,&nbsp;1} × {2,&nbsp;3,&nbsp;4,&nbsp;5}<br>
              <b>இடதுபக்கம் = {(0, 2), (0, 3), (0, 4), (0, 5), (1, 2), (1, 3), (1, 4), (1, 5)} ---- (1)</b>
            </div><br>
            <b>வலதுபக்கம் = (A × B) ∪ (A × C):</b><br>
            <div style="margin:4px 0 4px 18px;">
              A × B = {0,&nbsp;1} × {2,&nbsp;3,&nbsp;4}<br>
              = {(0, 2), (0, 3), (0, 4), (1, 2), (1, 3), (1, 4)}<br><br>
              A × C = {0,&nbsp;1} × {3,&nbsp;5}<br>
              = {(0, 3), (0, 5), (1, 3), (1, 5)}<br><br>
              (A × B) ∪ (A × C) = {(0, 2), (0, 3), (0, 4), (0, 5), (1, 2), (1, 3), (1, 4), (1, 5)} ---- (2)
            </div><br>
            (1) மற்றும் (2)-லிருந்து,<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              இடதுபக்கம் = வலதுபக்கம்<br>
              A × (B ∪ C) = (A × B) ∪ (A × C) என்பது சரிபார்க்கப்பட்டது.
            </div>
          </div>`,
          ansTamil: "சேர்ப்புக் கணத்தைக் கண்டுபிடித்துக் கார்டீசியன் பெருக்கல் செய்யும்போது பங்கீட்டு விதி நிறைவு பெறுகிறது.",
          blackboard: {
            title: "Exercise 1.1: கார்டீசியன் பெருக்கல் & பங்கீட்டுப் பண்பு (7 படிகள்)",
            engTitle: "Exercise 1.1: Cartesian Product & Distributive Law (7 Steps)",
            fullBoardImg: "images/math_bb_ex1_1.jpg",
            steps: [
              {
                stepNum: 1,
                badge: "① Find A, B and C (A, B, C கணங்களைக் கண்டறிதல்)",
                badgeEn: "① Find A, B and C",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">படி 1: கொடுக்கப்பட்ட கணங்களைப் பட்டியல் முறையில் எழுதுதல்</div>
                  <div class="bb-grid-3">
                    <div class="bb-box-cyan">
                      <div class="bb-box-title">A = {x ∈ W | x &lt; 2}</div>
                      <div class="bb-box-sub">2-ஐ விடக் குறைந்த முழு எண்கள்</div>
                      <div class="bb-pill-magenta">A = {0, 1}</div>
                    </div>
                    <div class="bb-box-blue">
                      <div class="bb-box-title">B = {x ∈ N | 1 &lt; x ≤ 4}</div>
                      <div class="bb-box-sub">1 &lt; x ≤ 4 இயல் எண்கள்</div>
                      <div class="bb-pill-magenta">B = {2, 3, 4}</div>
                    </div>
                    <div class="bb-box-green">
                      <div class="bb-box-title">C = {3, 5}</div>
                      <div class="bb-box-sub">கொடுக்கப்பட்ட கணம்</div>
                      <div class="bb-pill-magenta">C = {3, 5}</div>
                    </div>
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Step 1: Find A, B and C in roster form</div>
                  <div class="bb-grid-3">
                    <div class="bb-box-cyan">
                      <div class="bb-box-title">A = {x ∈ W | x &lt; 2}</div>
                      <div class="bb-box-sub">Whole numbers less than 2</div>
                      <div class="bb-pill-magenta">A = {0, 1}</div>
                    </div>
                    <div class="bb-box-blue">
                      <div class="bb-box-title">B = {x ∈ N | 1 &lt; x ≤ 4}</div>
                      <div class="bb-box-sub">Natural numbers 1 &lt; x ≤ 4</div>
                      <div class="bb-pill-magenta">B = {2, 3, 4}</div>
                    </div>
                    <div class="bb-box-green">
                      <div class="bb-box-title">C = {3, 5}</div>
                      <div class="bb-box-sub">Given Set</div>
                      <div class="bb-pill-magenta">C = {3, 5}</div>
                    </div>
                  </div>
                `,
                audioScriptTa: "படி ஒன்று: கொடுக்கப்பட்ட கணங்களைக் கண்டறிவோம். முழு எண்களில் இரண்டை விடக் குறைந்த உறுப்புகள் ஏ சமம் பூஜ்ஜியம், ஒன்று. இயல் எண்களில் ஒன்றிலிருந்து நான்கு வரை உள்ள உறுப்புகள் பி சமம் இரண்டு, மூன்று, நான்கு. சி சமம் மூன்று, ஐந்து.",
                audioScriptEn: "Step 1: Find sets A, B, and C. Whole numbers less than 2 gives set A equals 0 and 1. Natural numbers between 1 and 4 gives set B equals 2, 3, and 4. Set C equals 3 and 5."
              },
              {
                stepNum: 2,
                badge: "② Find B ∪ C (சேர்ப்புக் கணம் கண்டறிதல்)",
                badgeEn: "② Find B ∪ C",
                chalkHtml: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>B</b> = {2, 3, 4}, &nbsp; <b>C</b> = {3, 5}</div>
                    <div class="bb-line" style="margin-top:6px;">இரண்டு கணங்களின் அனைத்து உறுப்புகளையும் இணைக்க (Union):</div>
                    <div class="bb-pill-magenta" style="font-size:16px; margin-top:8px;">B ∪ C = {2, 3, 4, 5}</div>
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>B</b> = {2, 3, 4}, &nbsp; <b>C</b> = {3, 5}</div>
                    <div class="bb-line" style="margin-top:6px;">Combine all elements from both sets:</div>
                    <div class="bb-pill-magenta" style="font-size:16px; margin-top:8px;">B ∪ C = {2, 3, 4, 5}</div>
                  </div>
                `,
                audioScriptTa: "படி இரண்டு: பி சேர்ப்பு சி கண்டறிவோம். பி மற்றும் சி கணங்களின் உறுப்புகளை இணைத்தால், பி சேர்ப்பு சி சமம் இரண்டு, மூன்று, நான்கு, ஐந்து.",
                audioScriptEn: "Step 2: Find the union B union C. Combining all elements from B and C without repetition gives 2, 3, 4, and 5."
              },
              {
                stepNum: 3,
                badge: "③ Find A × (B ∪ C) [இடதுபக்கம் (L.H.S)]",
                badgeEn: "③ Find A × (B ∪ C) [Left-Hand Side]",
                chalkHtml: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>A</b> = {0, 1}, &nbsp; <b>B ∪ C</b> = {2, 3, 4, 5}</div>
                    <div class="bb-line" style="margin-top:4px;">A-ன் ஒவ்வொரு உறுப்பையும் B ∪ C உறுப்புகளுடன் வரிசைச் சோடிகளாக்க:</div>
                    <div class="bb-pill-magenta" style="margin-top:8px; line-height:1.7;">
                      A × (B ∪ C) = {(0, 2), (0, 3), (0, 4), (0, 5),<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1, 2), (1, 3), (1, 4), (1, 5)} &nbsp; <span style="color:#fde047; font-weight:800;">---- (1)</span>
                    </div>
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>A</b> = {0, 1}, &nbsp; <b>B ∪ C</b> = {2, 3, 4, 5}</div>
                    <div class="bb-line" style="margin-top:4px;">Pair each element of A with every element of B union C:</div>
                    <div class="bb-pill-magenta" style="margin-top:8px; line-height:1.7;">
                      A × (B ∪ C) = {(0, 2), (0, 3), (0, 4), (0, 5),<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1, 2), (1, 3), (1, 4), (1, 5)} &nbsp; <span style="color:#fde047; font-weight:800;">---- (1)</span>
                    </div>
                  </div>
                `,
                audioScriptTa: "படி மூன்று: இடதுபக்கம் ஏ கார்டீசியன் பெருக்கல் பி சேர்ப்பு சி. ஏ கணத்தின் உறுப்புகளுடன் பி சேர்ப்பு சி உறுப்புகளை வரிசைச் சோடிகளாக்கினால் எட்டு சோடிகள் கிடைக்கின்றன. இது சமன்பாடு ஒன்று.",
                audioScriptEn: "Step 3: Find the left-hand side, A cross B union C. Pairing each element of A with every element of B union C yields 8 ordered pairs. Mark this as equation 1."
              },
              {
                stepNum: 4,
                badge: "④ Find A × B (A பெருக்கல் B)",
                badgeEn: "④ Find A × B",
                chalkHtml: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>A</b> = {0, 1}, &nbsp; <b>B</b> = {2, 3, 4}</div>
                    <div class="bb-line" style="margin-top:4px;">A மற்றும் B கணங்களின் கார்டீசியன் பெருக்கல்:</div>
                    <div class="bb-pill-magenta" style="margin-top:8px;">
                      A × B = {(0, 2), (0, 3), (0, 4), (1, 2), (1, 3), (1, 4)}
                    </div>
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>A</b> = {0, 1}, &nbsp; <b>B</b> = {2, 3, 4}</div>
                    <div class="bb-line" style="margin-top:4px;">Cartesian product of A and B:</div>
                    <div class="bb-pill-magenta" style="margin-top:8px;">
                      A × B = {(0, 2), (0, 3), (0, 4), (1, 2), (1, 3), (1, 4)}
                    </div>
                  </div>
                `,
                audioScriptTa: "படி நான்கு: வலதுபக்கத்தின் முதல் பகுதியான ஏ பெருக்கல் பி காண வேண்டும். ஏ மற்றும் பி கணங்களின் வரிசைச் சோடிகள் ஆறு கிடைக்கின்றன.",
                audioScriptEn: "Step 4: Find A cross B. Pairing elements of set A with set B gives 6 ordered pairs."
              },
              {
                stepNum: 5,
                badge: "⑤ Find A × C (A பெருக்கல் C)",
                badgeEn: "⑤ Find A × C",
                chalkHtml: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>A</b> = {0, 1}, &nbsp; <b>C</b> = {3, 5}</div>
                    <div class="bb-line" style="margin-top:4px;">A மற்றும் C கணங்களின் கார்டீசியன் பெருக்கல்:</div>
                    <div class="bb-pill-magenta" style="margin-top:8px;">
                      A × C = {(0, 3), (0, 5), (1, 3), (1, 5)}
                    </div>
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>A</b> = {0, 1}, &nbsp; <b>C</b> = {3, 5}</div>
                    <div class="bb-line" style="margin-top:4px;">Cartesian product of A and C:</div>
                    <div class="bb-pill-magenta" style="margin-top:8px;">
                      A × C = {(0, 3), (0, 5), (1, 3), (1, 5)}
                    </div>
                  </div>
                `,
                audioScriptTa: "படி ஐந்து: வலதுபக்கத்தின் இரண்டாம் பகுதியான ஏ பெருக்கல் சி காண வேண்டும். ஏ மற்றும் சி கணங்களின் வரிசைச் சோடிகள் நான்கு கிடைக்கின்றன.",
                audioScriptEn: "Step 5: Find A cross C. Pairing elements of set A with set C gives 4 ordered pairs."
              },
              {
                stepNum: 6,
                badge: "⑥ Find (A × B) ∪ (A × C) [வலதுபக்கம் (R.H.S)]",
                badgeEn: "⑥ Find (A × B) ∪ (A × C) [Right-Hand Side]",
                chalkHtml: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>A × B</b> = {(0, 2), (0, 3), (0, 4), (1, 2), (1, 3), (1, 4)}</div>
                    <div class="bb-line">• <b>A × C</b> = {(0, 3), (0, 5), (1, 3), (1, 5)}</div>
                    <div class="bb-line" style="margin-top:6px;">இவ்விரண்டையும் சேர்த்தால் (Union):</div>
                    <div class="bb-pill-magenta" style="margin-top:8px; line-height:1.7;">
                      (A × B) ∪ (A × C) = {(0, 2), (0, 3), (0, 4), (0, 5),<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1, 2), (1, 3), (1, 4), (1, 5)} &nbsp; <span style="color:#fde047; font-weight:800;">---- (2)</span>
                    </div>
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>A × B</b> = {(0, 2), (0, 3), (0, 4), (1, 2), (1, 3), (1, 4)}</div>
                    <div class="bb-line">• <b>A × C</b> = {(0, 3), (0, 5), (1, 3), (1, 5)}</div>
                    <div class="bb-line" style="margin-top:6px;">Taking the union of both sets:</div>
                    <div class="bb-pill-magenta" style="margin-top:8px; line-height:1.7;">
                      (A × B) ∪ (A × C) = {(0, 2), (0, 3), (0, 4), (0, 5),<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1, 2), (1, 3), (1, 4), (1, 5)} &nbsp; <span style="color:#fde047; font-weight:800;">---- (2)</span>
                    </div>
                  </div>
                `,
                audioScriptTa: "படி ஆறு: வலதுபக்கம் சமன்பாடு இரண்டு. ஏ பெருக்கல் பி மற்றும் ஏ பெருக்கல் சி ஆகிய இரண்டையும் சேர்க்கும்போது எட்டு வரிசைச் சோடிகள் கிடைக்கின்றன. இது சமன்பாடு இரண்டு.",
                audioScriptEn: "Step 6: Find the union of A cross B and A cross C. Combining both sets gives 8 ordered pairs. Mark this as equation 2."
              },
              {
                stepNum: 7,
                badge: "⑦ Compare the two sides (இரு பக்கங்களையும் ஒப்பிடுதல்)",
                badgeEn: "⑦ Compare the two sides",
                chalkHtml: `
                  <div class="bb-compare-container">
                    <div class="bb-compare-col">
                      <div class="bb-compare-title">இடதுபக்கம் (L.H.S)</div>
                      <div class="bb-pill-magenta" style="font-size:13px; line-height:1.6;">
                        A × (B ∪ C) =<br>{(0, 2), (0, 3), (0, 4), (0, 5),<br>(1, 2), (1, 3), (1, 4), (1, 5)}
                      </div>
                    </div>
                    <div class="bb-compare-eq">=</div>
                    <div class="bb-compare-col">
                      <div class="bb-compare-title">வலதுபக்கம் (R.H.S)</div>
                      <div class="bb-pill-magenta" style="font-size:13px; line-height:1.6;">
                        (A × B) ∪ (A × C) =<br>{(0, 2), (0, 3), (0, 4), (0, 5),<br>(1, 2), (1, 3), (1, 4), (1, 5)}
                      </div>
                    </div>
                  </div>
                  <div class="bb-banner-ribbon" style="margin-top:16px;">
                    Hence, A × (B ∪ C) = (A × B) ∪ (A × C) &nbsp; ✓
                  </div>
                  <div class="bb-sticky-note" style="margin-top:12px;">
                    💡 இரண்டு பக்கங்களிலும் ஒரே ordered pairs கிடைக்கின்றன. எனவே பங்கீட்டுப் பண்பு சரிபார்க்கப்பட்டது!
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-compare-container">
                    <div class="bb-compare-col">
                      <div class="bb-compare-title">Left-Hand Side (L.H.S)</div>
                      <div class="bb-pill-magenta" style="font-size:13px; line-height:1.6;">
                        A × (B ∪ C) =<br>{(0, 2), (0, 3), (0, 4), (0, 5),<br>(1, 2), (1, 3), (1, 4), (1, 5)}
                      </div>
                    </div>
                    <div class="bb-compare-eq">=</div>
                    <div class="bb-compare-col">
                      <div class="bb-compare-title">Right-Hand Side (R.H.S)</div>
                      <div class="bb-pill-magenta" style="font-size:13px; line-height:1.6;">
                        (A × B) ∪ (A × C) =<br>{(0, 2), (0, 3), (0, 4), (0, 5),<br>(1, 2), (1, 3), (1, 4), (1, 5)}
                      </div>
                    </div>
                  </div>
                  <div class="bb-banner-ribbon" style="margin-top:16px;">
                    Hence, A × (B ∪ C) = (A × B) ∪ (A × C) &nbsp; ✓
                  </div>
                  <div class="bb-sticky-note" style="margin-top:12px;">
                    💡 Identical ordered pairs are obtained on both sides. Hence the distributive law is verified!
                  </div>
                `,
                audioScriptTa: "படி ஏழு: சமன்பாடுகள் ஒன்று மற்றும் இரண்டை ஒப்பிடுவோம். இரண்டு பக்கங்களிலும் ஒரே வரிசைச் சோடிகள் கிடைக்கின்றன. இடதுபக்கம் சமம் வலதுபக்கம். எனவே பங்கீட்டுப் பண்பு சரிபார்க்கப்பட்டது!",
                audioScriptEn: "Step 7: Compare both sides. From equations 1 and 2, both sides have identical ordered pairs. L.H.S equals R.H.S. Hence, the distributive property is verified!"
              }
            ]
          },
        },
        {
          id: "m_tm_1_6",
          type: "5m",
          mark: "5 மதிப்பெண்",
          examYear: "2022",
          examTag: "2022*",
          isImportant: true,
          q: "A = {x ∈ W | x < 2}, B = {x ∈ N | 1 < x ≤ 4} மற்றும்<br><div style='margin:4px 0 6px 18px; font-weight:700;'><span class='math-set'>C = {3,&nbsp;5}</span> எனில்,</div><div style='margin:6px 0 6px 18px; font-weight:700;'>A × (B ∩ C) = (A × B) ∩ (A × C) என்பதைச் சரிபார்க்க.</div>",
          ans: `<div style="line-height:1.8;">
            <b>தீர்வு:</b><br>
            கணங்களின் பட்டியல் வடிவம்:<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              A = {0,&nbsp;1}<br>
              B = {2,&nbsp;3,&nbsp;4}<br>
              <span class="math-set">C = {3,&nbsp;5}</span>
            </div><br>
            <b>இடதுபக்கம் = A × (B ∩ C):</b><br>
            <div style="margin:4px 0 4px 18px;">
              B ∩ C = {2,&nbsp;3,&nbsp;4} ∩ {3,&nbsp;5} = {3}<br>
              A × (B ∩ C) = {0,&nbsp;1} × {3}<br>
              <b>இடதுபக்கம் = {(0,&nbsp;3), (1,&nbsp;3)} ---- (1)</b>
            </div><br>
            <b>வலதுபக்கம் = (A × B) ∩ (A × C):</b><br>
            <div style="margin:4px 0 4px 18px;">
              A × B = {(0, 2), (0, 3), (0, 4), (1, 2), (1, 3), (1, 4)}<br>
              A × C = {(0, 3), (0, 5), (1, 3), (1, 5)}<br>
              இவ்விரண்டிற்கும் பொதுவான வெட்டுச் சோடிகள்:<br>
              <b>(A × B) ∩ (A × C) = {(0,&nbsp;3), (1,&nbsp;3)} ---- (2)</b>
            </div><br>
            (1) மற்றும் (2)-லிருந்து,<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              இடதுபக்கம் = வலதுபக்கம்<br>
              A × (B ∩ C) = (A × B) ∩ (A × C) என்பது சரிபார்க்கப்பட்டது.
            </div>
          </div>`,
          ansTamil: "வெட்டுக் கணத்தைக் கொண்டு கார்டீசியன் பெருக்கலின் பங்கீட்டு விதியைச் சரிபார்க்கிறோம்.",
          blackboard: {
            title: "Exercise 1.1: கார்டீசியன் பெருக்கல் & வெட்டுப் பங்கீட்டுப் பண்பு (6 படிகள்)",
            engTitle: "Exercise 1.1: Cartesian Product & Distributive Law over Intersection (6 Steps)",
            steps: [
              {
                stepNum: 1,
                badge: "① Find A, B and C (கணங்களைக் கண்டறிதல்)",
                badgeEn: "① Find A, B and C",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">படி 1: கொடுக்கப்பட்ட கணங்களைப் பட்டியல் முறையில் எழுதுதல்</div>
                  <div class="bb-grid-3">
                    <div class="bb-box-cyan">
                      <div class="bb-box-title">A = {x ∈ W | x &lt; 2}</div>
                      <div class="bb-box-sub">2-ஐ விடக் குறைந்த முழு எண்கள்</div>
                      <div class="bb-pill-magenta">A = {0, 1}</div>
                    </div>
                    <div class="bb-box-blue">
                      <div class="bb-box-title">B = {x ∈ N | 1 &lt; x ≤ 4}</div>
                      <div class="bb-box-sub">1 &lt; x ≤ 4 இயல் எண்கள்</div>
                      <div class="bb-pill-magenta">B = {2, 3, 4}</div>
                    </div>
                    <div class="bb-box-green">
                      <div class="bb-box-title">C = {3, 5}</div>
                      <div class="bb-box-sub">கொடுக்கப்பட்ட கணம்</div>
                      <div class="bb-pill-magenta">C = {3, 5}</div>
                    </div>
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Step 1: Find sets A, B, and C in roster form</div>
                  <div class="bb-grid-3">
                    <div class="bb-box-cyan">
                      <div class="bb-box-title">A = {x ∈ W | x &lt; 2}</div>
                      <div class="bb-box-sub">Whole numbers less than 2</div>
                      <div class="bb-pill-magenta">A = {0, 1}</div>
                    </div>
                    <div class="bb-box-blue">
                      <div class="bb-box-title">B = {x ∈ N | 1 &lt; x ≤ 4}</div>
                      <div class="bb-box-sub">Natural numbers 1 &lt; x ≤ 4</div>
                      <div class="bb-pill-magenta">B = {2, 3, 4}</div>
                    </div>
                    <div class="bb-box-green">
                      <div class="bb-box-title">C = {3, 5}</div>
                      <div class="bb-box-sub">Given Set</div>
                      <div class="bb-pill-magenta">C = {3, 5}</div>
                    </div>
                  </div>
                `,
                audioScriptTa: "படி ஒன்று: கொடுக்கப்பட்ட கணங்களை எழுதுவோம். ஏ சமம் பூஜ்ஜியம், ஒன்று. பி சமம் இரண்டு, மூன்று, நான்கு. சி சமம் மூன்று, ஐந்து.",
                audioScriptEn: "Step 1: Write sets A, B, and C in roster form. A equals 0 and 1. B equals 2, 3, and 4. C equals 3 and 5."
              },
              {
                stepNum: 2,
                badge: "② Find B ∩ C (வெட்டுக் கணம் கண்டறிதல்)",
                badgeEn: "② Find B ∩ C (Intersection)",
                chalkHtml: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>B</b> = {2, 3, 4}, &nbsp; <b>C</b> = {3, 5}</div>
                    <div class="bb-line" style="margin-top:6px;">இரண்டு கணங்களுக்கும் பொதுவான உறுப்பு (Intersection):</div>
                    <div class="bb-pill-magenta" style="font-size:16px; margin-top:8px;">B ∩ C = {3}</div>
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>B</b> = {2, 3, 4}, &nbsp; <b>C</b> = {3, 5}</div>
                    <div class="bb-line" style="margin-top:6px;">Common elements in both sets:</div>
                    <div class="bb-pill-magenta" style="font-size:16px; margin-top:8px;">B ∩ C = {3}</div>
                  </div>
                `,
                audioScriptTa: "படி இரண்டு: பி வெட்டு சி காண்போம். பி மற்றும் சி ஆகிய இரண்டு கணங்களுக்கும் பொதுவான ஒரே உறுப்பு மூன்று மட்டுமே. எனவே பி வெட்டு சி சமம் மூன்று.",
                audioScriptEn: "Step 2: Find B intersection C. The only common element between set B and set C is 3. So B intersection C equals 3."
              },
              {
                stepNum: 3,
                badge: "③ Find A × (B ∩ C) [இடதுபக்கம் (L.H.S)]",
                badgeEn: "③ Find A × (B ∩ C) [Left-Hand Side]",
                chalkHtml: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>A</b> = {0, 1}, &nbsp; <b>B ∩ C</b> = {3}</div>
                    <div class="bb-line" style="margin-top:4px;">A-ன் உறுப்புகளுடன் B ∩ C-ன் உறுப்பை வரிசைச் சோடிகளாக்க:</div>
                    <div class="bb-pill-magenta" style="margin-top:8px; font-size:15px;">
                      A × (B ∩ C) = {(0, 3), (1, 3)} &nbsp; <span style="color:#fde047; font-weight:800;">---- (1)</span>
                    </div>
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>A</b> = {0, 1}, &nbsp; <b>B ∩ C</b> = {3}</div>
                    <div class="bb-line" style="margin-top:4px;">Pair each element of A with elements of B intersection C:</div>
                    <div class="bb-pill-magenta" style="margin-top:8px; font-size:15px;">
                      A × (B ∩ C) = {(0, 3), (1, 3)} &nbsp; <span style="color:#fde047; font-weight:800;">---- (1)</span>
                    </div>
                  </div>
                `,
                audioScriptTa: "படி மூன்று: இடதுபக்கம் ஏ கார்டீசியன் பெருக்கல் பி வெட்டு சி காண்போம். வரிசைச் சோடிகள் பூஜ்ஜியம் கமா மூன்று மற்றும் ஒன்று கமா மூன்று. இது சமன்பாடு ஒன்று.",
                audioScriptEn: "Step 3: Find Left Hand Side A cross B intersection C. Pairing elements gives ordered pairs (0, 3) and (1, 3). Mark this as equation 1."
              },
              {
                stepNum: 4,
                badge: "④ Find A × B and A × C",
                badgeEn: "④ Find A × B and A × C",
                chalkHtml: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>A × B</b> = {(0, 2), (0, 3), (0, 4), (1, 2), (1, 3), (1, 4)}</div>
                    <div class="bb-line" style="margin-top:6px;">• <b>A × C</b> = {(0, 3), (0, 5), (1, 3), (1, 5)}</div>
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>A × B</b> = {(0, 2), (0, 3), (0, 4), (1, 2), (1, 3), (1, 4)}</div>
                    <div class="bb-line" style="margin-top:6px;">• <b>A × C</b> = {(0, 3), (0, 5), (1, 3), (1, 5)}</div>
                  </div>
                `,
                audioScriptTa: "படி நான்கு: ஏ பெருக்கல் பி மற்றும் ஏ பெருக்கல் சி ஆகிய இரண்டின் கார்டீசியன் பெருக்கல்களைக் காண்கிறோம்.",
                audioScriptEn: "Step 4: Find the Cartesian products A cross B and A cross C."
              },
              {
                stepNum: 5,
                badge: "⑤ Find (A × B) ∩ (A × C) [வலதுபக்கம் (R.H.S)]",
                badgeEn: "⑤ Find (A × B) ∩ (A × C) [Right-Hand Side]",
                chalkHtml: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">A × B மற்றும் A × C-க்கு பொதுவான வெட்டுச் சோடிகள்:</div>
                    <div class="bb-pill-magenta" style="margin-top:8px; font-size:15px;">
                      (A × B) ∩ (A × C) = {(0, 3), (1, 3)} &nbsp; <span style="color:#fde047; font-weight:800;">---- (2)</span>
                    </div>
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-box-cyan">
                    <div class="bb-line">Common intersection pairs in both sets:</div>
                    <div class="bb-pill-magenta" style="margin-top:8px; font-size:15px;">
                      (A × B) ∩ (A × C) = {(0, 3), (1, 3)} &nbsp; <span style="color:#fde047; font-weight:800;">---- (2)</span>
                    </div>
                  </div>
                `,
                audioScriptTa: "படி ஐந்து: வலதுபக்கம் சமன்பாடு இரண்டு. ஏ பெருக்கல் பி மற்றும் ஏ பெருக்கல் சி ஆகியவற்றின் பொதுவான வெட்டுச் சோடிகள் பூஜ்ஜியம் கமா மூன்று மற்றும் ஒன்று கமா மூன்று. இது சமன்பாடு இரண்டு.",
                audioScriptEn: "Step 5: Find the intersection of A cross B and A cross C. The common pairs are (0, 3) and (1, 3). Mark this as equation 2."
              },
              {
                stepNum: 6,
                badge: "⑥ Compare both sides (ஒப்பிடுதல்)",
                badgeEn: "⑥ Compare both sides",
                chalkHtml: `
                  <div class="bb-compare-container">
                    <div class="bb-compare-col">
                      <div class="bb-compare-title">இடதுபக்கம் (L.H.S)</div>
                      <div class="bb-pill-magenta">{(0, 3), (1, 3)}</div>
                    </div>
                    <div class="bb-compare-eq">=</div>
                    <div class="bb-compare-col">
                      <div class="bb-compare-title">வலதுபக்கம் (R.H.S)</div>
                      <div class="bb-pill-magenta">{(0, 3), (1, 3)}</div>
                    </div>
                  </div>
                  <div class="bb-banner-ribbon" style="margin-top:16px;">
                    Hence, A × (B ∩ C) = (A × B) ∩ (A × C) &nbsp; ✓
                  </div>
                  <div class="bb-sticky-note" style="margin-top:12px;">
                    💡 சமன்பாடுகள் (1) மற்றும் (2)-லிருந்து இடதுபக்கம் = வலதுபக்கம் என்பது நிரூபிக்கப்பட்டது!
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-compare-container">
                    <div class="bb-compare-col">
                      <div class="bb-compare-title">Left-Hand Side (L.H.S)</div>
                      <div class="bb-pill-magenta">{(0, 3), (1, 3)}</div>
                    </div>
                    <div class="bb-compare-eq">=</div>
                    <div class="bb-compare-col">
                      <div class="bb-compare-title">Right-Hand Side (R.H.S)</div>
                      <div class="bb-pill-magenta">{(0, 3), (1, 3)}</div>
                    </div>
                  </div>
                  <div class="bb-banner-ribbon" style="margin-top:16px;">
                    Hence, A × (B ∩ C) = (A × B) ∩ (A × C) &nbsp; ✓
                  </div>
                  <div class="bb-sticky-note" style="margin-top:12px;">
                    💡 From (1) and (2), L.H.S equals R.H.S. Hence verified!
                  </div>
                `,
                audioScriptTa: "படி ஆறு: சமன்பாடுகள் ஒன்று மற்றும் இரண்டை ஒப்பிட, இரு பக்கங்களிலும் ஒரே வரிசைச் சோடிகள் கிடைக்கின்றன. இடதுபக்கம் சமம் வலதுபக்கம். எனவே சரிபார்க்கப்பட்டது!",
                audioScriptEn: "Step 6: Comparing equations 1 and 2, both sides have identical ordered pairs. L.H.S equals R.H.S. Hence verified!"
              }
            ]
          }
        }
      ]
    },

    // -------------------------------------------------------------
    // பகுதி 2: உறவுகள் (பயிற்சி 1.2)
    // -------------------------------------------------------------
    {
      id: "sec_tm_2",
      title: "பயிற்சி 1.2: உறவுகள், மதிப்பகம் மற்றும் வீச்சகம்",
      author: "அத்தியாயம் 1: உறவுகளும் சார்புகளும்",
      questions: [
        {
          id: "m_tm_2_1",
          type: "2m",
          mark: "2 மதிப்பெண்",
          q: "A = {1,&nbsp;2,&nbsp;3,&nbsp;7} மற்றும் B = {3,&nbsp;0,&nbsp;-1,&nbsp;7} என்க. பின்வருவனவற்றில் எவை A-யிலிருந்து B-க்கான உறவாகும்?<br><div style='margin:6px 0 6px 18px;'>1. R₁ = {(2,&nbsp;1), (7,&nbsp;1)}<br>2. R₂ = {(-1,&nbsp;1)}<br>3. R₃ = {(2,&nbsp;-1), (7,&nbsp;7), (1,&nbsp;3)}</div>",
          ans: `<div style="line-height:1.8;">
            <b>தீர்வு:</b><br>
            <div style="margin:4px 0 4px 18px;">
              A × B = {(1,3), (1,0), (1,-1), (1,7), (2,3), (2,0), (2,-1), (2,7), (3,3), (3,0), (3,-1), (3,7), (7,3), (7,0), (7,-1), (7,7)}
            </div><br>
            <b>1. R₁ = {(2, 1), (7, 1)}:</b><br>
            <div style="margin:4px 0 4px 18px;">
              இங்கு 1 ∉ B என்பதால் (2, 1) ∉ A × B.<br>
              எனவே, R₁ என்பது A × B-ன் உட்கணம் அல்ல.<br>
              <b>ஆகையால் R₁ ஓர் உறவு அல்ல.</b>
            </div><br>
            <b>2. R₂ = {(-1, 1)}:</b><br>
            <div style="margin:4px 0 4px 18px;">
              இங்கு -1 ∉ A மற்றும் 1 ∉ B. எனவே (-1, 1) ∉ A × B.<br>
              <b>ஆகையால் R₂ ஓர் உறவு அல்ல.</b>
            </div><br>
            <b>3. R₃ = {(2, -1), (7, 7), (1, 3)}:</b><br>
            <div style="margin:4px 0 4px 18px;">
              இங்குள்ள அனைத்து சோடிகளும் A × B-ல் உள்ளன.<br>
              <b>ஆகையால் R₃ என்பது A-யிலிருந்து B-க்கான உறவாகும்.</b>
            </div>
          </div>`,
          ansTamil: "சோடிகள் அனைத்தும் கார்டீசியன் பெருக்கலின் உட்கணமாக இருந்தால் மட்டுமே அது உறவு ஆகும்."
        },
        {
          id: "m_tm_2_2",
          videoUrl: "https://youtu.be/zyRPNDJQD0Q",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examYear: "2023",
          examTag: "2023*",
          isImportant: true,
          q: "R = {(x, y) | y = x + 3, x ∈ {0,&nbsp;1,&nbsp;2,&nbsp;3,&nbsp;4,&nbsp;5}} என்ற உறவின் மதிப்பகத்தையும் வீச்சகத்தையும் காண்க.",
          ans: `<div style="line-height:1.8;">
            <b>தீர்வு:</b><br>
            கொடுக்கப்பட்ட சமன்பாடு: y = x + 3<br>
            <div style="margin:4px 0 4px 18px;">
              • x = 0 எனில், y = 0 + 3 = 3 ⇒ (0, 3)<br>
              • x = 1 எனில், y = 1 + 3 = 4 ⇒ (1, 4)<br>
              • x = 2 எனில், y = 2 + 3 = 5 ⇒ (2, 5)<br>
              • x = 3 எனில், y = 3 + 3 = 6 ⇒ (3, 6)<br>
              • x = 4 எனில், y = 4 + 3 = 7 ⇒ (4, 7)<br>
              • x = 5 எனில், y = 5 + 3 = 8 ⇒ (5, 8)
            </div><br>
            வரிசைச் சோடிகளின் கணம்:<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              R = {(0,&nbsp;3), (1,&nbsp;4), (2,&nbsp;5), (3,&nbsp;6), (4,&nbsp;7), (5,&nbsp;8)}
            </div><br>
            <b>மதிப்பகம் = {0,&nbsp;1,&nbsp;2,&nbsp;3,&nbsp;4,&nbsp;5}</b><br>
            <b>வீச்சகம் = {3,&nbsp;4,&nbsp;5,&nbsp;6,&nbsp;7,&nbsp;8}</b>
          </div>`,
          ansTamil: "உறவின் முதல் உறுப்புகள் மதிப்பகம் எனவும், அதனுடன் தொடர்புடைய இரண்டாம் உறுப்புகள் வீச்சகம் எனவும் அமையும்.",
          blackboard: {
            title: "பயிற்சி 1.2 (வினா 3): உறவு R-ன் மதிப்பகம் மற்றும் வீச்சகம் கண்டறிதல்",
            engTitle: "Exercise 1.2 (Q3): Finding Domain and Range of Relation R",
            steps: [
              {
                stepNum: 1,
                badge: "① கொடுக்கப்பட்ட சமன்பாடு & x-ன் மதிப்புகள்",
                badgeEn: "① Given Equation & Domain Values",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">படி 1: கொடுக்கப்பட்ட உறவின் சமன்பாடு & x-ன் மதிப்புகள்</div>
                  <div class="bb-box-cyan">
                    <div class="bb-box-title" style="color:#67e8f9;">கொடுக்கப்பட்ட நிபந்தனை (Given Condition):</div>
                    <div class="bb-line" style="font-size:16px; font-weight:800; color:#fde047; margin:6px 0;">
                      y = x + 3
                    </div>
                    <div class="bb-line" style="font-size:15px; font-weight:700; color:#ffffff;">
                      இங்கு x ∈ {0, 1, 2, 3, 4, 5}
                    </div>
                  </div>
                  <div class="bb-box-blue" style="margin-top:10px;">
                    <div class="bb-line">x-ன் ஒவ்வொரு மதிப்பையும் y = x + 3-ல் பிரதியிட்டு y மற்றும் வரிசைச் சோடிகளைக் காண்போம்.</div>
                  </div>
                `,
                audioScriptTa: "படி ஒன்று: கொடுக்கப்பட்ட நிபந்தனை மற்றும் x-ன் மதிப்புகளைப் பார்ப்போம். இங்கு y சமம் x கூட்டல் மூன்று என்ற சமன்பாடும், x-ன் மதிப்புகளாக பூஜ்ஜியம், ஒன்று, இரண்டு, மூன்று, நான்கு, ஐந்து ஆகிய எண்களும் கொடுக்கப்பட்டுள்ளன. x-ன் ஒவ்வொரு மதிப்பையும் சமன்பாட்டில் பிரதியிட்டு y மற்றும் வரிசைச் சோடிகளை வரிசையாகக் காண்போம்.",
                audioScriptEn: "Step 1: Write down the given relation condition and values of x. The equation is y equals x plus 3, with x belonging to the set 0, 1, 2, 3, 4, and 5. We will substitute each value of x into the equation to find y."
              },
              {
                stepNum: 2,
                badge: "② y மற்றும் வரிசைச் சோடிகள் (x, y) கணக்கிடுதல்",
                badgeEn: "② Compute y and Ordered Pairs",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">படி 2: x-ன் ஒவ்வொரு மதிப்பிற்கும் y-ஐப் பிரதியிடுதல்</div>
                  <div class="bb-grid-2">
                    <div class="bb-box-cyan">
                      <div class="bb-line">• x = 0 எனில்: y = 0 + 3 = <b>3</b> ➔ <b style="color:#fde047;">(0, 3)</b></div>
                      <div class="bb-line" style="margin-top:6px;">• x = 1 எனில்: y = 1 + 3 = <b>4</b> ➔ <b style="color:#fde047;">(1, 4)</b></div>
                      <div class="bb-line" style="margin-top:6px;">• x = 2 எனில்: y = 2 + 3 = <b>5</b> ➔ <b style="color:#fde047;">(2, 5)</b></div>
                    </div>
                    <div class="bb-box-cyan">
                      <div class="bb-line">• x = 3 எனில்: y = 3 + 3 = <b>6</b> ➔ <b style="color:#fde047;">(3, 6)</b></div>
                      <div class="bb-line" style="margin-top:6px;">• x = 4 எனில்: y = 4 + 3 = <b>7</b> ➔ <b style="color:#fde047;">(4, 7)</b></div>
                      <div class="bb-line" style="margin-top:6px;">• x = 5 எனில்: y = 5 + 3 = <b>8</b> ➔ <b style="color:#fde047;">(5, 8)</b></div>
                    </div>
                  </div>
                `,
                audioScriptTa: "படி இரண்டு: x-ன் மதிப்புகளைப் பிரதியிடுவோம். x-க்கு பூஜ்ஜியம் போட்டால், y சமம் மூன்று, சோடி பூஜ்ஜியம் கமா மூன்று. x-க்கு ஒன்று போட்டால், y சமம் நான்கு, சோடி ஒன்று கமா நான்கு. x-க்கு இரண்டு போட்டால், y சமம் ஐந்து, சோடி இரண்டு கமா ஐந்து. x-க்கு மூன்று போட்டால், y சமம் ஆறு, சோடி மூன்று கமா ஆறு. x-க்கு நான்கு போட்டால், y சமம் ஏழு, சோடி நான்கு கமா ஏழு. x-க்கு ஐந்து போட்டால், y சமம் எட்டு, சோடி ஐந்து கமா எட்டு.",
                audioScriptEn: "Step 2: Substitute each x into y equals x plus 3. For x equals 0, y is 3, giving pair 0 comma 3. For x equals 1, y is 4, pair 1 comma 4. For x equals 2, y is 5, pair 2 comma 5. For x equals 3, y is 6, pair 3 comma 6. For x equals 4, y is 7, pair 4 comma 7. For x equals 5, y is 8, pair 5 comma 8."
              },
              {
                stepNum: 3,
                badge: "③ உறவு R-ஐ வரிசைச் சோடிகளின் கணமாக எழுதுதல்",
                badgeEn: "③ Write Relation R in Roster Form",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">படி 3: உறவு R-ன் பட்டியல் வடிவம் (Roster Form)</div>
                  <div class="bb-box-green">
                    <div class="bb-box-title" style="color:#86efac;">கண்டறிந்த சோடிகளை கணம் R-ல் எழுத:</div>
                    <div class="bb-pill-magenta" style="font-size:16px; margin:8px 0; font-weight:800; line-height:1.7;">
                      R = {(0, 3), (1, 4), (2, 5), (3, 6), (4, 7), (5, 8)}
                    </div>
                  </div>
                `,
                audioScriptTa: "படி மூன்று: உறவு R-ஐ எழுதுவோம். நாம் கண்டுபிடித்த அனைத்து வரிசைச் சோடிகளையும் சேர்த்து கணம் R-ல் அடைப்புக் குறிகளுக்குள் எழுத வேண்டும். எனவே, R சமம் பூஜ்ஜியம் கமா மூன்று, ஒன்று கமா நான்கு, இரண்டு கமா ஐந்து, மூன்று கமா ஆறு, நான்கு கமா ஏழு, ஐந்து கமா எட்டு.",
                audioScriptEn: "Step 3: Write relation R as a set of ordered pairs. R equals set of pairs: 0 comma 3, 1 comma 4, 2 comma 5, 3 comma 6, 4 comma 7, and 5 comma 8."
              },
              {
                stepNum: 4,
                badge: "④ மதிப்பகம் (Domain) கண்டறிதல்",
                badgeEn: "④ Determine the Domain",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">படி 4: மதிப்பகம் (Domain) கண்டறிதல்</div>
                  <div class="bb-box-yellow">
                    <div class="bb-box-title" style="color:#fde047;">மதிப்பகம் என்பதன் வரையறை:</div>
                    <div class="bb-line">உறவு R-ல் உள்ள வரிசைச் சோடிகளின் <b>முதல் உறுப்புகளின் கணம்</b> (Set of all first elements in R).</div>
                    <div class="bb-line" style="margin-top:6px;">முதல் உறுப்புகள்: <b>0, 1, 2, 3, 4, 5</b></div>
                  </div>
                  <div class="bb-box-green" style="margin-top:10px;">
                    <div class="bb-pill-magenta" style="font-size:18px; font-weight:800;">
                      ⭐ மதிப்பகம் (Domain) = {0, 1, 2, 3, 4, 5}
                    </div>
                  </div>
                `,
                audioScriptTa: "படி நான்கு: மதிப்பகம் கண்டறிவோம். உறவு R-ல் உள்ள வரிசைச் சோடிகளின் முதல் எண்கள் அனைத்தும் மதிப்பகம் எனப்படும். இதில் முதல் எண்கள் பூஜ்ஜியம், ஒன்று, இரண்டு, மூன்று, நான்கு, ஐந்து. எனவே, மதிப்பகம் சமம் கணம் பூஜ்ஜியம், ஒன்று, இரண்டு, மூன்று, நான்கு, ஐந்து.",
                audioScriptEn: "Step 4: Find the domain. The domain consists of all first coordinates from the ordered pairs in relation R. These first coordinates are 0, 1, 2, 3, 4, and 5. Therefore, Domain equals set 0, 1, 2, 3, 4, and 5."
              },
              {
                stepNum: 5,
                badge: "⑤ வீச்சகம் (Range) கண்டறிதல் & இறுதி விடைப் பெட்டி",
                badgeEn: "⑤ Determine the Range & Final Answer",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">படி 5: வீச்சகம் (Range) கண்டறிதல் & தேர்வு விடை</div>
                  <div class="bb-box-yellow">
                    <div class="bb-box-title" style="color:#fde047;">வீச்சகம் என்பதன் வரையறை:</div>
                    <div class="bb-line">உறவு R-ல் உள்ள வரிசைச் சோடிகளின் <b>இரண்டாம் உறுப்புகளின் கணம்</b> (Set of all second elements in R).</div>
                    <div class="bb-line" style="margin-top:6px;">இரண்டாம் உறுப்புகள்: <b>3, 4, 5, 6, 7, 8</b></div>
                  </div>
                  <div class="bb-box-cyan" style="margin-top:10px; border:2px solid #38bdf8;">
                    <div class="bb-box-title" style="color:#38bdf8; font-size:15px;">⭐ இறுதி விடை (Final Answer):</div>
                    <div style="font-size:17px; font-weight:800; color:#ffffff; line-height:1.8; margin-top:6px;">
                      <div>• மதிப்பகம் (Domain) = {0, 1, 2, 3, 4, 5}</div>
                      <div>• வீச்சகம் (Range) = {3, 4, 5, 6, 7, 8}</div>
                    </div>
                  </div>
                `,
                audioScriptTa: "படி ஐந்து: வீச்சகம் கண்டறிந்து இறுதி விடையை எழுதுவோம். உறவு R-ல் உள்ள வரிசைச் சோடிகளின் இரண்டாம் எண்கள் அனைத்தும் வீச்சகம் எனப்படும். இதில் இரண்டாம் எண்கள் மூன்று, நான்கு, ஐந்து, ஆறு, ஏழு, எட்டு. எனவே, வீச்சகம் சமம் கணம் மூன்று, நான்கு, ஐந்து, ஆறு, ஏழு, எட்டு. தேர்வில் மதிப்பகம் மற்றும் வீச்சகம் இரண்டையும் இவ்வாறு தனித்தனியாக பெட்டியிட்டு எழுதினால் முழு இரண்டு மதிப்பெண்களும் கிடைக்கும்.",
                audioScriptEn: "Step 5: Find the range and write the final boxed answer. The range is the set of all second coordinates in relation R, which are 3, 4, 5, 6, 7, and 8. Therefore, Range equals set 3, 4, 5, 6, 7, and 8. Box both answers cleanly for full 2 marks."
              }
            ]
          }
        },
        {
          id: "m_tm_2_3",
          type: "5m",
          mark: "5 மதிப்பெண்",
          examYear: "2020",
          examTag: "2020*",
          isImportant: true,
          q: "கொடுக்கப்பட்ட உறவை: (1) அம்பு வரைபடம் (2) வரைபடம் (3) வரிசைச் சோடிகளின் கணம் மூலமாகக் குறிக்க:<br><div style='margin:6px 0 6px 18px; font-weight:700;'>{(x, y) | x = 2y, x ∈ {2,&nbsp;3,&nbsp;4,&nbsp;5}, y ∈ {1,&nbsp;2,&nbsp;3,&nbsp;4}}</div>",
          ans: `<div style="line-height:1.8;">
            <b>தீர்வு:</b><br>
            கொடுக்கப்பட்டது: x = 2y ⇒ y = x / 2<br>
            இங்கு x ∈ {2,&nbsp;3,&nbsp;4,&nbsp;5} மற்றும் y ∈ {1,&nbsp;2,&nbsp;3,&nbsp;4}:<br>
            <div style="margin:4px 0 4px 18px;">
              • x = 2 எனில், y = 2 / 2 = 1 ∈ y ⇒ <b>(2, 1)</b><br>
              • x = 3 எனில், y = 3 / 2 = 1.5 ∉ y (பொருந்தாது)<br>
              • x = 4 எனில், y = 4 / 2 = 2 ∈ y ⇒ <b>(4, 2)</b><br>
              • x = 5 எனில், y = 5 / 2 = 2.5 ∉ y (பொருந்தாது)
            </div><br>
            <b>1. வரிசைச் சோடிகளின் கணம்:</b><br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              R = {(2,&nbsp;1), (4,&nbsp;2)}
            </div><br>
            <b>2. அம்பு வரைபடம்:</b> கீழேயுள்ள வரைபடம் (i)-ஐக் காண்க (2 ➔ 1 மற்றும் 4 ➔ 2).<br><br>
            <b>3. வரைபடம்:</b> கீழேயுள்ள கார்டீசியன் வரைபடம் (ii)-ஐக் காண்க (கார்டீசியன் தளத்தில் (2, 1) மற்றும் (4, 2) புள்ளிகள் குறிக்கப்பட்டுள்ளன).
          </div>`,
          ansTamil: "நிபந்தனைக்கு உட்பட்ட சோடிகளை அம்பு வரைபடத்திலும் கார்டீசியன் வரைபடத்திலும் குறிக்கிறோம்.",
          diagramSvg: `<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(290px, 1fr)); gap:14px; width:100%; margin:8px 0;">
            <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:12px; box-shadow:0 1px 4px rgba(0,0,0,0.04); text-align:center;">
              <div style="font-size:12.5px; font-weight:700; color:#1e3a8a; margin-bottom:8px;">🎯 (i) அம்பு வரைபடம்</div>
              <svg viewBox="0 0 380 255" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:8px; display:block;">
                <defs>
                  <marker id="arrowhead_tm_q1" markerWidth="8" markerHeight="7" refX="7" refY="3.5" orient="auto">
                    <polygon points="0 0, 8 3.5, 0 7" fill="#dc2626"/>
                  </marker>
                </defs>
                <text x="190" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e3a8a">உறவு: x = 2y</text>
                
                <!-- Ellipse X -->
                <ellipse cx="85" cy="132" rx="52" ry="85" fill="#eff6ff" stroke="#2563eb" stroke-width="2.2"/>
                <text x="85" y="42" text-anchor="middle" font-size="13" font-weight="bold" fill="#1d4ed8">X (மதிப்பகம்)</text>
                
                <text x="64" y="77" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e3a8a">2</text>
                <circle cx="112" cy="72" r="4" fill="#1e40af"/>

                <text x="64" y="117" text-anchor="middle" font-size="14" font-weight="600" fill="#64748b">3</text>
                <circle cx="112" cy="112" r="4" fill="#94a3b8"/>

                <text x="64" y="157" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e3a8a">4</text>
                <circle cx="112" cy="152" r="4" fill="#1e40af"/>

                <text x="64" y="197" text-anchor="middle" font-size="14" font-weight="600" fill="#64748b">5</text>
                <circle cx="112" cy="192" r="4" fill="#94a3b8"/>

                <!-- Ellipse Y -->
                <ellipse cx="295" cy="132" rx="52" ry="85" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.2"/>
                <text x="295" y="42" text-anchor="middle" font-size="13" font-weight="bold" fill="#15803d">Y (துணை மதிப்பகம்)</text>

                <circle cx="268" cy="72" r="4" fill="#15803d"/>
                <text x="314" y="77" text-anchor="middle" font-size="14" font-weight="bold" fill="#14532d">1</text>

                <circle cx="268" cy="112" r="4" fill="#15803d"/>
                <text x="314" y="117" text-anchor="middle" font-size="14" font-weight="bold" fill="#14532d">2</text>

                <circle cx="268" cy="152" r="4" fill="#94a3b8"/>
                <text x="314" y="157" text-anchor="middle" font-size="14" font-weight="600" fill="#64748b">3</text>

                <circle cx="268" cy="192" r="4" fill="#94a3b8"/>
                <text x="314" y="197" text-anchor="middle" font-size="14" font-weight="600" fill="#64748b">4</text>

                <!-- Arrows -->
                <line x1="116" y1="72" x2="260" y2="72" stroke="#dc2626" stroke-width="2.2" marker-end="url(#arrowhead_tm_q1)"/>
                <line x1="116" y1="152" x2="260" y2="114" stroke="#dc2626" stroke-width="2.2" marker-end="url(#arrowhead_tm_q1)"/>

                <rect x="120" y="226" width="140" height="20" rx="10" fill="#ecfdf5" stroke="#a7f3d0"/>
                <text x="190" y="240" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#047857">வீச்சகம் = {1, 2}</text>
              </svg>
            </div>

            <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:12px; box-shadow:0 1px 4px rgba(0,0,0,0.04); text-align:center;">
              <div style="font-size:12.5px; font-weight:700; color:#1e3a8a; margin-bottom:8px;">📊 (ii) கார்டீசியன் வரைபடம்</div>
              <svg viewBox="0 0 380 255" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:8px; display:block;">
                <text x="190" y="18" text-anchor="middle" font-size="11" font-weight="600" fill="#475569">அளவுகோல்: 1 செ.மீ = 1 அலகு</text>

                <!-- Grid -->
                <line x1="55" y1="53" x2="340" y2="53" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="55" y1="91" x2="340" y2="91" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="55" y1="129" x2="340" y2="129" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="55" y1="167" x2="340" y2="167" stroke="#e2e8f0" stroke-width="1"/>

                <line x1="101" y1="40" x2="101" y2="205" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="147" y1="40" x2="147" y2="205" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="193" y1="40" x2="193" y2="205" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="239" y1="40" x2="239" y2="205" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="285" y1="40" x2="285" y2="205" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="331" y1="40" x2="331" y2="205" stroke="#e2e8f0" stroke-width="1"/>

                <!-- Relation Guideline: x = 2y -->
                <line x1="55" y1="205" x2="331" y2="91" stroke="#3b82f6" stroke-width="1.8" stroke-dasharray="4,3"/>
                <text x="330" y="82" font-size="10.5" font-weight="bold" fill="#2563eb" text-anchor="end">x = 2y</text>

                <!-- Projections -->
                <line x1="147" y1="205" x2="147" y2="167" stroke="#dc2626" stroke-width="1.4" stroke-dasharray="3,3"/>
                <line x1="55" y1="167" x2="147" y2="167" stroke="#dc2626" stroke-width="1.4" stroke-dasharray="3,3"/>

                <line x1="239" y1="205" x2="239" y2="129" stroke="#dc2626" stroke-width="1.4" stroke-dasharray="3,3"/>
                <line x1="55" y1="129" x2="239" y2="129" stroke="#dc2626" stroke-width="1.4" stroke-dasharray="3,3"/>

                <!-- Axes -->
                <line x1="35" y1="205" x2="355" y2="205" stroke="#1e293b" stroke-width="2"/>
                <polygon points="355 201, 363 205, 355 209" fill="#1e293b"/>
                <text x="368" y="209" font-size="12" font-weight="bold" fill="#1e293b">X</text>
                <text x="22" y="209" font-size="12" font-weight="bold" fill="#64748b">X'</text>

                <line x1="55" y1="225" x2="55" y2="35" stroke="#1e293b" stroke-width="2"/>
                <polygon points="51 35, 55 27, 59 35" fill="#1e293b"/>
                <text x="55" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">Y</text>
                <text x="55" y="238" text-anchor="middle" font-size="12" font-weight="bold" fill="#64748b">Y'</text>

                <text x="44" y="219" font-size="11" font-weight="bold" fill="#475569">O</text>

                <!-- Numbers -->
                <text x="101" y="221" text-anchor="middle" font-size="11" fill="#475569">1</text>
                <text x="147" y="221" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">2</text>
                <text x="193" y="221" text-anchor="middle" font-size="11" fill="#475569">3</text>
                <text x="239" y="221" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">4</text>
                <text x="285" y="221" text-anchor="middle" font-size="11" fill="#475569">5</text>
                <text x="331" y="221" text-anchor="middle" font-size="11" fill="#475569">6</text>

                <text x="44" y="171" text-anchor="end" font-size="11" font-weight="bold" fill="#dc2626">1</text>
                <text x="44" y="133" text-anchor="end" font-size="11" font-weight="bold" fill="#dc2626">2</text>
                <text x="44" y="95" text-anchor="end" font-size="11" fill="#475569">3</text>
                <text x="44" y="57" text-anchor="end" font-size="11" fill="#475569">4</text>

                <!-- Points -->
                <circle cx="147" cy="167" r="5" fill="#dc2626" stroke="#ffffff" stroke-width="2"/>
                <rect x="156" y="154" width="46" height="20" rx="4" fill="#fef2f2" stroke="#ef4444" stroke-width="1.2"/>
                <text x="179" y="168" text-anchor="middle" font-size="11" font-weight="bold" fill="#b91c1c">(2, 1)</text>

                <circle cx="239" cy="129" r="5" fill="#dc2626" stroke="#ffffff" stroke-width="2"/>
                <rect x="248" y="116" width="46" height="20" rx="4" fill="#fef2f2" stroke="#ef4444" stroke-width="1.2"/>
                <text x="271" y="130" text-anchor="middle" font-size="11" font-weight="bold" fill="#b91c1c">(4, 2)</text>
              </svg>
            </div>
          </div>`,
          diagramCaption: "வரைபடங்கள்: (i) x = 2y உறவுக்கான அம்பு வரைபடம் மற்றும் (ii) (2, 1), (4, 2) புள்ளிகளுக்கான கார்டீசியன் வரைபடம்"
        }
      ]
    },

    // -------------------------------------------------------------
    // பகுதி 3: சார்புகள் (பயிற்சி 1.3)
    // -------------------------------------------------------------
    {
      id: "sec_tm_3",
      title: "பயிற்சி 1.3: சார்புகள் மற்றும் அவற்றின் மதிப்புகள்",
      author: "அத்தியாயம் 1: உறவுகளும் சார்புகளும்",
      questions: [
        {
          id: "m_tm_3_1",
          videoUrl: "https://youtu.be/p_3GBkMwmBo",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examYear: "2023",
          examTag: "2023*",
          isImportant: true,
          q: "f = {(x, y) | x, y ∈ N மற்றும் y = 2x} என்பது N-ன் மீதான ஓர் உறவு என்க. மதிப்பகம், துணை மதிப்பகம் மற்றும் வீச்சகத்தைக் காண்க. இந்த உறவு ஒரு சார்பாகுமா?",
          ans: `<div style="line-height:1.8;">
            <b>தீர்வு:</b><br>
            இயல் எண்களின் கணம்:<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">N = {1,&nbsp;2,&nbsp;3,&nbsp;4,&nbsp;5,&nbsp;...} மற்றும் y = 2x</div>
            <div style="margin:4px 0 4px 18px;">
              • x = 1 எனில், y = 2(1) = 2 ⇒ (1, 2)<br>
              • x = 2 எனில், y = 2(2) = 4 ⇒ (2, 4)<br>
              • x = 3 எனில், y = 2(3) = 6 ⇒ (3, 6)<br>
              • x = 4 எனில், y = 2(4) = 8 ⇒ (4, 8)
            </div><br>
            வரிசைச் சோடிகளின் கணம்:<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">f = {(1,&nbsp;2), (2,&nbsp;4), (3,&nbsp;6), (4,&nbsp;8), ...}</div><br>
            1. <b>மதிப்பகம்</b> = N = {1,&nbsp;2,&nbsp;3,&nbsp;4,&nbsp;...}<br>
            2. <b>துணை மதிப்பகம்</b> = N = {1,&nbsp;2,&nbsp;3,&nbsp;4,&nbsp;...}<br>
            3. <b>வீச்சகம்</b> = {2,&nbsp;4,&nbsp;6,&nbsp;8,&nbsp;...} (இரட்டைப்படை இயல் எண்கள்)<br><br>
            <b>சார்பா என அறிதல்:</b><br>
            மதிப்பகத்தில் உள்ள ஒவ்வொரு உறுப்பிற்கும் ஒரே ஒரு நிழல் உரு மட்டுமே உள்ளது.<br>
            <b>ஆம், இந்த உறவு ஒரு சார்பாகும்.</b>
          </div>`,
          ansTamil: "ஒவ்வொரு உள்ளீட்டு மதிப்பிற்கும் ஒரே ஒரு வெளியீடு அமைவதால் இது சார்பு ஆகும்."
        },
        {
          id: "m_tm_3_2",
          type: "2m",
          mark: "2 மதிப்பெண்",
          q: "கொடுக்கப்பட்ட சார்பு f(x) = x² - 5x + 6 எனில், (1) f(-1) மற்றும் (2) f(2a)-ன் மதிப்பைக் காண்க.",
          ans: `<div style="line-height:1.8;">
            <b>தீர்வு:</b><br>
            கொடுக்கப்பட்டது: f(x) = x² - 5x + 6<br><br>
            <b>1. f(-1)-ன் மதிப்பு:</b><br>
            <div style="margin:4px 0 4px 18px;">
              f(-1) = (-1)² - 5(-1) + 6<br>
              f(-1) = 1 + 5 + 6 = <b>12</b>
            </div><br>
            <b>2. f(2a)-ன் மதிப்பு:</b><br>
            <div style="margin:4px 0 4px 18px;">
              f(2a) = (2a)² - 5(2a) + 6<br>
              f(2a) = <b>4a² - 10a + 6</b>
            </div>
          </div>`,
          ansTamil: "சார்புக் கோவையில் x உள்ள இடங்களில் -1 மற்றும் 2a பிரதியிட்டுச் சுருக்குகிறோம்."
        },
        {
          id: "m_tm_3_3",
          type: "5m",
          mark: "5 மதிப்பெண்",
          examYear: "2024",
          examTag: "2024*",
          isImportant: true,
          q: "f(x) = 2x - 3 என்ற சார்பிற்கு:<br><div style='margin:6px 0 6px 18px;'>1. [f(0) + f(1)] / 2-ஐக் காண்க.<br>2. f(x) = 0 எனில் x-ஐக் காண்க.<br>3. f(x) = x எனில் x-ஐக் காண்க.<br>4. f(x) = f(1 - x) எனில் x-ஐக் காண்க.</div>",
          ans: `<div style="line-height:1.8;">
            <b>தீர்வு:</b><br>
            கொடுக்கப்பட்டது: f(x) = 2x - 3<br><br>
            <b>1. [f(0) + f(1)] / 2-ன் மதிப்பு:</b><br>
            <div style="margin:4px 0 4px 18px;">
              f(0) = 2(0) - 3 = -3<br>
              f(1) = 2(1) - 3 = 2 - 3 = -1<br>
              [f(0) + f(1)] / 2 = [-3 + (-1)] / 2 = -4 / 2 = <b>-2</b>
            </div><br>
            <b>2. f(x) = 0 எனில்:</b><br>
            <div style="margin:4px 0 4px 18px;">
              2x - 3 = 0 ⇒ 2x = 3 ⇒ <b>x = 3 / 2</b>
            </div><br>
            <b>3. f(x) = x எனில்:</b><br>
            <div style="margin:4px 0 4px 18px;">
              2x - 3 = x ⇒ 2x - x = 3 ⇒ <b>x = 3</b>
            </div><br>
            <b>4. f(x) = f(1 - x) எனில்:</b><br>
            <div style="margin:4px 0 4px 18px;">
              f(1 - x) = 2(1 - x) - 3 = 2 - 2x - 3 = -2x - 1<br>
              2x - 3 = -2x - 1<br>
              2x + 2x = -1 + 3<br>
              4x = 2 ⇒ x = 2 / 4 ⇒ <b>x = 1 / 2</b>
            </div>
          </div>`,
          ansTamil: "சமன்பாட்டின் இருபுறமும் பிரதியிட்டு x-ன் மதிப்புகளைக் கணக்கிடும் முக்கியமான 5 மதிப்பெண் வினா.",
        }
      ]
    },

    // -------------------------------------------------------------
    // பகுதி 4: சார்புகளின் வகைகள் & சோதனைகள் (பயிற்சி 1.4)
    // -------------------------------------------------------------
    {
      id: "sec_tm_4",
      title: "பயிற்சி 1.4: சார்புகளின் வகைகள் மற்றும் சோதனைகள்",
      author: "அத்தியாயம் 1: உறவுகளும் சார்புகளும்",
      questions: [
        {
          id: "m_tm_4_1",
          type: "2m",
          mark: "2 மதிப்பெண்",
          q: "குத்துக்கோட்டுச் சோதனை என்றால் என்ன?",
          ans: `<div style="line-height:1.8;">
            <b>விளக்கம்:</b><br>
            ஒரு வளைவரைக்கு வரையப்படும் எந்த ஒரு குத்துக் கோடும், அவ்வளைவரையை <b>அதிகபட்சமாக ஒரே ஒரு புள்ளியில் மட்டுமே வெட்டினால்</b>, அவ்வளைவரை ஒரு <b>சார்பினைக் குறிக்கும்</b>.<br><br>
            • குத்துக்கோடு ஒன்றுக்கு மேற்பட்ட புள்ளிகளில் வெட்டினால் அது <b>சார்பு அல்ல</b>.
          </div>`,
          ansTamil: "வரைபடம் சார்பா இல்லையா என அறிய குத்துக்கோட்டுச் சோதனை பயன்படுகிறது."
        },
        {
          id: "m_tm_4_2",
          type: "2m",
          mark: "2 மதிப்பெண்",
          q: "கிடைமட்டக் கோட்டுச் சோதனை என்றால் என்ன?",
          ans: `<div style="line-height:1.8;">
            <b>விளக்கம்:</b><br>
            ஒரு வளைவரைக்கு வரையப்படும் எந்த ஒரு கிடைமட்டக் கோடும், அவ்வளைவரையை <b>அதிகபட்சமாக ஒரே ஒரு புள்ளியில் மட்டுமே வெட்டினால்</b>, அது ஒரு <b>ஒன்றுக்கொன்றான சார்பினைக் குறிக்கும்</b>.<br><br>
            • கிடைமட்டக்கோடு ஒன்றுக்கு மேற்பட்ட புள்ளிகளில் வெட்டினால் அது <b>ஒன்றுக்கொன்றான சார்பு அல்ல</b>.
          </div>`,
          ansTamil: "ஒரு சார்பு ஒன்றுக்கொன்றான சார்பா என வரைபடம் வழி அறிய இது பயன்படுகிறது."
        },
        {
          id: "m_tm_4_3",
          type: "5m",
          mark: "5 மதிப்பெண்",
          examYear: "2022",
          examTag: "2022*",
          isImportant: true,
          q: "A = {2,&nbsp;4,&nbsp;6,&nbsp;10,&nbsp;12}, B = {0,&nbsp;1,&nbsp;2,&nbsp;4,&nbsp;5,&nbsp;9} மற்றும் f(x) = (x / 2) - 1 எனில், சார்பு f-ஐ:<br><div style='margin:6px 0 6px 18px;'>1. வரிசைச் சோடிகளின் கணம்<br>2. அட்டவணை<br>3. அம்பு வரைபடம்<br>4. வரைபடம் ஆகியவற்றால் குறிக்க.</div>",
          ans: `<div style="line-height:1.8;">
            <b>தீர்வு:</b><br>
            கொடுக்கப்பட்டது: f(x) = (x / 2) - 1<br>
            <div style="margin:4px 0 4px 18px;">
              • x = 2 எனில், f(2) = (2 / 2) - 1 = 1 - 1 = <b>0</b> ∈ B<br>
              • x = 4 எனில், f(4) = (4 / 2) - 1 = 2 - 1 = <b>1</b> ∈ B<br>
              • x = 6 எனில், f(6) = (6 / 2) - 1 = 3 - 1 = <b>2</b> ∈ B<br>
              • x = 10 எனில், f(10) = (10 / 2) - 1 = 5 - 1 = <b>4</b> ∈ B<br>
              • x = 12 எனில், f(12) = (12 / 2) - 1 = 6 - 1 = <b>5</b> ∈ B
            </div><br>
            <b>1. வரிசைச் சோடிகளின் கணம்:</b><br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              f = {(2,&nbsp;0), (4,&nbsp;1), (6,&nbsp;2), (10,&nbsp;4), (12,&nbsp;5)}
            </div><br>
            <b>2. அட்டவணை முறை:</b><br>
            <table style="width:100%; border-collapse:collapse; margin:8px 0; font-size:13px; text-align:center;">
              <tr style="background:#eff6ff;"><th style="border:1px solid #94a3b8; padding:5px;">x</th><td style="border:1px solid #cbd5e1; padding:5px;">2</td><td style="border:1px solid #cbd5e1; padding:5px;">4</td><td style="border:1px solid #cbd5e1; padding:5px;">6</td><td style="border:1px solid #cbd5e1; padding:5px;">10</td><td style="border:1px solid #cbd5e1; padding:5px;">12</td></tr>
              <tr><th style="border:1px solid #94a3b8; padding:5px; background:#eff6ff;">f(x)</th><td style="border:1px solid #cbd5e1; padding:5px; font-weight:bold;">0</td><td style="border:1px solid #cbd5e1; padding:5px; font-weight:bold;">1</td><td style="border:1px solid #cbd5e1; padding:5px; font-weight:bold;">2</td><td style="border:1px solid #cbd5e1; padding:5px; font-weight:bold;">4</td><td style="border:1px solid #cbd5e1; padding:5px; font-weight:bold;">5</td></tr>
            </table><br>
            <b>3. அம்பு வரைபடம்:</b> கீழேயுள்ள வரைபடம் (i)-ஐக் காண்க.<br><br>
            <b>4. வரைபடம்:</b> கீழேயுள்ள கார்டீசியன் வரைபடம் (ii)-ஐக் காண்க (கார்டீசியன் தளத்தில் (2, 0), (4, 1), (6, 2), (10, 4), (12, 5) புள்ளிகள் குறிக்கப்பட்டு நேர்க்கோடாக இணைக்கப்பட்டுள்ளன).
          </div>`,
          ansTamil: "சார்பை நான்கு வெவ்வேறு வடிவங்களில் விளக்கும் பொதுத்தேர்வு வினா.",
          diagramSvg: `<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(290px, 1fr)); gap:14px; width:100%; margin:8px 0;">
            <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:12px; box-shadow:0 1px 4px rgba(0,0,0,0.04); text-align:center;">
              <div style="font-size:12.5px; font-weight:700; color:#1e3a8a; margin-bottom:8px;">🎯 (i) அம்பு வரைபடம்</div>
              <svg viewBox="0 0 380 295" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:8px; display:block;">
                <defs>
                  <marker id="arrowhead_tm_q2" markerWidth="8" markerHeight="7" refX="7" refY="3.5" orient="auto">
                    <polygon points="0 0, 8 3.5, 0 7" fill="#2563eb"/>
                  </marker>
                </defs>
                <text x="190" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e3a8a">f(x) = (x / 2) - 1</text>
                
                <!-- Ellipse A -->
                <ellipse cx="85" cy="150" rx="52" ry="115" fill="#eff6ff" stroke="#2563eb" stroke-width="2.2"/>
                <text x="85" y="32" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d4ed8">A</text>
                
                <text x="64" y="67" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#1e3a8a">2</text>
                <circle cx="112" cy="62" r="3.5" fill="#1e40af"/>

                <text x="64" y="103" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#1e3a8a">4</text>
                <circle cx="112" cy="98" r="3.5" fill="#1e40af"/>

                <text x="64" y="139" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#1e3a8a">6</text>
                <circle cx="112" cy="134" r="3.5" fill="#1e40af"/>

                <text x="64" y="175" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#1e3a8a">10</text>
                <circle cx="112" cy="170" r="3.5" fill="#1e40af"/>

                <text x="64" y="211" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#1e3a8a">12</text>
                <circle cx="112" cy="206" r="3.5" fill="#1e40af"/>

                <!-- Ellipse B -->
                <ellipse cx="295" cy="150" rx="52" ry="115" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.2"/>
                <text x="295" y="32" text-anchor="middle" font-size="14" font-weight="bold" fill="#15803d">B</text>

                <circle cx="268" cy="62" r="3.5" fill="#15803d"/>
                <text x="316" y="67" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#14532d">0</text>

                <circle cx="268" cy="98" r="3.5" fill="#15803d"/>
                <text x="316" y="103" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#14532d">1</text>

                <circle cx="268" cy="134" r="3.5" fill="#15803d"/>
                <text x="316" y="139" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#14532d">2</text>

                <circle cx="268" cy="170" r="3.5" fill="#15803d"/>
                <text x="316" y="175" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#14532d">4</text>

                <circle cx="268" cy="206" r="3.5" fill="#15803d"/>
                <text x="316" y="211" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#14532d">5</text>

                <circle cx="268" cy="242" r="3.5" fill="#94a3b8"/>
                <text x="316" y="247" text-anchor="middle" font-size="13.5" font-weight="600" fill="#64748b">9</text>

                <!-- Arrows -->
                <line x1="116" y1="62" x2="260" y2="62" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowhead_tm_q2)"/>
                <line x1="116" y1="98" x2="260" y2="98" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowhead_tm_q2)"/>
                <line x1="116" y1="134" x2="260" y2="134" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowhead_tm_q2)"/>
                <line x1="116" y1="170" x2="260" y2="170" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowhead_tm_q2)"/>
                <line x1="116" y1="206" x2="260" y2="206" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowhead_tm_q2)"/>

                <rect x="50" y="272" width="280" height="18" rx="9" fill="#ecfdf5" stroke="#a7f3d0"/>
                <text x="190" y="285" text-anchor="middle" font-size="11" font-weight="bold" fill="#047857">வீச்சகம் = {0, 1, 2, 4, 5} (உட்சார்பு)</text>
              </svg>
            </div>

            <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:12px; box-shadow:0 1px 4px rgba(0,0,0,0.04); text-align:center;">
              <div style="font-size:12.5px; font-weight:700; color:#1e3a8a; margin-bottom:8px;">📊 (ii) கார்டீசியன் வரைபடம்</div>
              <svg viewBox="0 0 380 295" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:8px; display:block;">
                <text x="190" y="18" text-anchor="middle" font-size="10.5" font-weight="600" fill="#475569">அளவுகோல்: X: 1 செ.மீ = 2 அலகுகள் | Y: 1 செ.மீ = 1 அலகு</text>

                <!-- Grid -->
                <line x1="45" y1="65" x2="355" y2="65" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="45" y1="95" x2="355" y2="95" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="45" y1="125" x2="355" y2="125" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="45" y1="155" x2="355" y2="155" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="45" y1="185" x2="355" y2="185" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="45" y1="215" x2="355" y2="215" stroke="#e2e8f0" stroke-width="1"/>

                <line x1="89" y1="50" x2="89" y2="245" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="133" y1="50" x2="133" y2="245" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="177" y1="50" x2="177" y2="245" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="221" y1="50" x2="221" y2="245" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="265" y1="50" x2="265" y2="245" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="309" y1="50" x2="309" y2="245" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="353" y1="50" x2="353" y2="245" stroke="#e2e8f0" stroke-width="1"/>

                <!-- Linear Function Line -->
                <line x1="67" y1="260" x2="331" y2="80" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/>
                <text x="215" y="145" fill="#1d4ed8" font-size="10.5" font-weight="bold" transform="rotate(-30 215 145)">f(x) = (x/2) - 1</text>

                <!-- Projections -->
                <line x1="133" y1="245" x2="133" y2="215" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/>
                <line x1="45" y1="215" x2="133" y2="215" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/>

                <line x1="177" y1="245" x2="177" y2="185" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/>
                <line x1="45" y1="185" x2="177" y2="185" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/>

                <line x1="265" y1="245" x2="265" y2="125" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/>
                <line x1="45" y1="125" x2="265" y2="125" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/>

                <line x1="309" y1="245" x2="309" y2="95" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/>
                <line x1="45" y1="95" x2="309" y2="95" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/>

                <!-- Axes -->
                <line x1="28" y1="245" x2="362" y2="245" stroke="#1e293b" stroke-width="2"/>
                <polygon points="362 241, 370 245, 362 249" fill="#1e293b"/>
                <text x="373" y="249" font-size="12" font-weight="bold" fill="#1e293b">X</text>
                <text x="16" y="249" font-size="12" font-weight="bold" fill="#64748b">X'</text>

                <line x1="45" y1="265" x2="45" y2="35" stroke="#1e293b" stroke-width="2"/>
                <polygon points="41 35, 45 27, 49 35" fill="#1e293b"/>
                <text x="45" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">Y</text>
                <text x="45" y="278" text-anchor="middle" font-size="12" font-weight="bold" fill="#64748b">Y'</text>

                <text x="34" y="259" font-size="11" font-weight="bold" fill="#475569">O</text>

                <!-- Numbers -->
                <text x="89" y="262" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#dc2626">2</text>
                <text x="133" y="262" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#dc2626">4</text>
                <text x="177" y="262" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#dc2626">6</text>
                <text x="221" y="262" text-anchor="middle" font-size="10.5" fill="#475569">8</text>
                <text x="265" y="262" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#dc2626">10</text>
                <text x="309" y="262" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#dc2626">12</text>
                <text x="353" y="262" text-anchor="middle" font-size="10.5" fill="#475569">14</text>

                <text x="36" y="219" text-anchor="end" font-size="10.5" font-weight="bold" fill="#dc2626">1</text>
                <text x="36" y="189" text-anchor="end" font-size="10.5" font-weight="bold" fill="#dc2626">2</text>
                <text x="36" y="159" text-anchor="end" font-size="10.5" fill="#475569">3</text>
                <text x="36" y="129" text-anchor="end" font-size="10.5" font-weight="bold" fill="#dc2626">4</text>
                <text x="36" y="99" text-anchor="end" font-size="10.5" font-weight="bold" fill="#dc2626">5</text>
                <text x="36" y="69" text-anchor="end" font-size="10.5" fill="#475569">6</text>

                <!-- Points -->
                <circle cx="89" cy="245" r="4.5" fill="#dc2626" stroke="#ffffff" stroke-width="1.8"/>
                <rect x="67" y="216" width="44" height="18" rx="4" fill="#fef2f2" stroke="#ef4444" stroke-width="1"/>
                <text x="89" y="229" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">(2, 0)</text>

                <circle cx="133" cy="215" r="4.5" fill="#dc2626" stroke="#ffffff" stroke-width="1.8"/>
                <rect x="142" y="206" width="44" height="18" rx="4" fill="#fef2f2" stroke="#ef4444" stroke-width="1"/>
                <text x="164" y="219" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">(4, 1)</text>

                <circle cx="177" cy="185" r="4.5" fill="#dc2626" stroke="#ffffff" stroke-width="1.8"/>
                <rect x="186" y="176" width="44" height="18" rx="4" fill="#fef2f2" stroke="#ef4444" stroke-width="1"/>
                <text x="208" y="189" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">(6, 2)</text>

                <circle cx="265" cy="125" r="4.5" fill="#dc2626" stroke="#ffffff" stroke-width="1.8"/>
                <rect x="274" y="116" width="48" height="18" rx="4" fill="#fef2f2" stroke="#ef4444" stroke-width="1"/>
                <text x="298" y="129" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">(10, 4)</text>

                <circle cx="309" cy="95" r="4.5" fill="#dc2626" stroke="#ffffff" stroke-width="1.8"/>
                <rect x="290" y="66" width="46" height="18" rx="4" fill="#fef2f2" stroke="#ef4444" stroke-width="1"/>
                <text x="313" y="79" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">(12, 5)</text>
              </svg>
            </div>
          </div>`,
          diagramCaption: "வரைபடங்கள்: (i) f(x) = (x/2) - 1 சார்பின் அம்பு வரைபடம் மற்றும் (ii) கார்டீசியன் வரைபடம்"
        }
      ]
    },

    // -------------------------------------------------------------
    // பகுதி 5: சார்புகளின் சேர்ப்பு (பயிற்சி 1.5)
    // -------------------------------------------------------------
    {
      id: "sec_tm_5",
      title: "பயிற்சி 1.5: சார்புகளின் சேர்ப்பு",
      author: "அத்தியாயம் 1: உறவுகளும் சார்புகளும்",
      questions: [
        {
          id: "m_tm_5_1",
          type: "2m",
          mark: "2 மதிப்பெண்",
          q: "f(x) = x - 6 மற்றும் g(x) = x² எனில், f ∘ g மற்றும் g ∘ f ஆகியவற்றைக் காண்க. f ∘ g = g ∘ f என்பது சரியா எனச் சோதிக்க.",
          ans: `<div style="line-height:1.8;">
            <b>தீர்வு:</b><br>
            கொடுக்கப்பட்டவை: f(x) = x - 6, g(x) = x²<br><br>
            <b>1. f ∘ g-ன் மதிப்பு:</b><br>
            <div style="margin:4px 0 4px 18px;">
              (f ∘ g)(x) = f(g(x))<br>
              = f(x²)<br>
              = <b>x² - 6 ---- (1)</b>
            </div><br>
            <b>2. g ∘ f-ன் மதிப்பு:</b><br>
            <div style="margin:4px 0 4px 18px;">
              (g ∘ f)(x) = g(f(x))<br>
              = g(x - 6)<br>
              = <b>(x - 6)² = x² - 12x + 36 ---- (2)</b>
            </div><br>
            (1) மற்றும் (2)-லிருந்து,<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              x² - 6 ≠ x² - 12x + 36<br>
              எனவே, f ∘ g ≠ g ∘ f (சமமல்ல).
            </div>
          </div>`,
          ansTamil: "பொதுவாகச் சார்புகளின் சேர்ப்பில் பரிமாற்றுப் பண்பு உண்மையாகாது."
        },
        {
          id: "m_tm_5_2",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examYear: "2023",
          examTag: "2023*",
          isImportant: true,
          q: "f ∘ g = g ∘ f எனில் k-ன் மதிப்பைக் காண்க: f(x) = 3x + 2, g(x) = 6x - k",
          ans: `<div style="line-height:1.8;">
            <b>தீர்வு:</b><br>
            கொடுக்கப்பட்டது: f(x) = 3x + 2, g(x) = 6x - k மற்றும் f ∘ g = g ∘ f.<br><br>
            <div style="margin:4px 0 4px 18px;">
              (f ∘ g)(x) = f(g(x)) = f(6x - k) = 3(6x - k) + 2 = <b>18x - 3k + 2 ---- (1)</b><br><br>
              (g ∘ f)(x) = g(f(x)) = g(3x + 2) = 6(3x + 2) - k = <b>18x + 12 - k ---- (2)</b>
            </div><br>
            f ∘ g = g ∘ f என்பதால் (1) = (2):<br>
            <div style="margin:4px 0 4px 18px;">
              18x - 3k + 2 = 18x + 12 - k<br>
              -3k + k = 12 - 2<br>
              -2k = 10<br>
              k = 10 / -2<br>
              <b>k = -5</b>
            </div>
          </div>`,
          ansTamil: "இரு சேர்ப்புச் சமன்பாடுகளையும் சமன் செய்து k-ன் மதிப்பு -5 எனப் பெறுகிறோம்."
        },
        {
          id: "m_tm_5_3",
          type: "5m",
          mark: "5 மதிப்பெண்",
          examYear: "2024",
          examTag: "2024*",
          isImportant: true,
          q: "f(x) = x - 1, g(x) = 3x + 1 மற்றும் h(x) = x² எனில், (f ∘ g) ∘ h = f ∘ (g ∘ h) எனக் காட்டுக.",
          ans: `<div style="line-height:1.8;">
            <b>தீர்வு:</b><br>
            கொடுக்கப்பட்டவை: f(x) = x - 1, g(x) = 3x + 1, h(x) = x²<br><br>
            <b>இடதுபக்கம் = (f ∘ g) ∘ h:</b><br>
            <div style="margin:4px 0 4px 18px;">
              முதலில் f ∘ g காண:<br>
              (f ∘ g)(x) = f(g(x)) = f(3x + 1) = (3x + 1) - 1 = <b>3x</b><br><br>
              இப்போது ((f ∘ g) ∘ h)(x):<br>
              (f ∘ g)(h(x)) = (f ∘ g)(x²)<br>
              <b>இடதுபக்கம் = 3(x²) = 3x² ---- (1)</b>
            </div><br>
            <b>வலதுபக்கம் = f ∘ (g ∘ h):</b><br>
            <div style="margin:4px 0 4px 18px;">
              முதலில் g ∘ h காண:<br>
              (g ∘ h)(x) = g(h(x)) = g(x²) = <b>3x² + 1</b><br><br>
              இப்போது (f ∘ (g ∘ h))(x):<br>
              f((g ∘ h)(x)) = f(3x² + 1) = (3x² + 1) - 1<br>
              <b>வலதுபக்கம் = 3x² ---- (2)</b>
            </div><br>
            (1) மற்றும் (2)-லிருந்து,<br>
            <div style="margin:4px 0 4px 18px; font-weight:700;">
              இடதுபக்கம் = வலதுபக்கம்<br>
              (f ∘ g) ∘ h = f ∘ (g ∘ h) என்பது நிரூபிக்கப்பட்டது.
            </div>
          </div>`,
          ansTamil: "சார்புகளின் சேர்ப்பு எப்போதும் சேர்ப்புப் பண்பை நிறைவு செய்யும்.",
          blackboard: {
            title: "கரும்பலகை விளக்கம்: சார்புகளின் சேர்ப்புப் பண்பு",
            engTitle: "Blackboard Demo: Associativity of Composite Functions",
            steps: [
              {
                stepNum: 1,
                badge: "படி 1: கொடுக்கப்பட்ட சார்புகளை எழுதுதல்",
                badgeEn: "Step 1: Write given functions",
                chalkHtml: `
                  <div class="bb-line bb-title">கொடுக்கப்பட்ட சார்புகள்:</div>
                  <div class="bb-line">• <b>f(x)</b> = x - 1</div>
                  <div class="bb-line">• <b>g(x)</b> = 3x + 1</div>
                  <div class="bb-line">• <b>h(x)</b> = x²</div>
                `,
                chalkHtmlEn: `
                  <div class="bb-line bb-title">Given Functions:</div>
                  <div class="bb-line">• <b>f(x)</b> = x - 1</div>
                  <div class="bb-line">• <b>g(x)</b> = 3x + 1</div>
                  <div class="bb-line">• <b>h(x)</b> = x²</div>
                `,
                audioScriptTa: "படி ஒன்று. கொடுக்கப்பட்ட சார்புகளை எழுதுவோம். எஃப் ஆஃப் எக்ஸ் சமம் எக்ஸ் கழித்தல் ஒன்று. ஜி ஆஃப் எக்ஸ் சமம் மூன்று எக்ஸ் கூட்டல் ஒன்று. ஹெச் ஆஃப் எக்ஸ் சமம் எக்ஸ் ஸ்கொயர்.",
                audioScriptEn: "Step 1. Write the given functions. f of x equals x minus 1. g of x equals 3x plus 1. And h of x equals x squared."
              },
              {
                stepNum: 2,
                badge: "படி 2: இடதுபக்கம் - முதலில் (f ∘ g) காணுதல்",
                badgeEn: "Step 2: L.H.S - First find (f ∘ g)",
                chalkHtml: `
                  <div class="bb-line bb-title">இடதுபக்கம் = (f ∘ g) ∘ h</div>
                  <div class="bb-line">முதலில் அடைப்புக் குறிக்குள் உள்ள (f ∘ g)(x)-ஐக் காண:</div>
                  <div class="bb-line highlight">(f ∘ g)(x) = f(g(x)) = f(3x + 1)</div>
                  <div class="bb-line">f-ல் x உள்ள இடத்தில் (3x + 1) பிரதியிட:</div>
                  <div class="bb-line highlight">= (3x + 1) - 1 = <b style="color:#fde047;">3x</b></div>
                `,
                chalkHtmlEn: `
                  <div class="bb-line bb-title">L.H.S = (f ∘ g) ∘ h</div>
                  <div class="bb-line">First calculate the bracket term (f ∘ g)(x):</div>
                  <div class="bb-line highlight">(f ∘ g)(x) = f(g(x)) = f(3x + 1)</div>
                  <div class="bb-line">Substitute (3x + 1) into f:</div>
                  <div class="bb-line highlight">= (3x + 1) - 1 = <b style="color:#fde047;">3x</b></div>
                `,
                audioScriptTa: "படி இரண்டு. இடதுபக்கம் கண்டுபிடிக்க முதலில் எஃப் காம்போசிஷன் ஜி. ஜி ஆஃப் எக்ஸை எஃப்பில் பிரதியிட்டால் மூன்று எக்ஸ் கூட்டல் ஒன்று கழித்தல் ஒன்று. ஒன்றுடன் ஒன்று நீங்கி மூன்று எக்ஸ் கிடைக்கிறது.",
                audioScriptEn: "Step 2. To calculate Left Hand Side, first find f compose g. Substituting 3x plus 1 into f gives 3x plus 1 minus 1, which equals 3x."
              },
              {
                stepNum: 3,
                badge: "படி 3: இடதுபக்கம் h(x) உடன் சேர்ப்பு (சமன்பாடு 1)",
                badgeEn: "Step 3: L.H.S with h(x) (Equation 1)",
                chalkHtml: `
                  <div class="bb-line bb-title">இப்போது ((f ∘ g) ∘ h)(x) காண:</div>
                  <div class="bb-line">= (f ∘ g)(h(x)) = (f ∘ g)(x²)</div>
                  <div class="bb-line formula">
                    இடதுபக்கம் = 3(x²) = 3x² <span class="bb-eq">---- (1)</span>
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-line bb-title">Now compute ((f ∘ g) ∘ h)(x):</div>
                  <div class="bb-line">= (f ∘ g)(h(x)) = (f ∘ g)(x²)</div>
                  <div class="bb-line formula">
                    L.H.S = 3(x²) = 3x² <span class="bb-eq">---- (1)</span>
                  </div>
                `,
                audioScriptTa: "படி மூன்று. இப்போது ஹெச் ஆஃப் எக்ஸான எக்ஸ் ஸ்கொயரை இதில் பிரதியிட்டால் மூன்று எக்ஸ் ஸ்கொயர் கிடைக்கிறது. இது சமன்பாடு ஒன்று.",
                audioScriptEn: "Step 3. Substitute h of x which is x squared into f compose g. We get 3 times x squared, which is 3x squared. Mark this as equation 1."
              },
              {
                stepNum: 4,
                badge: "படி 4: வலதுபக்கம் f ∘ (g ∘ h) காணுதல் (சமன்பாடு 2)",
                badgeEn: "Step 4: R.H.S - f ∘ (g ∘ h) (Equation 2)",
                chalkHtml: `
                  <div class="bb-line bb-title">வலதுபக்கம் = f ∘ (g ∘ h)</div>
                  <div class="bb-line">முதலில் (g ∘ h)(x) = g(h(x)) = g(x²) = <b style="color:#93c5fd;">3x² + 1</b></div>
                  <div class="bb-line" style="margin-top:6px;">இப்போது f((g ∘ h)(x)) = f(3x² + 1) = (3x² + 1) - 1</div>
                  <div class="bb-line formula" style="margin-top:8px;">
                    வலதுபக்கம் = 3x² <span class="bb-eq">---- (2)</span>
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-line bb-title">R.H.S = f ∘ (g ∘ h)</div>
                  <div class="bb-line">First (g ∘ h)(x) = g(h(x)) = g(x²) = <b style="color:#93c5fd;">3x² + 1</b></div>
                  <div class="bb-line" style="margin-top:6px;">Now f((g ∘ h)(x)) = f(3x² + 1) = (3x² + 1) - 1</div>
                  <div class="bb-line formula" style="margin-top:8px;">
                    R.H.S = 3x² <span class="bb-eq">---- (2)</span>
                  </div>
                `,
                audioScriptTa: "படி நான்கு. வலதுபக்கம் கணக்கிட முதலில் ஜி காம்போசிஷன் ஹெச் சமம் மூன்று எக்ஸ் ஸ்கொயர் கூட்டல் ஒன்று. இதனை எஃப்பில் பிரதியிட்டால் ஒன்று மற்றும் கழித்தல் ஒன்று நீங்கி மூன்று எக்ஸ் ஸ்கொயர் கிடைக்கிறது. இது சமன்பாடு இரண்டு.",
                audioScriptEn: "Step 4. For Right Hand Side, first g compose h gives 3x squared plus 1. Substituting this into f gives 3x squared plus 1 minus 1, which equals 3x squared. Mark this as equation 2."
              },
              {
                stepNum: 5,
                badge: "படி 5: முடிவு (நிரூபிக்கப்பட்டது)",
                badgeEn: "Step 5: Conclusion (Proved)",
                chalkHtml: `
                  <div class="bb-line bb-title">சரிபார்த்தல்:</div>
                  <div class="bb-line">சமன்பாடு (1) மற்றும் (2)-லிருந்து:</div>
                  <div class="bb-line formula" style="color:#86efac; font-size:18px;">
                    இடதுபக்கம் = வலதுபக்கம் (3x² = 3x²)
                  </div>
                  <div class="bb-line" style="margin-top:10px; color:#fef08a; font-weight:800; font-size:17px;">
                    ∴ (f ∘ g) ∘ h = f ∘ (g ∘ h) என்பது நிரூபிக்கப்பட்டது! ✓
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-line bb-title">Conclusion:</div>
                  <div class="bb-line">From equations (1) and (2):</div>
                  <div class="bb-line formula" style="color:#86efac; font-size:18px;">
                    L.H.S = R.H.S (3x² = 3x²)
                  </div>
                  <div class="bb-line" style="margin-top:10px; color:#fef08a; font-weight:800; font-size:17px;">
                    ∴ (f ∘ g) ∘ h = f ∘ (g ∘ h) is proved! ✓
                  </div>
                `,
                audioScriptTa: "படி ஐந்து. சமன்பாடுகள் ஒன்று மற்றும் இரண்டிலிருந்து இடதுபக்கம் சமம் வலதுபக்கம் சமம் மூன்று எக்ஸ் ஸ்கொயர். எனவே சார்புகளின் சேர்ப்புப் பண்பு நிரூபிக்கப்பட்டது.",
                audioScriptEn: "Step 5. From equations 1 and 2, both LHS and RHS equal 3x squared. Hence, the associative property of composite functions is proved."
              }
            ]
          },
        }
      ]
    },

    // -------------------------------------------------------------
    // பகுதி 6: 1 மதிப்பெண் பலவுள் தெரிவு வினாக்கள்
    // -------------------------------------------------------------
    {
      id: "sec_tm_6",
      title: "1 மதிப்பெண் பலவுள் தெரிவு வினாக்கள்",
      author: "அரசு பொதுத்தேர்வு வினா வங்கி",
      questions: [
        {
          id: "m_tm_mcq_1",
          type: "1m",
          mark: "1 மதிப்பெண்",
          examYear: "2022",
          examTag: "2022*",
          isImportant: true,
          q: "n(A × B) = 6 மற்றும் A = {1,&nbsp;3} எனில், n(B) ஆனது:",
          options: ["(அ) 1", "(ஆ) 2", "(இ) 3", "(ஈ) 6"],
          ans: "<b>(இ) 3</b><br><b>விளக்கம்:</b> n(A × B) = n(A) × n(B).<br>இங்கு n(A) = 2. எனவே 6 = 2 × n(B) ⇒ n(B) = 6 / 2 = 3.",
          ansTamil: "சூத்திரம்: n(A × B) = n(A) × n(B)."
        },
        {
          id: "m_tm_mcq_2",
          type: "1m",
          mark: "1 மதிப்பெண்",
          examYear: "2024",
          examTag: "2024*",
          isImportant: true,
          q: "A = {a,&nbsp;b,&nbsp;p}, B = {2,&nbsp;3}, C = {p,&nbsp;q,&nbsp;r,&nbsp;s} எனில், n[(A ∪ C) × B] ஆனது:",
          options: ["(அ) 8", "(ஆ) 20", "(இ) 12", "(ஈ) 16"],
          ans: "<b>(இ) 12</b><br><b>விளக்கம்:</b> A ∪ C = {a,&nbsp;b,&nbsp;p,&nbsp;q,&nbsp;r,&nbsp;s} ⇒ n(A ∪ C) = 6.<br>n(B) = 2.<br>n[(A ∪ C) × B] = 6 × 2 = 12.",
          ansTamil: "சேர்ப்பு கணத்தின் உறுப்புகளின் எண்ணிக்கையை B-ன் எண்ணிக்கையால் பெருக்க வேண்டும்."
        },
        {
          id: "m_tm_mcq_3",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "A = {1,&nbsp;2}, B = {1,&nbsp;2,&nbsp;3,&nbsp;4}, C = {5,&nbsp;6} மற்றும் D = {5,&nbsp;6,&nbsp;7,&nbsp;8} எனில் கீழே கொடுக்கப்பட்டவைகளில் எது சரியான கூற்று?",
          options: ["(அ) (A × C) ⊂ (B × D)", "(ஆ) (B × D) ⊂ (A × C)", "(இ) (A × B) ⊂ (A × D)", "(ஈ) (D × A) ⊂ (B × A)"],
          ans: "<b>(அ) (A × C) ⊂ (B × D)</b><br><b>விளக்கம்:</b> A ⊂ B மற்றும் C ⊂ D ஆக இருப்பதால், அவற்றின் கார்டீசியன் பெருக்கலும் உட்கணமாக அமையும்: (A × C) ⊂ (B × D).",
          ansTamil: "A ⊂ B மற்றும் C ⊂ D எனில் (A × C) ⊂ (B × D) என்பது உண்மையாகும்."
        },
        {
          id: "m_tm_mcq_4",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "A = {1,&nbsp;2,&nbsp;3,&nbsp;4,&nbsp;5}-லிருந்து, B என்ற கணத்திற்கு 1024 உறவுகள் உள்ளது எனில் B-ல் உள்ள உறுப்புகளின் எண்ணிக்கை:",
          options: ["(அ) 3", "(ஆ) 2", "(இ) 4", "(ஈ) 8"],
          ans: "<b>(ஆ) 2</b><br><b>விளக்கம்:</b> உறவுகளின் எண்ணிக்கை = 2^(n(A) × n(B)).<br>இங்கு n(A) = 5. கொடுக்கப்பட்டது உறவுகள் = 1024 = 2^10.<br>எனவே 5 × n(B) = 10 ⇒ n(B) = 10 / 5 = 2.",
          ansTamil: "உறவுகளின் எண்ணிக்கை சூத்திரம்: 2^(p × q) = 1024 = 2^10."
        },
        {
          id: "m_tm_mcq_5",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "R = {(x, x²) | x ஆனது 13-ஐ விடக் குறைந்த பகா எண்கள்} என்ற உறவின் வீச்சகமானது:",
          options: ["(அ) {2,&nbsp;3,&nbsp;5,&nbsp;7}", "(ஆ) {2,&nbsp;3,&nbsp;5,&nbsp;7,&nbsp;11}", "(இ) {4,&nbsp;9,&nbsp;25,&nbsp;49,&nbsp;121}", "(ஈ) {1,&nbsp;4,&nbsp;9,&nbsp;25,&nbsp;49,&nbsp;121}"],
          ans: "<b>(இ) {4,&nbsp;9,&nbsp;25,&nbsp;49,&nbsp;121}</b><br><b>விளக்கம்:</b> 13-ஐ விடக் குறைந்த பகா எண்கள் x = {2,&nbsp;3,&nbsp;5,&nbsp;7,&nbsp;11}.<br>அவற்றின் வர்க்கங்கள் (x²): 2² = 4, 3² = 9, 5² = 25, 7² = 49, 11² = 121.<br>எனவே வீச்சகம் = {4,&nbsp;9,&nbsp;25,&nbsp;49,&nbsp;121}.",
          ansTamil: "பகா எண்களின் வர்க்கங்களே வீச்சகம் ஆகும்."
        },
        {
          id: "m_tm_mcq_6",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "(a + 2, 4) மற்றும் (5, 2a + b) ஆகிய வரிசைச் சோடிகள் சமம் எனில், (a, b) என்பது:",
          options: ["(அ) (2, -2)", "(ஆ) (5, 1)", "(இ) (2, 3)", "(ஈ) (3, -2)"],
          ans: "<b>(ஈ) (3, -2)</b><br><b>விளக்கம்:</b> வரிசைச் சோடிகள் சமம் எனில் அவற்றின் ஒத்த உறுப்புகள் சமம்:<br>• a + 2 = 5 ⇒ a = 5 - 2 = 3<br>• 2a + b = 4 ⇒ 2(3) + b = 4 ⇒ 6 + b = 4 ⇒ b = 4 - 6 = -2.<br>எனவே (a, b) = (3, -2).",
          ansTamil: "முதல் உறுப்பு = முதல் உறுப்பு; இரண்டாம் உறுப்பு = இரண்டாம் உறுப்பு."
        },
        {
          id: "m_tm_mcq_7",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "n(A) = m மற்றும் n(B) = n என்க. A-லிருந்து B-க்கு வரையறுக்கப்பட்ட வெற்றுக்கணமில்லாத உறவுகளின் மொத்த எண்ணிக்கை:",
          options: ["(அ) m^n", "(ஆ) n^m", "(இ) 2^(mn) - 1", "(ஈ) 2^(mn)"],
          ans: "<b>(இ) 2^(mn) - 1</b><br><b>விளக்கம்:</b> மொத்த உறவுகள் = 2^(mn). இதில் வெற்றுக்கணம் ஒன்றை நீக்கினால், வெற்றுக்கணமில்லாத உறவுகள் = 2^(mn) - 1 ஆகும்.",
          ansTamil: "வெற்றுக்கணம் அல்லாத உறவுகள் என்பதால் -1 செய்ய வேண்டும்."
        },
        {
          id: "m_tm_mcq_8",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "f: A ➔ B ஆனது இருபுறச் சார்பு மற்றும் n(B) = 7 எனில், n(A) ஆனது:",
          options: ["(அ) 7", "(ஆ) 49", "(இ) 1", "(ஈ) 14"],
          ans: "<b>(அ) 7</b><br><b>விளக்கம்:</b> ஒரு சார்பு இருபுறச் சார்பாக இருக்க வேண்டுமெனில், மதிப்பகம் மற்றும் துணை மதிப்பகத்தின் உறுப்புகளின் எண்ணிக்கை சமமாக இருக்க வேண்டும்: n(A) = n(B) = 7.",
          ansTamil: "இருபுறச் சார்பிற்கு n(A) = n(B) சமமாக இருக்கும்."
        },
        {
          id: "m_tm_mcq_9",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "f(x) = √(1 + x²) எனில்:",
          options: ["(அ) f(xy) = f(x).f(y)", "(ஆ) f(xy) ≥ f(x).f(y)", "(இ) f(xy) ≤ f(x).f(y)", "(ஈ) இவற்றில் எதுவுமில்லை"],
          ans: "<b>(இ) f(xy) ≤ f(x).f(y)</b><br><b>விளக்கம்:</b> f(x).f(y) = √(1 + x²)√(1 + y²) = √(1 + x² + y² + x²y²).<br>f(xy) = √(1 + x²y²).<br>x² + y² ≥ 0 என்பதால், எப்போதும் f(xy) ≤ f(x).f(y) ஆகும்.",
          ansTamil: "மதிப்புகளைப் பிரதியிட்டுப் பார்க்கும்போது f(xy) ≤ f(x).f(y) உண்மை என அறியலாம்."
        },
        {
          id: "m_tm_mcq_10",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "f(x) = (x + 1)³ - (x - 1)³ குறிப்பிடும் சார்பானது:",
          options: ["(அ) நேரிய சார்பு", "(ஆ) ஒரு கனச் சார்பு", "(இ) தலைகீழ் சார்பு", "(ஈ) இருபடிச் சார்பு"],
          ans: "<b>(ஈ) இருபடிச் சார்பு</b><br><b>விளக்கம்:</b> (x + 1)³ = x³ + 3x² + 3x + 1<br>(x - 1)³ = x³ - 3x² + 3x - 1<br>கழித்தால்: f(x) = 6x² + 2. இதன் அதிகபட்ச அடுக்கு 2 என்பதால் இது ஓர் இருபடிச் சார்பு ஆகும்.",
          ansTamil: "x³ உறுப்புகள் நீங்கி 6x² + 2 கிடைப்பதால் இது இருபடிச் சார்பு ஆகும்."
        }
      ]
    }
  ]
};
