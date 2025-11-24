"use client"

import { Header } from "@/components/header"
import { NetworkBackground } from "@/components/network-background"
import { Footer } from "@/components/footer"

export default function CookiesPage() {
    return (
        <main className="relative min-h-screen bg-background selection:bg-primary selection:text-white">
            {/* Fixed Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <NetworkBackground />
            </div>

            <Header />

            {/* Hero Section */}
            <section className="relative z-10 pt-40 pb-20 px-6 border-b border-foreground/5 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_50%)] opacity-10" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                </div>

                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-sm font-bold tracking-widest uppercase text-foreground/80">
                            Legal Documentation
                        </span>
                    </div>

                    <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                        COOKIE <span className="text-primary">POLICY</span>
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
                                This Cookie Policy explains how SpyderStack uses cookies and similar technologies to recognize you when you visit our website.
                            </p>

                            <h3 className="text-2xl font-display font-bold text-foreground mb-4">1. What are cookies?</h3>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                            </p>

                            <h3 className="text-2xl font-display font-bold text-foreground mb-4">2. Why do we use cookies?</h3>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties.
                            </p>

                            <h3 className="text-2xl font-display font-bold text-foreground mb-4">3. How can I control cookies?</h3>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject.
                            </p>

                            <h3 className="text-2xl font-display font-bold text-foreground mb-4">4. Updates to this policy</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons.
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
