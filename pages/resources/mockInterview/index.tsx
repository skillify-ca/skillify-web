import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";

export default function MockInterviewPage() {
  return (
    <div>
      Quiz
    </div>
  );
}

MockInterviewPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};