/**
 * 10th Standard English - Unit 4 Study Guide & Question Bank
 * Tamil Nadu Samacheer Kalvi Syllabus
 * 
 * Sections:
 * 1. Prose: The Attic (Satyajit Ray)
 * 2. Poem: The Ant and the Cricket (Adapted from Aesop's Fables)
 * 3. Supplementary: The Aged Mother (Matsuo Basho)
 * 4. Grammar & Vocabulary: Conjunctions (Connectors), Nominalisation & Prepositions
 */

const ENGLISH_UNIT_4_DATA = {
  unit: "Unit 4",
  title: "Unit 4: Prose - The Attic | Poem - The Ant and the Cricket | Supplementary - The Aged Mother | Grammar",

  // 📖 கதை வடிவிலான முழுமையான தமிழ் & ஆங்கில விளக்கம் (Bilingual Story Mode with Audio Voice Scripts)
  stories: [
    {
      id: "story_prose_u4",
      title: "🏠 The Attic (பரண் - 29 ஆண்டுகளுக்குப் பின் ஒரு பிராயச்சித்தம்!)",
      titleEn: "The Attic",
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
          num: "காட்சி 1 / Scene 1",
          title: "29 ஆண்டுகளுக்குப் பிறகு சொந்த ஊருக்குப் பயணம் (Return to Bramhapur)",
          titleEn: "Return to Bramhapur",
          tamilContent: `தொழில் நிமித்தமாக காரில் சென்று கொண்டிருந்த ஆதித்யாவும் அவரது நண்பரும், பிரம்மபூர் என்ற சிற்றூரின் சந்திப்பைக் கடக்கும் போது ஆதித்யா வண்டியைத் திருப்பச் சொன்னார். அது அவர் 29 ஆண்டுகளுக்கு முன் படித்த பள்ளி அமைந்த ஊர்.<br><br>அங்கு நாகேன் என்பவரின் சிறிய தேநீர்க் கடைக்குச் சென்றனர். அங்கே கிழிந்த ஆடைகளுடன் ஒரு நடுத்தர வயது மனிதர் அமர்ந்து சத்தமாக தாகூரின் கவிதையை (Panraksha) கம்பீரமாக ஒப்பித்துக் கொண்டிருந்தார். அவர் பெயர் சசாங்க சன்யால்!`,
          englishContent: `Aditya and his narrator friend were driving back after visiting a modern factory when they reached the junction leading toward Bramhapur. Aditya suddenly decided to take the right turn and visit the village where he had spent his boyhood twenty-nine years ago.<br><br>They arrived at Nagen uncle's rustic tea shop. Inside, they met Sasanka Sanyal, a frail, impoverished man in ragged clothes. Despite his misfortunes, Sanyal stood erect and recited verses from Rabindranath Tagore's poem 'Panraksha' in a powerful, resounding voice!`,
          audioNarrationTa: "வாருங்கள் மாணவர்களே! சத்யஜித் ரேயின் புகழ்பெற்ற 'பரண்' கதையைக் கேட்போம்! கொல்கத்தாவில் பெரும் தொழிலதிபராக விளங்கும் ஆதித்யாவும் அவரது நண்பரும் காரில் பயணம் செய்து கொண்டிருந்தனர். பிரம்மபூர் என்ற சிற்றூருக்குச் செல்லும் திருப்பம் வந்ததும், ஆதித்யா வண்டியை அங்கு திருப்பச் சொன்னார். 29 ஆண்டுகளுக்கு முன்பு அவர் படித்த பள்ளி அமைந்த ஊர் அது! அங்கு நாகேன் மாமாவின் சிறிய தேநீர்க் கடைக்குச் சென்றனர். அங்கே கிழிந்த ஆடைகளுடன் ஒரு நடுத்தர வயது மனிதர் கம்பீரமான குரலில் ரவீந்திரநாத் தாகூரின் கவிதையை ஒப்பித்துக் கொண்டிருந்தார். அவர் பெயர் சசாங்க சன்யால்!",
          audioNarrationEn: "Welcome, dear students, to Satyajit Ray's touching story, The Attic! Aditya, a wealthy businessman, was driving through the countryside with his narrator friend. When they reached the fork leading toward Bramhapur, Aditya decided to take a detour to visit the quaint village of his boyhood, twenty-nine years later. At Nagen uncle's rustic tea shop, they noticed a frail man dressed in shabby clothes. Suddenly, this stranger stood up and began reciting verses from Rabindranath Tagore's famous poem Panraksha in a clear, resonant voice. His name was Sasanka Sanyal!"
        },
        {
          num: "காட்சி 2 / Scene 2",
          title: "பழைய வீட்டின் பரண் மீது தேடுதல் (Searching the Attic)",
          titleEn: "Searching the Attic",
          tamilContent: `சன்யாலின் கவிதை வாசிப்பைக் கேட்டதும் ஆதித்யாவின் முகம் வெளிறிப் போனது! உடனே தேநீர்க் கடையை விட்டுப் புறப்பட்டு, பாழடைந்து கிடந்த தனது 200 ஆண்டுகள் பழமையான பூர்வீக வீட்டிற்கு நண்பனை அழைத்துச் சென்றார்.<br><br>அங்கு தூசி படிந்த மாடிப் பரணில் (Attic) ஏறி, ஒரு புறா கூட்டின் அருகிலிருந்த சுவர்ப்பொந்தில் நீண்ட நேரம் துழாவி, ஏதோ ஒரு பழைய பொருளைத் தேடி எடுத்துத் தனது பாக்கெட்டில் பத்திரப்படுத்திக் கொண்டார்.`,
          englishContent: `Hearing Sanyal recite the poem, Aditya's face turned completely pale! Without finishing his tea, he rushed out and led his friend to his ancestral home, a decaying two-hundred-year-old mansion.<br><br>Aditya climbed up a creaky wooden ladder into the dusty attic. Near a pigeon's nest inside a crevice in the brick wall, he searched anxiously. At last, he retrieved a small antique object and slipped it safely into his pocket with relief.`,
          audioNarrationTa: "சன்யாலின் கவிதை வாசிப்பைக் கேட்டதும் ஆதித்யாவின் முகம் வெளிறிப் போனது! உடனே கடையை விட்டுப் புறப்பட்டு, பாழடைந்து கிடந்த தனது 200 ஆண்டுகள் பழமையான பூர்வீக வீட்டிற்கு நண்பனை அழைத்துச் சென்றார். அங்கே தூசி படிந்த மாடிப் பரணில் ஏறி, ஒரு புறா கூட்டின் அருகிலிருந்த சுவர்ப்பொந்தில் நீண்ட நேரம் துழாவி, ஒரு பழைய பொருளைத் தேடி எடுத்துத் தன் பாக்கெட்டில் பத்திரப்படுத்திக் கொண்டார்!",
          audioNarrationEn: "As soon as Aditya heard the poem, his expression changed completely. Rushing out of the tea shop, he drove directly to his ancestral home, an ancient two-hundred-year-old house now in ruins. Aditya climbed the creaky ladder into the dark, dusty attic. Near a pigeon's nest inside a cavity in the brick wall, he searched anxiously. At last, he found the antique object he had been seeking and placed it safely in his pocket with a quiet sigh of relief."
        },
        {
          num: "காட்சி 3 / Scene 3",
          title: "தங்க வியாபாரியிடம் மதிப்பு அறிதல் (At the Jeweller's Shop)",
          titleEn: "At the Jeweller's Shop",
          tamilContent: `இருவரும் நேராக ஒரு நகைக்கடைக்குச் சென்றனர். அங்கு அந்தப் பொருளைக் கொடுத்து உரைத்துப் பார்த்தனர். அது ஒரு 'வெள்ளிப் பதக்கம்' (silver medal), ஆனால் அதன் மீது தங்க முலாம் பூசப்பட்டிருந்தது. அதன் தற்போதைய மதிப்பு 150 ரூபாய் என நகைக்கடைக்காரர் கூறினார்.`,
          englishContent: `They proceeded directly to a local jeweller's shop. Aditya handed over the discovered object to be tested. It was a medal engraved with Sasanka Sanyal's name for winning the school poetry recitation contest in 1948. Though originally made of silver, it had a rich golden polish. The jeweller weighed it and estimated its current market value at one hundred and fifty rupees.`,
          audioNarrationTa: "இருவரும் நேராக ஒரு நகைக்கடைக்குச் சென்றனர். அங்கு அந்தப் பொருளைக் கொடுத்து உரசிப் பார்த்தனர். அது ஒரு வெள்ளிப் பதக்கம்; ஆனால் அதன் மீது தங்க முலாம் பூசப்பட்டிருந்தது. 1948-ஆம் ஆண்டு பள்ளியில் நடந்த கவிதைப் போட்டியில் சசாங்க சன்யால் வென்ற பதக்கம் அது! அதன் தற்போதைய மதிப்பு 150 ரூபாய் என நகைக்கடைக்காரர் கூறினார்.",
          audioNarrationEn: "Next, they drove straight to a nearby jewellery shop. Aditya presented the medal to the jeweller to determine its value. It was a silver medal crafted with a fine coat of gold, bearing Sasanka Sanyal's name for winning the recitation contest in nineteen forty-eight. The jeweller weighed it and stated that its current market worth was one hundred and fifty rupees."
        },
        {
          num: "காட்சி 4 / Scene 4",
          title: "சன்யாலின் வீட்டில் மனம் திறந்த ஆதித்யா (Confession & Redemption)",
          titleEn: "Confession and Redemption",
          tamilContent: `சன்யால் வசித்து வந்த சிறிய வீட்டிற்குச் சென்றனர். ஆதித்யா 150 ரூபாய் பணத்தை சன்யாலிடம் கொடுத்து, '29 ஆண்டுகளுக்கு முன்பு பள்ளியில் தாகூரின் கவிதை ஒப்புவித்தல் போட்டியில் நீங்கள் வென்ற அந்த மெடலை பொறாமையால் உங்களிடமிருந்து வாங்கிப் பரணில் ஒளித்து வைத்த அதே ஆதித்யா நான்தான். தவறை உணர்ந்து இந்தப் பணத்தை ஈடாகக் கொண்டு வந்துள்ளேன்' என்றார்.<br><br>சன்யால் அந்தப் பணத்தைத் தூக்கி எறிந்தார்! 'எனக்கு பிச்சை வேண்டாம்; ஆனால் என் உழைப்பால் கிடைத்த என் மெடல் எனக்கு வேண்டும்' என்றார். உடனே ஆதித்யா அந்த வெள்ளிப் பதக்கத்தை எடுத்து சன்யாலின் கைகளில் மரியாதையுடன் வைத்தார். சன்யாலின் கண்களில் ஆனந்தக் கண்ணீர் பெருக்கெடுத்தது!`,
          englishContent: `Aditya visited Sanyal's humble home and offered him the one hundred and fifty rupees. Sanyal sternly refused to accept charity, saying he only wanted his medal. Aditya confessed with genuine humility: 'I am the boy who borrowed your medal twenty-nine years ago out of jealousy and never returned it. Please forgive me.'<br><br>Aditya then placed the cherished medal into Sanyal's hands. Overjoyed and moved by Aditya's genuine remorse, Sanyal accepted his medal with tears of joy!`,
          audioNarrationTa: "சன்யாலின் சிறிய வீட்டிற்கு ஆதித்யா சென்றார். 150 ரூபாய் பணத்தை நீட்டி, '29 ஆண்டுகளுக்கு முன்பு உங்களிடமிருந்து பொறாமையால் அந்த மெடலை வாங்கித் தராமல் ஏமாற்றிய பாவி நான்தான். தவறை உணர்ந்து இந்தப் பணத்தை இழப்பீடாகத் தருகிறேன்' என்றார். சன்யால் பணத்தை மறுத்துவிட்டு, 'எனக்கு என் உழைப்பால் கிடைத்த பதக்கமே வேண்டும்' என்றார். ஆதித்யா அந்தப் பதக்கத்தை மரியாதையுடன் ஒப்படைக்க, சன்யாலின் கண்களில் ஆனந்தக் கண்ணீர் பெருக்கெடுத்தது!",
          audioNarrationEn: "Aditya arrived at Sanyal's modest home and offered him the one hundred and fifty rupees. Sanyal firmly refused to accept charity, declaring that he only wanted his self-respect and his medal. Aditya confessed with genuine humility: 'I am Aditya, the classmate who took your medal out of foolish envy twenty-nine years ago.' Aditya then handed the medal to Sanyal. Moved by Aditya's genuine remorse and honesty, Sanyal accepted his medal with tears of joy and forgave his old friend!"
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
      titleEn: "The Ant and the Cricket",
      author: "ஈசாப் நீதிக்கதைகள் தழுவல் (Adapted from Aesop's Fables)",
      type: "செய்யுள் (Poem)",
      summary: "கோடையில் உழைக்காமல் பாடித் திரிந்துவிட்டு, குளிர்காலத்தில் உணவின்றித் தவித்த சோம்பேறி வெட்டுக்கிளிக்கும், சேமிப்பின் அவசியத்தை உணர்த்தும் சுறுசுறுப்பான எறும்புக்கும் இடையே நடக்கும் சுவையான விவாதம்!",
      characters: [
        { name: "வெட்டுக்கிளி (The Cricket)", role: "இளமையிலும் கோடையிலும் ஆடிப் பாடி நேரத்தை வீணடித்த சோம்பேறி" },
        { name: "எறும்பு (The Ant)", role: "வருங்காலத்தை உணர்ந்து உணவைச் சேமித்து உழைத்த அறிவாளி" }
      ],
      scenes: [
        {
          num: "முழு கவிதை விளக்கம் / Full Poem Narration",
          title: "இன்பமும் துன்பமும் — உழைப்பின் மேன்மை (The Fable of the Ant and the Cricket)",
          titleEn: "The Fable of the Ant and the Cricket",
          tamilContent: `வசந்த காலத்திலும் கோடைக்காலத்திலும் வெயில் கொளுத்தும்போது, ஒரு முட்டாள் வெட்டுக்கிளி எவ்வித எதிர்காலச் சிந்தனையும் இன்றி பாடிக்கொண்டே மகிழ்ச்சியாகத் திரிந்தது. ஆனால் பனிபொழியும் கொடும் குளிர்காலம் வந்தது. பனியால் நிலமெங்கும் மூடியது; மரங்களில் இலைகளோ, பூக்களோ எங்குமே ஒரு துளி தானியமோ கிடைக்கவில்லை.<br><br>பசியால் நடுங்கியபடி, சேமித்து வைத்திருந்த ஒரு சிறிய எறும்பின் புற்றிற்குச் சென்று பிச்சை கேட்டது: 'எனக்குக் கொஞ்சம் தானியமும் தங்குமிடமும் கொடு, அடுத்த வசந்தத்தில் திருப்பித் தந்து விடுகிறேன்' என்றது. அதற்கு எறும்பு புன்னகையுடன், 'நாங்கள் எறும்புகள் யாரிடமும் கடன் வாங்குவதும் இல்லை, கொடுப்பதும் இல்லை! கோடைக்காலத்தில் நீ என்ன செய்து கொண்டிருந்தாய்?' என்று கேட்டது. 'நான் பாடிக் கொண்டிருந்தேன்' என்றது வெட்டுக்கிளி. 'அப்படியானால் குளிர்காலத்தை ஆடியபடியே கடந்துவிடு (Dance the winter away)!' என்று கூறி கதவை அறைந்து சாத்தியது எறும்பு!`,
          englishContent: `A silly young cricket spent the glorious, warm days of summer and spring singing and dancing without a care. But when bitter winter arrived, the ground was covered with thick snow, and not a crumb of food was to be found.<br><br>Starving and trembling in the freezing cold, the cricket begged a hardworking ant for shelter and a mouthful of grain. The prudent ant replied: 'We ants never borrow, we ants never lend! What did you do all summer?' When the cricket confessed he spent the summer singing, the ant retorted: 'Go then, and dance the winter away!' and shut the door firmly.`,
          audioNarrationTa: "ஈசாப் நீதிக்கதையை அடிப்படையாகக் கொண்ட எறும்பும் வெட்டுக்கிளியும் கவிதையைக் கேட்போம்! வசந்த காலத்திலும் கோடையிலும் ஒரு சோம்பேறி வெட்டுக்கிளி ஆடிப் பாடி நேரத்தை வீணடித்தது. ஆனால் கொடும் பனிக்காலம் வந்தபோது பசியால் வாடியது. உழைத்துச் சேமித்து வைத்திருந்த சுறுசுறுப்பான எறும்பின் வீட்டிற்குச் சென்று பிச்சை கேட்டது. எறும்போ, 'நாங்கள் கடன் வாங்குவதும் இல்லை, கொடுப்பதும் இல்லை! கோடையில் பாடினாய் அல்லவா, குளிர்காலத்தில் ஆடியே காலத்தைக் கழி!' என்று கூறி கதவை மூடியது. உழைப்பின் மேன்மையையும் சேமிப்பின் அவசியத்தையும் உணர்த்தும் பாடம் இது!",
          audioNarrationEn: "Listen to Aesop's timeless fable of The Ant and the Cricket! A carefree young cricket sang joyfully throughout the warm, sunny months of spring and summer, never saving a single grain of food. But when bleak winter froze the earth, snow covered the trees, and the cricket found his cupboard completely empty! Starving in the bitter frost, he knocked on the door of a frugal ant, pleading for a mouthful of grain. The wise ant questioned him: 'Did you lay nothing by when the weather was warm?' The cricket confessed: 'My heart was so light that I sang day and night!' The ant firmly replied: 'If you sang the summer away, now go and dance the winter away!' and shut the door. The moral is clear: prepare today for the needs of tomorrow!"
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
          type: "8m",
          mark: "8 Marks",
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
          type: "8m",
          mark: "8 Marks",
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
        },
        {
          id: "eng4_3_4",
          type: "8m",
          mark: "8 Marks",
          isImportant: true,
          q: "Narrate the touching story of 'The Aged Mother' highlighting maternal devotion and the triumph of wisdom over tyranny.",
          qTamil: "'தி ஏஜ்ட் மதர்' கதையில் தாயின் தன்னலமற்ற பாசத்தையும், கொடுங்கோல் ஆளுநரின் ஆணையை முறியடித்த முதியோரின் ஞானத்தையும் விளக்குக.",
          ans: `<div style="line-height:1.6;">
            <b>Synopsis:</b>
            <ul style="margin:4px 0 10px 20px; font-weight:600; color:#0369a1;">
              <li>The Barbaric Decree of the Despot</li>
              <li>Journey to Obatsuyama (The Mountain of Abandoning Aged)</li>
              <li>The Mother's Unconditional Love (Twigs on the Trail)</li>
              <li>The Hidden Secret and the Governor's Riddles</li>
              <li>Abolition of the Law: 'With the crown of snow, there cometh wisdom!'</li>
            </ul>
            <p><b>The Cruel Decree:</b> In the province of Shinano, a cowardly despot feared the infirmities of old age and decreed that all elderly citizens should be immediately put to death. A poor farmer deeply loved his aged, widowed mother. With a heavy heart, he carried her up Mount Obatsuyama to leave her to die.</p>
            <p><b>Maternal Devotion:</b> Even facing abandonment, the mother thought only of her son's safety. As they ascended, she snapped twigs from overhanging bushes and dropped them along the path so her son would not lose his way returning home.</p>
            <p><b>The Return & Shelter:</b> Moved by her boundless love, the son declared he would not abandon her. He brought her back under cover of darkness and hid her in a secret closet under the kitchen floor.</p>
            <p><b>Solving the Impossible Riddles:</b> Later, the governor demanded an impossible feat: to present a 'rope of ashes'. Guided by his mother's wisdom, the son burned a twisted straw rope on flat stones on a windless night, producing a perfect rope of ash. When challenged again to make a silk drum that played without being beaten, the mother placed a bumblebee inside the drum.</p>
            <p><b>Abolition of Tyranny:</b> Astonished, the governor demanded to know the source of such intellect. The son bravely confessed the truth. Realizing that the kingdom needed the wisdom of the elders alongside the strength of youth, the governor abolished the barbaric law, proclaiming: <i>'With the crown of snow, there cometh wisdom!'</i></p>
          </div>`,
          ansTamil: "இக்கதை தாயின் தியாகத்தையும், முதியவர்களின் அனுபவ அறிவே சமுதாயத்தின் மெய்யான வழிகாட்டி என்பதையும் உணர்த்துகிறது."
        }
      ]
    },

    {
      id: "eng4_sec4",
      title: "Part 4: Grammar & Structural Usage — Conjunctions (Connectors) & Nominalisation",
      author: "Class 10 Samacheer Kalvi Board Grammar",
      questions: [
        // -------------------------------------------------------------
        // GRAMMAR RULES & MASTER TABLES
        // -------------------------------------------------------------
        {
          id: "eng4_4_rule1",
          type: "1m",
          mark: "Master Grammar Rule & Table",
          isImportant: true,
          q: "What are Conjunctions (Connectors / Linkers)? Explain their types and usage with examples.",
          qTamil: "இணைப்புச்சொற்கள் (Conjunctions / Connectors) என்றால் என்ன? அவற்றின் வகைகள் மற்றும் விதிகளை அட்டவணையுடன் விளக்குக:",
          ans: `<div style="line-height:1.6; font-size:13px;">
            <p><b>Conjunctions (Connectors):</b> Words used to connect words, phrases, clauses, or sentences. They establish relationships like cause, contrast, condition, purpose, and sequence.</p>
            <table style="width:100%; border-collapse:collapse; margin-top:8px; font-size:12.5px;">
              <tr style="background:#eff6ff; color:#1e40af;">
                <th style="padding:6px; border:1px solid #94a3b8; width:22%;">Type</th>
                <th style="padding:6px; border:1px solid #94a3b8; width:28%;">Connectors</th>
                <th style="padding:6px; border:1px solid #94a3b8; width:50%;">Function & Example</th>
              </tr>
              <tr>
                <td style="padding:6px; border:1px solid #cbd5e1;"><b>1. Coordinating<br>(FANBOYS)</b></td>
                <td style="padding:6px; border:1px solid #cbd5e1;"><b>F</b>or, <b>A</b>nd, <b>N</b>or, <b>B</b>ut, <b>O</b>r, <b>Y</b>et, <b>S</b>o</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">Connects words or independent clauses of equal grammatical rank.<br><i>Ex:</i> He was poor, <b>yet</b> he was contented.</td>
              </tr>
              <tr>
                <td style="padding:6px; border:1px solid #cbd5e1;"><b>2. Subordinating</b></td>
                <td style="padding:6px; border:1px solid #cbd5e1;">Because, Since, As, Though, Although, If, Unless, While, Until, As soon as, In case</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">Connects a dependent clause to an independent clause.<br><i>Ex:</i> <b>Though</b> he is ninety years old, he is active.<br><i>Ex:</i> Call me <b>in case</b> you need help.</td>
              </tr>
              <tr>
                <td style="padding:6px; border:1px solid #cbd5e1;"><b>3. Correlative<br>(Paired Connectors)</b></td>
                <td style="padding:6px; border:1px solid #cbd5e1;">Both...and<br>Not only...but also<br>Either...or<br>Neither...nor<br>No sooner...than</td>
                <td style="padding:6px; border:1px solid #cbd5e1;">Always used in pairs with parallel grammatical structures.<br><i>Ex:</i> Jaya teaches <b>not only</b> English <b>but also</b> Science.<br><i>Ex:</i> <b>No sooner</b> did I arrive <b>than</b> it rained.</td>
              </tr>
            </table>
          </div>`,
          ansTamil: "இணைப்புச்சொற்கள் இரு வாக்கியங்களை இணைக்க உதவுகின்றன. Coordinating (சமமானவை), Subordinating (சார்புடையவை), Correlative (இணைந்து வருபவை) என 3 வகைப்படும்."
        },

        {
          id: "eng4_4_rule2",
          type: "1m",
          mark: "Master Vocabulary Rule & Table",
          isImportant: true,
          q: "What is Nominalisation? Explain how Verbs and Adjectives are converted into Nouns with suffixes.",
          qTamil: "பெயர்ச்சொல்லாக்குதல் (Nominalisation) என்றால் என்ன? வினைச்சொல் மற்றும் பெயரடையைப் பெயர்ச்சொல்லாக மாற்றும் விதிகளை விளக்குக:",
          ans: `<div style="line-height:1.6; font-size:13px;">
            <p><b>Nominalisation:</b> The grammatical process of converting <b>verbs</b> or <b>adjectives</b> into <b>nouns</b> (or noun phrases). It gives formal precision and conciseness to English sentences.</p>
            <table style="width:100%; border-collapse:collapse; margin-top:8px; font-size:12.5px;">
              <tr style="background:#fef3c7; color:#92400e;">
                <th style="padding:6px; border:1px solid #f59e0b; width:25%;">Suffix</th>
                <th style="padding:6px; border:1px solid #f59e0b; width:35%;">Verb / Adjective (Root)</th>
                <th style="padding:6px; border:1px solid #f59e0b; width:40%;">Nominalised Noun Form</th>
              </tr>
              <tr>
                <td style="padding:6px; border:1px solid #fde68a;"><b>-ment</b></td>
                <td style="padding:6px; border:1px solid #fde68a;">appoint, punish, develop</td>
                <td style="padding:6px; border:1px solid #fde68a;"><b>appointment, punishment, development</b></td>
              </tr>
              <tr>
                <td style="padding:6px; border:1px solid #fde68a;"><b>-tion / -sion</b></td>
                <td style="padding:6px; border:1px solid #fde68a;">inform, conclude, decide, predict</td>
                <td style="padding:6px; border:1px solid #fde68a;"><b>information, conclusion, decision, prediction</b></td>
              </tr>
              <tr>
                <td style="padding:6px; border:1px solid #fde68a;"><b>-al / -ure</b></td>
                <td style="padding:6px; border:1px solid #fde68a;">arrive, depart, fail, refuse</td>
                <td style="padding:6px; border:1px solid #fde68a;"><b>arrival, departure, failure, refusal</b></td>
              </tr>
              <tr>
                <td style="padding:6px; border:1px solid #fde68a;"><b>-ness / -ity</b></td>
                <td style="padding:6px; border:1px solid #fde68a;">happy, kind, cruel, able</td>
                <td style="padding:6px; border:1px solid #fde68a;"><b>happiness, kindness, cruelty, ability</b></td>
              </tr>
              <tr>
                <td style="padding:6px; border:1px solid #fde68a;"><b>-th / -dom / -ence</b></td>
                <td style="padding:6px; border:1px solid #fde68a;">deep, wise, free, prefer</td>
                <td style="padding:6px; border:1px solid #fde68a;"><b>depth, wisdom, freedom, preference</b></td>
              </tr>
            </table>
          </div>`,
          ansTamil: "வினைச்சொல் (Verb) அல்லது பெயரடைக்கு (Adjective) பின்னொட்டு (Suffix) சேர்த்து பெயர்ச்சொல்லாக (Noun) மாற்றுவதே Nominalisation ஆகும்."
        },

        // -------------------------------------------------------------
        // PUBLIC EXAM CENTUM GUIDE & DIFFICULT PROBLEMS GUIDANCE
        // -------------------------------------------------------------
        {
          id: "eng4_4_centum_guide",
          type: "1m",
          mark: "Public Exam Strategy",
          isImportant: true,
          q: "How to score full marks (Centum 100/100) in English Unit 4 in the 10th Public Exam?",
          qTamil: "10-ஆம் வகுப்பு ஆங்கிலப் பொதுத்தேர்வில் அலகு 4-இல் முழு மதிப்பெண் பெறுவது எப்படி?",
          ans: `<div style="line-height:1.6; font-size:13px;">
            <p style="font-weight:800; color:#15803d; margin-bottom:6px;">🎯 Golden Blueprint to Score 100/100 in Unit 4:</p>
            <ol style="margin-left:18px; padding-left:0;">
              <li><b>1-Mark Grammar (Q1-14):</b> Master connectors (<i>though, unless, in case, nevertheless, as soon as</i>) and nominalised noun suffixes. Practice all 5 book-back exercises.</li>
              <li><b>2-Mark Sentence Combining (Q15-28):</b> Remember the comma rule! When a sentence starts with a subordinating connector like <i>Though / Although / As soon as</i>, put a comma between the clauses: <i>"Though he came late, he did not miss the bus."</i></li>
              <li><b>Never use double conjunctions:</b> Never write <i>"Though he was poor, BUT he was honest."</i> (Wrong!). Write: <i>"Though he was poor, he was honest."</i> OR <i>"He was poor, but he was honest."</i></li>
              <li><b>5-Mark Prose Paragraph ('The Attic'):</b> Structure with: Title, Author (Satyajit Ray), Synopsis (Encounter at tea shop, Search in attic, Confession to Sanyal), and Moral quote.</li>
              <li><b>5-Mark Poem Appreciation ('The Ant and the Cricket'):</b> Mention Rhyme Scheme (aabbccdd), Figures of Speech (Personification, Metaphor), and Moral.</li>
              <li><b>8-Mark Supplementary ('The Aged Mother'):</b> Write coherent story points in chronological order with side headings.</li>
            </ol>
          </div>`,
          ansTamil: "இணைப்புச்சொற்கள், பெயர்ச்சொல்லாக்கம், இரு வாக்கியங்களை இணைத்தல் மற்றும் பத்தி வினாக்களில் தலைப்பு, எழுத்தாளர் பெயர், நீதி ஆகியவற்றை முறையாக எழுதினால் முழு மதிப்பெண் பெறலாம்!"
        },

        {
          id: "eng4_4_diff_1",
          type: "2m",
          mark: "Difficult Problem Guide",
          isImportant: true,
          q: "Guidance on Difficult Exercise: How to combine sentences using 'No sooner...than' vs 'As soon as'?",
          qTamil: "'No sooner...than' மற்றும் 'As soon as' பயன்படுத்தி வாக்கியங்களை இணைப்பது எப்படி? (இலக்கண விதி & வழிமுறை):",
          ans: `<div style="line-height:1.6; font-size:13px;">
            <b>Golden Inversion Rule:</b>
            <div style="background:#f1f5f9; padding:8px 12px; border-radius:6px; margin:6px 0; font-family:monospace;">
              Formula 1: <b>As soon as</b> + Subject + Past Verb, Subject + Past Verb.<br>
              Formula 2: <b>No sooner did</b> + Subject + <b>V1 (Base Verb)</b> + <b>than</b> + Subject + Past Verb.
            </div>
            <p><b>Example Problem:</b> <i>"Sita saw a snake. At once she ran away."</i></p>
            <ul>
              <li>Using 'As soon as': <b>As soon as Sita saw a snake, she ran away.</b></li>
              <li>Using 'No sooner...than': <b>No sooner did Sita see a snake than she ran away.</b> <i>(Note: 'did + see', NOT 'did saw'; and use 'than', NEVER 'when')</i></li>
            </ul>
          </div>`,
          ansTamil: "No sooner did வரும் போது வினைச்சொல் V1 (see) ஆக மாற வேண்டும்; நடுவில் 'than' மட்டுமே வரவேண்டும்; 'when' வரக்கூடாது!"
        },

        {
          id: "eng4_4_diff_2",
          type: "2m",
          mark: "Difficult Problem Guide",
          isImportant: true,
          q: "Guidance on Difficult Exercise: How to rewrite sentences by Nominalising the Verb without changing meaning?",
          qTamil: "வினைச்சொல்லைப் பெயர்ச்சொல்லாக (Nominalisation) மாற்றி வாக்கியத்தை மாற்றியமைக்கும் முறை என்ன?",
          ans: `<div style="line-height:1.6; font-size:13px;">
            <b>3-Step Transformation Method:</b>
            <ol style="margin-left:18px; padding-left:0;">
              <li>Identify the main finite verb in the sentence.</li>
              <li>Convert that verb into its corresponding noun form (e.g. <i>decided ➔ decision, concluded ➔ conclusion, failed ➔ failure</i>).</li>
              <li>Add a possessive pronoun or linking preposition (<i>Their decision was... / Her failure was due to...</i>).</li>
            </ol>
            <p><b>Example:</b> <i>"The committee <u>decided</u> to build a new bridge."</i><br>
            ➔ <b>The committee's <u>decision</u> was to build a new bridge.</b></p>
            <p><b>Example:</b> <i>"She <u>failed</u> because she was careless."</i><br>
            ➔ <b>Her <u>failure</u> was due to carelessness.</b></p>
          </div>`,
          ansTamil: "வினைச்சொல்லின் பெயர்ச்சொல் வடிவத்தைக் கண்டறிந்து (decided -> decision), உரிமையாளர் பெயர் அல்லது வினையுடன் இணைத்து வாக்கியத்தை மாற்றியமைக்க வேண்டும்."
        },

        // -------------------------------------------------------------
        // BOOK-BACK EXERCISE A: COMPLETE WITH RIGHT CONNECTOR IN BRACKETS
        // -------------------------------------------------------------
        {
          id: "eng4_4_ex_a1",
          type: "1m",
          mark: "1 Mark (Textbook Exercise A)",
          examTag: "Book Back",
          q: "Choose the right connector given in brackets:<br>Call me ________ you need money.",
          qTamil: "சரியான இணைப்புச்சொல்லைத் தேர்வு செய்க (பணம் தேவைப்படும் பட்சத்தில் என்னை அழை):",
          options: ["a) so that", "b) in order that", "c) in case", "d) although"],
          ans: "<b>c) in case</b>",
          ansTamil: "தேவைப்படும் சூழ்நிலையைக் குறிக்க 'in case' (ஒருவேளை / தேவைப்படின்) பயன்படுகிறது."
        },
        {
          id: "eng4_4_ex_a2",
          type: "1m",
          mark: "1 Mark (Textbook Exercise A)",
          examTag: "Book Back",
          q: "Choose the right connector given in brackets:<br>I forgot ________ I had to meet the Principal.",
          qTamil: "சரியான இணைப்புச்சொல்லைத் தேர்வு செய்க (முதல்வரை சந்திக்க வேண்டும் என்பதை நான் மறந்தேன்):",
          options: ["a) whether", "b) that", "c) if", "d) unless"],
          ans: "<b>b) that</b>",
          ansTamil: "முன் நிகழ்ந்த உண்மையை நினைவுகூர 'that' (என்ற விஷயம்) பயன்படுகிறது."
        },
        {
          id: "eng4_4_ex_a3",
          type: "1m",
          mark: "1 Mark (Textbook Exercise A)",
          examTag: "Book Back",
          q: "Choose the right connector given in brackets:<br>________ he is ninety years old, he is in the pink of health.",
          qTamil: "சரியான இணைப்புச்சொல்லைத் தேர்வு செய்க (அவருக்கு 90 வயதாக இருந்தாலும், அவர் ஆரோக்கியமாக இருக்கிறார்):",
          options: ["a) When", "b) Since", "c) Though", "d) Because"],
          ans: "<b>c) Though</b>",
          ansTamil: "முரண்பட்ட நிலையை வெளிப்படுத்த 'Though' (இருந்தபோதிலும்) பயன்படுகிறது."
        },
        {
          id: "eng4_4_ex_a4",
          type: "1m",
          mark: "1 Mark (Textbook Exercise A)",
          examTag: "Book Back",
          q: "Choose the right connector given in brackets:<br>It is raining. Take an umbrella ________ you will get drenched.",
          qTamil: "சரியான இணைப்புச்சொல்லைத் தேர்வு செய்க (குடை எடுத்துச் செல் இல்லையெனில் நனைந்துவிடுவாய்):",
          options: ["a) or else", "b) and", "c) but", "d) since"],
          ans: "<b>a) or else</b>",
          ansTamil: "மாற்று விளைவு அல்லது எச்சரிக்கையைக் குறிக்க 'or else' (இல்லையெனில்) பயன்படுகிறது."
        },
        {
          id: "eng4_4_ex_a5",
          type: "1m",
          mark: "1 Mark (Textbook Exercise A)",
          examTag: "Book Back",
          q: "Choose the right connector given in brackets:<br>They faced many hardships ________ they are always cheerful.",
          qTamil: "சரியான இணைப்புச்சொல்லைத் தேர்வு செய்க (பல இன்னல்களை எதிர்கொண்ட போதிலும் அவர்கள் எப்போதும் மகிழ்ச்சியாக உள்ளனர்):",
          options: ["a) although", "b) nevertheless", "c) otherwise", "d) because"],
          ans: "<b>b) nevertheless</b>",
          ansTamil: "இருப்பினும் / ஆயினும் என்ற பொருளைத் தரும் 'nevertheless' என்ற Connector பயன்படுகிறது."
        },

        // -------------------------------------------------------------
        // BOOK-BACK EXERCISE B: CORRELATIVE CONJUNCTIONS
        // -------------------------------------------------------------
        {
          id: "eng4_4_ex_b1",
          type: "1m",
          mark: "1 Mark (Correlative Pair)",
          examTag: "Book Back",
          q: "Fill in the blank with the connector that goes with the underlined word:<br><u>Both</u> the minister ________ the officers visited the affected areas.",
          qTamil: "'Both' உடன் இணையாக வரும் சரியான Correlative Conjunction எது?",
          options: ["a) as well as", "b) and", "c) or", "d) but"],
          ans: "<b>b) and</b> (Correlative pair: Both ... and)",
          ansTamil: "'Both' என்ற சொல்லுடன் எப்போதுமே 'and' மட்டுமே இணையாக வரும்."
        },
        {
          id: "eng4_4_ex_b2",
          type: "1m",
          mark: "1 Mark (Correlative Pair)",
          examTag: "Book Back",
          q: "Fill in the blank with the connector that goes with the underlined word:<br>Jaya teaches <u>not only</u> English ________ Science.",
          qTamil: "'not only' உடன் இணையாக வரும் சரியான Correlative Conjunction எது?",
          options: ["a) but also", "b) and also", "c) along with", "d) nor"],
          ans: "<b>a) but also</b> (Correlative pair: Not only ... but also)",
          ansTamil: "'Not only' என்ற சொல்லுடன் எப்போதுமே 'but also' மட்டுமே இணையாக வரும்."
        },
        {
          id: "eng4_4_ex_b3",
          type: "1m",
          mark: "1 Mark (Correlative Pair)",
          examTag: "Book Back",
          q: "Fill in the blank with the connector that goes with the underlined word:<br><u>Either</u> Raghu ________ Bala will have to buy vegetables from the market.",
          qTamil: "'Either' உடன் இணையாக வரும் சரியான Correlative Conjunction எது?",
          options: ["a) nor", "b) or", "c) and", "d) but"],
          ans: "<b>b) or</b> (Correlative pair: Either ... or)",
          ansTamil: "'Either' என்ற சொல்லுடன் தெரிவைக் குறிக்க 'or' மட்டுமே இணையாக வரும்."
        },
        {
          id: "eng4_4_ex_b4",
          type: "1m",
          mark: "1 Mark (Correlative Pair)",
          examTag: "Book Back",
          q: "Fill in the blank with the connector that goes with the underlined word:<br><u>No sooner</u> did I enter the house ________ it started drizzling.",
          qTamil: "'No sooner' உடன் இணையாக வரும் சரியான Correlative Conjunction எது?",
          options: ["a) when", "b) then", "c) than", "d) before"],
          ans: "<b>c) than</b> (Correlative pair: No sooner ... than)",
          ansTamil: "'No sooner' வரும்போது 'than' மட்டுமே வரவேண்டும்; 'when' வரக்கூடாது!"
        },

        // -------------------------------------------------------------
        // BOOK-BACK EXERCISE C: COMBINE SENTENCES USING CONNECTORS
        // -------------------------------------------------------------
        {
          id: "eng4_4_ex_c1",
          type: "2m",
          mark: "2 Marks (Textbook Exercise C)",
          examYear: "2022",
          examTag: "Public Exam",
          q: "Combine the pair of sentences using an appropriate connector:<br><b>We came late. We did not miss the train.</b>",
          qTamil: "பொருத்தமான இணைப்புச்சொல் கொண்டு வாக்கியங்களை இணைக்க (நாங்கள் தாமதமாக வந்தோம். நாங்கள் ரயிலைத் தவறவிடவில்லை):",
          ans: "<b>Though we came late, we did not miss the train.</b><br>(Or: We came late, yet we did not miss the train.)",
          ansTamil: "Though (இருந்தபோதிலும்) அல்லது yet கொண்டு இணைக்கலாம்."
        },
        {
          id: "eng4_4_ex_c2",
          type: "2m",
          mark: "2 Marks (Textbook Exercise C)",
          examTag: "Book Back",
          q: "Combine the pair of sentences using an appropriate connector:<br><b>They checked the packet twice. Then they sealed it.</b>",
          qTamil: "பொருத்தமான இணைப்புச்சொல் கொண்டு வாக்கியங்களை இணைக்க:",
          ans: "<b>After checking the packet twice, they sealed it.</b><br>(Or: They checked the packet twice before they sealed it.)",
          ansTamil: "இருமுறை சரிபார்த்த பிறகு அவர்கள் பார்சலை மூடி முத்திரையிட்டனர்."
        },
        {
          id: "eng4_4_ex_c3",
          type: "2m",
          mark: "2 Marks (Textbook Exercise C)",
          examYear: "2024",
          examTag: "Public Exam",
          q: "Combine the pair of sentences using an appropriate connector:<br><b>Sita saw a snake. At once she ran away.</b>",
          qTamil: "பொருத்தமான இணைப்புச்சொல் கொண்டு வாக்கியங்களை இணைக்க:",
          ans: "<b>As soon as Sita saw a snake, she ran away.</b><br>(Or: No sooner did Sita see a snake than she ran away.)",
          ansTamil: "பாம்பைப் பார்த்தவுடன் சீதா அங்கிருந்து ஓடினாள்."
        },
        {
          id: "eng4_4_ex_c4",
          type: "2m",
          mark: "2 Marks (Textbook Exercise C)",
          examTag: "Book Back",
          q: "Combine the pair of sentences using an appropriate connector:<br><b>Robert completed the project. He submitted it to the teacher.</b>",
          qTamil: "பொருத்தமான இணைப்புச்சொல் கொண்டு வாக்கியங்களை இணைக்க:",
          ans: "<b>Having completed the project, Robert submitted it to the teacher.</b><br>(Or: Robert completed the project and submitted it to the teacher.)",
          ansTamil: "ப்ராஜெக்டை முடித்ததும் ராபர்ட் அதை ஆசிரியரிடம் ஒப்படைத்தான்."
        },
        {
          id: "eng4_4_ex_c5",
          type: "2m",
          mark: "2 Marks (Textbook Exercise C)",
          examTag: "Book Back",
          q: "Combine the pair of sentences using an appropriate connector:<br><b>Yusuf was running high temperature. He could not take part in the competition.</b>",
          qTamil: "பொருத்தமான இணைப்புச்சொல் கொண்டு வாக்கியங்களை இணைக்க:",
          ans: "<b>Because Yusuf was running a high temperature, he could not take part in the competition.</b><br>(Or: Yusuf was running a high temperature, so he could not take part in the competition.)",
          ansTamil: "யூசுப்புக்கு அதிக காய்ச்சல் இருந்ததால் அவனால் போட்டியில் பங்கேற்க முடியவில்லை."
        },

        // -------------------------------------------------------------
        // BOOK-BACK EXERCISE D: TICK THE CORRECT LINKER
        // -------------------------------------------------------------
        {
          id: "eng4_4_ex_d1",
          type: "1m",
          mark: "1 Mark (Textbook Exercise D)",
          examTag: "Book Back",
          q: "Tick the correct linker:<br>________ he was honest, he was punished. (Though / But)",
          qTamil: "சரியான Linker-ஐத் தேர்வு செய்க:",
          options: ["a) Though", "b) But"],
          ans: "<b>a) Though</b>",
          ansTamil: "வாக்கியத்தின் தொடக்கத்தில் முரண்பாட்டைக் குறிக்க 'Though' பொருந்தும்."
        },
        {
          id: "eng4_4_ex_d2",
          type: "1m",
          mark: "1 Mark (Textbook Exercise D)",
          examTag: "Book Back",
          q: "Tick the correct linker:<br>Walk carefully ________ you will fall down. (unless / otherwise)",
          qTamil: "சரியான Linker-ஐத் தேர்வு செய்க (கவனமாக நட, இல்லையெனில் கீழே விழுந்துவிடுவாய்):",
          options: ["a) unless", "b) otherwise"],
          ans: "<b>b) otherwise</b>",
          ansTamil: "எச்சரிக்கை மற்றும் மாற்று விளைவைக் குறிக்க 'otherwise' (இல்லாவிட்டால்) பயன்படுகிறது."
        },
        {
          id: "eng4_4_ex_d3",
          type: "1m",
          mark: "1 Mark (Textbook Exercise D)",
          examTag: "Book Back",
          q: "Tick the correct linker:<br>My mother called me ________ I was playing football. (or / while)",
          qTamil: "சரியான Linker-ஐத் தேர்வு செய்க (நான் கால்பந்து விளையாடிக் கொண்டிருந்தபோது அம்மா அழைத்தார்):",
          options: ["a) or", "b) while"],
          ans: "<b>b) while</b>",
          ansTamil: "தொடர் நிகழ்வின் போது என்ற கால உணர்வைக் குறிக்க 'while' பயன்படுகிறது."
        },
        {
          id: "eng4_4_ex_d4",
          type: "1m",
          mark: "1 Mark (Textbook Exercise D)",
          examTag: "Book Back",
          q: "Tick the correct linker:<br>My salary is low ________ I find the work interesting. (nevertheless / similarly)",
          qTamil: "சரியான Linker-ஐத் தேர்வு செய்க (என் சம்பளம் குறைவு என்றாலும் நான் வேலையை விரும்புகிறேன்):",
          options: ["a) nevertheless", "b) similarly"],
          ans: "<b>a) nevertheless</b>",
          ansTamil: "இருப்பினும் / ஆயினும் என்ற எதிர்நிலையைக் காட்ட 'nevertheless' பயன்படுகிறது."
        },
        {
          id: "eng4_4_ex_d5",
          type: "1m",
          mark: "1 Mark (Textbook Exercise D)",
          examTag: "Book Back",
          q: "Tick the correct linker:<br>The passengers rushed to board the bus ________ it arrived. (as soon as / as long as)",
          qTamil: "சரியான Linker-ஐத் தேர்வு செய்க (பேருந்து வந்த உடனே பயணிகள் ஏற முண்டியடித்தனர்):",
          options: ["a) as soon as", "b) as long as"],
          ans: "<b>a) as soon as</b>",
          ansTamil: "உடனடி நிகழ்வைக் குறிக்க 'as soon as' (வந்த உடனே) பயன்படுகிறது."
        },

        // -------------------------------------------------------------
        // NOMINALISATION TEXTBOOK EXERCISES
        // -------------------------------------------------------------
        {
          id: "eng4_4_nom_1",
          type: "1m",
          mark: "Nominalisation Exercise",
          examTag: "Book Back",
          q: "Fill in the blanks with the nominalised noun form of the words in brackets:<br>She gave ________ (prefer) to book a ticket that way. First, she collected ________ (inform) about the ________ (arrive) and ________ (depart) of trains.",
          qTamil: "அடைப்புக்குறிக்குள் உள்ள சொற்களை பெயர்ச்சொல்லாக்கம் (Nominalisation) செய்து நிரப்புக:",
          options: [
            "a) preference, information, arrival, departure",
            "b) preferential, inform, arriving, departing",
            "c) preferring, informant, arrived, departed",
            "d) preferred, information, arriving, departure"
          ],
          ans: "<b>a) preference, information, arrival, departure</b>",
          ansTamil: "prefer ➔ preference, inform ➔ information, arrive ➔ arrival, depart ➔ departure."
        },
        {
          id: "eng4_4_nom_2",
          type: "1m",
          mark: "Nominalisation Exercise",
          examTag: "Book Back",
          q: "Fill in the blank with the nominalised noun form of the word in brackets:<br>Androcles was captured by his master. He had to suffer all kinds of ________ (punish).",
          qTamil: "அடைப்புக்குறிக்குள் உள்ள சொல்லின் பெயர்ச்சொல் வடிவத்தைக் கொண்டு நிரப்புக:",
          options: ["a) punishing", "b) punishment", "c) punishable", "d) punished"],
          ans: "<b>b) punishment</b>",
          ansTamil: "punish (தண்டித்தல்) என்ற வினையின் பெயர்ச்சொல் வடிவம் 'punishment' (தண்டனை) ஆகும்."
        },
        {
          id: "eng4_4_nom_3",
          type: "1m",
          mark: "Nominalisation Exercise",
          examTag: "Book Back",
          q: "Fill in the blanks with the nominalised noun forms:<br>At last, he was thrown to a lion which was in great ________ (hungry). It had been kept in an ________ (enclose).",
          qTamil: "அடைப்புக்குறிக்குள் உள்ள சொற்களை பெயர்ச்சொல்லாக்கம் செய்து நிரப்புக:",
          options: [
            "a) hungriness, enclosing",
            "b) hunger, enclosure",
            "c) hungered, enclosed",
            "d) hungrily, closure"
          ],
          ans: "<b>b) hunger, enclosure</b>",
          ansTamil: "hungry (பசியுள்ள) ➔ hunger (பசி); enclose (சுற்றி அடைத்தல்) ➔ enclosure (அடைக்கப்பட்ட கூண்டு)."
        },
        {
          id: "eng4_4_nom_4",
          type: "2m",
          mark: "2 Marks (Sentence Rewrite)",
          examTag: "Book Back",
          q: "Rewrite the following sentence by nominalising the underlined verb:<br><b>We <u>concluded</u> that the meeting should be postponed.</b>",
          qTamil: "அடிக்கோடிட்ட வினைச்சொல்லைப் பெயர்ச்சொல்லாக (Nominalisation) மாற்றி வாக்கியத்தை மாற்றியமைக்க:",
          ans: "<b>Our <u>conclusion</u> was that the meeting should be postponed.</b><br><small style='color:#64748b;'>Rule: Verb 'concluded' is transformed into the noun 'conclusion'.</small>",
          ansTamil: "கூட்டத்தை ஒத்திவைக்க வேண்டும் என்பதே எங்கள் முடிவாக இருந்தது."
        },
        {
          id: "eng4_4_nom_5",
          type: "2m",
          mark: "2 Marks (Sentence Rewrite)",
          examTag: "Book Back",
          q: "Rewrite the following sentence by nominalising the underlined verb:<br><b>The committee <u>decided</u> to build a new library in the village.</b>",
          qTamil: "அடிக்கோடிட்ட வினைச்சொல்லைப் பெயர்ச்சொல்லாக (Nominalisation) மாற்றி வாக்கியத்தை மாற்றியமைக்க:",
          ans: "<b>The committee's <u>decision</u> was to build a new library in the village.</b><br><small style='color:#64748b;'>Rule: Verb 'decided' is transformed into the noun 'decision'.</small>",
          ansTamil: "கிராமத்தில் புதிய நூலகம் கட்ட வேண்டும் என்பதே குழுவின் முடிவாக இருந்தது."
        },
        {
          id: "eng4_4_nom_6",
          type: "2m",
          mark: "2 Marks (Sentence Rewrite)",
          examTag: "Book Back",
          q: "Rewrite the following sentence by nominalising the underlined verb:<br><b>She <u>failed</u> because she did not manage her time properly.</b>",
          qTamil: "அடிக்கோடிட்ட வினைச்சொல்லைப் பெயர்ச்சொல்லாக (Nominalisation) மாற்றி வாக்கியத்தை மாற்றியமைக்க:",
          ans: "<b>Her <u>failure</u> was due to poor time management.</b><br><small style='color:#64748b;'>Rule: Verb 'failed' is converted into noun 'failure'.</small>",
          ansTamil: "நேரத்தை முறையாக நிர்வகிக்காததே அவளது தோல்விக்குக் காரணம்."
        },

        // -------------------------------------------------------------
        // PREPOSITIONS & PHRASAL PREPOSITIONS
        // -------------------------------------------------------------
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
          id: "eng4_4_prep_1",
          type: "1m",
          mark: "1 Mark (Phrasal Preposition)",
          examTag: "Public Exam",
          q: "Fill in the blank with a suitable prepositional phrase:<br>________ his extreme poverty, Sasanka Sanyal maintained his dignity and pride.",
          qTamil: "பொருத்தமான Prepositional Phrase கொண்டு நிரப்புக (கடுமையான வறுமை இருந்தபோதிலும் சன்யால் தன் சுயமரியாதையைக் காத்துக்கொண்டார்):",
          options: ["a) In spite of", "b) On account of", "c) In addition to", "d) With reference to"],
          ans: "<b>a) In spite of</b> (shows contrast)",
          ansTamil: "இருந்தபோதிலும் என்ற பொருளில் 'In spite of' பயன்படுகிறது."
        },
        {
          id: "eng4_4_prep_2",
          type: "1m",
          mark: "1 Mark (Phrasal Preposition)",
          q: "Fill in the blank with a suitable prepositional phrase:<br>The cricket starved in winter ________ his laziness during summer.",
          qTamil: "பொருத்தமான Prepositional Phrase கொண்டு நிரப்புக (சோம்பேறித்தனத்தின் காரணமாக வெட்டுக்கிளி குளிரில் பசியால் வாடியது):",
          options: ["a) instead of", "b) because of", "c) in case of", "d) in spite of"],
          ans: "<b>b) because of</b> (shows cause / reason)",
          ansTamil: "காரணத்தைக் குறிக்க 'because of' (காரணமாக) பயன்படுகிறது."
        },
        {
          id: "eng4_4_prep_3",
          type: "1m",
          mark: "1 Mark (Phrasal Preposition)",
          examTag: "Public Exam",
          q: "Fill in the blank with a suitable prepositional phrase:<br>________ the forecast, heavy rains are expected along the coastal districts tomorrow.",
          qTamil: "வானிலை முன்னறிவிப்பின்படி கடலோர மாவட்டங்களில் கனமழை எதிர்பார்க்கப்படுகிறது:",
          options: ["a) According to", "b) In spite of", "c) In place of", "d) On behalf of"],
          ans: "<b>a) According to</b>",
          ansTamil: "அறிக்கையின்படி என்ற பொருளில் 'According to' பயன்படுகிறது."
        },

        // -------------------------------------------------------------
        // PUBLIC EXAM HIGH-FREQUENCY 2-MARK COMBINATIONS
        // -------------------------------------------------------------
        {
          id: "eng4_4_3",
          type: "2m",
          mark: "2 Marks",
          q: "Combine the following sentences using 'Though / Although':<br><i>He was poor and frail. He possessed great wisdom.</i>",
          qTamil: "'Though / Although' பயன்படுத்தி வாக்கியங்களை இணைக்க:",
          ans: "<b>Though he was poor and frail, he possessed great wisdom.</b><br>(Or: Although he was poor and frail, he possessed great wisdom.)",
          ansTamil: "எதிர்மறைப் பண்புகளை இணைக்கும்போது முன்னால் 'Though' சேர்க்கப்பட்டு கமா கொண்டு இணைக்கப்படும்."
        },
        {
          id: "eng4_4_exam_1",
          type: "2m",
          mark: "2 Marks",
          examYear: "2023",
          examTag: "Public Exam",
          q: "Combine the following sentences using 'Unless':<br><i>You work hard. You cannot score high marks in the examination.</i>",
          qTamil: "'Unless' (இல்லாவிட்டால்) பயன்படுத்தி வாக்கியங்களை இணைக்க:",
          ans: "<b>Unless you work hard, you cannot score high marks in the examination.</b><br><small style='color:#64748b;'>Rule: 'Unless' expresses a negative condition (meaning 'if not'). Do not use 'not' in the unless clause!</small>",
          ansTamil: "நீங்கள் கடினமாக உழைக்காவிட்டால், தேர்வில் அதிக மதிப்பெண்கள் பெற முடியாது."
        },
        {
          id: "eng4_4_exam_2",
          type: "2m",
          mark: "2 Marks",
          examTag: "Public Exam",
          q: "Combine the following sentences using 'Not only...but also':<br><i>Aditya confessed his childhood mistake. He also returned the silver medal.</i>",
          qTamil: "'Not only...but also' பயன்படுத்தி வாக்கியங்களை இணைக்க:",
          ans: "<b>Aditya not only confessed his childhood mistake but also returned the silver medal.</b><br><small style='color:#64748b;'>Rule: Balance parallel verbs ('confessed' and 'returned').</small>",
          ansTamil: "ஆதித்யா தன் தவறை ஒப்புக்கொண்டது மட்டுமல்லாமல், வெள்ளிப் பதக்கத்தையும் திருப்பிக் கொடுத்தார்."
        },
        {
          id: "eng4_4_exam_3",
          type: "2m",
          mark: "2 Marks",
          examTag: "Public Exam",
          q: "Combine the following sentences using 'So...that':<br><i>The attic stairs were very creaky. We could not climb quietly.</i>",
          qTamil: "'So...that' பயன்படுத்தி வாக்கியங்களை இணைக்க:",
          ans: "<b>The attic stairs were so creaky that we could not climb quietly.</b><br><small style='color:#64748b;'>Rule: Replace 'very' with 'so', add 'that' and join the result clause.</small>",
          ansTamil: "பரணின் படிக்கட்டுகள் மிகவும் நெளிந்து சத்தமிட்டதால் எங்களால் சத்தமில்லாமல் ஏற முடியவில்லை."
        }
      ]
    }
  ]
};
