import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import MobileAppProject from "../../../components/resources/jobExplorer/mobileAppDev/MobileAppProject";

export default function MAProjectPage() {
  return (
    <div>
      <MobileAppProject />
    </div>
  );
}

MAProjectPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
