import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import DigitalMarketerComponent from "../../../components/resources/jobExplorer/digitalMarketer/DigitalMarketerComponent";

export default function DigitalMarketerPage() {
  return (
    <div>
      <DigitalMarketerComponent />
    </div>
  );
}

DigitalMarketerPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
