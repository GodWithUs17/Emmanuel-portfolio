const prisma = require("../utils/Prisma")
const { transporter } = require("../config/mail")
const verifyRecaptcha = require("../utils/verifyRecaptcha")


exports.sendMessage = async (req, res) => {

 try {

  const { name, email, message, recaptchaToken } = req.body

  if (!name || !email || !message) {
   return res.status(400).json({
    error: "All fields required"
   })
  }

  const human = await verifyRecaptcha(recaptchaToken)

  if (!human) {
   return res.status(403).json({
    error: "Bot detected"
   })
  }

  const contact = await prisma.contactMessage.create({

   data: {
    name,
    email,
    message
   }

  })


     // ---------------------------
    // 1️⃣ Email to yourself (Owner)
    // ---------------------------
    await Promise.all([
     transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Portfolio Contact from ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif; max-width:600px; margin:auto; padding:20px; border:1px solid #ddd; border-radius:8px;">
          <h2 style="color:#1F6BFF;">New Contact Message Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background:#f9f9f9; padding:15px; border-radius:6px; font-style:italic; color:#333;">
            ${message}
          </div>
          <p style="margin-top:20px; font-size:12px; color:#888;">This message was submitted from your portfolio contact form.</p>
        </div>
      `,
    }),


       // ---------------------------
    // 2️⃣ Confirmation email to user
    // ---------------------------
    
    transporter.sendMail({
      from: `"Emmanuel Oguntoke" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you for contacting me, ${name}!`,
      html: `
        <div style="font-family:Arial,sans-serif; max-width:600px; margin:auto; padding:20px; border:1px solid #ddd; border-radius:8px; background:#fefefe;">
          <h2 style="color:#1F6BFF;">Hi ${name},</h2>
          <p>Thank you for reaching out through my portfolio. I have received your message and will respond within 24 hours.</p>
          <p><strong>Your Message:</strong></p>
          <div style="background:#f4f4f4; padding:15px; border-radius:6px; font-style:italic; color:#333;">
            ${message}
          </div>
          <p style="margin-top:20px;">Best regards,<br/><strong>Emmanuel Oguntoke</strong><br/>Software Developer</p>
          <hr style="border:none; border-top:1px solid #ddd; margin:20px 0;">
          <p style="font-size:12px; color:#888;">This is an automated confirmation email. Please do not reply directly to this email.</p>
        </div>
      `,
    })

    ]);


    res.json({
   success: true
  })  


 } catch (error) {

  console.error(error)

  res.status(500).json({
   error: "Server error"
  })

 }

}