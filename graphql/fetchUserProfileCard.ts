import { gql } from "@apollo/client";

export const FETCH_USER_PROFILE_CARD = gql`
  query fetchUsers {
    users(where: { enrolled: { _eq: true } }) {
      id
      name
      profile_image
      badges_earned
      created_at
    }
  }
`;
