"use client"

import { useEffect } from "react"
import Script from "next/script"

export function BookingCalendar() {
    return (
        <div className="w-full h-full min-h-[1000px] bg-white/5 border border-white/10 p-4 md:p-8">
            <iframe
                src="https://api.spyderstack.com/widget/booking/xzoD0wvHPvb1Cvuldhle"
                style={{ width: "100%", border: "none", minHeight: "1000px", height: "100%" }}
                id="RuE4ZYzjw1AJRbSXnky0_1764020521138"
                title="Booking Calendar"
            />
            <Script
                src="https://api.spyderstack.com/js/form_embed.js"
                strategy="afterInteractive"
            />
        </div>
    )
}
