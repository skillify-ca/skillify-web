import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import DigitalMarketerProject from "../../../components/resources/jobExplorer/digitalMarketer/DigitalMarketerProject";

export default function DMProjectPage() {
  return (
    <div>
      <DigitalMarketerProject />
    </div>
  );
}

DMProjectPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
