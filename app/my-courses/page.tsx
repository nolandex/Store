"use client"

import { useState, useEffect } from "react"
import BottomNavbar from "@/components/bottom-navbar"
import CourseCard from "@/components/course-card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpenIcon } from "lucide-react"
import type { Course } from "@/lib/data"

export default function MyCoursesPage() {
  const [myCourses, setMyCourses] = useState<Course[]>([])

  useEffect(() => {
    // Load courses from localStorage
    const savedCourses = JSON.parse(localStorage.getItem("myCourses") || "[]")
    setMyCourses(savedCourses)
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col pb-16">
      <main className="flex-grow">
        <div className="p-4 md:p-6 max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-3 mb-6">
            <BookOpenIcon className="h-8 w-8 text-bisnovoBlue-600" />
            <h1 className="text-3xl font-bold text-gray-800">Kelas Saya</h1>
          </div>
        </div>

        {myCourses.length > 0 ? (
          /* Using CourseGrid layout and CourseCard component like home page */
          <section className="py-4 px-4 md:px-6 bg-gray-50">
            <div className="grid grid-cols-2 gap-3 max-w-6xl mx-auto">
              {myCourses.map((course) => (
                <CourseCard key={course.id} course={course} source="my-courses" />
              ))}
            </div>
          </section>
        ) : (
          <div className="text-center py-12 px-4">
            <BookOpenIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-600 mb-2">Belum ada kelas yang diambil</h2>
            <p className="text-gray-500 mb-6">Mulai belajar dengan memilih kursus yang menarik untuk Anda</p>
            <Link href="/" passHref>
              <Button className="bg-bisnovoBlue-500 hover:bg-bisnovoBlue-600 text-white">Jelajahi Kursus</Button>
            </Link>
          </div>
        )}
      </main>
      <BottomNavbar />
    </div>
  )
}
