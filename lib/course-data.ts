export interface Course {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  price: number
  duration: string
  level: string
  rating: number
  students: number
  instructor: {
    name: string
    bio: string
    image: string
  }
  modules: {
    title: string
    lessons: string[]
  }[]
  learningOutcomes: string[]
}

const courses: Course[] = [
  {
    id: "1",
    title: "Bisnis Digital Marketing untuk Pemula",
    description:
      "Pelajari strategi digital marketing yang efektif untuk memulai bisnis online Anda dari nol hingga menghasilkan profit konsisten.",
    longDescription:
      "Kursus komprehensif yang dirancang khusus untuk pemula yang ingin memulai bisnis digital marketing. Anda akan mempelajari semua aspek penting mulai dari riset pasar, pembuatan konten, strategi media sosial, hingga teknik konversi yang terbukti efektif. Dengan panduan step-by-step dan studi kasus nyata, Anda akan memiliki kemampuan untuk membangun bisnis digital marketing yang menguntungkan. Kursus ini cocok untuk siapa saja yang ingin memulai karir di bidang digital marketing atau mengembangkan bisnis existing dengan strategi digital yang tepat.",
    image: "/placeholder.svg?height=400&width=600&text=Digital+Marketing",
    price: 97,
    duration: "8 weeks",
    level: "Beginner",
    rating: 4.8,
    students: 2847,
    instructor: {
      name: "Sarah Johnson",
      bio: "Digital Marketing Expert dengan pengalaman 8+ tahun membantu 500+ bisnis meningkatkan revenue melalui strategi digital marketing. Certified Google Ads & Facebook Blueprint.",
      image: "/placeholder.svg?height=80&width=80&text=Sarah",
    },
    modules: [
      {
        title: "Fundamentals of Digital Marketing",
        lessons: [
          "Introduction to Digital Marketing",
          "Understanding Your Target Audience",
          "Digital Marketing Channels Overview",
          "Setting Up Analytics and Tracking",
        ],
      },
      {
        title: "Social Media Marketing Strategy",
        lessons: [
          "Platform Selection and Optimization",
          "Content Creation and Curation",
          "Community Building and Engagement",
          "Social Media Advertising Basics",
        ],
      },
      {
        title: "Search Engine Marketing",
        lessons: [
          "SEO Fundamentals",
          "Keyword Research and Strategy",
          "Google Ads Campaign Setup",
          "Landing Page Optimization",
        ],
      },
      {
        title: "Email Marketing and Automation",
        lessons: [
          "Building Email Lists",
          "Email Campaign Design",
          "Marketing Automation Setup",
          "Performance Analysis and Optimization",
        ],
      },
    ],
    learningOutcomes: [
      "Memahami konsep dasar digital marketing dan berbagai channel yang tersedia",
      "Mampu membuat strategi social media marketing yang efektif untuk berbagai platform",
      "Menguasai teknik SEO dan Google Ads untuk meningkatkan visibility online",
      "Membangun sistem email marketing dan automation yang mengkonversi",
      "Menganalisis performa campaign dan melakukan optimisasi berkelanjutan",
      "Memiliki roadmap lengkap untuk memulai bisnis digital marketing sendiri",
    ],
  },
  {
    id: "2",
    title: "Web Development Bootcamp",
    description:
      "Belajar membuat website profesional dari nol menggunakan teknologi terkini. Cocok untuk pemula yang ingin berkarir sebagai web developer.",
    longDescription:
      "Bootcamp intensif yang akan mengubah Anda dari pemula menjadi web developer yang kompeten. Kurikulum dirancang mengikuti standar industri dengan fokus pada praktik langsung dan project-based learning. Anda akan menguasai HTML, CSS, JavaScript, React, dan Node.js melalui pembangunan project nyata. Setiap modul dilengkapi dengan assignment dan code review untuk memastikan pemahaman yang mendalam. Di akhir bootcamp, Anda akan memiliki portfolio yang kuat dan siap untuk melamar pekerjaan sebagai web developer atau memulai freelance career.",
    image: "/placeholder.svg?height=400&width=600&text=Web+Development",
    price: 197,
    duration: "12 weeks",
    level: "Beginner to Intermediate",
    rating: 4.9,
    students: 1923,
    instructor: {
      name: "Michael Chen",
      bio: "Senior Full Stack Developer dengan 10+ tahun pengalaman di tech companies. Ex-Google engineer yang telah melatih 1000+ developers. Spesialis dalam React dan Node.js.",
      image: "/placeholder.svg?height=80&width=80&text=Michael",
    },
    modules: [
      {
        title: "HTML & CSS Fundamentals",
        lessons: [
          "HTML Structure and Semantics",
          "CSS Styling and Layout",
          "Responsive Design Principles",
          "CSS Grid and Flexbox",
          "Modern CSS Techniques",
        ],
      },
      {
        title: "JavaScript Programming",
        lessons: [
          "JavaScript Basics and ES6+",
          "DOM Manipulation",
          "Asynchronous Programming",
          "API Integration",
          "Error Handling and Debugging",
        ],
      },
      {
        title: "React Development",
        lessons: [
          "React Components and JSX",
          "State Management with Hooks",
          "React Router and Navigation",
          "Context API and Global State",
          "Performance Optimization",
        ],
      },
      {
        title: "Backend Development with Node.js",
        lessons: [
          "Node.js and Express Setup",
          "Database Integration (MongoDB)",
          "Authentication and Authorization",
          "RESTful API Development",
          "Deployment and DevOps",
        ],
      },
    ],
    learningOutcomes: [
      "Menguasai HTML, CSS, dan JavaScript untuk frontend development",
      "Mampu membangun aplikasi web interaktif menggunakan React",
      "Memahami konsep backend development dengan Node.js dan Express",
      "Dapat mengintegrasikan database dan membuat RESTful API",
      "Memiliki kemampuan untuk deploy aplikasi web ke production",
      "Membangun portfolio dengan 5+ project web development yang kompleks",
    ],
  },
  {
    id: "3",
    title: "Graphic Design for Business",
    description:
      "Kuasai skill graphic design untuk kebutuhan bisnis. Dari logo design hingga marketing materials yang menarik dan profesional.",
    longDescription:
      "Kursus design grafis yang fokus pada aplikasi praktis untuk kebutuhan bisnis. Anda akan mempelajari prinsip-prinsip design yang solid, penggunaan tools profesional seperti Adobe Creative Suite, dan bagaimana menciptakan visual identity yang kuat untuk brand. Kursus ini mencakup logo design, branding materials, social media graphics, dan print design. Dengan pendekatan hands-on dan feedback dari instructor berpengalaman, Anda akan mengembangkan portfolio design yang impressive dan siap untuk freelance atau bekerja di agency.",
    image: "/placeholder.svg?height=400&width=600&text=Graphic+Design",
    price: 127,
    duration: "10 weeks",
    level: "Beginner to Intermediate",
    rating: 4.7,
    students: 3156,
    instructor: {
      name: "Amanda Rodriguez",
      bio: "Creative Director dengan 12+ tahun pengalaman di advertising agencies. Telah menangani brand-brand besar dan mengajar design di berbagai institusi. Adobe Certified Expert.",
      image: "/placeholder.svg?height=80&width=80&text=Amanda",
    },
    modules: [
      {
        title: "Design Fundamentals",
        lessons: [
          "Principles of Visual Design",
          "Color Theory and Psychology",
          "Typography and Font Selection",
          "Composition and Layout",
          "Design Thinking Process",
        ],
      },
      {
        title: "Logo and Brand Identity",
        lessons: [
          "Logo Design Process",
          "Brand Strategy and Positioning",
          "Creating Brand Guidelines",
          "Logo Variations and Applications",
          "Brand Identity Systems",
        ],
      },
      {
        title: "Digital Design Applications",
        lessons: [
          "Social Media Graphics",
          "Web Design Principles",
          "UI/UX Design Basics",
          "Digital Marketing Materials",
          "Motion Graphics Introduction",
        ],
      },
      {
        title: "Print and Production",
        lessons: [
          "Print Design Specifications",
          "Business Cards and Stationery",
          "Brochures and Flyers",
          "Packaging Design Basics",
          "File Preparation for Print",
        ],
      },
    ],
    learningOutcomes: [
      "Memahami prinsip-prinsip design grafis dan teori warna yang efektif",
      "Mampu membuat logo dan brand identity yang profesional dan memorable",
      "Menguasai Adobe Creative Suite (Photoshop, Illustrator, InDesign)",
      "Dapat merancang materials marketing digital dan print yang menarik",
      "Memiliki pemahaman tentang UI/UX design untuk aplikasi digital",
      "Membangun portfolio design yang kuat dengan 10+ project berkualitas tinggi",
    ],
  },
]

export function getCourseById(id: string): Course | undefined {
  return courses.find((course) => course.id === id)
}

export function getAllCourses(): Course[] {
  return courses
}
