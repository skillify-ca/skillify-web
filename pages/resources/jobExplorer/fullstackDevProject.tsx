import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import JobExplorerProject from "../../../components/resources/jobExplorer/JobExplorerProject";
import { FULLSTACK_PROJECT_DATA } from "../../api/resources/jobExplorer/fullstackDev/projectData";

export default function FSProjectPage() {
  return (
    <div>
      <JobExplorerProject title={FULLSTACK_PROJECT_DATA.title} goal={FULLSTACK_PROJECT_DATA.goal} objectives={FULLSTACK_PROJECT_DATA.objectives} requirements={FULLSTACK_PROJECT_DATA.requirements} estimatedTime={FULLSTACK_PROJECT_DATA.estimatedTime} submissionRequirements={FULLSTACK_PROJECT_DATA.submissionRequirements} />
    </div>
  );
}

FSProjectPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
