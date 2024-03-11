import React from "react";
const DevOpsProject = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">DevOps Engineering Project</h2>
      <p className="text-gray-800">
        The goal of this project is to demonstrate your skills in implementing and managing a DevOps pipeline for a software project. You will set up an automated and efficient development workflow, focusing on collaboration, testing, and continuous integration/continuous deployment (CI/CD).
      </p>
      <p className="text-gray-800 mt-2">
        Follow the objectives and requirements mentioned below to complete the project within 8 weeks.
      </p>
      <h3 className="text-xl font-bold mt-4">Project Objectives:</h3>
      <ul className="list-disc list-inside text-gray-800 pl-4">
        <li>Set up version control using Git and a collaborative repository management platform (e.g., GitHub, GitLab).</li>
        <li>Implement an automated CI/CD pipeline for building, testing, and deploying the software.</li>
        <li>Integrate automated testing and code quality checks into the CI/CD pipeline.</li>
        <li>Configure infrastructure as code (IaC) using tools like Terraform or CloudFormation.</li>
        <li>Deploy and manage the application in a cloud environment (e.g., AWS, Azure, GCP).</li>
        <li>Implement monitoring and logging to ensure the health and performance of the application.</li>
        <li>Implement security best practices to protect the infrastructure and application.</li>
        <li>Document the entire DevOps pipeline and provide clear setup instructions.</li>
      </ul>
      <h3 className="text-xl font-bold mt-4">Requirements:</h3>
      <ul className="list-disc list-inside text-gray-800 pl-4">
        <li>Strong understanding of CI/CD principles and experience with CI/CD tools (e.g., Jenkins, CircleCI).</li>
        <li>Proficiency in using infrastructure as code tools like Terraform or CloudFormation.</li>
        <li>Experience with containerization and container orchestration (Docker, Kubernetes).</li>
        <li>Knowledge of cloud platforms and services (e.g., AWS, Azure, GCP).</li>
        <li>Familiarity with automated testing frameworks and code quality tools.</li>
        <li>Ability to configure and manage monitoring and logging solutions.</li>
        <li>Understanding of security best practices for DevOps pipelines and deployments.</li>
        <li>Experience in setting up and managing development environments.</li>
      </ul>

      <div className="mt-6">
        <h3 className="text-xl font-bold">Submission</h3>
        <p className="text-gray-800 mt-2">
          To submit your assignment, create a GitHub repository for your DevOps project and share the link with us.
        </p>
        <p className="text-gray-800 mt-2">
          Your repository should include all the necessary configuration files, scripts, and documentation to set up and run the entire DevOps pipeline.
        </p>
      </div>
    </div>
  );
};

export default DevOpsProject;
