import { useRouter } from "next/router";
import React from "react";
import LandingNavbar from "../../../../components/landingPage/LandingNavbar";
import EditFeedbackRequestComponent from "../../../../components/resources/projectFeedback/editFeedbackRequestComponent";

export default function EditFeedbackRequestPage() {
  const router = useRouter();
  return (
    <EditFeedbackRequestComponent
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
