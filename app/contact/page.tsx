"use client"

import type React from "react"

import { Header } from "@/components/header"
import { NetworkBackground } from "@/components/network-background"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Contact form submitted:", formData)
    // Form submission logic would go here
    alert("Thanks for reaching out! We'll get back to you within 24 hours.")
    setFormData({ name: "", email: "", phone: "", company: "", industry: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NetworkBackground />
      <Header />

      <main className="relative pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-balance">
              Let's <span className="text-primary">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Have questions? Want to see a demo? We're here to help you capture every lead.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass p-8 md:p-10 rounded-xl">
              <h2 className="font-display text-2xl font-bold mb-6">Send Us A Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                    className="bg-background/60"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="bg-background/60"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="bg-background/60"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                    className="bg-background/60"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-md bg-background/60 border border-input text-foreground"
                  >
                    <option value="">Select an industry</option>
                    <option value="hvac">HVAC</option>
                    <option value="roofing">Roofing</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="landscaping">Landscaping</option>
                    <option value="electrical">Electrical</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your business and how we can help..."
                    rows={5}
                    className="bg-background/60 resize-none"
                  />
                </div>

                <Button type="submit" className="w-full glow-cyan font-semibold">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="glass p-8 rounded-xl">
                <h3 className="font-display text-xl font-bold mb-6 text-primary">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 mt-1 text-primary">📧</div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a href="mailto:hello@spyderstack.com" className="text-muted-foreground hover:text-foreground">
                        hello@spyderstack.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 mt-1 text-primary">📞</div>
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <a href="tel:+15551234567" className="text-muted-foreground hover:text-foreground">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 mt-1 text-primary">⏰</div>
                    <div>
                      <div className="font-semibold mb-1">Hours</div>
                      <div className="text-muted-foreground">Mon-Fri: 8am - 6pm PST</div>
                      <div className="text-muted-foreground">Sat-Sun: 10am - 4pm PST</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="glass p-8 rounded-xl">
                <h3 className="font-display text-xl font-bold mb-6 text-primary">Quick Questions?</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="font-semibold mb-1">How quickly can I get set up?</div>
                    <div className="text-muted-foreground">
                      Most contractors are up and running in under 15 minutes.
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Do I need technical expertise?</div>
                    <div className="text-muted-foreground">
                      Not at all. SpyderStack is designed to be simple and intuitive.
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Can I try it before I buy?</div>
                    <div className="text-muted-foreground">
                      Yes! We offer a 14-day free trial with no credit card required.
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="glass p-8 rounded-xl bg-primary/5 border-primary/20">
                <h3 className="font-display text-xl font-bold mb-3">Ready to get started?</h3>
                <p className="text-muted-foreground mb-6">
                  See SpyderStack in action with a personalized demo for your business.
                </p>
                <Button className="w-full glow-cyan font-semibold">Schedule a Demo</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
