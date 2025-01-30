import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import FrontEndDevComponent from "../../../components/resources/jobExplorer/frontEndDev/FrontEndDevComponent";

export default function FrontEndPage() {
  return (
    <div>
      <FrontEndDevComponent />
    </div>
  );
}

FrontEndPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
