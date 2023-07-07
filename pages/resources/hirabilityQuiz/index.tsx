import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";

export default function HirabilityQuizPage() {
  return <div>Quiz</div>;
}

HirabilityQuizPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
