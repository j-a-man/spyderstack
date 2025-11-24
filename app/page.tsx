"use client"

import { Header } from "@/components/header"
import { NetworkBackground } from "@/components/network-background"
import { HeroSection } from "@/components/hero-section"
import { CTASection } from "@/components/cta-section"
import { ArrowDownRight } from "lucide-react"

// --- INLINE PROCESS STEPS (Updated for Stacking) ---
const steps = [
  { id: "01", title: "DETECTION", desc: "Instant identification of missed calls and lead inquiries." },
  { id: "02", title: "ENGAGEMENT", desc: "AI-driven immediate response protocols to secure the lead." },
  { id: "03", title: "CONVERSION", desc: "Automated quoting engines and reputation management." },
  { id: "04", title: "CAPTURE", desc: "The lead is securely stored and your team is notified." },
]

function ProcessSteps() {
  return (
    // Sticky Top-0 + z-10 means this will slide OVER the Hero (z-0)
    <section className="sticky top-0 z-10 min-h-screen flex items-center bg-background border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      <div className="container mx-auto max-w-7xl px-6 py-24">
        <div className="mb-20">
          <h2 className="font-display text-6xl font-bold uppercase tracking-tight mb-4">
            System <span className="text-primary">Architecture</span>
          </h2>
          <div className="h-1 w-32 bg-secondary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {steps.map((step) => (
            <div key={step.id} className="group bg-card p-8 border border-white/5 hover:border-primary/50 transition-all duration-500">
              <div className="flex justify-between items-start mb-4">
                <span className="font-display text-5xl font-bold text-white/10 group-hover:text-white/30 transition-colors">{step.id}</span>
                <ArrowDownRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    // Sticky Top-0 + z-20 means this slides OVER the ProcessSteps (z-10)
    <section className="sticky top-0 z-20 min-h-screen flex items-center justify-center bg-primary text-white shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
       <div className="container mx-auto max-w-4xl text-center px-6">
          <h2 className="font-display text-7xl md:text-9xl font-bold mb-8 tracking-tighter">
            READY TO <br /> DEPLOY?
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
            Join the contractors who have automated their growth.
          </p>
          <button className="bg-white text-primary font-bold text-xl px-12 py-6 uppercase tracking-widest hover:bg-white/90 transition-colors">
            Start Free Trial
          </button>
       </div>
    </section>
  )
}

// --- END INLINE COMPONENTS ---

export default function HomePage() {
  return (
    <main className="relative">
      {/* Network Background is fixed behind everything */}
      <div className="fixed inset-0 z-[-1]">
        <NetworkBackground />
      </div>
      
      <Header />
      
      {/* 1. Hero (z-0) */}
      <HeroSection />
      
      {/* 2. Process (z-10 slides over Hero) */}
      <ProcessSteps />
      
      {/* 3. CTA (z-20 slides over Process) */}
      <FinalCTA />
      
    </main>
  )
}