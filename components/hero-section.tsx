"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-background">
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-30">
         <Image 
            src="/buildings.jpg" // Using one of your uploaded images as base, or use /modern_tech.jpg
            alt="Infrastructure Background" 
            fill
            className="object-cover grayscale"
            priority
         />
         <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      </div>

      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 px-6">
        
        {/* Left Side: Content */}
        <div className="flex flex-col justify-center pt-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-primary" />
            <span className="text-primary tracking-[0.2em] text-sm font-bold uppercase">
              System Operational
            </span>
          </div>

          <h1 className="font-display text-7xl md:text-9xl font-bold leading-[0.85] tracking-tighter mb-6 text-white">
            BUILDING <br />
            <span className="text-outline">DIGITAL</span> <br />
            BRIDGES.
          </h1>

          {/* CHANGED: Smaller text (text-lg) and reduced margin (mb-8) */}
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed mb-8">
            SpyderStack is the automation infrastructure that connects lost leads to signed contracts. 
            Secure your revenue stream today.
          </p>

          {/* CHANGED: Button moved up via reduced margins above */}
          <div className="flex flex-wrap gap-0">
            <Button className="h-14 px-8 text-base rounded-none bg-primary hover:bg-primary/90 uppercase tracking-widest font-bold transition-all hover:pl-10">
              Deploy Infrastructure <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Right Side: Metallic Spider Logo */}
        <div className="hidden lg:flex items-center justify-center pb-12 relative">
            {/* Glow Effect */}
            <div className="absolute w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
            
            {/* CHANGED: Replaced Stats Card with Metallic Spider Logo */}
            <div className="relative w-[700px] h-[700px] animate-in fade-in zoom-in duration-1000 delay-300">
                {/* Placeholder for the metallic spider logo - Ensure you add the file to /public */}
                <Image 
                    src="/spider.png" 
                    alt="Metallic Spider Logo"
                    fill
                    className="object-contain drop-shadow-[0_0_50px_rgba(255,255,255,0.1)] opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
            </div>
        </div>

      </div>
    </section>
  )
}