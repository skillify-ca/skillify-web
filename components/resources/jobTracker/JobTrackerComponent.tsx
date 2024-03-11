import React, { useState } from "react";
import { logToSlack } from "../../../pages/api/slack/slackLogger";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";

export default function JobTrackerComponent() {
  const [isCAD, setIsCAD] = useState(true);
  const [showData, setShowData] = useState(false);

  return (
    <div className="p-4">
      <h2 className="mb-4 text-3xl font-bold text-center">
        Tech Job Tracker 2023
      </h2>
      <p className="">
        One of our expert coaches recently spent a few months interviewing with
        various tech companies from January to March of 2023. Here is a list of
        outcomes from the interviews.
      </p>
      <h3 className="mt-4 text-xl font-bold">Recommendations</h3>
      <ul className="list-disc list-inside">
        <li>
          Find a niche eg. Mobile, Blockchain, or Game Dev. There are so many
          JavaScript developers and the market is competitive.
        </li>
        <li>
          When applying to jobs online, the best tool to use by far was{" "}
          <a className="text-blue-800 underline" href="www.otta.com">
            Otta
          </a>{" "}
          compared to applying on LinkedIn or Google
        </li>
        <li>
          Prioritize reaching out to your network to get referrals. That was the
          easiest way to get interviews.
        </li>
        <li>
          Don't spend all your time on Leetcode. Many companies are moving away
          from that style of interviewing in favour of live project
          building/debugging.
        </li>
      </ul>
      <h3 className="mt-4 text-xl font-bold">Observations</h3>
      <ul className="list-disc list-inside">
        <li>
          Our coach has 10 years of experience in the field working on various
          tech stacks. This was good enough to get several senior level
          interviews, but not good enough for staff level roles.
        </li>
        <li>
          Although a large number of companies are remote friendly and let you
          work from anywhere, roles that required relocation to an SF or NYC
          office had considerably higher compensation than most remote roles
        </li>
        <li>
          Android roles were easier to get compared to frontend or fullstack
          roles. The market is competitive for JavaScript developers.
        </li>
        <li>
          Some companies offered additional stock equity bonuses as part of
          total compensation but this is harder to value given that you can not
          easily sell your stock. The value of the stock depends on the value of
          the company which is hard to predict.
        </li>

        <li>
          Lots of roles got cancelled after starting the interview process. This
          was frustrating as a job seeker, but this could mean many companies
          are actively trying to pull back and slow down hiring.
        </li>

        <li>
          Many companies pay based on geographic location of the employee even
          if the work is remote. The Canadian market is lower than the US market
          so a candidate applying to the same roles from the US could earn a
          higher salary.
        </li>
      </ul>
      <div className="flex items-center gap-4 p-4">
        <p className="font-bold">Currency:</p>
        <Button label="CAD" onClick={() => setIsCAD(true)} />
        <Button
          label="USD"
          onClick={() => setIsCAD(false)}
          backgroundColor="white"
          textColor="text-orange-500"
        />
      </div>
      {showData ? (
        <div className="w-full px-4 mb-4 overflow-x-auto">
          <OfferTable isCAD={isCAD} />
        </div>
      ) : (
        <div className="p-4 m-4 border-2 shadow-xl rounded-xl">
          <EmailCapture onSubmit={() => setShowData(true)} />
        </div>
      )}
    </div>
  );
}

function OfferTable({ isCAD }) {
  type Offer = {
    Company: string;
    companyUrl: string;
    Location: string;
    Role: string;
    "Time Spent": string;
    timeSpentHours: number;
    Result: string;
    Base?: number;
    opportunitySource: string;
    industry: string;
  };

  const USD_TO_CAD_EXCHANGE_RATE = 1.37;

  const offers: Offer[] = [
    {
      Company: "Faire",
      companyUrl: "https://www.faire.com/",
      Base: 170000,
      Location: "Toronto",
      Role: "Senior Android",
      "Time Spent": "8 hours",
      timeSpentHours: 8,
      Result: "Offer",
      opportunitySource: "LinkedIn DMs",
      industry: "E-Commerce",
    },
    {
      Company: "Soho",
      companyUrl: "https://www.soho.xyz/",
      Base: 190000,
      Location: "Remote",
      Role: "Senior Frontend",
      "Time Spent": "6 hours",
      timeSpentHours: 6,
      Result: "Offer",
      opportunitySource: "Applied online",
      industry: "Web3",
    },
    {
      Company: "MLSE",
      companyUrl: "https://www.mlse.com/",
      Base: 160000,
      Location: "Toronto",
      Role: "Senior Android",
      "Time Spent": "2 hours",
      timeSpentHours: 2,
      Result: "Offer",
      opportunitySource: "Applied online",
      industry: "Sports",
    },
    {
      Company: "Sound",
      companyUrl: "https://www.sound.xyz/",
      Base: 330000,
      Location: "Remote",
      Role: "Staff Frontend",
      "Time Spent": "2 weeks paid work trial",
      timeSpentHours: 80,
      Result: "No Offer: Did not meet expectations during work trial",
      opportunitySource: "Referral",
      industry: "Web3",
    },
    {
      Company: "Federato",
      companyUrl: "https://www.federato.ai/",
      Base: 200000,
      Location: "Remote",
      Role: "Senior Fullstack",
      "Time Spent": "3 hours",
      timeSpentHours: 3,
      Result: "No Offer: Did not pass final round interviews",
      opportunitySource: "LinkedIn DMs",
      industry: "Insurance",
    },
    {
      Company: "ClassDojo",
      companyUrl: "https://www.classdojo.com/",
      Base: 170000,
      Location: "Remote",
      Role: "Senior Fullstack",
      "Time Spent": "10 hours",
      timeSpentHours: 10,
      Result: "No Offer: Did not pass final round interviews",
      opportunitySource: "Applied online",
      industry: "Education",
    },
    {
      Company: "Sanity",
      companyUrl: "https://www.sanity.io/",
      Location: "Remote",
      Role: "Senior Frontend",
      "Time Spent": "4 hours",
      timeSpentHours: 4,
      Result: "No Offer: Did not pass final round interviews",
      opportunitySource: "Referral",
      industry: "Developer Tools",
    },
    {
      Company: "Asana",
      companyUrl: "asana.com",
      Base: 300000,
      Location: "NYC",
      Role: "Senior Fullstack",
      "Time Spent": "8 hours",
      timeSpentHours: 8,
      Result: "No Offer: Did not pass final round interviews",
      opportunitySource: "Applied online",
      industry: "Productivity",
    },
    {
      Company: "Deep Genomics",
      companyUrl: "https://www.deepgenomics.com/",
      Location: "Toronto",
      Role: "Senior Frontend",
      "Time Spent": "2 hours",
      timeSpentHours: 2,
      Result: "No Offer: Did not pass final round interviews",
      opportunitySource: "Applied online",
      industry: "Science",
    },
    {
      Company: "Maven",
      companyUrl: "https://maven.com/",
      Location: "Toronto",
      Role: "Senior Fullstack",
      "Time Spent": "2 hours",
      timeSpentHours: 2,
      Result: "No Offer: Did not pass final round interviews",
      opportunitySource: "Applied online",
      industry: "Education",
    },
    {
      Company: "Roblox",
      companyUrl: "https://www.roblox.com/",
      Base: 343000,
      Location: "SF",
      Role: "Staff Frontend",
      "Time Spent": "2 hours",
      timeSpentHours: 2,
      Result: "No Offer: Did not pass technical screen",
      opportunitySource: "Referral",
      industry: "Education",
    },
    {
      Company: "TeachFX",
      companyUrl: "https://teachfx.com/",
      Location: "Remote",
      Role: "Senior Frontend",
      "Time Spent": "2 hours",
      timeSpentHours: 2,
      Result: "No Offer: Did not pass technical screen",
      opportunitySource: "Applied online",
      industry: "Education",
    },
    {
      Company: "Grammerly",
      companyUrl: "https://grammarly.com/",
      Base: 190000,
      Location: "Toronto",
      Role: "Senior Frontend",
      "Time Spent": "1 hours",
      timeSpentHours: 1,
      Result: "No Offer: Did not pass technical screen",
      opportunitySource: "Referral",
      industry: "Education",
    },
    {
      Company: "League",
      companyUrl: "https://league.com/",
      Location: "Toronto",
      Role: "Senior Android",
      "Time Spent": "2 hours",
      timeSpentHours: 2,
      Result: "No Offer: Did not pass take home assignment",
      opportunitySource: "Applied online",
      industry: "Insurance",
    },
    {
      Company: "Khan Academy",
      companyUrl: "https://www.khanacademy.org/",
      Base: 180000,
      Location: "Remote",
      Role: "Senior Fullstack",
      "Time Spent": "15 minutes",
      timeSpentHours: 0.25,
      Result: "No Offer: Did not pass recruiter call",
      opportunitySource: "Applied online",
      industry: "Education",
    },
    {
      Company: "Baby List",
      companyUrl: "https://www.babylist.com/?",
      Location: "Remote",
      Role: "Staff Android",
      "Time Spent": "15 minutes",
      timeSpentHours: 0.25,
      Result: "No Offer: Did not pass recruiter call",
      opportunitySource: "Applied online",
      industry: "E-Commerce",
    },
    {
      Company: "Aritizia",
      companyUrl: "https://www.aritzia.com/en/home",
      Location: "",
      Role: "Senior Fullstack",
      "Time Spent": "15 minutes",
      timeSpentHours: 0.25,
      Result: "No Offer: Did not pass recruiter call",
      opportunitySource: "Applied online",
      industry: "E-Commerce",
    },
    {
      Company: "Retool",
      companyUrl: "https://retool.com/",
      Location: "Remote",
      Role: "Senior Fullstack",
      "Time Spent": "15 minutes",
      timeSpentHours: 0.25,
      Result: "No Offer: Did not pass recruiter call",
      opportunitySource: "Applied online",
      industry: "Developer Tools",
    },
    {
      Company: "Old Mission",
      companyUrl: "https://www.oldmissionbank.com/",
      Location: "Remote",
      Role: "Senior Frontend",
      "Time Spent": "2 hours",
      timeSpentHours: 2,
      Result: "No Offer: Role Cancelled",
      opportunitySource: "Applied online",
      industry: "Finance",
    },
    {
      Company: "Gather",
      companyUrl: "https://www.gather.town/",
      Location: "Remote",
      Role: "Senior Fullstack",
      "Time Spent": "2 hours",
      timeSpentHours: 2,
      Base: 180000,
      Result: "No Offer: Did not pass final round",
      opportunitySource: "LinkedIn DMs",
      industry: "Future of Work",
    },
    {
      Company: "Thoughtworks",
      companyUrl: "https://www.thoughtworks.com/en-ca",
      Base: 232000,
      Location: "Remote",
      Role: "Senior Android",
      "Time Spent": "15 minutes",
      timeSpentHours: 0.25,
      Result: "No Offer: Role Cancelled",
      opportunitySource: "Applied online",
      industry: "Fitness",
    },
    {
      Company: "Jane Street",
      companyUrl: "https://www.janestreet.com/",
      Location: "NYC",
      Role: "Senior Frontend",
      "Time Spent": "15 minutes",
      timeSpentHours: 0.25,
      Result: "No Offer: Role Cancelled",
      opportunitySource: "LinkedIn DMs",
      industry: "Finance",
    },
    {
      Company: "Rabbithole",
      companyUrl: "https://www.rabbithole.gg/",
      Location: "NYC",
      Role: "Senior Frontend",
      "Time Spent": "15 minutes",
      timeSpentHours: 0.25,
      Result: "No Offer: Role Cancelled",
      opportunitySource: "LinkedIn DMs",
      industry: "Web3",
    },
  ];

  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const sortData = (column) => {
    // If the column is already the sort column, reverse the sort direction
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // Otherwise, set the new sort column and direction
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  // Create a sorted copy of the data based on the current sort column and direction
  const sortedData = offers.slice().sort((a, b) => {
    const colA = a[sortColumn];
    const colB = b[sortColumn];
    if (sortDirection === "asc") {
      if (colA === undefined) return 1;
      if (colB === undefined) return -1;
      if (colA < colB) return -1;
      if (colA > colB) return 1;
    } else {
      if (colA === undefined) return 1;
      if (colB === undefined) return -1;
      if (colA > colB) return -1;
      if (colA < colB) return 1;
    }
    return 0;
  });

  const formatCurrency = (amount: number) => {
    if (amount === undefined) {
      return "";
    }
    const amountForCurrency = isCAD
      ? amount
      : amount / USD_TO_CAD_EXCHANGE_RATE;

    const formattedAmount = amountForCurrency
      .toFixed(0)
      .toString()
      .slice(0, -3)
      .concat("K");

    return isCAD ? `$${formattedAmount} CAD` : `$${formattedAmount} USD`;
  };

  return (
    <table className="min-w-full bg-white border-2 table-auto rounded-xl">
      <thead>
        <tr className="border-b-2 bg-slate-100">
          <th className="p-4"></th>
          <th
            onClick={() => sortData("Company")}
            className="p-4 cursor-pointer hover:bg-slate-200"
          >
            Company
          </th>
          <th
            onClick={() => sortData("Location")}
            className="p-4 cursor-pointer hover:bg-slate-200"
          >
            Location
          </th>
          <th
            onClick={() => sortData("industry")}
            className="p-4 cursor-pointer hover:bg-slate-200"
          >
            Industry
          </th>
          <th
            onClick={() => sortData("Base")}
            className="p-4 cursor-pointer hover:bg-slate-200"
          >
            Base Salary
          </th>
          <th
            onClick={() => sortData("Role")}
            className="p-4 cursor-pointer hover:bg-slate-200"
          >
            Role
          </th>
          <th
            onClick={() => sortData("timeSpentHours")}
            className="p-4 cursor-pointer hover:bg-slate-200"
          >
            Time Spent Interviewing
          </th>
          <th
            onClick={() => sortData("Result")}
            className="p-4 cursor-pointer hover:bg-slate-200"
          >
            Result
          </th>
          <th
            onClick={() => sortData("opportunitySource")}
            className="p-4 cursor-pointer hover:bg-slate-200"
          >
            Opportunity Source
          </th>
        </tr>
      </thead>

      <tbody>
        {sortedData.map((offer, index) => (
          <tr key={offer.Company} className="text-center hover:bg-slate-300">
            <td className="p-4">{index + 1}</td>

            <td className="p-4 hover:underline hover:text-blue-800">
              <a href={offer.companyUrl} target="_blank" rel="noreferrer">
                {offer.Company}
              </a>
            </td>
            <td className="p-4">{offer.Location}</td>
            <td className="p-4">{offer.industry}</td>
            <td className="p-4">{formatCurrency(offer.Base)}</td>
            <td className="p-4">{offer.Role}</td>
            <td className="p-4">{offer["Time Spent"]}</td>
            <td className="p-4">{offer.Result}</td>
            <td className="p-4">{offer.opportunitySource}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function EmailCapture({ onSubmit }) {
  const [showError, setShowError] = useState(false);
  const [email, setEmail] = useState("");

  async function handleSubmit() {
    const isValid = isValidEmail(email);
    if (isValid) {
      onSubmit();

      logToSlack(`Email: ${email} has downloaded the Tech Salary Guide 2023`);
    } else {
      setShowError(true);
    }
  }

  function isValidEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }
  return (
    <div className="flex flex-col items-center justify-center w-full h-64">
      <p className="text-center sm:w-full">Enter your email to view the data</p>
      <Input value={email} setValue={setEmail} placeholder="Enter Email" />
      <div className="my-4">
        <Button label="Submit" onClick={handleSubmit} />
      </div>
      {showError ? (
        <p className="text-red-400">Please enter a valid email</p>
      ) : null}
    </div>
  );
}
