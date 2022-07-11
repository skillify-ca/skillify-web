import { PencilAltIcon, PencilIcon } from "@heroicons/react/outline";
import { format } from "date-fns";
import Link from "next/link";
import React from "react";
import { UserGoalsData } from "../../graphql/fetchUserGoals";

export type GoalsSectionProps = {
  userGoals: UserGoalsData[];
  sectionName: string;
};

export default function GoalsSection({
  userGoals,
  sectionName,
}: GoalsSectionProps) {
  return (
    <div>
      {userGoals.length > 0 && (
        <div className="grid grid-cols-5 md:grid-cols-10 border-b-2 text-sm md:text-lg font-semibold text-center">
          <p className="font-semibold">{sectionName}</p>
          <p className="col-span-2 md:col-span-4">Goal</p>
          <p className="hidden md:block md:col-span-2">Date Added</p>
          <p className="md:col-span-2 font-semibold">Target Date</p>
        </div>
      )}

      {userGoals.map((goal, index) => {
        return (
          <div className="grid grid-cols-5 md:grid-cols-10 text-sm md:text-lg text-center place-items-center my-2">
            <p>{index + 1}.</p>
            <p className="col-span-2 md:col-span-4">{goal.goalName}</p>
            <p className="hidden md:block md:col-span-2">
              {format(new Date(goal.createdAt), "MM/dd/yyyy")}
            </p>
            <p className="md:col-span-2">
              {format(new Date(goal.targetDate), "MM/dd/yyyy")}
            </p>

            <Link href={"/goals/" + goal.id}>
              <PencilAltIcon className="h-5 w-5 hover:text-yellow-600 cursor-pointer" />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
