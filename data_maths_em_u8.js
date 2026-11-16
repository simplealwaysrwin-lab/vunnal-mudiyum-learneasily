// 10th Standard Mathematics - Unit 8: Statistics and Probability (English Medium)
// Tamil Nadu State Board Samacheer Kalvi Question Bank & Step-by-Step Solutions

const MATHS_EM_UNIT_8_DATA = {
  unitId: "math_em_u8",
  unitName: "Unit 8: Statistics and Probability",
  subject: "Mathematics (English Medium)",
  syllabus: "Tamil Nadu State Board Samacheer Kalvi Class 10 Mathematics",

  // Key Formulas
  formulas: [
    { title: "Range (R)", rule: "R = L - S | Coefficient of Range = (L - S) / (L + S)" },
    { title: "Standard Deviation (Raw Data)", rule: "σ = √[Σ(x - x̄)² / n] = √[(Σd² / n)] where d = x - x̄" },
    { title: "Standard Deviation (First n natural numbers)", rule: "σ = √[(n² - 1) / 12]" },
    { title: "Variance", rule: "Variance = σ²" },
    { title: "Coefficient of Variation (C.V.)", rule: "C.V. = (σ / x̄) × 100% (The group with smaller C.V. is more consistent/stable)" },
    { title: "Classical Probability", rule: "P(A) = n(A) / n(S) where 0 ≤ P(A) ≤ 1 and P(S) = 1, P(∅) = 0" },
    { title: "Complementary Event", rule: "P(A') = 1 - P(A) ➔ P(A) + P(A') = 1" },
    { title: "Addition Theorem of Probability (2 Events)", rule: "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)" },
    { title: "Mutually Exclusive Events", rule: "If A and B are mutually exclusive, P(A ∩ B) = 0 ➔ P(A ∪ B) = P(A) + P(B)" },
    { title: "Addition Theorem (3 Events)", rule: "P(A ∪ B ∪ C) = P(A) + P(B) + P(C) - P(A ∩ B) - P(B ∩ C) - P(C ∩ A) + P(A ∩ B ∩ C)" }
  ],

  subSections: [
    {
      id: "sec_m_em_8_1",
      title: "Section 1: Measures of Dispersion (Range, SD & CV)",
      author: "Chapter 8: Statistics",
      questions: [
        {
          id: "m_em_8_1_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "Public Exam",
          q: "Which of the following is not a measure of dispersion?",
          options: ["A) Range", "B) Standard deviation", "C) Arithmetic mean", "D) Variance"],
          ans: "Answer: <b>C) Arithmetic mean</b> (Mean is a measure of central tendency, not dispersion)."
        },
        {
          id: "m_em_8_1_2",
          type: "1m",
          mark: "1 Mark",
          q: "The standard deviation of any 10 observations is 3. If each observation is multiplied by 4, the new standard deviation is:",
          options: ["A) 3", "B) 7", "C) 12", "D) 48"],
          ans: "Answer: <b>C) 12</b><br>Explanation: If each observation is multiplied by k, the standard deviation is also multiplied by k: new σ = 4 × 3 = 12."
        },
        {
          id: "m_em_8_1_3",
          type: "2m",
          mark: "2 Marks",
          examTag: "Important 2M",
          isImportant: true,
          q: "Find the range and coefficient of range of the following data: 25, 67, 48, 53, 18, 39, 44.",
          ans: `<div style="line-height:1.8;">
            Largest value (L) = 67<br>
            Smallest value (S) = 18<br>
            <b>Range (R):</b> R = L - S = 67 - 18 = <b>49</b>.<br>
            <b>Coefficient of Range:</b><br>
            = (L - S) / (L + S) = (67 - 18) / (67 + 18) = 49 / 85 ≈ <b>0.576</b>.
          </div>`
        },
        {
          id: "m_em_8_1_4",
          type: "2m",
          mark: "2 Marks",
          q: "Find the standard deviation of the first 21 natural numbers.",
          ans: `<div style="line-height:1.8;">
            Formula for first n natural numbers: σ = √[(n² - 1) / 12]<br>
            Here n = 21.<br>
            σ = √[(21² - 1) / 12] = √[(441 - 1) / 12]<br>
            = √[440 / 12] = √[36.67] ≈ <b>6.05</b>.
          </div>`
        },
        {
          id: "m_em_8_1_5",
          type: "5m",
          mark: "5 Marks",
          examTag: "Board Exam Model",
          isImportant: true,
          q: "The marks scored by two students A and B in 5 tests are given below. Who is more consistent?<br>A: 56, 64, 48, 60, 72<br>B: 68, 72, 70, 64, 76",
          ans: `<div style="line-height:1.8;">
            <b>For Student A:</b><br>
            Mean x̄_A = (56 + 64 + 48 + 60 + 72) / 5 = 300 / 5 = 60.<br>
            Deviations d = x - 60: -4, 4, -12, 0, 12.<br>
            d²: 16, 16, 144, 0, 144 ➔ Σd² = 320.<br>
            σ_A = √(320 / 5) = √64 = 8.<br>
            C.V._A = (σ / x̄) × 100 = (8 / 60) × 100 = <b>13.33%</b>.<br><br>
            <b>For Student B:</b><br>
            Mean x̄_B = (68 + 72 + 70 + 64 + 76) / 5 = 350 / 5 = 70.<br>
            Deviations d = x - 70: -2, 2, 0, -6, 6.<br>
            d²: 4, 4, 0, 36, 36 ➔ Σd² = 80.<br>
            σ_B = √(80 / 5) = √16 = 4.<br>
            C.V._B = (σ / x̄) × 100 = (4 / 70) × 100 = <b>5.71%</b>.<br><br>
            <b>Comparison:</b><br>
            Since C.V. of B (5.71%) < C.V. of A (13.33%), <b>Student B is more consistent</b>.
          </div>`
        }
      ]
    },
    {
      id: "sec_m_em_8_2",
      title: "Section 2: Probability & Addition Theorem",
      author: "Chapter 8: Probability",
      questions: [
        {
          id: "m_em_8_2_1",
          type: "1m",
          mark: "1 Mark",
          q: "If P(A) = 0.37, then P(not A) is:",
          options: ["A) 0.63", "B) 0.73", "C) 0.37", "D) 0"],
          ans: "Answer: <b>A) 0.63</b><br>Explanation: P(not A) = 1 - P(A) = 1 - 0.37 = 0.63."
        },
        {
          id: "m_em_8_2_2",
          type: "1m",
          mark: "1 Mark",
          q: "A card is drawn from a well-shuffled pack of 52 cards. The probability of getting a red king is:",
          options: ["A) 1/13", "B) 1/26", "C) 2/13", "D) 1/52"],
          ans: "Answer: <b>B) 1/26</b><br>Explanation: There are 2 red kings (Hearts and Diamonds). P = 2/52 = 1/26."
        },
        {
          id: "m_em_8_2_3",
          type: "2m",
          mark: "2 Marks",
          isImportant: true,
          q: "Two coins are tossed together. What is the probability of getting at least one head?",
          ans: `<div style="line-height:1.8;">
            Sample space S = {HH, HT, TH, TT} ➔ n(S) = 4.<br>
            Let A be the event of getting at least one head.<br>
            A = {HH, HT, TH} ➔ n(A) = 3.<br>
            P(A) = n(A) / n(S) = <b>3/4</b>.
          </div>`
        },
        {
          id: "m_em_8_2_4",
          type: "5m",
          mark: "5 Marks",
          examTag: "Top Addition Theorem Question",
          isImportant: true,
          q: "Two dice are rolled once. Find the probability of getting an even number on the first die or a total of 8.",
          ans: `<div style="line-height:1.8;">
            Total sample space n(S) = 6 × 6 = 36.<br><br>
            <b>Event A: Getting an even number on first die:</b><br>
            First die can be 2, 4, or 6 (3 choices) × 6 choices on second die = 18 outcomes.<br>
            n(A) = 18 ➔ P(A) = 18/36.<br><br>
            <b>Event B: Getting a total of 8:</b><br>
            B = {(2,6), (3,5), (4,4), (5,3), (6,2)} ➔ n(B) = 5.<br>
            P(B) = 5/36.<br><br>
            <b>Intersection A ∩ B: Even on first die AND sum 8:</b><br>
            A ∩ B = {(2,6), (4,4), (6,2)} ➔ n(A ∩ B) = 3.<br>
            P(A ∩ B) = 3/36.<br><br>
            <b>By Addition Theorem of Probability:</b><br>
            P(A ∪ B) = P(A) + P(B) - P(A ∩ B)<br>
            = (18/36) + (5/36) - (3/36) = (20/36) = <b>5/9</b>.<br>
            <b>Answer:</b> The required probability is <b>5/9</b>.
          </div>`
        }
      ]
    }
  ]
};
