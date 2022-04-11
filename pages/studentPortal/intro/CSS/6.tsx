import React from "react";
import { Button } from "../../../../components/ui/Button";
import ProgressBar from "../../../../components/coding/studentPortal/ProgressBar";
import LessonComponent, {
  LessonComponentData,
} from "../../../../components/coding/studentPortal/LessonComponent";

const CSS6 = ({ lessonComponents }) => {
  return (
    <>
      <div className="col-span-7">
        <div className="grid h-full grid-cols-1 p-8 space-y-4 bg-gray-100 text-gray-700">
          <ProgressBar completed={100} />
          {lessonComponents.map((it) => (
            <LessonComponent data={it} />
          ))}
          <h1 className="font-bold text-xl mt-12">How to get started:</h1>
          <div className="flex-row">
            <h1 className="text-charmander">Step 1:</h1>
            <p>
              Complete the CSS tutorials. You will need to use many CSS styles
              to make your page flashy!
            </p>
          </div>
          <div>
            <p className="text-charmander">Step 2:</p>
            <p>
              Locate your HTML Blog assignment file and create a new file called
              style.css. This is where you CSS code will go!
            </p>
          </div>
          <div>
            <p className="text-charmander">Step 3:</p>
            <p>
              Your this assignment you will need to set up your Blog to follow
              the French Flag Layout.
            </p>
            <p>The Layout below is what you want to aim for.</p>
            <img src="/images/coding/units/css/layout1.png" className="w-96" />
          </div>
          <div className="mb-12">
            <p className="text-charmander">Step 4:</p>
            <p>
              Once you have the layout in place, the sky is the limit. Try out
              different CSS styles to make your page cool and exciting! Add
              colours, hover effects, borders, or whatever you want!
            </p>
          </div>
          <div className="flex h-full mt-16 sm:justify-end">
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
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "CSS Blog Assignment",
    },
    {
      component: "description",
      text: "Previously you made a blog using HTML but it may look very boring.",
    },
    {
      component: "description",
      text: "We are going to change that using CSS styling! You will now use CSS styling to bring your page to life!",
    },
  ];
  return { props: { lessonComponents } };
}

export default CSS6;
