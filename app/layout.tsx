import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Bisnovo Learning - Platform Pembelajaran Bisnis Digital",
  description:
    "Pelajari berbagai bisnis digital dari modal minim hingga jutaan rupiah. Web development, digital marketing, design services, dan banyak lagi.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
