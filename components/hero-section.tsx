"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  onLevelChange?: (level: string | null) => void
  onCapitalCostChange?: (cost: string | null) => void
}

export default function HeroSection({ onLevelChange, onCapitalCostChange }: HeroSectionProps) {
  const [showQuickFilter, setShowQuickFilter] = useState(false)

  const levels = ["Easy", "Medium", "Hard"]
  const costs = ["Tanpa Modal", "Modal Kecil", "Modal Sedang", "Modal Besar"]

  return (
    <section className="relative w-full px-4 py-2 mt-0">
      <div className="relative w-full h-[180px] md:h-[250px] lg:h-[300px] overflow-hidden rounded-xl shadow-lg">
        <Image
          src="/placeholder.svg?height=300&width=800&text=Bisnis+Digital+Terbaik"
          alt="Hero Banner - Platform Pembelajaran Bisnis Digital"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
          <div className="text-center text-white mb-4">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">Mulai Bisnis Digital Anda</h1>
            <p className="text-sm md:text-lg">Pelajari bisnis jasa digital dari modal minim hingga jutaan rupiah</p>
          </div>

          {/* Quick Filter - Optional */}
          {onLevelChange && onCapitalCostChange && (
            <button
              onClick={() => setShowQuickFilter(!showQuickFilter)}
              className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:bg-opacity-30 transition-all"
            >
              Filter Cepat
              <ChevronDown className={cn("h-4 w-4 transition-transform", showQuickFilter && "rotate-180")} />
            </button>
          )}

          {showQuickFilter && (
            <div className="mt-3 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-3 text-gray-800">
              <div className="flex gap-2 text-xs">
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => onLevelChange?.(level)}
                    className="px-2 py-1 bg-white rounded-full hover:bg-gray-100"
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
