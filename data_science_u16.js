// 10-ஆம் வகுப்பு அறிவியல் - அலகு 16: தாவர மற்றும் விலங்கு ஹார்மோன்கள் (Plant and Animal Hormones)
// தமிழ்நாடு அரசு சமச்சீர் கல்வி வினா-விடை வழிகாட்டி (தமிழ் வழி)

const SCIENCE_UNIT_16_DATA = {
  unitId: "sci_u16",
  unitName: "அலகு 16: தாவர மற்றும் விலங்கு ஹார்மோன்கள்",
  subject: "அறிவியல் (Science)",
  syllabus: "தமிழ்நாடு அரசு சமச்சீர் கல்வி 10-ஆம் வகுப்பு அறிவியல் - தாவரவியல் & விலங்கியல்",

  formulas: [
    { title: "ஆக்ஸின் (Auxins)", rule: "முனை ஆதிக்கம் (Apical dominance) மற்றும் செல் நீட்சிக்கு காரணமான முதல் தாவர ஹார்மோன் (சார்லஸ் டார்வின் & வென்ட்)" },
    { title: "ஜிப்ரல்லின்கள் (Gibberellins)", rule: "ரோஸட் தாவரங்களில் போல்டிங் (Bolting - திடீர் தண்டு நீட்சி) மற்றும் விதையிலா கனி உருவாக்கம் (Parthenocarpy)" },
    { title: "சைட்டோகைனின் (Cytokinins)", rule: "செல் பகுப்பை (Cell division) துரிதப்படுத்துகிறது; தாவர முதிர்ச்சியைத் தாமதப்படுத்துகிறது (ரிச்மாண்ட் லாங் விளைவு)" },
    { title: "அப்சிசிக் அமிலம் (ABA)", rule: "வறட்சி மற்றும் தீவிர தட்பவெப்ப நிலைகளில் இலைத்துளையை மூடும் 'அழுத்த ஹார்மோன்' (Stress hormone)" },
    { title: "எத்திலீன் (Ethylene)", rule: "தாவரங்களில் வாயு நிலையில் உள்ள ஒரே ஹார்மோன்; பழங்களை விரைவாகப் பழுக்க வைக்கிறது" },
    { title: "பிட்யூட்டரி சுரப்பி", rule: "மூளையின் அடிப்பகுதியில் அமைந்துள்ள நாளமில்லா சுரப்பிக் குழுவின் 'தலைமைச் சுரப்பி' (Master Gland)" },
    { title: "தைராக்சின் (ஆளுமை ஹார்மோன்)", rule: "உடலின் அடிப்படை வளர்சிதை மாற்ற வீதத்தை (BMR) கட்டுப்படுத்தி, உடல் மற்றும் மன வளர்ச்சியை சமநிலைப்படுத்துகிறது" },
    { title: "இன்சுலின் & குளூக்ககான்", rule: "கணையத்தின் லாங்கர்ஹான் திட்டுகளால் சுரக்கப்பட்டு இரத்த சர்க்கரை அளவை (80-120 mg/dl) சீராக்குகிறது" },
    { title: "அட்ரினலின் (பயமுறுத்தும் / அவசரகால ஹார்மோன்)", rule: "அவசர ஆபத்துக் காலங்களில் சண்டை அல்லது பின்வாங்குதல் (Fight or Flight) நிலைக்கு உடலைத் தயார்படுத்துகிறது" }
  ],

  subSections: [
    {
      id: "sec_sci_16_1",
      title: "பகுதி 1: தாவர வளர்ச்சி ஹார்மோன்கள் மற்றும் மனித நாளமில்லா சுரப்பிகள்",
      author: "அறிவியல் - அலகு 16: தாவர மற்றும் விலங்கு ஹார்மோன்கள்",
      questions: [
        {
          id: "sci_16_1",
          type: "1m",
          mark: "1 மதிப்பெண்",
          examTag: "அரசு பொதுத்தேர்வு",
          q: "தாவரங்களில் வாயு நிலையில் காணப்பட்டு, கனிகள் விரைவாக பழுக்க உதவும் ஹார்மோன் எது?",
          options: ["அ) ஆக்ஸின்", "ஆ) ஜிப்ரல்லின்", "இ) எத்திலீன்", "ஈ) சைட்டோகைனின்"],
          ans: "விடை: <b>இ) எத்திலீன்</b><br>விளக்கம்: எத்திலீன் மட்டுமே வாயு நிலையில் உள்ள தாவர ஹார்மோனாகும். இது கனிகள் முதிர்ச்சியடைந்து விரைவாக பழுக்க முக்கிய காரணியாகச் செயல்படுகிறது.",
          ansTamil: "எத்திலீன் கனிகளைப் பழுக்க வைக்கும் வாயு நிலை ஹார்மோன் ஆகும்."
        },
        {
          id: "sci_16_2",
          type: "1m",
          mark: "1 மதிப்பெண்",
          examTag: "அரசு மாதிரி",
          q: "உடலின் அடிப்படை வளர்சிதை மாற்றத்தைக் கட்டுப்படுத்தி 'ஆளுமை ஹார்மோன்' (Personality Hormone) என்று அழைக்கப்படும் ஹார்மோன் எது?",
          options: ["அ) வளர்ச்சி ஹார்மோன்", "ஆ) தைராக்சின்", "இ) இன்சுலின்", "ஈ) அட்ரினலின்"],
          ans: "விடை: <b>ஆ) தைராக்சின்</b><br>விளக்கம்: தைராய்டு சுரப்பியின் தைராக்சின் ஹார்மோன் உடலின் இயல்பான வளர்ச்சி, மன வளர்ச்சி மற்றும் ஆளுமைப் பண்புகளுக்கு இன்றியமையாததால் 'ஆளுமை ஹார்மோன்' என அழைக்கப்படுகிறது.",
          ansTamil: "தைராக்சின் ஆளுமை ஹார்மோன் என அழைக்கப்படுகிறது."
        },
        {
          id: "sci_16_3",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examTag: "அரசு பொதுத்தேர்வு",
          q: "போல்டிங் (Bolting) என்றால் என்ன? இதனை எந்த ஹார்மோன் தூண்டுகிறது?",
          ans: `<div style="line-height:1.7;">
            • நெருங்கிய இலை அமைப்பைக் கொண்ட ரோஸட் தாவரங்களில் (எ.கா: முட்டைக்கோஸ், பீட்ரூட்), பூப்பதற்கு முன் தண்டு திடீரென மிக வேகமாக நீட்சியடைவது <b>போல்டிங் (Bolting)</b> எனப்படும்.<br><br>
            • இச்செயல்முறையைத் செயற்கையாகத் தூண்டும் தாவர ஹார்மோன் <b>ஜிப்ரல்லின் (Gibberellin)</b> ஆகும்.
          </div>`,
          ansTamil: "ரோஸட் தாவரங்களில் பூப்பதற்கு முன் தண்டு திடீரென நீட்சியடைவது போல்டிங் எனப்படும்; இதனை ஜிப்ரல்லின் தூண்டுகிறது."
        },
        {
          id: "sci_16_4",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examTag: "முக்கிய வினா",
          q: "அப்சிசிக் அமிலம் (ABA) ஏன் 'அழுத்த ஹார்மோன்' (Stress Hormone) என அழைக்கப்படுகிறது?",
          ans: `<div style="line-height:1.7;">
            • வறட்சி, கடுமையான குளிர், நீர் பற்றாக்குறை போன்ற சாதகமற்ற தீவிர தட்பவெப்ப சூழ்நிலைகளின் போது தாவரங்களில் அப்சிசிக் அமிலத்தின் சுரப்பு அதிகரிக்கிறது.<br>
            • இது இலைகளின் <b>இலைத்துளைகளை உடனடியாக மூடி</b>, நீராவிப்போக்கைத் தடுத்து நீர் இழப்பைக் குறைத்து தாவரம் தப்பிப் பிழைக்க உதவுகிறது. எனவே இது <b>அழுத்த ஹார்மோன்</b> எனப்படுகிறது.
          </div>`,
          ansTamil: "வறட்சிக் காலத்தில் இலைத்துளைகளை மூடி நீராவிப்போக்கைத் தடுப்பதால் ABA அழுத்த ஹார்மோன் எனப்படுகிறது."
        },
        {
          id: "sci_16_5",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examTag: "அரசு பொதுத்தேர்வு",
          q: "பிட்யூட்டரி சுரப்பி ஏன் 'தலைமைச் சுரப்பி' (Master Gland) என அழைக்கப்படுகிறது?",
          ans: `<div style="line-height:1.7;">
            • பிட்யூட்டரி சுரப்பியானது தைராய்டு தூண்டும் ஹார்மோன் (TSH), அட்ரினோ கார்டிகோட்ராபிக் ஹார்மோன் (ACTH), பாலிக்கிள் தூண்டும் ஹார்மோன் (FSH) போன்ற பல தூண்டும் ஹார்மோன்களைச் சுரக்கிறது.<br>
            • இந்த ஹார்மோன்கள் உடலின் பிற நாளமில்லாச் சுரப்பிகளான தைராய்டு, அட்ரீனல் மற்றும் இனப்பெருக்க சுரப்பிகளின் செயல்பாடுகளை நேரடியாகக் கட்டுப்படுத்துவதால் இது <b>தலைமைச் சுரப்பி</b> என அழைக்கப்படுகிறது.
          </div>`,
          ansTamil: "உடலின் பிற நாளமில்லாச் சுரப்பிகளைத் தன் ஹார்மோன்களால் கட்டுப்படுத்துவதால் பிட்யூட்டரி தலைமைச் சுரப்பி ஆகும்."
        },
        {
          id: "sci_16_6",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examTag: "முக்கிய வினா",
          q: "டயாபடீஸ் மெல்லிடஸ் மற்றும் டயாபடீஸ் இன்சிபிடஸ் ஆகியவற்றுக்கு இடையேயான வேறுபாடுகளைத் தருக.",
          ans: `<div style="line-height:1.7;">
            <div class="chalk-table-responsive">
              <table style="width:100%; border-collapse:collapse; font-size:13px; text-align:left;">
                <thead>
                  <tr style="background:#0284c7; color:#fff;">
                    <th style="padding:6px; border:1px solid #cbd5e1;">பண்பு</th>
                    <th style="padding:6px; border:1px solid #cbd5e1;">டயாபடீஸ் மெல்லிடஸ் (சர்க்கரை நோய்)</th>
                    <th style="padding:6px; border:1px solid #cbd5e1;">டயாபடீஸ் இன்சிபிடஸ்</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="padding:6px; border:1px solid #cbd5e1;"><b>குறைபாடுடைய ஹார்மோன்</b></td>
                    <td style="padding:6px; border:1px solid #cbd5e1;"><b>இன்சுலின்</b> பற்றாக்குறை (கணையம்)</td>
                    <td style="padding:6px; border:1px solid #cbd5e1;"><b>வாசோபிரசின் / ADH</b> பற்றாக்குறை (பின் பிட்யூட்டரி)</td>
                  </tr>
                  <tr style="background:#f8fafc;">
                    <td style="padding:6px; border:1px solid #cbd5e1;"><b>சிறுநீரில் சர்க்கரை</b></td>
                    <td style="padding:6px; border:1px solid #cbd5e1;">சிறுநீரில் குளுக்கோஸ் வெளியேறும் (கிளைக்கோசூரியா)</td>
                    <td style="padding:6px; border:1px solid #cbd5e1;">சிறுநீரில் குளுக்கோஸ் வெளியேறாது</td>
                  </tr>
                  <tr>
                    <td style="padding:6px; border:1px solid #cbd5e1;"><b>அறிகுறி</b></td>
                    <td style="padding:6px; border:1px solid #cbd5e1;">அதிக தாகம் (பாலிடிப்சியா), அதிக பசி (பாலிபேஜியா)</td>
                    <td style="padding:6px; border:1px solid #cbd5e1;">அதிக அளவு நீர்த்த சிறுநீர் வெளியேறுதல் (பாலியூரியா)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>`,
          ansTamil: "டயாபடீஸ் மெல்லிடஸ் இன்சுலின் குறைவால் ஏற்படுகிறது; டயாபடீஸ் இன்சிபிடஸ் ADH குறைவால் ஏற்படுகிறது."
        },
        {
          id: "sci_16_7",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examTag: "அரசு மாதிரி",
          q: "அட்ரினலின் ஹார்மோன் ஏன் 'அவசரகால ஹார்மோன்' (Emergency Hormone) என அழைக்கப்படுகிறது?",
          ans: `<div style="line-height:1.7;">
            • அட்ரீனல் மெடுல்லாவால் சுரக்கப்படும் அட்ரினலின் மற்றும் நார்அட்ரினலின் ஆகியவை அச்சம், கோபம், மன அழுத்தம், ஆபத்து போன்ற அவசர காலங்களில் உடலை தயார்படுத்துகின்றன.<br>
            • இவை இதயத் துடிப்பு, இரத்த அழுத்தம், சுவாச வீதம், இரத்த சர்க்கரை அளவு ஆகியவற்றை அதிகரித்து ஆபத்தை எதிர்கொள்ளவோ (Fight) அல்லது தப்பி ஓடவோ (Flight) உதவுகின்றன. எனவே இது <b>அவசரகால ஹார்மோன்</b> எனப்படுகிறது.
          </div>`,
          ansTamil: "ஆபத்துக் காலங்களில் சண்டை அல்லது பின்வாங்குதல் நிலைக்கு உடலைத் தயார்படுத்துவதால் அட்ரினலின் அவசரகால ஹார்மோன் ஆகும்."
        },
        {
          id: "sci_16_8",
          type: "7m",
          mark: "4 / 7 மதிப்பெண்",
          examTag: "அரசு பொதுத்தேர்வு 7M",
          diagramImg: (typeof window !== "undefined" && window.IMG_PLANT_B64) ? window.IMG_PLANT_B64 : "images/sci_plant_hormones_diagram.png",
          q: "தாவர ஹார்மோன்களின் (ஆக்ஸின், ஜிப்ரல்லின், சைட்டோகைனின், எத்திலீன்) வாழ்வியல் விளைவுகளை விரிவாகத் தொகுத்து எழுதுக.",
          ans: `<div style="line-height:1.8;">
            <p style="margin-bottom:12px; font-size:14.5px;">
              <b>தாவர ஹார்மோன்கள்:</b> தாவரங்களால் சுரக்கப்படும் வேதிப்பொருட்கள் தாவர ஹார்மோன்கள் எனப்படும். இவை தாவரங்களின் வளர்ச்சி மற்றும் வாழ்வியல் செயல்பாடுகளைக் கட்டுப்படுத்தி ஒழுங்குபடுத்துகின்றன. நான்கு முதன்மை தாவர ஹார்மோன்கள் கீழே விளக்கப்பட்டுள்ளன:
            </p>

            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:12px; margin-bottom:16px;">
              <!-- 1. ஆக்ஸின் -->
              <div style="background:#fdf2f8; border:2px solid #ec4899; border-radius:10px; padding:12px 14px;">
                <div style="color:#be185d; font-weight:800; font-size:15px; margin-bottom:6px; display:flex; align-items:center; gap:6px;">
                  <span>🌱</span> <span>1. ஆக்ஸின்கள் (Auxins)</span>
                </div>
                <ul style="margin:0; padding-left:18px; color:#1e293b; font-size:13.5px; line-height:1.7;">
                  <li><b>செல் நீட்சியடைதலைத்</b> தூண்டுகிறது (செல்களின் நீளத்தை அதிகரிக்கிறது).</li>
                  <li><b>வேர் உருவாக்கத்திற்கு</b> உதவுகிறது.</li>
                  <li>தாவரங்கள் ஒளியை நோக்கி வளைவதைக் (ஒளிசார்பசைவு) கட்டுப்படுத்துகிறது.</li>
                  <li>இலைகள் மற்றும் கனிகள் இளம் வயதிலேயே உதிர்வதைத் தடுக்கிறது.</li>
                </ul>
              </div>

              <!-- 2. ஜிப்ரல்லின்கள் -->
              <div style="background:#eff6ff; border:2px solid #3b82f6; border-radius:10px; padding:12px 14px;">
                <div style="color:#1d4ed8; font-weight:800; font-size:15px; margin-bottom:6px; display:flex; align-items:center; gap:6px;">
                  <span>🌾</span> <span>2. ஜிப்ரல்லின்கள் (Gibberellins)</span>
                </div>
                <ul style="margin:0; padding-left:18px; color:#1e293b; font-size:13.5px; line-height:1.7;">
                  <li><b>தண்டு நீட்சியடைவதைத்</b> தூண்டுகிறது.</li>
                  <li><b>விதை முளைத்தலுக்கு</b> உதவுகிறது.</li>
                  <li>விதைகளின் உறக்க நிலையை நீக்குகிறது.</li>
                  <li>பழங்களின் அளவை அதிகரிக்கச் செய்கிறது.</li>
                </ul>
              </div>

              <!-- 3. சைட்டோகைனின்கள் -->
              <div style="background:#f0fdf4; border:2px solid #22c55e; border-radius:10px; padding:12px 14px;">
                <div style="color:#15803d; font-weight:800; font-size:15px; margin-bottom:6px; display:flex; align-items:center; gap:6px;">
                  <span>🌿</span> <span>3. சைட்டோகைனின்கள் (Cytokinins)</span>
                </div>
                <ul style="margin:0; padding-left:18px; color:#1e293b; font-size:13.5px; line-height:1.7;">
                  <li><b>செல் பகுப்பைத் (Cell Division)</b> தீவிரமாகத் தூண்டுகிறது.</li>
                  <li><b>பக்கவாட்டு மொட்டுகளின்</b> வளர்ச்சிக்கு உதவுகிறது.</li>
                  <li>இலைகள் முதிர்வடைவதைத் (முதுமை அடைவதை) தாமதப்படுத்துகிறது.</li>
                  <li>தண்டுப் பகுதி மற்றும் கிளைகள் வளர்ச்சிக்கு உதவுகிறது.</li>
                </ul>
              </div>

              <!-- 4. எத்திலீன் -->
              <div style="background:#fff7ed; border:2px solid #f97316; border-radius:10px; padding:12px 14px;">
                <div style="color:#c2410c; font-weight:800; font-size:15px; margin-bottom:6px; display:flex; align-items:center; gap:6px;">
                  <span>🍎</span> <span>4. எத்திலீன் (வாயு நிலை ஹார்மோன்)</span>
                </div>
                <ul style="margin:0; padding-left:18px; color:#1e293b; font-size:13.5px; line-height:1.7;">
                  <li>இது ஒரு <b>வாயு நிலை தாவர ஹார்மோன்</b> ஆகும்.</li>
                  <li><b>பழங்கள் விரைவாக பழுப்பதற்கு</b> உதவுகிறது.</li>
                  <li>மலர்கள் மற்றும் இலைகள் முதிர்வடைவதைத் தூண்டுகிறது.</li>
                  <li>இலைகள், மலர்கள் மற்றும் கனிகள் உதிர்தலுக்கு உதவுகிறது.</li>
                </ul>
              </div>
            </div>

            <!-- எளிதான நினைவூட்டல் அட்டவணை -->
            <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:12px; margin-bottom:14px; overflow-x:auto;">
              <div style="color:#0f172a; font-weight:800; font-size:14.5px; margin-bottom:8px; border-bottom:2px solid #10b981; padding-bottom:4px;">
                ⚡ எளிய திருப்புதல் அட்டவணை (Easy Revision Table)
              </div>
              <table style="width:100%; border-collapse:collapse; font-size:13.5px; text-align:left;">
                <thead>
                  <tr style="background:#0f766e; color:#ffffff;">
                    <th style="padding:8px 12px; border:1px solid #94a3b8; width:35%;">ஹார்மோன்</th>
                    <th style="padding:8px 12px; border:1px solid #94a3b8; width:65%;">முக்கியப் பணி</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="background:#fdf2f8;"><td style="padding:8px 12px; border:1px solid #cbd5e1; font-weight:700; color:#be185d;">ஆக்ஸின்கள்</td><td style="padding:8px 12px; border:1px solid #cbd5e1; color:#1e293b;">செல் நீட்சி அடைதல்</td></tr>
                  <tr style="background:#eff6ff;"><td style="padding:8px 12px; border:1px solid #cbd5e1; font-weight:700; color:#1d4ed8;">ஜிப்ரல்லின்கள்</td><td style="padding:8px 12px; border:1px solid #cbd5e1; color:#1e293b;">தண்டு நீட்சி அடைதல்</td></tr>
                  <tr style="background:#f0fdf4;"><td style="padding:8px 12px; border:1px solid #cbd5e1; font-weight:700; color:#15803d;">சைட்டோகைனின்கள்</td><td style="padding:8px 12px; border:1px solid #cbd5e1; color:#1e293b;">செல் பகுப்பு அடைதல்</td></tr>
                  <tr style="background:#fff7ed;"><td style="padding:8px 12px; border:1px solid #cbd5e1; font-weight:700; color:#c2410c;">எத்திலீன்</td><td style="padding:8px 12px; border:1px solid #cbd5e1; color:#1e293b;">பழம் பழுத்தல்</td></tr>
                </tbody>
              </table>
            </div>

            <div style="background:#f0fdf4; border-left:4px solid #16a34a; padding:10px 14px; border-radius:6px; margin-top:10px;">
              <b style="color:#15803d;">💡 5-மதிப்பெண் தேர்வு நுட்பம் – 4 முக்கியக் குறிச்சொற்கள்:</b><br>
              • <b>ஆக்ஸின்:</b> செல் நீட்சி<br>
              • <b>ஜிப்ரல்லின்:</b> தண்டு வளர்ச்சி<br>
              • <b>சைட்டோகைனின்:</b> செல் பகுப்பு<br>
              • <b>எத்திலீன்:</b> பழம் பழுத்தல்<br>
              <i style="color:#475569; font-size:12.5px;">முடிவுரை: இந்த நான்கு தாவர ஹார்மோன்களும் தாவரங்களின் வளர்ச்சி, உறுப்பு உருவாக்கம் மற்றும் வாழ்வியல் நிகழ்வுகளை ஒருங்கிணைப்பதில் முக்கியப் பங்காற்றுகின்றன.</i>
            </div>
          </div>`,
          ansTamil: "ஆக்ஸின் (செல் நீட்சி), ஜிப்ரல்லின் (தண்டு நீட்சி, முளைத்தல்), சைட்டோகைனின் (செல் பகுப்பு), எத்திலீன் (பழம் பழுத்தல்).",
          blackboard: {
            title: "தாவர ஹார்மோன்களின் வாழ்வியல் விளைவுகள்",
            engTitle: "Plant Hormones and Their Physiological Roles",
            fullBoardImg: "images/sci_plant_hormones_diagram.png",
            steps: [
              {
                stepNum: 1,
                badge: "🌱 1. ஆக்ஸின் (செல் நீட்சி)",
                badgeEn: "🌱 1. Auxins (Cell Elongation)",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#f472b6; font-weight:800; font-size:16px;">1. ஆக்ஸின்கள் (குறிச்சொல்: செல் நீட்சி)</div>
                  <div class="bb-box-cyan" style="background:#0f172a; border:2px solid #f472b6; border-radius:10px; padding:12px; margin-top:8px;">
                    <div class="bb-line" style="color:#e2e8f0; font-size:14.5px; line-height:1.7;">
                      • <b style="color:#f472b6;">செல் நீட்சி:</b> செல்கள் நீளமாக வளர்வதைத் தூண்டுகிறது.<br>
                      • <b style="color:#f472b6;">வேர் உருவாக்கம்:</b> தண்டு வெட்டுத்துண்டுகளில் வேர் உருவாவதைத் தூண்டுகிறது.<br>
                      • <b style="color:#f472b6;">ஒளிசார்பசைவு:</b> தாவரத் தண்டு ஒளியை நோக்கி வளைவதைக் கட்டுப்படுத்துகிறது.<br>
                      • <b style="color:#f472b6;">உதிர்தல் தடுத்தல்:</b> இளம் இலைகள், கனிகள் உதிர்வதைத் தடுக்கிறது.
                    </div>
                  </div>
                `,
                audioScriptTa: "ஒன்று. ஆக்ஸின். செல்கள் நீட்சியடையச் செய்தல், வேர் உருவாக்கம், ஒளியை நோக்கி வளைதல் மற்றும் இலைகள், கனிகள் உதிர்வதைத் தடுத்தல்.",
                audioScriptEn: "One. Auxins. Promotes cell elongation, root formation, bending towards light, and prevents early falling of leaves and fruits."
              },
              {
                stepNum: 2,
                badge: "🌾 2. ஜிப்ரல்லின்கள் (தண்டு வளர்ச்சி)",
                badgeEn: "🌾 2. Gibberellins (Stem Growth)",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#38bdf8; font-weight:800; font-size:16px;">2. ஜிப்ரல்லின்கள் (குறிச்சொல்: தண்டு வளர்ச்சி)</div>
                  <div class="bb-box-cyan" style="background:#0f172a; border:2px solid #38bdf8; border-radius:10px; padding:12px; margin-top:8px;">
                    <div class="bb-line" style="color:#e2e8f0; font-size:14.5px; line-height:1.7;">
                      • <b style="color:#38bdf8;">தண்டு நீட்சி:</b> குட்டைத் தாவரங்களை நெட்டையாக்குகிறது.<br>
                      • <b style="color:#38bdf8;">விதை முளைத்தல்:</b> விதைகளின் முளைத்தலைத் தூண்டுகிறது.<br>
                      • <b style="color:#38bdf8;">உறக்க நிலை நீக்கல்:</b> விதைகளின் உறக்க நிலையை முறிக்கிறது.<br>
                      • <b style="color:#38bdf8;">பழ அளவு:</b> கனிகளின் அளவை அதிகரிக்கச் செய்கிறது (எ.கா: திராட்சை).
                    </div>
                  </div>
                `,
                audioScriptTa: "இரண்டு. ஜிப்ரல்லின்கள். தண்டு நீட்சியடைதல், விதை முளைத்தல், விதையின் உறக்க நிலையை நீக்குதல் மற்றும் பழங்களின் அளவை அதிகரித்தல்.",
                audioScriptEn: "Two. Gibberellins. Promotes stem elongation, seed germination, breaks seed dormancy, and increases fruit size."
              },
              {
                stepNum: 3,
                badge: "🌿 3. சைட்டோகைனின்கள் (செல் பகுப்பு)",
                badgeEn: "🌿 3. Cytokinins (Cell Division)",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#4ade80; font-weight:800; font-size:16px;">3. சைட்டோகைனின்கள் (குறிச்சொல்: செல் பகுப்பு)</div>
                  <div class="bb-box-cyan" style="background:#0f172a; border:2px solid #4ade80; border-radius:10px; padding:12px; margin-top:8px;">
                    <div class="bb-line" style="color:#e2e8f0; font-size:14.5px; line-height:1.7;">
                      • <b style="color:#4ade80;">செல் பகுப்பு:</b> செல்களின் தொடர் பகுப்பை தீவிரமாகத் தூண்டுகிறது.<br>
                      • <b style="color:#4ade80;">பக்கவாட்டு மொட்டு:</b> நுனி மொட்டு ஆதிக்கத்தை முறித்து பக்க மொட்டுகளை வளர்க்கிறது.<br>
                      • <b style="color:#4ade80;">முதுமை தாமதம்:</b> இலைகள் முதிர்வடைவதைத் தாமதப்படுத்துகிறது.<br>
                      • <b style="color:#4ade80;">தண்டு உருவாக்கம்:</b> திசு வளர்ப்பில் புதிய தண்டுகள் உருவாக உதவுகிறது.
                    </div>
                  </div>
                `,
                audioScriptTa: "மூன்று. சைட்டோகைனின்கள். செல் பகுப்பைத் தூண்டுதல், பக்கவாட்டு மொட்டுகளின் வளர்ச்சி, இலைகள் முதிர்வடைவதைத் தாமதப்படுத்துதல் மற்றும் தண்டு வளர்ச்சி.",
                audioScriptEn: "Three. Cytokinins. Promotes cell division, lateral bud growth, delays ageing of leaves, and helps in shoot development."
              },
              {
                stepNum: 4,
                badge: "🍎 4. எத்திலீன் (பழம் பழுத்தல்)",
                badgeEn: "🍎 4. Ethylene (Fruit Ripening)",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fb923c; font-weight:800; font-size:16px;">4. எத்திலீன் (குறிச்சொல்: பழம் பழுத்தல்)</div>
                  <div class="bb-box-cyan" style="background:#0f172a; border:2px solid #fb923c; border-radius:10px; padding:12px; margin-top:8px;">
                    <div class="bb-line" style="color:#e2e8f0; font-size:14.5px; line-height:1.7;">
                      • <b style="color:#fb923c;">வாயு நிலை ஹார்மோன்:</b> தாவரங்களில் உள்ள ஒரே வாயு நிலை ஹார்மோன்.<br>
                      • <b style="color:#fb923c;">பழம் பழுத்தல்:</b> வாழை, ஆப்பிள், மாங்காய்கள் பழுப்பதை விரைவுபடுத்துகிறது.<br>
                      • <b style="color:#fb923c;">முதுமை அடைதல்:</b> மலர்கள் மற்றும் இலைகள் முதுமை அடைவதைத் தூண்டுகிறது.<br>
                      • <b style="color:#fb923c;">உதிர்தல்:</b> முதிர்ந்த இலைகள், பூக்கள், கனிகள் உதிர்வதற்கு உதவுகிறது.
                    </div>
                  </div>
                `,
                audioScriptTa: "நான்கு. எத்திலீன். இது ஒரு வாயு நிலை தாவர ஹார்மோன். பழங்கள் பழுக்க உதவுதல், இலைகள் மலர்கள் முதிர்வடைதல் மற்றும் உதிர்தலைத் தூண்டுதல்.",
                audioScriptEn: "Four. Ethylene. Gaseous plant hormone. Promotes fruit ripening, ageing of flowers, and falling of leaves and fruits."
              }
            ]
          }
        }
      ]
    }
  ]
};
