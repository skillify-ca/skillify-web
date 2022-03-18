import React from "react";
import Sidebar from "../components/coding/studentPortal/Sidebar";
import UnitView from "../components/coding/studentPortal/UnitView";
import units from "./api/studentPortal/units";

export default function StudentPortalPage() {
  return (
    <>
      <p className="font-bold">January 1, 2022</p>
      <p className="text-3xl font-bold mb-8">Let's start learning, David</p>
      <div className="grid grid-cols-1 gap-4">
        {units.map((it) => (
          <UnitView data={it} />
        ))}
      </div>
    </>
  );
}
