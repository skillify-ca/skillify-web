import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";

import AssignmentComponent, {
  AssignmentComponentData,
} from "../../../../../components/coding/studentPortal/assignments/AssignmentComponent";

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

export type AssignmentTemplateProps = {
  incompleteStage: AssignmentComponentData[];
  submittedStage: AssignmentComponentData[];
  assignmentId: string;
};

const React2 = ({
  incompleteStage,
  submittedStage,
  assignmentId,
}: AssignmentTemplateProps) => {
  const [stage, setStage] = useState(0);
  const { user } = useAuth();

  const dispatch = useDispatch();
  const { userAssignments } = useSelector(assignmentsSelector);

  const deployCurrentStage = (assignment: UserAssignmentSubmissionsData) => {
    if (assignment.review_link != null) {
      setStage(Stage.COMPLETED);
    } else if (assignment.submission_link) {
      setStage(Stage.SUBMITTED);
    } else {
      setStage(Stage.INCOMPLETE);
    }
  };

  const {
    loading: userAssignmentsLoading,
  } = useQuery<FetchUserAssignmentSubmissionsDataResponse>(
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

  const completedStage: AssignmentComponentData[] = [
    {
      component: "loom-video",
      text:
        "Your assignment has been reviewed! Watch the video below for feedback:",
      videoId: userAssignments.length > 0 ? userAssignments[0].review_link : "",
    },
  ];

  return (
    <>
      <div className="flex flex-col m-8 space-y-4 sm:px-12">
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
    </>
  );
};

export async function getServerSideProps() {
  // REQUIRED: create assignment in coding_assignments table to generate ID and paste here
  const assignmentId = "2cf9156a-4f6f-452d-b09a-2c54f19a7b40";

  const incompleteStage: AssignmentComponentData[] = [
    {
      component: "title",
      text: "Assignment: Components and Prompts",
    },
    {
      component: "prompt",
      header:
        "Use React components to build a table off the provided array of city population data",
      bullets: [
        "You should create reusable components that utilize props for the 'columns'",
        "You can use Tailwind CSS classes to style the table",
      ],
    },

    {
      component: "output",
      screenshotOrVideoId:
        "/images/assignments/componentsAssignmentTableOnly.png",
    },

    {
      component: "template",
      templateLink:
        "https://codesandbox.io/s/skillify-components-assignment-template-2k19r7",
    },

    {
      component: "submission",
      codeSandboxTitle:
        "Please submit your assignment by pasting a link in the box below.",
      placeholder: "Assignment link goes here",
      assignmentId: assignmentId,
      link: "",
    },

    {
      component: "hint-list",
      hintRow: [
        {
          description:
            "You can use the map function to avoid calling the same 'row' component several times",
          link: "https://beta.reactjs.org/learn/rendering-lists",
        },
      ],
    },
  ];
  const submittedStage: AssignmentComponentData[] = [
    {
      component: "completed",
      text:
        "Your assignment has been submitted. The instructor will follow-up with a loom video link upon review. ",
    },
  ];

  return {
    props: {
      incompleteStage,
      submittedStage,
      assignmentId,
    },
  };
}
export default React2;
