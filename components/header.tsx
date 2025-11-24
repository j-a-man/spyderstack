"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronDown, X } from "lucide-react"

// Links visible on the navbar
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
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Handle scroll effect for the navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed z-50 transition-all duration-500 ease-in-out",
        isScrolled
          ? "top-4 left-4 right-4 bg-background/80 backdrop-blur-md border border-white/10 rounded-full py-3 px-6 shadow-lg"
          : "top-0 left-0 right-0 pt-8 px-6 md:px-12 bg-transparent border-transparent"
      )}
    >
      <div className={cn(
        "mx-auto flex items-center justify-between relative",
        // Constrain width only when not scrolled to align with page content
        isScrolled ? "max-w-full" : "max-w-[1400px]" 
      )}>
        
        {/* LEFT: Company Name & Logo */}
        <Link href="/" className="flex items-center gap-3 group relative z-[60]">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
             <div className="w-2.5 h-2.5 bg-black rounded-full" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white uppercase font-display drop-shadow-md">
            SpyderStack
          </span>
        </Link>

        {/* RIGHT: Nav Links + Menu Button */}
        <div className="flex items-center gap-8 relative z-[60]">
          
          {/* The 3 Visible Links */}
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
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full text-white transition-all duration-300 group uppercase tracking-widest text-xs font-bold",
              // Button Outline Style
              "border border-white/20",
              // HOVER STATE: Becomes bg-primary (instead of secondary)
              "hover:bg-primary hover:border-primary hover:text-white"
            )}
          >
            {isOpen ? "Close" : "Menu"}
            {isOpen ? (
               <X className="w-4 h-4 transition-transform duration-300 group-hover:rotate-90" />
            ) : (
               <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
            )}
          </button>
        </div>

        {/* DROPDOWN CARD (Floating Below) */}
        <div
          className={cn(
            "absolute right-0 w-[420px] bg-primary text-white shadow-2xl transform transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] origin-top-right z-[70]",
            "rounded-[2.5rem] p-10",
            // Adjust vertical position based on whether header is scrolled or not
            isScrolled ? "top-[calc(100%+1rem)]" : "top-full mt-6",
            isOpen 
              ? "opacity-100 scale-100 translate-y-0" 
              : "opacity-0 scale-90 -translate-y-4 pointer-events-none"
          )}
        >
          {/* Decorative Patterns */}
          <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(circle_at_top_right,_#fff_1px,_transparent_1px)] bg-[size:20px_20px]" />
          <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Menu List */}
          <nav className="flex flex-col gap-1 relative z-10">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group flex items-baseline gap-6 py-4 border-b border-white/10 hover:border-white/30 transition-colors"
              >
                <span className="text-xs font-bold font-display opacity-50 w-6 text-white/70">{item.id}</span>
                <span className="text-2xl font-bold font-display tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Footer Links */}
          <div className="mt-8 pt-4 flex flex-col gap-2 text-[10px] font-bold uppercase tracking-widest opacity-60 pl-12 text-white">
             <Link href="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
             <Link href="/terms" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
          </div>
        </div>

      </div>
    </header>
  )
}