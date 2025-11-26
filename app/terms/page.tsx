"use client"

import { Header } from "@/components/header"
import { NetworkBackground } from "@/components/network-background"
import { Footer } from "@/components/footer"

export default function TermsPage() {
    return (
        <main className="relative min-h-screen bg-background selection:bg-primary selection:text-foreground">
            {/* Fixed Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <NetworkBackground />
            </div>

            <Header />

            {/* Hero Section */}
            <section className="relative z-10 pt-40 pb-20 px-6 border-b border-foreground/5 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_50%)] opacity-10" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                </div>

                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-sm font-bold tracking-widest uppercase text-foreground/80">
                            Legal Documentation
                        </span>
                    </div>

                    <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                        TERMS OF <span className="text-primary">SERVICE</span>
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        Last Updated: {new Date().toLocaleDateString()}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="relative z-10 py-24 bg-background">
                <div className="container mx-auto max-w-4xl px-6">
                    <div className="bg-foreground/5 border border-foreground/10 p-8 md:p-12 backdrop-blur-sm">
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p className="text-muted-foreground leading-relaxed mb-8">
                                Welcome to SpyderStack. By accessing or using our website and services, you agree to be bound by these Terms of Service.
                            </p>

                            <h3 className="text-2xl font-display font-bold text-foreground mb-4">1. Acceptance of Terms</h3>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.
                            </p>

                            <h3 className="text-2xl font-display font-bold text-foreground mb-4">2. Use License</h3>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Permission is granted to temporarily download one copy of the materials (information or software) on SpyderStack's website for personal, non-commercial transitory viewing only.
                            </p>

                            <h3 className="text-2xl font-display font-bold text-foreground mb-4">3. Disclaimer</h3>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                The materials on SpyderStack's website are provided on an 'as is' basis. SpyderStack makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                            </p>

                            <h3 className="text-2xl font-display font-bold text-foreground mb-4">4. Limitations</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                In no event shall SpyderStack or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SpyderStack's website.
                            </p>
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
