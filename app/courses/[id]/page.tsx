"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Star, BookOpen, CheckCircle, Play, Download, Video, FileText, Trash2 } from "lucide-react"
import { courses } from "@/lib/data"
import BottomNavbar from "@/components/bottom-navbar"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"

interface CourseDetailPageProps {
  params: {
    id: string
  }
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const course = courses.find((c) => c.id === params.id)
  const [isAdded, setIsAdded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const searchParams = useSearchParams()
  const fromPage = searchParams.get("from") || "home"
  const category = searchParams.get("category")

  useEffect(() => {
    if (course) {
      const savedCourses = JSON.parse(localStorage.getItem("myCourses") || "[]")
      const courseExists = savedCourses.find((c: any) => c.id === course.id)
      setIsAdded(!!courseExists)
    }
  }, [course])

  const handleToggleCourse = () => {
    if (!course) return

    setIsLoading(true)

    setTimeout(() => {
      const savedCourses = JSON.parse(localStorage.getItem("myCourses") || "[]")
      const courseExists = savedCourses.find((c: any) => c.id === course.id)

      if (courseExists) {
        // Remove course
        const updatedCourses = savedCourses.filter((c: any) => c.id !== course.id)
        localStorage.setItem("myCourses", JSON.stringify(updatedCourses))
        setIsAdded(false)
      } else {
        // Add course
        savedCourses.push(course)
        localStorage.setItem("myCourses", JSON.stringify(savedCourses))
        setIsAdded(true)
      }

      setIsLoading(false)
    }, 500)
  }

  const handlePayment = () => {
    // This will be integrated with Tripay payment gateway
    console.log("Initiating payment for course:", course?.id)
    alert("Fitur pembayaran akan segera tersedia. Terima kasih!")
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const getBackNavigation = () => {
    if (fromPage === "my-courses") {
      return {
        href: "/my-courses",
        text: "← Kembali", // Changed from "Back to Kelas Saya" to just "Kembali"
      }
    }

    // For home page, preserve category state
    let homeUrl = "/"
    if (category) {
      homeUrl = `/?category=${category}`
    }

    return {
      href: homeUrl,
      text: "← Back to Courses",
    }
  }

  const backNav = getBackNavigation()

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center pb-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          Course Not Found
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8">
          The course you are looking for does not exist.
        </p>
        <Link href={backNav.href} passHref>
          <Button className="bg-black hover:bg-gray-800 text-white px-4 sm:px-6 py-2 sm:py-3 font-bold text-sm sm:text-base">
            {backNav.text}
          </Button>
        </Link>
        <BottomNavbar />
      </div>
    )
  }

  const courseModules = [
    {
      id: 1,
      title: "Pengenalan Bisnis Digital",
      lessons: [
        { id: 1, title: "Konsep Fundamental", type: "video" },
        { id: 2, title: "Terminologi Penting", type: "video" },
        { id: 3, title: "Sejarah & Perkembangan", type: "pdf" },
        { id: 4, title: "Aplikasi Praktis", type: "video" },
      ],
    },
    {
      id: 2,
      title: "Strategi & Implementasi",
      lessons: [
        { id: 5, title: "Prinsip Marketing", type: "video" },
        { id: 6, title: "Riset Pasar", type: "pdf" },
        { id: 7, title: "Analisis Kompetitor", type: "video" },
        { id: 8, title: "Case Study", type: "pdf" },
      ],
    },
    {
      id: 3,
      title: "Praktik & Evaluasi",
      lessons: [
        { id: 9, title: "Latihan Strategi", type: "video" },
        { id: 10, title: "Proyek Landing Page", type: "video" },
        { id: 11, title: "Problem Solving", type: "pdf" },
        { id: 12, title: "Future Trends", type: "video" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="relative">
            <Image
              src={course.imageUrl || "/placeholder.svg?height=300&width=800&text=Course+Image"}
              alt={course.title}
              width={800}
              height={300}
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 leading-tight">{course.title}</h1>
              <p className="text-sm opacity-90">{course.description}</p>
            </div>
          </div>

          <div className="p-4 sm:p-6">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 mb-6 border border-green-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-green-600">{formatPrice(course.price)}</span>
                    {course.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">{formatPrice(course.originalPrice)}</span>
                    )}
                  </div>
                  {course.originalPrice && (
                    <div className="text-sm text-green-600 font-medium">
                      Hemat {formatPrice(course.originalPrice - course.price)} (
                      {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%)
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-600 mb-1">Akses Selamanya</div>
                  <div className="text-xs text-gray-600">Sertifikat Included</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center mb-6">
              <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                <Users className="w-4 h-4 text-gray-600 mb-1" />
                <span className="text-xs font-medium text-gray-800">{course.students.toLocaleString()}</span>
              </div>
              <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                <Star className="w-4 h-4 text-yellow-500 mb-1 fill-yellow-500" />
                <span className="text-xs font-medium text-gray-800">{course.rating}</span>
              </div>
              <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                <BookOpen className="w-4 h-4 text-gray-600 mb-1" />
                <span className="text-xs font-medium text-gray-800">{course.level}</span>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <Button
                className="w-full py-3 font-medium bg-green-600 hover:bg-green-700 text-white transition-all duration-300"
                onClick={handlePayment}
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>💳 Beli Sekarang - {formatPrice(course.price)}</span>
                </div>
              </Button>

              <Button
                className={`w-full py-3 font-medium transition-all duration-300 ${
                  isAdded ? "bg-red-500 hover:bg-red-600 text-white" : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
                onClick={handleToggleCourse}
                disabled={isLoading}
              >
                <div className="flex items-center justify-center space-x-2">
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>{isAdded ? "Menghapus..." : "Menambahkan..."}</span>
                    </>
                  ) : isAdded ? (
                    <>
                      <Trash2 className="w-4 h-4" />
                      <span>Hapus dari Wishlist</span>
                    </>
                  ) : (
                    <span>Tambah ke Wishlist</span>
                  )}
                </div>
              </Button>
            </div>

            <Tabs defaultValue="modules" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-4">
                <TabsTrigger value="overview" className="text-sm">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="modules" className="text-sm">
                  Modules
                </TabsTrigger>
                <TabsTrigger value="outcomes" className="text-sm">
                  Outcomes
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-0">
                <div>
                  <h2 className="text-lg font-bold text-gray-900 mb-3">Course Overview</h2>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {course.description} Kursus ini dirancang untuk memberikan pemahaman mendalam tentang konsep
                    fundamental yang akan membantu Anda mencapai tujuan pembelajaran dengan pendekatan praktis dan teori
                    yang seimbang.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="modules" className="mt-0">
                <div>
                  <h2 className="text-lg font-bold text-gray-900 mb-4">Course Modules</h2>
                  <div className="space-y-4">
                    {courseModules.map((module, moduleIndex) => (
                      <div key={module.id} className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                          <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
                              <span className="text-white font-bold text-xs">{moduleIndex + 1}</span>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-sm font-semibold text-gray-900">{module.title}</h3>
                              <p className="text-xs text-gray-500">{module.lessons.length} lessons</p>
                            </div>
                          </div>
                        </div>

                        <div className="p-3">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {module.lessons.map((lesson) => (
                              <div
                                key={lesson.id}
                                className="flex items-center space-x-3 p-2 bg-white border border-gray-100 rounded-md hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer group"
                              >
                                <div className="flex-shrink-0">
                                  {lesson.type === "video" ? (
                                    <div className="w-7 h-7 bg-red-50 rounded-md flex items-center justify-center">
                                      <Video className="w-3.5 h-3.5 text-red-600" />
                                    </div>
                                  ) : (
                                    <div className="w-7 h-7 bg-blue-50 rounded-md flex items-center justify-center">
                                      <FileText className="w-3.5 h-3.5 text-blue-600" />
                                    </div>
                                  )}
                                </div>

                                <div className="flex-1 min-w-0">
                                  <h4 className="text-xs font-medium text-gray-900 truncate group-hover:text-blue-600">
                                    {lesson.title}
                                  </h4>
                                </div>

                                <div className="flex-shrink-0">
                                  {lesson.type === "video" ? (
                                    <div className="w-6 h-6 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-red-50">
                                      <Play className="w-3 h-3 text-gray-500 group-hover:text-red-600" />
                                    </div>
                                  ) : (
                                    <div className="w-6 h-6 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-blue-50">
                                      <Download className="w-3 h-3 text-gray-500 group-hover:text-blue-600" />
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="outcomes" className="mt-0">
                <div>
                  <h2 className="text-lg font-bold text-gray-900 mb-4">What You'll Learn</h2>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        "Memahami konsep dasar bisnis digital",
                        "Menguasai teknik marketing modern",
                        "Mengaplikasikan strategi praktis",
                        "Mengembangkan keterampilan analitis",
                        "Membangun confidence profesional",
                        "Mendapatkan sertifikat industri",
                      ].map((outcome, index) => (
                        <div key={index} className="flex items-start space-x-3 p-2 bg-white rounded-md">
                          <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="w-3 h-3 text-blue-600" />
                          </div>
                          <p className="text-sm text-gray-800 font-medium">{outcome}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link href={backNav.href} passHref>
            <Button
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white px-6 py-2 font-medium text-sm bg-transparent"
            >
              {backNav.text}
            </Button>
          </Link>
        </div>
      </div>

      <BottomNavbar />
    </div>
  )
}
