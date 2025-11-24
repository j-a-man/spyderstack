import { Header } from "@/components/header"
import { NetworkBackground } from "@/components/network-background"
import { IndustryHero } from "@/components/industry-hero"
import { IndustryFeatures } from "@/components/industry-features"
import { CTASection } from "@/components/cta-section"
import { Wind } from "lucide-react"

const hvacFeatures = [
  {
    title: "24/7 Emergency Response",
    description: "AC breakdowns and heating failures happen at any time. SpyderStack responds instantly, even at 2 AM.",
  },
  {
    title: "Seasonal Lead Surge",
    description:
      "Handle peak season demand without missing calls. Automatically qualify and prioritize emergency vs. maintenance requests.",
  },
  {
    title: "Service Agreement Renewals",
    description: "Automated reminders for maintenance agreements keep customers engaged year-round.",
  },
  {
    title: "Review Collection",
    description: "After every successful repair, automatically request reviews to build your reputation.",
  },
]

export default function HVACPage() {
  return (
    <main className="min-h-screen">
      <NetworkBackground />
      <Header />

      <div className="pt-32 pb-16 px-4">
        <IndustryHero
          icon={Wind}
          title="SpyderStack for HVAC Contractors"
          description="Emergency HVAC calls can't wait. Every missed call is a customer calling your competitor. SpyderStack ensures you never lose another emergency repair or installation opportunity."
          stats={[
            { label: "More Emergency Leads", value: "40%" },
            { label: "Average Revenue Saved", value: "$75k" },
            { label: "Response Time", value: "90 sec" },
          ]}
        />

        <IndustryFeatures title="Built for HVAC Businesses" features={hvacFeatures} />

        <CTASection />
      </div>
    </main>
  )
}
