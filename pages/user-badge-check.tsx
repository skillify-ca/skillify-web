import { ApolloClient, InMemoryCache } from "@apollo/client";
import React from "react";
import { FETCH_BADGE_ON_USERID } from "../graphql/fetchBadgeOnUserID";
import { userId } from "../graphql/utils/constants";

export default async function userbadge() {
  const client = new ApolloClient({
    uri: "https://talented-duckling-40.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
  });
  const userbadges = [];

  const { data: array } = await client.query({
    query: FETCH_BADGE_ON_USERID,
    variables: {
      userbadges: userId,
    },
  });

  return <div> hello world</div>;
}
