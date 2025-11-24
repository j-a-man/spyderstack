import type { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface IndustryHeroProps {
  icon: LucideIcon
  title: string
  description: string
  stats: Array<{ label: string; value: string }>
}

export function IndustryHero({ icon: Icon, title, description, stats }: IndustryHeroProps) {
  return (
    <section className="container mx-auto max-w-5xl mb-16">
      <div className="glass rounded-2xl p-8 md:p-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center glow-cyan">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-balance">{title}</h1>
        </div>

        <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl">{description}</p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <Button size="lg" className="glow-cyan text-base font-semibold group">
            Start Free Trial
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="glass text-base font-semibold bg-transparent">
            See It In Action
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/40">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
