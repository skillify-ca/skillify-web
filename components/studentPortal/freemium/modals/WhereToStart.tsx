import React from "react";

export default function WhereToStart() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-x-8 text-start">
      <div className="flex flex-col md:p-4 p-2 space-y-4 md:space-y-8 md:max-w-md w-full">
        <h1 className="text-lg md:text-3xl font-bold">
          Which Course Should You Start With?
        </h1>
        <img
          src="/images/freemium/coursesMobile.svg"
          className="block md:hidden"
        />
        <div className="bg-sky rounded-xl p-6 text-xs md:text-lg space-y-4 w-full">
          <div className="flex flex-row md:flex-col">
            <p>For beginners with little to no coding experience: </p>
            <p className="font-bold">Coding Basics Course!</p>
          </div>
          <div className="flex flex-row md:flex-col">
            <p>If you have intermediate or advanced coding experience: </p>
            <p className="font-bold">Web Development Course!</p>
          </div>
        </div>
      </div>
      <div>
        <img src="/images/freemium/courses.svg" className="hidden md:block" />
      </div>
    </div>
  );
}
