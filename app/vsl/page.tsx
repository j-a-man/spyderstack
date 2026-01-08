"use client"

import { Header } from "@/components/header"
import { NetworkBackground } from "@/components/network-background"
import { Footer } from "@/components/footer"

export default function VSLPage() {
  return (
    <main className="relative bg-background min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <NetworkBackground />
      </div>

      <Header />

      {/* Main Content (Z-10) */}
      <div className="relative z-10 flex flex-col justify-center min-h-[85vh] pt-32 pb-20">
        <div className="container mx-auto max-w-5xl px-6 text-center">

          {/* Badge */}
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="inline-block text-primary tracking-[0.2em] text-xs font-bold uppercase border border-primary/30 px-6 py-2 rounded-full bg-primary/5 backdrop-blur-md">
              Private Briefing
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight tracking-tighter mb-12 text-foreground animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            STRATEGIC <span className="text-primary">OVERVIEW</span>
          </h1>

          {/* Video Container */}
          <div className="relative aspect-video w-full bg-black/50 rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/10 animate-in fade-in scale-95 duration-1000 delay-300">
             <iframe 
               width="100%" 
               height="100%" 
               src="https://www.youtube.com/embed/RS24mMgXRFU?rel=0&modestbranding=1" 
               title="Strategy Session" 
               frameBorder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
               allowFullScreen
               className="w-full h-full object-cover"
             ></iframe>
          </div>

          <p className="mt-8 text-muted-foreground text-sm uppercase tracking-widest opacity-60">
            Confidential Material // SpyderStack Inc.
          </p>

        </div>
      </div>

      <Footer />
    </main>
  )
}
