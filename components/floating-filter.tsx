"use client"

import { useState } from "react"
import { Filter, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface FloatingFilterProps {
  selectedLevel: string | null
  selectedCapitalCost: string | null
  onLevelChange: (level: string | null) => void
  onCapitalCostChange: (cost: string | null) => void
}

export default function FloatingFilter({
  selectedLevel,
  selectedCapitalCost,
  onLevelChange,
  onCapitalCostChange,
}: FloatingFilterProps) {
  const [isOpen, setIsOpen] = useState(false)

  const levels = ["Easy", "Medium", "Hard"]
  const costs = ["Tanpa Modal", "Modal Kecil", "Modal Sedang", "Modal Besar"]
  const hasActiveFilters = selectedLevel || selectedCapitalCost

  const clearFilters = () => {
    onLevelChange(null)
    onCapitalCostChange(null)
    setIsOpen(false)
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-20 right-4 z-40 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all",
          hasActiveFilters ? "bg-bisnovoBlue-500 text-white" : "bg-white text-gray-600 hover:bg-gray-50",
        )}
      >
        <Filter className="h-5 w-5" />
        {hasActiveFilters && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {(selectedLevel ? 1 : 0) + (selectedCapitalCost ? 1 : 0)}
          </span>
        )}
      </button>

      {/* Filter Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-end">
          <div className="bg-white w-full rounded-t-2xl p-4 pb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Filter Kelas</h3>
              <div className="flex gap-2">
                {hasActiveFilters && (
                  <button onClick={clearFilters} className="text-sm text-gray-500 hover:text-gray-700">
                    Hapus Semua
                  </button>
                )}
                <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-gray-100 rounded-full">
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Level Kesulitan</h4>
                <div className="flex gap-2">
                  {levels.map((level) => (
                    <button
                      key={level}
                      onClick={() => onLevelChange(selectedLevel === level ? null : level)}
                      className={cn(
                        "px-3 py-2 rounded-lg text-sm transition-all",
                        selectedLevel === level
                          ? "bg-bisnovoBlue-500 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200",
                      )}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Modal Usaha</h4>
                <div className="flex gap-2 flex-wrap">
                  {costs.map((cost) => (
                    <button
                      key={cost}
                      onClick={() => onCapitalCostChange(selectedCapitalCost === cost ? null : cost)}
                      className={cn(
                        "px-3 py-2 rounded-lg text-sm transition-all",
                        selectedCapitalCost === cost
                          ? "bg-bisnovoBlue-500 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200",
                      )}
                    >
                      {cost}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
