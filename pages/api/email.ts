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
  const skills = req.body.skills;
  const msg = {
    to: req.body.email, // Change to your recipient
    from: process.env.SENDGRID_SENDER, // Change to your verified sender
    subject: "Your Math Champ Diagnostic Results",
    text: "and easy to do anywhere, even with Node.js", // for restrictive email clients
    html: "<strong>and easy to do anywhere, even with Node.js</strong>", // for email clients that can render CSS and HTML
    attachments: skills.map((it) => {
      const pathToAttachment = `public${it.pdf}`;
      const data_base64 = base64_encode(pathToAttachment);
      return {
        filename: `${it.title}`,
        content: data_base64,
        type: "application/pdf",
        disposition: "attachment",
      };
    }),
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
