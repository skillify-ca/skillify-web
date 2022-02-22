import { gql } from "@apollo/client";

export const LOCK_USER_BADGES = gql`
  mutation lockingUserBadges(
    $userId: String = ""
    $locked: Boolean = true
    $badgeId: Int = 0
  ) {
    update_user_coding_badges(
      where: { _and: { userId: { _eq: $userId }, badgeId: { _eq: $badgeId } } }
      _set: { locked: $locked }
    ) {
      returning {
        locked
      }
    }
  }
`;
