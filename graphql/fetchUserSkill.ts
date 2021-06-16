import { gql } from "@apollo/client";

export const FETCH_USER_SKILL = gql`
  query fetchUserSkill($userId: String, $skillId: uuid) {
    user_skills(
      where: { userId: { _eq: $userId }, skillId: { _eq: $skillId } }
    ) {
      skill {
        title
      }
    }
  }
`;
