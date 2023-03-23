import { useState } from "react";
import LangResults from "../../../components/quizzes/langQuiz/LangResults";
import BluePrint from "../../../components/quizzes/shared/BluePrint";
import SkillSelections from "../../../components/quizzes/shared/SkillSelections";
import StartQuiz from "../../../components/quizzes/shared/StartQuiz";
export enum Stage {
  START,
  LEARNCODING,
  WORKFIELDS,
  BUILDTARGET,
  BLUEPRINT,
  RESULTS,
}
const LangQuiz = () => {
  const selectFields = [
    [
      { name: "Learn an in-demand skill" },
      { name: "Work in tech" },
      { name: "Build programs for fun" },
      { name: "I run a startup" },
      { name: "Become a professional developer" },
      { name: "Communicate better with technical coworkers" },
      { name: "Start a side hustle" },
    ],
    [
      { name: "Front end development", lang: "JavaScript", weight: 1 },
      { name: "Back end development", lang: "JavaScript", weight: 1 },
      { name: "Game development", lang: "JavaScript", weight: 1 },
      { name: "Mobile development", lang: "JavaScript", weight: 1 },
      { name: "Data analytics", lang: "Python", weight: 1 },
      { name: "Product management", lang: "JavaScript", weight: 1 },
      { name: "Digital marketing", lang: "JavaScript", weight: 1 },
      { name: "UX/UI design", lang: "JavaScript", weight: 1 },
      { name: "I don't know / Not sure yet", lang: "JavaScript", weight: 1 },
    ],
    [
      { name: "Websites", lang: "JavaScript", weight: 1 },
      { name: "Storefront", lang: "HTML/CSS", weight: 1 },
      { name: "Mobile apps", lang: "JavaScript", weight: 1 },
      { name: "Games", lang: "JavaScript", weight: 1 },
      { name: "Email", lang: "HTML/CSS", weight: 1 },
      { name: "Tools to automate your life", lang: "JavaScript", weight: 1 },
      { name: "I don't know / Not sure yet", lang: "JavaScript", weight: 1 },
    ],
  ];

  const selectFieldName = selectFields.map((outerItem) => {
    return outerItem.map((innerItem) => {
      return innerItem.name;
    });
  });

  const [stageResponses, setStageResponses] = useState([]);

  const [score, setScore] = useState(0);

  // create results state object that
  // create custom type -- based on schema type in database
  const [stage, setStage] = useState(Stage.START);
  const handleNextClick = () => {
    setStage((prevStage) => prevStage + 1);
  };
  const handleBackClick = () => {
    setStage((prevStage) => prevStage - 1);
  };
  // Render the appropriate component based on the stage
  const renderStage = () => {
    switch (stage) {
      case Stage.START:
        return (
          <StartQuiz
            onNextClick={handleNextClick}
            title={"What Coding Language Should I Learn First?"}
            body={
              "Take this free quiz to find out what coding language you should learn first."
            }
          />
        );
      case Stage.LEARNCODING:
        return (
          <SkillSelections
            onNextClick={handleNextClick}
            onBackClick={handleBackClick}
            title={"Why do you want to learn coding?"}
            body={"Select all that apply."}
            progress={20}
            selections={selectFieldName[0]}
            setStageResponses={setStageResponses}
            currentStage={Stage.LEARNCODING}
          />
        );
      case Stage.WORKFIELDS:
        return (
          <SkillSelections
            onNextClick={handleNextClick}
            onBackClick={handleBackClick}
            title={"What field of work are you interested in?"}
            body={"Select 1-3 choices."}
            progress={50}
            selections={selectFieldName[1]}
            setStageResponses={setStageResponses}
            currentStage={Stage.WORKFIELDS}
          />
        );
      case Stage.BUILDTARGET:
        return (
          <SkillSelections
            onNextClick={handleNextClick}
            onBackClick={handleBackClick}
            title={"What are you interested in building?"}
            body={"Select all that apply."}
            progress={80}
            selections={selectFieldName[2]}
            setStageResponses={setStageResponses}
            currentStage={Stage.BUILDTARGET}
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
        return <LangResults onBackClick={handleBackClick} />;
      default:
        return null;
    }
  };
  return (
    <div>
      <p>{JSON.stringify(stageResponses)}</p>
      {renderStage()}
    </div>
  );
};

export default LangQuiz;
LangQuiz.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
