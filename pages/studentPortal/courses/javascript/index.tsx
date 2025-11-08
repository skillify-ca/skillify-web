import React from "react";
import { Course } from "../../../../components/studentPortal/layout/Course";
import { javascriptUnit } from "../../../api/studentPortal/units";

const JavaScriptCoursePage = () => {
  return (
    <div>
      <Course units={[javascriptUnit]} course="javascript" />
    </div>
  );
};

export default JavaScriptCoursePage;
