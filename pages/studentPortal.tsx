import React from "react";
import Layout from "../components/coding/studentPortal/Layout";
import Sidebar from "../components/coding/studentPortal/Sidebar";
import UnitView from "../components/coding/studentPortal/UnitView";
import units from "./api/studentPortal/units";

export default function StudentPortalPage() {
  return (
    <>
      <p>Today's Date</p>
      <p>Let's start learning, David</p>
      <div className="grid grid-cols-1 gap-4">
        {units.map((it) => (
          <UnitView data={it} />
        ))}
      </div>
    </>
  );
}

StudentPortalPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
