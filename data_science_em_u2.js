// 10th Standard Science - Unit 2: Optics (English Medium)
// Tamil Nadu State Board Samacheer Kalvi Question Bank & Solutions

const SCIENCE_EM_UNIT_2_DATA = {
  unitId: "sci_em_u2",
  unitName: "Unit 2: Optics",
  subject: "Science (English Medium)",
  syllabus: "Tamil Nadu State Board Samacheer Kalvi Class 10 Science",

  // Key Formulas and Principles
  formulas: [
    { title: "Snell's Law (Refraction)", rule: "sin i / sin r = μ₂ / μ₁ (or μ = c / v)" },
    { title: "Rayleigh's Scattering Law", rule: "Scattering (S) ∝ 1 / λ⁴ (Inversely proportional to fourth power of wavelength)" },
    { title: "Lens Formula", rule: "1 / f = 1 / v - 1 / u (f: focal length, v: image distance, u: object distance)" },
    { title: "Lens Maker's Formula", rule: "1 / f = (μ - 1) [ (1 / R₁) - (1 / R₂) ]" },
    { title: "Magnification (m)", rule: "m = h' / h = v / u" },
    { title: "Power of a Lens (P)", rule: "P = 1 / f (in metres) ➔ SI Unit: Dioptre (D)" }
  ],

  subSections: [
    // -------------------------------------------------------------
    // Section 1: Properties of Light, Refraction & Scattering
    // -------------------------------------------------------------
    {
      id: "sec_sci_em_2_1",
      title: "Section 1: Properties of Light, Refraction & Scattering",
      author: "Physics - Unit 2",
      questions: [
        {
          id: "sci_em_2_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "Optics Quiz",
          q: "According to Rayleigh's scattering law, the amount of scattering is inversely proportional to which power of its wavelength?",
          options: [
            "A. First power",
            "B. Fourth power",
            "C. Third power",
            "D. Second power"
          ],
          ans: "Answer: <b>B. Fourth power</b>",
          explanation: "Rayleigh's scattering law states that the amount of scattering 'S' is inversely proportional to the fourth power of its wavelength (1/λ⁴)."
        },
        {
          id: "sci_em_2_2",
          type: "1m",
          mark: "1 Mark",
          examTag: "Optics Quiz",
          q: "Which type of lens is used to correct the eye defect known as Hypermetropia (long-sightedness)?",
          options: [
            "A. Concave lens",
            "B. Convex lens",
            "C. Cylindrical lens",
            "D. Bifocal lens"
          ],
          ans: "Answer: <b>B. Convex lens</b>",
          explanation: "Hypermetropia occurs when the eye lens focal length is too long or the eyeball is too short; a convex lens is used to provide the additional converging power needed."
        },
        {
          id: "sci_em_2_mcq_3",
          type: "1m",
          mark: "1 Mark",
          examTag: "Optics Quiz",
          q: "When a ray of light travels from a denser medium into a rarer medium, how does the refracted ray behave?",
          options: [
            "A. It bends towards the normal",
            "B. It continues in a straight line without deviation",
            "C. It bends away from the normal",
            "D. It reflects back into the denser medium"
          ],
          ans: "Answer: <b>C. It bends away from the normal</b>",
          explanation: "When light moves from a denser medium (where it is slower) to a rarer medium (where it is faster), the path of light deviates away from the normal."
        },
        {
          id: "sci_em_2_mcq_4",
          type: "1m",
          mark: "1 Mark",
          examTag: "Optics Quiz",
          q: "During the dispersion of white light through a glass prism, which color is refracted at the smallest angle?",
          options: [
            "A. Red",
            "B. Violet",
            "C. Green",
            "D. Yellow"
          ],
          ans: "Answer: <b>A. Red</b>",
          explanation: "In a spectrum, different colors bend through different angles. Red light has the longest wavelength and undergoes the smallest angle of refraction (least deviation)."
        },
        {
          id: "sci_em_2_mcq_5",
          type: "1m",
          mark: "1 Mark",
          examTag: "Optics Quiz",
          q: "What is the SI unit of the power of a lens?",
          options: [
            "A. Metre",
            "B. Newton",
            "C. Watt",
            "D. Dioptre"
          ],
          ans: "Answer: <b>D. Dioptre</b>",
          explanation: "The power of a lens is defined as the reciprocal of its focal length, and its SI unit is the Dioptre (D)."
        },
        {
          id: "sci_em_2_mcq_6",
          type: "1m",
          mark: "1 Mark",
          examTag: "Optics Quiz",
          q: "In Raman scattering, the spectral lines having frequencies higher than the incident frequency are called:",
          options: [
            "A. Rayleigh lines",
            "B. Anti-Stokes lines",
            "C. Stokes lines",
            "D. Fraunhofer lines"
          ],
          ans: "Answer: <b>B. Anti-Stokes lines</b>",
          explanation: "In Raman scattering, lines with frequencies lower than incident frequency are Stokes lines, and those with higher frequencies are Anti-Stokes lines."
        },
        {
          id: "sci_em_2_mcq_7",
          type: "1m",
          mark: "1 Mark",
          examTag: "Optics Quiz",
          q: "Which phenomenon is primarily responsible for the white appearance of clouds?",
          options: [
            "A. Rayleigh scattering",
            "B. Mie scattering",
            "C. Tyndall effect",
            "D. Dispersion"
          ],
          ans: "Answer: <b>B. Mie scattering</b>",
          explanation: "Mie scattering is caused by larger particles like water droplets. Since it is independent of wavelength, all colors are scattered equally, making the clouds appear white."
        },
        {
          id: "sci_em_2_mcq_8",
          type: "1m",
          mark: "1 Mark",
          examTag: "Optics Quiz",
          q: "Where is the image formed in a human eye that is suffering from Myopia?",
          options: [
            "A. On the retina",
            "B. Behind the retina",
            "C. Before the retina",
            "D. At the blind spot"
          ],
          ans: "Answer: <b>C. Before the retina</b>",
          explanation: "In a myopic eye, the image of distant objects is formed before reaching the retina because the focal length is reduced or the eyeball is lengthened."
        },
        {
          id: "sci_em_2_mcq_9",
          type: "1m",
          mark: "1 Mark",
          examTag: "Optics Quiz",
          q: "In a compound microscope, the lens placed near the observer's eye is called the eye lens. Compared to the objective lens, it has:",
          options: [
            "A. Shorter focal length and smaller aperture",
            "B. Larger focal length and larger aperture",
            "C. Same focal length and same aperture",
            "D. A concave shape instead of convex"
          ],
          ans: "Answer: <b>B. Larger focal length and larger aperture</b>",
          explanation: "In a compound microscope, the objective lens has a shorter focal length, while the eye lens has a larger focal length and larger aperture."
        },
        {
          id: "sci_em_2_mcq_10",
          type: "1m",
          mark: "1 Mark",
          examTag: "Optics Quiz",
          q: "The ability of the eye lens to focus both nearby and distant objects by adjusting its focal length is called:",
          options: [
            "A. Persistence of vision",
            "B. Power of accommodation",
            "C. Refractive index",
            "D. Least distance of distinct vision"
          ],
          ans: "Answer: <b>B. Power of accommodation</b>",
          explanation: "Power of accommodation is the ability of the eye to change the focal length of its lens using ciliary muscles to focus on objects at various distances."
        },
        {
          id: "sci_em_2_3",
          type: "2m",
          mark: "2 Marks",
          examYear: "2022",
          examTag: "2022*",
          isImportant: true,
          q: "State Snell's Law of Refraction.",
          ans: `<div style="line-height:1.8;">
            <b>Statement:</b><br>
            The ratio of the sine of the angle of incidence (sin i) to the sine of the angle of refraction (sin r) is equal to the ratio of the refractive indices of the two media.<br><br>
            <b>Mathematical Equation:</b><br>
            <b style="color:var(--primary); font-size:17px;">sin i / sin r = μ₂ / μ₁</b><br><br>
            • It is also known as the <b>'Second Law of Refraction'</b>.<br>
            • Here, <b>μ₁</b> is the refractive index of the first medium and <b>μ₂</b> is the refractive index of the second medium.
          </div>`,
          explanation: "Snell's law relates angles of incidence and refraction to refractive indices: sin i / sin r = μ₂ / μ₁.",
          blackboard: {
            title: "Snell's Law of Refraction",
            engTitle: "Snell's Law of Refraction",
            steps: [
              {
                stepNum: 1,
                badge: "📌 Statement of Snell's Law",
                badgeEn: "📌 Statement of Snell's Law",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800; font-size:15px; margin-bottom:8px;">Snell's Law (Second Law of Refraction)</div>
                  <div class="bb-box-cyan">
                    <div class="bb-line" style="font-size:15px; color:#ffffff; line-height:1.7;">
                      • The ratio of sine of angle of incidence to sine of angle of refraction is constant.<br>
                      • This constant equals the ratio of refractive indices of the two media.
                    </div>
                  </div>
                `,
                audioScriptEn: "Snell's law states that the ratio of the sine of the angle of incidence to the sine of the angle of refraction equals the ratio of the refractive indices."
              },
              {
                stepNum: 2,
                badge: "📌 Equation & Terms",
                badgeEn: "📌 Equation & Terms",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800; font-size:15px; margin-bottom:8px;">Mathematical Formula</div>
                  <div class="bb-box-yellow">
                    <div class="bb-line" style="font-size:18px; font-weight:800; color:#fde047; text-align:center; margin:6px 0;">
                      sin i / sin r = μ₂ / μ₁
                    </div>
                    <div class="bb-line" style="font-size:14.5px; color:#ffffff; line-height:1.6;">
                      Where i is angle of incidence, r is angle of refraction, μ₁ and μ₂ are refractive indices of medium 1 and 2.
                    </div>
                  </div>
                `,
                audioScriptEn: "The formula is sine i divided by sine r equals mu 2 divided by mu 1."
              }
            ]
          }
        },
        {
          id: "sci_em_2_4",
          type: "2m",
          mark: "2 Marks",
          examYear: "2024",
          examTag: "2024*",
          isImportant: true,
          q: "Why does the sky appear blue?",
          ans: `<div style="line-height:1.8;">
            <b>Scientific Reason:</b><br>
            1. When sunlight enters the Earth's atmosphere, it gets scattered in all directions by gas atoms and air molecules (Rayleigh scattering).<br>
            2. According to <b>Rayleigh's Scattering Law (S ∝ 1 / λ⁴)</b>, light of shorter wavelength is scattered much more than light of longer wavelength.<br>
            3. In the visible spectrum, <b>blue light has a much shorter wavelength</b> than red light.<br>
            4. Consequently, blue light is scattered predominantly across the atmosphere and enters our eyes from all directions, making the sky appear blue.
          </div>`,
          explanation: "Blue light has shorter wavelength and scatters most in the atmosphere according to Rayleigh's law."
        },
        {
          id: "sci_em_2_5",
          type: "2m",
          mark: "2 Marks",
          q: "Why does the Sun appear reddish during sunrise and sunset?",
          ans: `<div style="line-height:1.8;">
            <b>Scientific Reason:</b><br>
            • During sunrise and sunset, the Sun is near the horizon and sunlight has to travel a much longer distance through the Earth's atmosphere to reach our eyes.<br>
            • Blue and violet lights with shorter wavelengths are almost completely scattered away and eliminated along the long atmospheric path.<br>
            • <b>Red light has the longest wavelength</b> in the visible spectrum and therefore undergoes the least scattering.<br>
            • Thus, predominantly red rays manage to travel through the thick atmosphere and reach our eyes directly, making the Sun appear reddish during dawn and dusk.
          </div>`,
          explanation: "Red light has longer wavelength, scatters least, and traverses the long atmospheric path at dawn and dusk."
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 2: Lenses & Image Formation
    // -------------------------------------------------------------
    {
      id: "sec_sci_em_2_2",
      title: "Section 2: Lenses & Image Formation",
      author: "Physics - Unit 2",
      questions: [
        {
          id: "sci_em_2_6",
          type: "2m",
          mark: "2 Marks",
          examYear: "2023",
          examTag: "2023*",
          isImportant: true,
          q: "Differentiate between a Convex Lens and a Concave Lens.",
          ans: `<table style="width:100%; border-collapse:collapse; margin-top:8px; font-size:13.5px; line-height:1.6;">
            <tr style="background:#e0f2fe; color:#0369a1;">
              <th style="padding:8px 10px; border:1px solid #94a3b8; text-align:left;">S.No</th>
              <th style="padding:8px 10px; border:1px solid #94a3b8; text-align:left;">Convex Lens</th>
              <th style="padding:8px 10px; border:1px solid #94a3b8; text-align:left;">Concave Lens</th>
            </tr>
            <tr>
              <td style="padding:6px 10px; border:1px solid #cbd5e1; font-weight:700;">1</td>
              <td style="padding:6px 10px; border:1px solid #cbd5e1;">Thicker in the middle and thinner at the edges.</td>
              <td style="padding:6px 10px; border:1px solid #cbd5e1;">Thinner in the middle and thicker at the edges.</td>
            </tr>
            <tr>
              <td style="padding:6px 10px; border:1px solid #cbd5e1; font-weight:700;">2</td>
              <td style="padding:6px 10px; border:1px solid #cbd5e1;">It is a <b>converging lens</b> (converges light rays).</td>
              <td style="padding:6px 10px; border:1px solid #cbd5e1;">It is a <b>diverging lens</b> (diverges light rays).</td>
            </tr>
            <tr>
              <td style="padding:6px 10px; border:1px solid #cbd5e1; font-weight:700;">3</td>
              <td style="padding:6px 10px; border:1px solid #cbd5e1;">Produces mostly <b>real and inverted images</b> (except when within focal length).</td>
              <td style="padding:6px 10px; border:1px solid #cbd5e1;">Always produces <b>virtual, erect and diminished images</b>.</td>
            </tr>
            <tr>
              <td style="padding:6px 10px; border:1px solid #cbd5e1; font-weight:700;">4</td>
              <td style="padding:6px 10px; border:1px solid #cbd5e1;">Used to correct <b>Hypermetropia (Long-sightedness)</b>.</td>
              <td style="padding:6px 10px; border:1px solid #cbd5e1;">Used to correct <b>Myopia (Short-sightedness)</b>.</td>
            </tr>
          </table>`,
          explanation: "Convex lens converges light and corrects hypermetropia; concave lens diverges light and corrects myopia."
        },
        {
          id: "sci_em_2_7",
          type: "2m",
          mark: "2 Marks",
          q: "What is Power of a Lens? Define 1 Dioptre.",
          ans: `<div style="line-height:1.8;">
            <b>Power of a Lens:</b><br>
            The ability of a lens to converge or diverge light rays is called its <b>'Power of a Lens'</b>.<br>
            It is numerically equal to the reciprocal of its focal length expressed in metres.<br><br>
            • <b>Formula:</b> <b style="color:var(--primary); font-size:16px;">P = 1 / f</b> (where f is in metres)<br>
            • <b>SI Unit:</b> <b>Dioptre (D)</b>.<br><br>
            <b>Definition of 1 Dioptre:</b><br>
            One Dioptre is the power of a lens having a focal length of exactly <b>1 metre</b> (1 D = 1 m⁻¹).<br>
            • Power of a convex lens is <b>positive (+)</b>.<br>
            • Power of a concave lens is <b>negative (-)</b>.
          </div>`,
          explanation: "Power is reciprocal of focal length in metres (P = 1/f). SI unit is Dioptre (D)."
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 3: Human Eye, Defects of Vision & Remedies
    // -------------------------------------------------------------
    {
      id: "sec_sci_em_2_3",
      title: "Section 3: Human Eye, Defects of Vision & Remedies",
      author: "Physics - Unit 2",
      questions: [
        {
          id: "sci_em_2_8",
          type: "5m",
          mark: "4 / 7 Marks",
          examYear: "2024",
          examTag: "2024*",
          isImportant: true,
          q: "Explain the eye defects Myopia and Hypermetropia with their causes, effects, and corrective measures with ray diagrams.",
          ans: `<div style="line-height:1.8;">
            <b>1. Myopia (Short-sightedness):</b><br>
            • <b>Symptoms:</b> A person with myopia can see nearby objects clearly, but cannot see distant objects distinctly.<br>
            • <b>Causes:</b> Elongation of the eye ball or shortening of focal length of the eye lens.<br>
            • <b>Effect:</b> The image of distant objects is formed in <b>front of the retina</b>.<br>
            • <b>Correction:</b> It can be corrected by using a <b>Concave Lens (Diverging lens)</b> of suitable focal length.<br><br>

            <b>2. Hypermetropia (Long-sightedness):</b><br>
            • <b>Symptoms:</b> A person with hypermetropia can see distant objects clearly, but cannot see nearby objects distinctly.<br>
            • <b>Causes:</b> Shortening of the eye ball or increase in focal length of the eye lens.<br>
            • <b>Effect:</b> The image of nearby objects is focused <b>behind the retina</b>.<br>
            • <b>Correction:</b> It can be corrected by using a <b>Convex Lens (Converging lens)</b> of suitable focal length.<br><br>
            <div style="margin-top:10px; display:flex; gap:8px; flex-wrap:wrap;">
              <button type="button" onclick="openImageModal('images/sci_bb_myopia.jpg', 'Myopia - Short-sightedness (Ray Diagram &amp; Q&amp;A)')" class="tab-btn" style="background:#0f766e; color:#fff; border:none; padding:6px 12px; border-radius:8px; font-size:12px; font-weight:700; cursor:pointer;">🔍 View Myopia Chalkboard</button>
              <button type="button" onclick="openImageModal('images/sci_bb_hypermetropia.jpg', 'Hypermetropia - Long-sightedness (Ray Diagram &amp; Q&amp;A)')" class="tab-btn" style="background:#0369a1; color:#fff; border:none; padding:6px 12px; border-radius:8px; font-size:12px; font-weight:700; cursor:pointer;">🔍 View Hypermetropia Chalkboard</button>
            </div>
          </div>`,
          explanation: "Myopia is corrected by concave lens; hypermetropia is corrected by convex lens.",
          diagramImg: "images/sci_bb_myopia_hypermetropia.jpg",
          diagramCaption: "Visual Chalkboard: Myopia vs Hypermetropia Quick Revision (Comparison Table, Ray Diagrams & Power Formulas)",
          blackboard: {
            title: "Myopia vs Hypermetropia (Revision Chalkboard)",
            engTitle: "Myopia vs Hypermetropia (Revision Chalkboard)",
            fullBoardImg: "images/sci_bb_myopia_hypermetropia.jpg"
          }
        }
      ]
    }
  ]
};


// ==========================================
// ðŸŒŸ Outside Book Practice Questions & Mock Test 1-Mark Points (Unit 2 EM)
// ==========================================
if (typeof SCIENCE_EM_UNIT_2_DATA !== 'undefined') {
  if (!SCIENCE_EM_UNIT_2_DATA.subSections) SCIENCE_EM_UNIT_2_DATA.subSections = [];
  SCIENCE_EM_UNIT_2_DATA.subSections.push({
    id: "sci_em_u2_outside",
    title: "ðŸŒŸ Outside Book Practice Questions & Mock Test 1-Mark Points",
    author: "Expert Science Faculty",
    questions: [
      {
        id: "sci_em_u2_out_5m_1",
        q: "Explain the construction, image formation, and uses of a simple microscope with a neat ray diagram.",
        type: "5m",
        examTag: "Outside Book / Extra Practice 5-Mark Question",
        ans: "<b>Simple Microscope:</b><br><br>" +
             "<b>1. Construction:</b><br>" +
             "A simple microscope consists of a single biconvex lens of short focal length mounted in a metallic or plastic frame provided with a handle.<br><br>" +
             "<b>2. Principle & Image Formation:</b><br>" +
             "â€¢ An object AB is placed between the optical centre (O) and principal focus (F) of the convex lens (u < f).<br>" +
             "â€¢ Ray 1 parallel to the principal axis refracts through second focus F'.<br>" +
             "â€¢ Ray 2 passing straight through optical centre O emerges undeviated.<br>" +
             "â€¢ Since the refracted rays diverge on the opposite side, they appear to originate from point A' behind the object when extended backwards.<br>" +
             "â€¢ Thus, a <b>virtual, erect, and magnified image A'B'</b> is produced on the same side of the lens.<br><br>" +
             "<b>3. Magnifying Power:</b><br>" +
             "<div style='text-align:center; font-size:15px; font-weight:bold; color:#0369a1; padding:6px; background:#f0f9ff; border-radius:6px;'>m = 1 + (D / f)</div>" +
             "where D is the least distance of distinct vision (25 cm) and f is focal length.<br><br>" +
             "<b>4. Practical Uses:</b><br>" +
             "1. Watchmakers and jewellers use it to inspect minute gears and precious stones.<br>" +
             "2. Science laboratory students use it to read vernier and micrometer scale divisions.<br>" +
             "3. Forensic experts use it to analyze finger prints and micro-signatures.",
        explanation: "When an object is placed within the focal length of a convex lens, a virtual, erect, and magnified image is formed.",
        diagramCaption: "Ray Diagram of Image Formation in a Simple Microscope",
        diagramSvg: `<svg viewBox="0 0 460 260" style="max-width:100%; height:auto; display:block; margin:0 auto; background:#f8fafc; border-radius:12px; border:1px solid #cbd5e1;">
  <text x="230" y="24" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e293b">Simple Microscope (Virtual Erect Image)</text>
  <line x1="20" y1="140" x2="440" y2="140" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3"/>
  <path d="M 270,50 Q 285,140 270,230 Q 255,140 270,50 Z" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.5" fill-opacity="0.8"/>
  <text x="270" y="42" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">Convex Lens</text>
  <circle cx="270" cy="140" r="3" fill="#1e293b"/><text x="272" y="156" font-size="11" font-weight="bold" fill="#1e293b">O</text>
  <circle cx="170" cy="140" r="3" fill="#1e293b"/><text x="168" y="156" font-size="11" font-weight="bold" fill="#1e293b">F</text>
  <circle cx="370" cy="140" r="3" fill="#1e293b"/><text x="368" y="156" font-size="11" font-weight="bold" fill="#1e293b">F'</text>
  <line x1="220" y1="140" x2="220" y2="105" stroke="#16a34a" stroke-width="3"/>
  <polygon points="216,108 220,98 224,108" fill="#16a34a"/>
  <text x="212" y="94" font-size="11" font-weight="bold" fill="#15803d">A</text><text x="218" y="155" font-size="10" font-weight="bold" fill="#15803d">B (Object)</text>
  <line x1="220" y1="102" x2="270" y2="102" stroke="#ef4444" stroke-width="1.8"/>
  <line x1="270" y1="102" x2="430" y2="162" stroke="#ef4444" stroke-width="1.8"/>
  <line x1="220" y1="102" x2="430" y2="204" stroke="#f59e0b" stroke-width="1.8"/>
  <line x1="270" y1="102" x2="100" y2="38" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="220" y1="102" x2="100" y2="38" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="100" y1="140" x2="100" y2="40" stroke="#7c3aed" stroke-width="3.5" stroke-dasharray="5,3"/>
  <polygon points="95,44 100,32 105,44" fill="#7c3aed"/>
  <text x="92" y="28" font-size="12" font-weight="bold" fill="#6d28d9">A'</text><text x="80" y="156" font-size="10" font-weight="bold" fill="#6d28d9">B' (Virtual Image)</text>
  <text x="420" y="180" font-size="20">ðŸ‘ï¸</text>
  <rect x="20" y="215" width="420" height="32" rx="6" fill="#f1f5f9"/>
  <text x="230" y="235" font-size="10.5" font-weight="bold" fill="#334155" text-anchor="middle">Nature: Virtual, Erect &amp; Magnified Image</text>
</svg>`
      },
      {
        id: "sci_em_u2_out_5m_2",
        q: "Explain Myopia (short-sightedness) and Hypermetropia (long-sightedness), their causes, and correction methods with clear ray diagrams.",
        type: "5m",
        examTag: "Outside Book / Extra Practice 5-Mark Question",
        ans: "<b>Eye Defects and Ray Diagram Corrections:</b><br><br>" +
             "<b>1. Myopia (Short-sightedness):</b><br>" +
             "â€¢ <b>Symptom:</b> A person can view nearby objects clearly, but distant objects appear blurred.<br>" +
             "â€¢ <b>Causes:</b> Elongation of the eyeball or excessive curvature of the eye lens (short focal length).<br>" +
             "â€¢ <b>Image Position:</b> Parallel rays from a distant object focus <b>in front of the retina</b>.<br>" +
             "â€¢ <b>Correction:</b> Corrected using a <b>concave lens (diverging lens)</b> of suitable focal length.<br><br>" +
             "<b>2. Hypermetropia (Long-sightedness):</b><br>" +
             "â€¢ <b>Symptom:</b> A person can view distant objects clearly, but nearby objects appear blurred.<br>" +
             "â€¢ <b>Causes:</b> Shortening of the eyeball or increase in focal length of the eye lens.<br>" +
             "â€¢ <b>Image Position:</b> Rays from a near object focus <b>behind the retina</b>.<br>" +
             "â€¢ <b>Correction:</b> Corrected using a <b>convex lens (converging lens)</b> of suitable focal length.",
        explanation: "Myopia is corrected by diverging concave lenses (image in front of retina); Hypermetropia is corrected by converging convex lenses (image behind retina).",
        diagramCaption: "Comparative Ray Diagrams for Myopia & Hypermetropia Correction",
        diagramSvg: `<svg viewBox="0 0 460 280" style="max-width:100%; height:auto; display:block; margin:0 auto; background:#f8fafc; border-radius:12px; border:1px solid #cbd5e1;">
  <text x="230" y="22" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e293b">Eye Defects &amp; Lens Correction</text>
  <g transform="translate(10, 35)">
    <rect x="0" y="0" width="215" height="235" rx="8" fill="#f0f9ff" stroke="#bae6fd"/>
    <text x="107" y="18" font-size="11.5" font-weight="bold" fill="#0369a1" text-anchor="middle">1. Myopia (Short-sightedness)</text>
    <ellipse cx="140" cy="65" rx="45" ry="32" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
    <path d="M 100,50 Q 106,65 100,80 Q 94,65 100,50 Z" fill="#e0f2fe" stroke="#0284c7"/>
    <line x1="20" y1="58" x2="98" y2="58" stroke="#ef4444" stroke-width="1.2"/><line x1="20" y1="72" x2="98" y2="72" stroke="#ef4444" stroke-width="1.2"/>
    <line x1="102" y1="58" x2="160" y2="65" stroke="#ef4444" stroke-width="1.2"/><line x1="102" y1="72" x2="160" y2="65" stroke="#ef4444" stroke-width="1.2"/>
    <circle cx="160" cy="65" r="3" fill="#dc2626"/>
    <text x="107" y="110" font-size="9.5" fill="#b91c1c" text-anchor="middle">âŒ Focuses in front of retina</text>
    <ellipse cx="140" cy="165" rx="45" ry="32" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>
    <path d="M 52,148 Q 56,165 52,182 L 60,182 Q 56,165 60,148 Z" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
    <line x1="15" y1="158" x2="52" y2="158" stroke="#15803d" stroke-width="1.2"/><line x1="15" y1="172" x2="52" y2="172" stroke="#15803d" stroke-width="1.2"/>
    <line x1="60" y1="156" x2="98" y2="154" stroke="#15803d" stroke-width="1.2"/><line x1="60" y1="174" x2="98" y2="176" stroke="#15803d" stroke-width="1.2"/>
    <path d="M 100,150 Q 106,165 100,180 Q 94,165 100,150 Z" fill="#e0f2fe" stroke="#0284c7"/>
    <line x1="102" y1="154" x2="185" y2="165" stroke="#15803d" stroke-width="1.2"/><line x1="102" y1="176" x2="185" y2="165" stroke="#15803d" stroke-width="1.2"/>
    <circle cx="185" cy="165" r="3" fill="#16a34a"/>
    <text x="107" y="210" font-size="10" font-weight="bold" fill="#15803d" text-anchor="middle">âœ” Concave Lens Correction</text>
    <text x="107" y="224" font-size="9" fill="#166534" text-anchor="middle">Sharp focus onto retina</text>
  </g>
  <g transform="translate(235, 35)">
    <rect x="0" y="0" width="215" height="235" rx="8" fill="#fefce8" stroke="#fef08a"/>
    <text x="107" y="18" font-size="11.5" font-weight="bold" fill="#854d0e" text-anchor="middle">2. Hypermetropia (Long-sightedness)</text>
    <ellipse cx="120" cy="65" rx="42" ry="32" fill="#ffffff" stroke="#ca8a04" stroke-width="1.5"/>
    <path d="M 82,50 Q 88,65 82,80 Q 76,65 82,50 Z" fill="#fef9c3" stroke="#ca8a04"/>
    <line x1="20" y1="65" x2="80" y2="56" stroke="#ef4444" stroke-width="1.2"/><line x1="20" y1="65" x2="80" y2="74" stroke="#ef4444" stroke-width="1.2"/>
    <line x1="84" y1="56" x2="180" y2="65" stroke="#ef4444" stroke-width="1.2"/><line x1="84" y1="74" x2="180" y2="65" stroke="#ef4444" stroke-width="1.2"/>
    <circle cx="180" cy="65" r="3" fill="#dc2626"/>
    <text x="107" y="110" font-size="9.5" fill="#b91c1c" text-anchor="middle">âŒ Focuses behind retina</text>
    <ellipse cx="120" cy="165" rx="42" ry="32" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>
    <path d="M 45,150 Q 51,165 45,180 Q 39,165 45,150 Z" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
    <line x1="15" y1="165" x2="43" y2="158" stroke="#15803d" stroke-width="1.2"/><line x1="15" y1="165" x2="43" y2="172" stroke="#15803d" stroke-width="1.2"/>
    <line x1="47" y1="158" x2="80" y2="156" stroke="#15803d" stroke-width="1.2"/><line x1="47" y1="172" x2="80" y2="174" stroke="#15803d" stroke-width="1.2"/>
    <path d="M 82,150 Q 88,165 82,180 Q 76,165 82,150 Z" fill="#e0f2fe" stroke="#0284c7"/>
    <line x1="84" y1="156" x2="162" y2="165" stroke="#15803d" stroke-width="1.2"/><line x1="84" y1="174" x2="162" y2="165" stroke="#15803d" stroke-width="1.2"/>
    <circle cx="162" cy="165" r="3" fill="#16a34a"/>
    <text x="107" y="210" font-size="10" font-weight="bold" fill="#15803d" text-anchor="middle">âœ” Convex Lens Correction</text>
    <text x="107" y="224" font-size="9" fill="#166534" text-anchor="middle">Sharp focus onto retina</text>
  </g>
</svg>`
      },
      // 12 Mock Test 1-Mark Questions
      { id: "sci_em_u2_out_1m_1", q: "The bouncing back of light into the same medium when it hits a polished surface is called:", options: ["Reflection", "Refraction", "Dispersion", "Scattering"], ans: "Reflection", type: "1m", explanation: "Reflection is the bouncing back of light from reflective surfaces." },
      { id: "sci_em_u2_out_1m_2", q: "The bending of light rays as they pass obliquely from one transparent medium to another is called:", options: ["Refraction", "Reflection", "Total Internal Reflection", "Interference"], ans: "Refraction", type: "1m", explanation: "Refraction occurs due to change in the speed of light across different media." },
      { id: "sci_em_u2_out_1m_3", q: "Which lens is thicker at the centre and thinner at the edges?", options: ["Convex lens", "Concave lens", "Cylindrical lens", "Plane mirror"], ans: "Convex lens", type: "1m", explanation: "A convex lens is thicker in the middle and converges light rays." },
      { id: "sci_em_u2_out_1m_4", q: "Which lens is thinner at the centre and thicker at the edges?", options: ["Convex lens", "Concave lens", "Biconvex lens", "Prism"], ans: "Concave lens", type: "1m", explanation: "A concave lens is thinner in the middle and diverges light rays." },
      { id: "sci_em_u2_out_1m_5", q: "Which lens is used to correct Myopia (short-sightedness)?", options: ["Convex lens", "Concave lens", "Cylindrical lens", "Bifocal lens"], ans: "Concave lens", type: "1m", explanation: "A concave lens diverges parallel light so the image focuses on the retina." },
      { id: "sci_em_u2_out_1m_6", q: "Which lens is used to correct Hypermetropia (long-sightedness)?", options: ["Convex lens", "Concave lens", "Cylindrical lens", "Prism"], ans: "Convex lens", type: "1m", explanation: "A convex lens converges incoming rays so they meet on the retina." },
      { id: "sci_em_u2_out_1m_7", q: "What is the least distance of distinct vision for a normal human eye?", options: ["10 cm", "25 cm", "50 cm", "100 cm"], ans: "25 cm", type: "1m", explanation: "The closest distance at which an eye can see clearly without strain is 25 cm." },
      { id: "sci_em_u2_out_1m_8", q: "What is the SI unit of power of a lens?", options: ["Dioptre (D)", "Metre", "Watt", "Candela"], ans: "Dioptre (D)", type: "1m", explanation: "Power of a lens P = 1/f(m), measured in Dioptres (D)." },
      { id: "sci_em_u2_out_1m_9", q: "A simple microscope consists of which type of optical lens?", options: ["Convex lens of short focal length", "Concave lens of long focal length", "Cylindrical lens", "Plane glass plate"], ans: "Convex lens of short focal length", type: "1m", explanation: "A convex lens of short focal length gives higher magnification." },
      { id: "sci_em_u2_out_1m_10", q: "The splitting of white light into its seven constituent spectral colours is called:", options: ["Reflection", "Dispersion", "Refraction", "Polarization"], ans: "Dispersion", type: "1m", explanation: "Dispersion separates white light into VIBGYOR when passing through a prism." },
      { id: "sci_em_u2_out_1m_11", q: "How many colours are present in the visible spectrum of sunlight?", options: ["5", "6", "7 (VIBGYOR)", "8"], ans: "7 (VIBGYOR)", type: "1m", explanation: "Violet, Indigo, Blue, Green, Yellow, Orange, Red." },
      { id: "sci_em_u2_out_1m_12", q: "The reciprocal of focal length of a lens expressed in metres is called:", options: ["Power of a lens", "Magnification", "Refractive index", "Aperture"], ans: "Power of a lens", type: "1m", explanation: "P = 1/f (in metres)." }
    ]
  });
}