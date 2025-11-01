import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GoalsSectionComponent from "../../../components/studentPortal/goals/GoalsSectionComponent";
import { Button } from "../../../components/ui/Button";
import { useAuth } from "../../../lib/authContext";
import { supabase } from "../../../lib/supabase";
import {
  setGoalsSections,
  setUserGoals,
  userGoalsSelector,
} from "../../../redux/userGoalsSlice";

export default function Goals(props) {
  const { user } = useAuth();
  const router = useRouter();
  const dispatch = useDispatch();
  const { userGoals, goalsSections } = useSelector(userGoalsSelector);

  useEffect(() => {
    const fetchUserGoals = async () => {
      if (!user) {
        return;
      }
      try {
        const { data, error } = await supabase
          .from("user_goals")
          .select("*")
          .eq("userId", user.uid);

        if (error) {
          throw error;
        }
        dispatch(setUserGoals(data));
      } catch (error: any) {
        console.log("error", error);
      }
    };

    fetchUserGoals();
  }, [user]);

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
        <div className="flex flex-col p-4 mb-8 bg-slate-100">
          <h2 className="text-xl font-bold">Create a goal</h2>
          <p className="mt-2 mb-4">
            Did you know that you can double your chances of achieving a goal
            just by writing it down somewhere?
          </p>
          <Button
            label={"Create Goal"}
            onClick={() => {
              router.push("/studentPortal/goals/addGoal");
            }}
          />
        </div>

        {goalsSections.map((section) => {
          return (
            <div
              className="p-4 mb-8 rounded bg-backgroundSecondary"
              key={section.sectionName}
            >
              <h6 className="p-2 text-center shadow text-brandPrimary bg-backgroundPrimary w-28 rounded-xl">
                {section.sectionName}
              </h6>

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
