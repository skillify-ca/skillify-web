import React from "react";
import Sidebar from "../components/coding/studentPortal/Sidebar";
import UnitView from "../components/coding/studentPortal/UnitView";
import units from "./api/studentPortal/units";

export default function StudentPortalPage() {
  return (
    <div className="grid grid-cols-12">
      <div className="hidden lg:flex col-span-2">LEFT</div>
      <div className="grid grid-cols-1 col-span-12 lg:col-span-7 gap-4 bg-white shadow-lg p-8">
        <p>Today's Date</p>
        <p>Let's start learning, David</p>
        <div className="grid grid-cols-1 gap-4">
          {units.map((it) => (
            <UnitView data={it} />
          ))}
        </div>
      </div>
      <div className="hidden lg:flex col-span-3">
        <Sidebar />
      </div>
    </div>
  );
}
