import { Header } from "@/components/header"
import { NetworkBackground } from "@/components/network-background"
import { IndustryHero } from "@/components/industry-hero"
import { IndustryFeatures } from "@/components/industry-features"
import { CTASection } from "@/components/cta-section"
import { Trees } from "lucide-react"

const landscapingFeatures = [
  {
    title: "Seasonal Project Capture",
    description: "Spring and summer are short. Capture every consultation request for patios, lawns, and hardscaping.",
  },
  {
    title: "Service Package Quotes",
    description: "Automated pricing for common services like lawn care, mulching, and seasonal cleanups.",
  },
  {
    title: "Project Visualization",
    description: "Send portfolio images and project examples automatically to excited homeowners.",
  },
  {
    title: "Maintenance Contracts",
    description: "Convert one-time projects into recurring maintenance agreements with automated follow-ups.",
  },
]

export default function LandscapingPage() {
  return (
    <main className="min-h-screen">
      <NetworkBackground />
      <Header />

      <div className="pt-32 pb-16 px-4">
        <IndustryHero
          icon={Trees}
          title="SpyderStack for Landscapers"
          description="Peak landscaping season is short. Every consultation request matters. SpyderStack helps you capture and convert leads when demand is highest, maximizing your busy season revenue."
          stats={[
            { label: "More Consultations", value: "38%" },
            { label: "Average Revenue Saved", value: "$42k" },
            { label: "Response Time", value: "110 sec" },
          ]}
        />

        <IndustryFeatures title="Built for Landscaping Businesses" features={landscapingFeatures} />

        <CTASection />
      </div>
    </main>
  )
}
