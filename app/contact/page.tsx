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
import { Mail, Phone, Clock, ArrowRight, MapPin } from "lucide-react"

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
    // console.log("[v0] Contact form submitted:", formData)
    alert("Transmission received. Our engineers will respond within 24 hours.")
    setFormData({ name: "", email: "", phone: "", company: "", industry: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <main className="relative min-h-screen bg-background selection:bg-primary selection:text-foreground">
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <NetworkBackground />
      </div>

      <Header />

      {/* 1. HERO LAYER (Sticky Base Z-0) */}
      <section className="sticky top-0 z-0 min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_50%)] opacity-10" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        <div className="container mx-auto max-w-7xl text-center relative z-10 px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-bold tracking-widest uppercase text-foreground/80">
              Communications Open
            </span>
          </div>

          <h1 className="font-display text-7xl md:text-9xl font-bold text-foreground mb-8 tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            INITIATE <br /> <span className="text-primary">CONTACT</span>.
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Ready to deploy your infrastructure? Our engineering team is standing by to architect your solution.
          </p>
        </div>
      </section>

      {/* 2. CONTENT LAYER (Slides Over Hero - Z-10) */}
      <div className="relative z-10 bg-background border-t border-foreground/10 shadow-[0_-50px_100px_-20px_rgba(0,0,0,0.5)]">

        {/* Scroll Buffer to allow Hero visibility */}
        <div className="h-[10vh] w-full pointer-events-none" />

        <div className="container mx-auto max-w-7xl px-6 pb-32 pt-12">
          <div className="grid lg:grid-cols-12 gap-16">

            {/* LEFT: Contact Form (Technical Panel) */}
            <div className="lg:col-span-7">
              <div className="bg-foreground/5 border border-foreground/10 p-8 md:p-12 relative overflow-hidden group transition-all hover:border-primary/30 backdrop-blur-sm">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <h2 className="font-display text-3xl font-bold text-foreground mb-8 tracking-wide flex items-center gap-3">
                  <span className="text-primary text-lg">01.</span> TRANSMISSION FORM
                </h2>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2 group/input">
                      <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover/input:text-primary transition-colors">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="bg-background/40 border-foreground/10 h-14 focus:border-primary rounded-none text-white placeholder:text-foreground/20 transition-all duration-300 focus:bg-foreground/5"
                      />
                    </div>
                    <div className="space-y-2 group/input">
                      <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover/input:text-primary transition-colors">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="bg-background/40 border-foreground/10 h-14 focus:border-primary rounded-none text-white placeholder:text-foreground/20 transition-all duration-300 focus:bg-foreground/5"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2 group/input">
                      <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover/input:text-primary transition-colors">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                        className="bg-background/40 border-foreground/10 h-14 focus:border-primary rounded-none text-white placeholder:text-foreground/20 transition-all duration-300 focus:bg-foreground/5"
                      />
                    </div>
                    <div className="space-y-2 group/input">
                      <Label htmlFor="company" className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover/input:text-primary transition-colors">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Name"
                        className="bg-background/40 border-foreground/10 h-14 focus:border-primary rounded-none text-white placeholder:text-foreground/20 transition-all duration-300 focus:bg-foreground/5"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 group/input">
                    <Label htmlFor="industry" className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover/input:text-primary transition-colors">Industry</Label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-3 h-14 bg-background/40 border border-foreground/10 text-white focus:border-primary focus:outline-none rounded-none appearance-none transition-all duration-300 focus:bg-foreground/5"
                    >
                      <option value="" className="bg-background text-muted-foreground">Select an industry</option>
                      <option value="hvac" className="bg-background">HVAC</option>
                      <option value="roofing" className="bg-background">Roofing</option>
                      <option value="plumbing" className="bg-background">Plumbing</option>
                      <option value="landscaping" className="bg-background">Landscaping</option>
                      <option value="electrical" className="bg-background">Electrical</option>
                      <option value="other" className="bg-background">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2 group/input">
                    <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover/input:text-primary transition-colors">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your business infrastructure..."
                      rows={5}
                      className="bg-background/40 border-foreground/10 focus:border-primary rounded-none resize-none text-white placeholder:text-foreground/20 transition-all duration-300 focus:bg-foreground/5 p-4"
                    />
                  </div>

                  <Button type="submit" className="w-full h-16 text-lg rounded-none bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold shadow-lg hover:shadow-[0_0_30px_-5px_var(--primary)] transition-all duration-300 hover:-translate-y-1">
                    Send Message <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </div>
            </div>

            {/* RIGHT: Info & FAQ */}
            <div className="lg:col-span-5 space-y-12">

              {/* Direct Line */}
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-8 border-b border-foreground/10 pb-4 tracking-wide flex items-center gap-3">
                  <span className="text-primary text-lg">02.</span> DIRECT LINE
                </h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-6 group cursor-default">
                    <div className="w-14 h-14 bg-white/5 flex items-center justify-center border border-foreground/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1 group-hover:text-white transition-colors">Email</div>
                      <a href="mailto:hello@spyderstack.com" className="text-xl text-white hover:text-primary transition-colors font-display font-bold tracking-wide block">
                        hello@spyderstack.com
                      </a>
                      <span className="text-sm text-muted-foreground/60">General Inquiries</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group cursor-default">
                    <div className="w-14 h-14 bg-white/5 flex items-center justify-center border border-foreground/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1 group-hover:text-white transition-colors">Phone</div>
                      <a href="tel:+15551234567" className="text-xl text-white hover:text-primary transition-colors font-display font-bold tracking-wide block">
                        (555) 123-4567
                      </a>
                      <span className="text-sm text-muted-foreground/60">Mon-Fri 9am-5pm EST</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group cursor-default">
                    <div className="w-14 h-14 bg-white/5 flex items-center justify-center border border-foreground/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1 group-hover:text-white transition-colors">Headquarters</div>
                      <div className="text-white font-bold font-display tracking-wide text-lg">
                        San Francisco, CA
                      </div>
                      <div className="text-muted-foreground text-sm">Serving Contractors Nationwide</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Panel */}
              <div className="bg-foreground/5 border border-foreground/10 p-8 hover:border-primary/30 transition-colors duration-500">
                <h3 className="font-display text-xl font-bold text-foreground mb-6 tracking-wide flex items-center gap-2">
                  <span className="text-primary text-sm">03.</span> SYSTEM FAQ
                </h3>
                <div className="space-y-6">
                  <div className="group">
                    <div className="text-sm font-bold text-foreground mb-2 uppercase tracking-wide group-hover:text-primary transition-colors">How fast is deployment?</div>
                    <div className="text-muted-foreground text-sm leading-relaxed border-l-2 border-foreground/10 pl-4 group-hover:border-primary transition-colors">
                      Most contractors are fully integrated and capturing leads in under 15 minutes.
                    </div>
                  </div>
                  <div className="w-full h-px bg-white/10" />
                  <div className="group">
                    <div className="text-sm font-bold text-foreground mb-2 uppercase tracking-wide group-hover:text-primary transition-colors">Is it complex to operate?</div>
                    <div className="text-muted-foreground text-sm leading-relaxed border-l-2 border-foreground/10 pl-4 group-hover:border-primary transition-colors">
                      Zero technical skill required. The infrastructure runs autonomously in the background.
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Footer (Flows naturally after content) */}
        <Footer />
      </div>
    </main>
  )
}
