import { gql } from "@apollo/client";

export const UPDATE_USER = gql`
  mutation updateUser(
    $userId: String = ""
    $last_seen: timestamptz = ""
    $profile_image: String = ""
  ) {
    update_users(
      where: { id: { _eq: $userId } }
      _set: { last_seen: $last_seen, profile_image: $profile_image }
    ) {
      affected_rows
    }
  }
`;
