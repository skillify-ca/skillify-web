import React from "react";
import LandingNavbar from "../../../../components/landingPage/LandingNavbar";
import CreateFeedbackRequestComponent from "../../../../components/resources/projectFeedback/createFeedbackRequestComponent";

export default function CreateRequest() {
  return <CreateFeedbackRequestComponent />;
}

CreateRequest.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
