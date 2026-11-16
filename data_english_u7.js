/**
 * 10th Standard English - Unit 7 Study Guide & Question Bank
 * Tamil Nadu Samacheer Kalvi Syllabus
 * 
 * Sections:
 * 1. Prose: The Dying Detective (Sir Arthur Conan Doyle)
 * 2. Poem: The House on Elm Street (Nadia Bush)
 * 3. Supplementary: A Dilemma (Silas Weir Mitchell)
 * 4. Grammar: Direct & Indirect Speech (Reported Speech)
 */

const ENGLISH_UNIT_7_DATA = {
  unit: "Unit 7",
  title: "Unit 7: Prose - The Dying Detective | Poem - The House on Elm Street | Supplementary - A Dilemma | Grammar - Reported Speech",

  // 📖 கதை வடிவிலான முழுமையான தமிழ் & ஆங்கில விளக்கம் (Bilingual Story Mode with Audio Voice Scripts)
  stories: [
    {
      id: "story_prose_u7",
      title: "🕵️‍♂️ The Dying Detective (மரணப் படுக்கையில் துப்பறியும் நிபுணர்)",
      titleEn: "The Dying Detective",
      author: "சர் ஆர்தர் கானன் டாயில் (Sir Arthur Conan Doyle)",
      type: "உரைநடை (Prose)",
      summary: "செர்லாக் ஹோம்ஸ் கொடிய தொற்றுநோயால் பாதிக்கப்பட்டு மரணத்தின் விளிம்பில் இருப்பதாகக் கூறி நாடகமாடி, தன் உறவினரைக் கொன்ற நச்சுப் பெட்டி கொலையாளி கல்வர்டன் ஸ்மித்தை வரவழைத்து அவன் வாயாலேயே உண்மையை ஒப்புக்கொள்ள வைக்கும் விறுவிறுப்பான மர்ம விசாரணை!",
      characters: [
        { name: "செர்லாக் ஹோம்ஸ் (Sherlock Holmes)", role: "உலகப் புகழ்பெற்ற துப்பறியும் நிபுணர்; கொலையாளியைப் பிடிக்க நோய்வாய்ப்பட்டது போல அற்புதமாக நடித்தவர்" },
        { name: "டாக்டர் ஜான் வாட்சன் (Dr. John Watson)", role: "ஹோம்ஸின் நம்பிக்கைக்குரிய நண்பர் மற்றும் மருத்துவர்" },
        { name: "மிஸஸ் ஹட்சன் (Mrs. Hudson)", role: "ஹோம்ஸின் வீட்டு உரிமையாளர் பெண்மணி; ஹோம்ஸின் நிலையைக் கண்டு வாட்சனிடம் ஓடிவந்தவர்" },
        { name: "கல்வர்டன் ஸ்மித் (Culverton Smith)", role: "சுமத்ரா நச்சு நோய்களில் நிபுணரான கொடூரக் கொலையாளி; விக்டர் சாவேஜை விஷம் வைத்துக் கொன்றவர்" },
        { name: "இன்ஸ்பெக்டர் மோர்டன் (Inspector Morton)", role: "ஸ்காட்லாந்து யார்டு காவல்துறை அதிகாரி; கதவுக்குப் பின் மறைந்திருந்து ஸ்மித்தைக் கைது செய்தவர்" }
      ],
      scenes: [
        {
          num: "காட்சி 1 / Scene 1",
          title: "ஹோம்ஸின் பரிதாப நிலை & வாட்சனின் பதற்றம் (Holmes's Illness & Watson's Concern)",
          titleEn: "Holmes's Illness and Watson's Alarm",
          tamilContent: "மூன்று நாட்களாக உணவும் தண்ணீருமின்றி சுருண்டு படுத்திருந்த ஹோம்ஸ், தான் கிழக்கு சுமத்ராவின் கொடிய 'தபானுலி காய்ச்சலால்' பாதிக்கப்பட்டுள்ளதாக வாட்சனிடம் கூறினார். வாட்சன் தன்னைத் தொடக்கூடாது என்றும், மாலை 6 மணிக்கு கல்வர்டன் ஸ்மித்தை மட்டுமே அழைத்து வர வேண்டும் என்றும் கடுமையான நிபந்தனை விதித்தார்.",
          englishContent: "Mrs. Hudson rushed to Dr. Watson, terrified that Sherlock Holmes was dying. Watson hurried to Baker Street to find Holmes gaunt, feverish, and delirious after three days without food or water. Holmes warned Watson not to touch him, claiming he had contracted the deadly contagious Tapanuli fever from coolies in Sumatra. Holmes insisted that only one man in London could cure him—Culverton Smith of Sumatra, a planter with specialized knowledge of the fatal plague.",
          audioNarrationTa: "செர்லாக் ஹோம்ஸின் உலகப் புகழ்பெற்ற துப்பறியும் கதையான 'தி டையிங் டிடெக்டிவ்' கதையைக் கேட்போம்! மூன்று நாட்களாக உணவும் தண்ணீருமின்றி செர்லாக் ஹோம்ஸ் படுக்கையில் முனகிக் கொண்டிருந்தார். அவரது முகத்தில் மரணக் களை படிந்திருந்தது. பதறியடித்து வந்த டாக்டர் வாட்சனை அருகில் வரவிடாமல் ஹோம்ஸ் தடுத்தார்: 'வாட்சன், என்னை நெருங்காதே! இது கிழக்கு சுமத்ராவின் கொடிய தொற்றுக் காய்ச்சல்! என்னை குணப்படுத்த லண்டனில் ஒரே ஒரு மனிதனால் மட்டுமே முடியும். அவர்தான் கல்வர்டன் ஸ்மித். சரியாக மாலை 6 மணிக்கு அவரை இங்கு அழைத்து வா!' என்று கட்டளையிட்டார்!",
          audioNarrationEn: "Welcome to Sir Arthur Conan Doyle's gripping mystery, The Dying Detective! Mrs. Hudson came to Dr. Watson in tears, crying that Mr. Holmes was dying. Rushing to 221B Baker Street, Watson was appalled by the sight of his brilliant friend—eyes staring with fever, gaunt cheeks, and lips twitching. Holmes strictly ordered Watson to keep away, warning that the dreadful Tapanuli fever was contagious by touch. Holmes pleaded with Watson to bring Culverton Smith, an expert on Sumatra diseases, but instructed Watson to arrive back before Smith and hide behind the head of the bed!"
        },
        {
          num: "காட்சி 2 / Scene 2",
          title: "நச்சுப் பெட்டியின் இரகசியம் & கொலையாளியின் ஒப்புதல் (The Poisoned Box & The Trap)",
          titleEn: "The Poisoned Ivory Box and The Confession",
          tamilContent: "ஹோம்ஸ் அறையில் வாட்சனை கட்டிலுக்குப் பின்னால் ஒளிய வைத்தார். கல்வர்டன் ஸ்மித் அங்கு வந்து நக்கலாகச் சிரித்தான். விக்டர் சாவேஜைக் கொன்றது போலவே, ஹோம்ஸுக்கும் தபால் மூலம் அனுப்பப்பட்ட சிறிய தந்தப் பெட்டியின் கூரிய நச்சு ஊசி மூலமே இந்த நோய் பரவியது என்பதை ஸ்மித் அகந்தையுடன் ஒப்புக்கொண்டான். விளக்கை ஏற்றி சைகை செய்தவுடன் இன்ஸ்பெக்டர் மோர்டன் உள்நுழைந்து ஸ்மித்தைக் கைது செய்தார்!",
          englishContent: "Watson hid behind the head of the bed as instructed. Culverton Smith entered the room, gloating over Holmes's impending death. Believing Holmes had only minutes left, Smith boasted how he had murdered his nephew Victor Savage and had mailed Holmes the small black-and-white ivory box containing a spring-loaded poisoned needle. Holmes asked Smith to turn up the gas lamp. That signal summoned Inspector Morton, who burst in and handcuffed Smith for murder!",
          audioNarrationTa: "கல்வர்டன் ஸ்மித் அறைக்குள் நுழைந்தான். மரணப் படுக்கையில் கிடக்கும் ஹோம்ஸைப் பார்த்து ஏளனமாகச் சிரித்தான். 'விக்டர் சாவேஜ் எப்படி இறந்தானோ, அதே கதிதான் உனக்கும்! உனக்கு வந்த தந்தப் பெட்டியைத் திறந்ததும் அதில் இருந்த நச்சு ஊசி குத்தியது நினைவிருக்கிறதா?' என்று தன் குற்றத்தை ஒப்புக்கொண்டான். உடனே ஹோம்ஸ் கம்பீரமான குரலில் எழுந்து அமர்ந்தார்! மூன்று நாட்களாக உணவு உண்ணாமல் நடித்த ஹோம்ஸ், வாட்சனின் சாட்சியத்தோடும் இன்ஸ்பெக்டர் மோர்டனின் உதவியோடும் கொலையாளியை கையும் களவுமாகப் பிடித்தார்!",
          audioNarrationEn: "Culverton Smith believed Holmes was gasping his last breath. Smirking with evil triumph, he demanded the ivory box, admitting that he sent it by post with a poisoned spring prick, exactly how he had eliminated his nephew Victor Savage! Holmes faintly requested: 'Turn up the gas lamp, half-way.' Smith did so, mocking: 'Does that suit you?' Instantly, Holmes spoke in his natural, clear voice: 'Splendid! That was the signal for Inspector Morton waiting outside!' Morton dashed in and snapped the handcuffs on Smith. Holmes had fasted for three days purely to deliver an airtight trap for justice!"
        }
      ],
      moral: "குற்றம் ஒருபோதும் வெல்லாது; உண்மை மற்றும் அறிவுக்கூர்மையின் முன் அநீதி தலைவணங்கும்."
    },
    {
      id: "story_poem_u7",
      title: "🏚️ The House on Elm Street (எல்ம் தெருவின் மர்ம வீடு)",
      titleEn: "The House on Elm Street",
      author: "நதியா புஷ் (Nadia Bush)",
      type: "கவிதை (Poem)",
      summary: "எல்ம் தெருவில் ஆளரவமின்றித் தனித்து நிற்கும் ஒரு பழைய மர்ம வீடு, இரவில் மின்னி எரியும் மர்ம விளக்குகள், இலைகளே துளிர்க்காத ஒரு மரம் என மர்மம் நிறைந்த காட்சிகளைச் சித்தரிக்கும் விறுவிறுப்பான கவிதை.",
      scenes: [
        {
          num: "பிரிவு 1 / Stanza 1 & 2",
          title: "தனித்து நிற்கும் மர்ம வீடு (The Lonely, Desolate House)",
          titleEn: "The Lonely, Desolate House",
          tamilContent: "எல்ம் தெருவின் ஓரத்தில் ஒரு தனிமையான வீடு அமைந்திருந்தது. சுற்றிலும் பரந்த இடம் இருந்தபோதிலும் அது எப்போதும் ஆளற்ற வெறிச்சோடிய நிலையில் காட்சியளித்தது. இரவில் விளக்குகள் தானாக எரிந்து அணைந்தன. உள்ளே என்ன நடக்கிறது என்பது எவருக்கும் தெரியாத புதிராகவே இருந்தது.",
          englishContent: "The house sat alone at the edge of Elm Street. Though spacious and surrounded by empty grounds, it was utterly desolate and eerie. At night, flickering lights switched on and off mysteriously without a soul in sight. Passersby wondered what strange secrets lay hidden behind its locked doors.",
          audioNarrationTa: "நதியா புஷ் எழுதிய 'தி ஹவுஸ் ஆன் எல்ம் ஸ்ட்ரீட்' கவிதையைக் கேட்போம்! எல்ம் தெருவில் தனியொரு வீடு அனாதையாக நின்றிருந்தது. அது பெரிய வீடாக இருந்தாலும் உள்ளே யாரும் வாழவில்லை. இரவானால் அங்கே விசித்திரமாக விளக்குகள் தானாக எரிந்து அணைந்தன! அந்த வீட்டைக் கடந்து செல்லும் எவரும் உள்ளே செல்லத் துணிவதில்லை!",
          audioNarrationEn: "Listen to Nadia Bush's atmospheric poem, The House on Elm Street! 'It sat alone, what happened there is still today unknown. It is a very mysterious place, and inside you can see it has a ton of space, but at the same time it is bare to the bone!' Night after night, enigmatic lights flicker on and off, sending shivers through the neighbourhood."
        },
        {
          num: "பிரிவு 2 / Stanza 3 & 4",
          title: "இலையற்ற மரம் & மர்மத்தின் நீட்சி (The Bare Tree and Endless Mystery)",
          titleEn: "The Bare Tree and Endless Mystery",
          tamilContent: "அந்த வீட்டின் அருகே நின்ற மரம் எந்தக் காலத்திலும் தளிர்ப்பதே இல்லை; இலைகள் உதிர்ந்து காய்ந்த எலும்புக்கூடு போல நின்றது. காலம் செல்லச் செல்ல அதன் மர்மம் குறையாமல் கூடிக்கொண்டே போனது. ஒவ்வொரு நாளும் அந்த வீடு மனித சிந்தனையைத் தூண்டும் புதிராகவே நீடிக்கிறது.",
          englishContent: "Beside the house stood a strange tree that never bore leaves throughout spring, summer, or winter. It neither grew taller nor withered further, frozen in timeless suspense. The poet drives home the reality: some mysteries are never fully solved and continue to ignite our curiosity forever.",
          audioNarrationTa: "வீட்டின் அருகில் நின்ற மரம் எப்போதும் இலைகளற்றுக் காய்ந்து நின்றது. பனி பெய்தாலும் வெயில் கொளுத்தினாலும் அதன் நிலை மாறுவதே இல்லை! மனித அறிவுக்கு எட்டாத பல மர்மங்கள் இந்த உலகில் உண்டு என்பதை எல்ம் தெரு வீடு நினைவூட்டுகிறது!",
          audioNarrationEn: "Beside the mysterious house stands a bare tree that never blooms in summer nor loses leaves in winter. It neither grows bigger nor gets smaller. Just like the house itself, it remains a timeless riddle. As the poet ponders, each day the mystery thickens, leaving the house on Elm Street forever wrapped in eerie fascination!"
        }
      ],
      moral: "மனித சிந்தனைக்கு அப்பாற்பட்ட சில புதிர்கள் நம்மை எச்சரிக்கையாகவும் விழிப்புணர்வுடனும் வைத்திருக்க உதவுகின்றன."
    }
  ],

  subSections: [
    {
      id: "sec_eng_7_1",
      title: "Part 1: Prose — The Dying Detective",
      author: "Sir Arthur Conan Doyle",
      questions: [
        {
          id: "eng7_1_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "Public Exam",
          q: "What disease did Sherlock Holmes pretend to suffer from?",
          options: ["A) Black Plague", "B) Tapanuli fever / Formosa plague", "C) Cholera", "D) Typhoid"],
          ans: "Answer: <b>B) Tapanuli fever / Formosa plague</b>"
        },
        {
          id: "eng7_1_2",
          type: "1m",
          mark: "1 Mark",
          q: "Who sent the infected ivory box to Sherlock Holmes by post?",
          options: ["A) Victor Savage", "B) Dr. Watson", "C) Culverton Smith", "D) Inspector Morton"],
          ans: "Answer: <b>C) Culverton Smith</b>"
        },
        {
          id: "eng7_1_3",
          type: "1m",
          mark: "1 Mark",
          examTag: "Synonym",
          q: "Choose the correct synonym of the underlined word: Holmes was looking <u>gaunt</u> and frail.",
          options: ["A) lean / haggard / emaciated", "B) cheerful", "C) energetic", "D) muscular"],
          ans: "Answer: <b>A) lean / haggard / emaciated</b>"
        },
        {
          id: "eng7_1_4",
          type: "2m",
          mark: "2 Marks",
          examTag: "Important 2M",
          isImportant: true,
          q: "Why did Holmes forbid Watson from examining him?",
          ans: "Holmes wanted to convince everyone that he was dying so that Culverton Smith would confess openly. Moreover, Watson was a doctor, and had he examined Holmes, he would immediately have discovered that Holmes was merely fasting and pretending to be ill."
        },
        {
          id: "eng7_1_5",
          type: "2m",
          mark: "2 Marks",
          q: "What was the signal agreed upon between Holmes and Inspector Morton?",
          ans: "Holmes asked Culverton Smith to turn up the gas lamp half-way. The lit gas lamp visible through the window was the agreed signal for Inspector Morton to enter the room and arrest Culverton Smith."
        },
        {
          id: "eng7_1_6",
          type: "5m",
          mark: "5 Marks",
          examTag: "Board Exam Paragraph",
          isImportant: true,
          q: "Describe how Sherlock Holmes trapped Culverton Smith into confessing his crime.",
          ans: `<div style="line-height:1.8;">
            <b>Introduction:</b> Sir Arthur Conan Doyle's <i>'The Dying Detective'</i> shows the brilliance of Sherlock Holmes in trapping the cunning murderer Culverton Smith.<br><br>
            <b>1. Holmes's Elaborate Pretense:</b><br>
            Holmes fasted for three days without food and water to appear gaunt and feverish. He applied makeup to look near death and claimed to suffer from the deadly Sumatra contagious fever.<br><br>
            <b>2. Watson's Role:</b><br>
            Holmes sent Watson to summon Culverton Smith, pretending only Smith knew the cure. Holmes instructed Watson to return ahead of Smith and hide behind the head of the bed.<br><br>
            <b>3. Smith's Boastful Confession:</b><br>
            Assuming Holmes was on his deathbed, Smith openly admitted that he had murdered his nephew Victor Savage and had posted the spring-loaded poisoned ivory box to kill Holmes as well.<br><br>
            <b>4. The Climax & Arrest:</b><br>
            Holmes asked Smith to turn up the gas lamp. This was the predetermined signal for Inspector Morton, who burst into the room and arrested Smith for murder. Holmes then asked for a hearty meal, celebrating another triumph of justice.<br><br>
            <b>Conclusion:</b> Through extraordinary sacrifice, patience, and intellect, Holmes proved that crime never pays.
          </div>`
        }
      ]
    },
    {
      id: "sec_eng_7_2",
      title: "Part 2: Poem — The House on Elm Street",
      author: "Nadia Bush",
      questions: [
        {
          id: "eng7_2_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "Figure of Speech",
          q: "What figure of speech is used in: 'It sits alone'?",
          options: ["A) Simile", "B) Personification", "C) Metaphor", "D) Alliteration"],
          ans: "Answer: <b>B) Personification</b> (The inanimate house is described as sitting alone like a human being)."
        },
        {
          id: "eng7_2_2",
          type: "1m",
          mark: "1 Mark",
          q: "What happens to the bare tree beside the house during the changing seasons?",
          options: ["A) It blossoms with flowers", "B) It never grows leaves and remains unchanged", "C) It falls down", "D) It turns green"],
          ans: "Answer: <b>B) It never grows leaves and remains unchanged</b>"
        },
        {
          id: "eng7_2_3",
          type: "2m",
          mark: "2 Marks",
          examTag: "Poem Comprehension",
          isImportant: true,
          q: "What is mysterious about the house on Elm Street at night?",
          ans: "At night, flickering lights within the house switch on and off mysteriously, yet nobody is ever seen entering, leaving, or living inside the premises."
        },
        {
          id: "eng7_2_4",
          type: "5m",
          mark: "5 Marks",
          examTag: "Poem Appreciation",
          q: "Write a paragraph appreciating the atmosphere and themes of 'The House on Elm Street'.",
          ans: `<div style="line-height:1.8;">
            <b>Theme:</b> Mystery, fear of the unknown, and childhood curiosity.<br><br>
            <b>Eerie Imagery:</b> Nadia Bush portrays an abandoned house on Elm Street that stands desolate despite having ample surrounding space. Lights flicker strangely at night, casting an unsettling mood across the area.<br><br>
            <b>Symbolism of the Tree:</b> The barren tree standing beside the house never buds in spring or sheds leaves in autumn; it symbolizes frozen time and unexplained occurrences.<br><br>
            <b>Poetic Devices:</b> The poet employs vivid imagery, rhyming couplets, and personification ('it sits alone') to capture the spine-tingling thrill of urban legends.<br><br>
            <b>Message:</b> The poem highlights that mysteries keep human imagination active and inspire wonder about the unknown.
          </div>`
        }
      ]
    },
    {
      id: "sec_eng_7_3",
      title: "Part 3: Supplementary — A Dilemma",
      author: "Silas Weir Mitchell",
      questions: [
        {
          id: "eng7_3_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "Public Exam",
          q: "What warning did Uncle Philip leave for Tom regarding the iron box?",
          options: ["A) It was empty", "B) Opening it improperly would trigger an explosion of dynamite", "C) It belonged to charity", "D) It must be opened underwater"],
          ans: "Answer: <b>B) Opening it improperly would trigger an explosion of dynamite</b>"
        },
        {
          id: "eng7_3_2",
          type: "2m",
          mark: "2 Marks",
          examTag: "Short Question",
          isImportant: true,
          q: "Why was Tom in an agonizing dilemma after reading Uncle Philip's letter?",
          ans: "Tom was the sole heir to an iron box containing rubies worth hundreds of thousands of dollars. However, his uncle had rigged it with dynamite mechanism. Tom was terrified that if he opened it, he would be blown to pieces; yet if he left it unopened, he remained in poverty despite being rich on paper."
        },
        {
          id: "eng7_3_3",
          type: "8m",
          mark: "8 Marks",
          examTag: "Supplementary Essay",
          isImportant: true,
          q: "Explain how Uncle Philip's legacy placed Tom in a lifelong dilemma and how it affected his happiness.",
          ans: `<div style="line-height:1.8;">
            <b>Introduction:</b> Silas Weir Mitchell's <i>'A Dilemma'</i> is an ironic tale demonstrating how unexpected wealth accompanied by suspicion can destroy peace of mind.<br><br>
            <b>1. The Eccentric Uncle Philip:</b><br>
            Uncle Philip was a wealthy bachelor and skilled mechanic who loved playing cruel practical jokes. On his deathbed, he bequeathed his valuable collection of rubies and diamonds to his nephew Tom.<br><br>
            <b>2. The Deadly Mechanism:</b><br>
            Along with the locked iron box, Uncle Philip left a letter stating that the box contained dynamite and sensitive detonators. Any attempt to force open the lock would cause an immediate explosion.<br><br>
            <b>3. Tom's Psychological Agony:</b><br>
            Tom consulted locksmiths, doctors, and explosives experts, but none could guarantee his safety. The obsession ruined his sleep, strained his relationships, and drove him into despair. He became a poor man with a fortune he could never touch.<br><br>
            <b>Conclusion:</b> Ultimately, Tom bequeathed the box to the Society for the Preservation of Human Vivisection, ending his torture and highlighting that peace of mind is far more precious than gold.
          </div>`
        }
      ]
    },
    {
      id: "sec_eng_7_4",
      title: "Part 4: Grammar — Reported Speech & Transformation",
      author: "Grammar & Composition",
      questions: [
        {
          id: "eng7_4_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "Direct to Indirect",
          q: "Change into Indirect Speech: Holmes said, 'I have contracted a deadly illness.'",
          options: [
            "A) Holmes said that he had contracted a deadly illness.",
            "B) Holmes said that he has contracted a deadly illness.",
            "C) Holmes asked if he had contracted an illness.",
            "D) Holmes told that I have contracted a deadly illness."
          ],
          ans: "Answer: <b>A) Holmes said that he had contracted a deadly illness.</b><br>Explanation: Present perfect ('have contracted') changes to past perfect ('had contracted')."
        },
        {
          id: "eng7_4_2",
          type: "2m",
          mark: "2 Marks",
          examTag: "Public Exam 2M",
          isImportant: true,
          q: "Convert into Reported Speech: Dr. Watson said to Culverton Smith, 'Mr. Holmes wants you to visit him immediately.'",
          ans: "<b>Answer:</b> Dr. Watson told Culverton Smith that Mr. Holmes wanted him to visit him immediately."
        },
        {
          id: "eng7_4_3",
          type: "2m",
          mark: "2 Marks",
          q: "Change the interrogative sentence into Indirect Speech: Holmes said to Smith, 'Did you send me the ivory box?'",
          ans: "<b>Answer:</b> Holmes asked Smith if (or whether) he had sent him the ivory box."
        }
      ]
    }
  ]
};
