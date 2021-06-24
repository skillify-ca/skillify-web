import { gql } from "@apollo/client";

export const INIT_USER_BADGES = gql`
  mutation initUserBadges($userId: String = "") {
    insert_user_badges(
      objects: [
        { userId: $userId, locked: true, badgeId: 1 }
        { userId: $userId, locked: true, badgeId: 2 }
        { userId: $userId, locked: true, badgeId: 3 }
        { userId: $userId, locked: true, badgeId: 4 }
        { userId: $userId, locked: true, badgeId: 6 }
        { userId: $userId, locked: true, badgeId: 7 }
        { userId: $userId, locked: true, badgeId: 8 }
        { userId: $userId, locked: true, badgeId: 9 }
        { userId: $userId, locked: true, badgeId: 10 }
        { userId: $userId, locked: true, badgeId: 11 }
        { userId: $userId, locked: true, badgeId: 12 }
        { userId: $userId, locked: true, badgeId: 13 }
      ]
    ) {
      returning {
        badgeId
      }
    }
  }
`;
