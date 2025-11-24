import type React from "react"
import type { Metadata } from "next"
// 1. Import ONLY DM Sans (Anthem uses a single clean font family)
import { DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SmoothScroll } from "@/components/smooth-scroll"
import "./globals.css"

// 2. Configure DM Sans to be your "Sans" font (Body text)
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans", // <--- IMPORTANT: Mapping this to 'font-sans' changes the body text
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
      {/* 3. Apply the variable */}
      <body className={`${dmSans.variable} font-sans antialiased bg-black`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}