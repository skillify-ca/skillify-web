import React from "react";

export default function StudentProjects() {
  return (
    <div>
      <h1 className="text-blue-800 text-center text-3xl">Student Projects</h1>
      <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-3 gap-10">
          <div className="bg-gray-300 h-80 w-72 flex justify-center items-center rounded-lg shadow-lg">
            Stock News
          </div>
          <div className="bg-orange-400 h-80 w-72 flex justify-center items-center rounded-lg shadow-md">
            Orange
          </div>
          <div className="bg-green-400 h-80 w-72 flex justify-center items-center rounded-lg shadow-xl">
            Black
          </div>
        </div>
      </div>
    </div>
  );
}
