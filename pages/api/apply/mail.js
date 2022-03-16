import nodemailer from 'nodemailer';

// Create the transporter with the required configuration for Outlook
// change the user and pass !

const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com', // hostname
  secureConnection: false, // TLS requires secureConnection to be false
  port: 587, // port for secure SMTP
  tls: {
    ciphers: 'SSLv3',
  },
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// setup e-mail data, even with unicode symbols
// const mailOptions = {
//   from: '"Our Code World " <vishwanathr.dev@outlook.com>', // sender address (who sends)
//   to: 'vishwanath95.kpr@gmail.com', // list of receivers (who receives)
//   subject: 'Hello ', // Subject line
//   text: 'Hello world ', // plaintext body
//   html: '<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js', // html body
// }

// // send mail with defined transport object
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     return console.log(error)
//   }

//   console.log(`Message sent: ${info.response}`)

//   return null
// })

export default transporter;
