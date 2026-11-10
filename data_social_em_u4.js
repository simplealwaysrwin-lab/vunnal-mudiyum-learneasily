// 10th Standard Social Science - Economics Unit 1: Gross Domestic Product and its Growth (English Medium)
// Tamil Nadu State Board Samacheer Kalvi Question Bank & Solutions

const SOCIAL_EM_UNIT_4_DATA = {
  unitId: "soc_em_e1",
  unitName: "Economics Unit 1: Gross Domestic Product and its Growth: an Introduction",
  subject: "Social Science (English Medium)",
  syllabus: "Tamil Nadu State Board Samacheer Kalvi Class 10 Social Science - Economics",

  // Key Formulas & Economic Aggregates
  formulas: [
    { title: "Gross Domestic Product (GDP)", rule: "GDP = C + I + G + (X - M) [C = Consumption, I = Investment, G = Government purchases, X-M = Net Exports]" },
    { title: "Gross National Product (GNP)", rule: "GNP = GDP + Net Factor Income from Abroad (NFIA)" },
    { title: "Net National Product (NNP)", rule: "NNP = GNP - Depreciation" },
    { title: "Per Capita Income (PCI)", rule: "Per Capita Income = Total National Income / Total Population of the Country" },
    { title: "Human Development Index (HDI)", rule: "Composite statistic of Life Expectancy, Education Index, and Gross National Income per capita" }
  ],

  subSections: [
    // -------------------------------------------------------------
    // Section 1: Definition of GDP & National Income Concepts
    // -------------------------------------------------------------
    {
      id: "sec_soc_em_4_1",
      title: "Section 1: Definition of GDP & Concepts of National Income",
      author: "Economics - Unit 1: Gross Domestic Product",
      questions: [
        {
          id: "soc_em_4_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "Board Exam",
          q: "GNP is equal to ________.",
          options: ["a) NNP + Depreciation", "b) GDP + Net Factor Income from Abroad (NFIA)", "c) NDP + Exports", "d) GDP - Depreciation"],
          ans: "Answer: <b>b) GDP + Net Factor Income from Abroad (NFIA)</b>",
          explanation: "GNP measures total value of goods and services produced by nationals both inside and outside the country."
        },
        {
          id: "soc_em_4_2",
          type: "1m",
          mark: "1 Mark",
          examYear: "2023",
          examTag: "2023*",
          q: "Which indicator is widely regarded as the most reliable measure of a country's standard of living?",
          options: ["a) Inflation rate", "b) Per Capita Income (PCI)", "c) Gross Foreign Exchange Reserves", "d) Total Agricultural Output"],
          ans: "Answer: <b>b) Per Capita Income (PCI)</b><br>Explanation: Per Capita Income divides total national output by total population, reflecting the average income per person.",
          explanation: "PCI reflects the average economic well-being and purchasing power of citizens."
        },
        {
          id: "soc_em_4_3",
          type: "2m",
          mark: "2 Marks",
          examTag: "Board Model",
          isImportant: true,
          q: "Define Gross Domestic Product (GDP).",
          ans: "<b>Gross Domestic Product (GDP):</b><br>GDP is defined as the total market monetary value of all final goods and services produced within the domestic geographical boundaries of a country during a specific period of time (normally one year).<br><br><b>Equation: GDP = C + I + G + (X - M)</b>",
          explanation: "GDP reflects the total economic output produced domestically within a financial year."
        },
        {
          id: "soc_em_4_4",
          type: "2m",
          mark: "2 Marks",
          q: "What is meant by National Income?",
          ans: "<b>National Income:</b><br>National Income is the total money value of all final goods and services produced by a nation during a year. Commonly known as Net National Product (NNP) at factor cost, it represents the aggregate earnings of factors of production (rent, wages, interest, profit).",
          explanation: "Total value of domestic output plus net foreign income equals national income."
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 2: Three Sectors of the Economy & Methods of GDP
    // -------------------------------------------------------------
    {
      id: "sec_soc_em_4_2",
      title: "Section 2: Three Sectors of the Economy & GDP Estimation Methods",
      author: "Economics - Unit 1: Gross Domestic Product",
      questions: [
        {
          id: "soc_em_4_5",
          type: "1m",
          mark: "1 Mark",
          examTag: "Board Exam",
          q: "Which sector contributes the highest share to India's Gross Domestic Product (GDP)?",
          options: ["a) Primary Sector (Agriculture)", "b) Secondary Sector (Manufacturing)", "c) Tertiary Sector (Services)", "d) Mining Sector"],
          ans: "Answer: <b>c) Tertiary Sector (Services)</b>. It accounts for more than 53% of India's GDP.",
          explanation: "The services sector (finance, IT, telecommunications, hospitality) dominates India's GDP."
        },
        {
          id: "soc_em_4_6",
          type: "2m",
          mark: "2 Marks",
          examYear: "2024",
          examTag: "2024*",
          q: "Name the three methods used to calculate Gross Domestic Product (GDP).",
          ans: `<b>Methods of Calculating GDP:</b><br>
          1. <b>Expenditure Approach:</b> Sum of consumption (C), investment (I), government spending (G), and net exports (X - M).<br>
          2. <b>Income Approach:</b> Sum of wages, rent, interest, and profits earned by factors of production.<br>
          3. <b>Value-Added Approach:</b> Sum of value added at each intermediate stage of production of goods and services.`,
          explanation: "Expenditure, Income, and Value-added methods yield equivalent GDP estimates."
        },
        {
          id: "soc_em_4_7",
          type: "8m",
          mark: "8 Marks",
          examYear: "2023",
          examTag: "2023* (Key 5 Marks)",
          isImportant: true,
          q: "Explain in detail the three major sectors of the Indian economy.",
          ans: `<div style="line-height:1.8;">
            <b>Three Major Sectors of the Indian Economy:</b><br><br>
            <b>1. Primary Sector (Agricultural Sector):</b><br>
            This sector involves direct exploitation and utilization of natural resources to produce raw materials. It includes agriculture, animal husbandry, dairy farming, forestry, fishing, and mining. It continues to be the largest employer of the Indian workforce, although its share in total GDP has reduced over decades.<br><br>
            <b>2. Secondary Sector (Industrial Sector):</b><br>
            This sector transforms raw agricultural and mineral materials into finished consumable or capital goods using machinery, tools, and industrial power. Examples include manufacturing (textiles, automobiles, chemicals), basic metal industries (iron and steel), construction, electricity, gas, and water supply.<br><br>
            <b>3. Tertiary Sector (Services Sector):</b><br>
            This sector does not manufacture physical goods, but provides indispensable services essential for running society and supporting other sectors. It comprises transport, telecommunications, banking and insurance, education, healthcare, tourism, trade, hospitality, and IT software services. It is the fastest growing sector and constitutes more than 53% of India's GDP.
          </div>`,
          explanation: "Primary (nature-based), Secondary (transformation/factory), and Tertiary (service/support) comprise the macroeconomy."
        }
      ]
    }
  ,
    {
      id: "sec_soc_em_4_map",
      title: "Map Identification & Practice: GDP & Industrial Hubs (8M)",
      author: "Economics Unit 1 Map Tutor",
      questions: [
        {
          id: "soc_em_4_map_1",
          type: "8m",
          mark: "5 / 8 Marks Map",
          examYear: "2024",
          examTag: "Board Exam Model Map",
          isImportant: true,
          q: "On the given outline map of India, mark and label the following major economic and industrial growth powerhouses driving India's GDP:<br>1. Mumbai (Financial Capital of India - RBI Headquarters)<br>2. Chennai (Detroit of Asia - Automobile Hub)<br>3. Bengaluru (Silicon Valley of India - IT Software Hub)<br>4. Hyderabad (Cyberabad - Pharma & Biotechnology Hub)<br>5. Ahmedabad (Manchester of India - Textile Hub)<br>6. Jamshedpur (Steel City of India - TISCO)",
          ans: `<div style="line-height:1.8;">
            <b style="color:#0284c7; font-size:15px;">Economic and Industrial Hubs Map Guide:</b><br><br>
            <b>1. Mumbai:</b> Financial Capital of India; headquarters of Reserve Bank of India (RBI), Bombay Stock Exchange (BSE), and premier financial institutions. Marked directly on the western coastal indentation.<br>
            <b>2. Chennai:</b> Detroit of Asia; largest automobile, automotive components, and heavy vehicle manufacturing hub in India (Hyundai, Ford, Ashok Leyland).<br>
            <b>3. Bengaluru:</b> Silicon Valley of India; capital of Karnataka and premier center for Information Technology (IT), software exports, and aerospace research (ISRO).<br>
            <b>4. Hyderabad:</b> Cyberabad; capital of Telangana, global pharmaceutical manufacturing capital and prominent biotechnology hub.<br>
            <b>5. Ahmedabad:</b> Manchester of India; Gujarat's largest commercial city and premier cotton textile industrial center.<br>
            <b>6. Jamshedpur:</b> Steel City of India; located in Jharkhand, home to Tata Iron and Steel Company (TISCO) established in 1907 as India's first modern steel plant.<br><br>
            <div style="background:#eff6ff; border-left:4px solid #2563eb; padding:10px 14px; border-radius:6px; font-size:13px; color:#1e40af;">
              <b>ðŸŽ¯ Board Exam Tip:</b> Secondary (Manufacturing: Chennai, Ahmedabad, Jamshedpur) and Tertiary (Services & Finance: Mumbai, Bengaluru, Hyderabad) sectors contribute more than 75% of non-agricultural GDP in India.
            </div>
          </div>`,
          explanation: "Prime industrial, manufacturing, and financial clusters driving India's Gross Domestic Product (GDP).",
          diagramSvg: `<svg viewBox="0 0 1000 1150" style="width:100%; max-width:650px; height:auto; margin:10px auto; display:block; background:#0a192f; border-radius:12px; border:1px solid #334155; box-shadow:0 4px 20px rgba(0,0,0,0.4);" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="oceanG_em_u4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0a192f"/><stop offset="100%" stop-color="#030c1b"/></linearGradient>
              <linearGradient id="landG_em_u4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1e293b"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
            </defs>
            <rect width="1000" height="1150" fill="url(#oceanG_em_u4)"/>
            <path fill="url(#landG_em_u4)" stroke="#38bdf8" stroke-width="2.5" stroke-linejoin="round" d="M 370 40 C 385 30, 415 30, 430 45 C 450 65, 460 95, 450 120 C 470 125, 495 140, 485 165 C 465 175, 445 190, 430 215 C 415 235, 400 245, 375 250 C 350 255, 330 270, 315 295 C 300 315, 275 330, 255 350 C 235 370, 215 390, 205 420 C 195 440, 160 455, 140 480 C 120 500, 155 520, 190 525 C 220 530, 240 515, 255 530 C 265 545, 250 560, 220 575 C 195 590, 175 605, 195 625 C 225 635, 260 620, 280 600 C 295 580, 275 605, 270 638 C 265 670, 285 710, 305 750 C 325 790, 345 830, 365 870 C 385 910, 405 950, 420 990 C 425 1000, 435 995, 440 980 C 455 940, 465 900, 475 860 C 485 820, 495 780, 520 750 C 545 720, 575 690, 605 660 C 635 630, 660 600, 640 570 C 625 550, 645 530, 665 515 C 685 500, 695 480, 675 465 C 655 450, 630 460, 615 440 C 600 420, 580 405, 560 395 C 540 380, 560 360, 585 345 C 610 330, 635 315, 660 305 C 685 295, 715 295, 730 315 C 745 330, 775 320, 805 325 C 835 330, 860 345, 855 365 C 850 385, 825 395, 800 405 C 780 415, 755 435, 775 455 C 795 470, 770 490, 745 490 C 720 490, 705 470, 680 475 C 660 480, 645 495, 630 515 C 615 535, 585 550, 560 565 C 530 585, 510 610, 490 635 C 540 700, 570 670, 595 640 C 615 615, 630 585, 640 555 C 645 530, 625 510, 605 490 C 585 470, 565 440, 545 410 C 525 380, 505 350, 485 320 C 465 290, 445 260, 425 230 C 405 200, 385 170, 375 140 C 365 110, 360 70, 370 40 Z"/>
            <path fill="url(#landG_em_u4)" stroke="#38bdf8" stroke-width="2" d="M 470 940 C 490 925, 515 940, 520 965 C 525 990, 510 1020, 490 1040 C 475 1050, 460 1045, 455 1025 C 450 1000, 455 960, 470 940 Z"/>
            <!-- 1. Ahmedabad -->
            <circle cx="260" cy="520" r="8" fill="#f59e0b" stroke="#ffffff" stroke-width="2" />
            <text x="130" y="505" fill="#f59e0b" font-size="16" font-weight="900">Ahmedabad (Manchester of India)</text>
            <!-- 2. Mumbai -->
            <circle cx="270" cy="638" r="9" fill="#ef4444" stroke="#ffffff" stroke-width="2" />
            <line x1="242" y1="638" x2="258" y2="638" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" />
            <text x="238" y="643" text-anchor="end" fill="#ef4444" font-size="19" font-weight="900">Mumbai (Financial Capital)</text>
            <!-- 3. Jamshedpur -->
            <circle cx="630" cy="480" r="8" fill="#f43f5e" stroke="#ffffff" stroke-width="2" />
            <text x="645" y="475" fill="#f43f5e" font-size="17" font-weight="900">Jamshedpur (Steel City - TISCO)</text>
            <!-- 4. Hyderabad -->
            <circle cx="460" cy="680" r="8" fill="#a855f7" stroke="#ffffff" stroke-width="2" />
            <text x="475" y="675" fill="#a855f7" font-size="17" font-weight="900">Hyderabad (Biotech & IT)</text>
            <!-- 5. Bengaluru -->
            <circle cx="410" cy="810" r="9" fill="#10b981" stroke="#ffffff" stroke-width="2" />
            <text x="240" y="815" fill="#10b981" font-size="18" font-weight="900">Bengaluru (Silicon Valley of India)</text>
            <!-- 6. Chennai -->
            <circle cx="485" cy="835" r="9" fill="#38bdf8" stroke="#ffffff" stroke-width="2" />
            <text x="505" y="840" fill="#38bdf8" font-size="19" font-weight="900">Chennai (Detroit of Asia)</text>
          </svg>`,
          diagramCaption: "India Map: Major Economic and Industrial Hubs Driving India's GDP"
        }
      ]
    }
  ]
};
