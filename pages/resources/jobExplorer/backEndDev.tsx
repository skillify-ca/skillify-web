import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import BackEndDevComponent from "../../../components/resources/jobExplorer/backEndDev/BackEndDevComponent";

export default function BackEndDevPage() {
  return (
    <div>
      <BackEndDevComponent />
    </div>
  );
}

BackEndDevPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
