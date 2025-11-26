"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

export function ParticleAnimation() {
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
        <div className="absolute inset-0 z-0">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>
    )
}
