import React from "react";
import { Button } from "../../../../components/ui/Button";
import ProgressBar from "../../../../components/coding/studentPortal/ProgressBar";
import LessonComponent, {
  LessonComponentData,
  Resource,
} from "../../../../components/coding/studentPortal/LessonComponent";

const intro = ({ lessonComponents }) => {
  return (
    <>
      <div className="col-span-7">
        <div className="grid h-full grid-cols-1 space-y-4 bg-gray-100 text-gray-700  dark:bg-gray-800 dark:text-white p-32">
          <ProgressBar completed={100} />
          {lessonComponents.map((it) => (
            <LessonComponent data={it} />
          ))}

          <div className="flex h-full mt-12 sm:justify-end">
            <a href={"/studentPortal/intro/Javascript/Variables"}>
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
      title: "Grasshopper",
      image:
        "https://grasshopper.app/assets/static/images/home-touts/adventure__journey.svg",
      link: "https://grasshopper.app/",
      description: "A mobile application with Javascript challenges",
    },
    {
      title: "Code HS",
      image: "https://codehs.com/static/img/logo.png",
      link: "https://codehs.com/textbook/introjs_textbook/",
      description: "Intro to Javascript Textbook",
    },
    {
      title: "Free Code Camp",
      image: "/images/coding/units/javascript/freeCodeCamp.png",
      link: "https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/",
      description: "Iterators Tutorial: Map, Filter, Reduce",
    },
    {
      title: "Codecademy JS Course",
      image:
        "https://pentagram-production.imgix.net/1cbbfce1-48d5-4257-95e5-745c10e6492e/eo_codecademy_01.jpg?crop=edges&fit=crop&h=630&rect=375%2C0%2C2256%2C1412&w=1200",
      link: "https://www.codecademy.com/learn/introduction-to-javascript",
      description: "An online course introducing you to Javascript",
    },
    {
      title: "Code Wars",
      image: "https://docs.codewars.com/logo.svg",
      link: "https://www.codewars.com/",
      description:
        "Code wars is a fun way to learn code and recieve instant feedback!",
    },
  ];
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Introduction to Javascript",
    },
    {
      component: "description",
      text: "In earlier units, you learned new languages like HTML and CSS. JavaScript is yet another language wit it's own symbols and rules that you need to learn. This lesson will teach you the main concepts of JavaScript.",
    },
    {
      component: "resource-list",
      resources,
    },
  ];
  return { props: { lessonComponents } };
}

export default intro;
