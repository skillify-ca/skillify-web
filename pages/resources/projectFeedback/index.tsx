import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import ProjectFeedbackComponent from "../../../components/resources/projectFeedback/projectFeedbackComponent";

export default function ProjectFeedback() {
  return <ProjectFeedbackComponent />;
}

ProjectFeedback.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
