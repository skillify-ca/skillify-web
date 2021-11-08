import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../redux/store";
import { Skill } from "./api/skill";
import AssignmentCreationForm, {
  QuestionCount,
} from "../components/assignment-creator/assignmentCreationForm";
import Navbar from "../components/Navbar";
import { Question } from "./api/question";
import { useMutation } from "@apollo/client";
import AssignmentConfirmation from "../components/assignment-creator/assignmentConfirmation";
import { CREATE_ASSIGNMENT } from "../graphql/createAssignment";
import DisplayAssignmentQuestions from "../components/assignment-creator/displayAssignmentQuestions";
import { QuestionType } from "./api/questionTypes";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { FETCH_SKILL_DESCRIPTION_GRADE_AND_UNIT } from "../graphql/fetchSkillDescriptionAndGrade";

enum STAGE {
  CHOOSE_SKILLS,
  CHOOSE_QUESTION_TYPES,
  CONFIRM,
}

export type FetchDescriptionAndSkillData = {
  skills: SkillData[];
};

export type SkillData = {
  grade: number;
  id: number;
  description: string;
  unit: string;
};

const AssignmentCreator = (data: FetchDescriptionAndSkillData) => {
  const [stage, setStage] = useState(STAGE.CHOOSE_SKILLS);
  const [skills, setSkills] = useState<number[]>([]);
  const [questionTypes, setQuestionTypes] = useState<QuestionType[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [assignmentId, setAssignmentId] = useState<number>();
  const getInitialQuestionCounts = Object.values(Skill)
    .filter((value) => typeof value !== "string")
    .map((value) => value as Skill)
    .map((skill) => {
      return { key: skill, value: 0 };
    });

  const [questionCounts, setQuestionCounts] = useState<QuestionCount[]>(
    getInitialQuestionCounts
  );
  const [isErrorModalShowing, setIsErrorModalShowing] = useState(false);

  const createAssignment = (questionCounts: QuestionCount[]) => {
    const skills: Skill[] = [];
    for (let index = 0; index < questionCounts.length; index++) {
      const element = questionCounts[index];
      for (let y = 0; y < element.value; y++) {
        const skill = element.key;
        skills.push(skill);
      }
    }

    if (skills.length > 0) {
      setQuestionCounts(questionCounts);
      setSkills(skills);
      setStage(STAGE.CHOOSE_QUESTION_TYPES);
    }
    setIsErrorModalShowing((e) => !e);
  };

  const [insertAssignment, updateCreateAssignmentMutation] =
    useMutation(CREATE_ASSIGNMENT);

  const gotoChooseSkills = () => {
    setStage(STAGE.CHOOSE_SKILLS);
    setIsErrorModalShowing(false);
  };

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
      component = (
        <AssignmentCreationForm
          onClick={createAssignment}
          questionCounts={questionCounts}
          setQuestionCounts={setQuestionCounts}
          data={data}
          isErrorModalShowing={isErrorModalShowing}
          setIsErrorModalShowing={setIsErrorModalShowing}
        />
      );
      break;
    case STAGE.CHOOSE_QUESTION_TYPES:
      component = (
        <DisplayAssignmentQuestions
          assignmentSkills={skills}
          setAssignmentSkills={setSkills}
          questionTypes={questionTypes}
          setQuestionTypes={setQuestionTypes}
          onSubmit={confirmAssignment}
          questions={questions}
          setQuestions={setQuestions}
          onBackClick={gotoChooseSkills}
          data={data}
        />
      );
      break;
    case STAGE.CONFIRM:
      console.log("assignmentId", assignmentId);
      component = <AssignmentConfirmation assignmentId={assignmentId} />;

      break;
  }
  return (
    <div className="bg-gray-100">
      <Navbar />
      {component}
    </div>
  );
};

export async function getServerSideProps() {
  const client = new ApolloClient({
    uri: "https://talented-duckling-40.hasura.app/v1/graphql/",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: FETCH_SKILL_DESCRIPTION_GRADE_AND_UNIT,
  });

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: data, // will be passed to the page component as props
  };
}

export default AssignmentCreator;
