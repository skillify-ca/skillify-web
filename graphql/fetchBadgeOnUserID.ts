import { gql } from "@apollo/client";

export const FETCH_BADGE_ON_USERID = gql`
query FETCH_USER_BADGES($userId: String = "", $badgeId: Int!, $badgeId2: Int!) {
  user_badges(where: {userId: {_eq: $userId}, locked: {_eq: true}, badgeId: {_in: [$badgeId, $badgeId2]}}) {
    userId
    badgeId
    locked
    badge {
      image
      id
    }
  }
}
`;

