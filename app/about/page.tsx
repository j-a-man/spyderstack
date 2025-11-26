"use client"

import { Header } from "@/components/header"
import { NetworkBackground } from "@/components/network-background"
import { Footer } from "@/components/footer"

// CHANGED: New Centered "Manifesto" Layout
function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-background">

      {/* Background: Technical Grid & Radial Glow (Distinct from Home) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_50%)] opacity-10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10 px-6 text-center">

        {/* Badge Style Label */}
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-block text-primary tracking-[0.2em] text-xs font-bold uppercase border border-primary/30 px-6 py-2 rounded-full bg-primary/5 backdrop-blur-md">
            About SpyderStack
          </span>
        </div>

        {/* Centered Massive Title */}
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tighter mb-10 text-foreground animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          THE <span className="text-primary">DIGITAL</span> <br />
          BACKBONE.
        </h1>

        {/* Centered Narrative Paragraph */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          We are on a mission to ensure no contractor ever loses a lead again.
          Building the infrastructure for businesses that build the world.
        </p>
      </div>
    </section>
  )
}

function OurStory() {
  return (
    <section className="relative z-10 bg-background border-t border-foreground/5 py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left: Title Sticky */}
          <div className="md:sticky md:top-32">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              OUR <span className="text-primary">ORIGIN</span>
            </h2>
            <div className="h-1 w-24 bg-foreground shadow-[0_0_15px_rgba(255,255,255,0.5)] mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              SpyderStack was born from a simple observation: contractors are some of the hardest working people in America, yet they lose thousands every month to missed calls.
            </p>
          </div>

          {/* Right: Content */}
          <div className="space-y-12">
            <div className="bg-foreground/5 p-8 border border-foreground/10 hover:border-primary/50 transition-colors duration-500 group">
              <h3 className="text-2xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">The Problem</h3>
              <p className="text-muted-foreground leading-relaxed">
                While you're up on a roof, under a sink, or installing an HVAC system, potential customers are calling. By the time you check your voicemail, they've already hired someone else.
              </p>
            </div>

            <div className="bg-foreground/5 p-8 border border-foreground/10 hover:border-primary/50 transition-colors duration-500 group">
              <h3 className="text-2xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">The Solution</h3>
              <p className="text-muted-foreground leading-relaxed">
                We built an intelligent automation web that catches every lead instantly. No more phone tag. No more lost revenue. Just booked jobs.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function ValuesSection() {
  const values = [
    { title: "RELIABILITY", desc: "Just like the structures you build, our systems are engineered to last. Rock-solid uptime, always on." },
    { title: "SIMPLICITY", desc: "Complex problems don't need complex solutions. We make powerful enterprise technology simple to use." },
    { title: "RESULTS", desc: "We measure our success by your bank account. More leads caught, more jobs booked, more revenue earned." },
  ]

  return (
    <section className="relative z-10 bg-background border-t border-foreground/5 py-32">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-4">CORE VALUES</h2>
          <div className="h-1 w-24 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <div key={i} className="group relative overflow-hidden bg-foreground/5 p-10 border border-foreground/10 hover:bg-primary transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-3xl font-display font-bold text-foreground mb-4 group-hover:text-primary-foreground">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed group-hover:text-primary-foreground/90">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <main className="relative bg-background min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <NetworkBackground />
      </div>

      <Header />

      {/* Hero Section (Z-10) */}
      <div className="relative z-10">
        <AboutHero />
      </div>

      {/* Content Sections (Z-20) */}
      <div className="relative z-20 bg-background">
        <OurStory />
        <ValuesSection />
      </div>

      {/* Footer (Z-30) */}
      <div className="relative z-30">
        <Footer />
      </div>
    </main>
  )
}