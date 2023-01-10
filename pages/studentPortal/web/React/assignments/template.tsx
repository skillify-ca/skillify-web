import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

import AssignmentComponent, {
  AssignmentComponentData,
  Stage,
} from "../../../../../components/coding/studentPortal/AssignmentComponent";
import { Button } from "../../../../../components/ui/Button";
import {
  FETCH_USER_ASSIGNMENT_SUBMISSIONS,
  FetchUserAssignmentSubmissionsDataResponse,
} from "../../../../../graphql/fetchUserAssignmentSubmissions";
import { useAuth } from "../../../../../lib/authContext";
import {
  assignmentsSelector,
  setUserAssignments,
} from "../../../../../redux/assignmentsSlice";

const React2 = ({ incompleteStage, submittedStage, completedStage }) => {
  const router = useRouter();
  const [stage, setStage] = useState(0);
  const { user } = useAuth();
  const { userAssignments } = useSelector(assignmentsSelector);
  const dispatch = useDispatch();

  // REQUIRED: create assignment in coding_assignments table to generate ID and paste here
  const assignmentId = "2cf9156a-4f6f-452d-b09a-2c54f19a7b40";

  useEffect(() => {
    userAssignments.length > 0
      ? userAssignments.filter(
          (assignment) => assignment.assignmentId === assignmentId
        )
      : fetchUserAssignmentSubmissions();

    console.log("UA", userAssignments);
  }, [userAssignments]);

  const [fetchUserAssignmentSubmissions] =
    useLazyQuery<FetchUserAssignmentSubmissionsDataResponse>(
      FETCH_USER_ASSIGNMENT_SUBMISSIONS,
      {
        variables: {
          user_id: user.uid,
          assignmentId: assignmentId,
        },

        onCompleted: (data: FetchUserAssignmentSubmissionsDataResponse) => {
          if (data.user_assignment_submissions.length > 0) {
            dispatch(setUserAssignments(data.user_assignment_submissions));
            if (data.user_assignment_submissions[0].review_link != null) {
              setStage(Stage.COMPLETED);
            } else if (
              data.user_assignment_submissions[0].submission_link.length > 0
            ) {
              setStage(Stage.SUBMITTED);
            } else {
              setStage(Stage.INCOMPLETE);
            }
          }
        },
      }
    );

  const handleContinue = () => {
    router.push("/studentPortal/web/React/assignments/template");
    if (stage <= 1) {
      setStage(stage + 1);
    } else {
      setStage(Stage.INCOMPLETE);
    }
  };
  const handlePrevious = () => {
    router.push("/studentPortal/web/React/assignments/template");
    if (stage >= 1 && stage <= 2) {
      setStage(stage - 1);
    } else {
      setStage(Stage.INCOMPLETE);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-8 px-4 pt-4 m-8 sm:px-12">
        {stage === Stage.INCOMPLETE
          ? incompleteStage.map((it: AssignmentComponentData) => (
              <AssignmentComponent data={it} />
            ))
          : stage === Stage.SUBMITTED
          ? submittedStage.map((it: AssignmentComponentData) => (
              <AssignmentComponent data={it} />
            ))
          : stage === Stage.COMPLETED
          ? completedStage.map((it: AssignmentComponentData) => (
              <AssignmentComponent data={it} />
            ))
          : null}
      </div>
      <div className="flex ml-16 my-8 sm:justify-beginning">
        <div className="mx-4">
          <Button onClick={handlePrevious} label="Previous" />
        </div>
        <Button onClick={handleContinue} label="Next" />
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  // REQUIRED: create assignment in coding_assignments table to generate ID and paste here
  const assignmentId = "2cf9156a-4f6f-452d-b09a-2c54f19a7b40";

  const incompleteStage: AssignmentComponentData[] = await Promise.all([
    {
      component: "title",
      text: "Assignment Title Goes Here",
    },
    {
      component: "prompt",
      text: "Please outline the directions for what the student is expected to achieve. ",
    },
    {
      component: "hint-list",
      hintRow: [
        {
          description: "Write Hint #1 here.",
          link: "https://www.google.com",
        },
        {
          description: "Write Hint #2 here.",
          link: "",
        },
      ],
    },

    {
      component: "output",
      title: "This is the desired output.",
      screenshot: "/images/assignments/screenshotGoalNotes.png",
    },
    {
      component: "submission",
      codeSandboxTitle:
        "Please submit your assignment by pasting a link in the box below.",
      placeholder: "Assignment link goes here",
      assignmentId: assignmentId,
      link: "",
    },
  ]);
  const submittedStage: AssignmentComponentData[] = await Promise.all([
    {
      component: "completed",
      text: "Your assignment has been submitted. The instructor will follow-up with a loom video link upon review. ",
    },
  ]);

  const completedStage: AssignmentComponentData[] = await Promise.all([
    {
      component: "loom-video",
      text: "This is where your feedback goes",
      videoId: "e85860979abd403380cf9a8eb2438f5d",
    },
  ]);
  return {
    props: {
      incompleteStage,
      submittedStage,
      completedStage,
    },
  };
}
export default React2;
