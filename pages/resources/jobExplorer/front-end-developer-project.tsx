import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import FrontEndProject from "../../../components/resources/jobExplorer/frontEndDev/FrontEndProject";

export default function FEProjectPage() {
  return (
    <div>
      <FrontEndProject />
    </div>
  );
}

FEProjectPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
