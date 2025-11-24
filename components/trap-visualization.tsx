"use client"

import { useEffect, useState } from "react"
import { Phone, MessageSquare, CheckCircle2 } from "lucide-react"

export function TrapVisualization() {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev + 1) % 4)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-primary">Trap</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how SpyderStack catches missed opportunities in real-time
          </p>
        </div>

        <div className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Animated flow */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            {/* Step 1: Incoming Call */}
            <div
              className={`flex flex-col items-center gap-4 transition-all duration-500 ${stage >= 0 ? "opacity-100 scale-100" : "opacity-50 scale-95"}`}
            >
              <div
                className={`w-20 h-20 rounded-full bg-destructive/20 flex items-center justify-center relative ${stage === 0 ? "glow-orange" : ""}`}
              >
                <Phone className="w-10 h-10 text-destructive" />
                {stage === 0 && (
                  <div className="absolute inset-0 rounded-full border-4 border-destructive animate-ping" />
                )}
              </div>
              <div className="text-center">
                <div className="font-display font-semibold mb-1">Missed Call</div>
                <div className="text-sm text-muted-foreground">Customer tries to reach you</div>
              </div>
            </div>

            {/* Arrow */}
            <div className={`hidden md:block transition-all duration-500 ${stage >= 1 ? "opacity-100" : "opacity-20"}`}>
              <div className="w-16 h-0.5 bg-gradient-to-r from-destructive to-primary" />
            </div>

            {/* Step 2: SpyderStack Catches */}
            <div
              className={`flex flex-col items-center gap-4 transition-all duration-500 ${stage >= 1 ? "opacity-100 scale-100" : "opacity-50 scale-95"}`}
            >
              <div
                className={`w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center relative ${stage === 1 ? "glow-cyan" : ""}`}
              >
                <svg className="w-10 h-10 text-primary" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="4" fill="currentColor" />
                  <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.6" />
                  <circle cx="30" cy="10" r="2" fill="currentColor" opacity="0.6" />
                  <circle cx="10" cy="30" r="2" fill="currentColor" opacity="0.6" />
                  <circle cx="30" cy="30" r="2" fill="currentColor" opacity="0.6" />
                  <line x1="20" y1="20" x2="10" y2="10" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                  <line x1="20" y1="20" x2="30" y2="10" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                  <line x1="20" y1="20" x2="10" y2="30" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                  <line x1="20" y1="20" x2="30" y2="30" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                </svg>
                {stage === 1 && <div className="absolute inset-0 rounded-full border-4 border-primary animate-ping" />}
              </div>
              <div className="text-center">
                <div className="font-display font-semibold mb-1">Web Activates</div>
                <div className="text-sm text-muted-foreground">AI instantly responds</div>
              </div>
            </div>

            {/* Arrow */}
            <div className={`hidden md:block transition-all duration-500 ${stage >= 2 ? "opacity-100" : "opacity-20"}`}>
              <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-secondary" />
            </div>

            {/* Step 3: Auto Text Sent */}
            <div
              className={`flex flex-col items-center gap-4 transition-all duration-500 ${stage >= 2 ? "opacity-100 scale-100" : "opacity-50 scale-95"}`}
            >
              <div
                className={`w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center relative ${stage === 2 ? "glow-cyan" : ""}`}
              >
                <MessageSquare className="w-10 h-10 text-secondary" />
                {stage === 2 && (
                  <div className="absolute inset-0 rounded-full border-4 border-secondary animate-ping" />
                )}
              </div>
              <div className="text-center">
                <div className="font-display font-semibold mb-1">Text Delivered</div>
                <div className="text-sm text-muted-foreground">Personalized message sent</div>
              </div>
            </div>

            {/* Arrow */}
            <div className={`hidden md:block transition-all duration-500 ${stage >= 3 ? "opacity-100" : "opacity-20"}`}>
              <div className="w-16 h-0.5 bg-gradient-to-r from-secondary to-primary" />
            </div>

            {/* Step 4: Lead Captured */}
            <div
              className={`flex flex-col items-center gap-4 transition-all duration-500 ${stage >= 3 ? "opacity-100 scale-100" : "opacity-50 scale-95"}`}
            >
              <div
                className={`w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center relative ${stage === 3 ? "glow-cyan" : ""}`}
              >
                <CheckCircle2 className="w-10 h-10 text-primary" />
                {stage === 3 && <div className="absolute inset-0 rounded-full border-4 border-primary animate-ping" />}
              </div>
              <div className="text-center">
                <div className="font-display font-semibold mb-1">Lead Caught</div>
                <div className="text-sm text-muted-foreground">Appointment booked</div>
              </div>
            </div>
          </div>

          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
