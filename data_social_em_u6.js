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
          type: "8m",
          mark: "8 Marks",
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
          type: "8m",
          mark: "8 Marks",
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
  ,
    {
      id: "sec_soc_em_6_map",
      title: "Map Identification & Practice: Climate & Vegetation (8M)",
      author: "Geography Unit 2 Map Tutor",
      questions: [
        {
          id: "soc_em_6_map_1",
          type: "8m",
          mark: "5 / 8 Marks Map",
          examYear: "2024",
          examTag: "Board Exam Model Map",
          isImportant: true,
          q: "On the given outline map of India, mark and label the following geographical features related to Climate and Natural Vegetation:<br>1. Mawsynram (Wettest place in the world - 1141 cm rainfall)<br>2. Tropical Evergreen Forest belt along the Western Coast<br>3. Sundarbans Mangrove Forest (Ganga-Brahmaputra Delta)<br>4. Thar Desert Arid Scrub Vegetation region<br>5. Nilgiri Biosphere Reserve (India's first biosphere reserve)<br>6. Gulf of Mannar Marine Biosphere Reserve<br>7. Direction of South-West Monsoon Winds (Arabian Sea branch)",
          ans: `<div style="line-height:1.8;">
            <b style="color:#0284c7; font-size:15px;">Climate, Rainfall & Natural Vegetation Map Guide:</b><br><br>
            <b>1. Mawsynram:</b> Located in the Khasi Hills of Meghalaya; receives the highest average annual rainfall in the world (1,141 cm) due to the funnel-shaped relief trapping Bay of Bengal monsoon winds.<br>
            <b>2. Tropical Evergreen Forests:</b> Dense evergreen belt along the windward slopes of the Western Ghats receiving more than 200 cm rainfall (Rosewood, Ebony, Mahogany, Bamboo).<br>
            <b>3. Sundarbans:</b> World's largest tidal halophytic mangrove forest situated in the Ganga-Brahmaputra delta across West Bengal (Sundari trees, Royal Bengal Tiger habitat).<br>
            <b>4. Thar Desert:</b> Arid desert scrub and thorny vegetation in western Rajasthan receiving less than 25 cm annual rainfall (Khejri, Cacti, Babool).<br>
            <b>5. Nilgiri Biosphere Reserve:</b> India's first designated biosphere reserve (1986), situated at the tri-junction of Tamil Nadu, Kerala, and Karnataka.<br>
            <b>6. Gulf of Mannar Marine Biosphere Reserve:</b> India's first marine biosphere reserve located off the southeastern coast of Tamil Nadu.<br>
            <b>7. South-West Monsoon Winds:</b> Southwest to northeast wind arrows depicting the Arabian Sea branch striking the Western Ghats.<br><br>
            <div style="background:#eff6ff; border-left:4px solid #2563eb; padding:10px 14px; border-radius:6px; font-size:13px; color:#1e40af;">
              <b>ðŸŽ¯ Board Exam Tip:</b> Clearly distinguish forest shading (dark green for evergreen, striped green for mangroves) and use distinct direction arrows for the South-West Monsoon.
            </div>
          </div>`,
          explanation: "Distribution of high-rainfall zones, monsoon wind trajectories, and natural forest ecosystems in India.",
          diagramSvg: `<svg viewBox="0 0 1000 1150" style="width:100%; max-width:650px; height:auto; margin:10px auto; display:block; background:#0a192f; border-radius:12px; border:1px solid #334155; box-shadow:0 4px 20px rgba(0,0,0,0.4);" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="oceanG_em_u6" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0a192f"/><stop offset="100%" stop-color="#030c1b"/></linearGradient>
              <linearGradient id="landG_em_u6" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1e293b"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
            </defs>
            <rect width="1000" height="1150" fill="url(#oceanG_em_u6)"/>
            <path fill="url(#landG_em_u6)" stroke="#38bdf8" stroke-width="2.5" stroke-linejoin="round" d="M 370 40 C 385 30, 415 30, 430 45 C 450 65, 460 95, 450 120 C 470 125, 495 140, 485 165 C 465 175, 445 190, 430 215 C 415 235, 400 245, 375 250 C 350 255, 330 270, 315 295 C 300 315, 275 330, 255 350 C 235 370, 215 390, 205 420 C 195 440, 160 455, 140 480 C 120 500, 155 520, 190 525 C 220 530, 240 515, 255 530 C 265 545, 250 560, 220 575 C 195 590, 175 605, 195 625 C 225 635, 260 620, 280 600 C 295 580, 275 605, 270 638 C 265 670, 285 710, 305 750 C 325 790, 345 830, 365 870 C 385 910, 405 950, 420 990 C 425 1000, 435 995, 440 980 C 455 940, 465 900, 475 860 C 485 820, 495 780, 520 750 C 545 720, 575 690, 605 660 C 635 630, 660 600, 640 570 C 625 550, 645 530, 665 515 C 685 500, 695 480, 675 465 C 655 450, 630 460, 615 440 C 600 420, 580 405, 560 395 C 540 380, 560 360, 585 345 C 610 330, 635 315, 660 305 C 685 295, 715 295, 730 315 C 745 330, 775 320, 805 325 C 835 330, 860 345, 855 365 C 850 385, 825 395, 800 405 C 780 415, 755 435, 775 455 C 795 470, 770 490, 745 490 C 720 490, 705 470, 680 475 C 660 480, 645 495, 630 515 C 615 535, 585 550, 560 565 C 530 585, 510 610, 490 635 C 540 700, 570 670, 595 640 C 615 615, 630 585, 640 555 C 645 530, 625 510, 605 490 C 585 470, 565 440, 545 410 C 525 380, 505 350, 485 320 C 465 290, 445 260, 425 230 C 405 200, 385 170, 375 140 C 365 110, 360 70, 370 40 Z"/>
            <path fill="url(#landG_em_u6)" stroke="#38bdf8" stroke-width="2" d="M 470 940 C 490 925, 515 940, 520 965 C 525 990, 510 1020, 490 1040 C 475 1050, 460 1045, 455 1025 C 450 1000, 455 960, 470 940 Z"/>
            <!-- 1. Thar Desert -->
            <path d="M 210 360 C 260 340, 300 370, 310 420 C 315 450, 290 480, 240 480 C 190 475, 180 420, 210 360 Z" fill="rgba(245, 158, 11, 0.3)" stroke="#f59e0b" stroke-width="3" stroke-dasharray="6,4" />
            <text x="200" y="345" fill="#f59e0b" font-size="18" font-weight="900">Thar Desert (Arid Scrub)</text>
            <!-- 2. Mawsynram -->
            <circle cx="730" cy="360" r="10" fill="#00f0ff" stroke="#ffffff" stroke-width="2.5" />
            <text x="745" y="365" fill="#00f0ff" font-size="18" font-weight="900">ðŸŒ§ï¸ Mawsynram (1141 cm)</text>
            <!-- 3. Sundarbans -->
            <path d="M 670 515 C 695 510, 730 515, 745 535 C 735 555, 700 565, 680 550 Z" fill="rgba(16, 185, 129, 0.4)" stroke="#10b981" stroke-width="3" />
            <text x="735" y="540" fill="#10b981" font-size="18" font-weight="900">Sundarbans Mangroves</text>
            <!-- 4. Western Ghats Evergreen Belt -->
            <path d="M 270 650 Q 285 750 345 880" fill="none" stroke="#22c55e" stroke-width="8" stroke-linecap="round" opacity="0.75" />
            <text x="140" y="740" fill="#22c55e" font-size="17" font-weight="900">Evergreen Forests</text>
            <!-- 5. Nilgiri Biosphere -->
            <circle cx="370" cy="875" r="8" fill="#14b8a6" stroke="#ffffff" stroke-width="2" />
            <text x="240" y="870" fill="#14b8a6" font-size="16" font-weight="900">Nilgiri Biosphere</text>
            <!-- 6. Gulf of Mannar Biosphere -->
            <ellipse cx="450" cy="970" rx="35" ry="20" fill="rgba(6, 182, 212, 0.3)" stroke="#06b6d4" stroke-width="2.5" stroke-dasharray="6,3" />
            <text x="495" y="975" fill="#06b6d4" font-size="18" font-weight="900">Gulf of Mannar Biosphere</text>
            <!-- 7. SW Monsoon Wind Arrows -->
            <g stroke="#38bdf8" stroke-width="3" stroke-linecap="round" opacity="0.8">
              <line x1="160" y1="840" x2="220" y2="780" /><polygon points="220,780 205,785 215,795" fill="#38bdf8"/>
              <line x1="200" y1="920" x2="260" y2="860" /><polygon points="260,860 245,865 255,875" fill="#38bdf8"/>
              <text x="70" y="880" fill="#38bdf8" font-size="15" font-weight="800">SW Monsoon Winds âž”</text>
            </g>
          </svg>`,
          diagramCaption: "India Map: Climate, Rainfall Zones and Natural Vegetation of India"
        }
      ]
    }
  ]
};
