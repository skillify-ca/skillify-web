import React, { useState } from "react";
import { Grade } from "../../pages/api/skill";
import { Button } from "../ui/Button";

type DiagnosticTestFormProps = {
  onClick: (grade: string) => void;
  email: string;
  setEmail: (email: string) => void;
  firstName: string;
  setFirstName: (name: string) => void;
  lastName: string;
  setLastName: (name: string) => void;
  grade: string;
  setGrade: (gradeRange: string) => void;
};

const DiagnosticTestForm = ({
  onClick,
  email,
  setEmail,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  grade,
  setGrade,
}: DiagnosticTestFormProps) => {
  const onGradeChange = (e: any) => {
    setGrade(e.target.value);
  };
  return (
    <div className="flex flex-col">
      <div className="w-full shadow-lg bg-blue-100 p-4 border-b-4 border-blue-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-around">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            <span className="block">Discover your child's math level</span>
            <span className="block">
              with{" "}
              <span className="text-blue-700">
                {" "}
                Math Champ's Diagnostic Test{" "}
              </span>{" "}
              today.
            </span>
          </h2>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-xl p-8 mt-8 items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-1 w-full gap-4">
            <p className="text-lg">
              Once your child completes the assessment, we will provide you with{" "}
              <b> personalized </b>
              resources to help your child become better at math - no matter
              what level they are at.
            </p>

            <div className="grid grid-cols-2 items-center ">
              <p className="font-bold  mr-4">Grade</p>
              <div className="flex flex-row items-center gap-4">
                <div className="relative inline-flex">
                  <svg
                    className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 412 232"
                  >
                    <path
                      d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                      fill="#648299"
                      fillRule="nonzero"
                    />
                  </svg>
                  <select
                    value={grade}
                    onChange={onGradeChange}
                    className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                  >
                    <option>Grade 1</option>
                    <option>Grade 2</option>
                    <option>Grade 3</option>
                    <option>Grade 4</option>
                    <option>Grade 5</option>
                    <option>Grade 6</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center ">
              <p className="font-bold mr-4">Parent/Guardian Email</p>
              <input
                id="guess"
                type="text"
                autoComplete="off"
                className={`w-full outline-none focus:outline-none border border-solid border-black text-left p-2 text-md lg:text-md rounded-xl`}
                placeholder="jdoe@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 items-center ">
              <p className="font-bold mr-4">Student First Name</p>
              <input
                id="guess"
                type="text"
                autoComplete="off"
                className={`w-full outline-none focus:outline-none border border-solid border-black text-left p-2 text-md lg:text-md rounded-xl`}
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 items-center">
              <p className="font-bold mr-4">Student Last Name</p>
              <input
                id="guess"
                type="text"
                autoComplete="off"
                className={`w-full outline-none focus:outline-none border border-solid border-black text-left p-2 text-md lg:text-md rounded-xl`}
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 items-center ">
              <Button
                backgroundColor="blue"
                label="Start"
                textColor="white"
                onClick={(e) => onClick(grade)}
              />
            </div>
          </div>

          <div className="flex justify-center">
            {" "}
            <img src="/images/studyingPic.png" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticTestForm;
