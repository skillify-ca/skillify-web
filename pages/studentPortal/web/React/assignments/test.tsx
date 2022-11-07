import { Router, useRouter } from "next/router";
import React from "react";
import AssignmentInputBox from "../../../../../components/coding/studentPortal/AssignmentInputBox";
import AssignmentComponent, {
  AssignmentComponentData,
} from "../../../../../components/coding/studentPortal/AssingmentComponent";
import { Button } from "../../../../../components/ui/Button";

const React2 = ({ assignmentComponents }) => {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/studentPortal/web/React/assignments/test");
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-8 px-4 pt-4 m-8 sm:px-12">
        {assignmentComponents.map((it: AssignmentComponentData) => (
          <AssignmentComponent data={it} />
        ))}
      </div>
      <div className="flex my-8 mr-8 sm:justify-end">
        <Button onClick={handleContinue} label="Continue" />
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const assignmentComponents: AssignmentComponentData[] = [
    {
      component: "title",
      text: "Assignment Title Goes Here",
    },
    {
      component: "hint-list",
      hintRow: [
        {
          description: "Write Hint #1 here.",
          icon: "http://www.w3.org/2000/svg",
          link: "",
        },
        {
          description: "Write Hint #2 here.",
          icon: "http://www.w3.org/2000/svg",
          link: "",
        },
      ],
    },
    {
      component: "prompt",
      text: "Please outline the directions for what the student is expected to achieve. ",
    },

    {
      component: "code-snippet",
      text: "If there is a snippet of code that will provide an example, it should go here",
      code: `export default function HelloComponent() {
  return <div>Hello World</div>;
}`,
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
    {
      component: "loom-video",
      videoId:
        "https://codesandbox.io/embed/skillify-componentized-react-page-z1hego?fontsize=14&hidenavigation=1&theme=dark",
    },
  ];
  return { props: { assignmentComponents } };
}

export default React2;
