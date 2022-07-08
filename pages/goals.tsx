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

  const [userGoals, setUserGoals] = useState<UserGoalsData[]>([]);
  const { loading: userGoalsLoading } = useQuery<FetchUserGoalsDataResponse>(
    FETCH_USER_GOALS,
    {
      variables: {
        userId: user.uid,
      },
      fetchPolicy: "cache-and-network",

      onCompleted: (data: FetchUserGoalsDataResponse) => {
        setUserGoals(data.user_goals);
      },
    }
  );

  const tailwindIconSize = "h-5 w-5";

  // create goal sections here, map through below to render

  const goalsSections = [
    {
      sectionName: "Current Goals",
      userGoals: userGoals.filter(
        (goal) => !goal.isComplete && !goal.isArchived
      ),
    },
    {
      sectionName: "Completed Goals",
      userGoals: userGoals.filter(
        (goal) => goal.isComplete && !goal.isArchived
      ),
    },
    {
      sectionName: "Archived Goals",
      userGoals: userGoals.filter((goal) => goal.isArchived),
    },
  ];

  return (
    <div className="flex flex-col p-4 m-4 overflow-auto bg-scroll">
      {userGoalsLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div>
            <Button
              label={"Create Goal"}
              onClick={() => {
                router.push("/goals/addGoal");
              }}
            />
          </div>
          {userGoals.length > 0 &&
            goalsSections.map((section) => {
              return (
                <div>
                  <GoalsSectionComponent
                    userGoals={section.userGoals}
                    sectionName={section.sectionName}
                  />
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

Goals.auth = true;
