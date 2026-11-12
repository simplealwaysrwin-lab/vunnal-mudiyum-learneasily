// =============================================================================
// 10th Social Science - Interactive Map Marking Practice & Evaluation Engine
// Pure UTF-8 • Full Touch & Mouse Support • Real-time Scoring & Examiner Feedback
// =============================================================================

(function() {
  'use strict';

  // ---------------------------------------------------------------------------
  // 1. COMPREHENSIVE CURRICULUM MAP DATABASE (All 12 Units + Question 43 Board Model)
  // ---------------------------------------------------------------------------
  const CURRICULUM_MAP_DATABASE = {
    // Board Exam Model 8 Places (Question 43 - Compulsory 8 Marks)
    "board_model": {
      id: "board_model",
      titleTamil: "அரசு பொதுத்தேர்வு மாதிரி வரைபடம் (வினா எண் 43 - 8 மதிப்பெண்கள்)",
      titleEnglish: "Board Exam Model Map (Question 43 - 8 Marks)",
      mapType: "india",
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
          tolerance: 55,
          tipTamil: "ராஜஸ்தானின் மேற்கு பகுதியில் ஆரவல்லி மலைக்கு மேற்கே உள்ள வறண்ட பாலைமண் பிரதேசம்.",
          tipEnglish: "Arid desert soil region in western Rajasthan, west of the Aravalli range."
        },
        {
          id: "ind_mumbai",
          num: 5,
          numLabel: "(v)",
          nameTamil: "மும்பை துறைமுகம்",
          nameEnglish: "Mumbai Port",
          coords: { x: 270, y: 638 },
          tolerance: 40,
          tipTamil: "மகாராஷ்டிராவின் மேற்கு கடற்கரை முகப்பில் உள்ள வளைவுப் புள்ளியில் துல்லியமாக புள்ளியிடவும்.",
          tipEnglish: "Mark the indicator dot directly on the western coastline indentation of Maharashtra."
        },
        {
          id: "ind_air_chennai_kolkata",
          num: 6,
          numLabel: "(vi)",
          nameTamil: "சென்னை - கொல்கத்தா வான்வழிப் பாதை",
          nameEnglish: "Chennai to Kolkata Air Route",
          coords: { x: 585, y: 670 },
          tolerance: 55,
          tipTamil: "சென்னையையும் கொல்கத்தாவையும் இணைக்கும் கடற்கரை வளைந்த வான்வழிப் பாதை.",
          tipEnglish: "Eastern coastal flight corridor connecting Chennai (Tamil Nadu) and Kolkata (West Bengal)."
        },
        {
          id: "ind_goa",
          num: 7,
          numLabel: "(vii)",
          nameTamil: "கோவா",
          nameEnglish: "Goa",
          coords: { x: 285, y: 780 },
          tolerance: 40,
          tipTamil: "மகாராஷ்டிரா மற்றும் கர்நாடகாவின் எல்லைப் பகுதியில் உள்ள இந்தியாவின் மிகச்சிறிய கடற்கரை மாநிலம்.",
          tipEnglish: "Smallest state of India located on the Konkan coast between Maharashtra and Karnataka."
        },
        {
          id: "ind_river_ganga",
          num: 8,
          numLabel: "(viii)",
          nameTamil: "கங்கை ஆறு",
          nameEnglish: "River Ganga",
          coords: { x: 515, y: 345 },
          tolerance: 48,
          tipTamil: "இமயமலையில் தொடங்கி உ.பி, பீகார், வங்கம் வழியாக வங்காள விரிகுடாவில் கலக்கும் புனித நதி.",
          tipEnglish: "Longest perennial river of India flowing from Himalayas through UP, Bihar into Bay of Bengal."
        }
      ]
    },

    // Unit 2 Geography: Major Rivers of India
    "soc_rivers": {
      id: "soc_rivers",
      titleTamil: "இந்தியாவின் முக்கிய நதிகள் (புவியியல் அலகு 1 - 8 மதிப்பெண்கள்)",
      titleEnglish: "Major Rivers of India (Geography Unit 1 - 8 Marks)",
      mapType: "india",
      maxMarks: 8,
      places: [
        { id: "riv_ganga", num: 1, numLabel: "(1)", nameTamil: "கங்கை ஆறு", nameEnglish: "River Ganga", coords: { x: 515, y: 345 }, tolerance: 45, tipTamil: "இமயமலையில் தொடங்கி உ.பி, பீகார் வழியாக வங்காள விரிகுடாவில் கலக்கும் நதி.", tipEnglish: "Flows east from Uttarakhand through UP and Bihar to Bay of Bengal." },
        { id: "riv_brahmaputra", num: 2, numLabel: "(2)", nameTamil: "பிரம்மபுத்திரா ஆறு", nameEnglish: "River Brahmaputra", coords: { x: 780, y: 360 }, tolerance: 45, tipTamil: "திபெத்தில் சாங்போ எனத் தொடங்கி அசாம் பள்ளத்தாக்கு வழியாகப் பாய்கிறது.", tipEnglish: "Enters India in Arunachal and flows through Assam valley." },
        { id: "riv_godavari", num: 3, numLabel: "(3)", nameTamil: "கோதாவரி ஆறு (தென் கங்கை)", nameEnglish: "River Godavari", coords: { x: 490, y: 630 }, tolerance: 45, tipTamil: "நாசிக்கில் தொடங்கி ஆந்திரா வழியே வங்காள விரிகுடாவில் கலக்கிறது.", tipEnglish: "Longest peninsular river rising in Nasik, Maharashtra." },
        { id: "riv_krishna", num: 4, numLabel: "(4)", nameTamil: "கிருஷ்ணா ஆறு", nameEnglish: "River Krishna", coords: { x: 460, y: 715 }, tolerance: 45, tipTamil: "மகாபலேஸ்வரில் தொடங்கி கர்நாடகா, ஆந்திரா வழி பாய்கிறது.", tipEnglish: "Rises at Mahabaleshwar and flows eastward to Bay of Bengal." },
        { id: "riv_kaveri", num: 5, numLabel: "(5)", nameTamil: "காவிரி ஆறு", nameEnglish: "River Kaveri", coords: { x: 430, y: 885 }, tolerance: 45, tipTamil: "குடகின் தலக்காவிரியில் தொடங்கி தமிழ்நாடு வழி வங்கக்கடலில் கலக்கிறது.", tipEnglish: "Rises in Talakaveri (Karnataka) and flows through Tamil Nadu." },
        { id: "riv_narmada", num: 6, numLabel: "(6)", nameTamil: "நர்மதை ஆறு", nameEnglish: "River Narmada", coords: { x: 330, y: 520 }, tolerance: 45, tipTamil: "அமர்கண்டக்கில் தொடங்கி விந்திய-சாத்பூரா இடையே மேற்கே பாய்ந்து அரபிக்கடலில் கலக்கிறது.", tipEnglish: "West flowing river in rift valley between Vindhya and Satpura." },
        { id: "riv_tapti", num: 7, numLabel: "(7)", nameTamil: "தபதி ஆறு", nameEnglish: "River Tapti", coords: { x: 340, y: 555 }, tolerance: 45, tipTamil: "மத்தியப் பிரதேசத்தில் தொடங்கி நர்மதைக்கு தெற்கே மேற்கே அரபிக்கடலில் கலக்கிறது.", tipEnglish: "Rises in Betul (MP) and flows parallel south of Narmada." },
        { id: "riv_mahanadi", num: 8, numLabel: "(8)", nameTamil: "மகாநதி", nameEnglish: "River Mahanadi", coords: { x: 620, y: 550 }, tolerance: 45, tipTamil: "சத்தீஸ்கரில் தொடங்கி ஒடிசா வழியாக வங்கக்கடலில் கலக்கிறது (ஹிராகுட் அணை).", tipEnglish: "Flows through Chhattisgarh and Odisha to Bay of Bengal." }
      ]
    },

    // Unit 8 Economics: Major Sea Ports of India
    "soc_ports": {
      id: "soc_ports",
      titleTamil: "இந்தியாவின் முக்கிய துறைமுகங்கள் (பொருளாதாரம் அலகு 2 - 8 மதிப்பெண்கள்)",
      titleEnglish: "Major Sea Ports of India (Economics Unit 2 - 8 Marks)",
      mapType: "india",
      maxMarks: 7,
      places: [
        { id: "port_mumbai", num: 1, numLabel: "(1)", nameTamil: "மும்பை துறைமுகம்", nameEnglish: "Mumbai Port", coords: { x: 270, y: 638 }, tolerance: 40, tipTamil: "மகாராஷ்டிராவின் மேற்கு கடற்கரை வளைவில் உள்ள மிகப்பெரிய இயற்கை துறைமுகம்.", tipEnglish: "Largest natural deepwater harbor on Maharashtra coast." },
        { id: "port_kandla", num: 2, numLabel: "(2)", nameTamil: "கண்ட்லா / தீனதயாள் துறைமுகம்", nameEnglish: "Kandla Port (Deendayal)", coords: { x: 185, y: 480 }, tolerance: 40, tipTamil: "குஜராத்தின் கட்ச் வளைகுடாவில் உள்ள ஓதத் துறைமுகம் மற்றும் சிறப்பு பொருளாதார மண்டலம்.", tipEnglish: "Tidal port and Special Economic Zone in Gujarat (Gulf of Kutch)." },
        { id: "port_chennai", num: 3, numLabel: "(3)", nameTamil: "சென்னை துறைமுகம்", nameEnglish: "Chennai Port", coords: { x: 495, y: 845 }, tolerance: 40, tipTamil: "கிழக்கு கடற்கரையில் அமைந்துள்ள மிகப்பெரிய செயற்கைத் துறைமுகம்.", tipEnglish: "Second largest port and major artificial harbor on the east coast." },
        { id: "port_kolkata", num: 4, numLabel: "(4)", nameTamil: "கொல்கத்தா / ஹால்டியா துறைமுகம்", nameEnglish: "Kolkata Port (Haldia)", coords: { x: 700, y: 490 }, tolerance: 40, tipTamil: "ஹூக்ளி நதிக்கரையில் அமைந்துள்ள இந்தியாவின் ஒரே பெரிய நதிக்கரைத் துறைமுகம்.", tipEnglish: "Only major riverine port of India situated on River Hooghly." },
        { id: "port_vizag", num: 5, numLabel: "(5)", nameTamil: "விசாகப்பட்டினம் துறைமுகம்", nameEnglish: "Visakhapatnam Port", coords: { x: 585, y: 680 }, tolerance: 40, tipTamil: "ஆந்திர கடற்கரையில் டால்பின் மூக்கு குன்றுகளால் சூழப்பட்ட ஆழமான துறைமுகம்.", tipEnglish: "Deepest landlocked protected natural harbor in Andhra Pradesh." },
        { id: "port_tuticorin", num: 6, numLabel: "(6)", nameTamil: "தூத்துக்குடி / வ.உ.சி துறைமுகம்", nameEnglish: "Tuticorin (V.O.C) Port", coords: { x: 430, y: 975 }, tolerance: 40, tipTamil: "மன்னார் வளைகுடாவில் உள்ள தமிழ்நாட்டின் தென் பகுதி ஆழ்கடல் துறைமுகம்.", tipEnglish: "All-weather artificial deepsea harbor in southern Tamil Nadu." },
        { id: "port_cochin", num: 7, numLabel: "(7)", nameTamil: "கொச்சி துறைமுகம்", nameEnglish: "Cochin Port", coords: { x: 340, y: 925 }, tolerance: 40, tipTamil: "வேம்பநாட்டு காயலில் அமைந்துள்ள அரபிக்கடலின் ராணி.", tipEnglish: "Natural harbor on Willingdon Island, Queen of the Arabian Sea." }
      ]
    },

    // Unit 10 Geography: Soils, Crops and Dams of India
    "soc_soils": {
      id: "soc_soils",
      titleTamil: "மண் வகைகள், பயிர்கள் & அணைகள் (புவியியல் அலகு 3 - 8 மதிப்பெண்கள்)",
      titleEnglish: "Soils, Crops & Multipurpose Dams of India (Geography Unit 3 - 8 Marks)",
      mapType: "india",
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
      mapType: "india",
      maxMarks: 6,
      places: [
        { id: "cli_sw_monsoon", num: 1, numLabel: "(1)", nameTamil: "தென்மேற்கு பருவக்காற்று திசை", nameEnglish: "Southwest Monsoon Wind Path", coords: { x: 220, y: 750 }, tolerance: 55, tipTamil: "அரபிக்கடலில் இருந்து கேரளா நோக்கி வீசும் தென்மேற்கு பருவக்காற்று.", tipEnglish: "Arabian Sea branch blowing towards the Malabar coast." },
        { id: "cli_ne_monsoon", num: 2, numLabel: "(2)", nameTamil: "வடகிழக்கு பருவக்காற்று திசை", nameEnglish: "Northeast Monsoon Wind Path", coords: { x: 550, y: 700 }, tolerance: 55, tipTamil: "வங்காள விரிகுடாவில் இருந்து தமிழ்நாடு நோக்கி வீசும் வடகிழக்கு பருவக்காற்று.", tipEnglish: "Retreating monsoon winds bringing rainfall to Coromandel coast." },
        { id: "cli_evergreen", num: 3, numLabel: "(3)", nameTamil: "அயனமண்டல பசுமைமாறாக் காடுகள்", nameEnglish: "Tropical Evergreen Forest", coords: { x: 310, y: 780 }, tolerance: 50, tipTamil: "மேற்கு தொடர்ச்சி மலையின் மேற்கு சரிவுப் பகுதி.", tipEnglish: "Western slopes of the Western Ghats receiving heavy rainfall." },
        { id: "cli_mangrove", num: 4, numLabel: "(4)", nameTamil: "சதுப்புநில மாங்குரோவ் காடுகள்", nameEnglish: "Mangrove Tidal Forests", coords: { x: 700, y: 535 }, tolerance: 45, tipTamil: "சுந்தரவனம் மற்றும் டெல்டா முகத்துவாரப் பகுதிகள்.", tipEnglish: "Sundarbans delta and coastal estuaries." },
        { id: "cli_mawsynram", num: 5, numLabel: "(5)", nameTamil: "மௌசின்ராம் (அதிக மழை பெறும் இடம்)", nameEnglish: "Mawsynram (Heaviest Rainfall)", coords: { x: 780, y: 410 }, tolerance: 42, tipTamil: "மேகாலயாவின் காசி குன்றுகளில் அமைந்துள்ள உலகின் அதிக மழை பெறும் இடம்.", tipEnglish: "Wettest place on Earth situated in the Khasi Hills of Meghalaya." },
        { id: "cli_thar_dry", num: 6, numLabel: "(6)", nameTamil: "குறைந்த மழை பெறும் பகுதி (தார்)", nameEnglish: "Low Rainfall Region (Thar Desert)", coords: { x: 240, y: 410 }, tolerance: 50, tipTamil: "மேற்கு ராஜஸ்தானில் 25 செ.மீ-க்கும் குறைவான மழை பெறும் வறண்ட பகுதி.", tipEnglish: "Arid desert region in western Rajasthan." }
      ]
    },

    // Unit 4 Geography / Economics: Industrial Powerhouses
    "soc_industry": {
      id: "soc_industry",
      titleTamil: "தொழிலகங்கள் & வளங்கள் (புவியியல் அலகு 4 - 8 மதிப்பெண்கள்)",
      titleEnglish: "Industries & Mineral Resources of India (Geography Unit 4 - 8 Marks)",
      mapType: "india",
      maxMarks: 6,
      places: [
        { id: "ind_mumbai_high", num: 1, numLabel: "(1)", nameTamil: "மும்பை ஹை (கடல்சார் எண்ணெய் வயல்)", nameEnglish: "Mumbai High (Offshore Oil)", coords: { x: 240, y: 640 }, tolerance: 42, tipTamil: "மும்பைக்கு மேற்கே அரபிக்கடலில் அமைந்துள்ள எண்ணெய் வயல்.", tipEnglish: "Offshore oil field in the Arabian Sea off Mumbai coast." },
        { id: "ind_jamshedpur", num: 2, numLabel: "(2)", nameTamil: "ஜெம்ஷெட்பூர் (டாடா இரும்பு எஃகு)", nameEnglish: "Jamshedpur (TISCO Steel)", coords: { x: 640, y: 510 }, tolerance: 42, tipTamil: "ஜார்கண்டில் அமைந்துள்ள இந்தியாவின் முதல் இரும்பு எஃகு ஆலை நகரம்.", tipEnglish: "Steel city in Jharkhand founded by Jamsetji Tata." },
        { id: "ind_salem", num: 3, numLabel: "(3)", nameTamil: "சேலம் இரும்பு எஃகு ஆலை", nameEnglish: "Salem Steel Plant", coords: { x: 410, y: 870 }, tolerance: 42, tipTamil: "தமிழ்நாட்டின் கஞ்சமலை இரும்புத்தாது அருகே அமைந்த எஃகு ஆலை.", tipEnglish: "Special stainless steel plant in Salem, Tamil Nadu." },
        { id: "ind_ahmedabad", num: 4, numLabel: "(4)", nameTamil: "அகமதாபாத் (இந்தியாவின் மான்செஸ்டர்)", nameEnglish: "Ahmedabad (Manchester of India)", coords: { x: 250, y: 510 }, tolerance: 42, tipTamil: "குஜராத்தின் பருத்தி ஆடை உற்பத்தி தலைநகரம்.", tipEnglish: "Premier cotton textile hub in Gujarat." },
        { id: "ind_bengaluru", num: 5, numLabel: "(5)", nameTamil: "பெங்களூரு (மின்னியல் தலைநகரம்)", nameEnglish: "Bengaluru (Electronic Capital / Silicon Valley)", coords: { x: 400, y: 825 }, tolerance: 42, tipTamil: "கர்நாடகா - இந்தியாவின் மின்னியல் மற்றும் தகவல் தொழில்நுட்ப தலைநகரம்.", tipEnglish: "Electronic capital and IT hub of India in Karnataka." },
        { id: "ind_digboi", num: 6, numLabel: "(6)", nameTamil: "டிக்பாய் (மிகப்பழமையான எண்ணெய் வயல்)", nameEnglish: "Digboi (Oldest Oil Field)", coords: { x: 840, y: 350 }, tolerance: 42, tipTamil: "அசாம் மாநிலத்தில் உள்ள இந்தியாவின் மிகப்பழமையான எண்ணெய் வயல்.", tipEnglish: "Oldest operating oil well and refinery in Assam." }
      ]
    },

    // Unit 1 History: World War I (World Map)
    "soc_ww1": {
      id: "soc_ww1",
      titleTamil: "முதல் உலகப் போர் நாடுகள் (வரலாறு அலகு 1 - 8 மதிப்பெண்கள்)",
      titleEnglish: "World War I Nations & Theaters (History Unit 1 - 8 Marks)",
      mapType: "world",
      maxMarks: 8,
      places: [
        { id: "ww1_britain", num: 1, numLabel: "(1)", nameTamil: "கிரேட் பிரிட்டன் (நேச நாடு)", nameEnglish: "Great Britain (Allied Power)", coords: { x: 480, y: 175 }, tolerance: 35, tipTamil: "ஐரோப்பாவின் வடமேற்கே உள்ள தீவு நாடு; நேச நாடுகளின் தலைமை.", tipEnglish: "Island nation in northwest Europe; leader of Allied blockade." },
        { id: "ww1_france", num: 2, numLabel: "(2)", nameTamil: "பிரான்ஸ் (நேச நாடு)", nameEnglish: "France (Allied Power)", coords: { x: 490, y: 215 }, tolerance: 35, tipTamil: "பிரிட்டனுக்கு தெற்கே அமைந்துள்ள மேற்கு ஐரோப்பிய நேச நாடு.", tipEnglish: "Western Front allied republic situated south of Britain." },
        { id: "ww1_germany", num: 3, numLabel: "(3)", nameTamil: "ஜெர்மனி (மைய நாடு)", nameEnglish: "Germany (Central Power)", coords: { x: 520, y: 195 }, tolerance: 35, tipTamil: "மத்திய ஐரோப்பிய வல்லரசு; மைய நாடுகளின் முன்னணி நாடு.", tipEnglish: "Central European power between France and Russia." },
        { id: "ww1_italy", num: 4, numLabel: "(4)", nameTamil: "இத்தாலி (நேச நாடு)", nameEnglish: "Italy (Allied Power)", coords: { x: 525, y: 245 }, tolerance: 35, tipTamil: "மத்திய தரைக்கடலில் பூட் வடிவ தீபகற்ப நாடு.", tipEnglish: "Boot-shaped peninsula in the Mediterranean Sea." },
        { id: "ww1_austria", num: 5, numLabel: "(5)", nameTamil: "ஆஸ்திரிய-ஹங்கேரி (மைய நாடு)", nameEnglish: "Austria-Hungary (Central Power)", coords: { x: 545, y: 215 }, tolerance: 35, tipTamil: "ஜெர்மனிக்கு தெற்கே உள்ள இரட்டை முடியாட்சி கூட்டணி நாடு.", tipEnglish: "Dual monarchy ally south of Germany." },
        { id: "ww1_russia", num: 6, numLabel: "(6)", nameTamil: "ரஷ்யா (நேச நாடு)", nameEnglish: "Russia (Allied Power)", coords: { x: 670, y: 160 }, tolerance: 45, tipTamil: "கிழக்கு ஐரோப்பாவில் பரவியுள்ள பரப்பளவில் மிகப்பெரிய நேச நாடு.", tipEnglish: "Expansive empire on the Eastern Front." },
        { id: "ww1_turkey", num: 7, numLabel: "(7)", nameTamil: "துருக்கி / ஒட்டோமான் பேரரசு", nameEnglish: "Turkey (Ottoman Empire)", coords: { x: 585, y: 250 }, tolerance: 35, tipTamil: "கருங்கடல் மற்றும் மத்திய தரைக்கடல் இணைப்பில் உள்ள மைய நாடு.", tipEnglish: "Controlled Black Sea straits (Gallipoli campaign)." },
        { id: "ww1_sarajevo", num: 8, numLabel: "(8)", nameTamil: "சரஜீவோ (போஸ்னியா)", nameEnglish: "Sarajevo (Bosnia)", coords: { x: 540, y: 235 }, tolerance: 30, tipTamil: "ஆஸ்திரிய இளவரசர் பெர்டினண்ட் சுடப்பட்ட இடம் - போரின் உடனடிக் காரணம்.", tipEnglish: "Assassination site of Archduke Franz Ferdinand on 28 June 1914." }
      ]
    },

    // Unit 9 History: World War II (World Map)
    "soc_ww2": {
      id: "soc_ww2",
      titleTamil: "இரண்டாம் உலகப் போர் நாடுகள் (வரலாறு அலகு 3 - 8 மதிப்பெண்கள்)",
      titleEnglish: "World War II Powers & Theaters (History Unit 3 - 8 Marks)",
      mapType: "world",
      maxMarks: 8,
      places: [
        { id: "ww2_britain", num: 1, numLabel: "(1)", nameTamil: "கிரேட் பிரிட்டன் (நேச நாடு)", nameEnglish: "Great Britain (Allied Power)", coords: { x: 480, y: 175 }, tolerance: 35, tipTamil: "வின்ஸ்டன் சர்ச்சில் தலைமை தாங்கிய நேச நாடு.", tipEnglish: "Winston Churchill's island nation resisting Axis air raids." },
        { id: "ww2_france", num: 2, numLabel: "(2)", nameTamil: "பிரான்ஸ் (நேச நாடு)", nameEnglish: "France (Allied Power)", coords: { x: 490, y: 215 }, tolerance: 35, tipTamil: "சார்லஸ் டி கால் தலைமையிலான சுதந்திர பிரான்ஸ் இயக்கம்.", tipEnglish: "Allied republic liberated after Normandy D-Day landings." },
        { id: "ww2_ussr", num: 3, numLabel: "(3)", nameTamil: "சோவியத் யூனியன் (USSR)", nameEnglish: "Soviet Union (USSR)", coords: { x: 670, y: 160 }, tolerance: 45, tipTamil: "ஸ்டாலின்கிராட் போரில் நாஜிக்களை வென்ற சோவியத் யூனியன்.", tipEnglish: "Turned the tide of war at Battle of Stalingrad." },
        { id: "ww2_usa", num: 4, numLabel: "(4)", nameTamil: "அமெரிக்கா (USA)", nameEnglish: "United States of America", coords: { x: 230, y: 220 }, tolerance: 45, tipTamil: "முத்து துறைமுகத் தாக்குதலுக்குப் பின் போரில் இணைந்த வல்லரசு.", tipEnglish: "Arsenal of democracy entering war after Pearl Harbor." },
        { id: "ww2_germany", num: 5, numLabel: "(5)", nameTamil: "ஜெர்மனி (அச்சு நாடு)", nameEnglish: "Germany (Axis Power)", coords: { x: 520, y: 195 }, tolerance: 35, tipTamil: "ஹிட்லரின் நாஜி ஜெர்மனி - இரண்டாம் உலகப்போரைத் தொடங்கியது.", tipEnglish: "Hitler's Axis power invading Poland in Sept 1939." },
        { id: "ww2_italy", num: 6, numLabel: "(6)", nameTamil: "இத்தாலி (அச்சு நாடு)", nameEnglish: "Italy (Axis Power)", coords: { x: 525, y: 245 }, tolerance: 35, tipTamil: "முசோலினியின் பாசிச நாடு.", tipEnglish: "Mussolini's Mediterranean Axis partner." },
        { id: "ww2_japan", num: 7, numLabel: "(7)", nameTamil: "ஜப்பான் (அச்சு நாடு)", nameEnglish: "Japan (Axis Power)", coords: { x: 860, y: 235 }, tolerance: 35, tipTamil: "ஆசிய-பசிபிக் பிராந்தியத்தில் ஆதிக்கம் செலுத்திய அச்சு நாடு.", tipEnglish: "Imperial power in East Asia (Hiroshima/Nagasaki atomic end)." },
        { id: "ww2_pearl", num: 8, numLabel: "(8)", nameTamil: "முத்து துறைமுகம் (ஹவாய்)", nameEnglish: "Pearl Harbor (Hawaii)", coords: { x: 105, y: 280 }, tolerance: 30, tipTamil: "1941 டிசம்பர் 7 அன்று ஜப்பான் தாக்கிய அமெரிக்க கடற்படை தளம்.", tipEnglish: "US naval base attacked by Japan on 7 December 1941." }
      ]
    }
  };

  // Helper to resolve question set
  function resolveCurriculumQuestionSet(qItem) {
    if (!qItem) return CURRICULUM_MAP_DATABASE["board_model"];
    const id = (qItem.id || '').toLowerCase();
    const qText = (qItem.q || '').toLowerCase();
    const title = (qItem.title || '').toLowerCase();

    // Check specific unit signatures
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

    // Default to Board Exam Model Question 43 (8 places)
    return CURRICULUM_MAP_DATABASE["board_model"];
  }

  // ---------------------------------------------------------------------------
  // 2. VECTOR BLANK MAP SVGs (India & World)
  // ---------------------------------------------------------------------------
  function getBlankIndiaSvgHtml(containerId, isEm) {
    const seaLabels = isEm ? `
      <text x="140" y="780" fill="#38bdf8" opacity="0.45" font-size="22" font-weight="800" letter-spacing="4">ARABIAN SEA</text>
      <text x="640" y="780" fill="#38bdf8" opacity="0.45" font-size="22" font-weight="800" letter-spacing="4">BAY OF BENGAL</text>
      <text x="330" y="1120" fill="#38bdf8" opacity="0.45" font-size="20" font-weight="800" letter-spacing="4">INDIAN OCEAN</text>
    ` : `
      <text x="140" y="780" fill="#38bdf8" opacity="0.45" font-size="22" font-weight="800" letter-spacing="4">அரபிக்கடல்</text>
      <text x="640" y="780" fill="#38bdf8" opacity="0.45" font-size="22" font-weight="800" letter-spacing="4">வங்காள விரிகுடா</text>
      <text x="330" y="1120" fill="#38bdf8" opacity="0.45" font-size="20" font-weight="800" letter-spacing="4">இந்தியப் பெருங்கடல்</text>
    `;

    return `
      <svg id="${containerId}_svgMap" viewBox="0 0 1000 1150" class="eval-blank-map-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="${containerId}_glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="${containerId}_oceanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0a192f" />
            <stop offset="100%" stop-color="#030c1b" />
          </linearGradient>
          <linearGradient id="${containerId}_landGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1e293b" />
            <stop offset="100%" stop-color="#0f172a" />
          </linearGradient>
        </defs>

        <!-- Ocean Water Background -->
        <rect width="1000" height="1150" fill="url(#${containerId}_oceanGrad)" />

        <!-- Compass Rose (N ↑) -->
        <g transform="translate(880, 110)" opacity="0.85">
          <circle cx="0" cy="0" r="30" fill="none" stroke="#38bdf8" stroke-dasharray="3,3" stroke-width="1.5" />
          <polygon points="0,-26 5,-6 0,0 -5,-6" fill="#ef4444" />
          <polygon points="0,26 5,6 0,0 -5,6" fill="#94a3b8" />
          <polygon points="26,0 6,5 0,0 6,-5" fill="#94a3b8" />
          <polygon points="-26,0 -6,5 0,0 -6,-5" fill="#94a3b8" />
          <text x="0" y="-32" fill="#ef4444" font-size="14" font-weight="900" text-anchor="middle">N</text>
          <text x="0" y="42" fill="#94a3b8" font-size="12" font-weight="800" text-anchor="middle">S</text>
          <text x="38" y="4" fill="#94a3b8" font-size="12" font-weight="800" text-anchor="middle">E</text>
          <text x="-38" y="4" fill="#94a3b8" font-size="12" font-weight="800" text-anchor="middle">W</text>
        </g>

        <!-- Tropic of Cancer (23.5° N) Reference Line -->
        <line x1="160" y1="535" x2="880" y2="535" stroke="#f59e0b" stroke-width="1.2" stroke-dasharray="6,4" opacity="0.4" />
        <text x="890" y="539" fill="#f59e0b" opacity="0.6" font-size="11" font-weight="700">23.5° N</text>

        <!-- Water Body Labels -->
        ${seaLabels}

        <!-- Neighboring Landmarks (Classroom Board Exam Atlas Cues) -->
        <text x="120" y="280" fill="#64748b" opacity="0.4" font-size="16" font-weight="700">PAKISTAN</text>
        <text x="520" y="160" fill="#64748b" opacity="0.4" font-size="16" font-weight="700">CHINA / TIBET</text>
        <text x="500" y="285" fill="#64748b" opacity="0.4" font-size="15" font-weight="700">NEPAL</text>
        <text x="690" y="275" fill="#64748b" opacity="0.4" font-size="14" font-weight="700">BHUTAN</text>
        <text x="680" y="450" fill="#64748b" opacity="0.4" font-size="15" font-weight="700">BANGLADESH</text>
        <text x="830" y="430" fill="#64748b" opacity="0.4" font-size="14" font-weight="700">MYANMAR</text>

        <!-- Sri Lanka -->
        <g id="${containerId}_sriLanka" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5">
          <path d="M 470 1020 C 485 1010, 500 1025, 495 1050 C 490 1075, 475 1085, 465 1075 C 455 1060, 455 1030, 470 1020 Z" />
          <text x="510" y="1055" fill="#64748b" opacity="0.6" font-size="12" font-weight="700">SRI LANKA</text>
        </g>

        <!-- Andaman & Nicobar Islands -->
        <g id="${containerId}_andaman" fill="#38bdf8" opacity="0.7">
          <ellipse cx="800" cy="810" rx="4" ry="12" />
          <ellipse cx="802" cy="835" rx="4" ry="10" />
          <ellipse cx="805" cy="860" rx="3" ry="8" />
          <ellipse cx="820" cy="910" rx="5" ry="12" />
          <text x="835" y="850" fill="#38bdf8" opacity="0.5" font-size="11" font-weight="700">ANDAMAN &amp; NICOBAR</text>
        </g>

        <!-- Lakshadweep Islands -->
        <g id="${containerId}_lakshadweep" fill="#38bdf8" opacity="0.7">
          <circle cx="230" cy="880" r="3.5" />
          <circle cx="235" cy="905" r="4" />
          <circle cx="240" cy="930" r="3.5" />
          <text x="140" y="905" fill="#38bdf8" opacity="0.5" font-size="11" font-weight="700">LAKSHADWEEP</text>
        </g>

        <!-- PAN AND ZOOM GROUP -->
        <g id="${containerId}_panZoomGroup" class="pan-zoom-container">
          <!-- MAINLAND BLANK OUTLINE MAP (Without names, ready for student pencil practice) -->
          <path id="${containerId}_mainland" class="eval-map-land-path" fill="url(#${containerId}_landGrad)" stroke="#38bdf8" stroke-width="2.3" stroke-linejoin="round"
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

          <!-- STATE BOUNDARIES (Subtle classroom reference lines for orientation) -->
          <g id="${containerId}_stateBoundaries" fill="none" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.65">
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
            <path d="M 420 720 Q 380 680 340 680" />
            <path d="M 340 680 Q 280 650 250 610" />
            <path d="M 340 680 Q 380 620 420 590" />
            <path d="M 420 590 Q 500 590 560 620" />
            <path d="M 420 590 Q 350 560 260 540" />
            <path d="M 420 590 Q 430 480 440 380" />
            <path d="M 440 380 Q 380 350 340 380" />
            <path d="M 340 380 Q 290 350 240 370" />
            <path d="M 340 380 Q 340 320 330 270" />
            <path d="M 440 380 Q 530 380 570 410" />
            <path d="M 570 410 Q 600 450 640 480" />
            <path d="M 400 240 Q 420 180 420 120" />
          </g>

          <!-- CONNECTING OFFSET GUIDES LAYER (Revealed during Evaluation) -->
          <g id="${containerId}_offsetLinesLayer" class="eval-guide-layer"></g>

          <!-- OFFICIAL TARGET ANSWER KEY LAYER (Revealed during Evaluation) -->
          <g id="${containerId}_targetAnswerLayer" class="eval-target-layer"></g>

          <!-- STUDENT MARKS LAYER (Interactive Student Pins Placed Here) -->
          <g id="${containerId}_studentPinsLayer" class="eval-student-pins-layer"></g>
        </g>
      </svg>
    `;
  }

  function getBlankWorldSvgHtml(containerId, isEm) {
    return `
      <svg id="${containerId}_svgMap" viewBox="0 0 1000 600" class="eval-blank-map-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${containerId}_wOcean" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#081426" />
            <stop offset="100%" stop-color="#020813" />
          </linearGradient>
          <linearGradient id="${containerId}_wLand" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1e293b" />
            <stop offset="100%" stop-color="#0f172a" />
          </linearGradient>
        </defs>

        <rect width="1000" height="600" fill="url(#${containerId}_wOcean)" />

        <!-- Compass Rose -->
        <g transform="translate(930, 80)" opacity="0.8">
          <circle cx="0" cy="0" r="24" fill="none" stroke="#38bdf8" stroke-dasharray="2,2" stroke-width="1.2" />
          <polygon points="0,-22 4,-5 0,0 -4,-5" fill="#ef4444" />
          <polygon points="0,22 4,5 0,0 -4,5" fill="#94a3b8" />
          <text x="0" y="-26" fill="#ef4444" font-size="12" font-weight="900" text-anchor="middle">N</text>
        </g>

        <!-- Oceans -->
        <text x="120" y="320" fill="#38bdf8" opacity="0.35" font-size="18" font-weight="800" letter-spacing="4">PACIFIC OCEAN</text>
        <text x="360" y="330" fill="#38bdf8" opacity="0.35" font-size="18" font-weight="800" letter-spacing="4">ATLANTIC OCEAN</text>
        <text x="660" y="440" fill="#38bdf8" opacity="0.35" font-size="17" font-weight="800" letter-spacing="4">INDIAN OCEAN</text>
        <text x="890" y="320" fill="#38bdf8" opacity="0.35" font-size="16" font-weight="800" letter-spacing="4">PACIFIC OCEAN</text>

        <g id="${containerId}_panZoomGroup" class="pan-zoom-container">
          <!-- Continents -->
          <g fill="url(#${containerId}_wLand)" stroke="#38bdf8" stroke-width="1.6" stroke-linejoin="round">
            <!-- North America -->
            <path d="M 120 70 C 180 60, 260 70, 270 110 C 260 140, 220 160, 230 200 C 240 240, 290 270, 270 300 C 250 320, 230 310, 210 270 C 190 240, 150 250, 130 220 C 110 180, 80 130, 120 70 Z" />
            <!-- South America -->
            <path d="M 270 320 C 310 320, 360 350, 360 400 C 350 450, 320 520, 290 550 C 270 550, 260 500, 270 450 C 270 400, 250 360, 270 320 Z" />
            <!-- Eurasia (Europe + Asia) -->
            <path d="M 440 140 C 490 120, 560 110, 640 100 C 720 90, 820 110, 880 140 C 900 180, 870 230, 860 270 C 830 310, 780 340, 750 310 C 720 280, 700 240, 680 270 C 650 320, 610 300, 580 270 C 550 270, 520 280, 500 250 C 460 250, 440 210, 430 180 C 430 160, 430 150, 440 140 Z" />
            <!-- British Isles -->
            <path d="M 465 160 C 480 155, 485 175, 478 190 C 470 195, 460 180, 465 160 Z" />
            <!-- Japan -->
            <path d="M 850 210 C 865 215, 870 245, 855 260 C 845 250, 848 230, 850 210 Z" />
            <!-- Africa -->
            <path d="M 470 270 C 530 260, 570 280, 580 330 C 590 380, 580 430, 550 480 C 530 510, 500 500, 490 450 C 480 400, 430 340, 450 300 C 460 280, 465 275, 470 270 Z" />
            <!-- Australia -->
            <path d="M 780 400 C 840 390, 880 420, 870 470 C 840 500, 790 510, 770 470 C 760 440, 760 410, 780 400 Z" />
          </g>

          <g id="${containerId}_offsetLinesLayer" class="eval-guide-layer"></g>
          <g id="${containerId}_targetAnswerLayer" class="eval-target-layer"></g>
          <g id="${containerId}_studentPinsLayer" class="eval-student-pins-layer"></g>
        </g>
      </svg>
    `;
  }

  // ---------------------------------------------------------------------------
  // 3. MAP PRACTICE EVALUATOR CONTROLLER
  // ---------------------------------------------------------------------------
  const MapPracticeEvaluator = {
    instances: {}, // map containerId -> state

    initCSS() {
      if (document.getElementById('mapPracticeEvaluatorStyles')) return;
      const style = document.createElement('style');
      style.id = 'mapPracticeEvaluatorStyles';
      style.textContent = `
        /* Modal expansions for Map Evaluation */
        .ai-modal-box.map-eval-mode {
          max-width: 980px !important;
          width: 96vw !important;
          max-height: 94vh !important;
        }

        .eval-map-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: #090e17;
          color: #f8fafc;
          border-radius: 14px;
          padding: 6px 0;
          font-family: inherit;
        }

        /* Top Instructions & Mode bar */
        .eval-inst-box {
          background: linear-gradient(135deg, rgba(2, 132, 199, 0.15), rgba(15, 23, 42, 0.6));
          border: 1px solid rgba(56, 189, 248, 0.35);
          border-radius: 12px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
        }
        .eval-inst-text {
          font-size: 13px;
          color: #e2e8f0;
          line-height: 1.5;
        }
        .eval-inst-text strong {
          color: #38bdf8;
        }

        /* Place Selector Tray */
        .eval-tray-label {
          font-size: 11.5px;
          font-weight: 800;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 4px;
        }
        .eval-places-tray {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding: 4px 2px 8px 2px;
          scroll-behavior: smooth;
        }
        .eval-places-tray::-webkit-scrollbar {
          height: 6px;
        }
        .eval-places-tray::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 4px;
        }
        .eval-place-pill {
          flex-shrink: 0;
          background: #1e293b;
          border: 1.5px solid #334155;
          border-radius: 12px;
          padding: 8px 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          font-weight: 700;
          color: #cbd5e1;
          transition: all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
          user-select: none;
        }
        .eval-place-pill:hover {
          border-color: #38bdf8;
          color: #ffffff;
          transform: translateY(-1px);
        }
        .eval-place-pill.active {
          background: linear-gradient(135deg, rgba(2, 132, 199, 0.35), rgba(14, 165, 233, 0.2));
          border-color: #38bdf8;
          color: #ffffff;
          box-shadow: 0 0 12px rgba(56, 189, 248, 0.4);
        }
        .eval-place-pill.marked {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.25), rgba(5, 150, 105, 0.15));
          border-color: #10b981;
          color: #a7f3d0;
        }
        .eval-place-pill.marked.active {
          border-color: #34d399;
          box-shadow: 0 0 12px rgba(16, 185, 129, 0.5);
        }
        .pill-badge {
          font-size: 10px;
          padding: 2px 6px;
          border-radius: 6px;
          background: #334155;
          color: #94a3b8;
          font-weight: 800;
        }
        .eval-place-pill.marked .pill-badge {
          background: #065f46;
          color: #6ee7b7;
        }
        .pill-clear-btn {
          border: none;
          background: none;
          color: #ef4444;
          font-size: 14px;
          font-weight: 900;
          cursor: pointer;
          padding: 0 2px;
          opacity: 0.7;
        }
        .pill-clear-btn:hover {
          opacity: 1;
        }

        /* SVG Blank Map Wrapper */
        .eval-map-stage-wrapper {
          position: relative;
          width: 100%;
          min-height: 480px;
          height: 60vh;
          max-height: 640px;
          background: #030816;
          border: 1.5px solid #1e293b;
          border-radius: 14px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          touch-action: none;
        }
        .eval-blank-map-svg {
          width: 100%;
          height: 100%;
          cursor: crosshair;
        }
        .eval-map-land-path {
          transition: fill 0.3s ease;
        }

        /* Toolbar floating over map */
        .eval-map-toolbar {
          position: absolute;
          top: 12px;
          right: 12px;
          display: flex;
          gap: 6px;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(6px);
          padding: 5px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          z-index: 10;
        }
        .eval-tool-btn {
          background: #1e293b;
          border: 1px solid #334155;
          color: #f8fafc;
          border-radius: 6px;
          padding: 6px 10px;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: all 0.15s ease;
        }
        .eval-tool-btn:hover {
          background: #334155;
          border-color: #38bdf8;
        }

        .eval-marked-count-chip {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid #0284c7;
          border-radius: 20px;
          padding: 6px 14px;
          font-size: 12px;
          font-weight: 800;
          color: #38bdf8;
          display: flex;
          align-items: center;
          gap: 6px;
          z-index: 10;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        /* The Finish Button Bar */
        .eval-action-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          padding: 4px 0;
        }
        .eval-finish-btn {
          flex: 1;
          min-width: 260px;
          padding: 14px 24px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 900;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.35);
          transition: all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
          letter-spacing: 0.3px;
        }
        .eval-finish-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.5);
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
        }
        .eval-finish-btn:active {
          transform: translateY(0);
        }
        .eval-retry-btn {
          padding: 12px 18px;
          background: #1e293b;
          border: 1.5px solid #334155;
          color: #e2e8f0;
          border-radius: 12px;
          font-size: 13.5px;
          font-weight: 800;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .eval-retry-btn:hover {
          border-color: #94a3b8;
          color: #ffffff;
        }

        /* SVG Student Pins and Markers */
        .pin-drop-anim {
          animation: pinBounce 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        @keyframes pinBounce {
          0% { transform: translateY(-30px); opacity: 0; }
          60% { transform: translateY(4px); opacity: 1; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .pin-pulse-ring {
          animation: pinPulseRing 1.8s infinite cubic-bezier(0.2, 0.8, 0.2, 1);
          transform-origin: center;
        }
        @keyframes pinPulseRing {
          0% { r: 9; opacity: 0.8; stroke-width: 2.5; }
          100% { r: 24; opacity: 0; stroke-width: 0.5; }
        }

        /* Result Scorecard Section */
        .eval-scorecard-wrap {
          margin-top: 10px;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          border: 1.5px solid #0284c7;
          border-radius: 16px;
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          animation: slideUpFade 0.3s ease;
        }
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .eval-score-hero {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .eval-score-num-box {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .eval-score-badge {
          font-size: 32px;
          font-weight: 900;
          color: #38bdf8;
          text-shadow: 0 0 16px rgba(56, 189, 248, 0.5);
        }
        .eval-grade-pill {
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 800;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .eval-grade-pill.grade-centum {
          background: linear-gradient(135deg, #10b981, #059669);
          color: #ffffff;
          box-shadow: 0 0 14px rgba(16, 185, 129, 0.4);
        }
        .eval-grade-pill.grade-good {
          background: linear-gradient(135deg, #0284c7, #2563eb);
          color: #ffffff;
        }
        .eval-grade-pill.grade-practice {
          background: linear-gradient(135deg, #f59e0b, #d97706);
          color: #000;
        }

        /* Diagnostic Table */
        .eval-diag-table-container {
          overflow-x: auto;
        }
        .eval-diag-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 12.5px;
        }
        .eval-diag-table th {
          background: #090e17;
          color: #94a3b8;
          font-weight: 800;
          text-align: left;
          padding: 8px 12px;
          border-bottom: 1px solid #334155;
          text-transform: uppercase;
          font-size: 11px;
          letter-spacing: 0.5px;
        }
        .eval-diag-table td {
          padding: 10px 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          color: #e2e8f0;
          vertical-align: middle;
        }
        .eval-status-chip {
          padding: 3px 8px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 800;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .eval-status-chip.exact {
          background: rgba(16, 185, 129, 0.2);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.4);
        }
        .eval-status-chip.near {
          background: rgba(245, 158, 11, 0.2);
          color: #fbbf24;
          border: 1px solid rgba(245, 158, 11, 0.4);
        }
        .eval-status-chip.inaccurate {
          background: rgba(239, 68, 68, 0.2);
          color: #f87171;
          border: 1px solid rgba(239, 68, 68, 0.4);
        }
        .eval-status-chip.missed {
          background: rgba(100, 116, 139, 0.2);
          color: #cbd5e1;
          border: 1px solid rgba(100, 116, 139, 0.4);
        }

        /* Voice Speech button in scorecard */
        .eval-speech-btn {
          background: #1e293b;
          border: 1px solid #38bdf8;
          color: #38bdf8;
          border-radius: 10px;
          padding: 6px 14px;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .eval-speech-btn:hover {
          background: #0284c7;
          color: #ffffff;
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
        maxMarks: qSet.maxMarks || 8,
        isEm: isEm,
        selectedPlaceIndex: 0,
        studentMarks: {}, // placeId -> { x, y, timestamp }
        isEvaluated: false,
        results: null,
        zoom: 1.0,
        panX: 0,
        panY: 0,
        speechUtterance: null
      };

      this.instances[cId] = state;
      this.renderHTML(state);
      this.bindEvents(state);
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
        ? getBlankWorldSvgHtml(cId, isEm)
        : getBlankIndiaSvgHtml(cId, isEm);

      const html = `
        <div class="eval-map-container" id="${cId}_wrapper">
          <!-- Top Instructions Banner -->
          <div class="eval-inst-box">
            <div class="eval-inst-text">
              <strong>${isEm ? '🎯 Practice Map Marking for Board Exam:' : '🎯 பொதுத்தேர்வு மாதிரி வரைபடப் பயிற்சி:'}</strong>
              ${isEm 
                ? '1. Select a place below &bull; 2. Tap on the blank map to mark &bull; 3. Click "Finish & Evaluate" to check marks!'
                : '1. கீழேயுள்ள பட்டியில் இடத்தை தேர்வு செய்யவும் &bull; 2. வெற்று வரைபடத்தில் சரியான இடத்தில் தொடவும் &bull; 3. "Finish" அழுத்தி திருத்தவும்!'}
            </div>
            <div style="font-size:12px; font-weight:800; color:#38bdf8; background:rgba(56,189,248,0.15); padding:4px 10px; border-radius:8px;">
              ${isEm ? `${state.maxMarks} Marks Map Question` : `${state.maxMarks} மதிப்பெண் வரைபடம்`}
            </div>
          </div>

          <!-- Places Selector Tray -->
          <div>
            <div class="eval-tray-label">
              <span>${isEm ? 'PLACES TO MARK (Tap a place, then tap on the map):' : 'குறிக்க வேண்டிய இடங்கள் (இடத்தை தேர்வு செய்து வரைபடத்தில் தொடவும்):'}</span>
              <span id="${cId}_activePlaceName" style="color:#38bdf8; font-weight:800;">
                ${isEm ? state.places[0].nameEnglish : state.places[0].nameTamil}
              </span>
            </div>
            <div class="eval-places-tray" id="${cId}_placesTray">
              ${state.places.map((p, idx) => {
                const isAct = idx === state.selectedPlaceIndex;
                const isMarked = !!state.studentMarks[p.id];
                const pName = isEm ? p.nameEnglish : p.nameTamil;
                return `
                  <div class="eval-place-pill ${isAct ? 'active' : ''} ${isMarked ? 'marked' : ''}" 
                       id="${cId}_pill_${p.id}" 
                       onclick="MapPracticeEvaluator.selectPlace('${cId}', ${idx})">
                    <span class="pill-badge">${p.numLabel || (idx + 1)}</span>
                    <span class="pill-title">${pName}</span>
                    <span class="pill-status">${isMarked ? '✓' : '📍'}</span>
                    ${isMarked ? `<button type="button" class="pill-clear-btn" title="${isEm ? 'Clear pin' : 'நீக்கு'}" onclick="event.stopPropagation(); MapPracticeEvaluator.clearPin('${cId}', '${p.id}')">&times;</button>` : ''}
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- SVG Blank Map Stage -->
          <div class="eval-map-stage-wrapper" id="${cId}_stageWrapper">
            <!-- Floating Counter -->
            <div class="eval-marked-count-chip" id="${cId}_counterChip">
              <span>📍</span>
              <span id="${cId}_markedCountText">
                ${isEm ? `0 / ${totalPlaces} Places Marked` : `0 / ${totalPlaces} இடங்கள் குறிக்கப்பட்டுள்ளன`}
              </span>
            </div>

            <!-- Floating Map Toolbar -->
            <div class="eval-map-toolbar">
              <button type="button" class="eval-tool-btn" onclick="MapPracticeEvaluator.zoom('${cId}', 1.25)" title="${isEm ? 'Zoom In' : 'பெரிதாக்கு'}">➕</button>
              <button type="button" class="eval-tool-btn" onclick="MapPracticeEvaluator.zoom('${cId}', 0.8)" title="${isEm ? 'Zoom Out' : 'சிறிதாக்கு'}">➖</button>
              <button type="button" class="eval-tool-btn" onclick="MapPracticeEvaluator.resetZoom('${cId}')" title="${isEm ? 'Reset View' : 'இயல்பு நிலை'}">⟲</button>
              <button type="button" class="eval-tool-btn" onclick="MapPracticeEvaluator.clearAllPins('${cId}')" title="${isEm ? 'Clear All Pins' : 'அனைத்தையும் அழி'}">🗑️</button>
            </div>

            <!-- Vector Blank Map SVG -->
            ${svgMapHtml}
          </div>

          <!-- Finish Button Bar -->
          <div class="eval-action-bar" id="${cId}_actionBar">
            <button type="button" class="eval-finish-btn" id="${cId}_btnFinish" onclick="MapPracticeEvaluator.finishAndEvaluate('${cId}')">
              <span>🏁</span>
              <span>${isEm ? 'Finish & Evaluate Map (Check Marks)' : 'விடை வரைபடத்தை சமர்ப்பித்து திருத்து (Evaluate)'}</span>
              <span>➔</span>
            </button>
          </div>

          <!-- Evaluation Results Mount -->
          <div id="${cId}_resultArea" style="display:none;"></div>
        </div>
      `;

      state.containerEl.innerHTML = html;
    },

    // -------------------------------------------------------------------------
    // BIND EVENT LISTENERS (Clicks & Touches on SVG Blank Map)
    // -------------------------------------------------------------------------
    bindEvents(state) {
      const cId = state.containerId;
      const svg = document.getElementById(`${cId}_svgMap`);
      if (!svg) return;

      const handleMapTap = (evt) => {
        if (state.isEvaluated) return; // locked after evaluation until retry

        evt.preventDefault();
        const pt = svg.createSVGPoint();
        if (evt.touches && evt.touches.length > 0) {
          pt.x = evt.touches[0].clientX;
          pt.y = evt.touches[0].clientY;
        } else {
          pt.x = evt.clientX;
          pt.y = evt.clientY;
        }

        const svgP = pt.matrixTransform(svg.getScreenCTM().inverse());
        const svgX = Math.round(svgP.x);
        const svgY = Math.round(svgP.y);

        this.markCurrentPlace(cId, svgX, svgY);
      };

      svg.addEventListener('click', handleMapTap);
      svg.addEventListener('touchstart', handleMapTap, { passive: false });
    },

    // -------------------------------------------------------------------------
    // SELECT ACTIVE PLACE TO MARK
    // -------------------------------------------------------------------------
    selectPlace(cId, placeIdx) {
      const state = this.instances[cId];
      if (!state || placeIdx < 0 || placeIdx >= state.places.length) return;

      state.selectedPlaceIndex = placeIdx;
      const curPlace = state.places[placeIdx];
      const isEm = state.isEm;

      // Update pills UI
      const tray = document.getElementById(`${cId}_placesTray`);
      if (tray) {
        state.places.forEach((p, idx) => {
          const pill = document.getElementById(`${cId}_pill_${p.id}`);
          if (pill) {
            pill.classList.toggle('active', idx === placeIdx);
          }
        });
      }

      // Update active title
      const titleEl = document.getElementById(`${cId}_activePlaceName`);
      if (titleEl) {
        titleEl.textContent = isEm ? curPlace.nameEnglish : curPlace.nameTamil;
      }
    },

    // -------------------------------------------------------------------------
    // MARK PLACE AT SVG COORDINATES
    // -------------------------------------------------------------------------
    markCurrentPlace(cId, svgX, svgY) {
      const state = this.instances[cId];
      if (!state) return;

      const curPlace = state.places[state.selectedPlaceIndex];
      if (!curPlace) return;

      // Save student mark
      state.studentMarks[curPlace.id] = {
        x: svgX,
        y: svgY,
        timestamp: Date.now()
      };

      // Render pin on SVG
      this.renderStudentPins(cId);

      // Update pill status
      const pill = document.getElementById(`${cId}_pill_${curPlace.id}`);
      if (pill) {
        pill.classList.add('marked');
        pill.innerHTML = `
          <span class="pill-badge">${curPlace.numLabel || (state.selectedPlaceIndex + 1)}</span>
          <span class="pill-title">${state.isEm ? curPlace.nameEnglish : curPlace.nameTamil}</span>
          <span class="pill-status">✓</span>
          <button type="button" class="pill-clear-btn" title="${state.isEm ? 'Clear pin' : 'நீக்கு'}" onclick="event.stopPropagation(); MapPracticeEvaluator.clearPin('${cId}', '${curPlace.id}')">&times;</button>
        `;
      }

      // Update marked counter
      this.updateCounter(cId);

      // Auto-advance to next unmarked place
      const nextUnmarkedIdx = state.places.findIndex((p, idx) => idx > state.selectedPlaceIndex && !state.studentMarks[p.id]);
      if (nextUnmarkedIdx !== -1) {
        this.selectPlace(cId, nextUnmarkedIdx);
      } else {
        const anyUnmarkedIdx = state.places.findIndex(p => !state.studentMarks[p.id]);
        if (anyUnmarkedIdx !== -1) {
          this.selectPlace(cId, anyUnmarkedIdx);
        }
      }
    },

    // -------------------------------------------------------------------------
    // RENDER ALL STUDENT PINS ON MAP
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

        const pName = isEm ? p.nameEnglish : p.nameTamil;
        const numLabel = p.numLabel || `(${idx + 1})`;

        // Determine pin colors based on evaluation state
        let pinFill = "#0284c7";
        let pinStroke = "#38bdf8";
        let statusBadge = "";

        if (state.isEvaluated && state.results && state.results.details[p.id]) {
          const res = state.results.details[p.id];
          if (res.status === 'exact') {
            pinFill = "#059669";
            pinStroke = "#10b981";
            statusBadge = "✓";
          } else if (res.status === 'near') {
            pinFill = "#d97706";
            pinStroke = "#f59e0b";
            statusBadge = "~";
          } else {
            pinFill = "#dc2626";
            pinStroke = "#ef4444";
            statusBadge = "✗";
          }
        }

        const labelWidth = Math.min(220, Math.max(90, pName.length * 8.5 + 40));

        pinsSvg += `
          <g id="${cId}_pinG_${p.id}" class="student-pin-group pin-drop-anim" transform="translate(${mark.x}, ${mark.y})" 
             style="cursor:pointer;" onclick="event.stopPropagation(); MapPracticeEvaluator.selectPlace('${cId}', ${idx})">
            <!-- Pulsing ripple ring -->
            <circle cx="0" cy="0" r="16" fill="none" stroke="${pinStroke}" stroke-width="1.8" class="pin-pulse-ring" />
            <!-- Pin Body -->
            <circle cx="0" cy="0" r="9" fill="${pinFill}" stroke="#ffffff" stroke-width="2" filter="drop-shadow(0 2px 5px rgba(0,0,0,0.8))" />
            <!-- Number inside pin -->
            <text x="0" y="3.5" text-anchor="middle" fill="#ffffff" font-size="10" font-weight="900">${numLabel}</text>
            
            <!-- Label Capsule -->
            <g transform="translate(14, -14)">
              <rect x="0" y="0" width="${labelWidth}" height="26" rx="6" fill="#0f172a" stroke="${pinStroke}" stroke-width="1.2" opacity="0.94" filter="drop-shadow(0 2px 6px rgba(0,0,0,0.8))"/>
              <text x="8" y="17" fill="#f8fafc" font-size="11.5" font-weight="800">${pName} ${statusBadge}</text>
            </g>
          </g>
        `;
      });

      layer.innerHTML = pinsSvg;
    },

    // -------------------------------------------------------------------------
    // CLEAR SINGLE PIN OR ALL PINS
    // -------------------------------------------------------------------------
    clearPin(cId, placeId) {
      const state = this.instances[cId];
      if (!state) return;

      delete state.studentMarks[placeId];
      this.renderStudentPins(cId);

      const placeIdx = state.places.findIndex(p => p.id === placeId);
      if (placeIdx !== -1) {
        const p = state.places[placeIdx];
        const pill = document.getElementById(`${cId}_pill_${p.id}`);
        if (pill) {
          pill.classList.remove('marked');
          pill.innerHTML = `
            <span class="pill-badge">${p.numLabel || (placeIdx + 1)}</span>
            <span class="pill-title">${state.isEm ? p.nameEnglish : p.nameTamil}</span>
            <span class="pill-status">📍</span>
          `;
        }
      }

      this.updateCounter(cId);
    },

    clearAllPins(cId) {
      const state = this.instances[cId];
      if (!state) return;

      state.studentMarks = {};
      state.isEvaluated = false;
      state.results = null;

      // Hide results
      const resArea = document.getElementById(`${cId}_resultArea`);
      if (resArea) resArea.style.display = 'none';

      // Hide target & offset layers
      const targetLayer = document.getElementById(`${cId}_targetAnswerLayer`);
      if (targetLayer) targetLayer.innerHTML = '';
      const offsetLayer = document.getElementById(`${cId}_offsetLinesLayer`);
      if (offsetLayer) offsetLayer.innerHTML = '';

      this.renderStudentPins(cId);

      state.places.forEach((p, idx) => {
        const pill = document.getElementById(`${cId}_pill_${p.id}`);
        if (pill) {
          pill.classList.remove('marked');
          pill.innerHTML = `
            <span class="pill-badge">${p.numLabel || (idx + 1)}</span>
            <span class="pill-title">${state.isEm ? p.nameEnglish : p.nameTamil}</span>
            <span class="pill-status">📍</span>
          `;
        }
      });

      this.selectPlace(cId, 0);
      this.updateCounter(cId);
    },

    updateCounter(cId) {
      const state = this.instances[cId];
      if (!state) return;

      const markedCount = Object.keys(state.studentMarks).length;
      const total = state.places.length;
      const textEl = document.getElementById(`${cId}_markedCountText`);
      if (textEl) {
        textEl.textContent = state.isEm
          ? `${markedCount} / ${total} Places Marked`
          : `${markedCount} / ${total} இடங்கள் குறிக்கப்பட்டுள்ளன`;
      }
    },

    // -------------------------------------------------------------------------
    // ZOOM & PAN CONTROLS
    // -------------------------------------------------------------------------
    zoom(cId, factor) {
      const state = this.instances[cId];
      if (!state) return;
      state.zoom = Math.max(0.7, Math.min(3.5, state.zoom * factor));
      this.applyTransform(state);
    },

    resetZoom(cId) {
      const state = this.instances[cId];
      if (!state) return;
      state.zoom = 1.0;
      state.panX = 0;
      state.panY = 0;
      this.applyTransform(state);
    },

    applyTransform(state) {
      const grp = document.getElementById(`${state.containerId}_panZoomGroup`);
      if (grp) {
        grp.setAttribute('transform', `translate(${state.panX}, ${state.panY}) scale(${state.zoom})`);
      }
    },

    // -------------------------------------------------------------------------
    // 4. FINISH BUTTON CLICK -> INSTANT EVALUATION & ACCURACY SCORING
    // -------------------------------------------------------------------------
    finishAndEvaluate(cId) {
      const state = this.instances[cId];
      if (!state) return;

      const markedCount = Object.keys(state.studentMarks).length;
      const totalPlaces = state.places.length;
      const isEm = state.isEm;

      if (markedCount === 0) {
        const btn = document.getElementById(`${cId}_btnFinish`);
        if (btn) {
          const orig = btn.innerHTML;
          btn.innerHTML = `<span>⚠️</span> <span>${isEm ? 'Tap map to mark a place first!' : 'வரைபடத்தில் ஒரு இடத்தையாவது குறிக்கவும்!'}</span>`;
          setTimeout(() => { if (btn) btn.innerHTML = orig; }, 2200);
        }
        return;
      }
      state.isEvaluated = true;

      // Grade every place
      let totalEarned = 0;
      const details = {};

      state.places.forEach((place) => {
        const mark = state.studentMarks[place.id];
        const target = place.coords;
        const tolerance = place.tolerance || 45;

        if (!mark) {
          details[place.id] = {
            place: place,
            status: 'missed',
            score: 0,
            dist: null,
            label: isEm ? 'Not Marked (0 Marks)' : 'குறிக்கப்படவில்லை (0 மதிப்பெண்)'
          };
          return;
        }

        // Euclidean distance in SVG viewBox units
        const dx = mark.x - target.x;
        const dy = mark.y - target.y;
        const dist = Math.round(Math.sqrt(dx * dx + dy * dy));

        let status = 'inaccurate';
        let score = 0;
        let label = isEm ? 'Inaccurate (0 Marks)' : 'இடம் தவறியது (0 மதிப்பெண்)';

        if (dist <= tolerance) {
          status = 'exact';
          score = 1.0;
          label = isEm ? 'Exact! Full Mark (1.0 Mark)' : 'துல்லியமானது! முழு மதிப்பெண் (1.0)';
        } else if (dist <= tolerance * 1.85) {
          status = 'near';
          score = 0.5;
          label = isEm ? 'Good Attempt / Near (0.5 Mark)' : 'அருகில் / நல்ல முயற்சி (0.5)';
        } else {
          status = 'inaccurate';
          score = 0;
          label = isEm ? 'Needs Practice (0 Marks)' : 'தவறான இடம் (0 மதிப்பெண்)';
        }

        totalEarned += score;
        details[place.id] = {
          place: place,
          status: status,
          score: score,
          dist: dist,
          label: label
        };
      });

      // Normalize total marks
      const maxMarks = state.maxMarks || totalPlaces;
      const finalScore = Math.min(maxMarks, (totalEarned / totalPlaces) * maxMarks);
      const percentage = Math.round((finalScore / maxMarks) * 100);

      state.results = {
        totalEarned: finalScore,
        maxMarks: maxMarks,
        percentage: percentage,
        details: details
      };

      // 1. Re-render student pins with colored status badges (Green/Amber/Red)
      this.renderStudentPins(cId);

      // 2. Render Official Target Answer Key & Offset Indicators on SVG
      this.renderAnswerKeyOverlay(cId);

      // 3. Render Diagnostic Scorecard Table below map
      this.renderScorecard(cId);

      // 4. Voice Evaluation Speech
      this.speakEvaluation(cId);
    },

    // -------------------------------------------------------------------------
    // RENDER OFFICIAL TARGET ANSWER KEY ON SVG MAP
    // -------------------------------------------------------------------------
    renderAnswerKeyOverlay(cId) {
      const state = this.instances[cId];
      if (!state || !state.results) return;

      const targetLayer = document.getElementById(`${cId}_targetAnswerLayer`);
      const offsetLayer = document.getElementById(`${cId}_offsetLinesLayer`);
      if (!targetLayer || !offsetLayer) return;

      const isEm = state.isEm;
      let targetSvg = '';
      let offsetSvg = '';

      state.places.forEach((p, idx) => {
        const mark = state.studentMarks[p.id];
        const target = p.coords;
        const res = state.results.details[p.id];
        const pName = isEm ? p.nameEnglish : p.nameTamil;

        // Target Golden Star Pin
        targetSvg += `
          <g id="${cId}_targetPin_${p.id}" class="target-pin-group" transform="translate(${target.x}, ${target.y})">
            <!-- Glowing target halo -->
            <circle cx="0" cy="0" r="18" fill="none" stroke="#fbbf24" stroke-width="2" opacity="0.6" stroke-dasharray="3,3" />
            <!-- Star background -->
            <circle cx="0" cy="0" r="11" fill="#f59e0b" stroke="#ffffff" stroke-width="2" filter="drop-shadow(0 2px 8px rgba(245,158,11,0.6))" />
            <!-- Star icon -->
            <text x="0" y="4.5" text-anchor="middle" fill="#000000" font-size="12" font-weight="900">★</text>
            <!-- Official Answer Key Label -->
            <g transform="translate(16, 16)">
              <rect x="0" y="0" width="${Math.min(220, Math.max(90, pName.length * 8.5 + 40))}" height="24" rx="6" fill="#071322" stroke="#f59e0b" stroke-width="1.3" opacity="0.95" />
              <text x="8" y="16" fill="#fbbf24" font-size="11" font-weight="900">★ ${pName}</text>
            </g>
          </g>
        `;

        // If marked, draw dashed connecting offset line
        if (mark) {
          const lineColor = res.status === 'exact' ? '#10b981' : (res.status === 'near' ? '#f59e0b' : '#ef4444');
          offsetSvg += `
            <g id="${cId}_guide_${p.id}">
              <line x1="${mark.x}" y1="${mark.y}" x2="${target.x}" y2="${target.y}" 
                    stroke="${lineColor}" stroke-width="2" stroke-dasharray="4,4" opacity="0.8" />
              <!-- Midpoint distance pill -->
              <circle cx="${(mark.x + target.x) / 2}" cy="${(mark.y + target.y) / 2}" r="3" fill="${lineColor}" />
            </g>
          `;
        } else {
          // Missed indicator pulse
          targetSvg += `
            <circle cx="${target.x}" cy="${target.y}" r="26" fill="rgba(239, 68, 68, 0.25)" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4" />
          `;
        }
      });

      targetLayer.innerHTML = targetSvg;
      offsetLayer.innerHTML = offsetSvg;
    },

    // -------------------------------------------------------------------------
    // RENDER DIAGNOSTIC SCORECARD & EXAMINER FEEDBACK
    // -------------------------------------------------------------------------
    renderScorecard(cId) {
      const state = this.instances[cId];
      if (!state || !state.results) return;

      const resArea = document.getElementById(`${cId}_resultArea`);
      if (!resArea) return;

      const res = state.results;
      const isEm = state.isEm;

      let gradeTitle = "";
      let gradeClass = "";
      if (res.percentage >= 90) {
        gradeTitle = isEm ? "🏆 Centum Master! Outstanding Accuracy" : "🏆 முழு மதிப்பெண் சாதனை! அற்புதம்";
        gradeClass = "grade-centum";
      } else if (res.percentage >= 70) {
        gradeTitle = isEm ? "🌟 Excellent! High Scoring Map Precision" : "🌟 மிக நன்று! அதிக மதிப்பெண் பெறும் துல்லியம்";
        gradeClass = "grade-good";
      } else {
        gradeTitle = isEm ? "📚 Good Effort! Revise tips below for 8/8" : "📚 நல்ல முயற்சி! 8/8 பெற குறிப்புகளைப் படித்து மீண்டும் முயலவும்";
        gradeClass = "grade-practice";
      }

      const html = `
        <div class="eval-scorecard-wrap">
          <!-- Hero Score Banner -->
          <div class="eval-score-hero">
            <div>
              <div style="font-size:12px; font-weight:800; color:#94a3b8; text-transform:uppercase;">
                ${isEm ? 'BOARD EXAM EVALUATION RESULT' : 'அரசுப் பொதுத்தேர்வு விடை மதிப்பீட்டு முடிவு'}
              </div>
              <div class="eval-score-num-box">
                <span class="eval-score-badge">${res.totalEarned.toFixed(1)} / ${res.maxMarks}</span>
                <span style="font-size:16px; color:#cbd5e1; font-weight:800;">(${res.percentage}%)</span>
                <span class="eval-grade-pill ${gradeClass}">${gradeTitle}</span>
              </div>
            </div>

            <div style="display:flex; align-items:center; gap:8px;">
              <button type="button" class="eval-speech-btn" onclick="MapPracticeEvaluator.replayVoice('${cId}')">
                <span>🔊</span> <span>${isEm ? 'Hear Feedback' : 'மதிப்பீட்டைக் கேள்'}</span>
              </button>
              <button type="button" class="eval-retry-btn" onclick="MapPracticeEvaluator.resetForRetry('${cId}')">
                <span>🔄</span> <span>${isEm ? 'Practice Again' : 'மீண்டும் பயிற்சி செய்'}</span>
              </button>
            </div>
          </div>

          <!-- Color Guide Legend -->
          <div style="display:flex; align-items:center; gap:16px; flex-wrap:wrap; font-size:12px; color:#cbd5e1; background:rgba(0,0,0,0.25); padding:8px 12px; border-radius:8px;">
            <span><b>${isEm ? 'Map Legend:' : 'குறியீடு விளக்கம்:'}</b></span>
            <span style="color:#34d399;">🟢 ${isEm ? 'Your Pin (Exact)' : 'உங்கள் குறி (துல்லியம்)'}</span>
            <span style="color:#fbbf24;">🟡 ${isEm ? 'Your Pin (Near)' : 'உங்கள் குறி (அருகில்)'}</span>
            <span style="color:#f87171;">🔴 ${isEm ? 'Your Pin (Inaccurate)' : 'உங்கள் குறி (தவறியது)'}</span>
            <span style="color:#f59e0b;">⭐ ${isEm ? 'Official Key Point' : 'அரசு மாதிரி விடை புள்ளி'}</span>
          </div>

          <!-- Detailed Diagnostic Table -->
          <div class="eval-diag-table-container">
            <table class="eval-diag-table">
              <thead>
                <tr>
                  <th style="width:30px;">#</th>
                  <th>${isEm ? 'Place to Mark' : 'குறிக்க வேண்டிய இடம்'}</th>
                  <th>${isEm ? 'Evaluation Status' : 'மதிப்பீட்டு நிலை'}</th>
                  <th>${isEm ? 'Error Offset' : 'தூர விலகல்'}</th>
                  <th>${isEm ? 'Examiner Landmark Tip for Board Exam' : 'அரசுத் தேர்வுக்கான நினைவூட்டல் குறிப்பு'}</th>
                </tr>
              </thead>
              <tbody>
                ${state.places.map((p, idx) => {
                  const item = res.details[p.id];
                  const pName = isEm ? p.nameEnglish : p.nameTamil;
                  const tip = isEm ? (p.tipEnglish || '') : (p.tipTamil || '');
                  const distText = item.dist !== null ? `${item.dist} px` : (isEm ? 'Not marked' : 'குறிக்கவில்லை');

                  return `
                    <tr>
                      <td style="font-weight:800; color:#38bdf8;">${p.numLabel || (idx + 1)}</td>
                      <td style="font-weight:800;">${pName}</td>
                      <td>
                        <span class="eval-status-chip ${item.status}">
                          ${item.label}
                        </span>
                      </td>
                      <td style="font-size:12px; color:#94a3b8;">${distText}</td>
                      <td style="font-size:12px; color:#cbd5e1; line-height:1.4;">
                        <span style="color:#38bdf8;">💡</span> ${tip}
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>

          <!-- Footer Actions -->
          <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px; margin-top:4px;">
            <button type="button" class="eval-tool-btn" onclick="MapPracticeEvaluator.downloadEvaluatedMap('${cId}')">
              <span>📥</span> <span>${isEm ? 'Download Evaluated Map' : 'மதிப்பீட்டு வரைபடத்தைப் பதிவிறக்கு'}</span>
            </button>
            <button type="button" class="eval-tool-btn" onclick="MapPracticeEvaluator.resetForRetry('${cId}')" style="background:#10b981; color:#000; font-weight:900;">
              <span>🎯</span> <span>${isEm ? 'Try Again for 100% (Centum)' : '100% மதிப்பெண் பெற மீண்டும் முயலவும்'}</span>
            </button>
          </div>
        </div>
      `;

      resArea.innerHTML = html;
      resArea.style.display = 'block';

      // Smooth scroll down to scorecard
      setTimeout(() => {
        resArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 200);
    },

    // -------------------------------------------------------------------------
    // VOICE SPEECH EVALUATION FEEDBACK
    // -------------------------------------------------------------------------
    speakEvaluation(cId) {
      const state = this.instances[cId];
      if (!state || !state.results || !window.speechSynthesis) return;

      this.stopVoice(cId);

      const res = state.results;
      const isEm = state.isEm;
      let text = "";

      if (isEm) {
        text = `Exam evaluation completed! You scored ${res.totalEarned.toFixed(1)} out of ${res.maxMarks} marks. `;
        if (res.percentage >= 90) {
          text += "Outstanding map marking accuracy! You are fully prepared to score full marks in the Board Exam.";
        } else if (res.percentage >= 70) {
          text += "Great effort! Review the golden key stars and examiner tips to achieve a complete centum.";
        } else {
          text += "Good attempt! Check the landmark guide tips below, tap Try Again, and practice marking again.";
        }
      } else {
        text = `வரைபடத் தேர்வு மதிப்பீடு நிறைவடைந்தது! நீங்கள் ${res.maxMarks}-க்கு ${res.totalEarned.toFixed(1)} மதிப்பெண்கள் பெற்றுள்ளீர்கள். `;
        if (res.percentage >= 90) {
          text += "அற்புதம்! அரசுப் பொதுத்தேர்வில் வரைபடத்தில் முழு 8 மதிப்பெண்கள் பெற நீங்கள் முழுமையாகத் தயாராக உள்ளீர்கள்.";
        } else if (res.percentage >= 70) {
          text += "மிக அருமையான முயற்சி! தங்க நிற மாதிரி புள்ளிகளை கவனித்து, முழு மதிப்பெண் பெற மீண்டும் ஒருமுறை பயிற்சி செய்யவும்.";
        } else {
          text += "நல்ல முயற்சி! கீழே உள்ள நினைவூட்டல் குறிப்புகளைப் படித்துவிட்டு, 'மீண்டும் பயிற்சி செய்' அழுத்தி பயிற்சி பெறவும்.";
        }
      }

      try {
        const u = new SpeechSynthesisUtterance(text);
        u.lang = isEm ? 'en-IN' : 'ta-IN';
        u.rate = 0.95;
        state.speechUtterance = u;
        window.speechSynthesis.speak(u);
      } catch (e) {
        console.warn("Speech synthesis error:", e);
      }
    },

    replayVoice(cId) {
      this.speakEvaluation(cId);
    },

    stopVoice(cId) {
      if (window.speechSynthesis) {
        try { window.speechSynthesis.cancel(); } catch (e) {}
      }
    },

    // -------------------------------------------------------------------------
    // RETRY / RE-PRACTICE
    // -------------------------------------------------------------------------
    resetForRetry(cId) {
      this.stopVoice(cId);
      this.clearAllPins(cId);
    },

    // -------------------------------------------------------------------------
    // DOWNLOAD EVALUATED MAP AS SVG / PRINT
    // -------------------------------------------------------------------------
    downloadEvaluatedMap(cId) {
      const state = this.instances[cId];
      if (!state) return;

      const svg = document.getElementById(`${cId}_svgMap`);
      if (!svg) return;

      const svgData = new XMLSerializer().serializeToString(svg);
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const svgUrl = URL.createObjectURL(svgBlob);

      const downloadLink = document.createElement('a');
      downloadLink.href = svgUrl;
      downloadLink.download = `Evaluated_Map_10th_Social_${Date.now()}.svg`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(svgUrl);

      const isEm = state.isEm;
      alert(isEm
        ? '✅ Evaluated Map downloaded successfully! You can print or review your pencil practice.'
        : '✅ மதிப்பீடு செய்யப்பட்ட வரைபடம் பதிவிறக்கம் செய்யப்பட்டது! இதை சேமித்து அல்லது பிரிண்ட் எடுத்து பயிற்சி செய்யலாம்.');
    }
  };

  // Expose globally
  window.MapPracticeEvaluator = MapPracticeEvaluator;
  window.CURRICULUM_MAP_DATABASE = CURRICULUM_MAP_DATABASE;

})();
