import { gql } from "@apollo/client";

export const FETCH_USER_SKILLS = gql`
  query fetchUserSkills($userId: String) {
    user_skills(
      order_by: { skill: { created_at: asc, title: asc } }
      where: { userId: { _eq: $userId } }
    ) {
      skill {
        title
        id
        image
      }
      locked
    }
  }
`;
