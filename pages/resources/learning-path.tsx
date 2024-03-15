import React, { useState } from "react";
import SEO from "../../components/SEO";
import LandingNavbar from "../../components/landingPage/LandingNavbar";
import { logToSlack } from "../api/slack/slackLogger";

export default function LearningPathPage() {
  const onSubmitClick = (name, email) => {
    setShowData(true);
    logToSlack(`New Guide Signup: ${name} - ${email}`);
  };
  const [showData, setShowData] = useState(false);

  return (
    <div>
      <SEO
        title={"Skillify Learning Path"}
        description={
          "This resource explains our learning path for learning how to code"
        }
        image={"https://melv1n.com/img/learn-to-code-how-to-start.png"}
      />
      <div className="flex flex-col bg-white">
        <LandingNavbar />
        <div className="w-full mx-auto bg-slate-50 max-w-7xl">
          <div className="flex flex-col py-4 text-white item s-center bg-murkrow">
            <h1 className="my-4 text-3xl font-bold text-center">
              Skillify Learning Path
            </h1>
            <p className="text-center">
              This free guide will help you plan out your journey so you can
              understand the steps needed to land a job in tech.
            </p>
          </div>
          <div>
            <iframe
              src="/res/Skillify-Learning-Path.pdf"
              className="w-full h-[600px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

LearningPathPage.getLayout = function getLayout(page) {
  return <div className="theme-default">{page}</div>;
};
