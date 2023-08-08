import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import DataScientistComponent from "../../../components/resources/jobExplorer/dataScientist/DataScientistComponent";

export default function DataScientistPage() {
  return (
    <div>
      <DataScientistComponent />
    </div>
  );
}

DataScientistPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
