// 10-ஆம் வகுப்பு அறிவியல் - அலகு 15: நரம்பு மண்டலம் (Nervous System)
// தமிழ்நாடு அரசு சமச்சீர் கல்வி வினா-விடை வழிகாட்டி (தமிழ் வழி)

const SCIENCE_UNIT_15_DATA = {
  unitId: "sci_u15",
  unitName: "அலகு 15: நரம்பு மண்டலம்",
  subject: "அறிவியல் (Science)",
  syllabus: "தமிழ்நாடு அரசு சமச்சீர் கல்வி 10-ஆம் வகுப்பு அறிவியல் - விலங்கியல்",

  formulas: [
    { title: "நியூரான் (Neuron)", rule: "நரம்பு மண்டலத்தின் கட்டமைப்பு மற்றும் செயல்பாட்டின் அடிப்படை அலகு; மனித உடலில் மிக நீளமான செல்" },
    { title: "நரம்பு செல் சந்திப்பு (Synapse)", rule: "இரு நியூரான்களுக்கு இடையேயான சிறிய இடைவெளி; இங்கு அசிட்டைல்கோலின் போன்ற நரம்பு உணர்வு கடத்திகள் (Neurotransmitters) மூலம் மின் தூண்டல் கடத்தப்படுகிறது" },
    { title: "மைய நரம்பு மண்டலம் (CNS)", rule: "மூளை (Brain) மற்றும் தண்டுவடம் (Spinal Cord) ஆகியவற்றை உள்ளடக்கிய முதன்மைக் கட்டுப்பாட்டு மையம்" },
    { title: "மூளை உறைகள் (Meninges)", rule: "டியூரா மேட்டர் (வெளி உறை), அராக்னாய்டு மேட்டர் (நடு உறை), பயா மேட்டர் (உள் உறை)" },
    { title: "மூளை தண்டுவடத் திரவம் (CSF)", rule: "மூளை மற்றும் தண்டுவடத்தைப் பேரதிர்ச்சிகளிலிருந்து பாதுகாத்து, ஊட்டச்சத்து வழங்கும் நிணநீர் போன்ற திரவம்" },
    { title: "அனிச்சை செயல் (Reflex Action)", rule: "உடலின் தன்னிச்சையான, மிக விரைவான, சிந்திக்காமல் நடக்கும் தற்காப்பு எதிர்வினை; தண்டுவடத்தால் கட்டுப்படுத்தப்படுகிறது" },
    { title: "சுய ஆட்சி நரம்பு மண்டலம் (ANS)", rule: "பரிவு நரம்பு மண்டலம் (அவசர கால தயார்நிலை) + எதிர்ப்பரிவு நரம்பு மண்டலம் (இயல்பு நிலைக்கு மீட்டல்)" }
  ],

  subSections: [
    {
      id: "sec_sci_15_1",
      title: "பகுதி 1: நியூரானின் அமைப்பு, மூளை, தண்டுவடம் மற்றும் அனிச்சைச் செயல்கள்",
      author: "அறிவியல் - அலகு 15: நரம்பு மண்டலம்",
      questions: [
        {
          id: "sci_15_1",
          type: "1m",
          mark: "1 மதிப்பெண்",
          examTag: "அரசு பொதுத்தேர்வு",
          q: "நரம்பு மண்டலத்தின் கட்டமைப்பு மற்றும் செயல்பாட்டின் அடிப்படை அலகு எது?",
          options: ["அ) நெஃப்ரான்", "ஆ) நியூரான்", "இ) சைட்டான்", "ஈ) ஆக்சான்"],
          ans: "விடை: <b>ஆ) நியூரான்</b><br>விளக்கம்: நரம்பு திசுக்களின் அடிப்படை கட்டமைப்பு மற்றும் செயல் அலகு நியூரான்கள் (நரம்பு செல்கள்) ஆகும். நெஃப்ரான் என்பது சிறுநீரகத்தின் வடிகட்டும் அடிப்படை அலகாகும்.",
          ansTamil: "நியூரான் நரம்பு மண்டலத்தின் அடிப்படை அலகு ஆகும்."
        },
        {
          id: "sci_15_2",
          type: "1m",
          mark: "1 மதிப்பெண்",
          examTag: "அரசு மாதிரி",
          q: "உடலில் ஏற்படும் உடனடி மற்றும் தன்னிச்சையான அனிச்சைச் செயல்களைக் (Reflex actions) கட்டுப்படுத்தும் முதன்மை மையம் எது?",
          options: ["அ) பெருமூளை", "ஆ) சிறுமூளை", "இ) தண்டுவடம்", "ஈ) முகுளம்"],
          ans: "விடை: <b>இ) தண்டுவடம்</b><br>விளக்கம்: சிந்தனைக்கு இடமில்லாமல் உடனடி எதிர்வினையாகத் தோன்றும் அனிச்சைச் செயல்களுக்கான சமிக்ஞைகள் மூளைக்குச் செல்லாமல் தண்டுவடத்தின் வழியாகவே அனிச்சை வில் மூலம் முடிக்கப்படுகின்றன.",
          ansTamil: "அனிச்சை செயல்களை தண்டுவடம் கட்டுப்படுத்துகிறது."
        },
        {
          id: "sci_15_3",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examTag: "அரசு பொதுத்தேர்வு",
          q: "நியூரானின் மூன்று முக்கியப் பகுதிகள் யாவை?",
          ans: `<div style="line-height:1.7;">
            நியூரான் மூன்று முக்கியப் பகுதிகளைக் கொண்டது:<br><br>
            1. <b>சைட்டான் (Cytone / செல் உடலம்):</b> மையப் பகுதியில் பெரிய உட்கரு மற்றும் நிசில் துகள்களைக் கொண்ட சைட்டோபிளாசப் பகுதி.<br>
            2. <b>டென்ட்ரான்கள் (Dendrites):</b> சைட்டோனிலிருந்து வெளியாகும் பல குறுகிய, கிளைத்த நரம்பு நீட்சிகள். இவை தூண்டல்களைப் பெற்று சைட்டோனுக்கு அனுப்புகின்றன.<br>
            3. <b>ஆக்சான் (Axon):</b> சைட்டோனிலிருந்து உருவாகும் ஒற்றை, மிக நீளமான உருளை வடிவ நரம்பு இழை. இது தூண்டல்களை அடுத்த நியூரானுக்குக் கடத்துகிறது.
          </div>`,
          ansTamil: "நியூரானின் மூன்று பகுதிகள்: 1. சைட்டான் 2. டென்ட்ரான்கள் 3. ஆக்சான்."
        },
        {
          id: "sci_15_4",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examTag: "முக்கிய வினா",
          q: "நரம்பு செல் சந்திப்பு (Synapse) என்றால் என்ன? அதன் முக்கியத்துவம் யாது?",
          ans: `<div style="line-height:1.7;">
            • ஒரு நியூரானின் ஆக்சான் முனையமைப்பும் மற்றொரு நியூரானின் டென்ட்ரான் முனையும் சந்திக்கும் நுட்பமான இடைவெளி <b>நரம்பு செல் சந்திப்பு (Synapse)</b> எனப்படும்.<br><br>
            <b>முக்கியத்துவம்:</b><br>
            • இங்கு நரம்புத் தூண்டல்கள் <b>அசிட்டைல்கோலின்</b> போன்ற வேதியியல் நரம்பு உணர்வு கடத்திகள் (Neurotransmitters) மூலம் ஒரு நியூரானிலிருந்து அடுத்த நியூரானுக்கு ஒரு குறிப்பிட்ட திசையில் மட்டுமே கடத்தப்படுகின்றன.
          </div>`,
          ansTamil: "இரு நரம்பு செல்களுக்கு இடையே நரம்புத் தூண்டல் கடத்தப்படும் சிறிய இடைவெளி நரம்பு செல் சந்திப்பு ஆகும்."
        },
        {
          id: "sci_15_5",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examTag: "அரசு பொதுத்தேர்வு",
          q: "மூளையைப் பாதுகாக்கும் மூன்று மூளை உறைகள் (Meninges) யாவை?",
          ans: `<div style="line-height:1.7;">
            மனித மூளையானது மண்டையோட்டின் உள்ளே மூன்று பாதுகாப்பு சவ்வுகளால் சூழப்பட்டுள்ளது:<br><br>
            1. <b>டியூரா மேட்டர் (Dura mater):</b> மண்டையோட்டு எலும்புடன் இணைந்த கடினமான தடிமனான வெளி உறை.<br>
            2. <b>அராக்னாய்டு மேட்டர் (Arachnoid mater):</b> மெல்லிய சிலந்தி வலை போன்ற நடு உறை; அதிர்வு தாங்கியாக செயல்படுகிறது.<br>
            3. <b>பயா மேட்டர் (Pia mater):</b> மூளையுடன் நெருக்கமாக இணைந்த அதிக இரத்த நாளங்களைக் கொண்ட மென்மையான உள் உறை.
          </div>`,
          ansTamil: "மூளை உறைகள்: டியூரா மேட்டர் (வெளி), அராக்னாய்டு மேட்டர் (நடு), பயா மேட்டர் (உள்)."
        },
        {
          id: "sci_15_6",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examTag: "முக்கிய வினா",
          q: "மூளை தண்டுவடத் திரவத்தின் (Cerebrospinal Fluid - CSF) பணிகள் ஏதேனும் இரண்டை எழுதுக.",
          ans: `<div style="line-height:1.7;">
            <b>மூளை தண்டுவடத் திரவத்தின் பணிகள்:</b><br>
            1. <b>அதிர்வு தாங்கி:</b> மூளை மற்றும் தண்டுவடத்தை இயந்திர அதிர்ச்சிகள் மற்றும் காயங்களிலிருந்து பாதுகாக்கும் அதிர்வு தாங்கியாக செயல்படுகிறது.<br>
            2. <b>ஊட்டச்சத்து வழங்கல்:</b> நரம்பு செல்களுக்குத் தேவையான ஊட்டச்சத்துக்களையும் ஆக்சிஜனையும் வழங்குகிறது.<br>
            3. <b>கழிவகற்றம்:</b> நரம்பு செல்களின் கழிவுப் பொருட்களை வெளியேற்ற உதவுகிறது.<br>
            4. மண்டையோட்டினுள் நிலையான அழுத்தத்தை பராமரிக்கிறது.
          </div>`,
          ansTamil: "CSF மூளையை அதிர்ச்சிகளிலிருந்து பாதுகாக்கிறது மற்றும் மூளைக்கு ஊட்டச்சத்து வழங்குகிறது."
        },
        {
          id: "sci_15_7",
          type: "2m",
          mark: "2 மதிப்பெண்",
          examTag: "அரசு மாதிரி",
          q: "அனிச்சை வில் (Reflex Arc) என்றால் என்ன? அதன் வழிமுறையை விளக்குக.",
          ans: `<div style="line-height:1.7;">
            அனிச்சைச் செயலின் போது நரம்புத் தூண்டல்கள் பயணிக்கும் பாதையானது <b>அனிச்சை வில் (Reflex Arc)</b> எனப்படும்.<br><br>
            <b>பயணிக்கும் வழிமுறை:</b><br>
            <div style="background:#f1f5f9; padding:8px 12px; border-radius:6px; font-weight:700; color:#0369a1; text-align:center;">
              உணர்வேற்பி ➔ உணர்ச்சி நரம்பு ➔ தண்டுவடம் (மையம்) ➔ இயக்க நரம்பு ➔ இயங்கு தசை / உறுப்பு
            </div><br>
            • எ.கா: சூடான பாத்திரத்தைத் தொடும்போது, தோல் உணர்வேற்பிகள் தூண்டப்பட்டு தண்டுவடம் வழியாக உடனே கை தசைகள் சுருங்கி கை தானாக பின்வாங்கப்படுகிறது.
          </div>`,
          ansTamil: "அனிச்சைச் செயல் செல்லும் பாதை அனிச்சை வில் எனப்படும் (உணர்வேற்பி ➔ தண்டுவடம் ➔ இயங்கு தசை)."
        },
        {
          id: "sci_15_8",
          type: "7m",
          mark: "4 / 7 மதிப்பெண்",
          examTag: "அரசு பொதுத்தேர்வு 7M",
          diagramImg: "images/sci_brain_diagram.jpg",
          q: "மனித மூளையின் அமைப்பை அதன் முதன்மைப் பிரிவுகளான முன்மூளை, நடுமூளை மற்றும் பின்மூளை ஆகியவற்றின் பணிகள் வாயிலாக விரிவாக விளக்குக.",
          ans: `<div style="line-height:1.8;">
            <div style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; border-radius:8px; margin-bottom:14px;">
              <b style="color:#1e40af; font-size:15px;">🧠 மனித மூளையின் அமைப்பு:</b><br>
              • மனித மூளை மைய நரம்பு மண்டலத்தின் முதன்மைக் கட்டுப்பாட்டு மற்றும் ஒருங்கிணைப்பு மையமாகும்.<br>
              • மண்டையோட்டின் (Cranium) உள்பகுதியில் மூன்று பாதுகாப்பு சவ்வுகளாலும் (டியூரா மேட்டர், அரக்னாய்டு சவ்வு, பயா மேட்டர்) மற்றும் மூளை-தண்டுவட திரவத்தினாலும் (CSF) பாதுகாக்கப்படுகிறது.<br>
              • அமைப்பு ரீதியாக மூளை மூன்று பெரும் பிரிவுகளாகப் பிரிக்கப்பட்டுள்ளது: <b>முன்மூளை, நடுமூளை, மற்றும் பின்மூளை</b>.
            </div>

            <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:12px; margin-bottom:14px; overflow-x:auto;">
              <div style="color:#0f172a; font-weight:800; font-size:15px; margin-bottom:8px; border-bottom:2px solid #3b82f6; padding-bottom:4px;">
                📊 அமைப்பும் வாழ்வியல் பணிகளும் (அட்டவணை)
              </div>
              <table style="width:100%; border-collapse:collapse; font-size:13.5px; text-align:left;">
                <thead>
                  <tr style="background:#1e3a8a; color:#ffffff;">
                    <th style="padding:10px 12px; border:1px solid #94a3b8; width:20%;">பகுதி</th>
                    <th style="padding:10px 12px; border:1px solid #94a3b8; width:34%;">அமைப்பு</th>
                    <th style="padding:10px 12px; border:1px solid #94a3b8; width:46%;">வாழ்வியல் பணிகள்</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="background:#fdf2f8;">
                    <td style="padding:10px 12px; border:1px solid #cbd5e1; font-weight:800; color:#9d174d; vertical-align:top;">முன்மூளை (Forebrain)</td>
                    <td style="padding:10px 12px; border:1px solid #cbd5e1; vertical-align:top; color:#1e293b;">
                      • மூளையின் மிகப்பெரிய மற்றும் நன்கு வளர்ச்சியடைந்த பகுதி.<br>
                      • <b>பெருமூளை</b>, <b>தலாமஸ்</b>, மற்றும் <b>ஹைப்போதலாமஸ்</b> ஆகியவற்றைக் கொண்டது.
                    </td>
                    <td style="padding:10px 12px; border:1px solid #cbd5e1; vertical-align:top; color:#1e293b;">
                      • <b>பெருமூளை:</b> சிந்தனை, நினைவாற்றல், கற்றல், அறிவுக்கூர்மை மற்றும் இயக்கு இயக்கங்களின் மையம்.<br>
                      • <b>தலாமஸ்:</b> உணர்வுத் தகவல்களைப் பெருமூளைக்குக் கடத்தும் முதன்மை மறு ஒலிபரப்பு மையம்.<br>
                      • <b>ஹைப்போதலாமஸ்:</b> உடல் வெப்பநிலை, பசி, தாகம், நீர் சமநிலையைப் பேணுகிறது; பிட்யூட்டரி சுரப்பியைக் கட்டுப்படுத்துகிறது.
                    </td>
                  </tr>
                  <tr style="background:#f0f9ff;">
                    <td style="padding:10px 12px; border:1px solid #cbd5e1; font-weight:800; color:#0369a1; vertical-align:top;">நடுமூளை (Midbrain)</td>
                    <td style="padding:10px 12px; border:1px solid #cbd5e1; vertical-align:top; color:#1e293b;">
                      • முன்மூளைக்கும் பின்மூளைக்கும் இடையில் அமைந்துள்ளது.<br>
                      • இவ்விரு பகுதிகளையும் இணைக்கும் சிறிய பகுதி.
                    </td>
                    <td style="padding:10px 12px; border:1px solid #cbd5e1; vertical-align:top; color:#1e293b;">
                      • பார்வை மற்றும் கேட்டல் அனிச்சைச் செயல்களில் பங்கேற்கிறது.<br>
                      • கண் இயக்கம் மற்றும் கண் பாவை சுருங்கி விரிதலைக் கட்டுப்படுத்துகிறது.<br>
                      • முன்மூளை மற்றும் பின்மூளைக்கு இடையிலான நரம்பு தூண்டல்களின் கடத்து மையமாக செயல்படுகிறது.
                    </td>
                  </tr>
                  <tr style="background:#fefce8;">
                    <td style="padding:10px 12px; border:1px solid #cbd5e1; font-weight:800; color:#854d0e; vertical-align:top;">பின்மூளை (Hindbrain)</td>
                    <td style="padding:10px 12px; border:1px solid #cbd5e1; vertical-align:top; color:#1e293b;">
                      • <b>சிறுமூளை</b>, <b>பான்ஸ்</b>, மற்றும் <b>முகுளம்</b> ஆகியவற்றைக் கொண்டது.
                    </td>
                    <td style="padding:10px 12px; border:1px solid #cbd5e1; vertical-align:top; color:#1e293b;">
                      • <b>சிறுமூளை:</b> உடலின் சமநிலை மற்றும் தோரணையைப் பராமரிக்கிறது; இயக்க தசைகளை ஒருங்கிணைக்கிறது.<br>
                      • <b>பான்ஸ்:</b> மூளையின் பல்வேறு பகுதிகளை இணைக்கும் பாலம்; சுவாசத்தை ஒழுங்குபடுத்த உதவுகிறது.<br>
                      • <b>முகுளம்:</b> சுவாசம், இதயத்துடிப்பு மற்றும் இரத்த அழுத்தம் போன்ற உயிர்காக்கும் தன்னிச்சையற்ற செயல்களைக் கட்டுப்படுத்துகிறது.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style="background:#fdf4ff; border-left:4px solid #a855f7; padding:10px 14px; border-radius:6px; margin-top:10px;">
              <b style="color:#7e22ce;">⭐ தேர்வுக்கான முக்கியக் குறிப்புகள்:</b><br>
              ✔ <b>மூளை:</b> முதன்மைக் கட்டுப்பாட்டு மையம்.<br>
              ✔ <b>3 முக்கியப் பகுதிகள்:</b> முன்மூளை, நடுமூளை, பின்மூளை.<br>
              ✔ <b>முன்மூளை:</b> சிந்தனை, நினைவாற்றல் மற்றும் சமநிலை பராமரிப்பு.<br>
              ✔ <b>நடுமூளை:</b> பார்வை, கேட்டல் அனிச்சைகள்.<br>
              ✔ <b>பின்மூளை:</b> சமநிலை, சுவாசம், இதயத்துடிப்பு கட்டுப்பாடு.
            </div>
          </div>`,
          ansTamil: "மூளை 3 பகுதிகள்: முன்மூளை (சிந்தனை, அறிவு, சமநிலை பராமரிப்பு), நடுமூளை (பார்வை, கேட்டல் அனிச்சை), பின்மூளை (சமநிலை, சுவாசம், இதயத்துடிப்பு).",
          blackboard: {
            title: "மனித மூளை: அமைப்பு மற்றும் வாழ்வியல் பணிகள்",
            engTitle: "Human Brain: Structural Organization & Physiological Specializations",
            fullBoardImg: "images/sci_brain_diagram.jpg",
            steps: [
              {
                stepNum: 1,
                badge: "🧠 1. மனித மூளையின் அமைப்பு",
                badgeEn: "🧠 1. Structural Organization of Brain",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800; font-size:16px;">மனித மூளையின் கட்டமைப்பு (Structural Organization)</div>
                  <div class="bb-box-cyan" style="background:#0f172a; border:2px solid #38bdf8; border-radius:10px; padding:12px; margin-top:8px;">
                    <div class="bb-line" style="color:#e2e8f0; font-size:14.5px; line-height:1.7;">
                      • மைய நரம்பு மண்டலத்தின் முதன்மைக் கட்டுப்பாட்டு மையம்.<br>
                      • மண்டையோட்டின் (Cranium) உள்பகுதியில் 3 சவ்வுகளாலும் (Meninges) மற்றும் மூளை-தண்டுவட திரவத்தினாலும் (CSF) பாதுகாக்கப்படுகிறது.<br>
                      • 3 பெரும் பிரிவுகள்: <span style="color:#fde047; font-weight:700;">முன்மூளை, நடுமூளை, மற்றும் பின்மூளை</span>.
                    </div>
                  </div>
                `,
                audioScriptTa: "மனித மூளையின் அமைப்பு: மனித மூளை நரம்பு மண்டலத்தின் முதன்மைக் கட்டுப்பாட்டு மையம். மண்டையோட்டினுள் மூன்று பாதுகாப்பு சவ்வுகள் மற்றும் மூளை தண்டுவட திரவத்தால் பாதுகாக்கப்படுகிறது. இது முன்மூளை, நடுமூளை மற்றும் பின்மூளை என மூன்று பகுதிகளாகப் பிரிக்கப்பட்டுள்ளது.",
                audioScriptEn: "Structural Organization: The human brain is the main control and coordination centre of the nervous system. Protected by cranial cavity, meninges and CSF. Divided into Forebrain, Midbrain and Hindbrain."
              },
              {
                stepNum: 2,
                badge: "🔬 2. முன்மூளை (Forebrain)",
                badgeEn: "🔬 2. Forebrain Specializations",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#f472b6; font-weight:800; font-size:16px;">முன்மூளை (பெருமூளை, தலாமஸ், ஹைப்போதலாமஸ்)</div>
                  <div class="bb-box-cyan" style="background:#0f172a; border:2px solid #f472b6; border-radius:10px; padding:12px; margin-top:8px;">
                    <div class="bb-line" style="color:#e2e8f0; font-size:14.5px; line-height:1.7;">
                      • <b style="color:#f472b6;">பெருமூளை (Cerebrum):</b> மிகப்பெரிய பகுதி. சிந்தனை, நினைவாற்றல், கற்றல், அறிவுக்கூர்மை மற்றும் இயக்க மையம்.<br>
                      • <b style="color:#f472b6;">தலாமஸ் (Thalamus):</b> உணர்வு மற்றும் இயக்க சமிக்ஞைகளை கடத்தும் முதன்மை மறுஒலிபரப்பு மையம்.<br>
                      • <b style="color:#f472b6;">ஹைப்போதலாமஸ்:</b> உடல் வெப்பநிலை, பசி, தாகம், தூக்கம் மற்றும் பிட்யூட்டரி சுரப்பியை கட்டுப்படுத்துகிறது.
                    </div>
                  </div>
                `,
                audioScriptTa: "முன்மூளை: பெருமூளை சிந்தனை, நினைவுத்திறன் மற்றும் இயக்கங்களின் மையம். தலாமஸ் உணர்வுத் தகவல்களை கடத்தும் மறுஒலிபரப்பு மையம். ஹைப்போதலாமஸ் உடல் வெப்பநிலை, பசி, தாகம் மற்றும் பிட்யூட்டரி சுரப்பியை கட்டுப்படுத்துகிறது.",
                audioScriptEn: "Forebrain: Cerebrum is the centre for thinking, memory, intelligence, and voluntary actions. Thalamus acts as a relay station. Hypothalamus maintains homeostasis and controls pituitary gland."
              },
              {
                stepNum: 3,
                badge: "⚡ 3. நடுமூளை (Midbrain)",
                badgeEn: "⚡ 3. Midbrain Specializations",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#38bdf8; font-weight:800; font-size:16px;">நடுமூளை (பார்வை & கேட்டல் அனிச்சை மையம்)</div>
                  <div class="bb-box-cyan" style="background:#0f172a; border:2px solid #38bdf8; border-radius:10px; padding:12px; margin-top:8px;">
                    <div class="bb-line" style="color:#e2e8f0; font-size:14.5px; line-height:1.7;">
                      • முன்மூளைக்கும் பின்மூளைக்கும் இடையில் உள்ள சிறிய இணைப்பு பகுதி.<br>
                      • <span style="color:#38bdf8; font-weight:700;">பார்வை மற்றும் கேட்டல் அனிச்சை செயல்களை</span> ஒருங்கிணைக்கிறது.<br>
                      • கண் இயக்கம் மற்றும் கண் பாவை சுருங்கி விரிதலைக் கட்டுப்படுத்துகிறது.<br>
                      • நரம்பு தூண்டல்களின் கடத்து மையமாக செயல்படுகிறது.
                    </div>
                  </div>
                `,
                audioScriptTa: "நடுமூளை: முன்மூளைக்கும் பின்மூளைக்கும் இடையில் அமைந்துள்ளது. பார்வை மற்றும் கேட்டல் அனிச்சை செயல்களை ஒருங்கிணைக்கிறது; கண் இயக்கத்தைக் கட்டுப்படுத்துகிறது.",
                audioScriptEn: "Midbrain: Connects forebrain and hindbrain. Coordinates visual and auditory reflexes, eye movements, pupil size and impulse relay."
              },
              {
                stepNum: 4,
                badge: "⚖️ 4. பின்மூளை (Hindbrain)",
                badgeEn: "⚖️ 4. Hindbrain Specializations",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#facc15; font-weight:800; font-size:16px;">பின்மூளை (சிறுமூளை, பான்ஸ், முகுளம்)</div>
                  <div class="bb-box-cyan" style="background:#0f172a; border:2px solid #facc15; border-radius:10px; padding:12px; margin-top:8px;">
                    <div class="bb-line" style="color:#e2e8f0; font-size:14.5px; line-height:1.7;">
                      • <b style="color:#facc15;">சிறுமூளை (Cerebellum):</b> உடலின் சமநிலை, தோரணையை பராமரிக்கிறது; இயக்க தசைகளை ஒருங்கிணைக்கிறது.<br>
                      • <b style="color:#facc15;">பான்ஸ் (Pons):</b> மூளைப் பகுதிகளை இணைக்கும் பாலம்; சுவாசத்தை ஒழுங்குபடுத்துகிறது.<br>
                      • <b style="color:#facc15;">முகுளம் (Medulla Oblongata):</b> சுவாசம், இதயத்துடிப்பு, இரத்த அழுத்தத்தை கட்டுப்படுத்தும் உயிர்காக்கும் மையம்.
                    </div>
                  </div>
                `,
                audioScriptTa: "பின்மூளை: சிறுமூளை உடலின் சமநிலை மற்றும் தோரணையைப் பராமரிக்கிறது. பான்ஸ் சுவாசத்தை ஒழுங்குபடுத்துகிறது. முகுளம் சுவாசம், இதயத்துடிப்பு மற்றும் இரத்த அழுத்தத்தைக் கட்டுப்படுத்தும் உயிர்காக்கும் மையம்.",
                audioScriptEn: "Hindbrain: Cerebellum maintains body posture and balance. Pons regulates breathing. Medulla oblongata controls vital involuntary functions like heartbeat, respiration, and blood pressure."
              }
            ]
          }
        }
      ]
    }
  ]
};
