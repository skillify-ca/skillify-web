import { useQuery } from "@apollo/client";
import router from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AssignmentComponent, {
  AssignmentComponentData,
} from "../../../../../components/studentPortal/assignments/AssignmentComponent";
import { Button } from "../../../../../components/ui/Button";
import {
  FetchUserAssignmentSubmissionsDataResponse,
  FETCH_USER_ASSIGNMENT_SUBMISSIONS,
  UserAssignmentSubmissionsData,
} from "../../../../../graphql/studentPortal/assignments/fetchUserAssignmentSubmissions";

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

const TailwindAssignment = ({
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

  const completedStage: AssignmentComponentData[] = [
    {
      component: "loom-video",
      text: "Your assignment has been reviewed! Watch the video below for feedback:",
      videoId: userAssignments.length > 0 ? userAssignments[0].review_link : "",
    },
  ];

  const handleContinue = () => {
    router.push("/studentPortal/web/React/components");
  };
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
        <div className="flex my-8 mr-8 sm:justify-end">
          <Button onClick={handleContinue} label="Continue" />
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps() {
  const assignmentId = "75607460-834b-4f9f-a352-ae1a4e6f3d5f";

  const incompleteStage: AssignmentComponentData[] = [
    {
      component: "title",
      text: "Assignment: Tailwind CSS",
    },

    {
      component: "prompt",
      header: "Style a web page using Tailwind CSS",
      bullets: [
        "Use the link in the first hint to setup TailwindCSS in your own index.html file for this assignment.",
        "Your page must have atleast 5 different background colors.",
        "Add a Navbar at the top-right of the page.",
        "Add a title, a heading and a paragraph so your page has atleast 3 different text sizes.",
        "Add an on-hover effect to the title, so it bounces when you hover over it.",
        "Add a table with 5 columns and 4 rows, below the paragraph.",
        "Stretch challenge: Find a website whose design you like and rebuild it using TailwindCSS. Start from the top and work your way downwards. Speak to a coach if you get stuck!",
      ],
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
          description: "Setup TailwindCSS using Play CDN, follow step one",
          link: " https://tailwindcss.com/docs/installation/play-cdn ",
        },
        {
          description:
            "You can use the 'bg-' and 'text-' classes in Tailwind CSS to set background colors and text sizes",
          link: "https://tailwindcss.com/docs/background-color",
        },
        {
          description:
            "You can use the 'hover:' prefix to add on-hover effects to elements",
          link: "https://tailwindcss.com/docs/hover-focus-and-other-states",
        },
        {
          description:
            "You can use the 'table' and 'table-auto' classes in Tailwind CSS to create tables",
          link: "https://tailwindcss.com/docs/table-layout",
        },
        {
          description:
            "Learn more about Tailwind CSS by visiting the official documentation",
          link: "https://tailwindcss.com/docs",
        },
      ],
    },
  ];
  const submittedStage: AssignmentComponentData[] = [
    {
      component: "completed",
      text: "Your assignment has been submitted. The instructor will follow-up with a loom video link upon review. ",
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

export default TailwindAssignment;
