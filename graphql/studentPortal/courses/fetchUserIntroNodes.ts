import { gql } from "@apollo/client";
import { Unit } from "../../../pages/api/studentPortal/units";

// Ignore unit 34 (The Community Unit)
export const FETCH_USER_INTRO_NODES = gql`
  query fetchUserIntroNodes($userId: String = "Yxe3yn3BNhbSulbrnT3DI5bfrU93") {
    intro_course_unit(order_by: { order: asc }, where: { id: { _neq: 34 } }) {
      title
      intro_course_nodes(order_by: { order: asc }) {
        description
        link
        title
        type
        user_intro_course_nodes(where: { user_id: { _eq: $userId } }) {
          node_id
          completed
          locked
        }
      }
    }
  }
`;

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
  node_id: number;
  completed: boolean;
  locked: boolean;
};

export const transform = (data: Data): Unit[] => {
  return data.intro_course_unit.map((unit) => {
    return {
      title: unit.title,
      nodes: unit.intro_course_nodes.map((node) => {
        return {
          title: node.title,
          description: node.description,
          link: node.link,
          type: node.type,
          completed:
            node.user_intro_course_nodes.length > 0
              ? node.user_intro_course_nodes[0].completed
              : false,
          locked:
            node.user_intro_course_nodes[0].node_id === 1 ||
            node.user_intro_course_nodes[0].node_id === 2
              ? false
              : node.user_intro_course_nodes.length > 0
              ? node.user_intro_course_nodes[0].locked
              : false,
        };
      }),
    };
  });
};
