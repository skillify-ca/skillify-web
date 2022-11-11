import React from "react";
import LessonComponent, {
  LessonComponentData,
} from "../components/coding/studentPortal/LessonComponent";

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
      text: "React and Javascript Recipes",
    },

    {
      component: "description",
      text: "This page contains small, contained CodeSandbox examples of React and / or Javascript code created by Skillify's coaches. Take a look for reference to help in your coding journey!",
    },
    {
      component: "resource-list",
      resources: [
        {
          title: "Child to Child communication",
          description:
            "React example where two child components communicate between each other via the parent app component. Also shows you how to pass functions as props ",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
          link: "https://codesandbox.io/s/child-to-child-communication-via-parent-kpb10d",
        },
      ],
    },
  ];
  return { props: { lessonComponents } };
}

export default React2;
