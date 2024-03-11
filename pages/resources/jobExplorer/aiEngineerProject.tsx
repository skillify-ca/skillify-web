import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import AIProject from "../../../components/resources/jobExplorer/aiEngineer/AIProject";

export default function AIProjectPage() {
  return (
    <div>
      <AIProject />
    </div>
  );
}

AIProjectPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
