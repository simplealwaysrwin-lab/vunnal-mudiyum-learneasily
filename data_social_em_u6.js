// Class 10 Social Science - Geography Unit 2: India - Climate and Natural Vegetation
// Tamil Nadu State Board Samacheer Kalvi Question-Answer Guide (English Medium)

const SOCIAL_EM_UNIT_6_DATA = {
  unitId: "soc_em_g2",
  unitName: "Geography 2: India - Climate and Natural Vegetation",
  subject: "Social Science",
  syllabus: "Tamil Nadu Samacheer Kalvi Class 10 Social Science - Geography",

  // Key Geographical Highlights
  geoHighlights: [
    { title: "Factors Affecting Climate", val: "Latitude, Altitude, Distance from Sea, Monsoon Winds, Relief, Jet Streams" },
    { title: "India's Climate Type", val: "Tropical Monsoon Climate" },
    { title: "Wettest Place on Earth", val: "Mawsynram (Meghalaya) - Average annual rainfall of 1,141 cm" },
    { title: "Four Distinct Seasons", val: "Winter (Jan-Feb), Summer (Mar-May), Southwest Monsoon (Jun-Sep), Northeast Monsoon (Oct-Dec)" },
    { title: "Major Forest Types", val: "Tropical Evergreen, Tropical Deciduous, Tropical Thorn, Montane / Alpine, Mangrove Forests" },
    { title: "Biosphere Reserves", val: "18 designated Biosphere Reserves across India (e.g. Nilgiri, Gulf of Mannar, Agasthyamalai in Tamil Nadu)" }
  ],

  subSections: [
    // -------------------------------------------------------------
    // Section 1: Factors Influencing Climate & The Monsoons
    // -------------------------------------------------------------
    {
      id: "sec_soc_em_6_1",
      title: "Section 1: Factors Influencing Climate, Southwest & Northeast Monsoons",
      author: "Geography - Unit 2: Climate and Natural Vegetation",
      questions: [
        {
          id: "soc_em_6_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "Board Exam",
          q: "Mawsynram, the place that receives the highest rainfall in the world, is situated in which Indian state?",
          options: ["A) Assam", "B) Meghalaya", "C) Nagaland", "D) Tripura"],
          ans: "Answer: <b>B) Meghalaya</b><br>Explanation: Mawsynram is located on the Khasi Hills in Meghalaya and records a world-record average rainfall of 1,141 cm annually.",
          ansTamil: "மௌசின்ராம் மேகாலயா மாநிலத்தில் அமைந்துள்ளது (1,141 செ.மீ மழை)."
        },
        {
          id: "soc_em_6_2",
          type: "1m",
          mark: "1 Mark",
          examTag: "Govt Model",
          q: "Which forest type in India is popularly referred to as 'Monsoon Forests'?",
          options: ["A) Tropical Evergreen Forests", "B) Tropical Deciduous Forests", "C) Mangrove Forests", "D) Thorn Forests"],
          ans: "Answer: <b>B) Tropical Deciduous Forests</b><br>Explanation: Tropical Deciduous forests grow in regions receiving 100 to 200 cm of seasonal monsoon rain and shed their leaves during dry summer (Teak, Sal, Sandalwood).",
          ansTamil: "அயனமண்டல இலையுதிர் காடுகளே பருவக்காற்றுக் காடுகள் எனப்படும்."
        },
        {
          id: "soc_em_6_3",
          type: "2m",
          mark: "2 Marks",
          examTag: "High Yield",
          q: "Name the six primary factors that determine and influence the climate of India.",
          ans: `<div style="line-height:1.7;">
            1. <b>Latitude:</b> Tropic of Cancer divides the country into tropical south and sub-tropical north.<br>
            2. <b>Altitude:</b> Higher elevations (hill stations like Ooty, Shimla) have cooler temperatures.<br>
            3. <b>Distance from the Sea:</b> Coastal regions enjoy an equable maritime climate, while interior plains face continental extremes.<br>
            4. <b>Monsoon Winds:</b> The most dominating factor bringing periodic seasonal rainfall.<br>
            5. <b>Relief / Topography:</b> Mountain ranges act as physical barriers causing orographic rainfall.<br>
            6. <b>Jet Streams:</b> High-velocity upper-air currents that steer depressions and trigger monsoons.
          </div>`,
          ansTamil: "அட்சரேகை, உயரம், கடலிலிருந்து தொலைவு, பருவக்காற்று, நிலத்தோற்றம் மற்றும் ஜெட் காற்றோட்டம்."
        },
        {
          id: "soc_em_6_4",
          type: "5m",
          mark: "5 Marks",
          examTag: "Board Exam 5M High Yield",
          q: "Explain the mechanism of the Southwest Monsoon and trace the rainfall pattern of its two branches across India.",
          ans: `<div style="line-height:1.7;">
            <b>1. Origin and Arrival (Monsoon Burst):</b><br>
            • Intense summer heating creates a deep low-pressure trough over northern India and the Thar Desert.<br>
            • Moisture-laden oceanic winds rush from the Indian Ocean towards the mainland, bursting over Kerala during the first week of June.<br>
            • The triangular peninsular landform bifurcates the incoming winds into two distinct streams.<br><br>
            <b>2. Arabian Sea Branch:</b><br>
            • Strikes the steep windward slopes of the Western Ghats, dumping torrential orographic rainfall (exceeding 250 cm) along the Konkan and Malabar coasts.<br>
            • As it descends the eastern leeward side, the winds lose moisture, leaving Tamil Nadu in a <b>Rain Shadow Area</b> with little summer rainfall.<br><br>
            <b>3. Bay of Bengal Branch:</b><br>
            • Travels north across the Bay of Bengal, striking the funnel-shaped Garo, Khasi, and Jaintia Hills, delivering record rainfall at Mawsynram.<br>
            • Blocked by the massive Himalayan range, the wind deflects westwards, showering rains progressively across the Indo-Gangetic Plains towards Punjab.
          </div>`,
          ansTamil: "தென்மேற்கு பருவக்காற்று அரபிக்கடல் கிளை மற்றும் வங்கக்கடல் கிளை என இரண்டாகப் பிரிந்து இந்தியாவின் 75% மழையைத் தருகிறது. தமிழ்நாடு மழை மறைவுப் பிரதேசமாக உள்ளது.",
          checkpoints: [
            { pt: 1, text: "Monsoon burst: Arrives suddenly over the Kerala coast during the first week of June.", taText: "பருவமழை வெடிப்பு: ஜூன் முதல் வாரத்தில் கேரள கடற்கரையில் திடீரென இடி மின்னலுடன் தொடங்குகிறது." },
            { pt: 2, text: "Low pressure pull: Intense summer heat over Thar Desert and Tibetan plateau pulls moist maritime winds.", taText: "குறைந்த காற்றழுத்தம்: தார் பாலைவனம் மற்றும் வட இந்தியாவில் நிலவும் வெப்பக் காற்றழுத்த தாழ்வு மண்டலம் காற்றை ஈர்க்கிறது." },
            { pt: 3, text: "Two branches: Peninsular shape splits monsoon into Arabian Sea branch and Bay of Bengal branch.", taText: "இரு கிளைகள்: இந்திய தீபகற்ப வடிவம் இக்காற்றை அரபிக்கடல் கிளை மற்றும் வங்கக்கடல் கிளை என இரண்டாகப் பிரிக்கிறது." },
            { pt: 4, text: "Arabian Sea branch: Strikes Western Ghats, causing heavy orographic rainfall over 250 cm.", taText: "அரபிக்கடல் கிளை: மேற்குத் தொடர்ச்சி மலையில் மோதி மேற்கு கடலோரத்தில் 250 செ.மீ-க்கு மேல் கனமழை பொழிகிறது." },
            { pt: 5, text: "Rain shadow effect: Tamil Nadu remains dry as it lies on the leeward side of Western Ghats.", taText: "மழை மறைவுப் பிரதேசம்: மேற்குத் தொடர்ச்சி மலையின் கிழக்கு சரிவில் உள்ளதால் தமிழ்நாடு கோடையில் வறண்டு காணப்படுகிறது." },
            { pt: 6, text: "Bay of Bengal branch: Channels into Assam valley and Garo-Khasi hills.", taText: "வங்கக்கடல் கிளை: வடகிழக்கு நோக்கி நகர்ந்து காரோ, காசி குன்றுகளில் மழையைத் தருகிறது." },
            { pt: 7, text: "Mawsynram record: Trapped moisture funnel causes world's highest rainfall of 1,141 cm.", taText: "மௌசின்ராம் சாதனை: காசி குன்றுகளின் புனல் வடிவ அமைப்பால் உலகின் அதிகபட்ச 1,141 செ.மீ மழை பெய்கிறது." },
            { pt: 8, text: "Himalayan deflection: Blocked by towering peaks, winds turn westward along Gangetic plains.", taText: "இமயமலைத் தடுப்பு: இமயமலையில் மோதும் காற்று மேற்கு நோக்கித் திரும்பி கங்கைச் சமவெளியில் மழையைத் தருகிறது." },
            { pt: 9, text: "Agricultural lifeline: Supplies over 75% of India's annual precipitation for Kharif crops.", taText: "வேளாண் ஆதாரம்: இந்தியாவின் 75% கரீப் பயிர் சாகுபடிக்கு இப் பருவக்காற்றே அடிப்படை நீராதாரமாகும்." },
            { pt: 10, text: "Retreating transition: Weakens by September, paving the way for the Northeast monsoon.", taText: "பருவக்காற்று பின்வாங்குதல்: செப்டம்பரில் வலுவிழந்து அக்டோபரில் வடகிழக்கு பருவக்காற்றாக மாறுகிறது." }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 2: Types of Natural Vegetation & Forest Resources
    // -------------------------------------------------------------
    {
      id: "sec_soc_em_6_2",
      title: "Section 2: Types of Natural Vegetation & Wildlife Conservation",
      author: "Geography - Unit 2: Climate and Natural Vegetation",
      questions: [
        {
          id: "soc_em_6_5",
          type: "2m",
          mark: "2 Marks",
          examTag: "Board Exam",
          q: "Write a short note on Mangrove (Tidal) Forests in India.",
          ans: `<div style="line-height:1.7;">
            • Mangrove forests thrive in coastal saline wetlands, river deltas, and tidal estuaries.<br>
            • The <b>Sundarbans</b> formed in the Ganga-Brahmaputra delta is the world's largest mangrove forest reserve.<br>
            • In Tamil Nadu, prominent mangrove ecosystems exist at <b>Pichavaram (near Chidambaram)</b> and Muthupet (trees: Sundari, Avicennia, Rhizophora).
          </div>`,
          ansTamil: "உவர் நீரில் வளரும் கழிமுகக் காடுகள். சுந்தரவனம் உலகளவில் பெரியது; தமிழ்நாட்டில் பிச்சாவரத்தில் உள்ளது."
        },
        {
          id: "soc_em_6_6",
          type: "5m",
          mark: "5 Marks",
          examTag: "Board Exam 5M High Yield",
          q: "Describe the various types of natural vegetation found in India along with their characteristic trees.",
          ans: `<div style="line-height:1.7;">
            <b>1. Tropical Evergreen Forests:</b><br>
            • Found in regions with annual rainfall > 200 cm (Western Ghats, Assam, Andaman Islands).<br>
            • Dense canopy prevents sunlight from reaching the floor; trees do not shed leaves simultaneously.<br>
            • Characteristic trees: <b>Rubber, Ebony, Mahogany, Rosewood, Bamboo</b>.<br><br>
            <b>2. Tropical Deciduous Forests ('Monsoon Forests'):</b><br>
            • Most extensive forest belt in India receiving 100 to 200 cm rainfall.<br>
            • Shed their leaves for 6 to 8 weeks during dry spring/summer to conserve moisture.<br>
            • Characteristic trees: <b>Teak, Sal, Sandalwood, Rosewood, Padauk</b>.<br><br>
            <b>3. Tropical Thorn Forests:</b><br>
            • Found in arid and semi-arid tracts with rainfall < 50 cm (Rajasthan, Gujarat, Deccan plateau).<br>
            • Possess deep root systems, thick fleshy stems, and xerophytic sharp thorns.<br>
            • Characteristic trees: <b>Acacia (Babul), Wild Date Palm, Cacti, Khair</b>.<br><br>
            <b>4. Montane (Himalayan / Alpine) Forests:</b><br>
            • Vegetation alters with altitude along Himalayan slopes and Nilgiri hills.<br>
            • Characteristic trees: <b>Oak, Chestnut, Coniferous Pine, Deodar, Silver Fir, Spruce</b>.<br><br>
            <b>5. Mangrove / Tidal Forests:</b><br>
            • Occur in estuarine deltas submerged under tidal waters (Sundarbans, Pichavaram).<br>
            • Characteristic trees: <b>Sundari, Rhizophora, Avicennia</b>.
          </div>`,
          ansTamil: "பசுமைமாறா காடுகள் (ரப்பர், எபனி), இலையுதிர் காடுகள் (தேக்கு, சால்), முட்புதர் காடுகள் (கருவேலம்), மலைக்காடுகள் (பைன், ஓக்), சதுப்புநில காடுகள் (சுந்தரி மரம்) என 5 வகைப்படும்.",
          checkpoints: [
            { pt: 1, text: "Natural vegetation: Plant community growing naturally without direct human interference.", taText: "இயற்கை தாவரங்கள்: மனித தலையீடின்றி இயற்கையாக நிலப்பரப்பில் வளரும் தாவரத் தொகுதி ஆகும்." },
            { pt: 2, text: "Evergreen criteria: Annual rainfall exceeding 200 cm and humidity above 70%.", taText: "பசுமைமாறா காடுகள்: ஆண்டு மழை 200 செ.மீ-க்கு மேலும், வெப்பநிலை 22°C-க்கு மேலும் உள்ள இடங்களில் வளர்கின்றன." },
            { pt: 3, text: "Evergreen species: Dense canopies yield valuable Rosewood, Mahogany, Ebony, and Rubber.", taText: "பசுமைமாறா மரங்கள்: அடர்ந்த மரங்களான எபனி, மஹோகனி, ரோஸ்வுட், ரப்பர் மற்றும் மூங்கில்." },
            { pt: 4, text: "Deciduous dominance: Most widespread forest type in India receiving 100-200 cm rain.", taText: "இலையுதிர் காடுகள்: இந்தியாவில் அதிக பரப்பளவில் பரவியுள்ள பருவக்காற்றுக் காடுகள் ஆகும் (100-200 செ.மீ மழை)." },
            { pt: 5, text: "Commercial timber: Teak and Sal provide the most valuable commercial timber.", taText: "பொருளாதார மதிப்பு: தேக்கு, சால், சந்தன மரம் மற்றும் வேங்கை சிறந்த மரப் பலகைகளைத் தருகின்றன." },
            { pt: 6, text: "Thorn adaptations: Deep roots and fleshy xerophytic thorns survive in under 50 cm rainfall.", taText: "முட்புதர் காடுகள்: 50 செ.மீ-க்கும் குறைவான வறண்ட பகுதிகளில் கருவேலம், பனை, கள்ளி வளர்கின்றன." },
            { pt: 7, text: "Montane zonations: Coniferous pines, firs, and deodars dominate Himalayan elevations.", taText: "மலைக் காடுகள்: இமயமலையின் உயரத்தில் கூம்பு வடிவ ஊசி இலை மரங்களான பைன், தேவதாரு வளர்கின்றன." },
            { pt: 8, text: "Sundarbans delta: The Ganga-Brahmaputra delta forms the world's largest mangrove forest.", taText: "சுந்தரவனம்: கங்கை-பிரம்மபுத்திரா டெல்டா உலகின் மிகப்பெரிய சதுப்புநில சுந்தரவனக் காடாகும்." },
            { pt: 9, text: "Pichavaram wetland: Tamil Nadu's prime mangrove wetland situated near Chidambaram.", taText: "பிச்சாவரம்: கடலூர் மாவட்டம் சிதம்பரத்திற்கு அருகே அமைந்துள்ள புகழ்பெற்ற சதுப்புநிலக் காடு." },
            { pt: 10, text: "Biosphere reserves: 18 designated reserves conserve biodiversity (Nilgiri, Gulf of Mannar).", taText: "உயிர்க்கோளக் காப்பகங்கள்: இந்தியாவில் உள்ள 18 காப்பகங்களில் நீலகிரி மற்றும் மன்னார் வளைகுடா முக்கியமானவை." }
          ]
        }
      ]
    }
  ]
};
