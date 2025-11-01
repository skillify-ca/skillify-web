import { PencilAltIcon } from "@heroicons/react/outline";
import {
  ArchiveIcon,
  CheckCircleIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import { format } from "date-fns";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button } from "../../../components/ui/Button";
import { useAuth } from "../../../lib/authContext";
import { supabase } from "../../../lib/supabase";
import { GOAL_CHAR_LIMIT } from "./addGoal";

const EditGoalsPage = () => {
  const { user } = useAuth();

  const router = useRouter();
  const { slug } = router.query;

  const [editedGoalValues, setEditedGoalValues] = useState(null);
  const [editGoalNotes, setEditGoalNotes] = useState<boolean>();
  const [goalDetail, setGoalDetail] = useState(null);

  useEffect(() => {
    const fetchGoalDetail = async () => {
      if (!user || !slug) {
        return;
      }
      try {
        const { data, error } = await supabase
          .from("user_goals")
          .select("*")
          .eq("userId", user.uid)
          .eq("id", slug)
          .single();

        if (error) {
          throw error;
        }
        setGoalDetail(data);
        setEditedGoalValues(data);
      } catch (error) {
        console.error("Error fetching goal details:", error);
      }
    };

    fetchGoalDetail();
  }, [user, slug]);

  const saveEditedGoals = async () => {
    try {
      const { error } = await supabase
        .from("user_goals")
        .update(editedGoalValues)
        .eq("id", slug);
      if (error) {
        throw error;
      }
      router.push("/studentPortal/goals");
    } catch (error) {
      console.error("Error saving edited goal:", error);
    }
  };

  const removeUserGoal = async () => {
    try {
      const { error } = await supabase
        .from("user_goals")
        .delete()
        .eq("id", slug);
      if (error) {
        throw error;
      }
      router.push("/studentPortal/goals");
    } catch (error) {
      console.error("Error removing goal:", error);
    }
  };

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

            {editedGoalValues.goalName.length > GOAL_CHAR_LIMIT && (
              <p className="text-xs text-red-600">
                please keep your goal under {GOAL_CHAR_LIMIT} characters
              </p>
            )}
            <div className="flex">
              <p className="px-2 font-bold">Goal Notes</p>
              <PencilAltIcon
                className={
                  editGoalNotes
                    ? "h-5 w-5 mr-2  text-yellow-600 cursor-pointer hover:text-yellow-600"
                    : " mr-2 h-5 w-5 cursor-pointer hover:text-yellow-600"
                }
                onClick={() => setEditGoalNotes(!editGoalNotes)}
              />
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
                if (new Date(e.target.value + "T00:00:00") > new Date()) {
                  setEditedGoalValues((prevState) => ({
                    ...prevState,
                    targetDate: new Date(e.target.value + "T00:00:00"),
                  }));
                } else {
                  alert("Please select a future date.");
                }
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
                  ? removeUserGoal()
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
                onClick={saveEditedGoals}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditGoalsPage;
