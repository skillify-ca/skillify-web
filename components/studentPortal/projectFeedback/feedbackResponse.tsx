import React, { useState } from "react";
import { Button } from "../../ui/Button";

type FeedbackResponseProps = {
  feedbackRequestId: string;
};

export default function FeedbackResponse({
  feedbackRequestId,
}: FeedbackResponseProps) {
  const projectName = "my_project";
  const coachName = "John Doe";
  const [recordedFeedback, setRecordedFeedback] = useState(true);

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold">Feedback for: {projectName}</h2>

      <p className="my-2">
        Feedback type: {recordedFeedback ? "Recorded" : "Live"}
      </p>

      <p className="my-2">Coach: {coachName}</p>

      {recordedFeedback ? (
        <div className="my-2">
          <video
            src={
              "https://d3jppm0n5ndqu2.cloudfront.net/header-section-workshop.mp4"
            }
            controls={true}
          />
        </div>
      ) : (
        <div>
          <Button label="Book Time" />
        </div>
      )}

      <br />
      <p>for demonstration purposes (i.e. to be deleted later)</p>
      <button
        className="bg-slate-500 hover:bg-slate-700 text-white py-2 px-4 rounded"
        onClick={() => setRecordedFeedback(!recordedFeedback)}
      >
        Toggle between video/prerecorded feedback and live feedback
      </button>
    </div>
  );
}
