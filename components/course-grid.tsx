import type { Course } from "@/lib/data"
import CourseCard from "./course-card"

interface CourseGridProps {
  courses: Course[]
}

export default function CourseGrid({ courses }: CourseGridProps) {
  return (
    <section className="py-4 px-4 md:px-6 bg-gray-50">
      <div className="grid grid-cols-2 gap-3 max-w-6xl mx-auto">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      {courses.length === 0 && (
        <p className="text-center text-gray-600 mt-8">Tidak ada kursus ditemukan untuk kategori ini.</p>
      )}
    </section>
  )
}
