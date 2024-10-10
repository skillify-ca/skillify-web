import moment from "moment";
import React from "react";
import UnitView from "../../../../components/studentPortal/lessons/UnitView";
import PageHeader from "../../../../components/ui/PageHeader";
import { useAuth } from "../../../../lib/authContext";
import { interviewUnits } from "../../../api/studentPortal/units";

const InterviewCoursePage = () => {
  return (
    <div>
      <InterviewPrepCourse />
    </div>
  );
};

export const InterviewPrepCourse = () => {
  const progressBarStyle = "h-2 bg-gray-300 mt-4 mb-8";

  const { user } = useAuth();

  return (
    <div className="flex flex-col w-full px-4 pb-4 sm:px-8 sm:pb-8 ">
      <PageHeader
        title={`Let's start learning, ${user.displayName}`}
        description={moment().format("MMM Do YYYY")}
      />

      {interviewUnits.map((unit) => (
        <UnitView key={unit.title} data={unit} />
      ))}
    </div>
  );
};

export default InterviewCoursePage;
