"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { NetworkBackground } from "@/components/network-background"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Clock, ArrowRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookingCalendar } from "@/components/booking-calendar"

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
    alert("Thanks for reaching out! We'll get back to you within 24 hours.")
    setFormData({ name: "", email: "", phone: "", company: "", industry: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <main className="relative min-h-screen bg-black selection:bg-primary selection:text-white">
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <NetworkBackground />
      </div>

      <Header />

      {/* 1. HERO SECTION (Manifesto Style) */}
      <section className="relative z-10 pt-40 pb-20 px-6 border-b border-white/5 overflow-hidden">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_50%)] opacity-10" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        <div className="container mx-auto max-w-7xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-bold tracking-widest uppercase text-white/80">
              Communications Open
            </span>
          </div>

          <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            INITIATE <span className="text-primary">CONTACT</span>.
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Ready to deploy your infrastructure? Our engineering team is standing by to architect your solution.
          </p>
        </div>
      </section>

      {/* 2. CONTACT GRID */}
      <section className="relative z-10 py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-16">

            {/* LEFT: Contact Form (Technical Panel) */}
            <div className="lg:col-span-7">
              <Tabs defaultValue="booking" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/5 border border-white/10 h-14 p-1">
                  <TabsTrigger value="booking" className="h-full data-[state=active]:bg-primary data-[state=active]:text-white font-display tracking-wide uppercase font-bold text-muted-foreground">Book Strategy Call</TabsTrigger>
                  <TabsTrigger value="message" className="h-full data-[state=active]:bg-primary data-[state=active]:text-white font-display tracking-wide uppercase font-bold text-muted-foreground">Send Message</TabsTrigger>
                </TabsList>

                <TabsContent value="message" className="mt-0">
                  <div className="bg-white/5 border border-white/10 p-8 md:p-12 relative overflow-hidden group transition-all hover:border-primary/30">
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                    <h2 className="font-display text-3xl font-bold text-white mb-8 tracking-wide">TRANSMISSION FORM</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Smith"
                            className="bg-black/40 border-white/10 h-12 focus:border-primary rounded-none text-white placeholder:text-white/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com"
                            className="bg-black/40 border-white/10 h-12 focus:border-primary rounded-none text-white placeholder:text-white/20"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Phone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(555) 123-4567"
                            className="bg-black/40 border-white/10 h-12 focus:border-primary rounded-none text-white placeholder:text-white/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Company</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your Company Name"
                            className="bg-black/40 border-white/10 h-12 focus:border-primary rounded-none text-white placeholder:text-white/20"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="industry" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Industry</Label>
                        <select
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          className="w-full px-3 h-12 bg-black/40 border border-white/10 text-white focus:border-primary focus:outline-none rounded-none appearance-none"
                        >
                          <option value="" className="bg-black text-muted-foreground">Select an industry</option>
                          <option value="hvac" className="bg-black">HVAC</option>
                          <option value="roofing" className="bg-black">Roofing</option>
                          <option value="plumbing" className="bg-black">Plumbing</option>
                          <option value="landscaping" className="bg-black">Landscaping</option>
                          <option value="electrical" className="bg-black">Electrical</option>
                          <option value="other" className="bg-black">Other</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Tell us about your business infrastructure..."
                          rows={5}
                          className="bg-black/40 border-white/10 focus:border-primary rounded-none resize-none text-white placeholder:text-white/20"
                        />
                      </div>

                      <Button type="submit" className="w-full h-14 text-base rounded-none bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold shadow-lg hover:shadow-[0_0_30px_-5px_var(--primary)] transition-all">
                        Send Message <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </form>
                  </div>
                </TabsContent>

                <TabsContent value="booking" className="mt-0">
                  <BookingCalendar />
                </TabsContent>
              </Tabs>
            </div>

            {/* RIGHT: Info & FAQ */}
            <div className="lg:col-span-5 space-y-12">

              {/* Direct Line */}
              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 tracking-wide">DIRECT LINE</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Email</div>
                      <a href="mailto:hello@spyderstack.com" className="text-lg text-white hover:text-primary transition-colors font-display font-bold tracking-wide">
                        hello@spyderstack.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Phone</div>
                      <a href="tel:+15551234567" className="text-lg text-white hover:text-primary transition-colors font-display font-bold tracking-wide">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Operations</div>
                      <div className="text-white font-bold font-display tracking-wide">Mon-Fri: 8am - 6pm PST</div>
                      <div className="text-muted-foreground text-sm mt-1">Sat-Sun: 10am - 4pm PST</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Panel */}
              <div className="bg-white/5 border border-white/10 p-8 hover:border-primary/30 transition-colors duration-500">
                <h3 className="font-display text-xl font-bold text-white mb-6 tracking-wide">SYSTEM FAQ</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">How fast is deployment?</div>
                    <div className="text-muted-foreground text-sm leading-relaxed">
                      Most contractors are fully integrated and capturing leads in under 15 minutes.
                    </div>
                  </div>
                  <div className="w-full h-px bg-white/10" />
                  <div>
                    <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Is it complex to operate?</div>
                    <div className="text-muted-foreground text-sm leading-relaxed">
                      Zero technical skill required. The infrastructure runs autonomously in the background.
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <div className="relative z-20">
        <Footer />
      </div>
    </main>
  )
}