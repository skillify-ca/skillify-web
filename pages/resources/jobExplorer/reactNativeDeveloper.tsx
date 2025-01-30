import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import JobExplorerJobComponent from "../../../components/resources/jobExplorer/JobExplorerJobComponent";
import { REACT_NATIVE_DEVELOPER_DATA } from "../../api/resources/jobExplorer/reactNativeDeveloper";

export default function ReactNativeAppDeveloperPage() {
  const { title, description, mandatorySkills, additionalSkills, project } =
    REACT_NATIVE_DEVELOPER_DATA;
  return (
    <div>
      <JobExplorerJobComponent
        title={title}
        description={description}
        mandatorySkills={mandatorySkills}
        additionalSkills={additionalSkills}
        project={project}
      />
    </div>
  );
}

ReactNativeAppDeveloperPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
