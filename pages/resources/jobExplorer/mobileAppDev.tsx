import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import MobileAppDevComponent from "../../../components/resources/jobExplorer/mobileAppDev/MobileAppDevComponent";

export default function MobileAppDevPage() {
  return (
    <div>
      <MobileAppDevComponent />
    </div>
  );
}

MobileAppDevPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
