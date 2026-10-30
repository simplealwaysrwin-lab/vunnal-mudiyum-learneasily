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
          ansTamil: "தடையில் பட்டு மீண்டும் கேட்கும் ஒலி எதிரொலி. குறைந்தபட்ச தொலைவு 17.2 மீ, கால இடைவெளி 0.1 விநாடி."
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
