const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendEmail = async (data) => {

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New Contact: ${data.subject}`,
    text: `
Name: ${data.name}
Email: ${data.email}

Message:
${data.message}
`
  });

};

module.exports = { transporter, sendEmail };