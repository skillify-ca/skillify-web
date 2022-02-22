import React from "react";
import UnitView from "../components/studentPortal/UnitView";
import units from "./api/studentPortal/units";

export default function StudentPortalPage() {
  return (
    <div className="grid grid-cols-1 gap-4 bg-white shadow-lg rounded-xl p-8 m-8">
      <p>Today's Date</p>
      <p>Let's start learning, David</p>
      <div className="grid grid-cols-1 gap-4">
        {units.map((it) => (
          <UnitView data={it} />
        ))}
      </div>
    </div>
  );
}
