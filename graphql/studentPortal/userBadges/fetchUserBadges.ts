import { gql } from "@apollo/client";

export const FETCH_USER_BADGES = gql`
  query fetchCodingBadges {
    user_coding_badges {
      badgeId
    }
  }
`;

export type FetchUserBadgesResponse = {
  user_coding_badges: UserBadge[];
};

export type UserBadge = {
  badgeId: string;
};
