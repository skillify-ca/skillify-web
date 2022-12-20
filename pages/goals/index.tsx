import React, { useEffect, useState } from "react";

import { useAuth } from "../../lib/authContext";

import {
  FetchUserGoalsDataResponse,
  FETCH_USER_GOALS,
} from "../../graphql/fetchUserGoals";
import { useQuery } from "@apollo/client";
import { Button } from "../../components/ui/Button";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  userGoalsSelector,
  setUserGoals,
  GoalSection,
  setGoalsSections,
} from "../../redux/userGoalsSlice";
import { list } from "postcss";
import GoalsSectionComponent, {
  GoalsComponentSection,
} from "../../components/coding/GoalsSectionComponent";

export default function Goals(props) {
  const { user } = useAuth();
  const router = useRouter();
  const dispatch = useDispatch();
  const { userGoals, goalsSections } = useSelector(userGoalsSelector);

  const { loading: userGoalsLoading } = useQuery<FetchUserGoalsDataResponse>(
    FETCH_USER_GOALS,
    {
      variables: {
        userId: user.uid,
      },
      fetchPolicy: "cache-and-network",

      onCompleted: (data: FetchUserGoalsDataResponse) => {
        dispatch(setUserGoals(data.user_goals));
      },
    }
  );

  useEffect(() => {
    if (userGoals.length > 0) {
      dispatch(
        setGoalsSections([
          {
            sectionName: "Current",
            userGoals: userGoals.filter(
              (goal) => !goal.isComplete && !goal.isArchived
            ),
          },
          {
            sectionName: "Completed",
            userGoals: userGoals.filter(
              (goal) => goal.isComplete && !goal.isArchived
            ),
          },
          {
            sectionName: "Archived",
            userGoals: userGoals.filter((goal) => goal.isArchived),
          },
        ])
      );
    }
  }, [userGoals]);

  return (
    <div className="flex flex-col p-4 m-4 overflow-auto bg-scroll">
      <div>
        <div className="mb-8">
          <Button
            label={"Create Goal"}
            onClick={() => {
              router.push("/goals/addGoal");
            }}
          />
        </div>
        {goalsSections.map((section) => {
          return (
            <div className="mb-8">
              <GoalsSectionComponent
                userGoals={section.userGoals}
                sectionName={section.sectionName}
                componentUsageType={GoalsComponentSection.GOALS}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

Goals.auth = true;
