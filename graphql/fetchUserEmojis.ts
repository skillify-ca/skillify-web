import { gql } from "@apollo/client";

export const FETCH_USER_EMOJIS = gql`
query fetchUserEmojis($userId: String = "", $skillId: [Int!]! = []) {
  user_skills(where: {user_id: {_eq: $userId}, _and: {skill_id: {_in: $skillId}}}) {
    emoji
    skill_id
  }
}
`;