// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import * as sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const worksheets = req.body.worksheets;
  const markup = `
<ul class="skills">
    ${worksheets.map(worksheets => `<li><a href="mathchamp.ca/${worksheets.pdf}" target="_blank">
    ${worksheets.title}
  </a>
  </li> 
  `).join('')
}
</ul>
`;
  const msg = {
    to: req.body.email, // Change to your recipient
    from: process.env.SENDGRID_SENDER, // Change to your verified sender
    subject: "Your Math Champ Diagnostic Results",
    text: "and easy to do anywhere even with Node.js", // for restrictive email clients
    html: `<strong>${markup}</strong>` // for email clients that can render CSS and HTML
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      res.status(500).send(error);
      console.error(error);
    });
  res.status(200).json({ status: "OK" });
}

function base64_encode(file) {
  let bitmap = fs.readFileSync(file);
  return new Buffer(bitmap).toString("base64");
}
