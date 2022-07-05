import { useQuery } from "@apollo/client";
import {
  ArchiveIcon,
  CheckCircleIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { format } from "date-fns";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button } from "../../components/ui/Button";
import {
  FetchUserGoalsDataResponse,
  FETCH_USER_GOAL_DETAIL,
  UserGoalsData,
} from "../../graphql/fetchUserGoals";
import { useAuth } from "../../lib/authContext";

const EditGoalsPage = () => {
  const { user } = useAuth();

  const router = useRouter();
  const { slug } = router.query;

  const goalDetailResults = useQuery<FetchUserGoalsDataResponse>(
    FETCH_USER_GOAL_DETAIL,
    {
      variables: {
        userId: user.uid,
        id: slug,
      },
    }
  );

  let goalDetail: UserGoalsData;
  if (goalDetailResults.data) {
    goalDetail = goalDetailResults.data.user_goals[0];
  }

  return (
    <div className="flex flex-col p-4 m-4 overflow-auto bg-scroll">
      <h1 className="text-3xl font-bold mb-4">Edit Goal</h1>
      {goalDetail && (
        <div>
          <div className="flex flex-col space-y-2">
            <p className="font-bold">Goal Name</p>
            <input
              type="text"
              className="text-left p-2 border rounded-md shadow-md w-1/2"
              placeholder={goalDetail.goalName}
            />
            <p className="font-bold">Created On</p>
            <input
              type="text"
              className="text-left p-2 border rounded-md shadow-md w-1/4"
              value={format(new Date(goalDetail.createdAt), "MMMM dd yyyy")}
              disabled
            />
            <p className="font-bold">Last Updated</p>
            <input
              type="text"
              className="text-left p-2 border rounded-md shadow-md w-1/4"
              value={format(new Date(goalDetail.updatedAt), "MMMM dd yyyy")}
              disabled
            />
            <p className="font-bold">Target Completion Date</p>
            <input
              type="text"
              className="text-left p-2 border rounded-md shadow-md w-1/4"
              value={
                format(new Date(goalDetail.targetDate), "MMMM dd yyyy") ??
                "No Date Set"
              }
              disabled
            />
          </div>
          <div className="flex flex-row mt-8 space-x-4">
            <ArchiveIcon
              className={
                "h-10 w-10" + goalDetail.isArchived
                  ? "text-yellow-600 h-10 w-10"
                  : "h-10 w-10"
              }
            />
            <TrashIcon
              className={
                goalDetail.isComplete ? "h-10 w-10 text-red-600" : "h-10 w-10"
              }
              path="text-"
            />
            <CheckCircleIcon
              className={
                goalDetail.isComplete ? "h-10 w-10 text-green-600" : "h-10 w-10"
              }
            />
            <Button label="Save" />
          </div>
        </div>
      )}
    </div>
  );
};

export default EditGoalsPage;
