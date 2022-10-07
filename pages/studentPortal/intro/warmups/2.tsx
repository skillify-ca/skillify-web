import React from "react";
import Card, { CardData } from "../../../../components/coding/Card";
import LessonComponent, {
  LessonComponentData,
} from "../../../../components/coding/studentPortal/LessonComponent";
import Navbar from "../../../../components/ui/Navbar";

const React2 = ({ lessonComponents }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 px-4 pt-4 m-8 sm:px-12">
        {lessonComponents.map((it) => (
          <LessonComponent data={it} />
        ))}
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
      component: "description",
      text: "Components are the building blocks of React apps. You can use components to split up the UI into independent, reusable pieces. In this tutorial we will take HTML that renders a table of expenses, and turn it into an efficient series of React components",
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
      component: "code-snippet",
      text: "A component - at its simplest form - is just a Javascript function that returns HTML to be rendered on a page. The following is a function that returns the text `Hello World`:",
      code: `export function HelloComponent() {
        return <div>Hello World</div>;
      }`,
    },
    {
      component: "description",
      text: "We can use functional components to make our code cleaner and less repeatable. Let's say we wanted to make a table of our personal expenses on a basic HTML page. It might look something like this:",
    },
    {
      component: "code-sandbox",
      title: "HTML Budget",
      link: "https://codesandbox.io/embed/skillify-messy-web-page-xk00mt?fontsize=14&hidenavigation=1&theme=dark",
    },
    {
      component: "description",
      text: "This code works but it might get tedious to repeat these <p> tags 100 times. What if we made a function component for each row?",
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
      text: "Now we can put this all together and make a much cleaner HTML page:",
    },
    {
      component: "code-sandbox",
      title: "Cleaner, Componentized HTML Budget",
      link: "https://codesandbox.io/embed/skillify-componentized-react-page-z1hego?fontsize=14&hidenavigation=1&theme=dark",
    },
    {
      component: "description",
      text: "Our HTML is much cleaner but we still need to write a component for each row with this approach. The next lesson will cover props which will help us make the row component reusable",
    },
  ];
  return { props: { lessonComponents } };
}

export default React2;
