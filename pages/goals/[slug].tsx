import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client";
import React, { useState } from "react";
import {
  FetchUserGoalsDataResponse,
  FETCH_GOALS,
  FETCH_USER_GOAL_DETAIL,
} from "../../graphql/fetchUserGoals";
import { useAuth } from "../../lib/authContext";

const EditGoalsPage = ({ slug }) => {
  const { user } = useAuth();

  const goalDetailResults = useQuery<FetchUserGoalsDataResponse>(
    FETCH_USER_GOAL_DETAIL,
    {
      variables: {
        userId: user.uid,
        id: slug,
      },
    }
  );

  let goalDetail;
  if (goalDetailResults.data) {
    goalDetail = goalDetailResults.data.user_goals[0];
  }

  return (
    <div>
      {goalDetail && (
        <div>
          <h1>Details for {goalDetail.id}</h1>
          <div>{JSON.stringify(goalDetail)}</div>
        </div>
      )}
    </div>
  );
};

export async function getStaticPaths() {
  const client = new ApolloClient({
    uri: "https://talented-duckling-40.hasura.app/v1/graphql/",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: FETCH_GOALS,
  });

  const ids = data.user_goals.map((goal) => {
    return { params: { slug: goal.id.toString() } };
  });

  return {
    paths: ids,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug,
    },
  };
}

export default EditGoalsPage;
