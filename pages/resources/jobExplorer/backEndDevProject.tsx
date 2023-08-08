import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import BackEndProject from "../../../components/resources/jobExplorer/backEndDev/BackEndProject";

export default function BEProjectPage() {
  return (
    <div>
      <BackEndProject />
    </div>
  );
}

BEProjectPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
