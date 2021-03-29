import { gql } from "@apollo/client";

export const FETCH_USER_SKILL = gql`
  query fetchUserSkill($skillId: uuid) {
    user_skills(where: { userId: { _eq: "1" }, skillId: { _eq: $skillId } }) {
      stars
      skill {
        title
      }
    }
  }
`;
