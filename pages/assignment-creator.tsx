import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../redux/store";
import { Grade, Skill, Topic } from "./api/skill";
import DiagnosticNavbar from "../components/DiagnosticNavbar";
import AssignmentCreationForm from "../components/assignment-creator/assignmentCreationForm";
import AssignmentQuestions from "../components/assignment-creator/assignmentQuestions";

enum STAGE {
  CREATE,
  REVIEW,
  CONFIRM,
}

const Diagnostic = () => {
  const [stage, setStage] = useState(STAGE.CREATE);
  const [selectedQuestions, setSelectedQuestions] = useState<Skill[]>([]);

  const createAssignment = () => {
    setStage(STAGE.REVIEW);
  };

  let component;
  switch (stage) {
    case STAGE.CREATE:
      component = (
        <AssignmentCreationForm
          onClick={createAssignment}
          selectedQuestions={selectedQuestions}
          setSelectedQuestions={setSelectedQuestions}
        />
      );
      break;
    case STAGE.REVIEW:
      component = <AssignmentQuestions selectedQuestions={selectedQuestions} />;
      break;
    case STAGE.CONFIRM:
      break;
  }
  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100 h-screen">
      <DiagnosticNavbar />
      <div className="p-4 flex flex-col items-center justify-center">
        {component}
      </div>
    </div>
  );
};

export default Diagnostic;
