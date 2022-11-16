import { useQuery } from "@apollo/client";
import { Router, useRouter } from "next/router";

import React, { useEffect, useState } from "react";

import AssignmentComponent, {
  AssignmentComponentData,
  Stage,
} from "../../../../../components/coding/studentPortal/AssignmentComponent";
import { Button } from "../../../../../components/ui/Button";
import {
  FETCH_USER_ASSIGNMENT_SUBMISSIONS,
  FetchUserAssignmentSubmissionsDataResponse,
  UserAssignmentSubmissionsData,
} from "../../../../../graphql/fetchUserAssignmentSubmissions";
import { useAuth } from "../../../../../lib/authContext";

const React2 = ({ incompleteStage, submittedStage, completedStage }) => {
  const router = useRouter();

  const { user } = useAuth();
  const [assignments, setAssignments] = useState<
    UserAssignmentSubmissionsData[]
  >([]);

  const { data } = useQuery<FetchUserAssignmentSubmissionsDataResponse>(
    FETCH_USER_ASSIGNMENT_SUBMISSIONS,
    {
      variables: {
        user_id: user.uid,
      },

      onCompleted: (data: FetchUserAssignmentSubmissionsDataResponse) => {
        setAssignments(data.user_assignment_submissions);
        let submittedAssignment = assignments.filter(
          (assignment) => assignment.submission_link
        );
        if (submittedAssignment.length > 0) {
          setStage(Stage.SUBMITTED);
        } else {
          setStage(Stage.INCOMPLETE);
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
  const [stage, setStage] = useState(0);

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
      <div className="flex place-content-evenly my-8 mr-8 sm:justify-end">
        <div className="mx-4">
          <Button onClick={handlePrevious} label="Previous" />
        </div>
        <Button onClick={handleContinue} label="Next" />
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const incompleteStage: AssignmentComponentData[] = await Promise.all([
    {
      component: "title",
      text: "Assignment Title Goes Here",
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
      component: "prompt",
      text: "Please outline the directions for what the student is expected to achieve. ",
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
      link: "",
      placeholder: "Assignment link goes here",
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
