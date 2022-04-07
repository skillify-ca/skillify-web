import React from "react";
import { Button } from "../../../../components/ui/Button";
import ProgressBar from "../../../../components/coding/studentPortal/ProgressBar";
import LessonComponent, {
  LessonComponentData,
} from "../../../../components/coding/studentPortal/LessonComponent";

const JS11 = ({ lessonComponents }) => {
  return (
    <>
      <div className="col-span-7">
        <div className="grid h-full grid-cols-1 p-8 space-y-4 bg-gray-100 text-gray-700">
          <ProgressBar completed={100} />
          <p>
            {" "}
            <b>Objective:</b> Write a javascript function that takes this NBA
            Box Score JSON and returns the pid of the player who scored the most
            points in that game.
          </p>
          <h1 className="text-xl font-bold"> Steps in the right Direction:</h1>
          <div className="flex-row">
            <h1 className="text-charmander">Step 1:</h1>
            <p>
              {" "}
              You are handed a very large JSON object containing a lot of data.
              However, the main properties we are looking for in this JSON
              object is "pd". This is the array of the 4 periods in the
              Basketball game.
            </p>
          </div>
          <div>
            <p className="text-charmander">Step 2:</p>
            <p>
              Within this "pd" array, we can see that the first index of the
              array in this case index 0, is all the plays that happen in period
              1.
            </p>
          </div>
          <div>
            <p className="text-charmander">Step 3:</p>
            <p>
              Note that plays is found in the "pla" array. There are many
              different types of plays in Basketball. Anything from scoring a
              bucket, jump-off, misses, are all considered plays. The way we
              differentiate between different plays is by using the "etype"
              property. Since we are only concerned about the scored buckets, we
              will only consider the plays with the etype of 15.
            </p>
          </div>
          <div>
            <p className="text-charmander">Step 4:</p>
            <p>
              We must now figure out a way to fiter only the plays of etype of
              15.
            </p>
          </div>
          <div>
            <p className="text-charmander">Step 5:</p>
            <p>
              Now we must keep track of which pid scored how many points and
              return the pid that scored the most.
            </p>
          </div>
          <div>
            <p className="text-charmander">Step 6:</p>
            <p>
              There you have it! Part 2 of the Javascript Assignment is
              Complete!
            </p>
          </div>
          <div className="flex h-full mt-12 sm:justify-end">
            <a href={"/studentPortal/intro/Javascript/JavascriptA2-video"}>
              <Button label="Continue" disabled={false} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default JS11;
