import { devOpsEngineerProjectData } from "./devOpsEngineer/projectData";

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
};

export function getJobExplorerProjectData(
  slug: string
): JobExplorerProjectData | undefined {
  return projectsDataMap[slug];
}
