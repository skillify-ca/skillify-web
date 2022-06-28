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
import GoalsSectionComponent, {
  GoalsSectionProps,
} from "../components/coding/goals/GoalsSectionComponent";

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

  // create goal sections here, map through below to render

  const goalsSections: GoalsSectionProps[] = [
    {
      header: {
        sectionName: "Current Goals",
        manageIcons: [
          <ArchiveIcon className={tailwindIconSize} />,
          <CheckCircleIcon className={tailwindIconSize} />,
        ],
      },
      userGoals: userGoals.filter((goal) => goal.isActive),
    },
    {
      header: {
        sectionName: "Completed Goals",
        manageIcons: [
          <ArchiveIcon className={tailwindIconSize} />,
          <TrashIcon className={tailwindIconSize} />,
        ],
      },
      userGoals: userGoals.filter((goal) => goal.isComplete),
    },
    {
      header: {
        sectionName: "Archived Goals",
        manageIcons: [<TrashIcon className={tailwindIconSize} />],
      },
      userGoals: userGoals.filter((goal) => !goal.isComplete && !goal.isActive),
    },
  ];

  return (
    <div className="flex flex-col p-4 m-4 overflow-auto bg-scroll">
      {userGoalsLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {goalsSections.map((section) => {
            return (
              <div>
                <GoalsSectionComponent
                  userGoals={section.userGoals}
                  header={section.header}
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
