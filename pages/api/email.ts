// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import * as sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";
import PDFDocument from "pdfkit";
import fs from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const worksheets = req.body.worksheets;
  const msg = {
    to: req.body.email, // Change to your recipient
    from: process.env.SENDGRID_SENDER, // Change to your verified sender
    subject: "Your Math Champ Diagnostic Results",
    text: "and easy to do anywhere, even with Node.js", // for restrictive email clients
    html: "<strong>and easy to do anywhere, even with Node.js</strong>", // for email clients that can render CSS and HTML
    attachments: worksheets.map((it) => {
      const pathToAttachment = `${process.env.ROOT_DIR}${it.pdf}`;
      const pdf = generatePDF(req);
      const data_base64 = base64_encode("output.pdf");

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
      res.status(500).send(process.env.ROOT_DIR);
      console.error(error);
    });
  res.status(200).json({ status: "OK" });
}

function base64_encode(file) {
  let bitmap = fs.readFileSync(file);
  return new Buffer(bitmap).toString("base64");
}

function generatePDF(req) {
  // Create a document
  const doc = new PDFDocument();

  // Pipe its output somewhere, like to a file or HTTP response
  // See below for browser usage
  doc.pipe(fs.createWriteStream("output.pdf"));

  // Embed a font, set the font size, and render some text
  doc
    // .font("fonts/PalatinoBold.ttf")
    .fontSize(25)
    .text("Some text with an embedded font!", 100, 100);

  doc.fontSize(25).text(JSON.stringify(req.body.email), 100, 100);

  // Add an image, constrain it to a given size, and center it vertically and horizontally
  doc.image("public/images/apple.jpeg", {
    fit: [250, 300],
    align: "center",
    valign: "center",
  });

  // Add another page
  doc.addPage().fontSize(25).text("Here is some vector graphics...", 100, 100);

  // Draw a triangle
  doc.save().moveTo(100, 150).lineTo(100, 250).lineTo(200, 250).fill("#FF3300");

  // Apply some transforms and render an SVG path with the 'even-odd' fill rule
  doc
    .scale(0.6)
    .translate(470, -380)
    .path("M 250,75 L 323,301 131,161 369,161 177,301 z")
    .fill("red", "even-odd")
    .restore();

  // Add some text with annotations
  doc
    .addPage()
    .fillColor("blue")
    .text("Here is a link!", 100, 100)
    .underline(100, 100, 160, 27, { color: "#0000FF" })
    .link(100, 100, 160, 27, "http://google.com/");

  // Finalize PDF file
  doc.end();
}
