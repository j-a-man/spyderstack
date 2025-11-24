"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Network } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto text-center max-w-5xl">
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 glow-cyan">
          <Network className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Premium Automation for Contractors</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight">
          Stop Letting Leads <span className="text-primary glow-cyan inline-block">Slip Through</span> The Cracks
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance leading-relaxed">
          Build a web that catches every opportunity. Automated missed call responses, reputation management, and
          instant quotes for HVAC, roofing, and plumbing contractors.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="glow-cyan text-base font-semibold group">
            Start Catching Leads
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="glass text-base font-semibold bg-transparent">
            Watch Demo
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Response Rate</div>
          </div>
          <div className="text-center border-x border-border/40">
            <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">2min</div>
            <div className="text-sm text-muted-foreground">Avg Response Time</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">$50k+</div>
            <div className="text-sm text-muted-foreground">Avg Revenue Saved</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
