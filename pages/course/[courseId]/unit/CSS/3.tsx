import React from "react";
import Navbar from "../../../../../components/ui/Navbar";
import { Sidebar } from "../../../../../components/coding/studentPortal/Sidebar";
import { Button } from "../../../../../components/ui/Button";
import ProgressBar from "../../../../../components/coding/studentPortal/ProgressBar";

const CSS3 = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-8 h-full">
        <Sidebar />
        <div className="col-span-7">
          <div className="grid grid-cols-1 p-8 space-y-4 bg-gray-100 h-full">
            <ProgressBar completed={100} />
            <div className="grid grid-cols-1">
              <div className="pt-4 ">
                <div className="grid grid-cols-1">
                  <div className="flex w-full p-4 justify-center">
                    <img src="/images/CssAchievement.svg" />
                  </div>
                  <h1 className="text-charmander font-bold text-center text-xl">
                    {" "}
                    You have unlocked a new achievement!
                  </h1>
                  <p className="text-center">Lesson Complete</p>
                  <div className="mt-24">
                    <p className="text-center mr-80">Up Next:</p>
                    <div className="grid grid-cols-1 place-items-center">
                      <div className="bg-white px-36 p-12 border-2 border-gray-200 rounded-lg mt-4">
                        <p className="font-bold text-xl text-center">Quiz</p>
                        <p className="text-center">What is CSS?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex sm:justify-end mt-12 h-full">
                <a href={""}>
                  <Button label="Continue" disabled={false} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CSS3;
