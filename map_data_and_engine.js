// =============================================================================
// SOCIAL SCIENCE MAP TEACHING, TESTING & EVALUATION ENGINE
// Covers all 12 Social Science Lessons (History, Geography, Civics, Economics)
// Interactive Vector Blank Maps (India & World), Voice Teacher (TTS),
// Tap-to-Mark Map Tests, and Blank Map Download
// =============================================================================

(function() {
  'use strict';

  // ---------------------------------------------------------------------------
  // 1. CURATED SYLLABUS MAP LOCATIONS (All 12 Lessons)
  // Coordinates are normalized percentages (0 to 100) relative to SVG viewBox
  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------
  // 1. CURATED SYLLABUS MAP LOCATIONS (All 12 Lessons)
  // Coordinates are normalized percentages (0 to 100) relative to SVG viewBox
  // ---------------------------------------------------------------------------
  const SOCIAL_MAP_LOCATIONS = [
    // --- LESSON 1: History Unit 1 (Outbreak of WWI) - World Map ---
    {
      id: "world_britain",
      unit: 1,
      unitTitle: "வரலாறு - அலகு 1: முதல் உலகப்போர்",
      category: "World War I (நேச நாடுகள்)",
      mapType: "world",
      nameTamil: "கிரேட் பிரிட்டன் (லண்டன்)",
      nameEnglish: "Great Britain (London)",
      coords: { x: 46.2, y: 31.5 },
      type: "point",
      teachScriptTamil: "கிரேட் பிரிட்டன்: முதல் உலகப்போரின் நேச நாட்டுத் தலைமை. வரைபடத்தில் குறிக்க: ஐரோப்பாவின் வடமேற்குப் பகுதியில் உள்ள தனித்த பெரிய தீவை அடையாளம் கண்டு வட்டமிட்டு 'பிரிட்டன்' என எழுதவும்.",
      teachScriptEnglish: "Great Britain: Leading Allied power in WWI. To mark: Locate the large island off the northwest coast of mainland Europe and label it Great Britain.",
      examTip: "ஐரோப்பாவின் முக்கிய நேச நாடு அல்லது தீவு நாடு எனக் கேட்டால் பிரிட்டனைக் குறிக்கவும்."
    },
    {
      id: "world_france",
      unit: 1,
      unitTitle: "வரலாறு - அலகு 1: முதல் உலகப்போர்",
      category: "World War I (நேச நாடுகள்)",
      mapType: "world",
      nameTamil: "பிரான்ஸ் (பாரிஸ்)",
      nameEnglish: "France (Paris)",
      coords: { x: 47.8, y: 36.2 },
      type: "point",
      teachScriptTamil: "பிரான்ஸ்: நேச நாடுகளின் முக்கிய ஐரோப்பிய நாடு. வரைபடத்தில் குறிக்க: இங்கிலாந்துக்கு நேர் தெற்கே, ஆங்கிலக் கால்வாயைக் கடந்தவுடன் அமைந்துள்ள நிலப்பரப்பைக் குறிக்கவும்.",
      teachScriptEnglish: "France: Key Allied power in Europe. To mark: Directly south across the English Channel from Britain.",
      examTip: "மேற்கு ஐரோப்பிய நேச நாடு அல்லது பாரிஸ் எனக் கேட்கப்படலாம்."
    },
    {
      id: "world_germany",
      unit: 1,
      unitTitle: "வரலாறு - அலகு 1: முதல் உலகப்போர்",
      category: "World War I (மைய நாடுகள்)",
      mapType: "world",
      nameTamil: "ஜெர்மனி (பெர்லின்)",
      nameEnglish: "Germany (Berlin)",
      coords: { x: 50.8, y: 33.6 },
      type: "point",
      teachScriptTamil: "ஜெர்மனி: முதல் உலகப்போரின் மைய நாடுகளின் தலைமை நாடு. பிரான்சுக்கு கிழக்கே மத்திய ஐரோப்பாவில் அமைந்துள்ள பகுதியை வட்டமிட்டுக் குறிக்கவும்.",
      teachScriptEnglish: "Germany: Leader of the Central Powers in WWI. Directly east of France in Central Europe.",
      examTip: "மைய நாடுகள் அல்லது பெர்லின் எனக் கேட்டால் ஜெர்மனியைக் குறிக்கவும்."
    },
    {
      id: "world_italy",
      unit: 1,
      unitTitle: "வரலாறு - அலகு 1: முதல் உலகப்போர்",
      category: "World War I (நேச நாடுகள்)",
      mapType: "world",
      nameTamil: "இத்தாலி (ரோம்)",
      nameEnglish: "Italy (Rome)",
      coords: { x: 51.5, y: 39.5 },
      type: "point",
      teachScriptTamil: "இத்தாலி: மத்திய தரைக்கடலில் பூட்ஸ் காலணி போன்ற வடிவத்தில் தெற்கு நோக்கி நீண்டு அமைந்துள்ள தீபகற்ப நாடே இத்தாலி ஆகும்.",
      teachScriptEnglish: "Italy: Boot-shaped peninsula extending south into the Mediterranean Sea.",
      examTip: "பூட்ஸ் காலணி வடிவ நாடு அல்லது ரோம் எனக் கேட்டால் இத்தாலியைக் குறிக்கவும்."
    },
    {
      id: "world_russia",
      unit: 1,
      unitTitle: "வரலாறு - அலகு 1: முதல் உலகப்போர்",
      category: "World War I (நேச நாடுகள்)",
      mapType: "world",
      nameTamil: "ரஷ்யா (மாஸ்கோ)",
      nameEnglish: "Russia (Moscow)",
      coords: { x: 62.0, y: 28.0 },
      type: "point",
      teachScriptTamil: "ரஷ்யா: கிழக்கு ஐரோப்பா முதல் வடக்கு ஆசியா வரை பரவியுள்ள உலகின் மிகப்பெரிய நிலப்பரப்பைக் கொண்ட நேச நாடு.",
      teachScriptEnglish: "Russia: Vast territory spanning Eastern Europe and Northern Asia.",
      examTip: "கிழக்கு ஐரோப்பிய நேச நாடு அல்லது மாஸ்கோவைக் குறிக்க."
    },
    {
      id: "world_mediterranean",
      unit: 1,
      unitTitle: "வரலாறு - அலகு 1: முதல் உலகப்போர்",
      category: "Seas & Oceans",
      mapType: "world",
      coords: { x: 52.0, y: 43.0 },
      type: "point",
      nameTamil: "மத்திய தரைக்கடல் (Mediterranean Sea)",
      nameEnglish: "Mediterranean Sea",
      teachScriptTamil: "மத்திய தரைக்கடல்: ஐரோப்பாவிற்கும் ஆப்பிரிக்காவிற்கும் இடையில் அமைந்துள்ள வரலாற்றுப் புகழ்பெற்ற உள்நாட்டுக் கடல்.",
      teachScriptEnglish: "Mediterranean Sea: Strategic sea separating Southern Europe from Northern Africa.",
      examTip: "ஐரோப்பாவிற்கும் ஆப்பிரிக்காவிற்கும் இடையே உள்ள கடல்."
    },
    {
      id: "world_north_sea",
      unit: 1,
      unitTitle: "வரலாறு - அலகு 1: முதல் உலகப்போர்",
      category: "Seas & Oceans",
      mapType: "world",
      coords: { x: 48.5, y: 29.5 },
      type: "point",
      nameTamil: "வட கடல் (North Sea)",
      nameEnglish: "North Sea",
      teachScriptTamil: "வட கடல்: பிரிட்டன் தீவுக்கும் நார்வே / டென்மார்க் நாடுகளுக்கும் இடையில் அமைந்துள்ள முக்கிய கடல் பகுதி.",
      teachScriptEnglish: "North Sea: Sea between Great Britain and northwestern Europe.",
      examTip: "பிரிட்டனுக்குக் கிழக்கே அமைந்துள்ள கடல் வட கடல்."
    },

    // --- LESSON 2: Geography Unit 1 (India - Relief & Drainage) ---
    {
      id: "ind_karakoram",
      unit: 2,
      unitTitle: "புவியியல் - அலகு 1: அமைவிடம், நிலத்தோற்றம் & வடிகாலமைப்பு",
      category: "Mountains (மலைகள்)",
      mapType: "india",
      nameTamil: "காரகோரம் மலைத்தொடர் (Karakoram Range)",
      nameEnglish: "Karakoram Range",
      coords: { x: 38.0, y: 13.0 },
      type: "line",
      teachScriptTamil: "காரகோரம் மலைத்தொடர்: இந்தியாவின் வடமுனையில் லடாக் பகுதியில் கிழக்கு-மேற்காக அமைந்துள்ள மிக உயர்ந்த மலைத்தொடர்.",
      teachScriptEnglish: "Karakoram Range: Northernmost mountain range in Ladakh / Trans-Himalayas.",
      examTip: "இந்தியாவின் வடமுனை மலைத்தொடர் காரகோரம்."
    },
    {
      id: "ind_k2",
      unit: 2,
      unitTitle: "புவியியல் - அலகு 1: அமைவிடம், நிலத்தோற்றம் & வடிகாலமைப்பு",
      category: "Peaks (சிகரங்கள்)",
      mapType: "india",
      nameTamil: "கே2 சிகரம் / காட்வின் ஆஸ்டின் (8,611 மீ)",
      nameEnglish: "K2 Peak / Godwin Austen (8,611 m)",
      coords: { x: 39.5, y: 13.8 },
      type: "point",
      teachScriptTamil: "கே2 சிகரம்: காரகோரம் தொடரில் அமைந்துள்ள இந்தியாவின் மிக உயர்ந்த சிகரம் (உலகின் 2-வது உயர்ந்த சிகரம்).",
      teachScriptEnglish: "K2 (Mount Godwin Austen): Highest peak in India (8,611m), 2nd highest in the world.",
      examTip: "இந்தியாவின் மிக உயர்ந்த சிகரம் கே2 அல்லது காட்வின் ஆஸ்டின்."
    },
    {
      id: "ind_himalayas",
      unit: 2,
      unitTitle: "புவியியல் - அலகு 1: அமைவிடம், நிலத்தோற்றம் & வடிகாலமைப்பு",
      category: "Mountains (மலைகள்)",
      mapType: "india",
      nameTamil: "இமயமலைத் தொடர் (The Himalayas)",
      nameEnglish: "The Great Himalayas",
      coords: { x: 50.0, y: 24.0 },
      type: "line",
      teachScriptTamil: "இமயமலைத் தொடர்: இந்தியாவின் வடக்கு எல்லையில் காஷ்மீர் முதல் அருணாச்சலப் பிரதேசம் வரை 2,500 கி.மீ வில் வடிவில் அமைந்த இளம் மடிப்பு மலை.",
      teachScriptEnglish: "The Himalayas: Arc-shaped young fold mountains running along northern India.",
      examTip: "இந்தியாவின் வடக்கு இயற்கை அரண் அல்லது இமயமலை."
    },
    {
      id: "ind_kanchenjunga",
      unit: 2,
      unitTitle: "புவியியல் - அலகு 1: அமைவிடம், நிலத்தோற்றம் & வடிகாலமைப்பு",
      category: "Peaks (சிகரங்கள்)",
      mapType: "india",
      nameTamil: "கஞ்சன்ஜங்கா சிகரம் (8,586 மீ)",
      nameEnglish: "Mt. Kanchenjunga (8,586 m)",
      coords: { x: 67.5, y: 27.5 },
      type: "point",
      teachScriptTamil: "கஞ்சன்ஜங்கா சிகரம்: சிக்கிம் மற்றும் நேபாள எல்லையில் இமயமலையில் அமைந்துள்ள இந்தியாவின் இரண்டாவது உயர்ந்த சிகரம்.",
      teachScriptEnglish: "Kanchenjunga: Located in Sikkim, 3rd highest peak in the world.",
      examTip: "சிக்கிமில் அமைந்துள்ள இமயமலை சிகரம்."
    },
    {
      id: "ind_aravalli",
      unit: 2,
      unitTitle: "புவியியல் - அலகு 1: அமைவிடம், நிலத்தோற்றம் & வடிகாலமைப்பு",
      category: "Mountains (மலைகள்)",
      mapType: "india",
      nameTamil: "ஆரவல்லி மலைத்தொடர் (Aravalli Range)",
      nameEnglish: "Aravalli Range (Oldest Fold Mountains)",
      coords: { x: 30.0, y: 35.0 },
      type: "line",
      teachScriptTamil: "ஆரவல்லி மலைத்தொடர்: இந்தியாவின் மிகப்பழமையான மடிப்பு மலைத்தொடர்; ராஜஸ்தானில் தென்மேற்கிலிருந்து வடகிழக்காக நீள்கிறது.",
      teachScriptEnglish: "Aravalli Range: Oldest fold mountains in India running through Rajasthan.",
      examTip: "இந்தியாவின் மிகப்பழமையான மடிப்பு மலைத்தொடர் ஆரவல்லி."
    },
    {
      id: "ind_western_ghats",
      unit: 2,
      unitTitle: "புவியியல் - அலகு 1: அமைவிடம், நிலத்தோற்றம் & வடிகாலமைப்பு",
      category: "Mountains (மலைகள்)",
      mapType: "india",
      nameTamil: "மேற்குத் தொடர்ச்சி மலை (Western Ghats)",
      nameEnglish: "Western Ghats (Sahyadris)",
      coords: { x: 32.0, y: 65.0 },
      type: "line",
      teachScriptTamil: "மேற்குத் தொடர்ச்சி மலை: தீபகற்ப இந்தியாவின் மேற்கு கடற்கரைக்கு இணையாக தொடர்ச்சியாக அமைந்துள்ள மலைத்தொடர்.",
      teachScriptEnglish: "Western Ghats: Continuous mountain chain parallel to western coast of India.",
      examTip: "தீபகற்ப இந்தியாவின் தொடர்ச்சியான மேற்கு மலைத்தொடர்."
    },
    {
      id: "ind_eastern_ghats",
      unit: 2,
      unitTitle: "புவியியல் - அலகு 1: அமைவிடம், நிலத்தோற்றம் & வடிகாலமைப்பு",
      category: "Mountains (மலைகள்)",
      mapType: "india",
      nameTamil: "கிழக்குத் தொடர்ச்சி மலை (Eastern Ghats)",
      nameEnglish: "Eastern Ghats (Discontinuous)",
      coords: { x: 55.0, y: 62.0 },
      type: "line",
      teachScriptTamil: "கிழக்குத் தொடர்ச்சி மலை: ஆறுகளால் அரிக்கப்பட்டு தொடர்ச்சியற்று காணப்படும் கிழக்கு கடற்கரைக்கு இணையான மலைப்பகுதி.",
      teachScriptEnglish: "Eastern Ghats: Discontinuous hills along India's eastern coast.",
      examTip: "ஆறுகளால் அரிக்கப்பட்ட தொடர்ச்சியற்ற மலைத்தொடர்."
    },
    {
      id: "ind_anaimudi",
      unit: 2,
      unitTitle: "புவியியல் - அலகு 1: அமைவிடம், நிலத்தோற்றம் & வடிகாலமைப்பு",
      category: "Peaks (சிகரங்கள்)",
      mapType: "india",
      nameTamil: "ஆனைமுடி சிகரம் (2,695 மீ)",
      nameEnglish: "Anamudi Peak (2,695 m)",
      coords: { x: 35.5, y: 80.5 },
      type: "point",
      teachScriptTamil: "ஆனைமுடி: தென்னிந்தியாவின் மற்றும் தீபகற்ப பீடபூமியின் மிக உயர்ந்த சிகரம்; ஆனைமலையில் அமைந்துள்ளது.",
      teachScriptEnglish: "Anamudi: Highest peak in South India / Western Ghats (2,695m) in Kerala.",
      examTip: "தென்னிந்தியாவின் மிக உயர்ந்த சிகரம் ஆனைமுடி."
    },
    {
      id: "ind_river_ganga",
      unit: 2,
      unitTitle: "புவியியல் - அலகு 1: அமைவிடம், நிலத்தோற்றம் & வடிகாலமைப்பு",
      category: "Rivers (ஆறுகள்)",
      mapType: "india",
      nameTamil: "கங்கை ஆறு (River Ganga - 2,525 கி.மீ)",
      nameEnglish: "River Ganga (2,525 km)",
      coords: { x: 55.0, y: 31.0 },
      type: "line",
      teachScriptTamil: "கங்கை ஆறு: இமயமலையின் கங்கோத்ரி பனிப்பாறையில் பாகிரதியாக உற்பத்தியாகி வங்காள விரிகுடாவில் கலக்கும் இந்தியாவின் மிக நீளமான தேசிய நதி.",
      teachScriptEnglish: "River Ganga: Longest river in India (2,525 km) flowing into Bay of Bengal.",
      examTip: "இந்தியாவின் தேசிய நதி அல்லது வற்றாத ஜீவ நதி கங்கை."
    },
    {
      id: "ind_river_cauvery",
      unit: 2,
      unitTitle: "புவியியல் - அலகு 1: அமைவிடம், நிலத்தோற்றம் & வடிகாலமைப்பு",
      category: "Rivers (ஆறுகள்)",
      mapType: "india",
      nameTamil: "காவிரி ஆறு (தென்னிந்தியாவின் கங்கை)",
      nameEnglish: "River Cauvery (Dakshin Ganga)",
      coords: { x: 42.0, y: 77.0 },
      type: "line",
      teachScriptTamil: "காவிரி ஆறு: கர்நாடகத்தின் குடகு மலையில் தலைக்காவிரியில் உற்பத்தியாகி தமிழ்நாடு வழியாகப் பாய்ந்து பூம்புகார் அருகே வங்கக்கடலில் கலக்கிறது.",
      teachScriptEnglish: "River Cauvery: Originates at Talakaveri in Karnataka, flows through Tamil Nadu.",
      examTip: "தென்னிந்தியாவின் கங்கை அல்லது தமிழ்நாட்டின் முக்கிய நதி காவிரி."
    },
    {
      id: "ind_river_narmada",
      unit: 2,
      unitTitle: "புவியியல் - அலகு 1: அமைவிடம், நிலத்தோற்றம் & வடிகாலமைப்பு",
      category: "Rivers (ஆறுகள்)",
      mapType: "india",
      nameTamil: "நர்மதை ஆறு (மேற்கு நோக்கிப் பாயும் ஆறு)",
      nameEnglish: "River Narmada (West flowing)",
      coords: { x: 38.0, y: 47.0 },
      type: "line",
      teachScriptTamil: "நர்மதை ஆறு: மத்தியப் பிரதேசத்தின் அமர்கண்டக் பீடபூமியில் தோன்றி பிளவுப் பள்ளத்தாக்கு வழியாக மேற்கு நோக்கிப் பாய்ந்து அரபிக்கடலில் கலக்கிறது.",
      teachScriptEnglish: "River Narmada: Flows westwards through a rift valley into the Arabian Sea.",
      examTip: "மேற்கு நோக்கிப் பாய்ந்து அரபிக்கடலில் கலக்கும் முக்கிய ஆறு நர்மதை."
    },
    {
      id: "ind_gulf_of_mannar",
      unit: 2,
      unitTitle: "புவியியல் - அலகு 1: அமைவிடம், நிலத்தோற்றம் & வடிகாலமைப்பு",
      category: "Coastal Features",
      mapType: "india",
      nameTamil: "மன்னார் வளைகுடா (Gulf of Mannar)",
      nameEnglish: "Gulf of Mannar (Biosphere Reserve)",
      coords: { x: 44.0, y: 86.5 },
      type: "point",
      teachScriptTamil: "மன்னார் வளைகுடா: தமிழ்நாட்டின் தென்கிழக்குக் கடற்கரைக்கும் இலங்கைக்கும் இடையில் அமைந்துள்ள பல்லுயிர் வளம் மிகுந்த ஆழமற்ற கடல் பகுதி.",
      teachScriptEnglish: "Gulf of Mannar: Shallow bay between southeastern coast of Tamil Nadu and Sri Lanka.",
      examTip: "தமிழ்நாட்டிற்கும் இலங்கைக்கும் இடைப்பட்ட வளைகுடா."
    },
    {
      id: "ind_palk_strait",
      unit: 2,
      unitTitle: "புவியியல் - அலகு 1: அமைவிடம், நிலத்தோற்றம் & வடிகாலமைப்பு",
      category: "Coastal Features",
      mapType: "india",
      nameTamil: "பாக்கு நீரிணை (Palk Strait)",
      nameEnglish: "Palk Strait",
      coords: { x: 45.0, y: 83.5 },
      type: "point",
      teachScriptTamil: "பாக்கு நீரிணை: இந்தியாவையும் இலங்கையையும் பிரிக்கும் குறுகிய ஆழமற்ற நீர்ப்பகுதி.",
      teachScriptEnglish: "Palk Strait: Narrow strait separating Tamil Nadu from Sri Lanka.",
      examTip: "இந்தியாவையும் இலங்கையையும் பிரிக்கும் நீரிணை பாக்கு நீரிணை."
    },
    {
      id: "ind_rann_of_kutch",
      unit: 2,
      unitTitle: "புவியியல் - அலகு 1: அமைவிடம், நிலத்தோற்றம் & வடிகாலமைப்பு",
      category: "Coastal Features",
      mapType: "india",
      nameTamil: "கட்ச் வளைகுடா / கட்ச் ரான் (Gulf of Kutch)",
      nameEnglish: "Gulf of Kutch / Rann of Kutch",
      coords: { x: 23.0, y: 42.0 },
      type: "point",
      teachScriptTamil: "கட்ச் வளைகுடா: குஜராத்தின் மேற்குக் கடற்கரையில் கட்ச் தீபகற்பத்திற்கும் கத்தியவார் தீபகற்பத்திற்கும் இடையில் அமைந்துள்ள உவர்நில சதுப்புப் பகுதி.",
      teachScriptEnglish: "Gulf of Kutch: Inlet of Arabian Sea along western Gujarat.",
      examTip: "குஜராத் கடற்கரையில் உள்ள வளைகுடா."
    },
    {
      id: "ind_coromandel_coast",
      unit: 2,
      unitTitle: "புவியியல் - அலகு 1: அமைவிடம், நிலத்தோற்றம் & வடிகாலமைப்பு",
      category: "Coastal Plains",
      mapType: "india",
      nameTamil: "சோழமண்டலக் கடற்கரை (Coromandel Coast)",
      nameEnglish: "Coromandel Coast (Tamil Nadu & AP)",
      coords: { x: 48.0, y: 72.0 },
      type: "line",
      teachScriptTamil: "சோழமண்டலக் கடற்கரை: கிழக்கு கடற்கரைச் சமவெளியின் தென்பகுதி (ஆந்திரா மற்றும் தமிழ்நாடு கடற்கரை); வடகிழக்குப் பருவமழையால் அதிக மழை பெறுகிறது.",
      teachScriptEnglish: "Coromandel Coast: Southeastern coastal plain of India getting rainfall from NE monsoon.",
      examTip: "வடகிழக்குப் பருவமழையால் அதிக மழை பெறும் தமிழகக் கடற்கரை."
    },
    {
      id: "ind_malabar_coast",
      unit: 2,
      unitTitle: "புவியியல் - அலகு 1: அமைவிடம், நிலத்தோற்றம் & வடிகாலமைப்பு",
      category: "Coastal Plains",
      mapType: "india",
      nameTamil: "மலபார் கடற்கரை (Malabar Coast - Kerala)",
      nameEnglish: "Malabar Coast (Kerala Coast)",
      coords: { x: 33.5, y: 75.0 },
      type: "line",
      teachScriptTamil: "மலபார் கடற்கரை: மேற்கு கடற்கரைச் சமவெளியின் தென்பகுதி (கேரளக் கடற்கரை); காயல்கள் (Lagoons / Backwaters) இங்கு அமைந்துள்ளன.",
      teachScriptEnglish: "Malabar Coast: Southwestern coastal strip in Kerala known for backwaters / lagoons.",
      examTip: "காயல்கள் நிறைந்த கேரளக் கடற்கரை மலபார் கடற்கரை."
    },
    {
      id: "ind_andaman_nicobar",
      unit: 2,
      unitTitle: "புவியியல் - அலகு 1: அமைவிடம், நிலத்தோற்றம் & வடிகாலமைப்பு",
      category: "Islands (தீவுகள்)",
      mapType: "india",
      nameTamil: "அந்தமான் மற்றும் நிக்கோபார் தீவுகள்",
      nameEnglish: "Andaman and Nicobar Islands",
      coords: { x: 78.0, y: 70.0 },
      type: "point",
      teachScriptTamil: "அந்தமான் மற்றும் நிக்கோபார் தீவுகள்: வங்காள விரிகுடாவில் அமைந்துள்ள இந்தியாவின் யூனியன் பிரதேச தீவுக்கூட்டம் (இந்திரா முனை இங்குள்ளது).",
      teachScriptEnglish: "Andaman and Nicobar Islands: Union territory archipelago in the Bay of Bengal.",
      examTip: "வங்கக்கடலில் உள்ள இந்தியத் தீவுகள் அந்தமான் நிக்கோபார்."
    },
    {
      id: "ind_lakshadweep",
      unit: 2,
      unitTitle: "புவியியல் - அலகு 1: அமைவிடம், நிலத்தோற்றம் & வடிகாலமைப்பு",
      category: "Islands (தீவுகள்)",
      mapType: "india",
      nameTamil: "லட்சத்தீவுகள் (பவளத்தீவுகள்)",
      nameEnglish: "Lakshadweep Islands (Coral origin)",
      coords: { x: 28.0, y: 76.0 },
      type: "point",
      teachScriptTamil: "லட்சத்தீவுகள்: அரபிக்கடலில் கேரள கடற்கரைக்கு மேற்கே அமைந்துள்ள இந்தியாவின் பவளப்பாறை தீவுக்கூட்டம்.",
      teachScriptEnglish: "Lakshadweep: Coral island archipelago in Arabian Sea off Kerala coast.",
      examTip: "அரபிக்கடலில் உள்ள பவளத் தீவுகள் லட்சத்தீவுகள்."
    },

    // --- LESSON 3: Civics Unit 1 (Indian Constitution) ---
    {
      id: "ind_delhi_const",
      unit: 3,
      unitTitle: "குடிமையியல் - அலகு 1: இந்திய அரசியலமைப்பு",
      category: "Capital & Judiciary",
      mapType: "india",
      nameTamil: "புது தில்லி (நாடாளுமன்றம் & உச்சநீதிமன்றம்)",
      nameEnglish: "New Delhi (Parliament & Supreme Court)",
      coords: { x: 39.0, y: 28.0 },
      type: "point",
      teachScriptTamil: "புது தில்லி: இந்திய குடியரசின் தலைநகரம். இந்திய அரசியலமைப்பு சபை கூடி அரசியலமைப்பை உருவாக்கிய இடம் மற்றும் உச்சநீதிமன்றம் அமைந்துள்ள இடம்.",
      teachScriptEnglish: "New Delhi: Capital of India, seat of Parliament and the Supreme Court.",
      examTip: "இந்தியாவின் தலைநகரம் அல்லது உச்சநீதிமன்றம் அமைந்துள்ள இடம் புது தில்லி."
    },
    {
      id: "ind_chennai_hc",
      unit: 3,
      unitTitle: "குடிமையியல் - அலகு 1: இந்திய அரசியலமைப்பு",
      category: "High Courts",
      mapType: "india",
      nameTamil: "சென்னை (மெட்ராஸ் உயர்நீதிமன்றம்)",
      nameEnglish: "Chennai (Madras High Court)",
      coords: { x: 47.0, y: 75.0 },
      type: "point",
      teachScriptTamil: "சென்னை: தமிழ்நாட்டின் தலைநகரம்; 1862-ல் நிறுவப்பட்ட வரலாற்றுப் புகழ்பெற்ற மெட்ராஸ் உயர்நீதிமன்றம் அமைந்துள்ள இடம்.",
      teachScriptEnglish: "Chennai: Seat of the historic Madras High Court established in 1862.",
      examTip: "தமிழ்நாட்டின் உயர்நீதிமன்றம் அமைந்துள்ள இடம் சென்னை."
    },

    // --- LESSON 4: Economics Unit 1 (GDP & Growth) ---
    {
      id: "ind_mumbai_finance",
      unit: 4,
      unitTitle: "பொருளியல் - அலகு 1: மொத்த உள்நாட்டு உற்பத்தி (GDP)",
      category: "Financial Hub",
      mapType: "india",
      nameTamil: "மும்பை (இந்தியாவின் நிதித் தலைநகரம்)",
      nameEnglish: "Mumbai (Financial Capital of India)",
      coords: { x: 30.5, y: 55.0 },
      type: "point",
      teachScriptTamil: "மும்பை: இந்தியாவின் பொருளாதாரத் தலைநகரம்; இந்திய ரிசர்வ் வங்கி (RBI) மற்றும் மும்பை பங்குச் சந்தை (BSE) அமைந்துள்ள பெருநகரம்.",
      teachScriptEnglish: "Mumbai: Financial capital of India, headquarters of Reserve Bank of India (RBI).",
      examTip: "இந்தியாவின் நிதித் தலைநகரம் அல்லது RBI தலைமையகம் உள்ள இடம் மும்பை."
    },
    {
      id: "ind_bengaluru_it",
      unit: 4,
      unitTitle: "பொருளியல் - அலகு 1: மொத்த உள்நாட்டு உற்பத்தி (GDP)",
      category: "IT Hub",
      mapType: "india",
      nameTamil: "பெங்களூரு (சிலிகான் பள்ளத்தாக்கு)",
      nameEnglish: "Bengaluru (Silicon Valley of India - IT Hub)",
      coords: { x: 39.5, y: 73.0 },
      type: "point",
      teachScriptTamil: "பெங்களூரு: இந்தியாவின் சிலிகான் பள்ளத்தாக்கு என்று அழைக்கப்படும் முன்னணி தகவல் தொழில்நுட்ப (IT) சேவைத் தலைநகரம்.",
      teachScriptEnglish: "Bengaluru: The Silicon Valley of India, premier IT services and tech capital.",
      examTip: "இந்தியாவின் சிலிகான் பள்ளத்தாக்கு அல்லது IT தலைநகரம் பெங்களூரு."
    },

    // --- LESSON 5: History Unit 2 (World between Two Wars) - World Map ---
    {
      id: "world_rome",
      unit: 5,
      unitTitle: "வரலாறு - அலகு 2: இரு உலகப்போர்களுக்கு இடையே உலகம்",
      category: "Fascism & Interwar",
      mapType: "world",
      nameTamil: "ரோம் (இத்தாலி - பாசிசத் தலைநகரம்)",
      nameEnglish: "Rome (Capital of Fascist Italy under Mussolini)",
      coords: { x: 51.5, y: 39.5 },
      type: "point",
      teachScriptTamil: "ரோம்: இத்தாலியின் தலைநகரம். முசோலினி 'ரோம் நோக்கிய அணிவகுப்பு' (March on Rome - 1922) நடத்தி பாசிச ஆட்சியை நிறுவிய வரலாற்று நகரம்.",
      teachScriptEnglish: "Rome: Capital of Italy where Mussolini established Fascist regime after March on Rome (1922).",
      examTip: "பாசிசத்தின் பிறப்பிடம் அல்லது முசோலினியின் தலைநகரம் ரோம்."
    },
    {
      id: "world_berlin",
      unit: 5,
      unitTitle: "வரலாறு - அலகு 2: இரு உலகப்போர்களுக்கு இடையே உலகம்",
      category: "Nazism & Interwar",
      mapType: "world",
      nameTamil: "பெர்லின் (ஜெர்மனி - நாசிசத் தலைநகரம்)",
      nameEnglish: "Berlin (Capital of Nazi Germany under Hitler)",
      coords: { x: 50.8, y: 33.6 },
      type: "point",
      teachScriptTamil: "பெர்லின்: ஜெர்மனியின் தலைநகரம். 1933-ல் ஹிட்லர் ஜெர்மனியின் சான்சலராகப் பதவியேற்று நாசிச சர்வாதிகார ஆட்சியை நிறுவிய இடம்.",
      teachScriptEnglish: "Berlin: Capital of Germany, center of Adolf Hitler's Nazi Third Reich.",
      examTip: "நாசிச சர்வாதிகாரத்தின் மையம் அல்லது ஹிட்லரின் தலைநகரம் பெர்லின்."
    },
    {
      id: "world_ethiopia",
      unit: 5,
      unitTitle: "வரலாறு - அலகு 2: இரு உலகப்போர்களுக்கு இடையே உலகம்",
      category: "Invasions",
      mapType: "world",
      nameTamil: "எத்தியோப்பியா / அபிசீனியா (ஆப்பிரிக்கா)",
      nameEnglish: "Ethiopia / Abyssinia (Invaded by Italy 1935)",
      coords: { x: 58.0, y: 55.0 },
      type: "point",
      teachScriptTamil: "எத்தியோப்பியா (அபிசீனியா): கிழக்கு ஆப்பிரிக்க நாடு. 1935-ல் இத்தாலியின் பாசிச சர்வாதிகாரி முசோலினி ஆக்கிரமித்த ஆப்பிரிக்க சுதந்திர நாடு.",
      teachScriptEnglish: "Ethiopia (Abyssinia): East African nation invaded and annexed by Mussolini's Italy in 1935.",
      examTip: "1935-ல் முசோலினியால் ஆக்கிரமிக்கப்பட்ட ஆப்பிரிக்க நாடு எத்தியோப்பியா."
    },

    // --- LESSON 6: Geography Unit 2 (Climate & Vegetation of India) ---
    {
      id: "ind_sw_monsoon",
      unit: 6,
      unitTitle: "புவியியல் - அலகு 2: காலநிலை & இயற்கை தாவரங்கள்",
      category: "Monsoon Winds",
      mapType: "india",
      nameTamil: "தென்மேற்குப் பருவமழைக் காற்று (SW Monsoon)",
      nameEnglish: "South-West Monsoon Wind (June to Sept)",
      coords: { x: 26.0, y: 64.0 },
      type: "line",
      teachScriptTamil: "தென்மேற்குப் பருவமழை: ஜூன் முதல் செப்டம்பர் வரை அரபிக்கடலில் இருந்து இந்தியா நோக்கி வீசும் காற்று; மேற்குத் தொடர்ச்சி மலையில் கனமழை பொழிகிறது.",
      teachScriptEnglish: "South-West Monsoon: Primary monsoon bringing 75% of India's rainfall between June and September.",
      examTip: "அரபிக்கடலில் இருந்து இந்தியா நோக்கி வீசும் தென்மேற்குப் பருவமழைக் காற்று அம்புக்குறி."
    },
    {
      id: "ind_ne_monsoon",
      unit: 6,
      unitTitle: "புவியியல் - அலகு 2: காலநிலை & இயற்கை தாவரங்கள்",
      category: "Monsoon Winds",
      mapType: "india",
      nameTamil: "வடகிழக்குப் பருவமழைக் காற்று (Retreating Monsoon)",
      nameEnglish: "North-East Monsoon Wind (Oct to Dec)",
      coords: { x: 56.0, y: 55.0 },
      type: "line",
      teachScriptTamil: "வடகிழக்குப் பருவமழை: அக்டோபர் முதல் டிசம்பர் வரை நிலத்திலிருந்து வங்கக்கடல் வழியாகத் திரும்பி வீசி தமிழ்நாட்டிற்கு 50% மழையைத் தரும் காற்று.",
      teachScriptEnglish: "North-East (Retreating) Monsoon: Brings heavy rainfall to coastal Tamil Nadu in winter.",
      examTip: "தமிழ்நாட்டிற்கு அதிக மழை தரும் வடகிழக்குப் பருவமழைக் காற்று அம்புக்குறி."
    },
    {
      id: "ind_mawsynram",
      unit: 6,
      unitTitle: "புவியியல் - அலகு 2: காலநிலை & இயற்கை தாவரங்கள்",
      category: "Rainfall Extremes",
      mapType: "india",
      nameTamil: "மௌசின்ராம் (அதிக மழைபெறும் இடம் - 1,141 செ.மீ)",
      nameEnglish: "Mawsynram (Wettest Place on Earth - Meghalaya)",
      coords: { x: 74.5, y: 31.0 },
      type: "point",
      teachScriptTamil: "மௌசின்ராம்: மேகாலயாவின் காசி குன்றுகளில் அமைந்துள்ள உலகின் மிக அதிக மழைபெறும் இடம் (ஆண்டுக்கு சுமார் 1,141 செ.மீ மழை).",
      teachScriptEnglish: "Mawsynram: Located in Meghalaya's Khasi Hills, the wettest place on Earth (1,141 cm rain).",
      examTip: "இந்தியாவின் மற்றும் உலகின் மிக அதிக மழைபெறும் இடம் மௌசின்ராம்."
    },
    {
      id: "ind_thar_desert",
      unit: 6,
      unitTitle: "புவியியல் - அலகு 2: காலநிலை & இயற்கை தாவரங்கள்",
      category: "Deserts (பாலைவனம்)",
      mapType: "india",
      nameTamil: "தார் பாலைவனம் (பெரிய இந்தியப் பாலைவனம்)",
      nameEnglish: "Thar Desert (The Great Indian Desert)",
      coords: { x: 27.0, y: 31.0 },
      type: "point",
      teachScriptTamil: "தார் பாலைவனம்: ராஜஸ்தானில் அமைந்துள்ள இந்தியாவின் மிகப்பெரிய வறண்ட மணல் பாலைவனம்; ஆண்டுக்கு 25 செ.மீ-க்கும் குறைவான மழையே பெறுகிறது.",
      teachScriptEnglish: "Thar Desert: Arid desert region in Rajasthan receiving less than 25 cm of rainfall annually.",
      examTip: "இந்தியாவின் மிகப்பெரிய பாலைவனம் தார் பாலைவனம்."
    },
    {
      id: "ind_sundarbans",
      unit: 6,
      unitTitle: "புவியியல் - அலகு 2: காலநிலை & இயற்கை தாவரங்கள்",
      category: "Forests (காடுகள்)",
      mapType: "india",
      nameTamil: "சுந்தரவனக் காடுகள் (சதுப்புநிலக் காடுகள்)",
      nameEnglish: "Sundarbans (Mangrove Tidal Forests)",
      coords: { x: 67.0, y: 40.0 },
      type: "point",
      teachScriptTamil: "சுந்தரவனக் காடுகள்: மேற்கு வங்கத்தில் கங்கை-பிரம்மபுத்திரா டெல்டாவில் அமைந்துள்ள உலகின் மிகப்பெரிய சதுப்புநில (மாங்குரோவ்) காடு; வங்காளப் புலி இங்கு வாழ்கிறது.",
      teachScriptEnglish: "Sundarbans: World's largest mangrove forest delta in West Bengal, home of Royal Bengal Tiger.",
      examTip: "இந்தியாவின் சதுப்புநிலக் காடு அல்லது சுந்தரவனம்."
    },

    // --- LESSON 7: Civics Unit 2 (Central Government) ---
    {
      id: "ind_delhi_central",
      unit: 7,
      unitTitle: "குடிமையியல் - அலகு 2: நடுவண் அரசு",
      category: "Central Government Seat",
      mapType: "india",
      nameTamil: "புது தில்லி (மத்திய அரசு - குடியரசுத் தலைவர் மாளிகை)",
      nameEnglish: "New Delhi (Rashtrapati Bhavan & Parliament)",
      coords: { x: 39.0, y: 28.0 },
      type: "point",
      teachScriptTamil: "புது தில்லி: இந்திய நடுவண் அரசின் தலைமைப் பீடம். குடியரசுத் தலைவர் மாளிகை, பிரதமர் அலுவலகம் (South Block) மற்றும் புதிய நாடாளுமன்றக் கட்டடம் அமைந்துள்ள இடம்.",
      teachScriptEnglish: "New Delhi: Capital seat of Union Government, Rashtrapati Bhavan, PMO, and Parliament.",
      examTip: "இந்திய நடுவண் அரசு அமைந்துள்ள இடம் புது தில்லி."
    },

    // --- LESSON 8: Economics Unit 2 (Globalization & Trade) ---
    {
      id: "ind_mumbai_port",
      unit: 8,
      unitTitle: "பொருளியல் - அலகு 2: உலகமயமாதல் & வர்த்தகம்",
      category: "Major Sea Ports",
      mapType: "india",
      nameTamil: "மும்பை துறைமுகம் (ஜவஹர்லால் நேரு துறைமுகம்)",
      nameEnglish: "Mumbai Port & JNPT (Largest Container Port)",
      coords: { x: 30.5, y: 55.0 },
      type: "point",
      teachScriptTamil: "மும்பை துறைமுகம்: இந்தியாவின் மிகப்பெரிய இயற்கை துறைமுகம் மற்றும் ஜவஹர்லால் நேரு துறைமுகம் (JNPT) அமைந்துள்ள முன்னணி கொள்கலன் துறைமுக நகரம்.",
      teachScriptEnglish: "Mumbai Port & JNPT: India's premier natural harbour and largest container handling port.",
      examTip: "அரபிக்கடலில் அமைந்துள்ள இந்தியாவின் மிகப்பெரிய துறைமுகம் மும்பை."
    },
    {
      id: "ind_chennai_port",
      unit: 8,
      unitTitle: "பொருளியல் - அலகு 2: உலகமயமாதல் & வர்த்தகம்",
      category: "Major Sea Ports",
      mapType: "india",
      nameTamil: "சென்னை துறைமுகம் (செயற்கைத் துறைமுகம்)",
      nameEnglish: "Chennai Port (Historic Artificial Harbour)",
      coords: { x: 47.0, y: 75.0 },
      type: "point",
      teachScriptTamil: "சென்னை துறைமுகம்: வங்காள விரிகுடாவில் அமைந்துள்ள இந்தியாவின் இரண்டாவது மிகப்பெரிய மற்றும் பழமையான செயற்கைத் துறைமுகம்.",
      teachScriptEnglish: "Chennai Port: Major artificial port on the Coromandel Coast and gateway of South India.",
      examTip: "கிழக்குக் கடற்கரையில் உள்ள செயற்கைத் துறைமுகம் சென்னை."
    },
    {
      id: "ind_tuticorin_port",
      unit: 8,
      unitTitle: "பொருளியல் - அலகு 2: உலகமயமாதல் & வர்த்தகம்",
      category: "Major Sea Ports",
      mapType: "india",
      nameTamil: "தூத்துக்குடி துறைமுகம் (வ.உ.சி துறைமுகம்)",
      nameEnglish: "Tuticorin Port (V.O. Chidambaranar Port)",
      coords: { x: 43.0, y: 84.5 },
      type: "point",
      teachScriptTamil: "தூத்துக்குடி துறைமுகம்: தமிழ்நாட்டின் தென்முனையில் மன்னார் வளைகுடாவில் அமைந்துள்ள முக்கிய அனைத்துப் பருவ செயற்கைத் துறைமுகம்.",
      teachScriptEnglish: "Tuticorin (V.O.C) Port: Deep-water port in southern Tamil Nadu handling thermal coal and exports.",
      examTip: "தமிழ்நாட்டின் தென்பகுதி துறைமுகம் அல்லது முத்து நகரம் தூத்துக்குடி."
    },

    // --- LESSON 9: History Unit 3 (World War II) - World Map ---
    {
      id: "world_pearl_harbor",
      unit: 9,
      unitTitle: "வரலாறு - அலகு 3: இரண்டாம் உலகப்போர்",
      category: "WWII Turning Points",
      mapType: "world",
      nameTamil: "பேர்ல் துறைமுகம் (ஹவாய் - அமெரிக்கா)",
      nameEnglish: "Pearl Harbor (Hawaii - US Pacific Fleet)",
      coords: { x: 10.0, y: 48.0 },
      type: "point",
      teachScriptTamil: "பேர்ல் துறைமுகம்: பசிபிக் பெருங்கடலில் உள்ள அமெரிக்காவின் கடற்படை தளம். 1941 டிசம்பர் 7 அன்று ஜப்பான் இங்கு குண்டுவீசி அமெரிக்காவை இரண்டாம் உலகப்போரில் ஈடுபட வைத்தது.",
      teachScriptEnglish: "Pearl Harbor: US naval base in Hawaii attacked by Japanese aircraft on Dec 7, 1941.",
      examTip: "1941-ல் ஜப்பானால் தாக்கப்பட்ட அமெரிக்க கடற்படை தளம் பேர்ல் துறைமுகம்."
    },
    {
      id: "world_japan_hiroshima",
      unit: 9,
      unitTitle: "வரலாறு - அலகு 3: இரண்டாம் உலகப்போர்",
      category: "WWII Turning Points",
      mapType: "world",
      nameTamil: "ஹிரோஷிமா (ஜப்பான் - முதல் அணுகுண்டு)",
      nameEnglish: "Hiroshima (Japan - First Atomic Bomb site)",
      coords: { x: 84.5, y: 41.5 },
      type: "point",
      teachScriptTamil: "ஹிரோஷிமா: ஜப்பான் நாட்டின் முக்கிய நகரம். 1945 ஆகஸ்ட் 6 அன்று அமெரிக்கா உலகின் முதல் அணுகுண்டை ('லிட்டில் பாய்') வீசிய வரலாற்று நகரம்.",
      teachScriptEnglish: "Hiroshima: Japanese city targeted with the world's first atomic bomb by USA on August 6, 1945.",
      examTip: "உலகின் முதல் அணுகுண்டு வீசப்பட்ட இடம் ஹிரோஷிமா."
    },
    {
      id: "world_stalingrad",
      unit: 9,
      unitTitle: "வரலாறு - அலகு 3: இரண்டாம் உலகப்போர்",
      category: "WWII Turning Points",
      mapType: "world",
      nameTamil: "ஸ்டாலின்கிராட் (ரஷ்யா - உலகப்போர் திருப்புமுனை)",
      nameEnglish: "Stalingrad (Volgograd, Russia - Turning Point)",
      coords: { x: 58.5, y: 34.0 },
      type: "point",
      teachScriptTamil: "ஸ்டாலின்கிராட்: வோல்கா நதிக்கரையில் அமைந்துள்ள ரஷ்ய நகரம். 1942-1943 போரில் சோவியத் படைகள் ஹிட்லரின் ஜெர்மன் இராணுவத்தை முழுமையாகத் தோற்கடித்த திருப்புமுனை தளம்.",
      teachScriptEnglish: "Stalingrad: Historic turning point of WWII where Soviet Red Army defeated Nazi 6th Army.",
      examTip: "இரண்டாம் உலகப்போரில் ஜெர்மனி தோற்கடிக்கப்பட்ட திருப்புமுனை நகரம் ஸ்டாலின்கிராட்."
    },

    // --- LESSON 10: Geography Unit 3 (India - Agriculture & Irrigation) ---
    {
      id: "ind_alluvial_soil",
      unit: 10,
      unitTitle: "புவியியல் - அலகு 3: இந்தியா - வேளாண்மை",
      category: "Soil Regions (மண்)",
      mapType: "india",
      nameTamil: "வண்டல் மண் பகுதி (கங்கைச் சமவெளி)",
      nameEnglish: "Alluvial Soil Region (Indo-Gangetic Plain)",
      coords: { x: 50.0, y: 32.0 },
      type: "point",
      teachScriptTamil: "வண்டல் மண் பகுதி: கங்கை மற்றும் பிரம்மபுத்திரா ஆறுகளின் படிவுகளால் உருவான இந்தியாவின் மிக வளமான விவசாய மண் பகுதி (நெல், கோதுமை பயிர்கள்).",
      teachScriptEnglish: "Alluvial Soil Region: Highly fertile soil deposited by Himalayan rivers in northern plains.",
      examTip: "இந்தியாவின் மிக வளமான மண் அல்லது நெல், கோதுமை விளையும் மண் வண்டல் மண்."
    },
    {
      id: "ind_black_soil",
      unit: 10,
      unitTitle: "புவியியல் - அலகு 3: இந்தியா - வேளாண்மை",
      category: "Soil Regions (மண்)",
      mapType: "india",
      nameTamil: "கரிசல் மண் பகுதி (டெக்கான் பீடபூமி - பருத்தி மண்)",
      nameEnglish: "Black Soil Region (Regur / Cotton Soil)",
      coords: { x: 38.0, y: 53.0 },
      type: "point",
      teachScriptTamil: "கரிசல் மண் பகுதி: தக்காண லாவா பாறைகள் சிதைவடைந்ததால் உருவான கருமை நிற மண்; பருத்தி விளைய மிகவும் ஏற்றது (ரீகர் மண்).",
      teachScriptEnglish: "Black Soil Region: Formed from Deccan basalt lava, ideal for cotton cultivation (Regur soil).",
      examTip: "பருத்தி விளைய ஏற்ற ரீகர் மண் அல்லது கரிசல் மண் பகுதி."
    },
    {
      id: "ind_tea_assam",
      unit: 10,
      unitTitle: "புவியியல் - அலகு 3: இந்தியா - வேளாண்மை",
      category: "Crops (பயிர் வளரும் பகுதிகள்)",
      mapType: "india",
      nameTamil: "தேயிலை விளையும் பகுதி (அசாம்)",
      nameEnglish: "Tea Cultivating Region (Assam Valley)",
      coords: { x: 75.0, y: 28.0 },
      type: "point",
      teachScriptTamil: "தேயிலை விளையும் பகுதி: அசாமின் பிரம்மபுத்திரா பள்ளத்தாக்கு மலைச்சரிவுகள்; இந்தியாவில் அதிக தேயிலை உற்பத்தி செய்யும் முதன்மை மாநிலம்.",
      teachScriptEnglish: "Tea Cultivating Region: Assam is the largest producer of tea in India.",
      examTip: "இந்தியாவில் தேயிலை அதிகம் விளையும் மாநிலம் அசாம்."
    },
    {
      id: "ind_coffee_karnataka",
      unit: 10,
      unitTitle: "புவியியல் - அலகு 3: இந்தியா - வேளாண்மை",
      category: "Crops (பயிர் வளரும் பகுதிகள்)",
      mapType: "india",
      nameTamil: "காபி விளையும் பகுதி (கர்நாடகா - குடகு)",
      nameEnglish: "Coffee Cultivating Region (Karnataka / Kodagu)",
      coords: { x: 36.0, y: 72.0 },
      type: "point",
      teachScriptTamil: "காபி விளையும் பகுதி: கர்நாடகத்தின் குடகு, சிக்மகளூரு மலைச்சரிவுகள்; இந்தியாவில் 70% காபி உற்பத்தி செய்யும் முதன்மை மாநிலம்.",
      teachScriptEnglish: "Coffee Cultivating Region: Karnataka is the leading producer of coffee (over 70%) in India.",
      examTip: "இந்தியாவில் காபி அதிகம் விளையும் மாநிலம் கர்நாடகா."
    },
    {
      id: "ind_cotton_gujarat",
      unit: 10,
      unitTitle: "புவியியல் - அலகு 3: இந்தியா - வேளாண்மை",
      category: "Crops (பயிர் வளரும் பகுதிகள்)",
      mapType: "india",
      nameTamil: "பருத்தி விளையும் பகுதி (குஜராத்)",
      nameEnglish: "Cotton Cultivating Region (Gujarat)",
      coords: { x: 26.0, y: 46.0 },
      type: "point",
      teachScriptTamil: "பருத்தி விளையும் பகுதி: குஜராத்தின் கரிசல் மண் பகுதிகள்; இந்தியாவில் பருத்தி உற்பத்தியில் முதலிடம் வகிக்கும் மாநிலம்.",
      teachScriptEnglish: "Cotton Cultivating Region: Gujarat is the leading producer of cotton in India.",
      examTip: "பருத்தி அதிகம் விளையும் மாநிலம் குஜராத்."
    },
    {
      id: "ind_dam_bhakra_nangal",
      unit: 10,
      unitTitle: "புவியியல் - அலகு 3: இந்தியா - வேளாண்மை",
      category: "Dams (அணைகள்)",
      mapType: "india",
      nameTamil: "பக்ரா நங்கல் அணை (சட்லஜ் ஆறு - பஞ்சாப்/இமாச்சல)",
      nameEnglish: "Bhakra Nangal Dam (River Sutlej - Highest Gravity Dam)",
      coords: { x: 37.0, y: 21.0 },
      type: "point",
      teachScriptTamil: "பக்ரா-நங்கல் அணை: சட்லஜ் ஆற்றின் குறுக்கே கட்டப்பட்ட இந்தியாவின் மிக உயரமான புவியீர்ப்பு அணை (கோபிந்த் சாகர் நீர்த்தேக்கம்).",
      teachScriptEnglish: "Bhakra Nangal Dam: One of the highest gravity dams in the world built across Sutlej river.",
      examTip: "சட்லஜ் நதியின் குறுக்கே கட்டப்பட்டுள்ள புவியீர்ப்பு அணை பக்ரா-நங்கல்."
    },
    {
      id: "ind_dam_hirakud",
      unit: 10,
      unitTitle: "புவியியல் - அலகு 3: இந்தியா - வேளாண்மை",
      category: "Dams (அணைகள்)",
      mapType: "india",
      nameTamil: "ஹிராகுட் அணை (மகாநதி - ஒடிசா)",
      nameEnglish: "Hirakud Dam (River Mahanadi, Odisha - Longest Dam)",
      coords: { x: 57.0, y: 47.0 },
      type: "point",
      teachScriptTamil: "ஹிராகுட் அணை: ஒடிசாவில் மகாநதியின் குறுக்கே கட்டப்பட்ட உலகின் மிக நீளமான அணை (நீளம் சுமார் 25.8 கி.மீ).",
      teachScriptEnglish: "Hirakud Dam: Longest major earthen dam in the world built across Mahanadi river in Odisha.",
      examTip: "உலகின் மிக நீளமான அணை அல்லது மகாநதி அணை ஹிராகுட்."
    },
    {
      id: "ind_dam_mettur",
      unit: 10,
      unitTitle: "புவியியல் - அலகு 3: இந்தியா - வேளாண்மை",
      category: "Dams (அணைகள்)",
      mapType: "india",
      nameTamil: "மேட்டூர் அணை (காவிரி ஆறு - தமிழ்நாடு)",
      nameEnglish: "Mettur Dam / Stanley Reservoir (River Cauvery, TN)",
      coords: { x: 42.0, y: 76.5 },
      type: "point",
      teachScriptTamil: "மேட்டூர் அணை (ஸ்டான்லி நீர்த்தேக்கம்): தமிழ்நாட்டின் சேலம் மாவட்டத்தில் காவிரி ஆற்றின் குறுக்கே கட்டப்பட்ட வரலாற்றுச் சிறப்புமிக்க பழமையான அணை.",
      teachScriptEnglish: "Mettur Dam: Major multipurpose dam across River Cauvery in Salem, Tamil Nadu.",
      examTip: "தமிழ்நாட்டில் காவிரி ஆற்றின் குறுக்கே உள்ள அணை மேட்டூர் அணை."
    },

    // --- LESSON 11: Civics Unit 3 (State Government) ---
    {
      id: "ind_tn_secretariat",
      unit: 11,
      unitTitle: "குடிமையியல் - அலகு 3: மாநில அரசு",
      category: "State Governance",
      mapType: "india",
      nameTamil: "சென்னை (புனித ஜார்ஜ் கோட்டை - தமிழ்நாடு தலைமைச் செயலகம்)",
      nameEnglish: "Chennai (Fort St. George - Tamil Nadu Secretariat)",
      coords: { x: 47.0, y: 75.0 },
      type: "point",
      teachScriptTamil: "சென்னை (புனித ஜார்ஜ் கோட்டை): தமிழ்நாடு மாநில அரசின் தலைமைச் செயலகம் மற்றும் சட்டமன்றப் பேரவை அமைந்துள்ள வரலாற்று தளம்.",
      teachScriptEnglish: "Chennai (Fort St. George): Seat of Tamil Nadu State Government and Legislative Assembly.",
      examTip: "தமிழ்நாடு மாநில அரசின் தலைமைச் செயலகம் அமைந்துள்ள இடம் சென்னை."
    },

    // --- LESSON 12: Economics Unit 3 (Food Security & Nutrition) ---
    {
      id: "ind_green_revolution_belt",
      unit: 12,
      unitTitle: "பொருளியல் - அலகு 3: உணவு பாதுகாப்பு & ஊட்டச்சத்து",
      category: "Food Production Belt",
      mapType: "india",
      nameTamil: "பசுமைப் புரட்சி பகுதி (பஞ்சாப் & ஹரியானா - உணவுக் களஞ்சியம்)",
      nameEnglish: "Green Revolution Belt (Punjab & Haryana - Food Granary)",
      coords: { x: 34.0, y: 24.0 },
      type: "point",
      teachScriptTamil: "பசுமைப் புரட்சி பகுதி: அதிக விளைச்சல் தரும் வீரிய விதைகள் (HYV) மற்றும் ரசாயன உரங்கள் மூலம் இந்தியாவின் உணவு உற்பத்தியில் தன்னிறைவு ஏற்படுத்திய பஞ்சாப்-ஹரியானா பகுதிகள்.",
      teachScriptEnglish: "Green Revolution Region: Punjab and Haryana, the granary of India leading national food security.",
      examTip: "இந்தியாவின் உணவுக் களஞ்சியம் அல்லது பசுமைப் புரட்சி தொடங்கிய பஞ்சாப்-ஹரியானா."
    }
  ];
  // 2. VECTOR SVG OUTLINE MAP TEMPLATES (Pure Scalable Vector graphics)
  // ---------------------------------------------------------------------------
  const MAP_SVGS = {
    // INDIA OUTLINE MAP: viewBox="0 0 1000 1150"
    india: `
      <svg id="svgIndiaMap" viewBox="0 0 1000 1150" class="vector-map-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="mapGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0c1d37" />
            <stop offset="100%" stop-color="#071324" />
          </linearGradient>
          <linearGradient id="landGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1e293b" />
            <stop offset="100%" stop-color="#0f172a" />
          </linearGradient>
        </defs>

        <!-- Ocean Background -->
        <rect width="1000" height="1150" fill="url(#oceanGrad)" />

        <!-- Compass Rose -->
        <g transform="translate(870, 110)" opacity="0.75">
          <circle cx="0" cy="0" r="32" fill="none" stroke="#38bdf8" stroke-dasharray="3,3" stroke-width="1.5" />
          <polygon points="0,-28 6,-6 0,0 -6,-6" fill="#ef4444" />
          <polygon points="0,28 6,6 0,0 -6,6" fill="#94a3b8" />
          <polygon points="28,0 6,6 0,0 6,-6" fill="#94a3b8" />
          <polygon points="-28,0 -6,6 0,0 -6,-6" fill="#94a3b8" />
          <text x="0" y="-34" fill="#ef4444" font-size="14" font-weight="900" text-anchor="middle">N</text>
          <text x="0" y="44" fill="#94a3b8" font-size="12" font-weight="800" text-anchor="middle">S</text>
          <text x="40" y="4" fill="#94a3b8" font-size="12" font-weight="800" text-anchor="middle">E</text>
          <text x="-40" y="4" fill="#94a3b8" font-size="12" font-weight="800" text-anchor="middle">W</text>
        </g>

        <!-- Ocean Water Body Labels -->
        <text x="140" y="780" fill="#38bdf8" opacity="0.35" font-size="22" font-weight="800" letter-spacing="4">ARABIAN SEA (அரபிக்கடல்)</text>
        <text x="640" y="780" fill="#38bdf8" opacity="0.35" font-size="22" font-weight="800" letter-spacing="4">BAY OF BENGAL (வங்காள விரிகுடா)</text>
        <text x="320" y="1120" fill="#38bdf8" opacity="0.35" font-size="20" font-weight="800" letter-spacing="4">INDIAN OCEAN (இந்தியப் பெருங்கடல்)</text>

        <!-- Neighboring Landmarks -->
        <text x="120" y="280" fill="#64748b" opacity="0.5" font-size="16" font-weight="700">PAKISTAN</text>
        <text x="520" y="160" fill="#64748b" opacity="0.5" font-size="16" font-weight="700">TIBET / CHINA</text>
        <text x="500" y="285" fill="#64748b" opacity="0.5" font-size="15" font-weight="700">NEPAL</text>
        <text x="690" y="275" fill="#64748b" opacity="0.5" font-size="14" font-weight="700">BHUTAN</text>
        <text x="680" y="450" fill="#64748b" opacity="0.5" font-size="15" font-weight="700">BANGLADESH</text>
        <text x="830" y="430" fill="#64748b" opacity="0.5" font-size="14" font-weight="700">MYANMAR</text>

        <!-- INDIA MAINLAND DETAILED VECTOR SHAPE -->
        <path id="indiaMainland" class="map-land-path" fill="url(#landGrad)" stroke="#38bdf8" stroke-width="2.5" stroke-linejoin="round"
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
             C 380 840, 365 870 350 900 
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

        <!-- SRI LANKA OUTLINE -->
        <path id="sriLanka" fill="url(#landGrad)" stroke="#38bdf8" stroke-width="2"
          d="M 470 940 
             C 490 925, 515 940, 520 965 
             C 525 990, 510 1020, 490 1040 
             C 475 1050, 460 1045, 455 1025 
             C 450 1000, 455 960, 470 940 Z" />
        <text x="495" y="1060" fill="#94a3b8" font-size="12" font-weight="700" text-anchor="middle">SRI LANKA</text>

        <!-- LAKSHADWEEP ISLANDS -->
        <g id="lakshadweepIslands" fill="#38bdf8" stroke="#38bdf8" opacity="0.9">
          <ellipse cx="260" cy="800" rx="4" ry="7" />
          <ellipse cx="268" cy="825" rx="5" ry="9" />
          <ellipse cx="275" cy="855" rx="4" ry="7" />
          <ellipse cx="255" cy="880" rx="3" ry="5" />
          <text x="220" y="845" fill="#38bdf8" font-size="11" font-weight="800">Lakshadweep</text>
        </g>

        <!-- ANDAMAN & NICOBAR ISLANDS -->
        <g id="andamanIslands" fill="#38bdf8" stroke="#38bdf8" opacity="0.9">
          <ellipse cx="800" cy="740" rx="5" ry="12" />
          <ellipse cx="805" cy="770" rx="5" ry="14" />
          <ellipse cx="808" cy="805" rx="6" ry="16" />
          <ellipse cx="820" cy="855" rx="5" ry="10" />
          <ellipse cx="825" cy="885" rx="6" ry="12" />
          <text x="830" y="790" fill="#38bdf8" font-size="11" font-weight="800">Andaman & Nicobar</text>
        </g>

        <!-- SUBTLE RIVER OVERLAYS (Faint blue for reference) -->
        <g id="riverGuides" fill="none" stroke="#0284c7" stroke-width="2" opacity="0.55" stroke-linecap="round">
          <!-- Ganga -->
          <path d="M 430 250 Q 480 320 540 360 T 630 460 T 660 520" />
          <!-- Indus -->
          <path d="M 440 100 Q 380 140 330 220 T 260 360 T 200 480" />
          <!-- Brahmaputra -->
          <path d="M 520 180 Q 640 190 750 250 T 820 330 T 780 410 T 680 480" />
          <!-- Narmada -->
          <path d="M 480 540 Q 380 540 250 545" />
          <!-- Tapti -->
          <path d="M 450 575 Q 360 575 260 580" />
          <!-- Godavari -->
          <path d="M 280 635 Q 400 650 550 670 T 595 680" />
          <!-- Krishna -->
          <path d="M 300 700 Q 420 715 520 735 T 575 745" />
          <!-- Cauvery -->
          <path d="M 330 820 Q 380 820 440 840 T 475 850" />
        </g>

        <!-- INTERACTIVE MARKER / PIN LAYER -->
        <g id="dynamicMarkerLayer"></g>

        <!-- DRAWING CANVAS / USER TOUCH LAYER -->
        <g id="userDrawLayer"></g>
      </svg>
    `,

    // WORLD OUTLINE MAP: viewBox="0 0 1000 600"
    world: `
      <svg id="svgWorldMap" viewBox="0 0 1000 600" class="vector-map-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="worldOcean" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0a192f" />
            <stop offset="100%" stop-color="#020c1b" />
          </linearGradient>
          <linearGradient id="worldLand" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1e293b" />
            <stop offset="100%" stop-color="#0f172a" />
          </linearGradient>
        </defs>

        <!-- Ocean Background -->
        <rect width="1000" height="600" fill="url(#worldOcean)" />

        <!-- Ocean Labels -->
        <text x="240" y="480" fill="#38bdf8" opacity="0.3" font-size="16" font-weight="800">PACIFIC OCEAN</text>
        <text x="340" y="240" fill="#38bdf8" opacity="0.3" font-size="16" font-weight="800">ATLANTIC OCEAN</text>
        <text x="680" y="440" fill="#38bdf8" opacity="0.3" font-size="16" font-weight="800">INDIAN OCEAN</text>
        <text x="860" y="320" fill="#38bdf8" opacity="0.3" font-size="16" font-weight="800">PACIFIC OCEAN</text>

        <!-- NORTH AMERICA OUTLINE -->
        <path class="map-land-path" fill="url(#worldLand)" stroke="#38bdf8" stroke-width="1.8"
          d="M 120 70 
             C 170 60, 230 70, 280 110 
             C 320 140, 290 190, 280 230 
             C 270 270, 240 310, 220 340 
             C 210 355, 195 330, 180 300 
             C 160 260, 130 220, 110 180 
             C 90 140, 95 90, 120 70 Z" />
        <text x="190" y="200" fill="#64748b" opacity="0.6" font-size="14" font-weight="800">NORTH AMERICA</text>

        <!-- SOUTH AMERICA OUTLINE -->
        <path class="map-land-path" fill="url(#worldLand)" stroke="#38bdf8" stroke-width="1.8"
          d="M 230 350 
             C 270 360, 310 390, 320 440 
             C 325 480, 295 530, 270 560 
             C 255 580, 240 560, 235 520 
             C 225 460, 215 410, 230 350 Z" />
        <text x="250" y="450" fill="#64748b" opacity="0.6" font-size="13" font-weight="800">SOUTH AMERICA</text>

        <!-- EURASIA (EUROPE + ASIA) OUTLINE -->
        <path class="map-land-path" fill="url(#worldLand)" stroke="#38bdf8" stroke-width="1.8"
          d="M 440 140 
             C 480 110, 540 100, 620 110 
             C 720 120, 810 130, 870 170 
             C 900 200, 880 250, 840 280 
             C 800 310, 780 350, 750 370 
             C 710 390, 670 380, 640 350 
             C 620 330, 580 340, 560 360 
             C 530 390, 500 370, 480 340 
             C 460 310, 480 280, 490 250 
             C 500 220, 450 200, 440 180 Z" />
        <text x="490" y="220" fill="#64748b" opacity="0.6" font-size="13" font-weight="800">EUROPE</text>
        <text x="700" y="220" fill="#64748b" opacity="0.6" font-size="14" font-weight="800">ASIA</text>

        <!-- GREAT BRITAIN & IRELAND -->
        <path class="map-land-path" fill="url(#worldLand)" stroke="#38bdf8" stroke-width="1.5"
          d="M 455 170 C 465 160, 475 170, 470 190 C 465 200, 455 195, 455 170 Z" />

        <!-- AFRICA OUTLINE -->
        <path class="map-land-path" fill="url(#worldLand)" stroke="#38bdf8" stroke-width="1.8"
          d="M 460 350 
             C 520 340, 570 380, 590 430 
             C 600 480, 570 540, 530 570 
             C 500 590, 480 560, 465 510 
             C 440 450, 430 400, 460 350 Z" />
        <text x="500" y="460" fill="#64748b" opacity="0.6" font-size="14" font-weight="800">AFRICA</text>

        <!-- AUSTRALIA OUTLINE -->
        <path class="map-land-path" fill="url(#worldLand)" stroke="#38bdf8" stroke-width="1.8"
          d="M 780 430 
             C 830 420, 870 440, 880 480 
             C 885 520, 840 550, 800 540 
             C 770 530, 750 490, 760 460 Z" />
        <text x="800" y="490" fill="#64748b" opacity="0.6" font-size="13" font-weight="800">AUSTRALIA</text>

        <!-- JAPAN ISLANDS -->
        <g id="japanIslands" fill="#38bdf8" stroke="#38bdf8">
          <ellipse cx="865" cy="225" rx="4" ry="12" transform="rotate(30 865 225)" />
          <ellipse cx="875" cy="245" rx="5" ry="14" transform="rotate(25 875 245)" />
          <text x="890" y="240" fill="#38bdf8" font-size="11" font-weight="800">JAPAN</text>
        </g>

        <!-- HAWAII / PEARL HARBOR -->
        <g id="hawaiiIslands" fill="#ef4444" stroke="#ef4444">
          <circle cx="135" cy="265" r="4" />
          <text x="145" y="270" fill="#fca5a5" font-size="11" font-weight="800">Hawaii</text>
        </g>

        <!-- INTERACTIVE MARKER / PIN LAYER -->
        <g id="dynamicMarkerLayer"></g>

        <!-- DRAWING CANVAS / USER TOUCH LAYER -->
        <g id="userDrawLayer"></g>
      </svg>
    `
  };

  window.MAP_SVGS = MAP_SVGS;

  // ---------------------------------------------------------------------------
  // 3. MAP TUTOR & TEST ENGINE CONTROLLER
  // ---------------------------------------------------------------------------
  const MapTutorEngine = {
    currentMapType: 'india',
    currentUnit: 2,
    activeLocation: null,
    isVoicePlaying: false,
    autoPlayTimer: null,
    autoPlayList: [],
    autoPlayIndex: 0,
    
    // Test Mode State
    isTestActive: false,
    testModeType: 'tap', // 'tap' or 'mcq'
    testQuestions: [],
    currentTestIndex: 0,
    currentScore: 0,
    testResults: [],

    // Drawing Mode State
    isDrawing: false,
    penColor: '#ef4444',
    penWidth: 3,

    // Initialize Modal and Bind Events
    init() {
      if (document.getElementById('socialMapModal')) return;

      const modalHtml = `
        <div id="socialMapModal" class="social-map-modal-overlay" style="display:none;">
          <div class="social-map-modal-container">
            <!-- Header -->
            <div class="map-modal-header">
              <div style="display:flex; align-items:center; gap:10px;">
                <span style="font-size:24px;">🗺️</span>
                <div>
                  <h3 id="mapModalTitle" class="map-modal-heading">10-ஆம் வகுப்பு வரைபட வழிகாட்டி & தேர்வு</h3>
                  <div id="mapModalSubTitle" style="font-size:12px; color:var(--text-muted, #94a3b8);">அனைத்து 12 அலகுகளின் வரைபட வினாக்கள் மற்றும் குரல் வழிகாட்டல்</div>
                </div>
              </div>
              <div style="display:flex; align-items:center; gap:8px;">
              <button type="button" class="map-ctrl-btn" onclick="MapTutorEngine.downloadBlankMap()" title="வெற்று வரைபடத்தைப் பதிவிறக்கு (Download Blank Map)">📥 பதிவிறக்கு</button>
                <button type="button" class="map-close-btn" onclick="MapTutorEngine.closeModal()">&times;</button>
              </div>
            </div>

            <!-- Top Controls Toolbar -->
            <div class="map-toolbar">
              <div class="map-pills-row">
            <button id="btnMapTypeIndia" class="map-pill active" onclick="MapTutorEngine.setMapType('india')">🇮🇳 இந்தியா வரைபடம் (புவியியல்)</button>
            <button id="btnMapTypeWorld" class="map-pill" onclick="MapTutorEngine.setMapType('world')">🌍 உலக வரைபடம் (வரலாறு)</button>
              </div>

              <div class="map-pills-row" style="margin-top:6px;">
                <select id="mapLessonSelect" class="map-unit-select" onchange="MapTutorEngine.filterByUnit(this.value)">
              <option value="all">📚 அனைத்து அலகுகள் (All 12 Lessons)</option>
              <option value="1">வரலாறு அலகு 1: முதல் உலகப்போர்</option>
              <option value="2" selected>புவியியல் அலகு 1: அமைவிடம், வடிகாலமைப்பு</option>
              <option value="3">குடிமையியல் அலகு 1: அரசியலமைப்பு</option>
              <option value="4">பொருளியல் அலகு 1: GDP & வளர்ச்சி</option>
              <option value="5">வரலாறு அலகு 2: இரு உலகப்போர்களுக்கு இடையே</option>
              <option value="6">புவியியல் அலகு 2: காலநிலை & தாவரங்கள்</option>
              <option value="7">குடிமையியல் அலகு 2: நடுவண் அரசு</option>
              <option value="8">பொருளியல் அலகு 2: உலகமயமாதல் & வர்த்தகம்</option>
              <option value="9">வரலாறு அலகு 3: இரண்டாம் உலகப்போர்</option>
              <option value="10">புவியியல் அலகு 3: வேளாண்மை & பாசனம்</option>
              <option value="11">குடிமையியல் அலகு 3: மாநில அரசு</option>
              <option value="12">பொருளியல் அலகு 3: உணவு பாதுகாப்பு</option>
                </select>

                <div style="display:flex; gap:6px;">
            <button id="btnModeTeach" class="map-mode-btn active" onclick="MapTutorEngine.setMode('teach')">🎙️ குரல் வழிகாட்டி</button>
            <button id="btnModeTest" class="map-mode-btn" onclick="MapTutorEngine.setMode('test')">📝 வரைபடத் தேர்வு</button>
                </div>
              </div>
            </div>

            <!-- Main Interactive Map Area (Split layout: Sidebar + Map) -->
            <div class="map-workspace">
              <!-- Left: Location Picker / Test Prompt Sidebar -->
              <div id="mapSidebar" class="map-sidebar">
                <div id="teachSidebarContent">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <span style="font-size:12.5px; font-weight:800; color:var(--primary, #38bdf8);">📍 குறிக்க வேண்டிய இடங்கள்:</span>
              <button id="btnAutoPlayAll" class="map-action-sm-btn" onclick="MapTutorEngine.toggleAutoTeachAll()">▶️ அனைத்தையும் கற்பி</button>
                  </div>
            <input type="text" id="mapSearchInput" placeholder="🔍 இடத்தைத் தேடுக..." class="map-search-field" oninput="MapTutorEngine.filterSearch(this.value)" />
                  <div id="mapPlacesList" class="map-places-list"></div>
                </div>

                <!-- Test Sidebar Content -->
                <div id="testSidebarContent" style="display:none;">
                  <div class="test-score-banner">
              <div>வினா: <span id="testProgress">1 / 5</span></div>
              <div>மதிப்பெண்: <span id="testScoreDisplay" style="color:#10b981; font-weight:900;">0 / 5</span></div>
                  </div>
                  <div id="testQuestionBox" class="test-q-box">
                    <div id="testQuestionPrompt" style="font-size:16px; font-weight:800; color:#ffffff; line-height:1.5;"></div>
            <div id="testInstructionTip" style="font-size:12.5px; color:#38bdf8; margin-top:6px;">👆 வரைபடத்தில் சரியான இடத்தைத் தொட்டு குறிக்கவும்</div>
                  </div>
                  <div id="testFeedbackBox" class="test-feedback-box" style="display:none;"></div>
                  <div style="display:flex; gap:8px; margin-top:12px;">
              <button id="btnNextTestQ" class="map-primary-btn" style="display:none;" onclick="MapTutorEngine.nextTestQuestion()">அடுத்த வினா ➔</button>
              <button class="map-secondary-btn" onclick="MapTutorEngine.setMode('teach')">தேர்வை நிறுத்து</button>
                  </div>
                </div>
              </div>

              <!-- Right: Map Viewport -->
              <div class="map-viewport-container">
                <div id="mapSvgWrapper" class="map-svg-wrapper"></div>

                <!-- Floating Voice Controller Card (Shows current teaching tips) -->
                <div id="voiceTeacherCard" class="voice-teacher-card" style="display:none;">
                  <div style="display:flex; align-items:center; justify-content:space-between; gap:10px;">
                    <div style="display:flex; align-items:center; gap:8px;">
                      <span class="pulsing-voice-dot"></span>
                      <strong id="voicePlaceTitle" style="color:#38bdf8; font-size:15px;"></strong>
                    </div>
                    <div style="display:flex; align-items:center; gap:6px;">
                <button type="button" class="voice-ctrl-icon-btn" onclick="MapTutorEngine.replayVoice()" title="மீண்டும் கேள்">🔄</button>
                <button type="button" class="voice-ctrl-icon-btn" onclick="MapTutorEngine.stopVoice()" title="நிறுத்து">⏹️</button>
                    </div>
                  </div>
                  <div id="voicePlaceGuide" style="margin-top:6px; font-size:13px; line-height:1.6; color:#f1f5f9;"></div>
                  <div id="voiceExamTip" style="margin-top:6px; font-size:12px; color:#fbbf24; background:rgba(245,158,11,0.15); padding:4px 8px; border-radius:4px;"></div>
                </div>

                <!-- Zoom and Pan Controls -->
                <div class="map-zoom-controls">
              <button type="button" onclick="MapTutorEngine.zoomMap(1.2)" title="பெரிதாக்கு (Zoom In)">➕</button>
              <button type="button" onclick="MapTutorEngine.zoomMap(0.8)" title="சிறிதாக்கு (Zoom Out)">➖</button>
              <button type="button" onclick="MapTutorEngine.resetMapZoom()" title="மீட்டமை (Reset View)">🎯</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      document.body.insertAdjacentHTML('beforeend', modalHtml);

      // Inject Map CSS Styles
      this.injectStyles();
    },

    injectStyles() {
      if (document.getElementById('socialMapStyles')) return;
      const css = `
        .social-map-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;
          background: rgba(3, 7, 18, 0.88);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
        }
        .social-map-modal-container {
          background: #091220;
          border: 1.5px solid #1e3a5f;
          border-radius: 16px;
          width: 98vw;
          max-width: 1200px;
          height: 94vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(56, 189, 248, 0.2);
          overflow: hidden;
        }
        .map-modal-header {
          padding: 12px 18px;
          background: #0c1829;
          border-bottom: 1px solid #1e3a5f;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .map-modal-heading {
          font-size: 18px;
          font-weight: 800;
          color: #ffffff;
          margin: 0;
        }
        .map-close-btn {
          background: none;
          border: none;
          color: #94a3b8;
          font-size: 28px;
          cursor: pointer;
          line-height: 1;
        }
        .map-close-btn:hover { color: #f87171; }
        .map-ctrl-btn {
          background: #1e293b;
          border: 1px solid #334155;
          color: #38bdf8;
          font-weight: 700;
          font-size: 12.5px;
          padding: 6px 12px;
          border-radius: 8px;
          cursor: pointer;
        }
        .map-toolbar {
          padding: 10px 18px;
          background: #0f1c30;
          border-bottom: 1px solid #1e3a5f;
        }
        .map-pills-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .map-pill {
          background: #1e293b;
          border: 1px solid #334155;
          color: #cbd5e1;
          font-weight: 700;
          font-size: 13px;
          padding: 7px 14px;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .map-pill.active {
          background: linear-gradient(135deg, #0284c7, #2563eb);
          border-color: #38bdf8;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(2, 132, 199, 0.4);
        }
        .map-unit-select {
          flex: 1;
          min-width: 240px;
          background: #1e293b;
          border: 1px solid #334155;
          color: #f1f5f9;
          font-weight: 700;
          font-size: 13px;
          padding: 8px 12px;
          border-radius: 8px;
          outline: none;
        }
        .map-mode-btn {
          background: #1e293b;
          border: 1.5px solid #334155;
          color: #94a3b8;
          font-weight: 800;
          font-size: 13px;
          padding: 7px 14px;
          border-radius: 8px;
          cursor: pointer;
        }
        .map-mode-btn.active {
          background: #10b981;
          border-color: #34d399;
          color: #ffffff;
        }
        .map-workspace {
          flex: 1;
          display: flex;
          overflow: hidden;
        }
        .map-sidebar {
          width: 320px;
          background: #0a1424;
          border-right: 1px solid #1e3a5f;
          padding: 14px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }
        .map-search-field {
          width: 100%;
          background: #16243b;
          border: 1px solid #2d4566;
          color: #fff;
          font-size: 13px;
          padding: 7px 10px;
          border-radius: 6px;
          margin-bottom: 10px;
          box-sizing: border-box;
        }
        .map-places-list {
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .map-place-item {
          background: #122036;
          border: 1px solid #203552;
          border-radius: 8px;
          padding: 8px 12px;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .map-place-item:hover {
          background: #1a2f4d;
          border-color: #38bdf8;
          transform: translateX(3px);
        }
        .map-place-item.active {
          background: linear-gradient(135deg, #0369a1, #1d4ed8);
          border-color: #38bdf8;
          color: #fff;
          box-shadow: 0 4px 12px rgba(3, 105, 161, 0.4);
        }
        .map-viewport-container {
          flex: 1;
          position: relative;
          background: #050d1a;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .map-svg-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: crosshair;
        }
        .vector-map-svg {
          width: 100%;
          height: 100%;
          max-height: 80vh;
          user-select: none;
          transition: transform 0.3s ease;
        }
        .voice-teacher-card {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 70px;
          background: rgba(15, 23, 42, 0.95);
          border: 1.5px solid #38bdf8;
          border-radius: 12px;
          padding: 12px 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.6);
          backdrop-filter: blur(8px);
          max-width: 650px;
          z-index: 10;
        }
        .pulsing-voice-dot {
          width: 10px;
          height: 10px;
          background: #ef4444;
          border-radius: 50%;
          display: inline-block;
          animation: voicePulse 1.2s infinite;
        }
        @keyframes voicePulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.6); opacity: 0.4; }
        }
        .voice-ctrl-icon-btn {
          background: #1e293b;
          border: 1px solid #334155;
          color: #fff;
          font-size: 14px;
          width: 30px;
          height: 30px;
          border-radius: 6px;
          cursor: pointer;
        }
        .map-zoom-controls {
          position: absolute;
          top: 16px;
          right: 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          z-index: 10;
        }
        .map-zoom-controls button {
          width: 36px;
          height: 36px;
          background: #1e293b;
          border: 1px solid #334155;
          color: #38bdf8;
          font-size: 16px;
          font-weight: 800;
          border-radius: 8px;
          cursor: pointer;
        }
        .map-action-sm-btn {
          background: #0284c7;
          border: none;
          color: #fff;
          font-size: 11px;
          font-weight: 800;
          padding: 4px 8px;
          border-radius: 6px;
          cursor: pointer;
        }
        .test-score-banner {
          background: #16243b;
          border-radius: 8px;
          padding: 8px 12px;
          display: flex;
          justify-content: space-between;
          font-weight: 800;
          font-size: 13px;
          margin-bottom: 12px;
        }
        .test-q-box {
          background: #122036;
          border: 1.5px solid #2563eb;
          border-radius: 10px;
          padding: 14px;
          margin-bottom: 12px;
        }
        .test-feedback-box {
          padding: 10px 14px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.5;
        }
        .map-primary-btn {
          flex: 1;
          background: linear-gradient(135deg, #10b981, #059669);
          color: #fff;
          border: none;
          padding: 10px 14px;
          border-radius: 8px;
          font-weight: 800;
          font-size: 13.5px;
          cursor: pointer;
        }
        .map-secondary-btn {
          background: #334155;
          color: #cbd5e1;
          border: none;
          padding: 10px 14px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 13px;
          cursor: pointer;
        }

        /* Marker Animations */
        .glowing-pin {
          transform-origin: center;
          animation: pinBounce 1.5s infinite;
        }
        @keyframes pinBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .pin-ripple {
          animation: rippleRing 1.6s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }
        @keyframes rippleRing {
          0% { r: 5; opacity: 1; stroke-width: 3; }
          100% { r: 40; opacity: 0; stroke-width: 0.5; }
        }

        @media (max-width: 768px) {
          .map-workspace { flex-direction: column-reverse; }
          .map-sidebar { width: 100%; height: 210px; border-right: none; border-top: 1px solid #1e3a5f; }
          .social-map-modal-container { width: 100vw; height: 100vh; border-radius: 0; }
          .voice-teacher-card { left: 8px; right: 55px; bottom: 8px; padding: 8px 12px; }
        }
      `;
      const st = document.createElement('style');
      st.id = 'socialMapStyles';
      st.innerHTML = css;
      document.head.appendChild(st);
    },

    // Open Modal
    openModal(targetUnit = 'all', targetLocId = null, mode = 'teach') {
      this.init();
      const modal = document.getElementById('socialMapModal');
      modal.style.display = 'flex';

      // Set Unit
      if (targetUnit && targetUnit !== 'all') {
        const uNum = parseInt(targetUnit, 10);
        this.currentUnit = isNaN(uNum) ? 'all' : uNum;
        document.getElementById('mapLessonSelect').value = this.currentUnit;
        
        // Auto select world or india based on unit
        if ([1, 5, 9].includes(this.currentUnit)) {
          this.setMapType('world', false);
        } else {
          this.setMapType('india', false);
        }
      }

      this.renderCurrentMap();
      this.renderPlacesList();

      if (targetLocId) {
        this.selectLocation(targetLocId, true);
      } else {
        // Pick first item in list
        const list = this.getFilteredLocations();
        if (list.length > 0) {
          this.selectLocation(list[0].id, false);
        }
      }

      this.setMode(mode);
    },

    closeModal() {
      this.stopVoice();
      const modal = document.getElementById('socialMapModal');
      if (modal) modal.style.display = 'none';
    },

    setMapType(type, reRender = true) {
      this.stopVoice();
      this.currentMapType = type;
      document.getElementById('btnMapTypeIndia').classList.toggle('active', type === 'india');
      document.getElementById('btnMapTypeWorld').classList.toggle('active', type === 'world');
      if (reRender) {
        this.renderCurrentMap();
        this.renderPlacesList();
        const list = this.getFilteredLocations();
        if (list.length > 0) this.selectLocation(list[0].id, false);
      }
    },

    setMode(mode) {
      this.stopVoice();
      const isTeach = mode === 'teach';
      document.getElementById('btnModeTeach').classList.toggle('active', isTeach);
      document.getElementById('btnModeTest').classList.toggle('active', !isTeach);
      document.getElementById('teachSidebarContent').style.display = isTeach ? 'block' : 'none';
      document.getElementById('testSidebarContent').style.display = isTeach ? 'none' : 'block';

      if (!isTeach) {
        this.startInteractiveTest();
      } else {
        this.isTestActive = false;
        this.renderPlacesList();
      }
    },

    filterByUnit(unitVal) {
      this.currentUnit = unitVal === 'all' ? 'all' : parseInt(unitVal, 10);
      if ([1, 5, 9].includes(this.currentUnit)) {
        this.setMapType('world', true);
      } else if (this.currentUnit !== 'all') {
        this.setMapType('india', true);
      } else {
        this.renderPlacesList();
      }
    },

    filterSearch(query) {
      this.renderPlacesList(query);
    },

    getFilteredLocations(search = '') {
      return SOCIAL_MAP_LOCATIONS.filter(loc => {
        const matchMap = loc.mapType === this.currentMapType;
        const matchUnit = (this.currentUnit === 'all') || (loc.unit === this.currentUnit);
        let matchSearch = true;
        if (search.trim()) {
          const s = search.toLowerCase();
          matchSearch = loc.nameTamil.toLowerCase().includes(s) || 
                        loc.nameEnglish.toLowerCase().includes(s) ||
                        loc.category.toLowerCase().includes(s);
        }
        return matchMap && matchUnit && matchSearch;
      });
    },

    renderCurrentMap() {
      const wrapper = document.getElementById('mapSvgWrapper');
      wrapper.innerHTML = MAP_SVGS[this.currentMapType];

      // Bind Map Click event for Tap-to-Mark Test
      const svgEl = wrapper.querySelector('svg');
      if (svgEl) {
        svgEl.addEventListener('click', (e) => this.handleMapClick(e));
      }
    },

    renderPlacesList(search = '') {
      const container = document.getElementById('mapPlacesList');
      const list = this.getFilteredLocations(search);

      if (list.length === 0) {
      container.innerHTML = `<div style="color:#64748b; font-size:12.5px; padding:12px; text-align:center;">இடங்கள் ஏதுமில்லை</div>`;
        return;
      }

      container.innerHTML = list.map(loc => {
        const isAct = this.activeLocation && this.activeLocation.id === loc.id;
        return `
          <div class="map-place-item ${isAct ? 'active' : ''}" onclick="MapTutorEngine.selectLocation('${loc.id}', true)">
            <div>
              <div style="font-weight:700; font-size:13px;">${loc.nameTamil}</div>
              <div style="font-size:11px; opacity:0.8;">${loc.nameEnglish}</div>
            </div>
          <span style="font-size:14px;">📍</span>
          </div>
        `;
      }).join('');
    },

    selectLocation(locId, shouldSpeak = false) {
      const loc = SOCIAL_MAP_LOCATIONS.find(l => l.id === locId);
      if (!loc) return;

      this.activeLocation = loc;

      // Update Sidebar active state
      document.querySelectorAll('.map-place-item').forEach(el => {
        el.classList.toggle('active', el.textContent.includes(loc.nameTamil));
      });

      // Render Dynamic Pin on SVG
      this.dropPinOnMap(loc);

      // Show Voice Teacher Card
      const card = document.getElementById('voiceTeacherCard');
      card.style.display = 'block';
      document.getElementById('voicePlaceTitle').textContent = loc.nameTamil + ' (' + loc.nameEnglish + ')';
      document.getElementById('voicePlaceGuide').textContent = loc.teachScriptTamil;
    document.getElementById('voiceExamTip').textContent = '💡 தேர்வு குறிப்பு: ' + loc.examTip;

      if (shouldSpeak) {
        this.speakLocation(loc);
      }
    },

    dropPinOnMap(loc, isSuccess = null) {
      const svg = document.getElementById('svgIndiaMap') || document.getElementById('svgWorldMap');
      if (!svg) return;

      const layer = svg.querySelector('#dynamicMarkerLayer');
      if (!layer) return;

      // Convert percentage coordinates to SVG viewBox coords
      const viewBox = svg.viewBox.baseVal;
      const vx = (loc.coords.x / 100) * viewBox.width;
      const vy = (loc.coords.y / 100) * viewBox.height;

      const pinColor = isSuccess === false ? '#ef4444' : (isSuccess === true ? '#10b981' : '#f59e0b');

      layer.innerHTML = `
        <!-- Animated Ripple Ring -->
        <circle cx="${vx}" cy="${vy}" r="15" fill="none" stroke="${pinColor}" stroke-width="2.5" class="pin-ripple" />
        
        <!-- Glowing Pin Point -->
        <g class="glowing-pin" transform="translate(${vx}, ${vy})">
          <circle cx="0" cy="0" r="7" fill="${pinColor}" stroke="#ffffff" stroke-width="2.5" filter="url(#mapGlow)" />
          <path d="M 0 0 L -8 -22 A 9 9 0 1 1 8 -22 Z" fill="${pinColor}" stroke="#ffffff" stroke-width="1.5" />
          <circle cx="0" cy="-22" r="4" fill="#ffffff" />
          
          <!-- Label Tooltip -->
          <rect x="14" y="-32" width="${loc.nameTamil.length * 10 + 20}" height="24" rx="5" fill="#091220" stroke="${pinColor}" stroke-width="1.5" />
          <text x="22" y="-16" fill="#ffffff" font-size="12" font-weight="800">${loc.nameTamil}</text>
        </g>
      `;
    },

    // -------------------------------------------------------------------------
    // VOICE TEACHER (Web Speech API Narration)
    // -------------------------------------------------------------------------
    speakLocation(loc) {
      this.stopVoice();

      if (!('speechSynthesis' in window)) {
        console.warn('Speech synthesis not supported');
        return;
      }

    const text = `${loc.nameTamil}. ${loc.teachScriptTamil} தேர்வு குறிப்பு: ${loc.examTip}`;
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'ta-IN';
      utter.rate = 0.95;
      utter.pitch = 1.0;

      utter.onstart = () => {
        this.isVoicePlaying = true;
      };

      utter.onend = () => {
        this.isVoicePlaying = false;
        if (this.isAutoPlaying) {
          this.advanceAutoTeach();
        }
      };

      utter.onerror = () => {
        this.isVoicePlaying = false;
        if (this.isAutoPlaying) {
          this.advanceAutoTeach();
        }
      };

      window.speechSynthesis.speak(utter);
    },

    replayVoice() {
      if (this.activeLocation) {
        this.speakLocation(this.activeLocation);
      }
    },

    stopVoice() {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      this.isVoicePlaying = false;
      this.isAutoPlaying = false;
      if (this.autoPlayTimer) clearTimeout(this.autoPlayTimer);
      const btn = document.getElementById('btnAutoPlayAll');
    if (btn) btn.textContent = '▶️ அனைத்தையும் கற்பி';
    },

    toggleAutoTeachAll() {
      if (this.isAutoPlaying) {
        this.stopVoice();
        return;
      }

      const list = this.getFilteredLocations();
      if (list.length === 0) return;

      this.isAutoPlaying = true;
      this.autoPlayList = list;
      this.autoPlayIndex = 0;
    document.getElementById('btnAutoPlayAll').textContent = '⏹️ நிறுத்து';
      this.runAutoTeachStep();
    },

    runAutoTeachStep() {
      if (!this.isAutoPlaying || this.autoPlayIndex >= this.autoPlayList.length) {
        this.stopVoice();
        return;
      }

      const loc = this.autoPlayList[this.autoPlayIndex];
      this.selectLocation(loc.id, true);
    },

    advanceAutoTeach() {
      this.autoPlayIndex++;
      if (this.autoPlayIndex < this.autoPlayList.length) {
        this.autoPlayTimer = setTimeout(() => {
          this.runAutoTeachStep();
        }, 1500);
      } else {
        this.stopVoice();
      }
    },

    // -------------------------------------------------------------------------
    // INTERACTIVE MAP TEST (Tap-to-Mark & Coordinates Tolerance Check)
    // -------------------------------------------------------------------------
    startInteractiveTest() {
      this.stopVoice();
      this.isTestActive = true;
      const list = this.getFilteredLocations();

      if (list.length < 3) {
        // Pull general 5 questions
        this.testQuestions = [...SOCIAL_MAP_LOCATIONS.filter(l => l.mapType === this.currentMapType)].sort(() => 0.5 - Math.random()).slice(0, 5);
      } else {
        this.testQuestions = [...list].sort(() => 0.5 - Math.random()).slice(0, 5);
      }

      this.currentTestIndex = 0;
      this.currentScore = 0;
      this.testResults = [];

      // Clear SVG pin
      const svg = document.getElementById('svgIndiaMap') || document.getElementById('svgWorldMap');
      if (svg) {
        const layer = svg.querySelector('#dynamicMarkerLayer');
        if (layer) layer.innerHTML = '';
      }
      document.getElementById('voiceTeacherCard').style.display = 'none';

      this.renderTestQuestion();
    },

    renderTestQuestion() {
      const q = this.testQuestions[this.currentTestIndex];
      if (!q) {
        this.finishTest();
        return;
      }

      document.getElementById('testProgress').textContent = `${this.currentTestIndex + 1} / ${this.testQuestions.length}`;
      document.getElementById('testScoreDisplay').textContent = `${this.currentScore} / ${this.testQuestions.length}`;
      document.getElementById('testQuestionPrompt').innerHTML = `
        <span style="color:#fbbf24;">கேள்வி ${this.currentTestIndex + 1}:</span><br>
        "${q.nameTamil}"<br>
        <span style="font-size:13px; color:#cbd5e1;">(${q.nameEnglish}) - வரைபடத்தில் குறிக்கவும்.</span>
      `;
      document.getElementById('testInstructionTip').style.display = 'block';
      document.getElementById('testFeedbackBox').style.display = 'none';
      document.getElementById('btnNextTestQ').style.display = 'none';

      // Clear dynamic marker
      const svg = document.getElementById('svgIndiaMap') || document.getElementById('svgWorldMap');
      if (svg) {
        const layer = svg.querySelector('#dynamicMarkerLayer');
        if (layer) layer.innerHTML = '';
      }
    },

    handleMapClick(event) {
      if (!this.isTestActive) return;

      const q = this.testQuestions[this.currentTestIndex];
      if (!q) return;

      // Calculate clicked coordinates percentage relative to SVG viewBox
      const svg = event.currentTarget;
      const rect = svg.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const clickY = event.clientY - rect.top;

      const pctX = (clickX / rect.width) * 100;
      const pctY = (clickY / rect.height) * 100;

      // Measure Euclidean distance to target
      const dx = pctX - q.coords.x;
      const dy = pctY - q.coords.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      this.evaluateTestAnswer(dist, pctX, pctY, q);
    },

    evaluateTestAnswer(distance, userX, userY, q) {
      const isBullseye = distance <= 5.5; // Within 5.5% radius
      const isClose = distance <= 11.0;   // Within 11% radius

      let markEarned = 0;
      let statusText = '';
      let feedbackBg = '';

      if (isBullseye) {
        markEarned = 1.0;
        this.currentScore += 1.0;
      statusText = `🎯 அற்புதம்! துல்லியமாகக் குறித்துள்ளீர்கள்! (+1.0 மதிப்பெண்)`;
        feedbackBg = '#065f46';
        this.playAudioChime(true);
      } else if (isClose) {
        markEarned = 0.5;
        this.currentScore += 0.5;
      statusText = `👍 மிக அருகில் உள்ளது! சரியான இடம் சிறிது இடைவெளியில் உள்ளது. (+0.5 மதிப்பெண்)`;
        feedbackBg = '#854d0e';
        this.playAudioChime(true);
      } else {
        markEarned = 0;
      statusText = `❌ இடம் மாறியுள்ளது! உண்மையான இடம் வரைபடத்தில் ஒளிர்கிறது. (0 மதிப்பெண்)`;
        feedbackBg = '#7f1d1d';
        this.playAudioChime(false);
      }

      this.testResults.push({
        question: q,
        distance,
        markEarned
      });

      // Reveal actual target pin
      this.dropPinOnMap(q, isBullseye);

      // Render Feedback
      const fBox = document.getElementById('testFeedbackBox');
      fBox.style.display = 'block';
      fBox.style.background = feedbackBg;
      fBox.style.color = '#ffffff';
      fBox.innerHTML = `
        ${statusText}<br>
        <span style="font-size:12px; opacity:0.9;">${q.teachScriptTamil}</span>
      `;

      document.getElementById('testInstructionTip').style.display = 'none';
      document.getElementById('testScoreDisplay').textContent = `${this.currentScore} / ${this.testQuestions.length}`;
      document.getElementById('btnNextTestQ').style.display = 'block';
    },

    nextTestQuestion() {
      this.currentTestIndex++;
      if (this.currentTestIndex < this.testQuestions.length) {
        this.renderTestQuestion();
      } else {
        this.finishTest();
      }
    },

    finishTest() {
      this.isTestActive = false;
      const total = this.testQuestions.length;
      const pct = Math.round((this.currentScore / total) * 100);

    let medal = '🥇 தங்கம் (Gold Medal)';
    if (pct < 50) medal = '🥉 பயிற்சி தேவை (Keep Practicing)';
    else if (pct < 80) medal = '🥈 வெள்ளி (Silver Medal)';

      document.getElementById('testQuestionPrompt').innerHTML = `
        <div style="text-align:center; padding:10px 0;">
      <div style="font-size:32px;">🏆</div>
      <div style="font-size:18px; font-weight:800; color:#38bdf8; margin:6px 0;">தேர்வு முடிவு (Test Complete)</div>
      <div style="font-size:24px; font-weight:900; color:#10b981;">${this.currentScore} / ${total} மதிப்பெண்கள் (${pct}%)</div>
          <div style="margin-top:8px; font-weight:700; color:#fbbf24;">${medal}</div>
        </div>
      `;

      document.getElementById('testInstructionTip').style.display = 'none';
      document.getElementById('testFeedbackBox').style.display = 'none';
      document.getElementById('btnNextTestQ').style.display = 'none';

      document.getElementById('testSidebarContent').insertAdjacentHTML('beforeend', `
        <button id="btnRetakeTest" class="map-primary-btn" style="margin-top:10px; width:100%;" onclick="this.remove(); MapTutorEngine.startInteractiveTest();">
        🔄 மீண்டும் தேர்வு எழுது
        </button>
      `);
    },

    // Simple Web Audio API Synthesizer (Chime for correct, Chord for wrong)
    playAudioChime(isSuccess) {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        if (isSuccess) {
          osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
          osc.frequency.setValueAtTime(880.00, ctx.currentTime + 0.12); // A5
          gain.gain.setValueAtTime(0.2, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
          osc.start();
          osc.stop(ctx.currentTime + 0.4);
        } else {
          osc.frequency.setValueAtTime(320.00, ctx.currentTime);
          osc.frequency.setValueAtTime(220.00, ctx.currentTime + 0.15);
          gain.gain.setValueAtTime(0.18, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
          osc.start();
          osc.stop(ctx.currentTime + 0.35);
        }
      } catch (err) {
        // audio fail silent
      }
    },

    // -------------------------------------------------------------------------
    // DOWNLOAD BLANK MAP (For printing & paper practice)
    // -------------------------------------------------------------------------
    downloadBlankMap() {
      const svg = document.getElementById('svgIndiaMap') || document.getElementById('svgWorldMap');
      if (!svg) return;

      // Clone SVG without markers
      const clone = svg.cloneNode(true);
      const mLayer = clone.querySelector('#dynamicMarkerLayer');
      if (mLayer) mLayer.innerHTML = '';

      const svgData = new XMLSerializer().serializeToString(clone);
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const svgUrl = URL.createObjectURL(svgBlob);

      const downloadLink = document.createElement('a');
      downloadLink.href = svgUrl;
      downloadLink.download = `Blank_Map_${this.currentMapType.toUpperCase()}_10th_Social.svg`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(svgUrl);

    alert('✅ வெற்று வரைபடம் பதிவிறக்கம் செய்யப்பட்டது! (Blank Map Downloaded). இதை பிரிண்ட் எடுத்து பென்சிலால் குறித்து பயிற்சி பெறலாம்.');
    },

    // Zoom Controls
    zoomLevel: 1.0,
    zoomMap(factor) {
      this.zoomLevel = Math.max(0.7, Math.min(3.0, this.zoomLevel * factor));
      const svg = document.querySelector('.vector-map-svg');
      if (svg) {
        svg.style.transform = `scale(${this.zoomLevel})`;
      }
    },

    resetMapZoom() {
      this.zoomLevel = 1.0;
      const svg = document.querySelector('.vector-map-svg');
      if (svg) {
        svg.style.transform = 'scale(1)';
      }
    }
  };

  window.MapTutorEngine = MapTutorEngine;
  window.openSocialMapTutor = function(unitId, locId, mode) {
    MapTutorEngine.openModal(unitId, locId, mode);
  };

})();
