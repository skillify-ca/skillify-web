import React from "react";

export default function WhereToStart() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-x-8 text-start text-murkrow">
      <div className="flex flex-col md:p-4 p-2 space-y-1 md:space-y-6 md:max-w-md w-full">
        <h1 className="text-lg md:text-3xl font-bold ">
          Which Course Should You Start With?
        </h1>

        <div className="md:p-4 p-0 text-xs md:text-lg space-y-2 w-full md:bg-mewtwo md:rounded-xl">
          <div className="grid grid-cols-5 md:flex gap-4 md:gap-0 placeholder:flex-row md:flex-col bg-mewtwo md:bg-none rounded-xl md:rounded-none p-3">
            <p className="col-span-3 ">
              For beginners with little to no coding experience:{" "}
            </p>
            <p className="flex items-center col-span-2 font-bold ">
              Coding Basics Course!
            </p>
          </div>
          <div className="grid grid-cols-5 md:flex md:gap-0 gap-4 md:flex-col  bg-mewtwo rounded-xl p-3">
            <p className="col-span-3">
              If you have intermediate or advanced coding experience:{" "}
            </p>
            <p className="flex items-center font-bold col-span-2">
              Web Development Course!
            </p>
          </div>
          <img
            src="/images/freemium/coursesMobile.svg"
            className="block h-32 md:hidden justify-center mx-auto"
          />
        </div>
      </div>
      <div>
        <img src="/images/freemium/courses.svg" className="hidden md:block" />
      </div>
    </div>
  );
}
