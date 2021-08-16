import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../redux/store";
import { Grade, Skill, Topic } from "./api/skill";
import AssignmentCreationForm, {
  QuestionTypeForSkill,
} from "../components/assignment-creator/assignmentCreationForm";
import AssignmentQuestions from "../components/assignment-creator/assignmentQuestions";
import DisplayAssignmentQuestions from "../components/assignment-creator/displayAssignmentQuestions";
import Navbar from "../components/Navbar";

enum STAGE {
  CHOOSE_TOPICS,
  CUSTOMIZE,
  REVIEW,
  CONFIRM,
}

const Diagnostic = () => {
  const [stage, setStage] = useState(STAGE.CHOOSE_TOPICS);
  const [selectedQuestions, setSelectedQuestions] = useState<Skill[]>([]);
  const [numberOfQuestions, setNumberOfQuestions] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState<QuestionTypeForSkill[]>(
    []
  );

  const createAssignment = () => {
    setStage(STAGE.CUSTOMIZE);
  };

  const customizeAssignment = () => {
    setStage(STAGE.REVIEW);
  };

  let component;
  switch (stage) {
    case STAGE.CHOOSE_TOPICS:
      component = (
        <AssignmentCreationForm
          onClick={createAssignment}
          selectedQuestions={selectedQuestions}
          setSelectedQuestions={setSelectedQuestions}
        />
      );
      break;
    case STAGE.CUSTOMIZE:
      component = (
        <AssignmentQuestions
          selectedQuestions={selectedQuestions}
          selectedSkills={selectedSkills}
          setSelectedSkills={setSelectedSkills}
          onClick={customizeAssignment}
        />
      );
      break;
    case STAGE.REVIEW:
      component = (
        <DisplayAssignmentQuestions selectedSkills={selectedSkills} />
      );
      break;
    case STAGE.CONFIRM:
      break;
  }
  return (
    <div className="flex flex-col bg-scroll bg-blue-100 h-screen overflow-auto">
      <div className="p-4 flex flex-col items-center justify-center">
        {component}
      </div>
    </div>
  );
};

export default Diagnostic;
