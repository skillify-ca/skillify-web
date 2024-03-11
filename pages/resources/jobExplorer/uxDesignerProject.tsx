import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import UXDesignerProject from "../../../components/resources/jobExplorer/uxDesigner/UXDesignerProject";

export default function UXProjectPage() {
  return (
    <div>
      <UXDesignerProject />
    </div>
  );
}

UXProjectPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
