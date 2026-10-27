/**
 * 10th Standard English - Unit 1 Study Guide & Question Bank
 * Tamil Nadu Samacheer Kalvi Syllabus
 * 
 * Features:
 * 1. Full Tamil Story Narrations (கதை வடிவில் எளிய தமிழ் விளக்கம்)
 *    - Prose: His First Flight (Liam O'Flaherty)
 *    - Poem: Life (Henry Van Dyke)
 *    - Supplementary: The Tempest (Tales from Shakespeare)
 * 2. Complete Bilingual Question Bank (51 Q&As with Tamil Meanings & Explanations)
 * 3. Flowchart Diagram / Mind Map
 */

const ENGLISH_UNIT_1_DATA = {
  unit: "Unit 1",
  title: "Unit 1: Prose - His First Flight | Poem - Life | Supplementary - The Tempest | Grammar",

  // 📖 கதை வடிவிலான முழுமையான தமிழ் விளக்கம் (Story Reader Data)
  stories: [
    {
      id: "story_prose",
      title: "🦅 His First Flight (முதல் பறத்தல்)",
      author: "லியாம் ஓ'பிளஹர்ட்டி (Liam O'Flaherty)",
      type: "உரைநடை (Prose)",
      image: "images/his_first_flight_mindmap.png",
      imageCaption: "படம்: இளம் கடற்பறவையின் 6-படிநிலைப் பறக்கும் பயணம் (Flowchart & Mind Map)",
      summary: "பயத்தையும் தயக்கத்தையும் தூக்கி எறிந்து, தன் சொந்தச் சிறகுகளை நம்பி வானில் கம்பீரமாகப் பறக்கத் துணிந்த ஓர் இளம் கடற்பறவையின் உத்வேகமூட்டும் கதை!",
      characters: [
        { name: "இளம் கடற்பறவை (Young Seagull)", role: "பறக்க பயந்து பாறை விளிம்பில் நின்ற கதாநாயகப் பறவை" },
        { name: "தாய் கடற்பறவை (Mother Seagull)", role: "பசியைத் தூண்டி, தந்திரமாக மகனைப் பறக்க வைத்த பாசமுள்ள தாய்" },
        { name: "தந்தை கடற்பறவை (Father Seagull)", role: "கண்டிப்புடன் கீச்சிட்டுக் கூவி பயிற்சி தந்த தந்தை" },
        { name: "உடன்பிறப்புகள் (Two Brothers & Sister)", role: "குறைந்த இறக்கைகளுடன் துணிச்சலாகப் பறந்து மீன் பிடித்த சகோதரர்கள்" }
      ],
      scenes: [
        {
          num: "காட்சி 1",
          title: "பாறை விளிம்பில் ஒரு தனிமை (Alone on the Ledge)",
          tamilContent: `அந்த இளம் கடற்பறவை, ஒரு செங்குத்தான பாறையின் குறுகிய விளிம்பில் (Ledge) தனியாக நின்று கொண்டிருந்தது. அவனுடைய இரண்டு அண்ணன்களும், ஒரே தங்கையும் முந்தைய நாளே தங்கள் சிறகுகளை விரித்துப் பறந்துவிட்டனர். ஆனால் இவனுக்கு மட்டும் அந்தப் பாறை விளிம்பிலிருந்து கீழே பாய்ந்து சிறகடிக்கக் கடுமையான பயம்!<br><br>பாறையின் விளிம்பிற்கு வேகமாக ஓடிவந்து, சிறகுகளை அசைக்க முயன்ற போதெல்லாம், கீழே கண்ணுக்கு எட்டிய தூரம் வரை பரந்து விரிந்திருந்த நீலக்கடல் அவனை அச்சுறுத்தியது. "என் பலவீனமான சிறகுகள் இந்த பிரம்மாண்டமான கடலின் மீது என்னை ஒருபோதும் தாங்காது!" என்று அவன் தீவிரமாக நம்பினான். எனவே தலையைக் குனிந்து கொண்டு, பாறையில் தான் இரவில் உறங்கும் சிறிய பொந்திற்குள் (little hole) பயந்து ஓடி ஒளிந்து கொண்டான்.`
        },
        {
          num: "காட்சி 2",
          title: "உடன்பிறப்புகளின் பறக்கும் திறனும் பெற்றோரின் கண்டிப்பும் (Parents' Threat to Starve)",
          tamilContent: `அவனுடைய தம்பி-தங்கைகளோ, இவனை விட மிகச் சிறிய இறக்கைகளைக் கொண்டிருந்த போதிலும், சற்றும் தயங்காமல் பாறை விளிம்பிற்கு ஓடிச்சென்று சிறகடித்து வானில் வட்டமிட்டுப் பறந்து மகிழ்ந்தனர்.<br><br>ஆனால், இவனால் அந்த ஒரு துணிச்சலான பாய்ச்சலை (plunge) மேற்கொள்ள தைரியத்தைத் திரட்ட (muster up courage) முடியவில்லை. அவனுடைய தாய் மற்றும் தந்தை அவனருகே பறந்து வந்து, கீச்சிடும் குரலில் (shrilly) கத்தி அவனைக் கண்டித்தனர். "நீ சிறகடித்துப் பறக்காவிட்டால், இந்தப் பாறை விளிம்பிலேயே பட்டினியால் சாக நேரிடும்!" என்று அச்சுறுத்தினர். ஆனால், உயிர்ப்பயத்தினால் அவனால் ஒரு அடிகூட நகர முடியவில்லை.`
        },
        {
          num: "காட்சி 3",
          title: "24 மணி நேரக் கடும் பசியும் தவிப்பும் (24 Hours of Agony & Hunger)",
          tamilContent: `இப்போது அவன் தனியாக விடப்பட்டு முழுதாக 24 மணி நேரம் கடந்துவிட்டது. நேற்று முதல் அவனுக்கு ஒரு சிறு உணவுத் துண்டுகூடக் கிடைக்கவில்லை. சூரியன் உச்சி வானுக்கு ஏறியது. அவனது பாறை விளிம்பில் வெயில் கொளுத்தியது; பசியின் கொடுமை அவனைக் கிறங்கடித்தது.<br><br>பாறை முழுவதும் அங்கும் இங்கும் நடந்து பார்த்தான். பாறையின் இடுக்கில் இருந்த காய்ந்த முட்டை ஓட்டுத் துண்டுகளைக்கூட (dried pieces of eggshell) பசியால் கடித்து மென்றான். அது தன் உடலின் ஒரு பகுதியையே உண்பது போலிருந்தது. எதிரே இருந்த பரந்த பீடபூமியில் (plateau) அவனது தாய், தந்தை, சகோதரர்கள் மகிழ்ச்சியாக அமர்ந்திருந்தனர். அண்ணன் கடலில் பாய்ந்து தனது முதல் மீனைப் (herring) பிடித்து விழுங்குவதையும், பெற்றோர்கள் பெருமையுடன் சத்தமிட்டுக் கொண்டாடுவதையும் இவன் பரிதாபமாகப் பார்த்துக் கொண்டிருந்தான்.`
        },
        {
          num: "காட்சி 4",
          title: "தாயின் அன்பு கலந்த தந்திர உத்தி — மீன் துண்டு (The Mother's Clever Masterstroke)",
          tamilContent: `அவன் மீது அவனுடைய தாய் மட்டுமே தன் பார்வையை வைத்திருந்தாள். அவளுக்குத் தன் குழந்தையின் பலவீனமும் தெரியும், அவனுக்குள் இருக்கும் மறைந்திருக்கும் பறக்கும் சக்தியும் தெரியும்.<br><br>திடீரென்று தாய் தன் அலகால் ஒரு மீன் துண்டைக் கிழித்துக் கீழே போட்டாள். பின்னர் அந்த மீன் துண்டை தன் அலகில் கவ்விக் கொண்டு, அவனை நோக்கிப் பறந்து வரத் தொடங்கினாள். மீனைக் கண்டதும் பசியால் வெறிபிடித்த (maddened by hunger) இளம் கடற்பறவை, தன் கால்களால் பாறையைத் தட்டி ஆவலோடு முன்னோக்கி நகர்ந்தான். தாய் மிக அருகில் வந்துவிட்டாள்... ஆனால் அவனுக்கு எட்டும் தூரத்திற்குச் சற்று முன்னதாகவே, அந்தரத்தில் தன் சிறகுகளை அசைக்காமல் அப்படியே நின்றாள் (halted)! மீன் துண்டு அவனது அலகிற்கு மிக அருகில் இருந்தது! பசி அவனது அறிவை மயக்கியது; பயத்தை மறக்கடித்தது.`
        },
        {
          num: "காட்சி 5",
          title: "துணிச்சலான பாய்ச்சல் — காற்றில் வீழ்ந்த தருணம் (The Leap into Space)",
          tamilContent: `பசியின் உச்சத்தில், மீனை அடைந்தே தீரவேண்டும் என்ற உந்துதலில், அவன் மீனை நோக்கி ஒரு பெருங்குரலுடன் முன்னோக்கிப் பாய்ந்தான் (dived at the fish)!<br><br>அடுத்த கணம்... அவன் பாறையிலிருந்து விடுபட்டு, திறந்த வெட்டவெளியில் தலைகீழாக கீழ்நோக்கி விழத் தொடங்கினான்! ஒரு கணத்தில் ஒரு கொடூரமான நடுக்கமும் பயமும் (monstrous terror) அவனை ஆட்கொண்டது. அவனது இதயமே நின்றுவிட்டது போல் இருந்தது! அவனால் எதையும் கேட்கவோ யோசிக்கவோ முடியவில்லை. ஆனால் அந்த பயங்கர உணர்வு ஒரே ஒரு நிமிடம் மட்டுமே நீடித்தது!`
        },
        {
          num: "காட்சி 6",
          title: "சிறகுகள் விரிந்தன! அற்புதப் பறத்தல் (Wings Catch the Wind & Soaring)",
          tamilContent: `அடுத்த கணமே, அவனது மார்பு இறகுகளுக்கு இடையே குளிர்ந்த காற்று சீறிப்பாய்வதை அவன் உணர்ந்தான். அவனது உடலின் அனிச்சை செயலாக, அவனது இரு சிறகுகளும் வெளிப்புறமாகத் தானாகவே விரிந்தன!<br><br>இப்போது அவன் கீழ்நோக்கி விழவில்லை! காற்று அவனது சிறகுகளுக்குக் கீழ் மிதக்க, அவன் கம்பீரமாக மேல்நோக்கிப் பறக்க (soaring upward) ஆரம்பித்தான்! அவன் மகிழ்ச்சியில் கூச்சலிட்டான். மீண்டும் மீண்டும் தன் சிறகுகளை அடித்துப் பறந்தான். அவன் பறக்கத் தொடங்கிவிட்டான்!`
        },
        {
          num: "காட்சி 7",
          title: "கடலின் மேல் மிதத்தல் & குடும்பத்தின் கொண்டாட்டம் (Landing on Sea & Dog-fish Feast)",
          tamilContent: `அவனது பெற்றோரும் சகோதரர்களும் அவனைச் சுற்றி வட்டமிட்டு, ஆனந்தக் குரலெழுப்பினர். அவர்கள் முன்னால் சென்று பச்சை நிறக் கடல் பரப்பின் மீது இறங்கினர். இவனும் கடலின் மீது தன் கால்களை வைத்தான்; அவனது கால்கள் தண்ணீருக்குள் மூழ்கின. மீண்டும் பயந்து சிறகடித்தான். ஆனால் அவனது பசியும் களைப்பும் அவனை அமைதிப்படுத்தின.<br><br>அவனது வயிறு கடல் நீரைத் தொட்டது... வியப்பு! அவன் கடலில் மூழ்கவில்லை; பாதுகாப்பாக மிதந்தான் (floated)! அவனது ஒட்டுமொத்த குடும்பமும் அவனைச் சூழ்ந்து, அவனது துணிச்சலைப் பாராட்டி, தங்களின் அலகுகளிலிருந்து நாய் மீன் துண்டுகளை (scraps of dog-fish) அவனுக்குப் பரிசாக ஊட்டினர்! இப்படியாக, அந்த இளம் கடற்பறவை தன் வாழ்வின் முதல் வரலாற்றுப் பறத்தலை வெற்றிகரமாக நிகழ்த்திக் காட்டியது!`
        }
      ],
      vocabulary: [
        { word: "Ledge", type: "Noun", tamil: "குறுகிய பாறை விளிம்பு", meaning: "A narrow horizontal shelf projecting from a wall or cliff." },
        { word: "Shrilly", type: "Adverb", tamil: "கீச்சிடும் கூரிய குரல்", meaning: "Producing a high-pitched and piercing sound." },
        { word: "Plunge", type: "Verb / Noun", tamil: "துணிந்து குதித்தல் / பாய்ச்சல்", meaning: "Jump or dive quickly and energetically." },
        { word: "Muster up", type: "Phrasal Verb", tamil: "தைரியத்தைத் திரட்டுதல்", meaning: "Gather together (courage or confidence)." },
        { word: "Gnaw", type: "Verb", tamil: "மெல்லுதல் / கடித்தல்", meaning: "Bite or nibble something persistently." },
        { word: "Maddened by hunger", type: "Phrase", tamil: "பசியால் வெறிபிடித்தல்", meaning: "Driven to extreme madness due to severe starvation." },
        { word: "Soaring", type: "Verb / Adj", tamil: "வானில் கம்பீரமாக உயரே பறத்தல்", meaning: "Flying or rising high in the air effortlessly." },
        { word: "Curvetting", type: "Verb", tamil: "வளைந்து நெளிந்து குதித்தல்", meaning: "Leaping or executing graceful horse-like curved movements." },
        { word: "Floating", type: "Verb", tamil: "நீரின் மேல் மிதத்தல்", meaning: "Resting or moving on the surface of a liquid without sinking." }
      ],
      moral: `💡 <b>பாடத்தின் வாழ்வியல் நீதி (Moral of the Story):</b><br>
      எந்த ஒரு புதிய செயலையும் தொடங்குவதற்கு ஆரம்பத்தில் பயமும் தயக்கமும் இருப்பது இயற்கை. ஆனால் நமது உள் ஆற்றலை உணர்ந்து துணிச்சலோடு முதல் அடியை எடுத்து வைத்தால் வெற்றி நிச்சயம் நம் வசப்படும்! பெற்றோரின் கண்டிப்பிற்குப் பின்னால் நமது எதிர்கால வெற்றிக்கான வழிகாட்டுதலே நிறைந்திருக்கிறது.`
    },

    {
      id: "story_poem",
      title: "🌿 Life (வாழ்க்கை — கவிதை விளக்கம்)",
      author: "ஹென்றி வான் டைக் (Henry Van Dyke)",
      type: "செய்யுள் (Poem - Sonnet)",
      summary: "கடந்த காலத் துயரங்களை மறப்போம்; எதிர்கால பயங்களைத் துறப்போம்; நிகழ்காலத்தை முழு உற்சாகத்தோடு வாழ்வோம் என்ற மகத்தான தத்துவக் கவிதை!",
      characters: [
        { name: "கவிஞர் (Henry Van Dyke)", role: "வாழ்க்கைப் பயணத்தை ஒரு சாகசப் பயணமாகப் பார்க்கும் தன்னம்பிக்கையாளர்" }
      ],
      scenes: [
        {
          num: "பகுதி 1: அட்டகம் (Octave - முதல் 8 வரிகள்)",
          title: "துணிச்சலான முகத்துடன் நிகழ்காலத்தை வாழ்வது",
          tamilContent: `<b>ஆங்கில வரிகள்:</b><br>
          <i>"Let me but live my life from year to year,<br>
          With forward face and unreluctant soul;<br>
          Not hurrying to, nor turning from the goal;<br>
          Not mourning for the things that disappear<br>
          In the dim past, nor holding back in fear<br>
          From what the future veils; but with a whole<br>
          And happy heart, that pays its toll<br>
          To Youth and Age, and travels on with cheer."</i><br><br>
          <b>எளிய தமிழ் விளக்கம்:</b><br>
          கவிஞர் தன் வாழ்க்கையை ஆண்டுதோறும் எந்தவித தயக்கமுமின்றி, முழு உற்சாகத்தோடும் தைரியமான முகத்தோடும் வாழ விரும்புகிறார். இலக்கை நோக்கி பதற்றத்தோடு அவசரப்படாமலும், அதே நேரத்தில் இலக்கிலிருந்து பின்வாங்காமலும் பயணிக்க வேண்டும் என்கிறார்.<br>
          மறைந்துபோன கடந்த காலத் துயரங்களுக்காகவும் இழப்புகளுக்காகவும் அழுது புலம்பக் கூடாது. அதேபோல், எதிர்காலம் எதனை மறைத்து வைத்திருக்கிறதோ அதைக் கண்டு அஞ்சி பின்வாங்கக் கூடாது. இளமையிலும் சரி, முதுமையிலும் சரி, முழுமையான மகிழ்ச்சியான இதயத்தோடு வாழ்க்கைப் பயணத்தை ஆனந்தமாகத் தொடர வேண்டும் என்கிறார்.`
        },
        {
          num: "பகுதி 2: ஆறடி (Sestet - கடைசி 6 வரிகள்)",
          title: "மேடு பள்ளங்களைக் கடந்த உற்சாகமான பயணம்",
          tamilContent: `<b>ஆங்கில வரிகள்:</b><br>
          <i>"So let the way wind up the hill or down,<br>
          O'er rough or smooth, the journey will be joy:<br>
          Still seeking what I sought when but a boy,<br>
          New friendship, high adventure, and a crown,<br>
          My heart will keep the courage of the quest,<br>
          And hope the road's last turn will be the best."</i><br><br>
          <b>எளிய தமிழ் விளக்கம்:</b><br>
          வாழ்க்கைப் பாதை மலை மேல் ஏறினாலும் (கடினமான சூழல்) அல்லது கீழ் நோக்கிச் சென்றாலும் (எளிய சூழல்), கரடுமுரடாக இருந்தாலும் அல்லது மென்மையாக இருந்தாலும், இந்தப் பயணம் முழுவதும் ஆனந்தமாகவே இருக்கும்!<br>
          சிறுவனாக இருந்தபோது எதைத் தேடினேனோ — அதாவது புதிய நட்பு, உயரிய சாகசம், வெற்றியின் மகுடம் — அவற்றை இப்போதும் தொடர்ந்து என் இதயம் தேடிக்கொண்டே இருக்கும். என் மனதின் தேடுதல் தைரியம் எப்போதும் குறையாது. வாழ்க்கைப் பாதையின் கடைசி வளைவு மிகச் சிறந்ததாகவே முடியும் என்று முழுமையாக நம்புகிறேன்.`
        }
      ],
      vocabulary: [
        { word: "Unreluctant soul", type: "Phrase", tamil: "தயக்கமில்லாத உள்ளம்", meaning: "A willing, eager, and enthusiastic mind." },
        { word: "Mourning", type: "Verb", tamil: "துக்கம் கொண்டாடுதல் / புலம்புதல்", meaning: "Feeling or showing deep sorrow for a loss." },
        { word: "Veils", type: "Verb", tamil: "மறைத்து வைத்திருத்தல்", meaning: "Hides or covers from sight." },
        { word: "Toll", type: "Noun", tamil: "வரியாக / கடமையாகச் செலுத்துதல்", meaning: "A payment or due paid to life's stages." },
        { word: "Quest", type: "Noun", tamil: "உயரிய தேடுதல்", meaning: "A long or arduous search for something noble." },
        { word: "Crown", type: "Noun (Metaphor)", tamil: "வெற்றியின் மகுடம் / சாதனை", meaning: "Fame, honor, victory, and highest achievement." }
      ],
      moral: `💡 <b>கவிதை தரும் வாழ்வியல் நீதி (Life Lesson):</b><br>
      வாழ்க்கை என்பது கடந்து போகும் நாள் அல்ல; அனுபவிக்க வேண்டிய ஒரு சாகசப் பயணம். கடந்த கால இழப்புகளையும் எதிர்காலப் பயங்களையும் விடுத்து, நிகழ்காலத்தை முழு நம்பிக்கையுடனும் உற்சாகத்துடனும் வாழ்வதே உண்மையான ஆனந்தம்!`
    },

    {
      id: "story_supplementary",
      title: "⚡ The Tempest (புயல் — நாடகக் கதை)",
      author: "வில்லியம் ஷேக்ஸ்பியர் (சாரல்ஸ் & மேரி லாம்ப் எளிய கதை வடிவம்)",
      type: "துணைப்பாடம் (Supplementary)",
      summary: "சூழ்ச்சியால் அரியணையை இழந்த ஒரு மன்னன், மாயாஜால சக்தியால் எதிரிகளைத் தன் ஆதிக்கத்திற்குள் கொண்டுவந்து, இறுதியில் பழிவாங்காமல் மன்னித்து உயர்த்திய உன்னதக் கதை!",
      characters: [
        { name: "பிராஸ்பரோ (Prospero)", role: "மிலன் நகரின் உண்மையான டியூக்; மாயாஜால வித்தை தெரிந்த மாவீரன்" },
        { name: "மிராண்டா (Miranda)", role: "பிராஸ்பரோவின் அன்பான, கள்ளங்கபடமற்ற மகள்" },
        { name: "ஏரியல் (Ariel)", role: "காற்றின் நற்குண ஆவி; பிராஸ்பரோவின் கட்டளைக்கு அடிபணியும் விசுவாசி" },
        { name: "காலிபன் (Caliban)", role: "சைகோராக்ஸ் என்ற சூனியக்காரியின் மகன்; கொடிய அரக்கன்" },
        { name: "அன்டோனியோ (Antonio)", role: "பிராஸ்பரோவின் துரோகத் தம்பி; மிலன் நாட்டைப் பறித்தவன்" },
        { name: "அலான்சோ (Alonso)", role: "நேபிள்ஸ் நாட்டு மன்னர்; அன்டோனியோவுக்கு உதவிய எதிரி" },
        { name: "பெர்டினாண்ட் (Ferdinand)", role: "அலான்சோவின் மகன்; மிராண்டாவைக் காதலிக்கும் இளவரசன்" },
        { name: "கொன்சாலோ (Gonzalo)", role: "பிராஸ்பரோவுக்கு உணவு, உடைகள், மாயப்புத்தகங்களை ரகசியமாகத் தந்த நல்ல அமைச்சர்" }
      ],
      scenes: [
        {
          num: "காட்சி 1",
          title: "துரோகமும் நாடுகடத்தலும் (Treacherous Exile)",
          tamilContent: `பிராஸ்பரோ மிலன் நகரின் உண்மையான டியூக் (அரசர்). அவர் எப்போதும் நூல்களைப் படிப்பதிலும் கல்வியிலும் மூழ்கியிருந்தார். இதனைப் பயன்படுத்திய அவரது தம்பி அன்டோனியோ, நேபிள்ஸ் மன்னன் அலான்சோவின் துணையோடு ஆட்சியைக் கைப்பற்றினான். பிராஸ்பரோவையும் அவரது மூன்று வயது கைக்குழந்தை மிராண்டாவையும் ஒரு பழுதடைந்த படகில் ஏற்றி நடுக்கடலில் தவிக்கவிட்டனர். ஆனால் கொன்சாலோ என்ற நல்ல அமைச்சர், ரகசியமாக படகில் உணவு, தண்ணீர், ஆடைகள் மற்றும் பிராஸ்பரோவின் அருமையான மாயாஜால நூல்களை வைத்து உதவினார். படகு மிதந்து ஒரு தனித்தீவை அடைந்தது.`
        },
        {
          num: "காட்சி 2",
          title: "மாயாஜாலத் தீவும் ஏரியல் விடுதலையும் (Enchanted Island & Ariel)",
          tamilContent: `அந்தத் தீவில் சைகோராக்ஸ் என்ற சூனியக்காரி பல நல்ல ஆவிகளை மரப் பொந்துகளில் அடைத்து வைத்திருந்தாள். பிராஸ்பரோ தன் மாயாஜால சக்தியால் அந்த ஆவிகளை விடுவித்தார். அதில் முதன்மையான ஏரியல் என்ற நற்குண ஆவி, பிராஸ்பரோவின் விசுவாசமுள்ள உதவியாளராக மாறியது. சைகோராக்ஸின் விகாரமான மகன் காலிபனை பிராஸ்பரோ தன் பணிவிடை ஆளாக வைத்திருந்தார்.`
        },
        {
          num: "காட்சி 3",
          title: "கடலில் கிளம்பிய மாயப் புயல் (The Magical Tempest)",
          tamilContent: `பன்னிரண்டு ஆண்டுகள் கழிந்தன. ஒருநாள், துரோகம் செய்த அன்டோனியோ, மன்னன் அலான்சோ மற்றும் இளவரசன் பெர்டினாண்ட் ஆகியோர் பயணம் செய்த கப்பல் அந்தத் தீவின் வழியே சென்றது. பிராஸ்பரோ ஏரியலிடம் கட்டளையிட்டு, கடலில் ஒரு பயங்கரமான புயலை உருவாக்கச் செய்தார். கப்பல் சுக்குநூறாக உடைந்தது போல் தோன்றினாலும், கப்பலில் இருந்த ஒரு உயிருக்கும் சிறு சேதமும் ஏற்படாமல் அனைவரையும் தீவின் வெவ்வேறு பகுதிகளில் பாதுகாப்பாகக் கரைசேர்த்தது ஏரியல்.`
        },
        {
          num: "காட்சி 4",
          title: "பெர்டினாண்ட் - மிராண்டா காதல் & சுமை தூக்கும் சோதனை (Ferdinand's Test of Love)",
          tamilContent: `கப்பல் உடைந்ததில் தன் தந்தை இறந்துவிட்டதாக நினைத்துக் கலங்கிய இளவரசன் பெர்டினாண்டை, ஏரியல் தன் இனிய இசையால் வழிநடத்தி பிராஸ்பரோவின் குகைக்கு அழைத்து வந்தது. மிராண்டாவும் பெர்டினாண்டும் ஒருவரை ஒருவர் கண்டவுடன் காதலில் விழுந்தனர். ஆனால் பெர்டினாண்டின் காதல் உண்மையானதா என்று சோதிக்க விரும்பிய பிராஸ்பரோ, அவனைக் கடுமையாக வேலை வாங்கினார். கனமான மரக்கட்டைகளைத் தூக்கி அடுக்கச் செய்தார். பெர்டினாண்ட் மிராண்டா மீதான தூய அன்பினால் அந்தச் சுமையை இன்முகத்தோடு ஏற்றுச் செய்தான்.`
        },
        {
          num: "காட்சி 5",
          title: "எதிரிகளின் மனமாற்றமும் மன்னிப்பும் (Repentance & Supreme Forgiveness)",
          tamilContent: `மறுபுறம், ஏரியல் தன் மாய சக்தியால் அலான்சோ மற்றும் அன்டோனியோவின் மனசாட்சியை உலுக்கியது. தாங்கள் பிராஸ்பரோவுக்குச் செய்த கொடிய துரோகத்தை நினைத்து அவர்கள் கண்ணீர் வடித்து மனம் வருந்தினர். அவர்களைத் தன்முன் வரவழைத்த பிராஸ்பரோ, பழிவாங்காமல் அவர்களை முழு மனதுடன் மன்னித்தார்! தன் மகனை இழந்ததாக நினைத்துக் கதறிய அலான்சோவிடம், பெர்டினாண்ட் உயிருடன் இருப்பதைச் சுட்டிக்காட்டி மிராண்டாவை அவனுக்கு மணம் முடிக்க இசைவு தந்தார். அலான்சோ பிராஸ்பரோவின் மிலன் அரசை அவரிடமே திருப்பி ஒப்படைத்தார்.`
        },
        {
          num: "காட்சி 6",
          title: "மாயக்கோலை ஆழப் புதைத்து தாயகம் திரும்புதல் (Burying Magic & Freedom)",
          tamilContent: `தன் வாழ்நாள் விருப்பம் நிறைவேறியதும், பிராஸ்பரோ விசுவாசமுள்ள ஏரியலுக்கு முழு விடுதலை அளித்தார். தன் மாயாஜாலக் கோலை மண்ணில் ஆழப் புதைத்தார்; மாய நூல்களைக் கடலில் மூழ்கடித்தார். பழிவாங்குவதை விட மன்னிப்பதே மனிதனின் உயர்ந்த குணம் என்பதை உலகிற்கு உணர்த்தி, தன் மக்களுடன் மிலன் நகருக்கு மகிழ்ச்சியாகத் திரும்பினார்.`
        }
      ],
      vocabulary: [
        { word: "Tempest", type: "Noun", tamil: "கடும்புயல் / சூறாவளி", meaning: "A violent windy storm with rain or hail." },
        { word: "Usurp", type: "Verb", tamil: "அநியாயமாகப் பறித்தல்", meaning: "Take a position of power or importance illegally or by force." },
        { word: "Ariel", type: "Proper Noun", tamil: "காற்றின் நற்குண ஆவி", meaning: "A gentle and obedient spirit of the air." },
        { word: "Caliban", type: "Proper Noun", tamil: "விகாரமான அரக்கன்", meaning: "An ugly, deformed slave, son of witch Sycorax." },
        { word: "Repentance", type: "Noun", tamil: "மனம்மாறி வருந்துதல்", meaning: "Sincere regret or remorse for past wrongdoing." },
        { word: "Vengeance", type: "Noun", tamil: "பழிவாங்குதல்", meaning: "Punishment inflicted or retribution exacted for an injury or wrong." }
      ],
      moral: `💡 <b>நாடகம் தரும் வாழ்வியல் நீதி (Moral of the Story):</b><br>
      <i>"The rarer action is in virtue than in vengeance."</i><br>
      நம்மை வஞ்சித்த எதிரிகள் மனம் வருந்தும்போது, அவர்களைப் பழிவாங்குவதை விட மன்னிப்பதே மனித குலத்தின் மிக உயர்ந்த அறமும் பெருந்தன்மையும் ஆகும்!`
    }
  ],

  // 📝 வினா - விடைகள் வங்கி (Q&A Bank - 51 Questions)
  subSections: [
    {
      id: "eng1_sec1",
      title: "Part 1: Prose — His First Flight",
      author: "Liam O'Flaherty (Irish Novelist & Short-story Writer)",
      questions: [
        // 1-Mark: Synonyms (with Tamil Meanings)
        { 
          id: "eng1_1_1", 
          type: "1m", 
          mark: "1 Mark (Synonym)", 
          examYear: "2024",
          examTag: "2024*",
          isImportant: true,
          q: "Choose the correct synonym for the italicized word:<br>The young seagull was alone on his <i>ledge</i>.", 
          qTamil: "இளம் கடற்பறவை தன் பாறை விளிம்பில் (ledge) தனியாக நின்றது.",
          options: ["a) cave", "b) narrow shelf of rock", "c) deep valley", "d) mountain top"],
          ans: "<b>b) narrow shelf of rock</b>",
          ansTamil: "Ledge என்றால் செங்குத்துப் பாறையிலிருந்து நீட்டிக்கொண்டிருக்கும் குறுகிய பாறை விளிம்பு."
        },
        { 
          id: "eng1_1_2", 
          type: "1m", 
          mark: "1 Mark (Synonym)", 
          q: "Choose the correct synonym for the italicized word:<br>His parents called to him <i>shrilly</i>.", 
          qTamil: "அவனது பெற்றோர் அவனருகே கீச்சிடும் குரலில் (shrilly) கூவி அழைத்தனர்.",
          options: ["a) softly", "b) piercingly / sharply", "c) sweetly", "d) slowly"],
          ans: "<b>b) piercingly / sharply</b>",
          ansTamil: "Shrilly என்றால் காதைத்துளைக்கும் கூர்மையான கீச்சொலி."
        },
        { 
          id: "eng1_1_3", 
          type: "1m", 
          mark: "1 Mark (Synonym)", 
          examYear: "2023",
          examTag: "2023*",
          isImportant: true, 
          q: "Choose the correct synonym for the italicized word:<br>He failed to <i>muster up</i> courage to take that plunge.", 
          qTamil: "கீழே குதிக்கும் பாய்ச்சலை மேற்கொள்ள அவனால் தைரியத்தைத் திரட்ட (muster up) முடியவில்லை.",
          options: ["a) gather", "b) lose", "c) reject", "d) divide"],
          ans: "<b>a) gather</b>",
          ansTamil: "Muster up என்றால் தைரியத்தையோ பலத்தையோ ஒன்றிணைத்துத் திரட்டுதல்."
        },
        { 
          id: "eng1_1_4", 
          type: "1m", 
          mark: "1 Mark (Synonym)", 
          q: "Choose the correct synonym for the italicized word:<br>He leaned out eagerly, <i>tapping</i> the rock with his feet.", 
          qTamil: "அவன் தன் கால்களால் பாறையைத் தட்டிக்கொண்டு (tapping) ஆவலோடு எட்டிப் பார்த்தான்.",
          options: ["a) breaking", "b) striking gently", "c) slipping", "d) heating"],
          ans: "<b>b) striking gently</b>",
          ansTamil: "Tapping என்றால் மெதுவாக கால்களால் தட்டுதல்."
        },
        { 
          id: "eng1_1_5", 
          type: "1m", 
          mark: "1 Mark (Synonym)", 
          q: "Choose the correct synonym for the italicized word:<br>He was <i>maddened</i> by hunger.", 
          qTamil: "அவன் கடும் பசியினால் வெறிபிடித்த நிலைக்கு (maddened) ஆளானான்.",
          options: ["a) excited", "b) driven wild / crazed", "c) comforted", "d) satisfied"],
          ans: "<b>b) driven wild / crazed</b>",
          ansTamil: "Maddened by hunger என்றால் தாங்க முடியாத பசியால் வெறிபிடித்தல்."
        },
        { 
          id: "eng1_1_6", 
          type: "1m", 
          mark: "1 Mark (Synonym)", 
          q: "Choose the correct synonym for the italicized word:<br>He saw his two brothers and his sister <i>dozing</i>.", 
          qTamil: "அவனது சகோதரர்களும் தங்கையும் குட்டித்தூக்கம் (dozing) போடுவதைப் பார்த்தான்.",
          options: ["a) fighting", "b) sleeping lightly", "c) eating", "d) flying"],
          ans: "<b>b) sleeping lightly</b>",
          ansTamil: "Dozing என்றால் லேசான அரைத்தூக்கம் / குட்டித்தூக்கம்."
        },

        // 1-Mark: Antonyms
        { 
          id: "eng1_1_7", 
          type: "1m", 
          mark: "1 Mark (Antonym)", 
          q: "Choose the correct antonym for the italicized word:<br>He felt certain that his wings would <i>never</i> support him.", 
          qTamil: "தன் சிறகுகள் தன்னை ஒருபோதும் (never) தாங்காது என்று அவன் நம்பினான் — எதிர்ச்சொல் தருக:",
          options: ["a) seldom", "b) always", "c) rarely", "d) hardly"],
          ans: "<b>b) always</b>",
          ansTamil: "Never (ஒருபோதும் இல்லை) ↔ Always (எப்போதும்)."
        },
        { 
          id: "eng1_1_8", 
          type: "1m", 
          mark: "1 Mark (Antonym)", 
          q: "Choose the correct antonym for the italicized word:<br>The mother took a piece of fish and flew <i>upward</i>.", 
          qTamil: "தாய் மீன் துண்டோடு மேல்நோக்கிப் (upward) பறந்தது — எதிர்ச்சொல் தருக:",
          options: ["a) onward", "b) downward", "c) forward", "d) outward"],
          ans: "<b>b) downward</b>",
          ansTamil: "Upward (மேல்நோக்கி) ↔ Downward (கீழ்நோக்கி)."
        },
        { 
          id: "eng1_1_9", 
          type: "1m", 
          mark: "1 Mark (Antonym)", 
          q: "Choose the correct antonym for the italicized word:<br>He was <i>exhausted</i> by the strange exercise.", 
          qTamil: "இந்தப் புதுமையான பறக்கும் பயிற்சியால் அவன் மிகவும் களைப்படைந்தான் (exhausted) — எதிர்ச்சொல் தருக:",
          options: ["a) tired", "b) energetic / refreshed", "c) weakened", "d) scared"],
          ans: "<b>b) energetic / refreshed</b>",
          ansTamil: "Exhausted (மிகக் களைப்படைந்த) ↔ Energetic / Refreshed (புத்துணர்ச்சியான)."
        },
        { 
          id: "eng1_1_10", 
          type: "1m", 
          mark: "1 Mark (Antonym)", 
          q: "Choose the correct antonym for the italicized word:<br>His parents scolded and threatened to let him <i>starve</i>.", 
          qTamil: "பறக்காவிட்டால் பட்டினி போடுவதாகப் (starve) பெற்றோர் மிரட்டினர் — எதிர்ச்சொல் தருக:",
          options: ["a) hunger", "b) feast / feed", "c) punish", "d) sleep"],
          ans: "<b>b) feast / feed</b>",
          ansTamil: "Starve (பட்டினி கிடத்தல்) ↔ Feast / Feed (நிறைய உண்ணுதல் / விருந்து)."
        },

        // 2-Mark: Short Answer Questions
        {
          id: "eng1_1_11",
          type: "2m",
          mark: "2 Marks",
          examYear: "2022",
          examTag: "2022*",
          isImportant: true,
          q: "Why did the young seagull fail to fly with his brothers and sister?",
          qTamil: "இளம் கடற்பறவை தன் சகோதரர்களுடன் பறக்கத் தவறியது ஏன்?",
          ans: "The young seagull was afraid to fly. When he ran to the brink of the ledge and attempted to flap his wings, he became frightened by the vast expanse of the sea below. He felt certain his wings would never support him.",
          ansTamil: "இளம் கடற்பறவைக்குக் கடலைக் கண்டு பயம். தன் பலவீனமான சிறகுகள் தன்னைத் தாங்காது என்று தவறாக எண்ணியதால் அதனால் பறக்க முடியவில்லை."
        },
        {
          id: "eng1_1_12",
          type: "2m",
          mark: "2 Marks",
          q: "What did the parents do to motivate the young seagull to fly?",
          qTamil: "இளம் பறவையை உற்சாகப்படுத்திப் பறக்க வைக்கப் பெற்றோர்கள் என்ன செய்தனர்?",
          ans: "His parents flew around him calling shrilly. They upbraided (scolded) him and threatened to let him starve on the ledge unless he flew away.",
          ansTamil: "அவனது பெற்றோர் அவனருகே வட்டமிட்டுக் கூர்மையாகக் கத்தினர்; சிறகடித்துப் பறக்காவிட்டால் பாறையிலேயே பட்டினி கிடந்து சாக நேரிடும் என்று கண்டிப்புடன் மிரட்டினர்."
        },
        {
          id: "eng1_1_13",
          type: "2m",
          mark: "2 Marks",
          q: "What was the first catch of the young bird's older brother?",
          qTamil: "இளம் பறவையின் மூத்த அண்ணன் பிடித்த முதல் வேட்டை எது?",
          ans: "The older brother caught his first <b>herring</b> (a kind of fish) and devoured it standing on a rock, while his proud parents circled around raising a proud cackle.",
          ansTamil: "மூத்த அண்ணன் ஹெர்ரிங் (herring) என்ற மீனைப் பிடித்துப் பாறை மீது நின்று விழுங்கியது; பெற்றோர்கள் மகிழ்ச்சியோடு பெருங்குரலெழுப்பிப் பாராட்டினர்."
        },
        {
          id: "eng1_1_14",
          type: "2m",
          mark: "2 Marks",
          examYear: "2024",
          examTag: "2024*",
          isImportant: true,
          q: "What made the young seagull dive for the fish?",
          qTamil: "இளம் கடற்பறவையை மீனை நோக்கிப் பாய வைத்தது எது?",
          ans: "The young seagull had been starving for twenty-four hours. Maddened by hunger, when he saw his mother flying towards him with a piece of fish and halting just out of reach, he forgot his fear and dived for the food.",
          ansTamil: "24 மணி நேரக் கடும் பசி அவனை வெறிபிடிக்க வைத்தது. தாய் மீன் துண்டோடு வந்து எட்டாத தூரத்தில் அந்தரத்தில் நின்றபோது, பசியின் உந்துதலால் பயத்தை மறந்து மீனை நோக்கிப் பாய்ந்தான்."
        },
        {
          id: "eng1_1_15",
          type: "2m",
          mark: "2 Marks",
          q: "What happened when the young seagull plunged into the air?",
          qTamil: "இளம் கடற்பறவை அந்தரத்தில் பாய்ந்த போது என்ன நடந்தது?",
          ans: "At first, a monstrous terror seized him and his heart stood still. But within a moment, his wings spread outward, the wind rushed against his breast feathers, and he realized he was soaring smoothly instead of falling.",
          ansTamil: "முதலில் பயங்கர நடுக்கம் ஆட்கொண்டது. ஆனால் அடுத்த கணமே சிறகுகள் விரிந்து, காற்று இறக்கைகளைத் தழுவ, அவன் கீழ்நோக்கி விழாமல் கம்பீரமாக மேல்நோக்கிப் பறக்கத் தொடங்கினான்."
        },
        {
          id: "eng1_1_16",
          type: "2m",
          mark: "2 Marks",
          q: "How did the family celebrate the young bird's successful flight?",
          qTamil: "இளம் பறவையின் வெற்றிகரமான முதல் பறத்தலைக் குடும்பத்தினர் எவ்வாறு கொண்டாடினர்?",
          ans: "His parents, brothers, and sister flew around him screaming with joy. When he safely landed on the green sea and floated, they praised him and offered scraps of dog-fish from their beaks.",
          ansTamil: "குடும்பத்தினர் அனைவரும் அவனைச் சுற்றி வட்டமிட்டுப் புகழ்ந்து கத்தினர்; அவன் கடலில் பாதுகாப்பாக மிதந்தபோது, நாய் மீன் துண்டுகளைத் தங்கள் அலகுகளால் ஊட்டிப் பாராட்டினர்."
        },

        // Diagram Question (Mind Map)
        {
          id: "eng1_1_17",
          type: "2m",
          mark: "Flowchart / Mind Map",
          q: "Draw or describe the 6 stages of the Young Seagull's Journey to his First Flight.",
          qTamil: "இளம் கடற்பறவையின் 6-படிநிலைப் பயணத்தை வரைபடம் வழி விளக்குக.",
          ans: `<b>Summary of the 6-Step Journey:</b><br>
          1. <b>Fear & Hesitation:</b> Alone on the cliff ledge; doubted his wings.<br>
          2. <b>Starvation & Isolation:</b> 24 hours without food; parents threatened starvation.<br>
          3. <b>Mother's Clever Strategy:</b> Flew with a piece of fish and halted just out of reach.<br>
          4. <b>The Leap of Faith:</b> Maddened by hunger, dived into open air.<br>
          5. <b>Wings Catch the Wind:</b> Natural flight instinct triggered; soared upward.<br>
          6. <b>Victory & Celebration:</b> Floated on sea; family rewarded him with dog-fish.`,
          ansTamil: "வரைபடத்தில் உள்ள 6 நிலைகளும்: பயம் ➔ பட்டினி ➔ தாயின் தூண்டில் ➔ பாய்ச்சல் ➔ சிறகடித்தல் ➔ கடலில் மிதந்து வெற்றி பெறுதல்.",
          diagramImg: "images/his_first_flight_mindmap.png",
          diagramCaption: "Flowchart: The Young Seagull's Journey to his First Flight (Fear ➔ Starvation ➔ Mother's Bait ➔ The Dive ➔ Wings Spread ➔ Floating on Sea)"
        },

        // 5-Mark: Paragraph Question
        {
          id: "eng1_1_18",
          type: "5m",
          mark: "5 Marks",
          examYear: "2023",
          examTag: "2023*",
          isImportant: true,
          q: "Describe the struggles undergone by the young seagull to overcome his fear of flying.",
          qTamil: "பறக்கும் பயத்தை வெல்ல இளம் கடற்பறவை மேற்கொண்ட போராட்டங்களை விரிவாக விளக்குக.",
          ans: `<div style="line-height:1.6;">
            <b>Synopsis:</b>
            <ul style="margin:4px 0 10px 20px; font-weight:600; color:#0369a1;">
              <li>Introduction</li>
              <li>Fear of the Vast Sea</li>
              <li>Parental Tough Love</li>
              <li>Mother's Clever Trap</li>
              <li>The First Flight & Triumph</li>
              <li>Moral / Conclusion</li>
            </ul>
            <p><b>Introduction:</b> 'His First Flight' by Liam O'Flaherty is an inspiring story of a young seagull who overcomes his deep-rooted fear and learns to fly through the encouragement of his family.</p>
            <p><b>Fear of the Vast Sea:</b> The young seagull was alone on his ledge. His two brothers and sister had already flown away. But whenever he ran to the edge and looked down at the vast sea, fear gripped him. He was convinced his wings would never support him.</p>
            <p><b>Parental Tough Love:</b> His parents scolded him shrilly and threatened to let him starve unless he flew. He spent 24 agonizing hours alone, searching for food and gnawing even dried pieces of eggshell.</p>
            <p><b>Mother's Clever Trap:</b> The mother understood that desperation drives action. She picked up a piece of fish and flew across towards him, but halted just beyond his reach. Maddened by extreme hunger, the bird forgot his hesitation and dived headlong into open space.</p>
            <p><b>The First Flight & Triumph:</b> A momentary panic seized him, but instantly the wind caught under his wings. He realized he was not falling; he was soaring effortlessly. When he touched the green sea, he floated safely without sinking. His proud family celebrated by feeding him scraps of dog-fish.</p>
            <p><b>Moral:</b> <i>"Courage is not the absence of fear, but the triumph over it. Necessity is the mother of all action."</i></p>
          </div>`,
          ansTamil: "இப்பத்தி வினா பொதுத்தேர்வில் கேட்கப்படும் மிக முக்கியமான வினாவாகும். பயத்தை வென்று, தாயின் தந்திரத்தால் பசியின் உந்துதலில் கடற்பறவை பறந்த உன்னத நிகழ்வை அழகாக விளக்குகிறது.",
          blackboard: {
            title: "Prose Paragraph: Struggles of the Young Seagull (6 Steps)",
            engTitle: "Prose Paragraph: Struggles of the Young Seagull (6 Steps)",
            steps: [
              {
                stepNum: 1,
                badge: "① Synopsis & Essay Outline",
                badgeEn: "① Synopsis & Essay Outline",
                chalkHtml: `
                  <div class="bb-line bb-title" style="color:#fde047; font-weight:800;">Essay Outline: 'His First Flight' by Liam O'Flaherty</div>
                  <div class="bb-box-cyan">
                    <div class="bb-line">• <b>Lesson:</b> His First Flight</div>
                    <div class="bb-line">• <b>Author:</b> Liam O'Flaherty (Irish Novelist)</div>
                    <div class="bb-line">• <b>Theme:</b> Overcoming Fear, Parental Tough Love &amp; Self-Confidence</div>
                    <div class="bb-pill-magenta" style="margin-top:8px;">Outline: Fear ➔ Starvation ➔ Mother's Trap ➔ Flight ➔ Victory</div>
                  </div>
                `,
                audioScriptEn: "Step 1: Essay Outline. 'His First Flight' by Liam O'Flaherty is an inspiring story of a young seagull who overcomes fear and learns to fly through his mother's clever encouragement."
              },
              {
                stepNum: 2,
                badge: "② Fear of the Vast Green Sea",
                badgeEn: "② Fear of the Vast Green Sea",
                chalkHtml: `
                  <div class="bb-box-blue">
                    <div class="bb-box-title" style="color:#93c5fd;">The Young Seagull's Dilemma:</div>
                    <div class="bb-line">• Alone on the ledge; his brothers and sister had already flown away.</div>
                    <div class="bb-line">• Whenever he ran to the brink, the vast sea below terrified him.</div>
                    <div class="bb-pill-magenta" style="margin-top:8px;">Deep conviction: &quot;My wings will never support me!&quot;</div>
                  </div>
                `,
                audioScriptEn: "Step 2: Fear of the Vast Sea. The young seagull was left alone on the ledge. Looking down at the vast sea, terror gripped him, and he believed his wings would never hold him."
              },
              {
                stepNum: 3,
                badge: "③ Parental Tough Love & Hunger",
                badgeEn: "③ Parental Tough Love & Hunger",
                chalkHtml: `
                  <div class="bb-box-green">
                    <div class="bb-box-title" style="color:#86efac;">Parental Strategy:</div>
                    <div class="bb-line">• Parents scolded him shrilly and threatened starvation unless he flew.</div>
                    <div class="bb-line">• He spent 24 agonizing hours alone on the sun-baked rock.</div>
                    <div class="bb-pill-magenta" style="margin-top:8px;">Extreme hunger forced him to gnaw dried eggshells!</div>
                  </div>
                `,
                audioScriptEn: "Step 3: Parental Tough Love. His parents scolded him and threatened starvation. He spent twenty-four agonizing hours alone, gnawing even dried pieces of eggshell."
              },
              {
                stepNum: 4,
                badge: "④ Mother's Clever Masterstroke",
                badgeEn: "④ Mother's Clever Masterstroke",
                chalkHtml: `
                  <div class="bb-box-cyan">
                    <div class="bb-box-title" style="color:#67e8f9;">The Decisive Turning Point:</div>
                    <div class="bb-line">• Mother picked up a piece of fish and flew towards him.</div>
                    <div class="bb-line">• She halted in mid-air, just inches beyond his reach.</div>
                    <div class="bb-pill-magenta" style="margin-top:8px;">Maddened by hunger, the young bird dived into space!</div>
                  </div>
                `,
                audioScriptEn: "Step 4: Mother's Clever Masterstroke. The mother bird flew towards him holding a piece of fish, but halted just beyond his reach. Maddened by hunger, he dived headlong into open space."
              },
              {
                stepNum: 5,
                badge: "⑤ The First Flight & Triumphant Soaring",
                badgeEn: "⑤ The First Flight & Triumphant Soaring",
                chalkHtml: `
                  <div class="bb-box-blue">
                    <div class="bb-box-title" style="color:#93c5fd;">Flight Experience:</div>
                    <div class="bb-line">• Momentary panic seized him, but the wind caught under his wings.</div>
                    <div class="bb-line">• He was not falling; he was soaring effortlessly!</div>
                    <div class="bb-pill-magenta" style="margin-top:8px;">Landed on green sea &amp; floated safely without sinking.</div>
                  </div>
                `,
                audioScriptEn: "Step 5: The First Flight and Triumph. Wind rushed under his wings. He realized he was not falling; he was soaring effortlessly, and he landed safely on the green sea."
              },
              {
                stepNum: 6,
                badge: "⑥ Moral & Conclusion",
                badgeEn: "⑥ Moral & Conclusion",
                chalkHtml: `
                  <div class="bb-banner-ribbon">
                    &quot;Courage is not the absence of fear, but triumph over it!&quot; ✓
                  </div>
                  <div class="bb-sticky-note" style="margin-top:12px;">
                    💡 <b>Key Lesson:</b> Necessity is the mother of action. Confidence and parental guidance turn hesitation into victory.
                  </div>
                `,
                audioScriptEn: "Step 6: Moral and Conclusion. Courage is not the absence of fear, but triumph over it. With determination and family support, the young seagull achieved his victorious first flight."
              }
            ]
          }
        }
      ]
    },

    {
      id: "eng1_sec2",
      title: "Part 2: Poem — Life",
      author: "Henry Van Dyke (American Poet & Essayist)",
      questions: [
        // Memory Poem
        {
          id: "eng1_2_1",
          type: "5m",
          mark: "Memory Poem (முழு மனப்பாடப் பாடல்)",
          q: "Quote from memory: The poem 'Life' by Henry Van Dyke (14 lines).",
          qTamil: "ஹென்றி வான் டைக் எழுதிய 'Life' மனப்பாடப் பாடலை பிழையின்றி எழுதுக (14 வரிகள்).",
          ans: `<div style="background:#f8fafc; border-left:4px solid #2563eb; padding:12px 18px; font-style:italic; line-height:1.8; font-size:14.5px;">
            Let me but live my life from year to year,<br>
            With forward face and unreluctant soul;<br>
            Not hurrying to, nor turning from the goal;<br>
            Not mourning for the things that disappear<br>
            In the dim past, nor holding back in fear<br>
            From what the future veils; but with a whole<br>
            And happy heart, that pays its toll<br>
            To Youth and Age, and travels on with cheer.<br><br>
            So let the way wind up the hill or down,<br>
            O'er rough or smooth, the journey will be joy:<br>
            Still seeking what I sought when but a boy,<br>
            New friendship, high adventure, and a crown,<br>
            My heart will keep the courage of the quest,<br>
            And hope the road's last turn will be the best.<br>
            <span style="font-weight:700; font-style:normal; color:#2563eb; display:block; margin-top:8px;">— Henry Van Dyke</span>
          </div>`,
          ansTamil: "இப்பாடல் 14 வரிகள் கொண்ட ஒரு 'Sonnet' (சானட்) ஆகும். முதல் 8 வரிகள் Octave என்றும், கடைசி 6 வரிகள் Sestet என்றும் அழைக்கப்படும்."
        },

        // 1-Mark: Poetic Devices & Figures of Speech
        {
          id: "eng1_2_2",
          type: "1m",
          mark: "1 Mark (Poetic Device)",
          q: "What is the poetic structure/form of the poem 'Life'?",
          qTamil: "'Life' கவிதையின் கட்டமைப்பு வடிவம் என்ன?",
          options: ["a) Ballad", "b) Sonnet (14 lines)", "c) Free verse", "d) Epic"],
          ans: "<b>b) Sonnet (14 lines)</b>",
          ansTamil: "சானட் என்பது 14 வரிகள் கொண்ட ஒரு மரபுக் கவிதை வடிவம் ஆகும்."
        },
        {
          id: "eng1_2_3",
          type: "1m",
          mark: "1 Mark (Rhyme Scheme)",
          q: "What is the rhyme scheme of the first stanza (Octave) of 'Life'?",
          qTamil: "முதல் 8 வரிகளுக்கான எதுகைத் திட்டம் (Rhyme Scheme) என்ன?",
          options: ["a) abab cdcd", "b) abba abba", "c) aabb ccdd", "d) abcd abcd"],
          ans: "<b>b) abba abba</b>",
          ansTamil: "year(a) - soul(b) - goal(b) - disappear(a); fear(a) - whole(b) - toll(b) - cheer(a)."
        },
        {
          id: "eng1_2_4",
          type: "1m",
          mark: "1 Mark (Figure of Speech)",
          q: "Identify the figure of speech in: <i>'With forward face and unreluctant soul'</i>.",
          qTamil: "இவ்வரியில் உள்ள அணி (Figure of Speech) எது?",
          options: ["a) Simile", "b) Personification / Epithet", "c) Hyperbole", "d) Onomatopoeia"],
          ans: "<b>b) Personification / Transferred Epithet</b>",
          ansTamil: "உள்ளத்திற்குத் தயக்கமின்மை என்ற மனிதப் பண்பை உருவகிப்பதால் இது Personification ஆகும்."
        },
        {
          id: "eng1_2_5",
          type: "1m",
          mark: "1 Mark (Figure of Speech)",
          q: "Identify the figure of speech in: <i>'O'er rough or smooth, the journey will be joy'</i>.",
          qTamil: "இவ்வரியில் உள்ள அணி எது?",
          options: ["a) Oxymoron / Contrast", "b) Metaphor", "c) Alliteration (rough/smooth)", "d) Both a and c"],
          ans: "<b>d) Both a and c</b>",
          ansTamil: "Rough vs Smooth என்பது முரண் (Contrast); journey - joy என்பது மோனை (Alliteration)."
        },
        {
          id: "eng1_2_6",
          type: "1m",
          mark: "1 Mark (Poetic Device)",
          q: "In the line <i>'New friendship, high adventure, and a crown'</i>, what does 'crown' symbolize?",
          qTamil: "இவ்வரியில் 'மகுடம்' (crown) எதனைக் குறிக்கிறது?",
          options: ["a) King's gold headpiece", "b) Fame, victory, and highest achievement", "c) Heavy burden", "d) Greed"],
          ans: "<b>b) Fame, victory, and highest achievement</b>",
          ansTamil: "மகுடம் என்பது வாழ்க்கையின் வெற்றி, புகழ் மற்றும் சாதனைகளைக் குறிக்கும் உருவகம் (Metaphor)."
        },

        // 2-Mark: Poetic Comprehension Lines
        {
          id: "eng1_2_7",
          type: "2m",
          mark: "2 Marks",
          q: "Read the lines and answer:<br><i>'Let me but live my life from year to year,<br>With forward face and unreluctant soul;'</i><br>a) How does the poet want to live his life?<br>b) What does 'unreluctant soul' mean?",
          qTamil: "கவிஞர் தன் வாழ்க்கையை எவ்வாறு வாழ விரும்புகிறார்? 'Unreluctant soul' என்பதன் பொருள் என்ன?",
          ans: "<b>a)</b> The poet wants to live his life year by year with optimism, looking forward with courage.<br><b>b)</b> 'Unreluctant soul' means a willing, eager, and enthusiastic mind that does not hesitate or shrink from duty.",
          ansTamil: "கவிஞர் நம்பிக்கையுடனும் உற்சாகத்துடனும் வாழ விரும்புகிறார். 'Unreluctant soul' என்றால் எந்தத் தயக்கமுமின்றி கடமைகளை ஏற்கும் மனப்பக்குவம்."
        },
        {
          id: "eng1_2_8",
          type: "2m",
          mark: "2 Marks",
          q: "Read the lines and answer:<br><i>'Not mourning for the things that disappear<br>In the dim past, nor holding back in fear<br>From what the future veils;'</i><br>a) What should we not mourn for?<br>b) What should we not fear?",
          qTamil: "நாம் எதற்காகத் துக்கம் கொண்டாடக் கூடாது? எதைக் கண்டு அஞ்சக் கூடாது?",
          ans: "<b>a)</b> We should not mourn or weep for things and lost opportunities that have vanished in the dim past.<br><b>b)</b> We should not hold back in fear of what the mysterious future hides (veils) from us.",
          ansTamil: "கடந்த காலத்தில் மறைந்துபோன இழப்புகளுக்காக நாம் அழக்கூடாது; எதிர்காலம் மறைத்து வைத்திருக்கும் சவால்களைக் கண்டு அஞ்சக்கூடாது."
        },
        {
          id: "eng1_2_9",
          type: "2m",
          mark: "2 Marks",
          q: "Read the lines and answer:<br><i>'So let the way wind up the hill or down,<br>O'er rough or smooth, the journey will be joy:'</i><br>a) How may the road of life be?<br>b) How will the journey be according to the poet?",
          qTamil: "வாழ்க்கைப் பாதை எவ்வாறு அமையலாம்? பயணம் எவ்வாறு இருக்கும் என்று கவிஞர் கூறுகிறார்?",
          ans: "<b>a)</b> The road of life may go up the hill (difficult times) or down (easy times), and may be rough or smooth.<br><b>b)</b> In spite of all obstacles, the poet is determined that his journey of life will be full of joy.",
          ansTamil: "பாதை மேடாகவோ பள்ளமாகவோ இருக்கலாம்; ஆனால் பயணம் நிச்சயம் மகிழ்ச்சியானதாகவே இருக்கும்."
        },
        {
          id: "eng1_2_10",
          type: "2m",
          mark: "2 Marks",
          q: "What three things did the poet seek from his boyhood and continues to seek as an adult?",
          qTamil: "கவிஞர் தன் சிறுவயது முதல் தொடர்ந்து தேடும் மூன்று விஷயங்கள் யாவை?",
          ans: "The poet continually seeks three things in life:<br>1. <b>New friendship</b><br>2. <b>High adventure</b><br>3. <b>A crown</b> (fame and reward).",
          ansTamil: "1. புதிய நட்பு, 2. அரிய சாகசம், 3. வெற்றியின் மகுடம்."
        },

        // 5-Mark: Paragraph Question
        {
          id: "eng1_2_11",
          type: "5m",
          mark: "5 Marks",
          q: "Describe the poet's attitude towards life as expressed in the poem 'Life'.",
          qTamil: "'Life' கவிதையில் வெளிப்படும் கவிஞரின் நேர்மறையான வாழ்க்கை அணுகுமுறையை விவரிக்க.",
          ans: `<div style="line-height:1.6;">
            <b>Synopsis:</b>
            <ul style="margin:4px 0 10px 20px; font-weight:600; color:#0369a1;">
              <li>Poem & Poet</li>
              <li>Living in the Present</li>
              <li>Embracing Life's Ups & Downs</li>
              <li>Boyhood Spirit of Adventure</li>
              <li>Courage & Ultimate Hope</li>
              <li>Conclusion</li>
            </ul>
            <p><b>Poem & Poet:</b> The poem 'Life' is an inspirational 14-line sonnet composed by the celebrated American poet Henry Van Dyke.</p>
            <p><b>Living in the Present:</b> The poet desires to live his life year after year with courage and an eager, willing soul. He believes in neither hurrying towards the goal nor retreating from it. He advises us never to mourn past sorrows nor fear future uncertainties, but to live the present with a whole and joyful heart.</p>
            <p><b>Embracing Life's Ups & Downs:</b> Life is compared to a winding path. The road may wind up the hill (adversity) or down (prosperity); it may be rough or smooth. Regardless of external conditions, one should travel with cheer and view the journey as joyful.</p>
            <p><b>Boyhood Spirit of Adventure:</b> Even as he grows older, the poet keeps alive his youthful curiosity, seeking new friendships, brave adventures, and the crown of meaningful achievements.</p>
            <p><b>Courage & Ultimate Hope:</b> His heart retains the courage of the lifelong quest, firmly trusting that the last turn of the road will be the finest and most rewarding of all.</p>
            <p><b>Conclusion:</b> The poem serves as a powerful beacon of optimism, teaching us that a positive attitude transforms life's struggles into delightful milestones.</p>
          </div>`,
          ansTamil: "இக்கவிதை மாணவர்களுக்குத் தன்னம்பிக்கையையும், வாழ்வை உற்சாகமாக எதிர்கொள்ளும் துணிவையும் ஊட்டுகிறது."
        }
      ]
    },

    {
      id: "eng1_sec3",
      title: "Part 3: Supplementary — The Tempest",
      author: "Charles and Mary Lamb (Tales from Shakespeare)",
      questions: [
        // 1-Mark: Character & Plot Questions
        {
          id: "eng1_3_1",
          type: "1m",
          mark: "1 Mark",
          q: "Who was the rightful Duke of Milan in 'The Tempest'?",
          qTamil: "மிலன் நகரின் உண்மையான டியூக் (அரசர்) யார்?",
          options: ["a) Antonio", "b) Alonso", "c) Prospero", "d) Ferdinand"],
          ans: "<b>c) Prospero</b>",
          ansTamil: "பிராஸ்பரோ மிலனின் உண்மையான மன்னர்; அவர் மாயாஜாலக் கலைகளில் வல்லவர்."
        },
        {
          id: "eng1_3_2",
          type: "1m",
          mark: "1 Mark",
          q: "Who helped Antonio usurp the dukedom of Milan from Prospero?",
          qTamil: "பிராஸ்பரோவிடமிருந்து ஆட்சியைக் கைப்பற்ற அன்டோனியோவுக்கு உதவியவர் யார்?",
          options: ["a) Ariel", "b) Alonso, King of Naples", "c) Gonzalo", "d) Caliban"],
          ans: "<b>b) Alonso, King of Naples</b>",
          ansTamil: "நேபிள்ஸ் நாட்டு மன்னர் அலான்சோ, அன்டோனியோவுக்குத் துணை நின்றான்."
        },
        {
          id: "eng1_3_3",
          type: "1m",
          mark: "1 Mark",
          q: "Who was Ariel?",
          qTamil: "ஏரியல் (Ariel) என்பவர் யார்?",
          options: ["a) A sea monster", "b) Prospero's brother", "c) A gentle spirit of the air", "d) A sailor"],
          ans: "<b>c) A gentle spirit of the air</b>",
          ansTamil: "ஏரியல் என்பது சைகோராக்ஸ் என்ற சூனியக்காரியால் மரத்தில் அடைக்கப்பட்டு, பின் பிராஸ்பரோவால் விடுவிக்கப்பட்ட காற்றின் நற்குண ஆவி."
        },
        {
          id: "eng1_3_4",
          type: "1m",
          mark: "1 Mark",
          q: "Who provided Prospero with water, provisions, clothes, and precious magic books when cast out?",
          qTamil: "படகில் நாடுகடத்தப்பட்ட போது பிராஸ்பரோவுக்கு உணவு, தண்ணீர், உடைகள், மாயப்புத்தகங்களைத் தந்து உதவியவர் யார்?",
          options: ["a) Gonzalo", "b) Ferdinand", "c) Ariel", "d) Caliban"],
          ans: "<b>a) Gonzalo</b>",
          ansTamil: "கொன்சாலோ (Gonzalo) என்ற அன்பான முதிய அமைச்சர் ரகசியமாகப் படகில் பொருட்களை வைத்து உதவினார்."
        },
        {
          id: "eng1_3_5",
          type: "1m",
          mark: "1 Mark",
          q: "Who was Caliban?",
          qTamil: "காலிபன் (Caliban) என்பவன் யார்?",
          options: ["a) Son of King Alonso", "b) An ugly deformed monster, son of the witch Sycorax", "c) A good spirit", "d) Prospero's servant in Milan"],
          ans: "<b>b) An ugly deformed monster, son of the witch Sycorax</b>",
          ansTamil: "சைகோராக்ஸ் என்ற சூனியக்காரியின் கொடிய, விகாரமான அரக்க மகன்."
        },
        {
          id: "eng1_3_6",
          type: "1m",
          mark: "1 Mark",
          q: "What did Prospero do to his magic wand and books at the end of the story?",
          qTamil: "கதையின் முடிவில் பிராஸ்பரோ தன் மாயக்கோலையும் மாய நூல்களையும் என்ன செய்தார்?",
          options: ["a) Passed them to Ferdinand", "b) Buried his staff deep in the earth and drowned his book in the sea", "c) Handed them to Ariel", "d) Kept them in Milan"],
          ans: "<b>b) Buried his staff deep in the earth and drowned his book in the sea</b>",
          ansTamil: "மாயக்கோலை பூமியில் ஆழப் புதைத்து, மாய நூல்களைக் கடலில் மூழ்கடித்து மாயாஜாலத்தை விட்டொழித்தார்."
        },

        // 2-Mark: Short Questions
        {
          id: "eng1_3_7",
          type: "2m",
          mark: "2 Marks",
          q: "How did Prospero and his infant daughter Miranda land on the deserted island?",
          qTamil: "பிராஸ்பரோவும் அவரது குழந்தையான மிராண்டாவும் அந்தப் பாழ்நிலத் தீவை எவ்வாறு அடைந்தனர்?",
          ans: "Prospero's treacherous brother Antonio, with the aid of the King of Naples, usurped his dukedom. They placed Prospero and his three-year-old daughter Miranda on an old decaying boat without sail or rigging. With the provisions supplied secretly by Gonzalo, they safely drifted to the island.",
          ansTamil: "துரோகத் தம்பி அன்டோனியோவால் பழைய படகில் தள்ளிவிடப்பட்ட அவர்கள், கொன்சாலோவின் உதவியால் தப்பி தீவை அடைந்தனர்."
        },
        {
          id: "eng1_3_8",
          type: "2m",
          mark: "2 Marks",
          q: "Why did Prospero raise a violent tempest at sea?",
          qTamil: "பிராஸ்பரோ கடலில் பயங்கரப் புயலை உருவாக்கியது ஏன்?",
          ans: "Prospero raised the tempest to bring his treacherous enemies — his brother Antonio and King Alonso of Naples — who were sailing past the island, within his power so that he could reform them and regain his dukedom.",
          ansTamil: "தீவின் வழியே கப்பலில் சென்ற தன் துரோக எதிரிகளைத் தன் கட்டுப்பாட்டிற்குள் கொண்டுவந்து, அவர்களைத் திருத்தி, தன் நாட்டைத் திரும்பப் பெறவே புயலை உருவாக்கினார்."
        },
        {
          id: "eng1_3_9",
          type: "2m",
          mark: "2 Marks",
          q: "Why did Prospero test Ferdinand with harsh physical labor?",
          qTamil: "இளவரசன் பெர்டினாண்டிற்கு பிராஸ்பரோ கடுமையான சுமை தூக்கும் சோதனையை வைத்தது ஏன்?",
          ans: "Prospero was delighted that Ferdinand and Miranda fell in love at first sight. However, to ensure that Ferdinand's love was true and not won too cheaply, he pretended to be suspicious and made him carry heavy wooden logs.",
          ansTamil: "பெர்டினாண்ட் மிராண்டா மீது கொண்ட காதல் உண்மையானதா என்பதையும், அவனது மன உறுதியையும் சோதிக்கவே மரக்கட்டைகளைச் சுமக்க வைத்தார்."
        },
        {
          id: "eng1_3_10",
          type: "2m",
          mark: "2 Marks",
          q: "How did Prospero treat his enemies when they were brought before him?",
          qTamil: "தன்முன் அழைத்து வரப்பட்ட எதிரிகளைப் பிராஸ்பரோ எவ்வாறு நடத்தினார்?",
          ans: "Prospero showed noble mercy. When Antonio and Alonso repented with sincere tears for their past treachery, Prospero completely forgave them, restored friendship, and celebrated the union of Ferdinand and Miranda.",
          ansTamil: "அவர்கள் செய்த துரோகத்திற்காக மனம் வருந்திய போது, பிராஸ்பரோ அவர்களைப் பழிவாங்காமல் பெருந்தன்மையோடு முழுமையாக மன்னித்தார்."
        },

        // 5-Mark: Paragraph Question
        {
          id: "eng1_3_11",
          type: "5m",
          mark: "5 Marks",
          q: "Narrate the story of 'The Tempest' highlighting Prospero's nobility and forgiveness.",
          qTamil: "பிராஸ்பரோவின் பெருந்தன்மையையும் மன்னிக்கும் நற்குணத்தையும் முன்னிறுத்தி 'தி டெம்பஸ்ட்' கதையை விவரிக்க.",
          ans: `<div style="line-height:1.6;">
            <b>Synopsis:</b>
            <ul style="margin:4px 0 10px 20px; font-weight:600; color:#0369a1;">
              <li>Introduction</li>
              <li>Betrayal and Exile</li>
              <li>Life on the Island & Spirits</li>
              <li>The Tempest and Shipwreck</li>
              <li>Love Test for Ferdinand</li>
              <li>Repentance, Forgiveness & Resolution</li>
            </ul>
            <p><b>Introduction:</b> 'The Tempest' is a magical drama written by William Shakespeare and retold by Charles and Mary Lamb, emphasizing that forgiveness is nobler than revenge.</p>
            <p><b>Betrayal and Exile:</b> Prospero, the rightful Duke of Milan, was deeply devoted to study. His deceitful brother Antonio usurped his throne with help from Alonso, King of Naples. Prospero and his toddler daughter Miranda were set adrift on a derelict boat, but Gonzalo kindly stocked it with food, clothes, and precious magic books.</p>
            <p><b>Life on the Island & Spirits:</b> They landed on an isolated island where Prospero used magic to release good spirits trapped by the witch Sycorax, making Ariel his loyal chief spirit.</p>
            <p><b>The Tempest and Shipwreck:</b> Twelve years later, when his enemies sailed near the island, Prospero commanded Ariel to raise a magical storm. Ariel skillfully wrecked the vessel without harming a single hair of the passengers, scattering them safely across the island.</p>
            <p><b>Love Test for Ferdinand:</b> Prince Ferdinand met Miranda and both fell instantly in love. To test Ferdinand's constancy, Prospero assigned him the laborious task of piling heavy logs, which Ferdinand endured cheerfully for Miranda's sake.</p>
            <p><b>Repentance, Forgiveness & Resolution:</b> Prospero brought Antonio and Alonso to his presence. Stricken with guilt, they repented and restored Prospero's dukedom. Prospero magnanimously forgave them, released Ariel into freedom, buried his magic wand, and returned triumphantly to Milan.</p>
            <p><b>Moral:</b> <i>"The rarer action is in virtue than in vengeance."</i></p>
          </div>`,
          ansTamil: "மன்னிக்கும் குணம் மனிதனைத் தெய்வ நிலைக்கு உயர்த்தும் என்பதைப் பிராஸ்பரோவின் வாழ்க்கை விளக்குகிறது."
        }
      ]
    },

    {
      id: "eng1_sec4",
      title: "Part 4: Grammar & Vocabulary — Modals, Semi-Modals & Voices",
      author: "English Grammar & Structural Usage (Samacheer Kalvi)",
      questions: [
        // Modals Overview
        {
          id: "eng1_4_1",
          type: "1m",
          mark: "Grammar Rule & Table",
          q: "What are Modal and Semi-Modal Auxiliary Verbs?",
          qTamil: "துணை வினைச்சொற்கள் (Modals and Semi-Modals) என்றால் என்ன?",
          ans: `<table style="width:100%; border-collapse:collapse; font-size:13px; margin-top:6px;">
            <tr style="background:#eff6ff; color:#1e40af;">
              <th style="padding:6px; border:1px solid #94a3b8;">Modal / Semi-Modal</th>
              <th style="padding:6px; border:1px solid #94a3b8;">Function / Meaning</th>
              <th style="padding:6px; border:1px solid #94a3b8;">Example Sentence</th>
            </tr>
            <tr><td style="padding:6px; border:1px solid #cbd5e1;"><b>Can / Could</b></td><td style="padding:6px; border:1px solid #cbd5e1;">Ability / Polite request</td><td style="padding:6px; border:1px solid #cbd5e1;">He <i>can</i> speak English fluently.</td></tr>
            <tr><td style="padding:6px; border:1px solid #cbd5e1;"><b>May / Might</b></td><td style="padding:6px; border:1px solid #cbd5e1;">Permission / Possibility</td><td style="padding:6px; border:1px solid #cbd5e1;"><i>May</i> I come in, Sir? / It <i>might</i> rain.</td></tr>
            <tr><td style="padding:6px; border:1px solid #cbd5e1;"><b>Must</b></td><td style="padding:6px; border:1px solid #cbd5e1;">Compulsion / Obligation</td><td style="padding:6px; border:1px solid #cbd5e1;">We <i>must</i> obey the traffic rules.</td></tr>
            <tr><td style="padding:6px; border:1px solid #cbd5e1;"><b>Should / Ought to</b></td><td style="padding:6px; border:1px solid #cbd5e1;">Advice / Moral duty</td><td style="padding:6px; border:1px solid #cbd5e1;">We <i>ought to</i> respect our elders.</td></tr>
            <tr><td style="padding:6px; border:1px solid #cbd5e1;"><b>Used to</b></td><td style="padding:6px; border:1px solid #cbd5e1;">Past habitual action</td><td style="padding:6px; border:1px solid #cbd5e1;">My grandfather <i>used to</i> walk 5 km daily.</td></tr>
            <tr><td style="padding:6px; border:1px solid #cbd5e1;"><b>Need / Dare</b></td><td style="padding:6px; border:1px solid #cbd5e1;">Necessity / Challenge</td><td style="padding:6px; border:1px solid #cbd5e1;">You <i>need not</i> hurry. / How <i>dare</i> you say this!</td></tr>
          </table>`,
          ansTamil: "Modals என்பது வாக்கியத்தில் திறன், அனுமதி, கட்டாயம் போன்ற உணர்வுகளைக் குறிக்கும் துணை வினைகள்."
        },

        // Modals MCQs
        {
          id: "eng1_4_2",
          type: "1m",
          mark: "1 Mark (Modal Fill-in)",
          q: "Fill in the blank with a suitable modal verb:<br>We ________ obey the traffic regulations to avoid accidents.",
          qTamil: "விபத்துகளைத் தவிர்க்க நாம் கட்டாயம் விதிகளைப் பின்பற்ற வேண்டும் (சரியான மோடலைத் தேர்வு செய்க):",
          options: ["a) could", "b) must", "c) might", "d) used to"],
          ans: "<b>b) must</b>",
          ansTamil: "Must என்பது தவிர்க்க முடியாத சட்டப்பூர்வக் கடமையைக் குறிக்கிறது."
        },
        {
          id: "eng1_4_3",
          type: "1m",
          mark: "1 Mark (Modal Fill-in)",
          q: "Fill in the blank with a suitable modal verb:<br>________ you please lend me your pen for a minute?",
          qTamil: "தயவுசெய்து உங்கள் பேனாவை ஒரு நிமிடம் தர முடியுமா? (பணிவான வேண்டுகோள்):",
          options: ["a) Could / Would", "b) Must", "c) Shall", "d) Ought to"],
          ans: "<b>a) Could / Would</b>",
          ansTamil: "Could அல்லது Would என்பது பணிவான வேண்டுகோளுக்குப் (Polite Request) பயன்படுகிறது."
        },
        {
          id: "eng1_4_4",
          type: "1m",
          mark: "1 Mark (Semi-Modal)",
          q: "Fill in the blank with a suitable semi-modal verb:<br>We ________ help the poor and needy.",
          qTamil: "ஏழை எளியோருக்கு நாம் உதவ வேண்டும் (ஒழுக்கக் கடமை):",
          options: ["a) used to", "b) ought to", "c) dare to", "d) can"],
          ans: "<b>b) ought to</b>",
          ansTamil: "Ought to என்பது தார்மீக ஒழுக்கக் கடமையைக் குறிக்கும் Semi-modal."
        },
        {
          id: "eng1_4_5",
          type: "1m",
          mark: "1 Mark (Semi-Modal)",
          q: "Fill in the blank with a suitable semi-modal verb:<br>My father ________ play tennis when he was in college.",
          qTamil: "என் தந்தை கல்லூரியில் படித்த போது டென்னிஸ் விளையாடுவது வழக்கம்:",
          options: ["a) used to", "b) ought to", "c) dare not", "d) must"],
          ans: "<b>a) used to</b>",
          ansTamil: "Used to என்பது கடந்த கால வழக்கமான பழக்கத்தைக் குறிக்கும் Semi-modal."
        },

        // Active and Passive Voice
        {
          id: "eng1_4_6",
          type: "2m",
          mark: "2 Marks (Voice Conversion)",
          q: "Change into Passive Voice:<br><b>The mother seagull tore a piece of fish.</b>",
          qTamil: "செயப்பாட்டு வினையாக (Passive Voice) மாற்றுக: தாய் கடற்பறவை ஒரு மீன் துண்டைக் கிழித்தது.",
          ans: "<b>Passive Voice:</b> A piece of fish <b>was torn</b> by the mother seagull.<br><small style='color:#64748b;'>Rule: Subject (The mother seagull) + Past Tense (tore) + Object (a piece of fish) ➔ Object + was + V3 (torn) + by + Subject.</small>",
          ansTamil: "மீன் துண்டு தாய்ப்பறவையால் கிழிக்கப்பட்டது."
        },
        {
          id: "eng1_4_7",
          type: "2m",
          mark: "2 Marks (Voice Conversion)",
          q: "Change into Passive Voice:<br><b>Prospero released all the good spirits from the pine trees.</b>",
          qTamil: "செயப்பாட்டு வினையாக மாற்றுக: பிராஸ்பரோ மரங்களிலிருந்து நற்குண ஆவிகளை விடுவித்தார்.",
          ans: "<b>Passive Voice:</b> All the good spirits <b>were released</b> from the pine trees by Prospero.",
          ansTamil: "அனைத்து நற்குண ஆவிகளும் பிராஸ்பரோவால் விடுவிக்கப்பட்டன."
        },
        {
          id: "eng1_4_8",
          type: "2m",
          mark: "2 Marks (Voice Conversion)",
          q: "Change into Active Voice:<br><b>The shipwrecked sailors were saved by Ariel.</b>",
          qTamil: "செய்வினையாக (Active Voice) மாற்றுக: கப்பல் உடைந்த மாலுமிகள் ஏரியலால் காப்பாற்றப்பட்டனர்.",
          ans: "<b>Active Voice:</b> Ariel <b>saved</b> the shipwrecked sailors.",
          ansTamil: "ஏரியல் கப்பல் உடைந்த மாலுமிகளைக் காப்பாற்றியது."
        },
        {
          id: "eng1_4_9",
          type: "2m",
          mark: "2 Marks (Voice Conversion)",
          q: "Change into Passive Voice:<br><b>We should plant more saplings to reduce air pollution.</b>",
          qTamil: "செயப்பாட்டு வினையாக மாற்றுக: காற்று மாசுபாட்டைக் குறைக்க நாம் மரக்கன்றுகளை நட வேண்டும்.",
          ans: "<b>Passive Voice:</b> More saplings <b>should be planted</b> by us to reduce air pollution.",
          ansTamil: "அதிக மரக்கன்றுகள் நம்மால் நடப்பட வேண்டும்."
        },

        // Vocabulary: Prefixes, Suffixes & Compound Words
        {
          id: "eng1_4_10",
          type: "1m",
          mark: "1 Mark (Prefix / Suffix)",
          q: "Add a suitable prefix to the word <b>'courage'</b> to form its opposite:",
          qTamil: "'Courage' என்ற சொல்லுடன் முன்னொட்டு (Prefix) சேர்த்து எதிர்ச்சொல் உருவாக்குக:",
          options: ["a) un-", "b) dis-", "c) in-", "d) mis-"],
          ans: "<b>b) dis-</b> (discourage ↔ encourage)",
          ansTamil: "Courage (தைரியம்) ➔ Discourage (தைரியத்தை இழக்கச் செய்தல்)."
        },
        {
          id: "eng1_4_11",
          type: "1m",
          mark: "1 Mark (Compound Word)",
          q: "Identify the correct compound word formed by: <b>Sea + ________</b>",
          qTamil: "சரியான கூட்டுச் சொல்லைத் (Compound Word) தேர்ந்தெடுக்க: Sea + ________",
          options: ["a) gull (Seagull)", "b) air", "c) light", "d) cloud"],
          ans: "<b>a) gull ➔ Seagull</b> (Noun + Noun = Compound Noun)",
          ansTamil: "Sea + gull = Seagull (கடற்பறவை)."
        }
      ]
    }
  ],
  manapaadam: [
    {
      id: "eng_m1_1",
      title: "Memory Poem: Life (Lines 1 to 8)",
      author: "Henry Van Dyke",
      book: "10th Standard English Textbook",
      examMark: "Compulsory Memory Poem (5 Marks)",
      lines: [
        "Let me but live my life from year to year,",
        "With forward face and unreluctant soul;",
        "Not hurrying to, nor turning from the goal;",
        "Not mourning for the things that disappear",
        "In the dim past, nor holding back in fear",
        "From what the future veils; but with a whole",
        "And happy heart, that pays its toll",
        "To Youth and Age, and travels on with cheer."
      ],
      meaning: "The poet Henry Van Dyke wishes to live his life with courage and cheerfulness. He wants to face every day looking forward without reluctance, never rushing impatiently or straying from his goals. He chooses not to grieve for what was lost in the past, nor dread what lies hidden in the future, but to embrace both youth and old age with a joyful, wholehearted spirit.",
      reciteText: "Memory Poem. Life. By Henry Van Dyke. Let me but live my life from year to year, With forward face and unreluctant soul. Not hurrying to, nor turning from the goal. Not mourning for the things that disappear in the dim past, nor holding back in fear from what the future veils. But with a whole and happy heart, that pays its toll to Youth and Age, and travels on with cheer."
    }
  ]
};
