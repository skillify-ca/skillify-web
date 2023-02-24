import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GoalsSectionComponent from "../../components/studentPortal/GoalsSectionComponent";
import { Button } from "../../components/ui/Button";
import {
  FetchUserGoalsDataResponse,
  FETCH_USER_GOALS,
} from "../../graphql/fetchUserGoals";
import { useAuth } from "../../lib/authContext";
import {
  setGoalsSections,
  setUserGoals,
  userGoalsSelector,
} from "../../redux/userGoalsSlice";

export default function Goals(props) {
  const { user } = useAuth();
  const router = useRouter();
  const dispatch = useDispatch();
  const { userGoals, goalsSections } = useSelector(userGoalsSelector);

  const {} = useQuery<FetchUserGoalsDataResponse>(FETCH_USER_GOALS, {
    variables: {
      userId: user.uid,
    },
    fetchPolicy: "cache-and-network",

    onCompleted: (data: FetchUserGoalsDataResponse) => {
      dispatch(setUserGoals(data.user_goals));
    },
  });

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
            <div className="mb-8" key={section.sectionName}>
              <GoalsSectionComponent
                userGoals={section.userGoals}
                sectionName={section.sectionName}
                inProfile={false}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

Goals.auth = true;
