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
        <div className="mb-8 text-3xl">Workshops</div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h2>Course HTML/CSS Page</h2>
            <video
              src="https://d3jppm0n5ndqu2.cloudfront.net/header-section-workshop.mp4"
              controls={true}
            />
            <a href="https://d3jppm0n5ndqu2.cloudfront.net/course-workshop-files.zip">
              Template Files
            </a>
          </div>
          <div>
            <h2>War Game: JS Basics - August 8, 2022</h2>
            <video
              src="https://d3jppm0n5ndqu2.cloudfront.net/war-workshop.mp4"
              controls={true}
            />
          </div>
          <div>
            <h2>Pokedex - July 20, 2022</h2>
            <video
              src="https://d3jppm0n5ndqu2.cloudfront.net/pokedex-workshop-final.mp4"
              controls={true}
            />
          </div>
          <div>
            <h2>Pokedex - July 21, 2022</h2>
            <video
              src="https://d3jppm0n5ndqu2.cloudfront.net/pokedex-july-21.mov"
              controls={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Goals.auth = true;
