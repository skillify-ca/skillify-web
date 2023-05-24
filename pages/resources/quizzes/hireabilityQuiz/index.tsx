import React from "react";
import HirabilityQuizComponent from "../../../../components/resources/quizzes/hirabilityQuiz/HirabilityQuizComponent";

export default function HirabilityQuizPage() {
  return (
    <div>
      <HirabilityQuizComponent />
    </div>
  );
}

HirabilityQuizPage.getLayout = function getLayout(page) {
  return <div className="theme-default">{page}</div>;
};
