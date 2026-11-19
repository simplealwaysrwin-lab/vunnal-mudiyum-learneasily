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
          q: "Describe the structural organization and physiological specializations of the Human Brain under Forebrain, Midbrain, and Hindbrain.",
          ans: `<div style="line-height:1.8;">
            The human brain serves as the primary coordination and decision-making center of the body. It is organized into three major regions:<br><br>

            <b>1. Forebrain (Prosencephalon):</b><br>
            • <b>Cerebrum:</b> Largest component occupying nearly two-thirds of the brain, characterized by surface gyri (ridges) and sulci (grooves).<br>
            &nbsp;&nbsp;<i>Functions:</i> Seat of intelligence, reasoning, memory, imagination, will power, speech comprehension, and voluntary motor control.<br>
            • <b>Thalamus:</b> Centrally positioned sensory relay station transmitting incoming sensory impulses (except olfaction) to corresponding cerebral cortex zones.<br>
            • <b>Hypothalamus:</b> Master homeostatic center regulating body temperature (thermoregulation), thirst, hunger, sleep-wake cycles, emotional responses, and pituitary endocrine secretions.<br><br>

            <b>2. Midbrain (Mesencephalon):</b><br>
            • Located between the thalamus and the pons.<br>
            &nbsp;&nbsp;<i>Functions:</i> Coordinates visual and auditory reflexes, regulating pupil diameter, eye movement, and acoustic orientation responses.<br><br>

            <b>3. Hindbrain (Rhombencephalon):</b><br>
            • <b>Cerebellum:</b> Second largest brain division situated beneath the occipital lobes.<br>
            &nbsp;&nbsp;<i>Functions:</i> Coordinates voluntary neuromuscular activity, fine motor skills, body posture, and equilibrium.<br>
            • <b>Pons Varolii:</b> Bridge of transverse nerve fibers connecting cerebellum hemispheres and coordinating respiratory pneumotaxic centers.<br>
            • <b>Medulla Oblongata:</b> Conical posterior region merging with the spinal cord.<br>
            &nbsp;&nbsp;<i>Functions:</i> Vital autonomic cardiovascular and respiratory reflex center regulating heart rate, blood vessel diameter (vasomotor), breathing, coughing, sneezing, and swallowing.
          </div>`,
          ansTamil: "மூளை 3 பகுதிகள்: முன்மூளை (சிந்தனை, அறிவு), நடுமூளை (பார்வை, கேட்டல்), பின்மூளை (சமநிலை, சுவாசம், இதயத்துடிப்பு)."
        }
      ]
    }
  ]
};
