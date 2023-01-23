import { gql } from "@apollo/client";

export const FETCH_USER_ROLE = gql`
query FetchUserRole($_id: String = "") {
    users(where: {id: {_eq: $id}}) {
      userRole {
        value
      }
    }
  }
`;

export type FetchUserRoleData = {
    users: UserRoleData;
}
export type UserRoleData = {
    userRole: "student"|"coach";
}
