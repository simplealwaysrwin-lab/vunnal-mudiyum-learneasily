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
          ans: "Answer: <b>B) Meghalaya</b><br>Explanation: Mawsynram is located on the Khasi Hills in Meghalaya and records a world-record average rainfall of 1,141 cm annually."
        },
        {
          id: "soc_em_6_2",
          type: "1m",
          mark: "1 Mark",
          examTag: "Govt Model",
          q: "Which forest type in India is popularly referred to as 'Monsoon Forests'?",
          options: ["A) Tropical Evergreen Forests", "B) Tropical Deciduous Forests", "C) Mangrove Forests", "D) Thorn Forests"],
          ans: "Answer: <b>B) Tropical Deciduous Forests</b><br>Explanation: Tropical Deciduous forests grow in regions receiving 100 to 200 cm of seasonal monsoon rain and shed their leaves during dry summer (Teak, Sal, Sandalwood)."
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
          </div>`
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
          checkpoints: [
            { pt: 1, text: "Monsoon burst: Arrives suddenly over the Kerala coast during the first week of June." },
            { pt: 2, text: "Low pressure pull: Intense summer heat over Thar Desert and Tibetan plateau pulls moist maritime winds." },
            { pt: 3, text: "Two branches: Peninsular shape splits monsoon into Arabian Sea branch and Bay of Bengal branch." },
            { pt: 4, text: "Arabian Sea branch: Strikes Western Ghats, causing heavy orographic rainfall over 250 cm." },
            { pt: 5, text: "Rain shadow effect: Tamil Nadu remains dry as it lies on the leeward side of Western Ghats." },
            { pt: 6, text: "Bay of Bengal branch: Channels into Assam valley and Garo-Khasi hills." },
            { pt: 7, text: "Mawsynram record: Trapped moisture funnel causes world's highest rainfall of 1,141 cm." },
            { pt: 8, text: "Himalayan deflection: Blocked by towering peaks, winds turn westward along Gangetic plains." },
            { pt: 9, text: "Agricultural lifeline: Supplies over 75% of India's annual precipitation for Kharif crops." },
            { pt: 10, text: "Retreating transition: Weakens by September, paving the way for the Northeast monsoon." }
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
          </div>`
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
          checkpoints: [
            { pt: 1, text: "Natural vegetation: Plant community growing naturally without direct human interference." },
            { pt: 2, text: "Evergreen criteria: Annual rainfall exceeding 200 cm and humidity above 70%." },
            { pt: 3, text: "Evergreen species: Dense canopies yield valuable Rosewood, Mahogany, Ebony, and Rubber." },
            { pt: 4, text: "Deciduous dominance: Most widespread forest type in India receiving 100-200 cm rain." },
            { pt: 5, text: "Commercial timber: Teak and Sal provide the most valuable commercial timber." },
            { pt: 6, text: "Thorn adaptations: Deep roots and fleshy xerophytic thorns survive in under 50 cm rainfall." },
            { pt: 7, text: "Montane zonations: Coniferous pines, firs, and deodars dominate Himalayan elevations." },
            { pt: 8, text: "Sundarbans delta: The Ganga-Brahmaputra delta forms the world's largest mangrove forest." },
            { pt: 9, text: "Pichavaram wetland: Tamil Nadu's prime mangrove wetland situated near Chidambaram." },
            { pt: 10, text: "Biosphere reserves: 18 designated reserves conserve biodiversity (Nilgiri, Gulf of Mannar)." }
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
          q: "On the given outline map of India, mark and label the following geographical features related to Climate and Natural Vegetation:<br>1. Mawsynram (Wettest place in the world - 1,141 cm rainfall in Khasi Hills, Meghalaya)<br>2. Tropical Evergreen Forests (Western slopes of Western Ghats & Northeast India hill states)<br>3. Sundarbans (Tidal Mangrove Forest in the Ganga-Brahmaputra Delta)<br>4. Thar Desert (Arid Thorny Scrub Vegetation region of western Rajasthan)<br>5. Nilgiri Biosphere Reserve (India's first biosphere reserve established in 1986)<br>6. Gulf of Mannar Marine Biosphere Reserve (Southeastern coast of Tamil Nadu)<br>7. South-West Monsoon Winds (Arabian Sea branch & Bay of Bengal branch)",
          ans: `<div style="line-height:1.8;">
            <b style="color:#0284c7; font-size:15px;">Climate, Rainfall & Natural Vegetation Map Guide:</b><br><br>
            <b>1. Mawsynram:</b> Located in the Khasi Hills of Meghalaya; receives the highest average annual rainfall in the world (1,141 cm) due to the funnel-shaped relief trapping moisture-laden Bay of Bengal monsoon winds.<br>
            <b>2. Tropical Evergreen Forests:</b> Found in areas receiving more than 200 cm rainfall: (a) A narrow continuous strip along the windward western slopes of the Western Ghats (Kerala, Karnataka, Maharashtra), (b) Upper Assam and Arunachal Pradesh foothills in Northeast India, and (c) Andaman and Nicobar Islands.<br>
            <b>3. Sundarbans Mangrove Forest:</b> World's largest tidal halophytic mangrove delta located at the coastal mouth of Ganga and Brahmaputra in West Bengal (Sundari trees, Royal Bengal Tiger). Must be marked at the coast, distinctly from inland forests.<br>
            <b>4. Thar Desert:</b> Arid desert scrub and thorny vegetation in western Rajasthan receiving less than 25 cm annual rainfall (Khejri, Cacti, Babool, Acacia).<br>
            <b>5. Nilgiri Biosphere Reserve:</b> India's first designated biosphere reserve (1986), situated at the mountainous tri-junction of Tamil Nadu, Kerala, and Karnataka.<br>
            <b>6. Gulf of Mannar Marine Biosphere Reserve:</b> India's first marine biosphere reserve located in the shallow waters between southeastern Tamil Nadu and Sri Lanka.<br>
            <b>7. South-West Monsoon Winds:</b> Depict both branches using directional arrows: (a) <i>Arabian Sea branch</i> striking the Western Ghats from south-west to north-east, and (b) <i>Bay of Bengal branch</i> moving north-east into Assam and recurving westward along the Himalayas across the Gangetic plain.<br><br>
            <div style="background:#eff6ff; border-left:4px solid #2563eb; padding:10px 14px; border-radius:6px; font-size:13px; color:#1e40af;">
              <b>🎯 Critical Board Exam Traps & Rules:</b><br>
              • <b>Deciduous vs. Evergreen:</b> Never shade Bihar, Jharkhand, or inland Gangetic plains as Evergreen! They receive 100–200 cm rainfall and are strictly <i>Tropical Deciduous (Moist & Dry Deciduous) Forests</i>.<br>
              • <b>Sundarbans:</b> Shade specifically as <i>Mangrove / Tidal Forest</i> at the delta shoreline, never merged with inland evergreen.<br>
              • <b>Monsoon Winds:</b> Always draw both the Arabian Sea and Bay of Bengal branches to secure full marks.
            </div>
          </div>`,
          explanation: "Accurate cartographic distribution of high-rainfall zones, monsoon wind branches, biosphere reserves, and natural forest ecosystems in India.",
          diagramImg: "images/soc_climate_map.jpg",
          diagramCaption: "India Map: Climate, Rainfall Zones, Monsoon Branches and Natural Vegetation of India"
        }
      ]
    }
  ]
};

if (typeof window !== 'undefined') { window.SOCIAL_EM_UNIT_6_DATA = SOCIAL_EM_UNIT_6_DATA; }
