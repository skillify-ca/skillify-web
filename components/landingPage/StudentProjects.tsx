import React from "react";

export default function StudentProjects() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-blue-800 text-center text-3xl mb-20 font-bold">
        Student Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col items-center relative">
          <div className="bg-zinc-400 h-80 w-72 flex flex-col justify-center items-center rounded-lg shadow-lg">
            <span className="font-bold italic">Stock</span>
            <span className="font-bold bg-black-500 px-2 rounded text-white">
              News
            </span>
          </div>
          <img
            className="rounded-full h-16 w-16 -mt-8 absolute z-10"
            src="/images/landingPage/raveen.jpg"
            alt="Raveen's Profile"
          />
          <h1 className="mt-2 text-center text-xl text-charmander">
            Stock News
          </h1>
          <h1>Raveen R.</h1>
        </div>
        <div className="flex flex-col items-center relative">
          <div className="bg-charmander h-80 w-72 flex flex-col justify-center items-center rounded-lg shadow-md">
            <div>Project Feedback</div>
          </div>
          <img
            className="rounded-full h-16 w-16 -mt-8 absolute z-10"
            src="/images/landingPage/raveen.jpg"
            alt="Raveen's Profile"
          />
          <h1 className="mt-2 text-center text-xl text-charmander">
            Project Feedback
          </h1>
          <h1>Nils E.</h1>
          <a href="" className="mt-8 hover:underline">
            See All Projects
          </a>
        </div>
        <div className="flex flex-col items-center relative">
          <div className="bg-black-500 h-80 w-72 flex flex-col justify-center items-center rounded-lg shadow-xl text-white">
            <div>Interview</div>
          </div>
          <img
            className="rounded-full h-16 w-16 -mt-8 absolute z-10"
            src="/images/landingPage/raveen.jpg"
            alt="Raveen's Profile"
          />
          <h1 className="mt-2 text-center text-xl text-charmander">
            Interview
          </h1>
          <h1>Jane H.</h1>
        </div>
      </div>
    </div>
  );
}
