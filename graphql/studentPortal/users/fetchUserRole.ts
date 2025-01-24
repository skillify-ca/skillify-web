import { gql } from "@apollo/client";
import { UserRole } from "../../../redux/profileSlice";

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
  users: UserData[];
};
export type UserData = {
  userRole: UserRole;
  created_at: Date;
  email: string;
};
