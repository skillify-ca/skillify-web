import { gql } from "@apollo/client";

export const FETCH_USER_BADGES = gql`
  query MyQuery($userId: String = "") {
    user_badges(
      where: { userId: { _eq: $userId } }
      order_by: { badgeId: asc }
    ) {
      badge {
        title
        image
        id
        description
      }
      locked
    }
  }
`;
