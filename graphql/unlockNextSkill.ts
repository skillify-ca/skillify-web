import { gql } from "@apollo/client";

export const UNLOCK_NEXT_SKILL = gql`
  mutation updateUserSkillStars($skillId: uuid, $stars: Int) {
    update_user_skills(
      where: { userId: { _eq: "1" }, skillId: { _eq: $skillId } }
      _set: { locked: true }
    ) {
      returning {
        userId
        stars
        skillId
      }
    }
  }
`;
