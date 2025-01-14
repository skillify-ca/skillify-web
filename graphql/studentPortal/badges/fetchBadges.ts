import { gql } from "@apollo/client";

export const FETCH_BADGES = gql`
  query fetchCodingBadges {
    coding_badges {
      id
      title
      image
      description
    }
  }
`;

export type FetchBadgesResponse = {
  coding_badges: Badge[];
};

export type Badge = {
  id: string;
  title: string;
  image: string;
  description: string;
};
