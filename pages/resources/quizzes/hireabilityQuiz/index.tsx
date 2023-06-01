import React, { useEffect, useState } from "react";
import EngineerSelection from "../../../../components/resources/quizzes/hirabilityQuiz/EngineerSelection";
import HireabilityResults from "../../../../components/resources/quizzes/hirabilityQuiz/HireabilityResults";
import SkillSelections from "../../../../components/resources/quizzes/shared/SkillSelections";
import StartQuiz from "../../../../components/resources/quizzes/shared/StartQuiz";
import {
  QuizOptionViewState,
  QuizViewState,
} from "../../../../components/resources/quizzes/shared/types";
import QuizTransition from "../../../../components/ui/animations/QuizTransition";
import { quizData } from "../../../api/studentPortal/quizzes/hireabilityQuiz/hireabilityQuizEngineer";

export enum Stage {
  START,
  ENGINEERING,
  QUESTIONS,
  RESULTS,
}

export default function HireabilityQuiz() {
  const [selectedQuizData, setSelectedQuizData] = useState(quizData);
  const initializeQuizViewState = {
    title: selectedQuizData.title,
    body: selectedQuizData.body,
    questions: selectedQuizData.questions.map((question) => {
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
  useEffect(() => {
    const initializeQuizViewState = {
      title: selectedQuizData.title,
      body: selectedQuizData.body,
      questions: selectedQuizData.questions.map((question) => {
        return {
          title: question.title,
          body: question.body,
          maxSelections: question.maxSelections,

          options: question.options,
        };
      }),
      currentQuestion: 0,
      progress: 0,
    };
    setQuizViewState(initializeQuizViewState);
  }, [selectedQuizData]);
  const [stage, setStage] = useState<Stage>(Stage.START);
  const [animationComplete, setAnimationComplete] = useState(true);
  const [quizViewState, setQuizViewState] = useState<QuizViewState>(
    initializeQuizViewState
  );
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
  });
  useEffect(() => {
    if (selectedQuizData != quizData && stage === Stage.ENGINEERING) {
      setStage(Stage.QUESTIONS);
    }
  });
  const handleNextClick = () => {
    setAnimationComplete(false);

    if (
      stage == Stage.QUESTIONS &&
      quizViewState.currentQuestion < quizViewState.questions.length - 1
    ) {
      setQuizViewState({
        ...quizViewState,
        currentQuestion: quizViewState.currentQuestion + 1,
      });
    } else if (stage == Stage.START) {
      setSelectedQuizData(quizData);
      setStage(Stage.ENGINEERING);
    } else setStage((prevStage) => prevStage + 1);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleBackClick = () => {
    setAnimationComplete(false);
    if (stage === Stage.QUESTIONS && quizViewState.currentQuestion == 0) {
      setStage(Stage.START);
    } else if (stage == Stage.QUESTIONS && quizViewState.currentQuestion > 0) {
      setQuizViewState({
        ...quizViewState,
        currentQuestion: quizViewState.currentQuestion - 1,
      });
    } else setStage((prevStage) => prevStage - 1);
  };

  const handleOptionClick = (option: QuizOptionViewState) => {
    const initializeQuizViewState = {
      title: selectedQuizData.title,
      body: selectedQuizData.body,
      questions: selectedQuizData.questions.map((question) => {
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
    setQuizViewState(initializeQuizViewState);
    setQuizViewState((prevQuizViewState) => {
      const selectedQuizOption = prevQuizViewState.questions.map(
        (question) => ({
          ...question,
          options: question.options.map(
            (questionOption) =>
              questionOption.name === option.name
                ? {
                    ...questionOption,
                    isSelected: !questionOption.isSelected,
                  }
                : questionOption
            // alert("selected option")
          ),
        })
      );

      return {
        ...prevQuizViewState,
        questions: selectedQuizOption,
      };
    });
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
    case Stage.ENGINEERING:
      return (
        <QuizTransition
          animationComplete={animationComplete}
          setAnimationComplete={setAnimationComplete}
        >
          {animationComplete && (
            <EngineerSelection
              setSelectedQuizData={setSelectedQuizData}
              onNextClick={handleNextClick}
              onBackClick={handleBackClick}
              handleOptionClick={handleOptionClick}
              quizViewState={quizViewState}
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
            <EngineerSelection
              setSelectedQuizData={setSelectedQuizData}
              onNextClick={handleNextClick}
              onBackClick={handleBackClick}
              handleOptionClick={handleOptionClick}
              quizViewState={quizViewState}
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
