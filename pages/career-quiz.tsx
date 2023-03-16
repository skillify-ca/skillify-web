import React, { useState } from "react";
import EduBackground from "../components/quizzes/careerQuiz/EduBackground";
import StartQuiz from "../components/quizzes/careerQuiz/StartQuiz";

export type CareerQuizPRops = {
  start: string;
  education: string;
  industries: string;
};
enum Stage {
  START,
  EDUCATION,
  INDUSTRIES,
}

const CareerQuiz = ({ start, education, industries }: CareerQuizPRops) => {
  const [stage, setStage] = useState(Stage.START);

  const handleNextClick = () => {
    setStage((prevStage) => prevStage + 1);
  };
  const handleBackClick = () => {
    setStage((prevStage) => prevStage - 1);
  };

  // Render the appropriate component based on the stage
  const renderStage = () => {
    switch (stage) {
      case Stage.START:
        return <StartQuiz onNextClick={handleNextClick} />;
      case Stage.EDUCATION:
        return <EduBackground />;
      case Stage.INDUSTRIES:
        return <div>{industries}</div>;
      default:
        return null;
    }
  };

  return <div>{renderStage()}</div>;
};

export default CareerQuiz;
CareerQuiz.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
