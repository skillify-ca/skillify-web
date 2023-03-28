import React, { useState } from "react";
import SkillSelections from "../shared/SkillSelections";
import StartQuiz from "../shared/StartQuiz";

enum QuizStages {
  EMAIL_CAPTURE,
  ROLE,
  SKILL_RATING,
  RESULT,
}
const skills = {
  frontend: [
    "I have read through the React JS documentations and I deeply understand it",
    "I am confident building complex and mobile responsive user interfaces",
    "I am comfortable building UI components inside a ReactJS application and integrating them with Storybook",
    "I am comfortable managing state using the useState hook",
    "I am comfortable using effects with the useEffect hook",
    "I am comfortable managing state using Redux",
    "I have built a full stack application using ReactJS and a backend",
    "I am comfortable using Jest to write unit tests for my React applications",
    "I am confident using TypeScript to write features my React applications, as opposed to JavaScript",
    "I am confident building advanced UI layouts using CSS Grid and Flexbox",
    "I am comfortable writing custom CSS animations using keyframes",
    "I am comfortable working with Promises and asynchronous code (async/await)",
  ],
};
export default function HirabilityQuizComponent() {
  const [quizStage, setQuizStage] = useState(QuizStages.EMAIL_CAPTURE);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  function handleNextClickFromEmailCapture() {
    setQuizStage(QuizStages.ROLE);
  }

  return (
    <div>
      {quizStage === QuizStages.EMAIL_CAPTURE ? (
        <StartQuiz
          onNextClick={handleNextClickFromEmailCapture}
          title={"How hireable are you?"}
          body={
            "Take this free quiz to reveal your hireability score for software engineering, product, marketing or design roles"
          }
        />
      ) : quizStage === QuizStages.ROLE ? (
        <div>
          <SkillSelections
            selections={["Frontend Developer", "Mobile Developer"]}
            onNextClick={() => setQuizStage(QuizStages.SKILL_RATING)}
            onBackClick={() => setQuizStage(QuizStages.EMAIL_CAPTURE)}
            progress={0}
            title={""}
            body={""}
          />
        </div>
      ) : quizStage === QuizStages.SKILL_RATING ? (
        <div>
          <SkillSelections
            selections={[
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree",
            ]}
            onNextClick={() => setCurrentSkillIndex((prev) => prev + 1)}
            onBackClick={() => setCurrentSkillIndex((prev) => prev - 1)}
            progress={1}
            title={skills["frontend"][currentSkillIndex]}
            body={""}
          />
        </div>
      ) : null}
    </div>
  );
}
