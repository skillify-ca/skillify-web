import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../../ui/Button";
import FeedbackRequestsSectionComponent, {
  FeedbackRequestsData,
} from "./feedbackRequestsSectionComponent";

export default function ProjectFeedbackComponent() {
  const mockData: FeedbackRequestsData[] = [
    {
      id: "3_feedback",
      createdAt: new Date("2023-07-12T04:00:06.906088+00:00"),
      updatedAt: new Date("2023-07-12T04:00:06.906088+00:00"),
      userId: "WDTMtD5YqdgLl4ILXhBy5LlII352",
      projectName: "Project with unread feedback",
      projectNotes: "",
      feedbackAvailable: true,
      read: false,
      isArchived: false,
    },
    {
      id: "2_read_feedback",
      createdAt: new Date("2023-07-12T04:00:06.906088+00:00"),
      updatedAt: new Date("2023-07-12T04:00:06.906088+00:00"),
      userId: "WDTMtD5YqdgLl4ILXhBy5LlII352",
      projectName: "Project with read feedback",
      projectNotes: "",
      feedbackAvailable: true,
      read: true,
      isArchived: false,
    },
    {
      id: "1",
      createdAt: new Date("2023-07-12T04:00:06.906088+00:00"),
      updatedAt: new Date("2023-07-12T04:00:06.906088+00:00"),
      userId: "WDTMtD5YqdgLl4ILXhBy5LlII352",
      projectName: "Project with no feedback",
      projectNotes: "",
      feedbackAvailable: false,
      read: false,
      isArchived: false,
    },
  ];

  const [feedbackRequests, setFeedbackRequests] =
    useState<FeedbackRequestsData[]>(mockData);

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-2">Project Feedback</h2>
      <p className="mb-2">Get feedback on your side projects.</p>

      <Link href={"/studentPortal/projectFeedback/createRequest"}>
        <Button label="Create Request" size="large" />
      </Link>

      <FeedbackRequestsSectionComponent feedbackRequests={feedbackRequests} />

      <br />
      <p>for demonstration purposes (i.e. to be deleted later)</p>
      <button
        className="bg-slate-500 hover:bg-slate-700 text-white py-2 px-4 rounded"
        onClick={() => setFeedbackRequests(mockData)}
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
