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
