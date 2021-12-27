import { gql } from "@apollo/client";

export const FETCH_USER_PROFILE = gql`
  query fetchUserProfile($userId: String = "") {
    user_badges(
      where: { userId: { _eq: $userId } }
      order_by: { badgeId: asc }
    ) {
      badge {
        title
        image
        id
        description
      }
      locked
    }
    user_skills(
      where: { user_id: { _eq: $userId } }
      order_by: { skill_id: asc }
    ) {
      emoji
      skill {
        title
        level
      }
    }
  }
`;
