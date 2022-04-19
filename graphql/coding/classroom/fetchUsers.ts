import { gql } from "@apollo/client";

export const FETCH_CLASSROOM_USERS = gql`
  query fetchUsers {
    users(
      where: { enrolled: { _eq: true } }
      order_by: { badges_earned: desc }
    ) {
      name
      profile_image
      created_at
      badges_earned
    }
  }
`;

export type FetchUsersResponse = {
  users: User[];
};

export type User = {
  name: string;
  profile_image: string;
  created_at: Date;
  badges_earned: number;
};
