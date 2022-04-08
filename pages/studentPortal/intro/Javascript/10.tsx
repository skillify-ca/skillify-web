import React from "react";
import { Button } from "../../../../components/ui/Button";
import ProgressBar from "../../../../components/coding/studentPortal/ProgressBar";
import LessonComponent, {
  LessonComponentData,
} from "../../../../components/coding/studentPortal/LessonComponent";

const JS10 = ({ lessonComponents }) => {
  return (
    <>
      <div className="col-span-7">
        <div className="grid h-full grid-cols-1 space-y-4 bg-gray-100 text-gray-700 p-32">
          <ProgressBar completed={100} />
          {lessonComponents.map((it) => (
            <LessonComponent data={it} />
          ))}
          <div className="mt-2">
            <h1 className="font-bold">What do you need to get started?</h1>
            <p>
              First and foremost, you must download the Javascript Assignment
              file. You can find this towards the bottom right side of the page.
              Click the "Download" and it should download a .zip file.
            </p>
            <p>
              {" "}
              Secondly you must have Node.js installed and the Code Runner
              Extension.{" "}
            </p>
            <p> After these 2 steps you should be good to go! </p>
          </div>
          <div className="flex h-full mt-12 sm:justify-end">
            <a href={"/studentPortal/intro/Javascript/11"}>
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
      text: "Javascript Assignment - NBA JSON",
    },
    {
      component: "description",
      text: "In the previous modules, you were introduced to the concept of iterators, which include, .map and .filter. These iterators are actually used in a profesional setting all the time! That means, you must be confortable with using .map and .filter in order to apply them in your future job opprotunities. In this assignment, you will work with big JSON objects and apply iterators to narrow down to specific data.",
    },
  ];
  return { props: { lessonComponents } };
}

export default JS10;
