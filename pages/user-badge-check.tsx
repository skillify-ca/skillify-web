import { ApolloClient, InMemoryCache } from "@apollo/client";
import { data } from "browserslist";
import React from "react";
import { FETCH_BADGE_ON_USERID } from "../graphql/fetchBadgeOnUserID";
import { userId } from "../graphql/utils/constants";

export default async function userbadge() {
  const client = new ApolloClient({
    uri: "https://talented-duckling-40.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: FETCH_BADGE_ON_USERID,
    variables: {
      userId: "116309327098433793664",
    },
  });

  console.log("data", data);
}
