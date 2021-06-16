import { gql } from "@apollo/client";

export const UNLOCK_NEXT_SKILL = gql`
  mutation updateUserSkillLocked(
    $userId: String
    $skillId: uuid
    $locked: Boolean
  ) {
    update_user_skills(
      where: { userId: { _eq: $userId }, _and: { skillId: { _eq: $skillId } } }
      _set: { locked: $locked }
    ) {
      returning {
        userId
        skillId
        skill {
          title
        }
      }
    }
  }
`;
