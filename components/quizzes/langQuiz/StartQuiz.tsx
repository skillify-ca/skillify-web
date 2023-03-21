import { useState } from "react";
import { Button } from "../../ui/Button";

const Intake = () => {
  const [onBoarding, setOnBoarding] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOnBoarding((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="flex flex-col items-center text-center space-y-6 px-4">
      <img src="/images/logo.svg" className="w-36 mt-4" />
      <h1 className="text-3xl font-semibold">
        What Coding Language Should I Learn First?
      </h1>
      <p className="text-xl font-medium px-3">
        Take this free quiz to find out what coding language you should learn
        first.
      </p>
      <div className="text-xl space-y-2 text-left">
        <h3>First Name</h3>{" "}
        <input
          type="text"
          name="name"
          onChange={handleChange}
          className="shadow appearance-none border border-gray-500 rounded-lg px-6"
        ></input>
        <h3>Email Address</h3>{" "}
        <input
          type="email"
          name="email"
          onChange={handleChange}
          className="shadow appearance-none border border-gray-500 rounded-lg px-6"
        ></input>
      </div>
      <Button label="Start Quiz" />
    </div>
  );
};

export default Intake;
