import { gql } from "@apollo/client";

export const FETCH_USER_SKILL = gql`
mutation MyMutation($userId: String = "", $skillId: Int = 0) {
  insert_user_skills(objects: {skill_id: $skillId, user_id: $userId, emoji: null}) {
    returning {
      id
    }
  }
}
`;