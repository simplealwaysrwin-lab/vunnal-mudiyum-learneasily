// 10-ஆம் வகுப்பு சமூக அறிவியல் - புவியியல் அலகு 1: இந்தியா - அமைவிடம், நிலத்தோற்றம் மற்றும் வடிகாலமைப்பு
// தமிழ்நாடு அரசு சமச்சீர் கல்வி வினா-விடை வழிகாட்டி

const SOCIAL_UNIT_2_DATA = {
  unitId: "soc_g1",
  unitName: "புவியியல் 1: இந்தியா - அமைவிடம், நிலத்தோற்றம் மற்றும் வடிகாலமைப்பு",
  subject: "சமூக அறிவியல் (Social Science)",
  syllabus: "தமிழ்நாடு அரசு சமச்சீர் கல்வி 10-ஆம் வகுப்பு சமூக அறிவியல் - புவியியல்",

  // முக்கிய புவியியல் குறிப்புகள்
  geoHighlights: [
    { title: "மொத்த பரப்பளவு", val: "32,87,263 சதுர கிலோமீட்டர் (உலகின் 7-வது பெரிய நாடு, ஆசியாவில் 2-வது இடம்)" },
    { title: "நில எல்லைகள்", val: "15,200 கி.மீ (வடக்கே சீனா, நேபாளம், பூடான்; மேற்கே பாகிஸ்தான்; கிழக்கே வங்கதேசம், மியான்மர்)" },
    { title: "கடற்கரை நீளம்", val: "7,516.6 கி.மீ (தீவுக் கூட்டங்களையும் சேர்த்து; முதன்மை நிலப்பரப்பு 6,100 கி.மீ)" },
    { title: "திட்ட தீர்க்கரேகை (IST)", val: "82° 30' கிழக்கு தீர்க்கரேகை (மிர்சாபூர் / அலகாபாத் வழியே செல்கிறது - GMT + 5 மணி 30 நிமிடம்)" }
  ],

  subSections: [
    // -------------------------------------------------------------
    // பகுதி 1: இந்தியாவின் அமைவிடம், பரப்பளவு மற்றும் எல்லைகள்
    // -------------------------------------------------------------
    {
      id: "sec_soc_2_1",
      title: "பகுதி 1: அமைவிடம், பரப்பளவு மற்றும் எல்லைகள்",
      author: "புவியியல் - அலகு 1",
      questions: [
        {
          id: "soc_2_1",
          type: "1m",
          mark: "1 மதிப்பெண்",
          examTag: "அரசு மாதிரி",
          q: "இந்தியாவின் தென்கோடி முனை எவ்வாறு அழைக்கப்படுகிறது?",
          options: ["அ) கன்னியாகுமரி", "ஆ) இந்திரா முனை (Indira Point)", "இ) இந்திரா கோல்", "ஈ) கட்ச் வளைகுடா"],
          ans: "விடை: <strong>ஆ) இந்திரா முனை (Indira Point)</strong>. அந்தமான் நிக்கோபார் தீவுக் கூட்டத்தில் 6°45' வட அட்சத்தில் அமைந்துள்ள 'இந்திரா முனை' (பிக்மேலியன் முனை) இந்தியாவின் தென்கோடி முனையாகும். (இந்திய நிலப்பகுதியின் தென்கோடி முனை கன்னியாகுமரி ஆகும்).",
          ansTamil: "இந்தியாவின் தென்கோடி முனை அந்தமானில் உள்ள இந்திரா முனை ஆகும்."
        },
        {
          id: "soc_2_2",
          type: "1m",
          mark: "1 மதிப்பெண்",
          examYear: "2023",
          examTag: "2023*",
          q: "இந்திய திட்ட நேரமானது (IST) எந்த தீர்க்கரேகையை அடிப்படையாகக் கொண்டு கணக்கிடப்படுகிறது?",
          options: ["அ) 80° கிழக்கு", "ஆ) 82°30' கிழக்கு", "இ) 85° கிழக்கு", "ஈ) 0° கிரீன்விச்"],
          ans: "விடை: <b>ஆ) 82°30' கிழக்கு தீர்க்கரேகை</b>. இது மிர்சாபூர் (உத்தரப் பிரதேசம்) வழியே செல்கிறது. இது கிரீன்விச் சராசரி நேரத்தை விட 5 மணி நேரம் 30 நிமிடம் முன்னதாக உள்ளது.",
          ansTamil: "இந்தியாவின் திட்ட தீர்க்கரேகை 82°30' கிழக்கு ஆகும்."
        },
        {
          id: "soc_2_mcq_3",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "காஷ்மீர் முதல் கன்னியாகுமரி வரையிலான இந்தியாவின் வடக்கு-தெற்கு நீளம் எவ்வளவு?",
          options: ["அ) 2,933 கி.மீ", "ஆ) 3,214 கி.மீ", "இ) 3,500 கி.மீ", "ஈ) 3,000 கி.மீ"],
          ans: "விடை: <b>ஆ) 3,214 கி.மீ</b>. இந்தியாவின் வடக்கு-தெற்கு பரவல் 3,214 கி.மீ ஆகும்.",
          ansTamil: "வடக்கு-தெற்கு நீளம் 3,214 கி.மீ."
        },
        {
          id: "soc_2_mcq_4",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "இந்திய நிலப்பகுதியின் தென்கோடி முனை எது?",
          options: ["அ) இந்திரா முனை", "ஆ) கன்னியாகுமரி (முனை குமரி)", "இ) இராமேஸ்வரம்", "ஈ) கோவளம்"],
          ans: "விடை: <b>ஆ) கன்னியாகுமரி (முனை குமரி)</b>. இந்திய நிலப்பரப்பின் தென்கோடி முனை கன்னியாகுமரி (8° 4' வட அட்சம்) ஆகும்.",
          ansTamil: "நிலப்பரப்பின் தென்கோடி கன்னியாகுமரி."
        },
        {
          id: "soc_2_mcq_5",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "தென்னிந்தியாவின் மிக உயரமான சிகரம் எது?",
          options: ["அ) தொட்டபெட்டா", "ஆ) ஆனைமுடி", "இ) மகேந்திரகிரி", "ஈ) கல்சுபாய்"],
          ans: "விடை: <b>ஆ) ஆனைமுடி</b>. ஆனைமலைத் தொடரில் உள்ள ஆனைமுடி (2,695 மீ) தென்னிந்தியாவின் உயரமான சிகரமாகும்.",
          ansTamil: "ஆனைமுடி தென்னிந்தியாவின் உயரமான சிகரம்."
        },
        {
          id: "soc_2_mcq_6",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "வட இந்தியப் பெரும் சமவெளியில் காணப்படும் பழைய வண்டல் மண் படிவுகள் எவ்வாறு அழைக்கப்படுகின்றன?",
          options: ["அ) பாபர்", "ஆ) தராய்", "இ) பாங்கர் (Bhangar)", "ஈ) காதர் (Khadar)"],
          ans: "விடை: <b>இ) பாங்கர் (Bhangar)</b>. மேட்டு நிலங்களில் காணப்படும் பழைய வண்டல் மண் படிவுகள் பாங்கர் எனப்படும்.",
          ansTamil: "பழைய வண்டல் மண் பாங்கர் எனப்படும்."
        },
        {
          id: "soc_2_mcq_7",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "வெள்ளப் பெருக்குச் சமவெளிகளில் ஆண்டுதோறும் படிய வைக்கப்படும் புதிய வண்டல் மண் படிவுகள் எவ்வாறு அழைக்கப்படுகின்றன?",
          options: ["அ) பாங்கர்", "ஆ) காதர் (Khadar)", "இ) தராய்", "ஈ) பாபர்"],
          ans: "விடை: <b>ஆ) காதர் (Khadar)</b>. புதிய வண்டல் மண் படிவுகள் காதர் அல்லது பெட் நிலம் எனப்படும்.",
          ansTamil: "புதிய வண்டல் மண் காதர் எனப்படும்."
        },
        {
          id: "soc_2_mcq_8",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "இந்தியாவையும் இலங்கையையும் பிரிக்கும் குறுகிய ஆழமற்ற கடல் பகுதி எது?",
          options: ["அ) பத்து டிகிரி கால்வாய்", "ஆ) பால்க் நீரிணை மற்றும் மன்னார் வளைகுடா", "இ) டங்கன் பாசேஜ்", "ஈ) கிரேட் சேனல்"],
          ans: "விடை: <b>ஆ) பால்க் நீரிணை மற்றும் மன்னார் வளைகுடா</b>. பால்க் நீரிணை இந்தியாவையும் இலங்கையையும் பிரிக்கிறது.",
          ansTamil: "பால்க் நீரிணை இலங்கையைப் பிரிக்கிறது."
        },
        {
          id: "soc_2_mcq_9",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "அடிக்கடி தனது போக்கை மாற்றி வெள்ளப்பெருக்கை ஏற்படுத்துவதால் 'பீகாரின் துயரம்' என்று அழைக்கப்படும் ஆறு எது?",
          options: ["அ) காக்ரா", "ஆ) கண்டக்", "இ) கோசி", "ஈ) தாமோதர்"],
          ans: "விடை: <b>இ) கோசி</b>. கோசி ஆறு பீகாரின் துயரம் என அழைக்கப்படுகிறது.",
          ansTamil: "கோசி ஆறு பீகாரின் துயரம் ஆகும்."
        },
        {
          id: "soc_2_mcq_10",
          type: "1m",
          mark: "1 மதிப்பெண்",
          q: "குஜராத்தின் ரான் ஆஃப் கட்ச் முதல் அருணாச்சலப் பிரதேசம் வரையிலான இந்தியாவின் கிழக்கு-மேற்கு பரவல் எவ்வளவு?",
          options: ["அ) 2,933 கி.மீ", "ஆ) 3,214 கி.மீ", "இ) 3,100 கி.மீ", "ஈ) 2,800 கி.மீ"],
          ans: "விடை: <b>அ) 2,933 கி.மீ</b>. இந்தியாவின் கிழக்கு-மேற்கு நீளம் 2,933 கி.மீ ஆகும்.",
          ansTamil: "கிழக்கு-மேற்கு நீளம் 2,933 கி.மீ."
        },
        {
          id: "soc_2_3",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examYear: "2022",
          examTag: "2022*",
          isImportant: true,
          q: "இந்திய திட்டநேரத்தின் முக்கியத்துவம் பற்றி கூறுக. <br><span style='font-size:13.5px; color:var(--text-muted); font-weight:600;'>(அல்லது) இந்திய திட்ட நேரம் எவ்வாறு கணக்கிடப்படுகிறது?</span>",
          ans: `<div style="line-height:1.8;">
            <b>இந்திய திட்டநேரத்தின் முக்கியத்துவம் மற்றும் கணக்கீடு:</b><br><br>
            <b>1. நேர வேறுபாடு:</b> இந்தியாவின் கிழக்கே உள்ள அருணாச்சல பிரதேசத்திற்கும், மேற்கே உள்ள குஜராத்திற்கும் இடையே உள்ள தீர்க்கரேகை வேறுபாட்டால், சூரியன் உதயமாகும் நேரத்தில் சுமார் <b>2 மணி நேரம்</b> வேறுபாடு ஏற்படுகிறது.<br><br>
            <b>2. மத்திய தீர்க்கரேகை:</b> இந்த நேர குழப்பத்தைத் தவிர்ப்பதற்காக, இந்தியாவின் மத்திய பகுதி வழியாகச் செல்லும் <b>82°30' கிழக்கு தீர்க்கரேகை (82.5° E)</b> இந்தியாவின் திட்ட தீர்க்கரேகையாக எடுத்துக் கொள்ளப்பட்டுள்ளது.<br><br>
            <b>3. அமைவிடம்:</b> இத்தீர்க்கரேகை உத்தரப்பிரதேச மாநிலத்திலுள்ள <b>மிர்சாபூர் (அலகாபாத்)</b> வழியாகச் செல்கிறது.<br><br>
            <b>4. திட்ட நேரம்:</b> இந்த தீர்க்கரேகையின் உள்ளூர் நேரமே இந்தியா முழுவதும் <b>இந்திய திட்ட நேரமாக (IST)</b> பின்பற்றப்படுகிறது.<br><br>
            <b>5. GMT ஒப்பீடு:</b> இந்திய திட்ட நேரமானது கிரீன்விச் திட்ட நேரத்தை (Greenwich Meridian Time - GMT) விட <b>5 மணி 30 நிமிடங்கள்</b> முன்னதாக இருக்கும் (+5:30 மணி).
          </div>`,
          ansTamil: "அருணாச்சலப் பிரதேசத்திற்கும் குஜராத்திற்கும் 2 மணி நேர வித்தியாசம் உள்ளதால் 82°30' E மிர்சாபூர் தீர்க்கரேகை திட்ட நேரமாக (GMT+5:30) பின்பற்றப்படுகிறது.",
          blackboard: {
            title: "இந்திய திட்டநேரத்தின் முக்கியத்துவம் (Indian Standard Time - IST)",
            engTitle: "Importance of Indian Standard Time & Calculation",
            steps: [
              {
                stepNum: 1,
                badge: "① நேர வேறுபாடு (2 மணி நேரம்)",
                badgeEn: "① Time Difference (2 Hours)",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">1. நேர வேறுபாடு (Time Difference)</div>
                  <div class="bb-box-cyan">
                    <div class="bb-box-title" style="color:#67e8f9;">கிழக்கு - மேற்கு தீர்க்கரேகை இடைவெளி:</div>
                    <div class="bb-line" style="font-size:15px; color:#ffffff; margin:6px 0; line-height:1.6;">
                      • மேற்கே குஜராத்: <b>68° 7' E</b><br>
                      • கிழக்கே அருணாச்சல பிரதேசம்: <b>97° 25' E</b><br>
                      • தீர்க்கரேகை வேறுபாடு: சுமார் <b>30° (29° 18')</b>
                    </div>
                    <div class="bb-pill-cyan" style="font-size:15px; font-weight:800; color:#fde047; margin-top:6px;">
                      சூரியன் உதயமாகும் நேரத்தில் சுமார் 2 மணி நேரம் வேறுபாடு ஏற்படுகிறது!
                    </div>
                  </div>
                `,
                audioScriptTa: "படி ஒன்று: நேர வேறுபாடு. இந்தியாவின் கிழக்கே உள்ள அருணாச்சல பிரதேசத்திற்கும், மேற்கே உள்ள குஜராத்திற்கும் இடையே உள்ள தீர்க்கரேகை வேறுபாட்டால், சூரியன் உதயமாகும் நேரத்தில் சுமார் இரண்டு மணி நேரம் வேறுபாடு ஏற்படுகிறது.",
                audioScriptEn: "Point 1: Time Difference. Due to the longitudinal difference of about 30 degrees between Arunachal Pradesh in the east and Gujarat in the west, there is a time difference of about 2 hours in sunrise."
              },
              {
                stepNum: 2,
                badge: "② மத்திய தீர்க்கரேகை (82°30' E)",
                badgeEn: "② Standard Meridian (82°30' E)",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">2. மத்திய தீர்க்கரேகை (Standard Meridian)</div>
                  <div class="bb-box-blue">
                    <div class="bb-line" style="font-size:15px; color:#ffffff; line-height:1.6;">
                      நாட்டின் பல்வேறு பகுதிகளில் ஏற்படும் நேரக் குழப்பத்தைத் தவிர்ப்பதற்காக:
                    </div>
                    <div class="bb-line" style="font-size:20px; font-weight:800; color:#fde047; margin:8px 0;">
                      82° 30' கிழக்கு தீர்க்கரேகை (82.5° E)
                    </div>
                    <div class="bb-pill-cyan" style="font-size:14px; color:#ffffff; font-weight:700;">
                      இந்தியாவின் மத்திய திட்ட தீர்க்கரேகையாக எடுத்துக் கொள்ளப்பட்டுள்ளது.
                    </div>
                  </div>
                `,
                audioScriptTa: "படி இரண்டு: மத்திய தீர்க்கரேகை. இந்த நேர குழப்பத்தைத் தவிர்ப்பதற்காக, இந்தியாவின் மத்திய பகுதி வழியாகச் செல்லும் 82 டிகிரி 30 கலை கிழக்கு தீர்க்கரேகை, இந்தியாவின் திட்ட தீர்க்கரேகையாக எடுத்துக் கொள்ளப்பட்டுள்ளது.",
                audioScriptEn: "Point 2: Standard Meridian. To avoid time confusion across states, the 82 degrees 30 minutes East longitude passing centrally through India is taken as the Standard Meridian."
              },
              {
                stepNum: 3,
                badge: "③ அமைவிடம் (மிர்சாபூர் / உ.பி)",
                badgeEn: "③ Location (Mirzapur, UP)",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">3. அமைவிடம் (Geographical Route)</div>
                  <div class="bb-box-yellow">
                    <div class="bb-line" style="font-size:16px; color:#ffffff; line-height:1.6;">
                      📍 இத்தீர்க்கரேகை உத்தரப்பிரதேச மாநிலத்திலுள்ள <b>மிர்சாபூர் (அலகாபாத்)</b> வழியாகச் செல்கிறது.
                    </div>
                    <div style="background:rgba(0,0,0,0.3); padding:8px 12px; border-radius:8px; margin-top:8px; font-size:14px; color:#fde047;">
                      உத்தரப் பிரதேசம், மத்தியப் பிரதேசம், சத்தீஸ்கர், ஒடிசா மற்றும் ஆந்திரப் பிரதேசம் வழியே கடந்து செல்கிறது.
                    </div>
                  </div>
                `,
                audioScriptTa: "படி மூன்று: அமைவிடம். இத்தீர்க்கரேகை உத்தரப்பிரதேச மாநிலத்திலுள்ள மிர்சாபூர் மற்றும் அலகாபாத் வழியாகச் செல்கிறது.",
                audioScriptEn: "Point 3: Location. This standard meridian passes through Mirzapur near Prayagraj in the state of Uttar Pradesh."
              },
              {
                stepNum: 4,
                badge: "④ திட்ட நேரம் (IST)",
                badgeEn: "④ Indian Standard Time (IST)",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">4. திட்ட நேரம் (Indian Standard Time)</div>
                  <div class="bb-box-green">
                    <div class="bb-line" style="font-size:16px; color:#ffffff; line-height:1.6;">
                      இந்த மத்திய தீர்க்கரேகையின் உள்ளூர் தல நேரமே:
                    </div>
                    <div class="bb-line" style="font-size:22px; font-weight:800; color:#86efac; margin:8px 0;">
                      🇮🇳 இந்திய திட்ட நேரம் (IST)
                    </div>
                    <div class="bb-line" style="font-size:14px; color:#e2e8f0;">
                      இது இந்தியா முழுவதும் அனைத்து நிர்வாகம், இரயில்வே மற்றும் ஊடகங்களுக்கு ஒரே சீரான பொதுவான நேரமாகப் பின்பற்றப்படுகிறது.
                    </div>
                  </div>
                `,
                audioScriptTa: "படி நான்கு: திட்ட நேரம். இந்த தீர்க்கரேகையின் உள்ளூர் நேரமே இந்தியா முழுவதும் இந்திய திட்ட நேரமாக (IST) பின்பற்றப்படுகிறது.",
                audioScriptEn: "Point 4: Standard Time. The local time of this central meridian is officially followed across the entire country as the Indian Standard Time."
              },
              {
                stepNum: 5,
                badge: "⑤ GMT ஒப்பீடு (+5:30 மணி)",
                badgeEn: "⑤ GMT Comparison (+5:30 hrs)",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">5. GMT நேர ஒப்பீடு (+5:30 மணி)</div>
                  <div class="bb-box-cyan">
                    <div class="bb-line" style="font-size:15px; color:#ffffff; line-height:1.6;">
                      கிரீன்விச் திட்ட நேரம் (GMT 0°) உடன் ஒப்பீடு:<br>
                      1° தீர்க்கரேகை = 4 நிமிடங்கள்
                    </div>
                    <div class="bb-line" style="font-size:18px; font-weight:800; color:#fde047; margin:6px 0;">
                      82.5° × 4 நிமிடம் = 330 நிமிடங்கள் = 5 மணி 30 நிமிடங்கள்
                    </div>
                    <div class="bb-pill-magenta" style="font-size:18px; font-weight:800; color:#ffffff; text-align:center; margin-top:8px;">
                      IST = GMT + 5 மணி 30 நிமிடங்கள் (முன்னதாக இருக்கும்)
                    </div>
                  </div>
                `,
                audioScriptTa: "படி ஐந்து: ஜி.எம்.டி ஒப்பீடு. இந்திய திட்ட நேரமானது கிரீன்விச் திட்ட நேரத்தை விட 5 மணி 30 நிமிடங்கள் முன்னதாக இருக்கும். அதாவது ஜி.எம்.டி கூட்டல் 5 மணி 30 நிமிடங்கள் ஆகும்.",
                audioScriptEn: "Point 5: GMT Comparison. Indian Standard Time is ahead of Greenwich Meridian Time by 5 hours and 30 minutes, written as GMT plus 5:30 hours."
              }
            ]
          }
        },
        {
          id: "soc_2_4",
          type: "2m",
          mark: "2 மதிப்பெண்",
          q: "இந்தியாவின் அண்டை நாடுகள் யாவை?",
          ans: `<div style="line-height:1.8;">
            <b>எல்லைகளைப் பகிர்ந்து கொள்ளும் நாடுகள்:</b><br>
            1. <b>வடமேற்கில்:</b> பாகிஸ்தான், ஆப்கானிஸ்தான்<br>
            2. <b>வடக்கே:</b> சீனா, நேபாளம், பூடான்<br>
            3. <b>கிழக்கே:</b> வங்காளதேசம், மியான்மர்<br>
            4. <b>தெற்கே (கடல் எல்லை):</b> இலங்கை மற்றும் மாலத்தீவுகள்.<br><br>
            <i>(குறிப்பு: இந்தியாவையும் இலங்கையையும் பிரிக்கும் குறுகிய கடல் பகுதி 'பாக் நீரிணை' (Palk Strait) ஆகும்).</i>
          </div>`,
          ansTamil: "பாகிஸ்தான், சீனா, நேபாளம், பூடான், வங்கதேசம், மியான்மர் ஆகியவை நில அண்டை நாடுகள்; இலங்கை கடல் அண்டை நாடு."
        }
      ]
    },

    // -------------------------------------------------------------
    // பகுதி 2: இமயமலை, சமவெளிகள் மற்றும் பீடபூமிகள்
    // -------------------------------------------------------------
    {
      id: "sec_soc_2_2",
      title: "பகுதி 2: இமயமலை, பெரும் சமவெளிகள் & பீடபூமிகள்",
      author: "புவியியல் - அலகு 1",
      questions: [
        {
          id: "soc_2_5",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examYear: "2023",
          examTag: "2023*",
          isImportant: true,
          audioFile: "audio/soc_2_5.mp3",
          audioScript: "மேற்குத் தொடர்ச்சி மலைகள் மற்றும் கிழக்குத் தொடர்ச்சி மலைகள் வேறுபாடுகள். அமைவிடம்: மேற்குத் தொடர்ச்சி மலைகள் தீபகற்ப பீடபூமியின் மேற்கு விளிம்பில் அரபிக் கடலுக்கு இணையாக அமைந்துள்ளது. கிழக்குத் தொடர்ச்சி மலைகள் தீபகற்ப பீடபூமியின் கிழக்கு விளிம்பில் வங்காள விரிகுடாவிற்கு இணையாக அமைந்துள்ளது. மலைத்தொடரின் தன்மை: மேற்குத் தொடர்ச்சி மலைகள் ஒரு தொடர்ச்சியான மலைத்தொடர் ஆகும். கிழக்குத் தொடர்ச்சி மலைகள் ஆறுகளால் அரிக்கப்பட்ட தொடர்ச்சியற்ற மலைத்தொடர் ஆகும். உயரம்: மேற்குத் தொடர்ச்சி மலைகளின் உயரம் அதிகம், ஒன்பது நூறு மீட்டர் முதல் ஆயிரத்து அறுநூறு மீட்டர் வரை. கிழக்குத் தொடர்ச்சி மலைகளின் உயரம் குறைவு, சராசரியாக அறுநூறு மீட்டர் வரை. மிக உயரமான சிகரம்: மேற்குத் தொடர்ச்சி மலையின் உயரமான சிகரம் ஆனைமுடி, இரண்டாயிரத்து அறுநூற்று தொண்ணூற்று ஐந்து மீட்டர். கிழக்குத் தொடர்ச்சி மலைகளின் உயரமான சிகரம் ஜிந்தகடா, ஆயிரத்து அறுநூற்று தொண்ணூறு மீட்டர். மழைப்பொழிவு: மேற்குத் தொடர்ச்சி மலைகள் அதிக மழைப்பொழிவைத் தருகிறது. கிழக்குத் தொடர்ச்சி மலைகள் குறைந்த அளவு மழைப்பொழிவையே தருகிறது.",
          diagramSvg: `<svg viewBox="0 0 900 645" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:#0b132b; border-radius:16px; border:2px solid #1e293b; box-shadow:0 10px 30px rgba(0,0,0,0.4); font-family:system-ui, -apple-system, 'Mukta Malar', sans-serif;">
  <defs>
    <linearGradient id="wgSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0f2b48"/>
      <stop offset="50%" stop-color="#1b4965"/>
      <stop offset="100%" stop-color="#2a6f97"/>
    </linearGradient>
    <linearGradient id="egSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#3d2645"/>
      <stop offset="50%" stop-color="#8338ec" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#f77f00" stop-opacity="0.2"/>
    </linearGradient>
    <linearGradient id="wgPeakGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#10b981"/>
      <stop offset="60%" stop-color="#047857"/>
      <stop offset="100%" stop-color="#064e3b"/>
    </linearGradient>
    <linearGradient id="egPeakGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fbbf24"/>
      <stop offset="60%" stop-color="#d97706"/>
      <stop offset="100%" stop-color="#78350f"/>
    </linearGradient>
    <filter id="cardShadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000" flood-opacity="0.5"/>
    </filter>
  </defs>

  <!-- Main Title Banner -->
  <rect x="20" y="16" width="860" height="52" rx="12" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="450" y="42" fill="#fde047" font-size="18" font-weight="800" text-anchor="middle">
    ⛰️ படம் 1 &amp; 2: மேற்குத் தொடர்ச்சி மலைகள் vs கிழக்குத் தொடர்ச்சி மலைகள் ஒப்பீடு
  </text>
  <text x="450" y="58" fill="#94a3b8" font-size="12" font-weight="600" text-anchor="middle">
    (10-ஆம் வகுப்பு புவியியல் - அலகு 1 | 2 மதிப்பெண் வரைபட ஒப்பீட்டு விளக்கம்)
  </text>

  <!-- ================= DRAWING 1: WESTERN GHATS ================= -->
  <g transform="translate(20, 80)">
    <!-- Container Card -->
    <rect x="0" y="0" width="420" height="475" rx="14" fill="#0f172a" stroke="#059669" stroke-width="2" filter="url(#cardShadow)"/>
    
    <!-- Title Ribbon -->
    <rect x="0" y="0" width="420" height="42" rx="12" fill="url(#wgPeakGrad)"/>
    <text x="210" y="27" fill="#ffffff" font-size="15" font-weight="800" text-anchor="middle">
      ⛰️ படம் 1: மேற்குத் தொடர்ச்சி மலைகள் (WESTERN GHATS)
    </text>

    <!-- Sky Background for Drawing 1 -->
    <rect x="12" y="50" width="396" height="230" rx="10" fill="url(#wgSky)"/>

    <!-- Rain Clouds & Monsoon Rain (Arabian Sea SW Monsoon) -->
    <g transform="translate(30, 60)">
      <!-- Clouds -->
      <path d="M 20 30 Q 30 15 50 20 Q 65 10 85 20 Q 105 15 115 30 Q 125 45 105 50 L 25 50 Q 10 45 20 30 Z" fill="#64748b" opacity="0.95"/>
      <path d="M 80 25 Q 95 10 115 15 Q 130 5 150 15 Q 170 10 180 25 Q 190 40 170 45 L 85 45 Z" fill="#94a3b8" opacity="0.9"/>
      <!-- Rain drops/arrows -->
      <line x1="40" y1="58" x2="30" y2="90" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="4,4"/>
      <line x1="60" y1="58" x2="50" y2="95" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="4,4"/>
      <line x1="85" y1="58" x2="75" y2="100" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="4,4"/>
      <line x1="110" y1="58" x2="100" y2="95" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="4,4"/>
      <line x1="135" y1="58" x2="125" y2="90" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="4,4"/>
      <line x1="160" y1="58" x2="150" y2="85" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="4,4"/>
      
      <!-- Rainfall Badge -->
      <rect x="65" y="60" width="150" height="22" rx="6" fill="#0284c7" opacity="0.9"/>
      <text x="140" y="75" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle">🌧️ அதிக தென்மேற்கு மழை</text>
    </g>

    <!-- Continuous Mountain Range (Unbroken Tall Wall) -->
    <!-- Background Ridge -->
    <path d="M 12 240 L 40 160 L 90 190 L 140 140 L 190 175 L 240 120 L 300 165 L 350 130 L 408 190 L 408 280 L 12 280 Z" fill="#047857" opacity="0.6"/>

    <!-- Foreground Solid Continuous Mountain Ridge -->
    <path d="M 12 280 L 12 230 Q 50 160 85 180 T 160 160 T 235 110 T 310 150 T 380 140 L 408 170 L 408 280 Z" fill="url(#wgPeakGrad)"/>

    <!-- Highlight Wall line showing Continuous Mountain Wall -->
    <path d="M 12 225 Q 50 155 85 175 T 160 155 T 235 105 T 310 145 T 380 135 L 408 165" fill="none" stroke="#6ee7b7" stroke-width="3"/>

    <!-- Highest Peak Flag: ANAMUDI 2695 m -->
    <g transform="translate(235, 105)">
      <!-- Flagpole -->
      <line x1="0" y1="0" x2="0" y2="-45" stroke="#fde047" stroke-width="2.5"/>
      <!-- Flag -->
      <polygon points="0,-45 28,-36 0,-27" fill="#ef4444"/>
      <!-- Summit Node -->
      <circle cx="0" cy="0" r="4.5" fill="#fde047"/>
      <!-- Label Tag -->
      <rect x="-75" y="-72" width="150" height="24" rx="6" fill="#1e293b" stroke="#fde047" stroke-width="1.5"/>
      <text x="0" y="-56" fill="#fde047" font-size="11.5" font-weight="800" text-anchor="middle">🚩 ஆனைமுடி (2695 மீ)</text>
    </g>

    <!-- Western Edge Arabian Sea Label -->
    <rect x="22" y="235" width="115" height="36" rx="6" fill="#0369a1" stroke="#38bdf8" stroke-width="1"/>
    <text x="79" y="250" fill="#ffffff" font-size="11" font-weight="800" text-anchor="middle">🌊 அரபிக் கடல்</text>
    <text x="79" y="264" fill="#bae6fd" font-size="9.5" font-weight="700" text-anchor="middle">(மேற்கு விளிம்பு)</text>

    <!-- Elevation Marker Badge -->
    <rect x="260" y="235" width="138" height="36" rx="6" fill="#064e3b" stroke="#34d399" stroke-width="1"/>
    <text x="329" y="250" fill="#a7f3d0" font-size="10.5" font-weight="800" text-anchor="middle">📏 உயரம் அதிகம்</text>
    <text x="329" y="264" fill="#ffffff" font-size="10" font-weight="700" text-anchor="middle">900 மீ – 1600 மீ</text>

    <!-- Key Bullet Summary Points Inside Drawing 1 -->
    <g transform="translate(16, 292)">
      <rect x="0" y="0" width="388" height="170" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1"/>
      
      <text x="14" y="24" fill="#34d399" font-size="13" font-weight="800">✅ முக்கிய அம்சங்கள் (5 வேறுபாடுகள்):</text>
      
      <text x="14" y="48" fill="#e2e8f0" font-size="12" font-weight="600">1. <tspan fill="#38bdf8" font-weight="700">அமைவிடம்:</tspan> மேற்கு விளிம்பில் அரபிக் கடலுக்கு இணை.</text>
      <text x="14" y="72" fill="#e2e8f0" font-size="12" font-weight="600">2. <tspan fill="#34d399" font-weight="700">தன்மை:</tspan> <tspan fill="#6ee7b7" font-weight="800">தொடர்ச்சியான</tspan> மலைத்தொடர் (பிளவுகள் இல்லை).</text>
      <text x="14" y="96" fill="#e2e8f0" font-size="12" font-weight="600">3. <tspan fill="#fde047" font-weight="700">உயரம்:</tspan> அதிகம் (900 மீ முதல் 1600 மீ வரை).</text>
      <text x="14" y="120" fill="#e2e8f0" font-size="12" font-weight="600">4. <tspan fill="#f87171" font-weight="700">உயரமான சிகரம்:</tspan> <tspan fill="#fde047" font-weight="800">ஆனைமுடி (2695 மீ)</tspan>.</text>
      <text x="14" y="144" fill="#e2e8f0" font-size="12" font-weight="600">5. <tspan fill="#60a5fa" font-weight="700">மழைப்பொழிவு:</tspan> <tspan fill="#93c5fd" font-weight="800">அதிக மழைப்பொழிவைத்</tspan> தருகிறது.</text>
    </g>
  </g>

  <!-- ================= DRAWING 2: EASTERN GHATS ================= -->
  <g transform="translate(460, 80)">
    <!-- Container Card -->
    <rect x="0" y="0" width="420" height="475" rx="14" fill="#0f172a" stroke="#d97706" stroke-width="2" filter="url(#cardShadow)"/>
    
    <!-- Title Ribbon -->
    <rect x="0" y="0" width="420" height="42" rx="12" fill="url(#egPeakGrad)"/>
    <text x="210" y="27" fill="#ffffff" font-size="15" font-weight="800" text-anchor="middle">
      🏞️ படம் 2: கிழக்குத் தொடர்ச்சி மலைகள் (EASTERN GHATS)
    </text>

    <!-- Sky Background for Drawing 2 -->
    <rect x="12" y="50" width="396" height="230" rx="10" fill="url(#egSky)"/>

    <!-- Light Clouds & Low Rainfall (Rain shadow) -->
    <g transform="translate(40, 60)">
      <path d="M 20 25 Q 35 15 50 20 Q 65 12 80 20 Q 95 18 100 28 Q 105 38 90 40 L 25 40 Z" fill="#cbd5e1" opacity="0.6"/>
      <rect x="120" y="60" width="130" height="22" rx="6" fill="#78350f" opacity="0.9"/>
      <text x="185" y="75" fill="#fde047" font-size="11" font-weight="700" text-anchor="middle">⛅ குறைந்த மழைப்பொழிவு</text>
    </g>

    <!-- Discontinuous Broken Hills with River Gaps -->
    <!-- Broken Hill 1 (North - near Mahanadi) -->
    <path d="M 12 280 L 12 220 Q 35 160 65 175 Q 95 190 105 240 L 105 280 Z" fill="url(#egPeakGrad)"/>
    <path d="M 12 215 Q 35 155 65 170 Q 95 185 105 235" fill="none" stroke="#fde047" stroke-width="2.5"/>

    <!-- River Gap 1: Mahanadi -->
    <path d="M 105 250 Q 118 240 128 280" fill="none" stroke="#38bdf8" stroke-width="4"/>
    <text x="116" y="228" fill="#38bdf8" font-size="9" font-weight="800" text-anchor="middle">மகாநதி</text>

    <!-- Broken Hill 2 (Central - with Jindhagada Peak) -->
    <path d="M 128 280 L 132 240 Q 170 145 205 150 Q 240 155 260 240 L 260 280 Z" fill="url(#egPeakGrad)"/>
    <path d="M 132 235 Q 170 140 205 145 Q 240 150 260 235" fill="none" stroke="#fde047" stroke-width="2.5"/>

    <!-- Highest Peak Flag: JINDHAGADA 1690 m -->
    <g transform="translate(205, 145)">
      <line x1="0" y1="0" x2="0" y2="-40" stroke="#fde047" stroke-width="2.5"/>
      <polygon points="0,-40 26,-32 0,-24" fill="#ea580c"/>
      <circle cx="0" cy="0" r="4.5" fill="#fde047"/>
      <rect x="-72" y="-66" width="144" height="24" rx="6" fill="#1e293b" stroke="#f97316" stroke-width="1.5"/>
      <text x="0" y="-50" fill="#fed7aa" font-size="11.5" font-weight="800" text-anchor="middle">🚩 ஜிந்தகடா (1690 மீ)</text>
    </g>

    <!-- River Gap 2: Godavari & Krishna -->
    <path d="M 260 245 Q 275 230 288 280" fill="none" stroke="#38bdf8" stroke-width="5"/>
    <text x="274" y="222" fill="#38bdf8" font-size="8.5" font-weight="800" text-anchor="middle">கோதாவரி /</text>
    <text x="274" y="233" fill="#38bdf8" font-size="8.5" font-weight="800" text-anchor="middle">கிருஷ்ணா</text>

    <!-- Broken Hill 3 (South - Cauvery dissected) -->
    <path d="M 288 280 L 292 235 Q 325 180 355 190 Q 380 200 408 245 L 408 280 Z" fill="url(#egPeakGrad)"/>
    <path d="M 292 230 Q 325 175 355 185 Q 380 195 408 240" fill="none" stroke="#fde047" stroke-width="2.5"/>

    <!-- River Gap 3: Cauvery label -->
    <text x="375" y="225" fill="#38bdf8" font-size="9" font-weight="800" text-anchor="middle">காவேரி ➔</text>

    <!-- Broken Chain Banner Indicator -->
    <rect x="90" y="105" width="230" height="24" rx="6" fill="#78350f" stroke="#f59e0b" stroke-width="1"/>
    <text x="205" y="121" fill="#fef08a" font-size="11" font-weight="800" text-anchor="middle">⚡ ஆறுகளால் அரிக்கப்பட்ட பிளவுகள்</text>

    <!-- Eastern Edge Bay of Bengal Label -->
    <rect x="22" y="235" width="115" height="36" rx="6" fill="#1e3a8a" stroke="#60a5fa" stroke-width="1"/>
    <text x="79" y="250" fill="#ffffff" font-size="11" font-weight="800" text-anchor="middle">🌊 வங்க விரிகுடா</text>
    <text x="79" y="264" fill="#bfdbfe" font-size="9.5" font-weight="700" text-anchor="middle">(கிழக்கு விளிம்பு)</text>

    <!-- Elevation Marker Badge -->
    <rect x="260" y="235" width="138" height="36" rx="6" fill="#451a03" stroke="#f59e0b" stroke-width="1"/>
    <text x="329" y="250" fill="#fef08a" font-size="10.5" font-weight="800" text-anchor="middle">📏 உயரம் குறைவு</text>
    <text x="329" y="264" fill="#ffffff" font-size="10" font-weight="700" text-anchor="middle">சராசரி 600 மீ</text>

    <!-- Key Bullet Summary Points Inside Drawing 2 -->
    <g transform="translate(16, 292)">
      <rect x="0" y="0" width="388" height="170" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1"/>
      
      <text x="14" y="24" fill="#fbbf24" font-size="13" font-weight="800">✅ முக்கிய அம்சங்கள் (5 வேறுபாடுகள்):</text>
      
      <text x="14" y="48" fill="#e2e8f0" font-size="12" font-weight="600">1. <tspan fill="#38bdf8" font-weight="700">அமைவிடம்:</tspan> கிழக்கு விளிம்பில் வங்காள விரிகுடாவிற்கு இணை.</text>
      <text x="14" y="72" fill="#e2e8f0" font-size="12" font-weight="600">2. <tspan fill="#f59e0b" font-weight="700">தன்மை:</tspan> <tspan fill="#fcd34d" font-weight="800">தொடர்ச்சியற்ற</tspan> மலைத்தொடர் (ஆறுகளால் அரிக்கப்பட்டது).</text>
      <text x="14" y="96" fill="#e2e8f0" font-size="12" font-weight="600">3. <tspan fill="#fde047" font-weight="700">உயரம்:</tspan> குறைவு (சராசரியாக 600 மீ வரை).</text>
      <text x="14" y="120" fill="#e2e8f0" font-size="12" font-weight="600">4. <tspan fill="#f87171" font-weight="700">உயரமான சிகரம்:</tspan> <tspan fill="#fed7aa" font-weight="800">ஜிந்தகடா (1690 மீ)</tspan>.</text>
      <text x="14" y="144" fill="#e2e8f0" font-size="12" font-weight="600">5. <tspan fill="#60a5fa" font-weight="700">மழைப்பொழிவு:</tspan> <tspan fill="#fed7aa" font-weight="800">குறைந்த அளவு மழைப்பொழிவையே</tspan> தருகிறது.</text>
    </g>
  </g>

  <!-- Peninsula India Junction Overview Footer -->
  <g transform="translate(20, 565)">
    <rect x="0" y="0" width="860" height="65" rx="10" fill="#0f172a" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="430" y="26" fill="#60a5fa" font-size="13.5" font-weight="800" text-anchor="middle">
      📍 இரு மலைகளும் சந்திக்கும் இடம்: நீலகிரி மலைகள் (Nilgiri Hills, Tamil Nadu)
    </text>
    <text x="430" y="48" fill="#cbd5e1" font-size="11.5" font-weight="600" text-anchor="middle">
      தீபகற்ப இந்தியாவில் மேற்குத் தொடர்ச்சி மலைகளும் கிழக்குத் தொடர்ச்சி மலைகளும் நீலகிரி மலையில் ஒன்றாக இணைகின்றன!
    </text>
  </g>
</svg>`,
          diagramCaption: "படம் 1 & 2: மேற்குத் தொடர்ச்சி மலைகள் (தொடர்ச்சியானது, ஆனைமுடி 2695 மீ) மற்றும் கிழக்குத் தொடர்ச்சி மலைகள் (தொடர்ச்சியற்றது, ஜிந்தகடா 1690 மீ) ஒப்பீட்டு வரைபடங்கள்",
          q: "வேறுபடுத்துக: மேற்குத் தொடர்ச்சி மலைகள் மற்றும் கிழக்குத் தொடர்ச்சி மலைகள்.",
          ans: `<div style="line-height:1.7;">
            <div style="font-weight:800; color:var(--text-main); margin-bottom:10px; font-size:15px;">
              ⛰️ மேற்குத் தொடர்ச்சி மலைகள் மற்றும் 🏞️ கிழக்குத் தொடர்ச்சி மலைகள் வேறுபாடுகள்:
            </div>
            <!-- Mobile-Friendly Comparison Table -->
            <div style="overflow-x:auto; -webkit-overflow-scrolling:touch; border-radius:10px; border:1px solid var(--border); margin-top:8px;">
              <table style="width:100%; border-collapse:collapse; font-size:13.5px; text-align:left; min-width:320px;">
                <thead>
                  <tr style="background:linear-gradient(90deg, #1e3a8a, #065f46); color:#ffffff;">
                    <th style="padding:10px 12px; width:20%; border-right:1px solid rgba(255,255,255,0.15);">வேறுபாடு</th>
                    <th style="padding:10px 12px; width:40%; color:#93c5fd; border-right:1px solid rgba(255,255,255,0.15);">⛰️ மேற்குத் தொடர்ச்சி மலைகள்</th>
                    <th style="padding:10px 12px; width:40%; color:#86efac;">🏞️ கிழக்குத் தொடர்ச்சி மலைகள்</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="background:var(--bg-card); border-bottom:1px solid var(--border);">
                    <td style="padding:9px 12px; font-weight:700; color:var(--primary); border-right:1px solid var(--border);">அமைவிடம்</td>
                    <td style="padding:9px 12px; border-right:1px solid var(--border);">தீபகற்ப பீடபூமியின் <b>மேற்கு விளிம்பில்</b>, அரபிக் கடலுக்கு இணையாக அமைந்துள்ளது.</td>
                    <td style="padding:9px 12px;">தீபகற்ப பீடபூமியின் <b>கிழக்கு விளிம்பில்</b>, வங்காள விரிகுடாவிற்கு இணையாக அமைந்துள்ளது.</td>
                  </tr>
                  <tr style="background:var(--bg-page); border-bottom:1px solid var(--border);">
                    <td style="padding:9px 12px; font-weight:700; color:var(--primary); border-right:1px solid var(--border);">தன்மை</td>
                    <td style="padding:9px 12px; border-right:1px solid var(--border);">இது ஒரு <b>தொடர்ச்சியான</b> மலைத்தொடர் ஆகும்.</td>
                    <td style="padding:9px 12px;">இது ஆறுகளால் அரிக்கப்பட்ட <b>தொடர்ச்சியற்ற</b> மலைத்தொடர் ஆகும்.</td>
                  </tr>
                  <tr style="background:var(--bg-card); border-bottom:1px solid var(--border);">
                    <td style="padding:9px 12px; font-weight:700; color:var(--primary); border-right:1px solid var(--border);">உயரம்</td>
                    <td style="padding:9px 12px; border-right:1px solid var(--border);"><b>உயரம் அதிகம்</b> (900 மீ முதல் 1600 மீ வரை).</td>
                    <td style="padding:9px 12px;"><b>உயரம் குறைவு</b> (சராசரியாக 600 மீ வரை).</td>
                  </tr>
                  <tr style="background:var(--bg-page); border-bottom:1px solid var(--border);">
                    <td style="padding:9px 12px; font-weight:700; color:var(--primary); border-right:1px solid var(--border);">சிகரம்</td>
                    <td style="padding:9px 12px; border-right:1px solid var(--border);">உயரமான சிகரம்: <b>ஆனைமுடி (2695 மீட்டர்)</b>.</td>
                    <td style="padding:9px 12px;">உயரமான சிகரம்: <b>ஜிந்தகடா (1690 மீட்டர்)</b>.</td>
                  </tr>
                  <tr style="background:var(--bg-card);">
                    <td style="padding:9px 12px; font-weight:700; color:var(--primary); border-right:1px solid var(--border);">மழை</td>
                    <td style="padding:9px 12px; border-right:1px solid var(--border);"><b>அதிக மழைப்பொழிவை</b> தருகிறது.</td>
                    <td style="padding:9px 12px;"><b>குறைந்த அளவு மழைப்பொழிவையே</b> தருகிறது.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Visual 2 Drawings Section in Answer -->
            <div style="margin-top:14px; background:var(--bg-page); border-radius:12px; padding:12px; border:1px solid var(--border);">
              <div style="font-size:13.5px; font-weight:800; color:var(--primary); margin-bottom:8px; display:flex; align-items:center; gap:6px;">
                <span>🎨 வேறுபாடுகளை விளக்கும் ஒப்பீட்டு வரைபடங்கள் (Comparative Drawings):</span>
              </div>
              <div style="font-size:12px; color:var(--text-muted); margin-bottom:10px;">
                படம் 1: மேற்குத் தொடர்ச்சி மலைகள் (தொடர்ச்சியான மலைச்சுவர், ஆனைமுடி 2695 மீ, தென்மேற்குப் பருவமழை) | படம் 2: கிழக்குத் தொடர்ச்சி மலைகள் (மகாநதி, கோதாவரி, கிருஷ்ணா, காவேரி ஆறுகளால் அரிக்கப்பட்ட தொடர்ச்சியற்ற குன்றுகள், ஜிந்தகடா 1690 மீ)
              </div>
            </div>
          </div>`,
          ansTamil: "மேற்குத் தொடர்ச்சி மலைகள் தொடர்ச்சியானவை, உயரம் அதிகம் (ஆனைமுடி 2695 மீ), அதிக மழை தரும். கிழக்குத் தொடர்ச்சி மலைகள் தொடர்ச்சியற்றவை, உயரம் குறைவு (ஜிந்தகடா 1690 மீ), குறைந்த மழை தரும்.",
          blackboard: {
            title: "வேறுபடுத்துக: மேற்கு & கிழக்குத் தொடர்ச்சி மலைகள்",
            engTitle: "Distinguish: Western Ghats vs Eastern Ghats",
            introAudio: "audio/soc_2_5_step0.mp3",
            steps: [
              {
                stepNum: 1,
                badge: "① அமைவிடம் (Location)",
                badgeEn: "① Location",
                audioFile: "audio/soc_2_5_step1.mp3",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800; font-size:15px; margin-bottom:8px;">
                    1. அமைவிடம் (Location)
                  </div>
                  <div class="bb-compare-card">
                    <div class="bb-compare-row bb-row-west">
                      <span class="bb-compare-badge-west">⛰️ மேற்கு</span>
                      <span class="bb-compare-text">தீபகற்ப பீடபூமியின் <b>மேற்கு விளிம்பில்</b>, அரபிக் கடலுக்கு இணையாக அமைந்துள்ளது.</span>
                    </div>
                    <div class="bb-compare-row bb-row-east">
                      <span class="bb-compare-badge-east">🏞️ கிழக்கு</span>
                      <span class="bb-compare-text">தீபகற்ப பீடபூமியின் <b>கிழக்கு விளிம்பில்</b>, வங்காள விரிகுடாவிற்கு இணையாக அமைந்துள்ளது.</span>
                    </div>
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800; font-size:15px; margin-bottom:8px;">
                    1. Location
                  </div>
                  <div class="bb-compare-card">
                    <div class="bb-compare-row bb-row-west">
                      <span class="bb-compare-badge-west">⛰️ Western</span>
                      <span class="bb-compare-text">Parallel to the Arabian Sea along the <b>western edge</b> of Deccan Plateau.</span>
                    </div>
                    <div class="bb-compare-row bb-row-east">
                      <span class="bb-compare-badge-east">🏞️ Eastern</span>
                      <span class="bb-compare-text">Parallel to the Bay of Bengal along the <b>eastern edge</b> of Deccan Plateau.</span>
                    </div>
                  </div>
                `,
                audioScriptTa: "அமைவிடம்: மேற்கு தொடர்ச்சி மலைகள் தீபகற்ப பீடபூமியின் மேற்கு விளிம்பில் அரபிக் கடலுக்கு இணையாக அமைந்துள்ளது. கிழக்கு தொடர்ச்சி மலைகள் தீபகற்ப பீடபூமியின் கிழக்கு விளிம்பில் வங்காள விரிகுடாவிற்கு இணையாக அமைந்துள்ளது.",
                audioScriptEn: "Western Ghats lie along the western edge parallel to the Arabian Sea. Eastern Ghats lie along the eastern edge parallel to the Bay of Bengal."
              },
              {
                stepNum: 2,
                badge: "② தன்மை (Continuity)",
                badgeEn: "② Continuity",
                audioFile: "audio/soc_2_5_step2.mp3",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800; font-size:15px; margin-bottom:8px;">
                    2. மலைத்தொடரின் தன்மை (Continuity)
                  </div>
                  <div class="bb-compare-card">
                    <div class="bb-compare-row bb-row-west">
                      <span class="bb-compare-badge-west">⛰️ மேற்கு</span>
                      <span class="bb-compare-text">இது ஒரு <b>தொடர்ச்சியான</b> மலைத்தொடர் ஆகும்.</span>
                    </div>
                    <div class="bb-compare-row bb-row-east">
                      <span class="bb-compare-badge-east">🏞️ கிழக்கு</span>
                      <span class="bb-compare-text">இது ஆறுகளால் அரிக்கப்பட்ட <b>தொடர்ச்சியற்ற</b> மலைத்தொடர் ஆகும்.</span>
                    </div>
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800; font-size:15px; margin-bottom:8px;">
                    2. Continuity
                  </div>
                  <div class="bb-compare-card">
                    <div class="bb-compare-row bb-row-west">
                      <span class="bb-compare-badge-west">⛰️ Western</span>
                      <span class="bb-compare-text">It is a <b>continuous</b> range of mountains.</span>
                    </div>
                    <div class="bb-compare-row bb-row-east">
                      <span class="bb-compare-badge-east">🏞️ Eastern</span>
                      <span class="bb-compare-text">It is a <b>discontinuous</b> range dissected by east-flowing rivers.</span>
                    </div>
                  </div>
                `,
                audioScriptTa: "மலைத்தொடரின் தன்மை: மேற்கு தொடர்ச்சி மலைகள் ஒரு தொடர்ச்சியான மலைத்தொடர் ஆகும். கிழக்கு தொடர்ச்சி மலைகள் ஆறுகளால் அரிக்கப்பட்ட தொடர்ச்சியற்ற மலைத்தொடர் ஆகும்.",
                audioScriptEn: "Western Ghats form a continuous mountain range. Eastern Ghats form a discontinuous mountain range."
              },
              {
                stepNum: 3,
                badge: "③ உயரம் (Elevation)",
                badgeEn: "③ Elevation",
                audioFile: "audio/soc_2_5_step3.mp3",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800; font-size:15px; margin-bottom:8px;">
                    3. உயரம் (Elevation)
                  </div>
                  <div class="bb-compare-card">
                    <div class="bb-compare-row bb-row-west">
                      <span class="bb-compare-badge-west">⛰️ மேற்கு</span>
                      <span class="bb-compare-text"><b>உயரம் அதிகம்</b> (900 மீட்டர் முதல் 1600 மீட்டர் வரை).</span>
                    </div>
                    <div class="bb-compare-row bb-row-east">
                      <span class="bb-compare-badge-east">🏞️ கிழக்கு</span>
                      <span class="bb-compare-text"><b>உயரம் குறைவு</b> (சராசரியாக 600 மீட்டர் வரை).</span>
                    </div>
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800; font-size:15px; margin-bottom:8px;">
                    3. Elevation
                  </div>
                  <div class="bb-compare-card">
                    <div class="bb-compare-row bb-row-west">
                      <span class="bb-compare-badge-west">⛰️ Western</span>
                      <span class="bb-compare-text"><b>Higher elevation</b> (900 m to 1600 m).</span>
                    </div>
                    <div class="bb-compare-row bb-row-east">
                      <span class="bb-compare-badge-east">🏞️ Eastern</span>
                      <span class="bb-compare-text"><b>Lower elevation</b> (average 600 m).</span>
                    </div>
                  </div>
                `,
                audioScriptTa: "உயரம்: மேற்கு தொடர்ச்சி மலைகளின் உயரம் அதிகம், ஒன்பது நூறு மீட்டர் முதல் ஆயிரத்து அறுநூறு மீட்டர் வரை. கிழக்கு தொடர்ச்சி மலைகளின் உயரம் குறைவு, சராசரியாக அறுநூறு மீட்டர் ஆகும்.",
                audioScriptEn: "Western Ghats have high elevation. Eastern Ghats have lower elevation."
              },
              {
                stepNum: 4,
                badge: "④ சிகரம் (Highest Peak)",
                badgeEn: "④ Highest Peak",
                audioFile: "audio/soc_2_5_step4.mp3",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800; font-size:15px; margin-bottom:8px;">
                    4. மிக உயரமான சிகரம் (Highest Peak)
                  </div>
                  <div class="bb-compare-card">
                    <div class="bb-compare-row bb-row-west">
                      <span class="bb-compare-badge-west">⛰️ மேற்கு</span>
                      <span class="bb-compare-text">உயரமான சிகரம்: <b style="color:#fde047;">ஆனைமுடி (2695 மீட்டர்)</b></span>
                    </div>
                    <div class="bb-compare-row bb-row-east">
                      <span class="bb-compare-badge-east">🏞️ கிழக்கு</span>
                      <span class="bb-compare-text">உயரமான சிகரம்: <b style="color:#86efac;">ஜிந்தகடா (1690 மீட்டர்)</b></span>
                    </div>
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800; font-size:15px; margin-bottom:8px;">
                    4. Highest Peak
                  </div>
                  <div class="bb-compare-card">
                    <div class="bb-compare-row bb-row-west">
                      <span class="bb-compare-badge-west">⛰️ Western</span>
                      <span class="bb-compare-text">Highest Peak: <b style="color:#fde047;">Anamudi (2,695 m)</b></span>
                    </div>
                    <div class="bb-compare-row bb-row-east">
                      <span class="bb-compare-badge-east">🏞️ Eastern</span>
                      <span class="bb-compare-text">Highest Peak: <b style="color:#86efac;">Jindhagada (1,690 m)</b></span>
                    </div>
                  </div>
                `,
                audioScriptTa: "உயரமான சிகரம்: மேற்கு தொடர்ச்சி மலையின் உயரமான சிகரம் ஆனைமுடி, இரண்டாயிரத்து அறுநூற்று தொண்ணூற்று ஐந்து மீட்டர். கிழக்கு தொடர்ச்சி மலைகளின் உயரமான சிகரம் ஜிந்தகடா, ஆயிரத்து அறுநூற்று தொண்ணூறு மீட்டர் ஆகும்.",
                audioScriptEn: "The highest peak in Western Ghats is Anamudi at 2695 meters. The highest peak in Eastern Ghats is Jindhagada at 1690 meters."
              },
              {
                stepNum: 5,
                badge: "⑤ மழைப்பொழிவு (Rainfall)",
                badgeEn: "⑤ Rainfall",
                audioFile: "audio/soc_2_5_step5.mp3",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800; font-size:15px; margin-bottom:8px;">
                    5. மழைப்பொழிவு (Rainfall)
                  </div>
                  <div class="bb-compare-card">
                    <div class="bb-compare-row bb-row-west">
                      <span class="bb-compare-badge-west">⛰️ மேற்கு</span>
                      <span class="bb-compare-text"><b>அதிக மழைப்பொழிவைத்</b> தருகிறது (தென்மேற்குப் பருவமழை).</span>
                    </div>
                    <div class="bb-compare-row bb-row-east">
                      <span class="bb-compare-badge-east">🏞️ கிழக்கு</span>
                      <span class="bb-compare-text"><b>குறைந்த அளவு மழைப்பொழிவையே</b> தருகிறது.</span>
                    </div>
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800; font-size:15px; margin-bottom:8px;">
                    5. Rainfall
                  </div>
                  <div class="bb-compare-card">
                    <div class="bb-compare-row bb-row-west">
                      <span class="bb-compare-badge-west">⛰️ Western</span>
                      <span class="bb-compare-text">Receives <b>heavy rainfall</b> from Southwest monsoon.</span>
                    </div>
                    <div class="bb-compare-row bb-row-east">
                      <span class="bb-compare-badge-east">🏞️ Eastern</span>
                      <span class="bb-compare-text">Receives <b>comparatively low rainfall</b>.</span>
                    </div>
                  </div>
                `,
                audioScriptTa: "மழைப்பொழிவு: மேற்கு தொடர்ச்சி மலைகள் அதிக மழைப்பொழிவைத் தருகிறது. கிழக்கு தொடர்ச்சி மலைகள் குறைந்த அளவு மழைப்பொழிவையே தருகிறது.",
                audioScriptEn: "Western Ghats receive heavy rainfall. Eastern Ghats receive lower rainfall."
              },
              {
                stepNum: 6,
                badge: "⑥ ஒப்பீட்டு வரைபடங்கள் (2 Drawings)",
                badgeEn: "⑥ Comparative Drawings",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800; font-size:15px; margin-bottom:8px;">
                    வரைபட ஒப்பீடு (Comparative Visual Drawings)
                  </div>
                  <div style="background:rgba(0,0,0,0.3); border-radius:10px; padding:10px; border:1px solid rgba(255,255,255,0.1); margin-top:6px;">
                    <div style="font-size:13.5px; color:#ffffff; line-height:1.7;">
                      • <b style="color:#34d399;">படம் 1 (மேற்கு):</b> தொடர்ச்சியான உயர்ந்த மலைச்சுவர் (900-1600 மீ), மிக உயரமான சிகரம் <b style="color:#fde047;">ஆனைமுடி (2695 மீ)</b>, அரபிக் கடல் தென்மேற்கு பருவமழையால் அதிக மழை.<br>
                      • <b style="color:#fbbf24;">படம் 2 (கிழக்கு):</b> மகாநதி, கோதாவரி, கிருஷ்ணா, காவேரி ஆறுகளால் அரிக்கப்பட்ட தொடர்ச்சியற்ற குன்றுகள் (600 மீ), மிக உயரமான சிகரம் <b style="color:#fed7aa;">ஜிந்தகடா (1690 மீ)</b>, குறைந்த மழை.<br>
                      • <b style="color:#60a5fa;">சந்திக்கும் இடம்:</b> தீபகற்ப இந்தியாவின் தெற்கில் உள்ள <b>நீலகிரி மலையில்</b> இரு மலைத்தொடர்களும் ஒன்றிணைகின்றன.
                    </div>
                  </div>
                `,
                chalkHtmlEn: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800; font-size:15px; margin-bottom:8px;">
                    Comparative Visual Drawings
                  </div>
                  <div style="background:rgba(0,0,0,0.3); border-radius:10px; padding:10px; border:1px solid rgba(255,255,255,0.1); margin-top:6px;">
                    <div style="font-size:13.5px; color:#ffffff; line-height:1.7;">
                      • <b style="color:#34d399;">Drawing 1 (West):</b> Continuous high mountain wall (900-1600m), highest peak <b style="color:#fde047;">Anamudi (2695m)</b>, heavy Arabian Sea SW monsoon rainfall.<br>
                      • <b style="color:#fbbf24;">Drawing 2 (East):</b> Discontinuous dissected hills cut by Mahanadi, Godavari, Krishna, Cauvery (600m), highest peak <b style="color:#fed7aa;">Jindhagada (1690m)</b>, low rainfall.<br>
                      • <b style="color:#60a5fa;">Meeting Point:</b> Both ranges meet at the <b>Nilgiri Hills</b> in South India.
                    </div>
                  </div>
                `,
                audioScriptTa: "வரைபட ஒப்பீடு: மேற்குத் தொடர்ச்சி மலைகள் தொடர்ச்சியான சுவர்போன்ற மலைத்தொடர், ஆனைமுடி இரண்டாயிரத்து அறுநூற்று தொண்ணூற்று ஐந்து மீட்டர் இதன் உயரமான சிகரம். கிழக்குத் தொடர்ச்சி மலைகள் ஆறுகளால் அரிக்கப்பட்ட தொடர்ச்சியற்ற மலைத்தொடர், ஜிந்தகடா ஆயிரத்து அறுநூற்று தொண்ணூறு மீட்டர் இதன் உயரமான சிகரம். இரண்டும் நீலகிரி மலையில் ஒன்றாகச் சந்திக்கின்றன.",
                audioScriptEn: "Visual Comparison: Western Ghats form a continuous high wall with Anamudi peak at 2,695m. Eastern Ghats form a discontinuous range broken by rivers, with Jindhagada peak at 1,690m. Both ranges meet at the Nilgiri Hills."
              }
            ]
          }
        },
        {
          id: "soc_2_6",
          type: "5m",
          mark: "5 மதிப்பெண்",
          examYear: "2024",
          examTag: "2024*",
          isImportant: true,
          q: "இமயமலையின் முக்கியத்துவத்தை விவரி (Significance of the Himalayas).",
          ans: `<div style="line-height:1.8;">
            <b>இமயமலையின் முக்கியத்துவம்:</b><br>
            1. <b>இயற்கை அரண்:</b> இந்தியாவின் வடக்கு எல்லையில் மிக பிரம்மாண்டமான இயற்கைச் சுவராக நின்று அந்நியப் படையெடுப்புகளிலிருந்து நாட்டைப் பாதுகாக்கிறது.<br>
            2. <b>பருவக்காற்று தடுப்பு:</b> தென்பசுபிக் மற்றும் இந்தியப் பெருங்கடலிலிருந்து வரும் தென்மேற்குப் பருவக்காற்றைத் தடுத்து, வட இந்தியா முழுவதும் மிகக் கனமழையைத் தருகிறது.<br>
            3. <b>வற்றாத ஜீவ நதிகள்:</b> சிந்து, கங்கை, பிரம்மபுத்திரா போன்ற வற்றாத வற்றா ஜீவ நதிகளின் பிறப்பிடமாகத் திகழ்கிறது.<br>
            4. <b>குளிர்காற்று தடுப்பு:</b> மத்திய ஆசியாவிலிருந்து வீசும் கடும் குளிர்காற்றைத் தடுத்து, இந்தியாவை மிதமான வெப்பமண்டலப் பகுதியாகப் பாதுகாக்கிறது.<br>
            5. <b>பல்லுயிர் வளம்:</b> அடர்ந்த காடுகள், மூலிகைகள் மற்றும் அரிய வகை வனவிலங்குகளின் வாழ்விடமாகத் திகழ்கிறது.<br>
            6. <b>சுற்றுலா & ஆன்மிகத் தலங்கள்:</b> சிம்லா, குலு, மணாலி போன்ற கோடைவாழிடங்களும், அமர்நாத், கேதார்நாத், பத்ரிநாத் போன்ற புகழ்பெற்ற ஆன்மிகத் தலங்களும் இங்கு அமைந்துள்ளன.<br>
            7. <b>நீர் மின் உற்பத்தி:</b> விரைந்து பாயும் மலை ஆறுகளில் நீர்மின் திட்டங்களை அமைத்துப் பெரும் மின்னாற்றல் பெறப்படுகிறது.
          </div>`,
          ansTamil: "இமயமலை பருவமழை பொழியச் செய்கிறது, மத்திய ஆசியக் குளிர்காற்றைத் தடுக்கிறது, ஜீவ நதிகளுக்குத் தாயகமாக விளங்குகிறது."
        }
      ]
    },

    // -------------------------------------------------------------
    // பகுதி 3: இந்திய வடிகாலமைப்பு - ஆறுகள்
    // -------------------------------------------------------------
    {
      id: "sec_soc_2_3",
      title: "பகுதி 3: இந்திய வடிகாலமைப்பு (Rivers of India)",
      author: "புவியியல் - அலகு 1",
      questions: [
        {
          id: "soc_2_7",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examYear: "2022",
          examTag: "2022*",
          q: "மேற்கு நோக்கிப் பாய்ந்து அரபிக்கடலில் கலக்கும் முக்கிய இந்திய ஆறுகள் யாவை?",
          ans: `<div style="line-height:1.8;">
            <b>அரபிக்கடலில் கலக்கும் ஆறுகள்:</b><br>
            1. <b>நர்மதை (Narmada):</b> அமர்கண்டாக் பீடபூமியில் உற்பத்தியாகி 1312 கி.மீ நீளம் பாய்ந்து காம்பே வளைகுடா வழியாக அரபிக்கடலில் கலக்கிறது. (தீபகற்ப இந்தியாவில் மேற்கு நோக்கிப் பாயும் மிக நீளமான ஆறு).<br>
            2. <b>தபதி (Tapti):</b> மத்தியப் பிரதேசத்தின் பெதுல் மாவட்டத்தில் முல்டாய் என்ற இடத்தில் உற்பத்தியாகி 724 கி.மீ நீளம் பாய்ந்து அரபிக்கடலில் கலக்கிறது.<br>
            3. <b>மாகி (Mahi)</b> மற்றும் <b>சபர்மதி (Sabarmati)</b>.<br><br>
            <i>(குறிப்பு: இவ்விரு ஆறுகளும் பிளவுப் பள்ளத்தாக்குகள் வழியாகப் பாய்வதால் கழிமுகங்களை (Deltas) உருவாக்குவதில்லை; முகத்துவாரங்களை (Estuaries) உருவாக்குகின்றன).</i>
          </div>`,
          ansTamil: "நர்மதை மற்றும் தபதி ஆகியவை மேற்கு நோக்கிப் பாய்ந்து அரபிக்கடலில் கலக்கும் முக்கிய ஆறுகள்."
        },
        {
          id: "soc_2_8",
          type: "5m",
          mark: "5 மதிப்பெண்",
          examYear: "2023",
          examTag: "2023*",
          isImportant: true,
          q: "இமயமலையில் தோன்றும் ஆறுகளுக்கும் தீபகற்ப ஆறுகளுக்கும் உள்ள வேறுபாடுகளை அட்டவணைப்படுத்துக.",
          ans: `<table style="width:100%; border-collapse:collapse; margin-top:8px; font-size:13.5px; line-height:1.6;">
            <tr style="background:#fef3c7; color:#92400e;">
              <th style="padding:8px 10px; border:1px solid #fcd34d; text-align:left;">அம்சம்</th>
              <th style="padding:8px 10px; border:1px solid #fcd34d; text-align:left;">இமயமலை ஆறுகள் (Himalayan Rivers)</th>
              <th style="padding:8px 10px; border:1px solid #fcd34d; text-align:left;">தீபகற்ப ஆறுகள் (Peninsular Rivers)</th>
            </tr>
            <tr>
              <td style="padding:6px 10px; border:1px solid #fde68a; font-weight:700;">தோன்றும் இடம்</td>
              <td style="padding:6px 10px; border:1px solid #fde68a;">இமயமலை பனிப்பாறைகளில் தோன்றுகின்றன.</td>
              <td style="padding:6px 10px; border:1px solid #fde68a;">மேற்குத் தொடர்ச்சி மலை மற்றும் பீடபூமிகளில் தோன்றுகின்றன.</td>
            </tr>
            <tr>
              <td style="padding:6px 10px; border:1px solid #fde68a; font-weight:700;">ஆற்றின் தன்மை</td>
              <td style="padding:6px 10px; border:1px solid #fde68a;"><b>வற்றாத ஜீவ நதிகள்</b> (மழை + பனி உருகுவதால் ஆண்டு முழுவதும் நீர் ஓடும்).</td>
              <td style="padding:6px 10px; border:1px solid #fde68a;"><b>பருவகால ஆறுகள்</b> (மழைக்காலத்தில் மட்டும் நீர் நிறைந்து மற்ற காலங்களில் வறண்டு காணப்படும்).</td>
            </tr>
            <tr>
              <td style="padding:6px 10px; border:1px solid #fde68a; font-weight:700;">நீளம் & வடிநிலம்</td>
              <td style="padding:6px 10px; border:1px solid #fde68a;">நீளமானவை; மிகப்பெரிய ஆற்றுப் படுகைகளைக் கொண்டவை.</td>
              <td style="padding:6px 10px; border:1px solid #fde68a;">குறுகிய நீளம் கொண்டவை; சிறிய வடிநிலப் பகுதிகள்.</td>
            </tr>
            <tr>
              <td style="padding:6px 10px; border:1px solid #fde68a; font-weight:700;">பயன்பாடு</td>
              <td style="padding:6px 10px; border:1px solid #fde68a;">உள்நாட்டு நீர்வழிப் போக்குவரத்திற்கு உகந்தவை.</td>
              <td style="padding:6px 10px; border:1px solid #fde68a;">நீர்மின் உற்பத்திக்கு மிகவும் ஏற்றவை (நீர்வீழ்ச்சிகள் அதிகம்).</td>
            </tr>
            <tr>
              <td style="padding:6px 10px; border:1px solid #fde68a; font-weight:700;">முக்கிய ஆறுகள்</td>
              <td style="padding:6px 10px; border:1px solid #fde68a;">சிந்து, கங்கை, பிரம்மபுத்திரா.</td>
              <td style="padding:6px 10px; border:1px solid #fde68a;">மகாநதி, கோதாவரி, கிருஷ்ணா, காவிரி, நர்மதை, தபதி.</td>
            </tr>
          </table>`,
          ansTamil: "இமயமலை ஆறுகள் ஆண்டு முழுவதும் பாயும் வற்றாத ஜீவ நதிகள் (சிந்து, கங்கை). தீபகற்ப ஆறுகள் மழையை நம்பிய பருவகால ஆறுகள் (காவிரி, கோதாவரி)."
        }
      ]
    }
  ]
};
