import moment from "moment";
import React from "react";
import { useAuth } from "../../../lib/authContext";
import { Unit } from "../../../pages/api/studentPortal/units";
import PageHeader from "../../ui/PageHeader";
import GoalsFeed from "../goals/feed/GoalsFeed";
import { UnitView } from "../lessons/UnitView";

export const Course = ({ units, course }: { units: Unit[], course: string }) => {
    const { user } = useAuth();
  
    return (
      <div className="grid w-full grid-cols-12 ">
        <div className="flex flex-col h-screen col-span-12 px-4 pb-4 overflow-y-auto lg:col-span-8 sm:px-8 sm:pb-8">
          <PageHeader
            title={`Let's start learning, ${user.displayName}`}
            description={moment().format("MMM Do YYYY")}
          />
          <div className="grid grid-cols-1 gap-4">
            {units.map((it, i) => (
              <UnitView key={i} data={it} course={course} />
            ))}
          </div>
        </div>
        <div className="hidden col-span-4 overflow-y-auto lg:flex">
          <GoalsFeed />
        </div>
      </div>
    );
  };