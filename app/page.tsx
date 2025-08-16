"use client"

import { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import HeroSection from "@/components/hero-section"
import CategorySlider from "@/components/category-slider"
import CourseGrid from "@/components/course-grid"
import BottomNavbar from "@/components/bottom-navbar"
import { mainCategories, additionalCategories, courses } from "@/lib/data"

export default function HomePage() {
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState<string | null>("popular")

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category")
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl)
    }
  }, [searchParams])

  const handleCategoryChange = (categoryId: string | null) => {
    setSelectedCategory(categoryId)

    // Update URL without page reload to maintain SPA behavior
    const url = new URL(window.location.href)
    if (categoryId && categoryId !== "popular") {
      url.searchParams.set("category", categoryId)
    } else {
      url.searchParams.delete("category")
    }
    window.history.replaceState({}, "", url.toString())
  }

  const filteredCourses = useMemo(() => {
    let filtered = courses

    // Filter by category only
    if (selectedCategory && selectedCategory !== "popular") {
      filtered = filtered.filter((course) => course.categoryId === selectedCategory)
    } else if (selectedCategory === "popular") {
      // Untuk kategori "Populer", tampilkan kursus dengan rating tertinggi dan siswa terbanyak
      filtered = courses
        .sort((a, b) => {
          const scoreA = a.rating * 0.7 + (a.students / 1000) * 0.3
          const scoreB = b.rating * 0.7 + (b.students / 1000) * 0.3
          return scoreB - scoreA
        })
        .slice(0, 12)
    }

    return filtered
  }, [selectedCategory])

  return (
    <div className="min-h-screen bg-white pb-16">
      <main>
        <HeroSection />
        <CategorySlider
          mainCategories={mainCategories}
          additionalCategories={additionalCategories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
        />
        <CourseGrid courses={filteredCourses} />
      </main>
      <BottomNavbar />
    </div>
  )
}
