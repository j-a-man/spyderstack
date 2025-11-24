import type React from "react"
import type { Metadata } from "next"
// 1. Import DM Sans instead of Rajdhani
import { Inter, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SmoothScroll } from "@/components/smooth-scroll"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

// 2. Configure DM Sans for Headings
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-display",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SpyderStack - Infrastructure for Growth",
  description: "Premium automation platform for contractors.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      {/* 3. Apply the new variable */}
      <body className={`${inter.variable} ${dmSans.variable} font-sans antialiased`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}