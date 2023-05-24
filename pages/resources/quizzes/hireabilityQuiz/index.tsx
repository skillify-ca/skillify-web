import React from "react";
import LandingNavbar from "../../../../components/landingPage/LandingNavbar";
import HirabilityQuizComponent from "../../../../components/resources/quizzes/hirabilityQuiz/HirabilityQuizComponent";

export default function HirabilityQuizPage() {
  return (
    <div>
      <HirabilityQuizComponent />
    </div>
  );
}

HirabilityQuizPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
