import { gql } from "@apollo/client";

export const INSERT_USER_CODING_BADGES = gql`
  mutation INSERT_USER_CODING_BADGE {
    insert_user_coding_badges(objects: $objects) {
      returning {
        badgeId
      }
    }
  }
`;
