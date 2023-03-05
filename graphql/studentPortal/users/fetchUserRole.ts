import { gql } from "@apollo/client";

export const FETCH_USER_ROLE = gql`
query FetchUserRole($_id: String = "") {
  users(where: {id: {_eq: $_id}}) {
    created_at
    userRole {
      value
    }
  }
}

`;

export type FetchUserRoleData = {
  users: UserRoleData;
};
export type UserRoleData = {
  userRole: "student" | "coach"| "freemium";
  created_at: Date;
};
