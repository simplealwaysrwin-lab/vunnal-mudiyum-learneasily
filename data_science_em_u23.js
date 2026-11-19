// Class 10 Science - Unit 23: Visual Communication
// Tamil Nadu State Board Samacheer Kalvi Question-Answer Guide (English Medium)

const SCIENCE_EM_UNIT_23_DATA = {
  unitId: "sci_em_u23",
  unitName: "Unit 23: Visual Communication",
  subject: "Science",
  syllabus: "Tamil Nadu Samacheer Kalvi Class 10 Science - Computer Science",

  formulas: [
    { title: "Visual Communication", rule: "The conveyance of ideas, data, and information using visual aids such as imagery, typography, diagrams, animation, and video formats" },
    { title: "File vs Folder", rule: "A File is an individual digital entity storing specific data (.docx, .jpg, .mp3, .mp4); a Folder is a directory container organizing files and subdirectories" },
    { title: "Digital Graphic File Formats", rule: "JPEG (lossy compressed format for photographic imagery), PNG (lossless format supporting alpha channel transparency), GIF (animated graphics)" },
    { title: "Scratch Visual Programming", rule: "Block-based visual programming environment designed by MIT Media Lab allowing novices to create interactive stories, animations, and games" },
    { title: "Sprite", rule: "An interactive graphic character or object on the Scratch stage programmed to perform actions via scripts (default is the Scratch Cat)" },
    { title: "Stage", rule: "The primary graphical display canvas (480x360 pixels) in Scratch where sprites execute code and visual scenes play out" }
  ],

  subSections: [
    {
      id: "sec_sci_em_23_1",
      title: "Section 1: Digital Media Formats, File Hierarchy & Scratch Visual Animation",
      author: "Science - Unit 23: Visual Communication",
      questions: [
        {
          id: "sci_em_23_1",
          type: "1m",
          mark: "1 Mark",
          examTag: "Public Exam",
          q: "What is an interactive graphic object or animated character performing script actions on the Scratch Stage called?",
          options: ["A) Stage", "B) Sprite", "C) Backdrop", "D) Palette"],
          ans: "Answer: <b>B) Sprite</b><br>Explanation: In Scratch, every actor or interactive character programmed using graphical block scripts is called a 'Sprite'. The default starting sprite is the Scratch Cat.",
          ansTamil: "ஸ்க்ராட்ச் மென்பொருளில் திரையில் தோன்றி நகரும் பாத்திரம் ஸ்ப்ரைட் ஆகும்."
        },
        {
          id: "sci_em_23_2",
          type: "1m",
          mark: "1 Mark",
          examTag: "Govt Model",
          q: "Which bitmap raster graphics image format supports lossless compression and transparent backgrounds?",
          options: ["A) .txt", "B) .png (Portable Network Graphics)", "C) .mp3", "D) .pdf"],
          ans: "Answer: <b>B) .png (Portable Network Graphics)</b><br>Explanation: PNG supports alpha-channel transparency and lossless compression, rendering it ideal for digital logos, icons, and web graphics.",
          ansTamil: "வெளிப்படையான பின்னணி படங்களை சேமிக்க PNG வடிவம் பயன்படுகிறது."
        },
        {
          id: "sci_em_23_3",
          type: "2m",
          mark: "2 Marks",
          examTag: "Public Exam",
          q: "Define Visual Communication. State two key pedagogical or social benefits.",
          ans: `<div style="line-height:1.7;">
            • <b>Visual Communication</b> is the practice of transmitting information, knowledge, and emotional expression using visual modalities (illustrations, infographics, animations, signs, and video presentations) rather than plain textual prose.<br><br>
            <b>Key Benefits:</b><br>
            1. <b>Transcends Linguistic Barriers:</b> Graphic symbols (e.g. international traffic signs) convey instantaneous meaning across diverse languages.<br>
            2. <b>Enhances Retention & Engagement:</b> Visual multimedia improves cognitive comprehension and memory recall in smart education.
          </div>`,
          ansTamil: "படங்கள், வரைபடங்கள் மூலம் கருத்துகளைப் பார்வைக்கு வழங்குவது காட்சித் தொடர்பு ஆகும்."
        },
        {
          id: "sci_em_23_4",
          type: "2m",
          mark: "2 Marks",
          examTag: "Key Question",
          q: "Differentiate between a File and a Folder in operating systems.",
          ans: `<div style="line-height:1.7;">
            <div class="chalk-table-responsive">
              <table style="width:100%; border-collapse:collapse; font-size:13px; text-align:left;">
                <thead>
                  <tr style="background:#0284c7; color:#fff;">
                    <th style="padding:6px; border:1px solid #cbd5e1;">Parameter</th>
                    <th style="padding:6px; border:1px solid #cbd5e1;">File</th>
                    <th style="padding:6px; border:1px solid #cbd5e1;">Folder (Directory)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="padding:6px; border:1px solid #cbd5e1;"><b>Definition</b></td>
                    <td style="padding:6px; border:1px solid #cbd5e1;">Discrete digital storage item containing text, image, audio, or program data</td>
                    <td style="padding:6px; border:1px solid #cbd5e1;">A navigational container/directory used to organize and catalog multiple files</td>
                  </tr>
                  <tr style="background:#f8fafc;">
                    <td style="padding:6px; border:1px solid #cbd5e1;"><b>File Extension</b></td>
                    <td style="padding:6px; border:1px solid #cbd5e1;">Always possesses a specific format extension (e.g., .docx, .png, .mp4)</td>
                    <td style="padding:6px; border:1px solid #cbd5e1;">Folders do not carry format extensions</td>
                  </tr>
                  <tr>
                    <td style="padding:6px; border:1px solid #cbd5e1;"><b>Contents</b></td>
                    <td style="padding:6px; border:1px solid #cbd5e1;">Contains direct raw data/content</td>
                    <td style="padding:6px; border:1px solid #cbd5e1;">Holds other files and nested subfolders</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>`,
          ansTamil: "கோப்பு என்பது குறிப்பிட்ட தரவு (.jpg, .doc); கோப்புறை என்பது பல கோப்புகளை வைக்கும் பெட்டகம்."
        },
        {
          id: "sci_em_23_5",
          type: "2m",
          mark: "2 Marks",
          examTag: "Public Exam",
          q: "Name the three principal working panes of the Scratch software user interface.",
          ans: `<div style="line-height:1.7;">
            The primary functional interface sections of Scratch are:<br><br>
            1. <b>Stage:</b> The main visual canvas where sprite actions, animations, backdrops, and interactive games are displayed.<br>
            2. <b>Blocks Palette:</b> Color-coded repository of command blocks categorized by functions (Motion, Looks, Sound, Events, Control).<br>
            3. <b>Scripts Area:</b> The central workspace where programming code blocks are snapped together vertically like jigsaw puzzles.
          </div>`,
          ansTamil: "ஸ்க்ராட்ச் பகுதிகள்: 1. மேடை (Stage) 2. நிரல் தட்டு (Blocks Palette) 3. ஸ்கிரிப்ட் பகுதி (Script Area)."
        },
        {
          id: "sci_em_23_6",
          type: "2m",
          mark: "2 Marks",
          examTag: "Key Question",
          q: "Compare the features of JPEG and PNG graphic file formats.",
          ans: `<div style="line-height:1.7;">
            1. <b>JPEG (Joint Photographic Experts Group):</b> Employs lossy compression algorithm optimized for complex continuous-tone photographic images with millions of colors, producing very compact file sizes.<br><br>
            2. <b>PNG (Portable Network Graphics):</b> Employs lossless compression and supports variable alpha-channel transparency, making it ideal for web logos, diagrams, and sharp line art.
          </div>`,
          ansTamil: "JPEG புகைப்படங்களை சுருக்கி சேமிக்க உதவுகிறது; PNG வெளிப்படையான பின்னணி கொண்ட படங்களுக்கு பயன்படுகிறது."
        },
        {
          id: "sci_em_23_7",
          type: "2m",
          mark: "2 Marks",
          examTag: "Govt Model",
          q: "List four ways by which a new Sprite can be introduced onto the Scratch stage.",
          ans: `<div style="line-height:1.7;">
            A new sprite can be created or imported in Scratch using the <b>'Choose a Sprite'</b> menu via:<br><br>
            1. Selecting an existing pre-designed sprite from the built-in <b>Sprite Library</b>.<br>
            2. Painting a custom graphic using the built-in <b>Paint Editor</b>.<br>
            3. <b>Uploading</b> an external image file (e.g. .png/.jpg) from the local computer.<br>
            4. Selecting the <b>Surprise</b> option to randomly generate an unexpected sprite from the library.
          </div>`,
          ansTamil: "நூலகத்திலிருந்து தேர்வு செய்தல், சொந்தமாக வரைதல் அல்லது படத்தைப் பதிவேற்றுதல் மூலம் சேர்க்கலாம்."
        },
        {
          id: "sci_em_23_8",
          type: "7m",
          mark: "4 / 7 Marks",
          examTag: "Public Exam 7M",
          q: "Elaborate on multimedia building blocks, digital file formats (text, image, audio, video), and contemporary graphic editing suites.",
          ans: `<div style="line-height:1.8;">
            Visual communication integrates multimedia elements to deliver rich interactive experiences:<br><br>

            <b>1. Multimedia Components & Common File Extensions:</b><br>
            • <b>Text Formats:</b> .txt (plain unformatted ASCII), .docx (rich Microsoft Word document), .pdf (device-independent Adobe Portable Document Format).<br>
            • <b>Image Formats:</b><br>
            &nbsp;&nbsp;- <i>.jpeg / .jpg:</i> Standard lossy compressed photographic format.<br>
            &nbsp;&nbsp;- <i>.png:</i> Lossless web standard supporting alpha transparency.<br>
            &nbsp;&nbsp;- <i>.gif:</i> Graphics Interchange Format supporting animated loops.<br>
            • <b>Audio Formats:</b> .mp3 (MPEG-1 Audio Layer III lossy audio standard), .wav (uncompressed studio audio format).<br>
            • <b>Video Formats:</b> .mp4 (MPEG-4 Part 14 universal video streaming format), .mkv, .avi.<br><br>

            <b>2. Prominent Graphic & Image Editing Suites:</b><br>
            • <b>GIMP (GNU Image Manipulation Program):</b> Leading cross-platform open-source raster graphics editor supporting photo retouching and image composition.<br>
            • <b>Adobe Photoshop:</b> Industry-standard commercial creative software for digital photography, painting, and graphic design.<br>
            • <b>Scratch:</b> Block-based visual development environment fostering computational thinking, algorithmic logic, and 2D animation.<br><br>

            <b>3. Practical Applications in Contemporary Society:</b><br>
            1. <b>Digital Education:</b> Interactive whiteboard simulations, educational animated diagrams, and virtual laboratory courses.<br>
            2. <b>Advertising & Commercial Marketing:</b> High-impact promotional video campaigns, digital billboards, and brand logos.<br>
            3. <b>Public Health & Safety Awareness:</b> Infographics and universal pictograms promoting environmental sanitation and road traffic safety.
          </div>`,
          ansTamil: "காட்சித் தொடர்பு: ஊடகக் கோப்புகள் (உரை .doc, படம் .jpg, ஒலி .mp3, வீடியோ .mp4); மென்பொருள்கள் (Photoshop, GIMP, Scratch); கல்வி மற்றும் விளம்பரத்தில் பயன்படுகிறது."
        }
      ]
    }
  ]
};
