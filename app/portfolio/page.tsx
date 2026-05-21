"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { NetworkBackground } from "@/components/network-background"
import { ParticleAnimation } from "@/components/particle-animation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const caseStudies = [
  {
    category: "E-commerce",
    company: "ME by Reign",
    location: "Online",
    results: { visits: "1.2k+", retention: "90%", rating: "5.0/5" },
    description: "A modern e-commerce store for premium skin care and home products, featuring a seamless shopping experience.",
    image: "/Reign.png",
    link: "#"
  },
  {
    category: "Pharmacy",
    company: "Atlantic Pharmacy",
    location: "New York, NY",
    results: { visits: "680+", retention: "92%", rating: "5.0/5" },
    description: "A clean, fast, and user-friendly digital presence built to instill trust and help retain a growing client base.",
    image: "/AtlanticPharmacy.png",
    link: "#"
  },
  {
    category: "Pharmacy",
    company: "Health Guard Pharmacy",
    location: "New York, NY",
    results: { visits: "850+", retention: "95%", rating: "5.0/5" },
    description: "A beautiful multipage website integrated with a patient-friendly chatbot, featuring modern design and functionality.",
    image: "/HealthGuardPharmacy.png",
    link: "#"
  },
  {
    category: "Real Estate",
    company: "Blue Oasis 5512",
    location: "Florida",
    results: { visits: "500+", retention: "98%", rating: "4.9/5" },
    description: "A captivating digital presence for a premium rental home, optimized for high conversion and seamless bookings.",
    image: "/blueoasis5512.png",
    link: "#"
  },
  {
    category: "Paving",
    company: "Woolfolk Paving",
    location: "Binghamton, NY",
    results: { visits: "420+", retention: "88%", rating: "5.0/5" },
    description: "A sleek and professional website redesign that effectively serves as the modern digital face of the business.",
    image: null,
    link: "#"
  }
]

const categories = ["All", ...Array.from(new Set(caseStudies.map((s) => s.category)))]

// 1. HERO SECTION
function PortfolioHero() {
  return (
    <section className="sticky top-0 z-0 min-h-[70vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-background">
      <ParticleAnimation />

      <div className="container mx-auto max-w-5xl relative z-10 px-6 text-center">
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-block text-primary tracking-[0.2em] text-xs font-bold uppercase border border-primary/30 px-6 py-2 rounded-full bg-primary/5 backdrop-blur-md">
            Portfolio
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter mb-8 text-foreground animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          REAL <span className="text-primary">RESULTS</span>.<br />
          REAL IMPACT.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          See how businesses across industries are using SpyderStack to elevate their digital presence and engage more customers.
        </p>
      </div>
    </section>
  )
}

// 2. PROJECT GALLERY GRID
function CaseStudyGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredStudies = caseStudies.filter(
    (study) => activeCategory === "All" || study.category === activeCategory
  )

  return (
    <section className="relative z-10 bg-background border-t border-foreground/5 py-24 min-h-screen">
      <div className="container mx-auto max-w-7xl px-6">
        
        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-foreground/5 text-muted-foreground hover:bg-foreground/10 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study, index) => (
            <div
              key={index}
              className="group relative flex flex-col bg-slate-800/20 backdrop-blur-sm border border-foreground/10 rounded-2xl overflow-hidden hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-primary/10"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full bg-foreground/5 overflow-hidden border-b border-foreground/10">
                {study.image ? (
                  <Image
                    src={study.image}
                    alt={`${study.company} preview`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50 bg-slate-900">
                    <span className="text-sm font-medium">No preview available</span>
                  </div>
                )}
                
                {/* External Link Button Overlay */}
                <a 
                  href={study.link}
                  className="absolute top-4 right-4 h-8 w-8 rounded-full bg-background/80 backdrop-blur border border-foreground/10 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                  aria-label={`Visit ${study.company} website`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="flex flex-col flex-grow p-6">
                {/* Tag */}
                <div className="mb-4">
                  <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 text-xs font-semibold uppercase tracking-wider rounded-full px-3 py-1">
                    {study.category}
                  </Badge>
                </div>

                {/* Title & Description */}
                <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {study.company}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {study.description}
                </p>

                {/* Stats Footer */}
                <div className="flex items-center justify-between pt-5 border-t border-foreground/10 mt-auto">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-foreground">{study.results.visits}</span>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Visits</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-bold text-foreground">{study.results.retention}</span>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Retention</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-lg font-bold text-foreground">{study.results.rating}</span>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Rating</span>
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

// 3. CTA SECTION
function PortfolioCTA() {
  return (
    <section className="relative z-10 py-32 bg-primary border-t border-foreground/20 overflow-hidden text-center">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[length:20px_20px]" />

      <div className="container mx-auto max-w-4xl px-6 relative z-10">
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-primary-foreground tracking-tight">
          READY TO BE OUR NEXT <br /> SUCCESS STORY?
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join businesses that are capturing more leads and engaging more customers with SpyderStack.
        </p>

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
      <div className="fixed inset-0 z-0 pointer-events-none">
        <NetworkBackground />
      </div>

      <Header />

      <div className="relative z-10">
        <PortfolioHero />
      </div>

      <div className="relative z-20 bg-background border-t border-foreground/10 shadow-[0_-50px_100px_-20px_rgba(0,0,0,0.5)]">
        <div className="h-[5vh] w-full pointer-events-none" />
        <CaseStudyGrid />
        <PortfolioCTA />
      </div>

      <div className="relative z-30">
        <Footer />
      </div>
    </main>
  )
}