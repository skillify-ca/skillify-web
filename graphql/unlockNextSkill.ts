import { gql } from "@apollo/client";

export const UNLOCK_NEXT_SKILL = gql`
  mutation updateUserSkillLocked($skillId: uuid, $locked: Boolean) {
    update_user_skills(
      where: { userId: { _eq: "1" }, _and: { skillId: { _eq: $skillId } } }
      _set: { locked: $locked }
    ) {
      returning {
        userId
        stars
        skillId
        skill {
          title
        }
      }
    }
  }
`;
