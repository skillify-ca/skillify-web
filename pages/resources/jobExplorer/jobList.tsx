import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import JobListComponent from "../../../components/resources/jobExplorer/jobList/JobListComponent";

export default function JobListPage() {
  return (
    <div>
      <JobListComponent />
    </div>
  );
}

JobListPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
