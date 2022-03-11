import React from "react";
import Layout from "../components/coding/studentPortal/Layout";

export default function ClassroomPage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">Coming Soon</h1>
      <img
        className="w-64 h-64 object-cover"
        src="/images/landingPage/cuate.svg"
        alt=""
      />
    </div>
  );
}

ClassroomPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
