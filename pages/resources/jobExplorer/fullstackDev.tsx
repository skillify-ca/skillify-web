import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import FullstackDevComponent from "../../../components/resources/jobExplorer/fullstackDev/FullstackDevComponent";

export default function FullstackDevPage() {
  return (
    <div>
      <FullstackDevComponent />
    </div>
  );
}

FullstackDevPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
