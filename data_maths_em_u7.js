// 10th Standard Mathematics - Unit 7: Mensuration (English Medium)
// Tamil Nadu State Board Samacheer Kalvi Question Bank & Step-by-Step Solutions

const MATHS_EM_UNIT_7_DATA = {
  unitId: "math_em_u7",
  unitName: "Unit 7: Mensuration",
  subject: "Mathematics (English Medium)",
  syllabus: "Tamil Nadu State Board Samacheer Kalvi Class 10 Mathematics",

  // Key Formulas
  formulas: [
    { title: "Right Circular Cylinder", rule: "CSA = 2πrh | TSA = 2πr(h + r) | Volume = πr²h" },
    { title: "Hollow Cylinder", rule: "CSA = 2π(R + r)h | TSA = 2π(R + r)(h + R - r) | Volume = π(R² - r²)h" },
    { title: "Right Circular Cone", rule: "Slant height l = √(r² + h²) | CSA = πrl | TSA = πr(l + r) | Volume = (1/3)πr²h" },
    { title: "Frustum of a Cone", rule: "Slant height l = √[h² + (R - r)²] | CSA = π(R + r)l | TSA = π(R + r)l + πR² + πr² | Volume = (1/3)πh(R² + r² + Rr)" },
    { title: "Solid Sphere", rule: "CSA = TSA = 4πr² | Volume = (4/3)πr³" },
    { title: "Hollow Sphere", rule: "CSA = 4πR² | TSA = 4π(R² + r²) | Volume = (4/3)π(R³ - r³)" },
    { title: "Solid Hemisphere", rule: "CSA = 2πr² | TSA = 3πr² | Volume = (2/3)πr³" },
    { title: "Hollow Hemisphere", rule: "CSA = 2π(R² + r²) | TSA = π(3R² + r²) | Volume = (2/3)π(R³ - r³)" },
    { title: "Conversion / Recasting of Solids", rule: "Volume of Recast Solid = Volume of Original Solid (n × Vol₁ = Vol₂)" }
  ],

  subSections: [
    {
      id: "sec_m_em_7_1",
      title: "Section 1: Surface Area (Cylinders, Cones, Spheres & Frustum)",
      author: "Chapter 7: Mensuration",
      questions: [
        {
          id: "m_em_7_1_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "Public Exam",
          q: "The curved surface area of a right circular cylinder of height 14 cm is 88 cm². The diameter of the base is:",
          options: ["A) 1 cm", "B) 2 cm", "C) 3 cm", "D) 4 cm"],
          ans: "Answer: <b>B) 2 cm</b><br>Explanation: CSA = 2πrh = 88 ➔ 2 × (22/7) × r × 14 = 88 ➔ 88r = 88 ➔ r = 1 cm. Diameter d = 2r = 2 cm."
        },
        {
          id: "m_em_7_1_2",
          type: "1m",
          mark: "1 Mark",
          q: "If the radius of the base of a cone is tripled and the height is doubled, the volume becomes:",
          options: ["A) 6 times", "B) 12 times", "C) 18 times", "D) 24 times"],
          ans: "Answer: <b>C) 18 times</b><br>Explanation: V' = (1/3)π(3r)²(2h) = (1/3)π(9r²)(2h) = 18 × [(1/3)πr²h] = 18V."
        },
        {
          id: "m_em_7_1_3",
          type: "2m",
          mark: "2 Marks",
          examTag: "Important 2M",
          isImportant: true,
          q: "A cylindrical drum has a height of 20 cm and base radius of 14 cm. Find its curved surface area and total surface area.",
          ans: `<div style="line-height:1.8;">
            Given: Radius r = 14 cm, Height h = 20 cm.<br>
            1. <b>Curved Surface Area (CSA):</b><br>
            CSA = 2πrh = 2 × (22/7) × 14 × 20 = 2 × 22 × 2 × 20 = <b>1760 cm²</b>.<br>
            2. <b>Total Surface Area (TSA):</b><br>
            TSA = 2πr(h + r) = 2 × (22/7) × 14 × (20 + 14) = 88 × 34 = <b>2992 cm²</b>.
          </div>`
        },
        {
          id: "m_em_7_1_4",
          type: "2m",
          mark: "2 Marks",
          q: "Find the total surface area of a hemisphere of radius 7 cm.",
          ans: `<div style="line-height:1.8;">
            Given: r = 7 cm.<br>
            TSA of Hemisphere = 3πr²<br>
            = 3 × (22/7) × 7 × 7 = 3 × 22 × 7 = <b>462 cm²</b>.
          </div>`
        },
        {
          id: "m_em_7_1_5",
          type: "5m",
          mark: "5 Marks",
          examTag: "Top Board Exam Question",
          isImportant: true,
          q: "A solid toy is in the form of a hemisphere surmounted by a right circular cone. The height of the cone is 4 cm and the diameter of the base is 6 cm. Find the volume of the toy. (Take π = 3.14)",
          diagramCaption: "Geometrical shape of the solid toy: Lower hemisphere (r = 3 cm) surmounted by right circular cone (h = 4 cm, r = 3 cm)",
          diagramSvg: `<div style="max-width:320px; margin:12px auto; background:#ffffff; border:1.5px solid #cbd5e1; border-radius:12px; padding:12px; box-shadow:0 2px 8px rgba(0,0,0,0.06); text-align:center;">
            <div style="font-size:12px; font-weight:700; color:#1e3a8a; margin-bottom:8px;">🎯 Solid Toy Geometrical Illustration</div>
            <svg viewBox="0 0 320 370" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; display:block; aspect-ratio:320/370;">
              <defs>
                <linearGradient id="coneGrad7_1_em" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#fef3c7"/>
                  <stop offset="50%" stop-color="#fde68a"/>
                  <stop offset="100%" stop-color="#fef3c7"/>
                </linearGradient>
                <linearGradient id="hemiGrad7_1_em" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#ffedd5"/>
                  <stop offset="100%" stop-color="#fed7aa"/>
                </linearGradient>
              </defs>

              <!-- Cone Body -->
              <polygon points="160,45 80,185 240,185" fill="url(#coneGrad7_1_em)" stroke="#d97706" stroke-width="2.2" stroke-linejoin="round"/>

              <!-- Hemisphere Body -->
              <path d="M 80,185 A 80,80 0 0,0 240,185" fill="url(#hemiGrad7_1_em)" stroke="#ea580c" stroke-width="2.5"/>

              <!-- Common Circular Interface Ellipse -->
              <ellipse cx="160" cy="185" rx="80" ry="24" fill="#fde68a" fill-opacity="0.5" stroke="#d97706" stroke-width="1.8" stroke-dasharray="5,4"/>

              <!-- Cone Vertical Height Line (h = 4 cm) -->
              <line x1="160" y1="45" x2="160" y2="185" stroke="#475569" stroke-width="2" stroke-dasharray="4,4"/>
              <rect x="160" y="173" width="12" height="12" fill="none" stroke="#475569" stroke-width="1.5"/>

              <!-- Radius Line on Interface (r = 3 cm) -->
              <line x1="160" y1="185" x2="240" y2="185" stroke="#dc2626" stroke-width="2.5"/>
              <circle cx="160" cy="185" r="3.5" fill="#1e293b"/>
              <circle cx="240" cy="185" r="3" fill="#dc2626"/>

              <!-- Height Dimension Line on Left (h = 4 cm) -->
              <line x1="55" y1="45" x2="55" y2="185" stroke="#2563eb" stroke-width="1.5"/>
              <line x1="48" y1="45" x2="62" y2="45" stroke="#2563eb" stroke-width="1.5"/>
              <line x1="48" y1="185" x2="62" y2="185" stroke="#2563eb" stroke-width="1.5"/>
              <text x="45" y="120" font-size="12" fill="#2563eb" font-weight="bold" text-anchor="end">h = 4 cm</text>

              <!-- Diameter Dimension Line Below (d = 6 cm) -->
              <line x1="80" y1="285" x2="240" y2="285" stroke="#475569" stroke-width="1.5"/>
              <line x1="80" y1="278" x2="80" y2="292" stroke="#475569" stroke-width="1.5"/>
              <line x1="240" y1="278" x2="240" y2="292" stroke="#475569" stroke-width="1.5"/>
              <text x="160" y="303" font-size="12" fill="#475569" font-weight="bold" text-anchor="middle">Diameter d = 6 cm (Radius r = 3 cm)</text>

              <!-- Labels & Annotations -->
              <circle cx="160" cy="45" r="3" fill="#d97706"/>
              <text x="160" y="32" font-size="12" fill="#b45309" font-weight="bold" text-anchor="middle">Cone Apex (P)</text>

              <!-- Cone Name Badge -->
              <rect x="180" y="95" width="125" height="24" rx="4" fill="#ffffff" stroke="#d97706" stroke-width="1"/>
              <text x="242" y="111" font-size="11" fill="#b45309" font-weight="bold" text-anchor="middle">Cone: V₂ = ⅓πr²h</text>

              <!-- Radius Label -->
              <text x="200" y="177" font-size="12" fill="#dc2626" font-weight="bold" text-anchor="middle">r = 3 cm</text>

              <!-- Hemisphere Name Badge -->
              <rect x="95" y="225" width="130" height="24" rx="4" fill="#ffffff" stroke="#ea580c" stroke-width="1"/>
              <text x="160" y="241" font-size="11" fill="#c2410c" font-weight="bold" text-anchor="middle">Hemisphere: V₁ = ⅔πr³</text>

              <!-- Bottom Result Callout -->
              <rect x="40" y="325" width="240" height="32" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
              <text x="160" y="346" font-size="12" fill="#1d4ed8" font-weight="bold" text-anchor="middle">Total Volume V = 94.2 cm³</text>
            </svg>
          </div>`,
          ans: `<div style="line-height:1.9;">
            <div style="background:#eff6ff; border-left:4px solid #2563eb; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>Step 1: Given Data:</b><br>
              • Height of the cone, h = <b>4 cm</b><br>
              • Diameter of the base, d = 6 cm<br>
              • Radius of common base, r = 6 / 2 = <b>3 cm</b><br>
              • Value of π = <b>3.14</b> (explicitly given in the question)
            </div>

            <div style="background:#f8fafc; border-left:4px solid #0284c7; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>Step 2: Formula:</b><br>
              • Total Volume of the solid toy (V) = Volume of hemisphere (V₁) + Volume of cone (V₂)<br>
              • Volume of hemisphere, V₁ = <b>(2/3)πr³</b><br>
              • Volume of cone, V₂ = <b>(1/3)πr²h</b>
            </div>

            <div style="background:#fff7ed; border-left:4px solid #ea580c; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>Step 3: Volume of Hemisphere (V₁):</b><br>
              V₁ = (2/3) × 3.14 × (3)³<br>
              = (2/3) × 3.14 × 27<br>
              = 2 × 3.14 × 9 = 18 × 3.14 = <b>56.52 cm³</b>
            </div>

            <div style="background:#fefce8; border-left:4px solid #eab308; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>Step 4: Volume of Cone (V₂):</b><br>
              V₂ = (1/3) × 3.14 × (3)² × 4<br>
              = (1/3) × 3.14 × 9 × 4<br>
              = 3.14 × 3 × 4 = 3.14 × 12 = <b>37.68 cm³</b>
            </div>

            <div style="background:#f0fdf4; border-left:4px solid #16a34a; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>Step 5: Total Volume of the Solid Toy (V):</b><br>
              V = V₁ + V₂<br>
              = 56.52 + 37.68 = <b>94.2 cm³</b><br><br>
              <div style="background:#ffffff; border:1px dashed #16a34a; padding:8px 12px; border-radius:6px;">
                <b>Alternative Method (Combined Factorized Form):</b><br>
                V = (1/3)πr²(h + 2r)<br>
                = (1/3) × 3.14 × 3² × [4 + 2(3)]<br>
                = (1/3) × 3.14 × 9 × [4 + 6]<br>
                = 3.14 × 3 × 10 = <b>94.2 cm³</b>
              </div>
            </div>

            <div style="margin-top:14px; padding:12px; background:#eff6ff; border:2px solid #2563eb; border-radius:8px; text-align:center;">
              <span style="font-size:16px; font-weight:800; color:#1e40af;">Final Answer: Volume of the solid toy = 94.2 cm³</span>
            </div>

            <div style="margin-top:12px; font-size:13px; color:#475569; background:#f8fafc; padding:10px; border-radius:6px; border:1px solid #e2e8f0;">
              <b>💡 Public Exam Tips:</b><br>
              1. Base diameter is 6 cm, so radius r = 3 cm. Do not use 6 cm as the radius.<br>
              2. Must take π = 3.14 as specified in the question (do not substitute 22/7).<br>
              3. Calculating V₁ and V₂ separately secures maximum step-by-step marks under TN State Board valuation keys.
            </div>
          </div>`,
          commonMistakes: [
            {
              type: "Diameter vs Radius Careless Error (d = 6 cm ➔ r = 3 cm)",
              icon: "⚠️",
              deduction: "-1 Mark",
              mistake: "The question gives the diameter of the base as 6 cm. Carelessly substituting r = 6 cm directly into the formulas instead of dividing by 2 to get r = 3 cm.",
              mistakeTa: "Using diameter 6 cm as radius ruins both hemisphere and cone calculations completely.",
              correction: "Always write explicitly: Radius r = Diameter / 2 = 6 / 2 = 3 cm before applying any formulas."
            },
            {
              type: "Incorrect Value of π (Using 22/7 instead of 3.14)",
              icon: "🔢",
              deduction: "-½ Mark",
              mistake: "The question explicitly specifies '(Take π = 3.14)'. Carelessly using 22/7 leads to fractional inaccuracy (approx 94.28 cm³) and deduction of marks in public valuation.",
              mistakeTa: "When π value is specified in the question, you must strictly substitute that given value.",
              correction: "Strictly substitute π = 3.14 as required by the question to get the exact answer 94.2 cm³."
            },
            {
              type: "Unit Confusion (Writing cm² instead of cm³)",
              icon: "📏",
              deduction: "-½ Mark",
              mistake: "Writing surface area unit 'cm²' or omitting units altogether instead of volume unit 'cm³'.",
              mistakeTa: "The answer key allocates ½ mark for the final boxed answer with proper cubic units.",
              correction: "Always box the final answer with complete units: 'Volume of the toy = 94.2 cm³'."
            }
          ]
        }
      ]
    },
    {
      id: "sec_m_em_7_2",
      title: "Section 2: Volume of Standard & Combined Solids",
      author: "Chapter 7: Mensuration",
      questions: [
        {
          id: "m_em_7_2_1",
          type: "1m",
          mark: "1 Mark",
          q: "The ratio of the volumes of two spheres is 8 : 27. The ratio of their surface areas is:",
          options: ["A) 2 : 3", "B) 4 : 9", "C) 8 : 27", "D) 16 : 81"],
          ans: "Answer: <b>B) 4 : 9</b><br>Explanation: V₁/V₂ = r₁³/r₂³ = 8/27 ➔ r₁/r₂ = 2/3. Surface Area ratio = r₁²/r₂² = (2/3)² = 4/9."
        },
        {
          id: "m_em_7_2_2",
          type: "2m",
          mark: "2 Marks",
          isImportant: true,
          q: "Find the volume of a right circular cone whose base radius is 7 cm and height is 24 cm.",
          ans: `<div style="line-height:1.8;">
            Given: Radius r = 7 cm, Height h = 24 cm.<br>
            Volume V = (1/3)πr²h<br>
            = (1/3) × (22/7) × 7 × 7 × 24<br>
            = 22 × 7 × 8 = <b>1232 cm³</b>.
          </div>`
        },
        {
          id: "m_em_7_2_3",
          type: "5m",
          mark: "5 Marks",
          examTag: "5 Mark Exam Model",
          isImportant: true,
          q: "A tent is in the shape of a cylinder surmounted by a conical top. If the height and diameter of the cylindrical part are 2.1 m and 4 m respectively, and the slant height of the top is 2.8 m, find the area of the canvas used for making the tent.",
          diagramCaption: "Structure of the tent: Cylindrical base (h = 2.1 m, r = 2 m) surmounted by conical roof (l = 2.8 m). Open floor base.",
          diagramSvg: `<div style="max-width:320px; margin:12px auto; background:#ffffff; border:1.5px solid #cbd5e1; border-radius:12px; padding:12px; box-shadow:0 2px 8px rgba(0,0,0,0.06); text-align:center;">
            <div style="font-size:12px; font-weight:700; color:#1e3a8a; margin-bottom:8px;">🎪 Tent Structure Geometrical Illustration</div>
            <svg viewBox="0 0 320 390" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; display:block; aspect-ratio:320/390;">
              <defs>
                <linearGradient id="tentRoofGrad7_2_em" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#e0f2fe"/>
                  <stop offset="50%" stop-color="#bae6fd"/>
                  <stop offset="100%" stop-color="#e0f2fe"/>
                </linearGradient>
                <linearGradient id="tentWallGrad7_2_em" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#f0fdf4"/>
                  <stop offset="50%" stop-color="#dcfce7"/>
                  <stop offset="100%" stop-color="#f0fdf4"/>
                </linearGradient>
              </defs>

              <!-- Conical Top (Roof) -->
              <polygon points="160,40 70,140 250,140" fill="url(#tentRoofGrad7_2_em)" stroke="#0284c7" stroke-width="2.2" stroke-linejoin="round"/>

              <!-- Interface Ellipse (Between Cone & Cylinder) -->
              <ellipse cx="160" cy="140" rx="90" ry="20" fill="#bae6fd" fill-opacity="0.4" stroke="#0284c7" stroke-width="1.8" stroke-dasharray="5,4"/>

              <!-- Cylindrical Base Body (Walls) -->
              <rect x="70" y="140" width="180" height="120" fill="url(#tentWallGrad7_2_em)" stroke="none"/>
              <line x1="70" y1="140" x2="70" y2="260" stroke="#16a34a" stroke-width="2.2"/>
              <line x1="250" y1="140" x2="250" y2="260" stroke="#16a34a" stroke-width="2.2"/>

              <!-- Bottom Base Ellipse (Ground Level) -->
              <ellipse cx="160" cy="260" rx="90" ry="20" fill="#f1f5f9" fill-opacity="0.6" stroke="#16a34a" stroke-width="2"/>
              <ellipse cx="160" cy="260" rx="90" ry="20" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4"/>

              <!-- Slant Height Dimension Line (l = 2.8 m) on Cone -->
              <line x1="210" y1="80" x2="258" y2="133" stroke="#e11d48" stroke-width="2"/>
              <text x="245" y="95" font-size="12" fill="#e11d48" font-weight="bold">l = 2.8 m</text>

              <!-- Cylinder Height Dimension Line (h = 2.1 m) on Left -->
              <line x1="45" y1="140" x2="45" y2="260" stroke="#16a34a" stroke-width="1.5"/>
              <line x1="38" y1="140" x2="52" y2="140" stroke="#16a34a" stroke-width="1.5"/>
              <line x1="38" y1="260" x2="52" y2="260" stroke="#16a34a" stroke-width="1.5"/>
              <text x="40" y="205" font-size="12" fill="#15803d" font-weight="bold" text-anchor="end">h = 2.1 m</text>

              <!-- Base Diameter Line (d = 4 m ➔ r = 2 m) -->
              <line x1="70" y1="260" x2="250" y2="260" stroke="#dc2626" stroke-width="2"/>
              <circle cx="70" cy="260" r="3" fill="#1e293b"/>
              <circle cx="250" cy="260" r="3" fill="#1e293b"/>
              <circle cx="160" cy="260" r="3.5" fill="#dc2626"/>
              <text x="60" y="264" font-size="11" fill="#334155" font-weight="bold">A</text>
              <text x="256" y="264" font-size="11" fill="#334155" font-weight="bold">B</text>
              <text x="160" y="254" font-size="11" fill="#dc2626" font-weight="bold" text-anchor="middle">r = 2 m</text>

              <!-- Apex Label -->
              <circle cx="160" cy="40" r="3" fill="#0284c7"/>
              <text x="160" y="28" font-size="12" fill="#0369a1" font-weight="bold" text-anchor="middle">Apex P</text>

              <!-- Conical Top Formula Callout -->
              <text x="160" y="115" font-size="11" fill="#0284c7" font-weight="bold" text-anchor="middle">Cone CSA = πrl = 17.6 m²</text>

              <!-- Cylinder Formula Callout -->
              <text x="160" y="195" font-size="11" fill="#15803d" font-weight="bold" text-anchor="middle">Cylinder CSA = 2πrh = 26.4 m²</text>

              <!-- Diameter Dimension Label Below Base -->
              <text x="160" y="295" font-size="11.5" fill="#475569" font-weight="bold" text-anchor="middle">Diameter = 4 m (Radius r = 2 m)</text>

              <!-- Warning / Note Badge: Open Floor -->
              <rect x="25" y="310" width="270" height="26" rx="5" fill="#fff7ed" stroke="#f97316" stroke-width="1"/>
              <text x="160" y="327" font-size="11" fill="#c2410c" font-weight="bold" text-anchor="middle">⚠️ Floor is open — No canvas needed for base</text>

              <!-- Total Area Callout Box -->
              <rect x="40" y="345" width="240" height="32" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
              <text x="160" y="366" font-size="12.5" fill="#15803d" font-weight="bold" text-anchor="middle">Total Canvas Area Required = 44 m²</text>
            </svg>
          </div>`,
          ans: `<div style="line-height:1.9;">
            <div style="background:#eff6ff; border-left:4px solid #2563eb; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>Step 1: Given Data:</b><br>
              • Diameter of cylindrical part, d = 4 m ➔ Radius r = 4 / 2 = <b>2 m</b><br>
              • Height of cylindrical part, h = <b>2.1 m</b><br>
              • Slant height of conical top, l = <b>2.8 m</b><br>
              • Value of π = <b>22/7</b><br>
              <span style="color:#b91c1c; font-weight:700;">⚠️ Important Note: The bottom of the tent is open ground. Therefore, circular base area πr² is NOT covered by canvas. Only the curved surface areas are calculated.</span>
            </div>

            <div style="background:#f8fafc; border-left:4px solid #0284c7; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>Step 2: Formula:</b><br>
              • Total Area of canvas used = CSA of Cylinder (CSA₁) + CSA of Conical top (CSA₂)<br>
              • Curved Surface Area of Cylinder, CSA₁ = <b>2πrh</b><br>
              • Curved Surface Area of Cone, CSA₂ = <b>πrl</b>
            </div>

            <div style="background:#f0fdf4; border-left:4px solid #16a34a; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>Step 3: Curved Surface Area of Cylindrical Part (CSA₁):</b><br>
              CSA₁ = 2πrh<br>
              = 2 × (22/7) × 2 × 2.1<br>
              = (88 × 2.1) / 7 = 88 × 0.3 = <b>26.4 m²</b>
            </div>

            <div style="background:#e0f2fe; border-left:4px solid #0284c7; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>Step 4: Curved Surface Area of Conical Top (CSA₂):</b><br>
              CSA₂ = πrl<br>
              = (22/7) × 2 × 2.8<br>
              = (44 × 2.8) / 7 = 44 × 0.4 = <b>17.6 m²</b>
            </div>

            <div style="background:#fefce8; border-left:4px solid #ca8a04; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>Step 5: Total Area of Canvas Required (A):</b><br>
              Total Canvas Area A = CSA₁ + CSA₂<br>
              = 26.4 + 17.6 = <b>44 m²</b><br><br>
              <div style="background:#ffffff; border:1px dashed #ca8a04; padding:8px 12px; border-radius:6px;">
                <b>Alternative Method (Combined Formula):</b><br>
                A = πr(2h + l)<br>
                = (22/7) × 2 × [2(2.1) + 2.8]<br>
                = (44/7) × [4.2 + 2.8]<br>
                = (44/7) × 7.0 = <b>44 m²</b>
              </div>
            </div>

            <div style="margin-top:14px; padding:12px; background:#eff6ff; border:2px solid #2563eb; border-radius:8px; text-align:center;">
              <span style="font-size:16px; font-weight:800; color:#1e40af;">Final Answer: Area of canvas needed for making the tent = 44 m²</span>
            </div>

            <div style="margin-top:12px; font-size:13px; color:#475569; background:#f8fafc; padding:10px; border-radius:6px; border:1px solid #e2e8f0;">
              <b>💡 Public Exam Tips:</b><br>
              1. Tent base is open ground — DO NOT include circular base area πr².<br>
              2. Slant height l = 2.8 m is given directly; no need to use √(r² + h²).<br>
              3. Final unit is area unit (m² or sq.m), not volume unit (m³).
            </div>
          </div>`,
          commonMistakes: [
            {
              type: "Adding Base Area (Tent Floor Needs No Canvas)",
              icon: "⚠️",
              deduction: "-1 Mark",
              mistake: "The floor of a tent is on the ground and is open. Students mistakenly calculate Total Surface Area (TSA) by adding base area πr² to the canvas area.",
              mistakeTa: "The bottom of the tent is open; canvas is used only for the curved walls and conical roof.",
              correction: "Area of canvas = CSA of Cylinder + CSA of Cone = 2πrh + πrl (do NOT add πr²)."
            },
            {
              type: "Diameter vs Radius Slip (d = 4 m ➔ r = 2 m)",
              icon: "📐",
              deduction: "-1 Mark",
              mistake: "Substituting diameter 4 m as radius r = 4 m instead of dividing by 2 to get r = 2 m.",
              mistakeTa: "Carelessly using diameter directly results in 4 times greater area calculation.",
              correction: "Explicitly calculate radius first: r = d / 2 = 4 / 2 = 2 m."
            },
            {
              type: "Unnecessary Slant Height Calculation (l = 2.8 m is Already Given)",
              icon: "⏱️",
              deduction: "-½ Mark",
              mistake: "The slant height of the cone l = 2.8 m is already given in the question. Students get confused and waste time computing l = √(h² + r²) using cylinder height 2.1 m, getting incorrect results.",
              mistakeTa: "Slant height l = 2.8 m is directly given; no extra formula needed to find l.",
              correction: "Directly substitute the given slant height l = 2.8 m into the conical CSA formula πrl."
            }
          ]
        }
      ]
    },
    {
      id: "sec_m_em_7_3",
      title: "Section 3: Conversion & Melting of Solids",
      author: "Chapter 7: Mensuration",
      questions: [
        {
          id: "m_em_7_3_1",
          type: "1m",
          mark: "1 Mark",
          q: "When a metallic sphere of radius R is melted and recast into a cylinder of base radius R, the height of the cylinder is:",
          options: ["A) (2/3)R", "B) (4/3)R", "C) 2R", "D) 4R"],
          ans: "Answer: <b>B) (4/3)R</b><br>Explanation: πR²h = (4/3)πR³ ➔ h = (4/3)R."
        },
        {
          id: "m_em_7_3_2",
          videoUrl: "https://youtu.be/vVKlLCox73o",
          type: "5m",
          mark: "5 Marks",
          examTag: "Board Exam Model (Example 7.29)",
          isImportant: true,
          q: "A metallic sphere of radius 16 cm is melted and recast into small spheres each of radius 2 cm. How many small spheres can be obtained?",
                    blackboard: {
            title: "Melting and Recasting Solid Sphere (R = 16 cm into r = 2 cm)",
            engTitle: "Melting and Recasting Solid Sphere (R = 16 cm into r = 2 cm)",
            steps: [
              {
                stepNum: 1,
                badge: "① Step 1 — Given Dimensions",
                badgeEn: "① Step 1 — Given Dimensions",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800; font-size:16px;">Step 1 — Given Dimensions of Spheres</div>
                  <div class="bb-box-cyan" style="background:#0f172a; border:2px solid #38bdf8; border-radius:10px; padding:12px; margin-top:8px;">
                    <div class="bb-line" style="color:#e2e8f0; font-size:14.5px; line-height:1.7;">
                      • Radius of big metallic sphere: <b>R = 16 cm</b><br>
                      • Radius of each small recast sphere: <b>r = 2 cm</b><br>
                      • Let <b>n</b> be the number of small spheres obtained.
                    </div>
                  </div>
                `,
                audioScriptEn: "Step 1. Given dimensions. Radius of big metallic sphere R equals 16 cm. Radius of each small sphere r equals 2 cm. Let n be the number of small spheres.",
                audioScriptTa: "படி 1. கொடுக்கப்பட்ட அளவுகள்: பெரிய உலோகக் கோளத்தின் ஆரம் R = 16 செ.மீ. சிறிய கோளத்தின் ஆரம் r = 2 செ.மீ. சிறிய கோளங்களின் எண்ணிக்கை n என்க."
              },
              {
                stepNum: 2,
                badge: "② Step 2 — Conservation of Volume",
                badgeEn: "② Step 2 — Conservation of Volume",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800; font-size:16px;">Step 2 — Law of Conservation of Volume</div>
                  <div class="bb-box-cyan" style="background:#0f172a; border:2px solid #38bdf8; border-radius:10px; padding:12px; margin-top:8px;">
                    <div class="bb-line" style="color:#e2e8f0; font-size:14.5px; line-height:1.7;">
                      When a solid is melted and recast, total volume remains unchanged:<br>
                      <div style="background:#1e293b; border:1.5px solid #fde047; border-radius:8px; padding:10px; text-align:center; color:#fde047; font-size:15px; font-weight:800; margin:10px 0;">
                        Total Volume of 'n' Small Spheres = Volume of Big Sphere
                      </div>
                      <span style="font-size:15px; color:#38bdf8; font-weight:700;">n × (Volume of 1 small sphere) = Volume of big sphere</span>
                    </div>
                  </div>
                `,
                audioScriptEn: "Step 2. Law of conservation of volume. Total volume of n small spheres equals volume of the large sphere.",
                audioScriptTa: "படி 2. கனஅளவு மாறாக் கொள்கை: n சிறிய கோளங்களின் மொத்தக் கனஅளவு = பெரிய கோளத்தின் கனஅளவு."
              },
              {
                stepNum: 3,
                badge: "③ Step 3 — Formula & π Cancellation",
                badgeEn: "③ Step 3 — Formula & π Cancellation",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800; font-size:16px;">Step 3 — Formula Derivation & π Cancellation</div>
                  <div class="bb-box-cyan" style="background:#0f172a; border:2px solid #38bdf8; border-radius:10px; padding:12px; margin-top:8px;">
                    <div class="bb-line" style="color:#e2e8f0; font-size:14.5px; line-height:1.8;">
                      Volume of sphere = <b>(4/3) π r³</b><br><br>
                      n = [ (4/3) π R³ ] / [ (4/3) π r³ ]<br><br>
                      <span style="color:#4ade80; font-weight:700;">(4/3)π cancels directly from both numerator and denominator:</span><br>
                      <div style="background:#1e293b; border:1.5px solid #38bdf8; border-radius:8px; padding:8px; text-align:center; margin-top:6px; color:#38bdf8; font-size:16px; font-weight:800;">
                        n = R³ / r³ = (R / r)³
                      </div>
                    </div>
                  </div>
                `,
                audioScriptEn: "Step 3. Formula derivation. Volume of sphere equals four-thirds pi r cubed. The constant four-thirds pi cancels completely, giving n equals (R divided by r) whole cubed.",
                audioScriptTa: "படி 3. சூத்திரச் சுருக்குதல்: நான்கு கீழ் மூன்று பை நேரடியாக நீங்குகிறது. எனவே n = (R கீழ் r) ஹோல் க்யூப்."
              },
              {
                stepNum: 4,
                badge: "④ Step 4 — Substitution & Final Answer",
                badgeEn: "④ Step 4 — Substitution & Final Answer",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800; font-size:16px;">Step 4 — Substitution & Calculation</div>
                  <div class="bb-box-cyan" style="background:#0f172a; border:2px solid #4ade80; border-radius:10px; padding:12px; margin-top:8px;">
                    <div class="bb-line" style="color:#e2e8f0; font-size:15px; line-height:1.8;">
                      n = (16 / 2)³<br>
                      n = 8³<br>
                      n = 8 × 8 × 8 = 64 × 8 = <b>512</b><br><br>
                      <div style="background:#14532d; border:2.5px solid #22c55e; border-radius:10px; padding:12px; text-align:center;">
                        <span style="color:#ffffff; font-size:13px; font-weight:700; display:block; margin-bottom:4px;">FINAL ANSWER:</span>
                        <span style="color:#fde047; font-size:20px; font-weight:900;">
                          Number of small spheres obtained = 512
                        </span>
                      </div>
                    </div>
                  </div>
                `,
                audioScriptEn: "Step 4. Substitution and answer. n equals 8 cubed, which is 512. Therefore, 512 small spheres can be obtained.",
                audioScriptTa: "படி 4. பிரதியிடல் மற்றும் விடை: n = 8 க்யூப் = 512. எனவே உருவாக்கப்படும் சிறிய கோளங்களின் எண்ணிக்கை 512 ஆகும்."
              }
            ]
          },
diagramCaption: "Recasting of Solid Metallic Sphere: Large Sphere (R = 16 cm) melted and recast into 512 Small Spheres (r = 2 cm).",
          diagramSvg: `<div style="max-width:340px; margin:12px auto; background:#ffffff; border:1.5px solid #cbd5e1; border-radius:12px; padding:12px; box-shadow:0 2px 8px rgba(0,0,0,0.06); text-align:center;">
            <div style="font-size:12px; font-weight:700; color:#1e3a8a; margin-bottom:8px;">🔥 Melting &amp; Recasting: Solid Metallic Spheres</div>
            <svg viewBox="0 0 340 260" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; display:block; aspect-ratio:340/260;">
              <defs>
                <radialGradient id="sphereBigEm" cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stop-color="#93c5fd"/>
                  <stop offset="40%" stop-color="#3b82f6"/>
                  <stop offset="100%" stop-color="#1e3a8a"/>
                </radialGradient>
                <radialGradient id="sphereSmallEm" cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stop-color="#fdba74"/>
                  <stop offset="40%" stop-color="#f97316"/>
                  <stop offset="100%" stop-color="#9a3412"/>
                </radialGradient>
                <linearGradient id="arrowGradEm" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#ef4444"/>
                  <stop offset="100%" stop-color="#f97316"/>
                </linearGradient>
              </defs>

              <!-- Big Metallic Sphere -->
              <circle cx="75" cy="100" r="55" fill="url(#sphereBigEm)" stroke="#1e40af" stroke-width="2"/>
              <line x1="75" y1="100" x2="130" y2="100" stroke="#ffffff" stroke-width="2" stroke-dasharray="3,3"/>
              <circle cx="75" cy="100" r="3" fill="#ffffff"/>
              <circle cx="130" cy="100" r="2.5" fill="#ffffff"/>
              <text x="102" y="93" font-size="11" fill="#ffffff" font-weight="bold" text-anchor="middle">R = 16 cm</text>
              <text x="75" y="172" font-size="12" fill="#1e3a8a" font-weight="bold" text-anchor="middle">Large Sphere</text>
              <text x="75" y="188" font-size="10.5" fill="#475569" text-anchor="middle">V₁ = ⁴⁄₃ π R³</text>

              <!-- Transformation Melting Arrow -->
              <g transform="translate(138, 75)">
                <path d="M 0,20 L 30,20 L 30,10 L 52,28 L 30,46 L 30,36 L 0,36 Z" fill="url(#arrowGradEm)"/>
                <text x="26" y="5" font-size="10" fill="#dc2626" font-weight="bold" text-anchor="middle">🔥 Melted &amp;</text>
                <text x="26" y="60" font-size="10" fill="#ea580c" font-weight="bold" text-anchor="middle">Recast</text>
              </g>

              <!-- Small Spheres Cluster -->
              <g transform="translate(205, 45)">
                <circle cx="18" cy="16" r="14" fill="url(#sphereSmallEm)" stroke="#9a3412" stroke-width="1.2"/>
                <circle cx="54" cy="16" r="14" fill="url(#sphereSmallEm)" stroke="#9a3412" stroke-width="1.2"/>
                <circle cx="90" cy="16" r="14" fill="url(#sphereSmallEm)" stroke="#9a3412" stroke-width="1.2"/>

                <circle cx="18" cy="50" r="14" fill="url(#sphereSmallEm)" stroke="#9a3412" stroke-width="1.2"/>
                <circle cx="54" cy="50" r="14" fill="url(#sphereSmallEm)" stroke="#9a3412" stroke-width="1.2"/>
                <circle cx="90" cy="50" r="14" fill="url(#sphereSmallEm)" stroke="#9a3412" stroke-width="1.2"/>

                <circle cx="18" cy="84" r="14" fill="url(#sphereSmallEm)" stroke="#9a3412" stroke-width="1.2"/>
                <circle cx="54" cy="84" r="14" fill="url(#sphereSmallEm)" stroke="#9a3412" stroke-width="1.2"/>
                <circle cx="90" cy="84" r="14" fill="url(#sphereSmallEm)" stroke="#9a3412" stroke-width="1.2"/>

                <line x1="54" y1="50" x2="68" y2="50" stroke="#ffffff" stroke-width="1.5"/>
                <text x="54" y="115" font-size="11" fill="#c2410c" font-weight="bold" text-anchor="middle">r = 2 cm (each)</text>
                <text x="54" y="130" font-size="10" fill="#475569" text-anchor="middle">V₂ = ⁴⁄₃ π r³</text>
              </g>

              <!-- Bottom Result Callout -->
              <rect x="20" y="212" width="300" height="34" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
              <text x="170" y="234" font-size="12.5" fill="#1e40af" font-weight="bold" text-anchor="middle">Number of Small Spheres n = (16/2)³ = 8³ = 512</text>
            </svg>
          </div>`,
          ans: `<div style="line-height:1.9;">
            <div style="background:#eff6ff; border-left:4px solid #2563eb; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>Step 1: Given Data:</b><br>
              • Radius of big metallic sphere, R = <b>16 cm</b><br>
              • Radius of small sphere, r = <b>2 cm</b>
            </div>

            <div style="background:#f8fafc; border-left:4px solid #0284c7; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>Step 2: Principle of Conservation of Volume:</b><br>
              When a solid is melted and recast into other solids without wastage:<br>
              • <b>Total Volume of 'n' small spheres = Volume of the big sphere</b><br>
              • n × Volume of one small sphere = Volume of big sphere
            </div>

            <div style="background:#fff7ed; border-left:4px solid #ea580c; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>Step 3: Formula Derivation &amp; Simplification:</b><br>
              Volume of a solid sphere = <b>(4/3)πr³</b><br><br>
              Number of small spheres (n) = <span style="font-size:15px; font-weight:700;">(Volume of big sphere) / (Volume of one small sphere)</span><br>
              n = <span style="font-size:15px; font-weight:700;">[(4/3)πR³] / [(4/3)πr³]</span><br><br>
              <i>Notice that (4/3)π in both numerator and denominator cancel out completely:</i><br>
              <b>n = R³ / r³ = (R / r)³</b>
            </div>

            <div style="background:#f0fdf4; border-left:4px solid #16a34a; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>Step 4: Substitution &amp; Quick Calculation:</b><br>
              n = (16 / 2)³<br>
              n = 8³<br>
              n = 8 × 8 × 8 = 64 × 8 = <b>512</b>
            </div>

            <div style="margin-top:14px; padding:12px; background:#eff6ff; border:2px solid #2563eb; border-radius:8px; text-align:center;">
              <span style="font-size:16px; font-weight:800; color:#1e40af;">Final Answer: Number of small spheres obtained = 512</span>
            </div>

            <div style="margin-top:12px; font-size:13px; color:#475569; background:#f8fafc; padding:10px; border-radius:6px; border:1px solid #e2e8f0;">
              <b>💡 Public Exam Tips:</b><br>
              1. <b>Never multiply out π (22/7 or 3.14):</b> Both (4/3) and π cancel out directly. Calculating full decimal volume wastes time and introduces calculation mistakes.<br>
              2. Divide the radii first: (16 / 2) = 8, then cube 8 to get 8³ = 512.<br>
              3. The answer is a dimensionless count (number of spheres), so do not attach units like cm or cm³.
            </div>
          </div>`,
          commonMistakes: [
            {
              type: "Multiplying π and Calculating Decimal Volumes (Wasting Exam Time)",
              icon: "⏱️",
              deduction: "-1 Mark",
              mistake: "Students substitute π = 22/7 or 3.14 and calculate the full volume of both spheres (e.g. 17157.28 cm³ and 33.51 cm³), leading to lengthy decimal long division and careless arithmetic errors.",
              mistakeTa: "Multiplying out (4/3)π instead of cancelling it wastes 10 minutes and often produces wrong decimal answers.",
              correction: "Always cancel the common constant factor (4/3)π first: n = (R / r)³ = (16 / 2)³ = 8³ = 512."
            },
            {
              type: "Forgetting to Cube (Using R/r instead of R³/r³)",
              icon: "🔢",
              deduction: "-2 Marks",
              mistake: "Dividing radii directly without cubing: writing n = 16 / 2 = 8 spheres. Volume is proportional to r³, not r.",
              mistakeTa: "Volume depends on the cube of the radius. Writing 16/2 = 8 is completely wrong.",
              correction: "Remember volume of a sphere is proportional to r³. Always cube the ratio: (16 / 2)³ = 8³ = 512."
            },
            {
              type: "Attaching Units to a Count (e.g. Writing '512 cm³')",
              icon: "📏",
              deduction: "-½ Mark",
              mistake: "Writing the final answer as '512 cm³' or '512 cm' instead of just the count '512 small spheres'.",
              mistakeTa: "The question asks 'How many small spheres', which is a number, not a volume.",
              correction: "Box the final answer as: 'Number of small spheres = 512'."
            }
          ]
        }
      ]
    }
  ]
};
