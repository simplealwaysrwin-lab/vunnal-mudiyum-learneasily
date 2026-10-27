/**
 * 10th Standard English - Unit 4 Study Guide & Question Bank
 * Tamil Nadu Samacheer Kalvi Syllabus
 * 
 * Sections:
 * 1. Prose: The Attic (Satyajit Ray)
 * 2. Poem: The Ant and the Cricket (Adapted from Aesop's Fables)
 * 3. Supplementary: The Aged Mother (Matsuo Basho)
 * 4. Grammar & Vocabulary: Prepositions & Connectors
 */

const ENGLISH_UNIT_4_DATA = {
  unit: "Unit 4",
  title: "Unit 4: Prose - The Attic | Poem - The Ant and the Cricket | Supplementary - The Aged Mother | Grammar",

  // 📖 கதை வடிவிலான முழுமையான தமிழ் விளக்கம் (Story Mode)
  stories: [
    {
      id: "story_prose_u4",
      title: "🏠 The Attic (பரண் - 29 ஆண்டுகளுக்குப் பின் ஒரு பிராயச்சித்தம்!)",
      author: "சத்யஜித் ரே (Satyajit Ray - புகழ்பெற்ற இந்தியத் திரைப்பட மேதை & எழுத்தாளர்)",
      type: "உரைநடை (Prose)",
      summary: "பள்ளிப் பருவத்தில் பொறாமையால் திருடிய ஒரு தங்கப் பதக்கத்தை, 29 ஆண்டுகளுக்குப் பின் குற்ற உணர்ச்சியுடன் தேடிக் கண்டுபிடித்துத் தன் பழைய நண்பனிடம் ஒப்படைக்கும் ஒரு மனதைத் தொடும் கதை!",
      characters: [
        { name: "ஆதித்யா (Aditya)", role: "கொல்கத்தாவில் பெரும் தொழில் அதிபர்; தன் பால்ய காலப் பாவத்திற்குப் பரிகாரம் தேடி ஊர் திரும்பியவர்" },
        { name: "கதாசிரியர் (Narrator)", role: "ஆதித்யாவின் நண்பன்; ஆதித்யாவுடன் காரில் பயணிக்கும் கூட்டாளி" },
        { name: "சசாங்க சன்யால் (Sasanka Sanyal)", role: "ஆதித்யாவின் பள்ளித் தோழன்; வறுமையில் வாடி நாகேனின் டீக்கடையில் அமர்ந்திருக்கும் முன்னாள் புத்திசாலி மாணவன்" },
        { name: "நாகேன் மாமா (Nagen uncle)", role: "டீக்கடை உரிமையாளர்; சன்யாலின் சோகக் கதையை அறிந்தவர்" }
      ],
      scenes: [
        {
          num: "காட்சி 1",
          title: "29 ஆண்டுகளுக்குப் பிறகு சொந்த ஊருக்குப் பயணம் (Return to Bramhapur)",
          tamilContent: `தொழில் நிமித்தமாக காரில் சென்று கொண்டிருந்த ஆதித்யாவும் அவரது நண்பரும், பிரம்மபூர் என்ற சிற்றூரின் சந்திப்பைக் கடக்கும் போது ஆதித்யா வண்டியைத் திருப்பச் சொன்னார். அது அவர் 29 ஆண்டுகளுக்கு முன் படித்த பள்ளி அமைந்த ஊர்.<br><br>அங்கு நாகேன் என்பவரின் சிறிய தேநீர்க் கடைக்குச் சென்றனர். அங்கே கிழிந்த ஆடைகளுடன் ஒரு நடுத்தர வயது மனிதர் அமர்ந்து சத்தமாக தாகூரின் கவிதையை (Panraksha) கம்பீரமாக ஒப்பித்துக் கொண்டிருந்தார். அவர் பெயர் சசாங்க சன்யால்!`
        },
        {
          num: "காட்சி 2",
          title: "பழைய வீட்டின் பரண் மீது தேடுதல் (Searching the Attic)",
          tamilContent: `சன்யாலின் கவிதை வாசிப்பைக் கேட்டதும் ஆதித்யாவின் முகம் வெளிறிப் போனது! உடனே தேநீர்க் கடையை விட்டுப் புறப்பட்டு, பாழடைந்து கிடந்த தனது 200 ஆண்டுகள் பழமையான பூர்வீக வீட்டிற்கு நண்பனை அழைத்துச் சென்றார்.<br><br>அங்கு தூசி படிந்த மாடிப் பரணில் (Attic) ஏறி, ஒரு புறா கூட்டின் அருகிலிருந்த சுவர்ப்பொந்தில் நீண்ட நேரம் துழாவி, ஏதோ ஒரு பழைய பொருளைத் தேடி எடுத்துத் தனது பாக்கெட்டில் பத்திரப்படுத்திக் கொண்டார்.`
        },
        {
          num: "காட்சி 3",
          title: "தங்க வியாபாரியிடம் மதிப்பு அறிதல் (At the Jeweller's Shop)",
          tamilContent: `இருவரும் நேராக ஒரு நகைக்கடைக்குச் சென்றனர். அங்கு அந்தப் பொருளைக் கொடுத்து உரைத்துப் பார்த்தனர். அது ஒரு 'வெள்ளிப் பதக்கம்' (silver medal), ஆனால் அதன் மீது தங்க முலாம் பூசப்பட்டிருந்தது. அதன் தற்போதைய மதிப்பு 150 ரூபாய் என நகைக்கடைக்காரர் கூறினார்.`
        },
        {
          num: "காட்சி 4",
          title: "சன்யாலின் வீட்டில் மனம் திறந்த ஆதித்யா (Confession & Redemption)",
          tamilContent: `சன்யால் வசித்து வந்த சிறிய வீட்டிற்குச் சென்றனர். ஆதித்யா 150 ரூபாய் பணத்தை சன்யாலிடம் கொடுத்து, '29 ஆண்டுகளுக்கு முன்பு பள்ளியில் தாகூரின் கவிதை ஒப்புவித்தல் போட்டியில் நீங்கள் வென்ற அந்த மெடலை பொறாமையால் உங்களிடமிருந்து வாங்கிப் பரணில் ஒளித்து வைத்த அதே ஆதித்யா நான்தான். தவறை உணர்ந்து இந்தப் பணத்தை ஈடாகக் கொண்டு வந்துள்ளேன்' என்றார்.<br><br>சன்யால் அந்தப் பணத்தைத் தூக்கி எறிந்தார்! 'எனக்கு பிச்சை வேண்டாம்; ஆனால் என் உழைப்பால் கிடைத்த என் மெடல் எனக்கு வேண்டும்' என்றார். உடனே ஆதித்யா அந்த வெள்ளிப் பதக்கத்தை எடுத்து சன்யாலின் கைகளில் மரியாதையுடன் வைத்தார். சன்யாலின் கண்களில் ஆனந்தக் கண்ணீர் பெருக்கெடுத்தது!`
        }
      ],
      vocabulary: [
        { word: "Attic", type: "Noun", tamil: "வீட்டுப் பரண் / மாடி அறை", meaning: "A space or room just below the roof of a building." },
        { word: "Bifurcated", type: "Verb", tamil: "இரண்டாகப் பிரிந்தது", meaning: "Divided into two branches or forks." },
        { word: "Revive", type: "Verb", tamil: "மீண்டும் உயிர்ப்பித்தல் / புத்துயிரூட்டல்", meaning: "Restore to life, consciousness, or strength." },
        { word: "Sojourn", type: "Noun", tamil: "குறுகிய காலத் தற்காலிகத் தங்குதல்", meaning: "A temporary stay." },
        { word: "Venting", type: "Verb", tamil: "மனக் குமுறலை வெளிப்படுத்துதல்", meaning: "Giving free expression to a strong emotion." }
      ],
      moral: `💡 <b>பாடத்தின் நீதி (Moral):</b><br>
      வாழ்க்கையில் எவ்வளவு பெரும் செல்வந்தனாக உயர்ந்தாலும், கடந்த காலத்தில் செய்த தவறுகளை ஒப்புக்கொண்டு மனம் திருந்துவதே ஒரு மனிதனின் உண்மையான பெருமை!`
    },

    {
      id: "story_poem_u4",
      title: "🐜 The Ant and the Cricket (எறும்பும் வெட்டுக்கிளியும்)",
      author: "ஈசாப் நீதிக்கதைகள் தழுவல் (Adapted from Aesop's Fables)",
      type: "செய்யுள் (Poem)",
      summary: "கோடையில் உழைக்காமல் பாடித் திரிந்துவிட்டு, குளிர்காலத்தில் உணவின்றித் தவித்த சோம்பேறி வெட்டுக்கிளிக்கும், சேமிப்பின் அவசியத்தை உணர்த்தும் சுறுசுறுப்பான எறும்புக்கும் இடையே நடக்கும் சுவையான விவாதம்!",
      characters: [
        { name: "வெட்டுக்கிளி (The Cricket)", role: "இளமையிலும் கோடையிலும் ஆடிப் பாடி நேரத்தை வீணடித்த சோம்பேறி" },
        { name: "எறும்பு (The Ant)", role: "வருங்காலத்தை உணர்ந்து உணவைச் சேமித்து உழைத்த அறிவாளி" }
      ],
      scenes: [
        {
          num: "முழு கவிதை விளக்கம்",
          title: "இன்பமும் துன்பமும் — உழைப்பின் மேன்மை",
          tamilContent: `வசந்த காலத்திலும் கோடைக்காலத்திலும் வெயில் கொளுத்தும்போது, ஒரு முட்டாள் வெட்டுக்கிளி எவ்வித எதிர்காலச் சிந்தனையும் இன்றி பாடிக்கொண்டே மகிழ்ச்சியாகத் திரிந்தது. ஆனால் பனிபொழியும் கொடும் குளிர்காலம் வந்தது. பனியால் நிலமெங்கும் மூடியது; மரங்களில் இலைகளோ, பூக்களோ எங்குமே ஒரு துளி தானியமோ கிடைக்கவில்லை.<br><br>பசியால் நடுங்கியபடி, சேமித்து வைத்திருந்த ஒரு சிறிய எறும்பின் புற்றிற்குச் சென்று பிச்சை கேட்டது: 'எனக்குக் கொஞ்சம் தானியமும் தங்குமிடமும் கொடு, அடுத்த வசந்தத்தில் திருப்பித் தந்து விடுகிறேன்' என்றது. அதற்கு எறும்பு புன்னகையுடன், 'நாங்கள் எறும்புகள் யாரிடமும் கடன் வாங்குவதும் இல்லை, கொடுப்பதும் இல்லை! கோடைக்காலத்தில் நீ என்ன செய்து கொண்டிருந்தாய்?' என்று கேட்டது. 'நான் பாடிக் கொண்டிருந்தேன்' என்றது வெட்டுக்கிளி. 'அப்படியானால் குளிர்காலத்தை ஆடியபடியே கடந்துவிடு (Dance the winter away)!' என்று கூறி கதவை அறைந்து சாத்தியது எறும்பு!`
        }
      ],
      vocabulary: [
        { word: "Accustomed", type: "Adjective", tamil: "பழக்கப்பட்டுப்போன", meaning: "Customary; usual; in the habit of." },
        { word: "Famine", type: "Noun", tamil: "பஞ்சக் கொடுமை", meaning: "Extreme scarcity of food." },
        { word: "Miserly", type: "Adjective", tamil: "கஞ்சத்தனமான / எளிதில் தாராளமாகத் தராத", meaning: "Pertaining to a miser; stingy." },
        { word: "Quoth", type: "Verb (Archaic)", tamil: "என்று கூறியது", meaning: "Said." }
      ],
      moral: `💡 <b>வாழ்வியல் தத்துவம் (Moral):</b><br>
      'இளமையில் கல், சுறுசுறுப்பாக உழை!' — வளமான காலத்தில் சேமிக்காதவன், வறுமைக் காலத்தில் கண்ணீர் வடிக்க நேரிடும்!`
    }
  ],

  // 📝 வினா - விடைகள் வங்கி (Q&A Bank - Samacheer Kalvi 10th Std)
  subSections: [
    {
      id: "eng4_sec1",
      title: "Part 1: Prose — The Attic",
      author: "Satyajit Ray",
      questions: [
        {
          id: "eng4_1_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "அரசுத் தேர்வு",
          q: "After how many years did Aditya return to his ancestral ancestral village Bramhapur?",
          qTamil: "எத்தனை ஆண்டுகளுக்குப் பிறகு ஆதித்யா தனது சொந்தக் கிராமத்திற்குத் திரும்பினார்?",
          options: ["a) 15 years", "b) 20 years", "c) 25 years", "d) 29 years"],
          ans: "<b>d) 29 years</b>",
          ansTamil: "29 ஆண்டுகளுக்குப் பிறகு ஆதித்யா பிரம்மபூருக்குத் திரும்பினார்."
        },
        {
          id: "eng4_1_2",
          type: "1m",
          mark: "1 Mark",
          q: "What poem was Sasanka Sanyal reciting loudly in Nagen's tea shop?",
          qTamil: "நாகேனின் தேநீர்க் கடையில் சசாங்க சன்யால் கம்பீரமாக ஒப்பித்த கவிதை எது?",
          options: ["a) Life by Henry Van Dyke", "b) Panraksha by Rabindranath Tagore", "c) The Secret of the Machines", "d) Gitanjali"],
          ans: "<b>b) Panraksha by Rabindranath Tagore</b>",
          ansTamil: "ரவீந்திரநாத் தாகூரின் 'பண்ரக்ஷா' (Panraksha) என்ற கவிதையை சன்யால் ஒப்பித்துக் கொண்டிருந்தார்."
        },
        {
          id: "eng4_1_3",
          type: "1m",
          mark: "1 Mark",
          q: "Where was the silver medal hidden by Aditya in his ancestral home?",
          qTamil: "தன் பூர்வீக வீட்டில் வெள்ளிப் பதக்கத்தை ஆதித்யா எங்கே மறைத்து வைத்திருந்தார்?",
          options: ["a) Under the floorboards", "b) Inside an iron safe", "c) In a hole in the attic wall above the ventilator", "d) In the garden well"],
          ans: "<b>c) In a hole in the attic wall above the ventilator</b>",
          ansTamil: "வீட்டுப் பரணில் (Attic) காற்றோட்டத் துளைக்கு மேலே சுவரில் இருந்த ஒரு பொந்தில் மறைத்து வைக்கப்பட்டிருந்தது."
        },
        {
          id: "eng4_1_4",
          type: "1m",
          mark: "1 Mark",
          q: "What was inscribed on the silver medal won by Sanyal?",
          qTamil: "சன்யால் வென்ற அந்தப் பதக்கத்தில் என்ன பொறிக்கப்பட்டிருந்தது?",
          options: ["a) Aditya Narayan Chowdhury", "b) Sriman Sasanka Sanyal - Special Prize for Recitation - 1948", "c) Best Sportsman 1948", "d) Bramhapur High School Champion"],
          ans: "<b>b) Sriman Sasanka Sanyal - Special Prize for Recitation - 1948</b>",
          ansTamil: "ஸ்ரீமான் சசாங்க சன்யால் - சிறப்பு ஒப்புவித்தல் பரிசு - 1948 என்று பொறிக்கப்பட்டிருந்தது."
        },
        {
          id: "eng4_1_5",
          type: "2m",
          mark: "2 Marks",
          examYear: "2023",
          examTag: "2023*",
          q: "Why did Sanyal refuse to accept the 150 rupees offered by Aditya?",
          qTamil: "ஆதித்யா வழங்கிய 150 ரூபாய் பணத்தை ஏற்க சன்யால் ஏன் மறுத்தார்?",
          ans: "Sanyal refused the money because he was not a beggar looking for charity. He only wanted his lost medal back, which was a symbol of his youthful talent, pride, and glory.",
          ansTamil: "தான் யாசகம் கேட்கும் பிச்சைக்காரன் அல்ல என்றும், தன் திறமையின் அடையாளமான தன் பதக்கமே தனக்கு வேண்டும் என்றும் கூறி பணத்தை ஏற்க மறுத்தார்."
        },
        {
          id: "eng4_1_6",
          type: "2m",
          mark: "2 Marks",
          q: "Describe Aditya's ancestral house as seen by the narrator.",
          qTamil: "கதாசிரியர் பார்த்த ஆதித்யாவின் பூர்வீக வீட்டின் நிலை எவ்வாறு இருந்தது?",
          ans: "Aditya's ancestral home was over two hundred years old. Most of it had crumbled into ruins, but one portion with the attic still stood, covered in cobwebs, wild grass, and pigeon nests.",
          ansTamil: "இருநூறு ஆண்டுகள் பழமையான அந்த வீடு பாழடைந்து இடிந்து கிடந்தது; பரண் பகுதி மட்டும் ஒட்டடை மற்றும் புறாக் கூடுகளுடன் எஞ்சியிருந்தது."
        },
        {
          id: "eng4_1_7",
          type: "5m",
          mark: "5 Marks",
          isImportant: true,
          q: "Give a detailed account of how Aditya made amends for his childhood wrong deed in 'The Attic'.",
          qTamil: "'தி அட்டிக்' கதையில் ஆதித்யா தனது பால்ய காலத் தவறுக்குப் பரிகாரம் தேடிய விதத்தை விரிவாக விவரிக்க.",
          ans: `<div style="line-height:1.6;">
            <b>Synopsis:</b>
            <ul style="margin:4px 0 10px 20px; font-weight:600; color:#0369a1;">
              <li>Encounter at Nagen's Tea Shop</li>
              <li>Childhood Envy and Guilt</li>
              <li>Retrieving the Medal from the Attic</li>
              <li>Meeting Sanyal and Confession</li>
              <li>Conclusion: Power of True Repentance</li>
            </ul>
            <p><b>Encounter at Tea Shop:</b> Twenty-nine years after leaving his school at Bramhapur, Aditya unexpectedly heard an impoverished man reciting Tagore's poem 'Panraksha' with deep passion in Nagen's tea shop. Aditya recognized him as his former classmate, Sasanka Sanyal.</p>
            <p><b>Childhood Envy:</b> Sanyal had won a medal for reciting that very poem in school. Out of youthful jealousy, Aditya had borrowed the medal to show his father, lied that he had lost it, and kept it hidden in his attic ever since.</p>
            <p><b>Retrieval:</b> Overwhelmed with guilt, Aditya climbed the dangerous stairs to the crumbling attic of his ancestral house, reached into a hole in the wall, and recovered the tarnished silver medal. He took it to a jeweller who valued it at 150 rupees.</p>
            <p><b>Redemption:</b> Aditya visited Sanyal's home and offered him 150 rupees. Sanyal boldly rejected the cash, declaring he was no beggar. When Aditya returned the actual medal, Sanyal's eyes filled with tears of profound joy and forgiveness.</p>
            <p><b>Conclusion:</b> Satyajit Ray beautifully highlights that genuine moral courage lies in admitting past mistakes and seeking sincere restitution.</p>
          </div>`,
          ansTamil: "இக்கதை ஒரு மனிதன் தன் பள்ளிப் பருவத் தவறை உணர்ந்து, மனப்பூர்வமாக மன்னிப்புக் கேட்டுப் பரிகாரம் செய்வதன் மாண்பை விளக்குகிறது."
        }
      ]
    },

    {
      id: "eng4_sec2",
      title: "Part 2: Poem — The Ant and the Cricket",
      author: "Adapted from Aesop's Fables",
      questions: [
        {
          id: "eng4_2_1",
          type: "1m",
          mark: "1 Mark (Poetic Meaning)",
          q: "In the poem 'The Ant and the Cricket', what did the cricket do during the warm, sunny summer and spring?",
          qTamil: "வெட்டுக்கிளி கோடை மற்றும் வசந்த காலத்தில் என்ன செய்து கொண்டிருந்தது?",
          options: ["a) Gathered wheat and corn", "b) Sang and danced away the days", "c) Built an underground burrow", "d) Learned music lessons"],
          ans: "<b>b) Sang and danced away the days</b>",
          ansTamil: "அது எந்தவித சேமிப்பும் செய்யாமல் ஆடிப் பாடி பொழுதைக் கழித்தது."
        },
        {
          id: "eng4_2_2",
          type: "1m",
          mark: "1 Mark (Figure of Speech)",
          q: "What is the figure of speech used when animals talk and behave like humans in this fable poem?",
          qTamil: "விலங்குகளும் பூச்சிகளும் மனிதனைப் போல் பேசும் இலக்கிய உத்தி எது?",
          options: ["a) Personification", "b) Alliteration", "c) Onomatopoeia", "d) Simile"],
          ans: "<b>a) Personification</b> (Giving human traits and speech to insects)",
          ansTamil: "பூச்சிகளுக்கு மனிதப் பண்புகளை ஏற்றி உரைப்பதால் இது தற்குறிப்பேற்ற உருவகம் (Personification) ஆகும்."
        },
        {
          id: "eng4_2_3",
          type: "2m",
          mark: "2 Marks",
          examYear: "2024",
          examTag: "2024*",
          q: "What was the firm principle declared by the ant?",
          qTamil: "எறும்பு கூறிய உறுதியான கொள்கை என்ன?",
          ans: "The ant stated: <i>'We ants never borrow, we ants never lend.'</i> The ant emphasized that everyone must work hard and save for their own rainy days.",
          ansTamil: "நாங்கள் எறும்புகள் கடன் வாங்குவதும் இல்லை; யாருக்கும் கடன் கொடுப்பதும் இல்லை என்ற கொள்கையை எறும்பு தெளிவுபடுத்தியது."
        },
        {
          id: "eng4_2_4",
          type: "5m",
          mark: "5 Marks",
          q: "Contrast the attitudes of the ant and the cricket in the poem 'The Ant and the Cricket'.",
          qTamil: "இக்கவிதையில் எறும்பு மற்றும் வெட்டுக்கிளியின் குணாதிசயங்களை ஒப்பிட்டு வேறுபடுத்திக் காட்டுக.",
          ans: `<div style="line-height:1.6;">
            <b>Synopsis:</b>
            <ul style="margin:4px 0 10px 20px; font-weight:600; color:#0369a1;">
              <li>The Careless Cricket</li>
              <li>The Harbingers of Winter</li>
              <li>The Industrious Ant</li>
              <li>The Harsh Lesson</li>
              <li>Moral Conclusion</li>
            </ul>
            <p><b>The Careless Cricket:</b> The cricket represents irresponsible, short-sighted individuals. He foolishly wasted the pleasant seasons of spring and summer in merrymaking, completely oblivious to future needs.</p>
            <p><b>Arrival of Winter:</b> When frost and snow covered the earth, his cupboard was bare. Facing cold and starvation, he pleaded with the ant for a mouthful of grain.</p>
            <p><b>The Hardworking Ant:</b> In sharp contrast, the ant represents discipline, thrift, and foresight. While the world rested, ants toiled tirelessly to gather food and build shelter.</p>
            <p><b>The Lesson:</b> When the cricket admitted he spent summer singing, the ant sharply replied: 'Go then and dance the winter away!' and slammed the door.</p>
            <p><b>Conclusion:</b> Aesop teaches us that those who indulge only in pleasure today will inevitably starve tomorrow. Diligence and timely saving are essential virtues.</p>
          </div>`,
          ansTamil: "சுறுசுறுப்பும் சேமிப்பும் வாழ்வின் பாதுகாப்பு; சோம்பேறித்தனமும் ஆடம்பரமும் அழிவுக்கே வழிவகுக்கும் என்பதை இக்கவிதை அழகாக விளக்குகிறது."
        }
      ]
    },

    {
      id: "eng4_sec3",
      title: "Part 3: Supplementary — The Aged Mother",
      author: "Matsuo Basho (Japanese Folktale)",
      questions: [
        {
          id: "eng4_3_1",
          type: "1m",
          mark: "1 Mark",
          q: "What was the barbaric decree issued by the despotic leader of Shinano?",
          qTamil: "ஷினானோ நாட்டின் கொடுங்கோல் ஆளுநர் பிறப்பித்த கொடூர ஆணை என்ன?",
          options: ["a) Pay double taxes", "b) Immediately put all elderly people to death", "c) Surrender all weapons", "d) Banish all farmers"],
          ans: "<b>b) Immediately put all elderly people to death</b>",
          ansTamil: "நாட்டிலுள்ள முதியவர்கள் அனைவரையும் உடனடியாகக் கொன்றுவிட வேண்டும் என்ற கொடூர ஆணை."
        },
        {
          id: "eng4_3_2",
          type: "1m",
          mark: "1 Mark",
          q: "How did the loving mother help her son find his way back down the mountain safely?",
          qTamil: "தாய் தன் மகன் மலையிலிருந்து பாதுகாப்பாகக் கீழே இறங்குவதற்கு என்ன செய்தாள்?",
          options: ["a) Gave him a magnetic compass", "b) Snapped twigs along the climb and dropped them on the trail", "c) Lit torchlights", "d) Tied a long rope"],
          ans: "<b>b) Snapped twigs along the climb and dropped them on the trail</b>",
          ansTamil: "மகன் மலையிறங்கும்போது வழிதவறிவிடக் கூடாது என்பதற்காக மரக்கிளைகளை ஒடித்து வழியெங்கும் அடையாளமாகப் போட்டு வந்தாள்."
        },
        {
          id: "eng4_3_3",
          type: "2m",
          mark: "2 Marks",
          q: "How did the mother solve the governor's impossible riddle of making 'a rope of ashes'?",
          qTamil: "'சாம்பலால் ஆன கயிறு' செய்து காட்டுமாறு ஆளுநர் கூறிய புதிருக்குத் தாய் எவ்வாறு தீர்வு கூறினாள்?",
          ans: "The wise mother advised her son to twist a heavy rope of dry straw, stretch it on a row of flat stones on a windless night, and burn it to ashes. The rope retained its woven form even as ash!",
          ansTamil: "வைக்கோலால் முறுக்கப்பட்ட கயிற்றைத் தட்டையான கற்கள் மீது வைத்து, காற்றில்லாத இரவில் எரித்தால் கயிறு சாம்பலான பின்னரும் அதன் முறுக்கு வடிவம் மாறாமல் இருக்கும் என்றாள்."
        }
      ]
    },

    {
      id: "eng4_sec4",
      title: "Part 4: Grammar & Structural Usage — Prepositions & Connectors",
      author: "Class 10 Board Grammar",
      questions: [
        {
          id: "eng4_4_1",
          type: "1m",
          mark: "1 Mark (Preposition)",
          q: "Choose the correct preposition:<br>Aditya found the old medal hidden ________ the attic wall.",
          qTamil: "சரியான Preposition கொண்டு வாக்கியத்தை நிறைவு செய்க:",
          options: ["a) into", "b) inside", "c) above", "d) across"],
          ans: "<b>b) inside</b>",
          ansTamil: "சுவர்ப்பொந்தின் உள்ளே மறைத்து வைக்கப்பட்டிருந்ததால் 'inside' பயன்படுகிறது."
        },
        {
          id: "eng4_4_2",
          type: "1m",
          mark: "1 Mark (Connector / Linker)",
          q: "Fill in the blank with an appropriate connector:<br>The cricket was starving ________ he had saved no food in summer.",
          qTamil: "பொருத்தமான இணைப்புச்சொல் (Connector) கொண்டு நிரப்புக:",
          options: ["a) although", "b) because", "c) unless", "d) while"],
          ans: "<b>b) because</b> (expresses the reason/cause)",
          ansTamil: "காரணத்தை விளக்கும் 'because' (ஏனெனில்) என்ற இணைப்புச்சொல் பொருத்தமானது."
        },
        {
          id: "eng4_4_3",
          type: "2m",
          mark: "2 Marks",
          q: "Combine the following sentences using 'Though / Although':<br><i>He was poor and frail. He possessed great wisdom.</i>",
          qTamil: "'Though / Although' பயன்படுத்தி வாக்கியங்களை இணைக்க:",
          ans: "<b>Though he was poor and frail, he possessed great wisdom.</b><br>(Or: Although he was poor and frail, he possessed great wisdom.)",
          ansTamil: "எதிர்மறைப் பண்புகளை இணைக்கும்போது முன்னால் 'Though' சேர்க்கப்பட்டு கமா கொண்டு இணைக்கப்படும்."
        }
      ]
    }
  ]
};
