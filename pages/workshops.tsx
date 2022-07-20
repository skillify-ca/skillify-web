import React, { useState } from "react";

import { useAuth } from "../lib/authContext";

import {
  FetchUserGoalsDataResponse,
  FETCH_USER_GOALS,
  UserGoalsData,
} from "../graphql/fetchUserGoals";
import { useQuery } from "@apollo/client";
import GoalsSectionComponent from "../components/coding/GoalsSectionComponent";
import { Button } from "../components/ui/Button";
import { useRouter } from "next/router";

export default function Goals(props) {
  const { user } = useAuth();
  const router = useRouter();

  return (
    <div className="flex flex-col p-4 m-4 overflow-auto bg-scroll">
      <div>
        <div className="mb-8">Workshops</div>
        <div>
          <h2>Pokedex - July 20, 2022</h2>
          <video
            src="https://d3jppm0n5ndqu2.cloudfront.net/pokedex-workshop-final.mp4"
            controls={true}
          />
        </div>
      </div>
    </div>
  );
}

Goals.auth = true;
