"use client"

import { Header } from "@/components/header"
import { NetworkBackground } from "@/components/network-background"
import { ParticleAnimation } from "@/components/particle-animation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export default function VSLPage() {
    return (
        <main className="relative min-h-screen bg-background selection:bg-primary selection:text-foreground">
            {/* Fixed Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <NetworkBackground />
            </div>

            <Header />

            {/* 1. HERO LAYER (Sticky Base Z-0) - Wrapped in z-10 to match Portfolio behavior */}
            <div className="relative z-10">
                <section className="sticky top-0 z-0 min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden bg-background">
                    <ParticleAnimation />

                    <div className="container mx-auto max-w-7xl text-center relative z-10 px-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-sm font-bold tracking-widest uppercase text-foreground/80">
                                Private Access
                            </span>
                        </div>

                        <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                            THE <span className="text-primary">BLUEPRINT</span>.
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                            Discover how our digital infrastructure creates a dominant market position for your business.
                        </p>
                    </div>
                </section>
            </div>

            {/* 2. CONTENT LAYER (Slides Over Hero - Z-20) */}
            <div className="relative z-20 bg-background border-t border-foreground/10 shadow-[0_-50px_100px_-20px_rgba(0,0,0,0.5)]">

                <div className="h-[10vh] w-full pointer-events-none" />

                <div className="container mx-auto max-w-5xl px-6 pb-32 pt-12">

                    {/* VIDEO CONTAINER */}
                    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-foreground/10 bg-black/50 backdrop-blur-sm group">
                        {/* Glossy Overlay Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none z-20" />

                        <div className="relative w-full aspect-video z-10">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/kCGQY4GEKKg?si=4svQk4Kgqa18UZ8p"
                                title="SpyderStack VSL"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            ></iframe>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        </main>
    )
}
