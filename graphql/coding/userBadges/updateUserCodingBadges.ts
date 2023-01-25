import { gql } from "@apollo/client";

export const DELETE_USER_CODING_BADGES = gql`
  mutation DELETE_USER_CODING_BADGES($objects: [user_coding_badges_bool_exp!]) {
    delete_user_coding_badges(where: { _and: $objects }) {
      returning {
        id
      }
    }
  }
`;

export const INSERT_USER_CODING_BADGES = gql`
  mutation INSERT_USER_CODING_BADGE(
    $objects: [user_coding_badges_insert_input!]!
  ) {
    insert_user_coding_badges(objects: $objects) {
      returning {
        badgeId
      }
    }
  }
`;
