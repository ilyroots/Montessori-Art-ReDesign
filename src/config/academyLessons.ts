// ============================================================
// Academy Learning Paths & Lessons
// ============================================================
// Config-driven mock data for the Nature of Art Academy.
// TODO: Replace with CMS / Supabase when backend is ready.
// ============================================================

export type AcademyTier = "free" | "family" | "studioPlus" | "teacher";

export interface AcademyQuiz {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface AcademyLesson {
  title: string;
  slug: string;
  pathSlug: string;
  tierRequired: AcademyTier;
  summary: string;
  videoPlaceholderTitle: string;
  materials: string[];
  task: string;
  checklist: string[];
  quiz?: AcademyQuiz;
  relatedResources: { label: string; href: string }[];
  nextLessonSlug?: string;
  estimatedMinutes: number;
}

export interface AcademyPath {
  title: string;
  slug: string;
  audience: string;
  tier: AcademyTier;
  description: string;
  outcome: string;
  estimatedTime: string;
  accentColor: string; // tailwind color class suffix, e.g. "honey", "sage", "kids-blue"
  bgTint: string; // tailwind bg class, e.g. "bg-bee-yellow/5"
  lessons: AcademyLesson[];
}

// ─────────────────────────────────────────────────────────────
// Path 1: Color Mixing Starter
// ─────────────────────────────────────────────────────────────

const colorMixingLessons: AcademyLesson[] = [
  {
    title: "Welcome to Color Mixing",
    slug: "welcome-to-color-mixing",
    pathSlug: "color-mixing-starter",
    tierRequired: "free",
    summary:
      "An introduction to the world of color mixing through paint, water, and playful observation. Set up your space and get ready to explore.",
    videoPlaceholderTitle: "Welcome — Setting up your color mixing station",
    materials: ["watercolor paper", "brush", "water cup", "paper towel"],
    task: "Set up your art station. Arrange paints, water, and paper so everything is within reach.",
    checklist: [
      "I watched the welcome video",
      "I set up my art station",
      "I prepared my materials",
      "I took a photo of my setup",
    ],
    quiz: undefined,
    relatedResources: [
      { label: "Free Color Mixing Video", href: "/free-resources/color-mixing-video" },
      { label: "Color Theory Curriculum", href: "/curriculum/color-theory" },
    ],
    nextLessonSlug: "primary-colors",
    estimatedMinutes: 10,
  },
  {
    title: "What Are Primary Colors?",
    slug: "primary-colors",
    pathSlug: "color-mixing-starter",
    tierRequired: "free",
    summary:
      "Learn why red, yellow, and blue are called primary colors. Explore how they look on their own before mixing begins.",
    videoPlaceholderTitle: "Primary Colors — Red, Yellow, and Blue",
    materials: ["red paint", "yellow paint", "blue paint", "paper", "brush"],
    task: "Paint three large circles — one red, one yellow, one blue. Label each one.",
    checklist: [
      "I watched the lesson",
      "I painted three primary color circles",
      "I labeled each color",
      "I noticed how each color looks on its own",
    ],
    quiz: {
      question: "Which of these is a primary color?",
      options: ["Green", "Orange", "Yellow", "Purple"],
      correctIndex: 2,
    },
    relatedResources: [
      { label: "Kids Color Theory Book", href: "/bookstore" },
    ],
    nextLessonSlug: "secondary-colors",
    estimatedMinutes: 15,
  },
  {
    title: "Mixing Secondary Colors",
    slug: "secondary-colors",
    pathSlug: "color-mixing-starter",
    tierRequired: "family",
    summary:
      "Discover how two primary colors combine to make secondary colors. Mix orange, green, and purple with your own hands.",
    videoPlaceholderTitle: "Mixing Secondary Colors — Orange, Green, and Purple",
    materials: ["red paint", "yellow paint", "blue paint", "mixing tray", "paper", "brush"],
    task: "Mix each secondary color. Paint a square for orange, green, and purple. Write the recipe (e.g., red + yellow = orange).",
    checklist: [
      "I watched the mixing demo",
      "I mixed orange from red and yellow",
      "I mixed green from yellow and blue",
      "I mixed purple from red and blue",
      "I wrote the color recipes",
    ],
    quiz: {
      question: "What two colors make orange?",
      options: ["Red + Blue", "Red + Yellow", "Yellow + Blue", "Blue + Purple"],
      correctIndex: 1,
    },
    relatedResources: [
      { label: "Color Theory Curriculum", href: "/curriculum/color-theory" },
    ],
    nextLessonSlug: "mixing-greens-from-nature",
    estimatedMinutes: 20,
  },
  {
    title: "Mixing Greens from Nature",
    slug: "mixing-greens-from-nature",
    pathSlug: "color-mixing-starter",
    tierRequired: "family",
    summary:
      "Children learn that green is not one color. By observing leaves, grass, stems, and natural objects, they discover warm greens, cool greens, light greens, and dark greens.",
    videoPlaceholderTitle: "Mixing Greens from Nature — Observation and Paint",
    materials: [
      "yellow paint",
      "blue paint",
      "white paint",
      "small brush",
      "mixing tray",
      "paper",
      "3 leaves from outside",
    ],
    task: "Collect three leaves. Mix a green that matches each one. Label them warm, cool, or dark.",
    checklist: [
      "I watched the lesson",
      "I collected three leaves",
      "I mixed three different greens",
      "I compared my colors to the real leaves",
      "I cleaned up my materials",
    ],
    quiz: {
      question: "What two colors make green?",
      options: ["Red + Blue", "Yellow + Blue", "Yellow + Red", "Blue + Purple"],
      correctIndex: 1,
    },
    relatedResources: [
      { label: "Painting Curriculum", href: "/curriculum/painting" },
      { label: "Nature Art Training", href: "/training/nature-art" },
    ],
    nextLessonSlug: "nature-color-wheel",
    estimatedMinutes: 25,
  },
  {
    title: "Paint Your Nature Color Wheel",
    slug: "nature-color-wheel",
    pathSlug: "color-mixing-starter",
    tierRequired: "family",
    summary:
      "Combine everything you have learned. Create a color wheel using colors found in nature — not just the standard rainbow.",
    videoPlaceholderTitle: "Nature Color Wheel — Bringing It All Together",
    materials: ["all paints", "large paper", "brush", "pencil", "ruler"],
    task: "Draw a circle. Divide it into sections. Fill each section with a color you can find in nature. Label where you might see that color outside.",
    checklist: [
      "I drew a large circle",
      "I divided it into color sections",
      "I mixed and painted each nature color",
      "I labeled where each color appears in nature",
      "I signed my artwork",
    ],
    quiz: undefined,
    relatedResources: [
      { label: "Color Theory Curriculum", href: "/curriculum/color-theory" },
    ],
    nextLessonSlug: "color-mixing-final-project",
    estimatedMinutes: 30,
  },
  {
    title: "Mini Quiz + Final Project",
    slug: "color-mixing-final-project",
    pathSlug: "color-mixing-starter",
    tierRequired: "family",
    summary:
      "Test what you have learned and complete a final independent color mixing project of your choice.",
    videoPlaceholderTitle: "Final Project — Your Own Color Exploration",
    materials: ["all paints", "paper", "brush", "water"],
    task: "Create one final artwork that shows what you learned about color mixing. It can be abstract, a landscape, or anything you choose.",
    checklist: [
      "I completed the mini quiz",
      "I planned my final artwork",
      "I used at least one mixed color",
      "I finished my artwork",
      "I shared it with someone",
    ],
    quiz: {
      question: "Which color is made by mixing red and yellow?",
      options: ["Green", "Purple", "Orange", "Brown"],
      correctIndex: 2,
    },
    relatedResources: [
      { label: "Painting Curriculum", href: "/curriculum/painting" },
      { label: "Bookstore", href: "/bookstore" },
    ],
    estimatedMinutes: 30,
  },
];

// ─────────────────────────────────────────────────────────────
// Path 2: Art Shelf Setup
// ─────────────────────────────────────────────────────────────

const artShelfLessons: AcademyLesson[] = [
  {
    title: "Why the Art Shelf Matters",
    slug: "why-art-shelf-matters",
    pathSlug: "art-shelf-setup",
    tierRequired: "free",
    summary:
      "Understand how a prepared art shelf builds independence, confidence, and creative routine in children.",
    videoPlaceholderTitle: "Why the Art Shelf Matters",
    materials: ["notebook", "pen"],
    task: "Observe your current art space. Sketch or photograph it. Note what works and what could improve.",
    checklist: [
      "I watched the lesson",
      "I observed my current art space",
      "I sketched or photographed it",
      "I wrote one thing to improve",
    ],
    quiz: undefined,
    relatedResources: [
      { label: "Art Shelf Training", href: "/training/art-shelf" },
    ],
    nextLessonSlug: "choosing-first-materials",
    estimatedMinutes: 10,
  },
  {
    title: "Choosing the First Materials",
    slug: "choosing-first-materials",
    pathSlug: "art-shelf-setup",
    tierRequired: "family",
    summary:
      "Learn which materials to introduce first and why quality matters more than quantity for young artists.",
    videoPlaceholderTitle: "Choosing Your First Materials",
    materials: ["notebook", "pen", "art supply catalog or website"],
    task: "Make a list of 5–7 materials you want on your art shelf. Rank them by priority.",
    checklist: [
      "I watched the lesson",
      "I made a materials list",
      "I ranked them by priority",
      "I checked what I already have",
    ],
    quiz: {
      question: "What matters most when choosing art materials for children?",
      options: ["Quantity — lots of colors", "Quality — safe, usable tools", "Price — cheapest possible", "Brand — most popular name"],
      correctIndex: 1,
    },
    relatedResources: [
      { label: "Art Supplies", href: "/art-supplies" },
    ],
    nextLessonSlug: "shelf-layout-rotation",
    estimatedMinutes: 15,
  },
  {
    title: "Shelf Layout and Rotation",
    slug: "shelf-layout-rotation",
    pathSlug: "art-shelf-setup",
    tierRequired: "family",
    summary:
      "Design a shelf layout that children can use independently. Learn how to rotate materials to maintain interest.",
    videoPlaceholderTitle: "Shelf Layout and Rotation",
    materials: ["shelf or table space", "trays or containers", "materials list"],
    task: "Arrange your materials on the shelf. Take a photo. Write a rotation plan for the next month.",
    checklist: [
      "I watched the lesson",
      "I arranged my shelf",
      "Everything is within child reach",
      "I took a photo",
      "I wrote a rotation plan",
    ],
    quiz: undefined,
    relatedResources: [
      { label: "Art Shelf Training", href: "/training/art-shelf" },
    ],
    nextLessonSlug: "independence-cleanup",
    estimatedMinutes: 20,
  },
  {
    title: "Independence and Cleanup",
    slug: "independence-cleanup",
    pathSlug: "art-shelf-setup",
    tierRequired: "family",
    summary:
      "Teach children to use the shelf independently and clean up with confidence. Build routines that last.",
    videoPlaceholderTitle: "Independence and Cleanup Routines",
    materials: ["cleanup supplies", "small dustpan", "sponge", "apron"],
    task: "Practice the cleanup routine yourself. Then guide a child through it. Notice what needs adjustment.",
    checklist: [
      "I watched the lesson",
      "I practiced the cleanup routine",
      "I guided a child through it",
      "I noted what to adjust",
    ],
    quiz: {
      question: "Why is cleanup part of the art lesson?",
      options: [
        "It keeps the room tidy",
        "It builds responsibility and order",
        "It is required by parents",
        "It prevents paint stains",
      ],
      correctIndex: 1,
    },
    relatedResources: [
      { label: "Process-Based Art Training", href: "/training/process-based-art" },
    ],
    nextLessonSlug: "art-shelf-observation",
    estimatedMinutes: 15,
  },
  {
    title: "Observation Task",
    slug: "art-shelf-observation",
    pathSlug: "art-shelf-setup",
    tierRequired: "family",
    summary:
      "Watch how children use the shelf without interrupting. Record what you notice about their choices and behaviors.",
    videoPlaceholderTitle: "Observation Without Interrupting",
    materials: ["notebook", "pen", "timer"],
    task: "Observe for 15 minutes. Write down what materials children choose, how long they stay, and what they say.",
    checklist: [
      "I set a 15-minute timer",
      "I observed without interrupting",
      "I wrote down material choices",
      "I noted how long children stayed",
      "I recorded one surprise",
    ],
    quiz: undefined,
    relatedResources: [
      { label: "Positive Art Talk Training", href: "/training/positive-art-talk" },
    ],
    nextLessonSlug: "build-first-art-shelf-plan",
    estimatedMinutes: 20,
  },
  {
    title: "Build Your First Art Shelf Plan",
    slug: "build-first-art-shelf-plan",
    pathSlug: "art-shelf-setup",
    tierRequired: "family",
    summary:
      "Create a complete art shelf plan including materials, layout, rotation schedule, and cleanup routine.",
    videoPlaceholderTitle: "Build Your First Art Shelf Plan",
    materials: ["notebook", "pen", "photos of your shelf"],
    task: "Write a one-page art shelf plan. Include materials, layout sketch, rotation schedule, and cleanup steps.",
    checklist: [
      "I wrote my art shelf plan",
      "I included a layout sketch",
      "I listed all materials",
      "I created a rotation schedule",
      "I wrote cleanup steps",
    ],
    quiz: {
      question: "How often should you rotate materials on an art shelf?",
      options: ["Daily", "Weekly to monthly", "Yearly", "Never"],
      correctIndex: 1,
    },
    relatedResources: [
      { label: "Art Shelf Training", href: "/training/art-shelf" },
      { label: "Art Supplies", href: "/art-supplies" },
    ],
    estimatedMinutes: 25,
  },
];

// ─────────────────────────────────────────────────────────────
// Path 3: Clay Play Basics
// ─────────────────────────────────────────────────────────────

const clayPlayLessons: AcademyLesson[] = [
  {
    title: "Why Clay Builds Strength",
    slug: "why-clay-builds-strength",
    pathSlug: "clay-play-basics",
    tierRequired: "family",
    summary:
      "Explore how clay work develops fine motor strength, coordination, and sensory awareness in children.",
    videoPlaceholderTitle: "Why Clay Builds Strength",
    materials: ["notebook", "pen"],
    task: "Squeeze a ball of clay 20 times with each hand. Notice how your hands feel before and after.",
    checklist: [
      "I watched the lesson",
      "I squeezed clay 20 times with each hand",
      "I noticed how my hands felt",
      "I wrote one observation",
    ],
    quiz: {
      question: "What does clay work help develop in children?",
      options: ["Only artistic talent", "Fine motor strength and coordination", "Only patience", "Reading skills"],
      correctIndex: 1,
    },
    relatedResources: [
      { label: "Clay Modeling Curriculum", href: "/curriculum/clay-modeling" },
    ],
    nextLessonSlug: "first-clay-exploration",
    estimatedMinutes: 10,
  },
  {
    title: "First Clay Exploration",
    slug: "first-clay-exploration",
    pathSlug: "clay-play-basics",
    tierRequired: "family",
    summary:
      "Introduce clay with no expectations. Let children touch, poke, squeeze, and discover the material freely.",
    videoPlaceholderTitle: "First Clay Exploration — No Expectations",
    materials: ["non-hardening clay", "tray or mat"],
    task: "Spend 10 minutes exploring clay with no goal. Just touch, squeeze, roll, and observe.",
    checklist: [
      "I watched the lesson",
      "I explored clay for 10 minutes",
      "I tried at least 3 different motions",
      "I noticed how the clay feels",
    ],
    quiz: undefined,
    relatedResources: [
      { label: "Clay Play Book", href: "/bookstore" },
    ],
    nextLessonSlug: "rolling-pinching-pressing",
    estimatedMinutes: 15,
  },
  {
    title: "Rolling, Pinching, Pressing",
    slug: "rolling-pinching-pressing",
    pathSlug: "clay-play-basics",
    tierRequired: "family",
    summary:
      "Learn the three foundational clay techniques: rolling into coils and balls, pinching into bowls, and pressing for texture.",
    videoPlaceholderTitle: "Rolling, Pinching, and Pressing Techniques",
    materials: ["clay", "rolling tool", "small bowl for pinch pot"],
    task: "Make one coil, one pinch pot, and one flat piece with pressed texture.",
    checklist: [
      "I watched the technique demo",
      "I made a coil",
      "I made a pinch pot",
      "I made a flat piece with texture",
      "I let them dry or stored them",
    ],
    quiz: {
      question: "Which technique creates a bowl shape from a ball of clay?",
      options: ["Rolling", "Pinching", "Pressing", "Cutting"],
      correctIndex: 1,
    },
    relatedResources: [
      { label: "Clay Modeling Curriculum", href: "/curriculum/clay-modeling" },
    ],
    nextLessonSlug: "texture-tools",
    estimatedMinutes: 20,
  },
  {
    title: "Texture Tools",
    slug: "texture-tools",
    pathSlug: "clay-play-basics",
    tierRequired: "studioPlus",
    summary:
      "Discover how everyday objects create texture in clay. Leaves, forks, fabric, and more become artistic tools.",
    videoPlaceholderTitle: "Texture Tools — Everyday Objects as Art Tools",
    materials: ["clay", "flat clay surface", "5 texture tools from around the house"],
    task: "Find 5 objects that make interesting textures. Press each into clay. Label what each object is.",
    checklist: [
      "I watched the lesson",
      "I found 5 texture tools",
      "I pressed each into clay",
      "I labeled each texture",
      "I chose my favorite",
    ],
    quiz: {
      question: "What can you use to create texture in clay?",
      options: ["Only official clay tools", "Everyday objects like leaves and forks", "Only your fingers", "Nothing — clay should be smooth"],
      correctIndex: 1,
    },
    relatedResources: [
      { label: "Clay Modeling Curriculum", href: "/curriculum/clay-modeling" },
    ],
    nextLessonSlug: "clay-storytelling",
    estimatedMinutes: 20,
  },
  {
    title: "Clay Storytelling",
    slug: "clay-storytelling",
    pathSlug: "clay-play-basics",
    tierRequired: "studioPlus",
    summary:
      "Use clay to tell a story. Create characters, settings, or scenes from a favorite book or imagination.",
    videoPlaceholderTitle: "Clay Storytelling — Characters and Scenes",
    materials: ["clay", "small props", "story book (optional)"],
    task: "Create a clay scene that tells a short story. It can be from a book or from your imagination.",
    checklist: [
      "I watched the lesson",
      "I chose a story idea",
      "I created at least 2 clay characters",
      "I built a simple setting",
      "I told the story out loud",
    ],
    quiz: undefined,
    relatedResources: [
      { label: "Storybook Art Video", href: "/free-resources/storybook-art-video" },
    ],
    nextLessonSlug: "clay-observation",
    estimatedMinutes: 25,
  },
  {
    title: "Parent / Teacher Observation",
    slug: "clay-observation",
    pathSlug: "clay-play-basics",
    tierRequired: "studioPlus",
    summary:
      "Observe a child working with clay. Document what you see without directing. Learn to read the child's process.",
    videoPlaceholderTitle: "Observation — Reading the Child's Clay Process",
    materials: ["notebook", "pen", "timer"],
    task: "Observe a child with clay for 15 minutes. Write what they do, what they say, and how they problem-solve.",
    checklist: [
      "I watched the lesson",
      "I observed for 15 minutes",
      "I wrote what the child did",
      "I wrote what the child said",
      "I noted one problem-solving moment",
    ],
    quiz: {
      question: "When observing a child with clay, what should you do?",
      options: ["Correct their technique", "Direct them to make something specific", "Watch without interrupting", "Show them a better way"],
      correctIndex: 2,
    },
    relatedResources: [
      { label: "Positive Art Talk Training", href: "/training/positive-art-talk" },
      { label: "Clay Modeling Curriculum", href: "/curriculum/clay-modeling" },
    ],
    estimatedMinutes: 20,
  },
];

// ─────────────────────────────────────────────────────────────
// Path 4: Drawing for Young Children
// ─────────────────────────────────────────────────────────────

const drawingLessons: AcademyLesson[] = [
  {
    title: "Drawing as Exploration",
    slug: "drawing-as-exploration",
    pathSlug: "drawing-young-children",
    tierRequired: "family",
    summary:
      "Redefine drawing as a process of discovery rather than copying. Help children see drawing as a language.",
    videoPlaceholderTitle: "Drawing as Exploration — Not Copying",
    materials: ["paper", "pencil", "crayons"],
    task: "Draw for 10 minutes without looking at anything specific. Just let your hand move freely.",
    checklist: [
      "I watched the lesson",
      "I drew freely for 10 minutes",
      "I didn't try to copy anything",
      "I noticed how it felt",
    ],
    quiz: {
      question: "What is the best way to introduce drawing to young children?",
      options: [
        "Show them exactly what to draw",
        "Let them explore marks and lines freely",
        "Give them coloring books",
        "Correct their drawings",
      ],
      correctIndex: 1,
    },
    relatedResources: [
      { label: "Drawing Curriculum", href: "/curriculum/drawing" },
    ],
    nextLessonSlug: "lines-shapes-marks",
    estimatedMinutes: 15,
  },
  {
    title: "Lines, Shapes, and Marks",
    slug: "lines-shapes-marks",
    pathSlug: "drawing-young-children",
    tierRequired: "family",
    summary:
      "Practice making different kinds of lines and shapes. Discover how a single line can express emotion and movement.",
    videoPlaceholderTitle: "Lines, Shapes, and Marks",
    materials: ["paper", "pencil", "crayons", "oil pastels"],
    task: "Fill a page with as many different lines and shapes as you can. Try wavy, zigzag, curly, dotted, and thick lines.",
    checklist: [
      "I watched the lesson",
      "I filled a page with lines",
      "I tried at least 5 different line types",
      "I tried at least 3 different shapes",
    ],
    quiz: {
      question: "Which of these is a type of line?",
      options: ["Circle", "Wavy", "Square", "Triangle"],
      correctIndex: 1,
    },
    relatedResources: [
      { label: "Drawing Curriculum", href: "/curriculum/drawing" },
    ],
    nextLessonSlug: "nature-drawing-prompt",
    estimatedMinutes: 15,
  },
  {
    title: "Nature Drawing Prompt",
    slug: "nature-drawing-prompt",
    pathSlug: "drawing-young-children",
    tierRequired: "family",
    summary:
      "Take drawing outside. Use natural objects as prompts for observation and mark-making.",
    videoPlaceholderTitle: "Nature Drawing Prompt",
    materials: ["sketchbook", "pencil", "object from nature"],
    task: "Find a natural object. Draw it three times — once quickly, once slowly, once focusing on texture.",
    checklist: [
      "I watched the lesson",
      "I found a natural object",
      "I drew it quickly",
      "I drew it slowly",
      "I drew it focusing on texture",
    ],
    quiz: undefined,
    relatedResources: [
      { label: "Nature Art Training", href: "/training/nature-art" },
    ],
    nextLessonSlug: "story-drawing",
    estimatedMinutes: 20,
  },
  {
    title: "Story Drawing",
    slug: "story-drawing",
    pathSlug: "drawing-young-children",
    tierRequired: "family",
    summary:
      "Combine drawing with storytelling. Help children use images to narrate their own stories.",
    videoPlaceholderTitle: "Story Drawing — Pictures That Tell a Story",
    materials: ["paper", "pencils", "crayons"],
    task: "Draw a 3-panel story. Beginning, middle, and end. Tell the story to someone.",
    checklist: [
      "I watched the lesson",
      "I drew a beginning panel",
      "I drew a middle panel",
      "I drew an end panel",
      "I told the story out loud",
    ],
    quiz: {
      question: "How many panels should your story drawing have?",
      options: ["1", "2", "3", "10"],
      correctIndex: 2,
    },
    relatedResources: [
      { label: "Storybook Art Video", href: "/free-resources/storybook-art-video" },
    ],
    nextLessonSlug: "child-led-drawing-practice",
    estimatedMinutes: 20,
  },
  {
    title: "Child-Led Drawing Practice",
    slug: "child-led-drawing-practice",
    pathSlug: "drawing-young-children",
    tierRequired: "family",
    summary:
      "Step back and let the child lead. Learn when to offer support and when to simply witness.",
    videoPlaceholderTitle: "Child-Led Drawing Practice",
    materials: ["paper", "drawing tools", "timer"],
    task: "Set a 15-minute drawing session. Let the child choose everything. You only observe and reflect.",
    checklist: [
      "I watched the lesson",
      "I set a 15-minute timer",
      "The child chose all materials",
      "I observed without directing",
      "I reflected back what I saw",
    ],
    quiz: {
      question: "What should an adult do during child-led drawing?",
      options: [
        "Correct the drawing",
        "Show them how to do it better",
        "Observe and reflect without directing",
        "Suggest what to draw",
      ],
      correctIndex: 2,
    },
    relatedResources: [
      { label: "Positive Art Talk Training", href: "/training/positive-art-talk" },
    ],
    nextLessonSlug: "mini-gallery-reflection",
    estimatedMinutes: 15,
  },
  {
    title: "Mini Gallery Reflection",
    slug: "mini-gallery-reflection",
    pathSlug: "drawing-young-children",
    tierRequired: "family",
    summary:
      "Create a mini gallery of drawings. Reflect on growth, favorite pieces, and what comes next.",
    videoPlaceholderTitle: "Mini Gallery Reflection",
    materials: ["all drawings from this path", "tape or clips", "wall or board space"],
    task: "Display all your drawings from this path. Write one sentence about each. Choose a favorite and explain why.",
    checklist: [
      "I watched the lesson",
      "I displayed all my drawings",
      "I wrote about each one",
      "I chose a favorite",
      "I explained why it is my favorite",
    ],
    quiz: undefined,
    relatedResources: [
      { label: "Drawing Curriculum", href: "/curriculum/drawing" },
      { label: "Bookstore", href: "/bookstore" },
    ],
    estimatedMinutes: 20,
  },
];

// ─────────────────────────────────────────────────────────────
// Path 5: Teacher Certification Preview
// ─────────────────────────────────────────────────────────────

const teacherCertLessons: AcademyLesson[] = [
  {
    title: "What Is the Nature Art Method?",
    slug: "what-is-nature-art-method",
    pathSlug: "teacher-certification-preview",
    tierRequired: "free",
    summary:
      "An introduction to the Nature Art Method — a Montessori-aligned approach to teaching visual arts through observation, sequence, and child-led exploration.",
    videoPlaceholderTitle: "What Is the Nature Art Method?",
    materials: ["notebook", "pen"],
    task: "Write down three questions you have about teaching art to children. Note why each matters to you.",
    checklist: [
      "I watched the introduction",
      "I wrote three questions",
      "I noted why each matters",
    ],
    quiz: undefined,
    relatedResources: [
      { label: "Art Teaching Blueprint", href: "/certification/art-teaching-blueprint" },
    ],
    nextLessonSlug: "how-children-learn-visual-arts",
    estimatedMinutes: 15,
  },
  {
    title: "How Children Learn Visual Arts",
    slug: "how-children-learn-visual-arts",
    pathSlug: "teacher-certification-preview",
    tierRequired: "teacher",
    summary:
      "Understand the developmental stages of art-making in children from toddlerhood through elementary. Learn what to expect and how to respond.",
    videoPlaceholderTitle: "How Children Learn Visual Arts — Developmental Stages",
    materials: ["notebook", "pen", "Phases of Art Development video"],
    task: "Review the phases of art development. Match one phase to a child you know. Write a brief observation.",
    checklist: [
      "I watched the lesson",
      "I reviewed the phases",
      "I matched a phase to a child I know",
      "I wrote a brief observation",
    ],
    quiz: {
      question: "At what age do children typically begin representational drawing?",
      options: ["6 months", "2 years", "4–5 years", "10 years"],
      correctIndex: 2,
    },
    relatedResources: [
      { label: "Phases of Art Development", href: "/free-resources/phases-of-art-development" },
    ],
    nextLessonSlug: "prepared-environment-for-art",
    estimatedMinutes: 25,
  },
  {
    title: "Prepared Environment for Art",
    slug: "prepared-environment-for-art",
    pathSlug: "teacher-certification-preview",
    tierRequired: "teacher",
    summary:
      "Design an art environment that supports independence, creativity, and order. Apply Montessori principles to the art area.",
    videoPlaceholderTitle: "Prepared Environment for Art",
    materials: ["room layout sketch", "materials list", "shelf plan"],
    task: "Sketch your ideal art environment. Label each zone and list materials for independence.",
    checklist: [
      "I watched the lesson",
      "I sketched my ideal art environment",
      "I labeled each zone",
      "I listed materials for independence",
    ],
    quiz: {
      question: "What is a key principle of a prepared art environment?",
      options: [
        "The teacher directs all art activities",
        "Children can access materials independently",
        "Art is only done at scheduled times",
        "Only one child uses the art area at a time",
      ],
      correctIndex: 1,
    },
    relatedResources: [
      { label: "Art Shelf Training", href: "/training/art-shelf" },
    ],
    nextLessonSlug: "direct-indirect-aims",
    estimatedMinutes: 25,
  },
  {
    title: "Direct and Indirect Aims",
    slug: "direct-indirect-aims",
    pathSlug: "teacher-certification-preview",
    tierRequired: "teacher",
    summary:
      "Articulate the direct and indirect aims of each art lesson. Connect art activities to broader developmental goals.",
    videoPlaceholderTitle: "Direct and Indirect Aims of Art Lessons",
    materials: ["notebook", "pen", "lesson plan template"],
    task: "Choose one art activity. Write the direct aim, three indirect aims, and one observable outcome.",
    checklist: [
      "I watched the lesson",
      "I chose one art activity",
      "I wrote the direct aim",
      "I wrote three indirect aims",
      "I wrote one observable outcome",
    ],
    quiz: {
      question: "What is an indirect aim of a clay lesson?",
      options: [
        "To make a clay pot",
        "To strengthen fine motor skills",
        "To use clay tools correctly",
        "To finish in 20 minutes",
      ],
      correctIndex: 1,
    },
    relatedResources: [
      { label: "Art Teaching Blueprint", href: "/certification/art-teaching-blueprint" },
    ],
    nextLessonSlug: "curriculum-planning-preview",
    estimatedMinutes: 25,
  },
  {
    title: "Curriculum Planning Preview",
    slug: "curriculum-planning-preview",
    pathSlug: "teacher-certification-preview",
    tierRequired: "teacher",
    summary:
      "Preview how to sequence art lessons across a year. See how painting, drawing, clay, and color theory build upon each other.",
    videoPlaceholderTitle: "Curriculum Planning Preview — A Year of Art",
    materials: ["year calendar", "curriculum overview", "notebook"],
    task: "Draft a one-month art plan. Include one lesson from each area: painting, drawing, clay, color.",
    checklist: [
      "I watched the lesson",
      "I drafted a one-month plan",
      "I included painting",
      "I included drawing",
      "I included clay",
      "I included color theory",
    ],
    quiz: {
      question: "Which curriculum area is typically introduced first in the Nature Art Method?",
      options: ["Clay", "Painting", "Color Theory", "Drawing"],
      correctIndex: 1,
    },
    relatedResources: [
      { label: "Painting Curriculum", href: "/curriculum/painting" },
      { label: "Drawing Curriculum", href: "/curriculum/drawing" },
      { label: "Color Theory Curriculum", href: "/curriculum/color-theory" },
      { label: "Clay Modeling Curriculum", href: "/curriculum/clay-modeling" },
    ],
    nextLessonSlug: "certification-next-steps",
    estimatedMinutes: 30,
  },
  {
    title: "Certification Next Steps",
    slug: "certification-next-steps",
    pathSlug: "teacher-certification-preview",
    tierRequired: "teacher",
    summary:
      "Learn what the full Art Teaching Blueprint certification entails and how to take the next step in your professional journey.",
    videoPlaceholderTitle: "Certification Next Steps",
    materials: ["notebook", "pen", "certification brochure (optional)"],
    task: "Write a one-page reflection: Why do you want to teach art? What do you hope to gain from certification?",
    checklist: [
      "I watched the lesson",
      "I reflected on why I want to teach art",
      "I wrote what I hope to gain",
      "I identified one next step",
    ],
    quiz: undefined,
    relatedResources: [
      { label: "Art Teaching Blueprint", href: "/certification/art-teaching-blueprint" },
      { label: "Certification", href: "/certification" },
    ],
    estimatedMinutes: 20,
  },
];

// ─────────────────────────────────────────────────────────────
// All Paths
// ─────────────────────────────────────────────────────────────

export const academyPaths: AcademyPath[] = [
  {
    title: "Color Mixing Starter",
    slug: "color-mixing-starter",
    audience: "families, homeschool, teachers",
    tier: "free",
    description:
      "A beginner-friendly introduction to color mixing through observation, paint, and nature.",
    outcome:
      "Children learn how colors mix, how to observe nature colors, and how to create their own nature color wheel.",
    estimatedTime: "45–60 minutes",
    accentColor: "honey",
    bgTint: "bg-bee-yellow/5",
    lessons: colorMixingLessons,
  },
  {
    title: "Art Shelf Setup",
    slug: "art-shelf-setup",
    audience: "parents, homeschool, teachers",
    tier: "free",
    description:
      "Learn how to prepare a beautiful independent art shelf for children.",
    outcome:
      "Parents and educators create a simple, organized art shelf that supports independence and creative confidence.",
    estimatedTime: "60–90 minutes",
    accentColor: "sage",
    bgTint: "bg-sage/5",
    lessons: artShelfLessons,
  },
  {
    title: "Clay Play Basics",
    slug: "clay-play-basics",
    audience: "families, toddlers, teachers",
    tier: "family",
    description:
      "Hands-on clay exploration for strength, creativity, sensory work, and early art confidence.",
    outcome:
      "Children explore clay through rolling, pinching, pressing, texture, and storytelling.",
    estimatedTime: "1–2 hours",
    accentColor: "creative-pink",
    bgTint: "bg-creative-pink/5",
    lessons: clayPlayLessons,
  },
  {
    title: "Drawing for Young Children",
    slug: "drawing-young-children",
    audience: "families, homeschool, teachers",
    tier: "family",
    description:
      "Gentle drawing invitations using lines, shapes, nature, observation, and storytelling.",
    outcome:
      "Children build drawing confidence without rigid copying or pressure.",
    estimatedTime: "1 hour",
    accentColor: "kids-blue",
    bgTint: "bg-kids-blue/5",
    lessons: drawingLessons,
  },
  {
    title: "Teacher Certification Preview",
    slug: "teacher-certification-preview",
    audience: "teachers, schools, serious homeschool educators",
    tier: "teacher",
    description:
      "Preview the professional Art Teaching Blueprint / Nature Art Method pathway.",
    outcome:
      "Educators understand the deeper training path and how the full certification could support classroom art teaching.",
    estimatedTime: "2 hours",
    accentColor: "ink",
    bgTint: "bg-ink/5",
    lessons: teacherCertLessons,
  },
];

// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────

export function getAcademyPathBySlug(slug: string): AcademyPath | undefined {
  return academyPaths.find((p) => p.slug === slug);
}

export function getAcademyLessonBySlug(slug: string): AcademyLesson | undefined {
  for (const path of academyPaths) {
    const lesson = path.lessons.find((l) => l.slug === slug);
    if (lesson) return lesson;
  }
  return undefined;
}

export function getLessonsByPathSlug(pathSlug: string): AcademyLesson[] {
  const path = getAcademyPathBySlug(pathSlug);
  return path?.lessons ?? [];
}

export function getNextLessonInPath(
  pathSlug: string,
  currentLessonSlug: string
): AcademyLesson | undefined {
  const lessons = getLessonsByPathSlug(pathSlug);
  const idx = lessons.findIndex((l) => l.slug === currentLessonSlug);
  return lessons[idx + 1];
}

export function getTierRank(tier: AcademyTier): number {
  const ranks: Record<AcademyTier, number> = {
    free: 0,
    family: 1,
    studioPlus: 2,
    teacher: 3,
  };
  return ranks[tier];
}

export function canAccessLesson(tierRequired: AcademyTier, userTier: AcademyTier): boolean {
  return getTierRank(userTier) >= getTierRank(tierRequired);
}
