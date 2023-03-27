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

const FirstProgrammingLanguageQuiz = () => {
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

  const pageOptions = quiz.map((pages) => {
    return pages.map((options) => {
      return options.name;
    });
  });

  type QuizContext = {
    title: string;
    body: string;
  };

  const quizQuestions: QuizContext[] = [
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

  const [quizResponses, setQuizResponses] = useState([]);

  const [score, setScore] = useState({
    JavaScript: 0,
    HTMLCSS: 0,
    Python: 0,
  });

  const finalScore = (filteredQuizSelectionArr: string | any[]) => {
    for (let i = 0; i < filteredQuizSelectionArr.length; i++) {
      if (
        filteredQuizSelectionArr[i] &&
        filteredQuizSelectionArr[i].result === "JavaScript"
      ) {
        setScore((score) => ({
          ...score,
          JavaScript: score.JavaScript + filteredQuizSelectionArr[i].weight,
        }));
      }
      if (
        filteredQuizSelectionArr[i] &&
        filteredQuizSelectionArr[i].result === "HTMLCSS"
      ) {
        setScore((score) => ({
          ...score,
          HTMLCSS: score.HTMLCSS + filteredQuizSelectionArr[i].weight,
        }));
      }
      if (
        filteredQuizSelectionArr[i] &&
        filteredQuizSelectionArr[i].result === "Python"
      ) {
        setScore((score) => ({
          ...score,
          Python: score.Python + filteredQuizSelectionArr[i].weight,
        }));
      }
    }
  };
  const filteredQuizSelectionArr: QuizSelection[] = [];
  const productResult = () => {
    for (let i = 0; i < quizResponses.length; i++) {
      const check = quiz[i].filter((item) =>
        quizResponses[i].includes(item.name)
      );
      filteredQuizSelectionArr.push(...check);
    }
    finalScore(filteredQuizSelectionArr);
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
            title={quizQuestions[Stage.START].title}
            body={quizQuestions[Stage.START].body}
          />
        );
      case Stage.LEARNCODING:
        return (
          <SkillSelections
            onNextClick={handleNextClick}
            onBackClick={handleBackClick}
            title={quizQuestions[Stage.LEARNCODING].title}
            body={quizQuestions[Stage.LEARNCODING].body}
            progress={20}
            selections={pageOptions[Stage.LEARNCODING - 1]}
            setQuizResponses={setQuizResponses}
            currentStage={Stage.LEARNCODING}
          />
        );
      case Stage.WORKFIELDS:
        return (
          <SkillSelections
            onNextClick={handleNextClick}
            onBackClick={handleBackClick}
            title={quizQuestions[Stage.WORKFIELDS].title}
            body={quizQuestions[Stage.WORKFIELDS].body}
            progress={50}
            selections={pageOptions[Stage.WORKFIELDS - 1]}
            setQuizResponses={setQuizResponses}
            currentStage={Stage.WORKFIELDS}
          />
        );
      case Stage.BUILDTARGET:
        return (
          <SkillSelections
            onNextClick={handleNextClick}
            onBackClick={handleBackClick}
            title={quizQuestions[Stage.BUILDTARGET].title}
            body={quizQuestions[Stage.BUILDTARGET].body}
            progress={80}
            selections={pageOptions[Stage.BUILDTARGET - 1]}
            setQuizResponses={setQuizResponses}
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
  return <div>{renderStage()}</div>;
};

export default FirstProgrammingLanguageQuiz;
FirstProgrammingLanguageQuiz.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
