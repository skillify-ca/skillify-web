import { useState } from "react";
import BluePrint from "../../../components/quizzes/langQuiz/BluePrint";
import LangResults from "../../../components/quizzes/langQuiz/LangResults";
import Skills from "../../../components/quizzes/langQuiz/SkillSelections";
import StartQuiz from "../../../components/quizzes/langQuiz/StartQuiz";
import Tasks from "../../../components/quizzes/langQuiz/Tasks";

export enum Stage {
  START,
  LEARNCODING,
  SKILLS,
  TASKS,
  BLUEPRINT,
  RESULTS,
}
const LangQuiz = () => {
  // create results state object that
  // create custom type -- based on schema type in database
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
        return (
          <LangResults
            onNextClick={handleNextClick}
            onBackClick={handleBackClick}
          />
        );
      default:
        return null;
    }
  };
  return <div>{renderStage()}</div>;
};
export default LangQuiz;
LangQuiz.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
