import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import JobExplorerProject from "../../../components/resources/jobExplorer/JobExplorerProject";
import { FRONT_END_PROJECT_DATA } from "../../../pages/api/resources/jobExplorer/frontEndDev/projectData"

export default function FEProjectPage() {
  return (
    <div>
      <JobExplorerProject title={FRONT_END_PROJECT_DATA.title} goal={FRONT_END_PROJECT_DATA.goal} objectives={FRONT_END_PROJECT_DATA.objectives} requirements={FRONT_END_PROJECT_DATA.requirements} estimatedTime={FRONT_END_PROJECT_DATA.estimatedTime} submissionRequirements={FRONT_END_PROJECT_DATA.submissionRequirements} />
    </div>
  );
}

FEProjectPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
