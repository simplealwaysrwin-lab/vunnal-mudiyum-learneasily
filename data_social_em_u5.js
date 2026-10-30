// Class 10 Social Science - History Unit 2: The World between two World Wars
// Tamil Nadu State Board Samacheer Kalvi Question-Answer Guide (English Medium)

const SOCIAL_EM_UNIT_5_DATA = {
  unitId: "soc_em_h2",
  unitName: "History 2: The World between two World Wars",
  subject: "Social Science",
  syllabus: "Tamil Nadu Samacheer Kalvi Class 10 Social Science - History",

  // Key Timeline Milestones
  timeline: [
    { year: "1922", event: "Benito Mussolini's March on Rome - Fascist dictatorship established in Italy" },
    { year: "1929", event: "Wall Street Crash in New York - Outbreak of the Great Depression" },
    { year: "1929", event: "Lateran Treaty signed between Italy and Pope Pius XI recognising Vatican City" },
    { year: "1933", event: "Adolf Hitler appointed Chancellor of Germany - Rise of the Third Reich" },
    { year: "1934", event: "Mao Zedong commenced the historic 'Long March' across China" },
    { year: "1935", event: "Mussolini invaded Ethiopia in defiance of the League of Nations" }
  ],

  subSections: [
    // -------------------------------------------------------------
    // Section 1: The Great Depression of 1929 & Worldwide Impact
    // -------------------------------------------------------------
    {
      id: "sec_soc_em_5_1",
      title: "Section 1: The Great Depression of 1929 & Global Consequences",
      author: "History - Unit 2: The World between two World Wars",
      questions: [
        {
          id: "soc_em_5_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "Board Exam",
          q: "What was the collapse of the New York Stock Exchange on October 24, 1929 known as?",
          options: ["A) Black Thursday", "B) Bloody Sunday", "C) Good Friday", "D) Independence Day"],
          ans: "Answer: <b>A) Black Thursday</b><br>Explanation: On October 24, 1929, share prices on Wall Street crashed catastrophically, triggering the worldwide Great Depression.",
          ansTamil: "அமெரிக்க பங்குச் சந்தை சரிந்த நாள் 'கருப்பு வியாழன்' எனப்பட்டது."
        },
        {
          id: "soc_em_5_2",
          type: "1m",
          mark: "1 Mark",
          examTag: "Govt Model",
          q: "What was the color of the shirts worn by Benito Mussolini's paramilitary fascist squads?",
          options: ["A) Red Shirts", "B) Black Shirts", "C) Blue Shirts", "D) Brown Shirts"],
          ans: "Answer: <b>B) Black Shirts</b><br>Explanation: Mussolini organized armed volunteer squads named the 'Squadristi' who wore black shirts to intimidate trade unionists and political rivals.",
          ansTamil: "முசோலினியின் தொண்டர்கள் கருப்புச் சட்டை அணிந்திருந்தனர்."
        },
        {
          id: "soc_em_5_3",
          type: "2m",
          mark: "2 Marks",
          examTag: "High Yield",
          q: "State two major consequences of the Great Depression of 1929.",
          ans: `<div style="line-height:1.7;">
            1. <b>Banking and Business Collapse:</b> Over 9,000 banks in the US failed, wiping out public deposits and forcing thousands of factories to shut down.<br>
            2. <b>Rampant Unemployment and Poverty:</b> Millions of industrial workers lost their jobs, while agrarian prices plummeted by 60%, pushing farmers into bankruptcy.
          </div>`,
          ansTamil: "வங்கிகள் மூடல், வேலையின்மை மற்றும் விவசாயப் பொருட்கள் விலை வீழ்ச்சி ஆகியவை ஏற்பட்டன."
        },
        {
          id: "soc_em_5_4",
          type: "5m",
          mark: "5 Marks",
          examTag: "Board Exam 5M High Yield",
          q: "Explain the underlying causes and worldwide socio-economic impact of the Great Depression of 1929.",
          ans: `<div style="line-height:1.7;">
            <b>1. Causes of the Great Depression:</b><br>
            • <b>Post-War Overproduction:</b> Industrial output and farm mechanization produced surplus goods that consumers could not afford due to low wages.<br>
            • <b>Wall Street Stock Market Crash:</b> Wild financial speculation on Wall Street collapsed on 'Black Thursday' (October 24, 1929).<br>
            • <b>Withdrawal of US Capital:</b> American banks abruptly recalled short-term loans from European nations, causing Germany and Britain to default.<br><br>
            <b>2. Global Impact:</b><br>
            • <b>Contraction of International Trade:</b> Protective tariffs (like the US Smoot-Hawley Act) shrank global exports by more than 50%.<br>
            • <b>Rise of Totalitarian Dictators:</b> Severe economic distress eroded confidence in democracy, facilitating the rise of Hitler in Germany and Mussolini in Italy.<br>
            • <b>Roosevelt's New Deal:</b> US President Franklin D. Roosevelt instituted the 'New Deal', implementing public works, social security, and financial reforms to restore employment.
          </div>`,
          ansTamil: "மிகை உற்பத்தி மற்றும் பங்குச் சந்தை வீழ்ச்சியால் பெரும் மந்தம் ஏற்பட்டது. வர்த்தகம் முடங்கியது, சர்வாதிகாரிகள் உருவாயினர்; ரூஸ்வெல்ட்டின் புதிய ஒப்பந்தம் மூலம் அமெரிக்கா மீண்டது.",
          checkpoints: [
            { pt: 1, text: "Wall Street Crash: Triggered on October 24, 1929 ('Black Thursday') in New York.", taText: "வால் ஸ்ட்ரீட் சரிவு: 1929 அக்டோபர் 24 'கருப்பு வியாழன்' அன்று நியூயார்க்கில் தொடங்கியது." },
            { pt: 2, text: "Overproduction crisis: Industrial and agricultural supply drastically exceeded consumer demand.", taText: "மிகை உற்பத்தி: சந்தைத் தேவையை விட விவசாய மற்றும் தொழிற்சாலை உற்பத்தி பலமடங்கு அதிகரித்தது." },
            { pt: 3, text: "Banking collapse: Over 9,000 commercial banks collapsed, wiping out life savings.", taText: "வங்கி முடக்கம்: பல்லாயிரக்கணக்கான வங்கிகள் திவாலாகி மக்களின் சேமிப்புகள் அழிந்தன." },
            { pt: 4, text: "Global contagion: US abruptly withdrew loans, crippling European post-war economies.", taText: "உலகளாவிய தாக்கம்: அமெரிக்கா கடன்களைத் திரும்பப் பெற்றதால் ஐரோப்பிய நாடுகள் வீழ்ந்தன." },
            { pt: 5, text: "Mass unemployment: Over 25% of the industrial workforce lost jobs worldwide.", taText: "கடும் வேலையின்மை: உலகளவில் தொழிலாளர்களில் 25% பேர் வேலை இழந்து தவித்தனர்." },
            { pt: 6, text: "Agricultural depression: Farm commodity prices plunged by 60%, ruining small farmers.", taText: "விவசாய வீழ்ச்சி: தானிய விலைகள் 60% சரிந்து விவசாயிகள் கடனில் மூழ்கினர்." },
            { pt: 7, text: "Trade collapse: Global international trade contracted by more than 50% under protectionism.", taText: "வணிக சரிவு: பாதுகாப்பு வரிகளால் சர்வதேச வணிகம் 50%-க்கும் மேல் முடங்கியது." },
            { pt: 8, text: "Rise of dictators: Economic chaos fueled the rise of Hitler in Germany and Mussolini in Italy.", taText: "சர்வாதிகாரிகள் எழுச்சி: பொருளாதார நெருக்கடியைப் பயன்படுத்தி ஹிட்லரும் முசோலினியும் ஆட்சியைக் கைப்பற்றினர்." },
            { pt: 9, text: "FDR New Deal: President Roosevelt launched massive public works programs for relief.", taText: "ரூஸ்வெல்ட் புதிய ஒப்பந்தம்: அரசு திட்டங்கள் மூலம் வேலைவாய்ப்புகளை உருவாக்கி அமெரிக்கா மீண்டது." },
            { pt: 10, text: "Welfare state: Emphasized social security, minimum wages, and banking regulations.", taText: "மக்கள் நலம்: சமூக பாதுகாப்பு மற்றும் வங்கி ஒழுங்குமுறை சட்டங்கள் இயற்றப்பட்டன." }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 2: Rise of Fascism in Italy & Nazism in Germany
    // -------------------------------------------------------------
    {
      id: "sec_soc_em_5_2",
      title: "Section 2: Rise of Fascism in Italy & Nazism in Germany",
      author: "History - Unit 2: The World between two World Wars",
      questions: [
        {
          id: "soc_em_5_5",
          type: "2m",
          mark: "2 Marks",
          examTag: "Board Exam",
          q: "What was the significance of the Lateran Treaty signed by Mussolini in 1929?",
          ans: `<div style="line-height:1.7;">
            • Signed in 1929 between the Italian government under Mussolini and Pope Pius XI.<br>
            • Recognised the <b>Vatican City</b> as an independent sovereign state ruled by the Pope.<br>
            • In return, the Pope recognised the Kingdom of Italy, securing church support for Mussolini's regime.
          </div>`,
          ansTamil: "லாட்டரன் உடன்படிக்கை மூலம் வாடிகன் தனி நாடானது; போப் ஆதரவை முசோலினி பெற்றார்."
        },
        {
          id: "soc_em_5_6",
          type: "5m",
          mark: "5 Marks",
          examTag: "Board Exam 5M High Yield",
          q: "Trace the factors that led to the rise of Fascism in Italy under Benito Mussolini and highlight his domestic and foreign policies.",
          ans: `<div style="line-height:1.7;">
            <b>1. Causes for the Rise of Fascism:</b><br>
            • <b>Disillusionment with Versailles:</b> Italians felt cheated because promises of territorial gains in Dalmatia were denied despite heavy war casualties.<br>
            • <b>Post-War Economic Distress:</b> Soaring inflation, huge debts, and unemployment triggered communist-led strikes in factories and farms.<br>
            • <b>Weak Coalition Governments:</b> Inability of parliamentary governments to enforce law and order turned propertied classes towards fascism.<br><br>
            <b>2. Mussolini's Governance and Policies:</b><br>
            • <b>Squadristi (Black Shirts):</b> Mussolini formed armed gangs to break up trade unions and terrorize socialists.<br>
            • <b>March on Rome (1922):</b> Staged an ultimatum to the government; King Victor Emmanuel III invited him to become Prime Minister.<br>
            • <b>Totalitarian 'Il Duce':</b> Disbanded all opposition parties, silenced the press, and banned strikes, creating a corporatist police state.<br>
            • <b>Aggressive Foreign Policy:</b> Invaded Ethiopia in 1935 and forged the Rome-Berlin Axis with Hitler.
          </div>`,
          ansTamil: "போர் ஏமாற்றம், வேலையின்மை மற்றும் கம்யூனிச பயத்தால் முசோலினி ஆட்சியைக் கைப்பற்றினார். கருப்புச் சட்டையினர் மூலம் சர்வாதிகாரியாக மாறினார்.",
          checkpoints: [
            { pt: 1, text: "National humiliation: Italy felt betrayed at Versailles despite being on winning side.", taText: "தேசிய ஏமாற்றம்: போரில் வென்றும் இத்தாலிக்கு உரிய நிலப்பகுதிகள் கிடைக்கவில்லை." },
            { pt: 2, text: "Economic turmoil: Post-war inflation, national debt, and strikes crippled factories.", taText: "பொருளாதார நெருக்கடி: பணவீக்கம், கடன் சுமை மற்றும் தொடர் வேலைநிறுத்தங்களால் நாடு தத்தளித்தது." },
            { pt: 3, text: "Fear of Communism: Landlords and industrial tycoons backed Mussolini to crush socialists.", taText: "கம்யூனிச பயம்: பொதுவுடைமைப் பரவலைத் தடுக்க நிலச்சுவான்தாரர்கள் முசோலினியை ஆதரித்தனர்." },
            { pt: 4, text: "Fasci di Combattimento: Founded by Benito Mussolini in Milan in 1919.", taText: "பாசிசக் கட்சி: 1919-ல் மிலன் நகரில் முசோலினியால் பாசிச அமைப்பு தொடங்கப்பட்டது." },
            { pt: 5, text: "Black Shirts (Squadristi): Armed paramilitary squads terrorized political opponents.", taText: "கருப்புச் சட்டையினர்: வன்முறைப் படை மூலம் கம்யூனிஸ்டுகளையும் எதிரிகளையும் தாக்கினர்." },
            { pt: 6, text: "March on Rome (1922): Mussolini seized power as King Emmanuel III appointed him PM.", taText: "ரோம் அணிவகுப்பு: 1922-ல் ரோம் நோக்கி அணிவகுத்து மன்னரிடமிருந்து ஆட்சியைக் கைப்பற்றினார்." },
            { pt: 7, text: "Totalitarian control: Banned opposition parties, independent newspapers, and trade unions.", taText: "முழு சர்வாதிகாரம்: அனைத்து எதிர்க் கட்சிகள் மற்றும் பத்திரிகைகளைத் தடை செய்தார்." },
            { pt: 8, text: "Title of 'Il Duce': Mussolini proclaimed himself supreme dictator of the Italian state.", taText: "டூஸ் பட்டம்: தன்னை நாட்டின் முழுமுதல் தலைவராக அறிவித்துக் கொண்டார்." },
            { pt: 9, text: "Lateran Treaty (1929): Granted independence to Vatican City and won Papal goodwill.", taText: "லாட்டரன் உடன்படிக்கை: வாடிகன் நகருக்கு தன்னாட்சி வழங்கி போப்பின் ஆதரவைப் பெற்றார்." },
            { pt: 10, text: "Imperial aggression: Invaded Ethiopia in 1935, cementing the Rome-Berlin Axis.", taText: "ஆக்கிரமிப்பு போர்: 1935-ல் எத்தியோப்பியாவை ஆக்கிரமித்து ஹிட்லருடன் கைகோர்த்தார்." }
          ]
        }
      ]
    }
  ]
};
