"use client"

import Link from "next/link"
import { HomeIcon, BookOpenIcon, InfoIcon, MailIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export default function BottomNavbar() {
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "Kelas Saya", href: "/my-courses", icon: BookOpenIcon },
    { name: "About", href: "/about", icon: InfoIcon },
    { name: "Contact", href: "/contact", icon: MailIcon },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg py-2 px-4">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 text-xs font-medium transition-colors",
                isActive ? "text-bisnovoBlue-600" : "text-gray-600 hover:text-bisnovoBlue-500",
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
