import React from "react";

const SubscribeBanner = () => {
  return (
    <div className="w-full ">
      <div className="flex flex-col items-center justify-center p-4 text-xl lg:m-8 md:p-8 lg:rounded-md bg-murkrow">
        <p className="mb-4 text-center -xl max-w-7xl text-charmander">
          Universities and Colleges require 4 years of your life and treat you
          like a number. Traditional Coding Bootcamps sell you on unrealistic
          timelines then leave you unprepared for finding a job.
        </p>
        <p className="mb-4 text-center max-w-7xl text-charmander">
          Don't waste your time or money! 1-on-1 and small group coaching is the
          most effective way to achieve your learning goals.
        </p>
        <p className="mb-4 text-center max-w-7xl text-charmander">
          Our personalized strategies and exclusive frameworks are designed to
          help you learn the fundamentals of coding, get hired and succeed on
          the job.
        </p>
      </div>
    </div>
  );
};

export default SubscribeBanner;
