import React from "react";
import { Button } from "../../../../components/ui/Button";
import ProgressBar from "../../../../components/coding/studentPortal/ProgressBar";
import LessonComponent, {
  LessonComponentData,
} from "../../../../components/coding/studentPortal/LessonComponent";

const JS4 = ({ lessonComponents }) => {
  return (
    <>
      <div className="col-span-7">
        <div className="grid h-full grid-cols-1 space-y-4 bg-gray-100 text-gray-700 px-32 pb-32">
          <div className="mb-8">
            <ProgressBar completed={100} />
          </div>

          <div>
            {lessonComponents.map((it) => (
              <div className="p-4">
                <LessonComponent data={it} />
              </div>
            ))}
          </div>
          <div className="p-4">
            <h1 className="font-bold text-xl">
              What do you need to get started:
            </h1>
            <p>
              First and foremost, you must create a new folder for your store.
              Create a .html file for each page of your online store.
            </p>
            <ul className="list-disc p-4">
              <li>Home Page</li>
              <li>About Page</li>
            </ul>
            <h1 className="font-bold text-xl mt-8">Tailwinds CSS</h1>
            <p>
              Tailwind is a modern way of writing CSS properties. Trust me,
              you'll thank me later.{" "}
            </p>
            <a
              className="text-charmander"
              href="https://tailwindcss.com/docs/installation/play-cdn"
            >
              Here's the process on how to get Tailwind working in your code.
            </a>
          </div>

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
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Final Assignment - E-Commerce Store",
    },
    {
      component: "description",
      text: "Over the course of the last few weeks, you have been working through many fundamental concepts in web development. In this assignment, you will be consolidating all your knowledge of Web Dev to make a practical application. You will be using your skills in HTML, CSS, and a tiny bit of Javascript to make pretty awesome E-commerce stores!",
    },
  ];
  return { props: { lessonComponents } };
}

export default JS4;
