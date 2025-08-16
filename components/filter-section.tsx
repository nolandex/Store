"use client"
import { cn } from "@/lib/utils"
import { Filter, X } from "lucide-react"
import { useState } from "react"

interface FilterSectionProps {
  selectedLevel: string | null
  selectedCapitalCost: string | null
  onLevelChange: (level: string | null) => void
  onCapitalCostChange: (cost: string | null) => void
}

export default function FilterSection({
  selectedLevel,
  selectedCapitalCost,
  onLevelChange,
  onCapitalCostChange,
}: FilterSectionProps) {
  const [showFilters, setShowFilters] = useState(false)

  const levels = [
    { id: "Easy", name: "Easy" },
    { id: "Medium", name: "Medium" },
    { id: "Hard", name: "Hard" },
  ]

  const capitalCosts = [
    { id: "Tanpa Modal", name: "Tanpa Modal" },
    { id: "Modal Kecil", name: "Modal Kecil" },
    { id: "Modal Sedang", name: "Modal Sedang" },
    { id: "Modal Besar", name: "Modal Besar" },
  ]

  const clearFilters = () => {
    onLevelChange(null)
    onCapitalCostChange(null)
  }

  const hasActiveFilters = selectedLevel || selectedCapitalCost

  return (
    <section className="py-2 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-end">
          {/* Clear Filters */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700 px-2 py-1 rounded-full hover:bg-gray-200 transition-all mr-2"
            >
              <X className="h-3 w-3" />
              Hapus
            </button>
          )}

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
              showFilters || hasActiveFilters
                ? "bg-bisnovoBlue-500 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm",
            )}
          >
            <Filter className="h-4 w-4" />
            Filter Kelas
            {hasActiveFilters && (
              <span className="bg-white text-bisnovoBlue-500 text-xs px-2 py-0.5 rounded-full font-semibold">
                {(selectedLevel ? 1 : 0) + (selectedCapitalCost ? 1 : 0)}
              </span>
            )}
          </button>
        </div>

        {/* Filter Options */}
        {showFilters && (
          <div className="mt-3 p-3 bg-white rounded-lg shadow-sm">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-sm text-gray-600 font-medium mr-2">Level:</span>
              {levels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => onLevelChange(selectedLevel === level.id ? null : level.id)}
                  className={cn(
                    "px-3 py-1 rounded-full text-sm transition-all",
                    selectedLevel === level.id
                      ? "bg-bisnovoBlue-500 text-white shadow-sm"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200",
                  )}
                >
                  {level.name}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-600 font-medium mr-2">Modal:</span>
              {capitalCosts.map((cost) => (
                <button
                  key={cost.id}
                  onClick={() => onCapitalCostChange(selectedCapitalCost === cost.id ? null : cost.id)}
                  className={cn(
                    "px-3 py-1 rounded-full text-sm transition-all",
                    selectedCapitalCost === cost.id
                      ? "bg-bisnovoBlue-500 text-white shadow-sm"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200",
                  )}
                >
                  {cost.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
