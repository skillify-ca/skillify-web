import { gql } from "@apollo/client";

export const FETCH_USER_ROLE = gql`
  query FetchUserRole($_id: String = "") {
    users(where: { id: { _eq: $_id } }) {
      created_at
      email
      userRole
    }
  }
`;

export type FetchRoleData = {
  users: UserData;
};
export type UserData = {
  userRole: "student" | "coach" | "freemium" | "paid";
  created_at: Date;
  email: string;
};
