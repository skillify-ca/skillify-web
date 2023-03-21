import { useState } from "react";
import LangResults from "../../../components/quizzes/langQuiz/LangResults";
import BluePrint from "../../../components/quizzes/shared/BluePrint";
import SkillSelections from "../../../components/quizzes/shared/SkillSelections";
import StartQuiz from "../../../components/quizzes/shared/StartQuiz";

export enum Stage {
  START,
  LEARNCODING,
  WORKFIELDS,
  BUILDTARGET,
  BLUEPRINT,
  RESULTS,
}
const LangQuiz = () => {
  const quizQuestions = [
    [
      "Learn an in-demand skill",
      "Work in tech",
      "Build programs for fun",
      "I run a startup",
      "Become a professional developer",
      "Communicate better with technical coworkers",
      "Start a side hustle",
    ],
    [
      "Front end development",
      "Back end development",
      "Game development",
      "Mobile development",
      "Data analytics",
      "Product management",
      "Digital marketing",
      "UX/UI design",
      "I don't know / Not sure yet",
    ],
    [
      "Websites",
      "Storefront",
      "Mobile apps",
      "Games",
      "Email",
      "Tools to automate your life",
      "I don't know / Not sure yet",
    ],
  ];
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
        return (
          <StartQuiz
            onNextClick={handleNextClick}
            title={"What Coding Language Should I Learn First?"}
            body={
              "Take this free quiz to find out what coding language you should learn first."
            }
          />
        );
      case Stage.LEARNCODING:
        return (
          <SkillSelections
            onNextClick={handleNextClick}
            onBackClick={handleBackClick}
            title={"Why do you want to learn coding?"}
            body={"Select all that apply."}
            progress={20}
            selections={quizQuestions[0]}
          />
        );
      case Stage.WORKFIELDS:
        return (
          <SkillSelections
            onNextClick={handleNextClick}
            onBackClick={handleBackClick}
            title={"What field of work are you interested in?"}
            body={"Select 1-3 choices."}
            progress={50}
            selections={quizQuestions[1]}
          />
        );
      case Stage.BUILDTARGET:
        return (
          <SkillSelections
            onNextClick={handleNextClick}
            onBackClick={handleBackClick}
            title={"What are you interested in building?"}
            body={"Select all that apply."}
            progress={80}
            selections={quizQuestions[2]}
          />
        );
      case Stage.BLUEPRINT:
        return (
          <BluePrint
            onNextClick={handleNextClick}
            onBackClick={handleBackClick}
          />
        );
      case Stage.RESULTS:
        return <LangResults onBackClick={handleBackClick} />;
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
