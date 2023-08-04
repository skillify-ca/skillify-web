import { useRouter } from "next/router";
import React from "react";
import FeedbackResponse from "../../../components/studentPortal/projectFeedback/feedbackResponse";

export default function EditFeedbackRequestPage() {
  const router = useRouter();
  return (
    <FeedbackResponse
      feedbackRequestId={router.query.feedbackRequestId as string}
    />
  );
}

EditFeedbackRequestPage.auth = true;
