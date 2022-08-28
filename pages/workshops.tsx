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

const WorkshopsPage = () => {
  const workshopsData = [
    {
      title: "Course HTML/CSS Page",
      video:
        "https://d3jppm0n5ndqu2.cloudfront.net/header-section-workshop.mp4",
      starterFile:
        "https://d3jppm0n5ndqu2.cloudfront.net/course-workshop-files.zip",
    },
    {
      title: "War Game: JS Basics - August 8, 2022",
      video: "https://d3jppm0n5ndqu2.cloudfront.net/war-workshop.mp4",
    },
    {
      title: "Pokedex - July 20, 2022",
      video: "https://d3jppm0n5ndqu2.cloudfront.net/pokedex-workshop-final.mp4",
    },
    {
      title: "Pokedex - July 21, 2022",
      video: "https://d3jppm0n5ndqu2.cloudfront.net/pokedex-july-21.mov",
    },
  ];
  return (
    <div className="flex flex-col p-4 m-4 overflow-auto bg-scroll">
      <div>
        <div className="mb-8 text-3xl">Workshops</div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {workshopsData.map((it) => (
            <div>
              <WorkshopsCard
                title={it.title}
                video={it.video}
                starterFile={it.starterFile}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkshopsPage;
