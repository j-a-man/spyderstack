import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { name, email, phone, company, industry, message } = body

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
        }

        // Setup Transporter (uses same creds as booking)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD
            }
        })

        // 1. Send Email to Admin (You)
        await transporter.sendMail({
            from: '"SpyderStack System" <spyderstack@gmail.com>',
            to: 'spyderstack@gmail.com', // Your admin email
            subject: `[CONTACT] ${name} - ${company}`,
            text: `
        New Contact Request
        -------------------
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Company: ${company}
        Industry: ${industry}
        
        Message:
        ${message}
      `
        })

        // 2. Send Confirmation to User
        await transporter.sendMail({
            from: '"SpyderStack Support" <support@spyderstack.com>',
            to: email,
            subject: "We received your message",
            html: `
        <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
          <h2 style="color: #120f8e;">Message Received</h2>
          <p>Hi ${name},</p>
          <p>Thanks for reaching out. We have received your inquiry regarding <strong>${company}</strong>.</p>
          <p>Our engineering team is reviewing your details and will get back to you shortly.</p>
          <br/>
          <p>Best regards,<br/>The SpyderStack Team</p>
        </div>
      `
        })

        return NextResponse.json({ success: true })

    } catch (error) {
        console.error('Contact API Error:', error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}