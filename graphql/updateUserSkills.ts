import { gql } from "@apollo/client";

export const UPDATE_USER_SKILLS = gql`
  mutation updateUserSkillStars($userId: String, $skillId: uuid, $stars: Int) {
    update_user_skills(
      where: { userId: { _eq: $userId }, skillId: { _eq: $skillId } }
      _set: { stars: $stars }
    ) {
      returning {
        userId
        stars
        skillId
      }
    }
  }
`;
