import { gql } from "@apollo/client";

export const FETCH_LAST_SEEN_MODAL = gql`
query fetchLastSeenModal($_id: String = "") {
    users(where: {id: {_eq: $_id}, userRole: {value: {_in: ["freemium", "paid"]}}}) {
      freemium_user {
        lastSeenModal
      }
    }
  }
`;

export type FetchModalData = {
  users: ModalData[];
};

export type ModalData = {
  freemium_user?: {
    lastSeenModal: string;
  };
  };
