import { useEffect, useState } from "react";
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

type QuizSelection = {
  name: string;
  result?: string;
  weight?: number;
};

const LangQuiz = () => {
  const quiz: QuizSelection[][] = [
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
      { name: "Front end development", result: "JavaScript", weight: 1 },
      { name: "Back end development", result: "JavaScript", weight: 1 },
      { name: "Game development", result: "JavaScript", weight: 1 },
      { name: "Mobile development", result: "JavaScript", weight: 1 },
      { name: "Data analytics", result: "Python", weight: 1 },
      { name: "Product management", result: "JavaScript", weight: 1 },
      { name: "Digital marketing", result: "JavaScript", weight: 1 },
      { name: "UX/UI design", result: "JavaScript", weight: 1 },
      { name: "I don't know / Not sure yet", result: "JavaScript", weight: 1 },
    ],
    [
      { name: "Websites", result: "JavaScript", weight: 1 },
      { name: "Storefront", result: "HTML/CSS", weight: 1 },
      { name: "Mobile apps", result: "JavaScript", weight: 1 },
      { name: "Games", result: "JavaScript", weight: 1 },
      { name: "Email", result: "HTML/CSS", weight: 1 },
      { name: "Tools to automate your life", result: "JavaScript", weight: 1 },
      { name: "I don't know / Not sure yet", result: "JavaScript", weight: 1 },
    ],
  ];

  type QuizContext = {
    title: string;
    body: string;
  };

  const context: QuizContext[] = [
    {
      title: "What Coding Language Should I Learn First?",
      body: "Take this free quiz to find out what coding language you should learn first.",
    },
    {
      title: "Why do you want to learn coding?",
      body: "Select all that apply.",
    },
    {
      title: "What field of work are you interested in?",
      body: "Select 1-3 choices.",
    },
    {
      title: "What are you interested in building?",
      body: "Select all that apply.",
    },
  ];

  const selectFieldName = quiz.map((outerItem) => {
    return outerItem.map((innerItem) => {
      return innerItem.name;
    });
  });

  const [stageResponses, setStageResponses] = useState([]);

  const [score, setScore] = useState({
    JavaScript: 0,
    HTMLCSS: 0,
    Python: 0,
  });

  const finalScore = (userSelections: string | any[]) => {
    for (let i = 0; i < userSelections.length; i++) {
      if (userSelections[i] && userSelections[i].result === "JavaScript") {
        setScore((score) => ({
          ...score,
          JavaScript: score.JavaScript + userSelections[i].weight,
        }));
      }
      if (userSelections[i] && userSelections[i].result === "HTMLCSS") {
        setScore((score) => ({
          ...score,
          HTMLCSS: score.HTMLCSS + userSelections[i].weight,
        }));
      }
      if (userSelections[i] && userSelections[i].result === "Python") {
        setScore((score) => ({
          ...score,
          Python: score.Python + userSelections[i].weight,
        }));
      }
    }
  };
  const userSelections: QuizSelection[] = [];
  const productResult = () => {
    for (let i = 0; i < stageResponses.length; i++) {
      const check = quiz[i].filter((item) =>
        stageResponses[i].includes(item.name)
      );
      userSelections.push(...check);
    }
    finalScore(userSelections);
    console.log(userSelections);
  };

  useEffect(() => {
    productResult();
  }, []);

  const [stage, setStage] = useState(Stage.START);
  const handleNextClick = () => {
    setStage((prevStage) => prevStage + 1);
  };
  const handleBackClick = () => {
    setStage((prevStage) => prevStage - 1);
  };

  const renderStage = () => {
    switch (stage) {
      case Stage.START:
        return (
          <StartQuiz
            onNextClick={handleNextClick}
            title={context[Stage.START].title}
            body={context[Stage.START].body}
          />
        );
      case Stage.LEARNCODING:
        return (
          <SkillSelections
            onNextClick={handleNextClick}
            onBackClick={handleBackClick}
            title={context[Stage.LEARNCODING].title}
            body={context[Stage.LEARNCODING].body}
            progress={20}
            selections={selectFieldName[Stage.LEARNCODING - 1]}
            setStageResponses={setStageResponses}
            currentStage={Stage.LEARNCODING}
          />
        );
      case Stage.WORKFIELDS:
        return (
          <SkillSelections
            onNextClick={handleNextClick}
            onBackClick={handleBackClick}
            title={context[Stage.WORKFIELDS].title}
            body={context[Stage.WORKFIELDS].body}
            progress={50}
            selections={selectFieldName[Stage.WORKFIELDS - 1]}
            setStageResponses={setStageResponses}
            currentStage={Stage.WORKFIELDS}
          />
        );
      case Stage.BUILDTARGET:
        return (
          <SkillSelections
            onNextClick={handleNextClick}
            onBackClick={handleBackClick}
            title={context[Stage.BUILDTARGET].title}
            body={context[Stage.BUILDTARGET].body}
            progress={80}
            selections={selectFieldName[Stage.BUILDTARGET - 1]}
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
