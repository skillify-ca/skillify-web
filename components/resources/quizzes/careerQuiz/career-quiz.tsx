import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { UPSERT_CAREER_QUIZ_RESPONSE } from "../../../../graphql/quizzes/insertCareer";
import { quizData } from "../../../../pages/api/studentPortal/quizzes/careerQuiz";
import { QuizTransition } from "../../../ui/animations/QuizTransition";
import BluePrint from "../shared/BluePrint";
import SkillSelections from "../shared/SkillSelections";
import StartQuiz from "../shared/StartQuiz";
import { QuizOptionViewState, QuizViewState } from "../shared/types";
import CareerResults from "./CareerResults";
import EduBackground, { EducationLevel } from "./EduBackground";
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
export enum Stage {
  START,
  EDUCATION,
  QUESTIONS,
  BLUEPRINT,
  RESULTS,
}
const CareerQuiz = () => {
  const [name, setName] = useState<string>("");

  const [degree, setDegree] = useState<string>("");
  const [institution, setInstitution] = useState<string>("");

  const [education, setEducation] = useState<EducationLevel | null>(null);
  const [experience, setExperience] = useState<string>();

  // create results state object that
  // create custom type -- based on schema type in database
  const [stage, setStage] = useState<Stage>(Stage.START);
  const [quizResponseId, setQuizResponseId] = useState<number>();

  const [triggerAnimation, setTriggerAnimation] = useState(true);
  const [quizViewState, setQuizViewState] = useState<QuizViewState>(
    initializeQuizViewState
  );
  const [saveUserPreferences] = useMutation(UPSERT_CAREER_QUIZ_RESPONSE);

  const [saveUserInputs] = useMutation(UPSERT_CAREER_QUIZ_RESPONSE, {
    onCompleted: (data) => {
      if (!quizResponseId) {
        setQuizResponseId(parseInt(data.insert_career_quiz.returning[0].id));
      }
    },
  });

  const handleUserInputMutations = (userInput: {
    name: string;
    email: string;
  }) => {
    saveUserInputs({ variables: { objects: userInput } });
  };
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
  });
  const handleQuizResponseMutations = (
    quizViewState: QuizViewState,
    result: string
  ) => {
    const finalResponseObject = [
      {
        name: userInput.name,
        email: userInput.email,
        degree: degree,
        institution: institution,
        id: quizResponseId,
        experience: experience,
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
    }, 250); // adjust the delay time based on the animation duration
  };
  const handleBackClick = () => {
    setTriggerAnimation(false);
    setTimeout(() => {
      if (stage == Stage.QUESTIONS && quizViewState.currentQuestion > 0) {
        setQuizViewState({
          ...quizViewState,
          currentQuestion: quizViewState.currentQuestion - 1,
        });
      } else setStage((prevStage) => prevStage - 1);
      setTriggerAnimation(true);
    }, 250); // adjust the delay time based on the animation duration
  };

  const handleOptionClick = (option: QuizOptionViewState) => {
    const currentQuestion =
      quizViewState.questions[quizViewState.currentQuestion];
    const selectedOptions = currentQuestion.options.filter(
      (option) => option.isSelected
    );
    const maxSelection =
      quizData.questions[quizViewState.currentQuestion].maxSelections;

    if (maxSelection === 1) {
      // Set all other options to false and set the selected option to true
      const selectedQuizOption = quizViewState.questions.map((question) => ({
        ...question,
        options: question.options.map((questionOption) =>
          questionOption === option
            ? { ...questionOption, isSelected: true }
            : { ...questionOption, isSelected: false }
        ),
      }));

      const updatedQuizViewState = {
        ...quizViewState,
        questions: selectedQuizOption,
      };
      setQuizViewState(updatedQuizViewState);
      return;
    } else if (
      maxSelection &&
      selectedOptions.length >= maxSelection &&
      !option.isSelected
    ) {
      // Do nothing if the maximum number of options has already been selected and the clicked option is not already selected
      return;
    } else {
      // Toggle the selected state of the clicked option
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
    }
  };

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  // Render the appropriate component based on the stage

  return (
    <QuizTransition triggerAnimation={triggerAnimation}>
      {(() => {
        switch (stage) {
          case Stage.START:
            return (
              <StartQuiz
                onNextClick={handleNextClick}
                title={"Career in Tech Personality Quiz"}
                body={
                  "Take this free quiz to find out what jobs in tech fit you best!"
                }
                handleUserInputMutations={handleUserInputMutations}
                setUserInput={setUserInput}
                userInput={userInput}
              />
            );
          case Stage.EDUCATION:
            return (
              <EduBackground
                onNextClick={handleNextClick}
                onBackClick={handleBackClick}
                setInstitution={setInstitution}
                setDegree={setDegree}
                setExperience={setExperience}
                setEducation={setEducation}
                selectedEducationLevel={education}
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
            return <CareerResults onBackClick={handleBackClick} />;
          default:
            return null;
        }
      })()}
    </QuizTransition>
  );
};

export default CareerQuiz;
