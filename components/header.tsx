"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronDown, X } from "lucide-react"

// Links visible on the navbar (The "3" you mentioned)
const visibleNavItems = [
  { href: "/about", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
]

// Links inside the dropdown menu
const menuItems = [
  { id: "01", href: "/about", label: "Our Story" },
  { id: "02", href: "/team", label: "Our Team" },
  { id: "03", href: "/portfolio", label: "Our Projects" },
  { id: "04", href: "/pricing", label: "Pricing" },
  { id: "05", href: "/contact", label: "Contact Us" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-8 px-6 md:px-12 transition-all duration-300">
      <div className="max-w-[1400px] mx-auto flex items-start justify-between relative">
        
        {/* LEFT: Company Name & Logo */}
        <Link href="/" className="flex items-center gap-3 group relative z-[60]">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
             {/* Abstract "Eye" or "Spyder" Logo */}
             <div className="w-3 h-3 bg-black rounded-full" />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white uppercase font-display drop-shadow-md">
            SpyderStack
          </span>
        </Link>

        {/* RIGHT: Nav Links + Menu Button */}
        <div className="flex items-center gap-12 relative z-[60]">
          
          {/* The 3 Visible Links (Shifted Right) */}
          <nav className="hidden md:flex items-center gap-8">
            {visibleNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-bold text-white/80 hover:text-white transition-colors uppercase tracking-widest drop-shadow-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors group uppercase tracking-widest text-sm font-bold"
          >
            {isOpen ? "Close" : "Menu"}
            {isOpen ? (
               <X className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
            ) : (
               <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
            )}
          </button>
        </div>

        {/* DROPDOWN CARD (Top Right) */}
        {/* This recreates the blue card shape from your image */}
        <div
          className={cn(
            "absolute top-0 right-0 w-[420px] bg-[#38bdf8] text-slate-900 shadow-2xl transform transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] origin-top-right",
            // Shape: Large rounded corners like the reference
            "rounded-[2.5rem] pt-24 pb-10 px-10",
            isOpen 
              ? "opacity-100 scale-100 translate-y-[-1rem]" 
              : "opacity-0 scale-90 -translate-y-8 pointer-events-none"
          )}
        >
          {/* Decorative lines similar to reference */}
          <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:100%_64px]" />

          {/* Menu List */}
          <nav className="flex flex-col gap-1 relative z-10">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group flex items-baseline gap-6 py-4 border-b border-black/10 hover:border-black/30 transition-colors"
              >
                <span className="text-xs font-bold font-display opacity-50 w-6">{item.id}</span>
                <span className="text-2xl font-bold font-display tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Footer Links */}
          <div className="mt-8 pt-4 flex flex-col gap-2 text-[10px] font-bold uppercase tracking-widest opacity-60 pl-12">
             <Link href="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
             <Link href="/terms" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
          </div>
        </div>

      </div>
    </header>
  )
}