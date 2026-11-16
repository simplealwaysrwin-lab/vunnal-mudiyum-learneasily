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
          ans: `<div style="line-height:1.8;">
            <b>Given:</b><br>
            Diameter of base = 6 cm ➔ Radius r = 3 cm.<br>
            Height of cone h = 4 cm.<br>
            Radius of hemisphere r = 3 cm.<br><br>
            <b>Formula:</b><br>
            Total Volume = Volume of Cone + Volume of Hemisphere<br>
            = (1/3)πr²h + (2/3)πr³<br>
            = (1/3)πr² (h + 2r)<br><br>
            <b>Calculation:</b><br>
            = (1/3) × 3.14 × 3² × [4 + 2(3)]<br>
            = (1/3) × 3.14 × 9 × [4 + 6]<br>
            = 3.14 × 3 × 10 = <b>94.2 cm³</b>.<br>
            <b>Answer:</b> The volume of the toy is <b>94.2 cm³</b>.
          </div>`
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
          ans: `<div style="line-height:1.8;">
            <b>Given:</b><br>
            Diameter = 4 m ➔ Radius r = 2 m.<br>
            Height of cylinder h = 2.1 m.<br>
            Slant height of cone l = 2.8 m.<br><br>
            <b>Formula:</b><br>
            Total Canvas Area = CSA of Cylinder + CSA of Cone<br>
            = 2πrh + πrl<br>
            = πr(2h + l)<br><br>
            <b>Substitution:</b><br>
            = (22/7) × 2 × [2(2.1) + 2.8]<br>
            = (44/7) × [4.2 + 2.8]<br>
            = (44/7) × 7.0 = <b>44 m²</b>.<br>
            <b>Answer:</b> The area of the canvas needed is <b>44 m²</b>.
          </div>`
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
          type: "5m",
          mark: "5 Marks",
          examTag: "Important 5M",
          isImportant: true,
          q: "A metallic sphere of radius 16 cm is melted and recast into small spheres each of radius 2 cm. How many small spheres can be obtained?",
          ans: `<div style="line-height:1.8;">
            <b>Given:</b><br>
            Radius of big metallic sphere R = 16 cm.<br>
            Radius of small sphere r = 2 cm.<br><br>
            <b>Formula:</b><br>
            Number of small spheres (n) = (Volume of big sphere) / (Volume of one small sphere)<br>
            n = [(4/3)πR³] / [(4/3)πr³] = R³ / r³ = (R / r)³<br><br>
            <b>Calculation:</b><br>
            n = (16 / 2)³ = 8³ = <b>512</b>.<br>
            <b>Answer:</b> <b>512</b> small spheres can be obtained.
          </div>`
        }
      ]
    }
  ]
};
