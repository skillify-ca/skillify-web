import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../redux/store";
import { Grade, Skill, Topic } from "./api/skill";
import AssignmentCreationForm, {
  QuestionTypeForSkill,
} from "../components/assignment-creator/assignmentCreationForm";
import AssignmentQuestions from "../components/assignment-creator/assignmentQuestions";
import DisplayAssignmentQuestions from "../components/assignment-creator/displayAssignmentQuestions";
import Navbar from "../components/Navbar";
import { Question } from "./api/question";
import { CREATE_ASSIGNMENT } from "../graphql/createAssignment";
import { useMutation } from "@apollo/client";
import AssignmentConfirmation from "../components/assignment-creator/assignmentConfirmation";

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
  const [questions, setQuestions] = useState<Question[]>([]);
  const [assignmentId, setAssignmentId] = useState<number>();

  const createAssignment = () => {
    setStage(STAGE.CUSTOMIZE);
  };

  const customizeAssignment = () => {
    setStage(STAGE.REVIEW);
  };

  const [insertAssignment, updateCreateAssignmentMutation] = useMutation(
    CREATE_ASSIGNMENT
  );

  const confirmAssignment = () => {
    console.log("questions", JSON.stringify(questions));
    insertAssignment({
      variables: {
        questions,
      },
    }).then((it) =>
      setAssignmentId(it.data.insert_assignments.returning[0].id)
    );
    setStage(STAGE.CONFIRM);
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
        <DisplayAssignmentQuestions
          selectedSkills={selectedSkills}
          onSubmit={confirmAssignment}
          questions={questions}
          setQuestions={setQuestions}
        />
      );
      break;
    case STAGE.CONFIRM:
      component = <AssignmentConfirmation assignmentId={assignmentId} />;

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
