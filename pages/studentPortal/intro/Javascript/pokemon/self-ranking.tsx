import React from "react";
import { Button } from "../../../../../components/ui/Button";
import ProgressBar from "../../../../../components/coding/studentPortal/ProgressBar";

const JS6 = () => {
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
                  Ready to apply your JS Knowledge?
                </h1>
                <p className="text-center text-gray-800">
                  Before you begin the assignment check-in with your coach and
                  make sure that you're ready to start. Fill out this{" "}
                  <a
                    className="underline cursor-pointer text-charmander"
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc9uMgy9iVG9cXnXiZTl9yGbAfg26LCTXofqLc8BoBY_FBMmQ/viewform?usp=sf_link"
                  >
                    form
                  </a>{" "}
                  to track your confidence around different JavaScript concepts
                  and discuss your responses with your coach. You don't need to
                  feel mastery over all concepts, but you should have a basic
                  understanding of each concept before starting the assignment.
                  If you don't feel confident about a certain topic, review that
                  section in Codecademy.
                </p>
              </div>
            </div>
            <div className="flex h-full mt-12 sm:justify-end">
              <a
                href={"/studentPortal/intro/Javascript/pokemon/pre-requisites"}
              >
                <Button label="Continue" disabled={false} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JS6;
