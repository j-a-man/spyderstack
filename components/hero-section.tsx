"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
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
      // High Density: More particles for a clearer "Web"
      const particleCount = Math.floor((width * height) / 8000) 
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5, // Faster movement
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2.5 + 1, // Larger dots
          phase: Math.random() * Math.PI * 2
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i]
        
        // Move
        p1.x += p1.vx
        p1.y += p1.vy

        // Bounce
        if (p1.x < 0 || p1.x > width) p1.vx *= -1
        if (p1.y < 0 || p1.y > height) p1.vy *= -1

        // BRIGHT PULSE: Opacity swings between 0.5 and 1.0
        const pulse = Math.sin(Date.now() * 0.003 + p1.phase)
        const alpha = 0.5 + (pulse + 1) * 0.25

        // Draw Bright White Dot
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
        ctx.beginPath()
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2)
        ctx.fill()

        // Draw Connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          // Connect further distance (200px)
          if (dist < 200) {
            ctx.beginPath()
            // White lines, clearly visible
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.4 * (1 - dist / 200)})`
            ctx.lineWidth = 1 // Thicker line
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

  return (
    // CHANGED: Added 'bg-background' and 'z-10' to block the global background behind it
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-background z-10">
      
      {/* DYNAMIC WEB CANVAS */}
      <div className="absolute inset-0 z-0">
         <canvas 
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
         />
         {/* Gradient at bottom to blend into next section */}
         <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
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
            WEBS.
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed mb-8">
            SpyderStack is the automation infrastructure that connects lost leads to signed contracts. 
            Secure your revenue stream today.
          </p>

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
            
            <div className="relative w-[700px] h-[700px] animate-in fade-in zoom-in duration-1000 delay-300">
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