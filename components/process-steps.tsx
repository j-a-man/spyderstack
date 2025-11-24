"use client"

import { cn } from "@/lib/utils"
import { ArrowDownRight } from "lucide-react"

const steps = [
  {
    id: "01",
    title: "DETECTION",
    subtitle: "The Trap Activates",
    description: "Within seconds, our system detects the missed call. The web activates instantly, gathering caller information before they can dial a competitor.",
  },
  {
    id: "02",
    title: "ENGAGEMENT",
    subtitle: "AI Response",
    description: "A personalized, professional text message is automatically sent. It acknowledges their call and offers immediate next steps.",
  },
  {
    id: "03",
    title: "CONVERSION",
    subtitle: "Booking & Quotes",
    description: "The customer responds to book an appointment or get a ballpark quote through our automated Smart Forms.",
  },
  {
    id: "04",
    title: "CAPTURE",
    subtitle: "Secure the Lead",
    description: "The lead is securely stored in your dashboard, added to your calendar, and your team is notified instantly.",
  },
]

export function ProcessSteps() {
  return (
    <section className="py-32 border-b border-white/5 bg-black/20">
      <div className="container mx-auto max-w-7xl px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4">
              The <span className="text-primary">Anatomy</span> <br /> of the System
            </h2>
            <div className="h-1 w-32 bg-secondary" />
          </div>
          <p className="text-muted-foreground max-w-md text-right mt-8 md:mt-0">
            See exactly how our automation web captures and converts every lead that comes your way.
          </p>
        </div>

        <div className="grid grid-cols-1 border-t border-white/10">
          {steps.map((step, i) => (
            <div 
              key={step.id} 
              className="group grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-white/10 hover:bg-white/5 transition-colors duration-500 px-4"
            >
              {/* Number */}
              <div className="md:col-span-2">
                <span className="font-display text-5xl font-bold text-white/20 group-hover:text-secondary transition-colors duration-500">
                  {step.id}.
                </span>
              </div>

              {/* Title */}
              <div className="md:col-span-4">
                <h3 className="text-3xl font-display font-bold text-white mb-2">{step.title}</h3>
                <span className="text-primary text-sm uppercase tracking-wider">{step.subtitle}</span>
              </div>

              {/* Description */}
              <div className="md:col-span-5 flex items-center">
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Icon */}
              <div className="md:col-span-1 flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="h-10 w-10 rounded-full border border-secondary/50 flex items-center justify-center text-secondary">
                  <ArrowDownRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}