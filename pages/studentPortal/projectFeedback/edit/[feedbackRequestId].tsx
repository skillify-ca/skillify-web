import { useRouter } from "next/router";
import React from "react";
import EditFeedbackRequestComponent from "../../../../components/studentPortal/projectFeedback/editFeedbackRequestComponent";

export default function EditFeedbackRequestPage() {
  const router = useRouter();
  return (
    <EditFeedbackRequestComponent
      feedbackRequestId={router.query.feedbackRequestId as string}
    />
  );
}

EditFeedbackRequestPage.auth = true;
