import { gql } from "@apollo/client";
export const FETCH_USER_SKILL_BADGE = gql`
  query fetchBadgeForSkill($userId: String, $badgeId: Int = 0) {
    user_badges(
      where: { userId: { _eq: $userId }, badgeId: { _eq: $badgeId } }
    ) {
      badge {
        image
      }
    }
  }
`;
