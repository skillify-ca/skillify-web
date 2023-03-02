import { gql } from "@apollo/client";

export const REMOVE_USER_GOAL = gql`
  mutation removeUserGoal($id: uuid) {
    delete_user_goals(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;
