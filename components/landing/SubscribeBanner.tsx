import React, { useState } from "react";

const SubscribeBanner = () => {
  return (
    <div className="w-full ">
      <div className="flex flex-col items-center justify-center p-4 text-xl lg:m-8 md:p-8 lg:rounded-md bg-murkrow">
        <p className="mb-4 text-center -xl max-w-7xl text-charmander">
          Universities and Colleges rip you off and put you in debt.
        </p>
        <p className="mb-4 text-center max-w-7xl text-charmander">
          Coding bootcamps sell you on unrealistic timelines then leave you
          unprepared for finding or keeping a real job.
        </p>
        <p className="mb-4 text-center max-w-7xl text-charmander">
          Our exlusive strategies and frameworks are designed to help you learn
          the fundamentals of coding, get hired and succeed on the job.
        </p>
      </div>
    </div>
  );
};

export default SubscribeBanner;
