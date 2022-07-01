import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import {
  FetchUserGoalsDataResponse,
  FETCH_USER_GOALS,
  FETCH_USER_GOAL_DETAIL,
  UserGoalsData,
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

export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "dbc1ac74-8b42-41e7-9969-65be9d028ee8" } },
      { params: { slug: "357c7793-a694-49f1-ae5e-cb6b3761ef3f" } },
      { params: { slug: "577b265f-869d-40d7-a491-72b5d0577706" } },
    ],
    fallback: true,
  };
}

export default EditGoalsPage;
