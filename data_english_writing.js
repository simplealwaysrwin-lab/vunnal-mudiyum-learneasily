/**
 * 10th Standard English - Writing Skills Question Bank & Study Guide
 * Tamil Nadu Samacheer Kalvi Syllabus - Public Exam Preparation 2026
 * 
 * Simple, Exam-Oriented English for 10th Standard Students:
 * 1. ENGLISH_ESSAYS_DATA: 10 Simple Model Essays (150-180 Words with Headings & Quotes) + 10 Practice Topics
 * 2. ENGLISH_LETTERS_DATA: Formal & Informal Letters (Official 5-Mark Format + 10 Models + 20 Practice)
 * 3. ENGLISH_WRITING_GUIDE_DATA: Public Exam 5-Mark Blueprint, 8-Mark Story Rules & Common Mistakes
 */

// =======================================================================
// 1. ESSAY WRITING DATA (Simple 10th Standard English)
// =======================================================================
const ENGLISH_ESSAYS_DATA = {
  unit: "Essays",
  title: "English Essay Writing (10 Simple Model Essays & Practice Topics)",
  stories: [],
  subSections: [
    {
      id: "sec_eng_essay_models",
      title: "10 Model Essays (Simple Words, Headings & Quotations for 10th Std)",
      author: "Samacheer Kalvi 10th English Guide",
      questions: [
        {
          id: "eng_essay_1",
          type: "8m",
          mark: "8 Marks",
          examTag: "Model Essay (150-180 Words)",
          isImportant: true,
          q: "Write an essay on 'The Importance of Education'.",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <div style="background:#f0fdf4; border-left:4px solid #16a34a; padding:10px 14px; margin-bottom:12px; border-radius:4px;">
              <b>Outline:</b> Introduction – Why Education is Important – Education and Society – Key to Success – Conclusion.
            </div>
            <p><b>Introduction:</b><br>
            Education is very important in every person's life. It is the real wealth of a human being. It shapes our character and gives us knowledge. As <b>Nelson Mandela</b> said, <i>"Education is the most powerful weapon which you can use to change the world."</i></p>

            <p><b>Why Education is Important:</b><br>
            Education teaches us how to read, write, and speak properly. It helps us to think wisely and know the difference between right and wrong. It gives us confidence and self-respect. A good education opens the door to good jobs and a bright future.</p>

            <p><b>Education and Society:</b><br>
            Educated people help to develop their family and our country. Education removes poverty, bad habits, and ignorance from society. It teaches equality and respect for all human beings.</p>

            <p><b>Key to Success:</b><br>
            In today's modern world, skills and knowledge are very important. An educated person can face any difficulty in life with courage. Education helps students to achieve their dreams.</p>

            <p><b>Conclusion:</b><br>
            Education is not just for getting marks or degrees; it is for living a good and useful life. Every child must go to school and get a quality education.</p>
          </div>`
        },
        {
          id: "eng_essay_2",
          type: "8m",
          mark: "8 Marks",
          examTag: "Model Essay (150-180 Words)",
          isImportant: true,
          q: "Write an essay on 'The Importance of Trees' (Save Trees, Save Earth).",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <div style="background:#f0fdf4; border-left:4px solid #16a34a; padding:10px 14px; margin-bottom:12px; border-radius:4px;">
              <b>Outline:</b> Introduction – Uses of Trees – Protecting Nature – Cutting Trees is Dangerous – Conclusion.
            </div>
            <p><b>Introduction:</b><br>
            Trees are the most valuable gift of nature. They are the best friends of all living beings on earth. Without trees, human life is not possible. A famous saying goes, <i>"Plant trees today for a better tomorrow."</i></p>

            <p><b>Uses of Trees:</b><br>
            Trees give us oxygen to breathe and take in carbon dioxide. They provide sweet fruits, beautiful flowers, green vegetables, and wood. Trees also give shade to tired travellers and shelter to birds and animals. Many trees give us herbal medicines.</p>

            <p><b>Protecting Nature:</b><br>
            The roots of trees hold the soil tightly and stop soil erosion. Trees bring cool air and help to cause regular rain. They keep our environment fresh, green, and clean.</p>

            <p><b>Cutting Trees is Dangerous:</b><br>
            Nowadays, many trees are cut down for roads, houses, and factories. This causes global warming, less rainfall, and severe heat. If we cut down forests, our planet will become a dry desert.</p>

            <p><b>Conclusion:</b><br>
            We must stop cutting green trees. Everyone should plant at least one tree on their birthday and take care of it. Let us save trees to save our Mother Earth.</p>
          </div>`
        },
        {
          id: "eng_essay_3",
          type: "8m",
          mark: "8 Marks",
          examTag: "Model Essay (150-180 Words)",
          isImportant: true,
          q: "Write an essay on 'Environmental Pollution and Its Prevention'.",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <div style="background:#f0fdf4; border-left:4px solid #16a34a; padding:10px 14px; margin-bottom:12px; border-radius:4px;">
              <b>Outline:</b> Introduction – Types of Pollution – Causes and Effects – How to Prevent – Conclusion.
            </div>
            <p><b>Introduction:</b><br>
            Environmental pollution is a big problem facing our world today. When our surroundings become dirty and unhealthy, it is called pollution. It harms plants, animals, and human beings. A clean earth is a healthy earth.</p>

            <p><b>Types of Pollution:</b><br>
            There are four main types of pollution: air pollution, water pollution, land pollution, and noise pollution.</p>

            <p><b>Causes and Effects:</b><br>
            Smoke from buses, cars, and factories pollutes the air we breathe. It causes breathing troubles and asthma. Factory waste and plastic bags thrown into rivers pollute our drinking water. Loud horns and loudspeakers cause noise pollution and disturb students and elderly people.</p>

            <p><b>How to Prevent Pollution:</b><br>
            We must plant more trees around our houses and schools. We should stop using one-time plastic bags and use cloth bags instead. We must keep our streets and drains clean. Vehicles should be tested for smoke regularly.</p>

            <p><b>Conclusion:</b><br>
            A clean environment leads to a healthy life. It is the duty of every student and citizen to protect nature. Keep our surroundings clean and stay healthy!</p>
          </div>`
        },
        {
          id: "eng_essay_4",
          type: "8m",
          mark: "8 Marks",
          examTag: "Model Essay (150-180 Words)",
          isImportant: true,
          q: "Write an essay on 'The Importance of Water and Rainwater Harvesting'.",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <div style="background:#f0fdf4; border-left:4px solid #16a34a; padding:10px 14px; margin-bottom:12px; border-radius:4px;">
              <b>Outline:</b> Introduction – Water is Life – Reasons for Water Scarcity – Rainwater Harvesting – Conclusion.
            </div>
            <p><b>Introduction:</b><br>
            Water is the most precious liquid on earth. All living things—humans, animals, and plants—need water to survive. Thiruvalluvar said in Thirukkural, <i>"Without water, there is no world."</i></p>

            <p><b>Water is Life:</b><br>
            We need water every day for drinking, cooking, bathing, washing, and cleaning. Farmers need water to grow crops and food grains. Factories also need water to run machines. Without water, agriculture will fail and there will be no food.</p>

            <p><b>Reasons for Water Scarcity:</b><br>
            Though the earth is covered with water, only a very small amount is fresh drinking water. In summers, many wells and lakes dry up. People waste water by keeping taps running. River water is also polluted by dirty waste.</p>

            <p><b>Rainwater Harvesting:</b><br>
            Rainwater harvesting is the best method to save water. In Tamil Nadu, rooftop rainwater harvesting is very successful. When we collect rainwater from roofs and send it underground, the water level rises.</p>

            <p><b>Conclusion:</b><br>
            Every single drop of water is precious. We must close taps properly and never waste water. Remember: <b>Save water today, secure our tomorrow!</b></p>
          </div>`
        },
        {
          id: "eng_essay_5",
          type: "8m",
          mark: "8 Marks",
          examTag: "Model Essay (150-180 Words)",
          isImportant: true,
          q: "Write an essay on 'Science and Technology in Everyday Life'.",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <div style="background:#f0fdf4; border-left:4px solid #16a34a; padding:10px 14px; margin-bottom:12px; border-radius:4px;">
              <b>Outline:</b> Introduction – Science in Daily Life – In Education and Health – Disadvantages – Conclusion.
            </div>
            <p><b>Introduction:</b><br>
            We live in the age of science and technology. Modern life without science is impossible. <b>Dr. A. P. J. Abdul Kalam</b> said, <i>"Science is a beautiful gift to humanity; we should not distort it."</i></p>

            <p><b>Science in Daily Life:</b><br>
            Science has made our life easy, comfortable, and fast. In the morning, we use electric lights, fans, and gas stoves. Buses, trains, and aeroplanes help us travel long distances quickly. Mobile phones and the internet help us talk to friends anywhere in the world.</p>

            <p><b>In Education and Health:</b><br>
            In schools, students learn through computers, tablets, and smart classrooms. In hospitals, modern machines and medicines cure dangerous diseases and save many human lives.</p>

            <p><b>Disadvantages of Technology:</b><br>
            Too much use of mobile phones and video games spoils students' eyes and study time. People sit in one place and become lazy. Pollution and harmful weapons are also bad effects of misusing science.</p>

            <p><b>Conclusion:</b><br>
            Science is a good servant, but a bad master. We must use science and technology only for good purposes and for the growth of our nation.</p>
          </div>`
        },
        {
          id: "eng_essay_6",
          type: "8m",
          mark: "8 Marks",
          examTag: "Model Essay (150-180 Words)",
          isImportant: true,
          q: "Write an essay on 'The Importance of Discipline in Student Life'.",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <div style="background:#f0fdf4; border-left:4px solid #16a34a; padding:10px 14px; margin-bottom:12px; border-radius:4px;">
              <b>Outline:</b> Introduction – What is Discipline – Discipline in School – Benefits of Discipline – Conclusion.
            </div>
            <p><b>Introduction:</b><br>
            Discipline is the secret of success in life. It means following good rules and behaving in a proper manner. As <b>Jim Rohn</b> said, <i>"Discipline is the bridge between goals and accomplishment."</i></p>

            <p><b>What is Discipline:</b><br>
            Discipline is self-control. In nature, everything follows discipline. The sun rises in the east every day, and seasons change at the right time. In the same way, human beings must live a disciplined life.</p>

            <p><b>Discipline in School:</b><br>
            For students, discipline is very important. A disciplined student comes to school on time, wears a clean uniform, listens to teachers, and completes homework daily. Good manners like saying "Thank you" and "Please" show good discipline.</p>

            <p><b>Benefits of Discipline:</b><br>
            Discipline helps students to manage their time well. It builds good character, self-confidence, and leadership qualities. Great leaders, scientists, and sports stars became famous only through strong discipline.</p>

            <p><b>Conclusion:</b><br>
            A student without discipline is like a kite without a thread. Discipline guides us to achieve high marks and reach our life goals.</p>
          </div>`
        },
        {
          id: "eng_essay_7",
          type: "8m",
          mark: "8 Marks",
          examTag: "Model Essay (150-180 Words)",
          isImportant: true,
          q: "Write an essay on 'The Importance of Sports and Games'.",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <div style="background:#f0fdf4; border-left:4px solid #16a34a; padding:10px 14px; margin-bottom:12px; border-radius:4px;">
              <b>Outline:</b> Introduction – Good for Physical Health – Mental Fitness – Teamwork and Sportsmanship – Conclusion.
            </div>
            <p><b>Introduction:</b><br>
            Sports and games are an important part of school life. Education is incomplete without sports. An old proverb says, <i>"A sound mind in a sound body."</i></p>

            <p><b>Good for Physical Health:</b><br>
            Playing games like football, cricket, volleyball, and running keeps our body active and strong. It improves blood circulation and keeps our heart healthy. It helps children grow tall and stops unnecessary weight gain.</p>

            <p><b>Mental Fitness:</b><br>
            After studying for many hours, students feel tired. Playing games for one hour in the evening refreshes the mind and removes exam stress. It helps students sleep well and concentrate better on their studies.</p>

            <p><b>Teamwork and Sportsmanship:</b><br>
            Games teach us unity, obedience, and teamwork. A player learns to accept both victory and defeat with a smile. Defeat in a game teaches us how to try again and win next time.</p>

            <p><b>Conclusion:</b><br>
            <i>"All work and no play makes Jack a dull boy."</i> Every student should play at least one outdoor game daily. Sports make us healthy, happy, and active citizens.</p>
          </div>`
        },
        {
          id: "eng_essay_8",
          type: "8m",
          mark: "8 Marks",
          examTag: "Model Essay (150-180 Words)",
          isImportant: true,
          q: "Write an essay on 'My Aim in Life' (To Become a Dedicated Teacher).",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <div style="background:#f0fdf4; border-left:4px solid #16a34a; padding:10px 14px; margin-bottom:12px; border-radius:4px;">
              <b>Outline:</b> Introduction – My Goal – Why I Chose This Aim – How I Prepare – Conclusion.
            </div>
            <p><b>Introduction:</b><br>
            Everyone must have a good aim in life. A life without an aim is like a ship without a direction. A clear aim helps us to work hard and succeed.</p>

            <p><b>My Goal:</b><br>
            My aim in life is to become a dedicated teacher. Teaching is a noble profession. Teachers build the future of our country by educating young children.</p>

            <p><b>Why I Chose This Aim:</b><br>
            In many villages, poor children do not get good teaching. I want to teach in a government school in a rural area. I want to help slow learners, remove their fear of exams, and teach them good values and English skills.</p>

            <p><b>How I Prepare:</b><br>
            To achieve my dream, I study my lessons with great interest. I read good English books and practice speaking in front of my classmates. I respect my teachers and observe how they explain difficult topics with love and patience.</p>

            <p><b>Conclusion:</b><br>
            A good teacher is like a candle; it burns itself to give light to others. I will work hard to become a great teacher and serve my nation with pride.</p>
          </div>`
        },
        {
          id: "eng_essay_9",
          type: "8m",
          mark: "8 Marks",
          examTag: "Model Essay (150-180 Words)",
          isImportant: true,
          q: "Write an essay on 'The Importance of Reading Books'.",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <div style="background:#f0fdf4; border-left:4px solid #16a34a; padding:10px 14px; margin-bottom:12px; border-radius:4px;">
              <b>Outline:</b> Introduction – Books are Best Friends – Increases Knowledge – Improves English Skills – Conclusion.
            </div>
            <p><b>Introduction:</b><br>
            Reading is a wonderful habit. Books are our truest friends and best guides. Francis Bacon said, <i>"Reading makes a full man."</i> Another famous quote says, <i>"A room without books is like a body without a soul."</i></p>

            <p><b>Books are Best Friends:</b><br>
            Friends may leave us in difficult times, but good books always stay with us. Whenever we feel lonely or sad, reading an inspiring story cheers up our heart and gives us peace.</p>

            <p><b>Increases Knowledge:</b><br>
            Books give us knowledge about history, science, geography, and great leaders. By reading books sitting at home, we can learn about people and cultures all over the world.</p>

            <p><b>Improves English Skills:</b><br>
            Reading English storybooks, newspapers, and biographies helps students to learn new words. It improves our grammar, spelling, and essay writing skills. It also keeps us away from too much mobile screen time.</p>

            <p><b>Conclusion:</b><br>
            We must spend at least 30 minutes every day reading good books. Let us build a small library in our homes and develop the habit of reading from childhood.</p>
          </div>`
        },
        {
          id: "eng_essay_10",
          type: "8m",
          mark: "8 Marks",
          examTag: "Model Essay (150-180 Words)",
          isImportant: true,
          q: "Write an essay on 'The Uses and Abuses of Mobile Phones'.",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <div style="background:#f0fdf4; border-left:4px solid #16a34a; padding:10px 14px; margin-bottom:12px; border-radius:4px;">
              <b>Outline:</b> Introduction – Useful Sides – Harmful Sides – Impact on Health – Conclusion.
            </div>
            <p><b>Introduction:</b><br>
            The mobile phone is a great invention of modern science. Today, almost every person has a smartphone. It has made communication very quick and easy. But it has both good and bad sides.</p>

            <p><b>Useful Sides:</b><br>
            Mobile phones help us to connect with our family and friends in seconds. For students, it is useful for online classes, educational videos, dictionary apps, and learning new lessons. In times of emergency, we can call police or ambulance immediately.</p>

            <p><b>Harmful Sides:</b><br>
            Many students spend hours playing online games and scrolling videos. They waste their precious study time and do not talk with their parents. Some people use mobile phones while driving, which leads to road accidents.</p>

            <p><b>Impact on Health:</b><br>
            Looking at bright screens for a long time causes eye pain, headache, and sleeplessness. Lack of physical play makes children weak and unhealthy.</p>

            <p><b>Conclusion:</b><br>
            A mobile phone is a useful tool. It is like fire; if we use it carefully, it helps us; if we misuse it, it burns our hand. Students must use mobile phones only for learning with parents' guidance.</p>
          </div>`
        }
      ]
    },
    {
      id: "sec_eng_essay_practice",
      title: "10 Practice Essay Topics with Outlines & Simple Quotes",
      author: "Samacheer Kalvi 10th English Guide",
      questions: [
        {
          id: "eng_essay_practice_list",
          type: "tips",
          mark: "Practice Topics",
          examTag: "10 Practice Topics with Hints",
          isImportant: false,
          q: "10 Important Essay Practice Topics for Self-Study (With Simple Outlines & Quotes)",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <p>Practice writing 150–180 words on these important topics using simple words and clear headings:</p>
            <ol style="padding-left:20px;">
              <li style="margin-bottom:10px;"><b>Cleanliness is Next to Godliness (Swachh Bharat):</b><br>
              <i>Outline:</i> Meaning of cleanliness – Keeping home and school clean – Washing hands – Swachh Bharat mission – Conclusion.<br>
              <i>Quote:</i> "Cleanliness is next to godliness." - Mahatma Gandhi.</li>

              <li style="margin-bottom:10px;"><b>The Value of Time (Time and Tide Wait for None):</b><br>
              <i>Outline:</i> Importance of time – Lost money can be earned back, lost time never – Student timetable – Punctuality – Conclusion.<br>
              <i>Quote:</i> "Time and tide wait for no man."</li>

              <li style="margin-bottom:10px;"><b>Impact of Social Media on Students:</b><br>
              <i>Outline:</i> What is social media – Good uses for learning – Bad effects of video addiction – Advice for students – Conclusion.<br>
              <i>Quote:</i> "Use technology to learn, not to waste time."</li>

              <li style="margin-bottom:10px;"><b>Road Safety and Traffic Rules:</b><br>
              <i>Outline:</i> Need for road safety – Wearing helmets and seatbelts – Following traffic lights – Avoiding mobile phones while driving – Conclusion.<br>
              <i>Quote:</i> "Alert today, alive tomorrow."</li>

              <li style="margin-bottom:10px;"><b>Yoga for Healthy Living:</b><br>
              <i>Outline:</i> Ancient Indian practice – Simple asanas and breathing exercise – Removes exam fear – Keeps body active – Conclusion.<br>
              <i>Quote:</i> "Health is wealth, peace of mind is happiness."</li>

              <li style="margin-bottom:10px;"><b>Save Wild Animals:</b><br>
              <i>Outline:</i> Animals in nature – Forest animals like tigers and elephants – Stopping illegal hunting – Protecting forests – Conclusion.<br>
              <i>Quote:</i> "Animals have the right to live safely on earth."</li>

              <li style="margin-bottom:10px;"><b>My Grandparents:</b><br>
              <i>Outline:</i> Love of grandparents – Bedtime stories – Teaching good manners – Respecting elderly people – Conclusion.<br>
              <i>Quote:</i> "Old people are the blessing of every home."</li>

              <li style="margin-bottom:10px;"><b>My Favourite Book:</b><br>
              <i>Outline:</i> Name of book and author – Simple story – What I learned from it – Why I like it – Conclusion.<br>
              <i>Quote:</i> "Books are our best friends."</li>

              <li style="margin-bottom:10px;"><b>If I Were the Prime Minister:</b><br>
              <i>Outline:</i> Service to country – Free and quality education for all children – Helping poor farmers – Clean India – Conclusion.<br>
              <i>Quote:</i> "Service to people is service to God."</li>

              <li style="margin-bottom:10px;"><b>A Memorable School Tour:</b><br>
              <i>Outline:</i> Place visited – Journey by bus – Seeing historical places – Fun with friends and teachers – Conclusion.<br>
              <i>Quote:</i> "Travel gives us joy and new knowledge."</li>
            </ol>
          </div>`
        }
      ]
    }
  ]
};

// =======================================================================
// 2. LETTER WRITING DATA (Formal & Informal - 5 Mark Format)
// =======================================================================
const ENGLISH_LETTERS_DATA = {
  unit: "Letters",
  title: "English Letter Writing: Formal & Informal Letters (10 Models & 20 Practice)",
  stories: [],
  subSections: [
    {
      id: "sec_eng_fl",
      title: "Part 1: Formal Letters (Official 5-Mark Format + 6 Model Letters)",
      author: "Samacheer Kalvi 10th English Guide",
      questions: [
        {
          id: "eng_letter_fmt",
          type: "tips",
          mark: "Format Guide",
          examTag: "5-Mark Official Format",
          isImportant: true,
          q: "What is the standard 5-mark format for Formal Letter Writing in Tamil Nadu Public Exams?",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <div style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin-bottom:14px; border-radius:4px;">
              <h4 style="margin:0 0 6px 0; color:#1d4ed8;">Official 5-Mark Distribution Scheme:</h4>
              <ul style="margin:0; padding-left:20px;">
                <li><b>From address & Date:</b> 1 Mark</li>
                <li><b>To address & Salutation / Subject:</b> 1 Mark</li>
                <li><b>Body of the Letter (3 simple paragraphs):</b> 2 Marks</li>
                <li><b>Subscription (Yours faithfully) & Address on Envelope:</b> 1 Mark</li>
              </ul>
            </div>

            <div style="border:1px dashed #64748b; padding:16px; border-radius:6px; background:#f8fafc; font-family:monospace;">
              <b>From</b><br>
              &nbsp;&nbsp;[Sender's Name],<br>
              &nbsp;&nbsp;[Door No., Street Name],<br>
              &nbsp;&nbsp;[City / Town - Pincode].<br><br>
              
              [Date: 16 March 2026]<br><br>

              <b>To</b><br>
              &nbsp;&nbsp;[The Editor / The Municipal Commissioner / The Headmaster],<br>
              &nbsp;&nbsp;[Office / School Name],<br>
              &nbsp;&nbsp;[City / Town - Pincode].<br><br>

              <b>Respected Sir / Madam,</b><br><br>

              &nbsp;&nbsp;<b>Sub:</b> [One simple line about the problem or request] - Reg.<br><br>

              &nbsp;&nbsp;<b>Paragraph 1:</b> State who you are and why you are writing.<br><br>
              &nbsp;&nbsp;<b>Paragraph 2:</b> Explain the problem clearly in simple sentences.<br><br>
              &nbsp;&nbsp;<b>Paragraph 3:</b> Request the officer to take action quickly.<br><br>

              Thanking you,<br><br>

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Yours faithfully,</b><br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Your Name]<br><br>

              <b>Address on the Envelope:</b><br>
              &nbsp;&nbsp;To<br>
              &nbsp;&nbsp;[Official's Name / Title and Full Office Address with Pincode]
            </div>
          </div>`
        },
        {
          id: "eng_fl_1",
          type: "5m",
          mark: "5 Marks",
          examTag: "Model Letter (Editor)",
          isImportant: true,
          q: "Write a letter to the Editor of a newspaper about the bad condition of roads and broken street lights in your locality.",
          ans: `<div style="line-height:1.7; font-size:15px; border:1px solid #e2e8f0; padding:16px; border-radius:6px; background:#fff;">
            <b>From</b><br>
            S. Arun,<br>
            12, Gandhi Street,<br>
            Salem – 636 007.<br><br>

            16 March 2026<br><br>

            <b>To</b><br>
            The Editor,<br>
            The Hindu Daily,<br>
            Salem – 636 001.<br><br>

            <b>Respected Sir,</b><br><br>

            <b>Sub:</b> Bad condition of roads and street lights in Gandhi Street – Reg.<br><br>

            Through the columns of your esteemed newspaper, I wish to bring the bad condition of roads in our area to the notice of the authorities.<br><br>

            The roads in our locality are full of big pits and holes. During rainy days, water stagnates in these holes. Two-wheeler riders slip and fall down. School children find it very hard to walk safely. To make matters worse, street lights are not working for the past one month. The whole street is completely dark at night.<br><br>

            Though we complained to the local ward office, no action has been taken so far. I request the concerned authorities to repair the roads and fix the street lights immediately.<br><br>

            Thanking you,<br><br>

            <div style="text-align:right;">
              Yours faithfully,<br>
              <b>S. Arun</b>
            </div><br>

            <div style="border:1px solid #94a3b8; padding:8px 12px; width:260px; border-radius:4px; background:#f8fafc;">
              <b>Address on the Envelope:</b><br>
              To<br>
              The Editor,<br>
              The Hindu Daily,<br>
              Cherry Road, Salem – 636 001.
            </div>
          </div>`
        },
        {
          id: "eng_fl_2",
          type: "5m",
          mark: "5 Marks",
          examTag: "Model Letter (Municipal Official)",
          isImportant: true,
          q: "Write a letter to the Municipal Commissioner complaining about the irregular clearance of garbage in your area.",
          ans: `<div style="line-height:1.7; font-size:15px; border:1px solid #e2e8f0; padding:16px; border-radius:6px; background:#fff;">
            <b>From</b><br>
            K. Meena,<br>
            25, Kamarajar Street, Anna Nagar,<br>
            Madurai – 625 020.<br><br>

            16 March 2026<br><br>

            <b>To</b><br>
            The Commissioner,<br>
            Madurai Municipal Corporation,<br>
            Madurai – 625 002.<br><br>

            <b>Respected Sir,</b><br><br>

            <b>Sub:</b> Irregular clearance of garbage in Anna Nagar – Reg.<br><br>

            I am a resident of Anna Nagar. I am writing this letter to bring to your kind notice the poor garbage clearance in our area.<br><br>

            For the past ten days, sanitary workers have not come to clear the garbage. The public dustbins are overflowing with waste. The rotten waste gives out a very bad smell. Stray dogs and cows scatter the waste all over the road. Mosquitoes and flies are breeding fast, which may cause dengue and malaria among children.<br><br>

            I kindly request you to order the daily clearance of garbage and arrange for spraying medicine in our street immediately.<br><br>

            Thanking you,<br><br>

            <div style="text-align:right;">
              Yours faithfully,<br>
              <b>K. Meena</b>
            </div><br>

            <div style="border:1px solid #94a3b8; padding:8px 12px; width:260px; border-radius:4px; background:#f8fafc;">
              <b>Address on the Envelope:</b><br>
              To<br>
              The Commissioner,<br>
              Corporation of Madurai,<br>
              Anna Maligai, Madurai – 625 002.
            </div>
          </div>`
        },
        {
          id: "eng_fl_3",
          type: "5m",
          mark: "5 Marks",
          examTag: "Model Letter (Headmaster)",
          isImportant: true,
          q: "Write a letter to the Headmaster of your school requesting more reference books and English storybooks for the school library.",
          ans: `<div style="line-height:1.7; font-size:15px; border:1px solid #e2e8f0; padding:16px; border-radius:6px; background:#fff;">
            <b>From</b><br>
            R. Vignesh,<br>
            Class X - 'B', School Pupil Leader,<br>
            Government Higher Secondary School,<br>
            Trichy – 620 005.<br><br>

            16 March 2026<br><br>

            <b>To</b><br>
            The Headmaster,<br>
            Government Higher Secondary School,<br>
            Trichy – 620 005.<br><br>

            <b>Respected Sir,</b><br><br>

            <b>Sub:</b> Request for more books for the school library – Reg.<br><br>

            On behalf of all Standard X students, I submit this letter regarding our school library.<br><br>

            Our Board Public Examinations are coming soon. We need more question banks and reference books for Maths and Science. Also, many students want to improve their English reading and speaking skills. But we have only a few English storybooks and grammar guides in our library.<br><br>

            We kindly request you to buy more study guides and interesting English storybooks for our school library. It will help us score high marks in the public exams.<br><br>

            Thanking you,<br><br>

            <div style="text-align:right;">
              Yours obediently,<br>
              <b>R. Vignesh</b><br>
              (School Pupil Leader)
            </div><br>

            <div style="border:1px solid #94a3b8; padding:8px 12px; width:260px; border-radius:4px; background:#f8fafc;">
              <b>Address on the Envelope:</b><br>
              To<br>
              The Headmaster,<br>
              Govt. Higher Secondary School,<br>
              K.K. Nagar, Trichy – 620 005.
            </div>
          </div>`
        },
        {
          id: "eng_fl_4",
          type: "5m",
          mark: "5 Marks",
          examTag: "Model Letter (Ordering Goods)",
          isImportant: true,
          q: "Write a letter to a publisher ordering 50 copies of English-English-Tamil Dictionaries for your school library.",
          ans: `<div style="line-height:1.7; font-size:15px; border:1px solid #e2e8f0; padding:16px; border-radius:6px; background:#fff;">
            <b>From</b><br>
            The School Librarian,<br>
            Government Model Higher Secondary School,<br>
            Thiruvallur – 602 001.<br><br>

            16 March 2026<br><br>

            <b>To</b><br>
            The Sales Manager,<br>
            Oxford Book House,<br>
            Mount Road, Chennai – 600 002.<br><br>

            <b>Sir,</b><br><br>

            <b>Sub:</b> Order for 50 copies of English-English-Tamil Dictionaries – Reg.<br><br>

            We wish to place an order for 50 copies of your latest edition of <b>'Oxford English-English-Tamil Dictionary'</b> for our school library.<br><br>

            Please ensure that all copies are in good condition without any torn or missing pages. Since we are a government school, kindly give us the usual 20% school discount.<br><br>

            Please pack the books carefully and send them by parcel service within one week. We will send the payment through Demand Draft immediately after receiving the books.<br><br>

            Thanking you,<br><br>

            <div style="text-align:right;">
              Yours faithfully,<br>
              <b>P. Selvaraj</b><br>
              (Librarian)
            </div><br>

            <div style="border:1px solid #94a3b8; padding:8px 12px; width:260px; border-radius:4px; background:#f8fafc;">
              <b>Address on the Envelope:</b><br>
              To<br>
              The Sales Manager,<br>
              Oxford Book House,<br>
              Mount Road, Chennai – 600 002.
            </div>
          </div>`
        },
        {
          id: "eng_fl_5",
          type: "5m",
          mark: "5 Marks",
          examTag: "Model Letter (Product Complaint)",
          isImportant: true,
          q: "Write a letter to the store manager complaining about a defective mobile phone / tablet purchased recently and requesting replacement.",
          ans: `<div style="line-height:1.7; font-size:15px; border:1px solid #e2e8f0; padding:16px; border-radius:6px; background:#fff;">
            <b>From</b><br>
            M. Karthik,<br>
            18, Cross Cut Road,<br>
            Coimbatore – 641 012.<br><br>

            16 March 2026<br><br>

            <b>To</b><br>
            The Store Manager,<br>
            Supreme Mobiles & Electronics,<br>
            DB Road, Coimbatore – 641 002.<br><br>

            <b>Sir,</b><br><br>

            <b>Sub:</b> Defective Samsung Tablet (Bill No. 4582) – Replacement requested – Reg.<br><br>

            I bought a Samsung Galaxy Tablet from your shop on 5th March 2026 vide Bill No. 4582. A copy of the bill is enclosed with this letter.<br><br>

            The tablet worked well for only three days. Now the display screen flickers continuously and gets switched off suddenly. Also, the battery drains within one hour of use. When I put the charger, the tablet gets very hot.<br><br>

            The product has a one-year warranty. Therefore, I request you to replace the defective tablet with a new one or refund my money soon.<br><br>

            Thanking you,<br><br>

            <div style="text-align:right;">
              Yours faithfully,<br>
              <b>M. Karthik</b>
            </div><br>

            <div style="border:1px solid #94a3b8; padding:8px 12px; width:260px; border-radius:4px; background:#f8fafc;">
              <b>Address on the Envelope:</b><br>
              To<br>
              The Store Manager,<br>
              Supreme Mobiles & Electronics,<br>
              DB Road, Coimbatore – 641 002.
            </div>
          </div>`
        },
        {
          id: "eng_fl_6",
          type: "5m",
          mark: "5 Marks",
          examTag: "Model Letter (River Pollution)",
          isImportant: true,
          q: "Write a letter to the Editor about the heavy pollution of rivers caused by factory waste and plastic garbage.",
          ans: `<div style="line-height:1.7; font-size:15px; border:1px solid #e2e8f0; padding:16px; border-radius:6px; background:#fff;">
            <b>From</b><br>
            G. Anitha,<br>
            7, Riverside Street,<br>
            Tiruchirappalli – 620 018.<br><br>

            16 March 2026<br><br>

            <b>To</b><br>
            The Editor,<br>
            Indian Express,<br>
            Trichy – 620 001.<br><br>

            <b>Respected Sir,</b><br><br>

            <b>Sub:</b> Heavy pollution of River Cauvery – Urgent action requested – Reg.<br><br>

            I wish to use the columns of your respected newspaper to highlight the serious pollution of River Cauvery in our city.<br><br>

            Cauvery is the lifeline of farmers and people in Tamil Nadu. But chemical factories are dumping dirty, untreated waste water into the river. Also, people throw plastic covers, bottles, and worship wastes into the water. The river water has turned black and smells bad. Fishes are dying, and the water is no longer safe for drinking or bathing.<br><br>

            The Pollution Control Board must take strict action against polluting factories and ban throwing plastics into rivers. We must protect our rivers for the future.<br><br>

            Thanking you,<br><br>

            <div style="text-align:right;">
              Yours faithfully,<br>
              <b>G. Anitha</b>
            </div><br>

            <div style="border:1px solid #94a3b8; padding:8px 12px; width:260px; border-radius:4px; background:#f8fafc;">
              <b>Address on the Envelope:</b><br>
              To<br>
              The Editor,<br>
              Indian Express,<br>
              Cantonment, Trichy – 620 001.
            </div>
          </div>`
        }
      ]
    },
    {
      id: "sec_eng_il",
      title: "Part 2: Informal Letters (Personal 5-Mark Format + 4 Model Letters)",
      author: "Samacheer Kalvi 10th English Guide",
      questions: [
        {
          id: "eng_il_fmt",
          type: "tips",
          mark: "Format Guide",
          examTag: "Personal Letter Format",
          isImportant: true,
          q: "What is the standard format for Informal / Personal Letter Writing in 10th Standard English?",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <div style="background:#fdf4ff; border-left:4px solid #c026d3; padding:12px 16px; margin-bottom:14px; border-radius:4px;">
              <h4 style="margin:0 0 6px 0; color:#a21caf;">Key Differences from Formal Letters:</h4>
              <ul style="margin:0; padding-left:20px;">
                <li><b>No "To" address inside the letter:</b> Only the sender's address and date are written at the top.</li>
                <li><b>No formal Subject line:</b> Go straight from friendly salutation to warm content.</li>
                <li><b>Salutation:</b> <i>Dear friend,</i> or <i>Dear Father / Mother,</i></li>
                <li><b>Subscription:</b> <i>Yours lovingly,</i> / <i>Your affectionate friend,</i></li>
                <li><b>Address on the Envelope:</b> Always draw the box at the end for 1 full mark!</li>
              </ul>
            </div>

            <div style="border:1px dashed #64748b; padding:16px; border-radius:6px; background:#f8fafc; font-family:monospace;">
              [Sender's Address: Street, City]<br>
              [Date: 16 March 2026]<br><br>

              <b>Dear [Friend's Name / Father / Mother],</b><br><br>

              &nbsp;&nbsp;<b>Paragraph 1:</b> Ask how they are and say you are doing fine.<br><br>
              &nbsp;&nbsp;<b>Paragraph 2:</b> Tell the main story, news, or invitation in simple sentences.<br><br>
              &nbsp;&nbsp;<b>Paragraph 3:</b> Send warm regards to parents and ask them to write back.<br><br>

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Yours lovingly / Your affectionate friend,</b><br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Your Name]<br><br>

              <b>Address on the Envelope:</b><br>
              To<br>
              [Recipient's Name and Complete Address with Pincode]
            </div>
          </div>`
        },
        {
          id: "eng_il_1",
          type: "5m",
          mark: "5 Marks",
          examTag: "Model Letter (Annual Day)",
          isImportant: true,
          q: "Write a letter to your friend describing your school Annual Day celebration and your prize in speech competition.",
          ans: `<div style="line-height:1.7; font-size:15px; border:1px solid #e2e8f0; padding:16px; border-radius:6px; background:#fff;">
            15, Gandhi Road,<br>
            Erode – 638 001.<br>
            16 March 2026.<br><br>

            <b>Dear Ravi,</b><br><br>

            How are you? I am fine here and studying well. I am writing this letter to tell you about our school Annual Day function held last week.<br><br>

            Our school was decorated with colourful lights and flowers. The District Collector was the Chief Guest. Our Headmaster welcomed all parents. The students performed folk dance, drama, and songs. The programmes were very entertaining.<br><br>

            I participated in the English Speech Competition and won the First Prize! The Chief Guest gave me a beautiful trophy and a certificate. I felt very happy and proud. I missed you very much on that day.<br><br>

            Please convey my regards to your parents and love to your little sister Anu. Write to me soon.<br><br>

            <div style="text-align:right;">
              Yours lovingly,<br>
              <b>K. Kumar</b>
            </div><br>

            <div style="border:1px solid #94a3b8; padding:8px 12px; width:260px; border-radius:4px; background:#f8fafc;">
              <b>Address on the Envelope:</b><br>
              To<br>
              P. Ravi,<br>
              24, V.O.C. Street,<br>
              Coimbatore – 641 001.
            </div>
          </div>`
        },
        {
          id: "eng_il_2",
          type: "5m",
          mark: "5 Marks",
          examTag: "Model Letter (Birthday Invitation)",
          isImportant: true,
          q: "Write a letter to your friend inviting him / her to your 15th Birthday celebration.",
          ans: `<div style="line-height:1.7; font-size:15px; border:1px solid #e2e8f0; padding:16px; border-radius:6px; background:#fff;">
            10, Nehru Street,<br>
            Salem – 636 016.<br>
            16 March 2026.<br><br>

            <b>Dear Mohan,</b><br><br>

            I hope you are doing well. It has been a long time since we met and played together.<br><br>

            I am very happy to invite you to my 15th birthday celebration on Tuesday, 25th March 2026. We have arranged a small party at my home at 6:00 p.m. We will have a cake cutting, fun games, and delicious dinner.<br><br>

            All our school friends are coming. The celebration will be more joyful if you are with us. Please come by 5:00 p.m. so that we can spend more time together. Bring your brother too.<br><br>

            Convey my respects to your parents. Eagerly waiting to see you on my birthday!<br><br>

            <div style="text-align:right;">
              Your affectionate friend,<br>
              <b>S. Arun</b>
            </div><br>

            <div style="border:1px solid #94a3b8; padding:8px 12px; width:260px; border-radius:4px; background:#f8fafc;">
              <b>Address on the Envelope:</b><br>
              To<br>
              R. Mohan,<br>
              45, Anna Salai,<br>
              Salem – 636 005.
            </div>
          </div>`
        },
        {
          id: "eng_il_3",
          type: "5m",
          mark: "5 Marks",
          examTag: "Model Letter (Father / Exam Prep)",
          isImportant: true,
          q: "Write a letter to your father about your preparation and study plan for the upcoming 10th Board Examinations.",
          ans: `<div style="line-height:1.7; font-size:15px; border:1px solid #e2e8f0; padding:16px; border-radius:6px; background:#fff;">
            20, School Road,<br>
            Boys Hostel, GHSS Campus,<br>
            Madurai – 625 001.<br>
            16 March 2026.<br><br>

            <b>My dear Father,</b><br><br>

            I received your kind letter. I was very happy to know that everyone at home is doing well.<br><br>

            My preparations for the 10th Board Public Exams are going on very smoothly. I wake up early at 5:00 a.m. every day and study Maths and Science. I have completed all textbook portions. Our teachers are conducting daily revision tests and helping us clear our doubts patiently.<br><br>

            In the recent revision test, I scored 482 out of 500 marks. Now I am practicing previous years' public question papers to write faster. Please do not worry about my health; I eat well and sleep on time. I will work hard and get high marks to make you proud.<br><br>

            Convey my loving regards to Mother and love to little brother Kavin.<br><br>

            <div style="text-align:right;">
              Your loving son,<br>
              <b>R. Ramesh</b>
            </div><br>

            <div style="border:1px solid #94a3b8; padding:8px 12px; width:260px; border-radius:4px; background:#f8fafc;">
              <b>Address on the Envelope:</b><br>
              To<br>
              Thiru. M. Ramasamy,<br>
              35, South Car Street, Thirumangalam,<br>
              Madurai District – 625 706.
            </div>
          </div>`
        },
        {
          id: "eng_il_4",
          type: "5m",
          mark: "5 Marks",
          examTag: "Model Letter (Educational Tour)",
          isImportant: true,
          q: "Write a letter to your friend sharing your exciting experiences during your school educational tour.",
          ans: `<div style="line-height:1.7; font-size:15px; border:1px solid #e2e8f0; padding:16px; border-radius:6px; background:#fff;">
            12, Temple Street,<br>
            Kumbakonam – 612 001.<br>
            16 March 2026.<br><br>

            <b>Dear Dinesh,</b><br><br>

            How are you? I hope you are fine. I am writing this letter to share my wonderful experience during our school educational tour to Chennai and Mahabalipuram last week.<br><br>

            We travelled by bus with our teachers. In Chennai, we visited the Government Museum, Birla Planetarium, and Marina Beach. Seeing the stars and planets in the planetarium was amazing. In the evening, we enjoyed the cool breeze at Marina Beach.<br><br>

            The best part was visiting Mahabalipuram. We saw the Shore Temple, Pancha Rathas, and Arjuna's Penance. Our teacher explained that these stone temples were carved by Pallava kings more than 1300 years ago. I learned so many new things during the trip.<br><br>

            The tour was very useful and memorable. I bought a small souvenir for you. Convey my respects to your parents.<br><br>

            <div style="text-align:right;">
              Yours affectionately,<br>
              <b>M. Praveen</b>
            </div><br>

            <div style="border:1px solid #94a3b8; padding:8px 12px; width:260px; border-radius:4px; background:#f8fafc;">
              <b>Address on the Envelope:</b><br>
              To<br>
              S. Dinesh,<br>
              18, East Coast Road,<br>
              Chennai – 600 041.
            </div>
          </div>`
        }
      ]
    },
    {
      id: "sec_eng_letter_practice",
      title: "Part 3: 20 Practice Questions (10 Formal + 10 Informal)",
      author: "Samacheer Kalvi 10th English Guide",
      questions: [
        {
          id: "eng_letter_practice_all",
          type: "tips",
          mark: "Practice Topics",
          examTag: "20 Practice Letter Questions",
          isImportant: false,
          q: "20 Important Practice Letter Topics for Public Exam Preparation",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <h4 style="color:#2563eb; margin:0 0 8px 0;">10 Formal Letter Practice Topics:</h4>
            <ol style="padding-left:20px; margin-bottom:16px;">
              <li>Letter to Health Officer requesting a free eye camp in your village.</li>
              <li>Letter to Postmaster complaining about delay in delivering letters.</li>
              <li>Letter to Electricity Board (TNEB) complaining about frequent power cuts during exam time.</li>
              <li>Letter to Editor about the dangers of using plastic bags.</li>
              <li>Letter to Headmaster requesting 3 days leave due to fever.</li>
              <li>Letter to Sports Dealer ordering cricket and football items for school.</li>
              <li>Letter to Police Station reporting the loss of your bicycle.</li>
              <li>Letter to Editor highlighting the need for wearing helmets on roads.</li>
              <li>Letter to Bank Manager asking for information about education loans.</li>
              <li>Letter to Forest Officer requesting free saplings for tree plantation in school.</li>
            </ol>

            <h4 style="color:#c026d3; margin:0 0 8px 0;">10 Informal Letter Practice Topics:</h4>
            <ol style="padding-left:20px;">
              <li>Letter to friend advising him to read English newspapers daily.</li>
              <li>Letter to father asking for ₹1,500 for exam fee and guide books.</li>
              <li>Letter to cousin congratulating him for getting school first mark.</li>
              <li>Letter to friend describing how you celebrated Pongal in your village.</li>
              <li>Letter to younger brother advising him not to eat junk food.</li>
              <li>Letter to friend inviting him to spend summer holidays in your village.</li>
              <li>Letter to uncle thanking him for the wrist watch he gave on your birthday.</li>
              <li>Letter to friend describing your visit to the Tanjore Big Temple.</li>
              <li>Letter to mother telling her about your new friends in the hostel.</li>
              <li>Letter to a sick friend wishing him a speedy recovery.</li>
            </ol>
          </div>`
        }
      ]
    }
  ]
};

// =======================================================================
// 3. WRITING GUIDELINES & SCORING RULES DATA
// =======================================================================
const ENGLISH_WRITING_GUIDE_DATA = {
  unit: "Exam Rules",
  title: "English Writing Skills: 5-Mark Letter Blueprint, 8-Mark Rules & Common Mistakes",
  stories: [],
  subSections: [
    {
      id: "sec_eng_guide_blueprint",
      title: "Part 1: Official 5-Mark Letter Writing Blueprint & Step Marks",
      author: "Samacheer Kalvi 10th English Guide",
      questions: [
        {
          id: "eng_rule_blueprint",
          type: "tips",
          mark: "Blueprint",
          examTag: "Official 5-Mark Scheme",
          isImportant: true,
          q: "How are 5 marks awarded for Letter Writing in the Tamil Nadu SSLC Board Exam?",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <p>According to the official <b>Directorate of Government Examinations (DGE)</b> blueprint, marks for Letter Writing (Question No. 43) are allotted step-by-step:</p>

            <table style="width:100%; border-collapse:collapse; margin:12px 0; background:#fff; font-size:14px;">
              <thead>
                <tr style="background:#0284c7; color:#fff; text-align:left;">
                  <th style="padding:8px 12px; border:1px solid #cbd5e1;">Component</th>
                  <th style="padding:8px 12px; border:1px solid #cbd5e1;">Formal Letter Breakdown</th>
                  <th style="padding:8px 12px; border:1px solid #cbd5e1;">Informal Letter Breakdown</th>
                  <th style="padding:8px 12px; border:1px solid #cbd5e1; text-align:center;">Marks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="padding:8px 12px; border:1px solid #cbd5e1;"><b>Sender's Info</b></td>
                  <td style="padding:8px 12px; border:1px solid #cbd5e1;">From Address & Date</td>
                  <td style="padding:8px 12px; border:1px solid #cbd5e1;">Sender Address & Date</td>
                  <td style="padding:8px 12px; border:1px solid #cbd5e1; text-align:center;"><b>1 Mark</b></td>
                </tr>
                <tr style="background:#f8fafc;">
                  <td style="padding:8px 12px; border:1px solid #cbd5e1;"><b>Recipient & Heading</b></td>
                  <td style="padding:8px 12px; border:1px solid #cbd5e1;">To Address, Salutation & Subject Line</td>
                  <td style="padding:8px 12px; border:1px solid #cbd5e1;">Friendly Salutation (Dear friend...)</td>
                  <td style="padding:8px 12px; border:1px solid #cbd5e1; text-align:center;"><b>1 Mark</b></td>
                </tr>
                <tr>
                  <td style="padding:8px 12px; border:1px solid #cbd5e1;"><b>Body Content</b></td>
                  <td style="padding:8px 12px; border:1px solid #cbd5e1;">3 Clear Paragraphs (Opening, Issue, Action)</td>
                  <td style="padding:8px 12px; border:1px solid #cbd5e1;">3 Clear Paragraphs (Warmth, Story, Close)</td>
                  <td style="padding:8px 12px; border:1px solid #cbd5e1; text-align:center;"><b>2 Marks</b></td>
                </tr>
                <tr style="background:#f8fafc;">
                  <td style="padding:8px 12px; border:1px solid #cbd5e1;"><b>Closure & Envelope</b></td>
                  <td style="padding:8px 12px; border:1px solid #cbd5e1;">Yours faithfully + Address on Envelope</td>
                  <td style="padding:8px 12px; border:1px solid #cbd5e1;">Yours lovingly + Address on Envelope</td>
                  <td style="padding:8px 12px; border:1px solid #cbd5e1; text-align:center;"><b>1 Mark</b></td>
                </tr>
                <tr style="background:#f0fdf4; font-weight:bold;">
                  <td style="padding:8px 12px; border:1px solid #cbd5e1;" colspan="3">Total Score</td>
                  <td style="padding:8px 12px; border:1px solid #cbd5e1; text-align:center; color:#16a34a;">5 Marks</td>
                </tr>
              </tbody>
            </table>

            <div style="background:#fffbeb; border-left:4px solid #f59e0b; padding:10px 14px; border-radius:4px;">
              <b>Golden Rule:</b> Never forget the <b>"Address on the Envelope"</b> box! It carries 1 full mark in the public exam answer key.
            </div>
          </div>`
        }
      ]
    },
    {
      id: "sec_eng_guide_diff",
      title: "Part 2: General Essay vs 8-Mark Hints Development Story",
      author: "Samacheer Kalvi 10th English Guide",
      questions: [
        {
          id: "eng_rule_diff",
          type: "tips",
          mark: "Comparison",
          examTag: "General Essay vs Hints Story",
          isImportant: true,
          q: "What is the key difference between General Essay Writing and 8-Mark Hints Development?",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <p>Students must know the difference between General Essay and Hints Development:</p>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin:14px 0;">
              <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:6px; padding:12px;">
                <h4 style="margin:0 0 8px 0; color:#1e40af;">General Essay Writing</h4>
                <ul style="margin:0; padding-left:18px; font-size:13.5px;">
                  <li><b>Topic type:</b> General themes (Education, Trees, Pollution, Science, Water).</li>
                  <li><b>Structure:</b> Outline, Introduction, 3-4 subheadings, conclusion, and quotation.</li>
                  <li><b>Length:</b> Approx. 150–180 words.</li>
                  <li><b>Purpose:</b> Improves paragraph writing and general English skills.</li>
                </ul>
              </div>

              <div style="background:#fdf2f8; border:1px solid #fbcfe8; border-radius:6px; padding:12px;">
                <h4 style="margin:0 0 8px 0; color:#9d174d;">8-Mark Hints Development (Q.44 / 47)</h4>
                <ul style="margin:0; padding-left:18px; font-size:13.5px;">
                  <li><b>Topic type:</b> Based on 10th Supplementary stories (The Tempest, Zigzag, Mulan, etc.) or moral tales.</li>
                  <li><b>Question form:</b> Hints separated by hyphens (e.g., <i>Prospero - Duke of Milan - island...</i>).</li>
                  <li><b>Must write:</b> Suitable Title, story paragraphs connecting ALL hints, and Moral.</li>
                  <li><b>Length:</b> Approx. 150 words.</li>
                </ul>
              </div>
            </div>
          </div>`
        }
      ]
    },
    {
      id: "sec_eng_guide_mistakes",
      title: "Part 3: Top 7 Common Mistakes to Avoid in Public Exam Writing",
      author: "Samacheer Kalvi 10th English Guide",
      questions: [
        {
          id: "eng_rule_mistakes",
          type: "tips",
          mark: "Centum Tips",
          examTag: "Top 7 Mistakes to Avoid",
          isImportant: true,
          q: "Top 7 Common Mistakes that cost marks in English Writing Tasks (And How to Avoid Them)",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <p>Students lose valuable marks because of these simple careless errors:</p>
            <ol style="padding-left:20px;">
              <li style="margin-bottom:12px;">
                <b>The Apostrophe Mistake in 'Yours':</b><br>
                <span style="color:#dc2626; font-weight:bold;">WRONG:</span> <i>Your's faithfully / Your's lovingly</i><br>
                <span style="color:#16a34a; font-weight:bold;">CORRECT:</span> <b>Yours faithfully / Yours lovingly</b> (Never use an apostrophe in 'Yours'!).
              </li>

              <li style="margin-bottom:12px;">
                <b>Capital Letter in Subscription:</b><br>
                <span style="color:#dc2626; font-weight:bold;">WRONG:</span> <i>Yours Faithfully / Yours Lovingly</i><br>
                <span style="color:#16a34a; font-weight:bold;">CORRECT:</span> <b>Yours faithfully / Yours lovingly</b> (The second word must start with a small letter 'f' or 'l').
              </li>

              <li style="margin-bottom:12px;">
                <b>Punctuation in Address:</b><br>
                Always put commas at the end of each address line, and a full stop at the end:<br>
                <i>12, Gandhi Road,</i><br><i>Salem – 636 001.</i>
              </li>

              <li style="margin-bottom:12px;">
                <b>Subject Line Position:</b><br>
                In formal letters, write <b>Respected Sir,</b> first, and write the <b>Subject line below it</b>. End it with '- Reg.'
              </li>

              <li style="margin-bottom:12px;">
                <b>Divide into Paragraphs:</b><br>
                Never write the entire letter or essay as one huge block of text! Divide into 3 clear, neat paragraphs.
              </li>

              <li style="margin-bottom:12px;">
                <b>Forgetting the Envelope Box:</b><br>
                Always draw a neat pencil box at the end with the title <b>'Address on the Envelope'</b>.
              </li>

              <li style="margin-bottom:12px;">
                <b>Simple and Clear Sentences:</b><br>
                Do not use difficult words with wrong spellings. Write simple, correct English sentences to get full 100% marks!
              </li>
            </ol>
          </div>`
        }
      ]
    }
  ]
};

// Aggregated object for backward compatibility
const ENGLISH_WRITING_DATA = {
  unit: "Writing Skills",
  title: "English Writing Skills: Essay Writing & Letter Writing (Formal & Informal)",
  stories: [],
  subSections: [
    ...ENGLISH_ESSAYS_DATA.subSections,
    ...ENGLISH_LETTERS_DATA.subSections,
    ...ENGLISH_WRITING_GUIDE_DATA.subSections
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ENGLISH_ESSAYS_DATA,
    ENGLISH_LETTERS_DATA,
    ENGLISH_WRITING_GUIDE_DATA,
    ENGLISH_WRITING_DATA
  };
}
