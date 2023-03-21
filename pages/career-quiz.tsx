import React, { useState } from "react";
import CareerResults from "../components/quizzes/careerQuiz/CareerResults";
import EduBackground from "../components/quizzes/careerQuiz/EduBackground";
import Industries from "../components/quizzes/careerQuiz/Industries";
import Skills from "../components/quizzes/careerQuiz/Skills";
import Tasks from "../components/quizzes/careerQuiz/Tasks";
import BluePrint from "../components/quizzes/shared/BluePrint";
import StartQuiz from "../components/quizzes/shared/StartQuiz";

enum Stage {
  START,
  EDUCATION,
  INDUSTRIES,
  SKILLS,
  TASKS,
  BLUEPRINT,
  RESULTS,
}

const CareerQuiz = () => {
  // create results state object that
  // create custom type -- based on schema type in database
  const [stage, setStage] = useState<Stage>(Stage.START);

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
        return (
          <StartQuiz
            onNextClick={handleNextClick}
            title={"Career in Tech Personality Quiz"}
            body={
              "Take this free quiz to find out what jobs in tech fit you best!"
            }
          />
        );
      case Stage.EDUCATION:
        return (
          <EduBackground
            onNextClick={handleNextClick}
            onBackClick={handleBackClick}
          />
        );
      case Stage.INDUSTRIES:
        return (
          <Industries
            onNextClick={handleNextClick}
            onBackClick={handleBackClick}
          />
        );
      case Stage.SKILLS:
        return (
          <Skills onNextClick={handleNextClick} onBackClick={handleBackClick} />
        );
      case Stage.TASKS:
        return (
          <Tasks onNextClick={handleNextClick} onBackClick={handleBackClick} />
        );
      case Stage.BLUEPRINT:
        return (
          <BluePrint
            onNextClick={handleNextClick}
            onBackClick={handleBackClick}
          />
        );
      case Stage.RESULTS:
        return <CareerResults onBackClick={handleBackClick} />;
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
