import React from "react";
import { Button } from "../../../../components/ui/Button";
import ProgressBar from "../../../../components/coding/studentPortal/ProgressBar";
import LessonComponent, {
  LessonComponentData,
  Resource,
} from "../../../../components/coding/studentPortal/LessonComponent";

const Conditionals = ({ lessonComponents }) => {
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
      link: "https://www.codecademy.com/courses/introduction-to-javascript/lessons/control-flow/exercises/else-if",
      description:
        "This is a deeper dive into what conditional statements are in Javascript",
    },
  ];
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Conditionals",
    },
    {
      component: "description",
      text: "Conditionals allows us to create programs that can make decisions based on if expressions are true or false. This helps programmers to produce different outputs based on the input provided by the user.",
    },
    {
      component: "resource-list",
      resources,
    },
    {
      component: "code-sandbox",
      title: "Functions in Javascript",
      link: "https://codesandbox.io/embed/temperature-2j5ecn?fontsize=14&hidenavigation=1&theme=dark",
    },
  ];
  return { props: { lessonComponents } };
}

export default Conditionals;
