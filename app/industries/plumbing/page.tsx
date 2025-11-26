"use client"

import { Header } from "@/components/header"
import { NetworkBackground } from "@/components/network-background"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Droplet, Wrench, AlertCircle, FileText, ArrowRight, Calendar, Timer } from "lucide-react"
import Link from "next/link"

// --- HERO SECTION (Manifesto Style) ---
function PlumbingHero() {
  return (
    <section className="relative z-10 pt-40 pb-20 px-6 border-b border-foreground/5 overflow-hidden bg-background">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_40%)] opacity-10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto max-w-7xl text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Droplet className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm font-bold tracking-widest uppercase text-foreground/80">
            Plumbing Protocol Online
          </span>
        </div>

        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-foreground mb-8 tracking-tighter leading-[0.85] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          CAPTURE EVERY <br />
          <span className="text-primary">LEAK & LEAD.</span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          Plumbing emergencies don't wait. When a pipe bursts, homeowners need help NOW.
          SpyderStack ensures you are the first to respond, capturing high-value emergency calls instantly.
        </p>
      </div>
    </section>
  )
}

// --- STATS STRIP ---
function StatsStrip() {
  const stats = [
    { label: "Emergency Calls Caught", value: "+45%" },
    { label: "Revenue Saved", value: "$68k/yr" },
    { label: "Response Time", value: "< 95s" },
  ]

  return (
    <section className="relative z-10 border-b border-foreground/5 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-foreground/5">
          {stats.map((stat, i) => (
            <div key={i} className="py-12 px-6 text-center group hover:bg-foreground/5 transition-colors duration-500">
              <div className="text-5xl md:text-6xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- FEATURES GRID ---
function PlumbingFeatures() {
  const features = [
    {
      icon: AlertCircle,
      title: "Emergency Triage System",
      description: "Burst pipes get priority. Our AI instantly distinguishes between a true emergency and a routine leak, routing high-value calls directly to your on-call tech.",
    },
    {
      icon: Wrench,
      title: "Service Call Routing",
      description: "Direct customers to the right service lane: emergency, same-day, or scheduled maintenance. Reduce dispatch friction and increase billable hours.",
    },
    {
      icon: FileText,
      title: "Quote Automation",
      description: "Standard jobs like water heater replacements get instant ballpark quotes, qualifying the lead before you even roll a truck.",
    },
    {
      icon: Timer,
      title: "Maintenance Reminders",
      description: "Keep customers coming back. Automated follow-ups for drain cleaning, inspections, and winterization to fill your slow seasons.",
    },
  ]

  return (
    <section className="relative z-10 py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-20">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            SYSTEM <span className="text-primary">MODULES</span>
          </h2>
          <div className="h-1 w-24 bg-primary shadow-[0_0_15px_var(--primary)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-foreground/5 border border-foreground/10 p-10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 bg-foreground/5 border border-foreground/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                  <feature.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                </div>

                <h3 className="font-display text-3xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- CTA SECTION ---
function PlumbingCTA() {
  return (
    <section className="relative z-10 py-32 border-t border-foreground/10 bg-background">
      <div className="container mx-auto max-w-4xl text-center px-6">
        <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
          READY TO DOMINATE <br /> YOUR MARKET?
        </h2>
        <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
          Stop losing revenue to missed calls. Deploy the SpyderStack infrastructure today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/schedule">
            <Button className="h-14 px-8 text-base rounded-none bg-primary hover:bg-primary/90 text-primary-foreground uppercase tracking-widest font-bold shadow-lg hover:shadow-[0_0_30px_-5px_var(--primary)] transition-all duration-300 hover:scale-105 active:scale-95">
              Start Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>

          <Link href="/contact">
            <Button variant="outline" className="h-14 px-8 text-base rounded-none border-border text-foreground hover:bg-foreground hover:text-background uppercase tracking-widest font-bold transition-all duration-300 hover:scale-105 active:scale-95">
              <Calendar className="mr-2 w-5 h-5" /> Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function PlumbingPage() {
  return (
    <main className="relative min-h-screen bg-background selection:bg-primary selection:text-foreground">
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <NetworkBackground />
      </div>

      <Header />

      {/* Stacking Content */}
      <PlumbingHero />
      <StatsStrip />
      <PlumbingFeatures />
      <PlumbingCTA />

      <div className="relative z-20">
        <Footer />
      </div>
    </main>
  )
}
