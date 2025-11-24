import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="glass rounded-2xl p-12 md:p-16 text-center relative overflow-hidden glow-cyan">
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-balance">
              Ready to Build Your <span className="text-primary">Lead-Catching Web?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of contractors who never miss another opportunity. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="glow-cyan text-base font-semibold group">
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="glass text-base font-semibold bg-transparent">
                Schedule Demo
              </Button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  )
}
