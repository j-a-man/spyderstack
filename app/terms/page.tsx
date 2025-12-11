"use client"

import { useEffect, useRef } from "react"
import { Header } from "@/components/header"
import { NetworkBackground } from "@/components/network-background"
import { Footer } from "@/components/footer"

export default function TermsPage() {
    // --- CANVAS ANIMATION LOGIC ---
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
            const particleCount = Math.floor((width * height) / 10000)
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.2,
                    vy: (Math.random() - 0.5) * 0.2,
                    size: Math.random() * 2 + 1,
                    phase: Math.random() * Math.PI * 2
                })
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height)

            for (let i = 0; i < particles.length; i++) {
                const p1 = particles[i]

                p1.x += p1.vx
                p1.y += p1.vy

                if (p1.x < 0 || p1.x > width) p1.vx *= -1
                if (p1.y < 0 || p1.y > height) p1.vy *= -1

                const pulse = Math.sin(Date.now() * 0.002 + p1.phase)
                const alpha = 0.3 + (pulse + 1) * 0.2

                ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
                ctx.beginPath()
                ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2)
                ctx.fill()

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j]
                    const dx = p1.x - p2.x
                    const dy = p1.y - p2.y
                    const dist = Math.sqrt(dx * dx + dy * dy)

                    if (dist < 150) {
                        ctx.beginPath()
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.15 * (1 - dist / 150)})`
                        ctx.lineWidth = 0.5
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
    // --- END ANIMATION ---

    return (
        <main className="relative min-h-screen bg-background selection:bg-primary selection:text-foreground">
            {/* Fixed Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <NetworkBackground />
            </div>

            <Header />

            {/* Hero Section */}
            <section className="sticky top-0 z-0 min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden bg-background">

                {/* DYNAMIC WEB CANVAS */}
                <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                    <canvas
                        ref={canvasRef}
                        className="absolute inset-0 w-full h-full"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
                </div>

                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-sm font-bold tracking-widest uppercase text-foreground/80">
                            Legal Documentation
                        </span>
                    </div>

                    <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                        TERMS OF <span className="text-primary">SERVICE</span>
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        Last Updated: {new Date().toLocaleDateString()}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <div className="relative z-10 bg-background border-t border-foreground/10 shadow-[0_-50px_100px_-20px_rgba(0,0,0,0.5)]">

                {/* Scroll Buffer to allow Hero visibility */}
                <div className="h-[10vh] w-full pointer-events-none" />

                <section className="py-24">
                    <div className="container mx-auto max-w-4xl px-6">
                        <div className="bg-foreground/5 border border-foreground/10 p-8 md:p-12 backdrop-blur-sm">
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-muted-foreground leading-relaxed mb-8">
                                    Welcome to SpyderStack. By accessing or using our website and services, you agree to be bound by these Terms of Service.
                                </p>

                                <h3 className="text-2xl font-display font-bold text-foreground mb-4">1. Acceptance of Terms</h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.
                                </p>

                                <h3 className="text-2xl font-display font-bold text-foreground mb-4">2. Use License</h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Permission is granted to temporarily download one copy of the materials (information or software) on SpyderStack's website for personal, non-commercial transitory viewing only.
                                </p>

                                <h3 className="text-2xl font-display font-bold text-foreground mb-4">3. Disclaimer</h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    The materials on SpyderStack's website are provided on an 'as is' basis. SpyderStack makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                                </p>

                                <h3 className="text-2xl font-display font-bold text-foreground mb-4">4. Limitations</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    In no event shall SpyderStack or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SpyderStack's website.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </main>
    )
}