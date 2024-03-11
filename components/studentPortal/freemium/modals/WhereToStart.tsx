import React from "react";

export default function WhereToStart() {
  return (
    <div className="flex flex-col items-center justify-center space-x-8 md:flex-row text-start text-murkrow">
      <div className="flex flex-col w-full p-2 space-y-1 md:p-4 md:space-y-6 md:max-w-md">
        <h1 className="text-lg md:text-3xl font-bold md:mt-[-30px] mt-2 ">
          Which Free Course Should You Start With?
        </h1>

        <div className="w-full p-0 space-y-2 text-xs md:p-4 md:text-lg md:bg-mewtwo md:rounded-xl">
          <div className="grid grid-cols-5 gap-4 p-3 md:flex md:gap-0 placeholder:flex-row md:flex-col bg-mewtwo md:bg-none rounded-xl md:rounded-none">
            <p className="col-span-3 ">
              For beginners with little to no coding experience:{" "}
            </p>
            <p className="flex items-center col-span-2 font-bold ">
              Coding Basics Course!
            </p>
          </div>
          <div className="grid grid-cols-5 gap-4 p-3 md:flex md:gap-0 md:flex-col bg-mewtwo rounded-xl">
            <p className="col-span-3">
              If you have intermediate or advanced coding experience:{" "}
            </p>
            <p className="flex items-center col-span-2 font-bold">
              Web Development Course!
            </p>
          </div>
          <img
            src="/images/freemium/coursesMobile.svg"
            className="justify-center block h-32 mx-auto md:hidden"
          />
        </div>
      </div>
      <div>
        <img src="/images/freemium/courses.svg" className="hidden md:block" />
      </div>
    </div>
  );
}
