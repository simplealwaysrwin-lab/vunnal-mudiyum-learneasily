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
    ,
    // -------------------------------------------------------------
    // Section 4: Key Exam-Predicted 5-Mark Questions & Checkpoints (Laws of Motion)
    // -------------------------------------------------------------
    {
      id: "sec_sci_em_1_4",
      title: "Section 4: Key Exam-Predicted 5-Mark Questions & Checkpoints",
      author: "Physics - Unit 1 Special",
      questions: [
        {
          id: "sci_em_1_10",
          type: "5m",
          mark: "5 Marks",
          examTag: "Exam Predicted",
          isImportant: true,
          q: "Explain the three types of inertia with suitable examples.",
          ans: `<div style="line-height:1.8;">
            <b>Definition of Inertia:</b><br>
            Inertia is the inherent property of a body by which it resists any change in its state of rest or of uniform motion in a straight line, unless acted upon by an external unbalanced force.<br><br>
            <b>Three Types of Inertia:</b><br><br>
            1. <b>Inertia of Rest:</b><br>
            • <i>Definition:</i> The resistance of a body to change its state of rest.<br>
            • <i>Example:</i> When a stationary bus suddenly starts moving forward, the passengers fall <b>backwards</b>. This is because the lower body in contact with the bus moves forward, while the upper body tends to stay at rest due to inertia of rest.<br><br>
            2. <b>Inertia of Motion:</b><br>
            • <i>Definition:</i> The resistance of a body to change its state of uniform motion.<br>
            • <i>Example:</i> When a fast-moving bus suddenly applies brakes and stops, the passengers fall <b>forwards</b> because their upper body continues to move forward due to inertia of motion.<br><br>
            3. <b>Inertia of Direction:</b><br>
            • <i>Definition:</i> The resistance of a body to change its direction of motion.<br>
            • <i>Example:</i> When a car takes a sharp turn along a curved road, the passengers inside are pushed or lean <b>sideways</b> opposite to the direction of turn.
          </div>`,
          explanation: "Inertia resists changes in rest, motion, or direction: bus start (backwards), bus stop (forwards), sharp turn (sideways).",
          diagramSvg: `<svg viewBox="0 0 540 160" style="width:100%; max-width:540px; height:auto; margin:10px auto; display:block; background:#0f172a; border-radius:12px; padding:10px;">
            <g transform="translate(10, 15)">
              <rect x="0" y="0" width="155" height="130" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
              <text x="77" y="22" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">1. Inertia of Rest</text>
              <rect x="25" y="45" width="105" height="38" rx="4" fill="#0284c7"/>
              <circle cx="45" cy="83" r="8" fill="#64748b"/>
              <circle cx="110" cy="83" r="8" fill="#64748b"/>
              <line x1="68" y1="42" x2="52" y2="24" stroke="#fde047" stroke-width="3"/>
              <circle cx="50" cy="20" r="5" fill="#fde047"/>
              <text x="77" y="108" fill="#94a3b8" font-size="9.5" text-anchor="middle">Bus starts suddenly</text>
              <text x="77" y="122" fill="#fde047" font-size="10" font-weight="bold" text-anchor="middle">Falls Backward</text>
            </g>
            <g transform="translate(185, 15)">
              <rect x="0" y="0" width="155" height="130" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
              <text x="77" y="22" fill="#4ade80" font-size="12" font-weight="bold" text-anchor="middle">2. Inertia of Motion</text>
              <rect x="25" y="45" width="105" height="38" rx="4" fill="#16a34a"/>
              <circle cx="45" cy="83" r="8" fill="#64748b"/>
              <circle cx="110" cy="83" r="8" fill="#64748b"/>
              <line x1="68" y1="42" x2="88" y2="28" stroke="#fde047" stroke-width="3"/>
              <circle cx="91" cy="24" r="5" fill="#fde047"/>
              <text x="77" y="108" fill="#94a3b8" font-size="9.5" text-anchor="middle">Bus stops suddenly</text>
              <text x="77" y="122" fill="#4ade80" font-size="10" font-weight="bold" text-anchor="middle">Falls Forward</text>
            </g>
            <g transform="translate(360, 15)">
              <rect x="0" y="0" width="155" height="130" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
              <text x="77" y="22" fill="#f43f5e" font-size="12" font-weight="bold" text-anchor="middle">3. Inertia of Direction</text>
              <circle cx="77" cy="65" r="22" fill="none" stroke="#64748b" stroke-width="3" stroke-dasharray="3 3"/>
              <rect x="65" y="52" width="24" height="30" rx="3" fill="#e11d48"/>
              <line x1="93" y1="65" x2="118" y2="65" stroke="#fde047" stroke-width="2.5"/>
              <path d="M118 65 L110 60 L110 70 Z" fill="#fde047"/>
              <text x="77" y="108" fill="#94a3b8" font-size="9.5" text-anchor="middle">Car takes sharp turn</text>
              <text x="77" y="122" fill="#f43f5e" font-size="10" font-weight="bold" text-anchor="middle">Leans Sideways</text>
            </g>
          </svg>`,
          diagramCaption: "Three Types of Inertia: Inertia of Rest, Inertia of Motion, and Inertia of Direction",
          checkpoints: [
            {
              q: "1. What is inertia?",
              options: [
                "A. The force that accelerates a body",
                "B. The inherent property of a body to resist any change in its state of rest or motion",
                "C. The rate of change of linear momentum",
                "D. Energy stored due to motion"
              ],
              ans: 1,
              explanation: "Inertia is the inherent property of a body by which it resists any change in its state of rest or uniform motion in a straight line."
            },
            {
              q: "2. When a bus suddenly starts moving forward, passengers fall backwards. Which type of inertia is this?",
              options: [
                "A. Inertia of motion",
                "B. Inertia of direction",
                "C. Inertia of rest",
                "D. Gravitational inertia"
              ],
              ans: 2,
              explanation: "The body tends to stay at rest while the bus moves forward, causing the passenger to fall backwards due to inertia of rest."
            },
            {
              q: "3. When a moving bus applies brakes suddenly, passengers fall forward due to:",
              options: [
                "A. Inertia of rest",
                "B. Inertia of motion",
                "C. Inertia of direction",
                "D. Zero gravity"
              ],
              ans: 1,
              explanation: "The moving body tends to continue moving forward, causing the passenger to lurch forward due to inertia of motion."
            },
            {
              q: "4. A passenger leans sideways when a car takes a sharp turn on a road due to:",
              options: [
                "A. Inertia of direction",
                "B. Inertia of rest",
                "C. Centripetal acceleration only",
                "D. Gravitational pull"
              ],
              ans: 0,
              explanation: "The body tends to continue moving in its original straight path, leaning sideways when the vehicle turns due to inertia of direction."
            },
            {
              q: "5. How many types of inertia are there in classical physics?",
              options: [
                "A. Two",
                "B. Three (Rest, Motion, Direction)",
                "C. Four",
                "D. Five"
              ],
              ans: 1,
              explanation: "There are three types: Inertia of rest, Inertia of motion, and Inertia of direction."
            }
          ]
        },
        {
          id: "sci_em_1_11",
          type: "5m",
          mark: "5 Marks",
          examTag: "Exam Predicted",
          isImportant: true,
          q: "Derive the mathematical expression for force using Newton’s Second Law of Motion.",
          ans: `<div style="line-height:1.8;">
            <b>Statement of Newton’s Second Law:</b><br>
            The rate of change of linear momentum of a body is directly proportional to the applied external unbalanced force and takes place in the direction of the force.<br><br>
            <b>Mathematical Derivation:</b><br>
            1. Let a body of mass <b>m</b> move with an initial velocity <b>u</b>.<br>
            2. After a time interval <b>t</b>, under the action of an external force <b>F</b>, its velocity changes to <b>v</b>.<br><br>
            • Initial momentum: <b>p₁ = m × u</b><br>
            • Final momentum: <b>p₂ = m × v</b><br>
            • Change in momentum: <b>Δp = p₂ - p₁ = m × v - m × u = m(v - u)</b><br><br>
            • Rate of change of momentum = <b>Change in momentum / Time = m(v - u) / t</b><br><br>
            Since acceleration <b>a = (v - u) / t</b>, we have:<br>
            Rate of change of momentum = <b>m × a</b><br><br>
            According to Newton's Second Law:<br>
            <b>F ∝ m × a</b><br>
            <b>F = k × m × a</b><br><br>
            In SI units, the value of proportionality constant k = 1:<br>
            <b style="color:var(--primary); font-size:18px;">F = m × a</b><br><br>
            <b>Conclusion:</b> <b>Force = Mass × Acceleration</b>. Hence proved.<br>
            • <b>SI Unit of Force:</b> <b>Newton (N)</b> or <b>kg m s⁻²</b>.<br>
            • <b>1 Newton:</b> The force that produces an acceleration of 1 m s⁻² in a body of mass 1 kg.
          </div>`,
          explanation: "F = dp/dt = m(v - u)/t = ma. Newton's 2nd law establishes F = ma.",
          diagramSvg: `<svg viewBox="0 0 450 150" style="width:100%; max-width:450px; height:auto; margin:10px auto; display:block; background:#0f172a; border-radius:12px; padding:10px;">
            <line x1="20" y1="120" x2="430" y2="120" stroke="#64748b" stroke-width="3"/>
            <rect x="70" y="50" width="95" height="70" rx="6" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
            <text x="117" y="80" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">Mass = m</text>
            <text x="117" y="100" fill="#93c5fd" font-size="11" text-anchor="middle">Body</text>
            <line x1="70" y1="30" x2="150" y2="30" stroke="#4ade80" stroke-width="3"/>
            <path d="M150 30 L140 24 L140 36 Z" fill="#4ade80"/>
            <text x="110" y="20" fill="#4ade80" font-size="11" font-weight="bold" text-anchor="middle">Initial vel = u</text>
            <line x1="165" y1="85" x2="295" y2="85" stroke="#f43f5e" stroke-width="4"/>
            <path d="M295 85 L282 77 L282 93 Z" fill="#f43f5e"/>
            <text x="230" y="72" fill="#f43f5e" font-size="14" font-weight="bold" text-anchor="middle">Applied Force F</text>
            <line x1="315" y1="30" x2="395" y2="30" stroke="#fde047" stroke-width="3"/>
            <path d="M395 30 L385 24 L385 36 Z" fill="#fde047"/>
            <text x="355" y="20" fill="#fde047" font-size="11" font-weight="bold" text-anchor="middle">Final vel = v (time t)</text>
          </svg>`,
          diagramCaption: "Illustration: Force F acting on a body of mass m, accelerating from velocity u to v",
          checkpoints: [
            {
              q: "1. State Newton's Second Law of Motion:",
              options: [
                "A. For every action there is an equal and opposite reaction",
                "B. Rate of change of linear momentum is directly proportional to applied force",
                "C. A body remains at rest indefinitely without any property",
                "D. Energy can neither be created nor destroyed"
              ],
              ans: 1,
              explanation: "Newton's second law states that applied force is directly proportional to rate of change of momentum (F = dp/dt)."
            },
            {
              q: "2. In the derivation of F = ma, what is acceleration defined as?",
              options: [
                "A. a = (v - u) / t",
                "B. a = (v + u) × t",
                "C. a = m × v",
                "D. a = F × d"
              ],
              ans: 0,
              explanation: "Acceleration is the rate of change of velocity: a = (v - u) / t."
            },
            {
              q: "3. What is the value of proportionality constant k in SI units for F = k·ma?",
              options: [
                "A. 9.8",
                "B. 1",
                "C. 0.05",
                "D. 100"
              ],
              ans: 1,
              explanation: "In the SI system, 1 Newton is defined such that k = 1, giving F = ma."
            },
            {
              q: "4. What is the SI unit of force?",
              options: [
                "A. Newton (N) or kg m s⁻²",
                "B. Dyne",
                "C. Joule (J)",
                "D. Pascal (Pa)"
              ],
              ans: 0,
              explanation: "The SI unit of force is Newton (N), equivalent to kg m s⁻²."
            },
            {
              q: "5. What is the linear momentum formula?",
              options: [
                "A. p = m / v",
                "B. p = m × v",
                "C. p = F × t",
                "D. p = 0.5 m v²"
              ],
              ans: 1,
              explanation: "Linear momentum is the product of mass and velocity: p = mv."
            }
          ]
        },
        {
          id: "sci_em_1_12",
          type: "5m",
          mark: "5 Marks",
          examTag: "Numerical",
          isImportant: true,
          q: "A cricket ball of mass 0.15 kg is moving with a velocity of 20 m/s. A batsman hits the ball, and it moves in the opposite direction with a velocity of 30 m/s. If the contact time is 0.05 s, calculate: (1) The impulse acting on the ball, (2) The average force acting on the ball.",
          ans: `<div style="line-height:1.8;">
            <b>Given Data:</b><br>
            • Mass of ball (m) = <b>0.15 kg</b><br>
            • Initial velocity (u) = <b>+20 m/s</b> (forward direction)<br>
            • Final velocity (v) = <b>-30 m/s</b> (rebound in opposite direction)<br>
            • Contact time (Δt) = <b>0.05 s</b><br><br>
            <b>1. Calculation of Impulse (J):</b><br>
            Formula: <b>Impulse (J) = Change in momentum = m(v - u)</b><br>
            J = 0.15 × [-30 - (+20)]<br>
            J = 0.15 × (-50)<br>
            <b style="color:var(--primary); font-size:17px;">J = -7.5 N s (or kg m s⁻¹)</b><br>
            • <b>Magnitude of Impulse:</b> <b>7.5 N s</b> (acting opposite to initial velocity).<br><br>
            <b>2. Calculation of Average Force (F):</b><br>
            Formula: <b>Force (F) = Impulse / Contact time = J / Δt</b><br>
            F = -7.5 / 0.05 = -750 / 5<br>
            <b style="color:var(--primary); font-size:17px;">F = -150 N</b><br>
            • <b>Magnitude of Average Force:</b> <b>150 N</b> (acting opposite to initial direction).<br><br>
            <b>Key Formula to Remember:</b> <b>J = F × Δt = Δp = m(v - u)</b>.
          </div>`,
          explanation: "Impulse = m(v - u) = 0.15(-50) = -7.5 N s; Force = J / dt = -7.5 / 0.05 = -150 N.",
          diagramSvg: `<svg viewBox="0 0 500 150" style="width:100%; max-width:500px; height:auto; margin:10px auto; display:block; background:#0f172a; border-radius:12px; padding:10px;">
            <g transform="translate(30, 15)">
              <circle cx="45" cy="45" r="20" fill="#ef4444" stroke="#f87171" stroke-width="2"/>
              <text x="45" y="49" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">m=0.15kg</text>
              <line x1="75" y1="45" x2="155" y2="45" stroke="#38bdf8" stroke-width="3"/>
              <path d="M155 45 L143 38 L143 52 Z" fill="#38bdf8"/>
              <text x="110" y="34" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">u = +20 m/s</text>
              <text x="45" y="85" fill="#94a3b8" font-size="10" text-anchor="middle">Before Hit</text>
            </g>
            <line x1="240" y1="15" x2="240" y2="120" stroke="#fde047" stroke-width="3" stroke-dasharray="5 4"/>
            <text x="240" y="135" fill="#fde047" font-size="10" font-weight="bold" text-anchor="middle">Contact: Δt = 0.05s</text>
            <g transform="translate(270, 15)">
              <circle cx="125" cy="45" r="20" fill="#ef4444" stroke="#f87171" stroke-width="2"/>
              <text x="125" y="49" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">m=0.15kg</text>
              <line x1="95" y1="45" x2="15" y2="45" stroke="#4ade80" stroke-width="3"/>
              <path d="M15 45 L27 38 L27 52 Z" fill="#4ade80"/>
              <text x="55" y="34" fill="#4ade80" font-size="11" font-weight="bold" text-anchor="middle">v = -30 m/s</text>
              <text x="125" y="85" fill="#94a3b8" font-size="10" text-anchor="middle">After Hit (Rebound)</text>
            </g>
          </svg>`,
          diagramCaption: "Illustration: Cricket ball velocity reversal before and after bat impact",
          checkpoints: [
            {
              q: "1. What is the formula for impulse in terms of momentum?",
              options: [
                "A. Impulse = m(v - u)",
                "B. Impulse = m(v + u)",
                "C. Impulse = m / (v - u)",
                "D. Impulse = Force × Distance"
              ],
              ans: 0,
              explanation: "Impulse is equal to change in linear momentum: J = mv - mu = m(v - u)."
            },
            {
              q: "2. In this problem, why is final velocity taken as negative (-30 m/s)?",
              options: [
                "A. Because the ball stopped",
                "B. Because it moves in the opposite direction to the initial motion",
                "C. Because gravity is negative",
                "D. Because mass is less than 1 kg"
              ],
              ans: 1,
              explanation: "Velocity is a vector quantity; reversing direction requires assigning the opposite sign."
            },
            {
              q: "3. What is the magnitude of impulse acting on the cricket ball?",
              options: [
                "A. 1.5 N s",
                "B. 4.5 N s",
                "C. 7.5 N s",
                "D. 150 N s"
              ],
              ans: 2,
              explanation: "J = 0.15 × (-30 - 20) = 0.15 × (-50) = -7.5 N s. The magnitude is 7.5 N s."
            },
            {
              q: "4. What is the magnitude of the average force exerted on the ball by the bat?",
              options: [
                "A. 75 N",
                "B. 150 N",
                "C. 300 N",
                "D. 7.5 N"
              ],
              ans: 1,
              explanation: "F = Impulse / time = 7.5 / 0.05 = 150 N."
            },
            {
              q: "5. What are the SI units of impulse?",
              options: [
                "A. Newton (N)",
                "B. N s or kg m s⁻¹",
                "C. Joule (J)",
                "D. Watt (W)"
              ],
              ans: 1,
              explanation: "Impulse has SI units of Newton-second (N s) or kilogram metre per second (kg m s⁻¹)."
            }
          ]
        },
        {
          id: "sci_em_1_13",
          type: "5m",
          mark: "5 Marks",
          examTag: "Exam Predicted",
          isImportant: true,
          q: "Explain the Principle of Moments and Moment of a Couple with examples.",
          ans: `<div style="line-height:1.8;">
            <b>Part A: Principle of Moments</b><br>
            • <b>Statement:</b> When a body is in rotational equilibrium under parallel forces, the algebraic sum of the clockwise moments about any point is equal to the algebraic sum of the anticlockwise moments about the same point.<br>
            <b style="color:var(--primary); font-size:16px;">Clockwise Moment = Anticlockwise Moment (F₁ × d₁ = F₂ × d₂)</b><br><br>
            • <b>Moment of Force (Torque):</b> Product of force and perpendicular distance from the axis of rotation: <b>Moment = F × d</b>.<br>
            • <b>SI Unit:</b> <b>Newton metre (N m)</b>.<br>
            • <b>Example:</b> A balanced see-saw remains horizontal when children sit at distances satisfying F₁d₁ = F₂d₂.<br><br>
            <b>Part B: Moment of a Couple</b><br>
            • <b>Definition:</b> Two equal, opposite, and parallel forces acting along different lines of action constitute a <b>couple</b>.<br>
            • <b>Effect:</b> A couple produces <b>pure rotational motion</b> with zero linear translation (since net linear force F - F = 0).<br>
            • <b>Formula:</b> <b>Moment of a couple = Either Force (F) × Perpendicular distance between lines of action (S)</b>.<br>
            • <b>SI Unit:</b> <b>Newton metre (N m)</b>.<br>
            • <b>Everyday Examples:</b><br>
            1. Turning a car steering wheel with both hands.<br>
            2. Opening or closing a water tap.<br>
            3. Turning a key in a lock or using a screwdriver.
          </div>`,
          explanation: "Principle of moments: F1·d1 = F2·d2. Couple: equal opposite forces causing pure rotation (F × S).",
          diagramSvg: `<svg viewBox="0 0 520 150" style="width:100%; max-width:520px; height:auto; margin:10px auto; display:block; background:#0f172a; border-radius:12px; padding:10px;">
            <g transform="translate(10, 15)">
              <text x="120" y="20" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Principle of Moments (See-Saw)</text>
              <polygon points="120,70 105,115 135,115" fill="#f59e0b"/>
              <line x1="20" y1="70" x2="220" y2="70" stroke="#38bdf8" stroke-width="6" stroke-linecap="round"/>
              <line x1="45" y1="70" x2="45" y2="35" stroke="#ef4444" stroke-width="3"/>
              <path d="M45 70 L39 60 L51 60 Z" fill="#ef4444"/>
              <text x="45" y="25" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">F₁</text>
              <line x1="195" y1="70" x2="195" y2="35" stroke="#4ade80" stroke-width="3"/>
              <path d="M195 70 L189 60 L201 60 Z" fill="#4ade80"/>
              <text x="195" y="25" fill="#4ade80" font-size="11" font-weight="bold" text-anchor="middle">F₂</text>
              <text x="120" y="130" fill="#fde047" font-size="10.5" font-weight="bold" text-anchor="middle">F₁ × d₁ = F₂ × d₂</text>
            </g>
            <g transform="translate(280, 15)">
              <text x="110" y="20" fill="#4ade80" font-size="12" font-weight="bold" text-anchor="middle">Moment of a Couple (Steering)</text>
              <circle cx="110" cy="70" r="42" fill="none" stroke="#64748b" stroke-width="5"/>
              <line x1="70" y1="70" x2="70" y2="28" stroke="#f43f5e" stroke-width="3"/>
              <path d="M70 28 L64 38 L76 38 Z" fill="#f43f5e"/>
              <text x="50" y="35" fill="#f43f5e" font-size="12" font-weight="bold">F</text>
              <line x1="150" y1="70" x2="150" y2="112" stroke="#38bdf8" stroke-width="3"/>
              <path d="M150 112 L144 102 L156 102 Z" fill="#38bdf8"/>
              <text x="162" y="112" fill="#38bdf8" font-size="12" font-weight="bold">F</text>
              <text x="110" y="130" fill="#fde047" font-size="10.5" font-weight="bold" text-anchor="middle">Couple = F × d (Pure Rotation)</text>
            </g>
          </svg>`,
          diagramCaption: "Illustration: Balanced See-Saw (Moments) and Steering Wheel (Couple)",
          checkpoints: [
            {
              q: "1. What is the condition for rotational equilibrium in the Principle of Moments?",
              options: [
                "A. Clockwise moment = Anticlockwise moment",
                "B. Force 1 > Force 2",
                "C. Upward force = Downward force only",
                "D. Velocity must be negative"
              ],
              ans: 0,
              explanation: "In rotational equilibrium, sum of clockwise moments equals sum of anticlockwise moments."
            },
            {
              q: "2. What is the SI unit of moment of a force?",
              options: [
                "A. Newton (N)",
                "B. Newton metre (N m)",
                "C. Joule per second (J/s)",
                "D. Kilogram per metre"
              ],
              ans: 1,
              explanation: "Moment = Force × Perpendicular distance = N × m = Newton metre (N m)."
            },
            {
              q: "3. What motion does a couple produce on a body?",
              options: [
                "A. Pure linear motion",
                "B. Pure rotational motion without linear displacement",
                "C. Random zigzag motion",
                "D. Vibrational motion only"
              ],
              ans: 1,
              explanation: "Because the forces are equal and opposite, net linear force is zero, resulting in pure rotation."
            },
            {
              q: "4. Which of the following operates on the principle of a couple?",
              options: [
                "A. Turning a steering wheel",
                "B. Free fall of an apple",
                "C. Rocket launch",
                "D. Train moving on straight tracks"
              ],
              ans: 0,
              explanation: "A steering wheel is turned using two equal and opposite forces applied at opposite ends, forming a couple."
            },
            {
              q: "5. What is the formula for the moment of a couple?",
              options: [
                "A. Mass × Acceleration",
                "B. Force × Perpendicular distance between two forces (F × S)",
                "C. Force / Distance",
                "D. Work / Time"
              ],
              ans: 1,
              explanation: "Moment of a couple is the product of either force and the perpendicular distance between them (F × S)."
            }
          ]
        }
      ]
    }

  ]
};
