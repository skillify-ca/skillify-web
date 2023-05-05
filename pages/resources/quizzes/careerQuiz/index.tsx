import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import CareerResults from "../../../../components/resources/quizzes/careerQuiz/CareerResults";
import EduBackground from "../../../../components/resources/quizzes/careerQuiz/EduBackground";
import BluePrint from "../../../../components/resources/quizzes/shared/BluePrint";
import SkillSelections from "../../../../components/resources/quizzes/shared/SkillSelections";
import StartQuiz from "../../../../components/resources/quizzes/shared/StartQuiz";
import {
  QuizOptionViewState,
  QuizViewState,
} from "../../../../components/resources/quizzes/shared/types";
import QuizTransition from "../../../../components/ui/animations/QuizTransition";
import { INSERT_CAREER_QUIZ_RESPONSE } from "../../../../graphql/quizzes/insertCareer";
import { UPDATE_CAREER_QUIZ_RESPONSE } from "../../../../graphql/quizzes/updateCareer";
import { UPDATE_CAREER_QUIZ_EDUCATION_RESPONSE } from "../../../../graphql/quizzes/updateCareerEducation";
import { quizData } from "../../../api/studentPortal/quizzes/careerQuiz/careerQuiz";
import ComputeCareerResult from "../../../api/studentPortal/quizzes/careerQuiz/computeCareerResults";

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

export enum Stage {
  START,
  EDUCATION,
  QUESTIONS,
  BLUEPRINT,
  RESULTS,
}

export type EducationState = {
  degree: string;
  institution: string;
  education: string;
  experience: string;
};
const CareerQuiz = () => {
  const [educationState, setEducationState] = useState<EducationState>({
    degree: "",
    institution: "",
    education: "",
    experience: "",
  });

  // create results state object that
  // create custom type -- based on schema type in database
  const [stage, setStage] = useState<Stage>(Stage.START);
  const [quizResponseId, setQuizResponseId] = useState<number>();
  const [triggerAnimation, setTriggerAnimation] = useState(true);
  const [quizViewState, setQuizViewState] = useState<QuizViewState>(
    initializeQuizViewState
  );
  const [createQuizResponse] = useMutation(INSERT_CAREER_QUIZ_RESPONSE, {
    onCompleted: (data) => {
      if (!quizResponseId) {
        setQuizResponseId(parseInt(data.insert_career_quiz.returning[0].id));
      }
    },
  });
  const [saveEducationInputs] = useMutation(
    UPDATE_CAREER_QUIZ_EDUCATION_RESPONSE
  );
  const [saveCompletedUserPreferences] = useMutation(
    UPDATE_CAREER_QUIZ_RESPONSE
  );

  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
  });
  const handleQuizResponseMutations = (
    quizViewState: QuizViewState
    // result: string
  ) => {
    if (stage === Stage.START) {
      createQuizResponse({
        variables: { name: userInput.name, email: userInput.email },
      });
    } else if (stage === Stage.EDUCATION) {
      saveEducationInputs({
        variables: {
          id: quizResponseId,
          degree: educationState.degree,
          institution: educationState.institution,
          experience: educationState.experience,
          education: educationState.education,
        },
      });
    } else {
      const result = ComputeCareerResult(quizViewState)[0];
      const finalResponseObject = {
        id: quizResponseId || 0,
        industries: quizViewState.questions[0].options
          .filter((option) => option.isSelected)
          .map((option) => option.name),
        skills: quizViewState.questions[1].options
          .filter((option) => option.isSelected)
          .map((option) => option.name),
        tasks: quizViewState.questions[2].options
          .filter((option) => option.isSelected)
          .map((option) => option.name),
        result: result,
      };
      saveCompletedUserPreferences({
        variables: finalResponseObject,
      });
    }
  };

  const handleNextClick = () => {
    setTriggerAnimation(false);

    handleQuizResponseMutations(quizViewState);
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
    setTriggerAnimation(false);
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
  // Smoothly load the page
  if (initializeQuizViewState == undefined) {
    return "loading...";
  }
  // Render the appropriate component based on the stage

  switch (stage) {
    case Stage.START:
      return (
        <QuizTransition
          triggerAnimation={triggerAnimation}
          setTriggerAnimation={setTriggerAnimation}
        >
          <StartQuiz
            onNextClick={handleNextClick}
            title={"Career in Tech Personality Quiz"}
            body={
              "Take this free quiz to find out what jobs in tech fit you best!"
            }
            setUserInput={setUserInput}
            userInput={userInput}
          />
        </QuizTransition>
      );
    case Stage.EDUCATION:
      return (
        <QuizTransition
          triggerAnimation={triggerAnimation}
          setTriggerAnimation={setTriggerAnimation}
        >
          {triggerAnimation && (
            <EduBackground
              onNextClick={handleNextClick}
              onBackClick={handleBackClick}
              setEducationState={setEducationState}
              educationState={educationState}
            />
          )}
        </QuizTransition>
      );

    case Stage.QUESTIONS:
      return (
        <QuizTransition
          triggerAnimation={triggerAnimation}
          setTriggerAnimation={setTriggerAnimation}
        >
          {triggerAnimation && (
            <SkillSelections
              onNextClick={handleNextClick}
              onBackClick={handleBackClick}
              handleOptionClick={handleOptionClick}
              quizViewState={quizViewState}
            />
          )}
        </QuizTransition>
      );

    case Stage.BLUEPRINT:
      return (
        <QuizTransition
          triggerAnimation={triggerAnimation}
          setTriggerAnimation={setTriggerAnimation}
        >
          {!triggerAnimation && (
            <BluePrint
              onNextClick={handleNextClick}
              onBackClick={handleBackClick}
            />
          )}
        </QuizTransition>
      );
    case Stage.RESULTS:
      return (
        <QuizTransition
          triggerAnimation={triggerAnimation}
          setTriggerAnimation={setTriggerAnimation}
        >
          {!triggerAnimation && (
            <CareerResults
              onBackClick={handleBackClick}
              quizViewState={quizViewState}
            />
          )}
        </QuizTransition>
      );
    default:
      return (
        <QuizTransition
          triggerAnimation={triggerAnimation}
          setTriggerAnimation={setTriggerAnimation}
        >
          {!triggerAnimation && (
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
};

export default CareerQuiz;

function getLayout(page: React.ReactNode) {
  return <div>{page}</div>;
}

CareerQuiz.getLayout = getLayout;
