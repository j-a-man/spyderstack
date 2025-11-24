import { Header } from "@/components/header"
import { NetworkBackground } from "@/components/network-background"
import { HeroSection } from "@/components/hero-section"
import { TrapVisualization } from "@/components/trap-visualization"
import { ServicesGrid } from "@/components/services-grid"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <NetworkBackground />
      <Header />

      <div className="pt-16">
        <HeroSection />
        <TrapVisualization />
        <ServicesGrid />
        <CTASection />
      </div>
    </main>
  )
}
