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
          </div>`,
          commonMistakes: [
            {
              type: "Consistency Misinterpretation (Lower C.V. Means More Consistent)",
              icon: "⚠️",
              deduction: "-1 Mark",
              mistake: "Calculating C.V._A = 13.33% and C.V._B = 5.71%, but concluding 'Student A is more consistent' under the mistaken assumption that higher C.V. is better.",
              mistakeTa: "குறைந்த மாறுபாட்டுக் கெழுவே (C.V.) அதிக நிலைத்தன்மை உடையது. 13.33% > 5.71% என்பதால் மாணவர் A நிலைத்தன்மை உடையவர் எனத் தவறாக எழுதுதல்.",
              correction: "Remember: The student with the smaller Coefficient of Variation (C.V.) is MORE consistent and reliable: Since C.V._B (5.71%) < C.V._A (13.33%), Student B is more consistent."
            },
            {
              type: "Formula & Divisor Slip in Standard Deviation (n = 5)",
              icon: "📝",
              deduction: "-1 Mark",
              mistake: "Carelessly dividing by n - 1 = 4 instead of n = 5, or forgetting to take the square root of the variance (writing σ = 64 instead of √64 = 8).",
              mistakeTa: "திட்டவிலக்கம் கணக்கிடும்போது வர்க்கமூலம் எடுக்காமல் σ = 64 என விட்டுவிடுதல் அல்லது n=5-க்கு பதிலாக 4-ஆல் வகுத்தல்.",
              correction: "Use the standard deviation formula σ = √(Σd² / n) = √(320 / 5) = √64 = 8."
            },
            {
              type: "Omission of '× 100' or Percentage Sign (%) in C.V.",
              icon: "🔢",
              deduction: "-½ Mark",
              mistake: "Leaving C.V. as a decimal ratio 8/60 ≈ 0.133 or forgetting the percentage unit symbol (%) in the final answer.",
              mistakeTa: "மாறுபாட்டுக் கெழுவின் சூத்திரத்தில் 100-ஆல் பெருக்காமல் 0.133 என விடுதல் அல்லது விடையின் இறுதியில் % குறியீடு இடாமல் விடுதல்.",
              correction: "Always express Coefficient of Variation as a percentage: C.V. = (σ / x̄) × 100%."
            }
          ]
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
          diagramCaption: "Sample Space Matrix (6 × 6 = 36 outcomes) illustrating Event A (Even on 1st die, 18 outcomes in blue), Event B (Sum = 8, 5 outcomes in orange), and their overlap A ∩ B (3 outcomes highlighted with stars).",
          diagramSvg: `<div style="max-width:380px; margin:12px auto; background:#ffffff; border:1.5px solid #cbd5e1; border-radius:12px; padding:12px; box-shadow:0 2px 8px rgba(0,0,0,0.06); text-align:center;">
            <div style="font-size:12.5px; font-weight:700; color:#1e3a8a; margin-bottom:8px;">🎲 Two Dice Sample Space &amp; Addition Theorem</div>
            <svg viewBox="0 0 380 475" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; display:block; aspect-ratio:380/475;">
              <defs>
                <linearGradient id="overlapGradEm8" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#fef08a"/>
                  <stop offset="100%" stop-color="#f87171"/>
                </linearGradient>
              </defs>

              <!-- Legend -->
              <g transform="translate(10, 20)">
                <rect x="0" y="0" width="12" height="12" rx="3" fill="#dbeafe" stroke="#3b82f6"/>
                <text x="16" y="10" font-size="9.5" fill="#1e40af" font-weight="600">Event A: Even 1st (18)</text>

                <rect x="145" y="0" width="12" height="12" rx="3" fill="#ffedd5" stroke="#ea580c"/>
                <text x="161" y="10" font-size="9.5" fill="#c2410c" font-weight="600">Event B: Sum 8 (5)</text>

                <rect x="270" y="0" width="12" height="12" rx="3" fill="url(#overlapGradEm8)" stroke="#b91c1c" stroke-width="1.5"/>
                <text x="286" y="10" font-size="9.5" fill="#b91c1c" font-weight="700">A ∩ B (3)</text>
              </g>

              <!-- Grid Table Container -->
              <g transform="translate(45, 68)">
                <!-- Column headers (Die 2) -->
                <text x="-22" y="-12" font-size="10" fill="#64748b" font-weight="bold">D1 \\ D2</text>
                <text x="25" y="-12" font-size="11.5" fill="#334155" font-weight="bold" text-anchor="middle">1</text>
                <text x="75" y="-12" font-size="11.5" fill="#334155" font-weight="bold" text-anchor="middle">2</text>
                <text x="125" y="-12" font-size="11.5" fill="#334155" font-weight="bold" text-anchor="middle">3</text>
                <text x="175" y="-12" font-size="11.5" fill="#334155" font-weight="bold" text-anchor="middle">4</text>
                <text x="225" y="-12" font-size="11.5" fill="#334155" font-weight="bold" text-anchor="middle">5</text>
                <text x="275" y="-12" font-size="11.5" fill="#334155" font-weight="bold" text-anchor="middle">6</text>

                <!-- Row 1 (D1=1): None in A. None in B -->
                <text x="-12" y="23" font-size="11.5" fill="#334155" font-weight="bold" text-anchor="middle">1</text>
                <rect x="2" y="2" width="46" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1"/>
                <text x="25" y="24" font-size="10" fill="#64748b" text-anchor="middle">(1,1)</text>
                <rect x="52" y="2" width="46" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1"/>
                <text x="75" y="24" font-size="10" fill="#64748b" text-anchor="middle">(1,2)</text>
                <rect x="102" y="2" width="46" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1"/>
                <text x="125" y="24" font-size="10" fill="#64748b" text-anchor="middle">(1,3)</text>
                <rect x="152" y="2" width="46" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1"/>
                <text x="175" y="24" font-size="10" fill="#64748b" text-anchor="middle">(1,4)</text>
                <rect x="202" y="2" width="46" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1"/>
                <text x="225" y="24" font-size="10" fill="#64748b" text-anchor="middle">(1,5)</text>
                <rect x="252" y="2" width="46" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1"/>
                <text x="275" y="24" font-size="10" fill="#64748b" text-anchor="middle">(1,6)</text>

                <!-- Row 2 (D1=2): All in A (blue). (2,6) is A & B -->
                <text x="-12" y="68" font-size="11.5" fill="#2563eb" font-weight="bold" text-anchor="middle">2</text>
                <rect x="2" y="47" width="46" height="35" rx="4" fill="#dbeafe" stroke="#93c5fd"/>
                <text x="25" y="69" font-size="10" fill="#1e40af" font-weight="600" text-anchor="middle">(2,1)</text>
                <rect x="52" y="47" width="46" height="35" rx="4" fill="#dbeafe" stroke="#93c5fd"/>
                <text x="75" y="69" font-size="10" fill="#1e40af" font-weight="600" text-anchor="middle">(2,2)</text>
                <rect x="102" y="47" width="46" height="35" rx="4" fill="#dbeafe" stroke="#93c5fd"/>
                <text x="125" y="69" font-size="10" fill="#1e40af" font-weight="600" text-anchor="middle">(2,3)</text>
                <rect x="152" y="47" width="46" height="35" rx="4" fill="#dbeafe" stroke="#93c5fd"/>
                <text x="175" y="69" font-size="10" fill="#1e40af" font-weight="600" text-anchor="middle">(2,4)</text>
                <rect x="202" y="47" width="46" height="35" rx="4" fill="#dbeafe" stroke="#93c5fd"/>
                <text x="225" y="69" font-size="10" fill="#1e40af" font-weight="600" text-anchor="middle">(2,5)</text>
                <!-- (2,6) Overlap -->
                <rect x="252" y="47" width="46" height="35" rx="4" fill="url(#overlapGradEm8)" stroke="#b91c1c" stroke-width="2"/>
                <text x="275" y="64" font-size="10" fill="#991b1b" font-weight="bold" text-anchor="middle">(2,6)★</text>
                <text x="275" y="77" font-size="8" fill="#991b1b" font-weight="bold" text-anchor="middle">A ∩ B</text>

                <!-- Row 3 (D1=3): Not in A. (3,5) in B -->
                <text x="-12" y="113" font-size="11.5" fill="#334155" font-weight="bold" text-anchor="middle">3</text>
                <rect x="2" y="92" width="46" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1"/>
                <text x="25" y="114" font-size="10" fill="#64748b" text-anchor="middle">(3,1)</text>
                <rect x="52" y="92" width="46" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1"/>
                <text x="75" y="114" font-size="10" fill="#64748b" text-anchor="middle">(3,2)</text>
                <rect x="102" y="92" width="46" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1"/>
                <text x="125" y="114" font-size="10" fill="#64748b" text-anchor="middle">(3,3)</text>
                <rect x="152" y="92" width="46" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1"/>
                <text x="175" y="114" font-size="10" fill="#64748b" text-anchor="middle">(3,4)</text>
                <!-- (3,5) in B -->
                <rect x="202" y="92" width="46" height="35" rx="4" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
                <text x="225" y="109" font-size="10" fill="#c2410c" font-weight="bold" text-anchor="middle">(3,5)</text>
                <text x="225" y="122" font-size="8" fill="#c2410c" font-weight="bold" text-anchor="middle">Sum 8</text>
                <rect x="252" y="92" width="46" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1"/>
                <text x="275" y="114" font-size="10" fill="#64748b" text-anchor="middle">(3,6)</text>

                <!-- Row 4 (D1=4): All in A (blue). (4,4) is A & B -->
                <text x="-12" y="158" font-size="11.5" fill="#2563eb" font-weight="bold" text-anchor="middle">4</text>
                <rect x="2" y="137" width="46" height="35" rx="4" fill="#dbeafe" stroke="#93c5fd"/>
                <text x="25" y="159" font-size="10" fill="#1e40af" font-weight="600" text-anchor="middle">(4,1)</text>
                <rect x="52" y="137" width="46" height="35" rx="4" fill="#dbeafe" stroke="#93c5fd"/>
                <text x="75" y="159" font-size="10" fill="#1e40af" font-weight="600" text-anchor="middle">(4,2)</text>
                <rect x="102" y="137" width="46" height="35" rx="4" fill="#dbeafe" stroke="#93c5fd"/>
                <text x="125" y="159" font-size="10" fill="#1e40af" font-weight="600" text-anchor="middle">(4,3)</text>
                <!-- (4,4) Overlap -->
                <rect x="152" y="137" width="46" height="35" rx="4" fill="url(#overlapGradEm8)" stroke="#b91c1c" stroke-width="2"/>
                <text x="175" y="154" font-size="10" fill="#991b1b" font-weight="bold" text-anchor="middle">(4,4)★</text>
                <text x="175" y="167" font-size="8" fill="#991b1b" font-weight="bold" text-anchor="middle">A ∩ B</text>
                <rect x="202" y="137" width="46" height="35" rx="4" fill="#dbeafe" stroke="#93c5fd"/>
                <text x="225" y="159" font-size="10" fill="#1e40af" font-weight="600" text-anchor="middle">(4,5)</text>
                <rect x="252" y="137" width="46" height="35" rx="4" fill="#dbeafe" stroke="#93c5fd"/>
                <text x="275" y="159" font-size="10" fill="#1e40af" font-weight="600" text-anchor="middle">(4,6)</text>

                <!-- Row 5 (D1=5): Not in A. (5,3) in B -->
                <text x="-12" y="203" font-size="11.5" fill="#334155" font-weight="bold" text-anchor="middle">5</text>
                <rect x="2" y="182" width="46" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1"/>
                <text x="25" y="204" font-size="10" fill="#64748b" text-anchor="middle">(5,1)</text>
                <rect x="52" y="182" width="46" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1"/>
                <text x="75" y="204" font-size="10" fill="#64748b" text-anchor="middle">(5,2)</text>
                <!-- (5,3) in B -->
                <rect x="102" y="182" width="46" height="35" rx="4" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
                <text x="125" y="199" font-size="10" fill="#c2410c" font-weight="bold" text-anchor="middle">(5,3)</text>
                <text x="125" y="212" font-size="8" fill="#c2410c" font-weight="bold" text-anchor="middle">Sum 8</text>
                <rect x="152" y="182" width="46" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1"/>
                <text x="175" y="204" font-size="10" fill="#64748b" text-anchor="middle">(5,4)</text>
                <rect x="202" y="182" width="46" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1"/>
                <text x="225" y="204" font-size="10" fill="#64748b" text-anchor="middle">(5,5)</text>
                <rect x="252" y="182" width="46" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1"/>
                <text x="275" y="204" font-size="10" fill="#64748b" text-anchor="middle">(5,6)</text>

                <!-- Row 6 (D1=6): All in A (blue). (6,2) is A & B -->
                <text x="-12" y="248" font-size="11.5" fill="#2563eb" font-weight="bold" text-anchor="middle">6</text>
                <rect x="2" y="227" width="46" height="35" rx="4" fill="#dbeafe" stroke="#93c5fd"/>
                <text x="25" y="249" font-size="10" fill="#1e40af" font-weight="600" text-anchor="middle">(6,1)</text>
                <!-- (6,2) Overlap -->
                <rect x="52" y="227" width="46" height="35" rx="4" fill="url(#overlapGradEm8)" stroke="#b91c1c" stroke-width="2"/>
                <text x="75" y="244" font-size="10" fill="#991b1b" font-weight="bold" text-anchor="middle">(6,2)★</text>
                <text x="75" y="257" font-size="8" fill="#991b1b" font-weight="bold" text-anchor="middle">A ∩ B</text>
                <rect x="102" y="227" width="46" height="35" rx="4" fill="#dbeafe" stroke="#93c5fd"/>
                <text x="125" y="249" font-size="10" fill="#1e40af" font-weight="600" text-anchor="middle">(6,3)</text>
                <rect x="152" y="227" width="46" height="35" rx="4" fill="#dbeafe" stroke="#93c5fd"/>
                <text x="175" y="249" font-size="10" fill="#1e40af" font-weight="600" text-anchor="middle">(6,4)</text>
                <rect x="202" y="227" width="46" height="35" rx="4" fill="#dbeafe" stroke="#93c5fd"/>
                <text x="225" y="249" font-size="10" fill="#1e40af" font-weight="600" text-anchor="middle">(6,5)</text>
                <rect x="252" y="227" width="46" height="35" rx="4" fill="#dbeafe" stroke="#93c5fd"/>
                <text x="275" y="249" font-size="10" fill="#1e40af" font-weight="600" text-anchor="middle">(6,6)</text>
              </g>

              <!-- Bottom Calculation Box -->
              <rect x="15" y="375" width="350" height="46" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
              <text x="190" y="394" font-size="12" fill="#1e40af" font-weight="bold" text-anchor="middle">P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</text>
              <text x="190" y="411" font-size="12" fill="#1d4ed8" font-weight="bold" text-anchor="middle">= 18/36 + 5/36 − 3/36 = 20/36 = 5/9</text>

              <!-- Final Answer Pill -->
              <rect x="55" y="432" width="270" height="30" rx="15" fill="#16a34a"/>
              <text x="190" y="452" font-size="12" fill="#ffffff" font-weight="bold" text-anchor="middle">🎯 Final Answer: P(A ∪ B) = 5/9 ≈ 0.556</text>
            </svg>
          </div>`,
          ans: `<div style="line-height:1.9;">
            <div style="background:#eff6ff; border-left:4px solid #2563eb; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>Step 1 — Sample Space (S):</b><br>
              When two dice are rolled simultaneously, the sample space consists of all ordered pairs (a, b) where a, b ∈ {1, 2, 3, 4, 5, 6}:<br>
              <div style="background:#ffffff; border:1px solid #cbd5e1; border-radius:6px; padding:8px 12px; margin:8px 0; font-family:monospace; font-size:12.5px; line-height:1.7;">
                S = {<br>
                &nbsp;&nbsp;(1,1), (1,2), (1,3), (1,4), (1,5), (1,6),<br>
                &nbsp;&nbsp;(2,1), (2,2), (2,3), (2,4), (2,5), (2,6),<br>
                &nbsp;&nbsp;(3,1), (3,2), (3,3), (3,4), (3,5), (3,6),<br>
                &nbsp;&nbsp;(4,1), (4,2), (4,3), (4,4), (4,5), (4,6),<br>
                &nbsp;&nbsp;(5,1), (5,2), (5,3), (5,4), (5,5), (5,6),<br>
                &nbsp;&nbsp;(6,1), (6,2), (6,3), (6,4), (6,5), (6,6)<br>
                }<br>
                <b>Total number of outcomes, n(S) = 6 × 6 = 36</b>
              </div>
            </div>

            <div style="background:#f0f9ff; border-left:4px solid #0284c7; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>Step 2 — Event A: Getting an even number on the first die:</b><br>
              The first die can take values {2, 4, 6} (3 choices) while the second die takes any of {1, 2, 3, 4, 5, 6} (6 choices):<br>
              <div style="background:#ffffff; border:1px solid #bae6fd; border-radius:6px; padding:8px 12px; margin:8px 0; font-family:monospace; font-size:12.5px; line-height:1.7;">
                A = {<br>
                &nbsp;&nbsp;(2,1), (2,2), (2,3), (2,4), (2,5), (2,6),<br>
                &nbsp;&nbsp;(4,1), (4,2), (4,3), (4,4), (4,5), (4,6),<br>
                &nbsp;&nbsp;(6,1), (6,2), (6,3), (6,4), (6,5), (6,6)<br>
                }<br>
                <b>Number of outcomes in A, n(A) = 3 × 6 = 18</b><br>
                <b>Probability, P(A) = n(A) / n(S) = 18 / 36</b>
              </div>
            </div>

            <div style="background:#fff7ed; border-left:4px solid #ea580c; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>Step 3 — Event B: Getting a total (sum) of 8:</b><br>
              Ordered pairs (a, b) whose sum a + b = 8:<br>
              <div style="background:#ffffff; border:1px solid #fed7aa; border-radius:6px; padding:8px 12px; margin:8px 0; font-family:monospace; font-size:12.5px; line-height:1.7;">
                B = {(2,6), (3,5), (4,4), (5,3), (6,2)}<br>
                <b>Number of outcomes in B, n(B) = 5</b><br>
                <b>Probability, P(B) = n(B) / n(S) = 5 / 36</b>
              </div>
            </div>

            <div style="background:#fef2f2; border-left:4px solid #dc2626; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>Step 4 — The Intersection (A ∩ B):</b><br>
              Total 8 <b>AND</b> even on 1st die:<br>
              <div style="background:#ffffff; border:1px solid #fecaca; border-radius:6px; padding:8px 12px; margin:8px 0; font-family:monospace; font-size:12.5px; line-height:1.7;">
                A ∩ B = {(2,6), (4,4), (6,2)}<br>
                <b>Number of outcomes in A ∩ B, n(A ∩ B) = 3</b><br>
                <b>Probability, P(A ∩ B) = n(A ∩ B) / n(S) = 3 / 36</b>
              </div>
              <span style="font-size:12.5px; color:#991b1b; font-weight:600;">
                📌 <i>Note: Events A and B are NOT mutually exclusive because they share 3 outcomes. We must subtract P(A ∩ B) because those outcomes are counted twice!</i>
              </span>
            </div>

            <div style="background:#f0fdf4; border-left:4px solid #16a34a; padding:10px 14px; border-radius:4px; margin-bottom:12px;">
              <b>Step 5 — Addition Theorem of Probability for Two Events:</b><br>
              <b>P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</b><br><br>
              <b>Step 6 — Substitute &amp; Simplify:</b><br>
              P(A ∪ B) = (18 / 36) + (5 / 36) − (3 / 36)<br>
              = (18 + 5 − 3) / 36<br>
              = 20 / 36<br>
              Dividing numerator and denominator by 4:<br>
              <b>= 5 / 9 ≈ 0.556</b>
            </div>

            <div style="margin-top:14px; padding:12px; background:#eff6ff; border:2px solid #2563eb; border-radius:8px; text-align:center;">
              <span style="font-size:16px; font-weight:800; color:#1e40af;">Final Answer: P(even on 1st die or total 8) = 5/9</span>
            </div>

            <div style="margin-top:12px; font-size:13px; color:#475569; background:#f8fafc; padding:10px; border-radius:6px; border:1px solid #e2e8f0;">
              <b>💡 Public Exam Tips:</b><br>
              1. <b>Write the sample space size clearly:</b> Stating n(S) = 36 earns 1 full mark.<br>
              2. <b>Write out the Addition Theorem formula:</b> The formula P(A ∪ B) = P(A) + P(B) − P(A ∩ B) is allocated 1 mark in the official valuation key.<br>
              3. <b>Always reduce to simplest form:</b> Leaving 20/36 without simplifying to 5/9 loses ½ mark.
            </div>
          </div>`,
          commonMistakes: [
            {
              type: "Forgetting to Subtract Intersection P(A ∩ B) (Double Counting)",
              icon: "⚠️",
              deduction: "-1 Mark",
              mistake: "Students simply add P(A) + P(B) = 18/36 + 5/36 = 23/36, forgetting that outcomes (2,6), (4,4), and (6,2) appear in both events and are counted twice.",
              mistakeTa: "A மற்றும் B இரண்டிலும் (2,6), (4,4), (6,2) ஆகிய 3 கூறுகள் பொதுவாக உள்ளன. அவற்றை கழிக்காமல் கூட்டினால் விடை தவறாகும்.",
              correction: "Always check for overlap: P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 18/36 + 5/36 - 3/36 = 20/36 = 5/9."
            },
            {
              type: "Incomplete Listing of Sum = 8 (Missing Symmetrical Pairs)",
              icon: "🔢",
              deduction: "-1 Mark",
              mistake: "Listing only {(2,6), (3,5), (4,4)} and omitting (5,3) and (6,2), obtaining n(B) = 3 instead of 5.",
              mistakeTa: "கூடுதல் 8 வருவதற்கு (3,5) மட்டுமல்ல, (5,3) மற்றும் (6,2)-ம் உண்டு. அவற்றை மறக்கக் கூடாது.",
              correction: "Remember that the two dice are distinct: (3,5) and (5,3) are two different outcomes. B has exactly 5 outcomes."
            },
            {
              type: "Unreduced Final Fraction (Leaving 20/36 instead of 5/9)",
              icon: "✂️",
              deduction: "-½ Mark",
              mistake: "Leaving the answer as 20/36 without reducing to the lowest terms 5/9.",
              mistakeTa: "20/36 என்பதை 4-ஆல் வகுத்து எளிய வடிவில் 5/9 என எழுத வேண்டும்.",
              correction: "Always reduce probability fractions to simplest form: 20/36 = (20÷4) / (36÷4) = 5/9."
            }
          ]
        }
      ]
    }
  ]
};
