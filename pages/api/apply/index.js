import nc from 'next-connect';
import cors from 'cors';

import mailClient from './mail';

async function requestHandler(req, res) {
  const {
    firstName = '',
    lastName = '',
    emailAddress = '',
    whatsappNumber = '',
    oetTaken = 'No',
    oetReading = 0,
    oetWriting = 0,
    oetListening = 0,
    oetSpeaking = 0,
    ieltsTaken = 'No',
    ieltsReading = 0,
    ieltsWriting = 0,
    ieltsListening = 0,
    ieltsSpeaking = 0,
    fileName = '',
    attachCV,
  } = JSON.parse(req.body);

  try {
    let ackMail = null;

    const applyMail = await mailClient.sendMail({
      from: `"StaffRex" <staffrex@outlook.com>`,
      // to: `info@staffrex.co.uk`,
      to: 'vishwanathr.dev@outlook.com',
      subject: 'New candidate registration',
      text: 'Application form',
      html: `
      <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      table {
        border-collapse: collapse;
        margin: 2rem auto;
      }

      thead th {
        background-color: #0b5596;
        color: #fff;
      }

      tbody th {
        background-color: #f5bc34;
      }

      th,
      td {
        padding: 1rem;
        border: 1px solid black;
      }

      tr td:first-child {
        font-weight: bold;
      }

      tr td:not(:first-child) {
        text-align: center;
      }
    </style>
  </head>
  <body>
    <p>A new candidate has been registered with the below details.</p>
    <br>
    <table>
      <thead>
        <tr>
          <th colspan="2">APPLICATION FORM</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>First Name</th>
          <td>${firstName}</td>
        </tr>
        <tr>
          <th>Last Name</th>
          <td>${lastName}</td>
        </tr>
        <tr>
          <th>Email Address</th>
          <td>${emailAddress}</td>
        </tr>
        <tr>
          <th>Whatsapp Number</th>
          <td>${whatsappNumber}</td>
        </tr>
        <tr>
          <th>Have you taken OET?</th>
          <td>${oetTaken}</td>
        </tr>
        <tr>
          <th>OET Reading</th>
          <td>${oetReading || 0}</td>
        </tr>
        <tr>
          <th>OET Writing</th>
          <td>${oetWriting || 0}</td>
        </tr>
        <tr>
          <th>OET Listening</th>
          <td>${oetListening || 0}</td>
        </tr>
        <tr>
          <th>OET Speaking</th>
          <td>${oetSpeaking || 0}</td>
        </tr>
        <tr>
          <th>OET Have you taken IELTS?</th>
          <td>${ieltsTaken}</td>
        </tr>
        <tr>
          <th>IELTS Reading</th>
          <td>${ieltsReading || 0}</td>
        </tr>
        <tr>
          <th>IELTS Writing</th>
          <td>${ieltsWriting || 0}</td>
        </tr>
        <tr>
          <th>IELTS Listening</th>
          <td>${ieltsListening || 0}</td>
        </tr>
        <tr>
          <th>IELTS Speaking</th>
          <td>${ieltsSpeaking || 0}</td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </table>
  </body>
  </html>
      `,
      attachments: [
        {
          filename: fileName,
          path: attachCV,
          // contentType: 'image/jpeg',
        },
      ],
    });

    if (applyMail.accepted)
      ackMail = await mailClient.sendMail({
        from: `"StaffRex" <staffrex@outlook.com>`,
        // to: emailAddress,
        to: 'vishwanathr.dev@outlook.com',
        subject: 'Candidate registration',
        text: 'Application form',
        html: `
  Dear ${firstName},
  <br>
  <br>
  Thank you for showing interest in applying at Staffrex.
  <br>
  We received your details.
  <br>
  We will review and respond as soon as possible.
  <br>
  <br>
  Thank you.
  `,
      });

    return res
      .status(200)
      .json({
        data: 'Thanks for submitting the application',
        applyMail,
        ackMail,
      });
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Something went wrong!', error: error.message });
  }
}

const handler = nc().use(cors()).post(requestHandler);

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '50mb',
    },
  },
};

export default handler;
