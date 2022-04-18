import React from "react";
import { Button } from "../../../../components/ui/Button";
import ProgressBar from "../../../../components/coding/studentPortal/ProgressBar";
import LessonComponent, {
  LessonComponentData,
  Resource,
} from "../../../../components/coding/studentPortal/LessonComponent";

const Iterators = ({ lessonComponents }) => {
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
      link: "https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-iterators/cheatsheet",
      description:
        "This is a deeper dive into what iterators are in Javascript",
    },
  ];
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Iterators",
    },
    {
      component: "description",
      text: "Iterators are objects that have a sequence where there are 2 questions being answered: If there is an element next? If so, what is it? This is what we call an iterator protocol. If these questions are answered then we are dealing with an iterator. With iterators we can use iterator methods that are very powerful and versatile. These methods are .map() and .filter().",
    },
    {
      component: "resource-list",
      resources,
    },
    {
      component: "code-sandbox",
      title: "Iterator Functions in Javascript",
      link: "https://codesandbox.io/embed/findplant-du92ty?fontsize=14&hidenavigation=1&theme=dark",
    },
  ];
  return { props: { lessonComponents } };
}

export default Iterators;
