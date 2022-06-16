import { gql } from "@apollo/client";
import { Unit } from "../../pages/api/studentPortal/units";

export const FETCH_USER_INTRO_NODES = gql`
  query fetchUserIntroNodes($userId: String = "") {
    intro_course_unit {
      title
      intro_course_nodes(order_by: { id: asc }) {
        description
        link
        title
        type
        user_intro_course_nodes(where: { user_id: { _eq: $userId } }) {
          completed
          locked
        }
      }
    }
  }
`;

type Response = {
  data: Data;
};

type Data = {
  intro_course_unit: IntroCourseUnit[];
};

type IntroCourseUnit = {
  title: string;
  intro_course_nodes: IntroCourseNode[];
};

type IntroCourseNode = {
  description: string;
  link: string;
  title: string;
  type: "lesson" | "quiz" | "assignment";
  user_intro_course_nodes: UserIntroCourseNode[];
};

type UserIntroCourseNode = {
  completed: boolean;
  locked: boolean;
};

export const transform = (data: Data): Unit[] => {
  return data.intro_course_unit.map((it) => {
    return {
      title: it.title,
      nodes: it.intro_course_nodes.map((it) => {
        return {
          title: it.title,
          description: it.description,
          link: it.link,
          type: it.type,
          completed:
            it.user_intro_course_nodes.length > 0
              ? it.user_intro_course_nodes[0].completed
              : false,
          locked:
            it.user_intro_course_nodes.length > 0
              ? it.user_intro_course_nodes[0].locked
              : true,
        };
      }),
    };
  });
};
