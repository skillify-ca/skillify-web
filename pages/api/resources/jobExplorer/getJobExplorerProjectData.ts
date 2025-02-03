import { aiEngineerProjectData } from "./aiEngineer/projectData";
import { cyberSecurityAnalystProjectData } from "./cyberSecurityAnalyst/projectData";
import { devOpsEngineerProjectData } from "./devOpsEngineer/projectData";
import { digitalMarketerProjectData } from "./digitalMarketer/projectData";
import { productManagerProjectData } from "./productManager/projectData";
import { uxDesignerProjectData } from "./uxDesigner/projectData";

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
  uxDesignerProject: uxDesignerProjectData,
  digitalMarketerProject: digitalMarketerProjectData, 
  productManagerProject:productManagerProjectData,
  cyberSecurityProject: cyberSecurityAnalystProjectData,
  aiEngineerProject: aiEngineerProjectData,
};

export function getJobExplorerProjectData(
  slug: string
): JobExplorerProjectData | undefined {
  return projectsDataMap[slug];
}
