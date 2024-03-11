import { gql } from "@apollo/client";

export const REMOVE_BADGE_FROM_USER = gql`
  mutation MyMutation($badgeId: Int = 10, $userId: String = "") {
    delete_user_coding_badges(
      where: { badgeId: { _eq: $badgeId }, userId: { _eq: $userId } }
    ) {
      affected_rows
    }
  }
`;
