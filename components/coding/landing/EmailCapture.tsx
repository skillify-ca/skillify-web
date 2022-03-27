import React from "react";

const EmailCapture = () => {
  return (
    <div>
      <div className="grid h-full grid-cols-1 bg-no-repeat sm:p-16 sm:grid-cols-2 bg-email-capture bg-charmander bg-blend-multiply">
        <div className="grid grid-cols-1 p-4 bg-white sm:p-16">
          <h1 className="mb-4 font-extrabold tracking-tight text-gray-900">
            <p className="text-3xl text-gray-900">
              <span className="">Get your </span>
              <span className=" text-charmander">personalized </span>
              learning roadmap.
            </p>{" "}
          </h1>
          <input
            id="bootcamper"
            type="text"
            autoComplete="off"
            className={`p-4 mb-4 border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 text-charmander placeholder-charmander w-full`}
            placeholder="First Name"
          />
          <input
            id="bootcamper"
            type="text"
            autoComplete="off"
            className={`text-left mb-4 p-4 border rounded-md shadow-md focus:outline-none focus:ring-indigo-500  text-charmander placeholder-charmander w-full `}
            placeholder="Enter your email address"
          />
          <div className="">
            <div className="rounded-md">
              <a
                href="/courses"
                className="flex items-center justify-center w-full p-4 text-base font-medium text-white rounded-md bg-charmander hover:bg-yellow-700 md:text-lg "
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="flex flex-col items-center justify-center p-4">
            <p className="text-xl font-bold text-white sm:text-2xl">
              {" "}
              With affordable coding courses, more people can get the skills
              they need to get hired fast.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailCapture;
