import React from "react";
import Navbar from "../../../../../components/ui/Navbar";
import { Sidebar } from "../../../../../components/coding/studentPortal/Sidebar";
import { Button } from "../../../../../components/ui/Button";
import ProgressBar from "../../../../../components/coding/studentPortal/ProgressBar";

const CSS4 = () => {
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
                    <img src="/images/studentPortal/explore.svg" />
                  </div>
                  <h1 className="text-charmander font-bold text-center text-xl mt-4">
                    {" "}
                    Ready to test your CSS knowledge?
                  </h1>
                  <p className="text-center">10 Questions</p>
                  <p className="text-center mt-4">Begin the quiz now!</p>
                </div>
              </div>
              <div className="flex sm:justify-end mt-12 h-full">
                <a href={""}>
                  <Button label="Start Quiz" disabled={false} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CSS4;
