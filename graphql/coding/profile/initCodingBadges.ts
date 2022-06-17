import { gql } from "@apollo/client";

export const INIT_CODING_BADGES = gql`
  mutation initCodingBadges($objects: [user_coding_badges_insert_input!] = []) {
    insert_user_coding_badges(
      objects: $objects
      on_conflict: {
        constraint: user_coding_badges_userId_badgeId_key
        update_columns: userId
      }
    ) {
      returning {
        badgeId
        userId
      }
    }
  }
`;

export type UserIntroNodesInput = {
  locked: boolean;
  badgeId: number;
  userId: string;
};
type User = {
  uid: string;
};
export const badgesToInitialize = (user: User): UserIntroNodesInput[] => {
  return [
    {
      badgeId: 1,
      locked: true,
      userId: user.uid,
    },
    {
      badgeId: 2,
      locked: true,
      userId: user.uid,
    },
    {
      badgeId: 3,
      locked: true,
      userId: user.uid,
    },
  ];
};
