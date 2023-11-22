import { gql } from "@apollo/client";

export const FETCH_USER_LIKES= gql`
    query MyQuery($userId: String = "") {
    goals_likes(where: {user_id: {_eq: $userId}}) {
      goal_id
      user_id
    }
  }
`;