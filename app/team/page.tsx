"use client"

import { Header } from "@/components/header"
import { NetworkBackground } from "@/components/network-background"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Mail, ArrowRight } from "lucide-react"
import Image from "next/image"

const founders = [
  {
    name: "Kris Patel",
    role: "Co-Founder",
    bio: "Leading the strategic vision and engineering the core automation protocols that power our clients' growth.",
    image: "/placeholder-user.jpg" // Using your existing placeholder
  },
  {
    name: "Matthew Condon",
    role: "Co-Founder",
    bio: "Architecting the client experience and ensuring every system deployment creates tangible revenue impact.",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Jaylin Man",
    role: "Co-Founder",
    bio: "Driving technical innovation and building the scalable infrastructure that keeps SpyderStack ahead of the curve.",
    image: "/placeholder-user.jpg"
  }
]

// 1. HERO SECTION
function TeamHero() {
  return (
    <section className="relative min-h-[60vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-background">

      {/* Technical Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--primary)_0%,_transparent_40%)] opacity-10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10 px-6 text-center">
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-block text-primary tracking-[0.2em] text-xs font-bold uppercase border border-primary/30 px-6 py-2 rounded-full bg-primary/5 backdrop-blur-md">
            The Architects
          </span>
        </div>

        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tighter mb-10 text-foreground animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          ENGINEERING <br />
          <span className="text-outline">GROWTH.</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          Meet the minds building the digital infrastructure for the modern contractor.
        </p>
      </div>
    </section>
  )
}

// 2. TEAM GRID
function TeamGrid() {
  return (
    <section className="relative z-10 bg-background border-t border-foreground/5 py-32">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((member, i) => (
            <div
              key={i}
              className="group relative bg-foreground/5 border border-foreground/10 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-[400px] w-full overflow-hidden border-b border-foreground/10">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8 relative">
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-8 h-8 border-l border-b border-foreground/10 bg-background/50 backdrop-blur-sm" />

                <h3 className="text-3xl font-display font-bold text-foreground mb-1">{member.name}</h3>
                <div className="text-primary text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  {member.role}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex gap-4 border-t border-foreground/10 pt-6">
                  <a href="#" className="text-foreground/40 hover:text-foreground transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-foreground/40 hover:text-foreground transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-foreground/40 hover:text-foreground transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// 3. CTA (Consistent with other pages)
function JoinCTA() {
  return (
    <section className="relative z-10 py-32 border-t border-foreground/10 bg-background text-center">
      <div className="container mx-auto max-w-4xl px-6">
        <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight">
          WORK WITH US?
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          We are always looking for talented engineers and problem solvers to join the infrastructure.
        </p>
        <Button variant="outline" className="h-14 px-10 text-lg rounded-none border-foreground/20 hover:bg-foreground hover:text-background uppercase tracking-widest font-bold transition-all">
          View Open Positions <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  )
}

export default function TeamPage() {
  return (
    <main className="relative bg-background min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <NetworkBackground />
      </div>

      <Header />

      {/* Stacking Architecture */}
      <div className="relative z-10">
        <TeamHero />
      </div>

      <div className="relative z-20 bg-background">
        <TeamGrid />
        <JoinCTA />
      </div>

      <div className="relative z-30">
        <Footer />
      </div>
    </main>
  )
}