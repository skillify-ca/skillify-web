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
  FETCH_USER_GOALS,
  FETCH_USER_GOAL_DETAIL,
  UserGoalsData,
} from "../../graphql/fetchUserGoals";
import { useAuth } from "../../lib/authContext";
import { useMutation } from "@apollo/client";
import { UPSERT_USER_GOALS } from "../../graphql/upsertUserGoals";
import { REMOVE_USER_GOAL } from "../../graphql/removeUserGoal";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";
import { FETCH_USER_GOALS_COUNT } from "../../graphql/fetchUserGoalsCount";

const EditGoalsPage = () => {
  const { user } = useAuth();

  const router = useRouter();
  const { slug } = router.query;

  const [editedGoalValues, setEditedGoalValues] = useState<UserGoalsData>();
  const [editGoalNotes, setEditGoalNotes] = useState<boolean>();

  const [saveEditedGoals] = useMutation(UPSERT_USER_GOALS, {
    refetchQueries: [
      { query: FETCH_USER_GOALS },
      { query: FETCH_USER_GOALS_COUNT },
    ],
    onCompleted: () => router.push("/goals"),
  });

  const [removeUserGoal] = useMutation(REMOVE_USER_GOAL, {
    refetchQueries: [{ query: FETCH_USER_GOALS }],
    onCompleted: () => router.push("/goals"),
  });

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
      <h1 className="mb-4 text-3xl font-bold">Edit Goal</h1>
      {goalDetail && editedGoalValues && (
        <div>
          <div className="flex flex-col space-y-2">
            <p className="font-bold">Goal Name</p>

            <textarea
              className={`text-left p-2 border rounded-md shadow-md w-full md:w-1/2 text-murkrow ${
                editedGoalValues.goalName.length <= 60 ? "" : " border-red-600"
              }`}
              placeholder={goalDetail.goalName}
              value={editedGoalValues.goalName}
              onChange={(e) => {
                setEditedGoalValues((prevState) => ({
                  ...prevState,
                  goalName: e.target.value,
                }));
              }}
            />

            {editedGoalValues.goalName.length > 60 && (
              <p className="text-xs text-red-600">
                please keep your goal under 60 characters
              </p>
            )}
            <div className="flex">
              <ArrowCircleRightIcon
                className={
                  editGoalNotes
                    ? "h-5 w-5 mr-2  text-yellow-600"
                    : " mr-2 h-5 w-5 "
                }
                onClick={() => setEditGoalNotes(!editGoalNotes)}
              />
              <p className="font-bold">Goal Notes</p>
            </div>
            <textarea
              className={`text-left p-2 border rounded-md shadow-md w-full md:w-1/2 text-murkrow `}
              placeholder={"write an actionable goal outline"}
              value={editedGoalValues.goalNotes}
              disabled={!editGoalNotes}
              onChange={(e) => {
                setEditedGoalValues((prevState) => ({
                  ...prevState,
                  goalNotes: e.target.value,
                }));
              }}
            />

            <p className="font-bold">Created On</p>
            <input
              type="text"
              className="w-1/2 p-2 text-left border rounded-md shadow-md md:w-1/4"
              value={format(new Date(goalDetail.createdAt), "MMMM dd yyyy")}
              disabled
            />
            <p className="font-bold">Last Updated</p>
            <input
              type="text"
              className="w-1/2 p-2 text-left border rounded-md shadow-md md:w-1/4"
              value={format(new Date(goalDetail.updatedAt), "MMMM dd yyyy")}
              disabled
            />
            <p className="font-bold">Target Completion Date</p>
            <input
              type="date"
              className="w-1/2 p-2 text-left border rounded-md shadow-md md:w-1/4 text-murkrow"
              value={format(
                new Date(editedGoalValues.targetDate),
                "yyyy-MM-dd"
              )}
              onChange={(e) => {
                setEditedGoalValues((prevState) => ({
                  ...prevState,
                  targetDate: new Date(e.target.value + "T00:00:00"),
                }));
              }}
            />
          </div>
          <div className="grid grid-cols-2 mt-8 md:grid-cols-12 md:text-center">
            <p className="font-bold">Archive Goal</p>
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

            <p className="font-bold">Complete Goal</p>
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
            <p className="font-bold">Remove Goal</p>
            <TrashIcon
              className={"h-10 w-10 hover:text-red-600 cursor-pointer"}
              onClick={() =>
                window.confirm("Are you sure you want to delete this goal?")
                  ? removeUserGoal({ variables: { id: editedGoalValues.id } })
                  : ""
              }
            />
            <div className="col-start-1 mt-8">
              <Button
                label="Save"
                disabled={
                  goalDetail === editedGoalValues ||
                  editedGoalValues.goalName.length > 60
                }
                onClick={() => {
                  // this is a workaround to remove __typename from the gql response which causes mutation to fail
                  const editedGoalValuesForHasura = {
                    goalName: editedGoalValues.goalName,
                    goalNotes: editedGoalValues.goalNotes,
                    userId: editedGoalValues.userId,
                    id: editedGoalValues.id,
                    isArchived: editedGoalValues.isArchived,
                    isComplete: editedGoalValues.isComplete,
                    targetDate: editedGoalValues.targetDate,
                  };

                  saveEditedGoals({
                    variables: {
                      objects: editedGoalValuesForHasura,
                    },
                  });
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditGoalsPage;
