import React, { useState } from "react";
import LangResults from "../../../../components/resources/quizzes/langQuiz/LangResults";
import BluePrint from "../../../../components/resources/quizzes/shared/BluePrint";
import SkillSelections, {
  QuizOptionViewState,
  QuizViewState,
} from "../../../../components/resources/quizzes/shared/SkillSelections";
import StartQuiz from "../../../../components/resources/quizzes/shared/StartQuiz";
import { quizData } from "../../../api/studentPortal/quizzes/firstProgrammingLanguage";

export enum Stage {
  START,
  QUESTIONS,
  BLUEPRINT,
  RESULTS,
}

const FirstProgrammingLanguageQuiz = () => {
  const [stage, setStage] = useState(Stage.START);
  const [quizViewState, setQuizViewState] = useState<QuizViewState>();

  // TODO useEffect hook to read the initial quiz data and create your initial view state

  const handleNextClick = () => {
    // TODO handle differently for the QUESTIONS stage
    // TODO know when to move on to the blueprint stage
    setStage((prevStage) => prevStage + 1);
  };
  const handleBackClick = () => {
    setStage((prevStage) => prevStage - 1);
  };

  const handleOptionClick = (option: QuizOptionViewState) => {
    // TODO create a new quizViewState and then call setQuizViewState
    console.log(option, quizViewState);
    // TODO generate a new quiz state based off the old state plus the clicked option
  };

  const renderStage = () => {
    switch (stage) {
      case Stage.START:
        return (
          <StartQuiz
            onNextClick={handleNextClick}
            title={quizData.title}
            body={quizData.body}
          />
        );
      case Stage.QUESTIONS:
        return (
          <SkillSelections
            onNextClick={handleNextClick}
            onBackClick={handleBackClick}
            handleOptionClick={handleOptionClick}
            quizViewState={quizViewState}
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
  return (
    <>
      <div>{renderStage()}</div>
    </>
  );
};

export default FirstProgrammingLanguageQuiz;
FirstProgrammingLanguageQuiz.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
