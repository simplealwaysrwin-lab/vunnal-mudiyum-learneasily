// Class 10 Mathematics - Unit 2: Numbers and Sequences
// Tamil Nadu State Board Samacheer Kalvi Digital Guide (English Medium)
// Standard Public Exam Model Solutions, Blackboard Steps & Formulas

const MATHS_EM_UNIT_2_DATA = {
  unitId: "math_em_u2",
  unitName: "Unit 2: Numbers and Sequences",
  subject: "Mathematics (English Medium)",
  syllabus: "Tamil Nadu State Board Samacheer Kalvi Class 10 Mathematics",

  // Key Formula & Concept Cards
  formulas: [
    { title: "Euclid's Division Lemma", rule: "a = bq + r, where 0 ≤ r < b (a: dividend, b: divisor, q: quotient, r: remainder)" },
    { title: "Modular Arithmetic", rule: "a ≡ b (mod m) implies (a - b) is divisible by m, i.e., a - b = km for integer k" },
    { title: "Arithmetic Progression (AP) - nth Term", rule: "tₙ = a + (n - 1)d, where a = first term, d = t₂ - t₁ (common difference)" },
    { title: "Arithmetic Progression - Number of Terms", rule: "n = [(l - a) / d] + 1, where l = last term" },
    { title: "Arithmetic Progression - Sum of n Terms", rule: "Sₙ = (n / 2) [2a + (n - 1)d] = (n / 2) [a + l]" },
    { title: "Geometric Progression (GP) - nth Term", rule: "tₙ = a · rⁿ⁻¹, where r = t₂ / t₁ (common ratio)" },
    { title: "Geometric Progression - Sum of n Terms", rule: "Sₙ = a(rⁿ - 1) / (r - 1) for r > 1, Sₙ = a(1 - rⁿ) / (1 - r) for r < 1" },
    { title: "Special Series (First n Natural Numbers)", rule: "1 + 2 + 3 + ... + n = n(n + 1) / 2" },
    { title: "Special Series (Sum of Squares)", rule: "1² + 2² + 3² + ... + n² = n(n + 1)(2n + 1) / 6" },
    { title: "Special Series (Sum of Cubes)", rule: "1³ + 2³ + 3³ + ... + n³ = [n(n + 1) / 2]² = (Σn)²" }
  ],

  subSections: [
    // -------------------------------------------------------------
    // Section 1: Euclid's Division Lemma & Fundamental Theorem of Arithmetic
    // -------------------------------------------------------------
    {
      id: "sec_em_2_1",
      title: "Exercise 2.1 & 2.2: Euclid's Division Lemma and Fundamental Theorem of Arithmetic",
      author: "Chapter 2: Numbers and Sequences",
      questions: [
        {
          id: "m_em_2_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "Govt Model",
          q: "Euclid's division lemma states that for positive integers a and b, there exist unique integers q and r such that a = bq + r, where r must satisfy:",
          options: ["A) 0 < r < b", "B) 0 ≤ r ≤ b", "C) 0 ≤ r < b", "D) 0 < r ≤ b"],
          ans: "Answer: <b>C) 0 ≤ r < b</b>. By Euclid's Division Lemma, the remainder r is always non-negative and strictly less than the divisor b.",
          explanation: "The remainder cannot be negative and cannot be equal to or greater than the divisor."
        },
        {
          id: "m_em_2_mcq_2",
          type: "1m",
          mark: "1 Mark",
          q: "If 13824 = 2ᵃ × 3ᵇ, then the values of a and b are ________.",
          options: ["A) a = 9, b = 3", "B) a = 7, b = 3", "C) a = 8, b = 2", "D) a = 6, b = 4"],
          ans: "Answer: <b>A) a = 9, b = 3</b>. 13824 = 2⁹ × 3³ = 512 × 27 = 13824. Hence a = 9, b = 3.",
          explanation: "Prime factorizing 13824 gives 2⁹ × 3³."
        },
        {
          id: "m_em_2_mcq_3",
          type: "1m",
          mark: "1 Mark",
          q: "The least positive integer divisible by all numbers from 1 to 10 (inclusive) is ________.",
          options: ["A) 100", "B) 504", "C) 2520", "D) 5040"],
          ans: "Answer: <b>C) 2520</b>. LCM(1 to 10) = 2³ × 3² × 5 × 7 = 2520.",
          explanation: "LCM of numbers 1 through 10 is 2520."
        },
        {
          id: "m_em_2_mcq_4",
          type: "1m",
          mark: "1 Mark",
          q: "The remainder when 7 × 11 × 13 + 13 is divided by 13 is ________.",
          options: ["A) 1", "B) 0", "C) 7", "D) 11"],
          ans: "Answer: <b>B) 0</b>. 7 × 11 × 13 + 13 = 13 × (77 + 1) = 13 × 78, which is completely divisible by 13.",
          explanation: "13 is a common factor, leaving remainder 0."
        },
        {
          id: "m_em_2_mcq_5",
          type: "1m",
          mark: "1 Mark",
          q: "If the first term of an A.P. is 5 and the common difference is 3, the 10th term t₁₀ is ________.",
          options: ["A) 30", "B) 32", "C) 35", "D) 28"],
          ans: "Answer: <b>B) 32</b>. In an A.P., tₙ = a + (n - 1)d. Here t₁₀ = 5 + (10 - 1) × 3 = 5 + 27 = 32.",
          explanation: "t₁₀ = 5 + 9(3) = 32."
        },
        {
          id: "m_em_2_mcq_6",
          type: "1m",
          mark: "1 Mark",
          q: "The sum of the first n natural numbers 1 + 2 + 3 + ... + n is given by ________.",
          options: ["A) n²", "B) n(n + 1) / 2", "C) [n(n + 1) / 2]²", "D) n(2n + 1)"],
          ans: "Answer: <b>B) n(n + 1) / 2</b>. The sum of the first n natural numbers is Sₙ = n(n + 1) / 2.",
          explanation: "Standard sum formula for first n natural numbers."
        },
        {
          id: "m_em_2_mcq_7",
          type: "1m",
          mark: "1 Mark",
          q: "The sum of the first n odd natural numbers 1 + 3 + 5 + ... + (2n - 1) is ________.",
          options: ["A) 2n - 1", "B) n(n + 1)", "C) n²", "D) n(n - 1)"],
          ans: "Answer: <b>C) n²</b>. The sum of the first n odd positive integers is always n².",
          explanation: "Sum of first n odd numbers is n²."
        },
        {
          id: "m_em_2_mcq_8",
          type: "1m",
          mark: "1 Mark",
          q: "If three terms a, b, c are in Arithmetic Progression (A.P.), then ________.",
          options: ["A) b² = ac", "B) 2b = a + c", "C) b = a + c", "D) 2a = b + c"],
          ans: "Answer: <b>B) 2b = a + c</b>. Since common difference d = b - a = c - b, we have 2b = a + c.",
          explanation: "In an A.P., 2b = a + c."
        },
        {
          id: "m_em_2_mcq_9",
          type: "1m",
          mark: "1 Mark",
          q: "The next term of the geometric sequence 3/16, 1/8, 1/12, 1/18, ... is ________.",
          options: ["A) 1/24", "B) 1/27", "C) 2/27", "D) 1/36"],
          ans: "Answer: <b>B) 1/27</b>. Common ratio r = (1/8) / (3/16) = 2/3. Next term = (1/18) × (2/3) = 1/27.",
          explanation: "Multiplying previous term by ratio 2/3 gives 1/27."
        },
        {
          id: "m_em_2_mcq_10",
          type: "1m",
          mark: "1 Mark",
          q: "Find the least positive value of x such that 8x ≡ 1 (mod 11).",
          options: ["A) 7", "B) 5", "C) 3", "D) 2"],
          ans: "Answer: <b>A) 7</b>. For x = 7: 8(7) = 56. 56 - 1 = 55 = 11 × 5. Hence least positive x is 7.",
          explanation: "8 × 7 = 56 ≡ 1 (mod 11)."
        },
        {
          id: "m_em_2_2",
          type: "2m",
          mark: "2 Marks",
          examYear: "2023",
          examTag: "2023*",
          isImportant: true,
          q: "Use Euclid's Division Algorithm to find the Highest Common Factor (HCF) of 340 and 412.",
          ans: `<div style="line-height:1.8;">
            <b>Step-by-Step Evaluation:</b><br><br>
            Euclid's division algorithm is based on the formula:<br>
            <div style="background:var(--bg-page); padding:8px 12px; border-radius:8px; border-left:3px solid var(--primary); margin:6px 0; font-weight:700;">
              Dividend (a) = Divisor (b) × Quotient (q) + Remainder (r), where 0 ≤ r &lt; b
            </div>
            We apply this step-by-step until the remainder becomes 0.<br><br>
            <b>Step 1:</b> Since 412 &gt; 340, we divide 412 by 340:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<b>412 = 340 × 1 + 72</b> (The remainder is 72 ≠ 0)<br><br>
            <b>Step 2:</b> Now apply the lemma to the new dividend 340 and divisor 72:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<b>340 = 72 × 4 + 52</b> (The remainder is 52 ≠ 0)<br><br>
            <b>Step 3:</b> Apply the lemma to 72 and 52:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<b>72 = 52 × 1 + 20</b> (The remainder is 20 ≠ 0)<br><br>
            <b>Step 4:</b> Apply the lemma to 52 and 20:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<b>52 = 20 × 2 + 12</b> (The remainder is 12 ≠ 0)<br><br>
            <b>Step 5:</b> Apply the lemma to 20 and 12:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<b>20 = 12 × 1 + 8</b> (The remainder is 8 ≠ 0)<br><br>
            <b>Step 6:</b> Apply the lemma to 12 and 8:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<b>12 = 8 × 1 + 4</b> (The remainder is 4 ≠ 0)<br><br>
            <b>Step 7:</b> Apply the lemma to 8 and 4:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<b>8 = 4 × 2 + 0</b> (The remainder has now become 0)<br><br>
            The divisor at this final stage is <b>4</b>, which is the required HCF.<br>
            <div style="background:#dcfce7; color:#15803d; padding:10px 14px; border-radius:8px; font-weight:800; font-size:15px; margin-top:8px;">
              The Highest Common Factor (HCF) of 340 and 412 is 4.
            </div>
          </div>`,
          explanation: "Repeat division step by step until the remainder is zero; the divisor at this final stage is the HCF.",
          blackboard: {
            title: "Euclid's Division Algorithm: HCF of 340 and 412",
            engTitle: "Euclid's Division Algorithm: Step-by-Step Teaching",
            steps: [
              {
                stepNum: 0,
                badge: "📐 Concept & Formula",
                badgeEn: "📐 Concept & Formula",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Euclid's Division Algorithm (Formula)</div>
                  <div class="bb-box-cyan">
                    <div class="bb-box-title" style="color:#67e8f9;">Basic Formula:</div>
                    <div class="bb-line" style="font-size:16px; font-weight:800; color:#ffffff; margin:6px 0;">
                      Dividend (a) = Divisor (b) × Quotient (q) + Remainder (r)
                    </div>
                    <div class="bb-line" style="color:#fde047; font-size:15px; font-weight:700;">
                      where 0 ≤ r &lt; b
                    </div>
                  </div>
                  <div class="bb-box-yellow" style="margin-top:10px;">
                    <div class="bb-line" style="font-size:14px; color:#ffffff; line-height:1.6;">
                      💡 We apply this division lemma step-by-step repeatedly until the remainder <b>r</b> becomes <b>0</b>.
                    </div>
                  </div>
                `,
                audioScriptEn: "Let us understand the step-by-step evaluation. Euclid's division algorithm is based on the formula: Dividend a equals Divisor b times Quotient q plus Remainder r, where r is greater than or equal to 0 and strictly less than b. We will apply this step-by-step until the remainder becomes 0.",
                audioScriptTa: "யூக்ளிடின் வகுத்தல் வழிமுறை சூத்திரம்: வகுபடும் எண் a சமம் வகுக்கும் எண் b பெருக்கல் ஈவு q கூட்டல் மீதி r; இங்கு மீதி r பூஜ்ஜியம் அல்லது பூஜ்ஜியத்தை விடப் பெரியது மற்றும் b-ஐ விடச் சிறியது. மீதி பூஜ்ஜியம் வரும் வரை நாம் இதனைப் படிப் படியாகச் செய்வோம்."
              },
              {
                stepNum: 1,
                badge: "① Step 1: Divide 412 by 340",
                badgeEn: "① Step 1: Divide 412 by 340",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Step 1: First Division</div>
                  <div class="bb-box-blue">
                    <div class="bb-line">Comparing the two numbers: <b>412 &gt; 340</b></div>
                    <div class="bb-line" style="font-size:14px; color:#93c5fd; margin-top:4px;">We divide 412 by 340:</div>
                    <div class="bb-line" style="font-size:20px; font-weight:800; color:#ffffff; margin:8px 0;">
                      412 = 340 × 1 + 72
                    </div>
                    <div class="bb-pill-cyan" style="font-size:14px; font-weight:700; color:#fde047;">
                      Quotient q = 1, Remainder r = 72 ≠ 0
                    </div>
                  </div>
                `,
                audioScriptEn: "Step 1: Since 412 is greater than 340, we divide 412 by 340. 340 goes 1 time, with a remainder of 72. 412 equals 340 times 1 plus 72. The remainder is 72, which is not equal to 0. So we proceed to step 2.",
                audioScriptTa: "படி 1: இங்கு 412 என்பது 340-ஐ விடப் பெரியது. எனவே 412-ஐ 340-ஆல் வகுக்கிறோம். 412 சமம் 340 பெருக்கல் 1 கூட்டல் 72. இங்கு மீதி 72 பூஜ்ஜியம் அல்ல. எனவே அடுத்த படிநிலைக்குச் செல்வோம்."
              },
              {
                stepNum: 2,
                badge: "② Step 2: Apply to 340 and 72",
                badgeEn: "② Step 2: Apply to 340 and 72",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Step 2: Second Division</div>
                  <div class="bb-box-cyan">
                    <div class="bb-line">Now apply the lemma to new dividend <b>340</b> and divisor <b>72</b>:</div>
                    <div class="bb-line" style="font-size:20px; font-weight:800; color:#ffffff; margin:8px 0;">
                      340 = 72 × 4 + 52
                    </div>
                    <div class="bb-pill-cyan" style="font-size:14px; font-weight:700; color:#fde047;">
                      Quotient q = 4, Remainder r = 52 ≠ 0
                    </div>
                  </div>
                `,
                audioScriptEn: "Step 2: Now apply the lemma to the new dividend 340 and divisor 72. 72 goes 4 times into 340, giving 288, and leaves a remainder of 52. 340 equals 72 times 4 plus 52. The remainder is 52, which is not equal to 0.",
                audioScriptTa: "படி 2: இப்போது முந்தைய வகுக்கும் எண் 340-ஐ வகுபடும் எண்ணாகவும், மீதி 72-ஐ வகுக்கும் எண்ணாகவும் கொள்வோம். 340 சமம் 72 பெருக்கல் 4 கூட்டல் 52. இங்கு மீதி 52 பூஜ்ஜியம் அல்ல."
              },
              {
                stepNum: 3,
                badge: "③ Step 3: Apply to 72 and 52",
                badgeEn: "③ Step 3: Apply to 72 and 52",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Step 3: Third Division</div>
                  <div class="bb-box-blue">
                    <div class="bb-line">Apply the lemma to dividend <b>72</b> and divisor <b>52</b>:</div>
                    <div class="bb-line" style="font-size:20px; font-weight:800; color:#ffffff; margin:8px 0;">
                      72 = 52 × 1 + 20
                    </div>
                    <div class="bb-pill-cyan" style="font-size:14px; font-weight:700; color:#fde047;">
                      Quotient q = 1, Remainder r = 20 ≠ 0
                    </div>
                  </div>
                `,
                audioScriptEn: "Step 3: Apply the lemma to 72 and 52. 52 goes 1 time into 72, leaving remainder 20. 72 equals 52 times 1 plus 20. The remainder is 20, which is not equal to 0.",
                audioScriptTa: "படி 3: அடுத்ததாக 72 மற்றும் 52-க்கு விதியைப் பயன்படுத்துவோம். 72 சமம் 52 பெருக்கல் 1 கூட்டல் 20. இங்கு மீதி 20 பூஜ்ஜியம் அல்ல."
              },
              {
                stepNum: 4,
                badge: "④ Step 4: Apply to 52 and 20",
                badgeEn: "④ Step 4: Apply to 52 and 20",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Step 4: Fourth Division</div>
                  <div class="bb-box-cyan">
                    <div class="bb-line">Apply the lemma to dividend <b>52</b> and divisor <b>20</b>:</div>
                    <div class="bb-line" style="font-size:20px; font-weight:800; color:#ffffff; margin:8px 0;">
                      52 = 20 × 2 + 12
                    </div>
                    <div class="bb-pill-cyan" style="font-size:14px; font-weight:700; color:#fde047;">
                      Quotient q = 2, Remainder r = 12 ≠ 0
                    </div>
                  </div>
                `,
                audioScriptEn: "Step 4: Apply the lemma to 52 and 20. 20 goes 2 times into 52, which is 40, leaving remainder 12. 52 equals 20 times 2 plus 12. The remainder is 12, which is not equal to 0.",
                audioScriptTa: "படி 4: இப்போது 52 மற்றும் 20-க்கு விதியைப் பயன்படுத்துவோம். 20 இரண்டு முறை அடங்கும். 52 சமம் 20 பெருக்கல் 2 கூட்டல் 12. இங்கு மீதி 12 பூஜ்ஜியம் அல்ல."
              },
              {
                stepNum: 5,
                badge: "⑤ Step 5: Apply to 20 and 12",
                badgeEn: "⑤ Step 5: Apply to 20 and 12",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Step 5: Fifth Division</div>
                  <div class="bb-box-blue">
                    <div class="bb-line">Apply the lemma to dividend <b>20</b> and divisor <b>12</b>:</div>
                    <div class="bb-line" style="font-size:20px; font-weight:800; color:#ffffff; margin:8px 0;">
                      20 = 12 × 1 + 8
                    </div>
                    <div class="bb-pill-cyan" style="font-size:14px; font-weight:700; color:#fde047;">
                      Quotient q = 1, Remainder r = 8 ≠ 0
                    </div>
                  </div>
                `,
                audioScriptEn: "Step 5: Apply the lemma to 20 and 12. 12 goes 1 time into 20, leaving remainder 8. 20 equals 12 times 1 plus 8. The remainder is 8, which is not equal to 0.",
                audioScriptTa: "படி 5: அடுத்து 20 மற்றும் 12-க்கு விதியைப் பயன்படுத்துவோம். 20 சமம் 12 பெருக்கல் 1 கூட்டல் 8. இங்கு மீதி 8 பூஜ்ஜியம் அல்ல."
              },
              {
                stepNum: 6,
                badge: "⑥ Step 6: Apply to 12 and 8",
                badgeEn: "⑥ Step 6: Apply to 12 and 8",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Step 6: Sixth Division</div>
                  <div class="bb-box-cyan">
                    <div class="bb-line">Apply the lemma to dividend <b>12</b> and divisor <b>8</b>:</div>
                    <div class="bb-line" style="font-size:20px; font-weight:800; color:#ffffff; margin:8px 0;">
                      12 = 8 × 1 + 4
                    </div>
                    <div class="bb-pill-cyan" style="font-size:14px; font-weight:700; color:#fde047;">
                      Quotient q = 1, Remainder r = 4 ≠ 0
                    </div>
                  </div>
                `,
                audioScriptEn: "Step 6: Apply the lemma to 12 and 8. 8 goes 1 time into 12, leaving remainder 4. 12 equals 8 times 1 plus 4. The remainder is 4, which is not equal to 0.",
                audioScriptTa: "படி 6: இப்போது 12 மற்றும் 8-க்கு விதியைப் பொருத்துவோம். 12 சமம் 8 பெருக்கல் 1 கூட்டல் 4. இங்கு மீதி 4 பூஜ்ஜியம் அல்ல."
              },
              {
                stepNum: 7,
                badge: "⑦ Step 7: Apply to 8 and 4 (Remainder = 0)",
                badgeEn: "⑦ Step 7: Apply to 8 and 4 (Remainder = 0)",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Step 7: Final Division</div>
                  <div class="bb-box-green">
                    <div class="bb-line">Apply the lemma to dividend <b>8</b> and divisor <b>4</b>:</div>
                    <div class="bb-line" style="font-size:22px; font-weight:800; color:#ffffff; margin:8px 0;">
                      8 = 4 × 2 + 0
                    </div>
                    <div class="bb-pill-magenta" style="font-size:15px; font-weight:800; color:#86efac; margin-top:8px;">
                      🎉 The remainder has now become 0!
                    </div>
                  </div>
                `,
                audioScriptEn: "Step 7: Apply the lemma to 8 and 4. 4 goes exactly 2 times into 8 with remainder 0. 8 equals 4 times 2 plus 0. The remainder has now become 0!",
                audioScriptTa: "படி 7: இறுதியாக 8 மற்றும் 4-க்கு விதியைப் பயன்படுத்துவோம். 4 இரண்டு முறை சரியாக அடங்கி மீதி பூஜ்ஜியம் கிடைக்கிறது! 8 சமம் 4 பெருக்கல் 2 கூட்டல் 0. மீதி பூஜ்ஜியம் வந்துவிட்டது!"
              },
              {
                stepNum: 8,
                badge: "🏆 Final Conclusion & HCF",
                badgeEn: "🏆 Final Conclusion & HCF",
                chalkHtml: `
                  <div class="bb-box-yellow">
                    <div class="bb-box-title" style="color:#fde047; font-size:16px;">Final Conclusion:</div>
                    <div class="bb-line" style="font-size:15px; color:#ffffff; margin-top:6px; line-height:1.6;">
                      The divisor at this final stage is <b>4</b>, which is the required HCF.
                    </div>
                    <div class="bb-pill-magenta" style="font-size:20px; font-weight:800; margin-top:14px; text-align:center;">
                      HCF(340, 412) = 4
                    </div>
                  </div>
                `,
                audioScriptEn: "Conclusion: The divisor at this final stage is 4, which is the required HCF. Therefore, the Highest Common Factor (HCF) of 340 and 412 is 4.",
                audioScriptTa: "முடிவு: மீதி பூஜ்ஜியம் வரும் இந்த இறுதிப் படிநிலையில் உள்ள வகுக்கும் எண் 4 ஆகும். எனவே, 340 மற்றும் 412 ஆகியவற்றின் மீப்பெரு பொது வகுத்தி (மீ.பொ.வ) 4 ஆகும்."
              }
            ]
          }
        },
        {
          id: "m_em_2_3",
          type: "2m",
          mark: "2 Marks",
          examYear: "2022",
          examTag: "2022*",
          q: "If 13824 = 2ᵃ × 3ᵇ, find the values of a and b.",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            Prime factorizing 13824:<br>
            13824 ÷ 2 = 6912<br>
            6912 ÷ 2 = 3456<br>
            3456 ÷ 2 = 1728<br>
            1728 ÷ 2 = 864<br>
            864 ÷ 2 = 432<br>
            432 ÷ 2 = 216<br>
            216 ÷ 2 = 108<br>
            108 ÷ 2 = 54<br>
            54 ÷ 2 = 27<br>
            27 = 3 × 3 × 3 = 3³<br><br>
            Therefore, 13824 = 2⁹ × 3³.<br>
            Given: 13824 = 2ᵃ × 3ᵇ.<br>
            Comparing powers on both sides:<br>
            <b>a = 9</b> and <b>b = 3</b>.
          </div>`,
          explanation: "Use fundamental theorem of arithmetic to express 13824 as unique product of prime powers and compare exponents."
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 2: Modular Arithmetic (Exercise 2.3)
    // -------------------------------------------------------------
    {
      id: "sec_em_2_2",
      title: "Exercise 2.3: Modular Arithmetic",
      author: "Chapter 2: Numbers and Sequences",
      questions: [
        {
          id: "m_em_2_4",
          type: "2m",
          mark: "2 Marks",
          examYear: "2024",
          examTag: "2024*",
          isImportant: true,
          q: "Find the least positive value of x such that 8x ≡ 1 (mod 11).",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            Given congruence: 8x ≡ 1 (mod 11)<br>
            By definition of modular arithmetic:<br>
            8x - 1 is divisible by 11.<br>
            8x - 1 = 11k for some integer k.<br>
            8x = 11k + 1<br>
            <b>x = (11k + 1) / 8</b><br><br>
            Testing positive integer values for k:<br>
            • For k = 1: x = (11(1) + 1)/8 = 12/8 (Not an integer)<br>
            • For k = 2: x = (11(2) + 1)/8 = 23/8 (Not an integer)<br>
            • For k = 3: x = (11(3) + 1)/8 = 34/8 (Not an integer)<br>
            • For k = 4: x = (11(4) + 1)/8 = 45/8 (Not an integer)<br>
            • For k = 5: x = (11(5) + 1)/8 = 56/8 = <b>7</b> (Integer!)<br><br>
            <b>Therefore, the least positive value of x is 7.</b>
          </div>`,
          explanation: "8x - 1 must be a multiple of 11. When x = 7, 8(7) - 1 = 56 - 1 = 55, which is exactly divisible by 11.",
          blackboard: {
            title: "Solving 8x ≡ 1 (mod 11)",
            engTitle: "Solving Congruence 8x ≡ 1 (mod 11)",
            steps: [
              {
                stepNum: 1,
                badgeEn: "① Convert Congruence to Linear Equation",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Step 1: Modular Definition</div>
                  <div class="bb-box-cyan">
                    <div class="bb-line">8x ≡ 1 (mod 11) ➔ 8x - 1 = 11k</div>
                    <div class="bb-line" style="font-size:16px; font-weight:800; color:#fde047; margin-top:6px;">
                      x = (11k + 1) / 8
                    </div>
                  </div>
                `,
                audioScriptEn: "Step 1: 8x congruent to 1 modulo 11 means 8x minus 1 is a multiple of 11. Express x as 11k plus 1 divided by 8."
              },
              {
                stepNum: 2,
                badgeEn: "② Find Integer Value for Least x",
                chalkHtml: `
                  <div class="bb-box-green">
                    <div class="bb-line">Substituting k = 5:</div>
                    <div class="bb-line">x = (11(5) + 1) / 8 = 56 / 8 = 7</div>
                    <div class="bb-pill-magenta" style="font-size:18px; margin-top:8px; font-weight:800;">
                      Answer: x = 7
                    </div>
                  </div>
                `,
                audioScriptEn: "Step 2: Putting k equals 5 gives 56 divided by 8 which equals 7. Thus the least positive integer value is x equals 7."
              }
            ]
          }
        },
        {
          id: "m_em_2_5",
          type: "2m",
          mark: "2 Marks",
          q: "What is the time 100 hours after 7:00 a.m.?",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            A standard day has 24 hours (clock modulo 24).<br>
            Current time: 7:00 a.m.<br>
            Dividing 100 by 24:<br>
            100 = 24 × 4 + 4<br>
            That is, 100 ≡ 4 (mod 24).<br><br>
            So, after 4 complete days (96 hours), an additional 4 hours will elapse.<br>
            Required time = 7:00 + 4 hours = <b>11:00 a.m.</b><br><br>
            <b>Answer: The time will be 11:00 a.m.</b>
          </div>`,
          explanation: "100 hours equals 4 complete 24-hour cycles plus 4 extra hours: 7:00 a.m. + 4 hours = 11:00 a.m."
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 3: Arithmetic Progression - AP (Exercise 2.5 & 2.6)
    // -------------------------------------------------------------
    {
      id: "sec_em_2_3",
      title: "Exercise 2.5 & 2.6: Arithmetic Progression (AP)",
      author: "Chapter 2: Numbers and Sequences",
      questions: [
        {
          id: "m_em_2_6",
          type: "2m",
          mark: "2 Marks",
          examYear: "2023",
          examTag: "2023*",
          isImportant: true,
          q: "If 3 + k, 18 - k, 5k + 1 are in Arithmetic Progression (A.P.), then find the value of k.",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            Since the terms are in A.P., the common difference is constant:<br>
            <b>t₂ - t₁ = t₃ - t₂</b> (or <b>2t₂ = t₁ + t₃</b>)<br><br>
            Here:<br>
            t₁ = 3 + k<br>
            t₂ = 18 - k<br>
            t₃ = 5k + 1<br><br>
            2(18 - k) = (3 + k) + (5k + 1)<br>
            36 - 2k = 6k + 4<br>
            36 - 4 = 6k + 2k<br>
            32 = 8k<br>
            k = 32 / 8<br>
            <b>k = 4</b><br><br>
            <b>Answer: k = 4.</b>
          </div>`,
          explanation: "For three terms in A.P., twice the middle term equals the sum of the first and third terms: 2b = a + c.",
          blackboard: {
            title: "Finding k in A.P.: 3+k, 18-k, 5k+1",
            engTitle: "Finding k in Arithmetic Progression",
            steps: [
              {
                stepNum: 1,
                badgeEn: "① A.P. Property: 2t₂ = t₁ + t₃",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Step 1: A.P. Property</div>
                  <div class="bb-box-yellow">
                    <div class="bb-line">If t₁, t₂, t₃ are in A.P.:</div>
                    <div class="bb-line" style="font-size:16px; font-weight:800; color:#fde047; margin:4px 0;">
                      2t₂ = t₁ + t₃
                    </div>
                  </div>
                  <div class="bb-box-cyan" style="margin-top:8px;">
                    <div>Substitute:</div>
                    <div class="bb-line">2(18 - k) = (3 + k) + (5k + 1)</div>
                    <div class="bb-line" style="color:#67e8f9; font-weight:700;">36 - 2k = 6k + 4</div>
                  </div>
                `,
                audioScriptEn: "Step 1: In an arithmetic progression, twice the middle term equals the sum of the outer terms. 2 times 18 minus k equals 3 plus k plus 5k plus 1."
              },
              {
                stepNum: 2,
                badgeEn: "② Solve for k",
                chalkHtml: `
                  <div class="bb-box-green">
                    <div class="bb-line">36 - 4 = 6k + 2k</div>
                    <div class="bb-line">32 = 8k</div>
                    <div class="bb-line">k = 32 / 8 = 4</div>
                    <div class="bb-pill-magenta" style="font-size:18px; margin-top:8px; font-weight:800;">
                      Answer: k = 4
                    </div>
                  </div>
                `,
                audioScriptEn: "Step 2: Simplifying gives 32 equals 8k. Dividing 32 by 8 gives k equals 4."
              }
            ]
          }
        },
        {
          id: "m_em_2_7",
          type: "2m",
          mark: "2 Marks",
          examTag: "Govt Model",
          q: "Find the 19th term of an A.P. -11, -15, -19, ...",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            Given A.P.: -11, -15, -19, ...<br>
            First term a = -11<br>
            Common difference d = t₂ - t₁ = -15 - (-11) = -15 + 11 = <b>-4</b><br><br>
            nth term formula: <b>tₙ = a + (n - 1)d</b><br>
            19th term t₁₉ = -11 + (19 - 1)(-4)<br>
            t₁₉ = -11 + 18(-4)<br>
            t₁₉ = -11 - 72<br>
            <b>t₁₉ = -83</b><br><br>
            <b>Answer: The 19th term is -83.</b>
          </div>`,
          explanation: "Use formula t_n = a + (n-1)d with a = -11 and d = -4."
        },
        {
          id: "m_em_2_8",
          type: "5m",
          mark: "5 Marks",
          examYear: "2022",
          examTag: "2022*",
          isImportant: true,
          q: "Find the sum of all natural numbers between 300 and 600 which are divisible by 7.",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            The natural numbers between 300 and 600 divisible by 7 are:<br>
            • First number > 300: 300 ÷ 7 = 42 R 6 ➔ 300 + (7 - 6) = <b>301</b><br>
            • Last number < 600: 600 ÷ 7 = 85 R 5 ➔ 600 - 5 = <b>595</b><br><br>
            Formed A.P.: <b>301, 308, 315, ..., 595</b><br>
            Here a = 301, d = 7, l = 595.<br><br>
            <b>1. Number of terms (n):</b><br>
            n = [(l - a) / d] + 1<br>
            n = [(595 - 301) / 7] + 1<br>
            n = [294 / 7] + 1 = 42 + 1 = <b>43 terms</b><br><br>
            <b>2. Sum of the terms (Sₙ):</b><br>
            Sₙ = (n / 2) [a + l]<br>
            S₄₃ = (43 / 2) [301 + 595]<br>
            S₄₃ = (43 / 2) [896]<br>
            S₄₃ = 43 × 448<br>
            <b>S₄₃ = 19264</b><br><br>
            <b>Answer: The sum is 19,264.</b>
          </div>`,
          explanation: "Find first and last terms in the range divisible by 7, determine n, and apply sum formula S_n = (n/2)(a+l).",
          blackboard: {
            title: "Sum of numbers between 300 and 600 divisible by 7",
            engTitle: "Sum of Multiples of 7 between 300 and 600",
            steps: [
              {
                stepNum: 1,
                badgeEn: "① Identify the A.P. Series",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Step 1: Find First and Last Term</div>
                  <div class="bb-box-cyan">
                    <div class="bb-line">• First term: a = 301 (divisible by 7)</div>
                    <div class="bb-line">• Last term: l = 595 (divisible by 7)</div>
                    <div class="bb-line" style="color:#fde047; font-weight:700; margin-top:6px;">
                      A.P.: 301, 308, 315, ..., 595
                    </div>
                  </div>
                `,
                audioScriptEn: "Step 1: The first number after 300 divisible by 7 is 301. The last number before 600 divisible by 7 is 595. So the progression is 301, 308, up to 595."
              },
              {
                stepNum: 2,
                badgeEn: "② Compute n and Sum Sₙ",
                chalkHtml: `
                  <div class="bb-box-yellow">
                    <div class="bb-line">n = [(595 - 301) / 7] + 1 = [294 / 7] + 1 = 42 + 1 = <b>43</b></div>
                  </div>
                  <div class="bb-box-green" style="margin-top:8px;">
                    <div class="bb-line">S₄₃ = (43 / 2) × [301 + 595] = (43 / 2) × 896 = 43 × 448</div>
                    <div class="bb-pill-magenta" style="font-size:18px; margin-top:8px; font-weight:800;">
                      Answer: S₄₃ = 19,264
                    </div>
                  </div>
                `,
                audioScriptEn: "Step 2: Number of terms n equals 43. Using sum formula n over 2 into a plus l, 43 times 448 gives 19,264."
              }
            ]
          }
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 4: Geometric Progression - GP (Exercise 2.7 & 2.8)
    // -------------------------------------------------------------
    {
      id: "sec_em_2_4",
      title: "Exercise 2.7 & 2.8: Geometric Progression (GP)",
      author: "Chapter 2: Numbers and Sequences",
      questions: [
        {
          id: "m_em_2_9",
          type: "2m",
          mark: "2 Marks",
          examTag: "Govt Model",
          q: "Find the 8th term of the G.P. 9, 3, 1, ...",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            Given G.P.: 9, 3, 1, ...<br>
            First term a = 9<br>
            Common ratio r = t₂ / t₁ = 3 / 9 = <b>1/3</b><br><br>
            nth term formula: <b>tₙ = a · rⁿ⁻¹</b><br>
            8th term t₈ = 9 × (1/3)⁸⁻¹<br>
            t₈ = 9 × (1/3)⁷<br>
            t₈ = 3² × (1 / 3⁷) = 1 / 3⁵<br>
            Since 3⁵ = 243:<br>
            <b>t₈ = 1 / 243</b><br><br>
            <b>Answer: The 8th term is 1/243.</b>
          </div>`,
          explanation: "In G.P., t_n = a r^(n-1). With a = 9 and r = 1/3, t_8 = 9 * (1/3)^7 = 1/243."
        },
        {
          id: "m_em_2_10",
          type: "5m",
          mark: "5 Marks",
          examYear: "2024",
          examTag: "2024*",
          isImportant: true,
          q: "Find the sum to n terms of the series: 5 + 55 + 555 + ...",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            Let Sₙ = 5 + 55 + 555 + ... to n terms<br><br>
            <b>Step 1:</b> Factor out 5:<br>
            Sₙ = 5 [1 + 11 + 111 + ... to n terms]<br><br>
            <b>Step 2:</b> Multiply and divide by 9:<br>
            Sₙ = (5/9) [9 + 99 + 999 + ... to n terms]<br><br>
            <b>Step 3:</b> Express each term as powers of 10 minus 1:<br>
            9 = 10 - 1, 99 = 10² - 1, 999 = 10³ - 1, ...<br>
            Sₙ = (5/9) [(10 - 1) + (10² - 1) + (10³ - 1) + ... to n terms]<br>
            Sₙ = (5/9) [(10 + 10² + 10³ + ... to n terms) - (1 + 1 + 1 + ... to n terms)]<br><br>
            <b>Step 4:</b> (10 + 10² + ... to n terms) is a G.P. with a = 10 and r = 10.<br>
            Sum of this G.P. = 10(10ⁿ - 1) / (10 - 1) = 10(10ⁿ - 1) / 9.<br>
            And 1 + 1 + ... n times = n.<br><br>
            <b>Step 5:</b> Substituting back:<br>
            <b>Sₙ = (5/9) [ {10(10ⁿ - 1) / 9} - n ]</b> or<br>
            <b>Sₙ = 50(10ⁿ - 1) / 81 - 5n / 9</b>
          </div>`,
          explanation: "Standard public exam 5-mark question. Factor out the digit, multiply/divide by 9, decompose into G.P. of powers of 10 minus n.",
          blackboard: {
            title: "Sum of 5 + 55 + 555 + ... to n terms",
            engTitle: "Sum of Repeated Digits Series to n terms",
            steps: [
              {
                stepNum: 1,
                badgeEn: "① Factor out 5 and Multiply/Divide by 9",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Step 1: Transform to 9s</div>
                  <div class="bb-box-cyan">
                    <div class="bb-line">Sₙ = 5 [1 + 11 + 111 + ...]</div>
                    <div class="bb-line" style="color:#fde047; font-weight:700; margin-top:6px;">
                      Sₙ = (5/9) [9 + 99 + 999 + ... to n terms]
                    </div>
                  </div>
                `,
                audioScriptEn: "Step 1: Take 5 common outside, then multiply and divide by 9 so that the terms become 9, 99, 999."
              },
              {
                stepNum: 2,
                badgeEn: "② Express as Powers of 10 and Apply G.P. Formula",
                chalkHtml: `
                  <div class="bb-box-yellow">
                    <div class="bb-line">Sₙ = (5/9) [ (10 + 10² + 10³ + ...) - (1 + 1 + ... n) ]</div>
                    <div class="bb-line">G.P. part: a = 10, r = 10 ➔ 10(10ⁿ - 1)/9</div>
                  </div>
                  <div class="bb-box-green" style="margin-top:8px;">
                    <div class="bb-pill-magenta" style="font-size:17px; font-weight:800;">
                      Answer: Sₙ = (5/9) [ {10(10ⁿ - 1)/9} - n ]
                    </div>
                  </div>
                `,
                audioScriptEn: "Step 2: Replace each term with powers of 10 minus 1. The first group forms a G.P. with a equals 10 and r equals 10. Subtract n from this G.P. sum."
              }
            ]
          }
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 5: Special Series (Exercise 2.9)
    // -------------------------------------------------------------
    {
      id: "sec_em_2_5",
      title: "Exercise 2.9: Special Series",
      author: "Chapter 2: Numbers and Sequences",
      questions: [
        {
          id: "m_em_2_11",
          type: "2m",
          mark: "2 Marks",
          examYear: "2023",
          examTag: "2023*",
          isImportant: true,
          q: "If 1 + 2 + 3 + ... + k = 325, then find the value of 1³ + 2³ + 3³ + ... + k³.",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            Given:<br>
            1 + 2 + 3 + ... + k = 325<br>
            That is, Σk = 325.<br><br>
            Special series identity:<br>
            <b>1³ + 2³ + 3³ + ... + k³ = [k(k + 1) / 2]² = (Σk)²</b><br><br>
            Substituting value:<br>
            1³ + 2³ + ... + k³ = (325)²<br>
            325 × 325 = 1,05,625<br><br>
            <b>Answer: 1³ + 2³ + 3³ + ... + k³ = 1,05,625.</b>
          </div>`,
          explanation: "The sum of cubes of first k natural numbers equals the square of the sum of first k natural numbers: Σk³ = (Σk)²."
        },
        {
          id: "m_em_2_12",
          type: "2m",
          mark: "2 Marks",
          examTag: "Govt Model",
          q: "If 1³ + 2³ + 3³ + ... + k³ = 44100, then find 1 + 2 + 3 + ... + k.",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            Given:<br>
            1³ + 2³ + 3³ + ... + k³ = 44100<br>
            Identity: <b>(Σk)² = 44100</b><br><br>
            Taking square root on both sides:<br>
            Σk = √44100<br>
            Since √441 = 21, √44100 = 210.<br><br>
            <b>Answer: 1 + 2 + 3 + ... + k = 210.</b>
          </div>`,
          explanation: "Take square root of sum of cubes to get sum of first k natural numbers: √44100 = 210."
        },
        {
          id: "m_em_2_13",
          type: "5m",
          mark: "5 Marks",
          examYear: "2024",
          examTag: "2024*",
          isImportant: true,
          q: "Find the sum of the series: 16² + 17² + 18² + ... + 30²",
          ans: `<div style="line-height:1.8;">
            <b>Solution:</b><br>
            16² + 17² + 18² + ... + 30² = (1² + 2² + ... + 30²) - (1² + 2² + ... + 15²)<br><br>
            Formula for sum of squares of first n natural numbers:<br>
            <b>Σn² = n(n + 1)(2n + 1) / 6</b><br><br>
            <b>1. Sum of squares for first 30 numbers (n = 30):</b><br>
            = 30 × (30 + 1) × (2(30) + 1) / 6<br>
            = 30 × 31 × 61 / 6<br>
            = 5 × 31 × 61<br>
            = 155 × 61 = <b>9455</b><br><br>
            <b>2. Sum of squares for first 15 numbers (n = 15):</b><br>
            = 15 × (15 + 1) × (2(15) + 1) / 6<br>
            = 15 × 16 × 31 / 6<br>
            = 5 × 8 × 31<br>
            = 40 × 31 = <b>1240</b><br><br>
            <b>3. Subtracting the two sums:</b><br>
            16² + 17² + ... + 30² = 9455 - 1240 = <b>8215</b><br><br>
            <b>Answer: The sum is 8215.</b>
          </div>`,
          explanation: "Calculate sum of first 30 squares minus sum of first 15 squares using Σn² = n(n+1)(2n+1)/6."
        }
      ]
    }
  ]
};
