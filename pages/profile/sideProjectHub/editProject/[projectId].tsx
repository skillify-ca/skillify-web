import { useRouter } from "next/router";
import React from "react";
import EditProjectComponent from "../../../../components/studentPortal/profileV2/sideProjectHub/editProjectComponent";

export default function EditProjectPage() {
  const router = useRouter();
  return <EditProjectComponent projectId={router.query.projectId as string} />;
}

EditProjectPage.auth = true;
