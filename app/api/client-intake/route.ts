import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
    try {
        const formData = await req.formData()

        // Extract fields
        const businessName = formData.get('businessName') as string
        const fullName = formData.get('fullName') as string
        const businessPhone = formData.get('businessPhone') as string
        const businessEmail = formData.get('businessEmail') as string
        const address = formData.get('address') as string
        const city = formData.get('city') as string
        const state = formData.get('state') as string
        const postalCode = formData.get('postalCode') as string
        const instagram = formData.get('instagram') as string
        const facebook = formData.get('facebook') as string
        const bbb = formData.get('bbb') as string
        const tiktok = formData.get('tiktok') as string
        const serviceCategory = formData.get('serviceCategory') as string
        const servicesOffered = formData.get('servicesOffered') as string
        const aboutUs = formData.get('aboutUs') as string
        const businessHours = formData.get('businessHours') as string
        const areasServed = formData.get('areasServed') as string
        const standOutReasons = formData.get('standOutReasons') as string
        const needLogo = formData.get('needLogo') as string

        const logoFile = formData.get('logo') as File | null

        // Basic validation
        if (!businessName || !fullName || !businessEmail) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
        }

        // Setup Transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD
            }
        })

        // Prepare attachments if logo exists
        const attachments = []
        if (logoFile) {
            const buffer = Buffer.from(await logoFile.arrayBuffer())
            attachments.push({
                filename: logoFile.name,
                content: buffer
            })
        }

        // 1. Send Email to Admin (You)
        await transporter.sendMail({
            from: '"SpyderStack System" <spyderstack@gmail.com>',
            to: 'spyderstack@gmail.com',
            subject: `[INTAKE] ${businessName} - New Client`,
            attachments: attachments,
            text: `
        NEW CLIENT INTAKE FORM
        ======================
        
        --- BUSINESS DETAILS ---
        Business Name: ${businessName}
        Full Name: ${fullName}
        Phone: ${businessPhone}
        Email: ${businessEmail}
        Address: ${address}, ${city}, ${state} ${postalCode}
        
        --- SOCIAL MEDIA ---
        Instagram: ${instagram || 'N/A'}
        Facebook: ${facebook || 'N/A'}
        BBB: ${bbb || 'N/A'}
        TikTok: ${tiktok || 'N/A'}
        
        --- OPERATIONS ---
        Category: ${serviceCategory}
        Hours: ${businessHours}
        
        Services Offered:
        ${servicesOffered}
        
        About Us:
        ${aboutUs}
        
        Areas Served:
        ${areasServed}
        
        Why Us:
        ${standOutReasons}
        
        --- BRANDING ---
        Need Logo Design: ${needLogo}
        Logo File: ${logoFile ? 'Attached' : 'Not Provided'}
            `
        })

        // 2. Send Confirmation to User
        await transporter.sendMail({
            from: '"SpyderStack Onboarding" <support@spyderstack.com>',
            to: businessEmail,
            subject: "Welcome to SpyderStack - Intake Received",
            html: `
        <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
          <h2 style="color: #120f8e;">Intake Data Received</h2>
          <p>Hi ${fullName},</p>
          <p>We have successfully received your business information for <strong>${businessName}</strong>.</p>
          <p>Our team will now begin processing your profile. If you have any additional photos (at least 20 recommended of your work), please reply to this email or send them directly to <a href="mailto:spyderstack@gmail.com">spyderstack@gmail.com</a>.</p>
          <br/>
          <p>Next Steps:</p>
          <ul>
            <li>We will review your submission within 24 hours.</li>
            <li>We may reach out if we need higher resolution assets.</li>
            <li>Sit tight while we build your digital infrastructure.</li>
          </ul>
          <br/>
          <p>Best regards,<br/>The SpyderStack Team</p>
        </div>
      `
        })

        return NextResponse.json({ success: true })

    } catch (error: any) {
        console.error('Intake API Error:', error)
        return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 })
    }
}
