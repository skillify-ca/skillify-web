import { useRouter } from "next/router";
import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import FeedbackResponse from "../../../components/resources/projectFeedback/feedbackResponse";

export default function EditFeedbackRequestPage() {
  const router = useRouter();
  return (
    <FeedbackResponse
      feedbackRequestId={router.query.feedbackRequestId as string}
    />
  );
}

EditFeedbackRequestPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
