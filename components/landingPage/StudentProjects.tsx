import React from "react";

export default function StudentProjects() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-blue-800 text-center text-3xl mb-10">
        Student Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col items-center">
          <img
            className="rounded-full h-16 w-16"
            src="/images/landingPage/raveen.jpg"
            alt="Raveen's Profile"
          />
          <div>
            <div className="bg-zinc-400 h-80 w-72 flex flex-col justify-center items-center rounded-lg shadow-lg">
              <span className="font-bold italic">Stock</span>
              <span className="font-bold bg-black-500 px-2 rounded text-white">
                News
              </span>
            </div>
            <h1 className="mt-2 text-center">Stock News</h1>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-charmander h-80 w-72 flex flex-col justify-center items-center rounded-lg shadow-md">
            <div>Project Feedback</div>
            <h1 className="mt-2 text-center">Project Feedback</h1>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-black-500 h-80 w-72 flex flex-col justify-center items-center rounded-lg shadow-xl text-white">
            <div>Interview</div>
            <h1 className="mt-2 text-center">Interview</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
