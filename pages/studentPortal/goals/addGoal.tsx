import { format } from "date-fns";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button } from "../../../components/ui/Button";
import { useAuth } from "../../../lib/authContext";
import { supabase } from "../../../lib/supabase";

export const GOAL_CHAR_LIMIT = 1500;

const EditGoalsPage = () => {
  const { user } = useAuth();

  const router = useRouter();

  // initialize only with values required by DB to add goal
  const [newGoalValues, setNewGoalValues] = useState({
    userId: user.uid,
    isComplete: false,
    goalName: "",
    targetDate: new Date(),
  });

  const saveNewGoal = async () => {
    try {
      const { error } = await supabase.from("user_goals").insert([newGoalValues]);
      if (error) {
        throw error;
      }
      router.push("/studentPortal/goals");
    } catch (error) {
      console.error("Error saving new goal:", error);
    }
  };

  return (
    <div className="flex flex-col p-4 m-4 space-y-8 overflow-auto bg-scroll">
      <h1 className="text-3xl font-bold">Add New Goal</h1>

      <div className="flex flex-col space-y-2">
        <p className="font-bold">Goal</p>
        <textarea
          className={`text-left p-2 border rounded-md shadow-md w-1/2 dark:text-murkrow
            ${newGoalValues.goalName.length <= 60 ? "" : " border-red-600"}`}
          placeholder="Write your goal here..."
          value={newGoalValues.goalName ?? ""}
          onChange={(e) => {
            setNewGoalValues((prevState) => ({
              ...prevState,
              goalName: e.target.value,
            }));
          }}
        />
        {newGoalValues.goalName.length > GOAL_CHAR_LIMIT && (
          <p className="text-xs text-red-600">
            please keep your goal under {GOAL_CHAR_LIMIT} characters
          </p>
        )}
        <p className="font-bold">Target Completion Date</p>
        <input
          type="date"
          className={`text-left p-2 border rounded-md shadow-md w-1/2 dark:text-murkrow ${
            newGoalValues.targetDate >= new Date() ? "" : " border-red-600"
          }`}
          value={format(new Date(newGoalValues.targetDate), "yyyy-MM-dd")}
          onChange={(e) => {
            setNewGoalValues((prevState) => ({
              ...prevState,
              targetDate: new Date(e.target.value + "T00:00:00"),
            }));
          }}
        />
        {newGoalValues.targetDate < new Date() && (
          <p className="text-xs text-red-600">
            please set a target date after today
          </p>
        )}
      </div>

      <div>
        <Button
          label="Add Goal"
          onClick={saveNewGoal}
          disabled={
            newGoalValues.goalName.length == 0 ||
            newGoalValues.goalName.length > GOAL_CHAR_LIMIT ||
            newGoalValues.targetDate < new Date()
          }
        />
      </div>
    </div>
  );
};

export default EditGoalsPage;
