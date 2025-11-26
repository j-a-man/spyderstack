"use client"

import { Header } from "@/components/header"
import { NetworkBackground } from "@/components/network-background"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
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
                        PRIVACY <span className="text-primary">POLICY</span>
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
                                At SpyderStack, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                            </p>

                            <h3 className="text-2xl font-display font-bold text-foreground mb-4">1. Information We Collect</h3>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, phone number, and company information.
                            </p>

                            <h3 className="text-2xl font-display font-bold text-foreground mb-4">2. How We Use Your Information</h3>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to monitor and analyze trends and usage.
                            </p>

                            <h3 className="text-2xl font-display font-bold text-foreground mb-4">3. Data Security</h3>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.
                            </p>

                            <h3 className="text-2xl font-display font-bold text-foreground mb-4">4. Contact Us</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                If you have any questions about this Privacy Policy, please contact us at hello@spyderstack.com.
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
