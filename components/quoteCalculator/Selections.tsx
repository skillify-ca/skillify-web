import React, { useState } from "react";
import Progress from "../resources/quizzes/shared/Progress";
import { Button } from "../ui/Button";
type ContactProps = {
  handleClick: () => void;
};
const Contact: React.FC<ContactProps> = ({ handleClick }) => {
  const [progress] = useState(55);

  return (
    <div className="flex flex-col items-center">
      <Progress progress={progress} />

      <div className="mt-8 text-xl font-bold">
        Please enter your name and email:
      </div>

      <div className="flex flex-col items-center mt-4">
        <label className="text-lg font-bold" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter name"
          className="w-40 px-2 py-1 mt-2 border border-gray-300 rounded"
        />
      </div>

      <div className="flex flex-col items-center mt-4">
        <label className="text-lg font-bold" htmlFor="email">
          Email:
        </label>
        <input
          type="text"
          id="email"
          placeholder="Enter email address"
          className="w-40 px-2 py-1 mt-2 border border-gray-300 rounded"
        />
      </div>

      <button onClick={handleClick} className="mt-8">
        <Button label="Next" />
      </button>
    </div>
  );
};

export default Contact;
