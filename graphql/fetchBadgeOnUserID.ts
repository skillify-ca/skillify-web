import { gql } from "@apollo/client";

export const FETCH_BADGE_ON_USERID = gql`
query FETCH_USER_BADGES ($userId: String="") {
    user_badges(where: {userId: {_eq: "116309327098433793664"}}) {
      userId
      badgeId
    }
  }
`;

