/**
 * 10th Standard English - Unit 2 Study Guide & Question Bank
 * Tamil Nadu Samacheer Kalvi Syllabus
 * 
 * Sections:
 * 1. Prose: The Night the Ghost Got In (James Thurber)
 * 2. Poem: The Grumble Family (Lucy Maud Montgomery)
 * 3. Supplementary: Zigzag (Asha Nehemiah)
 * 4. Grammar & Vocabulary: Articles & Prepositional Phrases
 */

const ENGLISH_UNIT_2_DATA = {
  unit: "Unit 2",
  title: "Unit 2: Prose - The Night the Ghost Got In | Poem - The Grumble Family | Supplementary - Zigzag | Grammar",

  // 📖 கதை வடிவிலான முழுமையான தமிழ் விளக்கம் (Story Mode)
  stories: [
    {
      id: "story_prose_u2",
      title: "👻 The Night the Ghost Got In (அன்று இரவு புகுந்த பேய்!)",
      author: "ஜேம்ஸ் தர்பர் (James Thurber - புகழ்பெற்ற அமெரிக்க நகைச்சுவை எழுத்தாளர்)",
      type: "உரைநடை (Prose)",
      summary: "நள்ளிரவில் கேட்ட ஒரு விசித்திரமான காலடிச் சத்தத்தால், ஓர் ஒட்டுமொத்தக் குடும்பமும், பக்கத்து வீட்டுக்காரர்களும், ஒட்டுமொத்த காவல் துறையும் சேர்ந்து செய்த அமர்க்களமான நகைச்சுவைக் கலாட்டா!",
      characters: [
        { name: "ஜேம்ஸ் தர்பர் (James Thurber)", role: "கதையை விவரிக்கும் கதாசிரியர்; குளியலறையிலிருந்து துண்டுடன் வந்தவர்" },
        { name: "ஹெர்மன் (Herman)", role: "ஆசிரியரின் சகோதரன்; பயந்து நடுங்கி அறைக்குள் பதுங்கியவன்" },
        { name: "அம்மா (Mother)", role: "திருடர்கள் வந்துவிட்டதாக நினைத்து, பக்கத்து ஜன்னல் மீது ஷூவை எறிந்த அதிரடித் தாய்" },
        { name: "தாத்தா (Grandfather)", role: "மாடியில் உறங்குபவர்; போலீசாரை உள்நாட்டுப் போர் எதிரிகள் என நினைத்துச் சுட்டவர்" },
        { name: "போட்வெல் தம்பதியினர் (Mr. & Mrs. Bodwell)", role: "ஜன்னல் உடைந்ததால் அலறி போலீசுக்கு போன் செய்த பக்கத்து வீட்டுக்காரர்கள்" },
        { name: "ஜோ & போலீஸ் படை (Joe & Police Force)", role: "கதவை உடைத்துக்கொண்டு வீட்டிற்குள் புகுந்த காவல்துறையினர்" }
      ],
      scenes: [
        {
          num: "காட்சி 1",
          title: "நள்ளிரவு 1:15 — மர்மக் காலடிச் சத்தம் (Footsteps in the Dark)",
          tamilContent: `நவம்பர் 17 அன்று நள்ளிரவு 1:15 மணி. ஜேம்ஸ் தர்பர் குளித்துவிட்டு வந்து, இடுப்பில் துண்டை மட்டும் கட்டிக்கொண்டு நின்றிருந்தார். அப்போது, கீழே உணவு மேசையைச் சுற்றி யாரோ நடப்பது போன்ற காலடிச் சத்தம் (footsteps) கேட்டது. தன் தந்தை அல்லது அண்ணன் ராய்தான் இரயிலில் இருந்து திரும்பி வந்திருக்கிறார்களோ என்று நினைத்தார். ஆனால் சத்தம் சீராக மேசையைச் சுற்றி வட்டமிட்டபடியே இருந்தது.<br><br>பயந்துபோன தர்பர், தன் சகோதரன் ஹெர்மனை எழுப்பினார். அவனும் கதவைத் திறந்து ஒட்டுக் கேட்டான். இருவரும் இருட்டில் படியின் உச்சிக்குச் சென்று பார்த்தனர். காலடிச் சத்தம் இப்போது படிக்கட்டுகளில் ஏறி வரத் தொடங்கியது! ஆனால் அங்கே எவருமே தெரியவில்லை! 'அது ஒரு பேய்தான் (ghost)!' என்று ஹெர்மன் பதறித் தன் அறைக்குள் ஓடி கதவைத் தாழிட்டுக் கொண்டான்.`
        },
        {
          num: "காட்சி 2",
          title: "அம்மாவின் அதிரடி — ஜன்னல் கண்ணாடி உடைந்தது (Mother's Shoe Throw)",
          tamilContent: `சத்தம் கேட்டு அவர்கள் தாய் எழுந்து வந்தாள். கதவை யாரும் திறக்காமல் இருக்கவே, வீட்டில் திருடர்கள் (burglars) புகுந்துவிட்டதாக அவள் முடிவுக்கு வந்தாள். உடனே போலீசுக்கு போன் செய்ய நினைத்தாள்; ஆனால் கீழே போன் இருக்கும் இடத்தில்தான் 'திருடர்கள்' நடமாடுகிறார்கள்!<br><br>அப்போது அவளுக்கு ஒரு யோசனை தோன்றியது. தன் காலணி ஒன்றை (shoe) எடுத்து, பக்கத்து வீட்டு போட்வெல் என்பவரின் படுக்கையறை ஜன்னலை நோக்கி ஆவேசமாக எறிந்தாள்! ஜன்னல் கண்ணாடி 'டமார்' என்று நொறுங்கியது. தூக்கத்திலிருந்து அலறி அடித்து எழுந்த போட்வெல் தம்பதியிடம், 'எங்கள் வீட்டில் திருடர்கள்! போலீசுக்கு போன் செய்யுங்கள்!' என்று அம்மா கத்தினாள்.`
        },
        {
          num: "காட்சி 3",
          title: "போலீஸ் படையெடுப்பு — வீடு களம் மாறியது (The Police Arrive)",
          tamilContent: `அடுத்த சில நிமிடங்களில், சைரன் சத்தத்துடன் துப்பாக்கிகள், டார்ச் லைட்டுகள் சகிதமாக ஒரு பெரிய போலீஸ் படையே வந்து இறங்கியது. கதவைத் திறக்க தாமதமானதால், அவர்கள் வீட்டின் முன்பக்கக் கதவை உடைத்துக் கொண்டு உள்ளே பாய்ந்தனர்.<br><br>வீடு முழுவதும் சல்லடை போட்டுத் தேடினர். இழுப்பறைகள், பீரோக்கள் அனைத்தையும் தலைகீழாகப் புரட்டிப் போட்டனர். ஆனால் வீட்டில் ஒரு திருடனும் இல்லை! தர்பர் தன் இடுப்பில் ஒரு துண்டை மட்டும் கட்டிக்கொண்டு அவர்களுக்குப் பதில் சொல்ல முடியாமல் தவித்துக் கொண்டிருந்தார்.`
        },
        {
          num: "காட்சி 4",
          title: "தாத்தாவின் துப்பாக்கிச் சூடு (Grandfather's Shootout)",
          tamilContent: `திடீரென்று மாடியில் இருந்து ஒரு சத்தம் கேட்டது. போலீஸ்காரர்கள் டார்ச் லைட்டுடன் மாடிக்கு ஓடினர். அங்கே தர்பரின் தாத்தா படுத்திருந்தார். அவர் அமெரிக்க உள்நாட்டுப் போரின் (Civil War) நினைவுகளிலேயே வாழ்பவர்!<br><br>போலீசாரைக் கண்டதும், அவர்கள் எதிரிப் படையினர் என்றும், போர்க்களத்தை விட்டு ஓடிவந்த கோழைகள் என்றும் தாத்தா நினைத்துக் கொண்டார்! தன் தலையணைக்கு அடியில் இருந்த துப்பாக்கியை உருவி, போலீசாரை நோக்கி சரமாரியாகச் சுட்டார்! ஒரு போலீஸ்காரரின் தோள்பட்டையில் குண்டு பாய்ந்தது. போலீசார் பயந்து அடித்துப் பிடித்துப் படியிறங்கி ஓடினர்.`
        },
        {
          num: "காட்சி 5",
          title: "மறுநாள் காலை விடிந்த உண்மை (The Next Morning)",
          tamilContent: `மறுநாள் காலை, தாத்தா நிதானமாக காலை உணவு மேசைக்கு வந்தார். இரவில் சுட்டதற்கு எந்தக் குற்ற உணர்ச்சியும் இல்லாமல், 'ஏனப்பா தர்பர், நேற்று இரவு தண்ணீர் குடிக்க நான் கீழே வந்தபோது, நீங்கள் எல்லோரும் ஏனப்பா அவ்வளவு ஆர்ப்பாட்டம் செய்தீர்கள்?' என்று சாதாரணமாகக் கேட்டார்!<br><br>அப்போதுதான் அனைவருக்கும் புரிந்தது — நேற்று நள்ளிரவில் கீழே கேட்ட காலடிச் சத்தம் பேயும் அல்ல, திருடனும் அல்ல; தாகத்திற்குத் தண்ணீர் குடிக்க வந்த தாத்தாவின் காலடிச் சத்தமே அது!`
        }
      ],
      vocabulary: [
        { word: "Hasty", type: "Adjective", tamil: "அவசரமான", meaning: "Done with excessive speed or urgency." },
        { word: "Aroused", type: "Verb", tamil: "தூக்கத்திலிருந்து விழித்தெழச் செய்தல்", meaning: "Awakened from sleep." },
        { word: "Intruders", type: "Noun", tamil: "அத்துமீறி நுழைபவர்கள் / திருடர்கள்", meaning: "People who enter a place without permission." },
        { word: "Indignant", type: "Adjective", tamil: "கோபமுற்ற", meaning: "Feeling or showing anger at unfair treatment." },
        { word: "Deserters", type: "Noun", tamil: "படையிலிருந்து ஓடிவந்தவர்கள்", meaning: "Members of armed forces who desert without permission." }
      ],
      moral: `💡 <b>பாடத்தின் நகைச்சுவை உண்மை (Humorous Moral):</b><br>
      அச்சமும் தவறான புரிதலும் ஒரு சாதாரண சம்பவத்தைக் கூட மிகப்பெரிய பூதாகரமான விபரீதமாக மாற்றிவிடும். அமைதியாகவும் நிதானமாகவும் உண்மையை ஆராய்வதே விவேகம்!`
    },

    {
      id: "story_poem_u2",
      title: "🌿 The Grumble Family (எப்போதும் குறை சொல்லும் குடும்பம்)",
      author: "லூசி மாட் மாண்ட்கோமரி (Lucy Maud Montgomery)",
      type: "செய்யுள் (Poem)",
      summary: "எதற்கெடுத்தாலும் திருப்தியடையாமல் குறை சொல்லிக்கொண்டே இருக்கும் மனிதர்களைப் பற்றியும், அவர்களிடம் நாம் சேராமல் வாழ வேண்டும் என்பதைப் பற்றியும் விவரிக்கும் அருமையான கவிதை!",
      characters: [
        { name: "குறை சொல்லும் குடும்பம் (The Grumble Family)", role: "எதற்கெடுத்தாலும் அதிருப்தி அடையும் மனிதர்கள்" }
      ],
      scenes: [
        {
          num: "முழு கவிதை விளக்கம்",
          title: "குறை சொல்லும் தெருவும் நமது எச்சரிக்கையும்",
          tamilContent: `அவர்கள் 'குறை சொல்லும் தெருவில்' (Complaining Street), 'ஒருபோதும் திருப்தியற்ற நதிக்கரையில்' (River of Discontent) வசிக்கிறார்கள். வெயில் அடித்தாலும் குறை சொல்வார்கள்; மழை பெய்தாலும் குறை சொல்வார்கள். கோடைக்காலம், குளிர்காலம் எதனையும் அவர்கள் ரசிப்பதில்லை. எது நடந்தாலும் அவர்களுக்குப் பிடிப்பதில்லை!<br><br>அவர்களோடு நாம் பழகத் தொடங்கினால், நாமும் அவர்களைப் போலவே குறை சொல்லும் பழக்கத்தைக் கற்றுக் கொண்டுவிடுவோம்! எனவே, நாம் எந்தச் சூழலில் வாழ்ந்தாலும் இன்முகத்தோடு, பாடி மகிழும் மனப்பான்மையோடு வாழக் கற்றுக்கொள்ள வேண்டும்; எக்காரணம் கொண்டும் 'குறை சொல்லும் குடும்பத்தின்' உறுப்பினராக மாறிவிடக் கூடாது என்று கவிஞர் அறிவுறுத்துகிறார்.`
        }
      ],
      vocabulary: [
        { word: "Discontent", type: "Noun", tamil: "திருப்தியின்மை", meaning: "Lack of contentment or satisfaction." },
        { word: "Grumble", type: "Verb / Noun", tamil: "முணுமுணுத்தல் / குறை கூறுதல்", meaning: "Complain about something in a bad-tempered way." },
        { word: "Gloomy", type: "Adjective", tamil: "மந்தமான / இருண்ட", meaning: "Dark or depressing." },
        { word: "Quarrel", type: "Verb", tamil: "சண்டையிடுதல்", meaning: "An angry argument or disagreement." }
      ],
      moral: `💡 <b>கவிதை தரும் வாழ்வியல் நீதி (Moral):</b><br>
      வாழ்க்கையில் கிடைக்கும் நன்மைகளுக்கு நன்றி கூறுவோம்; குறை கூறுவதை விடுத்து நேர்மறையான எண்ணங்களோடு வாழ்வோம்!`
    }
  ],

  // 📝 வினா - விடைகள் வங்கி (Q&A Bank - 25 Questions)
  subSections: [
    {
      id: "eng2_sec1",
      title: "Part 1: Prose — The Night the Ghost Got In",
      author: "James Thurber",
      questions: [
        {
          id: "eng2_1_1",
          type: "1m",
          mark: "1 Mark (Synonym)",
          q: "Choose the correct synonym for the italicized word:<br>The footsteps were <i>hasty</i> and regular.",
          qTamil: "காலடிச் சத்தம் அவசரமாகவும் (hasty) சீராகவும் இருந்தது — ஒத்த சொல் தருக:",
          options: ["a) slow", "b) hurried / quick", "c) quiet", "d) heavy"],
          ans: "<b>b) hurried / quick</b>",
          ansTamil: "Hasty என்றால் விரைவான அல்லது அவசரமான."
        },
        {
          id: "eng2_1_2",
          type: "1m",
          mark: "1 Mark (Synonym)",
          q: "Choose the correct synonym for the italicized word:<br>Grandfather thought the policemen were Meade’s <i>deserters</i>.",
          qTamil: "போலீசாரை ராணுவத்திலிருந்து தப்பி ஓடியவர்கள் (deserters) எனத் தாத்தா நினைத்தார்:",
          options: ["a) heroes", "b) runaways / fugitives", "c) officers", "d) doctors"],
          ans: "<b>b) runaways / fugitives</b>",
          ansTamil: "Deserter என்றால் அனுமதியின்றி ராணுவத்திலிருந்து ஓடிவந்தவர்."
        },
        {
          id: "eng2_1_3",
          type: "1m",
          mark: "1 Mark (Antonym)",
          q: "Choose the correct antonym for the italicized word:<br>Mother was <i>reluctant</i> to leave the house.",
          qTamil: "வீட்டை விட்டு வெளியேற தாய் தயங்கினாள் (reluctant) — எதிர்ச்சொல் தருக:",
          options: ["a) hesitant", "b) willing / eager", "c) angry", "d) afraid"],
          ans: "<b>b) willing / eager</b>",
          ansTamil: "Reluctant (தயக்கமுள்ள) ↔ Willing / Eager (ஆர்வமுள்ள / விருப்பமுள்ள)."
        },
        {
          id: "eng2_1_4",
          type: "2m",
          mark: "2 Marks",
          q: "What time did the author hear the unusual footsteps?",
          qTamil: "எந்த நேரத்தில் ஆசிரியர் மர்ம காலடிச் சத்தத்தைக் கேட்டார்?",
          ans: "The author heard the strange footsteps at <b>1:15 a.m.</b> on the night of November 17, just after he had stepped out of the bathtub.",
          ansTamil: "நவம்பர் 17 அன்று நள்ளிரவு 1:15 மணிக்குக் குளியலறையை விட்டு வெளியே வந்தபோது சத்தம் கேட்டது."
        },
        {
          id: "eng2_1_5",
          type: "2m",
          mark: "2 Marks",
          q: "Why did the mother throw a shoe through the neighbour's window?",
          qTamil: "அம்மா ஏன் பக்கத்து வீட்டு ஜன்னல் மீது ஷூவை எறிந்தாள்?",
          ans: "Mother believed that burglars were downstairs and the phone was also downstairs. To get help, she threw her shoe through the Bodwells' window so they would call the police.",
          ansTamil: "திருடர்கள் கீழே இருப்பதாக நினைத்தாள்; கீழே சென்று போன் செய்ய முடியாததால் பக்கத்து வீட்டுக்காரர்களை அலற வைக்க ஜன்னல் மீது ஷூவை எறிந்தாள்."
        },
        {
          id: "eng2_1_6",
          type: "2m",
          mark: "2 Marks",
          q: "Why did grandfather shoot at the police officer?",
          qTamil: "தாத்தா ஏன் போலீஸ்காரரை நோக்கித் துப்பாக்கியால் சுட்டார்?",
          ans: "Grandfather was living in the illusion of the American Civil War. He mistakenly thought the policemen were deserters from General Meade's army hiding in his house, so he grabbed his gun and shot.",
          ansTamil: "தாத்தா உள்நாட்டுப் போர் நினைப்பில் இருந்தார்; போலீசாரைத் தப்பி ஓடிவந்த எதிரிகள் என நினைத்துச் சுட்டார்."
        },
        {
          id: "eng2_1_7",
          type: "2m",
          mark: "2 Marks",
          q: "Who was actually responsible for the mysterious footsteps?",
          qTamil: "உண்மையில் அந்த மர்மக் காலடிச் சத்தத்தை ஏற்படுத்தியது யார்?",
          ans: "The next morning, grandfather revealed that he had come down to the dining room at night to get a drink of water. His footsteps were the cause of all the commotion.",
          ansTamil: "மறுநாள் காலை தாகத்திற்குத் தண்ணீர் குடிக்கக் கீழே வந்தது தாமே என்று தாத்தா கூறியபோதுதான் உண்மை தெரிந்தது."
        },
        {
          id: "eng2_1_8",
          type: "5m",
          mark: "5 Marks",
          q: "Describe the humorous events that took place on the night the ghost got in.",
          qTamil: "'அன்று இரவு பேய் புகுந்த போது' நடந்த நகைச்சுவைச் சம்பவங்களை விரிவாக விவரிக்க.",
          ans: `<div style="line-height:1.6;">
            <b>Synopsis:</b>
            <ul style="margin:4px 0 10px 20px; font-weight:600; color:#0369a1;">
              <li>Introduction</li>
              <li>Footsteps in the Night</li>
              <li>Mother's Dramatic Action</li>
              <li>Arrival of the Police</li>
              <li>Grandfather's Attack</li>
              <li>The Next Morning's Twist</li>
            </ul>
            <p><b>Introduction:</b> 'The Night the Ghost Got In' by James Thurber is an amusing autobiographical story full of misunderstandings and exaggerated panic.</p>
            <p><b>Footsteps in the Night:</b> At 1:15 a.m., the narrator heard rhythmic footsteps circling the dining room table. Convinced that it was a ghost, he alerted his brother Herman, who quickly slammed and locked his door in fear.</p>
            <p><b>Mother's Dramatic Action:</b> Awoken by the noise, their mother concluded burglars had invaded. Unable to reach the downstairs phone, she hurled her shoe through neighbour Bodwell's bedroom window to alert them to summon the police.</p>
            <p><b>Arrival of the Police:</b> A squad of policemen rushed in, smashing the front door. They ransacked the house, turning drawers upside down, finding nobody except the narrator draped in a bath towel.</p>
            <p><b>Grandfather's Attack:</b> Hearing commotion in the attic, the police went up. Grandfather, living in memories of the Civil War, mistook them for military deserters and fired a revolver, wounding an officer's shoulder.</p>
            <p><b>The Twist:</b> Next morning, grandfather cheerfully asked why everyone was rushing around when he only went downstairs for a drink of water!</p>
          </div>`,
          ansTamil: "இக்கதை மனிதர்களின் அதீத கற்பனையும் அச்சமும் எளிய நிகழ்வை எவ்வாறு கலகலப்பான கலாட்டாவாக மாற்றுகிறது என்பதை விளக்குகிறது."
        }
      ]
    },

    {
      id: "eng2_sec2",
      title: "Part 2: Poem — The Grumble Family",
      author: "Lucy Maud Montgomery",
      questions: [
        {
          id: "eng2_2_1",
          type: "1m",
          mark: "1 Mark (Poetic Line)",
          q: "Where does the Grumble family live?",
          qTamil: "குறை சொல்லும் குடும்பம் எங்கே வசிக்கிறது?",
          options: ["a) On Joy Street", "b) On Complaining Street", "c) On Victory Hill", "d) In Happy City"],
          ans: "<b>b) On Complaining Street</b> (River of Discontent)",
          ansTamil: "அவர்கள் 'Complaining Street' என்ற குறை கூறும் தெருவில் வாழ்கின்றனர்."
        },
        {
          id: "eng2_2_2",
          type: "1m",
          mark: "1 Mark (Rhyme Scheme)",
          q: "What is the rhyme scheme of each stanza in 'The Grumble Family'?",
          qTamil: "இக்கவிதையின் எதுகைத் திட்டம் என்ன?",
          options: ["a) abab", "b) aabb", "c) abba", "d) abcb"],
          ans: "<b>b) aabb</b>",
          ansTamil: "ஒவ்வொரு 4 வரிப் பத்தியும் aabb என்ற எதுகை அமைப்பைக் கொண்டுள்ளது."
        },
        {
          id: "eng2_2_3",
          type: "2m",
          mark: "2 Marks",
          q: "What is the advice given by the poet to the readers?",
          qTamil: "வாசகர்களுக்குக் கவிஞர் வழங்கும் அறிவுரை என்ன?",
          ans: "The poet advises us to keep our feet from wandering into Complaining Street, never to grumble at whatever we do, and to maintain a cheerful smile and sing even when things go wrong.",
          ansTamil: "எதற்கெடுத்தாலும் குறை சொல்லாமல், சோதனையான காலத்திலும் இன்முகத்தோடு மகிழ்ந்து வாழக் கற்றுக்கொள்ள வேண்டும்."
        }
      ]
    },

    {
      id: "eng2_sec3",
      title: "Part 3: Supplementary — Zigzag",
      author: "Asha Nehemiah",
      questions: [
        {
          id: "eng2_3_1",
          type: "1m",
          mark: "1 Mark",
          q: "What kind of pet was Zigzag?",
          qTamil: "ஜிக்ஜாக் என்பது எவ்வகை செல்லப்பிராணி?",
          options: ["a) A dog", "b) An unusual African bird", "c) A monkey", "d) A cat"],
          ans: "<b>b) An unusual African bird</b> (can talk and sing in 21 languages)",
          ansTamil: "ஜிக்ஜாக் என்பது 21 மொழிகளில் பாடக்கூடிய ஓர் ஆப்பிரிக்கப் பறவை."
        },
        {
          id: "eng2_3_mcq_2",
          type: "1m",
          mark: "1 Mark",
          q: "Who brought Zigzag to Dr. Krishnan's family?",
          qTamil: "ஜிக்ஜாக்கை டாக்டர் கிருஷ்ணனின் குடும்பத்திற்கு அனுப்பி வைத்தவர் யார்?",
          options: ["a) Dr. Ashok T. Krishnan", "b) Dr. Somu", "c) Visu", "d) Mrs. Jhunjhunwala"],
          ans: "<b>b) Dr. Somu</b>",
          ansTamil: "டாக்டர் சோமு தனது ஆப்பிரிக்கப் பயணத்திற்குச் செல்லும் முன் ஜிக்ஜாக்கை அனுப்பி வைத்தார்."
        },
        {
          id: "eng2_3_mcq_3",
          type: "1m",
          mark: "1 Mark",
          q: "What was the special talent of the multilingual bird Zigzag?",
          qTamil: "ஜிக்ஜாக் பறவையின் விசேஷ திறமை யாது?",
          options: ["a) Barking like a dog", "b) Singing and reciting poetry in 21 languages", "c) Catching fish", "d) Flying backwards"],
          ans: "<b>b) Singing and reciting poetry in 21 languages</b>",
          ansTamil: "ஜிக்ஜாக் 21 வெவ்வேறு ஆப்பிரிக்க மற்றும் உலக மொழிகளில் பேசவும் கவிதை பாடவும் கூடியது."
        },
        {
          id: "eng2_3_2",
          type: "2m",
          mark: "2 Marks",
          q: "What caused panic in Dr. Krishnan's clinic when Zigzag was brought there?",
          qTamil: "டாக்டர் கிருஷ்ணன் மருத்துவமனையில் ஜிக்ஜாக் கொண்டுவரப்பட்ட போது என்ன நடந்தது?",
          ans: "At the house, Zigzag only ate fruit and snored loudly. But at the clinic, Zigzag became completely active, commanded the noisy patients politely, and brought complete silence and order to the chaotic clinic!",
          ansTamil: "வீட்டில் குறட்டை விட்டு தூங்கிய ஜிக்ஜாக், மருத்துவமனையில் குழந்தைகளை அமைதிப்படுத்தி ஒரு சிறந்த வரவேற்பாளராக மாறியது."
        }
      ]
    },

    {
      id: "eng2_sec4",
      title: "Part 4: Grammar & Vocabulary — Articles & Prepositions",
      author: "English Grammar & Structural Usage",
      questions: [
        {
          id: "eng2_4_1",
          type: "1m",
          mark: "1 Mark (Article)",
          q: "Fill in the blank with a suitable article:<br>James Thurber heard ________ unusual sound in the night.",
          qTamil: "சரியான ஆர்ட்டிக்கிள் (Article) கொண்டு நிரப்புக: James Thurber heard ________ unusual sound.",
          options: ["a) a", "b) an", "c) the", "d) no article"],
          ans: "<b>b) an</b> (Vowel sound 'un-')",
          ansTamil: "உயிர் ஒலி (vowel sound) தொடங்குவதால் 'an' பயன்படுகிறது."
        },
        {
          id: "eng2_4_2",
          type: "1m",
          mark: "1 Mark (Preposition)",
          q: "Fill in the blank with a suitable preposition:<br>The grandfather shot ________ the police officer in the attic.",
          qTamil: "சரியான முன்னிடைச்சொல் (Preposition) கொண்டு நிரப்புக:",
          options: ["a) at", "b) in", "c) on", "d) with"],
          ans: "<b>a) at</b> (shot at)",
          ansTamil: "Shoot at என்பது குறிப்பிட்ட இலக்கை நோக்கிச் சுடுதலைக் குறிக்கும்."
        }
      ]
    }
  ]
};
