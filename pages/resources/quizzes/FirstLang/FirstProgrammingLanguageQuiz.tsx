import { useEffect, useState } from "react";
import LanguageResults from "../../../../components/resources/quizzes/langQuiz/LanguageResults";
import BluePrint from "../../../../components/resources/quizzes/shared/BluePrint";
import SkillSelections from "../../../../components/resources/quizzes/shared/SkillSelections";
import StartQuiz from "../../../../components/resources/quizzes/shared/StartQuiz";
import {
  QuizOptionViewState,
  QuizViewState,
} from "../../../../components/resources/quizzes/shared/types";
import { quizData } from "../../../api/studentPortal/quizzes/firstProgrammingLanguage";
import { computeScore } from "../../../api/studentPortal/quizzes/scoringLogicFPL/computeScore";

export enum Stage {
  START,
  QUESTIONS,
  BLUEPRINT,
  RESULTS,
}

const initializeQuizViewState = {
  title: quizData.title,
  body: quizData.body,
  questions: quizData.questions.map((question) => {
    return {
      title: question.title,
      body: question.body,
      options: question.options.map((option) => {
        return { ...option, isSelected: false };
      }),
    };
  }),
  currentQuestion: 0,
  progress: 0,
};

const FirstProgrammingLanguageQuiz = () => {
  const [stage, setStage] = useState(Stage.START);
  const [quizViewState, setQuizViewState] = useState<QuizViewState>(
    initializeQuizViewState
  );

  const [score, setScore] = useState({
    JavaScript: 0,
    "HTML/CSS": 0,
    Python: 0,
  });

  //utilized to compute scores
  useEffect(() => {
    if (quizViewState) {
      setScore(computeScore(quizViewState));
    }
  }, [quizViewState]);

  const handleNextClick = () => {
    if (
      stage == Stage.QUESTIONS &&
      quizViewState.currentQuestion < quizData.questions.length - 1
    ) {
      setQuizViewState({
        ...quizViewState,
        currentQuestion: quizViewState.currentQuestion + 1,
      });
    } else setStage((prevStage) => prevStage + 1);
  };

  const handleBackClick = () => {
    if (stage == Stage.QUESTIONS && quizViewState.currentQuestion > 0) {
      setQuizViewState({
        ...quizViewState,
        currentQuestion: quizViewState.currentQuestion - 1,
      });
    } else setStage((prevStage) => prevStage - 1);
  };

  const handleOptionClick = (option: QuizOptionViewState) => {
    const selectedQuizOption = quizViewState.questions.map((question) => ({
      ...question,
      options: question.options.map((questionOption) =>
        questionOption.name === option.name
          ? {
              ...questionOption,
              isSelected: questionOption.isSelected ? false : true,
            }
          : questionOption
      ),
    }));

    const updatedQuizViewState = {
      ...quizViewState,
      questions: selectedQuizOption,
    };
    setQuizViewState(updatedQuizViewState);
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
        return <LanguageResults onBackClick={handleBackClick} score={score} />;
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
