import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import AIEngineerComponent from "../../../components/resources/jobExplorer/aiEngineer/AIEngineerComponent";

export default function AIEngineerPage() {
  return (
    <div>
      <AIEngineerComponent />
    </div>
  );
}

AIEngineerPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
