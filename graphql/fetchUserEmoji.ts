import { gql } from "@apollo/client";

export const FETCH_USER_EMOJI = gql`
query MyQuery ($userId: String = "", $skillId: Int = 0){
    user_skills(where: {user_id: {_eq: $userId}, skill_id: {_eq: $skillId}}) {
      emoji
    }
  }
`;

