import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// --- MOCK DATABASE (In-Memory) ---
let bookings: Record<string, number> = {}
const MAX_BOOKINGS_PER_SLOT = 3

// --- THEME COLORS ---
const THEME = {
    background: "#111827",
    panel: "#1F2937",
    border: "#374151",
    primary: "#6366F1",
    text: "#F3F4F6",
    muted: "#9CA3AF"
}

// GET: Fetch availability
export async function GET(req: Request) {
    return NextResponse.json(bookings)
}

// POST: Book a slot
export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { name, email, company, date, time } = body

        if (!name || !email || !date || !time) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
        }

        const slotKey = `${date}-${time}`
        const currentBookings = bookings[slotKey] || 0

        if (currentBookings >= MAX_BOOKINGS_PER_SLOT) {
            return NextResponse.json({ error: "This time slot is fully booked." }, { status: 409 })
        }

        bookings[slotKey] = currentBookings + 1

        // --- DATE LOGIC ---
        const startDate = new Date(`${date} ${time}`)
        const endDate = new Date(startDate.getTime() + 30 * 60000) // 30 min duration

        const now = new Date()
        const oneDayInMs = 24 * 60 * 60 * 1000
        const isMoreThanOneDayAway = startDate.getTime() - now.getTime() > oneDayInMs

        // Format for ICS (YYYYMMDDTHHMMSSZ)
        const formatICSDate = (d: Date) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'

        // Format for Google URL (YYYYMMDDTHHMMSSZ)
        const startUTC = formatICSDate(startDate)
        const endUTC = formatICSDate(endDate)

        // --- GENERATE SMART LINKS ---
        const googleCalendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Strategy+Session:+${encodeURIComponent(name)}&dates=${startUTC}/${endUTC}&details=Strategy+Session+with+SpyderStack.+Video+Link:+https://your-video-link.com&location=Google+Meet`

        const outlookCalendarLink = `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&startdt=${startDate.toISOString()}&enddt=${endDate.toISOString()}&subject=Strategy+Session:+${encodeURIComponent(name)}&body=Strategy+Session+with+SpyderStack.&location=Google+Meet`

        // --- GENERATE ICS FILE CONTENT ---
        let icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//SpyderStack//Booking//EN
CALSCALE:GREGORIAN
METHOD:REQUEST
BEGIN:VEVENT
DTSTART:${startUTC}
DTEND:${endUTC}
DTSTAMP:${formatICSDate(new Date())}
ORGANIZER;CN=SpyderStack:mailto:spyderstack@gmail.com
UID:${new Date().getTime()}@spyderstack.com
ATTENDEE;RSVP=TRUE;PARTSTAT=NEEDS-ACTION;ROLE=REQ-PARTICIPANT;CN=${name}:mailto:${email}
DESCRIPTION:Strategy Session with ${name} from ${company}.\n\nBooked via SpyderStack.\n\nVideo Link: https://your-video-link.com
LOCATION:Google Meet
SUMMARY:Strategy Session: ${name} (${company})
PRIORITY:5
CLASS:PUBLIC
BEGIN:VALARM
TRIGGER:-PT15M
ACTION:DISPLAY
DESCRIPTION:Meeting starting in 15 minutes
END:VALARM`

        if (isMoreThanOneDayAway) {
            icsContent += `
BEGIN:VALARM
TRIGGER:-P1D
ACTION:DISPLAY
DESCRIPTION:Reminder: Strategy Session Tomorrow
END:VALARM`
        }

        icsContent += `
END:VEVENT
END:VCALENDAR`

        // --- EMAILER SETUP ---
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD
            }
        })

        // --- SEND CLIENT EMAIL ---
        await transporter.sendMail({
            from: '"SpyderStack HQ" <spyderstack@gmail.com>',
            to: email,
            subject: "Deployment Confirmed: Mission Briefing",
            icalEvent: {
                filename: 'invitation.ics',
                method: 'request',
                content: icsContent
            },
            html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Arial', sans-serif; background-color: ${THEME.background}; color: ${THEME.text}; margin: 0; padding: 40px 20px; }
            .panel { background-color: ${THEME.panel}; border: 1px solid ${THEME.border}; padding: 40px; max-width: 600px; margin: 0 auto; text-align: center; }
            .badge { display: inline-block; background-color: rgba(99, 102, 241, 0.1); border: 1px solid ${THEME.primary}; color: ${THEME.primary}; padding: 5px 12px; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; font-weight: bold; border-radius: 20px; margin-bottom: 20px; }
            .title { color: ${THEME.text}; font-size: 26px; font-weight: bold; margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 1px; }
            .subtitle { color: ${THEME.muted}; font-size: 16px; margin-bottom: 30px; }
            
            /* Data Grid */
            .grid { border-top: 1px solid ${THEME.border}; border-bottom: 1px solid ${THEME.border}; margin: 30px 0; text-align: left; }
            .row { display: flex; justify-content: space-between; padding: 15px 0; border-bottom: 1px solid ${THEME.border}; }
            .row:last-child { border-bottom: none; }
            .label { color: ${THEME.muted}; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; }
            .value { color: ${THEME.text}; font-weight: bold; font-size: 14px; }

            /* Buttons */
            .btn-group { margin-top: 30px; }
            .btn { display: inline-block; background-color: ${THEME.primary}; color: #ffffff; padding: 14px 28px; text-decoration: none; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; border-radius: 4px; }
            
            .links { margin-top: 20px; font-size: 12px; color: ${THEME.muted}; }
            .link { color: ${THEME.primary}; text-decoration: none; margin: 0 10px; }
            
            .footer { margin-top: 40px; font-size: 11px; color: ${THEME.border}; text-transform: uppercase; letter-spacing: 1px; }
          </style>
        </head>
        <body>
          <div class="panel">
            <div class="badge">System Operational</div>
            <h1 class="title">Deployment Confirmed</h1>
            <p class="subtitle">Your strategy session has been secured.</p>
            
            <div class="grid">
              <div class="row">
                <span class="label">Protocol: </span>
                <span class="value">Strategy Call</span>
              </div>
              <div class="row">
                <span class="label">Date: </span>
                <span class="value">${date}</span>
              </div>
              <div class="row">
                <span class="label">Time: </span>
                <span class="value">${time}</span>
              </div>
            </div>

            <div class="btn-group">
              <a href="https://your-video-link.com" class="btn">Watch Briefing Video</a>
            </div>

            <div class="links">
              Add to Calendar:
              <a href="${googleCalendarLink}" class="link">Google</a> | 
              <a href="${outlookCalendarLink}" class="link">Outlook</a>
            </div>

            <div class="footer">
              Secure Transmission // SpyderStack Inc.
            </div>
          </div>
        </body>
        </html>
      `
        })

        // 6. SEND ADMIN ALERT
        await transporter.sendMail({
            from: '"SpyderStack System" <spyderstack@gmail.com>',
            to: 'spyderstack@gmail.com',
            subject: `[NEW LEAD] ${name} @ ${company}`,
            text: `New Booking:\nName: ${name}\nTime: ${date} @ ${time}\nSlot Load: ${bookings[slotKey]}/${MAX_BOOKINGS_PER_SLOT}`
        })

        return NextResponse.json({ success: true })

    } catch (error) {
        console.error('Booking Error:', error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}