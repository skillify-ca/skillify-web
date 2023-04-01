import { gql } from "@apollo/client";

export const FETCH_LAST_SEEN_MODAL = gql`
query fetchLastSeenModal($userId: String = "") {
    freemium_users(where: {userId: {_eq: $userId}}) {
      lastSeenModal
    }
  }
`;

export type FetchModalData = {
  freemium_users: ModalData[];
};

export type ModalData = {
    lastSeenModal: string;
  };
