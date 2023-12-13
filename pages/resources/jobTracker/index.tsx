import React from "react";
import SEO from "../../../components/SEO";
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
      <SEO
        title={"Coding Bootcamp Salary Guide"}
        description={"We break down where you can learn to code in Toronto."}
        image={"https://melv1n.com/img/learn-to-code-how-to-start.png"}
      />
      <LandingNavbar />
      {page}
    </div>
  );
};
