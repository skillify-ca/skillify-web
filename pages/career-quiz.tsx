import React, { useState } from "react";
import CareerResults from "../components/resources/quizzes/careerQuiz/CareerResults";
import EduBackground from "../components/resources/quizzes/careerQuiz/EduBackground";
import BluePrint from "../components/resources/quizzes/shared/BluePrint";
import SkillSelections from "../components/resources/quizzes/shared/SkillSelections";
import StartQuiz from "../components/resources/quizzes/shared/StartQuiz";

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
  // create results state object that
  // create custom type -- based on schema type in database
  const [stage, setStage] = useState<Stage>(Stage.START);

  const handleNextClick = () => {
    setStage((prevStage) => prevStage + 1);
  };
  const handleBackClick = () => {
    setStage((prevStage) => prevStage - 1);
  };

  // Define the object and initialize it with empty values
  const [quizObject, setQuizObject] = useState({
    industries: [],
    skills: [],
    tasks: [],
  });

  // Render the appropriate component based on the stage
  const renderStage = () => {
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
            page={"industries"}
            quizObject={quizObject}
            maxSelections={3}
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
            setQuizObject={setQuizObject}
          />
        );
      case Stage.SKILLS:
        return (
          <SkillSelections
            page={"skills"}
            quizObject={quizObject}
            maxSelections={3}
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
            setQuizObject={setQuizObject}
          />
        );
      case Stage.TASKS:
        return (
          <SkillSelections
            maxSelections={3}
            quizObject={quizObject}
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
            setQuizObject={setQuizObject}
            page={"tasks"}
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
  };

  return <div>{renderStage()}</div>;
};

export default CareerQuiz;

CareerQuiz.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
