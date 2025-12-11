"use client"

import { Header } from "@/components/header"
import { NetworkBackground } from "@/components/network-background"
import { ParticleAnimation } from "@/components/particle-animation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const caseStudies = [
  {
    industry: "Pharmacy",
    company: "Health Guard Pharmacy",
    location: "Queens, NY",
    results: {
      visits: "850+",
      retention: "95%",
      rating: "5.0/5",
    },
    quote:
      "SpyderStack built us a beautiful multipage website with a chatbot that our patients love. We are very happy with the modern design and functionality.",
    name: "Linda Yee",
    role: "Owner",
  },
  {
    industry: "Paving",
    company: "Woolfolk Paving",
    location: "Binghamton, NY",
    results: {
      visits: "420+",
      retention: "88%",
      rating: "5.0/5",
    },
    quote:
      "Our old website was outdated. The new one is sleek, professional, and represents our work perfectly. It's the digital face our business needed.",
    name: "Willie Woolfolk",
    role: "Owner",
  },
  {
    industry: "Pharmacy",
    company: "Atlantic Pharmacy",
    location: "Brooklyn, NY",
    results: {
      visits: "680+",
      retention: "92%",
      rating: "5.0/5",
    },
    quote:
      "We needed a website that instilled trust. SpyderStack delivered a clean, fast, and user-friendly site that has helped us retain so many more clients.",
    name: "Frank Yip",
    role: "Owner",
  },
]

// 1. HERO SECTION (Manifesto Style)
function PortfolioHero() {
  return (
    <section className="sticky top-0 z-0 min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-background">
      <ParticleAnimation />

      <div className="container mx-auto max-w-5xl relative z-10 px-6 text-center">

        <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-block text-primary tracking-[0.2em] text-xs font-bold uppercase border border-primary/30 px-6 py-2 rounded-full bg-primary/5 backdrop-blur-md">
            Portfolio
          </span>
        </div>

        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tighter mb-10 text-foreground animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          REAL <span className="text-primary">RESULTS</span>.<br />
          REAL IMPACT.
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          See how businesses across industries are using SpyderStack to elevate their digital presence and engage more customers.
        </p>
      </div>
    </section>
  )
}

// 2. CASE STUDIES (Technical Panels)
function CaseStudyGrid() {
  return (
    <section className="relative z-10 bg-background border-t border-foreground/5 py-32">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group relative bg-foreground/5 border border-foreground/10 overflow-hidden hover:border-primary/50 transition-all duration-500"
            >
              {/* Subtle Hover Glow */}
              <div className="absolute inset-0 bg-linear-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-12">

                {/* Left Column: Identity & Metrics */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 uppercase tracking-widest rounded-full px-4 py-1">
                        {study.industry}
                      </Badge>
                      <span className="text-muted-foreground text-sm tracking-wide border-l border-foreground/10 pl-4">{study.location}</span>
                    </div>
                    <h3 className="font-display text-4xl font-bold text-foreground mb-2">{study.company}</h3>
                  </div>

                  {/* Metric Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 lg:mt-0 py-8 border-t border-b border-foreground/10">
                    <div>
                      <div className="text-3xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors font-display">{study.results.visits}</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Site Visits</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors font-display">{study.results.retention}</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Client Retention</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors font-display">{study.results.rating}</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Satisfaction</div>
                    </div>
                  </div>
                </div>

                {/* Right Column: The Story */}
                <div className="lg:col-span-7 flex flex-col justify-center pl-0 lg:pl-12 border-l-0 lg:border-l border-foreground/10">
                  <blockquote className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic mb-8">
                    "{study.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-foreground/10 flex items-center justify-center text-foreground font-bold border border-foreground/5">
                      {study.name[0]}
                    </div>
                    <div>
                      <div className="text-foreground font-bold">{study.name}</div>
                      <div className="text-primary text-xs uppercase tracking-wider font-bold">{study.role}</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// 3. CTA SECTION (Unified Style)
function PortfolioCTA() {
  return (
    <section className="relative z-10 py-32 bg-primary border-t border-foreground/20 overflow-hidden text-center">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-size-[20px_20px]" />

      <div className="container mx-auto max-w-4xl px-6 relative z-10">
        <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 text-primary-foreground tracking-tight">
          READY TO BE OUR NEXT <br /> SUCCESS STORY?
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join hundreds of contractors who are capturing more leads with SpyderStack.
        </p>

        {/* CHANGED: Updated Button */}
        <Link href="/schedule">
          <Button className="h-14 px-8 text-base rounded-none bg-background text-foreground hover:bg-background/90 uppercase tracking-widest font-bold shadow-lg hover:shadow-foreground/25 transition-all duration-300 hover:scale-105 active:scale-95">
            Start Now <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default function PortfolioPage() {
  return (
    <main className="relative bg-background min-h-screen">
      {/* Background fixed at lowest layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <NetworkBackground />
      </div>

      <Header />

      {/* Hero Layer (Z-10) */}
      <div className="relative z-10">
        <PortfolioHero />
      </div>

      {/* Content Layer (Z-20) - Slides over hero if sticky, or flows naturally */}
      <div className="relative z-20 bg-background border-t border-foreground/10 shadow-[0_-50px_100px_-20px_rgba(0,0,0,0.5)]">
        {/* Scroll Buffer to allow Hero visibility */}
        <div className="h-[10vh] w-full pointer-events-none" />

        <CaseStudyGrid />
        <PortfolioCTA />
      </div>

      {/* Footer Layer (Z-30) */}
      <div className="relative z-30">
        <Footer />
      </div>
    </main>
  )
}