import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import JobExplorerProject from "../../../components/resources/jobExplorer/JobExplorerProject";
import { BACK_END_PROJECT_DATA } from "../../../pages/api/resources/jobExplorer/backEndDev/projectData"

export default function BEProjectPage() {
  return (
    <div>
      <JobExplorerProject title={BACK_END_PROJECT_DATA.title} goal={BACK_END_PROJECT_DATA.goal} objectives={BACK_END_PROJECT_DATA.objectives} requirements={BACK_END_PROJECT_DATA.requirements} estimatedTime={BACK_END_PROJECT_DATA.estimatedTime} submissionRequirements={BACK_END_PROJECT_DATA.submissionRequirements} />
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
