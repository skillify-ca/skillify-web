import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import JobExplorerProject from "../../../components/resources/jobExplorer/JobExplorerProject";
import { title, goal, objectives, requirements, estimatedTime, submissionRequirements } from "../../../pages/api/resources/jobExplorer/backEndDev/projectData"

export default function BEProjectPage() {
  return (
    <div>
      <JobExplorerProject title={title} goal={goal} objectives={objectives} requirements={requirements} estimatedTime={estimatedTime} submissionRequirements={submissionRequirements} />
    </div>
  );
}

BEProjectPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
