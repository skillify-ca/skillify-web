import { gql } from "@apollo/client";

export const UNLOCK_BADGE = gql`
  mutation unlockBadge($userId: String = "", $badgeId: Int = 0) {
    update_user_badges(
      where: { userId: { _eq: $userId }, badgeId: { _eq: $badgeId } }
      _set: { locked: false }
    ) {
      returning {
        badgeId
      }
    }
  }
`;
