import React, { ReactComponentElement, ReactElement, useState } from "react";

import { useAuth } from "../lib/authContext";
import {
  ArchiveIcon,
  TrashIcon,
  CheckCircleIcon,
} from "@heroicons/react/solid";
import {
  FetchUserGoalsDataResponse,
  FETCH_USER_GOALS,
  UserGoalsData,
} from "../graphql/fetchUserGoals";
import { useQuery } from "@apollo/client";
import { format } from "date-fns";

export default function Goals(props) {
  const { user } = useAuth();

  const [userGoals, setUserGoals] = useState<UserGoalsData[]>([]);
  const { loading: userGoalsLoading } = useQuery<FetchUserGoalsDataResponse>(
    FETCH_USER_GOALS,
    {
      variables: {
        userId: user.uid,
      },

      onCompleted: (data: FetchUserGoalsDataResponse) => {
        setUserGoals(data.user_goals);
      },
    }
  );

  // need to define types for GoalsSections Data

  type GoalsSection = {
    header: GoalsSectionHeader;
    rows: UserGoalsData[];
  };

  type GoalsSectionHeader = {
    sectionName: string;
    manageIcons: Array<ReactElement>;
  };

  // sample data for Goals Sections, eventually pull from hasura and map to this data structure

  const tailwindIconSize = "h-5 w-5";

  const GoalsSections: GoalsSection[] = [
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
          __typename: "remove",
          userId: "raveen",
          isActive: true,
          updatedAt: new Date(2022, 6, 1),
          id: "test",
          isComplete: false,
          goalName: "Learn React Fundamentals",
          createdAt: new Date(2022, 6, 1),
          targetDate: new Date(2022, 6, 14),
        },
        {
          __typename: "remove",
          userId: "raveen",
          isActive: true,
          updatedAt: new Date(2022, 6, 1),
          id: "test",
          isComplete: false,
          goalName: "Completed Goal 2",
          createdAt: new Date(2022, 6, 1),
          targetDate: new Date(2022, 6, 14),
        },
        {
          __typename: "remove",
          userId: "raveen",
          isActive: true,
          updatedAt: new Date(2022, 6, 1),
          id: "test",
          isComplete: false,
          goalName: "Completed Goal 3",
          createdAt: new Date(2022, 6, 1),
          targetDate: new Date(2022, 6, 14),
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
          __typename: "remove",
          userId: "raveen",
          isActive: true,
          updatedAt: new Date(2022, 6, 1),
          id: "test",
          isComplete: false,
          goalName: "Completed Goal 1",
          createdAt: new Date(2022, 6, 1),
          targetDate: new Date(2022, 6, 14),
        },
        {
          __typename: "remove",
          userId: "raveen",
          isActive: true,
          updatedAt: new Date(2022, 6, 1),
          id: "test",
          isComplete: false,
          goalName: "Completed Goal 2",
          createdAt: new Date(2022, 6, 1),
          targetDate: new Date(2022, 6, 14),
        },
        {
          __typename: "remove",
          userId: "raveen",
          isActive: true,
          updatedAt: new Date(2022, 6, 1),
          id: "test",
          isComplete: false,
          goalName: "Completed Goal 3",
          createdAt: new Date(2022, 6, 1),
          targetDate: new Date(2022, 6, 14),
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
          __typename: "remove",
          userId: "raveen",
          isActive: true,
          updatedAt: new Date(2022, 6, 1),
          id: "test",
          isComplete: false,
          goalName: "Archived Goal 1",
          createdAt: new Date(2022, 6, 1),
          targetDate: new Date(2022, 6, 14),
        },
        {
          __typename: "remove",
          userId: "raveen",
          isActive: true,
          updatedAt: new Date(2022, 6, 1),
          id: "test",
          isComplete: false,
          goalName: "Archived Goal 2",
          createdAt: new Date(2022, 6, 1),
          targetDate: new Date(2022, 6, 14),
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
                  <p className="col-span-2">
                    {format(goal.createdAt, "MMMM yyyy")}
                  </p>
                  <p className="col-span-2">
                    {format(goal.targetDate, "MMMM yyyy")}
                  </p>
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
