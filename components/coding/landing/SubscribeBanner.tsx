import React, { useState } from "react";

const SubscribeBanner = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col items-center justify-center p-4 lg:m-8 md:p-8 lg:rounded-md bg-murkrow">
        <p className="mb-4 text-2xl text-center max-w-7xl text-charmander">
          Universities and Colleges are ripping you off and put you in debt.
        </p>
        <p className="mb-4 text-2xl text-center max-w-7xl text-charmander">
          Coding bootcamps sell you on unrealistic timelines that leave you
          unprepared for finding a real job.
        </p>
        <p className="mb-4 text-2xl text-center max-w-7xl text-charmander">
          Our exlusive strategies and frameworks are designed to help you learn
          the fundamentals of coding, get hired and succeed on the job.
        </p>
      </div>
    </div>
  );
};

export default SubscribeBanner;
