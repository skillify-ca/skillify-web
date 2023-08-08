import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import CyberSecurityAnalystComponent from "../../../components/resources/jobExplorer/cyberSecurityAnalyst/CyberSecurityAnalystComponent";

export default function CyberSecurityAnalystPage() {
  return (
    <div>
      <CyberSecurityAnalystComponent />
    </div>
  );
}

CyberSecurityAnalystPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
