"use client"

import Image from "next/image"
import type { Course } from "@/lib/data"
import Link from "next/link"
import { StarIcon, UsersIcon } from "lucide-react"
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

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <Link href={buildNavigationUrl()} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-200">
        <div className="relative">
          <Image
            src={
              course.imageUrl ||
              "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            }
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

          <div className="mb-2">
            <div className="flex items-center space-x-1">
              <span className="text-sm font-bold text-green-600">{formatPrice(course.price)}</span>
              {course.originalPrice && (
                <span className="text-xs text-gray-500 line-through">{formatPrice(course.originalPrice)}</span>
              )}
            </div>
            {course.originalPrice && (
              <div className="text-[0.6rem] text-green-600 font-medium">
                Hemat {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%
              </div>
            )}
          </div>

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
          </div>
        </div>
      </div>
    </Link>
  )
}
