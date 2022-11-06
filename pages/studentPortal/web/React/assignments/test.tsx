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
      text: "Functional Components",
    },
    {
      component: "hint-list",
      hintRow: [
        {
          description:
            "The official React documentation explaining the concept of components.",
          icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
          link: "https://reactjs.org/docs/components-and-props.html",
        },
      ],
    },
    {
      component: "prompt",
      text: "Components are the building blocks of React apps. You can use components to split up the UI into independent, reusable pieces. In this tutorial we will take HTML that renders a table of expenses, and turn it into an efficient series of React components. A component - at its simplest form - is just a Javascript function that returns HTML to be rendered on a page. ",
    },

    {
      component: "code-snippet",
      text: "The following is a function that returns the text `Hello World`:",
      code: `export default function HelloComponent() {
  return <div>Hello World</div>;
}`,
    },
    {
      component: "output",
      screenshot:
        "We can use functional components to make our code cleaner and less repeatable. Take a look at this basic HTML page displaying a table of expenses:",
    },
    {
      component: "submission",
      codeSandboxTitle: "title",
      link: "https://codesandbox.io/embed/skillify-messy-web-page-xk00mt?fontsize=14&hidenavigation=1&theme=dark",
      placeholder: "hello",
    },
    {
      component: "code-snippet",
      text: "We could create a `Header` function component for the header:",
      code: `export default function ExpenseHeader() {
  return (
    <div className="flex flex-row space-x-2">
      <p>date</p>
      <p>name</p>
      <p>amount</p>
      <p>type</p>
    </div>
  );
}`,
    },
    {
      component: "code-snippet",
      text: "We could create a `ExpenseRow` function component for each row:",
      code: `export default function ExpenseItemOne() {
  return (
    <div className="flex flex-row space-x-2">
      <p>2022-10-01</p>
      <p>Restaurant</p>
      <p>50.23</p>
      <p>Eating Out</p>
    </div>
  );
}`,
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
