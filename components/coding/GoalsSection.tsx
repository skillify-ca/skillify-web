import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import {
  FetchUserGoalsDataResponse,
  FETCH_USER_GOALS,
  UserGoalsData,
} from "../../graphql/fetchUserGoals";
import { useAuth } from "../../lib/authContext";

export type GoalsSectionProps = {
  user: any;
};

export default function GoalsSection({ user }: GoalsSectionProps) {
  const [userGoals, setUserGoals] = useState<UserGoalsData[]>([]);
  const { loading: userGoalsLoading } = useQuery<FetchUserGoalsDataResponse>(
    FETCH_USER_GOALS,
    {
      variables: {
        userId: user.uid,
      },

      onCompleted: (data: FetchUserGoalsDataResponse) => {
        setUserGoals(
          data.user_goals.map((it) => {
            return {
              __typename: it.__typename,
              createdAt: it.createdAt,
              goalName: it.goalName,
              id: it.id,
              isActive: it.isActive,
              updatedAt: it.updatedAt,
              userId: it.userId,
            };
          })
        );
      },
    }
  );

  return (
    <>
      {userGoalsLoading ? (
        <div>Loading...</div>
      ) : (
        userGoals.map((it) => {
          return (
            <div className="text-white bg-murkrow text-center rounded-full mx-5 py-2 mb-5">
              {it.goalName}
            </div>
          );
        })
      )}
    </>
  );
}
