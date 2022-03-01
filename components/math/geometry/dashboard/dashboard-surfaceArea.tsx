import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../../../ui/Button";

const SurfaceAreaDashboardPage = ({ data }) => {
  const [currentStudentIndex, setCurrentStudentIndex] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const questionData = [
    "A net for the rectangular prism is shown on the grid. On the net, label each face of the prism. Each square on the grid represents 1cm^2.",
    "Write a multiplication question for the area of each face for the rectangular prisms in question 1, image also provided from question 1. Then find the surface area of the prism",
    "A net for the triangular prism is shown on the grid. On the net, label each face of the prism. Each square on the grid represents 1cm^2.",
    "Write a multiplication question for the area of each face for the triangular prisms in question 3, image also provided from question 3. Then find the surface area of the prism",
    "Explain how the net of a prism helps you find the surface area of a prism",
    "Draw a net for the cube on the grid",
  ];

  const getTimeSpentAvg = () => {
    return "2 minutes and 33 seconds";
  };

  return (
    <div className="flex flex-col bg-blue-300 heropattern-architect-blue-100">
      <div className="flex flex-col items-center gap-8 p-8">
        <div className="flex flex-col gap-8 p-4 shadow-lg bg-blue-50 rounded-xl">
          <div>
            <p className="w-full text-2xl font-bold">Surface Area Assignment</p>
            <p className="">
              An assignment that tests students' knowledge about surface areas
              of various prisms
            </p>
          </div>
          <Link href="/teachers/djacob/surfaceArea">
            <Button
              label="Preview Assignment"
              backgroundColor="white"
              textColor="blue-500"
            />
          </Link>
          <div className="grid grid-cols-12 gap-8 ">
            <div className="flex flex-col col-span-12 gap-8 p-8 text-center transition-all duration-500 ease-in-out transform bg-white shadow-lg sm:col-span-4 rounded-xl hover:shadow-2xl hover:scale-105 erounded-xl">
              <p className="text-2xl font-bold">Average Time Spent</p>{" "}
              <p>{getTimeSpentAvg()}</p>
            </div>
            <div className="flex flex-col col-span-12 gap-8 p-8 text-center transition-all duration-500 ease-in-out transform bg-white shadow-lg sm:col-span-4 rounded-xl hover:shadow-2xl hover:scale-105 erounded-xl">
              <p className="text-2xl font-bold">Hardest Question</p>{" "}
              <p>Question 6</p>
            </div>
            <div className="flex flex-col col-span-12 gap-8 p-8 text-center transition-all duration-500 ease-in-out transform bg-white shadow-lg sm:col-span-4 hover:shadow-2xl hover:scale-105 rounded-xl">
              <p className="text-2xl font-bold">Missing Assignments</p> <p>0</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 p-4 shadow-lg bg-blue-50 rounded-xl">
          <p className="w-full text-2xl font-bold">Students</p>
          <select
            className="p-4 border-2 border-blue-400"
            value={currentStudentIndex}
            onChange={(e) =>
              setCurrentStudentIndex(Number.parseInt(e.target.value))
            }
          >
            {data.giza_student_grades.map((student, index) => (
              <option value={index}>{student.student_name}</option>
            ))}
          </select>
          <div className="grid grid-cols-12 gap-8 ">
            <div className="flex flex-col col-span-12 gap-8 p-8 text-center transition-all duration-500 ease-in-out transform bg-white shadow-lg rounded-xl hover:shadow-2xl hover:scale-105 erounded-xl">
              <p className="text-2xl font-bold">Time Spent</p>{" "}
              <p>{getTimeSpentAvg()}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-12 rounded-t-xl">
              <div className="grid items-center justify-between grid-cols-12 py-4 overflow-scroll font-bold bg-yellow-600 rounded-t-xl">
                <p className="col-span-2 text-center">#</p>
                <p className="col-span-6 text-center">Question</p>
                <p className="col-span-4 text-center">Answer</p>
                {questionData !== null &&
                  questionData.map((question, index) => (
                    <div
                      onClick={() => setSelectedQuestion(index)}
                      className={`grid grid-cols-12 col-span-12 items-center justify-between ${
                        index === selectedQuestion
                          ? `bg-yellow-200 border-t-2 border-b-2 border-yellow-800`
                          : `bg-yellow-400`
                      } hover:bg-yellow-200 overflow-visible`}
                    >
                      <p className="col-span-2 text-center">{index + 1}</p>
                      <div className="col-span-6">
                        <p>{questionData[index]}</p>
                      </div>
                      <div className="col-span-4"></div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="bg-green-400 md:col-span-12 rounded-t-xl">
              <p className="w-full px-4 py-2 text-xl font-bold">
                Guess History
              </p>
            </div>
          </div>
        </div>
      </div>
      )
    </div>
  );
};

export default SurfaceAreaDashboardPage;
