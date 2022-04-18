import { gql } from "@apollo/client";

export const INIT_USER_INTRO_NODES = gql`
  mutation initializeUserIntroNodes(
    $objects: [user_intro_course_node_insert_input!] = []
  ) {
    insert_user_intro_course_node(
      objects: $objects
      on_conflict: {
        constraint: user_intro_course_node_user_id_node_id_key
        update_columns: user_id
      }
    ) {
      returning {
        node_id
        user_id
      }
    }
  }
`;

export type UserIntroNodesInput = {
  completed: boolean;
  locked: boolean;
  node_id: number;
  user_id: string;
};
type User = {
  uid: string;
};
export const objects = (user: User): UserIntroNodesInput[] => {
  return [
    {
      node_id: 1,
      completed: false,
      locked: false,
      user_id: user.uid,
    },
    {
      node_id: 2,
      completed: false,
      locked: true,
      user_id: user.uid,
    },
    {
      node_id: 3,
      completed: false,
      locked: true,
      user_id: user.uid,
    },
    {
      node_id: 4,
      completed: false,
      locked: true,
      user_id: user.uid,
    },
    {
      node_id: 5,
      completed: false,
      locked: true,
      user_id: user.uid,
    },
    {
      node_id: 6,
      completed: false,
      locked: true,
      user_id: user.uid,
    },
    {
      node_id: 7,
      completed: false,
      locked: true,
      user_id: user.uid,
    },
    {
      node_id: 8,
      completed: false,
      locked: true,
      user_id: user.uid,
    },
    {
      node_id: 38,
      completed: false,
      locked: true,
      user_id: user.uid,
    },
    {
      node_id: 39,
      completed: false,
      locked: true,
      user_id: user.uid,
    },
    {
      node_id: 40,
      completed: false,
      locked: true,
      user_id: user.uid,
    },
    {
      node_id: 41,
      completed: false,
      locked: true,
      user_id: user.uid,
    },
    {
      node_id: 42,
      completed: false,
      locked: true,
      user_id: user.uid,
    },
    {
      node_id: 43,
      completed: false,
      locked: true,
      user_id: user.uid,
    },
    {
      node_id: 44,
      completed: false,
      locked: true,
      user_id: user.uid,
    },
    {
      node_id: 45,
      completed: false,
      locked: true,
      user_id: user.uid,
    },
    {
      node_id: 46,
      completed: false,
      locked: true,
      user_id: user.uid,
    },
    {
      node_id: 47,
      completed: false,
      locked: true,
      user_id: user.uid,
    },
  ];
};
