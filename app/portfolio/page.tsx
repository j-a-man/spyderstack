import { Header } from "@/components/header"
import { NetworkBackground } from "@/components/network-background"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Portfolio | SpyderStack",
  description: "See how SpyderStack is helping contractors capture more leads and grow their businesses",
}

const caseStudies = [
  {
    industry: "HVAC",
    company: "Arctic Air Solutions",
    location: "Phoenix, AZ",
    results: {
      missedCallsReduced: "94%",
      responseTime: "< 30 seconds",
      revenueIncrease: "$47,000/month",
    },
    quote:
      "Before SpyderStack, we were losing 15-20 calls per week during busy season. Now we capture every single lead. It's like having a full-time receptionist who never takes a break.",
    name: "Mike Rodriguez",
    role: "Owner",
  },
  {
    industry: "Roofing",
    company: "Summit Roofing Co.",
    location: "Denver, CO",
    results: {
      missedCallsReduced: "89%",
      responseTime: "< 45 seconds",
      revenueIncrease: "$63,000/month",
    },
    quote:
      "Storm season is our busiest time. SpyderStack helped us handle 3x more leads without hiring additional staff. The ROI was obvious within the first month.",
    name: "Sarah Chen",
    role: "Operations Manager",
  },
  {
    industry: "Plumbing",
    company: "FlowPro Plumbing",
    location: "Austin, TX",
    results: {
      missedCallsReduced: "92%",
      responseTime: "< 25 seconds",
      revenueIncrease: "$34,000/month",
    },
    quote:
      "Emergency calls come at all hours. SpyderStack responds instantly even when we're on another job. Our customers love the fast response, and we love the extra revenue.",
    name: "James Turner",
    role: "Founder",
  },
  {
    industry: "Landscaping",
    company: "GreenScape Designs",
    location: "Portland, OR",
    results: {
      missedCallsReduced: "91%",
      responseTime: "< 35 seconds",
      revenueIncrease: "$28,000/month",
    },
    quote:
      "We're often working outdoors where it's loud and phone calls get missed. SpyderStack ensures every inquiry gets an immediate response. Our booking rate has doubled.",
    name: "Amanda Foster",
    role: "Co-Owner",
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NetworkBackground />
      <Header />

      <main className="relative pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-balance">
              Real Results From <span className="text-primary">Real Contractors</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              See how contractors across industries are using SpyderStack to capture more leads and grow their
              businesses
            </p>
          </div>

          {/* Case Studies */}
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="glass p-8 md:p-12 rounded-xl">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <Badge variant="outline" className="text-primary border-primary">
                    {study.industry}
                  </Badge>
                  <h3 className="font-display text-2xl font-bold">{study.company}</h3>
                  <span className="text-muted-foreground">• {study.location}</span>
                </div>

                {/* Results Grid */}
                <div className="grid sm:grid-cols-3 gap-6 mb-8 p-6 bg-background/40 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">{study.results.missedCallsReduced}</div>
                    <div className="text-sm text-muted-foreground">Missed Calls Reduced</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">{study.results.responseTime}</div>
                    <div className="text-sm text-muted-foreground">Avg Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">{study.results.revenueIncrease}</div>
                    <div className="text-sm text-muted-foreground">Revenue Increase</div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="border-l-4 border-primary pl-6 mb-4">
                  <p className="text-lg text-muted-foreground italic mb-4">{study.quote}</p>
                  <footer className="text-sm">
                    <div className="font-semibold">{study.name}</div>
                    <div className="text-muted-foreground">{study.role}</div>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center glass p-12 rounded-xl">
            <h2 className="font-display text-3xl font-bold mb-4">Ready To See Similar Results?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Join hundreds of contractors who are capturing more leads with SpyderStack
            </p>
            <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity glow-cyan">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
