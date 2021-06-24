import { gql } from "@apollo/client";

export const FETCH_USER_EMOJIS = gql`
query fetchUserEmojis($userId: String = "") {
    user_skills(where: {user_id: {_eq: $userId}}) {
      emoji
    }
  }
`;