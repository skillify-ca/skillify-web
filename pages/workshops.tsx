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
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h2>Build an image carousel</h2>

            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: "0",
              }}
            >
              <iframe
                src="https://www.loom.com/embed/ab0c13b6bf4e43cea43303ee0494f0ad"
                frameBorder={"0"}
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              ></iframe>
            </div>
          </div>
          <div>
            <h2>Course HTML/CSS Page</h2>
            <video
              src="https://d3jppm0n5ndqu2.cloudfront.net/header-section-workshop.mp4"
              controls={true}
            />
            <a href="https://d3jppm0n5ndqu2.cloudfront.net/course-workshop-files.zip">
              <div className="mt-4">
                <Button label={"Starter Files"} />
              </div>
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
