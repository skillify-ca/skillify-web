import { gql } from "@apollo/client";
export type user_coding_badges_insert_input = {
  badgeId: number;
  userId: string;
};

export const DELETE_USER_CODING_BADGES = gql`
  mutation DELETE_USER_CODING_BADGES($badgeId: Int!, $userId: String!) {
    delete_user_coding_badges(
      where: {
        _and: [{ badgeId: { _eq: $badgeId } }, { userId: { _eq: $userId } }]
      }
    ) {
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
