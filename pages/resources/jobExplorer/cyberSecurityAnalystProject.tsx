import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import CyberSecurityProject from "../../../components/resources/jobExplorer/cyberSecurityAnalyst/CyberSecurityProject";

export default function CSProjectPage() {
  return (
    <div>
      <CyberSecurityProject />
    </div>
  );
}

CSProjectPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
