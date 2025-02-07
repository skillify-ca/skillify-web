import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import JobExplorerProject from "../../../components/resources/jobExplorer/JobExplorerProject";
import { GAME_DEV_PROJECT_DATA } from "../../api/resources/jobExplorer/gameDev/projectData";

export default function GameDevProjectPage() {
  return (
    <div>
            <JobExplorerProject title={GAME_DEV_PROJECT_DATA.title} goal={GAME_DEV_PROJECT_DATA.goal} objectives={GAME_DEV_PROJECT_DATA.objectives} requirements={GAME_DEV_PROJECT_DATA.requirements} estimatedTime={GAME_DEV_PROJECT_DATA.estimatedTime} submissionRequirements={GAME_DEV_PROJECT_DATA.submissionRequirements} />
    </div>
  );
}

GameDevProjectPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
