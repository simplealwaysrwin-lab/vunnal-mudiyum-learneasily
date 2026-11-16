/**
 * 10th Standard English - Writing Skills Question Bank & Study Guide
 * Tamil Nadu Samacheer Kalvi Syllabus - Public Exam Preparation 2026
 * 
 * Features:
 * 1. General Essay Writing (10 Complete 150-200 Word Model Essays with Headings & Quotes + 10 Practice Topics)
 * 2. Formal Letter Writing (Official 5-Mark Format + 6 Full Model Letters + 10 Practice Questions)
 * 3. Informal Letter Writing (Personal 5-Mark Format + 4 Full Model Letters + 10 Practice Questions)
 * 4. Public Exam Scoring Scheme, 5-Mark Breakdown & Common Error Checklist
 */

const ENGLISH_WRITING_DATA = {
  unit: "Writing Skills",
  title: "English Writing Skills: Essay Writing & Letter Writing (Formal & Informal)",

  stories: [],

  subSections: [
    {
      id: "sec_eng_w_1",
      title: "Part 1: General Essay Writing (10 Model Essays 150-200 Words + 10 Practice Topics)",
      author: "Samacheer Kalvi English Writing Guide",
      questions: [
        {
          id: "eng_w_e1",
          type: "8m",
          mark: "8 Marks",
          examTag: "Model Essay (150-200 Words)",
          isImportant: true,
          q: "Write an essay on 'The Importance of Education'.",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <div style="background:#f0fdf4; border-left:4px solid #16a34a; padding:10px 14px; margin-bottom:12px; border-radius:4px;">
              <b>Outline:</b> Introduction – Value of Education – Role in Society – Pathway to Success – Conclusion.
            </div>
            <p><b>Introduction:</b><br>
            Education is the most powerful instrument for human empowerment and social transformation. It is the foundation upon which nations build their future. As <b>Nelson Mandela</b> famously remarked, <i>"Education is the most powerful weapon which you can use to change the world."</i></p>

            <p><b>Value of Education:</b><br>
            Education goes beyond reading textbooks and earning grades; it enlightens the mind, develops reasoning skills, and moulds moral character. An educated individual learns to differentiate between right and wrong, overcomes superstitions, and approaches challenges with wisdom and confidence.</p>

            <p><b>Role in Society:</b><br>
            A nation's prosperity directly mirrors the literacy of its citizens. Education eradicates ignorance, poverty, and social discrimination. It equips young minds with vocational competencies and ethical leadership, enabling them to actively contribute to economic growth, health, and scientific innovation.</p>

            <p><b>Pathway to Success:</b><br>
            In today's competitive global village, higher education opens boundless doors for dignified employment. It teaches teamwork, problem-solving, and adaptability. Every child, regardless of economic background, deserves quality schooling.</p>

            <p><b>Conclusion:</b><br>
            To conclude, education is not mere preparation for life; education is life itself. Governments and communities must ensure that no child is left behind in the light of knowledge.</p>
          </div>`
        },
        {
          id: "eng_w_e2",
          type: "8m",
          mark: "8 Marks",
          examTag: "Model Essay (150-200 Words)",
          isImportant: true,
          q: "Write an essay on 'The Importance of Trees' (Save Trees, Save Earth).",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <div style="background:#f0fdf4; border-left:4px solid #16a34a; padding:10px 14px; margin-bottom:12px; border-radius:4px;">
              <b>Outline:</b> Introduction – Natural Lifeline – Environmental Protection – Dangers of Deforestation – Our Duty – Conclusion.
            </div>
            <p><b>Introduction:</b><br>
            Trees are the green lungs of Mother Earth and the greatest boon bestowed upon living beings. Without trees, terrestrial life would cease to exist. As <b>Nelson Henderson</b> wisely observed, <i>"The true meaning of life is to plant trees, under whose shade you do not expect to sit."</i></p>

            <p><b>Natural Lifeline:</b><br>
            Trees provide the vital oxygen we breathe while absorbing toxic carbon dioxide through photosynthesis. They yield delicious fruits, fragrant flowers, timber, paper, and valuable medicinal herbs. Furthermore, they provide a peaceful natural sanctuary for countless birds, mammals, and insects.</p>

            <p><b>Environmental Protection:</b><br>
            The extensive roots of trees bind topsoil firmly, preventing dangerous soil erosion and landslides during heavy downpours. By releasing water vapour through transpiration, trees induce condensation and invite cooling monsoon rains, replenishing ground aquifers.</p>

            <p><b>Dangers of Deforestation:</b><br>
            Indiscriminate clearing of forest tracts for urbanisation and industries has accelerated global warming, erratic weather patterns, and severe droughts. Melting glaciers and expanding deserts are warning signals of ecological collapse.</p>

            <p><b>Conclusion:</b><br>
            Conserving trees is an urgent planetary imperative. We must embrace nationwide afforestation drives and plant at least one sapling on our birthdays. Remember: <b>Plant a tree today for a greener tomorrow!</b></p>
          </div>`
        },
        {
          id: "eng_w_e3",
          type: "8m",
          mark: "8 Marks",
          examTag: "Model Essay (150-200 Words)",
          isImportant: true,
          q: "Write an essay on 'Environmental Pollution and Its Prevention'.",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <div style="background:#f0fdf4; border-left:4px solid #16a34a; padding:10px 14px; margin-bottom:12px; border-radius:4px;">
              <b>Outline:</b> Introduction – Major Forms of Pollution – Devastating Consequences – Remedial Measures – Conclusion.
            </div>
            <p><b>Introduction:</b><br>
            Environmental pollution has emerged as the gravest crisis threatening modern civilisation. The relentless exploitation of natural resources has contaminated air, water, and soil. <b>Marlee Matlin</b> appropriately stated, <i>"The Earth does not belong to us: we belong to the Earth."</i></p>

            <p><b>Major Forms of Pollution:</b><br>
            Industrial chimneys and automobile emissions discharge poisonous gases such as sulphur dioxide and carbon monoxide, causing widespread air pollution. Untreated chemical effluents, municipal sewage, and non-biodegradable plastics dumped into rivers trigger water contamination. Excessive chemical pesticides ruin soil fertility, while blaring horns cause distressing noise pollution.</p>

            <p><b>Devastating Consequences:</b><br>
            Pollution causes respiratory disorders, asthma, cancer, and skin ailments in humans. Acid rains and oceanic plastic waste destroy marine habitats. The greenhouse effect traps planetary heat, triggering catastrophic climatic disruptions.</p>

            <p><b>Remedial Measures:</b><br>
            We must transition towards clean renewable energy like solar and wind power. Strict industrial regulations on effluent treatment must be enforced. Citizens should reduce, reuse, and recycle plastics, utilize public transport, and participate in local tree-planting movements.</p>

            <p><b>Conclusion:</b><br>
            Nature provides enough for everyone's need, but not for everyone's greed. Let us unite to heal our fragile planet before it is too late.</p>
          </div>`
        },
        {
          id: "eng_w_e4",
          type: "8m",
          mark: "8 Marks",
          examTag: "Model Essay (150-200 Words)",
          isImportant: true,
          q: "Write an essay on 'The Importance of Water and Rainwater Harvesting'.",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <div style="background:#f0fdf4; border-left:4px solid #16a34a; padding:10px 14px; margin-bottom:12px; border-radius:4px;">
              <b>Outline:</b> Introduction – Water as Elixir of Life – Emerging Scarcity – Rainwater Harvesting – Conservation Tips – Conclusion.
            </div>
            <p><b>Introduction:</b><br>
            Water is the elixir of all earthly life. As Tamil sage <b>Thiruvalluvar</b> proclaimed in the Kural, <i>"Neerindri Amaiyadhu Ulagu"</i> (Without water, the world cannot function). Renowned poet <b>W. H. Auden</b> wrote, <i>"Thousands have lived without love, not one without water."</i></p>

            <p><b>Water as the Elixir of Life:</b><br>
            Water sustains human metabolic functions, irrigates vast agrarian fields, operates hydroelectric turbines, and supports manufacturing industries. Although water covers over seventy percent of the earth's surface, less than one percent is accessible freshwater fit for human consumption.</p>

            <p><b>Emerging Scarcity:</b><br>
            Rapid population growth, industrial pollution of rivers, and reckless groundwater depletion have plunged many towns into acute water crises. Droughts threaten crop failure and food security.</p>

            <p><b>Rainwater Harvesting (RWH):</b><br>
            Tamil Nadu leads the country in mandatory rooftop rainwater harvesting. Collecting rooftop precipitation and channelling it into percolation pits recharges the subterranean water table, prevents urban flash floods, and guarantees water security during scorching summers.</p>

            <p><b>Conclusion:</b><br>
            Every drop of water is a priceless jewel. We must turn off dripping taps, practice drip irrigation, and harvest rain diligently. <b>Save water today to secure humanity's tomorrow!</b></p>
          </div>`
        },
        {
          id: "eng_w_e5",
          type: "8m",
          mark: "8 Marks",
          examTag: "Model Essay (150-200 Words)",
          isImportant: true,
          q: "Write an essay on 'Science and Technology in Everyday Life'.",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <div style="background:#f0fdf4; border-left:4px solid #16a34a; padding:10px 14px; margin-bottom:12px; border-radius:4px;">
              <b>Outline:</b> Introduction – Transformative Innovations – Educational and Medical Milestones – Potential Pitfalls – Conclusion.
            </div>
            <p><b>Introduction:</b><br>
            We live in an exhilarating era driven by science and technology. From morning alarms to evening electric lights, scientific inventions govern every facet of modern routine. <b>Dr. A. P. J. Abdul Kalam</b> rightly asserted, <i>"Science is a beautiful gift to humanity; we should not distort it."</i></p>

            <p><b>Transformative Innovations:</b><br>
            Modern transport vehicles—bullet trains, aeroplanes, and electric cars—have shrunk planetary distances, enabling seamless travel. Telecommunication devices like smartphones and computers connect individuals across oceans in seconds via high-speed internet.</p>

            <p><b>Educational and Medical Milestones:</b><br>
            In education, digital smartboards, online libraries, and virtual classrooms have democratised learning. In healthcare, advanced surgical robotics, MRI diagnostics, life-saving vaccines, and chemotherapy have drastically reduced mortality and extended human life expectancy.</p>

            <p><b>Potential Pitfalls:</b><br>
            However, excessive dependence on gadgets fosters sedentary habits, social isolation, and cyber addictions among teenagers. Weapons of mass destruction and environmental degradation remain grave hazards when science is misused without ethical guardrails.</p>

            <p><b>Conclusion:</b><br>
            Science is an exceptionally devoted servant but a terrible master. If guided by moral wisdom, science and technology will continue to usher in peace, prosperity, and human welfare.</p>
          </div>`
        },
        {
          id: "eng_w_e6",
          type: "8m",
          mark: "8 Marks",
          examTag: "Model Essay (150-200 Words)",
          isImportant: true,
          q: "Write an essay on 'The Importance of Discipline in Student Life'.",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <div style="background:#f0fdf4; border-left:4px solid #16a34a; padding:10px 14px; margin-bottom:12px; border-radius:4px;">
              <b>Outline:</b> Introduction – True Meaning of Discipline – Discipline in School – Benefits in Daily Life – Conclusion.
            </div>
            <p><b>Introduction:</b><br>
            Discipline is the cornerstone of a triumphant and meaningful life. It represents the conscious ability to regulate one's actions, emotions, and desires in alignment with moral principles. <b>Jim Rohn</b> brilliantly proclaimed, <i>"Discipline is the bridge between goals and accomplishment."</i></p>

            <p><b>True Meaning of Discipline:</b><br>
            Discipline is not harsh punishment or suppression of freedom; rather, it is self-control and purposeful order. Just as nature adheres to steady laws—the sun rising punctually and seasons changing systematically—human lives require structured guidance to avoid chaos.</p>

            <p><b>Discipline in School:</b><br>
            For a student, discipline involves arriving at school punctually, dressing neatly in uniform, paying rapt attention in class, respecting teachers, and completing homework on time. A disciplined pupil balances study hours with recreational play effortlessly.</p>

            <p><b>Benefits in Daily Life:</b><br>
            Discipline fosters time management, perseverance, and emotional resilience. It shields young minds from harmful distractions such as substance abuse and procrastination. In sports, science, or politics, every illustrious champion attained greatness through relentless discipline.</p>

            <p><b>Conclusion:</b><br>
            Without discipline, human talent is like an unguided ship wandering aimlessly in stormy seas. Cultivating self-discipline during student days guarantees a bright, honourable, and victorious career.</p>
          </div>`
        },
        {
          id: "eng_w_e7",
          type: "8m",
          mark: "8 Marks",
          examTag: "Model Essay (150-200 Words)",
          isImportant: true,
          q: "Write an essay on 'The Importance of Sports and Games'.",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <div style="background:#f0fdf4; border-left:4px solid #16a34a; padding:10px 14px; margin-bottom:12px; border-radius:4px;">
              <b>Outline:</b> Introduction – Physical Health – Mental Alertness – Moral and Social Virtues – Balanced Routine – Conclusion.
            </div>
            <p><b>Introduction:</b><br>
            Sports and games are an indispensable part of comprehensive education. They ensure bodily stamina, mental agility, and character development. The timeless Latin proverb reminds us: <i>"Mens sana in corpore sano"</i>—<b>A sound mind resides in a sound body.</b></p>

            <p><b>Physical Health:</b><br>
            Regular participation in outdoor sports like football, cricket, running, and swimming strengthens cardiac muscles, enhances lung capacity, burns excess calories, and prevents childhood obesity. It keeps the body energetic and agile.</p>

            <p><b>Mental Alertness:</b><br>
            Physical exercise stimulates the secretion of endorphins, relieving academic stress and anxiety. Active sportspersons possess sharpened reflexes, superior memory concentration, and quick decision-making under high pressure.</p>

            <p><b>Moral and Social Virtues:</b><br>
            Playgrounds impart invaluable life lessons that textbooks cannot convey. Games teach teamwork, mutual cooperation, and leadership. Crucially, a player learns sportsmanship—how to celebrate victory with humility and embrace defeat with graceful determination to improve.</p>

            <p><b>Conclusion:</b><br>
            As the adage goes, <i>"All work and no play makes Jack a dull boy."</i> Schools and parents must inspire every child to step onto the playground daily. Sports nurture healthy citizens who build a vibrant nation.</p>
          </div>`
        },
        {
          id: "eng_w_e8",
          type: "8m",
          mark: "8 Marks",
          examTag: "Model Essay (150-200 Words)",
          isImportant: true,
          q: "Write an essay on 'My Aim in Life' (To Become a Dedicated Teacher / Doctor).",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <div style="background:#f0fdf4; border-left:4px solid #16a34a; padding:10px 14px; margin-bottom:12px; border-radius:4px;">
              <b>Outline:</b> Introduction – Why an Aim is Essential – My Chosen Goal – Reason for Choice – Preparation Strategy – Conclusion.
            </div>
            <p><b>Introduction:</b><br>
            A life without a definite purpose is like a ship without a rudder, tossed helplessly by every passing wave. Setting a noble goal inspires youth to channel their energies productively. <b>J. Howes</b> observed, <i>"Aim at the sun, and you may not reach it; but your arrow will fly far higher than if aimed at an object on a level with yourself."</i></p>

            <p><b>My Chosen Goal:</b><br>
            My cherished ambition is to become a dedicated secondary school teacher. Teaching is the noblest profession because it nurtures and shapes all other professions—from doctors and scientists to honest administrators.</p>

            <p><b>Reason for Choice:</b><br>
            In many rural hamlets of Tamil Nadu, underprivileged children lack access to inspiring educators and modern educational methodologies. I yearn to light the lamp of literacy in those remote pockets, spark curiosity in young hearts, and mentor students to achieve their dreams with unwavering self-belief.</p>

            <p><b>Preparation Strategy:</b><br>
            To realise this ambition, I study my school lessons diligently, read widely beyond the syllabus, and hone my public communication skills. I treat my current teachers with immense veneration and observe their empathetic pedagogical styles.</p>

            <p><b>Conclusion:</b><br>
            Teaching is not merely a career for livelihood; it is a sacred mission to sculpt the architects of tomorrow's world. I shall labour wholeheartedly to become an exemplary educator.</p>
          </div>`
        },
        {
          id: "eng_w_e9",
          type: "8m",
          mark: "8 Marks",
          examTag: "Model Essay (150-200 Words)",
          isImportant: true,
          q: "Write an essay on 'The Importance of Reading Books'.",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <div style="background:#f0fdf4; border-left:4px solid #16a34a; padding:10px 14px; margin-bottom:12px; border-radius:4px;">
              <b>Outline:</b> Introduction – Books as Lifelong Companions – Treasure of Wisdom – Language and Imagination – Antidote to Screen Addiction – Conclusion.
            </div>
            <p><b>Introduction:</b><br>
            Reading is to the mind what physical exercise is to the human body. Books are timeless vessels of intellect, carrying humanity's deepest thoughts and discoveries across generations. Roman orator <b>Marcus Tullius Cicero</b> declared, <i>"A room without books is like a body without a soul."</i></p>

            <p><b>Books as Lifelong Companions:</b><br>
            Unlike fickle acquaintances, good books are loyal companions that never desert us in times of sorrow or loneliness. They comfort troubled spirits, offer sound counsel, and broaden mental horizons without demanding anything in return.</p>

            <p><b>Language and Imagination:</b><br>
            Regular reading enriches vocabulary, improves grammatical precision, and cultivates eloquent writing prowess. Reading historical epics, scientific explorations, and classic fiction transports readers across foreign lands and eras, igniting creative imagination.</p>

            <p><b>Antidote to Screen Addiction:</b><br>
            In modern society, teenagers squander precious hours mindlessly scrolling social media feeds, resulting in shallow attention spans. Cultivating an immersive reading habit restores calm mental focus, reduces anxiety, and deepens empathy.</p>

            <p><b>Conclusion:</b><br>
            Sir Francis Bacon memorably stated: <i>"Reading maketh a full man."</i> Let us build personal home libraries and dedicate at least thirty minutes each day to good books.</p>
          </div>`
        },
        {
          id: "eng_w_e10",
          type: "8m",
          mark: "8 Marks",
          examTag: "Model Essay (150-200 Words)",
          isImportant: true,
          q: "Write an essay on 'The Uses and Abuses of Mobile Phones'.",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <div style="background:#f0fdf4; border-left:4px solid #16a34a; padding:10px 14px; margin-bottom:12px; border-radius:4px;">
              <b>Outline:</b> Introduction – Invaluable Benefits – Alarming Abuses – Health and Social Impacts – Wise Usage – Conclusion.
            </div>
            <p><b>Introduction:</b><br>
            The mobile phone is undoubtedly the most revolutionary technological breakthrough of our century. It has converted our vast globe into an interconnected digital palmtop. <b>Christian Lous Lange</b> wisely cautioned, <i>"Technology is a useful servant but a dangerous master."</i></p>

            <p><b>Invaluable Benefits:</b><br>
            Smartphones enable instantaneous voice calls, video meetings, and text correspondence worldwide. For students, mobile phones provide access to digital dictionaries, instructional YouTube lectures, e-textbooks, and educational apps. In emergencies, mobile navigation and instant SOS calls save precious human lives.</p>

            <p><b>Alarming Abuses:</b><br>
            Unfortunately, the reckless misuse of smartphones has sparked grave societal concerns. Adolescents fall prey to addictive online video gaming, cyberbullying, and fake news circulation. Excessive screen exposure late at night induces insomnia, severe eye strain, and poor academic concentration.</p>

            <p><b>Health and Social Impacts:</b><br>
            Smartphones have eroded face-to-face family conversations. Even when seated at the dinner table, people remain engrossed in their screens, leading to emotional detachment. Furthermore, texting while driving causes catastrophic traffic collisions.</p>

            <p><b>Conclusion:</b><br>
            A mobile phone is simply an instrument. Whether it proves a blessing or a curse depends squarely upon how responsibly we wield it. We must prioritize real human relationships over virtual likes.</p>
          </div>`
        },
        {
          id: "eng_w_e11",
          type: "tips",
          mark: "Practice Topics",
          examTag: "10 Practice Essay Topics with Outlines",
          isImportant: false,
          q: "10 Important Essay Practice Topics for Self-Study (With Hints & Quotes)",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <p>Practice writing 150–200 words on these high-probability topics following the <b>Introduction – 3 Subheadings – Quote – Conclusion</b> model:</p>
            <ol style="padding-left:20px;">
              <li style="margin-bottom:10px;"><b>Cleanliness is Next to Godliness (Swachh Bharat):</b><br>
              <i>Hints:</i> Meaning of sanitation – Personal vs public hygiene – Gandhi's vision – Eradication of diseases – Youth's duty.<br>
              <i>Quote:</i> "Cleanliness is next to godliness." - Mahatma Gandhi.</li>

              <li style="margin-bottom:10px;"><b>The Value of Time (Time and Tide Wait for None):</b><br>
              <i>Hints:</i> Punctuality – Lost wealth can be regained, lost time never – Student timetable – Procrastination as thief of time.<br>
              <i>Quote:</i> "Time and tide wait for no man."</li>

              <li style="margin-bottom:10px;"><b>Impact of Social Media on School Students:</b><br>
              <i>Hints:</i> Connectivity vs distraction – Information sharing vs cyber threats – Mental health and peer pressure – Balanced approach.<br>
              <i>Quote:</i> "Don't use social media to impress people; use it to impact people."</li>

              <li style="margin-bottom:10px;"><b>Road Safety and Traffic Awareness:</b><br>
              <i>Hints:</i> Rising road accidents – Importance of helmets and seatbelts – Following signals – Dangers of rash driving and mobile usage while driving.<br>
              <i>Quote:</i> "Alert today, alive tomorrow."</li>

              <li style="margin-bottom:10px;"><b>Yoga for Healthy Living:</b><br>
              <i>Hints:</i> Ancient Indian heritage – Physical postures (Asanas) and breath control (Pranayama) – Stress reduction – Global recognition (International Yoga Day).<br>
              <i>Quote:</i> "Yoga is the journey of the self, through the self, to the self." - The Bhagavad Gita.</li>

              <li style="margin-bottom:10px;"><b>Protection of Wildlife and Endangered Species:</b><br>
              <i>Hints:</i> Ecological food chain – Poaching and habitat loss – Project Tiger – Biodiversity preservation – Human survival.<br>
              <i>Quote:</i> "The greatness of a nation can be judged by how its animals are treated." - Mahatma Gandhi.</li>

              <li style="margin-bottom:10px;"><b>My Grandparents / Respect for Senior Citizens:</b><br>
              <i>Hints:</i> Love and bedtime stories – Moral values instilled – Plight of old-age homes – Gratitude and care.<br>
              <i>Quote:</i> "Grandparents are a delightful blend of laughter, caring deeds, and wonderful stories."</li>

              <li style="margin-bottom:10px;"><b>My Favourite Book:</b><br>
              <i>Hints:</i> Title and author – Core plot and memorable characters – Moral message – Personal inspiration derived.<br>
              <i>Quote:</i> "There is no friend as loyal as a book." - Ernest Hemingway.</li>

              <li style="margin-bottom:10px;"><b>If I Were the Prime Minister of India:</b><br>
              <i>Hints:</i> Patriotism – Priority for free education and health – Farmers' welfare – Eradication of corruption and poverty – Scientific leadership.<br>
              <i>Quote:</i> "Service to humanity is service to God."</li>

              <li style="margin-bottom:10px;"><b>A Memorable Journey / School Excursion:</b><br>
              <i>Hints:</i> Destination and companions – Scenic beauty – Historical learning – Fun and camaraderie – Cherished lifelong memories.<br>
              <i>Quote:</i> "Travel makes one modest; you see what a tiny place you occupy in the world." - Gustave Flaubert.</li>
            </ol>
          </div>`
        }
      ]
    },
    {
      id: "sec_eng_w_2",
      title: "Part 2: Formal Letter Writing (Official 5-Mark Format + 6 Model Letters + 10 Practice Questions)",
      author: "Samacheer Kalvi English Writing Guide",
      questions: [
        {
          id: "eng_w_fl_format",
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
                <li><b>Body of the Letter (3 clear paragraphs):</b> 2 Marks</li>
                <li><b>Subscription (Yours faithfully) & Address on Envelope:</b> 1 Mark</li>
              </ul>
            </div>

            <div style="border:1px dashed #64748b; padding:16px; border-radius:6px; background:#f8fafc; font-family:monospace;">
              <b>From</b><br>
              &nbsp;&nbsp;[Sender's Name / XXXX],<br>
              &nbsp;&nbsp;[Door No., Street Name],<br>
              &nbsp;&nbsp;[City / Town - Pincode].<br><br>
              
              [Date: e.g., 16 March 2026]<br><br>

              <b>To</b><br>
              &nbsp;&nbsp;[Designation of Official: The Editor / The Municipal Commissioner / The Headmaster],<br>
              &nbsp;&nbsp;[Organization / Office / School Name],<br>
              &nbsp;&nbsp;[City / Town - Pincode].<br><br>

              <b>Respected Sir / Madam,</b><br><br>

              &nbsp;&nbsp;<b>Sub:</b> [Precise summary of the grievance / request in one single line] - Reg.<br><br>

              &nbsp;&nbsp;<b>Paragraph 1 (Opening):</b> State who you are and clearly identify the purpose of this letter.<br><br>
              &nbsp;&nbsp;<b>Paragraph 2 (Main Body):</b> Provide detailed factual information, consequences suffered, and reasons for your concern.<br><br>
              &nbsp;&nbsp;<b>Paragraph 3 (Closing):</b> Make a courteous, specific appeal for swift intervention or necessary official action.<br><br>

              Thanking you,<br><br>

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Yours faithfully,</b><br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Signature / Name]<br><br>

              <b>Address on the Envelope:</b><br>
              &nbsp;&nbsp;To<br>
              &nbsp;&nbsp;[Official's Designation and Complete Office Address with Pincode]
            </div>
          </div>`
        },
        {
          id: "eng_w_fl1",
          type: "5m",
          mark: "5 Marks",
          examTag: "Model Letter (Editor)",
          isImportant: true,
          q: "Write a letter to the Editor of a newspaper about the bad condition of roads and defunct street lights in your locality.",
          ans: `<div style="line-height:1.7; font-size:15px; border:1px solid #e2e8f0; padding:16px; border-radius:6px; background:#fff;">
            <b>From</b><br>
            S. Arun,<br>
            12, Bharathiar Street, Gandhi Nagar,<br>
            Salem – 636 007.<br><br>

            16 March 2026<br><br>

            <b>To</b><br>
            The Editor,<br>
            The Hindu / Daily News,<br>
            Salem – 636 001.<br><br>

            <b>Respected Sir,</b><br><br>

            <b>Sub:</b> Deplorable condition of roads and broken street lights in Gandhi Nagar – Reg.<br><br>

            Through the esteemed columns of your widely circulated daily, I wish to draw the urgent attention of the civic authorities towards the pathetic condition of roads in Gandhi Nagar.<br><br>

            For the past four months, the arterial roads of our residential area have been riddled with large, treacherous potholes following recent pipeline digging. During rains, these craters fill with stagnant muddy water, making them invisible and causing frequent two-wheeler skids. School children and elderly residents face severe difficulties walking safely. Compounding this agony, most street lights have remained defunct for weeks, plunging the entire stretch into pitch darkness at night.<br><br>

            Despite multiple representations submitted to local ward officials, no corrective measures have been undertaken. I earnestly request the concerned authorities to take prompt action to resurface the roads and restore street lighting before a fatal accident takes place.<br><br>

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
          id: "eng_w_fl2",
          type: "5m",
          mark: "5 Marks",
          examTag: "Model Letter (Municipal Official)",
          isImportant: true,
          q: "Write a letter to the Municipal Commissioner complaining about the irregular clearance of garbage in your area.",
          ans: `<div style="line-height:1.7; font-size:15px; border:1px solid #e2e8f0; padding:16px; border-radius:6px; background:#fff;">
            <b>From</b><br>
            K. Meena,<br>
            25, Kamarajar Avenue, Anna Nagar,<br>
            Madurai – 625 020.<br><br>

            16 March 2026<br><br>

            <b>To</b><br>
            The Commissioner,<br>
            Madurai City Municipal Corporation,<br>
            Madurai – 625 002.<br><br>

            <b>Respected Sir,</b><br><br>

            <b>Sub:</b> Complaint regarding irregular garbage clearance and unhygienic conditions in Anna Nagar – Reg.<br><br>

            I am writing as a concerned resident of Anna Nagar to highlight the acute sanitary crisis caused by the non-clearance of municipal garbage in our neighbourhood.<br><br>

            For over ten days, municipal sanitary conservancy workers have failed to visit our street. Consequently, the public dustbins at the main intersection are overflowing with rotting domestic and market waste. Stagnant garbage has spilled onto the road, emanating a nauseating stench. Stray cattle, dogs, and swarms of mosquitoes breed uncontrollably in these dumps, creating an alarming hazard for dengue, malaria, and typhoid among local children.<br><br>

            I kindly urge the municipal administration to arrange immediate daily clearance of garbage and dispatch the sanitary squad to spray disinfectants throughout our locality without delay.<br><br>

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
              Aringar Anna Maligai, Madurai – 625 002.
            </div>
          </div>`
        },
        {
          id: "eng_w_fl3",
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

            <b>Sub:</b> Requisition for additional reference books and storybooks for the school library – Reg.<br><br>

            On behalf of all the students of Standard X, I submit this humble requisition regarding the enrichment of our school library resources.<br><br>

            As our Board Public Examinations and NTSE scholarship examinations are approaching, we are in great need of updated subject reference guides, question banks, and competitive exam books in Mathematics, Science, and Social Science. Additionally, students are keen to improve their English language fluency and vocabulary, but the library currently possesses very few illustrated English storybooks, biographies, and abridged classics.<br><br>

            We kindly request you to sanction funds to purchase these essential reference materials and engaging storybooks for our library, which will greatly benefit all students.<br><br>

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
          id: "eng_w_fl4",
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
            Oxford Book Publishing House,<br>
            Mount Road, Chennai – 600 002.<br><br>

            <b>Sir,</b><br><br>

            <b>Sub:</b> Order for 50 copies of English-English-Tamil School Dictionaries – Reg.<br><br>

            We wish to place a bulk order for 50 copies of the latest edition of your celebrated <b>'Oxford English-English-Tamil Comprehensive School Dictionary'</b> for our school reading library.<br><br>

            Please ensure that all copies are in immaculate condition, neatly hardbound, and free of printing or binding defects. As an educational institution, we expect the customary 20% institutional discount on the catalogue price.<br><br>

            Kindly pack the books securely and dispatch them via reliable parcel service to our school address within ten working days. Payment will be released promptly through demand draft upon receipt and verification of the consignment.<br><br>

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
              Oxford Book Publishing House,<br>
              Mount Road, Chennai – 600 002.
            </div>
          </div>`
        },
        {
          id: "eng_w_fl5",
          type: "5m",
          mark: "5 Marks",
          examTag: "Model Letter (Product Complaint)",
          isImportant: true,
          q: "Write a letter to the store manager complaining about a defective mobile phone / tablet purchased recently and requesting replacement.",
          ans: `<div style="line-height:1.7; font-size:15px; border:1px solid #e2e8f0; padding:16px; border-radius:6px; background:#fff;">
            <b>From</b><br>
            M. Karthik,<br>
            18, Cross Cut Road, Gandhipuram,<br>
            Coimbatore – 641 012.<br><br>

            16 March 2026<br><br>

            <b>To</b><br>
            The Store Manager,<br>
            Supreme Electronics & Mobiles,<br>
            DB Road, R.S. Puram, Coimbatore – 641 002.<br><br>

            <b>Sir,</b><br><br>

            <b>Sub:</b> Complaint regarding defective Samsung Galaxy Tab (Invoice No. SE-4582) – Replacement requested – Reg.<br><br>

            I purchased a Samsung Galaxy Tab (Model A9+, 64GB) from your showroom on 5th March 2026 vide Cash Memo / Bill No. SE-4582. A photocopy of the invoice and warranty card is enclosed herewith.<br><br>

            To my utter dismay, the device started malfunctioning within a week of purchase. The display screen flickers continuously and freezes within ten minutes of use. Moreover, the battery discharges within two hours despite being charged fully overnight. When I attempted to use the charger supplied in the box, the device became dangerously overheated.<br><br>

            Since the product is covered under the standard one-year replacement warranty, I request you to either replace the defective tablet with a fresh piece or refund the full purchase amount at your earliest convenience.<br><br>

            Thanking you,<br><br>

            <div style="text-align:right;">
              Yours faithfully,<br>
              <b>M. Karthik</b>
            </div><br>

            <div style="border:1px solid #94a3b8; padding:8px 12px; width:260px; border-radius:4px; background:#f8fafc;">
              <b>Address on the Envelope:</b><br>
              To<br>
              The Store Manager,<br>
              Supreme Electronics & Mobiles,<br>
              DB Road, R.S. Puram, Coimbatore – 641 002.
            </div>
          </div>`
        },
        {
          id: "eng_w_fl6",
          type: "5m",
          mark: "5 Marks",
          examTag: "Model Letter (River Pollution)",
          isImportant: true,
          q: "Write a letter to the Editor about the heavy pollution of rivers caused by industrial effluents and idol immersions.",
          ans: `<div style="line-height:1.7; font-size:15px; border:1px solid #e2e8f0; padding:16px; border-radius:6px; background:#fff;">
            <b>From</b><br>
            G. Anitha,<br>
            7, Riverside Street, Thillai Nagar,<br>
            Tiruchirappalli – 620 018.<br><br>

            16 March 2026<br><br>

            <b>To</b><br>
            The Editor,<br>
            Indian Express,<br>
            Trichy – 620 001.<br><br>

            <b>Respected Sir,</b><br><br>

            <b>Sub:</b> Alarming pollution of River Cauvery due to industrial effluents and waste dumping – Reg.<br><br>

            Kindly permit me to use the esteemed columns of your widely read newspaper to voice deep anxiety regarding the progressive degradation of our sacred River Cauvery.<br><br>

            The river, which serves as the lifeline for millions of farmers and supplies potable water to urban towns, is being turned into a toxic sewer. Chemical dyeing units and tanneries upstream brazenly discharge untreated poisonous effluents directly into the river channel. Furthermore, religious idol immersions painted with non-biodegradable synthetic varnishes and heavy dumping of plastic trash have suffocated aquatic life.<br><br>

            The Tamil Nadu Pollution Control Board must inspect all industrial discharge outlets stringently, enforce mandatory zero-liquid-discharge systems, and penalise violators. Public awareness campaigns along riverbanks must be initiated immediately to preserve our lifeline.<br><br>

            Thanking you,<br><br>

            <div style="text-align:right;">
              Yours faithfully,<br>
              <b>G. Anitha</b>
            </div><br>

            <div style="border:1px solid #94a3b8; padding:8px 12px; width:260px; border-radius:4px; background:#f8fafc;">
              <b>Address on the Envelope:</b><br>
              To<br>
              The Editor,<br>
              The Indian Express,<br>
              Cantonment, Trichy – 620 001.
            </div>
          </div>`
        },
        {
          id: "eng_w_fl7",
          type: "tips",
          mark: "Practice Topics",
          examTag: "10 Formal Letter Practice Questions",
          isImportant: false,
          q: "10 Important Formal Letter Practice Questions for Public Exam Drill",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <p>Practice writing these 10 important formal letters using the official 5-mark structure:</p>
            <ol style="padding-left:20px;">
              <li style="margin-bottom:10px;"><b>Letter to Health Officer:</b> Requesting to organise a free medical / eye screening and dengue awareness camp in your village.</li>
              <li style="margin-bottom:10px;"><b>Letter to Postmaster:</b> Complaining about delayed delivery of letters, money orders, and misplacement of parcels in your area.</li>
              <li style="margin-bottom:10px;"><b>Letter to Assistant Engineer (TNEB):</b> Complaining about frequent unscheduled load-shedding and power cuts during night study hours.</li>
              <li style="margin-bottom:10px;"><b>Letter to Editor on Plastic Menace:</b> Highlighting the rampant use of banned single-use plastic carry bags and urging municipal checks.</li>
              <li style="margin-bottom:10px;"><b>Letter to Headmaster for Leave:</b> Requesting three days leave of absence due to an unexpected family bereavement or illness.</li>
              <li style="margin-bottom:10px;"><b>Letter to Sports Dealer:</b> Placing an order for cricket bats, footballs, volleyball nets, and shuttle rackets for your school sports club.</li>
              <li style="margin-bottom:10px;"><b>Letter to Police Inspector:</b> Reporting the theft of your bicycle parked outside the public library.</li>
              <li style="margin-bottom:10px;"><b>Letter to Editor on Road Safety:</b> Emphasising the compulsory wearing of helmets, seatbelts, and banning mobile use while driving.</li>
              <li style="margin-bottom:10px;"><b>Letter to Bank Manager:</b> Requesting information on educational loan schemes and documentation required for higher professional studies.</li>
              <li style="margin-bottom:10px;"><b>Letter to District Forest Officer:</b> Requesting 200 free tree saplings for a school campus afforestation drive on World Environment Day.</li>
            </ol>
          </div>`
        }
      ]
    },
    {
      id: "sec_eng_w_3",
      title: "Part 3: Informal Letter Writing (Personal 5-Mark Format + 4 Model Letters + 10 Practice Questions)",
      author: "Samacheer Kalvi English Writing Guide",
      questions: [
        {
          id: "eng_w_il_format",
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
                <li><b>No formal Subject line:</b> Informal letters go straight from friendly salutation to affectionate text.</li>
                <li><b>Affectionate Salutation:</b> e.g., <i>Dear Ravi,</i> or <i>Dear Father / Mother,</i></li>
                <li><b>Warm Closing:</b> <i>Yours lovingly,</i> / <i>Your affectionate friend,</i></li>
                <li><b>Address on Envelope:</b> Mandatory at the bottom for full marks!</li>
              </ul>
            </div>

            <div style="border:1px dashed #64748b; padding:16px; border-radius:6px; background:#f8fafc; font-family:monospace;">
              [Sender's Address: House No., Street, City]<br>
              [Date: e.g., 16 March 2026]<br><br>

              <b>Dear [Friend's Name / Father / Mother],</b><br><br>

              &nbsp;&nbsp;<b>Paragraph 1 (Warm Opening):</b> Inquire about their health and express warmth (e.g., <i>"I am hale and hearty here and hope you are in the best of spirits..."</i>).<br><br>
              &nbsp;&nbsp;<b>Paragraph 2 (Main Message):</b> Vividly narrate the event, sharing details, impressions, emotions, or invitations.<br><br>
              &nbsp;&nbsp;<b>Paragraph 3 (Affectionate Close):</b> Send warm regards to elders, love to younger ones, and state anticipation of a speedy reply.<br><br>

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Yours lovingly / Your affectionate friend,</b><br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Your Name]<br><br>

              <b>Address on the Envelope:</b><br>
              To<br>
              [Recipient's Name and Complete Postal Address with Pincode]
            </div>
          </div>`
        },
        {
          id: "eng_w_il1",
          type: "5m",
          mark: "5 Marks",
          examTag: "Model Letter (Annual Day)",
          isImportant: true,
          q: "Write a letter to your friend describing your school Annual Day celebration and your prize in the speech competition.",
          ans: `<div style="line-height:1.7; font-size:15px; border:1px solid #e2e8f0; padding:16px; border-radius:6px; background:#fff;">
            15, Gandhi Road,<br>
            Periyar Nagar, Erode – 638 001.<br>
            16 March 2026.<br><br>

            <b>Dear Ravi,</b><br><br>

            I hope this letter finds you in fine health and cheerful spirits. I am doing very well here with my studies. I am writing this letter to share the unforgettable joy of our School Annual Day celebration held last Friday.<br><br>

            Our school campus was brightly illuminated with colourful serial lamps and festive shamianas. The District Collector presided over the gala function as Chief Guest. The evening commenced with a melodious prayer song, followed by our Headmaster reading out the annual achievements report. The students staged vibrant folk dances, skits, and a musical choir that drew thunderous applause from the parents.<br><br>

            You will be thrilled to learn that I bagged the First Prize in the Inter-School English Elocution Competition on 'Youth's Role in Nation Building'! When the Chief Guest handed me the shining rolling trophy, the auditorium echoed with cheers. I sorely missed your presence on this proud day.<br><br>

            Please convey my affectionate pranams to your respected parents and loving greetings to your younger sister Anu. Do write to me about your school news.<br><br>

            <div style="text-align:right;">
              Yours lovingly,<br>
              <b>K. Kumar</b>
            </div><br>

            <div style="border:1px solid #94a3b8; padding:8px 12px; width:260px; border-radius:4px; background:#f8fafc;">
              <b>Address on the Envelope:</b><br>
              To<br>
              P. Ravi,<br>
              24, V.O.C. Street, Fort Area,<br>
              Coimbatore – 641 001.
            </div>
          </div>`
        },
        {
          id: "eng_w_il2",
          type: "5m",
          mark: "5 Marks",
          examTag: "Model Letter (Birthday Invitation)",
          isImportant: true,
          q: "Write a letter to your friend inviting him / her to your 15th Birthday celebration.",
          ans: `<div style="line-height:1.7; font-size:15px; border:1px solid #e2e8f0; padding:16px; border-radius:6px; background:#fff;">
            10, Nehru Street,<br>
            Fairlands, Salem – 636 016.<br>
            16 March 2026.<br><br>

            <b>Dear Mohan,</b><br><br>

            Hearty greetings! I hope you are enjoying your weekend. It has been quite a while since we met and spent time chatting together.<br><br>

            I am thrilled to let you know that my fifteenth birthday falls on Tuesday, 25th March 2026. My parents have planned a grand celebration at our home from 6:00 p.m. onwards. We have arranged fun musical games, a special cake-cutting ceremony, and a scrumptious buffet dinner.<br><br>

            All our school buddies are coming, and the celebration will be incomplete without you! Please plan to arrive by 5:00 p.m. so we can play together before the party starts. You are welcome to bring your brother along too.<br><br>

            Kindly convey my heartfelt regards to your uncle and aunt. Eagerly waiting for your arrival!<br><br>

            <div style="text-align:right;">
              Your affectionate friend,<br>
              <b>S. Arun</b>
            </div><br>

            <div style="border:1px solid #94a3b8; padding:8px 12px; width:260px; border-radius:4px; background:#f8fafc;">
              <b>Address on the Envelope:</b><br>
              To<br>
              R. Mohan,<br>
              45, Anna Salai, Suramangalam,<br>
              Salem – 636 005.
            </div>
          </div>`
        },
        {
          id: "eng_w_il3",
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

            I received your affectionate letter and money order yesterday. I was immensely relieved to learn that everyone at home is keeping good health.<br><br>

            You will be happy to know that my preparations for the upcoming 10th Standard Board Public Examinations are progressing very smoothly. I wake up every morning at 5:00 a.m. to study challenging topics in Mathematics and Science when my mind is freshest. I have formulated a disciplined timetable giving equal weightage to all five subjects.<br><br>

            Our school teachers are conducting daily revision tests and clearing all our individual doubts patiently. In the recent second revision examination, I scored 482 out of 500 marks. I am currently solving previous five years' public exam question papers to master time management.<br><br>

            Please do not worry about my health; I eat nutritious hostel meals and sleep on time. I am confident of achieving a centum in Maths and securing high school-first marks to make you proud.<br><br>

            Convey my loving pranams to dearest Mother and affectionate kisses to little brother Kavin.<br><br>

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
          id: "eng_w_il4",
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

            How are you? I hope you are doing great. I am bursting with excitement to share the wonderful memories of our three-day school educational tour to Chennai and Mahabalipuram last week.<br><br>

            We travelled by tourist bus with our Science and History teachers. In Chennai, we visited the Government Museum in Egmore, gazing in awe at bronze Chola idols and ancient geological fossils. Later, we explored the Birla Planetarium, where a 3D sky-show brought the mysteries of the solar system alive. In the evening, we enjoyed the refreshing breeze at Marina Beach.<br><br>

            The crowning highlight was our visit to Mahabalipuram. Looking at the Shore Temple standing tall against roaring sea waves, Arjuna's Penance rock relief, and the monolithic Pancha Rathas carved out of single granite boulders was mesmerizing! Our History teacher explained how Pallava artisans chiseled those architectural wonders over thirteen centuries ago.<br><br>

            The tour was a delightful blend of fun, friendship, and profound learning. I bought a small carved stone pen-stand as a souvenir for you. Convey my warm regards to your parents.<br><br>

            <div style="text-align:right;">
              Yours affectionately,<br>
              <b>M. Praveen</b>
            </div><br>

            <div style="border:1px solid #94a3b8; padding:8px 12px; width:260px; border-radius:4px; background:#f8fafc;">
              <b>Address on the Envelope:</b><br>
              To<br>
              S. Dinesh,<br>
              18, East Coast Road, Thiruvanmiyur,<br>
              Chennai – 600 041.
            </div>
          </div>`
        },
        {
          id: "eng_w_il5",
          type: "tips",
          mark: "Practice Topics",
          examTag: "10 Informal Letter Practice Questions",
          isImportant: false,
          q: "10 Important Informal Letter Practice Questions for Homework & Drill",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <p>Master your personal letter writing with these 10 common exam topics:</p>
            <ol style="padding-left:20px;">
              <li style="margin-bottom:10px;"><b>Letter to friend:</b> Advising him/her to develop the habit of daily English newspaper reading to improve vocabulary.</li>
              <li style="margin-bottom:10px;"><b>Letter to father:</b> Requesting him to send ₹1,500 towards purchase of public examination guide books and special coaching class fees.</li>
              <li style="margin-bottom:10px;"><b>Letter to cousin:</b> Congratulating him/her on securing the State First rank in the National Talent Search Examination (NTSE).</li>
              <li style="margin-bottom:10px;"><b>Letter to friend:</b> Describing how you celebrated Pongal / Diwali festival with your joint family in your native village.</li>
              <li style="margin-bottom:10px;"><b>Letter to younger brother:</b> Emphasising the dangers of junk food, mobile addiction, and urging him to play outdoor sports daily.</li>
              <li style="margin-bottom:10px;"><b>Letter to friend:</b> Inviting him/her to spend the upcoming summer vacation with you in your hometown / hill station.</li>
              <li style="margin-bottom:10px;"><b>Letter to uncle:</b> Thanking him warmly for the inspiring wristwatch he gifted on your birthday.</li>
              <li style="margin-bottom:10px;"><b>Letter to friend:</b> Describing your visit to the Tanjore Big Temple and expressing wonder at Chola architecture.</li>
              <li style="margin-bottom:10px;"><b>Letter to mother:</b> Describing your first week experience in the school hostel and your new roommates.</li>
              <li style="margin-bottom:10px;"><b>Letter to sick classmate:</b> Wishing him a speedy recovery from fever and promising to share class notes and homework.</li>
            </ol>
          </div>`
        }
      ]
    },
    {
      id: "sec_eng_w_4",
      title: "Part 4: Public Exam Writing Rules, 5-Mark Marking Scheme & Centum Tips",
      author: "Samacheer Kalvi English Writing Guide",
      questions: [
        {
          id: "eng_w_guide1",
          type: "tips",
          mark: "Scoring Blueprint",
          examTag: "Official 5-Mark Scheme",
          isImportant: true,
          q: "How are 5 marks awarded for Letter Writing in the Tamil Nadu SSLC Board Exam?",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <p>According to the official <b>Directorate of Government Examinations (DGE)</b> answer key blueprint, marks for Letter Writing (Question No. 43) are allotted step-by-step:</p>

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
              <b>Golden Rule:</b> Never omit the <b>"Address on the Envelope"</b> box at the end! It carries 0.5 to 1 full mark in the evaluation scheme.
            </div>
          </div>`
        },
        {
          id: "eng_w_guide2",
          type: "tips",
          mark: "Exam Guidelines",
          examTag: "General Essay vs Hints Development",
          isImportant: true,
          q: "What is the key difference between General Essay Writing and 8-Mark Hints Development?",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <p>Students often confuse <b>General Essay Practice</b> with the <b>8-Mark Supplementary Hints Development</b> question. Understand the critical differences:</p>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin:14px 0;">
              <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:6px; padding:12px;">
                <h4 style="margin:0 0 8px 0; color:#1e40af;">General Essay Writing</h4>
                <ul style="margin:0; padding-left:18px; font-size:13.5px;">
                  <li><b>Topic type:</b> General / Social theme (Education, Trees, Pollution, Science).</li>
                  <li><b>Structure:</b> Introduction, 3-4 thematic subheadings, conclusion, and quotation.</li>
                  <li><b>Length:</b> Approx. 150–200 words.</li>
                  <li><b>Purpose:</b> Builds advanced English articulation, paragraph composition, and essay skills.</li>
                </ul>
              </div>

              <div style="background:#fdf2f8; border:1px solid #fbcfe8; border-radius:6px; padding:12px;">
                <h4 style="margin:0 0 8px 0; color:#9d174d;">8-Mark Hints Development (Q.44/47)</h4>
                <ul style="margin:0; padding-left:18px; font-size:13.5px;">
                  <li><b>Topic type:</b> Based on prescribed 10th Supplementary stories (The Tempest, Zigzag, Mulan, etc.) or moral tales.</li>
                  <li><b>Input:</b> Hyphenated hints given in question paper (e.g. <i>Prospero - Duke of Milan - brother Antonio - island...</i>).</li>
                  <li><b>Mandatory elements:</b> Suitable Title, coherent story paragraphs connecting ALL hints, and a clear Moral.</li>
                  <li><b>Length:</b> Approx. 150 words.</li>
                </ul>
              </div>
            </div>
          </div>`
        },
        {
          id: "eng_w_guide3",
          type: "tips",
          mark: "Centum Checklist",
          examTag: "Top 7 Common Mistakes to Avoid",
          isImportant: true,
          q: "Top 7 Common Mistakes that cost marks in English Writing Tasks (And How to Avoid Them)",
          ans: `<div style="line-height:1.8; font-size:15px;">
            <p>Board exam evaluators deduct marks for these frequent careless slips:</p>
            <ol style="padding-left:20px;">
              <li style="margin-bottom:12px;">
                <b>The Apostrophe Error in 'Yours':</b><br>
                <span style="color:#dc2626; font-weight:bold;">WRONG:</span> <i>Your's faithfully / Your's lovingly</i><br>
                <span style="color:#16a34a; font-weight:bold;">CORRECT:</span> <b>Yours faithfully / Yours lovingly</b> (Never use an apostrophe in 'Yours'!).
              </li>

              <li style="margin-bottom:12px;">
                <b>Capitalization in Subscription:</b><br>
                <span style="color:#dc2626; font-weight:bold;">WRONG:</span> <i>Yours Faithfully / Yours Lovingly</i><br>
                <span style="color:#16a34a; font-weight:bold;">CORRECT:</span> <b>Yours faithfully / Yours lovingly</b> (The second word must start with a small letter).
              </li>

              <li style="margin-bottom:12px;">
                <b>Punctuation in Address:</b><br>
                Always put commas at the end of each address line, and a period/full stop at the end of the city with pincode:
                <br><i>12, Anna Salai,</i><br><i>Gandhi Nagar,</i><br><i>Salem – 636 001.</i>
              </li>

              <li style="margin-bottom:12px;">
                <b>Subject Line Placement in Formal Letters:</b><br>
                Write the <b>Subject line AFTER the Salutation (Respected Sir,)</b>, not before it. Keep the subject line concise and end it with '- Reg.'
              </li>

              <li style="margin-bottom:12px;">
                <b>Paragraph Division:</b><br>
                Never write the entire letter or essay as one huge undivided block of text! Divide the body into 3 clear, distinct paragraphs.
              </li>

              <li style="margin-bottom:12px;">
                <b>Omitting the Address on Envelope:</b><br>
                Many students forget to draw the envelope box at the very end. Always draw a neat pencil box titled <b>'Address on the Envelope'</b> and write the recipient's address with pincode.
              </li>

              <li style="margin-bottom:12px;">
                <b>Handwriting & Margins:</b><br>
                Leave a 1-inch neat left margin. Underline key headings and memorable quotes neatly using a pencil. Clean handwriting creates an immediate centum-grade impression!
              </li>
            </ol>
          </div>`
        }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ENGLISH_WRITING_DATA;
}
