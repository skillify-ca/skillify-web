import React, { useState } from "react";
import LandingNavbar from "../landingPage/LandingNavbar";
import Progress from "../resources/quizzes/shared/Progress";
import { Button } from "../ui/Button";
type ContactProps = {
  handleClick: () => void;
};
const Contact: React.FC<ContactProps> = ({ handleClick }) => {
  const [progress] = useState(25);

  return (
    <div className="flex flex-col mx-auto bg-slate-50 h-screen my-auto p-8 md:space-y-12 space-y-8 items-center">
      <LandingNavbar />
      <div className="md:w-2/3 w-full items-center mx-40 flex flex-col space-y-4 md:space-y-6">
        {" "}
        <Progress progress={progress} />
        <div className="text-sm">1/4</div>
      </div>{" "}
      <div className=" text-xl font-bold">
        Please enter your name and email:
      </div>
      <div className="space-y-12">
        <div className="flex flex-col items-start mt-4">
          <label className="text-lg font-bold" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            className="w-80 px-2 h-12  py-1 mt-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="flex flex-col items-start mt-4">
          <label className="text-lg font-bold" htmlFor="email">
            Email:
          </label>
          <input
            type="text"
            id="email"
            placeholder="Enter email address"
            className="w-80 h-12 px-2 py-1 mt-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>
      <button onClick={handleClick} className="mt-8">
        <Button label="Next" />
      </button>
    </div>
  );
};

export default Contact;
