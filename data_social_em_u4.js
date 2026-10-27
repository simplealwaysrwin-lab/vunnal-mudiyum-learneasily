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
          type: "5m",
          mark: "5 Marks",
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
  ]
};
