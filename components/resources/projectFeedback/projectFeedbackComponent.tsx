import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button } from "../../ui/Button";
import FeedbackRequestsSectionComponent from "./feedbackRequestsSectionComponent";

export default function ProjectFeedbackComponent() {
  const router = useRouter();
  const [feedbackRequests, setFeedbackRequests] = useState([]);

  const fillMockData = () => {
    setFeedbackRequests([
      {
        id: "1",
        createdAt: "2023-07-12T04:00:06.906088+00:00",
        updatedAt: "2023-07-12T04:00:06.906088+00:00",
        userId: "WDTMtD5YqdgLl4ILXhBy5LlII352",
        projectName: "Project with read feedback",
        projectDescription: null,
        feedbackAvailable: true,
        read: true,
        isArchived: false,
      },
      {
        id: "2",
        createdAt: "2023-07-12T04:00:06.906088+00:00",
        updatedAt: "2023-07-12T04:00:06.906088+00:00",
        userId: "WDTMtD5YqdgLl4ILXhBy5LlII352",
        projectName: "Project with unread feedback",
        projectDescription: null,
        feedbackAvailable: true,
        read: false,
        isArchived: false,
      },
      {
        id: "3",
        createdAt: "2023-07-12T04:00:06.906088+00:00",
        updatedAt: "2023-07-12T04:00:06.906088+00:00",
        userId: "WDTMtD5YqdgLl4ILXhBy5LlII352",
        projectName: "Project with no feedback",
        projectDescription: null,
        feedbackAvailable: false,
        read: false,
        isArchived: false,
      },
    ]);
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-2">Project Feedback</h2>
      <p>Get feedback on your side projects.</p>

      <FeedbackRequestsSectionComponent feedbackRequests={feedbackRequests} />

      <Button
        label="Get Feedback"
        size="large"
        onClick={() => {
          router.push("/resources/projectFeedback/createRequest");
        }}
      />

      <br />
      <p>for demonstration purposes (i.e. to be deleted later)</p>
      <button
        className="bg-slate-500 hover:bg-slate-700 text-white py-2 px-4 rounded"
        onClick={fillMockData}
      >
        Add mock data
      </button>
      <br />
      <button
        className="bg-slate-500 hover:bg-slate-700 text-white py-2 px-4 rounded"
        onClick={() => setFeedbackRequests([])}
      >
        Clear data
      </button>
    </div>
  );
}
