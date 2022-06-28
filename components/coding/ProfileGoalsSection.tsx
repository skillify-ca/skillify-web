import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import {
  FetchUserGoalsDataResponse,
  FETCH_USER_GOALS,
  UserGoalsData,
} from "../../graphql/fetchUserGoals";

export type GoalsSectionProps = {
  user: any;
};

export default function ProfileGoalsSection({ user }: GoalsSectionProps) {
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
