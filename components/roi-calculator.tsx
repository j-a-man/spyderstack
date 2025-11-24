"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { TrendingUp, DollarSign, Phone, CheckCircle2 } from "lucide-react"

export function ROICalculator() {
  const [missedCalls, setMissedCalls] = useState(10)
  const [avgJobValue, setAvgJobValue] = useState(2500)
  const [conversionRate, setConversionRate] = useState(30)

  // Calculations
  const missedCallsPerYear = missedCalls * 52
  const potentialLeads = missedCallsPerYear * (conversionRate / 100)
  const lostRevenue = potentialLeads * avgJobValue
  const withSpyderStack = lostRevenue * 0.85 // 85% recovery rate
  const monthlySavings = withSpyderStack / 12
  const spyderStackCost = 299 // Monthly cost
  const netMonthlySavings = monthlySavings - spyderStackCost
  const annualNetSavings = netMonthlySavings * 12

  return (
    <div className="container mx-auto max-w-6xl">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Calculator Inputs */}
        <Card className="glass p-8 border-border/40">
          <h2 className="font-display text-2xl font-bold mb-6">Your Business Info</h2>

          <div className="space-y-8">
            {/* Missed Calls */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <Label htmlFor="missed-calls" className="text-base font-semibold">
                  Missed Calls Per Week
                </Label>
                <span className="font-display text-2xl font-bold text-primary">{missedCalls}</span>
              </div>
              <Slider
                id="missed-calls"
                min={1}
                max={50}
                step={1}
                value={[missedCalls]}
                onValueChange={(value) => setMissedCalls(value[0])}
                className="mb-2"
              />
              <p className="text-xs text-muted-foreground">Industry average: 8-15 calls per week</p>
            </div>

            {/* Average Job Value */}
            <div>
              <Label htmlFor="job-value" className="text-base font-semibold mb-3 block">
                Average Job Value
              </Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="job-value"
                  type="number"
                  value={avgJobValue}
                  onChange={(e) => setAvgJobValue(Number(e.target.value))}
                  className="pl-10 text-lg font-semibold"
                  min={0}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">HVAC: $3,000 | Roofing: $8,000 | Plumbing: $1,500</p>
            </div>

            {/* Conversion Rate */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <Label htmlFor="conversion" className="text-base font-semibold">
                  Lead Conversion Rate
                </Label>
                <span className="font-display text-2xl font-bold text-primary">{conversionRate}%</span>
              </div>
              <Slider
                id="conversion"
                min={10}
                max={80}
                step={5}
                value={[conversionRate]}
                onValueChange={(value) => setConversionRate(value[0])}
                className="mb-2"
              />
              <p className="text-xs text-muted-foreground">What % of leads typically become paying customers?</p>
            </div>
          </div>
        </Card>

        {/* Results */}
        <div className="space-y-6">
          {/* Lost Revenue Card */}
          <Card className="glass p-8 border-destructive/40 glow-orange">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-destructive/20 flex items-center justify-center">
                <Phone className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-destructive">Money Lost Per Year</h3>
                <p className="text-xs text-muted-foreground">Without automation</p>
              </div>
            </div>
            <div className="font-display text-5xl font-bold text-destructive mb-2">${lostRevenue.toLocaleString()}</div>
            <p className="text-sm text-muted-foreground">
              {missedCallsPerYear.toLocaleString()} missed calls × {conversionRate}% conversion × $
              {avgJobValue.toLocaleString()} avg job
            </p>
          </Card>

          {/* Revenue Saved Card */}
          <Card className="glass p-8 border-primary/40 glow-cyan">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-primary">Revenue Recovered with SpyderStack</h3>
                <p className="text-xs text-muted-foreground">85% of lost opportunities captured</p>
              </div>
            </div>
            <div className="font-display text-5xl font-bold text-primary mb-2">${withSpyderStack.toLocaleString()}</div>
            <p className="text-sm text-muted-foreground">
              That's ${monthlySavings.toLocaleString()} per month in recovered revenue
            </p>
          </Card>

          {/* Net Savings Card */}
          <Card className="glass p-8 border-border/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">Your Net Annual Savings</h3>
                  <p className="text-xs text-muted-foreground">After SpyderStack cost (${spyderStackCost}/mo)</p>
                </div>
              </div>
              <div className="font-display text-5xl font-bold mb-2">${annualNetSavings.toLocaleString()}</div>
              <div className="flex items-center gap-2 mt-4 p-4 bg-primary/10 rounded-lg">
                <div className="text-sm">
                  <span className="font-semibold">ROI:</span>{" "}
                  <span className="text-primary font-bold">
                    {((annualNetSavings / (spyderStackCost * 12)) * 100).toFixed(0)}%
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <Button size="lg" className="w-full glow-cyan text-base font-semibold">
            Start Saving Today
          </Button>
        </div>
      </div>

      {/* Additional Context */}
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <Card className="glass p-6 border-border/40 text-center">
          <div className="font-display text-3xl font-bold text-primary mb-2">98%</div>
          <p className="text-sm text-muted-foreground">Of missed calls get an instant text response</p>
        </Card>
        <Card className="glass p-6 border-border/40 text-center">
          <div className="font-display text-3xl font-bold text-primary mb-2">85%</div>
          <p className="text-sm text-muted-foreground">Recovery rate of leads that would have been lost</p>
        </Card>
        <Card className="glass p-6 border-border/40 text-center">
          <div className="font-display text-3xl font-bold text-primary mb-2">2min</div>
          <p className="text-sm text-muted-foreground">Average response time vs. hours for manual follow-up</p>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          * Calculations based on industry averages and actual SpyderStack customer data. Individual results may vary.
        </p>
      </div>
    </div>
  )
}
