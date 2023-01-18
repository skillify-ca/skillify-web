import { gql } from "@apollo/client";

export const DELETE_USER_CODING_BADGE = gql`
  mutation DELETE_USER_CODING_BADGE {
    delete_user_coding_badges(
      where: {
        _and: {
          badgeId: { _eq: 16 }
          userId: { _eq: "R7nzMKiRewgJuLm54eQ1KdHV3g82" }
        }
      }
    ) {
      returning {
        id
      }
    }
  }
`;
