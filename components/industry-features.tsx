import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

interface IndustryFeaturesProps {
  title: string
  features: Array<{
    title: string
    description: string
  }>
}

export function IndustryFeatures({ title, features }: IndustryFeaturesProps) {
  return (
    <section className="container mx-auto max-w-5xl mb-16">
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">{title}</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="glass p-6 border-border/40">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
