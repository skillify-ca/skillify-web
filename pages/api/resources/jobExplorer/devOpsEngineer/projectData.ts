import { formatList } from "../formatList";

const title = "DevOps Engineering Project";

const goal =
  "The goal of this project is to demonstrate your skills in implementing and managing a DevOps pipeline for a software project. You will set up an automated and efficient development workflow, focusing on collaboration, testing, and continuous integration/continuous deployment (CI/CD).";

const objectives = [
  "Set up version control using Git and a collaborative repository management platform (e.g., GitHub, GitLab).",
  "Implement an automated CI/CD pipeline for building, testing, and deploying the software.",
  "Integrate automated testing and code quality checks into the CI/CD pipeline.",
  "Configure infrastructure as code (IaC) using tools like Terraform or CloudFormation.",
  "Deploy and manage the application in a cloud environment (e.g., AWS, Azure, GCP).",
  "Implement monitoring and logging to ensure the health and performance of the application.",
  "Implement security best practices to protect the infrastructure and application.",
  "Document the entire DevOps pipeline and provide clear setup instructions.",
];

const requirements = [
  "Strong understanding of CI/CD principles and experience with CI/CD tools (e.g., Jenkins, CircleCI).",
  "Proficiency in using infrastructure as code tools like Terraform or CloudFormation.",
  "Experience with containerization and container orchestration (Docker, Kubernetes).",
  "Knowledge of cloud platforms and services (e.g., AWS, Azure, GCP).",
  "Familiarity with automated testing frameworks and code quality tools.",
  "Ability to configure and manage monitoring and logging solutions.",
  "Understanding of security best practices for DevOps pipelines and deployments.",
  "Experience in setting up and managing development environments.",
];

const estimatedTime = "8 weeks";

const submissionRequirements = formatList([
  "Create a GitHub repository for your DevOps project",
  "document your devops progress in a README.md file",
  "please submit the link to the to complete the project",

]);

export const devOpsEngineerProjectData = {
  title,
  goal,
  objectives,
  requirements,
  estimatedTime,
  submissionRequirements,
};
