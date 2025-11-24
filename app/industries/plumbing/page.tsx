import { Header } from "@/components/header"
import { NetworkBackground } from "@/components/network-background"
import { IndustryHero } from "@/components/industry-hero"
import { IndustryFeatures } from "@/components/industry-features"
import { CTASection } from "@/components/cta-section"
import { Droplet } from "lucide-react"

const plumbingFeatures = [
  {
    title: "Emergency Triage",
    description: "Burst pipes and major leaks get priority responses, while routine work is scheduled appropriately.",
  },
  {
    title: "Service Call Routing",
    description: "Direct customers to the right service: emergency, same-day, or scheduled maintenance.",
  },
  {
    title: "Quote Automation",
    description: "Common services like water heater installation get instant ballpark quotes.",
  },
  {
    title: "Maintenance Reminders",
    description: "Keep customers coming back with automated reminders for drain cleaning, inspections, and more.",
  },
]

export default function PlumbingPage() {
  return (
    <main className="min-h-screen">
      <NetworkBackground />
      <Header />

      <div className="pt-32 pb-16 px-4">
        <IndustryHero
          icon={Droplet}
          title="SpyderStack for Plumbers"
          description="Plumbing emergencies can't wait. When a pipe bursts or a water heater fails, homeowners need help NOW. SpyderStack ensures you're there instantly, capturing high-value emergency calls."
          stats={[
            { label: "More Emergency Calls", value: "45%" },
            { label: "Average Revenue Saved", value: "$68k" },
            { label: "Response Time", value: "95 sec" },
          ]}
        />

        <IndustryFeatures title="Built for Plumbing Businesses" features={plumbingFeatures} />

        <CTASection />
      </div>
    </main>
  )
}
