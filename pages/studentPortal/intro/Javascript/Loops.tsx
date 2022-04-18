import React from "react";
import { Button } from "../../../../components/ui/Button";
import ProgressBar from "../../../../components/coding/studentPortal/ProgressBar";
import LessonComponent, {
  LessonComponentData,
  Resource,
} from "../../../../components/coding/studentPortal/LessonComponent";

const Loops = ({ lessonComponents }) => {
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
      link: "https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-loops",
      description: "This is a deeper dive into what loops are in Javascript",
    },
  ];
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Loops",
    },
    {
      component: "description",
      text: "Loops is way to allow programs to re-iterate their code while minimizing the times we copy and paste code. There are many different types of loops, but the most common are, for loops and while loops.",
    },
    {
      component: "resource-list",
      resources,
    },
  ];
  return { props: { lessonComponents } };
}

export default Loops;
