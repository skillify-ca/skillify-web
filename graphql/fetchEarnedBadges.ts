import { gql } from "@apollo/client";

export const FETCH_EARNED_BADGES = gql`
query fetchEarnedBadges($enrolledIds: [String]) {
    user_coding_badges(where: {userId: {_in: $enrolledIds}}, order_by: {userId: asc}) {
      badgeId
      userId
    }
  }
`;

export type FetchEarnedBadges = {
  user_coding_badges: EarnedBadges[];
};

export type EarnedBadges = {
  badgeId: string;
  userId: string;
};


  