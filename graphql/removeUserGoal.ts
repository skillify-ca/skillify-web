import { gql } from "@apollo/client";

export const UPSERT_USER_GOALS = gql`
  mutation removeUserGoal($id: uuid) {
    delete_user_goals(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;
