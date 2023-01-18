import { gql } from "@apollo/client";

export const INSERT_USER_CODING_BADGE = gql`
  mutation INSERT_USER_CODING_BADGE {
    insert_user_coding_badges(
      objects: { userId: "R7nzMKiRewgJuLm54eQ1KdHV3g82", badgeId: 16 }
    ) {
      returning {
        id
      }
    }
  }
`;
