import React from "react";
import { Course } from "../../../../components/studentPortal/layout/Course";
import { cssUnit } from "../../../api/studentPortal/units";

const CSSCoursePage = () => {
  return (
    <div>
      <Course units={[cssUnit]} course="css" />
    </div>
  );
};

export default CSSCoursePage;
