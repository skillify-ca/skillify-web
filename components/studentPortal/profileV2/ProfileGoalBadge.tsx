import { HandIcon } from "@heroicons/react/solid";
import React from "react";
import { useSelector } from "react-redux";
import { userGoalsSelector } from "../../../redux/userGoalsSlice";

export type ProfileGoalBadgeProps = {};

export default function ProfileGoalBadge({}: ProfileGoalBadgeProps) {
  const { userGoals, goalsSections } = useSelector(userGoalsSelector);
  return (
    <div className="flex items-center justify-center gap-2 p-2 bg-red-300 rounded-full">
      <HandIcon className="w-4 h-4 text-red-700 border-2 border-red-700 rounded-full" />
      <p className="text-sm font-bold text-red-800">
        {
          userGoals.filter(
            (it) => !it.isComplete && new Date(it.targetDate) < new Date()
          ).length
        }{" "}
        Overdue
      </p>
    </div>
  );
}
