import React from "react";
import { Button } from "../../../../components/ui/Button";
import ProgressBar from "../../../../components/coding/studentPortal/ProgressBar";
import LessonComponent, {
  LessonComponentData,
} from "../../../../components/coding/studentPortal/LessonComponent";

const HTML3 = ({ lessonComponents }) => {
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
              Complete the HTML tutorials. You will need to use many of the
              basic tags to create you page.
            </p>
          </div>
          <div>
            <p className="text-charmander">Step 2:</p>
            <p>
              Create the index.html file. This is where you will do all your
              coding!
            </p>
          </div>
          <div>
            <p className="text-charmander">Step 3:</p>
            <p>
              You may use any sort of html tags you like in order to create the
              blog you want.
            </p>
            <p>
              Focus on the structure of your webpage, we will make it flashy
              once we learn CSS styling!
            </p>
          </div>
          <div>
            <p className="text-charmander">Step 4:</p>
            <p>
              Once your are complete, submit you index.html to the Slack
              Channel.
            </p>
          </div>
          <div className="flex h-full mt-12 sm:justify-end">
            <a href={"/studentPortal/intro/HTML/4"}>
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
      text: "HTML Blog Assignment",
    },
    {
      component: "description",
      text: "You are now ready to complete your very first coding assignment!",
    },
  ];
  return { props: { lessonComponents } };
}

export default HTML3;
