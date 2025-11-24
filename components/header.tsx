"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/40">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full" />
            <svg className="w-8 h-8 relative" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="3" fill="currentColor" className="text-primary" />
              <circle cx="10" cy="10" r="2" fill="currentColor" className="text-primary/60" />
              <circle cx="30" cy="10" r="2" fill="currentColor" className="text-primary/60" />
              <circle cx="10" cy="30" r="2" fill="currentColor" className="text-primary/60" />
              <circle cx="30" cy="30" r="2" fill="currentColor" className="text-primary/60" />
              <line x1="20" y1="20" x2="10" y2="10" stroke="currentColor" strokeWidth="1" className="text-primary/40" />
              <line x1="20" y1="20" x2="30" y2="10" stroke="currentColor" strokeWidth="1" className="text-primary/40" />
              <line x1="20" y1="20" x2="10" y2="30" stroke="currentColor" strokeWidth="1" className="text-primary/40" />
              <line x1="20" y1="20" x2="30" y2="30" stroke="currentColor" strokeWidth="1" className="text-primary/40" />
            </svg>
          </div>
          <span className="font-display text-xl font-bold tracking-wide">
            SPYDER<span className="text-primary">STACK</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="/industries" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Industries
          </Link>
          <Link
            href="/roi-calculator"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ROI Calculator
          </Link>
          <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About Us
          </Link>
          <Link href="/portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Portfolio
          </Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Button size="sm" className="glow-cyan text-sm font-semibold">
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  )
}
