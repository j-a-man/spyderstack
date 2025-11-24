import type React from "react"
import type { Metadata } from "next"
import { Inter, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SmoothScroll } from "@/components/smooth-scroll"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

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
      <body className={`${inter.variable} ${dmSans.variable} font-sans antialiased bg-black`}>
        <SmoothScroll>
          {/* Footer is REMOVED from here to prevent duplication */}
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}