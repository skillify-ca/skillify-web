import { gql } from "@apollo/client";

export const DELETE_USER_BADGES = gql`
  mutation DELETE_USER_BADGES {
    delete_user_coding_badges(
      where: {
        _and: {
          badgeId: { _eq: 8 }
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
