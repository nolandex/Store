"use client"

import { useState } from "react"
import type { Category } from "@/lib/data"
import { cn } from "@/lib/utils"
import { ChevronUpIcon } from "lucide-react"

interface CategorySliderProps {
  mainCategories: Category[]
  additionalCategories: Category[]
  selectedCategory: string | null
  onSelectCategory: (categoryId: string | null) => void
}

export default function CategorySlider({
  mainCategories,
  additionalCategories,
  selectedCategory,
  onSelectCategory,
}: CategorySliderProps) {
  const [showMore, setShowMore] = useState(false)

  const handleMoreClick = () => {
    setShowMore(!showMore)
  }

  const handleCategoryClick = (categoryId: string) => {
    if (categoryId === "more") {
      handleMoreClick()
    } else {
      onSelectCategory(categoryId)
    }
  }

  // Bagi kategori tambahan menjadi baris-baris dengan 5 kategori per baris
  const chunkedAdditionalCategories = []
  for (let i = 0; i < additionalCategories.length; i += 5) {
    chunkedAdditionalCategories.push(additionalCategories.slice(i, i + 5))
  }

  return (
    <section className="py-4 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Baris pertama - 5 kategori utama */}
        <div className="flex justify-between items-start pb-2 w-full">
          {mainCategories.map((category) => {
            const Icon = category.icon
            const isMoreButton = category.id === "more"
            const isActive = selectedCategory === category.id

            return (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={cn(
                  "flex flex-col items-center justify-start flex-1 transition-all duration-200 ease-in-out cursor-pointer group",
                )}
              >
                <div
                  className={cn(
                    "flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full transition-all duration-200 ease-in-out",
                    isActive && !isMoreButton
                      ? "bg-bisnovoBlue-500 text-white shadow-lg"
                      : isMoreButton && showMore
                        ? "bg-gray-500 text-white shadow-lg"
                        : "bg-white text-gray-800 shadow-md group-hover:shadow-lg group-hover:scale-105",
                  )}
                >
                  {isMoreButton && showMore ? (
                    <ChevronUpIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                  ) : (
                    <Icon
                      className={cn(
                        "h-5 w-5 sm:h-6 sm:w-6",
                        isActive && !isMoreButton
                          ? "text-white"
                          : isMoreButton && showMore
                            ? "text-white"
                            : "text-bisnovoBlue-700",
                      )}
                    />
                  )}
                </div>
                <span
                  className={cn(
                    "mt-2 text-[0.6rem] sm:text-[0.65rem] font-medium text-center leading-tight px-1",
                    isActive && !isMoreButton
                      ? "text-bisnovoBlue-600 font-bold"
                      : isMoreButton && showMore
                        ? "text-gray-600 font-bold"
                        : "text-gray-800",
                  )}
                >
                  {isMoreButton && showMore ? "Tutup" : category.name}
                </span>
              </button>
            )
          })}
        </div>

        {/* Kategori tambahan - 5 per baris */}
        {showMore && (
          <div className="space-y-2">
            {chunkedAdditionalCategories.map((categoryRow, rowIndex) => (
              <div key={rowIndex} className="flex justify-between items-start w-full">
                {categoryRow.map((category) => {
                  const Icon = category.icon
                  const isActive = selectedCategory === category.id

                  return (
                    <button
                      key={category.id}
                      onClick={() => onSelectCategory(category.id)}
                      className={cn(
                        "flex flex-col items-center justify-start flex-1 transition-all duration-200 ease-in-out cursor-pointer group",
                      )}
                    >
                      <div
                        className={cn(
                          "flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full transition-all duration-200 ease-in-out",
                          isActive
                            ? "bg-bisnovoBlue-500 text-white shadow-lg"
                            : "bg-white text-gray-800 shadow-md group-hover:shadow-lg group-hover:scale-105",
                        )}
                      >
                        <Icon
                          className={cn("h-5 w-5 sm:h-6 sm:w-6", isActive ? "text-white" : "text-bisnovoBlue-700")}
                        />
                      </div>
                      <span
                        className={cn(
                          "mt-2 text-[0.6rem] sm:text-[0.65rem] font-medium text-center leading-tight px-1",
                          isActive ? "text-bisnovoBlue-600 font-bold" : "text-gray-800",
                        )}
                      >
                        {category.name}
                      </span>
                    </button>
                  )
                })}
                {/* Tambahkan placeholder jika baris tidak penuh */}
                {categoryRow.length < 5 &&
                  Array.from({ length: 5 - categoryRow.length }).map((_, index) => (
                    <div key={`placeholder-${index}`} className="flex-1" />
                  ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
