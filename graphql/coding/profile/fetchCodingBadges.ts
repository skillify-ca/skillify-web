import { gql } from "@apollo/client";

export const FETCH_CODING_BADGES = gql`
  query fetchCodingBadges($userId: String = "Yxe3yn3BNhbSulbrnT3DI5bfrU93") {
    user_coding_badges(where: { userId: { _eq: $userId } }) {
      coding_badge {
        description
        title
        unit
        id
      }
      locked
    }
  }
`;
