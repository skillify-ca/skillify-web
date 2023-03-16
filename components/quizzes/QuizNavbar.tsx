import React from "react";

const quiznavbar = () => {
  return (
    <div className="flex justify-between">
      <div className="flex justify-start">
        <img src="/images/backarrow.svg" className="w-16 p-4" />{" "}
      </div>
      <div className="flex justify-center">
        <img src="/images/logo.svg" className="w-40 mr-8" />
      </div>
      <div></div>
    </div>
  );
};

export default quiznavbar;
