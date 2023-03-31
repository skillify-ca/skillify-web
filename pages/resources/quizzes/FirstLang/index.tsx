import { useState } from "react";
import LangResults from "../../../../components/resources/quizzes/langQuiz/LangResults";
import BluePrint from "../../../../components/resources/quizzes/shared/BluePrint";
import SkillSelections from "../../../../components/resources/quizzes/shared/SkillSelections";
import StartQuiz from "../../../../components/resources/quizzes/shared/StartQuiz";
import {
  quizQuestions,
  selectionsPerPage,
} from "../../../api/studentPortal/quizzes/FirstLang";

export enum Stage {
  START,
  LEARNCODING,
  WORKFIELDS,
  BUILDTARGET,
  BLUEPRINT,
  RESULTS,
}

const FirstProgrammingLanguageQuiz = () => {
  const [selectedSkill, setSelectedSkill] = useState([]);

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
            title={quizQuestions[stage][stage].title}
            body={quizQuestions[stage][stage].body}
          />
        );
      case Stage.LEARNCODING:
        return (
          <SkillSelections
            onNextClick={handleNextClick}
            onBackClick={handleBackClick}
            title={quizQuestions[stage][stage - 1].title}
            body={quizQuestions[stage][stage - 1].body}
            selected={selectedSkill}
            setSelected={setSelectedSkill}
            progress={20}
            selections={selectionsPerPage[stage]}
            currentStage={stage - 1}
          />
        );
      case Stage.WORKFIELDS:
        return (
          <SkillSelections
            onNextClick={handleNextClick}
            onBackClick={handleBackClick}
            title={quizQuestions[stage][stage - 2].title}
            body={quizQuestions[stage][stage - 2].body}
            selected={selectedSkill}
            setSelected={setSelectedSkill}
            progress={50}
            selections={selectionsPerPage[stage]}
            currentStage={stage - 1}
          />
        );
      case Stage.BUILDTARGET:
        return (
          <SkillSelections
            onNextClick={handleNextClick}
            onBackClick={handleBackClick}
            title={quizQuestions[stage][stage - 3].title}
            body={quizQuestions[stage][stage - 3].body}
            selected={selectedSkill}
            setSelected={setSelectedSkill}
            progress={80}
            selections={selectionsPerPage[stage]}
            currentStage={stage - 1}
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
    <>
      <div>{renderStage()}</div>
    </>
  );
};

export default FirstProgrammingLanguageQuiz;
FirstProgrammingLanguageQuiz.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
