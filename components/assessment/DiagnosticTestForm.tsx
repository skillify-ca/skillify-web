import React, { useState } from "react";
import { Grade } from "../../pages/api/skill";
import { Button } from "../ui/Button";

type DiagnosticTestFormProps = {
  onClick: (grade: string) => void;
  email: string;
  setEmail: (email: string) => void;
  name: string;
  setName: (name: string) => void;
  grade: string;
  setGrade: (gradeRange: Grade) => void;
};

const DiagnosticTestForm = ({
  onClick,
  email,
  setEmail,
  name,
  setName,
  grade,
  setGrade,
}: DiagnosticTestFormProps) => {
  const onGradeChange = (e: any) => {
    setGrade(e.target.value);
  };

  return (
    <div>
      {" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col items-center bg-white shadow-lg gap-8 rounded-lg p-4">
          <div className="flex flex-col gap-4 sm:max-w-2xl">
            <h1 className="text-3xl font-bold">Diagnostic Test</h1>
            <p>
              At the end of the test we provide you with personalized resources
              to help your child get better at math no matter what level they
              are at.
            </p>
            <img
              className="w-full sm:w-1/2 object-cover rounded-xl"
              alt="student-image"
              src="/images/learnPic.png"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 p-8 items-center justify-center bg-blue-50 shadow-lg rounded-lg">
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-gray-700">Grade</p>
            <div className="flex flex-row items-center justify-center w-full gap-4">
              <div className="relative inline-flex">
                <svg
                  className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 412 232"
                >
                  <path
                    d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                    fill="#648299"
                    fill-rule="nonzero"
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
          <div>
            <p className="font-bold">Adult's Email</p>
            <input
              id="guess"
              type="text"
              autoComplete="off"
              className={`text-left p-2 border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 text-md lg:text-md`}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <p className="font-bold">Student's Name</p>
            <input
              id="guess"
              type="text"
              autoComplete="off"
              className={`text-left p-2 border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 text-md lg:text-md`}
              placeholder="First Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <Button
            backgroundColor="blue"
            label="Start"
            textColor="white"
            onClick={(e) => onClick(grade)}
          />
        </div>
      </div>
    </div>
  );
};

export default DiagnosticTestForm;
