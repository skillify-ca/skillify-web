import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import FrontEndDevComponent from "../../../components/resources/jobExplorer/frontEndDev/FrontEndDevComponent";

export default function JobListPage() {
  return (
    <div>
      <FrontEndDevComponent />
    </div>
  );
}

JobListPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
