import { gql } from "@apollo/client";

export const UPDATE_USER_INTRO_NODE = gql`
  mutation updateUserIntroNode(
    $user_id: String = ""
    $node_id: Int
    $locked: Boolean = false
    $completed: Boolean = false
  ) {
    update_user_intro_course_node(
      where: { user_id: { _eq: $user_id }, node_id: { _eq: $node_id } }
      _set: { completed: $completed, locked: $locked }
    ) {
      affected_rows
    }
  }
`;
