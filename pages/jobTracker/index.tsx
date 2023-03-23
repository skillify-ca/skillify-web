import React from "react";
import JobTrackerComponent from "../../components/resources/jobTracker/JobTrackerComponent";

export default function JobTrackerPage() {
  return (
    <div>
      <JobTrackerComponent />
    </div>
  );
}

JobTrackerPage.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
