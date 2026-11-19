// Class 10 Science - Unit 18: Heredity
// Tamil Nadu State Board Samacheer Kalvi Question-Answer Guide (English Medium)

const SCIENCE_EM_UNIT_18_DATA = {
  unitId: "sci_em_u18",
  unitName: "Unit 18: Heredity",
  subject: "Science",
  syllabus: "Tamil Nadu Samacheer Kalvi Class 10 Science - Genetics",

  formulas: [
    { title: "Father of Genetics", rule: "Gregor Johann Mendel - Conducted pioneering hybridization experiments on garden pea (Pisum sativum)" },
    { title: "Monohybrid Cross Ratios", rule: "F₂ Phenotypic ratio = 3 : 1 (Tall : Dwarf) | Genotypic ratio = 1 : 2 : 1 (TT : Tt : tt)" },
    { title: "Dihybrid Cross Ratio", rule: "F₂ Phenotypic ratio = 9 : 3 : 3 : 1 (Round Yellow : Round Green : Wrinkled Yellow : Wrinkled Green)" },
    { title: "Mendel's Laws of Inheritance", rule: "1. Law of Dominance 2. Law of Segregation (Purity of Gametes) 3. Law of Independent Assortment" },
    { title: "Watson and Crick DNA Model", rule: "Double antiparallel helical polynucleotide chains stabilized by hydrogen-bonded complementary base pairs (A = T and G ≡ C)" },
    { title: "Chargaff's Equimolar Rule", rule: "In any double-stranded DNA, Purine bases equal Pyrimidine bases: [A] + [G] = [T] + [C]" },
    { title: "Chromosome Morphological Types", rule: "Classified into 4 types based on centromere position: Telocentric, Acrocentric, Sub-metacentric, Metacentric" },
    { title: "Sex Determination in Humans", rule: "Male heterogamety (44A + XY produced in equal 50:50 sperm ratio); female homogamety (44A + XX produced in 100% ova)" }
  ],

  subSections: [
    {
      id: "sec_sci_em_18_1",
      title: "Section 1: Mendelian Principles, Watson-Crick DNA Architecture & Chromosome Genetics",
      author: "Science - Unit 18: Heredity",
      questions: [
        {
          id: "sci_em_18_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "Public Exam",
          q: "What is the genotypic ratio obtained in the F₂ generation of a Mendelian monohybrid cross?",
          options: ["A) 3 : 1", "B) 1 : 2 : 1", "C) 9 : 3 : 3 : 1", "D) 2 : 1 : 1"],
          ans: "Answer: <b>B) 1 : 2 : 1</b><br>Explanation: The monohybrid cross yields 1 homozygous tall (TT) : 2 heterozygous tall (Tt) : 1 homozygous dwarf (tt), yielding a 1 : 2 : 1 genotypic ratio, whereas the visual phenotypic ratio is 3 : 1.",
          ansTamil: "மரபணு வகை விகிதம் 1 : 2 : 1 ஆகும் (புறத்தோற்ற விகிதம் 3 : 1)."
        },
        {
          id: "sci_em_18_2",
          type: "1m",
          mark: "1 Mark",
          examTag: "Govt Model",
          q: "In human sex determination, which parent's gamete genetically determines the biological sex of the offspring?",
          options: ["A) Mother exclusively", "B) Father exclusively (via X or Y sperm)", "C) Both parents equally", "D) Environmental temperature"],
          ans: "Answer: <b>B) Father exclusively (via X or Y sperm)</b><br>Explanation: Females are homogametic, producing only (22 + X) ova. Males are heterogametic, producing 50% (22 + X) and 50% (22 + Y) spermatozoa. Fertilization by a Y-bearing sperm yields a male (44 + XY), while an X-bearing sperm yields a female (44 + XX).",
          ansTamil: "தந்தையின் விந்தணுவில் உள்ள X அல்லது Y குரோமோசோமே குழந்தையின் பாலினத்தை நிர்ணயிக்கிறது."
        },
        {
          id: "sci_em_18_3",
          type: "2m",
          mark: "2 Marks",
          examTag: "Public Exam",
          q: "State any four distinct reasons why Gregor Mendel chose the garden pea (Pisum sativum) for his genetic experiments.",
          ans: `<div style="line-height:1.7;">
            <b>Reasons for Choosing Garden Pea Plant:</b><br>
            1. <b>Annual Lifespan:</b> Pea plant is an annual herb with a short life cycle, facilitating observation of multiple generations in a short span.<br>
            2. <b>Sharp Contrasting Traits:</b> Exhibits conspicuous pairs of contrasting characters (e.g., tall vs dwarf, yellow vs green seeds).<br>
            3. <b>Naturally Self-Pollinating:</b> Flowers are bisexual and cleistogamous, maintaining pure homozygous lines naturally.<br>
            4. <b>Ease of Artificial Hybridization:</b> Large floral organs permit convenient emasculation and controlled cross-pollination.
          </div>`,
          ansTamil: "குறுகிய ஆயுட்காலம், தெளிவான மாற்றுப் பண்புகள், எளிதான கலப்பினச் சேர்க்கை காரணமாக தேர்ந்தெடுத்தார்."
        },
        {
          id: "sci_em_18_4",
          type: "2m",
          mark: "2 Marks",
          examTag: "Key Question",
          q: "Differentiate between Dominant and Recessive alleles/traits with suitable examples.",
          ans: `<div style="line-height:1.7;">
            1. <b>Dominant Trait:</b> The morphological trait that expresses itself phenotypically in both homozygous and heterozygous states (e.g. Tall stem height 'T').<br><br>
            2. <b>Recessive Trait:</b> The morphological trait whose phenotypic expression remains completely masked in the presence of a dominant allele, expressing exclusively in the homozygous state (e.g. Dwarf stem height 't').
          </div>`,
          ansTamil: "F₁-ல் வெளிப்படும் பண்பு ஓங்கு பண்பு; மறைந்திருக்கும் பண்பு ஒடுங்கு பண்பு ஆகும்."
        },
        {
          id: "sci_em_18_5",
          type: "2m",
          mark: "2 Marks",
          examTag: "Public Exam",
          q: "Classify chromosomes into four morphological categories based on the location of the Centromere.",
          ans: `<div style="line-height:1.7;">
            Based on the centromeric position, eukaryotic chromosomes are categorized as:<br><br>
            1. <b>Telocentric:</b> Centromere is situated at the terminal tip, resulting in a single rod-shaped arm.<br>
            2. <b>Acrocentric:</b> Centromere is located close to one terminal end, producing one extremely short arm and one very long arm (rod or J-shaped).<br>
            3. <b>Sub-metacentric:</b> Centromere is placed sub-medially, creating two unequal arms (L-shaped during anaphase).<br>
            4. <b>Metacentric:</b> Centromere is precisely at the median center, dividing the chromosome into two equal arms (V-shaped during anaphase).
          </div>`,
          ansTamil: "4 வகைகள்: 1. டீலோசென்ட்ரிக் 2. அக்ரோசென்ட்ரிக் 3. சப்-மெட்டாசென்ட்ரிக் 4. மெட்டாசென்ட்ரிக்."
        },
        {
          id: "sci_em_18_6",
          type: "2m",
          mark: "2 Marks",
          examTag: "Key Question",
          q: "State Chargaff's Rules of base pairing in double-stranded DNA.",
          ans: `<div style="line-height:1.7;">
            According to Erwin Chargaff's rules of DNA stoichiometry:<br><br>
            • The molar ratio of <b>Adenine equals Thymine (A = T)</b>.<br>
            • The molar ratio of <b>Guanine equals Cytosine (G = C)</b>.<br><br>
            • Consequently, the total sum of purines equals the total sum of pyrimidines: <b>[A + G] = [T + C]</b>.
          </div>`,
          ansTamil: "DNA-வில் பியூரின்களின் விகிதம் பிரிமிடின்களுக்கு சமம் (A = T மற்றும் G = C)."
        },
        {
          id: "sci_em_18_7",
          type: "2m",
          mark: "2 Marks",
          examTag: "Govt Model",
          q: "Differentiate between Autosomes and Allosomes (Sex Chromosomes) in human karyotype.",
          ans: `<div style="line-height:1.7;">
            Human diploid somatic cells contain 23 pairs (46) of chromosomes:<br><br>
            1. <b>Autosomes (Somatic Chromosomes):</b> The first 22 pairs (44 chromosomes). They are homologous and identical in both sexes, governing non-sexual somatic traits.<br><br>
            2. <b>Allosomes (Sex Chromosomes / Heterosomes):</b> The 23rd pair (2 chromosomes). They determine the biological sex of the individual (XX in females, XY in males).
          </div>`,
          ansTamil: "முதல் 22 இணைகள் ஆட்டோசோம்கள் (உடல் பண்புகள்); 23-ஆம் இணை அலோசோம் (பாலின நிர்ணயம்)."
        },
        {
          id: "sci_em_18_8",
          type: "7m",
          mark: "4 / 7 Marks",
          examTag: "Public Exam 7M",
          q: "Elucidate the salient structural characteristics of the Watson and Crick double-helical model of DNA.",
          ans: `<div style="line-height:1.8;">
            James Watson and Francis Crick proposed the double-helix model of DNA in 1953 based on X-ray diffraction data by Rosalind Franklin and Maurice Wilkins:<br><br>

            1. <b>Double Polynucleotide Strands:</b> The DNA molecule consists of two complementary polynucleotide chains coiled helically around a common central axis in a right-handed manner.<br><br>

            2. <b>Antiparallel Orientation:</b> The two strands run in opposite antiparallel directions; one strand runs in the 5' ➔ 3' direction, while the complementary strand runs in the 3' ➔ 5' direction.<br><br>

            3. <b>Sugar-Phosphate Structural Backbone:</b> The outer framework is composed of alternating deoxyribose sugar and phosphate moieties linked by phosphodiester bonds, with nitrogenous bases projecting inwards at right angles.<br><br>

            4. <b>Complementary Base Pairing & Hydrogen Bonds:</b><br>
            • A purine always pairs with a specific pyrimidine.<br>
            • <b>Adenine (A)</b> pairs with <b>Thymine (T)</b> via two hydrogen bonds (<b>A = T</b>).<br>
            • <b>Guanine (G)</b> pairs with <b>Cytosine (C)</b> via three hydrogen bonds (<b>G ≡ C</b>).<br><br>

            5. <b>Spatial Dimensions of the Double Helix:</b><br>
            • The uniform diameter of the double helix is <b>20 Å (2.0 nm)</b>.<br>
            • The pitch of each complete helical turn measures <b>34 Å (3.4 nm)</b>, comprising approximately <b>10 base pairs (bp)</b>.<br>
            • The vertical distance between two consecutive base pairs is <b>3.4 Å (0.34 nm)</b>.
          </div>`,
          ansTamil: "DNA இரட்டைச் சுருள்: 1. எதிரெதிர் இழைகள் 2. சர்க்கரை-பாஸ்பேட் தாங்கு சட்டம் 3. A=T, G≡C ஹைட்ரஜன் பிணைப்புகள் 4. ஒரு திருப்பம் 34 Å."
        }
      ]
    }
  ]
};
