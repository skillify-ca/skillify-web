import React from "react";
import LandingNavbar from "../../../../components/landingPage/LandingNavbar";
import AddProjectComponent from "../../../../components/resources/sideProjectHub/addProjectComponent";

export default function AddProjectPage() {
  return <AddProjectComponent />;
}

AddProjectPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
