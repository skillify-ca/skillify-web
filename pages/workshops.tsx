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
import WorkshopsCard from "../components/coding/studentPortal/WorkshopsCard";

export default function Workshops(props) {
  const { user } = useAuth();
  const router = useRouter();

  return (
    <div className="flex flex-col p-4 m-4 overflow-auto bg-scroll">
      <div>
        <div className="mb-8 text-3xl">Workshops</div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <WorkshopsCard
            title={"Course HTML/CSS Page"}
            video="https://d3jppm0n5ndqu2.cloudfront.net/header-section-workshop.mp4"
            starterFile="https://d3jppm0n5ndqu2.cloudfront.net/course-workshop-files.zip"
          />
          <WorkshopsCard
            title={"War Game: JS Basics - August 8, 2022"}
            video="https://d3jppm0n5ndqu2.cloudfront.net/war-workshop.mp4"
          />
          <WorkshopsCard
            title={"Pokedex - July 20, 2022"}
            video="https://d3jppm0n5ndqu2.cloudfront.net/pokedex-workshop-final.mp4"
          />
          <WorkshopsCard
            title={"Pokedex - July 21, 2022"}
            video="https://d3jppm0n5ndqu2.cloudfront.net/pokedex-july-21.mov"
          />
        </div>
      </div>
    </div>
  );
}

Workshops.auth = true;
