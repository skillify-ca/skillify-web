import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../redux/store";
import { getSkillFromId, Grade, Skill, Topic } from "./api/skill";
import AssignmentCreationForm, {
  QuestionCount,
  QuestionTypeForSkill,
} from "../components/assignment-creator/assignmentCreationForm";
import Navbar from "../components/Navbar";
import { Question } from "./api/question";
import { useMutation } from "@apollo/client";
import AssignmentConfirmation from "../components/assignment-creator/assignmentConfirmation";
import { CREATE_ASSIGNMENT } from "../graphql/createAssignment";
import AssignmentQuestions from "../components/assignment-creator/assignmentQuestions";
import DisplayAssignmentQuestions from "../components/assignment-creator/displayAssignmentQuestions";

enum STAGE {
  CHOOSE_SKILLS,
  CHOOSE_QUESTION_TYPES,
  REVIEW,
  CONFIRM,
}

const Diagnostic = () => {
  const [stage, setStage] = useState(STAGE.CHOOSE_SKILLS);
  const [selectedQuestions, setSelectedQuestions] = useState<Skill[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<QuestionTypeForSkill[]>(
    []
  );
  const [questions, setQuestions] = useState<Question[]>([]);
  const [assignmentId, setAssignmentId] = useState<number>();

  const createAssignment = (questionCounts: QuestionCount[]) => {
    const newQuestions: Skill[] = [];
    for (let index = 0; index < questionCounts.length; index++) {
      const element = questionCounts[index];
      for (let y = 0; y < element.value; y++) {
        const skill = getSkillFromId(element.key);
        newQuestions.push(skill);
      }
    }
    setSelectedQuestions(newQuestions);
    setStage(STAGE.CHOOSE_QUESTION_TYPES);
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
    }).then((it) => {
      setAssignmentId(it.data.insert_assignments.returning[0].id);
      setStage(STAGE.CONFIRM);
    });
  };

  let component;
  switch (stage) {
    case STAGE.CHOOSE_SKILLS:
      component = <AssignmentCreationForm onClick={createAssignment} />;
      break;
    case STAGE.CHOOSE_QUESTION_TYPES:
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
          selectedSkills={selectedSkills}
          setSelectedSkills={setSelectedSkills}
        />
      );
      break;
    case STAGE.CONFIRM:
      console.log("assignmentId", assignmentId);
      component = <AssignmentConfirmation assignmentId={assignmentId} />;

      break;
  }
  return <div className="bg-blue-100">{component}</div>;
};

export default Diagnostic;
