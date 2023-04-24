import { useMutation } from "@apollo/client/react/hooks/useMutation";
import React, { useState } from "react";
import LanguageResults from "../../../../components/resources/quizzes/firstProgrammingLanguageQuiz/LanguageResults";
import BluePrint from "../../../../components/resources/quizzes/shared/BluePrint";
import SkillSelections from "../../../../components/resources/quizzes/shared/SkillSelections";
import StartQuiz from "../../../../components/resources/quizzes/shared/StartQuiz";
import {
  QuizOptionViewState,
  QuizViewState,
} from "../../../../components/resources/quizzes/shared/types";
import QuizTransition from "../../../../components/ui/animations/QuizTransition";
import { UPSERT_CODING_LANGUAGE_QUIZ_RESPONSE } from "../../../../graphql/quizzes/upsertCodingLanguageQuiz";
import { quizData } from "../../../api/studentPortal/quizzes/firstProgrammingLanguage";

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
  const [quizResponseId, setQuizResponseId] = useState<number>();
  const [quizViewState, setQuizViewState] = useState<QuizViewState>(
    initializeQuizViewState
  );
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
  });

  const [triggerAnimation, setTriggerAnimation] = useState(true);

  const [saveUserPreferences] = useMutation(
    UPSERT_CODING_LANGUAGE_QUIZ_RESPONSE
  );

  const [saveUserInputs] = useMutation(UPSERT_CODING_LANGUAGE_QUIZ_RESPONSE, {
    onCompleted: (data) => {
      if (!quizResponseId) {
        setQuizResponseId(
          parseInt(data.insert_coding_language_quiz.returning[0].id)
        );
      }
    },
  });

  const handleUserInputMutations = (userInput: {
    name: string;
    email: string;
  }) => {
    saveUserInputs({ variables: { objects: userInput } });
  };

  const handleQuizResponseMutations = (
    quizViewState: QuizViewState,
    result: string
  ) => {
    const finalResponseObject = [
      {
        name: userInput.name,
        email: userInput.email,
        id: quizResponseId,
        reasons: quizViewState.questions[0].options
          .filter((option) => option.isSelected)
          .map((option) => option.name),
        fields: quizViewState.questions[1].options
          .filter((option) => option.isSelected)
          .map((option) => option.name),
        interests: quizViewState.questions[2].options
          .filter((option) => option.isSelected)
          .map((option) => option.name),
        result: result,
      },
    ];
    saveUserPreferences({ variables: { objects: finalResponseObject } });
  };

  const handleNextClick = () => {
    setTriggerAnimation(false);

    setTimeout(() => {
      setTriggerAnimation(true);
      if (
        stage == Stage.QUESTIONS &&
        quizViewState.currentQuestion < quizData.questions.length - 1
      ) {
        setQuizViewState({
          ...quizViewState,
          currentQuestion: quizViewState.currentQuestion + 1,
        });
      } else setStage((prevStage) => prevStage + 1);
    }, 200);
  };

  const handleBackClick = () => {
    setTriggerAnimation(false);

    setTimeout(() => {
      setTriggerAnimation(true);
      if (stage == Stage.QUESTIONS && quizViewState.currentQuestion > 0) {
        setQuizViewState({
          ...quizViewState,
          currentQuestion: quizViewState.currentQuestion - 1,
        });
      } else setStage((prevStage) => prevStage - 1);
    }, 200);
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
            handleUserInputMutations={handleUserInputMutations}
            setUserInput={setUserInput}
            userInput={userInput}
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
            handleQuizResponseMutations={handleQuizResponseMutations}
            quizViewState={quizViewState}
          />
        );
      case Stage.RESULTS:
        return (
          <LanguageResults
            onBackClick={handleBackClick}
            quizViewState={quizViewState}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <QuizTransition triggerAnimation={triggerAnimation}>
        {renderStage()}
      </QuizTransition>
    </>
  );
};

export default FirstProgrammingLanguageQuiz;

function getLayout(page: React.ReactNode) {
  return <div>{page}</div>;
}

FirstProgrammingLanguageQuiz.getLayout = getLayout;
