// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import * as sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs"; 
import { getSummaryText } from "./diagnostic/diagnosticGrader";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  let inputGrade= req.body.inputGrade;
  let calculatedGrade = req.body.calculatedGrade;
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
const markup2 = `<div style="font-family: inherit; text-align: center">&nbsp;</div>
<div style="font-family: inherit; text-align: center">We don't want to be stuck in tourist traps that isolate us from vibrant, local experiences. We want to discover the hidden gems and less-traveled roads of our next destination.</div>
<div style="font-family: inherit; text-align: center">&nbsp;</div>
<div style="font-family: inherit; text-align: center">Ready for your next authentic travel experience?</div><div></div></div></td>`;
const markup3 = `<style type="text/css">
body, p, div {
  font-family: courier, monospace;
  font-size: 16px;
}
body {
  color: #FFFFFF;
}
body a {
  color: #fe5d61;
  text-decoration: none;
}
p { margin: 0; padding: 0; }
table.wrapper {
  width:100% !important;
  table-layout: fixed;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
img.max-width {
  max-width: 100% !important;
}
.column.of-2 {
  width: 50%;
}
.column.of-3 {
  width: 33.333%;
}
.column.of-4 {
  width: 25%;
}
ul ul ul ul  {
  list-style-type: disc !important;
}
ol ol {
  list-style-type: lower-roman !important;
}
ol ol ol {
  list-style-type: lower-latin !important;
}
ol ol ol ol {
  list-style-type: decimal !important;
}
@media screen and (max-width:480px) {
  .preheader .rightColumnContent,
  .footer .rightColumnContent {
    text-align: left !important;
  }
  .preheader .rightColumnContent div,
  .preheader .rightColumnContent span,
  .footer .rightColumnContent div,
  .footer .rightColumnContent span {
    text-align: left !important;
  }
  .preheader .rightColumnContent,
  .preheader .leftColumnContent {
    font-size: 80% !important;
    padding: 5px 0;
  }
  table.wrapper-mobile {
    width: 100% !important;
    table-layout: fixed;
  }
  img.max-width {
    height: auto !important;
    max-width: 100% !important;
  }
  a.bulletproof-button {
    display: block !important;
    width: auto !important;
    font-size: 80%;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .columns {
    width: 100% !important;
  }
  .column {
    display: block !important;
    width: 100% !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .social-icon-column {
    display: inline-block !important;
  }
}
</style>`
  const msg = {
    to: req.body.email, // Change to your recipient
    from: process.env.SENDGRID_SENDER, // Change to your verified sender
    subject: "Your Math Champ Diagnostic Results",
    text: "and easy to do anywhere even with Node.js", // for restrictive email clients
    html: `<html>
    <head>${markup3}</head>
    <body>
    <strong>${getSummaryText(inputGrade, calculatedGrade)}${markup}${markup2}</strong>
    </body>
    </html>
    ` // for email clients that can render CSS and HTML
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
