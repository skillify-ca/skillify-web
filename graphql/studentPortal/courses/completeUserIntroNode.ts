import { gql } from "@apollo/client";

export const COMPLETE_USER_INTRO_NODE = gql`
  mutation completeUserIntroNode(
    $user_id: String = ""
    $node_id: Int
    $completed: Boolean
  ) {
    update_user_intro_course_node(
      where: { user_id: { _eq: $user_id }, node_id: { _eq: $node_id } }
      _set: { completed: $completed }
    ) {
      affected_rows
    }
  }
`;
