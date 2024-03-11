import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import DevOpsProject from "../../../components/resources/jobExplorer/devOpsEngineer/DevOpsProject";

export default function DOProjectPage() {
  return (
    <div>
      <DevOpsProject />
    </div>
  );
}

DOProjectPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
