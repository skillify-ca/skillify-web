import { gql } from "@apollo/client";

export const UPSERT_LAST_SEEN_MODAL= gql`
mutation upsertLastSeenModal($userId: String!, $lastSeenModal: timestamptz!) {
    insert_freemium_users(objects: {userId: $userId, lastSeenModal: $lastSeenModal}, on_conflict: {constraint: freemium_users_pkey, update_columns: [lastSeenModal]}) {
      affected_rows
      returning {
        lastSeenModal
      }
    }
  }
`;
