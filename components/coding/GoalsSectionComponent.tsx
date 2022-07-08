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
        <div className="grid grid-cols-12 text-center border-b-2">
          <p className="text-lg font-semibold">{sectionName}</p>
          <p className="col-start-2 col-span-5 font-semibold text-lg">
            Goal Name
          </p>
          <p className="col-span-2 font-semibold text-lg">Date Added</p>
          <p className="col-span-2 font-semibold text-lg">Target Completion</p>
          <p className="col-span-2"></p>
        </div>
      )}

      {userGoals.map((goal, index) => {
        return (
          <div className="grid grid-cols-12 text-center">
            <p className="col-span-1">{index + 1}</p>
            <p className="col-span-5">{goal.goalName}</p>
            <p className="col-span-2">
              {format(new Date(goal.createdAt), "MM/dd/yyyy")}
            </p>
            <p className="col-span-2">
              {format(new Date(goal.targetDate), "MM/dd/yyyy")}
            </p>
            <div>
              <Link href={"/goals/" + goal.id}>
                <PencilAltIcon className="h-5 w-5 hover:text-yellow-600 cursor-pointer" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
