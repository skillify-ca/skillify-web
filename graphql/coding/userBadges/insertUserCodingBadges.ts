import { gql } from "@apollo/client";

export const INSERT_USER_CODING_BADGES = gql`
  mutation INSERT_USER_CODING_BADGE {
    insert_user_coding_badges(
      objects: { badgeId: 16, userId: "R7nzMKiRewgJuLm54eQ1KdHV3g82" }
    )
  }
`;
