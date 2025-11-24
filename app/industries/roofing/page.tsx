import { Header } from "@/components/header"
import { NetworkBackground } from "@/components/network-background"
import { IndustryHero } from "@/components/industry-hero"
import { IndustryFeatures } from "@/components/industry-features"
import { CTASection } from "@/components/cta-section"
import { Home } from "lucide-react"

const roofingFeatures = [
  {
    title: "Storm Response System",
    description:
      "After major weather events, lead volume spikes. Automatically triage and respond to leak repairs vs. full replacements.",
  },
  {
    title: "Inspection Scheduling",
    description: "Free inspection requests get instant responses with available time slots, reducing no-shows.",
  },
  {
    title: "Insurance Claim Support",
    description: "Provide instant information about working with insurance companies to anxious homeowners.",
  },
  {
    title: "Follow-up Automation",
    description: "After inspections, automatically send estimates and financing options without manual work.",
  },
]

export default function RoofingPage() {
  return (
    <main className="min-h-screen">
      <NetworkBackground />
      <Header />

      <div className="pt-32 pb-16 px-4">
        <IndustryHero
          icon={Home}
          title="SpyderStack for Roofing Companies"
          description="Storm season brings a flood of opportunities. Capture every leak repair, roof replacement, and insurance claim before your competition. Be the first to respond, every time."
          stats={[
            { label: "More Qualified Leads", value: "52%" },
            { label: "Average Revenue Saved", value: "$95k" },
            { label: "Response Time", value: "85 sec" },
          ]}
        />

        <IndustryFeatures title="Built for Roofing Contractors" features={roofingFeatures} />

        <CTASection />
      </div>
    </main>
  )
}
