import React from "react";
import Card, { CardData } from "../../../../components/coding/Card";
import LessonComponent, {
  LessonComponentData,
} from "../../../../components/coding/studentPortal/LessonComponent";
import Navbar from "../../../../components/ui/Navbar";

const React3 = ({ lessonComponents }) => {
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
      text: "Props",
    },
    {
      component: "resource-list",
      resources: [
        {
          title: "Components and Props",
          description:
            "The official React documentation explaining the concept of components + props.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
          link: "https://reactjs.org/docs/components-and-props.html",
        },
      ],
    },
    {
      component: "description",
      text: "Recall from the last lesson that React components are Javascript functions that return HTML. Props are simply the inputs or arguments to those functions",
    },

    {
      component: "code-snippet",
      text: "The `Hello` component from the last lesson took in no inputs or `props`. It will always return Hello World",
      code: `export function HelloComponent() {
        return <div>Hello World</div>;
      }`,
    },
    {
      component: "description",
      text: "What if we want our component to say Hello to anything or anyone? We can give this component a prop so we can tell it who to say Hello to",
    },
    {
      component: "code-snippet",
      text: "We can pass the prop `name` into our component and call the prop inside so it says Hello to anyone",
      code: `export function HelloComponent(name) => {
        return <div>Hello {name}</div>;
      }`,
    },
    {
      component: "description",
      text: "Passing props to functional components makes them dynamic and reusable. Let's apply this concept to the HTML expense table example from the last lesson. Recall that we took long block of HTML for each row of the table and turned it into five separate React components:",
    },
    {
      component: "code-sandbox",
      title: "Cleaner, Componentized HTML Budget",
      link: "https://codesandbox.io/embed/skillify-componentized-react-page-z1hego?fontsize=14&hidenavigation=1&theme=dark",
    },

    {
      component: "code-snippet",
      text: "We can create an ExpenseRow component that takes a prop for each column.",
      code: `export function ExpenseRow(
        date, 
        name, 
        amount, 
        type
        ) {
        return (
          <div className="flex flex-row space-x-2">
            <p>{date}</p>
            <p>{name}</p>
            <p>{amount}</p>
            <p>{type}</p>
          </div>
        );
      }`,
    },
    {
      component: "description",
      text: "We can now take this component and call it several times with each row's props: ",
    },
    {
      component: "code-sandbox",
      title: "Expense Table with Props",
      link: "https://codesandbox.io/embed/skillify-componentized-react-page-with-props-ol4xe5?fontsize=14&hidenavigation=1&theme=dark",
    },
    {
      component: "description",
      text: "Although we're re-using one component, our code appears to be repeating itself. Although it's not within scope of this lesson, we can use Javascript's map functionality to only `write` this component one time. ",
    },
    {
      component: "description",
      text: "We can create a new object called expense items that's an array of objects, then map - or iterate - through the array and call the props dynamically inside the ExpenseRow component. With this approach, we only write out ExpenseRow one time and the result is an efficient block of code!",
    },
    {
      component: "code-sandbox",
      title: "Expense Table with Props and Map",
      link: "https://codesandbox.io/embed/skillify-componentized-react-page-with-props-and-map-ghlp6r?fontsize=14&hidenavigation=1&theme=dark",
    },
  ];
  return { props: { lessonComponents } };
}

export default React3;
