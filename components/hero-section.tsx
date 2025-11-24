"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    // Added 'sticky top-0' and 'z-0' to participate in the stacking effect
    <section className="sticky top-0 z-0 min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-background">
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
         {/* Replace src with your own local image if you have one */}
         <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Infrastructure Background" 
            fill
            className="object-cover grayscale"
            priority
         />
         <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      </div>

      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 px-6">
        
        <div className="flex flex-col justify-center pt-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-primary" />
            <span className="text-primary tracking-[0.2em] text-sm font-bold uppercase">
              System Operational
            </span>
          </div>

          <h1 className="font-display text-7xl md:text-9xl font-bold leading-[0.85] tracking-tighter mb-8 text-white">
            BUILDING <br />
            <span className="text-outline">DIGITAL</span> <br />
            BRIDGES.
          </h1>

          <p className="text-xl text-muted-foreground max-w-xl leading-relaxed mb-10">
            SpyderStack is the automation infrastructure that connects lost leads to signed contracts. 
            Secure your revenue stream today.
          </p>

          <div className="flex flex-wrap gap-0">
            <Button className="h-16 px-10 text-lg rounded-none bg-primary hover:bg-primary/90 uppercase tracking-widest font-bold transition-all hover:pl-12">
              Deploy Infrastructure <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Right Side: Architectural Graphic or 3D element */}
        <div className="hidden lg:flex items-end justify-end pb-12">
            <div className="bg-card/80 backdrop-blur-md p-8 border border-white/10 w-full max-w-md">
                <div className="flex justify-between items-end mb-4">
                    <span className="text-6xl font-display font-bold text-white">98<span className="text-primary">%</span></span>
                    <span className="text-sm text-muted-foreground uppercase tracking-widest mb-2 text-right">Capture<br/>Efficiency</span>
                </div>
                <div className="h-1 w-full bg-white/10">
                    <div className="h-full w-[98%] bg-primary" />
                </div>
            </div>
        </div>

      </div>
    </section>
  )
}