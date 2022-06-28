import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import {
  FetchUserGoalsDataResponse,
  FETCH_USER_GOALS,
  UserGoalsData,
} from "../../../graphql/fetchUserGoals";

export type ProfileGoalsSectionProps = {
  user: any;
};

export default function ProfileGoalsSection({
  user,
}: ProfileGoalsSectionProps) {
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
            <div className="py-2 mx-5 mb-5 text-center text-white rounded-full bg-murkrow">
              {it.goalName}
            </div>
          );
        })
      )}
    </>
  );
}
