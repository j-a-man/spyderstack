import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// --- MOCK DATABASE (In-Memory) ---
// In production, replace this with a real DB call (e.g., Supabase, Prisma, Vercel KV)
// Structure: { "10/15/2023-02:00 PM": 1 }
const bookings: Record<string, number> = {}
const MAX_BOOKINGS_PER_SLOT = 3

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { name, email, company, date, time } = body

        if (!name || !email || !date || !time) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
        }

        // 1. Check Availability
        const slotKey = `${date}-${time}`
        const currentBookings = bookings[slotKey] || 0

        if (currentBookings >= MAX_BOOKINGS_PER_SLOT) {
            return NextResponse.json({ error: "This time slot is fully booked." }, { status: 409 })
        }

        // 2. Reserve Slot (Increment Count)
        bookings[slotKey] = currentBookings + 1

        // 3. Setup Email Transporter (Gmail)
        // NOTE: You need to use an App Password for Gmail, not your main password.
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER, // Add these to your .env.local file
                pass: process.env.GMAIL_APP_PASSWORD
            }
        })

        // 4. Send Email to Client
        await transporter.sendMail({
            from: '"SpyderStack HQ" <spyderstack@gmail.com>',
            to: email,
            subject: "Deployment Confirmed: Your Strategy Session",
            html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h1 style="color: #120f8e;">System Deployment Confirmed</h1>
          <p>Hi ${name},</p>
          <p>Your slot for <strong>${date} at ${time}</strong> has been secured.</p>
          <p><strong>Your Mission Briefing:</strong></p>
          <p>Please watch this introductory video before our call to maximize our time:</p>
          <p><a href="https://your-video-link.com" style="background: #120f8e; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Watch Briefing Video</a></p>
          <br/>
          <p>Regards,<br/>The SpyderStack Team</p>
        </div>
      `
        })

        // 5. Send Email to Admin (You)
        await transporter.sendMail({
            from: '"SpyderStack System" <spyderstack@gmail.com>',
            to: 'spyderstack@gmail.com',
            subject: `NEW LEAD: ${name} - ${company}`,
            text: `
        New Booking Received:
        
        Name: ${name}
        Company: ${company}
        Email: ${email}
        Date: ${date}
        Time: ${time}
        
        Slot Capacity: ${bookings[slotKey]}/${MAX_BOOKINGS_PER_SLOT}
      `
        })

        return NextResponse.json({ success: true })

    } catch (error) {
        console.error('Booking Error:', error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}