import {
  Code,
  Palette,
  TrendingUp,
  MoreHorizontal,
  Star,
  ShoppingCart,
  Users,
  PenTool,
  Smartphone,
  Search,
  Camera,
  Video,
  FileText,
  Headphones,
  GraduationCap,
  Truck,
  Heart,
  UtensilsCrossed,
  Dumbbell,
  Share2,
  type LucideIcon,
} from "lucide-react"

export type Category = {
  id: string
  name: string
  icon: LucideIcon
}

export type Course = {
  id: string
  title: string
  imageUrl: string
  categoryId: string
  description: string
  level: "Easy" | "Medium" | "Hard"
  rating: number
  students: number
  price: number
  originalPrice?: number
  modules: {
    id: number
    title: string
    lessons: {
      id: number
      title: string
      type: "video" | "pdf"
    }[]
  }[]
  learningOutcomes: string[]
}

export type Product = {
  id: string
  name: string
  imageUrl: string
  description: string
}

export const mainCategories: Category[] = [
  { id: "popular", name: "Populer", icon: Star },
  { id: "web-development", name: "Web Development", icon: Code },
  { id: "digital-marketing", name: "Digital Marketing", icon: TrendingUp },
  { id: "design-services", name: "Design Services", icon: Palette },
  { id: "more", name: "Lainnya", icon: MoreHorizontal },
]

export const additionalCategories: Category[] = [
  { id: "e-commerce", name: "E-Commerce", icon: ShoppingCart },
  { id: "consulting", name: "Consulting", icon: Users },
  { id: "content-creation", name: "Content Creation", icon: PenTool },
  { id: "mobile-apps", name: "Mobile Apps", icon: Smartphone },
  { id: "seo-services", name: "SEO Services", icon: Search },
  { id: "photography", name: "Photography", icon: Camera },
  { id: "video-production", name: "Video Production", icon: Video },
  { id: "copywriting", name: "Copywriting", icon: FileText },
  { id: "virtual-assistant", name: "Virtual Assistant", icon: Headphones },
  { id: "online-tutoring", name: "Online Tutoring", icon: GraduationCap },
  { id: "delivery-services", name: "Delivery Services", icon: Truck },
  { id: "health-wellness", name: "Health & Wellness", icon: Heart },
  { id: "food-beverage", name: "Food & Beverage", icon: UtensilsCrossed },
  { id: "fitness-coaching", name: "Fitness Coaching", icon: Dumbbell },
  { id: "social-media", name: "Social Media", icon: Share2 },
]

export const allCategories: Category[] = [...mainCategories.slice(0, 4), ...additionalCategories]

export const courses: Course[] = [
  // Web Development
  {
    id: "c1",
    title: "Jasa Pembuatan Website Bisnis",
    imageUrl: "/images/1.jpg",
    categoryId: "web-development",
    description:
      "Pelajari cara membangun bisnis jasa pembuatan website untuk UMKM dan perusahaan kecil. Dari landing page hingga website e-commerce.",
    level: "Easy",
    rating: 4.8,
    students: 2340,
    price: 299000,
    originalPrice: 499000,
    modules: [
      {
        id: 1,
        title: "Pengenalan Website Bisnis",
        lessons: [
          { id: 1, title: "Konsep Website Bisnis", type: "video" },
          { id: 2, title: "Jenis-jenis Website", type: "video" },
          { id: 3, title: "Analisis Kebutuhan Klien", type: "pdf" },
          { id: 4, title: "Studi Kasus Website UMKM", type: "video" },
        ],
      },
      {
        id: 2,
        title: "Desain & Development",
        lessons: [
          { id: 5, title: "Prinsip UI/UX untuk Bisnis", type: "video" },
          { id: 6, title: "Tools Development", type: "pdf" },
          { id: 7, title: "Responsive Design", type: "video" },
          { id: 8, title: "Optimasi Performance", type: "video" },
        ],
      },
      {
        id: 3,
        title: "Bisnis & Marketing",
        lessons: [
          { id: 9, title: "Strategi Pricing", type: "video" },
          { id: 10, title: "Client Acquisition", type: "pdf" },
          { id: 11, title: "Portfolio Building", type: "video" },
          { id: 12, title: "Scaling Business", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Menguasai teknik pembuatan website profesional",
      "Memahami kebutuhan bisnis klien",
      "Mampu menentukan harga jasa yang kompetitif",
      "Membangun portfolio yang menarik",
    ],
  },
  {
    id: "c2",
    title: "Digital Marketing Agency",
    imageUrl: "/images/2.jpg",
    categoryId: "digital-marketing",
    description:
      "Bangun agency digital marketing dari nol. Pelajari strategi marketing, client management, dan scaling business.",
    level: "Medium",
    rating: 4.7,
    students: 1890,
    price: 399000,
    originalPrice: 599000,
    modules: [
      {
        id: 1,
        title: "Fundamentals Digital Marketing",
        lessons: [
          { id: 1, title: "Digital Marketing Landscape", type: "video" },
          { id: 2, title: "Target Audience Analysis", type: "video" },
          { id: 3, title: "Marketing Funnel Strategy", type: "pdf" },
          { id: 4, title: "ROI Measurement", type: "video" },
        ],
      },
      {
        id: 2,
        title: "Agency Operations",
        lessons: [
          { id: 5, title: "Service Packages", type: "video" },
          { id: 6, title: "Client Onboarding", type: "pdf" },
          { id: 7, title: "Team Management", type: "video" },
          { id: 8, title: "Reporting Systems", type: "video" },
        ],
      },
      {
        id: 3,
        title: "Growth & Scaling",
        lessons: [
          { id: 9, title: "Lead Generation", type: "video" },
          { id: 10, title: "Partnership Strategy", type: "pdf" },
          { id: 11, title: "Automation Tools", type: "video" },
          { id: 12, title: "Exit Strategy", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Membangun agency digital marketing yang profitable",
      "Menguasai berbagai channel marketing digital",
      "Mampu mengelola tim dan client secara efektif",
      "Memahami strategi scaling business",
    ],
  },
  {
    id: "c3",
    title: "Jasa Design Grafis & Branding",
    imageUrl: "/images/3.jpg",
    categoryId: "design-services",
    description:
      "Mulai bisnis jasa design grafis dan branding. Dari logo design hingga brand identity lengkap untuk berbagai industri.",
    level: "Easy",
    rating: 4.9,
    students: 3120,
    price: 249000,
    originalPrice: 399000,
    modules: [
      {
        id: 1,
        title: "Design Fundamentals",
        lessons: [
          { id: 1, title: "Prinsip Design", type: "video" },
          { id: 2, title: "Color Theory", type: "video" },
          { id: 3, title: "Typography Basics", type: "pdf" },
          { id: 4, title: "Composition Rules", type: "video" },
        ],
      },
      {
        id: 2,
        title: "Branding Strategy",
        lessons: [
          { id: 5, title: "Brand Identity Development", type: "video" },
          { id: 6, title: "Logo Design Process", type: "pdf" },
          { id: 7, title: "Brand Guidelines", type: "video" },
          { id: 8, title: "Client Presentation", type: "video" },
        ],
      },
      {
        id: 3,
        title: "Business Development",
        lessons: [
          { id: 9, title: "Portfolio Creation", type: "video" },
          { id: 10, title: "Pricing Strategy", type: "pdf" },
          { id: 11, title: "Client Communication", type: "video" },
          { id: 12, title: "Recurring Revenue", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Menguasai prinsip design dan branding",
      "Mampu membuat brand identity yang kuat",
      "Memahami proses kerja dengan klien",
      "Membangun bisnis design yang sustainable",
    ],
  },
  {
    id: "c4",
    title: "E-commerce & Dropshipping",
    imageUrl: "/images/4.jpg",
    categoryId: "e-commerce",
    description:
      "Bangun toko online yang profitable dengan model dropshipping. Pelajari product research, supplier management, dan marketing strategy.",
    level: "Medium",
    rating: 4.6,
    students: 2780,
    price: 349000,
    originalPrice: 549000,
    modules: [
      {
        id: 1,
        title: "E-commerce Basics",
        lessons: [
          { id: 1, title: "Business Model Overview", type: "video" },
          { id: 2, title: "Market Research", type: "video" },
          { id: 3, title: "Platform Selection", type: "pdf" },
          { id: 4, title: "Legal Requirements", type: "video" },
        ],
      },
      {
        id: 2,
        title: "Product & Supplier",
        lessons: [
          { id: 5, title: "Product Research Methods", type: "video" },
          { id: 6, title: "Supplier Evaluation", type: "pdf" },
          { id: 7, title: "Quality Control", type: "video" },
          { id: 8, title: "Inventory Management", type: "video" },
        ],
      },
      {
        id: 3,
        title: "Marketing & Growth",
        lessons: [
          { id: 9, title: "Store Optimization", type: "video" },
          { id: 10, title: "Paid Advertising", type: "pdf" },
          { id: 11, title: "Customer Service", type: "video" },
          { id: 12, title: "Scaling Strategy", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Membangun toko online yang profitable",
      "Menguasai teknik product research",
      "Mampu mengelola supplier dan inventory",
      "Memahami strategi marketing e-commerce",
    ],
  },
  {
    id: "c5",
    title: "Konsultan Bisnis Digital",
    imageUrl: "/images/5.jpg",
    categoryId: "consulting",
    description:
      "Jadilah konsultan bisnis digital yang dicari. Pelajari metodologi consulting, client acquisition, dan premium pricing.",
    level: "Hard",
    rating: 4.8,
    students: 1560,
    price: 599000,
    originalPrice: 899000,
    modules: [
      {
        id: 1,
        title: "Consulting Fundamentals",
        lessons: [
          { id: 1, title: "Consulting Methodology", type: "video" },
          { id: 2, title: "Problem Diagnosis", type: "video" },
          { id: 3, title: "Solution Framework", type: "pdf" },
          { id: 4, title: "Value Proposition", type: "video" },
        ],
      },
      {
        id: 2,
        title: "Client Management",
        lessons: [
          { id: 5, title: "Client Discovery", type: "video" },
          { id: 6, title: "Proposal Writing", type: "pdf" },
          { id: 7, title: "Project Management", type: "video" },
          { id: 8, title: "Results Measurement", type: "video" },
        ],
      },
      {
        id: 3,
        title: "Business Growth",
        lessons: [
          { id: 9, title: "Premium Positioning", type: "video" },
          { id: 10, title: "Referral Systems", type: "pdf" },
          { id: 11, title: "Thought Leadership", type: "video" },
          { id: 12, title: "Scaling Consulting", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Menguasai metodologi consulting profesional",
      "Mampu mendiagnosis masalah bisnis klien",
      "Memahami strategi premium positioning",
      "Membangun reputation sebagai expert",
    ],
  },
  {
    id: "c6",
    title: "Content Creator & Influencer",
    imageUrl: "/images/6.jpg",
    categoryId: "content-creation",
    description:
      "Monetisasi passion Anda menjadi content creator. Pelajari content strategy, audience building, dan revenue streams.",
    level: "Easy",
    rating: 4.7,
    students: 4230,
    price: 199000,
    originalPrice: 349000,
    modules: [
      {
        id: 1,
        title: "Content Strategy",
        lessons: [
          { id: 1, title: "Niche Selection", type: "video" },
          { id: 2, title: "Content Planning", type: "video" },
          { id: 3, title: "Platform Strategy", type: "pdf" },
          { id: 4, title: "Content Calendar", type: "video" },
        ],
      },
      {
        id: 2,
        title: "Audience Building",
        lessons: [
          { id: 5, title: "Community Management", type: "video" },
          { id: 6, title: "Engagement Strategy", type: "pdf" },
          { id: 7, title: "Collaboration", type: "video" },
          { id: 8, title: "Analytics & Insights", type: "video" },
        ],
      },
      {
        id: 3,
        title: "Monetization",
        lessons: [
          { id: 9, title: "Revenue Streams", type: "video" },
          { id: 10, title: "Brand Partnerships", type: "pdf" },
          { id: 11, title: "Product Creation", type: "video" },
          { id: 12, title: "Long-term Strategy", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Membangun personal brand yang kuat",
      "Menguasai strategi content marketing",
      "Mampu monetisasi audience secara efektif",
      "Memahami berbagai revenue streams",
    ],
  },
  // Mobile Apps
  {
    id: "c7",
    title: "Jasa Pembuatan Aplikasi Mobile",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    categoryId: "mobile-apps",
    description:
      "Bangun bisnis jasa pembuatan aplikasi mobile untuk Android dan iOS. Dari konsep hingga publish di app store.",
    level: "Medium",
    rating: 4.6,
    students: 1890,
    price: 449000,
    originalPrice: 699000,
    modules: [
      {
        id: 1,
        title: "Mobile Development Basics",
        lessons: [
          { id: 1, title: "Platform Overview", type: "video" },
          { id: 2, title: "Development Tools", type: "video" },
          { id: 3, title: "UI/UX Mobile", type: "pdf" },
          { id: 4, title: "App Architecture", type: "video" },
        ],
      },
      {
        id: 2,
        title: "Business Strategy",
        lessons: [
          { id: 5, title: "Client Requirements", type: "video" },
          { id: 6, title: "Project Management", type: "pdf" },
          { id: 7, title: "Testing & QA", type: "video" },
          { id: 8, title: "App Store Optimization", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Menguasai development aplikasi mobile",
      "Memahami business model app development",
      "Mampu mengelola project mobile app",
      "Membangun portfolio aplikasi yang menarik",
    ],
  },
  {
    id: "c8",
    title: "Flutter Development Mastery",
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    categoryId: "mobile-apps",
    description: "Kuasai Flutter untuk membuat aplikasi cross-platform yang powerful dan efisien.",
    level: "Hard",
    rating: 4.8,
    students: 1234,
    price: 549000,
    originalPrice: 799000,
    modules: [
      {
        id: 1,
        title: "Flutter Fundamentals",
        lessons: [
          { id: 1, title: "Dart Programming", type: "video" },
          { id: 2, title: "Widget System", type: "video" },
          { id: 3, title: "State Management", type: "pdf" },
          { id: 4, title: "Navigation", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Menguasai Flutter framework",
      "Mampu membuat aplikasi cross-platform",
      "Memahami state management yang efektif",
      "Optimasi performance aplikasi",
    ],
  },

  // SEO Services
  {
    id: "c9",
    title: "Jasa SEO & Digital Marketing",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    categoryId: "seo-services",
    description: "Bangun agency SEO yang profitable. Pelajari teknik SEO terbaru, audit website, dan strategi ranking.",
    level: "Medium",
    rating: 4.7,
    students: 2156,
    price: 379000,
    originalPrice: 579000,
    modules: [
      {
        id: 1,
        title: "SEO Fundamentals",
        lessons: [
          { id: 1, title: "Search Engine Basics", type: "video" },
          { id: 2, title: "Keyword Research", type: "video" },
          { id: 3, title: "On-Page SEO", type: "pdf" },
          { id: 4, title: "Technical SEO", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Menguasai teknik SEO modern",
      "Mampu melakukan audit website",
      "Memahami strategi content marketing",
      "Membangun agency SEO yang profitable",
    ],
  },

  // Photography
  {
    id: "c10",
    title: "Bisnis Fotografi Digital",
    imageUrl: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=800&h=600&fit=crop",
    categoryId: "photography",
    description: "Monetisasi skill fotografi Anda. Dari wedding photography hingga commercial photography.",
    level: "Easy",
    rating: 4.9,
    students: 3456,
    price: 299000,
    originalPrice: 449000,
    modules: [
      {
        id: 1,
        title: "Photography Business",
        lessons: [
          { id: 1, title: "Equipment Setup", type: "video" },
          { id: 2, title: "Portfolio Building", type: "video" },
          { id: 3, title: "Client Management", type: "pdf" },
          { id: 4, title: "Pricing Strategy", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Membangun bisnis fotografi yang profitable",
      "Menguasai teknik fotografi profesional",
      "Mampu mengelola klien dengan baik",
      "Memahami strategi marketing fotografi",
    ],
  },
  {
    id: "c11",
    title: "Stock Photography Business",
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop",
    categoryId: "photography",
    description:
      "Bangun passive income dari stock photography. Pelajari cara upload dan optimasi di berbagai platform.",
    level: "Easy",
    rating: 4.5,
    students: 1876,
    price: 199000,
    originalPrice: 349000,
    modules: [
      {
        id: 1,
        title: "Stock Photography Strategy",
        lessons: [
          { id: 1, title: "Market Research", type: "video" },
          { id: 2, title: "Photo Optimization", type: "video" },
          { id: 3, title: "Platform Strategy", type: "pdf" },
          { id: 4, title: "Revenue Optimization", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Membangun passive income dari fotografi",
      "Menguasai strategi stock photography",
      "Mampu optimasi foto untuk penjualan",
      "Memahami berbagai platform stock photo",
    ],
  },

  // Video Production
  {
    id: "c12",
    title: "Video Production & Editing",
    imageUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop",
    categoryId: "video-production",
    description: "Bangun bisnis video production. Dari corporate video hingga content creator video editing services.",
    level: "Medium",
    rating: 4.6,
    students: 2234,
    price: 399000,
    originalPrice: 599000,
    modules: [
      {
        id: 1,
        title: "Video Production Business",
        lessons: [
          { id: 1, title: "Equipment & Setup", type: "video" },
          { id: 2, title: "Shooting Techniques", type: "video" },
          { id: 3, title: "Post-Production", type: "pdf" },
          { id: 4, title: "Client Delivery", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Menguasai teknik video production",
      "Mampu mengelola project video",
      "Memahami workflow post-production",
      "Membangun bisnis video yang sustainable",
    ],
  },

  // Copywriting
  {
    id: "c13",
    title: "Copywriting & Content Writing",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop",
    categoryId: "copywriting",
    description:
      "Jadilah copywriter yang dicari. Pelajari sales copy, email marketing, dan content strategy yang convert.",
    level: "Easy",
    rating: 4.8,
    students: 2890,
    price: 249000,
    originalPrice: 399000,
    modules: [
      {
        id: 1,
        title: "Copywriting Mastery",
        lessons: [
          { id: 1, title: "Psychology of Persuasion", type: "video" },
          { id: 2, title: "Sales Copy Framework", type: "video" },
          { id: 3, title: "Email Marketing", type: "pdf" },
          { id: 4, title: "Content Strategy", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Menguasai teknik copywriting yang convert",
      "Mampu menulis sales copy yang efektif",
      "Memahami psychology of persuasion",
      "Membangun karir sebagai copywriter",
    ],
  },
  {
    id: "c14",
    title: "Technical Writing Services",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b7d3?w=800&h=600&fit=crop",
    categoryId: "copywriting",
    description: "Spesialisasi dalam technical writing. Dokumentasi software, user manual, dan content teknis.",
    level: "Medium",
    rating: 4.7,
    students: 1456,
    price: 349000,
    originalPrice: 549000,
    modules: [
      {
        id: 1,
        title: "Technical Writing",
        lessons: [
          { id: 1, title: "Documentation Standards", type: "video" },
          { id: 2, title: "User Experience Writing", type: "video" },
          { id: 3, title: "API Documentation", type: "pdf" },
          { id: 4, title: "Content Management", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Menguasai technical writing",
      "Mampu membuat dokumentasi yang clear",
      "Memahami UX writing principles",
      "Membangun expertise di niche technical",
    ],
  },

  // Virtual Assistant
  {
    id: "c15",
    title: "Virtual Assistant Business",
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop",
    categoryId: "virtual-assistant",
    description: "Bangun bisnis virtual assistant yang scalable. Dari admin tasks hingga specialized VA services.",
    level: "Easy",
    rating: 4.6,
    students: 3123,
    price: 199000,
    originalPrice: 349000,
    modules: [
      {
        id: 1,
        title: "VA Business Setup",
        lessons: [
          { id: 1, title: "Service Packages", type: "video" },
          { id: 2, title: "Client Onboarding", type: "video" },
          { id: 3, title: "Tools & Systems", type: "pdf" },
          { id: 4, title: "Scaling Strategy", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Membangun bisnis VA yang profitable",
      "Menguasai tools productivity",
      "Mampu mengelola multiple clients",
      "Memahami strategi scaling VA business",
    ],
  },

  // Online Tutoring
  {
    id: "c16",
    title: "Online Tutoring & Course Creation",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    categoryId: "online-tutoring",
    description: "Monetisasi keahlian Anda melalui online tutoring dan course creation. Build your education empire.",
    level: "Medium",
    rating: 4.8,
    students: 2567,
    price: 329000,
    originalPrice: 499000,
    modules: [
      {
        id: 1,
        title: "Online Education Business",
        lessons: [
          { id: 1, title: "Course Planning", type: "video" },
          { id: 2, title: "Content Creation", type: "video" },
          { id: 3, title: "Platform Selection", type: "pdf" },
          { id: 4, title: "Student Engagement", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Membangun bisnis online education",
      "Menguasai course creation process",
      "Mampu engage students effectively",
      "Memahami monetization strategies",
    ],
  },

  // Delivery Services
  {
    id: "c17",
    title: "Delivery & Logistics Business",
    imageUrl: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=600&fit=crop",
    categoryId: "delivery-services",
    description: "Bangun bisnis delivery dan logistics. Dari same-day delivery hingga specialized logistics services.",
    level: "Medium",
    rating: 4.5,
    students: 1789,
    price: 279000,
    originalPrice: 449000,
    modules: [
      {
        id: 1,
        title: "Logistics Business",
        lessons: [
          { id: 1, title: "Business Model", type: "video" },
          { id: 2, title: "Route Optimization", type: "video" },
          { id: 3, title: "Fleet Management", type: "pdf" },
          { id: 4, title: "Customer Service", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Membangun bisnis delivery yang efisien",
      "Menguasai logistics management",
      "Mampu optimasi route dan cost",
      "Memahami customer service excellence",
    ],
  },

  // Health & Wellness
  {
    id: "c18",
    title: "Health & Wellness Coaching",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    categoryId: "health-wellness",
    description:
      "Bangun practice sebagai health & wellness coach. Dari nutrition coaching hingga lifestyle transformation.",
    level: "Medium",
    rating: 4.7,
    students: 2345,
    price: 399000,
    originalPrice: 599000,
    modules: [
      {
        id: 1,
        title: "Wellness Coaching",
        lessons: [
          { id: 1, title: "Coaching Methodology", type: "video" },
          { id: 2, title: "Client Assessment", type: "video" },
          { id: 3, title: "Program Design", type: "pdf" },
          { id: 4, title: "Progress Tracking", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Menguasai wellness coaching techniques",
      "Mampu design program yang efektif",
      "Memahami client psychology",
      "Membangun practice yang sustainable",
    ],
  },

  // Food & Beverage
  {
    id: "c19",
    title: "Food & Beverage Business",
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
    categoryId: "food-beverage",
    description: "Bangun bisnis F&B yang profitable. Dari cloud kitchen hingga franchise food business.",
    level: "Medium",
    rating: 4.6,
    students: 2890,
    price: 349000,
    originalPrice: 549000,
    modules: [
      {
        id: 1,
        title: "F&B Business Strategy",
        lessons: [
          { id: 1, title: "Market Analysis", type: "video" },
          { id: 2, title: "Menu Development", type: "video" },
          { id: 3, title: "Operations Management", type: "pdf" },
          { id: 4, title: "Marketing Strategy", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Membangun bisnis F&B yang profitable",
      "Menguasai operations management",
      "Mampu develop menu yang marketable",
      "Memahami F&B marketing strategy",
    ],
  },
  {
    id: "c20",
    title: "Cloud Kitchen & Delivery",
    imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
    categoryId: "food-beverage",
    description: "Spesialisasi cloud kitchen business model. Optimasi untuk delivery dan online ordering.",
    level: "Easy",
    rating: 4.8,
    students: 1967,
    price: 249000,
    originalPrice: 399000,
    modules: [
      {
        id: 1,
        title: "Cloud Kitchen Setup",
        lessons: [
          { id: 1, title: "Kitchen Design", type: "video" },
          { id: 2, title: "Delivery Optimization", type: "video" },
          { id: 3, title: "Online Ordering", type: "pdf" },
          { id: 4, title: "Cost Management", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Menguasai cloud kitchen model",
      "Mampu optimasi untuk delivery",
      "Memahami online ordering systems",
      "Membangun multiple brand strategy",
    ],
  },

  // Fitness Coaching
  {
    id: "c21",
    title: "Online Fitness Coaching",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    categoryId: "fitness-coaching",
    description: "Bangun bisnis online fitness coaching. Dari personal training hingga group fitness programs.",
    level: "Easy",
    rating: 4.9,
    students: 3456,
    price: 299000,
    originalPrice: 449000,
    modules: [
      {
        id: 1,
        title: "Fitness Coaching Business",
        lessons: [
          { id: 1, title: "Program Design", type: "video" },
          { id: 2, title: "Client Assessment", type: "video" },
          { id: 3, title: "Online Delivery", type: "pdf" },
          { id: 4, title: "Progress Tracking", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Membangun online fitness business",
      "Menguasai program design",
      "Mampu deliver training online",
      "Memahami client motivation techniques",
    ],
  },

  // Social Media
  {
    id: "c22",
    title: "Social Media Management",
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    categoryId: "social-media",
    description: "Bangun agency social media management. Dari content creation hingga community management.",
    level: "Easy",
    rating: 4.7,
    students: 4123,
    price: 279000,
    originalPrice: 449000,
    modules: [
      {
        id: 1,
        title: "Social Media Strategy",
        lessons: [
          { id: 1, title: "Platform Strategy", type: "video" },
          { id: 2, title: "Content Planning", type: "video" },
          { id: 3, title: "Community Management", type: "pdf" },
          { id: 4, title: "Analytics & Reporting", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Menguasai social media strategy",
      "Mampu create engaging content",
      "Memahami community management",
      "Membangun social media agency",
    ],
  },
  {
    id: "c23",
    title: "Instagram Marketing Mastery",
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    categoryId: "social-media",
    description: "Spesialisasi Instagram marketing. Dari organic growth hingga Instagram ads yang profitable.",
    level: "Medium",
    rating: 4.8,
    students: 2789,
    price: 329000,
    originalPrice: 499000,
    modules: [
      {
        id: 1,
        title: "Instagram Strategy",
        lessons: [
          { id: 1, title: "Algorithm Understanding", type: "video" },
          { id: 2, title: "Content Strategy", type: "video" },
          { id: 3, title: "Instagram Ads", type: "pdf" },
          { id: 4, title: "Influencer Marketing", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Menguasai Instagram algorithm",
      "Mampu create viral content",
      "Memahami Instagram ads optimization",
      "Membangun Instagram marketing expertise",
    ],
  },
]

// Mock data untuk kelas yang sudah diambil user
export const myCourses: Course[] = []

export const products: Product[] = [
  {
    id: "p1",
    name: "Template Website Bisnis",
    imageUrl: "/images/21.jpg",
    description: "Template website profesional untuk bisnis UMKM dengan desain modern dan responsif.",
  },
  {
    id: "p2",
    name: "Paket Branding Lengkap",
    imageUrl: "/images/22.jpg",
    description: "Paket lengkap branding bisnis termasuk logo, kartu nama, dan guidelines brand.",
  },
  {
    id: "p3",
    name: "Tools Marketing Digital",
    imageUrl: "/images/23.jpg",
    description: "Kumpulan tools dan template untuk marketing digital yang efektif.",
  },
  {
    id: "p4",
    name: "E-book Strategi Bisnis",
    imageUrl: "/images/24.jpg",
    description: "Panduan lengkap strategi bisnis digital untuk pemula hingga advanced.",
  },
]
