import { gql } from "@apollo/client";

export const UNLOCK_USER_INTRO_NODE = gql`
  mutation unlockUserIntroNode(
    $user_id: String = ""
    $node_id: Int
    $locked: Boolean
  ) {
    update_user_intro_course_node(
      where: { user_id: { _eq: $user_id }, node_id: { _eq: $node_id } }
      _set: { locked: $locked }
    ) {
      affected_rows
    }
  }
`;
