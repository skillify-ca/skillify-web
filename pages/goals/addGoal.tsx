import { format } from "date-fns";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button } from "../../components/ui/Button";
import { useAuth } from "../../lib/authContext";
import { useMutation } from "@apollo/client";
import { UPSERT_USER_GOALS } from "../../graphql/upsertUserGoals";

const EditGoalsPage = () => {
  const { user } = useAuth();

  const router = useRouter();

  // initialize only with values required by DB to add goal
  const [newGoalValues, setNewGoalValues] = useState({
    userId: user.uid,
    isActive: true,
    isComplete: false,
    goalName: "",
    targetDate: new Date(),
  });

  // route back to goals overview page on complete
  const [saveNewGoal] = useMutation(UPSERT_USER_GOALS, {
    onCompleted: () => router.push("/goals"),
  });

  return (
    <div className="flex flex-col p-4 m-4 overflow-auto bg-scroll space-y-8">
      <h1 className="text-3xl font-bold">Add New Goal</h1>

      <div className="flex flex-col space-y-2">
        <p className="font-bold">Goal Name</p>
        <input
          type="text"
          className="text-left p-2 border rounded-md shadow-md w-1/2"
          placeholder="Write your goal here..."
          value={newGoalValues.goalName ?? ""}
          onChange={(e) => {
            setNewGoalValues((prevState) => ({
              ...prevState,
              goalName: e.target.value,
            }));
          }}
        />
        <p className="font-bold">Target Completion Date</p>
        <input
          type="date"
          className="text-left p-2 border rounded-md shadow-md w-1/4"
          value={format(new Date(newGoalValues.targetDate), "yyyy-MM-dd")}
          onChange={(e) => {
            setNewGoalValues((prevState) => ({
              ...prevState,
              targetDate: new Date(e.target.value),
            }));
          }}
        />
      </div>

      <div>
        <Button
          label="Add Goal"
          onClick={() => {
            saveNewGoal({
              variables: {
                objects: newGoalValues,
              },
            });
          }}
        />
      </div>
    </div>
  );
};

export default EditGoalsPage;
