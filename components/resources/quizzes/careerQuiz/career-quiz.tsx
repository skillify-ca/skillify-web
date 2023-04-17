import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { INSERT_CAREER_QUIZ_RESPONSE } from "../../../../graphql/quizzes/insertCareer";
import { quizData } from "../../../../pages/api/studentPortal/quizzes/careerQuiz";
import { QuizTransition } from "../../../ui/animations/QuizTransition";
import BluePrint from "../shared/BluePrint";
import SkillSelections, {
  QuizOptionViewState,
  QuizViewState,
} from "../shared/SkillSelections";
import StartQuiz from "../shared/StartQuiz";
import CareerResults from "./CareerResults";
import EducationBackground from "./EducationBackground";

export enum Stage {
  START,
  EDUCATION,
  QUESTIONS,
  BLUEPRINT,
  RESULTS,
}
const CareerQuiz = () => {
  const [saveUserPreferences] = useMutation(INSERT_CAREER_QUIZ_RESPONSE, {});
  const exampleUserPreferences = [
    {
      degree: "Bachelor of Arts",
      institution: "University of Waterloo",
      name: "Angela",
      email: "example@example.com",
      industries: ["Advertising", "Design", "Fashion"],
      skills: ["Writing code", "Writing", "Math"],
      result: "Software Engineer",
      tasks: ["Find trends in data"],
    },
  ];
  // create results state object that
  // create custom type -- based on schema type in database
  const [stage, setStage] = useState<Stage>(Stage.START);
  const [triggerAnimation, setTriggerAnimation] = useState(true);
  const [quizViewState, setQuizViewState] = useState<QuizViewState>({
    title: quizData.title,
    body: quizData.body,
    questions: [],
    currentQuestion: 0,
    progress: 0,
  });

  useEffect(() => {
    const quizViewState = {
      title: quizData.title,
      body: quizData.body,
      questions: quizData.questions.map((question) => {
        return {
          title: question.title,
          body: question.body,
          options: question.options,
        };
      }),
      currentQuestion: 0,
      progress: quizData.questions.length,
    };

    setQuizViewState(quizViewState);
  }, []);

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
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
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
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
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
              />
            );
          case Stage.EDUCATION:
            return (
              <EducationBackground
                onNextClick={handleNextClick}
                onBackClick={handleBackClick}
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
            return <CareerResults onBackClick={handleBackClick} />;
          default:
            return null;
        }
      })()}
    </QuizTransition>
  );
};

export default CareerQuiz;
