// =============================================================================
// 10th Social Science - Interactive Map Tutor Engine & Curriculum Data
// Tamil Nadu State Board Class 10 Social Science Syllabus (Pure UTF-8)
// =============================================================================

(function() {
  'use strict';

  // ---------------------------------------------------------------------------
  // 1. BOARD EXAM MODEL QUESTION SET (8 Curated Standard Places)
  // ---------------------------------------------------------------------------
  const EXAM_MODEL_PLACES = [
    {
      id: "ind_eastern_ghats",
      numLabel: "(i)",
      nameTamil: "கிழக்குத் தொடர்ச்சி மலை",
      nameEnglish: "Eastern Ghats",
      category: "Mountains",
      coords: { x: 53.0, y: 65.0 },
      teachScriptTamil: "முதல் இடம்: கிழக்குத் தொடர்ச்சி மலை. இந்தியாவின் கிழக்கு கடற்கரைக்கு இணையாக ஒடிசா, ஆந்திரா வழியாக தமிழ்நாட்டின் வடபகுதி வரை தொடர்ச்சியற்ற உடைந்த குன்றுகளாக வரைய வேண்டும்.",
      teachScriptEnglish: "First place: Eastern Ghats. Mark along the eastern coast of India from Odisha through Andhra Pradesh down towards northern Tamil Nadu as discontinuous broken hills.",
      examTipTamil: "வங்காள விரிகுடா கடற்கரைக்கு இணையாக உள்ள தொடர்ச்சியற்ற மலைத்தொடர் எனக் கேட்டால் கிழக்குத் தொடர்ச்சி மலையைக் குறிக்கவும்.",
      examTipEnglish: "If asked to mark the discontinuous mountain range parallel to the Bay of Bengal coast, mark the Eastern Ghats."
    },
    {
      id: "ind_gulf_of_mannar",
      numLabel: "(ii)",
      nameTamil: "மன்னார் வளைகுடா",
      nameEnglish: "Gulf of Mannar",
      category: "Water Body / Biosphere",
      coords: { x: 45.0, y: 97.0 },
      teachScriptTamil: "இரண்டாவது இடம்: மன்னார் வளைகுடா. தமிழ்நாட்டின் தென்கிழக்கு கடற்கரைக்கும் இலங்கைக்கும் இடையே அமைந்துள்ள ஆழமற்ற கடல் பகுதியாகும். பாக் நீர்சந்திக்கு தெற்கே குறிக்கவும்.",
      teachScriptEnglish: "Second place: Gulf of Mannar. Shallow marine bay located between southeastern Tamil Nadu and northwestern Sri Lanka, south of Palk Strait.",
      examTipTamil: "இந்தியாவின் முதல் கடல்சார் உயிர்க்கோளக் காப்பகம் மன்னார் வளைகுடா ஆகும்.",
      examTipEnglish: "India's first Marine Biosphere Reserve is the Gulf of Mannar."
    },
    {
      id: "ind_sundarbans",
      numLabel: "(iii)",
      nameTamil: "சுந்தரவனக் காடுகள்",
      nameEnglish: "Sundarban",
      category: "Forest / Delta",
      coords: { x: 69.5, y: 53.5 },
      teachScriptTamil: "மூன்றாவது இடம்: சுந்தரவனக் காடுகள். மேற்கு வங்காளம் மற்றும் வங்காளதேசம் எல்லையில் அமைந்துள்ள உலகின் மிகப்பெரிய சதுப்புநில மாங்குரோவ் டெல்டா காடுகள் ஆகும்.",
      teachScriptEnglish: "Third place: Sundarbans. The world's largest tidal mangrove delta forest located at the mouth of River Ganga and Brahmaputra in West Bengal.",
      examTipTamil: "சதுப்புநிலக் காடுகள் அல்லது மாங்குரோவ் காடுகள் அல்லது ராயல் பெங்கால் புலிகள் வாழும் காடு சுந்தரவனம்.",
      examTipEnglish: "Tidal mangrove forests or the home of Royal Bengal Tigers is Sundarbans."
    },
    {
      id: "ind_thar_desert",
      numLabel: "(iv)",
      nameTamil: "பாலை மண் பகுதி",
      nameEnglish: "Desert soil region",
      category: "Soil / Physical Region",
      coords: { x: 25.5, y: 42.0 },
      teachScriptTamil: "நான்காவது இடம்: பாலை மண் பகுதி. ராஜஸ்தான் மாநிலத்தின் மேற்குப் பகுதியில் உள்ள தார் பாலைவனப் பகுதியாகும். ஆரவல்லி மலைக்கு மேற்கே உள்ள பகுதியை மஞ்சள் நிறத்திலோ அல்லது புள்ளியிட்டோ குறிக்கவும்.",
      teachScriptEnglish: "Fourth place: Desert soil region. Located in the Thar desert of western Rajasthan, west of the Aravalli range. Shade this region in western Rajasthan.",
      examTipTamil: "பாலை மண் அல்லது வறண்ட மண் அல்லது தார் பாலைவனம் எனக் கேட்டால் ராஜஸ்தானின் மேற்குப் பகுதியை குறிக்கவும்.",
      examTipEnglish: "For desert soil or arid soil or the Great Indian Desert, shade western Rajasthan."
    },
    {
      id: "ind_mumbai",
      numLabel: "(v)",
      nameTamil: "மும்பை துறைமுகம்",
      nameEnglish: "Mumbai",
      category: "Port / City",
      coords: { x: 24.8, y: 63.5 },
      teachScriptTamil: "ஐந்தாவது இடம்: மும்பை. மகாராஷ்டிரா மாநிலத்தின் தலைநகரம் மற்றும் இந்தியாவின் மிகப்பெரிய இயற்கை துறைமுக நகரம். மேற்கு கடற்கரையில் அமைந்துள்ள முக்கிய தீவு நகரத்தைக் குறிக்கவும்.",
      teachScriptEnglish: "Fifth place: Mumbai. Capital of Maharashtra and largest natural deepwater port on India's western coast.",
      examTipTamil: "இந்தியாவின் நுழைவு வாயில் அல்லது நிதித் தலைநகரம் அல்லது மேற்கு கடற்கரை துறைமுகம் மும்பை.",
      examTipEnglish: "Gateway of India, financial capital, or major western port is Mumbai."
    },
    {
      id: "ind_air_chennai_kolkata",
      numLabel: "(vi)",
      nameTamil: "சென்னை - கொல்கத்தா வான்வழிப் பாதை",
      nameEnglish: "Chennai to Kolkata Air route",
      category: "Transport / Air Route",
      coords: { x: 58.5, y: 67.0 },
      teachScriptTamil: "ஆறாவது இடம்: சென்னை முதல் கொல்கத்தா வரையிலான வான்வழிப் பாதை. தமிழ்நாட்டின் சென்னையையும் மேற்கு வங்காளத்தின் கொல்கத்தாவையும் இணைக்கும் வளைந்த வான்வழிப் பாதையை கோடாக வரைந்து நடுவில் விமானக் குறியீடு இட வேண்டும்.",
      teachScriptEnglish: "Sixth place: Chennai to Kolkata Air Route. Connect Chennai in Tamil Nadu to Kolkata in West Bengal with a coastal flight curve and an airplane symbol.",
      examTipTamil: "கிழக்கு கடற்கரை வான்வழிப் பாதை அல்லது சென்னை - கொல்கத்தா விமான வழி எனக் கேட்கப்படும்.",
      examTipEnglish: "Major eastern coastal flight corridor connecting Chennai and Kolkata."
    },
    {
      id: "ind_goa",
      numLabel: "(vii)",
      nameTamil: "கோவா",
      nameEnglish: "Goa",
      category: "State / Coast",
      coords: { x: 28.5, y: 78.0 },
      teachScriptTamil: "ஏழாவது இடம்: கோவா. இந்தியாவின் மிகச்சிறிய கடற்கரை மாநிலமாகும். மகாராஷ்டிரா மற்றும் கர்நாடகாவின் எல்லைப் பகுதியில் உள்ள கொங்கண் கடற்கரையில் கோவாவை குறிக்கவும்.",
      teachScriptEnglish: "Seventh place: Goa. India's smallest state located on the Konkan coast between Maharashtra and Karnataka, home to Marmagao Port.",
      examTipTamil: "இந்தியாவின் மிகச்சிறிய மாநிலம் அல்லது மர்மகோவா துறைமுகம் உள்ள மாநிலம் கோவா.",
      examTipEnglish: "Smallest state in India or Marmagao port state is Goa."
    },
    {
      id: "ind_river_ganga",
      numLabel: "(viii)",
      nameTamil: "கங்கை ஆறு",
      nameEnglish: "River Ganga",
      category: "River",
      coords: { x: 54.0, y: 36.0 },
      teachScriptTamil: "எட்டாவது இடம்: கங்கை ஆறு. இமயமலையின் கங்கோத்ரியில் தொடங்கி உத்தரகாண்ட், உத்தரபிரதேசம், பீகார், மேற்கு வங்காளம் வழியாக வங்காள விரிகுடாவில் கலக்கும் வரை நீல நிற கோடாக வரைய வேண்டும்.",
      teachScriptEnglish: "Eighth place: River Ganga. India's longest river flowing 2,525 km from Gangotri in the Himalayas through UP, Bihar, and West Bengal into the Bay of Bengal.",
      examTipTamil: "இந்தியாவின் மிக நீளமான புனித ஆறு அல்லது வற்றாத இமயமலை ஆறு கங்கை.",
      examTipEnglish: "India's longest perennial river flowing from Himalayas to Bay of Bengal is River Ganga."
    }
  ];

  window.EXAM_MODEL_PLACES = EXAM_MODEL_PLACES;

  // ---------------------------------------------------------------------------
  // 2. VECTOR SVG OUTLINE MAP OF INDIA WITH STATE BOUNDARIES
  // ---------------------------------------------------------------------------
  function getIndiaMapSvgHtml(isEm) {
    const statesHtml = isEm ? `
      <text x="420" y="930">Tamil Nadu</text>
      <text x="345" y="940">Kerala</text>
      <text x="350" y="800">Karnataka</text>
      <text x="268" y="760" fill="#f43f5e" font-weight="900">Goa</text>
      <text x="475" y="760">Andhra Pradesh</text>
      <text x="445" y="690">Telangana</text>
      <text x="590" y="560">Odisha</text>
      <text x="600" y="465">Jharkhand</text>
      <text x="660" y="440">West Bengal</text>
      <text x="560" y="380">Bihar</text>
      <text x="450" y="350">Uttar Pradesh</text>
      <text x="415" y="540">Madhya Pradesh</text>
      <text x="330" y="650">Maharashtra</text>
      <text x="200" y="540">Gujarat</text>
      <text x="260" y="400">Rajasthan</text>
      <text x="310" y="280">Punjab</text>
      <text x="375" y="140">J&amp;K / Ladakh</text>
    ` : `
      <text x="420" y="930">தமிழ்நாடு</text>
      <text x="345" y="940">கேரளா</text>
      <text x="350" y="800">கர்நாடகா</text>
      <text x="268" y="760" fill="#f43f5e" font-weight="900">கோவா</text>
      <text x="475" y="760">ஆந்திரா</text>
      <text x="445" y="690">தெலங்கானா</text>
      <text x="590" y="560">ஒடிசா</text>
      <text x="600" y="465">ஜார்க்கண்ட்</text>
      <text x="660" y="440">மேற்கு வங்காளம்</text>
      <text x="560" y="380">பீகார்</text>
      <text x="450" y="350">உத்தர பிரதேசம்</text>
      <text x="415" y="540">மத்திய பிரதேசம்</text>
      <text x="330" y="650">மகாராஷ்டிரா</text>
      <text x="200" y="540">குஜராத்</text>
      <text x="260" y="400">ராஜஸ்தான்</text>
      <text x="310" y="280">பஞ்சாப்</text>
      <text x="375" y="140">காஷ்மீர் / லடாக்</text>
    `;

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
      <svg id="tutor_svgIndiaMap" viewBox="0 0 1000 1150" class="vector-map-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="mapGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0a192f" />
            <stop offset="100%" stop-color="#030c1b" />
          </linearGradient>
          <linearGradient id="landGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1e293b" />
            <stop offset="100%" stop-color="#0f172a" />
          </linearGradient>
        </defs>

        <!-- Ocean Background -->
        <rect width="1000" height="1150" fill="url(#oceanGrad)" />

        <!-- Compass Rose -->
        <g transform="translate(870, 110)" opacity="0.8">
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
        ${seaLabels}

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

        <!-- STATE BOUNDARIES (Subtle classroom atlas lines) -->
        <g id="stateBoundaries" fill="none" stroke="#64748b" stroke-width="1.3" stroke-dasharray="3,3" opacity="0.75">
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
          <path d="M 265 620 Q 235 600 270 600" />
          <path d="M 220 500 Q 260 490 280 500" />
          <path d="M 280 500 Q 350 460 380 410" />
          <path d="M 290 320 Q 330 330 360 350" />
          <path d="M 540 380 Q 535 440 550 480" />
          <path d="M 380 410 Q 450 440 535 440" />
          <path d="M 360 260 Q 430 250 500 285" />
        </g>

        <!-- STATE LABELS -->
        <g id="stateLabels" fill="#94a3b8" font-size="12" font-weight="700" opacity="0.8" pointer-events="none">
          ${statesHtml}
        </g>

        <!-- SRI LANKA OUTLINE -->
        <path id="sriLanka" fill="url(#landGrad)" stroke="#38bdf8" stroke-width="2"
          d="M 470 940 C 490 925, 515 940, 520 965 C 525 990, 510 1020, 490 1040 C 475 1050, 460 1045, 455 1025 C 450 1000, 455 960, 470 940 Z" />
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
          <text x="830" y="790" fill="#38bdf8" font-size="11" font-weight="800">Andaman &amp; Nicobar</text>
        </g>

        <!-- DYNAMIC TUTOR FEATURE LAYER (Clean feature drawing directly on map) -->
        <g id="tutorFeatureLayer"></g>
      </svg>
    `;
  }

  // ---------------------------------------------------------------------------
  // 3. MAP TUTOR CONTROLLER (Classroom Voice Teacher & Distraction-Free Map)
  // ---------------------------------------------------------------------------
  const MapTutorEngine = {
    currentPlaceIndex: 0,
    currentLang: "ta", // 'ta' for Tamil Medium, 'en' for English Medium
    isAutoPlaying: false,
    autoPlayTimer: null,
    isVoicePlaying: false,
    zoomLevel: 1.0,
    panX: 0,
    panY: 0,

    init() {
      if (document.getElementById('socialMapModal')) return;

      // Auto detect language from active subject or body
      try {
        if (window.currentSubject && (window.currentSubject.id.endsWith('_em') || window.currentSubject.id === 'english')) {
          this.currentLang = 'en';
        } else if (document.body && document.body.innerText.includes('English Medium') && !document.body.innerText.includes('தமிழ் வழி')) {
          this.currentLang = 'en';
        }
      } catch (e) {
        this.currentLang = 'ta';
      }

      const modalHtml = `
        <div id="socialMapModal" class="social-map-modal-overlay" style="display:none;" role="dialog" aria-modal="true">
          
          <!-- FIXED, PROMINENT, UNMISSABLE EXIT BUTTON AT TOP RIGHT -->
          <button type="button" class="tutor-close-fixed-btn" onclick="MapTutorEngine.closeModal()" title="வரைபடத்தை மூடு (Exit Map)">
            ❌ <span id="fixedExitLabel">வெளியேறு (Exit)</span>
          </button>

          <div class="social-map-modal-container full-stage">
            
            <!-- Top Minimal Classroom Control Bar (No clutter!) -->
            <div class="tutor-top-bar">
              <div class="tutor-header-left">
                <span style="font-size:22px; flex-shrink:0;">🗺️</span>
                <div class="exam-title-badge">
                  <span id="examQnHeading" style="font-weight:800; font-size:13.5px; color:#38bdf8;">
                    அரசு பொதுத்தேர்வு மாதிரி வினா (8 இடங்கள்)
                  </span>
                </div>

                <div class="current-place-chip">
                  <span id="tutorStepNumBadge" class="step-num-badge">(i) வினா 1/8</span>
                  <span id="tutorCurrentPlaceTitle" class="current-place-name">கிழக்குத் தொடர்ச்சி மலை</span>
                </div>
              </div>

              <!-- Action Controls -->
              <div class="tutor-header-right">
                <button type="button" class="tutor-btn" onclick="MapTutorEngine.showQuestionScreen()" title="மாதிரி வினாத்தாள் (Question Paper)">
                  📝 <span class="btn-lbl" id="lblQuestionBtn">மாதிரி வினா</span>
                </button>
                <button type="button" class="tutor-btn" onclick="MapTutorEngine.prevPlace()" title="முந்தைய இடம் (Rewind)">
                  ⏪ <span class="btn-lbl" id="lblPrev">முந்தையது (Rewind)</span>
                </button>
                <button type="button" id="btnAutoPlay" class="tutor-btn primary" onclick="MapTutorEngine.toggleAutoPlay()" title="தானாக அடுத்தடுத்த இடங்களை குறி (Auto Play)">
                  ▶️ <span id="lblAutoPlay">தானாக இயக்கு</span>
                </button>
                <button type="button" class="tutor-btn primary" onclick="MapTutorEngine.nextPlace()" title="அடுத்தது">
                  <span class="btn-lbl" id="lblNext">அடுத்தது</span> ⏭️
                </button>
                <button type="button" class="tutor-btn" onclick="MapTutorEngine.replayVoice()" title="குரல் வழிகாட்டலை மீண்டும் சொல்">
                  🔄 <span class="btn-lbl" id="lblReplay">மீண்டும் சொல்</span>
                </button>
                <button type="button" class="tutor-btn" onclick="MapTutorEngine.togglePlacesDrawer()" title="8 இடங்களின் பட்டியல்">
                  📋 <span class="btn-lbl" id="lblPlacesDrawer">8 இடங்கள்</span>
                </button>
                <button type="button" id="btnLangToggle" class="tutor-btn" onclick="MapTutorEngine.toggleLanguage()" title="மொழி மாற்று (Tamil / English)">
                  🌐 <span id="lblLang">English</span>
                </button>
                <button type="button" class="tutor-btn" onclick="MapTutorEngine.handleDownloadClick()" title="வரைபடத்தைப் பதிவிறக்கு (Download Map)">
                  📥 <span class="btn-lbl" id="lblDownload">வரைபடம்</span>
                </button>
              </div>
            </div>

            <!-- Full Stage Map Viewport -->
            <div class="map-stage-viewport" id="mapStageViewport">
              <div id="mapSvgStageWrapper" class="map-stage-wrapper"></div>

              <!-- Question First Screen Overlay -->
              <div id="mapQuestionOverlay" class="map-question-overlay" style="display:none;"></div>

              <!-- Full Completed Map Celebration & Promo Banner -->
              <div id="mapCompletionBanner" class="map-completion-banner" style="display:none;"></div>

              <!-- Floating Zoom & Pan Controls -->
              <div class="map-floating-zoom">
                <button type="button" onclick="MapTutorEngine.zoom(1.25)" title="பெரிதாக்கு (Zoom In)">➕</button>
                <button type="button" onclick="MapTutorEngine.zoom(0.8)" title="சிறிதாக்கு (Zoom Out)">➖</button>
                <button type="button" onclick="MapTutorEngine.resetZoom()" title="மீட்டமை (Reset View)">🎯</button>
              </div>

              <!-- Sleek Bottom Audio Teacher Capsule -->
              <div class="teacher-voice-capsule" id="teacherVoiceCapsule">
                <span class="pulsing-voice-dot"></span>
                <div class="voice-capsule-text" id="voiceCapsuleText">
                  ஆசிரியர் குரல் வழிகாட்டல் ஒலிக்கிறது...
                </div>
                <button type="button" class="capsule-icon-btn" onclick="MapTutorEngine.replayVoice()" title="மீண்டும் சொல்">🔄</button>
                <button type="button" class="capsule-icon-btn" onclick="MapTutorEngine.stopVoice()" title="ஒலியை நிறுத்து">⏹️</button>
                <button type="button" class="capsule-exit-btn" onclick="MapTutorEngine.closeModal()" title="மூடு">❌</button>
              </div>

              <!-- Slide-in Drawer for Question Places List -->
              <div id="placesDrawer" class="places-slide-drawer" style="display:none;">
                <div class="drawer-header">
                  <strong id="drawerHeading">📋 மாதிரி வினாவின் 8 இடங்கள்</strong>
                  <button type="button" class="drawer-close-btn" onclick="MapTutorEngine.togglePlacesDrawer()">&times;</button>
                </div>
                <div id="drawerListItems" class="drawer-list-items"></div>
              </div>
            </div>

          </div>
        </div>
      `;

      document.body.insertAdjacentHTML('beforeend', modalHtml);

      // Listen for Escape key to close modal
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.closeModal();
        }
      });

      this.injectStyles();
    },

    injectStyles() {
      if (document.getElementById('socialMapStyles')) return;
      const css = `
        .social-map-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999999;
          background: rgba(3, 7, 18, 0.94);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .social-map-modal-container.full-stage {
          background: #060d19;
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          position: relative;
        }
        
        /* Fixed, Prominent Red Close Button */
        .tutor-close-fixed-btn {
          position: fixed;
          top: 10px;
          right: 16px;
          z-index: 999999999;
          background: #dc2626;
          color: #ffffff;
          border: 2px solid #fecaca;
          font-size: 13.5px;
          font-weight: 900;
          padding: 8px 16px;
          border-radius: 24px;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(220, 38, 38, 0.65);
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s;
        }
        .tutor-close-fixed-btn:hover {
          background: #b91c1c;
          transform: scale(1.05);
        }

        /* Top Minimal Control Bar */
        .tutor-top-bar {
          height: 56px;
          background: #091424;
          border-bottom: 1.5px solid #1e3a5f;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 160px 0 16px; /* Right padding preserves room for fixed exit button */
          gap: 12px;
          flex-shrink: 0;
          z-index: 30;
        }
        .tutor-header-left {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
          flex: 1;
        }
        .exam-title-badge {
          background: #142236;
          border: 1px solid #2d4566;
          padding: 5px 12px;
          border-radius: 8px;
          white-space: nowrap;
        }
        .current-place-chip {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(30, 41, 59, 0.9);
          border: 1px solid #38bdf8;
          padding: 5px 14px;
          border-radius: 20px;
          white-space: nowrap;
          overflow: hidden;
        }
        .step-num-badge {
          background: #0284c7;
          color: #ffffff;
          font-size: 12px;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 12px;
        }
        .current-place-name {
          font-size: 15.5px;
          font-weight: 900;
          color: #fbbf24;
          letter-spacing: 0.5px;
        }
        .tutor-header-right {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }
        .tutor-btn {
          background: #132238;
          border: 1px solid #2d4566;
          color: #38bdf8;
          font-weight: 700;
          font-size: 12px;
          padding: 6px 10px;
          border-radius: 7px;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 5px;
          white-space: nowrap;
        }
        .tutor-btn:hover {
          background: #1e3a5f;
          border-color: #38bdf8;
        }
        .tutor-btn.primary {
          background: linear-gradient(135deg, #0284c7, #2563eb);
          color: #ffffff;
          border: none;
          box-shadow: 0 3px 10px rgba(2, 132, 199, 0.4);
        }

        /* Full Map Viewport */
        .map-stage-viewport {
          flex: 1;
          width: 100%;
          height: 100%;
          position: relative;
          background: #050c18;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .map-stage-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: grab;
          touch-action: none;
          user-select: none;
          position: relative;
        }
        .vector-map-svg {
          width: 100%;
          height: 100%;
          max-height: 94vh;
          user-select: none;
          transition: transform 0.08s ease-out;
        }

        /* Question First Overlay Styles */
        .map-question-overlay {
          position: absolute;
          inset: 0;
          z-index: 25;
          background: rgba(3, 7, 18, 0.88);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          overflow-y: auto;
          animation: fadeInQuestion 0.25s ease-out;
        }
        @keyframes fadeInQuestion {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }
        .map-question-card {
          background: linear-gradient(145deg, #0b192c, #071322);
          border: 2px solid #38bdf8;
          border-radius: 20px;
          max-width: 780px;
          width: 100%;
          padding: 24px 28px;
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.7), 0 0 32px rgba(56, 189, 248, 0.25);
          color: #f8fafc;
        }
        .map-question-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(56, 189, 248, 0.15);
          color: #38bdf8;
          border: 1px solid rgba(56, 189, 248, 0.4);
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.5px;
        }
        .map-question-title {
          font-size: 22px;
          font-weight: 900;
          color: #ffffff;
          margin: 12px 0 6px 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .map-question-desc {
          font-size: 14px;
          color: #94a3b8;
          margin-bottom: 18px;
          line-height: 1.5;
        }
        .map-places-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 10px;
          margin-bottom: 22px;
        }
        .map-place-pill {
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid #1e3a5f;
          border-radius: 10px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.2s;
          cursor: pointer;
        }
        .map-place-pill:hover {
          border-color: #38bdf8;
          background: rgba(30, 58, 95, 0.5);
          transform: translateY(-1px);
        }
        .map-place-pill-num {
          background: #0284c7;
          color: #ffffff;
          font-size: 12px;
          font-weight: 800;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .map-place-pill-name {
          font-size: 14px;
          font-weight: 700;
          color: #f1f5f9;
        }
        .btn-start-marking {
          background: linear-gradient(135deg, #0284c7, #0369a1);
          color: #ffffff;
          border: 2px solid #38bdf8;
          font-size: 16px;
          font-weight: 900;
          padding: 13px 28px;
          border-radius: 14px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 8px 24px rgba(2, 132, 199, 0.45);
          transition: all 0.2s;
          width: 100%;
          justify-content: center;
        }
        .btn-start-marking:hover {
          background: linear-gradient(135deg, #0369a1, #075985);
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(2, 132, 199, 0.6);
        }

        /* Completion Banner Styles */
        .map-completion-banner {
          position: absolute;
          bottom: 58px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 28;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.96), rgba(6, 13, 25, 0.98));
          border: 2px solid #f59e0b;
          border-radius: 16px;
          padding: 12px 20px;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.85), 0 0 24px rgba(245, 158, 11, 0.35);
          max-width: 94vw;
          width: 700px;
          text-align: center;
          animation: slideUpBanner 0.35s ease-out;
        }
        @keyframes slideUpBanner {
          from { opacity: 0; transform: translate(-50%, 20px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        .completion-gold-title {
          font-size: 16.5px;
          font-weight: 900;
          color: #fbbf24;
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .completion-gold-sub {
          font-size: 13.5px;
          color: #f1f5f9;
          font-weight: 700;
          line-height: 1.45;
        }
        .completion-promo-box {
          margin-top: 10px;
          background: rgba(2, 132, 199, 0.18);
          border: 1px dashed #38bdf8;
          border-radius: 10px;
          padding: 8px 12px;
          font-size: 13px;
          color: #7dd3fc;
          font-weight: 800;
          line-height: 1.45;
        }

        /* Floating Zoom Controls */
        .map-floating-zoom {
          position: absolute;
          top: 16px;
          right: 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          z-index: 20;
        }
        .map-floating-zoom button {
          width: 36px;
          height: 36px;
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid #334155;
          color: #38bdf8;
          font-size: 16px;
          font-weight: 800;
          border-radius: 8px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.5);
        }
        .map-floating-zoom button:hover {
          background: #1e3a5f;
          color: #ffffff;
        }

        /* Teacher Voice Status Capsule (Minimalist Floating Bottom Bar) */
        .teacher-voice-capsule {
          position: absolute;
          bottom: 18px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(10, 20, 36, 0.94);
          border: 1.5px solid #0284c7;
          box-shadow: 0 10px 30px rgba(0,0,0,0.7), 0 0 20px rgba(2, 132, 199, 0.25);
          padding: 8px 16px;
          border-radius: 30px;
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 20;
          backdrop-filter: blur(8px);
          max-width: 90vw;
        }
        .pulsing-voice-dot {
          width: 10px;
          height: 10px;
          background: #ef4444;
          border-radius: 50%;
          animation: voicePulse 1.2s infinite;
          flex-shrink: 0;
        }
        @keyframes voicePulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.6); opacity: 0.4; }
        }
        .voice-capsule-text {
          font-size: 13px;
          font-weight: 700;
          color: #f1f5f9;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .capsule-icon-btn {
          background: #1e293b;
          border: 1px solid #334155;
          color: #38bdf8;
          font-size: 13px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .capsule-exit-btn {
          background: #dc2626;
          border: none;
          color: #fff;
          font-size: 12px;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Slide-in Places Drawer */
        .places-slide-drawer {
          position: absolute;
          top: 0;
          right: 0;
          width: 320px;
          height: 100%;
          background: rgba(9, 18, 32, 0.96);
          border-left: 1.5px solid #1e3a5f;
          box-shadow: -10px 0 30px rgba(0,0,0,0.7);
          z-index: 25;
          display: flex;
          flex-direction: column;
          backdrop-filter: blur(10px);
        }
        .drawer-header {
          padding: 14px 16px;
          border-bottom: 1px solid #1e3a5f;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 14px;
          color: #ffffff;
        }
        .drawer-close-btn {
          background: none;
          border: none;
          color: #94a3b8;
          font-size: 24px;
          cursor: pointer;
        }
        .drawer-list-items {
          flex: 1;
          overflow-y: auto;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .drawer-item {
          background: #132238;
          border: 1px solid #243b59;
          border-radius: 8px;
          padding: 10px 12px;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .drawer-item:hover {
          background: #1e3a5f;
          border-color: #38bdf8;
        }
        .drawer-item.active {
          background: linear-gradient(135deg, #0284c7, #2563eb);
          border-color: #38bdf8;
          color: #ffffff;
        }

        /* Feature Ripple Animation */
        .pin-ripple {
          animation: rippleRing 1.6s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }
        @keyframes rippleRing {
          0% { r: 6; opacity: 1; stroke-width: 3; }
          100% { r: 35; opacity: 0; stroke-width: 0.5; }
        }

        @media (max-width: 860px) {
          .tutor-top-bar {
            height: auto;
            flex-direction: column;
            padding: 8px 10px;
            gap: 6px;
          }
          .tutor-header-left, .tutor-header-right {
            width: 100%;
            justify-content: space-between;
            overflow-x: auto;
          }
          .btn-lbl { display: none; }
          .tutor-close-fixed-btn {
            top: 6px;
            right: 8px;
            padding: 5px 12px;
            font-size: 12px;
          }
          .teacher-voice-capsule {
            bottom: 8px;
            padding: 6px 12px;
            max-width: 95vw;
          }
        }
      `;
      const st = document.createElement('style');
      st.id = 'socialMapStyles';
      st.innerHTML = css;
      document.head.appendChild(st);
    },

    // -------------------------------------------------------------------------
    // OPEN / CLOSE CONTROLLER
    // -------------------------------------------------------------------------
    openModal(targetUnit = 'all') {
      this.init();
      const modal = document.getElementById('socialMapModal');
      modal.style.display = 'flex';

      this.currentPlaceIndex = 0;
      this.renderStage();
      this.updateLanguageTexts();

      // Show Question Screen first as requested by User!
      this.showQuestionScreen();
    },

    closeModal() {
      this.stopVoice();
      const modal = document.getElementById('socialMapModal');
      if (modal) modal.style.display = 'none';
    },

    renderStage() {
      const isEm = this.currentLang === 'en';
      const wrapper = document.getElementById('mapSvgStageWrapper');
      wrapper.innerHTML = getIndiaMapSvgHtml(isEm);
      this.resetZoom();
      this.bindPan();
      this.renderDrawerList();
    },

    // -------------------------------------------------------------------------
    // 1. QUESTION FIRST SCREEN (Places to Mark + Audio: Let us mark one by one)
    // -------------------------------------------------------------------------
    showQuestionScreen() {
      this.currentStage = 'question';
      this.stopVoice();

      const overlay = document.getElementById('mapQuestionOverlay');
      const compBanner = document.getElementById('mapCompletionBanner');
      if (compBanner) compBanner.style.display = 'none';

      // Clear map features to show pristine blank outline map
      const svg = document.getElementById('tutor_svgIndiaMap');
      if (svg) {
        const layer = svg.querySelector('#tutorFeatureLayer');
        if (layer) layer.innerHTML = '';
      }

      const isEm = this.currentLang === 'en';

      // Update Top Bar
      const stepBadge = document.getElementById('tutorStepNumBadge');
      if (stepBadge) stepBadge.textContent = isEm ? '📋 Model Question' : '📋 மாதிரி வினா';

      const titleEl = document.getElementById('tutorCurrentPlaceTitle');
      if (titleEl) {
        titleEl.textContent = isEm ? '8 Locations to Mark' : 'குறிக்க வேண்டிய 8 இடங்கள்';
      }

      const lblPrev = document.getElementById('lblPrev');
      if (lblPrev) lblPrev.textContent = isEm ? 'Rewind / Prev' : 'முந்தையது (Rewind)';

      const lblNext = document.getElementById('lblNext');
      if (lblNext) lblNext.textContent = isEm ? 'Start Marking ▶️' : 'குறிக்கத் தொடங்கு ▶️';

      // Render Question Overlay
      if (overlay) {
        overlay.innerHTML = `
          <div class="map-question-card">
            <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:8px;">
              <span class="map-question-badge">
                ${isEm ? '🎯 Tamil Nadu State Board Class 10 Social Science' : '🎯 தமிழ்நாடு அரசு 10-ஆம் வகுப்பு சமூக அறிவியல்'}
              </span>
              <span style="font-size:12px; font-weight:800; color:#38bdf8; background:rgba(56,189,248,0.12); padding:4px 10px; border-radius:8px;">
                ${isEm ? 'Exam Model • 8 Marks' : 'பொதுத்தேர்வு மாதிரி • 8 மதிப்பெண்கள்'}
              </span>
            </div>
            
            <h2 class="map-question-title">
              <span>📝</span>
              <span>${isEm ? 'India Outline Map - Question (8 Places)' : 'இந்திய வரைபடம் - மாதிரி வினா (8 இடங்கள்)'}</span>
            </h2>

            <div class="map-question-desc">
              ${isEm 
                ? '<strong>Question Prompt:</strong> Mark the following 8 locations accurately on the given outline map of India:'
                : '<strong>வினா:</strong> வழங்கப்பட்டுள்ள இந்திய வரைபடத்தில் கீழ்க்கண்ட 8 இடங்களை வரிசையாகக் குறித்துப் பெயரிடுக:'}
            </div>

            <div class="map-places-grid">
              ${EXAM_MODEL_PLACES.map((p, idx) => `
                <div class="map-place-pill" onclick="MapTutorEngine.teachPlace(${idx})">
                  <div class="map-place-pill-num">${idx + 1}</div>
                  <div class="map-place-pill-name">${isEm ? p.nameEnglish : p.nameTamil}</div>
                  <span style="margin-left:auto; font-size:12px; color:#38bdf8;">📍</span>
                </div>
              `).join('')}
            </div>

            <button type="button" class="btn-start-marking" onclick="MapTutorEngine.startMarkingOneByOne()">
              <span>🎯</span>
              <span>${isEm ? 'Let us mark one by one ▶️' : 'வாருங்கள், ஒவ்வொன்றாகக் குறிப்போம்! ▶️'}</span>
            </button>
          </div>
        `;
        overlay.style.display = 'flex';
      }

      // Voice Narration: Question Announcement
      this.speakQuestionVoice();
    },

    startMarkingOneByOne() {
      this.isAutoPlaying = true;
      this.updateAutoPlayButtonState();
      this.teachPlace(0, false);
    },

    speakQuestionVoice() {
      this.stopVoice();
      const isEm = this.currentLang === 'en';
      const capText = document.getElementById('voiceCapsuleText');

      let speechText = '';
      if (isEm) {
        speechText = "Students, here is the Board Exam Model Map Question. Places to mark: "
          + "1, Eastern Ghats. 2, Gulf of Mannar. 3, Sundarbans. 4, Desert soil region. 5, Mumbai. 6, Chennai to Kolkata Air route. 7, Goa. 8, River Ganga. "
          + "Let us mark the places one by one!";
        if (capText) {
          capText.textContent = "Teacher: Board Exam Model Map Question (8 Places) - Let us mark one by one!";
        }
      } else {
        speechText = "மாணவர்களே! அரசு பொதுத்தேர்வு மாதிரி வரைபட வினா. குறிக்க வேண்டிய எட்டு இடங்கள்: "
          + "ஒன்று, கிழக்குத் தொடர்ச்சி மலை. இரண்டு, மன்னார் வளைகுடா. மூன்று, சுந்தரவனக் காடுகள். நான்கு, பாலை மண் பகுதி. ஐந்து, மும்பை துறைமுகம். ஆறு, சென்னை முதல் கொல்கத்தா வான்வழிப் பாதை. ஏழு, கோவா. எட்டு, கங்கை ஆறு. "
          + "வாருங்கள்! இந்த இடங்களை வரைபடத்தில் ஒவ்வொன்றாக எப்படிக் குறிப்பது என்று பார்ப்போம்!";
        if (capText) {
          capText.textContent = "ஆசிரியர்: மாதிரி வரைபட வினா (8 இடங்கள்) - வாருங்கள், ஒவ்வொன்றாகக் குறிப்போம்!";
        }
      }

      this.executeTutorSpeech(speechText, () => {
        if (this.isAutoPlaying) {
          this.advanceAutoPlay();
        }
      });
    },

    // -------------------------------------------------------------------------
    // 2. TEACH PLACE ONE BY ONE (Full Visual Illustration on Map + Teacher Voice)
    // -------------------------------------------------------------------------
    teachPlace(index, isGreeting = false) {
      this.currentStage = 'teaching';
      const overlay = document.getElementById('mapQuestionOverlay');
      if (overlay) overlay.style.display = 'none';
      const compBanner = document.getElementById('mapCompletionBanner');
      if (compBanner) compBanner.style.display = 'none';

      if (index < 0) index = 0;
      if (index >= EXAM_MODEL_PLACES.length) {
        this.showFullCompletedMap();
        return;
      }
      this.currentPlaceIndex = index;

      const place = EXAM_MODEL_PLACES[index];
      const isEm = this.currentLang === 'en';
      const total = EXAM_MODEL_PLACES.length;

      // Update Top Bar
      const stepBadge = document.getElementById('tutorStepNumBadge');
      if (stepBadge) stepBadge.textContent = isEm ? `(${index + 1}) Qn ${index + 1}/${total}` : `(${index + 1}) வினா ${index + 1}/${total}`;

      const titleEl = document.getElementById('tutorCurrentPlaceTitle');
      if (titleEl) {
        titleEl.textContent = isEm ? place.nameEnglish : place.nameTamil;
      }

      const lblPrev = document.getElementById('lblPrev');
      if (lblPrev) lblPrev.textContent = (index === 0) ? (isEm ? 'Question' : 'மாதிரி வினா') : (isEm ? 'Rewind / Prev' : 'முந்தையது (Rewind)');

      const lblNext = document.getElementById('lblNext');
      if (lblNext) lblNext.textContent = (index === total - 1) ? (isEm ? 'Full Map 🏁' : 'முழு வரைபடம் 🏁') : (isEm ? 'Next' : 'அடுத்தது');

      // Draw Feature Directly on Map
      this.renderFeatureOnMap(place);

      // Voice Narration
      this.speakTeacherPlace(place, isGreeting);

      // Update Drawer Active Item
      document.querySelectorAll('.drawer-item').forEach((el, idx) => {
        el.classList.toggle('active', idx === index);
      });
    },

    nextPlace() {
      if (this.currentStage === 'question') {
        this.teachPlace(0, false);
      } else if (this.currentStage === 'teaching') {
        if (this.currentPlaceIndex < EXAM_MODEL_PLACES.length - 1) {
          this.teachPlace(this.currentPlaceIndex + 1, false);
        } else {
          this.showFullCompletedMap();
        }
      } else if (this.currentStage === 'completed') {
        this.teachPlace(0, false);
      }
    },

    prevPlace() {
      // If user rewinds, pause auto-timer so they can inspect/study without being rushed
      if (this.autoPlayTimer) clearTimeout(this.autoPlayTimer);
      this.isAutoPlaying = false;
      this.updateAutoPlayButtonState();

      if (this.currentStage === 'completed') {
        this.teachPlace(EXAM_MODEL_PLACES.length - 1, false);
      } else if (this.currentStage === 'teaching') {
        if (this.currentPlaceIndex > 0) {
          this.teachPlace(this.currentPlaceIndex - 1, false);
        } else {
          this.showQuestionScreen();
        }
      } else if (this.currentStage === 'question') {
        // already on question screen
      }
    },

    // -------------------------------------------------------------------------
    // 3. SVG FEATURE BUILDER (Individual Feature SVG markup)
    // -------------------------------------------------------------------------
    getFeatureSvg(placeId, isEm) {
      const place = EXAM_MODEL_PLACES.find(p => p.id === placeId);
      if (!place) return '';
      const labelText = isEm ? place.nameEnglish.toUpperCase() : place.nameTamil;

      // 1. EASTERN GHATS
      // 1. EASTERN GHATS (Narrow, discontinuous mountain chain along Odisha, AP, northern TN)
      if (placeId === 'ind_eastern_ghats') {
        return `
          <g id="feature_eastern_ghats">
            <!-- Discontinuous narrow mountain ridge lines following the eastern range -->
            <!-- Section 1: Odisha -->
            <path d="M 618 525 Q 600 555 580 585" fill="none" stroke="#ef4444" stroke-width="3" stroke-linecap="round" />
            <polygon points="618,515 612,525 624,525" fill="#ef4444" stroke="#ffffff" stroke-width="0.8" />
            <polygon points="600,545 594,555 606,555" fill="#ef4444" stroke="#ffffff" stroke-width="0.8" />
            <polygon points="580,575 574,585 586,585" fill="#ef4444" stroke="#ffffff" stroke-width="0.8" />

            <!-- Gap for Godavari/Krishna -->

            <!-- Section 2: Andhra Pradesh (Nallamala / Velikonda ranges) -->
            <path d="M 565 625 Q 535 675 510 735" fill="none" stroke="#ef4444" stroke-width="3" stroke-linecap="round" />
            <polygon points="562,618 556,628 568,628" fill="#ef4444" stroke="#ffffff" stroke-width="0.8" />
            <polygon points="545,650 539,660 551,660" fill="#ef4444" stroke="#ffffff" stroke-width="0.8" />
            <polygon points="528,685 522,695 534,695" fill="#ef4444" stroke="#ffffff" stroke-width="0.8" />
            <polygon points="510,722 504,732 516,732" fill="#ef4444" stroke="#ffffff" stroke-width="0.8" />

            <!-- Gap for Pennar -->

            <!-- Section 3: Southern AP & Northern Tamil Nadu (Javadi, Shevaroy hills) -->
            <path d="M 498 755 Q 475 795 448 835" fill="none" stroke="#ef4444" stroke-width="3" stroke-linecap="round" />
            <polygon points="495,748 489,758 501,758" fill="#ef4444" stroke="#ffffff" stroke-width="0.8" />
            <polygon points="475,785 469,795 481,795" fill="#ef4444" stroke="#ffffff" stroke-width="0.8" />
            <polygon points="450,822 444,832 456,832" fill="#ef4444" stroke="#ffffff" stroke-width="0.8" />

            <!-- Focal ripple pin in Andhra Pradesh -->
            <circle cx="530" cy="675" r="14" fill="#ef4444" stroke="#ffffff" stroke-width="2" class="pin-ripple" />
            <circle cx="530" cy="675" r="7" fill="#ef4444" />

            <!-- Clear Label positioned away from air route -->
            <text x="560" y="725" fill="#ef4444" font-size="22" font-weight="900" letter-spacing="1" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.95))">
              ${labelText}
            </text>
          </g>
        `;
      }

      // 2. GULF OF MANNAR
      if (placeId === 'ind_gulf_of_mannar') {
        return `
          <g id="feature_gulf_of_mannar">
            <ellipse cx="450" cy="970" rx="42" ry="26" fill="rgba(6, 182, 212, 0.3)" stroke="#06b6d4" stroke-width="3" stroke-dasharray="6,4" />
            <path d="M 425 960 Q 440 952 455 960 T 475 960 M 425 978 Q 440 970 455 978 T 475 978" fill="none" stroke="#22d3ee" stroke-width="3" />
            <circle cx="450" cy="970" r="9" fill="#06b6d4" stroke="#ffffff" stroke-width="2.5" class="pin-ripple" />
            <text x="495" y="970" fill="#06b6d4" font-size="24" font-weight="900" letter-spacing="1.5" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.9))">
              ${labelText}
            </text>
          </g>
        `;
      }

      // 3. SUNDARBANS
      if (placeId === 'ind_sundarbans') {
        return `
          <g id="feature_sundarbans">
            <path d="M 670 515 C 695 510, 730 515, 745 535 C 735 555, 700 565, 680 550 C 665 540, 660 525, 670 515 Z" 
                  fill="rgba(16, 185, 129, 0.35)" stroke="#10b981" stroke-width="3.5" />
            <circle cx="700" cy="535" r="10" fill="#10b981" stroke="#ffffff" stroke-width="2.5" class="pin-ripple" />
            <text x="735" y="540" fill="#10b981" font-size="24" font-weight="900" letter-spacing="1.5" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.9))">
              ${labelText}
            </text>
          </g>
        `;
      }

      // 4. DESERT SOIL REGION
      if (placeId === 'ind_thar_desert') {
        return `
          <g id="feature_desert_soil">
            <path d="M 210 360 C 260 340, 300 370, 310 420 C 315 450, 290 480, 240 480 C 190 475, 180 420, 210 360 Z" 
                  fill="rgba(245, 158, 11, 0.28)" stroke="#f59e0b" stroke-width="3.5" stroke-dasharray="8,4" />
            <circle cx="255" cy="420" r="11" fill="#f59e0b" stroke="#ffffff" stroke-width="2.5" class="pin-ripple" />
            <text x="210" y="340" fill="#f59e0b" font-size="24" font-weight="900" letter-spacing="1.5" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.9))">
              ${labelText}
            </text>
          </g>
        `;
      }

      // 5. MUMBAI
      if (placeId === 'ind_mumbai') {
        return `
          <g id="feature_mumbai">
            <circle cx="248" cy="635" r="20" fill="none" stroke="#ef4444" stroke-width="2.5" class="pin-ripple" />
            <circle cx="248" cy="635" r="9" fill="#ef4444" stroke="#ffffff" stroke-width="2" />
            <path d="M 248 625 L 248 642 M 242 632 L 254 632 M 241 640 Q 248 647 255 640" fill="none" stroke="#ffffff" stroke-width="2" />
            <text x="120" y="635" fill="#ef4444" font-size="24" font-weight="900" letter-spacing="1.5" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.9))">
              ${labelText}
            </text>
          </g>
        `;
      }

      // 6. CHENNAI TO KOLKATA AIR ROUTE
      if (placeId === 'ind_air_chennai_kolkata') {
        return `
          <g id="feature_air_chennai_kolkata">
            <path d="M 485 835 Q 610 680 685 505" fill="none" stroke="#a855f7" stroke-width="4.5" stroke-dasharray="9,6" />
            <circle cx="485" cy="835" r="8" fill="#a855f7" stroke="#ffffff" stroke-width="2" />
            <text x="500" y="845" fill="#e9d5ff" font-size="15" font-weight="800">${isEm ? 'Chennai' : 'சென்னை'}</text>
            <circle cx="685" cy="505" r="8" fill="#a855f7" stroke="#ffffff" stroke-width="2" />
            <text x="700" y="500" fill="#e9d5ff" font-size="15" font-weight="800">${isEm ? 'Kolkata' : 'கொல்கத்தா'}</text>
            <g transform="translate(565, 660) rotate(-45)">
              <text x="0" y="0" font-size="30" text-anchor="middle" dominant-baseline="middle">✈️</text>
            </g>
            <text x="590" y="625" fill="#c084fc" font-size="22" font-weight="900" letter-spacing="1" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.9))">
              ${labelText}
            </text>
          </g>
        `;
      }

      // 7. GOA
      if (placeId === 'ind_goa') {
        return `
          <g id="feature_goa">
            <circle cx="285" cy="780" r="18" fill="none" stroke="#ec4899" stroke-width="2.5" class="pin-ripple" />
            <circle cx="285" cy="780" r="9" fill="#ec4899" stroke="#ffffff" stroke-width="2" />
            <text x="180" y="785" fill="#ec4899" font-size="24" font-weight="900" letter-spacing="1.5" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.9))">
              ${labelText}
            </text>
          </g>
        `;
      }

      // 8. RIVER GANGA (Continuous river line Gangotri -> UP -> Bihar -> West Bengal -> Delta)
      if (placeId === 'ind_river_ganga') {
        return `
          <g id="feature_river_ganga">
            <!-- Continuous Ganga River Path following official course from Himalayas to Delta -->
            <path d="M 430 235
                     C 422 255, 420 280, 440 305
                     C 455 320, 470 330, 490 345
                     C 505 355, 525 365, 545 370
                     C 565 375, 585 376, 605 380
                     C 620 385, 635 395, 650 415
                     C 660 430, 665 450, 672 475
                     C 678 495, 686 515, 695 535"
                  fill="none" stroke="#0284c7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />

            <!-- Directional River Flow Arrows -->
            <path d="M 465 325 L 474 330 L 468 337 Z" fill="#38bdf8" />
            <path d="M 570 372 L 580 376 L 573 383 Z" fill="#38bdf8" />
            <path d="M 662 445 L 668 455 L 659 458 Z" fill="#38bdf8" />

            <!-- Gangotri Origin Marker -->
            <circle cx="430" cy="235" r="7" fill="#38bdf8" stroke="#ffffff" stroke-width="2" class="pin-ripple" />
            <circle cx="430" cy="235" r="4" fill="#0284c7" />
            <text x="442" y="238" fill="#bae6fd" font-size="14" font-weight="800" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.9))">
              ${isEm ? 'Gangotri (Origin)' : 'கங்கோத்ரி (தோற்றம்)'}
            </text>

            <!-- River Name Label -->
            <text x="500" y="335" fill="#38bdf8" font-size="24" font-weight="900" letter-spacing="1.5" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.95))">
              ${labelText}
            </text>
          </g>
        `;
      }

      return '';
    },

    renderFeatureOnMap(place) {
      const svg = document.getElementById('tutor_svgIndiaMap');
      if (!svg) return;
      const layer = svg.querySelector('#tutorFeatureLayer');
      if (!layer) return;
      const isEm = this.currentLang === 'en';
      layer.innerHTML = this.getFeatureSvg(place.id, isEm);
    },

    renderAllFeaturesOnMap() {
      const svg = document.getElementById('tutor_svgIndiaMap');
      if (!svg) return;
      const layer = svg.querySelector('#tutorFeatureLayer');
      if (!layer) return;
      const isEm = this.currentLang === 'en';
      layer.innerHTML = EXAM_MODEL_PLACES.map(p => this.getFeatureSvg(p.id, isEm)).join('\n');
    },

    // -------------------------------------------------------------------------
    // 4. FULL COMPLETED MAP VIEW (All 8 Places Marked + Full Marks + Promo Voice)
    // -------------------------------------------------------------------------
    showFullCompletedMap() {
      this.currentStage = 'completed';
      this.stopVoice();

      const overlay = document.getElementById('mapQuestionOverlay');
      if (overlay) overlay.style.display = 'none';

      // Render ALL 8 features simultaneously!
      this.renderAllFeaturesOnMap();

      const isEm = this.currentLang === 'en';

      // Update Top Bar
      const stepBadge = document.getElementById('tutorStepNumBadge');
      if (stepBadge) stepBadge.textContent = isEm ? '🏆 Full Map (8/8)' : '🏆 முழு வரைபடம் (8/8)';

      const titleEl = document.getElementById('tutorCurrentPlaceTitle');
      if (titleEl) {
        titleEl.textContent = isEm ? 'All 8 Places Marked' : '8 இடங்களும் குறிக்கப்பட்டுள்ளன';
      }

      const lblPrev = document.getElementById('lblPrev');
      if (lblPrev) lblPrev.textContent = isEm ? 'Place 8' : 'எட்டாவது இடம்';

      const lblNext = document.getElementById('lblNext');
      if (lblNext) lblNext.textContent = isEm ? 'Restart 🔄' : 'மீண்டும் 🔄';

      // Show Completion Banner
      const compBanner = document.getElementById('mapCompletionBanner');
      if (compBanner) {
        compBanner.innerHTML = `
          <div class="completion-gold-title">
            <span>🏆</span>
            <span>${isEm ? 'Class 10 Map Practice Completed! (8/8 Marks)' : 'அரசு பொதுத்தேர்வு மாதிரி வரைபடம் நிறைவடைந்தது! (8/8 மதிப்பெண்கள்)'}</span>
          </div>
          <div class="completion-gold-sub">
            ${isEm 
              ? 'Mark like this and get full marks in map! All 8 places answer key is available via download:'
              : 'வரைபடத்தில் இதுபோல் தெளிவாகக் குறித்து முழு மதிப்பெண்களையும் பெறுங்கள்! அனைத்து இடங்களின் விடை வரைபடத்தைப் பதிவிறக்கம் செய்ய கீழே உள்ள பொத்தானை அழுத்தவும்:'}
          </div>
          <div class="completion-promo-box">
            📲 ${isEm 
              ? 'To learn 10th lessons easily download Vunnal Mudiyum Learn Easily app! Share to your classmates!' 
              : 'பத்தாம் வகுப்பு பாடங்களை எளிதாகக் கற்க \'உன்னால் முடியும் Learn Easily\' ஆப்பை டவுன்லோட் செய்யுங்கள். உங்கள் வகுப்புத் தோழர்களுக்கும் பகிருங்கள்!'}
          </div>
          <div style="display:flex; align-items:center; justify-content:center; gap:8px; margin-top:10px; flex-wrap:wrap;">
            <button type="button" class="tutor-btn primary" onclick="MapTutorEngine.downloadCompletedMap()" style="padding:8px 18px; font-size:13px; font-weight:900; background:linear-gradient(135deg, #f59e0b, #d97706); color:#000; border:none; box-shadow:0 4px 14px rgba(245,158,11,0.4);">
              📥 ${isEm ? 'Download All Marked Places (Answer Key)' : '📥 முழு விடை வரைபடத்தைப் பதிவிறக்கு (Answer Key)'}
            </button>
            <button type="button" class="tutor-btn" onclick="MapTutorEngine.toggleCompletionBanner()" style="padding:8px 14px; font-size:12px;">
              👁️ ${isEm ? 'View / Hide Map' : 'வரைபடத்தைக் காண்'}
            </button>
            <button type="button" class="tutor-btn" onclick="MapTutorEngine.teachPlace(0)" style="padding:8px 14px; font-size:12px;">
              🔄 ${isEm ? 'Practice Again' : 'மீண்டும் பயிற்சி'}
            </button>
            <button type="button" class="tutor-btn" onclick="MapTutorEngine.showQuestionScreen()" style="padding:8px 14px; font-size:12px;">
              📝 ${isEm ? 'Question Paper' : 'மாதிரி வினா'}
            </button>
          </div>
        `;
        compBanner.style.display = 'block';
      }

      // Voice Narration: Completion & Promo Sentence
      this.speakCompletionVoice();
    },

    toggleCompletionBanner() {
      const compBanner = document.getElementById('mapCompletionBanner');
      if (!compBanner) return;
      const isVisible = compBanner.style.display !== 'none';
      compBanner.style.display = isVisible ? 'none' : 'block';
    },

    speakCompletionVoice() {
      this.stopVoice();
      const isEm = this.currentLang === 'en';
      const capText = document.getElementById('voiceCapsuleText');

      let speechText = '';
      if (isEm) {
        speechText = "All places are marked! Mark like this and get full marks in map. "
          + "To learn 10th lessons easily download Vunnal Mudiyum Learn Easily app. Share to your classmates!";
        if (capText) {
          capText.textContent = "Teacher: Mark like this and get full marks in map! To learn 10th lessons easily download Vunnal Mudiyum Learn Easily app. Share to your classmates!";
        }
      } else {
        // Crucial: Use 'ஆப்பை' so the Tamil voice pronounces 'Aappai' and NEVER 'off'
        speechText = "அனைத்து இடங்களும் வரைபடத்தில் குறிக்கப்பட்டு விட்டன. வரைபடத்தில் இதுபோல் தெளிவாகக் குறித்து முழு மதிப்பெண்களையும் பெறுங்கள்! "
          + "பத்தாம் வகுப்பு பாடங்களை எளிதாகக் கற்க 'உன்னால் முடியும் Learn Easily' ஆப்பை டவுன்லோட் செய்யுங்கள். உங்கள் வகுப்புத் தோழர்களுக்கும் பகிருங்கள்!";
        if (capText) {
          capText.textContent = "ஆசிரியர்: வரைபடத்தில் இதுபோல் குறித்து முழு மதிப்பெண்களைப் பெறுங்கள்! 'உன்னால் முடியும்' ஆப் டவுன்லோட் செய்யுங்கள். வகுப்புத் தோழர்களுக்குப் பகிருங்கள்!";
        }
      }

      this.executeTutorSpeech(speechText, () => {
        this.stopVoice();
      });
    },

    // -------------------------------------------------------------------------
    // 5. TEACHER VOICE ENGINE (Web Speech API Narration)
    // -------------------------------------------------------------------------
    speakTeacherPlace(place, isGreeting = false) {
      this.stopVoice();

      const isEm = this.currentLang === 'en';
      const capText = document.getElementById('voiceCapsuleText');

      let speechText = '';
      if (isGreeting) {
        speechText = isEm 
          ? "Let us mark this place on the map: "
          : "வரைபடத்தில் இந்த இடத்தைக் குறிப்போம்: ";
      }

      if (isEm) {
        speechText += `${place.nameEnglish}. ${place.teachScriptEnglish} Board exam tip: ${place.examTipEnglish}`;
        if (capText) {
          capText.textContent = `Teacher: ${place.nameEnglish} - ${place.examTipEnglish}`;
        }
      } else {
        speechText += `${place.nameTamil}. ${place.teachScriptTamil} தேர்வு குறிப்பு: ${place.examTipTamil}`;
        if (capText) {
          capText.textContent = `ஆசிரியர்: ${place.nameTamil} - ${place.examTipTamil}`;
        }
      }

      this.executeTutorSpeech(speechText, () => {
        if (this.isAutoPlaying) {
          this.advanceAutoPlay();
        }
      });
    },

    executeTutorSpeech(speechText, onEndCallback) {
      if (!('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }

      const isEm = this.currentLang === 'en';
      const utter = new SpeechSynthesisUtterance(speechText);
      utter.lang = isEm ? 'en-IN' : 'ta-IN';
      utter.rate = isEm ? 0.95 : 0.92;
      utter.pitch = 1.0;

      utter.onstart = () => {
        this.isVoicePlaying = true;
      };

      utter.onend = () => {
        this.isVoicePlaying = false;
        if (typeof onEndCallback === 'function') onEndCallback();
      };

      utter.onerror = () => {
        this.isVoicePlaying = false;
        if (typeof onEndCallback === 'function') onEndCallback();
      };

      window.speechSynthesis.speak(utter);
    },

    replayVoice() {
      if (this.currentStage === 'question') {
        this.speakQuestionVoice();
      } else if (this.currentStage === 'completed') {
        this.speakCompletionVoice();
      } else {
        const place = EXAM_MODEL_PLACES[this.currentPlaceIndex];
        if (place) {
          this.speakTeacherPlace(place, false);
        }
      }
    },

    updateAutoPlayButtonState() {
      const btn = document.getElementById('btnAutoPlay');
      if (!btn) return;
      const isEm = this.currentLang === 'en';
      const span = btn.querySelector('#lblAutoPlay');
      if (span) {
        span.textContent = this.isAutoPlaying
          ? (isEm ? 'Pause' : 'இடைநிறுத்து')
          : (isEm ? 'Auto-Play ▶️' : 'தானாக இயக்கு ▶️');
      }
    },

    stopVoice() {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      this.isVoicePlaying = false;
      this.isAutoPlaying = false;
      if (this.autoPlayTimer) clearTimeout(this.autoPlayTimer);
      this.updateAutoPlayButtonState();
    },

    toggleAutoPlay() {
      if (this.isAutoPlaying) {
        this.stopVoice();
        return;
      }
      this.isAutoPlaying = true;
      this.updateAutoPlayButtonState();

      if (this.currentStage === 'question') {
        this.teachPlace(0, false);
      } else if (this.currentStage === 'completed') {
        this.teachPlace(0, false);
      } else {
        this.teachPlace(this.currentPlaceIndex, false);
      }
    },

    advanceAutoPlay() {
      if (this.currentStage === 'question') {
        this.autoPlayTimer = setTimeout(() => {
          this.teachPlace(0, false);
        }, 1800);
      } else if (this.currentStage === 'teaching') {
        if (this.currentPlaceIndex < EXAM_MODEL_PLACES.length - 1) {
          this.autoPlayTimer = setTimeout(() => {
            this.teachPlace(this.currentPlaceIndex + 1, false);
          }, 2000);
        } else {
          this.autoPlayTimer = setTimeout(() => {
            this.showFullCompletedMap();
          }, 1500);
        }
      } else {
        this.stopVoice();
      }
    },

    // -------------------------------------------------------------------------
    // 6. QUESTION PLACES LIST DRAWER
    // -------------------------------------------------------------------------
    togglePlacesDrawer() {
      const drawer = document.getElementById('placesDrawer');
      if (!drawer) return;
      const isOpen = drawer.style.display !== 'none';
      drawer.style.display = isOpen ? 'none' : 'flex';
    },

    renderDrawerList() {
      const container = document.getElementById('drawerListItems');
      if (!container) return;
      const isEm = this.currentLang === 'en';

      container.innerHTML = EXAM_MODEL_PLACES.map((place, idx) => {
        const title = isEm ? place.nameEnglish : place.nameTamil;
        const isAct = idx === this.currentPlaceIndex && this.currentStage === 'teaching';
        return `
          <div class="drawer-item ${isAct ? 'active' : ''}" onclick="MapTutorEngine.selectFromDrawer(${idx})">
            <div>
              <div style="font-weight:800; font-size:13px;">(${idx + 1}) ${title}</div>
            </div>
            <span style="font-size:14px;">📍</span>
          </div>
        `;
      }).join('');
    },

    selectFromDrawer(index) {
      this.teachPlace(index, false);
      this.togglePlacesDrawer();
    },

    // -------------------------------------------------------------------------
    // 7. LANGUAGE TOGGLE
    // -------------------------------------------------------------------------
    toggleLanguage() {
      this.currentLang = this.currentLang === 'ta' ? 'en' : 'ta';
      this.updateLanguageTexts();
      this.renderStage();
      if (this.currentStage === 'question') {
        this.showQuestionScreen();
      } else if (this.currentStage === 'completed') {
        this.showFullCompletedMap();
      } else {
        this.teachPlace(this.currentPlaceIndex, false);
      }
    },

    updateLanguageTexts() {
      const isEm = this.currentLang === 'en';
      const lblLang = document.getElementById('lblLang');
      if (lblLang) lblLang.textContent = isEm ? 'தமிழ்' : 'English';

      const fixedExit = document.getElementById('fixedExitLabel');
      if (fixedExit) fixedExit.textContent = isEm ? 'Exit (Close)' : 'வெளியேறு (Exit)';

      const examHead = document.getElementById('examQnHeading');
      if (examHead) examHead.textContent = isEm ? 'Board Exam Model Question (8 Places)' : 'அரசு பொதுத்தேர்வு மாதிரி வினா (8 இடங்கள்)';

      const qBtn = document.getElementById('lblQuestionBtn');
      if (qBtn) qBtn.textContent = isEm ? 'Question' : 'மாதிரி வினா';

      const lblPrev = document.getElementById('lblPrev');
      if (lblPrev) lblPrev.textContent = isEm ? 'Rewind / Prev' : 'முந்தையது (Rewind)';

      const lblNext = document.getElementById('lblNext');
      if (lblNext) lblNext.textContent = isEm ? 'Next' : 'அடுத்தது';

      const lblReplay = document.getElementById('lblReplay');
      if (lblReplay) lblReplay.textContent = isEm ? 'Replay Voice' : 'மீண்டும் சொல்';

      const lblDrawer = document.getElementById('lblPlacesDrawer');
      if (lblDrawer) lblDrawer.textContent = isEm ? '8 Places' : '8 இடங்கள்';

      const lblDl = document.getElementById('lblDownload');
      if (lblDl) lblDl.textContent = isEm ? 'Map Download' : 'வரைபடம்';

      const drawerHead = document.getElementById('drawerHeading');
      if (drawerHead) drawerHead.textContent = isEm ? '📋 Locations in this Question (8 Places)' : '📋 மாதிரி வினாவின் 8 இடங்கள்';

      const autoBtn = document.getElementById('btnAutoPlay');
      if (autoBtn) {
        const span = autoBtn.querySelector('#lblAutoPlay');
        if (span) {
          span.textContent = this.isAutoPlaying
            ? (isEm ? 'Pause' : 'இடைநிறுத்து')
            : (isEm ? 'Auto-Play ▶️' : 'தானாக இயக்கு ▶️');
        }
      }

      this.renderDrawerList();
    },

    // -------------------------------------------------------------------------
    // 8. ZOOM & PAN ENGINE
    // -------------------------------------------------------------------------
    zoom(factor) {
      this.zoomLevel = Math.max(1.0, Math.min(3.5, this.zoomLevel * factor));
      if (this.zoomLevel === 1.0) {
        this.panX = 0;
        this.panY = 0;
      }
      this.applyTransform();
    },

    resetZoom() {
      this.zoomLevel = 1.0;
      this.panX = 0;
      this.panY = 0;
      this.applyTransform();
    },

    applyTransform() {
      const svg = document.getElementById('tutor_svgIndiaMap');
      if (svg) {
        svg.style.transform = `translate(${this.panX}px, ${this.panY}px) scale(${this.zoomLevel})`;
        svg.style.transformOrigin = 'center center';
      }
    },

    bindPan() {
      const wrapper = document.getElementById('mapSvgStageWrapper');
      if (!wrapper) return;

      let isDown = false;
      let startX = 0;
      let startY = 0;

      wrapper.onpointerdown = (e) => {
        isDown = true;
        startX = e.clientX - this.panX;
        startY = e.clientY - this.panY;
      };

      wrapper.onpointermove = (e) => {
        if (!isDown) return;
        if (this.zoomLevel > 1.0) {
          this.panX = e.clientX - startX;
          this.panY = e.clientY - startY;
          this.applyTransform();
        }
      };

      wrapper.onpointerup = () => { isDown = false; };
      wrapper.onpointercancel = () => { isDown = false; };
    },

    // -------------------------------------------------------------------------
    // DOWNLOAD CONTROLLER (Completed Map / Blank Map)
    // -------------------------------------------------------------------------
    handleDownloadClick() {
      if (this.currentStage === 'completed') {
        this.downloadCompletedMap();
      } else {
        this.downloadBlankMap();
      }
    },

    downloadCompletedMap() {
      const svg = document.getElementById('tutor_svgIndiaMap');
      if (!svg) return;

      const clone = svg.cloneNode(true);
      clone.removeAttribute('style');

      const isEm = this.currentLang === 'en';
      let layer = clone.querySelector('#tutorFeatureLayer');
      if (!layer) {
        layer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        layer.setAttribute('id', 'tutorFeatureLayer');
        clone.appendChild(layer);
      }
      layer.innerHTML = EXAM_MODEL_PLACES.map(p => this.getFeatureSvg(p.id, isEm)).join('\n');

      // Add Official Exam Heading Card to exported Answer Key Map
      const titleCard = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      titleCard.innerHTML = `
        <rect x="25" y="20" width="460" height="74" rx="10" fill="#071322" stroke="#38bdf8" stroke-width="2" fill-opacity="0.95"/>
        <text x="40" y="48" fill="#38bdf8" font-size="16" font-weight="900">${isEm ? 'Class 10 Social Science - Map Answer Key' : '10-ஆம் வகுப்பு சமூக அறிவியல் - மாதிரி வரைபட விடைக்குறிப்பு'}</text>
        <text x="40" y="74" fill="#fbbf24" font-size="14" font-weight="800">${isEm ? '★ 8/8 Marks • All 8 Places Accurately Marked' : '★ 8/8 மதிப்பெண்கள் • அனைத்து 8 இடங்களின் துல்லிய விடை'}</text>
        <rect x="25" y="1080" width="420" height="45" rx="8" fill="#071322" stroke="#0284c7" stroke-width="1.2" fill-opacity="0.92"/>
        <text x="38" y="1108" fill="#38bdf8" font-size="13" font-weight="800">உன்னால் முடியும் Learn Easily App • மாதிரி வினாத்தாள் விடை</text>
      `;
      clone.appendChild(titleCard);

      const svgData = new XMLSerializer().serializeToString(clone);

      // Attempt high-res PNG export via Canvas
      try {
        const canvas = document.createElement('canvas');
        canvas.width = 1200;
        canvas.height = 1380;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
        const blobUrl = URL.createObjectURL(svgBlob);

        img.onload = () => {
          ctx.drawImage(img, 0, 0, 1200, 1380);
          URL.revokeObjectURL(blobUrl);
          canvas.toBlob((pngBlob) => {
            if (pngBlob) {
              const a = document.createElement('a');
              a.href = URL.createObjectURL(pngBlob);
              a.download = `10th_Social_Map_Answer_Key_All_8_Places_${Date.now()}.png`;
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(a.href);
            } else {
              this.downloadSvgDirect(svgData);
            }
          }, 'image/png');
        };
        img.onerror = () => {
          this.downloadSvgDirect(svgData);
        };
        img.src = blobUrl;
      } catch (e) {
        this.downloadSvgDirect(svgData);
      }
    },

    downloadSvgDirect(svgData) {
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const svgUrl = URL.createObjectURL(svgBlob);
      const downloadLink = document.createElement('a');
      downloadLink.href = svgUrl;
      downloadLink.download = `10th_Social_Map_Answer_Key_All_8_Places_${Date.now()}.svg`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(svgUrl);
    },

    // -------------------------------------------------------------------------
    // DOWNLOAD BLANK VECTOR MAP FOR PAPER EXAM PRACTICE
    // -------------------------------------------------------------------------
    downloadBlankMap() {
      const svg = document.getElementById('tutor_svgIndiaMap');
      if (!svg) return;

      const clone = svg.cloneNode(true);
      const mLayer = clone.querySelector('#tutorFeatureLayer');
      if (mLayer) mLayer.innerHTML = '';
      clone.removeAttribute('style');

      const svgData = new XMLSerializer().serializeToString(clone);
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const svgUrl = URL.createObjectURL(svgBlob);

      const downloadLink = document.createElement('a');
      downloadLink.href = svgUrl;
      downloadLink.download = `Blank_Map_India_10th_Social_${Date.now()}.svg`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(svgUrl);

      const isEm = this.currentLang === 'en';
      const msg = isEm
        ? '✅ Blank map downloaded successfully! Print this vector map to practice pencil markings for Board Exams.'
        : '✅ வெற்று வரைபடம் பதிவிறக்கம் செய்யப்பட்டது! இதை பிரிண்ட் எடுத்து பொதுத்தேர்வுக்காக பென்சிலால் குறித்து பயிற்சி பெறலாம்.';
      alert(msg);
    }
  };

  window.MapTutorEngine = MapTutorEngine;
  window.openSocialMapTutor = function(unitId) {
    MapTutorEngine.openModal(unitId);
  };

})();
