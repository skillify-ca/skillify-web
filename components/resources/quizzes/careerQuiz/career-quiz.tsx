import { useMutation } from "@apollo/client";
import React, { useState } from "react";
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

  const [education, setEducation] = useState<string>("");
  const [degree, setDegree] = useState<string>("");
  const [institution, setInstitution] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [industries, setIndustries] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [result, setResult] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  const [highestEducation, setHighestEducation] =
    useState<EducationLevel | null>(null);
  const [experienceCoding, setExperienceCoding] = useState<string>();
  const [id, setId] = useState();

  const [saveUserSelections, { data }] = useMutation(
    UPSERT_CAREER_QUIZ_RESPONSE,
    {
      onCompleted: () => {
        setId(data.id);
      },
    }
  );

  // create results state object that
  // create custom type -- based on schema type in database
  const [stage, setStage] = useState<Stage>(Stage.START);
  const [triggerAnimation, setTriggerAnimation] = useState(true);
  const [quizViewState, setQuizViewState] = useState<QuizViewState>(
    initializeQuizViewState
  );

  const handleNextClick = () => {
    setTriggerAnimation(false);

    setTimeout(() => {
      setTriggerAnimation(true);
      alert("this broke");
      saveUserSelections({
        variables: {
          objects: {
            degree: degree,
            institution: institution,
            name: name,
            email: email,
            industries: industries,
            skills: skills,
            result: result,
            tasks: tasks,
            highestEducation: highestEducation,
            experienceCoding: experienceCoding,
          },
        },
      });
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
    const selectedQuizOption = quizViewState.questions.map((question) => ({
      ...question,
      options: question.options.map((questionOption) =>
        questionOption.name === option.name
          ? { ...questionOption, isSelected: true }
          : questionOption
      ),
    }));

    const updatedQuizViewState = {
      ...quizViewState,
      questions: selectedQuizOption,
    };

    setQuizViewState(updatedQuizViewState);
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
                nameSetter={setName}
                emailSetter={setEmail}
              />
            );
          case Stage.EDUCATION:
            return (
              <EduBackground
                onNextClick={handleNextClick}
                onBackClick={handleBackClick}
                setInstitution={setInstitution}
                setDegree={setDegree}
                setExperienceCoding={setExperienceCoding}
                setHighestEducation={setHighestEducation}
                highestEducation={highestEducation}
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
