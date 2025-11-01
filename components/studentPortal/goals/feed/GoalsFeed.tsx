import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../../../ui/Avatar";
import { useAllUserGoals } from "./useAllUserGoals";

type Goal = {
  id: string;
  description: string;
  userName: string;
  profileImage: string;
  completedOn: string;
};

export default function GoalsFeed() {
  const { data } = useAllUserGoals();

  const goals: Goal[] = data?.user_goals
    ? data.user_goals.map((goal) => {
        return {
          id: goal.id,
          description: goal.goalName,
          userName: goal.usersTable?.name || "",
          completedOn: goal.updatedAt instanceof Date 
            ? goal.updatedAt.toISOString() 
            : typeof goal.updatedAt === 'string' 
            ? goal.updatedAt 
            : new Date(goal.updatedAt).toISOString(),
          profileImage: goal.usersTable?.profile_image || "",
        };
      })
    : [];

  return (
    <div className="h-screen p-4 overflow-y-auto border-l-2 bg-backgroundPrimary">
      <h1 className="mb-4 text-2xl font-bold">Goals Feed</h1>
      <div className="rounded-lg shadow-md">
        {goals.map((goal) => (
          <div
            key={goal.id}
            className="p-2 border-2 odd:bg-backgroundSecondary"
          >
            <p className="text-sm font-bold text-bulbasaur-500">Completed</p>

            <p>{goal.description}</p>
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8 bg-slate-200">
                <AvatarImage src={goal.profileImage} alt="user avatar" />
                <AvatarFallback>{goal.userName.charAt(0)}</AvatarFallback>
              </Avatar>
              <p className="font-bold">{goal.userName} </p>
            </div>
            <p className="text-xs">
              {new Date(goal.completedOn).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          
          </div>
        ))}
      </div>
    </div>
  );
}
