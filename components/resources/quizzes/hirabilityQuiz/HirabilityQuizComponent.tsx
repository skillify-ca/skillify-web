import React, { useState } from "react";
import HireabilityResults from "../../../../components/resources/quizzes/hirabilityQuiz/HireabilityResults";
import SkillSelections from "../../../../components/resources/quizzes/shared/SkillSelections";
import StartQuiz from "../../../../components/resources/quizzes/shared/StartQuiz";
import {
  QuizOptionViewState,
  QuizViewState,
} from "../../../../components/resources/quizzes/shared/types";
import QuizTransition from "../../../../components/ui/animations/QuizTransition";
import { quizData } from "../../../../pages/api/studentPortal/quizzes/hireabilityQuiz/hireabilityQuiz";

export enum Stage {
  START,
  QUESTIONS,
  RESULTS,
}
const initializeQuizViewState = {
  title: quizData.title,
  body: quizData.body,
  questions: quizData.questions.map((question) => {
    return {
      title: question.title,
      body: question.body,
      maxSelections: question.maxSelections,

      options: question.options.map((option) => {
        return { ...option, isSelected: false };
      }),
    };
  }),
  currentQuestion: 0,
  progress: 0,
};
export default function HireabilityQuiz() {
  const [stage, setStage] = useState<Stage>(Stage.START);
  const [animationComplete, setAnimationComplete] = useState(true);
  const [quizViewState, setQuizViewState] = useState<QuizViewState>(
    initializeQuizViewState
  );

  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
  });

  const handleNextClick = () => {
    setAnimationComplete(false);

    if (
      stage == Stage.QUESTIONS &&
      quizViewState.currentQuestion < quizData.questions.length - 1
    ) {
      setQuizViewState({
        ...quizViewState,
        currentQuestion: quizViewState.currentQuestion + 1,
      });
    } else setStage((prevStage) => prevStage + 1);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleBackClick = () => {
    setAnimationComplete(false);
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

  // Render the appropriate component based on the stage
  switch (stage) {
    case Stage.START:
      return (
        <QuizTransition
          animationComplete={animationComplete}
          setAnimationComplete={setAnimationComplete}
        >
          {animationComplete && (
            <StartQuiz
              onNextClick={handleNextClick}
              title={quizData.title}
              body={quizData.body}
              setUserInput={setUserInput}
              userInput={userInput}
            />
          )}
        </QuizTransition>
      );

    case Stage.QUESTIONS:
      return (
        <QuizTransition
          animationComplete={animationComplete}
          setAnimationComplete={setAnimationComplete}
        >
          {animationComplete && (
            <SkillSelections
              onNextClick={handleNextClick}
              onBackClick={handleBackClick}
              handleOptionClick={handleOptionClick}
              quizViewState={quizViewState}
            />
          )}
        </QuizTransition>
      );

    case Stage.RESULTS:
      return (
        <QuizTransition
          animationComplete={animationComplete}
          setAnimationComplete={setAnimationComplete}
        >
          {animationComplete && (
            <HireabilityResults
              onBackClick={handleBackClick}
              quizViewState={quizViewState}
            />
          )}
        </QuizTransition>
      );
    default:
      return (
        <QuizTransition
          animationComplete={animationComplete}
          setAnimationComplete={setAnimationComplete}
        >
          {animationComplete && (
            <StartQuiz
              onNextClick={handleNextClick}
              title={"Career in Tech Personality Quiz"}
              body={
                "Take this free quiz to find out what jobs in tech fit you best!"
              }
              setUserInput={setUserInput}
              userInput={userInput}
            />
          )}
        </QuizTransition>
      );
  }
}

function getLayout(page: React.ReactNode) {
  return <div>{page}</div>;
}

HireabilityQuiz.getLayout = getLayout;
