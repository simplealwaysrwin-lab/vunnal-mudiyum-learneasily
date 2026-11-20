// Class 10 Science - Unit 15: Nervous System
// Tamil Nadu State Board Samacheer Kalvi Question-Answer Guide (English Medium)

const SCIENCE_EM_UNIT_15_DATA = {
  unitId: "sci_em_u15",
  unitName: "Unit 15: Nervous System",
  subject: "Science",
  syllabus: "Tamil Nadu Samacheer Kalvi Class 10 Science - Zoology",

  formulas: [
    { title: "Neuron (Nerve Cell)", rule: "Structural and functional fundamental unit of the nervous system; longest specialized cell in the human body" },
    { title: "Synapse", rule: "Microscopic functional junction between the axon terminal of one neuron and the dendrite of the subsequent neuron across which neurotransmitters (like acetylcholine) diffuse" },
    { title: "Central Nervous System (CNS)", rule: "Comprises the Human Brain and Spinal Cord, functioning as the chief control and information processing hub" },
    { title: "Meninges (Protective Membranes)", rule: "Dura mater (tough outer membrane), Arachnoid mater (web-like middle vascular layer), Pia mater (delicate inner nutritive layer)" },
    { title: "Cerebrospinal Fluid (CSF)", rule: "Lymph-like clear fluid circulating in ventricles and subarachnoid space, providing mechanical cushion and nutrient exchange" },
    { title: "Reflex Action", rule: "Involuntary, instantaneous motor response to a sensory stimulus coordinated predominantly via the spinal cord without conscious brain intervention" },
    { title: "Autonomic Nervous System (ANS)", rule: "Sympathetic division ('Fight-or-Flight' response) + Parasympathetic division ('Rest-and-Digest' equilibrium)" }
  ],

  subSections: [
    {
      id: "sec_sci_em_15_1",
      title: "Section 1: Neuron Architecture, Brain Divisions, Spinal Reflex & Coordination",
      author: "Science - Unit 15: Nervous System",
      questions: [
        {
          id: "sci_em_15_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "Public Exam",
          q: "What is the primary structural and functional unit of the human nervous system?",
          options: ["A) Nephron", "B) Neuron", "C) Cyton", "D) Axon"],
          ans: "Answer: <b>B) Neuron</b><br>Explanation: Neurons (nerve cells) are the microscopic basic functional and structural units of neural tissue capable of generating and transmitting electrochemical nerve impulses.",
          ansTamil: "நியூரான் நரம்பு மண்டலத்தின் அடிப்படை அலகு ஆகும்."
        },
        {
          id: "sci_em_15_2",
          type: "1m",
          mark: "1 Mark",
          examTag: "Govt Model",
          q: "Which vital neural organ acts as the reflex center mediating instantaneous involuntary reflex actions without conscious deliberation?",
          options: ["A) Cerebrum", "B) Cerebellum", "C) Spinal Cord", "D) Medulla Oblongata"],
          ans: "Answer: <b>C) Spinal Cord</b><br>Explanation: Spinal reflexes bypass the conscious higher centers of the cerebral cortex, using immediate interneuron reflex arcs within the gray matter of the spinal cord.",
          ansTamil: "அனிச்சை செயல்களை தண்டுவடம் கட்டுப்படுத்துகிறது."
        },
        {
          id: "sci_em_15_3",
          type: "2m",
          mark: "2 Marks",
          examTag: "Public Exam",
          q: "Name the three major structural components of a multipolar neuron and state their core roles.",
          ans: `<div style="line-height:1.7;">
            A neuron structurally comprises three distinct parts:<br><br>
            1. <b>Cyton (Cell Body / Soma):</b> Contains a conspicuous nucleus, neuroplasm, and granular Nissl's granules; integrates metabolic activities.<br>
            2. <b>Dendrites:</b> Numerous short, tapering, highly branched protoplasmic processes receiving sensory input and conducting impulses toward the cyton.<br>
            3. <b>Axon:</b> A single, elongated, cylindrical process arising from the axon hillock that transmits efferent action potentials away from the cyton toward target synapses.
          </div>`,
          ansTamil: "நியூரானின் மூன்று பகுதிகள்: 1. சைட்டான் 2. டென்ட்ரான்கள் 3. ஆக்சான்."
        },
        {
          id: "sci_em_15_4",
          type: "2m",
          mark: "2 Marks",
          examTag: "Key Question",
          q: "Define a Synapse. How is unidirectional impulse transmission achieved across it?",
          ans: `<div style="line-height:1.7;">
            • A <b>Synapse</b> is the microscopic gap separating the terminal axon branches (telodendria) of one neuron from the dendrite or cell body of another neuron.<br><br>
            <b>Mechanism of Unidirectional Transmission:</b><br>
            • Upon arrival of an electrical impulse, synaptic vesicles release chemical neurotransmitters (e.g. <b>Acetylcholine</b>) into the synaptic cleft. These bind to specific receptor sites on the postsynaptic dendrite, ensuring impulses flow strictly in one direction.
          </div>`,
          ansTamil: "இரு நரம்பு செல்களுக்கு இடையே நரம்புத் தூண்டல் கடத்தப்படும் சிறிய இடைவெளி நரம்பு செல் சந்திப்பு ஆகும்."
        },
        {
          id: "sci_em_15_5",
          type: "2m",
          mark: "2 Marks",
          examTag: "Public Exam",
          q: "Enumerate the three protective meningeal membranes encapsulating the human brain.",
          ans: `<div style="line-height:1.7;">
            The brain is ensheathed within three protective connective tissue meninges:<br><br>
            1. <b>Dura mater:</b> The outermost, tough, fibrous, and durable protective membrane adhering to the cranial inner surface.<br>
            2. <b>Arachnoid mater:</b> The middle, delicate, web-like serous membrane acting as a hydraulic shock-absorber.<br>
            3. <b>Pia mater:</b> The innermost, thin, highly vascularized transparent membrane intimately adhering to the brain surface.
          </div>`,
          ansTamil: "மூளை உறைகள்: டியூரா மேட்டர் (வெளி), அராக்னாய்டு மேட்டர் (நடு), பயா மேட்டர் (உள்)."
        },
        {
          id: "sci_em_15_6",
          type: "2m",
          mark: "2 Marks",
          examTag: "Key Question",
          q: "State any two significant physiological functions of the Cerebrospinal Fluid (CSF).",
          ans: `<div style="line-height:1.7;">
            <b>Functions of Cerebrospinal Fluid:</b><br>
            1. <b>Shock Absorber & Cushion:</b> Protects the brain and spinal cord from mechanical shocks, concussions, and sudden jolts.<br>
            2. <b>Nutrient & Waste Exchange:</b> Serves as a medium of metabolic exchange, supplying nutrients and oxygen while clearing cellular waste products.<br>
            3. <b>Hydrostatic Pressure Regulation:</b> Maintains uniform intracranial pressure within the cranial cavity.
          </div>`,
          ansTamil: "CSF மூளையை அதிர்ச்சிகளிலிருந்து பாதுகாக்கிறது மற்றும் மூளைக்கு ஊட்டச்சத்து வழங்குகிறது."
        },
        {
          id: "sci_em_15_7",
          type: "2m",
          mark: "2 Marks",
          examTag: "Govt Model",
          q: "What is a Reflex Arc? Trace the sequence of pathway components involved in a reflex response.",
          ans: `<div style="line-height:1.7;">
            The structural and functional pathway traversed by nerve impulses during a reflex action is designated as a <b>Reflex Arc</b>.<br><br>
            <b>Sequence of Pathway Components:</b><br>
            <div style="background:#f1f5f9; padding:8px 12px; border-radius:6px; font-weight:700; color:#0369a1; text-align:center;">
              Receptor Organ ➔ Sensory (Afferent) Neuron ➔ Spinal Cord (Relay Center) ➔ Motor (Efferent) Neuron ➔ Effector Muscle / Organ
            </div><br>
            • <i>Example:</i> Instantly withdrawing the hand upon accidentally touching a scalding hot surface.
          </div>`,
          ansTamil: "அனிச்சைச் செயல் செல்லும் பாதை அனிச்சை வில் எனப்படும் (உணர்வேற்பி ➔ தண்டுவடம் ➔ இயங்கு தசை)."
        },
        {
          id: "sci_em_15_8",
          type: "7m",
          mark: "4 / 7 Marks",
          examTag: "Public Exam 7M",
          diagramImg: "images/sci_brain_diagram.jpg",
          q: "Describe the structural organization and physiological specializations of the Human Brain under Forebrain, Midbrain, and Hindbrain.",
          ans: `<div style="line-height:1.8;">
            <div style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; border-radius:8px; margin-bottom:14px;">
              <b style="color:#1e40af; font-size:15px;">🧠 Structural Organization:</b><br>
              • The human brain is the main control and coordination centre of the nervous system.<br>
              • It is enclosed in the skull (cranium) and protected by three meninges (Dura mater, Arachnoid membrane, and Pia mater) and cerebrospinal fluid (CSF).<br>
              • Structurally, it is organized into three major parts — <b>Forebrain, Midbrain, and Hindbrain</b>.
            </div>

            <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:12px; margin-bottom:14px; overflow-x:auto;">
              <div style="color:#0f172a; font-weight:800; font-size:15px; margin-bottom:8px; border-bottom:2px solid #3b82f6; padding-bottom:4px;">
                📊 Structural Organization & Physiological Specializations (Functions)
              </div>
              <table style="width:100%; border-collapse:collapse; font-size:13.5px; text-align:left;">
                <thead>
                  <tr style="background:#1e3a8a; color:#ffffff;">
                    <th style="padding:10px 12px; border:1px solid #94a3b8; width:18%;">Part</th>
                    <th style="padding:10px 12px; border:1px solid #94a3b8; width:34%;">Structural Organization</th>
                    <th style="padding:10px 12px; border:1px solid #94a3b8; width:48%;">Physiological Specializations (Functions)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="background:#fdf2f8;">
                    <td style="padding:10px 12px; border:1px solid #cbd5e1; font-weight:800; color:#9d174d; vertical-align:top;">Forebrain</td>
                    <td style="padding:10px 12px; border:1px solid #cbd5e1; vertical-align:top; color:#1e293b;">
                      • Largest and most developed part.<br>
                      • Includes <b>Cerebrum</b>, <b>Thalamus</b>, and <b>Hypothalamus</b>.
                    </td>
                    <td style="padding:10px 12px; border:1px solid #cbd5e1; vertical-align:top; color:#1e293b;">
                      • <b>Cerebrum:</b> Centre for thinking, memory, learning, intelligence, perception, and voluntary actions.<br>
                      • <b>Thalamus:</b> Relay station for sensory information to the cerebrum.<br>
                      • <b>Hypothalamus:</b> Maintains homeostasis (body temperature, hunger, thirst, water balance) and controls endocrine functions through the pituitary gland.
                    </td>
                  </tr>
                  <tr style="background:#f0f9ff;">
                    <td style="padding:10px 12px; border:1px solid #cbd5e1; font-weight:800; color:#0369a1; vertical-align:top;">Midbrain</td>
                    <td style="padding:10px 12px; border:1px solid #cbd5e1; vertical-align:top; color:#1e293b;">
                      • Located between the forebrain and hindbrain.<br>
                      • A small part, forming a connecting link between them.
                    </td>
                    <td style="padding:10px 12px; border:1px solid #cbd5e1; vertical-align:top; color:#1e293b;">
                      • Involved in reflexes to visual and auditory stimuli.<br>
                      • Helps in the control of eye movements and pupil size.<br>
                      • Acts as a relay centre for nerve impulses between forebrain and hindbrain.
                    </td>
                  </tr>
                  <tr style="background:#fefce8;">
                    <td style="padding:10px 12px; border:1px solid #cbd5e1; font-weight:800; color:#854d0e; vertical-align:top;">Hindbrain</td>
                    <td style="padding:10px 12px; border:1px solid #cbd5e1; vertical-align:top; color:#1e293b;">
                      • Composed of <b>Cerebellum</b>, <b>Pons</b>, and <b>Medulla oblongata</b>.
                    </td>
                    <td style="padding:10px 12px; border:1px solid #cbd5e1; vertical-align:top; color:#1e293b;">
                      • <b>Cerebellum:</b> Maintains balance and posture; coordinates the precision of voluntary movements.<br>
                      • <b>Pons:</b> Acts as a bridge between different parts of the brain and helps in the regulation of breathing.<br>
                      • <b>Medulla oblongata:</b> Controls vital involuntary functions such as breathing, heartbeat, and blood pressure.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style="background:#fdf4ff; border-left:4px solid #a855f7; padding:10px 14px; border-radius:6px; margin-top:10px;">
              <b style="color:#7e22ce;">⭐ Key Points for Exam (Quick Recall):</b><br>
              ✔ <b>Brain:</b> Control and coordination centre.<br>
              ✔ <b>Three main parts:</b> Forebrain, Midbrain, Hindbrain.<br>
              ✔ <b>Forebrain:</b> Higher mental functions and homeostasis.<br>
              ✔ <b>Midbrain:</b> Visual / auditory reflexes and relay.<br>
              ✔ <b>Hindbrain:</b> Balance, coordination, and vital involuntary actions.
            </div>
          </div>`,
          ansTamil: "மூளை 3 பகுதிகள்: முன்மூளை (சிந்தனை, அறிவு, சமநிலை பராமரிப்பு), நடுமூளை (பார்வை, கேட்டல் அனிச்சை), பின்மூளை (சமநிலை, சுவாசம், இதயத்துடிப்பு).",
          blackboard: {
            title: "Human Brain: Structural Organization & Physiological Specializations",
            engTitle: "Human Brain: Structural Organization & Physiological Specializations",
            fullBoardImg: "images/sci_brain_diagram.jpg",
            steps: [
              {
                stepNum: 1,
                badge: "🧠 1. Structural Organization of Brain",
                badgeEn: "🧠 1. Structural Organization of Brain",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800; font-size:16px;">Structural Organization of Human Brain</div>
                  <div class="bb-box-cyan" style="background:#0f172a; border:2px solid #38bdf8; border-radius:10px; padding:12px; margin-top:8px;">
                    <div class="bb-line" style="color:#e2e8f0; font-size:14.5px; line-height:1.7;">
                      • Main control and coordination centre of the nervous system.<br>
                      • Enclosed in the skull (cranium), protected by 3 meninges (Dura mater, Arachnoid membrane, Pia mater) and cerebrospinal fluid (CSF).<br>
                      • Organised into 3 major divisions: <span style="color:#fde047; font-weight:700;">Forebrain, Midbrain, and Hindbrain</span>.
                    </div>
                  </div>
                `,
                audioScriptEn: "Structural Organization: The human brain is the main control and coordination centre of the nervous system. Enclosed in the skull and protected by three meninges and cerebrospinal fluid. It is organised into Forebrain, Midbrain, and Hindbrain.",
                audioScriptTa: "மனித மூளையின் அமைப்பு: மனித மூளை நரம்பு மண்டலத்தின் முதன்மைக் கட்டுப்பாட்டு மையம். மண்டையோட்டினுள் மூன்று பாதுகாப்பு சவ்வுகள் மற்றும் மூளை தண்டுவட திரவத்தால் பாதுகாக்கப்படுகிறது. இது முன்மூளை, நடுமூளை மற்றும் பின்மூளை என மூன்று பகுதிகளாகப் பிரிக்கப்பட்டுள்ளது."
              },
              {
                stepNum: 2,
                badge: "🔬 2. Forebrain Specializations",
                badgeEn: "🔬 2. Forebrain Specializations",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#f472b6; font-weight:800; font-size:16px;">Forebrain (Cerebrum, Thalamus, Hypothalamus)</div>
                  <div class="bb-box-cyan" style="background:#0f172a; border:2px solid #f472b6; border-radius:10px; padding:12px; margin-top:8px;">
                    <div class="bb-line" style="color:#e2e8f0; font-size:14.5px; line-height:1.7;">
                      • <b style="color:#f472b6;">Cerebrum:</b> Largest part. Centre for thinking, memory, learning, intelligence, perception, and voluntary movements.<br>
                      • <b style="color:#f472b6;">Thalamus:</b> Major relay station for sensory inputs to cerebrum.<br>
                      • <b style="color:#f472b6;">Hypothalamus:</b> Controls homeostasis (body temperature, hunger, thirst, water balance) and pituitary endocrine secretions.
                    </div>
                  </div>
                `,
                audioScriptEn: "Forebrain: Cerebrum is the centre for thinking, memory, intelligence, and voluntary actions. Thalamus acts as a relay station for sensory impulses. Hypothalamus maintains homeostasis and controls pituitary gland.",
                audioScriptTa: "முன்மூளை: பெருமூளை சிந்தனை, நினைவுத்திறன் மற்றும் இயக்கங்களின் மையம். தலாமஸ் உணர்வுத் தகவல்களை கடத்தும் மறுஒலிபரப்பு மையம். ஹைப்போதலாமஸ் உடல் வெப்பநிலை, பசி, தாகம் மற்றும் பிட்யூட்டரி சுரப்பியை கட்டுப்படுத்துகிறது."
              },
              {
                stepNum: 3,
                badge: "⚡ 3. Midbrain Specializations",
                badgeEn: "⚡ 3. Midbrain Specializations",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#38bdf8; font-weight:800; font-size:16px;">Midbrain (Reflex & Relay Link)</div>
                  <div class="bb-box-cyan" style="background:#0f172a; border:2px solid #38bdf8; border-radius:10px; padding:12px; margin-top:8px;">
                    <div class="bb-line" style="color:#e2e8f0; font-size:14.5px; line-height:1.7;">
                      • Located between forebrain and hindbrain, forming a connecting link.<br>
                      • Controls <span style="color:#38bdf8; font-weight:700;">visual and auditory reflexes</span>.<br>
                      • Coordinates eye movements and pupil dilation/constriction.<br>
                      • Relay centre for nerve impulses between forebrain and hindbrain.
                    </div>
                  </div>
                `,
                audioScriptEn: "Midbrain: Located between forebrain and hindbrain. It coordinates visual and auditory reflexes, eye movements, pupil size, and impulse relay.",
                audioScriptTa: "நடுமூளை: முன்மூளைக்கும் பின்மூளைக்கும் இடையில் அமைந்துள்ளது. பார்வை மற்றும் கேட்டல் அனிச்சை செயல்களை ஒருங்கிணைக்கிறது; கண் இயக்கத்தைக் கட்டுப்படுத்துகிறது."
              },
              {
                stepNum: 4,
                badge: "⚖️ 4. Hindbrain Specializations",
                badgeEn: "⚖️ 4. Hindbrain Specializations",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#facc15; font-weight:800; font-size:16px;">Hindbrain (Cerebellum, Pons, Medulla Oblongata)</div>
                  <div class="bb-box-cyan" style="background:#0f172a; border:2px solid #facc15; border-radius:10px; padding:12px; margin-top:8px;">
                    <div class="bb-line" style="color:#e2e8f0; font-size:14.5px; line-height:1.7;">
                      • <b style="color:#facc15;">Cerebellum:</b> Coordinates precision of voluntary movements; maintains posture and body balance.<br>
                      • <b style="color:#facc15;">Pons:</b> Bridge connecting brain parts; regulates respiratory rhythm.<br>
                      • <b style="color:#facc15;">Medulla Oblongata:</b> Vital autonomic centre for breathing, heartbeat, and blood pressure regulation.
                    </div>
                  </div>
                `,
                audioScriptEn: "Hindbrain: Cerebellum maintains body posture and balance. Pons acts as a bridge and regulates breathing. Medulla oblongata controls vital involuntary functions like heartbeat, respiration, and blood pressure.",
                audioScriptTa: "பின்மூளை: சிறுமூளை உடலின் சமநிலை மற்றும் தோரணையைப் பராமரிக்கிறது. பான்ஸ் சுவாசத்தை ஒழுங்குபடுத்துகிறது. முகுளம் சுவாசம், இதயத்துடிப்பு மற்றும் இரத்த அழுத்தத்தைக் கட்டுப்படுத்தும் உயிர்காக்கும் மையம்."
              }
            ]
          }
        }
      ]
    }
  ]
};
