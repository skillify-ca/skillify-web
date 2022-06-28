import { format } from "date-fns";
import React, { useState } from "react";
import { UserGoalsData } from "../../graphql/fetchUserGoals";
import { GoalsSectionHeader } from "../../pages/api/goals/goalsHelpers";

export type GoalsSectionProps = {
  userGoals: UserGoalsData[];
  header: GoalsSectionHeader;
};

export default function GoalsSection({ userGoals, header }: GoalsSectionProps) {
  return (
    <div>
      <h2 className="mt-14 mb-9 font-bold text-lg border-b-2">
        {header.sectionName}
      </h2>
      <div className="grid grid-cols-12 text-center">
        <p className="col-span-1 font-bold">#</p>
        <p className="col-span-5 font-bold">Goal Name</p>
        <p className="col-span-2 font-bold">Date Added</p>
        <p className="col-span-2 font-bold">Target Completion</p>
        <p className="col-span-2"></p>
      </div>
      {userGoals.map((goal, index) => {
        return (
          <div className="grid grid-cols-12 text-center">
            <p className="col-span-1">{index + 1}</p>
            <p className="col-span-5">{goal.goalName}</p>
            <p className="col-span-2">{format(goal.createdAt, "MMMM yyyy")}</p>
            <p className="col-span-2">{format(goal.targetDate, "MMMM yyyy")}</p>
            <div className="col-span-2 flex justify-center">
              {header.manageIcons.map((icon) => {
                return <div>{icon}</div>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
