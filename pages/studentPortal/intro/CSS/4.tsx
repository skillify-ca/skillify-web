import React from "react";
import { Button } from "../../../../components/ui/Button";
import ProgressBar from "../../../../components/coding/studentPortal/ProgressBar";

const CSS4 = () => {
  return (
    <>
      <div className="col-span-7">
        <div className="grid h-full grid-cols-1 p-8 space-y-4 bg-gray-100">
          <ProgressBar completed={100} />
          <div className="grid grid-cols-1">
            <div className="pt-4 ">
              <div className="grid grid-cols-1">
                <div className="flex justify-center w-full p-4">
                  <img src="/images/studentPortal/explore.svg" />
                </div>
                <h1 className="mt-4 text-xl font-bold text-center text-charmander">
                  {" "}
                  Ready to test your CSS knowledge?
                </h1>
                <p className="text-center">5 Questions</p>
                <p className="mt-4 text-center">Begin the quiz now!</p>
              </div>
            </div>
            <div className="flex h-full mt-12 sm:justify-end">
              <a href={"/studentPortal/intro/CSS/css-quiz"}>
                <Button label="Start Quiz" disabled={false} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CSS4;
