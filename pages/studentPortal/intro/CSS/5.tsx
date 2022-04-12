import React from "react";
import { Button } from "../../../../components/ui/Button";
import ProgressBar from "../../../../components/coding/studentPortal/ProgressBar";

const CSS5 = () => {
  return (
    <>
      <div className="col-span-7">
        <div className="grid h-full grid-cols-1 p-8 space-y-4 bg-gray-100 dark:bg-gray-800">
          <ProgressBar completed={100} />
          <div className="grid grid-cols-1">
            <div className="pt-4 ">
              <div className="grid grid-cols-1">
                <div className="flex justify-center w-full p-4">
                  <img src="/images/studentPortal/assignment.svg" />
                </div>
                <h1 className="text-xl font-bold text-center text-charmander">
                  {" "}
                  Ready to apply your CSS Knowledge?
                </h1>
                <p className="text-center text-gray-800 dark:text-white">
                  Begin the assignment now!
                </p>
              </div>
            </div>
            <div className="flex h-full mt-12 sm:justify-end">
              <a href={"/studentPortal/intro/CSS/6"}>
                <Button label="Continue" disabled={false} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CSS5;
