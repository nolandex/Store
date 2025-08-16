"use client"

import Image from "next/image"
import type { Course } from "@/lib/data"
import Link from "next/link"
import { StarIcon, UsersIcon, ClockIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useSearchParams } from "next/navigation"

interface CourseCardProps {
  course: Course
  source?: string
}

export default function CourseCard({ course, source = "home" }: CourseCardProps) {
  const searchParams = useSearchParams()

  const buildNavigationUrl = () => {
    const baseUrl = `/courses/${course.id}`
    const params = new URLSearchParams()

    // Always set the source
    params.set("from", source)

    // If we're on home page, preserve the current category
    if (source === "home") {
      const currentCategory = searchParams.get("category")
      if (currentCategory) {
        params.set("category", currentCategory)
      }
    }

    return `${baseUrl}?${params.toString()}`
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Easy":
        return "bg-green-100 text-green-700"
      case "Medium":
        return "bg-yellow-100 text-yellow-700"
      case "Hard":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <Link href={buildNavigationUrl()} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-200">
        <div className="relative">
          <Image
            src={course.imageUrl || "/placeholder.svg"}
            alt={course.title}
            width={200}
            height={100}
            className="w-full h-20 object-cover"
          />
          <span
            className={cn(
              "absolute top-1 right-1 text-[0.5rem] px-1.5 py-0.5 rounded-full font-medium",
              getLevelColor(course.level),
            )}
          >
            {course.level}
          </span>
        </div>
        <div className="p-2 flex flex-col flex-grow">
          <h3 className="text-xs font-semibold text-gray-800 line-clamp-2 mb-1 leading-tight">{course.title}</h3>
          <p className="text-[0.6rem] text-gray-600 mb-2 truncate">by {course.instructor}</p>

          <div className="flex items-center gap-1 text-[0.6rem] mt-auto">
            <div className="flex items-center gap-0.5">
              <StarIcon className="h-2.5 w-2.5 fill-yellow-400 text-yellow-400" />
              <span className="text-gray-600">{course.rating}</span>
            </div>
            <span className="text-gray-400">•</span>
            <div className="flex items-center gap-0.5">
              <UsersIcon className="h-2.5 w-2.5 text-gray-400" />
              <span className="text-gray-600">{(course.students / 1000).toFixed(0)}k</span>
            </div>
            <span className="text-gray-400">•</span>
            <div className="flex items-center gap-0.5">
              <ClockIcon className="h-2.5 w-2.5 text-gray-400" />
              <span className="text-gray-600">{course.duration}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
