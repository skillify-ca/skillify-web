import { PencilAltIcon } from "@heroicons/react/outline";
import { format } from "date-fns";
import Link from "next/link";
import React from "react";

export type FeedbackRequestsData = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  projectName: string;
  projectDescription?: string;
  feedbackAvailable: boolean;
  read: boolean;
  isArchived: boolean;
};

type FeedbackRequestsSectionProps = {
  feedbackRequests: FeedbackRequestsData[];
};

export default function FeedbackRequestsSectionComponent({
  feedbackRequests,
}: FeedbackRequestsSectionProps) {
  return (
    <div className="my-4 p-4 rounded text-center bg-backgroundSecondary">
      {feedbackRequests.length === 0 ? (
        <p className="p-2 bg-backgroundSecondary">
          Click on &quot;Get Feedback&quot; to create your first feedback
          request!
        </p>
      ) : (
        <>
          <div className="grid grid-cols-5">
            {/* name created updated dropdown for description*/}
            <p className="font-semibold">Project Name</p>
            <p className="font-semibold">Date Created</p>
            <p className="font-semibold">Date Updated</p>
            <p className="font-semibold">Feedback Available</p>
            <p className="font-semibold">Edit</p>
          </div>

          {feedbackRequests.map((request) => (
            <div
              className="grid grid-cols-5 my-2 p-2 rounded-xl place-items-center"
              key={request.id}
            >
              <p>{request.projectName}</p>
              <p>{format(new Date(request.createdAt), "MM/dd/yyyy")}</p>
              <p>{format(new Date(request.updatedAt), "MM/dd/yyyy")}</p>
              {request.feedbackAvailable ? (
                <Link href={"/studentPortal/projectFeedback/" + request.id}>
                  <div
                    className={`rounded-full h-6 w-6 border-2 cursor-pointer ${
                      request.read
                        ? "bg-green-500 border-green-500"
                        : "border-slate-500"
                    }`}
                  ></div>
                </Link>
              ) : (
                <div></div>
              )}
              <Link href={"/studentPortal/projectFeedback/edit/" + request.id}>
                <PencilAltIcon className="w-5 h-5 cursor-pointer hover:text-yellow-600" />
              </Link>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
