import { PencilAltIcon, PencilIcon } from "@heroicons/react/outline";
import {
  differenceInCalendarDays,
  differenceInDays,
  format,
  formatDistance,
  isSameWeek,
} from "date-fns";
import moment from "moment";
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
        <div className="grid grid-cols-5 text-sm font-semibold text-center border-b-2 md:grid-cols-12 md:text-lg">
          <p className="font-semibold">{sectionName}</p>
          <p className="col-span-2 md:col-span-4">Goal</p>
          <p className="hidden md:block md:col-span-2">Date Added</p>
          <p className="font-semibold md:col-span-2">Target Date</p>
          <p className="hidden md:block md:col-span-2">Days Remaining</p>
        </div>
      )}

      {userGoals.map((goal, index) => {
        return (
          <div
            className={`grid grid-cols-5 my-2 text-sm text-center md:grid-cols-12 md:text-lg place-items-center ${
              differenceInCalendarDays(new Date(goal.targetDate), new Date()) <=
              2
                ? "text-red-500 bg-yellow-100"
                : differenceInCalendarDays(
                    new Date(goal.targetDate),
                    new Date()
                  ) <= 7
                ? " text-red-500"
                : "text-black-500 bg-none"
            }`}
          >
            <p>{index + 1}.</p>
            <p className="col-span-2 md:col-span-4">{goal.goalName}</p>
            <p className="hidden md:block md:col-span-2">
              {format(new Date(goal.createdAt), "MM/dd/yyyy")}
            </p>
            <p className="md:col-span-2">
              {format(new Date(goal.targetDate), "MM/dd/yyyy")}
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
