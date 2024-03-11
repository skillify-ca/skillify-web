import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import DevOpsEngineerComponent from "../../../components/resources/jobExplorer/devOpsEngineer/DevOpsEngineerComponent";

export default function DevOpsEngineerPage() {
  return (
    <div>
      <DevOpsEngineerComponent />
    </div>
  );
}

DevOpsEngineerPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
