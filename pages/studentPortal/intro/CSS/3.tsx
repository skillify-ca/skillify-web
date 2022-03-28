import React from "react";
import { Button } from "../../../../components/ui/Button";
import ProgressBar from "../../../../components/coding/studentPortal/ProgressBar";

const CSS3 = () => {
  return (
    <>
      <div className="col-span-7">
        <div className="grid h-full grid-cols-1 p-8 space-y-4 bg-gray-100">
          <ProgressBar completed={100} />
          <div className="grid grid-cols-1">
            <div className="pt-4 ">
              <div className="grid grid-cols-1">
                <div className="flex justify-center w-full p-4">
                  <img src="/images/CssAchievement.svg" />
                </div>
                <h1 className="text-xl font-bold text-center text-charmander">
                  {" "}
                  You have unlocked a new achievement!
                </h1>
                <p className="text-center">Lesson Complete</p>
                <div className="mt-24">
                  <p className="text-center mr-80">Up Next:</p>
                  <div className="grid grid-cols-1 place-items-center">
                    <div className="p-12 mt-4 bg-white border-2 border-gray-200 rounded-lg px-36">
                      <p className="text-xl font-bold text-center">Quiz</p>
                      <p className="text-center">What is CSS?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-full mt-12 sm:justify-end">
              <a href={"/course/coding/unit/CSS/4"}>
                <Button label="Continue" disabled={false} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CSS3;
