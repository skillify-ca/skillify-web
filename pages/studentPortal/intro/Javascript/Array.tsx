import React from "react";
import { Button } from "../../../../components/ui/Button";
import ProgressBar from "../../../../components/coding/studentPortal/ProgressBar";
import LessonComponent, {
  LessonComponentData,
  Resource,
} from "../../../../components/coding/studentPortal/LessonComponent";

const Array = ({ lessonComponents }) => {
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
      link: "https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-arrays",
      description: "This is a deeper dive into what arrays are in Javascript",
    },
  ];
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Arrays",
    },
    {
      component: "description",
      text: "An array can hold many values under a single name, and you can access the values by referring to an index number. This means we can group variables like cars into a single name array and use their index number to differentiate between the different cars.",
    },
    {
      component: "resource-list",
      resources,
    },
  ];
  return { props: { lessonComponents } };
}

export default Array;
