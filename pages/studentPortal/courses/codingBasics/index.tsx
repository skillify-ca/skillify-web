import moment from "moment";
import React, { useEffect, useState } from "react";
import GoalsFeed from "../../../../components/studentPortal/goals/feed/GoalsFeed";
import UnitView from "../../../../components/studentPortal/lessons/UnitView";
import PageHeader from "../../../../components/ui/PageHeader";
import { useAuth } from "../../../../lib/authContext";
import { Unit, codingBasicsCourse } from "../../../api/studentPortal/units";

const InterviewCoursePage = () => {
  return (
    <div>
      <InterviewPrepCourse />
    </div>
  );
};

export const InterviewPrepCourse = () => {
  const { user } = useAuth();

  const [units, setUnits] = useState<Unit[]>([]);

  useEffect(() => {
    setUnits(codingBasicsCourse.units);
  }, [units]);

  return (
    <div className="grid w-full grid-cols-12 ">
      <div className="flex flex-col h-screen col-span-12 px-4 pb-4 overflow-y-auto lg:col-span-8 sm:px-8 sm:pb-8">
        <PageHeader
          title={`Let's start learning, ${user.displayName}`}
          description={moment().format("MMM Do YYYY")}
        />
        <div className="grid grid-cols-1 gap-4">
          {units.map((it, i) => (
            <UnitView key={i} data={it} course="codingBasics" />
          ))}
        </div>
      </div>
      <div className="hidden col-span-4 overflow-y-auto lg:flex">
        <GoalsFeed />
      </div>
    </div>
  );
};

export default InterviewCoursePage;
