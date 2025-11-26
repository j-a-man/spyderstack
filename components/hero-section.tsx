"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { ParticleAnimation } from "@/components/particle-animation"
import Link from "next/link" // <--- 1. Import Link

export function HeroSection() {

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-background z-10">

      {/* DYNAMIC WEB CANVAS */}
      <ParticleAnimation />

      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 px-6">

        {/* Left Side: Content */}
        <div className="flex flex-col justify-center pt-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-primary" />
            <span className="text-primary tracking-[0.2em] text-sm font-bold uppercase">
              System Operational
            </span>
          </div>

          <h1 className="font-display text-7xl md:text-9xl font-bold leading-[0.85] tracking-tighter mb-6 text-foreground">
            BUILDING <br />
            <span className="text-outline ">DIGITAL</span> <br />
            WEBS.
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed mb-8">
            SpyderStack is the automation infrastructure that connects lost leads to signed contracts.
            Secure your revenue stream today.
          </p>

          {/* CHANGED: Added Links to Buttons */}
          <div className="flex flex-wrap gap-4">

            {/* 1. Start Now Button */}
            <Link href="/schedule">
              <Button className="h-16 px-12 text-lg rounded-none bg-primary hover:bg-primary/90 uppercase tracking-widest font-bold transition-all hover:pl-14 text-primary-foreground shadow-xl">
                Start Now <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>

          </div>
        </div>

        {/* Right Side: Metallic Spider Logo */}
        <div className="hidden lg:flex items-center justify-center pb-12 relative">
          <div className="absolute w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

          {/* CHANGED: Replaced 'zoom-in' with 'slide-in-from-bottom-4' for a subtle float-up effect */}
          <div className="relative w-[700px] h-[700px] animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
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