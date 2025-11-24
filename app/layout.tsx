import type React from "react"
import type { Metadata } from "next"
// <CHANGE> Import Rajdhani for display/headings and Inter for body text
import { Inter, Rajdhani } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// <CHANGE> Setup custom fonts for cyber-industrial aesthetic
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SpyderStack - Stop Letting Leads Slip Through The Cracks",
  description:
    "Premium automation platform for contractors. Build a web that catches every lead with missed call text-back, reputation engine, and automated quote systems.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${rajdhani.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
