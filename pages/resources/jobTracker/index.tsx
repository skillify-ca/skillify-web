import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import JobTrackerComponent from "../../../components/resources/jobTracker/JobTrackerComponent";

export default function JobTrackerPage() {
  return (
    <div className="mx-auto max-w-7xl bg-slate-50">
      <JobTrackerComponent />
    </div>
  );
}

JobTrackerPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
