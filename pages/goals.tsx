import React, { useState } from "react";

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
import GoalsSectionComponent from "../components/coding/GoalsSectionComponent";

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

  const tailwindIconSize = "h-5 w-5";

  return (
    <div className="flex flex-col p-4 m-4 overflow-auto bg-scroll">
      {userGoalsLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <GoalsSectionComponent
            // only fetch active goals
            userGoals={userGoals.filter((goal) => goal.isActive)}
            header={{
              sectionName: "Current Goals",
              manageIcons: [
                <ArchiveIcon className={tailwindIconSize} />,
                <CheckCircleIcon className={tailwindIconSize} />,
              ],
            }}
          />
          <GoalsSectionComponent
            // only fetch complete goals
            userGoals={userGoals.filter((goal) => goal.isComplete)}
            header={{
              sectionName: "Completed Goals",
              manageIcons: [
                <ArchiveIcon className={tailwindIconSize} />,
                <TrashIcon className={tailwindIconSize} />,
              ],
            }}
          />
          <GoalsSectionComponent
            // only fetch archived goals (not complete or not active)
            userGoals={userGoals.filter(
              (goal) => !goal.isComplete && !goal.isActive
            )}
            header={{
              sectionName: "Archived Goals",
              manageIcons: [<TrashIcon className={tailwindIconSize} />],
            }}
          />
        </div>
      )}
    </div>
  );
}

Goals.auth = true;
