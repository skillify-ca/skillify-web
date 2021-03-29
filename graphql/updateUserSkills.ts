import { gql } from "@apollo/client";

export const UPDATE_USER_SKILLS = gql`
  mutation updateUserSkillStars($skillId: uuid, $stars: Int) {
    update_user_skills(
      where: { userId: { _eq: "1" }, skillId: { _eq: $skillId } }
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
