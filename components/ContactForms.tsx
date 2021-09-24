import React, { useState } from "react";
import { Button } from "./ui/Button";

const ContactForms = (props) => {
  const [teacherInput, setTeacherInput] = useState("");
  const [bootcamperInput, setBootcamperInput] = useState("");
  const [teacherButtonEnabled, setTeacherButtonEnabled] = useState(true);
  const [bootcamperButtonEnabled, setBootcamperButtonEnabled] = useState(true);

  const notifyTeacherSignup = async () => {
    if (teacherInput.length > 0) {
      setTeacherButtonEnabled(false);
      setTeacherInput("");
      const url =
        "https://math-app-1.herokuapp.com/notifications?product=teacher";
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
          email: teacherInput,
        }),
      };
      await fetch(url, options);
    }
  };
  const notifyBootcamperSignup = async () => {
    if (bootcamperInput.length > 0) {
      setBootcamperButtonEnabled(false);
      setBootcamperInput("");
      const url =
        "https://math-app-1.herokuapp.com/notifications?product=bootcamper";
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
          email: bootcamperInput,
        }),
      };
      await fetch(url, options);
    }
  };

  return (
    <div className="flex flex-col ">
      <div className="lg:text-center">
        <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
          Contact Us
        </h2>
      </div>
      <div className="p-4 flex flex-col items-center justify-center gap-8">
        <div className="md:grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg w-full p-4">
            <div className="flex flex-col gap-4">
              <p className="font-bold">Are You An Educator?</p>
              <p className="">
                We are always looking for passionate teachers to partner with.
                If you are a math educator we would love to digitize your
                resources for free!
              </p>
              <p className="">
                Please reach out if you want us to convert your resources into
                digital mini games.
              </p>
              <div className="bg-white flex sm:flex-row gap-4 items-center rounded-lg">
                <input
                  id="teacher"
                  type="text"
                  value={teacherInput}
                  onChange={(e) => setTeacherInput(e.target.value)}
                  autoComplete="off"
                  className={`text-left p-2 border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 text-md lg:text-md`}
                  placeholder="Email"
                />
                <Button
                  disabled={!teacherButtonEnabled}
                  backgroundColor="blue"
                  textColor="white"
                  label="Learn More"
                  onClick={notifyTeacherSignup}
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg w-full p-4">
            <div className="flex flex-col gap-4">
              <p className="font-bold">Are You Looking To Learn How To Code?</p>
              <p className="">
                Gain real world experience by building educational resources for
                teachers. Become a hirable front-end developer in just four
                months.
              </p>
              <p className="">
                Enter your email below to learn more about our course and
                program! No experience necessary!
              </p>
              <div className="bg-white flex sm:flex-row gap-4 items-center rounded-lg">
                <input
                  id="bootcamper"
                  type="text"
                  value={bootcamperInput}
                  onChange={(e) => setBootcamperInput(e.target.value)}
                  autoComplete="off"
                  className={`text-left p-2 border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 text-md lg:text-md`}
                  placeholder="Email"
                />
                <Button
                  disabled={!bootcamperButtonEnabled}
                  backgroundColor="blue"
                  textColor="white"
                  label="Learn More"
                  onClick={notifyBootcamperSignup}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForms;
