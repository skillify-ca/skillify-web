import React, { useEffect, useState } from "react";

import { useAuth } from "../../lib/authContext";

import {
  FetchUserGoalsDataResponse,
  FETCH_USER_GOALS,
  UserGoalsData,
} from "../../graphql/fetchUserGoals";
import { useQuery } from "@apollo/client";
import GoalsSectionComponent from "../../components/coding/GoalsSectionComponent";
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

// to do list
// 1. add goalsSections to userGoals redux slice
// 2. dispatch goalsSections in useEffect

export default function Goals(props) {
  const { user } = useAuth();
  const router = useRouter();
  const dispatch = useDispatch();
  const { userGoals, goalsSections } = useSelector(userGoalsSelector);

  // this is what your state would like like if you were only using "local" useState
  // const [userGoals, setUserGoals] = useState<UserGoalsData[]>([])

  // get rid of this line when redux is successfully implemented
  //const [goalsSections, setGoalsSections] = useState<GoalSection[]>([]);

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
    // create goal sections here, map through below to render
    if (userGoals.length > 0) {
      console.log("useEffect is about to set the goalsSections");
      // dispatch(setGoalsSections())

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
      console.log("goalsSections are set", goalsSections);
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
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

Goals.auth = true;
