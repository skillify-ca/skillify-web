import React, { useState } from "react";
import LandingNavbar from "../landingPage/LandingNavbar";
import Progress from "../resources/quizzes/shared/Progress";
import { Button } from "../ui/Button";
type ContactProps = {
  handleClick: () => void;
};
const Contact: React.FC<ContactProps> = ({ handleClick }) => {
  const [progress] = useState(55);

  return (
    <div className="flex flex-col bg-slate-50  h-screen my-auto p-8  md:space-y-12 space-y-8 items-center">
      {" "}
      <LandingNavbar />
      <div className="w-full items-center flex flex-col space-y-2 md:space-y-6">
        <Progress progress={progress} />
        <div className="text-sm">2/4</div>
      </div>{" "}
      <div className="mt-8 text-xl font-bold">
        Please enter your name and email:
      </div>
      <div className="flex flex-col items-center mt-4">
        <label className="text-md font-bold" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter name"
          className="w-80 px-2 h-12  py-1 mt-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="flex flex-col items-center mt-4">
        <label className="text-md font-bold" htmlFor="email">
          Email:
        </label>
        <input
          type="text"
          id="email"
          placeholder="Enter email address"
          className="w-80 px-2 h-12  py-1 mt-2 border border-gray-300 rounded-lg"
        />
      </div>
      <button onClick={handleClick} className="space-x-12 mt-8">
        <Button label="Next" />
        <Button label="Back" backgroundColor="white" textColor="text-black" />
      </button>
    </div>
  );
};

export default Contact;
