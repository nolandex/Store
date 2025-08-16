import {
  Code,
  Palette,
  TrendingUp,
  Camera,
  Music,
  MoreHorizontal,
  Heart,
  Utensils,
  Dumbbell,
  GraduationCap,
  Star,
  Smartphone,
  ShoppingCart,
  Users,
  PenTool,
  BarChart3,
  MessageSquare,
  Truck,
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
  { id: "mobile-apps", name: "Mobile Apps", icon: Smartphone },
  { id: "e-commerce", name: "E-Commerce", icon: ShoppingCart },
  { id: "consulting", name: "Consulting", icon: Users },
  { id: "content-creation", name: "Content Creation", icon: PenTool },
  { id: "social-media", name: "Social Media", icon: MessageSquare },
  { id: "seo-services", name: "SEO Services", icon: BarChart3 },
  { id: "photography", name: "Photography", icon: Camera },
  { id: "video-production", name: "Video Production", icon: Music },
  { id: "copywriting", name: "Copywriting", icon: PenTool },
  { id: "virtual-assistant", name: "Virtual Assistant", icon: Users },
  { id: "online-tutoring", name: "Online Tutoring", icon: GraduationCap },
  { id: "delivery-services", name: "Delivery Services", icon: Truck },
  { id: "health-wellness", name: "Health & Wellness", icon: Heart },
  { id: "food-beverage", name: "Food & Beverage", icon: Utensils },
  { id: "fitness-coaching", name: "Fitness Coaching", icon: Dumbbell },
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
          { id: 10, title: "Portfolio & Presentasi", type: "video" },
          { id: 11, title: "Client Management", type: "pdf" },
          { id: 12, title: "Scaling Bisnis", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Memahami konsep dasar website bisnis dan kebutuhan klien",
      "Menguasai tools dan teknologi untuk development website",
      "Mampu membuat website responsif dan user-friendly",
      "Memiliki strategi pricing dan marketing untuk jasa website",
      "Dapat mengelola klien dan project secara profesional",
      "Membangun portfolio yang menarik untuk menarik klien baru",
    ],
  },
  {
    id: "c2",
    title: "Bisnis Aplikasi Web Custom",
    imageUrl: "/images/2.jpg",
    categoryId: "web-development",
    description:
      "Bangun bisnis pengembangan aplikasi web custom untuk klien korporat. Pelajari teknologi modern dan manajemen proyek.",
    level: "Hard",
    rating: 4.9,
    students: 1560,
    modules: [
      {
        id: 1,
        title: "Advanced Web Technologies",
        lessons: [
          { id: 1, title: "Modern JavaScript Frameworks", type: "video" },
          { id: 2, title: "Backend Architecture", type: "video" },
          { id: 3, title: "Database Design", type: "pdf" },
          { id: 4, title: "API Development", type: "video" },
        ],
      },
      {
        id: 2,
        title: "Project Management",
        lessons: [
          { id: 5, title: "Agile Methodology", type: "video" },
          { id: 6, title: "Client Communication", type: "pdf" },
          { id: 7, title: "Timeline & Budget Planning", type: "video" },
          { id: 8, title: "Quality Assurance", type: "video" },
        ],
      },
      {
        id: 3,
        title: "Enterprise Solutions",
        lessons: [
          { id: 9, title: "Scalability Planning", type: "video" },
          { id: 10, title: "Security Implementation", type: "video" },
          { id: 11, title: "Deployment Strategies", type: "pdf" },
          { id: 12, title: "Maintenance & Support", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Menguasai teknologi web modern untuk aplikasi enterprise",
      "Mampu merancang arsitektur aplikasi yang scalable",
      "Memiliki kemampuan project management yang profesional",
      "Dapat berkomunikasi efektif dengan klien korporat",
      "Memahami aspek keamanan dan deployment aplikasi",
      "Membangun bisnis aplikasi web custom yang profitable",
    ],
  },
  {
    id: "c3",
    title: "Jasa Maintenance Website",
    imageUrl: "/images/3.jpg",
    categoryId: "web-development",
    description:
      "Bisnis jasa perawatan dan maintenance website dengan model berlangganan. Modal kecil, profit berkelanjutan.",
    level: "Easy",
    rating: 4.6,
    students: 3420,
    modules: [
      {
        id: 1,
        title: "Website Maintenance Basics",
        lessons: [
          { id: 1, title: "Jenis-jenis Maintenance", type: "video" },
          { id: 2, title: "Tools Monitoring", type: "video" },
          { id: 3, title: "Security Updates", type: "pdf" },
          { id: 4, title: "Performance Optimization", type: "video" },
        ],
      },
      {
        id: 2,
        title: "Business Model",
        lessons: [
          { id: 5, title: "Subscription Pricing", type: "video" },
          { id: 6, title: "Service Packages", type: "pdf" },
          { id: 7, title: "Client Retention", type: "video" },
          { id: 8, title: "Automated Workflows", type: "video" },
        ],
      },
      {
        id: 3,
        title: "Scaling Operations",
        lessons: [
          { id: 9, title: "Team Building", type: "video" },
          { id: 10, title: "Process Documentation", type: "video" },
          { id: 11, title: "Quality Control", type: "pdf" },
          { id: 12, title: "Business Growth", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Memahami berbagai aspek maintenance website",
      "Menguasai tools monitoring dan security",
      "Mampu membuat paket layanan yang menarik",
      "Memiliki strategi pricing berlangganan yang profitable",
      "Dapat membangun sistem operasional yang efisien",
      "Memahami cara scaling bisnis maintenance",
    ],
  },
  {
    id: "c4",
    title: "Bisnis Template Website Premium",
    imageUrl: "/images/4.jpg",
    categoryId: "web-development",
    description: "Ciptakan dan jual template website premium. Pelajari cara membuat template yang laku di marketplace.",
    level: "Medium",
    rating: 4.7,
    students: 2890,
    modules: [
      {
        id: 1,
        title: "Template Design Principles",
        lessons: [
          { id: 1, title: "Market Research", type: "video" },
          { id: 2, title: "Design Trends", type: "video" },
          { id: 3, title: "User Experience", type: "pdf" },
          { id: 4, title: "Responsive Framework", type: "video" },
        ],
      },
      {
        id: 2,
        title: "Development & Optimization",
        lessons: [
          { id: 5, title: "Clean Code Structure", type: "video" },
          { id: 6, title: "Performance Optimization", type: "pdf" },
          { id: 7, title: "Cross-browser Compatibility", type: "video" },
          { id: 8, title: "Documentation", type: "video" },
        ],
      },
      {
        id: 3,
        title: "Marketplace Strategy",
        lessons: [
          { id: 9, title: "Platform Selection", type: "video" },
          { id: 10, title: "Pricing Strategy", type: "video" },
          { id: 11, title: "Marketing & SEO", type: "pdf" },
          { id: 12, title: "Customer Support", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Memahami tren design dan kebutuhan pasar template",
      "Mampu membuat template yang responsive dan modern",
      "Menguasai teknik optimasi untuk performa maksimal",
      "Memiliki strategi marketing di marketplace",
      "Dapat memberikan dokumentasi dan support yang baik",
      "Membangun passive income dari penjualan template",
    ],
  },

  // Digital Marketing
  {
    id: "c5",
    title: "Jasa Social Media Management",
    imageUrl: "/images/5.jpg",
    categoryId: "digital-marketing",
    description:
      "Bangun bisnis jasa pengelolaan media sosial untuk UMKM. Pelajari strategi konten dan tools automation.",
    level: "Easy",
    rating: 4.5,
    students: 4560,
    modules: [
      {
        id: 1,
        title: "Social Media Strategy",
        lessons: [
          { id: 1, title: "Platform Analysis", type: "video" },
          { id: 2, title: "Target Audience Research", type: "video" },
          { id: 3, title: "Content Planning", type: "pdf" },
          { id: 4, title: "Brand Voice Development", type: "video" },
        ],
      },
      {
        id: 2,
        title: "Content Creation & Management",
        lessons: [
          { id: 5, title: "Visual Content Design", type: "video" },
          { id: 6, title: "Copywriting for Social Media", type: "pdf" },
          { id: 7, title: "Content Calendar", type: "video" },
          { id: 8, title: "Automation Tools", type: "video" },
        ],
      },
      {
        id: 3,
        title: "Analytics & Growth",
        lessons: [
          { id: 9, title: "Performance Metrics", type: "video" },
          { id: 10, title: "Community Management", type: "video" },
          { id: 11, title: "Paid Advertising", type: "pdf" },
          { id: 12, title: "Client Reporting", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Memahami strategi social media untuk berbagai platform",
      "Mampu membuat konten yang engaging dan viral",
      "Menguasai tools automation untuk efisiensi",
      "Memiliki kemampuan analisis dan reporting",
      "Dapat mengelola multiple client secara bersamaan",
      "Membangun bisnis social media management yang scalable",
    ],
  },
  {
    id: "c6",
    title: "Bisnis Google Ads Consultant",
    imageUrl: "/images/6.jpg",
    categoryId: "digital-marketing",
    description:
      "Menjadi konsultan Google Ads profesional. Pelajari strategi iklan yang menguntungkan untuk klien dan diri sendiri.",
    level: "Medium",
    rating: 4.8,
    students: 1890,
    modules: [
      {
        id: 1,
        title: "Google Ads Fundamentals",
        lessons: [
          { id: 1, title: "Platform Overview", type: "video" },
          { id: 2, title: "Campaign Types", type: "video" },
          { id: 3, title: "Keyword Research", type: "pdf" },
          { id: 4, title: "Ad Creation", type: "video" },
        ],
      },
      {
        id: 2,
        title: "Advanced Strategies",
        lessons: [
          { id: 5, title: "Bidding Strategies", type: "video" },
          { id: 6, title: "Audience Targeting", type: "pdf" },
          { id: 7, title: "Landing Page Optimization", type: "video" },
          { id: 8, title: "Conversion Tracking", type: "video" },
        ],
      },
      {
        id: 3,
        title: "Consulting Business",
        lessons: [
          { id: 9, title: "Client Acquisition", type: "video" },
          { id: 10, title: "Pricing Models", type: "video" },
          { id: 11, title: "Performance Reporting", type: "pdf" },
          { id: 12, title: "Account Management", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Menguasai semua aspek Google Ads platform",
      "Mampu membuat campaign yang profitable",
      "Memiliki kemampuan optimasi dan troubleshooting",
      "Dapat memberikan konsultasi yang valuable",
      "Memahami pricing dan business model consulting",
      "Membangun reputasi sebagai Google Ads expert",
    ],
  },
  {
    id: "c7",
    title: "Jasa Content Marketing",
    imageUrl: "/images/7.jpg",
    categoryId: "digital-marketing",
    description: "Bisnis jasa pembuatan konten marketing yang engaging. Dari blog post hingga video marketing.",
    level: "Easy",
    rating: 4.6,
    students: 3210,
    modules: [
      {
        id: 1,
        title: "Content Strategy",
        lessons: [
          { id: 1, title: "Content Marketing Basics", type: "video" },
          { id: 2, title: "Audience Persona", type: "video" },
          { id: 3, title: "Content Pillars", type: "pdf" },
          { id: 4, title: "Editorial Calendar", type: "video" },
        ],
      },
      {
        id: 2,
        title: "Content Creation",
        lessons: [
          { id: 5, title: "Blog Writing", type: "video" },
          { id: 6, title: "Video Production", type: "pdf" },
          { id: 7, title: "Infographic Design", type: "video" },
          { id: 8, title: "Podcast Creation", type: "video" },
        ],
      },
      {
        id: 3,
        title: "Distribution & Analytics",
        lessons: [
          { id: 9, title: "Multi-channel Distribution", type: "video" },
          { id: 10, title: "SEO Optimization", type: "video" },
          { id: 11, title: "Performance Tracking", type: "pdf" },
          { id: 12, title: "Content ROI", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Memahami strategi content marketing yang efektif",
      "Mampu membuat berbagai jenis konten berkualitas",
      "Menguasai tools dan platform distribusi konten",
      "Memiliki kemampuan SEO dan optimization",
      "Dapat mengukur dan melaporkan ROI konten",
      "Membangun bisnis content marketing yang sustainable",
    ],
  },

  // Design Services
  {
    id: "c8",
    title: "Jasa Desain Logo & Branding",
    imageUrl: "/images/8.jpg",
    categoryId: "design-services",
    description:
      "Bangun bisnis jasa desain logo dan branding untuk startup dan UMKM. Pelajari proses kreatif yang profitable.",
    level: "Medium",
    rating: 4.7,
    students: 2670,
    modules: [
      {
        id: 1,
        title: "Brand Identity Fundamentals",
        lessons: [
          { id: 1, title: "Branding Principles", type: "video" },
          { id: 2, title: "Logo Design Theory", type: "video" },
          { id: 3, title: "Color Psychology", type: "pdf" },
          { id: 4, title: "Typography Selection", type: "video" },
        ],
      },
      {
        id: 2,
        title: "Design Process",
        lessons: [
          { id: 5, title: "Client Brief Analysis", type: "video" },
          { id: 6, title: "Concept Development", type: "pdf" },
          { id: 7, title: "Design Execution", type: "video" },
          { id: 8, title: "Brand Guidelines", type: "video" },
        ],
      },
      {
        id: 3,
        title: "Business Development",
        lessons: [
          { id: 9, title: "Portfolio Building", type: "video" },
          { id: 10, title: "Client Presentation", type: "video" },
          { id: 11, title: "Pricing Strategy", type: "pdf" },
          { id: 12, title: "Long-term Relationships", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Memahami prinsip-prinsip branding dan logo design",
      "Mampu menganalisis brief dan kebutuhan klien",
      "Menguasai proses kreatif dari konsep hingga eksekusi",
      "Memiliki kemampuan presentasi yang meyakinkan",
      "Dapat membuat brand guidelines yang komprehensif",
      "Membangun bisnis design yang profitable dan sustainable",
    ],
  },
  {
    id: "c9",
    title: "Bisnis Desain Grafis Freelance",
    imageUrl: "/images/9.jpg",
    categoryId: "design-services",
    description: "Memulai karir freelance desain grafis yang menguntungkan. Dari poster hingga packaging design.",
    level: "Easy",
    rating: 4.4,
    students: 3890,
    modules: [
      {
        id: 1,
        title: "Graphic Design Basics",
        lessons: [
          { id: 1, title: "Design Principles", type: "video" },
          { id: 2, title: "Software Mastery", type: "video" },
          { id: 3, title: "File Formats", type: "pdf" },
          { id: 4, title: "Print vs Digital", type: "video" },
        ],
      },
      {
        id: 2,
        title: "Freelance Business",
        lessons: [
          { id: 5, title: "Platform Selection", type: "video" },
          { id: 6, title: "Profile Optimization", type: "pdf" },
          { id: 7, title: "Client Communication", type: "video" },
          { id: 8, title: "Project Management", type: "video" },
        ],
      },
      {
        id: 3,
        title: "Specialization & Growth",
        lessons: [
          { id: 9, title: "Niche Selection", type: "video" },
          { id: 10, title: "Premium Services", type: "video" },
          { id: 11, title: "Passive Income", type: "pdf" },
          { id: 12, title: "Agency Transition", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Menguasai fundamental design grafis dan tools",
      "Mampu membangun profile freelance yang menarik",
      "Memiliki kemampuan komunikasi dan project management",
      "Dapat menentukan niche dan spesialisasi yang profitable",
      "Memahami cara scaling dari freelance ke agency",
      "Membangun multiple income stream dari design",
    ],
  },
  {
    id: "c10",
    title: "Jasa UI/UX Design",
    imageUrl: "/images/10.jpg",
    categoryId: "design-services",
    description: "Bisnis jasa UI/UX design untuk aplikasi dan website. Target klien startup dan perusahaan teknologi.",
    level: "Hard",
    rating: 4.9,
    students: 1230,
    modules: [
      {
        id: 1,
        title: "UX Research & Strategy",
        lessons: [
          { id: 1, title: "User Research Methods", type: "video" },
          { id: 2, title: "Persona Development", type: "video" },
          { id: 3, title: "User Journey Mapping", type: "pdf" },
          { id: 4, title: "Information Architecture", type: "video" },
        ],
      },
      {
        id: 2,
        title: "UI Design & Prototyping",
        lessons: [
          { id: 5, title: "Wireframing", type: "video" },
          { id: 6, title: "Visual Design", type: "pdf" },
          { id: 7, title: "Prototyping Tools", type: "video" },
          { id: 8, title: "Design Systems", type: "video" },
        ],
      },
      {
        id: 3,
        title: "Business & Collaboration",
        lessons: [
          { id: 9, title: "Client Workshop", type: "video" },
          { id: 10, title: "Developer Handoff", type: "video" },
          { id: 11, title: "Testing & Iteration", type: "pdf" },
          { id: 12, title: "Premium Positioning", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Menguasai metodologi UX research dan strategy",
      "Mampu membuat wireframe dan prototype yang efektif",
      "Memiliki kemampuan visual design yang modern",
      "Dapat berkolaborasi dengan developer dan stakeholder",
      "Memahami testing dan iterasi design",
      "Membangun bisnis UI/UX design premium",
    ],
  },

  // Mobile Apps
  {
    id: "c11",
    title: "Bisnis Aplikasi Mobile Sederhana",
    imageUrl: "/images/11.jpg",
    categoryId: "mobile-apps",
    description: "Buat dan monetisasi aplikasi mobile sederhana. Pelajari no-code development dan strategi monetisasi.",
    level: "Medium",
    rating: 4.6,
    students: 1890,
    modules: [
      {
        id: 1,
        title: "Mobile App Fundamentals",
        lessons: [
          { id: 1, title: "App Market Analysis", type: "video" },
          { id: 2, title: "Platform Selection", type: "video" },
          { id: 3, title: "No-Code Tools", type: "pdf" },
          { id: 4, title: "App Store Guidelines", type: "video" },
        ],
      },
      {
        id: 2,
        title: "Development & Design",
        lessons: [
          { id: 5, title: "UI/UX for Mobile", type: "video" },
          { id: 6, title: "App Development", type: "pdf" },
          { id: 7, title: "Testing & Debugging", type: "video" },
          { id: 8, title: "Performance Optimization", type: "video" },
        ],
      },
      {
        id: 3,
        title: "Launch & Monetization",
        lessons: [
          { id: 9, title: "App Store Optimization", type: "video" },
          { id: 10, title: "Marketing Strategy", type: "video" },
          { id: 11, title: "Monetization Models", type: "pdf" },
          { id: 12, title: "Analytics & Growth", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Memahami pasar aplikasi mobile dan peluang bisnis",
      "Mampu membuat aplikasi menggunakan no-code tools",
      "Menguasai prinsip UI/UX untuk mobile platform",
      "Memiliki strategi launch dan marketing yang efektif",
      "Dapat mengimplementasikan berbagai model monetisasi",
      "Membangun bisnis aplikasi mobile yang sustainable",
    ],
  },

  // E-Commerce
  {
    id: "c12",
    title: "Bisnis Dropshipping Terpadu",
    imageUrl: "/images/12.jpg",
    categoryId: "e-commerce",
    description: "Membangun bisnis dropshipping yang sustainable dengan sistem terintegrasi dan supplier terpercaya.",
    level: "Easy",
    rating: 4.5,
    students: 5670,
    modules: [
      {
        id: 1,
        title: "Dropshipping Strategy",
        lessons: [
          { id: 1, title: "Business Model Overview", type: "video" },
          { id: 2, title: "Niche Selection", type: "video" },
          { id: 3, title: "Supplier Research", type: "pdf" },
          { id: 4, title: "Product Validation", type: "video" },
        ],
      },
      {
        id: 2,
        title: "Store Setup & Operations",
        lessons: [
          { id: 5, title: "E-commerce Platform", type: "video" },
          { id: 6, title: "Store Design", type: "pdf" },
          { id: 7, title: "Order Management", type: "video" },
          { id: 8, title: "Customer Service", type: "video" },
        ],
      },
      {
        id: 3,
        title: "Marketing & Scaling",
        lessons: [
          { id: 9, title: "Digital Marketing", type: "video" },
          { id: 10, title: "Social Media Ads", type: "video" },
          { id: 11, title: "Conversion Optimization", type: "pdf" },
          { id: 12, title: "Business Scaling", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Memahami model bisnis dropshipping yang profitable",
      "Mampu memilih niche dan produk yang tepat",
      "Menguasai setup dan operasional toko online",
      "Memiliki strategi marketing yang efektif",
      "Dapat mengelola customer service dan fulfillment",
      "Membangun bisnis dropshipping yang scalable",
    ],
  },
  {
    id: "c13",
    title: "Jasa Pembuatan Toko Online",
    imageUrl: "/images/13.jpg",
    categoryId: "e-commerce",
    description: "Bisnis jasa pembuatan toko online untuk UMKM. Dari setup hingga training pengelolaan.",
    level: "Medium",
    rating: 4.7,
    students: 2340,
    modules: [
      {
        id: 1,
        title: "E-commerce Fundamentals",
        lessons: [
          { id: 1, title: "Platform Comparison", type: "video" },
          { id: 2, title: "Client Needs Analysis", type: "video" },
          { id: 3, title: "Feature Planning", type: "pdf" },
          { id: 4, title: "Budget & Timeline", type: "video" },
        ],
      },
      {
        id: 2,
        title: "Store Development",
        lessons: [
          { id: 5, title: "Theme Customization", type: "video" },
          { id: 6, title: "Payment Integration", type: "pdf" },
          { id: 7, title: "Shipping Setup", type: "video" },
          { id: 8, title: "SEO Optimization", type: "video" },
        ],
      },
      {
        id: 3,
        title: "Training & Support",
        lessons: [
          { id: 9, title: "Client Training Program", type: "video" },
          { id: 10, title: "Documentation", type: "video" },
          { id: 11, title: "Ongoing Support", type: "pdf" },
          { id: 12, title: "Business Growth", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Memahami berbagai platform e-commerce dan fiturnya",
      "Mampu menganalisis kebutuhan klien UMKM",
      "Menguasai setup dan kustomisasi toko online",
      "Memiliki kemampuan training dan dokumentasi",
      "Dapat memberikan support berkelanjutan",
      "Membangun bisnis jasa e-commerce yang profitable",
    ],
  },

  // Consulting
  {
    id: "c14",
    title: "Konsultan Bisnis Digital",
    imageUrl: "/images/14.jpg",
    categoryId: "consulting",
    description:
      "Menjadi konsultan transformasi digital untuk UMKM. Pelajari metodologi dan tools consulting profesional.",
    level: "Hard",
    rating: 4.8,
    students: 890,
    modules: [
      {
        id: 1,
        title: "Digital Transformation",
        lessons: [
          { id: 1, title: "Digital Strategy Framework", type: "video" },
          { id: 2, title: "Business Process Analysis", type: "video" },
          { id: 3, title: "Technology Assessment", type: "pdf" },
          { id: 4, title: "Change Management", type: "video" },
        ],
      },
      {
        id: 2,
        title: "Consulting Methodology",
        lessons: [
          { id: 5, title: "Client Discovery", type: "video" },
          { id: 6, title: "Solution Design", type: "pdf" },
          { id: 7, title: "Implementation Planning", type: "video" },
          { id: 8, title: "Success Measurement", type: "video" },
        ],
      },
      {
        id: 3,
        title: "Business Development",
        lessons: [
          { id: 9, title: "Thought Leadership", type: "video" },
          { id: 10, title: "Proposal Writing", type: "video" },
          { id: 11, title: "Premium Pricing", type: "pdf" },
          { id: 12, title: "Long-term Partnerships", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Memahami framework transformasi digital",
      "Mampu menganalisis dan merancang solusi bisnis",
      "Menguasai metodologi consulting profesional",
      "Memiliki kemampuan change management",
      "Dapat membangun thought leadership",
      "Membangun bisnis consulting premium",
    ],
  },

  // Content Creation
  {
    id: "c15",
    title: "Bisnis Jasa Copywriting",
    imageUrl: "/images/15.jpg",
    categoryId: "content-creation",
    description: "Membangun bisnis jasa copywriting untuk sales page, email marketing, dan konten promosi.",
    level: "Easy",
    rating: 4.6,
    students: 3450,
    modules: [
      {
        id: 1,
        title: "Copywriting Fundamentals",
        lessons: [
          { id: 1, title: "Psychology of Persuasion", type: "video" },
          { id: 2, title: "Copywriting Formulas", type: "video" },
          { id: 3, title: "Target Audience Research", type: "pdf" },
          { id: 4, title: "Brand Voice Development", type: "video" },
        ],
      },
      {
        id: 2,
        title: "Specialized Copy Types",
        lessons: [
          { id: 5, title: "Sales Page Copy", type: "video" },
          { id: 6, title: "Email Marketing", type: "pdf" },
          { id: 7, title: "Ad Copy", type: "video" },
          { id: 8, title: "Website Copy", type: "video" },
        ],
      },
      {
        id: 3,
        title: "Business & Client Management",
        lessons: [
          { id: 9, title: "Portfolio Building", type: "video" },
          { id: 10, title: "Client Acquisition", type: "video" },
          { id: 11, title: "Pricing Strategy", type: "pdf" },
          { id: 12, title: "Scaling Operations", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Memahami psikologi persuasi dan copywriting",
      "Mampu menulis berbagai jenis copy yang konversi",
      "Menguasai riset audience dan brand voice",
      "Memiliki portfolio yang menarik klien",
      "Dapat menentukan pricing yang profitable",
      "Membangun bisnis copywriting yang scalable",
    ],
  },

  // Photography
  {
    id: "c16",
    title: "Bisnis Fotografi Produk",
    imageUrl: "/images/16.jpg",
    categoryId: "photography",
    description:
      "Bisnis jasa fotografi produk untuk e-commerce dan katalog. Pelajari teknik lighting dan editing profesional.",
    level: "Medium",
    rating: 4.7,
    students: 2110,
    modules: [
      {
        id: 1,
        title: "Product Photography Basics",
        lessons: [
          { id: 1, title: "Equipment Setup", type: "video" },
          { id: 2, title: "Lighting Techniques", type: "video" },
          { id: 3, title: "Composition Rules", type: "pdf" },
          { id: 4, title: "Background Selection", type: "video" },
        ],
      },
      {
        id: 2,
        title: "Advanced Techniques",
        lessons: [
          { id: 5, title: "Macro Photography", type: "video" },
          { id: 6, title: "Lifestyle Shots", type: "pdf" },
          { id: 7, title: "Post-processing", type: "video" },
          { id: 8, title: "Batch Editing", type: "video" },
        ],
      },
      {
        id: 3,
        title: "Business Operations",
        lessons: [
          { id: 9, title: "Client Communication", type: "video" },
          { id: 10, title: "Pricing Models", type: "video" },
          { id: 11, title: "Workflow Optimization", type: "pdf" },
          { id: 12, title: "Studio Management", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Menguasai teknik fotografi produk profesional",
      "Mampu mengatur lighting dan komposisi yang menarik",
      "Memiliki kemampuan editing dan post-processing",
      "Dapat mengelola workflow yang efisien",
      "Memahami pricing dan business model",
      "Membangun studio fotografi yang profitable",
    ],
  },

  // Virtual Assistant
  {
    id: "c17",
    title: "Bisnis Virtual Assistant",
    imageUrl: "/images/17.jpg",
    categoryId: "virtual-assistant",
    description: "Memulai bisnis sebagai virtual assistant untuk entrepreneur dan perusahaan internasional.",
    level: "Easy",
    rating: 4.5,
    students: 4230,
    modules: [
      {
        id: 1,
        title: "VA Fundamentals",
        lessons: [
          { id: 1, title: "VA Services Overview", type: "video" },
          { id: 2, title: "Skill Assessment", type: "video" },
          { id: 3, title: "Tools & Software", type: "pdf" },
          { id: 4, title: "Time Management", type: "video" },
        ],
      },
      {
        id: 2,
        title: "Service Specialization",
        lessons: [
          { id: 5, title: "Administrative Tasks", type: "video" },
          { id: 6, title: "Social Media Management", type: "pdf" },
          { id: 7, title: "Content Creation", type: "video" },
          { id: 8, title: "Customer Support", type: "video" },
        ],
      },
      {
        id: 3,
        title: "Business Growth",
        lessons: [
          { id: 9, title: "Client Acquisition", type: "video" },
          { id: 10, title: "Rate Setting", type: "video" },
          { id: 11, title: "Team Building", type: "pdf" },
          { id: 12, title: "Agency Transition", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Memahami berbagai layanan virtual assistant",
      "Mampu menentukan spesialisasi yang profitable",
      "Menguasai tools dan software yang diperlukan",
      "Memiliki kemampuan komunikasi internasional",
      "Dapat membangun tim dan scaling bisnis",
      "Membangun VA agency yang sustainable",
    ],
  },

  // Online Tutoring
  {
    id: "c18",
    title: "Bisnis Les Online",
    imageUrl: "/images/18.jpg",
    categoryId: "online-tutoring",
    description:
      "Bangun platform les online pribadi. Dari matematika hingga bahasa asing dengan sistem pembayaran terintegrasi.",
    level: "Medium",
    rating: 4.6,
    students: 1890,
    modules: [
      {
        id: 1,
        title: "Online Education Setup",
        lessons: [
          { id: 1, title: "Subject Selection", type: "video" },
          { id: 2, title: "Platform Comparison", type: "video" },
          { id: 3, title: "Curriculum Development", type: "pdf" },
          { id: 4, title: "Teaching Methods", type: "video" },
        ],
      },
      {
        id: 2,
        title: "Technology & Tools",
        lessons: [
          { id: 5, title: "Video Conferencing", type: "video" },
          { id: 6, title: "Learning Management", type: "pdf" },
          { id: 7, title: "Payment Integration", type: "video" },
          { id: 8, title: "Progress Tracking", type: "video" },
        ],
      },
      {
        id: 3,
        title: "Marketing & Growth",
        lessons: [
          { id: 9, title: "Student Acquisition", type: "video" },
          { id: 10, title: "Retention Strategies", type: "video" },
          { id: 11, title: "Pricing Models", type: "pdf" },
          { id: 12, title: "Team Expansion", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Memahami setup platform pembelajaran online",
      "Mampu mengembangkan kurikulum yang efektif",
      "Menguasai teknologi dan tools pembelajaran",
      "Memiliki strategi marketing dan akuisisi siswa",
      "Dapat mengelola progress dan retention siswa",
      "Membangun bisnis les online yang scalable",
    ],
  },

  // Food & Beverage
  {
    id: "c19",
    title: "Bisnis Katering Rumahan",
    imageUrl: "/images/19.jpg",
    categoryId: "food-beverage",
    description: "Memulai bisnis katering dari rumah dengan sistem pre-order dan delivery. Fokus pada makanan sehat.",
    level: "Easy",
    rating: 4.4,
    students: 3670,
    modules: [
      {
        id: 1,
        title: "Food Business Basics",
        lessons: [
          { id: 1, title: "Menu Planning", type: "video" },
          { id: 2, title: "Food Safety", type: "video" },
          { id: 3, title: "Cost Calculation", type: "pdf" },
          { id: 4, title: "Legal Requirements", type: "video" },
        ],
      },
      {
        id: 2,
        title: "Operations Management",
        lessons: [
          { id: 5, title: "Kitchen Setup", type: "video" },
          { id: 6, title: "Inventory Management", type: "pdf" },
          { id: 7, title: "Order Processing", type: "video" },
          { id: 8, title: "Quality Control", type: "video" },
        ],
      },
      {
        id: 3,
        title: "Marketing & Delivery",
        lessons: [
          { id: 9, title: "Brand Building", type: "video" },
          { id: 10, title: "Social Media Marketing", type: "video" },
          { id: 11, title: "Delivery System", type: "pdf" },
          { id: 12, title: "Customer Retention", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Memahami dasar-dasar bisnis makanan dan regulasi",
      "Mampu merencanakan menu dan menghitung cost",
      "Menguasai operasional dapur dan quality control",
      "Memiliki sistem order dan delivery yang efisien",
      "Dapat membangun brand dan marketing yang kuat",
      "Membangun bisnis katering yang sustainable",
    ],
  },

  // Delivery Services
  {
    id: "c20",
    title: "Bisnis Jasa Kurir Lokal",
    imageUrl: "/images/20.jpg",
    categoryId: "delivery-services",
    description: "Membangun jaringan jasa kurir lokal dengan aplikasi sederhana dan sistem tracking.",
    level: "Easy",
    rating: 4.3,
    students: 2890,
    modules: [
      {
        id: 1,
        title: "Delivery Business Model",
        lessons: [
          { id: 1, title: "Market Analysis", type: "video" },
          { id: 2, title: "Service Area Planning", type: "video" },
          { id: 3, title: "Pricing Strategy", type: "pdf" },
          { id: 4, title: "Competition Analysis", type: "video" },
        ],
      },
      {
        id: 2,
        title: "Operations Setup",
        lessons: [
          { id: 5, title: "Fleet Management", type: "video" },
          { id: 6, title: "Driver Recruitment", type: "pdf" },
          { id: 7, title: "Tracking System", type: "video" },
          { id: 8, title: "Customer Service", type: "video" },
        ],
      },
      {
        id: 3,
        title: "Technology & Growth",
        lessons: [
          { id: 9, title: "App Development", type: "video" },
          { id: 10, title: "Route Optimization", type: "video" },
          { id: 11, title: "Partnership Building", type: "pdf" },
          { id: 12, title: "Expansion Strategy", type: "video" },
        ],
      },
    ],
    learningOutcomes: [
      "Memahami model bisnis jasa kurir dan logistik",
      "Mampu merencanakan area layanan dan pricing",
      "Menguasai operasional fleet dan driver management",
      "Memiliki sistem tracking dan customer service",
      "Dapat mengembangkan teknologi pendukung",
      "Membangun jaringan kurir yang scalable",
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
