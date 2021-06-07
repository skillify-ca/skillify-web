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
  let name = req.body.name;
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
<div style="font-family: inherit; text-align: center">We don't want your child to be stuck doing boring worksheets all the time. Learning should be fun, motivating, and relavant. Join us to build an engaging learning enviorment for your child so that they strive for academic success in the future!</div>
<div style="font-family: inherit; text-align: center">&nbsp;</div>
<div style="font-family: inherit; text-align: center">Ready for your next challenge?</div><div></div></div></td>`;
const styleMarkup = `<style type="text/css">
body, p, div {
  font-family: courier, monospace;
  font-size: 16px;
  color: #008B8B;
  justify-content: center;
}
h1{
	font-family: fantasy;
  font-size: 30px;
  font-weight: bold;
  color: #008B8B;
}
.background{
	background: linear-gradient(to right, #4ca1af, #c4e0e5);
}
.banner{
  width:100%;
  height: 100%;
  	background-image: url("https://www.mathchamp.ca/images/logo.png");
  		background-repeat: no-repeat;
	width: 100%;
	height: 100%;
	justify-content: center;
	background-position: center center;
}
.navigation {
	margin: auto;
	padding: 25px;
	flex-direction: row;
	
}
.navigation ul{
  display: flex;
  align-items: center;
  justify-content: center;
}
.navigation ul li{
	width: 30%;
	margin-top: 10px;
	padding: 10px 0;
	padding-left: 5px;
	background-color: #708090;
	list-style: none;
	border-radius: 25px;
	border-color: #008B8B;
	background-color: hsla(120deg,100%,75%,0.3);

}
.navigation ul li a{
	text-decoration: none;
  justify-content: center;
	color: #DAA520;
}
.navigation ul li::after{
	content: '';
	height: 3px;
	width: 0;
	background:#DAA520;
	position: absolute;
	left: 0;
	bottom: -10px;
	transition: 0.5s;
}
.navigation ul li:hover::after {
	width: 100%;
}
</style>`
  const msg = {
    to: req.body.email, // Change to your recipient
    from: process.env.SENDGRID_SENDER, // Change to your verified sender
    subject: "Your Math Champ Diagnostic Results",
    text: "Your Math Champ Diagnostic Results", // for restrictive email clients
    html: `<html>
    <head>${styleMarkup}</head>
    <body>	
    	<div class ="banner">
    		<h1> Math Champ</h1>
    		<div class="navigation">
    			<div class = "message"> 
    				<strong>${getSummaryText(inputGrade, calculatedGrade, name)}</strong>
    			</div>
    			<div class="worksheets">
    				${markup}
    			</div>
    			<div class="closing">
    				${markup2}
    			</div>
    		</div>
    	</div>
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
