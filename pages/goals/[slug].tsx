import { useQuery } from "@apollo/client";
import { format } from "date-fns";
import { useRouter } from "next/router";
import React, { useState } from "react";
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
        <div className="grid grid-cols-12">
          <p className="col-span-2">Goal Name:</p>
          <p className="col-span-2">{goalDetail.goalName}</p>
          <p className="col-start-1 col-span-2">Target Completion:</p>
          <p className="col-span-2">
            {goalDetail.targetDate ?? "No Target Date Set"}
          </p>
          <p className="col-start-1 col-span-2">Created Date:</p>
          <p className="col-span-2">
            {format(new Date(goalDetail.targetDate), "MMMM dd yyyy")}
          </p>
          <p className="col-start-1 col-span-2">Is Goal Active?</p>
          <p className="col-span-2">{goalDetail.isActive ? "Yes" : "No"}</p>
          <p className="col-start-1 col-span-2">Is Goal Complete?</p>
          <p className="col-span-2">{goalDetail.isComplete ? "Yes" : "No"}</p>
          <p className="col-start-1 col-span-2">Is Goal Archived?</p>
          <p className="col-span-2">{goalDetail.isArchived ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
};

export default EditGoalsPage;
