"use client"

import { Header } from "@/components/header"
import { NetworkBackground } from "@/components/network-background"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { ArrowDownRight } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    id: "01",
    title: "DETECTION",
    subtitle: "The Trap Activates",
    description: "Within seconds, our system detects the missed call. The web activates instantly, gathering caller information before they can dial a competitor.",
  },
  {
    id: "02",
    title: "ENGAGEMENT",
    subtitle: "AI Response",
    description: "A personalized, professional text message is automatically sent. It acknowledges their call and offers immediate next steps.",
  },
  {
    id: "03",
    title: "CONVERSION",
    subtitle: "Booking & Quotes",
    description: "The customer responds to book an appointment or get a ballpark quote through our automated Smart Forms.",
  },
  {
    id: "04",
    title: "CAPTURE",
    subtitle: "Secure the Lead",
    description: "The lead is securely stored in your dashboard, added to your calendar, and your team is notified instantly.",
  },
]

// --- COMPONENT: Process Steps ---
function ProcessSteps() {
  return (
    <section className="relative z-20 bg-background border-t border-border">
      <div className="container mx-auto max-w-7xl px-6 py-32">

        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground">
              System <span className="text-primary">Architecture</span>
            </h2>
            <div className="h-1 w-24 bg-foreground shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
          </div>
          <p className="text-muted-foreground max-w-md text-right mt-8 md:mt-0 text-lg leading-relaxed">
            The automation web that captures and converts every lead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group relative overflow-hidden bg-card p-10 border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <span className="font-display text-6xl font-bold text-foreground/10 group-hover:text-foreground/40 transition-colors duration-500">
                    {step.id}
                  </span>
                  <div className="h-12 w-12 rounded-full border border-border flex items-center justify-center text-foreground/50 group-hover:text-primary group-hover:border-primary/50 transition-all duration-500">
                    <ArrowDownRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                  </div>
                </div>

                <h3 className="text-3xl font-display font-bold text-foreground mb-2 tracking-wide">
                  {step.title}
                </h3>
                <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4 block">
                  {step.subtitle}
                </span>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- COMPONENT: CTA ---
function FinalCTA() {
  return (
    // CHANGED: Added ample padding (py-40) to decompress the section
    <section className="relative z-30 py-40 flex flex-col justify-center items-center bg-primary text-primary-foreground border-t border-primary-foreground/20 overflow-hidden">

      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] bg-[size:20px_20px]" />

      <div className="container mx-auto max-w-6xl text-center px-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-md mb-12">
          <span className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
          <span className="text-sm font-bold tracking-widest uppercase">System Ready</span>
        </div>

        <h2 className="font-display text-7xl md:text-[10rem] font-bold mb-12 tracking-tighter leading-[0.8]">
          READY TO <br /> <span className="text-primary-foreground/50">DEPLOY?</span>
        </h2>

        <p className="text-2xl md:text-3xl text-primary-foreground/90 mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
          Join the contractors who have automated their growth infrastructure.
        </p>

        <Link href="/schedule" className="group relative inline-flex items-center justify-center px-16 py-8 bg-background text-foreground font-bold text-2xl uppercase tracking-widest overflow-hidden transition-transform hover:scale-105 shadow-2xl">
          <span className="relative z-10">CONTACT US</span>
          <div className="absolute inset-0 bg-primary-foreground/0 group-hover:bg-primary-foreground/10 transition-colors" />
        </Link>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <main className="relative bg-background">

      <Header />

      {/* Fixed Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <NetworkBackground />
      </div>

      {/* 1. Hero Section (Z-10) */}
      <div className="relative z-10">
        <HeroSection />
      </div>

      {/* 2. Process Steps (Z-20 - Flows naturally after Hero) */}
      <ProcessSteps />

      {/* 3. Final CTA (Z-30) */}
      <FinalCTA />

      {/* 4. Footer (Z-40 - Flows naturally at end) */}
      <div className="relative z-40">
        <Footer />
      </div>

    </main>
  )
}