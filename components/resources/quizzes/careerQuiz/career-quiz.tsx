import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { INSERT_CAREER_QUIZ_RESPONSE } from "../../../../graphql/quizzes/insertCareer";
import { QuizTransition } from "../../../ui/animations/QuizTransition";
import BluePrint from "../shared/BluePrint";
import SkillSelections from "../shared/SkillSelections";
import StartQuiz from "../shared/StartQuiz";
import CareerResults from "./CareerResults";
import EduBackground from "./EduBackground";

enum Stage {
  START,
  EDUCATION,
  INDUSTRIES,
  SKILLS,
  TASKS,
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
  const handleNextClick = () => {
    setTriggerAnimation(false);
    setTimeout(() => {
      setStage((prevStage) => prevStage + 1);
      setTriggerAnimation(true);
    }, 250); // adjust the delay time based on the animation duration
  };
  const handleBackClick = () => {
    setTriggerAnimation(false);
    setTimeout(() => {
      setStage((prevStage) => prevStage - 1);
      setTriggerAnimation(true);
    }, 250); // adjust the delay time based on the animation duration
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
              />
            );
          case Stage.EDUCATION:
            return (
              <EduBackground
                onNextClick={handleNextClick}
                onBackClick={handleBackClick}
              />
            );
          case Stage.INDUSTRIES:
            return (
              <SkillSelections
                onNextClick={handleNextClick}
                onBackClick={handleBackClick}
                title={"What industries are you interested in working?"}
                body={"Select 1-3 choices."}
                progress={35}
                selections={[
                  "Advertising",
                  "Cybersecurity",
                  "Digital Media",
                  "Design",
                  "E-commerce",
                  "Entertainment",
                  "Fashion",
                  "Finance",
                  "Healthcare",
                  "Real Estate",
                  "Technology",
                  "Video Games",
                  "Science",
                  "Not Sure Yet",
                ]}
              />
            );
          case Stage.SKILLS:
            return (
              <SkillSelections
                onNextClick={handleNextClick}
                onBackClick={handleBackClick}
                title={"What are your strongest skills?"}
                body={"Select 1-3 choices."}
                progress={60}
                selections={[
                  "Writing code",
                  "Drawing",
                  "Design",
                  "Writing",
                  "Leading a team",
                  "Organization",
                  "Public speaking",
                  "Time Management",
                  "Math",
                  "Analyzing data",
                  "Critical thinking",
                  "Planning",
                ]}
              />
            );
          case Stage.TASKS:
            return (
              <SkillSelections
                onNextClick={handleNextClick}
                onBackClick={handleBackClick}
                title={" What tasks would you prefer at work?"}
                body={"Select 1-3 choices."}
                progress={85}
                selections={[
                  "Coordinate the launch of a product",
                  "Analyze social media campaigns",
                  "Find was to automate processes",
                  "Find trends in data",
                  "Study how people use apps",
                  "Build a company's brand",
                  "Lead a project from start to finish",
                  "Spot patterns in data",
                  "Write code to solve problems",
                ]}
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

CareerQuiz.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
