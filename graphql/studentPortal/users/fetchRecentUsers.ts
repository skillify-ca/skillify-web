import { gql } from "@apollo/client";

export const FETCH_RECENT_USERS = gql`
  query recentUsers($_gte: timestamptz = "2022-01-01") {
    users(where: { last_seen: { _gte: "2022-01-01" } }) {
      name
      id
      link
    }
  }
`;
