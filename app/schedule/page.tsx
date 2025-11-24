"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { NetworkBackground } from "@/components/network-background"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, Calendar, Clock, CheckCircle2, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

// Generate dates (Today + 3 days)
const getDates = () => {
    const dates = []
    for (let i = 0; i < 4; i++) {
        const d = new Date()
        d.setDate(d.getDate() + i)
        dates.push(d)
    }
    return dates
}

const times = [
    "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
    "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM"
]

export default function SchedulePage() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const [selectedTime, setSelectedTime] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const [step, setStep] = useState(1)
    const [bookings, setBookings] = useState<Record<string, number>>({})

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: ""
    })

    const dates = getDates()

    // Fetch availability on load
    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const res = await fetch('/api/book')
                if (res.ok) {
                    const data = await res.json()
                    setBookings(data)
                }
            } catch (e) {
                console.error("Failed to fetch bookings")
            }
        }
        fetchBookings()
    }, [])

    const handleBooking = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const res = await fetch('/api/book', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    date: selectedDate?.toLocaleDateString(),
                    time: selectedTime
                })
            })

            const data = await res.json()

            if (!res.ok) {
                alert(data.error || "Booking failed. Please try another slot.")
                setLoading(false)
                return
            }

            setStep(3)
        } catch (error) {
            alert("An error occurred. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    // Helper to check if a slot is full (>= 3 bookings)
    const isSlotFull = (time: string) => {
        if (!selectedDate) return false
        const key = `${selectedDate.toLocaleDateString()}-${time}`
        return (bookings[key] || 0) >= 3
    }

    return (
        <main className="relative min-h-screen bg-black selection:bg-primary selection:text-white">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <NetworkBackground />
            </div>

            <Header />

            <section className="relative z-10 pt-32 pb-20 px-6 min-h-screen flex flex-col justify-center">
                <div className="container mx-auto max-w-5xl">

                    {/* Header Text */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 animate-in fade-in zoom-in duration-700">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-sm font-bold tracking-widest uppercase text-white/80">
                                System Calibration
                            </span>
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
                            SECURE YOUR <span className="text-primary">SLOT</span>.
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Select a time to deploy your automated infrastructure.
                        </p>
                    </div>

                    {/* Main Card Panel */}
                    <div className="bg-background border border-white/10 shadow-2xl relative overflow-hidden min-h-[600px] flex flex-col md:flex-row">
                        {/* Top Progress Bar (Mobile) */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-white/5 md:hidden">
                            <div className="h-full bg-primary transition-all duration-500" style={{ width: `${(step / 3) * 100}%` }} />
                        </div>

                        {/* LEFT SIDE: Summary */}
                        <div className="md:w-1/3 bg-white/5 border-r border-white/10 p-8 md:p-12 flex flex-col justify-between">
                            <div>
                                <h3 className="font-display text-2xl font-bold text-white mb-2">DEPLOYMENT BRIEF</h3>
                                <p className="text-muted-foreground text-sm mb-8">30 Minute Strategy Session</p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                            <Calendar className="w-4 h-4 text-primary" />
                                        </div>
                                        <div>
                                            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Date</div>
                                            <div className="text-white font-medium">
                                                {selectedDate ? selectedDate.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' }) : "Select a Date"}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                            <Clock className="w-4 h-4 text-primary" />
                                        </div>
                                        <div>
                                            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Time</div>
                                            <div className="text-white font-medium">
                                                {selectedTime || "Select a Time"}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 md:mt-0 hidden md:block">
                                <div className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Step {step} of 3</div>
                                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary transition-all duration-500 ease-out" style={{ width: `${(step / 3) * 100}%` }} />
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE: Interactive Area */}
                        <div className="md:w-2/3 p-8 md:p-12 bg-background relative">

                            {/* STEP 1: SELECTION */}
                            {step === 1 && (
                                <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                                    <h3 className="font-display text-2xl font-bold text-white mb-6">SELECT DATE & TIME</h3>

                                    {/* Date Grid */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                        {dates.map((date, i) => (
                                            <button
                                                key={i}
                                                onClick={() => { setSelectedDate(date); setSelectedTime(null); }}
                                                className={cn(
                                                    "p-4 border text-center transition-all duration-300 hover:scale-105",
                                                    selectedDate?.toDateString() === date.toDateString()
                                                        ? "bg-primary border-primary text-white shadow-[0_0_20px_-5px_var(--primary)]"
                                                        : "bg-white/5 border-white/10 text-muted-foreground hover:border-primary/50 hover:text-white"
                                                )}
                                            >
                                                <div className="text-xs uppercase tracking-widest mb-1 opacity-70">
                                                    {date.toLocaleDateString(undefined, { weekday: 'short' })}
                                                </div>
                                                <div className="text-xl font-bold font-display">
                                                    {date.getDate()}
                                                </div>
                                            </button>
                                        ))}
                                    </div>

                                    {/* Time Grid */}
                                    <div className="space-y-4">
                                        <div className="text-xs uppercase tracking-widest text-muted-foreground">Available Slots (EST)</div>
                                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                            {times.map((time, i) => {
                                                const full = isSlotFull(time)
                                                return (
                                                    <button
                                                        key={i}
                                                        onClick={() => setSelectedTime(time)}
                                                        disabled={!selectedDate || full}
                                                        className={cn(
                                                            "py-2 px-1 text-sm border transition-all duration-200 relative overflow-hidden",
                                                            selectedTime === time
                                                                ? "bg-white text-black border-white font-bold"
                                                                : "bg-transparent border-white/10 text-muted-foreground hover:border-white/30 hover:text-white",
                                                            (!selectedDate || full) && "opacity-30 cursor-not-allowed border-transparent bg-white/5"
                                                        )}
                                                    >
                                                        {time}
                                                        {full && <div className="absolute inset-0 flex items-center justify-center bg-black/80 text-[10px] font-bold text-red-500 uppercase">FULL</div>}
                                                    </button>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <div className="mt-8 flex justify-end">
                                        <Button
                                            disabled={!selectedDate || !selectedTime}
                                            onClick={() => setStep(2)}
                                            className="h-12 px-8 rounded-none bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            Next Step <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* STEP 2: DETAILS */}
                            {step === 2 && (
                                <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                                    <h3 className="font-display text-2xl font-bold text-white mb-6">CONTACT DETAILS</h3>

                                    <form onSubmit={handleBooking} className="space-y-6">
                                        <div className="space-y-2">
                                            <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Full Name</Label>
                                            <Input
                                                required
                                                className="bg-white/5 border-white/10 h-12 focus:border-primary rounded-none text-white"
                                                placeholder="Enter your name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Work Email</Label>
                                            <Input
                                                required
                                                type="email"
                                                className="bg-white/5 border-white/10 h-12 focus:border-primary rounded-none text-white"
                                                placeholder="name@company.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Company Name</Label>
                                            <Input
                                                required
                                                className="bg-white/5 border-white/10 h-12 focus:border-primary rounded-none text-white"
                                                placeholder="Your Company Ltd."
                                                value={formData.company}
                                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            />
                                        </div>

                                        <div className="pt-4 flex gap-4">
                                            <Button
                                                type="button"
                                                variant="outline"
                                                onClick={() => setStep(1)}
                                                className="h-12 px-8 rounded-none border-white/10 text-white hover:bg-white/5 uppercase tracking-widest font-bold"
                                            >
                                                Back
                                            </Button>
                                            <Button
                                                type="submit"
                                                disabled={loading}
                                                className="h-12 px-8 flex-1 rounded-none bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold"
                                            >
                                                {loading ? <Loader2 className="animate-spin w-4 h-4 mr-2" /> : "Confirm Deployment"}
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            )}

                            {/* STEP 3: SUCCESS */}
                            {step === 3 && (
                                <div className="h-full flex flex-col justify-center items-center text-center animate-in fade-in zoom-in duration-500">
                                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6 border border-green-500/50">
                                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                                    </div>
                                    <h3 className="font-display text-3xl font-bold text-white mb-2">SYSTEM LOCKED</h3>
                                    <p className="text-muted-foreground mb-8 max-w-md">
                                        Your slot has been confirmed. A confirmation signal (email) has been sent to <strong>{formData.email}</strong> with your briefing video.
                                    </p>
                                    <Button
                                        onClick={() => window.location.href = '/'}
                                        className="h-12 px-8 rounded-none bg-white text-black hover:bg-white/90 uppercase tracking-widest font-bold"
                                    >
                                        Return to Base
                                    </Button>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}