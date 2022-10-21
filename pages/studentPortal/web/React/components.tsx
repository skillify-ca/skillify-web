import { Router, useRouter } from "next/router";
import React from "react";
import Card, { CardData } from "../../../../components/coding/Card";
import LessonComponent, {
  LessonComponentData,
} from "../../../../components/coding/studentPortal/LessonComponent";
import { Button } from "../../../../components/ui/Button";
import Navbar from "../../../../components/ui/Navbar";

const React2 = ({ lessonComponents }) => {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/studentPortal/web/React/props");
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-8 px-4 pt-4 m-8 sm:px-12">
        {lessonComponents.map((it) => (
          <LessonComponent data={it} />
        ))}
      </div>
      <div className="flex mt-8 sm:justify-end">
        <Button onClick={handleContinue} label="Continue" />
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Functional Components",
    },
    {
      component: "resource-list",
      resources: [
        {
          title: "Components and Props",
          description:
            "The official React documentation explaining the concept of components.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
          link: "https://reactjs.org/docs/components-and-props.html",
        },
      ],
    },
    {
      component: "description",
      text:
        "Components are the building blocks of React apps. You can use components to split up the UI into independent, reusable pieces. In this tutorial we will take HTML that renders a table of expenses, and turn it into an efficient series of React components. A component - at its simplest form - is just a Javascript function that returns HTML to be rendered on a page. ",
    },

    {
      component: "code-snippet",
      text: "The following is a function that returns the text `Hello World`:",
      code: `export function HelloComponent() {
        return <div>Hello World</div>;
      }`,
    },
    {
      component: "description",
      text:
        "We can use functional components to make our code cleaner and less repeatable. Take a look at this basic HTML page displaying a table of expenses:",
    },
    {
      component: "code-sandbox",
      title: "HTML Budget",
      link:
        "https://codesandbox.io/embed/skillify-messy-web-page-xk00mt?fontsize=14&hidenavigation=1&theme=dark",
    },
    {
      component: "description",
      text:
        "This code works but it's tedious. Imagine if we had to repeat the <p> tag 100 or 1000 times. What if we made a function component for each row?",
    },
    {
      component: "code-snippet",
      text: "We could create a `Header` function component for the header:",
      code: `export function ExpenseHeader() {
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
      code: `export function ExpenseItemOne() {
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
      component: "description",
      text: "Putting this all together, we have much cleaner code: ",
    },
    {
      component: "code-sandbox",
      title: "Cleaner, Componentized HTML Budget",
      link:
        "https://codesandbox.io/embed/skillify-componentized-react-page-z1hego?fontsize=14&hidenavigation=1&theme=dark",
    },
    {
      component: "description",
      text:
        "This is much cleaner but we still have to write a new component for each row. The next lesson will cover props, which will allow us to make a reusable row component",
    },
  ];
  return { props: { lessonComponents } };
}

export default React2;
