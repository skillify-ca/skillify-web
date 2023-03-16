import { React, useState } from "react";
import { Button } from "../../../components/ui/Button";

const EducationBackground = () => {
  const [eduBg, setEduBg] = useState({
    institution: "",
    degree: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEduBg((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="flex flex-col items-center text-center space-y-2 px-5">
      <h1 className="text-2xl font-semibold">
        What's your educational background?
      </h1>
      <p className="text-lg font-medium px-3 pb-4">Fill in the blanks</p>
      <div className="text-lg space-y-2 text-left">
        <h3>Institution</h3>{" "}
        <input
          type="text"
          name="institution"
          onChange={handleChange}
          className="shadow appearance-none border border-gray-500 rounded-lg px-6"
        ></input>
        <h3>Degree</h3>{" "}
        <input
          type="text"
          name="degree"
          onChange={handleChange}
          className="shadow appearance-none border border-gray-500 rounded-lg px-6"
        ></input>
      </div>
      <Button label="Next" onClick={handleSubmit} />
    </div>
  );
};

export default EducationBackground;
