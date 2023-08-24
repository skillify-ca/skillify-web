import React from "react";

export default function StudentProjects() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-blue-800 text-center text-3xl">Student Projects</h1>
      </div>
      <div className="grid grid-cols-1 items-center">
        <div className="flex flex-row-3 border-8 border-black-500">
          <div className="grid grid-cols-3">
            <div className="bg-zinc-400 h-80 w-72 flex flex-col justify-center items-center rounded-lg shadow-lg">
              <span className="font-bold italic">Stock</span>
              <span className="font-bold italic bg-black-500 px-2 rounded text-white">
                News
              </span>
            </div>
            <div className="bg-charmander h-80 w-72 flex flex-col justify-center items-center rounded-lg shadow-md">
              <div>Project Feedback</div>
            </div>
            <div className="bg-black-500 h-80 w-72 flex flex-col justify-center items-center rounded-lg shadow-xl text-white">
              <div>Interview</div>
            </div>
            <h1 className="">stock news</h1>
            <h1 className="">Project Feedback</h1>
            <h1 className="">Interview</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
