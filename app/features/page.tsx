import { Header } from "@/components/header"
import { NetworkBackground } from "@/components/network-background"
import { FlowchartSection } from "@/components/flowchart-section"
import { FeatureDetails } from "@/components/feature-details"
import { CTASection } from "@/components/cta-section"

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <NetworkBackground />
      <Header />

      <div className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            The <span className="text-primary">Anatomy</span> of SpyderStack
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See exactly how our automation web captures and converts every lead that comes your way
          </p>
        </div>

        <FlowchartSection />
        <FeatureDetails />
        <CTASection />
      </div>
    </main>
  )
}
