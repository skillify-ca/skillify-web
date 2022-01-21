import { gql } from "@apollo/client";

export const FETCH_USER_PROGRESS = gql`
  query fetchUserProgress($userId: String = "") {
    user_progress(where: { user_id: { _eq: $userId } }) {
      progress
    }
  }
`;
