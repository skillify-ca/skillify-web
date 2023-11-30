import { gql } from "@apollo/client";

export const ADD_BADGE_TO_USER = gql`
  mutation MyMutation($badgeId: Int = 10, $userId: String = "") {
    insert_user_coding_badges_one(
      object: { badgeId: $badgeId, userId: $userId }
    ) {
      id
    }
  }
`;
