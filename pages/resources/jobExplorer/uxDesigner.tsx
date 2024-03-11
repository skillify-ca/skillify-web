import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import UXDesignerComponent from "../../../components/resources/jobExplorer/uxDesigner/UXDesignerComponent";

export default function UXDesignerPage() {
  return (
    <div>
      <UXDesignerComponent />
    </div>
  );
}

UXDesignerPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
