import { Header } from "@/components/header"
import { NetworkBackground } from "@/components/network-background"
import { IndustryCard } from "@/components/industry-card"
import { Wind, Home, Droplet, Trees } from "lucide-react"

const industries = [
  {
    slug: "hvac",
    icon: Wind,
    title: "HVAC Contractors",
    description: "Emergency calls happen 24/7. Never miss an AC breakdown or heating emergency again.",
    stats: { leads: "40%", revenue: "$75k", response: "90 sec" },
  },
  {
    slug: "roofing",
    icon: Home,
    title: "Roofing Companies",
    description: "Storm season means opportunity. Capture every leak repair and roof replacement lead.",
    stats: { leads: "52%", revenue: "$95k", response: "85 sec" },
  },
  {
    slug: "plumbing",
    icon: Droplet,
    title: "Plumbers",
    description: "Burst pipes and emergencies wait for no one. Be there instantly with automated responses.",
    stats: { leads: "45%", revenue: "$68k", response: "95 sec" },
  },
  {
    slug: "landscaping",
    icon: Trees,
    title: "Landscapers",
    description: "Peak season is short. Maximize every consultation request and project inquiry.",
    stats: { leads: "38%", revenue: "$42k", response: "110 sec" },
  },
]

export default function IndustriesPage() {
  return (
    <main className="min-h-screen">
      <NetworkBackground />
      <Header />

      <div className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Built for <span className="text-primary">Your Industry</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SpyderStack understands the unique challenges of contractor businesses. See how we help companies like
            yours.
          </p>
        </div>

        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((industry) => (
              <IndustryCard key={industry.slug} {...industry} />
            ))}
          </div>
        </div>

        <div className="container mx-auto max-w-4xl mt-16">
          <div className="glass rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-display text-2xl font-bold mb-4">Don't See Your Industry?</h2>
            <p className="text-muted-foreground mb-6">
              SpyderStack works for any contractor business. Let's discuss your specific needs.
            </p>
            <button className="text-primary hover:underline font-semibold">Contact Us →</button>
          </div>
        </div>
      </div>
    </main>
  )
}
