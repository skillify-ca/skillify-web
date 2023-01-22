import { gql } from "@apollo/client";
type user_coding_badges_insert_input = {
  badgeId: number;
  userId: string;
};
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
