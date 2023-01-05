import { gql } from "@apollo/client";

export const INSERT_USER_CODING_BADGES = gql`
  mutation AddUserBadge($userID: String = "R7nzMKiRewgJuLm54eQ1KdHV3g82") {
    insert_user_coding_badges(
      on_conflict: { constraint: user_coding_badges_pkey }
      objects: { badgeId: 6, id: 20, userId: "R7nzMKiRewgJuLm54eQ1KdHV3g82" }
    ) {
      affected_rows
    }
  }
`;
