import { Header } from "@/components/header"
import { NetworkBackground } from "@/components/network-background"
import { ROICalculator } from "@/components/roi-calculator"

export default function ROICalculatorPage() {
  return (
    <main className="min-h-screen">
      <NetworkBackground />
      <Header />

      <div className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center mb-12">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Calculate Your <span className="text-primary">Lost Revenue</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See exactly how much money you're losing to missed calls and slow responses. The numbers might surprise you.
          </p>
        </div>

        <ROICalculator />
      </div>
    </main>
  )
}
