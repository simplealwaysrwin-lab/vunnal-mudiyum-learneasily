// 10th Standard Mathematics - Unit 5: Coordinate Geometry (English Medium)
// Tamil Nadu State Board Samacheer Kalvi Question Bank & Step-by-Step Solutions

const MATHS_EM_UNIT_5_DATA = {
  unitId: "math_em_u5",
  unitName: "Unit 5: Coordinate Geometry",
  subject: "Mathematics (English Medium)",
  syllabus: "Tamil Nadu State Board Samacheer Kalvi Class 10 Mathematics",

  // Key Formulas
  formulas: [
    { title: "Area of a Triangle", rule: "Area = (1/2) |(x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂))| sq. units" },
    { title: "Condition for Collinearity", rule: "Three points A, B, C are collinear if Area of ΔABC = 0" },
    { title: "Area of a Quadrilateral", rule: "Area = (1/2) |(x₁y₂ + x₂y₃ + x₃y₄ + x₄y₁) - (x₂y₁ + x₃y₂ + x₄y₃ + x₁y₄)| sq. units" },
    { title: "Slope of a Straight Line (m)", rule: "m = tan θ (when inclination θ is given) or m = (y₂ - y₁) / (x₂ - x₁) (two points given)" },
    { title: "Slope of ax + by + c = 0", rule: "m = -a / b = -(coefficient of x) / (coefficient of y)" },
    { title: "Parallel Lines Condition", rule: "Two non-vertical lines are parallel if and only if their slopes are equal: m₁ = m₂" },
    { title: "Perpendicular Lines Condition", rule: "Two non-vertical lines are perpendicular if and only if product of slopes is -1: m₁ · m₂ = -1" },
    { title: "Equation: Slope-Intercept Form", rule: "y = mx + c (where m is slope and c is y-intercept)" },
    { title: "Equation: Point-Slope Form", rule: "y - y₁ = m(x - x₁) (passing through (x₁, y₁) with slope m)" },
    { title: "Equation: Two-Point Form", rule: "(y - y₁) / (y₂ - y₁) = (x - x₁) / (x₂ - x₁) (passing through two points)" },
    { title: "Equation: Intercept Form", rule: "x/a + y/b = 1 (where a is x-intercept and b is y-intercept)" }
  ],

  subSections: [
    {
      id: "sec_m_em_5_1",
      title: "Section 1: Area of Triangles, Quadrilaterals & Collinear Points",
      author: "Chapter 5: Coordinate Geometry",
      questions: [
        {
          id: "m_em_5_1_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "Public Exam",
          q: "If the points (0, 0), (a, 0), and (0, b) are vertices of a triangle, what is its area?",
          options: ["A) ab", "B) (1/2) ab", "C) 2ab", "D) (1/4) ab"],
          ans: "Answer: <b>B) (1/2) ab</b><br>Explanation: Area = (1/2) |x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)| = (1/2) |0 + a(b - 0) + 0| = (1/2) ab."
        },
        {
          id: "m_em_5_1_2",
          type: "1m",
          mark: "1 Mark",
          q: "If three points A, B, C are collinear, then the area of triangle ABC is:",
          options: ["A) 1", "B) -1", "C) 0", "D) undefined"],
          ans: "Answer: <b>C) 0</b><br>Explanation: Points lying on the same straight line do not enclose any region, hence Area = 0."
        },
        {
          id: "m_em_5_1_3",
          examYear: "2023",
          type: "2m",
          mark: "2 Marks",
          examTag: "Public Exam 2023 (2M)",
          isImportant: true,
          q: "Find the area of the triangle whose vertices are (-3, 5), (5, 6), and (5, -2).",
          ans: "<div style=\"line-height:1.8;\"><b>Solution:</b><br>Let the vertices be A(x₁, y₁) = (-3, 5), B(x₂, y₂) = (5, 6), C(x₃, y₃) = (5, -2).<br>Formula: Area = (1/2) |(x₁y₂ + x₂y₃ + x₃y₁) - (x₂y₁ + x₃y₂ + x₁y₃)|<br>• x₁y₂ + x₂y₃ + x₃y₁ = (-3)(6) + (5)(-2) + (5)(5) = -18 - 10 + 25 = <b>-3</b><br>• x₂y₁ + x₃y₂ + x₁y₃ = (5)(5) + (5)(6) + (-3)(-2) = 25 + 30 + 6 = <b>61</b><br>Area = (1/2) |(-3) - (61)| = (1/2) |-64| = <b>32 sq. units</b>.</div>"
        },
        {
          id: "m_em_5_1_4",
          examYear: "2024, 2022",
          type: "5m",
          mark: "5 Marks",
          examTag: "Public Exam (5M)",
          isImportant: true,
          q: "Find the area of the quadrilateral whose vertices are (-9, -2), (-8, -4), (2, 2), and (1, -3).",
          chalkboard: {
            steps: [
              {
                stepNum: 1,
                title: "Plot & Arrange Vertices in Counter-Clockwise Order",
                badge: "Step 1",
                html: "Plotting roughly on the Cartesian plane gives the counter-clockwise order of vertices:<br><b>A(-9, -2), B(-8, -4), C(1, -3), and D(2, 2)</b>."
              },
              {
                stepNum: 2,
                title: "Write the Coordinate Matrix Form",
                badge: "Step 2",
                html: "Area = (1/2) [ (x₁y₂ + x₂y₃ + x₃y₄ + x₄y₁) - (x₂y₁ + x₃y₂ + x₄y₃ + x₁y₄) ]"
              },
              {
                stepNum: 3,
                title: "Calculate Cross Products",
                badge: "Step 3",
                html: "• Downward products: (-9)(-4) + (-8)(-3) + (1)(2) + (2)(-2) = 36 + 24 + 2 - 4 = <b>58</b><br>• Upward products: (-8)(-2) + (1)(-4) + (2)(-3) + (-9)(2) = 16 - 4 - 6 - 18 = <b>-12</b>"
              },
              {
                stepNum: 4,
                title: "Final Area Calculation",
                badge: "Step 4",
                html: "Area = (1/2) [ 58 - (-12) ] = (1/2) [ 58 + 12 ] = (1/2) [ 70 ] = <b style=\'color:#16a34a; font-size:16px;\'>35 sq. units</b>"
              }
            ]
          },
          ans: "<div style=\"line-height:1.8;\"><b>Step 1:</b> Order of vertices in counter-clockwise direction: A(-9, -2), B(-8, -4), C(1, -3), D(2, 2).<br><b>Step 2:</b> Area = (1/2) [ (x₁y₂ + x₂y₃ + x₃y₄ + x₄y₁) - (x₂y₁ + x₃y₂ + x₄y₃ + x₁y₄) ]<br><b>Step 3:</b> Product sum 1 = (-9)(-4) + (-8)(-3) + (1)(2) + (2)(-2) = 36 + 24 + 2 - 4 = <b>58</b><br>Product sum 2 = (-8)(-2) + (1)(-4) + (2)(-3) + (-9)(2) = 16 - 4 - 6 - 18 = <b>-12</b><br><b>Step 4:</b> Area = (1/2) [ 58 - (-12) ] = (1/2)(70) = <b>35 sq. units</b>.</div>"
        }
      ]
    },
    {
      id: "sec_m_em_5_2",
      title: "Section 2: Slope of a Straight Line & Parallel / Perpendicular Lines",
      author: "Chapter 5: Slope Properties",
      questions: [
        {
          id: "m_em_5_2_1",
          type: "1m",
          mark: "1 Mark",
          q: "What is the slope of a line whose angle of inclination is 60°?",
          options: ["A) 1/√3", "B) 1", "C) √3", "D) 0"],
          ans: "Answer: <b>C) √3</b><br>Explanation: Slope m = tan θ = tan 60° = √3."
        },
        {
          id: "m_em_5_2_2",
          type: "1m",
          mark: "1 Mark",
          q: "The slope of a line perpendicular to 2x + 3y - 5 = 0 is:",
          options: ["A) -2/3", "B) 3/2", "C) 2/3", "D) -3/2"],
          ans: "Answer: <b>B) 3/2</b><br>Explanation: Slope of given line m₁ = -2/3. For perpendicular line, m₂ = -1/m₁ = -1/(-2/3) = 3/2."
        },
        {
          id: "m_em_5_2_3",
          examYear: "2022",
          type: "2m",
          mark: "2 Marks",
          examTag: "Public Exam 2022 (2M)",
          isImportant: true,
          q: "Find the slope of a line passing through the points (5, √5) and (0, 0).",
          ans: "<div style=\"line-height:1.8;\"><b>Solution:</b><br>Formula: Slope m = (y₂ - y₁) / (x₂ - x₁)<br>Here (x₁, y₁) = (0, 0) and (x₂, y₂) = (5, √5).<br>m = (√5 - 0) / (5 - 0) = √5 / 5 = √5 / (√5 · √5) = <b>1 / √5</b>.</div>"
        },
        {
          id: "m_em_5_2_4",
          examYear: "2023",
          type: "5m",
          mark: "5 Marks",
          examTag: "Public Exam 2023 (5M)",
          isImportant: true,
          q: "Find the equation of the perpendicular bisector of the line segment joining the points A(-4, 2) and B(6, -4).",
          chalkboard: {
            steps: [
              {
                stepNum: 1,
                title: "Find the Midpoint of AB",
                badge: "Step 1",
                html: "Midpoint M = [ (x₁ + x₂)/2 , (y₁ + y₂)/2 ] = [ (-4 + 6)/2 , (2 - 4)/2 ] = <b>(1, -1)</b>."
              },
              {
                stepNum: 2,
                title: "Calculate Slope of Line Segment AB",
                badge: "Step 2",
                html: "Slope m₁ = (y₂ - y₁) / (x₂ - x₁) = (-4 - 2) / (6 - (-4)) = -6 / 10 = <b>-3/5</b>."
              },
              {
                stepNum: 3,
                title: "Find Slope of Perpendicular Bisector",
                badge: "Step 3",
                html: "Since lines are perpendicular, m₂ = -1 / m₁ = -1 / (-3/5) = <b>5/3</b>."
              },
              {
                stepNum: 4,
                title: "Determine Equation through Point (1, -1)",
                badge: "Step 4",
                html: "Using point-slope formula: y - y₁ = m(x - x₁)<br>y - (-1) = (5/3)(x - 1) ➔ 3(y + 1) = 5(x - 1) ➔ 3y + 3 = 5x - 5 ➔ <b style=\'color:#16a34a;\'>5x - 3y - 8 = 0</b>."
              }
            ]
          },
          ans: "<div style=\"line-height:1.8;\"><b>1. Midpoint of AB:</b> M = [(-4 + 6)/2, (2 - 4)/2] = <b>(1, -1)</b>.<br><b>2. Slope of AB:</b> m₁ = (-4 - 2)/(6 - (-4)) = -6/10 = <b>-3/5</b>.<br><b>3. Slope of perpendicular bisector:</b> m = -1/m₁ = <b>5/3</b>.<br><b>4. Equation:</b> y - y₁ = m(x - x₁) ➔ y - (-1) = (5/3)(x - 1) ➔ 3(y + 1) = 5(x - 1) ➔ <b>5x - 3y - 8 = 0</b>.</div>"
        }
      ]
    },

    // -------------------------------------------------------------
    // Additional Practice Questions (In-Text)
    // -------------------------------------------------------------
    {
      id: "sec_math_em_u5_add_practice",
      title: "Additional Practice Questions (In-Text)",
      author: "Unit 5: Coordinate Geometry - Extra Exam Practice",
      questions: [
        {
          id: "m_em_u5_add_q1",
          type: "2m",
          mark: "2 Marks | Additional Practice (In-Text)",
          sectionTag: "Additional Practice (In-Text)",
          isAdditionalPractice: true,
          subSectionId: "sec_math_em_u5_add_practice",
          q: "Find the distance between the points A(2, 3) and B(5, 7).",
          ans: `<div style="line-height:1.8;">
            <b>Given Points:</b> A(x₁, y₁) = (2, 3) and B(x₂, y₂) = (5, 7)<br><br>
            <b>Distance Formula:</b><br>
            d = √[(x₂ - x₁)² + (y₂ - y₁)²]<br><br>
            <b>Substitute coordinates:</b><br>
            d = √[(5 - 2)² + (7 - 3)²]<br>
            d = √[3² + 4²]<br>
            d = √[9 + 16]<br>
            d = √25 = <b>5 units</b><br><br>
            <div style="padding:10px 14px; background:#f0fdf4; border-left:4px solid #16a34a; border-radius:6px; font-weight:700; color:#15803d;">
              Distance between A and B = 5 units
            </div>
          </div>`,
          audioScript: "Given points A(2, 3) and B(5, 7). Distance formula d equals square root of (x2 minus x1) squared plus (y2 minus y1) squared. Substituting gives square root of (5 minus 2) squared plus (7 minus 3) squared, which is square root of 3 squared plus 4 squared, equals square root of 9 plus 16, which is square root of 25. The distance is 5 units."
        },
        {
          id: "m_em_u5_add_q2",
          type: "2m",
          mark: "2 Marks | Additional Practice (In-Text)",
          sectionTag: "Additional Practice (In-Text)",
          isAdditionalPractice: true,
          subSectionId: "sec_math_em_u5_add_practice",
          q: "Find the midpoint of the line segment joining the points A(4, 6) and B(8, 10).",
          ans: `<div style="line-height:1.8;">
            <b>Given Points:</b> A(x₁, y₁) = (4, 6) and B(x₂, y₂) = (8, 10)<br><br>
            <b>Midpoint Formula:</b><br>
            M(x, y) = ((x₁ + x₂) / 2, (y₁ + y₂) / 2)<br><br>
            <b>Substitute coordinates:</b><br>
            M = ((4 + 8) / 2, (6 + 10) / 2)<br>
            M = (12 / 2, 16 / 2)<br>
            <b>M = (6, 8)</b><br><br>
            <div style="padding:10px 14px; background:#f0fdf4; border-left:4px solid #16a34a; border-radius:6px; font-weight:700; color:#15803d;">
              Midpoint M = (6, 8)
            </div>
          </div>`,
          audioScript: "Given points A(4, 6) and B(8, 10). Midpoint formula M equals ((x1 plus x2) over 2, (y1 plus y2) over 2). Substituting gives (4 plus 8 over 2, 6 plus 10 over 2), which is (12 over 2, 16 over 2). Midpoint is (6, 8)."
        },
        {
          id: "m_em_u5_add_q3",
          type: "5m",
          mark: "5 Marks | Additional Practice (In-Text)",
          sectionTag: "Additional Practice (In-Text)",
          isAdditionalPractice: true,
          subSectionId: "sec_math_em_u5_add_practice",
          q: "Find the area of the triangle whose vertices are A(1, 2), B(5, 2) and C(3, 6).",
          ans: `<div style="line-height:1.8;">
            <b>Given Vertices:</b> A(1, 2), B(5, 2), C(3, 6)<br><br>
            <b>Area of Triangle Formula:</b><br>
            Area = (1 / 2) |(x₁y₂ + x₂y₃ + x₃y₁) - (x₂y₁ + x₃y₂ + x₁y₃)|<br><br>
            <b>Step 1: Calculate downwards and upwards products:</b><br>
            • (x₁y₂ + x₂y₃ + x₃y₁) = 1(2) + 5(6) + 3(2) = 2 + 30 + 6 = <b>38</b><br>
            • (x₂y₁ + x₃y₂ + x₁y₃) = 5(2) + 3(2) + 1(6) = 10 + 6 + 6 = <b>22</b><br><br>
            <b>Step 2: Substitute into formula:</b><br>
            Area = (1 / 2) |38 - 22|<br>
            Area = (1 / 2) |16|<br>
            Area = <b>8 sq. units</b><br><br>
            <div style="padding:10px 14px; background:#f0fdf4; border-left:4px solid #16a34a; border-radius:6px; font-weight:700; color:#15803d;">
              Area of ΔABC = 8 square units
            </div>
          </div>`,
          audioScript: "Given vertices A(1, 2), B(5, 2), C(3, 6). Formula for area of triangle is half of absolute value of (x1 y2 plus x2 y3 plus x3 y1) minus (x2 y1 plus x3 y2 plus x1 y3). First product sum equals 2 plus 30 plus 6, which is 38. Second product sum equals 10 plus 6 plus 6, which is 22. Area equals half of (38 minus 22), which is half of 16, giving 8 square units."
        }        ,
        {
          id: "m_em_u5_add_q4",
          type: "2m",
          mark: "2 Marks | Additional Practice (In-Text)",
          sectionTag: "Additional Practice (In-Text)",
          isAdditionalPractice: true,
          subSectionId: "sec_math_em_u5_add_practice",
          q: "Identify the quadrants in which the following points lie on the Cartesian plane: A(2, 3), B(-2, 3), C(-2, -3) and D(2, -3). State the sign rule for each quadrant.",
          ans: `<div style="line-height:1.8;">
            <b>Cartesian Plane Quadrant Sign Rules:</b><br>
            • Quadrant I: x > 0, y > 0 &nbsp;(+ , +)<br>
            • Quadrant II: x < 0, y > 0 &nbsp;(- , +)<br>
            • Quadrant III: x < 0, y < 0 &nbsp;(- , -)<br>
            • Quadrant IV: x > 0, y < 0 &nbsp;(+ , -)<br><br>
            <b>Position of Given Points:</b><br>
            • <b>A(2, 3):</b> Both x and y are positive (+, +) &nbsp;⇒&nbsp; <b>Quadrant I (First Quadrant)</b><br>
            • <b>B(-2, 3):</b> x is negative, y is positive (-, +) &nbsp;⇒&nbsp; <b>Quadrant II (Second Quadrant)</b><br>
            • <b>C(-2, -3):</b> Both x and y are negative (-, -) &nbsp;⇒&nbsp; <b>Quadrant III (Third Quadrant)</b><br>
            • <b>D(2, -3):</b> x is positive, y is negative (+, -) &nbsp;⇒&nbsp; <b>Quadrant IV (Fourth Quadrant)</b><br><br>
            <div style="padding:10px 14px; background:#f0fdf4; border-left:4px solid #16a34a; border-radius:6px; font-weight:700; color:#15803d;">
              A(2, 3) ∈ Quad I &nbsp;|&nbsp; B(-2, 3) ∈ Quad II &nbsp;|&nbsp; C(-2, -3) ∈ Quad III &nbsp;|&nbsp; D(2, -3) ∈ Quad IV
            </div>
          </div>`,
          audioScript: "In a Cartesian plane: Point A(2, 3) has both positive coordinates, so it lies in Quadrant 1. Point B(-2, 3) has negative x and positive y, so it lies in Quadrant 2. Point C(-2, -3) has both negative coordinates, so it lies in Quadrant 3. Point D(2, -3) has positive x and negative y, so it lies in Quadrant 4."
        }

      ]
    }
  ]
};
