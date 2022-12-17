import { PencilAltIcon } from "@heroicons/react/outline";
import { differenceInCalendarDays, format } from "date-fns";
import Link from "next/link";
import React, { useState } from "react";
import { UserGoalsData } from "../../graphql/fetchUserGoals";
import ExpandableContainer from "./ExpandableContainer";
export type GoalsSectionProps = {
  sectionName?: string;
  userGoals?: UserGoalsData[];
};

export const returnGoalStyle = (goal: UserGoalsData) => {
  let goalStyle = "";
  const daysRemaining = differenceInCalendarDays(
    new Date(goal.targetDate),
    new Date()
  );
  if (daysRemaining <= 0 && !goal.isComplete && !goal.isArchived) {
    goalStyle = "text-black bg-red-400 rounded-xl p-2";
  } else if (daysRemaining <= 3 && !goal.isComplete && !goal.isArchived) {
    goalStyle = "text-black-500 bg-yellow-300 rounded-xl p-2";
  } else {
    goalStyle = " text-black-500";
  }
  return goalStyle;
};

export default function GoalsSection({
  sectionName,
  userGoals,
}: GoalsSectionProps) {
  return (
    <div className="dark:text-white">
      {userGoals.length > 0 && (
        <ExpandableContainer open={true} title={""}>
          <div className="grid grid-cols-5 text-sm font-semibold text-center border-b-2 md:grid-cols-12 md:text-lg">
            <p className="font-semibold">{sectionName}</p>
            <p className="col-span-2 md:col-span-4">Goal</p>
            <p className="hidden md:block md:col-span-2">Date Added</p>
            <p className="font-semibold md:col-span-2">Target Date</p>
            <p className="hidden md:block md:col-span-2">Days Remaining</p>
          </div>
        </ExpandableContainer>
      )}

      {userGoals.map((goal, index) => {
        return (
          <div
            className={`grid grid-cols-5 my-2 text-sm text-center md:grid-cols-12 md:text-lg place-items-center ${returnGoalStyle(
              goal
            )}`}
          >
            <p>{index + 1}.</p>
            <p className="col-span-2 md:col-span-4">{goal.goalName}</p>
            <p className="hidden md:block md:col-span-2">
              {format(new Date(goal.createdAt), "MM/dd/yyyy")}
            </p>
            <p className="hidden md:block col-span-1 md:col-span-2">
              {format(new Date(goal.targetDate), "MM/dd/yyyy")}
            </p>
            <p className="md:hidden col-span-1">
              {format(new Date(goal.targetDate), "MM/dd")}
            </p>
            <p className="hidden md:block md:col-span-2">
              {differenceInCalendarDays(new Date(goal.targetDate), new Date())}
            </p>
            <Link href={"/goals/" + goal.id}>
              <PencilAltIcon className="w-5 h-5 cursor-pointer hover:text-yellow-600" />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
