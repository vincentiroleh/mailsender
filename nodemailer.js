const nodemailer = require('nodemailer');


require('dotenv').config();

async function mailer(to, subject, text) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  const info = await transporter.sendMail({
    from: `${process.env.app_name} <${process.env.user}>`,
    to,
    subject,
    text,
  });

  console.log('Message sent: %s', info.messageId);
}

module.exports = mailer;