import Link from "next/link"
import { Card } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import { ArrowRight } from "lucide-react"

interface IndustryCardProps {
  slug: string
  icon: LucideIcon
  title: string
  description: string
  stats: {
    leads: string
    revenue: string
    response: string
  }
}

export function IndustryCard({ slug, icon: Icon, title, description, stats }: IndustryCardProps) {
  return (
    <Link href={`/industries/${slug}`}>
      <Card className="glass p-8 border-border/40 hover:scale-[1.02] hover:glow-cyan transition-all duration-300 cursor-pointer group h-full">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:glow-cyan transition-all">
            <Icon className="w-7 h-7 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-2xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="font-display text-xl font-bold text-primary mb-1">+{stats.leads}</div>
            <div className="text-xs text-muted-foreground">More Leads</div>
          </div>
          <div className="text-center border-x border-border/40">
            <div className="font-display text-xl font-bold text-primary mb-1">{stats.revenue}</div>
            <div className="text-xs text-muted-foreground">Avg Saved/Yr</div>
          </div>
          <div className="text-center">
            <div className="font-display text-xl font-bold text-primary mb-1">{stats.response}</div>
            <div className="text-xs text-muted-foreground">Response Time</div>
          </div>
        </div>

        <div className="flex items-center justify-end text-sm text-primary group-hover:translate-x-2 transition-transform">
          Learn More
          <ArrowRight className="ml-1 w-4 h-4" />
        </div>
      </Card>
    </Link>
  )
}
