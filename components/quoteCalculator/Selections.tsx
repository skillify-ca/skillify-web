import React, { useState } from "react";
import LandingNavbar from "../landingPage/LandingNavbar";
import Progress from "../resources/quizzes/shared/Progress";
import { Button } from "../ui/Button";

type ContactProps = {
  handleClick: () => void;
};

const Contact: React.FC<ContactProps> = ({ handleClick }) => {
  const [progress] = useState(55);

  const options = [
    "Learn foundational programming concepts and build simple projects",
    "Further my skills in programming and build more complex projects",
    "Fully transition into a tech career",
    "Other (Please specify)",
  ];

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col mx-auto bg-slate-50 h-screen my-auto p-8 md:space-y-12 space-y-8 items-center">
      <LandingNavbar />
      <div className="md:w-2/3 w-full items-center mx-40 flex flex-col space-y-4 md:space-y-6">
        <Progress progress={progress} />
        <div className="text-sm">2/4</div>
      </div>
      <div className="mt-8 text-xl font-bold">
        What are your learning goals?
      </div>
      <div className="flex flex-col space-y-8 items-center mt-4">
        {options.map((option, index) => (
          <div
            key={index}
            className={`w-full px-4 py-2 text-sm mt-2 border rounded-full cursor-pointer ${
              selectedOption === option
                ? "bg-charmander text-white"
                : "bg-white text-black-600 border-black-300"
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <button onClick={handleClick} className="space-x-12 mt-8">
        <Button label="Next" />
        <Button label="Back" backgroundColor="white" textColor="text-black" />
      </button>
    </div>
  );
};

export default Contact;
