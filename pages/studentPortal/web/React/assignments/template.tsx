import { Router, useRouter } from "next/router";
import React, { useState } from "react";
import AssignmentComponent, {
  AssignmentComponentData,
  Stage,
} from "../../../../../components/coding/studentPortal/AssignmentComponent";
import { Button } from "../../../../../components/ui/Button";

const React2 = ({
  assignmentComponents,
  assignmentComponentsSubmittedStage,
  assignmentComponentsCompletedStage,
}) => {
  const router = useRouter();
  const handleContinue = () => {
    router.push("/studentPortal/web/React/assignments/template");
  };
  const [stage, setStage] = useState(0);

  return (
    <>
      <div className="grid grid-cols-1 gap-8 px-4 pt-4 m-8 sm:px-12">
        {stage === Stage.INCOMPLETE
          ? assignmentComponents.map((it: AssignmentComponentData) => (
              <AssignmentComponent data={it} />
            ))
          : stage === Stage.SUBMITTED
          ? assignmentComponentsSubmittedStage.map(
              (it: AssignmentComponentData) => <AssignmentComponent data={it} />
            )
          : stage === Stage.COMPLETED
          ? assignmentComponentsCompletedStage.map(
              (it: AssignmentComponentData) => <AssignmentComponent data={it} />
            )
          : null}
      </div>
      <div className="flex my-8 mr-8 sm:justify-end">
        <Button onClick={handleContinue} label="Continue" />
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const assignmentComponents: AssignmentComponentData[] = await Promise.all([
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
  const assignmentComponentsSubmittedStage: AssignmentComponentData[] =
    await Promise.all([
      {
        component: "loom-video",
        text: "This is where your feedback goes",
        videoId: "e85860979abd403380cf9a8eb2438f5d",
      },
    ]);

  const assignmentComponentsCompletedStage: AssignmentComponentData[] =
    await Promise.all([
      {
        component: "completed",
        text: "Your assignment has been submitted. The instructor will follow-up with a loom video link upon review. ",
      },
    ]);
  return {
    props: {
      assignmentComponents,
      assignmentComponentsSubmittedStage,
      assignmentComponentsCompletedStage,
    },
  };
}
export default React2;
