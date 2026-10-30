// Class 10 Science - Unit 5: Acoustics
// Tamil Nadu State Board Samacheer Kalvi Question-Answer Guide (English Medium)

const SCIENCE_EM_UNIT_5_DATA = {
  unitId: "sci_em_u5",
  unitName: "Unit 5: Acoustics",
  subject: "Science",
  syllabus: "Tamil Nadu Samacheer Kalvi Class 10 Science - Physics",

  // Important Formulas & Principles
  formulas: [
    { title: "Wave Speed & Frequency", rule: "v = n × λ (v = velocity m/s, n = frequency Hz, λ = wavelength m)" },
    { title: "Minimum Distance to Hear Echo", rule: "d = (v × t) / 2 = (344 × 0.1) / 2 = 17.2 m (in air at 22°C)" },
    { title: "Audible Range for Humans", rule: "20 Hz to 20,000 Hz (20 kHz)" },
    { title: "Infrasonic Waves", rule: "Frequency < 20 Hz (earthquakes, whales, elephants, volcanic eruptions)" },
    { title: "Ultrasonic Waves", rule: "Frequency > 20,000 Hz (bats, dolphins, SONAR, USG scan)" },
    { title: "SONAR Ocean Depth Formula", rule: "2d = v × t => d = (v × t) / 2 (distance to ocean floor or submarine)" },
    { title: "Doppler Effect Equation", rule: "n' = [(v ± v_L) / (v ∓ v_S)] × n (apparent frequency observed)" }
  ],

  subSections: [
    // -------------------------------------------------------------
    // Section 1: Sound Waves, Reflection, Echo & Ultrasound
    // -------------------------------------------------------------
    {
      id: "sec_sci_em_5_1",
      title: "Section 1: Sound Waves, Echo & Applications of Ultrasound",
      author: "Physics - Unit 5: Acoustics",
      questions: [
        {
          id: "sci_em_5_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "Board Exam",
          q: "What is the minimum distance required between the source of sound and the reflecting obstacle to hear a distinct echo in air at 22°C (speed of sound = 344 m/s)?",
          options: ["A) 17.2 m", "B) 34.4 m", "C) 10 m", "D) 20 m"],
          ans: "Answer: <b>A) 17.2 m</b><br>Explanation: The persistence of hearing for human ear is 0.1 s. Total round trip distance = 2d = v × t = 344 × 0.1 = 34.4 m. Hence minimum distance d = 34.4 / 2 = <b>17.2 m</b>.",
          ansTamil: "எதிரொலி கேட்க குறைந்தபட்ச தொலைவு 17.2 மீட்டர்."
        },
        {
          id: "sci_em_5_2",
          type: "1m",
          mark: "1 Mark",
          examTag: "Govt Model",
          q: "Waves produced during earthquakes and volcanic eruptions belong to which category?",
          options: ["A) Ultrasonic waves", "B) Infrasonic waves", "C) Audible sound", "D) Electromagnetic waves"],
          ans: "Answer: <b>B) Infrasonic waves</b><br>Explanation: Infrasonic waves have frequencies lower than 20 Hz, which cannot be heard by human ears but can be sensed by animals like elephants and dogs.",
          ansTamil: "நிலநடுக்க அலைகள் குற்றொலி (Infrasonic) வகையைச் சார்ந்தவை."
        },
        {
          id: "sci_em_5_3",
          type: "2m",
          mark: "2 Marks",
          examTag: "High Yield",
          q: "What is an echo? State two essential conditions required to hear a distinct echo.",
          ans: `<div style="line-height:1.7;">
            <b>Echo:</b> An echo is the sound reproduced due to the reflection of the original sound from a large obstacle such as a high wall, cliff, or mountain.<br><br>
            <b>Conditions to hear an echo:</b><br>
            1. <b>Minimum distance:</b> The obstacle must be at least <b>17.2 meters</b> away from the source of sound.<br>
            2. <b>Time interval:</b> The time gap between original sound and reflected sound must be at least <b>0.1 second</b> (persistence of human hearing).
          </div>`,
          ansTamil: "தடையில் பட்டு மீண்டும் கேட்கும் ஒலி எதிரொலி. குறைந்தபட்ச தொலைவு 17.2 மீ, கால இடைவெளி 0.1 விநாடி.",
          audioScript: "Echo: An echo is the sound reproduced due to the reflection of the original sound from a large obstacle. Conditions to hear an echo: First, the minimum distance between the source and the reflecting surface must be at least 17 point 2 meters. Second, the time interval between the original sound and the reflected sound must be at least 0 point 1 second."
        },
        {
          id: "sci_em_5_4",
          type: "2m",
          mark: "2 Marks",
          examTag: "Board Exam",
          q: "What are ultrasonic waves? Name two animals that make use of ultrasonic waves.",
          ans: `<div style="line-height:1.7;">
            <b>Ultrasonic Waves:</b> Sound waves having frequencies greater than 20,000 Hz (20 kHz) are called ultrasonic waves. Humans cannot hear them.<br><br>
            <b>Animals using ultrasound:</b><br>
            1. <b>Bats:</b> Emit ultrasonic squeaks and navigate through echolocation in darkness.<br>
            2. <b>Dolphins:</b> Use high-frequency clicks underwater to detect prey and communicate.
          </div>`,
          ansTamil: "20,000 Hz-க்கு அதிகமான ஒலி அலைகள் மீயொலி. வௌவால் மற்றும் டால்பின்கள் பயன்படுத்துகின்றன."
        },
        {
          id: "sci_em_5_5",
          type: "7m",
          mark: "7 Marks",
          examTag: "Board Exam 7M Compulsory",
          q: "Explain the working principle of SONAR and describe the medical and industrial applications of ultrasonic waves.",
          ans: `<div style="line-height:1.7;">
            <b>1. SONAR (Sound Navigation And Ranging):</b><br>
            • An acoustic device used in ships and submarines to detect underwater objects and measure depth of water bodies.<br>
            • A <b>Transmitter</b> sends high-frequency ultrasonic beams into the water which strike the seabed or submerged submarines.<br>
            • A <b>Receiver / Detector</b> picks up the reflected echo signals.<br>
            • Ocean depth calculation: <b>d = (v × t) / 2</b>, where v is the speed of sound in water, and t is total travel time.<br><br>
            <b>2. Medical Applications:</b><br>
            • <b>Ultrasonography (USG):</b> Creates safe real-time 2D/3D images of foetus in the womb and internal organs without harmful radiation.<br>
            • <b>Echocardiography:</b> Images heart valves, wall motion, and blood pumping action.<br>
            • <b>Lithotripsy:</b> Focused high-energy shock waves pulverize kidney and gall bladder stones into powder.<br><br>
            <b>3. Industrial Applications:</b><br>
            • <b>Non-Destructive Testing (NDT):</b> Detects hidden hairline fractures, cracks, and voids inside metal structures and aircraft parts.<br>
            • <b>Ultrasonic Cleaning:</b> Cavitation bubbles agitate cleaning solvent to remove grease and microscopic dirt from fine machinery and jewelry.
          </div>`,
          ansTamil: "சோனார் கடலின் ஆழம் மற்றும் நீர்மூழ்கிக் கப்பலைக் கண்டறியும். மீயொலி கருவின் ஸ்கேன், இதய ஆய்வு மற்றும் உலோக விரிசல் கண்டறியப் பயன்படுகிறது.",
          checkpoints: [
            { pt: 1, text: "SONAR: Sound Navigation And Ranging sends ultrasonic pulses to ocean bed.", taText: "சோனார்: கடலின் ஆழம் மற்றும் நீர்மூழ்கிக் கப்பல்களைக் கண்டறிய மீயொலியை அனுப்புகிறது." },
            { pt: 2, text: "Depth formula: d = (v × t) / 2 where v is speed in water, t is total travel time.", taText: "கடலின் ஆழம் கணக்கிடும் சூத்திரம்: d = (v × t) / 2." },
            { pt: 3, text: "Transmitter generates ultrasonic waves and receiver detects reflected echoes.", taText: "டிரான்ஸ்மிட்டர் அலைகளை அனுப்புகிறது, ஏற்பி எதிரொலியைப் பதிவு செய்கிறது." },
            { pt: 4, text: "Ultrasonography (USG): Safely monitors foetal development and organ motion.", taText: "அல்ட்ரா சோனோகிராபி: கருவின் வளர்ச்சி மற்றும் உறுப்புகளின் இயக்கத்தைப் படம்பிடிக்கிறது." },
            { pt: 5, text: "Echocardiography (ECG/Echo): Uses ultrasound to image heart chambers and valves.", taText: "எக்கோகார்டியோகிராபி: இதய வால்வுகள் மற்றும் செயல்பாட்டை ஆராய்கிறது." },
            { pt: 6, text: "Lithotripsy: High-energy ultrasound breaks kidney stones without surgery.", taText: "லித்தோட்ரிப்சி: அறுவை சிகிச்சை இன்றி சிறுநீரகக் கற்களைத் தூளாக்குகிறது." },
            { pt: 7, text: "Flaw detection: Non-destructive testing finds internal cracks in aircraft metals.", taText: "உலோக ஆய்வு: உலோகம் மற்றும் விமானப் பாகங்களில் உள்ள உள் விரிசல்களைக் கண்டறிகிறது." },
            { pt: 8, text: "Ultrasonic cleaning: Cleans delicate micro-components and jewelry via cavitation.", taText: "மீயொலி தூய்மைப்படுத்தல்: நுட்பமான மின்னணு பாகங்கள் மற்றும் நகைகளைத் தூய்மையாக்குகிறது." },
            { pt: 9, text: "Echo location: Bats navigate and hunt in dark caves using high-frequency chirps.", taText: "எதிரொலி அறிதல்: வௌவால்கள் இருட்டில் இரையை வேட்டையாட மீயொலியைப் பயன்படுத்துகின்றன." },
            { pt: 10, text: "Marine navigation: Helps submarines detect icebergs, seabed reefs, and enemy ships.", taText: "கடற்பயண பாதுகாப்பு: பனிப்பாறைகள், பாறைகள் மற்றும் எதிரிக் கப்பல்களை முன்கூட்டியே எச்சரிக்கிறது." }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 2: Doppler Effect & Numerical Problems
    // -------------------------------------------------------------
    {
      id: "sec_sci_em_5_2",
      title: "Section 2: Doppler Effect & Numerical Calculations",
      author: "Physics - Unit 5: Acoustics",
      questions: [
        {
          id: "sci_em_5_6",
          type: "2m",
          mark: "2 Marks",
          examTag: "Board Exam",
          q: "What is the Doppler effect? Mention situations where the Doppler effect is not observed.",
          ans: `<div style="line-height:1.7;">
            <b>Doppler Effect:</b> When there is a relative motion between the source of sound and the listener, the apparent frequency of sound heard by the listener differs from the actual frequency produced by the source.<br><br>
            <b>Situations where Doppler effect is not observed:</b><br>
            1. Both source and listener are completely at rest.<br>
            2. Both source and listener move in the same direction with the exact same speed.<br>
            3. When one moves in a circular path with the other at its centre.
          </div>`,
          ansTamil: "சார்பியக்கத்தால் அதிர்வெண்ணில் ஏற்படும் மாற்றம் டாப்ளர் விளைவு. இரண்டும் ஓய்வில் இருந்தால் அல்லது ஒரே வேகத்தில் நகர்ந்தால் ஏற்படாது."
        },
        {
          id: "sci_em_5_7",
          type: "2m",
          mark: "2 Marks",
          examTag: "Application Question",
          q: "List two practical real-life applications of the Doppler effect.",
          ans: `<div style="line-height:1.7;">
            <b>1. Speed Guns (Traffic Control):</b> Police use Doppler radar/speed guns to track and measure the instantaneous speed of speeding vehicles.<br>
            <b>2. Tracking Celestial Bodies (Astronomy):</b> Astronomers measure the redshift or blueshift in starlight to determine whether galaxies are receding or approaching.<br>
            <b>3. Doppler Echocardiogram (Medicine):</b> Measures velocity and direction of blood flow inside arteries and veins.
          </div>`,
          ansTamil: "வாகன வேகம் அறிதல், விண்மீன் நகர்வு மற்றும் இரத்த ஓட்ட திசைவேகம் கணக்கிட டாப்ளர் விளைவு பயன்படுகிறது."
        },
        {
          id: "sci_em_5_8",
          type: "4m",
          mark: "4 Marks",
          examTag: "Compulsory Numerical",
          q: "A ship sends an ultrasonic signal to the seabed and receives the echo after 3 seconds. If the speed of sound in seawater is 1530 m/s, calculate the depth of the sea.",
          ans: `<div style="line-height:1.8;">
            <b>Given Data:</b><br>
            • Total travel time of ultrasonic wave (t) = 3 s<br>
            • Velocity of sound in seawater (v) = 1530 m/s<br><br>
            <b>Formula:</b><br>
            Depth of sea: <b>d = (v × t) / 2</b><br><br>
            <b>Calculation:</b><br>
            d = (1530 × 3) / 2<br>
            d = 4590 / 2<br>
            d = <b>2295 meters (or 2.295 km)</b><br><br>
            <b>Final Answer:</b> Depth of the sea = <b>2295 m</b>.
          </div>`,
          ansTamil: "கடலின் ஆழம் = (1530 × 3) / 2 = 2295 மீட்டர்."
        }
      ]
    }
  ]
};

// ==========================================
// 🌟 Outside Book Practice Questions & Mock Test 1-Mark Points (Unit 5 EM)
// ==========================================
if (typeof SCIENCE_EM_UNIT_5_DATA !== 'undefined') {
  if (!SCIENCE_EM_UNIT_5_DATA.subSections) SCIENCE_EM_UNIT_5_DATA.subSections = [];
  SCIENCE_EM_UNIT_5_DATA.subSections.push({
    id: "sci_em_u5_outside",
    title: "🌟 Outside Book Practice Questions & Mock Test 1-Mark Points",
    author: "Expert Science Faculty",
    questions: [
      {
        id: "sci_em_u5_out_5m_1",
        q: "Explain how an echo is formed, derive the minimum distance required to hear a distinct echo, and describe its conditions with a neat diagram.",
        type: "5m",
        examTag: "Outside Book / Extra Practice 5-Mark Question",
        ans: "<b>Echo Formation and Essential Conditions:</b><br><br>" +
             "<b>1. Definition of Echo:</b><br>" +
             "An echo is the repetition of sound produced when sound waves bounce off an obstacle such as a high wall, hill, or cliff face and return to the listener.<br><br>" +
             "<b>2. Persistence of Hearing:</b><br>" +
             "The sensation of sound persists in the human brain for approximately <b>0.1 second</b> (1/10th of a second). To perceive two distinct sounds (the direct sound and reflected echo), the time interval between them must be at least <b>0.1 second</b> (t ≥ 0.1 s).<br><br>" +
             "<b>3. Derivation of Minimum Distance:</b><br>" +
             "• Let speed of sound in air at 22°C be v = 344 m/s.<br>" +
             "• Minimum time delay t = 0.1 s.<br>" +
             "• Total distance traveled by sound to the obstacle and back to the listener = 2d.<br>" +
             "<div style='text-align:center; font-size:15px; font-weight:bold; color:#0369a1; padding:8px; background:#f0f9ff; border-radius:6px;'>" +
             "2d = v × t &nbsp;⟹&nbsp; d = (v × t) / 2 = (344 × 0.1) / 2 = 17.2 metres</div><br>" +
             "Therefore, the minimum distance required between the sound source and reflecting surface to hear an echo at room temperature is <b>17.2 metres</b>.<br><br>" +
             "<b>4. Key Conditions for Hearing an Echo:</b><br>" +
             "1. The distance between source and reflector must be at least 17.2 m in air.<br>" +
             "2. The dimensions of the obstacle must be substantially larger than the wavelength of the sound wave.<br>" +
             "3. The original sound must have sufficient intensity and loudness so that it remains clearly audible after reflection.",
        explanation: "Echo requires time interval t ≥ 0.1 s and minimum distance d ≥ 17.2 m (from 2d = v × t).",
        diagramCaption: "Minimum Distance and Sound Path for Distinct Echo Formation",
        diagramSvg: `<svg viewBox="0 0 460 250" style="max-width:100%; height:auto; display:block; margin:0 auto; background:#f8fafc; border-radius:12px; border:1px solid #cbd5e1;">
  <text x="230" y="24" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e293b">Formation of Echo (d ≥ 17.2 m, t ≥ 0.1 s)</text>
  <g transform="translate(40, 70)">
    <circle cx="20" cy="20" r="12" fill="#3b82f6"/>
    <line x1="20" y1="32" x2="20" y2="75" stroke="#1d4ed8" stroke-width="3"/>
    <line x1="20" y1="45" x2="5" y2="60" stroke="#1d4ed8" stroke-width="2.5"/>
    <line x1="20" y1="45" x2="35" y2="55" stroke="#1d4ed8" stroke-width="2.5"/>
    <line x1="20" y1="75" x2="8" y2="115" stroke="#1d4ed8" stroke-width="2.5"/>
    <line x1="20" y1="75" x2="32" y2="115" stroke="#1d4ed8" stroke-width="2.5"/>
    <text x="20" y="130" font-size="10.5" font-weight="bold" fill="#1e40af" text-anchor="middle">Sound Source</text>
  </g>
  <g stroke="#2563eb" stroke-width="2" fill="none">
    <path d="M 90,85 A 30,30 0 0,1 90,135"/>
    <path d="M 115,75 A 45,45 0 0,1 115,145"/>
    <path d="M 145,65 A 65,65 0 0,1 145,155"/>
    <path d="M 180,55 A 85,85 0 0,1 180,165"/>
  </g>
  <line x1="120" y1="80" x2="160" y2="80" stroke="#2563eb" stroke-width="2"/>
  <polygon points="158,76 168,80 158,84" fill="#2563eb"/>
  <text x="145" y="72" font-size="9" font-weight="bold" fill="#2563eb">Incident Wave →</text>
  <rect x="390" y="45" width="30" height="155" rx="4" fill="#64748b" stroke="#334155" stroke-width="2"/>
  <text x="405" y="125" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle" transform="rotate(90, 405, 125)">Reflecting Wall</text>
  <g stroke="#dc2626" stroke-width="2" fill="none" stroke-dasharray="4,2">
    <path d="M 360,65 A 65,65 0 0,0 360,155"/>
    <path d="M 325,75 A 45,45 0 0,0 325,145"/>
    <path d="M 290,85 A 30,30 0 0,0 290,135"/>
  </g>
  <line x1="330" y1="140" x2="290" y2="140" stroke="#dc2626" stroke-width="2"/>
  <polygon points="292,136 282,140 292,144" fill="#dc2626"/>
  <text x="310" y="155" font-size="9" font-weight="bold" fill="#dc2626">← Reflected Echo</text>
  <line x1="60" y1="190" x2="390" y2="190" stroke="#15803d" stroke-width="2"/>
  <polygon points="68,186 58,190 68,194" fill="#15803d"/>
  <polygon points="382,186 392,190 382,194" fill="#15803d"/>
  <text x="225" y="184" font-size="10.5" font-weight="bold" fill="#15803d" text-anchor="middle">Minimum Distance d ≥ 17.2 m (at 22°C)</text>
  <rect x="50" y="210" width="360" height="28" rx="6" fill="#1e293b"/>
  <text x="230" y="229" font-size="11" font-weight="bold" fill="#38bdf8" text-anchor="middle">2d = v × t  ⟹  d = (344 × 0.1) / 2 = 17.2 m (t ≥ 0.1 s)</text>
</svg>`
      },
      {
        id: "sci_em_u5_out_5m_2",
        q: "Explain the major applications of ultrasonic waves in medicine, industry, and oceanography with a neat diagram.",
        type: "5m",
        examTag: "Outside Book / Extra Practice 5-Mark Question",
        ans: "<b>Applications of Ultrasonic Waves (f &gt; 20 kHz):</b><br><br>" +
             "<b>1. Definition:</b><br>" +
             "Sound waves having frequencies higher than 20,000 Hz (20 kHz) that cannot be detected by the human ear are called <b>ultrasonic waves</b>.<br><br>" +
             "<b>2. Medical Applications:</b><br>" +
             "• <b>Medical Ultrasonography (USG):</b> High-frequency ultrasound pulses sent by a piezoelectric transducer reflect off boundaries between internal tissues to create safe real-time 2D/3D images of internal organs (liver, gallbladder, kidneys).<br>" +
             "• <b>Fetal Monitoring:</b> Unlike ionising X-rays, ultrasound provides completely harmless fetal monitoring during pregnancy.<br>" +
             "• <b>Echocardiography (ECG):</b> Uses ultrasonic waves to monitor heartbeat rhythms, blood flow velocity, and valve defects.<br>" +
             "• <b>Lithotripsy:</b> Focused high-energy ultrasonic shockwaves shatter kidney and gall bladder stones into microscopic sand-like grains without surgical cuts.<br><br>" +
             "<b>3. Industrial &amp; Marine Applications:</b><br>" +
             "• <b>Non-Destructive Flaw Detection:</b> Used to inspect heavy steel structures, aeroplane wings, and railway tracks; internal cracks reflect pulses early.<br>" +
             "• <b>Ultrasonic Cleaning:</b> Microscopic agitation dislodges stubborn grease and particulates from delicate jewellery and micro-circuits.<br>" +
             "• <b>SONAR (Sound Navigation and Ranging):</b> Ultrasonic ship transmitters measure water depth (d = vt/2) and detect submarines and underwater shoals.",
        explanation: "Ultrasonic waves (>20 kHz) are widely used in medical imaging (USG), kidney stone lithotripsy, industrial flaw detection, and naval SONAR.",
        diagramCaption: "Medical Ultrasonography (USG) Transducer Probe and Organ Echo",
        diagramSvg: `<svg viewBox="0 0 460 250" style="max-width:100%; height:auto; display:block; margin:0 auto; background:#f8fafc; border-radius:12px; border:1px solid #cbd5e1;">
  <text x="230" y="24" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e293b">Ultrasonic Waves &amp; Medical Sonography</text>
  <rect x="25" y="55" width="110" height="85" rx="6" fill="#0f172a" stroke="#334155" stroke-width="2"/>
  <rect x="32" y="62" width="96" height="71" rx="4" fill="#0284c7" fill-opacity="0.2"/>
  <ellipse cx="80" cy="97" rx="30" ry="20" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <circle cx="80" cy="97" r="10" fill="#38bdf8" fill-opacity="0.4"/>
  <text x="80" y="125" font-size="8" fill="#e0f2fe" text-anchor="middle">Organ Image / USG</text>
  <rect x="70" y="140" width="20" height="25" fill="#475569"/>
  <rect x="50" y="165" width="60" height="8" rx="3" fill="#334155"/>
  <path d="M 135,100 Q 170,100 190,130" fill="none" stroke="#475569" stroke-width="3"/>
  <rect x="190" y="115" width="45" height="30" rx="4" fill="#0369a1" stroke="#0c4a6e" stroke-width="1.5"/>
  <polygon points="235,120 248,124 248,136 235,140" fill="#38bdf8"/>
  <text x="210" y="105" font-size="9" font-weight="bold" fill="#0369a1" text-anchor="middle">Transducer</text>
  <text x="210" y="160" font-size="8" fill="#0369a1" text-anchor="middle">(Probe)</text>
  <rect x="250" y="55" width="180" height="155" rx="12" fill="#fdf2f8" stroke="#f472b6" stroke-width="1.5"/>
  <text x="340" y="75" font-size="10.5" font-weight="bold" fill="#be185d" text-anchor="middle">Human Body Tissue</text>
  <g stroke="#2563eb" stroke-width="2" fill="none">
    <path d="M 265,115 A 20,20 0 0,1 265,145"/>
    <path d="M 285,105 A 35,35 0 0,1 285,155"/>
    <path d="M 305,95 A 50,50 0 0,1 305,165"/>
  </g>
  <ellipse cx="360" cy="130" rx="40" ry="32" fill="#fbcfe8" stroke="#db2777" stroke-width="2"/>
  <text x="360" y="134" font-size="10" font-weight="bold" fill="#9d174d" text-anchor="middle">Internal Organ</text>
  <text x="360" y="146" font-size="8" fill="#9d174d" text-anchor="middle">(Boundary)</text>
  <g stroke="#16a34a" stroke-width="2" fill="none" stroke-dasharray="3,2">
    <path d="M 320,110 A 30,30 0 0,0 320,150"/>
    <path d="M 295,118 A 20,20 0 0,0 295,142"/>
  </g>
  <rect x="40" y="215" width="380" height="26" rx="6" fill="#1e293b"/>
  <text x="230" y="232" font-size="10.5" font-weight="bold" fill="#38bdf8" text-anchor="middle">Ultrasound Frequency &gt; 20,000 Hz (SONAR &amp; Medical USG)</text>
</svg>`
      },
      // 12 Mock Test 1-Mark Questions
      { id: "sci_em_u5_out_1m_1", q: "Sound waves are which type of mechanical waves in air?", options: ["Longitudinal waves", "Transverse waves", "Electromagnetic waves", "Stationary waves"], ans: "Longitudinal waves", type: "1m", explanation: "Sound travels as compressions and rarefactions along the wave direction." },
      { id: "sci_em_u5_out_1m_2", q: "What is the SI unit of frequency of sound?", options: ["Hertz (Hz)", "Decibel", "Metre", "Pascal"], ans: "Hertz (Hz)", type: "1m", explanation: "Frequency is cycles per second, measured in Hertz (Hz)." },
      { id: "sci_em_u5_out_1m_3", q: "What is the audible frequency range of hearing for a normal human being?", options: ["20 Hz to 20,000 Hz", "0 to 20 Hz", "Above 20,000 Hz", "100 Hz to 1000 Hz"], ans: "20 Hz to 20,000 Hz", type: "1m", explanation: "Human hearing ranges from 20 Hz to 20 kHz." },
      { id: "sci_em_u5_out_1m_4", q: "Sound waves with frequencies below 20 Hz are known as:", options: ["Infrasonic waves", "Ultrasonic waves", "Audible waves", "Microwaves"], ans: "Infrasonic waves", type: "1m", explanation: "Infrasonics have frequencies below 20 Hz (e.g. earthquake waves)." },
      { id: "sci_em_u5_out_1m_5", q: "Sound waves with frequencies above 20,000 Hz are known as:", options: ["Ultrasonic waves", "Infrasonic waves", "Audible waves", "Radio waves"], ans: "Ultrasonic waves", type: "1m", explanation: "Ultrasonics have frequencies above 20 kHz (e.g. bat echolocation)." },
      { id: "sci_em_u5_out_1m_6", q: "The repetition of sound caused by reflection from a distant hard obstacle is called an:", options: ["Echo", "Refraction", "Interference", "Diffraction"], ans: "Echo", type: "1m", explanation: "Reflection of sound produces an echo." },
      { id: "sci_em_u5_out_1m_7", q: "What is the minimum time interval required between direct sound and echo to hear it distinctly?", options: ["0.1 second (0.1 s)", "1 second", "0.5 second", "0.01 second"], ans: "0.1 second (0.1 s)", type: "1m", explanation: "Persistence of hearing in human ear lasts 0.1 s." },
      { id: "sci_em_u5_out_1m_8", q: "What is the approximate speed of sound in air at room temperature (22°C)?", options: ["344 m/s", "330 m/s", "1500 m/s", "3 × 10⁸ m/s"], ans: "344 m/s", type: "1m", explanation: "Speed of sound in air at 22°C is approx. 344 m/s." },
      { id: "sci_em_u5_out_1m_9", q: "What is the full expansion of the naval acronym SONAR?", options: ["Sound Navigation and Ranging", "Sound Notice and Radar", "Solar Navigation Ranging", "Sonic Network and Range"], ans: "Sound Navigation and Ranging", type: "1m", explanation: "SONAR uses underwater ultrasonic sound echoes." },
      { id: "sci_em_u5_out_1m_10", q: "Which acoustic instrument is used on ships to measure ocean depth and track submarines?", options: ["SONAR", "RADAR", "Barometer", "Speedometer"], ans: "SONAR", type: "1m", explanation: "SONAR calculates depth using d = vt/2." },
      { id: "sci_em_u5_out_1m_11", q: "Can sound waves propagate across an empty vacuum?", options: ["No (Requires a material medium)", "Yes", "At the speed of light", "Only in space"], ans: "No (Requires a material medium)", type: "1m", explanation: "Sound is a mechanical wave requiring molecular collisions to propagate." },
      { id: "sci_em_u5_out_1m_12", q: "The pitch of a sound is directly determined by its:", options: ["Frequency", "Amplitude", "Speed", "Loudness"], ans: "Frequency", type: "1m", explanation: "Higher frequency corresponds to higher pitch / shrillness." }
    ]
  });
}
