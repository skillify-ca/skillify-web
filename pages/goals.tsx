import React, { useState } from "react";

import { useAuth } from "../lib/authContext";
import {
  ArchiveIcon,
  TrashIcon,
  CheckCircleIcon,
} from "@heroicons/react/solid";

export default function Goals(props) {
  const { user } = useAuth();

  // need to define types for GoalsSections Data

  // sample data for Goals Sections, eventually pull from hasura and map to this data structure

  const tailwindIconSize = "h-5 w-5";

  const GoalsSections = [
    {
      header: {
        sectionName: "Current Goals",
        // array of heroicon components
        manageIcons: [
          <ArchiveIcon className={tailwindIconSize} />,
          <TrashIcon className={tailwindIconSize} />,
          <CheckCircleIcon className={tailwindIconSize} />,
        ],
      },
      rows: [
        {
          goalName: "Learn React Fundamentals",
          createdDate: "2022-06-01",
          targetDate: "2022-06-14",
        },
        {
          goalName: "First 5 problems of LeetCode 75",
          createdDate: "2022-06-01",
          targetDate: "2022-06-07",
        },
        {
          goalName: "Lorem Ipsum Dolor Sit Amet",
          createdDate: "2022-06-07",
          targetDate: "2022-07-01",
        },
      ],
    },

    {
      header: {
        sectionName: "Completed Goals",
        // array of heroicon components
        manageIcons: [
          <ArchiveIcon className={tailwindIconSize} />,
          <TrashIcon className={tailwindIconSize} />,
        ],
      },
      rows: [
        {
          goalName: "Complete all levels of FlexBox Frog Game",
          createdDate: "2022-06-01",
          targetDate: "2022-06-08",
        },
        {
          goalName: "Build Basic HTML page",
          createdDate: "2022-06-01",
          targetDate: "2022-06-06",
        },
        {
          goalName: "Make first pull request",
          createdDate: "2022-06-01",
          targetDate: "2022-06-02",
        },
      ],
    },

    {
      header: {
        sectionName: "Archived Goals",
        // array of heroicon components
        manageIcons: [
          <ArchiveIcon className={tailwindIconSize} />,
          <TrashIcon className={tailwindIconSize} />,
          <CheckCircleIcon className={tailwindIconSize} />,
        ],
      },
      rows: [
        {
          goalName: "Learn Kotlin",
          createdDate: "2022-06-01",
          targetDate: "2022-09-01",
        },
        {
          goalName: "Learn SQL",
          createdDate: "2022-06-01",
          targetDate: "2022-09-01",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col p-4 m-4 overflow-auto bg-scroll">
      {GoalsSections.map((section) => {
        return (
          <div>
            <h2 className="mt-14 mb-9 font-bold text-lg border-b-2">
              {section.header.sectionName}
            </h2>
            <div className="grid grid-cols-12 text-center">
              <p className="col-span-1 font-bold">#</p>
              <p className="col-span-5 font-bold">Goal Name</p>
              <p className="col-span-2 font-bold">Date Added</p>
              <p className="col-span-2 font-bold">Target Completion</p>
              <p className="col-span-2"></p>
            </div>
            {section.rows.map((goal, index) => {
              return (
                <div className="grid grid-cols-12 text-center">
                  <p className="col-span-1">{index + 1}</p>
                  <p className="col-span-5">{goal.goalName}</p>
                  <p className="col-span-2">{goal.createdDate}</p>
                  <p className="col-span-2">{goal.targetDate}</p>
                  <div className="col-span-2 flex justify-center">
                    {section.header.manageIcons.map((icon) => {
                      return <div>{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

Goals.auth = true;
