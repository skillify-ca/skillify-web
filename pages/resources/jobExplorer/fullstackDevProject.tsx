import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import FullstackProject from "../../../components/resources/jobExplorer/fullstackDev/FullstackProject";

export default function FSProjectPage() {
  return (
    <div>
      <FullstackProject />
    </div>
  );
}

FSProjectPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
