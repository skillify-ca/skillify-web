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
        <div className="grid h-full grid-cols-1 space-y-4 bg-gray-100 text-gray-700 p-32">
          <ProgressBar completed={100} />
          {lessonComponents.map((it) => (
            <LessonComponent data={it} />
          ))}
          <h1 className="font-bold text-xl mt-12">
            What do you need to get started:
          </h1>
          <p>
            First and foremost, you must create a new folder for your store.
            Create a .html file for each page of your online store.
          </p>
          <ul className="list-disc">
            <li>Home Page</li>
            <li>About Page</li>
          </ul>
          <h1 className="font-bold text-xl mt-12">Tailwinds CSS</h1>
          <p>
            Tailwind is a modern way of writing CSS properties. Trust me, you'll
            thank me later.{" "}
          </p>
          <a
            className="text-charmander"
            href="https://tailwindcss.com/docs/installation/play-cdn"
          >
            Here's the process on how to get Tailwind working in your code.
          </a>
          <div className="flex h-full mt-12 sm:justify-end">
            <a href={"/studentPortal/intro/Javascript/5"}>
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
      title: "W3Schools CSS tutorial",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/2175px-W3Schools_logo.svg.png",
      link: "https://www.w3schools.com/css/default.asp",
      description: "Start at the beginning and stop at CSS Overflow.",
    },
    {
      title: "CSS Grid Garden",
      image: "https://cssgridgarden.com/favicon.ico",
      link: "https://cssgridgarden.com/",
      description: "Do all levels.",
    },
    {
      title: "CSS Flexbox Froggy",
      image:
        "https://www.saashub.com/images/app/service_logos/82/fc3339facb56/large.png?1569287111",
      link: "https://flexboxfroggy.com/",
      description: "Do all levels.",
    },
    {
      title: "CSS Diner",
      image:
        "https://i.pinimg.com/originals/8a/b1/ad/8ab1ad8128508785f956eb6f58779b47.jpg",
      link: "https://flukeout.github.io/",
      description: "",
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
