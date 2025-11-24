"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronDown, X } from "lucide-react"
import Image from "next/image"

// Links visible on the navbar (Desktop only)
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

  // Handle scroll effect
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
        isScrolled ? "max-w-full" : "max-w-[1400px]" 
      )}>
        
        {/* LEFT: Company Name & Logo */}
        <Link href="/" className="flex items-center gap-3 group relative z-[60]">
          <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300">
             <Image 
               src="/placeholder-logo.png" 
               alt="SpyderStack Logo"
               fill
               className="object-contain"
             />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white uppercase font-display drop-shadow-md">
            SpyderStack
          </span>
        </Link>

        {/* RIGHT: Nav Links + Menu Button */}
        <div className="flex items-center gap-8 relative z-[60]">
          
          {/* Desktop Links (Hidden on Mobile) */}
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

          {/* Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full text-white transition-all duration-300 group uppercase tracking-widest text-xs font-bold",
              "border border-white/20",
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

        {/* DROPDOWN CARD */}
        <div
          className={cn(
            // MOBILE OPTIMIZATION:
            // - w-[calc(100vw-2rem)]: Takes up full width minus padding on mobile
            // - right-[-1rem] (if inside container with padding) or right-0
            // - max-w-[420px]: Limits width on desktop/tablet
            "absolute top-full mt-4 right-0", 
            "w-[calc(100vw-3rem)] md:w-[420px]", // Responsive Width
            "bg-primary text-white shadow-2xl transform transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] origin-top-right z-[70]",
            "rounded-[2rem] p-8 md:p-10", // Slightly smaller padding on mobile
            
            isOpen 
              ? "opacity-100 scale-100 translate-y-0 visible" 
              : "opacity-0 scale-90 -translate-y-4 invisible pointer-events-none"
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
                className="group flex items-baseline gap-4 md:gap-6 py-3 md:py-4 border-b border-white/10 hover:border-white/30 transition-colors"
              >
                <span className="text-[10px] md:text-xs font-bold font-display opacity-50 w-6 text-white/70">{item.id}</span>
                <span className="text-xl md:text-2xl font-bold font-display tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Footer Links */}
          <div className="mt-6 md:mt-8 pt-4 flex flex-col gap-2 text-[10px] font-bold uppercase tracking-widest opacity-60 pl-10 md:pl-12 text-white">
             <Link href="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
             <Link href="/terms" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
          </div>
        </div>

      </div>
    </header>
  )
}