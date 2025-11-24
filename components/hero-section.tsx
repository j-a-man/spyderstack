"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"
import Link from "next/link" // <--- 1. Import Link

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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
      const particleCount = Math.floor((width * height) / 8000)
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2.5 + 1,
          phase: Math.random() * Math.PI * 2
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      const isDark = theme === 'dark' || !mounted
      const color = isDark ? '255, 255, 255' : '0, 0, 0'

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i]
        p1.x += p1.vx
        p1.y += p1.vy

        if (p1.x < 0 || p1.x > width) p1.vx *= -1
        if (p1.y < 0 || p1.y > height) p1.vy *= -1

        const pulse = Math.sin(Date.now() * 0.003 + p1.phase)
        const alpha = 0.5 + (pulse + 1) * 0.25

        ctx.fillStyle = `rgba(${color}, ${alpha})`
        ctx.beginPath()
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2)
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 200) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(${color}, ${0.4 * (1 - dist / 200)})`
            ctx.lineWidth = 1
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
  }, [theme, mounted])

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-background z-10">

      {/* DYNAMIC WEB CANVAS */}
      <div className="absolute inset-0 z-0">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
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

          <h1 className="font-display text-7xl md:text-9xl font-bold leading-[0.85] tracking-tighter mb-6 text-foreground">
            BUILDING <br />
            <span className="text-outline">DIGITAL</span> <br />
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