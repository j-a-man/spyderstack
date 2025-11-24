"use client"

import { useState, useEffect, useRef } from "react"
import { Header } from "@/components/header"
import { NetworkBackground } from "@/components/network-background"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)
  
  // --- IMPROVED CANVAS ANIMATION LOGIC (Matches Home Page) ---
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let width = 0
    let height = 0
    let particles: any[] = []

    const resize = () => {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
      initParticles()
    }

    const initParticles = () => {
      particles = []
      // Density: 9000 matches the Home Page "Big Web" density
      const particleCount = Math.floor((width * height) / 9000) 
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          // Bigger dots (1.5 to 4.5)
          size: Math.random() * 3 + 1.5, 
          phase: Math.random() * Math.PI * 2
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i]
        p1.x += p1.vx
        p1.y += p1.vy

        if (p1.x < 0 || p1.x > width) p1.vx *= -1
        if (p1.y < 0 || p1.y > height) p1.vy *= -1

        // High visibility pulse
        const pulse = Math.sin(Date.now() * 0.002 + p1.phase)
        const alpha = 0.4 + (pulse + 1) * 0.3

        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
        ctx.beginPath()
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2)
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          // Connect further distance (220px) for bigger webs
          if (dist < 220) {
            ctx.beginPath()
            // Thicker, brighter lines
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 * (1 - dist / 220)})`
            ctx.lineWidth = 0.8
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", resize)
    resize()
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])
  // --- END ANIMATION LOGIC ---

  return (
    <main className="relative min-h-screen bg-black selection:bg-primary selection:text-white">
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <NetworkBackground />
      </div>

      <Header />

      {/* 1. HERO SECTION WITH ANIMATION */}
      {/* Added 'bg-background' to obscure the global dots behind it */}
      <section className="relative z-10 pt-40 pb-20 px-6 border-b border-white/5 overflow-hidden bg-background">
        {/* Animated Web Background - Full Opacity */}
        <div className="absolute inset-0 z-0 opacity-100">
           <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
           <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container mx-auto max-w-7xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-bold tracking-widest uppercase text-white/80">
              Transparent Infrastructure
            </span>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            SCALABLE <span className="text-primary">PRICING</span> <br />
            FOR GROWTH.
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Choose the capacity that fits your business. No hidden fees. No surprise overages. 
            Just robust automation infrastructure.
          </p>
        </div>
      </section>

      {/* 2. PRICING SECTION */}
      <section className="relative z-10 py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-6">
          
          {/* Toggle */}
          <div className="flex justify-center items-center gap-6 mb-20">
            <span className={cn("text-sm font-bold tracking-widest uppercase transition-colors duration-300", !isAnnual ? "text-white" : "text-muted-foreground")}>
              Monthly
            </span>
            
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 rounded-full bg-white/10 border border-white/10 transition-all duration-300 hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]"
            >
              <div className={cn(
                "absolute top-1 left-1 w-6 h-6 rounded-full bg-primary transition-transform duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)",
                isAnnual ? "translate-x-8" : "translate-x-0"
              )} />
            </button>

            <span className={cn("text-sm font-bold tracking-widest uppercase transition-colors duration-300 flex items-center gap-2", isAnnual ? "text-white" : "text-muted-foreground")}>
              Annually
              <span className="text-[10px] bg-primary text-white px-2 py-0.5 rounded-full font-bold shadow-[0_0_10px_var(--primary)]">
                SAVE 20%
              </span>
            </span>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* CARD 1: CONTRACTOR ADVANCED */}
            <div className="relative group bg-white/5 border border-white/10 p-10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-10px_rgba(var(--primary-rgb),0.1)] flex flex-col">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-1 uppercase tracking-widest shadow-[0_0_20px_var(--primary)]">
                Most Popular
              </div>

              <div className="mb-8">
                <h3 className="font-display text-3xl font-bold text-white mb-2">Contractor Advanced</h3>
                <p className="text-muted-foreground text-sm">Perfect for establishing your digital dominance.</p>
              </div>

              {/* Price Calculation - Adjusted font size for better fit */}
              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-5xl md:text-6xl font-display font-bold text-white tracking-tighter transition-all duration-300">
                  ${isAnnual ? Math.round(297 * 12 * 0.8).toLocaleString() : 297}
                </span>
                <span className="text-muted-foreground font-medium">
                  /{isAnnual ? "yr" : "mo"}
                </span>
              </div>

              <div className="space-y-6 mb-12 flex-1">
                {[
                  "Functional Website (10-20 Pages)",
                  "Automated Lead Follow Up",
                  "Missed Call Text Back",
                  "5-Star Magic Review Funnel",
                  "One-Click Marketing Campaigns",
                  "On-Site SEO"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 group/item">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5 transition-colors group-hover/item:bg-primary/40">
                      <Check className="w-3 h-3 text-primary group-hover/item:text-white transition-colors" />
                    </div>
                    <span className="text-white/90 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full h-14 text-base rounded-none bg-white text-black hover:bg-primary hover:text-white uppercase tracking-widest font-bold transition-all duration-300 hover:scale-[1.02] active:scale-95 hover:shadow-lg border border-transparent hover:border-primary/50">
                Start Now <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* CARD 2: CONTRACTOR SUPREME */}
            <div className="relative group bg-white/5 border border-white/10 p-10 hover:border-primary transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-10px_rgba(var(--primary-rgb),0.2)] flex flex-col">
              
              <div className="mb-8">
                <h3 className="font-display text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Contractor Supreme</h3>
                <p className="text-muted-foreground text-sm">Full-scale aggressive growth engine.</p>
              </div>

              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-5xl md:text-6xl font-display font-bold text-white tracking-tighter transition-all duration-300">
                  ${isAnnual ? Math.round(750 * 12 * 0.8).toLocaleString() : 750}
                </span>
                <span className="text-muted-foreground font-medium">
                  /{isAnnual ? "yr" : "mo"}
                </span>
              </div>

              <div className="space-y-6 mb-12 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-white font-bold text-sm">Everything in Contractor Advanced +</span>
                </div>
                {[
                  "Google Ads Management",
                  "Google My Business Optimizations",
                  "Priority Support Access",
                  "Monthly Strategy Calls"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 group/item">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5 transition-colors group-hover/item:bg-primary/40">
                      <Check className="w-3 h-3 text-primary group-hover/item:text-white transition-colors" />
                    </div>
                    <span className="text-white/90 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full h-14 text-base rounded-none bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold shadow-[0_0_20px_-5px_rgba(var(--primary-rgb),0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-95 hover:shadow-[0_0_30px_-5px_rgba(var(--primary-rgb),0.6)]">
                Start Now <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* 3. BOOK A CALL CTA */}
      <section className="relative z-10 py-32 border-t border-white/10 bg-background">
        <div className="container mx-auto max-w-4xl text-center px-6">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            NOT SURE WHICH PLAN?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
            Let's analyze your current lead flow and determine the right infrastructure for your goals.
          </p>
          
          <Button 
            variant="outline" 
            className="h-16 px-10 text-lg rounded-none border-white/20 text-white bg-transparent hover:bg-primary hover:text-white hover:border-primary uppercase tracking-widest font-bold transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_30px_-5px_var(--primary)]"
          >
            <Calendar className="mr-2 w-5 h-5" /> Schedule a Time to Talk
          </Button>
        </div>
      </section>

      <div className="relative z-20">
        <Footer />
      </div>
    </main>
  )
}