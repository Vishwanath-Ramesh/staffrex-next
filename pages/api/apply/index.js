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

  //     mailClient.sendMail({
  //       from: `"Jewel Store" <info@staffrex.co.uk>`,
  //       to: `info@staffrex.co.uk`,
  //       subject: 'Welcome to Jewel store',
  //       text: '',
  //       html: `
  //       <!DOCTYPE html>
  // <html lang="en">
  //   <head>
  //     <meta charset="UTF-8" />
  //     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //     <meta name="description" content="Application form" />
  //     <title>Application form</title>
  //     <style>
  //       form {
  //         width: 100%;
  //       }

  //       .application__header {
  //         background: #0b5596;
  //         color: #fff;
  //         padding: 1rem 0rem;
  //         text-align: center;
  //       }

  //       .application__body {
  //         display: flex;
  //         flex-direction: column;
  //         gap: 2rem;
  //         background: #fff;
  //         padding: 2rem 2rem;
  //       }

  //       .application__body .application__name {
  //         display: flex;
  //         justify-content: space-between;
  //         gap: 2rem;
  //       }

  //       .application__body .application__submit {
  //         align-self: flex-start;
  //         font-weight: bold;
  //       }

  //       input[type='text'],
  //       input[type='number'] {
  //         padding: 10px 1rem;
  //         border-radius: 5px;
  //         outline: none;
  //         border: 1px solid #a8b1cc;
  //         color: #b1aaad;
  //         width: 100%;
  //       }

  //       .application__takenOET,
  //       .application__takenIELTS {
  //         margin: auto;
  //         color: #b1aaad;
  //       }

  //       .application__takenOET .radio__mandatory,
  //       .application__takenIELTS .radio__mandatory {
  //         color: red;
  //       }

  //       .application__takenOET p,
  //       .application__takenIELTS p {
  //         padding: 0px;
  //         margin: 0px;
  //       }

  //       .application__takenOET .radio__itemlabel,
  //       .application__takenIELTS .radio__itemlabel {
  //         padding-right: 2rem;
  //       }
  //     </style>
  //   </head>

  //   <body>
  //     <form action="">
  //       <div class="application__header">APPLICATION FORM</div>
  //       <div class="application__body">
  //         <div class="application__name">
  //           <input
  //             type="text"
  //             name="firstName"
  //             id="first-name"
  //             required=""
  //             placeholder="First Name"
  //           /><input
  //             type="text"
  //             name="lastName"
  //             id="last-name"
  //             placeholder="Last Name"
  //           />
  //         </div>
  //         <input
  //           class="application__email"
  //           type="text"
  //           name="emailAddress"
  //           id="email-address"
  //           required=""
  //           placeholder="Email Address"
  //         /><input
  //           class="application__phone"
  //           type="text"
  //           name="whatsappNumber"
  //           id="whatsapp-number"
  //           required=""
  //           placeholder="Whatsapp Number"
  //         />
  //         <div class="application__takenOET">
  //           <p>
  //             <span class="radio__label">Have you taken OET?</span
  //             ><span class="radio__mandatory">*</span>
  //           </p>
  //           <span
  //             ><input
  //               type="radio"
  //               id="YES"
  //               name="oetTaken"
  //               required=""
  //               value="yes"
  //             /><label class="radio__itemlabel" for="YES">Yes</label></span
  //           ><span
  //             ><input
  //               type="radio"
  //               id="NO"
  //               name="oetTaken"
  //               required=""
  //               value="no"
  //               checked=""
  //             /><label class="radio__itemlabel" for="NO">No</label></span
  //           >
  //         </div>
  //         <input
  //           class="application__reading"
  //           type="number"
  //           name="oetReading"
  //           id="oet-reading"
  //           placeholder="Reading"
  //         /><input
  //           class="application__writing"
  //           type="number"
  //           name="oetWriting"
  //           id="oet-writing"
  //           placeholder="Writing"
  //         /><input
  //           class="application__listeninig"
  //           type="number"
  //           name="oetListening"
  //           id="oet-listeninig"
  //           placeholder="Listening"
  //         /><input
  //           class="application__speaking"
  //           type="number"
  //           name="oetSpeaking"
  //           id="oet-speaking"
  //           placeholder="Speaking"
  //         />
  //         <div class="application__takenIELTS">
  //           <p>
  //             <span class="radio__label">Have you taken IELTS?</span
  //             ><span class="radio__mandatory">*</span>
  //           </p>
  //           <span
  //             ><input
  //               type="radio"
  //               id="YES"
  //               name="ieltsTaken"
  //               required=""
  //               value="yes"
  //             /><label class="radio__itemlabel" for="YES">Yes</label></span
  //           ><span
  //             ><input
  //               type="radio"
  //               id="NO"
  //               name="ieltsTaken"
  //               required=""
  //               value="no"
  //               checked=""
  //             /><label class="radio__itemlabel" for="NO">No</label></span
  //           >
  //         </div>
  //         <input
  //           class="application__reading"
  //           type="number"
  //           name="ieltsReading"
  //           id="ielts-reading"
  //           placeholder="Reading"
  //         /><input
  //           class="application__writing"
  //           type="number"
  //           name="ieltsWriting"
  //           id="ielts-writing"
  //           placeholder="Writing"
  //         /><input
  //           class="application__listeninig"
  //           type="number"
  //           name="ieltsListening"
  //           id="ielts-listeninig"
  //           placeholder="Listening"
  //         /><input
  //           class="application__speaking"
  //           type="number"
  //           name="ieltsSpeaking"
  //           id="ielts-speaking"
  //           placeholder="Speaking"
  //         />
  //       </div>
  //     </form>
  //   </body>
  // </html>
  // `,
  //       // attachments: [
  //       //   {
  //       //     filename: 'testMail.jpg',
  //       //     content: new Buffer.from(req.body.attachCV, 'base64'),
  //       //     contentType: 'image/jpeg',
  //       //   },
  //       // ],
  //     });

  try {
    if (emailAddress)
      await mailClient.sendMail({
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

    return res
      .status(200)
      .json({ data: 'Thanks for submitting the application' });
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Something went wrong!', error: error.message });
  }
}

const handler = nc().use(cors()).post(requestHandler);

export default handler;
