import { Card } from "@/components/ui/card"
import { Brain, Gauge, Lock, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description:
      "Our AI learns from your business patterns and customer interactions to provide increasingly personalized responses over time.",
    benefits: ["Natural language processing", "Context-aware responses", "Learns your business voice"],
  },
  {
    icon: Gauge,
    title: "Lightning Fast",
    description:
      "Sub-2-minute response times ensure you never lose a lead to a faster competitor. Speed wins in contracting.",
    benefits: ["Real-time monitoring", "Instant trigger activation", "99.9% uptime guarantee"],
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "Bank-level encryption protects your customer data and business information. HIPAA and SOC 2 compliant.",
    benefits: ["End-to-end encryption", "Secure data storage", "Regular security audits"],
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track every interaction, measure ROI, and optimize your automation with detailed analytics and reporting.",
    benefits: ["Real-time metrics", "Conversion tracking", "Custom reports"],
  },
]

export function FeatureDetails() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Built for <span className="text-primary">Contractors</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every feature designed with the unique needs of contracting businesses in mind
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="glass p-8 border-border/40">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
