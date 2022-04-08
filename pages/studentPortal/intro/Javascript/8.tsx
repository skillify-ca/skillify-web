import React from "react";
import { Button } from "../../../../components/ui/Button";
import ProgressBar from "../../../../components/coding/studentPortal/ProgressBar";
import LessonComponent, {
  LessonComponentData,
} from "../../../../components/coding/studentPortal/LessonComponent";

const JS8 = ({ lessonComponents }) => {
  return (
    <>
      <div className="col-span-7">
        <div className="grid h-full grid-cols-1 p-8 space-y-4 bg-gray-100 text-gray-700">
          <ProgressBar completed={100} />
          <p>
            {" "}
            <b>Objective:</b> Write a javascript function that takes this
            Pokemon JSON and returns a list of all Pokemon Names that can learn
            the move Fire Blast.
          </p>
          <h1 className="text-xl font-bold"> Steps in the right Direction:</h1>
          <div className="flex-row">
            <h1 className="text-charmander">Step 1:</h1>
            <p>You must read through the JSON object.</p>
          </div>
          <div>
            <p className="text-charmander">Step 2:</p>
            <p>
              Now you must find the array of Pokémons that can learn the attack
              called "Fire Blast".
            </p>
          </div>
          <div>
            <p className="text-charmander">Step 3:</p>
            <p>
              Using .map transform the array of Pokémon to only contain the name
              and not the url.
            </p>
          </div>
          <div>
            <p className="text-charmander">Step 4:</p>
            <p>Print out this array of Pokémon names.</p>
          </div>
          <div>
            <p className="text-charmander">Step 5:</p>
            <p>
              And there you have it! Part 1 of the Javascript Assignment is
              complete!
            </p>
          </div>
          <div className="flex h-full mt-12 sm:justify-end">
            <a href={"/studentPortal/intro/Javascript/JavascriptA1-video"}>
              <Button label="Continue" disabled={false} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default JS8;
