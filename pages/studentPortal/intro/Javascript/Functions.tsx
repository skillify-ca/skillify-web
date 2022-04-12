import React from "react";
import { Button } from "../../../../components/ui/Button";
import ProgressBar from "../../../../components/coding/studentPortal/ProgressBar";
import LessonComponent, {
  LessonComponentData,
  Resource,
} from "../../../../components/coding/studentPortal/LessonComponent";

const Functions = ({ lessonComponents }) => {
  return (
    <>
      <div className="col-span-7">
        <div className="grid h-full grid-cols-1 space-y-4 bg-gray-100 text-gray-700  dark:bg-gray-800 dark:text-white p-32">
          <ProgressBar completed={100} />
          {lessonComponents.map((it) => (
            <LessonComponent data={it} />
          ))}

          <div className="flex h-full mt-12 sm:justify-end">
            <a href={"/studentPortal/intro"}>
              <Button label="Continue" disabled={false} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps({ params }) {
  const resources: Resource[] = [
    {
      title: "Codecademy",
      image:
        "https://icons-for-free.com/download-icon-codecademy-1324440139458906558_512.png",
      link: "https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-functions",
      description:
        "This is a deeper dive into what functions are in Javascript",
    },
  ];
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Functions",
    },
    {
      component: "description",
      text: "Text: Variables help us store values and perform operations on numbers and letters. There are lots of different types of variables but two important ones are numbers and strings (letters)",
    },
    {
      component: "resource-list",
      resources,
    },
    {
      component: "code-sandbox",
      title: "Functions in Javascript",
      link: "https://codesandbox.io/s/temperature-2j5ecn?file=/src/entry.ts",
    },
  ];
  return { props: { lessonComponents } };
}

export default Functions;
