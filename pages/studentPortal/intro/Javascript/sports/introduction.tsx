import React from "react";
import ProgressBar from "../../../../../components/studentPortal/ProgressBar";
import { Button } from "../../../../../components/ui/Button";

const JS9 = () => {
  return (
    <>
      <div className="col-span-7">
        <div className="grid h-full grid-cols-1 p-8 space-y-4 bg-gray-100">
          <ProgressBar completed={100} />
          <div className="grid grid-cols-1">
            <div className="pt-4 ">
              <div className="grid grid-cols-1">
                <div className="flex justify-center w-full p-4">
                  <img src="/images/studentPortal/assignment.svg" />
                </div>
                <h1 className="text-xl font-bold text-center text-charmander">
                  {" "}
                  Ready for the Sports Javascript Assignment?
                </h1>
                <p className="text-center text-gray-800">
                  Begin the assignment now!
                </p>
              </div>
            </div>
            <div className="flex h-full mt-12 sm:justify-end">
              <a href={"/studentPortal/intro/Javascript/sports/pre-requisites"}>
                <Button label="Continue" disabled={false} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JS9;
