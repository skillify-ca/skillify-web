import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import JobExplorerProject from "../../../components/resources/jobExplorer/JobExplorerProject";
import { DATA_SCIENCE_PROJECT_DATA } from "../../../pages/api/resources/jobExplorer/dataScientist/projectData"

export default function DSProjectPage() {
  return (
    <div>
      <JobExplorerProject title={DATA_SCIENCE_PROJECT_DATA.title} goal={DATA_SCIENCE_PROJECT_DATA.goal} objectives={DATA_SCIENCE_PROJECT_DATA.objectives} requirements={DATA_SCIENCE_PROJECT_DATA.requirements} estimatedTime={DATA_SCIENCE_PROJECT_DATA.estimatedTime} submissionRequirements={DATA_SCIENCE_PROJECT_DATA.submissionRequirements} />
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
