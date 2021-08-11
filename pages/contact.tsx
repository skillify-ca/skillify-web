import React, { useState } from "react";
import DiagnosticNavbar from "../components/DiagnosticNavbar";
import { Button } from "../components/stories/Button";

export default function Contact(props) {
  const [teacherInput, setTeacherInput] = useState("");
  const [bootcamperInput, setBootcamperInput] = useState("");
  const [teacherButtonEnabled, setTeacherButtonEnabled] = useState(true);
  const [bootcamperButtonEnabled, setBootcamperButtonEnabled] = useState(true);

  const notifyTeacherSignup = async () => {
    if (teacherInput.length > 0) {
      setTeacherButtonEnabled(false)
      setTeacherInput("")
      const url = "https://math-app-1.herokuapp.com/notifications?product=teacher";
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
      setBootcamperButtonEnabled(false)
      setBootcamperInput("")
      const url = "https://math-app-1.herokuapp.com/notifications?product=bootcamper";
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
    <div className="flex flex-col overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100 h-screen ">
      <DiagnosticNavbar />
      <div className="p-4 flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center bg-white shadow-lg gap-8 rounded-lg p-4">
          <p className="text-xl font-bold">Join our contact list</p>
          <div className="flex flex-col gap-4 sm:max-w-2xl">
            <p>
              Math Champ is COMING SOON with a suite of online math activities
              and games to help your child become better at math. Enter your
              email to be notified when we go live.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="bg-white shadow-lg rounded-lg w-full p-4">
            <div className="flex flex-col gap-4">
              <p className="font-bold">Teacher Tools</p>
              <p className="">
                If you are a math educator we would love to hear from you. We are always looking for passionate teachers to partner with. We work with K-12 educators to design fun digital resources for online learning. 
                If you have ideas for assignments or lessons that you'd like for us to build please reach out!
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
                  label="Notify Me"
                  onClick={notifyTeacherSignup}
                />
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg w-full p-4">
            <div className="flex flex-col gap-4">
              <p className="font-bold">Learn to code</p>
              <p className="">
                If you are interested in learning how to code then enter your email to get notified when our next cohort-based program will be launching. 
                We offer small class sizes and a personalized curriculum and assignments to train you into a software developer with no experience necessary. 
                You will learn to code by building educational content and tools for math teachers, but you can apply the concepts and theory to build any other project that you've always been dreaming of!
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
                  label="Notify Me"
                  onClick={notifyBootcamperSignup}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
