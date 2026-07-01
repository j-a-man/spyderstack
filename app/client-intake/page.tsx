"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Header } from "@/components/header"
import { NetworkBackground } from "@/components/network-background"
import { ParticleAnimation } from "@/components/particle-animation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Phone, Clock, ArrowRight, Upload, Info, Check } from "lucide-react"

export default function ClientIntakePage() {
    // State for all form fields
    const [formData, setFormData] = useState({
        businessName: "",
        fullName: "",
        businessPhone: "",
        businessEmail: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        instagram: "",
        facebook: "",
        bbb: "",
        tiktok: "",
        serviceCategory: "",
        servicesOffered: "",
        aboutUs: "",
        businessHours: "",
        areasServed: "",
        standOutReasons: "",
        needLogo: "No", // Default
    })

    const [logoFile, setLogoFile] = useState<File | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [errors, setErrors] = useState<Record<string, string>>({})
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleReset = () => {
        setFormData({
            businessName: "",
            fullName: "",
            businessPhone: "",
            businessEmail: "",
            address: "",
            city: "",
            state: "",
            postalCode: "",
            instagram: "",
            facebook: "",
            bbb: "",
            tiktok: "",
            serviceCategory: "",
            servicesOffered: "",
            aboutUs: "",
            businessHours: "",
            areasServed: "",
            standOutReasons: "",
            needLogo: "No",
        })
        setLogoFile(null)
        if (fileInputRef.current) fileInputRef.current.value = ""
        setErrors({})
        setIsSubmitted(false)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = e.target.name
        setFormData((prev) => ({ ...prev, [name]: e.target.value }))
        // Clear error as the user types
        if (errors[name]) {
            setErrors((prev) => {
                const updated = { ...prev }
                delete updated[name]
                return updated
            })
        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setLogoFile(e.target.files[0])
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Custom validation check
        const newErrors: Record<string, string> = {}
        if (!formData.businessName.trim()) newErrors.businessName = "Business name is required"
        if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
        if (!formData.businessPhone.trim()) newErrors.businessPhone = "Business phone number is required"
        
        if (!formData.businessEmail.trim()) {
            newErrors.businessEmail = "Business email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.businessEmail)) {
            newErrors.businessEmail = "Please enter a valid email address"
        }
        
        if (!formData.address.trim()) newErrors.address = "Business location address is required"
        if (!formData.city.trim()) newErrors.city = "City is required"
        if (!formData.state.trim()) newErrors.state = "State is required"
        if (!formData.postalCode.trim()) newErrors.postalCode = "Postal code is required"
        if (!formData.serviceCategory.trim()) newErrors.serviceCategory = "Industry / business category is required"
        if (!formData.servicesOffered.trim()) newErrors.servicesOffered = "All services offered description is required"
        if (!formData.aboutUs.trim()) newErrors.aboutUs = "About Us details are required"
        if (!formData.businessHours.trim()) newErrors.businessHours = "Business hours are required"
        if (!formData.areasServed.trim()) newErrors.areasServed = "Areas served details are required"
        if (!formData.standOutReasons.trim()) newErrors.standOutReasons = "Reasons why your business stands out are required"

        setErrors(newErrors)
        const isValid = Object.keys(newErrors).length === 0

        if (!isValid) {
            const firstErrorKey = Object.keys(newErrors)[0]
            const errorElement = document.getElementsByName(firstErrorKey)[0]
            if (errorElement) {
                errorElement.scrollIntoView({ behavior: "smooth", block: "center" })
                setTimeout(() => {
                    errorElement.focus({ preventScroll: true })
                }, 400) // Wait for scroll to complete
            }
            return
        }

        setIsSubmitting(true)

        try {
            const data = new FormData()
            // Append text fields
            Object.entries(formData).forEach(([key, value]) => {
                data.append(key, value)
            })

            // Append file if exists
            if (logoFile) {
                data.append('logo', logoFile)
            }

            const response = await fetch('/api/client-intake', {
                method: 'POST',
                body: data, // Content-Type is set automatically for FormData
            })

            if (response.ok) {
                setIsSubmitted(true)
                window.scrollTo({ top: 0, behavior: "smooth" })
            } else {
                const errorData = await response.json()
                alert(`Transmission failed: ${errorData.error || "Unknown error"}`)
            }
        } catch (error) {
            console.error("Error submitting form:", error)
            alert("Transmission failed. Please check your connection and try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSubmitted) {
        return (
            <main className="relative min-h-screen bg-background selection:bg-primary selection:text-foreground">
                {/* Fixed Background */}
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <NetworkBackground />
                </div>

                <Header />

                {/* 1. HERO LAYER */}
                <section className="sticky top-0 z-0 min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden bg-background">
                    <ParticleAnimation />

                    <div className="container mx-auto max-w-7xl text-center relative z-10 px-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-sm font-bold tracking-widest uppercase text-foreground/80">
                                System Ingestion
                            </span>
                        </div>

                        <h1 className="font-display text-6xl md:text-8xl font-bold text-foreground mb-8 tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                            CLIENT <br /> <span className="text-primary">INTAKE</span>.
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                            Form successfully submitted.
                        </p>
                    </div>
                </section>

                {/* 2. CONTENT LAYER */}
                <div className="relative z-10 bg-background border-t border-foreground/10 shadow-[0_-50px_100px_-20px_rgba(0,0,0,0.5)]">
                    <div className="h-[10vh] w-full pointer-events-none" />

                    <div className="container mx-auto max-w-5xl px-6 pb-32 pt-12">
                        <div className="bg-foreground/5 border border-foreground/10 p-8 md:p-12 relative overflow-hidden group transition-all hover:border-primary/30 backdrop-blur-sm shadow-2xl">
                            <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                            <div className="py-12 flex flex-col items-center text-center animate-in fade-in duration-500">
                                <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary flex items-center justify-center mb-8 animate-pulse">
                                    <span className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                        <Check className="w-8 h-8 text-primary" />
                                    </span>
                                </div>

                                <h2 className="font-display text-4xl font-bold tracking-widest text-foreground uppercase mb-4">
                                    Transmission <span className="text-primary">Successful</span>
                                </h2>
                                
                                <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8 text-sm">
                                    Your data packet has been successfully ingested into our system. We have securely logged your business details, social links, and uploaded files. Our team will begin deploying your digital infrastructure shortly.
                                </p>

                                <div className="max-w-md w-full border border-foreground/10 bg-background/30 p-6 mb-12 text-left space-y-4">
                                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block border-b border-foreground/10 pb-2">
                                        Transmission Details
                                    </span>
                                    <div className="flex justify-between text-xs">
                                        <span className="text-muted-foreground uppercase">Status:</span>
                                        <span className="text-primary font-bold uppercase tracking-widest">ACTIVE / PROCESSING</span>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="text-muted-foreground uppercase">Recipient:</span>
                                        <span className="text-foreground/90 font-medium">SpyderStack Onboarding</span>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="text-muted-foreground uppercase">Attachments:</span>
                                        <span className="text-foreground/90 font-medium">
                                            {logoFile ? "Logo Attached" : "None"}
                                        </span>
                                    </div>
                                </div>

                                <Button 
                                    onClick={handleReset}
                                    className="w-full max-w-sm h-16 text-md rounded-none bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold shadow-lg hover:shadow-[0_0_30px_-5px_var(--primary)] transition-all duration-300 hover:-translate-y-1"
                                >
                                    Submit Another Packet
                                </Button>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </main>
        )
    }

    return (
        <main className="relative min-h-screen bg-background selection:bg-primary selection:text-foreground">
            {/* Loading Overlay */}
            {isSubmitting && (
                <div className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-background/80 backdrop-blur-md animate-in fade-in duration-300">
                    <div className="relative flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full border border-primary/30 flex items-center justify-center animate-pulse duration-1000 mb-6">
                            <span className="w-16 h-16 rounded-full border border-primary/50 flex items-center justify-center animate-spin duration-1000">
                                <span className="w-3 h-3 rounded-full bg-primary" />
                            </span>
                        </div>
                        <h3 className="font-display text-lg font-bold tracking-widest text-foreground uppercase animate-pulse">
                            Ingesting Data Packet
                        </h3>
                        <p className="text-xs text-muted-foreground mt-2 uppercase tracking-widest animate-pulse">
                            Uploading and encrypting files. Please hold...
                        </p>
                    </div>
                </div>
            )}

            {/* Fixed Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <NetworkBackground />
            </div>

            <Header />

            {/* 1. HERO LAYER (Sticky Base Z-0) */}
            <section className="sticky top-0 z-0 min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden bg-background">
                <ParticleAnimation />

                <div className="container mx-auto max-w-7xl text-center relative z-10 px-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-sm font-bold tracking-widest uppercase text-foreground/80">
                            System Ingestion
                        </span>
                    </div>

                    <h1 className="font-display text-6xl md:text-8xl font-bold text-foreground mb-8 tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                        CLIENT <br /> <span className="text-primary">INTAKE</span>.
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        Fill out the required parameters below to initialize your digital infrastructure.
                    </p>
                </div>
            </section>

            {/* 2. CONTENT LAYER (Slides Over Hero - Z-10) */}
            <div className="relative z-10 bg-background border-t border-foreground/10 shadow-[0_-50px_100px_-20px_rgba(0,0,0,0.5)]">

                <div className="h-[10vh] w-full pointer-events-none" />

                <div className="container mx-auto max-w-5xl px-6 pb-32 pt-12">

                    <div className="bg-foreground/5 border border-foreground/10 p-8 md:p-12 relative overflow-hidden group transition-all hover:border-primary/30 backdrop-blur-sm shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                        <div className="mb-12">
                            <h2 className="font-display text-3xl font-bold text-foreground mb-4 tracking-wide flex items-center gap-3">
                                <span className="text-primary text-lg">01.</span> BUSINESS IDENTITY
                            </h2>
                            <p className="text-muted-foreground">Please fill out these questions to the best of your ability. This will be the content of your website.</p>
                        </div>

                        <form onSubmit={handleSubmit} noValidate className="space-y-12">

                            {/* SECTION: BASIC INFO */}
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2 group/input">
                                        <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Legal Business Name *</Label>
                                        <Input name="businessName" value={formData.businessName} onChange={handleChange} placeholder="e.g. Green Valley Pharmacy, Acme Corp" className={`bg-background/40 h-14 rounded-none transition-colors ${errors.businessName ? "border-red-500/60 focus:border-red-500 focus-visible:ring-red-500" : "border-foreground/10 focus:border-primary"}`} />
                                        {errors.businessName && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1">{errors.businessName}</p>}
                                    </div>
                                    <div className="space-y-2 group/input">
                                        <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Full Name *</Label>
                                        <Input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Doe" className={`bg-background/40 h-14 rounded-none transition-colors ${errors.fullName ? "border-red-500/60 focus:border-red-500 focus-visible:ring-red-500" : "border-foreground/10 focus:border-primary"}`} />
                                        {errors.fullName && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1">{errors.fullName}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2 group/input">
                                        <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Business Phone *</Label>
                                        <Input name="businessPhone" value={formData.businessPhone} onChange={handleChange} placeholder="(888) 555-1234" className={`bg-background/40 h-14 rounded-none transition-colors ${errors.businessPhone ? "border-red-500/60 focus:border-red-500 focus-visible:ring-red-500" : "border-foreground/10 focus:border-primary"}`} />
                                        {errors.businessPhone && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1">{errors.businessPhone}</p>}
                                    </div>
                                    <div className="space-y-2 group/input">
                                        <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Business Email *</Label>
                                        <Input name="businessEmail" type="email" value={formData.businessEmail} onChange={handleChange} placeholder="john@example.com" className={`bg-background/40 h-14 rounded-none transition-colors ${errors.businessEmail ? "border-red-500/60 focus:border-red-500 focus-visible:ring-red-500" : "border-foreground/10 focus:border-primary"}`} />
                                        {errors.businessEmail && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1">{errors.businessEmail}</p>}
                                    </div>
                                </div>

                                <div className="space-y-2 group/input">
                                    <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Business Location Address *</Label>
                                    <Input name="address" value={formData.address} onChange={handleChange} placeholder="123 Example Street" className={`bg-background/40 h-14 rounded-none transition-colors ${errors.address ? "border-red-500/60 focus:border-red-500 focus-visible:ring-red-500" : "border-foreground/10 focus:border-primary"}`} />
                                    {errors.address && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1">{errors.address}</p>}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="space-y-2 group/input">
                                        <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">City *</Label>
                                        <Input name="city" value={formData.city} onChange={handleChange} placeholder="Gainesville" className={`bg-background/40 h-14 rounded-none transition-colors ${errors.city ? "border-red-500/60 focus:border-red-500 focus-visible:ring-red-500" : "border-foreground/10 focus:border-primary"}`} />
                                        {errors.city && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1">{errors.city}</p>}
                                    </div>
                                    <div className="space-y-2 group/input">
                                        <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">State *</Label>
                                        <Input name="state" value={formData.state} onChange={handleChange} placeholder="Florida" className={`bg-background/40 h-14 rounded-none transition-colors ${errors.state ? "border-red-500/60 focus:border-red-500 focus-visible:ring-red-500" : "border-foreground/10 focus:border-primary"}`} />
                                        {errors.state && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1">{errors.state}</p>}
                                    </div>
                                    <div className="space-y-2 group/input">
                                        <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Postal Code *</Label>
                                        <Input name="postalCode" value={formData.postalCode} onChange={handleChange} placeholder="12345" className={`bg-background/40 h-14 rounded-none transition-colors ${errors.postalCode ? "border-red-500/60 focus:border-red-500 focus-visible:ring-red-500" : "border-foreground/10 focus:border-primary"}`} />
                                        {errors.postalCode && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1">{errors.postalCode}</p>}
                                    </div>
                                </div>
                            </div>


                            {/* SECTION: SOCIAL MEDIA */}
                            <div className="pt-8 border-t border-foreground/10">
                                <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                                    <span className="text-primary text-sm">02.</span> SOCIAL PRESENCE
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2 group/input">
                                        <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Instagram Link</Label>
                                        <Input name="instagram" value={formData.instagram} onChange={handleChange} placeholder="www.instagram.com/..." className="bg-background/40 h-14 border-foreground/10 focus:border-primary rounded-none" />
                                    </div>
                                    <div className="space-y-2 group/input">
                                        <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Facebook Link</Label>
                                        <Input name="facebook" value={formData.facebook} onChange={handleChange} placeholder="www.facebook.com/..." className="bg-background/40 h-14 border-foreground/10 focus:border-primary rounded-none" />
                                    </div>
                                    <div className="space-y-2 group/input">
                                        <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Better Business Bureau Link</Label>
                                        <Input name="bbb" value={formData.bbb} onChange={handleChange} placeholder="www.bbb.org/..." className="bg-background/40 h-14 border-foreground/10 focus:border-primary rounded-none" />
                                    </div>
                                    <div className="space-y-2 group/input">
                                        <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">TikTok Link</Label>
                                        <Input name="tiktok" value={formData.tiktok} onChange={handleChange} placeholder="www.tiktok.com/..." className="bg-background/40 h-14 border-foreground/10 focus:border-primary rounded-none" />
                                    </div>
                                </div>
                            </div>

                            {/* SECTION: SERVICES */}
                            <div className="pt-8 border-t border-foreground/10">
                                <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                                    <span className="text-primary text-sm">03.</span> OPERATIONS DATA
                                </h3>

                                <div className="space-y-8">
                                    <div className="space-y-2 group/input">
                                        <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Industry / Business Category *</Label>
                                        <Input name="serviceCategory" value={formData.serviceCategory} onChange={handleChange} placeholder="e.g. Pharmacy, Retail, Construction..." className={`bg-background/40 h-14 rounded-none transition-colors ${errors.serviceCategory ? "border-red-500/60 focus:border-red-500 focus-visible:ring-red-500" : "border-foreground/10 focus:border-primary"}`} />
                                        {errors.serviceCategory && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1">{errors.serviceCategory}</p>}
                                    </div>

                                    <div className="space-y-2 group/input">
                                        <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">All Services / Products Offered (In Order of Preference) *</Label>
                                        <Textarea name="servicesOffered" value={formData.servicesOffered} onChange={handleChange} placeholder="e.g. prescription fulfillment, immunizations, custom compounding..." rows={4} className={`bg-background/40 rounded-none p-4 transition-colors ${errors.servicesOffered ? "border-red-500/60 focus:border-red-500 focus-visible:ring-red-500" : "border-foreground/10 focus:border-primary"}`} />
                                        {errors.servicesOffered && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1">{errors.servicesOffered}</p>}
                                    </div>

                                    <div className="space-y-2 group/input">
                                        <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">About Us (3-5 Sentences) *</Label>
                                        <Textarea name="aboutUs" value={formData.aboutUs} onChange={handleChange} placeholder="How you got started, your experience, etc..." rows={5} className={`bg-background/40 rounded-none p-4 transition-colors ${errors.aboutUs ? "border-red-500/60 focus:border-red-500 focus-visible:ring-red-500" : "border-foreground/10 focus:border-primary"}`} />
                                        {errors.aboutUs && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1">{errors.aboutUs}</p>}
                                    </div>

                                    <div className="space-y-2 group/input">
                                        <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Business Hours *</Label>
                                        <Input name="businessHours" value={formData.businessHours} onChange={handleChange} placeholder="Monday-Friday 6AM-8PM" className={`bg-background/40 h-14 rounded-none transition-colors ${errors.businessHours ? "border-red-500/60 focus:border-red-500 focus-visible:ring-red-500" : "border-foreground/10 focus:border-primary"}`} />
                                        {errors.businessHours && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1">{errors.businessHours}</p>}
                                    </div>

                                    <div className="space-y-2 group/input">
                                        <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Areas Served (Up to 14 Cities/Suburbs) *</Label>
                                        <Textarea name="areasServed" value={formData.areasServed} onChange={handleChange} placeholder="Gainesville, Fort Lauderdale... (CITIES ONLY, NO COUNTIES)" rows={3} className={`bg-background/40 rounded-none p-4 transition-colors ${errors.areasServed ? "border-red-500/60 focus:border-red-500 focus-visible:ring-red-500" : "border-foreground/10 focus:border-primary"}`} />
                                        {errors.areasServed && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1">{errors.areasServed}</p>}
                                    </div>

                                    <div className="space-y-2 group/input">
                                        <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Why Your Business Stands Out *</Label>
                                        <Textarea name="standOutReasons" value={formData.standOutReasons} onChange={handleChange} placeholder="e.g. Locally Owned, Drive-thru access, Family Owned, Insured..." rows={3} className={`bg-background/40 rounded-none p-4 transition-colors ${errors.standOutReasons ? "border-red-500/60 focus:border-red-500 focus-visible:ring-red-500" : "border-foreground/10 focus:border-primary"}`} />
                                        {errors.standOutReasons && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1">{errors.standOutReasons}</p>}
                                    </div>
                                </div>
                            </div>

                            {/* SECTION: BRANDING & ASSETS */}
                            <div className="pt-8 border-t border-foreground/10">
                                <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                                    <span className="text-primary text-sm">04.</span> BRAND ASSETS
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="space-y-4">
                                        <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground block">Your Company Logo</Label>

                                        <div className="relative border-2 border-dashed border-foreground/20 hover:border-primary/50 transition-colors p-8 text-center bg-foreground/5 h-48 flex flex-col items-center justify-center cursor-pointer"
                                            onClick={() => fileInputRef.current?.click()}>
                                            <Upload className="w-8 h-8 text-muted-foreground mb-4" />
                                            <span className="text-sm text-foreground/70 font-bold uppercase tracking-wide">Click to Upload Logo</span>
                                            <span className="text-xs text-muted-foreground mt-2">{logoFile ? logoFile.name : "No file selected"}</span>
                                            <input
                                                type="file"
                                                ref={fileInputRef}
                                                className="hidden"
                                                accept="image/*"
                                                onChange={handleFileChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground block">Do you need us to make a logo? *</Label>
                                        <RadioGroup defaultValue="No" onValueChange={(val) => setFormData(prev => ({ ...prev, needLogo: val }))}>
                                            <div className="flex items-center space-x-2 border border-foreground/10 p-4 bg-background/40">
                                                <RadioGroupItem value="Yes" id="yes-logo" />
                                                <Label htmlFor="yes-logo">Yes</Label>
                                            </div>
                                            <div className="flex items-center space-x-2 border border-foreground/10 p-4 bg-background/40">
                                                <RadioGroupItem value="No" id="no-logo" />
                                                <Label htmlFor="no-logo">No</Label>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                </div>

                                <div className="mt-12 bg-primary/10 border border-primary/30 p-6 flex gap-4 items-start">
                                    <Info className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-foreground font-bold uppercase tracking-wide mb-2">Photo Transfer Required</h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            Please email <strong>as many photos</strong> of your business (storefront, interior, products, team, or projects) to <a href="mailto:spyderstack@gmail.com" className="text-primary hover:underline">spyderstack@gmail.com</a>.
                                            Include a nice picture of yourself or your team so customers know who they will be interacting with.
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* SUBMIT */}
                            <div className="pt-8">
                                <Button disabled={isSubmitting} type="submit" className="w-full h-16 text-lg rounded-none bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold shadow-lg hover:shadow-[0_0_30px_-5px_var(--primary)] transition-all duration-300 hover:-translate-y-1">
                                    {isSubmitting ? "Transmitting..." : "Submit Data Packet"} <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                                <p className="text-center text-muted-foreground text-xs mt-4">By submitting this form, you agree to our processing of your business data.</p>
                            </div>

                        </form>
                    </div>
                </div>

                <Footer />
            </div>
        </main>
    )
}
