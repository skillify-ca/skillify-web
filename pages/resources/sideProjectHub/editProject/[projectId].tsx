import { useRouter } from "next/router";
import React from "react";
import LandingNavbar from "../../../../components/landingPage/LandingNavbar";
import EditProjectComponent from "../../../../components/resources/sideProjectHub/editProjectComponent";

export default function EditProjectPage() {
  const router = useRouter();
  return <EditProjectComponent projectId={router.query.projectId as string} />;
}

EditProjectPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
