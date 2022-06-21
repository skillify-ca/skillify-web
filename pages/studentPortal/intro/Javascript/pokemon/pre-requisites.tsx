import React from "react";
import LessonComponent, {
  LessonComponentData,
} from "../../../../../components/coding/studentPortal/LessonComponent";
import ProgressBar from "../../../../../components/ProgressBar";
import { Button } from "../../../../../components/ui/Button";

const JS7 = ({ lessonComponents }) => {
  return (
    <>
      <div className="col-span-7">
        <div className="grid h-full grid-cols-1 px-4 pt-4 space-y-4 text-gray-700 bg-gray-100 sm:p-12">
          <ProgressBar completed={100} />
          {lessonComponents.map((it) => (
            <LessonComponent data={it} />
          ))}
          <div className="mt-2">
            <h1 className="font-bold">What do you need to get started?</h1>
            <p>
              First and foremost, you must download{" "}
              <a
                className="underline cursor-pointer text-charmander"
                href="https://nodejs.org/en/download/"
              >
                Node.js
              </a>{" "}
              to your computer.
            </p>
            <p>
              {" "}
              Secondly you install the{" "}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner"
                className="underline cursor-pointer text-charmander"
              >
                Code Runner Extension
              </a>{" "}
              to Visual Studio Code.{" "}
            </p>
            <p> After these 2 steps you should be good to go! </p>
          </div>
          <div className="flex h-full mt-12 sm:justify-end">
            <a href={"/studentPortal/intro/Javascript/pokemon/instructions"}>
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
      text: "Javascript Assignment - Pokemon JSON",
    },
    {
      component: "description",
      text: "In the previous modules, you were introduced to the concept of iterators, which include, .map and .filter. These iterators are actually used in a profesional setting all the time! That means, you must be confortable with using .map and .filter in order to apply them in your future job opprotunities. In this assignment, you will work with big JSON objects and apply iterators to narrow down to specific data.",
    },
  ];
  return { props: { lessonComponents } };
}

export default JS7;
