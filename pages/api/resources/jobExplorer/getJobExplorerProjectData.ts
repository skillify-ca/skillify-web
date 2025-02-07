import { devOpsEngineerProjectData } from "./devOpsEngineer/projectData";
import { FRONT_END_PROJECT_DATA } from "./frontEndDev/projectData";
import { BACK_END_PROJECT_DATA } from "./backEndDev/projectData";
import { DATA_SCIENCE_PROJECT_DATA } from "./dataScientist/projectData";
import { FULLSTACK_PROJECT_DATA } from "./fullstackDev/projectData";
import { GAME_DEV_PROJECT_DATA } from "./gameDev/projectData";

export type JobExplorerProjectData = {
  title: string;
  goal: string;
  objectives: string[];
  requirements: string[];
  estimatedTime: string;
  submissionRequirements: string;
};

const projectsDataMap: { [slug: string]: JobExplorerProjectData } = {
  devOpsEngineerProject: devOpsEngineerProjectData,
  frontEndDevProject: FRONT_END_PROJECT_DATA,
  backEndDevProject: BACK_END_PROJECT_DATA,
  dataScientistProject: DATA_SCIENCE_PROJECT_DATA,
  fullstackDevProject: FULLSTACK_PROJECT_DATA,
  gameDevProject: GAME_DEV_PROJECT_DATA,


};

export function getJobExplorerProjectData(
  slug: string
): JobExplorerProjectData | undefined {
  return projectsDataMap[slug];
}
