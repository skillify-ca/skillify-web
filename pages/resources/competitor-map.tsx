import React, { useState } from "react";
import SEO from "../../components/SEO";
import LandingNavbar from "../../components/landingPage/LandingNavbar";
import { logToSlack } from "../api/slack/slackLogger";

export default function CompetitorMapPage() {
  const onSubmitClick = (name, email) => {
    setShowData(true);
    logToSlack(`New Guide Signup: ${name} - ${email}`);
  };
  const [showData, setShowData] = useState(false);

  return (
    <div>
      <SEO
        title={"Skillify Competitor Map"}
        description={
          "This resource maps out different options for learning how to code"
        }
        image={"https://melv1n.com/img/learn-to-code-how-to-start.png"}
      />
      <div className="flex flex-col bg-white">
        <LandingNavbar />
        <div className="w-full mx-auto bg-slate-50 max-w-7xl">
          <div className="flex flex-col py-4 text-white item s-center bg-murkrow">
            <h1 className="my-4 text-3xl font-bold text-center">
              Skillify Competitor Map
            </h1>
            <p className="text-center">
              This competitor map will help you understand the different coding
              bootcamps and schools that can help you learn how to code.
            </p>
          </div>
          <div>
            <iframe src="/res/Competitors.png" className="w-full h-[600px]" />
          </div>
          <div className="p-4 bg-slate-200">
            <ul className="list-disc list-inside">
              <li>
                Online courses are low-cost but have a low completion rate and
                have low support
              </li>
              <li>
                Colleges and universities provide cookie-cutter programs for
                everyone. They are slow to adapt to new technolgies and expect
                4-5 years to complete.
              </li>
              <li>
                Traditional bootcamps overpromise and tell you that you can be a
                software developer in just 3 months. They are also slow to adapt
                and are too big to personalize the learning experience.
              </li>
              <li>
                By joining Skillify, you are supporting a small business rather
                than a large corporation. You get personalized support and
                training that is tailored to your needs.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
