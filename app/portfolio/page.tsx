"use client"

import { Header } from "@/components/header"
import { NetworkBackground } from "@/components/network-background"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"

const caseStudies = [
  {
    industry: "HVAC",
    company: "Arctic Air Solutions",
    location: "Phoenix, AZ",
    results: {
      missedCallsReduced: "94%",
      responseTime: "< 30s",
      revenueIncrease: "$47k/mo",
    },
    quote:
      "Before SpyderStack, we were losing 15-20 calls per week during busy season. Now we capture every single lead. It's like having a full-time receptionist who never takes a break.",
    name: "Mike Rodriguez",
    role: "Owner",
  },
  {
    industry: "Roofing",
    company: "Summit Roofing Co.",
    location: "Denver, CO",
    results: {
      missedCallsReduced: "89%",
      responseTime: "< 45s",
      revenueIncrease: "$63k/mo",
    },
    quote:
      "Storm season is our busiest time. SpyderStack helped us handle 3x more leads without hiring additional staff. The ROI was obvious within the first month.",
    name: "Sarah Chen",
    role: "Operations Manager",
  },
  {
    industry: "Plumbing",
    company: "FlowPro Plumbing",
    location: "Austin, TX",
    results: {
      missedCallsReduced: "92%",
      responseTime: "< 25s",
      revenueIncrease: "$34k/mo",
    },
    quote:
      "Emergency calls come at all hours. SpyderStack responds instantly even when we're on another job. Our customers love the fast response, and we love the extra revenue.",
    name: "James Turner",
    role: "Founder",
  },
  {
    industry: "Landscaping",
    company: "GreenScape Designs",
    location: "Portland, OR",
    results: {
      missedCallsReduced: "91%",
      responseTime: "< 35s",
      revenueIncrease: "$28k/mo",
    },
    quote:
      "We're often working outdoors where it's loud and phone calls get missed. SpyderStack ensures every inquiry gets an immediate response. Our booking rate has doubled.",
    name: "Amanda Foster",
    role: "Co-Owner",
  },
]

// 1. HERO SECTION (Manifesto Style)
function PortfolioHero() {
  return (
    <section className="relative min-h-[60vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-background">

      {/* Technical Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_50%)] opacity-10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10 px-6 text-center">

        <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-block text-primary tracking-[0.2em] text-xs font-bold uppercase border border-primary/30 px-6 py-2 rounded-full bg-primary/5 backdrop-blur-md">
            Case Studies
          </span>
        </div>

        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tighter mb-10 text-foreground animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          REAL <span className="text-primary">RESULTS</span>.<br />
          REAL REVENUE.
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          See how contractors across industries are using SpyderStack to capture more leads and scale their operations.
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
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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
                      <div className="text-3xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors font-display">{study.results.missedCallsReduced}</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Calls Saved</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors font-display">{study.results.responseTime}</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Response</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors font-display">{study.results.revenueIncrease}</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Revenue</div>
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
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] bg-[size:20px_20px]" />

      <div className="container mx-auto max-w-4xl px-6 relative z-10">
        <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight">
          READY TO BE OUR NEXT <br /> SUCCESS STORY?
        </h2>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join hundreds of contractors who are capturing more leads with SpyderStack.
        </p>
        <button className="bg-white text-primary font-bold text-lg px-12 py-5 uppercase tracking-widest hover:bg-white/90 transition-colors shadow-2xl">
          Start Your Free Trial
        </button>
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
      <div className="relative z-20 bg-background">
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