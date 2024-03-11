import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import DataScienceProject from "../../../components/resources/jobExplorer/dataScientist/DataScienceProject";

export default function DSProjectPage() {
  return (
    <div>
      <DataScienceProject />
    </div>
  );
}

DSProjectPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
