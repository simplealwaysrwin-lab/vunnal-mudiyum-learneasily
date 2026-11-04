/**
 * 10th Standard English - Unit 5 Study Guide & Question Bank
 * Tamil Nadu Samacheer Kalvi Syllabus
 * 
 * Sections:
 * 1. Prose: Tech Bloomers
 * 2. Poem: The Secret of the Machines (Rudyard Kipling)
 * 3. Supplementary: A Dilemma (Silas Weir Mitchell)
 * 4. Grammar: Pronouns & Reported Speech (Direct to Indirect Speech)
 */

const ENGLISH_UNIT_5_DATA = {
  unit: "Unit 5",
  title: "Unit 5: Prose - Tech Bloomers | Poem - The Secret of the Machines | Supplementary - A Dilemma | Grammar",

  // 📖 கதை வடிவிலான முழுமையான தமிழ் & ஆங்கில விளக்கம் (Bilingual Story Mode with Audio Voice Scripts)
  stories: [
    {
      id: "story_prose_u5",
      title: "💻 Tech Bloomers (தொழில்நுட்ப மலர்ச்சி - மாற்றுத்திறனாளிகளின் வரப்பிரசாதம்)",
      titleEn: "Tech Bloomers",
      author: "Special Feature on Assistive Technology",
      type: "உரைநடை (Prose)",
      summary: "நவீன தொழில்நுட்பங்கள் மாற்றுத்திறனாளிகள் மற்றவர்களைச் சார்ந்திருக்காமல் தன்னிச்சையாக வாழவும், கல்வி கற்கவும், வேலை செய்யவும் எவ்வாறு உதவுகின்றன என்பதை அலிஷா மற்றும் டேவிட் ஆகியோரின் உண்மை வாழ்க்கை வழி விவரிக்கும் உத்வேகமூட்டும் பாடம்!",
      characters: [
        { name: "அலிஷா (Alisha)", role: "மூளை முடக்குவாதத்தால் (Cerebral Palsy) பாதிக்கப்பட்ட பெண்; 'Dragon Dictate' மென்பொருள் மூலம் பேசி தட்டச்சு செய்து பட்டம் பெற்றவர்" },
        { name: "டேவிட் (David)", role: "தசை அழற்சி நோயால் (Athetoid Cerebral Palsy) பாதிக்கப்பட்ட இளைஞர்; கண் அசைவு மற்றும் 'ECO2' உபகரணம் மூலம் உரையாடி விளையாட்டுப் பயிற்றுநராகப் பணிபுரிபவர்" },
        { name: "கிம் (Kim)", role: "ஆசிரிய ஆலோசகர்; தொழில்நுட்ப கருவிகளைப் பயன்படுத்தி மாணவர்களுக்கு வழிகாட்டுபவர்" }
      ],
      scenes: [
        {
          num: "காட்சி 1 / Scene 1",
          title: "அலிஷாவின் மாற்றம் (Empowerment through Dragon Dictate)",
          titleEn: "Empowerment through Dragon Dictate",
          tamilContent: "அலிஷாவால் தன் கைகளால் வேகமாக எழுத முடியாது. ஆனால் அவள் கணினியில் பேசப் பேச, 'Dragon Dictate' மென்பொருள் அவளது பேச்சை உடனே உரையாக (Text) மாற்றியது. இதன் மூலம் அவள் தேர்வுகளைத் தானே எழுதி நல்ல மதிப்பெண்களோடு தேர்ச்சி பெற்றாள்.",
          englishContent: "Alisha has cerebral palsy and found it exhausting to type or write with her hands. With the help of assistive speech-recognition software called <b>Dragon Dictate</b>, her spoken words were instantly converted into text on screen. This breakthrough allowed her to complete GCSE exams independently, study mathematics, and achieve academic brilliance!",
          audioNarrationTa: "வாருங்கள் மாணவர்களே! நவீன அறிவியல் மற்றும் தொழில்நுட்பத்தின் வரப்பிரசாதமான 'டெக் புளூமர்ஸ்' பாடத்தைக் கேட்போம்! மூளை முடக்குவாதத்தால் பாதிக்கப்பட்ட அலிஷாவால் கைகளால் வேகமாக எழுத முடியாது. ஆனால் அவள் கணினியின் முன் பேசப் பேச, டிராகன் டிக்டேட் என்ற மென்பொருள் அவளது பேச்சை உடனே கணினித் திரையில் எழுத்தாக மாற்றியது! இதன் மூலம் மற்றவர்களின் உதவியின்றி தானே தேர்வுகளை எழுதி சாதனை படைத்தாள் அலிஷா!",
          audioNarrationEn: "Welcome, dear students, to the inspiring world of Tech Bloomers! Meet Alisha, a bright young student with cerebral palsy. Due to physical limitations, writing or typing with her hands was intensely tiring and painful. But technology opened a magnificent new door! Using cutting-edge speech-recognition software named Dragon Dictate, every word she speaks is transformed into accurate written text on screen. Empowered by technology, Alisha writes assignments, drafts essays, and excels in her board examinations with pride and independence!"
        },
        {
          num: "காட்சி 2 / Scene 2",
          title: "டேவிட்டின் குரல் (Liberator Communication Device & ECO2)",
          titleEn: "David's Voice and the Liberator Device",
          tamilContent: "டேவிட்டிற்கு வாய் பேச இயலாது. ஆனால் அவன் தன் கண் அசைவுகள் மற்றும் கால் அசைவு சுவிட்சுகள் (Foot switch) மூலம் 'ECO2' கணினித் திரையில் எழுத்துக்களைத் தொட்டுப் பேசுகிறான். இப்போது அவன் பள்ளி மாணவர்களுக்கு விளையாட்டுப் பயிற்சி அளிக்கும் திறமையான பயிற்றுநராக விளங்குகிறான்!",
          englishContent: "David suffers from athetoid cerebral palsy, making natural speech and movement impossible. However, using an advanced <b>ECO2 communication device</b> paired with eye-gaze technology and foot switches, David communicates fluently with synthesized speech. Today, he is an enthusiastic sports coach and motivational mentor for school children!",
          audioNarrationTa: "அடுத்து நாம் காணவிருப்பது டேவிட்டின் மனோதிடக் கதை! டேவிட்டிற்கு வாய் பேச இயலாது; கைகளையும் கால்களையும் அசைக்க முடியாது. ஆனால் அவன் தன் கண் அசைவுகள் மற்றும் பாத சுவிட்ச் மூலம் இகோ டூ என்ற நவீன கருவியைப் பயன்படுத்தி கம்பீரமாகப் பேசுகிறான்! இன்று அவன் பள்ளி மாணவர்களுக்கு விளையாட்டுப் பயிற்சியளிக்கும் தன்னம்பிக்கைப் பயிற்றுநராக மிளிர்கிறான்!",
          audioNarrationEn: "Now listen to the remarkable journey of David, a courageous young man living with athetoid cerebral palsy! Though David cannot speak with his voice or hold a pen, assistive technology has become his greatest champion. Utilizing an advanced ECO2 Liberator communication device linked to eye-gaze tracking and foot switches, he selects words with his gaze. The computer speaks his thoughts aloud in natural synthesized speech! Today, David serves as an active sports coach, mentoring young athletes and demonstrating that limitations exist only in our minds!"
        }
      ],
      moral: "மனித ஆற்றல் எல்லைக்குட்பட்டது; ஆனால் தொழில்நுட்பம் எல்லைகளற்ற சாத்தியங்களைத் திறந்து வைக்கிறது."
    },
    {
      id: "story_poem_u5",
      title: "⚙️ The Secret of the Machines (எந்திரங்களின் ரகசியம்)",
      titleEn: "The Secret of the Machines",
      author: "ருட்யார்ட் கிப்ளிங் (Rudyard Kipling)",
      type: "கவிதை (Poem)",
      summary: "சுரங்கத்திலிருந்து வெட்டி எடுக்கப்பட்டு உலைகளில் உருக்கப்பட்டு உருவான எந்திரங்கள், மனிதர்களுக்காக இரவும் பகலும் அயராது உழைக்கும் தங்களின் பேராற்றலையும், அதே வேளையில் மனித மூளையின் சிறு படைப்புகளே தாங்கள் என்பதையும் நினைவூட்டும் அழகிய கவிதை.",
      scenes: [
        {
          num: "பிரிவு 1 / Stanza 1 & 2",
          title: "எந்திரங்களின் பிறப்பு & பராமரிப்பு (Origin and Care of Machines)",
          titleEn: "Origin and Care of Machines",
          tamilContent: "எந்திரங்கள் கூறுகின்றன: 'நாங்கள் நிலத்தடியில் உள்ள தாதுக்களில் இருந்து வெட்டி எடுக்கப்பட்டு, உலைகளில் காய்ச்சி வார்த்தெடுக்கப்பட்டோம். எங்களுக்குத் தேவை கொஞ்சம் நிலக்கரி, தண்ணீர் மற்றும் எண்ணெய் மட்டுமே!'",
          englishContent: "The machines proudly declare their origin: they were extracted as ores from the coal-mine and melted in fiery furnaces. Hammered, filed, and gauged to fit exact specifications, all they need to work is water, coal, and oil. Once fueled, they are ready to serve human masters twenty-four hours a day!",
          audioNarrationTa: "ருட்யார்ட் கிப்ளிங் இயற்றிய எந்திரங்களின் ரகசியம் என்ற கவிதையைக் கேட்போம்! எந்திரங்கள் கூறுகின்றன: நாங்கள் பூமியின் அடியிலுள்ள சுரங்கங்களிலிருந்து தாதுக்களாக வெட்டி எடுக்கப்பட்டு, உலைகளில் உருக்கி வார்க்கப்பட்டோம். மனிதர்களின் தேவைக்கேற்ப செதுக்கப்பட்டோம். எங்களுக்குத் தேவை கொஞ்சம் நிலக்கரி, தண்ணீர் மற்றும் எண்ணெய் மட்டுமே! இவற்றைத் தந்தால் போதும், நாங்கள் இரவும் பகலும் மனிதர்களுக்காக அயராது உழைப்போம்!",
          audioNarrationEn: "Listen to the powerful rhythm of Rudyard Kipling's famous poem, The Secret of the Machines! The great metal giants speak with thunderous voices: 'We were dug from the deep ore-bed and the dark mine, melted in glowing furnaces, hammered and gauged to the thousandth of an inch! Give us water, coal, and oil to drink, and we will pull, push, lift, drive, print, plough, weave, and run for twenty-four hours a day without fatigue!'"
        },
        {
          num: "பிரிவு 2 / Stanza 3 & 4",
          title: "எங்களின் மாபெரும் ஆற்றலும் வரம்பும் (Power and Limitations of Machines)",
          titleEn: "Power and Limitations of Machines",
          tamilContent: "'எங்களால் எடையைத் தூக்க முடியும், நிலத்தை உழ முடியும், கடலைக் கடக்க முடியும். ஆனால் நாங்கள் ஒருபோதும் பொய் சொல்ல மாட்டோம்; எங்களுக்கு அன்பு, இரக்கம், மன்னிப்பு தெரியாது. கவனமாகப் பயன்படுத்தாவிட்டால் உங்கள் உயிரையே பறித்து விடுவோம். முடிவில் நாங்கள் உங்கள் மனித மூளையின் பிள்ளைகள் மட்டுமே!'",
          englishContent: "While machines can pull, haul, print, plough, and fly across oceans, they issue a stern reminder: the law by which they live has no mercy! They cannot comprehend a lie, nor can they love or pity. One careless slip can cost a human life. Ultimately, despite their titanic size, machines are merely the children of the human brain!",
          audioNarrationTa: "எந்திரங்கள் மேலும் கூறுகின்றன: எங்களால் மலைகளைப் பிளக்க முடியும், பெருங்கடல்களைக் கடக்க முடியும். ஆனால் விதிகளின்படி இயங்கும் எங்களுக்கு அன்பு, கருணை, மன்னிப்பு தெரியாது. ஒரு சிறு கவனக்குறைவு ஏற்பட்டால் உங்கள் உயிரையே பறித்து விடுவோம்! நாங்கள் எவ்வளவு பிரம்மாண்டமாக இருந்தாலும், மனித மூளையின் கற்பனையில் உதித்த சிறு பிள்ளைகளே நாங்கள் என்பதை நினைவில் கொள்ளுங்கள்!",
          audioNarrationEn: "Now heed the vital caution of the machines! They tell humanity: 'Remember the strict law by which we live! We are not built to comprehend a lie; we can neither love, nor pity, nor forgive! If you make a slip in handling us, you will perish! And remember this supreme truth: though our smoke may hide the heavens from your eyes, it will clear away and the stars will shine again. For all our colossal might and size, we are nothing more than children of your human brain!'"
        }
      ],
      moral: "இயந்திரங்கள் மனிதனுக்குச் சிறந்த அடிமைகள்; ஆனால் மோசமான எஜமானர்கள். தொழில்நுட்பத்தை விவேகத்துடன் ஆள வேண்டும்."
    }
  ],

  subSections: [
    {
      id: "sec_eng_5_1",
      title: "Part 1: Prose — Tech Bloomers",
      author: "Assistive Technology in Modern Life",
      questions: [
        {
          id: "eng5_1_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "Synonym",
          q: "Choose the correct synonym of the underlined word: Technology has <u>liberated</u> differently-abled people.",
          options: ["A) imprisoned", "B) freed / emancipated", "C) defeated", "D) delayed"],
          ans: "Answer: <b>B) freed / emancipated</b><br>Explanation: 'Liberate' means to set free from restrictions or confinement."
        },
        {
          id: "eng5_1_2",
          type: "1m",
          mark: "1 Mark",
          examTag: "Antonym",
          q: "Choose the correct antonym of the underlined word: Assistive devices provide <u>independent</u> living.",
          options: ["A) reliant / dependent", "B) autonomous", "C) confident", "D) powerful"],
          ans: "Answer: <b>A) reliant / dependent</b><br>Explanation: The opposite of independent is dependent or reliant."
        },
        {
          id: "eng5_1_3",
          type: "2m",
          mark: "2 Marks",
          examTag: "Important 2M",
          isImportant: true,
          q: "How does technology help differently-abled learners like Alisha?",
          ans: "Technology empowers learners like Alisha through voice-recognition software such as <b>Dragon Dictate</b>. It converts her spoken words into written text on screen, allowing her to take notes, write essays, and pass exams independently without a scribe."
        },
        {
          id: "eng5_1_4",
          type: "2m",
          mark: "2 Marks",
          q: "What devices did David use to communicate with others?",
          ans: "David used a <b>Liberator Communication Device</b> and an <b>ECO2</b> system with eye-gaze tracking and foot-switch controls to speak and type out thoughts."
        },
        {
          id: "eng5_1_5",
          type: "5m",
          mark: "5 Marks",
          examTag: "2024 Exam Question",
          isImportant: true,
          q: "Write a detailed paragraph on how modern technology transforms the lives of differently-abled people as depicted in 'Tech Bloomers'.",
          ans: `<div style="line-height:1.8;">
            <b>Introduction:</b><br>
            The lesson 'Tech Bloomers' highlights the miraculous impact of assistive technology on the lives of specially-abled individuals, transforming physical disability into exceptional capability.<br><br>
            <b>1. Alisha's Success with Speech Recognition:</b><br>
            • Alisha suffers from cerebral palsy, which hinders normal hand movements.<br>
            • With speech-recognition technology ('Dragon NaturallySpeaking'), her voice is converted directly to digital text.<br>
            • She completes exams and assignments independently and aspires to pursue higher studies.<br><br>
            <b>2. David's Independence through AAC Devices:</b><br>
            • David is affected by athetoid cerebral palsy, restricting both movement and speech.<br>
            • Using eye-gaze tracking on his ECO2 communication device, he selects icons on screen to speak full sentences.<br>
            • He now works actively as an advocate and sports trainer.<br><br>
            <b>Conclusion:</b><br>
            Technology does not just make things easier; it makes things possible for differently-abled people, offering them dignity, equal opportunity, and self-confidence.
          </div>`
        }
      ]
    },
    {
      id: "sec_eng_5_2",
      title: "Part 2: Poem — The Secret of the Machines",
      author: "Rudyard Kipling",
      questions: [
        {
          id: "eng5_2_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "Poetic Device",
          q: "Identify the figure of speech: 'We can pull and haul and push and lift and drive.'",
          options: ["A) Personification", "B) Metaphor", "C) Simile", "D) Onomatopoeia"],
          ans: "Answer: <b>A) Personification</b><br>Explanation: Human actions of pulling, pushing, and driving are attributed to inanimate machines."
        },
        {
          id: "eng5_2_2",
          type: "1m",
          mark: "1 Mark",
          q: "What is the rhyme scheme of the poem 'The Secret of the Machines'?",
          options: ["A) aabb", "B) abab", "C) abba", "D) abcb"],
          ans: "Answer: <b>B) abab</b> (e.g., pit / fit, mine / design)."
        },
        {
          id: "eng5_2_3",
          type: "2m",
          mark: "2 Marks",
          examTag: "Appreciation Question",
          isImportant: true,
          q: "Quote the lines that show machines have no emotional feelings or moral conscience.",
          ans: `<div style="background:#f8fafc; padding:10px; border-left:4px solid #3b82f6; border-radius:6px; font-style:italic;">
            "We are not built to comprehend a lie,<br>
            We can neither love nor pity nor forgive.<br>
            If you make a slip in handling us you die!"
          </div>`
        },
        {
          id: "eng5_2_4",
          type: "5m",
          mark: "5 Marks",
          examTag: "Poem Summary",
          isImportant: true,
          q: "Summarize the poem 'The Secret of the Machines' by Rudyard Kipling.",
          ans: `<div style="line-height:1.8;">
            <b>Introduction:</b><br>
            Rudyard Kipling gives a voice to industrial machines, describing their birth, capability, power, and ultimate subordination to the human intellect.<br><br>
            <b>1. Origin and Construction:</b><br>
            Machines are extracted as ore from deep coal pits and mines. They are melted in furnaces, forged by heavy hammers, and engineered to exact measurements.<br><br>
            <b>2. Tasks and Super-Power:</b><br>
            Given a little water, coal, and oil, machines can run twenty-four hours a day without rest. They can print books, weave cloth, cross oceans, and fly across skies.<br><br>
            <b>3. Warning and Limitation:</b><br>
            Machines strictly obey physical laws of mechanics. They cannot feel sympathy, understand lies, or forgive errors. A slight mistake by an operator can prove fatal.<br><br>
            <b>Conclusion:</b><br>
            Despite their gigantic power, machines conclude with humble truth: <i>"We are nothing more than children of your brain!"</i> Human intellect remains supreme.
          </div>`
        }
      ]
    },
    {
      id: "sec_eng_5_3",
      title: "Part 3: Supplementary — A Dilemma",
      author: "Silas Weir Mitchell",
      questions: [
        {
          id: "eng5_3_1",
          type: "1m",
          mark: "1 Mark",
          q: "What did Uncle Philip leave for his nephew Tom inside the iron box?",
          options: ["A) Gold coins", "B) Rare and precious gems / rubies / diamonds", "C) Ancient property deeds", "D) Books"],
          ans: "Answer: <b>B) Rare and precious gems / rubies / diamonds</b>"
        },
        {
          id: "eng5_3_2",
          type: "2m",
          mark: "2 Marks",
          examTag: "Exam Question",
          isImportant: true,
          q: "Why was Tom in a severe dilemma upon receiving his uncle's iron box?",
          ans: "Uncle Philip left a letter stating that opening the box incorrectly would trigger a sensitive dynamite mechanism, blowing the person to pieces. Tom was desperate to become wealthy with the gems, but terrified of dying in the explosion. This created his agonizing dilemma."
        },
        {
          id: "eng5_3_3",
          type: "5m",
          mark: "5 Marks",
          isImportant: true,
          q: "How did Tom try to resolve the dilemma of the explosive jewel box? What was the outcome?",
          ans: `<div style="line-height:1.8;">
            <b>Uncle Philip's Malicious Joke:</b><br>
            Uncle Philip was an eccentric collector of precious stones who took spiteful pleasure in torturing his greedy relatives. On his deathbed, he bequeathed an iron box containing diamonds and pearls to his nephew Tom.<br><br>
            <b>The Deadly Warning:</b><br>
            A letter warned that the box contained dynamite and nitro-glycerine which would detonate on any attempt to force the lock or shake the box.<br><br>
            <b>Tom's Endless Torture:</b><br>
            • Tom consulted locksmiths, explosives experts, and doctors, but none dared to touch it.<br>
            • He could neither enjoy the treasure nor discard it.<br>
            • He suffered from chronic sleeplessness, nightmares, and suspicion of burglars.<br><br>
            <b>Final Outcome:</b><br>
            Realizing the psychological poison of the box, Tom eventually donated the unopened box to the Society for the Preservation of Human Life, finally reclaiming his sanity and peace of mind!
          </div>`
        }
      ]
    },
    {
      id: "sec_eng_5_4",
      title: "Part 4: Grammar — Pronouns & Reported Speech",
      author: "English Grammar & Structural Practice",
      questions: [
        {
          id: "eng5_4_1",
          type: "1m",
          mark: "1 Mark",
          q: "Fill in the blank with the correct reflexive pronoun: The students prepared the science project ________.",
          options: ["A) herself", "B) themselves", "C) himself", "D) ourselves"],
          ans: "Answer: <b>B) themselves</b>"
        },
        {
          id: "eng5_4_2",
          type: "2m",
          mark: "2 Marks",
          examTag: "Direct to Indirect",
          isImportant: true,
          q: "Change into Indirect Speech: Ravi said to me, 'I am preparing for the public exam.'",
          ans: "<b>Indirect Speech:</b> Ravi told me that he was preparing for the public exam.<br><i>Rules:</i> 'said to' ➔ told; pronoun 'I' ➔ he; tense 'am preparing' ➔ was preparing."
        },
        {
          id: "eng5_4_3",
          type: "2m",
          mark: "2 Marks",
          examTag: "Direct to Indirect",
          isImportant: true,
          q: "Change into Indirect Speech: The teacher said to the boys, 'Work hard to secure 450+ marks.'",
          ans: "<b>Indirect Speech:</b> The teacher advised the boys to work hard to secure 450+ marks."
        }
      ]
    }
  ]
};
