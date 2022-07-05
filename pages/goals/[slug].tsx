import { useQuery } from "@apollo/client";
import {
  ArchiveIcon,
  CheckCircleIcon,
  TrashIcon,
} from "@heroicons/react/solid";
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

  const [editedGoalValues, setEditedGoalValues] = useState<UserGoalsData>();

  const goalDetailResults = useQuery<FetchUserGoalsDataResponse>(
    FETCH_USER_GOAL_DETAIL,
    {
      variables: {
        userId: user.uid,
        id: slug,
      },
      onCompleted: (data) => {
        setEditedGoalValues(data.user_goals[0]);
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
      {goalDetail && editedGoalValues && (
        <div>
          <div className="flex flex-col space-y-2">
            <p className="font-bold">Goal Name</p>
            <input
              type="text"
              className="text-left p-2 border rounded-md shadow-md w-1/2"
              placeholder={goalDetail.goalName}
              value={editedGoalValues.goalName}
              onChange={(e) => {
                setEditedGoalValues((prevState) => ({
                  ...prevState,
                  goalName: e.target.value,
                }));
              }}
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
          <div className="grid grid-cols-12 items-center mt-8">
            <p className="text-center font-bold">Archive Goal</p>
            <ArchiveIcon
              className={
                editedGoalValues.isArchived
                  ? "h-10 w-10 text-yellow-600"
                  : "h-10 w-10"
              }
              onClick={() =>
                setEditedGoalValues((prevState) => ({
                  ...prevState,
                  isArchived: !prevState.isArchived,
                }))
              }
            />

            <p className="text-center font-bold">Complete Goal</p>
            <CheckCircleIcon
              className={
                editedGoalValues.isComplete
                  ? "h-10 w-10 text-green-600"
                  : "h-10 w-10"
              }
              onClick={() =>
                setEditedGoalValues((prevState) => ({
                  ...prevState,
                  isComplete: !prevState.isComplete,
                }))
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
