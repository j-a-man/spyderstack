import { Header } from "@/components/header"
import { NetworkBackground } from "@/components/network-background"

export const metadata = {
  title: "About Us | SpyderStack",
  description: "Learn about SpyderStack's mission to help contractors never miss another lead",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NetworkBackground />
      <Header />

      <main className="relative pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-balance">
              Building The <span className="text-primary">Future</span> Of Contractor Tech
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We're on a mission to ensure no contractor ever loses a lead again
            </p>
          </div>

          {/* Story Section */}
          <div className="glass p-8 md:p-12 rounded-xl mb-12">
            <h2 className="font-display text-3xl font-bold mb-6 text-primary">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                SpyderStack was born from a simple observation: contractors are some of the hardest working people in
                America, yet they're losing thousands of dollars every month to missed phone calls.
              </p>
              <p>
                While they're up on roofs, under sinks, or installing HVAC systems, potential customers are calling and
                getting voicemail. By the time the contractor finishes the job and checks their phone, those leads have
                already hired someone else.
              </p>
              <p>
                We knew there had to be a better way. So we built SpyderStack—an intelligent automation system that
                catches every lead, responds instantly, and turns missed calls into booked jobs.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass p-8 rounded-xl">
              <h2 className="font-display text-2xl font-bold mb-4 text-primary">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower contractors with cutting-edge automation technology that captures every opportunity, so they
                can focus on what they do best—delivering exceptional service.
              </p>
            </div>
            <div className="glass p-8 rounded-xl">
              <h2 className="font-display text-2xl font-bold mb-4 text-primary">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                A world where every contractor has enterprise-level technology at their fingertips, leveling the playing
                field and helping small businesses compete with the big players.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="glass p-8 md:p-12 rounded-xl">
            <h2 className="font-display text-3xl font-bold mb-8 text-primary">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">Reliability</h3>
                <p className="text-muted-foreground">
                  Just like the contractors we serve, we're built to last. Our systems are rock-solid and always on.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-3">Simplicity</h3>
                <p className="text-muted-foreground">
                  Complex problems don't need complex solutions. We make powerful technology simple to use.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-3">Results</h3>
                <p className="text-muted-foreground">
                  We measure our success by your success. More leads caught, more jobs booked, more revenue earned.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
