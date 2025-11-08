import React from "react";
import { Course } from "../../../../components/studentPortal/layout/Course";
import { htmlUnit } from "../../../api/studentPortal/units";

const HTMLCoursePage = () => {
  return (
    <div>
      <Course units={[htmlUnit]} course="html" />
    </div>
  );
};

export default HTMLCoursePage;
