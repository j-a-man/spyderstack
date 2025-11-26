"use client"

import { Header } from "@/components/header"
import { NetworkBackground } from "@/components/network-background"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, Code, Briefcase, ArrowRight } from "lucide-react"
import Link from "next/link"

const positions = [
    {
        title: "Sales Development",
        department: "Outreach Protocol",
        type: "Full-Time",
        icon: Phone,
        description: "Drive our growth engine. You will lead cold call outreach, manage pipeline velocity, and secure new territory for the SpyderStack infrastructure.",
    },
    {
        title: "Web Architect",
        department: "Engineering",
        type: "Contract / Full-Time",
        icon: Code,
        description: "Build the digital backbone. You will construct high-performance lead capture systems and optimize the frontend architecture for our contractor clients.",
    },
    {
        title: "Operations Manager",
        department: "Command",
        type: "Full-Time",
        icon: Briefcase,
        description: "Oversee deployment. You will manage team workflows, ensure system reliability, and maintain operational efficiency across all active sectors.",
    }
]

// 1. HERO SECTION
function CareersHero() {
    return (
        <section className="relative z-10 pt-40 pb-20 px-6 border-b border-foreground/5 overflow-hidden bg-background">
            {/* Technical Grid Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_40%)] opacity-10" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container mx-auto max-w-7xl text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-bold tracking-widest uppercase text-foreground/80">
                        Recruitment Active
                    </span>
                </div>

                <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-foreground mb-8 tracking-tighter leading-[0.85] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                    JOIN THE <br />
                    <span className="text-primary">INFRASTRUCTURE.</span>
                </h1>

                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    We don't just build websites. We build the operating systems that power the contractor economy.
                    Are you ready to build?
                </p>
            </div>
        </section>
    )
}

// 2. OPEN POSITIONS
function OpenPositions() {
    return (
        <section className="relative z-10 py-24 bg-background">
            <div className="container mx-auto max-w-7xl px-6">
                <div className="mb-16">
                    <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                        ACTIVE <span className="text-primary">ROLES</span>
                    </h2>
                    <div className="h-1 w-24 bg-primary shadow-[0_0_15px_var(--primary)]" />
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {positions.map((job, index) => (
                        <div
                            key={index}
                            className="group relative bg-foreground/5 border border-foreground/10 p-8 md:p-10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 flex flex-col md:flex-row items-start md:items-center gap-8"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Icon */}
                            <div className="relative z-10 w-16 h-16 bg-black/40 border border-foreground/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                                <job.icon className="w-8 h-8 text-foreground group-hover:text-primary transition-colors" />
                            </div>

                            {/* Info */}
                            <div className="relative z-10 flex-1">
                                <div className="flex flex-wrap items-center gap-4 mb-2">
                                    <h3 className="font-display text-3xl font-bold text-foreground">{job.title}</h3>
                                    <span className="px-3 py-1 rounded-full border border-foreground/10 bg-foreground/5 text-[10px] font-bold uppercase tracking-widest text-primary">
                                        {job.type}
                                    </span>
                                </div>
                                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">{job.department}</div>
                                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                                    {job.description}
                                </p>
                            </div>

                            {/* Action */}
                            <div className="relative z-10 mt-4 md:mt-0">
                                <Link href="/contact">
                                    <Button variant="outline" className="h-12 px-8 rounded-none border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary uppercase tracking-widest font-bold transition-all group-hover:shadow-[0_0_20px_-5px_var(--primary)]">
                                        Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default function CareersPage() {
    return (
        <main className="relative min-h-screen bg-background selection:bg-primary selection:text-foreground">
            {/* Fixed Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <NetworkBackground />
            </div>

            <Header />

            <CareersHero />
            <OpenPositions />

            <div className="relative z-20">
                <Footer />
            </div>
        </main>
    )
}
