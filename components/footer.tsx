"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Image from "next/image"

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Our Team", href: "/team" },
    { label: "Careers", href: "/careers" },
  ],
  industries: [
    { label: "HVAC", href: "/industries/hvac" },
    { label: "Roofing", href: "/industries/roofing" },
    { label: "Plumbing", href: "/industries/plumbing" },
    { label: "Landscaping", href: "/industries/landscaping" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ]
}

export function Footer() {
  return (
    // CHANGED: Added 'relative z-30' to sit ABOVE the z-20 CTA section
    // CHANGED: Added 'bg-background' to ensure opacity
    <footer className="relative z-30 bg-background border-t border-white/10 overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{
             backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
           }} 
      />

      <div className="container mx-auto max-w-7xl px-6 pt-20 pb-12 relative z-10">
        
        {/* Top Section: Brand & Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                           <Image 
                             src="/spider.png" // <--- CHANGE THIS to your logo file path (e.g. "/my-logo.png")
                             alt="SpyderStack Logo"
                             fill
                             className="object-contain"
                           />
                        </div>
              <span className="text-2xl font-bold tracking-tighter text-white uppercase font-display">
                SpyderStack
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed mb-8">
              The digital infrastructure for modern contractors. We automate the flow of leads so you can focus on the flow of work.
            </p>
            
            {/* System Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-emerald-400 uppercase tracking-widest">All Systems Operational</span>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-white font-display font-bold uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-display font-bold uppercase tracking-widest mb-6">Industries</h4>
            <ul className="space-y-4">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-display font-bold uppercase tracking-widest mb-6">Connect</h4>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-muted-foreground uppercase tracking-widest">
            © {new Date().getFullYear()} SpyderStack Inc. All Rights Reserved.
          </div>
          
          <div className="flex gap-8">
            {footerLinks.legal.map((link) => (
              <Link key={link.href} href={link.href} className="text-xs text-muted-foreground hover:text-white uppercase tracking-widest transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}