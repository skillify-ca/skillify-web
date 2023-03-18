import React from "react";

export default function WhereToStart() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-x-8 text-start">
      <div className="flex flex-col md:p-4 p-2 space-y-4 md:space-y-8 md:max-w-sm w-full">
        <h1 className="text-lg md:text-3xl font-bold">
          Which Course Should You Start With?
        </h1>
        <p className="text-xs md:text-lg">
          For beginners with little to no coding experience: Check out our
          Coding Basics Course!
        </p>
        <p className="text-xs md:text-lg">
          If you have intermediate or advanced coding experience: Check out our
          Web Development Course!
        </p>
      </div>
      <div className="overflow-y-auto h-40 md:h-full md:order-last">
        <img src="/images/freemium/courses.svg" />
      </div>
    </div>
  );
}
