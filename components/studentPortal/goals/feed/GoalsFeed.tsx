import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { FETCH_ALL_USER_GOALS } from "../../../../graphql/studentPortal/goals/fetchAllUserGoals";

type Goal = {
  description: string;
  userName: string;
  completedOn: string;
};

export default function GoalsFeed() {
  const [goals, setGoals] = useState<Goal[]>([]);

  useQuery(FETCH_ALL_USER_GOALS, {
    onCompleted: (data) => {
      const transformedGoals = data.user_goals.map((goal) => {
        return {
          description: goal.goalName,
          userName: goal.usersTable.name,
          completedOn: goal.updatedAt,
        };
      });

      setGoals(transformedGoals);
    },
  });

  return (
    <div className="h-screen p-4 overflow-y-auto bg-white border-l-2">
      <h1 className="mb-4 text-2xl font-bold">Goals Feed</h1>
      {goals.map((goal) => (
        <div
          key={goal.description}
          className="p-2 mb-4 border-2 rounded bg-slate-100 "
        >
          <p>{goal.description}</p>
          <p className="font-bold">
            {goal.userName}{" "}
            <span className="text-bulbasaur-500">Completed</span>
          </p>
          <p>
            {new Date(goal.completedOn).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "2-digit",
            })}
          </p>
        </div>
      ))}
    </div>
  );
}
