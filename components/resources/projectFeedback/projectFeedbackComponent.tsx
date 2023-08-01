import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../../ui/Button";
import FeedbackRequestsSectionComponent, {
  FeedbackRequestsData,
} from "./feedbackRequestsSectionComponent";

export default function ProjectFeedbackComponent() {
  const [feedbackRequests, setFeedbackRequests] = useState<
    FeedbackRequestsData[]
  >([]);

  const fillMockData = () => {
    setFeedbackRequests([
      {
        id: "1",
        createdAt: new Date("2023-07-12T04:00:06.906088+00:00"),
        updatedAt: new Date("2023-07-12T04:00:06.906088+00:00"),
        userId: "WDTMtD5YqdgLl4ILXhBy5LlII352",
        projectName: "Project with read feedback",
        feedbackAvailable: true,
        read: true,
        isArchived: false,
      },
      {
        id: "2",
        createdAt: new Date("2023-07-12T04:00:06.906088+00:00"),
        updatedAt: new Date("2023-07-12T04:00:06.906088+00:00"),
        userId: "WDTMtD5YqdgLl4ILXhBy5LlII352",
        projectName: "Project with unread feedback",
        feedbackAvailable: true,
        read: false,
        isArchived: false,
      },
      {
        id: "3",
        createdAt: new Date("2023-07-12T04:00:06.906088+00:00"),
        updatedAt: new Date("2023-07-12T04:00:06.906088+00:00"),
        userId: "WDTMtD5YqdgLl4ILXhBy5LlII352",
        projectName: "Project with no feedback",
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

      <Link href={"/resources/projectFeedback/createRequest"}>
        <Button label="Get Feedback" size="large" />
      </Link>

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
