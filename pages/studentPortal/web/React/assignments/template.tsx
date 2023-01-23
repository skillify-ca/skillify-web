import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";

import AssignmentComponent, {
  AssignmentComponentData,
} from "../../../../../components/coding/studentPortal/AssignmentComponent";
import { Button } from "../../../../../components/ui/Button";
import {
  FETCH_USER_ASSIGNMENT_SUBMISSIONS,
  FetchUserAssignmentSubmissionsDataResponse,
  UserAssignmentSubmissionsData,
} from "../../../../../graphql/fetchUserAssignmentSubmissions";
import { useAuth } from "../../../../../lib/authContext";
import {
  assignmentsSelector,
  setUserAssignments,
} from "../../../../../redux/assignmentsSlice";

export enum Stage {
  INCOMPLETE,
  SUBMITTED,
  COMPLETED,
}

export type templateProps = {
  incompleteStage: AssignmentComponentData[];
  submittedStage: AssignmentComponentData[];
  completedStage: AssignmentComponentData[];
};

const React2 = ({
  incompleteStage,
  submittedStage,
  completedStage,
}: templateProps) => {
  const router = useRouter();
  const [stage, setStage] = useState(0);
  const { user } = useAuth();
  const { userAssignments } = useSelector(assignmentsSelector);
  const dispatch = useDispatch();
  console.log("user assignments initial render", userAssignments);
  // REQUIRED: create assignment in coding_assignments table to generate ID and paste here
  const assignmentId = "2cf9156a-4f6f-452d-b09a-2c54f19a7b40";

  const deployCurrentStage = (assignment: UserAssignmentSubmissionsData) => {
    if (assignment.review_link != null) {
      setStage(Stage.COMPLETED);
    } else if (assignment.submission_link.length > 0) {
      setStage(Stage.SUBMITTED);
    } else {
      setStage(Stage.INCOMPLETE);
    }
  };

  const { loading: userAssignmentsLoading } =
    useQuery<FetchUserAssignmentSubmissionsDataResponse>(
      FETCH_USER_ASSIGNMENT_SUBMISSIONS,
      {
        variables: {
          user_id: user.uid,
          assignmentId: assignmentId,
        },

        onCompleted: (data: FetchUserAssignmentSubmissionsDataResponse) => {
          if (data.user_assignment_submissions.length > 0) {
            dispatch(setUserAssignments(data.user_assignment_submissions));
            deployCurrentStage(data.user_assignment_submissions[0]);
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
        {userAssignmentsLoading ? (
          <div>Loading...</div>
        ) : stage === Stage.INCOMPLETE ? (
          incompleteStage.map((it: AssignmentComponentData, index) => (
            <AssignmentComponent key={index} data={it} />
          ))
        ) : stage === Stage.SUBMITTED ? (
          submittedStage.map((it: AssignmentComponentData, index) => (
            <AssignmentComponent key={index} data={it} />
          ))
        ) : stage === Stage.COMPLETED ? (
          completedStage.map((it: AssignmentComponentData, index) => (
            <AssignmentComponent key={index} data={it} />
          ))
        ) : null}
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

export async function getServerSideProps() {
  // REQUIRED: create assignment in coding_assignments table to generate ID and paste here
  const assignmentId = "2cf9156a-4f6f-452d-b09a-2c54f19a7b40";

  const incompleteStage: AssignmentComponentData[] = [
    {
      component: "title",
      text: "Get Hooked on useQuery Hooks",
    },
    {
      component: "prompt",
      text: "useQuery and useLazyQuery hooks are used to retrieve data from hasura so that you can use it in your project.  The EXAMPLE below will outline your assignment.  Your submission will be done through pasting a codesandbox link in the submission box below.  Only use the hints if you must!",
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
      screenshotOrVideoId: "e85860979abd403380cf9a8eb2438f5d",
    },

    {
      component: "submission",
      codeSandboxTitle:
        "Please submit your assignment by pasting a link in the box below.",
      placeholder: "Assignment link goes here",
      assignmentId: assignmentId,
      link: "",
    },
  ];
  const submittedStage: AssignmentComponentData[] = [
    {
      component: "completed",
      text: "Your assignment has been submitted. The instructor will follow-up with a loom video link upon review. ",
    },
  ];

  const completedStage: AssignmentComponentData[] = [
    {
      component: "loom-video",
      text: "This is where your feedback goes",
      videoId: "e85860979abd403380cf9a8eb2438f5d",
    },
  ];
  return {
    props: {
      incompleteStage,
      submittedStage,
      completedStage,
    },
  };
}
export default React2;
