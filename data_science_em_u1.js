// 10th Standard Science - Unit 1: Laws of Motion (English Medium)
// Tamil Nadu State Board Samacheer Kalvi Question Bank & Solutions

const SCIENCE_EM_UNIT_1_DATA = {
  unitId: "sci_em_u1",
  unitName: "Unit 1: Laws of Motion",
  subject: "Science (English Medium)",
  syllabus: "Tamil Nadu State Board Samacheer Kalvi Class 10 Science",

  // Key Formulas and Principles
  formulas: [
    { title: "Linear Momentum", rule: "p = m × v (SI Unit: kg m s⁻¹)" },
    { title: "Newton's Second Law (Force)", rule: "F = m × a (SI Unit: Newton - N)" },
    { title: "Impulsive Force", rule: "J = F × t = m(v - u) = Change in momentum (SI Unit: kg m s⁻¹ or N s)" },
    { title: "Conservation of Linear Momentum", rule: "m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂" },
    { title: "Newton's Universal Gravitation", rule: "F = G · (m₁ · m₂) / r² (G = 6.674 × 10⁻¹¹ N m² kg⁻²)" },
    { title: "Acceleration Due to Gravity (g)", rule: "g = GM / R² = 9.8 m s⁻² (at surface of Earth)" }
  ],

  subSections: [
    // -------------------------------------------------------------
    // Section 1: Force, Inertia & Newton's Laws of Motion
    // -------------------------------------------------------------
    {
      id: "sec_sci_em_1_1",
      title: "Section 1: Force, Inertia & Newton's Laws of Motion",
      author: "Physics - Unit 1",
      questions: [
        {
          id: "sci_em_1_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "Physics Quiz",
          q: "Which sub-branch of Dynamics deals with the motion of bodies while considering the cause of motion?",
          options: [
            "A. Statics",
            "B. Kinetics",
            "C. Kinematics",
            "D. Aerodynamics"
          ],
          ans: "Answer: <b>B. Kinetics</b>",
          explanation: "Kinetics is the study of moving bodies that takes into account the forces (the cause) that produce the motion, whereas Kinematics describes motion without considering its cause."
        },
        {
          id: "sci_em_1_2",
          type: "1m",
          mark: "1 Mark",
          examTag: "Physics Quiz",
          q: "An athlete runs a certain distance before taking a long jump. Which property of matter does this action utilize?",
          options: [
            "A. Inertia of rest",
            "B. Inertia of direction",
            "C. Inertia of motion",
            "D. Centripetal force"
          ],
          ans: "Answer: <b>C. Inertia of motion</b>",
          explanation: "The athlete runs to gain momentum and utilize the 'inertia of motion,' which helps them maintain their state of motion and jump a longer distance."
        },
        {
          id: "sci_em_1_mcq_3",
          type: "1m",
          mark: "1 Mark",
          examTag: "Physics Quiz",
          q: "The linear momentum of a body is calculated as the product of which two quantities?",
          options: [
            "A. Force and Time",
            "B. Mass and Acceleration",
            "C. Mass and Velocity",
            "D. Weight and Gravity"
          ],
          ans: "Answer: <b>C. Mass and Velocity</b>",
          explanation: "Linear momentum (p) is defined as the product of the mass (m) of a moving body and its velocity (v), expressed as p = mv."
        },
        {
          id: "sci_em_1_mcq_4",
          type: "1m",
          mark: "1 Mark",
          examTag: "Physics Quiz",
          q: "According to Newton's Second Law of Motion, the force acting on a body is directly proportional to the:",
          options: [
            "A. Rate of change of linear momentum",
            "B. Initial velocity of the body",
            "C. Displacement over time",
            "D. Total distance traveled"
          ],
          ans: "Answer: <b>A. Rate of change of linear momentum</b>",
          explanation: "Newton's Second Law states that force is directly proportional to the rate of change of linear momentum, leading to the formula F = ma."
        },
        {
          id: "sci_em_1_mcq_5",
          type: "1m",
          mark: "1 Mark",
          examTag: "Physics Quiz",
          q: "Why is a door handle typically placed at the edge farthest from the hinges?",
          options: [
            "A. To reduce the amount of torque required",
            "B. To make the door move in a linear path",
            "C. To decrease the perpendicular distance",
            "D. To increase the moment of force by increasing the distance"
          ],
          ans: "Answer: <b>D. To increase the moment of force by increasing the distance</b>",
          explanation: "Torque or the moment of force is the product of Force and the perpendicular distance from the axis. A greater distance from the hinges (the axis of rotation) requires less force to produce the same turning effect."
        },
        {
          id: "sci_em_1_mcq_6",
          type: "1m",
          mark: "1 Mark",
          examTag: "Physics Quiz",
          q: "If two unequal forces act on a body in opposite directions, what is the direction of the resultant force?",
          options: [
            "A. In the direction of the smaller force",
            "B. Perpendicular to both forces",
            "C. The resultant force is always zero",
            "D. In the direction of the greater force"
          ],
          ans: "Answer: <b>D. In the direction of the greater force</b>",
          explanation: "When parallel unequal forces act in opposite directions, the resultant force (Fnet) is the difference between the two and is directed toward the larger force."
        },
        {
          id: "sci_em_1_mcq_7",
          type: "1m",
          mark: "1 Mark",
          examTag: "Physics Quiz",
          q: "A fielder pulls his hands back while catching a cricket ball to:",
          options: [
            "A. Decrease the time of impact",
            "B. Increase the impulse acting on his hands",
            "C. Stop the ball instantly",
            "D. Increase the time of impact to reduce the force"
          ],
          ans: "Answer: <b>D. Increase the time of impact to reduce the force</b>",
          explanation: "By pulling the hands back, the fielder increases the time interval over which the momentum changes to zero, thereby reducing the impulsive force experienced by his hands."
        },
        {
          id: "sci_em_1_mcq_8",
          type: "1m",
          mark: "1 Mark",
          examTag: "Physics Quiz",
          q: "How does the acceleration due to gravity (g) vary on the Earth's surface?",
          options: [
            "A. It is maximum at the equator and minimum at the poles",
            "B. It is zero at the poles",
            "C. It is maximum at the poles and minimum at the equator",
            "D. It is the same everywhere on the surface"
          ],
          ans: "Answer: <b>C. It is maximum at the poles and minimum at the equator</b>",
          explanation: "Since the Earth is not a perfect sphere, the radius is smaller at the poles. Because 'g' is inversely proportional to the square of the radius (g = GM / R²), it is maximum at the poles."
        },
        {
          id: "sci_em_1_mcq_9",
          type: "1m",
          mark: "1 Mark",
          examTag: "Physics Quiz",
          q: "If a person with a mass of 60 kg goes to the Moon, where gravity is 1/6th of Earth's gravity, what happens to their mass?",
          options: [
            "A. Their mass decreases to 10 kg",
            "B. Their mass remains 60 kg",
            "C. Their mass increases due to lower pressure",
            "D. Their mass becomes zero"
          ],
          ans: "Answer: <b>B. Their mass remains 60 kg</b>",
          explanation: "Mass is the quantity of matter in a body and remains constant regardless of location. Only the weight (the gravitational force) changes depending on gravity."
        },
        {
          id: "sci_em_1_mcq_10",
          type: "1m",
          mark: "1 Mark",
          examTag: "Physics Quiz",
          q: "A person in a lift experiences 'weightlessness' when the lift:",
          options: [
            "A. Moves upward with uniform acceleration",
            "B. Moves downward with uniform acceleration 'a' less than 'g'",
            "C. Falls freely with acceleration equal to 'g'",
            "D. Is at rest"
          ],
          ans: "Answer: <b>C. Falls freely with acceleration equal to 'g'</b>",
          explanation: "Weightlessness occurs during free fall when the acceleration of the lift (a) equals the acceleration due to gravity (g). In this case, the apparent weight (R = m(g-a)) becomes zero."
        },
        {
          id: "sci_em_1_3",
          type: "2m",
          mark: "2 Marks",
          examYear: "2022",
          examTag: "2022*",
          isImportant: true,
          q: "Define Inertia. What are the three types of inertia?",
          ans: `<div style="line-height:1.8;">
            <b>Definition:</b><br>
            The inherent property of a body to resist any change in its state of rest or the state of uniform motion along a straight line, unless it is influenced upon by an external unbalanced force, is known as <b>'Inertia'</b>.<br><br>
            <b>Three Types of Inertia:</b><br>
            1. <b>Inertia of Rest:</b> The resistance of a body to change its state of rest. (e.g. When the branches of a tree are shaken vigorously, leaves and fruits fall down).<br>
            2. <b>Inertia of Motion:</b> The resistance of a body to change its state of motion. (e.g. An athlete runs a certain distance before taking a long jump).<br>
            3. <b>Inertia of Direction:</b> The resistance of a body to change its direction of motion. (e.g. When a moving car makes a sharp turn along a curved road, passengers lean outwards).
          </div>`,
          explanation: "Inertia is the natural tendency of an object to resist changes in its velocity.",
          blackboard: {
            title: "Definition & Types of Inertia",
            engTitle: "Definition & Types of Inertia",
            steps: [
              {
                stepNum: 1,
                badge: "📌 Definition of Inertia",
                badgeEn: "📌 Definition of Inertia",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800; font-size:15px; margin-bottom:8px;">Inertia Definition</div>
                  <div class="bb-box-cyan">
                    <div class="bb-line" style="font-size:15px; color:#ffffff; line-height:1.7;">
                      • The inherent property of a body to resist any change in its state of rest or uniform motion, unless acted upon by an external unbalanced force.<br>
                      • It is directly proportional to the <b>mass</b> of the body.
                    </div>
                  </div>
                `,
                audioScriptEn: "Inertia is the inherent property of a body to resist any change in its state of rest or uniform motion unless acted upon by an external unbalanced force."
              },
              {
                stepNum: 2,
                badge: "📌 Three Types of Inertia",
                badgeEn: "📌 Three Types of Inertia",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800; font-size:15px; margin-bottom:8px;">Classification of Inertia</div>
                  <div class="bb-box-blue">
                    <div class="bb-line" style="font-size:14.5px; color:#ffffff; line-height:1.7;">
                      1. <b>Inertia of Rest:</b> Inability to change state of rest automatically.<br>
                      2. <b>Inertia of Motion:</b> Inability to change state of motion automatically.<br>
                      3. <b>Inertia of Direction:</b> Inability to change direction of motion automatically.
                    </div>
                  </div>
                `,
                audioScriptEn: "The three types of inertia are Inertia of Rest, Inertia of Motion, and Inertia of Direction."
              }
            ]
          }
        },
        {
          id: "sci_em_1_4",
          type: "2m",
          mark: "2 Marks",
          examYear: "2024",
          examTag: "2024*",
          isImportant: true,
          q: "State Newton's Second Law of Motion. Give its mathematical formula.",
          ans: `<div style="line-height:1.8;">
            <b>Statement:</b><br>
            The force acting on a body is directly proportional to the rate of change of linear momentum of the body and the change in momentum takes place in the direction of the force.<br><br>
            <b>Mathematical Equation:</b><br>
            Force = Mass × Acceleration<br>
            <b style="color:var(--primary); font-size:18px;">F = m × a</b><br><br>
            • It is also known as the <b>'Law of Force'</b> because it gives a measure of force.<br>
            • <b>SI Unit of Force:</b> <b>Newton (N)</b> or <b>kg m s⁻²</b>.
          </div>`,
          explanation: "Force produces acceleration in the direction of applied force: F = ma.",
          blackboard: {
            title: "Newton's Second Law of Motion",
            engTitle: "Newton's Second Law of Motion",
            steps: [
              {
                stepNum: 1,
                badge: "📌 Statement & Law",
                badgeEn: "📌 Statement & Law",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800; font-size:15px; margin-bottom:8px;">Newton's Second Law of Motion</div>
                  <div class="bb-box-cyan">
                    <div class="bb-line" style="font-size:15px; color:#ffffff; line-height:1.7;">
                      • The force acting on a body is directly proportional to the rate of change of linear momentum.<br>
                      • The momentum change takes place in the direction of the force.
                    </div>
                  </div>
                `,
                audioScriptEn: "Newton's second law states that the force acting on a body is directly proportional to the rate of change of linear momentum."
              },
              {
                stepNum: 2,
                badge: "📌 Formula & SI Unit",
                badgeEn: "📌 Formula & SI Unit",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800; font-size:15px; margin-bottom:8px;">Mathematical Formula & SI Unit</div>
                  <div class="bb-box-yellow">
                    <div class="bb-line" style="font-size:18px; font-weight:800; color:#fde047; text-align:center; margin:6px 0;">
                      F = m × a
                    </div>
                    <div class="bb-line" style="font-size:14.5px; color:#ffffff; line-height:1.6;">
                      Where F is Force, m is mass, and a is acceleration.<br>
                      SI Unit: <b>Newton (N)</b> or <b>kg m s⁻²</b>.
                    </div>
                  </div>
                `,
                audioScriptEn: "The formula is F equals m multiplied by a. The SI unit of force is Newton."
              }
            ]
          }
        },
        {
          id: "sci_em_1_5",
          type: "2m",
          mark: "2 Marks",
          q: "What is Impulsive Force? Give two everyday examples.",
          ans: `<div style="line-height:1.8;">
            <b>Definition:</b><br>
            A large force acting for a very short period of time is called an <b>'Impulsive Force'</b>.<br><br>
            • <b>Formula:</b> <b>Impulse (J) = Force (F) × Time (t) = Change in Momentum (Δp)</b><br>
            • <b>SI Unit:</b> <b>kg m s⁻¹</b> or <b>N s</b>.<br><br>
            <b>Everyday Examples:</b><br>
            1. A cricketer pulls his hands backward while catching a fast-moving ball to increase the contact time and thereby reduce the impact force.<br>
            2. Shock absorbers are installed in two-wheelers and cars to increase the impact time on uneven roads.
          </div>`,
          explanation: "Impulse is the product of force and time, equal to change in momentum: J = F x t."
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 2: Law of Conservation of Momentum & Rocket Propulsion
    // -------------------------------------------------------------
    {
      id: "sec_sci_em_1_2",
      title: "Section 2: Conservation of Momentum & Rocket Propulsion",
      author: "Physics - Unit 1",
      questions: [
        {
          id: "sci_em_1_6",
          type: "5m",
          mark: "4 / 7 Marks",
          examYear: "2023",
          examTag: "2023*",
          isImportant: true,
          q: "State and prove the Law of Conservation of Linear Momentum.",
          ans: `<div style="line-height:1.8;">
            <b>Law:</b><br>
            In the absence of an external unbalanced force, the total linear momentum of a system of bodies remains constant.<br><br>
            <b>Proof:</b><br>
            Consider two bodies A and B with masses <b>m₁</b> and <b>m₂</b> moving along a straight line in the same direction with initial velocities <b>u₁</b> and <b>u₂</b> (where u₁ > u₂).<br>
            During collision for a time interval 't', body A exerts a force F₂ on body B, and body B exerts a reaction force F₁ on body A.<br>
            After collision, their final velocities become <b>v₁</b> and <b>v₂</b> respectively.<br><br>
            1. <b>Force exerted on body B by body A (F₂):</b><br>
            F₂ = Mass × Acceleration = m₂ (v₂ - u₂) / t<br><br>
            2. <b>Reaction force exerted on body A by body B (F₁):</b><br>
            F₁ = m₁ (v₁ - u₁) / t<br><br>
            3. <b>According to Newton's Third Law (Action = - Reaction):</b><br>
            F₁ = - F₂<br>
            m₁ (v₁ - u₁) / t = - [m₂ (v₂ - u₂) / t]<br><br>
            Cancelling 't' on both sides:<br>
            m₁v₁ - m₁u₁ = - m₂v₂ + m₂u₂<br>
            Rearranging the terms:<br>
            <b style="color:var(--primary); font-size:17px;">m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂</b><br><br>
            <b>Conclusion:</b><br>
            Total momentum before collision = Total momentum after collision.<br>
            Hence, the Law of Conservation of Linear Momentum is proved.
          </div>`,
          explanation: "In an isolated system, the total initial momentum equals total final momentum.",
          diagramSvg: `<svg viewBox="0 0 520 150" style="width:100%; max-width:500px; height:auto; margin:10px auto; display:block; background:#0f172a; border-radius:12px; padding:10px;">
            <!-- Before collision -->
            <g transform="translate(10, 20)">
              <circle cx="45" cy="45" r="28" fill="#3b82f6" />
              <text x="45" y="50" fill="#fff" font-weight="bold" font-size="12" text-anchor="middle">m₁ (u₁)</text>
              <circle cx="130" cy="45" r="20" fill="#ef4444" />
              <text x="130" y="50" fill="#fff" font-weight="bold" font-size="12" text-anchor="middle">m₂ (u₂)</text>
              <text x="85" y="95" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">Before Collision</text>
            </g>
            <!-- During collision -->
            <g transform="translate(190, 20)">
              <circle cx="40" cy="45" r="28" fill="#3b82f6" />
              <circle cx="85" cy="45" r="20" fill="#ef4444" />
              <path d="M 62 30 L 62 60" stroke="#fde047" stroke-width="3" />
              <text x="62" y="95" fill="#fde047" font-size="11" font-weight="bold" text-anchor="middle">During Collision (F₁ = -F₂)</text>
            </g>
            <!-- After collision -->
            <g transform="translate(340, 20)">
              <circle cx="45" cy="45" r="28" fill="#3b82f6" />
              <text x="45" y="50" fill="#fff" font-weight="bold" font-size="12" text-anchor="middle">m₁ (v₁)</text>
              <circle cx="130" cy="45" r="20" fill="#ef4444" />
              <text x="130" y="50" fill="#fff" font-weight="bold" font-size="12" text-anchor="middle">m₂ (v₂)</text>
              <text x="85" y="95" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">After Collision</text>
            </g>
          </svg>`,
          diagramCaption: "Illustration: Conservation of Linear Momentum during Collision"
        },
        {
          id: "sci_em_1_7",
          type: "5m",
          mark: "4 / 7 Marks",
          examYear: "2024",
          examTag: "2024*",
          isImportant: true,
          q: "Explain the principle and working of rocket propulsion.",
          ans: `<div style="line-height:1.8;">
            <b>Underlying Principles:</b><br>
            Rocket propulsion is based on two fundamental scientific principles:<br>
            1. <b>Newton's Third Law of Motion:</b> For every action, there is an equal and opposite reaction.<br>
            2. <b>Law of Conservation of Linear Momentum:</b> The total momentum remains constant in the absence of an external force.<br><br>
            <b>Working Mechanism:</b><br>
            • Rockets are filled with propellant (fuel + oxidizer) in the combustion chamber.<br>
            • When ignited, the propellant burns violently, producing hot gases at extremely high temperature and pressure.<br>
            • These gases are ejected downward through the exhaust nozzle with tremendous velocity (<b>Action</b>).<br>
            • According to Newton's third law, the downward rushing exhaust gases exert an equal and opposite upward thrust on the rocket body (<b>Reaction</b>).<br>
            • As the rocket ascends, fuel is consumed continuously, so the total mass of the rocket decreases gradually.<br>
            • By the law of conservation of momentum (Mass × Velocity = constant), as mass decreases, the velocity of the rocket increases continuously until it attains the required <b>escape velocity</b>.
          </div>`,
          explanation: "Rockets move upward due to high-speed downward gas ejection: Action = Reaction.",
          diagramImg: "images/sci_bb_rocket_propulsion.jpg",
          diagramCaption: "Visual Chalkboard: Rocket Propulsion (Combustion Chamber, Nozzle, Action & Reaction Thrust, Conservation of Momentum)",
          blackboard: {
            title: "Rocket Propulsion (Working & Principles)",
            engTitle: "Rocket Propulsion (Working & Principles)",
            fullBoardImg: "images/sci_bb_rocket_propulsion.jpg"
          }
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 3: Mass vs Weight & Weightlessness
    // -------------------------------------------------------------
    {
      id: "sec_sci_em_1_3",
      title: "Section 3: Mass, Weight & Weightlessness",
      author: "Physics - Unit 1",
      questions: [
        {
          id: "sci_em_1_8",
          type: "2m",
          mark: "2 Marks",
          examYear: "2022",
          examTag: "2022*",
          isImportant: true,
          q: "Differentiate between Mass and Weight.",
          ans: `<table style="width:100%; border-collapse:collapse; margin-top:8px; font-size:13.5px; line-height:1.6;">
            <tr style="background:#e0f2fe; color:#0369a1;">
              <th style="padding:8px 10px; border:1px solid #94a3b8; text-align:left;">S.No</th>
              <th style="padding:8px 10px; border:1px solid #94a3b8; text-align:left;">Mass</th>
              <th style="padding:8px 10px; border:1px solid #94a3b8; text-align:left;">Weight</th>
            </tr>
            <tr>
              <td style="padding:6px 10px; border:1px solid #cbd5e1; font-weight:700;">1</td>
              <td style="padding:6px 10px; border:1px solid #cbd5e1;">It is the quantity of matter contained in a body.</td>
              <td style="padding:6px 10px; border:1px solid #cbd5e1;">It is the gravitational pull exerted on a body (W = mg).</td>
            </tr>
            <tr>
              <td style="padding:6px 10px; border:1px solid #cbd5e1; font-weight:700;">2</td>
              <td style="padding:6px 10px; border:1px solid #cbd5e1;">It is a <b>scalar quantity</b> (magnitude only).</td>
              <td style="padding:6px 10px; border:1px solid #cbd5e1;">It is a <b>vector quantity</b> (has magnitude & downward direction).</td>
            </tr>
            <tr>
              <td style="padding:6px 10px; border:1px solid #cbd5e1; font-weight:700;">3</td>
              <td style="padding:6px 10px; border:1px solid #cbd5e1;">Remains constant everywhere in the universe.</td>
              <td style="padding:6px 10px; border:1px solid #cbd5e1;">Varies from place to place depending on 'g'.</td>
            </tr>
            <tr>
              <td style="padding:6px 10px; border:1px solid #cbd5e1; font-weight:700;">4</td>
              <td style="padding:6px 10px; border:1px solid #cbd5e1;">SI Unit is <b>Kilogram (kg)</b>. Measured using beam balance.</td>
              <td style="padding:6px 10px; border:1px solid #cbd5e1;">SI Unit is <b>Newton (N)</b>. Measured using spring balance.</td>
            </tr>
          </table>`,
          explanation: "Mass is amount of matter (kg); weight is gravitational force (N = mg).",
          diagramImg: "images/sci_bb_mass_weight.jpg",
          diagramCaption: "Visual Chalkboard: Mass vs Weight (Definitions, Scalar/Vector, SI Units, Beam & Spring Balance)",
          blackboard: {
            title: "Mass vs Weight (Chalkboard Summary)",
            engTitle: "Mass vs Weight (Chalkboard Summary)",
            fullBoardImg: "images/sci_bb_mass_weight.jpg"
          }
        },
        {
          id: "sci_em_1_9",
          type: "2m",
          mark: "2 Marks",
          q: "What is Apparent Weight and state the condition for Weightlessness?",
          ans: `<div style="line-height:1.8;">
            <b>Apparent Weight:</b><br>
            The weight of a body experienced due to the action of gravity and opposing normal reaction force is called its <b>apparent weight (R)</b>.<br><br>
            <b>Weightlessness:</b><br>
            When a body falls freely under gravity alone (e.g. lift cable breaks, downward acceleration a = g), the normal reaction force R becomes zero:<br>
            <b style="color:var(--primary); font-size:16px;">R = m(g - a) = m(g - g) = 0</b><br><br>
            The state in which the apparent weight of a body becomes zero is called <b>'Weightlessness'</b>. Astronauts in orbiting space stations experience weightlessness because they are in a state of continuous free fall towards the Earth.
          </div>`,
          explanation: "Weightlessness occurs when acceleration downward equals g, making normal reaction R = 0."
        }
      ]
    }
  ]
};
