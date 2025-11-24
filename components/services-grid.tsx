import { Globe, MessageSquareText, Star, FileText } from "lucide-react"
import { Card } from "@/components/ui/card"

const services = [
  {
    icon: Globe,
    title: "Web Design",
    description: "High-conversion landing pages built specifically for contractors. Mobile-optimized and fast.",
    features: ["Mobile-First Design", "SEO Optimized", "Lightning Fast"],
  },
  {
    icon: MessageSquareText,
    title: "The Auto-Responder",
    description: "Never miss another lead. Instant text-back automation when you miss a call.",
    features: ["Instant Response", "AI-Powered", "24/7 Active"],
  },
  {
    icon: Star,
    title: "The Reputation Engine",
    description: "Automatically request Google reviews from satisfied customers. Build trust effortlessly.",
    features: ["Auto Review Requests", "Reputation Tracking", "Response Templates"],
  },
  {
    icon: FileText,
    title: "The Quote Bot",
    description: "Automated estimation forms that qualify leads and provide instant ballpark quotes.",
    features: ["Smart Forms", "Lead Qualification", "Instant Estimates"],
  },
]

export function ServicesGrid() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-primary">Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to automate your contractor business and never lose another lead
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="glass p-8 hover:scale-[1.02] transition-all duration-300 group cursor-pointer border-border/40"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:glow-cyan transition-all">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
