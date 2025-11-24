"use client"

import { Phone, Zap, MessageSquare, Calendar, CheckCircle2 } from "lucide-react"

export function FlowchartSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="glass rounded-2xl p-8 md:p-12">
          <h2 className="font-display text-3xl font-bold mb-12 text-center">The Complete Automation Flow</h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-start gap-6 relative">
              <div className="flex flex-col items-center gap-2 flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-destructive/20 flex items-center justify-center glow-orange">
                  <Phone className="w-8 h-8 text-destructive" />
                </div>
                <div className="w-0.5 h-20 bg-gradient-to-b from-destructive to-primary" />
              </div>
              <div className="glass rounded-lg p-6 flex-1 mt-2">
                <h3 className="font-display text-xl font-bold mb-2">1. Customer Calls</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A potential customer tries to reach your business. You're on a job site, with another client, or after
                  hours. The call goes unanswered.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-6 relative">
              <div className="flex flex-col items-center gap-2 flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center glow-cyan">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <div className="w-0.5 h-20 bg-gradient-to-b from-primary to-secondary" />
              </div>
              <div className="glass rounded-lg p-6 flex-1 mt-2">
                <h3 className="font-display text-xl font-bold mb-2">2. SpyderStack Catches It</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Within seconds, our system detects the missed call. The web activates instantly, gathering caller
                  information and triggering the automated response sequence.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-6 relative">
              <div className="flex flex-col items-center gap-2 flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center glow-cyan">
                  <MessageSquare className="w-8 h-8 text-secondary" />
                </div>
                <div className="w-0.5 h-20 bg-gradient-to-b from-secondary to-accent" />
              </div>
              <div className="glass rounded-lg p-6 flex-1 mt-2">
                <h3 className="font-display text-xl font-bold mb-2">3. AI Text Sent</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A personalized, professional text message is automatically sent to the customer. It acknowledges their
                  call, provides helpful information, and offers next steps.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-6 relative">
              <div className="flex flex-col items-center gap-2 flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center glow-cyan">
                  <Calendar className="w-8 h-8 text-accent" />
                </div>
                <div className="w-0.5 h-20 bg-gradient-to-b from-accent to-primary" />
              </div>
              <div className="glass rounded-lg p-6 flex-1 mt-2">
                <h3 className="font-display text-xl font-bold mb-2">4. Appointment Booked</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The customer responds and books an appointment through your automated system. No phone tag, no missed
                  opportunities.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex items-start gap-6 relative">
              <div className="flex flex-col items-center gap-2 flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center glow-cyan">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="glass rounded-lg p-6 flex-1 mt-2">
                <h3 className="font-display text-xl font-bold mb-2">5. Lead Captured</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The lead is securely stored in your system, automatically added to your calendar, and you're notified.
                  Zero manual work required.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 glass rounded-lg border border-primary/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-bold mb-2">Average Response Time: Under 2 Minutes</h4>
                <p className="text-sm text-muted-foreground">
                  While your competitors take hours or days to respond, SpyderStack engages your leads instantly,
                  dramatically increasing your conversion rate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
