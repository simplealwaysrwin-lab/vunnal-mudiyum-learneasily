// =============================================================================
// 10th Social Science - Interactive Official Blank Map Marking & Matching Engine
// Supports Official Exam Paper World Map & India Map • Free Marking & Point-and-Match
// =============================================================================

(function() {
  'use strict';

  // ---------------------------------------------------------------------------
  // 1. CURRICULUM MAP DATABASE (Calibrated to Official Board Exam Blank Maps)
  // ---------------------------------------------------------------------------
  const CURRICULUM_MAP_DATABASE = {
    // Board Exam Model 8 Places (Question 43 - Compulsory 8 Marks)
    "board_model": {
      id: "board_model",
      titleTamil: "அரசு பொதுத்தேர்வு மாதிரி வரைபடம் (வினா எண் 43 - 8 மதிப்பெண்கள்)",
      titleEnglish: "Board Exam Model Map (Question 43 - 8 Marks)",
      officialImage: "images/soc_soils_map.jpg",
      mapType: "india",
      viewBox: "0 0 1000 1150",
      maxMarks: 8,
      places: [
        {
          id: "ind_eastern_ghats",
          num: 1,
          numLabel: "(i)",
          nameTamil: "கிழக்குத் தொடர்ச்சி மலை",
          nameEnglish: "Eastern Ghats",
          coords: { x: 555, y: 675 },
          tolerance: 50,
          tipTamil: "வங்காள விரிகுடா கடற்கரைக்கு இணையாக ஒடிசா முதல் தமிழ்நாடு வரை உடைந்த குன்றுகளாக வரையவும்.",
          tipEnglish: "Mark broken discontinuous hills parallel to the Bay of Bengal coast from Odisha down to Tamil Nadu."
        },
        {
          id: "ind_gulf_of_mannar",
          num: 2,
          numLabel: "(ii)",
          nameTamil: "மன்னார் வளைகுடா",
          nameEnglish: "Gulf of Mannar",
          coords: { x: 450, y: 970 },
          tolerance: 45,
          tipTamil: "பாக் நீர்சந்திக்கு தெற்கே தென்கிழக்கு தமிழ்நாடு மற்றும் இலங்கை இடையே உள்ள கடல் பகுதி.",
          tipEnglish: "Shallow sea located between southeastern Tamil Nadu and Sri Lanka, south of Palk Strait."
        },
        {
          id: "ind_sundarbans",
          num: 3,
          numLabel: "(iii)",
          nameTamil: "சுந்தரவனக் காடுகள்",
          nameEnglish: "Sundarban Delta",
          coords: { x: 700, y: 535 },
          tolerance: 45,
          tipTamil: "மேற்கு வங்காளம் மற்றும் கங்கை-பிரம்மபுத்திரா டெல்டா பகுதியில் உள்ள சதுப்புநில மாங்குரோவ் காடுகள்.",
          tipEnglish: "Tidal mangrove forest delta located at the mouth of River Ganga & Brahmaputra in West Bengal."
        },
        {
          id: "ind_thar_desert",
          num: 4,
          numLabel: "(iv)",
          nameTamil: "பாலை மண் பகுதி (தார் பாலைவனம்)",
          nameEnglish: "Desert Soil Region (Thar Desert)",
          coords: { x: 255, y: 420 },
          tolerance: 50,
          tipTamil: "ராஜஸ்தானின் மேற்குப் பகுதியில் உள்ள வறண்ட மணற்பாங்கான பாலைமண் பகுதி.",
          tipEnglish: "Arid desert soil region spanning western Rajasthan and Thar."
        },
        {
          id: "ind_cauvery",
          num: 5,
          numLabel: "(v)",
          nameTamil: "காவிரி ஆறு",
          nameEnglish: "River Cauvery / Kaveri",
          coords: { x: 430, y: 880 },
          tolerance: 45,
          tipTamil: "கர்நாடகாவின் தலைக்காவேரியில் தொடங்கி தமிழ்நாடு வழியாக வங்காள விரிகுடாவில் கலக்கும் ஆறு.",
          tipEnglish: "Originates at Talakaveri in Coorg, flows through Tamil Nadu into Bay of Bengal at Poompuhar."
        },
        {
          id: "ind_mumbai_port",
          num: 6,
          numLabel: "(vi)",
          nameTamil: "மும்பை துறைமுகம்",
          nameEnglish: "Mumbai Port",
          coords: { x: 285, y: 630 },
          tolerance: 40,
          tipTamil: "மகாராஷ்டிரா கடற்கரையில் அமைந்துள்ள இந்தியாவின் மிகப்பெரிய இயற்கை துறைமுகம்.",
          tipEnglish: "India's premier natural deepwater harbor located on the Konkan Coast of Maharashtra."
        },
        {
          id: "ind_mawsynram",
          num: 7,
          numLabel: "(vii)",
          nameTamil: "அதிக மழைபெறும் பகுதி (மௌசின்ராம்)",
          nameEnglish: "Heavy Rainfall Region (Mawsynram)",
          coords: { x: 745, y: 430 },
          tolerance: 45,
          tipTamil: "மேகாலயாவின் காசி குன்றுகளில் உள்ள உலகிலேயே அதிக மழைபெறும் இடம்.",
          tipEnglish: "Wettest place on Earth situated on the southern slopes of Khasi Hills in Meghalaya."
        },
        {
          id: "ind_cotton_soil",
          num: 8,
          numLabel: "(viii)",
          nameTamil: "பருத்தி விளையும் பகுதி (கரிசல் மண்)",
          nameEnglish: "Cotton Growing Belt (Black Soil)",
          coords: { x: 380, y: 610 },
          tolerance: 50,
          tipTamil: "மகாராஷ்டிரா மற்றும் தக்காண பீடபூமியின் பசால்ட் பாறை கரிசல் மண் பகுதி.",
          tipEnglish: "Regur / Black soil Deccan lava plateau of Maharashtra and Gujarat ideal for cotton cultivation."
        }
      ]
    },

    // Unit 2 Geography: Major Rivers of India
    "soc_rivers": {
      id: "soc_rivers",
      titleTamil: "இந்தியாவின் முக்கிய நதிகள் (புவியியல் அலகு 1 - 8 மதிப்பெண்கள்)",
      titleEnglish: "Major Rivers of India (Geography Unit 1 - 8 Marks)",
      officialImage: "images/soc_rivers_map.jpg",
      mapType: "india",
      viewBox: "0 0 1000 1150",
      maxMarks: 8,
      places: [
        { id: "riv_ganga", num: 1, numLabel: "(1)", nameTamil: "கங்கை ஆறு", nameEnglish: "River Ganga", coords: { x: 520, y: 390 }, tolerance: 45, tipTamil: "இமயமலையில் தொடங்கி உ.பி, பீகார் வழியாக வங்காள விரிகுடாவில் கலக்கும் நதி.", tipEnglish: "Flows east from Uttarakhand through UP and Bihar to Bay of Bengal." },
        { id: "riv_brahmaputra", num: 2, numLabel: "(2)", nameTamil: "பிரம்மபுத்திரா ஆறு", nameEnglish: "River Brahmaputra", coords: { x: 780, y: 380 }, tolerance: 45, tipTamil: "திபெத்தில் சாங்போ எனத் தொடங்கி அசாம் பள்ளத்தாக்கு வழியாகப் பாய்கிறது.", tipEnglish: "Enters India in Arunachal and flows through Assam valley." },
        { id: "riv_godavari", num: 3, numLabel: "(3)", nameTamil: "கோதாவரி ஆறு (தென் கங்கை)", nameEnglish: "River Godavari", coords: { x: 490, y: 640 }, tolerance: 45, tipTamil: "நாசிக்கில் தொடங்கி ஆந்திரா வழியே வங்காள விரிகுடாவில் கலக்கிறது.", tipEnglish: "Longest peninsular river rising in Nasik, Maharashtra." },
        { id: "riv_krishna", num: 4, numLabel: "(4)", nameTamil: "கிருஷ்ணா ஆறு", nameEnglish: "River Krishna", coords: { x: 450, y: 720 }, tolerance: 45, tipTamil: "மகாபலேஸ்வரில் தொடங்கி கர்நாடகா, ஆந்திரா வழி பாய்கிறது.", tipEnglish: "Rises at Mahabaleshwar and flows eastward to Bay of Bengal." },
        { id: "riv_kaveri", num: 5, numLabel: "(5)", nameTamil: "காவிரி ஆறு", nameEnglish: "River Kaveri", coords: { x: 420, y: 880 }, tolerance: 45, tipTamil: "குடகின் தலைக்காவிரியில் தொடங்கி தமிழ்நாடு வழி வங்கக்கடலில் கலக்கிறது.", tipEnglish: "Rises in Talakaveri (Karnataka) and flows through Tamil Nadu." },
        { id: "riv_narmada", num: 6, numLabel: "(6)", nameTamil: "நர்மதை ஆறு", nameEnglish: "River Narmada", coords: { x: 370, y: 555 }, tolerance: 45, tipTamil: "அமர்கண்டக்கில் தொடங்கி விந்திய-சாத்பூரா இடையே மேற்கே பாய்ந்து அரபிக்கடலில் கலக்கிறது.", tipEnglish: "Flows west in a rift valley between Vindhya and Satpura ranges." },
        { id: "riv_tapti", num: 7, numLabel: "(7)", nameTamil: "தபதி ஆறு", nameEnglish: "River Tapti", coords: { x: 360, y: 585 }, tolerance: 45, tipTamil: "மத்தியப் பிரதேசத்தில் தொடங்கி நர்மதைக்கு தெற்கே மேற்கே அரபிக்கடலில் கலக்கிறது.", tipEnglish: "Twin sister of Narmada flowing west into Gulf of Khambhat." },
        { id: "riv_mahanadi", num: 8, numLabel: "(8)", nameTamil: "மகாநதி ஆறு", nameEnglish: "River Mahanadi", coords: { x: 600, y: 580 }, tolerance: 45, tipTamil: "சத்தீஸ்கரில் தொடங்கி ஒடிசா வழியாக வங்காள விரிகுடாவில் கலக்கிறது.", tipEnglish: "Rises in Chhattisgarh and flows through Odisha into Bay of Bengal." }
      ]
    },

    // Unit 3 Geography: Major Sea Ports of India
    "soc_ports": {
      id: "soc_ports",
      titleTamil: "இந்தியாவின் முக்கிய துறைமுகங்கள் (புவியியல் அலகு 2 - 8 மதிப்பெண்கள்)",
      titleEnglish: "Major Sea Ports of India (Geography Unit 2 - 8 Marks)",
      officialImage: "images/soc_ports_map.jpg",
      mapType: "india",
      viewBox: "0 0 1000 1150",
      maxMarks: 8,
      places: [
        { id: "port_kolkata", num: 1, numLabel: "(1)", nameTamil: "கொல்கத்தா துறைமுகம் (ஹால்டியா)", nameEnglish: "Kolkata Port (Haldia)", coords: { x: 700, y: 530 }, tolerance: 40, tipTamil: "ஹூக்ளி நதிக்கரையில் அமைந்துள்ள இந்தியாவின் பழமையான நதிமுக துறைமுகம்.", tipEnglish: "Riverine port situated on the Hooghly river in West Bengal." },
        { id: "port_paradeep", num: 2, numLabel: "(2)", nameTamil: "பாராதீப் துறைமுகம்", nameEnglish: "Paradeep Port", coords: { x: 640, y: 615 }, tolerance: 40, tipTamil: "ஒடிசா கடற்கரையில் இரும்புத்தாது ஏற்றுமதி செய்யும் ஆழ்கடல் துறைமுகம்.", tipEnglish: "Deepwater port on the Odisha coast primarily exporting iron ore." },
        { id: "port_visakhapatnam", num: 3, numLabel: "(3)", nameTamil: "விசாகப்பட்டினம் துறைமுகம்", nameEnglish: "Visakhapatnam Port", coords: { x: 580, y: 690 }, tolerance: 40, tipTamil: "ஆந்திர கடற்கரையில் டால்பின் நோஸ் குன்றுகளால் சூழப்பட்ட இயற்கை துறைமுகம்.", tipEnglish: "Landlocked natural harbor protected by the Dolphin's Nose hill." },
        { id: "port_chennai", num: 4, numLabel: "(4)", nameTamil: "சென்னை துறைமுகம்", nameEnglish: "Chennai Port", coords: { x: 500, y: 830 }, tolerance: 40, tipTamil: "தமிழ்நாட்டின் தலைநகரில் அமைந்துள்ள செயற்கை துறைமுகம்.", tipEnglish: "Major artificial harbor and historical gateway of South India." },
        { id: "port_tuticorin", num: 5, numLabel: "(5)", nameTamil: "தூத்துக்குடி துறைமுகம் (வ.உ.சி)", nameEnglish: "Tuticorin Port (V.O.C)", coords: { x: 430, y: 960 }, tolerance: 40, tipTamil: "மன்னார் வளைகுடா பகுதியில் அமைந்துள்ள தென் தமிழ்நாட்டின் ஆழ்கடல் துறைமுகம்.", tipEnglish: "Artificial all-weather deepsea port located in Gulf of Mannar." },
        { id: "port_mumbai", num: 6, numLabel: "(6)", nameTamil: "மும்பை துறைமுகம்", nameEnglish: "Mumbai Port", coords: { x: 285, y: 630 }, tolerance: 40, tipTamil: "மகாராஷ்டிராவின் மிகப்பெரிய இயற்கை துறைமுகம்.", tipEnglish: "Premier natural deepwater harbor of India on Arabian Sea." },
        { id: "port_cochin", num: 7, numLabel: "(7)", nameTamil: "கொச்சி துறைமுகம்", nameEnglish: "Cochin Port", coords: { x: 340, y: 925 }, tolerance: 40, tipTamil: "வேம்பநாட்டு காயலில் அமைந்துள்ள அரபிக்கடலின் ராணி.", tipEnglish: "Natural harbor on Willingdon Island, Queen of the Arabian Sea." },
        { id: "port_kandla", num: 8, numLabel: "(8)", nameTamil: "கண்ட்லா துறைமுகம் (தீனதயாள்)", nameEnglish: "Kandla Port (Deendayal)", coords: { x: 200, y: 490 }, tolerance: 40, tipTamil: "குஜராத்தின் கட்ச் வளைகுடாவில் அமைந்துள்ள ஓதத் துறைமுகம்.", tipEnglish: "Tidal port situated at the head of Gulf of Kutch in Gujarat." }
      ]
    },

    // Unit 10 Geography: Soils, Crops and Dams of India
    "soc_soils": {
      id: "soc_soils",
      titleTamil: "மண் வகைகள், பயிர்கள் & அணைகள் (புவியியல் அலகு 3 - 8 மதிப்பெண்கள்)",
      titleEnglish: "Soils, Crops & Multipurpose Dams of India (Geography Unit 3 - 8 Marks)",
      officialImage: "images/soc_soils_map.jpg",
      mapType: "india",
      viewBox: "0 0 1000 1150",
      maxMarks: 8,
      places: [
        { id: "soil_alluvial", num: 1, numLabel: "(1)", nameTamil: "வண்டல் மண் பகுதி (கங்கை சமவெளி)", nameEnglish: "Alluvial Soil (Indo-Gangetic Plain)", coords: { x: 480, y: 330 }, tolerance: 50, tipTamil: "வட இந்திய சிந்து-கங்கை சமவெளிப் பகுதி.", tipEnglish: "Extensive fertile plains of Uttar Pradesh and Bihar." },
        { id: "soil_black", num: 2, numLabel: "(2)", nameTamil: "கரிசல் மண் (தக்காண பீடபூமி)", nameEnglish: "Black / Regur Soil (Deccan Trap)", coords: { x: 370, y: 600 }, tolerance: 50, tipTamil: "மகாராஷ்டிரா, குஜராத்தின் பருத்தி விளையும் கரிசல் மண் பகுதி.", tipEnglish: "Cotton growing basalt plateau of Maharashtra and Gujarat." },
        { id: "soil_red", num: 3, numLabel: "(3)", nameTamil: "செம்மண் பகுதி (தமிழ்நாடு)", nameEnglish: "Red Soil Region (Tamil Nadu)", coords: { x: 420, y: 870 }, tolerance: 50, tipTamil: "தமிழ்நாடு மற்றும் தென்னிந்திய பீடபூமிப் பகுதி.", tipEnglish: "Peninsular plateau and majority of Tamil Nadu." },
        { id: "soil_laterite", num: 4, numLabel: "(4)", nameTamil: "சரளை மண் பகுதி (மேற்கு தொடர்ச்சி மலை)", nameEnglish: "Laterite Soil Region (Western Ghats)", coords: { x: 330, y: 830 }, tolerance: 50, tipTamil: "மேற்கு தொடர்ச்சி மலையின் கனமழை பெய்யும் சரிவுப் பகுதி.", tipEnglish: "High rainfall slopes along the Western Ghats." },
        { id: "crop_rice", num: 5, numLabel: "(5)", nameTamil: "நெல் விளையும் பகுதி (மேற்கு வங்கம்)", nameEnglish: "Rice Cultivation Belt (West Bengal)", coords: { x: 690, y: 480 }, tolerance: 50, tipTamil: "மேற்கு வங்காளம் மற்றும் டெல்டா பகுதிகள்.", tipEnglish: "Leading paddy growing state in the fertile Gangetic delta." },
        { id: "crop_wheat", num: 6, numLabel: "(6)", nameTamil: "கோதுமை விளையும் பகுதி (பஞ்சாப்)", nameEnglish: "Wheat Cultivation Belt (Punjab)", coords: { x: 300, y: 270 }, tolerance: 50, tipTamil: "பஞ்சாப் மற்றும் ஹரியானா சமவெளிப் பகுதி.", tipEnglish: "Green Revolution wheat basket of Punjab and Haryana." },
        { id: "dam_bhakra", num: 7, numLabel: "(7)", nameTamil: "பக்ரா நங்கல் அணை (சட்லஜ் நதி)", nameEnglish: "Bhakra Nangal Dam (River Sutlej)", coords: { x: 330, y: 240 }, tolerance: 42, tipTamil: "இமாச்சல-பஞ்சாப் எல்லையில் சட்லஜ் நதியின் குறுக்கே உள்ள அணை.", tipEnglish: "Highest straight gravity dam across River Sutlej." },
        { id: "dam_mettur", num: 8, numLabel: "(8)", nameTamil: "மேட்டூர் அணை (காவிரி ஆறு)", nameEnglish: "Mettur Dam (River Kaveri)", coords: { x: 420, y: 875 }, tolerance: 42, tipTamil: "தமிழ்நாட்டின் சேலம் மாவட்டத்தில் காவிரி ஆற்றின் குறுக்கே உள்ள அணை.", tipEnglish: "Stanley reservoir across Kaveri in Salem district, Tamil Nadu." }
      ]
    },

    // Unit 6 Geography: Climate & Natural Vegetation
    "soc_climate": {
      id: "soc_climate",
      titleTamil: "காலநிலை & இயற்கை தாவரங்கள் (புவியியல் அலகு 2 - 8 மதிப்பெண்கள்)",
      titleEnglish: "Climate & Natural Vegetation (Geography Unit 2 - 8 Marks)",
      officialImage: "images/soc_climate_map.jpg",
      mapType: "india",
      viewBox: "0 0 1000 1150",
      maxMarks: 8,
      places: [
        { id: "clim_sw_monsoon", num: 1, numLabel: "(1)", nameTamil: "தென்மேற்கு பருவக்காற்று திசை", nameEnglish: "South-West Monsoon Direction", coords: { x: 230, y: 770 }, tolerance: 50, tipTamil: "அரபிக்கடலில் இருந்து கேரளா நோக்கி வீசும் தென்மேற்கு காற்று அம்பு.", tipEnglish: "Arabian Sea branch blowing northeast towards Kerala coast." },
        { id: "clim_ne_monsoon", num: 2, numLabel: "(2)", nameTamil: "வடகிழக்கு பருவக்காற்று திசை", nameEnglish: "North-East Monsoon Direction", coords: { x: 620, y: 740 }, tolerance: 50, tipTamil: "வங்காள விரிகுடாவில் இருந்து தமிழ்நாடு நோக்கி வீசும் வடகிழக்கு காற்று.", tipEnglish: "Retreating monsoon winds bringing rainfall to Tamil Nadu coast." },
        { id: "clim_heavy_rain", num: 3, numLabel: "(3)", nameTamil: "மௌசின்ராம் (அதிக மழைபெறும் பகுதி)", nameEnglish: "Mawsynram (Wettest Place)", coords: { x: 745, y: 430 }, tolerance: 40, tipTamil: "மேகாலயாவின் காசி குன்றுகளில் உள்ள உலகிலேயே அதிக மழைபெறும் இடம்.", tipEnglish: "Cherrapunji/Mawsynram in southern Meghalaya." },
        { id: "clim_low_rain", num: 4, numLabel: "(4)", nameTamil: "குறைந்த மழைபெறும் பகுதி (தார்/ஜெய்சால்மர்)", nameEnglish: "Low Rainfall Region (Thar Desert)", coords: { x: 230, y: 410 }, tolerance: 45, tipTamil: "மேற்கு ராஜஸ்தானில் உள்ள ஆண்டுக்கு 12 செ.மீ-க்கும் குறைவான மழைப்பகுதி.", tipEnglish: "Western Rajasthan receiving under 12 cm rainfall annually." },
        { id: "clim_evergreen", num: 5, numLabel: "(5)", nameTamil: "அயனமண்டல பசுமைமாறா காடுகள்", nameEnglish: "Tropical Evergreen Forests", coords: { x: 330, y: 840 }, tolerance: 45, tipTamil: "மேற்கு தொடர்ச்சி மலையின் மேற்கு சரிவு பகுதி.", tipEnglish: "Western Ghats windward slopes in Kerala & Karnataka." },
        { id: "clim_mangrove", num: 6, numLabel: "(6)", nameTamil: "மாங்குரோவ் காடுகள் (சுந்தரவனம்)", nameEnglish: "Mangrove Forests (Sundarbans)", coords: { x: 700, y: 535 }, tolerance: 42, tipTamil: "கங்கை டெல்டா மற்றும் கடலோர சதுப்புநில காடுகள்.", tipEnglish: "Tidal mangrove vegetation in the Ganga-Brahmaputra delta." },
        { id: "clim_agasthya", num: 7, numLabel: "(7)", nameTamil: "அகத்தியமலை உயிர்க்கோள பெட்டகம்", nameEnglish: "Agasthyamalai Biosphere Reserve", coords: { x: 375, y: 960 }, tolerance: 40, tipTamil: "தெற்கு மேற்கு தொடர்ச்சி மலையில் தமிழ்நாடு-கேரளா எல்லையில் உள்ளது.", tipEnglish: "Southernmost Western Ghats biosphere in Tamil Nadu & Kerala." },
        { id: "clim_nilgiri", num: 8, numLabel: "(8)", nameTamil: "நீலகிரி உயிர்க்கோள பெட்டகம்", nameEnglish: "Nilgiris Biosphere Reserve", coords: { x: 380, y: 880 }, tolerance: 40, tipTamil: "மேற்கு மற்றும் கிழக்கு தொடர்ச்சி மலைகள் இணையுமிட நீலகிரி சந்திப்பு.", tipEnglish: "First UNESCO biosphere reserve where Eastern & Western Ghats meet." }
      ]
    },

    // Unit 4 Geography: Major Industrial Belts & Minerals
    "soc_industry": {
      id: "soc_industry",
      titleTamil: "முக்கிய தொழிலகங்கள் & தாதுக்கள் (புவியியல் அலகு 4 - 8 மதிப்பெண்கள்)",
      titleEnglish: "Major Industrial Belts & Minerals (Geography Unit 4 - 8 Marks)",
      officialImage: "images/soc_industry_map.jpg",
      mapType: "india",
      viewBox: "0 0 1000 1150",
      maxMarks: 8,
      places: [
        { id: "ind_tisco", num: 1, numLabel: "(1)", nameTamil: "ஜாம்ஷெட்பூர் இரும்பு எஃகு ஆலை (டிஸ்கோ)", nameEnglish: "Jamshedpur (TISCO) Steel Plant", coords: { x: 640, y: 520 }, tolerance: 40, tipTamil: "ஜார்க்கண்ட் மாநிலத்தில் உள்ள இந்தியாவின் முதல் ஒருங்கிணைந்த எஃகு ஆலை.", tipEnglish: "First modern iron & steel plant in Jharkhand by J.N. Tata." },
        { id: "ind_salem", num: 2, numLabel: "(2)", nameTamil: "சேலம் இரும்பு எஃகு ஆலை", nameEnglish: "Salem Steel Plant", coords: { x: 420, y: 880 }, tolerance: 40, tipTamil: "தமிழ்நாட்டின் கஞ்சமலையில் உள்ள துருப்பிடிக்காத எஃகு உற்பத்தி ஆலை.", tipEnglish: "Special stainless steel manufacturing unit in Tamil Nadu." },
        { id: "ind_bhilai", num: 3, numLabel: "(3)", nameTamil: "பிலாய் எஃகு ஆலை", nameEnglish: "Bhilai Steel Plant", coords: { x: 530, y: 560 }, tolerance: 40, tipTamil: "சத்தீஸ்கர் மாநிலத்தில் ரஷ்ய உதவியுடன் அமைக்கப்பட்ட எஃகு ஆலை.", tipEnglish: "Major public sector steel plant in Durg district, Chhattisgarh." },
        { id: "ind_mumbai_cotton", num: 4, numLabel: "(4)", nameTamil: "மும்பை பருத்தி நெசவாலை (மான்செஸ்டர்)", nameEnglish: "Mumbai Cotton Textile Hub", coords: { x: 285, y: 630 }, tolerance: 40, tipTamil: "இந்தியாவின் மான்செஸ்டர் எனப்படும் பருத்தி ஆடை தலைநகரம்.", tipEnglish: "Manchester of India with largest concentration of cotton mills." },
        { id: "ind_coimbatore", num: 5, numLabel: "(5)", nameTamil: "கோயம்புத்தூர் (தென்னிந்தியாவின் மான்செஸ்டர்)", nameEnglish: "Coimbatore (Manchester of South India)", coords: { x: 390, y: 890 }, tolerance: 40, tipTamil: "நூற்பாலைகள் நிறைந்த தென்னிந்தியாவின் மான்செஸ்டர்.", tipEnglish: "Leading textile and spinning center of Tamil Nadu." },
        { id: "ind_neyveli", num: 6, numLabel: "(6)", nameTamil: "நெய்வேலி நிலக்கரிச் சுரங்கம் (NLC)", nameEnglish: "Neyveli Lignite Corporation (NLC)", coords: { x: 460, y: 890 }, tolerance: 40, tipTamil: "கடலூர் மாவட்டத்தில் உள்ள பழுப்பு நிலக்கரிச் சுரங்கம்.", tipEnglish: "Largest open-cast brown coal / lignite deposit in Tamil Nadu." },
        { id: "ind_digboi", num: 7, numLabel: "(7)", nameTamil: "டிக்பாய் எண்ணெய் வயல் (அசாம்)", nameEnglish: "Digboi Oil Field (Assam)", coords: { x: 860, y: 320 }, tolerance: 40, tipTamil: "ஆசியாவின் மிகப் பழமையான எண்ணெய் கிணறு உள்ள இடம்.", tipEnglish: "Oldest operating oil refinery in Asia situated in Assam." },
        { id: "ind_bengaluru", num: 8, numLabel: "(8)", nameTamil: "பெங்களூரு (இந்தியாவின் சிலிகான் பள்ளத்தாக்கு)", nameEnglish: "Bengaluru (Silicon Valley of India)", coords: { x: 420, y: 830 }, tolerance: 40, tipTamil: "கர்நாடகாவின் மின்னணு மற்றும் தகவல் தொழில்நுட்ப தலைநகரம்.", tipEnglish: "Electronic and information technology capital of India." }
      ]
    },

    // Unit 1 History: World War I (Official Exam World Map 736x522)
    "soc_ww1": {
      id: "soc_ww1",
      titleTamil: "முதல் உலகப் போர் நாடுகள் (வரலாறு அலகு 1 - 8 மதிப்பெண்கள்)",
      titleEnglish: "World War I Nations & Theaters (History Unit 1 - 8 Marks)",
      officialImage: "images/soc_ww1_map.jpg",
      mapType: "world",
      viewBox: "0 0 736 522",
      maxMarks: 8,
      places: [
        { id: "ww1_britain", num: 1, numLabel: "(1)", nameTamil: "கிரேட் பிரிட்டன் (நேச நாடு)", nameEnglish: "Great Britain (Allied Power)", coords: { x: 358, y: 172 }, tolerance: 35, tipTamil: "ஐரோப்பாவின் வடமேற்கே உள்ள தீவு நாடு; நேச நாடுகளின் தலைமை.", tipEnglish: "Island nation in northwest Europe; leader of Allied naval blockade." },
        { id: "ww1_france", num: 2, numLabel: "(2)", nameTamil: "பிரான்ஸ் (நேச நாடு)", nameEnglish: "France (Allied Power)", coords: { x: 375, y: 220 }, tolerance: 35, tipTamil: "பிரிட்டனுக்கு தெற்கே அமைந்துள்ள மேற்கு ஐரோப்பிய நேச நாடு.", tipEnglish: "Western Front allied republic situated south of Britain across English Channel." },
        { id: "ww1_germany", num: 3, numLabel: "(3)", nameTamil: "ஜெர்மனி (மைய நாடு)", nameEnglish: "Germany (Central Power)", coords: { x: 405, y: 195 }, tolerance: 35, tipTamil: "மத்திய ஐரோப்பிய வல்லரசு; மைய நாடுகளின் முன்னணி நாடு.", tipEnglish: "Central European power between France and Russia with North Sea coast." },
        { id: "ww1_italy", num: 4, numLabel: "(4)", nameTamil: "இத்தாலி (நேச நாடு)", nameEnglish: "Italy (Allied Power)", coords: { x: 422, y: 250 }, tolerance: 35, tipTamil: "மத்திய தரைக்கடலில் உள்ள பூட் வடிவ தீபகற்ப நாடு.", tipEnglish: "Boot-shaped peninsula in the Mediterranean Sea with Sicily island." },
        { id: "ww1_austria", num: 5, numLabel: "(5)", nameTamil: "ஆஸ்திரிய-ஹங்கேரி (மைய நாடு)", nameEnglish: "Austria-Hungary (Central Power)", coords: { x: 440, y: 215 }, tolerance: 35, tipTamil: "ஜெர்மனிக்கு தெற்கே உள்ள இரட்டை முடியாட்சி கூட்டணி நாடு.", tipEnglish: "Dual monarchy ally situated south of Germany and north of Balkans." },
        { id: "ww1_sarajevo", num: 6, numLabel: "(6)", nameTamil: "சரஜீவோ (போஸ்னியா)", nameEnglish: "Sarajevo (Bosnia)", coords: { x: 446, y: 246 }, tolerance: 30, tipTamil: "ஆஸ்திரிய இளவரசர் பெர்டினண்ட் சுடப்பட்ட இடம் - போரின் உடனடிக் காரணம்.", tipEnglish: "Assassination site of Archduke Franz Ferdinand on 28 June 1914, sparking WWI." },
        { id: "ww1_russia", num: 7, numLabel: "(7)", nameTamil: "ரஷ்யா (நேச நாடு)", nameEnglish: "Russia (Allied Power)", coords: { x: 545, y: 165 }, tolerance: 45, tipTamil: "கிழக்கு ஐரோப்பாவில் பரவியுள்ள பரப்பளவில் மிகப்பெரிய நேச நாடு.", tipEnglish: "Expansive empire spanning Eastern Europe on the Eastern Front." },
        { id: "ww1_turkey", num: 8, numLabel: "(8)", nameTamil: "துருக்கி / ஒட்டோமான் பேரரசு", nameEnglish: "Turkey (Ottoman Empire)", coords: { x: 475, y: 265 }, tolerance: 35, tipTamil: "கருங்கடல் மற்றும் மத்திய தரைக்கடல் இணைப்பில் உள்ள மைய நாடு.", tipEnglish: "Controlled Black Sea and Dardanelles straits (Gallipoli campaign)." }
      ]
    },

    // Unit 9 History: World War II (Official Exam World Map 736x522)
    "soc_ww2": {
      id: "soc_ww2",
      titleTamil: "இரண்டாம் உலகப் போர் நாடுகள் (வரலாறு அலகு 3 - 8 மதிப்பெண்கள்)",
      titleEnglish: "World War II Powers & Theaters (History Unit 3 - 8 Marks)",
      officialImage: "images/soc_ww2_map.jpg",
      mapType: "world",
      viewBox: "0 0 736 522",
      maxMarks: 8,
      places: [
        { id: "ww2_britain", num: 1, numLabel: "(1)", nameTamil: "கிரேட் பிரிட்டன் (நேச நாடு)", nameEnglish: "Great Britain (Allied Power)", coords: { x: 358, y: 172 }, tolerance: 35, tipTamil: "வின்ஸ்டன் சர்ச்சில் தலைமை தாங்கிய நேச நாடு.", tipEnglish: "Winston Churchill's island nation resisting Axis air blitz." },
        { id: "ww2_france", num: 2, numLabel: "(2)", nameTamil: "பிரான்ஸ் (நேச நாடு)", nameEnglish: "France (Allied Power)", coords: { x: 375, y: 220 }, tolerance: 35, tipTamil: "சார்லஸ் டி கால் தலைமையிலான சுதந்திர பிரான்ஸ் இயக்கம்.", tipEnglish: "Allied republic liberated after Normandy D-Day landings." },
        { id: "ww2_germany", num: 3, numLabel: "(3)", nameTamil: "ஜெர்மனி (அச்சு நாடு)", nameEnglish: "Germany (Axis Power)", coords: { x: 405, y: 195 }, tolerance: 35, tipTamil: "ஹிட்லரின் நாஜி ஜெர்மனி - இரண்டாம் உலகப்போரைத் தொடங்கியது.", tipEnglish: "Hitler's Axis power invading Poland in Sept 1939." },
        { id: "ww2_italy", num: 4, numLabel: "(4)", nameTamil: "இத்தாலி (அச்சு நாடு)", nameEnglish: "Italy (Axis Power)", coords: { x: 422, y: 250 }, tolerance: 35, tipTamil: "முசோலினியின் பாசிச நாடு.", tipEnglish: "Mussolini's Mediterranean Axis partner." },
        { id: "ww2_ussr", num: 5, numLabel: "(5)", nameTamil: "சோவியத் யூனியன் (USSR)", nameEnglish: "Soviet Union (USSR)", coords: { x: 545, y: 165 }, tolerance: 45, tipTamil: "ஸ்டாலின்கிராட் போரில் நாஜிக்களை வென்ற சோவியத் யூனியன்.", tipEnglish: "Turned the tide of war at Battle of Stalingrad." },
        { id: "ww2_usa", num: 6, numLabel: "(6)", nameTamil: "அமெரிக்கா (USA - நேச நாடு)", nameEnglish: "United States of America (USA)", coords: { x: 135, y: 230 }, tolerance: 45, tipTamil: "முத்து துறைமுகத் தாக்குதலுக்குப் பின் போரில் இணைந்த வல்லரசு.", tipEnglish: "Arsenal of democracy entering the war after Pearl Harbor." },
        { id: "ww2_japan", num: 7, numLabel: "(7)", nameTamil: "ஜப்பான் (அச்சு நாடு)", nameEnglish: "Japan (Axis Power)", coords: { x: 655, y: 235 }, tolerance: 35, tipTamil: "ஆசிய-பசிபிக் பிராந்தியத்தில் ஆதிக்கம் செலுத்திய அச்சு நாடு.", tipEnglish: "Imperial power in East Asia surrendered after atomic bombings." },
        { id: "ww2_turkey", num: 8, numLabel: "(8)", nameTamil: "துருக்கி (நடுநிலை நாடு)", nameEnglish: "Turkey (Neutral Nation)", coords: { x: 475, y: 265 }, tolerance: 35, tipTamil: "இரண்டாம் உலகப்போரில் பெரும்பகுதி நடுநிலை வகித்த நாடு.", tipEnglish: "Maintained neutrality until final months of WWII." }
      ]
    }
  };

  // Helper to resolve question set
  function resolveCurriculumQuestionSet(qItem) {
    if (!qItem) return CURRICULUM_MAP_DATABASE["board_model"];
    const id = (qItem.id || '').toLowerCase();
    const qText = (qItem.q || '').toLowerCase();

    if (id.includes('soc_em_8_map') || id.includes('soc_8_map') || qText.includes('port') || qText.includes('துறைமுகம்')) {
      return CURRICULUM_MAP_DATABASE["soc_ports"];
    }
    if (id.includes('soc_em_2_map') || id.includes('soc_2_map') || qText.includes('river') || qText.includes('நதிகள்') || qText.includes('ஆறு')) {
      return CURRICULUM_MAP_DATABASE["soc_rivers"];
    }
    if (id.includes('soc_em_10_map') || id.includes('soc_10_map') || qText.includes('soil') || qText.includes('மண்') || qText.includes('dam') || qText.includes('அணை')) {
      return CURRICULUM_MAP_DATABASE["soc_soils"];
    }
    if (id.includes('soc_em_6_map') || id.includes('soc_6_map') || qText.includes('monsoon') || qText.includes('பருவக்காற்று') || qText.includes('forest') || qText.includes('காடுகள்')) {
      return CURRICULUM_MAP_DATABASE["soc_climate"];
    }
    if (id.includes('soc_em_4_map') || id.includes('soc_4_map') || qText.includes('industry') || qText.includes('தொழிலகம்') || qText.includes('steel') || qText.includes('எஃகு')) {
      return CURRICULUM_MAP_DATABASE["soc_industry"];
    }
    if (id.includes('soc_em_1_map') || id.includes('soc_1_map') || qText.includes('world war i') || qText.includes('முதல் உலக')) {
      return CURRICULUM_MAP_DATABASE["soc_ww1"];
    }
    if (id.includes('soc_em_9_map') || id.includes('soc_9_map') || qText.includes('world war ii') || qText.includes('இரண்டாம் உலக')) {
      return CURRICULUM_MAP_DATABASE["soc_ww2"];
    }

    return CURRICULUM_MAP_DATABASE["board_model"];
  }

  // ---------------------------------------------------------------------------
  // 2. VECTOR & OFFICIAL EXAM PAPER MAP RENDERING
  // ---------------------------------------------------------------------------

  // Official Exam Paper World Map (User-uploaded authentic outline paper map)
  function getBlankWorldSvgHtml(cId, isEm, qSet) {
    return `
      <svg id="${cId}_svgMap" viewBox="0 0 736 522" class="eval-blank-map-svg" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff;">
        <defs>
          <filter id="${cId}_dropGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <!-- Entire Map and Interactive Layers inside Pan & Zoom Group -->
        <g id="${cId}_panZoomGroup" class="pan-zoom-container">
          <!-- 1. The Authentic Examination World Map Image (1:1 Pixel Match) -->
          <image href="images/official_world_blank_map.png" x="0" y="0" width="736" height="522" preserveAspectRatio="xMidYMid meet" />

          <!-- 2. Dynamic Point & Match Targets Layer -->
          <g id="${cId}_matchTargetsLayer" class="eval-match-targets-layer"></g>

          <!-- 3. Dynamic Evaluation Offset Lines Layer -->
          <g id="${cId}_offsetLinesLayer" class="eval-guide-layer"></g>

          <!-- 4. Dynamic Answer Key Layer (Golden Stars) -->
          <g id="${cId}_targetAnswerLayer" class="eval-target-layer"></g>

          <!-- 5. Dynamic Student Pin Markers Layer -->
          <g id="${cId}_studentPinsLayer" class="eval-student-pins-layer"></g>
        </g>
      </svg>
    `;
  }

  // Official Exam Paper India Map (Authentic Clean Black & White Examination Outline)
  function getBlankIndiaSvgHtml(cId, isEm) {
    const seaLabels = isEm ? `
      <text x="120" y="780" fill="#0f172a" opacity="0.65" font-size="20" font-weight="900" letter-spacing="3">ARABIAN SEA</text>
      <text x="640" y="780" fill="#0f172a" opacity="0.65" font-size="20" font-weight="900" letter-spacing="3">BAY OF BENGAL</text>
      <text x="330" y="1120" fill="#0f172a" opacity="0.65" font-size="19" font-weight="900" letter-spacing="3">INDIAN OCEAN</text>
    ` : `
      <text x="120" y="780" fill="#0f172a" opacity="0.65" font-size="20" font-weight="900" letter-spacing="3">அரபிக்கடல்</text>
      <text x="640" y="780" fill="#0f172a" opacity="0.65" font-size="20" font-weight="900" letter-spacing="3">வங்காள விரிகுடா</text>
      <text x="330" y="1120" fill="#0f172a" opacity="0.65" font-size="19" font-weight="900" letter-spacing="3">இந்தியப் பெருங்கடல்</text>
    `;

    return `
      <svg id="${cId}_svgMap" viewBox="0 0 1000 1150" class="eval-blank-map-svg" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff;">
        <defs>
          <filter id="${cId}_indGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <!-- Examination Paper Frame -->
        <rect x="6" y="6" width="988" height="1138" fill="#ffffff" stroke="#000000" stroke-width="4" rx="8" />

        <!-- PAN & ZOOM GROUP -->
        <g id="${cId}_panZoomGroup" class="pan-zoom-container">

          <!-- Official Exam Title Banner -->
          <g transform="translate(500, 32)">
            <polygon points="-160,0 160,0 145,28 -145,28" fill="#000000" />
            <text x="0" y="20" fill="#ffffff" font-size="15" font-weight="900" text-anchor="middle" letter-spacing="2">INDIA OUTLINE MAP</text>
          </g>

          <!-- Official Compass Rose -->
          <g transform="translate(890, 85)" opacity="0.95">
            <circle cx="0" cy="0" r="28" fill="#ffffff" stroke="#000000" stroke-width="1.8" />
            <circle cx="0" cy="0" r="24" fill="none" stroke="#000000" stroke-dasharray="2,2" stroke-width="1" />
            <polygon points="0,-24 4,-6 0,0 -4,-6" fill="#000000" />
            <polygon points="0,24 4,6 0,0 -4,6" fill="#94a3b8" />
            <polygon points="24,0 6,4 0,0 6,-4" fill="#94a3b8" />
            <polygon points="-24,0 -6,4 0,0 -6,-4" fill="#94a3b8" />
            <text x="0" y="-30" fill="#000000" font-size="14" font-weight="900" text-anchor="middle">N</text>
          </g>

          <!-- Water Body Reference Names -->
          ${seaLabels}

          <!-- Tropic of Cancer (23.5° N) Exam Reference Line -->
          <line x1="160" y1="535" x2="880" y2="535" stroke="#475569" stroke-width="1.4" stroke-dasharray="7,5" />
          <text x="888" y="539" fill="#0f172a" font-size="12" font-weight="800">23.5° N</text>

          <!-- MAINLAND OFFICIAL QUESTION PAPER OUTLINE -->
          <path id="${cId}_mainland" class="eval-map-land-path" fill="#f8fafc" stroke="#0f172a" stroke-width="2.6" stroke-linejoin="round"
            d="M 370 40 
               C 385 30, 415 30, 430 45 
               C 450 65, 460 95, 450 120 
               C 470 125, 495 140, 485 165 
               C 465 175, 445 190, 430 215 
               C 415 235, 400 245, 375 250 
               C 350 255, 330 270, 315 295 
               C 300 315, 275 330, 255 350 
               C 235 370, 215 390, 205 420 
               C 195 440, 160 455, 140 480 
               C 120 500, 155 520, 190 525 
               C 220 530, 240 515, 255 530 
               C 265 545, 250 560, 220 575 
               C 195 590, 175 605, 195 625 
               C 225 635, 260 620, 280 600 
               C 295 580, 275 605, 270 635 
               C 265 670, 285 710, 305 750 
               C 325 790, 345 830, 365 870 
               C 385 910, 405 950, 420 990 
               C 425 1000, 435 995, 440 980 
               C 455 940, 465 900, 475 860 
               C 485 820, 495 780, 520 750 
               C 545 720, 575 690, 605 660 
               C 635 630, 660 600, 640 570 
               C 625 550, 645 530, 665 515 
               C 685 500, 695 480, 675 465 
               C 655 450, 630 460, 615 440 
               C 600 420, 580 405, 560 395 
               C 540 380, 560 360, 585 345 
               C 610 330, 635 315, 660 305 
               C 685 295, 715 295, 730 315 
               C 745 330, 775 320, 805 325 
               C 835 330, 860 345, 855 365 
               C 850 385, 825 395, 800 405 
               C 780 415, 755 435, 775 455 
               C 795 470, 770 490, 745 490 
               C 720 490, 705 470, 680 475 
               C 660 480, 645 495, 630 515 
               C 615 535, 585 550, 560 565 
               C 530 585, 510 610, 490 635 
               C 470 660, 455 690, 440 720 
               C 425 750, 410 780, 395 810 
               C 380 840, 365 870, 350 900 
               C 340 920, 360 940, 380 960 
               C 400 980, 410 1000, 415 1010
               L 420 1010 
               C 425 995, 435 970, 445 940 
               C 455 910, 465 875, 475 840 
               C 485 805, 500 770, 520 735 
               C 540 700, 570 670, 595 640 
               C 615 615, 630 585, 640 555 
               C 645 530, 625 510, 605 490 
               C 585 470, 565 440, 545 410 
               C 525 380, 505 350, 485 320 
               C 465 290, 445 260, 425 230 
               C 405 200, 385 170, 375 140 
               C 365 110, 360 70, 370 40 Z" />

          <!-- STATE BOUNDARY GUIDE LINES -->
          <g fill="none" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.8">
            <path d="M 420 1000 Q 395 940 380 880" />
            <path d="M 380 880 Q 405 860 435 850" />
            <path d="M 435 850 Q 460 835 485 815" />
            <path d="M 330 840 Q 360 850 380 880" />
            <path d="M 285 750 Q 350 730 420 720" />
            <path d="M 420 720 Q 425 780 435 850" />
            <path d="M 435 850 Q 470 760 520 700" />
            <path d="M 520 700 Q 580 650 635 600" />
            <path d="M 520 700 Q 560 620 575 560 Q 610 520 640 480" />
            <path d="M 640 480 Q 660 475 680 475" />
            <path d="M 680 475 Q 640 430 635 360 Q 655 330 660 305" />
            <path d="M 265 620 Q 350 600 480 600 Q 520 650 520 700" />
            <path d="M 220 500 Q 260 490 280 500" />
            <path d="M 280 500 Q 350 460 380 410" />
            <path d="M 290 320 Q 330 330 360 350" />
            <path d="M 540 380 Q 535 440 550 480" />
            <path d="M 380 410 Q 450 440 535 440" />
            <path d="M 360 260 Q 430 250 500 285" />
          </g>

          <!-- MAJOR RIVERS -->
          <g fill="none" stroke="#0284c7" stroke-width="1.8" stroke-linecap="round">
            <path d="M 420 220 Q 470 290 520 390 Q 600 440 680 475" />
            <path d="M 660 305 Q 730 320 780 380 Q 750 450 710 510" />
            <path d="M 280 640 Q 370 620 490 640 Q 550 660 580 690" />
            <path d="M 320 710 Q 390 700 450 720 Q 510 740 550 770" />
            <path d="M 370 870 Q 400 870 430 880 Q 460 880 485 890" />
            <path d="M 480 560 Q 410 550 370 555 Q 310 565 260 575" />
          </g>

          <!-- SRI LANKA -->
          <ellipse cx="490" cy="1005" rx="22" ry="34" fill="#f8fafc" stroke="#0f172a" stroke-width="2" />

          <!-- ANDAMAN & NICOBAR ISLANDS -->
          <g fill="#0f172a">
            <ellipse cx="780" cy="740" rx="4" ry="12" />
            <ellipse cx="782" cy="770" rx="4" ry="10" />
            <ellipse cx="784" cy="800" rx="4" ry="14" />
            <ellipse cx="788" cy="845" rx="5" ry="12" />
          </g>

          <!-- LAKSHADWEEP ISLANDS -->
          <g fill="#0f172a">
            <circle cx="210" cy="810" r="4" />
            <circle cx="215" cy="835" r="4" />
            <circle cx="225" cy="865" r="4" />
          </g>

          <!-- DYNAMIC INTERACTIVE LAYERS -->
          <g id="${cId}_matchTargetsLayer" class="eval-match-targets-layer"></g>
          <g id="${cId}_offsetLinesLayer" class="eval-guide-layer"></g>
          <g id="${cId}_targetAnswerLayer" class="eval-target-layer"></g>
          <g id="${cId}_studentPinsLayer" class="eval-student-pins-layer"></g>
        </g>
      </svg>
    `;
  }

  // ---------------------------------------------------------------------------
  // 3. ENGINE OBJECT & CONTROLLER
  // ---------------------------------------------------------------------------
  const MapPracticeEvaluator = {
    instances: {},

    initCSS() {
      if (document.getElementById('mapPracticeEvaluatorStyles')) return;
      const style = document.createElement('style');
      style.id = 'mapPracticeEvaluatorStyles';
      style.textContent = `
        .eval-map-container {
          display: flex;
          flex-direction: column;
          gap: 6px;
          color: #f8fafc;
          width: 100%;
          position: relative;
        }

        /* Mode Switcher Pill Bar (Free Pin vs Point & Match) */
        .eval-mode-toggle-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: #0f172a;
          border: 1px solid #334155;
          border-radius: 20px;
          padding: 3px 6px;
          align-self: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
        .eval-mode-btn {
          background: transparent;
          border: none;
          color: #94a3b8;
          font-size: 11.5px;
          font-weight: 800;
          padding: 5px 12px;
          border-radius: 16px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          transition: all 0.15s ease;
        }
        .eval-mode-btn.active {
          background: #0284c7;
          color: #ffffff;
          box-shadow: 0 0 10px rgba(2, 132, 199, 0.4);
        }

        /* Places Selector Tray */
        .eval-places-tray {
          display: flex;
          align-items: center;
          gap: 6px;
          overflow-x: auto;
          padding: 2px 2px 6px 2px;
          scrollbar-width: thin;
          -webkit-overflow-scrolling: touch;
        }
        .eval-place-pill {
          flex: 0 0 auto;
          background: #1e293b;
          border: 1.5px solid #334155;
          border-radius: 20px;
          padding: 5px 11px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: all 0.15s ease;
          user-select: none;
        }
        .eval-place-pill:hover {
          border-color: #38bdf8;
          background: #24344d;
        }
        .eval-place-pill.active {
          border-color: #38bdf8;
          background: #0284c7;
          color: #ffffff;
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.4);
        }
        .eval-place-pill.marked {
          border-color: #10b981;
          background: rgba(16, 185, 129, 0.2);
          color: #6ee7b7;
        }
        .eval-place-pill.marked.active {
          background: #059669;
          color: #ffffff;
          border-color: #34d399;
        }
        .pill-badge {
          background: rgba(0, 0, 0, 0.35);
          border-radius: 10px;
          padding: 2px 6px;
          font-size: 10.5px;
          font-weight: 900;
        }
        .pill-title {
          font-size: 11.5px;
          font-weight: 800;
        }
        .pill-clear-btn {
          background: transparent;
          border: none;
          color: #f87171;
          font-size: 13px;
          cursor: pointer;
          padding: 0 2px;
          line-height: 1;
        }

        /* SVG Blank Map Stage Wrapper */
        .eval-map-stage-wrapper {
          position: relative;
          width: 100%;
          height: calc(100vh - 180px);
          height: calc(100dvh - 180px);
          min-height: 350px;
          background: #020617;
          border: 1.5px solid #334155;
          border-radius: 10px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          user-select: none;
        }
        .eval-blank-map-svg {
          width: 100%;
          height: 100%;
          cursor: crosshair;
          touch-action: none;
        }
        .pan-zoom-container {
          transition: transform 0.08s linear;
          transform-origin: 0 0;
        }

        /* Floating Toolbar */
        .eval-map-toolbar {
          position: absolute;
          top: 10px;
          right: 10px;
          display: flex;
          flex-direction: column;
          gap: 5px;
          background: rgba(15, 23, 42, 0.92);
          backdrop-filter: blur(8px);
          padding: 5px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          z-index: 10;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);
        }
        .eval-tool-btn {
          background: #1e293b;
          border: 1px solid #334155;
          color: #f8fafc;
          border-radius: 6px;
          padding: 5px 8px;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 30px;
          min-height: 28px;
          transition: all 0.15s ease;
        }
        .eval-tool-btn:hover {
          background: #334155;
          border-color: #38bdf8;
        }
        .eval-tool-btn.active {
          background: #0284c7;
          border-color: #38bdf8;
          color: #ffffff;
        }

        /* Floating Counter & Hint */
        .eval-marked-count-chip {
          position: absolute;
          top: 10px;
          left: 10px;
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid #0284c7;
          border-radius: 16px;
          padding: 4px 10px;
          font-size: 11px;
          font-weight: 800;
          color: #38bdf8;
          display: flex;
          align-items: center;
          gap: 5px;
          z-index: 10;
        }
        .eval-tap-zoom-hint {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(15, 23, 42, 0.92);
          border: 1px solid rgba(56, 189, 248, 0.4);
          border-radius: 18px;
          padding: 4px 12px;
          font-size: 11px;
          font-weight: 700;
          color: #e2e8f0;
          pointer-events: none;
          z-index: 9;
          white-space: nowrap;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
        }

        /* Action Bar */
        .eval-action-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2px 0;
        }
        .eval-finish-btn {
          flex: 1;
          padding: 10px 16px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: #ffffff;
          border: none;
          border-radius: 9px;
          font-size: 13.5px;
          font-weight: 900;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 3px 12px rgba(16, 185, 129, 0.35);
          transition: all 0.15s ease;
        }
        .eval-finish-btn:hover {
          box-shadow: 0 4px 16px rgba(16, 185, 129, 0.5);
        }

        /* Point & Match Target Circle Animations */
        .match-target-node {
          cursor: pointer;
          transition: transform 0.15s ease;
        }
        .match-target-node:hover {
          transform: scale(1.15);
        }
        .match-target-pulse {
          animation: matchPulse 1.8s infinite;
        }
        @keyframes matchPulse {
          0% { r: 12px; opacity: 0.8; }
          50% { r: 22px; opacity: 0.2; }
          100% { r: 12px; opacity: 0.8; }
        }

        /* Scorecard Section */
        .eval-scorecard-wrap {
          background: #0f172a;
          border: 1px solid #334155;
          border-radius: 12px;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 10px;
        }
        .eval-score-hero {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          padding-bottom: 10px;
          border-bottom: 1px solid #1e293b;
        }
        .eval-score-num-box {
          display: flex;
          align-items: baseline;
          gap: 8px;
        }
        .eval-score-badge {
          font-size: 26px;
          font-weight: 900;
          color: #38bdf8;
        }
        .eval-grade-pill {
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 800;
        }
        .grade-centum { background: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid #10b981; }
        .grade-good { background: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid #f59e0b; }
        .grade-practice { background: rgba(239, 68, 68, 0.2); color: #f87171; border: 1px solid #ef4444; }

        .eval-diag-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 11px;
        }
        .eval-diag-table th {
          background: #1e293b;
          color: #38bdf8;
          text-align: left;
          padding: 7px 9px;
          font-weight: 800;
        }
        .eval-diag-table td {
          padding: 7px 9px;
          border-bottom: 1px solid #1e293b;
          color: #e2e8f0;
        }

        /* Mobile specific zero text clutter */
        @media (max-width: 768px) {
          .eval-map-stage-wrapper {
            height: calc(100vh - 215px) !important;
            height: calc(100dvh - 215px) !important;
            min-height: 320px !important;
          }
          .eval-mode-toggle-bar { padding: 2px 4px !important; }
          .eval-mode-btn { font-size: 11px !important; padding: 4px 10px !important; }
          .eval-places-tray { padding: 2px 0 3px 0 !important; }
          .eval-place-pill { padding: 4px 8px !important; }
          .pill-title { font-size: 11px !important; }
          .eval-finish-btn { padding: 10px 14px !important; font-size: 13px !important; }
        }
      `;
      document.head.appendChild(style);
    },

    // -------------------------------------------------------------------------
    // MOUNT TO DOM CONTAINER
    // -------------------------------------------------------------------------
    mount(containerId, questionData, options = {}) {
      this.initCSS();

      const container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
      if (!container) return;

      const cId = container.id || ('eval_map_' + Math.random().toString(36).substr(2, 6));
      container.id = cId;

      const isEm = options.isEm !== undefined ? options.isEm : (
        (window.currentSubject && (window.currentSubject.id.endsWith('_em') || window.currentSubject.id === 'english')) ||
        (document.body && document.body.innerText.includes('English Medium') && !document.body.innerText.includes('தமிழ் வழி'))
      );

      const qSet = resolveCurriculumQuestionSet(questionData);

      const state = {
        containerId: cId,
        containerEl: container,
        question: questionData,
        qSet: qSet,
        places: qSet.places,
        mapType: qSet.mapType || 'india',
        viewBox: qSet.viewBox || (qSet.mapType === 'world' ? '0 0 736 522' : '0 0 1000 1150'),
        maxMarks: qSet.maxMarks || 8,
        isEm: isEm,
        activeMode: 'pin', // 'pin' (Free Pin Marking) or 'match' (Point & Match)
        selectedPlaceIndex: 0,
        studentMarks: {}, // placeId -> { x, y, timestamp }
        studentMatches: {}, // targetPlaceId -> studentSelectedPlaceId
        isEvaluated: false,
        results: null,
        // Zoom & Pan
        scale: 1.0,
        panX: 0,
        panY: 0,
        tapToZoomEnabled: true,
        isDragging: false,
        touchStartX: 0,
        touchStartY: 0,
        touchStartTime: 0,
        hasMoved: false,
        initialPinchDistance: 0,
        initialPinchScale: 1.0,
        speechUtterance: null
      };

      this.instances[cId] = state;
      this.renderHTML(state);
      this.bindGestureEvents(state);
    },

    // -------------------------------------------------------------------------
    // RENDER UI SHELL
    // -------------------------------------------------------------------------
    renderHTML(state) {
      const cId = state.containerId;
      const isEm = state.isEm;
      const qSet = state.qSet;
      const totalPlaces = state.places.length;

      const svgMapHtml = state.mapType === 'world'
        ? getBlankWorldSvgHtml(cId, isEm, qSet)
        : getBlankIndiaSvgHtml(cId, isEm, qSet);

      const html = `
        <div class="eval-map-container" id="${cId}_wrapper">

          <!-- 1. Mode Switcher (Free Pin vs Point & Match) -->
          <div class="eval-mode-toggle-bar">
            <button type="button" class="eval-mode-btn ${state.activeMode === 'pin' ? 'active' : ''}" id="${cId}_btnModePin" onclick="MapPracticeEvaluator.switchPracticeMode('${cId}', 'pin')">
              <span>&#128205;</span>
              <span>${isEm ? 'Free Pin Marking' : 'சுயமாக குறித்தல் (Free Pin)'}</span>
            </button>
            <button type="button" class="eval-mode-btn ${state.activeMode === 'match' ? 'active' : ''}" id="${cId}_btnModeMatch" onclick="MapPracticeEvaluator.switchPracticeMode('${cId}', 'match')">
              <span>&#127919;</span>
              <span>${isEm ? 'Point & Match' : 'பொருத்துதல் (Match Target)'}</span>
            </button>
          </div>

          <!-- 2. Places Selector Tray -->
          <div class="eval-places-tray" id="${cId}_placesTray">
            ${state.places.map((p, idx) => {
              const isSelected = idx === state.selectedPlaceIndex;
              const isMarked = state.studentMarks[p.id] || (Object.values(state.studentMatches).includes(p.id));
              const numLabel = p.numLabel || (idx + 1);
              const pName = isEm ? p.nameEnglish : p.nameTamil;

              return `
                <div class="eval-place-pill ${isSelected ? 'active' : ''} ${isMarked ? 'marked' : ''}" 
                     id="${cId}_pill_${p.id}" 
                     onclick="MapPracticeEvaluator.selectPlace('${cId}', ${idx})">
                  <span class="pill-badge">${numLabel}</span>
                  <span class="pill-title">${pName}</span>
                  <span class="pill-status">${isMarked ? '&#10003;' : '&#128205;'}</span>
                  ${isMarked ? `<button type="button" class="pill-clear-btn" title="Clear" onclick="event.stopPropagation(); MapPracticeEvaluator.clearPin('${cId}', '${p.id}')">&times;</button>` : ''}
                </div>
              `;
            }).join('')}
          </div>

          <!-- 3. Official Blank Map Stage -->
          <div class="eval-map-stage-wrapper" id="${cId}_stageWrapper">
            <!-- Counter Chip -->
            <div class="eval-marked-count-chip" id="${cId}_counterChip">
              <span>&#128205;</span>
              <span id="${cId}_markedCountText">
                ${isEm ? `0 / ${totalPlaces} Places Done` : `0 / ${totalPlaces} இடங்கள் முடிக்கப்பட்டன`}
              </span>
            </div>

            <!-- Toolbar on Right -->
            <div class="eval-map-toolbar">
              <button type="button" class="eval-tool-btn" onclick="MapPracticeEvaluator.zoomStep('${cId}', 1)" title="Zoom In">+</button>
              <button type="button" class="eval-tool-btn" onclick="MapPracticeEvaluator.zoomStep('${cId}', -1)" title="Zoom Out">&minus;</button>
              <button type="button" class="eval-tool-btn ${state.tapToZoomEnabled ? 'active' : ''}" id="${cId}_btnTapZoom" onclick="MapPracticeEvaluator.toggleTapToZoom('${cId}')" title="Tap-to-Zoom">&#127919;</button>
              <button type="button" class="eval-tool-btn" onclick="MapPracticeEvaluator.resetView('${cId}')" title="Reset View">&#8635;</button>
              <button type="button" class="eval-tool-btn" onclick="MapPracticeEvaluator.clearActivePin('${cId}')" title="Clear Pin">&#128465;</button>
              ${qSet.officialImage ? `
                <button type="button" class="eval-tool-btn" style="background:rgba(2,132,199,0.3); border-color:#0284c7; color:#38bdf8;" onclick="MapPracticeEvaluator.showOfficialImagePopup('${cId}')" title="Official Board Map">&#128065;</button>
              ` : ''}
            </div>

            <!-- Mobile Gesture Hint -->
            <div class="eval-tap-zoom-hint" id="${cId}_gestureHint">
              ${isEm ? '&#128070; Tap to zoom & mark &bull; Drag to pan map' : '&#128070; தட்டினால் பெரிதாகும் &bull; நகர்த்த விரலால் இழுக்கவும்'}
            </div>

            <!-- SVG Blank Map Content -->
            ${svgMapHtml}
          </div>

          <!-- 4. Finish & Evaluate Button Bar -->
          <div class="eval-action-bar" id="${cId}_actionBar">
            <button type="button" class="eval-finish-btn" id="${cId}_btnFinish" onclick="MapPracticeEvaluator.finishAndEvaluate('${cId}')">
              <span>&#127937;</span>
              <span>${isEm ? 'Finish & Evaluate Map (Check Marks)' : 'விடை வரைபடத்தை சமர்ப்பித்து திருத்து (Evaluate)'}</span>
              <span>&#10148;</span>
            </button>
          </div>

          <!-- 5. Evaluation Results Scorecard Mount -->
          <div id="${cId}_resultArea" style="display:none;"></div>
        </div>
      `;

      state.containerEl.innerHTML = html;

      // Render mode-specific layers
      this.updateModeUI(cId);
    },

    // -------------------------------------------------------------------------
    // MODE SWITCHER (FREE PIN vs POINT & MATCH)
    // -------------------------------------------------------------------------
    switchPracticeMode(cId, mode) {
      const state = this.instances[cId];
      if (!state) return;

      state.activeMode = mode;

      const btnPin = document.getElementById(`${cId}_btnModePin`);
      const btnMatch = document.getElementById(`${cId}_btnModeMatch`);
      if (btnPin) btnPin.classList.toggle('active', mode === 'pin');
      if (btnMatch) btnMatch.classList.toggle('active', mode === 'match');

      const hint = document.getElementById(`${cId}_gestureHint`);
      if (hint) {
        if (mode === 'match') {
          hint.innerHTML = state.isEm
            ? '&#127919; Tap any numbered target circle to match place'
            : '&#127919; வரைபடத்தில் உள்ள எண் வட்டத்தைத் தொட்டு பொருத்தவும்';
        } else {
          hint.innerHTML = state.isEm
            ? '&#128070; Tap to zoom & mark &bull; Drag to pan map'
            : '&#128070; தட்டினால் பெரிதாகும் &bull; நகர்த்த விரலால் இழுக்கவும்';
        }
      }

      this.updateModeUI(cId);
    },

    updateModeUI(cId) {
      const state = this.instances[cId];
      if (!state) return;

      if (state.activeMode === 'match') {
        this.renderMatchTargets(cId);
      } else {
        const targetLayer = document.getElementById(`${cId}_matchTargetsLayer`);
        if (targetLayer) targetLayer.innerHTML = '';
      }

      this.renderStudentPins(cId);
      this.updateCounter(cId);
    },

    // -------------------------------------------------------------------------
    // RENDER MATCH TARGETS (Mode B: Numbered Landmark Dots ① to ⑧)
    // -------------------------------------------------------------------------
    renderMatchTargets(cId) {
      const state = this.instances[cId];
      if (!state) return;

      const layer = document.getElementById(`${cId}_matchTargetsLayer`);
      if (!layer) return;

      const isEm = state.isEm;
      let html = '';

      state.places.forEach((p, idx) => {
        const numLabel = p.numLabel || (idx + 1);
        const coords = p.coords;
        const matchedPlaceId = state.studentMatches[p.id];
        const isMatched = !!matchedPlaceId;

        const matchedPlace = isMatched ? state.places.find(x => x.id === matchedPlaceId) : null;
        const matchedName = matchedPlace ? (isEm ? matchedPlace.nameEnglish : matchedPlace.nameTamil) : '';

        html += `
          <g class="match-target-node" transform="translate(${coords.x}, ${coords.y})" onclick="MapPracticeEvaluator.handleTargetClick('${cId}', '${p.id}')">
            <!-- Pulsing outer ring -->
            <circle cx="0" cy="0" r="16" fill="${isMatched ? '#10b981' : '#f59e0b'}" opacity="0.3" class="match-target-pulse" />
            
            <!-- Center target circle -->
            <circle cx="0" cy="0" r="14" fill="${isMatched ? '#059669' : '#0f172a'}" stroke="${isMatched ? '#34d399' : '#f59e0b'}" stroke-width="2" />
            
            <!-- Target Number / Checkmark -->
            <text x="0" y="4.5" fill="#ffffff" font-size="10.5" font-weight="900" text-anchor="middle">
              ${isMatched ? '&#10003;' : (idx + 1)}
            </text>

            <!-- Matched place name pill -->
            ${isMatched ? `
              <rect x="16" y="-11" width="${matchedName.length * 7 + 16}" height="20" rx="5" fill="#0f172a" stroke="#10b981" stroke-width="1.2" />
              <text x="22" y="3" fill="#6ee7b7" font-size="9.5" font-weight="800">${matchedName}</text>
            ` : `
              <rect x="16" y="-9" width="55" height="18" rx="4" fill="rgba(15,23,42,0.85)" stroke="#64748b" stroke-width="0.8" />
              <text x="20" y="3.5" fill="#e2e8f0" font-size="9" font-weight="700">Point ${idx + 1}</text>
            `}
          </g>
        `;
      });

      layer.innerHTML = html;
    },

    handleTargetClick(cId, targetPlaceId) {
      const state = this.instances[cId];
      if (!state || state.isEvaluated) return;

      const activePlace = state.places[state.selectedPlaceIndex];
      if (!activePlace) return;

      // Match selected place to this target
      state.studentMatches[targetPlaceId] = activePlace.id;

      // Also set studentMark at this target coordinate for unified evaluation
      const targetPlace = state.places.find(p => p.id === targetPlaceId);
      if (targetPlace) {
        state.studentMarks[activePlace.id] = {
          x: targetPlace.coords.x,
          y: targetPlace.coords.y,
          matchedTargetId: targetPlaceId,
          timestamp: Date.now()
        };
      }

      // Move to next unmarked place
      const nextIdx = state.places.findIndex(p => !state.studentMarks[p.id] && !Object.values(state.studentMatches).includes(p.id));
      if (nextIdx !== -1) {
        this.selectPlace(cId, nextIdx);
      } else {
        this.updatePlacePills(cId);
      }

      this.renderMatchTargets(cId);
      this.updateCounter(cId);
    },

    // -------------------------------------------------------------------------
    // GESTURES: TOUCH PAN, PINCH ZOOM, TAP-TO-ZOOM, CLICK-TO-MARK
    // -------------------------------------------------------------------------
    bindGestureEvents(state) {
      const cId = state.containerId;
      const wrapper = document.getElementById(`${cId}_stageWrapper`);
      const svg = document.getElementById(`${cId}_svgMap`);
      if (!wrapper || !svg) return;

      const group = document.getElementById(`${cId}_panZoomGroup`);

      const updateTransform = () => {
        if (!group) return;
        group.setAttribute('transform', `translate(${state.panX}, ${state.panY}) scale(${state.scale})`);
      };

      const getSvgGroupPoint = (clientX, clientY) => {
        const pt = svg.createSVGPoint();
        pt.x = clientX;
        pt.y = clientY;
        const screenCTM = group ? group.getScreenCTM() : svg.getScreenCTM();
        if (!screenCTM) return { x: clientX, y: clientY };
        const svgP = pt.matrixTransform(screenCTM.inverse());
        return { x: Math.round(svgP.x), y: Math.round(svgP.y) };
      };

      // Mouse Drag & Click
      let isMouseDown = false;
      let startMouseX = 0, startMouseY = 0;
      let mouseMoved = false;

      wrapper.addEventListener('mousedown', (e) => {
        if (state.isEvaluated) return;
        isMouseDown = true;
        startMouseX = e.clientX;
        startMouseY = e.clientY;
        mouseMoved = false;
      });

      window.addEventListener('mousemove', (e) => {
        if (!isMouseDown) return;
        const dx = e.clientX - startMouseX;
        const dy = e.clientY - startMouseY;
        if (Math.hypot(dx, dy) > 6) {
          mouseMoved = true;
          state.panX += dx;
          state.panY += dy;
          startMouseX = e.clientX;
          startMouseY = e.clientY;
          updateTransform();
        }
      });

      window.addEventListener('mouseup', (e) => {
        if (!isMouseDown) return;
        isMouseDown = false;
        if (!mouseMoved && e.target && (e.target.closest(`#${cId}_stageWrapper`))) {
          handleTapOrClick(e.clientX, e.clientY);
        }
      });

      // Touch Events
      const getTouchDistance = (t1, t2) => Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);

      wrapper.addEventListener('touchstart', (e) => {
        if (state.isEvaluated) return;
        if (e.touches.length === 1) {
          state.touchStartX = e.touches[0].clientX;
          state.touchStartY = e.touches[0].clientY;
          state.touchStartTime = Date.now();
          state.hasMoved = false;
          state.isDragging = true;
        } else if (e.touches.length === 2) {
          state.isDragging = false;
          state.initialPinchDistance = getTouchDistance(e.touches[0], e.touches[1]);
          state.initialPinchScale = state.scale;
        }
      }, { passive: true });

      wrapper.addEventListener('touchmove', (e) => {
        if (state.isEvaluated) return;

        if (e.touches.length === 1 && state.isDragging) {
          const dx = e.touches[0].clientX - state.touchStartX;
          const dy = e.touches[0].clientY - state.touchStartY;

          if (Math.hypot(dx, dy) > 8) {
            state.hasMoved = true;
            if (e.cancelable) e.preventDefault();
            state.panX += dx;
            state.panY += dy;
            state.touchStartX = e.touches[0].clientX;
            state.touchStartY = e.touches[0].clientY;
            updateTransform();
          }
        } else if (e.touches.length === 2 && state.initialPinchDistance > 0) {
          if (e.cancelable) e.preventDefault();
          const currentDistance = getTouchDistance(e.touches[0], e.touches[1]);
          const ratio = currentDistance / state.initialPinchDistance;
          let newScale = state.initialPinchScale * ratio;
          newScale = Math.max(1.0, Math.min(newScale, 4.0));
          state.scale = newScale;
          updateTransform();
        }
      }, { passive: false });

      wrapper.addEventListener('touchend', (e) => {
        if (state.isEvaluated) return;
        if (!state.hasMoved && (Date.now() - state.touchStartTime) < 350) {
          handleTapOrClick(state.touchStartX, state.touchStartY);
        }
        state.isDragging = false;
        state.initialPinchDistance = 0;
      }, { passive: true });

      const handleTapOrClick = (clientX, clientY) => {
        // If in Match Mode, tapping on target circle handles matching
        if (state.activeMode === 'match') return;

        // If Tap-to-Zoom is enabled and map is at 1.0x normal view:
        if (state.tapToZoomEnabled && state.scale <= 1.05) {
          const rect = wrapper.getBoundingClientRect();
          const tapX = clientX - rect.left;
          const tapY = clientY - rect.top;

          state.scale = 2.2;
          state.panX = (rect.width / 2) - (tapX * state.scale);
          state.panY = (rect.height / 2) - (tapY * state.scale);
          updateTransform();

          const hint = document.getElementById(`${cId}_gestureHint`);
          if (hint) {
            hint.innerHTML = state.isEm
              ? '&#128269; Zoomed in! Now tap to place your pin accurately.'
              : '&#128269; பெரிதாக்கப்பட்டது! இப்போது இடத்தை தொட்டு துல்லியமாகக் குறிக்கவும்.';
          }
          return;
        }

        // Drop Pin
        const p = getSvgGroupPoint(clientX, clientY);
        this.markCurrentPlace(cId, p.x, p.y);
      };
    },

    // -------------------------------------------------------------------------
    // ZOOM CONTROLS
    // -------------------------------------------------------------------------
    zoomStep(cId, dir) {
      const state = this.instances[cId];
      if (!state) return;
      const factor = dir > 0 ? 1.35 : 0.75;
      const newScale = Math.max(1.0, Math.min(state.scale * factor, 4.0));
      state.scale = newScale;
      if (state.scale === 1.0) {
        state.panX = 0;
        state.panY = 0;
      }
      this.applyTransform(cId);
    },

    resetView(cId) {
      const state = this.instances[cId];
      if (!state) return;
      state.scale = 1.0;
      state.panX = 0;
      state.panY = 0;
      this.applyTransform(cId);
    },

    toggleTapToZoom(cId) {
      const state = this.instances[cId];
      if (!state) return;
      state.tapToZoomEnabled = !state.tapToZoomEnabled;
      const btn = document.getElementById(`${cId}_btnTapZoom`);
      if (btn) btn.classList.toggle('active', state.tapToZoomEnabled);
      const hint = document.getElementById(`${cId}_gestureHint`);
      if (hint) {
        hint.innerHTML = state.tapToZoomEnabled
          ? (state.isEm ? '&#127919; Tap-to-Zoom Mode: ON' : '&#127919; தட்டி பெரிதாக்கும் வசதி: ஆன்')
          : (state.isEm ? '&#128205; Direct Pin Mode: ON' : '&#128205; நேரடிக் குறி வசதி: ஆன்');
      }
    },

    applyTransform(cId) {
      const state = this.instances[cId];
      if (!state) return;
      const group = document.getElementById(`${cId}_panZoomGroup`);
      if (group) {
        group.setAttribute('transform', `translate(${state.panX}, ${state.panY}) scale(${state.scale})`);
      }
    },

    // -------------------------------------------------------------------------
    // SELECT ACTIVE PLACE
    // -------------------------------------------------------------------------
    selectPlace(cId, placeIdx) {
      const state = this.instances[cId];
      if (!state || placeIdx < 0 || placeIdx >= state.places.length) return;

      state.selectedPlaceIndex = placeIdx;
      this.updatePlacePills(cId);
    },

    updatePlacePills(cId) {
      const state = this.instances[cId];
      if (!state) return;

      state.places.forEach((p, idx) => {
        const pill = document.getElementById(`${cId}_pill_${p.id}`);
        if (pill) {
          const isSelected = idx === state.selectedPlaceIndex;
          const isMarked = state.studentMarks[p.id] || (Object.values(state.studentMatches).includes(p.id));
          pill.classList.toggle('active', isSelected);
          pill.classList.toggle('marked', isMarked);
          const statusSpan = pill.querySelector('.pill-status');
          if (statusSpan) statusSpan.innerHTML = isMarked ? '&#10003;' : '&#128205;';
        }
      });
    },

    // -------------------------------------------------------------------------
    // MARK PLACE (Free Pin Mode)
    // -------------------------------------------------------------------------
    markCurrentPlace(cId, svgX, svgY) {
      const state = this.instances[cId];
      if (!state) return;

      const curPlace = state.places[state.selectedPlaceIndex];
      if (!curPlace) return;

      state.studentMarks[curPlace.id] = {
        x: svgX,
        y: svgY,
        timestamp: Date.now()
      };

      this.renderStudentPins(cId);

      // Auto advance to next unmarked place
      const nextIdx = state.places.findIndex(p => !state.studentMarks[p.id]);
      if (nextIdx !== -1) {
        this.selectPlace(cId, nextIdx);
      } else {
        this.updatePlacePills(cId);
      }

      this.updateCounter(cId);
    },

    clearPin(cId, placeId) {
      const state = this.instances[cId];
      if (!state || state.isEvaluated) return;

      delete state.studentMarks[placeId];

      // Also remove match if any
      for (const [targetId, pId] of Object.entries(state.studentMatches)) {
        if (pId === placeId) {
          delete state.studentMatches[targetId];
        }
      }

      this.renderStudentPins(cId);
      if (state.activeMode === 'match') {
        this.renderMatchTargets(cId);
      }
      this.updatePlacePills(cId);
      this.updateCounter(cId);
    },

    clearActivePin(cId) {
      const state = this.instances[cId];
      if (!state || state.isEvaluated) return;
      const curPlace = state.places[state.selectedPlaceIndex];
      if (curPlace) this.clearPin(cId, curPlace.id);
    },

    updateCounter(cId) {
      const state = this.instances[cId];
      if (!state) return;

      const count = Object.keys(state.studentMarks).length;
      const total = state.places.length;
      const counterEl = document.getElementById(`${cId}_markedCountText`);
      if (counterEl) {
        counterEl.textContent = state.isEm
          ? `${count} / ${total} Places Done`
          : `${count} / ${total} இடங்கள் முடிக்கப்பட்டன`;
      }
    },

    // -------------------------------------------------------------------------
    // RENDER STUDENT PINS ON MAP
    // -------------------------------------------------------------------------
    renderStudentPins(cId) {
      const state = this.instances[cId];
      if (!state) return;

      const layer = document.getElementById(`${cId}_studentPinsLayer`);
      if (!layer) return;

      const isEm = state.isEm;
      let pinsSvg = '';

      state.places.forEach((p, idx) => {
        const mark = state.studentMarks[p.id];
        if (!mark) return;

        const numLabel = p.numLabel || (idx + 1);
        const pName = isEm ? p.nameEnglish : p.nameTamil;

        let pinColor = '#0284c7';
        if (state.isEvaluated && state.results && state.results.itemScores[p.id]) {
          const sc = state.results.itemScores[p.id];
          pinColor = sc.grade === 'exact' ? '#10b981' : (sc.grade === 'near' ? '#f59e0b' : '#ef4444');
        }

        pinsSvg += `
          <g transform="translate(${mark.x}, ${mark.y})" class="student-pin-group">
            <ellipse cx="0" cy="1" rx="6" ry="2.5" fill="rgba(0,0,0,0.4)" />
            <path d="M 0 0 C -7 -14 -10 -20 0 -28 C 10 -20 7 -14 0 0 Z" fill="${pinColor}" stroke="#ffffff" stroke-width="1.4" filter="url(#${cId}_dropGlow)" />
            <circle cx="0" cy="-18" r="4.5" fill="#ffffff" />
            <rect x="8" y="-28" width="${pName.length * 7 + 16}" height="18" rx="4" fill="rgba(15,23,42,0.92)" stroke="${pinColor}" stroke-width="1.2" />
            <text x="12" y="-15" fill="#ffffff" font-size="9.5" font-weight="900">${numLabel} ${pName}</text>
          </g>
        `;
      });

      layer.innerHTML = pinsSvg;
    },

    // -------------------------------------------------------------------------
    // FINISH AND EVALUATE (Both Modes)
    // -------------------------------------------------------------------------
    finishAndEvaluate(cId) {
      const state = this.instances[cId];
      if (!state || state.isEvaluated) return;

      state.isEvaluated = true;

      const targetLayer = document.getElementById(`${cId}_targetAnswerLayer`);
      const offsetLayer = document.getElementById(`${cId}_offsetLinesLayer`);

      let totalScore = 0;
      const itemScores = {};
      let targetKeySvg = '';
      let offsetLinesSvg = '';

      state.places.forEach(p => {
        const target = p.coords;
        const tolerance = p.tolerance || 40;
        const mark = state.studentMarks[p.id];

        let distance = null;
        let grade = 'unmarked';
        let earnedMark = 0;

        if (state.activeMode === 'match') {
          // Point & Match grading: direct match comparison
          const targetMatchedPlaceId = state.studentMatches[p.id];
          if (targetMatchedPlaceId) {
            if (targetMatchedPlaceId === p.id) {
              grade = 'exact';
              earnedMark = 1.0;
            } else {
              grade = 'inaccurate';
              earnedMark = 0.0;
            }
          }
        } else {
          // Free Pin Marking grading: Euclidean distance
          if (mark) {
            distance = Math.round(Math.hypot(mark.x - target.x, mark.y - target.y));
            if (distance <= tolerance) {
              grade = 'exact';
              earnedMark = 1.0;
            } else if (distance <= tolerance * 1.8) {
              grade = 'near';
              earnedMark = 0.5;
            } else {
              grade = 'inaccurate';
              earnedMark = 0.0;
            }

            offsetLinesSvg += `
              <line x1="${mark.x}" y1="${mark.y}" x2="${target.x}" y2="${target.y}" 
                    stroke="${grade === 'exact' ? '#10b981' : (grade === 'near' ? '#f59e0b' : '#ef4444')}" 
                    stroke-width="2" stroke-dasharray="4,4" opacity="0.85" />
            `;
          }
        }

        totalScore += earnedMark;

        itemScores[p.id] = {
          place: p,
          mark: mark,
          target: target,
          distance: distance,
          grade: grade,
          earnedMark: earnedMark
        };

        // Golden Star Answer Key
        const pName = state.isEm ? p.nameEnglish : p.nameTamil;
        targetKeySvg += `
          <g transform="translate(${target.x}, ${target.y})">
            <circle cx="0" cy="0" r="14" fill="#f59e0b" opacity="0.3" class="pin-pulse-ring" />
            <polygon points="0,-10 3,-3 10,-3 5,2 7,9 0,5 -7,9 -5,2 -10,-3 -3,-3" fill="#fbbf24" stroke="#000000" stroke-width="1" />
            <rect x="12" y="-10" width="${pName.length * 7 + 18}" height="18" rx="4" fill="#0f172a" stroke="#fbbf24" stroke-width="1.2" />
            <text x="16" y="3" fill="#fbbf24" font-size="9.5" font-weight="900">&#9733; ${pName}</text>
          </g>
        `;
      });

      if (targetLayer) targetLayer.innerHTML = targetKeySvg;
      if (offsetLayer) offsetLayer.innerHTML = offsetLinesSvg;

      this.renderStudentPins(cId);

      state.results = {
        totalScore: totalScore,
        maxMarks: state.maxMarks,
        percentage: Math.round((totalScore / state.maxMarks) * 100),
        itemScores: itemScores
      };

      this.renderScorecard(state);

      const finishBtn = document.getElementById(`${cId}_btnFinish`);
      if (finishBtn) {
        finishBtn.innerHTML = `<span>&#10003;</span> <span>${state.isEm ? 'Evaluated! See Scorecard Below' : 'மதிப்பிடப்பட்டது! கீழே முடிவுகளைப் பார்க்கவும்'}</span>`;
        finishBtn.style.background = '#334155';
        finishBtn.disabled = true;
      }
    },

    // -------------------------------------------------------------------------
    // SCORECARD & DIAGNOSTICS
    // -------------------------------------------------------------------------
    renderScorecard(state) {
      const cId = state.containerId;
      const isEm = state.isEm;
      const res = state.results;
      const resArea = document.getElementById(`${cId}_resultArea`);
      if (!resArea) return;

      const isCentum = res.totalScore === state.maxMarks;
      const isGood = res.percentage >= 60;
      const gradeClass = isCentum ? 'grade-centum' : (isGood ? 'grade-good' : 'grade-practice');

      const gradeText = isCentum
        ? (isEm ? '&#127942; Outstanding! 100% Centum Accuracy' : '&#127942; அற்புதம்! 100% முழு மதிப்பெண்')
        : (isGood
          ? (isEm ? '&#128218; Good Effort! Revise tips below for 8/8' : '&#128218; நல்ல முயற்சி! 8/8 பெற குறிப்புகளைப் படித்து மீண்டும் முயலவும்')
          : (isEm ? '&#127919; Needs Practice! Follow examiner tips below' : '&#127919; கூடுதல் பயிற்சி தேவை! அரசுத் தேர்வு குறிப்புகளைப் பின்பற்றவும்'));

      const html = `
        <div class="eval-scorecard-wrap">
          <div class="eval-score-hero">
            <div>
              <div style="font-size:11px; font-weight:800; color:#94a3b8; text-transform:uppercase; margin-bottom:4px;">
                ${isEm ? 'BOARD EXAM EVALUATION RESULT' : 'அரசுப் பொதுத்தேர்வு விடை மதிப்பீட்டு முடிவு'}
              </div>
              <div class="eval-score-num-box">
                <span class="eval-score-badge">${res.totalScore.toFixed(1)} / ${state.maxMarks}</span>
                <span style="font-size:15px; color:#94a3b8; font-weight:700;">(${res.percentage}%)</span>
                <span class="eval-grade-pill ${gradeClass}">${gradeText}</span>
              </div>
            </div>

            <div style="display:flex; gap:8px;">
              <button type="button" class="eval-tool-btn" style="background:#0284c7; color:#fff;" onclick="MapPracticeEvaluator.speakFeedback('${cId}')">
                <span>&#128266;</span> <span>${isEm ? 'Hear Feedback' : 'மதிப்பீட்டைக் கேள்'}</span>
              </button>
              <button type="button" class="eval-tool-btn" style="background:#334155; color:#fff;" onclick="MapPracticeEvaluator.retryPractice('${cId}')">
                <span>&#8635;</span> <span>${isEm ? 'Practice Again' : 'மீண்டும் பயிற்சி செய்'}</span>
              </button>
            </div>
          </div>

          <!-- Color Legend -->
          <div style="display:flex; align-items:center; gap:12px; font-size:11px; font-weight:700; color:#94a3b8; flex-wrap:wrap;">
            <span>${isEm ? 'Map Legend:' : 'குறியீடு விளக்கம்:'}</span>
            <span style="color:#10b981;">● ${isEm ? 'Exact (1 Mark)' : 'துல்லியம் (1 மதிப்பெண்)'}</span>
            <span style="color:#f59e0b;">● ${isEm ? 'Near (0.5 Mark)' : 'அருகில் (0.5 மதிப்பெண்)'}</span>
            <span style="color:#ef4444;">● ${isEm ? 'Inaccurate (0)' : 'தவறியது (0)'}</span>
            <span style="color:#fbbf24;">★ ${isEm ? 'Official Key' : 'அரசு மாதிரி விடை'}</span>
          </div>

          <!-- Diagnostic Table -->
          <div style="overflow-x:auto;">
            <table class="eval-diag-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>${isEm ? 'PLACE TO MARK' : 'குறிக்க வேண்டிய இடம்'}</th>
                  <th>${isEm ? 'STATUS' : 'மதிப்பீட்டு நிலை'}</th>
                  <th>${isEm ? 'MARKS' : 'மதிப்பெண்'}</th>
                  <th>${isEm ? 'EXAMINER LANDMARK TIP' : 'அரசுத் தேர்வுக்கான நினைவூட்டல் குறிப்பு'}</th>
                </tr>
              </thead>
              <tbody>
                ${state.places.map((p, idx) => {
                  const s = res.itemScores[p.id];
                  const pName = isEm ? p.nameEnglish : p.nameTamil;
                  const numLabel = p.numLabel || (idx + 1);

                  let statusHtml = '';
                  if (s.grade === 'exact') {
                    statusHtml = `<span style="color:#10b981; font-weight:800;">&#10003; ${isEm ? 'Exact' : 'துல்லியமானது'}</span>`;
                  } else if (s.grade === 'near') {
                    statusHtml = `<span style="color:#f59e0b; font-weight:800;">&#9888; ${isEm ? 'Near Target' : 'அருகில்'}</span>`;
                  } else if (s.grade === 'inaccurate') {
                    statusHtml = `<span style="color:#ef4444; font-weight:800;">&times; ${isEm ? 'Inaccurate' : 'தவறியது'}</span>`;
                  } else {
                    statusHtml = `<span style="color:#64748b; font-weight:700;">- ${isEm ? 'Unmarked' : 'குறிக்கப்படவில்லை'}</span>`;
                  }

                  const tip = isEm ? p.tipEnglish : p.tipTamil;

                  return `
                    <tr>
                      <td style="font-weight:800; color:#38bdf8;">${numLabel}</td>
                      <td style="font-weight:800;">${pName}</td>
                      <td>${statusHtml}</td>
                      <td style="font-weight:800; color:#38bdf8;">+${s.earnedMark.toFixed(1)}</td>
                      <td style="color:#cbd5e1; font-size:11px; line-height:1.4;">&#128161; ${tip}</td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;

      resArea.innerHTML = html;
      resArea.style.display = 'block';

      this.speakFeedback(cId);
    },

    // -------------------------------------------------------------------------
    // POPUP MODAL FOR OFFICIAL BOARD TEXTBOOK MAP
    // -------------------------------------------------------------------------
    showOfficialImagePopup(cId) {
      const state = this.instances[cId];
      if (!state || !state.qSet.officialImage) return;

      const existing = document.getElementById('evalOfficialImageModal');
      if (existing) existing.remove();

      const modal = document.createElement('div');
      modal.id = 'evalOfficialImageModal';
      modal.className = 'eval-image-popup-overlay';
      modal.style.cssText = 'position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.85); z-index:99999; display:flex; align-items:center; justify-content:center; padding:12px;';
      modal.onclick = (e) => { if (e.target === modal) modal.remove(); };

      const isEm = state.isEm;
      const title = isEm ? state.qSet.titleEnglish : state.qSet.titleTamil;

      modal.innerHTML = `
        <div style="background:#0f172a; border:1.5px solid #38bdf8; border-radius:12px; max-width:850px; max-height:90vh; display:flex; flex-direction:column; overflow:hidden;">
          <div style="padding:10px 14px; background:#1e293b; border-bottom:1px solid #334155; display:flex; align-items:center; justify-content:space-between;">
            <div style="font-size:13px; font-weight:800; color:#38bdf8;">
              &#128065; ${isEm ? 'Official Textbook Map:' : 'அரசு பாடப்புத்தக மாதிரி வரைபடம்:'} ${title}
            </div>
            <button type="button" onclick="document.getElementById('evalOfficialImageModal').remove()" style="background:none; border:none; color:#94a3b8; font-size:22px; cursor:pointer;">&times;</button>
          </div>
          <div style="padding:8px; background:#090e17; overflow:auto; text-align:center;">
            <img src="${state.qSet.officialImage}" alt="${title}" style="max-width:100%; max-height:75vh; border-radius:8px; display:inline-block;" />
          </div>
        </div>
      `;

      document.body.appendChild(modal);
    },

    // -------------------------------------------------------------------------
    // SPEECH FEEDBACK
    // -------------------------------------------------------------------------
    speakFeedback(cId) {
      const state = this.instances[cId];
      if (!state || !state.results || !('speechSynthesis' in window)) return;

      window.speechSynthesis.cancel();
      const isEm = state.isEm;
      const res = state.results;
      let text = '';

      if (isEm) {
        text = `You scored ${res.totalScore} marks out of ${state.maxMarks} in this map practice. `;
        if (res.totalScore === state.maxMarks) {
          text += 'Outstanding! Centum marks for Class 10 Board Exam.';
        } else {
          text += 'Review the official landmark tips below to achieve full 8 out of 8 in the board examination.';
        }
      } else {
        text = `இந்த வரைபடப் பயிற்சியில் நீங்கள் ${state.maxMarks} க்கு ${res.totalScore} மதிப்பெண்கள் பெற்றுள்ளீர்கள். `;
        if (res.totalScore === state.maxMarks) {
          text += 'அற்புதம்! அரசு பொதுத்தேர்வில் முழு மதிப்பெண் பெறும் வகையில் நீங்கள் இடங்களை சரியாக குறித்துள்ளீர்கள்.';
        } else {
          text += '8-க்கு 8 மதிப்பெண் பெற, கீழே கொடுக்கப்பட்டுள்ள நினைவூட்டல் குறிப்புகளைப் படித்து மீண்டும் பயிற்சி செய்யவும்.';
        }
      }

      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = isEm ? 'en-IN' : 'ta-IN';
      utter.rate = 0.95;
      state.speechUtterance = utter;
      window.speechSynthesis.speak(utter);
    },

    stopVoice() {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    },

    // -------------------------------------------------------------------------
    // RETRY PRACTICE
    // -------------------------------------------------------------------------
    retryPractice(cId) {
      const state = this.instances[cId];
      if (!state) return;

      this.stopVoice();
      state.studentMarks = {};
      state.studentMatches = {};
      state.isEvaluated = false;
      state.results = null;

      const targetLayer = document.getElementById(`${cId}_targetAnswerLayer`);
      const offsetLayer = document.getElementById(`${cId}_offsetLinesLayer`);
      const resArea = document.getElementById(`${cId}_resultArea`);

      if (targetLayer) targetLayer.innerHTML = '';
      if (offsetLayer) offsetLayer.innerHTML = '';
      if (resArea) resArea.style.display = 'none';

      this.resetView(cId);
      this.updateModeUI(cId);
      this.selectPlace(cId, 0);

      const finishBtn = document.getElementById(`${cId}_btnFinish`);
      if (finishBtn) {
        finishBtn.innerHTML = `
          <span>&#127937;</span>
          <span>${state.isEm ? 'Finish & Evaluate Map (Check Marks)' : 'விடை வரைபடத்தை சமர்ப்பித்து திருத்து (Evaluate)'}</span>
          <span>&#10148;</span>
        `;
        finishBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        finishBtn.disabled = false;
      }
    }
  };

  window.MapPracticeEvaluator = MapPracticeEvaluator;
})();
